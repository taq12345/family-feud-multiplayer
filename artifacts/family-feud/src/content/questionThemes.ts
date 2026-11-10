// Themed question lists for /questions and /questions/<slug>.
//
// Every question, answer and host note in this file was written for Friendly
// Feud. The point values are SUGGESTED weights chosen by us (each board adds
// up to 100, most likely answer first); they are not results from a survey
// and the pages must never describe them as such.
//
// These lists are editorial content for people running their own game night.
// They are separate from the classic question bank the game server uses.
// Theme slugs must match QUESTION_THEME_SLUGS in ./blogSlugs.ts.

export interface ThemeQuestion {
  q: string;
  a: { text: string; pts: number }[];
  /** One or two sentences for the host: why the board plays well, or how to run it. */
  note: string;
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

function board(q: string, answers: [string, number][], note: string): ThemeQuestion {
  return { q, a: answers.map(([text, pts]) => ({ text, pts })), note };
}

export const QUESTION_THEMES: QuestionTheme[] = [
  {
    slug: "christmas",
    name: "Christmas",
    title: "Christmas Family Feud Questions & Answers",
    h1: "Christmas Family Feud Questions",
    description:
      "12 original Christmas survey questions with answers and suggested points, written for family game night: wrapping, stockings, leftovers and holiday arguments.",
    intro: [
      "Christmas is the busiest game-night season of the year, and a survey game beats charades because nobody has to perform. Players only have to guess what most people would say. We wrote the twelve boards below for that mixed crowd: grandparents, teenagers and the cousin who arrived late.",
      "Each board lists its answers from most to least likely, with suggested points that add up to 100. The points are our own weighting, not the result of a survey, so adjust them if your family disagrees. Open a question to see the board and a short note on how it tends to play.",
    ],
    tips: [
      "Mix generations on each team. A grandparent and a teenager reach for different \"obvious\" answers, and these boards reward both.",
      "Run four boards after dinner. That takes about 25 minutes, long enough to crown a winner before dessert.",
      "For an office party, swap in a Custom topic in the online game, such as \"things that go wrong at the company holiday party\".",
    ],
    questions: [
      board(
        "Name something that goes missing just when you need to wrap presents.",
        [["Tape", 44], ["Scissors", 27], ["Gift tags", 12], ["Wrapping paper", 9], ["A pen", 5], ["Ribbon", 3]],
        "A strong opener. Everyone has hunted for the tape on Christmas Eve, so the top answer lands in seconds and the room warms up.",
      ),
      board(
        "Name a job someone in the family gets stuck with every Christmas.",
        [["Cooking dinner", 34], ["Washing up", 24], ["Untangling the lights", 16], ["Wrapping presents", 12], ["Assembling toys", 8], ["Driving relatives", 6]],
        "Expect players to answer with a pointed look at a relative. Accept any wording that names the same job.",
      ),
      board(
        "Name something a kid does to prove they have been good just before Christmas.",
        [["Tidies their room", 31], ["Helps with chores", 24], ["Goes to bed on time", 17], ["Is nice to a sibling", 14], ["Eats their vegetables", 8], ["Writes to Santa", 6]],
        "Let the youngest player on each team answer first. Children know this board better than the adults do.",
      ),
      board(
        "Name something you would find at the bottom of a Christmas stocking.",
        [["Candy", 34], ["An orange", 24], ["Chocolate coins", 17], ["Socks", 12], ["Nuts", 8], ["A small toy", 5]],
        "Answers depend on where a family is from. If your house has its own stocking tradition, add it as a bonus answer.",
      ),
      board(
        "Name a reason the Christmas tree ends up leaning.",
        [["The cat", 33], ["Kids pulled on it", 22], ["A wobbly stand", 20], ["Too many ornaments", 13], ["A crooked trunk", 8], ["The dog", 4]],
        "Pet owners get the top answer at once. The stand and the ornaments are where teams usually pick up strikes.",
      ),
      board(
        "Name something people say when they open a present they do not like.",
        [["\"I love it!\"", 38], ["\"You shouldn't have\"", 24], ["\"Oh, wow\"", 15], ["\"Just what I needed\"", 12], ["\"Did you keep the receipt?\"", 7], ["\"How thoughtful\"", 4]],
        "Ask players to say their answer in the voice they would use. Judge on meaning, not exact words.",
      ),
      board(
        "Name something that makes a house smell like Christmas.",
        [["A pine tree", 32], ["Cinnamon", 24], ["Baking cookies", 21], ["Roast dinner", 11], ["Oranges and cloves", 7], ["Candles", 5]],
        "The top three are close together, so this board is good for a steal. No single answer runs away with it.",
      ),
      board(
        "Name something Santa would complain about if he left online reviews.",
        [["Narrow chimneys", 31], ["No cookies left out", 25], ["Barking dogs", 17], ["Kids still awake", 14], ["No milk", 8], ["Nowhere to park the sleigh", 5]],
        "The silliest board in the set. Use it when energy dips, and reward inventive answers with applause even when they miss.",
      ),
      board(
        "Name something people do with Christmas leftovers.",
        [["Make sandwiches", 41], ["Turn them into soup", 19], ["Freeze them", 15], ["Send them home with guests", 12], ["Eat them for breakfast", 8], ["Feed the dog", 5]],
        "A clear favourite at the top makes this a fair Face-Off question: whoever buzzes first usually wins control.",
      ),
      board(
        "Name a sign someone started their Christmas shopping too late.",
        [["Empty shelves", 28], ["Gift cards for everyone", 26], ["Paying for express shipping", 19], ["Shopping on Christmas Eve", 15], ["Gifts from the gas station", 8], ["Presents arrive in January", 4]],
        "Two answers fight for first place, which makes the reveal more fun than usual. Read the board from the bottom up.",
      ),
      board(
        "Name something that ends up on the floor by the end of Christmas morning.",
        [["Wrapping paper", 52], ["Pine needles", 16], ["Ribbons and bows", 12], ["Toy packaging", 10], ["Crumbs", 6], ["Tinsel", 4]],
        "One answer holds more than half the points. Teams that miss it rarely recover, so save this for a deciding round.",
      ),
      board(
        "Name something grown-ups argue about over the holidays.",
        [["Whose house to visit", 27], ["Politics", 23], ["Board game rules", 18], ["How to cook the turkey", 14], ["The thermostat", 10], ["What to watch", 8]],
        "Keep it light. If the room is already tense, skip this board and play the Santa reviews one instead.",
      ),
    ],
  },
  {
    slug: "halloween",
    name: "Halloween",
    title: "Halloween Family Feud Questions & Answers",
    h1: "Halloween Family Feud Questions",
    description:
      "12 original Halloween survey questions with answers and suggested points: costumes, candy, haunted houses and friendly monsters for parties and classrooms.",
    intro: [
      "A Halloween party needs one game that works while people are still arriving in costume. These twelve boards are about candy, costumes, haunted houses and the monsters who live in them, and they are gentle enough for a mixed-age crowd.",
      "We wrote every question for Friendly Feud. Answers run from most to least likely, and the suggested points on each board add up to 100. They are our own weighting, not survey data. Open a question to see its board and a note for the host.",
    ],
    tips: [
      "Give the teams monster names and let the losing team hand out the candy.",
      "Teachers: play the first few boards on one screen with the class calling out answers, then talk about why the top answer was the most popular.",
      "Keep the boards with a top answer of 40 or more for younger players. They are the easiest to get on the first guess.",
    ],
    questions: [
      board(
        "Name a costume you can make from things already in your closet.",
        [["Ghost", 36], ["Cowboy", 17], ["Pirate", 15], ["Zombie", 13], ["Tourist", 10], ["Scarecrow", 9]],
        "The bedsheet ghost wins easily. After that the board is flat, so every remaining answer is a real guess.",
      ),
      board(
        "Name the candy kids trade away first.",
        [["Candy corn", 30], ["Raisins", 24], ["Black licorice", 19], ["Hard candy", 12], ["Mints", 9], ["Lollipops", 6]],
        "This starts arguments, because somebody in the room always loves the candy everyone else trades away.",
      ),
      board(
        "Name something that makes a house look haunted.",
        [["Cobwebs", 28], ["Broken windows", 21], ["A creaky door", 17], ["An overgrown yard", 15], ["Flickering lights", 12], ["Peeling paint", 7]],
        "A good board for a full round: six clear answers, and none of them is obscure.",
      ),
      board(
        "Name something a ghost would find annoying about haunting a modern house.",
        [["Security cameras", 27], ["Lights that never go off", 21], ["Nobody is scared anymore", 19], ["The robot vacuum", 14], ["Pets that can see them", 12], ["A loud TV", 7]],
        "A harder, funnier board. Give teams a few extra seconds to talk before the first answer.",
      ),
      board(
        "Name something people carve into a pumpkin besides a face.",
        [["A cat", 29], ["A bat", 22], ["A witch", 17], ["A ghost", 14], ["Their name", 10], ["Stars", 8]],
        "The word \"besides\" removes the obvious answer, so players have to think about what the second-most-common idea is.",
      ),
      board(
        "Name a reason a kid comes home early from trick-or-treating.",
        [["The bag is full", 29], ["Got too cold", 22], ["Got scared", 18], ["Tired feet", 14], ["Rain", 11], ["The costume broke", 6]],
        "Children and parents answer this differently. Split them across teams for the best result.",
      ),
      board(
        "Name a sound that makes a scary movie scarier.",
        [["A creaking door", 27], ["Footsteps", 22], ["Screaming", 18], ["Creepy music", 15], ["Whispering", 10], ["Thunder", 8]],
        "Invite players to perform the sound instead of saying it. The host decides which answer it matches.",
      ),
      board(
        "Name something a vampire would have trouble doing at a dinner party.",
        [["Eating the garlic bread", 36], ["Checking the mirror", 21], ["Staying until sunrise", 16], ["Not biting the guests", 14], ["Getting invited in", 9], ["Smiling for photos", 4]],
        "This rewards anyone who knows the vampire rules. The lower answers are a nice surprise on the reveal.",
      ),
      board(
        "Name something adults do on Halloween after the kids go to bed.",
        [["Eat the kids' candy", 46], ["Watch a scary movie", 24], ["Go to a party", 13], ["Take down the decorations", 7], ["Sort the candy", 6], ["Go to sleep", 4]],
        "Every parent in the room will get the top answer and then look guilty. A reliable laugh.",
      ),
      board(
        "Name something a witch keeps in her kitchen.",
        [["A cauldron", 39], ["A broomstick", 19], ["Potions", 15], ["A black cat", 12], ["A spell book", 9], ["Frogs", 6]],
        "An easy board for young players. Use it early to give a quieter team some points.",
      ),
      board(
        "Name a costume that is hard to sit down in.",
        [["Inflatable dinosaur", 28], ["Cardboard-box robot", 22], ["Mermaid", 17], ["Suit of armor", 14], ["Mummy", 11], ["Hot dog", 8]],
        "If someone at the party is wearing one of these, make them the team captain for the round.",
      ),
      board(
        "Name something you would hate to hear at night when you are home alone.",
        [["Footsteps upstairs", 33], ["A knock at the door", 24], ["Breaking glass", 17], ["A door creaking", 12], ["Whispering", 8], ["Your own name", 6]],
        "Dim the lights for this one. It works best as the last board of the night.",
      ),
    ],
  },
  {
    slug: "thanksgiving",
    name: "Thanksgiving",
    title: "Thanksgiving Family Feud Questions & Answers",
    h1: "Thanksgiving Family Feud Questions",
    description:
      "12 original Thanksgiving survey questions with answers and suggested points: the meal, the guests, the kids' table and the leftovers. Made to play after dinner.",
    intro: [
      "Thanksgiving is the original family game night. Everyone is in one room, dinner is over, and nobody wants to do the dishes. These twelve boards are about the meal, the guests, the football game in the background and the leftovers that follow.",
      "All of them were written for Friendly Feud. The points are suggested values that add up to 100 per board, weighted toward the answer we expect most tables to say first. They are not survey results, so change them freely.",
    ],
    tips: [
      "Split the table into \"cooks\" against \"guests\" for instant rivalry.",
      "Read questions aloud even when everyone can see the screen. It keeps the kids' table involved.",
      "Save the food boards for last. They produce the loudest arguments.",
    ],
    questions: [
      board(
        "Name a dish that runs out first at Thanksgiving dinner.",
        [["Mashed potatoes", 31], ["Stuffing", 24], ["Rolls", 16], ["Mac and cheese", 13], ["Gravy", 10], ["Pie", 6]],
        "Every family believes its own answer is the universal one. Expect a debate before the first guess.",
      ),
      board(
        "Name something the cook yells from the kitchen on Thanksgiving.",
        [["\"Dinner's ready!\"", 29], ["\"Get out of my kitchen!\"", 24], ["\"Who's setting the table?\"", 17], ["\"Don't touch that!\"", 14], ["\"Is the oven on?\"", 9], ["\"I need help!\"", 7]],
        "Best played with the actual cook on one of the teams. Judge on meaning, since nobody will say the exact phrase.",
      ),
      board(
        "Name something people do after Thanksgiving dinner.",
        [["Take a nap", 38], ["Watch football", 24], ["Wash the dishes", 14], ["Eat pie", 11], ["Go for a walk", 8], ["Play games", 5]],
        "A good Face-Off question. The top answer is obvious to most people and quick to say.",
      ),
      board(
        "Name a reason the turkey is not ready on time.",
        [["It was still frozen", 37], ["It went in too late", 22], ["The oven was too full", 14], ["The bird was too big", 12], ["The oven broke", 9], ["Nobody turned the oven on", 6]],
        "Anyone who has cooked the meal has a story for this one. Let them tell it after the board is cleared.",
      ),
      board(
        "Name something you would find at the kids' table.",
        [["Spilled drinks", 28], ["Crayons", 21], ["Plastic cups", 17], ["Chicken nuggets", 13], ["Paper plates", 12], ["One unlucky teenager", 9]],
        "The last answer gets the biggest laugh of the set, especially from the teenager in question.",
      ),
      board(
        "Name something people say they are thankful for when put on the spot.",
        [["Family", 44], ["Health", 21], ["Food", 14], ["Friends", 10], ["A job", 7], ["The dog", 4]],
        "A gentle board that suits the day. Follow it by asking each player for a real answer of their own.",
      ),
      board(
        "Name a topic that should be banned from the Thanksgiving table.",
        [["Politics", 41], ["Money", 16], ["Who is still single", 15], ["Religion", 12], ["Diets", 9], ["Old family feuds", 7]],
        "Play it for laughs and move on quickly. The point is to name the topics, not to start them.",
      ),
      board(
        "Name a container that Thanksgiving leftovers go home in.",
        [["Plastic tubs", 36], ["Foil", 24], ["Zip-top bags", 16], ["An old butter tub", 12], ["A paper plate under foil", 8], ["A pie tin", 4]],
        "Surprisingly competitive. The reused butter tub is the answer people are proudest to get.",
      ),
      board(
        "Name something a guest brings even when told \"just bring yourself\".",
        [["A pie", 31], ["Flowers", 22], ["A bottle of something", 18], ["Rolls", 13], ["A side dish", 10], ["A bag of ice", 6]],
        "Hosts and guests see this differently. Put them on opposite teams.",
      ),
      board(
        "Name something that happens at the Thanksgiving table every single year.",
        [["Someone tells the same story", 27], ["Something gets spilled", 22], ["An argument", 18], ["Someone arrives late", 15], ["There is too much food", 11], ["Someone falls asleep", 7]],
        "The answers are spread out, so strikes come fast. A good board for a comeback by the trailing team.",
      ),
      board(
        "Name a job nobody volunteers for on Thanksgiving.",
        [["Washing the dishes", 38], ["Carving the turkey", 17], ["Taking out the trash", 15], ["Peeling potatoes", 13], ["Entertaining the kids", 10], ["Scrubbing the roasting pan", 7]],
        "House rule worth trying: the losing team of this round does the top answer.",
      ),
      board(
        "Name something on the Thanksgiving table that is mostly there for decoration.",
        [["Cranberry sauce", 29], ["A flower centerpiece", 24], ["Candles", 17], ["Mini pumpkins", 14], ["The salad", 10], ["Fancy napkins", 6]],
        "Cranberry sauce fans will protest. Let them, then reveal the points.",
      ),
    ],
  },
  {
    slug: "for-kids",
    name: "For Kids",
    title: "Family Feud Questions for Kids (Family-Friendly)",
    h1: "Family Feud Questions for Kids",
    description:
      "12 original, family-friendly survey questions for kids with answers and suggested points: school, pets, snow days, birthdays and bedtime. Safe for classrooms.",
    intro: [
      "Survey games suit children because there is no trivia to know. The answers are things any kid has noticed about school, pets, toys and family life. We wrote these twelve boards for players aged about six and up, with nothing that needs explaining to a younger sibling.",
      "Each board lists answers from most to least likely with suggested points that add up to 100. The points are our own weighting, not survey results. Younger players do best when an adult reads the question and types the answers on one screen.",
    ],
    tips: [
      "For ages under 10, ignore the timer and let the team talk it out before answering.",
      "Turn a board into a lesson: after revealing the answers, ask why the top answer was the most popular.",
      "Friendly Feud accounts are for players 13 and up. Younger kids should play on a grown-up's screen.",
    ],
    questions: [
      board(
        "Name something you would pack for a sleepover.",
        [["Pajamas", 30], ["A pillow", 22], ["A toothbrush", 17], ["A stuffed animal", 14], ["A sleeping bag", 11], ["Snacks", 6]],
        "Every answer is something a child has packed, so even the youngest player can score.",
      ),
      board(
        "Name an excuse for not doing your homework.",
        [["The dog ate it", 31], ["I forgot", 25], ["I left it at school", 17], ["I was sick", 12], ["It was too hard", 9], ["I had no pencil", 6]],
        "Teachers love this board. Ask the class which excuse they think works least well.",
      ),
      board(
        "Name something that is more fun in the rain.",
        [["Jumping in puddles", 46], ["Playing in the mud", 18], ["Watching a movie inside", 14], ["Playing soccer", 10], ["Catching raindrops", 7], ["Building a fort indoors", 5]],
        "The top answer is worth almost half the board. Use this one when a team needs a quick win.",
      ),
      board(
        "Name an animal you would love as a pet but are not allowed to have.",
        [["A monkey", 25], ["A tiger", 21], ["A horse", 17], ["A snake", 14], ["A penguin", 12], ["An elephant", 11]],
        "The points are spread evenly, so this board has no safe guess. Good for older kids who want a challenge.",
      ),
      board(
        "Name something you would find in a kid's pocket.",
        [["Candy wrappers", 27], ["Rocks", 23], ["Coins", 17], ["Tissues", 13], ["A small toy", 12], ["Crumbs", 8]],
        "Have players empty their own pockets after the round and award a bonus point for any match.",
      ),
      board(
        "Name the best thing about a snow day.",
        [["No school", 43], ["Building a snowman", 19], ["Sledding", 15], ["Snowball fights", 11], ["Hot chocolate", 8], ["Sleeping in", 4]],
        "Works anywhere it snows. In warm places, change the question to \"a day off school\".",
      ),
      board(
        "Name something a superhero needs.",
        [["A cape", 32], ["A superpower", 25], ["A mask", 17], ["A secret identity", 11], ["A sidekick", 9], ["A cool car", 6]],
        "Follow up by asking each team to invent a superhero using only the answers on the board.",
      ),
      board(
        "Name a chore kids try to get out of.",
        [["Cleaning their room", 34], ["Washing the dishes", 22], ["Taking out the trash", 16], ["Making the bed", 13], ["Walking the dog", 9], ["Folding laundry", 6]],
        "Parents and children agree on this board more than on any other in the set.",
      ),
      board(
        "Name something that makes a birthday party great.",
        [["Cake", 33], ["Presents", 24], ["Friends", 17], ["Games", 12], ["Balloons", 8], ["A bouncy castle", 6]],
        "The natural opening board for a birthday party game.",
      ),
      board(
        "Name something you would see on a school trip to the zoo.",
        [["Monkeys", 26], ["Lions", 22], ["Elephants", 18], ["Giraffes", 14], ["Penguins", 11], ["The gift shop", 9]],
        "Accept any animal on the board in any wording. The gift shop is the answer adults get and kids miss.",
      ),
      board(
        "Name a food kids would eat every day if they could.",
        [["Pizza", 36], ["Ice cream", 21], ["Chicken nuggets", 16], ["French fries", 12], ["Mac and cheese", 9], ["Candy", 6]],
        "Fast and loud. Play it right before the food arrives.",
      ),
      board(
        "Name something a grown-up says when it is bedtime.",
        [["\"Brush your teeth\"", 31], ["\"Lights out\"", 23], ["\"No more screens\"", 17], ["\"It's late\"", 12], ["\"One more story, then sleep\"", 10], ["\"Goodnight\"", 7]],
        "A calm board to finish on. Kids enjoy doing impressions of the grown-ups for this one.",
      ),
    ],
  },
  {
    slug: "for-work",
    name: "For Work",
    title: "Family Feud Questions for Work & the Office",
    h1: "Family Feud Questions for Work",
    description:
      "12 original survey questions for work and team building with answers and suggested points: video calls, meetings, the office fridge and email phrases.",
    intro: [
      "Survey questions are a safe team-building game. Nobody is put on the spot for knowledge, and the right answer is simply what most people would say. We wrote these twelve boards about video calls, meetings, the shared fridge and office email, so any team can relate to them.",
      "Answers run from most to least likely, and the suggested points on each board add up to 100. They are our own weighting, not survey data. Use the boards as a ten-minute meeting opener, or run a tournament between departments.",
    ],
    tips: [
      "Name the teams after real departments to raise the stakes.",
      "Two boards make a good icebreaker. Six fill a Friday social.",
      "For something specific to your company, generate a Custom topic in the online game, such as \"things people say in a status meeting\".",
    ],
    questions: [
      board(
        "Name something people say at the start of a video call.",
        [["\"Can you hear me?\"", 37], ["\"You're on mute\"", 26], ["\"Can you see my screen?\"", 15], ["\"Let's give it a minute\"", 10], ["\"Sorry I'm late\"", 8], ["\"Who just joined?\"", 4]],
        "The ideal first board for a remote team. Someone will say one of the answers by accident before the round starts.",
      ),
      board(
        "Name something that disappears from the office fridge.",
        [["Someone's lunch", 41], ["Milk", 20], ["Yogurt", 13], ["Leftover cake", 11], ["Drinks", 9], ["Salad dressing", 6]],
        "A harmless way to raise a real complaint. Do not ask who took the lunch.",
      ),
      board(
        "Name a reason a meeting runs over.",
        [["Someone keeps talking", 33], ["It started late", 22], ["Technical problems", 16], ["There was no agenda", 14], ["It went off topic", 10], ["Too many questions", 5]],
        "Useful before a planning session. The board doubles as a list of things to avoid.",
      ),
      board(
        "Name something you would find on a coworker's desk.",
        [["A coffee mug", 28], ["Family photos", 22], ["A plant", 16], ["Sticky notes", 14], ["Snacks", 12], ["A stress ball", 8]],
        "Easy and friendly. A good board for new starters who do not know the team's in-jokes yet.",
      ),
      board(
        "Name an email phrase that really means \"I'm annoyed\".",
        [["\"Per my last email\"", 39], ["\"As previously discussed\"", 21], ["\"Just following up\"", 16], ["\"Friendly reminder\"", 12], ["\"Going forward\"", 7], ["\"Thanks in advance\"", 5]],
        "Usually the favourite board of the session. Accept close wordings and expect confessions.",
      ),
      board(
        "Name something people do on their first day at a new job.",
        [["Fill out paperwork", 27], ["Meet the team", 24], ["Get lost in the building", 16], ["Set up their computer", 14], ["Forget everyone's name", 12], ["Arrive far too early", 7]],
        "A good choice for onboarding events. Ask the newest person which answers were true for them.",
      ),
      board(
        "Name something people do while working from home that they would never do in the office.",
        [["Wear pajamas", 38], ["Take a nap at lunch", 19], ["Do the laundry", 16], ["Work from bed", 12], ["Watch TV", 9], ["Skip the shower", 6]],
        "Hybrid teams split on this one. Office-only staff tend to guess higher than the people who work from home.",
      ),
      board(
        "Name a reason someone is late back from lunch.",
        [["A long line", 30], ["Slow service", 22], ["Traffic", 17], ["Lost track of time", 14], ["Running an errand", 11], ["No parking", 6]],
        "The answers are close in value, which keeps both teams in the round until the end.",
      ),
      board(
        "Name something at work that breaks at the worst possible time.",
        [["The printer", 36], ["The Wi-Fi", 26], ["A laptop", 15], ["The projector", 10], ["The coffee machine", 8], ["The elevator", 5]],
        "Everyone has a printer story. Budget a minute for them after the reveal.",
      ),
      board(
        "Name something you hear at every team meeting.",
        [["\"Let's circle back\"", 26], ["\"Any questions?\"", 22], ["\"Quick update\"", 18], ["\"Let's take that offline\"", 16], ["\"Can everyone see this?\"", 11], ["\"We're out of time\"", 7]],
        "Turn it into a running joke: anyone who says a board answer for the rest of the day owes the team a coffee.",
      ),
      board(
        "Name a treat coworkers bring in to share.",
        [["Donuts", 37], ["Cake", 21], ["Cookies", 17], ["Bagels", 11], ["Chocolates", 9], ["Fruit", 5]],
        "Play this one with the real thing on the table.",
      ),
      board(
        "Name something people look forward to at work.",
        [["Payday", 33], ["Friday", 26], ["Lunch", 16], ["Vacation", 12], ["Going home", 8], ["Free food", 5]],
        "A positive board to close on, and a quick one if the meeting is running out of time.",
      ),
    ],
  },
  {
    slug: "food",
    name: "Food & Drink",
    title: "Food Family Feud Questions & Answers",
    h1: "Food & Drink Family Feud Questions",
    description:
      "12 original food survey questions with answers and suggested points: leftovers, toast, messy meals, toppings and fair snacks for game night or dinner parties.",
    intro: [
      "Everybody eats, which is why food boards produce the most confident guesses and the loudest disagreements. These twelve questions cover leftovers, breakfast, restaurant habits, messy meals and the toppings people fight about.",
      "We wrote them for Friendly Feud and gave each board suggested points that add up to 100. The weighting is ours, not a survey's, and food habits differ by country, so adjust a board if your table disagrees.",
    ],
    tips: [
      "Ask players to guess the number-one answer out loud before the reveal. Food boards are where a crowd is most predictable.",
      "Play a food round between courses at a dinner party. The boards are easy, so they warm the room up before harder ones.",
      "Pair a food round with a Custom topic in the online game about your own town's restaurants.",
    ],
    questions: [
      board(
        "Name a food that tastes better the next day.",
        [["Pizza", 33], ["Chili", 19], ["Lasagna", 17], ["Curry", 13], ["Stew", 11], ["Fried rice", 7]],
        "Cold-pizza fans answer before the question is finished. The rest of the board depends on what your players cook at home.",
      ),
      board(
        "Name something people put on toast.",
        [["Butter", 38], ["Jam", 23], ["Peanut butter", 15], ["Avocado", 11], ["Eggs", 8], ["Honey", 5]],
        "Simple enough for children and still competitive for adults. A reliable opening board.",
      ),
      board(
        "Name a food that is impossible to eat neatly.",
        [["Tacos", 26], ["Spaghetti", 22], ["Ribs", 17], ["A burger", 14], ["Corn on the cob", 12], ["Chicken wings", 9]],
        "There is no dominant answer, so teams collect strikes quickly. Good for a steal.",
      ),
      board(
        "Name something people order at a restaurant but never make at home.",
        [["Sushi", 30], ["Lobster", 18], ["Fried chicken", 16], ["French fries", 14], ["Ramen", 12], ["Cheesecake", 10]],
        "Keen home cooks will object to half the board. That is the fun of it.",
      ),
      board(
        "Name a snack you would buy at a movie theater.",
        [["Popcorn", 55], ["Nachos", 13], ["Candy", 12], ["A hot dog", 9], ["A pretzel", 7], ["Ice cream", 4]],
        "More than half the points sit on one answer. Use it as a Face-Off, where speed matters more than thought.",
      ),
      board(
        "Name a food people argue about how to make properly.",
        [["Chili", 22], ["Barbecue", 21], ["Pizza", 19], ["Rice", 14], ["Scrambled eggs", 13], ["Tea", 11]],
        "The flattest board in the set. Expect the argument in the question to break out for real.",
      ),
      board(
        "Name something you would find in almost every refrigerator.",
        [["Milk", 31], ["Eggs", 22], ["Butter", 15], ["Ketchup", 13], ["Cheese", 11], ["A jar nobody remembers buying", 8]],
        "The last answer is there for the laugh. Give it to any player who describes that jar in their own words.",
      ),
      board(
        "Name a food that kids hate but adults like.",
        [["Broccoli", 27], ["Mushrooms", 21], ["Brussels sprouts", 19], ["Spinach", 14], ["Olives", 11], ["Blue cheese", 8]],
        "Play adults against children if you can. Each side knows half of this board.",
      ),
      board(
        "Name something that goes wrong when you cook for guests.",
        [["The food burns", 36], ["There is not enough food", 18], ["Something is undercooked", 15], ["A missing ingredient", 13], ["Dinner is late", 12], ["The smoke alarm goes off", 6]],
        "A good one for the host of the evening to sit out and judge.",
      ),
      board(
        "Name a breakfast food you could happily eat for dinner.",
        [["Pancakes", 31], ["Eggs", 22], ["Waffles", 17], ["Cereal", 14], ["Bacon", 10], ["French toast", 6]],
        "Quick, cheerful and hard to get wrong. Use it to rescue a team that is far behind.",
      ),
      board(
        "Name a topping that divides people.",
        [["Pineapple", 44], ["Anchovies", 18], ["Olives", 13], ["Mushrooms", 10], ["Cilantro", 9], ["Pickles", 6]],
        "Take a show of hands on the top answer before the reveal. The room will split.",
      ),
      board(
        "Name a food you eat at a fair or carnival.",
        [["Cotton candy", 29], ["Funnel cake", 21], ["A corn dog", 19], ["Popcorn", 13], ["A candy apple", 11], ["Ice cream", 7]],
        "Fair food varies by region. Swap in a local favourite if one is missing.",
      ),
    ],
  },
  {
    slug: "animals",
    name: "Animals",
    title: "Animal Family Feud Questions & Answers",
    h1: "Animal Family Feud Questions",
    description:
      "12 original animal survey questions with answers and suggested points: pets, farm animals, zoo favourites and wildlife. Boards that work for kids and adults.",
    intro: [
      "Animal questions are a game-night staple because they are universal. Everyone has had a pet, visited a zoo or been chased by a goose. These twelve boards are about dogs, cats, farm animals and wildlife, and the odd things people believe about them.",
      "They are the most family-friendly boards we have written, so they fit a classroom warm-up as easily as an adult party. Suggested points add up to 100 per board and reflect our own weighting, not survey results.",
    ],
    tips: [
      "Let the youngest player on each team take the animal Face-Offs. They tend to win them.",
      "Use a board to talk about survey thinking: why do \"dog\" and \"cat\" beat more interesting answers almost every time?",
      "Allow an animal noise as an answer, as long as the host can tell which animal it is.",
    ],
    questions: [
      board(
        "Name an animal that would be terrible at hide-and-seek.",
        [["Elephant", 34], ["Giraffe", 27], ["Peacock", 12], ["Flamingo", 10], ["Rooster", 9], ["Skunk", 8]],
        "Children get the top two at once. The lower answers need a reason, so ask players to explain their guess.",
      ),
      board(
        "Name something a dog does that would be rude if a person did it.",
        [["Sniffs strangers", 31], ["Begs for food", 22], ["Barks at visitors", 16], ["Licks faces", 14], ["Jumps on guests", 11], ["Steals food off plates", 6]],
        "Dog owners dominate this board. Balance the teams so each one has at least one.",
      ),
      board(
        "Name something a cat knocks off a table.",
        [["A glass of water", 37], ["A pen", 17], ["A phone", 14], ["A plant", 13], ["Keys", 10], ["A mug", 9]],
        "Cat owners will name the exact object their own cat destroyed. Accept anything that matches a board answer.",
      ),
      board(
        "Name an animal people are surprised to learn is dangerous.",
        [["Hippo", 31], ["Swan", 18], ["Moose", 16], ["Kangaroo", 13], ["Deer", 12], ["Goose", 10]],
        "A harder board that rewards the person who watches nature documentaries. Good for older players.",
      ),
      board(
        "Name an animal that looks like it is always smiling.",
        [["Dolphin", 37], ["Dog", 24], ["Sloth", 15], ["Frog", 10], ["Quokka", 9], ["Crocodile", 5]],
        "If nobody knows what a quokka is, look up a photo after the round. It is worth it.",
      ),
      board(
        "Name something you have to buy when you get a puppy.",
        [["Dog food", 27], ["A leash", 22], ["A bed", 16], ["Toys", 14], ["A crate", 12], ["Bowls", 9]],
        "A practical board with six fair answers. Useful as a full round, because teams can clear it.",
      ),
      board(
        "Name an animal you hear on a farm before you see it.",
        [["Rooster", 38], ["Cow", 22], ["Pig", 13], ["Sheep", 11], ["Donkey", 9], ["Goose", 7]],
        "Ask for the noise, not the name. The host matches the noise to the board.",
      ),
      board(
        "Name an animal that carries its home or its baby around with it.",
        [["Kangaroo", 36], ["Turtle", 27], ["Snail", 17], ["Hermit crab", 9], ["Koala", 7], ["Opossum", 4]],
        "The question has two halves, and most teams only think about one of them. Point that out if they get stuck.",
      ),
      board(
        "Name a pet that is easy to look after.",
        [["Goldfish", 38], ["Cat", 24], ["Hamster", 15], ["Turtle", 9], ["Guinea pig", 8], ["A pet rock", 6]],
        "Owners of each animal will disagree that it is easy. The pet rock is the bonus laugh.",
      ),
      board(
        "Name a reason your pet wakes you up.",
        [["It is hungry", 44], ["It needs to go out", 23], ["It wants attention", 12], ["It heard a noise", 9], ["It wants to get on the bed", 7], ["It is bored", 5]],
        "One clear favourite makes this a fair Face-Off question.",
      ),
      board(
        "Name an animal that is famous for being slow.",
        [["Sloth", 38], ["Tortoise", 33], ["Snail", 20], ["Koala", 4], ["Slug", 3], ["Panda", 2]],
        "Three answers hold nearly all the points. Teams that find them should stop there and protect their lead.",
      ),
      board(
        "Name a bird that almost everyone can recognize.",
        [["Pigeon", 21], ["Eagle", 20], ["Owl", 17], ["Penguin", 16], ["Parrot", 14], ["Flamingo", 12]],
        "The closest board in the set. No answer is safe, which makes it a tense final round.",
      ),
    ],
  },
  {
    slug: "couples",
    name: "Couples",
    title: "Family Feud Questions for Couples & Date Night",
    h1: "Family Feud Questions for Couples",
    description:
      "12 original survey questions for couples and date night with answers and suggested points: first dates, shared bathrooms, stolen blankets and lazy Sundays.",
    intro: [
      "A couples' game night needs questions that start conversation without starting an argument. These twelve boards are about first dates, shared homes, small thefts of blankets and fries, and the things partners pretend to like.",
      "We wrote them for Friendly Feud. Each board has suggested points that add up to 100, weighted toward the answer we expect most couples to say first. They are not survey results. Play as pairs against pairs, or put partners on opposite teams.",
    ],
    tips: [
      "Split couples across teams for the best banter.",
      "After each board, ask every couple which answer is true for them.",
      "The online game supports 1v1, so these boards also work for a quiet night in.",
    ],
    questions: [
      board(
        "Name something couples argue about in the car.",
        [["Directions", 34], ["Driving too fast", 22], ["The music", 16], ["The temperature", 12], ["Running late", 10], ["Where to park", 6]],
        "Start here. Every couple recognises at least three of the answers.",
      ),
      board(
        "Name something one partner always steals from the other.",
        [["The blanket", 37], ["Fries off the plate", 24], ["A hoodie", 16], ["The phone charger", 11], ["The remote", 8], ["The good pillow", 4]],
        "Expect accusations across the table. The accused partner should answer next.",
      ),
      board(
        "Name a first-date activity.",
        [["Dinner", 37], ["Coffee", 22], ["A movie", 17], ["A walk", 10], ["Mini golf", 8], ["Bowling", 6]],
        "Follow up by asking each couple what they did on their own first date.",
      ),
      board(
        "Name something people pretend to like for their partner's sake.",
        [["Their cooking", 26], ["Their favorite show", 22], ["Their friends", 17], ["Their hobby", 14], ["Their music", 12], ["Their taste in decor", 9]],
        "Play this one with care and a sense of humour. Nobody has to say which answers apply to them.",
      ),
      board(
        "Name the hardest thing to agree on as a couple.",
        [["What to eat", 39], ["What to watch", 23], ["Where to go on vacation", 13], ["The thermostat", 11], ["How to spend money", 9], ["Paint colors", 5]],
        "The top answer is close to universal. A dependable Face-Off question.",
      ),
      board(
        "Name a gift that says \"I forgot until today\".",
        [["Gas-station flowers", 31], ["A gift card", 25], ["A box of chocolates", 18], ["Only a card", 12], ["Cash", 8], ["A balloon", 6]],
        "Good before an anniversary or Valentine's Day, as a warning as much as a game.",
      ),
      board(
        "Name something that takes up too much space in a shared bathroom.",
        [["Hair products", 31], ["Skincare bottles", 24], ["Makeup", 18], ["Towels", 11], ["Razors", 9], ["A hair dryer", 7]],
        "The answers overlap, so the host should decide in advance whether \"bottles\" counts for one answer or two.",
      ),
      board(
        "Name a chore that couples divide up.",
        [["Dishes", 30], ["Laundry", 22], ["Cooking", 18], ["Taking out the trash", 14], ["Vacuuming", 9], ["Grocery shopping", 7]],
        "Six fair answers that teams can clear. Use it as a full round.",
      ),
      board(
        "Name something people do to look like they are listening when they are not.",
        [["Nod", 41], ["Say \"mm-hmm\"", 27], ["Say \"yeah\"", 12], ["Repeat the last word", 9], ["Smile", 7], ["Say \"wow\"", 4]],
        "Watch the room during this board. Someone will be doing the top answer.",
      ),
      board(
        "Name a sign that a date is going well.",
        [["Lots of laughing", 33], ["Losing track of time", 24], ["Nobody checks their phone", 17], ["Ordering dessert", 11], ["Planning a second date", 10], ["A long goodbye", 5]],
        "A warm board that suits newer couples and long-married ones equally.",
      ),
      board(
        "Name something couples do on a lazy Sunday.",
        [["Watch TV", 30], ["Sleep in", 26], ["Go out for brunch", 17], ["Go for a walk", 12], ["Do the grocery shopping", 8], ["Clean the house", 7]],
        "Two answers compete for the top spot, so the reveal order matters. Read from the bottom up.",
      ),
      board(
        "Name something a couple buys together for their first home.",
        [["A couch", 31], ["A bed", 26], ["A TV", 15], ["A table", 12], ["Plates and dishes", 10], ["A plant", 6]],
        "A gentle final board. Ask each couple what their own first purchase was.",
      ),
    ],
  },
];

export const QUESTION_THEMES_BY_SLUG: Record<string, QuestionTheme> = Object.fromEntries(
  QUESTION_THEMES.map((t) => [t.slug, t]),
);

export const QUESTION_THEME_SLUGS = QUESTION_THEMES.map((t) => t.slug);

/** Total number of boards across every theme. */
export const QUESTION_COUNT = QUESTION_THEMES.reduce((n, t) => n + t.questions.length, 0);
