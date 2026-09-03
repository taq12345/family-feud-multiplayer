// Builds src/content/questionThemes.generated.ts from the api-server question
// bank. Each theme is a keyword filter over the 8.7k questions; the output is
// committed so the web build never depends on the server package.
//
//   node scripts/generate-question-themes.mjs
//
// Selection rules per theme: question matches the theme regex, does not match
// the exclusion list (family-friendly), has 4–8 answers whose points add up
// to at least 60, and is not already used by an earlier theme.
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const here = path.dirname(fileURLToPath(import.meta.url));
const bankPath = path.resolve(here, "../../api-server/src/data/questions.ts");
const outPath = path.resolve(here, "../src/content/questionThemes.generated.ts");

const src = readFileSync(bankPath, "utf8");
const bank = eval("(" + src.slice(src.indexOf("= [") + 2).replace(/;\s*$/, "") + ")");

// Topics that do not belong on a page anyone might open in a classroom or
// with the family. Applied to every theme, not just "for kids".
const EXCLUDE =
  /\b(sex|sexy|naked|nude|strip|stripper|bra\b|underwear|lingerie|condom|porn|drunk|alcohol|beer|wine|booze|hangover|cigarette|smok|drug|marijuana|weed|kill|murder|gun|shoot|suicide|hell\b|damn|crap|butt\b|boob|breast|pee\b|poop|fart|toilet|bathroom|cheat|affair|divorce|prostitut|hooker|casino|gambl|bikini|thong|hot tub|one.night)/i;

const THEMES = [
  {
    slug: "christmas",
    name: "Christmas",
    title: "Christmas Family Feud Questions & Answers",
    h1: "Christmas Family Feud Questions",
    match: /christmas|santa|reindeer|stocking|\belf\b|\belves\b|mistletoe|gingerbread|snowman|holiday season|new year/i,
    limit: 50,
  },
  {
    slug: "halloween",
    name: "Halloween",
    title: "Halloween Family Feud Questions & Answers",
    h1: "Halloween Family Feud Questions",
    match: /halloween|trick.or.treat|costume|haunted|witch|vampire|ghost|zombie|monster|scary|spooky|pumpkin/i,
    limit: 40,
  },
  {
    slug: "thanksgiving",
    name: "Thanksgiving",
    title: "Thanksgiving Family Feud Questions & Answers",
    h1: "Thanksgiving Family Feud Questions",
    match: /thanksgiving|turkey|pilgrim|pumpkin pie|cranberr|stuffing|leftover/i,
    limit: 30,
  },
  {
    slug: "for-kids",
    name: "For Kids",
    title: "Family Feud Questions for Kids (Family-Friendly)",
    h1: "Family Feud Questions for Kids",
    // Kid-perspective topics only; questions *about* kids from an adult's
    // point of view (parenting, dating, money) are excluded below.
    match: /school|homework|teacher|recess|cartoon|\btoys?\b|candy|\bzoo\b|playground|birthday party|superhero|fairy tale|bedtime|crayon|kindergarten|summer camp|snow day|sandbox|lunch ?box|piggy bank|tooth fairy|santa|dinosaur|video game|comic book|ice cream|playing outside|\bpets?\b|circus|amusement park|swimming pool/i,
    exclude: /couple|alone time|\bdate|romantic|wealthy|babysat|babysit|kiss|diaper|pregnan|husband|wife|boss|\bjob\b|salary|college|teenager|teen\b/i,
    limit: 60,
  },
  {
    slug: "for-work",
    name: "For Work",
    title: "Family Feud Questions for Work & the Office",
    h1: "Family Feud Questions for Work",
    match: /\bwork\b|office|\bboss|coworker|co-worker|\bjob\b|meeting|interview|employee|career|paycheck|retire|promotion/i,
    limit: 50,
  },
  {
    slug: "food",
    name: "Food & Drink",
    title: "Food Family Feud Questions & Answers",
    h1: "Food & Drink Family Feud Questions",
    match: /food|\beat|pizza|breakfast|dinner|lunch|restaurant|snack|dessert|sandwich|cook|recipe|fruit|vegetable|cheese|chocolate|coffee|candy|cake|ice cream/i,
    limit: 50,
  },
  {
    slug: "animals",
    name: "Animals",
    title: "Animal Family Feud Questions & Answers",
    h1: "Animal Family Feud Questions",
    match: /\bdog|\bcat\b|\bcats\b|\bpet\b|\bpets\b|animal|\bzoo\b|\bbird|\bfish\b|horse|cow\b|monkey|lion|elephant|puppy|kitten/i,
    limit: 50,
  },
  {
    slug: "couples",
    name: "Couples & Dating",
    title: "Family Feud Questions for Couples & Date Night",
    h1: "Family Feud Questions for Couples",
    match: /\bdate\b|dating|boyfriend|girlfriend|husband|wife|marriage|married|wedding|romantic|honeymoon|anniversary|couple|spouse|valentine/i,
    limit: 50,
  },
];

function tidy(s) {
  return s
    .replace(/\s+/g, " ")
    .replace(/\s+([?.!,])/g, "$1")
    .trim()
    .replace(/^./, (c) => c.toUpperCase());
}

const used = new Set();
const out = [];
for (const t of THEMES) {
  const picked = [];
  for (const q of bank) {
    if (picked.length >= t.limit) break;
    if (used.has(q.id)) continue;
    const text = tidy(q.question);
    if (!t.match.test(text) || EXCLUDE.test(text)) continue;
    if (t.exclude && t.exclude.test(text)) continue;
    const answers = q.answers
      .filter((a) => a.text && a.text !== "send us your answers!" && !EXCLUDE.test(a.text))
      .map((a) => ({ text: tidy(a.text), pts: a.points }));
    // Skip boards with truncated answers ("Water melted h..") from the source data.
    if (answers.some((a) => /\.\.|…/.test(a.text))) continue;
    if (answers.length < 4 || answers.length > 8) continue;
    if (answers.reduce((s, a) => s + a.pts, 0) < 60) continue;
    if (text.length > 140) continue;
    used.add(q.id);
    picked.push({ q: text, a: answers });
  }
  out.push({ slug: t.slug, name: t.name, title: t.title, h1: t.h1, questions: picked });
  console.log(`${t.slug.padEnd(14)} ${picked.length} questions`);
}

const header = `// GENERATED by scripts/generate-question-themes.mjs — do not edit by hand.
// Source: artifacts/api-server/src/data/questions.ts (${bank.length} questions).
import type { ThemeQuestion } from "./questionThemes";

export interface GeneratedTheme {
  slug: string;
  name: string;
  title: string;
  h1: string;
  questions: ThemeQuestion[];
}

export const GENERATED_THEMES: GeneratedTheme[] = `;

writeFileSync(outPath, header + JSON.stringify(out, null, 2) + ";\n");
console.log("wrote", path.relative(process.cwd(), outPath));
