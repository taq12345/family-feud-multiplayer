import { BLOG_SLUGS, type BlogSlug } from "./blogSlugs";

// Long-form guides for the /blog section. Bodies are plain data so they can
// be prerendered, indexed and rendered with one small renderer
// (src/pages/BlogPost.tsx). Inline markup supported inside text:
//   **bold**            → <strong>
//   [label](/path)      → internal link (wouter)
//   [label](https://…)  → external link
export type PostBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "tip"; text: string };

export interface BlogPost {
  slug: BlogSlug;
  title: string;
  /** Meta description / card summary (≤160 chars). */
  description: string;
  category: string;
  /** ISO date, also used for Article schema. */
  published: string;
  readingMinutes: number;
  blocks: PostBlock[];
  faq?: { q: string; a: string }[];
}

export const BLOG_AUTHOR = "Talha Qureshi";

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "how-to-host-a-virtual-family-feud-game-night",
    title: "How to Host a Virtual Family Feud Game Night (Step-by-Step)",
    description:
      "A practical guide to running a Family Feud-style game night online: room setup, inviting friends, picking teams, choosing questions, and keeping the energy up.",
    category: "Hosting",
    published: "2026-09-03",
    readingMinutes: 8,
    blocks: [
      {
        type: "p",
        text:
          "Survey games are the easiest party games to run remotely. Nobody needs to know obscure trivia, there are no cards to shuffle, and the format rewards the one thing every group already has in common: a rough idea of what most people would say. This guide walks through hosting a full Family Feud-style night on Friendly Feud, from creating the room to the final scoreboard, with the small details that make the difference between a game that fizzles and one people ask to replay.",
      },
      { type: "h2", text: "What you need" },
      {
        type: "ul",
        items: [
          "**A host.** One person creates the room, starts the game and advances rounds. The host also plays — hosting takes almost no attention.",
          "**2 to 10 players.** Rooms hold up to ten people. Odd numbers are fine; teams do not have to be equal.",
          "**A browser on any device.** Phones, tablets and laptops all work. There is nothing to install and nobody needs an account.",
          "**Optional: a voice or video call.** The game has a built-in text chat, but a call on Discord, Zoom or WhatsApp adds the groans and cheers that make a Feud night fun.",
        ],
      },
      { type: "h2", text: "Step 1 — Create the room" },
      {
        type: "p",
        text:
          "From the [lobby](/), enter a nickname and click **Create Room**. Give the room a name your friends will recognise, then pick two settings:",
      },
      {
        type: "ul",
        items: [
          "**Number of rounds** — 2, 4, 6, 8 or 10. A round takes roughly five to seven minutes with a chatty group, so 4 rounds is a comfortable first game and 6 to 8 fills an evening.",
          "**Max players** — anywhere from 2 to 10. Set it to the number of people you actually expect so a stray link does not let strangers in.",
        ],
      },
      { type: "h2", text: "Step 2 — Invite everyone" },
      {
        type: "p",
        text:
          "Inside the room, the **Invite** button copies a join link. Paste it into your group chat. Anyone who opens it lands in the lobby with the room pre-selected; they type a nickname, pick a team and appear in the waiting area within seconds. Because there is no sign-up, this is usually the fastest part of the night.",
      },
      {
        type: "tip",
        text:
          "Nicknames must be unique within a room. If two people share a name, the second one will be asked to choose another — agree on names in the group chat first if your friends are all called Sam.",
      },
      { type: "h2", text: "Step 3 — Split into teams" },
      {
        type: "p",
        text:
          "Players choose Team 1 or Team 2 when they join, and the host can rename both teams. A few pairings that work well:",
      },
      {
        type: "ul",
        items: [
          "**Households vs. households** for family calls across cities.",
          "**Mixed generations** — put a grandparent and a teenager on each side so every survey has someone who thinks like the crowd.",
          "**1v1 duels** are fully supported if only two of you are online; the game simply keeps rotating back to the same player.",
        ],
      },
      { type: "h2", text: "Step 4 — Choose the questions" },
      {
        type: "p",
        text:
          "When everyone is in, the host sees two start buttons. **Classic Questions** draws from a bank of more than 8,700 survey questions with real point values, the same style you would hear on the TV show. **Custom Questions (Beta)** asks for a topic — “90s cartoons”, “things that happen at a wedding”, “our office” — and generates a themed round on the spot. Custom rounds are a great way to personalise a birthday or a team event; classic rounds are the safer choice for a group that wants pure Feud.",
      },
      { type: "h2", text: "Step 5 — Run the game" },
      {
        type: "p",
        text:
          "Each round starts with a **Face-Off** between one player from each team, moves into the **Playing** phase for the team that wins control, and can end with a **Steal** if that team collects three strikes. Every turn has a 25-second timer, so the pace stays brisk even with a big group. After a round ends, a summary appears; the host can advance immediately or let the game move on by itself after 60 seconds. If you want the full breakdown of each phase, read [Family Feud rules explained](/blog/family-feud-rules-explained) or the shorter [How to Play](/rules) page.",
      },
      { type: "h2", text: "Hosting tips that make a real difference" },
      {
        type: "ol",
        items: [
          "**Say the question out loud.** Even though everyone sees it on screen, reading it aloud on the call keeps the group in sync and gives slower readers time.",
          "**Encourage table talk, then respect the answerer.** Teams can debate freely, but only the designated player's typed answer counts. Make that clear before round one to avoid arguments.",
          "**Keep an eye on the timer.** Twenty-five seconds is plenty for a survey answer but not for a committee. Remind people that any correct answer wins the Face-Off — they do not need the number-one answer.",
          "**Use the chat for jokes, not answers.** Typing a guess into the chat does not submit it. The chat is for banter (and for the inevitable “that is NOT a breakfast food”).",
          "**Plan for a rematch.** Games are short. When the final score comes up, the host can restart with a fresh set of questions and the same room, so keep the call open.",
        ],
      },
      { type: "h2", text: "Troubleshooting" },
      {
        type: "ul",
        items: [
          "**Someone dropped off the call and the game.** Disconnected players are held in the room for up to 30 minutes. If they reopen the link they rejoin exactly where they were; if they were the designated player, the turn simply moves to the next teammate.",
          "**The room says it is full.** The host set a max player count when creating the room. Create a new room with a higher limit — it takes ten seconds.",
          "**A guess was marked wrong but sounds right.** Answers are checked in three layers — exact match, word-stem and synonym matching, and finally an AI judge — so most phrasings are accepted. Keep answers short and specific (“watch TV” rather than “probably just watch some TV or something”).",
        ],
      },
    ],
    faq: [
      {
        q: "Does everyone need an account to join?",
        a: "No. Players only need a nickname. Creating a free account is optional and is only used to lock a nickname and appear on the leaderboard.",
      },
      {
        q: "Can we play across different countries?",
        a: "Yes. The game runs in the browser and syncs in real time, so it works anywhere with a normal internet connection.",
      },
      {
        q: "How long does a game take?",
        a: "Plan on five to seven minutes per round. A 4-round game is about 25 minutes; 8 rounds fills an hour with breaks.",
      },
    ],
  },
  {
    slug: "family-feud-rules-explained",
    title: "Family Feud Rules Explained: Face-Off, Strikes, Steals and Scoring",
    description:
      "Every rule of a Family Feud-style survey game in plain English — how the Face-Off works, what strikes do, when a steal happens, and how points are scored.",
    category: "Rules",
    published: "2026-09-03",
    readingMinutes: 7,
    blocks: [
      {
        type: "p",
        text:
          "If you have watched the show, you already know the rhythm: a survey question, a board of hidden answers, two families trying to guess what a hundred people said. The details are where new players get tripped up — who answers first, why a wrong answer matters so much, and what a “steal” actually is. This is a complete, plain-English rulebook for the format as it is played on Friendly Feud. For a quick summary while you play, keep the [How to Play](/rules) page open in another tab.",
      },
      { type: "h2", text: "The board and the points" },
      {
        type: "p",
        text:
          "Every round is built around one survey question, such as “Name something people do when they are bored.” The board hides the most popular answers — usually between four and eight of them — each with a point value equal to how many surveyed people gave that answer. “Watch TV” might be worth 32, “Sleep” 22, and so on down to a handful of points for the rarest answer. The points from every answer a team reveals go into a shared pot for that round, and the round is really a fight over who gets to bank that pot.",
      },
      { type: "h2", text: "Phase 1: the Face-Off" },
      {
        type: "p",
        text:
          "One player from each team steps up. They take turns typing an answer, and each has 25 seconds per turn. The first player to give **any** answer that is on the board wins the Face-Off for their team — it does not have to be the number-one answer. That team keeps the answer they revealed and moves into the Playing phase. If both players miss, the turn keeps alternating. If nobody finds an answer after several attempts, the round is skipped, the board is revealed and no points are awarded.",
      },
      {
        type: "tip",
        text:
          "Because any correct answer wins control, the best Face-Off strategy is the safest guess, not the cleverest one. See [how to win at Family Feud](/blog/how-to-win-family-feud-strategy) for the reasoning.",
      },
      { type: "h2", text: "Phase 2: Playing the board" },
      {
        type: "p",
        text:
          "The team that won the Face-Off now tries to clear the rest of the board. Play rotates through the team one player at a time (the Face-Off winner is skipped for the first turn so everyone gets involved), and each player has 25 seconds to submit an answer.",
      },
      {
        type: "ul",
        items: [
          "A **correct answer** flips that slot on the board and adds its points to the round pot.",
          "A **wrong answer** — one that is not on the board — earns a **strike**.",
          "**Three strikes** end the Playing phase and hand the other team a steal opportunity.",
          "If the team reveals **every answer** before collecting three strikes, they bank the entire pot immediately and the round ends.",
        ],
      },
      { type: "h2", text: "Phase 3: the Steal" },
      {
        type: "p",
        text:
          "After three strikes, the opposing team gets exactly one attempt. They can talk it over, but one designated player must type the final answer within 25 seconds. If that answer is one of the still-hidden slots, the stealing team takes **all** of the points in the pot — including everything the other team revealed. If it is wrong, the original playing team banks the pot after all. Either way, the remaining answers are revealed and the round ends.",
      },
      { type: "h2", text: "Scoring and winning" },
      {
        type: "p",
        text:
          "Points banked in a round are added to that team's total on the scoreboard. Every round is worth the same — there are no double or triple rounds — so an early lead is never safe. When the final round ends, the team with the higher total wins. The host can then restart the game with a fresh set of questions.",
      },
      { type: "h2", text: "Timing rules at a glance" },
      {
        type: "ul",
        items: [
          "**25 seconds** per turn in every phase. If the clock runs out, the turn passes (or, in the Playing phase, counts as a strike).",
          "**60 seconds** between rounds. The host can advance sooner; if they do nothing, the next round starts automatically.",
          "**30 minutes** of grace for a disconnected player. Reopen the link within that window and you are back in your seat.",
        ],
      },
      { type: "h2", text: "How answers are judged" },
      {
        type: "p",
        text:
          "Survey answers are messy — is “telly” the same as “watch TV”? Friendly Feud checks each guess in three layers. First an exact match against the board. Then a word-stem and synonym pass, so “sleeping” matches “sleep” and “car” matches “automobile”. Finally, if those fail, an AI judge decides whether the guess clearly means the same thing as a hidden answer. In practice this means natural phrasings are accepted, while vague or compound guesses (“food and stuff”) are usually rejected. Keep answers short and concrete.",
      },
      { type: "h2", text: "How this differs from the TV show" },
      {
        type: "ul",
        items: [
          "There is **no buzzer**. Face-Off players alternate turns instead of racing to buzz in.",
          "There is **no Fast Money** bonus round; the game is decided on the main-board rounds.",
          "There is **no human host** deciding whether an answer counts — the three-layer judge does it instantly and the same way for both teams.",
          "Rounds are **equal in value**, so there is no late-game point multiplier.",
        ],
      },
    ],
    faq: [
      {
        q: "Can the same player answer twice in a row?",
        a: "Only when they are the sole member of their team. Otherwise turns rotate through every teammate before coming back around.",
      },
      {
        q: "What happens if the Face-Off winner's team gives a wrong answer straight away?",
        a: "It counts as a strike like any other wrong answer. The answer revealed during the Face-Off stays on the board and its points stay in the pot.",
      },
      {
        q: "Do strikes carry over between rounds?",
        a: "No. Strikes reset to zero at the start of every round.",
      },
    ],
  },
  {
    slug: "how-to-win-family-feud-strategy",
    title: "How to Win at Family Feud: Strategy That Actually Works",
    description:
      "Practical strategy for survey games: how to think like the crowd, when to play safe in the Face-Off, how to manage strikes, and how to nail the steal.",
    category: "Strategy",
    published: "2026-09-03",
    readingMinutes: 7,
    blocks: [
      {
        type: "p",
        text:
          "Family Feud is not a trivia game, and the people who treat it like one lose. The board does not reward what is true or clever; it rewards what a hundred ordinary people said when a stranger asked them a question. Once you internalise that, every phase of the game has a clear best move. Here is the strategy, phase by phase.",
      },
      { type: "h2", text: "Rule zero: think like the survey" },
      {
        type: "p",
        text:
          "Before every answer, ask yourself one question: “If you stopped a hundred people in a shopping centre and asked them this, what would most of them blurt out?” Not the most accurate answer. Not the funniest. The first thing that would come to a tired parent, a teenager and a retiree alike. The top answer on a Feud board is almost always boring, and boring is worth 30 to 40 points.",
      },
      { type: "h2", text: "Face-Off: play it safe" },
      {
        type: "p",
        text:
          "On Friendly Feud, **any correct answer wins the Face-Off** — you do not need the number-one answer to take control of the board. That changes the maths completely. A guess you are 90% sure is on the board somewhere beats a guess you are 50% sure is the top answer. Take control first; the points come from clearing the board, not from the Face-Off itself.",
      },
      {
        type: "tip",
        text:
          "You have 25 seconds. Use the first ten to think of two candidates, then type the one that feels most obvious. Do not type the one that feels most impressive.",
      },
      { type: "h2", text: "Playing the board: order and communication" },
      {
        type: "p",
        text:
          "Turns rotate through your team automatically, so you cannot pick who answers next — but you can decide as a group what the next answer should be. Use the voice call or chat to agree on a candidate before the timer runs down, and let the person whose turn it is type it.",
      },
      {
        type: "ul",
        items: [
          "**Bank the obvious ones first.** If three teammates all shout the same answer, it is on the board. Take it.",
          "**Watch the point values you have already revealed.** If you have uncovered 32, 22 and 18, the remaining slots are small — the board is telling you the unusual answers are what is left.",
          "**Count strikes like a budget.** With zero strikes, a speculative guess is cheap. With two strikes, a speculative guess can hand the entire pot to the other team.",
        ],
      },
      { type: "h2", text: "The two-strike decision" },
      {
        type: "p",
        text:
          "The most important moment in a round is when your team has two strikes and one or two answers left. A third strike does not just lose the remaining points — it gives the other team a single chance to steal everything you have already revealed. So at two strikes, stop brainstorming for the perfect answer and settle for the most common remaining category: if the question is about food, name a staple; if it is about places, name the most ordinary place. Low-value slots are usually filled by unglamorous answers.",
      },
      { type: "h2", text: "The steal: one answer, choose it well" },
      {
        type: "p",
        text:
          "When you are stealing, your team has been watching the other side reveal answers, which is a huge advantage. Look at what is still hidden and at the revealed point values. Then pick the single most generic answer that has not appeared. Do not try to be original — if the other team missed it for three strikes, the remaining answer is probably something everyone considered “too obvious” to say.",
      },
      { type: "h2", text: "Phrasing your answer so it counts" },
      {
        type: "p",
        text:
          "Answers are matched in three layers — exact, synonym and word-stem, then an AI judge — so you do not need to guess the exact wording. You do need to be specific. “Watch TV” is fine; “TV” is fine; “probably watch something on the TV or maybe Netflix” asks the judge to pick between two different answers and can fail. One idea per answer, two or three words at most.",
      },
      { type: "h2", text: "Build a balanced team" },
      {
        type: "p",
        text:
          "The strongest Feud team is not the smartest one — it is the most average one. Mix ages, mix backgrounds, mix the person who cooks with the person who never does. Different people carry different “obvious” answers in their heads, and a survey board is a collection of everybody's obvious.",
      },
      { type: "h2", text: "Practise in Solo mode" },
      {
        type: "p",
        text:
          "Solo mode on the [lobby](/) lets you play boards on your own with the same judging rules. Ten minutes of solo play teaches you the rhythm of survey answers faster than any article, and your score is tracked on the [leaderboard](/leaderboard) if you sign in. Read the [solo mode guide](/blog/solo-mode-and-custom-topics-guide) for details.",
      },
      { type: "h2", text: "Common mistakes" },
      {
        type: "ol",
        items: [
          "**Overthinking.** Running the 25-second clock down while the team argues. Agree fast, answer, move on.",
          "**Going niche.** Naming your personal favourite instead of the crowd's favourite.",
          "**Compound answers.** Typing two ideas in one guess and hoping one sticks.",
          "**Ignoring the board.** Revealed point values are free information about what is left.",
          "**Forgetting the steal risk** at two strikes.",
        ],
      },
    ],
  },
  {
    slug: "family-feud-team-building-at-work",
    title: "Family Feud for Team Building: How to Run a Feud at Work",
    description:
      "How to use a Family Feud-style survey game as a team-building activity for remote and in-office teams — formats, timing, custom topics, and a facilitator checklist.",
    category: "Team building",
    published: "2026-09-03",
    readingMinutes: 7,
    blocks: [
      {
        type: "p",
        text:
          "Most team-building games have a flaw: they favour the loudest person, the one who knows the most trivia, or the one who has done the activity before. Survey games have none of those problems. The right answer is “what most people would say”, which means the quiet analyst and the new hire are exactly as likely to score as the sales lead. That is why a Family Feud-style round works so well as a meeting opener, an offsite activity or a Friday wind-down. Here is how to run one on Friendly Feud without any preparation.",
      },
      { type: "h2", text: "Three formats that work" },
      {
        type: "h3", text: "1. The 15-minute icebreaker" },
      {
        type: "p",
        text:
          "Create a 2-round room at the start of a meeting or workshop. Split attendees into two teams at random, play both rounds, declare a winner, and get on with the agenda. Two rounds is long enough for everyone to laugh at at least one answer and short enough that nobody resents it.",
      },
      { type: "h3", text: "2. Department vs. department" },
      {
        type: "p",
        text:
          "Name the teams after real departments — Engineering vs. Marketing, Support vs. Sales — and play 4 to 6 rounds. The friendly rivalry adds stakes, and mixed-experience teams mean juniors and seniors collaborate on equal footing.",
      },
      { type: "h3", text: "3. The tournament" },
      {
        type: "p",
        text:
          "Rooms hold up to 10 players, so for a larger company run several rooms in parallel and bring the winners together in a final. A bracket of four rooms takes about an hour including the final. Keep a shared scoreboard in your chat tool.",
      },
      { type: "h2", text: "Setting up" },
      {
        type: "ol",
        items: [
          "The facilitator opens the [lobby](/), enters a nickname and clicks **Create Room**. Choose the number of rounds and the player limit.",
          "Copy the invite link from inside the room and paste it into the meeting chat. Nobody needs to install anything or sign up; each person types a display name and picks a team.",
          "Rename the teams to something with a bit of personality — company in-jokes work well.",
          "Turn on a voice call if the team is remote. The in-game chat is fine for banter, but the fun of a Feud round is hearing the reactions.",
          "Start the game with **Classic Questions** for a general audience, or use a **Custom** topic (below) for something company-specific.",
        ],
      },
      { type: "h2", text: "Custom topics for company culture" },
      {
        type: "p",
        text:
          "The Custom Questions option generates a themed survey board from a short topic prompt. For work events this is where the format shines, because the questions can be about your world. A few prompts that have produced good rounds:",
      },
      {
        type: "ul",
        items: [
          "“Things people say in a status meeting”",
          "“Reasons a video call gets awkward”",
          "“Snacks that disappear from the office kitchen”",
          "“Excuses for missing a deadline”",
          "“Tools every remote worker has open all day”",
        ],
      },
      {
        type: "tip",
        text:
          "Custom rounds are generated on the fly and are marked beta. Preview a topic in Solo mode first if the event is high-stakes, and keep prompts light — the goal is recognition and laughter, not a performance review.",
      },
      { type: "h2", text: "Facilitator checklist" },
      {
        type: "ul",
        items: [
          "Send the invite link **five minutes early** so people can join while others are still arriving.",
          "Explain the one rule that surprises newcomers: only the **designated player's typed answer** counts, even though the whole team can discuss.",
          "Point out the **25-second timer** so nobody is caught out on their first turn.",
          "Read each question aloud and repeat the revealed answers — it keeps people who are multitasking in the loop.",
          "Between rounds, the game waits 60 seconds or until you press continue. Use that gap to recap the score.",
          "Screenshot the final scoreboard and post it in the team channel. Trophies are optional but strongly encouraged.",
        ],
      },
      { type: "h2", text: "Timing guide" },
      {
        type: "ul",
        items: [
          "**2 rounds** — 10 to 12 minutes. Ideal icebreaker.",
          "**4 rounds** — about 25 minutes. A standalone activity in a longer meeting.",
          "**6 to 8 rounds** — 35 to 50 minutes. A full social session or offsite slot.",
        ],
      },
      { type: "h2", text: "Keeping it inclusive" },
      {
        type: "p",
        text:
          "Because turns rotate automatically, everyone on a team answers at least once per round — nobody can hide, and nobody can dominate. If you have team members in different time zones or with different first languages, classic survey questions about everyday life travel well, while very culture-specific custom topics may not. When in doubt, pick questions about food, chores, holidays and pets.",
      },
    ],
    faq: [
      {
        q: "Is there a cost for using it at work?",
        a: "No. Friendly Feud is free and has no premium tier. The site is supported by advertising on its content pages; there are no ads inside game rooms.",
      },
      {
        q: "Can we play with more than ten people?",
        a: "A single room holds ten players. For larger groups, run several rooms at the same time and play a final between the winners.",
      },
    ],
  },
  {
    slug: "family-feud-in-the-classroom",
    title: "Family Feud in the Classroom: A Teacher's Guide",
    description:
      "How teachers can use a Family Feud-style survey game for review sessions, discussion warm-ups and end-of-term fun — with setups for one screen or many devices.",
    category: "Education",
    published: "2026-09-03",
    readingMinutes: 7,
    blocks: [
      {
        type: "p",
        text:
          "Quiz formats are a classroom staple because they turn recall into a game. A survey format adds something quizzes lack: it asks students to reason about what other people think, which is a useful skill in its own right and a natural springboard for discussion. This guide covers two ways to run Friendly Feud in a classroom, how to use custom topics for subject review, and some practical notes on age and privacy.",
      },
      { type: "h2", text: "Why survey games suit learning" },
      {
        type: "ul",
        items: [
          "**Low stakes, high participation.** There is no single right answer, so students who freeze on trivia still contribute.",
          "**Built-in discussion.** Every revealed board raises the question “why did people say that?” — perfect for social studies, language and health lessons.",
          "**Teamwork with structure.** Turns rotate automatically, so every student on a team answers rather than one confident voice.",
          "**Short cycles.** A round takes a few minutes, so it fits into the last ten minutes of a lesson.",
        ],
      },
      { type: "h2", text: "A note on age" },
      {
        type: "p",
        text:
          "Friendly Feud's [terms](/terms) require users to be 13 or older, and the classic question bank is written for a general adult audience — most questions are about everyday life, but some reference dating, alcohol or other grown-up topics. For younger classes, use the **one-screen setup** below, where only the teacher uses the site, and review the board before revealing it.",
      },
      { type: "h2", text: "Setup A: one screen, teacher types" },
      {
        type: "p",
        text:
          "This is the simplest and works for any age group. Open the [lobby](/) on the classroom display, start a **Solo** game, and read each question to the class. Students shout or raise hands, you choose which answer to type, and the board reveals in front of everyone. The solo score becomes the class score; try to beat it next week. Because only you are logged in, no student data touches the site at all.",
      },
      { type: "h2", text: "Setup B: small groups on devices" },
      {
        type: "p",
        text:
          "For students who meet the age requirement, create a multiplayer room, share the join link, and let them pick teams. Each player only needs a nickname — no accounts, no email. Set the player limit to the size of the group and the round count to fit the time you have (2 rounds for a warm-up, 4 for a full activity). Rooms hold up to ten players, so a class of thirty runs as three parallel games with a quick final between the winners.",
      },
      { type: "h2", text: "Custom topics for subject review" },
      {
        type: "p",
        text:
          "The **Custom Questions** option generates a survey-style board from a topic you type. It turns any unit into a game with zero preparation:",
      },
      {
        type: "ul",
        items: [
          "“Causes of the First World War”",
          "“Things you find in a plant cell”",
          "“Ways to reduce plastic waste”",
          "“Adjectives that describe a storm” (for a vocabulary lesson)",
          "“Reasons the Roman Republic fell”",
        ],
      },
      {
        type: "tip",
        text:
          "Generated boards are produced by an AI model and are marked beta. Run the topic once in Solo mode before class to check that the answers match what you have taught, and treat any surprising answer as a discussion prompt rather than a fact.",
      },
      { type: "h2", text: "Turning boards into discussion" },
      {
        type: "p",
        text:
          "The best learning happens after the reveal. Some prompts that work with almost any board:",
      },
      {
        type: "ul",
        items: [
          "“Why do you think this was the top answer? Who was probably surveyed?”",
          "“Which answer surprised you, and what does that tell us?”",
          "“If we surveyed this class instead, what would change?”",
          "“Write a better survey question for this topic” — then play it next lesson. Our guide on [writing survey questions](/blog/how-to-write-family-feud-survey-questions) has a simple formula students can follow.",
        ],
      },
      { type: "h2", text: "Classroom management tips" },
      {
        type: "ul",
        items: [
          "Agree in advance that the whole team may discuss but only the current player types — it prevents the fastest typist from taking over.",
          "Use the 25-second timer as a feature: it keeps the pace up and stops the “just one more idea” spiral.",
          "Between rounds the game pauses for up to 60 seconds. That gap is your moment to ask a discussion question.",
          "Keep a running scoreboard on the whiteboard across weeks. Students remember a term-long rivalry far longer than a one-off game.",
        ],
      },
      { type: "h2", text: "Privacy in short" },
      {
        type: "p",
        text:
          "No student needs an account. Nicknames live in the browser and on the server only for the duration of the game session, after which they are removed. Full details are in the [privacy policy](/privacy). Ads never appear inside game rooms, only on informational pages like this one.",
      },
    ],
  },
  {
    slug: "how-to-write-family-feud-survey-questions",
    title: "How to Write Great Family Feud Survey Questions (With Examples)",
    description:
      "A formula for writing survey questions that produce fun, fair Family Feud boards: what to ask, how many answers to include, how to assign points, and mistakes to avoid.",
    category: "Questions",
    published: "2026-09-03",
    readingMinutes: 8,
    blocks: [
      {
        type: "p",
        text:
          "A great survey question feels effortless when you hear it and is surprisingly hard to write. It has to be open enough that a hundred people would give different answers, closed enough that those answers cluster into a handful of clear winners, and neutral enough that nobody feels excluded. Whether you are writing questions for a party, a classroom, or a custom round on Friendly Feud, the same rules apply. Browse our library of [free survey questions](/questions) for reference boards as you read.",
      },
      { type: "h2", text: "What makes a question work" },
      {
        type: "ul",
        items: [
          "**It has many plausible answers.** “Name something you keep in your car” works; “What colour is the sky?” does not.",
          "**The answers cluster.** Ask a hundred people what they keep in their car and you get five or six big groups (sunglasses, phone charger, tissues, water, snacks) plus a long tail. That cluster is your board.",
          "**One answer is clearly the favourite.** A board with a 40-point top answer and a 5-point bottom answer is fun; a board where every answer is worth 15 is flat.",
          "**Anyone can play it.** No specialist knowledge, no age-specific references, no trick wording.",
        ],
      },
      { type: "h2", text: "The “Name something…” formula" },
      {
        type: "p",
        text:
          "Most classic survey questions follow one of a few templates. Start with these and you will rarely go wrong:",
      },
      {
        type: "ul",
        items: [
          "**Name something (people do / you find / that happens) …** — “Name something people do in the shower.”",
          "**Name a reason …** — “Name a reason you might be late for work.”",
          "**Name a place where …** — “Name a place where people whisper.”",
          "**Besides X, name …** — “Besides milk, name a popular dairy product.” The “besides” clause removes the one answer that would dominate the board.",
          "**If X, what would …** — “If your cat could talk, name something it would ask for.” Hypotheticals produce the funniest boards.",
        ],
      },
      { type: "h2", text: "How many answers, and how to score them" },
      {
        type: "p",
        text:
          "Aim for **four to eight answers** per board. Fewer than four makes the Playing phase trivial; more than eight drags. Point values should add up to roughly 100 (they represent people out of a hundred) and should fall steeply: something like 38 / 22 / 16 / 12 / 7 / 5. If you can, run a real mini-survey — ask twenty friends in a group chat and count. If you cannot, rank your answers by how obvious they feel and assign a descending spread. The exact numbers matter less than the shape.",
      },
      { type: "h2", text: "Three worked examples" },
      { type: "h3", text: "Example 1 — everyday life" },
      {
        type: "p",
        text:
          "**Question:** Name something people forget to pack when they travel. **Board:** Toothbrush 34, Phone charger 27, Underwear 15, Sunscreen 9, Medication 8, Passport 7. Notice the shape: one dominant answer, a strong second, and a tail of small ones that make the two-strike decision interesting.",
      },
      { type: "h3", text: "Example 2 — the “besides” trick" },
      {
        type: "p",
        text:
          "**Question:** Besides a cake, name something you see at almost every birthday party. **Board:** Balloons 36, Presents 24, Candles 18, Party hats 11, Games 6, Music 5. Without “besides a cake”, cake would take 70 points and the rest of the board would be dead.",
      },
      { type: "h3", text: "Example 3 — a hypothetical" },
      {
        type: "p",
        text:
          "**Question:** If dogs could use phones, name something they would do all day. **Board:** Order food 31, Video-call their owner 26, Watch squirrel videos 19, Bark at notifications 13, Take selfies 11. Hypotheticals reward imagination, but the top answers are still the “obvious” jokes most people would reach for.",
      },
      { type: "h2", text: "Mistakes that ruin a board" },
      {
        type: "ol",
        items: [
          "**Yes/no or single-answer questions.** “Do you like pizza?” has no board.",
          "**Trivia in disguise.** “Name a capital city in South America” is a knowledge test, not a survey.",
          "**Ambiguous wording.** “Name something hot” could mean temperature, spice or popularity; players will feel cheated whichever way you score it.",
          "**Overlapping answers.** If “Coffee” and “Espresso” are separate slots, the judge has to guess which one a player meant. Merge them.",
          "**Sensitive topics.** Questions about religion, politics, bodies or money can sour a friendly game fast. Keep it light.",
        ],
      },
      { type: "h2", text: "Writing for the answer judge" },
      {
        type: "p",
        text:
          "On Friendly Feud, answers are matched in three layers: exact match, synonym and word-stem matching, and finally an AI judge for anything ambiguous. When you write a board, phrase each answer as the **most common short form** — “Watch TV” rather than “Watching television programmes” — so the first two layers catch most guesses and the AI only has to handle the unusual ones.",
      },
      { type: "h2", text: "Or let the game write it" },
      {
        type: "p",
        text:
          "If you have a topic but no time, the **Custom Questions** option in any room (and in Solo mode) generates a survey-style board from a one-line prompt. The best prompts look like the templates above: a category plus a situation, such as “things that go wrong at a barbecue”. Read the [custom topics guide](/blog/solo-mode-and-custom-topics-guide) for tips on getting good boards out of it.",
      },
    ],
  },
  {
    slug: "solo-mode-and-custom-topics-guide",
    title: "Solo Mode and Custom Topics: Practice Rounds and Themed Boards",
    description:
      "A guide to Friendly Feud's single-player mode and AI-generated custom topics: how scoring works, how to write a good topic prompt, and how the leaderboard tracks your stats.",
    category: "Features",
    published: "2026-09-03",
    readingMinutes: 6,
    blocks: [
      {
        type: "p",
        text:
          "Multiplayer is the heart of a Feud night, but two features get far less attention than they deserve: **Solo mode**, which lets you play boards on your own, and **Custom topics**, which generate a themed round from a single line of text. Together they turn the game into a five-minute practice tool, a way to preview questions before an event, and a generator for boards about literally anything. Here is how they work.",
      },
      { type: "h2", text: "Solo mode" },
      {
        type: "p",
        text:
          "From the [lobby](/), click **Solo Play**. Choose between **Classic** (questions from the 8,700+ survey bank) and **Custom Topic**, pick 2 to 10 rounds, and start. There is no Face-Off and no opposing team — each round simply presents a board, and you type answers with the same 25-second timer and the same three-layer answer judge as multiplayer. Three strikes end the round; clearing the board banks every point.",
      },
      {
        type: "ul",
        items: [
          "**Scoring:** your score is the total of every answer you reveal across all rounds. A perfect board is worth roughly 100 points, so a 10-round game tops out near 1,000.",
          "**Pace:** with nobody else to wait for, a round takes about two minutes. Ten rounds is a satisfying coffee-break session.",
          "**Purpose:** solo play is the fastest way to learn what survey answers “feel” like. Our [strategy guide](/blog/how-to-win-family-feud-strategy) recommends it before your first competitive game.",
        ],
      },
      { type: "h2", text: "Custom topics" },
      {
        type: "p",
        text:
          "Custom topics are available in Solo mode and, for hosts, in any multiplayer waiting room via **Custom Questions (Beta)**. You type a short topic and an AI model writes a survey-style question with a board of answers and point values in the same format as the classic bank. The board is generated fresh each time, so the same topic can produce different questions on different days.",
      },
      { type: "h3", text: "Writing a topic that produces a good board" },
      {
        type: "ul",
        items: [
          "**Give it a situation, not just a noun.** “Camping” is vague; “things that go wrong on a camping trip” gives the model a clear survey to imagine.",
          "**Keep it relatable.** The model generates answers the way a crowd would; niche fandoms and inside jokes produce thin boards.",
          "**Say who the crowd is if it matters.** “What teenagers spend money on” and “what retirees spend money on” are different boards.",
          "**Mind the tone.** Light, everyday topics make the best game boards. Sensitive subjects tend to produce awkward answers.",
        ],
      },
      { type: "h3", text: "Topic ideas that work well" },
      {
        type: "ul",
        items: [
          "“Things people do the night before a flight”",
          "“Reasons a toddler is crying”",
          "“Excuses for being on your phone at dinner”",
          "“Things you hear at a football match”",
          "“Foods people pretend to like”",
        ],
      },
      {
        type: "tip",
        text:
          "The feature is in beta. If a generated board looks off, start another solo game with a reworded topic — it takes seconds, and boards for a live event are worth previewing in advance.",
      },
      { type: "h2", text: "Accounts, stats and the leaderboard" },
      {
        type: "p",
        text:
          "You never need an account to play. If you do create one (it is free), two things happen: your nickname is reserved so nobody else can use it, and your results are recorded. Multiplayer stats cover games won and lost, rounds won and lost, correct and wrong guesses, successful steals and total points. Solo results are counted separately so practice runs never inflate the competitive [leaderboard](/leaderboard). Signed-in players can switch the leaderboard between multiplayer and solo views and sort by any column.",
      },
      { type: "h2", text: "A five-minute practice routine" },
      {
        type: "ol",
        items: [
          "Start a **2-round Classic** solo game. On each board, say your first instinct out loud before typing — then check whether it was the top answer.",
          "Start a **2-round Custom** game on a topic you know well. Notice how the generated top answers are still the boring, obvious ones.",
          "Look at your final score and, if you are signed in, how it moved you on the solo leaderboard.",
          "Now go and win a [multiplayer game](/).",
        ],
      },
    ],
  },
];

export const BLOG_POSTS_BY_SLUG: Record<string, BlogPost> = Object.fromEntries(
  BLOG_POSTS.map((post) => [post.slug, post]),
);

// Sanity check at module load: every slug in blogSlugs.ts must have a post,
// otherwise prerendering would emit an empty 404 page for it.
for (const slug of BLOG_SLUGS) {
  if (!BLOG_POSTS_BY_SLUG[slug]) {
    throw new Error(`blogPosts.ts is missing content for slug "${slug}"`);
  }
}
