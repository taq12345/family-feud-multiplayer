import OpenAI from "openai";

if (!process.env.AI_INTEGRATIONS_OPENAI_BASE_URL || !process.env.AI_INTEGRATIONS_OPENAI_API_KEY) {
  console.warn(
    "[answerMatcher] WARNING: AI_INTEGRATIONS_OPENAI_BASE_URL or AI_INTEGRATIONS_OPENAI_API_KEY is not set. " +
    "Layer-3 semantic matching will be disabled (all AI calls will fail-closed to false)."
  );
}

const openai = new OpenAI({
  baseURL: process.env.AI_INTEGRATIONS_OPENAI_BASE_URL ?? "http://localhost",
  apiKey: process.env.AI_INTEGRATIONS_OPENAI_API_KEY ?? "unconfigured",
});

// In-memory cache: "canonical|||submitted" -> boolean (max 1000 entries, FIFO eviction)
const CACHE_MAX = 1000;
const matchCache = new Map<string, boolean>();

function cacheKey(canonical: string, submitted: string): string {
  return `${canonical.toLowerCase()}|||${submitted.toLowerCase()}`;
}

function cacheSet(key: string, value: boolean): void {
  if (matchCache.size >= CACHE_MAX) {
    matchCache.delete(matchCache.keys().next().value!);
  }
  matchCache.set(key, value);
}

/** Strip punctuation/symbols, lowercase, collapse whitespace */
function normalize(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

const VOWELS = new Set(["a", "e", "i", "o", "u"]);
function isConsonant(c: string): boolean {
  return c >= "a" && c <= "z" && !VOWELS.has(c);
}

/** Strip a doubled final consonant (e.g. "runn" → "run", "stopp" → "stop") */
function stripDoubledConsonant(w: string): string {
  if (w.length < 2) return w;
  const last = w[w.length - 1];
  const prev = w[w.length - 2];
  if (isConsonant(last) && last === prev) return w.slice(0, -1);
  return w;
}

/**
 * Lightweight English stemmer.
 * Handles: -ing, -ed (with doubled-consonant unwinding), -ies, -ness, -ment,
 *           -able/-ible, -ly, -er, -es, -s, trailing silent-e.
 * All suffixes reduce to the same base so tense/number variants match:
 *   dance / danced / dancing → "danc"
 *   run   / ran    / running → "run"
 *   groove / grooving        → "groov"
 */
function stem(word: string): string {
  let w = word.toLowerCase();

  // -ing: strip and undo doubled consonant (running→runn→run, dancing→danc)
  if (w.length > 4 && w.endsWith("ing")) {
    const base = w.slice(0, -3);
    if (base.length >= 2) {
      w = stripDoubledConsonant(base);
    }
  }
  // -ed: strip and undo doubled consonant (stopped→stopp→stop, danced→danc)
  else if (w.length > 3 && w.endsWith("ed")) {
    const base = w.slice(0, -2);
    if (base.length >= 2) {
      w = stripDoubledConsonant(base);
    }
  }
  // -ies → -i (parties→parti)
  else if (w.length > 4 && w.endsWith("ies")) {
    w = w.slice(0, -3) + "i";
  }
  // -ness, -ment (happiness→happi, government→govern)
  else if (w.length > 6 && (w.endsWith("ness") || w.endsWith("ment"))) {
    w = w.slice(0, -4);
  }
  // -able, -ible (comfortable→comfort, possible→possibl)
  else if (w.length > 6 && (w.endsWith("able") || w.endsWith("ible"))) {
    w = w.slice(0, -4);
  }
  // -ly (quickly→quick, slowly→slow)
  else if (w.length > 4 && w.endsWith("ly")) {
    w = w.slice(0, -2);
  }
  // -er (runner→runner becomes handled earlier; dancer→danc+er)
  else if (w.length > 4 && w.endsWith("er")) {
    w = w.slice(0, -2);
  }
  // -es (watches→watch, buses→bus; preserve goes/does/toes/foes)
  else if (w.length > 3 && w.endsWith("es") && !["goes", "does", "toes", "foes"].includes(w)) {
    w = w.slice(0, -2);
  }
  // -s (dogs→dog, cars→car; preserve common words)
  else if (
    w.length > 3 &&
    w.endsWith("s") &&
    !w.endsWith("ss") &&
    !["his", "hers", "its", "was", "has", "is", "as", "us"].includes(w)
  ) {
    w = w.slice(0, -1);
  }

  // Strip trailing silent 'e' (dance→danc, groove→groov, drive→driv)
  if (w.length > 3 && w.endsWith("e")) {
    w = w.slice(0, -1);
  }

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

/**
 * Check if two answers match via stemming.
 * Requires stemmed token SETS to be equal — same tokens modulo morphology.
 * This handles tense/plural variants (dance/dancing, dog/dogs) but correctly
 * rejects partial matches ("butter" vs "peanut butter", "ice" vs "ice cream").
 */
function stemmedMatch(submitted: string, canonical: string): boolean {
  const submittedStems = stemmedTokens(submitted);
  const canonicalStems = stemmedTokens(canonical);

  if (submittedStems.size === 0 || canonicalStems.size === 0) return false;

  // Token counts must match — partial subsets never qualify
  if (submittedStems.size !== canonicalStems.size) return false;

  // Every submitted stem must appear in the canonical stems (and vice versa,
  // since sizes are equal, this implies set equality)
  for (const s of submittedStems) {
    if (!canonicalStems.has(s)) return false;
  }
  return true;
}

/** Ask the AI model whether submitted and canonical mean the same thing in context */
async function aiSemanticMatch(submitted: string, canonical: string, question: string): Promise<boolean> {
  const AI_TIMEOUT_MS = 5000;
  try {
    const aiCall = openai.chat.completions.create({
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
    const timeout = new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error("AI match timeout")), AI_TIMEOUT_MS)
    );
    const response = await Promise.race([aiCall, timeout]);
    const verdict = response.choices[0]?.message?.content?.trim().toUpperCase() ?? "";
    return verdict.startsWith("YES");
  } catch (err) {
    console.error("[answerMatcher] AI call failed or timed out:", err);
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
    cacheSet(key, false);
    return false;
  }

  // Layer 1: strict normalized equality (handles punctuation, apostrophes, casing)
  const normCanonical = normalize(canonical);
  if (normSubmitted === normCanonical) {
    cacheSet(key, true);
    return true;
  }

  // Layer 2: stemming (token-set equality, no partial subsets)
  if (stemmedMatch(normSubmitted, normCanonical)) {
    cacheSet(key, true);
    return true;
  }

  // Layer 3: AI semantic match
  const aiResult = await aiSemanticMatch(submitted.trim(), canonical, question);
  cacheSet(key, aiResult);
  return aiResult;
}
