import Anthropic from "@anthropic-ai/sdk";
import { SurveyQuestion } from "../data/questions.js";

const anthropic = new Anthropic({
  apiKey: process.env.AI_INTEGRATIONS_ANTHROPIC_API_KEY ?? "unconfigured",
});

export type GenerateResult =
  | { valid: false; reason: string }
  | { valid: true; questions: SurveyQuestion[] };

const PER_ATTEMPT_TIMEOUT_MS = 30000;  // 30s per individual API call attempt
const VALIDATE_TIMEOUT_MS    = 15000;  // 15s for the topic-validation call
const OVERALL_TIMEOUT_MS     = 90000;  // 90s hard cap for the entire generateCustomQuestions call
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
      anthropic.messages.create({
        model: "claude-3-5-sonnet-20241022",
        max_tokens: 500,
        messages: [{
          role: "user",
          content: `Is "${topic}" a real, meaningful topic suitable for Family Feud survey questions? It must be a recognisable concept, object, activity, place, person, or theme that most people know and could be meaningfully surveyed about. Reject nonsense strings, gibberish, random characters, inappropriate adult content, or anything so obscure that no one could survey about it. Reply ONLY with JSON: {"valid":true} or {"valid":false,"reason":"brief reason"}`,
        }],
      }),
      timeoutPromise,
    ]);
    const content = (response.content[0]?.type === "text") ? response.content[0].text : "";
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

async function generateOneQuestion(
  topic: string,
  angle: string,
  index: number,
  parentSignal?: AbortSignal,
): Promise<SurveyQuestion | null> {
  const prompt = `Generate 1 Family Feud survey question about "${topic}" with the angle: ${angle}.
Reply ONLY with JSON: {"question":"Name something...","answers":[{"text":"...","points":40},{"text":"...","points":30},{"text":"...","points":20},{"text":"...","points":10}]}
Rules:
- 3–6 answers, points sum to 100, family-friendly, classic Family Feud phrasing
- Keep answer text VERY SHORT: 1–4 words max, like real Family Feud answers (e.g. "Shah Rukh Khan", "Song/Music", "Dance", "Colorful Outfits", "Romance")`;

  for (let attempt = 0; attempt < 3; attempt++) {
    // Bail immediately if the overall budget is already spent
    if (parentSignal?.aborted) return null;

    const { timeoutPromise, cleanup } = makeTimeoutRace(PER_ATTEMPT_TIMEOUT_MS, parentSignal);
    try {
      const response = await Promise.race([
        anthropic.messages.create({
          model: "claude-3-5-sonnet-20241022",
          max_tokens: 3000,
          messages: [{ role: "user", content: prompt }],
        }),
        timeoutPromise,
      ]);
      const rawContent = (response.content[0]?.type === "text") ? response.content[0].text : "";
      console.log(`[questionGenerator] Q${index} attempt=${attempt} stopReason=${response.stop_reason} len=${rawContent.length}`);

      if (!rawContent.trim()) continue;

      const parsed = parseQuestion(rawContent);
      if (!parsed) continue;

      const q = buildQuestion(parsed, 9000 + index);
      if (q) return q;
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      console.error(`[questionGenerator] Q${index} attempt=${attempt} error: ${msg}`);
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
    // AI topic validation — single call before spinning up parallel generation
    const topicCheck = await validateTopic(trimmed, overallSignal);
    if (!topicCheck.valid) {
      return { valid: false, reason: topicCheck.reason ?? "That topic isn't suitable for Family Feud. Please choose a real, family-friendly topic." };
    }

    if (overallSignal.aborted) {
      return { valid: false, reason: "Question generation timed out. Please try again." };
    }

    // Parallel question generation — all questions share the overall signal for early bail-out
    const angles = Array.from({ length: count }, (_, i) => QUESTION_ANGLES[i % QUESTION_ANGLES.length]);
    const results = await Promise.all(
      angles.map((angle, i) => generateOneQuestion(trimmed, angle, i, overallSignal))
    );

    if (overallSignal.aborted) {
      return { valid: false, reason: "Question generation timed out. Please try again." };
    }

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
  } finally {
    clearTimeout(overallTimeoutId);
    overallController.abort(); // clean up any lingering listeners
  }
}
