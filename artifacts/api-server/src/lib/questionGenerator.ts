import OpenAI from "openai";
import { SurveyQuestion } from "../data/questions.js";

const openai = new OpenAI({
  baseURL: process.env.AI_INTEGRATIONS_OPENAI_BASE_URL ?? "http://localhost",
  apiKey: process.env.AI_INTEGRATIONS_OPENAI_API_KEY ?? "unconfigured",
});

export type GenerateResult =
  | { valid: false; reason: string }
  | { valid: true; questions: SurveyQuestion[] };

const AI_TIMEOUT_MS = 30000;

export async function generateCustomQuestions(
  topic: string,
  count: number
): Promise<GenerateResult> {
  const prompt = `You are a Family Feud game show question writer. Generate exactly ${count} unique survey questions about the topic: "${topic}".

Each question must:
- Be directly and meaningfully related to the topic "${topic}"
- Be phrased in classic Family Feud style: "Name something...", "Name a...", "What is something people...", etc.
- Have 5 to 8 answer options
- Have answer points that sum to exactly 100
- Be distributed realistically: the most obvious/popular answer gets the most points
- Be appropriate for all ages and family-friendly

If the topic is: gibberish, random characters, nonsensical, inappropriate, offensive, a single character, or so vague it cannot generate meaningful survey questions (e.g. "stuff", "things", "yes", "no")—respond with valid=false.

Respond ONLY with valid JSON in one of these two formats:

Success format:
{
  "valid": true,
  "questions": [
    {
      "question": "Name something you might see in outer space.",
      "answers": [
        { "text": "Stars", "points": 35 },
        { "text": "Planets", "points": 28 },
        { "text": "Asteroids", "points": 16 },
        { "text": "Black holes", "points": 11 },
        { "text": "Comets", "points": 6 },
        { "text": "Space stations", "points": 4 }
      ]
    }
  ]
}

Invalid topic format:
{
  "valid": false,
  "reason": "The topic is not suitable for Family Feud questions."
}`;

  try {
    const aiCall = openai.chat.completions.create({
      model: "gpt-5-nano",
      messages: [{ role: "user", content: prompt }],
      response_format: { type: "json_object" },
      max_completion_tokens: 4000,
    });

    const timeoutPromise = new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error("Question generation timed out")), AI_TIMEOUT_MS)
    );

    const response = await Promise.race([aiCall, timeoutPromise]);
    const content = response.choices[0]?.message?.content;

    if (!content) {
      return { valid: false, reason: "The AI returned an empty response. Please try again." };
    }

    const parsed = JSON.parse(content) as {
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

    if (!Array.isArray(parsed.questions) || parsed.questions.length === 0) {
      return { valid: false, reason: "No valid questions were generated. Please try a different topic." };
    }

    const questions: SurveyQuestion[] = parsed.questions
      .slice(0, count)
      .map((q, i) => ({
        id: 9000 + i,
        question: String(q.question ?? "").trim(),
        answers: (Array.isArray(q.answers) ? q.answers : [])
          .map(a => ({
            text: String(a.text ?? "").trim(),
            points: Math.max(1, Math.round(Number(a.points) || 1)),
          }))
          .filter(a => a.text.length > 0),
      }))
      .filter(q => q.question.length > 0 && q.answers.length >= 3);

    if (questions.length === 0) {
      return { valid: false, reason: "Generated questions were invalid. Please try a different topic." };
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
