import OpenAI from "openai";
import { SurveyQuestion } from "../data/questions.js";

const openai = new OpenAI({
  baseURL: process.env.AI_INTEGRATIONS_OPENAI_BASE_URL ?? "http://localhost",
  apiKey: process.env.AI_INTEGRATIONS_OPENAI_API_KEY ?? "unconfigured",
});

export type GenerateResult =
  | { valid: false; reason: string }
  | { valid: true; questions: SurveyQuestion[] };

const AI_TIMEOUT_MS = 60000;
const MIN_ANSWERS = 5;
const MAX_ANSWERS = 8;
const POINTS_TARGET = 100;

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

export async function generateCustomQuestions(
  topic: string,
  count: number
): Promise<GenerateResult> {
  const systemPrompt = `You are a Family Feud question writer. Output ONLY valid JSON, no other text.

Success format: {"valid":true,"questions":[{"question":"...","answers":[{"text":"...","points":35},{"text":"...","points":25},{"text":"...","points":20},{"text":"...","points":12},{"text":"...","points":8}]}]}
Invalid format: {"valid":false,"reason":"..."}

Rules: each question needs 5-6 answers, points sum to exactly 100, family-friendly.`;

  const userPrompt = `Generate exactly ${count} Family Feud survey questions about: "${topic}".
Each question: classic Family Feud phrasing, 5-6 answers, points summing to 100, related to "${topic}".
If the topic is nonsensical, gibberish, offensive, or too vague, respond with valid=false.`;

  try {
    const aiCall = openai.chat.completions.create({
      model: "gpt-5-nano",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
      max_completion_tokens: 2000,
    });

    const timeoutPromise = new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error("Question generation timed out")), AI_TIMEOUT_MS)
    );

    const response = await Promise.race([aiCall, timeoutPromise]);
    const choice = response.choices[0];
    const rawContent = choice?.message?.content ?? "";

    console.log(`[questionGenerator] finish_reason=${choice?.finish_reason} content_length=${rawContent.length}`);

    if (!rawContent.trim()) {
      console.error("[questionGenerator] Empty content. finish_reason:", choice?.finish_reason);
      return { valid: false, reason: "The AI returned an empty response. Please try again." };
    }

    // Extract JSON object from the response (model may wrap it in markdown code fences)
    const jsonMatch = rawContent.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      console.error("[questionGenerator] No JSON object found in response:", rawContent.slice(0, 200));
      return { valid: false, reason: "The AI response was not in the expected format. Please try again." };
    }

    const parsed = JSON.parse(jsonMatch[0]) as {
      valid: boolean;
      reason?: string;
      questions?: Array<{
        question: string;
        answers: Array<{ text: string; points: number }>;
      }>;
    };

    if (!parsed.valid) {
      return {
        valid: false,
        reason:
          parsed.reason ??
          "That topic doesn't work well for Family Feud. Try something more specific, like 'pizza', 'beach vacation', or 'superheroes'.",
      };
    }

    if (!Array.isArray(parsed.questions)) {
      return { valid: false, reason: "No valid questions were generated. Please try a different topic." };
    }

    const questions: SurveyQuestion[] = [];
    for (let i = 0; i < parsed.questions.length && questions.length < count; i++) {
      const q = parsed.questions[i];
      const questionText = String(q?.question ?? "").trim();
      if (!questionText) continue;

      if (!Array.isArray(q.answers)) continue;

      const validAnswers = q.answers
        .map(a => ({
          text: String(a?.text ?? "").trim(),
          points: Number(a?.points),
        }))
        .filter(a => a.text.length > 0 && isFinite(a.points) && a.points >= 1);

      if (validAnswers.length < MIN_ANSWERS || validAnswers.length > MAX_ANSWERS) continue;

      const normalizedPoints = normalizePoints(validAnswers.map(a => a.points));
      if (!normalizedPoints) continue;

      questions.push({
        id: 9000 + questions.length,
        question: questionText,
        answers: validAnswers.map((a, idx) => ({
          text: a.text,
          points: normalizedPoints[idx],
        })),
      });
    }

    if (questions.length !== count) {
      return {
        valid: false,
        reason: `Could only generate ${questions.length} of ${count} valid questions for that topic. Please try a different or more specific topic.`,
      };
    }

    return { valid: true, questions };
  } catch (err) {
    console.error("[questionGenerator] Error:", err);
    if (err instanceof Error && err.message.includes("timed out")) {
      return { valid: false, reason: "Question generation timed out. Please try again." };
    }
    return { valid: false, reason: "An error occurred while generating questions. Please try again." };
  }
}
