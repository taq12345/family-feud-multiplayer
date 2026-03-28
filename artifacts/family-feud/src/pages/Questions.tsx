import { useState } from "react";
import { useLocation } from "wouter";
import { SEO } from "../components/SEO";
import { FriendlyFeudLogo, FriendlyFeudWordmark } from "../components/FriendlyFeudLogo";
import { ArrowLeft, Tv2, ChevronDown, ChevronUp, Sparkles } from "lucide-react";
import { playClickSound } from "../lib/sounds";

// A curated list of popular survey questions — sourced from the open-source question database
// used by Friendly Feud. These questions are in the public domain.
const SURVEY_QUESTIONS = [
  { q: "Name something people do when they're bored.", a: ["Watch TV", "Sleep", "Eat", "Read", "Play games", "Go online"] },
  { q: "Name a popular pizza topping.", a: ["Pepperoni", "Sausage", "Mushrooms", "Cheese", "Onions", "Peppers"] },
  { q: "Name something you bring to the beach.", a: ["Towel", "Sunscreen", "Umbrella", "Cooler", "Chair", "Sunglasses"] },
  { q: "Name something people are afraid of.", a: ["Snakes", "Heights", "Spiders", "Death", "Public speaking", "Dark"] },
  { q: "Name a reason you might be late to work.", a: ["Traffic", "Overslept", "Car trouble", "Weather", "Kids", "Accident"] },
  { q: "Name something you find in a wallet.", a: ["Money", "Credit cards", "ID", "Photos", "Receipts", "Business cards"] },
  { q: "At the beach, name something that might protect you from sun.", a: ["Umbrella", "Sunscreen", "Sun hat", "Sunglasses", "Cover up", "Shade"] },
  { q: "Name a fruit that is red.", a: ["Apple", "Strawberry", "Cherry", "Watermelon", "Raspberry", "Cranberry"] },
  { q: "Name something people do on New Year's Eve.", a: ["Party", "Kiss at midnight", "Drink champagne", "Watch fireworks", "Make resolutions", "Count down"] },
  { q: "Name something you might find under your bed.", a: ["Dust bunnies", "Shoes", "Clothes", "Monsters", "Books", "Lost items"] },
  { q: "Name a popular board game.", a: ["Monopoly", "Scrabble", "Chess", "Clue", "Life", "Sorry"] },
  { q: "Name something people collect.", a: ["Stamps", "Coins", "Cards", "Dolls", "Art", "Antiques"] },
  { q: "Name a place where people whisper.", a: ["Library", "Church", "Movie theater", "Hospital", "Classroom", "Bedroom"] },
  { q: "Name something associated with cowboys.", a: ["Horses", "Hats", "Boots", "Lasso", "Guns", "Rodeo"] },
  { q: "Name a popular ice cream flavor.", a: ["Vanilla", "Chocolate", "Strawberry", "Mint", "Cookie dough", "Rocky road"] },
  { q: "Name something a doctor might ask you to do.", a: ["Cough", "Say ahhh", "Deep breath", "Undress", "Lose weight", "Exercise"] },
  { q: "Name something people do at a wedding.", a: ["Dance", "Eat cake", "Cry", "Take photos", "Toast", "Throw bouquet"] },
  { q: "Name a popular fast food restaurant.", a: ["McDonald's", "Burger King", "Wendy's", "Taco Bell", "KFC", "Subway"] },
  { q: "Name something you'd find in a school classroom.", a: ["Desks", "Chalkboard", "Books", "Teacher", "Pencils", "Clock"] },
  { q: "Name an animal that lives in the ocean.", a: ["Dolphin", "Shark", "Whale", "Fish", "Octopus", "Seahorse"] },
  { q: "Besides turkey, name a dish served at Thanksgiving.", a: ["Ham", "Stuffing", "Sweet potatoes", "Cranberries", "Mashed potatoes", "Pumpkin pie"] },
  { q: "Name something people lose.", a: ["Keys", "Weight", "Money", "Phone", "Mind", "Wallet"] },
  { q: "Name a reason you might call in sick to work.", a: ["Cold/flu", "Stomach ache", "Headache", "Personal day", "Doctor appointment", "Hangover"] },
  { q: "Name something you'd find in a gym.", a: ["Treadmill", "Weights", "Mirrors", "People sweating", "Exercise mat", "Lockers"] },
  { q: "Name a famous superhero.", a: ["Superman", "Batman", "Spider-Man", "Wonder Woman", "Iron Man", "Captain America"] },
  { q: "Dogs chase cats. What do cats chase?", a: ["Mice", "Birds", "Balls", "Bugs", "Yarn", "Their tails"] },
  { q: "Name something people do before bed.", a: ["Brush teeth", "Read", "Watch TV", "Pray", "Set alarm", "Shower"] },
  { q: "Name a popular holiday.", a: ["Christmas", "Thanksgiving", "Easter", "Halloween", "Valentine's Day", "Fourth of July"] },
  { q: "Name something that comes in pairs.", a: ["Shoes", "Socks", "Gloves", "Earrings", "Eyes", "Twins"] },
  { q: "Name something that might keep you up at night.", a: ["Noise", "Worry", "Coffee", "Insomnia", "Kids", "Pain"] },
  { q: "Name something people eat for breakfast.", a: ["Eggs", "Cereal", "Toast", "Pancakes", "Bacon", "Oatmeal"] },
  { q: "Name a musical instrument.", a: ["Piano", "Guitar", "Drums", "Violin", "Trumpet", "Flute"] },
  { q: "Name something you might see at a circus.", a: ["Clowns", "Elephants", "Acrobats", "Lion tamer", "Trapeze", "Cotton candy"] },
  { q: "Name something associated with Hawaii.", a: ["Surfing", "Hula dancing", "Leis", "Beaches", "Pineapple", "Volcanoes"] },
  { q: "Name a popular sport.", a: ["Football", "Basketball", "Baseball", "Soccer", "Tennis", "Golf"] },
  { q: "Name something in a first aid kit.", a: ["Band-aids", "Gauze", "Antiseptic", "Tape", "Scissors", "Aspirin"] },
  { q: "Name a yellow food.", a: ["Banana", "Corn", "Lemon", "Cheese", "Squash", "Pineapple"] },
  { q: "Name a famous cartoon character.", a: ["Mickey Mouse", "Bugs Bunny", "SpongeBob", "Homer Simpson", "Scooby-Doo", "Tom & Jerry"] },
  { q: "Name something you might find in a junk drawer.", a: ["Batteries", "Rubber bands", "Pens", "Tape", "Keys", "Screwdriver"] },
  { q: "Name a reason people go to the hospital.", a: ["Emergency", "Surgery", "Baby", "Broken bone", "Heart attack", "Illness"] },
  { q: "Based on how much you use it, what do you consider the greatest invention ever?", a: ["Telephone", "Electricity", "TV", "Car", "Computer", "Microwave"] },
  { q: "Name something people do on a rainy day.", a: ["Stay inside", "Watch movies", "Read", "Sleep", "Play games", "Cook"] },
  { q: "Name something that might be on a birthday cake.", a: ["Candles", "Frosting", "Name", "Flowers", "Sprinkles", "Happy Birthday"] },
  { q: "Name a place where you'd expect a long line.", a: ["Amusement park", "DMV", "Grocery store", "Post office", "Movie theater", "Bank"] },
  { q: "Name something associated with a baby.", a: ["Diapers", "Bottles", "Crying", "Pacifier", "Rattle", "Blanket"] },
  { q: "Name something people do in the shower.", a: ["Wash hair", "Sing", "Shave", "Think", "Relax", "Wash body"] },
  { q: "Name a popular TV game show.", a: ["Wheel of Fortune", "Jeopardy", "The Price is Right", "Deal or No Deal", "Who Wants to Be a Millionaire", "Family Feud"] },
  { q: "Name something you'd find in an office.", a: ["Computer", "Desk", "Chair", "Phone", "Printer", "Stapler"] },
  { q: "Name a reason people go to the mall.", a: ["Shopping", "Eating", "Movies", "Socializing", "Walking", "Window shopping"] },
  { q: "Name something that uses batteries.", a: ["Remote control", "Flashlight", "Toy", "Clock", "Phone", "Smoke detector"] },
];

// Group questions into fun categories for the page
const CATEGORIES: { name: string; emoji: string; questions: typeof SURVEY_QUESTIONS } [] = [
  {
    name: "Funny & Entertaining",
    emoji: "😂",
    questions: SURVEY_QUESTIONS.filter((_, i) => [0, 9, 25, 45, 48, 38].includes(i)),
  },
  {
    name: "Food & Drink",
    emoji: "🍕",
    questions: SURVEY_QUESTIONS.filter((_, i) => [1, 14, 30, 36, 20].includes(i)),
  },
  {
    name: "Family & Holidays",
    emoji: "🎄",
    questions: SURVEY_QUESTIONS.filter((_, i) => [18, 27, 42, 44, 8].includes(i)),
  },
  {
    name: "Daily Life",
    emoji: "🏠",
    questions: SURVEY_QUESTIONS.filter((_, i) => [4, 21, 26, 29, 5, 31].includes(i)),
  },
  {
    name: "Pop Culture & Fun Facts",
    emoji: "🌟",
    questions: SURVEY_QUESTIONS.filter((_, i) => [24, 37, 34, 46, 40, 33].includes(i)),
  },
  {
    name: "More Great Questions",
    emoji: "🎯",
    questions: SURVEY_QUESTIONS.filter((_, i) => ![0,1,4,5,8,9,14,18,20,21,24,25,26,27,29,30,31,33,34,36,37,38,40,42,44,45,46,48].includes(i)),
  },
];

const questionsSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": SURVEY_QUESTIONS.slice(0, 20).map(q => ({
    "@type": "Question",
    "name": q.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": `Top survey answers: ${q.a.join(", ")}`
    }
  }))
};

export default function Questions() {
  const [, setLocation] = useLocation();
  const [expandedCategories, setExpandedCategories] = useState<Set<number>>(new Set([0, 1]));
  const [revealedQuestions, setRevealedQuestions] = useState<Set<number>>(new Set());

  const totalQuestions = SURVEY_QUESTIONS.length;

  const toggleCategory = (index: number) => {
    setExpandedCategories(prev => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  const toggleReveal = (globalIndex: number) => {
    playClickSound();
    setRevealedQuestions(prev => {
      const next = new Set(prev);
      if (next.has(globalIndex)) next.delete(globalIndex);
      else next.add(globalIndex);
      return next;
    });
  };

  let globalIdx = 0;

  return (
    <div className="min-h-screen bg-[#070d1f] text-white overflow-x-hidden">
      <SEO
        title="Survey Questions & Answers for Game Night"
        description={`Browse ${totalQuestions}+ survey questions and answers perfect for playing a Family Feud-style game online. Use these free trivia and survey questions for game nights, parties, team building, and virtual events.`}
        canonical="https://friendlyfeud.fun/questions"
        schema={questionsSchema}
      />
      <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-40 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 left-1/3 w-72 h-72 bg-purple-600/8 rounded-full blur-3xl" />
      </div>

      <header className="relative z-10 border-b border-white/5 bg-black/30 backdrop-blur-xl">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center gap-3">
          <button
            onClick={() => { playClickSound(); setLocation("/"); }}
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all"
            aria-label="Back to lobby"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-3">
            <FriendlyFeudLogo className="w-9 h-9 shrink-0" />
            <div>
              <FriendlyFeudWordmark />
              <p className="text-[10px] text-slate-500 font-medium tracking-wider uppercase">Survey Questions</p>
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <article>
          <header className="mb-8 text-center">
            <h1 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-amber-300 to-yellow-500 bg-clip-text text-transparent mb-3">
              Survey Questions &amp; Answers
            </h1>
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
              Browse free survey questions perfect for playing a Family Feud-style game online.
              Use them for game nights, parties, team building, classrooms, or virtual events.
              All questions are open-source and free to use.
            </p>
          </header>

          {/* Play CTA */}
          <div className="mb-8 rounded-2xl bg-gradient-to-br from-amber-500/10 to-amber-600/5 border border-amber-500/20 p-5 sm:p-6 text-center">
            <p className="text-amber-300 font-semibold mb-2 flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4" />
              Want to play with these questions?
            </p>
            <p className="text-slate-400 text-sm mb-4">
              Friendly Feud uses 8,700+ survey questions like these. Create a room and play free — no sign-up needed.
            </p>
            <button
              onClick={() => { playClickSound(); setLocation("/"); }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-black font-bold shadow-[0_0_20px_rgba(251,191,36,0.35)] hover:shadow-[0_0_30px_rgba(251,191,36,0.5)] transition-all"
            >
              <Tv2 className="w-4 h-4" />
              Play Now — It's Free
            </button>
          </div>



          {/* Categories */}
          <div className="space-y-4">
              {CATEGORIES.map((cat, catIdx) => {
                const isExpanded = expandedCategories.has(catIdx);
                const startIdx = globalIdx;
                const count = cat.questions.length;
                globalIdx += count;
                return (
                  <section key={cat.name} className="rounded-2xl bg-white/[0.03] border border-white/10 overflow-hidden">
                    <button
                      onClick={() => { playClickSound(); toggleCategory(catIdx); }}
                      className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-white/[0.02] transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{cat.emoji}</span>
                        <div>
                          <h2 className="font-bold text-white text-base">{cat.name}</h2>
                          <p className="text-xs text-slate-500">{count} questions</p>
                        </div>
                      </div>
                      {isExpanded ? <ChevronUp className="w-4 h-4 text-slate-500" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
                    </button>
                    {isExpanded && (
                      <div className="border-t border-white/5 divide-y divide-white/5">
                        {cat.questions.map((item, qIdx) => {
                          const thisIdx = startIdx + qIdx;
                          const isRevealed = revealedQuestions.has(thisIdx);
                          return (
                            <div key={thisIdx} className="px-5 py-4">
                              <button
                                onClick={() => toggleReveal(thisIdx)}
                                className="w-full text-left group"
                              >
                                <h3 className="font-semibold text-sm text-slate-200 group-hover:text-amber-300 transition-colors">
                                  {item.q}
                                </h3>
                                <p className="text-xs text-amber-500/70 mt-1">
                                  {isRevealed ? "Click to hide answers ▴" : "Click to reveal answers ▾"}
                                </p>
                              </button>
                              {isRevealed && (
                                <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-2">
                                  {item.a.map((ans, aIdx) => (
                                    <div
                                      key={aIdx}
                                      className="px-3 py-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-sm"
                                    >
                                      <span className="text-amber-400 font-bold mr-2">{aIdx + 1}.</span>
                                      <span className="text-slate-300 capitalize">{ans}</span>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </section>
                );
              })}
            </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center">
            <h2 className="text-xl font-bold text-white mb-2">Ready to Play?</h2>
            <p className="text-slate-400 text-sm mb-4">
              Friendly Feud has thousands more questions. Play for free with friends — no download needed.
            </p>
            <button
              onClick={() => { playClickSound(); setLocation("/"); }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-black font-bold shadow-[0_0_20px_rgba(251,191,36,0.35)] hover:shadow-[0_0_30px_rgba(251,191,36,0.5)] transition-all"
            >
              <Tv2 className="w-4 h-4" />
              Start Playing Now
            </button>
          </div>

          {/* Disclaimer */}
          <p className="mt-10 text-[10px] text-slate-700 text-center leading-relaxed">
            These survey questions are sourced from an open-source database and are free to use.
            "Family Feud" is a registered trademark of Fremantle. Friendly Feud is an independent fan project and is not affiliated with or endorsed by Fremantle or any related entity.
          </p>
        </article>
      </main>
    </div>
  );
}
