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

/**
 * Normalize: lowercase, replace punctuation/symbols with spaces (so hyphens/slashes
 * separate tokens rather than merging them), then collapse whitespace.
 * Examples: "Scooby-Doo" → "scooby doo", "McDonald's" → "mcdonalds" (apostrophe removed)
 */
function normalize(text: string): string {
  return text
    .toLowerCase()
    .replace(/['''`]/g, "")       // remove apostrophes/curly quotes (don't→dont, McDonald's→mcdonalds)
    .replace(/[^a-z0-9\s]/g, " ") // replace other punctuation with space (hyphen, slash, etc.)
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
  // -er (dancer→danc; double-consonant already handled by -ing/-ed path)
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
 * Split an answer text on "/" into individual alternatives.
 * "Life/Fossils" → ["Life", "Fossils"]
 * "Food/Mars Bars" → ["Food", "Mars Bars"]
 * "Beer" → ["Beer"]  (no slash — single-element array)
 */
function splitVariants(text: string): string[] {
  const parts = text.split("/").map(s => s.trim()).filter(Boolean);
  return parts.length > 1 ? parts : [text];
}

/**
 * Check if two answers match via stemming.
 * Requires stemmed token SETS to be equal — same tokens modulo morphology.
 * This handles tense/plural variants (dance/dancing, dog/dogs) but correctly
 * rejects partial matches ("butter" vs "peanut butter", "ice" vs "ice cream").
 */
function stemmedMatch(normSubmitted: string, normCanonical: string): boolean {
  const submittedStems = stemmedTokens(normSubmitted);
  const canonicalStems = stemmedTokens(normCanonical);

  if (submittedStems.size === 0 || canonicalStems.size === 0) return false;

  // Token counts must match — partial subsets never qualify
  if (submittedStems.size !== canonicalStems.size) return false;

  // Every submitted stem must appear in canonical stems (and vice versa,
  // since sizes are equal, this implies set equality)
  for (const s of submittedStems) {
    if (!canonicalStems.has(s)) return false;
  }
  return true;
}

/** Ask AI whether submitted and canonical mean the same thing in context */
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
 * Find the index of the matching answer in the given array, or -1 if none match.
 * Already-revealed answers are skipped.
 *
 * Strategy (bounded latency):
 *   1. Fast pass: normalize + stem all candidates (synchronous) — O(n) no I/O
 *   2. If a layer-1/2 match is found, return immediately
 *   3. Otherwise, fire ALL remaining AI checks in PARALLEL (single round-trip)
 *      and return the first match (lowest index wins).
 *
 * This ensures worst-case latency is one AI round-trip (≤5s), regardless of
 * how many answers the question has.
 */
export async function findMatchIndex(
  submitted: string,
  answers: Array<{ text: string; points: number }>,
  question: string,
  revealedAnswers: Set<number>
): Promise<number> {
  // Guard: empty or whitespace-only input is never a match
  const normSubmitted = normalize(submitted);
  if (!normSubmitted) return -1;

  // Duplicate of an answer already on the board — wrong immediately (no AI).
  // Without this, repeating e.g. a face-off hit during playing skips that index
  // and falls through to parallel AI checks on every unrevealed slot (slow).
  for (let i = 0; i < answers.length; i++) {
    if (!revealedAnswers.has(i)) continue;
    const variants = splitVariants(answers[i].text);
    for (const variant of variants) {
      const normVariant = normalize(variant);
      if (normSubmitted === normVariant || stemmedMatch(normSubmitted, normVariant)) {
        return -1;
      }
    }
  }

  // === Fast pass (layers 1 and 2) ===
  for (let i = 0; i < answers.length; i++) {
    if (revealedAnswers.has(i)) continue;
    const key = cacheKey(answers[i].text, submitted);

    // Layer 0: cache hit
    if (matchCache.has(key)) {
      if (matchCache.get(key)) return i;
      continue;
    }

    // Treat "/" as OR — check each variant of the canonical answer independently
    const variants = splitVariants(answers[i].text);
    for (const variant of variants) {
      const normVariant = normalize(variant);

      // Layer 1: exact normalized equality
      if (normSubmitted === normVariant) {
        cacheSet(key, true);
        return i;
      }

      // Layer 2: stemmed token-set equality
      if (stemmedMatch(normSubmitted, normVariant)) {
        cacheSet(key, true);
        return i;
      }
    }
  }

  // === Slow pass (layer 3: AI — all in parallel) ===
  const aiCandidates: Array<{ index: number; key: string }> = [];
  for (let i = 0; i < answers.length; i++) {
    if (revealedAnswers.has(i)) continue;
    const key = cacheKey(answers[i].text, submitted);
    if (!matchCache.has(key)) {
      aiCandidates.push({ index: i, key });
    }
  }

  if (aiCandidates.length === 0) return -1;

  // Fire all AI checks simultaneously; for slash-variant answers check each part
  // independently — answer matches if ANY variant matches (e.g. "Life/Fossils"
  // means "Life" OR "Fossils", so "people" can match "Life" → accept)
  const results = await Promise.all(
    aiCandidates.map(({ index, key }) => {
      const variants = splitVariants(answers[index].text);
      return Promise.all(
        variants.map(variant => aiSemanticMatch(submitted.trim(), variant, question))
      ).then(variantResults => {
        const result = variantResults.some(r => r);
        cacheSet(key, result);
        return { index, result };
      });
    })
  );

  // Return first (lowest-index) match
  results.sort((a, b) => a.index - b.index);
  for (const { index, result } of results) {
    if (result) return index;
  }
  return -1;
}
