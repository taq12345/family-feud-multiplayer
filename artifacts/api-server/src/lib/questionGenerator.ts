import OpenAI from "openai";
import { SurveyQuestion } from "../data/questions.js";

const openai = new OpenAI({
  baseURL: process.env.AI_INTEGRATIONS_OPENAI_BASE_URL ?? "http://localhost",
  apiKey: process.env.AI_INTEGRATIONS_OPENAI_API_KEY ?? "unconfigured",
});

export type GenerateResult =
  | { valid: false; reason: string }
  | { valid: true; questions: SurveyQuestion[] };

const AI_TIMEOUT_MS = 45000;
const MIN_ANSWERS = 3;
const MAX_ANSWERS = 8;
const POINTS_TARGET = 100;

// Different "angles" to ensure parallel single-question calls produce varied questions
const QUESTION_ANGLES = [
  "general / everyday life",
  "famous people or celebrities",
  "things you see, eat, or buy",
  "activities or experiences",
  "cultural traditions or history",
  "feelings or emotions people associate with it",
  "places or locations",
  "objects or items",
];

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
    return { question: String(parsed.question).trim(), answers: parsed.answers as { text: string; points: number }[] };
  } catch {
    return null;
  }
}

async function generateOneQuestion(topic: string, angle: string, index: number): Promise<SurveyQuestion | null> {
  const prompt = `Generate exactly 1 Family Feud survey question about "${topic}" focusing on the angle: ${angle}.

Rules:
- Classic Family Feud phrasing ("Name something...", "Name a...", etc.)
- 3 to 6 answer options
- Points must sum to exactly 100, highest first
- Family-friendly only

Reply ONLY with this JSON (no other text):
{"question":"...","answers":[{"text":"...","points":40},{"text":"...","points":30},{"text":"...","points":20},{"text":"...","points":10}]}`;

  try {
    const timeout = new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error("timeout")), AI_TIMEOUT_MS)
    );
    const call = openai.chat.completions.create({
      model: "gpt-5-nano",
      messages: [{ role: "user", content: prompt }],
      max_completion_tokens: 1500,
    });
    const response = await Promise.race([call, timeout]);
    const choice = response.choices[0];
    const rawContent = choice?.message?.content ?? "";
    console.log(`[questionGenerator] Q${index} finish_reason=${choice?.finish_reason} len=${rawContent.length} usage=${JSON.stringify(response.usage)}`);
    return parseQuestion(rawContent) ? {
      id: 9000 + index,
      ...parseQuestion(rawContent)!,
      answers: (() => {
        const parsed = parseQuestion(rawContent)!;
        const validAnswers = parsed.answers
          .map(a => ({ text: String(a?.text ?? "").trim(), points: Number(a?.points) }))
          .filter(a => a.text.length > 0 && isFinite(a.points) && a.points >= 1);
        if (validAnswers.length < MIN_ANSWERS || validAnswers.length > MAX_ANSWERS) return null!;
        const pts = normalizePoints(validAnswers.map(a => a.points));
        if (!pts) return null!;
        return validAnswers.map((a, i) => ({ text: a.text, points: pts[i] }));
      })(),
    } : null;
  } catch (err) {
    console.error(`[questionGenerator] Q${index} error:`, err instanceof Error ? err.message : err);
    return null;
  }
}

function isValidQuestion(q: SurveyQuestion | null): q is SurveyQuestion {
  return q !== null && Array.isArray(q.answers) && q.answers.length >= MIN_ANSWERS;
}

export async function generateCustomQuestions(
  topic: string,
  count: number
): Promise<GenerateResult> {
  // First, do a quick topic validity check with a tiny call
  try {
    const validityTimeout = new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error("timeout")), 20000)
    );
    const validityCall = openai.chat.completions.create({
      model: "gpt-5-nano",
      messages: [{
        role: "user",
        content: `Is "${topic}" a valid topic for Family Feud questions? Valid means it's specific, family-friendly, and not gibberish/offensive/a single character.
Reply with ONLY: YES or NO`,
      }],
      max_completion_tokens: 500,
    });
    const validityResponse = await Promise.race([validityCall, validityTimeout]);
    const verdict = (validityResponse.choices[0]?.message?.content ?? "").trim().toUpperCase();
    console.log(`[questionGenerator] topic="${topic}" validity=${verdict}`);
    if (verdict.startsWith("NO")) {
      return {
        valid: false,
        reason: `"${topic}" doesn't work well for Family Feud. Try something more specific, like 'pizza', 'Bollywood movies', or 'superheroes'.`,
      };
    }
  } catch (err) {
    // If validity check fails, proceed anyway — don't block on this
    console.warn("[questionGenerator] Validity check failed, proceeding:", err instanceof Error ? err.message : err);
  }

  // Generate each question in parallel with a different angle
  const angles = QUESTION_ANGLES.slice(0, count);
  while (angles.length < count) angles.push(QUESTION_ANGLES[angles.length % QUESTION_ANGLES.length]);

  const results = await Promise.all(
    angles.slice(0, count).map((angle, i) => generateOneQuestion(topic, angle, i))
  );

  const questions = results.filter(isValidQuestion).map((q, i) => ({ ...q, id: 9000 + i }));

  if (questions.length !== count) {
    return {
      valid: false,
      reason: `Only ${questions.length} of ${count} questions generated successfully. Please try again — AI generation can be inconsistent.`,
    };
  }

  return { valid: true, questions };
}
