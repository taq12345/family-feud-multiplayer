import OpenAI from "openai";
import { SurveyQuestion } from "../data/questions.js";

const openai = new OpenAI({
  baseURL: process.env.AI_INTEGRATIONS_OPENAI_BASE_URL ?? "http://localhost",
  apiKey: process.env.AI_INTEGRATIONS_OPENAI_API_KEY ?? "unconfigured",
});

export type GenerateResult =
  | { valid: false; reason: string }
  | { valid: true; questions: SurveyQuestion[] };

const BATCH_ATTEMPT_TIMEOUT_MS = 60000;  // 60s per batch attempt
const VALIDATE_TIMEOUT_MS      = 15000;  // 15s for the topic-validation call
const OVERALL_TIMEOUT_MS       = 90000;  // 90s hard cap for the entire generateCustomQuestions call
const MIN_ANSWERS = 3;
const MAX_ANSWERS = 8;
const POINTS_TARGET = 100;

const OFFENSIVE_PATTERN = /\b(sex|porn|nude|naked|kill|murder|drug|terror|racist|slur|profan)\b/i;

// Patterns that clearly indicate gibberish / non-topics
const GIBBERISH_PATTERNS = [
  /^(.)\1+$/,            // all same character: xxx, aaa, 111
  /^[^a-zA-Z]+$/,        // no letters at all: 123, @#$
  /^[qwertyuiop]{5,}$/i, // top keyboard row mash
  /^[asdfghjkl]{5,}$/i,  // middle keyboard row mash
  /^[zxcvbnm]{5,}$/i,    // bottom keyboard row mash
];

function isGibberish(topic: string): boolean {
  return GIBBERISH_PATTERNS.some(p => p.test(topic));
}

/**
 * Returns a promise that rejects with a timeout error after `ms` milliseconds.
 * Also propagates an optional parent abort signal.
 * Returns the promise AND a cleanup fn that must always be called to avoid timer leaks.
 */
function makeTimeoutRace(ms: number, parentSignal?: AbortSignal): { timeoutPromise: Promise<never>; cleanup: () => void } {
  let timeoutId: ReturnType<typeof setTimeout>;
  let onParentAbort: (() => void) | undefined;
  let reject_: (err: Error) => void;

  const timeoutPromise = new Promise<never>((_, reject) => {
    reject_ = reject;
    timeoutId = setTimeout(() => reject(new Error("timeout")), ms);
    if (parentSignal) {
      onParentAbort = () => reject(new Error("parent_aborted"));
      parentSignal.addEventListener("abort", onParentAbort);
    }
  });

  const cleanup = () => {
    clearTimeout(timeoutId);
    if (parentSignal && onParentAbort) {
      parentSignal.removeEventListener("abort", onParentAbort);
    }
  };

  return { timeoutPromise, cleanup };
}

async function validateTopic(topic: string, parentSignal?: AbortSignal): Promise<{ valid: boolean; reason?: string }> {
  if (parentSignal?.aborted) return { valid: true };

  const { timeoutPromise, cleanup } = makeTimeoutRace(VALIDATE_TIMEOUT_MS, parentSignal);
  try {
    const response = await Promise.race([
      openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [{
          role: "user",
          content: `Is "${topic}" a real, meaningful topic suitable for Family Feud survey questions? It must be a recognisable concept, object, activity, place, person, or theme that most people know and could be meaningfully surveyed about. Reject nonsense strings, gibberish, random characters, inappropriate adult content, or anything so obscure that no one could survey about it. Reply ONLY with JSON: {"valid":true} or {"valid":false,"reason":"brief reason"}`,
        }],
        max_tokens: 80,
        response_format: { type: "json_object" },
      }),
      timeoutPromise,
    ]);
    const content = response.choices[0]?.message?.content ?? "";
    const jsonMatch = content.match(/\{[\s\S]*\}/);
    if (!jsonMatch) return { valid: true };
    const parsed = JSON.parse(jsonMatch[0]) as { valid?: boolean; reason?: string };
    if (parsed.valid === false) {
      return {
        valid: false,
        reason: parsed.reason
          ? `"${topic}" isn't a suitable topic: ${parsed.reason}`
          : "That topic isn't suitable for Family Feud. Please choose a real, family-friendly topic.",
      };
    }
    return { valid: true };
  } catch {
    // On timeout or any error, default to valid so we don't block legitimate topics
    return { valid: true };
  } finally {
    cleanup();
  }
}

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

function parseAndBuildQuestion(
  raw: { question?: string; answers?: Array<{ text?: string; points?: number }> },
  id: number,
): SurveyQuestion | null {
  if (!raw.question || !Array.isArray(raw.answers)) return null;
  const validAnswers = raw.answers
    .map(a => ({ text: String(a?.text ?? "").trim(), points: Number(a?.points) }))
    .filter(a => a.text.length > 0 && isFinite(a.points) && a.points >= 1);
  if (validAnswers.length < MIN_ANSWERS || validAnswers.length > MAX_ANSWERS) return null;
  const pts = normalizePoints(validAnswers.map(a => a.points));
  if (!pts) return null;
  return {
    id,
    question: String(raw.question).trim(),
    answers: validAnswers.map((a, i) => ({ text: a.text, points: pts[i] })),
  };
}

async function generateAllQuestions(
  topic: string,
  count: number,
  parentSignal?: AbortSignal,
): Promise<SurveyQuestion[] | null> {
  const prompt = `Generate exactly ${count} Family Feud survey questions about "${topic}". Make them genuinely FUN and surprising — the kind that get players laughing, arguing, or saying "oh obviously!" when the answer is revealed.

Requirements:
- Cover DIFFERENT angles of "${topic}" — mix serious, silly, nostalgic, and unexpected. Avoid safe/obvious angles that everyone would immediately guess.
- Use varied classic Family Feud phrasing. Mix these styles freely:
    • "Name something..." / "Name a..."
    • "We asked 100 people..." / "We surveyed 100 [relevant group]..."
    • "What's the first thing that comes to mind when you think of..."
    • "If [topic-related thing] could talk, what would it say?"
    • "What would you find in/at a [topic-related place]?"
    • "Name a [topic-related word] that [funny condition]"
- Answers should reflect what real survey respondents would say — include at least one answer that's a bit unexpected or funny but still plausible.
- Each question must have 3–6 answers with points summing to 100, ordered highest to lowest.
- Answer text must be VERY SHORT: 1–4 words max.
- Family-friendly only.

Reply ONLY with a JSON object of this exact shape, no extra text:
{"questions":[
  {"question":"...","answers":[{"text":"...","points":40},{"text":"...","points":30},{"text":"...","points":20},{"text":"...","points":10}]},
  ...
]}`;

  for (let attempt = 0; attempt < 3; attempt++) {
    if (parentSignal?.aborted) return null;

    const { timeoutPromise, cleanup } = makeTimeoutRace(BATCH_ATTEMPT_TIMEOUT_MS, parentSignal);
    try {
      const response = await Promise.race([
        openai.chat.completions.create({
          model: "gpt-4o",
          messages: [{ role: "user", content: prompt }],
          max_tokens: Math.min(2500, 350 * count + 200),
          temperature: 1.3,
          response_format: { type: "json_object" },
        }),
        timeoutPromise,
      ]);

      const choice = response.choices[0];
      const rawContent = choice?.message?.content ?? "";
      console.log(`[questionGenerator] batch attempt=${attempt} finish=${choice?.finish_reason} len=${rawContent.length}`);

      if (!rawContent.trim()) continue;

      let parsed: Array<{ question?: string; answers?: Array<{ text?: string; points?: number }> }>;
      try {
        const parsedObj = JSON.parse(rawContent) as { questions?: unknown };
        if (!Array.isArray(parsedObj.questions)) continue;
        parsed = parsedObj.questions as Array<{ question?: string; answers?: Array<{ text?: string; points?: number }> }>;
      } catch {
        continue;
      }

      if (parsed.length < count) continue;

      const questions: SurveyQuestion[] = [];
      for (let i = 0; i < count; i++) {
        const q = parseAndBuildQuestion(parsed[i], 9000 + i);
        if (q) questions.push(q);
      }

      if (questions.length === count) return questions;

    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      console.error(`[questionGenerator] batch attempt=${attempt} error: ${msg}`);
      if (parentSignal?.aborted) return null;
    } finally {
      cleanup();
    }
  }
  return null;
}

export async function generateCustomQuestions(
  topic: string,
  count: number
): Promise<GenerateResult> {
  const trimmed = topic.trim();

  // --- Local validation (instant, no AI cost) ---
  if (trimmed.length < 2) {
    return { valid: false, reason: "Please enter a more specific topic." };
  }
  if (OFFENSIVE_PATTERN.test(trimmed)) {
    return { valid: false, reason: "That topic isn't suitable for Family Feud. Please choose a family-friendly topic." };
  }
  if (isGibberish(trimmed)) {
    return { valid: false, reason: "That doesn't look like a real topic. Try something like \"Pizza\", \"Space\", or \"Summer Vacation\"." };
  }

  // --- Overall hard cap: 90 seconds for the entire AI flow ---
  const overallController = new AbortController();
  const overallTimeoutId = setTimeout(() => overallController.abort(), OVERALL_TIMEOUT_MS);
  const overallSignal = overallController.signal;

  try {
    // AI topic validation — single call before generation
    const topicCheck = await validateTopic(trimmed, overallSignal);
    if (!topicCheck.valid) {
      return { valid: false, reason: topicCheck.reason ?? "That topic isn't suitable for Family Feud. Please choose a real, family-friendly topic." };
    }

    if (overallSignal.aborted) {
      return { valid: false, reason: "Question generation timed out. Please try again." };
    }

    // Single batch call — GPT chooses its own distinct angles for all questions
    const questions = await generateAllQuestions(trimmed, count, overallSignal);

    if (overallSignal.aborted) {
      return { valid: false, reason: "Question generation timed out. Please try again." };
    }

    if (!questions) {
      return {
        valid: false,
        reason: "Questions couldn't be generated. Please try again — it usually works on a retry.",
      };
    }

    return { valid: true, questions: questions.map((q, i) => ({ ...q, id: 9000 + i })) };
  } finally {
    clearTimeout(overallTimeoutId);
    overallController.abort(); // clean up any lingering listeners
  }
}
