import { GENERATED_THEMES } from "./questionThemes.generated";

export interface ThemeQuestion {
  q: string;
  a: { text: string; pts: number }[];
}

export interface QuestionTheme {
  slug: string;
  name: string;
  /** <title> without the site suffix. */
  title: string;
  h1: string;
  description: string;
  /** Two or three short paragraphs of unique intro copy. */
  intro: string[];
  /** Hosting tips specific to the theme. */
  tips: string[];
  questions: ThemeQuestion[];
}

// Hand-written copy per theme; the question lists themselves come from the
// survey bank via scripts/generate-question-themes.mjs.
const THEME_COPY: Record<string, Pick<QuestionTheme, "description" | "intro" | "tips">> = {
  christmas: {
    description:
      "Free Christmas Family Feud questions with survey answers and point values — festive rounds about Santa, gifts, traditions and holiday food for your Christmas party game.",
    intro: [
      "Christmas is the busiest game-night season of the year, and a survey game beats charades because nobody has to perform — they just have to guess what everyone else would say. The questions below all come from real survey boards and cover gift-giving, traditions, holiday movies, food and the small chaos of family gatherings.",
      "Each question shows its top answers with the points a hundred surveyed people gave them. Click a question to reveal the board, or take the whole list into a live game: create a room, share the link with the family group chat, and let the site run the Face-Off, strikes and steals for you.",
    ],
    tips: [
      "Mix generations on each team — a grandparent and a teenager will reach for different \"obvious\" answers, and Christmas boards reward both.",
      "Run 4 rounds after dinner: about 25 minutes, long enough to crown a winner before dessert.",
      "For an office party, switch to a Custom topic like \"things that go wrong at the company holiday party\".",
    ],
  },
  halloween: {
    description:
      "Halloween Family Feud questions and answers with point values — spooky survey rounds about costumes, candy, haunted houses and monsters for parties and classrooms.",
    intro: [
      "A Halloween party needs one game that works while people are still arriving in costume. These survey questions are about candy, costumes, haunted houses and everything that goes bump in October, and they are gentle enough for a mixed-age crowd.",
      "Every board below is a real survey result with point values. Reveal answers one at a time as a party quiz, or play the full game online with two teams, a 25-second timer and a steal round — no host needed.",
    ],
    tips: [
      "Give the teams monster names and let the losing team hand out the candy.",
      "Teachers: play the first few boards on one screen with the class shouting answers, then discuss why the top answer won.",
      "Keep a couple of the easier boards for younger players — the ones where the top answer is worth 40+ points.",
    ],
  },
  thanksgiving: {
    description:
      "Thanksgiving Family Feud questions with answers and points — turkey-day survey rounds about food, family, football and leftovers to play after dinner.",
    intro: [
      "Thanksgiving is the original family game night: everyone is in one room, dinner is over, and nobody wants to do the dishes. These survey boards are about the meal, the guests, the football game in the background and the leftovers that follow.",
      "Play them as a quiz straight from this page, or create a free room and let relatives in other cities join from their phones. A four-round game takes about as long as the pie.",
    ],
    tips: [
      "Split the table into \"cooks\" versus \"guests\" for instant rivalry.",
      "Read questions aloud even when everyone can see the screen — it keeps the kids' table involved.",
      "Save the food boards for last; they produce the loudest arguments.",
    ],
  },
  "for-kids": {
    description:
      "Family-friendly Family Feud questions for kids with survey answers and points — school, toys, cartoons, animals and everyday life. Safe for classrooms and family game night.",
    intro: [
      "Survey games are perfect for children because there is no trivia to know — the answers are things any kid has noticed about school, pets, toys and family life. Every question on this page was filtered for family-friendly topics and language, so it is safe for a classroom, a birthday party or a rainy afternoon.",
      "Younger players do best when an adult reads the question and types the answers on one screen. Older kids can play in teams on their own devices with the online game, which handles the timer and scoring automatically.",
    ],
    tips: [
      "For ages under 10, ignore the timer and let the team talk it out before answering.",
      "Turn a board into a lesson: after revealing the answers, ask why the top answer was so popular.",
      "Friendly Feud accounts are for players 13 and up; younger kids should play on a grown-up's screen.",
    ],
  },
  "for-work": {
    description:
      "Family Feud questions for work and office team building — survey rounds about bosses, meetings, coworkers and careers with real answers and point values.",
    intro: [
      "Survey questions are the safest team-building game there is: nobody is put on the spot for knowledge, and the right answer is simply what most people would say. These boards are about jobs, bosses, meetings and office life, which makes them instantly relatable for any team.",
      "Use them as a ten-minute meeting opener or run a proper tournament between departments. Rooms hold up to ten players and need no installs or accounts, so remote colleagues join from a link in the chat.",
    ],
    tips: [
      "Name the teams after real departments for stakes.",
      "Two rounds is a perfect icebreaker; six rounds fills a Friday social.",
      "For company-specific fun, generate a Custom topic like \"things people say in a status meeting\".",
    ],
  },
  food: {
    description:
      "Food Family Feud questions and answers with points — survey boards about pizza, breakfast, restaurants, snacks and desserts for game night or a dinner party.",
    intro: [
      "Everybody eats, which is why food boards produce the most confident guesses and the loudest disagreements. These questions cover favourite foods, restaurant habits, breakfast, snacks and desserts, all with real survey point values.",
      "They work well as a dinner-party game between courses or as the opening rounds of a longer game night — food questions are easy, so they warm the room up before the tricky boards.",
    ],
    tips: [
      "Ask players to guess the number-one answer out loud before revealing — food boards are where the crowd is most predictable.",
      "Pair a food round with a Custom topic about your own town's restaurants.",
    ],
  },
  animals: {
    description:
      "Animal Family Feud questions with survey answers and point values — pets, zoo animals, dogs, cats and wildlife boards that work for kids and adults.",
    intro: [
      "Animal questions are a game-night staple because they are universal: everyone has had a pet, visited a zoo or been chased by a goose. The boards here are about dogs, cats, farm animals, wildlife and the odd things people believe about them.",
      "They are among the most family-friendly boards in the survey bank, so they fit a classroom warm-up as easily as an adult party.",
    ],
    tips: [
      "Let the youngest player on each team take the animal Face-Offs — they tend to win them.",
      "Use the point values to discuss survey thinking: why is \"dog\" almost always the top pet answer?",
    ],
  },
  couples: {
    description:
      "Family Feud questions for couples and date night — survey rounds about dating, marriage, weddings and romance with answers and point values.",
    intro: [
      "Couples' game nights need questions that spark conversation without starting an argument. These boards are about dating, weddings, married life and romance, and every one shows what a hundred surveyed people actually said — which is usually funnier than what either partner expected.",
      "Play as pairs against pairs, or split partners onto opposite teams and see who knows the crowd better. The online game supports 1v1, so a quiet night in works too.",
    ],
    tips: [
      "Split couples across teams for the best banter.",
      "Keep score across several evenings with an optional account and the leaderboard.",
    ],
  },
};

export const QUESTION_THEMES: QuestionTheme[] = GENERATED_THEMES.map((t) => {
  const copy = THEME_COPY[t.slug];
  if (!copy) throw new Error(`questionThemes.ts is missing copy for theme "${t.slug}"`);
  return { ...t, ...copy };
});

export const QUESTION_THEMES_BY_SLUG: Record<string, QuestionTheme> = Object.fromEntries(
  QUESTION_THEMES.map((t) => [t.slug, t]),
);

export const QUESTION_THEME_SLUGS = QUESTION_THEMES.map((t) => t.slug);
