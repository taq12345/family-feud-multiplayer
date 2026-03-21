import OpenAI from "openai";

const openai = new OpenAI({
  baseURL: process.env.AI_INTEGRATIONS_OPENAI_BASE_URL,
  apiKey: process.env.AI_INTEGRATIONS_OPENAI_API_KEY ?? "placeholder",
});

// In-memory cache: "canonical|||submitted" -> boolean
const matchCache = new Map<string, boolean>();

function cacheKey(canonical: string, submitted: string): string {
  return `${canonical.toLowerCase()}|||${submitted.toLowerCase()}`;
}

/** Strip punctuation/symbols, lowercase, collapse whitespace */
function normalize(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

/** Minimal Porter-style stemmer for English */
function stem(word: string): string {
  let w = word.toLowerCase();
  // Step 1: common suffixes
  if (w.length > 6 && w.endsWith("ational")) return w.slice(0, -7) + "ate";
  if (w.length > 4 && w.endsWith("ing")) {
    const base = w.slice(0, -3);
    if (base.length >= 2) return base.endsWith(base[base.length - 1]) && base.length > 3 ? base.slice(0, -1) : base;
  }
  if (w.length > 4 && w.endsWith("ies")) return w.slice(0, -3) + "i";
  if (w.length > 4 && w.endsWith("ing")) return w.slice(0, -3);
  if (w.length > 4 && w.endsWith("ness")) return w.slice(0, -4);
  if (w.length > 4 && w.endsWith("ment")) return w.slice(0, -4);
  if (w.length > 4 && w.endsWith("tion")) return w.slice(0, -4) + "t";
  if (w.length > 4 && w.endsWith("able")) return w.slice(0, -4);
  if (w.length > 4 && w.endsWith("ible")) return w.slice(0, -4);
  if (w.length > 3 && w.endsWith("ing")) return w.slice(0, -3);
  if (w.length > 3 && w.endsWith("ely")) return w.slice(0, -2);
  if (w.length > 3 && w.endsWith("ed")) {
    const base = w.slice(0, -2);
    if (base.length >= 2) return base.endsWith(base[base.length - 1]) && base.length > 3 ? base.slice(0, -1) : base;
  }
  if (w.length > 3 && w.endsWith("er")) return w.slice(0, -2);
  if (w.length > 3 && w.endsWith("ly")) return w.slice(0, -2);
  if (w.length > 2 && w.endsWith("es") && !["goes", "does", "toes", "foes"].includes(w)) return w.slice(0, -2);
  if (w.length > 2 && w.endsWith("s") && !w.endsWith("ss") && !["his", "hers", "its", "was", "has", "is", "as", "us"].includes(w)) return w.slice(0, -1);
  return w;
}

function stemmedTokens(text: string): Set<string> {
  return new Set(
    normalize(text)
      .split(" ")
      .filter(Boolean)
      .map(stem)
  );
}

/** Check if stemmed token sets overlap sufficiently */
function stemmedMatch(submitted: string, canonical: string): boolean {
  const submittedStems = stemmedTokens(submitted);
  const canonicalStems = stemmedTokens(canonical);

  if (submittedStems.size === 0 || canonicalStems.size === 0) return false;

  // All submitted stems must appear in canonical stems, or vice-versa
  // (handles single-word and multi-word overlap)
  const submittedArr = [...submittedStems];
  const canonicalArr = [...canonicalStems];

  // Single-word answers: exact stemmed match
  if (submittedStems.size === 1 && canonicalStems.size === 1) {
    return submittedArr[0] === canonicalArr[0];
  }

  // Multi-word: count overlapping stems
  const overlap = submittedArr.filter(s => canonicalStems.has(s)).length;
  const minSize = Math.min(submittedStems.size, canonicalStems.size);
  // Require at least 50% overlap, minimum 1 token
  return overlap > 0 && overlap >= Math.ceil(minSize * 0.5);
}

/** Ask the AI model whether submitted and canonical mean the same thing in context */
async function aiSemanticMatch(submitted: string, canonical: string, question: string): Promise<boolean> {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-5-nano",
      messages: [
        {
          role: "system",
          content:
            "You are a Family Feud judge. Your job is to decide if a player's answer means essentially the same thing as the official survey answer, given the survey question. Consider synonyms, related concepts, alternate phrasings, and cultural equivalents. Respond ONLY with YES or NO.",
        },
        {
          role: "user",
          content: `Survey question: "${question}"\nOfficial answer: "${canonical}"\nPlayer's answer: "${submitted}"\n\nDoes the player's answer mean essentially the same thing as the official answer? YES or NO.`,
        },
      ],
      max_completion_tokens: 1000,
    });
    const verdict = response.choices[0]?.message?.content?.trim().toUpperCase() ?? "";
    return verdict.startsWith("YES");
  } catch (err) {
    console.error("[answerMatcher] AI call failed:", err);
    return false;
  }
}

/**
 * Three-layer answer matcher:
 *   1. Normalize → exact match (handles punctuation, apostrophes, casing)
 *   2. Stem → token overlap match (handles verb forms, plurals)
 *   3. AI semantic judge → synonym / conceptual match (handles grooving=dancing, fridge=refrigerator)
 */
export async function isAnswerMatch(
  submitted: string,
  canonical: string,
  question: string
): Promise<boolean> {
  const key = cacheKey(canonical, submitted);
  if (matchCache.has(key)) return matchCache.get(key)!;

  // Guard: empty or whitespace-only input is never a match
  const normSubmitted = normalize(submitted);
  if (!normSubmitted) {
    matchCache.set(key, false);
    return false;
  }

  // Layer 1: strict normalized equality (handles punctuation, apostrophes, casing)
  const normCanonical = normalize(canonical);
  if (normSubmitted === normCanonical) {
    matchCache.set(key, true);
    return true;
  }

  // Layer 2: stemming
  if (stemmedMatch(normSubmitted, normCanonical)) {
    matchCache.set(key, true);
    return true;
  }

  // Layer 3: AI semantic match
  const aiResult = await aiSemanticMatch(submitted.trim(), canonical, question);
  matchCache.set(key, aiResult);
  return aiResult;
}
