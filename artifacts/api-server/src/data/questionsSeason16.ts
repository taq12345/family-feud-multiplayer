import type { SurveyQuestion } from "./questions.js";

// Season 16 set: a separate question set from the main bank in questions.ts.
// Boards from Family Feud season 16, as transcribed at
// https://mstiescott.neocities.org/feud16 (crawled 2026-11-13).
// Ids start at 210001 (each season has its own block of 10,000), so they
// never clash with the main bank (1-8782), AI questions (9000+) or other
// seasons. One-answer boards are left out.
// Not used in gameplay yet.
export const SEASON16_SET = "season16";
export const SEASON16_ID_START = 210001;

export function isSeason16Question(id: number): boolean {
  return id >= SEASON16_ID_START && id < SEASON16_ID_START + 10000;
}

export const season16Questions: SurveyQuestion[] = [
    {
        "id":  210001,
        "question":  "Name a part of your body that looks bigger when you're nude than when you're dressed.",
        "answers":  [
                        {
                            "text":  "my gut/waist",
                            "points":  50
                        },
                        {
                            "text":  "my jell-o booty",
                            "points":  19
                        },
                        {
                            "text":  "the pointer sisters",
                            "points":  10
                        },
                        {
                            "text":  "my legs/thighs",
                            "points":  8
                        },
                        {
                            "text":  "my wmd/package",
                            "points":  5
                        },
                        {
                            "text":  "my feet/toes",
                            "points":  4
                        },
                        {
                            "text":  "my hips",
                            "points":  2
                        },
                        {
                            "text":  "my head",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210002,
        "question":  "Name a sign that your girlfriend might be turning into a cat.",
        "answers":  [
                        {
                            "text":  "meows/purrs",
                            "points":  37
                        },
                        {
                            "text":  "claws/scratches",
                            "points":  21
                        },
                        {
                            "text":  "growing whiskers",
                            "points":  18
                        },
                        {
                            "text":  "growing a tail",
                            "points":  10
                        },
                        {
                            "text":  "eats friskies",
                            "points":  4
                        },
                        {
                            "text":  "hisses",
                            "points":  4
                        },
                        {
                            "text":  "getting furry",
                            "points":  4
                        },
                        {
                            "text":  "uses litter box",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210003,
        "question":  "We asked 100 women... If a man is ugly, he'd better have a beautiful what?",
        "answers":  [
                        {
                            "text":  "personality",
                            "points":  31
                        },
                        {
                            "text":  "smile/mouth",
                            "points":  17
                        },
                        {
                            "text":  "heart/soul",
                            "points":  17
                        },
                        {
                            "text":  "bank acct/job",
                            "points":  14
                        },
                        {
                            "text":  "car/rolls-royce",
                            "points":  9
                        },
                        {
                            "text":  "house",
                            "points":  4
                        },
                        {
                            "text":  "wife/chick",
                            "points":  4
                        },
                        {
                            "text":  "bod/man-can",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210004,
        "question":  "Name something a housefly dies from that you'd hate to be the cause of your death.",
        "answers":  [
                        {
                            "text":  "flyswatter",
                            "points":  74
                        },
                        {
                            "text":  "bug spray",
                            "points":  6
                        },
                        {
                            "text":  "starvation",
                            "points":  5
                        },
                        {
                            "text":  "heat",
                            "points":  3
                        },
                        {
                            "text":  "no air",
                            "points":  3
                        },
                        {
                            "text":  "sick/from eat'g poo",
                            "points":  3
                        },
                        {
                            "text":  "drowning/in cereal",
                            "points":  2
                        },
                        {
                            "text":  "flypaper",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210005,
        "question":  "We asked 100 married women... Name something your husband had better not be holding when you come home from work.",
        "answers":  [
                        {
                            "text":  "a woman/my bff",
                            "points":  65
                        },
                        {
                            "text":  "the remote",
                            "points":  10
                        },
                        {
                            "text":  "\"prince hairy\"",
                            "points":  6
                        },
                        {
                            "text":  "his suitcase",
                            "points":  5
                        },
                        {
                            "text":  "porn",
                            "points":  5
                        },
                        {
                            "text":  "a pink slip",
                            "points":  3
                        },
                        {
                            "text":  "a vibrator",
                            "points":  2
                        },
                        {
                            "text":  "a dude/my brother",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210006,
        "question":  "Nobody wants to see pictures of your what?",
        "answers":  [
                        {
                            "text":  "body/hairy butt",
                            "points":  65
                        },
                        {
                            "text":  "kids/grandkids",
                            "points":  9
                        },
                        {
                            "text":  "vacation",
                            "points":  8
                        },
                        {
                            "text":  "pet/dog",
                            "points":  6
                        },
                        {
                            "text":  "ex",
                            "points":  4
                        },
                        {
                            "text":  "food/dinner",
                            "points":  2
                        },
                        {
                            "text":  "colonoscopy",
                            "points":  2
                        },
                        {
                            "text":  "house/bathroom",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210007,
        "question":  "Name something a Barbie doll has that a man might wish his wife had.",
        "answers":  [
                        {
                            "text":  "smokin' bod",
                            "points":  57
                        },
                        {
                            "text":  "long/blonde hair",
                            "points":  16
                        },
                        {
                            "text":  "hot face/smile",
                            "points":  9
                        },
                        {
                            "text":  "malibu dreamhouse",
                            "points":  5
                        },
                        {
                            "text":  "cool car/corvette",
                            "points":  3
                        },
                        {
                            "text":  "hot clothes/shoes",
                            "points":  3
                        },
                        {
                            "text":  "no voice",
                            "points":  3
                        },
                        {
                            "text":  "money/success",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210008,
        "question":  "Name something a baby does that would be unacceptable in a roommate.",
        "answers":  [
                        {
                            "text":  "cry/at 3 a.m.",
                            "points":  39
                        },
                        {
                            "text":  "poo/wet self",
                            "points":  28
                        },
                        {
                            "text":  "puke/on me",
                            "points":  9
                        },
                        {
                            "text":  "burp",
                            "points":  8
                        },
                        {
                            "text":  "make mess/toss food",
                            "points":  5
                        },
                        {
                            "text":  "fart",
                            "points":  4
                        },
                        {
                            "text":  "pee in my face",
                            "points":  3
                        },
                        {
                            "text":  "nurse/on my nips",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210009,
        "question":  "We asked 100 single women... Name something you bring to bed after you've been dumped.",
        "answers":  [
                        {
                            "text":  "food/ice cream",
                            "points":  38
                        },
                        {
                            "text":  "my dog/pet",
                            "points":  15
                        },
                        {
                            "text":  "teddy bear",
                            "points":  11
                        },
                        {
                            "text":  "wine/booze",
                            "points":  10
                        },
                        {
                            "text":  "book",
                            "points":  9
                        },
                        {
                            "text":  "tissues",
                            "points":  8
                        },
                        {
                            "text":  "vinny the vibrator",
                            "points":  5
                        },
                        {
                            "text":  "fling/rugby team",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210010,
        "question":  "We asked 100 women... Name something you love doing when you're all alone.",
        "answers":  [
                        {
                            "text":  "reading",
                            "points":  27
                        },
                        {
                            "text":  "watching tv/movie",
                            "points":  26
                        },
                        {
                            "text":  "taking a bath",
                            "points":  18
                        },
                        {
                            "text":  "sleeping",
                            "points":  10
                        },
                        {
                            "text":  "walking around nude",
                            "points":  6
                        },
                        {
                            "text":  "eating",
                            "points":  4
                        },
                        {
                            "text":  "singing",
                            "points":  4
                        },
                        {
                            "text":  "dancing",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210011,
        "question":  "Name something you would not be surprised to see grandpa and grandma doing if they used to be hippies.",
        "answers":  [
                        {
                            "text":  "get high/pot",
                            "points":  74
                        },
                        {
                            "text":  "dance",
                            "points":  7
                        },
                        {
                            "text":  "kiss",
                            "points":  4
                        },
                        {
                            "text":  "hump/like bunnies",
                            "points":  3
                        },
                        {
                            "text":  "sing/play bob dylan",
                            "points":  3
                        },
                        {
                            "text":  "peace sign",
                            "points":  2
                        },
                        {
                            "text":  "plant flowers",
                            "points":  2
                        },
                        {
                            "text":  "be barefoot",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210012,
        "question":  "Name a reason a wife purposely fattens up her husband.",
        "answers":  [
                        {
                            "text":  "keep floozies away",
                            "points":  67
                        },
                        {
                            "text":  "he's thin/cold/sick",
                            "points":  11
                        },
                        {
                            "text":  "more to love/cuddle",
                            "points":  6
                        },
                        {
                            "text":  "she looks less fat",
                            "points":  4
                        },
                        {
                            "text":  "to butter him up",
                            "points":  3
                        },
                        {
                            "text":  "he's santa!",
                            "points":  2
                        },
                        {
                            "text":  "to kill/eat him",
                            "points":  2
                        },
                        {
                            "text":  "sport/sumo wrestle",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210013,
        "question":  "Name something about her stripper daughter that a mother still would brag about.",
        "answers":  [
                        {
                            "text":  "big bucks/tips",
                            "points":  38
                        },
                        {
                            "text":  "hot bod/stacked",
                            "points":  20
                        },
                        {
                            "text":  "pretty face/hair",
                            "points":  19
                        },
                        {
                            "text":  "her moves/dancing",
                            "points":  8
                        },
                        {
                            "text":  "smart/college",
                            "points":  4
                        },
                        {
                            "text":  "hard worker",
                            "points":  4
                        },
                        {
                            "text":  "personality/nice",
                            "points":  2
                        },
                        {
                            "text":  "fashion/pasties",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210014,
        "question":  "What would a married guy hate to find out his wife did with his lucky pair of underwear?",
        "answers":  [
                        {
                            "text":  "threw out/trash",
                            "points":  36
                        },
                        {
                            "text":  "burned 'em",
                            "points":  13
                        },
                        {
                            "text":  "washed 'em",
                            "points":  11
                        },
                        {
                            "text":  "shrank 'em",
                            "points":  10
                        },
                        {
                            "text":  "used as clean'g rag",
                            "points":  9
                        },
                        {
                            "text":  "bleached 'em",
                            "points":  8
                        },
                        {
                            "text":  "ripped/cut 'em up",
                            "points":  6
                        },
                        {
                            "text":  "gave away/sold",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210015,
        "question":  "We asked 100 single women... Name something you'd hate to smell when you climb into a date's car.",
        "answers":  [
                        {
                            "text":  "trash/old food",
                            "points":  29
                        },
                        {
                            "text":  "cigarette/cigar",
                            "points":  19
                        },
                        {
                            "text":  "fresh farts",
                            "points":  14
                        },
                        {
                            "text":  "his breath/b.o.",
                            "points":  11
                        },
                        {
                            "text":  "booze",
                            "points":  11
                        },
                        {
                            "text":  "weed",
                            "points":  5
                        },
                        {
                            "text":  "woman's perfume",
                            "points":  4
                        },
                        {
                            "text":  "dead body",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210016,
        "question":  "We asked 100 men... What do you think is the best female fashion trend of all time?",
        "answers":  [
                        {
                            "text":  "bikini/swimsuit",
                            "points":  24
                        },
                        {
                            "text":  "short shorts",
                            "points":  23
                        },
                        {
                            "text":  "miniskirt",
                            "points":  15
                        },
                        {
                            "text":  "high heels",
                            "points":  12
                        },
                        {
                            "text":  "thong",
                            "points":  9
                        },
                        {
                            "text":  "yoga pants",
                            "points":  6
                        },
                        {
                            "text":  "sundress/dress",
                            "points":  5
                        },
                        {
                            "text":  "bra",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210017,
        "question":  "Name something a man wears to drive women wild that instead drives them away.",
        "answers":  [
                        {
                            "text":  "cologne/aftershave",
                            "points":  66
                        },
                        {
                            "text":  "speedo",
                            "points":  9
                        },
                        {
                            "text":  "toupee",
                            "points":  6
                        },
                        {
                            "text":  "leather pants",
                            "points":  4
                        },
                        {
                            "text":  "hair dye",
                            "points":  3
                        },
                        {
                            "text":  "hawaiian shirt",
                            "points":  3
                        },
                        {
                            "text":  "jeans/skinny jeans",
                            "points":  3
                        },
                        {
                            "text":  "g-string",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210018,
        "question":  "Name someone a cool teenager wouldn't want to show up at their party.",
        "answers":  [
                        {
                            "text":  "their parents",
                            "points":  58
                        },
                        {
                            "text":  "lame celeb/snooki",
                            "points":  11
                        },
                        {
                            "text":  "a nerd/geek",
                            "points":  9
                        },
                        {
                            "text":  "police",
                            "points":  5
                        },
                        {
                            "text":  "elmo/character",
                            "points":  5
                        },
                        {
                            "text":  "grandparents",
                            "points":  4
                        },
                        {
                            "text":  "a clown",
                            "points":  2
                        },
                        {
                            "text":  "principal/teacher",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210019,
        "question":  "If it were up to men, women's breasts would be the size of what kind of ball?",
        "answers":  [
                        {
                            "text":  "basketball",
                            "points":  42
                        },
                        {
                            "text":  "softball/baseball",
                            "points":  26
                        },
                        {
                            "text":  "beach ball",
                            "points":  7
                        },
                        {
                            "text":  "bowling ball",
                            "points":  6
                        },
                        {
                            "text":  "volleyball",
                            "points":  5
                        },
                        {
                            "text":  "football",
                            "points":  4
                        },
                        {
                            "text":  "soccer ball",
                            "points":  4
                        },
                        {
                            "text":  "melon ball",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210020,
        "question":  "We asked 100 married men... Name something about your wife you'd get in trouble for telling other people.",
        "answers":  [
                        {
                            "text":  "weight/meas'ments",
                            "points":  40
                        },
                        {
                            "text":  "she snores",
                            "points":  18
                        },
                        {
                            "text":  "her age",
                            "points":  14
                        },
                        {
                            "text":  "freak/sex life",
                            "points":  9
                        },
                        {
                            "text":  "hygeine habits",
                            "points":  5
                        },
                        {
                            "text":  "bad temper",
                            "points":  4
                        },
                        {
                            "text":  "eye-watering farts",
                            "points":  3
                        },
                        {
                            "text":  "fake boobs",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210021,
        "question":  "We asked 100 women... Name some information you don't want to hear but you expect a friend to tell you.",
        "answers":  [
                        {
                            "text":  "mate cheated",
                            "points":  38
                        },
                        {
                            "text":  "\"you're porky\"",
                            "points":  33
                        },
                        {
                            "text":  "food in my teeth",
                            "points":  8
                        },
                        {
                            "text":  "outfit's a \"don't\"",
                            "points":  5
                        },
                        {
                            "text":  "\"lookin' old, granny\"",
                            "points":  3
                        },
                        {
                            "text":  "someone died",
                            "points":  3
                        },
                        {
                            "text":  "she boinked/my dad",
                            "points":  3
                        },
                        {
                            "text":  "latest gossip",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210022,
        "question":  "Name an occupation in which the sexier you are, the more money you make.",
        "answers":  [
                        {
                            "text":  "stripper/dancer",
                            "points":  38
                        },
                        {
                            "text":  "model",
                            "points":  25
                        },
                        {
                            "text":  "actor/movie star",
                            "points":  11
                        },
                        {
                            "text":  "hooker/gigolo",
                            "points":  9
                        },
                        {
                            "text":  "waitress/waiter",
                            "points":  5
                        },
                        {
                            "text":  "bartender",
                            "points":  3
                        },
                        {
                            "text":  "salesperson",
                            "points":  3
                        },
                        {
                            "text":  "secretary/asst.",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210023,
        "question":  "Name something that could happen on a horse-drawn carriage ride that would ruin the romance.",
        "answers":  [
                        {
                            "text":  "horse dumps/whizzes",
                            "points":  37
                        },
                        {
                            "text":  "horse has the farts",
                            "points":  25
                        },
                        {
                            "text":  "rain/storm",
                            "points":  10
                        },
                        {
                            "text":  "horse spooked/runs",
                            "points":  10
                        },
                        {
                            "text":  "horse hurt/dies",
                            "points":  4
                        },
                        {
                            "text":  "cart breaks/flips",
                            "points":  4
                        },
                        {
                            "text":  "bumpy ride",
                            "points":  3
                        },
                        {
                            "text":  "bird drops turd",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210024,
        "question":  "We asked 100 single men... Fill in the blank: I'll know I've met my soul mate when I meet a girl who likes ________.",
        "answers":  [
                        {
                            "text":  "sports/the browns",
                            "points":  36
                        },
                        {
                            "text":  "me/my humor",
                            "points":  16
                        },
                        {
                            "text":  "movies/star wars",
                            "points":  12
                        },
                        {
                            "text":  "outdoor/fishing",
                            "points":  11
                        },
                        {
                            "text":  "to eat/wings",
                            "points":  10
                        },
                        {
                            "text":  "video games",
                            "points":  7
                        },
                        {
                            "text":  "hot chicks/in bed",
                            "points":  2
                        },
                        {
                            "text":  "booze/keystone light",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210025,
        "question":  "Name something you have to squeeze really hard before anything comes out.",
        "answers":  [
                        {
                            "text":  "lemon/citrus",
                            "points":  25
                        },
                        {
                            "text":  "ketchup/mustard",
                            "points":  25
                        },
                        {
                            "text":  "toothpaste",
                            "points":  19
                        },
                        {
                            "text":  "zit/blackhead",
                            "points":  14
                        },
                        {
                            "text":  "glue",
                            "points":  6
                        },
                        {
                            "text":  "my pooper",
                            "points":  3
                        },
                        {
                            "text":  "lotion bottle",
                            "points":  2
                        },
                        {
                            "text":  "liquid soap/shampoo",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210026,
        "question":  "Name something most wives would do if they inherited a lot of money.",
        "answers":  [
                        {
                            "text":  "shop/new house",
                            "points":  56
                        },
                        {
                            "text":  "dump hubby",
                            "points":  14
                        },
                        {
                            "text":  "vacay/to paris",
                            "points":  7
                        },
                        {
                            "text":  "invest/save",
                            "points":  5
                        },
                        {
                            "text":  "plastic surgery",
                            "points":  4
                        },
                        {
                            "text":  "hire a maid",
                            "points":  3
                        },
                        {
                            "text":  "pay bills",
                            "points":  3
                        },
                        {
                            "text":  "get/hire boy toy",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210027,
        "question":  "Name something a bald guy might rub on his head.",
        "answers":  [
                        {
                            "text":  "lotion/sunscreen",
                            "points":  51
                        },
                        {
                            "text":  "oil/baby oil",
                            "points":  18
                        },
                        {
                            "text":  "wax/polish",
                            "points":  6
                        },
                        {
                            "text":  "rogaine/hair med",
                            "points":  5
                        },
                        {
                            "text":  "his hand",
                            "points":  5
                        },
                        {
                            "text":  "pet. jelly/ointment",
                            "points":  5
                        },
                        {
                            "text":  "shampoo/soap",
                            "points":  3
                        },
                        {
                            "text":  "chick's boobs",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210028,
        "question":  "We asked 100 women... Name something your husband mistakenly thinks he's hiding from you in his dresser drawer.",
        "answers":  [
                        {
                            "text":  "money/wallet",
                            "points":  46
                        },
                        {
                            "text":  "porn/playboys",
                            "points":  29
                        },
                        {
                            "text":  "gift for me",
                            "points":  6
                        },
                        {
                            "text":  "receipts",
                            "points":  5
                        },
                        {
                            "text":  "condom/piece fleece",
                            "points":  3
                        },
                        {
                            "text":  "bankbook",
                            "points":  2
                        },
                        {
                            "text":  "handcuffs",
                            "points":  2
                        },
                        {
                            "text":  "secret 2nd phone",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210029,
        "question":  "We asked 100 husbands... Name something of your wife's you like to wear because it's so soft.",
        "answers":  [
                        {
                            "text":  "her robe",
                            "points":  33
                        },
                        {
                            "text":  "her pajamas",
                            "points":  16
                        },
                        {
                            "text":  "her sweater",
                            "points":  15
                        },
                        {
                            "text":  "her slippers",
                            "points":  11
                        },
                        {
                            "text":  "her t-shirt",
                            "points":  9
                        },
                        {
                            "text":  "her coat",
                            "points":  5
                        },
                        {
                            "text":  "her nightie",
                            "points":  3
                        },
                        {
                            "text":  "her scarf",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210030,
        "question":  "We asked 100 married women... In one word, describe the underwear your man is wearing right now.",
        "answers":  [
                        {
                            "text":  "boxers",
                            "points":  31
                        },
                        {
                            "text":  "tighty-whities",
                            "points":  23
                        },
                        {
                            "text":  "briefs",
                            "points":  19
                        },
                        {
                            "text":  "none",
                            "points":  6
                        },
                        {
                            "text":  "torn",
                            "points":  5
                        },
                        {
                            "text":  "ugly",
                            "points":  5
                        },
                        {
                            "text":  "boring",
                            "points":  3
                        },
                        {
                            "text":  "sexy",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210031,
        "question":  "Name something a squirrel might get in a fight with if it tried to take his nuts.",
        "answers":  [
                        {
                            "text":  "bird/crow",
                            "points":  30
                        },
                        {
                            "text":  "another squirrel",
                            "points":  23
                        },
                        {
                            "text":  "chipmunk",
                            "points":  12
                        },
                        {
                            "text":  "cat",
                            "points":  10
                        },
                        {
                            "text":  "raccoon",
                            "points":  8
                        },
                        {
                            "text":  "dog",
                            "points":  5
                        },
                        {
                            "text":  "rabbit",
                            "points":  4
                        },
                        {
                            "text":  "human",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210032,
        "question":  "Name something a groom hopes he doesn't see when he lifts the bride's veil to kiss her.",
        "answers":  [
                        {
                            "text":  "someone else/mom",
                            "points":  28
                        },
                        {
                            "text":  "stache/full beard",
                            "points":  16
                        },
                        {
                            "text":  "cold sore",
                            "points":  15
                        },
                        {
                            "text":  "booger",
                            "points":  9
                        },
                        {
                            "text":  "giant zit",
                            "points":  8
                        },
                        {
                            "text":  "crop of warts",
                            "points":  7
                        },
                        {
                            "text":  "a frown",
                            "points":  6
                        },
                        {
                            "text":  "snaggleteeth",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  210033,
        "question":  "Name something that's harder for a man to do if he has a big beer gut.",
        "answers":  [
                        {
                            "text":  "bend over/tie shoes",
                            "points":  51
                        },
                        {
                            "text":  "exercise/run",
                            "points":  15
                        },
                        {
                            "text":  "poke-n-ride",
                            "points":  10
                        },
                        {
                            "text":  "see his feet/chode",
                            "points":  7
                        },
                        {
                            "text":  "fit into clothes",
                            "points":  4
                        },
                        {
                            "text":  "sit/squat",
                            "points":  3
                        },
                        {
                            "text":  "attract hotties",
                            "points":  2
                        },
                        {
                            "text":  "sleep/on stomach",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210034,
        "question":  "Name someone you kiss politely but never passionately.",
        "answers":  [
                        {
                            "text":  "ma/pa",
                            "points":  45
                        },
                        {
                            "text":  "friend",
                            "points":  15
                        },
                        {
                            "text":  "grandparent",
                            "points":  14
                        },
                        {
                            "text":  "aunt/creepy uncle",
                            "points":  6
                        },
                        {
                            "text":  "sibling",
                            "points":  6
                        },
                        {
                            "text":  "child",
                            "points":  3
                        },
                        {
                            "text":  "mother-in-law",
                            "points":  3
                        },
                        {
                            "text":  "clergy",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210035,
        "question":  "Name a small place where a big couple might have trouble making love.",
        "answers":  [
                        {
                            "text":  "car/vw bug",
                            "points":  42
                        },
                        {
                            "text":  "bathroom/on plane",
                            "points":  30
                        },
                        {
                            "text":  "in a closet",
                            "points":  8
                        },
                        {
                            "text":  "twin/small bed",
                            "points":  5
                        },
                        {
                            "text":  "couch/love seat",
                            "points":  3
                        },
                        {
                            "text":  "elevator",
                            "points":  2
                        },
                        {
                            "text":  "hammock",
                            "points":  2
                        },
                        {
                            "text":  "tent",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210036,
        "question":  "If grown men trick-or-treated on Halloween, name a treat they'd hope you'd put in their bag.",
        "answers":  [
                        {
                            "text":  "a brewski/booze",
                            "points":  38
                        },
                        {
                            "text":  "food/candy",
                            "points":  19
                        },
                        {
                            "text":  "ultra thin rubbers",
                            "points":  9
                        },
                        {
                            "text":  "cash/gift card",
                            "points":  9
                        },
                        {
                            "text":  "phone number",
                            "points":  8
                        },
                        {
                            "text":  "cooch pics/porn",
                            "points":  4
                        },
                        {
                            "text":  "sports tickets",
                            "points":  4
                        },
                        {
                            "text":  "smokes/tobacco",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210037,
        "question":  "Fill in the blank: A woman might buy a huge bra so she can go to the market and shoplift ________.",
        "answers":  [
                        {
                            "text":  "fruit/melons",
                            "points":  36
                        },
                        {
                            "text":  "meat/ham",
                            "points":  24
                        },
                        {
                            "text":  "jewelry",
                            "points":  13
                        },
                        {
                            "text":  "clothes/socks",
                            "points":  12
                        },
                        {
                            "text":  "candy",
                            "points":  3
                        },
                        {
                            "text":  "cell phones",
                            "points":  2
                        },
                        {
                            "text":  "tissue/t.p.",
                            "points":  2
                        },
                        {
                            "text":  "makeup",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210038,
        "question":  "We asked 100 married men... Name a place your wife says she's going that makes you nervous.",
        "answers":  [
                        {
                            "text":  "mall/store",
                            "points":  33
                        },
                        {
                            "text":  "doctor",
                            "points":  19
                        },
                        {
                            "text":  "singles bar/club",
                            "points":  15
                        },
                        {
                            "text":  "her mother's",
                            "points":  8
                        },
                        {
                            "text":  "hair salon/bad cut",
                            "points":  7
                        },
                        {
                            "text":  "spa/hot massage",
                            "points":  5
                        },
                        {
                            "text":  "office/work",
                            "points":  5
                        },
                        {
                            "text":  "trip/tijuana",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210039,
        "question":  "We asked 100 married men... You're leaving the office and you remember it's your wife's birthday. Name something from the office you'd wrap up as a gift.",
        "answers":  [
                        {
                            "text":  "plant/asst.'s roses",
                            "points":  27
                        },
                        {
                            "text":  "computer",
                            "points":  23
                        },
                        {
                            "text":  "coffeemaker",
                            "points":  12
                        },
                        {
                            "text":  "desk lamp",
                            "points":  11
                        },
                        {
                            "text":  "pen/pencil set",
                            "points":  9
                        },
                        {
                            "text":  "fax machine",
                            "points":  5
                        },
                        {
                            "text":  "vase",
                            "points":  5
                        },
                        {
                            "text":  "stapler",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210040,
        "question":  "Once the kids move away, name something their parents can do in the house naked.",
        "answers":  [
                        {
                            "text":  "strut around",
                            "points":  19
                        },
                        {
                            "text":  "\"split the uprights\"",
                            "points":  17
                        },
                        {
                            "text":  "clean",
                            "points":  16
                        },
                        {
                            "text":  "watch tv",
                            "points":  13
                        },
                        {
                            "text":  "cook",
                            "points":  10
                        },
                        {
                            "text":  "dance/like miley",
                            "points":  9
                        },
                        {
                            "text":  "eat",
                            "points":  6
                        },
                        {
                            "text":  "sleep",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210041,
        "question":  "Name something a naughty kid does to Santa.",
        "answers":  [
                        {
                            "text":  "pulls his beard",
                            "points":  40
                        },
                        {
                            "text":  "hits/kicks/bites",
                            "points":  21
                        },
                        {
                            "text":  "whiz/dump in lap",
                            "points":  10
                        },
                        {
                            "text":  "no cookies/eats them",
                            "points":  9
                        },
                        {
                            "text":  "bad/poison milk",
                            "points":  5
                        },
                        {
                            "text":  "cusses out/yells",
                            "points":  4
                        },
                        {
                            "text":  "farts on him",
                            "points":  2
                        },
                        {
                            "text":  "stays up/spies",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210042,
        "question":  "Name something that might be full of holes.",
        "answers":  [
                        {
                            "text":  "swiss cheese",
                            "points":  40
                        },
                        {
                            "text":  "clothes/socks",
                            "points":  16
                        },
                        {
                            "text":  "alibi/story",
                            "points":  14
                        },
                        {
                            "text":  "net/fishing net",
                            "points":  9
                        },
                        {
                            "text":  "colander/strainer",
                            "points":  8
                        },
                        {
                            "text":  "golf course",
                            "points":  2
                        },
                        {
                            "text":  "screen",
                            "points":  2
                        },
                        {
                            "text":  "road/street",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210043,
        "question":  "We asked 100 single men... Name something of hers your girlfriend refuses to let you use.",
        "answers":  [
                        {
                            "text":  "her toothbrush",
                            "points":  24
                        },
                        {
                            "text":  "her soap/face wash",
                            "points":  19
                        },
                        {
                            "text":  "her razor",
                            "points":  14
                        },
                        {
                            "text":  "her brush",
                            "points":  11
                        },
                        {
                            "text":  "her eyeglasses",
                            "points":  8
                        },
                        {
                            "text":  "her deodorant",
                            "points":  7
                        },
                        {
                            "text":  "her perfume",
                            "points":  5
                        },
                        {
                            "text":  "her vibrator",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  210044,
        "question":  "We asked 100 women... Name something a man does on a date that turns a match made in heaven into \"no way in hell.\"",
        "answers":  [
                        {
                            "text":  "flirts/ogles chicks",
                            "points":  24
                        },
                        {
                            "text":  "won't pay/makes me",
                            "points":  15
                        },
                        {
                            "text":  "blows fartnados",
                            "points":  14
                        },
                        {
                            "text":  "ignores me/on cell",
                            "points":  12
                        },
                        {
                            "text":  "picks/eats boogers",
                            "points":  12
                        },
                        {
                            "text":  "insulting remarks",
                            "points":  10
                        },
                        {
                            "text":  "blabs about self",
                            "points":  4
                        },
                        {
                            "text":  "gets into a fight",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210045,
        "question":  "We asked 100 married women... Admit it: Name something your husband has that you've made fun of.",
        "answers":  [
                        {
                            "text":  "gut/love handles",
                            "points":  23
                        },
                        {
                            "text":  "bald spot",
                            "points":  19
                        },
                        {
                            "text":  "loud snore",
                            "points":  16
                        },
                        {
                            "text":  "clothes/overalls",
                            "points":  16
                        },
                        {
                            "text":  "hamster wang",
                            "points":  8
                        },
                        {
                            "text":  "'70s mustache",
                            "points":  5
                        },
                        {
                            "text":  "hairy feet",
                            "points":  3
                        },
                        {
                            "text":  "bushy nose hair",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210046,
        "question":  "Name something a woman with a crush on Santa might leave out for him instead of cookies.",
        "answers":  [
                        {
                            "text":  "candy/better food",
                            "points":  23
                        },
                        {
                            "text":  "lingerie/edible",
                            "points":  14
                        },
                        {
                            "text":  "her phone number",
                            "points":  13
                        },
                        {
                            "text":  "her hot li'l self!",
                            "points":  12
                        },
                        {
                            "text":  "sexy pics/nudes",
                            "points":  12
                        },
                        {
                            "text":  "booze/whiskey",
                            "points":  9
                        },
                        {
                            "text":  "mistletoe",
                            "points":  6
                        },
                        {
                            "text":  "love letter",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210047,
        "question":  "Name something a guy might ask his girlfriend to bring him in prison.",
        "answers":  [
                        {
                            "text":  "money",
                            "points":  16
                        },
                        {
                            "text":  "smokes",
                            "points":  15
                        },
                        {
                            "text":  "pic/of her hoo-hoo",
                            "points":  15
                        },
                        {
                            "text":  "drugs/crack",
                            "points":  15
                        },
                        {
                            "text":  "food/cake",
                            "points":  13
                        },
                        {
                            "text":  "book/mag/hustler",
                            "points":  9
                        },
                        {
                            "text":  "file/lock pick",
                            "points":  5
                        },
                        {
                            "text":  "undies/her panties",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  210048,
        "question":  "Name a place where if her husband took her there for her anniversary, a wife would be mad.",
        "answers":  [
                        {
                            "text":  "tacky restaurant",
                            "points":  43
                        },
                        {
                            "text":  "strip joint",
                            "points":  19
                        },
                        {
                            "text":  "sporting event",
                            "points":  12
                        },
                        {
                            "text":  "bar/club",
                            "points":  6
                        },
                        {
                            "text":  "bowling alley",
                            "points":  4
                        },
                        {
                            "text":  "his parents' house",
                            "points":  4
                        },
                        {
                            "text":  "the movies",
                            "points":  2
                        },
                        {
                            "text":  "car show",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210049,
        "question":  "In order to save time, name something you might do while you're on the john.",
        "answers":  [
                        {
                            "text":  "read book/mag",
                            "points":  43
                        },
                        {
                            "text":  "check e-mail",
                            "points":  19
                        },
                        {
                            "text":  "phone call/to lover",
                            "points":  12
                        },
                        {
                            "text":  "brush teeth",
                            "points":  6
                        },
                        {
                            "text":  "comb hair",
                            "points":  3
                        },
                        {
                            "text":  "sing/play music",
                            "points":  3
                        },
                        {
                            "text":  "pay bills/taxes",
                            "points":  3
                        },
                        {
                            "text":  "text",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210050,
        "question":  "If a baby could talk, he might say, \"Hey, you're doing\" what \"all wrong\"?",
        "answers":  [
                        {
                            "text":  "my diaper, dude",
                            "points":  42
                        },
                        {
                            "text":  "feeding me",
                            "points":  17
                        },
                        {
                            "text":  "burping me",
                            "points":  11
                        },
                        {
                            "text":  "picking up/holding",
                            "points":  9
                        },
                        {
                            "text":  "delivering me/waah!",
                            "points":  4
                        },
                        {
                            "text":  "dang bright lights",
                            "points":  3
                        },
                        {
                            "text":  "stupid baby talk",
                            "points":  3
                        },
                        {
                            "text":  "dress'g/onesies suck",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210051,
        "question":  "We asked 100 women... Name something you'd see on a man's face that would make you not want to kiss him.",
        "answers":  [
                        {
                            "text":  "food/tartar sauce",
                            "points":  17
                        },
                        {
                            "text":  "cold sore/blister",
                            "points":  17
                        },
                        {
                            "text":  "beard/mustache",
                            "points":  15
                        },
                        {
                            "text":  "booger/snot trail",
                            "points":  14
                        },
                        {
                            "text":  "exploding zits",
                            "points":  11
                        },
                        {
                            "text":  "cauliflower warts",
                            "points":  8
                        },
                        {
                            "text":  "dirt",
                            "points":  5
                        },
                        {
                            "text":  "boils",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  210052,
        "question":  "Name something snowmen might have nightmares about.",
        "answers":  [
                        {
                            "text":  "sun/beach weather",
                            "points":  62
                        },
                        {
                            "text":  "fire/flamethrowers",
                            "points":  14
                        },
                        {
                            "text":  "blow dryers",
                            "points":  3
                        },
                        {
                            "text":  "rain",
                            "points":  3
                        },
                        {
                            "text":  "snowplow/shovel",
                            "points":  3
                        },
                        {
                            "text":  "drought",
                            "points":  2
                        },
                        {
                            "text":  "snowballs",
                            "points":  2
                        },
                        {
                            "text":  "peeing dogs/pee",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210053,
        "question":  "Name something in your home you'd hate to discover your pet snake swallow.",
        "answers":  [
                        {
                            "text":  "another pet",
                            "points":  41
                        },
                        {
                            "text":  "ring/jewelry",
                            "points":  12
                        },
                        {
                            "text":  "the remote",
                            "points":  9
                        },
                        {
                            "text":  "keys",
                            "points":  9
                        },
                        {
                            "text":  "my phone",
                            "points":  8
                        },
                        {
                            "text":  "my kid",
                            "points":  6
                        },
                        {
                            "text":  "money",
                            "points":  4
                        },
                        {
                            "text":  "favorite vibrator",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210054,
        "question":  "Name something a man quickly learns not to argue about with his new wife.",
        "answers":  [
                        {
                            "text":  "money/bills",
                            "points":  37
                        },
                        {
                            "text":  "family/their moms",
                            "points":  15
                        },
                        {
                            "text":  "chores/cleaning",
                            "points":  12
                        },
                        {
                            "text":  "meals/cooking",
                            "points":  8
                        },
                        {
                            "text":  "decor/furniture",
                            "points":  7
                        },
                        {
                            "text":  "how long she primps",
                            "points":  6
                        },
                        {
                            "text":  "fashion/clothes",
                            "points":  3
                        },
                        {
                            "text":  "the ex",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210055,
        "question":  "Fill in the blank: There's nothing better than a bag of ________.",
        "answers":  [
                        {
                            "text":  "chips/cheetos",
                            "points":  35
                        },
                        {
                            "text":  "money",
                            "points":  21
                        },
                        {
                            "text":  "candy/chocolate",
                            "points":  14
                        },
                        {
                            "text":  "nuts",
                            "points":  8
                        },
                        {
                            "text":  "cookies",
                            "points":  4
                        },
                        {
                            "text":  "popcorn",
                            "points":  4
                        },
                        {
                            "text":  "weed",
                            "points":  3
                        },
                        {
                            "text":  "gold",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210056,
        "question":  "Name something a new doctor might practice his circumcising technique on.",
        "answers":  [
                        {
                            "text":  "banana",
                            "points":  32
                        },
                        {
                            "text":  "hot dog/sausage",
                            "points":  22
                        },
                        {
                            "text":  "doll",
                            "points":  10
                        },
                        {
                            "text":  "cucumber/pickle",
                            "points":  10
                        },
                        {
                            "text":  "carrot",
                            "points":  7
                        },
                        {
                            "text":  "corpse/cadaver",
                            "points":  4
                        },
                        {
                            "text":  "himself",
                            "points":  3
                        },
                        {
                            "text":  "person/his buds",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210057,
        "question":  "Name something of the bride's the groom might wear on a wild wedding night.",
        "answers":  [
                        {
                            "text":  "garter",
                            "points":  31
                        },
                        {
                            "text":  "panties/thong",
                            "points":  27
                        },
                        {
                            "text":  "veil/headdress",
                            "points":  17
                        },
                        {
                            "text":  "nothing",
                            "points":  6
                        },
                        {
                            "text":  "ring/jewelry",
                            "points":  3
                        },
                        {
                            "text":  "dress",
                            "points":  3
                        },
                        {
                            "text":  "bra",
                            "points":  2
                        },
                        {
                            "text":  "hat",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210058,
        "question":  "Name something a cranky old man at a nursing home might throw at a nurse.",
        "answers":  [
                        {
                            "text":  "bedpan/giant turd",
                            "points":  19
                        },
                        {
                            "text":  "drink/cup",
                            "points":  16
                        },
                        {
                            "text":  "food/tray",
                            "points":  15
                        },
                        {
                            "text":  "shoe/slippers",
                            "points":  12
                        },
                        {
                            "text":  "his teeth",
                            "points":  11
                        },
                        {
                            "text":  "pillow",
                            "points":  7
                        },
                        {
                            "text":  "cane",
                            "points":  6
                        },
                        {
                            "text":  "meds/pill bottle",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  210059,
        "question":  "When you get up and look in the mirror, name something you don't want to see on your face.",
        "answers":  [
                        {
                            "text":  "zit/north star",
                            "points":  55
                        },
                        {
                            "text":  "wrinkles",
                            "points":  14
                        },
                        {
                            "text":  "blood/of my victim",
                            "points":  4
                        },
                        {
                            "text":  "food/mustard",
                            "points":  4
                        },
                        {
                            "text":  "dried drool",
                            "points":  4
                        },
                        {
                            "text":  "booger",
                            "points":  3
                        },
                        {
                            "text":  "beard/whiskers",
                            "points":  3
                        },
                        {
                            "text":  "baggy/red eyes",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210060,
        "question":  "In horror movies, name a place teenagers go where there's always a killer on the loose.",
        "answers":  [
                        {
                            "text":  "cabin/camp/woods",
                            "points":  49
                        },
                        {
                            "text":  "graveyard",
                            "points":  12
                        },
                        {
                            "text":  "movie/drive-in",
                            "points":  6
                        },
                        {
                            "text":  "basement/cellar",
                            "points":  6
                        },
                        {
                            "text":  "the closet",
                            "points":  5
                        },
                        {
                            "text":  "bathroom/shower",
                            "points":  4
                        },
                        {
                            "text":  "bedroom/bed",
                            "points":  4
                        },
                        {
                            "text":  "a party",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210061,
        "question":  "Name a reason a woman barely eats when she's on a first dinner date.",
        "answers":  [
                        {
                            "text":  "to not look piggish",
                            "points":  41
                        },
                        {
                            "text":  "too nervous",
                            "points":  16
                        },
                        {
                            "text":  "on a diet",
                            "points":  9
                        },
                        {
                            "text":  "clothes too tight",
                            "points":  7
                        },
                        {
                            "text":  "avoid food in teeth",
                            "points":  6
                        },
                        {
                            "text":  "too busy yapping",
                            "points":  4
                        },
                        {
                            "text":  "keep cost down",
                            "points":  4
                        },
                        {
                            "text":  "so won't fart/poo",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210062,
        "question":  "Name something you'd do if the person you're sitting next to you on an airplane had B.O.",
        "answers":  [
                        {
                            "text":  "change seats",
                            "points":  39
                        },
                        {
                            "text":  "cover nose/mask",
                            "points":  24
                        },
                        {
                            "text":  "turn head",
                            "points":  6
                        },
                        {
                            "text":  "endure/enjoy it",
                            "points":  6
                        },
                        {
                            "text":  "spray perfume",
                            "points":  6
                        },
                        {
                            "text":  "\"you reek, yo\"",
                            "points":  3
                        },
                        {
                            "text":  "sleep",
                            "points":  3
                        },
                        {
                            "text":  "hang in bathroom",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210063,
        "question":  "We asked 100 women... Your man might ask you to dress as a sexy maid in the bedroom. What might you ask him to wear?",
        "answers":  [
                        {
                            "text":  "birthday suit",
                            "points":  33
                        },
                        {
                            "text":  "cowboy duds/chaps",
                            "points":  22
                        },
                        {
                            "text":  "suit & tie/butler",
                            "points":  13
                        },
                        {
                            "text":  "fireman outfit",
                            "points":  6
                        },
                        {
                            "text":  "boxers/silk",
                            "points":  6
                        },
                        {
                            "text":  "g-string/thong",
                            "points":  4
                        },
                        {
                            "text":  "apron",
                            "points":  3
                        },
                        {
                            "text":  "tarzan loincloth",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210064,
        "question":  "We asked 100 men... Fill in the blank: I wouldn't want to date a woman who had more ________ than me.",
        "answers":  [
                        {
                            "text":  "hair/whiskers",
                            "points":  33
                        },
                        {
                            "text":  "fat/belly",
                            "points":  10
                        },
                        {
                            "text":  "muscles",
                            "points":  10
                        },
                        {
                            "text":  "money",
                            "points":  9
                        },
                        {
                            "text":  "cojones/guts",
                            "points":  8
                        },
                        {
                            "text":  "lovers",
                            "points":  7
                        },
                        {
                            "text":  "brains",
                            "points":  7
                        },
                        {
                            "text":  "kids",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  210065,
        "question":  "Fill in the blank: I told my family, \"Don't pull the plug on me as long as I can still ________.\"",
        "answers":  [
                        {
                            "text":  "communicate/blink",
                            "points":  25
                        },
                        {
                            "text":  "breathe/on own",
                            "points":  23
                        },
                        {
                            "text":  "walk/get around",
                            "points":  14
                        },
                        {
                            "text":  "eat/feed self",
                            "points":  12
                        },
                        {
                            "text":  "think",
                            "points":  7
                        },
                        {
                            "text":  "take a whiz",
                            "points":  3
                        },
                        {
                            "text":  "make my worm squirm",
                            "points":  3
                        },
                        {
                            "text":  "recover",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210066,
        "question":  "Name something specific men buy hoping they'll look sexy in it.",
        "answers":  [
                        {
                            "text":  "hot undies/thong",
                            "points":  23
                        },
                        {
                            "text":  "suit/tie",
                            "points":  15
                        },
                        {
                            "text":  "butt huggin' jeans",
                            "points":  10
                        },
                        {
                            "text":  "speedo/trunks",
                            "points":  9
                        },
                        {
                            "text":  "shorts/daisy dukes",
                            "points":  9
                        },
                        {
                            "text":  "dress pants/shirt",
                            "points":  9
                        },
                        {
                            "text":  "muscle/t-shirt",
                            "points":  9
                        },
                        {
                            "text":  "car",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  210067,
        "question":  "Name something a father might keep in his baby's diaper bag that he shouldn't.",
        "answers":  [
                        {
                            "text":  "pint of jack/beer",
                            "points":  34
                        },
                        {
                            "text":  "smokes",
                            "points":  16
                        },
                        {
                            "text":  "gun",
                            "points":  10
                        },
                        {
                            "text":  "cell phone",
                            "points":  10
                        },
                        {
                            "text":  "food/soda",
                            "points":  6
                        },
                        {
                            "text":  "drugs/pot",
                            "points":  5
                        },
                        {
                            "text":  "condoms",
                            "points":  4
                        },
                        {
                            "text":  "dirty clothes/shoes",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210068,
        "question":  "If there was a store that sold husbands, most people would try to buy one that came with a good what?",
        "answers":  [
                        {
                            "text":  "job",
                            "points":  24
                        },
                        {
                            "text":  "personality/humor",
                            "points":  15
                        },
                        {
                            "text":  "warranty/guarantee",
                            "points":  14
                        },
                        {
                            "text":  "heart/character",
                            "points":  12
                        },
                        {
                            "text":  "bank account",
                            "points":  10
                        },
                        {
                            "text":  "bod/butt",
                            "points":  9
                        },
                        {
                            "text":  "head of hair",
                            "points":  3
                        },
                        {
                            "text":  "brain",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210069,
        "question":  "Name something a woman might consider trading her husband for if it was offered to her.",
        "answers":  [
                        {
                            "text":  "money/50 bucks",
                            "points":  38
                        },
                        {
                            "text":  "better man/2 of 'em",
                            "points":  20
                        },
                        {
                            "text":  "house/mansion",
                            "points":  10
                        },
                        {
                            "text":  "car/cute volvo",
                            "points":  10
                        },
                        {
                            "text":  "dog/pet",
                            "points":  4
                        },
                        {
                            "text":  "diamond/jewelry",
                            "points":  2
                        },
                        {
                            "text":  "a robot",
                            "points":  2
                        },
                        {
                            "text":  "cook/maid",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210070,
        "question":  "Name something parents would hate to see their daughter's date wearing.",
        "answers":  [
                        {
                            "text":  "piercing/nose ring",
                            "points":  33
                        },
                        {
                            "text":  "tattoo",
                            "points":  11
                        },
                        {
                            "text":  "thong/butt floss",
                            "points":  9
                        },
                        {
                            "text":  "baggy/saggy pants",
                            "points":  9
                        },
                        {
                            "text":  "wild hair/mohawk",
                            "points":  8
                        },
                        {
                            "text":  "dress/miniskirt",
                            "points":  7
                        },
                        {
                            "text":  "leather",
                            "points":  6
                        },
                        {
                            "text":  "gun",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  210071,
        "question":  "Name something a stripper might do if a man only tipped her a quarter.",
        "answers":  [
                        {
                            "text":  "slap/kick him",
                            "points":  29
                        },
                        {
                            "text":  "throw it back",
                            "points":  19
                        },
                        {
                            "text":  "leave/walk off",
                            "points":  11
                        },
                        {
                            "text":  "put on clothes",
                            "points":  8
                        },
                        {
                            "text":  "ignore/see next guy",
                            "points":  7
                        },
                        {
                            "text":  "fart in his face",
                            "points":  6
                        },
                        {
                            "text":  "spit loogie on him",
                            "points":  4
                        },
                        {
                            "text":  "cuss out/flip off",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210072,
        "question":  "Name something of yours that you like even though it's kind of ugly.",
        "answers":  [
                        {
                            "text":  "my clothes/shoes",
                            "points":  24
                        },
                        {
                            "text":  "my bod/hammertoe",
                            "points":  22
                        },
                        {
                            "text":  "mangy mutt/pet",
                            "points":  16
                        },
                        {
                            "text":  "my face/beak",
                            "points":  9
                        },
                        {
                            "text":  "my car/mom van",
                            "points":  8
                        },
                        {
                            "text":  "funky furniture",
                            "points":  5
                        },
                        {
                            "text":  "my house",
                            "points":  2
                        },
                        {
                            "text":  "my hair/butt hair",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210073,
        "question":  "Name something a wife might have to force her husband to wear.",
        "answers":  [
                        {
                            "text":  "tie/tux/suit",
                            "points":  56
                        },
                        {
                            "text":  "her panties/bra",
                            "points":  6
                        },
                        {
                            "text":  "a sweater",
                            "points":  5
                        },
                        {
                            "text":  "his undies/thong",
                            "points":  5
                        },
                        {
                            "text":  "weenie beanie",
                            "points":  4
                        },
                        {
                            "text":  "wedding ring",
                            "points":  4
                        },
                        {
                            "text":  "a shirt",
                            "points":  4
                        },
                        {
                            "text":  "her dress",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210074,
        "question":  "Name something done to you as a baby that you'd hate to have done to you now.",
        "answers":  [
                        {
                            "text":  "diapered/wiped",
                            "points":  42
                        },
                        {
                            "text":  "fed/from mom's nip",
                            "points":  11
                        },
                        {
                            "text":  "tickled/raspberry",
                            "points":  9
                        },
                        {
                            "text":  "cheeks squeezed",
                            "points":  8
                        },
                        {
                            "text":  "spanked",
                            "points":  6
                        },
                        {
                            "text":  "circumcised",
                            "points":  4
                        },
                        {
                            "text":  "bathed",
                            "points":  4
                        },
                        {
                            "text":  "take temp up butt",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210075,
        "question":  "We asked 100 women... Finding out your man is cheating is bad. Finding out that he met her where is even worse?",
        "answers":  [
                        {
                            "text":  "strip joint",
                            "points":  36
                        },
                        {
                            "text":  "bar/club",
                            "points":  19
                        },
                        {
                            "text":  "church",
                            "points":  11
                        },
                        {
                            "text":  "my/our place",
                            "points":  6
                        },
                        {
                            "text":  "work",
                            "points":  5
                        },
                        {
                            "text":  "ho house",
                            "points":  4
                        },
                        {
                            "text":  "online",
                            "points":  3
                        },
                        {
                            "text":  "hotel/motel",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210076,
        "question":  "Fill in the blank: I'd have to be really thirsty to drink milk from a ________.",
        "answers":  [
                        {
                            "text":  "cow's udder",
                            "points":  29
                        },
                        {
                            "text":  "carton/jug",
                            "points":  21
                        },
                        {
                            "text":  "goat's teat",
                            "points":  12
                        },
                        {
                            "text":  "shoe",
                            "points":  9
                        },
                        {
                            "text":  "baby's bottle",
                            "points":  6
                        },
                        {
                            "text":  "chick's nipple",
                            "points":  4
                        },
                        {
                            "text":  "toilet",
                            "points":  3
                        },
                        {
                            "text":  "dirty glass",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210077,
        "question":  "We asked 100 women... What are you tempted to do when a construction worker whistles at you?",
        "answers":  [
                        {
                            "text":  "smile/laugh",
                            "points":  29
                        },
                        {
                            "text":  "whistle back",
                            "points":  14
                        },
                        {
                            "text":  "flip the bird",
                            "points":  14
                        },
                        {
                            "text":  "wink",
                            "points":  13
                        },
                        {
                            "text":  "flash/moon him",
                            "points":  6
                        },
                        {
                            "text":  "wave",
                            "points":  4
                        },
                        {
                            "text":  "ignore/keep going",
                            "points":  4
                        },
                        {
                            "text":  "check him out",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210078,
        "question":  "What does a woman do for her kids that she won't do for her husband?",
        "answers":  [
                        {
                            "text":  "cook/pack lunch",
                            "points":  24
                        },
                        {
                            "text":  "feed/breastfeed",
                            "points":  14
                        },
                        {
                            "text":  "wipe/diaper",
                            "points":  11
                        },
                        {
                            "text":  "give bath",
                            "points":  9
                        },
                        {
                            "text":  "clean up/laundry",
                            "points":  9
                        },
                        {
                            "text":  "help dress",
                            "points":  8
                        },
                        {
                            "text":  "drive/take places",
                            "points":  7
                        },
                        {
                            "text":  "pick/wipe nose",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  210079,
        "question":  "Name something Eve might do to Adam's fig leaf that would make him angry.",
        "answers":  [
                        {
                            "text":  "pull it/off",
                            "points":  21
                        },
                        {
                            "text":  "rip/cut it",
                            "points":  19
                        },
                        {
                            "text":  "steal/hide/lose",
                            "points":  19
                        },
                        {
                            "text":  "wash/shrink it",
                            "points":  10
                        },
                        {
                            "text":  "burn/smoke it",
                            "points":  6
                        },
                        {
                            "text":  "cook/eat it",
                            "points":  5
                        },
                        {
                            "text":  "starch it",
                            "points":  4
                        },
                        {
                            "text":  "decorate/add lace",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210080,
        "question":  "Name an occasion for which you might wear your lucky underwear.",
        "answers":  [
                        {
                            "text":  "hot date",
                            "points":  30
                        },
                        {
                            "text":  "job interview",
                            "points":  16
                        },
                        {
                            "text":  "casino/gambling",
                            "points":  11
                        },
                        {
                            "text":  "sporting event",
                            "points":  9
                        },
                        {
                            "text":  "wedding/night",
                            "points":  7
                        },
                        {
                            "text":  "anniversary",
                            "points":  5
                        },
                        {
                            "text":  "valentine's day",
                            "points":  4
                        },
                        {
                            "text":  "exam/finals",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210081,
        "question":  "When you're young, you shake your booty. When you're old, you shake your what?",
        "answers":  [
                        {
                            "text":  "head",
                            "points":  27
                        },
                        {
                            "text":  "pudgy paunch",
                            "points":  12
                        },
                        {
                            "text":  "fat, furry fanny",
                            "points":  11
                        },
                        {
                            "text":  "cane",
                            "points":  9
                        },
                        {
                            "text":  "finger",
                            "points":  8
                        },
                        {
                            "text":  "saggy melons",
                            "points":  8
                        },
                        {
                            "text":  "metamucil/meds",
                            "points":  6
                        },
                        {
                            "text":  "hand/fist",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  210082,
        "question":  "Name something you wouldn't want to sit on at a nude beach.",
        "answers":  [
                        {
                            "text":  "a crab",
                            "points":  23
                        },
                        {
                            "text":  "the sand",
                            "points":  21
                        },
                        {
                            "text":  "cactus/thorn",
                            "points":  11
                        },
                        {
                            "text":  "rock/stones",
                            "points":  8
                        },
                        {
                            "text":  "a jellyfish",
                            "points":  8
                        },
                        {
                            "text":  "public chair/bench",
                            "points":  5
                        },
                        {
                            "text":  "an ant hill",
                            "points":  5
                        },
                        {
                            "text":  "turned-on nudist",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  210083,
        "question":  "If they made a movie called \"Bad Grandma,\" what might you see grandma do?",
        "answers":  [
                        {
                            "text":  "drink/body shots",
                            "points":  15
                        },
                        {
                            "text":  "strip/vacuum nude",
                            "points":  14
                        },
                        {
                            "text":  "curse/yell",
                            "points":  14
                        },
                        {
                            "text":  "spank/cane people",
                            "points":  11
                        },
                        {
                            "text":  "drugs/pot cookies",
                            "points":  10
                        },
                        {
                            "text":  "steal/rob bank",
                            "points":  10
                        },
                        {
                            "text":  "kiss/slut it up",
                            "points":  7
                        },
                        {
                            "text":  "fart/on grandkid",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  210084,
        "question":  "Name something the ladies might do if a male stripper performs at the nursing home.",
        "answers":  [
                        {
                            "text":  "laugh/cheer",
                            "points":  36
                        },
                        {
                            "text":  "$$$/make it rain",
                            "points":  14
                        },
                        {
                            "text":  "handle goods/spank",
                            "points":  8
                        },
                        {
                            "text":  "have heart attack",
                            "points":  7
                        },
                        {
                            "text":  "dance",
                            "points":  6
                        },
                        {
                            "text":  "die",
                            "points":  6
                        },
                        {
                            "text":  "faint",
                            "points":  4
                        },
                        {
                            "text":  "blush",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210085,
        "question":  "Name something a lonely guy in Alaska might cuddle up to.",
        "answers":  [
                        {
                            "text":  "bear/polar bear",
                            "points":  34
                        },
                        {
                            "text":  "dog/a hot husky",
                            "points":  23
                        },
                        {
                            "text":  "a nice fire",
                            "points":  7
                        },
                        {
                            "text":  "fur/animal skin rug",
                            "points":  6
                        },
                        {
                            "text":  "pillow",
                            "points":  5
                        },
                        {
                            "text":  "blanket",
                            "points":  4
                        },
                        {
                            "text":  "a wet, warm seal",
                            "points":  3
                        },
                        {
                            "text":  "sexy eskimo/babe",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210086,
        "question":  "If your dog ran away, name something you'd be surprised he took with him.",
        "answers":  [
                        {
                            "text":  "the cat",
                            "points":  23
                        },
                        {
                            "text":  "leash/collar",
                            "points":  17
                        },
                        {
                            "text":  "food/bowl",
                            "points":  16
                        },
                        {
                            "text":  "his bone",
                            "points":  9
                        },
                        {
                            "text":  "clothes/shoe",
                            "points":  6
                        },
                        {
                            "text":  "bed/pillow",
                            "points":  6
                        },
                        {
                            "text":  "favorite toy",
                            "points":  4
                        },
                        {
                            "text":  "wallet/money",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210087,
        "question":  "Tell me a word that rhymes with \"election.\"",
        "answers":  [
                        {
                            "text":  "selection",
                            "points":  32
                        },
                        {
                            "text":  "erection",
                            "points":  23
                        },
                        {
                            "text":  "perfection",
                            "points":  6
                        },
                        {
                            "text":  "detection",
                            "points":  6
                        },
                        {
                            "text":  "protection",
                            "points":  5
                        },
                        {
                            "text":  "rejection",
                            "points":  4
                        },
                        {
                            "text":  "collection",
                            "points":  4
                        },
                        {
                            "text":  "section",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210088,
        "question":  "Name something of yours you hope your friends aren't making fun of behind your back.",
        "answers":  [
                        {
                            "text":  "body/5-foot fanny",
                            "points":  26
                        },
                        {
                            "text":  "hair/rat-like face",
                            "points":  25
                        },
                        {
                            "text":  "clothes/shoes",
                            "points":  11
                        },
                        {
                            "text":  "clunker/'73 nova",
                            "points":  8
                        },
                        {
                            "text":  "my stupid/ugly mate",
                            "points":  4
                        },
                        {
                            "text":  "my low iq",
                            "points":  4
                        },
                        {
                            "text":  "crappy/dirty house",
                            "points":  3
                        },
                        {
                            "text":  "my weird voice",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210089,
        "question":  "We asked 100 women... Some guys have buns of steel. Be honest: What do your man's buns feel like?",
        "answers":  [
                        {
                            "text":  "jell-o",
                            "points":  25
                        },
                        {
                            "text":  "dough/bread",
                            "points":  15
                        },
                        {
                            "text":  "marshmallows",
                            "points":  14
                        },
                        {
                            "text":  "steel/iron",
                            "points":  9
                        },
                        {
                            "text":  "rocks",
                            "points":  7
                        },
                        {
                            "text":  "play-doh",
                            "points":  5
                        },
                        {
                            "text":  "rubber",
                            "points":  5
                        },
                        {
                            "text":  "mashed potatoes",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210090,
        "question":  "If you built a snowwoman, name something you'd put on it to make her look sexy.",
        "answers":  [
                        {
                            "text":  "snow boobs",
                            "points":  32
                        },
                        {
                            "text":  "lingerie/thong",
                            "points":  22
                        },
                        {
                            "text":  "bikini",
                            "points":  9
                        },
                        {
                            "text":  "lipstick/makeup",
                            "points":  6
                        },
                        {
                            "text":  "dress/skirt",
                            "points":  5
                        },
                        {
                            "text":  "long lashes",
                            "points":  3
                        },
                        {
                            "text":  "hat/nurse's cap",
                            "points":  3
                        },
                        {
                            "text":  "hot hairdo",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210091,
        "question":  "Name something you do when you want to put yourself in a romantic mood.",
        "answers":  [
                        {
                            "text":  "music/titanic song",
                            "points":  30
                        },
                        {
                            "text":  "dress up/sexy",
                            "points":  12
                        },
                        {
                            "text":  "chug booze",
                            "points":  11
                        },
                        {
                            "text":  "dinner/chocolate",
                            "points":  8
                        },
                        {
                            "text":  "shower",
                            "points":  7
                        },
                        {
                            "text":  "porn/dirty book",
                            "points":  6
                        },
                        {
                            "text":  "light candles",
                            "points":  5
                        },
                        {
                            "text":  "think about mate",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210092,
        "question":  "Name an activity during which a wife might tell her husband to move to the left.",
        "answers":  [
                        {
                            "text":  "sugaring the cookie",
                            "points":  27
                        },
                        {
                            "text":  "dancing/elec. slide",
                            "points":  18
                        },
                        {
                            "text":  "driving",
                            "points":  8
                        },
                        {
                            "text":  "sport/bowling",
                            "points":  7
                        },
                        {
                            "text":  "hanging picture",
                            "points":  7
                        },
                        {
                            "text":  "twister/game",
                            "points":  7
                        },
                        {
                            "text":  "taking photo",
                            "points":  5
                        },
                        {
                            "text":  "mopping/cleaning",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210093,
        "question":  "Name something a hospital nurse might threaten to do to a misbehaving male patient.",
        "answers":  [
                        {
                            "text":  "sedate/give shot",
                            "points":  23
                        },
                        {
                            "text":  "strap him down",
                            "points":  12
                        },
                        {
                            "text":  "slap/spank/pinch",
                            "points":  11
                        },
                        {
                            "text":  "call backup/his mom",
                            "points":  11
                        },
                        {
                            "text":  "catheter/yank it",
                            "points":  8
                        },
                        {
                            "text":  "give him enema",
                            "points":  7
                        },
                        {
                            "text":  "no food for you!",
                            "points":  6
                        },
                        {
                            "text":  "cut off his nuggets",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  210094,
        "question":  "If you could go to the land of Oz, name something you'd ask the wizard for.",
        "answers":  [
                        {
                            "text":  "$$$/mad cheddar",
                            "points":  37
                        },
                        {
                            "text":  "health/new heart",
                            "points":  17
                        },
                        {
                            "text":  "a brain",
                            "points":  7
                        },
                        {
                            "text":  "hot bod/big banana",
                            "points":  5
                        },
                        {
                            "text":  "peace/on earth",
                            "points":  4
                        },
                        {
                            "text":  "love/nude dorothy",
                            "points":  4
                        },
                        {
                            "text":  "happiness",
                            "points":  4
                        },
                        {
                            "text":  "magic power/to fly",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210095,
        "question":  "We asked 100 married women... Name something you shouldn't allow in your bedroom or you can kiss romance good-bye.",
        "answers":  [
                        {
                            "text":  "tv/football",
                            "points":  18
                        },
                        {
                            "text":  "food/funyuns",
                            "points":  13
                        },
                        {
                            "text":  "separate beds",
                            "points":  11
                        },
                        {
                            "text":  "computer",
                            "points":  10
                        },
                        {
                            "text":  "pet/dog",
                            "points":  10
                        },
                        {
                            "text":  "condom/hog helmet",
                            "points":  8
                        },
                        {
                            "text":  "flannel nightgown",
                            "points":  7
                        },
                        {
                            "text":  "curlers",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  210096,
        "question":  "Name something a brain surgeon would hate to have happen in the middle of an operation.",
        "answers":  [
                        {
                            "text":  "sneeze/cough",
                            "points":  34
                        },
                        {
                            "text":  "hand/arm problem",
                            "points":  11
                        },
                        {
                            "text":  "patient croaks",
                            "points":  8
                        },
                        {
                            "text":  "power outage",
                            "points":  8
                        },
                        {
                            "text":  "heart attack/stroke",
                            "points":  6
                        },
                        {
                            "text":  "drop/lose scalpel",
                            "points":  5
                        },
                        {
                            "text":  "explosive diarrhea",
                            "points":  5
                        },
                        {
                            "text":  "patient wakes/moves",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210097,
        "question":  "Name a fruit that's the size of a hemorrhoid.",
        "answers":  [
                        {
                            "text":  "grape",
                            "points":  42
                        },
                        {
                            "text":  "cherry",
                            "points":  8
                        },
                        {
                            "text":  "plum",
                            "points":  7
                        },
                        {
                            "text":  "raisin",
                            "points":  6
                        },
                        {
                            "text":  "blueberry",
                            "points":  5
                        },
                        {
                            "text":  "raspberry",
                            "points":  4
                        },
                        {
                            "text":  "kiwi",
                            "points":  4
                        },
                        {
                            "text":  "strawberry",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210098,
        "question":  "We asked 100 women... Fill in the blank: Is that a ________ in your pocket, or are you just happy to see me?",
        "answers":  [
                        {
                            "text":  "banana",
                            "points":  28
                        },
                        {
                            "text":  "gun/pistol",
                            "points":  14
                        },
                        {
                            "text":  "pickle/cucumber",
                            "points":  9
                        },
                        {
                            "text":  "sausage/salami",
                            "points":  7
                        },
                        {
                            "text":  "roll of quarters",
                            "points":  6
                        },
                        {
                            "text":  "sock",
                            "points":  6
                        },
                        {
                            "text":  "wallet",
                            "points":  5
                        },
                        {
                            "text":  "zucchini",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  210099,
        "question":  "On a wedding cake, a bride and groom hold hands. What might they be holding on a divorce cake?",
        "answers":  [
                        {
                            "text":  "divorce papers",
                            "points":  24
                        },
                        {
                            "text":  "knives",
                            "points":  18
                        },
                        {
                            "text":  "guns",
                            "points":  16
                        },
                        {
                            "text":  "axes",
                            "points":  6
                        },
                        {
                            "text":  "lawyer/bill",
                            "points":  4
                        },
                        {
                            "text":  "money/bankbook",
                            "points":  4
                        },
                        {
                            "text":  "the kids",
                            "points":  4
                        },
                        {
                            "text":  "throats/necks",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210100,
        "question":  "Name something a small dog might have that's very big.",
        "answers":  [
                        {
                            "text":  "tail",
                            "points":  18
                        },
                        {
                            "text":  "ears",
                            "points":  18
                        },
                        {
                            "text":  "bark",
                            "points":  15
                        },
                        {
                            "text":  "bone",
                            "points":  8
                        },
                        {
                            "text":  "'tude/personality",
                            "points":  6
                        },
                        {
                            "text":  "mouth/tongue/bite",
                            "points":  6
                        },
                        {
                            "text":  "dong/puppymaker",
                            "points":  5
                        },
                        {
                            "text":  "head",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210101,
        "question":  "Name something in a bakery a baker might call his wife.",
        "answers":  [
                        {
                            "text":  "honey/buns",
                            "points":  32
                        },
                        {
                            "text":  "his oven",
                            "points":  9
                        },
                        {
                            "text":  "sweet/sweetie",
                            "points":  9
                        },
                        {
                            "text":  "cupcake",
                            "points":  8
                        },
                        {
                            "text":  "muffin",
                            "points":  7
                        },
                        {
                            "text":  "sugar",
                            "points":  5
                        },
                        {
                            "text":  "donut",
                            "points":  5
                        },
                        {
                            "text":  "doughy",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210102,
        "question":  "Name something a wife might wait to do until after her husband falls asleep.",
        "answers":  [
                        {
                            "text":  "read",
                            "points":  17
                        },
                        {
                            "text":  "twiddle her twanger",
                            "points":  14
                        },
                        {
                            "text":  "fart/major dump",
                            "points":  9
                        },
                        {
                            "text":  "tv/chick flick",
                            "points":  9
                        },
                        {
                            "text":  "pig out",
                            "points":  9
                        },
                        {
                            "text":  "call friend/lover",
                            "points":  8
                        },
                        {
                            "text":  "online shop/surf",
                            "points":  8
                        },
                        {
                            "text":  "take bath/shower",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  210103,
        "question":  "Name a specific word to describe a baker's buns that might also describe the baker's buns.",
        "answers":  [
                        {
                            "text":  "soft",
                            "points":  23
                        },
                        {
                            "text":  "hot",
                            "points":  22
                        },
                        {
                            "text":  "round",
                            "points":  10
                        },
                        {
                            "text":  "big",
                            "points":  9
                        },
                        {
                            "text":  "tasty",
                            "points":  5
                        },
                        {
                            "text":  "fatty",
                            "points":  3
                        },
                        {
                            "text":  "firm",
                            "points":  3
                        },
                        {
                            "text":  "sweet",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210104,
        "question":  "Name a kind of house you'd never want to be in.",
        "answers":  [
                        {
                            "text":  "haunted house",
                            "points":  27
                        },
                        {
                            "text":  "jail/big house",
                            "points":  11
                        },
                        {
                            "text":  "doghouse",
                            "points":  8
                        },
                        {
                            "text":  "crack house",
                            "points":  7
                        },
                        {
                            "text":  "small house/hut",
                            "points":  7
                        },
                        {
                            "text":  "glass house",
                            "points":  6
                        },
                        {
                            "text":  "cat/ho house",
                            "points":  5
                        },
                        {
                            "text":  "outhouse",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  210105,
        "question":  "Tell me a candy bar a stripper might use as a stage name.",
        "answers":  [
                        {
                            "text":  "milky way",
                            "points":  19
                        },
                        {
                            "text":  "snickers",
                            "points":  11
                        },
                        {
                            "text":  "baby ruth",
                            "points":  10
                        },
                        {
                            "text":  "mounds",
                            "points":  10
                        },
                        {
                            "text":  "butterfinger",
                            "points":  8
                        },
                        {
                            "text":  "kit kat",
                            "points":  6
                        },
                        {
                            "text":  "twix",
                            "points":  6
                        },
                        {
                            "text":  "payday",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  210106,
        "question":  "Name something that can make a kiss one that you'll never forget.",
        "answers":  [
                        {
                            "text":  "tongue action",
                            "points":  23
                        },
                        {
                            "text":  "passion/love",
                            "points":  15
                        },
                        {
                            "text":  "it's your first",
                            "points":  11
                        },
                        {
                            "text":  "the person",
                            "points":  9
                        },
                        {
                            "text":  "place/in a castle",
                            "points":  5
                        },
                        {
                            "text":  "long/lingering",
                            "points":  5
                        },
                        {
                            "text":  "petting/fondling",
                            "points":  3
                        },
                        {
                            "text":  "leads to hot sex",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210107,
        "question":  "Name something a man doesn't care that a woman has as long as she's hot.",
        "answers":  [
                        {
                            "text":  "a brain",
                            "points":  27
                        },
                        {
                            "text":  "a kid/14 of them",
                            "points":  8
                        },
                        {
                            "text":  "money/job",
                            "points":  8
                        },
                        {
                            "text":  "bad hair",
                            "points":  7
                        },
                        {
                            "text":  "pets/100 cats",
                            "points":  6
                        },
                        {
                            "text":  "temper/'tude",
                            "points":  5
                        },
                        {
                            "text":  "tattoos/on face",
                            "points":  5
                        },
                        {
                            "text":  "giant moles",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  210108,
        "question":  "Name a way your spouse is like your feet.",
        "answers":  [
                        {
                            "text":  "stinky",
                            "points":  20
                        },
                        {
                            "text":  "rough/callous",
                            "points":  13
                        },
                        {
                            "text":  "soft/smooth",
                            "points":  8
                        },
                        {
                            "text":  "sweaty/sticky",
                            "points":  8
                        },
                        {
                            "text":  "support/stability",
                            "points":  6
                        },
                        {
                            "text":  "a pain",
                            "points":  5
                        },
                        {
                            "text":  "ugly",
                            "points":  4
                        },
                        {
                            "text":  "always tired",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210109,
        "question":  "We asked 100 men... Name something that's not easy to take off of a woman in the heat of passion.",
        "answers":  [
                        {
                            "text":  "bra",
                            "points":  40
                        },
                        {
                            "text":  "shirt/turtleneck",
                            "points":  19
                        },
                        {
                            "text":  "pants",
                            "points":  12
                        },
                        {
                            "text":  "nylons",
                            "points":  10
                        },
                        {
                            "text":  "panties",
                            "points":  10
                        },
                        {
                            "text":  "jewelry",
                            "points":  5
                        },
                        {
                            "text":  "glasses",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210111,
        "question":  "We asked 100 women... Name something you don't like your man looking at while you're talking to him.",
        "answers":  [
                        {
                            "text":  "my bouncy melons",
                            "points":  24
                        },
                        {
                            "text":  "chicks/sluttage",
                            "points":  21
                        },
                        {
                            "text":  "his phone",
                            "points":  21
                        },
                        {
                            "text":  "tv/sports",
                            "points":  20
                        },
                        {
                            "text":  "his computer",
                            "points":  10
                        },
                        {
                            "text":  "video games",
                            "points":  2
                        },
                        {
                            "text":  "the floor",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210112,
        "question":  "We asked 100 married men... In one word, describe your wife's personality using a weather condition.",
        "answers":  [
                        {
                            "text":  "hot",
                            "points":  19
                        },
                        {
                            "text":  "cloudy/partly",
                            "points":  19
                        },
                        {
                            "text":  "warm",
                            "points":  17
                        },
                        {
                            "text":  "stormy",
                            "points":  14
                        },
                        {
                            "text":  "sunny",
                            "points":  13
                        },
                        {
                            "text":  "cold",
                            "points":  11
                        },
                        {
                            "text":  "rainy",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  210113,
        "question":  "We asked 100 men... If you were a hospital patient, what would you rather have a female nurse do for you than a male nurse?",
        "answers":  [
                        {
                            "text":  "sponge me",
                            "points":  65
                        },
                        {
                            "text":  "give a shot",
                            "points":  14
                        },
                        {
                            "text":  "shave my bod",
                            "points":  11
                        },
                        {
                            "text":  "dress/undress me",
                            "points":  3
                        },
                        {
                            "text":  "clean bedpan",
                            "points":  2
                        },
                        {
                            "text":  "take blood press.",
                            "points":  2
                        },
                        {
                            "text":  "insert catheter",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210114,
        "question":  "Name a talent a beauty pageant contestant might demonstrate.",
        "answers":  [
                        {
                            "text":  "singing",
                            "points":  62
                        },
                        {
                            "text":  "dancing/twerking",
                            "points":  16
                        },
                        {
                            "text":  "wearing swimsuit",
                            "points":  11
                        },
                        {
                            "text":  "flute/instrument",
                            "points":  3
                        },
                        {
                            "text":  "baton twirling",
                            "points":  3
                        },
                        {
                            "text":  "smiling",
                            "points":  2
                        },
                        {
                            "text":  "speaking/spelling",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210115,
        "question":  "We asked 100 married men... Just between us, what do you wish your wife would do in a more sexy way?",
        "answers":  [
                        {
                            "text":  "dress",
                            "points":  54
                        },
                        {
                            "text":  "dance",
                            "points":  15
                        },
                        {
                            "text":  "strip",
                            "points":  9
                        },
                        {
                            "text":  "clean",
                            "points":  8
                        },
                        {
                            "text":  "cook",
                            "points":  6
                        },
                        {
                            "text":  "whisper",
                            "points":  5
                        },
                        {
                            "text":  "sleep",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210116,
        "question":  "We asked 100 single women... They say love is blind. But before you marry a man, you'd better make sure to look at his what?",
        "answers":  [
                        {
                            "text":  "finances",
                            "points":  47
                        },
                        {
                            "text":  "past/background",
                            "points":  24
                        },
                        {
                            "text":  "mom/family",
                            "points":  12
                        },
                        {
                            "text":  "looks/teeth",
                            "points":  5
                        },
                        {
                            "text":  "house/bathroom",
                            "points":  5
                        },
                        {
                            "text":  "body/hand size",
                            "points":  4
                        },
                        {
                            "text":  "license/id",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210117,
        "question":  "Name something even the laziest man in the world has to do every day.",
        "answers":  [
                        {
                            "text":  "pee/plant corn",
                            "points":  46
                        },
                        {
                            "text":  "eat",
                            "points":  23
                        },
                        {
                            "text":  "shower/wash off",
                            "points":  8
                        },
                        {
                            "text":  "sleep",
                            "points":  7
                        },
                        {
                            "text":  "wake up",
                            "points":  6
                        },
                        {
                            "text":  "shave",
                            "points":  5
                        },
                        {
                            "text":  "put on shoes",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210118,
        "question":  "Name an office supply you'd swallow that might hurt when it comes out the other end.",
        "answers":  [
                        {
                            "text":  "paper clip",
                            "points":  44
                        },
                        {
                            "text":  "staples",
                            "points":  31
                        },
                        {
                            "text":  "tack/pushpin",
                            "points":  12
                        },
                        {
                            "text":  "stapler",
                            "points":  5
                        },
                        {
                            "text":  "pen/pencil",
                            "points":  3
                        },
                        {
                            "text":  "scissors",
                            "points":  2
                        },
                        {
                            "text":  "eraser",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210119,
        "question":  "What did a cavewoman think was sexy about her caveman?",
        "answers":  [
                        {
                            "text":  "buff bod/strong",
                            "points":  35
                        },
                        {
                            "text":  "hair/on body/unibrow",
                            "points":  27
                        },
                        {
                            "text":  "hunted for grub",
                            "points":  19
                        },
                        {
                            "text":  "carried big club",
                            "points":  11
                        },
                        {
                            "text":  "trendy cave clothes",
                            "points":  3
                        },
                        {
                            "text":  "sexy grunts",
                            "points":  2
                        },
                        {
                            "text":  "being brave/macho",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210120,
        "question":  "Name the body part you move the most when you get out on the dance floor.",
        "answers":  [
                        {
                            "text":  "my feet/legs",
                            "points":  33
                        },
                        {
                            "text":  "my twerkin' patootie",
                            "points":  29
                        },
                        {
                            "text":  "my shakira hips",
                            "points":  23
                        },
                        {
                            "text":  "my arms/hands",
                            "points":  7
                        },
                        {
                            "text":  "my back",
                            "points":  3
                        },
                        {
                            "text":  "my dancin' dong",
                            "points":  2
                        },
                        {
                            "text":  "my head/neck",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210121,
        "question":  "We asked 100 married women... Name a way your husband has changed for the worse since you tied the knot.",
        "answers":  [
                        {
                            "text":  "fat tub of lard",
                            "points":  24
                        },
                        {
                            "text":  "lazy slob",
                            "points":  20
                        },
                        {
                            "text":  "total tightwad",
                            "points":  16
                        },
                        {
                            "text":  "no fun/homebody",
                            "points":  15
                        },
                        {
                            "text":  "ignores/works 24-7",
                            "points":  12
                        },
                        {
                            "text":  "cheating man-slut",
                            "points":  6
                        },
                        {
                            "text":  "evil/complains",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  210122,
        "question":  "Some people have a horse face. What other farm animal might a person's face resemble?",
        "answers":  [
                        {
                            "text":  "pig",
                            "points":  66
                        },
                        {
                            "text":  "cow",
                            "points":  16
                        },
                        {
                            "text":  "sheep",
                            "points":  4
                        },
                        {
                            "text":  "chicken",
                            "points":  4
                        },
                        {
                            "text":  "goat",
                            "points":  4
                        },
                        {
                            "text":  "duck",
                            "points":  2
                        },
                        {
                            "text":  "mule/donkey",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210123,
        "question":  "When a grown child moves back home, name something his parents force him to do so he doesn't get too comfortable.",
        "answers":  [
                        {
                            "text":  "pay rent/bills",
                            "points":  39
                        },
                        {
                            "text":  "chores/cook",
                            "points":  29
                        },
                        {
                            "text":  "get a job/work",
                            "points":  18
                        },
                        {
                            "text":  "curfew/bed by 9:00",
                            "points":  5
                        },
                        {
                            "text":  "tiny room/no closet",
                            "points":  3
                        },
                        {
                            "text":  "sleep on cot/sofa",
                            "points":  2
                        },
                        {
                            "text":  "no tappin' booty",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210124,
        "question":  "Name a word that rhymes with \"slinky.\"",
        "answers":  [
                        {
                            "text":  "stinky",
                            "points":  33
                        },
                        {
                            "text":  "kinky",
                            "points":  23
                        },
                        {
                            "text":  "dinky",
                            "points":  21
                        },
                        {
                            "text":  "pinky",
                            "points":  12
                        },
                        {
                            "text":  "binky",
                            "points":  5
                        },
                        {
                            "text":  "winky",
                            "points":  2
                        },
                        {
                            "text":  "blinky",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210125,
        "question":  "Name something the Pillsbury Doughboy likes people to do to his buns.",
        "answers":  [
                        {
                            "text":  "bake/heat 'em",
                            "points":  28
                        },
                        {
                            "text":  "squeeze/pinch 'em",
                            "points":  25
                        },
                        {
                            "text":  "eat/bite 'em",
                            "points":  17
                        },
                        {
                            "text":  "poke 'em",
                            "points":  16
                        },
                        {
                            "text":  "pat/rub 'em",
                            "points":  6
                        },
                        {
                            "text":  "tickle 'em",
                            "points":  4
                        },
                        {
                            "text":  "roll/spread 'em",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210126,
        "question":  "We asked 100 married women... What would you do if you saw your husband flirting with your mother?",
        "answers":  [
                        {
                            "text":  "confront/ream out",
                            "points":  27
                        },
                        {
                            "text":  "laugh",
                            "points":  22
                        },
                        {
                            "text":  "beat him/and mama",
                            "points":  20
                        },
                        {
                            "text":  "get sick/hurl",
                            "points":  11
                        },
                        {
                            "text":  "divorce that man-ho",
                            "points":  8
                        },
                        {
                            "text":  "be in shock/faint",
                            "points":  7
                        },
                        {
                            "text":  "move him/mom's place",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210127,
        "question":  "Name a type of kiss.",
        "answers":  [
                        {
                            "text":  "french kiss",
                            "points":  68
                        },
                        {
                            "text":  "hershey's kiss",
                            "points":  11
                        },
                        {
                            "text":  "first kiss",
                            "points":  7
                        },
                        {
                            "text":  "peck",
                            "points":  5
                        },
                        {
                            "text":  "butterfly kiss",
                            "points":  2
                        },
                        {
                            "text":  "kiss on the cheek",
                            "points":  2
                        },
                        {
                            "text":  "wet kiss",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210128,
        "question":  "Name something elephants do that makes a lot of noise.",
        "answers":  [
                        {
                            "text":  "trumpet/roar/snort",
                            "points":  53
                        },
                        {
                            "text":  "walk",
                            "points":  19
                        },
                        {
                            "text":  "let one rip",
                            "points":  11
                        },
                        {
                            "text":  "fight",
                            "points":  5
                        },
                        {
                            "text":  "run/stampede",
                            "points":  5
                        },
                        {
                            "text":  "stomp foot",
                            "points":  2
                        },
                        {
                            "text":  "drink/spray water",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210129,
        "question":  "Name a reason a woman might cancel the wedding the night before.",
        "answers":  [
                        {
                            "text":  "groom cheated",
                            "points":  51
                        },
                        {
                            "text":  "cold feet",
                            "points":  20
                        },
                        {
                            "text":  "for another man",
                            "points":  11
                        },
                        {
                            "text":  "not feel'g well",
                            "points":  7
                        },
                        {
                            "text":  "not in love",
                            "points":  4
                        },
                        {
                            "text":  "too fat for dress",
                            "points":  2
                        },
                        {
                            "text":  "death/groom died",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210130,
        "question":  "We asked 100 women... Where do you put your hands when you kiss a man passionately?",
        "answers":  [
                        {
                            "text":  "his neck",
                            "points":  50
                        },
                        {
                            "text":  "his shoulders",
                            "points":  11
                        },
                        {
                            "text":  "hair/back of head",
                            "points":  9
                        },
                        {
                            "text":  "his face/cheeks",
                            "points":  8
                        },
                        {
                            "text":  "his waist/belly",
                            "points":  7
                        },
                        {
                            "text":  "his back",
                            "points":  7
                        },
                        {
                            "text":  "his butt cheeks",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  210131,
        "question":  "Name a circus performer who would be a lot more fun to watch if they performed naked.",
        "answers":  [
                        {
                            "text":  "trapeze/acrobat",
                            "points":  45
                        },
                        {
                            "text":  "clown/bozo",
                            "points":  21
                        },
                        {
                            "text":  "animal trainer",
                            "points":  12
                        },
                        {
                            "text":  "tightrope walker",
                            "points":  11
                        },
                        {
                            "text":  "magician",
                            "points":  4
                        },
                        {
                            "text":  "fire-eater/dancer",
                            "points":  2
                        },
                        {
                            "text":  "juggler/of knives",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210132,
        "question":  "If a married man built a secret tunnel under his house, name a place it might lead to.",
        "answers":  [
                        {
                            "text":  "bar",
                            "points":  38
                        },
                        {
                            "text":  "man cave",
                            "points":  30
                        },
                        {
                            "text":  "hussy/2nd wife",
                            "points":  12
                        },
                        {
                            "text":  "strip joint",
                            "points":  8
                        },
                        {
                            "text":  "liquor store",
                            "points":  5
                        },
                        {
                            "text":  "his best bud's",
                            "points":  2
                        },
                        {
                            "text":  "garage",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210133,
        "question":  "Name something a really cheap doctor might use more than once.",
        "answers":  [
                        {
                            "text":  "gloves",
                            "points":  38
                        },
                        {
                            "text":  "tongue depressor",
                            "points":  25
                        },
                        {
                            "text":  "syringe/needle",
                            "points":  18
                        },
                        {
                            "text":  "thermometer/cover",
                            "points":  7
                        },
                        {
                            "text":  "cotton ball/swab",
                            "points":  4
                        },
                        {
                            "text":  "exam table paper",
                            "points":  3
                        },
                        {
                            "text":  "surgical mask",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210134,
        "question":  "What question should you never ask someone else?",
        "answers":  [
                        {
                            "text":  "age/you methuselah?",
                            "points":  36
                        },
                        {
                            "text":  "weight/over 300?",
                            "points":  26
                        },
                        {
                            "text":  "income/you rich?",
                            "points":  18
                        },
                        {
                            "text":  "sex life?",
                            "points":  7
                        },
                        {
                            "text":  "pregnant/due date?",
                            "points":  6
                        },
                        {
                            "text":  "real hair/weave?",
                            "points":  2
                        },
                        {
                            "text":  "what religion?",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210135,
        "question":  "When Mrs. Claus is out of town, name something Santa cuddles up with instead.",
        "answers":  [
                        {
                            "text":  "smokin' hot elf",
                            "points":  36
                        },
                        {
                            "text":  "reindeer/vixen",
                            "points":  26
                        },
                        {
                            "text":  "teddy bear/toys",
                            "points":  12
                        },
                        {
                            "text":  "cookies/food",
                            "points":  9
                        },
                        {
                            "text":  "a pillow/hers",
                            "points":  8
                        },
                        {
                            "text":  "mistress/housewife",
                            "points":  3
                        },
                        {
                            "text":  "book/penthouse",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210136,
        "question":  "We asked 100 married men... You got on one knee to propose. What might you now get on two knees to ask your wife for?",
        "answers":  [
                        {
                            "text":  "forgiveness/mercy",
                            "points":  35
                        },
                        {
                            "text":  "sex/threesome",
                            "points":  34
                        },
                        {
                            "text":  "car/porsche",
                            "points":  12
                        },
                        {
                            "text":  "a computer",
                            "points":  6
                        },
                        {
                            "text":  "money",
                            "points":  5
                        },
                        {
                            "text":  "a divorce",
                            "points":  3
                        },
                        {
                            "text":  "a backrub",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210137,
        "question":  "Name something you can pass.",
        "answers":  [
                        {
                            "text":  "test",
                            "points":  35
                        },
                        {
                            "text":  "ball/football",
                            "points":  21
                        },
                        {
                            "text":  "gas",
                            "points":  20
                        },
                        {
                            "text":  "car/lanes",
                            "points":  9
                        },
                        {
                            "text":  "illness/the herps",
                            "points":  6
                        },
                        {
                            "text":  "food/drink/plate",
                            "points":  4
                        },
                        {
                            "text":  "stone/kidney stone",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210138,
        "question":  "We asked 100 men... Name something you'd hate to be wearing when unexpected company arrives.",
        "answers":  [
                        {
                            "text":  "undies/gold thong",
                            "points":  32
                        },
                        {
                            "text":  "pajamas",
                            "points":  21
                        },
                        {
                            "text":  "nothing",
                            "points":  19
                        },
                        {
                            "text":  "dirty clothes",
                            "points":  13
                        },
                        {
                            "text":  "women's clothes",
                            "points":  5
                        },
                        {
                            "text":  "fat pants/sweats",
                            "points":  4
                        },
                        {
                            "text":  "robe",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210139,
        "question":  "We asked 100 married men... Give me a word starting with \"B\" that describes your wife's behind.",
        "answers":  [
                        {
                            "text":  "beautiful",
                            "points":  31
                        },
                        {
                            "text":  "big",
                            "points":  24
                        },
                        {
                            "text":  "beeyatchin'",
                            "points":  17
                        },
                        {
                            "text":  "booty/licious",
                            "points":  16
                        },
                        {
                            "text":  "broad",
                            "points":  4
                        },
                        {
                            "text":  "bumpy",
                            "points":  3
                        },
                        {
                            "text":  "bloated",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210140,
        "question":  "We asked 100 men... When it comes to a woman's appearance, name something you really don't care about.",
        "answers":  [
                        {
                            "text":  "clothes/shoes",
                            "points":  29
                        },
                        {
                            "text":  "makeup",
                            "points":  26
                        },
                        {
                            "text":  "feet/toenails",
                            "points":  15
                        },
                        {
                            "text":  "face/wonky eye",
                            "points":  9
                        },
                        {
                            "text":  "jewelry",
                            "points":  7
                        },
                        {
                            "text":  "weight/figure",
                            "points":  6
                        },
                        {
                            "text":  "hair",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  210141,
        "question":  "Name something you might do at a baseball game that you wouldn't do at a funeral.",
        "answers":  [
                        {
                            "text":  "cheer/yell",
                            "points":  68
                        },
                        {
                            "text":  "eat/drink beer",
                            "points":  14
                        },
                        {
                            "text":  "boo/cuss",
                            "points":  5
                        },
                        {
                            "text":  "laugh",
                            "points":  3
                        },
                        {
                            "text":  "do the wave",
                            "points":  2
                        },
                        {
                            "text":  "wear ball cap",
                            "points":  2
                        },
                        {
                            "text":  "sing anthem",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210142,
        "question":  "Name something you might take with you when you go to the bathroom.",
        "answers":  [
                        {
                            "text":  "mag/book/50 shades",
                            "points":  48
                        },
                        {
                            "text":  "phone",
                            "points":  25
                        },
                        {
                            "text":  "purse",
                            "points":  9
                        },
                        {
                            "text":  "tissue/tp",
                            "points":  6
                        },
                        {
                            "text":  "towel",
                            "points":  4
                        },
                        {
                            "text":  "tablet/computer",
                            "points":  2
                        },
                        {
                            "text":  "comb/brush",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210143,
        "question":  "We asked 100 men... Fill in the blank: It's important to find a woman who loves you more than her new ________.",
        "answers":  [
                        {
                            "text":  "outfit/heels",
                            "points":  44
                        },
                        {
                            "text":  "car",
                            "points":  30
                        },
                        {
                            "text":  "love wand/vibrator",
                            "points":  7
                        },
                        {
                            "text":  "chihuahua/pet",
                            "points":  6
                        },
                        {
                            "text":  "purse",
                            "points":  5
                        },
                        {
                            "text":  "boobs",
                            "points":  2
                        },
                        {
                            "text":  "best friend",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210144,
        "question":  "Name something a man should turn off if he wants to turn a woman on.",
        "answers":  [
                        {
                            "text":  "tv/sports",
                            "points":  44
                        },
                        {
                            "text":  "his 'tude/ego",
                            "points":  16
                        },
                        {
                            "text":  "his phone",
                            "points":  14
                        },
                        {
                            "text":  "computer/games",
                            "points":  7
                        },
                        {
                            "text":  "his mouth",
                            "points":  7
                        },
                        {
                            "text":  "the lights",
                            "points":  6
                        },
                        {
                            "text":  "his farting butt",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210145,
        "question":  "Name something that has an eye but can't see.",
        "answers":  [
                        {
                            "text":  "needle",
                            "points":  43
                        },
                        {
                            "text":  "storm/hurricane",
                            "points":  22
                        },
                        {
                            "text":  "potato",
                            "points":  17
                        },
                        {
                            "text":  "blind person",
                            "points":  5
                        },
                        {
                            "text":  "bat",
                            "points":  4
                        },
                        {
                            "text":  "target/bull's-eye",
                            "points":  3
                        },
                        {
                            "text":  "a statue",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210146,
        "question":  "We asked 100 men... After a wild party, name something you'd hate to wake up and look at.",
        "answers":  [
                        {
                            "text":  "coyote-ugly chick",
                            "points":  40
                        },
                        {
                            "text":  "trash/mess",
                            "points":  24
                        },
                        {
                            "text":  "myself/mirror",
                            "points":  13
                        },
                        {
                            "text":  "a dead body",
                            "points":  6
                        },
                        {
                            "text":  "vomit",
                            "points":  5
                        },
                        {
                            "text":  "the clock",
                            "points":  4
                        },
                        {
                            "text":  "drunks",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210147,
        "question":  "We asked 100 married women... Name something your husband might ask you to put on him.",
        "answers":  [
                        {
                            "text":  "lotion/sunscreen",
                            "points":  40
                        },
                        {
                            "text":  "a tie",
                            "points":  22
                        },
                        {
                            "text":  "socks",
                            "points":  18
                        },
                        {
                            "text":  "glasses",
                            "points":  7
                        },
                        {
                            "text":  "massage oil",
                            "points":  5
                        },
                        {
                            "text":  "blanket",
                            "points":  2
                        },
                        {
                            "text":  "whipped cream/food",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210148,
        "question":  "Name a place at work that people get romantic and hope no one walks in.",
        "answers":  [
                        {
                            "text":  "closet/supply room",
                            "points":  39
                        },
                        {
                            "text":  "lunch/breakroom",
                            "points":  20
                        },
                        {
                            "text":  "office/the boss's",
                            "points":  12
                        },
                        {
                            "text":  "bathroom",
                            "points":  10
                        },
                        {
                            "text":  "copy room",
                            "points":  8
                        },
                        {
                            "text":  "elevator",
                            "points":  4
                        },
                        {
                            "text":  "stairwell",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210149,
        "question":  "We asked 100 married women... Many women are pear-shaped. What fruit is your husband shaped like?",
        "answers":  [
                        {
                            "text":  "apple",
                            "points":  38
                        },
                        {
                            "text":  "banana",
                            "points":  36
                        },
                        {
                            "text":  "upside-down pear",
                            "points":  9
                        },
                        {
                            "text":  "melon/watermelon",
                            "points":  6
                        },
                        {
                            "text":  "grape",
                            "points":  3
                        },
                        {
                            "text":  "peach",
                            "points":  2
                        },
                        {
                            "text":  "orange",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210150,
        "question":  "If Santa were back in the dating scene, what would he need to update?",
        "answers":  [
                        {
                            "text":  "the red suit",
                            "points":  37
                        },
                        {
                            "text":  "weight/exercise",
                            "points":  21
                        },
                        {
                            "text":  "profile/facebook",
                            "points":  10
                        },
                        {
                            "text":  "his weird beard",
                            "points":  8
                        },
                        {
                            "text":  "his haircut/color",
                            "points":  7
                        },
                        {
                            "text":  "nothing/he's a stud",
                            "points":  7
                        },
                        {
                            "text":  "his ride/sleigh",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  210151,
        "question":  "We asked 100 women... Name something a man needs to be considered a trophy husband.",
        "answers":  [
                        {
                            "text":  "big bucks/cool job",
                            "points":  30
                        },
                        {
                            "text":  "tall, bangin' bod",
                            "points":  28
                        },
                        {
                            "text":  "fine face/hair",
                            "points":  25
                        },
                        {
                            "text":  "youth",
                            "points":  5
                        },
                        {
                            "text":  "personality/humor",
                            "points":  3
                        },
                        {
                            "text":  "loyalty/commitment",
                            "points":  3
                        },
                        {
                            "text":  "cooking skills",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210152,
        "question":  "Fill in the blank: You thought you bought a watchdog, but all he watches is what?",
        "answers":  [
                        {
                            "text":  "food/his bowl",
                            "points":  29
                        },
                        {
                            "text":  "tv/animal planet",
                            "points":  28
                        },
                        {
                            "text":  "me/my hot wife",
                            "points":  24
                        },
                        {
                            "text":  "the cat",
                            "points":  5
                        },
                        {
                            "text":  "other dog/dog butt",
                            "points":  4
                        },
                        {
                            "text":  "his shadow",
                            "points":  3
                        },
                        {
                            "text":  "birds",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210153,
        "question":  "We asked 100 single guys... Tell me something your dad tells you to look for in a woman.",
        "answers":  [
                        {
                            "text":  "humor/personality",
                            "points":  21
                        },
                        {
                            "text":  "hotness",
                            "points":  20
                        },
                        {
                            "text":  "caring/nurtures",
                            "points":  17
                        },
                        {
                            "text":  "loyalty/honesty",
                            "points":  14
                        },
                        {
                            "text":  "cooking skills",
                            "points":  11
                        },
                        {
                            "text":  "smarts",
                            "points":  8
                        },
                        {
                            "text":  "good w/ money",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  210154,
        "question":  "Name a sound that can ruin a romantic dinner.",
        "answers":  [
                        {
                            "text":  "a bowel howl",
                            "points":  71
                        },
                        {
                            "text":  "a burp",
                            "points":  7
                        },
                        {
                            "text":  "crying/baby",
                            "points":  6
                        },
                        {
                            "text":  "a phone ringing",
                            "points":  5
                        },
                        {
                            "text":  "a siren",
                            "points":  2
                        },
                        {
                            "text":  "a boom/bomb",
                            "points":  2
                        },
                        {
                            "text":  "a horn",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210155,
        "question":  "We asked 100 women... Name something about a bodybuilder that's a turn-off.",
        "answers":  [
                        {
                            "text":  "too much muscle",
                            "points":  48
                        },
                        {
                            "text":  "bulging veins",
                            "points":  20
                        },
                        {
                            "text":  "oily skin",
                            "points":  12
                        },
                        {
                            "text":  "no neck",
                            "points":  6
                        },
                        {
                            "text":  "tiny testes",
                            "points":  5
                        },
                        {
                            "text":  "steroid use",
                            "points":  2
                        },
                        {
                            "text":  "his insecurity",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210156,
        "question":  "Name something you might text your boss about because you're too chicken to tell her in person.",
        "answers":  [
                        {
                            "text":  "taking off/sick",
                            "points":  44
                        },
                        {
                            "text":  "i quit - bite me!",
                            "points":  25
                        },
                        {
                            "text":  "i'll be late",
                            "points":  13
                        },
                        {
                            "text":  "i screwed up",
                            "points":  4
                        },
                        {
                            "text":  "i want a raise!",
                            "points":  3
                        },
                        {
                            "text":  "i'm pregnant",
                            "points":  3
                        },
                        {
                            "text":  "you're hot/love you",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210157,
        "question":  "Name something you hope you didn't do on a table while you were drunk.",
        "answers":  [
                        {
                            "text":  "dance",
                            "points":  43
                        },
                        {
                            "text":  "blow chunks",
                            "points":  25
                        },
                        {
                            "text":  "pee/drop a deuce",
                            "points":  8
                        },
                        {
                            "text":  "strip",
                            "points":  6
                        },
                        {
                            "text":  "sleep",
                            "points":  5
                        },
                        {
                            "text":  "slap some salami",
                            "points":  5
                        },
                        {
                            "text":  "spill/my mai tai",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210158,
        "question":  "Name something romantic you feel like doing whenever you hear a Barry White song.",
        "answers":  [
                        {
                            "text":  "dancing",
                            "points":  43
                        },
                        {
                            "text":  "smooch'g/cuddling",
                            "points":  18
                        },
                        {
                            "text":  "petting the hamster",
                            "points":  16
                        },
                        {
                            "text":  "singing/serenading",
                            "points":  11
                        },
                        {
                            "text":  "cooking/eating",
                            "points":  3
                        },
                        {
                            "text":  "drinking wine",
                            "points":  2
                        },
                        {
                            "text":  "taking a bath",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210159,
        "question":  "Name something a divorced man kisses good-bye.",
        "answers":  [
                        {
                            "text":  "his money",
                            "points":  41
                        },
                        {
                            "text":  "wife/from hell",
                            "points":  22
                        },
                        {
                            "text":  "his house",
                            "points":  17
                        },
                        {
                            "text":  "his kids",
                            "points":  6
                        },
                        {
                            "text":  "his dog",
                            "points":  4
                        },
                        {
                            "text":  "wedding ring",
                            "points":  3
                        },
                        {
                            "text":  "home-cooked meals",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210160,
        "question":  "Name something a cheap couple might ask guests to bring to their wedding.",
        "answers":  [
                        {
                            "text":  "booze/champagne",
                            "points":  40
                        },
                        {
                            "text":  "food/cake",
                            "points":  27
                        },
                        {
                            "text":  "cash",
                            "points":  11
                        },
                        {
                            "text":  "flowers/decoration",
                            "points":  7
                        },
                        {
                            "text":  "plates/silverware",
                            "points":  4
                        },
                        {
                            "text":  "chairs",
                            "points":  3
                        },
                        {
                            "text":  "rice to throw",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210161,
        "question":  "Name something Justin Bieber won't have in five years if he doesn't change his ways.",
        "answers":  [
                        {
                            "text":  "career/fans",
                            "points":  40
                        },
                        {
                            "text":  "baller cash",
                            "points":  17
                        },
                        {
                            "text":  "freedom from jail",
                            "points":  16
                        },
                        {
                            "text":  "a pulse/his life",
                            "points":  14
                        },
                        {
                            "text":  "citizenship/visa",
                            "points":  3
                        },
                        {
                            "text":  "driver's license",
                            "points":  3
                        },
                        {
                            "text":  "a babe/love",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210162,
        "question":  "We asked 100 men... Name a wild animal that reminds you of some wild women.",
        "answers":  [
                        {
                            "text":  "cougar",
                            "points":  30
                        },
                        {
                            "text":  "tiger",
                            "points":  27
                        },
                        {
                            "text":  "cheetah",
                            "points":  16
                        },
                        {
                            "text":  "snake",
                            "points":  10
                        },
                        {
                            "text":  "lion",
                            "points":  8
                        },
                        {
                            "text":  "wild horse",
                            "points":  2
                        },
                        {
                            "text":  "badger",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210163,
        "question":  "A 100-year-old man flirts with a 100-year-old woman by saying, \"I like the way you wear your\" what?",
        "answers":  [
                        {
                            "text":  "dentures",
                            "points":  27
                        },
                        {
                            "text":  "duds/support hose",
                            "points":  25
                        },
                        {
                            "text":  "hair/wig",
                            "points":  23
                        },
                        {
                            "text":  "oxygen mask/tube",
                            "points":  9
                        },
                        {
                            "text":  "hearing aid",
                            "points":  7
                        },
                        {
                            "text":  "glasses",
                            "points":  2
                        },
                        {
                            "text":  "bib",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210164,
        "question":  "We asked 100 men... What musical instrument reflects your lovemaking style?",
        "answers":  [
                        {
                            "text":  "guitar/electric",
                            "points":  19
                        },
                        {
                            "text":  "drums",
                            "points":  16
                        },
                        {
                            "text":  "piano/keyboard",
                            "points":  14
                        },
                        {
                            "text":  "trumpet",
                            "points":  13
                        },
                        {
                            "text":  "violin",
                            "points":  13
                        },
                        {
                            "text":  "cello",
                            "points":  11
                        },
                        {
                            "text":  "saxophone",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  210165,
        "question":  "If there were a KFC for cannibals, what part of a person would they order a bucket of?",
        "answers":  [
                        {
                            "text":  "thighs/legs",
                            "points":  44
                        },
                        {
                            "text":  "fingers/hands",
                            "points":  17
                        },
                        {
                            "text":  "breasts",
                            "points":  11
                        },
                        {
                            "text":  "arms",
                            "points":  10
                        },
                        {
                            "text":  "feet/toes",
                            "points":  6
                        },
                        {
                            "text":  "brains",
                            "points":  3
                        },
                        {
                            "text":  "ribs",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210166,
        "question":  "We asked 100 married women... If you could change one part of your husband's body, what would it be?",
        "answers":  [
                        {
                            "text":  "belly/abs",
                            "points":  40
                        },
                        {
                            "text":  "hair/bald head",
                            "points":  25
                        },
                        {
                            "text":  "puny arms",
                            "points":  13
                        },
                        {
                            "text":  "flat/furry/mom butt",
                            "points":  9
                        },
                        {
                            "text":  "nasty/tiny feet",
                            "points":  3
                        },
                        {
                            "text":  "bird legs",
                            "points":  2
                        },
                        {
                            "text":  "ugly face/nose",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210167,
        "question":  "We asked 100 single men... What's the number one reason you're still single?",
        "answers":  [
                        {
                            "text":  "freedom/to date",
                            "points":  34
                        },
                        {
                            "text":  "can't find the one",
                            "points":  22
                        },
                        {
                            "text":  "fear commitment",
                            "points":  12
                        },
                        {
                            "text":  "broke as a joke",
                            "points":  11
                        },
                        {
                            "text":  "busy/no time",
                            "points":  7
                        },
                        {
                            "text":  "chicks are bonkers",
                            "points":  5
                        },
                        {
                            "text":  "i'm sooo shy",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210168,
        "question":  "We asked 100 married men... We won't tell your wife, but what movie monster does your mother-in-law remind you of?",
        "answers":  [
                        {
                            "text":  "frankenstein",
                            "points":  23
                        },
                        {
                            "text":  "godzilla",
                            "points":  19
                        },
                        {
                            "text":  "hulk",
                            "points":  13
                        },
                        {
                            "text":  "king kong",
                            "points":  13
                        },
                        {
                            "text":  "dracula",
                            "points":  11
                        },
                        {
                            "text":  "a zombie",
                            "points":  9
                        },
                        {
                            "text":  "a witch",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  210169,
        "question":  "When they say \"A good one is hard to find,\" they mean a good what?",
        "answers":  [
                        {
                            "text":  "man/woman",
                            "points":  78
                        },
                        {
                            "text":  "politician",
                            "points":  4
                        },
                        {
                            "text":  "friend",
                            "points":  3
                        },
                        {
                            "text":  "job",
                            "points":  2
                        },
                        {
                            "text":  "doctor/dentist",
                            "points":  2
                        },
                        {
                            "text":  "cantaloupe/food",
                            "points":  2
                        },
                        {
                            "text":  "mechanic",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210170,
        "question":  "Name something you could mention to a cannibal that would stop him from eating you.",
        "answers":  [
                        {
                            "text":  "i'm sick/jock itch",
                            "points":  69
                        },
                        {
                            "text":  "fatty/cholesterol",
                            "points":  7
                        },
                        {
                            "text":  "i'm tough",
                            "points":  5
                        },
                        {
                            "text":  "i taste bad",
                            "points":  3
                        },
                        {
                            "text":  "i'm skinny/no meat",
                            "points":  3
                        },
                        {
                            "text":  "i'm poisonous",
                            "points":  3
                        },
                        {
                            "text":  "that guy's tastier!",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210171,
        "question":  "Name something on his desk that a bored office worker might try to shove up his nose.",
        "answers":  [
                        {
                            "text":  "pen/pencil",
                            "points":  64
                        },
                        {
                            "text":  "paper clip",
                            "points":  14
                        },
                        {
                            "text":  "eraser",
                            "points":  7
                        },
                        {
                            "text":  "finger",
                            "points":  2
                        },
                        {
                            "text":  "letter opener",
                            "points":  2
                        },
                        {
                            "text":  "kleenex",
                            "points":  2
                        },
                        {
                            "text":  "piece of paper",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210172,
        "question":  "Name someone you tip who would be very upset if you shoved it down their pants like you do a stripper.",
        "answers":  [
                        {
                            "text":  "waiter/waitress",
                            "points":  63
                        },
                        {
                            "text":  "hairdresser/barber",
                            "points":  12
                        },
                        {
                            "text":  "valet",
                            "points":  6
                        },
                        {
                            "text":  "mail person",
                            "points":  4
                        },
                        {
                            "text":  "cabbie",
                            "points":  3
                        },
                        {
                            "text":  "pizza guy",
                            "points":  3
                        },
                        {
                            "text":  "doorman",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210173,
        "question":  "Name something you'd be surprised the lifeguard did while giving you mouth-to-mouth.",
        "answers":  [
                        {
                            "text":  "kissed/tongued me",
                            "points":  60
                        },
                        {
                            "text":  "copped a feel",
                            "points":  12
                        },
                        {
                            "text":  "burped",
                            "points":  7
                        },
                        {
                            "text":  "laughed/smiled",
                            "points":  4
                        },
                        {
                            "text":  "sneezed",
                            "points":  4
                        },
                        {
                            "text":  "chewed/spit gum",
                            "points":  4
                        },
                        {
                            "text":  "fainted",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210174,
        "question":  "Name something bad about a guy that doesn't show up in a photo.",
        "answers":  [
                        {
                            "text":  "personality/ego",
                            "points":  47
                        },
                        {
                            "text":  "reeks/bad breath",
                            "points":  15
                        },
                        {
                            "text":  "character/cheats",
                            "points":  9
                        },
                        {
                            "text":  "sucks blood/vampire",
                            "points":  8
                        },
                        {
                            "text":  "fat/skinny",
                            "points":  7
                        },
                        {
                            "text":  "facial flaw/teeth",
                            "points":  4
                        },
                        {
                            "text":  "he's a ghost",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210175,
        "question":  "Name a reason your bottom might be wiggling.",
        "answers":  [
                        {
                            "text":  "dancing/to hanson",
                            "points":  39
                        },
                        {
                            "text":  "i'm a lard butt",
                            "points":  29
                        },
                        {
                            "text":  "i'm walk'g/running",
                            "points":  8
                        },
                        {
                            "text":  "itchy/got 'rhoids",
                            "points":  7
                        },
                        {
                            "text":  "horny/gettin' some",
                            "points":  5
                        },
                        {
                            "text":  "gotta pee/the trots",
                            "points":  3
                        },
                        {
                            "text":  "bugs/worms in butt",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210176,
        "question":  "Name a word that rhymes with \"tweeter.\"",
        "answers":  [
                        {
                            "text":  "sweeter",
                            "points":  37
                        },
                        {
                            "text":  "peter",
                            "points":  13
                        },
                        {
                            "text":  "beater",
                            "points":  12
                        },
                        {
                            "text":  "skeeter",
                            "points":  11
                        },
                        {
                            "text":  "heater",
                            "points":  8
                        },
                        {
                            "text":  "meter",
                            "points":  7
                        },
                        {
                            "text":  "cheater",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  210177,
        "question":  "Name something that's measured by the cup.",
        "answers":  [
                        {
                            "text":  "flour",
                            "points":  31
                        },
                        {
                            "text":  "sugar",
                            "points":  26
                        },
                        {
                            "text":  "bra/dairy pillows",
                            "points":  14
                        },
                        {
                            "text":  "milk",
                            "points":  9
                        },
                        {
                            "text":  "water",
                            "points":  8
                        },
                        {
                            "text":  "coffee",
                            "points":  3
                        },
                        {
                            "text":  "oatmeal",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210178,
        "question":  "Before a date, name something a guy who works in a deli might shove down his pants.",
        "answers":  [
                        {
                            "text":  "salami/meat",
                            "points":  74
                        },
                        {
                            "text":  "money/wallet",
                            "points":  5
                        },
                        {
                            "text":  "napkins",
                            "points":  4
                        },
                        {
                            "text":  "bread/hard roll",
                            "points":  3
                        },
                        {
                            "text":  "booze/cheap wine",
                            "points":  2
                        },
                        {
                            "text":  "his shirttail",
                            "points":  2
                        },
                        {
                            "text":  "condom",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210179,
        "question":  "Name something you shouldn't be thinking about during a church sermon.",
        "answers":  [
                        {
                            "text":  "sex/with hot pastor",
                            "points":  63
                        },
                        {
                            "text":  "food/pizza",
                            "points":  9
                        },
                        {
                            "text":  "sports/football",
                            "points":  8
                        },
                        {
                            "text":  "drinking/bar",
                            "points":  4
                        },
                        {
                            "text":  "gettin' outta there",
                            "points":  4
                        },
                        {
                            "text":  "work",
                            "points":  2
                        },
                        {
                            "text":  "dozing off",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210180,
        "question":  "Fill in the blank: Instead of \"I do,\" a bride would hate to hear the groom say \"I ________.\"",
        "answers":  [
                        {
                            "text":  "don't/won't",
                            "points":  59
                        },
                        {
                            "text":  "can't",
                            "points":  13
                        },
                        {
                            "text":  "guess/think so",
                            "points":  9
                        },
                        {
                            "text":  "might",
                            "points":  4
                        },
                        {
                            "text":  "am outta here",
                            "points":  3
                        },
                        {
                            "text":  "need to think",
                            "points":  2
                        },
                        {
                            "text":  "am already married",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210181,
        "question":  "Name something most women don't do on a first date.",
        "answers":  [
                        {
                            "text":  "pet the peacock",
                            "points":  58
                        },
                        {
                            "text":  "swap spit/kiss",
                            "points":  20
                        },
                        {
                            "text":  "pay",
                            "points":  4
                        },
                        {
                            "text":  "get married",
                            "points":  3
                        },
                        {
                            "text":  "eat",
                            "points":  3
                        },
                        {
                            "text":  "fart/contest",
                            "points":  2
                        },
                        {
                            "text":  "drink/get sloshed",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210182,
        "question":  "Name the worst thing to not show up for.",
        "answers":  [
                        {
                            "text":  "wedding",
                            "points":  57
                        },
                        {
                            "text":  "funeral/your own",
                            "points":  16
                        },
                        {
                            "text":  "job/interview",
                            "points":  5
                        },
                        {
                            "text":  "surprise party",
                            "points":  4
                        },
                        {
                            "text":  "doctor/procedure",
                            "points":  4
                        },
                        {
                            "text":  "court",
                            "points":  3
                        },
                        {
                            "text":  "audit",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210183,
        "question":  "Name something a wife has that might make her husband afraid of her.",
        "answers":  [
                        {
                            "text":  "gun/weapon",
                            "points":  50
                        },
                        {
                            "text":  "bad temper",
                            "points":  17
                        },
                        {
                            "text":  "money/credit card",
                            "points":  14
                        },
                        {
                            "text":  "hulk muscles",
                            "points":  3
                        },
                        {
                            "text":  "super glue",
                            "points":  3
                        },
                        {
                            "text":  "a lawyer",
                            "points":  3
                        },
                        {
                            "text":  "hairy legs",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210184,
        "question":  "Name something about Abraham Lincoln that in his day made Abe a hot babe.",
        "answers":  [
                        {
                            "text":  "chin strap beard",
                            "points":  49
                        },
                        {
                            "text":  "his height",
                            "points":  27
                        },
                        {
                            "text":  "2 words: top hat",
                            "points":  5
                        },
                        {
                            "text":  "president/power",
                            "points":  4
                        },
                        {
                            "text":  "his brain",
                            "points":  3
                        },
                        {
                            "text":  "his trendy hair",
                            "points":  2
                        },
                        {
                            "text":  "his deep eyes",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210185,
        "question":  "Name a place where you'd be embarrassed to burp out loud, or at least you should be.",
        "answers":  [
                        {
                            "text":  "church/synagogue",
                            "points":  48
                        },
                        {
                            "text":  "restaurant",
                            "points":  21
                        },
                        {
                            "text":  "work/meeting",
                            "points":  8
                        },
                        {
                            "text":  "wedding",
                            "points":  5
                        },
                        {
                            "text":  "movie/theater",
                            "points":  4
                        },
                        {
                            "text":  "funeral",
                            "points":  3
                        },
                        {
                            "text":  "library",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210186,
        "question":  "Name something you might do with a dead pet that you wouldn't do with a dead relative.",
        "answers":  [
                        {
                            "text":  "bury/in my yard",
                            "points":  47
                        },
                        {
                            "text":  "stuff it",
                            "points":  25
                        },
                        {
                            "text":  "flush it",
                            "points":  7
                        },
                        {
                            "text":  "garbage/dump",
                            "points":  5
                        },
                        {
                            "text":  "cry/mourn",
                            "points":  4
                        },
                        {
                            "text":  "leave in woods",
                            "points":  2
                        },
                        {
                            "text":  "pet/cuddle",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210187,
        "question":  "Name something a ventriloquist might tell his wife not to do in front of his dummy.",
        "answers":  [
                        {
                            "text":  "undress",
                            "points":  46
                        },
                        {
                            "text":  "talk/yell/cuss",
                            "points":  22
                        },
                        {
                            "text":  "laugh at it",
                            "points":  9
                        },
                        {
                            "text":  "kiss/boink",
                            "points":  9
                        },
                        {
                            "text":  "dance",
                            "points":  2
                        },
                        {
                            "text":  "light match/smoke",
                            "points":  2
                        },
                        {
                            "text":  "chop wood",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210188,
        "question":  "We asked 100 married men... Tell me one word you wouldn't want to see your wife search for on Google.",
        "answers":  [
                        {
                            "text":  "divorce",
                            "points":  42
                        },
                        {
                            "text":  "pregnant",
                            "points":  11
                        },
                        {
                            "text":  "dating",
                            "points":  11
                        },
                        {
                            "text":  "std",
                            "points":  10
                        },
                        {
                            "text":  "hitman",
                            "points":  8
                        },
                        {
                            "text":  "boobs",
                            "points":  5
                        },
                        {
                            "text":  "hunks",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  210189,
        "question":  "Name a secret the best man might know about the groom that the bride doesn't.",
        "answers":  [
                        {
                            "text":  "he cheats",
                            "points":  38
                        },
                        {
                            "text":  "# of ex-lovers",
                            "points":  31
                        },
                        {
                            "text":  "bachelor party",
                            "points":  10
                        },
                        {
                            "text":  "bi/wild for weenie",
                            "points":  5
                        },
                        {
                            "text":  "he snores",
                            "points":  3
                        },
                        {
                            "text":  "has kids",
                            "points":  3
                        },
                        {
                            "text":  "has std/crabfest",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210190,
        "question":  "We asked 100 men... Name something you might like about living life as a woman.",
        "answers":  [
                        {
                            "text":  "boobs/to play with",
                            "points":  38
                        },
                        {
                            "text":  "men paying for me",
                            "points":  25
                        },
                        {
                            "text":  "men wanting me",
                            "points":  9
                        },
                        {
                            "text":  "being manipulative",
                            "points":  7
                        },
                        {
                            "text":  "get more sex",
                            "points":  5
                        },
                        {
                            "text":  "clothes/no tie",
                            "points":  5
                        },
                        {
                            "text":  "giving birth",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210191,
        "question":  "Name something a mama's boy likes to do with his mother.",
        "answers":  [
                        {
                            "text":  "shop",
                            "points":  35
                        },
                        {
                            "text":  "eat/dine out",
                            "points":  16
                        },
                        {
                            "text":  "cook/bake",
                            "points":  14
                        },
                        {
                            "text":  "kiss/snuggle",
                            "points":  10
                        },
                        {
                            "text":  "talk/on phone",
                            "points":  7
                        },
                        {
                            "text":  "watch tv/\"psycho\"",
                            "points":  5
                        },
                        {
                            "text":  "live/be with her",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  210192,
        "question":  "We asked 100 men... Name a reason other men envy you.",
        "answers":  [
                        {
                            "text":  "i'm a brainiac",
                            "points":  27
                        },
                        {
                            "text":  "best. mate. ever.",
                            "points":  17
                        },
                        {
                            "text":  "humor/personality",
                            "points":  12
                        },
                        {
                            "text":  "got $ like trump",
                            "points":  12
                        },
                        {
                            "text":  "tall/bod of a god",
                            "points":  12
                        },
                        {
                            "text":  "face like denzel",
                            "points":  7
                        },
                        {
                            "text":  "my golf game",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  210193,
        "question":  "We asked 100 married men... Name a specific musical instrument that sounds like your wife in the bedroom.",
        "answers":  [
                        {
                            "text":  "tuba",
                            "points":  25
                        },
                        {
                            "text":  "violin/fiddle",
                            "points":  17
                        },
                        {
                            "text":  "trumpet",
                            "points":  16
                        },
                        {
                            "text":  "trombone",
                            "points":  15
                        },
                        {
                            "text":  "flute",
                            "points":  11
                        },
                        {
                            "text":  "drums/bongos",
                            "points":  5
                        },
                        {
                            "text":  "piano",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210194,
        "question":  "Name something a teenage boy might practice his kissing technique on.",
        "answers":  [
                        {
                            "text":  "mirror",
                            "points":  24
                        },
                        {
                            "text":  "doll/blow-up",
                            "points":  22
                        },
                        {
                            "text":  "hand/arm",
                            "points":  19
                        },
                        {
                            "text":  "pillow",
                            "points":  13
                        },
                        {
                            "text":  "fruit/kumquat",
                            "points":  7
                        },
                        {
                            "text":  "his dog",
                            "points":  4
                        },
                        {
                            "text":  "teenage girl",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210195,
        "question":  "We asked 100 husbands... Name something you wish you had the nerve to tell your wife.",
        "answers":  [
                        {
                            "text":  "stop spending $",
                            "points":  18
                        },
                        {
                            "text":  "yes, you're fat",
                            "points":  17
                        },
                        {
                            "text":  "more sex/spank me",
                            "points":  14
                        },
                        {
                            "text":  "get lost/bye",
                            "points":  14
                        },
                        {
                            "text":  "get a job",
                            "points":  13
                        },
                        {
                            "text":  "ugly/ho-ish clothes",
                            "points":  11
                        },
                        {
                            "text":  "driving sucks",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  210196,
        "question":  "We asked 100 women... Give me a word that describes the way you like your candy and your man.",
        "answers":  [
                        {
                            "text":  "sweet",
                            "points":  59
                        },
                        {
                            "text":  "hard",
                            "points":  12
                        },
                        {
                            "text":  "chocolate",
                            "points":  10
                        },
                        {
                            "text":  "soft",
                            "points":  4
                        },
                        {
                            "text":  "smooth",
                            "points":  2
                        },
                        {
                            "text":  "tasty",
                            "points":  2
                        },
                        {
                            "text":  "nutty",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210197,
        "question":  "Besides his home, name a place a man might completely remove his pants.",
        "answers":  [
                        {
                            "text":  "doctor/hospital",
                            "points":  47
                        },
                        {
                            "text":  "gym locker room",
                            "points":  19
                        },
                        {
                            "text":  "dressing room",
                            "points":  7
                        },
                        {
                            "text":  "motel/hotel",
                            "points":  6
                        },
                        {
                            "text":  "swimming pool",
                            "points":  6
                        },
                        {
                            "text":  "beach/ocean",
                            "points":  3
                        },
                        {
                            "text":  "girlfriend's home",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210198,
        "question":  "Name something a camel has that a person could also have.",
        "answers":  [
                        {
                            "text":  "a hump",
                            "points":  46
                        },
                        {
                            "text":  "hot tongue/mouth",
                            "points":  17
                        },
                        {
                            "text":  "toe",
                            "points":  7
                        },
                        {
                            "text":  "water retention",
                            "points":  7
                        },
                        {
                            "text":  "sexy eyes/lashes",
                            "points":  7
                        },
                        {
                            "text":  "legs/knobby knees",
                            "points":  4
                        },
                        {
                            "text":  "hair",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210199,
        "question":  "We asked 100 women... If you ran your fingers through a man's hair, what would you hate to find in it?",
        "answers":  [
                        {
                            "text":  "lice/bugs",
                            "points":  45
                        },
                        {
                            "text":  "dandruff",
                            "points":  13
                        },
                        {
                            "text":  "dirt",
                            "points":  13
                        },
                        {
                            "text":  "oil/grease",
                            "points":  9
                        },
                        {
                            "text":  "gel",
                            "points":  6
                        },
                        {
                            "text":  "extensions",
                            "points":  3
                        },
                        {
                            "text":  "food",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210200,
        "question":  "Name a kind of place where people pour their heart out to a complete stranger.",
        "answers":  [
                        {
                            "text":  "bar",
                            "points":  42
                        },
                        {
                            "text":  "doctor/therapist",
                            "points":  17
                        },
                        {
                            "text":  "church/confession",
                            "points":  16
                        },
                        {
                            "text":  "aa meeting",
                            "points":  7
                        },
                        {
                            "text":  "beauty shop",
                            "points":  3
                        },
                        {
                            "text":  "internet/date site",
                            "points":  3
                        },
                        {
                            "text":  "party",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210201,
        "question":  "We asked 100 women... Fill in the blank: My man is a love what?",
        "answers":  [
                        {
                            "text":  "machine",
                            "points":  42
                        },
                        {
                            "text":  "bug",
                            "points":  14
                        },
                        {
                            "text":  "muffin",
                            "points":  10
                        },
                        {
                            "text":  "addict",
                            "points":  10
                        },
                        {
                            "text":  "hound",
                            "points":  8
                        },
                        {
                            "text":  "magnet",
                            "points":  4
                        },
                        {
                            "text":  "boat",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210202,
        "question":  "Name a place you go where loud people can ruin your enjoyment.",
        "answers":  [
                        {
                            "text":  "movies/theater",
                            "points":  33
                        },
                        {
                            "text":  "eatery/waffle house",
                            "points":  23
                        },
                        {
                            "text":  "library",
                            "points":  11
                        },
                        {
                            "text":  "bar/club",
                            "points":  10
                        },
                        {
                            "text":  "sporting event",
                            "points":  6
                        },
                        {
                            "text":  "concert/susan boyle",
                            "points":  5
                        },
                        {
                            "text":  "park",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210203,
        "question":  "Name a complaint a man might have about his car that he might also have about his wife.",
        "answers":  [
                        {
                            "text":  "won't start/slow",
                            "points":  30
                        },
                        {
                            "text":  "old/lots of miles",
                            "points":  18
                        },
                        {
                            "text":  "loud/noisy",
                            "points":  17
                        },
                        {
                            "text":  "cost/high maint.",
                            "points":  11
                        },
                        {
                            "text":  "cold",
                            "points":  7
                        },
                        {
                            "text":  "dirty/smells",
                            "points":  4
                        },
                        {
                            "text":  "hard on the eyes",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210204,
        "question":  "We asked 100 women... When you see a man and it's love at first sight, what might he have that ruins it?",
        "answers":  [
                        {
                            "text":  "bad/gopher teeth",
                            "points":  27
                        },
                        {
                            "text":  "dragon breath/b.o.",
                            "points":  21
                        },
                        {
                            "text":  "woman/ring",
                            "points":  18
                        },
                        {
                            "text":  "ego/bad personality",
                            "points":  10
                        },
                        {
                            "text":  "a temper",
                            "points":  9
                        },
                        {
                            "text":  "bad manners",
                            "points":  3
                        },
                        {
                            "text":  "a cigarette",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210205,
        "question":  "In the middle of his wedding vows, a man might feel like he's going to what?",
        "answers":  [
                        {
                            "text":  "faint",
                            "points":  46
                        },
                        {
                            "text":  "blow chunks",
                            "points":  18
                        },
                        {
                            "text":  "forget them/mess up",
                            "points":  7
                        },
                        {
                            "text":  "die",
                            "points":  6
                        },
                        {
                            "text":  "run/get cold feet",
                            "points":  5
                        },
                        {
                            "text":  "cry",
                            "points":  4
                        },
                        {
                            "text":  "jail/for life",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210206,
        "question":  "A wife calls her mom when she's having marital problems. Who does her husband call?",
        "answers":  [
                        {
                            "text":  "his buddy",
                            "points":  45
                        },
                        {
                            "text":  "no one",
                            "points":  14
                        },
                        {
                            "text":  "his mom",
                            "points":  8
                        },
                        {
                            "text":  "his dad",
                            "points":  6
                        },
                        {
                            "text":  "his lover",
                            "points":  6
                        },
                        {
                            "text":  "a lawyer",
                            "points":  6
                        },
                        {
                            "text":  "a cheap hooker",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  210207,
        "question":  "There was a wild party last night at the nursing home and everybody got what?",
        "answers":  [
                        {
                            "text":  "drunk",
                            "points":  45
                        },
                        {
                            "text":  "tired/sleepy",
                            "points":  12
                        },
                        {
                            "text":  "lucky/with mildred",
                            "points":  9
                        },
                        {
                            "text":  "naked",
                            "points":  8
                        },
                        {
                            "text":  "meds/drugged",
                            "points":  6
                        },
                        {
                            "text":  "crazy/loud",
                            "points":  6
                        },
                        {
                            "text":  "hurt",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210208,
        "question":  "Name something an airline pilot might turn on after the plane takes off.",
        "answers":  [
                        {
                            "text":  "lights/signs",
                            "points":  26
                        },
                        {
                            "text":  "autopilot",
                            "points":  22
                        },
                        {
                            "text":  "music/kenny g.",
                            "points":  19
                        },
                        {
                            "text":  "air conditioning",
                            "points":  8
                        },
                        {
                            "text":  "himself/kinky crew",
                            "points":  6
                        },
                        {
                            "text":  "speaker/pa system",
                            "points":  5
                        },
                        {
                            "text":  "movie/safety video",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210209,
        "question":  "Give me another way people say the word \"jail.\"",
        "answers":  [
                        {
                            "text":  "slammer",
                            "points":  25
                        },
                        {
                            "text":  "prison",
                            "points":  24
                        },
                        {
                            "text":  "pokey",
                            "points":  16
                        },
                        {
                            "text":  "big house",
                            "points":  9
                        },
                        {
                            "text":  "the joint",
                            "points":  7
                        },
                        {
                            "text":  "clink",
                            "points":  5
                        },
                        {
                            "text":  "pen",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210210,
        "question":  "Name a reason you might put your finger in your mouth.",
        "answers":  [
                        {
                            "text":  "pick teeth",
                            "points":  23
                        },
                        {
                            "text":  "lick/taste",
                            "points":  22
                        },
                        {
                            "text":  "bite nails",
                            "points":  20
                        },
                        {
                            "text":  "whistle",
                            "points":  14
                        },
                        {
                            "text":  "suck cut finger",
                            "points":  4
                        },
                        {
                            "text":  "think",
                            "points":  4
                        },
                        {
                            "text":  "floss",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210211,
        "question":  "We asked 100 married women... Name something you give your husband when he's in a grumpy mood.",
        "answers":  [
                        {
                            "text":  "food/cheez whiz",
                            "points":  23
                        },
                        {
                            "text":  "the notorious v.a.g.",
                            "points":  20
                        },
                        {
                            "text":  "massage",
                            "points":  14
                        },
                        {
                            "text":  "his space",
                            "points":  12
                        },
                        {
                            "text":  "tv remote",
                            "points":  8
                        },
                        {
                            "text":  "a drink/beer",
                            "points":  7
                        },
                        {
                            "text":  "hug/kiss",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  210212,
        "question":  "We asked 100 men... Name something you hope a woman doesn't do the first time you make love to her.",
        "answers":  [
                        {
                            "text":  "fart",
                            "points":  20
                        },
                        {
                            "text":  "fall asleep",
                            "points":  15
                        },
                        {
                            "text":  "scream/moan",
                            "points":  15
                        },
                        {
                            "text":  "talk/complain",
                            "points":  14
                        },
                        {
                            "text":  "laugh",
                            "points":  13
                        },
                        {
                            "text":  "cry",
                            "points":  10
                        },
                        {
                            "text":  "say wrong name",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210213,
        "question":  "Fill in the blank: A man might warn a woman that he's got ________.",
        "answers":  [
                        {
                            "text":  "disease/chlamydia",
                            "points":  48
                        },
                        {
                            "text":  "a wife/girlfriend",
                            "points":  9
                        },
                        {
                            "text":  "kids/from 7 women",
                            "points":  9
                        },
                        {
                            "text":  "a temper",
                            "points":  8
                        },
                        {
                            "text":  "to fart...badly",
                            "points":  6
                        },
                        {
                            "text":  "death breath",
                            "points":  5
                        },
                        {
                            "text":  "deranged/clingy mom",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210214,
        "question":  "Name something people blow into.",
        "answers":  [
                        {
                            "text":  "balloon",
                            "points":  45
                        },
                        {
                            "text":  "horn/instrument",
                            "points":  17
                        },
                        {
                            "text":  "breathalyzer",
                            "points":  10
                        },
                        {
                            "text":  "straw",
                            "points":  5
                        },
                        {
                            "text":  "tissue/hanky",
                            "points":  5
                        },
                        {
                            "text":  "whistle",
                            "points":  4
                        },
                        {
                            "text":  "bag/paper bag",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210215,
        "question":  "For you, what's the worst kind of music to make love to?",
        "answers":  [
                        {
                            "text":  "rap/hip-hop",
                            "points":  40
                        },
                        {
                            "text":  "country",
                            "points":  19
                        },
                        {
                            "text":  "heavy/death metal",
                            "points":  9
                        },
                        {
                            "text":  "rock",
                            "points":  7
                        },
                        {
                            "text":  "jazz",
                            "points":  6
                        },
                        {
                            "text":  "opera",
                            "points":  5
                        },
                        {
                            "text":  "pop/gangnam style",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210216,
        "question":  "Name a celebrity you've gotten sick of hearing about.",
        "answers":  [
                        {
                            "text":  "justin bieber",
                            "points":  32
                        },
                        {
                            "text":  "kim kardashian",
                            "points":  22
                        },
                        {
                            "text":  "miley cyrus",
                            "points":  20
                        },
                        {
                            "text":  "lindsay lohan",
                            "points":  5
                        },
                        {
                            "text":  "paris hilton",
                            "points":  4
                        },
                        {
                            "text":  "tom cruise",
                            "points":  3
                        },
                        {
                            "text":  "beyonce",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210217,
        "question":  "In her will, name a place a woman might request to have her ashes scattered to make sure her husband visits.",
        "answers":  [
                        {
                            "text":  "bathroom/home",
                            "points":  21
                        },
                        {
                            "text":  "local bar",
                            "points":  20
                        },
                        {
                            "text":  "golf course",
                            "points":  13
                        },
                        {
                            "text":  "beach/ocean",
                            "points":  13
                        },
                        {
                            "text":  "ballpark/stadium",
                            "points":  10
                        },
                        {
                            "text":  "fishing hole/lake",
                            "points":  8
                        },
                        {
                            "text":  "strip joint",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210218,
        "question":  "Name a mean way to break up with someone.",
        "answers":  [
                        {
                            "text":  "text/\"adios loser\"",
                            "points":  59
                        },
                        {
                            "text":  "e-mail",
                            "points":  6
                        },
                        {
                            "text":  "soc. media/#itsover",
                            "points":  6
                        },
                        {
                            "text":  "ignore/don't call",
                            "points":  5
                        },
                        {
                            "text":  "assault/throw pie",
                            "points":  4
                        },
                        {
                            "text":  "someone else do it",
                            "points":  4
                        },
                        {
                            "text":  "yell insults",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210219,
        "question":  "Name something people eat that comes in the shape of a ball.",
        "answers":  [
                        {
                            "text":  "orange",
                            "points":  46
                        },
                        {
                            "text":  "meatball",
                            "points":  14
                        },
                        {
                            "text":  "melon",
                            "points":  13
                        },
                        {
                            "text":  "apple",
                            "points":  6
                        },
                        {
                            "text":  "cheese",
                            "points":  5
                        },
                        {
                            "text":  "rice balls",
                            "points":  2
                        },
                        {
                            "text":  "matzo balls",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210220,
        "question":  "Name something that even when it's bad, it's good.",
        "answers":  [
                        {
                            "text":  "food/dessert",
                            "points":  42
                        },
                        {
                            "text":  "nookie/3-some",
                            "points":  16
                        },
                        {
                            "text":  "movie/tv show",
                            "points":  10
                        },
                        {
                            "text":  "booze",
                            "points":  7
                        },
                        {
                            "text":  "music/the osmonds",
                            "points":  6
                        },
                        {
                            "text":  "coffee",
                            "points":  5
                        },
                        {
                            "text":  "joke/comedy",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210221,
        "question":  "Name something a party guest might do that would get him kicked out.",
        "answers":  [
                        {
                            "text":  "get drunk",
                            "points":  41
                        },
                        {
                            "text":  "start a fight",
                            "points":  15
                        },
                        {
                            "text":  "be lewd/insult host",
                            "points":  11
                        },
                        {
                            "text":  "break something",
                            "points":  8
                        },
                        {
                            "text":  "blow chunks",
                            "points":  6
                        },
                        {
                            "text":  "get too loud",
                            "points":  4
                        },
                        {
                            "text":  "pee/in houseplant",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210222,
        "question":  "We asked 100 men... Name the sexiest job a woman can have.",
        "answers":  [
                        {
                            "text":  "stripper/dancer",
                            "points":  40
                        },
                        {
                            "text":  "nurse",
                            "points":  17
                        },
                        {
                            "text":  "model",
                            "points":  11
                        },
                        {
                            "text":  "librarian",
                            "points":  8
                        },
                        {
                            "text":  "waitress/hooters",
                            "points":  6
                        },
                        {
                            "text":  "c.e.o.",
                            "points":  3
                        },
                        {
                            "text":  "wife",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210223,
        "question":  "Name someone who is paid to remove something.",
        "answers":  [
                        {
                            "text":  "trash collector",
                            "points":  33
                        },
                        {
                            "text":  "dentist/doctor",
                            "points":  27
                        },
                        {
                            "text":  "exterminator",
                            "points":  13
                        },
                        {
                            "text":  "animal control",
                            "points":  4
                        },
                        {
                            "text":  "mover",
                            "points":  4
                        },
                        {
                            "text":  "tree/bush remover",
                            "points":  4
                        },
                        {
                            "text":  "stripper",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210224,
        "question":  "Name something you hope a man doesn't do when you slow dance with him.",
        "answers":  [
                        {
                            "text":  "fondle/my booty",
                            "points":  24
                        },
                        {
                            "text":  "step on my feet",
                            "points":  23
                        },
                        {
                            "text":  "\"pitch a tent\"",
                            "points":  12
                        },
                        {
                            "text":  "fart/to the music",
                            "points":  10
                        },
                        {
                            "text":  "grind/dry hump",
                            "points":  8
                        },
                        {
                            "text":  "sneeze/cough",
                            "points":  6
                        },
                        {
                            "text":  "kiss/slip tongue",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  210225,
        "question":  "If a man died while cheating on his wife, name something his wife might do with his ashes.",
        "answers":  [
                        {
                            "text":  "flush 'em",
                            "points":  39
                        },
                        {
                            "text":  "put in trash",
                            "points":  21
                        },
                        {
                            "text":  "give/feed to his ho",
                            "points":  9
                        },
                        {
                            "text":  "pee on 'em",
                            "points":  6
                        },
                        {
                            "text":  "burn 'em again",
                            "points":  5
                        },
                        {
                            "text":  "not claim them",
                            "points":  4
                        },
                        {
                            "text":  "bury/potting soil",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210226,
        "question":  "Name something women wear that was obviously designed by a man because it's uncomfortable but sexy.",
        "answers":  [
                        {
                            "text":  "bra",
                            "points":  38
                        },
                        {
                            "text":  "heels/go-go boots",
                            "points":  10
                        },
                        {
                            "text":  "pantyhose/nylons",
                            "points":  10
                        },
                        {
                            "text":  "thong/panties",
                            "points":  9
                        },
                        {
                            "text":  "bikini",
                            "points":  7
                        },
                        {
                            "text":  "jeans/pants",
                            "points":  7
                        },
                        {
                            "text":  "corset",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  210227,
        "question":  "Name something a wife gets tired of having to ask her husband for.",
        "answers":  [
                        {
                            "text":  "money",
                            "points":  29
                        },
                        {
                            "text":  "take out trash",
                            "points":  21
                        },
                        {
                            "text":  "clean home/laundry",
                            "points":  18
                        },
                        {
                            "text":  "attention/time",
                            "points":  8
                        },
                        {
                            "text":  "kiss/make love",
                            "points":  4
                        },
                        {
                            "text":  "house repairs",
                            "points":  4
                        },
                        {
                            "text":  "toilet seat down",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210228,
        "question":  "We asked 100 married women... Give me a word starting with a \"W\" that describes your husband in bed.",
        "answers":  [
                        {
                            "text":  "wonderful",
                            "points":  25
                        },
                        {
                            "text":  "wild",
                            "points":  22
                        },
                        {
                            "text":  "winning/winner",
                            "points":  12
                        },
                        {
                            "text":  "wow",
                            "points":  9
                        },
                        {
                            "text":  "weird",
                            "points":  7
                        },
                        {
                            "text":  "whiny",
                            "points":  7
                        },
                        {
                            "text":  "warm",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  210229,
        "question":  "Name an animal that poops a lot.",
        "answers":  [
                        {
                            "text":  "dog/great dane",
                            "points":  26
                        },
                        {
                            "text":  "bird/chicken",
                            "points":  18
                        },
                        {
                            "text":  "horse",
                            "points":  12
                        },
                        {
                            "text":  "rabbit",
                            "points":  12
                        },
                        {
                            "text":  "cow",
                            "points":  10
                        },
                        {
                            "text":  "cat",
                            "points":  5
                        },
                        {
                            "text":  "guinea pig",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210230,
        "question":  "If you were a contestant on the show \"Dating Naked,\" what would you do to get ready for your date?",
        "answers":  [
                        {
                            "text":  "shave/landing strip",
                            "points":  25
                        },
                        {
                            "text":  "get in shape/diet",
                            "points":  20
                        },
                        {
                            "text":  "shower",
                            "points":  17
                        },
                        {
                            "text":  "get naked",
                            "points":  10
                        },
                        {
                            "text":  "tan/spray tan",
                            "points":  5
                        },
                        {
                            "text":  "new hairdo/weave",
                            "points":  5
                        },
                        {
                            "text":  "put on makeup",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210231,
        "question":  "If a man's kicked out of the house for the night, name something he might take with him.",
        "answers":  [
                        {
                            "text":  "pillow/blanket",
                            "points":  24
                        },
                        {
                            "text":  "car/car keys",
                            "points":  14
                        },
                        {
                            "text":  "wallet/money",
                            "points":  14
                        },
                        {
                            "text":  "cell phone",
                            "points":  12
                        },
                        {
                            "text":  "clothes/shoes",
                            "points":  11
                        },
                        {
                            "text":  "his dog",
                            "points":  7
                        },
                        {
                            "text":  "beer/booze",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210232,
        "question":  "Name a place you'd be surprised to see an old couple making out.",
        "answers":  [
                        {
                            "text":  "church",
                            "points":  22
                        },
                        {
                            "text":  "movies",
                            "points":  20
                        },
                        {
                            "text":  "park/water park",
                            "points":  17
                        },
                        {
                            "text":  "car/backseat",
                            "points":  14
                        },
                        {
                            "text":  "beach",
                            "points":  5
                        },
                        {
                            "text":  "mall/forever 21",
                            "points":  4
                        },
                        {
                            "text":  "bar/club",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210233,
        "question":  "We asked 100 men... Name a big, beautiful woman whose underpants are bigger than yours.",
        "answers":  [
                        {
                            "text":  "oprah",
                            "points":  21
                        },
                        {
                            "text":  "queen latifah",
                            "points":  16
                        },
                        {
                            "text":  "paula deen",
                            "points":  12
                        },
                        {
                            "text":  "melissa mccarthy",
                            "points":  12
                        },
                        {
                            "text":  "kim kardashian",
                            "points":  9
                        },
                        {
                            "text":  "kirstie alley",
                            "points":  8
                        },
                        {
                            "text":  "adele",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  210234,
        "question":  "We asked 100 women... Some men are pigs. What barnyard animal might you compare your man to?",
        "answers":  [
                        {
                            "text":  "horse/stallion",
                            "points":  18
                        },
                        {
                            "text":  "cow/steer/bull",
                            "points":  17
                        },
                        {
                            "text":  "jackass/donkey",
                            "points":  16
                        },
                        {
                            "text":  "rooster/chicken",
                            "points":  11
                        },
                        {
                            "text":  "pig",
                            "points":  9
                        },
                        {
                            "text":  "sheep/lamb",
                            "points":  9
                        },
                        {
                            "text":  "dog",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  210235,
        "question":  "Name something a department store Santa has within reach when he's working.",
        "answers":  [
                        {
                            "text":  "candy/canes",
                            "points":  37
                        },
                        {
                            "text":  "elf/helper",
                            "points":  21
                        },
                        {
                            "text":  "flask/vodka shots",
                            "points":  6
                        },
                        {
                            "text":  "sack of toys",
                            "points":  6
                        },
                        {
                            "text":  "hand wipe/tissue",
                            "points":  6
                        },
                        {
                            "text":  "water",
                            "points":  5
                        },
                        {
                            "text":  "children",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210236,
        "question":  "If a stripper was also a magician, name something she might pull out of her G-string.",
        "answers":  [
                        {
                            "text":  "rabbit",
                            "points":  36
                        },
                        {
                            "text":  "money/coin",
                            "points":  32
                        },
                        {
                            "text":  "vibrating joy toy",
                            "points":  5
                        },
                        {
                            "text":  "flower",
                            "points":  4
                        },
                        {
                            "text":  "handkerchief",
                            "points":  4
                        },
                        {
                            "text":  "magic wand",
                            "points":  2
                        },
                        {
                            "text":  "food/eggplant",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210237,
        "question":  "Name a major event in your life most people hope they only have to go through once.",
        "answers":  [
                        {
                            "text":  "wedding/marriage",
                            "points":  34
                        },
                        {
                            "text":  "school/graduation",
                            "points":  14
                        },
                        {
                            "text":  "death/funeral",
                            "points":  13
                        },
                        {
                            "text":  "surgery",
                            "points":  9
                        },
                        {
                            "text":  "childbirth",
                            "points":  6
                        },
                        {
                            "text":  "puberty",
                            "points":  5
                        },
                        {
                            "text":  "breakup/divorce",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210238,
        "question":  "Fill in the blank: A man might fake his own death to get out of ________.",
        "answers":  [
                        {
                            "text":  "marriage/rela'ship",
                            "points":  32
                        },
                        {
                            "text":  "alimony/child supp.",
                            "points":  19
                        },
                        {
                            "text":  "debt/taxes",
                            "points":  15
                        },
                        {
                            "text":  "jail/prison time",
                            "points":  8
                        },
                        {
                            "text":  "visiting in-laws",
                            "points":  5
                        },
                        {
                            "text":  "party/shower",
                            "points":  3
                        },
                        {
                            "text":  "shopping",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210239,
        "question":  "Name something a husband might worry his wife will do to him someday.",
        "answers":  [
                        {
                            "text":  "leave/divorce",
                            "points":  31
                        },
                        {
                            "text":  "cheat",
                            "points":  29
                        },
                        {
                            "text":  "take all his money",
                            "points":  7
                        },
                        {
                            "text":  "chop \"it\" off",
                            "points":  7
                        },
                        {
                            "text":  "kill him",
                            "points":  7
                        },
                        {
                            "text":  "refuse sex",
                            "points":  2
                        },
                        {
                            "text":  "make get vasectomy",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210240,
        "question":  "Name an animal you wouldn't want to be standing behind if it had beans for lunch.",
        "answers":  [
                        {
                            "text":  "elephant",
                            "points":  27
                        },
                        {
                            "text":  "dog",
                            "points":  18
                        },
                        {
                            "text":  "horse",
                            "points":  16
                        },
                        {
                            "text":  "bear",
                            "points":  12
                        },
                        {
                            "text":  "cow",
                            "points":  5
                        },
                        {
                            "text":  "donkey/mule",
                            "points":  4
                        },
                        {
                            "text":  "human/gramps",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210241,
        "question":  "We asked 100 men... Name something about a woman that makes you decide she's a keeper.",
        "answers":  [
                        {
                            "text":  "personality/funny",
                            "points":  25
                        },
                        {
                            "text":  "pretty face/smile",
                            "points":  21
                        },
                        {
                            "text":  "gourmet cook",
                            "points":  14
                        },
                        {
                            "text":  "moral/honest",
                            "points":  8
                        },
                        {
                            "text":  "doesn't talk/mute",
                            "points":  6
                        },
                        {
                            "text":  "sizzles in sack",
                            "points":  6
                        },
                        {
                            "text":  "got back/rack",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  210242,
        "question":  "What do you think dogs talk about to other dogs?",
        "answers":  [
                        {
                            "text":  "owners/humans",
                            "points":  36
                        },
                        {
                            "text":  "food/eating",
                            "points":  26
                        },
                        {
                            "text":  "smells",
                            "points":  6
                        },
                        {
                            "text":  "bones",
                            "points":  4
                        },
                        {
                            "text":  "cats",
                            "points":  4
                        },
                        {
                            "text":  "poop/fave dump spot",
                            "points":  4
                        },
                        {
                            "text":  "territory/go away",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210243,
        "question":  "Name something a mailman might carry in his bag in case he meets a lonely housewife.",
        "answers":  [
                        {
                            "text":  "condom/\"mail bag\"",
                            "points":  36
                        },
                        {
                            "text":  "candy/chocolates",
                            "points":  16
                        },
                        {
                            "text":  "breath spray/mint",
                            "points":  9
                        },
                        {
                            "text":  "flowers",
                            "points":  9
                        },
                        {
                            "text":  "bottle of wine",
                            "points":  6
                        },
                        {
                            "text":  "cologne",
                            "points":  4
                        },
                        {
                            "text":  "his business card",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210244,
        "question":  "Name something that warms your buns.",
        "answers":  [
                        {
                            "text":  "toaster/oven",
                            "points":  35
                        },
                        {
                            "text":  "heated seat/car",
                            "points":  12
                        },
                        {
                            "text":  "heating pad",
                            "points":  11
                        },
                        {
                            "text":  "lover's hand/spank",
                            "points":  10
                        },
                        {
                            "text":  "heater",
                            "points":  6
                        },
                        {
                            "text":  "fire/fireplace",
                            "points":  6
                        },
                        {
                            "text":  "clothes/pants",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210245,
        "question":  "Name a reason a man might ask for his money back at a strip club.",
        "answers":  [
                        {
                            "text":  "butt-ugly girls",
                            "points":  34
                        },
                        {
                            "text":  "bad dancers",
                            "points":  17
                        },
                        {
                            "text":  "the nudes are dudes",
                            "points":  9
                        },
                        {
                            "text":  "no nakedness",
                            "points":  8
                        },
                        {
                            "text":  "bar/service sucks",
                            "points":  8
                        },
                        {
                            "text":  "chubby chicks",
                            "points":  5
                        },
                        {
                            "text":  "show cancelled",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210246,
        "question":  "Name something you'd hate to fall off of you in the middle of a hot date.",
        "answers":  [
                        {
                            "text":  "clothes/pants",
                            "points":  33
                        },
                        {
                            "text":  "hair/toupee",
                            "points":  30
                        },
                        {
                            "text":  "false lashes/brows",
                            "points":  8
                        },
                        {
                            "text":  "glasses/contacts",
                            "points":  4
                        },
                        {
                            "text":  "jewelry/earring",
                            "points":  3
                        },
                        {
                            "text":  "dandruff/skin",
                            "points":  3
                        },
                        {
                            "text":  "boob/bulge padding",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210247,
        "question":  "Name something of your neighbor's you'd hate to see in your dog's mouth.",
        "answers":  [
                        {
                            "text":  "cat/pet",
                            "points":  27
                        },
                        {
                            "text":  "body/tongue",
                            "points":  22
                        },
                        {
                            "text":  "clothes/shoes",
                            "points":  17
                        },
                        {
                            "text":  "newspaper",
                            "points":  7
                        },
                        {
                            "text":  "trash/diaper",
                            "points":  5
                        },
                        {
                            "text":  "flowers",
                            "points":  3
                        },
                        {
                            "text":  "kids' toys",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210248,
        "question":  "Name something people do to their dogs that a wife might want to do to her husband.",
        "answers":  [
                        {
                            "text":  "bathe/groom him",
                            "points":  24
                        },
                        {
                            "text":  "kiss/hug/pet him",
                            "points":  19
                        },
                        {
                            "text":  "collar/leash him",
                            "points":  11
                        },
                        {
                            "text":  "walk/run him",
                            "points":  10
                        },
                        {
                            "text":  "doghouse/put out",
                            "points":  10
                        },
                        {
                            "text":  "make him beg",
                            "points":  5
                        },
                        {
                            "text":  "neuter him",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  210249,
        "question":  "Name something spring breakers bring back from Mexico.",
        "answers":  [
                        {
                            "text":  "the clap/squirts",
                            "points":  30
                        },
                        {
                            "text":  "tequila/booze",
                            "points":  21
                        },
                        {
                            "text":  "a tan/sunburn",
                            "points":  11
                        },
                        {
                            "text":  "hat/sombrero",
                            "points":  9
                        },
                        {
                            "text":  "tattoo",
                            "points":  4
                        },
                        {
                            "text":  "food",
                            "points":  4
                        },
                        {
                            "text":  "drugs/good weed",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210250,
        "question":  "We asked 100 men... Fill in the blank: I'd never date a woman who has a what?",
        "answers":  [
                        {
                            "text":  "husband/mate",
                            "points":  24
                        },
                        {
                            "text":  "big mouth",
                            "points":  14
                        },
                        {
                            "text":  "beard/mustache",
                            "points":  13
                        },
                        {
                            "text":  "bad attitude",
                            "points":  11
                        },
                        {
                            "text":  "smoking habit",
                            "points":  10
                        },
                        {
                            "text":  "kid",
                            "points":  6
                        },
                        {
                            "text":  "pushy mother",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  210251,
        "question":  "Name something a man wears at home that his wife won't let him wear in public.",
        "answers":  [
                        {
                            "text":  "torn/tacky shirt",
                            "points":  21
                        },
                        {
                            "text":  "skivvies/thong",
                            "points":  15
                        },
                        {
                            "text":  "pajamas/robe",
                            "points":  13
                        },
                        {
                            "text":  "sweats",
                            "points":  10
                        },
                        {
                            "text":  "slippers/old shoes",
                            "points":  8
                        },
                        {
                            "text":  "wife's duds/heels",
                            "points":  8
                        },
                        {
                            "text":  "shorts/bike shorts",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  210252,
        "question":  "We asked 100 women... Name something you'd do to a guy who dumped you on your birthday.",
        "answers":  [
                        {
                            "text":  "forget him/move on",
                            "points":  17
                        },
                        {
                            "text":  "trash car/tires",
                            "points":  16
                        },
                        {
                            "text":  "yell/cuss out",
                            "points":  13
                        },
                        {
                            "text":  "punch/kick him",
                            "points":  13
                        },
                        {
                            "text":  "tell others/faceb'k",
                            "points":  11
                        },
                        {
                            "text":  "cake/drink on him",
                            "points":  9
                        },
                        {
                            "text":  "post nude pics",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210253,
        "question":  "Name something you hope doesn't happen when your boss comes over for dinner.",
        "answers":  [
                        {
                            "text":  "bad meal/burnt",
                            "points":  57
                        },
                        {
                            "text":  "you/they get drunk",
                            "points":  6
                        },
                        {
                            "text":  "food poison/allergy",
                            "points":  5
                        },
                        {
                            "text":  "they fire you",
                            "points":  4
                        },
                        {
                            "text":  "uninvited guests",
                            "points":  4
                        },
                        {
                            "text":  "you/they fart",
                            "points":  3
                        },
                        {
                            "text":  "kids misbehave",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210254,
        "question":  "If a nursing home hired a stripper, what might the old guys put in her G-string?",
        "answers":  [
                        {
                            "text":  "dentures/adhesive",
                            "points":  41
                        },
                        {
                            "text":  "money/coins",
                            "points":  19
                        },
                        {
                            "text":  "food/jell-o/pepper",
                            "points":  7
                        },
                        {
                            "text":  "pills/tums",
                            "points":  5
                        },
                        {
                            "text":  "their bony fingers",
                            "points":  4
                        },
                        {
                            "text":  "depends",
                            "points":  3
                        },
                        {
                            "text":  "kleenex/hanky",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210255,
        "question":  "Name a specific word that would describe a cup of coffee and Steve Harvey.",
        "answers":  [
                        {
                            "text":  "black",
                            "points":  36
                        },
                        {
                            "text":  "dark",
                            "points":  14
                        },
                        {
                            "text":  "hot",
                            "points":  11
                        },
                        {
                            "text":  "smooth",
                            "points":  7
                        },
                        {
                            "text":  "strong",
                            "points":  5
                        },
                        {
                            "text":  "rich",
                            "points":  5
                        },
                        {
                            "text":  "steamy",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210256,
        "question":  "Name something a nudist would wear to the nudist colony formal ball.",
        "answers":  [
                        {
                            "text":  "tie/bowtie",
                            "points":  33
                        },
                        {
                            "text":  "top hat",
                            "points":  17
                        },
                        {
                            "text":  "jewelry/watch",
                            "points":  11
                        },
                        {
                            "text":  "shoes/heels",
                            "points":  7
                        },
                        {
                            "text":  "crown/tiara",
                            "points":  6
                        },
                        {
                            "text":  "flower/corsage",
                            "points":  4
                        },
                        {
                            "text":  "ribbon/around nads",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210257,
        "question":  "Name a fancy car a stripper might use as her stage name.",
        "answers":  [
                        {
                            "text":  "porsche",
                            "points":  27
                        },
                        {
                            "text":  "mercedes",
                            "points":  19
                        },
                        {
                            "text":  "lexus",
                            "points":  11
                        },
                        {
                            "text":  "ferrari",
                            "points":  11
                        },
                        {
                            "text":  "jaguar",
                            "points":  7
                        },
                        {
                            "text":  "corvette",
                            "points":  4
                        },
                        {
                            "text":  "mustang",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210258,
        "question":  "Name something you do to the hair on your head that you'd never do to your armpit hair.",
        "answers":  [
                        {
                            "text":  "brush/tease it",
                            "points":  27
                        },
                        {
                            "text":  "curl/perm it",
                            "points":  12
                        },
                        {
                            "text":  "cut it",
                            "points":  11
                        },
                        {
                            "text":  "braid it",
                            "points":  10
                        },
                        {
                            "text":  "color it",
                            "points":  9
                        },
                        {
                            "text":  "shampoo/condition",
                            "points":  8
                        },
                        {
                            "text":  "blow-dry it",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  210259,
        "question":  "We asked 100 women... Name a way your man is like a good cut of meat.",
        "answers":  [
                        {
                            "text":  "lean",
                            "points":  24
                        },
                        {
                            "text":  "tender",
                            "points":  19
                        },
                        {
                            "text":  "beefy",
                            "points":  11
                        },
                        {
                            "text":  "juicy",
                            "points":  10
                        },
                        {
                            "text":  "prime",
                            "points":  7
                        },
                        {
                            "text":  "rare",
                            "points":  6
                        },
                        {
                            "text":  "well-done",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  210260,
        "question":  "Name something you pick up.",
        "answers":  [
                        {
                            "text":  "litter/trash",
                            "points":  22
                        },
                        {
                            "text":  "laundry/clothes",
                            "points":  15
                        },
                        {
                            "text":  "babe/stud muffin",
                            "points":  12
                        },
                        {
                            "text":  "groceries/food",
                            "points":  11
                        },
                        {
                            "text":  "baby/kids",
                            "points":  10
                        },
                        {
                            "text":  "money/coins",
                            "points":  9
                        },
                        {
                            "text":  "the clap/disease",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210261,
        "question":  "Name a musical instrument that could be used as a murder weapon.",
        "answers":  [
                        {
                            "text":  "tuba",
                            "points":  20
                        },
                        {
                            "text":  "guitar/guitar string",
                            "points":  18
                        },
                        {
                            "text":  "flute",
                            "points":  16
                        },
                        {
                            "text":  "piano/piano wire",
                            "points":  10
                        },
                        {
                            "text":  "drum/drumstick",
                            "points":  7
                        },
                        {
                            "text":  "clarinet",
                            "points":  6
                        },
                        {
                            "text":  "saxophone",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  210262,
        "question":  "We asked 100 married women... If your house were burning, name something you hope your husband wouldn't try to save before you.",
        "answers":  [
                        {
                            "text":  "computer",
                            "points":  17
                        },
                        {
                            "text":  "car",
                            "points":  13
                        },
                        {
                            "text":  "video games/xbox",
                            "points":  12
                        },
                        {
                            "text":  "the tv",
                            "points":  12
                        },
                        {
                            "text":  "pet/fish",
                            "points":  11
                        },
                        {
                            "text":  "golf clubs",
                            "points":  9
                        },
                        {
                            "text":  "wallet/money",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  210263,
        "question":  "Name something you wouldn't want the person sitting next to you on an airplane to be holding.",
        "answers":  [
                        {
                            "text":  "gun/knife/bomb",
                            "points":  37
                        },
                        {
                            "text":  "baby",
                            "points":  26
                        },
                        {
                            "text":  "animal/snake",
                            "points":  5
                        },
                        {
                            "text":  "barf bag",
                            "points":  4
                        },
                        {
                            "text":  "newspaper",
                            "points":  3
                        },
                        {
                            "text":  "drink/hot beverage",
                            "points":  3
                        },
                        {
                            "text":  "onion/garlic",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210264,
        "question":  "Name something men love to watch that starts with the letter \"B.\"",
        "answers":  [
                        {
                            "text":  "baseball",
                            "points":  39
                        },
                        {
                            "text":  "babies",
                            "points":  13
                        },
                        {
                            "text":  "boobs/breasts",
                            "points":  12
                        },
                        {
                            "text":  "basketball",
                            "points":  4
                        },
                        {
                            "text":  "ballet",
                            "points":  4
                        },
                        {
                            "text":  "babes",
                            "points":  4
                        },
                        {
                            "text":  "baywatch",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210265,
        "question":  "Name something that lives in the ocean that reminds you of your boss.",
        "answers":  [
                        {
                            "text":  "shark",
                            "points":  34
                        },
                        {
                            "text":  "crab",
                            "points":  12
                        },
                        {
                            "text":  "eel",
                            "points":  11
                        },
                        {
                            "text":  "whale",
                            "points":  7
                        },
                        {
                            "text":  "octopus",
                            "points":  6
                        },
                        {
                            "text":  "dolphin",
                            "points":  5
                        },
                        {
                            "text":  "jellyfish",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  210266,
        "question":  "What's the first question Eve might have asked Adam?",
        "answers":  [
                        {
                            "text":  "who are you, stud?",
                            "points":  25
                        },
                        {
                            "text":  "lordy! that a peter?",
                            "points":  24
                        },
                        {
                            "text":  "hungry/apple?",
                            "points":  15
                        },
                        {
                            "text":  "poketh me?",
                            "points":  5
                        },
                        {
                            "text":  "where are we?",
                            "points":  5
                        },
                        {
                            "text":  "any other humans?",
                            "points":  3
                        },
                        {
                            "text":  "single/straight?",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210267,
        "question":  "Name something a waitress might put in a rude customer's food.",
        "answers":  [
                        {
                            "text":  "spit",
                            "points":  22
                        },
                        {
                            "text":  "hair",
                            "points":  15
                        },
                        {
                            "text":  "her finger",
                            "points":  15
                        },
                        {
                            "text":  "bug/cockroach",
                            "points":  9
                        },
                        {
                            "text":  "pepper/spices",
                            "points":  8
                        },
                        {
                            "text":  "booger/snot",
                            "points":  7
                        },
                        {
                            "text":  "hot sauce",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210268,
        "question":  "Name a place where you'd panic if the toilet didn't flush after you used it.",
        "answers":  [
                        {
                            "text":  "friend's house",
                            "points":  21
                        },
                        {
                            "text":  "work/interview",
                            "points":  16
                        },
                        {
                            "text":  "mate's/date's pad",
                            "points":  15
                        },
                        {
                            "text":  "in-laws' home",
                            "points":  9
                        },
                        {
                            "text":  "church",
                            "points":  9
                        },
                        {
                            "text":  "restaurant",
                            "points":  6
                        },
                        {
                            "text":  "airplane",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210269,
        "question":  "If you wound up in hell, name something you wish you had brought with you.",
        "answers":  [
                        {
                            "text":  "water/ice",
                            "points":  40
                        },
                        {
                            "text":  "fan/air conditioner",
                            "points":  20
                        },
                        {
                            "text":  "computer/ipad",
                            "points":  6
                        },
                        {
                            "text":  "my spouse",
                            "points":  4
                        },
                        {
                            "text":  "book/bible",
                            "points":  3
                        },
                        {
                            "text":  "cold brewski",
                            "points":  3
                        },
                        {
                            "text":  "hot babe/kim k.",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210270,
        "question":  "Name a place no one wants to admit they are headed.",
        "answers":  [
                        {
                            "text":  "doctor/psych ward",
                            "points":  22
                        },
                        {
                            "text":  "hell",
                            "points":  21
                        },
                        {
                            "text":  "prison/max security",
                            "points":  11
                        },
                        {
                            "text":  "bathroom/crapper",
                            "points":  10
                        },
                        {
                            "text":  "the grave",
                            "points":  6
                        },
                        {
                            "text":  "strip joint",
                            "points":  6
                        },
                        {
                            "text":  "\"the poorhouse\"",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210271,
        "question":  "Name something a husband wouldn't want his wife to give him.",
        "answers":  [
                        {
                            "text":  "crabs/disease",
                            "points":  30
                        },
                        {
                            "text":  "divorce papers",
                            "points":  18
                        },
                        {
                            "text":  "clothes/thong",
                            "points":  17
                        },
                        {
                            "text":  "\"a hard time\"",
                            "points":  4
                        },
                        {
                            "text":  "diet book/diet food",
                            "points":  3
                        },
                        {
                            "text":  "baby/the pool boy's",
                            "points":  3
                        },
                        {
                            "text":  "jewelry",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210272,
        "question":  "Name a zoo animal you would be surprised had the name \"Cuddles.\"",
        "answers":  [
                        {
                            "text":  "lion",
                            "points":  24
                        },
                        {
                            "text":  "bear",
                            "points":  13
                        },
                        {
                            "text":  "snake/python",
                            "points":  9
                        },
                        {
                            "text":  "gator/croc",
                            "points":  9
                        },
                        {
                            "text":  "tiger",
                            "points":  9
                        },
                        {
                            "text":  "elephant",
                            "points":  8
                        },
                        {
                            "text":  "porcupine",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  210273,
        "question":  "We asked 100 women... What's the sexiest job a man can have?",
        "answers":  [
                        {
                            "text":  "fireman",
                            "points":  20
                        },
                        {
                            "text":  "cop",
                            "points":  13
                        },
                        {
                            "text":  "dad",
                            "points":  11
                        },
                        {
                            "text":  "stripper/dancer",
                            "points":  10
                        },
                        {
                            "text":  "lawyer",
                            "points":  9
                        },
                        {
                            "text":  "construction/builder",
                            "points":  7
                        },
                        {
                            "text":  "masseur",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  210274,
        "question":  "Name something that makes a man feel free.",
        "answers":  [
                        {
                            "text":  "divorce/single",
                            "points":  26
                        },
                        {
                            "text":  "going commando/naked",
                            "points":  15
                        },
                        {
                            "text":  "money",
                            "points":  10
                        },
                        {
                            "text":  "car/driving fast",
                            "points":  9
                        },
                        {
                            "text":  "boxers",
                            "points":  6
                        },
                        {
                            "text":  "motorcycle",
                            "points":  5
                        },
                        {
                            "text":  "fresh air/nature",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  210275,
        "question":  "Women take forever to get dressed. What do men take forever to do?",
        "answers":  [
                        {
                            "text":  "chores",
                            "points":  31
                        },
                        {
                            "text":  "poop",
                            "points":  17
                        },
                        {
                            "text":  "propose",
                            "points":  7
                        },
                        {
                            "text":  "shave",
                            "points":  6
                        },
                        {
                            "text":  "make decisions",
                            "points":  6
                        },
                        {
                            "text":  "ask directions",
                            "points":  5
                        },
                        {
                            "text":  "shower",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210276,
        "question":  "Fill in the blank: Some wives treat their husbands like children and forbid them to ________.",
        "answers":  [
                        {
                            "text":  "go out/late",
                            "points":  26
                        },
                        {
                            "text":  "snack/in bed",
                            "points":  12
                        },
                        {
                            "text":  "speak",
                            "points":  10
                        },
                        {
                            "text":  "drink booze",
                            "points":  8
                        },
                        {
                            "text":  "shop/spend $",
                            "points":  7
                        },
                        {
                            "text":  "cheat/ogle babes",
                            "points":  6
                        },
                        {
                            "text":  "cuss",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  210277,
        "question":  "Name something you'd be surprised to find out your elderly neighbor used to be.",
        "answers":  [
                        {
                            "text":  "stripper",
                            "points":  41
                        },
                        {
                            "text":  "pro ho/gigolo",
                            "points":  9
                        },
                        {
                            "text":  "singer/actor",
                            "points":  5
                        },
                        {
                            "text":  "criminal/hitman",
                            "points":  5
                        },
                        {
                            "text":  "cop",
                            "points":  5
                        },
                        {
                            "text":  "a different sex",
                            "points":  4
                        },
                        {
                            "text":  "spy/cia",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210278,
        "question":  "Name something a husband would be shocked to see his wife wearing.",
        "answers":  [
                        {
                            "text":  "menswear/jockstrap",
                            "points":  27
                        },
                        {
                            "text":  "birthday suit",
                            "points":  19
                        },
                        {
                            "text":  "hot lingerie/thong",
                            "points":  12
                        },
                        {
                            "text":  "dress/gown",
                            "points":  5
                        },
                        {
                            "text":  "miniskirt",
                            "points":  3
                        },
                        {
                            "text":  "leather/dominatrix",
                            "points":  3
                        },
                        {
                            "text":  "bikini/swimsuit",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210279,
        "question":  "Name something specific a husband would actually be happy to see his wife spend money on.",
        "answers":  [
                        {
                            "text":  "food/red meat",
                            "points":  21
                        },
                        {
                            "text":  "slutty clothes",
                            "points":  18
                        },
                        {
                            "text":  "cars",
                            "points":  11
                        },
                        {
                            "text":  "implants/surgery",
                            "points":  7
                        },
                        {
                            "text":  "tools",
                            "points":  5
                        },
                        {
                            "text":  "90-inch hdtv",
                            "points":  5
                        },
                        {
                            "text":  "diet pills/gym",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210280,
        "question":  "Name something you don't ever want to be stuck in or you'll freak out.",
        "answers":  [
                        {
                            "text":  "elevator",
                            "points":  45
                        },
                        {
                            "text":  "quicksand",
                            "points":  6
                        },
                        {
                            "text":  "coffin/grave",
                            "points":  5
                        },
                        {
                            "text":  "cave",
                            "points":  4
                        },
                        {
                            "text":  "car/traffic",
                            "points":  4
                        },
                        {
                            "text":  "porta potty/toilet",
                            "points":  3
                        },
                        {
                            "text":  "dark alley",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210281,
        "question":  "Besides smoking, what do you wish there was a pill to stop you from doing?",
        "answers":  [
                        {
                            "text":  "eating/gaining lbs.",
                            "points":  41
                        },
                        {
                            "text":  "boozing",
                            "points":  12
                        },
                        {
                            "text":  "sleeping",
                            "points":  5
                        },
                        {
                            "text":  "biting/picking nails",
                            "points":  3
                        },
                        {
                            "text":  "making bad choices",
                            "points":  3
                        },
                        {
                            "text":  "dying",
                            "points":  3
                        },
                        {
                            "text":  "shopping/spending",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210282,
        "question":  "Fill in the blank: I secretly wish I were a professional ________.",
        "answers":  [
                        {
                            "text":  "athlete/wrestler",
                            "points":  23
                        },
                        {
                            "text":  "singer/musician",
                            "points":  19
                        },
                        {
                            "text":  "dancer/stripper",
                            "points":  8
                        },
                        {
                            "text":  "actor/comedian",
                            "points":  6
                        },
                        {
                            "text":  "writer/blogger",
                            "points":  6
                        },
                        {
                            "text":  "escort/ho",
                            "points":  4
                        },
                        {
                            "text":  "chef/baker",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210283,
        "question":  "What wouldn't you do even for a million dollars?",
        "answers":  [
                        {
                            "text":  "kill/someone",
                            "points":  35
                        },
                        {
                            "text":  "sell my bod/cheat",
                            "points":  11
                        },
                        {
                            "text":  "steal",
                            "points":  6
                        },
                        {
                            "text":  "jump off bldg/bridge",
                            "points":  5
                        },
                        {
                            "text":  "lie",
                            "points":  4
                        },
                        {
                            "text":  "nothing",
                            "points":  4
                        },
                        {
                            "text":  "eat a bug",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210284,
        "question":  "We asked 100 married women... Tell me an \"S\" word that describes your husband.",
        "answers":  [
                        {
                            "text":  "sweet/heart",
                            "points":  17
                        },
                        {
                            "text":  "sexy",
                            "points":  12
                        },
                        {
                            "text":  "smart",
                            "points":  10
                        },
                        {
                            "text":  "sloppy",
                            "points":  9
                        },
                        {
                            "text":  "stubborn",
                            "points":  8
                        },
                        {
                            "text":  "super/-duper",
                            "points":  7
                        },
                        {
                            "text":  "strong",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  210285,
        "question":  "Name something a doctor might pull out of a person.",
        "answers":  [
                        {
                            "text":  "appendix",
                            "points":  15
                        },
                        {
                            "text":  "teeth",
                            "points":  14
                        },
                        {
                            "text":  "splinter/sliver",
                            "points":  12
                        },
                        {
                            "text":  "tonsils",
                            "points":  7
                        },
                        {
                            "text":  "a baby",
                            "points":  7
                        },
                        {
                            "text":  "tick/leech/bug",
                            "points":  6
                        },
                        {
                            "text":  "stone/kidney stone",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  210286,
        "question":  "Name something that's painful for a man to do.",
        "answers":  [
                        {
                            "text":  "admit wrong/\"sorry\"",
                            "points":  35
                        },
                        {
                            "text":  "get directions",
                            "points":  8
                        },
                        {
                            "text":  "clean house",
                            "points":  7
                        },
                        {
                            "text":  "cry",
                            "points":  5
                        },
                        {
                            "text":  "get vasectomy",
                            "points":  4
                        },
                        {
                            "text":  "the splits",
                            "points":  3
                        },
                        {
                            "text":  "be monogamous",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210287,
        "question":  "We asked 100 men... Who is the hottest woman in the world?",
        "answers":  [
                        {
                            "text":  "my wife",
                            "points":  21
                        },
                        {
                            "text":  "angelina jolie",
                            "points":  10
                        },
                        {
                            "text":  "jennifer aniston",
                            "points":  10
                        },
                        {
                            "text":  "eva longoria",
                            "points":  7
                        },
                        {
                            "text":  "my mother",
                            "points":  6
                        },
                        {
                            "text":  "halle berry",
                            "points":  6
                        },
                        {
                            "text":  "jennifer lopez",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  210288,
        "question":  "Name something people have trouble holding.",
        "answers":  [
                        {
                            "text":  "job/employment",
                            "points":  18
                        },
                        {
                            "text":  "money",
                            "points":  15
                        },
                        {
                            "text":  "secrets/their tongue",
                            "points":  11
                        },
                        {
                            "text":  "their breath",
                            "points":  8
                        },
                        {
                            "text":  "kids/babies",
                            "points":  4
                        },
                        {
                            "text":  "their bladder",
                            "points":  4
                        },
                        {
                            "text":  "bar of soap",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210289,
        "question":  "Name something you wish wouldn't make so much noise when you use it.",
        "answers":  [
                        {
                            "text":  "vacuum",
                            "points":  19
                        },
                        {
                            "text":  "lawn mower/trimmer",
                            "points":  12
                        },
                        {
                            "text":  "vibrator",
                            "points":  10
                        },
                        {
                            "text":  "car",
                            "points":  6
                        },
                        {
                            "text":  "blender",
                            "points":  5
                        },
                        {
                            "text":  "hair dryer",
                            "points":  5
                        },
                        {
                            "text":  "toilet",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  210290,
        "question":  "Name something you've considered paying money to get rid of.",
        "answers":  [
                        {
                            "text":  "bugs/pests",
                            "points":  20
                        },
                        {
                            "text":  "fat/weight",
                            "points":  10
                        },
                        {
                            "text":  "my neighbors",
                            "points":  8
                        },
                        {
                            "text":  "my ex",
                            "points":  7
                        },
                        {
                            "text":  "junk/trash",
                            "points":  6
                        },
                        {
                            "text":  "hair/gray hair",
                            "points":  5
                        },
                        {
                            "text":  "old car/clunker",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  210291,
        "question":  "Name something that might be hot and dirty.",
        "answers":  [
                        {
                            "text":  "person/furry pits",
                            "points":  14
                        },
                        {
                            "text":  "nookie",
                            "points":  13
                        },
                        {
                            "text":  "car/engine",
                            "points":  13
                        },
                        {
                            "text":  "sand/desert/beach",
                            "points":  9
                        },
                        {
                            "text":  "road",
                            "points":  4
                        },
                        {
                            "text":  "oven/stove",
                            "points":  3
                        },
                        {
                            "text":  "pot/pan",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210292,
        "question":  "We asked 100 women... Name something you do just like a dude.",
        "answers":  [
                        {
                            "text":  "burp",
                            "points":  12
                        },
                        {
                            "text":  "eat",
                            "points":  9
                        },
                        {
                            "text":  "drive",
                            "points":  8
                        },
                        {
                            "text":  "drink/booze",
                            "points":  8
                        },
                        {
                            "text":  "work",
                            "points":  7
                        },
                        {
                            "text":  "sit",
                            "points":  7
                        },
                        {
                            "text":  "cuss",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  210293,
        "question":  "Name something people do to their armpits.",
        "answers":  [
                        {
                            "text":  "shave/wax 'em",
                            "points":  63
                        },
                        {
                            "text":  "deodorant on 'em",
                            "points":  10
                        },
                        {
                            "text":  "make noise/fart",
                            "points":  9
                        },
                        {
                            "text":  "scratch/rub 'em",
                            "points":  6
                        },
                        {
                            "text":  "sniff 'em",
                            "points":  6
                        },
                        {
                            "text":  "wash 'em",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  210294,
        "question":  "Name something the man picks up on a date.",
        "answers":  [
                        {
                            "text":  "the check",
                            "points":  61
                        },
                        {
                            "text":  "flowers",
                            "points":  23
                        },
                        {
                            "text":  "the woman/date",
                            "points":  6
                        },
                        {
                            "text":  "condoms",
                            "points":  5
                        },
                        {
                            "text":  "std/burning feeling",
                            "points":  3
                        },
                        {
                            "text":  "wine/booze",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210295,
        "question":  "We asked 100 married men... Name a furry animal it feels like you're sleeping with when your wife doesn't shave her legs.",
        "answers":  [
                        {
                            "text":  "porcupine",
                            "points":  50
                        },
                        {
                            "text":  "dog",
                            "points":  27
                        },
                        {
                            "text":  "bear",
                            "points":  13
                        },
                        {
                            "text":  "beaver",
                            "points":  5
                        },
                        {
                            "text":  "sheep",
                            "points":  3
                        },
                        {
                            "text":  "hedgehog",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210296,
        "question":  "Name a reason you don't sleep in the nude.",
        "answers":  [
                        {
                            "text":  "kids/no privacy",
                            "points":  38
                        },
                        {
                            "text":  "not comfy/cold",
                            "points":  38
                        },
                        {
                            "text":  "fire/emergency",
                            "points":  16
                        },
                        {
                            "text":  "i ooze bodily fluids",
                            "points":  4
                        },
                        {
                            "text":  "i'm self-conscious",
                            "points":  2
                        },
                        {
                            "text":  "i sleepwalk",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210297,
        "question":  "Name something a man might pick up on his way home from work.",
        "answers":  [
                        {
                            "text":  "food/milk",
                            "points":  55
                        },
                        {
                            "text":  "beer/alcohol",
                            "points":  26
                        },
                        {
                            "text":  "flowers",
                            "points":  10
                        },
                        {
                            "text":  "condoms",
                            "points":  3
                        },
                        {
                            "text":  "dry cleaning",
                            "points":  3
                        },
                        {
                            "text":  "woman/freaky ho",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210298,
        "question":  "Name something you like hot, and the hotter the better.",
        "answers":  [
                        {
                            "text":  "food/drink/cocoa",
                            "points":  51
                        },
                        {
                            "text":  "my man/woman",
                            "points":  18
                        },
                        {
                            "text":  "bed-rockin' boink",
                            "points":  15
                        },
                        {
                            "text":  "shower/bath",
                            "points":  6
                        },
                        {
                            "text":  "weather/beach",
                            "points":  5
                        },
                        {
                            "text":  "jacuzzi",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210299,
        "question":  "Name something a pirate would take off his wooden leg to do.",
        "answers":  [
                        {
                            "text":  "bathe/shower",
                            "points":  36
                        },
                        {
                            "text":  "sleep",
                            "points":  30
                        },
                        {
                            "text":  "swim",
                            "points":  13
                        },
                        {
                            "text":  "shag his wench",
                            "points":  10
                        },
                        {
                            "text":  "hit someone w/ it",
                            "points":  8
                        },
                        {
                            "text":  "hop",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210300,
        "question":  "If a man had a death wish, name a part of a hippopotamus he might say looks like his wife's.",
        "answers":  [
                        {
                            "text":  "butt",
                            "points":  63
                        },
                        {
                            "text":  "nose",
                            "points":  12
                        },
                        {
                            "text":  "stomach",
                            "points":  10
                        },
                        {
                            "text":  "mouth",
                            "points":  8
                        },
                        {
                            "text":  "eyes",
                            "points":  3
                        },
                        {
                            "text":  "ears",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210301,
        "question":  "Name something a woman might say she likes a man to do to her toes.",
        "answers":  [
                        {
                            "text":  "massage/rub 'em",
                            "points":  59
                        },
                        {
                            "text":  "suck/lick 'em",
                            "points":  15
                        },
                        {
                            "text":  "paint/polish 'em",
                            "points":  13
                        },
                        {
                            "text":  "kiss 'em",
                            "points":  5
                        },
                        {
                            "text":  "leave them alone",
                            "points":  4
                        },
                        {
                            "text":  "tickle 'em",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210302,
        "question":  "We asked 100 married people... What's the worst way to find out your spouse is cheating?",
        "answers":  [
                        {
                            "text":  "see it/in your bed",
                            "points":  54
                        },
                        {
                            "text":  "from their lover",
                            "points":  18
                        },
                        {
                            "text":  "from friend/family",
                            "points":  14
                        },
                        {
                            "text":  "facebook",
                            "points":  6
                        },
                        {
                            "text":  "e-mail/text",
                            "points":  4
                        },
                        {
                            "text":  "spouse admits it",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210303,
        "question":  "We asked 100 men... Name something you'd rather do with your dog than your wife.",
        "answers":  [
                        {
                            "text":  "run/play",
                            "points":  51
                        },
                        {
                            "text":  "take a walk",
                            "points":  25
                        },
                        {
                            "text":  "ride in car",
                            "points":  13
                        },
                        {
                            "text":  "fish/hunt",
                            "points":  5
                        },
                        {
                            "text":  "check for fleas",
                            "points":  2
                        },
                        {
                            "text":  "go to the bar",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210304,
        "question":  "Name something that might make you suspect your new house is haunted.",
        "answers":  [
                        {
                            "text":  "noises/voices",
                            "points":  50
                        },
                        {
                            "text":  "moving objects",
                            "points":  18
                        },
                        {
                            "text":  "lights off & on",
                            "points":  12
                        },
                        {
                            "text":  "ghost/impregnates me",
                            "points":  9
                        },
                        {
                            "text":  "doors open/close",
                            "points":  7
                        },
                        {
                            "text":  "weird odors",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210305,
        "question":  "Name something a man likes to see a woman bouncing on.",
        "answers":  [
                        {
                            "text":  "trampoline",
                            "points":  48
                        },
                        {
                            "text":  "him/his lap",
                            "points":  21
                        },
                        {
                            "text":  "bed/mattress",
                            "points":  19
                        },
                        {
                            "text":  "exercise ball",
                            "points":  4
                        },
                        {
                            "text":  "horse/mechanical",
                            "points":  4
                        },
                        {
                            "text":  "chair",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210306,
        "question":  "Name something that grows faster than you want it to.",
        "answers":  [
                        {
                            "text":  "hair/unibrow",
                            "points":  48
                        },
                        {
                            "text":  "lawn/weeds",
                            "points":  14
                        },
                        {
                            "text":  "kids/babies",
                            "points":  13
                        },
                        {
                            "text":  "belly/weight",
                            "points":  13
                        },
                        {
                            "text":  "my nails",
                            "points":  6
                        },
                        {
                            "text":  "debt/expenses",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210307,
        "question":  "If you're obsessed with yourself, name a place you'd keep your picture.",
        "answers":  [
                        {
                            "text":  "home/over my bed",
                            "points":  44
                        },
                        {
                            "text":  "wallet",
                            "points":  28
                        },
                        {
                            "text":  "at work/on desk",
                            "points":  12
                        },
                        {
                            "text":  "computer/facebook",
                            "points":  6
                        },
                        {
                            "text":  "car/dashboard",
                            "points":  5
                        },
                        {
                            "text":  "cell phone/screen",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210308,
        "question":  "We asked 100 women... Roses are red. Violets are blue. What kind of flowers do cheap guys buy you?",
        "answers":  [
                        {
                            "text":  "daisies",
                            "points":  39
                        },
                        {
                            "text":  "carnations",
                            "points":  38
                        },
                        {
                            "text":  "none/invisible",
                            "points":  9
                        },
                        {
                            "text":  "tulips",
                            "points":  6
                        },
                        {
                            "text":  "plastic/fake",
                            "points":  3
                        },
                        {
                            "text":  "dandelions",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210309,
        "question":  "Name something that might be brewing.",
        "answers":  [
                        {
                            "text":  "coffee",
                            "points":  37
                        },
                        {
                            "text":  "beer",
                            "points":  28
                        },
                        {
                            "text":  "tea",
                            "points":  17
                        },
                        {
                            "text":  "trouble",
                            "points":  8
                        },
                        {
                            "text":  "a storm",
                            "points":  5
                        },
                        {
                            "text":  "a plot",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210310,
        "question":  "We asked 100 single women... What is the biggest lie that a man ever told you?",
        "answers":  [
                        {
                            "text":  "i'm single",
                            "points":  29
                        },
                        {
                            "text":  "great job/rich",
                            "points":  22
                        },
                        {
                            "text":  "i love you",
                            "points":  17
                        },
                        {
                            "text":  "you're the only one",
                            "points":  13
                        },
                        {
                            "text":  "has ankle spanker",
                            "points":  12
                        },
                        {
                            "text":  "1st girlfriend ever",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  210311,
        "question":  "We asked 100 men... Name a way you can tell a woman's boobs are not real.",
        "answers":  [
                        {
                            "text":  "don't jiggle/move",
                            "points":  25
                        },
                        {
                            "text":  "the feel/rock hard",
                            "points":  24
                        },
                        {
                            "text":  "they're ginormous",
                            "points":  17
                        },
                        {
                            "text":  "pointy/odd shape",
                            "points":  11
                        },
                        {
                            "text":  "too perfect/no sag",
                            "points":  11
                        },
                        {
                            "text":  "surgical scars",
                            "points":  10
                        }
                    ]
    },
    {
        "id":  210312,
        "question":  "Name something you'd do if your skinny-dipping neighbors invited you over for a swim.",
        "answers":  [
                        {
                            "text":  "say no/run",
                            "points":  68
                        },
                        {
                            "text":  "strip down",
                            "points":  17
                        },
                        {
                            "text":  "wear swimsuit",
                            "points":  4
                        },
                        {
                            "text":  "bring alcohol",
                            "points":  4
                        },
                        {
                            "text":  "blush",
                            "points":  2
                        },
                        {
                            "text":  "take a camera",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210313,
        "question":  "Name an occupation that begins with the letter \"J.\"",
        "answers":  [
                        {
                            "text":  "janitor",
                            "points":  62
                        },
                        {
                            "text":  "judge/justice",
                            "points":  19
                        },
                        {
                            "text":  "jeweler",
                            "points":  5
                        },
                        {
                            "text":  "jockey",
                            "points":  4
                        },
                        {
                            "text":  "journalist",
                            "points":  4
                        },
                        {
                            "text":  "juggler",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210314,
        "question":  "We asked 100 women... Name a reason a stranger might mistake you for a hooker.",
        "answers":  [
                        {
                            "text":  "clothes/ho heels",
                            "points":  61
                        },
                        {
                            "text":  "lots of makeup",
                            "points":  15
                        },
                        {
                            "text":  "i'm a hottie",
                            "points":  8
                        },
                        {
                            "text":  "saw me making out",
                            "points":  6
                        },
                        {
                            "text":  "tattoos/tramp stamp",
                            "points":  5
                        },
                        {
                            "text":  "he's blind",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210315,
        "question":  "Name something you don't like your dog licking.",
        "answers":  [
                        {
                            "text":  "me/my open mouth",
                            "points":  60
                        },
                        {
                            "text":  "itself/fifi the ho",
                            "points":  26
                        },
                        {
                            "text":  "the toilet",
                            "points":  4
                        },
                        {
                            "text":  "food/crumbs",
                            "points":  3
                        },
                        {
                            "text":  "poo",
                            "points":  2
                        },
                        {
                            "text":  "furniture",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210316,
        "question":  "Name something you've seen your neighbor doing outside while wearing a bathrobe.",
        "answers":  [
                        {
                            "text":  "getting newspaper",
                            "points":  57
                        },
                        {
                            "text":  "watering grass",
                            "points":  17
                        },
                        {
                            "text":  "taking out trash",
                            "points":  16
                        },
                        {
                            "text":  "washing car",
                            "points":  3
                        },
                        {
                            "text":  "kissing spouse",
                            "points":  2
                        },
                        {
                            "text":  "gardening",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210317,
        "question":  "Name something that starts with the word \"chow.\"",
        "answers":  [
                        {
                            "text":  "chow mein",
                            "points":  57
                        },
                        {
                            "text":  "chowder",
                            "points":  12
                        },
                        {
                            "text":  "chowhound",
                            "points":  8
                        },
                        {
                            "text":  "chow chow",
                            "points":  8
                        },
                        {
                            "text":  "chow down",
                            "points":  6
                        },
                        {
                            "text":  "chowtime",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  210318,
        "question":  "We asked 100 men... Name a term of endearment that's good to call a wife but bad to call a coworker.",
        "answers":  [
                        {
                            "text":  "honey/hon",
                            "points":  48
                        },
                        {
                            "text":  "baby/babe",
                            "points":  25
                        },
                        {
                            "text":  "sweetie/cheeks",
                            "points":  15
                        },
                        {
                            "text":  "dear",
                            "points":  4
                        },
                        {
                            "text":  "lover/love muffin",
                            "points":  3
                        },
                        {
                            "text":  "sexy",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210319,
        "question":  "Name an animal that, if it could talk, would say \"I'm all ears.\"",
        "answers":  [
                        {
                            "text":  "elephant",
                            "points":  46
                        },
                        {
                            "text":  "rabbit",
                            "points":  34
                        },
                        {
                            "text":  "dog/dachsund",
                            "points":  9
                        },
                        {
                            "text":  "donkey/mule",
                            "points":  4
                        },
                        {
                            "text":  "fox",
                            "points":  2
                        },
                        {
                            "text":  "mouse",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210320,
        "question":  "Name something real birds do that you'd be surprised to see Big Bird do on \"Sesame Street.\"",
        "answers":  [
                        {
                            "text":  "poo/on bert's head",
                            "points":  46
                        },
                        {
                            "text":  "fly/flap wings",
                            "points":  31
                        },
                        {
                            "text":  "eat/worms",
                            "points":  8
                        },
                        {
                            "text":  "nest/lay eggs",
                            "points":  6
                        },
                        {
                            "text":  "mate/poke pigeon",
                            "points":  3
                        },
                        {
                            "text":  "tweet/chirp",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210321,
        "question":  "You never want to shake someone's hand right after they do what?",
        "answers":  [
                        {
                            "text":  "whiz/shoot a dooky",
                            "points":  45
                        },
                        {
                            "text":  "pick nose/sneeze",
                            "points":  39
                        },
                        {
                            "text":  "cough",
                            "points":  4
                        },
                        {
                            "text":  "eat/bbq ribs",
                            "points":  4
                        },
                        {
                            "text":  "lick it",
                            "points":  3
                        },
                        {
                            "text":  "scratch butt",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210322,
        "question":  "We asked 100 single women... If it were up to your man, where would you go on every date?",
        "answers":  [
                        {
                            "text":  "bar",
                            "points":  36
                        },
                        {
                            "text":  "sporting event",
                            "points":  22
                        },
                        {
                            "text":  "movie theater",
                            "points":  14
                        },
                        {
                            "text":  "the bedroom",
                            "points":  12
                        },
                        {
                            "text":  "pool hall",
                            "points":  9
                        },
                        {
                            "text":  "his buddy's place",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210323,
        "question":  "Name something that has to be licked.",
        "answers":  [
                        {
                            "text":  "lollipop",
                            "points":  33
                        },
                        {
                            "text":  "ice cream/cone",
                            "points":  32
                        },
                        {
                            "text":  "stamp",
                            "points":  11
                        },
                        {
                            "text":  "popsicle",
                            "points":  10
                        },
                        {
                            "text":  "envelope",
                            "points":  9
                        },
                        {
                            "text":  "your lips",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210324,
        "question":  "Name something done to nuts that Mr. Peanut's wife might do to him for cheating on her.",
        "answers":  [
                        {
                            "text":  "crack/smash him",
                            "points":  74
                        },
                        {
                            "text":  "roast him",
                            "points":  8
                        },
                        {
                            "text":  "chop him to bits",
                            "points":  7
                        },
                        {
                            "text":  "grind/peanut butter",
                            "points":  3
                        },
                        {
                            "text":  "boil him",
                            "points":  2
                        },
                        {
                            "text":  "chew up/eat him",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210325,
        "question":  "When you call in sick to work, name something you do to make it believable.",
        "answers":  [
                        {
                            "text":  "cough",
                            "points":  68
                        },
                        {
                            "text":  "hoarse/weak voice",
                            "points":  18
                        },
                        {
                            "text":  "fake puke",
                            "points":  3
                        },
                        {
                            "text":  "moan/groan",
                            "points":  3
                        },
                        {
                            "text":  "go to doctor/note",
                            "points":  2
                        },
                        {
                            "text":  "sneeze/sniffle",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210326,
        "question":  "A wife might say to her husband, \"Okay, if you're going to wear a Speedo to the beach, I'm going to wear\" what?",
        "answers":  [
                        {
                            "text":  "string bikini/thong",
                            "points":  60
                        },
                        {
                            "text":  "nothing/no top",
                            "points":  23
                        },
                        {
                            "text":  "disguise/bag on head",
                            "points":  5
                        },
                        {
                            "text":  "a muumuu",
                            "points":  4
                        },
                        {
                            "text":  "a speedo too",
                            "points":  2
                        },
                        {
                            "text":  "a monokini",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210327,
        "question":  "If they made an R-rated \"Wizard of Oz,\" what might Dorothy ask the Wizard for?",
        "answers":  [
                        {
                            "text":  "guy/\"do me, wizard\"",
                            "points":  59
                        },
                        {
                            "text":  "giant jugs/surgery",
                            "points":  22
                        },
                        {
                            "text":  "to go home/a ride",
                            "points":  4
                        },
                        {
                            "text":  "a gun",
                            "points":  4
                        },
                        {
                            "text":  "hot outfit/heels",
                            "points":  4
                        },
                        {
                            "text":  "drugs/'shrooms",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210328,
        "question":  "Name an activity that requires using your lips.",
        "answers":  [
                        {
                            "text":  "kissing",
                            "points":  56
                        },
                        {
                            "text":  "talking",
                            "points":  23
                        },
                        {
                            "text":  "whistling",
                            "points":  7
                        },
                        {
                            "text":  "singing",
                            "points":  4
                        },
                        {
                            "text":  "playing flute/horn",
                            "points":  4
                        },
                        {
                            "text":  "licking your lips",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210329,
        "question":  "Name something a pool guy might wear to tease a rich housewife.",
        "answers":  [
                        {
                            "text":  "speedo/thong",
                            "points":  56
                        },
                        {
                            "text":  "sexy tight shorts",
                            "points":  18
                        },
                        {
                            "text":  "nada/free willy",
                            "points":  8
                        },
                        {
                            "text":  "tight shirt/tank",
                            "points":  7
                        },
                        {
                            "text":  "no shirt",
                            "points":  5
                        },
                        {
                            "text":  "suit & tie",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210330,
        "question":  "Name something you try to make smell as nice as possible.",
        "answers":  [
                        {
                            "text":  "my home/the crapper",
                            "points":  54
                        },
                        {
                            "text":  "me/my funky breath",
                            "points":  26
                        },
                        {
                            "text":  "food/my warm pie",
                            "points":  5
                        },
                        {
                            "text":  "clothes",
                            "points":  4
                        },
                        {
                            "text":  "garbage can",
                            "points":  4
                        },
                        {
                            "text":  "garden/lawn",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210331,
        "question":  "We asked 100 men... Name something you don't want to see fall to the ground when a woman takes off her bra.",
        "answers":  [
                        {
                            "text":  "stuffing/falsies",
                            "points":  52
                        },
                        {
                            "text":  "saggy knockers",
                            "points":  36
                        },
                        {
                            "text":  "my mouth/chin",
                            "points":  2
                        },
                        {
                            "text":  "money/singles",
                            "points":  2
                        },
                        {
                            "text":  "gun",
                            "points":  2
                        },
                        {
                            "text":  "fruit/melons",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210332,
        "question":  "Name place you see greasy legs.",
        "answers":  [
                        {
                            "text":  "beach",
                            "points":  44
                        },
                        {
                            "text":  "restaurant/kfc",
                            "points":  26
                        },
                        {
                            "text":  "car repair shop",
                            "points":  11
                        },
                        {
                            "text":  "tanning salon",
                            "points":  6
                        },
                        {
                            "text":  "pool/water park",
                            "points":  5
                        },
                        {
                            "text":  "gym",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210333,
        "question":  "Name something the world's oldest stripper drags along the stage.",
        "answers":  [
                        {
                            "text":  "pink-nosed puppies",
                            "points":  41
                        },
                        {
                            "text":  "cane/walker",
                            "points":  23
                        },
                        {
                            "text":  "costume/boa",
                            "points":  16
                        },
                        {
                            "text":  "her feet/heels",
                            "points":  7
                        },
                        {
                            "text":  "her saggy booty",
                            "points":  6
                        },
                        {
                            "text":  "oxygen tank",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210334,
        "question":  "Name something a car salesman hopes doesn't happen when he takes a customer for a ride.",
        "answers":  [
                        {
                            "text":  "crash the car",
                            "points":  40
                        },
                        {
                            "text":  "breakdown/stall",
                            "points":  39
                        },
                        {
                            "text":  "run out of gas",
                            "points":  7
                        },
                        {
                            "text":  "cuts cheese/poops",
                            "points":  4
                        },
                        {
                            "text":  "high speed/chase",
                            "points":  3
                        },
                        {
                            "text":  "flat tire",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210335,
        "question":  "We asked 100 married women... Name something you find irresistable in men that unfortunately your hubby doesn't have.",
        "answers":  [
                        {
                            "text":  "muscles/6-pack",
                            "points":  40
                        },
                        {
                            "text":  "thick/long hair",
                            "points":  19
                        },
                        {
                            "text":  "money",
                            "points":  15
                        },
                        {
                            "text":  "charm/humor",
                            "points":  10
                        },
                        {
                            "text":  "nice teeth",
                            "points":  6
                        },
                        {
                            "text":  "brain/sense",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  210336,
        "question":  "We asked 100 women... If you had to share a bed with grandma, what do you hope she doesn't do?",
        "answers":  [
                        {
                            "text":  "rip egg farts",
                            "points":  32
                        },
                        {
                            "text":  "snore",
                            "points":  25
                        },
                        {
                            "text":  "pee/\"bake brownies\"",
                            "points":  22
                        },
                        {
                            "text":  "die",
                            "points":  13
                        },
                        {
                            "text":  "hog the covers",
                            "points":  2
                        },
                        {
                            "text":  "spoon me",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210337,
        "question":  "We asked 100 men... If you marry Miss Nude America, name a specific place you'd tell her she has to wear clothes.",
        "answers":  [
                        {
                            "text":  "mall/store",
                            "points":  25
                        },
                        {
                            "text":  "church",
                            "points":  22
                        },
                        {
                            "text":  "at my parents'",
                            "points":  21
                        },
                        {
                            "text":  "restr't/chick-fil-a",
                            "points":  14
                        },
                        {
                            "text":  "wedding",
                            "points":  12
                        },
                        {
                            "text":  "work/functions",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210338,
        "question":  "Name an animal a snake can swallow whole.",
        "answers":  [
                        {
                            "text":  "mouse/rat",
                            "points":  73
                        },
                        {
                            "text":  "alligator/croc.",
                            "points":  9
                        },
                        {
                            "text":  "rabbit",
                            "points":  5
                        },
                        {
                            "text":  "dog",
                            "points":  3
                        },
                        {
                            "text":  "pig",
                            "points":  3
                        },
                        {
                            "text":  "cat",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210339,
        "question":  "Name something Tarzan reaches for when he wants to have a good time.",
        "answers":  [
                        {
                            "text":  "jane/a hottie",
                            "points":  52
                        },
                        {
                            "text":  "a vine/rope",
                            "points":  35
                        },
                        {
                            "text":  "a banana",
                            "points":  2
                        },
                        {
                            "text":  "a beer",
                            "points":  2
                        },
                        {
                            "text":  "his loincloth",
                            "points":  2
                        },
                        {
                            "text":  "cheeta",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210340,
        "question":  "Name something that would be hard to do if you really had two left feet.",
        "answers":  [
                        {
                            "text":  "walk/run",
                            "points":  49
                        },
                        {
                            "text":  "dance/hokey pokey",
                            "points":  26
                        },
                        {
                            "text":  "buy/wear shoes",
                            "points":  14
                        },
                        {
                            "text":  "balance/stand",
                            "points":  2
                        },
                        {
                            "text":  "drive",
                            "points":  2
                        },
                        {
                            "text":  "kick/a ball",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210341,
        "question":  "Name some news that a woman would locate her ex-boyfriend to tell him about.",
        "answers":  [
                        {
                            "text":  "pregnant/it's his",
                            "points":  49
                        },
                        {
                            "text":  "gettin' hitched",
                            "points":  18
                        },
                        {
                            "text":  "has std/8 of them",
                            "points":  13
                        },
                        {
                            "text":  "someone/dog died",
                            "points":  10
                        },
                        {
                            "text":  "she's over him",
                            "points":  3
                        },
                        {
                            "text":  "war!/tv news story",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210342,
        "question":  "We asked 100 women... What's the most fun thing to do with another woman?",
        "answers":  [
                        {
                            "text":  "shop",
                            "points":  46
                        },
                        {
                            "text":  "yak/gossip",
                            "points":  31
                        },
                        {
                            "text":  "dine out",
                            "points":  6
                        },
                        {
                            "text":  "drink cocktails",
                            "points":  5
                        },
                        {
                            "text":  "laugh",
                            "points":  4
                        },
                        {
                            "text":  "make out",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210343,
        "question":  "If the zipper on your pants breaks at work, what do you do?",
        "answers":  [
                        {
                            "text":  "pin/safety pin",
                            "points":  44
                        },
                        {
                            "text":  "cover with clothes",
                            "points":  25
                        },
                        {
                            "text":  "go home/change",
                            "points":  13
                        },
                        {
                            "text":  "nothing",
                            "points":  7
                        },
                        {
                            "text":  "staple it",
                            "points":  3
                        },
                        {
                            "text":  "buy new pants",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210344,
        "question":  "Name a word you can use instead of \"woman.\"",
        "answers":  [
                        {
                            "text":  "lady",
                            "points":  36
                        },
                        {
                            "text":  "girl",
                            "points":  24
                        },
                        {
                            "text":  "female",
                            "points":  17
                        },
                        {
                            "text":  "chick",
                            "points":  7
                        },
                        {
                            "text":  "broad",
                            "points":  6
                        },
                        {
                            "text":  "gal",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  210345,
        "question":  "Name something a wife should learn to play so her husband won't spend so much time with the guys.",
        "answers":  [
                        {
                            "text":  "sports/football",
                            "points":  34
                        },
                        {
                            "text":  "poker/cards",
                            "points":  31
                        },
                        {
                            "text":  "video games",
                            "points":  14
                        },
                        {
                            "text":  "pool",
                            "points":  7
                        },
                        {
                            "text":  "nurse/pervy games",
                            "points":  6
                        },
                        {
                            "text":  "harmonica/instrum't",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210346,
        "question":  "We asked 100 men... Name an animal your wife turns into when she's angry.",
        "answers":  [
                        {
                            "text":  "pit bull/dog",
                            "points":  31
                        },
                        {
                            "text":  "bear",
                            "points":  17
                        },
                        {
                            "text":  "lion",
                            "points":  16
                        },
                        {
                            "text":  "tiger",
                            "points":  15
                        },
                        {
                            "text":  "snake/viper",
                            "points":  13
                        },
                        {
                            "text":  "stubborn mule",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210347,
        "question":  "A married man shows you pictures of his kids. What does a single man show you pictures of?",
        "answers":  [
                        {
                            "text":  "his car",
                            "points":  30
                        },
                        {
                            "text":  "his babe/nude bimbo",
                            "points":  28
                        },
                        {
                            "text":  "his dog/pet",
                            "points":  16
                        },
                        {
                            "text":  "his bod/bony pony",
                            "points":  12
                        },
                        {
                            "text":  "mom/relatives",
                            "points":  7
                        },
                        {
                            "text":  "his house/pimp pad",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210348,
        "question":  "If two women started fighting in a beauty salon, name something one might use as a weapon.",
        "answers":  [
                        {
                            "text":  "scissors",
                            "points":  30
                        },
                        {
                            "text":  "brush/comb",
                            "points":  27
                        },
                        {
                            "text":  "curling/flat iron",
                            "points":  19
                        },
                        {
                            "text":  "hair dryer",
                            "points":  11
                        },
                        {
                            "text":  "nail file",
                            "points":  4
                        },
                        {
                            "text":  "hair spray",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210349,
        "question":  "We asked 100 women... Name a place you go with your man that's ruined if he brings his mother along.",
        "answers":  [
                        {
                            "text":  "dinner/applebee's",
                            "points":  30
                        },
                        {
                            "text":  "home/our bed",
                            "points":  17
                        },
                        {
                            "text":  "vacation/beach",
                            "points":  17
                        },
                        {
                            "text":  "movie/drive-in",
                            "points":  16
                        },
                        {
                            "text":  "bar/club",
                            "points":  11
                        },
                        {
                            "text":  "hotel/no-tell motel",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210350,
        "question":  "We asked 100 single women... Name something you'd hate to see when your date takes his shirt off.",
        "answers":  [
                        {
                            "text":  "hair/man sweater",
                            "points":  24
                        },
                        {
                            "text":  "pierced nips",
                            "points":  21
                        },
                        {
                            "text":  "beer belly",
                            "points":  18
                        },
                        {
                            "text":  "tattoo/of clay aiken",
                            "points":  13
                        },
                        {
                            "text":  "man boobs",
                            "points":  10
                        },
                        {
                            "text":  "zits/bacne",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  210351,
        "question":  "We asked 100 married women... Name a lazy animal that reminds you of your husband.",
        "answers":  [
                        {
                            "text":  "dog/hound dog",
                            "points":  21
                        },
                        {
                            "text":  "house cat",
                            "points":  19
                        },
                        {
                            "text":  "sloth",
                            "points":  18
                        },
                        {
                            "text":  "bear",
                            "points":  17
                        },
                        {
                            "text":  "turtle",
                            "points":  15
                        },
                        {
                            "text":  "elephant",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  210352,
        "question":  "Name something specific in an aquarium that the fish might be too stupid to realize is fake.",
        "answers":  [
                        {
                            "text":  "plants",
                            "points":  51
                        },
                        {
                            "text":  "coral",
                            "points":  14
                        },
                        {
                            "text":  "castle",
                            "points":  13
                        },
                        {
                            "text":  "rocks",
                            "points":  7
                        },
                        {
                            "text":  "scuba diver",
                            "points":  5
                        },
                        {
                            "text":  "treasure chest",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210353,
        "question":  "Name a reason a guy might not break up with his psycho girlfriend.",
        "answers":  [
                        {
                            "text":  "fear",
                            "points":  46
                        },
                        {
                            "text":  "crazy = great sex",
                            "points":  19
                        },
                        {
                            "text":  "the wacko's wealthy",
                            "points":  11
                        },
                        {
                            "text":  "that freak is fine",
                            "points":  9
                        },
                        {
                            "text":  "he loves the loon",
                            "points":  5
                        },
                        {
                            "text":  "he's psycho too",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210354,
        "question":  "We asked 100 single women... If your date never shows up, name something you hope happened to him.",
        "answers":  [
                        {
                            "text":  "car crash/died",
                            "points":  38
                        },
                        {
                            "text":  "got lost",
                            "points":  16
                        },
                        {
                            "text":  "stuck in traffic",
                            "points":  15
                        },
                        {
                            "text":  "had to work",
                            "points":  13
                        },
                        {
                            "text":  "fell asleep",
                            "points":  8
                        },
                        {
                            "text":  "car broke down",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210355,
        "question":  "Name something you see outside that would make you want to stay inside.",
        "answers":  [
                        {
                            "text":  "weather/tornado",
                            "points":  71
                        },
                        {
                            "text":  "bear/animal",
                            "points":  13
                        },
                        {
                            "text":  "zombies",
                            "points":  3
                        },
                        {
                            "text":  "apocalypse",
                            "points":  2
                        },
                        {
                            "text":  "fire/smoke",
                            "points":  2
                        },
                        {
                            "text":  "bad celeb/biebs",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210356,
        "question":  "If it were up to dogs, what would people taste like when they lick them?",
        "answers":  [
                        {
                            "text":  "bacon/meat",
                            "points":  69
                        },
                        {
                            "text":  "a bone",
                            "points":  7
                        },
                        {
                            "text":  "candy/sweets",
                            "points":  6
                        },
                        {
                            "text":  "dog food/treat",
                            "points":  4
                        },
                        {
                            "text":  "salt",
                            "points":  4
                        },
                        {
                            "text":  "dog butt",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210357,
        "question":  "Name something small a male stripper might have.",
        "answers":  [
                        {
                            "text":  "thong/costume",
                            "points":  51
                        },
                        {
                            "text":  "inch-long dong",
                            "points":  26
                        },
                        {
                            "text":  "waist/belly",
                            "points":  9
                        },
                        {
                            "text":  "butt/man-can",
                            "points":  3
                        },
                        {
                            "text":  "hands/fingers",
                            "points":  2
                        },
                        {
                            "text":  "tips/$",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210358,
        "question":  "Name something that twins should never share.",
        "answers":  [
                        {
                            "text":  "spouse/lover",
                            "points":  42
                        },
                        {
                            "text":  "toothbrush",
                            "points":  31
                        },
                        {
                            "text":  "undies/clothes",
                            "points":  14
                        },
                        {
                            "text":  "toilet paper",
                            "points":  2
                        },
                        {
                            "text":  "first name",
                            "points":  2
                        },
                        {
                            "text":  "silverware",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210359,
        "question":  "We asked 100 women... Name something you would do if you discovered your next-door neighbor peeping in your window.",
        "answers":  [
                        {
                            "text":  "call the cops",
                            "points":  42
                        },
                        {
                            "text":  "scream",
                            "points":  21
                        },
                        {
                            "text":  "close blinds",
                            "points":  15
                        },
                        {
                            "text":  "flash boobs/moon",
                            "points":  8
                        },
                        {
                            "text":  "confront him",
                            "points":  4
                        },
                        {
                            "text":  "tell my mate",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210360,
        "question":  "We asked 100 men... If your dog could talk, name something the two of you would talk about.",
        "answers":  [
                        {
                            "text":  "hotties",
                            "points":  40
                        },
                        {
                            "text":  "life/our days",
                            "points":  17
                        },
                        {
                            "text":  "food",
                            "points":  15
                        },
                        {
                            "text":  "pee/poop/outside",
                            "points":  11
                        },
                        {
                            "text":  "cars",
                            "points":  5
                        },
                        {
                            "text":  "the comfy couch",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  210361,
        "question":  "Name something specific about Mickey Mouse that other mice might make fun of.",
        "answers":  [
                        {
                            "text":  "gigantic ears",
                            "points":  36
                        },
                        {
                            "text":  "clothes/gloves",
                            "points":  29
                        },
                        {
                            "text":  "wussy voice/laugh",
                            "points":  19
                        },
                        {
                            "text":  "his huge feet",
                            "points":  3
                        },
                        {
                            "text":  "besties w/ a duck",
                            "points":  3
                        },
                        {
                            "text":  "honker/big nose",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210362,
        "question":  "Name something a man finds in the house that makes him suspect his wife might kill him.",
        "answers":  [
                        {
                            "text":  "poison/arsenic",
                            "points":  33
                        },
                        {
                            "text":  "gun",
                            "points":  29
                        },
                        {
                            "text":  "insurance policy",
                            "points":  11
                        },
                        {
                            "text":  "knife/machete",
                            "points":  11
                        },
                        {
                            "text":  "hitman's info",
                            "points":  5
                        },
                        {
                            "text":  "\"how to\" research",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210363,
        "question":  "Fill in the blank: Raging what?",
        "answers":  [
                        {
                            "text":  "bull",
                            "points":  74
                        },
                        {
                            "text":  "waters",
                            "points":  7
                        },
                        {
                            "text":  "fire",
                            "points":  3
                        },
                        {
                            "text":  "hormones",
                            "points":  3
                        },
                        {
                            "text":  "river",
                            "points":  3
                        },
                        {
                            "text":  "rapids",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210364,
        "question":  "What does the new wife do when she knows the ex is stopping by?",
        "answers":  [
                        {
                            "text":  "doll up/look sexy",
                            "points":  59
                        },
                        {
                            "text":  "leave/hide",
                            "points":  13
                        },
                        {
                            "text":  "clean house",
                            "points":  12
                        },
                        {
                            "text":  "call husband",
                            "points":  3
                        },
                        {
                            "text":  "hover/stay close",
                            "points":  3
                        },
                        {
                            "text":  "get a gun",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210365,
        "question":  "Name something a detective might find at a crime scene that would make him think the culprit was a circus clown.",
        "answers":  [
                        {
                            "text":  "red rubber nose",
                            "points":  58
                        },
                        {
                            "text":  "makeup/smudges",
                            "points":  12
                        },
                        {
                            "text":  "big footprint/shoes",
                            "points":  11
                        },
                        {
                            "text":  "wig/orange hairs",
                            "points":  7
                        },
                        {
                            "text":  "balloons",
                            "points":  2
                        },
                        {
                            "text":  "mask",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210366,
        "question":  "Name something at a supermarket a man might squeeze a little too romantically.",
        "answers":  [
                        {
                            "text":  "melons",
                            "points":  57
                        },
                        {
                            "text":  "lemons",
                            "points":  10
                        },
                        {
                            "text":  "tomatoes",
                            "points":  9
                        },
                        {
                            "text":  "bread",
                            "points":  7
                        },
                        {
                            "text":  "peaches",
                            "points":  5
                        },
                        {
                            "text":  "toilet paper",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210367,
        "question":  "Since you can't take it with you, name something an 80-year-old man might spend all his money on.",
        "answers":  [
                        {
                            "text":  "gal/fertile myrtle",
                            "points":  45
                        },
                        {
                            "text":  "cruise/trip",
                            "points":  17
                        },
                        {
                            "text":  "car",
                            "points":  14
                        },
                        {
                            "text":  "family/kids",
                            "points":  9
                        },
                        {
                            "text":  "gambling",
                            "points":  5
                        },
                        {
                            "text":  "a boat",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210368,
        "question":  "Name something it should be against the law for people to wear if they're out of shape.",
        "answers":  [
                        {
                            "text":  "bikini/speedo",
                            "points":  34
                        },
                        {
                            "text":  "spandex/lycra",
                            "points":  20
                        },
                        {
                            "text":  "butt floss/thong",
                            "points":  16
                        },
                        {
                            "text":  "leggings/tights",
                            "points":  8
                        },
                        {
                            "text":  "short shorts",
                            "points":  7
                        },
                        {
                            "text":  "tight jeans",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  210369,
        "question":  "Name something you hope the nurses aren't saying about you when you're out during surgery.",
        "answers":  [
                        {
                            "text":  "what a dinky winky",
                            "points":  29
                        },
                        {
                            "text":  "what a fatty",
                            "points":  29
                        },
                        {
                            "text":  "they're a goner",
                            "points":  15
                        },
                        {
                            "text":  "ugly/funny-looking",
                            "points":  11
                        },
                        {
                            "text":  "hairy/chewbacca",
                            "points":  4
                        },
                        {
                            "text":  "dirty/stinky",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210370,
        "question":  "Name something only an idiot would do if a cop car was driving right behind him.",
        "answers":  [
                        {
                            "text":  "speed",
                            "points":  61
                        },
                        {
                            "text":  "slam on brakes",
                            "points":  12
                        },
                        {
                            "text":  "run light/stop sign",
                            "points":  7
                        },
                        {
                            "text":  "litter",
                            "points":  5
                        },
                        {
                            "text":  "flip the bird",
                            "points":  3
                        },
                        {
                            "text":  "drink",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210371,
        "question":  "Name something people stick their fingers in that they shouldn't.",
        "answers":  [
                        {
                            "text":  "food/drink",
                            "points":  46
                        },
                        {
                            "text":  "nose",
                            "points":  22
                        },
                        {
                            "text":  "electric socket",
                            "points":  14
                        },
                        {
                            "text":  "ears",
                            "points":  3
                        },
                        {
                            "text":  "garbage disposal",
                            "points":  3
                        },
                        {
                            "text":  "their/others' mouths",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210372,
        "question":  "Name something that shakes, rattles, and rolls.",
        "answers":  [
                        {
                            "text":  "old car",
                            "points":  31
                        },
                        {
                            "text":  "a rattle/toy",
                            "points":  29
                        },
                        {
                            "text":  "a rattlesnake",
                            "points":  15
                        },
                        {
                            "text":  "music/singers",
                            "points":  8
                        },
                        {
                            "text":  "dancing bod/booty",
                            "points":  4
                        },
                        {
                            "text":  "dice",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210373,
        "question":  "You should never tell a woman she looks... what?",
        "answers":  [
                        {
                            "text":  "big-boned/fleshy",
                            "points":  71
                        },
                        {
                            "text":  "old",
                            "points":  6
                        },
                        {
                            "text":  "tired",
                            "points":  4
                        },
                        {
                            "text":  "pregnant",
                            "points":  3
                        },
                        {
                            "text":  "like her mother",
                            "points":  3
                        },
                        {
                            "text":  "facially challenged",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210374,
        "question":  "Name an animal starting with the letter \"C\" that you'd never want to eat.",
        "answers":  [
                        {
                            "text":  "cat",
                            "points":  64
                        },
                        {
                            "text":  "camel",
                            "points":  8
                        },
                        {
                            "text":  "cougar",
                            "points":  8
                        },
                        {
                            "text":  "cow",
                            "points":  4
                        },
                        {
                            "text":  "cheetah",
                            "points":  3
                        },
                        {
                            "text":  "coyote",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210375,
        "question":  "If the groom's dog is his best man, name something he hopes Fido doesn't do at the reception.",
        "answers":  [
                        {
                            "text":  "whiz/dump",
                            "points":  61
                        },
                        {
                            "text":  "bark",
                            "points":  8
                        },
                        {
                            "text":  "hump/mom-in-law",
                            "points":  7
                        },
                        {
                            "text":  "eat the ring",
                            "points":  6
                        },
                        {
                            "text":  "eat the cake/food",
                            "points":  5
                        },
                        {
                            "text":  "puke",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210376,
        "question":  "We asked 100 single women... Name something your parents always ask about the man you're dating.",
        "answers":  [
                        {
                            "text":  "job/rich?",
                            "points":  51
                        },
                        {
                            "text":  "how old?",
                            "points":  13
                        },
                        {
                            "text":  "personality/nice?",
                            "points":  12
                        },
                        {
                            "text":  "good family?",
                            "points":  5
                        },
                        {
                            "text":  "what religion?",
                            "points":  5
                        },
                        {
                            "text":  "crackhead/druggie?",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210377,
        "question":  "Other than feet, name something that runs.",
        "answers":  [
                        {
                            "text":  "water/toilet",
                            "points":  37
                        },
                        {
                            "text":  "engine/car",
                            "points":  24
                        },
                        {
                            "text":  "refrigerator",
                            "points":  10
                        },
                        {
                            "text":  "noses",
                            "points":  8
                        },
                        {
                            "text":  "pantyhose",
                            "points":  8
                        },
                        {
                            "text":  "clock",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210378,
        "question":  "We asked 100 men... Fill in the blank: Someday, I'd like to be known as the world's greatest ________.",
        "answers":  [
                        {
                            "text":  "lover",
                            "points":  31
                        },
                        {
                            "text":  "parent",
                            "points":  20
                        },
                        {
                            "text":  "athlete",
                            "points":  20
                        },
                        {
                            "text":  "teacher",
                            "points":  7
                        },
                        {
                            "text":  "writer",
                            "points":  7
                        },
                        {
                            "text":  "musician/singer",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  210379,
        "question":  "Name a reason you think men grow beards.",
        "answers":  [
                        {
                            "text":  "lazy/hate shaving",
                            "points":  30
                        },
                        {
                            "text":  "look macho/sexy",
                            "points":  30
                        },
                        {
                            "text":  "cover flaws/fat",
                            "points":  12
                        },
                        {
                            "text":  "keep warm",
                            "points":  12
                        },
                        {
                            "text":  "look older",
                            "points":  3
                        },
                        {
                            "text":  "no hair on head",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210380,
        "question":  "Name something you'd be surprised your grandma did to her hair.",
        "answers":  [
                        {
                            "text":  "dyed it/pink",
                            "points":  62
                        },
                        {
                            "text":  "shaved/mohawk",
                            "points":  10
                        },
                        {
                            "text":  "cut it",
                            "points":  5
                        },
                        {
                            "text":  "permed/curled it",
                            "points":  5
                        },
                        {
                            "text":  "straightened it",
                            "points":  4
                        },
                        {
                            "text":  "braided/cornrows",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210381,
        "question":  "Name something of grandma's you hope doesn't end up in the cookies she bakes you.",
        "answers":  [
                        {
                            "text":  "teeth/dentures",
                            "points":  54
                        },
                        {
                            "text":  "hair/whiskers",
                            "points":  18
                        },
                        {
                            "text":  "pills/ex-lax",
                            "points":  10
                        },
                        {
                            "text":  "snot",
                            "points":  3
                        },
                        {
                            "text":  "tobacco/ashes",
                            "points":  2
                        },
                        {
                            "text":  "ring",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210382,
        "question":  "We asked 100 single men... Name something your girlfriend starts talking about that makes you nervous.",
        "answers":  [
                        {
                            "text":  "marriage",
                            "points":  36
                        },
                        {
                            "text":  "having kids",
                            "points":  25
                        },
                        {
                            "text":  "guys/past lover",
                            "points":  15
                        },
                        {
                            "text":  "redecorating",
                            "points":  5
                        },
                        {
                            "text":  "shopping",
                            "points":  5
                        },
                        {
                            "text":  "owning a home",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210383,
        "question":  "Name something you'd be surprised to hear Brian Williams was wearing under his desk.",
        "answers":  [
                        {
                            "text":  "shorts",
                            "points":  35
                        },
                        {
                            "text":  "his skivvies/thong",
                            "points":  20
                        },
                        {
                            "text":  "a kilt/skirt",
                            "points":  16
                        },
                        {
                            "text":  "nada/bare-buttin'",
                            "points":  9
                        },
                        {
                            "text":  "panties/lacy ones",
                            "points":  6
                        },
                        {
                            "text":  "flip-flops",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210384,
        "question":  "Name something a person might keep in a cellar.",
        "answers":  [
                        {
                            "text":  "wine",
                            "points":  54
                        },
                        {
                            "text":  "food/canned goods",
                            "points":  23
                        },
                        {
                            "text":  "dead bodies",
                            "points":  4
                        },
                        {
                            "text":  "tools/a hook",
                            "points":  3
                        },
                        {
                            "text":  "furnace",
                            "points":  2
                        },
                        {
                            "text":  "gun",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210385,
        "question":  "Give me another word people say for \"rear end.\"",
        "answers":  [
                        {
                            "text":  "butt/buttocks",
                            "points":  54
                        },
                        {
                            "text":  "arse",
                            "points":  18
                        },
                        {
                            "text":  "backside",
                            "points":  6
                        },
                        {
                            "text":  "derriere",
                            "points":  4
                        },
                        {
                            "text":  "bottom",
                            "points":  3
                        },
                        {
                            "text":  "heinie",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210386,
        "question":  "You'd probably be too scared to run with the bulls. But what animal would you be okay running with?",
        "answers":  [
                        {
                            "text":  "dogs/puppies",
                            "points":  53
                        },
                        {
                            "text":  "cats/kittens",
                            "points":  22
                        },
                        {
                            "text":  "turtles",
                            "points":  4
                        },
                        {
                            "text":  "horses",
                            "points":  4
                        },
                        {
                            "text":  "chickens",
                            "points":  3
                        },
                        {
                            "text":  "rabbits/bunnies",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210387,
        "question":  "Right now, name something your body's telling you to do.",
        "answers":  [
                        {
                            "text":  "eat/more cookies",
                            "points":  38
                        },
                        {
                            "text":  "sleep/rest",
                            "points":  29
                        },
                        {
                            "text":  "drink/a 40",
                            "points":  7
                        },
                        {
                            "text":  "pee/pinch a loaf",
                            "points":  7
                        },
                        {
                            "text":  "exercise, wuss!",
                            "points":  4
                        },
                        {
                            "text":  "go on a diet, fatty!",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210388,
        "question":  "Name a reason a woman might choose to be with a chubby man.",
        "answers":  [
                        {
                            "text":  "fatty got money!",
                            "points":  34
                        },
                        {
                            "text":  "she's fat/digs food",
                            "points":  23
                        },
                        {
                            "text":  "she'll look better",
                            "points":  12
                        },
                        {
                            "text":  "she's in love",
                            "points":  9
                        },
                        {
                            "text":  "he's warm/cuddly",
                            "points":  6
                        },
                        {
                            "text":  "he won't cheat",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210389,
        "question":  "We asked 100 married women... Name something your husband mistakenly thinks he's good at.",
        "answers":  [
                        {
                            "text":  "fix'g stuff/repairs",
                            "points":  30
                        },
                        {
                            "text":  "taking me to o-town",
                            "points":  20
                        },
                        {
                            "text":  "driving/directions",
                            "points":  20
                        },
                        {
                            "text":  "dancing",
                            "points":  11
                        },
                        {
                            "text":  "cooking",
                            "points":  4
                        },
                        {
                            "text":  "shopping/groceries",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210390,
        "question":  "We asked 100 men... Name someone you'd hate your mate to say you reminded her of.",
        "answers":  [
                        {
                            "text":  "her ex",
                            "points":  54
                        },
                        {
                            "text":  "her father/mine",
                            "points":  16
                        },
                        {
                            "text":  "her brother",
                            "points":  6
                        },
                        {
                            "text":  "her mother/mine",
                            "points":  5
                        },
                        {
                            "text":  "politician",
                            "points":  3
                        },
                        {
                            "text":  "bozo/a clown",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210391,
        "question":  "You've fallen and you can't get up. What's your dog doing?",
        "answers":  [
                        {
                            "text":  "licking my face",
                            "points":  34
                        },
                        {
                            "text":  "sleeping/lying down",
                            "points":  20
                        },
                        {
                            "text":  "staring",
                            "points":  18
                        },
                        {
                            "text":  "barking/whining",
                            "points":  7
                        },
                        {
                            "text":  "standing over me",
                            "points":  5
                        },
                        {
                            "text":  "peeing/on me",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210392,
        "question":  "Name something you prefer to be real instead of fake.",
        "answers":  [
                        {
                            "text":  "chesticles/boobs",
                            "points":  33
                        },
                        {
                            "text":  "food/sugar",
                            "points":  17
                        },
                        {
                            "text":  "jewelry/diamonds",
                            "points":  13
                        },
                        {
                            "text":  "people/emotions",
                            "points":  11
                        },
                        {
                            "text":  "flowers/plants",
                            "points":  7
                        },
                        {
                            "text":  "money",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  210393,
        "question":  "Tell me a nickname someone gives their lover that starts with the word \"sugar.\"",
        "answers":  [
                        {
                            "text":  "sugar pie",
                            "points":  27
                        },
                        {
                            "text":  "sugar bear",
                            "points":  27
                        },
                        {
                            "text":  "sugar baby/babe",
                            "points":  12
                        },
                        {
                            "text":  "sugar daddy",
                            "points":  8
                        },
                        {
                            "text":  "sugarplum",
                            "points":  8
                        },
                        {
                            "text":  "sugar lips",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  210394,
        "question":  "We asked 100 married women... Fill in the blank: In the bedroom, my husband's superhero name would be ________ Man.",
        "answers":  [
                        {
                            "text":  "iron man",
                            "points":  25
                        },
                        {
                            "text":  "superman",
                            "points":  24
                        },
                        {
                            "text":  "minuteman",
                            "points":  14
                        },
                        {
                            "text":  "macho man",
                            "points":  11
                        },
                        {
                            "text":  "batman",
                            "points":  11
                        },
                        {
                            "text":  "spider-man",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210395,
        "question":  "We asked 100 men... Name a specific word you'd use to describe a peach and a woman.",
        "answers":  [
                        {
                            "text":  "fuzzy",
                            "points":  20
                        },
                        {
                            "text":  "sweet",
                            "points":  17
                        },
                        {
                            "text":  "peachy",
                            "points":  17
                        },
                        {
                            "text":  "juicy",
                            "points":  16
                        },
                        {
                            "text":  "delicious",
                            "points":  9
                        },
                        {
                            "text":  "soft",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  210396,
        "question":  "Name something grandpa might use grandma's big underwear for.",
        "answers":  [
                        {
                            "text":  "cleaning/rag",
                            "points":  58
                        },
                        {
                            "text":  "to wear/as do-rag",
                            "points":  13
                        },
                        {
                            "text":  "towel/washcloth",
                            "points":  4
                        },
                        {
                            "text":  "flag/surrender",
                            "points":  4
                        },
                        {
                            "text":  "sack/bowling bag",
                            "points":  4
                        },
                        {
                            "text":  "to sail/parasail",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210397,
        "question":  "Name something most men do in the morning that a caveman wouldn't have done.",
        "answers":  [
                        {
                            "text":  "shave/manscape",
                            "points":  49
                        },
                        {
                            "text":  "brush teeth",
                            "points":  15
                        },
                        {
                            "text":  "shower",
                            "points":  9
                        },
                        {
                            "text":  "make coffee/brkfst.",
                            "points":  5
                        },
                        {
                            "text":  "use toilet/wipe",
                            "points":  5
                        },
                        {
                            "text":  "style hair",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210398,
        "question":  "Name something a man discovers about his fiancée that would make him call off the wedding.",
        "answers":  [
                        {
                            "text":  "she's cheating",
                            "points":  46
                        },
                        {
                            "text":  "is/was a dude",
                            "points":  20
                        },
                        {
                            "text":  "she's married",
                            "points":  7
                        },
                        {
                            "text":  "she's a hooker",
                            "points":  5
                        },
                        {
                            "text":  "bi/crazy 4 coochie",
                            "points":  4
                        },
                        {
                            "text":  "ex-con/killer",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210399,
        "question":  "We asked 100 married men... If you decided to live a simpler life, name something you'd get rid of.",
        "answers":  [
                        {
                            "text":  "my phone",
                            "points":  24
                        },
                        {
                            "text":  "my wife from hell",
                            "points":  18
                        },
                        {
                            "text":  "my job",
                            "points":  14
                        },
                        {
                            "text":  "my home/apartment",
                            "points":  14
                        },
                        {
                            "text":  "my rotten kids",
                            "points":  9
                        },
                        {
                            "text":  "my car",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  210400,
        "question":  "Name something you talk to that can't talk back.",
        "answers":  [
                        {
                            "text":  "dog/animals",
                            "points":  52
                        },
                        {
                            "text":  "tv/movie",
                            "points":  11
                        },
                        {
                            "text":  "car",
                            "points":  6
                        },
                        {
                            "text":  "plants/trees",
                            "points":  6
                        },
                        {
                            "text":  "mirror/reflection",
                            "points":  5
                        },
                        {
                            "text":  "computer",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  210401,
        "question":  "Name something Steve Harvey will probably never run out of.",
        "answers":  [
                        {
                            "text":  "jokes/laughs",
                            "points":  51
                        },
                        {
                            "text":  "money",
                            "points":  13
                        },
                        {
                            "text":  "suits/ties",
                            "points":  12
                        },
                        {
                            "text":  "advice/stories",
                            "points":  5
                        },
                        {
                            "text":  "charm",
                            "points":  2
                        },
                        {
                            "text":  "head shine/wax",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210402,
        "question":  "Name a part of Steve Harvey's body that's probably very smooth.",
        "answers":  [
                        {
                            "text":  "shiny bald head",
                            "points":  49
                        },
                        {
                            "text":  "face/juicy lips",
                            "points":  15
                        },
                        {
                            "text":  "butt cheeks",
                            "points":  11
                        },
                        {
                            "text":  "back",
                            "points":  4
                        },
                        {
                            "text":  "perky pecs",
                            "points":  3
                        },
                        {
                            "text":  "guns/arms",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210403,
        "question":  "Fill in the blank: Road what?",
        "answers":  [
                        {
                            "text":  "road rage",
                            "points":  39
                        },
                        {
                            "text":  "roadkill",
                            "points":  14
                        },
                        {
                            "text":  "road trip",
                            "points":  12
                        },
                        {
                            "text":  "roadblock",
                            "points":  11
                        },
                        {
                            "text":  "roadrunner",
                            "points":  5
                        },
                        {
                            "text":  "road closed",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210404,
        "question":  "During a concert, what might a grandma toss onstage to a sexy old rock star?",
        "answers":  [
                        {
                            "text":  "bra",
                            "points":  35
                        },
                        {
                            "text":  "granny panties",
                            "points":  24
                        },
                        {
                            "text":  "dentures",
                            "points":  11
                        },
                        {
                            "text":  "hair/wig",
                            "points":  6
                        },
                        {
                            "text":  "flowers",
                            "points":  5
                        },
                        {
                            "text":  "support/panty hose",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210405,
        "question":  "Name something a woman wants a matching set of.",
        "answers":  [
                        {
                            "text":  "earrings/jewelry",
                            "points":  35
                        },
                        {
                            "text":  "dishes",
                            "points":  12
                        },
                        {
                            "text":  "undergarments",
                            "points":  12
                        },
                        {
                            "text":  "hooters",
                            "points":  11
                        },
                        {
                            "text":  "shoes",
                            "points":  10
                        },
                        {
                            "text":  "towels",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210406,
        "question":  "Name a U.S. city that starts with the letter \"P.\"",
        "answers":  [
                        {
                            "text":  "pittsburgh",
                            "points":  31
                        },
                        {
                            "text":  "philadelphia",
                            "points":  31
                        },
                        {
                            "text":  "portland",
                            "points":  10
                        },
                        {
                            "text":  "phoenix",
                            "points":  7
                        },
                        {
                            "text":  "pasadena",
                            "points":  3
                        },
                        {
                            "text":  "peoria",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210407,
        "question":  "Name someone you'd hate to realize you drunk dialed last night.",
        "answers":  [
                        {
                            "text":  "my ex",
                            "points":  26
                        },
                        {
                            "text":  "my mom/dad",
                            "points":  18
                        },
                        {
                            "text":  "my boss",
                            "points":  17
                        },
                        {
                            "text":  "pastor/the pope",
                            "points":  12
                        },
                        {
                            "text":  "911/cops",
                            "points":  6
                        },
                        {
                            "text":  "my in-laws",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  210408,
        "question":  "We asked 100 men... If you had x-ray vision, name a place you'd be sure to use it.",
        "answers":  [
                        {
                            "text":  "store/mall",
                            "points":  23
                        },
                        {
                            "text":  "gym/locker room",
                            "points":  23
                        },
                        {
                            "text":  "restrooms",
                            "points":  14
                        },
                        {
                            "text":  "beach",
                            "points":  9
                        },
                        {
                            "text":  "the office",
                            "points":  8
                        },
                        {
                            "text":  "stock exchange",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  210409,
        "question":  "Name something you'd do if a waitress kept sneezing while taking your order.",
        "answers":  [
                        {
                            "text":  "leave/walk out",
                            "points":  43
                        },
                        {
                            "text":  "new waitress/table",
                            "points":  12
                        },
                        {
                            "text":  "say \"bless you\"",
                            "points":  11
                        },
                        {
                            "text":  "offer napkin/tissue",
                            "points":  9
                        },
                        {
                            "text":  "cover my face/food",
                            "points":  4
                        },
                        {
                            "text":  "speak to manager",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210410,
        "question":  "Give me a word that rhymes with \"heart.\"",
        "answers":  [
                        {
                            "text":  "fart",
                            "points":  31
                        },
                        {
                            "text":  "cart",
                            "points":  18
                        },
                        {
                            "text":  "smart",
                            "points":  16
                        },
                        {
                            "text":  "dart",
                            "points":  6
                        },
                        {
                            "text":  "part",
                            "points":  6
                        },
                        {
                            "text":  "tart",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  210411,
        "question":  "Name a word that rhymes with \"pump.\"",
        "answers":  [
                        {
                            "text":  "hump",
                            "points":  23
                        },
                        {
                            "text":  "lump",
                            "points":  15
                        },
                        {
                            "text":  "dump",
                            "points":  15
                        },
                        {
                            "text":  "jump",
                            "points":  11
                        },
                        {
                            "text":  "bump",
                            "points":  10
                        },
                        {
                            "text":  "rump",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  210412,
        "question":  "Name something your friend does in your car that irritates you.",
        "answers":  [
                        {
                            "text":  "smokes cigs",
                            "points":  50
                        },
                        {
                            "text":  "plays with radio",
                            "points":  8
                        },
                        {
                            "text":  "litters/inside car",
                            "points":  7
                        },
                        {
                            "text":  "eats/tuna",
                            "points":  7
                        },
                        {
                            "text":  "talks/directs me",
                            "points":  6
                        },
                        {
                            "text":  "throws up",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210413,
        "question":  "Name something you'd never want to be sprayed with.",
        "answers":  [
                        {
                            "text":  "mace/pepper spray",
                            "points":  34
                        },
                        {
                            "text":  "eau de skunk",
                            "points":  22
                        },
                        {
                            "text":  "acid",
                            "points":  8
                        },
                        {
                            "text":  "paint",
                            "points":  6
                        },
                        {
                            "text":  "pee/diarrhea blast",
                            "points":  6
                        },
                        {
                            "text":  "pesticide",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  210414,
        "question":  "We asked 100 married women... Name something a wife might put in the cake she bakes for her cheating husband's birthday.",
        "answers":  [
                        {
                            "text":  "laxative",
                            "points":  30
                        },
                        {
                            "text":  "poison/arsenic",
                            "points":  23
                        },
                        {
                            "text":  "salt/pepper",
                            "points":  10
                        },
                        {
                            "text":  "divorce papers",
                            "points":  8
                        },
                        {
                            "text":  "razor blade",
                            "points":  8
                        },
                        {
                            "text":  "her wedding ring",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210415,
        "question":  "Name something that swings both ways.",
        "answers":  [
                        {
                            "text":  "door/gate",
                            "points":  30
                        },
                        {
                            "text":  "a swing",
                            "points":  21
                        },
                        {
                            "text":  "people/anne heche",
                            "points":  13
                        },
                        {
                            "text":  "pendulum",
                            "points":  11
                        },
                        {
                            "text":  "rope/vine",
                            "points":  4
                        },
                        {
                            "text":  "ball bat/batter",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210416,
        "question":  "Name something you'd like to have with you at a nude beach.",
        "answers":  [
                        {
                            "text":  "big towel",
                            "points":  25
                        },
                        {
                            "text":  "sunscreen",
                            "points":  25
                        },
                        {
                            "text":  "a camera",
                            "points":  13
                        },
                        {
                            "text":  "my clothes",
                            "points":  9
                        },
                        {
                            "text":  "an umbrella",
                            "points":  6
                        },
                        {
                            "text":  "hottie/jessica alba",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210417,
        "question":  "Name something a woman gets when she hits the big time.",
        "answers":  [
                        {
                            "text":  "money/gold",
                            "points":  20
                        },
                        {
                            "text":  "clothes/jimmy choos",
                            "points":  17
                        },
                        {
                            "text":  "diamonds/jewelry",
                            "points":  16
                        },
                        {
                            "text":  "new car/beemer",
                            "points":  15
                        },
                        {
                            "text":  "boobs/nip & tuck",
                            "points":  8
                        },
                        {
                            "text":  "ego/\"i'm all that\"",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  210418,
        "question":  "If you won the lottery on Monday, what would you hate to have happen on Tuesday?",
        "answers":  [
                        {
                            "text":  "i kick the bucket",
                            "points":  34
                        },
                        {
                            "text":  "lose the ticket",
                            "points":  21
                        },
                        {
                            "text":  "pay taxes on it",
                            "points":  11
                        },
                        {
                            "text":  "get sick/hurt",
                            "points":  9
                        },
                        {
                            "text":  "wake up from dream",
                            "points":  3
                        },
                        {
                            "text":  "world ends",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210419,
        "question":  "Name something a pirate might be embarrassed to admit he didn't know how to do.",
        "answers":  [
                        {
                            "text":  "sail/navigate ship",
                            "points":  26
                        },
                        {
                            "text":  "sword fight",
                            "points":  20
                        },
                        {
                            "text":  "swim",
                            "points":  18
                        },
                        {
                            "text":  "steal/get treasure",
                            "points":  9
                        },
                        {
                            "text":  "tie a knot",
                            "points":  4
                        },
                        {
                            "text":  "shoot gun/cannon",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210420,
        "question":  "At a game, name something you wouldn't want to be caught doing on the Jumbotron.",
        "answers":  [
                        {
                            "text":  "pick/blow'g nose",
                            "points":  46
                        },
                        {
                            "text":  "score home run/sex",
                            "points":  10
                        },
                        {
                            "text":  "eating",
                            "points":  8
                        },
                        {
                            "text":  "kiss'g/bud's date",
                            "points":  6
                        },
                        {
                            "text":  "sleeping",
                            "points":  5
                        },
                        {
                            "text":  "scratch'g/my butkus",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  210421,
        "question":  "Other than a woman, name something a man likes so much, he should put a ring on it.",
        "answers":  [
                        {
                            "text":  "his car",
                            "points":  34
                        },
                        {
                            "text":  "remote/tv/sports",
                            "points":  19
                        },
                        {
                            "text":  "beer",
                            "points":  8
                        },
                        {
                            "text":  "his \"magic johnson\"",
                            "points":  8
                        },
                        {
                            "text":  "his dog",
                            "points":  7
                        },
                        {
                            "text":  "food",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210422,
        "question":  "Name a word or phrase that starts with \"hip.\"",
        "answers":  [
                        {
                            "text":  "hip-hop",
                            "points":  40
                        },
                        {
                            "text":  "hipster",
                            "points":  12
                        },
                        {
                            "text":  "hip-huggers",
                            "points":  9
                        },
                        {
                            "text":  "hip hip hooray",
                            "points":  6
                        },
                        {
                            "text":  "hippie",
                            "points":  6
                        },
                        {
                            "text":  "hip replacement",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  210423,
        "question":  "Name something a woman might swing.",
        "answers":  [
                        {
                            "text":  "her purse",
                            "points":  31
                        },
                        {
                            "text":  "a bat",
                            "points":  16
                        },
                        {
                            "text":  "a frying pan",
                            "points":  10
                        },
                        {
                            "text":  "her hair/ponytail",
                            "points":  10
                        },
                        {
                            "text":  "a golf club",
                            "points":  6
                        },
                        {
                            "text":  "hips/money maker",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  210424,
        "question":  "If love were really blind, name something women wouldn't bother doing to attract men.",
        "answers":  [
                        {
                            "text":  "put on makeup",
                            "points":  38
                        },
                        {
                            "text":  "dress sexy/cleavage",
                            "points":  13
                        },
                        {
                            "text":  "shave their legs",
                            "points":  9
                        },
                        {
                            "text":  "their hair",
                            "points":  8
                        },
                        {
                            "text":  "diet",
                            "points":  6
                        },
                        {
                            "text":  "get naked",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210425,
        "question":  "Name something people swallow by accident.",
        "answers":  [
                        {
                            "text":  "gum",
                            "points":  34
                        },
                        {
                            "text":  "coin",
                            "points":  16
                        },
                        {
                            "text":  "bug/spider",
                            "points":  15
                        },
                        {
                            "text":  "candy/lozenge",
                            "points":  5
                        },
                        {
                            "text":  "a tooth",
                            "points":  4
                        },
                        {
                            "text":  "needle/pin",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210426,
        "question":  "What present do you think Santa would like for Christmas?",
        "answers":  [
                        {
                            "text":  "rest/vacation",
                            "points":  32
                        },
                        {
                            "text":  "new clothes/suit",
                            "points":  18
                        },
                        {
                            "text":  "food/cookies",
                            "points":  16
                        },
                        {
                            "text":  "booze/whiskey",
                            "points":  4
                        },
                        {
                            "text":  "hot tail/mrs. claus",
                            "points":  4
                        },
                        {
                            "text":  "hand/foot warmers",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210427,
        "question":  "Name something that can go really wrong at a funeral.",
        "answers":  [
                        {
                            "text":  "drop casket/body",
                            "points":  32
                        },
                        {
                            "text":  "wrong corpse",
                            "points":  16
                        },
                        {
                            "text":  "not dead/sits up",
                            "points":  14
                        },
                        {
                            "text":  "mourners laugh",
                            "points":  7
                        },
                        {
                            "text":  "no body/missing",
                            "points":  4
                        },
                        {
                            "text":  "bad weather",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210428,
        "question":  "Besides the U.S., name a country that has the best music to dance to.",
        "answers":  [
                        {
                            "text":  "mexico",
                            "points":  25
                        },
                        {
                            "text":  "jamaica",
                            "points":  15
                        },
                        {
                            "text":  "brazil",
                            "points":  13
                        },
                        {
                            "text":  "england",
                            "points":  11
                        },
                        {
                            "text":  "spain",
                            "points":  6
                        },
                        {
                            "text":  "russia",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  210429,
        "question":  "Name a part of the body that could pop out.",
        "answers":  [
                        {
                            "text":  "my belly/button",
                            "points":  32
                        },
                        {
                            "text":  "my eyeball",
                            "points":  11
                        },
                        {
                            "text":  "my rack/nipple",
                            "points":  10
                        },
                        {
                            "text":  "my shoulder",
                            "points":  10
                        },
                        {
                            "text":  "my knee cap",
                            "points":  7
                        },
                        {
                            "text":  "my arm/elbow",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  210430,
        "question":  "Name something you hold in your hand that helps you relax.",
        "answers":  [
                        {
                            "text":  "a stiff drink",
                            "points":  22
                        },
                        {
                            "text":  "ball/stress ball",
                            "points":  21
                        },
                        {
                            "text":  "someone's hand",
                            "points":  13
                        },
                        {
                            "text":  "money",
                            "points":  8
                        },
                        {
                            "text":  "remote control",
                            "points":  6
                        },
                        {
                            "text":  "a good book",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  210431,
        "question":  "After a face-lift, name something a person gets to go along with their new young face.",
        "answers":  [
                        {
                            "text":  "duds/at forever 21",
                            "points":  23
                        },
                        {
                            "text":  "trendy hairdo",
                            "points":  13
                        },
                        {
                            "text":  "perky new jugs",
                            "points":  13
                        },
                        {
                            "text":  "young lover",
                            "points":  11
                        },
                        {
                            "text":  "smile/confidence",
                            "points":  8
                        },
                        {
                            "text":  "new makeup",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  210432,
        "question":  "Tell me a good present for a female stripper.",
        "answers":  [
                        {
                            "text":  "thong/lingerie",
                            "points":  27
                        },
                        {
                            "text":  "dollar bills",
                            "points":  24
                        },
                        {
                            "text":  "do-me heels",
                            "points":  8
                        },
                        {
                            "text":  "regular clothes",
                            "points":  7
                        },
                        {
                            "text":  "bikini",
                            "points":  3
                        },
                        {
                            "text":  "brazilian wax",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210433,
        "question":  "Name something of yours you look at and say, \"What was I thinking when I got that?\"",
        "answers":  [
                        {
                            "text":  "duds/hooker heels",
                            "points":  46
                        },
                        {
                            "text":  "tattoo/vanilla ice",
                            "points":  9
                        },
                        {
                            "text":  "hairstyle/wig",
                            "points":  6
                        },
                        {
                            "text":  "spouse/mate/ex",
                            "points":  4
                        },
                        {
                            "text":  "my psycho cat",
                            "points":  3
                        },
                        {
                            "text":  "car/truck",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210434,
        "question":  "Name something you might think about getting rid of because it's starting to make a lot of noise.",
        "answers":  [
                        {
                            "text":  "my car",
                            "points":  31
                        },
                        {
                            "text":  "my washer/dryer",
                            "points":  11
                        },
                        {
                            "text":  "my fan",
                            "points":  10
                        },
                        {
                            "text":  "my bed",
                            "points":  7
                        },
                        {
                            "text":  "my pet/rooster",
                            "points":  6
                        },
                        {
                            "text":  "my fridge",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  210435,
        "question":  "Name something that's described as low-hanging.",
        "answers":  [
                        {
                            "text":  "fruit",
                            "points":  19
                        },
                        {
                            "text":  "tree/branch",
                            "points":  16
                        },
                        {
                            "text":  "dude/his brovaries",
                            "points":  14
                        },
                        {
                            "text":  "saggy hooters",
                            "points":  9
                        },
                        {
                            "text":  "ceiling",
                            "points":  7
                        },
                        {
                            "text":  "pants",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  210436,
        "question":  "Name an animal whose tongue reminds you of Miley Cyrus.",
        "answers":  [
                        {
                            "text":  "giraffe",
                            "points":  24
                        },
                        {
                            "text":  "lizard/iguana",
                            "points":  11
                        },
                        {
                            "text":  "snake/python",
                            "points":  10
                        },
                        {
                            "text":  "anteater",
                            "points":  9
                        },
                        {
                            "text":  "dog",
                            "points":  9
                        },
                        {
                            "text":  "camel",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  210437,
        "question":  "Name something you keep on doing even though you know it's wrong.",
        "answers":  [
                        {
                            "text":  "pigging out",
                            "points":  22
                        },
                        {
                            "text":  "smoking",
                            "points":  15
                        },
                        {
                            "text":  "lying",
                            "points":  10
                        },
                        {
                            "text":  "speeding",
                            "points":  10
                        },
                        {
                            "text":  "drinking",
                            "points":  7
                        },
                        {
                            "text":  "gossiping",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  210438,
        "question":  "Name something that's long and wet.",
        "answers":  [
                        {
                            "text":  "fish/eel",
                            "points":  22
                        },
                        {
                            "text":  "noodle/spaghetti",
                            "points":  18
                        },
                        {
                            "text":  "a tongue",
                            "points":  11
                        },
                        {
                            "text":  "a hose",
                            "points":  9
                        },
                        {
                            "text":  "water snake/serpent",
                            "points":  4
                        },
                        {
                            "text":  "a river",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210439,
        "question":  "Name an \"S\" word that describes how dancing makes you feel.",
        "answers":  [
                        {
                            "text":  "sexy",
                            "points":  36
                        },
                        {
                            "text":  "stupid",
                            "points":  12
                        },
                        {
                            "text":  "silly",
                            "points":  10
                        },
                        {
                            "text":  "suave",
                            "points":  3
                        },
                        {
                            "text":  "scared",
                            "points":  3
                        },
                        {
                            "text":  "smooth",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210440,
        "question":  "If grandma ran away from home, name something she'd take with her.",
        "answers":  [
                        {
                            "text":  "money/purse",
                            "points":  25
                        },
                        {
                            "text":  "dentures",
                            "points":  11
                        },
                        {
                            "text":  "family photos",
                            "points":  9
                        },
                        {
                            "text":  "dog/pets",
                            "points":  8
                        },
                        {
                            "text":  "cane/walker",
                            "points":  7
                        },
                        {
                            "text":  "bible",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  210441,
        "question":  "Name a party game that might take a really long time to play at a nursing home.",
        "answers":  [
                        {
                            "text":  "twister",
                            "points":  22
                        },
                        {
                            "text":  "monopoly",
                            "points":  18
                        },
                        {
                            "text":  "charades",
                            "points":  10
                        },
                        {
                            "text":  "hide & seek",
                            "points":  7
                        },
                        {
                            "text":  "beer pong",
                            "points":  5
                        },
                        {
                            "text":  "bingo",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210442,
        "question":  "If you got a text message from God, name something God might tell you to stop doing.",
        "answers":  [
                        {
                            "text":  "worrying/stressing",
                            "points":  18
                        },
                        {
                            "text":  "cussing/lord's name",
                            "points":  17
                        },
                        {
                            "text":  "smoking cigs",
                            "points":  11
                        },
                        {
                            "text":  "drankin'/partyin'",
                            "points":  7
                        },
                        {
                            "text":  "lustfulness",
                            "points":  7
                        },
                        {
                            "text":  "arguing/complaining",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  210443,
        "question":  "Name a TV host who's almost as funny as Steve Harvey.",
        "answers":  [
                        {
                            "text":  "jimmy fallon",
                            "points":  16
                        },
                        {
                            "text":  "ellen degeneres",
                            "points":  14
                        },
                        {
                            "text":  "drew carey",
                            "points":  13
                        },
                        {
                            "text":  "jay leno",
                            "points":  10
                        },
                        {
                            "text":  "alex trebek",
                            "points":  7
                        },
                        {
                            "text":  "jimmy kimmel",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  210444,
        "question":  "Fill in the blank: It only hurts when I what?",
        "answers":  [
                        {
                            "text":  "laugh",
                            "points":  37
                        },
                        {
                            "text":  "breathe",
                            "points":  8
                        },
                        {
                            "text":  "bend down/bend it",
                            "points":  6
                        },
                        {
                            "text":  "cry",
                            "points":  5
                        },
                        {
                            "text":  "fall",
                            "points":  4
                        },
                        {
                            "text":  "pee",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210445,
        "question":  "Name a kind of bird you'd be shocked to see someone serve at Thanksgiving.",
        "answers":  [
                        {
                            "text":  "pigeon",
                            "points":  18
                        },
                        {
                            "text":  "crow",
                            "points":  12
                        },
                        {
                            "text":  "chicken/game hen",
                            "points":  12
                        },
                        {
                            "text":  "ostrich/emu",
                            "points":  8
                        },
                        {
                            "text":  "eagle",
                            "points":  7
                        },
                        {
                            "text":  "parakeet/parrot",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  210446,
        "question":  "Name an occupation whose members could say, \"I've seen it all.\"",
        "answers":  [
                        {
                            "text":  "dr./gyno/shrink",
                            "points":  23
                        },
                        {
                            "text":  "police officer",
                            "points":  20
                        },
                        {
                            "text":  "reporter/journalist",
                            "points":  8
                        },
                        {
                            "text":  "nurse",
                            "points":  5
                        },
                        {
                            "text":  "limo/cab driver",
                            "points":  4
                        },
                        {
                            "text":  "lawyer",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210447,
        "question":  "Birds do it. Bees do it. But name an animal that makes you wonder how they can possibly do it.",
        "answers":  [
                        {
                            "text":  "elephant",
                            "points":  16
                        },
                        {
                            "text":  "porcupine",
                            "points":  15
                        },
                        {
                            "text":  "turtle",
                            "points":  11
                        },
                        {
                            "text":  "snake",
                            "points":  8
                        },
                        {
                            "text":  "whale",
                            "points":  8
                        },
                        {
                            "text":  "fly",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  210448,
        "question":  "Name a kind of car you'd love to have your ex see you driving.",
        "answers":  [
                        {
                            "text":  "mercedes",
                            "points":  15
                        },
                        {
                            "text":  "bmw",
                            "points":  11
                        },
                        {
                            "text":  "corvette",
                            "points":  11
                        },
                        {
                            "text":  "porsche",
                            "points":  9
                        },
                        {
                            "text":  "jaguar",
                            "points":  8
                        },
                        {
                            "text":  "ferrari",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  210449,
        "question":  "Name a word that follows the word \"high.\"",
        "answers":  [
                        {
                            "text":  "high school",
                            "points":  21
                        },
                        {
                            "text":  "high noon",
                            "points":  13
                        },
                        {
                            "text":  "high five",
                            "points":  8
                        },
                        {
                            "text":  "high time/times",
                            "points":  7
                        },
                        {
                            "text":  "high tide",
                            "points":  6
                        },
                        {
                            "text":  "highway",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  210450,
        "question":  "Finish this expression: Dirty... what?",
        "answers":  [
                        {
                            "text":  "dancing",
                            "points":  18
                        },
                        {
                            "text":  "harry",
                            "points":  12
                        },
                        {
                            "text":  "dog/dawg",
                            "points":  10
                        },
                        {
                            "text":  "laundry",
                            "points":  8
                        },
                        {
                            "text":  "deeds",
                            "points":  7
                        },
                        {
                            "text":  "dozen",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  210451,
        "question":  "Name the worst thing that can happen to a guy on a first date.",
        "answers":  [
                        {
                            "text":  "no wallet/cash",
                            "points":  16
                        },
                        {
                            "text":  "gets stood up",
                            "points":  14
                        },
                        {
                            "text":  "pukes/during kiss",
                            "points":  8
                        },
                        {
                            "text":  "she bolts",
                            "points":  7
                        },
                        {
                            "text":  "farts like horse",
                            "points":  7
                        },
                        {
                            "text":  "pees/poos pants",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  210452,
        "question":  "So far, name something in your life you've only done once.",
        "answers":  [
                        {
                            "text":  "gotten married",
                            "points":  25
                        },
                        {
                            "text":  "skydiving",
                            "points":  7
                        },
                        {
                            "text":  "plane/chopper ride",
                            "points":  6
                        },
                        {
                            "text":  "had a baby",
                            "points":  5
                        },
                        {
                            "text":  "college/graduated",
                            "points":  4
                        },
                        {
                            "text":  "fallen in love",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210453,
        "question":  "We asked 100 married men... Fill in the blank: I'm addicted to my wife's ________.",
        "answers":  [
                        {
                            "text":  "hot face/eyes",
                            "points":  46
                        },
                        {
                            "text":  "booty",
                            "points":  19
                        },
                        {
                            "text":  "lovemaking",
                            "points":  14
                        },
                        {
                            "text":  "cooking",
                            "points":  12
                        },
                        {
                            "text":  "peculiar odor",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  210454,
        "question":  "Name something a woman might do to her moustache.",
        "answers":  [
                        {
                            "text":  "shave/trim it",
                            "points":  42
                        },
                        {
                            "text":  "wax it",
                            "points":  32
                        },
                        {
                            "text":  "pluck it",
                            "points":  13
                        },
                        {
                            "text":  "bleach it",
                            "points":  11
                        },
                        {
                            "text":  "nair it",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210455,
        "question":  "Fill in the blank: A jealous Mrs. Claus might say to Santa, \"It's either ________ or me.\"",
        "answers":  [
                        {
                            "text":  "rudolph/reindeer",
                            "points":  34
                        },
                        {
                            "text":  "those pesky elves",
                            "points":  33
                        },
                        {
                            "text":  "christmas/toys/kids",
                            "points":  15
                        },
                        {
                            "text":  "your skanky ho ho ho",
                            "points":  15
                        },
                        {
                            "text":  "cookies, fat boy",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210456,
        "question":  "Name something with teeth.",
        "answers":  [
                        {
                            "text":  "animals",
                            "points":  66
                        },
                        {
                            "text":  "people",
                            "points":  19
                        },
                        {
                            "text":  "a comb",
                            "points":  8
                        },
                        {
                            "text":  "a zipper",
                            "points":  4
                        },
                        {
                            "text":  "a saw",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210457,
        "question":  "We asked 100 women... Name something your dog does to let you know he doesn't like your new boyfriend.",
        "answers":  [
                        {
                            "text":  "growls/barks",
                            "points":  50
                        },
                        {
                            "text":  "bites him",
                            "points":  28
                        },
                        {
                            "text":  "pees/poos/on him",
                            "points":  14
                        },
                        {
                            "text":  "sits between us",
                            "points":  5
                        },
                        {
                            "text":  "hides",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210458,
        "question":  "Name something babies suck on that would be weird to see an adult sucking on.",
        "answers":  [
                        {
                            "text":  "pacifier/binky",
                            "points":  32
                        },
                        {
                            "text":  "thumb/finger",
                            "points":  25
                        },
                        {
                            "text":  "boobs/their mom's",
                            "points":  19
                        },
                        {
                            "text":  "bottle",
                            "points":  18
                        },
                        {
                            "text":  "their toes/foot",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  210459,
        "question":  "We asked 100 single women... Name something you'd do if your date took you to Chuck E. Cheese.",
        "answers":  [
                        {
                            "text":  "play games",
                            "points":  29
                        },
                        {
                            "text":  "leave/walk out",
                            "points":  28
                        },
                        {
                            "text":  "eat lots of pizza",
                            "points":  15
                        },
                        {
                            "text":  "dump him",
                            "points":  15
                        },
                        {
                            "text":  "laugh",
                            "points":  12
                        }
                    ]
    },
    {
        "id":  210460,
        "question":  "Name something fake that a man might give his girlfriend for her birthday.",
        "answers":  [
                        {
                            "text":  "jewelry/diamond",
                            "points":  82
                        },
                        {
                            "text":  "flowers",
                            "points":  9
                        },
                        {
                            "text":  "boobs",
                            "points":  3
                        },
                        {
                            "text":  "bag/purse",
                            "points":  2
                        },
                        {
                            "text":  "fur",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210461,
        "question":  "Name something a vampire might say he wants for Christmas.",
        "answers":  [
                        {
                            "text":  "blood/new victim",
                            "points":  78
                        },
                        {
                            "text":  "new fangs/fang file",
                            "points":  8
                        },
                        {
                            "text":  "new coffin",
                            "points":  5
                        },
                        {
                            "text":  "sunglasses/sun",
                            "points":  4
                        },
                        {
                            "text":  "new cape",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210462,
        "question":  "Name something an angry wife might use her husband's toothbrush to clean.",
        "answers":  [
                        {
                            "text":  "the toilet",
                            "points":  77
                        },
                        {
                            "text":  "the sink",
                            "points":  14
                        },
                        {
                            "text":  "the shower",
                            "points":  3
                        },
                        {
                            "text":  "car rims",
                            "points":  2
                        },
                        {
                            "text":  "the floor",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210463,
        "question":  "If your lover has a cold sore on their lip, where do you kiss them instead?",
        "answers":  [
                        {
                            "text":  "cheek",
                            "points":  52
                        },
                        {
                            "text":  "forehead",
                            "points":  25
                        },
                        {
                            "text":  "neck",
                            "points":  16
                        },
                        {
                            "text":  "ear",
                            "points":  3
                        },
                        {
                            "text":  "hair/top of head",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210464,
        "question":  "Name something that would be harder to do if you had a really fat tongue.",
        "answers":  [
                        {
                            "text":  "talk/clearly",
                            "points":  51
                        },
                        {
                            "text":  "lick/eat/swallow",
                            "points":  31
                        },
                        {
                            "text":  "kiss/tongue wrestle",
                            "points":  8
                        },
                        {
                            "text":  "whistle",
                            "points":  6
                        },
                        {
                            "text":  "sing",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210465,
        "question":  "We asked 100 married men... Name something you'd like to buy your wife a new pair of.",
        "answers":  [
                        {
                            "text":  "shoes/poke-me pumps",
                            "points":  24
                        },
                        {
                            "text":  "knockers",
                            "points":  22
                        },
                        {
                            "text":  "earrings",
                            "points":  22
                        },
                        {
                            "text":  "glasses/contacts",
                            "points":  22
                        },
                        {
                            "text":  "panties/thongs",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  210466,
        "question":  "Name a place a cheating husband might keep a pair of clean underwear for emergencies.",
        "answers":  [
                        {
                            "text":  "car/glove box",
                            "points":  71
                        },
                        {
                            "text":  "work/in desk",
                            "points":  20
                        },
                        {
                            "text":  "his briefcase",
                            "points":  2
                        },
                        {
                            "text":  "his pocket",
                            "points":  2
                        },
                        {
                            "text":  "his toolbox",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210467,
        "question":  "Name something the Easter Bunny would hate to run out of the night before Easter.",
        "answers":  [
                        {
                            "text":  "easter eggs",
                            "points":  63
                        },
                        {
                            "text":  "candy",
                            "points":  22
                        },
                        {
                            "text":  "egg dye",
                            "points":  8
                        },
                        {
                            "text":  "baskets",
                            "points":  2
                        },
                        {
                            "text":  "energy",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210468,
        "question":  "Name a part of your body a golf ball could get stuck in.",
        "answers":  [
                        {
                            "text":  "my piehole",
                            "points":  59
                        },
                        {
                            "text":  "my chili cannon",
                            "points":  22
                        },
                        {
                            "text":  "my armpit",
                            "points":  11
                        },
                        {
                            "text":  "cleavage",
                            "points":  3
                        },
                        {
                            "text":  "my belly button",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210469,
        "question":  "Fill in the blank: A woman gives a man a piece of her what?",
        "answers":  [
                        {
                            "text":  "mind",
                            "points":  48
                        },
                        {
                            "text":  "heart",
                            "points":  41
                        },
                        {
                            "text":  "pie",
                            "points":  3
                        },
                        {
                            "text":  "self",
                            "points":  3
                        },
                        {
                            "text":  "soul",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210470,
        "question":  "Name a reason a man might suspect he's turning into a beaver.",
        "answers":  [
                        {
                            "text":  "grows buck teeth",
                            "points":  48
                        },
                        {
                            "text":  "chews/eats wood",
                            "points":  24
                        },
                        {
                            "text":  "grows a tail",
                            "points":  18
                        },
                        {
                            "text":  "builds a dam",
                            "points":  4
                        },
                        {
                            "text":  "getting furry",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210471,
        "question":  "We asked 100 women... Name something of yours that might come off during a make out session.",
        "answers":  [
                        {
                            "text":  "duds/bra/shoes",
                            "points":  45
                        },
                        {
                            "text":  "lipstick/makeup",
                            "points":  34
                        },
                        {
                            "text":  "glasses",
                            "points":  8
                        },
                        {
                            "text":  "jewelry/tongue ring",
                            "points":  8
                        },
                        {
                            "text":  "hair tie",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210472,
        "question":  "Fill in the blank: A wife tells her husband, \"Roses are red. Violets are blue. If you're caught cheating, I will ______ you.\"",
        "answers":  [
                        {
                            "text":  "kill & bury",
                            "points":  44
                        },
                        {
                            "text":  "leave/divorce/sue",
                            "points":  32
                        },
                        {
                            "text":  "beat/kick",
                            "points":  9
                        },
                        {
                            "text":  "castrate",
                            "points":  8
                        },
                        {
                            "text":  "stab/shoot",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210473,
        "question":  "We asked 100 men... Name something you'd like to borrow from Steve Harvey to impress the ladies.",
        "answers":  [
                        {
                            "text":  "suit/stylin' duds",
                            "points":  43
                        },
                        {
                            "text":  "big bucks/wallet",
                            "points":  21
                        },
                        {
                            "text":  "humor/personality",
                            "points":  21
                        },
                        {
                            "text":  "bushy stache",
                            "points":  6
                        },
                        {
                            "text":  "his rolls/car",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  210474,
        "question":  "They're years apart, but name something Justin Bieber has in common with Donald Trump.",
        "answers":  [
                        {
                            "text":  "ballin'/loaded",
                            "points":  37
                        },
                        {
                            "text":  "weird hair",
                            "points":  31
                        },
                        {
                            "text":  "ego/douchey",
                            "points":  18
                        },
                        {
                            "text":  "famous",
                            "points":  6
                        },
                        {
                            "text":  "they're dudes",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  210475,
        "question":  "We asked 100 women... If you really did think like a man, what would you be thinking about a lot?",
        "answers":  [
                        {
                            "text":  "sex/chicks/jugs",
                            "points":  84
                        },
                        {
                            "text":  "business/work",
                            "points":  3
                        },
                        {
                            "text":  "the future",
                            "points":  2
                        },
                        {
                            "text":  "beer",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210476,
        "question":  "Name something women do more of at a party than men do.",
        "answers":  [
                        {
                            "text":  "talk/gossip",
                            "points":  65
                        },
                        {
                            "text":  "flirt",
                            "points":  16
                        },
                        {
                            "text":  "dance",
                            "points":  7
                        },
                        {
                            "text":  "drink",
                            "points":  4
                        },
                        {
                            "text":  "use bathroom",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210477,
        "question":  "Name something you'd hate to wake up on Christmas morning to see the dog doing under the tree.",
        "answers":  [
                        {
                            "text":  "taking dump/whiz",
                            "points":  63
                        },
                        {
                            "text":  "open'g/chew'g gifts",
                            "points":  25
                        },
                        {
                            "text":  "ruin tree/eat tinsel",
                            "points":  4
                        },
                        {
                            "text":  "eat'g people food",
                            "points":  2
                        },
                        {
                            "text":  "humping/the tree",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210478,
        "question":  "To save time in the morning, name something you might do while in the shower.",
        "answers":  [
                        {
                            "text":  "brush my teeth",
                            "points":  51
                        },
                        {
                            "text":  "shave/legs",
                            "points":  36
                        },
                        {
                            "text":  "pee/on myself",
                            "points":  5
                        },
                        {
                            "text":  "skip washing hair",
                            "points":  2
                        },
                        {
                            "text":  "meditate",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210479,
        "question":  "When a man grunts like a caveman, what does it usually mean he wants?",
        "answers":  [
                        {
                            "text":  "food/juicy ribeye",
                            "points":  50
                        },
                        {
                            "text":  "some va-jay-jay",
                            "points":  31
                        },
                        {
                            "text":  "to drop a deuce",
                            "points":  5
                        },
                        {
                            "text":  "a beer",
                            "points":  5
                        },
                        {
                            "text":  "to be left alone",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  210480,
        "question":  "Name a place you might hear someone say, \"I love those buns.\"",
        "answers":  [
                        {
                            "text":  "restaurant/deli",
                            "points":  31
                        },
                        {
                            "text":  "bakery/donut shop",
                            "points":  29
                        },
                        {
                            "text":  "the gym",
                            "points":  16
                        },
                        {
                            "text":  "beach",
                            "points":  11
                        },
                        {
                            "text":  "strip joint",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  210481,
        "question":  "Name something Jay Z and Beyoncé might count when they're trying to fall asleep.",
        "answers":  [
                        {
                            "text":  "their money",
                            "points":  64
                        },
                        {
                            "text":  "hit records/grammys",
                            "points":  14
                        },
                        {
                            "text":  "sheep",
                            "points":  11
                        },
                        {
                            "text":  "music notes",
                            "points":  3
                        },
                        {
                            "text":  "\"their blessings\"",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210482,
        "question":  "Name a place people spend the night and wish for the comforts of home.",
        "answers":  [
                        {
                            "text":  "hotel/motel",
                            "points":  56
                        },
                        {
                            "text":  "outside/camp/tent",
                            "points":  28
                        },
                        {
                            "text":  "jail/with jim-bob",
                            "points":  7
                        },
                        {
                            "text":  "airport",
                            "points":  2
                        },
                        {
                            "text":  "relative's home",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210483,
        "question":  "Name something that only takes two people to do, but it's even more fun if more people join in.",
        "answers":  [
                        {
                            "text":  "games/marco polo",
                            "points":  55
                        },
                        {
                            "text":  "sports/basketball",
                            "points":  15
                        },
                        {
                            "text":  "bow chika wow wow",
                            "points":  11
                        },
                        {
                            "text":  "dance",
                            "points":  10
                        },
                        {
                            "text":  "throw a party",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210484,
        "question":  "Name something snakes do that people don't.",
        "answers":  [
                        {
                            "text":  "slither",
                            "points":  53
                        },
                        {
                            "text":  "hiss",
                            "points":  14
                        },
                        {
                            "text":  "eat animal whole/rat",
                            "points":  14
                        },
                        {
                            "text":  "shed entire skin",
                            "points":  9
                        },
                        {
                            "text":  "bite/with venom",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  210485,
        "question":  "We asked 100 single women... Name something your man must agree to get before you'll marry him.",
        "answers":  [
                        {
                            "text":  "a job",
                            "points":  48
                        },
                        {
                            "text":  "a ring",
                            "points":  41
                        },
                        {
                            "text":  "checkup/std test",
                            "points":  2
                        },
                        {
                            "text":  "a vasectomy",
                            "points":  2
                        },
                        {
                            "text":  "a haircut",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210486,
        "question":  "Name a blood-sucking creature that looks at a nudist like they're a buffet.",
        "answers":  [
                        {
                            "text":  "mosquito",
                            "points":  45
                        },
                        {
                            "text":  "vampire",
                            "points":  22
                        },
                        {
                            "text":  "leech",
                            "points":  22
                        },
                        {
                            "text":  "bat",
                            "points":  4
                        },
                        {
                            "text":  "tick",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210487,
        "question":  "We asked 100 single men... You're at a bar with a date and a really hot girl flirts with you. What do you do?",
        "answers":  [
                        {
                            "text":  "chat/flirt/smile",
                            "points":  37
                        },
                        {
                            "text":  "buy her a drink",
                            "points":  22
                        },
                        {
                            "text":  "ignore/\"get lost\"",
                            "points":  15
                        },
                        {
                            "text":  "dump date/do her",
                            "points":  13
                        },
                        {
                            "text":  "swap numbers",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  210488,
        "question":  "We asked 100 married men... Name something you squeeze that reminds you of your wife's behind.",
        "answers":  [
                        {
                            "text":  "pillow",
                            "points":  26
                        },
                        {
                            "text":  "ball/stress ball",
                            "points":  20
                        },
                        {
                            "text":  "wet sponge",
                            "points":  19
                        },
                        {
                            "text":  "boobs",
                            "points":  17
                        },
                        {
                            "text":  "fruit",
                            "points":  13
                        }
                    ]
    },
    {
        "id":  210489,
        "question":  "Besides a ball, name something you can catch.",
        "answers":  [
                        {
                            "text":  "a cold/disease",
                            "points":  79
                        },
                        {
                            "text":  "a frisbee",
                            "points":  8
                        },
                        {
                            "text":  "fish",
                            "points":  3
                        },
                        {
                            "text":  "a bouquet",
                            "points":  2
                        },
                        {
                            "text":  "a bus",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210490,
        "question":  "Name something a man starts wearing that makes his wife suspect he's cheating on her.",
        "answers":  [
                        {
                            "text":  "cologne",
                            "points":  68
                        },
                        {
                            "text":  "clean/nice clothes",
                            "points":  19
                        },
                        {
                            "text":  "toupee",
                            "points":  3
                        },
                        {
                            "text":  "condom/weenie wrap",
                            "points":  2
                        },
                        {
                            "text":  "bling/jewelry",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210491,
        "question":  "Name something a 50-foot woman might take on a date that's extra large.",
        "answers":  [
                        {
                            "text":  "purse",
                            "points":  63
                        },
                        {
                            "text":  "shoes/clothes",
                            "points":  18
                        },
                        {
                            "text":  "rubbers",
                            "points":  5
                        },
                        {
                            "text":  "50-foot dude",
                            "points":  5
                        },
                        {
                            "text":  "ladder for the guy",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210492,
        "question":  "Name something sexy that can be edible.",
        "answers":  [
                        {
                            "text":  "undies/lingerie",
                            "points":  55
                        },
                        {
                            "text":  "banana/fruit",
                            "points":  21
                        },
                        {
                            "text":  "chocolate/candy",
                            "points":  12
                        },
                        {
                            "text":  "whipped cream",
                            "points":  3
                        },
                        {
                            "text":  "ice cream/popsicle",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210493,
        "question":  "Name something of his wife's a cheapskate might give to his mistress as a gift.",
        "answers":  [
                        {
                            "text":  "her jewelry/watch",
                            "points":  51
                        },
                        {
                            "text":  "her clothes",
                            "points":  28
                        },
                        {
                            "text":  "her flowers",
                            "points":  7
                        },
                        {
                            "text":  "her perfume",
                            "points":  6
                        },
                        {
                            "text":  "her vibrator/toy",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210494,
        "question":  "Name something you wouldn't want an elephant to do to you.",
        "answers":  [
                        {
                            "text":  "step on/trample me",
                            "points":  47
                        },
                        {
                            "text":  "sit on me",
                            "points":  28
                        },
                        {
                            "text":  "spray/sneeze on me",
                            "points":  9
                        },
                        {
                            "text":  "whiz/dump on me",
                            "points":  8
                        },
                        {
                            "text":  "make love to me",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210495,
        "question":  "Name a part of your body where an insect could be living.",
        "answers":  [
                        {
                            "text":  "hair/body hair",
                            "points":  41
                        },
                        {
                            "text":  "ear",
                            "points":  40
                        },
                        {
                            "text":  "stomach/intestine",
                            "points":  7
                        },
                        {
                            "text":  "arm/pits",
                            "points":  4
                        },
                        {
                            "text":  "brain",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210496,
        "question":  "Name a word rhyming with \"chimp\" that you hope doesn't describe you.",
        "answers":  [
                        {
                            "text":  "wimp",
                            "points":  30
                        },
                        {
                            "text":  "blimp",
                            "points":  26
                        },
                        {
                            "text":  "limp",
                            "points":  17
                        },
                        {
                            "text":  "pimp",
                            "points":  15
                        },
                        {
                            "text":  "shrimp",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  210497,
        "question":  "Name something you'd be shocked to see grandma riding.",
        "answers":  [
                        {
                            "text":  "harley/motorcycle",
                            "points":  41
                        },
                        {
                            "text":  "gramps/other dude",
                            "points":  22
                        },
                        {
                            "text":  "horse/buck'g bronco",
                            "points":  19
                        },
                        {
                            "text":  "bicycle",
                            "points":  6
                        },
                        {
                            "text":  "bull/mechanical",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210498,
        "question":  "Name something that might cause you to panic if you couldn't get it open.",
        "answers":  [
                        {
                            "text":  "a door",
                            "points":  76
                        },
                        {
                            "text":  "medicine/viagra",
                            "points":  7
                        },
                        {
                            "text":  "my zipper",
                            "points":  4
                        },
                        {
                            "text":  "seat belt/car seat",
                            "points":  2
                        },
                        {
                            "text":  "wallet/purse",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210499,
        "question":  "If a man is in training for marriage, name a word or phrase he should practice saying.",
        "answers":  [
                        {
                            "text":  "yes, dear/agree",
                            "points":  54
                        },
                        {
                            "text":  "sorry/my fault",
                            "points":  19
                        },
                        {
                            "text":  "i love you",
                            "points":  8
                        },
                        {
                            "text":  "i do",
                            "points":  8
                        },
                        {
                            "text":  "thank you",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210500,
        "question":  "We asked 100 married women... Unlike most husbands, name someone on TV who would listen when you talk.",
        "answers":  [
                        {
                            "text":  "dr. phil",
                            "points":  45
                        },
                        {
                            "text":  "dr. oz",
                            "points":  15
                        },
                        {
                            "text":  "oprah",
                            "points":  14
                        },
                        {
                            "text":  "ellen",
                            "points":  11
                        },
                        {
                            "text":  "steve harvey",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  210501,
        "question":  "We asked 100 women... Name something new you'd get that you'd rub in the face of an ex-boyfriend.",
        "answers":  [
                        {
                            "text":  "new stud/a hubby",
                            "points":  38
                        },
                        {
                            "text":  "ring/blinding bling",
                            "points":  27
                        },
                        {
                            "text":  "smokin' hot car",
                            "points":  16
                        },
                        {
                            "text":  "mega melons",
                            "points":  7
                        },
                        {
                            "text":  "lingerie/clothes",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210502,
        "question":  "Name a phrase that begins with \"Hold your...\"",
        "answers":  [
                        {
                            "text":  "...horses",
                            "points":  37
                        },
                        {
                            "text":  "...breath",
                            "points":  20
                        },
                        {
                            "text":  "...tongue",
                            "points":  14
                        },
                        {
                            "text":  "...hand",
                            "points":  14
                        },
                        {
                            "text":  "...head up",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  210503,
        "question":  "Name a fruit a guy would have a hard time stealing by putting it in his underwear.",
        "answers":  [
                        {
                            "text":  "melon/watermelon",
                            "points":  43
                        },
                        {
                            "text":  "banana",
                            "points":  25
                        },
                        {
                            "text":  "pineapple",
                            "points":  16
                        },
                        {
                            "text":  "apple",
                            "points":  3
                        },
                        {
                            "text":  "orange",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210504,
        "question":  "Fill in the blank: At the stripper exercise class, they touch their toes with their ________.",
        "answers":  [
                        {
                            "text":  "fingers/hands",
                            "points":  33
                        },
                        {
                            "text":  "nose",
                            "points":  18
                        },
                        {
                            "text":  "head/hair",
                            "points":  17
                        },
                        {
                            "text":  "boobs/nipples",
                            "points":  13
                        },
                        {
                            "text":  "tongue/lips",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  210505,
        "question":  "If you won the lottery, name something you'd buy for every member of your family.",
        "answers":  [
                        {
                            "text":  "car/'92 geo metro",
                            "points":  46
                        },
                        {
                            "text":  "house",
                            "points":  33
                        },
                        {
                            "text":  "trip/vacation",
                            "points":  4
                        },
                        {
                            "text":  "nice meal/steak",
                            "points":  3
                        },
                        {
                            "text":  "stocks/bonds",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210506,
        "question":  "Name something you wouldn't want to see in the stream that you just drank from.",
        "answers":  [
                        {
                            "text":  "float'g doody/pee",
                            "points":  43
                        },
                        {
                            "text":  "body/dead animal",
                            "points":  31
                        },
                        {
                            "text":  "gator/critter",
                            "points":  8
                        },
                        {
                            "text":  "glass/cups",
                            "points":  4
                        },
                        {
                            "text":  "condom/dink sling",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210507,
        "question":  "We asked 100 women... Name something the Pillsbury Doughboy and your man have in common.",
        "answers":  [
                        {
                            "text":  "chubby/love food",
                            "points":  64
                        },
                        {
                            "text":  "cute",
                            "points":  13
                        },
                        {
                            "text":  "their laugh/giggle",
                            "points":  5
                        },
                        {
                            "text":  "ticklish",
                            "points":  3
                        },
                        {
                            "text":  "cuddly",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210508,
        "question":  "Name a place a ghost hunter goes looking for ghosts.",
        "answers":  [
                        {
                            "text":  "haunted house",
                            "points":  56
                        },
                        {
                            "text":  "cemetery",
                            "points":  17
                        },
                        {
                            "text":  "forest",
                            "points":  6
                        },
                        {
                            "text":  "hospital/asylum",
                            "points":  5
                        },
                        {
                            "text":  "castle",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210509,
        "question":  "We asked 100 single women... What would you say if a date asked you if your breasts were real?",
        "answers":  [
                        {
                            "text":  "yes!/of course!",
                            "points":  50
                        },
                        {
                            "text":  "wanna find out?",
                            "points":  12
                        },
                        {
                            "text":  "what do you think?",
                            "points":  10
                        },
                        {
                            "text":  "your man boobs real?",
                            "points":  9
                        },
                        {
                            "text":  "you'll never know!",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  210510,
        "question":  "Name something that starts with the word \"pine.\"",
        "answers":  [
                        {
                            "text":  "pinecone",
                            "points":  40
                        },
                        {
                            "text":  "pine tree",
                            "points":  24
                        },
                        {
                            "text":  "pine needle",
                            "points":  9
                        },
                        {
                            "text":  "pine-sol",
                            "points":  8
                        },
                        {
                            "text":  "pineapple",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  210511,
        "question":  "We asked 100 married men... What's the first thing you do when you realize your wife is mad at you?",
        "answers":  [
                        {
                            "text":  "buy flowers/gift",
                            "points":  23
                        },
                        {
                            "text":  "leave/ignore her",
                            "points":  21
                        },
                        {
                            "text":  "be quiet/listen",
                            "points":  18
                        },
                        {
                            "text":  "apologize",
                            "points":  15
                        },
                        {
                            "text":  "ask/wonder why",
                            "points":  11
                        }
                    ]
    },
    {
        "id":  210512,
        "question":  "We asked 100 married men... Name your wife's most unappealing habit.",
        "answers":  [
                        {
                            "text":  "nagging",
                            "points":  44
                        },
                        {
                            "text":  "snoring",
                            "points":  13
                        },
                        {
                            "text":  "smoking",
                            "points":  11
                        },
                        {
                            "text":  "talk'g about work",
                            "points":  11
                        },
                        {
                            "text":  "cussing",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  210513,
        "question":  "Name something people have a hard time controlling.",
        "answers":  [
                        {
                            "text":  "temper/anger",
                            "points":  53
                        },
                        {
                            "text":  "weight/eating",
                            "points":  12
                        },
                        {
                            "text":  "spending money",
                            "points":  12
                        },
                        {
                            "text":  "mouth/language",
                            "points":  5
                        },
                        {
                            "text":  "bladder",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210514,
        "question":  "What one weapon would you choose to fight off a pack of zombies?",
        "answers":  [
                        {
                            "text":  "gun/machine gun",
                            "points":  51
                        },
                        {
                            "text":  "sword",
                            "points":  13
                        },
                        {
                            "text":  "knife/machete",
                            "points":  12
                        },
                        {
                            "text":  "flamethrower",
                            "points":  4
                        },
                        {
                            "text":  "tank",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210515,
        "question":  "Name a traffic sign a woman might answer when a man asks, \"What's your sign?\"",
        "answers":  [
                        {
                            "text":  "stop/red light",
                            "points":  52
                        },
                        {
                            "text":  "yield",
                            "points":  20
                        },
                        {
                            "text":  "do not enter",
                            "points":  4
                        },
                        {
                            "text":  "danger/curves ahead",
                            "points":  4
                        },
                        {
                            "text":  "slippery when wet",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210516,
        "question":  "Name a word that rhymes with \"fudge.\"",
        "answers":  [
                        {
                            "text":  "budge",
                            "points":  25
                        },
                        {
                            "text":  "nudge",
                            "points":  22
                        },
                        {
                            "text":  "judge",
                            "points":  17
                        },
                        {
                            "text":  "pudge",
                            "points":  10
                        },
                        {
                            "text":  "sludge",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  210517,
        "question":  "Name something you wouldn't want someone to stick you with.",
        "answers":  [
                        {
                            "text":  "the bill/debt",
                            "points":  28
                        },
                        {
                            "text":  "needle/pin",
                            "points":  28
                        },
                        {
                            "text":  "knife/sword",
                            "points":  17
                        },
                        {
                            "text":  "kid/babysitting",
                            "points":  5
                        },
                        {
                            "text":  "pet/dog",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210518,
        "question":  "Name nicer words a wife could use to tell her husband to shut up.",
        "answers":  [
                        {
                            "text":  "be quiet",
                            "points":  44
                        },
                        {
                            "text":  "hush",
                            "points":  16
                        },
                        {
                            "text":  "shh...",
                            "points":  8
                        },
                        {
                            "text":  "zip it",
                            "points":  7
                        },
                        {
                            "text":  "shush",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  210519,
        "question":  "When a husband asks his wife, \"What did you do today, honey?\", name something she leaves out.",
        "answers":  [
                        {
                            "text":  "shopped/spent $",
                            "points":  25
                        },
                        {
                            "text":  "cheated/flirted",
                            "points":  21
                        },
                        {
                            "text":  "watched tv/soaps",
                            "points":  13
                        },
                        {
                            "text":  "peed/had a nice poo",
                            "points":  11
                        },
                        {
                            "text":  "took a nap/slept",
                            "points":  10
                        }
                    ]
    },
    {
        "id":  210520,
        "question":  "Name something you wouldn't want to use after everyone else has used it first.",
        "answers":  [
                        {
                            "text":  "toothbrush",
                            "points":  40
                        },
                        {
                            "text":  "toilet/bathroom",
                            "points":  18
                        },
                        {
                            "text":  "tissue/toilet paper",
                            "points":  8
                        },
                        {
                            "text":  "hairbrush",
                            "points":  7
                        },
                        {
                            "text":  "cup/glass",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  210521,
        "question":  "Name someone you'd hate to see make a surprise visit to your house.",
        "answers":  [
                        {
                            "text":  "my in-laws",
                            "points":  33
                        },
                        {
                            "text":  "the po-po",
                            "points":  22
                        },
                        {
                            "text":  "the irs",
                            "points":  8
                        },
                        {
                            "text":  "my boss",
                            "points":  8
                        },
                        {
                            "text":  "my psycho ex",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  210522,
        "question":  "Give me a word that rhymes with \"zipper.\"",
        "answers":  [
                        {
                            "text":  "flipper",
                            "points":  21
                        },
                        {
                            "text":  "dipper",
                            "points":  16
                        },
                        {
                            "text":  "tipper",
                            "points":  14
                        },
                        {
                            "text":  "clipper",
                            "points":  14
                        },
                        {
                            "text":  "ripper",
                            "points":  13
                        }
                    ]
    },
    {
        "id":  210523,
        "question":  "Name something a person might be referring to when they ask \"Is it firm?\"",
        "answers":  [
                        {
                            "text":  "fruit/vegetable",
                            "points":  26
                        },
                        {
                            "text":  "mattress/bed",
                            "points":  22
                        },
                        {
                            "text":  "a booty",
                            "points":  12
                        },
                        {
                            "text":  "deal/price/offer",
                            "points":  10
                        },
                        {
                            "text":  "chick's boobage",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  210524,
        "question":  "Name something you have that you hope to someday get rid of.",
        "answers":  [
                        {
                            "text":  "excess weight",
                            "points":  21
                        },
                        {
                            "text":  "bills/debt",
                            "points":  20
                        },
                        {
                            "text":  "car",
                            "points":  15
                        },
                        {
                            "text":  "junk/trash",
                            "points":  10
                        },
                        {
                            "text":  "spouse/mate",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  210525,
        "question":  "Name something people are dying to get into.",
        "answers":  [
                        {
                            "text":  "cemetery/casket",
                            "points":  42
                        },
                        {
                            "text":  "heaven",
                            "points":  9
                        },
                        {
                            "text":  "a club",
                            "points":  8
                        },
                        {
                            "text":  "lover's pants",
                            "points":  7
                        },
                        {
                            "text":  "stock market",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  210526,
        "question":  "What's the worst thing to accidentally swallow?",
        "answers":  [
                        {
                            "text":  "bug/fly",
                            "points":  43
                        },
                        {
                            "text":  "coin/money",
                            "points":  7
                        },
                        {
                            "text":  "poison",
                            "points":  6
                        },
                        {
                            "text":  "mouthwash",
                            "points":  5
                        },
                        {
                            "text":  "gum",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210527,
        "question":  "Name something you wish was fat-free.",
        "answers":  [
                        {
                            "text":  "chocolate/candy",
                            "points":  20
                        },
                        {
                            "text":  "ice cream",
                            "points":  18
                        },
                        {
                            "text":  "cake/cupcakes",
                            "points":  14
                        },
                        {
                            "text":  "pizza",
                            "points":  7
                        },
                        {
                            "text":  "burger/big mac",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  210528,
        "question":  "We asked 100 women... Name a kind of fish that describes your man in the bedroom.",
        "answers":  [
                        {
                            "text":  "shark/hammerhead",
                            "points":  32
                        },
                        {
                            "text":  "salmon",
                            "points":  9
                        },
                        {
                            "text":  "dead fish",
                            "points":  7
                        },
                        {
                            "text":  "goldfish",
                            "points":  7
                        },
                        {
                            "text":  "flounder",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  210529,
        "question":  "Tell us your worst habit.",
        "answers":  [
                        {
                            "text":  "smoking",
                            "points":  25
                        },
                        {
                            "text":  "biting my nails",
                            "points":  21
                        },
                        {
                            "text":  "picking my nose",
                            "points":  8
                        },
                        {
                            "text":  "overeating/sweets",
                            "points":  4
                        },
                        {
                            "text":  "procrastinating",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210530,
        "question":  "Name someone you wouldn't want to run into at a nude beach.",
        "answers":  [
                        {
                            "text":  "my mom/dad",
                            "points":  33
                        },
                        {
                            "text":  "my boss/coworker",
                            "points":  10
                        },
                        {
                            "text":  "my spouse/mate",
                            "points":  6
                        },
                        {
                            "text":  "my friend/neighbor",
                            "points":  5
                        },
                        {
                            "text":  "my ex",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  210531,
        "question":  "Name a part of a person's body that might be really narrow.",
        "answers":  [
                        {
                            "text":  "nose",
                            "points":  17
                        },
                        {
                            "text":  "wrist",
                            "points":  13
                        },
                        {
                            "text":  "waistline",
                            "points":  13
                        },
                        {
                            "text":  "ankle",
                            "points":  8
                        },
                        {
                            "text":  "mind",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  210532,
        "question":  "Name something people have two of but one is bigger than the other.",
        "answers":  [
                        {
                            "text":  "feet",
                            "points":  27
                        },
                        {
                            "text":  "boobs",
                            "points":  12
                        },
                        {
                            "text":  "eyes",
                            "points":  7
                        },
                        {
                            "text":  "toes",
                            "points":  5
                        },
                        {
                            "text":  "legs",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  210533,
        "question":  "Name a kind of bird you'd be shocked to see eating from your bird feeder.",
        "answers":  [
                        {
                            "text":  "eagle",
                            "points":  23
                        },
                        {
                            "text":  "ostrich/emu",
                            "points":  10
                        },
                        {
                            "text":  "parrot/macaw",
                            "points":  9
                        },
                        {
                            "text":  "flamingo",
                            "points":  7
                        },
                        {
                            "text":  "vulture/buzzard",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  210534,
        "question":  "Besides a car, name something else you got that turned out to be a lemon.",
        "answers":  [
                        {
                            "text":  "spouse/mate/ex",
                            "points":  18
                        },
                        {
                            "text":  "computer/laptop",
                            "points":  13
                        },
                        {
                            "text":  "house/trailer",
                            "points":  9
                        },
                        {
                            "text":  "a lemon/fruit",
                            "points":  8
                        },
                        {
                            "text":  "tv",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  210535,
        "question":  "Give me a word or phrase that contains the word \"band.\"",
        "answers":  [
                        {
                            "text":  "rubber band",
                            "points":  17
                        },
                        {
                            "text":  "rock band",
                            "points":  15
                        },
                        {
                            "text":  "wedding band",
                            "points":  7
                        },
                        {
                            "text":  "band-aid",
                            "points":  6
                        },
                        {
                            "text":  "bandwagon",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  210536,
        "question":  "Name an activity that's easier to do when it's windy.",
        "answers":  [
                        {
                            "text":  "fly a kite",
                            "points":  89
                        },
                        {
                            "text":  "sail",
                            "points":  7
                        },
                        {
                            "text":  "surf",
                            "points":  2
                        },
                        {
                            "text":  "air-dry clothes",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210537,
        "question":  "Name something an athlete might break.",
        "answers":  [
                        {
                            "text":  "bone/body part",
                            "points":  80
                        },
                        {
                            "text":  "a record",
                            "points":  16
                        },
                        {
                            "text":  "bat/equipment",
                            "points":  2
                        },
                        {
                            "text":  "rules/the law",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210538,
        "question":  "We asked 100 married women... Name something you might ask your spouse to do to your back.",
        "answers":  [
                        {
                            "text":  "rub/scratch it",
                            "points":  73
                        },
                        {
                            "text":  "wash it",
                            "points":  18
                        },
                        {
                            "text":  "kiss it",
                            "points":  5
                        },
                        {
                            "text":  "look for/pop zits",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210539,
        "question":  "Name something your dog might do the same time of day as you do.",
        "answers":  [
                        {
                            "text":  "sleep/wake up",
                            "points":  50
                        },
                        {
                            "text":  "eat",
                            "points":  30
                        },
                        {
                            "text":  "pee/lay cable",
                            "points":  17
                        },
                        {
                            "text":  "walk/go out",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210540,
        "question":  "Name something that might get rained out.",
        "answers":  [
                        {
                            "text":  "sporting event",
                            "points":  84
                        },
                        {
                            "text":  "picnic/bbq",
                            "points":  8
                        },
                        {
                            "text":  "parade",
                            "points":  5
                        },
                        {
                            "text":  "outdoor concert",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210541,
        "question":  "Name something kids line up for at school.",
        "answers":  [
                        {
                            "text":  "lunch/snack",
                            "points":  78
                        },
                        {
                            "text":  "recess",
                            "points":  12
                        },
                        {
                            "text":  "fire drill",
                            "points":  5
                        },
                        {
                            "text":  "school bus",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210542,
        "question":  "Name the most useful body part that begins with the letter \"L.\"",
        "answers":  [
                        {
                            "text":  "legs",
                            "points":  77
                        },
                        {
                            "text":  "lips",
                            "points":  12
                        },
                        {
                            "text":  "lungs",
                            "points":  6
                        },
                        {
                            "text":  "liver",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210543,
        "question":  "Name something dirty that ends up under a teenager's bed.",
        "answers":  [
                        {
                            "text":  "clothes/shoes",
                            "points":  76
                        },
                        {
                            "text":  "dishes/plates",
                            "points":  10
                        },
                        {
                            "text":  "porn/magazines",
                            "points":  10
                        },
                        {
                            "text":  "kleenex/tissues",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210544,
        "question":  "We asked 100 married men... Name a place you'd hate to find another man's underwear.",
        "answers":  [
                        {
                            "text":  "our house",
                            "points":  75
                        },
                        {
                            "text":  "wife's car",
                            "points":  14
                        },
                        {
                            "text":  "wife's purse",
                            "points":  8
                        },
                        {
                            "text":  "on my wife",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210545,
        "question":  "If Santa applied for a summer job as an exotic dancer, name a reason he wouldn't get in.",
        "answers":  [
                        {
                            "text":  "too fat/belly",
                            "points":  74
                        },
                        {
                            "text":  "too hairy/beard",
                            "points":  20
                        },
                        {
                            "text":  "too old",
                            "points":  3
                        },
                        {
                            "text":  "too jolly",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210546,
        "question":  "Name something people try to kill by using poison.",
        "answers":  [
                        {
                            "text":  "rats/mice",
                            "points":  68
                        },
                        {
                            "text":  "bugs/ants",
                            "points":  13
                        },
                        {
                            "text":  "weeds",
                            "points":  11
                        },
                        {
                            "text":  "people/cheat'g mate",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  210547,
        "question":  "Name a term used in a game of bowling.",
        "answers":  [
                        {
                            "text":  "strike",
                            "points":  67
                        },
                        {
                            "text":  "spare",
                            "points":  27
                        },
                        {
                            "text":  "pin",
                            "points":  3
                        },
                        {
                            "text":  "turkey",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210548,
        "question":  "We asked 100 married men... Tell us in a whisper, \"My wife's bottom resembles a sack of\" what?",
        "answers":  [
                        {
                            "text":  "potatoes",
                            "points":  65
                        },
                        {
                            "text":  "balls",
                            "points":  12
                        },
                        {
                            "text":  "peaches",
                            "points":  12
                        },
                        {
                            "text":  "rocks",
                            "points":  10
                        }
                    ]
    },
    {
        "id":  210549,
        "question":  "Name something you did every day in kindergarten that you wish you could do every day now.",
        "answers":  [
                        {
                            "text":  "nap",
                            "points":  64
                        },
                        {
                            "text":  "play/toys/recess",
                            "points":  19
                        },
                        {
                            "text":  "color/paint",
                            "points":  12
                        },
                        {
                            "text":  "get free snacks",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210550,
        "question":  "Name something a hardcore football fan wears to the stadium on game day.",
        "answers":  [
                        {
                            "text":  "jersey/team color",
                            "points":  63
                        },
                        {
                            "text":  "face/body paint",
                            "points":  24
                        },
                        {
                            "text":  "hat/cheesehead",
                            "points":  10
                        },
                        {
                            "text":  "foam hand/finger",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210551,
        "question":  "Name something that people complain is clingy.",
        "answers":  [
                        {
                            "text":  "people/kid/mate",
                            "points":  62
                        },
                        {
                            "text":  "duds/nylon panties",
                            "points":  28
                        },
                        {
                            "text":  "dog/cat",
                            "points":  5
                        },
                        {
                            "text":  "plastic wrap",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210552,
        "question":  "Name a word that rhymes with \"honey.\"",
        "answers":  [
                        {
                            "text":  "money",
                            "points":  62
                        },
                        {
                            "text":  "bunny",
                            "points":  24
                        },
                        {
                            "text":  "funny",
                            "points":  7
                        },
                        {
                            "text":  "sunny",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  210553,
        "question":  "Name something a guy might bring on a date to save money.",
        "answers":  [
                        {
                            "text":  "coupon",
                            "points":  61
                        },
                        {
                            "text":  "food/dinner",
                            "points":  23
                        },
                        {
                            "text":  "wine/booze",
                            "points":  12
                        },
                        {
                            "text":  "gift/reward card",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210554,
        "question":  "Tell me a type of hoop.",
        "answers":  [
                        {
                            "text":  "hula-hoop",
                            "points":  60
                        },
                        {
                            "text":  "basketball hoop",
                            "points":  29
                        },
                        {
                            "text":  "hoop earrings",
                            "points":  5
                        },
                        {
                            "text":  "hoopskirt",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  210555,
        "question":  "Name a way you can revive someone who just passed out.",
        "answers":  [
                        {
                            "text":  "cpr/mouth-to-mouth",
                            "points":  60
                        },
                        {
                            "text":  "cold water",
                            "points":  20
                        },
                        {
                            "text":  "smelling salts",
                            "points":  13
                        },
                        {
                            "text":  "smack them",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  210556,
        "question":  "Name a drink that's served both hot and cold.",
        "answers":  [
                        {
                            "text":  "tea",
                            "points":  59
                        },
                        {
                            "text":  "coffee",
                            "points":  34
                        },
                        {
                            "text":  "milk",
                            "points":  3
                        },
                        {
                            "text":  "cider",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210557,
        "question":  "We asked 100 single women... I can tell my date is cheap just by looking at his what?",
        "answers":  [
                        {
                            "text":  "clothes/shoes",
                            "points":  55
                        },
                        {
                            "text":  "car",
                            "points":  25
                        },
                        {
                            "text":  "restaurant choice",
                            "points":  12
                        },
                        {
                            "text":  "haircut",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  210558,
        "question":  "Name something you hang up.",
        "answers":  [
                        {
                            "text":  "the phone",
                            "points":  54
                        },
                        {
                            "text":  "clothes/coat/hat",
                            "points":  38
                        },
                        {
                            "text":  "a towel",
                            "points":  4
                        },
                        {
                            "text":  "a picture/frame",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210559,
        "question":  "Name something you hate to see on the bottom of your shoe.",
        "answers":  [
                        {
                            "text":  "gum",
                            "points":  49
                        },
                        {
                            "text":  "poop/dog doo",
                            "points":  43
                        },
                        {
                            "text":  "mud/dirt",
                            "points":  4
                        },
                        {
                            "text":  "tp/tissue",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210560,
        "question":  "We asked 100 men... Name something you do with your meat before you put it on the grill.",
        "answers":  [
                        {
                            "text":  "season it",
                            "points":  48
                        },
                        {
                            "text":  "marinate it",
                            "points":  33
                        },
                        {
                            "text":  "cut/trim it",
                            "points":  11
                        },
                        {
                            "text":  "defrost it",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  210561,
        "question":  "Name something people decorate.",
        "answers":  [
                        {
                            "text":  "christmas tree",
                            "points":  46
                        },
                        {
                            "text":  "house/rooms",
                            "points":  27
                        },
                        {
                            "text":  "a cake",
                            "points":  19
                        },
                        {
                            "text":  "easter eggs",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  210562,
        "question":  "We asked 100 single women... Why do you think the man you're dating never takes you to his place?",
        "answers":  [
                        {
                            "text":  "other woman/wife",
                            "points":  41
                        },
                        {
                            "text":  "dirty/messy",
                            "points":  41
                        },
                        {
                            "text":  "lives w/ parents",
                            "points":  14
                        },
                        {
                            "text":  "has roommates",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210563,
        "question":  "Name something a baby might do when you kiss its tummy.",
        "answers":  [
                        {
                            "text":  "laugh/smile",
                            "points":  91
                        },
                        {
                            "text":  "squeal/shriek",
                            "points":  3
                        },
                        {
                            "text":  "let one rip",
                            "points":  2
                        },
                        {
                            "text":  "kick",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210564,
        "question":  "Fill in the blank: If you're too picky, you'll never find the right ________.",
        "answers":  [
                        {
                            "text":  "person/mate",
                            "points":  90
                        },
                        {
                            "text":  "food/restaurant",
                            "points":  4
                        },
                        {
                            "text":  "house",
                            "points":  2
                        },
                        {
                            "text":  "job",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210565,
        "question":  "When you were a kid, name someone who could see right through your lies.",
        "answers":  [
                        {
                            "text":  "mom/dad",
                            "points":  85
                        },
                        {
                            "text":  "granny/gramps",
                            "points":  9
                        },
                        {
                            "text":  "teacher",
                            "points":  2
                        },
                        {
                            "text":  "friend",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210566,
        "question":  "Whether she needs it or not, what will a woman buy just because it's half off?",
        "answers":  [
                        {
                            "text":  "shoes/clothes",
                            "points":  83
                        },
                        {
                            "text":  "purse",
                            "points":  11
                        },
                        {
                            "text":  "food",
                            "points":  2
                        },
                        {
                            "text":  "makeup",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210567,
        "question":  "We asked 100 women... Fill in the blank: It's not okay for my husband to kiss women on the ________.",
        "answers":  [
                        {
                            "text":  "lips/mouth",
                            "points":  79
                        },
                        {
                            "text":  "cheek",
                            "points":  14
                        },
                        {
                            "text":  "boobs",
                            "points":  3
                        },
                        {
                            "text":  "butt/crack",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210568,
        "question":  "Name a kind of chip.",
        "answers":  [
                        {
                            "text":  "potato/corn",
                            "points":  74
                        },
                        {
                            "text":  "chocolate",
                            "points":  14
                        },
                        {
                            "text":  "poker",
                            "points":  7
                        },
                        {
                            "text":  "micro/computer",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210569,
        "question":  "Name something an orchestra conductor needs to do his job.",
        "answers":  [
                        {
                            "text":  "baton",
                            "points":  72
                        },
                        {
                            "text":  "sheet music",
                            "points":  13
                        },
                        {
                            "text":  "an orchestra",
                            "points":  11
                        },
                        {
                            "text":  "tuxedo",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210570,
        "question":  "Name something a farmer's wife might accuse him of caring more about than her.",
        "answers":  [
                        {
                            "text":  "animals/prize pig",
                            "points":  67
                        },
                        {
                            "text":  "crops",
                            "points":  20
                        },
                        {
                            "text":  "tractor/truck",
                            "points":  9
                        },
                        {
                            "text":  "money",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210571,
        "question":  "Name the most popular ride at a carnival.",
        "answers":  [
                        {
                            "text":  "ferris wheel",
                            "points":  66
                        },
                        {
                            "text":  "carousel",
                            "points":  18
                        },
                        {
                            "text":  "roller coaster",
                            "points":  12
                        },
                        {
                            "text":  "tilt-a-whirl",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210572,
        "question":  "We asked 100 men... Past or present, name a first lady you'd like to see in a bathing suit.",
        "answers":  [
                        {
                            "text":  "jackie kennedy",
                            "points":  63
                        },
                        {
                            "text":  "michelle obama",
                            "points":  24
                        },
                        {
                            "text":  "laura bush",
                            "points":  6
                        },
                        {
                            "text":  "barbara bush",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  210573,
        "question":  "Name a reason a woman might pucker her lips.",
        "answers":  [
                        {
                            "text":  "kiss/blow kiss",
                            "points":  62
                        },
                        {
                            "text":  "apply lipstick",
                            "points":  25
                        },
                        {
                            "text":  "ate lemon/sour",
                            "points":  6
                        },
                        {
                            "text":  "pic/duckface selfie",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  210574,
        "question":  "Name something that's impossible to hide from a dog.",
        "answers":  [
                        {
                            "text":  "food/treats",
                            "points":  62
                        },
                        {
                            "text":  "a bone",
                            "points":  24
                        },
                        {
                            "text":  "toys",
                            "points":  10
                        },
                        {
                            "text":  "a cat",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210575,
        "question":  "Name something that people take out.",
        "answers":  [
                        {
                            "text":  "food/chinese",
                            "points":  61
                        },
                        {
                            "text":  "the trash",
                            "points":  31
                        },
                        {
                            "text":  "money/loan",
                            "points":  4
                        },
                        {
                            "text":  "the dog/pet",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210576,
        "question":  "Name a sport where the players have the biggest waistlines.",
        "answers":  [
                        {
                            "text":  "wrestling/sumo",
                            "points":  58
                        },
                        {
                            "text":  "football",
                            "points":  35
                        },
                        {
                            "text":  "baseball",
                            "points":  3
                        },
                        {
                            "text":  "bowling",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210577,
        "question":  "We asked 100 single women... Name something that's easier to catch than catching a man.",
        "answers":  [
                        {
                            "text":  "cold/flu",
                            "points":  58
                        },
                        {
                            "text":  "fish",
                            "points":  26
                        },
                        {
                            "text":  "bus",
                            "points":  11
                        },
                        {
                            "text":  "frisbee",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210578,
        "question":  "Besides a gun, name something a policeman might have for protection.",
        "answers":  [
                        {
                            "text":  "nightstick",
                            "points":  58
                        },
                        {
                            "text":  "mace/pepper spray",
                            "points":  22
                        },
                        {
                            "text":  "bulletproof vest",
                            "points":  14
                        },
                        {
                            "text":  "police dog",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210579,
        "question":  "Besides a person, name something people hug.",
        "answers":  [
                        {
                            "text":  "pets",
                            "points":  53
                        },
                        {
                            "text":  "pillow",
                            "points":  25
                        },
                        {
                            "text":  "teddy bear",
                            "points":  13
                        },
                        {
                            "text":  "trees",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  210580,
        "question":  "Name something starting with the letter \"B\" a man might teach his dog to fetch.",
        "answers":  [
                        {
                            "text":  "ball",
                            "points":  52
                        },
                        {
                            "text":  "bone",
                            "points":  39
                        },
                        {
                            "text":  "beer",
                            "points":  5
                        },
                        {
                            "text":  "bathrobe",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210581,
        "question":  "Name a word that rhymes with \"shower.\"",
        "answers":  [
                        {
                            "text":  "power",
                            "points":  52
                        },
                        {
                            "text":  "flower/flour",
                            "points":  26
                        },
                        {
                            "text":  "tower",
                            "points":  13
                        },
                        {
                            "text":  "hour/our",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  210582,
        "question":  "Name an excuse a friend gives for not helping you move.",
        "answers":  [
                        {
                            "text":  "work/too busy",
                            "points":  51
                        },
                        {
                            "text":  "bad back",
                            "points":  30
                        },
                        {
                            "text":  "sick/tired",
                            "points":  10
                        },
                        {
                            "text":  "going out of town",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  210583,
        "question":  "Name a holiday that might be the busiest night of the year for sex in America.",
        "answers":  [
                        {
                            "text":  "valentine's day",
                            "points":  49
                        },
                        {
                            "text":  "new year's/eve",
                            "points":  43
                        },
                        {
                            "text":  "christmas/eve",
                            "points":  4
                        },
                        {
                            "text":  "halloween",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210584,
        "question":  "Give me a word that rhymes with \"buckle.\"",
        "answers":  [
                        {
                            "text":  "knuckle",
                            "points":  43
                        },
                        {
                            "text":  "suckle",
                            "points":  28
                        },
                        {
                            "text":  "chuckle",
                            "points":  22
                        },
                        {
                            "text":  "huckle",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  210585,
        "question":  "When you hear a noise coming from your basement, what do you pray that it isn't?",
        "answers":  [
                        {
                            "text":  "person/my ex-wife",
                            "points":  42
                        },
                        {
                            "text":  "ghost/monster",
                            "points":  25
                        },
                        {
                            "text":  "animal/rat fest",
                            "points":  21
                        },
                        {
                            "text":  "flood/water heater",
                            "points":  10
                        }
                    ]
    },
    {
        "id":  210586,
        "question":  "Tell me a person's first name that rhymes with \"Fannie.\"",
        "answers":  [
                        {
                            "text":  "danny",
                            "points":  40
                        },
                        {
                            "text":  "manny",
                            "points":  38
                        },
                        {
                            "text":  "annie",
                            "points":  17
                        },
                        {
                            "text":  "frannie",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210587,
        "question":  "Name something that starts with \"octo.\"",
        "answers":  [
                        {
                            "text":  "octomom",
                            "points":  39
                        },
                        {
                            "text":  "octopus",
                            "points":  30
                        },
                        {
                            "text":  "october",
                            "points":  27
                        },
                        {
                            "text":  "octopussy",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210588,
        "question":  "Name something that some people get paid to do that mothers do every day for nothing.",
        "answers":  [
                        {
                            "text":  "cook",
                            "points":  33
                        },
                        {
                            "text":  "babysit",
                            "points":  32
                        },
                        {
                            "text":  "clean/laundry",
                            "points":  31
                        },
                        {
                            "text":  "teach kids",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210589,
        "question":  "Name something a magician might tap with his magic wand.",
        "answers":  [
                        {
                            "text":  "his hat",
                            "points":  87
                        },
                        {
                            "text":  "magic box",
                            "points":  6
                        },
                        {
                            "text":  "person/girl's butt",
                            "points":  2
                        },
                        {
                            "text":  "his bunny",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210590,
        "question":  "Name something originally belonging to her grandma that a woman might wear.",
        "answers":  [
                        {
                            "text":  "jewelry",
                            "points":  83
                        },
                        {
                            "text":  "wedding dress",
                            "points":  9
                        },
                        {
                            "text":  "scarf/shawl",
                            "points":  3
                        },
                        {
                            "text":  "undies/girdle",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210591,
        "question":  "Name a place where you're supposed to be very quiet.",
        "answers":  [
                        {
                            "text":  "library",
                            "points":  82
                        },
                        {
                            "text":  "church",
                            "points":  10
                        },
                        {
                            "text":  "theater/movies",
                            "points":  3
                        },
                        {
                            "text":  "bedroom",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210592,
        "question":  "We asked 100 married men... What attracted you to your wife in the first place?",
        "answers":  [
                        {
                            "text":  "her smile/face",
                            "points":  76
                        },
                        {
                            "text":  "her smokin' bod",
                            "points":  16
                        },
                        {
                            "text":  "her personality",
                            "points":  3
                        },
                        {
                            "text":  "her hair",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210593,
        "question":  "If men had a tail like dogs do, what might they see that would cause it to start wagging?",
        "answers":  [
                        {
                            "text":  "babes",
                            "points":  76
                        },
                        {
                            "text":  "food",
                            "points":  15
                        },
                        {
                            "text":  "beer",
                            "points":  4
                        },
                        {
                            "text":  "sports/espn",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210594,
        "question":  "Name something a vampire might ask a dentist to do to his fangs.",
        "answers":  [
                        {
                            "text":  "sharpen/file",
                            "points":  76
                        },
                        {
                            "text":  "clean/polish",
                            "points":  12
                        },
                        {
                            "text":  "bleach/whiten",
                            "points":  6
                        },
                        {
                            "text":  "chrome/gold grill",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210595,
        "question":  "Name something that requires good rhythm to do.",
        "answers":  [
                        {
                            "text":  "dancing",
                            "points":  76
                        },
                        {
                            "text":  "playing instrument",
                            "points":  12
                        },
                        {
                            "text":  "exercise/jump rope",
                            "points":  5
                        },
                        {
                            "text":  "making sweet love",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210596,
        "question":  "We asked 100 women... Name something a skinny woman complains about that's really obnoxious.",
        "answers":  [
                        {
                            "text":  "fat/put on 1 lb.",
                            "points":  76
                        },
                        {
                            "text":  "thin/can't gain wt.",
                            "points":  10
                        },
                        {
                            "text":  "fat people",
                            "points":  7
                        },
                        {
                            "text":  "clothes/don't fit",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210597,
        "question":  "Name something that's hard to do with your eyes open.",
        "answers":  [
                        {
                            "text":  "sleep/dream",
                            "points":  75
                        },
                        {
                            "text":  "sneeze",
                            "points":  16
                        },
                        {
                            "text":  "kiss",
                            "points":  3
                        },
                        {
                            "text":  "swim/dive",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210598,
        "question":  "Name something you'd hate to see an \"out of order\" sign on.",
        "answers":  [
                        {
                            "text":  "bathroom/toilet",
                            "points":  74
                        },
                        {
                            "text":  "atm",
                            "points":  13
                        },
                        {
                            "text":  "elevator",
                            "points":  5
                        },
                        {
                            "text":  "vending machine",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  210599,
        "question":  "We asked 100 women... Fill in the blank: I did everything for my guy and I never got a ________.",
        "answers":  [
                        {
                            "text":  "thank you",
                            "points":  74
                        },
                        {
                            "text":  "nickel/dime",
                            "points":  10
                        },
                        {
                            "text":  "ring/diamond",
                            "points":  9
                        },
                        {
                            "text":  "kiss",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210601,
        "question":  "Name something you wouldn't want to see your nurse picking at.",
        "answers":  [
                        {
                            "text":  "her nose",
                            "points":  67
                        },
                        {
                            "text":  "a scab/sores",
                            "points":  22
                        },
                        {
                            "text":  "her butt/undies",
                            "points":  5
                        },
                        {
                            "text":  "her zits",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210602,
        "question":  "Name something you'd find on top of a poker table.",
        "answers":  [
                        {
                            "text":  "poker chips",
                            "points":  62
                        },
                        {
                            "text":  "cards",
                            "points":  22
                        },
                        {
                            "text":  "money",
                            "points":  7
                        },
                        {
                            "text":  "green felt",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  210603,
        "question":  "Name something you hope never crashes into your home.",
        "answers":  [
                        {
                            "text":  "plane/chopper",
                            "points":  61
                        },
                        {
                            "text":  "car/truck",
                            "points":  26
                        },
                        {
                            "text":  "tree",
                            "points":  5
                        },
                        {
                            "text":  "meteor/asteroid",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  210604,
        "question":  "Name something a stupid criminal would post a selfie of himself holding.",
        "answers":  [
                        {
                            "text":  "stolen goods/cash",
                            "points":  57
                        },
                        {
                            "text":  "gun/weapon",
                            "points":  30
                        },
                        {
                            "text":  "drugs",
                            "points":  6
                        },
                        {
                            "text":  "his i.d./address",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210605,
        "question":  "Name something that gets shredded.",
        "answers":  [
                        {
                            "text":  "documents/paper",
                            "points":  57
                        },
                        {
                            "text":  "cheese",
                            "points":  19
                        },
                        {
                            "text":  "lettuce",
                            "points":  18
                        },
                        {
                            "text":  "wheat",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210606,
        "question":  "Name something you'd put in your backyard if you wanted it to look like a desert.",
        "answers":  [
                        {
                            "text":  "sand",
                            "points":  50
                        },
                        {
                            "text":  "cactus",
                            "points":  39
                        },
                        {
                            "text":  "camel",
                            "points":  4
                        },
                        {
                            "text":  "palm tree",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210607,
        "question":  "Name something you might be glad only comes once a year.",
        "answers":  [
                        {
                            "text":  "christmas",
                            "points":  47
                        },
                        {
                            "text":  "birthdays",
                            "points":  37
                        },
                        {
                            "text":  "tax season",
                            "points":  9
                        },
                        {
                            "text":  "anniversary",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210608,
        "question":  "Name an Asian country that's known for its cuisine.",
        "answers":  [
                        {
                            "text":  "china",
                            "points":  43
                        },
                        {
                            "text":  "japan",
                            "points":  24
                        },
                        {
                            "text":  "thailand",
                            "points":  23
                        },
                        {
                            "text":  "india",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  210609,
        "question":  "Name an animal some people sound like if they snort while they're laughing.",
        "answers":  [
                        {
                            "text":  "pig/hog",
                            "points":  85
                        },
                        {
                            "text":  "donkey/mule",
                            "points":  6
                        },
                        {
                            "text":  "horse",
                            "points":  3
                        },
                        {
                            "text":  "seal",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210610,
        "question":  "Name something you have to buy almost once a week.",
        "answers":  [
                        {
                            "text":  "milk/food",
                            "points":  79
                        },
                        {
                            "text":  "gas",
                            "points":  13
                        },
                        {
                            "text":  "lottery ticket",
                            "points":  2
                        },
                        {
                            "text":  "bottled water",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210611,
        "question":  "Name something that might be spoiled.",
        "answers":  [
                        {
                            "text":  "milk/food",
                            "points":  78
                        },
                        {
                            "text":  "child/person",
                            "points":  14
                        },
                        {
                            "text":  "pet",
                            "points":  2
                        },
                        {
                            "text":  "party/surprise",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210612,
        "question":  "Name something a wife does that has her husband worrying, \"Oh no -- I married my mother.\"",
        "answers":  [
                        {
                            "text":  "nags/yells",
                            "points":  74
                        },
                        {
                            "text":  "cleans/neat freak",
                            "points":  12
                        },
                        {
                            "text":  "cooks/healthy",
                            "points":  6
                        },
                        {
                            "text":  "dresses him",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210613,
        "question":  "Name something you'd need if you wanted to dress up like Dorothy from \"The Wizard of Oz.\"",
        "answers":  [
                        {
                            "text":  "ruby slippers",
                            "points":  72
                        },
                        {
                            "text":  "dress",
                            "points":  13
                        },
                        {
                            "text":  "pigtails/braids",
                            "points":  8
                        },
                        {
                            "text":  "picnic basket",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210614,
        "question":  "Name something kids lie to their babysitters about.",
        "answers":  [
                        {
                            "text":  "bedtime/staying up",
                            "points":  69
                        },
                        {
                            "text":  "eating/candy",
                            "points":  23
                        },
                        {
                            "text":  "brushing teeth",
                            "points":  2
                        },
                        {
                            "text":  "school work",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210615,
        "question":  "Name something a man might have at his \"I just got divorced\" party.",
        "answers":  [
                        {
                            "text":  "chicks/strippers",
                            "points":  67
                        },
                        {
                            "text":  "booze",
                            "points":  24
                        },
                        {
                            "text":  "a cake",
                            "points":  3
                        },
                        {
                            "text":  "threesome",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210616,
        "question":  "Name something ducks do.",
        "answers":  [
                        {
                            "text":  "quack",
                            "points":  65
                        },
                        {
                            "text":  "swim/paddle",
                            "points":  20
                        },
                        {
                            "text":  "waddle",
                            "points":  7
                        },
                        {
                            "text":  "fly",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210617,
        "question":  "Besides chicken, name a bird people eat.",
        "answers":  [
                        {
                            "text":  "turkey",
                            "points":  64
                        },
                        {
                            "text":  "duck",
                            "points":  13
                        },
                        {
                            "text":  "pheasant",
                            "points":  12
                        },
                        {
                            "text":  "quail",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  210618,
        "question":  "Name something people often win on game shows.",
        "answers":  [
                        {
                            "text":  "money",
                            "points":  61
                        },
                        {
                            "text":  "a new car",
                            "points":  24
                        },
                        {
                            "text":  "trips/vacations",
                            "points":  9
                        },
                        {
                            "text":  "refrigerators",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210619,
        "question":  "Name something that makes a person's nose run.",
        "answers":  [
                        {
                            "text":  "cold/flu",
                            "points":  61
                        },
                        {
                            "text":  "spicy food",
                            "points":  14
                        },
                        {
                            "text":  "allergies",
                            "points":  13
                        },
                        {
                            "text":  "cold weather",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  210620,
        "question":  "Which sin do you think people confess most often in confession?",
        "answers":  [
                        {
                            "text":  "sex/lust/cheated",
                            "points":  53
                        },
                        {
                            "text":  "lied",
                            "points":  34
                        },
                        {
                            "text":  "cussed/lord's name",
                            "points":  5
                        },
                        {
                            "text":  "stole",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210621,
        "question":  "We asked 100 men... Name something that makes a woman hot.",
        "answers":  [
                        {
                            "text":  "pretty face/lips",
                            "points":  45
                        },
                        {
                            "text":  "bod/\"her buns, son\"",
                            "points":  40
                        },
                        {
                            "text":  "being romantic",
                            "points":  9
                        },
                        {
                            "text":  "the temperature",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210622,
        "question":  "Name an animal whose legs are featured on a restaurant menu.",
        "answers":  [
                        {
                            "text":  "frog",
                            "points":  43
                        },
                        {
                            "text":  "chicken",
                            "points":  35
                        },
                        {
                            "text":  "crab",
                            "points":  14
                        },
                        {
                            "text":  "lamb",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210623,
        "question":  "Name something that's described as \"well-built.\"",
        "answers":  [
                        {
                            "text":  "car/truck",
                            "points":  42
                        },
                        {
                            "text":  "person/muscles",
                            "points":  32
                        },
                        {
                            "text":  "house/building",
                            "points":  19
                        },
                        {
                            "text":  "tractor/mower",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210624,
        "question":  "Name something a guy might have in his wallet that he wouldn't want his wife to find.",
        "answers":  [
                        {
                            "text":  "hussy's phone #",
                            "points":  38
                        },
                        {
                            "text":  "nobstopper",
                            "points":  28
                        },
                        {
                            "text":  "money/credit card",
                            "points":  21
                        },
                        {
                            "text":  "pic of girl/ex",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  210625,
        "question":  "Name something Mrs. Claus might leave the North Pole to get away from.",
        "answers":  [
                        {
                            "text":  "snow/the cold",
                            "points":  33
                        },
                        {
                            "text":  "santa",
                            "points":  31
                        },
                        {
                            "text":  "annoying elves",
                            "points":  29
                        },
                        {
                            "text":  "reindeer",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210626,
        "question":  "Name something that some people buy and some people make at home.",
        "answers":  [
                        {
                            "text":  "food/meals",
                            "points":  84
                        },
                        {
                            "text":  "clothes",
                            "points":  6
                        },
                        {
                            "text":  "beer/moonshine",
                            "points":  3
                        },
                        {
                            "text":  "hot, sweaty love",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210627,
        "question":  "Name a reason someone's face might turn red.",
        "answers":  [
                        {
                            "text":  "embarrassed",
                            "points":  75
                        },
                        {
                            "text":  "angry",
                            "points":  12
                        },
                        {
                            "text":  "sunburned",
                            "points":  6
                        },
                        {
                            "text":  "bug bite/sting",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210628,
        "question":  "Name something a retired stripper might say she misses most about her job.",
        "answers":  [
                        {
                            "text":  "money/tips",
                            "points":  73
                        },
                        {
                            "text":  "pole/dancing",
                            "points":  10
                        },
                        {
                            "text":  "men/attention",
                            "points":  9
                        },
                        {
                            "text":  "her hot body",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210629,
        "question":  "Tell me a kind of ball that's smaller than a baseball.",
        "answers":  [
                        {
                            "text":  "golf ball",
                            "points":  70
                        },
                        {
                            "text":  "tennis ball",
                            "points":  17
                        },
                        {
                            "text":  "ping-pong ball",
                            "points":  16
                        },
                        {
                            "text":  "gumball",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210630,
        "question":  "Name one thing people do to imitate a dog.",
        "answers":  [
                        {
                            "text":  "bark",
                            "points":  67
                        },
                        {
                            "text":  "pant/tongue out",
                            "points":  14
                        },
                        {
                            "text":  "down on all fours",
                            "points":  11
                        },
                        {
                            "text":  "hands up/beg",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210631,
        "question":  "We asked 100 married men... Name something of your wife's that might fit you that you wouldn't be caught dead wearing.",
        "answers":  [
                        {
                            "text":  "bra/panties",
                            "points":  64
                        },
                        {
                            "text":  "dress",
                            "points":  14
                        },
                        {
                            "text":  "hat",
                            "points":  12
                        },
                        {
                            "text":  "nightie/pajamas",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  210632,
        "question":  "We asked 100 women... Name the instrument you think makes a guy look sexiest when he's playing it.",
        "answers":  [
                        {
                            "text":  "guitar",
                            "points":  60
                        },
                        {
                            "text":  "saxophone",
                            "points":  18
                        },
                        {
                            "text":  "drums",
                            "points":  14
                        },
                        {
                            "text":  "piano",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210633,
        "question":  "Name a reason a person might change their name.",
        "answers":  [
                        {
                            "text":  "got married",
                            "points":  60
                        },
                        {
                            "text":  "their name's lame",
                            "points":  16
                        },
                        {
                            "text":  "witness protection",
                            "points":  13
                        },
                        {
                            "text":  "got divorced",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  210634,
        "question":  "Name an activity where a person might come up for air.",
        "answers":  [
                        {
                            "text":  "swimming",
                            "points":  59
                        },
                        {
                            "text":  "scuba/snorkeling",
                            "points":  28
                        },
                        {
                            "text":  "kissing/boinking",
                            "points":  6
                        },
                        {
                            "text":  "bobbing for apples",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210635,
        "question":  "Name something a woman does with the picture of the ex who dumped her.",
        "answers":  [
                        {
                            "text":  "tears/shreds it",
                            "points":  43
                        },
                        {
                            "text":  "burns it",
                            "points":  33
                        },
                        {
                            "text":  "throws darts at it",
                            "points":  15
                        },
                        {
                            "text":  "throws it away",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210636,
        "question":  "Name something Sleeping Beauty might do while she's sleeping that's not so beautiful.",
        "answers":  [
                        {
                            "text":  "saw logs",
                            "points":  41
                        },
                        {
                            "text":  "have speaking booty",
                            "points":  40
                        },
                        {
                            "text":  "drool",
                            "points":  11
                        },
                        {
                            "text":  "have nightmares",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210637,
        "question":  "Name something grandma and grandpa might break if they made passionate love.",
        "answers":  [
                        {
                            "text":  "hip/bones",
                            "points":  77
                        },
                        {
                            "text":  "the bed",
                            "points":  9
                        },
                        {
                            "text":  "cup/glass",
                            "points":  4
                        },
                        {
                            "text":  "dentures/teeth",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210638,
        "question":  "Name something everyone knows about dragons.",
        "answers":  [
                        {
                            "text":  "they breathe fire",
                            "points":  76
                        },
                        {
                            "text":  "fly/have wings",
                            "points":  8
                        },
                        {
                            "text":  "they don't exist",
                            "points":  5
                        },
                        {
                            "text":  "they're big/tall",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  210639,
        "question":  "Name something you love to smell in the morning.",
        "answers":  [
                        {
                            "text":  "coffee/breakfast",
                            "points":  75
                        },
                        {
                            "text":  "fresh air/dew",
                            "points":  11
                        },
                        {
                            "text":  "flowers",
                            "points":  4
                        },
                        {
                            "text":  "my boo's cologne",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210640,
        "question":  "Name something a man might ask his mom to do for him like she used to do.",
        "answers":  [
                        {
                            "text":  "cook/cut crusts",
                            "points":  72
                        },
                        {
                            "text":  "his laundry",
                            "points":  18
                        },
                        {
                            "text":  "give him money",
                            "points":  2
                        },
                        {
                            "text":  "rub his back",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210641,
        "question":  "Name a creature people are petrified of that starts with an \"S.\"",
        "answers":  [
                        {
                            "text":  "snake",
                            "points":  72
                        },
                        {
                            "text":  "spider",
                            "points":  12
                        },
                        {
                            "text":  "shark",
                            "points":  7
                        },
                        {
                            "text":  "scorpion",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210642,
        "question":  "Name a specific place where you'd see bunk beds.",
        "answers":  [
                        {
                            "text":  "kid's bedroom",
                            "points":  70
                        },
                        {
                            "text":  "summer camp",
                            "points":  11
                        },
                        {
                            "text":  "military barracks",
                            "points":  7
                        },
                        {
                            "text":  "furniture store",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  210643,
        "question":  "We asked 100 married men... The perfect wife is one who doesn't what?",
        "answers":  [
                        {
                            "text":  "complain/nag/argue",
                            "points":  68
                        },
                        {
                            "text":  "talk too much",
                            "points":  12
                        },
                        {
                            "text":  "say \"no\"",
                            "points":  12
                        },
                        {
                            "text":  "cheat",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210644,
        "question":  "Name a holiday that sends a lot of people to shrinks.",
        "answers":  [
                        {
                            "text":  "christmas",
                            "points":  66
                        },
                        {
                            "text":  "valentine's day",
                            "points":  15
                        },
                        {
                            "text":  "thanksgiving",
                            "points":  8
                        },
                        {
                            "text":  "new year's/eve",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  210645,
        "question":  "Other than Santa, tell me someone who knows if a kid has been naughty or nice.",
        "answers":  [
                        {
                            "text":  "parents",
                            "points":  65
                        },
                        {
                            "text":  "god/jesus",
                            "points":  20
                        },
                        {
                            "text":  "easter bunny",
                            "points":  5
                        },
                        {
                            "text":  "teacher",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210646,
        "question":  "Name something a bad guy might throw out the window during a police car chase.",
        "answers":  [
                        {
                            "text":  "drugs/weed",
                            "points":  55
                        },
                        {
                            "text":  "gun/knife",
                            "points":  33
                        },
                        {
                            "text":  "bomb/grenade",
                            "points":  3
                        },
                        {
                            "text":  "beer/bottle",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210647,
        "question":  "Name something a woman might put in the shredder after she gets a divorce.",
        "answers":  [
                        {
                            "text":  "marriage license",
                            "points":  55
                        },
                        {
                            "text":  "photos",
                            "points":  31
                        },
                        {
                            "text":  "love letters/cards",
                            "points":  6
                        },
                        {
                            "text":  "ex's magazines",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210648,
        "question":  "Name something you walk out of if it's dirty.",
        "answers":  [
                        {
                            "text":  "bathroom",
                            "points":  53
                        },
                        {
                            "text":  "restaurant",
                            "points":  36
                        },
                        {
                            "text":  "a movie",
                            "points":  3
                        },
                        {
                            "text":  "house",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210649,
        "question":  "Name a place a man spends a lot of time that starts with the letter \"B.\"",
        "answers":  [
                        {
                            "text":  "bar",
                            "points":  51
                        },
                        {
                            "text":  "bathroom",
                            "points":  23
                        },
                        {
                            "text":  "bed/bedroom",
                            "points":  14
                        },
                        {
                            "text":  "backyard",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  210650,
        "question":  "If a cheating husband wants to save his marriage, name a place he'll go to.",
        "answers":  [
                        {
                            "text":  "counselor/therapist",
                            "points":  50
                        },
                        {
                            "text":  "church",
                            "points":  36
                        },
                        {
                            "text":  "home",
                            "points":  6
                        },
                        {
                            "text":  "florist",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210651,
        "question":  "Name something a boss might tell his assistant to hold.",
        "answers":  [
                        {
                            "text":  "calls/the phone",
                            "points":  80
                        },
                        {
                            "text":  "papers/files",
                            "points":  9
                        },
                        {
                            "text":  "a meeting",
                            "points":  2
                        },
                        {
                            "text":  "coffee/the cream",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210652,
        "question":  "Name a present that cats bring to their owners.",
        "answers":  [
                        {
                            "text":  "mouse/animal",
                            "points":  79
                        },
                        {
                            "text":  "toys/ball",
                            "points":  5
                        },
                        {
                            "text":  "hairball/puke",
                            "points":  5
                        },
                        {
                            "text":  "a lick/lovin'",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210653,
        "question":  "Besides a family member, name someone you'd ask to borrow money from.",
        "answers":  [
                        {
                            "text":  "friend",
                            "points":  67
                        },
                        {
                            "text":  "banker",
                            "points":  17
                        },
                        {
                            "text":  "boy/girlfriend",
                            "points":  5
                        },
                        {
                            "text":  "neighbor",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210654,
        "question":  "Name a famous rabbit that might be jealous of the Easter Bunny.",
        "answers":  [
                        {
                            "text":  "bugs bunny",
                            "points":  64
                        },
                        {
                            "text":  "roger rabbit",
                            "points":  19
                        },
                        {
                            "text":  "peter/cottontail",
                            "points":  7
                        },
                        {
                            "text":  "the trix rabbit",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210655,
        "question":  "It's the first day of the new year. Name a reason you're not getting out of bed.",
        "answers":  [
                        {
                            "text":  "drunk/hungover",
                            "points":  64
                        },
                        {
                            "text":  "holiday/day off",
                            "points":  13
                        },
                        {
                            "text":  "up late/sleeping in",
                            "points":  10
                        },
                        {
                            "text":  "too cold/snowy",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  210656,
        "question":  "Fill in the blank: Kitty ________.",
        "answers":  [
                        {
                            "text":  "kitty cat",
                            "points":  62
                        },
                        {
                            "text":  "kitty, kitty",
                            "points":  15
                        },
                        {
                            "text":  "kitty litter",
                            "points":  13
                        },
                        {
                            "text":  "kitty hawk",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210657,
        "question":  "Name something the dog doesn't want to see on your bed.",
        "answers":  [
                        {
                            "text":  "cat",
                            "points":  52
                        },
                        {
                            "text":  "people/my lovers",
                            "points":  20
                        },
                        {
                            "text":  "another dog",
                            "points":  18
                        },
                        {
                            "text":  "rolled newspaper",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210658,
        "question":  "Tell me something you'd love to be able to hypnotize your children to do.",
        "answers":  [
                        {
                            "text":  "clean up/room",
                            "points":  49
                        },
                        {
                            "text":  "listen/behave",
                            "points":  27
                        },
                        {
                            "text":  "study/good grades",
                            "points":  14
                        },
                        {
                            "text":  "go to bed/sleep",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210659,
        "question":  "Name something that people do at midnight on New Year's Eve.",
        "answers":  [
                        {
                            "text":  "kiss/slip tongue",
                            "points":  48
                        },
                        {
                            "text":  "drink/toast",
                            "points":  31
                        },
                        {
                            "text":  "yell/happy new year!",
                            "points":  11
                        },
                        {
                            "text":  "blow horns",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210660,
        "question":  "Name something you might find in a swimming pool the morning after a wild party.",
        "answers":  [
                        {
                            "text":  "clothes/swimsuit",
                            "points":  40
                        },
                        {
                            "text":  "can/bottle",
                            "points":  37
                        },
                        {
                            "text":  "condom",
                            "points":  10
                        },
                        {
                            "text":  "people",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  210661,
        "question":  "Name something that sticks its claws into you.",
        "answers":  [
                        {
                            "text":  "cat",
                            "points":  82
                        },
                        {
                            "text":  "crab/lobster",
                            "points":  6
                        },
                        {
                            "text":  "bear",
                            "points":  2
                        },
                        {
                            "text":  "ex-wife/person",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210662,
        "question":  "Name something people change on a regular basis.",
        "answers":  [
                        {
                            "text":  "their clothes",
                            "points":  78
                        },
                        {
                            "text":  "tv channel",
                            "points":  6
                        },
                        {
                            "text":  "minds/attitude",
                            "points":  5
                        },
                        {
                            "text":  "their hair",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210663,
        "question":  "Name a business that might be very busy on Valentine's Day.",
        "answers":  [
                        {
                            "text":  "florist",
                            "points":  74
                        },
                        {
                            "text":  "restaurant/sizzler",
                            "points":  6
                        },
                        {
                            "text":  "candy shop",
                            "points":  6
                        },
                        {
                            "text":  "card shop",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  210664,
        "question":  "What would you do if someone insulted you?",
        "answers":  [
                        {
                            "text":  "walk away/ignore",
                            "points":  52
                        },
                        {
                            "text":  "insult back/yell",
                            "points":  28
                        },
                        {
                            "text":  "fight/hit them",
                            "points":  8
                        },
                        {
                            "text":  "forgive/pray for",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210665,
        "question":  "Name something a man owns that he doesn't like his wife to use.",
        "answers":  [
                        {
                            "text":  "his razor",
                            "points":  50
                        },
                        {
                            "text":  "his car/truck",
                            "points":  24
                        },
                        {
                            "text":  "his tools",
                            "points":  13
                        },
                        {
                            "text":  "his underwear",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  210666,
        "question":  "Name something Scotch.",
        "answers":  [
                        {
                            "text":  "tape",
                            "points":  39
                        },
                        {
                            "text":  "whiskey",
                            "points":  38
                        },
                        {
                            "text":  "kilt",
                            "points":  11
                        },
                        {
                            "text":  "butterscotch",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210667,
        "question":  "We asked 100 men... Name something you'd need to get if your new girlfriend wanted you to meet her folks.",
        "answers":  [
                        {
                            "text":  "new clothes/suit",
                            "points":  39
                        },
                        {
                            "text":  "a haircut",
                            "points":  28
                        },
                        {
                            "text":  "gift/wine/flowers",
                            "points":  19
                        },
                        {
                            "text":  "a job",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  210668,
        "question":  "Name a public place where mothers breast-feed babies.",
        "answers":  [
                        {
                            "text":  "restaurant",
                            "points":  38
                        },
                        {
                            "text":  "mall/store",
                            "points":  25
                        },
                        {
                            "text":  "park",
                            "points":  24
                        },
                        {
                            "text":  "airport",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  210669,
        "question":  "Name a country a product is made in that would make you trust it.",
        "answers":  [
                        {
                            "text":  "usa",
                            "points":  73
                        },
                        {
                            "text":  "germany",
                            "points":  9
                        },
                        {
                            "text":  "switzerland",
                            "points":  5
                        },
                        {
                            "text":  "japan",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210670,
        "question":  "Name something people brag about being in mint condition.",
        "answers":  [
                        {
                            "text":  "car/pinto",
                            "points":  73
                        },
                        {
                            "text":  "baseball cards",
                            "points":  7
                        },
                        {
                            "text":  "comics/batman no. 1",
                            "points":  6
                        },
                        {
                            "text":  "coins",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  210671,
        "question":  "Name something people chew that ends with the word \"ball.\"",
        "answers":  [
                        {
                            "text":  "gumball",
                            "points":  62
                        },
                        {
                            "text":  "meatball",
                            "points":  17
                        },
                        {
                            "text":  "popcorn ball",
                            "points":  6
                        },
                        {
                            "text":  "spitball",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  210672,
        "question":  "If a juggler lost his balls, name something from his kitchen he might juggle instead.",
        "answers":  [
                        {
                            "text":  "fruit/oranges",
                            "points":  56
                        },
                        {
                            "text":  "knives",
                            "points":  24
                        },
                        {
                            "text":  "eggs",
                            "points":  6
                        },
                        {
                            "text":  "dishes/glasses",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  210673,
        "question":  "Name a word that rhymes with \"zoom.\"",
        "answers":  [
                        {
                            "text":  "boom",
                            "points":  53
                        },
                        {
                            "text":  "room",
                            "points":  19
                        },
                        {
                            "text":  "broom",
                            "points":  16
                        },
                        {
                            "text":  "doom",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210674,
        "question":  "Name something that has links.",
        "answers":  [
                        {
                            "text":  "chain/jewelry",
                            "points":  49
                        },
                        {
                            "text":  "website/e-mail",
                            "points":  24
                        },
                        {
                            "text":  "fence/gate",
                            "points":  10
                        },
                        {
                            "text":  "sausage",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  210675,
        "question":  "Name a pet you wouldn't let sleep on your bed.",
        "answers":  [
                        {
                            "text":  "dog",
                            "points":  45
                        },
                        {
                            "text":  "cat",
                            "points":  34
                        },
                        {
                            "text":  "snake/python",
                            "points":  8
                        },
                        {
                            "text":  "pig",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210676,
        "question":  "Name something that might have a short fuse.",
        "answers":  [
                        {
                            "text":  "person/temper",
                            "points":  44
                        },
                        {
                            "text":  "firecracker",
                            "points":  27
                        },
                        {
                            "text":  "dynamite/bomb",
                            "points":  16
                        },
                        {
                            "text":  "animal/mama bear",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210677,
        "question":  "Name something you wouldn't want to see if you were scuba diving.",
        "answers":  [
                        {
                            "text":  "shark/eating me",
                            "points":  82
                        },
                        {
                            "text":  "corpse/skeleton",
                            "points":  4
                        },
                        {
                            "text":  "stingray",
                            "points":  2
                        },
                        {
                            "text":  "eel",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210678,
        "question":  "Name something supermodels don't do as much as ordinary people.",
        "answers":  [
                        {
                            "text":  "eat/cook",
                            "points":  76
                        },
                        {
                            "text":  "work",
                            "points":  7
                        },
                        {
                            "text":  "housework/laundry",
                            "points":  5
                        },
                        {
                            "text":  "their own makeup",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  210679,
        "question":  "Name something a person might be rolling in.",
        "answers":  [
                        {
                            "text":  "dough/cash",
                            "points":  72
                        },
                        {
                            "text":  "\"the hay\"/bed",
                            "points":  8
                        },
                        {
                            "text":  "mud",
                            "points":  7
                        },
                        {
                            "text":  "a car",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210680,
        "question":  "Name a type of movie that men enjoy watching more than women do.",
        "answers":  [
                        {
                            "text":  "action/war",
                            "points":  69
                        },
                        {
                            "text":  "horror/scary",
                            "points":  9
                        },
                        {
                            "text":  "porno",
                            "points":  8
                        },
                        {
                            "text":  "sci-fi",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210681,
        "question":  "Name an occupation where you're allowed to be half naked on the job.",
        "answers":  [
                        {
                            "text":  "lifeguard",
                            "points":  64
                        },
                        {
                            "text":  "stripper/dancer",
                            "points":  17
                        },
                        {
                            "text":  "model",
                            "points":  5
                        },
                        {
                            "text":  "construct'n/roofer",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210682,
        "question":  "Name something grandpa might lose on the roller coaster.",
        "answers":  [
                        {
                            "text":  "teeth",
                            "points":  61
                        },
                        {
                            "text":  "glasses",
                            "points":  14
                        },
                        {
                            "text":  "his lunch",
                            "points":  8
                        },
                        {
                            "text":  "hair/toupee",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  210683,
        "question":  "Name a reason a horse might not want you to ride him.",
        "answers":  [
                        {
                            "text":  "i'm a fatso!",
                            "points":  58
                        },
                        {
                            "text":  "he's hurt/sore",
                            "points":  15
                        },
                        {
                            "text":  "he's tired",
                            "points":  10
                        },
                        {
                            "text":  "wild/untrained",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  210684,
        "question":  "We asked 100 married men... Tell me something your wife might do that you'd better notice.",
        "answers":  [
                        {
                            "text":  "change hair",
                            "points":  56
                        },
                        {
                            "text":  "new outfit/dress up",
                            "points":  23
                        },
                        {
                            "text":  "lose weight",
                            "points":  8
                        },
                        {
                            "text":  "cook/special meal",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210685,
        "question":  "Name a place you'd hate to be when you're served with a court summons.",
        "answers":  [
                        {
                            "text":  "work",
                            "points":  51
                        },
                        {
                            "text":  "church",
                            "points":  24
                        },
                        {
                            "text":  "bathroom/pooping",
                            "points":  11
                        },
                        {
                            "text":  "vacay spot/disney",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210686,
        "question":  "If you heard someone talking about \"the boss,\" who would you think they were discussing?",
        "answers":  [
                        {
                            "text":  "bruce springsteen",
                            "points":  43
                        },
                        {
                            "text":  "work supervisor",
                            "points":  32
                        },
                        {
                            "text":  "spouse/mate",
                            "points":  12
                        },
                        {
                            "text":  "tony danza",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210687,
        "question":  "Name something a female magician might pull a rabbit out of.",
        "answers":  [
                        {
                            "text":  "her hat/fedora",
                            "points":  43
                        },
                        {
                            "text":  "her purse/clutch",
                            "points":  23
                        },
                        {
                            "text":  "her cleavage/bra",
                            "points":  21
                        },
                        {
                            "text":  "her shoe",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210688,
        "question":  "Name something that seems to sleep a lot.",
        "answers":  [
                        {
                            "text":  "cat",
                            "points":  41
                        },
                        {
                            "text":  "person/baby",
                            "points":  32
                        },
                        {
                            "text":  "dog",
                            "points":  10
                        },
                        {
                            "text":  "bear",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  210689,
        "question":  "Name a place most people dread going.",
        "answers":  [
                        {
                            "text":  "dentist/doctor",
                            "points":  70
                        },
                        {
                            "text":  "funeral/cemetery",
                            "points":  9
                        },
                        {
                            "text":  "work",
                            "points":  7
                        },
                        {
                            "text":  "church",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210690,
        "question":  "Name something that gives a woman support.",
        "answers":  [
                        {
                            "text":  "her bra",
                            "points":  66
                        },
                        {
                            "text":  "her friends",
                            "points":  11
                        },
                        {
                            "text":  "her spouse/boo",
                            "points":  8
                        },
                        {
                            "text":  "her hose/socks",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210691,
        "question":  "We asked 100 women... Name something you hate to do, but you do it anyway.",
        "answers":  [
                        {
                            "text":  "clean house",
                            "points":  65
                        },
                        {
                            "text":  "laundry/iron",
                            "points":  11
                        },
                        {
                            "text":  "cook",
                            "points":  9
                        },
                        {
                            "text":  "shave/wax",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210692,
        "question":  "Name something specific a person might have that they won't tell you is really fake.",
        "answers":  [
                        {
                            "text":  "jewelry",
                            "points":  54
                        },
                        {
                            "text":  "massive mounds",
                            "points":  22
                        },
                        {
                            "text":  "hair",
                            "points":  7
                        },
                        {
                            "text":  "teeth",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  210693,
        "question":  "Name something of her husband's a wife might kick when she's mad at him.",
        "answers":  [
                        {
                            "text":  "shins/body",
                            "points":  52
                        },
                        {
                            "text":  "car/truck",
                            "points":  20
                        },
                        {
                            "text":  "golf clubs/bag",
                            "points":  9
                        },
                        {
                            "text":  "shoes/boots",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  210694,
        "question":  "Name something a woman sheds.",
        "answers":  [
                        {
                            "text":  "hair",
                            "points":  43
                        },
                        {
                            "text":  "pounds/weight",
                            "points":  21
                        },
                        {
                            "text":  "clothes/shoes",
                            "points":  13
                        },
                        {
                            "text":  "dead skin",
                            "points":  12
                        }
                    ]
    },
    {
        "id":  210695,
        "question":  "Name a three-letter word that's a child's favorite thing.",
        "answers":  [
                        {
                            "text":  "toy",
                            "points":  70
                        },
                        {
                            "text":  "mom",
                            "points":  11
                        },
                        {
                            "text":  "dog",
                            "points":  4
                        },
                        {
                            "text":  "car",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210696,
        "question":  "Name something of which you have a right and a left.",
        "answers":  [
                        {
                            "text":  "hand",
                            "points":  60
                        },
                        {
                            "text":  "foot",
                            "points":  15
                        },
                        {
                            "text":  "ear",
                            "points":  8
                        },
                        {
                            "text":  "turn signal",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  210697,
        "question":  "Name something some people just don't seem to know how to close.",
        "answers":  [
                        {
                            "text":  "doors/cabinets",
                            "points":  48
                        },
                        {
                            "text":  "their mouths",
                            "points":  33
                        },
                        {
                            "text":  "toilet seat",
                            "points":  4
                        },
                        {
                            "text":  "plastic containers",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210698,
        "question":  "It's bad when you see a rat. It's worse if the rat is the size of a what?",
        "answers":  [
                        {
                            "text":  "cat",
                            "points":  45
                        },
                        {
                            "text":  "dog",
                            "points":  34
                        },
                        {
                            "text":  "horse",
                            "points":  5
                        },
                        {
                            "text":  "house",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210699,
        "question":  "Name something that too much of can be a bad thing.",
        "answers":  [
                        {
                            "text":  "alcohol/beer",
                            "points":  39
                        },
                        {
                            "text":  "food/sweets",
                            "points":  35
                        },
                        {
                            "text":  "money",
                            "points":  8
                        },
                        {
                            "text":  "drugs/crack",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  210700,
        "question":  "Name a little animal that's as scary to people as a big shark.",
        "answers":  [
                        {
                            "text":  "rat/mouse",
                            "points":  36
                        },
                        {
                            "text":  "spider/tarantula",
                            "points":  27
                        },
                        {
                            "text":  "snake",
                            "points":  18
                        },
                        {
                            "text":  "skunk",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  210701,
        "question":  "Name a musical instrument you need a good set of lips to play.",
        "answers":  [
                        {
                            "text":  "trumpet",
                            "points":  47
                        },
                        {
                            "text":  "flute",
                            "points":  20
                        },
                        {
                            "text":  "saxophone",
                            "points":  12
                        },
                        {
                            "text":  "tuba",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  210702,
        "question":  "Name something that people are sometimes said to be under.",
        "answers":  [
                        {
                            "text":  "the weather",
                            "points":  42
                        },
                        {
                            "text":  "the gun/stress",
                            "points":  19
                        },
                        {
                            "text":  "the influence",
                            "points":  16
                        },
                        {
                            "text":  "a spell",
                            "points":  10
                        }
                    ]
    },
    {
        "id":  210703,
        "question":  "Name something that starts with \"chick.\"",
        "answers":  [
                        {
                            "text":  "chicken",
                            "points":  36
                        },
                        {
                            "text":  "chick flick",
                            "points":  32
                        },
                        {
                            "text":  "chick magnet",
                            "points":  13
                        },
                        {
                            "text":  "chick-fil-a",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  210704,
        "question":  "Besides shaking hands, name another way people greet each other.",
        "answers":  [
                        {
                            "text":  "hug",
                            "points":  53
                        },
                        {
                            "text":  "kiss",
                            "points":  14
                        },
                        {
                            "text":  "nod head",
                            "points":  10
                        },
                        {
                            "text":  "wave",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  210705,
        "question":  "If you criticized a chef's cooking, name something he might hit you with.",
        "answers":  [
                        {
                            "text":  "pot/pan",
                            "points":  46
                        },
                        {
                            "text":  "spatula",
                            "points":  17
                        },
                        {
                            "text":  "rolling pin",
                            "points":  14
                        },
                        {
                            "text":  "food/french bread",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  210706,
        "question":  "Name a food you leave the skin on when eating it.",
        "answers":  [
                        {
                            "text":  "apple",
                            "points":  40
                        },
                        {
                            "text":  "chicken",
                            "points":  20
                        },
                        {
                            "text":  "potato",
                            "points":  19
                        },
                        {
                            "text":  "peach",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  210707,
        "question":  "Name something people use to discreetly remove food from their teeth.",
        "answers":  [
                        {
                            "text":  "toothpick",
                            "points":  37
                        },
                        {
                            "text":  "fingernail",
                            "points":  25
                        },
                        {
                            "text":  "tongue",
                            "points":  15
                        },
                        {
                            "text":  "napkin",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  210708,
        "question":  "Name something people try to talk their way out of.",
        "answers":  [
                        {
                            "text":  "ticket",
                            "points":  70
                        },
                        {
                            "text":  "work/at office",
                            "points":  8
                        },
                        {
                            "text":  "chores/cleaning",
                            "points":  4
                        },
                        {
                            "text":  "a lie",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210709,
        "question":  "Name something people crack open.",
        "answers":  [
                        {
                            "text":  "nuts/peanuts",
                            "points":  48
                        },
                        {
                            "text":  "alcohol/beer",
                            "points":  21
                        },
                        {
                            "text":  "eggs",
                            "points":  11
                        },
                        {
                            "text":  "windows",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  210710,
        "question":  "Name something of your mate's that you might sneak a peek at.",
        "answers":  [
                        {
                            "text":  "wallet/bank acct.",
                            "points":  38
                        },
                        {
                            "text":  "body/sexy toes",
                            "points":  22
                        },
                        {
                            "text":  "e-mail/computer",
                            "points":  16
                        },
                        {
                            "text":  "cell phone",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  210711,
        "question":  "Name something people rub for luck.",
        "answers":  [
                        {
                            "text":  "rabbit's foot",
                            "points":  40
                        },
                        {
                            "text":  "head/bald head",
                            "points":  21
                        },
                        {
                            "text":  "coin/penny",
                            "points":  14
                        },
                        {
                            "text":  "belly/buddha's",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  210712,
        "question":  "Name something you'd have to get used to if you were reincarnated as a cow.",
        "answers":  [
                        {
                            "text":  "chewing cud/grass",
                            "points":  39
                        },
                        {
                            "text":  "udder/get milked",
                            "points":  39
                        },
                        {
                            "text":  "living outside/farm",
                            "points":  3
                        },
                        {
                            "text":  "sleep standing up",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210713,
        "question":  "Name a place that people are embarrassed to admit they haven't been to in a long time.",
        "answers":  [
                        {
                            "text":  "church/temple",
                            "points":  55
                        },
                        {
                            "text":  "doctor/dentist",
                            "points":  18
                        },
                        {
                            "text":  "bathroom/shower",
                            "points":  5
                        },
                        {
                            "text":  "home/parents' home",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  210714,
        "question":  "Name a public place where you see husbands and wives arguing.",
        "answers":  [
                        {
                            "text":  "mall/store",
                            "points":  47
                        },
                        {
                            "text":  "restaurant",
                            "points":  24
                        },
                        {
                            "text":  "bar",
                            "points":  8
                        },
                        {
                            "text":  "courtroom",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210715,
        "question":  "Fill in the blank: If a dog could talk, it might say \"________ me.\"",
        "answers":  [
                        {
                            "text":  "feed",
                            "points":  41
                        },
                        {
                            "text":  "pet/scratch",
                            "points":  24
                        },
                        {
                            "text":  "walk",
                            "points":  15
                        },
                        {
                            "text":  "love",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210716,
        "question":  "Name something you might accidentally leave on all night.",
        "answers":  [
                        {
                            "text":  "lights/headlights",
                            "points":  47
                        },
                        {
                            "text":  "tv",
                            "points":  24
                        },
                        {
                            "text":  "computer",
                            "points":  8
                        },
                        {
                            "text":  "socks",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  210717,
        "question":  "Name something that pops up.",
        "answers":  [
                        {
                            "text":  "toast/toaster",
                            "points":  39
                        },
                        {
                            "text":  "jack-in-the-box",
                            "points":  25
                        },
                        {
                            "text":  "internet ads/spam",
                            "points":  14
                        },
                        {
                            "text":  "turkey timer",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  210718,
        "question":  "Fill in the blank: I wouldn't want my boss to say I was ________.",
        "answers":  [
                        {
                            "text":  "lazy",
                            "points":  50
                        },
                        {
                            "text":  "late",
                            "points":  9
                        },
                        {
                            "text":  "fired",
                            "points":  8
                        },
                        {
                            "text":  "incompetent",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  210719,
        "question":  "Name something a handsome guy might have that's ugly.",
        "answers":  [
                        {
                            "text":  "feet",
                            "points":  30
                        },
                        {
                            "text":  "personality/'tude",
                            "points":  21
                        },
                        {
                            "text":  "car",
                            "points":  14
                        },
                        {
                            "text":  "wife/mate",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  210720,
        "question":  "Name a reason a woman might say she isn't worried that her husband would cheat on her.",
        "answers":  [
                        {
                            "text":  "in love/trusts him",
                            "points":  31
                        },
                        {
                            "text":  "he's dead",
                            "points":  11
                        },
                        {
                            "text":  "he's ugly",
                            "points":  11
                        },
                        {
                            "text":  "she's got money",
                            "points":  9
                        }
                    ]
    }
];
