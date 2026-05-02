/**
 * One-time script: fix grammar/capitalization of all question texts in questions.ts
 * Run via: pnpm --filter @workspace/api-server exec tsx ./fix-grammar.ts
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import OpenAI from "openai";

process.on("unhandledRejection", (reason) => {
  console.error("UNHANDLED REJECTION:", reason);
  process.exit(1);
});
process.on("uncaughtException", (err) => {
  console.error("UNCAUGHT EXCEPTION:", err);
  process.exit(1);
});

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_FILE = path.resolve(__dirname, "src/data/questions.ts");
const PROGRESS_FILE = "/tmp/fixed_questions.json";

const client = new OpenAI({
  baseURL: process.env.AI_INTEGRATIONS_OPENAI_BASE_URL,
  apiKey: process.env.AI_INTEGRATIONS_OPENAI_API_KEY,
  maxRetries: 0, // we handle retries ourselves
});

// ── 1. Extract all question items ─────────────────────────────────────────────
const src = fs.readFileSync(DATA_FILE, "utf8");
const QRE = /"id":\s*(\d+),\s*"question":\s*"((?:\\.|[^"\\])*)"/g;
const items: Array<{ id: number; raw: string; text: string }> = [];
for (const m of src.matchAll(QRE)) {
  const id = parseInt(m[1], 10);
  const raw = m[2];
  const text = JSON.parse('"' + raw + '"');
  items.push({ id, raw, text });
}
console.log(`Extracted ${items.length} questions`);

// ── 2. Load previous progress ─────────────────────────────────────────────────
let fixed: Record<number, string> = {};
try {
  fixed = JSON.parse(fs.readFileSync(PROGRESS_FILE, "utf8"));
  console.log(`Resuming — already have ${Object.keys(fixed).length} entries`);
} catch {
  console.log("Starting fresh");
}

const todo = items.filter((x) => !(x.id in fixed));
console.log(`Remaining: ${todo.length}`);

// ── 3. AI correction ──────────────────────────────────────────────────────────
const SYSTEM = `You fix grammar, capitalization, and punctuation in Family Feud survey questions. Preserve meaning exactly. Rules:
- Sentence case: capitalize first word and proper nouns (names, places, brands, holidays) only.
- "Name something…" / "Name a…" prompts end with a period. Questions starting with What/Where/Why/How/When/Which end with a question mark.
- Fix typos and broken concatenations (e.g. "midlifecrisis" → "midlife crisis", possessive "couple's" where needed).
- Add missing articles where grammar requires but never add or remove content words.
- Do NOT change meaning, swap synonyms, or add explanations.
Reply with ONLY valid JSON: {"results":[{"id":N,"q":"fixed text"},…]} containing every input id, same order, no extras.`;

const BATCH = 25;
const CONCURRENCY = 5;
const INTER_BATCH_DELAY = 100; // ms between batch starts
const MAX_RETRIES = 3;

async function processBatch(
  batch: typeof items,
  attempt = 0
): Promise<Record<number, string>> {
  try {
    const res = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: SYSTEM },
        {
          role: "user",
          content: JSON.stringify({ items: batch.map((b) => ({ id: b.id, q: b.text })) }),
        },
      ],
      max_tokens: 4000,
      temperature: 0,
      response_format: { type: "json_object" },
    });
    const content = res.choices[0]?.message?.content ?? "";
    const parsed = JSON.parse(content) as { results: { id: number; q: string }[] };
    if (!Array.isArray(parsed.results)) throw new Error("no results array");
    if (parsed.results.length !== batch.length) {
      throw new Error(`Got ${parsed.results.length} results, expected ${batch.length}`);
    }
    const out: Record<number, string> = {};
    for (const r of parsed.results) {
      if (typeof r.id !== "number" || typeof r.q !== "string" || !r.q.trim()) {
        throw new Error(`Bad row: ${JSON.stringify(r)}`);
      }
      if (!batch.find((b) => b.id === r.id)) throw new Error(`Unknown id ${r.id}`);
      out[r.id] = r.q.trim();
    }
    for (const b of batch) {
      if (!(b.id in out)) throw new Error(`Missing id ${b.id}`);
    }
    return out;
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    console.error(`  [retry ${attempt + 1}/${MAX_RETRIES}] id=${batch[0].id}: ${msg.slice(0, 120)}`);
    if (attempt + 1 < MAX_RETRIES) {
      await new Promise((r) => setTimeout(r, 1000 * (attempt + 1)));
      return processBatch(batch, attempt + 1);
    }
    console.error(`  GAVE UP on batch starting id=${batch[0].id} — keeping originals`);
    return Object.fromEntries(batch.map((b) => [b.id, b.text]));
  }
}

const batches: (typeof items)[] = [];
for (let i = 0; i < todo.length; i += BATCH) batches.push(todo.slice(i, i + BATCH));
console.log(`${batches.length} batches × up to ${BATCH}, concurrency ${CONCURRENCY}`);

let done = 0;
let savedAt = 0;
const t0 = Date.now();
let qi = 0;

async function worker(id: number) {
  while (qi < batches.length) {
    const myI = qi++;
    if (myI > 0 && id === 0) {
      // Only worker 0 adds the inter-batch delay so we stagger slightly
      await new Promise((r) => setTimeout(r, INTER_BATCH_DELAY));
    }
    const result = await processBatch(batches[myI]);
    Object.assign(fixed, result);
    done++;
    if (done % 5 === 0) {
      const s = ((Date.now() - t0) / 1000).toFixed(1);
      const pct = Math.round((done / batches.length) * 100);
      console.log(`[${s}s] ${done}/${batches.length} batches (${pct}%) — ${Object.keys(fixed).length} fixed`);
    }
    if (done - savedAt >= 5) {
      fs.writeFileSync(PROGRESS_FILE, JSON.stringify(fixed));
      savedAt = done;
    }
  }
}

try {
  await Promise.all(Array.from({ length: CONCURRENCY }, (_, i) => worker(i)));
} catch (e) {
  console.error("POOL ERROR:", e);
  // Save what we have before exiting
  fs.writeFileSync(PROGRESS_FILE, JSON.stringify(fixed));
  process.exit(1);
}

fs.writeFileSync(PROGRESS_FILE, JSON.stringify(fixed));

const elapsed = ((Date.now() - t0) / 1000).toFixed(1);
console.log(`\nAI pass done in ${elapsed}s. Fixed entries: ${Object.keys(fixed).length}`);

// ── 4. Apply fixes back to source ─────────────────────────────────────────────
fs.copyFileSync(DATA_FILE, DATA_FILE + ".bak");
console.log("Backup written → questions.ts.bak");

let out = src;
let changed = 0;
let unchanged = 0;
let notFound = 0;

for (const item of items) {
  const fixedText = fixed[item.id] ?? item.text;
  if (fixedText === item.text) { unchanged++; continue; }

  const newRaw = JSON.stringify(fixedText).slice(1, -1); // strip outer quotes
  const searchStr = `"question":  "${item.raw}"`;
  const replaceStr = `"question":  "${newRaw}"`;
  const idx = out.indexOf(searchStr);
  if (idx === -1) {
    // Try single-space fallback
    const alt = `"question": "${item.raw}"`;
    const altIdx = out.indexOf(alt);
    if (altIdx !== -1) {
      out = out.slice(0, altIdx) + `"question": "${newRaw}"` + out.slice(altIdx + alt.length);
      changed++;
    } else {
      console.warn(`  Could not locate question id=${item.id} in source — skipping`);
      notFound++;
    }
    continue;
  }
  out = out.slice(0, idx) + replaceStr + out.slice(idx + searchStr.length);
  changed++;
}

fs.writeFileSync(DATA_FILE, out);
console.log(`\nApplied: ${changed} changed, ${unchanged} unchanged, ${notFound} not-found`);

// ── 5. Sample diff ─────────────────────────────────────────────────────────────
console.log("\n--- Sample changes ---");
let shown = 0;
for (const item of items) {
  if (shown >= 15) break;
  const f = fixed[item.id];
  if (f && f !== item.text) {
    console.log(`  [${item.id}] ${item.text}`);
    console.log(`        → ${f}`);
    shown++;
  }
}

console.log("\nDone! Restart the api-server workflow to pick up the new questions.");
