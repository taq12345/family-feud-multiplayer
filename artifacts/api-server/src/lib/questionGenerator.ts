import OpenAI from "openai";
import { SurveyQuestion } from "../data/questions.js";

const openai = new OpenAI({
  baseURL: process.env.AI_INTEGRATIONS_OPENAI_BASE_URL ?? "http://localhost",
  apiKey: process.env.AI_INTEGRATIONS_OPENAI_API_KEY ?? "unconfigured",
});

export type GenerateResult =
  | { valid: false; reason: string }
  | { valid: true; questions: SurveyQuestion[] };

// Per-question timeout — parallel calls, so each must finish well within the socket keepalive window
const PER_QUESTION_TIMEOUT_MS = 50000;
const MIN_ANSWERS = 3;
const MAX_ANSWERS = 8;
const POINTS_TARGET = 100;

// Different "angles" so parallel calls produce varied questions
const QUESTION_ANGLES = [
  "general / everyday life aspects",
  "famous people or celebrities associated with it",
  "things you see, eat, or buy related to it",
  "activities or experiences people enjoy",
  "cultural traditions, history, or unique facts",
  "feelings or emotions people associate with it",
  "places or locations connected to it",
  "objects or items commonly associated with it",
];

const OFFENSIVE_PATTERN = /\b(sex|porn|nude|naked|kill|murder|drug|terror|racist|racist|slur|profan)\b/i;

function normalizePoints(points: number[]): number[] | null {
  const total = points.reduce((s, p) => s + p, 0);
  if (total <= 0) return null;
  const scaled = points.map(p => Math.max(1, Math.round((p / total) * POINTS_TARGET)));
  const scaledTotal = scaled.reduce((s, p) => s + p, 0);
  const diff = POINTS_TARGET - scaledTotal;
  scaled[0] += diff;
  if (scaled[0] <= 0) return null;
  return scaled;
}

function parseQuestion(rawContent: string): { question: string; answers: { text: string; points: number }[] } | null {
  const jsonMatch = rawContent.match(/\{[\s\S]*\}/);
  if (!jsonMatch) return null;
  try {
    const parsed = JSON.parse(jsonMatch[0]) as {
      question?: string;
      answers?: Array<{ text?: string; points?: number }>;
    };
    if (!parsed.question || !Array.isArray(parsed.answers)) return null;
    return {
      question: String(parsed.question).trim(),
      answers: parsed.answers as { text: string; points: number }[],
    };
  } catch {
    return null;
  }
}

function buildQuestion(parsed: { question: string; answers: { text: string; points: number }[] }, id: number): SurveyQuestion | null {
  const validAnswers = parsed.answers
    .map(a => ({ text: String(a?.text ?? "").trim(), points: Number(a?.points) }))
    .filter(a => a.text.length > 0 && isFinite(a.points) && a.points >= 1);
  if (validAnswers.length < MIN_ANSWERS || validAnswers.length > MAX_ANSWERS) return null;
  const pts = normalizePoints(validAnswers.map(a => a.points));
  if (!pts) return null;
  return {
    id,
    question: parsed.question,
    answers: validAnswers.map((a, i) => ({ text: a.text, points: pts[i] })),
  };
}

async function generateOneQuestion(topic: string, angle: string, index: number): Promise<SurveyQuestion | null> {
  const prompt = `Generate 1 Family Feud survey question about "${topic}" with the angle: ${angle}.
Reply ONLY with JSON: {"question":"Name something...","answers":[{"text":"...","points":40},{"text":"...","points":30},{"text":"...","points":20},{"text":"...","points":10}]}
Rules: 3–6 answers, points sum to 100, family-friendly, classic Family Feud phrasing.`;

  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const timeout = new Promise<never>((_, reject) =>
        setTimeout(() => reject(new Error("timeout")), PER_QUESTION_TIMEOUT_MS)
      );
      const call = openai.chat.completions.create({
        model: "gpt-5-nano",
        messages: [{ role: "user", content: prompt }],
        max_completion_tokens: 3000,
        // @ts-ignore — reasoning_effort supported by reasoning models; reduces thinking tokens
        reasoning_effort: "low",
      });
      const response = await Promise.race([call, timeout]);
      const choice = response.choices[0];
      const rawContent = choice?.message?.content ?? "";
      const reasoningTokens = (response.usage as any)?.completion_tokens_details?.reasoning_tokens ?? "?";
      console.log(`[questionGenerator] Q${index} attempt=${attempt} finish=${choice?.finish_reason} len=${rawContent.length} reasoning=${reasoningTokens}`);

      if (!rawContent.trim()) continue;

      const parsed = parseQuestion(rawContent);
      if (!parsed) continue;

      const q = buildQuestion(parsed, 9000 + index);
      if (q) return q;
    } catch (err) {
      console.error(`[questionGenerator] Q${index} attempt=${attempt} error:`, err instanceof Error ? err.message : err);
    }
  }
  return null;
}

export async function generateCustomQuestions(
  topic: string,
  count: number
): Promise<GenerateResult> {
  const trimmed = topic.trim();

  // Basic local validation — avoid obvious bad topics before hitting AI
  if (trimmed.length < 2) {
    return { valid: false, reason: "Please enter a more specific topic." };
  }
  if (OFFENSIVE_PATTERN.test(trimmed)) {
    return { valid: false, reason: "That topic isn't suitable for Family Feud. Please choose a family-friendly topic." };
  }

  // Assign an angle to each question to ensure variety
  const angles = Array.from({ length: count }, (_, i) => QUESTION_ANGLES[i % QUESTION_ANGLES.length]);

  // Generate all questions in parallel
  const results = await Promise.all(
    angles.map((angle, i) => generateOneQuestion(trimmed, angle, i))
  );

  const questions = results
    .filter((q): q is SurveyQuestion => q !== null)
    .map((q, i) => ({ ...q, id: 9000 + i }));

  if (questions.length !== count) {
    const failed = count - questions.length;
    return {
      valid: false,
      reason: `${failed} of ${count} question${failed === 1 ? "" : "s"} couldn't be generated. Please try again — it usually works on a retry.`,
    };
  }

  return { valid: true, questions };
}
