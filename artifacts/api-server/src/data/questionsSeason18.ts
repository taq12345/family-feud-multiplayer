import type { SurveyQuestion } from "./questions.js";

// Season 18 set: a separate question set from the main bank in questions.ts.
// Boards from Family Feud season 18, as transcribed at
// https://mstiescott.neocities.org/feud18 (crawled 2026-11-13).
// Ids start at 190001 (each season has its own block of 10,000), so they
// never clash with the main bank (1-8782), AI questions (9000+) or other
// seasons. One-answer boards are left out.
// Not used in gameplay yet.
export const SEASON18_SET = "season18";
export const SEASON18_ID_START = 190001;

export function isSeason18Question(id: number): boolean {
  return id >= SEASON18_ID_START && id < SEASON18_ID_START + 10000;
}

export const season18Questions: SurveyQuestion[] = [
    {
        "id":  190001,
        "question":  "We asked 100 single women... I wouldn't want to date a man with too much what on him?",
        "answers":  [
                        {
                            "text":  "hair",
                            "points":  25
                        },
                        {
                            "text":  "weight/fat",
                            "points":  18
                        },
                        {
                            "text":  "cologne",
                            "points":  16
                        },
                        {
                            "text":  "baggage/problems",
                            "points":  14
                        },
                        {
                            "text":  "jewelry",
                            "points":  11
                        },
                        {
                            "text":  "acne",
                            "points":  8
                        },
                        {
                            "text":  "cigarette smoke",
                            "points":  4
                        },
                        {
                            "text":  "makeup",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190002,
        "question":  "Name a part of your body that gets you in trouble.",
        "answers":  [
                        {
                            "text":  "my big mouth",
                            "points":  54
                        },
                        {
                            "text":  "my humpty dumplings",
                            "points":  17
                        },
                        {
                            "text":  "my pea brain",
                            "points":  9
                        },
                        {
                            "text":  "my hungry belly",
                            "points":  6
                        },
                        {
                            "text":  "my bubble butt",
                            "points":  5
                        },
                        {
                            "text":  "hands/middle finger",
                            "points":  3
                        },
                        {
                            "text":  "my thirsty loins",
                            "points":  3
                        },
                        {
                            "text":  "my spyin' eyes",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190003,
        "question":  "Name a part of her cheating husband's body in which a wife decides to literally bury the hatchet.",
        "answers":  [
                        {
                            "text":  "rumple stiff-skin",
                            "points":  35
                        },
                        {
                            "text":  "his back",
                            "points":  19
                        },
                        {
                            "text":  "his head",
                            "points":  17
                        },
                        {
                            "text":  "his chest/heart",
                            "points":  16
                        },
                        {
                            "text":  "his doody maker",
                            "points":  4
                        },
                        {
                            "text":  "his hand",
                            "points":  3
                        },
                        {
                            "text":  "his foot",
                            "points":  3
                        },
                        {
                            "text":  "his neck/throat",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190004,
        "question":  "We asked 100 married women... Name something your husband likes to do in the nude that you don't.",
        "answers":  [
                        {
                            "text":  "sleep",
                            "points":  23
                        },
                        {
                            "text":  "strut around",
                            "points":  22
                        },
                        {
                            "text":  "eat",
                            "points":  18
                        },
                        {
                            "text":  "make love/to self",
                            "points":  12
                        },
                        {
                            "text":  "dance",
                            "points":  12
                        },
                        {
                            "text":  "brush his teeth",
                            "points":  7
                        },
                        {
                            "text":  "watch tv",
                            "points":  3
                        },
                        {
                            "text":  "cook",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190005,
        "question":  "Name a sexy food you put on your mate's body when fooling around.",
        "answers":  [
                        {
                            "text":  "whipped cream",
                            "points":  52
                        },
                        {
                            "text":  "chocolate",
                            "points":  28
                        },
                        {
                            "text":  "fruit/berries",
                            "points":  7
                        },
                        {
                            "text":  "ice cubes",
                            "points":  3
                        },
                        {
                            "text":  "honey",
                            "points":  2
                        },
                        {
                            "text":  "ice cream",
                            "points":  2
                        },
                        {
                            "text":  "jell-o",
                            "points":  2
                        },
                        {
                            "text":  "oysters",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190006,
        "question":  "Name something you lie about on an online dating site.",
        "answers":  [
                        {
                            "text":  "weight/height",
                            "points":  49
                        },
                        {
                            "text":  "age",
                            "points":  29
                        },
                        {
                            "text":  "income/job",
                            "points":  6
                        },
                        {
                            "text":  "my past/slutdom",
                            "points":  4
                        },
                        {
                            "text":  "size of prize/jugs",
                            "points":  4
                        },
                        {
                            "text":  "being single",
                            "points":  2
                        },
                        {
                            "text":  "interests/read'g",
                            "points":  2
                        },
                        {
                            "text":  "my looks/pic",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190007,
        "question":  "Tell me a place you've told a lie to save your skin.",
        "answers":  [
                        {
                            "text":  "school",
                            "points":  39
                        },
                        {
                            "text":  "work",
                            "points":  23
                        },
                        {
                            "text":  "home",
                            "points":  18
                        },
                        {
                            "text":  "jail/police station",
                            "points":  7
                        },
                        {
                            "text":  "court",
                            "points":  5
                        },
                        {
                            "text":  "church",
                            "points":  2
                        },
                        {
                            "text":  "subway/train",
                            "points":  2
                        },
                        {
                            "text":  "bar/club",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190008,
        "question":  "Name something you should do if you don't want anyone to sit next to you.",
        "answers":  [
                        {
                            "text":  "stink/cut farts",
                            "points":  36
                        },
                        {
                            "text":  "put stuff there",
                            "points":  35
                        },
                        {
                            "text":  "cough/act sick",
                            "points":  15
                        },
                        {
                            "text":  "feet up/spread out",
                            "points":  4
                        },
                        {
                            "text":  "move seats",
                            "points":  2
                        },
                        {
                            "text":  "look crazy/drool",
                            "points":  2
                        },
                        {
                            "text":  "\"it's taken, sucka!\"",
                            "points":  2
                        },
                        {
                            "text":  "talk loudly",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190009,
        "question":  "We asked 100 women... If your man was on a nude sports calendar, what sports ball would he be holding that's big enough to cover his manhood?",
        "answers":  [
                        {
                            "text":  "basketball",
                            "points":  36
                        },
                        {
                            "text":  "football",
                            "points":  24
                        },
                        {
                            "text":  "soccer ball",
                            "points":  19
                        },
                        {
                            "text":  "baseball/softball",
                            "points":  9
                        },
                        {
                            "text":  "tennis ball",
                            "points":  4
                        },
                        {
                            "text":  "bowling ball",
                            "points":  2
                        },
                        {
                            "text":  "marble",
                            "points":  2
                        },
                        {
                            "text":  "cue/pool ball",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190010,
        "question":  "Name something of his cheating wife's a man might give to his dog to chew on.",
        "answers":  [
                        {
                            "text":  "duds/jimmy choos",
                            "points":  70
                        },
                        {
                            "text":  "new smart phone",
                            "points":  6
                        },
                        {
                            "text":  "her/her face",
                            "points":  5
                        },
                        {
                            "text":  "wedding ring",
                            "points":  4
                        },
                        {
                            "text":  "toothbrush",
                            "points":  4
                        },
                        {
                            "text":  "sex toy",
                            "points":  4
                        },
                        {
                            "text":  "purse",
                            "points":  2
                        },
                        {
                            "text":  "her credit cards",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190011,
        "question":  "A woman might say, \"I had the best dream last night. I was in bed with\" who?",
        "answers":  [
                        {
                            "text":  "celebrity",
                            "points":  66
                        },
                        {
                            "text":  "my spouse/mate",
                            "points":  11
                        },
                        {
                            "text":  "no one/myself",
                            "points":  10
                        },
                        {
                            "text":  "teddy bear",
                            "points":  2
                        },
                        {
                            "text":  "my pet/kitty",
                            "points":  2
                        },
                        {
                            "text":  "my first love",
                            "points":  2
                        },
                        {
                            "text":  "a masseur",
                            "points":  2
                        },
                        {
                            "text":  "superhero/batman",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190012,
        "question":  "We asked 100 women... Name a way you like your mattress and your man.",
        "answers":  [
                        {
                            "text":  "firm/hard",
                            "points":  52
                        },
                        {
                            "text":  "soft/gentle",
                            "points":  19
                        },
                        {
                            "text":  "strong/durable",
                            "points":  8
                        },
                        {
                            "text":  "supportive",
                            "points":  5
                        },
                        {
                            "text":  "clean",
                            "points":  4
                        },
                        {
                            "text":  "warm",
                            "points":  3
                        },
                        {
                            "text":  "comfy",
                            "points":  3
                        },
                        {
                            "text":  "adjustable",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190013,
        "question":  "Name something the cheapo airlines might start forcing two people to share.",
        "answers":  [
                        {
                            "text":  "seat",
                            "points":  45
                        },
                        {
                            "text":  "food/drink",
                            "points":  20
                        },
                        {
                            "text":  "pillow/blanket",
                            "points":  14
                        },
                        {
                            "text":  "luggage",
                            "points":  6
                        },
                        {
                            "text":  "tv monitor",
                            "points":  4
                        },
                        {
                            "text":  "tray table",
                            "points":  3
                        },
                        {
                            "text":  "oxygen mask",
                            "points":  3
                        },
                        {
                            "text":  "barf bag",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190014,
        "question":  "We asked 100 married women... What does your husband do that he thinks is cute but you think is disgusting?",
        "answers":  [
                        {
                            "text":  "fart/on my face",
                            "points":  41
                        },
                        {
                            "text":  "burp",
                            "points":  21
                        },
                        {
                            "text":  "tell dirty jokes",
                            "points":  12
                        },
                        {
                            "text":  "make out w/ dog",
                            "points":  8
                        },
                        {
                            "text":  "pose nude/strip",
                            "points":  5
                        },
                        {
                            "text":  "pee/in shower",
                            "points":  5
                        },
                        {
                            "text":  "shake wang at me",
                            "points":  3
                        },
                        {
                            "text":  "talk weird/babyish",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190015,
        "question":  "We asked 100 married women... Name something your man wears to bed that you don't find the least bit sexy.",
        "answers":  [
                        {
                            "text":  "undies/elmo ones",
                            "points":  37
                        },
                        {
                            "text":  "baggy/sweatpants",
                            "points":  28
                        },
                        {
                            "text":  "socks/knee-high",
                            "points":  19
                        },
                        {
                            "text":  "bushy beard",
                            "points":  4
                        },
                        {
                            "text":  "hat/stocking cap",
                            "points":  3
                        },
                        {
                            "text":  "gold chain",
                            "points":  2
                        },
                        {
                            "text":  "shorts/cutoffs",
                            "points":  2
                        },
                        {
                            "text":  "stinky/holey shirt",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190016,
        "question":  "We asked 100 married women... Name something your man tries to do in a sexy way that just isn't.",
        "answers":  [
                        {
                            "text":  "dance/booty shake",
                            "points":  35
                        },
                        {
                            "text":  "talk/dirty",
                            "points":  26
                        },
                        {
                            "text":  "fart",
                            "points":  11
                        },
                        {
                            "text":  "kiss me",
                            "points":  8
                        },
                        {
                            "text":  "pose",
                            "points":  8
                        },
                        {
                            "text":  "go shirtless/strip",
                            "points":  4
                        },
                        {
                            "text":  "rub/grope me",
                            "points":  3
                        },
                        {
                            "text":  "laugh",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190017,
        "question":  "The princess said, \"I kissed a frog and he turned into a prince. But he still ______s like a frog.\"",
        "answers":  [
                        {
                            "text":  "kisses",
                            "points":  32
                        },
                        {
                            "text":  "looks",
                            "points":  21
                        },
                        {
                            "text":  "smells",
                            "points":  18
                        },
                        {
                            "text":  "croaks/talks/sings",
                            "points":  16
                        },
                        {
                            "text":  "tastes",
                            "points":  3
                        },
                        {
                            "text":  "walks/hops",
                            "points":  3
                        },
                        {
                            "text":  "eats/bugs",
                            "points":  2
                        },
                        {
                            "text":  "humps me",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190018,
        "question":  "We asked 100 women... Name something specific you wear that you might rip off in the heat of passion.",
        "answers":  [
                        {
                            "text":  "bra",
                            "points":  31
                        },
                        {
                            "text":  "panties/thong",
                            "points":  24
                        },
                        {
                            "text":  "shirt/blouse",
                            "points":  24
                        },
                        {
                            "text":  "jeans/pants",
                            "points":  6
                        },
                        {
                            "text":  "nightie/gown",
                            "points":  4
                        },
                        {
                            "text":  "sweatpants",
                            "points":  3
                        },
                        {
                            "text":  "shoes",
                            "points":  3
                        },
                        {
                            "text":  "glasses",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190019,
        "question":  "Name a reason someone might say that it's great being a nudist.",
        "answers":  [
                        {
                            "text":  "freeing",
                            "points":  31
                        },
                        {
                            "text":  "no shop'g/cheaper",
                            "points":  24
                        },
                        {
                            "text":  "no laundry!",
                            "points":  12
                        },
                        {
                            "text":  "nice tan/no lines",
                            "points":  10
                        },
                        {
                            "text":  "comfort/no chafing",
                            "points":  6
                        },
                        {
                            "text":  "show my hot bod",
                            "points":  6
                        },
                        {
                            "text":  "stay cool",
                            "points":  4
                        },
                        {
                            "text":  "see nude hotties",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190020,
        "question":  "We asked 100 single women... I'm not sure I want to get married because I don't like to what?",
        "answers":  [
                        {
                            "text":  "share/my space",
                            "points":  25
                        },
                        {
                            "text":  "compromise",
                            "points":  18
                        },
                        {
                            "text":  "obey/serve evil pig",
                            "points":  15
                        },
                        {
                            "text":  "get divorced",
                            "points":  13
                        },
                        {
                            "text":  "argue",
                            "points":  9
                        },
                        {
                            "text":  "commit",
                            "points":  8
                        },
                        {
                            "text":  "have sex",
                            "points":  6
                        },
                        {
                            "text":  "clean/housework",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190021,
        "question":  "Name something that most men wouldn't turn down if it was offered to them.",
        "answers":  [
                        {
                            "text":  "nookie/cooch",
                            "points":  59
                        },
                        {
                            "text":  "money",
                            "points":  18
                        },
                        {
                            "text":  "food",
                            "points":  5
                        },
                        {
                            "text":  "new car",
                            "points":  5
                        },
                        {
                            "text":  "beer/booze",
                            "points":  3
                        },
                        {
                            "text":  "job",
                            "points":  2
                        },
                        {
                            "text":  "love",
                            "points":  2
                        },
                        {
                            "text":  "sports tickets",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190022,
        "question":  "Name a place parents would hate to hear their daughter say she met her boyfriend.",
        "answers":  [
                        {
                            "text":  "bar/nightclub",
                            "points":  59
                        },
                        {
                            "text":  "strip joint",
                            "points":  15
                        },
                        {
                            "text":  "jail/prison",
                            "points":  9
                        },
                        {
                            "text":  "web/hookup app",
                            "points":  4
                        },
                        {
                            "text":  "rehab",
                            "points":  3
                        },
                        {
                            "text":  "in bed",
                            "points":  2
                        },
                        {
                            "text":  "motel",
                            "points":  2
                        },
                        {
                            "text":  "nude beach/colony",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190023,
        "question":  "After a divorce, name someone a woman would hate to find out her ex started dating.",
        "answers":  [
                        {
                            "text":  "her bestie",
                            "points":  55
                        },
                        {
                            "text":  "her sister",
                            "points":  17
                        },
                        {
                            "text":  "celeb/model",
                            "points":  6
                        },
                        {
                            "text":  "her mom",
                            "points":  6
                        },
                        {
                            "text":  "stripper/jugs judy",
                            "points":  4
                        },
                        {
                            "text":  "young/college babe",
                            "points":  4
                        },
                        {
                            "text":  "dude/her brother",
                            "points":  2
                        },
                        {
                            "text":  "boss/coworker",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190024,
        "question":  "Name something a newly divorced woman buys just to irritate her ex-husband.",
        "answers":  [
                        {
                            "text":  "his dream car",
                            "points":  41
                        },
                        {
                            "text":  "duds/sexy ones",
                            "points":  26
                        },
                        {
                            "text":  "jewlery/rolex",
                            "points":  8
                        },
                        {
                            "text":  "guy/hung hustler",
                            "points":  7
                        },
                        {
                            "text":  "mouthwater'g jugs",
                            "points":  7
                        },
                        {
                            "text":  "a vacation",
                            "points":  3
                        },
                        {
                            "text":  "vibrator",
                            "points":  2
                        },
                        {
                            "text":  "house/next door",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190025,
        "question":  "What's the sexiest thing in your bedroom?",
        "answers":  [
                        {
                            "text":  "me, baby!",
                            "points":  34
                        },
                        {
                            "text":  "pimp bed/pillow",
                            "points":  23
                        },
                        {
                            "text":  "my boinkable boo",
                            "points":  17
                        },
                        {
                            "text":  "art/pic/calendar",
                            "points":  6
                        },
                        {
                            "text":  "sex toy/swing",
                            "points":  5
                        },
                        {
                            "text":  "undies/lingerie",
                            "points":  5
                        },
                        {
                            "text":  "mirror/over bed",
                            "points":  3
                        },
                        {
                            "text":  "mood lighting",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190026,
        "question":  "If it were up to men, what would their bride be wearing as she walked down the aisle?",
        "answers":  [
                        {
                            "text":  "nothing/just a veil",
                            "points":  33
                        },
                        {
                            "text":  "lingerie",
                            "points":  22
                        },
                        {
                            "text":  "dress/wedding dress",
                            "points":  21
                        },
                        {
                            "text":  "bikini",
                            "points":  9
                        },
                        {
                            "text":  "jeans",
                            "points":  4
                        },
                        {
                            "text":  "a miniskirt",
                            "points":  3
                        },
                        {
                            "text":  "white!",
                            "points":  2
                        },
                        {
                            "text":  "cash/money suit",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190027,
        "question":  "If a woman is compared to a Georgia peach, name a part of her body that might be fuzzy.",
        "answers":  [
                        {
                            "text":  "her honeysuckle",
                            "points":  33
                        },
                        {
                            "text":  "her arms/pits",
                            "points":  13
                        },
                        {
                            "text":  "her legs",
                            "points":  12
                        },
                        {
                            "text":  "her face/upper lip",
                            "points":  12
                        },
                        {
                            "text":  "her booty/crack",
                            "points":  10
                        },
                        {
                            "text":  "her head/hair",
                            "points":  6
                        },
                        {
                            "text":  "her jugs/nips",
                            "points":  6
                        },
                        {
                            "text":  "her belly",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190028,
        "question":  "We asked 100 women... You'd be shocked if your best friend said she was marrying your who?",
        "answers":  [
                        {
                            "text":  "brother",
                            "points":  26
                        },
                        {
                            "text":  "ex",
                            "points":  26
                        },
                        {
                            "text":  "dad",
                            "points":  12
                        },
                        {
                            "text":  "hubby/mate",
                            "points":  9
                        },
                        {
                            "text":  "son/18 year-old",
                            "points":  8
                        },
                        {
                            "text":  "cousin/elrod",
                            "points":  6
                        },
                        {
                            "text":  "sister",
                            "points":  6
                        },
                        {
                            "text":  "brother-in-law",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190029,
        "question":  "We asked 100 married women... Name an animal that best describes your husband's lovemaking style.",
        "answers":  [
                        {
                            "text":  "tiger",
                            "points":  20
                        },
                        {
                            "text":  "bear",
                            "points":  19
                        },
                        {
                            "text":  "ape/monkey",
                            "points":  17
                        },
                        {
                            "text":  "bull",
                            "points":  15
                        },
                        {
                            "text":  "lion",
                            "points":  11
                        },
                        {
                            "text":  "sloth",
                            "points":  5
                        },
                        {
                            "text":  "rabbit",
                            "points":  5
                        },
                        {
                            "text":  "dog",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190030,
        "question":  "We asked 100 married women... It's bad enough when your husband wants to make whoopee. It's worse if he wants to do it where?",
        "answers":  [
                        {
                            "text":  "kitchen",
                            "points":  19
                        },
                        {
                            "text":  "outside/front yard",
                            "points":  19
                        },
                        {
                            "text":  "car/smart car",
                            "points":  17
                        },
                        {
                            "text":  "on floor",
                            "points":  15
                        },
                        {
                            "text":  "in shower/tub",
                            "points":  8
                        },
                        {
                            "text":  "at his parents'",
                            "points":  7
                        },
                        {
                            "text":  "on toilet/pooping",
                            "points":  6
                        },
                        {
                            "text":  "in a pool",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190031,
        "question":  "We asked 100 women... Name something you wouldn't want to find out your date was carrying.",
        "answers":  [
                        {
                            "text":  "weapon/taser",
                            "points":  55
                        },
                        {
                            "text":  "disease/scabies",
                            "points":  15
                        },
                        {
                            "text":  "drugs/to sell",
                            "points":  15
                        },
                        {
                            "text":  "pic of chick/wife",
                            "points":  2
                        },
                        {
                            "text":  "animal/snake",
                            "points":  2
                        },
                        {
                            "text":  "peter pump/toy",
                            "points":  2
                        },
                        {
                            "text":  "rubbers",
                            "points":  2
                        },
                        {
                            "text":  "black book",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190032,
        "question":  "Tell me something someone with big lips might be able to do better than someone with small lips.",
        "answers":  [
                        {
                            "text":  "kiss",
                            "points":  53
                        },
                        {
                            "text":  "play tuba/instrum't",
                            "points":  11
                        },
                        {
                            "text":  "whistle",
                            "points":  10
                        },
                        {
                            "text":  "wear lipstick",
                            "points":  5
                        },
                        {
                            "text":  "blow up balloon",
                            "points":  5
                        },
                        {
                            "text":  "suck/on straw",
                            "points":  5
                        },
                        {
                            "text":  "drink/chug",
                            "points":  3
                        },
                        {
                            "text":  "smile/like steve",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190033,
        "question":  "Even after all these years, name something about grandma that grandpa still finds sexy.",
        "answers":  [
                        {
                            "text":  "face/cataract eyes",
                            "points":  52
                        },
                        {
                            "text":  "bod/prune body",
                            "points":  22
                        },
                        {
                            "text":  "voice/laugh",
                            "points":  6
                        },
                        {
                            "text":  "hot blue hair",
                            "points":  4
                        },
                        {
                            "text":  "personality/spunk",
                            "points":  4
                        },
                        {
                            "text":  "her cooking",
                            "points":  3
                        },
                        {
                            "text":  "wobbly walk",
                            "points":  2
                        },
                        {
                            "text":  "she's alive",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190034,
        "question":  "Even if a male stripper was named Mr. Hot Stuff, what about him might not be so hot?",
        "answers":  [
                        {
                            "text":  "bod/furry back",
                            "points":  43
                        },
                        {
                            "text":  "face/2-tooth grin",
                            "points":  24
                        },
                        {
                            "text":  "personality/'tude",
                            "points":  11
                        },
                        {
                            "text":  "lame dance moves",
                            "points":  5
                        },
                        {
                            "text":  "fabio haircut",
                            "points":  4
                        },
                        {
                            "text":  "mind/education",
                            "points":  3
                        },
                        {
                            "text":  "b.o./kickin' breath",
                            "points":  3
                        },
                        {
                            "text":  "outfit/g-string",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190035,
        "question":  "Name something about a female turkey that's so sexy a male turkey wants to gobble her up.",
        "answers":  [
                        {
                            "text":  "feathers/on booty",
                            "points":  39
                        },
                        {
                            "text":  "plump breasts",
                            "points":  19
                        },
                        {
                            "text":  "long legs",
                            "points":  11
                        },
                        {
                            "text":  "neck/wattle",
                            "points":  9
                        },
                        {
                            "text":  "that sexy strut",
                            "points":  7
                        },
                        {
                            "text":  "hot face/beak",
                            "points":  4
                        },
                        {
                            "text":  "angelic voice",
                            "points":  3
                        },
                        {
                            "text":  "flapping wings",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190036,
        "question":  "Name something that's cheap and greasy.",
        "answers":  [
                        {
                            "text":  "burger",
                            "points":  36
                        },
                        {
                            "text":  "french fries",
                            "points":  32
                        },
                        {
                            "text":  "oil/grease/lard",
                            "points":  7
                        },
                        {
                            "text":  "chicken/wings",
                            "points":  7
                        },
                        {
                            "text":  "pizza",
                            "points":  5
                        },
                        {
                            "text":  "bacon",
                            "points":  4
                        },
                        {
                            "text":  "taco",
                            "points":  2
                        },
                        {
                            "text":  "my ex",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190037,
        "question":  "We asked 100 men... Name a good lie that you wish someone would spread about you.",
        "answers":  [
                        {
                            "text":  "rich/successful",
                            "points":  36
                        },
                        {
                            "text":  "da bomb in bed",
                            "points":  24
                        },
                        {
                            "text":  "iq off the charts",
                            "points":  14
                        },
                        {
                            "text":  "tall/fit/athletic",
                            "points":  8
                        },
                        {
                            "text":  "player/dated j. lo",
                            "points":  4
                        },
                        {
                            "text":  "funny/outgoing",
                            "points":  4
                        },
                        {
                            "text":  "confident",
                            "points":  3
                        },
                        {
                            "text":  "famous/porn star",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190038,
        "question":  "Name something a football player might wear to bed when he wants to score.",
        "answers":  [
                        {
                            "text":  "jersey/pants",
                            "points":  24
                        },
                        {
                            "text":  "nothing",
                            "points":  23
                        },
                        {
                            "text":  "helmet",
                            "points":  16
                        },
                        {
                            "text":  "used jockstrap",
                            "points":  11
                        },
                        {
                            "text":  "team-colored condom",
                            "points":  9
                        },
                        {
                            "text":  "g-string/undies",
                            "points":  6
                        },
                        {
                            "text":  "super bowl ring",
                            "points":  4
                        },
                        {
                            "text":  "shoulder pads",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190039,
        "question":  "We asked 100 single women... Name a reason men stop calling you.",
        "answers":  [
                        {
                            "text":  "i'm clingy/needy",
                            "points":  24
                        },
                        {
                            "text":  "not into me/bored",
                            "points":  16
                        },
                        {
                            "text":  "not ready/scared",
                            "points":  16
                        },
                        {
                            "text":  "met someone",
                            "points":  14
                        },
                        {
                            "text":  "i won't do the deed",
                            "points":  10
                        },
                        {
                            "text":  "face of lyle lovett",
                            "points":  8
                        },
                        {
                            "text":  "gave him my \"cookie\"",
                            "points":  4
                        },
                        {
                            "text":  "men are idiots",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190040,
        "question":  "We asked 100 single women... Fill in the blank: Good news: Your blind date is rich. Bad news: He's also what?",
        "answers":  [
                        {
                            "text":  "beaten w/ ugly stick",
                            "points":  22
                        },
                        {
                            "text":  "bald",
                            "points":  15
                        },
                        {
                            "text":  "a tubster",
                            "points":  14
                        },
                        {
                            "text":  "rude, crazy d-bag",
                            "points":  14
                        },
                        {
                            "text":  "married",
                            "points":  10
                        },
                        {
                            "text":  "dumb/a brain donor",
                            "points":  9
                        },
                        {
                            "text":  "short like rubin",
                            "points":  6
                        },
                        {
                            "text":  "hairy",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190041,
        "question":  "We asked 100 men... If you're on a kiss cam at a game, name a relative you wouldn't want to be sitting next to.",
        "answers":  [
                        {
                            "text":  "my sister",
                            "points":  17
                        },
                        {
                            "text":  "my mom",
                            "points":  17
                        },
                        {
                            "text":  "my brother",
                            "points":  13
                        },
                        {
                            "text":  "my mother-in-law",
                            "points":  13
                        },
                        {
                            "text":  "my dad",
                            "points":  12
                        },
                        {
                            "text":  "my father-in-law",
                            "points":  11
                        },
                        {
                            "text":  "my grandma",
                            "points":  6
                        },
                        {
                            "text":  "my aunt/gertie",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  190042,
        "question":  "We asked 100 married men... It's bad when your mother-in-law visits. But it's worse if your wife wants the three of you to do what together?",
        "answers":  [
                        {
                            "text":  "tv/movie/\"beaches\"",
                            "points":  16
                        },
                        {
                            "text":  "shop",
                            "points":  16
                        },
                        {
                            "text":  "vacation/camp",
                            "points":  15
                        },
                        {
                            "text":  "live together",
                            "points":  13
                        },
                        {
                            "text":  "eat",
                            "points":  10
                        },
                        {
                            "text":  "talk",
                            "points":  9
                        },
                        {
                            "text":  "party/do shots",
                            "points":  8
                        },
                        {
                            "text":  "sleep in same bed",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  190043,
        "question":  "It's fun if you have edible underwear. It's more fun if they're made out of what food?",
        "answers":  [
                        {
                            "text":  "chocolate/candy",
                            "points":  47
                        },
                        {
                            "text":  "fruit/roll-ups",
                            "points":  21
                        },
                        {
                            "text":  "pizza",
                            "points":  8
                        },
                        {
                            "text":  "bacon",
                            "points":  6
                        },
                        {
                            "text":  "whipped cream",
                            "points":  5
                        },
                        {
                            "text":  "jell-o",
                            "points":  3
                        },
                        {
                            "text":  "cake",
                            "points":  2
                        },
                        {
                            "text":  "steak/rare ribeye",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190044,
        "question":  "We asked 100 women... Name a place you'd be embarrassed to tell your friends that you met your mate.",
        "answers":  [
                        {
                            "text":  "online/tinder",
                            "points":  43
                        },
                        {
                            "text":  "bar/18 & up bar",
                            "points":  21
                        },
                        {
                            "text":  "strip joint",
                            "points":  11
                        },
                        {
                            "text":  "fast food/rest.",
                            "points":  7
                        },
                        {
                            "text":  "sex store",
                            "points":  5
                        },
                        {
                            "text":  "jail",
                            "points":  3
                        },
                        {
                            "text":  "gas station",
                            "points":  2
                        },
                        {
                            "text":  "therapy group",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190045,
        "question":  "We asked 100 women... Name something you'd rather not do outdoors.",
        "answers":  [
                        {
                            "text":  "pee/curl some pipe",
                            "points":  43
                        },
                        {
                            "text":  "the bony express",
                            "points":  17
                        },
                        {
                            "text":  "sleep/camp",
                            "points":  16
                        },
                        {
                            "text":  "shower/bathe",
                            "points":  6
                        },
                        {
                            "text":  "exercise/walk",
                            "points":  4
                        },
                        {
                            "text":  "yard work",
                            "points":  3
                        },
                        {
                            "text":  "dress/undress",
                            "points":  3
                        },
                        {
                            "text":  "cook",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190046,
        "question":  "Name something some people do sexier than others.",
        "answers":  [
                        {
                            "text":  "dance",
                            "points":  36
                        },
                        {
                            "text":  "walk",
                            "points":  19
                        },
                        {
                            "text":  "dress/undress",
                            "points":  12
                        },
                        {
                            "text":  "smile",
                            "points":  10
                        },
                        {
                            "text":  "eat/bananas",
                            "points":  5
                        },
                        {
                            "text":  "talk",
                            "points":  5
                        },
                        {
                            "text":  "kiss",
                            "points":  4
                        },
                        {
                            "text":  "sing",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190047,
        "question":  "We asked 100 single men... Name something you'd be pleasantly surprised to find out your blind date has.",
        "answers":  [
                        {
                            "text":  "money/millions",
                            "points":  36
                        },
                        {
                            "text":  "condoms/extra thin",
                            "points":  13
                        },
                        {
                            "text":  "sense of humor",
                            "points":  13
                        },
                        {
                            "text":  "pretty face",
                            "points":  11
                        },
                        {
                            "text":  "big/real boobs",
                            "points":  7
                        },
                        {
                            "text":  "same values/ethics",
                            "points":  7
                        },
                        {
                            "text":  "a weenie",
                            "points":  5
                        },
                        {
                            "text":  "a sweet car",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190048,
        "question":  "We asked 100 single women... Name something you'd love to hear about an ex-boyfriend who dumped you.",
        "answers":  [
                        {
                            "text":  "got dumped/divorced",
                            "points":  28
                        },
                        {
                            "text":  "std/crotch critters",
                            "points":  17
                        },
                        {
                            "text":  "still single",
                            "points":  14
                        },
                        {
                            "text":  "in jail",
                            "points":  11
                        },
                        {
                            "text":  "broke/lose job",
                            "points":  8
                        },
                        {
                            "text":  "regrets it",
                            "points":  7
                        },
                        {
                            "text":  "lost his hair",
                            "points":  5
                        },
                        {
                            "text":  "dead & rotting",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190049,
        "question":  "If a stripper called himself Santa Claus, name something he might use in his act.",
        "answers":  [
                        {
                            "text":  "santa suit/hat",
                            "points":  27
                        },
                        {
                            "text":  "gift/fuzzy red sack",
                            "points":  12
                        },
                        {
                            "text":  "reindeer",
                            "points":  12
                        },
                        {
                            "text":  "bushy white beard",
                            "points":  11
                        },
                        {
                            "text":  "nude elves",
                            "points":  11
                        },
                        {
                            "text":  "north pole",
                            "points":  8
                        },
                        {
                            "text":  "candy cane",
                            "points":  8
                        },
                        {
                            "text":  "naughty list",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190050,
        "question":  "Name a specific activity at a nudist camp where you'd see a whole lot of jiggling going on.",
        "answers":  [
                        {
                            "text":  "volleyball",
                            "points":  53
                        },
                        {
                            "text":  "jogging",
                            "points":  14
                        },
                        {
                            "text":  "dancing/zumba",
                            "points":  12
                        },
                        {
                            "text":  "jumping jacks",
                            "points":  5
                        },
                        {
                            "text":  "trampoline",
                            "points":  3
                        },
                        {
                            "text":  "swimming",
                            "points":  2
                        },
                        {
                            "text":  "hula hoop",
                            "points":  2
                        },
                        {
                            "text":  "tennis",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190051,
        "question":  "Name something specific of his mother's a man wears to feel closer to her.",
        "answers":  [
                        {
                            "text":  "jewelry/cross",
                            "points":  46
                        },
                        {
                            "text":  "scarf",
                            "points":  11
                        },
                        {
                            "text":  "hat/bonnet",
                            "points":  10
                        },
                        {
                            "text":  "blanket/afghan",
                            "points":  8
                        },
                        {
                            "text":  "socks/stockings",
                            "points":  6
                        },
                        {
                            "text":  "perfume/chanel no. 5",
                            "points":  4
                        },
                        {
                            "text":  "blouse/halter top",
                            "points":  4
                        },
                        {
                            "text":  "sweater",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190052,
        "question":  "Name something a newly divorced woman might do to get back at her ex.",
        "answers":  [
                        {
                            "text":  "date/do his buds",
                            "points":  44
                        },
                        {
                            "text":  "lose weight",
                            "points":  23
                        },
                        {
                            "text":  "get boob job",
                            "points":  8
                        },
                        {
                            "text":  "blast him online",
                            "points":  4
                        },
                        {
                            "text":  "take $$$/alimony",
                            "points":  4
                        },
                        {
                            "text":  "sell/burn his stuff",
                            "points":  4
                        },
                        {
                            "text":  "key/ruin car",
                            "points":  4
                        },
                        {
                            "text":  "stalk him",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190053,
        "question":  "It's your first time at a nudist colony. What do you look forward to doing in the nude?",
        "answers":  [
                        {
                            "text":  "swimming",
                            "points":  42
                        },
                        {
                            "text":  "sunbathing",
                            "points":  21
                        },
                        {
                            "text":  "ogling/flirting",
                            "points":  11
                        },
                        {
                            "text":  "hiding/cover'g up",
                            "points":  7
                        },
                        {
                            "text":  "walking/running",
                            "points":  4
                        },
                        {
                            "text":  "sleeping",
                            "points":  4
                        },
                        {
                            "text":  "trampoline jumping",
                            "points":  2
                        },
                        {
                            "text":  "yoga",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190054,
        "question":  "We asked 100 married women... If your husband is dreaming that he's a dog, name something he might do in his sleep.",
        "answers":  [
                        {
                            "text":  "bark/growl",
                            "points":  39
                        },
                        {
                            "text":  "lick me",
                            "points":  22
                        },
                        {
                            "text":  "scratch",
                            "points":  10
                        },
                        {
                            "text":  "sniff/my butt",
                            "points":  6
                        },
                        {
                            "text":  "roll over",
                            "points":  5
                        },
                        {
                            "text":  "wag his tail",
                            "points":  5
                        },
                        {
                            "text":  "snort",
                            "points":  3
                        },
                        {
                            "text":  "hump",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190055,
        "question":  "We asked 100 men... If your package had a shipping label on it, what would it say?",
        "answers":  [
                        {
                            "text":  "fragile/handle w/ care",
                            "points":  38
                        },
                        {
                            "text":  "oversized/big",
                            "points":  26
                        },
                        {
                            "text":  "heavy load",
                            "points":  10
                        },
                        {
                            "text":  "explosive",
                            "points":  6
                        },
                        {
                            "text":  "cash on delivery",
                            "points":  6
                        },
                        {
                            "text":  "this end up",
                            "points":  3
                        },
                        {
                            "text":  "do not bend",
                            "points":  2
                        },
                        {
                            "text":  "my name",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190056,
        "question":  "When talking to someone, name something on their face that might distract you.",
        "answers":  [
                        {
                            "text":  "big poppable zit",
                            "points":  35
                        },
                        {
                            "text":  "mole",
                            "points":  18
                        },
                        {
                            "text":  "food/in teeth",
                            "points":  12
                        },
                        {
                            "text":  "booger/snot trail",
                            "points":  8
                        },
                        {
                            "text":  "scar/scratch",
                            "points":  7
                        },
                        {
                            "text":  "hair/facial hair",
                            "points":  5
                        },
                        {
                            "text":  "eyes/wonky eye",
                            "points":  4
                        },
                        {
                            "text":  "nose/pig nose",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190057,
        "question":  "Name a term of endearment it would be weird for a man to use when addressing his mother.",
        "answers":  [
                        {
                            "text":  "honey/buns",
                            "points":  32
                        },
                        {
                            "text":  "sweetie/heart",
                            "points":  21
                        },
                        {
                            "text":  "babe/babycakes",
                            "points":  18
                        },
                        {
                            "text":  "sexy/sexy mama",
                            "points":  7
                        },
                        {
                            "text":  "dear",
                            "points":  6
                        },
                        {
                            "text":  "love/lover",
                            "points":  4
                        },
                        {
                            "text":  "darling",
                            "points":  3
                        },
                        {
                            "text":  "sugar",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190058,
        "question":  "Name something the most romantic man in the world does for his wife every day.",
        "answers":  [
                        {
                            "text":  "kisses/hourly",
                            "points":  22
                        },
                        {
                            "text":  "\"i love you\"",
                            "points":  21
                        },
                        {
                            "text":  "cooks/b'fast in bed",
                            "points":  14
                        },
                        {
                            "text":  "gives flowers",
                            "points":  14
                        },
                        {
                            "text":  "compliment/so lovely",
                            "points":  10
                        },
                        {
                            "text":  "holds/hugs her",
                            "points":  4
                        },
                        {
                            "text":  "cleans/dishes",
                            "points":  4
                        },
                        {
                            "text":  "rubs her/feet",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190059,
        "question":  "We asked 100 men... Name a musical instrument that reminds you of your instrument.",
        "answers":  [
                        {
                            "text":  "flute/piccolo",
                            "points":  50
                        },
                        {
                            "text":  "clarinet",
                            "points":  13
                        },
                        {
                            "text":  "tuba",
                            "points":  6
                        },
                        {
                            "text":  "piano",
                            "points":  5
                        },
                        {
                            "text":  "guitar",
                            "points":  5
                        },
                        {
                            "text":  "trombone",
                            "points":  5
                        },
                        {
                            "text":  "bassoon",
                            "points":  5
                        },
                        {
                            "text":  "trumpet",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190060,
        "question":  "We asked 100 married men... I never argue with my wife when she's holding a what?",
        "answers":  [
                        {
                            "text":  "knife",
                            "points":  45
                        },
                        {
                            "text":  "frying pan",
                            "points":  15
                        },
                        {
                            "text":  "child/baby",
                            "points":  10
                        },
                        {
                            "text":  "gun",
                            "points":  10
                        },
                        {
                            "text":  "tv remote",
                            "points":  5
                        },
                        {
                            "text":  "vase",
                            "points":  3
                        },
                        {
                            "text":  "beer bottle",
                            "points":  2
                        },
                        {
                            "text":  "conversation",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190061,
        "question":  "Name a chore a farmer does that lovers might use as a code for making love.",
        "answers":  [
                        {
                            "text":  "plow the field",
                            "points":  39
                        },
                        {
                            "text":  "milk/the cow",
                            "points":  20
                        },
                        {
                            "text":  "bale/make hay",
                            "points":  12
                        },
                        {
                            "text":  "hoeing",
                            "points":  8
                        },
                        {
                            "text":  "plant/sow seed",
                            "points":  7
                        },
                        {
                            "text":  "churn butter",
                            "points":  2
                        },
                        {
                            "text":  "slop the pigs",
                            "points":  2
                        },
                        {
                            "text":  "till the soil",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190062,
        "question":  "We asked 100 women... Name a reason you wouldn't want to be a man.",
        "answers":  [
                        {
                            "text":  "hairy/shaving",
                            "points":  38
                        },
                        {
                            "text":  "perky dong",
                            "points":  16
                        },
                        {
                            "text":  "can't give birth",
                            "points":  12
                        },
                        {
                            "text":  "they go bald",
                            "points":  11
                        },
                        {
                            "text":  "macho/no emotion",
                            "points":  6
                        },
                        {
                            "text":  "smell",
                            "points":  5
                        },
                        {
                            "text":  "mini-minded morons",
                            "points":  2
                        },
                        {
                            "text":  "have to kill bugs",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190063,
        "question":  "If she's smart, what should a woman not do on a first date with a man she really likes?",
        "answers":  [
                        {
                            "text":  "give cookie/get preg",
                            "points":  32
                        },
                        {
                            "text":  "overtalk/i love you",
                            "points":  18
                        },
                        {
                            "text":  "kiss him",
                            "points":  15
                        },
                        {
                            "text":  "let one go",
                            "points":  14
                        },
                        {
                            "text":  "nag/complain",
                            "points":  7
                        },
                        {
                            "text":  "cook for him",
                            "points":  2
                        },
                        {
                            "text":  "play hard to get",
                            "points":  2
                        },
                        {
                            "text":  "walk away/go home",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190064,
        "question":  "We asked 100 men... Name something a woman's got that makes her hot.",
        "answers":  [
                        {
                            "text":  "boobs for days",
                            "points":  31
                        },
                        {
                            "text":  "teardrop booty",
                            "points":  18
                        },
                        {
                            "text":  "legs/bowlegs",
                            "points":  15
                        },
                        {
                            "text":  "face/smile",
                            "points":  14
                        },
                        {
                            "text":  "personality/sass",
                            "points":  5
                        },
                        {
                            "text":  "money",
                            "points":  3
                        },
                        {
                            "text":  "sexy clothes",
                            "points":  3
                        },
                        {
                            "text":  "kate moss waist",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190065,
        "question":  "Tell me something it only takes one finger to do.",
        "answers":  [
                        {
                            "text":  "point",
                            "points":  28
                        },
                        {
                            "text":  "type/text",
                            "points":  21
                        },
                        {
                            "text":  "ring doorbell",
                            "points":  11
                        },
                        {
                            "text":  "scratch",
                            "points":  8
                        },
                        {
                            "text":  "pick your nose",
                            "points":  8
                        },
                        {
                            "text":  "dial phone",
                            "points":  7
                        },
                        {
                            "text":  "flip you off",
                            "points":  5
                        },
                        {
                            "text":  "take a picture",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190066,
        "question":  "We asked 100 married men... Name a place you'd never want to hear your wife say she's going.",
        "answers":  [
                        {
                            "text":  "strip joint",
                            "points":  25
                        },
                        {
                            "text":  "mall/tiffany's",
                            "points":  16
                        },
                        {
                            "text":  "lawyer's office",
                            "points":  12
                        },
                        {
                            "text":  "jail/police station",
                            "points":  12
                        },
                        {
                            "text":  "casino",
                            "points":  9
                        },
                        {
                            "text":  "stud's place/her ex's",
                            "points":  8
                        },
                        {
                            "text":  "club/bar",
                            "points":  8
                        },
                        {
                            "text":  "bathroom/to poo",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190067,
        "question":  "Name a command given to a dog that if your boss said it to you, you'd quit.",
        "answers":  [
                        {
                            "text":  "sit",
                            "points":  24
                        },
                        {
                            "text":  "heel",
                            "points":  20
                        },
                        {
                            "text":  "roll over",
                            "points":  16
                        },
                        {
                            "text":  "fetch",
                            "points":  12
                        },
                        {
                            "text":  "beg",
                            "points":  9
                        },
                        {
                            "text":  "down/lie down",
                            "points":  5
                        },
                        {
                            "text":  "quiet/shut up!",
                            "points":  3
                        },
                        {
                            "text":  "come/here, boy!",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190068,
        "question":  "We asked 100 married men... Give me a word that a weather forecaster uses that could also describe your wife.",
        "answers":  [
                        {
                            "text":  "hot",
                            "points":  23
                        },
                        {
                            "text":  "sunny",
                            "points":  17
                        },
                        {
                            "text":  "cold",
                            "points":  12
                        },
                        {
                            "text":  "frigid",
                            "points":  10
                        },
                        {
                            "text":  "stormy",
                            "points":  9
                        },
                        {
                            "text":  "hurricane",
                            "points":  8
                        },
                        {
                            "text":  "warm",
                            "points":  7
                        },
                        {
                            "text":  "wet/moist",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  190069,
        "question":  "When you're nude, name something that feels good on your body.",
        "answers":  [
                        {
                            "text":  "water/hot bath",
                            "points":  22
                        },
                        {
                            "text":  "sheets/blankets",
                            "points":  21
                        },
                        {
                            "text":  "lotion",
                            "points":  13
                        },
                        {
                            "text":  "person/skin",
                            "points":  13
                        },
                        {
                            "text":  "sunlight",
                            "points":  7
                        },
                        {
                            "text":  "silk",
                            "points":  6
                        },
                        {
                            "text":  "fur/my cat's",
                            "points":  6
                        },
                        {
                            "text":  "towel",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190070,
        "question":  "Name something a chicken would hate to see the farmer holding.",
        "answers":  [
                        {
                            "text":  "an axe/knife",
                            "points":  73
                        },
                        {
                            "text":  "her eggs",
                            "points":  5
                        },
                        {
                            "text":  "her/her neck",
                            "points":  3
                        },
                        {
                            "text":  "a dead chicken",
                            "points":  2
                        },
                        {
                            "text":  "her chicks",
                            "points":  2
                        },
                        {
                            "text":  "a gun",
                            "points":  2
                        },
                        {
                            "text":  "a fox",
                            "points":  2
                        },
                        {
                            "text":  "kfc/fried chicken",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190071,
        "question":  "Name something that whether it's real or fake, men don't care.",
        "answers":  [
                        {
                            "text":  "her milkshakes",
                            "points":  66
                        },
                        {
                            "text":  "hair/hair color",
                            "points":  12
                        },
                        {
                            "text":  "designer duds/shoes",
                            "points":  3
                        },
                        {
                            "text":  "an apple booty",
                            "points":  2
                        },
                        {
                            "text":  "her big \"o\"",
                            "points":  2
                        },
                        {
                            "text":  "license/i.d.",
                            "points":  2
                        },
                        {
                            "text":  "eyelashes",
                            "points":  2
                        },
                        {
                            "text":  "diamonds/jewelry",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190072,
        "question":  "Name something Mrs. Claus wants out of the bedroom so she and Santa can be more romantic.",
        "answers":  [
                        {
                            "text":  "elves/pervy elf",
                            "points":  47
                        },
                        {
                            "text":  "reindeer/pets",
                            "points":  15
                        },
                        {
                            "text":  "toys/gifts",
                            "points":  9
                        },
                        {
                            "text":  "santa's outfit",
                            "points":  6
                        },
                        {
                            "text":  "food/candy",
                            "points":  5
                        },
                        {
                            "text":  "the dang sleigh",
                            "points":  3
                        },
                        {
                            "text":  "the tv",
                            "points":  3
                        },
                        {
                            "text":  "christmas tree",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190073,
        "question":  "We asked 100 women... Name a word starting with B that you might use to describe your bottom.",
        "answers":  [
                        {
                            "text":  "big",
                            "points":  32
                        },
                        {
                            "text":  "butt/buttocks",
                            "points":  26
                        },
                        {
                            "text":  "bouncy",
                            "points":  7
                        },
                        {
                            "text":  "bumpy",
                            "points":  7
                        },
                        {
                            "text":  "bodacious",
                            "points":  6
                        },
                        {
                            "text":  "bum",
                            "points":  5
                        },
                        {
                            "text":  "beautiful",
                            "points":  5
                        },
                        {
                            "text":  "bubble/bubblicious",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190074,
        "question":  "Name a word a woman might use to describe a date that rhymes with \"dunk.\"",
        "answers":  [
                        {
                            "text":  "hunk",
                            "points":  32
                        },
                        {
                            "text":  "punk",
                            "points":  24
                        },
                        {
                            "text":  "drunk",
                            "points":  8
                        },
                        {
                            "text":  "stunk",
                            "points":  7
                        },
                        {
                            "text":  "funk",
                            "points":  6
                        },
                        {
                            "text":  "skunk",
                            "points":  6
                        },
                        {
                            "text":  "junk",
                            "points":  4
                        },
                        {
                            "text":  "sunk",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190075,
        "question":  "We asked 100 men... When you swim in cold water, your manhood shrinks to the size of what fruit?",
        "answers":  [
                        {
                            "text":  "banana",
                            "points":  31
                        },
                        {
                            "text":  "grape",
                            "points":  26
                        },
                        {
                            "text":  "prune",
                            "points":  11
                        },
                        {
                            "text":  "raisin",
                            "points":  9
                        },
                        {
                            "text":  "cherry",
                            "points":  6
                        },
                        {
                            "text":  "lemon",
                            "points":  3
                        },
                        {
                            "text":  "peach",
                            "points":  3
                        },
                        {
                            "text":  "apple",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190076,
        "question":  "We asked 100 women... Name a food you'd use to make a bust of your bust.",
        "answers":  [
                        {
                            "text":  "melons",
                            "points":  31
                        },
                        {
                            "text":  "chocolate",
                            "points":  14
                        },
                        {
                            "text":  "mashed potatoes",
                            "points":  12
                        },
                        {
                            "text":  "cake",
                            "points":  10
                        },
                        {
                            "text":  "bread",
                            "points":  8
                        },
                        {
                            "text":  "oranges",
                            "points":  8
                        },
                        {
                            "text":  "butter",
                            "points":  5
                        },
                        {
                            "text":  "ground beef",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190077,
        "question":  "We asked 100 married men... Tell me one reason your wife will never work at Hooters.",
        "answers":  [
                        {
                            "text":  "odd bod/no jugs",
                            "points":  29
                        },
                        {
                            "text":  "has job/makes more $",
                            "points":  14
                        },
                        {
                            "text":  "too moral",
                            "points":  12
                        },
                        {
                            "text":  "i won't allow",
                            "points":  10
                        },
                        {
                            "text":  "not her field/skill",
                            "points":  9
                        },
                        {
                            "text":  "she's old/30+",
                            "points":  7
                        },
                        {
                            "text":  "she's too smart",
                            "points":  5
                        },
                        {
                            "text":  "shy/hates attn.",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190078,
        "question":  "We asked 100 single women... The good news is your blind date is sexy. The bad news is he's what?",
        "answers":  [
                        {
                            "text":  "broke/jobless",
                            "points":  19
                        },
                        {
                            "text":  "stupid",
                            "points":  17
                        },
                        {
                            "text":  "married",
                            "points":  15
                        },
                        {
                            "text":  "boring",
                            "points":  12
                        },
                        {
                            "text":  "gay",
                            "points":  12
                        },
                        {
                            "text":  "arrogant/a douche",
                            "points":  7
                        },
                        {
                            "text":  "90",
                            "points":  5
                        },
                        {
                            "text":  "short",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190079,
        "question":  "Name something a cowboy might say to his horse and his gal.",
        "answers":  [
                        {
                            "text":  "giddyup!",
                            "points":  40
                        },
                        {
                            "text":  "whoa, nellie!",
                            "points":  9
                        },
                        {
                            "text":  "i love you",
                            "points":  8
                        },
                        {
                            "text":  "yee-haw!",
                            "points":  8
                        },
                        {
                            "text":  "let's ride",
                            "points":  8
                        },
                        {
                            "text":  "beautiful/nice eyes",
                            "points":  7
                        },
                        {
                            "text":  "howdy/hello",
                            "points":  6
                        },
                        {
                            "text":  "go/let's go!",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190080,
        "question":  "Tell me the worst time to ask a celebrity for an autograph.",
        "answers":  [
                        {
                            "text":  "peeing/painful dump",
                            "points":  32
                        },
                        {
                            "text":  "eating",
                            "points":  29
                        },
                        {
                            "text":  "while performing",
                            "points":  11
                        },
                        {
                            "text":  "funeral",
                            "points":  8
                        },
                        {
                            "text":  "on red carpet",
                            "points":  3
                        },
                        {
                            "text":  "shopping",
                            "points":  3
                        },
                        {
                            "text":  "while puking",
                            "points":  2
                        },
                        {
                            "text":  "in court/on trial",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190081,
        "question":  "The secret to a happy marriage is to have separate what?",
        "answers":  [
                        {
                            "text":  "bank accts./money",
                            "points":  29
                        },
                        {
                            "text":  "bedrooms/beds",
                            "points":  24
                        },
                        {
                            "text":  "bathrooms/sinks",
                            "points":  16
                        },
                        {
                            "text":  "cars",
                            "points":  5
                        },
                        {
                            "text":  "houses",
                            "points":  5
                        },
                        {
                            "text":  "hobbies/interests",
                            "points":  4
                        },
                        {
                            "text":  "toothbrushes",
                            "points":  4
                        },
                        {
                            "text":  "vacations",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190082,
        "question":  "Name something a dog might do if it sees Donald Trump's hair.",
        "answers":  [
                        {
                            "text":  "bark/howl",
                            "points":  38
                        },
                        {
                            "text":  "run away/hide",
                            "points":  13
                        },
                        {
                            "text":  "pee/poo on it",
                            "points":  12
                        },
                        {
                            "text":  "attack/bite/eat it",
                            "points":  10
                        },
                        {
                            "text":  "growl",
                            "points":  6
                        },
                        {
                            "text":  "cry/whimper",
                            "points":  4
                        },
                        {
                            "text":  "barf",
                            "points":  3
                        },
                        {
                            "text":  "hump it/make puppies",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190083,
        "question":  "Give me a specific word that scares men.",
        "answers":  [
                        {
                            "text":  "marriage",
                            "points":  36
                        },
                        {
                            "text":  "commitment",
                            "points":  22
                        },
                        {
                            "text":  "pregnant",
                            "points":  10
                        },
                        {
                            "text":  "alimony",
                            "points":  9
                        },
                        {
                            "text":  "love",
                            "points":  6
                        },
                        {
                            "text":  "housework",
                            "points":  2
                        },
                        {
                            "text":  "talk",
                            "points":  2
                        },
                        {
                            "text":  "divorce",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190084,
        "question":  "Name a bird a chicken might pretend to be if it sees Colonel Sanders coming its way.",
        "answers":  [
                        {
                            "text":  "turkey",
                            "points":  27
                        },
                        {
                            "text":  "duck",
                            "points":  16
                        },
                        {
                            "text":  "hawk",
                            "points":  13
                        },
                        {
                            "text":  "vulture/buzzard",
                            "points":  12
                        },
                        {
                            "text":  "crow",
                            "points":  7
                        },
                        {
                            "text":  "eagle",
                            "points":  6
                        },
                        {
                            "text":  "pigeon",
                            "points":  5
                        },
                        {
                            "text":  "ostrich",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190085,
        "question":  "Name something you'd be shocked to hear your grandmother got caught doing.",
        "answers":  [
                        {
                            "text":  "sex/flick'g bean",
                            "points":  20
                        },
                        {
                            "text":  "stealing",
                            "points":  17
                        },
                        {
                            "text":  "drugs/'shrooms",
                            "points":  17
                        },
                        {
                            "text":  "drink'g/& driving",
                            "points":  12
                        },
                        {
                            "text":  "smoking/cigars",
                            "points":  10
                        },
                        {
                            "text":  "skinny-dipping",
                            "points":  7
                        },
                        {
                            "text":  "hooking on corner",
                            "points":  3
                        },
                        {
                            "text":  "watching porn",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190086,
        "question":  "Name something a magician might pull out of his pants that's a foot long.",
        "answers":  [
                        {
                            "text":  "hot dog",
                            "points":  18
                        },
                        {
                            "text":  "scarf/hanky",
                            "points":  18
                        },
                        {
                            "text":  "balloon",
                            "points":  17
                        },
                        {
                            "text":  "rabbit",
                            "points":  11
                        },
                        {
                            "text":  "snake",
                            "points":  8
                        },
                        {
                            "text":  "ruler",
                            "points":  7
                        },
                        {
                            "text":  "his hairy houdini",
                            "points":  6
                        },
                        {
                            "text":  "sub sandwich",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190087,
        "question":  "Name something you'd hate to find in your meatball.",
        "answers":  [
                        {
                            "text":  "hair/fur",
                            "points":  42
                        },
                        {
                            "text":  "maggots/bug/worm",
                            "points":  20
                        },
                        {
                            "text":  "bone",
                            "points":  11
                        },
                        {
                            "text":  "fingernail",
                            "points":  5
                        },
                        {
                            "text":  "veggies/onion",
                            "points":  4
                        },
                        {
                            "text":  "eggshell",
                            "points":  2
                        },
                        {
                            "text":  "severed finger",
                            "points":  2
                        },
                        {
                            "text":  "teeth",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190088,
        "question":  "Name something you'd never want to see your father wearing.",
        "answers":  [
                        {
                            "text":  "gal duds",
                            "points":  36
                        },
                        {
                            "text":  "speedo",
                            "points":  18
                        },
                        {
                            "text":  "his undies/man thong",
                            "points":  18
                        },
                        {
                            "text":  "short shorts",
                            "points":  5
                        },
                        {
                            "text":  "sandals/with socks",
                            "points":  4
                        },
                        {
                            "text":  "cap/goofy hat",
                            "points":  3
                        },
                        {
                            "text":  "birthday suit",
                            "points":  2
                        },
                        {
                            "text":  "makeup",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190089,
        "question":  "Name a specific musical instrument that sounds like you in the bathroom.",
        "answers":  [
                        {
                            "text":  "tuba",
                            "points":  33
                        },
                        {
                            "text":  "trombone",
                            "points":  12
                        },
                        {
                            "text":  "flute",
                            "points":  11
                        },
                        {
                            "text":  "trumpet",
                            "points":  10
                        },
                        {
                            "text":  "drums/bongos",
                            "points":  9
                        },
                        {
                            "text":  "violin",
                            "points":  5
                        },
                        {
                            "text":  "piano",
                            "points":  4
                        },
                        {
                            "text":  "guitar",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190090,
        "question":  "Name something of his wife's a man might wear that he would really stretch out.",
        "answers":  [
                        {
                            "text":  "panties/thong",
                            "points":  29
                        },
                        {
                            "text":  "shirt/cute tank",
                            "points":  15
                        },
                        {
                            "text":  "pants/jeggings",
                            "points":  13
                        },
                        {
                            "text":  "socks/stockings",
                            "points":  10
                        },
                        {
                            "text":  "bra",
                            "points":  8
                        },
                        {
                            "text":  "shoes",
                            "points":  7
                        },
                        {
                            "text":  "shorts/bike shorts",
                            "points":  3
                        },
                        {
                            "text":  "sweater",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190091,
        "question":  "We asked 100 women... If you had x-ray vision, what would you hate to see under your date's clothing?",
        "answers":  [
                        {
                            "text":  "a gun",
                            "points":  21
                        },
                        {
                            "text":  "masses of hair",
                            "points":  15
                        },
                        {
                            "text":  "panties/mine",
                            "points":  12
                        },
                        {
                            "text":  "fat mounds",
                            "points":  11
                        },
                        {
                            "text":  "his poo-stain undies",
                            "points":  10
                        },
                        {
                            "text":  "sock/fake bulge",
                            "points":  8
                        },
                        {
                            "text":  "his peculiar wang",
                            "points":  8
                        },
                        {
                            "text":  "a va-jay",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190092,
        "question":  "We asked 100 women... Give me a word starting with S that describes how your man kisses.",
        "answers":  [
                        {
                            "text":  "sweetly",
                            "points":  19
                        },
                        {
                            "text":  "sloppily",
                            "points":  14
                        },
                        {
                            "text":  "sexily",
                            "points":  14
                        },
                        {
                            "text":  "softly",
                            "points":  14
                        },
                        {
                            "text":  "sensuous/sensually",
                            "points":  14
                        },
                        {
                            "text":  "slowly",
                            "points":  6
                        },
                        {
                            "text":  "short",
                            "points":  4
                        },
                        {
                            "text":  "sensitively",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190093,
        "question":  "Name something a woman with good looks might have that's bad.",
        "answers":  [
                        {
                            "text":  "personality/'tude",
                            "points":  54
                        },
                        {
                            "text":  "breath/b.o.",
                            "points":  10
                        },
                        {
                            "text":  "teeth",
                            "points":  9
                        },
                        {
                            "text":  "std/gonorrhea",
                            "points":  4
                        },
                        {
                            "text":  "boob job/surgery",
                            "points":  3
                        },
                        {
                            "text":  "fashion sense",
                            "points":  3
                        },
                        {
                            "text":  "temper",
                            "points":  2
                        },
                        {
                            "text":  "hair",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190094,
        "question":  "Name something a wife hides from her husband until he finishes his weekend chores.",
        "answers":  [
                        {
                            "text":  "remote/tv",
                            "points":  42
                        },
                        {
                            "text":  "booze",
                            "points":  14
                        },
                        {
                            "text":  "boobs/thirsty loins",
                            "points":  9
                        },
                        {
                            "text":  "her hot lingerie",
                            "points":  6
                        },
                        {
                            "text":  "bills/spending",
                            "points":  4
                        },
                        {
                            "text":  "$/his allowance",
                            "points":  4
                        },
                        {
                            "text":  "sports equip.",
                            "points":  4
                        },
                        {
                            "text":  "food",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190095,
        "question":  "Name a command the Dog Whisperer might accidentally whisper to his wife.",
        "answers":  [
                        {
                            "text":  "sit",
                            "points":  41
                        },
                        {
                            "text":  "stay",
                            "points":  12
                        },
                        {
                            "text":  "roll over",
                            "points":  8
                        },
                        {
                            "text":  "fetch",
                            "points":  7
                        },
                        {
                            "text":  "hush/quiet",
                            "points":  5
                        },
                        {
                            "text":  "heel",
                            "points":  5
                        },
                        {
                            "text":  "come/here",
                            "points":  5
                        },
                        {
                            "text":  "lie down",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190096,
        "question":  "Name something a hitchhiker might be holding that would make you not pick him up.",
        "answers":  [
                        {
                            "text":  "gun",
                            "points":  38
                        },
                        {
                            "text":  "knife/sword",
                            "points":  13
                        },
                        {
                            "text":  "axe",
                            "points":  13
                        },
                        {
                            "text":  "booze/boxed wine",
                            "points":  8
                        },
                        {
                            "text":  "big stick",
                            "points":  5
                        },
                        {
                            "text":  "backpack",
                            "points":  4
                        },
                        {
                            "text":  "severed body part",
                            "points":  3
                        },
                        {
                            "text":  "baseball bat",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190097,
        "question":  "Fill in the blank: If I can't be beautiful, I at least want to be what?",
        "answers":  [
                        {
                            "text":  "smart",
                            "points":  34
                        },
                        {
                            "text":  "rich/top 1%",
                            "points":  33
                        },
                        {
                            "text":  "doable",
                            "points":  7
                        },
                        {
                            "text":  "happy",
                            "points":  4
                        },
                        {
                            "text":  "healthy/std-free",
                            "points":  3
                        },
                        {
                            "text":  "horse-wanged",
                            "points":  2
                        },
                        {
                            "text":  "skinny/waiflike",
                            "points":  2
                        },
                        {
                            "text":  "nice",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190098,
        "question":  "If your boss answers your phone, name someone you hope isn't calling.",
        "answers":  [
                        {
                            "text":  "doting parents",
                            "points":  31
                        },
                        {
                            "text":  "spouse/kinky mate",
                            "points":  22
                        },
                        {
                            "text":  "friend/frat bro",
                            "points":  11
                        },
                        {
                            "text":  "recruiter/new boss",
                            "points":  7
                        },
                        {
                            "text":  "bill collector",
                            "points":  5
                        },
                        {
                            "text":  "my drug dealer",
                            "points":  4
                        },
                        {
                            "text":  "crazy stalker ex",
                            "points":  4
                        },
                        {
                            "text":  "parole officer",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190099,
        "question":  "Name a place grandma tells grandpa to go.",
        "answers":  [
                        {
                            "text":  "to bed",
                            "points":  29
                        },
                        {
                            "text":  "straight to hell",
                            "points":  21
                        },
                        {
                            "text":  "the store",
                            "points":  18
                        },
                        {
                            "text":  "outside/on porch",
                            "points":  6
                        },
                        {
                            "text":  "the doctor",
                            "points":  4
                        },
                        {
                            "text":  "the bathroom",
                            "points":  4
                        },
                        {
                            "text":  "church",
                            "points":  3
                        },
                        {
                            "text":  "long walk...short pier",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190100,
        "question":  "Name something you'd see a restaurant chef holding that would make you leave.",
        "answers":  [
                        {
                            "text":  "animal/bug/trap",
                            "points":  62
                        },
                        {
                            "text":  "tissue/snot-rag",
                            "points":  6
                        },
                        {
                            "text":  "knife/bloody one",
                            "points":  6
                        },
                        {
                            "text":  "his quiver'g member",
                            "points":  4
                        },
                        {
                            "text":  "health dept. notice",
                            "points":  2
                        },
                        {
                            "text":  "gun/aimed at me",
                            "points":  2
                        },
                        {
                            "text":  "finger/severed",
                            "points":  2
                        },
                        {
                            "text":  "toilet plunger",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190101,
        "question":  "Fill in the blank: Grandma must be a magician because she just pulled a ______ out of her cleavage.",
        "answers":  [
                        {
                            "text":  "$/coin/wallet",
                            "points":  41
                        },
                        {
                            "text":  "ticked-off rabbit",
                            "points":  13
                        },
                        {
                            "text":  "baked ham/snack",
                            "points":  10
                        },
                        {
                            "text":  "phone",
                            "points":  9
                        },
                        {
                            "text":  "tissue/hanky",
                            "points":  7
                        },
                        {
                            "text":  "remote",
                            "points":  2
                        },
                        {
                            "text":  "gun",
                            "points":  2
                        },
                        {
                            "text":  "human/mariachi band",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190102,
        "question":  "Name someone you've given the finger to when they weren't looking.",
        "answers":  [
                        {
                            "text":  "boss/coworker",
                            "points":  32
                        },
                        {
                            "text":  "bad drivers",
                            "points":  15
                        },
                        {
                            "text":  "spouse/mate",
                            "points":  15
                        },
                        {
                            "text":  "cop",
                            "points":  7
                        },
                        {
                            "text":  "mom/parent",
                            "points":  6
                        },
                        {
                            "text":  "sibling",
                            "points":  4
                        },
                        {
                            "text":  "a blind person",
                            "points":  4
                        },
                        {
                            "text":  "my children",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190103,
        "question":  "Name a specific word that describes both a person's and a chicken's thighs.",
        "answers":  [
                        {
                            "text":  "fat",
                            "points":  28
                        },
                        {
                            "text":  "meaty",
                            "points":  25
                        },
                        {
                            "text":  "plump",
                            "points":  10
                        },
                        {
                            "text":  "legs",
                            "points":  6
                        },
                        {
                            "text":  "skinny",
                            "points":  5
                        },
                        {
                            "text":  "delicious",
                            "points":  4
                        },
                        {
                            "text":  "big",
                            "points":  4
                        },
                        {
                            "text":  "thick",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190104,
        "question":  "Name something you did as a teen you still don't want your parents to know about.",
        "answers":  [
                        {
                            "text":  "drank",
                            "points":  27
                        },
                        {
                            "text":  "boinked/chess team",
                            "points":  15
                        },
                        {
                            "text":  "drugs/dad's weed",
                            "points":  14
                        },
                        {
                            "text":  "smoked cigs",
                            "points":  11
                        },
                        {
                            "text":  "skipped school",
                            "points":  5
                        },
                        {
                            "text":  "broke curfew",
                            "points":  5
                        },
                        {
                            "text":  "stole/shoplifted",
                            "points":  5
                        },
                        {
                            "text":  "took car/no license",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190105,
        "question":  "If dogs dated, name something they might do together on their date.",
        "answers":  [
                        {
                            "text":  "eat/chew bones",
                            "points":  24
                        },
                        {
                            "text":  "walk/run/in park",
                            "points":  20
                        },
                        {
                            "text":  "sniff each other",
                            "points":  8
                        },
                        {
                            "text":  "play/fetch",
                            "points":  8
                        },
                        {
                            "text":  "chase cats/critters",
                            "points":  7
                        },
                        {
                            "text":  "hump/doggy-style",
                            "points":  7
                        },
                        {
                            "text":  "take a squirt",
                            "points":  6
                        },
                        {
                            "text":  "lick/kiss",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  190106,
        "question":  "Name something in the house a nearsighted dog might try to mate with.",
        "answers":  [
                        {
                            "text":  "stuffed animal/bear",
                            "points":  23
                        },
                        {
                            "text":  "couch",
                            "points":  15
                        },
                        {
                            "text":  "the cat",
                            "points":  13
                        },
                        {
                            "text":  "person's leg",
                            "points":  11
                        },
                        {
                            "text":  "pillow",
                            "points":  8
                        },
                        {
                            "text":  "chair",
                            "points":  7
                        },
                        {
                            "text":  "footstool/ottoman",
                            "points":  5
                        },
                        {
                            "text":  "lamp",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190107,
        "question":  "We asked 100 married men... Name one thing your wife likes better than you.",
        "answers":  [
                        {
                            "text":  "kids/anyone's",
                            "points":  20
                        },
                        {
                            "text":  "tv/movies",
                            "points":  17
                        },
                        {
                            "text":  "money",
                            "points":  14
                        },
                        {
                            "text":  "pet/gerbil",
                            "points":  9
                        },
                        {
                            "text":  "facebook",
                            "points":  7
                        },
                        {
                            "text":  "shopping",
                            "points":  7
                        },
                        {
                            "text":  "cooking",
                            "points":  7
                        },
                        {
                            "text":  "reading",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190108,
        "question":  "The one thing grandma wants to know about her blind date is if he can what?",
        "answers":  [
                        {
                            "text":  "dance/polka",
                            "points":  20
                        },
                        {
                            "text":  "drive/at night",
                            "points":  15
                        },
                        {
                            "text":  "pop a chub",
                            "points":  14
                        },
                        {
                            "text":  "walk",
                            "points":  9
                        },
                        {
                            "text":  "see",
                            "points":  8
                        },
                        {
                            "text":  "cook",
                            "points":  7
                        },
                        {
                            "text":  "hear",
                            "points":  7
                        },
                        {
                            "text":  "pay/support her",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  190109,
        "question":  "Name something an angry wife might bake in a pie when she's mad at her guy.",
        "answers":  [
                        {
                            "text":  "laxative/diuretic",
                            "points":  33
                        },
                        {
                            "text":  "blades/knife",
                            "points":  12
                        },
                        {
                            "text":  "poison/cyanide",
                            "points":  12
                        },
                        {
                            "text":  "hot sauce/peppers",
                            "points":  12
                        },
                        {
                            "text":  "dog food",
                            "points":  6
                        },
                        {
                            "text":  "poop/hers",
                            "points":  4
                        },
                        {
                            "text":  "garlic",
                            "points":  3
                        },
                        {
                            "text":  "hair/short-n-curlies",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190110,
        "question":  "We asked 100 married women... Name a kind of car that describes your husband in the bedroom.",
        "answers":  [
                        {
                            "text":  "mustang",
                            "points":  29
                        },
                        {
                            "text":  "jaguar",
                            "points":  12
                        },
                        {
                            "text":  "ferrari",
                            "points":  12
                        },
                        {
                            "text":  "truck/ford escape",
                            "points":  11
                        },
                        {
                            "text":  "porsche",
                            "points":  6
                        },
                        {
                            "text":  "cadillac",
                            "points":  5
                        },
                        {
                            "text":  "bmw",
                            "points":  5
                        },
                        {
                            "text":  "station wagon",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190111,
        "question":  "Name something a bitter ex-wife pours on her ex-husband's belongings.",
        "answers":  [
                        {
                            "text":  "gasoline",
                            "points":  48
                        },
                        {
                            "text":  "bleach",
                            "points":  13
                        },
                        {
                            "text":  "grease/oil",
                            "points":  5
                        },
                        {
                            "text":  "acid",
                            "points":  5
                        },
                        {
                            "text":  "beer/booze",
                            "points":  4
                        },
                        {
                            "text":  "honey",
                            "points":  3
                        },
                        {
                            "text":  "pee/cat pee",
                            "points":  3
                        },
                        {
                            "text":  "paint",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190112,
        "question":  "Name something that comes out of you that you can't put back in.",
        "answers":  [
                        {
                            "text":  "pee/5 lb. dump",
                            "points":  36
                        },
                        {
                            "text":  "words/anger",
                            "points":  14
                        },
                        {
                            "text":  "baby/kids",
                            "points":  8
                        },
                        {
                            "text":  "snot/sneeze",
                            "points":  8
                        },
                        {
                            "text":  "blood",
                            "points":  5
                        },
                        {
                            "text":  "hair",
                            "points":  5
                        },
                        {
                            "text":  "sweat",
                            "points":  4
                        },
                        {
                            "text":  "tears",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190113,
        "question":  "We asked 100 married women... Give me a word starting with the letter B that describes your man in the nude.",
        "answers":  [
                        {
                            "text":  "big",
                            "points":  24
                        },
                        {
                            "text":  "buff",
                            "points":  18
                        },
                        {
                            "text":  "beefy",
                            "points":  9
                        },
                        {
                            "text":  "brawny",
                            "points":  9
                        },
                        {
                            "text":  "burly",
                            "points":  7
                        },
                        {
                            "text":  "bare",
                            "points":  6
                        },
                        {
                            "text":  "beautiful",
                            "points":  6
                        },
                        {
                            "text":  "bad",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190114,
        "question":  "Name something a man might bring home that his wife would not be happy about.",
        "answers":  [
                        {
                            "text":  "his lover/fred",
                            "points":  31
                        },
                        {
                            "text":  "friend/coworker",
                            "points":  15
                        },
                        {
                            "text":  "dog/new pet",
                            "points":  12
                        },
                        {
                            "text":  "new car/porsche",
                            "points":  7
                        },
                        {
                            "text":  "booze",
                            "points":  5
                        },
                        {
                            "text":  "porn/clown porn",
                            "points":  5
                        },
                        {
                            "text":  "guns",
                            "points":  4
                        },
                        {
                            "text":  "motorcycle",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190115,
        "question":  "Name an animal it might be fun to be just for one day.",
        "answers":  [
                        {
                            "text":  "bird/chicken",
                            "points":  29
                        },
                        {
                            "text":  "dog/pomeranian",
                            "points":  19
                        },
                        {
                            "text":  "lion",
                            "points":  9
                        },
                        {
                            "text":  "cat",
                            "points":  7
                        },
                        {
                            "text":  "monkey/ape",
                            "points":  6
                        },
                        {
                            "text":  "tiger",
                            "points":  5
                        },
                        {
                            "text":  "horse",
                            "points":  5
                        },
                        {
                            "text":  "fox",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190116,
        "question":  "If the Easter Bunny pooped candy, what specific candy would he poop?",
        "answers":  [
                        {
                            "text":  "jelly beans",
                            "points":  25
                        },
                        {
                            "text":  "chocolate eggs",
                            "points":  16
                        },
                        {
                            "text":  "hershey's kisses",
                            "points":  13
                        },
                        {
                            "text":  "skittles",
                            "points":  10
                        },
                        {
                            "text":  "peeps",
                            "points":  6
                        },
                        {
                            "text":  "raisinets",
                            "points":  5
                        },
                        {
                            "text":  "milk duds",
                            "points":  4
                        },
                        {
                            "text":  "m&m's",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190117,
        "question":  "We asked 100 men... What would a woman do in your car on a first date that would make it your last date?",
        "answers":  [
                        {
                            "text":  "puke/in my lap",
                            "points":  31
                        },
                        {
                            "text":  "fart & lock windows",
                            "points":  20
                        },
                        {
                            "text":  "smoke cig",
                            "points":  12
                        },
                        {
                            "text":  "kiss/seduce me",
                            "points":  5
                        },
                        {
                            "text":  "text/call her ex",
                            "points":  5
                        },
                        {
                            "text":  "hit/slap me",
                            "points":  3
                        },
                        {
                            "text":  "tune radio/kenny g",
                            "points":  3
                        },
                        {
                            "text":  "snobby/insult car",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190118,
        "question":  "Name a word a wife calls the woman her husband dumped her for.",
        "answers":  [
                        {
                            "text":  "beeyatch",
                            "points":  26
                        },
                        {
                            "text":  "slut",
                            "points":  14
                        },
                        {
                            "text":  "whore/ho",
                            "points":  13
                        },
                        {
                            "text":  "hussy",
                            "points":  9
                        },
                        {
                            "text":  "mistress",
                            "points":  6
                        },
                        {
                            "text":  "tramp",
                            "points":  5
                        },
                        {
                            "text":  "home-wrecker",
                            "points":  5
                        },
                        {
                            "text":  "floozy",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190119,
        "question":  "Name something a female nudist might wear to look sexy.",
        "answers":  [
                        {
                            "text":  "jewelry/nip rings",
                            "points":  24
                        },
                        {
                            "text":  "heels/shoes",
                            "points":  14
                        },
                        {
                            "text":  "nothing/a smile",
                            "points":  12
                        },
                        {
                            "text":  "lingerie/stockings",
                            "points":  12
                        },
                        {
                            "text":  "hat/cowboy hat",
                            "points":  7
                        },
                        {
                            "text":  "flowers",
                            "points":  5
                        },
                        {
                            "text":  "makeup/bronzer",
                            "points":  5
                        },
                        {
                            "text":  "sunglasses",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190120,
        "question":  "We asked 100 married women... As a prank, what might you put in your husband's underwear?",
        "answers":  [
                        {
                            "text":  "chocolate/food",
                            "points":  24
                        },
                        {
                            "text":  "itching powder",
                            "points":  13
                        },
                        {
                            "text":  "a sock",
                            "points":  11
                        },
                        {
                            "text":  "ben gay/menthol",
                            "points":  9
                        },
                        {
                            "text":  "ice cubes",
                            "points":  7
                        },
                        {
                            "text":  "critter/fake one",
                            "points":  7
                        },
                        {
                            "text":  "love note/card",
                            "points":  7
                        },
                        {
                            "text":  "starch",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190121,
        "question":  "If a man cheats on his wife, name something of his she might throw into a wood chipper.",
        "answers":  [
                        {
                            "text":  "clothes/shoes",
                            "points":  23
                        },
                        {
                            "text":  "him/his man berries",
                            "points":  17
                        },
                        {
                            "text":  "cell phone",
                            "points":  15
                        },
                        {
                            "text":  "sports equipment",
                            "points":  12
                        },
                        {
                            "text":  "memorabilia",
                            "points":  5
                        },
                        {
                            "text":  "wallet/money",
                            "points":  4
                        },
                        {
                            "text":  "his picture",
                            "points":  3
                        },
                        {
                            "text":  "pickle pleasin' ho",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190122,
        "question":  "After the groom is a no-show, name something the bride cuts with the cake knife.",
        "answers":  [
                        {
                            "text":  "wedding dress",
                            "points":  18
                        },
                        {
                            "text":  "the cake",
                            "points":  14
                        },
                        {
                            "text":  "groom/his throat",
                            "points":  14
                        },
                        {
                            "text":  "his picture",
                            "points":  10
                        },
                        {
                            "text":  "herself/wrists",
                            "points":  8
                        },
                        {
                            "text":  "cake topper groom",
                            "points":  7
                        },
                        {
                            "text":  "the best man",
                            "points":  6
                        },
                        {
                            "text":  "the flowers",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190123,
        "question":  "Name something a wife might do while her cheating husband sleeps.",
        "answers":  [
                        {
                            "text":  "check phone/e-mail",
                            "points":  22
                        },
                        {
                            "text":  "cut dong",
                            "points":  13
                        },
                        {
                            "text":  "toss his stuff",
                            "points":  10
                        },
                        {
                            "text":  "leave the manslut",
                            "points":  8
                        },
                        {
                            "text":  "take his money",
                            "points":  8
                        },
                        {
                            "text":  "cheat/ride a stud",
                            "points":  8
                        },
                        {
                            "text":  "shave him/eyebrows",
                            "points":  7
                        },
                        {
                            "text":  "kill him",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190124,
        "question":  "We asked 100 men... Name something women have that you'd like to have.",
        "answers":  [
                        {
                            "text":  "body/jugs & cooch",
                            "points":  18
                        },
                        {
                            "text":  "brains/sense",
                            "points":  15
                        },
                        {
                            "text":  "thick hair",
                            "points":  13
                        },
                        {
                            "text":  "nothing",
                            "points":  10
                        },
                        {
                            "text":  "sex appeal/looks",
                            "points":  8
                        },
                        {
                            "text":  "duds/fluffy socks",
                            "points":  6
                        },
                        {
                            "text":  "money",
                            "points":  5
                        },
                        {
                            "text":  "multiple \"o\"s",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190125,
        "question":  "Name something you're pretty sure they won't let you do in heaven.",
        "answers":  [
                        {
                            "text":  "swear",
                            "points":  16
                        },
                        {
                            "text":  "kill",
                            "points":  13
                        },
                        {
                            "text":  "slut it up/orgy",
                            "points":  13
                        },
                        {
                            "text":  "smoke",
                            "points":  11
                        },
                        {
                            "text":  "drink",
                            "points":  9
                        },
                        {
                            "text":  "gamble",
                            "points":  7
                        },
                        {
                            "text":  "drugs/toke a doob",
                            "points":  6
                        },
                        {
                            "text":  "watch tv",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190126,
        "question":  "If you had a choice, name something you'd like to be holding when you die.",
        "answers":  [
                        {
                            "text":  "loved one/hand",
                            "points":  46
                        },
                        {
                            "text":  "pics/of family",
                            "points":  10
                        },
                        {
                            "text":  "my pet/boa",
                            "points":  6
                        },
                        {
                            "text":  "boobs/hot bimbo",
                            "points":  5
                        },
                        {
                            "text":  "teddy bear",
                            "points":  3
                        },
                        {
                            "text":  "jewelry/ring",
                            "points":  3
                        },
                        {
                            "text":  "my saluting salami",
                            "points":  3
                        },
                        {
                            "text":  "my money",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190127,
        "question":  "You're going to prison and you can bring one thing with you. What do you choose?",
        "answers":  [
                        {
                            "text":  "phone",
                            "points":  31
                        },
                        {
                            "text":  "computer/tablet",
                            "points":  14
                        },
                        {
                            "text":  "book/mag/bible",
                            "points":  10
                        },
                        {
                            "text":  "gun",
                            "points":  7
                        },
                        {
                            "text":  "key to my cell",
                            "points":  5
                        },
                        {
                            "text":  "my spouse/mate",
                            "points":  4
                        },
                        {
                            "text":  "my pillow",
                            "points":  4
                        },
                        {
                            "text":  "big box of rubbers",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190128,
        "question":  "Name something a wife refers to when she tells her husband, \"Either it goes or I do.\"",
        "answers":  [
                        {
                            "text":  "pet/snake",
                            "points":  26
                        },
                        {
                            "text":  "clothes/*nsync tee",
                            "points":  13
                        },
                        {
                            "text":  "recliner/furn.",
                            "points":  11
                        },
                        {
                            "text":  "other girl/tramp",
                            "points":  7
                        },
                        {
                            "text":  "tv/sports",
                            "points":  6
                        },
                        {
                            "text":  "old mags/porn",
                            "points":  5
                        },
                        {
                            "text":  "car/'76 gremlin",
                            "points":  4
                        },
                        {
                            "text":  "the booze",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190129,
        "question":  "We asked 100 single men... I'm not really interested in a woman if she has what?",
        "answers":  [
                        {
                            "text":  "kids",
                            "points":  15
                        },
                        {
                            "text":  "b.o./bad breath",
                            "points":  13
                        },
                        {
                            "text":  "a man/husband",
                            "points":  10
                        },
                        {
                            "text":  "'tude/bad personality",
                            "points":  9
                        },
                        {
                            "text":  "baggage/issues",
                            "points":  8
                        },
                        {
                            "text":  "bad skin/warts",
                            "points":  7
                        },
                        {
                            "text":  "fur/chest hair",
                            "points":  6
                        },
                        {
                            "text":  "std/more than 2",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  190130,
        "question":  "If your grandpa were on Twitter, name something he might tweet about.",
        "answers":  [
                        {
                            "text":  "grandma",
                            "points":  21
                        },
                        {
                            "text":  "kids",
                            "points":  11
                        },
                        {
                            "text":  "old days/job",
                            "points":  10
                        },
                        {
                            "text":  "ailments/constipated",
                            "points":  8
                        },
                        {
                            "text":  "fishing/hunting",
                            "points":  6
                        },
                        {
                            "text":  "weather",
                            "points":  5
                        },
                        {
                            "text":  "sports",
                            "points":  4
                        },
                        {
                            "text":  "deaths/funeral",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190131,
        "question":  "We asked 100 married women... Name something your spouse does like a pig.",
        "answers":  [
                        {
                            "text":  "snores",
                            "points":  39
                        },
                        {
                            "text":  "eats",
                            "points":  27
                        },
                        {
                            "text":  "farts",
                            "points":  13
                        },
                        {
                            "text":  "gets muddy/filthy",
                            "points":  11
                        },
                        {
                            "text":  "leaves stuff around",
                            "points":  6
                        },
                        {
                            "text":  "looks like one",
                            "points":  2
                        },
                        {
                            "text":  "finds truffles",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190132,
        "question":  "We asked 100 married women... Name something you still won't do in front of your husband.",
        "answers":  [
                        {
                            "text":  "take massive dump",
                            "points":  37
                        },
                        {
                            "text":  "rip hearty fart",
                            "points":  15
                        },
                        {
                            "text":  "shower",
                            "points":  14
                        },
                        {
                            "text":  "put on makeup",
                            "points":  13
                        },
                        {
                            "text":  "change clothes",
                            "points":  9
                        },
                        {
                            "text":  "shave/my stache",
                            "points":  7
                        },
                        {
                            "text":  "sing/hanson songs",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190133,
        "question":  "We asked 100 women... Fill in the blank: To turn me on, a guy should run his fingers down my what?",
        "answers":  [
                        {
                            "text":  "back",
                            "points":  35
                        },
                        {
                            "text":  "neck",
                            "points":  19
                        },
                        {
                            "text":  "leg/inner thigh",
                            "points":  19
                        },
                        {
                            "text":  "hair",
                            "points":  9
                        },
                        {
                            "text":  "arm",
                            "points":  7
                        },
                        {
                            "text":  "cheek",
                            "points":  6
                        },
                        {
                            "text":  "jiggling jugs",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190134,
        "question":  "If a stripper was Dorothy from \"The Wizard of Oz,\" what would she discard during her act?",
        "answers":  [
                        {
                            "text":  "ruby slippers",
                            "points":  65
                        },
                        {
                            "text":  "toto too!",
                            "points":  10
                        },
                        {
                            "text":  "cute gingham dress",
                            "points":  10
                        },
                        {
                            "text":  "hair ribbons",
                            "points":  5
                        },
                        {
                            "text":  "her basket",
                            "points":  4
                        },
                        {
                            "text":  "everything",
                            "points":  3
                        },
                        {
                            "text":  "bloomers/undies",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190135,
        "question":  "Name something about a male frog that a female frog might think is sexy.",
        "answers":  [
                        {
                            "text":  "his studly croak",
                            "points":  56
                        },
                        {
                            "text":  "wide-set peepers",
                            "points":  13
                        },
                        {
                            "text":  "his long tongue",
                            "points":  9
                        },
                        {
                            "text":  "his dreamy warts",
                            "points":  7
                        },
                        {
                            "text":  "high-hoppin' legs",
                            "points":  6
                        },
                        {
                            "text":  "bulging throat/neck",
                            "points":  6
                        },
                        {
                            "text":  "his color/spots",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190136,
        "question":  "We asked 100 married women... Name something you could forgive your dog for doing but not your man.",
        "answers":  [
                        {
                            "text":  "pee/poo on floor",
                            "points":  53
                        },
                        {
                            "text":  "not listening",
                            "points":  15
                        },
                        {
                            "text":  "not picking up",
                            "points":  12
                        },
                        {
                            "text":  "biting/rough play",
                            "points":  8
                        },
                        {
                            "text":  "lick'g someone else/dog",
                            "points":  6
                        },
                        {
                            "text":  "hogging bed/sofa",
                            "points":  3
                        },
                        {
                            "text":  "eating my shoes",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190137,
        "question":  "We asked 100 married men... I'd love it if my wife greeted me at the door holding a what?",
        "answers":  [
                        {
                            "text":  "drink/beer",
                            "points":  50
                        },
                        {
                            "text":  "steak/burger",
                            "points":  15
                        },
                        {
                            "text":  "pair of slippers",
                            "points":  11
                        },
                        {
                            "text":  "robe",
                            "points":  9
                        },
                        {
                            "text":  "key/to new car",
                            "points":  6
                        },
                        {
                            "text":  "boob/other gal's",
                            "points":  5
                        },
                        {
                            "text":  "winning lotto tkt.",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190138,
        "question":  "Name a part of his body where a man should not remove his hair.",
        "answers":  [
                        {
                            "text":  "groin",
                            "points":  22
                        },
                        {
                            "text":  "legs",
                            "points":  20
                        },
                        {
                            "text":  "head",
                            "points":  19
                        },
                        {
                            "text":  "pecs/nips",
                            "points":  15
                        },
                        {
                            "text":  "arms/pits",
                            "points":  15
                        },
                        {
                            "text":  "face/eyebrows",
                            "points":  5
                        },
                        {
                            "text":  "butt",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190139,
        "question":  "Fill in the blank: The lady elephant said to her male suitor, \"My, what a big ______ you have.\"",
        "answers":  [
                        {
                            "text":  "trunk/nose",
                            "points":  71
                        },
                        {
                            "text":  "ear",
                            "points":  9
                        },
                        {
                            "text":  "tusk",
                            "points":  8
                        },
                        {
                            "text":  "body/weight",
                            "points":  3
                        },
                        {
                            "text":  "woody",
                            "points":  3
                        },
                        {
                            "text":  "foot",
                            "points":  2
                        },
                        {
                            "text":  "wrinkly rump",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190140,
        "question":  "Name something you don't want to see coming out of someone's mouth.",
        "answers":  [
                        {
                            "text":  "food/puke",
                            "points":  67
                        },
                        {
                            "text":  "spit/drool/foam",
                            "points":  10
                        },
                        {
                            "text":  "blood",
                            "points":  8
                        },
                        {
                            "text":  "cuss words",
                            "points":  5
                        },
                        {
                            "text":  "bugs/worms",
                            "points":  4
                        },
                        {
                            "text":  "lies & more lies!",
                            "points":  2
                        },
                        {
                            "text":  "their teeth",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190141,
        "question":  "The bad news: Grandma got a tattoo. The worse news: She got it on her what?",
        "answers":  [
                        {
                            "text":  "prune blaster",
                            "points":  48
                        },
                        {
                            "text":  "floor-scraping boob",
                            "points":  35
                        },
                        {
                            "text":  "face/forehead",
                            "points":  6
                        },
                        {
                            "text":  "hoo-ha",
                            "points":  3
                        },
                        {
                            "text":  "neck",
                            "points":  2
                        },
                        {
                            "text":  "arm",
                            "points":  2
                        },
                        {
                            "text":  "back",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190142,
        "question":  "We asked 100 single men... Name something you'd say about yourself just to get a girl to break up with you.",
        "answers":  [
                        {
                            "text":  "cheat/did your bff",
                            "points":  41
                        },
                        {
                            "text":  "lost my job/broke",
                            "points":  33
                        },
                        {
                            "text":  "gay/into your dad",
                            "points":  10
                        },
                        {
                            "text":  "i won't commit",
                            "points":  5
                        },
                        {
                            "text":  "i'm a druggie",
                            "points":  4
                        },
                        {
                            "text":  "i'm a felon",
                            "points":  3
                        },
                        {
                            "text":  "i'm a freaky perv",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190143,
        "question":  "We asked 100 single men... Fill in the blank: To end a bad date early, I'll tell a woman I have what?",
        "answers":  [
                        {
                            "text":  "to sleep/early day",
                            "points":  41
                        },
                        {
                            "text":  "every known std",
                            "points":  17
                        },
                        {
                            "text":  "wife/girlfriend",
                            "points":  14
                        },
                        {
                            "text":  "work to do",
                            "points":  13
                        },
                        {
                            "text":  "no money",
                            "points":  6
                        },
                        {
                            "text":  "another date",
                            "points":  5
                        },
                        {
                            "text":  "gas/leaking booty",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190144,
        "question":  "Fill in the blank: I was shocked when my date stuck a breadstick in his what?",
        "answers":  [
                        {
                            "text":  "ear",
                            "points":  30
                        },
                        {
                            "text":  "pants/pocket",
                            "points":  26
                        },
                        {
                            "text":  "nose",
                            "points":  15
                        },
                        {
                            "text":  "drink",
                            "points":  13
                        },
                        {
                            "text":  "food/ketchup",
                            "points":  6
                        },
                        {
                            "text":  "butt/hamflower",
                            "points":  4
                        },
                        {
                            "text":  "mouth/down throat",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190145,
        "question":  "We asked 100 men... Name something you'd be embarrassed to find out an 80-year-old man could do better than you.",
        "answers":  [
                        {
                            "text":  "push-ups/weights",
                            "points":  29
                        },
                        {
                            "text":  "please punani",
                            "points":  26
                        },
                        {
                            "text":  "run/walk",
                            "points":  20
                        },
                        {
                            "text":  "pick up babes",
                            "points":  8
                        },
                        {
                            "text":  "dance/whip/nae nae",
                            "points":  6
                        },
                        {
                            "text":  "sports/golf",
                            "points":  6
                        },
                        {
                            "text":  "drive",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190146,
        "question":  "Name a shape people's bottoms come in.",
        "answers":  [
                        {
                            "text":  "pear",
                            "points":  28
                        },
                        {
                            "text":  "round/circle/bubble",
                            "points":  27
                        },
                        {
                            "text":  "apple",
                            "points":  27
                        },
                        {
                            "text":  "heart",
                            "points":  7
                        },
                        {
                            "text":  "pancake",
                            "points":  5
                        },
                        {
                            "text":  "peach",
                            "points":  2
                        },
                        {
                            "text":  "melon/watermelon",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190147,
        "question":  "If Santa got stuck in the chimney, name someone he might call on his cell phone.",
        "answers":  [
                        {
                            "text":  "elf central",
                            "points":  27
                        },
                        {
                            "text":  "his old lady",
                            "points":  26
                        },
                        {
                            "text":  "rudolph/reindeer",
                            "points":  23
                        },
                        {
                            "text":  "911/fire dept.",
                            "points":  15
                        },
                        {
                            "text":  "chimney sweep",
                            "points":  3
                        },
                        {
                            "text":  "easter bunny",
                            "points":  2
                        },
                        {
                            "text":  "kids/homeowner",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190148,
        "question":  "Fill in the blank: Steve Harvey could be on a list called \"The top five best\" what?",
        "answers":  [
                        {
                            "text":  "tv hosts",
                            "points":  53
                        },
                        {
                            "text":  "comedians",
                            "points":  27
                        },
                        {
                            "text":  "dressed",
                            "points":  7
                        },
                        {
                            "text":  "talkers/radio voices",
                            "points":  3
                        },
                        {
                            "text":  "mustaches",
                            "points":  3
                        },
                        {
                            "text":  "miss univ. bloopers",
                            "points":  2
                        },
                        {
                            "text":  "men",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190149,
        "question":  "We asked 100 women... If you were dating a clown, you might come home with a big red nose in your what?",
        "answers":  [
                        {
                            "text":  "clothes/cleavage",
                            "points":  53
                        },
                        {
                            "text":  "purse",
                            "points":  21
                        },
                        {
                            "text":  "hair",
                            "points":  9
                        },
                        {
                            "text":  "ear",
                            "points":  4
                        },
                        {
                            "text":  "mouth",
                            "points":  4
                        },
                        {
                            "text":  "coochie",
                            "points":  3
                        },
                        {
                            "text":  "hand",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190150,
        "question":  "Name something a woman has that's fake but still expensive.",
        "answers":  [
                        {
                            "text":  "grand tetons",
                            "points":  45
                        },
                        {
                            "text":  "jewelry",
                            "points":  29
                        },
                        {
                            "text":  "fur/fur coat",
                            "points":  8
                        },
                        {
                            "text":  "purse",
                            "points":  7
                        },
                        {
                            "text":  "hair/color",
                            "points":  4
                        },
                        {
                            "text":  "smile/teeth",
                            "points":  2
                        },
                        {
                            "text":  "eyelashes",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190151,
        "question":  "We asked 100 married men... If you drew a picture of your wife, name a part you'd be smart to draw smaller than the actual size.",
        "answers":  [
                        {
                            "text":  "waist/belly",
                            "points":  44
                        },
                        {
                            "text":  "texas-sized tuchas",
                            "points":  29
                        },
                        {
                            "text":  "beak/pig nose",
                            "points":  9
                        },
                        {
                            "text":  "her hippo hips",
                            "points":  5
                        },
                        {
                            "text":  "her man hands",
                            "points":  4
                        },
                        {
                            "text":  "linebacker neck",
                            "points":  3
                        },
                        {
                            "text":  "huge alien head",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190152,
        "question":  "If Minnie Mouse caught Mickey cheating on her, name a way she might exterminate the rat.",
        "answers":  [
                        {
                            "text":  "poison/d-con cheese",
                            "points":  43
                        },
                        {
                            "text":  "mousetrap",
                            "points":  35
                        },
                        {
                            "text":  "hit/stomp/flatten",
                            "points":  8
                        },
                        {
                            "text":  "stab/chop up",
                            "points":  3
                        },
                        {
                            "text":  "feed him to a cat",
                            "points":  3
                        },
                        {
                            "text":  "strangle/hang him",
                            "points":  3
                        },
                        {
                            "text":  "hit man",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190153,
        "question":  "We asked 100 married women... If you were married to a magician, name something you might tell him he couldn't bring into bed with him.",
        "answers":  [
                        {
                            "text":  "horned-up rabbit",
                            "points":  40
                        },
                        {
                            "text":  "his hat",
                            "points":  18
                        },
                        {
                            "text":  "his magic wand",
                            "points":  12
                        },
                        {
                            "text":  "his pecking birds",
                            "points":  11
                        },
                        {
                            "text":  "his saw",
                            "points":  9
                        },
                        {
                            "text":  "his cards",
                            "points":  4
                        },
                        {
                            "text":  "his socks",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190154,
        "question":  "Name a way an egg is prepared that also describes your boss.",
        "answers":  [
                        {
                            "text":  "scrambled",
                            "points":  39
                        },
                        {
                            "text":  "hard/soft-boiled",
                            "points":  26
                        },
                        {
                            "text":  "fried",
                            "points":  14
                        },
                        {
                            "text":  "over easy",
                            "points":  9
                        },
                        {
                            "text":  "sunny-side up",
                            "points":  4
                        },
                        {
                            "text":  "poached",
                            "points":  3
                        },
                        {
                            "text":  "runny",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190155,
        "question":  "We asked 100 women... A romantic candlelit dinner wouldn't be complete without what?",
        "answers":  [
                        {
                            "text":  "booze/champagne",
                            "points":  38
                        },
                        {
                            "text":  "food/dessert",
                            "points":  31
                        },
                        {
                            "text":  "music/billy ocean",
                            "points":  7
                        },
                        {
                            "text":  "candles",
                            "points":  7
                        },
                        {
                            "text":  "sucking face",
                            "points":  6
                        },
                        {
                            "text":  "my man/chick",
                            "points":  5
                        },
                        {
                            "text":  "flowers",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190156,
        "question":  "Name a part of their body in which people have been known to hide things.",
        "answers":  [
                        {
                            "text":  "\"uranus\"",
                            "points":  34
                        },
                        {
                            "text":  "mouth",
                            "points":  24
                        },
                        {
                            "text":  "dairy pillows",
                            "points":  18
                        },
                        {
                            "text":  "armpit",
                            "points":  8
                        },
                        {
                            "text":  "belly/button",
                            "points":  7
                        },
                        {
                            "text":  "va-jay-jay/weenie",
                            "points":  4
                        },
                        {
                            "text":  "hair/wig",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190157,
        "question":  "We asked 100 women... Name something you like to cover yourself with.",
        "answers":  [
                        {
                            "text":  "clothes/robe",
                            "points":  26
                        },
                        {
                            "text":  "blanket/sheets",
                            "points":  24
                        },
                        {
                            "text":  "lotion/sunscreen",
                            "points":  19
                        },
                        {
                            "text":  "cold hard cash",
                            "points":  16
                        },
                        {
                            "text":  "chocolate/nutella",
                            "points":  8
                        },
                        {
                            "text":  "nude men/babes",
                            "points":  2
                        },
                        {
                            "text":  "diamonds",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190158,
        "question":  "We asked 100 single women... I'm willing to marry a man with no money as long as he has what?",
        "answers":  [
                        {
                            "text":  "humor/personality",
                            "points":  24
                        },
                        {
                            "text":  "mind of einstein",
                            "points":  21
                        },
                        {
                            "text":  "job/ambition",
                            "points":  17
                        },
                        {
                            "text":  "dreamboat face",
                            "points":  14
                        },
                        {
                            "text":  "heart/character",
                            "points":  12
                        },
                        {
                            "text":  "love for me",
                            "points":  6
                        },
                        {
                            "text":  "a home/property",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190159,
        "question":  "Name something grandpa likes within reach so he doesn't have to go far to get it.",
        "answers":  [
                        {
                            "text":  "tv remote",
                            "points":  66
                        },
                        {
                            "text":  "beverage/beer",
                            "points":  11
                        },
                        {
                            "text":  "cane",
                            "points":  6
                        },
                        {
                            "text":  "candy/snacks",
                            "points":  5
                        },
                        {
                            "text":  "meds",
                            "points":  3
                        },
                        {
                            "text":  "grandma",
                            "points":  3
                        },
                        {
                            "text":  "newspaper",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190160,
        "question":  "Name something some people do just like a cow.",
        "answers":  [
                        {
                            "text":  "chew/eat",
                            "points":  65
                        },
                        {
                            "text":  "moo",
                            "points":  14
                        },
                        {
                            "text":  "rip a beefer",
                            "points":  5
                        },
                        {
                            "text":  "squirt milk",
                            "points":  4
                        },
                        {
                            "text":  "sleep/lie around",
                            "points":  3
                        },
                        {
                            "text":  "breathe",
                            "points":  3
                        },
                        {
                            "text":  "follow leader/herd",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190161,
        "question":  "We asked 100 women... If you dated a nudist, name someone you might not introduce him to.",
        "answers":  [
                        {
                            "text":  "my folks/dad",
                            "points":  64
                        },
                        {
                            "text":  "my kids",
                            "points":  9
                        },
                        {
                            "text":  "clergy/church",
                            "points":  9
                        },
                        {
                            "text":  "friend/slutty suzy",
                            "points":  6
                        },
                        {
                            "text":  "my hubby",
                            "points":  4
                        },
                        {
                            "text":  "gramps/granny",
                            "points":  2
                        },
                        {
                            "text":  "my siblings",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190162,
        "question":  "Since women's underwear has flowers on it, name a type of tool that should be on men's underwear.",
        "answers":  [
                        {
                            "text":  "hammer/jackhammer",
                            "points":  59
                        },
                        {
                            "text":  "screwdriver",
                            "points":  15
                        },
                        {
                            "text":  "drill",
                            "points":  8
                        },
                        {
                            "text":  "wrench",
                            "points":  7
                        },
                        {
                            "text":  "shovel/spade",
                            "points":  3
                        },
                        {
                            "text":  "hoe",
                            "points":  2
                        },
                        {
                            "text":  "clippers/pruners",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190163,
        "question":  "Tell me something Miss Piggy might do to get ready for a date with Kermit.",
        "answers":  [
                        {
                            "text":  "makeup/powder snout",
                            "points":  54
                        },
                        {
                            "text":  "her hair/curl it",
                            "points":  14
                        },
                        {
                            "text":  "bathe/mud bath",
                            "points":  10
                        },
                        {
                            "text":  "dress sexy",
                            "points":  10
                        },
                        {
                            "text":  "perfume/calvin swine",
                            "points":  4
                        },
                        {
                            "text":  "shave/wax",
                            "points":  2
                        },
                        {
                            "text":  "eat/fill up before",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190164,
        "question":  "If Steve Harvey was your dad, name something you'd hope to inherit from him.",
        "answers":  [
                        {
                            "text":  "his bazillions",
                            "points":  51
                        },
                        {
                            "text":  "humor/personality",
                            "points":  29
                        },
                        {
                            "text":  "pimpin' suits/style",
                            "points":  5
                        },
                        {
                            "text":  "cute face/smile",
                            "points":  4
                        },
                        {
                            "text":  "confidence",
                            "points":  3
                        },
                        {
                            "text":  "sleek/bald head",
                            "points":  2
                        },
                        {
                            "text":  "his wisdom/sense",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190165,
        "question":  "Name a place a woman would hate to find out the roses her man gave her came from.",
        "answers":  [
                        {
                            "text":  "funeral/cemetery",
                            "points":  50
                        },
                        {
                            "text":  "grocery/dollar store",
                            "points":  13
                        },
                        {
                            "text":  "his ho/ex's house",
                            "points":  12
                        },
                        {
                            "text":  "her yard/neighbor's",
                            "points":  11
                        },
                        {
                            "text":  "the trash",
                            "points":  5
                        },
                        {
                            "text":  "gas station",
                            "points":  3
                        },
                        {
                            "text":  "hospital patient",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190166,
        "question":  "We asked 100 single women... Name a reason you might go on a date with someone you really don't like.",
        "answers":  [
                        {
                            "text":  "free meal",
                            "points":  48
                        },
                        {
                            "text":  "lonely/bored",
                            "points":  27
                        },
                        {
                            "text":  "dude's rich",
                            "points":  8
                        },
                        {
                            "text":  "horny/thirsting hard",
                            "points":  6
                        },
                        {
                            "text":  "be nice/do favor",
                            "points":  3
                        },
                        {
                            "text":  "he's a major babe",
                            "points":  2
                        },
                        {
                            "text":  "maybe i'm wrong",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190167,
        "question":  "Name a place where you'd see oily ribs.",
        "answers":  [
                        {
                            "text":  "restaurant",
                            "points":  48
                        },
                        {
                            "text":  "the beach",
                            "points":  22
                        },
                        {
                            "text":  "home/backyard",
                            "points":  11
                        },
                        {
                            "text":  "gym/fitness contest",
                            "points":  8
                        },
                        {
                            "text":  "massage parlor",
                            "points":  3
                        },
                        {
                            "text":  "strip/go-go joint",
                            "points":  2
                        },
                        {
                            "text":  "market/butcher",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190168,
        "question":  "If a woman can't afford implants, name something in her home it would be cheaper to stick in her bra.",
        "answers":  [
                        {
                            "text":  "tissue/t.p.",
                            "points":  47
                        },
                        {
                            "text":  "socks",
                            "points":  24
                        },
                        {
                            "text":  "fruit/melons",
                            "points":  7
                        },
                        {
                            "text":  "inserts/pads",
                            "points":  7
                        },
                        {
                            "text":  "balloons",
                            "points":  6
                        },
                        {
                            "text":  "jell-o",
                            "points":  3
                        },
                        {
                            "text":  "paper towels",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190169,
        "question":  "Name the smallest place you've ever made love.",
        "answers":  [
                        {
                            "text":  "fiat/truck",
                            "points":  45
                        },
                        {
                            "text":  "bathroom/tub",
                            "points":  20
                        },
                        {
                            "text":  "closet",
                            "points":  18
                        },
                        {
                            "text":  "tiny bed/bedroom",
                            "points":  5
                        },
                        {
                            "text":  "tent/tepee",
                            "points":  4
                        },
                        {
                            "text":  "plane/cockpit",
                            "points":  2
                        },
                        {
                            "text":  "golf cart",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190170,
        "question":  "We asked 100 women... Your man thinks he's the ringmaster in bed. You think he's more like what circus act?",
        "answers":  [
                        {
                            "text":  "the clown",
                            "points":  38
                        },
                        {
                            "text":  "lion/tiger/tamer",
                            "points":  31
                        },
                        {
                            "text":  "the monkey",
                            "points":  9
                        },
                        {
                            "text":  "trapeze/acrobat",
                            "points":  7
                        },
                        {
                            "text":  "the elephant",
                            "points":  6
                        },
                        {
                            "text":  "the juggler",
                            "points":  3
                        },
                        {
                            "text":  "the clapping seal",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190171,
        "question":  "Name an activity a man does at home that he could get hurt doing if he did it in the nude.",
        "answers":  [
                        {
                            "text":  "yard work/trim bush",
                            "points":  36
                        },
                        {
                            "text":  "cook/slice meat",
                            "points":  21
                        },
                        {
                            "text":  "tools/repairs",
                            "points":  17
                        },
                        {
                            "text":  "exercise/push-ups",
                            "points":  11
                        },
                        {
                            "text":  "clean/vacuum",
                            "points":  5
                        },
                        {
                            "text":  "climb ladder",
                            "points":  3
                        },
                        {
                            "text":  "move furniture",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190172,
        "question":  "Besides the bathroom, where else in the house might a lazy guy have a toilet built?",
        "answers":  [
                        {
                            "text":  "garage/workshop",
                            "points":  28
                        },
                        {
                            "text":  "living room",
                            "points":  23
                        },
                        {
                            "text":  "bedroom",
                            "points":  20
                        },
                        {
                            "text":  "\"man cave\"",
                            "points":  9
                        },
                        {
                            "text":  "den/tv/family room",
                            "points":  7
                        },
                        {
                            "text":  "basement",
                            "points":  5
                        },
                        {
                            "text":  "kitchen/at table",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190173,
        "question":  "We asked 100 women... Fill in the blank: My man's the opposite of Steve Harvey because he's not what?",
        "answers":  [
                        {
                            "text":  "funny",
                            "points":  27
                        },
                        {
                            "text":  "a host/star",
                            "points":  22
                        },
                        {
                            "text":  "black",
                            "points":  15
                        },
                        {
                            "text":  "rich",
                            "points":  14
                        },
                        {
                            "text":  "bald",
                            "points":  10
                        },
                        {
                            "text":  "tall",
                            "points":  6
                        },
                        {
                            "text":  "loud",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190174,
        "question":  "Name something you'd be surprised your boss offered to trade with you.",
        "answers":  [
                        {
                            "text":  "paychecks",
                            "points":  26
                        },
                        {
                            "text":  "jobs/duties",
                            "points":  21
                        },
                        {
                            "text":  "cars",
                            "points":  17
                        },
                        {
                            "text":  "spouses/mates",
                            "points":  14
                        },
                        {
                            "text":  "desks/offices",
                            "points":  11
                        },
                        {
                            "text":  "houses",
                            "points":  5
                        },
                        {
                            "text":  "food/lunches",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190175,
        "question":  "We asked 100 married men... Name a TV game show that might describe you and your wife in the bedroom.",
        "answers":  [
                        {
                            "text":  "family feud",
                            "points":  21
                        },
                        {
                            "text":  "jeopardy",
                            "points":  18
                        },
                        {
                            "text":  "price is right",
                            "points":  18
                        },
                        {
                            "text":  "newlywed game",
                            "points":  15
                        },
                        {
                            "text":  "let's make a deal",
                            "points":  12
                        },
                        {
                            "text":  "wheel of fortune",
                            "points":  10
                        },
                        {
                            "text":  "deal or no deal",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190176,
        "question":  "Name an occasion when your drunken kissing cousin might actually try to kiss you.",
        "answers":  [
                        {
                            "text":  "wedding/reception",
                            "points":  65
                        },
                        {
                            "text":  "family reunion",
                            "points":  10
                        },
                        {
                            "text":  "new year's eve",
                            "points":  10
                        },
                        {
                            "text":  "never",
                            "points":  4
                        },
                        {
                            "text":  "birthday",
                            "points":  2
                        },
                        {
                            "text":  "funeral",
                            "points":  2
                        },
                        {
                            "text":  "on his deathbed",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190177,
        "question":  "Name a fun winter activity you'd be surprised to see a nudist doing.",
        "answers":  [
                        {
                            "text":  "skiing",
                            "points":  57
                        },
                        {
                            "text":  "sledding/luge",
                            "points":  12
                        },
                        {
                            "text":  "skating/hockey",
                            "points":  8
                        },
                        {
                            "text":  "snow angels",
                            "points":  7
                        },
                        {
                            "text":  "snowboarding",
                            "points":  5
                        },
                        {
                            "text":  "building snowman",
                            "points":  3
                        },
                        {
                            "text":  "ice fishing",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190178,
        "question":  "Name someone you kiss good-bye but never passionately.",
        "answers":  [
                        {
                            "text":  "my parents",
                            "points":  49
                        },
                        {
                            "text":  "my kids/grandkids",
                            "points":  13
                        },
                        {
                            "text":  "my friend/broski",
                            "points":  11
                        },
                        {
                            "text":  "my grandma",
                            "points":  6
                        },
                        {
                            "text":  "my pet/horny dog",
                            "points":  6
                        },
                        {
                            "text":  "sis/creepy brother",
                            "points":  5
                        },
                        {
                            "text":  "my aunt",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190179,
        "question":  "We asked 100 men... When you get to heaven, what do you hope all the women there are wearing?",
        "answers":  [
                        {
                            "text":  "nothing",
                            "points":  46
                        },
                        {
                            "text":  "bikinis",
                            "points":  24
                        },
                        {
                            "text":  "lingerie/thongs",
                            "points":  13
                        },
                        {
                            "text":  "tank/welcome tee",
                            "points":  4
                        },
                        {
                            "text":  "wings",
                            "points":  3
                        },
                        {
                            "text":  "sheets/togas",
                            "points":  3
                        },
                        {
                            "text":  "skimpy robes",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190180,
        "question":  "Name something you haven't put in your mouth since you were a baby.",
        "answers":  [
                        {
                            "text":  "pacifier",
                            "points":  45
                        },
                        {
                            "text":  "bottle/milk",
                            "points":  15
                        },
                        {
                            "text":  "my thumb",
                            "points":  12
                        },
                        {
                            "text":  "baby food/peas",
                            "points":  9
                        },
                        {
                            "text":  "a boob/my mom's",
                            "points":  7
                        },
                        {
                            "text":  "my toe/foot",
                            "points":  4
                        },
                        {
                            "text":  "a rattle/toy",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190181,
        "question":  "We asked 100 married men... If you hadn't gotten married, you'd have a much better what?",
        "answers":  [
                        {
                            "text":  "bank account",
                            "points":  43
                        },
                        {
                            "text":  "sex life",
                            "points":  18
                        },
                        {
                            "text":  "life/time",
                            "points":  14
                        },
                        {
                            "text":  "car",
                            "points":  11
                        },
                        {
                            "text":  "job/career",
                            "points":  4
                        },
                        {
                            "text":  "house",
                            "points":  3
                        },
                        {
                            "text":  "attitude",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190182,
        "question":  "Name something a person might take out before going to bed.",
        "answers":  [
                        {
                            "text":  "teeth/dentures",
                            "points":  41
                        },
                        {
                            "text":  "trash",
                            "points":  25
                        },
                        {
                            "text":  "dog/cat",
                            "points":  13
                        },
                        {
                            "text":  "frozen food/snack",
                            "points":  5
                        },
                        {
                            "text":  "contacts",
                            "points":  4
                        },
                        {
                            "text":  "a book",
                            "points":  4
                        },
                        {
                            "text":  "clothes/pjs",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190183,
        "question":  "If a male stripper called himself \"The Pirate,\" tell me a prop he might use in his act.",
        "answers":  [
                        {
                            "text":  "eye patch",
                            "points":  40
                        },
                        {
                            "text":  "sword",
                            "points":  23
                        },
                        {
                            "text":  "pervy parrot",
                            "points":  11
                        },
                        {
                            "text":  "peg leg",
                            "points":  9
                        },
                        {
                            "text":  "hook",
                            "points":  7
                        },
                        {
                            "text":  "pirate hat",
                            "points":  3
                        },
                        {
                            "text":  "a plank",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190184,
        "question":  "Name something the clown's wife probably wishes he wouldn't take to bed.",
        "answers":  [
                        {
                            "text":  "his big red schnoz",
                            "points":  39
                        },
                        {
                            "text":  "his horn",
                            "points":  27
                        },
                        {
                            "text":  "shoes/big feet",
                            "points":  15
                        },
                        {
                            "text":  "his hair/wig",
                            "points":  5
                        },
                        {
                            "text":  "makeup/creepy smile",
                            "points":  5
                        },
                        {
                            "text":  "food/cotton candy",
                            "points":  2
                        },
                        {
                            "text":  "squirt flower",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190185,
        "question":  "Name a place where you might be tempted to tell a lie but the consequences would be too great.",
        "answers":  [
                        {
                            "text":  "court",
                            "points":  38
                        },
                        {
                            "text":  "church/confession",
                            "points":  24
                        },
                        {
                            "text":  "work",
                            "points":  17
                        },
                        {
                            "text":  "home/bedroom",
                            "points":  6
                        },
                        {
                            "text":  "police stn./jail",
                            "points":  6
                        },
                        {
                            "text":  "bank",
                            "points":  2
                        },
                        {
                            "text":  "irs audit",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190186,
        "question":  "Name something you put your lips on.",
        "answers":  [
                        {
                            "text":  "drink/glass",
                            "points":  38
                        },
                        {
                            "text":  "other lips/bubba's",
                            "points":  14
                        },
                        {
                            "text":  "food/popsicle",
                            "points":  11
                        },
                        {
                            "text":  "lipstick/gloss",
                            "points":  10
                        },
                        {
                            "text":  "a straw",
                            "points":  10
                        },
                        {
                            "text":  "chapstick",
                            "points":  9
                        },
                        {
                            "text":  "boobage",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190187,
        "question":  "Name something a husband sees on his wife's shopping list that makes him fear she's planning a murder.",
        "answers":  [
                        {
                            "text":  "poison/antifreeze",
                            "points":  36
                        },
                        {
                            "text":  "gun/bullets",
                            "points":  28
                        },
                        {
                            "text":  "knife",
                            "points":  18
                        },
                        {
                            "text":  "duct tape",
                            "points":  4
                        },
                        {
                            "text":  "rope",
                            "points":  3
                        },
                        {
                            "text":  "hammer",
                            "points":  3
                        },
                        {
                            "text":  "shovel",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190188,
        "question":  "Name a place where a man doesn't want to hear someone say, \"You'll be next.\"",
        "answers":  [
                        {
                            "text":  "dr./dentist/surg.",
                            "points":  33
                        },
                        {
                            "text":  "funeral/morgue",
                            "points":  28
                        },
                        {
                            "text":  "prison/on death row",
                            "points":  19
                        },
                        {
                            "text":  "bed/wife's orgy",
                            "points":  5
                        },
                        {
                            "text":  "bathroom/stall",
                            "points":  4
                        },
                        {
                            "text":  "hell",
                            "points":  3
                        },
                        {
                            "text":  "wedding",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190189,
        "question":  "When you go in for a kiss, name something you hope you don't smell on your lover's breath.",
        "answers":  [
                        {
                            "text":  "onions",
                            "points":  32
                        },
                        {
                            "text":  "garlic",
                            "points":  20
                        },
                        {
                            "text":  "morning breath",
                            "points":  11
                        },
                        {
                            "text":  "tuna/seafood",
                            "points":  11
                        },
                        {
                            "text":  "gingivitis/decay",
                            "points":  8
                        },
                        {
                            "text":  "smoke",
                            "points":  7
                        },
                        {
                            "text":  "fresh vomit",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  190190,
        "question":  "A man might tell his wife, \"I only went to the strip club for\" what?",
        "answers":  [
                        {
                            "text":  "the food/wings",
                            "points":  31
                        },
                        {
                            "text":  "a drink",
                            "points":  28
                        },
                        {
                            "text":  "fun/bachelor party",
                            "points":  18
                        },
                        {
                            "text":  "business meeting",
                            "points":  6
                        },
                        {
                            "text":  "$1 bills/change",
                            "points":  5
                        },
                        {
                            "text":  "research/observe",
                            "points":  4
                        },
                        {
                            "text":  "the great music",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190191,
        "question":  "Tell me something Mr. Pig might find most attractive about Miss Pig.",
        "answers":  [
                        {
                            "text":  "curly tail",
                            "points":  31
                        },
                        {
                            "text":  "figure/juicy hams",
                            "points":  28
                        },
                        {
                            "text":  "pig face/snout",
                            "points":  18
                        },
                        {
                            "text":  "sweet swine scent",
                            "points":  6
                        },
                        {
                            "text":  "silky ears",
                            "points":  4
                        },
                        {
                            "text":  "dirty gal/muddy",
                            "points":  4
                        },
                        {
                            "text":  "oinks & grunts",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190192,
        "question":  "We asked 100 married women... Name something you might ask the Wizard of Oz to give your husband.",
        "answers":  [
                        {
                            "text":  "heart/sensitivity",
                            "points":  30
                        },
                        {
                            "text":  "more money/job",
                            "points":  25
                        },
                        {
                            "text":  "a brain",
                            "points":  17
                        },
                        {
                            "text":  "personality/humor",
                            "points":  10
                        },
                        {
                            "text":  "patience",
                            "points":  6
                        },
                        {
                            "text":  "ripped abs/muscles",
                            "points":  4
                        },
                        {
                            "text":  "time/years with me",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190193,
        "question":  "We asked 100 married women... Be honest and tell us something about other women that you criticize.",
        "answers":  [
                        {
                            "text":  "duds/skanky skirt",
                            "points":  27
                        },
                        {
                            "text":  "weight/figure",
                            "points":  25
                        },
                        {
                            "text":  "face/makeup",
                            "points":  17
                        },
                        {
                            "text":  "lack of smarts",
                            "points":  10
                        },
                        {
                            "text":  "personality/'tude",
                            "points":  7
                        },
                        {
                            "text":  "love life/big ho",
                            "points":  6
                        },
                        {
                            "text":  "awful kids",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190194,
        "question":  "We asked 100 women... When your husband who left you comes back for his things, where will he find them?",
        "answers":  [
                        {
                            "text":  "in the trash",
                            "points":  23
                        },
                        {
                            "text":  "front yard",
                            "points":  22
                        },
                        {
                            "text":  "in a fire/grill",
                            "points":  16
                        },
                        {
                            "text":  "garage",
                            "points":  12
                        },
                        {
                            "text":  "driveway",
                            "points":  11
                        },
                        {
                            "text":  "closet/drawers",
                            "points":  6
                        },
                        {
                            "text":  "charity/thrift shop",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190195,
        "question":  "If you had to resort to cannibalism, what part of someone would you eat first?",
        "answers":  [
                        {
                            "text":  "leg/thigh",
                            "points":  62
                        },
                        {
                            "text":  "meaty badonk",
                            "points":  12
                        },
                        {
                            "text":  "arm",
                            "points":  8
                        },
                        {
                            "text":  "fingers/hand",
                            "points":  4
                        },
                        {
                            "text":  "ear",
                            "points":  3
                        },
                        {
                            "text":  "belly",
                            "points":  3
                        },
                        {
                            "text":  "steve-size lips",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190196,
        "question":  "We asked 100 married men... Name the last thing you asked your wife for that she said \"No way.\"",
        "answers":  [
                        {
                            "text":  "sex",
                            "points":  59
                        },
                        {
                            "text":  "$/allowance",
                            "points":  13
                        },
                        {
                            "text":  "a divorce",
                            "points":  9
                        },
                        {
                            "text":  "car/winnebago",
                            "points":  4
                        },
                        {
                            "text":  "a harley",
                            "points":  4
                        },
                        {
                            "text":  "a trip/on a raft",
                            "points":  3
                        },
                        {
                            "text":  "food/seconds",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190197,
        "question":  "Name a place a man goes to get some action.",
        "answers":  [
                        {
                            "text":  "bar/nightclub",
                            "points":  52
                        },
                        {
                            "text":  "strip joint",
                            "points":  15
                        },
                        {
                            "text":  "casino/vegas",
                            "points":  11
                        },
                        {
                            "text":  "kiki's house o' hos",
                            "points":  7
                        },
                        {
                            "text":  "gym",
                            "points":  3
                        },
                        {
                            "text":  "racetrack",
                            "points":  3
                        },
                        {
                            "text":  "home/vibrating bed",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190198,
        "question":  "Name someone in your life you hope you never see naked or you'll never be the same again.",
        "answers":  [
                        {
                            "text":  "my parents",
                            "points":  51
                        },
                        {
                            "text":  "my grandparents",
                            "points":  23
                        },
                        {
                            "text":  "my in-laws",
                            "points":  8
                        },
                        {
                            "text":  "my boss",
                            "points":  6
                        },
                        {
                            "text":  "santa claus",
                            "points":  2
                        },
                        {
                            "text":  "my kid/30 year-old",
                            "points":  2
                        },
                        {
                            "text":  "my doc/hot gyno",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190199,
        "question":  "Name something specific a wife might do to her cheating husband's sportscar.",
        "answers":  [
                        {
                            "text":  "key/scratch it",
                            "points":  51
                        },
                        {
                            "text":  "sell it/for $1",
                            "points":  13
                        },
                        {
                            "text":  "slash tires",
                            "points":  10
                        },
                        {
                            "text":  "bash it/windows",
                            "points":  9
                        },
                        {
                            "text":  "crash it",
                            "points":  5
                        },
                        {
                            "text":  "burn/blow it up",
                            "points":  4
                        },
                        {
                            "text":  "poop/thru sunroof",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190200,
        "question":  "Name something that's a guaranteed party starter.",
        "answers":  [
                        {
                            "text":  "beer/shots",
                            "points":  50
                        },
                        {
                            "text":  "music/karaoke",
                            "points":  26
                        },
                        {
                            "text":  "dancing/topless",
                            "points":  4
                        },
                        {
                            "text":  "fooood!",
                            "points":  4
                        },
                        {
                            "text":  "party game/vid game",
                            "points":  4
                        },
                        {
                            "text":  "giant reefer/drugs",
                            "points":  3
                        },
                        {
                            "text":  "guests/hot ones",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190201,
        "question":  "Name the sexiest thing we'd find in your bedroom.",
        "answers":  [
                        {
                            "text":  "undies/lingerie",
                            "points":  50
                        },
                        {
                            "text":  "me/nude",
                            "points":  14
                        },
                        {
                            "text":  "lifelike vibrator",
                            "points":  12
                        },
                        {
                            "text":  "bed/pillow/sheets",
                            "points":  7
                        },
                        {
                            "text":  "my mate/hookup",
                            "points":  5
                        },
                        {
                            "text":  "porn collection",
                            "points":  4
                        },
                        {
                            "text":  "lube/oil",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190202,
        "question":  "Fill in the blank: You leave the house, look down, and think, \"Oh no -- I forgot to put on my\" what?",
        "answers":  [
                        {
                            "text":  "shoes",
                            "points":  45
                        },
                        {
                            "text":  "pants",
                            "points":  14
                        },
                        {
                            "text":  "watch/jewelry",
                            "points":  11
                        },
                        {
                            "text":  "socks",
                            "points":  10
                        },
                        {
                            "text":  "belt",
                            "points":  6
                        },
                        {
                            "text":  "undies/bra",
                            "points":  5
                        },
                        {
                            "text":  "deodorant",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190203,
        "question":  "If roles were reversed, what might your dog ask the vet to do to you?",
        "answers":  [
                        {
                            "text":  "spay/neuter",
                            "points":  44
                        },
                        {
                            "text":  "give shots",
                            "points":  18
                        },
                        {
                            "text":  "butt temp/exam",
                            "points":  18
                        },
                        {
                            "text":  "clip nails/de-nail",
                            "points":  6
                        },
                        {
                            "text":  "bathe/clean ears",
                            "points":  4
                        },
                        {
                            "text":  "make me mute",
                            "points":  2
                        },
                        {
                            "text":  "put me down",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190204,
        "question":  "Name a creature an exterminator has nightmares about being sixty feet tall and chasing him.",
        "answers":  [
                        {
                            "text":  "cockroach",
                            "points":  43
                        },
                        {
                            "text":  "spider",
                            "points":  13
                        },
                        {
                            "text":  "termite",
                            "points":  12
                        },
                        {
                            "text":  "ant",
                            "points":  12
                        },
                        {
                            "text":  "rat",
                            "points":  10
                        },
                        {
                            "text":  "his ex",
                            "points":  2
                        },
                        {
                            "text":  "snake",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190205,
        "question":  "Fill in the blank: A man might say, \"All I want for my ex-wife is for her to be\" what?",
        "answers":  [
                        {
                            "text":  "happy",
                            "points":  38
                        },
                        {
                            "text":  "gone/away/missing",
                            "points":  23
                        },
                        {
                            "text":  "nice/cool/fair",
                            "points":  10
                        },
                        {
                            "text":  "dead",
                            "points":  10
                        },
                        {
                            "text":  "miserable/lonely",
                            "points":  8
                        },
                        {
                            "text":  "a good mother",
                            "points":  3
                        },
                        {
                            "text":  "quiet",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190206,
        "question":  "Name a place a man would be foolish to FaceTime his wife from his smartphone.",
        "answers":  [
                        {
                            "text":  "strip joint",
                            "points":  35
                        },
                        {
                            "text":  "bathroom/on toilet",
                            "points":  23
                        },
                        {
                            "text":  "bar/nightclub",
                            "points":  21
                        },
                        {
                            "text":  "lover's house/bed",
                            "points":  7
                        },
                        {
                            "text":  "hotel/motel",
                            "points":  3
                        },
                        {
                            "text":  "ho house",
                            "points":  3
                        },
                        {
                            "text":  "work/mtg. with boss",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190207,
        "question":  "Name something people pick out ahead of time so their funeral will be fabulous.",
        "answers":  [
                        {
                            "text":  "music/good dj",
                            "points":  34
                        },
                        {
                            "text":  "casket",
                            "points":  30
                        },
                        {
                            "text":  "burial plot",
                            "points":  11
                        },
                        {
                            "text":  "cute outfit",
                            "points":  8
                        },
                        {
                            "text":  "flowers",
                            "points":  7
                        },
                        {
                            "text":  "funeral home",
                            "points":  2
                        },
                        {
                            "text":  "headstone",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190208,
        "question":  "Name something dogs do in the car that mom hopes her kids don't do.",
        "answers":  [
                        {
                            "text":  "hang out the window",
                            "points":  33
                        },
                        {
                            "text":  "whiz/dump",
                            "points":  24
                        },
                        {
                            "text":  "lick/everything",
                            "points":  11
                        },
                        {
                            "text":  "bark",
                            "points":  10
                        },
                        {
                            "text":  "drool",
                            "points":  7
                        },
                        {
                            "text":  "blow chunks",
                            "points":  5
                        },
                        {
                            "text":  "shed",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190209,
        "question":  "When your date says he's close to his parents, name something you hope he doesn't do with them every day.",
        "answers":  [
                        {
                            "text":  "call/see/talk",
                            "points":  29
                        },
                        {
                            "text":  "eat/every meal",
                            "points":  24
                        },
                        {
                            "text":  "sleep/cuddle",
                            "points":  17
                        },
                        {
                            "text":  "live",
                            "points":  13
                        },
                        {
                            "text":  "shower/take bath",
                            "points":  6
                        },
                        {
                            "text":  "kiss/make out",
                            "points":  3
                        },
                        {
                            "text":  "cry",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190210,
        "question":  "We asked 100 men... If your boss organized a company retreat at a nudist colony, name an office supply you might use to hide your manhood.",
        "answers":  [
                        {
                            "text":  "paper/legal pad",
                            "points":  28
                        },
                        {
                            "text":  "folder/binder",
                            "points":  25
                        },
                        {
                            "text":  "stapler",
                            "points":  10
                        },
                        {
                            "text":  "post-its",
                            "points":  9
                        },
                        {
                            "text":  "tablet/laptop",
                            "points":  8
                        },
                        {
                            "text":  "ruler",
                            "points":  8
                        },
                        {
                            "text":  "tape roll/holder",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  190211,
        "question":  "We asked 100 married men... Between us, name something you wish your wife would get rid of.",
        "answers":  [
                        {
                            "text":  "weight/beer belly",
                            "points":  26
                        },
                        {
                            "text":  "clothes/flannel teddy",
                            "points":  22
                        },
                        {
                            "text":  "her nasty 'tude",
                            "points":  17
                        },
                        {
                            "text":  "hairdo/80's perm",
                            "points":  11
                        },
                        {
                            "text":  "her awful mother",
                            "points":  8
                        },
                        {
                            "text":  "pet/rabbit farm",
                            "points":  8
                        },
                        {
                            "text":  "laptop/tablet",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190212,
        "question":  "A man's wedding vow might be, \"I promise to always love you unless you\" what?",
        "answers":  [
                        {
                            "text":  "ho around",
                            "points":  64
                        },
                        {
                            "text":  "get fat/gain 3 lbs.",
                            "points":  13
                        },
                        {
                            "text":  "die",
                            "points":  5
                        },
                        {
                            "text":  "nag/annoy me",
                            "points":  4
                        },
                        {
                            "text":  "divorce/leave me",
                            "points":  3
                        },
                        {
                            "text":  "fart/panty burp",
                            "points":  2
                        },
                        {
                            "text":  "stab/try to kill me",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190213,
        "question":  "If mirrors could talk, name something yours might say to you.",
        "answers":  [
                        {
                            "text":  "well hello, hottie!",
                            "points":  56
                        },
                        {
                            "text":  "whoa! beached orca!",
                            "points":  19
                        },
                        {
                            "text":  "wow! you're old!",
                            "points":  7
                        },
                        {
                            "text":  "trust/in your truth",
                            "points":  5
                        },
                        {
                            "text":  "go away!",
                            "points":  2
                        },
                        {
                            "text":  "windex me!",
                            "points":  2
                        },
                        {
                            "text":  "oh lord, that hair!",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190214,
        "question":  "We asked 100 single men... Your mom tells you to find a woman who has a good heart. You want one who's what?",
        "answers":  [
                        {
                            "text":  "hot/jumbo-jugged",
                            "points":  53
                        },
                        {
                            "text":  "rich",
                            "points":  12
                        },
                        {
                            "text":  "smart",
                            "points":  11
                        },
                        {
                            "text":  "a good cook",
                            "points":  7
                        },
                        {
                            "text":  "loyal",
                            "points":  5
                        },
                        {
                            "text":  "affectionate",
                            "points":  3
                        },
                        {
                            "text":  "plump/a heifer",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190215,
        "question":  "Name something a housewife slips into when the sexy pool boy comes to clean the pool.",
        "answers":  [
                        {
                            "text":  "swimsuit/bikini",
                            "points":  47
                        },
                        {
                            "text":  "lingerie/nightie",
                            "points":  19
                        },
                        {
                            "text":  "robe",
                            "points":  16
                        },
                        {
                            "text":  "skirt/dress",
                            "points":  4
                        },
                        {
                            "text":  "jeans/skinny jeans",
                            "points":  3
                        },
                        {
                            "text":  "tight t-shirt",
                            "points":  2
                        },
                        {
                            "text":  "the pool",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190216,
        "question":  "We asked 100 men... Name a snack you wish your lover tasted like when you kissed her.",
        "answers":  [
                        {
                            "text":  "chocolate/candy",
                            "points":  44
                        },
                        {
                            "text":  "pizza",
                            "points":  14
                        },
                        {
                            "text":  "bacon",
                            "points":  14
                        },
                        {
                            "text":  "fruit/cherry",
                            "points":  8
                        },
                        {
                            "text":  "popcorn",
                            "points":  6
                        },
                        {
                            "text":  "potato chips",
                            "points":  5
                        },
                        {
                            "text":  "cupcake/ding dong",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190217,
        "question":  "Name an animal some people look like when they pucker up for a kiss.",
        "answers":  [
                        {
                            "text":  "fish/shark",
                            "points":  33
                        },
                        {
                            "text":  "monkey/ape",
                            "points":  32
                        },
                        {
                            "text":  "dog",
                            "points":  19
                        },
                        {
                            "text":  "pig",
                            "points":  3
                        },
                        {
                            "text":  "anteater",
                            "points":  2
                        },
                        {
                            "text":  "camel",
                            "points":  2
                        },
                        {
                            "text":  "bird/penguin",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190218,
        "question":  "A wife might tell her husband, \"I wish your\" what \"was like Steve Harvey's.\"",
        "answers":  [
                        {
                            "text":  "humor/personality",
                            "points":  27
                        },
                        {
                            "text":  "income/bank acct.",
                            "points":  16
                        },
                        {
                            "text":  "mustache",
                            "points":  14
                        },
                        {
                            "text":  "smile/grill",
                            "points":  13
                        },
                        {
                            "text":  "hair/bald head",
                            "points":  11
                        },
                        {
                            "text":  "suit/style",
                            "points":  7
                        },
                        {
                            "text":  "body/dong",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190219,
        "question":  "Name something people do in a buffet line that should be against the law.",
        "answers":  [
                        {
                            "text":  "use their hands",
                            "points":  23
                        },
                        {
                            "text":  "shove/cut line",
                            "points":  22
                        },
                        {
                            "text":  "sample/lick spoon",
                            "points":  17
                        },
                        {
                            "text":  "sneeze",
                            "points":  14
                        },
                        {
                            "text":  "take too much",
                            "points":  10
                        },
                        {
                            "text":  "pick nose",
                            "points":  4
                        },
                        {
                            "text":  "scratch/butt",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190220,
        "question":  "We asked 100 married women... Name something it would be rude for your husband to do in the nude.",
        "answers":  [
                        {
                            "text":  "go outside/mow",
                            "points":  23
                        },
                        {
                            "text":  "cut the cheese",
                            "points":  20
                        },
                        {
                            "text":  "whiz/on walls",
                            "points":  13
                        },
                        {
                            "text":  "walk around house",
                            "points":  13
                        },
                        {
                            "text":  "scratch giblets",
                            "points":  10
                        },
                        {
                            "text":  "bend over",
                            "points":  7
                        },
                        {
                            "text":  "sit on furniture",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  190221,
        "question":  "Name an L word a mother-in-law might call her son-in-law.",
        "answers":  [
                        {
                            "text":  "loser",
                            "points":  54
                        },
                        {
                            "text":  "lazy",
                            "points":  14
                        },
                        {
                            "text":  "love/lovely/lover",
                            "points":  8
                        },
                        {
                            "text":  "liar",
                            "points":  7
                        },
                        {
                            "text":  "louse/lousy",
                            "points":  4
                        },
                        {
                            "text":  "loud",
                            "points":  3
                        },
                        {
                            "text":  "larry",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190222,
        "question":  "If you found out ahead of time that your boss was going to fire you, what would you do?",
        "answers":  [
                        {
                            "text":  "quit/walk out",
                            "points":  46
                        },
                        {
                            "text":  "find new job",
                            "points":  23
                        },
                        {
                            "text":  "confront/cuss out",
                            "points":  8
                        },
                        {
                            "text":  "call in sick",
                            "points":  7
                        },
                        {
                            "text":  "prove self/persuade",
                            "points":  4
                        },
                        {
                            "text":  "assault/with pie",
                            "points":  2
                        },
                        {
                            "text":  "pack up office",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190223,
        "question":  "Name a country a cannibal might say has the best-tasting people.",
        "answers":  [
                        {
                            "text":  "united states",
                            "points":  43
                        },
                        {
                            "text":  "italy",
                            "points":  19
                        },
                        {
                            "text":  "france",
                            "points":  10
                        },
                        {
                            "text":  "canada",
                            "points":  7
                        },
                        {
                            "text":  "mexico",
                            "points":  6
                        },
                        {
                            "text":  "greece",
                            "points":  4
                        },
                        {
                            "text":  "brazil",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190224,
        "question":  "What gift might a male cat give to a female cat that he has the hots for?",
        "answers":  [
                        {
                            "text":  "mouse/juicy rat",
                            "points":  40
                        },
                        {
                            "text":  "catnip",
                            "points":  19
                        },
                        {
                            "text":  "fish/tuna",
                            "points":  9
                        },
                        {
                            "text":  "babies/his kittymaker",
                            "points":  8
                        },
                        {
                            "text":  "dead bird",
                            "points":  7
                        },
                        {
                            "text":  "a lick/smooch",
                            "points":  6
                        },
                        {
                            "text":  "a bug/fleas",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190225,
        "question":  "We asked 100 men... Best date ever: She showed up wearing what?",
        "answers":  [
                        {
                            "text":  "sexy dress/skirt",
                            "points":  38
                        },
                        {
                            "text":  "nada/her eager beaver",
                            "points":  19
                        },
                        {
                            "text":  "shorts/daisy dukes",
                            "points":  10
                        },
                        {
                            "text":  "thong/lace panties",
                            "points":  9
                        },
                        {
                            "text":  "a tank top",
                            "points":  8
                        },
                        {
                            "text":  "a bathing suit",
                            "points":  5
                        },
                        {
                            "text":  "a robe",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190226,
        "question":  "We asked 100 single women... You hope your blind date is a fox. What animal do you not want him to be?",
        "answers":  [
                        {
                            "text":  "pig",
                            "points":  37
                        },
                        {
                            "text":  "elephant",
                            "points":  15
                        },
                        {
                            "text":  "hippo",
                            "points":  13
                        },
                        {
                            "text":  "dog",
                            "points":  10
                        },
                        {
                            "text":  "jackass",
                            "points":  7
                        },
                        {
                            "text":  "octopus",
                            "points":  5
                        },
                        {
                            "text":  "rat",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190227,
        "question":  "A woman might say, \"My ex-husband only married his new wife because she's\" what?",
        "answers":  [
                        {
                            "text":  "young",
                            "points":  36
                        },
                        {
                            "text":  "rich",
                            "points":  24
                        },
                        {
                            "text":  "hot/stacked",
                            "points":  17
                        },
                        {
                            "text":  "a slut/jezebel",
                            "points":  8
                        },
                        {
                            "text":  "dumb",
                            "points":  3
                        },
                        {
                            "text":  "skinny",
                            "points":  2
                        },
                        {
                            "text":  "all he could get",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190228,
        "question":  "Name something Steve Harvey has in common with Dwayne \"The Rock\" Johnson.",
        "answers":  [
                        {
                            "text":  "bald",
                            "points":  34
                        },
                        {
                            "text":  "funny/humor",
                            "points":  13
                        },
                        {
                            "text":  "celebs/on tv",
                            "points":  12
                        },
                        {
                            "text":  "male",
                            "points":  11
                        },
                        {
                            "text":  "black/blackish",
                            "points":  9
                        },
                        {
                            "text":  "hotties/cute smiles",
                            "points":  8
                        },
                        {
                            "text":  "tall",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190229,
        "question":  "We asked 100 women... Name something you have that's large and luscious.",
        "answers":  [
                        {
                            "text":  "glistening orbs",
                            "points":  32
                        },
                        {
                            "text":  "yum-yum bum",
                            "points":  21
                        },
                        {
                            "text":  "lips",
                            "points":  21
                        },
                        {
                            "text":  "fruit",
                            "points":  8
                        },
                        {
                            "text":  "hair",
                            "points":  6
                        },
                        {
                            "text":  "eyelashes",
                            "points":  2
                        },
                        {
                            "text":  "hot beer gut",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190230,
        "question":  "We asked 100 married men... What do you reach for when you hear your mother-in-law is coming over?",
        "answers":  [
                        {
                            "text":  "booze/mind eraser",
                            "points":  32
                        },
                        {
                            "text":  "car keys",
                            "points":  20
                        },
                        {
                            "text":  "the door/lock",
                            "points":  15
                        },
                        {
                            "text":  "cell phone",
                            "points":  12
                        },
                        {
                            "text":  "remote",
                            "points":  5
                        },
                        {
                            "text":  "weed/a fatty",
                            "points":  5
                        },
                        {
                            "text":  "unfiltered cigs",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190231,
        "question":  "We asked 100 men... Lap dances are fun, but you'd never want to get one from your who?",
        "answers":  [
                        {
                            "text":  "mother",
                            "points":  27
                        },
                        {
                            "text":  "boss",
                            "points":  18
                        },
                        {
                            "text":  "sister",
                            "points":  16
                        },
                        {
                            "text":  "hag wife",
                            "points":  14
                        },
                        {
                            "text":  "grandma",
                            "points":  8
                        },
                        {
                            "text":  "mother-in-law",
                            "points":  7
                        },
                        {
                            "text":  "son/daughter",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190232,
        "question":  "Name something your grandma is really too old to be wearing in public.",
        "answers":  [
                        {
                            "text":  "string bikini",
                            "points":  27
                        },
                        {
                            "text":  "miniskirt/dress",
                            "points":  17
                        },
                        {
                            "text":  "hoochie shorts",
                            "points":  16
                        },
                        {
                            "text":  "tank/crop/halter top",
                            "points":  11
                        },
                        {
                            "text":  "jeans/tight pants",
                            "points":  10
                        },
                        {
                            "text":  "lingerie/pasties",
                            "points":  7
                        },
                        {
                            "text":  "heels/hooker boots",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190233,
        "question":  "We asked 100 women... My man is so unromantic, his idea of a sexy night out is going where?",
        "answers":  [
                        {
                            "text":  "sport event/race",
                            "points":  21
                        },
                        {
                            "text":  "bar/club",
                            "points":  20
                        },
                        {
                            "text":  "nowhere/home",
                            "points":  17
                        },
                        {
                            "text":  "dinner/wendy's",
                            "points":  13
                        },
                        {
                            "text":  "bowling",
                            "points":  8
                        },
                        {
                            "text":  "store/k-mart",
                            "points":  8
                        },
                        {
                            "text":  "movies",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190234,
        "question":  "Name something you'd pour into a cheating ex's gas tank.",
        "answers":  [
                        {
                            "text":  "sugar",
                            "points":  63
                        },
                        {
                            "text":  "water",
                            "points":  16
                        },
                        {
                            "text":  "beer",
                            "points":  3
                        },
                        {
                            "text":  "my warm whiz",
                            "points":  3
                        },
                        {
                            "text":  "salt",
                            "points":  2
                        },
                        {
                            "text":  "oil",
                            "points":  2
                        },
                        {
                            "text":  "sand",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190235,
        "question":  "Name something about a cow that other farm animals might make fun of.",
        "answers":  [
                        {
                            "text":  "her udders",
                            "points":  54
                        },
                        {
                            "text":  "size/fat badonk",
                            "points":  20
                        },
                        {
                            "text":  "her spots",
                            "points":  5
                        },
                        {
                            "text":  "chewing/cud",
                            "points":  4
                        },
                        {
                            "text":  "annoying moo",
                            "points":  3
                        },
                        {
                            "text":  "her stench",
                            "points":  3
                        },
                        {
                            "text":  "she moves slowly",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190236,
        "question":  "We asked 100 men... What might a woman pull out of her bra on a first date that would frighten you?",
        "answers":  [
                        {
                            "text":  "gun/stun gun",
                            "points":  53
                        },
                        {
                            "text":  "tissue",
                            "points":  11
                        },
                        {
                            "text":  "condom/a dozen",
                            "points":  11
                        },
                        {
                            "text":  "knife",
                            "points":  9
                        },
                        {
                            "text":  "toothbrush",
                            "points":  3
                        },
                        {
                            "text":  "food/ground beef",
                            "points":  2
                        },
                        {
                            "text":  "money/singles",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190237,
        "question":  "On Halloween, every kid skips the house that gives away what?",
        "answers":  [
                        {
                            "text":  "fruit/veggies",
                            "points":  52
                        },
                        {
                            "text":  "toothbrush/paste",
                            "points":  17
                        },
                        {
                            "text":  "crappy candy/gum",
                            "points":  10
                        },
                        {
                            "text":  "pencils",
                            "points":  3
                        },
                        {
                            "text":  "pennies/$",
                            "points":  3
                        },
                        {
                            "text":  "coal",
                            "points":  3
                        },
                        {
                            "text":  "homemade treat",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190238,
        "question":  "Name something a stripper hopes the crowd doesn't do when she takes off her clothes.",
        "answers":  [
                        {
                            "text":  "boo/\"put it on!\"",
                            "points":  47
                        },
                        {
                            "text":  "laugh",
                            "points":  14
                        },
                        {
                            "text":  "run out",
                            "points":  12
                        },
                        {
                            "text":  "fondle/goose her",
                            "points":  7
                        },
                        {
                            "text":  "throw stuff/coins",
                            "points":  5
                        },
                        {
                            "text":  "scream/cry",
                            "points":  3
                        },
                        {
                            "text":  "faint",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190239,
        "question":  "Where were you the last time you let out an ear-piercing scream?",
        "answers":  [
                        {
                            "text":  "theme park/coaster",
                            "points":  37
                        },
                        {
                            "text":  "home/in bed",
                            "points":  30
                        },
                        {
                            "text":  "delivery room",
                            "points":  9
                        },
                        {
                            "text":  "school",
                            "points":  5
                        },
                        {
                            "text":  "movies",
                            "points":  4
                        },
                        {
                            "text":  "sporting event",
                            "points":  3
                        },
                        {
                            "text":  "the circus",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190240,
        "question":  "We asked 100 women... What did you do with your dolls that you now do with your girlfriends?",
        "answers":  [
                        {
                            "text":  "play dress up",
                            "points":  36
                        },
                        {
                            "text":  "talk/tell secrets",
                            "points":  19
                        },
                        {
                            "text":  "fix/cut hair",
                            "points":  11
                        },
                        {
                            "text":  "have tea party",
                            "points":  11
                        },
                        {
                            "text":  "nothing",
                            "points":  8
                        },
                        {
                            "text":  "shop",
                            "points":  3
                        },
                        {
                            "text":  "put on makeup",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190241,
        "question":  "Name a place that's filled with old men and young women.",
        "answers":  [
                        {
                            "text":  "senior home",
                            "points":  30
                        },
                        {
                            "text":  "bar/club",
                            "points":  26
                        },
                        {
                            "text":  "strip joint",
                            "points":  22
                        },
                        {
                            "text":  "casino/vegas",
                            "points":  5
                        },
                        {
                            "text":  "hospital",
                            "points":  4
                        },
                        {
                            "text":  "florida/miami",
                            "points":  2
                        },
                        {
                            "text":  "hollywood",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190242,
        "question":  "Women love a man who's funny. But they love a man even more if he's what?",
        "answers":  [
                        {
                            "text":  "ballin'",
                            "points":  28
                        },
                        {
                            "text":  "honest/faithful",
                            "points":  21
                        },
                        {
                            "text":  "kind/caring",
                            "points":  20
                        },
                        {
                            "text":  "romantic/charming",
                            "points":  8
                        },
                        {
                            "text":  "hot/humpalicious",
                            "points":  7
                        },
                        {
                            "text":  "smart",
                            "points":  5
                        },
                        {
                            "text":  "mute/silent",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190243,
        "question":  "If a nagging app were invented, name something it would constantly remind husbands to do.",
        "answers":  [
                        {
                            "text":  "clean up/dishes",
                            "points":  27
                        },
                        {
                            "text":  "take out trash",
                            "points":  26
                        },
                        {
                            "text":  "yard work",
                            "points":  11
                        },
                        {
                            "text":  "call/talk to wife",
                            "points":  8
                        },
                        {
                            "text":  "turn off tv",
                            "points":  7
                        },
                        {
                            "text":  "pay attn./listen",
                            "points":  7
                        },
                        {
                            "text":  "lose weight",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190244,
        "question":  "We asked 100 women... Name one word you might use to describe a pizza and a man.",
        "answers":  [
                        {
                            "text":  "hot",
                            "points":  26
                        },
                        {
                            "text":  "delicious",
                            "points":  23
                        },
                        {
                            "text":  "yummy",
                            "points":  19
                        },
                        {
                            "text":  "cheesy",
                            "points":  16
                        },
                        {
                            "text":  "greasy",
                            "points":  3
                        },
                        {
                            "text":  "spicy",
                            "points":  2
                        },
                        {
                            "text":  "round",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190245,
        "question":  "We asked 100 married men... When I grab my wife's bottom, it feels like I'm holding two big what?",
        "answers":  [
                        {
                            "text":  "buns/rolls",
                            "points":  26
                        },
                        {
                            "text":  "melons",
                            "points":  21
                        },
                        {
                            "text":  "pillows",
                            "points":  16
                        },
                        {
                            "text":  "beanbags",
                            "points":  11
                        },
                        {
                            "text":  "gobs of jell-o",
                            "points":  7
                        },
                        {
                            "text":  "hams",
                            "points":  7
                        },
                        {
                            "text":  "sacks of sugar",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190246,
        "question":  "Name something a man might do to make people think he's younger than he is.",
        "answers":  [
                        {
                            "text":  "dye hair/beard",
                            "points":  61
                        },
                        {
                            "text":  "shave face/body",
                            "points":  11
                        },
                        {
                            "text":  "toupee/hair plugs",
                            "points":  5
                        },
                        {
                            "text":  "buy sports car",
                            "points":  5
                        },
                        {
                            "text":  "date young",
                            "points":  3
                        },
                        {
                            "text":  "work out/sports",
                            "points":  3
                        },
                        {
                            "text":  "comb hair over",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190247,
        "question":  "Name something a girl might grow up to be if her parents named her Bambi.",
        "answers":  [
                        {
                            "text":  "stripper/dancer",
                            "points":  53
                        },
                        {
                            "text":  "a ho/bimbo",
                            "points":  14
                        },
                        {
                            "text":  "model/playmate",
                            "points":  7
                        },
                        {
                            "text":  "a deer",
                            "points":  7
                        },
                        {
                            "text":  "an actress",
                            "points":  5
                        },
                        {
                            "text":  "runner/track star",
                            "points":  2
                        },
                        {
                            "text":  "shy/insecure",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190248,
        "question":  "We asked 100 women... What's the sexiest thing you own?",
        "answers":  [
                        {
                            "text":  "panties/vinyl thong",
                            "points":  45
                        },
                        {
                            "text":  "bra/open-nippled",
                            "points":  20
                        },
                        {
                            "text":  "dress/black dress",
                            "points":  7
                        },
                        {
                            "text":  "heels/10-inch",
                            "points":  6
                        },
                        {
                            "text":  "my brain",
                            "points":  5
                        },
                        {
                            "text":  "garter/belt",
                            "points":  4
                        },
                        {
                            "text":  "nightie/negligee",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190249,
        "question":  "If lovers go hiking, name something they might have in their backpack for outdoor romance.",
        "answers":  [
                        {
                            "text":  "wine/booze",
                            "points":  36
                        },
                        {
                            "text":  "blanket/quilt",
                            "points":  27
                        },
                        {
                            "text":  "condom/weenie wrap",
                            "points":  11
                        },
                        {
                            "text":  "candles",
                            "points":  5
                        },
                        {
                            "text":  "bug spray",
                            "points":  4
                        },
                        {
                            "text":  "picnic/chocolate",
                            "points":  4
                        },
                        {
                            "text":  "lube/pine-scented",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190250,
        "question":  "If you're afraid of flying, name something you'd pack in your carry-on just in case.",
        "answers":  [
                        {
                            "text":  "meds/cyanide",
                            "points":  34
                        },
                        {
                            "text":  "a parachute",
                            "points":  24
                        },
                        {
                            "text":  "the bible/book",
                            "points":  10
                        },
                        {
                            "text":  "a flask/booze",
                            "points":  9
                        },
                        {
                            "text":  "barf bag",
                            "points":  6
                        },
                        {
                            "text":  "diaper/clean undies",
                            "points":  4
                        },
                        {
                            "text":  "tunes/earphones",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190251,
        "question":  "We asked 100 women... On your man's \"things I really love\" list, what might come above you?",
        "answers":  [
                        {
                            "text":  "tv/sports",
                            "points":  34
                        },
                        {
                            "text":  "the kids",
                            "points":  11
                        },
                        {
                            "text":  "god/jesus",
                            "points":  11
                        },
                        {
                            "text":  "himself/career",
                            "points":  11
                        },
                        {
                            "text":  "his car/truck",
                            "points":  10
                        },
                        {
                            "text":  "his mom",
                            "points":  9
                        },
                        {
                            "text":  "beer/bud light",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190252,
        "question":  "Name a place where you see a lot of boobs.",
        "answers":  [
                        {
                            "text":  "strip joint",
                            "points":  33
                        },
                        {
                            "text":  "nude beach",
                            "points":  30
                        },
                        {
                            "text":  "hooters",
                            "points":  11
                        },
                        {
                            "text":  "dr./surgeon's",
                            "points":  6
                        },
                        {
                            "text":  "bar/nightclub",
                            "points":  4
                        },
                        {
                            "text":  "congress",
                            "points":  4
                        },
                        {
                            "text":  "las vegas",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190253,
        "question":  "We asked 100 men... If you were going to prison tomorrow, how would you spend your last night of freedom?",
        "answers":  [
                        {
                            "text":  "sex/massive orgy",
                            "points":  32
                        },
                        {
                            "text":  "with family/kids",
                            "points":  20
                        },
                        {
                            "text":  "drinking/at bar",
                            "points":  19
                        },
                        {
                            "text":  "eating",
                            "points":  8
                        },
                        {
                            "text":  "running/hiding",
                            "points":  7
                        },
                        {
                            "text":  "crying",
                            "points":  2
                        },
                        {
                            "text":  "at strip joint",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190254,
        "question":  "Fill in the blank: Dear all my internet friends: Stop posting pictures of what?",
        "answers":  [
                        {
                            "text":  "your food!",
                            "points":  29
                        },
                        {
                            "text":  "you/your cleavage",
                            "points":  22
                        },
                        {
                            "text":  "animals/pets",
                            "points":  15
                        },
                        {
                            "text":  "politics",
                            "points":  11
                        },
                        {
                            "text":  "your stupid kids",
                            "points":  8
                        },
                        {
                            "text":  "kardashians/kanye",
                            "points":  3
                        },
                        {
                            "text":  "me without asking",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190255,
        "question":  "Fill in the blank: At home, a husband might say to his wife, \"Honey, let's ______ in the nude.\"",
        "answers":  [
                        {
                            "text":  "swim",
                            "points":  24
                        },
                        {
                            "text":  "sleep",
                            "points":  23
                        },
                        {
                            "text":  "dance/tap dance",
                            "points":  12
                        },
                        {
                            "text":  "eat",
                            "points":  10
                        },
                        {
                            "text":  "bathe/shower",
                            "points":  9
                        },
                        {
                            "text":  "watch tv/o'reilly",
                            "points":  6
                        },
                        {
                            "text":  "cook/bbq",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  190256,
        "question":  "We asked 100 women... Name a reason a man might remind you of a horse.",
        "answers":  [
                        {
                            "text":  "big teeth/mouth",
                            "points":  21
                        },
                        {
                            "text":  "stubborn/difficult",
                            "points":  21
                        },
                        {
                            "text":  "neighing laugh",
                            "points":  17
                        },
                        {
                            "text":  "way he eats/chews",
                            "points":  16
                        },
                        {
                            "text":  "hung like one",
                            "points":  8
                        },
                        {
                            "text":  "bad breath",
                            "points":  4
                        },
                        {
                            "text":  "thick/muscular",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190257,
        "question":  "Name something a man might be holding while his wife is shopping.",
        "answers":  [
                        {
                            "text":  "her purse",
                            "points":  57
                        },
                        {
                            "text":  "shopping bags",
                            "points":  10
                        },
                        {
                            "text":  "phone",
                            "points":  6
                        },
                        {
                            "text":  "baby/kids",
                            "points":  5
                        },
                        {
                            "text":  "wallet/cash/card",
                            "points":  5
                        },
                        {
                            "text":  "his tongue",
                            "points":  3
                        },
                        {
                            "text":  "shopping cart",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190258,
        "question":  "A wife might tell her husband, \"Yeah, I'll wear lingerie if you wear\" what?",
        "answers":  [
                        {
                            "text":  "hot undies/lingerie",
                            "points":  51
                        },
                        {
                            "text":  "suit & tie/tux",
                            "points":  14
                        },
                        {
                            "text":  "a speedo",
                            "points":  10
                        },
                        {
                            "text":  "condom/weenie beanie",
                            "points":  5
                        },
                        {
                            "text":  "handcuffs",
                            "points":  4
                        },
                        {
                            "text":  "cologne",
                            "points":  3
                        },
                        {
                            "text":  "costume/mask",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190259,
        "question":  "Tell me something about Steve Harvey that you think is a ten.",
        "answers":  [
                        {
                            "text":  "humor/personality",
                            "points":  44
                        },
                        {
                            "text":  "pearly white smile",
                            "points":  16
                        },
                        {
                            "text":  "his stud stache",
                            "points":  9
                        },
                        {
                            "text":  "stylin' threads",
                            "points":  8
                        },
                        {
                            "text":  "his money's got $$$",
                            "points":  5
                        },
                        {
                            "text":  "honey-sweet voice",
                            "points":  4
                        },
                        {
                            "text":  "bald chrome dome",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190260,
        "question":  "Name something that is close to your heart.",
        "answers":  [
                        {
                            "text":  "loved one/family",
                            "points":  43
                        },
                        {
                            "text":  "lungs",
                            "points":  17
                        },
                        {
                            "text":  "dog/pet",
                            "points":  11
                        },
                        {
                            "text":  "ribs",
                            "points":  5
                        },
                        {
                            "text":  "boobs/left nipple",
                            "points":  5
                        },
                        {
                            "text":  "blood/artery",
                            "points":  4
                        },
                        {
                            "text":  "shirt/buttons",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190261,
        "question":  "Name an animal you should slowly try to back away from if you come in contact with it.",
        "answers":  [
                        {
                            "text":  "bear",
                            "points":  42
                        },
                        {
                            "text":  "snake",
                            "points":  15
                        },
                        {
                            "text":  "skunk",
                            "points":  12
                        },
                        {
                            "text":  "lion",
                            "points":  8
                        },
                        {
                            "text":  "wolf",
                            "points":  4
                        },
                        {
                            "text":  "tiger",
                            "points":  4
                        },
                        {
                            "text":  "mean/rabid dog",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190262,
        "question":  "Name something you only have one set of.",
        "answers":  [
                        {
                            "text":  "peepers",
                            "points":  33
                        },
                        {
                            "text":  "pearly whites",
                            "points":  31
                        },
                        {
                            "text":  "ears",
                            "points":  6
                        },
                        {
                            "text":  "dairy cannons",
                            "points":  5
                        },
                        {
                            "text":  "hands",
                            "points":  5
                        },
                        {
                            "text":  "dishes/silverware",
                            "points":  5
                        },
                        {
                            "text":  "wrinkly danglers",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190263,
        "question":  "Name something you'd be surprised to hear that Santa Claus doesn't really care about.",
        "answers":  [
                        {
                            "text":  "kids",
                            "points":  31
                        },
                        {
                            "text":  "been bad or good",
                            "points":  17
                        },
                        {
                            "text":  "toys/my list",
                            "points":  12
                        },
                        {
                            "text":  "milk/cookies",
                            "points":  11
                        },
                        {
                            "text":  "christmas",
                            "points":  10
                        },
                        {
                            "text":  "snow/climate change",
                            "points":  5
                        },
                        {
                            "text":  "reindeer",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190264,
        "question":  "We asked 100 women... Tell us something -- anything -- you have in common with Dolly Parton.",
        "answers":  [
                        {
                            "text":  "epic boobage",
                            "points":  30
                        },
                        {
                            "text":  "my hair/blonde",
                            "points":  20
                        },
                        {
                            "text":  "i'm female",
                            "points":  14
                        },
                        {
                            "text":  "my voice/singing",
                            "points":  8
                        },
                        {
                            "text":  "nice personality",
                            "points":  7
                        },
                        {
                            "text":  "my long nails",
                            "points":  6
                        },
                        {
                            "text":  "i'm short",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190265,
        "question":  "Name something a man brings to bed when he knows his wife is not in the mood.",
        "answers":  [
                        {
                            "text":  "book/kinky mag",
                            "points":  24
                        },
                        {
                            "text":  "food/candy",
                            "points":  21
                        },
                        {
                            "text":  "phone",
                            "points":  16
                        },
                        {
                            "text":  "ipad/laptop",
                            "points":  10
                        },
                        {
                            "text":  "himself/lonely woody",
                            "points":  9
                        },
                        {
                            "text":  "remote",
                            "points":  6
                        },
                        {
                            "text":  "lotion/oil",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190266,
        "question":  "If a wife strip-searched her husband, name something she'd better not find on him.",
        "answers":  [
                        {
                            "text":  "dong sarong",
                            "points":  21
                        },
                        {
                            "text":  "chick's phone #",
                            "points":  21
                        },
                        {
                            "text":  "lipstick/makeup",
                            "points":  19
                        },
                        {
                            "text":  "ladies' undies/hers",
                            "points":  12
                        },
                        {
                            "text":  "hickey/bite",
                            "points":  10
                        },
                        {
                            "text":  "scratches/on back",
                            "points":  3
                        },
                        {
                            "text":  "perfume",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190267,
        "question":  "If there were a store for vampries, name something they might sell there.",
        "answers":  [
                        {
                            "text":  "blood/blood latte",
                            "points":  56
                        },
                        {
                            "text":  "capes",
                            "points":  14
                        },
                        {
                            "text":  "false fangs",
                            "points":  5
                        },
                        {
                            "text":  "toothpaste/whiten'g",
                            "points":  4
                        },
                        {
                            "text":  "fang sharpener",
                            "points":  3
                        },
                        {
                            "text":  "coffins",
                            "points":  3
                        },
                        {
                            "text":  "window blinds",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190268,
        "question":  "When two women see a man, one might say to the other, \"Hey, check out his\" what?",
        "answers":  [
                        {
                            "text":  "tight man-can",
                            "points":  55
                        },
                        {
                            "text":  "beautiful eyes",
                            "points":  8
                        },
                        {
                            "text":  "\"moose knuckle\"",
                            "points":  8
                        },
                        {
                            "text":  "abs/belly",
                            "points":  5
                        },
                        {
                            "text":  "car",
                            "points":  4
                        },
                        {
                            "text":  "thick wallet",
                            "points":  4
                        },
                        {
                            "text":  "chest/dancing pecs",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190269,
        "question":  "Name a road sign a wife might like to hold up when her husband asks for sex.",
        "answers":  [
                        {
                            "text":  "stop",
                            "points":  54
                        },
                        {
                            "text":  "yield",
                            "points":  12
                        },
                        {
                            "text":  "slow",
                            "points":  7
                        },
                        {
                            "text":  "road closed",
                            "points":  4
                        },
                        {
                            "text":  "slippery when wet",
                            "points":  4
                        },
                        {
                            "text":  "1-way/do not enter",
                            "points":  4
                        },
                        {
                            "text":  "curves ahead",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190270,
        "question":  "There was an accident at the bakery. And now the baker's buns are all what?",
        "answers":  [
                        {
                            "text":  "burnt/black",
                            "points":  51
                        },
                        {
                            "text":  "squished/flat",
                            "points":  17
                        },
                        {
                            "text":  "sticky",
                            "points":  8
                        },
                        {
                            "text":  "wet/soggy",
                            "points":  5
                        },
                        {
                            "text":  "hard/tough",
                            "points":  3
                        },
                        {
                            "text":  "eaten/gone",
                            "points":  2
                        },
                        {
                            "text":  "all over/on ceiling",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190271,
        "question":  "When you housesit for someone, name something of theirs you feel weird about using.",
        "answers":  [
                        {
                            "text":  "bed",
                            "points":  50
                        },
                        {
                            "text":  "crapper/bidet",
                            "points":  17
                        },
                        {
                            "text":  "tub/hand showerhead",
                            "points":  8
                        },
                        {
                            "text":  "toothbrush",
                            "points":  4
                        },
                        {
                            "text":  "robe/slippers",
                            "points":  3
                        },
                        {
                            "text":  "food/fridge",
                            "points":  3
                        },
                        {
                            "text":  "computer",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190272,
        "question":  "If newborn babies could talk, name something about which they might tell the doctor, \"Hey, don't do that.\"",
        "answers":  [
                        {
                            "text":  "spank my booty",
                            "points":  34
                        },
                        {
                            "text":  "shots/needles",
                            "points":  25
                        },
                        {
                            "text":  "circumcise me",
                            "points":  11
                        },
                        {
                            "text":  "take temp in butt",
                            "points":  8
                        },
                        {
                            "text":  "cut the cord",
                            "points":  4
                        },
                        {
                            "text":  "put me back in",
                            "points":  3
                        },
                        {
                            "text":  "touch me/cold hands",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190273,
        "question":  "Name something you hope the other person doesn't do if the two of you are in a canoe.",
        "answers":  [
                        {
                            "text":  "tip/lean/rock it",
                            "points":  31
                        },
                        {
                            "text":  "stand up",
                            "points":  25
                        },
                        {
                            "text":  "have fart attack",
                            "points":  12
                        },
                        {
                            "text":  "fall out/jump",
                            "points":  7
                        },
                        {
                            "text":  "blow chunks",
                            "points":  7
                        },
                        {
                            "text":  "dance/cupid shuffle",
                            "points":  3
                        },
                        {
                            "text":  "pee/drop a deuce",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190274,
        "question":  "Name something Pinocchio might stick his nose into.",
        "answers":  [
                        {
                            "text":  "food/warm pie",
                            "points":  31
                        },
                        {
                            "text":  "hole/peep hole",
                            "points":  24
                        },
                        {
                            "text":  "people's business",
                            "points":  13
                        },
                        {
                            "text":  "bush/tree/flower",
                            "points":  9
                        },
                        {
                            "text":  "the fridge",
                            "points":  4
                        },
                        {
                            "text":  "beehive",
                            "points":  4
                        },
                        {
                            "text":  "person/hot babe",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190275,
        "question":  "We asked 100 married women... Name a deli food that reminds you of your husband.",
        "answers":  [
                        {
                            "text":  "bologna",
                            "points":  26
                        },
                        {
                            "text":  "ham",
                            "points":  16
                        },
                        {
                            "text":  "pickle",
                            "points":  13
                        },
                        {
                            "text":  "sausage",
                            "points":  11
                        },
                        {
                            "text":  "turkey",
                            "points":  11
                        },
                        {
                            "text":  "salami",
                            "points":  7
                        },
                        {
                            "text":  "pepperoni",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190276,
        "question":  "Name something oh so wrong that feels oh so right.",
        "answers":  [
                        {
                            "text":  "pigging out",
                            "points":  46
                        },
                        {
                            "text":  "sex/with my pillow",
                            "points":  20
                        },
                        {
                            "text":  "love/bad rela'ship",
                            "points":  5
                        },
                        {
                            "text":  "chuggin' booze",
                            "points":  5
                        },
                        {
                            "text":  "speeding",
                            "points":  5
                        },
                        {
                            "text":  "drugs/\"blazing\"",
                            "points":  3
                        },
                        {
                            "text":  "smokin' cigs",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190277,
        "question":  "Name something you should put in your belly button so you'll smell good.",
        "answers":  [
                        {
                            "text":  "cologne",
                            "points":  45
                        },
                        {
                            "text":  "deodorant",
                            "points":  9
                        },
                        {
                            "text":  "soap/detergent",
                            "points":  9
                        },
                        {
                            "text":  "candy/mint/gum",
                            "points":  9
                        },
                        {
                            "text":  "flowers/potpourri",
                            "points":  6
                        },
                        {
                            "text":  "scented oils",
                            "points":  5
                        },
                        {
                            "text":  "powder",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190278,
        "question":  "We asked 100 women... Name something of yours it would be fun to make your man wear, but only in the bedroom.",
        "answers":  [
                        {
                            "text":  "panties/g-string",
                            "points":  40
                        },
                        {
                            "text":  "bra",
                            "points":  21
                        },
                        {
                            "text":  "nylons/hose",
                            "points":  8
                        },
                        {
                            "text":  "slip",
                            "points":  6
                        },
                        {
                            "text":  "nightie",
                            "points":  5
                        },
                        {
                            "text":  "nothing",
                            "points":  4
                        },
                        {
                            "text":  "hat/bonnet",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190279,
        "question":  "Name something you'd hate to find on your father's night table.",
        "answers":  [
                        {
                            "text":  "condom/flavored",
                            "points":  38
                        },
                        {
                            "text":  "warm vibrator",
                            "points":  12
                        },
                        {
                            "text":  "viagra",
                            "points":  12
                        },
                        {
                            "text":  "lube",
                            "points":  7
                        },
                        {
                            "text":  "gun",
                            "points":  7
                        },
                        {
                            "text":  "dentures",
                            "points":  6
                        },
                        {
                            "text":  "penthouse/porn",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190280,
        "question":  "We asked 100 women... When you get to heaven, what do you hope every man you meet has?",
        "answers":  [
                        {
                            "text":  "love/honesty",
                            "points":  30
                        },
                        {
                            "text":  "dreamy face/smile",
                            "points":  24
                        },
                        {
                            "text":  "good personality",
                            "points":  16
                        },
                        {
                            "text":  "brains/sense",
                            "points":  5
                        },
                        {
                            "text":  "hot bod/rodzilla",
                            "points":  5
                        },
                        {
                            "text":  "head of hair",
                            "points":  4
                        },
                        {
                            "text":  "a uterus",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190281,
        "question":  "Sometimes a woman can be too distracted by a man's good looks to notice if he's what?",
        "answers":  [
                        {
                            "text":  "smart or stupid",
                            "points":  30
                        },
                        {
                            "text":  "nice or douchey",
                            "points":  22
                        },
                        {
                            "text":  "into ween or vageen",
                            "points":  11
                        },
                        {
                            "text":  "married or single",
                            "points":  9
                        },
                        {
                            "text":  "4'6\" or 6'4\"",
                            "points":  5
                        },
                        {
                            "text":  "criminal/dangerous",
                            "points":  5
                        },
                        {
                            "text":  "rich or broke",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190282,
        "question":  "Name a reason you'd attend the funeral of someone you hated.",
        "answers":  [
                        {
                            "text":  "respects/console",
                            "points":  28
                        },
                        {
                            "text":  "make sure dead",
                            "points":  23
                        },
                        {
                            "text":  "gloat/pee on grave",
                            "points":  19
                        },
                        {
                            "text":  "see who's there",
                            "points":  6
                        },
                        {
                            "text":  "i'm in will",
                            "points":  4
                        },
                        {
                            "text":  "forgive/closure",
                            "points":  4
                        },
                        {
                            "text":  "free munchies!",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190283,
        "question":  "We asked 100 men... The good news is, there's a naked woman in your bed. The bad news is, it's who?",
        "answers":  [
                        {
                            "text":  "my mom",
                            "points":  24
                        },
                        {
                            "text":  "my mother-in-law",
                            "points":  23
                        },
                        {
                            "text":  "my ex",
                            "points":  15
                        },
                        {
                            "text":  "my wife",
                            "points":  7
                        },
                        {
                            "text":  "my sister-in-law",
                            "points":  7
                        },
                        {
                            "text":  "my grandma",
                            "points":  6
                        },
                        {
                            "text":  "my boss",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190284,
        "question":  "Name a place a man goes with his wife that he'd never go to again after they divorce.",
        "answers":  [
                        {
                            "text":  "shopping",
                            "points":  22
                        },
                        {
                            "text":  "her family's house",
                            "points":  22
                        },
                        {
                            "text":  "opera/theater",
                            "points":  17
                        },
                        {
                            "text":  "restaurant",
                            "points":  10
                        },
                        {
                            "text":  "church",
                            "points":  9
                        },
                        {
                            "text":  "honeymoon spot",
                            "points":  4
                        },
                        {
                            "text":  "to bed",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190285,
        "question":  "Name something of grandpa's that grandma would hate to discover she just sat on.",
        "answers":  [
                        {
                            "text":  "his teeth",
                            "points":  50
                        },
                        {
                            "text":  "his glasses",
                            "points":  15
                        },
                        {
                            "text":  "clothes/fedora",
                            "points":  7
                        },
                        {
                            "text":  "tobacco/spittoon",
                            "points":  4
                        },
                        {
                            "text":  "his poop/pee",
                            "points":  4
                        },
                        {
                            "text":  "food/ice cream",
                            "points":  3
                        },
                        {
                            "text":  "him/his face",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190286,
        "question":  "Name something that at some time in your life you've put up your nose.",
        "answers":  [
                        {
                            "text":  "finger",
                            "points":  44
                        },
                        {
                            "text":  "tissue/tp",
                            "points":  16
                        },
                        {
                            "text":  "pen/pencil/crayon",
                            "points":  10
                        },
                        {
                            "text":  "cocaine",
                            "points":  6
                        },
                        {
                            "text":  "q-tip",
                            "points":  4
                        },
                        {
                            "text":  "lego",
                            "points":  3
                        },
                        {
                            "text":  "pepper/chili powder",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190287,
        "question":  "Name a reason Santa might leave the presents out on the lawn.",
        "answers":  [
                        {
                            "text":  "no chimney",
                            "points":  39
                        },
                        {
                            "text":  "can't fit in chimney",
                            "points":  20
                        },
                        {
                            "text":  "dog/attack cat",
                            "points":  10
                        },
                        {
                            "text":  "locks/security",
                            "points":  9
                        },
                        {
                            "text":  "fireplace lit",
                            "points":  4
                        },
                        {
                            "text":  "house is a mess",
                            "points":  2
                        },
                        {
                            "text":  "tired/lazy",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190288,
        "question":  "If Steve Harvey agreed to come to your house for dinner, what would you feed him?",
        "answers":  [
                        {
                            "text":  "beef/meat loaf",
                            "points":  37
                        },
                        {
                            "text":  "chicken/wings",
                            "points":  30
                        },
                        {
                            "text":  "pizza/frozen",
                            "points":  6
                        },
                        {
                            "text":  "pasta/ramen noodle",
                            "points":  4
                        },
                        {
                            "text":  "whatever he wants",
                            "points":  3
                        },
                        {
                            "text":  "chili/soup",
                            "points":  3
                        },
                        {
                            "text":  "ribs/bbq",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190289,
        "question":  "We asked 100 women... My man is like a magician. He disappears whenever I start talking about what?",
        "answers":  [
                        {
                            "text":  "chores/honey-do list",
                            "points":  37
                        },
                        {
                            "text":  "shopping",
                            "points":  10
                        },
                        {
                            "text":  "my feelings",
                            "points":  10
                        },
                        {
                            "text":  "marriage",
                            "points":  9
                        },
                        {
                            "text":  "my family/his",
                            "points":  8
                        },
                        {
                            "text":  "work",
                            "points":  6
                        },
                        {
                            "text":  "money/bills",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  190290,
        "question":  "When you get to heaven, name someone there whose presence means you'll never rest in peace.",
        "answers":  [
                        {
                            "text":  "all my exes",
                            "points":  34
                        },
                        {
                            "text":  "mother-in-law",
                            "points":  20
                        },
                        {
                            "text":  "my mother",
                            "points":  11
                        },
                        {
                            "text":  "annoying friends",
                            "points":  7
                        },
                        {
                            "text":  "politicians",
                            "points":  5
                        },
                        {
                            "text":  "enemy/bully",
                            "points":  5
                        },
                        {
                            "text":  "my spouse/mate",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190291,
        "question":  "We asked 100 women... Fill in the blank: A good man is like a good piece of what?",
        "answers":  [
                        {
                            "text":  "chocolate/candy",
                            "points":  27
                        },
                        {
                            "text":  "steak/meat",
                            "points":  22
                        },
                        {
                            "text":  "moist cake",
                            "points":  15
                        },
                        {
                            "text":  "warm pie",
                            "points":  9
                        },
                        {
                            "text":  "furniture",
                            "points":  5
                        },
                        {
                            "text":  "pizza",
                            "points":  4
                        },
                        {
                            "text":  "heaven",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190292,
        "question":  "Name something of yours someone's already called dibs on when you die.",
        "answers":  [
                        {
                            "text":  "jewelry",
                            "points":  27
                        },
                        {
                            "text":  "car/truck",
                            "points":  19
                        },
                        {
                            "text":  "house/condo",
                            "points":  15
                        },
                        {
                            "text":  "$$$/life insurance",
                            "points":  11
                        },
                        {
                            "text":  "clothes/g-string",
                            "points":  6
                        },
                        {
                            "text":  "art/painting",
                            "points":  4
                        },
                        {
                            "text":  "furniture/waterbed",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190293,
        "question":  "Name something a wife might forbid her husband to wear around the house.",
        "answers":  [
                        {
                            "text":  "his undies/g-string",
                            "points":  22
                        },
                        {
                            "text":  "birthday suit",
                            "points":  17
                        },
                        {
                            "text":  "shoes/crocs",
                            "points":  13
                        },
                        {
                            "text":  "speedo",
                            "points":  12
                        },
                        {
                            "text":  "her duds/fishnets",
                            "points":  10
                        },
                        {
                            "text":  "socks/with sandals",
                            "points":  7
                        },
                        {
                            "text":  "sweats",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190294,
        "question":  "I partied so hard last night that when I woke up, I was holding what?",
        "answers":  [
                        {
                            "text":  "booze/a glass",
                            "points":  45
                        },
                        {
                            "text":  "the toilet",
                            "points":  9
                        },
                        {
                            "text":  "a stranger/hooker",
                            "points":  9
                        },
                        {
                            "text":  "my head",
                            "points":  8
                        },
                        {
                            "text":  "undies/clothes",
                            "points":  6
                        },
                        {
                            "text":  "food/xl pickle",
                            "points":  5
                        },
                        {
                            "text":  "happy dog/pet",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190295,
        "question":  "Name a car that an adult film actress might name herself after.",
        "answers":  [
                        {
                            "text":  "porsche",
                            "points":  44
                        },
                        {
                            "text":  "mercedes/benz",
                            "points":  20
                        },
                        {
                            "text":  "ferrari",
                            "points":  7
                        },
                        {
                            "text":  "lexus",
                            "points":  6
                        },
                        {
                            "text":  "mustang",
                            "points":  4
                        },
                        {
                            "text":  "bmw/beemer",
                            "points":  2
                        },
                        {
                            "text":  "jaguar",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190296,
        "question":  "When a man gets home from work, name something he'd hate to find his mate had changed.",
        "answers":  [
                        {
                            "text":  "room setups/decor",
                            "points":  42
                        },
                        {
                            "text":  "the locks",
                            "points":  21
                        },
                        {
                            "text":  "their plans/dinner",
                            "points":  6
                        },
                        {
                            "text":  "clothes/his clothes",
                            "points":  6
                        },
                        {
                            "text":  "her hair",
                            "points":  4
                        },
                        {
                            "text":  "husbands/mates",
                            "points":  3
                        },
                        {
                            "text":  "genders",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190297,
        "question":  "We asked 100 married people... Name a board game that best describes your marriage.",
        "answers":  [
                        {
                            "text":  "life",
                            "points":  31
                        },
                        {
                            "text":  "chutes and ladders",
                            "points":  12
                        },
                        {
                            "text":  "sorry",
                            "points":  11
                        },
                        {
                            "text":  "trouble",
                            "points":  10
                        },
                        {
                            "text":  "monopoly",
                            "points":  9
                        },
                        {
                            "text":  "scrabble",
                            "points":  7
                        },
                        {
                            "text":  "risk",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190298,
        "question":  "We asked 100 women... What would you do if you woke up tomorrow morning and you were a man?",
        "answers":  [
                        {
                            "text":  "scream/cry/freak",
                            "points":  59
                        },
                        {
                            "text":  "die/chug arsenic",
                            "points":  6
                        },
                        {
                            "text":  "faint",
                            "points":  5
                        },
                        {
                            "text":  "back to sleep/dream",
                            "points":  5
                        },
                        {
                            "text":  "pee standing!",
                            "points":  3
                        },
                        {
                            "text":  "shave my face",
                            "points":  3
                        },
                        {
                            "text":  "spank my salami",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190299,
        "question":  "For cannibal Halloween, name a body part the little cannibals hope they'll get in their treat bags.",
        "answers":  [
                        {
                            "text":  "fingers/hand",
                            "points":  35
                        },
                        {
                            "text":  "eyeballs",
                            "points":  20
                        },
                        {
                            "text":  "toes/foot",
                            "points":  9
                        },
                        {
                            "text":  "leg/thigh",
                            "points":  7
                        },
                        {
                            "text":  "brain",
                            "points":  5
                        },
                        {
                            "text":  "ears",
                            "points":  4
                        },
                        {
                            "text":  "head/shrunken",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190300,
        "question":  "Name a TV host who makes a lot of money by being funny.",
        "answers":  [
                        {
                            "text":  "steve harvey",
                            "points":  32
                        },
                        {
                            "text":  "jimmy fallon",
                            "points":  15
                        },
                        {
                            "text":  "ellen degeneres",
                            "points":  14
                        },
                        {
                            "text":  "drew carey",
                            "points":  8
                        },
                        {
                            "text":  "stephen colbert",
                            "points":  5
                        },
                        {
                            "text":  "conan o'brien",
                            "points":  5
                        },
                        {
                            "text":  "jay leno",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190301,
        "question":  "Tell me a part of a car that's used to describe a body part.",
        "answers":  [
                        {
                            "text":  "trunk",
                            "points":  31
                        },
                        {
                            "text":  "headlights",
                            "points":  18
                        },
                        {
                            "text":  "engine/motor",
                            "points":  10
                        },
                        {
                            "text":  "seat/back seat",
                            "points":  8
                        },
                        {
                            "text":  "rear end",
                            "points":  6
                        },
                        {
                            "text":  "hood",
                            "points":  6
                        },
                        {
                            "text":  "bumper",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190302,
        "question":  "Name something the chef spread all over his body so his wife would find him tasty.",
        "answers":  [
                        {
                            "text":  "chocolate/hot fudge",
                            "points":  29
                        },
                        {
                            "text":  "whipped cream/cream",
                            "points":  27
                        },
                        {
                            "text":  "butter",
                            "points":  10
                        },
                        {
                            "text":  "honey",
                            "points":  8
                        },
                        {
                            "text":  "oil/olive oil",
                            "points":  4
                        },
                        {
                            "text":  "peanut butter",
                            "points":  3
                        },
                        {
                            "text":  "jelly/jam",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190303,
        "question":  "Name something hospital nurses might volunteer to do if Steve Harvey was a patient.",
        "answers":  [
                        {
                            "text":  "hot wet sponge bath",
                            "points":  56
                        },
                        {
                            "text":  "physical/take vitals",
                            "points":  8
                        },
                        {
                            "text":  "take the day off",
                            "points":  6
                        },
                        {
                            "text":  "work overtime",
                            "points":  4
                        },
                        {
                            "text":  "feed him",
                            "points":  3
                        },
                        {
                            "text":  "shave bod/head",
                            "points":  3
                        },
                        {
                            "text":  "rub/polish head",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190304,
        "question":  "When you look in the mirror, name a part of yourself that might even turn you off.",
        "answers":  [
                        {
                            "text":  "bulging gut",
                            "points":  37
                        },
                        {
                            "text":  "nose/snot locker",
                            "points":  14
                        },
                        {
                            "text":  "jacked teeth/smile",
                            "points":  10
                        },
                        {
                            "text":  "hair/gray/losing",
                            "points":  8
                        },
                        {
                            "text":  "beady/baggy eyes",
                            "points":  5
                        },
                        {
                            "text":  "wrinkles",
                            "points":  5
                        },
                        {
                            "text":  "zit collection",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190305,
        "question":  "Fill in the blank: It would be surprising to hear a stripper say, \"I used to be a\" what?",
        "answers":  [
                        {
                            "text":  "nun",
                            "points":  34
                        },
                        {
                            "text":  "teacher",
                            "points":  17
                        },
                        {
                            "text":  "doctor",
                            "points":  13
                        },
                        {
                            "text":  "cop",
                            "points":  8
                        },
                        {
                            "text":  "lawyer",
                            "points":  5
                        },
                        {
                            "text":  "man",
                            "points":  3
                        },
                        {
                            "text":  "housewife/pta mom",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190306,
        "question":  "Name a part of a petite woman that might be big.",
        "answers":  [
                        {
                            "text":  "her gerber servers",
                            "points":  32
                        },
                        {
                            "text":  "her badonk",
                            "points":  18
                        },
                        {
                            "text":  "her schnozz",
                            "points":  10
                        },
                        {
                            "text":  "her head",
                            "points":  8
                        },
                        {
                            "text":  "her mouth/smile",
                            "points":  6
                        },
                        {
                            "text":  "her feet",
                            "points":  5
                        },
                        {
                            "text":  "personality/'tude",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190307,
        "question":  "Name a place where you'd be surprised to see mirrors on the ceiling.",
        "answers":  [
                        {
                            "text":  "church",
                            "points":  29
                        },
                        {
                            "text":  "bathroom/public",
                            "points":  21
                        },
                        {
                            "text":  "hotel/motel",
                            "points":  13
                        },
                        {
                            "text":  "bedroom/my mom's",
                            "points":  8
                        },
                        {
                            "text":  "hospital/doc ofc.",
                            "points":  5
                        },
                        {
                            "text":  "dressing room",
                            "points":  4
                        },
                        {
                            "text":  "prison",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190308,
        "question":  "Name something a wife has that she'd hate to come home and see her husband using.",
        "answers":  [
                        {
                            "text":  "her makeup",
                            "points":  23
                        },
                        {
                            "text":  "duds/lacy bra",
                            "points":  20
                        },
                        {
                            "text":  "her razor",
                            "points":  13
                        },
                        {
                            "text":  "her toothbrush",
                            "points":  9
                        },
                        {
                            "text":  "arm-size vibrator",
                            "points":  8
                        },
                        {
                            "text":  "curlers/curl'g iron",
                            "points":  7
                        },
                        {
                            "text":  "her face mask",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190309,
        "question":  "Name something a confident woman doesn't need to feel good about herself.",
        "answers":  [
                        {
                            "text":  "a man",
                            "points":  21
                        },
                        {
                            "text":  "nice face/any teeth",
                            "points":  16
                        },
                        {
                            "text":  "a hotty mcbody",
                            "points":  15
                        },
                        {
                            "text":  "compliments",
                            "points":  9
                        },
                        {
                            "text":  "makeup",
                            "points":  9
                        },
                        {
                            "text":  "money",
                            "points":  8
                        },
                        {
                            "text":  "a brain/degree",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190310,
        "question":  "Name an occupation whose people spend a lot of time working in the dark.",
        "answers":  [
                        {
                            "text":  "miner",
                            "points":  33
                        },
                        {
                            "text":  "photography",
                            "points":  23
                        },
                        {
                            "text":  "security guard",
                            "points":  12
                        },
                        {
                            "text":  "sewage worker",
                            "points":  5
                        },
                        {
                            "text":  "caving/spelunking",
                            "points":  3
                        },
                        {
                            "text":  "theater usher",
                            "points":  3
                        },
                        {
                            "text":  "ho",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190311,
        "question":  "At a beach, a woman might ask a man, \"Is that a ______ in your Speedo?\"",
        "answers":  [
                        {
                            "text":  "banana",
                            "points":  30
                        },
                        {
                            "text":  "sock",
                            "points":  14
                        },
                        {
                            "text":  "cucumber/pickle",
                            "points":  13
                        },
                        {
                            "text":  "gun",
                            "points":  7
                        },
                        {
                            "text":  "fish/eel",
                            "points":  7
                        },
                        {
                            "text":  "phone",
                            "points":  6
                        },
                        {
                            "text":  "potato",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190312,
        "question":  "Name something Mrs. Claus would hate to find when cleaning Santa's suit.",
        "answers":  [
                        {
                            "text":  "food/crumbs",
                            "points":  23
                        },
                        {
                            "text":  "condoms",
                            "points":  18
                        },
                        {
                            "text":  "poop/pee",
                            "points":  12
                        },
                        {
                            "text":  "lipstick marks",
                            "points":  11
                        },
                        {
                            "text":  "chick's phone #",
                            "points":  10
                        },
                        {
                            "text":  "panties",
                            "points":  5
                        },
                        {
                            "text":  "a rip/hole",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190313,
        "question":  "Fill in the blank: Oh no -- I walked into my hotel room and saw the maid holding my what?",
        "answers":  [
                        {
                            "text":  "clothes/used undies",
                            "points":  33
                        },
                        {
                            "text":  "wallet/cash",
                            "points":  21
                        },
                        {
                            "text":  "vibrator/toy",
                            "points":  10
                        },
                        {
                            "text":  "laptop/tablet",
                            "points":  5
                        },
                        {
                            "text":  "jewelry/watch",
                            "points":  4
                        },
                        {
                            "text":  "toothbrush",
                            "points":  4
                        },
                        {
                            "text":  "spouse/mate",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190314,
        "question":  "Name something Christmassy a stripper might wear at a strip club called The North Pole.",
        "answers":  [
                        {
                            "text":  "santa or mrs. c suit",
                            "points":  33
                        },
                        {
                            "text":  "candy cane/stripes",
                            "points":  12
                        },
                        {
                            "text":  "elf outfit",
                            "points":  9
                        },
                        {
                            "text":  "jingle bells",
                            "points":  8
                        },
                        {
                            "text":  "tinsel/garland",
                            "points":  8
                        },
                        {
                            "text":  "mistletoe/on thong",
                            "points":  6
                        },
                        {
                            "text":  "furry pasties",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190315,
        "question":  "Fill in the blank: The groom was so drunk that when he woke up the next morning, he was sleeping next to ______.",
        "answers":  [
                        {
                            "text":  "his best man",
                            "points":  30
                        },
                        {
                            "text":  "bridesmaid",
                            "points":  14
                        },
                        {
                            "text":  "animal/llama",
                            "points":  12
                        },
                        {
                            "text":  "mother-in-law",
                            "points":  11
                        },
                        {
                            "text":  "the toilet",
                            "points":  7
                        },
                        {
                            "text":  "clergy",
                            "points":  4
                        },
                        {
                            "text":  "a stripper",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190316,
        "question":  "Name a place where people get caught in the act.",
        "answers":  [
                        {
                            "text":  "car",
                            "points":  29
                        },
                        {
                            "text":  "park",
                            "points":  22
                        },
                        {
                            "text":  "bedroom",
                            "points":  12
                        },
                        {
                            "text":  "elevator",
                            "points":  6
                        },
                        {
                            "text":  "bathroom/porta-potty",
                            "points":  5
                        },
                        {
                            "text":  "motel/hotel",
                            "points":  3
                        },
                        {
                            "text":  "kitchen/counter",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190317,
        "question":  "If you had all your teeth pulled today, what would you have for dinner tonight?",
        "answers":  [
                        {
                            "text":  "soup",
                            "points":  35
                        },
                        {
                            "text":  "shake/smoothie",
                            "points":  16
                        },
                        {
                            "text":  "mashed potatoes",
                            "points":  7
                        },
                        {
                            "text":  "ice cream",
                            "points":  6
                        },
                        {
                            "text":  "yogurt",
                            "points":  5
                        },
                        {
                            "text":  "pudding",
                            "points":  5
                        },
                        {
                            "text":  "jell-o",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190318,
        "question":  "Name an animal that decides to ruin your party by making an appearance.",
        "answers":  [
                        {
                            "text":  "skunk",
                            "points":  30
                        },
                        {
                            "text":  "spider/bugs",
                            "points":  16
                        },
                        {
                            "text":  "rat/mouse",
                            "points":  13
                        },
                        {
                            "text":  "raccoon",
                            "points":  7
                        },
                        {
                            "text":  "dog",
                            "points":  5
                        },
                        {
                            "text":  "bear",
                            "points":  4
                        },
                        {
                            "text":  "pig",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190319,
        "question":  "If your father were a baker, he might call you his little what?",
        "answers":  [
                        {
                            "text":  "muffin",
                            "points":  29
                        },
                        {
                            "text":  "cake/cupcake",
                            "points":  22
                        },
                        {
                            "text":  "bun/sticky buns",
                            "points":  7
                        },
                        {
                            "text":  "doughboy/girl",
                            "points":  6
                        },
                        {
                            "text":  "chef/baker",
                            "points":  6
                        },
                        {
                            "text":  "donut",
                            "points":  5
                        },
                        {
                            "text":  "cookie",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190320,
        "question":  "If men got pregnant, what would they pack in their hospital bag?",
        "answers":  [
                        {
                            "text":  "beer/booze",
                            "points":  23
                        },
                        {
                            "text":  "food/beef jerky",
                            "points":  19
                        },
                        {
                            "text":  "pain meds/drugs",
                            "points":  11
                        },
                        {
                            "text":  "tablet/ipad",
                            "points":  7
                        },
                        {
                            "text":  "video games/xbox",
                            "points":  7
                        },
                        {
                            "text":  "duds/holey undies",
                            "points":  6
                        },
                        {
                            "text":  "razor",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  190321,
        "question":  "A cannibal might tell a zombie, \"You can have the brain, but leave me the\" what?",
        "answers":  [
                        {
                            "text":  "legs/thighs",
                            "points":  25
                        },
                        {
                            "text":  "heart",
                            "points":  21
                        },
                        {
                            "text":  "rest of him/body",
                            "points":  12
                        },
                        {
                            "text":  "rump roast",
                            "points":  6
                        },
                        {
                            "text":  "eyes",
                            "points":  6
                        },
                        {
                            "text":  "liver6",
                            "points":  4
                        },
                        {
                            "text":  "breast meat",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190322,
        "question":  "When grandma does laundry, name something she might find in grandpa's pants.",
        "answers":  [
                        {
                            "text":  "money/coins",
                            "points":  39
                        },
                        {
                            "text":  "his teeth/dentures",
                            "points":  14
                        },
                        {
                            "text":  "hanky/tissue",
                            "points":  10
                        },
                        {
                            "text":  "candy/gum",
                            "points":  5
                        },
                        {
                            "text":  "condom/weenie beanie",
                            "points":  3
                        },
                        {
                            "text":  "chewing tobacco/tin",
                            "points":  3
                        },
                        {
                            "text":  "medicine/viagra",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190323,
        "question":  "Fill in the blank: I've got a big, fat what?",
        "answers":  [
                        {
                            "text":  "badonkadonk",
                            "points":  30
                        },
                        {
                            "text":  "belly",
                            "points":  14
                        },
                        {
                            "text":  "wallet/wad o' bills",
                            "points":  10
                        },
                        {
                            "text":  "head",
                            "points":  8
                        },
                        {
                            "text":  "cat/dog",
                            "points":  6
                        },
                        {
                            "text":  "ego",
                            "points":  3
                        },
                        {
                            "text":  "woody for you, baby",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190324,
        "question":  "Name a word you use all the time that has an X in it.",
        "answers":  [
                        {
                            "text":  "extra",
                            "points":  22
                        },
                        {
                            "text":  "sex/sexy",
                            "points":  21
                        },
                        {
                            "text":  "x-ray",
                            "points":  10
                        },
                        {
                            "text":  "exit",
                            "points":  8
                        },
                        {
                            "text":  "tax",
                            "points":  4
                        },
                        {
                            "text":  "excellent",
                            "points":  4
                        },
                        {
                            "text":  "fix",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190325,
        "question":  "Name something of yours you like even though it's really old.",
        "answers":  [
                        {
                            "text":  "clothes/shoes",
                            "points":  33
                        },
                        {
                            "text":  "car/truck",
                            "points":  18
                        },
                        {
                            "text":  "watch/jewelry",
                            "points":  7
                        },
                        {
                            "text":  "my geezer mate",
                            "points":  5
                        },
                        {
                            "text":  "stuffed animal",
                            "points":  3
                        },
                        {
                            "text":  "my decrepit body",
                            "points":  3
                        },
                        {
                            "text":  "my house",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190326,
        "question":  "Name a place you go where you don't want to spend more than a few minutes.",
        "answers":  [
                        {
                            "text":  "john/porta-potty",
                            "points":  16
                        },
                        {
                            "text":  "doctor/dentist",
                            "points":  14
                        },
                        {
                            "text":  "dmv",
                            "points":  12
                        },
                        {
                            "text":  "in-laws'/relative's",
                            "points":  8
                        },
                        {
                            "text":  "work/meeting",
                            "points":  7
                        },
                        {
                            "text":  "church",
                            "points":  7
                        },
                        {
                            "text":  "store/abercrombie",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  190327,
        "question":  "Fill in the blank: A woman loves a man who loves to do what?",
        "answers":  [
                        {
                            "text":  "cook",
                            "points":  18
                        },
                        {
                            "text":  "cuddle",
                            "points":  13
                        },
                        {
                            "text":  "dance",
                            "points":  11
                        },
                        {
                            "text":  "clean/scrub toilet",
                            "points":  8
                        },
                        {
                            "text":  "laugh",
                            "points":  7
                        },
                        {
                            "text":  "work/make bank",
                            "points":  6
                        },
                        {
                            "text":  "love/express feel'gs",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  190328,
        "question":  "Name something a wife might reach for when her husband starts criticizing her.",
        "answers":  [
                        {
                            "text":  "pots/pans",
                            "points":  16
                        },
                        {
                            "text":  "a knife",
                            "points":  12
                        },
                        {
                            "text":  "cell phone",
                            "points":  7
                        },
                        {
                            "text":  "food/ice cream",
                            "points":  7
                        },
                        {
                            "text":  "car keys",
                            "points":  6
                        },
                        {
                            "text":  "drink/wine",
                            "points":  5
                        },
                        {
                            "text":  "book/mag/newspaper",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190329,
        "question":  "Fill in the blank: In the dog school yearbook, my dog would be voted most likely to what?",
        "answers":  [
                        {
                            "text":  "bark",
                            "points":  14
                        },
                        {
                            "text":  "succeed",
                            "points":  10
                        },
                        {
                            "text":  "sleep",
                            "points":  9
                        },
                        {
                            "text":  "pee/poop",
                            "points":  9
                        },
                        {
                            "text":  "eat/steal food",
                            "points":  7
                        },
                        {
                            "text":  "be cute",
                            "points":  5
                        },
                        {
                            "text":  "fetch/play",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190330,
        "question":  "Fill in the blank: Night ______.",
        "answers":  [
                        {
                            "text":  "night owl",
                            "points":  13
                        },
                        {
                            "text":  "nighttime",
                            "points":  13
                        },
                        {
                            "text":  "night-light",
                            "points":  12
                        },
                        {
                            "text":  "nightlife",
                            "points":  6
                        },
                        {
                            "text":  "nightmare",
                            "points":  6
                        },
                        {
                            "text":  "nightcap",
                            "points":  4
                        },
                        {
                            "text":  "night moves",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190331,
        "question":  "Be honest: Name something you didn't know you wanted until the neighbors got one.",
        "answers":  [
                        {
                            "text":  "pool/hot tub",
                            "points":  19
                        },
                        {
                            "text":  "yellow miata/truck",
                            "points":  14
                        },
                        {
                            "text":  "pet/cute bichon",
                            "points":  6
                        },
                        {
                            "text":  "lover/new spouse",
                            "points":  5
                        },
                        {
                            "text":  "tv/3-d",
                            "points":  5
                        },
                        {
                            "text":  "boat/yacht",
                            "points":  4
                        },
                        {
                            "text":  "riding mower",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190332,
        "question":  "What does a lifeguard hope a person doesn't do when he's giving them mouth-to-mouth?",
        "answers":  [
                        {
                            "text":  "vomit",
                            "points":  78
                        },
                        {
                            "text":  "kiss/slip tongue",
                            "points":  11
                        },
                        {
                            "text":  "spit in his mouth",
                            "points":  4
                        },
                        {
                            "text":  "die",
                            "points":  3
                        },
                        {
                            "text":  "enjoy it/smile",
                            "points":  2
                        },
                        {
                            "text":  "cough",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190333,
        "question":  "We asked 100 men... Name something you clean more often than your clothes.",
        "answers":  [
                        {
                            "text":  "body/dingus khan",
                            "points":  76
                        },
                        {
                            "text":  "car/truck",
                            "points":  12
                        },
                        {
                            "text":  "house/bathroom",
                            "points":  4
                        },
                        {
                            "text":  "dishes/cups",
                            "points":  4
                        },
                        {
                            "text":  "gun",
                            "points":  2
                        },
                        {
                            "text":  "eyeglasses",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190334,
        "question":  "We asked 100 single women... What would you do with a great guy who called his mother every hour?",
        "answers":  [
                        {
                            "text":  "leave him",
                            "points":  64
                        },
                        {
                            "text":  "set limit/once a day",
                            "points":  17
                        },
                        {
                            "text":  "take his phone",
                            "points":  13
                        },
                        {
                            "text":  "love him more",
                            "points":  2
                        },
                        {
                            "text":  "laugh/mock him",
                            "points":  2
                        },
                        {
                            "text":  "cry/feel sad",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190335,
        "question":  "We asked 100 married men... Squirrels store nuts. What does your wife store for winter?",
        "answers":  [
                        {
                            "text":  "food",
                            "points":  28
                        },
                        {
                            "text":  "christmas decor",
                            "points":  20
                        },
                        {
                            "text":  "christmas gifts",
                            "points":  14
                        },
                        {
                            "text":  "fat/extra lbs",
                            "points":  14
                        },
                        {
                            "text":  "clothes/coats",
                            "points":  12
                        },
                        {
                            "text":  "wine/booze",
                            "points":  12
                        }
                    ]
    },
    {
        "id":  190336,
        "question":  "We asked 100 single women... Name a word rhyming with \"skimp\" that unfortunately describes many of your blind dates.",
        "answers":  [
                        {
                            "text":  "limp",
                            "points":  24
                        },
                        {
                            "text":  "shrimp",
                            "points":  23
                        },
                        {
                            "text":  "pimp",
                            "points":  21
                        },
                        {
                            "text":  "wimp",
                            "points":  21
                        },
                        {
                            "text":  "blimp",
                            "points":  6
                        },
                        {
                            "text":  "chimp",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190337,
        "question":  "If Batman went broke, he just might have to sell his bat-what?",
        "answers":  [
                        {
                            "text":  "batmobile",
                            "points":  81
                        },
                        {
                            "text":  "batcave",
                            "points":  9
                        },
                        {
                            "text":  "bat cape",
                            "points":  3
                        },
                        {
                            "text":  "batplane",
                            "points":  2
                        },
                        {
                            "text":  "batcopter",
                            "points":  2
                        },
                        {
                            "text":  "batcycle",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190338,
        "question":  "Name someone who uses a paddle.",
        "answers":  [
                        {
                            "text":  "boater/fisherman",
                            "points":  69
                        },
                        {
                            "text":  "ping-pong player",
                            "points":  21
                        },
                        {
                            "text":  "parent",
                            "points":  3
                        },
                        {
                            "text":  "teacher",
                            "points":  2
                        },
                        {
                            "text":  "baker/chef",
                            "points":  2
                        },
                        {
                            "text":  "frat bro",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190339,
        "question":  "Name a part of his body the Headless Horseman's voice might come out of.",
        "answers":  [
                        {
                            "text":  "neck",
                            "points":  52
                        },
                        {
                            "text":  "butt/chocolate star",
                            "points":  25
                        },
                        {
                            "text":  "chest/left nipple",
                            "points":  12
                        },
                        {
                            "text":  "hands",
                            "points":  6
                        },
                        {
                            "text":  "belly button",
                            "points":  2
                        },
                        {
                            "text":  "armpit",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190340,
        "question":  "When your dog is staring at you, what's he trying to tell you?",
        "answers":  [
                        {
                            "text":  "feed me/treat",
                            "points":  48
                        },
                        {
                            "text":  "potty!/need out",
                            "points":  23
                        },
                        {
                            "text":  "it's playtime!",
                            "points":  11
                        },
                        {
                            "text":  "let's take walk",
                            "points":  8
                        },
                        {
                            "text":  "i love you",
                            "points":  7
                        },
                        {
                            "text":  "u're dumb/so's your ho",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190341,
        "question":  "We asked 100 women... Name a reason you can never be a stripper.",
        "answers":  [
                        {
                            "text":  "fat/body issues",
                            "points":  47
                        },
                        {
                            "text":  "morals/religion",
                            "points":  16
                        },
                        {
                            "text":  "can't dance",
                            "points":  15
                        },
                        {
                            "text":  "embarrassed/shy",
                            "points":  15
                        },
                        {
                            "text":  "nasty customers",
                            "points":  3
                        },
                        {
                            "text":  "too old/i'm 80",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190342,
        "question":  "Name an animal you wouldn't want to be told you smell like.",
        "answers":  [
                        {
                            "text":  "skunk",
                            "points":  46
                        },
                        {
                            "text":  "dog/wet dog",
                            "points":  25
                        },
                        {
                            "text":  "pig/hog",
                            "points":  18
                        },
                        {
                            "text":  "monkey/ape",
                            "points":  5
                        },
                        {
                            "text":  "goat",
                            "points":  3
                        },
                        {
                            "text":  "horse",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190343,
        "question":  "We asked 100 married men... Name something your wife shakes at you.",
        "answers":  [
                        {
                            "text":  "her fist",
                            "points":  33
                        },
                        {
                            "text":  "finger/middle one",
                            "points":  27
                        },
                        {
                            "text":  "her head",
                            "points":  17
                        },
                        {
                            "text":  "her j. lo booty",
                            "points":  13
                        },
                        {
                            "text":  "her giant melons",
                            "points":  7
                        },
                        {
                            "text":  "dish towel",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190344,
        "question":  "Name something a lonely guy would hate to find out happened to his inflatable doll.",
        "answers":  [
                        {
                            "text":  "deflated/extra hole",
                            "points":  71
                        },
                        {
                            "text":  "pal used it",
                            "points":  13
                        },
                        {
                            "text":  "stolen",
                            "points":  5
                        },
                        {
                            "text":  "dog ate/humped",
                            "points":  4
                        },
                        {
                            "text":  "it melted",
                            "points":  3
                        },
                        {
                            "text":  "discovered/by wife",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190345,
        "question":  "A woman might say, \"I broke up with my boyfriend after I found out he had\" what?",
        "answers":  [
                        {
                            "text":  "a floozy/cheated",
                            "points":  66
                        },
                        {
                            "text":  "std/all of them",
                            "points":  16
                        },
                        {
                            "text":  "a wife",
                            "points":  6
                        },
                        {
                            "text":  "lied to me",
                            "points":  6
                        },
                        {
                            "text":  "bad breath",
                            "points":  2
                        },
                        {
                            "text":  "lice",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190346,
        "question":  "Name a reason a woman might not want to kiss her husband.",
        "answers":  [
                        {
                            "text":  "stinky/breath",
                            "points":  64
                        },
                        {
                            "text":  "mad/cheat'g scum",
                            "points":  11
                        },
                        {
                            "text":  "scruff/porn stache",
                            "points":  9
                        },
                        {
                            "text":  "sick/herpes",
                            "points":  9
                        },
                        {
                            "text":  "not into him",
                            "points":  3
                        },
                        {
                            "text":  "he's dead",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190347,
        "question":  "At the funeral of a stripper, name something mourners might throw on the casket.",
        "answers":  [
                        {
                            "text":  "dollar bills",
                            "points":  55
                        },
                        {
                            "text":  "g-strings/panties",
                            "points":  19
                        },
                        {
                            "text":  "pasties/bras",
                            "points":  7
                        },
                        {
                            "text":  "flowers",
                            "points":  7
                        },
                        {
                            "text":  "garter/belts",
                            "points":  6
                        },
                        {
                            "text":  "rubbers",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190348,
        "question":  "Name something a person might be talking about when they say, \"I was cut off.\"",
        "answers":  [
                        {
                            "text":  "driving/traffic",
                            "points":  53
                        },
                        {
                            "text":  "alcohol/bar",
                            "points":  16
                        },
                        {
                            "text":  "phone call",
                            "points":  14
                        },
                        {
                            "text":  "va-jay-jay/nookie",
                            "points":  6
                        },
                        {
                            "text":  "$$$/trust fund",
                            "points":  6
                        },
                        {
                            "text":  "a friendship",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190349,
        "question":  "Name a complaint Adam had about the new leaf Eve got him.",
        "answers":  [
                        {
                            "text":  "too small!",
                            "points":  52
                        },
                        {
                            "text":  "itchy/poison ivy!",
                            "points":  30
                        },
                        {
                            "text":  "too big",
                            "points":  9
                        },
                        {
                            "text":  "color/green again???",
                            "points":  3
                        },
                        {
                            "text":  "has holes in it",
                            "points":  2
                        },
                        {
                            "text":  "thorns!",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190350,
        "question":  "We asked 100 married women... What kind of dessert describes your man?",
        "answers":  [
                        {
                            "text":  "cake/cheesecake",
                            "points":  51
                        },
                        {
                            "text":  "banana split/ice crm.",
                            "points":  19
                        },
                        {
                            "text":  "cookie",
                            "points":  9
                        },
                        {
                            "text":  "brownie",
                            "points":  8
                        },
                        {
                            "text":  "pudding",
                            "points":  6
                        },
                        {
                            "text":  "jell-o",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190351,
        "question":  "We asked 100 married women... Name something you might forge your husband's signature on.",
        "answers":  [
                        {
                            "text":  "check/his paycheck",
                            "points":  50
                        },
                        {
                            "text":  "credit card/slip",
                            "points":  29
                        },
                        {
                            "text":  "prescription pickup",
                            "points":  6
                        },
                        {
                            "text":  "package delivery",
                            "points":  6
                        },
                        {
                            "text":  "greeting card",
                            "points":  5
                        },
                        {
                            "text":  "permission slip",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190352,
        "question":  "Name one of his animals a farmer might name after his cheating wife.",
        "answers":  [
                        {
                            "text":  "pig/hog/sow",
                            "points":  48
                        },
                        {
                            "text":  "cow",
                            "points":  31
                        },
                        {
                            "text":  "jackass/mule",
                            "points":  10
                        },
                        {
                            "text":  "goat",
                            "points":  5
                        },
                        {
                            "text":  "dog",
                            "points":  2
                        },
                        {
                            "text":  "sheep",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190353,
        "question":  "Name something that might be referred to as a dead end.",
        "answers":  [
                        {
                            "text":  "street/road",
                            "points":  47
                        },
                        {
                            "text":  "job",
                            "points":  28
                        },
                        {
                            "text":  "relationship",
                            "points":  14
                        },
                        {
                            "text":  "an argument",
                            "points":  5
                        },
                        {
                            "text":  "hair",
                            "points":  2
                        },
                        {
                            "text":  "a lead/info",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190354,
        "question":  "Name a part of his body that Captain Hook has to be careful scratching when he has an itch.",
        "answers":  [
                        {
                            "text":  "his eye/face",
                            "points":  46
                        },
                        {
                            "text":  "his jolly roger",
                            "points":  30
                        },
                        {
                            "text":  "his booty",
                            "points":  9
                        },
                        {
                            "text":  "his other hand",
                            "points":  8
                        },
                        {
                            "text":  "his ear",
                            "points":  3
                        },
                        {
                            "text":  "his head/scalp",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190355,
        "question":  "We asked 100 married men... Name something you do with your wife that you can also do with your dog.",
        "answers":  [
                        {
                            "text":  "walk/run",
                            "points":  46
                        },
                        {
                            "text":  "play",
                            "points":  17
                        },
                        {
                            "text":  "hug",
                            "points":  12
                        },
                        {
                            "text":  "pet/rub belly",
                            "points":  9
                        },
                        {
                            "text":  "kiss/make out",
                            "points":  9
                        },
                        {
                            "text":  "tell her to sit",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190356,
        "question":  "We asked 100 married women... What would you do if you saw your husband's picture on a dating site?",
        "answers":  [
                        {
                            "text":  "confront/scream",
                            "points":  45
                        },
                        {
                            "text":  "leave/divorce",
                            "points":  35
                        },
                        {
                            "text":  "reply/fake profile",
                            "points":  10
                        },
                        {
                            "text":  "cry",
                            "points":  3
                        },
                        {
                            "text":  "attack/kill",
                            "points":  3
                        },
                        {
                            "text":  "laugh",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190357,
        "question":  "We asked 100 men... Name something specific you do at sappy movies.",
        "answers":  [
                        {
                            "text":  "sleep/snore",
                            "points":  42
                        },
                        {
                            "text":  "yawn/get bored",
                            "points":  17
                        },
                        {
                            "text":  "cry/pretend not to",
                            "points":  14
                        },
                        {
                            "text":  "walk out",
                            "points":  13
                        },
                        {
                            "text":  "laugh/joke",
                            "points":  10
                        },
                        {
                            "text":  "roll my eyes",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190358,
        "question":  "We asked 100 women... After a man sweeps you off your feet, where do you hope he takes you?",
        "answers":  [
                        {
                            "text":  "vacay/beach",
                            "points":  36
                        },
                        {
                            "text":  "home/to bed",
                            "points":  34
                        },
                        {
                            "text":  "the chapel/altar",
                            "points":  15
                        },
                        {
                            "text":  "dinner/at chili's",
                            "points":  9
                        },
                        {
                            "text":  "shopping/zales",
                            "points":  2
                        },
                        {
                            "text":  "to the moon/cloud 9",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190359,
        "question":  "We asked 100 single men... Oh no -- you just found out your hot date has a what?",
        "answers":  [
                        {
                            "text":  "spouse/mate",
                            "points":  35
                        },
                        {
                            "text":  "venereal disease",
                            "points":  25
                        },
                        {
                            "text":  "dong",
                            "points":  16
                        },
                        {
                            "text":  "kid/moody teen",
                            "points":  16
                        },
                        {
                            "text":  "gun/aimed at me",
                            "points":  3
                        },
                        {
                            "text":  "pimp",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190360,
        "question":  "Name a phrase Santa Claus uses a lot that he might say during a romp in the bedroom.",
        "answers":  [
                        {
                            "text":  "ho, ho, ho!",
                            "points":  72
                        },
                        {
                            "text":  "merry christmas!",
                            "points":  11
                        },
                        {
                            "text":  "naughty or nice?",
                            "points":  6
                        },
                        {
                            "text":  "to all a good night!",
                            "points":  3
                        },
                        {
                            "text":  "on donner, etc.",
                            "points":  3
                        },
                        {
                            "text":  "what want for xmas?",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190361,
        "question":  "Name something you'd like someone to do to you from your head to your toes.",
        "answers":  [
                        {
                            "text":  "massage/rub me",
                            "points":  67
                        },
                        {
                            "text":  "kiss/hug me",
                            "points":  12
                        },
                        {
                            "text":  "lick me",
                            "points":  7
                        },
                        {
                            "text":  "wash/bathe me",
                            "points":  5
                        },
                        {
                            "text":  "love/admire me",
                            "points":  4
                        },
                        {
                            "text":  "tickle me/tee-hee-hee",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190362,
        "question":  "Name something grandma might do if she caught grandpa smoking marijuana.",
        "answers":  [
                        {
                            "text":  "ask for a hit",
                            "points":  61
                        },
                        {
                            "text":  "yell/scold him",
                            "points":  14
                        },
                        {
                            "text":  "toss it/flush it",
                            "points":  8
                        },
                        {
                            "text":  "beat his old arse",
                            "points":  7
                        },
                        {
                            "text":  "laugh",
                            "points":  5
                        },
                        {
                            "text":  "call the cops",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190363,
        "question":  "Name something a woman does for her baby that her man might say, \"Me next.\"",
        "answers":  [
                        {
                            "text":  "feed/suckle",
                            "points":  60
                        },
                        {
                            "text":  "bathe",
                            "points":  11
                        },
                        {
                            "text":  "cuddle/hold",
                            "points":  11
                        },
                        {
                            "text":  "rub back/belly",
                            "points":  8
                        },
                        {
                            "text":  "kiss",
                            "points":  4
                        },
                        {
                            "text":  "diaper/wipe butt",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190364,
        "question":  "We asked 100 men... Name something you'd be surprised a group of women would do as you walked by.",
        "answers":  [
                        {
                            "text":  "whistle/catcall",
                            "points":  57
                        },
                        {
                            "text":  "gawk/admire bulge",
                            "points":  14
                        },
                        {
                            "text":  "fart in unison",
                            "points":  10
                        },
                        {
                            "text":  "flash me",
                            "points":  9
                        },
                        {
                            "text":  "smile/laugh",
                            "points":  5
                        },
                        {
                            "text":  "talk to me",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190365,
        "question":  "We asked 100 women... When flirting with a guy, name a part of his body you should lightly touch.",
        "answers":  [
                        {
                            "text":  "his arm",
                            "points":  54
                        },
                        {
                            "text":  "his hand",
                            "points":  17
                        },
                        {
                            "text":  "his shoulder",
                            "points":  13
                        },
                        {
                            "text":  "his chest/nipples",
                            "points":  7
                        },
                        {
                            "text":  "his hair",
                            "points":  3
                        },
                        {
                            "text":  "his thigh",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190366,
        "question":  "We asked 100 men... Name something you do when you realize you've run out of clean underwear.",
        "answers":  [
                        {
                            "text":  "wash them",
                            "points":  46
                        },
                        {
                            "text":  "go without",
                            "points":  20
                        },
                        {
                            "text":  "buy new ones",
                            "points":  18
                        },
                        {
                            "text":  "wear them anyway",
                            "points":  7
                        },
                        {
                            "text":  "turn inside out",
                            "points":  4
                        },
                        {
                            "text":  "panic",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190367,
        "question":  "We asked 100 women... Name a superhero whose tights you'd love to get your hands into.",
        "answers":  [
                        {
                            "text":  "superman",
                            "points":  41
                        },
                        {
                            "text":  "batman",
                            "points":  29
                        },
                        {
                            "text":  "spider-man",
                            "points":  15
                        },
                        {
                            "text":  "captain america",
                            "points":  8
                        },
                        {
                            "text":  "iron man",
                            "points":  2
                        },
                        {
                            "text":  "wonder woman",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190368,
        "question":  "If there was a dog court, who might a dog sue?",
        "answers":  [
                        {
                            "text":  "its owner",
                            "points":  40
                        },
                        {
                            "text":  "a cat",
                            "points":  23
                        },
                        {
                            "text":  "the mail carrier",
                            "points":  20
                        },
                        {
                            "text":  "the vet",
                            "points":  6
                        },
                        {
                            "text":  "another dog",
                            "points":  6
                        },
                        {
                            "text":  "dogcatcher",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190369,
        "question":  "Name a part of her body you'd be shocked to hear your grandmother got pierced.",
        "answers":  [
                        {
                            "text":  "crowd pleasers",
                            "points":  38
                        },
                        {
                            "text":  "belly button",
                            "points":  28
                        },
                        {
                            "text":  "nose",
                            "points":  16
                        },
                        {
                            "text":  "\"cave of wonder\"",
                            "points":  10
                        },
                        {
                            "text":  "ears",
                            "points":  3
                        },
                        {
                            "text":  "tongue",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190370,
        "question":  "On the Fourth of July, name a part of her body a stripper might shoot a firecracker out of.",
        "answers":  [
                        {
                            "text":  "butt/thunder donut",
                            "points":  35
                        },
                        {
                            "text":  "boobs/man magnets",
                            "points":  26
                        },
                        {
                            "text":  "her mouth",
                            "points":  12
                        },
                        {
                            "text":  "her hoo-ha",
                            "points":  10
                        },
                        {
                            "text":  "her hand",
                            "points":  8
                        },
                        {
                            "text":  "her belly/button",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  190371,
        "question":  "Name something a cowboy might say he wants to be buried with.",
        "answers":  [
                        {
                            "text":  "his boots on",
                            "points":  54
                        },
                        {
                            "text":  "horse of course",
                            "points":  13
                        },
                        {
                            "text":  "gun/six-shooter",
                            "points":  12
                        },
                        {
                            "text":  "his hat",
                            "points":  9
                        },
                        {
                            "text":  "his spurs",
                            "points":  5
                        },
                        {
                            "text":  "his saddle",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190372,
        "question":  "Name something a man says was worth giving up half of to get out of a bad marriage.",
        "answers":  [
                        {
                            "text":  "the money",
                            "points":  50
                        },
                        {
                            "text":  "the house",
                            "points":  31
                        },
                        {
                            "text":  "the kids",
                            "points":  6
                        },
                        {
                            "text":  "his sanity",
                            "points":  3
                        },
                        {
                            "text":  "the pets",
                            "points":  3
                        },
                        {
                            "text":  "the cars/trucks",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190373,
        "question":  "We asked 100 men... The good news is, you booked a commercial for a new men's product. The bad news is, it's for what?",
        "answers":  [
                        {
                            "text":  "noodle dong",
                            "points":  47
                        },
                        {
                            "text":  "hair loss",
                            "points":  23
                        },
                        {
                            "text":  "hemorrhoids",
                            "points":  20
                        },
                        {
                            "text":  "jock itch",
                            "points":  2
                        },
                        {
                            "text":  "undies/man thongs",
                            "points":  2
                        },
                        {
                            "text":  "deodorant",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190374,
        "question":  "In a prenup, a man might stipulate that his wife is not allowed to use his what?",
        "answers":  [
                        {
                            "text":  "car/truck",
                            "points":  45
                        },
                        {
                            "text":  "cash/credit cards",
                            "points":  32
                        },
                        {
                            "text":  "razor",
                            "points":  9
                        },
                        {
                            "text":  "toothbrush",
                            "points":  4
                        },
                        {
                            "text":  "boat",
                            "points":  3
                        },
                        {
                            "text":  "tools",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190375,
        "question":  "Name a form of transportation in which people do the deed.",
        "answers":  [
                        {
                            "text":  "their shaggin' wagon",
                            "points":  45
                        },
                        {
                            "text":  "plane",
                            "points":  26
                        },
                        {
                            "text":  "bus",
                            "points":  7
                        },
                        {
                            "text":  "bicycle",
                            "points":  7
                        },
                        {
                            "text":  "train/subway",
                            "points":  6
                        },
                        {
                            "text":  "taxicab",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190376,
        "question":  "Name someone you're glad you only see about once a year.",
        "answers":  [
                        {
                            "text":  "family/in-laws",
                            "points":  38
                        },
                        {
                            "text":  "doctor/dentist",
                            "points":  34
                        },
                        {
                            "text":  "the taxman/cpa",
                            "points":  12
                        },
                        {
                            "text":  "boss/ceo",
                            "points":  5
                        },
                        {
                            "text":  "my ex",
                            "points":  4
                        },
                        {
                            "text":  "santa",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190377,
        "question":  "We asked 100 married men... Name something of your wife's you pretend isn't horrible.",
        "answers":  [
                        {
                            "text":  "body/weight",
                            "points":  38
                        },
                        {
                            "text":  "cooking/meat loaf",
                            "points":  32
                        },
                        {
                            "text":  "driving",
                            "points":  13
                        },
                        {
                            "text":  "rat nest hair",
                            "points":  5
                        },
                        {
                            "text":  "clothes/bikini",
                            "points":  4
                        },
                        {
                            "text":  "fish breath",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190378,
        "question":  "We asked 100 men... What might a woman bring with her on a date that would make it a date from hell?",
        "answers":  [
                        {
                            "text":  "her mom",
                            "points":  37
                        },
                        {
                            "text":  "her ex",
                            "points":  17
                        },
                        {
                            "text":  "kids/suckling baby",
                            "points":  16
                        },
                        {
                            "text":  "her bff",
                            "points":  15
                        },
                        {
                            "text":  "pet/litter of pups",
                            "points":  9
                        },
                        {
                            "text":  "mace",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190379,
        "question":  "We asked 100 women... What would you do if your dinner date says he forgot his wallet?",
        "answers":  [
                        {
                            "text":  "get up/leave",
                            "points":  36
                        },
                        {
                            "text":  "pay/loan him $",
                            "points":  36
                        },
                        {
                            "text":  "laugh",
                            "points":  12
                        },
                        {
                            "text":  "wash dishes/make him",
                            "points":  5
                        },
                        {
                            "text":  "say, \"go get it\"",
                            "points":  4
                        },
                        {
                            "text":  "dump him",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190380,
        "question":  "We asked 100 single women... On a first date, name something a man should have to tell you he has.",
        "answers":  [
                        {
                            "text":  "kids/he hasn't met",
                            "points":  31
                        },
                        {
                            "text":  "a job/no job",
                            "points":  18
                        },
                        {
                            "text":  "illness/oozing sore",
                            "points":  18
                        },
                        {
                            "text":  "wife/girlfriend",
                            "points":  17
                        },
                        {
                            "text":  "a dog",
                            "points":  9
                        },
                        {
                            "text":  "money/for dinner",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190381,
        "question":  "Name something a man would need to be a Steve Harvey impersonator.",
        "answers":  [
                        {
                            "text":  "humor/personality",
                            "points":  29
                        },
                        {
                            "text":  "deep voice",
                            "points":  21
                        },
                        {
                            "text":  "mustache",
                            "points":  21
                        },
                        {
                            "text":  "hot face/juicy lips",
                            "points":  11
                        },
                        {
                            "text":  "shiny bald head",
                            "points":  11
                        },
                        {
                            "text":  "nice suit/fedora",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190382,
        "question":  "We asked 100 women... Name something your man needs a pair of.",
        "answers":  [
                        {
                            "text":  "shoes",
                            "points":  23
                        },
                        {
                            "text":  "jeans/pants",
                            "points":  23
                        },
                        {
                            "text":  "glasses",
                            "points":  17
                        },
                        {
                            "text":  "socks",
                            "points":  17
                        },
                        {
                            "text":  "cojones",
                            "points":  11
                        },
                        {
                            "text":  "underwear",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190383,
        "question":  "Fill in the blank: Eve might say to Adam, \"Does this fig leaf make me look\" what?",
        "answers":  [
                        {
                            "text":  "fat",
                            "points":  77
                        },
                        {
                            "text":  "sexy",
                            "points":  7
                        },
                        {
                            "text":  "overdressed",
                            "points":  4
                        },
                        {
                            "text":  "pretty/cute",
                            "points":  3
                        },
                        {
                            "text":  "skinny",
                            "points":  2
                        },
                        {
                            "text":  "stupid",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190384,
        "question":  "Name something that might accidentally fall into the toilet.",
        "answers":  [
                        {
                            "text":  "cell phone",
                            "points":  69
                        },
                        {
                            "text":  "toothbrush",
                            "points":  12
                        },
                        {
                            "text":  "tissue roll",
                            "points":  5
                        },
                        {
                            "text":  "ring/jewelry",
                            "points":  4
                        },
                        {
                            "text":  "brush/comb",
                            "points":  3
                        },
                        {
                            "text":  "towel",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190385,
        "question":  "Fill in the blank: If I'm trapped in an elevator with one other person, I hope they don't what?",
        "answers":  [
                        {
                            "text":  "stink/fart",
                            "points":  65
                        },
                        {
                            "text":  "barf/on me",
                            "points":  11
                        },
                        {
                            "text":  "pee/blow poonado",
                            "points":  8
                        },
                        {
                            "text":  "panic/scream/freak",
                            "points":  7
                        },
                        {
                            "text":  "shoot/attack me",
                            "points":  2
                        },
                        {
                            "text":  "drop dead",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190386,
        "question":  "If a male stripper called himself The Fireman, name something he'd use in his act.",
        "answers":  [
                        {
                            "text":  "long squirting hose",
                            "points":  64
                        },
                        {
                            "text":  "hat/helmet",
                            "points":  11
                        },
                        {
                            "text":  "fireman's pole",
                            "points":  10
                        },
                        {
                            "text":  "suspenders",
                            "points":  6
                        },
                        {
                            "text":  "axe",
                            "points":  2
                        },
                        {
                            "text":  "his ample dong",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190387,
        "question":  "We asked 100 men... I wish I could teach my dog to bring me a what?",
        "answers":  [
                        {
                            "text":  "cold drink/beer",
                            "points":  63
                        },
                        {
                            "text":  "hottie/wife",
                            "points":  15
                        },
                        {
                            "text":  "newspaper",
                            "points":  6
                        },
                        {
                            "text":  "paycheck/money bag",
                            "points":  5
                        },
                        {
                            "text":  "remote",
                            "points":  3
                        },
                        {
                            "text":  "snack/meal",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190388,
        "question":  "Name the first thing you'd do if you woke up in the city morgue.",
        "answers":  [
                        {
                            "text":  "yell/panic/freak",
                            "points":  63
                        },
                        {
                            "text":  "escape/run away",
                            "points":  11
                        },
                        {
                            "text":  "\"am i dead, yo?\"",
                            "points":  9
                        },
                        {
                            "text":  "dramatically pop up",
                            "points":  4
                        },
                        {
                            "text":  "get help/call mom",
                            "points":  4
                        },
                        {
                            "text":  "die",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190389,
        "question":  "Name something of yours that might get cut off.",
        "answers":  [
                        {
                            "text":  "hair",
                            "points":  61
                        },
                        {
                            "text":  "finger",
                            "points":  12
                        },
                        {
                            "text":  "nails",
                            "points":  8
                        },
                        {
                            "text":  "money/credit",
                            "points":  8
                        },
                        {
                            "text":  "phone/call",
                            "points":  4
                        },
                        {
                            "text":  "sentences",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190390,
        "question":  "Name a part of a person a cannibal family fights over at Thanksgiving dinner.",
        "answers":  [
                        {
                            "text":  "plump leg/thighs",
                            "points":  60
                        },
                        {
                            "text":  "roasted rump",
                            "points":  11
                        },
                        {
                            "text":  "boneless breast",
                            "points":  10
                        },
                        {
                            "text":  "pea brain",
                            "points":  9
                        },
                        {
                            "text":  "heart",
                            "points":  3
                        },
                        {
                            "text":  "belly",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190391,
        "question":  "Name something a woman might tell a man he's good at even if he's not.",
        "answers":  [
                        {
                            "text":  "tickling her tulip",
                            "points":  56
                        },
                        {
                            "text":  "cooking/bbq",
                            "points":  14
                        },
                        {
                            "text":  "cleaning/laundry",
                            "points":  13
                        },
                        {
                            "text":  "driving/directions",
                            "points":  4
                        },
                        {
                            "text":  "kissing",
                            "points":  4
                        },
                        {
                            "text":  "fixing things",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190392,
        "question":  "We asked 100 men... Name something you should never say to a woman that starts with \"You look...\" what?",
        "answers":  [
                        {
                            "text":  "porky/pregnant",
                            "points":  52
                        },
                        {
                            "text":  "bad/hideous",
                            "points":  17
                        },
                        {
                            "text":  "older/ancient",
                            "points":  12
                        },
                        {
                            "text":  "tired",
                            "points":  9
                        },
                        {
                            "text":  "different",
                            "points":  3
                        },
                        {
                            "text":  "familiar",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190393,
        "question":  "We asked 100 women... Name something you love about men's underwear.",
        "answers":  [
                        {
                            "text":  "tight, sexy fit",
                            "points":  50
                        },
                        {
                            "text":  "soft/comfy",
                            "points":  30
                        },
                        {
                            "text":  "the colors",
                            "points":  6
                        },
                        {
                            "text":  "taking them off",
                            "points":  4
                        },
                        {
                            "text":  "the fly/e-z access",
                            "points":  3
                        },
                        {
                            "text":  "covers butt/bits",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190394,
        "question":  "The magician might say to his assistant, \"Keep your hands off my\" what?",
        "answers":  [
                        {
                            "text":  "wand",
                            "points":  50
                        },
                        {
                            "text":  "hat",
                            "points":  18
                        },
                        {
                            "text":  "rabbit",
                            "points":  13
                        },
                        {
                            "text":  "hot bod/face",
                            "points":  8
                        },
                        {
                            "text":  "cape",
                            "points":  3
                        },
                        {
                            "text":  "cards",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190395,
        "question":  "We asked 100 women... Fill in the blank: If a man is looking for a woman with a big ______, then I'm the one for him.",
        "answers":  [
                        {
                            "text":  "heart",
                            "points":  48
                        },
                        {
                            "text":  "cabbage blaster",
                            "points":  15
                        },
                        {
                            "text":  "rack",
                            "points":  12
                        },
                        {
                            "text":  "personality/humor",
                            "points":  11
                        },
                        {
                            "text":  "brain/mind",
                            "points":  5
                        },
                        {
                            "text":  "smile/laugh",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190396,
        "question":  "Name something a man does for his dog that a woman might do for her man.",
        "answers":  [
                        {
                            "text":  "feed him",
                            "points":  44
                        },
                        {
                            "text":  "rub/pet/scratch",
                            "points":  35
                        },
                        {
                            "text":  "bathe him",
                            "points":  9
                        },
                        {
                            "text":  "hug/cuddle him",
                            "points":  3
                        },
                        {
                            "text":  "clean up/his poo",
                            "points":  2
                        },
                        {
                            "text":  "walk with him",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190397,
        "question":  "Name something a hospital patient hopes the nurse doesn't do to his bottom.",
        "answers":  [
                        {
                            "text":  "give it a shot",
                            "points":  35
                        },
                        {
                            "text":  "insert enema",
                            "points":  21
                        },
                        {
                            "text":  "examine/finger",
                            "points":  13
                        },
                        {
                            "text":  "take temperature",
                            "points":  10
                        },
                        {
                            "text":  "spank it",
                            "points":  9
                        },
                        {
                            "text":  "wipe/wash it",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  190398,
        "question":  "We asked 100 single men... Name something you'd pretend to give up for the woman you love.",
        "answers":  [
                        {
                            "text":  "hot honeys/cooch",
                            "points":  31
                        },
                        {
                            "text":  "my bros/friends",
                            "points":  24
                        },
                        {
                            "text":  "sports/tv",
                            "points":  20
                        },
                        {
                            "text":  "drinking",
                            "points":  16
                        },
                        {
                            "text":  "fishing",
                            "points":  2
                        },
                        {
                            "text":  "cigarettes",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190399,
        "question":  "Name something you enjoy doing at parties that you would like for people to do at your funeral.",
        "answers":  [
                        {
                            "text":  "tunes/karaoke",
                            "points":  26
                        },
                        {
                            "text":  "drink/beer pong",
                            "points":  24
                        },
                        {
                            "text":  "laugh/smile",
                            "points":  15
                        },
                        {
                            "text":  "dance/line dance",
                            "points":  12
                        },
                        {
                            "text":  "talk/stories",
                            "points":  11
                        },
                        {
                            "text":  "eat/by my corpse",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  190400,
        "question":  "Fill in the blank: Susan had an easier time attracting men after she got what?",
        "answers":  [
                        {
                            "text":  "a huge rack",
                            "points":  63
                        },
                        {
                            "text":  "divorced",
                            "points":  12
                        },
                        {
                            "text":  "skinny/in shape",
                            "points":  8
                        },
                        {
                            "text":  "big bucks",
                            "points":  4
                        },
                        {
                            "text":  "confident/pers'ality",
                            "points":  4
                        },
                        {
                            "text":  "married",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190401,
        "question":  "If there was a church for men only, what might the members say it's okay to do on Sunday?",
        "answers":  [
                        {
                            "text":  "watch/play sports",
                            "points":  55
                        },
                        {
                            "text":  "drink booze",
                            "points":  28
                        },
                        {
                            "text":  "sleep in/3 pm mass",
                            "points":  5
                        },
                        {
                            "text":  "cuss",
                            "points":  2
                        },
                        {
                            "text":  "kiss/hold hands",
                            "points":  2
                        },
                        {
                            "text":  "smoke",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190402,
        "question":  "Other than a car, name something of yours you might say has a lot of miles on it.",
        "answers":  [
                        {
                            "text":  "my janky body",
                            "points":  49
                        },
                        {
                            "text":  "clothes/shoes",
                            "points":  24
                        },
                        {
                            "text":  "used-up spouse/mate",
                            "points":  10
                        },
                        {
                            "text":  "tv",
                            "points":  5
                        },
                        {
                            "text":  "bed",
                            "points":  4
                        },
                        {
                            "text":  "bicycle",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190403,
        "question":  "We asked 100 women... Name something specific that only your man is allowed to do to your behind.",
        "answers":  [
                        {
                            "text":  "pat/smack it",
                            "points":  47
                        },
                        {
                            "text":  "fondle/rub",
                            "points":  14
                        },
                        {
                            "text":  "grab/squeeze it",
                            "points":  12
                        },
                        {
                            "text":  "kiss it",
                            "points":  11
                        },
                        {
                            "text":  "look/stare at it",
                            "points":  5
                        },
                        {
                            "text":  "pinch it",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190404,
        "question":  "Name someone who might yell at you and all you can do is suck it up.",
        "answers":  [
                        {
                            "text":  "boss",
                            "points":  42
                        },
                        {
                            "text":  "mom/dad",
                            "points":  31
                        },
                        {
                            "text":  "spouse/mate",
                            "points":  12
                        },
                        {
                            "text":  "coach",
                            "points":  5
                        },
                        {
                            "text":  "judge",
                            "points":  2
                        },
                        {
                            "text":  "police officer",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190405,
        "question":  "Name something that might happen to Humpty Dumpty on Easter.",
        "answers":  [
                        {
                            "text":  "fall/get cracked",
                            "points":  42
                        },
                        {
                            "text":  "get eaten",
                            "points":  17
                        },
                        {
                            "text":  "get dye job",
                            "points":  14
                        },
                        {
                            "text":  "be boiled",
                            "points":  10
                        },
                        {
                            "text":  "hidden/egg hunt",
                            "points":  7
                        },
                        {
                            "text":  "be scrambled",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190406,
        "question":  "We asked 100 men... Name something that looks great on a woman that wouldn't look good on you.",
        "answers":  [
                        {
                            "text":  "dress/miniskirt",
                            "points":  32
                        },
                        {
                            "text":  "bra",
                            "points":  29
                        },
                        {
                            "text":  "heels",
                            "points":  21
                        },
                        {
                            "text":  "lipstick/makeup",
                            "points":  8
                        },
                        {
                            "text":  "hat/cute pillbox",
                            "points":  2
                        },
                        {
                            "text":  "thong",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190407,
        "question":  "A married man might say, \"My wife treats me like a dog. She even bought me a\" what?",
        "answers":  [
                        {
                            "text":  "bone/treat",
                            "points":  31
                        },
                        {
                            "text":  "collar",
                            "points":  29
                        },
                        {
                            "text":  "leash/chain",
                            "points":  25
                        },
                        {
                            "text":  "dog bowl",
                            "points":  3
                        },
                        {
                            "text":  "doghouse",
                            "points":  3
                        },
                        {
                            "text":  "dog toy",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190408,
        "question":  "Name something a short man does to make himself look taller.",
        "answers":  [
                        {
                            "text":  "big shoes/lifts",
                            "points":  79
                        },
                        {
                            "text":  "posture/chest out",
                            "points":  5
                        },
                        {
                            "text":  "hairdo/pompadour",
                            "points":  3
                        },
                        {
                            "text":  "drives a truck",
                            "points":  2
                        },
                        {
                            "text":  "brags/talks loudly",
                            "points":  2
                        },
                        {
                            "text":  "striped/fitted duds",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190409,
        "question":  "We asked 100 men... Name something you want for Christmas that's too big to get down the chimney.",
        "answers":  [
                        {
                            "text":  "car/truck",
                            "points":  78
                        },
                        {
                            "text":  "tv",
                            "points":  5
                        },
                        {
                            "text":  "grill",
                            "points":  3
                        },
                        {
                            "text":  "motorcycle/harley",
                            "points":  3
                        },
                        {
                            "text":  "fridge",
                            "points":  2
                        },
                        {
                            "text":  "hot babe",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190410,
        "question":  "Fill in the blank: The man who makes fun of his wife's ______ is the man who sleeps alone.",
        "answers":  [
                        {
                            "text":  "body",
                            "points":  73
                        },
                        {
                            "text":  "cooking",
                            "points":  7
                        },
                        {
                            "text":  "face",
                            "points":  5
                        },
                        {
                            "text":  "hair",
                            "points":  4
                        },
                        {
                            "text":  "mother",
                            "points":  2
                        },
                        {
                            "text":  "snoring",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190411,
        "question":  "A woman might tell her man, \"You don't like me if you don't like my\" what?",
        "answers":  [
                        {
                            "text":  "family/mother",
                            "points":  54
                        },
                        {
                            "text":  "friends/olga & kiki",
                            "points":  15
                        },
                        {
                            "text":  "pet/farty cat",
                            "points":  13
                        },
                        {
                            "text":  "personality/humor",
                            "points":  4
                        },
                        {
                            "text":  "bod/fat folds",
                            "points":  4
                        },
                        {
                            "text":  "hair",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190412,
        "question":  "We asked 100 married women... Tell me something a woman might do before she tells her husband she wants a divorce.",
        "answers":  [
                        {
                            "text":  "take $/spend it",
                            "points":  54
                        },
                        {
                            "text":  "hire lawyer",
                            "points":  15
                        },
                        {
                            "text":  "cheat/dabble in dong",
                            "points":  8
                        },
                        {
                            "text":  "start working",
                            "points":  6
                        },
                        {
                            "text":  "leave the loser",
                            "points":  5
                        },
                        {
                            "text":  "work out/get buff",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190413,
        "question":  "Fill in the blank: A man might tell his wife, \"You have your mother's\" what?",
        "answers":  [
                        {
                            "text":  "eyes/face",
                            "points":  52
                        },
                        {
                            "text":  "bod/midriff bulge",
                            "points":  16
                        },
                        {
                            "text":  "personality/'tude",
                            "points":  10
                        },
                        {
                            "text":  "temper",
                            "points":  9
                        },
                        {
                            "text":  "stringy hair",
                            "points":  3
                        },
                        {
                            "text":  "mind/bird brain",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190414,
        "question":  "Name a musical instrument an octopus could play the hell out of.",
        "answers":  [
                        {
                            "text":  "piano",
                            "points":  48
                        },
                        {
                            "text":  "drums",
                            "points":  21
                        },
                        {
                            "text":  "flute",
                            "points":  10
                        },
                        {
                            "text":  "harp",
                            "points":  6
                        },
                        {
                            "text":  "bagpipes",
                            "points":  4
                        },
                        {
                            "text":  "guitar",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190415,
        "question":  "We asked 100 women... Name something Steve Harvey would look extra sexy in.",
        "answers":  [
                        {
                            "text":  "suit & tie/tux",
                            "points":  47
                        },
                        {
                            "text":  "undies/gold thong",
                            "points":  14
                        },
                        {
                            "text":  "booty shorts",
                            "points":  12
                        },
                        {
                            "text":  "skinny jeans",
                            "points":  10
                        },
                        {
                            "text":  "tight shirt",
                            "points":  5
                        },
                        {
                            "text":  "swimsuit/mankini",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190416,
        "question":  "We asked 100 men... Name something you just can't get enough of.",
        "answers":  [
                        {
                            "text":  "sex/chicks",
                            "points":  41
                        },
                        {
                            "text":  "sleep",
                            "points":  13
                        },
                        {
                            "text":  "food/pizza",
                            "points":  13
                        },
                        {
                            "text":  "beer/booze",
                            "points":  10
                        },
                        {
                            "text":  "money",
                            "points":  10
                        },
                        {
                            "text":  "tv/sports",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  190417,
        "question":  "We asked 100 women... Fill in the blank: I like nothing more than a good piece of what?",
        "answers":  [
                        {
                            "text":  "chocolate/candy",
                            "points":  36
                        },
                        {
                            "text":  "cake/cheesecake",
                            "points":  32
                        },
                        {
                            "text":  "pie",
                            "points":  10
                        },
                        {
                            "text":  "meat/steak",
                            "points":  7
                        },
                        {
                            "text":  "booty/a**",
                            "points":  5
                        },
                        {
                            "text":  "pizza",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190418,
        "question":  "We asked 100 married men... Between us, name something an ex-girlfriend was better at than your wife.",
        "answers":  [
                        {
                            "text":  "romancing the bone",
                            "points":  31
                        },
                        {
                            "text":  "cooking",
                            "points":  28
                        },
                        {
                            "text":  "cleaning",
                            "points":  11
                        },
                        {
                            "text":  "kissing",
                            "points":  10
                        },
                        {
                            "text":  "saving/making $",
                            "points":  9
                        },
                        {
                            "text":  "dancing",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190419,
        "question":  "We asked 100 married women... Name something your husband spends more time doing with the dog than with you.",
        "answers":  [
                        {
                            "text":  "petting",
                            "points":  21
                        },
                        {
                            "text":  "playing",
                            "points":  16
                        },
                        {
                            "text":  "walking",
                            "points":  16
                        },
                        {
                            "text":  "cuddling/kissing",
                            "points":  16
                        },
                        {
                            "text":  "watching tv",
                            "points":  14
                        },
                        {
                            "text":  "grooming",
                            "points":  10
                        }
                    ]
    },
    {
        "id":  190420,
        "question":  "Name a question a boss would ask a worker while they're hooked up to a lie detector.",
        "answers":  [
                        {
                            "text":  "steal stuff?",
                            "points":  67
                        },
                        {
                            "text":  "like me as a boss?",
                            "points":  9
                        },
                        {
                            "text":  "happy with job?",
                            "points":  6
                        },
                        {
                            "text":  "go online?",
                            "points":  4
                        },
                        {
                            "text":  "been arrested?",
                            "points":  3
                        },
                        {
                            "text":  "love life/do me?",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190421,
        "question":  "Name something people dunk their doughnuts in at the old folks' home.",
        "answers":  [
                        {
                            "text":  "coffee",
                            "points":  61
                        },
                        {
                            "text":  "milk",
                            "points":  19
                        },
                        {
                            "text":  "tea",
                            "points":  5
                        },
                        {
                            "text":  "prune juice",
                            "points":  3
                        },
                        {
                            "text":  "gravy",
                            "points":  2
                        },
                        {
                            "text":  "maalox/antacid",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190422,
        "question":  "You might sit on the back row at church so no one can see you do what?",
        "answers":  [
                        {
                            "text":  "sleep",
                            "points":  61
                        },
                        {
                            "text":  "text/use app/tinder",
                            "points":  18
                        },
                        {
                            "text":  "sneak out",
                            "points":  5
                        },
                        {
                            "text":  "daydream",
                            "points":  3
                        },
                        {
                            "text":  "pick my boogers",
                            "points":  3
                        },
                        {
                            "text":  "gab away",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190423,
        "question":  "What's the first thing you do when you hear a strange noise in your home?",
        "answers":  [
                        {
                            "text":  "look/check it out",
                            "points":  49
                        },
                        {
                            "text":  "listen/turn down tv",
                            "points":  17
                        },
                        {
                            "text":  "jump up/sit up",
                            "points":  10
                        },
                        {
                            "text":  "get gun/weapon",
                            "points":  10
                        },
                        {
                            "text":  "hide/under bed",
                            "points":  3
                        },
                        {
                            "text":  "turn on lights",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190424,
        "question":  "Name a place a wife shushes her husband.",
        "answers":  [
                        {
                            "text":  "church",
                            "points":  48
                        },
                        {
                            "text":  "the movies",
                            "points":  25
                        },
                        {
                            "text":  "home/bedroom",
                            "points":  8
                        },
                        {
                            "text":  "at a party",
                            "points":  4
                        },
                        {
                            "text":  "eatery/olive gdn.",
                            "points":  4
                        },
                        {
                            "text":  "store",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190425,
        "question":  "Your relatives just showed up at your house unannounced. What's the first thing you do?",
        "answers":  [
                        {
                            "text":  "hide/panic",
                            "points":  31
                        },
                        {
                            "text":  "offer food/drink",
                            "points":  19
                        },
                        {
                            "text":  "let in/greet/hug",
                            "points":  18
                        },
                        {
                            "text":  "tidy up/bathroom",
                            "points":  16
                        },
                        {
                            "text":  "complain/cuss out",
                            "points":  4
                        },
                        {
                            "text":  "put clothes on",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190426,
        "question":  "Name something you put in your mouth that calms you down.",
        "answers":  [
                        {
                            "text":  "food/candy/coffee",
                            "points":  60
                        },
                        {
                            "text":  "cigarette/cigar",
                            "points":  10
                        },
                        {
                            "text":  "alcohol",
                            "points":  10
                        },
                        {
                            "text":  "valium/xanax",
                            "points":  5
                        },
                        {
                            "text":  "finger/thumb",
                            "points":  3
                        },
                        {
                            "text":  "boobs",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190427,
        "question":  "Name a place a man might be where he'd hate to see his wife walk in.",
        "answers":  [
                        {
                            "text":  "strip joint",
                            "points":  54
                        },
                        {
                            "text":  "bar/nightclub",
                            "points":  19
                        },
                        {
                            "text":  "bathroom/crapper",
                            "points":  8
                        },
                        {
                            "text":  "hussy's home/bed",
                            "points":  6
                        },
                        {
                            "text":  "poker game/hall",
                            "points":  2
                        },
                        {
                            "text":  "his man cave",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190428,
        "question":  "Name a way a mean wife might wake her husband up in the morning.",
        "answers":  [
                        {
                            "text":  "water/ice on him",
                            "points":  51
                        },
                        {
                            "text":  "loud noise/yell",
                            "points":  21
                        },
                        {
                            "text":  "slap/hit/kick",
                            "points":  11
                        },
                        {
                            "text":  "hot coffee on him",
                            "points":  3
                        },
                        {
                            "text":  "yank covers off",
                            "points":  3
                        },
                        {
                            "text":  "bright lights on",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190429,
        "question":  "Name a place you go where you crave to misbehave.",
        "answers":  [
                        {
                            "text":  "bar/nightclub",
                            "points":  42
                        },
                        {
                            "text":  "vegas/casino",
                            "points":  18
                        },
                        {
                            "text":  "bakery/sweets shop",
                            "points":  10
                        },
                        {
                            "text":  "home/bedroom",
                            "points":  10
                        },
                        {
                            "text":  "strip joint",
                            "points":  9
                        },
                        {
                            "text":  "work",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190430,
        "question":  "Name something a man might do when he sees a very attractive woman approaching.",
        "answers":  [
                        {
                            "text":  "stare/check her out",
                            "points":  37
                        },
                        {
                            "text":  "whistle",
                            "points":  17
                        },
                        {
                            "text":  "smile",
                            "points":  17
                        },
                        {
                            "text":  "suck in his gut",
                            "points":  10
                        },
                        {
                            "text":  "fix his hair",
                            "points":  7
                        },
                        {
                            "text":  "wink",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190431,
        "question":  "We asked 100 women... Name something specific that firemen do that you find kind of sexy.",
        "answers":  [
                        {
                            "text":  "handle that hose",
                            "points":  20
                        },
                        {
                            "text":  "slide down pole",
                            "points":  19
                        },
                        {
                            "text":  "save people/animals",
                            "points":  19
                        },
                        {
                            "text":  "pose in calendar",
                            "points":  13
                        },
                        {
                            "text":  "fight fire/risk",
                            "points":  11
                        },
                        {
                            "text":  "wear uniform",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  190432,
        "question":  "Name something that goes out.",
        "answers":  [
                        {
                            "text":  "lights/electricity",
                            "points":  62
                        },
                        {
                            "text":  "my dog",
                            "points":  8
                        },
                        {
                            "text":  "people",
                            "points":  7
                        },
                        {
                            "text":  "fire/flame",
                            "points":  5
                        },
                        {
                            "text":  "my back",
                            "points":  5
                        },
                        {
                            "text":  "the trash",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190433,
        "question":  "Name a place at work you would hide if you knew your boss was looking to fire someone.",
        "answers":  [
                        {
                            "text":  "bathroom",
                            "points":  52
                        },
                        {
                            "text":  "under my desk",
                            "points":  22
                        },
                        {
                            "text":  "my car/pkg. lot",
                            "points":  4
                        },
                        {
                            "text":  "closet",
                            "points":  4
                        },
                        {
                            "text":  "conference room",
                            "points":  4
                        },
                        {
                            "text":  "break room",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190434,
        "question":  "What would he write about if a dog had a blog?",
        "answers":  [
                        {
                            "text":  "food/treats/bones",
                            "points":  48
                        },
                        {
                            "text":  "owner/humans",
                            "points":  23
                        },
                        {
                            "text":  "chasing pussycat",
                            "points":  7
                        },
                        {
                            "text":  "dogs/sexy mutts",
                            "points":  6
                        },
                        {
                            "text":  "licking/his dog dong",
                            "points":  3
                        },
                        {
                            "text":  "sleeping/dreaming",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190435,
        "question":  "Tell me the last place you were when you lost your temper.",
        "answers":  [
                        {
                            "text":  "home",
                            "points":  42
                        },
                        {
                            "text":  "work",
                            "points":  23
                        },
                        {
                            "text":  "car/road/pkg. lot",
                            "points":  13
                        },
                        {
                            "text":  "store/yarn shop",
                            "points":  8
                        },
                        {
                            "text":  "school",
                            "points":  2
                        },
                        {
                            "text":  "restaurant",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190436,
        "question":  "Name something every woman should know how to do for herself.",
        "answers":  [
                        {
                            "text":  "cook",
                            "points":  28
                        },
                        {
                            "text":  "repair car/tire",
                            "points":  28
                        },
                        {
                            "text":  "make/manage $$$",
                            "points":  25
                        },
                        {
                            "text":  "clean",
                            "points":  3
                        },
                        {
                            "text":  "drive",
                            "points":  3
                        },
                        {
                            "text":  "her makeup",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190437,
        "question":  "Name something you should never try to get off of while it's moving.",
        "answers":  [
                        {
                            "text":  "train/subway",
                            "points":  25
                        },
                        {
                            "text":  "car/truck",
                            "points":  25
                        },
                        {
                            "text":  "airplane",
                            "points":  17
                        },
                        {
                            "text":  "bicycle",
                            "points":  9
                        },
                        {
                            "text":  "amusement ride",
                            "points":  9
                        },
                        {
                            "text":  "horse",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190438,
        "question":  "Name a way a woman knows her date is going in for a kiss.",
        "answers":  [
                        {
                            "text":  "gets close/leans in",
                            "points":  59
                        },
                        {
                            "text":  "eyebangs her",
                            "points":  10
                        },
                        {
                            "text":  "closes his eyes",
                            "points":  9
                        },
                        {
                            "text":  "tilts head",
                            "points":  4
                        },
                        {
                            "text":  "mint/breath spray",
                            "points":  4
                        },
                        {
                            "text":  "he puckers up",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190439,
        "question":  "If your belly button was as deep as a pouch, what would you carry around in it?",
        "answers":  [
                        {
                            "text":  "money/wallet",
                            "points":  57
                        },
                        {
                            "text":  "cell phone",
                            "points":  12
                        },
                        {
                            "text":  "food/candy",
                            "points":  9
                        },
                        {
                            "text":  "keys",
                            "points":  6
                        },
                        {
                            "text":  "booze/flask",
                            "points":  3
                        },
                        {
                            "text":  "weed",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190440,
        "question":  "If a grown man had a treehouse, name something he'd have in it that a kid wouldn't.",
        "answers":  [
                        {
                            "text":  "beer/full bar",
                            "points":  55
                        },
                        {
                            "text":  "tv/remote",
                            "points":  19
                        },
                        {
                            "text":  "porn/kama sutra",
                            "points":  6
                        },
                        {
                            "text":  "furniture",
                            "points":  5
                        },
                        {
                            "text":  "hookers",
                            "points":  2
                        },
                        {
                            "text":  "marijuana/meds",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190441,
        "question":  "Name something you hope grandpa doesn't do at the Thanksgiving table.",
        "answers":  [
                        {
                            "text":  "rip a juicy one",
                            "points":  54
                        },
                        {
                            "text":  "belch",
                            "points":  14
                        },
                        {
                            "text":  "sleep/snore",
                            "points":  7
                        },
                        {
                            "text":  "pick/remove teeth",
                            "points":  6
                        },
                        {
                            "text":  "die/in stuffing",
                            "points":  5
                        },
                        {
                            "text":  "barf",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190442,
        "question":  "If you had to hide a dead body in your house, where would you put it?",
        "answers":  [
                        {
                            "text":  "basement",
                            "points":  37
                        },
                        {
                            "text":  "closet",
                            "points":  18
                        },
                        {
                            "text":  "freezer",
                            "points":  17
                        },
                        {
                            "text":  "attic",
                            "points":  7
                        },
                        {
                            "text":  "under my bed",
                            "points":  5
                        },
                        {
                            "text":  "crawl space",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190443,
        "question":  "Although he won't admit it, what might a man rather do with his mom than his wife?",
        "answers":  [
                        {
                            "text":  "talk/gossip",
                            "points":  36
                        },
                        {
                            "text":  "eat/have coffee",
                            "points":  19
                        },
                        {
                            "text":  "shop",
                            "points":  17
                        },
                        {
                            "text":  "watch sports",
                            "points":  10
                        },
                        {
                            "text":  "cry",
                            "points":  5
                        },
                        {
                            "text":  "hug/snuggle",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190444,
        "question":  "Name a reason Old MacDonald decided to sleep in the barn.",
        "answers":  [
                        {
                            "text":  "fight w/ mrs. m",
                            "points":  35
                        },
                        {
                            "text":  "animals/digs bessie",
                            "points":  34
                        },
                        {
                            "text":  "quieter/wife snores",
                            "points":  7
                        },
                        {
                            "text":  "got tired working",
                            "points":  6
                        },
                        {
                            "text":  "drunk/moonshine",
                            "points":  4
                        },
                        {
                            "text":  "wife's ugly",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190445,
        "question":  "Name something that's hard to hold in.",
        "answers":  [
                        {
                            "text":  "a cheek squeak",
                            "points":  26
                        },
                        {
                            "text":  "pee/doody",
                            "points":  19
                        },
                        {
                            "text":  "laughter",
                            "points":  18
                        },
                        {
                            "text":  "breath",
                            "points":  9
                        },
                        {
                            "text":  "a sneeze",
                            "points":  9
                        },
                        {
                            "text":  "my fat gut",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  190446,
        "question":  "Name something a squirrel might have nightmares about.",
        "answers":  [
                        {
                            "text":  "no nuts/rotten ones",
                            "points":  50
                        },
                        {
                            "text":  "dogs",
                            "points":  13
                        },
                        {
                            "text":  "eagle/birds",
                            "points":  8
                        },
                        {
                            "text":  "cats",
                            "points":  8
                        },
                        {
                            "text":  "cars/being hit",
                            "points":  6
                        },
                        {
                            "text":  "falling from tree",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190447,
        "question":  "Name a place a woman would not want to have to pick her man up from.",
        "answers":  [
                        {
                            "text":  "jail/police stn.",
                            "points":  37
                        },
                        {
                            "text":  "strip joint",
                            "points":  27
                        },
                        {
                            "text":  "bar/nightclub",
                            "points":  12
                        },
                        {
                            "text":  "kiki's cathouse",
                            "points":  5
                        },
                        {
                            "text":  "his slut's home",
                            "points":  4
                        },
                        {
                            "text":  "the floor",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190448,
        "question":  "Name a pet the farmer's kids hope isn't served for dinner.",
        "answers":  [
                        {
                            "text":  "babe the pig",
                            "points":  35
                        },
                        {
                            "text":  "clucky the chicken",
                            "points":  14
                        },
                        {
                            "text":  "fido the pooch",
                            "points":  12
                        },
                        {
                            "text":  "roger the rabbit",
                            "points":  11
                        },
                        {
                            "text":  "lolita the lamb",
                            "points":  9
                        },
                        {
                            "text":  "clarice the kitty",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  190449,
        "question":  "Name a children's game adults play in the bedroom.",
        "answers":  [
                        {
                            "text":  "hide-and-seek",
                            "points":  29
                        },
                        {
                            "text":  "twister",
                            "points":  28
                        },
                        {
                            "text":  "peek-a-boo",
                            "points":  16
                        },
                        {
                            "text":  "doctor",
                            "points":  9
                        },
                        {
                            "text":  "tag",
                            "points":  3
                        },
                        {
                            "text":  "truth or dare",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190450,
        "question":  "If you literally had a bug up your behind, which kind would be the worst kind?",
        "answers":  [
                        {
                            "text":  "bee/wasp",
                            "points":  27
                        },
                        {
                            "text":  "roach",
                            "points":  23
                        },
                        {
                            "text":  "spider/tarantula",
                            "points":  18
                        },
                        {
                            "text":  "scorpion",
                            "points":  14
                        },
                        {
                            "text":  "ant/fire ant",
                            "points":  3
                        },
                        {
                            "text":  "stink bug",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190451,
        "question":  "We asked 100 women... My man is such a dog, I'm surprised he doesn't tinkle on what?",
        "answers":  [
                        {
                            "text":  "tree/shrub/plant",
                            "points":  27
                        },
                        {
                            "text":  "a fire hydrant",
                            "points":  21
                        },
                        {
                            "text":  "the floor/rug",
                            "points":  19
                        },
                        {
                            "text":  "the lawn/grass",
                            "points":  11
                        },
                        {
                            "text":  "the furniture",
                            "points":  5
                        },
                        {
                            "text":  "me/my face",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190452,
        "question":  "Where's the worst place on the body to get a bee sting?",
        "answers":  [
                        {
                            "text":  "junk/hairy manilow",
                            "points":  26
                        },
                        {
                            "text":  "butt/rusty bagel",
                            "points":  22
                        },
                        {
                            "text":  "eyeball/lid",
                            "points":  19
                        },
                        {
                            "text":  "mouth/lip/tongue",
                            "points":  9
                        },
                        {
                            "text":  "nose/in nostril",
                            "points":  7
                        },
                        {
                            "text":  "foot/toe",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190453,
        "question":  "Name something a woman is wearing that causes her to say, \"I'm hot.\"",
        "answers":  [
                        {
                            "text":  "dress/miniskirt",
                            "points":  21
                        },
                        {
                            "text":  "sweater",
                            "points":  17
                        },
                        {
                            "text":  "bikini/swimsuit",
                            "points":  17
                        },
                        {
                            "text":  "lingerie/vinyl bra",
                            "points":  14
                        },
                        {
                            "text":  "heels/sexy shoes",
                            "points":  11
                        },
                        {
                            "text":  "parka/jacket",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  190454,
        "question":  "We asked 100 men... Name something that gets you more excited than being with a woman.",
        "answers":  [
                        {
                            "text":  "sports/fishing",
                            "points":  34
                        },
                        {
                            "text":  "pigging out",
                            "points":  17
                        },
                        {
                            "text":  "beer/free booze",
                            "points":  14
                        },
                        {
                            "text":  "fast cars",
                            "points":  9
                        },
                        {
                            "text":  "money/lotto win",
                            "points":  8
                        },
                        {
                            "text":  "being w/ 2 women!",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190455,
        "question":  "Name something you prefer to do alone.",
        "answers":  [
                        {
                            "text":  "read/study",
                            "points":  27
                        },
                        {
                            "text":  "sleep",
                            "points":  20
                        },
                        {
                            "text":  "shower/bathe",
                            "points":  18
                        },
                        {
                            "text":  "pee/tour of doody",
                            "points":  11
                        },
                        {
                            "text":  "watch tv/movie",
                            "points":  7
                        },
                        {
                            "text":  "\"beat around my bush\"",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190456,
        "question":  "We asked 100 women... Name a reason some women prefer inflatable dolls to real men.",
        "answers":  [
                        {
                            "text":  "never talk/back",
                            "points":  50
                        },
                        {
                            "text":  "not messy slobs",
                            "points":  11
                        },
                        {
                            "text":  "don't cheat",
                            "points":  10
                        },
                        {
                            "text":  "don't snore",
                            "points":  6
                        },
                        {
                            "text":  "deflate & put away",
                            "points":  6
                        },
                        {
                            "text":  "better lovers",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190457,
        "question":  "We asked 100 women... Name a place you'd be offended your man went with his mother instead of you.",
        "answers":  [
                        {
                            "text":  "vacay/eiffel tower",
                            "points":  44
                        },
                        {
                            "text":  "restaurant",
                            "points":  25
                        },
                        {
                            "text":  "store/tiffany's",
                            "points":  7
                        },
                        {
                            "text":  "bar/nightclub",
                            "points":  4
                        },
                        {
                            "text":  "a wedding",
                            "points":  3
                        },
                        {
                            "text":  "a concert/show",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190458,
        "question":  "Name someone famous whose buttocks are too big to fail.",
        "answers":  [
                        {
                            "text":  "kim kardashian",
                            "points":  42
                        },
                        {
                            "text":  "jennifer lopez",
                            "points":  24
                        },
                        {
                            "text":  "oprah winfrey",
                            "points":  8
                        },
                        {
                            "text":  "nicki minaj",
                            "points":  7
                        },
                        {
                            "text":  "beyonce",
                            "points":  3
                        },
                        {
                            "text":  "melissa mccarthy",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190459,
        "question":  "Name something a woman might do to a man's face.",
        "answers":  [
                        {
                            "text":  "kiss it",
                            "points":  35
                        },
                        {
                            "text":  "slap/punch it",
                            "points":  29
                        },
                        {
                            "text":  "stroke it",
                            "points":  8
                        },
                        {
                            "text":  "shave it",
                            "points":  7
                        },
                        {
                            "text":  "scratch it",
                            "points":  4
                        },
                        {
                            "text":  "lie to it",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190460,
        "question":  "Grandma might say, \"Whenever grandpa gets cranky, I just give him\" what?",
        "answers":  [
                        {
                            "text":  "food/candy/coffee",
                            "points":  29
                        },
                        {
                            "text":  "booze/beer",
                            "points":  22
                        },
                        {
                            "text":  "a kiss/hug",
                            "points":  16
                        },
                        {
                            "text":  "a smack/punch",
                            "points":  10
                        },
                        {
                            "text":  "my hot granny cooch",
                            "points":  5
                        },
                        {
                            "text":  "drugs/ex-lax",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190461,
        "question":  "We asked 100 men... If you're job hunting, name something you shouldn't be wearing in your Facebook photos.",
        "answers":  [
                        {
                            "text":  "man thong/undies",
                            "points":  27
                        },
                        {
                            "text":  "speedo",
                            "points":  24
                        },
                        {
                            "text":  "nothing/buck nekkid",
                            "points":  17
                        },
                        {
                            "text":  "girl garb/panties",
                            "points":  9
                        },
                        {
                            "text":  "tank top/tacky tee",
                            "points":  6
                        },
                        {
                            "text":  "tattoo/\"bite me\"",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190462,
        "question":  "Name something your lover does to ruin the mood of taking a romantic bath together.",
        "answers":  [
                        {
                            "text":  "blows a beefer",
                            "points":  62
                        },
                        {
                            "text":  "pees/poops in tub",
                            "points":  6
                        },
                        {
                            "text":  "talks/argues/jokes",
                            "points":  6
                        },
                        {
                            "text":  "splashes",
                            "points":  5
                        },
                        {
                            "text":  "gets in/hogs tub",
                            "points":  4
                        },
                        {
                            "text":  "turns on shower",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190463,
        "question":  "If two toddlers got into a fight at a day care, name something they might use as a weapon.",
        "answers":  [
                        {
                            "text":  "toys/blocks",
                            "points":  47
                        },
                        {
                            "text":  "bottle/sippy cup",
                            "points":  13
                        },
                        {
                            "text":  "crayon/pencil",
                            "points":  11
                        },
                        {
                            "text":  "binky/pacifier",
                            "points":  6
                        },
                        {
                            "text":  "diaper/loaded",
                            "points":  5
                        },
                        {
                            "text":  "hands & feet",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190464,
        "question":  "Name something of King Kong's that's really long.",
        "answers":  [
                        {
                            "text":  "his arms",
                            "points":  47
                        },
                        {
                            "text":  "his legs",
                            "points":  12
                        },
                        {
                            "text":  "hands/fingers",
                            "points":  10
                        },
                        {
                            "text":  "his hair",
                            "points":  6
                        },
                        {
                            "text":  "his king-a-ling",
                            "points":  6
                        },
                        {
                            "text":  "his movies",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190465,
        "question":  "Name something you'd be embarrassed to say you got your hand caught in.",
        "answers":  [
                        {
                            "text":  "jar/cookie jar",
                            "points":  39
                        },
                        {
                            "text":  "toilet",
                            "points":  16
                        },
                        {
                            "text":  "my/someone's pants",
                            "points":  12
                        },
                        {
                            "text":  "sink/disposal",
                            "points":  7
                        },
                        {
                            "text":  "body/lover's hoo-ha",
                            "points":  6
                        },
                        {
                            "text":  "vending machine",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190466,
        "question":  "Name an excuse a husband gives his wife for why his name turned up on a dating website.",
        "answers":  [
                        {
                            "text":  "same name/not me",
                            "points":  23
                        },
                        {
                            "text":  "bud used it/joke",
                            "points":  20
                        },
                        {
                            "text":  "hacked/id theft",
                            "points":  18
                        },
                        {
                            "text":  "bored/curious",
                            "points":  9
                        },
                        {
                            "text":  "joined by accident",
                            "points":  9
                        },
                        {
                            "text":  "old account",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  190467,
        "question":  "We asked 100 married men... Name an animal whose behind reminds you of your wife's behind.",
        "answers":  [
                        {
                            "text":  "horse",
                            "points":  23
                        },
                        {
                            "text":  "baboon/ape/monkey",
                            "points":  18
                        },
                        {
                            "text":  "elephant",
                            "points":  13
                        },
                        {
                            "text":  "donkey/mule",
                            "points":  12
                        },
                        {
                            "text":  "pig/boar",
                            "points":  12
                        },
                        {
                            "text":  "lamb/wooly sheep",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  190468,
        "question":  "Name a fattening food you've thrown away and then tried to retrieve from the trash.",
        "answers":  [
                        {
                            "text":  "cake/cupcake",
                            "points":  21
                        },
                        {
                            "text":  "donut",
                            "points":  18
                        },
                        {
                            "text":  "chips",
                            "points":  12
                        },
                        {
                            "text":  "pizza",
                            "points":  12
                        },
                        {
                            "text":  "candy/chocolate",
                            "points":  11
                        },
                        {
                            "text":  "ice cream",
                            "points":  11
                        }
                    ]
    },
    {
        "id":  190469,
        "question":  "Tell me something it seems all celebrities have.",
        "answers":  [
                        {
                            "text":  "money",
                            "points":  63
                        },
                        {
                            "text":  "a mansion",
                            "points":  8
                        },
                        {
                            "text":  "great clothes",
                            "points":  4
                        },
                        {
                            "text":  "sweet wheels",
                            "points":  3
                        },
                        {
                            "text":  "a big ego",
                            "points":  3
                        },
                        {
                            "text":  "a publicist",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190470,
        "question":  "Tell me something specific that instantly makes you think about a past romance.",
        "answers":  [
                        {
                            "text":  "special song",
                            "points":  56
                        },
                        {
                            "text":  "cologne/odor",
                            "points":  18
                        },
                        {
                            "text":  "photos",
                            "points":  4
                        },
                        {
                            "text":  "movie",
                            "points":  2
                        },
                        {
                            "text":  "food/restaurant",
                            "points":  2
                        },
                        {
                            "text":  "words/their name",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190471,
        "question":  "Name something a woman might drive a man to do.",
        "answers":  [
                        {
                            "text":  "drink",
                            "points":  52
                        },
                        {
                            "text":  "leave/divorce",
                            "points":  11
                        },
                        {
                            "text":  "kill himself",
                            "points":  7
                        },
                        {
                            "text":  "propose/marry",
                            "points":  6
                        },
                        {
                            "text":  "lose his mind",
                            "points":  5
                        },
                        {
                            "text":  "cheat",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190472,
        "question":  "Fill in the blank: The party at the old folks' home was so wild that grandma gave away her what?",
        "answers":  [
                        {
                            "text":  "teeth",
                            "points":  48
                        },
                        {
                            "text":  "bra/panties",
                            "points":  24
                        },
                        {
                            "text":  "walker/cane",
                            "points":  4
                        },
                        {
                            "text":  "dumpy diaper",
                            "points":  3
                        },
                        {
                            "text":  "wig",
                            "points":  3
                        },
                        {
                            "text":  "girdle",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190473,
        "question":  "We asked 100 women... Fill in the blank: There's nothing sweeter than a hot guy holding a what?",
        "answers":  [
                        {
                            "text":  "puppy/kitten",
                            "points":  35
                        },
                        {
                            "text":  "baby/child",
                            "points":  28
                        },
                        {
                            "text":  "rose/bouquet",
                            "points":  10
                        },
                        {
                            "text":  "door",
                            "points":  5
                        },
                        {
                            "text":  "wad o' dough/visa",
                            "points":  3
                        },
                        {
                            "text":  "vacuum",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190474,
        "question":  "What occupation would a wife like her husband to dress up as in the bedroom?",
        "answers":  [
                        {
                            "text":  "fireman",
                            "points":  32
                        },
                        {
                            "text":  "cop",
                            "points":  32
                        },
                        {
                            "text":  "doc/proctologist",
                            "points":  9
                        },
                        {
                            "text":  "construction",
                            "points":  5
                        },
                        {
                            "text":  "stripper",
                            "points":  3
                        },
                        {
                            "text":  "french maid",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190475,
        "question":  "A woman would have cause for concern if her date showed up carrying a what?",
        "answers":  [
                        {
                            "text":  "weapon/shovel",
                            "points":  66
                        },
                        {
                            "text":  "purse",
                            "points":  9
                        },
                        {
                            "text":  "baby",
                            "points":  2
                        },
                        {
                            "text":  "condom/bagful",
                            "points":  2
                        },
                        {
                            "text":  "animal/pissy wombat",
                            "points":  2
                        },
                        {
                            "text":  "timer",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190476,
        "question":  "If marijuana becomes legal, name an occupation you hope doesn't smoke it on the job.",
        "answers":  [
                        {
                            "text":  "doctor/dentist",
                            "points":  45
                        },
                        {
                            "text":  "police officer",
                            "points":  14
                        },
                        {
                            "text":  "pilot",
                            "points":  10
                        },
                        {
                            "text":  "bus driver",
                            "points":  10
                        },
                        {
                            "text":  "teacher",
                            "points":  2
                        },
                        {
                            "text":  "construction",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190477,
        "question":  "If you could miraculously become boss at work, what's the first thing you'd do?",
        "answers":  [
                        {
                            "text":  "raises for everyone!",
                            "points":  32
                        },
                        {
                            "text":  "fire/everyone",
                            "points":  27
                        },
                        {
                            "text":  "more vacay/days off",
                            "points":  10
                        },
                        {
                            "text":  "free lunch/snacks",
                            "points":  7
                        },
                        {
                            "text":  "change dress code",
                            "points":  4
                        },
                        {
                            "text":  "hire more staff",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190478,
        "question":  "Give me a word that rhymes with \"drunk.\"",
        "answers":  [
                        {
                            "text":  "skunk",
                            "points":  32
                        },
                        {
                            "text":  "trunk",
                            "points":  24
                        },
                        {
                            "text":  "punk",
                            "points":  11
                        },
                        {
                            "text":  "funk",
                            "points":  9
                        },
                        {
                            "text":  "dunk",
                            "points":  4
                        },
                        {
                            "text":  "bunk",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190479,
        "question":  "We asked 100 single women... If you were dating identical twins, you'd hope to get the one that's better at what?",
        "answers":  [
                        {
                            "text":  "makin' moolah!",
                            "points":  18
                        },
                        {
                            "text":  "kissing",
                            "points":  14
                        },
                        {
                            "text":  "stuffing my bird",
                            "points":  13
                        },
                        {
                            "text":  "cooking",
                            "points":  13
                        },
                        {
                            "text":  "making me laugh",
                            "points":  13
                        },
                        {
                            "text":  "being honest/loyal",
                            "points":  12
                        }
                    ]
    },
    {
        "id":  190480,
        "question":  "Name a great gift for a woman that would be a terrible gift for a man.",
        "answers":  [
                        {
                            "text":  "chick duds/bra",
                            "points":  34
                        },
                        {
                            "text":  "jewelry/pearls",
                            "points":  15
                        },
                        {
                            "text":  "flowers",
                            "points":  13
                        },
                        {
                            "text":  "perfume",
                            "points":  12
                        },
                        {
                            "text":  "makeup",
                            "points":  4
                        },
                        {
                            "text":  "a vibrator",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190481,
        "question":  "Name something a boxer hopes he doesn't lose when he's in the ring.",
        "answers":  [
                        {
                            "text":  "his teeth",
                            "points":  31
                        },
                        {
                            "text":  "fight/round/title",
                            "points":  22
                        },
                        {
                            "text":  "his shorts",
                            "points":  12
                        },
                        {
                            "text":  "consciousness",
                            "points":  9
                        },
                        {
                            "text":  "an eye/sight",
                            "points":  4
                        },
                        {
                            "text":  "an ear",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190482,
        "question":  "If the Jolly Green Giant made edible underwear, what vegetable would they taste like?",
        "answers":  [
                        {
                            "text":  "beans",
                            "points":  26
                        },
                        {
                            "text":  "peas",
                            "points":  22
                        },
                        {
                            "text":  "carrots",
                            "points":  11
                        },
                        {
                            "text":  "corn",
                            "points":  9
                        },
                        {
                            "text":  "broccoli",
                            "points":  9
                        },
                        {
                            "text":  "spinach/creamed",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190483,
        "question":  "Name something a coworker has stolen from you.",
        "answers":  [
                        {
                            "text":  "pen",
                            "points":  25
                        },
                        {
                            "text":  "food/soda",
                            "points":  23
                        },
                        {
                            "text":  "money/wallet",
                            "points":  16
                        },
                        {
                            "text":  "time/hours",
                            "points":  7
                        },
                        {
                            "text":  "credit for ideas",
                            "points":  6
                        },
                        {
                            "text":  "stapler",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190484,
        "question":  "We asked 100 married women... Fill in the blank: The way my man snores, it sounds like there's a what in bed with me.",
        "answers":  [
                        {
                            "text":  "freight train",
                            "points":  24
                        },
                        {
                            "text":  "saw/chainsaw",
                            "points":  20
                        },
                        {
                            "text":  "bear",
                            "points":  18
                        },
                        {
                            "text":  "vacuum cleaner",
                            "points":  7
                        },
                        {
                            "text":  "pig/wild hog",
                            "points":  7
                        },
                        {
                            "text":  "bulldozer",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  190485,
        "question":  "Name something you think of when you hear the word \"grind.\"",
        "answers":  [
                        {
                            "text":  "coffee",
                            "points":  24
                        },
                        {
                            "text":  "bump & grind/dance",
                            "points":  17
                        },
                        {
                            "text":  "teeth",
                            "points":  15
                        },
                        {
                            "text":  "work/job",
                            "points":  14
                        },
                        {
                            "text":  "gears/brakes",
                            "points":  7
                        },
                        {
                            "text":  "meat/sausage",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190486,
        "question":  "Name a kind of fish you wouldn't want to see on your sushi roll.",
        "answers":  [
                        {
                            "text":  "carp",
                            "points":  21
                        },
                        {
                            "text":  "goldfish",
                            "points":  18
                        },
                        {
                            "text":  "shark",
                            "points":  14
                        },
                        {
                            "text":  "eel",
                            "points":  12
                        },
                        {
                            "text":  "blowfish/puffer",
                            "points":  9
                        },
                        {
                            "text":  "catfish",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  190487,
        "question":  "Name something a guy would be holding if he's a player.",
        "answers":  [
                        {
                            "text":  "sports equipment",
                            "points":  29
                        },
                        {
                            "text":  "phone/numbers",
                            "points":  18
                        },
                        {
                            "text":  "$$$/black amex",
                            "points":  14
                        },
                        {
                            "text":  "cards/royal flush",
                            "points":  11
                        },
                        {
                            "text":  "cocktail",
                            "points":  5
                        },
                        {
                            "text":  "pack o' rubbers",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190488,
        "question":  "Name something of her husband's an angry wife might super glue shut.",
        "answers":  [
                        {
                            "text":  "his big fat mouth",
                            "points":  41
                        },
                        {
                            "text":  "his wallet",
                            "points":  12
                        },
                        {
                            "text":  "his pants/zipper",
                            "points":  9
                        },
                        {
                            "text":  "his car door",
                            "points":  9
                        },
                        {
                            "text":  "his laptop",
                            "points":  5
                        },
                        {
                            "text":  "his butt/poop chute",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190489,
        "question":  "We asked 100 women... If you bought your man boxer shorts with an animal design, what animal would be best for him?",
        "answers":  [
                        {
                            "text":  "tiger",
                            "points":  39
                        },
                        {
                            "text":  "dog/puppy",
                            "points":  15
                        },
                        {
                            "text":  "cheetah",
                            "points":  9
                        },
                        {
                            "text":  "lion",
                            "points":  7
                        },
                        {
                            "text":  "monkey",
                            "points":  6
                        },
                        {
                            "text":  "cougar/panther",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190490,
        "question":  "Name something that moves after you turn it on.",
        "answers":  [
                        {
                            "text":  "car",
                            "points":  36
                        },
                        {
                            "text":  "fan",
                            "points":  21
                        },
                        {
                            "text":  "vacuum/roomba",
                            "points":  8
                        },
                        {
                            "text":  "lawn mower",
                            "points":  6
                        },
                        {
                            "text":  "person",
                            "points":  5
                        },
                        {
                            "text":  "blender",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190491,
        "question":  "Name an occupation where people talk trash.",
        "answers":  [
                        {
                            "text":  "athlete",
                            "points":  29
                        },
                        {
                            "text":  "garbage collector",
                            "points":  22
                        },
                        {
                            "text":  "politician",
                            "points":  10
                        },
                        {
                            "text":  "construction",
                            "points":  8
                        },
                        {
                            "text":  "tv/radio host/dj",
                            "points":  6
                        },
                        {
                            "text":  "sales/car dealer",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190492,
        "question":  "Name something a woman has that a man might find too threatening.",
        "answers":  [
                        {
                            "text":  "money/big job",
                            "points":  33
                        },
                        {
                            "text":  "brain/ph.d.",
                            "points":  23
                        },
                        {
                            "text":  "confidence/big mouth",
                            "points":  8
                        },
                        {
                            "text":  "a gun",
                            "points":  5
                        },
                        {
                            "text":  "lover/other chick",
                            "points":  5
                        },
                        {
                            "text":  "man-eating boobs",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190493,
        "question":  "Give me a word that rhymes with \"trash.\"",
        "answers":  [
                        {
                            "text":  "cash",
                            "points":  33
                        },
                        {
                            "text":  "crash",
                            "points":  13
                        },
                        {
                            "text":  "bash",
                            "points":  10
                        },
                        {
                            "text":  "flash",
                            "points":  9
                        },
                        {
                            "text":  "mash",
                            "points":  7
                        },
                        {
                            "text":  "rash",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  190494,
        "question":  "Name something that you don't care if it's fake as long as it looks good.",
        "answers":  [
                        {
                            "text":  "jewelry/diamond",
                            "points":  22
                        },
                        {
                            "text":  "hair/color",
                            "points":  18
                        },
                        {
                            "text":  "jugs/silicone sistas",
                            "points":  12
                        },
                        {
                            "text":  "clothes/fur",
                            "points":  11
                        },
                        {
                            "text":  "flower/tree",
                            "points":  9
                        },
                        {
                            "text":  "nails",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  190495,
        "question":  "Name a juicy fruit you might compare your lover to.",
        "answers":  [
                        {
                            "text":  "peach",
                            "points":  20
                        },
                        {
                            "text":  "orange",
                            "points":  16
                        },
                        {
                            "text":  "pineapple",
                            "points":  16
                        },
                        {
                            "text":  "melon/watermelon",
                            "points":  16
                        },
                        {
                            "text":  "berry/strawberry",
                            "points":  7
                        },
                        {
                            "text":  "apple/granny smith",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190496,
        "question":  "We asked 100 women... Fill in the blank: Men are like a box of chocolates, and I'm attracted to the ones that are what?",
        "answers":  [
                        {
                            "text":  "sweet",
                            "points":  34
                        },
                        {
                            "text":  "nutty",
                            "points":  17
                        },
                        {
                            "text":  "dark/chocolatey",
                            "points":  11
                        },
                        {
                            "text":  "creamy/gooey",
                            "points":  6
                        },
                        {
                            "text":  "rich",
                            "points":  5
                        },
                        {
                            "text":  "bitter",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190497,
        "question":  "When Ronald McDonald took a job as an exotic dancer, he showed off his what?",
        "answers":  [
                        {
                            "text":  "big feet/shoes",
                            "points":  27
                        },
                        {
                            "text":  "buns",
                            "points":  19
                        },
                        {
                            "text":  "big mac/burger",
                            "points":  12
                        },
                        {
                            "text":  "face/nose",
                            "points":  8
                        },
                        {
                            "text":  "red hair/down below",
                            "points":  6
                        },
                        {
                            "text":  "mcnuggets",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  190498,
        "question":  "We asked 100 men... Name a bad habit a woman has that might not bother you if she's hot.",
        "answers":  [
                        {
                            "text":  "talks/whines",
                            "points":  23
                        },
                        {
                            "text":  "smokes/stogies",
                            "points":  20
                        },
                        {
                            "text":  "snores",
                            "points":  13
                        },
                        {
                            "text":  "bites nails",
                            "points":  9
                        },
                        {
                            "text":  "picks nose",
                            "points":  8
                        },
                        {
                            "text":  "fart & yell incoming",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190499,
        "question":  "If Steve Harvey were your neighbor, name something of his you might ask to borrow.",
        "answers":  [
                        {
                            "text":  "pimpmobile",
                            "points":  24
                        },
                        {
                            "text":  "suits/clothes",
                            "points":  19
                        },
                        {
                            "text":  "$15 million",
                            "points":  17
                        },
                        {
                            "text":  "jokes/humor",
                            "points":  7
                        },
                        {
                            "text":  "sugar",
                            "points":  5
                        },
                        {
                            "text":  "mower/lawn svc.",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190500,
        "question":  "We asked 100 women... What would you do if your lover bought you an expensive jar of cellulite cream?",
        "answers":  [
                        {
                            "text":  "use it, baby",
                            "points":  34
                        },
                        {
                            "text":  "hit him/with it",
                            "points":  13
                        },
                        {
                            "text":  "yell/\"die pig!\"",
                            "points":  9
                        },
                        {
                            "text":  "surprised/\"why?\"",
                            "points":  8
                        },
                        {
                            "text":  "cry/be sad",
                            "points":  7
                        },
                        {
                            "text":  "smile/laugh",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190501,
        "question":  "Name something a man might need to get rid of before women will be interested in him.",
        "answers":  [
                        {
                            "text":  "300 lbs./gut",
                            "points":  27
                        },
                        {
                            "text":  "wife/parade of sluts",
                            "points":  15
                        },
                        {
                            "text":  "beard/pimp stache",
                            "points":  13
                        },
                        {
                            "text":  "attitude/ego",
                            "points":  9
                        },
                        {
                            "text":  "man funk/bad breath",
                            "points":  8
                        },
                        {
                            "text":  "pets/pythons",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190502,
        "question":  "Name a creature most men are afraid of.",
        "answers":  [
                        {
                            "text":  "women",
                            "points":  22
                        },
                        {
                            "text":  "snakes",
                            "points":  16
                        },
                        {
                            "text":  "bears",
                            "points":  14
                        },
                        {
                            "text":  "spiders",
                            "points":  11
                        },
                        {
                            "text":  "lions",
                            "points":  7
                        },
                        {
                            "text":  "sharks",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  190503,
        "question":  "We asked 100 men... Name a dessert you might call your mate's bottom.",
        "answers":  [
                        {
                            "text":  "jell-o",
                            "points":  18
                        },
                        {
                            "text":  "pudding/tapioca",
                            "points":  13
                        },
                        {
                            "text":  "pie/cherry pie",
                            "points":  12
                        },
                        {
                            "text":  "cake/pound cake",
                            "points":  12
                        },
                        {
                            "text":  "pear",
                            "points":  11
                        },
                        {
                            "text":  "honey buns",
                            "points":  10
                        }
                    ]
    },
    {
        "id":  190504,
        "question":  "Name something you'd hate to fall into face first.",
        "answers":  [
                        {
                            "text":  "poo/butt truffles",
                            "points":  35
                        },
                        {
                            "text":  "mud",
                            "points":  22
                        },
                        {
                            "text":  "concrete/sidewalk",
                            "points":  7
                        },
                        {
                            "text":  "sewer/cesspool",
                            "points":  4
                        },
                        {
                            "text":  "toilet",
                            "points":  3
                        },
                        {
                            "text":  "volcano/lava",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190505,
        "question":  "Name something on you or about you that's off-center.",
        "answers":  [
                        {
                            "text":  "my nose",
                            "points":  33
                        },
                        {
                            "text":  "my hair/part",
                            "points":  13
                        },
                        {
                            "text":  "my sense of humor",
                            "points":  9
                        },
                        {
                            "text":  "my ears",
                            "points":  7
                        },
                        {
                            "text":  "my tie",
                            "points":  6
                        },
                        {
                            "text":  "my mind/brain",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  190506,
        "question":  "Name a kind of cheese a stripper from Wisconsin might use as her stage name.",
        "answers":  [
                        {
                            "text":  "cheddar",
                            "points":  31
                        },
                        {
                            "text":  "swiss/baby swiss",
                            "points":  12
                        },
                        {
                            "text":  "gouda",
                            "points":  11
                        },
                        {
                            "text":  "brie",
                            "points":  8
                        },
                        {
                            "text":  "pepper jack",
                            "points":  7
                        },
                        {
                            "text":  "string cheese",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190507,
        "question":  "Besides a coffin, name something a woman might bury her cheating husband in.",
        "answers":  [
                        {
                            "text":  "a hole/in backyard",
                            "points":  22
                        },
                        {
                            "text":  "debt/legal fees",
                            "points":  14
                        },
                        {
                            "text":  "a box/shoebox",
                            "points":  12
                        },
                        {
                            "text":  "car/truck",
                            "points":  12
                        },
                        {
                            "text":  "trash bag/dumpster",
                            "points":  10
                        },
                        {
                            "text":  "sea/sinking boat",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190508,
        "question":  "We asked 100 men... If women didn't exist, I wouldn't have sex. But I also wouldn't have to what?",
        "answers":  [
                        {
                            "text":  "clean/housework",
                            "points":  19
                        },
                        {
                            "text":  "shower/groom",
                            "points":  19
                        },
                        {
                            "text":  "listen/to her nag",
                            "points":  19
                        },
                        {
                            "text":  "shop/buy gifts",
                            "points":  9
                        },
                        {
                            "text":  "work/make $",
                            "points":  4
                        },
                        {
                            "text":  "beg/kiss up",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190509,
        "question":  "Tell me your worst habit.",
        "answers":  [
                        {
                            "text":  "biting my nails",
                            "points":  19
                        },
                        {
                            "text":  "smoking",
                            "points":  15
                        },
                        {
                            "text":  "procrastinating",
                            "points":  15
                        },
                        {
                            "text":  "eating/overeating",
                            "points":  14
                        },
                        {
                            "text":  "picking my nose",
                            "points":  6
                        },
                        {
                            "text":  "cussing/at old ladies",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190510,
        "question":  "Name something a man pops.",
        "answers":  [
                        {
                            "text":  "the question",
                            "points":  17
                        },
                        {
                            "text":  "his knuckles",
                            "points":  14
                        },
                        {
                            "text":  "a balloon",
                            "points":  14
                        },
                        {
                            "text":  "gum",
                            "points":  12
                        },
                        {
                            "text":  "champagne cork",
                            "points":  10
                        },
                        {
                            "text":  "beer can",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  190511,
        "question":  "Name something you might have strapped to you.",
        "answers":  [
                        {
                            "text":  "gun/holster",
                            "points":  31
                        },
                        {
                            "text":  "backpack/fanny pack",
                            "points":  12
                        },
                        {
                            "text":  "parachute",
                            "points":  10
                        },
                        {
                            "text":  "a strap-on",
                            "points":  7
                        },
                        {
                            "text":  "baby/child",
                            "points":  6
                        },
                        {
                            "text":  "seatbelt",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  190512,
        "question":  "We asked 100 married women... Give me an \"S\" word that describes how your man looks when he's naked.",
        "answers":  [
                        {
                            "text":  "sexy",
                            "points":  34
                        },
                        {
                            "text":  "strong",
                            "points":  11
                        },
                        {
                            "text":  "sensual",
                            "points":  9
                        },
                        {
                            "text":  "stunning",
                            "points":  7
                        },
                        {
                            "text":  "sharp",
                            "points":  5
                        },
                        {
                            "text":  "sloppy",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190513,
        "question":  "Name something you might be on.",
        "answers":  [
                        {
                            "text":  "drugs/meds",
                            "points":  30
                        },
                        {
                            "text":  "furniture/chair",
                            "points":  26
                        },
                        {
                            "text":  "boat/raft",
                            "points":  5
                        },
                        {
                            "text":  "tv/the news",
                            "points":  4
                        },
                        {
                            "text":  "a diet",
                            "points":  3
                        },
                        {
                            "text":  "computer/internet",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190514,
        "question":  "Give me a word that rhymes with the word \"prank.\"",
        "answers":  [
                        {
                            "text":  "crank",
                            "points":  20
                        },
                        {
                            "text":  "frank",
                            "points":  13
                        },
                        {
                            "text":  "tank",
                            "points":  13
                        },
                        {
                            "text":  "drank",
                            "points":  10
                        },
                        {
                            "text":  "rank",
                            "points":  7
                        },
                        {
                            "text":  "dank",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  190515,
        "question":  "Name a place where a person might be a no-show.",
        "answers":  [
                        {
                            "text":  "work/meeting",
                            "points":  18
                        },
                        {
                            "text":  "dr./dentist",
                            "points":  16
                        },
                        {
                            "text":  "court/jury duty",
                            "points":  12
                        },
                        {
                            "text":  "restaurant",
                            "points":  10
                        },
                        {
                            "text":  "wedding",
                            "points":  8
                        },
                        {
                            "text":  "school",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190516,
        "question":  "Tell me one word that can get a man excited.",
        "answers":  [
                        {
                            "text":  "sex",
                            "points":  51
                        },
                        {
                            "text":  "breasts",
                            "points":  5
                        },
                        {
                            "text":  "football",
                            "points":  3
                        },
                        {
                            "text":  "money",
                            "points":  3
                        },
                        {
                            "text":  "woman/women",
                            "points":  3
                        },
                        {
                            "text":  "sports",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190517,
        "question":  "Name something you're always sad about when it's over.",
        "answers":  [
                        {
                            "text":  "vacation",
                            "points":  27
                        },
                        {
                            "text":  "gm. of thrones/movie",
                            "points":  12
                        },
                        {
                            "text":  "the weekend",
                            "points":  10
                        },
                        {
                            "text":  "a party",
                            "points":  8
                        },
                        {
                            "text":  "crazy sweaty sex",
                            "points":  6
                        },
                        {
                            "text":  "christmas/holidays",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190518,
        "question":  "Fill in the blank: You're in ______.",
        "answers":  [
                        {
                            "text":  "trouble",
                            "points":  32
                        },
                        {
                            "text":  "love",
                            "points":  14
                        },
                        {
                            "text":  "hot water",
                            "points":  7
                        },
                        {
                            "text":  "deep/deep doo-doo",
                            "points":  5
                        },
                        {
                            "text":  "luck",
                            "points":  5
                        },
                        {
                            "text":  "the mood",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190519,
        "question":  "Name something some people don't like to cross.",
        "answers":  [
                        {
                            "text":  "street/highway",
                            "points":  20
                        },
                        {
                            "text":  "black cat's path",
                            "points":  15
                        },
                        {
                            "text":  "bridge",
                            "points":  10
                        },
                        {
                            "text":  "line/picket line",
                            "points":  8
                        },
                        {
                            "text":  "body of water",
                            "points":  7
                        },
                        {
                            "text":  "their boss",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  190520,
        "question":  "Name a food you swear you have become addicted to.",
        "answers":  [
                        {
                            "text":  "chocolate/candy",
                            "points":  21
                        },
                        {
                            "text":  "pizza",
                            "points":  12
                        },
                        {
                            "text":  "chips",
                            "points":  11
                        },
                        {
                            "text":  "ice cream",
                            "points":  9
                        },
                        {
                            "text":  "steak",
                            "points":  7
                        },
                        {
                            "text":  "cheese",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  190521,
        "question":  "Name a food they'd better have in heaven or you're not going.",
        "answers":  [
                        {
                            "text":  "chocolate/reese's",
                            "points":  17
                        },
                        {
                            "text":  "pizza",
                            "points":  15
                        },
                        {
                            "text":  "steak",
                            "points":  9
                        },
                        {
                            "text":  "chicken/wings",
                            "points":  9
                        },
                        {
                            "text":  "chips/potato chips",
                            "points":  8
                        },
                        {
                            "text":  "cake/cheesecake",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  190522,
        "question":  "Name something you eat or drink that a stripper might use as a stage name.",
        "answers":  [
                        {
                            "text":  "candy",
                            "points":  42
                        },
                        {
                            "text":  "cinnamon",
                            "points":  6
                        },
                        {
                            "text":  "champagne",
                            "points":  5
                        },
                        {
                            "text":  "honey",
                            "points":  5
                        },
                        {
                            "text":  "peaches",
                            "points":  4
                        },
                        {
                            "text":  "cherry",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190523,
        "question":  "Name a place where you see a lot of people in a really bad mood.",
        "answers":  [
                        {
                            "text":  "dmv",
                            "points":  21
                        },
                        {
                            "text":  "my job/work",
                            "points":  13
                        },
                        {
                            "text":  "court",
                            "points":  10
                        },
                        {
                            "text":  "doctor/dentist",
                            "points":  10
                        },
                        {
                            "text":  "i.r.s.",
                            "points":  6
                        },
                        {
                            "text":  "hospital/e.r.",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190524,
        "question":  "Name an occupation that's not for the weak of heart.",
        "answers":  [
                        {
                            "text":  "surgeon/doctor",
                            "points":  28
                        },
                        {
                            "text":  "coroner/mortician",
                            "points":  14
                        },
                        {
                            "text":  "emt/firefighter",
                            "points":  7
                        },
                        {
                            "text":  "the military",
                            "points":  6
                        },
                        {
                            "text":  "sewage worker",
                            "points":  4
                        },
                        {
                            "text":  "high-rise builder",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190525,
        "question":  "Fill in the blank: A vampire might say, \"I hate when I'm sucking someone's blood and they\" what?",
        "answers":  [
                        {
                            "text":  "fart",
                            "points":  21
                        },
                        {
                            "text":  "burp",
                            "points":  12
                        },
                        {
                            "text":  "taste bad/garlicky",
                            "points":  10
                        },
                        {
                            "text":  "die",
                            "points":  8
                        },
                        {
                            "text":  "sneeze",
                            "points":  6
                        },
                        {
                            "text":  "scream",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  190526,
        "question":  "Name something the world's nicest Porta Potti might have in it.",
        "answers":  [
                        {
                            "text":  "air fresh'r/no odor",
                            "points":  23
                        },
                        {
                            "text":  "sink/faucet",
                            "points":  15
                        },
                        {
                            "text":  "bidet",
                            "points":  7
                        },
                        {
                            "text":  "tv",
                            "points":  6
                        },
                        {
                            "text":  "flusher/automatic",
                            "points":  6
                        },
                        {
                            "text":  "handwipes",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190527,
        "question":  "When a man dates a supermodel, he might be surprised that she's super what?",
        "answers":  [
                        {
                            "text":  "dumb",
                            "points":  21
                        },
                        {
                            "text":  "smart/well-read",
                            "points":  14
                        },
                        {
                            "text":  "arrogant/conceited",
                            "points":  9
                        },
                        {
                            "text":  "catty/mean",
                            "points":  8
                        },
                        {
                            "text":  "frigid/prudish",
                            "points":  5
                        },
                        {
                            "text":  "thin/skinny",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190528,
        "question":  "Tell me someone whose words change your life.",
        "answers":  [
                        {
                            "text":  "father",
                            "points":  19
                        },
                        {
                            "text":  "mother",
                            "points":  15
                        },
                        {
                            "text":  "teacher",
                            "points":  11
                        },
                        {
                            "text":  "jesus/god",
                            "points":  7
                        },
                        {
                            "text":  "spouse",
                            "points":  5
                        },
                        {
                            "text":  "clergy",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190529,
        "question":  "Name a TV show you'd be embarrassed to see any of your family members on.",
        "answers":  [
                        {
                            "text":  "jerry springer",
                            "points":  21
                        },
                        {
                            "text":  "cops",
                            "points":  14
                        },
                        {
                            "text":  "bachelor/ette",
                            "points":  8
                        },
                        {
                            "text":  "family feud",
                            "points":  7
                        },
                        {
                            "text":  "real housewives",
                            "points":  5
                        },
                        {
                            "text":  "the kardashians",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190530,
        "question":  "Name a famous family you'd want to play against on \"Family Feud.\"",
        "answers":  [
                        {
                            "text":  "kardashians",
                            "points":  24
                        },
                        {
                            "text":  "obamas",
                            "points":  14
                        },
                        {
                            "text":  "clintons",
                            "points":  8
                        },
                        {
                            "text":  "trumps",
                            "points":  6
                        },
                        {
                            "text":  "kennedys",
                            "points":  4
                        },
                        {
                            "text":  "the addams family",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190531,
        "question":  "If there was an Italian strip club, name an Italian food a stripper might call herself.",
        "answers":  [
                        {
                            "text":  "linguine",
                            "points":  17
                        },
                        {
                            "text":  "cannoli",
                            "points":  11
                        },
                        {
                            "text":  "spaghetti",
                            "points":  10
                        },
                        {
                            "text":  "lasagna",
                            "points":  9
                        },
                        {
                            "text":  "pasta",
                            "points":  6
                        },
                        {
                            "text":  "meatballs",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  190532,
        "question":  "Name a word or phrase that starts with \"pass.\"",
        "answers":  [
                        {
                            "text":  "...out",
                            "points":  19
                        },
                        {
                            "text":  "...the salt",
                            "points":  11
                        },
                        {
                            "text":  "...the buck",
                            "points":  10
                        },
                        {
                            "text":  "...gas",
                            "points":  7
                        },
                        {
                            "text":  "...over",
                            "points":  5
                        },
                        {
                            "text":  "...word",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190533,
        "question":  "Name the sexiest food at the supermarket.",
        "answers":  [
                        {
                            "text":  "bananas",
                            "points":  20
                        },
                        {
                            "text":  "melons",
                            "points":  9
                        },
                        {
                            "text":  "strawberries",
                            "points":  8
                        },
                        {
                            "text":  "cucumbers",
                            "points":  7
                        },
                        {
                            "text":  "live lobsters",
                            "points":  4
                        },
                        {
                            "text":  "oysters",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190534,
        "question":  "We asked 100 men... Name something you love to do to women's feet.",
        "answers":  [
                        {
                            "text":  "massage/rub 'em",
                            "points":  72
                        },
                        {
                            "text":  "tickle 'em",
                            "points":  8
                        },
                        {
                            "text":  "soak 'em",
                            "points":  7
                        },
                        {
                            "text":  "kiss 'em",
                            "points":  7
                        },
                        {
                            "text":  "look at/admire 'em",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  190535,
        "question":  "Name a part of your body you might try to clean out with your finger.",
        "answers":  [
                        {
                            "text":  "waxy ear",
                            "points":  74
                        },
                        {
                            "text":  "booger-laden nose",
                            "points":  13
                        },
                        {
                            "text":  "fingernail",
                            "points":  4
                        },
                        {
                            "text":  "belly button",
                            "points":  4
                        },
                        {
                            "text":  "crusty eye",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190536,
        "question":  "We asked 100 men... Name a reason your ex is your ex.",
        "answers":  [
                        {
                            "text":  "two-bit ho",
                            "points":  70
                        },
                        {
                            "text":  "mean/cray-cray",
                            "points":  10
                        },
                        {
                            "text":  "different interests",
                            "points":  8
                        },
                        {
                            "text":  "pathological liar",
                            "points":  7
                        },
                        {
                            "text":  "long distance",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190537,
        "question":  "We asked 100 women... Name a superhero costume your man is too out of shape to wear.",
        "answers":  [
                        {
                            "text":  "superman",
                            "points":  66
                        },
                        {
                            "text":  "spider-man",
                            "points":  15
                        },
                        {
                            "text":  "batman",
                            "points":  13
                        },
                        {
                            "text":  "captain america",
                            "points":  3
                        },
                        {
                            "text":  "thor",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190538,
        "question":  "We asked 100 married women... What would your husband just love to see you do around the house topless?",
        "answers":  [
                        {
                            "text":  "clean/vacuum",
                            "points":  55
                        },
                        {
                            "text":  "cook",
                            "points":  27
                        },
                        {
                            "text":  "watch tv",
                            "points":  11
                        },
                        {
                            "text":  "brush my long hair",
                            "points":  3
                        },
                        {
                            "text":  "dance",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190539,
        "question":  "We asked 100 married women... Name something you'd do if your husband made reservations for the two of you on a swingers cruise.",
        "answers":  [
                        {
                            "text":  "refuse/cancel",
                            "points":  51
                        },
                        {
                            "text":  "freak/beat him",
                            "points":  25
                        },
                        {
                            "text":  "divorce/leave him",
                            "points":  15
                        },
                        {
                            "text":  "laugh/cute giggle",
                            "points":  5
                        },
                        {
                            "text":  "buy/wear sexy undies",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190540,
        "question":  "If Santa Claus got pulled over by the police, name something they might search.",
        "answers":  [
                        {
                            "text":  "his big sack",
                            "points":  50
                        },
                        {
                            "text":  "his sleigh",
                            "points":  30
                        },
                        {
                            "text":  "his grizzly beard",
                            "points":  10
                        },
                        {
                            "text":  "his suit/hat",
                            "points":  6
                        },
                        {
                            "text":  "his belly rolls",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190541,
        "question":  "We asked 100 married women... Name something your husband had better not be wearing when your book club friends arrive.",
        "answers":  [
                        {
                            "text":  "skivvies/thong",
                            "points":  43
                        },
                        {
                            "text":  "a towel",
                            "points":  28
                        },
                        {
                            "text":  "speedo/ballbushka",
                            "points":  19
                        },
                        {
                            "text":  "nothing/a smile",
                            "points":  6
                        },
                        {
                            "text":  "dress/prom gown",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190542,
        "question":  "We asked 100 men... Name a reason you might suspect you're turning into Popeye.",
        "answers":  [
                        {
                            "text":  "gettin' muscly",
                            "points":  42
                        },
                        {
                            "text":  "devouring spinach",
                            "points":  38
                        },
                        {
                            "text":  "olive oyl/oil",
                            "points":  9
                        },
                        {
                            "text":  "squinty/closed eye",
                            "points":  6
                        },
                        {
                            "text":  "mumbling",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190543,
        "question":  "Give me a three-letter word that starts with the letter Z.",
        "answers":  [
                        {
                            "text":  "zoo",
                            "points":  40
                        },
                        {
                            "text":  "zip",
                            "points":  18
                        },
                        {
                            "text":  "zap",
                            "points":  15
                        },
                        {
                            "text":  "zen",
                            "points":  13
                        },
                        {
                            "text":  "zit",
                            "points":  13
                        }
                    ]
    },
    {
        "id":  190544,
        "question":  "We asked 100 married men... Name something you'd ask your wife to wear that would cause her to start laughing.",
        "answers":  [
                        {
                            "text":  "bikini/swimsuit",
                            "points":  38
                        },
                        {
                            "text":  "costume/bird wings",
                            "points":  30
                        },
                        {
                            "text":  "lingerie/g-string",
                            "points":  16
                        },
                        {
                            "text":  "miniskirt/dress",
                            "points":  10
                        },
                        {
                            "text":  "hat/ball cap",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190545,
        "question":  "What's causing that buzzing in your pants?",
        "answers":  [
                        {
                            "text":  "phone",
                            "points":  85
                        },
                        {
                            "text":  "bugs/wasp",
                            "points":  5
                        },
                        {
                            "text":  "old school pager",
                            "points":  4
                        },
                        {
                            "text":  "tummy/leaky fart",
                            "points":  2
                        },
                        {
                            "text":  "revved-up stiffy",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190546,
        "question":  "Name something about a female giraffe that a male giraffe might say is long and sexy.",
        "answers":  [
                        {
                            "text":  "suckable neck",
                            "points":  76
                        },
                        {
                            "text":  "those gangly legs",
                            "points":  14
                        },
                        {
                            "text":  "hot purple tongue",
                            "points":  4
                        },
                        {
                            "text":  "hooves/outer toe",
                            "points":  2
                        },
                        {
                            "text":  "sweet bushy tail",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190547,
        "question":  "Tell me something sweet that a lot of strippers use as a stage name.",
        "answers":  [
                        {
                            "text":  "candy/cane",
                            "points":  76
                        },
                        {
                            "text":  "sugar/brown sugar",
                            "points":  10
                        },
                        {
                            "text":  "honey/honey buns",
                            "points":  5
                        },
                        {
                            "text":  "cherry",
                            "points":  4
                        },
                        {
                            "text":  "cinnamon",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190548,
        "question":  "Name something a wife might train the dog to detect on her husband by sniffing him.",
        "answers":  [
                        {
                            "text":  "perfume/vagine no. 9",
                            "points":  74
                        },
                        {
                            "text":  "booze",
                            "points":  10
                        },
                        {
                            "text":  "cigs/smoke",
                            "points":  6
                        },
                        {
                            "text":  "drugs/angel dust",
                            "points":  5
                        },
                        {
                            "text":  "food",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190549,
        "question":  "We asked 100 married men... When your wife calls you a big baby, name something you'll start doing to act like one.",
        "answers":  [
                        {
                            "text":  "cry/throw tantrum",
                            "points":  71
                        },
                        {
                            "text":  "pout",
                            "points":  19
                        },
                        {
                            "text":  "spit up",
                            "points":  4
                        },
                        {
                            "text":  "suck my thumb",
                            "points":  2
                        },
                        {
                            "text":  "baby talk",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190550,
        "question":  "Name something James Bond does that is the fantasy of most men.",
        "answers":  [
                        {
                            "text":  "score/pussy galore",
                            "points":  70
                        },
                        {
                            "text":  "drive fast cars",
                            "points":  19
                        },
                        {
                            "text":  "carry/shoot gun",
                            "points":  5
                        },
                        {
                            "text":  "spy",
                            "points":  2
                        },
                        {
                            "text":  "use cool gadgets",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190551,
        "question":  "We asked 100 married women... What does your husband watch you do when he really should be helping you do it?",
        "answers":  [
                        {
                            "text":  "clean/laundry",
                            "points":  66
                        },
                        {
                            "text":  "cook",
                            "points":  16
                        },
                        {
                            "text":  "grocery shop/unload",
                            "points":  7
                        },
                        {
                            "text":  "take care of kids",
                            "points":  5
                        },
                        {
                            "text":  "take out trash",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190552,
        "question":  "Name something a man might do when he's imitating Tarzan.",
        "answers":  [
                        {
                            "text":  "beat his chest",
                            "points":  55
                        },
                        {
                            "text":  "the tarzan yell",
                            "points":  28
                        },
                        {
                            "text":  "swing on rope/vine",
                            "points":  10
                        },
                        {
                            "text":  "wear a loincloth",
                            "points":  3
                        },
                        {
                            "text":  "growl/animal sounds",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190553,
        "question":  "We asked 100 married women... Name something you'd do if your chubby hubby started exercising and became hot.",
        "answers":  [
                        {
                            "text":  "join in/get fit",
                            "points":  48
                        },
                        {
                            "text":  "ride that stud",
                            "points":  23
                        },
                        {
                            "text":  "be happy/attaboy!",
                            "points":  20
                        },
                        {
                            "text":  "hug/kiss more",
                            "points":  4
                        },
                        {
                            "text":  "worry he'll cheat",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190554,
        "question":  "Give me another way people say \"dad.\"",
        "answers":  [
                        {
                            "text":  "pop/pops",
                            "points":  43
                        },
                        {
                            "text":  "father",
                            "points":  19
                        },
                        {
                            "text":  "daddy",
                            "points":  16
                        },
                        {
                            "text":  "papa/pa",
                            "points":  16
                        },
                        {
                            "text":  "dada",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190555,
        "question":  "We asked 100 women... Some nights, what would you rather take to bed with you than a man?",
        "answers":  [
                        {
                            "text":  "my dog/cat",
                            "points":  37
                        },
                        {
                            "text":  "blanket/pillow",
                            "points":  36
                        },
                        {
                            "text":  "book/mag",
                            "points":  21
                        },
                        {
                            "text":  "teddy bear",
                            "points":  2
                        },
                        {
                            "text":  "food",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190556,
        "question":  "We asked 100 married women... Name an animal whose belly looks a lot like your husband's belly.",
        "answers":  [
                        {
                            "text":  "pig",
                            "points":  37
                        },
                        {
                            "text":  "bear",
                            "points":  20
                        },
                        {
                            "text":  "hippo",
                            "points":  16
                        },
                        {
                            "text":  "gorilla",
                            "points":  13
                        },
                        {
                            "text":  "kangaroo",
                            "points":  12
                        }
                    ]
    },
    {
        "id":  190557,
        "question":  "If a magician's rabbit could talk, it might say, \"Hey, it hurts when you pull me out of your\" what?",
        "answers":  [
                        {
                            "text":  "hat",
                            "points":  81
                        },
                        {
                            "text":  "butt/fart lips",
                            "points":  8
                        },
                        {
                            "text":  "pants/zipper",
                            "points":  4
                        },
                        {
                            "text":  "ear",
                            "points":  2
                        },
                        {
                            "text":  "coat/jacket",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190558,
        "question":  "Name something you wish you could hypnotize your boss into saying.",
        "answers":  [
                        {
                            "text":  "raise/promotion",
                            "points":  74
                        },
                        {
                            "text":  "i quit/you run co.",
                            "points":  8
                        },
                        {
                            "text":  "time off/paid!",
                            "points":  8
                        },
                        {
                            "text":  "you rock/you're right",
                            "points":  4
                        },
                        {
                            "text":  "be late/leave early",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190559,
        "question":  "You know it's not working when you're on a date wishing you were where?",
        "answers":  [
                        {
                            "text":  "home/bed with dog",
                            "points":  71
                        },
                        {
                            "text":  "work/nuclear plant",
                            "points":  14
                        },
                        {
                            "text":  "anywhere else",
                            "points":  6
                        },
                        {
                            "text":  "at the dentist",
                            "points":  4
                        },
                        {
                            "text":  "slammer",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190560,
        "question":  "Name something a man might be wearing instead of pants.",
        "answers":  [
                        {
                            "text":  "shorts",
                            "points":  65
                        },
                        {
                            "text":  "kilt",
                            "points":  15
                        },
                        {
                            "text":  "trunks/speedo",
                            "points":  12
                        },
                        {
                            "text":  "undies/boxers",
                            "points":  3
                        },
                        {
                            "text":  "long shirt",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190561,
        "question":  "Name something you'd do if you had a doctor's appointment and no clean underwear.",
        "answers":  [
                        {
                            "text":  "go commando",
                            "points":  58
                        },
                        {
                            "text":  "cancel/reschedule",
                            "points":  17
                        },
                        {
                            "text":  "buy some",
                            "points":  13
                        },
                        {
                            "text":  "wash a pair",
                            "points":  5
                        },
                        {
                            "text":  "wear 'em dirty",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190562,
        "question":  "Name something grandpa hopes grandma leaves on when they make whoopee.",
        "answers":  [
                        {
                            "text":  "clothes/bra",
                            "points":  52
                        },
                        {
                            "text":  "her teeth",
                            "points":  27
                        },
                        {
                            "text":  "tv/murder she wrote",
                            "points":  14
                        },
                        {
                            "text":  "her wig",
                            "points":  2
                        },
                        {
                            "text":  "the lights! yowza!",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190563,
        "question":  "Name a place you stick a thermometer.",
        "answers":  [
                        {
                            "text":  "mouth/under tongue",
                            "points":  52
                        },
                        {
                            "text":  "ear",
                            "points":  15
                        },
                        {
                            "text":  "my chili cannon",
                            "points":  11
                        },
                        {
                            "text":  "underarm",
                            "points":  10
                        },
                        {
                            "text":  "turkey/food",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  190564,
        "question":  "Fill in the blank: I love a piece of juicy what?",
        "answers":  [
                        {
                            "text":  "fruit",
                            "points":  50
                        },
                        {
                            "text":  "meat/chicken",
                            "points":  35
                        },
                        {
                            "text":  "gossip",
                            "points":  4
                        },
                        {
                            "text":  "arse",
                            "points":  4
                        },
                        {
                            "text":  "pie",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190565,
        "question":  "We asked 100 women... Sometimes you think your man's brain is the size of what kind of ball?",
        "answers":  [
                        {
                            "text":  "golf ball",
                            "points":  49
                        },
                        {
                            "text":  "tennis ball",
                            "points":  20
                        },
                        {
                            "text":  "ping-pong ball",
                            "points":  18
                        },
                        {
                            "text":  "baseball",
                            "points":  6
                        },
                        {
                            "text":  "marble",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190566,
        "question":  "Name someone who has seen your bare bottom.",
        "answers":  [
                        {
                            "text":  "my mate/lover",
                            "points":  48
                        },
                        {
                            "text":  "my mom/dad",
                            "points":  34
                        },
                        {
                            "text":  "my doctor",
                            "points":  11
                        },
                        {
                            "text":  "my sibling",
                            "points":  2
                        },
                        {
                            "text":  "my ex",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190567,
        "question":  "We asked 100 women... When a man you don't want to marry proposes to you, tell me an excuse you use to let him down gently.",
        "answers":  [
                        {
                            "text":  "not ready/too soon",
                            "points":  45
                        },
                        {
                            "text":  "wrong fit/just buds",
                            "points":  27
                        },
                        {
                            "text":  "i'm into chicks",
                            "points":  10
                        },
                        {
                            "text":  "i'm taken/married",
                            "points":  8
                        },
                        {
                            "text":  "against marriage",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  190568,
        "question":  "We asked 100 single men... What would you do if your gorgeous date tells you she just got out of prison?",
        "answers":  [
                        {
                            "text":  "try to score",
                            "points":  36
                        },
                        {
                            "text":  "ask what she did",
                            "points":  35
                        },
                        {
                            "text":  "leave/run",
                            "points":  18
                        },
                        {
                            "text":  "google her",
                            "points":  6
                        },
                        {
                            "text":  "vigilant/with wallet",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190569,
        "question":  "Name something about the Wicked Witch that might remind a man of his mother-in-law.",
        "answers":  [
                        {
                            "text":  "cackle/voice",
                            "points":  32
                        },
                        {
                            "text":  "evil, crazy nag",
                            "points":  32
                        },
                        {
                            "text":  "ugly face/nose",
                            "points":  26
                        },
                        {
                            "text":  "her broom",
                            "points":  4
                        },
                        {
                            "text":  "outfit/black hat",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190570,
        "question":  "Name a creature that God might have created just to annoy us.",
        "answers":  [
                        {
                            "text":  "bugs/flies",
                            "points":  76
                        },
                        {
                            "text":  "people/kanye",
                            "points":  11
                        },
                        {
                            "text":  "cats",
                            "points":  4
                        },
                        {
                            "text":  "mice/rats",
                            "points":  3
                        },
                        {
                            "text":  "snakes",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190571,
        "question":  "Name something you do around a campfire that makes you feel like a kid again.",
        "answers":  [
                        {
                            "text":  "cook/eat/s'mores",
                            "points":  66
                        },
                        {
                            "text":  "sing/kumbaya",
                            "points":  14
                        },
                        {
                            "text":  "talk/ghost story",
                            "points":  11
                        },
                        {
                            "text":  "smoke a joint",
                            "points":  3
                        },
                        {
                            "text":  "play in the fire",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190572,
        "question":  "Name a tool a construction worker might put in his pants to impress the ladies.",
        "answers":  [
                        {
                            "text":  "hammer/mallet",
                            "points":  61
                        },
                        {
                            "text":  "screwdriver",
                            "points":  18
                        },
                        {
                            "text":  "wrench",
                            "points":  12
                        },
                        {
                            "text":  "tape measure",
                            "points":  3
                        },
                        {
                            "text":  "drill",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190573,
        "question":  "Name something you ride that might leave you with a sore bottom.",
        "answers":  [
                        {
                            "text":  "horse",
                            "points":  54
                        },
                        {
                            "text":  "bicycle/spin bike",
                            "points":  31
                        },
                        {
                            "text":  "motorcycle",
                            "points":  6
                        },
                        {
                            "text":  "roller coaster",
                            "points":  3
                        },
                        {
                            "text":  "mechanical bull",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190574,
        "question":  "Name something dogs do that a man could get put in jail for doing.",
        "answers":  [
                        {
                            "text":  "public whiz/dump",
                            "points":  49
                        },
                        {
                            "text":  "hump/outside",
                            "points":  25
                        },
                        {
                            "text":  "lick people/own nads",
                            "points":  12
                        },
                        {
                            "text":  "sniff/butts",
                            "points":  8
                        },
                        {
                            "text":  "bite",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190575,
        "question":  "Name an animal print that makes for sexy panties.",
        "answers":  [
                        {
                            "text":  "leopard",
                            "points":  49
                        },
                        {
                            "text":  "cheetah",
                            "points":  19
                        },
                        {
                            "text":  "tiger",
                            "points":  17
                        },
                        {
                            "text":  "zebra",
                            "points":  7
                        },
                        {
                            "text":  "cat/cat paw",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190576,
        "question":  "We asked 100 women... Name something you have a hard time saying no to.",
        "answers":  [
                        {
                            "text":  "food/bean burrito",
                            "points":  49
                        },
                        {
                            "text":  "kids/grandkids",
                            "points":  19
                        },
                        {
                            "text":  "helping others",
                            "points":  12
                        },
                        {
                            "text":  "drinks/boxed wine",
                            "points":  11
                        },
                        {
                            "text":  "sex/with hot chicks",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190577,
        "question":  "If you were a chicken, what would you object to someone doing to you?",
        "answers":  [
                        {
                            "text":  "cooking/eating me",
                            "points":  39
                        },
                        {
                            "text":  "behead'g/kill'g me",
                            "points":  27
                        },
                        {
                            "text":  "plucking me",
                            "points":  21
                        },
                        {
                            "text":  "stealing my eggs",
                            "points":  7
                        },
                        {
                            "text":  "caging me",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190578,
        "question":  "Fill in the blank: Some politicians belong in the White House. Others belong in the ______ house.",
        "answers":  [
                        {
                            "text":  "jailhouse/big house",
                            "points":  36
                        },
                        {
                            "text":  "doghouse",
                            "points":  27
                        },
                        {
                            "text":  "outhouse",
                            "points":  25
                        },
                        {
                            "text":  "nuthouse",
                            "points":  6
                        },
                        {
                            "text":  "whorehouse",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190579,
        "question":  "We asked 100 men... Name a country you'd travel to if you wanted to learn how to become a better lover.",
        "answers":  [
                        {
                            "text":  "france",
                            "points":  34
                        },
                        {
                            "text":  "italy",
                            "points":  26
                        },
                        {
                            "text":  "argentina",
                            "points":  13
                        },
                        {
                            "text":  "brazil",
                            "points":  12
                        },
                        {
                            "text":  "spain",
                            "points":  11
                        }
                    ]
    },
    {
        "id":  190580,
        "question":  "Name something you would never pick up with your bare hands.",
        "answers":  [
                        {
                            "text":  "turd/my wife's",
                            "points":  66
                        },
                        {
                            "text":  "animal/carcass",
                            "points":  18
                        },
                        {
                            "text":  "hot coals",
                            "points":  5
                        },
                        {
                            "text":  "hot pan/pot",
                            "points":  4
                        },
                        {
                            "text":  "lava",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190581,
        "question":  "Name a city that you'd hate to be in during a major blackout.",
        "answers":  [
                        {
                            "text":  "new york",
                            "points":  58
                        },
                        {
                            "text":  "los angeles",
                            "points":  18
                        },
                        {
                            "text":  "chicago",
                            "points":  13
                        },
                        {
                            "text":  "detroit",
                            "points":  3
                        },
                        {
                            "text":  "las vegas",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190582,
        "question":  "Name something that's harder to do in a hammock than in a bed.",
        "answers":  [
                        {
                            "text":  "\"pet the peacock\"",
                            "points":  57
                        },
                        {
                            "text":  "sleep/on stomach",
                            "points":  15
                        },
                        {
                            "text":  "turn/roll over",
                            "points":  12
                        },
                        {
                            "text":  "get in and out",
                            "points":  8
                        },
                        {
                            "text":  "jump",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190583,
        "question":  "Name a part of your body you clean out.",
        "answers":  [
                        {
                            "text":  "my ears",
                            "points":  50
                        },
                        {
                            "text":  "my mouth/teeth",
                            "points":  16
                        },
                        {
                            "text":  "my crack/poop chute",
                            "points":  11
                        },
                        {
                            "text":  "my belly button",
                            "points":  10
                        },
                        {
                            "text":  "my nose",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  190584,
        "question":  "Name something you grab onto when you're making out in the front seat of a car.",
        "answers":  [
                        {
                            "text":  "partner/nipple",
                            "points":  49
                        },
                        {
                            "text":  "steering wheel",
                            "points":  31
                        },
                        {
                            "text":  "seat/headrest",
                            "points":  8
                        },
                        {
                            "text":  "dashboard",
                            "points":  5
                        },
                        {
                            "text":  "seat belt",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190585,
        "question":  "Sometimes, Christmas in California is so hot, you can see Santa Claus wearing nothing but a what?",
        "answers":  [
                        {
                            "text":  "speedo/swimsuit",
                            "points":  44
                        },
                        {
                            "text":  "santa hat",
                            "points":  28
                        },
                        {
                            "text":  "thong/pair of undies",
                            "points":  19
                        },
                        {
                            "text":  "smile",
                            "points":  2
                        },
                        {
                            "text":  "pair of flip-flops",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190586,
        "question":  "We asked 100 women... Fill in the blank: I don't like a man's underwear if it's too what?",
        "answers":  [
                        {
                            "text":  "big/baggy",
                            "points":  38
                        },
                        {
                            "text":  "tight/snug",
                            "points":  24
                        },
                        {
                            "text":  "dirty/smelly",
                            "points":  22
                        },
                        {
                            "text":  "small/skimpy",
                            "points":  7
                        },
                        {
                            "text":  "full of holes",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190587,
        "question":  "A wife tells her husband, \"Yeah, I've got a big bottom, but you've got a big\" what?",
        "answers":  [
                        {
                            "text":  "gut, fat boy!",
                            "points":  36
                        },
                        {
                            "text":  "head/ego",
                            "points":  32
                        },
                        {
                            "text":  "mouth",
                            "points":  15
                        },
                        {
                            "text":  "nose",
                            "points":  8
                        },
                        {
                            "text":  "butt too!",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190588,
        "question":  "Name something you do in the shower that starts with the letter S.",
        "answers":  [
                        {
                            "text":  "sing",
                            "points":  33
                        },
                        {
                            "text":  "shave",
                            "points":  28
                        },
                        {
                            "text":  "shampoo",
                            "points":  18
                        },
                        {
                            "text":  "soap/up",
                            "points":  10
                        },
                        {
                            "text":  "shower",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  190589,
        "question":  "Name a part of a female dog that a male dog looks at and thinks, \"That's hot.\"",
        "answers":  [
                        {
                            "text":  "tail/pungent pooper",
                            "points":  78
                        },
                        {
                            "text":  "long tongue/mouth",
                            "points":  5
                        },
                        {
                            "text":  "soft ears",
                            "points":  4
                        },
                        {
                            "text":  "slender gams",
                            "points":  4
                        },
                        {
                            "text":  "her inviting vulva",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190590,
        "question":  "Name something you step over at a wild party.",
        "answers":  [
                        {
                            "text":  "people/drunks",
                            "points":  60
                        },
                        {
                            "text":  "corn-riddled vomit",
                            "points":  21
                        },
                        {
                            "text":  "drinks/bottles",
                            "points":  6
                        },
                        {
                            "text":  "garbage",
                            "points":  5
                        },
                        {
                            "text":  "foot-long vibrator",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190591,
        "question":  "Name a quality a woman wants in a man, but she'll settle for it in a dog.",
        "answers":  [
                        {
                            "text":  "loyal/faithful",
                            "points":  60
                        },
                        {
                            "text":  "companionship",
                            "points":  10
                        },
                        {
                            "text":  "affection/licker",
                            "points":  9
                        },
                        {
                            "text":  "obeys/listens",
                            "points":  8
                        },
                        {
                            "text":  "unconditional love",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  190592,
        "question":  "Name something you would do to your boss if you won the lottery.",
        "answers":  [
                        {
                            "text":  "wave bye/quit",
                            "points":  58
                        },
                        {
                            "text":  "tell off/flip off",
                            "points":  17
                        },
                        {
                            "text":  "buy co./fire boss",
                            "points":  13
                        },
                        {
                            "text":  "spend on boss/share $",
                            "points":  3
                        },
                        {
                            "text":  "beat/smack 'em",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190593,
        "question":  "Name something that turns a houseguest into a house pest.",
        "answers":  [
                        {
                            "text":  "overstay",
                            "points":  56
                        },
                        {
                            "text":  "messy pig/body lice",
                            "points":  23
                        },
                        {
                            "text":  "talk'g/complain'g",
                            "points":  10
                        },
                        {
                            "text":  "eat'g everything",
                            "points":  3
                        },
                        {
                            "text":  "stealing",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190594,
        "question":  "Name something that might fall out of a person's ear.",
        "answers":  [
                        {
                            "text":  "huge wad of wax",
                            "points":  41
                        },
                        {
                            "text":  "earring",
                            "points":  25
                        },
                        {
                            "text":  "hearing aid",
                            "points":  13
                        },
                        {
                            "text":  "earbuds",
                            "points":  10
                        },
                        {
                            "text":  "bug/a roach",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190595,
        "question":  "Name something at an amusement park it would feel great to ride naked.",
        "answers":  [
                        {
                            "text":  "roller coaster",
                            "points":  40
                        },
                        {
                            "text":  "water ride/flume",
                            "points":  32
                        },
                        {
                            "text":  "merry-go-round",
                            "points":  11
                        },
                        {
                            "text":  "ferris wheel",
                            "points":  7
                        },
                        {
                            "text":  "swing/swinging ship",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190596,
        "question":  "Tell me a reason your car might be getting towed.",
        "answers":  [
                        {
                            "text":  "broke down/flat",
                            "points":  40
                        },
                        {
                            "text":  "parked illegally",
                            "points":  27
                        },
                        {
                            "text":  "accident",
                            "points":  10
                        },
                        {
                            "text":  "unpaid tickets",
                            "points":  10
                        },
                        {
                            "text":  "repo/payment due",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  190597,
        "question":  "Name a reason you skip church that you'd never tell your pastor.",
        "answers":  [
                        {
                            "text":  "hungover/drunk",
                            "points":  30
                        },
                        {
                            "text":  "gettin' lucky",
                            "points":  22
                        },
                        {
                            "text":  "catchin' some z's",
                            "points":  21
                        },
                        {
                            "text":  "watch'g the game/tv",
                            "points":  19
                        },
                        {
                            "text":  "fishing/hunting",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190598,
        "question":  "Name something you'd be surprised grandma would wear instead of her granny panties.",
        "answers":  [
                        {
                            "text":  "thong/g-string",
                            "points":  75
                        },
                        {
                            "text":  "nothing/commando",
                            "points":  7
                        },
                        {
                            "text":  "bikini/swimsuit",
                            "points":  6
                        },
                        {
                            "text":  "leather/lederhosen",
                            "points":  3
                        },
                        {
                            "text":  "grandpa's/boxers",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190599,
        "question":  "Name something you ride that might cause you to walk funny afterwards.",
        "answers":  [
                        {
                            "text":  "horse",
                            "points":  58
                        },
                        {
                            "text":  "amusement ride",
                            "points":  14
                        },
                        {
                            "text":  "bicycle",
                            "points":  10
                        },
                        {
                            "text":  "bull/mechanical",
                            "points":  9
                        },
                        {
                            "text":  "my lover/jon hamm",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190600,
        "question":  "We asked 100 women... Name a good way to destroy your cheating man's cell phone.",
        "answers":  [
                        {
                            "text":  "water/flush it",
                            "points":  51
                        },
                        {
                            "text":  "run over it",
                            "points":  15
                        },
                        {
                            "text":  "step on it",
                            "points":  12
                        },
                        {
                            "text":  "burn/microwave it",
                            "points":  9
                        },
                        {
                            "text":  "hammer it",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  190601,
        "question":  "A wife might give her husband one more what?",
        "answers":  [
                        {
                            "text":  "chance",
                            "points":  54
                        },
                        {
                            "text":  "kiss",
                            "points":  22
                        },
                        {
                            "text":  "helping of food",
                            "points":  10
                        },
                        {
                            "text":  "child",
                            "points":  3
                        },
                        {
                            "text":  "chore/errand",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190602,
        "question":  "Name something you'd be surprised to find out your grandparents were making.",
        "answers":  [
                        {
                            "text":  "hot sticky whoopee",
                            "points":  46
                        },
                        {
                            "text":  "booze/moonshine",
                            "points":  22
                        },
                        {
                            "text":  "drugs/pot cookies",
                            "points":  15
                        },
                        {
                            "text":  "a baby",
                            "points":  6
                        },
                        {
                            "text":  "counterfeit $",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190603,
        "question":  "We asked 100 men... Name a place you'd be surprised your boss asked you to go with him after work.",
        "answers":  [
                        {
                            "text":  "strip joint",
                            "points":  35
                        },
                        {
                            "text":  "bar/nightclub",
                            "points":  30
                        },
                        {
                            "text":  "his house/boudoir",
                            "points":  18
                        },
                        {
                            "text":  "ho house",
                            "points":  6
                        },
                        {
                            "text":  "church",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190604,
        "question":  "We asked 100 married women... Name something that keeps you from strangling your husband.",
        "answers":  [
                        {
                            "text":  "i love him",
                            "points":  31
                        },
                        {
                            "text":  "the law/jail time",
                            "points":  27
                        },
                        {
                            "text":  "our kids",
                            "points":  15
                        },
                        {
                            "text":  "paycheck/works hard",
                            "points":  13
                        },
                        {
                            "text":  "smile/cute face",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  190605,
        "question":  "Name a reason grandpa says Judge Judy is his kind of woman.",
        "answers":  [
                        {
                            "text":  "tough/feisty",
                            "points":  65
                        },
                        {
                            "text":  "wise/fair decisions",
                            "points":  10
                        },
                        {
                            "text":  "old like him",
                            "points":  9
                        },
                        {
                            "text":  "hot big-lip ginger",
                            "points":  4
                        },
                        {
                            "text":  "loud sexy voice",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190606,
        "question":  "Name something a chimp does that you hope the kid you're babysitting doesn't do.",
        "answers":  [
                        {
                            "text":  "poo & throw it/pee",
                            "points":  46
                        },
                        {
                            "text":  "climb/swing/jump",
                            "points":  23
                        },
                        {
                            "text":  "scratch/pick bugs",
                            "points":  14
                        },
                        {
                            "text":  "pick nose",
                            "points":  4
                        },
                        {
                            "text":  "screech",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190607,
        "question":  "We surveyed 100 married men... Between us, what is the least sexiest part of your wife?",
        "answers":  [
                        {
                            "text":  "feet/toe fungus",
                            "points":  43
                        },
                        {
                            "text":  "belly",
                            "points":  32
                        },
                        {
                            "text":  "jugs/pepperoni nips",
                            "points":  7
                        },
                        {
                            "text":  "putrid/furry pits",
                            "points":  5
                        },
                        {
                            "text":  "mouth/her 3 teeth",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190608,
        "question":  "We asked 100 women... Name something you wish you could do like a man.",
        "answers":  [
                        {
                            "text":  "pee/standing",
                            "points":  36
                        },
                        {
                            "text":  "earn $$$/good job",
                            "points":  24
                        },
                        {
                            "text":  "lift/weights",
                            "points":  15
                        },
                        {
                            "text":  "repairs/use tools",
                            "points":  13
                        },
                        {
                            "text":  "sleep",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190609,
        "question":  "Name something that rhymes with \"stakeout.\"",
        "answers":  [
                        {
                            "text":  "make out",
                            "points":  35
                        },
                        {
                            "text":  "fake out",
                            "points":  22
                        },
                        {
                            "text":  "take out",
                            "points":  18
                        },
                        {
                            "text":  "shake out",
                            "points":  11
                        },
                        {
                            "text":  "bake out",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190610,
        "question":  "When grandpa goes to bed at night, name something he hopes will happen in the morning.",
        "answers":  [
                        {
                            "text":  "he'll wake up",
                            "points":  76
                        },
                        {
                            "text":  "morning wood/sex",
                            "points":  4
                        },
                        {
                            "text":  "breakfast/coffee",
                            "points":  3
                        },
                        {
                            "text":  "nice b.m./whiz",
                            "points":  3
                        },
                        {
                            "text":  "stand/get outta bed",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190611,
        "question":  "We asked 100 women... I would leave my man in a minute if I ever saw him holding a what?",
        "answers":  [
                        {
                            "text":  "chick",
                            "points":  47
                        },
                        {
                            "text":  "gun/weapon",
                            "points":  23
                        },
                        {
                            "text":  "dude",
                            "points":  10
                        },
                        {
                            "text":  "joint/drugs",
                            "points":  6
                        },
                        {
                            "text":  "nasty critter/snake",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190612,
        "question":  "Name something a man might buy his girlfriend a pair of.",
        "answers":  [
                        {
                            "text":  "earrings",
                            "points":  43
                        },
                        {
                            "text":  "panties/edible",
                            "points":  26
                        },
                        {
                            "text":  "shoes/boots",
                            "points":  12
                        },
                        {
                            "text":  "socks/fishnets",
                            "points":  5
                        },
                        {
                            "text":  "double-d implants",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190613,
        "question":  "Name something you shouldn't laugh right in the middle of.",
        "answers":  [
                        {
                            "text":  "funeral",
                            "points":  40
                        },
                        {
                            "text":  "church/sermon",
                            "points":  25
                        },
                        {
                            "text":  "sex",
                            "points":  14
                        },
                        {
                            "text":  "a joke",
                            "points":  5
                        },
                        {
                            "text":  "opera/song",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190614,
        "question":  "Name a reason a frog croaks.",
        "answers":  [
                        {
                            "text":  "horny for hotties",
                            "points":  43
                        },
                        {
                            "text":  "hungry/ate fly",
                            "points":  19
                        },
                        {
                            "text":  "talk/communicate",
                            "points":  16
                        },
                        {
                            "text":  "hurt/stepped on",
                            "points":  5
                        },
                        {
                            "text":  "it's nighttime",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190615,
        "question":  "Name something the pool boy brings with him when he cleans a hot housewife's pool.",
        "answers":  [
                        {
                            "text":  "pippi dongstocking",
                            "points":  31
                        },
                        {
                            "text":  "swimsuit/speedo",
                            "points":  25
                        },
                        {
                            "text":  "lotion/oil",
                            "points":  14
                        },
                        {
                            "text":  "pool supplies/net",
                            "points":  13
                        },
                        {
                            "text":  "towels",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190616,
        "question":  "Fill in the blank: ______ attack.",
        "answers":  [
                        {
                            "text":  "heart attack",
                            "points":  55
                        },
                        {
                            "text":  "panic attack",
                            "points":  13
                        },
                        {
                            "text":  "shark attack",
                            "points":  6
                        },
                        {
                            "text":  "zack attack",
                            "points":  6
                        },
                        {
                            "text":  "big mac attack",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  190617,
        "question":  "Name a one-word text a man sends his girlfriend to tell her that he's breaking up with her.",
        "answers":  [
                        {
                            "text":  "bye",
                            "points":  39
                        },
                        {
                            "text":  "done",
                            "points":  25
                        },
                        {
                            "text":  "over",
                            "points":  13
                        },
                        {
                            "text":  "adios",
                            "points":  5
                        },
                        {
                            "text":  "\"deuces\"",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190618,
        "question":  "We asked 100 married men... Name a bird that sounds like your mother-in-law.",
        "answers":  [
                        {
                            "text":  "crow",
                            "points":  33
                        },
                        {
                            "text":  "chicken/hen",
                            "points":  17
                        },
                        {
                            "text":  "parrot/parakeet",
                            "points":  16
                        },
                        {
                            "text":  "dodo",
                            "points":  12
                        },
                        {
                            "text":  "woodpecker",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  190619,
        "question":  "Name a place where you see happy wives with their unhappy husbands.",
        "answers":  [
                        {
                            "text":  "store/quilt shop",
                            "points":  67
                        },
                        {
                            "text":  "theater/opera",
                            "points":  7
                        },
                        {
                            "text":  "church",
                            "points":  4
                        },
                        {
                            "text":  "salon/spa",
                            "points":  4
                        },
                        {
                            "text":  "party/wedding",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190620,
        "question":  "Name something grandma tells grandpa not to do in front of the grandkids.",
        "answers":  [
                        {
                            "text":  "blow butt bombs",
                            "points":  38
                        },
                        {
                            "text":  "cuss",
                            "points":  36
                        },
                        {
                            "text":  "tongue kiss her",
                            "points":  4
                        },
                        {
                            "text":  "pick his nose",
                            "points":  4
                        },
                        {
                            "text":  "scratch/his crack",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190621,
        "question":  "Name something a camper might have with him in his sleeping bag at night.",
        "answers":  [
                        {
                            "text":  "flashlight",
                            "points":  56
                        },
                        {
                            "text":  "gun",
                            "points":  13
                        },
                        {
                            "text":  "knife",
                            "points":  8
                        },
                        {
                            "text":  "cell phone",
                            "points":  4
                        },
                        {
                            "text":  "person/nude babes",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190622,
        "question":  "Name something a wife doesn't want her husband to sit on in the nude.",
        "answers":  [
                        {
                            "text":  "couch/white sofa",
                            "points":  54
                        },
                        {
                            "text":  "table/during meal",
                            "points":  11
                        },
                        {
                            "text":  "kitchen counter",
                            "points":  8
                        },
                        {
                            "text":  "chair",
                            "points":  7
                        },
                        {
                            "text":  "clean bed",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190623,
        "question":  "Tell me something that Santa might say he won't miss when he retires.",
        "answers":  [
                        {
                            "text":  "travel/all night",
                            "points":  29
                        },
                        {
                            "text":  "whiney bratty kids",
                            "points":  24
                        },
                        {
                            "text":  "chimneys/rooftops",
                            "points":  13
                        },
                        {
                            "text":  "nad-shrink'g weather",
                            "points":  10
                        },
                        {
                            "text":  "bad cookies/milk",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  190624,
        "question":  "Name something that might be growing on you.",
        "answers":  [
                        {
                            "text":  "hair/hipster beard",
                            "points":  59
                        },
                        {
                            "text":  "massive moles",
                            "points":  6
                        },
                        {
                            "text":  "clump of warts",
                            "points":  6
                        },
                        {
                            "text":  "bacteria/fungus",
                            "points":  5
                        },
                        {
                            "text":  "taste of kale/food",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190625,
        "question":  "Fill in the blank: Making what?",
        "answers":  [
                        {
                            "text":  "love",
                            "points":  41
                        },
                        {
                            "text":  "money",
                            "points":  17
                        },
                        {
                            "text":  "whoopee",
                            "points":  9
                        },
                        {
                            "text":  "bacon",
                            "points":  7
                        },
                        {
                            "text":  "hay",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  190626,
        "question":  "Name something a 100-year-old bank robber might accidentally leave in the bank when he makes his getaway.",
        "answers":  [
                        {
                            "text":  "teeth/dentures",
                            "points":  37
                        },
                        {
                            "text":  "cane/walker",
                            "points":  12
                        },
                        {
                            "text":  "gun/musket",
                            "points":  12
                        },
                        {
                            "text":  "money",
                            "points":  11
                        },
                        {
                            "text":  "his glasses",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  190627,
        "question":  "Name the first thing a woman might buy right after a guy dumps her.",
        "answers":  [
                        {
                            "text":  "ice cream/food",
                            "points":  33
                        },
                        {
                            "text":  "clothes/shoes",
                            "points":  26
                        },
                        {
                            "text":  "booze/boone's farm",
                            "points":  10
                        },
                        {
                            "text":  "boob job/surgery",
                            "points":  5
                        },
                        {
                            "text":  "ring/jewelry",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190628,
        "question":  "Give me another way people say \"broke.\"",
        "answers":  [
                        {
                            "text":  "busted",
                            "points":  22
                        },
                        {
                            "text":  "tapped out",
                            "points":  21
                        },
                        {
                            "text":  "poor",
                            "points":  13
                        },
                        {
                            "text":  "spent",
                            "points":  12
                        },
                        {
                            "text":  "bankrupt",
                            "points":  11
                        }
                    ]
    },
    {
        "id":  190629,
        "question":  "Name something painful you made love on that seemed like a good idea at the time.",
        "answers":  [
                        {
                            "text":  "floor/rug",
                            "points":  27
                        },
                        {
                            "text":  "ground/beach/pebbles",
                            "points":  26
                        },
                        {
                            "text":  "car hood/seat",
                            "points":  12
                        },
                        {
                            "text":  "table",
                            "points":  10
                        },
                        {
                            "text":  "washing machine",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190630,
        "question":  "Name something people put down.",
        "answers":  [
                        {
                            "text":  "other people",
                            "points":  34
                        },
                        {
                            "text":  "cup/drink",
                            "points":  14
                        },
                        {
                            "text":  "phone",
                            "points":  10
                        },
                        {
                            "text":  "animal/pet",
                            "points":  9
                        },
                        {
                            "text":  "book/newspaper",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  190631,
        "question":  "Fill in the blank: ______ your fingers.",
        "answers":  [
                        {
                            "text":  "cross",
                            "points":  22
                        },
                        {
                            "text":  "lick",
                            "points":  20
                        },
                        {
                            "text":  "snap",
                            "points":  17
                        },
                        {
                            "text":  "wiggle",
                            "points":  8
                        },
                        {
                            "text":  "count/count on",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  190632,
        "question":  "Fill in the blank: Honk if you're what?",
        "answers":  [
                        {
                            "text":  "horny",
                            "points":  46
                        },
                        {
                            "text":  "happy",
                            "points":  15
                        },
                        {
                            "text":  "hot/sexy",
                            "points":  6
                        },
                        {
                            "text":  "here",
                            "points":  3
                        },
                        {
                            "text":  "mad/annoyed",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190633,
        "question":  "Fill in the blank: A man might have one too many what?",
        "answers":  [
                        {
                            "text":  "drinks/of tequila",
                            "points":  27
                        },
                        {
                            "text":  "chicks/wives",
                            "points":  18
                        },
                        {
                            "text":  "cars/trucks",
                            "points":  15
                        },
                        {
                            "text":  "tools",
                            "points":  9
                        },
                        {
                            "text":  "ties",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190634,
        "question":  "If your boss fired you, name something you might throw out the window on your way out.",
        "answers":  [
                        {
                            "text":  "documents/files",
                            "points":  20
                        },
                        {
                            "text":  "my boss",
                            "points":  15
                        },
                        {
                            "text":  "computer/laptop",
                            "points":  14
                        },
                        {
                            "text":  "my i.d. badge",
                            "points":  13
                        },
                        {
                            "text":  "pencil/pen",
                            "points":  11
                        }
                    ]
    },
    {
        "id":  190635,
        "question":  "Tell me another way people say the word \"drunk.\"",
        "answers":  [
                        {
                            "text":  "wasted",
                            "points":  45
                        },
                        {
                            "text":  "inebriated",
                            "points":  10
                        },
                        {
                            "text":  "smashed",
                            "points":  7
                        },
                        {
                            "text":  "tipsy",
                            "points":  5
                        },
                        {
                            "text":  "hammered",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190636,
        "question":  "Name a place you see people squirming in their seats.",
        "answers":  [
                        {
                            "text":  "theater/movies",
                            "points":  27
                        },
                        {
                            "text":  "church",
                            "points":  18
                        },
                        {
                            "text":  "dentist/doctor",
                            "points":  12
                        },
                        {
                            "text":  "court",
                            "points":  9
                        },
                        {
                            "text":  "airplane",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190637,
        "question":  "Name something people pull the plug on.",
        "answers":  [
                        {
                            "text":  "tv/cable",
                            "points":  23
                        },
                        {
                            "text":  "drain/sink/tub",
                            "points":  22
                        },
                        {
                            "text":  "patient/life support",
                            "points":  12
                        },
                        {
                            "text":  "relationship",
                            "points":  10
                        },
                        {
                            "text":  "lamp/light",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190638,
        "question":  "Fill in the blank: Hold the what?",
        "answers":  [
                        {
                            "text":  "phone",
                            "points":  26
                        },
                        {
                            "text":  "door",
                            "points":  14
                        },
                        {
                            "text":  "mayo",
                            "points":  10
                        },
                        {
                            "text":  "elevator",
                            "points":  9
                        },
                        {
                            "text":  "line",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  190639,
        "question":  "Name a creature you see and can't tell if the two of them are fighting or mating.",
        "answers":  [
                        {
                            "text":  "birds/ducks",
                            "points":  19
                        },
                        {
                            "text":  "bugs/bees",
                            "points":  14
                        },
                        {
                            "text":  "cats",
                            "points":  12
                        },
                        {
                            "text":  "dogs",
                            "points":  10
                        },
                        {
                            "text":  "snakes",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  190640,
        "question":  "Birds gotta fly, fish gotta swim, and men gotta what?",
        "answers":  [
                        {
                            "text":  "eat",
                            "points":  21
                        },
                        {
                            "text":  "watch sports/tv",
                            "points":  15
                        },
                        {
                            "text":  "pork/breed",
                            "points":  10
                        },
                        {
                            "text":  "work",
                            "points":  7
                        },
                        {
                            "text":  "fart",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  190641,
        "question":  "Give me an \"L\" word that describes your boss.",
        "answers":  [
                        {
                            "text":  "lazy",
                            "points":  18
                        },
                        {
                            "text":  "loser",
                            "points":  12
                        },
                        {
                            "text":  "lovely",
                            "points":  11
                        },
                        {
                            "text":  "likable",
                            "points":  11
                        },
                        {
                            "text":  "loud",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  190642,
        "question":  "Name a kind of house you might find a man in.",
        "answers":  [
                        {
                            "text":  "doghouse",
                            "points":  21
                        },
                        {
                            "text":  "whorehouse",
                            "points":  17
                        },
                        {
                            "text":  "frat house",
                            "points":  7
                        },
                        {
                            "text":  "log house/cabin",
                            "points":  6
                        },
                        {
                            "text":  "apt./penthouse",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  190643,
        "question":  "Name something you'd hate to discover you'd been sitting on.",
        "answers":  [
                        {
                            "text":  "gum",
                            "points":  28
                        },
                        {
                            "text":  "tack/nail",
                            "points":  8
                        },
                        {
                            "text":  "food/choc. pudding",
                            "points":  7
                        },
                        {
                            "text":  "bird doo/poop",
                            "points":  6
                        },
                        {
                            "text":  "wet paint",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  190644,
        "question":  "Name something that if one person starts doing it, others will, too.",
        "answers":  [
                        {
                            "text":  "yawning",
                            "points":  33
                        },
                        {
                            "text":  "humming/singing",
                            "points":  6
                        },
                        {
                            "text":  "drinking",
                            "points":  4
                        },
                        {
                            "text":  "smoking",
                            "points":  4
                        },
                        {
                            "text":  "clapping",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190645,
        "question":  "Name the strangest place you've ever made love.",
        "answers":  [
                        {
                            "text":  "car/truck",
                            "points":  25
                        },
                        {
                            "text":  "park/playground",
                            "points":  8
                        },
                        {
                            "text":  "bathroom/toilet",
                            "points":  7
                        },
                        {
                            "text":  "woods/tent",
                            "points":  5
                        },
                        {
                            "text":  "beach/ocean",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190646,
        "question":  "Name a word that rhymes with \"teeny.\"",
        "answers":  [
                        {
                            "text":  "weenie",
                            "points":  71
                        },
                        {
                            "text":  "beanie",
                            "points":  15
                        },
                        {
                            "text":  "meanie",
                            "points":  12
                        },
                        {
                            "text":  "genie",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190647,
        "question":  "Name something you put your foot in.",
        "answers":  [
                        {
                            "text":  "shoes/slippers",
                            "points":  67
                        },
                        {
                            "text":  "my mouth",
                            "points":  16
                        },
                        {
                            "text":  "socks",
                            "points":  14
                        },
                        {
                            "text":  "a pool",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190648,
        "question":  "Name a meat you carve at the table.",
        "answers":  [
                        {
                            "text":  "turkey",
                            "points":  64
                        },
                        {
                            "text":  "beef/steak",
                            "points":  22
                        },
                        {
                            "text":  "ham",
                            "points":  12
                        },
                        {
                            "text":  "lamb/mutton",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190649,
        "question":  "Give me a word that rhymes with \"tube.\"",
        "answers":  [
                        {
                            "text":  "lube",
                            "points":  60
                        },
                        {
                            "text":  "boob",
                            "points":  18
                        },
                        {
                            "text":  "cube",
                            "points":  18
                        },
                        {
                            "text":  "rube",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190650,
        "question":  "Fill in the blank: You're in deep what?",
        "answers":  [
                        {
                            "text":  "doo-doo",
                            "points":  53
                        },
                        {
                            "text":  "trouble",
                            "points":  22
                        },
                        {
                            "text":  "water",
                            "points":  21
                        },
                        {
                            "text":  "sleep",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190651,
        "question":  "Real or fictional, name a famous Sanders.",
        "answers":  [
                        {
                            "text":  "colonel sanders",
                            "points":  52
                        },
                        {
                            "text":  "bernie sanders",
                            "points":  44
                        },
                        {
                            "text":  "larry sanders",
                            "points":  2
                        },
                        {
                            "text":  "barry sanders",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190652,
        "question":  "We asked 100 single men... It's good if your date removes her clothes. It's bad if she also removes her what?",
        "answers":  [
                        {
                            "text":  "teeth",
                            "points":  39
                        },
                        {
                            "text":  "wedding ring",
                            "points":  35
                        },
                        {
                            "text":  "wig/hair",
                            "points":  17
                        },
                        {
                            "text":  "braces",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  190653,
        "question":  "Name something supermodels like to chew up and spit out.",
        "answers":  [
                        {
                            "text":  "food/gum",
                            "points":  79
                        },
                        {
                            "text":  "mates/lovers",
                            "points":  14
                        },
                        {
                            "text":  "models/competition",
                            "points":  4
                        },
                        {
                            "text":  "agents/handlers",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190654,
        "question":  "We asked 100 married men... You kiss your mom on the cheek. You kiss your wife on the what?",
        "answers":  [
                        {
                            "text":  "lips/mouth",
                            "points":  79
                        },
                        {
                            "text":  "neck",
                            "points":  12
                        },
                        {
                            "text":  "butt/cinnamon ring",
                            "points":  5
                        },
                        {
                            "text":  "nose",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190655,
        "question":  "Name a color of marshmallow Peeps.",
        "answers":  [
                        {
                            "text":  "yellow",
                            "points":  74
                        },
                        {
                            "text":  "pink",
                            "points":  17
                        },
                        {
                            "text":  "white",
                            "points":  6
                        },
                        {
                            "text":  "purple",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190656,
        "question":  "Name someone a child worries will automatically know when he does something bad.",
        "answers":  [
                        {
                            "text":  "mom",
                            "points":  70
                        },
                        {
                            "text":  "dad",
                            "points":  15
                        },
                        {
                            "text":  "santa claus",
                            "points":  9
                        },
                        {
                            "text":  "god/jesus",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190657,
        "question":  "Name something of which there's always plenty of at a good party.",
        "answers":  [
                        {
                            "text":  "drinks/booze",
                            "points":  63
                        },
                        {
                            "text":  "food/shrimp",
                            "points":  27
                        },
                        {
                            "text":  "people/babes",
                            "points":  5
                        },
                        {
                            "text":  "laughter",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190658,
        "question":  "When a cow sees the farmer walking toward it, what does she hope the farmer's going to do?",
        "answers":  [
                        {
                            "text":  "feed her",
                            "points":  63
                        },
                        {
                            "text":  "milk her teats",
                            "points":  24
                        },
                        {
                            "text":  "walk past her",
                            "points":  9
                        },
                        {
                            "text":  "pet/hug her",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190659,
        "question":  "Name another word for \"pancake.\"",
        "answers":  [
                        {
                            "text":  "flapjack",
                            "points":  57
                        },
                        {
                            "text":  "hotcake",
                            "points":  30
                        },
                        {
                            "text":  "crepe",
                            "points":  9
                        },
                        {
                            "text":  "griddlecake",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190660,
        "question":  "We asked 100 single women... What might a date say he has several of that would make you more interested?",
        "answers":  [
                        {
                            "text":  "cars",
                            "points":  31
                        },
                        {
                            "text":  "houses",
                            "points":  30
                        },
                        {
                            "text":  "dollars/bank acct.",
                            "points":  28
                        },
                        {
                            "text":  "pets/horses",
                            "points":  10
                        }
                    ]
    },
    {
        "id":  190661,
        "question":  "Name something you land.",
        "answers":  [
                        {
                            "text":  "a plane",
                            "points":  91
                        },
                        {
                            "text":  "a fish",
                            "points":  3
                        },
                        {
                            "text":  "dismount/gymnast move",
                            "points":  2
                        },
                        {
                            "text":  "a job",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190662,
        "question":  "Name something that might be going around.",
        "answers":  [
                        {
                            "text":  "flu/cold",
                            "points":  89
                        },
                        {
                            "text":  "raging std",
                            "points":  4
                        },
                        {
                            "text":  "gossip/rumor",
                            "points":  3
                        },
                        {
                            "text":  "merry-go-round",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190663,
        "question":  "Name something that rises in the morning.",
        "answers":  [
                        {
                            "text":  "the sun",
                            "points":  87
                        },
                        {
                            "text":  "my silly 6-inch",
                            "points":  5
                        },
                        {
                            "text":  "me out of bed",
                            "points":  4
                        },
                        {
                            "text":  "bird/rooster",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190664,
        "question":  "Tell me something around the house that you empty.",
        "answers":  [
                        {
                            "text":  "trash can",
                            "points":  84
                        },
                        {
                            "text":  "ashtray",
                            "points":  7
                        },
                        {
                            "text":  "dishwasher",
                            "points":  5
                        },
                        {
                            "text":  "ice cube tray",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190665,
        "question":  "Name a reason a guy's nickname might be \"The Hulk.\"",
        "answers":  [
                        {
                            "text":  "big/muscular",
                            "points":  83
                        },
                        {
                            "text":  "bad temper",
                            "points":  10
                        },
                        {
                            "text":  "greenish skin",
                            "points":  3
                        },
                        {
                            "text":  "no shirt/purple pants",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190666,
        "question":  "Name something in the home a man should not be afraid to kill.",
        "answers":  [
                        {
                            "text":  "bug/spider",
                            "points":  81
                        },
                        {
                            "text":  "mouse/rat",
                            "points":  12
                        },
                        {
                            "text":  "snake",
                            "points":  3
                        },
                        {
                            "text":  "intruder",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190667,
        "question":  "Name something a clown has that's floppy.",
        "answers":  [
                        {
                            "text":  "shoes/feet",
                            "points":  81
                        },
                        {
                            "text":  "ears",
                            "points":  9
                        },
                        {
                            "text":  "hat",
                            "points":  6
                        },
                        {
                            "text":  "hair",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190668,
        "question":  "If a man argues with his wife in the morning, what will he be doing alone that night?",
        "answers":  [
                        {
                            "text":  "sleeping",
                            "points":  80
                        },
                        {
                            "text":  "eating",
                            "points":  13
                        },
                        {
                            "text":  "having sex",
                            "points":  3
                        },
                        {
                            "text":  "drinking",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190669,
        "question":  "We asked 100 single women... Name an article of clothing you'd take off on a first date.",
        "answers":  [
                        {
                            "text":  "jacket/coat",
                            "points":  77
                        },
                        {
                            "text":  "shoes",
                            "points":  16
                        },
                        {
                            "text":  "sweater",
                            "points":  3
                        },
                        {
                            "text":  "bra",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190670,
        "question":  "Name something with fins.",
        "answers":  [
                        {
                            "text":  "shark/fish",
                            "points":  77
                        },
                        {
                            "text":  "dolphin",
                            "points":  14
                        },
                        {
                            "text":  "classic cars",
                            "points":  5
                        },
                        {
                            "text":  "scuba divers",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190671,
        "question":  "Name the occupation of someone you make an appointment to see when you need to get something off your chest.",
        "answers":  [
                        {
                            "text":  "shrink/counselor",
                            "points":  74
                        },
                        {
                            "text":  "doctor/surgeon",
                            "points":  14
                        },
                        {
                            "text":  "clergy",
                            "points":  7
                        },
                        {
                            "text":  "beautician/waxer",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190672,
        "question":  "Name something you find in a well.",
        "answers":  [
                        {
                            "text":  "water",
                            "points":  72
                        },
                        {
                            "text":  "coins/pennies",
                            "points":  22
                        },
                        {
                            "text":  "trapped person",
                            "points":  2
                        },
                        {
                            "text":  "a bucket",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190673,
        "question":  "Tell me something everyone knows about George Washington.",
        "answers":  [
                        {
                            "text":  "first president",
                            "points":  72
                        },
                        {
                            "text":  "cherry tree/can't lie",
                            "points":  11
                        },
                        {
                            "text":  "wooden teeth",
                            "points":  9
                        },
                        {
                            "text":  "on dollar bill",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  190674,
        "question":  "Name a game that can be played with just a pencil and paper.",
        "answers":  [
                        {
                            "text":  "tic-tac-toe",
                            "points":  66
                        },
                        {
                            "text":  "hangman",
                            "points":  28
                        },
                        {
                            "text":  "pictionary",
                            "points":  2
                        },
                        {
                            "text":  "word search",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190675,
        "question":  "We asked 100 men... Name something you borrow to impress your date.",
        "answers":  [
                        {
                            "text":  "car/stretch limo",
                            "points":  66
                        },
                        {
                            "text":  "stylin' duds/shoes",
                            "points":  22
                        },
                        {
                            "text":  "cash",
                            "points":  6
                        },
                        {
                            "text":  "aftershave/cologne",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190676,
        "question":  "Name something a movie director might yell out on the set.",
        "answers":  [
                        {
                            "text":  "cut",
                            "points":  65
                        },
                        {
                            "text":  "action",
                            "points":  26
                        },
                        {
                            "text":  "quiet",
                            "points":  4
                        },
                        {
                            "text":  "take...",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190677,
        "question":  "When a baby cries, it might be saying, \"I need a\" what \"right now.\"",
        "answers":  [
                        {
                            "text":  "bottle/boob/meal",
                            "points":  60
                        },
                        {
                            "text":  "diaper change",
                            "points":  24
                        },
                        {
                            "text":  "hug/cuddle",
                            "points":  8
                        },
                        {
                            "text":  "nap",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  190678,
        "question":  "Tell me something that gets stuck in a tree.",
        "answers":  [
                        {
                            "text":  "cat",
                            "points":  58
                        },
                        {
                            "text":  "kite",
                            "points":  35
                        },
                        {
                            "text":  "frisbee",
                            "points":  3
                        },
                        {
                            "text":  "balloon",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190679,
        "question":  "Fill in the blank: If a farmer's car breaks down, he might have to go into town on a what?",
        "answers":  [
                        {
                            "text":  "a tractor",
                            "points":  56
                        },
                        {
                            "text":  "a horse",
                            "points":  35
                        },
                        {
                            "text":  "a cow",
                            "points":  4
                        },
                        {
                            "text":  "a combine",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190680,
        "question":  "Name an excuse you use to miss work that you can only use a few times.",
        "answers":  [
                        {
                            "text":  "illness/dr. appt.",
                            "points":  51
                        },
                        {
                            "text":  "death in family",
                            "points":  27
                        },
                        {
                            "text":  "car trouble",
                            "points":  17
                        },
                        {
                            "text":  "weather",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190681,
        "question":  "Name something that starts with the word \"German.\"",
        "answers":  [
                        {
                            "text":  "chocolate/cake",
                            "points":  49
                        },
                        {
                            "text":  "shepherd",
                            "points":  36
                        },
                        {
                            "text":  "measles",
                            "points":  8
                        },
                        {
                            "text":  "potato salad",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190682,
        "question":  "We asked 100 married men... Name something your wife doesn't bother putting on anymore.",
        "answers":  [
                        {
                            "text":  "makeup/lipstick",
                            "points":  43
                        },
                        {
                            "text":  "lingerie/crotchless",
                            "points":  39
                        },
                        {
                            "text":  "jewelry",
                            "points":  11
                        },
                        {
                            "text":  "bathing suit/bikini",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190683,
        "question":  "Name something a person takes off.",
        "answers":  [
                        {
                            "text":  "clothes/hooker heels",
                            "points":  89
                        },
                        {
                            "text":  "glasses",
                            "points":  4
                        },
                        {
                            "text":  "work",
                            "points":  2
                        },
                        {
                            "text":  "pounds/weight",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190684,
        "question":  "Name something you only have one of, so you should take care of it.",
        "answers":  [
                        {
                            "text":  "body/life",
                            "points":  85
                        },
                        {
                            "text":  "family/mom",
                            "points":  7
                        },
                        {
                            "text":  "home",
                            "points":  3
                        },
                        {
                            "text":  "car",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190685,
        "question":  "Name something a man's new wife takes off before going to bed that makes her unrecognizable.",
        "answers":  [
                        {
                            "text":  "makeup",
                            "points":  83
                        },
                        {
                            "text":  "wig",
                            "points":  10
                        },
                        {
                            "text":  "bra/padded",
                            "points":  2
                        },
                        {
                            "text":  "glasses",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190686,
        "question":  "Name a place people don't want to go until they lose weight.",
        "answers":  [
                        {
                            "text":  "beach/hawaii",
                            "points":  75
                        },
                        {
                            "text":  "gym",
                            "points":  12
                        },
                        {
                            "text":  "swimming pool",
                            "points":  5
                        },
                        {
                            "text":  "class reunion",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190687,
        "question":  "Name a place where you hear someone say \"Bend over.\"",
        "answers":  [
                        {
                            "text":  "doctor's office",
                            "points":  73
                        },
                        {
                            "text":  "bedroom",
                            "points":  8
                        },
                        {
                            "text":  "jail/prison",
                            "points":  8
                        },
                        {
                            "text":  "gym/yoga class",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  190688,
        "question":  "Name something on her man that a woman might adjust.",
        "answers":  [
                        {
                            "text":  "tie/clothes",
                            "points":  72
                        },
                        {
                            "text":  "'tude/personality",
                            "points":  10
                        },
                        {
                            "text":  "hair",
                            "points":  9
                        },
                        {
                            "text":  "weight/size/diet",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  190689,
        "question":  "Name something women buy to make their hands look good.",
        "answers":  [
                        {
                            "text":  "lotion",
                            "points":  68
                        },
                        {
                            "text":  "nail polish",
                            "points":  16
                        },
                        {
                            "text":  "rings/diamonds",
                            "points":  9
                        },
                        {
                            "text":  "gloves",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190690,
        "question":  "Name a building that has many beds in it.",
        "answers":  [
                        {
                            "text":  "hotel",
                            "points":  67
                        },
                        {
                            "text":  "hospital",
                            "points":  23
                        },
                        {
                            "text":  "dorm",
                            "points":  5
                        },
                        {
                            "text":  "military barracks",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190691,
        "question":  "Name something specific you need to make a scarecrow.",
        "answers":  [
                        {
                            "text":  "straw",
                            "points":  66
                        },
                        {
                            "text":  "hat/clothes",
                            "points":  21
                        },
                        {
                            "text":  "pole/broomstick",
                            "points":  7
                        },
                        {
                            "text":  "corn husks",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190692,
        "question":  "Name something specific that a mom gets tired of picking up.",
        "answers":  [
                        {
                            "text":  "clothes/shoes",
                            "points":  62
                        },
                        {
                            "text":  "toys",
                            "points":  29
                        },
                        {
                            "text":  "food/crumbs",
                            "points":  4
                        },
                        {
                            "text":  "baby/kids",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190693,
        "question":  "Give me a word that rhymes with \"moose.\"",
        "answers":  [
                        {
                            "text":  "goose",
                            "points":  60
                        },
                        {
                            "text":  "loose",
                            "points":  29
                        },
                        {
                            "text":  "noose",
                            "points":  5
                        },
                        {
                            "text":  "caboose",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190694,
        "question":  "Name something you hang on the Christmas tree that can be eaten.",
        "answers":  [
                        {
                            "text":  "candy cane",
                            "points":  60
                        },
                        {
                            "text":  "popcorn",
                            "points":  25
                        },
                        {
                            "text":  "cookie/gingerbread",
                            "points":  9
                        },
                        {
                            "text":  "fruit/orange",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190695,
        "question":  "If the husband is forced to spend the night in the doghouse, where does the dog sleep?",
        "answers":  [
                        {
                            "text":  "bedroom/with wife",
                            "points":  60
                        },
                        {
                            "text":  "in doghouse too",
                            "points":  17
                        },
                        {
                            "text":  "the couch",
                            "points":  12
                        },
                        {
                            "text":  "porch/yard",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  190696,
        "question":  "We asked 100 women... If you were married to a circus clown, name a place you'd tell him to lose the nose.",
        "answers":  [
                        {
                            "text":  "home/in the sack",
                            "points":  58
                        },
                        {
                            "text":  "sunday church svc.",
                            "points":  21
                        },
                        {
                            "text":  "restaurant",
                            "points":  16
                        },
                        {
                            "text":  "wedding",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190697,
        "question":  "Name something you shouldn't pick at when you're at the dinner table.",
        "answers":  [
                        {
                            "text":  "nose",
                            "points":  58
                        },
                        {
                            "text":  "food/someone else's",
                            "points":  20
                        },
                        {
                            "text":  "scab/sore",
                            "points":  11
                        },
                        {
                            "text":  "teeth",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  190698,
        "question":  "Name something customers might squeeze while in the grocery store.",
        "answers":  [
                        {
                            "text":  "fruit/produce",
                            "points":  57
                        },
                        {
                            "text":  "charmin/t.p.",
                            "points":  24
                        },
                        {
                            "text":  "bread",
                            "points":  14
                        },
                        {
                            "text":  "shopping cart handle",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190699,
        "question":  "Name something you might not like about a person's handshake.",
        "answers":  [
                        {
                            "text":  "sweaty/wet",
                            "points":  56
                        },
                        {
                            "text":  "weak/loose",
                            "points":  29
                        },
                        {
                            "text":  "too tight/hard",
                            "points":  10
                        },
                        {
                            "text":  "cough/sneezed on",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190700,
        "question":  "Name a musical instrument a cowboy might play around the campfire.",
        "answers":  [
                        {
                            "text":  "guitar",
                            "points":  55
                        },
                        {
                            "text":  "harmonica",
                            "points":  26
                        },
                        {
                            "text":  "banjo",
                            "points":  14
                        },
                        {
                            "text":  "fiddle",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190701,
        "question":  "Name a party game that might be more fun to play in the nude.",
        "answers":  [
                        {
                            "text":  "twister",
                            "points":  53
                        },
                        {
                            "text":  "cards/poker",
                            "points":  37
                        },
                        {
                            "text":  "truth or dare",
                            "points":  5
                        },
                        {
                            "text":  "charades",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190702,
        "question":  "Fill in the blank: My ex sent me an e-mail that said, \"Having a wonderful time. Wish you were\" what?",
        "answers":  [
                        {
                            "text":  "here",
                            "points":  52
                        },
                        {
                            "text":  "dead",
                            "points":  38
                        },
                        {
                            "text":  "happy",
                            "points":  4
                        },
                        {
                            "text":  "not here/far away",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190703,
        "question":  "We asked 100 men... Name something used to crush nuts you wouldn't want a woman to use on you.",
        "answers":  [
                        {
                            "text":  "nutcracker",
                            "points":  49
                        },
                        {
                            "text":  "hammer/mallet",
                            "points":  30
                        },
                        {
                            "text":  "pliers",
                            "points":  12
                        },
                        {
                            "text":  "clamp",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  190704,
        "question":  "Everyone wants the newest model when it comes to what?",
        "answers":  [
                        {
                            "text":  "cell phones",
                            "points":  48
                        },
                        {
                            "text":  "cars",
                            "points":  44
                        },
                        {
                            "text":  "computers/tablets",
                            "points":  3
                        },
                        {
                            "text":  "women/men",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190705,
        "question":  "Name a kind of place to which flowers are frequently delivered.",
        "answers":  [
                        {
                            "text":  "cemetery/funeral",
                            "points":  48
                        },
                        {
                            "text":  "hospital",
                            "points":  25
                        },
                        {
                            "text":  "work/office",
                            "points":  17
                        },
                        {
                            "text":  "home",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  190706,
        "question":  "We asked 100 women... Name something you really wouldn't want to see a 100-year-old man wearing.",
        "answers":  [
                        {
                            "text":  "speedo",
                            "points":  45
                        },
                        {
                            "text":  "shorts/daisy dukes",
                            "points":  22
                        },
                        {
                            "text":  "g-string/thong",
                            "points":  19
                        },
                        {
                            "text":  "skinny jeans",
                            "points":  11
                        }
                    ]
    },
    {
        "id":  190707,
        "question":  "Name something men do to disguise the fact that they're losing their hair.",
        "answers":  [
                        {
                            "text":  "wear hat",
                            "points":  43
                        },
                        {
                            "text":  "comb-over",
                            "points":  40
                        },
                        {
                            "text":  "toupee/wig",
                            "points":  10
                        },
                        {
                            "text":  "cut short/shave it",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190708,
        "question":  "Name something you try to avoid when camping in the woods.",
        "answers":  [
                        {
                            "text":  "bears",
                            "points":  42
                        },
                        {
                            "text":  "bugs",
                            "points":  33
                        },
                        {
                            "text":  "snakes",
                            "points":  20
                        },
                        {
                            "text":  "skunks",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190709,
        "question":  "We asked 100 women... It's bad if you catch your man cheating on you. It's worse if he's cheating on you with who?",
        "answers":  [
                        {
                            "text":  "my bestie",
                            "points":  42
                        },
                        {
                            "text":  "my mother",
                            "points":  26
                        },
                        {
                            "text":  "my sister/twin",
                            "points":  19
                        },
                        {
                            "text":  "a dude/my brother",
                            "points":  10
                        }
                    ]
    },
    {
        "id":  190710,
        "question":  "Name something that comes in a basket.",
        "answers":  [
                        {
                            "text":  "food/eggs/fruit",
                            "points":  83
                        },
                        {
                            "text":  "flowers/plant",
                            "points":  7
                        },
                        {
                            "text":  "puppies/animals",
                            "points":  3
                        },
                        {
                            "text":  "laundry/clothes",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190711,
        "question":  "Name something grandpa might do while he's sleeping that would wake him up.",
        "answers":  [
                        {
                            "text":  "snore",
                            "points":  79
                        },
                        {
                            "text":  "fart/liquid",
                            "points":  11
                        },
                        {
                            "text":  "fall/roll out",
                            "points":  3
                        },
                        {
                            "text":  "sleepwalk",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190712,
        "question":  "Name something a centerfold model might catch.",
        "answers":  [
                        {
                            "text":  "illness/gonorrhea",
                            "points":  77
                        },
                        {
                            "text":  "a man/rich one",
                            "points":  14
                        },
                        {
                            "text":  "tips/money",
                            "points":  3
                        },
                        {
                            "text":  "your eye/a look",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190713,
        "question":  "Name an amusement park ride that you could compare to marriage.",
        "answers":  [
                        {
                            "text":  "roller coaster",
                            "points":  77
                        },
                        {
                            "text":  "merry-go-round",
                            "points":  14
                        },
                        {
                            "text":  "ferris wheel",
                            "points":  3
                        },
                        {
                            "text":  "bumper cars",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190714,
        "question":  "Name a piece of sports equipment that's made of leather.",
        "answers":  [
                        {
                            "text":  "glove/mitt",
                            "points":  76
                        },
                        {
                            "text":  "ball/football",
                            "points":  16
                        },
                        {
                            "text":  "shoes",
                            "points":  2
                        },
                        {
                            "text":  "saddle",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190715,
        "question":  "Name a place where you hear a bell ringing.",
        "answers":  [
                        {
                            "text":  "church",
                            "points":  75
                        },
                        {
                            "text":  "school",
                            "points":  17
                        },
                        {
                            "text":  "store/salvat'n army",
                            "points":  2
                        },
                        {
                            "text":  "home",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190716,
        "question":  "Name a homemade gift people like to give that no one likes to receive.",
        "answers":  [
                        {
                            "text":  "fruitcake/food",
                            "points":  75
                        },
                        {
                            "text":  "clothes/knitted",
                            "points":  16
                        },
                        {
                            "text":  "art/crafts",
                            "points":  3
                        },
                        {
                            "text":  "a card",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190717,
        "question":  "Name a fruit or vegetable a sex education teacher might use in class for demonstration purposes.",
        "answers":  [
                        {
                            "text":  "banana",
                            "points":  73
                        },
                        {
                            "text":  "cucumber/pickle",
                            "points":  18
                        },
                        {
                            "text":  "zucchini",
                            "points":  3
                        },
                        {
                            "text":  "apple",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190718,
        "question":  "Name something you'd hate to find out a coworker has that's bigger than yours.",
        "answers":  [
                        {
                            "text":  "paycheck/bonus",
                            "points":  69
                        },
                        {
                            "text":  "house",
                            "points":  20
                        },
                        {
                            "text":  "car",
                            "points":  4
                        },
                        {
                            "text":  "iq/brain",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190719,
        "question":  "Name something little kids stick down the toilet that clogs it.",
        "answers":  [
                        {
                            "text":  "toy/teddy bear",
                            "points":  65
                        },
                        {
                            "text":  "t.p./paper",
                            "points":  23
                        },
                        {
                            "text":  "clothes/diaper",
                            "points":  4
                        },
                        {
                            "text":  "crayons",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190720,
        "question":  "Name something into which a person might take a plunge.",
        "answers":  [
                        {
                            "text":  "swimming pool",
                            "points":  64
                        },
                        {
                            "text":  "lake/body of water",
                            "points":  18
                        },
                        {
                            "text":  "marriage",
                            "points":  12
                        },
                        {
                            "text":  "new job/career",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190721,
        "question":  "Name something that follows the word \"roller.\"",
        "answers":  [
                        {
                            "text":  "coaster",
                            "points":  63
                        },
                        {
                            "text":  "skates/skater",
                            "points":  19
                        },
                        {
                            "text":  "derby",
                            "points":  8
                        },
                        {
                            "text":  "blade",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  190722,
        "question":  "Name something grown men do in the swimming pool that's very immature.",
        "answers":  [
                        {
                            "text":  "pee",
                            "points":  59
                        },
                        {
                            "text":  "bubble fart",
                            "points":  19
                        },
                        {
                            "text":  "splash",
                            "points":  10
                        },
                        {
                            "text":  "dunk people",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  190723,
        "question":  "Name something a plumber uses to do his job.",
        "answers":  [
                        {
                            "text":  "wrench",
                            "points":  57
                        },
                        {
                            "text":  "plunger",
                            "points":  28
                        },
                        {
                            "text":  "snake",
                            "points":  8
                        },
                        {
                            "text":  "pipe",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190724,
        "question":  "Name something frogs do that Miss Piggy hates Kermit doing in the bedroom.",
        "answers":  [
                        {
                            "text":  "croak/ribbit",
                            "points":  56
                        },
                        {
                            "text":  "jump",
                            "points":  22
                        },
                        {
                            "text":  "tongue out/eat bug",
                            "points":  14
                        },
                        {
                            "text":  "poop/pee",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190725,
        "question":  "We asked 100 married men... Fill in the blank: My wife and I make sweet ______ together.",
        "answers":  [
                        {
                            "text":  "love",
                            "points":  54
                        },
                        {
                            "text":  "music",
                            "points":  29
                        },
                        {
                            "text":  "cookies/food",
                            "points":  7
                        },
                        {
                            "text":  "babies/kids",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  190726,
        "question":  "Grandma might yell at grandpa, \"You old fool, you're wearing my\" what?",
        "answers":  [
                        {
                            "text":  "clothes/undies",
                            "points":  54
                        },
                        {
                            "text":  "glasses",
                            "points":  20
                        },
                        {
                            "text":  "dentures",
                            "points":  20
                        },
                        {
                            "text":  "hearing aid",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190727,
        "question":  "If you were a horse, name a reason you'd throw your rider.",
        "answers":  [
                        {
                            "text":  "they're a fatty",
                            "points":  51
                        },
                        {
                            "text":  "kicks me/spurs",
                            "points":  24
                        },
                        {
                            "text":  "whips/hits me",
                            "points":  18
                        },
                        {
                            "text":  "i got scared/noise",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190728,
        "question":  "Name something a man carries in his pocket that Tarzan couldn't.",
        "answers":  [
                        {
                            "text":  "wallet/money",
                            "points":  50
                        },
                        {
                            "text":  "cell phone",
                            "points":  25
                        },
                        {
                            "text":  "keys",
                            "points":  18
                        },
                        {
                            "text":  "pocketknife",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190729,
        "question":  "Tell me a specific part of your body with a dimple.",
        "answers":  [
                        {
                            "text":  "cheeks",
                            "points":  49
                        },
                        {
                            "text":  "butt",
                            "points":  29
                        },
                        {
                            "text":  "chin",
                            "points":  15
                        },
                        {
                            "text":  "thigh",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190730,
        "question":  "Name something a stripper might tell a man to remove from his pockets before a lap dance.",
        "answers":  [
                        {
                            "text":  "his money/wallet",
                            "points":  41
                        },
                        {
                            "text":  "his keys",
                            "points":  41
                        },
                        {
                            "text":  "his phone",
                            "points":  8
                        },
                        {
                            "text":  "his knife",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  190731,
        "question":  "Name the worst thing a child could get from another child at school.",
        "answers":  [
                        {
                            "text":  "disease/lice",
                            "points":  80
                        },
                        {
                            "text":  "bullied/black eye",
                            "points":  7
                        },
                        {
                            "text":  "drugs",
                            "points":  6
                        },
                        {
                            "text":  "pregnant",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190732,
        "question":  "Name something that has scales.",
        "answers":  [
                        {
                            "text":  "fish",
                            "points":  79
                        },
                        {
                            "text":  "reptile/snake",
                            "points":  10
                        },
                        {
                            "text":  "piano/music",
                            "points":  3
                        },
                        {
                            "text":  "weigh station",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190733,
        "question":  "Fill in the blank: ______ license.",
        "answers":  [
                        {
                            "text":  "driver's license",
                            "points":  77
                        },
                        {
                            "text":  "fishing license",
                            "points":  13
                        },
                        {
                            "text":  "marriage license",
                            "points":  3
                        },
                        {
                            "text":  "hunting license",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190734,
        "question":  "Fill in the blank: A parent's favorite child is the one who isn't asking for what?",
        "answers":  [
                        {
                            "text":  "money",
                            "points":  73
                        },
                        {
                            "text":  "a car",
                            "points":  11
                        },
                        {
                            "text":  "trouble",
                            "points":  7
                        },
                        {
                            "text":  "candy",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190735,
        "question":  "Name something a wife tells her husband to put on.",
        "answers":  [
                        {
                            "text":  "duds/elephant thong",
                            "points":  72
                        },
                        {
                            "text":  "cologne/aftershave",
                            "points":  10
                        },
                        {
                            "text":  "deodorant",
                            "points":  8
                        },
                        {
                            "text":  "wedding ring",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190736,
        "question":  "Name something people hide under the mattress.",
        "answers":  [
                        {
                            "text":  "money",
                            "points":  71
                        },
                        {
                            "text":  "gun/weapon",
                            "points":  11
                        },
                        {
                            "text":  "girly mag/porn",
                            "points":  11
                        },
                        {
                            "text":  "clothes/jammies",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190737,
        "question":  "Name something a person with hemorrhoids might reach for.",
        "answers":  [
                        {
                            "text":  "prep. h/pain pills",
                            "points":  69
                        },
                        {
                            "text":  "cushion/pillow",
                            "points":  20
                        },
                        {
                            "text":  "their burning booty",
                            "points":  4
                        },
                        {
                            "text":  "baby wipes",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190738,
        "question":  "What might be sold at a store called Strippers\"R\"Us?",
        "answers":  [
                        {
                            "text":  "getup/pasties/heels",
                            "points":  68
                        },
                        {
                            "text":  "sex toys/whips",
                            "points":  18
                        },
                        {
                            "text":  "stripper poles",
                            "points":  6
                        },
                        {
                            "text":  "paint stripper",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190739,
        "question":  "You thought you found a piece of chocolate on the floor. But it turned out to be what?",
        "answers":  [
                        {
                            "text":  "a turdlet",
                            "points":  66
                        },
                        {
                            "text":  "dirt/mud",
                            "points":  21
                        },
                        {
                            "text":  "a bug/roach",
                            "points":  5
                        },
                        {
                            "text":  "dog food/treat",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190740,
        "question":  "Name a place in a fancy restaurant that a maître d' might seat you if you don't tip him.",
        "answers":  [
                        {
                            "text":  "by/in bathroom",
                            "points":  64
                        },
                        {
                            "text":  "by the kitchen",
                            "points":  20
                        },
                        {
                            "text":  "outside/by dumpster",
                            "points":  6
                        },
                        {
                            "text":  "in a corner",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190741,
        "question":  "We asked 100 married men... For my birthday, I wish my wife would put a big bow on what?",
        "answers":  [
                        {
                            "text":  "herself/her jugs",
                            "points":  61
                        },
                        {
                            "text":  "a new car",
                            "points":  26
                        },
                        {
                            "text":  "a big screen tv",
                            "points":  4
                        },
                        {
                            "text":  "a bike",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190742,
        "question":  "Name something that gets decorated.",
        "answers":  [
                        {
                            "text":  "christmas tree",
                            "points":  61
                        },
                        {
                            "text":  "house/room/wall",
                            "points":  19
                        },
                        {
                            "text":  "cake",
                            "points":  13
                        },
                        {
                            "text":  "soldier",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190743,
        "question":  "Name something babies are born without.",
        "answers":  [
                        {
                            "text":  "teeth",
                            "points":  59
                        },
                        {
                            "text":  "hair",
                            "points":  27
                        },
                        {
                            "text":  "clothes",
                            "points":  6
                        },
                        {
                            "text":  "ability to speak",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190744,
        "question":  "At the Pillsbury Doughboy's funeral, someone might say, \"He had the best\" what?",
        "answers":  [
                        {
                            "text":  "tasting buns/dough",
                            "points":  58
                        },
                        {
                            "text":  "giggle/smile",
                            "points":  24
                        },
                        {
                            "text":  "pokable belly",
                            "points":  9
                        },
                        {
                            "text":  "job/commercials",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190745,
        "question":  "Name something a hospital nurse might turn on.",
        "answers":  [
                        {
                            "text":  "medical equip/i.v.",
                            "points":  45
                        },
                        {
                            "text":  "lights",
                            "points":  40
                        },
                        {
                            "text":  "tv",
                            "points":  6
                        },
                        {
                            "text":  "the patient",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190746,
        "question":  "Name a word that starts with \"temp.\"",
        "answers":  [
                        {
                            "text":  "temperature",
                            "points":  45
                        },
                        {
                            "text":  "temporary",
                            "points":  25
                        },
                        {
                            "text":  "temptation",
                            "points":  17
                        },
                        {
                            "text":  "temper",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  190747,
        "question":  "Name something that has a hole in the middle.",
        "answers":  [
                        {
                            "text":  "donut",
                            "points":  79
                        },
                        {
                            "text":  "lifesaver/candy",
                            "points":  7
                        },
                        {
                            "text":  "bagel",
                            "points":  5
                        },
                        {
                            "text":  "tire",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190748,
        "question":  "Fill in the blank: Oh, my aching what?",
        "answers":  [
                        {
                            "text":  "back",
                            "points":  79
                        },
                        {
                            "text":  "head",
                            "points":  6
                        },
                        {
                            "text":  "heart",
                            "points":  6
                        },
                        {
                            "text":  "feet",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190749,
        "question":  "Name a place where you always seem to get in the slowest line.",
        "answers":  [
                        {
                            "text":  "store",
                            "points":  79
                        },
                        {
                            "text":  "coffee shop/rest.",
                            "points":  6
                        },
                        {
                            "text":  "dmv",
                            "points":  5
                        },
                        {
                            "text":  "bank",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190750,
        "question":  "Name something that gets tangled.",
        "answers":  [
                        {
                            "text":  "hair",
                            "points":  78
                        },
                        {
                            "text":  "wires/cords/cables",
                            "points":  8
                        },
                        {
                            "text":  "fishing line",
                            "points":  4
                        },
                        {
                            "text":  "necklace/chain",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190751,
        "question":  "Name something that goes flat.",
        "answers":  [
                        {
                            "text":  "tire",
                            "points":  74
                        },
                        {
                            "text":  "soda",
                            "points":  14
                        },
                        {
                            "text":  "champagne",
                            "points":  3
                        },
                        {
                            "text":  "hair",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190752,
        "question":  "Name something of her man's an angry woman might let the air out of.",
        "answers":  [
                        {
                            "text":  "tires",
                            "points":  71
                        },
                        {
                            "text":  "ego/in bedroom",
                            "points":  16
                        },
                        {
                            "text":  "ball/basketball",
                            "points":  4
                        },
                        {
                            "text":  "blow-up doll",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190753,
        "question":  "Some women stuff their bras. What do men stuff?",
        "answers":  [
                        {
                            "text":  "their undies",
                            "points":  70
                        },
                        {
                            "text":  "face/mouth/belly",
                            "points":  14
                        },
                        {
                            "text":  "wallet",
                            "points":  6
                        },
                        {
                            "text":  "food/peppers",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190754,
        "question":  "Name something dogs like to sniff that you sure don't.",
        "answers":  [
                        {
                            "text":  "butts",
                            "points":  69
                        },
                        {
                            "text":  "poop",
                            "points":  13
                        },
                        {
                            "text":  "ripe groin",
                            "points":  9
                        },
                        {
                            "text":  "grass/ground",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190755,
        "question":  "Name something of yours you wish was better looking.",
        "answers":  [
                        {
                            "text":  "my bod/face/hair",
                            "points":  69
                        },
                        {
                            "text":  "my car/truck",
                            "points":  11
                        },
                        {
                            "text":  "my house/kitchen",
                            "points":  10
                        },
                        {
                            "text":  "my lawn",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190756,
        "question":  "Name something wives steal from their husbands.",
        "answers":  [
                        {
                            "text":  "money/credit card",
                            "points":  68
                        },
                        {
                            "text":  "clothes/shirts",
                            "points":  14
                        },
                        {
                            "text":  "their hearts",
                            "points":  7
                        },
                        {
                            "text":  "razors",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190757,
        "question":  "Name something a stripper might use in her act on the Fourth of July.",
        "answers":  [
                        {
                            "text":  "fireworks/sparklers",
                            "points":  67
                        },
                        {
                            "text":  "flag/flagpole",
                            "points":  22
                        },
                        {
                            "text":  "streamers",
                            "points":  3
                        },
                        {
                            "text":  "patriotic pasties",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190758,
        "question":  "Fill in the blank: Pull my what?",
        "answers":  [
                        {
                            "text":  "finger",
                            "points":  67
                        },
                        {
                            "text":  "leg",
                            "points":  10
                        },
                        {
                            "text":  "chain",
                            "points":  9
                        },
                        {
                            "text":  "hair",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  190759,
        "question":  "Name a good musical instrument to take up if you're mad at your neighbors.",
        "answers":  [
                        {
                            "text":  "drums",
                            "points":  66
                        },
                        {
                            "text":  "horn/tuba",
                            "points":  17
                        },
                        {
                            "text":  "bagpipes",
                            "points":  6
                        },
                        {
                            "text":  "guitar/electric",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190760,
        "question":  "Name something a woman pays for to make her man look sexy.",
        "answers":  [
                        {
                            "text":  "stud duds/speedo",
                            "points":  65
                        },
                        {
                            "text":  "haircut/styling",
                            "points":  21
                        },
                        {
                            "text":  "manscaping/wax",
                            "points":  6
                        },
                        {
                            "text":  "gym membership",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190761,
        "question":  "Fill in the blank: ______ shine.",
        "answers":  [
                        {
                            "text":  "sunshine",
                            "points":  65
                        },
                        {
                            "text":  "shoeshine",
                            "points":  14
                        },
                        {
                            "text":  "rise and shine",
                            "points":  10
                        },
                        {
                            "text":  "moonshine",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190762,
        "question":  "Grandma tells grandpa, \"Be careful -- last time we made love, you broke\" what?",
        "answers":  [
                        {
                            "text":  "our bones/your stiffy",
                            "points":  59
                        },
                        {
                            "text":  "the bed",
                            "points":  30
                        },
                        {
                            "text":  "wind",
                            "points":  3
                        },
                        {
                            "text":  "our dentures",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190763,
        "question":  "We asked 100 women... Name something men have terrible taste in.",
        "answers":  [
                        {
                            "text":  "clothes/fashion",
                            "points":  58
                        },
                        {
                            "text":  "decorating/interior",
                            "points":  16
                        },
                        {
                            "text":  "women",
                            "points":  14
                        },
                        {
                            "text":  "gifts they give",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  190764,
        "question":  "Name something that shouldn't be in your car when you get pulled over by the police.",
        "answers":  [
                        {
                            "text":  "booze",
                            "points":  48
                        },
                        {
                            "text":  "drugs/weed",
                            "points":  31
                        },
                        {
                            "text":  "weapon/gun",
                            "points":  12
                        },
                        {
                            "text":  "dead body",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190765,
        "question":  "What's the opposite of straight?",
        "answers":  [
                        {
                            "text":  "crooked",
                            "points":  46
                        },
                        {
                            "text":  "gay",
                            "points":  26
                        },
                        {
                            "text":  "curved/curvy",
                            "points":  16
                        },
                        {
                            "text":  "bent",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  190766,
        "question":  "We asked 100 married men... Name something an ex-girlfriend gave you that you wouldn't want your wife to find.",
        "answers":  [
                        {
                            "text":  "sexy pictures",
                            "points":  45
                        },
                        {
                            "text":  "her panties",
                            "points":  33
                        },
                        {
                            "text":  "letter/card",
                            "points":  9
                        },
                        {
                            "text":  "watch/jewelry",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  190767,
        "question":  "Name something that the sun does.",
        "answers":  [
                        {
                            "text":  "shines/lights",
                            "points":  45
                        },
                        {
                            "text":  "rises/sets",
                            "points":  26
                        },
                        {
                            "text":  "warms/heats",
                            "points":  16
                        },
                        {
                            "text":  "burns/tans",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  190768,
        "question":  "Name something you'd expect to see inside a police car.",
        "answers":  [
                        {
                            "text":  "radio/scanner",
                            "points":  38
                        },
                        {
                            "text":  "gun",
                            "points":  31
                        },
                        {
                            "text":  "computer",
                            "points":  18
                        },
                        {
                            "text":  "police officer",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  190769,
        "question":  "Name something a man saves from an ex-girlfriend that he'll give to a new girlfriend.",
        "answers":  [
                        {
                            "text":  "ring/jewelry",
                            "points":  81
                        },
                        {
                            "text":  "love/his heart",
                            "points":  5
                        },
                        {
                            "text":  "clothes",
                            "points":  4
                        },
                        {
                            "text":  "std/the clap",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190770,
        "question":  "Name something you make at home.",
        "answers":  [
                        {
                            "text":  "food/meals",
                            "points":  80
                        },
                        {
                            "text":  "the bed",
                            "points":  6
                        },
                        {
                            "text":  "love/babies",
                            "points":  5
                        },
                        {
                            "text":  "a mess",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190771,
        "question":  "Name something a mother might pick out for her adult son.",
        "answers":  [
                        {
                            "text":  "clothes/undies",
                            "points":  79
                        },
                        {
                            "text":  "a girl/wife",
                            "points":  9
                        },
                        {
                            "text":  "furniture",
                            "points":  3
                        },
                        {
                            "text":  "groceries/food",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190772,
        "question":  "Name an activity where you're known for your great moves.",
        "answers":  [
                        {
                            "text":  "dancing/twerking",
                            "points":  53
                        },
                        {
                            "text":  "games/sports",
                            "points":  30
                        },
                        {
                            "text":  "goin' to pound town",
                            "points":  7
                        },
                        {
                            "text":  "cook'g/benihana-like",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190773,
        "question":  "Name something people check out of.",
        "answers":  [
                        {
                            "text":  "hotel/motel",
                            "points":  50
                        },
                        {
                            "text":  "hospital/clinic",
                            "points":  25
                        },
                        {
                            "text":  "store/checkout line",
                            "points":  12
                        },
                        {
                            "text":  "life",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  190774,
        "question":  "Name something that's hard to get off your shoes.",
        "answers":  [
                        {
                            "text":  "gum",
                            "points":  45
                        },
                        {
                            "text":  "poop",
                            "points":  28
                        },
                        {
                            "text":  "mud/dirt",
                            "points":  13
                        },
                        {
                            "text":  "tar",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  190775,
        "question":  "When your husband is late, name a place you track the bum down.",
        "answers":  [
                        {
                            "text":  "bar/club",
                            "points":  44
                        },
                        {
                            "text":  "work/office",
                            "points":  33
                        },
                        {
                            "text":  "at bud's/neighbor's",
                            "points":  10
                        },
                        {
                            "text":  "casino",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  190776,
        "question":  "Fill in the blank: For a man to look good bald, he's got to have a nice what?",
        "answers":  [
                        {
                            "text":  "head/shape",
                            "points":  44
                        },
                        {
                            "text":  "face/eyes/smile",
                            "points":  24
                        },
                        {
                            "text":  "build/bod",
                            "points":  20
                        },
                        {
                            "text":  "beard",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190777,
        "question":  "Name something that's cold and hard.",
        "answers":  [
                        {
                            "text":  "ice/snow",
                            "points":  78
                        },
                        {
                            "text":  "popsicle/ice cream",
                            "points":  6
                        },
                        {
                            "text":  "corpse",
                            "points":  4
                        },
                        {
                            "text":  "stone/diamond",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190778,
        "question":  "We asked 100 women... Name something you might tell your best friend to get rid of for her own good.",
        "answers":  [
                        {
                            "text":  "mate/booty call",
                            "points":  77
                        },
                        {
                            "text":  "weight/100 lbs.",
                            "points":  9
                        },
                        {
                            "text":  "bad clothes",
                            "points":  4
                        },
                        {
                            "text":  "cigarettes",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190779,
        "question":  "Name something specific Tarzan does that's even starting to get on Cheetah's nerves.",
        "answers":  [
                        {
                            "text":  "that tedious yell",
                            "points":  71
                        },
                        {
                            "text":  "beats his chest",
                            "points":  10
                        },
                        {
                            "text":  "swings vines better",
                            "points":  7
                        },
                        {
                            "text":  "grunts/poor grammar",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190780,
        "question":  "We asked 100 women... If my man was any hairier, he'd look like a what?",
        "answers":  [
                        {
                            "text":  "ape/monkey",
                            "points":  70
                        },
                        {
                            "text":  "sasquatch/yeti",
                            "points":  10
                        },
                        {
                            "text":  "bear",
                            "points":  9
                        },
                        {
                            "text":  "wookiee/chewbacca",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190781,
        "question":  "Name a card game that's popular with children.",
        "answers":  [
                        {
                            "text":  "go fish",
                            "points":  65
                        },
                        {
                            "text":  "uno",
                            "points":  15
                        },
                        {
                            "text":  "old maid",
                            "points":  7
                        },
                        {
                            "text":  "crazy eights",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190782,
        "question":  "Name something that's better when it's fresh.",
        "answers":  [
                        {
                            "text":  "fruit/vegetables",
                            "points":  60
                        },
                        {
                            "text":  "bread",
                            "points":  22
                        },
                        {
                            "text":  "fish/seafood",
                            "points":  7
                        },
                        {
                            "text":  "milk",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190783,
        "question":  "What do you think of when you hear the word \"root\"?",
        "answers":  [
                        {
                            "text":  "plants/veggies",
                            "points":  52
                        },
                        {
                            "text":  "root beer",
                            "points":  25
                        },
                        {
                            "text":  "teeth/root canal",
                            "points":  12
                        },
                        {
                            "text":  "math/square root",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190784,
        "question":  "Fill in the blank: Walk the what?",
        "answers":  [
                        {
                            "text":  "line",
                            "points":  50
                        },
                        {
                            "text":  "dog",
                            "points":  18
                        },
                        {
                            "text":  "walk",
                            "points":  15
                        },
                        {
                            "text":  "plank",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  190785,
        "question":  "Fill in the blank with one specific word: Walking ______.",
        "answers":  [
                        {
                            "text":  "dead",
                            "points":  45
                        },
                        {
                            "text":  "tall",
                            "points":  27
                        },
                        {
                            "text":  "stick",
                            "points":  17
                        },
                        {
                            "text":  "cane",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190786,
        "question":  "Give me a word that rhymes with \"cookie.\"",
        "answers":  [
                        {
                            "text":  "nookie",
                            "points":  32
                        },
                        {
                            "text":  "bookie",
                            "points":  29
                        },
                        {
                            "text":  "rookie",
                            "points":  26
                        },
                        {
                            "text":  "looky",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190787,
        "question":  "Name a kind of place where you see a lot of lonely guys.",
        "answers":  [
                        {
                            "text":  "bar/nightclub",
                            "points":  69
                        },
                        {
                            "text":  "strip joint",
                            "points":  12
                        },
                        {
                            "text":  "mall/store",
                            "points":  7
                        },
                        {
                            "text":  "library",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190788,
        "question":  "Name a kind of bump.",
        "answers":  [
                        {
                            "text":  "road/speed bump",
                            "points":  69
                        },
                        {
                            "text":  "pimple/acne",
                            "points":  11
                        },
                        {
                            "text":  "mole/wart",
                            "points":  6
                        },
                        {
                            "text":  "baby bump",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190789,
        "question":  "We asked 100 women... Name something you'd do every day if Steve Harvey was your husband.",
        "answers":  [
                        {
                            "text":  "laugh/smile",
                            "points":  59
                        },
                        {
                            "text":  "shop/at saks",
                            "points":  22
                        },
                        {
                            "text":  "play family feud",
                            "points":  5
                        },
                        {
                            "text":  "talk/argue",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190790,
        "question":  "Name a food or drink with the word \"jack\" in it.",
        "answers":  [
                        {
                            "text":  "jack daniel's/& coke",
                            "points":  58
                        },
                        {
                            "text":  "jack cheese",
                            "points":  15
                        },
                        {
                            "text":  "cracker jack",
                            "points":  10
                        },
                        {
                            "text":  "flapjack",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  190791,
        "question":  "We asked 100 single women... Name a good place to find a bad boy.",
        "answers":  [
                        {
                            "text":  "bar/club",
                            "points":  55
                        },
                        {
                            "text":  "prison",
                            "points":  19
                        },
                        {
                            "text":  "strip joint",
                            "points":  11
                        },
                        {
                            "text":  "church",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  190792,
        "question":  "Name a car that's named after an animal.",
        "answers":  [
                        {
                            "text":  "jaguar",
                            "points":  54
                        },
                        {
                            "text":  "mustang",
                            "points":  17
                        },
                        {
                            "text":  "cougar",
                            "points":  15
                        },
                        {
                            "text":  "impala",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190793,
        "question":  "Fill in the blank: Tooth ______.",
        "answers":  [
                        {
                            "text":  "fairy",
                            "points":  52
                        },
                        {
                            "text":  "ache",
                            "points":  21
                        },
                        {
                            "text":  "decay",
                            "points":  12
                        },
                        {
                            "text":  "paste",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  190794,
        "question":  "Name something a woman loads.",
        "answers":  [
                        {
                            "text":  "laundry/washer",
                            "points":  50
                        },
                        {
                            "text":  "dishwasher",
                            "points":  24
                        },
                        {
                            "text":  "gun",
                            "points":  13
                        },
                        {
                            "text":  "purse",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190795,
        "question":  "Name a place men behave badly.",
        "answers":  [
                        {
                            "text":  "bar/nightclub",
                            "points":  47
                        },
                        {
                            "text":  "strip joint",
                            "points":  33
                        },
                        {
                            "text":  "sporting event",
                            "points":  7
                        },
                        {
                            "text":  "bachelor party",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190796,
        "question":  "We asked 100 men... The last time I cried in public was at what?",
        "answers":  [
                        {
                            "text":  "a funeral",
                            "points":  47
                        },
                        {
                            "text":  "a wedding",
                            "points":  21
                        },
                        {
                            "text":  "movie/star wars",
                            "points":  19
                        },
                        {
                            "text":  "a game/the browns",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190797,
        "question":  "We asked 100 married men... Name something you gave up control of when you got married.",
        "answers":  [
                        {
                            "text":  "money/spending",
                            "points":  46
                        },
                        {
                            "text":  "my life/time/freedom",
                            "points":  33
                        },
                        {
                            "text":  "tv/remote",
                            "points":  7
                        },
                        {
                            "text":  "doing the laundry",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190798,
        "question":  "Name the occupation of someone who tells you you're in good hands.",
        "answers":  [
                        {
                            "text":  "doctor/dentist",
                            "points":  45
                        },
                        {
                            "text":  "insurance/allstate",
                            "points":  40
                        },
                        {
                            "text":  "massage therapist",
                            "points":  3
                        },
                        {
                            "text":  "nurse",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190799,
        "question":  "Name a kind of crack.",
        "answers":  [
                        {
                            "text":  "pavement/masonry",
                            "points":  32
                        },
                        {
                            "text":  "sweaty butt crack",
                            "points":  30
                        },
                        {
                            "text":  "drug/crackhead",
                            "points":  23
                        },
                        {
                            "text":  "wisecrack",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  190800,
        "question":  "Other than a woman, name something a man might refer to as a thing of beauty.",
        "answers":  [
                        {
                            "text":  "car/truck",
                            "points":  82
                        },
                        {
                            "text":  "horse",
                            "points":  3
                        },
                        {
                            "text":  "art/painting",
                            "points":  3
                        },
                        {
                            "text":  "boat",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190801,
        "question":  "Name something people try to get out of by pretending they're sick.",
        "answers":  [
                        {
                            "text":  "work",
                            "points":  75
                        },
                        {
                            "text":  "school",
                            "points":  6
                        },
                        {
                            "text":  "jury duty",
                            "points":  5
                        },
                        {
                            "text":  "family visit",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190802,
        "question":  "Name something a stripper hopes doesn't happen as she swings around the dance pole.",
        "answers":  [
                        {
                            "text":  "falls/loses grip",
                            "points":  73
                        },
                        {
                            "text":  "pole breaks",
                            "points":  9
                        },
                        {
                            "text":  "she farts",
                            "points":  4
                        },
                        {
                            "text":  "loses costume/wig",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190803,
        "question":  "We asked 100 men... Name something you'd hope your wife doesn't continue to do for as long as you both shall live.",
        "answers":  [
                        {
                            "text":  "nag/argue/complain",
                            "points":  63
                        },
                        {
                            "text":  "cheat on me",
                            "points":  14
                        },
                        {
                            "text":  "blimp out",
                            "points":  7
                        },
                        {
                            "text":  "mistrust me",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  190804,
        "question":  "Name something people know about beavers.",
        "answers":  [
                        {
                            "text":  "build dams",
                            "points":  59
                        },
                        {
                            "text":  "big teeth",
                            "points":  16
                        },
                        {
                            "text":  "chew/eat wood",
                            "points":  9
                        },
                        {
                            "text":  "big flat tails",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  190805,
        "question":  "Name a fruit a bald man's head reminds you of.",
        "answers":  [
                        {
                            "text":  "melon",
                            "points":  56
                        },
                        {
                            "text":  "apple",
                            "points":  16
                        },
                        {
                            "text":  "orange",
                            "points":  11
                        },
                        {
                            "text":  "peach",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  190806,
        "question":  "Name a holiday when the roads are jam-packed.",
        "answers":  [
                        {
                            "text":  "thanksgiving",
                            "points":  37
                        },
                        {
                            "text":  "4th of july",
                            "points":  32
                        },
                        {
                            "text":  "christmas",
                            "points":  16
                        },
                        {
                            "text":  "labor day",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190807,
        "question":  "Fill in the blank: I cry at what?",
        "answers":  [
                        {
                            "text":  "weddings",
                            "points":  30
                        },
                        {
                            "text":  "funerals/death",
                            "points":  28
                        },
                        {
                            "text":  "movies/tv shows",
                            "points":  27
                        },
                        {
                            "text":  "night",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190808,
        "question":  "Name something a person might slip into.",
        "answers":  [
                        {
                            "text":  "comfy duds/shoes",
                            "points":  65
                        },
                        {
                            "text":  "a coma",
                            "points":  14
                        },
                        {
                            "text":  "bed",
                            "points":  5
                        },
                        {
                            "text":  "bath/shower",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190809,
        "question":  "Name something some men always carry.",
        "answers":  [
                        {
                            "text":  "wallet/cash",
                            "points":  64
                        },
                        {
                            "text":  "condom",
                            "points":  9
                        },
                        {
                            "text":  "pocketknife",
                            "points":  8
                        },
                        {
                            "text":  "gun",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  190810,
        "question":  "Fill in the blank: ______ hood.",
        "answers":  [
                        {
                            "text":  "robin hood",
                            "points":  62
                        },
                        {
                            "text":  "neighborhood",
                            "points":  18
                        },
                        {
                            "text":  "car hood",
                            "points":  5
                        },
                        {
                            "text":  "little red riding...",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190811,
        "question":  "Name a job you shouldn't do if you're afraid of heights.",
        "answers":  [
                        {
                            "text":  "window washer",
                            "points":  62
                        },
                        {
                            "text":  "construct'n/roofer",
                            "points":  15
                        },
                        {
                            "text":  "pilot",
                            "points":  8
                        },
                        {
                            "text":  "electrician/lineman",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190812,
        "question":  "Name a kind of rod.",
        "answers":  [
                        {
                            "text":  "fishing rod",
                            "points":  62
                        },
                        {
                            "text":  "lightning rod",
                            "points":  13
                        },
                        {
                            "text":  "hot rod",
                            "points":  8
                        },
                        {
                            "text":  "curtain/shower rod",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  190813,
        "question":  "Name something you'd love to have a handful of right now.",
        "answers":  [
                        {
                            "text":  "cash/gold",
                            "points":  54
                        },
                        {
                            "text":  "candy/chocolate",
                            "points":  17
                        },
                        {
                            "text":  "nuts",
                            "points":  11
                        },
                        {
                            "text":  "hot bod/boobage",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  190814,
        "question":  "Name something that gets mixed.",
        "answers":  [
                        {
                            "text":  "cocktails",
                            "points":  53
                        },
                        {
                            "text":  "batter/dough",
                            "points":  25
                        },
                        {
                            "text":  "salad/veggies",
                            "points":  6
                        },
                        {
                            "text":  "nuts",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190815,
        "question":  "We asked 100 men... Name a place where you could lose your shirt.",
        "answers":  [
                        {
                            "text":  "casino/las vegas",
                            "points":  46
                        },
                        {
                            "text":  "beach/ocean",
                            "points":  22
                        },
                        {
                            "text":  "racetrack",
                            "points":  13
                        },
                        {
                            "text":  "gym/locker room",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  190816,
        "question":  "Name a kind of ray.",
        "answers":  [
                        {
                            "text":  "sun/u.v.",
                            "points":  41
                        },
                        {
                            "text":  "x-ray",
                            "points":  24
                        },
                        {
                            "text":  "stingray",
                            "points":  18
                        },
                        {
                            "text":  "gamma ray",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  190817,
        "question":  "If a fish is out of water, name something it might be on.",
        "answers":  [
                        {
                            "text":  "ground/sand",
                            "points":  40
                        },
                        {
                            "text":  "dish/dinner table",
                            "points":  30
                        },
                        {
                            "text":  "frying pan/grill",
                            "points":  10
                        },
                        {
                            "text":  "hook",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  190818,
        "question":  "Name a word that rhymes with \"tangle.\"",
        "answers":  [
                        {
                            "text":  "mangle",
                            "points":  40
                        },
                        {
                            "text":  "dangle",
                            "points":  21
                        },
                        {
                            "text":  "bangle",
                            "points":  17
                        },
                        {
                            "text":  "wrangle",
                            "points":  11
                        }
                    ]
    },
    {
        "id":  190819,
        "question":  "Besides photographs, name something specific that gets framed.",
        "answers":  [
                        {
                            "text":  "diploma/degree",
                            "points":  39
                        },
                        {
                            "text":  "people",
                            "points":  23
                        },
                        {
                            "text":  "art/poster",
                            "points":  19
                        },
                        {
                            "text":  "award/trophy",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  190820,
        "question":  "Name something that follows the word \"mile.\"",
        "answers":  [
                        {
                            "text":  "mile high",
                            "points":  38
                        },
                        {
                            "text":  "milestone",
                            "points":  24
                        },
                        {
                            "text":  "mile long",
                            "points":  18
                        },
                        {
                            "text":  "mile-a-minute",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  190821,
        "question":  "Other than turkey, name something else that people stuff on Thanksgiving.",
        "answers":  [
                        {
                            "text":  "themselves",
                            "points":  75
                        },
                        {
                            "text":  "ham/pig/pork",
                            "points":  6
                        },
                        {
                            "text":  "duck",
                            "points":  4
                        },
                        {
                            "text":  "peppers",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190822,
        "question":  "Name a bad place to go looking for real love.",
        "answers":  [
                        {
                            "text":  "bar/nightclub",
                            "points":  68
                        },
                        {
                            "text":  "strip joint",
                            "points":  13
                        },
                        {
                            "text":  "internet/app",
                            "points":  5
                        },
                        {
                            "text":  "another country",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  190823,
        "question":  "Name something a car thief runs out of when being chased by the police.",
        "answers":  [
                        {
                            "text":  "gas",
                            "points":  66
                        },
                        {
                            "text":  "energy/willpower",
                            "points":  9
                        },
                        {
                            "text":  "time",
                            "points":  8
                        },
                        {
                            "text":  "road",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190824,
        "question":  "Name something on your desk you shouldn't use to clean your ears.",
        "answers":  [
                        {
                            "text":  "pencil/pen",
                            "points":  64
                        },
                        {
                            "text":  "paper clip",
                            "points":  16
                        },
                        {
                            "text":  "scissors",
                            "points":  5
                        },
                        {
                            "text":  "stapler",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190825,
        "question":  "Name something that can empty a room in seconds.",
        "answers":  [
                        {
                            "text":  "farts/my wife's",
                            "points":  59
                        },
                        {
                            "text":  "fire/alarm",
                            "points":  22
                        },
                        {
                            "text":  "vomit/projectile",
                            "points":  4
                        },
                        {
                            "text":  "the po-po",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190826,
        "question":  "Name something a woman wears that she could use as a weapon.",
        "answers":  [
                        {
                            "text":  "stilettos/boots",
                            "points":  55
                        },
                        {
                            "text":  "jewelry/ring",
                            "points":  17
                        },
                        {
                            "text":  "purse",
                            "points":  11
                        },
                        {
                            "text":  "bra/as slingshot",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190827,
        "question":  "Tell me something you can do yourself at home a lot cheaper than having it done elsewhere.",
        "answers":  [
                        {
                            "text":  "color/style hair",
                            "points":  37
                        },
                        {
                            "text":  "cook/eat",
                            "points":  29
                        },
                        {
                            "text":  "manicure/pedicure",
                            "points":  11
                        },
                        {
                            "text":  "laundry/ironing",
                            "points":  11
                        }
                    ]
    },
    {
        "id":  190828,
        "question":  "Name something that might be on the rocks.",
        "answers":  [
                        {
                            "text":  "beverage/cocktail",
                            "points":  71
                        },
                        {
                            "text":  "love/marriage",
                            "points":  7
                        },
                        {
                            "text":  "moss",
                            "points":  6
                        },
                        {
                            "text":  "boat/ship",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190829,
        "question":  "Name something a person might have on their shoulder.",
        "answers":  [
                        {
                            "text":  "a chip",
                            "points":  64
                        },
                        {
                            "text":  "bird/parrot",
                            "points":  11
                        },
                        {
                            "text":  "bag/purse",
                            "points":  7
                        },
                        {
                            "text":  "dandruff",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190830,
        "question":  "Name something that people start up.",
        "answers":  [
                        {
                            "text":  "car/\"your engines\"",
                            "points":  53
                        },
                        {
                            "text":  "business/company",
                            "points":  23
                        },
                        {
                            "text":  "conversation",
                            "points":  6
                        },
                        {
                            "text":  "lawn mower",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190831,
        "question":  "We asked 100 women... I like a bald guy's head to be as smooth as what?",
        "answers":  [
                        {
                            "text":  "a baby's bottom",
                            "points":  53
                        },
                        {
                            "text":  "silk",
                            "points":  22
                        },
                        {
                            "text":  "a billiard ball",
                            "points":  9
                        },
                        {
                            "text":  "a bowling ball",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190832,
        "question":  "Tell me a word that rhymes with \"funky.\"",
        "answers":  [
                        {
                            "text":  "monkey",
                            "points":  46
                        },
                        {
                            "text":  "chunky",
                            "points":  20
                        },
                        {
                            "text":  "spunky",
                            "points":  14
                        },
                        {
                            "text":  "punky",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  190833,
        "question":  "We asked 100 women... Name something with a motor that's a necessity.",
        "answers":  [
                        {
                            "text":  "car/truck",
                            "points":  67
                        },
                        {
                            "text":  "vacuum",
                            "points":  9
                        },
                        {
                            "text":  "blender",
                            "points":  7
                        },
                        {
                            "text":  "my vibrator/toy",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190834,
        "question":  "Name a place you never want to hear someone say, \"Brace yourself.\"",
        "answers":  [
                        {
                            "text":  "airplane",
                            "points":  54
                        },
                        {
                            "text":  "doctor/dentist",
                            "points":  14
                        },
                        {
                            "text":  "car",
                            "points":  12
                        },
                        {
                            "text":  "elevator",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  190835,
        "question":  "Fill in the blank: Get off my what?",
        "answers":  [
                        {
                            "text":  "back",
                            "points":  50
                        },
                        {
                            "text":  "arse/butt",
                            "points":  20
                        },
                        {
                            "text":  "case",
                            "points":  10
                        },
                        {
                            "text":  "cloud",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  190836,
        "question":  "Name something that superstitious people think brings them good luck.",
        "answers":  [
                        {
                            "text":  "rabbit's foot",
                            "points":  49
                        },
                        {
                            "text":  "four-leaf clover",
                            "points":  19
                        },
                        {
                            "text":  "coin",
                            "points":  9
                        },
                        {
                            "text":  "salt over shoulder",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  190837,
        "question":  "Name something that gets wasted.",
        "answers":  [
                        {
                            "text":  "food/milk",
                            "points":  44
                        },
                        {
                            "text":  "people/lushy grandma",
                            "points":  22
                        },
                        {
                            "text":  "water",
                            "points":  15
                        },
                        {
                            "text":  "time",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190838,
        "question":  "Tell me the activity you'd think of when I say, \"It takes two.\"",
        "answers":  [
                        {
                            "text":  "tango/dance",
                            "points":  43
                        },
                        {
                            "text":  "sex/make a baby",
                            "points":  33
                        },
                        {
                            "text":  "argue/fight",
                            "points":  6
                        },
                        {
                            "text":  "marriage/rela'ship",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190839,
        "question":  "Name something you pick.",
        "answers":  [
                        {
                            "text":  "fruit/veggies",
                            "points":  40
                        },
                        {
                            "text":  "nose/mate's nose",
                            "points":  33
                        },
                        {
                            "text":  "flowers",
                            "points":  9
                        },
                        {
                            "text":  "guitar/banjo",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190840,
        "question":  "Fill in the blank: Snow what?",
        "answers":  [
                        {
                            "text":  "white",
                            "points":  67
                        },
                        {
                            "text":  "flakes",
                            "points":  9
                        },
                        {
                            "text":  "man",
                            "points":  5
                        },
                        {
                            "text":  "storm",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190841,
        "question":  "A stripper might call herself Candy what?",
        "answers":  [
                        {
                            "text":  "candy cane",
                            "points":  60
                        },
                        {
                            "text":  "candy stripe/striper",
                            "points":  19
                        },
                        {
                            "text":  "candy apple",
                            "points":  3
                        },
                        {
                            "text":  "candy lips",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190842,
        "question":  "Fill in the blank: Ice ______.",
        "answers":  [
                        {
                            "text":  "ice cream",
                            "points":  59
                        },
                        {
                            "text":  "ice cube",
                            "points":  16
                        },
                        {
                            "text":  "iced tea",
                            "points":  7
                        },
                        {
                            "text":  "icebreaker",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190843,
        "question":  "Name something you will never throw away no matter how ratty it gets.",
        "answers":  [
                        {
                            "text":  "clothes/shoes",
                            "points":  56
                        },
                        {
                            "text":  "blanket/quilt",
                            "points":  16
                        },
                        {
                            "text":  "teddy bear/doll",
                            "points":  9
                        },
                        {
                            "text":  "pillow",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190844,
        "question":  "You just found out you're related to Steve Harvey. What might you ask him for?",
        "answers":  [
                        {
                            "text":  "millions/a loan",
                            "points":  54
                        },
                        {
                            "text":  "a job/his job",
                            "points":  20
                        },
                        {
                            "text":  "hang/at waffle house",
                            "points":  6
                        },
                        {
                            "text":  "proof/dna test",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190845,
        "question":  "Name something of yours you hope will be in good working condition for many years.",
        "answers":  [
                        {
                            "text":  "car",
                            "points":  52
                        },
                        {
                            "text":  "my body/mind",
                            "points":  26
                        },
                        {
                            "text":  "computer/tablet",
                            "points":  4
                        },
                        {
                            "text":  "washer/dryer",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190846,
        "question":  "Name a busy animal.",
        "answers":  [
                        {
                            "text":  "bee",
                            "points":  49
                        },
                        {
                            "text":  "ant",
                            "points":  18
                        },
                        {
                            "text":  "beaver",
                            "points":  13
                        },
                        {
                            "text":  "dog/lassie",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190847,
        "question":  "Name an important occasion you'd hate to realize was yesterday.",
        "answers":  [
                        {
                            "text":  "anniversary",
                            "points":  39
                        },
                        {
                            "text":  "birthday",
                            "points":  30
                        },
                        {
                            "text":  "wedding/mine",
                            "points":  12
                        },
                        {
                            "text":  "funeral",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190848,
        "question":  "Name something that might be made out of rubber.",
        "answers":  [
                        {
                            "text":  "tires/inner tube",
                            "points":  69
                        },
                        {
                            "text":  "rubber bands",
                            "points":  7
                        },
                        {
                            "text":  "balls",
                            "points":  4
                        },
                        {
                            "text":  "shoes/boots",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190849,
        "question":  "Name something that supports you.",
        "answers":  [
                        {
                            "text":  "a good bra",
                            "points":  48
                        },
                        {
                            "text":  "my mate/family",
                            "points":  24
                        },
                        {
                            "text":  "my body/legs",
                            "points":  7
                        },
                        {
                            "text":  "a chair",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190850,
        "question":  "Name something people use a paper bag for.",
        "answers":  [
                        {
                            "text":  "lunch",
                            "points":  44
                        },
                        {
                            "text":  "groceries",
                            "points":  24
                        },
                        {
                            "text":  "trash/bin liner",
                            "points":  12
                        },
                        {
                            "text":  "puking into",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190851,
        "question":  "Name something that can ruin a kiss.",
        "answers":  [
                        {
                            "text":  "bad breath",
                            "points":  58
                        },
                        {
                            "text":  "a burp",
                            "points":  9
                        },
                        {
                            "text":  "slobber",
                            "points":  9
                        },
                        {
                            "text":  "a booty tooty",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  190852,
        "question":  "Tell me an animal that probably snores when it sleeps.",
        "answers":  [
                        {
                            "text":  "dog",
                            "points":  56
                        },
                        {
                            "text":  "human",
                            "points":  12
                        },
                        {
                            "text":  "bear",
                            "points":  9
                        },
                        {
                            "text":  "pig/hog",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  190853,
        "question":  "Name something people cast.",
        "answers":  [
                        {
                            "text":  "fishing rod/bait",
                            "points":  50
                        },
                        {
                            "text":  "broken bones/arm",
                            "points":  14
                        },
                        {
                            "text":  "actors/movie",
                            "points":  13
                        },
                        {
                            "text":  "a net",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  190854,
        "question":  "Name something an airplane has that a car doesn't have.",
        "answers":  [
                        {
                            "text":  "wings",
                            "points":  65
                        },
                        {
                            "text":  "propeller",
                            "points":  7
                        },
                        {
                            "text":  "bathroom",
                            "points":  6
                        },
                        {
                            "text":  "aircraft engines",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190855,
        "question":  "We asked 100 married men... Fill in the blank: Some days, I think my wife is going to ______ me to death.",
        "answers":  [
                        {
                            "text":  "talk/nag",
                            "points":  59
                        },
                        {
                            "text":  "worry",
                            "points":  10
                        },
                        {
                            "text":  "bore",
                            "points":  8
                        },
                        {
                            "text":  "spend",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  190856,
        "question":  "Name something specific Colonel Sanders probably brought with him to heaven.",
        "answers":  [
                        {
                            "text":  "chicken/bucket",
                            "points":  48
                        },
                        {
                            "text":  "herb & spice recipe",
                            "points":  26
                        },
                        {
                            "text":  "his cane",
                            "points":  4
                        },
                        {
                            "text":  "mashed pot. & gravy",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190857,
        "question":  "Name something grandpa complains that grandma never wears anymore.",
        "answers":  [
                        {
                            "text":  "lingerie/any undies",
                            "points":  48
                        },
                        {
                            "text":  "her front teeth",
                            "points":  14
                        },
                        {
                            "text":  "makeup",
                            "points":  13
                        },
                        {
                            "text":  "perfume",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  190858,
        "question":  "Name something you might place both of your hands on at the same time.",
        "answers":  [
                        {
                            "text":  "steering wheel",
                            "points":  43
                        },
                        {
                            "text":  "body/face",
                            "points":  29
                        },
                        {
                            "text":  "ball/basketball",
                            "points":  5
                        },
                        {
                            "text":  "desk/table",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190859,
        "question":  "Fill in the blank: Rubber ______.",
        "answers":  [
                        {
                            "text":  "rubber ducky",
                            "points":  46
                        },
                        {
                            "text":  "rubber band",
                            "points":  25
                        },
                        {
                            "text":  "rubbermaid",
                            "points":  6
                        },
                        {
                            "text":  "rubber soul/sole",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  190860,
        "question":  "Name something that gets drained.",
        "answers":  [
                        {
                            "text":  "bathtub",
                            "points":  23
                        },
                        {
                            "text":  "sink",
                            "points":  22
                        },
                        {
                            "text":  "food/pasta",
                            "points":  21
                        },
                        {
                            "text":  "energy/my energy",
                            "points":  13
                        }
                    ]
    },
    {
        "id":  190861,
        "question":  "Name something that gets hard when it gets cold.",
        "answers":  [
                        {
                            "text":  "water/ice",
                            "points":  52
                        },
                        {
                            "text":  "ice cream",
                            "points":  10
                        },
                        {
                            "text":  "bread",
                            "points":  9
                        },
                        {
                            "text":  "nipples",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  190862,
        "question":  "Name something a dumb guy might super glue to his body so it won't come off.",
        "answers":  [
                        {
                            "text":  "hair/toupee",
                            "points":  28
                        },
                        {
                            "text":  "hat/clothes",
                            "points":  20
                        },
                        {
                            "text":  "mustache",
                            "points":  9
                        },
                        {
                            "text":  "ring/jewelry",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  190863,
        "question":  "Name something you stick your hand into that would cause you to panic if it got stuck there.",
        "answers":  [
                        {
                            "text":  "disposal/drain",
                            "points":  39
                        },
                        {
                            "text":  "bottle/jar of bees",
                            "points":  15
                        },
                        {
                            "text":  "nose/body hole",
                            "points":  6
                        },
                        {
                            "text":  "a toilet",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  190864,
        "question":  "Name something a woman might throw at a man.",
        "answers":  [
                        {
                            "text":  "shoe",
                            "points":  23
                        },
                        {
                            "text":  "dish/glass/drink",
                            "points":  22
                        },
                        {
                            "text":  "pot/pan",
                            "points":  9
                        },
                        {
                            "text":  "pillow4",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  190865,
        "question":  "Fill in the blank: Out of what?",
        "answers":  [
                        {
                            "text":  "order",
                            "points":  30
                        },
                        {
                            "text":  "control",
                            "points":  14
                        },
                        {
                            "text":  "time",
                            "points":  8
                        },
                        {
                            "text":  "bounds",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  190866,
        "question":  "In your life, name something someone has thrown at you.",
        "answers":  [
                        {
                            "text":  "a ball",
                            "points":  28
                        },
                        {
                            "text":  "a pillow",
                            "points":  10
                        },
                        {
                            "text":  "a shoe/clothes",
                            "points":  8
                        },
                        {
                            "text":  "a tomato/food",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  190867,
        "question":  "Name a place where crying is never a good idea.",
        "answers":  [
                        {
                            "text":  "work/interview",
                            "points":  24
                        },
                        {
                            "text":  "sports/ball game",
                            "points":  11
                        },
                        {
                            "text":  "party/birthday",
                            "points":  10
                        },
                        {
                            "text":  "prison",
                            "points":  8
                        }
                    ]
    }
];
