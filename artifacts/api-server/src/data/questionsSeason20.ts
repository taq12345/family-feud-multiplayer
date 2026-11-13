import type { SurveyQuestion } from "./questions.js";

// Season 20 set: a separate question set from the main bank in questions.ts.
// Boards from Family Feud season 20, as transcribed at
// https://mstiescott.neocities.org/feud20 (crawled 2026-11-13).
// Ids start at 170001 (each season has its own block of 10,000), so they
// never clash with the main bank (1-8782), AI questions (9000+) or other
// seasons. One-answer boards are left out.
// Not used in gameplay yet.
export const SEASON20_SET = "season20";
export const SEASON20_ID_START = 170001;

export function isSeason20Question(id: number): boolean {
  return id >= SEASON20_ID_START && id < SEASON20_ID_START + 10000;
}

export const season20Questions: SurveyQuestion[] = [
    {
        "id":  170001,
        "question":  "Name something dogs do to people that people wouldn't do to dogs.",
        "answers":  [
                        {
                            "text":  "lick them",
                            "points":  54
                        },
                        {
                            "text":  "sniff/their butts",
                            "points":  14
                        },
                        {
                            "text":  "bite/nip ankles",
                            "points":  13
                        },
                        {
                            "text":  "pee on them",
                            "points":  7
                        },
                        {
                            "text":  "bark at them",
                            "points":  3
                        },
                        {
                            "text":  "be forever loyal",
                            "points":  3
                        },
                        {
                            "text":  "hump them",
                            "points":  3
                        },
                        {
                            "text":  "beg for their food",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170002,
        "question":  "Name something a drunken guy might do just like a dog.",
        "answers":  [
                        {
                            "text":  "whiz/outside",
                            "points":  54
                        },
                        {
                            "text":  "bark/growl/howl",
                            "points":  14
                        },
                        {
                            "text":  "eat/drink",
                            "points":  10
                        },
                        {
                            "text":  "drool",
                            "points":  5
                        },
                        {
                            "text":  "sleep/on floor",
                            "points":  5
                        },
                        {
                            "text":  "hump",
                            "points":  4
                        },
                        {
                            "text":  "puke",
                            "points":  4
                        },
                        {
                            "text":  "kiss/lick",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170003,
        "question":  "Name a way you might know someone is dead rather than just sleeping.",
        "answers":  [
                        {
                            "text":  "no breath/movement",
                            "points":  38
                        },
                        {
                            "text":  "no pulse",
                            "points":  19
                        },
                        {
                            "text":  "they're cold",
                            "points":  11
                        },
                        {
                            "text":  "skin color/pale",
                            "points":  10
                        },
                        {
                            "text":  "they smell",
                            "points":  7
                        },
                        {
                            "text":  "poke/kick them",
                            "points":  7
                        },
                        {
                            "text":  "headless/bloody",
                            "points":  3
                        },
                        {
                            "text":  "stiff as a board",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170004,
        "question":  "Name something Colonel Sanders likes to put on his chicken and his lover.",
        "answers":  [
                        {
                            "text":  "sauce/ranch dressing",
                            "points":  33
                        },
                        {
                            "text":  "gravy",
                            "points":  18
                        },
                        {
                            "text":  "salt/spices",
                            "points":  14
                        },
                        {
                            "text":  "honey",
                            "points":  10
                        },
                        {
                            "text":  "batter/flour",
                            "points":  8
                        },
                        {
                            "text":  "his mouth/fingers",
                            "points":  7
                        },
                        {
                            "text":  "oil/grease",
                            "points":  6
                        },
                        {
                            "text":  "butter",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170005,
        "question":  "A man learns the hard way never to tell his wife that she's too what?",
        "answers":  [
                        {
                            "text":  "massive",
                            "points":  74
                        },
                        {
                            "text":  "old/elderly",
                            "points":  5
                        },
                        {
                            "text":  "bossy/demanding",
                            "points":  5
                        },
                        {
                            "text":  "loud/talkative",
                            "points":  5
                        },
                        {
                            "text":  "angry/crazy",
                            "points":  2
                        },
                        {
                            "text":  "picky",
                            "points":  2
                        },
                        {
                            "text":  "sensitive",
                            "points":  2
                        },
                        {
                            "text":  "skinny",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170006,
        "question":  "We asked 100 women... Name something your man thinks he has good taste in, but he doesn't.",
        "answers":  [
                        {
                            "text":  "clothes/fashion",
                            "points":  68
                        },
                        {
                            "text":  "decor/furniture",
                            "points":  8
                        },
                        {
                            "text":  "jewelry",
                            "points":  7
                        },
                        {
                            "text":  "women",
                            "points":  4
                        },
                        {
                            "text":  "wine/booze",
                            "points":  4
                        },
                        {
                            "text":  "hair/beard style",
                            "points":  2
                        },
                        {
                            "text":  "tv/movies",
                            "points":  2
                        },
                        {
                            "text":  "food/chocolate",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170007,
        "question":  "Name something a man might lose that would make him less attractive.",
        "answers":  [
                        {
                            "text":  "hair/facial hair",
                            "points":  65
                        },
                        {
                            "text":  "physique/weight",
                            "points":  12
                        },
                        {
                            "text":  "his teeth",
                            "points":  4
                        },
                        {
                            "text":  "his money",
                            "points":  4
                        },
                        {
                            "text":  "his nose",
                            "points":  3
                        },
                        {
                            "text":  "woody/sex drive",
                            "points":  3
                        },
                        {
                            "text":  "personality/humor",
                            "points":  3
                        },
                        {
                            "text":  "job/promotion",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170008,
        "question":  "Fill in the blank: A husband is smart to tell his wife that she has the best ______ ever.",
        "answers":  [
                        {
                            "text":  "bod/divine behind",
                            "points":  57
                        },
                        {
                            "text":  "smile/face",
                            "points":  15
                        },
                        {
                            "text":  "cooking",
                            "points":  12
                        },
                        {
                            "text":  "kisses",
                            "points":  4
                        },
                        {
                            "text":  "husband/lover",
                            "points":  3
                        },
                        {
                            "text":  "personality/'tude",
                            "points":  2
                        },
                        {
                            "text":  "mom",
                            "points":  2
                        },
                        {
                            "text":  "heart",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170009,
        "question":  "Name a reason a woman says her husband reminds her of Bigfoot.",
        "answers":  [
                        {
                            "text":  "he's a furball",
                            "points":  49
                        },
                        {
                            "text":  "his big feet...duh",
                            "points":  14
                        },
                        {
                            "text":  "large build",
                            "points":  8
                        },
                        {
                            "text":  "his stench",
                            "points":  8
                        },
                        {
                            "text":  "clumsy/trips",
                            "points":  7
                        },
                        {
                            "text":  "stomps around",
                            "points":  5
                        },
                        {
                            "text":  "muddy/dirty",
                            "points":  3
                        },
                        {
                            "text":  "rarely see him",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170010,
        "question":  "You wouldn't want to wake up Christmas morning to see your dog doing what?",
        "answers":  [
                        {
                            "text":  "opening/eat'g gifts",
                            "points":  44
                        },
                        {
                            "text":  "pee/poo/on gift",
                            "points":  37
                        },
                        {
                            "text":  "knock'g over tree",
                            "points":  4
                        },
                        {
                            "text":  "humping",
                            "points":  3
                        },
                        {
                            "text":  "eat'g food/the ham",
                            "points":  3
                        },
                        {
                            "text":  "birthin' puppies",
                            "points":  2
                        },
                        {
                            "text":  "choking/puking",
                            "points":  2
                        },
                        {
                            "text":  "dying",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170011,
        "question":  "Name someone you might say has taken years off your life.",
        "answers":  [
                        {
                            "text":  "kids/teens",
                            "points":  39
                        },
                        {
                            "text":  "spouse/mate",
                            "points":  21
                        },
                        {
                            "text":  "mom/dad",
                            "points":  11
                        },
                        {
                            "text":  "my ex",
                            "points":  9
                        },
                        {
                            "text":  "boss/coworker",
                            "points":  5
                        },
                        {
                            "text":  "doc/surgeon",
                            "points":  5
                        },
                        {
                            "text":  "mother-in-law",
                            "points":  4
                        },
                        {
                            "text":  "politicians",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170012,
        "question":  "If you took a naked selfie at a wild party, who would you hate to realize you texted it to?",
        "answers":  [
                        {
                            "text":  "mom/dad",
                            "points":  38
                        },
                        {
                            "text":  "boss/coworker",
                            "points":  16
                        },
                        {
                            "text":  "anyone & everyone",
                            "points":  16
                        },
                        {
                            "text":  "spouse/mate",
                            "points":  10
                        },
                        {
                            "text":  "my ex",
                            "points":  6
                        },
                        {
                            "text":  "my kids",
                            "points":  4
                        },
                        {
                            "text":  "best friend",
                            "points":  4
                        },
                        {
                            "text":  "pastor/clergy",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170013,
        "question":  "When the circus closed, what act had the hardest time finding another job?",
        "answers":  [
                        {
                            "text":  "animals/trainer",
                            "points":  36
                        },
                        {
                            "text":  "acrobat/trapeze",
                            "points":  27
                        },
                        {
                            "text":  "clown",
                            "points":  16
                        },
                        {
                            "text":  "bearded lady",
                            "points":  5
                        },
                        {
                            "text":  "ringmaster",
                            "points":  5
                        },
                        {
                            "text":  "sword swallower",
                            "points":  4
                        },
                        {
                            "text":  "human cannonball",
                            "points":  2
                        },
                        {
                            "text":  "juggler",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170014,
        "question":  "We asked 100 women... Where would you tattoo your boyfriend's name if you weren't sure the relationship was going to last?",
        "answers":  [
                        {
                            "text":  "doody dispenser",
                            "points":  35
                        },
                        {
                            "text":  "foot/sole/toe",
                            "points":  20
                        },
                        {
                            "text":  "my arm/pit",
                            "points":  14
                        },
                        {
                            "text":  "my back",
                            "points":  9
                        },
                        {
                            "text":  "my shoulder",
                            "points":  7
                        },
                        {
                            "text":  "my thigh/leg",
                            "points":  5
                        },
                        {
                            "text":  "my hip",
                            "points":  4
                        },
                        {
                            "text":  "buried in cleavage",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170015,
        "question":  "Name something that Santa thinks is sexy about Mrs. Claus.",
        "answers":  [
                        {
                            "text":  "fine phat figure",
                            "points":  32
                        },
                        {
                            "text":  "face/smile",
                            "points":  27
                        },
                        {
                            "text":  "her ensemble",
                            "points":  18
                        },
                        {
                            "text":  "food/cookies",
                            "points":  8
                        },
                        {
                            "text":  "hot gray hair bun",
                            "points":  5
                        },
                        {
                            "text":  "granny glasses",
                            "points":  3
                        },
                        {
                            "text":  "her strut",
                            "points":  2
                        },
                        {
                            "text":  "personality",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170016,
        "question":  "The good news is, you got a really cheap airplane ticket. The bad news is, the plane hasn't got what on it?",
        "answers":  [
                        {
                            "text":  "seats",
                            "points":  31
                        },
                        {
                            "text":  "bathrooms",
                            "points":  28
                        },
                        {
                            "text":  "food/drinks",
                            "points":  12
                        },
                        {
                            "text":  "pilot/crew",
                            "points":  11
                        },
                        {
                            "text":  "wings",
                            "points":  8
                        },
                        {
                            "text":  "engine/propellers",
                            "points":  3
                        },
                        {
                            "text":  "seat belts",
                            "points":  2
                        },
                        {
                            "text":  "fuel",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170017,
        "question":  "We asked 100 single women... What would you do if a date asked you how much you weigh?",
        "answers":  [
                        {
                            "text":  "tell him",
                            "points":  22
                        },
                        {
                            "text":  "leave",
                            "points":  20
                        },
                        {
                            "text":  "don't tell/\"nunya!\"",
                            "points":  19
                        },
                        {
                            "text":  "lie",
                            "points":  15
                        },
                        {
                            "text":  "laugh",
                            "points":  13
                        },
                        {
                            "text":  "give dirty look",
                            "points":  4
                        },
                        {
                            "text":  "cuss him out",
                            "points":  2
                        },
                        {
                            "text":  "slap the douche",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170018,
        "question":  "We asked 100 married women... What would you do if your best friend said she had a crush on your husband?",
        "answers":  [
                        {
                            "text":  "punch the ho",
                            "points":  22
                        },
                        {
                            "text":  "discuss/\"back off!\"",
                            "points":  19
                        },
                        {
                            "text":  "\"u can have him\"",
                            "points":  12
                        },
                        {
                            "text":  "laugh/smile",
                            "points":  11
                        },
                        {
                            "text":  "kill/run her over",
                            "points":  10
                        },
                        {
                            "text":  "drop/unfriend her",
                            "points":  10
                        },
                        {
                            "text":  "cry",
                            "points":  7
                        },
                        {
                            "text":  "feel flattered",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  170019,
        "question":  "You should never tell your mother that you hate her what?",
        "answers":  [
                        {
                            "text":  "cooking",
                            "points":  66
                        },
                        {
                            "text":  "hair/new wig",
                            "points":  9
                        },
                        {
                            "text":  "clothes/shoes",
                            "points":  6
                        },
                        {
                            "text":  "guts",
                            "points":  4
                        },
                        {
                            "text":  "advice/ideas",
                            "points":  3
                        },
                        {
                            "text":  "'tude/personality",
                            "points":  3
                        },
                        {
                            "text":  "face/witch nose",
                            "points":  3
                        },
                        {
                            "text":  "man",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170020,
        "question":  "Men think about sex and dogs think about what?",
        "answers":  [
                        {
                            "text":  "food/bones",
                            "points":  60
                        },
                        {
                            "text":  "humping",
                            "points":  12
                        },
                        {
                            "text":  "where to whiz/dump",
                            "points":  6
                        },
                        {
                            "text":  "sniffing butts",
                            "points":  6
                        },
                        {
                            "text":  "sleeping",
                            "points":  4
                        },
                        {
                            "text":  "owners/people",
                            "points":  4
                        },
                        {
                            "text":  "cats",
                            "points":  2
                        },
                        {
                            "text":  "play'g ball",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170021,
        "question":  "Fill in the blank: A magician just pulled a coin out of my what?",
        "answers":  [
                        {
                            "text":  "ear",
                            "points":  59
                        },
                        {
                            "text":  "stink whistle",
                            "points":  13
                        },
                        {
                            "text":  "pocket/pants",
                            "points":  8
                        },
                        {
                            "text":  "hat",
                            "points":  5
                        },
                        {
                            "text":  "purse/wallet",
                            "points":  4
                        },
                        {
                            "text":  "nose",
                            "points":  3
                        },
                        {
                            "text":  "hand",
                            "points":  2
                        },
                        {
                            "text":  "bra/cleavage",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170022,
        "question":  "Name something a wife might do if she found her husband's secret stash of marijuana.",
        "answers":  [
                        {
                            "text":  "blaze, baby!",
                            "points":  53
                        },
                        {
                            "text":  "flush/throw away",
                            "points":  25
                        },
                        {
                            "text":  "eat/bake cookies",
                            "points":  5
                        },
                        {
                            "text":  "burn/incinerate",
                            "points":  4
                        },
                        {
                            "text":  "freak/confront",
                            "points":  3
                        },
                        {
                            "text":  "nothing/ignore",
                            "points":  2
                        },
                        {
                            "text":  "leave him",
                            "points":  2
                        },
                        {
                            "text":  "hide it",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170023,
        "question":  "Name something grandma wears to bed that grandpa pretends is sexy.",
        "answers":  [
                        {
                            "text":  "nightie/robe",
                            "points":  51
                        },
                        {
                            "text":  "panties/long johns",
                            "points":  12
                        },
                        {
                            "text":  "curlers/hairnet",
                            "points":  11
                        },
                        {
                            "text":  "knee-hi wool socks",
                            "points":  9
                        },
                        {
                            "text":  "dentures",
                            "points":  5
                        },
                        {
                            "text":  "nothing",
                            "points":  4
                        },
                        {
                            "text":  "bengay",
                            "points":  2
                        },
                        {
                            "text":  "nightcap",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170024,
        "question":  "We asked 100 women... My behind went from an apple bottom to the shape of what fruit?",
        "answers":  [
                        {
                            "text":  "pear",
                            "points":  50
                        },
                        {
                            "text":  "watermelon",
                            "points":  17
                        },
                        {
                            "text":  "pumpkin",
                            "points":  7
                        },
                        {
                            "text":  "grapefruit",
                            "points":  7
                        },
                        {
                            "text":  "orange",
                            "points":  5
                        },
                        {
                            "text":  "peach",
                            "points":  4
                        },
                        {
                            "text":  "prune",
                            "points":  3
                        },
                        {
                            "text":  "cantaloupe",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170025,
        "question":  "Name a way a man's sugar mama is different from his real mama.",
        "answers":  [
                        {
                            "text":  "takes him to o-zone",
                            "points":  47
                        },
                        {
                            "text":  "rich/gives gifts",
                            "points":  24
                        },
                        {
                            "text":  "younger",
                            "points":  9
                        },
                        {
                            "text":  "not related",
                            "points":  5
                        },
                        {
                            "text":  "calls/dates her",
                            "points":  4
                        },
                        {
                            "text":  "better tongue kisser",
                            "points":  3
                        },
                        {
                            "text":  "hoochie clothes",
                            "points":  2
                        },
                        {
                            "text":  "won't scold him",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170026,
        "question":  "Name something that's unhealthy to hold in.",
        "answers":  [
                        {
                            "text":  "feelings/emotions",
                            "points":  44
                        },
                        {
                            "text":  "gas/burp/fart",
                            "points":  17
                        },
                        {
                            "text":  "your breath",
                            "points":  11
                        },
                        {
                            "text":  "determined turd/pee",
                            "points":  11
                        },
                        {
                            "text":  "your gut",
                            "points":  5
                        },
                        {
                            "text":  "smoke/from joint",
                            "points":  4
                        },
                        {
                            "text":  "chunky vomit",
                            "points":  2
                        },
                        {
                            "text":  "a sneeze",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170027,
        "question":  "Name something that might land on the bingo hall floor if two old ladies get in a fight.",
        "answers":  [
                        {
                            "text":  "dentures",
                            "points":  43
                        },
                        {
                            "text":  "wigs",
                            "points":  17
                        },
                        {
                            "text":  "bingo chips",
                            "points":  12
                        },
                        {
                            "text":  "bingo cards",
                            "points":  10
                        },
                        {
                            "text":  "daubers/pencils",
                            "points":  8
                        },
                        {
                            "text":  "costume jewelry",
                            "points":  2
                        },
                        {
                            "text":  "canes",
                            "points":  2
                        },
                        {
                            "text":  "clothes/girdles",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170028,
        "question":  "Name a complaint Tarzan might have about his new loincloth.",
        "answers":  [
                        {
                            "text":  "small/tight",
                            "points":  40
                        },
                        {
                            "text":  "itchy/chafes",
                            "points":  38
                        },
                        {
                            "text":  "stiff/starched",
                            "points":  5
                        },
                        {
                            "text":  "too long/big",
                            "points":  4
                        },
                        {
                            "text":  "too sheer/thin",
                            "points":  3
                        },
                        {
                            "text":  "has a hole",
                            "points":  2
                        },
                        {
                            "text":  "too smooth/silky",
                            "points":  2
                        },
                        {
                            "text":  "smells/filthy",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170029,
        "question":  "After a woman is dumped, name something she buys thinking, \"I'll show him.\"",
        "answers":  [
                        {
                            "text":  "sexy clothes/shoes",
                            "points":  38
                        },
                        {
                            "text":  "car of his dreams",
                            "points":  27
                        },
                        {
                            "text":  "boobs/surgery",
                            "points":  17
                        },
                        {
                            "text":  "house",
                            "points":  5
                        },
                        {
                            "text":  "jewelry/ring",
                            "points":  3
                        },
                        {
                            "text":  "haircut/sexy weave",
                            "points":  2
                        },
                        {
                            "text":  "gym membership",
                            "points":  2
                        },
                        {
                            "text":  "footlong vibrator",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170030,
        "question":  "Name a place you stop going to when you're broke.",
        "answers":  [
                        {
                            "text":  "restaurants",
                            "points":  32
                        },
                        {
                            "text":  "bar/nightclub",
                            "points":  16
                        },
                        {
                            "text":  "store/mall",
                            "points":  16
                        },
                        {
                            "text":  "casino",
                            "points":  15
                        },
                        {
                            "text":  "the movies",
                            "points":  8
                        },
                        {
                            "text":  "the bank",
                            "points":  4
                        },
                        {
                            "text":  "race track",
                            "points":  3
                        },
                        {
                            "text":  "ball game",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170031,
        "question":  "Name a subject that the smart woman knows never to mention on a first date.",
        "answers":  [
                        {
                            "text":  "exes/dudes",
                            "points":  32
                        },
                        {
                            "text":  "money/salary",
                            "points":  16
                        },
                        {
                            "text":  "sex/you packin'?",
                            "points":  14
                        },
                        {
                            "text":  "marry/set a date",
                            "points":  12
                        },
                        {
                            "text":  "politics",
                            "points":  9
                        },
                        {
                            "text":  "age",
                            "points":  6
                        },
                        {
                            "text":  "kids/she's preggo",
                            "points":  5
                        },
                        {
                            "text":  "sports",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170032,
        "question":  "We asked 100 women... Name a part of you that no one would ever describe as petite.",
        "answers":  [
                        {
                            "text":  "my big fat arse",
                            "points":  30
                        },
                        {
                            "text":  "my belly/waist",
                            "points":  26
                        },
                        {
                            "text":  "my twin peaks",
                            "points":  17
                        },
                        {
                            "text":  "my manly feet",
                            "points":  10
                        },
                        {
                            "text":  "my head",
                            "points":  4
                        },
                        {
                            "text":  "charging rhino legs",
                            "points":  4
                        },
                        {
                            "text":  "my big mouth",
                            "points":  3
                        },
                        {
                            "text":  "bird beak nose",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170033,
        "question":  "Name something you do when your boss has very bad breath.",
        "answers":  [
                        {
                            "text":  "avoid/walk away",
                            "points":  27
                        },
                        {
                            "text":  "offer gum/mint",
                            "points":  23
                        },
                        {
                            "text":  "turn away/back up",
                            "points":  23
                        },
                        {
                            "text":  "hold my breath",
                            "points":  10
                        },
                        {
                            "text":  "tell them",
                            "points":  5
                        },
                        {
                            "text":  "ignore/enjoy odor",
                            "points":  3
                        },
                        {
                            "text":  "gag/puke",
                            "points":  3
                        },
                        {
                            "text":  "cover my face",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170034,
        "question":  "Fill in the blank: A wife might say to her husband, \"Why can't you have a ______ like Steve Harvey?\"",
        "answers":  [
                        {
                            "text":  "personality/humor",
                            "points":  27
                        },
                        {
                            "text":  "bank acct./wallet",
                            "points":  20
                        },
                        {
                            "text":  "pair of lips/smile",
                            "points":  15
                        },
                        {
                            "text":  "career/tv show",
                            "points":  14
                        },
                        {
                            "text":  "suit/wardrobe",
                            "points":  6
                        },
                        {
                            "text":  "laugh",
                            "points":  6
                        },
                        {
                            "text":  "velvety voice",
                            "points":  4
                        },
                        {
                            "text":  "sexy stache",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170035,
        "question":  "We asked 100 women... Name something you've heard that people make love in but you'd never want to.",
        "answers":  [
                        {
                            "text":  "car",
                            "points":  21
                        },
                        {
                            "text":  "john/porta-potty",
                            "points":  18
                        },
                        {
                            "text":  "airplane",
                            "points":  15
                        },
                        {
                            "text":  "jacuzzi",
                            "points":  13
                        },
                        {
                            "text":  "closet/storage rm.",
                            "points":  12
                        },
                        {
                            "text":  "elevator",
                            "points":  9
                        },
                        {
                            "text":  "park",
                            "points":  5
                        },
                        {
                            "text":  "ocean/the sand",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170036,
        "question":  "Name a reason a bald guy might say he stopped wearing a hairpiece.",
        "answers":  [
                        {
                            "text":  "too hot/sweaty",
                            "points":  20
                        },
                        {
                            "text":  "too itchy",
                            "points":  18
                        },
                        {
                            "text":  "falls/blows off",
                            "points":  18
                        },
                        {
                            "text":  "bald is beautiful",
                            "points":  15
                        },
                        {
                            "text":  "bad look/scares kids",
                            "points":  14
                        },
                        {
                            "text":  "expense/upkeep",
                            "points":  5
                        },
                        {
                            "text":  "doesn't give a hoot",
                            "points":  4
                        },
                        {
                            "text":  "hair grew/rogaine",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170037,
        "question":  "If your dog could send text messages, who might he send a text to?",
        "answers":  [
                        {
                            "text":  "me/my family",
                            "points":  52
                        },
                        {
                            "text":  "dog/fifi the floozy",
                            "points":  17
                        },
                        {
                            "text":  "pesky cat",
                            "points":  11
                        },
                        {
                            "text":  "the vet",
                            "points":  6
                        },
                        {
                            "text":  "evil mailman",
                            "points":  3
                        },
                        {
                            "text":  "the butcher",
                            "points":  2
                        },
                        {
                            "text":  "pet store",
                            "points":  2
                        },
                        {
                            "text":  "restaurant/domino's",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170038,
        "question":  "Name something that Mrs. Potato Head might do to Mr. Potato Head when she's furious with him.",
        "answers":  [
                        {
                            "text":  "rip off body part",
                            "points":  51
                        },
                        {
                            "text":  "slice/mash",
                            "points":  19
                        },
                        {
                            "text":  "cook/bake",
                            "points":  10
                        },
                        {
                            "text":  "smack him",
                            "points":  6
                        },
                        {
                            "text":  "bite/eat him",
                            "points":  3
                        },
                        {
                            "text":  "eat chips/potatoes",
                            "points":  2
                        },
                        {
                            "text":  "hide his glasses",
                            "points":  2
                        },
                        {
                            "text":  "ignore him",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170039,
        "question":  "The magician's wife divorced him because she got tired of finding what in their bed?",
        "answers":  [
                        {
                            "text":  "bunny/bunny poo",
                            "points":  49
                        },
                        {
                            "text":  "assistant/her thong",
                            "points":  20
                        },
                        {
                            "text":  "playing cards",
                            "points":  7
                        },
                        {
                            "text":  "doves/feathers",
                            "points":  6
                        },
                        {
                            "text":  "scarves/hankies",
                            "points":  4
                        },
                        {
                            "text":  "knives",
                            "points":  3
                        },
                        {
                            "text":  "coins",
                            "points":  3
                        },
                        {
                            "text":  "handcuffs",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170040,
        "question":  "We asked 100 women... Fill in the blank: I like it when my man's underwear is ______.",
        "answers":  [
                        {
                            "text":  "clean",
                            "points":  47
                        },
                        {
                            "text":  "sexy",
                            "points":  15
                        },
                        {
                            "text":  "off/on the floor",
                            "points":  15
                        },
                        {
                            "text":  "tight",
                            "points":  8
                        },
                        {
                            "text":  "silk/silky",
                            "points":  3
                        },
                        {
                            "text":  "picked up/put away",
                            "points":  3
                        },
                        {
                            "text":  "colorful/pink",
                            "points":  2
                        },
                        {
                            "text":  "brief style",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170041,
        "question":  "Name something of Steve Harvey's you'd like to touch.",
        "answers":  [
                        {
                            "text":  "silky bald head",
                            "points":  44
                        },
                        {
                            "text":  "every last dollar",
                            "points":  17
                        },
                        {
                            "text":  "stache",
                            "points":  10
                        },
                        {
                            "text":  "hand",
                            "points":  7
                        },
                        {
                            "text":  "suit/tie",
                            "points":  7
                        },
                        {
                            "text":  "butt/glazed hams",
                            "points":  4
                        },
                        {
                            "text":  "car",
                            "points":  3
                        },
                        {
                            "text":  "face/bumper lips",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170042,
        "question":  "Name the first thing Steve Harvey would remove if he were in a game of strip poker.",
        "answers":  [
                        {
                            "text":  "his tie",
                            "points":  42
                        },
                        {
                            "text":  "his shoes",
                            "points":  15
                        },
                        {
                            "text":  "his shirt",
                            "points":  14
                        },
                        {
                            "text":  "his jacket",
                            "points":  9
                        },
                        {
                            "text":  "his hat",
                            "points":  6
                        },
                        {
                            "text":  "his mustache",
                            "points":  4
                        },
                        {
                            "text":  "his watch",
                            "points":  3
                        },
                        {
                            "text":  "his pants",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170043,
        "question":  "If a man's zipper breaks at church, what might he use to cover it up?",
        "answers":  [
                        {
                            "text":  "bible/hymnal",
                            "points":  37
                        },
                        {
                            "text":  "shirt tail",
                            "points":  27
                        },
                        {
                            "text":  "jacket/coat",
                            "points":  14
                        },
                        {
                            "text":  "his hands",
                            "points":  6
                        },
                        {
                            "text":  "hat",
                            "points":  3
                        },
                        {
                            "text":  "person",
                            "points":  3
                        },
                        {
                            "text":  "program/flyer",
                            "points":  3
                        },
                        {
                            "text":  "safety pin",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170044,
        "question":  "We asked 100 married men... Name something your wife might do if you made fun of her bottom.",
        "answers":  [
                        {
                            "text":  "mad/cuss out",
                            "points":  33
                        },
                        {
                            "text":  "beat/sit on me",
                            "points":  25
                        },
                        {
                            "text":  "\"no coochie for you!\"",
                            "points":  15
                        },
                        {
                            "text":  "pout/silent treatm't",
                            "points":  7
                        },
                        {
                            "text":  "cry",
                            "points":  5
                        },
                        {
                            "text":  "laugh",
                            "points":  4
                        },
                        {
                            "text":  "throw stuff",
                            "points":  3
                        },
                        {
                            "text":  "shake it/show it",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170045,
        "question":  "Name something a male whale might think is sexy about a female whale.",
        "answers":  [
                        {
                            "text":  "dat blowhole",
                            "points":  31
                        },
                        {
                            "text":  "tantalizing tail",
                            "points":  15
                        },
                        {
                            "text":  "catchy song/sounds",
                            "points":  12
                        },
                        {
                            "text":  "blubbery bod",
                            "points":  10
                        },
                        {
                            "text":  "deep eyes",
                            "points":  9
                        },
                        {
                            "text":  "them fine fins",
                            "points":  8
                        },
                        {
                            "text":  "hot humpback",
                            "points":  7
                        },
                        {
                            "text":  "her scent",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170046,
        "question":  "We asked 100 single men... Name one reason that smart, sexy women just aren't attracted to you.",
        "answers":  [
                        {
                            "text":  "i'm 623 lbs.",
                            "points":  28
                        },
                        {
                            "text":  "i'm a broke joke",
                            "points":  20
                        },
                        {
                            "text":  "my tragic face",
                            "points":  16
                        },
                        {
                            "text":  "age/i'm a geezer",
                            "points":  12
                        },
                        {
                            "text":  "death breath",
                            "points":  9
                        },
                        {
                            "text":  "so hairy, it's scary",
                            "points":  6
                        },
                        {
                            "text":  "creepy/personality",
                            "points":  2
                        },
                        {
                            "text":  "bad haircut/bald",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170047,
        "question":  "When you open your mouth to speak, name something you hope doesn't come out.",
        "answers":  [
                        {
                            "text":  "cussin'/insults",
                            "points":  25
                        },
                        {
                            "text":  "spit/drool",
                            "points":  23
                        },
                        {
                            "text":  "big belch",
                            "points":  20
                        },
                        {
                            "text":  "teeth/dentures",
                            "points":  11
                        },
                        {
                            "text":  "food particle/gum",
                            "points":  6
                        },
                        {
                            "text":  "projectile vomit",
                            "points":  4
                        },
                        {
                            "text":  "the truth/secrets",
                            "points":  3
                        },
                        {
                            "text":  "mother's voice/words",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170048,
        "question":  "Name something you'd do if your grandparents started making out at a family reunion.",
        "answers":  [
                        {
                            "text":  "laugh/smile",
                            "points":  21
                        },
                        {
                            "text":  "leave room/run",
                            "points":  20
                        },
                        {
                            "text":  "pic/vid/facebook",
                            "points":  12
                        },
                        {
                            "text":  "clap & cheer",
                            "points":  12
                        },
                        {
                            "text":  "\"get a room\"/\"stop!\"",
                            "points":  11
                        },
                        {
                            "text":  "gag/puke",
                            "points":  8
                        },
                        {
                            "text":  "cover eyes/look away",
                            "points":  7
                        },
                        {
                            "text":  "blush",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170049,
        "question":  "Name a traffic sign you'd like to hold up at a Thanksgiving dinner with relatives.",
        "answers":  [
                        {
                            "text":  "stop",
                            "points":  55
                        },
                        {
                            "text":  "yield",
                            "points":  18
                        },
                        {
                            "text":  "caution",
                            "points":  5
                        },
                        {
                            "text":  "slow",
                            "points":  5
                        },
                        {
                            "text":  "exit/exit only",
                            "points":  4
                        },
                        {
                            "text":  "quiet zone",
                            "points":  3
                        },
                        {
                            "text":  "do not enter",
                            "points":  2
                        },
                        {
                            "text":  "cattle crossing",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170050,
        "question":  "Name something that mothers make their children feel guilty about not doing.",
        "answers":  [
                        {
                            "text":  "chores/cleaning",
                            "points":  55
                        },
                        {
                            "text":  "calling her",
                            "points":  12
                        },
                        {
                            "text":  "homework/learning",
                            "points":  9
                        },
                        {
                            "text":  "brushing teeth",
                            "points":  6
                        },
                        {
                            "text":  "visiting",
                            "points":  5
                        },
                        {
                            "text":  "eating/veggies",
                            "points":  3
                        },
                        {
                            "text":  "sharing",
                            "points":  2
                        },
                        {
                            "text":  "bathing",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170051,
        "question":  "We asked 100 men... You'd never sell your soul to the devil. But if you did, what would you want in return?",
        "answers":  [
                        {
                            "text":  "money",
                            "points":  42
                        },
                        {
                            "text":  "babe/endless supply",
                            "points":  24
                        },
                        {
                            "text":  "long/eternal life",
                            "points":  16
                        },
                        {
                            "text":  "power",
                            "points":  3
                        },
                        {
                            "text":  "happiness",
                            "points":  3
                        },
                        {
                            "text":  "world peace",
                            "points":  2
                        },
                        {
                            "text":  "unlimited wishes",
                            "points":  2
                        },
                        {
                            "text":  "to be a star, dahling",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170052,
        "question":  "We asked 100 married women... Name a kind of boat that best describes your man in the bedroom.",
        "answers":  [
                        {
                            "text":  "speed/motorboat",
                            "points":  38
                        },
                        {
                            "text":  "dinghy",
                            "points":  16
                        },
                        {
                            "text":  "tugboat",
                            "points":  9
                        },
                        {
                            "text":  "yacht",
                            "points":  8
                        },
                        {
                            "text":  "rowboat",
                            "points":  7
                        },
                        {
                            "text":  "sailboat/schooner",
                            "points":  6
                        },
                        {
                            "text":  "cruise ship/titanic",
                            "points":  6
                        },
                        {
                            "text":  "barge",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170053,
        "question":  "Fill in the blank: It was a rough wedding -- even the ______ was wearing a gun.",
        "answers":  [
                        {
                            "text":  "clergy",
                            "points":  34
                        },
                        {
                            "text":  "bride",
                            "points":  23
                        },
                        {
                            "text":  "groom",
                            "points":  13
                        },
                        {
                            "text":  "flower girl",
                            "points":  9
                        },
                        {
                            "text":  "dad",
                            "points":  5
                        },
                        {
                            "text":  "ring bearer",
                            "points":  4
                        },
                        {
                            "text":  "caterer/waiter",
                            "points":  3
                        },
                        {
                            "text":  "best man",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170054,
        "question":  "Name something about a person that might remind you of a horse.",
        "answers":  [
                        {
                            "text":  "mouth/chompers",
                            "points":  28
                        },
                        {
                            "text":  "long face/jaw",
                            "points":  20
                        },
                        {
                            "text":  "hair/ponytail",
                            "points":  15
                        },
                        {
                            "text":  "muscly pooper",
                            "points":  10
                        },
                        {
                            "text":  "laugh/neigh",
                            "points":  9
                        },
                        {
                            "text":  "nose/nostrils",
                            "points":  8
                        },
                        {
                            "text":  "eat/chew'g habits",
                            "points":  2
                        },
                        {
                            "text":  "how they walk",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170055,
        "question":  "If you were going to prison on Monday, what might you do on Sunday night?",
        "answers":  [
                        {
                            "text":  "drink/paar-tay!",
                            "points":  21
                        },
                        {
                            "text":  "pig out",
                            "points":  20
                        },
                        {
                            "text":  "bow chicka wow wow",
                            "points":  16
                        },
                        {
                            "text":  "run/for border",
                            "points":  16
                        },
                        {
                            "text":  "pray",
                            "points":  10
                        },
                        {
                            "text":  "be with/hug family",
                            "points":  5
                        },
                        {
                            "text":  "cry",
                            "points":  3
                        },
                        {
                            "text":  "commit more crimes",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170056,
        "question":  "Name something a naked cowboy should do very carefully.",
        "answers":  [
                        {
                            "text":  "ride horse/bull",
                            "points":  64
                        },
                        {
                            "text":  "wear/squat in spurs",
                            "points":  11
                        },
                        {
                            "text":  "cook/fry food",
                            "points":  4
                        },
                        {
                            "text":  "go thru cacti",
                            "points":  4
                        },
                        {
                            "text":  "lasso",
                            "points":  3
                        },
                        {
                            "text":  "shoots his gun",
                            "points":  3
                        },
                        {
                            "text":  "light campfire",
                            "points":  2
                        },
                        {
                            "text":  "strum/angle guitar",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170057,
        "question":  "Fill in the blank: I won't date someone with an ugly ______.",
        "answers":  [
                        {
                            "text":  "face/nose/smile",
                            "points":  39
                        },
                        {
                            "text":  "personality/'tude",
                            "points":  32
                        },
                        {
                            "text":  "beard/hair",
                            "points":  5
                        },
                        {
                            "text":  "heart/character",
                            "points":  5
                        },
                        {
                            "text":  "wardrobe/shoes",
                            "points":  4
                        },
                        {
                            "text":  "car",
                            "points":  4
                        },
                        {
                            "text":  "kid",
                            "points":  2
                        },
                        {
                            "text":  "mother/father",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170058,
        "question":  "Name a reason the Tooth Fairy might not leave a kid any money for his tooth.",
        "answers":  [
                        {
                            "text":  "kid's evil heathen",
                            "points":  29
                        },
                        {
                            "text":  "fairy's broke/robbed",
                            "points":  18
                        },
                        {
                            "text":  "cavity/it's rotten",
                            "points":  16
                        },
                        {
                            "text":  "fake tooth",
                            "points":  12
                        },
                        {
                            "text":  "tooth's not there",
                            "points":  7
                        },
                        {
                            "text":  "kid's old/30",
                            "points":  4
                        },
                        {
                            "text":  "fairy forgot",
                            "points":  4
                        },
                        {
                            "text":  "kid pulled just for $",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170059,
        "question":  "We asked 100 men... You'd always be on your best behavior if you were dating a woman who was a what?",
        "answers":  [
                        {
                            "text":  "hottie/model",
                            "points":  25
                        },
                        {
                            "text":  "police officer",
                            "points":  19
                        },
                        {
                            "text":  "wrestler/fighter",
                            "points":  19
                        },
                        {
                            "text":  "angry nutjob",
                            "points":  12
                        },
                        {
                            "text":  "nun",
                            "points":  6
                        },
                        {
                            "text":  "actress",
                            "points":  5
                        },
                        {
                            "text":  "lawyer",
                            "points":  5
                        },
                        {
                            "text":  "princess",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170060,
        "question":  "I could never make love to someone that looked like my who?",
        "answers":  [
                        {
                            "text":  "my mom/dad",
                            "points":  55
                        },
                        {
                            "text":  "my sibling",
                            "points":  18
                        },
                        {
                            "text":  "my ex",
                            "points":  8
                        },
                        {
                            "text":  "my granny/gramps",
                            "points":  3
                        },
                        {
                            "text":  "my in-law",
                            "points":  2
                        },
                        {
                            "text":  "my boss",
                            "points":  2
                        },
                        {
                            "text":  "my teacher",
                            "points":  2
                        },
                        {
                            "text":  "my nephew/niece",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170061,
        "question":  "Name a body part that cannibals swear is a hit at any barbecue.",
        "answers":  [
                        {
                            "text":  "leg/thigh",
                            "points":  37
                        },
                        {
                            "text":  "ribs",
                            "points":  25
                        },
                        {
                            "text":  "juicy rump",
                            "points":  8
                        },
                        {
                            "text":  "head/brain",
                            "points":  6
                        },
                        {
                            "text":  "man sausage/oysters",
                            "points":  5
                        },
                        {
                            "text":  "heart",
                            "points":  4
                        },
                        {
                            "text":  "arm",
                            "points":  4
                        },
                        {
                            "text":  "plump breast",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170062,
        "question":  "An angry wife might tell her husband, \"If I were a dog, I'd pee on your\" what?",
        "answers":  [
                        {
                            "text":  "leg/foot",
                            "points":  36
                        },
                        {
                            "text":  "clothes/shoes",
                            "points":  24
                        },
                        {
                            "text":  "face/head",
                            "points":  18
                        },
                        {
                            "text":  "pillow",
                            "points":  4
                        },
                        {
                            "text":  "car/tires",
                            "points":  3
                        },
                        {
                            "text":  "chair/couch",
                            "points":  3
                        },
                        {
                            "text":  "food/cheerios",
                            "points":  2
                        },
                        {
                            "text":  "phone",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170063,
        "question":  "We asked 100 men... If you were a stripper, which superhero's name would you use?",
        "answers":  [
                        {
                            "text":  "superman",
                            "points":  32
                        },
                        {
                            "text":  "batman",
                            "points":  28
                        },
                        {
                            "text":  "the flash",
                            "points":  10
                        },
                        {
                            "text":  "thor",
                            "points":  8
                        },
                        {
                            "text":  "incredible hulk",
                            "points":  7
                        },
                        {
                            "text":  "spider-man",
                            "points":  3
                        },
                        {
                            "text":  "wonder woman",
                            "points":  2
                        },
                        {
                            "text":  "captain america",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170064,
        "question":  "We asked 100 men... Name a specific food that reminds you of your woman because it's juicy.",
        "answers":  [
                        {
                            "text":  "peach",
                            "points":  28
                        },
                        {
                            "text":  "orange",
                            "points":  15
                        },
                        {
                            "text":  "melon",
                            "points":  11
                        },
                        {
                            "text":  "steak",
                            "points":  10
                        },
                        {
                            "text":  "chicken",
                            "points":  8
                        },
                        {
                            "text":  "mango",
                            "points":  8
                        },
                        {
                            "text":  "hamburger",
                            "points":  6
                        },
                        {
                            "text":  "strawberry",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  170065,
        "question":  "Because it's hell, on your first morning there, you'll probably wake up next to who?",
        "answers":  [
                        {
                            "text":  "my ex",
                            "points":  27
                        },
                        {
                            "text":  "the devil",
                            "points":  23
                        },
                        {
                            "text":  "dictator/politician",
                            "points":  21
                        },
                        {
                            "text":  "my boss",
                            "points":  5
                        },
                        {
                            "text":  "my mother-in-law",
                            "points":  5
                        },
                        {
                            "text":  "my spouse",
                            "points":  4
                        },
                        {
                            "text":  "my best friend",
                            "points":  4
                        },
                        {
                            "text":  "charles manson",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170066,
        "question":  "Santa can't work next year. He just found out he's allergic to what?",
        "answers":  [
                        {
                            "text":  "snow",
                            "points":  27
                        },
                        {
                            "text":  "reindeer",
                            "points":  19
                        },
                        {
                            "text":  "milk & cookies",
                            "points":  13
                        },
                        {
                            "text":  "toys/gifts",
                            "points":  11
                        },
                        {
                            "text":  "kids/brats",
                            "points":  9
                        },
                        {
                            "text":  "christmas trees",
                            "points":  5
                        },
                        {
                            "text":  "chimneys/soot",
                            "points":  4
                        },
                        {
                            "text":  "elves",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170067,
        "question":  "Name something the world's rudest doctor might make fun of while giving you a routine exam.",
        "answers":  [
                        {
                            "text":  "big fat bod",
                            "points":  60
                        },
                        {
                            "text":  "naughty parts",
                            "points":  12
                        },
                        {
                            "text":  "boobs/sweater puppies",
                            "points":  6
                        },
                        {
                            "text":  "revolting face",
                            "points":  4
                        },
                        {
                            "text":  "body hair",
                            "points":  3
                        },
                        {
                            "text":  "me need'g surgery",
                            "points":  2
                        },
                        {
                            "text":  "my nasty odor",
                            "points":  2
                        },
                        {
                            "text":  "prostate",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170068,
        "question":  "If a girl were brutally honest, name a specific reason she might give a guy for not dating him.",
        "answers":  [
                        {
                            "text":  "his tragic face",
                            "points":  42
                        },
                        {
                            "text":  "reek/like dead rat",
                            "points":  17
                        },
                        {
                            "text":  "personality",
                            "points":  12
                        },
                        {
                            "text":  "short/bad bod",
                            "points":  9
                        },
                        {
                            "text":  "too poor",
                            "points":  5
                        },
                        {
                            "text":  "job/an \"actor\"",
                            "points":  2
                        },
                        {
                            "text":  "too cheap",
                            "points":  2
                        },
                        {
                            "text":  "pals/no chemistry",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170069,
        "question":  "You're on an airplane. The person next to you won't stop talking. What do you do?",
        "answers":  [
                        {
                            "text":  "sleep/fake snore",
                            "points":  36
                        },
                        {
                            "text":  "earphones/plugs",
                            "points":  29
                        },
                        {
                            "text":  "ask them to stop",
                            "points":  7
                        },
                        {
                            "text":  "chat/tolerate it",
                            "points":  5
                        },
                        {
                            "text":  "complain/new seat",
                            "points":  5
                        },
                        {
                            "text":  "go to bathroom",
                            "points":  3
                        },
                        {
                            "text":  "read",
                            "points":  3
                        },
                        {
                            "text":  "start farting",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170070,
        "question":  "We asked 100 men... Name an occupation that, for you, would be living the dream.",
        "answers":  [
                        {
                            "text":  "athlete/fisherman",
                            "points":  35
                        },
                        {
                            "text":  "doctor/gyno",
                            "points":  13
                        },
                        {
                            "text":  "musician/rocker",
                            "points":  10
                        },
                        {
                            "text":  "lawyer",
                            "points":  8
                        },
                        {
                            "text":  "business owner",
                            "points":  8
                        },
                        {
                            "text":  "fireman",
                            "points":  7
                        },
                        {
                            "text":  "pilot",
                            "points":  5
                        },
                        {
                            "text":  "writer/sports mag",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170071,
        "question":  "Instead of delivering presents, name something Bad Santa might do on Christmas Eve.",
        "answers":  [
                        {
                            "text":  "booze it up",
                            "points":  33
                        },
                        {
                            "text":  "steal gifts/mug kids",
                            "points":  31
                        },
                        {
                            "text":  "ho-ho-ho around",
                            "points":  15
                        },
                        {
                            "text":  "leave coal",
                            "points":  4
                        },
                        {
                            "text":  "poop/in chimneys",
                            "points":  2
                        },
                        {
                            "text":  "sleep",
                            "points":  2
                        },
                        {
                            "text":  "hit elf strip club",
                            "points":  2
                        },
                        {
                            "text":  "watch tv",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170072,
        "question":  "We asked 100 married men... Name something you'd be alarmed to find in the trunk of your wife's car.",
        "answers":  [
                        {
                            "text":  "dead body",
                            "points":  33
                        },
                        {
                            "text":  "a gun",
                            "points":  15
                        },
                        {
                            "text":  "clothes/a man's",
                            "points":  15
                        },
                        {
                            "text":  "her kinky lover",
                            "points":  14
                        },
                        {
                            "text":  "crate of rubbers",
                            "points":  6
                        },
                        {
                            "text":  "tools",
                            "points":  4
                        },
                        {
                            "text":  "booze",
                            "points":  2
                        },
                        {
                            "text":  "packed suitcase",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170073,
        "question":  "Name something about Santa Claus that might make him a chick magnet.",
        "answers":  [
                        {
                            "text":  "hipster beard/hair",
                            "points":  30
                        },
                        {
                            "text":  "gifts galore",
                            "points":  22
                        },
                        {
                            "text":  "his ho-ho-ho/smile",
                            "points":  12
                        },
                        {
                            "text":  "fine red threads",
                            "points":  9
                        },
                        {
                            "text":  "sweet ride",
                            "points":  8
                        },
                        {
                            "text":  "twinkly eyes",
                            "points":  4
                        },
                        {
                            "text":  "rosy cheeks/dimples",
                            "points":  3
                        },
                        {
                            "text":  "hot jelly belly",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170074,
        "question":  "We asked 100 married women... Your husband hates to admit that you have a better what than he does?",
        "answers":  [
                        {
                            "text":  "mind/education",
                            "points":  29
                        },
                        {
                            "text":  "job",
                            "points":  18
                        },
                        {
                            "text":  "body/booty",
                            "points":  14
                        },
                        {
                            "text":  "heart",
                            "points":  8
                        },
                        {
                            "text":  "head of hair/perm",
                            "points":  7
                        },
                        {
                            "text":  "smile/face",
                            "points":  6
                        },
                        {
                            "text":  "sense of direction",
                            "points":  5
                        },
                        {
                            "text":  "personality/humor",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170075,
        "question":  "We asked 100 married women... Name something you'll let your husband get away with doing, but just once.",
        "answers":  [
                        {
                            "text":  "forget b-day/anniv.",
                            "points":  26
                        },
                        {
                            "text":  "flirting/ogling",
                            "points":  24
                        },
                        {
                            "text":  "lying",
                            "points":  17
                        },
                        {
                            "text":  "cheating/3-way",
                            "points":  9
                        },
                        {
                            "text":  "blowing paycheck",
                            "points":  5
                        },
                        {
                            "text":  "not calling",
                            "points":  5
                        },
                        {
                            "text":  "insult/\"you're fat\"",
                            "points":  3
                        },
                        {
                            "text":  "ignoring me",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170076,
        "question":  "We asked 100 married people... What might you bring to bed with you when you're feeling romantic?",
        "answers":  [
                        {
                            "text":  "wine/champagne",
                            "points":  24
                        },
                        {
                            "text":  "lube/crisco",
                            "points":  17
                        },
                        {
                            "text":  "my spouse",
                            "points":  14
                        },
                        {
                            "text":  "food/whipped crm.",
                            "points":  11
                        },
                        {
                            "text":  "candles",
                            "points":  9
                        },
                        {
                            "text":  "my nude, randy self",
                            "points":  6
                        },
                        {
                            "text":  "condoms",
                            "points":  5
                        },
                        {
                            "text":  "handcuffs/toy",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170077,
        "question":  "We asked 100 women... You use cheese to catch a mouse. What might you use to catch a spouse?",
        "answers":  [
                        {
                            "text":  "food/steak",
                            "points":  23
                        },
                        {
                            "text":  "boobies",
                            "points":  19
                        },
                        {
                            "text":  "sex",
                            "points":  17
                        },
                        {
                            "text":  "money",
                            "points":  14
                        },
                        {
                            "text":  "personality/humor",
                            "points":  10
                        },
                        {
                            "text":  "sexy duds/bikini",
                            "points":  4
                        },
                        {
                            "text":  "flirty smile",
                            "points":  2
                        },
                        {
                            "text":  "a kiss",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170078,
        "question":  "What would a man who marries Dorothy from \"The Wizard of Oz\" get tired of her talking about?",
        "answers":  [
                        {
                            "text":  "toto",
                            "points":  23
                        },
                        {
                            "text":  "kansas/home",
                            "points":  17
                        },
                        {
                            "text":  "yellow brick road",
                            "points":  13
                        },
                        {
                            "text":  "ruby slippers",
                            "points":  13
                        },
                        {
                            "text":  "oz/the wizard",
                            "points":  12
                        },
                        {
                            "text":  "lion",
                            "points":  5
                        },
                        {
                            "text":  "munchkins",
                            "points":  4
                        },
                        {
                            "text":  "rainbows",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170079,
        "question":  "We asked 100 married people... Name a room in the house you'd be least likely to make love.",
        "answers":  [
                        {
                            "text":  "kitchen",
                            "points":  22
                        },
                        {
                            "text":  "defecation station",
                            "points":  19
                        },
                        {
                            "text":  "laundry room",
                            "points":  14
                        },
                        {
                            "text":  "kid's room",
                            "points":  12
                        },
                        {
                            "text":  "closet/pantry",
                            "points":  10
                        },
                        {
                            "text":  "garage",
                            "points":  5
                        },
                        {
                            "text":  "basement",
                            "points":  5
                        },
                        {
                            "text":  "attic",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170080,
        "question":  "Name a place a woman goes when she wants to hear the juiciest gossip.",
        "answers":  [
                        {
                            "text":  "beauty/nail salon",
                            "points":  54
                        },
                        {
                            "text":  "church",
                            "points":  7
                        },
                        {
                            "text":  "work",
                            "points":  7
                        },
                        {
                            "text":  "friend's house",
                            "points":  6
                        },
                        {
                            "text":  "facebook/web",
                            "points":  4
                        },
                        {
                            "text":  "coffee shop",
                            "points":  4
                        },
                        {
                            "text":  "bar/nightclub",
                            "points":  4
                        },
                        {
                            "text":  "the ladies' room",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170081,
        "question":  "Name something an 80-year-old man might get rid of if he discovered the Fountain of Youth.",
        "answers":  [
                        {
                            "text":  "his old lady",
                            "points":  46
                        },
                        {
                            "text":  "cane/walker",
                            "points":  20
                        },
                        {
                            "text":  "wrinkles/jowls",
                            "points":  6
                        },
                        {
                            "text":  "gray hair",
                            "points":  5
                        },
                        {
                            "text":  "dentures",
                            "points":  5
                        },
                        {
                            "text":  "viagra/meds",
                            "points":  3
                        },
                        {
                            "text":  "old man clothes",
                            "points":  3
                        },
                        {
                            "text":  "weight/belly",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170082,
        "question":  "Name something a baker might put on his buns at work and his wife's buns at home.",
        "answers":  [
                        {
                            "text":  "butter",
                            "points":  41
                        },
                        {
                            "text":  "icing/chocolate",
                            "points":  13
                        },
                        {
                            "text":  "his hands",
                            "points":  9
                        },
                        {
                            "text":  "honey",
                            "points":  7
                        },
                        {
                            "text":  "oil",
                            "points":  6
                        },
                        {
                            "text":  "whipped cream",
                            "points":  6
                        },
                        {
                            "text":  "flour",
                            "points":  4
                        },
                        {
                            "text":  "meat/wiener",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170083,
        "question":  "Name something that some people do sexier than others.",
        "answers":  [
                        {
                            "text":  "dance",
                            "points":  30
                        },
                        {
                            "text":  "walk",
                            "points":  20
                        },
                        {
                            "text":  "dress",
                            "points":  9
                        },
                        {
                            "text":  "talk",
                            "points":  9
                        },
                        {
                            "text":  "smile",
                            "points":  7
                        },
                        {
                            "text":  "kiss",
                            "points":  7
                        },
                        {
                            "text":  "wink",
                            "points":  4
                        },
                        {
                            "text":  "make love",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170084,
        "question":  "We asked 100 women... Name a superhero costume that would spice things up for you in the bedroom.",
        "answers":  [
                        {
                            "text":  "wonder woman",
                            "points":  26
                        },
                        {
                            "text":  "superman",
                            "points":  18
                        },
                        {
                            "text":  "batman",
                            "points":  15
                        },
                        {
                            "text":  "batgirl/woman",
                            "points":  12
                        },
                        {
                            "text":  "catwoman",
                            "points":  6
                        },
                        {
                            "text":  "hercules",
                            "points":  5
                        },
                        {
                            "text":  "thor",
                            "points":  4
                        },
                        {
                            "text":  "harley quinn",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170085,
        "question":  "Name an animal that poops more in a day than you do in a week.",
        "answers":  [
                        {
                            "text":  "elephant",
                            "points":  21
                        },
                        {
                            "text":  "dog",
                            "points":  21
                        },
                        {
                            "text":  "bird/duck",
                            "points":  16
                        },
                        {
                            "text":  "rabbit",
                            "points":  8
                        },
                        {
                            "text":  "horse",
                            "points":  7
                        },
                        {
                            "text":  "mouse/rat",
                            "points":  6
                        },
                        {
                            "text":  "cow",
                            "points":  6
                        },
                        {
                            "text":  "cat",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170086,
        "question":  "Name a reason Steve Harvey is more handsome now than ever.",
        "answers":  [
                        {
                            "text":  "more mature",
                            "points":  19
                        },
                        {
                            "text":  "charm/humor",
                            "points":  18
                        },
                        {
                            "text":  "his money, honey!",
                            "points":  16
                        },
                        {
                            "text":  "bald is beautiful",
                            "points":  12
                        },
                        {
                            "text":  "smile/sausage lips",
                            "points":  8
                        },
                        {
                            "text":  "that stache",
                            "points":  7
                        },
                        {
                            "text":  "pimpin' clothes",
                            "points":  6
                        },
                        {
                            "text":  "fit/skinny bod",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170087,
        "question":  "Birds do it. Bees do it. Name a creature that does it much more than you do it.",
        "answers":  [
                        {
                            "text":  "rabbits",
                            "points":  59
                        },
                        {
                            "text":  "dogs",
                            "points":  10
                        },
                        {
                            "text":  "flies",
                            "points":  6
                        },
                        {
                            "text":  "cats",
                            "points":  4
                        },
                        {
                            "text":  "ants",
                            "points":  3
                        },
                        {
                            "text":  "dolphins",
                            "points":  3
                        },
                        {
                            "text":  "lions",
                            "points":  2
                        },
                        {
                            "text":  "mice/rats",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170088,
        "question":  "If you woke up during surgery, what would you hate to see the surgeon holding?",
        "answers":  [
                        {
                            "text":  "heart/internal organ",
                            "points":  40
                        },
                        {
                            "text":  "knife/scalpel",
                            "points":  15
                        },
                        {
                            "text":  "booze/martini",
                            "points":  10
                        },
                        {
                            "text":  "phone",
                            "points":  8
                        },
                        {
                            "text":  "a saw",
                            "points":  7
                        },
                        {
                            "text":  "book/instructions",
                            "points":  3
                        },
                        {
                            "text":  "my arm/leg",
                            "points":  3
                        },
                        {
                            "text":  "my perky li'l peter",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170089,
        "question":  "Name something about his wife that makes a man say, \"I married up.\"",
        "answers":  [
                        {
                            "text":  "she's rich/great job",
                            "points":  37
                        },
                        {
                            "text":  "her foxy face",
                            "points":  29
                        },
                        {
                            "text":  "her bangin' bod",
                            "points":  8
                        },
                        {
                            "text":  "her smarts",
                            "points":  3
                        },
                        {
                            "text":  "her house",
                            "points":  3
                        },
                        {
                            "text":  "she's young/19",
                            "points":  3
                        },
                        {
                            "text":  "her cooking",
                            "points":  3
                        },
                        {
                            "text":  "she's classy",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170090,
        "question":  "I'd love to snap my fingers and suddenly become what?",
        "answers":  [
                        {
                            "text":  "rich",
                            "points":  37
                        },
                        {
                            "text":  "thin/healthy/fit",
                            "points":  20
                        },
                        {
                            "text":  "invisible/superhero",
                            "points":  14
                        },
                        {
                            "text":  "young",
                            "points":  9
                        },
                        {
                            "text":  "famous/erik estrada",
                            "points":  3
                        },
                        {
                            "text":  "happy",
                            "points":  2
                        },
                        {
                            "text":  "handsome/pretty",
                            "points":  2
                        },
                        {
                            "text":  "a good singer",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170091,
        "question":  "We asked 100 men... Name something your blind date has with her that makes you suspect she may be underage.",
        "answers":  [
                        {
                            "text":  "id/fake/high school",
                            "points":  32
                        },
                        {
                            "text":  "candy/lollipop",
                            "points":  13
                        },
                        {
                            "text":  "book/homework",
                            "points":  12
                        },
                        {
                            "text":  "dolls/toys",
                            "points":  12
                        },
                        {
                            "text":  "braces",
                            "points":  6
                        },
                        {
                            "text":  "her mother",
                            "points":  6
                        },
                        {
                            "text":  "uniform/clothes",
                            "points":  4
                        },
                        {
                            "text":  "backpack",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170092,
        "question":  "Name something specific a man would hate to have happen when he gets down on one knee to propose.",
        "answers":  [
                        {
                            "text":  "his pants rip",
                            "points":  30
                        },
                        {
                            "text":  "she says no!",
                            "points":  15
                        },
                        {
                            "text":  "he falls over",
                            "points":  13
                        },
                        {
                            "text":  "fart/call of doody",
                            "points":  12
                        },
                        {
                            "text":  "she runs away",
                            "points":  6
                        },
                        {
                            "text":  "drops/loses ring",
                            "points":  6
                        },
                        {
                            "text":  "he can't get up",
                            "points":  4
                        },
                        {
                            "text":  "cramp/charley horse",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170093,
        "question":  "Name something specific you'd be tempted to do to get a waiter's attention when he's ignoring you.",
        "answers":  [
                        {
                            "text":  "raise hand/wave",
                            "points":  27
                        },
                        {
                            "text":  "\"yo! garcon!\"",
                            "points":  19
                        },
                        {
                            "text":  "whistle at him",
                            "points":  15
                        },
                        {
                            "text":  "snap fingers",
                            "points":  12
                        },
                        {
                            "text":  "throw stuff at him",
                            "points":  6
                        },
                        {
                            "text":  "walk up to him",
                            "points":  4
                        },
                        {
                            "text":  "get the manager",
                            "points":  3
                        },
                        {
                            "text":  "stare intensely",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170094,
        "question":  "We asked 100 men... Be honest: Your best friend has a better what than you?",
        "answers":  [
                        {
                            "text":  "car",
                            "points":  26
                        },
                        {
                            "text":  "job",
                            "points":  20
                        },
                        {
                            "text":  "wife/babe/lover",
                            "points":  15
                        },
                        {
                            "text":  "house/yard",
                            "points":  9
                        },
                        {
                            "text":  "personality/humor",
                            "points":  6
                        },
                        {
                            "text":  "bank account",
                            "points":  5
                        },
                        {
                            "text":  "body/moose knuckle",
                            "points":  5
                        },
                        {
                            "text":  "head o' hair/style",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170095,
        "question":  "It's bad when you have ants in your pants. But it would be worse if you had what bug in your pants?",
        "answers":  [
                        {
                            "text":  "bee/wasp",
                            "points":  26
                        },
                        {
                            "text":  "spider/tarantula",
                            "points":  16
                        },
                        {
                            "text":  "cockroach",
                            "points":  15
                        },
                        {
                            "text":  "scorpion",
                            "points":  10
                        },
                        {
                            "text":  "crabs/lice",
                            "points":  9
                        },
                        {
                            "text":  "tick",
                            "points":  5
                        },
                        {
                            "text":  "mosquito",
                            "points":  4
                        },
                        {
                            "text":  "fleas",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170096,
        "question":  "You have a week to live. You can't take it with you. So what do you spend your money on?",
        "answers":  [
                        {
                            "text":  "vacation",
                            "points":  51
                        },
                        {
                            "text":  "family/kids",
                            "points":  13
                        },
                        {
                            "text":  "drugs/primo weed",
                            "points":  6
                        },
                        {
                            "text":  "concert/tom jones",
                            "points":  4
                        },
                        {
                            "text":  "booze",
                            "points":  4
                        },
                        {
                            "text":  "hookers/gigolos",
                            "points":  4
                        },
                        {
                            "text":  "charity",
                            "points":  3
                        },
                        {
                            "text":  "food/caviar",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170097,
        "question":  "Name something about a man that his date might suspect is fake.",
        "answers":  [
                        {
                            "text":  "hair/the color",
                            "points":  47
                        },
                        {
                            "text":  "career",
                            "points":  9
                        },
                        {
                            "text":  "personality/charm",
                            "points":  7
                        },
                        {
                            "text":  "his age",
                            "points":  6
                        },
                        {
                            "text":  "his name",
                            "points":  5
                        },
                        {
                            "text":  "his bulge/size",
                            "points":  5
                        },
                        {
                            "text":  "net worth",
                            "points":  5
                        },
                        {
                            "text":  "his smile/teeth",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170098,
        "question":  "A party gets taken to a whole new level when someone shows up with what?",
        "answers":  [
                        {
                            "text":  "booze/90 proof",
                            "points":  45
                        },
                        {
                            "text":  "drugs/bath salts",
                            "points":  20
                        },
                        {
                            "text":  "games/ouija board",
                            "points":  6
                        },
                        {
                            "text":  "food/wings",
                            "points":  4
                        },
                        {
                            "text":  "strippers",
                            "points":  4
                        },
                        {
                            "text":  "celeb/taylor swift",
                            "points":  3
                        },
                        {
                            "text":  "a donkey/horse",
                            "points":  3
                        },
                        {
                            "text":  "the fuzz",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170099,
        "question":  "Name something a 100-year-old woman might buy for her 80-year-old boy toy.",
        "answers":  [
                        {
                            "text":  "viagra/meds",
                            "points":  35
                        },
                        {
                            "text":  "duds/nut huggers",
                            "points":  15
                        },
                        {
                            "text":  "car/oldsmobile",
                            "points":  13
                        },
                        {
                            "text":  "sex toy/strip pole",
                            "points":  9
                        },
                        {
                            "text":  "dentures",
                            "points":  7
                        },
                        {
                            "text":  "walker/cane",
                            "points":  5
                        },
                        {
                            "text":  "depends",
                            "points":  2
                        },
                        {
                            "text":  "motorcycle",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170100,
        "question":  "Name a tool that the nude handyman must handle very carefully.",
        "answers":  [
                        {
                            "text":  "saw/chain saw",
                            "points":  33
                        },
                        {
                            "text":  "hammer/jackhammer",
                            "points":  18
                        },
                        {
                            "text":  "nail gun",
                            "points":  11
                        },
                        {
                            "text":  "razor/knife",
                            "points":  9
                        },
                        {
                            "text":  "drill",
                            "points":  6
                        },
                        {
                            "text":  "pliers",
                            "points":  5
                        },
                        {
                            "text":  "blowtorch",
                            "points":  3
                        },
                        {
                            "text":  "wrench",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170101,
        "question":  "Name a candy that's perfect for your belly button, decorative and delicious.",
        "answers":  [
                        {
                            "text":  "m&m's",
                            "points":  32
                        },
                        {
                            "text":  "jelly beans",
                            "points":  19
                        },
                        {
                            "text":  "life savers",
                            "points":  10
                        },
                        {
                            "text":  "skittles",
                            "points":  8
                        },
                        {
                            "text":  "hershey's kisses",
                            "points":  7
                        },
                        {
                            "text":  "mint/junior mints",
                            "points":  5
                        },
                        {
                            "text":  "dots/gumdrops",
                            "points":  4
                        },
                        {
                            "text":  "sweetarts",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170102,
        "question":  "We asked 100 married women... What would you do if your husband met you at the door wearing a leather thong?",
        "answers":  [
                        {
                            "text":  "laugh",
                            "points":  31
                        },
                        {
                            "text":  "take pic/selfie",
                            "points":  13
                        },
                        {
                            "text":  "be shocked/scream",
                            "points":  13
                        },
                        {
                            "text":  "eww! put pants on",
                            "points":  12
                        },
                        {
                            "text":  "say he looks sexy",
                            "points":  5
                        },
                        {
                            "text":  "put on music/luther",
                            "points":  5
                        },
                        {
                            "text":  "shut the door",
                            "points":  5
                        },
                        {
                            "text":  "run/walk out",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170103,
        "question":  "Name something you think Snoop Dogg and Martha Stewart do after finish shooting their show.",
        "answers":  [
                        {
                            "text":  "booze up/bar",
                            "points":  25
                        },
                        {
                            "text":  "toke up/get high",
                            "points":  21
                        },
                        {
                            "text":  "cook/eat",
                            "points":  20
                        },
                        {
                            "text":  "go home/leave",
                            "points":  7
                        },
                        {
                            "text":  "catch some z's",
                            "points":  7
                        },
                        {
                            "text":  "chat",
                            "points":  3
                        },
                        {
                            "text":  "sex/\"doggy\" style",
                            "points":  3
                        },
                        {
                            "text":  "kiss/tonsil tennis",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170104,
        "question":  "If you were rich, name something you'd have installed near your grave so your relatives would always visit.",
        "answers":  [
                        {
                            "text":  "daiquiri bar/booze",
                            "points":  24
                        },
                        {
                            "text":  "atm/pot of gold",
                            "points":  20
                        },
                        {
                            "text":  "bench/la-z-boy",
                            "points":  15
                        },
                        {
                            "text":  "food/soda",
                            "points":  12
                        },
                        {
                            "text":  "tv/movies",
                            "points":  6
                        },
                        {
                            "text":  "plants/flowers",
                            "points":  5
                        },
                        {
                            "text":  "pool",
                            "points":  3
                        },
                        {
                            "text":  "casino/slots",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170105,
        "question":  "We asked 100 single men... Name an occupation a woman has that makes you immediately interested in her.",
        "answers":  [
                        {
                            "text":  "lawyer",
                            "points":  18
                        },
                        {
                            "text":  "nurse",
                            "points":  17
                        },
                        {
                            "text":  "teacher",
                            "points":  15
                        },
                        {
                            "text":  "doctor",
                            "points":  14
                        },
                        {
                            "text":  "chef",
                            "points":  8
                        },
                        {
                            "text":  "pilot",
                            "points":  6
                        },
                        {
                            "text":  "athlete/mma fighter",
                            "points":  5
                        },
                        {
                            "text":  "veterinarian",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170106,
        "question":  "At a male nudist funeral, name something the deceased might still be wearing.",
        "answers":  [
                        {
                            "text":  "ring/jewelry",
                            "points":  42
                        },
                        {
                            "text":  "necktie",
                            "points":  11
                        },
                        {
                            "text":  "a smile",
                            "points":  9
                        },
                        {
                            "text":  "hat",
                            "points":  7
                        },
                        {
                            "text":  "wig/toupee",
                            "points":  7
                        },
                        {
                            "text":  "glasses/shades",
                            "points":  5
                        },
                        {
                            "text":  "shoes/sandals",
                            "points":  3
                        },
                        {
                            "text":  "fig leaf",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170107,
        "question":  "Name something Steve Harvey has so many of, he wouldn't notice if one went missing.",
        "answers":  [
                        {
                            "text":  "suits/shoes",
                            "points":  41
                        },
                        {
                            "text":  "dollars",
                            "points":  15
                        },
                        {
                            "text":  "teeth",
                            "points":  8
                        },
                        {
                            "text":  "cars",
                            "points":  8
                        },
                        {
                            "text":  "jokes",
                            "points":  5
                        },
                        {
                            "text":  "wives/exes",
                            "points":  4
                        },
                        {
                            "text":  "mustache hairs",
                            "points":  3
                        },
                        {
                            "text":  "jobs/shows",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170108,
        "question":  "We asked 100 married women... It's cute if your man calls you \"bunny.\" It's not cute if he nicknames you what animal?",
        "answers":  [
                        {
                            "text":  "piglet/hog",
                            "points":  35
                        },
                        {
                            "text":  "cow/elsie",
                            "points":  12
                        },
                        {
                            "text":  "jackass/mule",
                            "points":  11
                        },
                        {
                            "text":  "dog/pit bull",
                            "points":  10
                        },
                        {
                            "text":  "hippo",
                            "points":  7
                        },
                        {
                            "text":  "elephant/dumbo",
                            "points":  6
                        },
                        {
                            "text":  "bear",
                            "points":  3
                        },
                        {
                            "text":  "pussycat/kitten",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170109,
        "question":  "Name something women have a hard time getting rid of.",
        "answers":  [
                        {
                            "text":  "fat/cellulite city",
                            "points":  31
                        },
                        {
                            "text":  "duds/shoes",
                            "points":  27
                        },
                        {
                            "text":  "men/hubbies",
                            "points":  11
                        },
                        {
                            "text":  "zits",
                            "points":  4
                        },
                        {
                            "text":  "an std",
                            "points":  4
                        },
                        {
                            "text":  "wrinkles",
                            "points":  4
                        },
                        {
                            "text":  "attitude/anger",
                            "points":  3
                        },
                        {
                            "text":  "hair/grays",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170110,
        "question":  "We asked 100 married women... Comparing your man in bed to a sandwich, what kind would he be?",
        "answers":  [
                        {
                            "text":  "hero/6-inch sub",
                            "points":  29
                        },
                        {
                            "text":  "turkey",
                            "points":  13
                        },
                        {
                            "text":  "baloney",
                            "points":  9
                        },
                        {
                            "text":  "sausage",
                            "points":  9
                        },
                        {
                            "text":  "grilled cheese",
                            "points":  9
                        },
                        {
                            "text":  "blt",
                            "points":  7
                        },
                        {
                            "text":  "burger/slider",
                            "points":  6
                        },
                        {
                            "text":  "meatball",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170111,
        "question":  "Name something you think of when you hear the word \"grind.\"",
        "answers":  [
                        {
                            "text":  "coffee",
                            "points":  19
                        },
                        {
                            "text":  "teeth",
                            "points":  18
                        },
                        {
                            "text":  "bump/dance",
                            "points":  17
                        },
                        {
                            "text":  "work/\"daily grind\"",
                            "points":  12
                        },
                        {
                            "text":  "pepper/spices",
                            "points":  10
                        },
                        {
                            "text":  "my sex technique",
                            "points":  5
                        },
                        {
                            "text":  "\"axe to grind\"",
                            "points":  3
                        },
                        {
                            "text":  "meat",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170112,
        "question":  "Name something a man might ask his wife to do to his bottom.",
        "answers":  [
                        {
                            "text":  "spank/pat it, baby!",
                            "points":  39
                        },
                        {
                            "text":  "massage/rub it",
                            "points":  16
                        },
                        {
                            "text":  "kiss it",
                            "points":  10
                        },
                        {
                            "text":  "grab/squeeze it",
                            "points":  6
                        },
                        {
                            "text":  "inspect/check it",
                            "points":  6
                        },
                        {
                            "text":  "lotion it up",
                            "points":  3
                        },
                        {
                            "text":  "scratch an itch",
                            "points":  3
                        },
                        {
                            "text":  "pull out splinter",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170113,
        "question":  "We asked 100 women... Name something of Steve Harvey's that you would love to see.",
        "answers":  [
                        {
                            "text":  "house/bedroom",
                            "points":  34
                        },
                        {
                            "text":  "bank acct./wallet",
                            "points":  16
                        },
                        {
                            "text":  "wardrobe/undies",
                            "points":  14
                        },
                        {
                            "text":  "9 tv shows/movie",
                            "points":  10
                        },
                        {
                            "text":  "dancing pecs",
                            "points":  3
                        },
                        {
                            "text":  "that sexy smile",
                            "points":  3
                        },
                        {
                            "text":  "wife/family",
                            "points":  3
                        },
                        {
                            "text":  "his hair grown back",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170114,
        "question":  "Name a famous man who might be described as bald and beautiful.",
        "answers":  [
                        {
                            "text":  "steve harvey",
                            "points":  25
                        },
                        {
                            "text":  "telly savalas/kojak",
                            "points":  21
                        },
                        {
                            "text":  "dwayne johnson",
                            "points":  9
                        },
                        {
                            "text":  "vin diesel",
                            "points":  8
                        },
                        {
                            "text":  "patrick stewart",
                            "points":  7
                        },
                        {
                            "text":  "bruce willis",
                            "points":  6
                        },
                        {
                            "text":  "yul brynner",
                            "points":  6
                        },
                        {
                            "text":  "howie mandel",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170115,
        "question":  "Name something a male dog might do in front of a female dog to impress her.",
        "answers":  [
                        {
                            "text":  "sniff/her butt",
                            "points":  23
                        },
                        {
                            "text":  "lift leg & whiz",
                            "points":  16
                        },
                        {
                            "text":  "bark",
                            "points":  12
                        },
                        {
                            "text":  "wag his tail",
                            "points":  9
                        },
                        {
                            "text":  "lick self",
                            "points":  8
                        },
                        {
                            "text":  "strut/pose",
                            "points":  8
                        },
                        {
                            "text":  "fight/defend her",
                            "points":  6
                        },
                        {
                            "text":  "run/after cat",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170116,
        "question":  "Name something a Steve Harvey doll might have more of than a Barbie doll.",
        "answers":  [
                        {
                            "text":  "suits/clothes",
                            "points":  18
                        },
                        {
                            "text":  "facial hair",
                            "points":  16
                        },
                        {
                            "text":  "lips/teeth",
                            "points":  14
                        },
                        {
                            "text":  "muscles",
                            "points":  11
                        },
                        {
                            "text":  "belly/weight",
                            "points":  9
                        },
                        {
                            "text":  "color/melanin",
                            "points":  9
                        },
                        {
                            "text":  "jokes/personality",
                            "points":  5
                        },
                        {
                            "text":  "baldness",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170117,
        "question":  "Name a school subject that describes your love life.",
        "answers":  [
                        {
                            "text":  "ancient history",
                            "points":  43
                        },
                        {
                            "text":  "biology/anatomy",
                            "points":  10
                        },
                        {
                            "text":  "phys. ed/gym",
                            "points":  8
                        },
                        {
                            "text":  "chemistry",
                            "points":  7
                        },
                        {
                            "text":  "english/poetry",
                            "points":  6
                        },
                        {
                            "text":  "art",
                            "points":  4
                        },
                        {
                            "text":  "drama/theater",
                            "points":  4
                        },
                        {
                            "text":  "abnormal psych",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170118,
        "question":  "Name something a man keeps in his desk drawer at work because he's afraid to keep it at home.",
        "answers":  [
                        {
                            "text":  "porn/mags",
                            "points":  33
                        },
                        {
                            "text":  "little black book",
                            "points":  16
                        },
                        {
                            "text":  "money/wallet",
                            "points":  11
                        },
                        {
                            "text":  "cigarettes/cigars",
                            "points":  7
                        },
                        {
                            "text":  "alcohol/flask",
                            "points":  6
                        },
                        {
                            "text":  "gun",
                            "points":  4
                        },
                        {
                            "text":  "2nd cell phone",
                            "points":  4
                        },
                        {
                            "text":  "candy",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170119,
        "question":  "Steve Harvey is coming to your dinner party. What might you ask him to bring?",
        "answers":  [
                        {
                            "text":  "booze/dom perignon",
                            "points":  28
                        },
                        {
                            "text":  "the dinner/food",
                            "points":  28
                        },
                        {
                            "text":  "money/cover charge",
                            "points":  9
                        },
                        {
                            "text":  "family",
                            "points":  7
                        },
                        {
                            "text":  "comedy routine",
                            "points":  4
                        },
                        {
                            "text":  "weed",
                            "points":  3
                        },
                        {
                            "text":  "muzzle/mouth tape",
                            "points":  3
                        },
                        {
                            "text":  "his smiling self",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170120,
        "question":  "When you're at work, you should never let them see you what?",
        "answers":  [
                        {
                            "text":  "cry",
                            "points":  22
                        },
                        {
                            "text":  "sleep",
                            "points":  20
                        },
                        {
                            "text":  "sweat/stress",
                            "points":  15
                        },
                        {
                            "text":  "surf web/for porn",
                            "points":  11
                        },
                        {
                            "text":  "pick your nose",
                            "points":  5
                        },
                        {
                            "text":  "steal/boss' laptop",
                            "points":  4
                        },
                        {
                            "text":  "get angry/yell",
                            "points":  4
                        },
                        {
                            "text":  "party for one",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170121,
        "question":  "We asked 100 men... Name something specific you do to get women in the mood for love.",
        "answers":  [
                        {
                            "text":  "music/michael bolton",
                            "points":  20
                        },
                        {
                            "text":  "wine/drinks",
                            "points":  18
                        },
                        {
                            "text":  "kiss/nibble ear",
                            "points":  18
                        },
                        {
                            "text":  "massage/feet",
                            "points":  9
                        },
                        {
                            "text":  "cuddle/hug",
                            "points":  6
                        },
                        {
                            "text":  "feed her",
                            "points":  5
                        },
                        {
                            "text":  "sweet talk/joke",
                            "points":  5
                        },
                        {
                            "text":  "candle/dim light",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170122,
        "question":  "Your bathroom is being renovated. So where do you tinkle?",
        "answers":  [
                        {
                            "text":  "outside/off balcony",
                            "points":  36
                        },
                        {
                            "text":  "friend's/neighbor's",
                            "points":  9
                        },
                        {
                            "text":  "2nd bathroom",
                            "points":  9
                        },
                        {
                            "text":  "store/restaurant",
                            "points":  8
                        },
                        {
                            "text":  "kitchen sink",
                            "points":  7
                        },
                        {
                            "text":  "bucket",
                            "points":  6
                        },
                        {
                            "text":  "jar/jug/coke can",
                            "points":  5
                        },
                        {
                            "text":  "shower/tub",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170123,
        "question":  "A patient might say, \"This is the worst hospital ever. It doesn't have any\" what?",
        "answers":  [
                        {
                            "text":  "docs/good ones",
                            "points":  24
                        },
                        {
                            "text":  "tv's/cable",
                            "points":  13
                        },
                        {
                            "text":  "good food",
                            "points":  13
                        },
                        {
                            "text":  "nurses/hot ones",
                            "points":  10
                        },
                        {
                            "text":  "beds/bedding",
                            "points":  9
                        },
                        {
                            "text":  "wifi",
                            "points":  5
                        },
                        {
                            "text":  "meds/iv's",
                            "points":  5
                        },
                        {
                            "text":  "toilet paper/2-ply",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170124,
        "question":  "We asked 100 women... Name something of yours you like to dress men up in.",
        "answers":  [
                        {
                            "text":  "my thong/panties",
                            "points":  23
                        },
                        {
                            "text":  "my heels",
                            "points":  14
                        },
                        {
                            "text":  "my shirts",
                            "points":  14
                        },
                        {
                            "text":  "my skinny jeans",
                            "points":  9
                        },
                        {
                            "text":  "my dresses",
                            "points":  9
                        },
                        {
                            "text":  "my nightgowns",
                            "points":  6
                        },
                        {
                            "text":  "my scarves",
                            "points":  5
                        },
                        {
                            "text":  "my makeup",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170125,
        "question":  "Name a place where you would be shocked if people started playing spin the bottle.",
        "answers":  [
                        {
                            "text":  "church",
                            "points":  55
                        },
                        {
                            "text":  "senior home",
                            "points":  6
                        },
                        {
                            "text":  "funeral",
                            "points":  5
                        },
                        {
                            "text":  "store/mall",
                            "points":  4
                        },
                        {
                            "text":  "bar/nightclub",
                            "points":  4
                        },
                        {
                            "text":  "restaurant",
                            "points":  3
                        },
                        {
                            "text":  "court/supreme court",
                            "points":  3
                        },
                        {
                            "text":  "wedding",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170126,
        "question":  "Name something a cannibal might remove from a tourist before cooking him.",
        "answers":  [
                        {
                            "text":  "duds/bermuda hat",
                            "points":  30
                        },
                        {
                            "text":  "camera",
                            "points":  16
                        },
                        {
                            "text":  "jewelry",
                            "points":  13
                        },
                        {
                            "text":  "hair/back hair",
                            "points":  8
                        },
                        {
                            "text":  "wallet",
                            "points":  6
                        },
                        {
                            "text":  "teeth/dentures",
                            "points":  4
                        },
                        {
                            "text":  "guts/stomach",
                            "points":  3
                        },
                        {
                            "text":  "eyes",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170127,
        "question":  "Name someone you'd hate to see walk into the room just as you were making fun of them.",
        "answers":  [
                        {
                            "text":  "my boss",
                            "points":  28
                        },
                        {
                            "text":  "my spouse/bae",
                            "points":  16
                        },
                        {
                            "text":  "my in-laws",
                            "points":  10
                        },
                        {
                            "text":  "my mom/dad",
                            "points":  8
                        },
                        {
                            "text":  "my friend",
                            "points":  7
                        },
                        {
                            "text":  "my sibling",
                            "points":  5
                        },
                        {
                            "text":  "my ex",
                            "points":  5
                        },
                        {
                            "text":  "my kid",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170128,
        "question":  "Name a phrase a cop might say on the job that he might also say in bed.",
        "answers":  [
                        {
                            "text":  "stop/freeze/hold it",
                            "points":  26
                        },
                        {
                            "text":  "hands up/behind back",
                            "points":  24
                        },
                        {
                            "text":  "cuff 'em",
                            "points":  8
                        },
                        {
                            "text":  "spread 'em",
                            "points":  8
                        },
                        {
                            "text":  "under arrest",
                            "points":  5
                        },
                        {
                            "text":  "g'night/mornin'",
                            "points":  5
                        },
                        {
                            "text":  "get down",
                            "points":  4
                        },
                        {
                            "text":  "right remain silent",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170129,
        "question":  "Going to work on Monday morning is a lot like being forced to go where?",
        "answers":  [
                        {
                            "text":  "jail/prison",
                            "points":  25
                        },
                        {
                            "text":  "dentist/doctor",
                            "points":  24
                        },
                        {
                            "text":  "school",
                            "points":  9
                        },
                        {
                            "text":  "my in-laws'",
                            "points":  6
                        },
                        {
                            "text":  "church",
                            "points":  6
                        },
                        {
                            "text":  "hell",
                            "points":  5
                        },
                        {
                            "text":  "the gym",
                            "points":  4
                        },
                        {
                            "text":  "war",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170130,
        "question":  "Name something a wife brings to bed when she's really mad at her husband.",
        "answers":  [
                        {
                            "text":  "attitude",
                            "points":  25
                        },
                        {
                            "text":  "book/magazine",
                            "points":  22
                        },
                        {
                            "text":  "flannel/clothes",
                            "points":  13
                        },
                        {
                            "text":  "weapon/frying pan",
                            "points":  10
                        },
                        {
                            "text":  "lover/swim team",
                            "points":  4
                        },
                        {
                            "text":  "hair curlers",
                            "points":  3
                        },
                        {
                            "text":  "nite-delight wand",
                            "points":  3
                        },
                        {
                            "text":  "headache/aspirin",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170131,
        "question":  "Tell me an ingredient a baker uses that might be a good name for a stripper.",
        "answers":  [
                        {
                            "text":  "sugar/brown sugar",
                            "points":  47
                        },
                        {
                            "text":  "ginger",
                            "points":  9
                        },
                        {
                            "text":  "cinnamon",
                            "points":  6
                        },
                        {
                            "text":  "butter",
                            "points":  5
                        },
                        {
                            "text":  "cherry",
                            "points":  5
                        },
                        {
                            "text":  "honey",
                            "points":  4
                        },
                        {
                            "text":  "cocoa",
                            "points":  3
                        },
                        {
                            "text":  "flour",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170132,
        "question":  "We asked 100 women... Name something your man gets you for Valentine's Day that says, \"It's over.\"",
        "answers":  [
                        {
                            "text":  "nothing",
                            "points":  28
                        },
                        {
                            "text":  "vacuum",
                            "points":  17
                        },
                        {
                            "text":  "divorce papers",
                            "points":  10
                        },
                        {
                            "text":  "dead/black roses",
                            "points":  9
                        },
                        {
                            "text":  "socks/clothing",
                            "points":  7
                        },
                        {
                            "text":  "a card/going away",
                            "points":  5
                        },
                        {
                            "text":  "gym membership",
                            "points":  3
                        },
                        {
                            "text":  "candy/turd-shaped",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170133,
        "question":  "Name a famous woman who doesn't need a man.",
        "answers":  [
                        {
                            "text":  "oprah winfrey",
                            "points":  27
                        },
                        {
                            "text":  "ellen degeneres",
                            "points":  15
                        },
                        {
                            "text":  "hillary clinton",
                            "points":  12
                        },
                        {
                            "text":  "madonna",
                            "points":  10
                        },
                        {
                            "text":  "angelina jolie",
                            "points":  6
                        },
                        {
                            "text":  "jennifer aniston",
                            "points":  5
                        },
                        {
                            "text":  "cher",
                            "points":  4
                        },
                        {
                            "text":  "queen elizabeth ii",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170134,
        "question":  "The stripper called in sick to the bachelor party. So who popped out of the groom's cake?",
        "answers":  [
                        {
                            "text":  "his bride/mate",
                            "points":  25
                        },
                        {
                            "text":  "best man/bud",
                            "points":  18
                        },
                        {
                            "text":  "backup stripper",
                            "points":  15
                        },
                        {
                            "text":  "mom/mom-in-law",
                            "points":  12
                        },
                        {
                            "text":  "granny",
                            "points":  4
                        },
                        {
                            "text":  "buddy's wife",
                            "points":  3
                        },
                        {
                            "text":  "the cake baker",
                            "points":  3
                        },
                        {
                            "text":  "his ex",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170135,
        "question":  "Name a Mexican food a hot stripper might use as their stage name.",
        "answers":  [
                        {
                            "text":  "hot tamale",
                            "points":  24
                        },
                        {
                            "text":  "chili pepper",
                            "points":  15
                        },
                        {
                            "text":  "taco/taco bell",
                            "points":  11
                        },
                        {
                            "text":  "enchilada",
                            "points":  10
                        },
                        {
                            "text":  "jalapeno",
                            "points":  8
                        },
                        {
                            "text":  "chimichanga",
                            "points":  5
                        },
                        {
                            "text":  "spicy salsa",
                            "points":  5
                        },
                        {
                            "text":  "chalupa",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170136,
        "question":  "Grandma is glad she has bad eyesight because grandpa likes to do what in the nude?",
        "answers":  [
                        {
                            "text":  "dance/hokey pokey",
                            "points":  20
                        },
                        {
                            "text":  "exercise/squats",
                            "points":  17
                        },
                        {
                            "text":  "cook/eat",
                            "points":  14
                        },
                        {
                            "text":  "walk around house",
                            "points":  11
                        },
                        {
                            "text":  "watch tv",
                            "points":  6
                        },
                        {
                            "text":  "sleep",
                            "points":  6
                        },
                        {
                            "text":  "\"pet the kitty\"",
                            "points":  4
                        },
                        {
                            "text":  "scratch himself",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170137,
        "question":  "Name a place where people are not shy about making out in public.",
        "answers":  [
                        {
                            "text":  "movies",
                            "points":  29
                        },
                        {
                            "text":  "park/under tree",
                            "points":  20
                        },
                        {
                            "text":  "bar/nightclub",
                            "points":  10
                        },
                        {
                            "text":  "concert",
                            "points":  6
                        },
                        {
                            "text":  "beach",
                            "points":  5
                        },
                        {
                            "text":  "car/lovers' lane",
                            "points":  5
                        },
                        {
                            "text":  "school",
                            "points":  3
                        },
                        {
                            "text":  "europe",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170138,
        "question":  "Name a kind of candy that could fit up your nose if you're into that kind of thing.",
        "answers":  [
                        {
                            "text":  "jelly beans",
                            "points":  22
                        },
                        {
                            "text":  "skittles",
                            "points":  17
                        },
                        {
                            "text":  "m&m's",
                            "points":  10
                        },
                        {
                            "text":  "candy cane/mint",
                            "points":  9
                        },
                        {
                            "text":  "twizzlers/licorice",
                            "points":  7
                        },
                        {
                            "text":  "tootsie roll",
                            "points":  6
                        },
                        {
                            "text":  "gummy bear/worm",
                            "points":  5
                        },
                        {
                            "text":  "candy corn",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170139,
        "question":  "Name a place a smart girl goes to sell her cookies.",
        "answers":  [
                        {
                            "text":  "store/weed shop",
                            "points":  47
                        },
                        {
                            "text":  "weight loss clinic",
                            "points":  7
                        },
                        {
                            "text":  "bar",
                            "points":  6
                        },
                        {
                            "text":  "neighborhood",
                            "points":  5
                        },
                        {
                            "text":  "coffee shop",
                            "points":  4
                        },
                        {
                            "text":  "gym",
                            "points":  4
                        },
                        {
                            "text":  "sports venue",
                            "points":  4
                        },
                        {
                            "text":  "senior center",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170140,
        "question":  "Fill in the blank: Grandma's panties are so big, you could make a ______ out of them.",
        "answers":  [
                        {
                            "text":  "tent",
                            "points":  30
                        },
                        {
                            "text":  "parachute",
                            "points":  22
                        },
                        {
                            "text":  "kite",
                            "points":  9
                        },
                        {
                            "text":  "balloon/hot air",
                            "points":  6
                        },
                        {
                            "text":  "bag/shopping bag",
                            "points":  4
                        },
                        {
                            "text":  "sail",
                            "points":  3
                        },
                        {
                            "text":  "blanket/quilt",
                            "points":  3
                        },
                        {
                            "text":  "dress/skirt",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170141,
        "question":  "We asked 100 women... Name something you'd love just once to see Steve Harvey wearing.",
        "answers":  [
                        {
                            "text":  "dress/skirt/kilt",
                            "points":  24
                        },
                        {
                            "text":  "booty shorts",
                            "points":  12
                        },
                        {
                            "text":  "speedo/bikini",
                            "points":  12
                        },
                        {
                            "text":  "clown suit",
                            "points":  10
                        },
                        {
                            "text":  "skinny jeans",
                            "points":  7
                        },
                        {
                            "text":  "wig/with ponytail",
                            "points":  5
                        },
                        {
                            "text":  "hat/stetson",
                            "points":  5
                        },
                        {
                            "text":  "sweats",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170142,
        "question":  "Name something in the kitchen that might accidentally get stuffed inside a turkey.",
        "answers":  [
                        {
                            "text":  "spoon/fork/knife",
                            "points":  30
                        },
                        {
                            "text":  "giblets bag/neck",
                            "points":  18
                        },
                        {
                            "text":  "jewelry/watch",
                            "points":  8
                        },
                        {
                            "text":  "string",
                            "points":  6
                        },
                        {
                            "text":  "rubber glove",
                            "points":  5
                        },
                        {
                            "text":  "paper towel",
                            "points":  4
                        },
                        {
                            "text":  "thermometer",
                            "points":  4
                        },
                        {
                            "text":  "baster",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170143,
        "question":  "Name something a man might be afraid to ask his wife to get rid of.",
        "answers":  [
                        {
                            "text":  "fat/mile-wide butt",
                            "points":  25
                        },
                        {
                            "text":  "clothes/wool panties",
                            "points":  23
                        },
                        {
                            "text":  "family/mom/kids",
                            "points":  7
                        },
                        {
                            "text":  "pics/of ex",
                            "points":  6
                        },
                        {
                            "text":  "pet/hamster",
                            "points":  5
                        },
                        {
                            "text":  "body hair/stache",
                            "points":  5
                        },
                        {
                            "text":  "old love letters",
                            "points":  4
                        },
                        {
                            "text":  "ho-ish makeup",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170144,
        "question":  "We asked 100 married men... Name a kind of bird your wife reminds you of.",
        "answers":  [
                        {
                            "text":  "parrot/parakeet",
                            "points":  19
                        },
                        {
                            "text":  "swan",
                            "points":  12
                        },
                        {
                            "text":  "eagle",
                            "points":  12
                        },
                        {
                            "text":  "peacock",
                            "points":  11
                        },
                        {
                            "text":  "crow",
                            "points":  10
                        },
                        {
                            "text":  "blue jay",
                            "points":  5
                        },
                        {
                            "text":  "robin redbreast",
                            "points":  5
                        },
                        {
                            "text":  "canary",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170145,
        "question":  "A kiss is just a kiss until the other person does what?",
        "answers":  [
                        {
                            "text":  "tongue wrestles",
                            "points":  34
                        },
                        {
                            "text":  "cops a feel",
                            "points":  10
                        },
                        {
                            "text":  "sneezes/coughs",
                            "points":  6
                        },
                        {
                            "text":  "hugs you",
                            "points":  6
                        },
                        {
                            "text":  "bites/nibbles",
                            "points":  6
                        },
                        {
                            "text":  "kisses back",
                            "points":  6
                        },
                        {
                            "text":  "tells others/tweets",
                            "points":  5
                        },
                        {
                            "text":  "says \"i love you\"",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170146,
        "question":  "If Steve Harvey offered you a ride, what kind of car do you think he'd pick you up in?",
        "answers":  [
                        {
                            "text":  "pink cadillac",
                            "points":  19
                        },
                        {
                            "text":  "limo",
                            "points":  18
                        },
                        {
                            "text":  "mercedes-benz",
                            "points":  17
                        },
                        {
                            "text":  "bmw",
                            "points":  5
                        },
                        {
                            "text":  "corvette",
                            "points":  5
                        },
                        {
                            "text":  "bentley",
                            "points":  4
                        },
                        {
                            "text":  "mustang",
                            "points":  4
                        },
                        {
                            "text":  "vw/beetle",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170147,
        "question":  "We asked 100 women... Some strippers use fancy car names. What kind of car is your stripper name?",
        "answers":  [
                        {
                            "text":  "mercedes-benz",
                            "points":  23
                        },
                        {
                            "text":  "jaguar",
                            "points":  14
                        },
                        {
                            "text":  "lexus",
                            "points":  11
                        },
                        {
                            "text":  "porsche",
                            "points":  7
                        },
                        {
                            "text":  "mustang/cobra",
                            "points":  5
                        },
                        {
                            "text":  "cougar",
                            "points":  4
                        },
                        {
                            "text":  "tesla",
                            "points":  3
                        },
                        {
                            "text":  "ferrari",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170148,
        "question":  "Name something you can honestly say you've never ridden.",
        "answers":  [
                        {
                            "text":  "bull/mechanical",
                            "points":  22
                        },
                        {
                            "text":  "horse/bronco",
                            "points":  12
                        },
                        {
                            "text":  "motorcycle",
                            "points":  8
                        },
                        {
                            "text":  "camel",
                            "points":  7
                        },
                        {
                            "text":  "elephant",
                            "points":  7
                        },
                        {
                            "text":  "donkey/mule",
                            "points":  6
                        },
                        {
                            "text":  "plane",
                            "points":  4
                        },
                        {
                            "text":  "rocket/spaceship",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170149,
        "question":  "Fill in the blank: If it were up to me, I'd never ______ again.",
        "answers":  [
                        {
                            "text":  "work",
                            "points":  17
                        },
                        {
                            "text":  "marry",
                            "points":  10
                        },
                        {
                            "text":  "smoke",
                            "points":  6
                        },
                        {
                            "text":  "drink",
                            "points":  6
                        },
                        {
                            "text":  "date",
                            "points":  5
                        },
                        {
                            "text":  "shave",
                            "points":  4
                        },
                        {
                            "text":  "diet",
                            "points":  4
                        },
                        {
                            "text":  "clean/do laundry",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170150,
        "question":  "What would you do if you found out a coworker makes more than you do for the same job?",
        "answers":  [
                        {
                            "text":  "complain/need raise",
                            "points":  61
                        },
                        {
                            "text":  "quit/get new job",
                            "points":  12
                        },
                        {
                            "text":  "feel angry/cuss",
                            "points":  10
                        },
                        {
                            "text":  "nothing/ignore it",
                            "points":  10
                        },
                        {
                            "text":  "be thrilled for them",
                            "points":  3
                        },
                        {
                            "text":  "work harder",
                            "points":  2
                        },
                        {
                            "text":  "do less work",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170151,
        "question":  "We asked 100 married men... Name something you love to watch your wife do.",
        "answers":  [
                        {
                            "text":  "undress",
                            "points":  31
                        },
                        {
                            "text":  "shower",
                            "points":  25
                        },
                        {
                            "text":  "sleep",
                            "points":  17
                        },
                        {
                            "text":  "dance",
                            "points":  12
                        },
                        {
                            "text":  "cook",
                            "points":  10
                        },
                        {
                            "text":  "put on makeup",
                            "points":  3
                        },
                        {
                            "text":  "clean/the car",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170152,
        "question":  "We asked 100 married women... Name something you put on and you can get your husband to do just about anything.",
        "answers":  [
                        {
                            "text":  "sexy thong/clothes",
                            "points":  77
                        },
                        {
                            "text":  "perfume",
                            "points":  8
                        },
                        {
                            "text":  "just a towel",
                            "points":  4
                        },
                        {
                            "text":  "a smile",
                            "points":  3
                        },
                        {
                            "text":  "dinner/bacon",
                            "points":  3
                        },
                        {
                            "text":  "a tiara",
                            "points":  2
                        },
                        {
                            "text":  "a pouty face/'tude",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170153,
        "question":  "We asked 100 women... When you see a man, where's the first place your eyes go?",
        "answers":  [
                        {
                            "text":  "eyes/face/teeth",
                            "points":  77
                        },
                        {
                            "text":  "delicious derriere",
                            "points":  6
                        },
                        {
                            "text":  "firm pecs",
                            "points":  4
                        },
                        {
                            "text":  "hair/no baldies!",
                            "points":  4
                        },
                        {
                            "text":  "his arms/biceps",
                            "points":  3
                        },
                        {
                            "text":  "his big hands",
                            "points":  3
                        },
                        {
                            "text":  "thick hairy legs",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170154,
        "question":  "Name an animal that doesn't have a leg to stand on.",
        "answers":  [
                        {
                            "text":  "snake",
                            "points":  59
                        },
                        {
                            "text":  "fish/shark/eel",
                            "points":  23
                        },
                        {
                            "text":  "whale",
                            "points":  5
                        },
                        {
                            "text":  "seal/sea lion",
                            "points":  4
                        },
                        {
                            "text":  "dolphin/porpoise",
                            "points":  3
                        },
                        {
                            "text":  "snail/slug",
                            "points":  3
                        },
                        {
                            "text":  "worm",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170155,
        "question":  "We asked 100 married men... If you want to have a good marriage, name something you and your spouse should do every day.",
        "answers":  [
                        {
                            "text":  "talk/say \"i love you\"",
                            "points":  55
                        },
                        {
                            "text":  "go to pound town",
                            "points":  15
                        },
                        {
                            "text":  "kiss/hug",
                            "points":  13
                        },
                        {
                            "text":  "laugh/smile",
                            "points":  6
                        },
                        {
                            "text":  "hold back complaints",
                            "points":  4
                        },
                        {
                            "text":  "go to work",
                            "points":  3
                        },
                        {
                            "text":  "be apart/sleep alone",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170156,
        "question":  "Name a rumor a woman might spread about her ex-boyfriend just so no other woman will date him.",
        "answers":  [
                        {
                            "text":  "has the clap/vd",
                            "points":  54
                        },
                        {
                            "text":  "bad lover",
                            "points":  22
                        },
                        {
                            "text":  "digs dudes",
                            "points":  8
                        },
                        {
                            "text":  "mean/nut job",
                            "points":  6
                        },
                        {
                            "text":  "cheats/daily",
                            "points":  4
                        },
                        {
                            "text":  "kickin' breath",
                            "points":  3
                        },
                        {
                            "text":  "he's cheap",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170157,
        "question":  "When a man's wife is out of town, name something of hers he might sleep with.",
        "answers":  [
                        {
                            "text":  "slobbery pillow",
                            "points":  46
                        },
                        {
                            "text":  "nightie/clothes",
                            "points":  31
                        },
                        {
                            "text":  "her best friend",
                            "points":  9
                        },
                        {
                            "text":  "her slutty sister",
                            "points":  5
                        },
                        {
                            "text":  "her cat/pet",
                            "points":  4
                        },
                        {
                            "text":  "her blankie",
                            "points":  2
                        },
                        {
                            "text":  "stuffed animal",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170158,
        "question":  "We asked 100 married women... Tell me one way your husband reminds you of a bear.",
        "answers":  [
                        {
                            "text":  "hugs/cuddles",
                            "points":  23
                        },
                        {
                            "text":  "grunts/snores",
                            "points":  23
                        },
                        {
                            "text":  "hairy",
                            "points":  22
                        },
                        {
                            "text":  "strong/big/tall",
                            "points":  13
                        },
                        {
                            "text":  "hibernates",
                            "points":  11
                        },
                        {
                            "text":  "eats like one",
                            "points":  5
                        },
                        {
                            "text":  "mean/temper",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170159,
        "question":  "A cow might think, \"If the farmer's going to grab my boobs, he should at least buy me\" what?",
        "answers":  [
                        {
                            "text":  "dinner/hay/milk",
                            "points":  71
                        },
                        {
                            "text":  "\"a drink\"/booze",
                            "points":  16
                        },
                        {
                            "text":  "a barn",
                            "points":  3
                        },
                        {
                            "text":  "flowers",
                            "points":  2
                        },
                        {
                            "text":  "a bra",
                            "points":  2
                        },
                        {
                            "text":  "a ring",
                            "points":  2
                        },
                        {
                            "text":  "cow pal/hot bull",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170160,
        "question":  "Name something about J.Lo that grandma has to stop imitating.",
        "answers":  [
                        {
                            "text":  "dancing/booty clap",
                            "points":  50
                        },
                        {
                            "text":  "skimpy clothes",
                            "points":  21
                        },
                        {
                            "text":  "her singing",
                            "points":  12
                        },
                        {
                            "text":  "having a huge butt",
                            "points":  6
                        },
                        {
                            "text":  "her accent/talk",
                            "points":  4
                        },
                        {
                            "text":  "hairdo/ponytail",
                            "points":  3
                        },
                        {
                            "text":  "makeup/glitter",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170161,
        "question":  "Name a reason anyone would want to be Ellen.",
        "answers":  [
                        {
                            "text":  "rollin' in dough",
                            "points":  49
                        },
                        {
                            "text":  "fame/talk show",
                            "points":  21
                        },
                        {
                            "text":  "funny/cheery",
                            "points":  13
                        },
                        {
                            "text":  "gives gifts/kind",
                            "points":  7
                        },
                        {
                            "text":  "influent'l/outspoken",
                            "points":  3
                        },
                        {
                            "text":  "dance skills",
                            "points":  3
                        },
                        {
                            "text":  "pretty/gets chicks",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170162,
        "question":  "Tell me a place you go where you take off your clothes.",
        "answers":  [
                        {
                            "text":  "bathroom/shower",
                            "points":  45
                        },
                        {
                            "text":  "bedroom",
                            "points":  20
                        },
                        {
                            "text":  "dr./hospital",
                            "points":  15
                        },
                        {
                            "text":  "nude beach",
                            "points":  8
                        },
                        {
                            "text":  "mall/dressing room",
                            "points":  4
                        },
                        {
                            "text":  "swimming pool",
                            "points":  3
                        },
                        {
                            "text":  "spa/massage joint",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170163,
        "question":  "Name something that might injure you if you do yardwork in the nude.",
        "answers":  [
                        {
                            "text":  "tool/weedwacker",
                            "points":  44
                        },
                        {
                            "text":  "thorn/plant/tree",
                            "points":  27
                        },
                        {
                            "text":  "the sun",
                            "points":  11
                        },
                        {
                            "text":  "bug/wasp swarm",
                            "points":  6
                        },
                        {
                            "text":  "angry neighbor",
                            "points":  5
                        },
                        {
                            "text":  "rocks",
                            "points":  3
                        },
                        {
                            "text":  "the cold/snow",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170164,
        "question":  "Name a reason you might not want to suck the poison out of a friend who got bitten by a snake.",
        "answers":  [
                        {
                            "text":  "i'd be poisoned/die",
                            "points":  38
                        },
                        {
                            "text":  "on wiener/bad spot",
                            "points":  22
                        },
                        {
                            "text":  "has syphilis/germs",
                            "points":  12
                        },
                        {
                            "text":  "want them to die",
                            "points":  12
                        },
                        {
                            "text":  "dirty skin",
                            "points":  8
                        },
                        {
                            "text":  "it won't help!",
                            "points":  4
                        },
                        {
                            "text":  "afraid of blood",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170165,
        "question":  "Name something you put in your ear that you wouldn't want to put in your rear.",
        "answers":  [
                        {
                            "text":  "q-tips",
                            "points":  47
                        },
                        {
                            "text":  "earbuds/headphones",
                            "points":  20
                        },
                        {
                            "text":  "earrings",
                            "points":  11
                        },
                        {
                            "text":  "my finger",
                            "points":  7
                        },
                        {
                            "text":  "earplugs",
                            "points":  6
                        },
                        {
                            "text":  "ear drops",
                            "points":  3
                        },
                        {
                            "text":  "hearing aids",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170166,
        "question":  "We asked 100 single women... Good luck trying to find a man who likes to do what?",
        "answers":  [
                        {
                            "text":  "clean/laundry",
                            "points":  46
                        },
                        {
                            "text":  "shop/spend money",
                            "points":  14
                        },
                        {
                            "text":  "listen",
                            "points":  13
                        },
                        {
                            "text":  "cuddle/all night",
                            "points":  11
                        },
                        {
                            "text":  "dance",
                            "points":  6
                        },
                        {
                            "text":  "go to the opera",
                            "points":  5
                        },
                        {
                            "text":  "cook",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170167,
        "question":  "Name an animal that might like to watch the DVD \"Squirrels Gone Wild.\"",
        "answers":  [
                        {
                            "text":  "dog",
                            "points":  39
                        },
                        {
                            "text":  "cat",
                            "points":  21
                        },
                        {
                            "text":  "squirrel",
                            "points":  21
                        },
                        {
                            "text":  "chipmunk",
                            "points":  8
                        },
                        {
                            "text":  "coyote",
                            "points":  3
                        },
                        {
                            "text":  "bird/eagle",
                            "points":  3
                        },
                        {
                            "text":  "rabbit",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170168,
        "question":  "Fill in the blank: You only went to that party because you were told there would be what?",
        "answers":  [
                        {
                            "text":  "food/a fab chef",
                            "points":  37
                        },
                        {
                            "text":  "free booze",
                            "points":  30
                        },
                        {
                            "text":  "hot men/women",
                            "points":  16
                        },
                        {
                            "text":  "strippers",
                            "points":  5
                        },
                        {
                            "text":  "celebs/chris pratt",
                            "points":  5
                        },
                        {
                            "text":  "weed/crack",
                            "points":  2
                        },
                        {
                            "text":  "music/dancing",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170169,
        "question":  "Name a reason a wife says to her husband, \"Don't you dare take my picture.\"",
        "answers":  [
                        {
                            "text":  "nude/showering",
                            "points":  31
                        },
                        {
                            "text":  "no makeup",
                            "points":  23
                        },
                        {
                            "text":  "bad hair/curlers",
                            "points":  13
                        },
                        {
                            "text":  "just woke up/in bed",
                            "points":  13
                        },
                        {
                            "text":  "feels fat",
                            "points":  9
                        },
                        {
                            "text":  "hates picture taken",
                            "points":  4
                        },
                        {
                            "text":  "eating/pig's feet",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170170,
        "question":  "Fill in the blank: A clown might ask his wife, \"Honey, have you seen my\" what?",
        "answers":  [
                        {
                            "text":  "red nose",
                            "points":  59
                        },
                        {
                            "text":  "wig",
                            "points":  16
                        },
                        {
                            "text":  "floppy shoes",
                            "points":  12
                        },
                        {
                            "text":  "horn",
                            "points":  3
                        },
                        {
                            "text":  "rubber chicken",
                            "points":  2
                        },
                        {
                            "text":  "spinning bow tie",
                            "points":  2
                        },
                        {
                            "text":  "squirting flower",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170171,
        "question":  "Name something a female dog catcher might use from her job to catch herself a man.",
        "answers":  [
                        {
                            "text":  "net/pole/hook",
                            "points":  57
                        },
                        {
                            "text":  "leash/collar",
                            "points":  15
                        },
                        {
                            "text":  "a cute puppy",
                            "points":  8
                        },
                        {
                            "text":  "stun gun/tranq'lizer",
                            "points":  5
                        },
                        {
                            "text":  "food/treat",
                            "points":  4
                        },
                        {
                            "text":  "that sexy uniform",
                            "points":  4
                        },
                        {
                            "text":  "dog whistle",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170172,
        "question":  "If a male stripper was nicknamed Popeye, what might he have?",
        "answers":  [
                        {
                            "text":  "muscles/forearms",
                            "points":  56
                        },
                        {
                            "text":  "a pipe",
                            "points":  15
                        },
                        {
                            "text":  "spinach",
                            "points":  7
                        },
                        {
                            "text":  "tattoos",
                            "points":  7
                        },
                        {
                            "text":  "big weenie",
                            "points":  4
                        },
                        {
                            "text":  "sailor suit/hat",
                            "points":  4
                        },
                        {
                            "text":  "squinty eye",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170173,
        "question":  "When a waitress tells the chef a customer was rude, what might he mix into their food?",
        "answers":  [
                        {
                            "text":  "spit",
                            "points":  55
                        },
                        {
                            "text":  "hot sauce/spice",
                            "points":  18
                        },
                        {
                            "text":  "laxative",
                            "points":  8
                        },
                        {
                            "text":  "extra salt",
                            "points":  7
                        },
                        {
                            "text":  "a mysterious hair",
                            "points":  3
                        },
                        {
                            "text":  "green snot/booger",
                            "points":  3
                        },
                        {
                            "text":  "dirt",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170174,
        "question":  "A woman might say to Superman on a date, \"Enough already -- stop talking about your\" what?",
        "answers":  [
                        {
                            "text":  "powers/strength",
                            "points":  54
                        },
                        {
                            "text":  "cape/outfit",
                            "points":  14
                        },
                        {
                            "text":  "krypton/kryptonite",
                            "points":  13
                        },
                        {
                            "text":  "yourself/heroics",
                            "points":  8
                        },
                        {
                            "text":  "fortress of solitude",
                            "points":  3
                        },
                        {
                            "text":  "superdong",
                            "points":  2
                        },
                        {
                            "text":  "crush on lois",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170175,
        "question":  "Name something you'd love a big piece of right now.",
        "answers":  [
                        {
                            "text":  "cake/cheesecake",
                            "points":  53
                        },
                        {
                            "text":  "pie",
                            "points":  12
                        },
                        {
                            "text":  "pizza",
                            "points":  9
                        },
                        {
                            "text":  "candy/chocolate",
                            "points":  9
                        },
                        {
                            "text":  "steve's $/lotto $",
                            "points":  5
                        },
                        {
                            "text":  "steak/rib eye",
                            "points":  5
                        },
                        {
                            "text":  "tight juicy booty",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170176,
        "question":  "Name something a hospital patient might quickly hide when a nurse enters the room.",
        "answers":  [
                        {
                            "text":  "smuggled food/salt",
                            "points":  48
                        },
                        {
                            "text":  "cigarette",
                            "points":  18
                        },
                        {
                            "text":  "bod/butt crack",
                            "points":  11
                        },
                        {
                            "text":  "martini/booze",
                            "points":  7
                        },
                        {
                            "text":  "drugs/meds",
                            "points":  5
                        },
                        {
                            "text":  "doc-nurse porn",
                            "points":  4
                        },
                        {
                            "text":  "cell phone",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170177,
        "question":  "We asked 100 married women... If your hubby was in a \"hot husbands\" calendar, name something he might pretend to be doing around the house for the photo shoot.",
        "answers":  [
                        {
                            "text":  "vacuuming/clean'g",
                            "points":  46
                        },
                        {
                            "text":  "cooking",
                            "points":  11
                        },
                        {
                            "text":  "repairs/welding",
                            "points":  11
                        },
                        {
                            "text":  "washing the car",
                            "points":  10
                        },
                        {
                            "text":  "lift weights/flex",
                            "points":  9
                        },
                        {
                            "text":  "yard work/chop wood",
                            "points":  7
                        },
                        {
                            "text":  "napping",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170178,
        "question":  "Name something you like to do on a date so you don't have to talk.",
        "answers":  [
                        {
                            "text":  "go to a movie",
                            "points":  45
                        },
                        {
                            "text":  "eat",
                            "points":  26
                        },
                        {
                            "text":  "swap spit/kiss",
                            "points":  15
                        },
                        {
                            "text":  "music/sing-alongs",
                            "points":  3
                        },
                        {
                            "text":  "dance",
                            "points":  3
                        },
                        {
                            "text":  "text/use phone",
                            "points":  2
                        },
                        {
                            "text":  "drink",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170179,
        "question":  "We asked 100 men... Name something about your blind date that reminded you of Minnie Mouse.",
        "answers":  [
                        {
                            "text":  "massive ears",
                            "points":  40
                        },
                        {
                            "text":  "squeaky voice",
                            "points":  31
                        },
                        {
                            "text":  "hair bow",
                            "points":  10
                        },
                        {
                            "text":  "dress/outfit",
                            "points":  5
                        },
                        {
                            "text":  "cute nose",
                            "points":  5
                        },
                        {
                            "text":  "thin figure/skinny",
                            "points":  3
                        },
                        {
                            "text":  "hands/4 fingers",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170180,
        "question":  "While Santa delivers presents and gets all the glory, what are the elves doing back at the shop?",
        "answers":  [
                        {
                            "text":  "drankin'/egg nog",
                            "points":  39
                        },
                        {
                            "text":  "working/outsourcing",
                            "points":  26
                        },
                        {
                            "text":  "sleeping",
                            "points":  13
                        },
                        {
                            "text":  "cleaning up",
                            "points":  11
                        },
                        {
                            "text":  "eating",
                            "points":  3
                        },
                        {
                            "text":  "complaining",
                            "points":  2
                        },
                        {
                            "text":  "reefer madness",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170181,
        "question":  "Fill in the blank: A woman would dump her guy if she saw him flirting with her ______.",
        "answers":  [
                        {
                            "text":  "best friend",
                            "points":  38
                        },
                        {
                            "text":  "sister",
                            "points":  27
                        },
                        {
                            "text":  "mom",
                            "points":  18
                        },
                        {
                            "text":  "daughter",
                            "points":  6
                        },
                        {
                            "text":  "brother",
                            "points":  3
                        },
                        {
                            "text":  "other boyfriend",
                            "points":  2
                        },
                        {
                            "text":  "enemy",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170182,
        "question":  "We asked 100 married men... Name someone you should never tell your wife you think is hot.",
        "answers":  [
                        {
                            "text":  "her sister",
                            "points":  37
                        },
                        {
                            "text":  "any woman at all",
                            "points":  23
                        },
                        {
                            "text":  "her bestie",
                            "points":  20
                        },
                        {
                            "text":  "neighbor",
                            "points":  5
                        },
                        {
                            "text":  "celeb/beyonce",
                            "points":  4
                        },
                        {
                            "text":  "her mom",
                            "points":  4
                        },
                        {
                            "text":  "my ex",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170183,
        "question":  "Name something Mrs. Claus might get from Santa in a divorce settlement.",
        "answers":  [
                        {
                            "text":  "reindeer/rudolph",
                            "points":  35
                        },
                        {
                            "text":  "the sleigh",
                            "points":  29
                        },
                        {
                            "text":  "elves/the hot one",
                            "points":  18
                        },
                        {
                            "text":  "north pole/house",
                            "points":  7
                        },
                        {
                            "text":  "toys/presents",
                            "points":  3
                        },
                        {
                            "text":  "cookies",
                            "points":  2
                        },
                        {
                            "text":  "money",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170184,
        "question":  "We asked 100 married women... Name something you would not accept from another man.",
        "answers":  [
                        {
                            "text":  "jewelry/ring",
                            "points":  34
                        },
                        {
                            "text":  "kiss/more than 3",
                            "points":  20
                        },
                        {
                            "text":  "a date",
                            "points":  14
                        },
                        {
                            "text":  "his wishful weenie",
                            "points":  14
                        },
                        {
                            "text":  "money",
                            "points":  9
                        },
                        {
                            "text":  "lewd/foul lang.",
                            "points":  3
                        },
                        {
                            "text":  "his phone #",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170185,
        "question":  "Name something that's hairy and stinky.",
        "answers":  [
                        {
                            "text":  "skunk",
                            "points":  33
                        },
                        {
                            "text":  "people",
                            "points":  30
                        },
                        {
                            "text":  "dog",
                            "points":  23
                        },
                        {
                            "text":  "monkey/ape",
                            "points":  4
                        },
                        {
                            "text":  "bigfoot",
                            "points":  2
                        },
                        {
                            "text":  "ferret",
                            "points":  2
                        },
                        {
                            "text":  "clogged drain",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170186,
        "question":  "Name something you don't want to happen when you call 911.",
        "answers":  [
                        {
                            "text":  "busy signal",
                            "points":  30
                        },
                        {
                            "text":  "lose call/hang up",
                            "points":  30
                        },
                        {
                            "text":  "no answer",
                            "points":  13
                        },
                        {
                            "text":  "put on hold",
                            "points":  10
                        },
                        {
                            "text":  "someone dies/hurt",
                            "points":  6
                        },
                        {
                            "text":  "nobody comes/lost",
                            "points":  4
                        },
                        {
                            "text":  "i dial wrong #",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170187,
        "question":  "When you get to work, name a reason you suspect you're about to be fired.",
        "answers":  [
                        {
                            "text":  "people quiet/act odd",
                            "points":  27
                        },
                        {
                            "text":  "boss/h.r. wants me",
                            "points":  24
                        },
                        {
                            "text":  "desk/office empty",
                            "points":  18
                        },
                        {
                            "text":  "i'm late again",
                            "points":  10
                        },
                        {
                            "text":  "access/key cut off",
                            "points":  9
                        },
                        {
                            "text":  "pink slip there for me",
                            "points":  4
                        },
                        {
                            "text":  "new gal at my desk",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170188,
        "question":  "Name something bridesmaids complain about.",
        "answers":  [
                        {
                            "text":  "dress/costs",
                            "points":  76
                        },
                        {
                            "text":  "bridezilla",
                            "points":  7
                        },
                        {
                            "text":  "being single",
                            "points":  4
                        },
                        {
                            "text":  "the groomsmen",
                            "points":  2
                        },
                        {
                            "text":  "the flowers",
                            "points":  2
                        },
                        {
                            "text":  "their hair",
                            "points":  2
                        },
                        {
                            "text":  "the heat",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170189,
        "question":  "We asked 100 women... Name something you might do if you got to heaven and there were no men.",
        "answers":  [
                        {
                            "text":  "rejoice/thank god",
                            "points":  54
                        },
                        {
                            "text":  "cry/be bummed",
                            "points":  10
                        },
                        {
                            "text":  "relax/live in peace",
                            "points":  8
                        },
                        {
                            "text":  "ask why",
                            "points":  8
                        },
                        {
                            "text":  "go shopping",
                            "points":  7
                        },
                        {
                            "text":  "get a dog",
                            "points":  5
                        },
                        {
                            "text":  "meet gals/go lesbian",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170190,
        "question":  "Name something moms scream at kids to get their fingers out of.",
        "answers":  [
                        {
                            "text":  "their nose",
                            "points":  50
                        },
                        {
                            "text":  "food/cookie jar",
                            "points":  26
                        },
                        {
                            "text":  "their mouth",
                            "points":  7
                        },
                        {
                            "text":  "their butt",
                            "points":  4
                        },
                        {
                            "text":  "the dirt",
                            "points":  3
                        },
                        {
                            "text":  "the fan",
                            "points":  3
                        },
                        {
                            "text":  "the blender",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170191,
        "question":  "Name something specific you might see when you die.",
        "answers":  [
                        {
                            "text":  "white light",
                            "points":  45
                        },
                        {
                            "text":  "god/jesus",
                            "points":  17
                        },
                        {
                            "text":  "angels",
                            "points":  14
                        },
                        {
                            "text":  "heaven",
                            "points":  8
                        },
                        {
                            "text":  "dead family/pals",
                            "points":  5
                        },
                        {
                            "text":  "darkness/nothing",
                            "points":  4
                        },
                        {
                            "text":  "fires of hell",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170192,
        "question":  "We asked 100 single women... What's the first thing you do when you get home from an annoying blind date?",
        "answers":  [
                        {
                            "text":  "tell pals/tweet",
                            "points":  41
                        },
                        {
                            "text":  "drink/wine",
                            "points":  22
                        },
                        {
                            "text":  "bubble bath/shower",
                            "points":  11
                        },
                        {
                            "text":  "erase his number",
                            "points":  8
                        },
                        {
                            "text":  "pig out/ice cream",
                            "points":  6
                        },
                        {
                            "text":  "cry/scream",
                            "points":  5
                        },
                        {
                            "text":  "hit the sack",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170193,
        "question":  "We asked 100 married men... Between us, tell me something about a chicken that reminds you of your wife.",
        "answers":  [
                        {
                            "text":  "cackles/clucks",
                            "points":  40
                        },
                        {
                            "text":  "plump breasts",
                            "points":  24
                        },
                        {
                            "text":  "legs/thighs",
                            "points":  20
                        },
                        {
                            "text":  "bobbing head",
                            "points":  5
                        },
                        {
                            "text":  "scrawny neck",
                            "points":  2
                        },
                        {
                            "text":  "scatterbrained",
                            "points":  2
                        },
                        {
                            "text":  "finger lickin' good!",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170194,
        "question":  "If you win the lottery on Monday, where would we find you on Tuesday?",
        "answers":  [
                        {
                            "text":  "vacation/beach",
                            "points":  37
                        },
                        {
                            "text":  "home/in bed",
                            "points":  22
                        },
                        {
                            "text":  "work/flip'g burgers",
                            "points":  8
                        },
                        {
                            "text":  "tesla dealer",
                            "points":  8
                        },
                        {
                            "text":  "the bank",
                            "points":  7
                        },
                        {
                            "text":  "cpa/attorney",
                            "points":  7
                        },
                        {
                            "text":  "lotto office",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  170195,
        "question":  "Name something a magician should take out of his pants before sending them to the cleaners.",
        "answers":  [
                        {
                            "text":  "rabbit",
                            "points":  37
                        },
                        {
                            "text":  "hankies/scarves",
                            "points":  17
                        },
                        {
                            "text":  "wand",
                            "points":  12
                        },
                        {
                            "text":  "dove/bird",
                            "points":  9
                        },
                        {
                            "text":  "cards",
                            "points":  7
                        },
                        {
                            "text":  "coins/$/wallet",
                            "points":  7
                        },
                        {
                            "text":  "himself/his hands",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  170196,
        "question":  "We asked 100 single men... Name something you'd do if your boss hit on your girlfriend.",
        "answers":  [
                        {
                            "text":  "punch/kick him",
                            "points":  36
                        },
                        {
                            "text":  "confront/warn him",
                            "points":  26
                        },
                        {
                            "text":  "report him",
                            "points":  11
                        },
                        {
                            "text":  "laugh",
                            "points":  7
                        },
                        {
                            "text":  "demand a raise",
                            "points":  7
                        },
                        {
                            "text":  "clap/high five him",
                            "points":  4
                        },
                        {
                            "text":  "quit/new job",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170197,
        "question":  "Name something in the house a wife might put her dead cheating husband's ashes in.",
        "answers":  [
                        {
                            "text":  "the trash",
                            "points":  35
                        },
                        {
                            "text":  "the crapper",
                            "points":  32
                        },
                        {
                            "text":  "urn/vase",
                            "points":  9
                        },
                        {
                            "text":  "food container/bag",
                            "points":  8
                        },
                        {
                            "text":  "ashtray",
                            "points":  5
                        },
                        {
                            "text":  "vacuum",
                            "points":  3
                        },
                        {
                            "text":  "fireplace",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170198,
        "question":  "We asked 100 married women... What would you do if someone thought your husband was your son?",
        "answers":  [
                        {
                            "text":  "cry/mad/sad",
                            "points":  34
                        },
                        {
                            "text":  "laugh",
                            "points":  31
                        },
                        {
                            "text":  "get facelift/surg.",
                            "points":  8
                        },
                        {
                            "text":  "correct them",
                            "points":  7
                        },
                        {
                            "text":  "shocked/\"what?\"",
                            "points":  6
                        },
                        {
                            "text":  "get a makeover",
                            "points":  6
                        },
                        {
                            "text":  "be proud/i'm lucky",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170199,
        "question":  "We asked 100 women... Name something about a woman that men should realize improves with age.",
        "answers":  [
                        {
                            "text":  "wizardry of wang",
                            "points":  31
                        },
                        {
                            "text":  "intelligence/mind",
                            "points":  30
                        },
                        {
                            "text":  "humor/patience",
                            "points":  15
                        },
                        {
                            "text":  "cooking",
                            "points":  7
                        },
                        {
                            "text":  "love/faithfulness",
                            "points":  4
                        },
                        {
                            "text":  "confidence",
                            "points":  4
                        },
                        {
                            "text":  "their beauty",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170200,
        "question":  "We asked 100 married women... Name one change your husband could make that could turn him back into your dream man.",
        "answers":  [
                        {
                            "text":  "lose gut/get fit",
                            "points":  30
                        },
                        {
                            "text":  "be romantic",
                            "points":  19
                        },
                        {
                            "text":  "stop criticizing",
                            "points":  14
                        },
                        {
                            "text":  "regrow his hair",
                            "points":  11
                        },
                        {
                            "text":  "smile more",
                            "points":  11
                        },
                        {
                            "text":  "be less stubborn",
                            "points":  8
                        },
                        {
                            "text":  "shower/hygiene",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170201,
        "question":  "We asked 100 single women... Fill in the blank: I would never date a man who didn't use what?",
        "answers":  [
                        {
                            "text":  "toothbrush/paste",
                            "points":  27
                        },
                        {
                            "text":  "condoms/magnums",
                            "points":  21
                        },
                        {
                            "text":  "deodorant",
                            "points":  20
                        },
                        {
                            "text":  "soap/the shower",
                            "points":  15
                        },
                        {
                            "text":  "his brain/sense",
                            "points":  5
                        },
                        {
                            "text":  "mouthwash",
                            "points":  4
                        },
                        {
                            "text":  "humor effectively",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170202,
        "question":  "Name something a wife would hate to find on her husband after his office Christmas party.",
        "answers":  [
                        {
                            "text":  "lipstick/glittery",
                            "points":  69
                        },
                        {
                            "text":  "panties/chick duds",
                            "points":  9
                        },
                        {
                            "text":  "hickey",
                            "points":  6
                        },
                        {
                            "text":  "perfume",
                            "points":  3
                        },
                        {
                            "text":  "harlot's phone #",
                            "points":  3
                        },
                        {
                            "text":  "trampy coworker",
                            "points":  2
                        },
                        {
                            "text":  "mistletoe/on navel",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170203,
        "question":  "Name something that might be on ice.",
        "answers":  [
                        {
                            "text":  "drinks/coffee",
                            "points":  67
                        },
                        {
                            "text":  "food/oysters",
                            "points":  8
                        },
                        {
                            "text":  "corpse/my victim",
                            "points":  5
                        },
                        {
                            "text":  "marriage/rela'ship",
                            "points":  4
                        },
                        {
                            "text":  "injury/sore knee",
                            "points":  4
                        },
                        {
                            "text":  "disney on ice",
                            "points":  4
                        },
                        {
                            "text":  "ice skater",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170204,
        "question":  "Name something you might break in.",
        "answers":  [
                        {
                            "text":  "shoes/boots",
                            "points":  56
                        },
                        {
                            "text":  "car/engine",
                            "points":  13
                        },
                        {
                            "text":  "a house/window",
                            "points":  8
                        },
                        {
                            "text":  "glove/baseball glove",
                            "points":  7
                        },
                        {
                            "text":  "a horse",
                            "points":  4
                        },
                        {
                            "text":  "a safe",
                            "points":  3
                        },
                        {
                            "text":  "a saddle",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170205,
        "question":  "Instead of water, name something a Beverly Hills housewife might take a bath in.",
        "answers":  [
                        {
                            "text":  "champagne/booze",
                            "points":  55
                        },
                        {
                            "text":  "milk",
                            "points":  20
                        },
                        {
                            "text":  "mud",
                            "points":  7
                        },
                        {
                            "text":  "perrier/bottled h20",
                            "points":  6
                        },
                        {
                            "text":  "bubble bath",
                            "points":  2
                        },
                        {
                            "text":  "chocolate",
                            "points":  2
                        },
                        {
                            "text":  "money",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170206,
        "question":  "Name something a man wears that's a chick repellent.",
        "answers":  [
                        {
                            "text":  "bad clothes/diaper",
                            "points":  52
                        },
                        {
                            "text":  "putrid cologne",
                            "points":  21
                        },
                        {
                            "text":  "jewelry/ring",
                            "points":  6
                        },
                        {
                            "text":  "wig/ugly hairdo",
                            "points":  6
                        },
                        {
                            "text":  "beard/mustache",
                            "points":  5
                        },
                        {
                            "text":  "fanny pack",
                            "points":  2
                        },
                        {
                            "text":  "man makeup",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170207,
        "question":  "Name something about a man that might remind you of an elf.",
        "answers":  [
                        {
                            "text":  "big pointy ears",
                            "points":  49
                        },
                        {
                            "text":  "his height",
                            "points":  20
                        },
                        {
                            "text":  "his nose",
                            "points":  9
                        },
                        {
                            "text":  "his 2-incher",
                            "points":  5
                        },
                        {
                            "text":  "munchkin voice",
                            "points":  4
                        },
                        {
                            "text":  "clothes/his tights",
                            "points":  4
                        },
                        {
                            "text":  "tiny hands/feet",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170208,
        "question":  "We asked 100 married men... Fill in the blank: I was so drunk last night, I actually kissed my what?",
        "answers":  [
                        {
                            "text":  "dog/on the butt",
                            "points":  45
                        },
                        {
                            "text":  "boss",
                            "points":  23
                        },
                        {
                            "text":  "car",
                            "points":  12
                        },
                        {
                            "text":  "wife/husband",
                            "points":  5
                        },
                        {
                            "text":  "ex",
                            "points":  3
                        },
                        {
                            "text":  "phone",
                            "points":  3
                        },
                        {
                            "text":  "wife's friend",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170209,
        "question":  "Name something people eat every day that probably means they'll be sleeping alone every night.",
        "answers":  [
                        {
                            "text":  "garlic",
                            "points":  45
                        },
                        {
                            "text":  "beans",
                            "points":  19
                        },
                        {
                            "text":  "onions",
                            "points":  18
                        },
                        {
                            "text":  "eggs",
                            "points":  4
                        },
                        {
                            "text":  "ice cream",
                            "points":  3
                        },
                        {
                            "text":  "fish/anchovies",
                            "points":  3
                        },
                        {
                            "text":  "tacos",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170210,
        "question":  "Name something a witch might run into that proves drinking and flying on a broom don't mix.",
        "answers":  [
                        {
                            "text":  "tree",
                            "points":  40
                        },
                        {
                            "text":  "house/wall",
                            "points":  25
                        },
                        {
                            "text":  "pole/lamppost",
                            "points":  13
                        },
                        {
                            "text":  "another witch",
                            "points":  6
                        },
                        {
                            "text":  "a plane",
                            "points":  4
                        },
                        {
                            "text":  "the moon",
                            "points":  3
                        },
                        {
                            "text":  "bird/her crow",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170211,
        "question":  "Name something one coworker might steal from another.",
        "answers":  [
                        {
                            "text":  "pen/pencil",
                            "points":  37
                        },
                        {
                            "text":  "food/lunch",
                            "points":  24
                        },
                        {
                            "text":  "money",
                            "points":  10
                        },
                        {
                            "text":  "stapler",
                            "points":  8
                        },
                        {
                            "text":  "ideas/credit",
                            "points":  8
                        },
                        {
                            "text":  "promotion/job",
                            "points":  5
                        },
                        {
                            "text":  "mate/spouse",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170212,
        "question":  "Name an animal with a bottom that you'd hate your bottom to look like.",
        "answers":  [
                        {
                            "text":  "baboon/ape",
                            "points":  36
                        },
                        {
                            "text":  "elephant",
                            "points":  19
                        },
                        {
                            "text":  "hippo",
                            "points":  16
                        },
                        {
                            "text":  "pig",
                            "points":  8
                        },
                        {
                            "text":  "horse",
                            "points":  6
                        },
                        {
                            "text":  "cow",
                            "points":  6
                        },
                        {
                            "text":  "rhino",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170213,
        "question":  "We asked 100 men... Name a reason you're glad no one can see the underwear you have on.",
        "answers":  [
                        {
                            "text":  "holey/old",
                            "points":  33
                        },
                        {
                            "text":  "dirty/skid marks",
                            "points":  23
                        },
                        {
                            "text":  "color/pattern",
                            "points":  16
                        },
                        {
                            "text":  "too tight/saggy",
                            "points":  11
                        },
                        {
                            "text":  "i'm modest/private",
                            "points":  4
                        },
                        {
                            "text":  "gut bulges over 'em",
                            "points":  4
                        },
                        {
                            "text":  "i don't wear any",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170214,
        "question":  "We asked 100 single women... I'm not on a dating site because too may guys lie about their what?",
        "answers":  [
                        {
                            "text":  "age",
                            "points":  31
                        },
                        {
                            "text":  "job/income",
                            "points":  16
                        },
                        {
                            "text":  "looks/face pic",
                            "points":  14
                        },
                        {
                            "text":  "height",
                            "points":  11
                        },
                        {
                            "text":  "relationship status",
                            "points":  11
                        },
                        {
                            "text":  "weight",
                            "points":  6
                        },
                        {
                            "text":  "intentions",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170215,
        "question":  "Name an exercise a man does in the gym that makes him a better lover in the bedroom.",
        "answers":  [
                        {
                            "text":  "push-ups",
                            "points":  28
                        },
                        {
                            "text":  "sit-ups/crunches",
                            "points":  21
                        },
                        {
                            "text":  "squats",
                            "points":  15
                        },
                        {
                            "text":  "lifting weights",
                            "points":  13
                        },
                        {
                            "text":  "treadmill/running",
                            "points":  8
                        },
                        {
                            "text":  "yoga",
                            "points":  5
                        },
                        {
                            "text":  "rowing machine",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170216,
        "question":  "Name something you can put in an innie belly button but you can't put in an outie.",
        "answers":  [
                        {
                            "text":  "lint/fuzz",
                            "points":  21
                        },
                        {
                            "text":  "coin/penny",
                            "points":  19
                        },
                        {
                            "text":  "jewelry/piercing",
                            "points":  16
                        },
                        {
                            "text":  "a finger",
                            "points":  14
                        },
                        {
                            "text":  "food/whipped cream",
                            "points":  13
                        },
                        {
                            "text":  "alcohol/shot",
                            "points":  6
                        },
                        {
                            "text":  "marble",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170217,
        "question":  "We asked 100 men... Fill in the blank: The more hair I lose from my head, the more I find on my what?",
        "answers":  [
                        {
                            "text":  "shower/sink",
                            "points":  20
                        },
                        {
                            "text":  "chest",
                            "points":  19
                        },
                        {
                            "text":  "back",
                            "points":  17
                        },
                        {
                            "text":  "ears",
                            "points":  13
                        },
                        {
                            "text":  "pillow",
                            "points":  11
                        },
                        {
                            "text":  "face",
                            "points":  9
                        },
                        {
                            "text":  "butt/dump trumpet",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170218,
        "question":  "When Steve Harvey was five years old, he might have told his friends, \"Some day, I'm going to have a\" what?",
        "answers":  [
                        {
                            "text":  "tv show/job",
                            "points":  59
                        },
                        {
                            "text":  "mustache",
                            "points":  8
                        },
                        {
                            "text":  "boo/couple exes",
                            "points":  7
                        },
                        {
                            "text":  "sick ride",
                            "points":  7
                        },
                        {
                            "text":  "mansion",
                            "points":  6
                        },
                        {
                            "text":  "bald head",
                            "points":  4
                        },
                        {
                            "text":  "lotta $$$/billion",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170219,
        "question":  "Name something you enjoy that's not worth giving up to have a few extra years of life.",
        "answers":  [
                        {
                            "text":  "food/pizza",
                            "points":  45
                        },
                        {
                            "text":  "cigarettes/cigars",
                            "points":  18
                        },
                        {
                            "text":  "booze",
                            "points":  14
                        },
                        {
                            "text":  "sex/one-nighters",
                            "points":  9
                        },
                        {
                            "text":  "soda pop",
                            "points":  3
                        },
                        {
                            "text":  "coffee",
                            "points":  2
                        },
                        {
                            "text":  "weeeed!",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170220,
        "question":  "Name something that a cowboy uses on the range that he might bring into the bedroom.",
        "answers":  [
                        {
                            "text":  "rope/lasso",
                            "points":  44
                        },
                        {
                            "text":  "boots",
                            "points":  12
                        },
                        {
                            "text":  "hat",
                            "points":  11
                        },
                        {
                            "text":  "spurs",
                            "points":  9
                        },
                        {
                            "text":  "whip",
                            "points":  9
                        },
                        {
                            "text":  "buttless chaps",
                            "points":  4
                        },
                        {
                            "text":  "stirrups",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170221,
        "question":  "We asked 100 married men... Fantasy only: What do you think you would do the first day of being divorced?",
        "answers":  [
                        {
                            "text":  "celebrate/drink",
                            "points":  43
                        },
                        {
                            "text":  "menage a twins",
                            "points":  17
                        },
                        {
                            "text":  "cry",
                            "points":  13
                        },
                        {
                            "text":  "sleep",
                            "points":  9
                        },
                        {
                            "text":  "go on a diet",
                            "points":  6
                        },
                        {
                            "text":  "go on vacation",
                            "points":  3
                        },
                        {
                            "text":  "join dating site",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170222,
        "question":  "Name something you want in your coffin so you'll be cozy for eternity.",
        "answers":  [
                        {
                            "text":  "soft pillow",
                            "points":  42
                        },
                        {
                            "text":  "warm blankie",
                            "points":  26
                        },
                        {
                            "text":  "stuffed animal/doll",
                            "points":  9
                        },
                        {
                            "text":  "coat/slippers",
                            "points":  8
                        },
                        {
                            "text":  "bible/book",
                            "points":  4
                        },
                        {
                            "text":  "pet/dog",
                            "points":  2
                        },
                        {
                            "text":  "my wife/hubby",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170223,
        "question":  "A clown might squirt you with water out of a flower. But you'd really be upset if the water came out of what?",
        "answers":  [
                        {
                            "text":  "his mouth",
                            "points":  40
                        },
                        {
                            "text":  "his pee-pee",
                            "points":  19
                        },
                        {
                            "text":  "his red nose",
                            "points":  17
                        },
                        {
                            "text":  "hose/fire hose",
                            "points":  6
                        },
                        {
                            "text":  "a toilet",
                            "points":  5
                        },
                        {
                            "text":  "cup/bowl",
                            "points":  3
                        },
                        {
                            "text":  "butt/bean blaster",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170224,
        "question":  "We asked 100 married men... 90% of my wife's thoughts are devoted to what?",
        "answers":  [
                        {
                            "text":  "kids/family",
                            "points":  38
                        },
                        {
                            "text":  "her job",
                            "points":  14
                        },
                        {
                            "text":  "cleaning",
                            "points":  12
                        },
                        {
                            "text":  "me/destroying me",
                            "points":  11
                        },
                        {
                            "text":  "\"herself\"",
                            "points":  9
                        },
                        {
                            "text":  "shopping/spending",
                            "points":  6
                        },
                        {
                            "text":  "love making",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170225,
        "question":  "Fill in the blank: When trying to explain a hickey, you might say, \"Oh, that? That's just a ______.\"",
        "answers":  [
                        {
                            "text":  "bruise/pinch",
                            "points":  34
                        },
                        {
                            "text":  "burn/rug burn",
                            "points":  16
                        },
                        {
                            "text":  "hickey/kiss",
                            "points":  14
                        },
                        {
                            "text":  "bug bite",
                            "points":  12
                        },
                        {
                            "text":  "rash/hive",
                            "points":  8
                        },
                        {
                            "text":  "birthmark/mole",
                            "points":  5
                        },
                        {
                            "text":  "festering zit",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170226,
        "question":  "Name something you'd be surprised a man would do to the hair on his back.",
        "answers":  [
                        {
                            "text":  "shave/cut/a design",
                            "points":  31
                        },
                        {
                            "text":  "braid it",
                            "points":  22
                        },
                        {
                            "text":  "wax it",
                            "points":  14
                        },
                        {
                            "text":  "comb/style it",
                            "points":  11
                        },
                        {
                            "text":  "dye/bleach it",
                            "points":  8
                        },
                        {
                            "text":  "pluck it",
                            "points":  4
                        },
                        {
                            "text":  "curl it",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170227,
        "question":  "Fill in the blank: I went to a really bad restaurant -- everybody had to share what?",
        "answers":  [
                        {
                            "text":  "silverware/1 fork",
                            "points":  30
                        },
                        {
                            "text":  "napkins",
                            "points":  20
                        },
                        {
                            "text":  "drinks/glasses",
                            "points":  16
                        },
                        {
                            "text":  "plates/bowls",
                            "points":  9
                        },
                        {
                            "text":  "food",
                            "points":  9
                        },
                        {
                            "text":  "a table",
                            "points":  5
                        },
                        {
                            "text":  "a chair",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170228,
        "question":  "We asked 100 women... Tell me something that makes a bubble bath even more enjoyable.",
        "answers":  [
                        {
                            "text":  "wine/booze",
                            "points":  29
                        },
                        {
                            "text":  "candles",
                            "points":  18
                        },
                        {
                            "text":  "music/barry white",
                            "points":  15
                        },
                        {
                            "text":  "mate/hot chick",
                            "points":  13
                        },
                        {
                            "text":  "book/helter skelter",
                            "points":  10
                        },
                        {
                            "text":  "bath scents/oils",
                            "points":  4
                        },
                        {
                            "text":  "quiet/alone time",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170229,
        "question":  "Name a reason a pig makes a very good pet.",
        "answers":  [
                        {
                            "text":  "eat anything",
                            "points":  23
                        },
                        {
                            "text":  "smart/do tricks",
                            "points":  21
                        },
                        {
                            "text":  "loving/affectionate",
                            "points":  13
                        },
                        {
                            "text":  "clean/don't shed",
                            "points":  11
                        },
                        {
                            "text":  "cuties/twirly tail",
                            "points":  10
                        },
                        {
                            "text":  "can eat them/bacon",
                            "points":  10
                        },
                        {
                            "text":  "no barking/quiet",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170230,
        "question":  "We asked 100 married women... When your husband is acting like a little boy, name a way he should be punished.",
        "answers":  [
                        {
                            "text":  "no coochie!",
                            "points":  22
                        },
                        {
                            "text":  "spank that badink!",
                            "points":  15
                        },
                        {
                            "text":  "walk away/ignore",
                            "points":  15
                        },
                        {
                            "text":  "no dinner",
                            "points":  14
                        },
                        {
                            "text":  "grounded/time out",
                            "points":  12
                        },
                        {
                            "text":  "no tv",
                            "points":  10
                        },
                        {
                            "text":  "clean/do dishes",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170231,
        "question":  "We asked 100 women... Name something your mate could do that would take the romance out of a bubble bath.",
        "answers":  [
                        {
                            "text":  "blow butt bubbles",
                            "points":  54
                        },
                        {
                            "text":  "pee/poop in tub",
                            "points":  11
                        },
                        {
                            "text":  "burp",
                            "points":  7
                        },
                        {
                            "text":  "forget candles",
                            "points":  6
                        },
                        {
                            "text":  "fill w/ cold water",
                            "points":  5
                        },
                        {
                            "text":  "forget champagne",
                            "points":  5
                        },
                        {
                            "text":  "jump in/join me",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170232,
        "question":  "Name something a woman might call her man that starts with the word \"sugar.\"",
        "answers":  [
                        {
                            "text":  "sugar daddy",
                            "points":  44
                        },
                        {
                            "text":  "sugar pie",
                            "points":  19
                        },
                        {
                            "text":  "sugar bear",
                            "points":  11
                        },
                        {
                            "text":  "sugar baby",
                            "points":  9
                        },
                        {
                            "text":  "sugar lips",
                            "points":  4
                        },
                        {
                            "text":  "sugar plum",
                            "points":  3
                        },
                        {
                            "text":  "sugar buns",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170233,
        "question":  "Name something Steve Harvey counts so he can get to sleep.",
        "answers":  [
                        {
                            "text":  "money",
                            "points":  38
                        },
                        {
                            "text":  "black sheep",
                            "points":  37
                        },
                        {
                            "text":  "exes",
                            "points":  8
                        },
                        {
                            "text":  "teeth",
                            "points":  3
                        },
                        {
                            "text":  "family feud points",
                            "points":  2
                        },
                        {
                            "text":  "miss universe",
                            "points":  2
                        },
                        {
                            "text":  "mustaches",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170234,
        "question":  "Name something people postpone doing for as long as possible.",
        "answers":  [
                        {
                            "text":  "taxes/bills",
                            "points":  38
                        },
                        {
                            "text":  "doc/dentist/surg.",
                            "points":  30
                        },
                        {
                            "text":  "clean'g/laundry",
                            "points":  12
                        },
                        {
                            "text":  "marriage",
                            "points":  5
                        },
                        {
                            "text":  "birthin' babies",
                            "points":  3
                        },
                        {
                            "text":  "writing a will",
                            "points":  2
                        },
                        {
                            "text":  "pooping/bathroom",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170235,
        "question":  "After swimming, you'd hate to discover that the thing moving in your bathing suit is a what?",
        "answers":  [
                        {
                            "text":  "fish/piranha",
                            "points":  38
                        },
                        {
                            "text":  "leech",
                            "points":  19
                        },
                        {
                            "text":  "snake",
                            "points":  10
                        },
                        {
                            "text":  "jellyfish",
                            "points":  9
                        },
                        {
                            "text":  "angry crab",
                            "points":  7
                        },
                        {
                            "text":  "electric eel",
                            "points":  5
                        },
                        {
                            "text":  "bug/mosquito",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170236,
        "question":  "Name something a prisoner might do that would annoy his cellmate.",
        "answers":  [
                        {
                            "text":  "snore",
                            "points":  29
                        },
                        {
                            "text":  "sing/jailhouse rock",
                            "points":  29
                        },
                        {
                            "text":  "wink his sphinc",
                            "points":  16
                        },
                        {
                            "text":  "whistle",
                            "points":  7
                        },
                        {
                            "text":  "talk/in sleep",
                            "points":  7
                        },
                        {
                            "text":  "tap/a pen",
                            "points":  2
                        },
                        {
                            "text":  "tickle his pickle",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170237,
        "question":  "We asked 100 married women... Name something you think your husband neglects to do on purpose just to annoy you.",
        "answers":  [
                        {
                            "text":  "clean/laundry",
                            "points":  29
                        },
                        {
                            "text":  "put seat down",
                            "points":  22
                        },
                        {
                            "text":  "take out trash",
                            "points":  19
                        },
                        {
                            "text":  "listen to me",
                            "points":  7
                        },
                        {
                            "text":  "\"luv ya\"/compliment",
                            "points":  6
                        },
                        {
                            "text":  "replace toilet paper",
                            "points":  5
                        },
                        {
                            "text":  "flush/his turds",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170238,
        "question":  "Name something a cheap guy does at church when the collection plate comes around.",
        "answers":  [
                        {
                            "text":  "passes it/ignores",
                            "points":  29
                        },
                        {
                            "text":  "steals cash",
                            "points":  21
                        },
                        {
                            "text":  "gives coin/a buck",
                            "points":  15
                        },
                        {
                            "text":  "asks for change",
                            "points":  9
                        },
                        {
                            "text":  "empty envelope/fakes",
                            "points":  9
                        },
                        {
                            "text":  "leaves/bathroom",
                            "points":  6
                        },
                        {
                            "text":  "pretends to pay",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170239,
        "question":  "We asked 100 married men... Name a reason you're afraid your wife is actually turning into a witch.",
        "answers":  [
                        {
                            "text":  "reads my mind",
                            "points":  27
                        },
                        {
                            "text":  "mean/evil nag",
                            "points":  26
                        },
                        {
                            "text":  "digs brooms",
                            "points":  14
                        },
                        {
                            "text":  "cackles/her laugh",
                            "points":  9
                        },
                        {
                            "text":  "doesn't wear makeup",
                            "points":  7
                        },
                        {
                            "text":  "warts all over",
                            "points":  5
                        },
                        {
                            "text":  "casts spells",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170240,
        "question":  "We asked 100 married men... Name something you'd be willing to pay $100 to get out of going to.",
        "answers":  [
                        {
                            "text":  "wedding",
                            "points":  23
                        },
                        {
                            "text":  "mall/shopping",
                            "points":  18
                        },
                        {
                            "text":  "funeral/my own",
                            "points":  14
                        },
                        {
                            "text":  "work",
                            "points":  12
                        },
                        {
                            "text":  "church",
                            "points":  11
                        },
                        {
                            "text":  "opera/ballet",
                            "points":  8
                        },
                        {
                            "text":  "time with in-laws",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  170241,
        "question":  "We asked 100 women... Name the worst thing you've done on a date.",
        "answers":  [
                        {
                            "text":  "sneak away",
                            "points":  22
                        },
                        {
                            "text":  "puke/get sick",
                            "points":  19
                        },
                        {
                            "text":  "lie/pretend to lie",
                            "points":  15
                        },
                        {
                            "text":  "fart/on his lap",
                            "points":  14
                        },
                        {
                            "text":  "burp/mid-kiss",
                            "points":  11
                        },
                        {
                            "text":  "give up the cookie",
                            "points":  8
                        },
                        {
                            "text":  "hit on other guy",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170242,
        "question":  "Name something men only need a couple of that women like to have many of.",
        "answers":  [
                        {
                            "text":  "shoes",
                            "points":  66
                        },
                        {
                            "text":  "friends/girlfriends",
                            "points":  9
                        },
                        {
                            "text":  "rings/jewelry",
                            "points":  7
                        },
                        {
                            "text":  "big o's",
                            "points":  3
                        },
                        {
                            "text":  "pairs of undies",
                            "points":  2
                        },
                        {
                            "text":  "chocolates",
                            "points":  2
                        },
                        {
                            "text":  "kids",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170243,
        "question":  "We asked 100 married women... What do you do for your husband that makes you feel like his mommy?",
        "answers":  [
                        {
                            "text":  "laundry/pick up after",
                            "points":  48
                        },
                        {
                            "text":  "cook/serve food",
                            "points":  16
                        },
                        {
                            "text":  "nag/scold/\"no!\"",
                            "points":  8
                        },
                        {
                            "text":  "tuck into bed",
                            "points":  6
                        },
                        {
                            "text":  "give meds/nurse him",
                            "points":  5
                        },
                        {
                            "text":  "dress/buy clothes",
                            "points":  4
                        },
                        {
                            "text":  "cut/part his hair",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170244,
        "question":  "We asked 100 men... A first date becomes much more interesting if she says she does what for a living?",
        "answers":  [
                        {
                            "text":  "stripper/dancer",
                            "points":  46
                        },
                        {
                            "text":  "high-class ho",
                            "points":  16
                        },
                        {
                            "text":  "nurse",
                            "points":  12
                        },
                        {
                            "text":  "doctor",
                            "points":  7
                        },
                        {
                            "text":  "cook/chef",
                            "points":  5
                        },
                        {
                            "text":  "model",
                            "points":  3
                        },
                        {
                            "text":  "masseuse",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170245,
        "question":  "Name a food you wouldn't eat if the head was still attached.",
        "answers":  [
                        {
                            "text":  "fish/eel",
                            "points":  46
                        },
                        {
                            "text":  "chicken",
                            "points":  16
                        },
                        {
                            "text":  "pork/bacon",
                            "points":  10
                        },
                        {
                            "text":  "beef",
                            "points":  8
                        },
                        {
                            "text":  "shrimp",
                            "points":  5
                        },
                        {
                            "text":  "crawfish",
                            "points":  3
                        },
                        {
                            "text":  "turkey",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170246,
        "question":  "We asked 100 married men... Name something you wish your dog could give your wife lessons in.",
        "answers":  [
                        {
                            "text":  "listen/obey",
                            "points":  43
                        },
                        {
                            "text":  "loyal",
                            "points":  15
                        },
                        {
                            "text":  "being playful/fun",
                            "points":  9
                        },
                        {
                            "text":  "licking me",
                            "points":  8
                        },
                        {
                            "text":  "sit down/still",
                            "points":  6
                        },
                        {
                            "text":  "begging",
                            "points":  5
                        },
                        {
                            "text":  "greeting me",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170247,
        "question":  "Name something a male nudist might do to get ready for a hot date with a woman.",
        "answers":  [
                        {
                            "text":  "shave/manscape",
                            "points":  42
                        },
                        {
                            "text":  "bathe/shower",
                            "points":  22
                        },
                        {
                            "text":  "buy/wear clothes",
                            "points":  8
                        },
                        {
                            "text":  "oil up",
                            "points":  6
                        },
                        {
                            "text":  "tan",
                            "points":  5
                        },
                        {
                            "text":  "comb hair/body hair",
                            "points":  4
                        },
                        {
                            "text":  "exercise/push-ups",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170248,
        "question":  "Name something a person might have on their face that would be hard not to stare at.",
        "answers":  [
                        {
                            "text":  "mole/birthmark",
                            "points":  39
                        },
                        {
                            "text":  "volcanic zit",
                            "points":  22
                        },
                        {
                            "text":  "wart",
                            "points":  11
                        },
                        {
                            "text":  "tattoo",
                            "points":  9
                        },
                        {
                            "text":  "big nose",
                            "points":  4
                        },
                        {
                            "text":  "food/\"egg\"",
                            "points":  3
                        },
                        {
                            "text":  "eyes/black eye",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170249,
        "question":  "You might have trouble getting babysitters if your house doesn't have what?",
        "answers":  [
                        {
                            "text":  "tv/cable",
                            "points":  33
                        },
                        {
                            "text":  "wifi/internet",
                            "points":  29
                        },
                        {
                            "text":  "any children in it",
                            "points":  12
                        },
                        {
                            "text":  "heat/air",
                            "points":  6
                        },
                        {
                            "text":  "a fridge/food",
                            "points":  4
                        },
                        {
                            "text":  "locks/doors",
                            "points":  4
                        },
                        {
                            "text":  "a bathroom",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170250,
        "question":  "Name something grandpa has dreams of Judge Judy doing to him.",
        "answers":  [
                        {
                            "text":  "yell at/insult",
                            "points":  23
                        },
                        {
                            "text":  "spank him/with gavel",
                            "points":  16
                        },
                        {
                            "text":  "sentence/to jail",
                            "points":  15
                        },
                        {
                            "text":  "ride him",
                            "points":  14
                        },
                        {
                            "text":  "find in his favor",
                            "points":  11
                        },
                        {
                            "text":  "handcuff him",
                            "points":  9
                        },
                        {
                            "text":  "\"go to my chambers\"",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170251,
        "question":  "Name a part of people's bodies that things get stuck in.",
        "answers":  [
                        {
                            "text":  "teeth/mouth",
                            "points":  22
                        },
                        {
                            "text":  "ear",
                            "points":  17
                        },
                        {
                            "text":  "belly button",
                            "points":  15
                        },
                        {
                            "text":  "nose",
                            "points":  14
                        },
                        {
                            "text":  "hair",
                            "points":  12
                        },
                        {
                            "text":  "log launcher",
                            "points":  6
                        },
                        {
                            "text":  "cleavage/chest",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170252,
        "question":  "If they replaced the Statue of Liberty with a statue of Steve Harvey, name something he might be holding in his hand.",
        "answers":  [
                        {
                            "text":  "microphone",
                            "points":  52
                        },
                        {
                            "text":  "card/\"miss colombia\"",
                            "points":  15
                        },
                        {
                            "text":  "$$$/wallet/check",
                            "points":  6
                        },
                        {
                            "text":  "burrito/food",
                            "points":  5
                        },
                        {
                            "text":  "book/bible",
                            "points":  5
                        },
                        {
                            "text":  "cognac/booze",
                            "points":  5
                        },
                        {
                            "text":  "big fat cuban",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170253,
        "question":  "To attract a stallion, name something sexy that a filly has and knows how to use it.",
        "answers":  [
                        {
                            "text":  "fine flickin' tail",
                            "points":  33
                        },
                        {
                            "text":  "silky hair/mane",
                            "points":  24
                        },
                        {
                            "text":  "hot trot/gait",
                            "points":  9
                        },
                        {
                            "text":  "that poppin' booty",
                            "points":  8
                        },
                        {
                            "text":  "long slender legs",
                            "points":  6
                        },
                        {
                            "text":  "them teats!",
                            "points":  5
                        },
                        {
                            "text":  "face/eyes/cute grin",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170254,
        "question":  "Name some information about you that's none of anyone's business.",
        "answers":  [
                        {
                            "text":  "income/finances",
                            "points":  28
                        },
                        {
                            "text":  "love life/rela'ship",
                            "points":  23
                        },
                        {
                            "text":  "weight",
                            "points":  19
                        },
                        {
                            "text":  "age",
                            "points":  13
                        },
                        {
                            "text":  "social security #",
                            "points":  3
                        },
                        {
                            "text":  "my strange odor",
                            "points":  2
                        },
                        {
                            "text":  "my weenie size",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170255,
        "question":  "Name a city where you see a lot of boobs.",
        "answers":  [
                        {
                            "text":  "las vegas",
                            "points":  28
                        },
                        {
                            "text":  "miami",
                            "points":  19
                        },
                        {
                            "text":  "la/beverly hills",
                            "points":  18
                        },
                        {
                            "text":  "new orleans",
                            "points":  8
                        },
                        {
                            "text":  "new york",
                            "points":  8
                        },
                        {
                            "text":  "washington, d.c.",
                            "points":  6
                        },
                        {
                            "text":  "ft. lauderdale",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170256,
        "question":  "Name something a pet lover does with their lover or their pet.",
        "answers":  [
                        {
                            "text":  "rub/pet/stroke",
                            "points":  27
                        },
                        {
                            "text":  "cuddle/hug",
                            "points":  20
                        },
                        {
                            "text":  "kiss/swap spit",
                            "points":  16
                        },
                        {
                            "text":  "talk/baby talk",
                            "points":  9
                        },
                        {
                            "text":  "sleep/share bed",
                            "points":  7
                        },
                        {
                            "text":  "go for walks",
                            "points":  6
                        },
                        {
                            "text":  "feed 'em",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170257,
        "question":  "Name something you reach for when you realize you've put on a few pounds.",
        "answers":  [
                        {
                            "text":  "salad/diet food",
                            "points":  26
                        },
                        {
                            "text":  "fat clothes/sweats",
                            "points":  15
                        },
                        {
                            "text":  "exercise gear/equip.",
                            "points":  14
                        },
                        {
                            "text":  "bottled water",
                            "points":  12
                        },
                        {
                            "text":  "a new scale",
                            "points":  9
                        },
                        {
                            "text":  "diet pills",
                            "points":  7
                        },
                        {
                            "text":  "fatty food/eat up!",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  170258,
        "question":  "We asked 100 men... Name something that's harder to do if your underwear is too tight.",
        "answers":  [
                        {
                            "text":  "bend over",
                            "points":  25
                        },
                        {
                            "text":  "walk/run",
                            "points":  20
                        },
                        {
                            "text":  "take squirt/bathroom",
                            "points":  18
                        },
                        {
                            "text":  "exercise/squats",
                            "points":  12
                        },
                        {
                            "text":  "sit down",
                            "points":  7
                        },
                        {
                            "text":  "take 'em off/change",
                            "points":  5
                        },
                        {
                            "text":  "sing in low pitch",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170259,
        "question":  "Where does a naked cowboy keep his gun?",
        "answers":  [
                        {
                            "text":  "holster",
                            "points":  24
                        },
                        {
                            "text":  "in his hand",
                            "points":  21
                        },
                        {
                            "text":  "hat/under it",
                            "points":  13
                        },
                        {
                            "text":  "butt/up it",
                            "points":  13
                        },
                        {
                            "text":  "his boot",
                            "points":  8
                        },
                        {
                            "text":  "home/under pillow",
                            "points":  7
                        },
                        {
                            "text":  "his armpit",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170260,
        "question":  "Now that rock stars are old men, what do women at their concerts throw on stage?",
        "answers":  [
                        {
                            "text":  "loaded depends",
                            "points":  23
                        },
                        {
                            "text":  "their teeth",
                            "points":  20
                        },
                        {
                            "text":  "lingerie/girdle",
                            "points":  19
                        },
                        {
                            "text":  "viagra",
                            "points":  14
                        },
                        {
                            "text":  "walker/cane",
                            "points":  6
                        },
                        {
                            "text":  "money",
                            "points":  4
                        },
                        {
                            "text":  "geritol",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170261,
        "question":  "We asked 100 single men... It's bad if a woman dumps you. It's worse if she says it's because of your what?",
        "answers":  [
                        {
                            "text":  "small wonder/sex",
                            "points":  61
                        },
                        {
                            "text":  "personality/of mop",
                            "points":  11
                        },
                        {
                            "text":  "death breath",
                            "points":  5
                        },
                        {
                            "text":  "hooptie car",
                            "points":  3
                        },
                        {
                            "text":  "clothes/style",
                            "points":  3
                        },
                        {
                            "text":  "your body",
                            "points":  3
                        },
                        {
                            "text":  "awful mom",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170262,
        "question":  "Name a place you go on vacation when you're broke.",
        "answers":  [
                        {
                            "text":  "home/backyard",
                            "points":  47
                        },
                        {
                            "text":  "beach",
                            "points":  13
                        },
                        {
                            "text":  "park",
                            "points":  9
                        },
                        {
                            "text":  "friend's/relative's",
                            "points":  7
                        },
                        {
                            "text":  "lake/river/pond",
                            "points":  5
                        },
                        {
                            "text":  "zoo",
                            "points":  4
                        },
                        {
                            "text":  "mall/window shopping",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170263,
        "question":  "We asked 100 women... Name a food that excites you as much as sex.",
        "answers":  [
                        {
                            "text":  "chocolate/candy",
                            "points":  43
                        },
                        {
                            "text":  "ice cream",
                            "points":  15
                        },
                        {
                            "text":  "pizza",
                            "points":  11
                        },
                        {
                            "text":  "steak/prime rib",
                            "points":  9
                        },
                        {
                            "text":  "cookies",
                            "points":  5
                        },
                        {
                            "text":  "creme brulee/custard",
                            "points":  3
                        },
                        {
                            "text":  "tacos",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170264,
        "question":  "We asked 100 single men... Name something you do to pump yourself up before a date.",
        "answers":  [
                        {
                            "text":  "shower/groom",
                            "points":  37
                        },
                        {
                            "text":  "work out",
                            "points":  17
                        },
                        {
                            "text":  "drink/shots",
                            "points":  9
                        },
                        {
                            "text":  "mirror/to rehearse",
                            "points":  7
                        },
                        {
                            "text":  "tunes/bell biv devoe",
                            "points":  7
                        },
                        {
                            "text":  "pop viagra",
                            "points":  6
                        },
                        {
                            "text":  "cologne",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  170265,
        "question":  "Name something that droops.",
        "answers":  [
                        {
                            "text":  "the dairy dept.",
                            "points":  35
                        },
                        {
                            "text":  "eyelids/eyes",
                            "points":  21
                        },
                        {
                            "text":  "plant/flower",
                            "points":  9
                        },
                        {
                            "text":  "my massive gut",
                            "points":  9
                        },
                        {
                            "text":  "itchy & scratchy",
                            "points":  6
                        },
                        {
                            "text":  "chin",
                            "points":  6
                        },
                        {
                            "text":  "clothes/hat",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170266,
        "question":  "Past or present, which American president would look best bare-chested on a horse?",
        "answers":  [
                        {
                            "text":  "barack obama",
                            "points":  33
                        },
                        {
                            "text":  "john f. kennedy",
                            "points":  29
                        },
                        {
                            "text":  "ronald reagan",
                            "points":  8
                        },
                        {
                            "text":  "bill clinton",
                            "points":  5
                        },
                        {
                            "text":  "donald trump",
                            "points":  5
                        },
                        {
                            "text":  "abraham lincoln",
                            "points":  5
                        },
                        {
                            "text":  "george washington",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170267,
        "question":  "If a man and woman were literally joined at the hip, name something it would be hard to do.",
        "answers":  [
                        {
                            "text":  "butter the biscuit",
                            "points":  32
                        },
                        {
                            "text":  "pee/peaceful dump",
                            "points":  32
                        },
                        {
                            "text":  "exercise/sports",
                            "points":  8
                        },
                        {
                            "text":  "date others/cheat",
                            "points":  6
                        },
                        {
                            "text":  "sleep",
                            "points":  5
                        },
                        {
                            "text":  "leave each other",
                            "points":  3
                        },
                        {
                            "text":  "shower",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170268,
        "question":  "Fill in the blank: Grandma put real pot in grandpa's pot pie and he ______ed all night.",
        "answers":  [
                        {
                            "text":  "slept/snored",
                            "points":  29
                        },
                        {
                            "text":  "giggled",
                            "points":  25
                        },
                        {
                            "text":  "munched",
                            "points":  14
                        },
                        {
                            "text":  "freaked/was \"baked\"",
                            "points":  11
                        },
                        {
                            "text":  "talked",
                            "points":  4
                        },
                        {
                            "text":  "pooped",
                            "points":  3
                        },
                        {
                            "text":  "danced/nude",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170269,
        "question":  "We asked 100 single women... What kind of sea creature did your last date remind you of?",
        "answers":  [
                        {
                            "text":  "octopus",
                            "points":  29
                        },
                        {
                            "text":  "shark/fish",
                            "points":  19
                        },
                        {
                            "text":  "dolphin/porpoise",
                            "points":  12
                        },
                        {
                            "text":  "stingray",
                            "points":  9
                        },
                        {
                            "text":  "crab",
                            "points":  7
                        },
                        {
                            "text":  "whale",
                            "points":  7
                        },
                        {
                            "text":  "clam",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  170270,
        "question":  "Fill in the blank: Your mom never hesitates to tell you that she doesn't like your ______.",
        "answers":  [
                        {
                            "text":  "hair/70's perm",
                            "points":  29
                        },
                        {
                            "text":  "attitude/tone",
                            "points":  17
                        },
                        {
                            "text":  "mate/spouse",
                            "points":  14
                        },
                        {
                            "text":  "clothes/booty shorts",
                            "points":  12
                        },
                        {
                            "text":  "friends",
                            "points":  8
                        },
                        {
                            "text":  "face/beard",
                            "points":  7
                        },
                        {
                            "text":  "tattoo",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170271,
        "question":  "Grandma might complain that grandpa's idea of a romantic night is going where?",
        "answers":  [
                        {
                            "text":  "eat/cracker barrel",
                            "points":  27
                        },
                        {
                            "text":  "to bed",
                            "points":  24
                        },
                        {
                            "text":  "bingo",
                            "points":  12
                        },
                        {
                            "text":  "shopping/cvs",
                            "points":  9
                        },
                        {
                            "text":  "sport event/golf",
                            "points":  6
                        },
                        {
                            "text":  "bowling",
                            "points":  6
                        },
                        {
                            "text":  "sofa/watch jeopardy",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170272,
        "question":  "What would you do if someone threw a drink in your face?",
        "answers":  [
                        {
                            "text":  "wipe it off",
                            "points":  18
                        },
                        {
                            "text":  "hit them",
                            "points":  17
                        },
                        {
                            "text":  "leave/walk away",
                            "points":  16
                        },
                        {
                            "text":  "throw one at them",
                            "points":  15
                        },
                        {
                            "text":  "get mad/yell/cuss",
                            "points":  14
                        },
                        {
                            "text":  "lick it off! yum!",
                            "points":  5
                        },
                        {
                            "text":  "laugh",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170273,
        "question":  "You're in a cemetery. You see somebody crawling out of a grave. What do you do?",
        "answers":  [
                        {
                            "text":  "run!/leave",
                            "points":  50
                        },
                        {
                            "text":  "scream",
                            "points":  11
                        },
                        {
                            "text":  "call 911",
                            "points":  7
                        },
                        {
                            "text":  "help out/lend hand",
                            "points":  6
                        },
                        {
                            "text":  "video/boomerang it",
                            "points":  5
                        },
                        {
                            "text":  "just watch",
                            "points":  5
                        },
                        {
                            "text":  "faint",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170274,
        "question":  "Name a place that would go out of business if men disappeared from the planet.",
        "answers":  [
                        {
                            "text":  "strip joint",
                            "points":  47
                        },
                        {
                            "text":  "hooters",
                            "points":  10
                        },
                        {
                            "text":  "bar/brewery",
                            "points":  10
                        },
                        {
                            "text":  "clothing store",
                            "points":  6
                        },
                        {
                            "text":  "barber",
                            "points":  6
                        },
                        {
                            "text":  "sports/venues",
                            "points":  5
                        },
                        {
                            "text":  "gun store/club",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170275,
        "question":  "What might a nurse be about to do to a rude patient that would make her say, \"We can do this the easy way or the hard way\"?",
        "answers":  [
                        {
                            "text":  "stick 'em w/ needle",
                            "points":  36
                        },
                        {
                            "text":  "take temp",
                            "points":  19
                        },
                        {
                            "text":  "enema",
                            "points":  14
                        },
                        {
                            "text":  "ram in a catheter",
                            "points":  8
                        },
                        {
                            "text":  "dress/undress 'em",
                            "points":  4
                        },
                        {
                            "text":  "move 'em/phys. therapy",
                            "points":  4
                        },
                        {
                            "text":  "strap 'em down",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170276,
        "question":  "Name something a cheap woman might put in a male stripper's G-string.",
        "answers":  [
                        {
                            "text":  "a coin/penny",
                            "points":  36
                        },
                        {
                            "text":  "phone #/biz card",
                            "points":  17
                        },
                        {
                            "text":  "$1 bill",
                            "points":  10
                        },
                        {
                            "text":  "an i.o.u.",
                            "points":  9
                        },
                        {
                            "text":  "coupons",
                            "points":  6
                        },
                        {
                            "text":  "fake money",
                            "points":  6
                        },
                        {
                            "text":  "condom",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170277,
        "question":  "At a cannibal restaurant, name a part of a man that someone might complain is in their soup.",
        "answers":  [
                        {
                            "text":  "weenie & walnuts",
                            "points":  34
                        },
                        {
                            "text":  "mound of hair",
                            "points":  21
                        },
                        {
                            "text":  "his nails",
                            "points":  10
                        },
                        {
                            "text":  "finger/hand",
                            "points":  10
                        },
                        {
                            "text":  "toe/feet",
                            "points":  5
                        },
                        {
                            "text":  "nose",
                            "points":  4
                        },
                        {
                            "text":  "bones",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170278,
        "question":  "If a stripper came down the pole as Mary Poppins, name something that might pop off of her.",
        "answers":  [
                        {
                            "text":  "hat/bonnet",
                            "points":  30
                        },
                        {
                            "text":  "umbrella",
                            "points":  25
                        },
                        {
                            "text":  "bra",
                            "points":  10
                        },
                        {
                            "text":  "frilly blouse",
                            "points":  7
                        },
                        {
                            "text":  "dress/skirt",
                            "points":  6
                        },
                        {
                            "text":  "buttons",
                            "points":  6
                        },
                        {
                            "text":  "bloomers/undies",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170279,
        "question":  "The running of the bulls is dangerous. The running of what kind of animal wouldn't be?",
        "answers":  [
                        {
                            "text":  "bulldogs/dogs",
                            "points":  30
                        },
                        {
                            "text":  "cats",
                            "points":  23
                        },
                        {
                            "text":  "bunnies",
                            "points":  22
                        },
                        {
                            "text":  "turtles",
                            "points":  4
                        },
                        {
                            "text":  "mice",
                            "points":  3
                        },
                        {
                            "text":  "snails/slugs",
                            "points":  3
                        },
                        {
                            "text":  "hamsters/gerbils",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170280,
        "question":  "Name something a skydiver would hate to run into on the way down.",
        "answers":  [
                        {
                            "text":  "bird/geese",
                            "points":  30
                        },
                        {
                            "text":  "plane/propeller",
                            "points":  19
                        },
                        {
                            "text":  "skydiver/their ex",
                            "points":  16
                        },
                        {
                            "text":  "tree",
                            "points":  11
                        },
                        {
                            "text":  "power line/pole",
                            "points":  5
                        },
                        {
                            "text":  "mountain/volcano",
                            "points":  4
                        },
                        {
                            "text":  "building",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170281,
        "question":  "We asked 100 women... Name something your man does in the morning that reminds you of a caveman.",
        "answers":  [
                        {
                            "text":  "scratch",
                            "points":  27
                        },
                        {
                            "text":  "blow his toot flute",
                            "points":  19
                        },
                        {
                            "text":  "yawn",
                            "points":  15
                        },
                        {
                            "text":  "grunt/growl/yell",
                            "points":  14
                        },
                        {
                            "text":  "belch",
                            "points":  6
                        },
                        {
                            "text":  "eat",
                            "points":  4
                        },
                        {
                            "text":  "plod around/barefoot",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170282,
        "question":  "Fill in the blank: For some men, no woman could ever take the place of his love for what?",
        "answers":  [
                        {
                            "text":  "sports/football",
                            "points":  25
                        },
                        {
                            "text":  "his mom",
                            "points":  20
                        },
                        {
                            "text":  "booze",
                            "points":  11
                        },
                        {
                            "text":  "money",
                            "points":  10
                        },
                        {
                            "text":  "food/bacon",
                            "points":  9
                        },
                        {
                            "text":  "cars",
                            "points":  9
                        },
                        {
                            "text":  "his dog",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170283,
        "question":  "Name something a boy learns to do so someday he'll be able to pick up girls.",
        "answers":  [
                        {
                            "text":  "flirt/smooth talk",
                            "points":  47
                        },
                        {
                            "text":  "be a gentleman",
                            "points":  16
                        },
                        {
                            "text":  "hygiene/grooming",
                            "points":  7
                        },
                        {
                            "text":  "drive",
                            "points":  6
                        },
                        {
                            "text":  "sing/play instrument",
                            "points":  4
                        },
                        {
                            "text":  "kiss",
                            "points":  4
                        },
                        {
                            "text":  "get buff/flex",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170284,
        "question":  "We asked 100 single women... If a jerk hits on you, whose phone number might you give him instead of yours?",
        "answers":  [
                        {
                            "text":  "police",
                            "points":  34
                        },
                        {
                            "text":  "fake one",
                            "points":  13
                        },
                        {
                            "text":  "my ex's",
                            "points":  12
                        },
                        {
                            "text":  "my father's",
                            "points":  11
                        },
                        {
                            "text":  "my boss's",
                            "points":  8
                        },
                        {
                            "text":  "my mother's",
                            "points":  5
                        },
                        {
                            "text":  "pizza joint's",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170285,
        "question":  "A man knows his marriage is over when his wife brings what to bed with her?",
        "answers":  [
                        {
                            "text":  "lover/his buddies",
                            "points":  48
                        },
                        {
                            "text":  "vibrator/toy",
                            "points":  14
                        },
                        {
                            "text":  "stuffed animal/doll",
                            "points":  6
                        },
                        {
                            "text":  "cell phone",
                            "points":  5
                        },
                        {
                            "text":  "book/kindle",
                            "points":  5
                        },
                        {
                            "text":  "great dane/pet",
                            "points":  5
                        },
                        {
                            "text":  "body pillow",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170286,
        "question":  "A wife would get upset if her husband went where with his mother instead of with her?",
        "answers":  [
                        {
                            "text":  "vacay/honeymoon",
                            "points":  38
                        },
                        {
                            "text":  "dinner/spago",
                            "points":  19
                        },
                        {
                            "text":  "store/jewelry shop",
                            "points":  10
                        },
                        {
                            "text":  "bar/dance club",
                            "points":  6
                        },
                        {
                            "text":  "movies",
                            "points":  5
                        },
                        {
                            "text":  "concert/beyonce",
                            "points":  4
                        },
                        {
                            "text":  "to bed",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170287,
        "question":  "We asked 100 single women... You realize it'll be a short evening when your date meets you carrying a what?",
        "answers":  [
                        {
                            "text":  "gun/weapon",
                            "points":  36
                        },
                        {
                            "text":  "baby",
                            "points":  17
                        },
                        {
                            "text":  "condom/x-small",
                            "points":  10
                        },
                        {
                            "text":  "dog",
                            "points":  8
                        },
                        {
                            "text":  "laptop",
                            "points":  7
                        },
                        {
                            "text":  "briefcase",
                            "points":  5
                        },
                        {
                            "text":  "purse",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170288,
        "question":  "There's nothing better than a big juicy what?",
        "answers":  [
                        {
                            "text":  "steak",
                            "points":  35
                        },
                        {
                            "text":  "hamburger",
                            "points":  24
                        },
                        {
                            "text":  "peach",
                            "points":  7
                        },
                        {
                            "text":  "apple",
                            "points":  6
                        },
                        {
                            "text":  "orange",
                            "points":  6
                        },
                        {
                            "text":  "melon/watermelon",
                            "points":  5
                        },
                        {
                            "text":  "kiss",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170289,
        "question":  "Name a kind of dog you'd be surprised to see a chihuahua pick a fight with.",
        "answers":  [
                        {
                            "text":  "pit bull",
                            "points":  35
                        },
                        {
                            "text":  "great dane",
                            "points":  17
                        },
                        {
                            "text":  "german shepherd",
                            "points":  12
                        },
                        {
                            "text":  "doberman pinscher",
                            "points":  6
                        },
                        {
                            "text":  "rottweiler",
                            "points":  6
                        },
                        {
                            "text":  "st. bernard",
                            "points":  6
                        },
                        {
                            "text":  "bulldog",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170290,
        "question":  "Other than in bed, where's the most romantic place to make love?",
        "answers":  [
                        {
                            "text":  "beach",
                            "points":  35
                        },
                        {
                            "text":  "couch/living room",
                            "points":  16
                        },
                        {
                            "text":  "shower/tub",
                            "points":  16
                        },
                        {
                            "text":  "floor/by fireplace",
                            "points":  7
                        },
                        {
                            "text":  "car",
                            "points":  6
                        },
                        {
                            "text":  "grass/park/woods",
                            "points":  3
                        },
                        {
                            "text":  "jacuzzi",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170291,
        "question":  "We asked 100 married women... If your husband asked you for a divorce Sunday night, what's the first thing you'd do Monday morning?",
        "answers":  [
                        {
                            "text":  "call lawyer/file",
                            "points":  34
                        },
                        {
                            "text":  "empty bank acct.",
                            "points":  17
                        },
                        {
                            "text":  "cry",
                            "points":  10
                        },
                        {
                            "text":  "pack him up/kick out",
                            "points":  10
                        },
                        {
                            "text":  "leave/move out",
                            "points":  8
                        },
                        {
                            "text":  "burn his stuff/car",
                            "points":  4
                        },
                        {
                            "text":  "talk/change his mind",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170292,
        "question":  "The bad news: You're on a deserted island. The good news: What just washed up on shore?",
        "answers":  [
                        {
                            "text":  "boat",
                            "points":  32
                        },
                        {
                            "text":  "hottie/jason momoa",
                            "points":  19
                        },
                        {
                            "text":  "food/can of spam",
                            "points":  17
                        },
                        {
                            "text":  "booze/coconut rum",
                            "points":  6
                        },
                        {
                            "text":  "phone",
                            "points":  5
                        },
                        {
                            "text":  "lighter/matches",
                            "points":  4
                        },
                        {
                            "text":  "treasure",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170293,
        "question":  "Name a question grandma asks a 90-year-old man on a date that starts with \"Are you\" what?",
        "answers":  [
                        {
                            "text":  "single/widower?",
                            "points":  29
                        },
                        {
                            "text":  "frisky/pack'g viagra?",
                            "points":  15
                        },
                        {
                            "text":  "awake/tired?",
                            "points":  14
                        },
                        {
                            "text":  "alive/breathing?",
                            "points":  14
                        },
                        {
                            "text":  "healthy/dying?",
                            "points":  8
                        },
                        {
                            "text":  "deaf?",
                            "points":  3
                        },
                        {
                            "text":  "hungry?",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170294,
        "question":  "What might a mortician do with your body if he found out your family refused to pay?",
        "answers":  [
                        {
                            "text":  "cremate/burn it",
                            "points":  27
                        },
                        {
                            "text":  "dump it/in lake",
                            "points":  27
                        },
                        {
                            "text":  "sell/donate it",
                            "points":  12
                        },
                        {
                            "text":  "return/on doorstep",
                            "points":  9
                        },
                        {
                            "text":  "bury it/in bag",
                            "points":  4
                        },
                        {
                            "text":  "freeze it",
                            "points":  4
                        },
                        {
                            "text":  "let it rot",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170295,
        "question":  "A man should wait until his divorce is final before telling his wife that she's what?",
        "answers":  [
                        {
                            "text":  "overweight",
                            "points":  27
                        },
                        {
                            "text":  "facially challenged",
                            "points":  26
                        },
                        {
                            "text":  "crazy witch/nag",
                            "points":  15
                        },
                        {
                            "text":  "broke/not gettin' $",
                            "points":  6
                        },
                        {
                            "text":  "c+ in bed",
                            "points":  6
                        },
                        {
                            "text":  "booooring",
                            "points":  3
                        },
                        {
                            "text":  "a loser",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170296,
        "question":  "A wife might train the dog to bark whenever her husband touches what?",
        "answers":  [
                        {
                            "text":  "fridge/food",
                            "points":  25
                        },
                        {
                            "text":  "tv/remote",
                            "points":  19
                        },
                        {
                            "text":  "her/her badonk",
                            "points":  17
                        },
                        {
                            "text":  "booze/her wine",
                            "points":  10
                        },
                        {
                            "text":  "purse/checks",
                            "points":  8
                        },
                        {
                            "text":  "phone/hers",
                            "points":  4
                        },
                        {
                            "text":  "a bimbo",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170297,
        "question":  "Name something you don't want your dog to stick his tongue in.",
        "answers":  [
                        {
                            "text":  "my food/drink",
                            "points":  19
                        },
                        {
                            "text":  "my mouth",
                            "points":  16
                        },
                        {
                            "text":  "the toilet",
                            "points":  15
                        },
                        {
                            "text":  "hot steamy doody",
                            "points":  13
                        },
                        {
                            "text":  "my ear",
                            "points":  9
                        },
                        {
                            "text":  "socket/outlet",
                            "points":  9
                        },
                        {
                            "text":  "a butt/his/mine",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170298,
        "question":  "We asked 100 married women... Name an animal you've seen mating on video that reminds you of how your man makes love.",
        "answers":  [
                        {
                            "text":  "dog",
                            "points":  18
                        },
                        {
                            "text":  "horse",
                            "points":  18
                        },
                        {
                            "text":  "ape/monkey",
                            "points":  17
                        },
                        {
                            "text":  "lion",
                            "points":  14
                        },
                        {
                            "text":  "hippo",
                            "points":  11
                        },
                        {
                            "text":  "turtle",
                            "points":  4
                        },
                        {
                            "text":  "sloth",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170299,
        "question":  "We asked 100 married women... Fill in the blank: I'll give up my ______ when you pry my dead fingers from it.",
        "answers":  [
                        {
                            "text":  "ring/jewelry",
                            "points":  35
                        },
                        {
                            "text":  "phone",
                            "points":  17
                        },
                        {
                            "text":  "coffee/tea/mug",
                            "points":  10
                        },
                        {
                            "text":  "computer",
                            "points":  8
                        },
                        {
                            "text":  "money/checkbook",
                            "points":  7
                        },
                        {
                            "text":  "car",
                            "points":  4
                        },
                        {
                            "text":  "chocolate",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170300,
        "question":  "Name something you really shouldn't laugh in the middle of.",
        "answers":  [
                        {
                            "text":  "funeral",
                            "points":  32
                        },
                        {
                            "text":  "sermon/prayer",
                            "points":  24
                        },
                        {
                            "text":  "an intense boink",
                            "points":  14
                        },
                        {
                            "text":  "a sad story",
                            "points":  5
                        },
                        {
                            "text":  "a joke",
                            "points":  4
                        },
                        {
                            "text":  "scary movie/drama",
                            "points":  3
                        },
                        {
                            "text":  "meeting/interview",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170301,
        "question":  "We asked 100 married women... Name a word to describe a sexy man that no one calls your husband.",
        "answers":  [
                        {
                            "text":  "hunk",
                            "points":  29
                        },
                        {
                            "text":  "hot",
                            "points":  23
                        },
                        {
                            "text":  "handsome",
                            "points":  14
                        },
                        {
                            "text":  "sexy",
                            "points":  7
                        },
                        {
                            "text":  "fine",
                            "points":  5
                        },
                        {
                            "text":  "gigolo",
                            "points":  4
                        },
                        {
                            "text":  "smokin'",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170302,
        "question":  "Name something that makes a kiss passionate.",
        "answers":  [
                        {
                            "text":  "love/feelings",
                            "points":  27
                        },
                        {
                            "text":  "untamed tongue",
                            "points":  22
                        },
                        {
                            "text":  "the lips/gentle",
                            "points":  10
                        },
                        {
                            "text":  "touch/a dip",
                            "points":  9
                        },
                        {
                            "text":  "long/lingering",
                            "points":  9
                        },
                        {
                            "text":  "chemistry/lust",
                            "points":  5
                        },
                        {
                            "text":  "the setting/music",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170303,
        "question":  "We asked 100 married men... Name something specific you bought your wife to wear and she said \"over my dead body,\" so you're saving it for her funeral.",
        "answers":  [
                        {
                            "text":  "dress/miniskirt",
                            "points":  27
                        },
                        {
                            "text":  "thong",
                            "points":  16
                        },
                        {
                            "text":  "nightie",
                            "points":  15
                        },
                        {
                            "text":  "bikini",
                            "points":  14
                        },
                        {
                            "text":  "shirt/crop top",
                            "points":  5
                        },
                        {
                            "text":  "maid outfit",
                            "points":  5
                        },
                        {
                            "text":  "pants/pantsuit",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170304,
        "question":  "Name someone you might send this postcard to: \"Having a great time -- glad you're not here.\"",
        "answers":  [
                        {
                            "text":  "ex",
                            "points":  41
                        },
                        {
                            "text":  "boss/coworker",
                            "points":  16
                        },
                        {
                            "text":  "in-laws",
                            "points":  7
                        },
                        {
                            "text":  "spouse/mate",
                            "points":  6
                        },
                        {
                            "text":  "parents",
                            "points":  6
                        },
                        {
                            "text":  "annoying friend",
                            "points":  4
                        },
                        {
                            "text":  "sibling",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170305,
        "question":  "If you live to be 100, what do you think you'll be doing on Saturday night?",
        "answers":  [
                        {
                            "text":  "sleeping",
                            "points":  37
                        },
                        {
                            "text":  "tv/svu rerun",
                            "points":  28
                        },
                        {
                            "text":  "sex/chase 21 yr-olds",
                            "points":  5
                        },
                        {
                            "text":  "dancing",
                            "points":  4
                        },
                        {
                            "text":  "boozing/rum & ensure",
                            "points":  4
                        },
                        {
                            "text":  "eating",
                            "points":  3
                        },
                        {
                            "text":  "games/gambling",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170306,
        "question":  "A really bad pickup line for a man to use at a bar would be \"I have a\" what?",
        "answers":  [
                        {
                            "text":  "wife/mate",
                            "points":  29
                        },
                        {
                            "text":  "disease/discharge",
                            "points":  25
                        },
                        {
                            "text":  "big/tiny/limp tool",
                            "points":  9
                        },
                        {
                            "text":  "kid/bunch of kids",
                            "points":  6
                        },
                        {
                            "text":  "car/'76 gremlin",
                            "points":  6
                        },
                        {
                            "text":  "gun/stun gun",
                            "points":  5
                        },
                        {
                            "text":  "lotta $/no $",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170307,
        "question":  "We asked 100 women... Name a state where you'd have the best chance of finding Mr. Right.",
        "answers":  [
                        {
                            "text":  "new york",
                            "points":  27
                        },
                        {
                            "text":  "california",
                            "points":  23
                        },
                        {
                            "text":  "texas",
                            "points":  15
                        },
                        {
                            "text":  "washington",
                            "points":  7
                        },
                        {
                            "text":  "tennessee",
                            "points":  5
                        },
                        {
                            "text":  "alaska",
                            "points":  4
                        },
                        {
                            "text":  "florida",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170308,
        "question":  "Name a specific exercise you might be self-conscious about doing at a nudist gym.",
        "answers":  [
                        {
                            "text":  "jumping jacks",
                            "points":  25
                        },
                        {
                            "text":  "squats/knee bends",
                            "points":  24
                        },
                        {
                            "text":  "toe touch",
                            "points":  12
                        },
                        {
                            "text":  "push-ups",
                            "points":  6
                        },
                        {
                            "text":  "downward dog",
                            "points":  6
                        },
                        {
                            "text":  "sit-ups/crunches",
                            "points":  6
                        },
                        {
                            "text":  "sprints/jogging",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170309,
        "question":  "Name something you'd have if you were part man and part horse.",
        "answers":  [
                        {
                            "text":  "a tail",
                            "points":  19
                        },
                        {
                            "text":  "mane/hair",
                            "points":  19
                        },
                        {
                            "text":  "baloney pony",
                            "points":  17
                        },
                        {
                            "text":  "four legs",
                            "points":  9
                        },
                        {
                            "text":  "hooves",
                            "points":  8
                        },
                        {
                            "text":  "strength/speed",
                            "points":  7
                        },
                        {
                            "text":  "saddle",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170310,
        "question":  "To cover his tracks, name something a man might pay for in cash.",
        "answers":  [
                        {
                            "text":  "hotel/hourly motel",
                            "points":  53
                        },
                        {
                            "text":  "stripper",
                            "points":  14
                        },
                        {
                            "text":  "his booze habit",
                            "points":  4
                        },
                        {
                            "text":  "flowers",
                            "points":  3
                        },
                        {
                            "text":  "drugs/weed",
                            "points":  3
                        },
                        {
                            "text":  "food",
                            "points":  3
                        },
                        {
                            "text":  "lingerie/undies",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170311,
        "question":  "At the beach, name something a big guy keeps in the folds of his belly.",
        "answers":  [
                        {
                            "text":  "sand",
                            "points":  39
                        },
                        {
                            "text":  "food/tuna sandwich",
                            "points":  12
                        },
                        {
                            "text":  "sweat",
                            "points":  11
                        },
                        {
                            "text":  "wallet/cash",
                            "points":  7
                        },
                        {
                            "text":  "suntan lotion",
                            "points":  6
                        },
                        {
                            "text":  "cold beer",
                            "points":  4
                        },
                        {
                            "text":  "keys",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170312,
        "question":  "Name something your dog can hear you do when he's trying to sleep.",
        "answers":  [
                        {
                            "text":  "eat/get food",
                            "points":  38
                        },
                        {
                            "text":  "\"having sex\"",
                            "points":  12
                        },
                        {
                            "text":  "snore",
                            "points":  10
                        },
                        {
                            "text":  "watch tv",
                            "points":  7
                        },
                        {
                            "text":  "talk/argue",
                            "points":  7
                        },
                        {
                            "text":  "pee/free trapped turd",
                            "points":  5
                        },
                        {
                            "text":  "walk around",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170313,
        "question":  "You just opened a store called \"Steve Harveys 'R' Us.\" What does it sell?",
        "answers":  [
                        {
                            "text":  "jokes/gags",
                            "points":  33
                        },
                        {
                            "text":  "suits/duds/shoes",
                            "points":  26
                        },
                        {
                            "text":  "toys/steve doll",
                            "points":  7
                        },
                        {
                            "text":  "advice/his books",
                            "points":  6
                        },
                        {
                            "text":  "fake mustaches",
                            "points":  5
                        },
                        {
                            "text":  "toupees",
                            "points":  4
                        },
                        {
                            "text":  "razors/shavers",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170314,
        "question":  "If Steve Harvey became president, name something he might install in the Oval Office.",
        "answers":  [
                        {
                            "text":  "studio/audience",
                            "points":  33
                        },
                        {
                            "text":  "tv/movie screen",
                            "points":  15
                        },
                        {
                            "text":  "furniture/mirror",
                            "points":  13
                        },
                        {
                            "text":  "fridge/bar",
                            "points":  10
                        },
                        {
                            "text":  "bathroom/bidet",
                            "points":  5
                        },
                        {
                            "text":  "his clothing line",
                            "points":  4
                        },
                        {
                            "text":  "pics/selfies",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170315,
        "question":  "Name a reason a woman might be glad that her boyfriend dumped her.",
        "answers":  [
                        {
                            "text":  "man-whore/has wife",
                            "points":  26
                        },
                        {
                            "text":  "\"broke joke\"/jobless",
                            "points":  16
                        },
                        {
                            "text":  "she has new stud",
                            "points":  14
                        },
                        {
                            "text":  "douche/control'g",
                            "points":  9
                        },
                        {
                            "text":  "bad breath/smells",
                            "points":  9
                        },
                        {
                            "text":  "has raging std",
                            "points":  5
                        },
                        {
                            "text":  "con/in prison",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170316,
        "question":  "We asked 100 single women... You're talking to a cute guy at a party. What does he tell you about himself that causes you to lose interest?",
        "answers":  [
                        {
                            "text":  "lives w/ parents",
                            "points":  20
                        },
                        {
                            "text":  "no job/broke actor",
                            "points":  19
                        },
                        {
                            "text":  "has wife/mate",
                            "points":  15
                        },
                        {
                            "text":  "has ex/dumped today",
                            "points":  13
                        },
                        {
                            "text":  "hates animals",
                            "points":  6
                        },
                        {
                            "text":  "sportsaholic",
                            "points":  5
                        },
                        {
                            "text":  "fan of fine fellows",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170317,
        "question":  "Name a complaint that Mrs. King Kong might have about her husband.",
        "answers":  [
                        {
                            "text":  "too hairy",
                            "points":  17
                        },
                        {
                            "text":  "too big...everywhere",
                            "points":  16
                        },
                        {
                            "text":  "loud/noisy",
                            "points":  14
                        },
                        {
                            "text":  "picks up blondes",
                            "points":  14
                        },
                        {
                            "text":  "strong/destructive",
                            "points":  8
                        },
                        {
                            "text":  "angry/temper",
                            "points":  7
                        },
                        {
                            "text":  "too stinky",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  170318,
        "question":  "I was shocked to hear that Susan was a stripper by night and a what by day?",
        "answers":  [
                        {
                            "text":  "teacher",
                            "points":  43
                        },
                        {
                            "text":  "lawyer",
                            "points":  9
                        },
                        {
                            "text":  "librarian",
                            "points":  7
                        },
                        {
                            "text":  "nun/clergy",
                            "points":  7
                        },
                        {
                            "text":  "pta mom/housewife",
                            "points":  6
                        },
                        {
                            "text":  "cop",
                            "points":  5
                        },
                        {
                            "text":  "secretary/asst.",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170319,
        "question":  "Name something a wife might do to her cheating husband's underwear.",
        "answers":  [
                        {
                            "text":  "burn/with him in 'em",
                            "points":  39
                        },
                        {
                            "text":  "cut/shred 'em",
                            "points":  13
                        },
                        {
                            "text":  "throw out/on lawn",
                            "points":  8
                        },
                        {
                            "text":  "itching powder",
                            "points":  7
                        },
                        {
                            "text":  "icy hot/bengay",
                            "points":  6
                        },
                        {
                            "text":  "hot sauce",
                            "points":  5
                        },
                        {
                            "text":  "write on/\"he's mine\"",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170320,
        "question":  "Name a bad place for a couple to start a gropefest.",
        "answers":  [
                        {
                            "text":  "church",
                            "points":  37
                        },
                        {
                            "text":  "store/gymboree",
                            "points":  13
                        },
                        {
                            "text":  "buffet line/cafe",
                            "points":  12
                        },
                        {
                            "text":  "work",
                            "points":  7
                        },
                        {
                            "text":  "car/stoplight",
                            "points":  5
                        },
                        {
                            "text":  "parents'/table",
                            "points":  4
                        },
                        {
                            "text":  "the movies",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170321,
        "question":  "Many years ago, name a game children played outside.",
        "answers":  [
                        {
                            "text":  "tag",
                            "points":  33
                        },
                        {
                            "text":  "hopscotch",
                            "points":  15
                        },
                        {
                            "text":  "hide-and-seek",
                            "points":  13
                        },
                        {
                            "text":  "kick the can",
                            "points":  10
                        },
                        {
                            "text":  "ring around rosie",
                            "points":  4
                        },
                        {
                            "text":  "red rover",
                            "points":  4
                        },
                        {
                            "text":  "jump rope",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170322,
        "question":  "Before a date, name a food a flat-chested woman might stuff in her bra.",
        "answers":  [
                        {
                            "text":  "oranges",
                            "points":  31
                        },
                        {
                            "text":  "bread/buns",
                            "points":  19
                        },
                        {
                            "text":  "grapefruits",
                            "points":  9
                        },
                        {
                            "text":  "melons/watermelons",
                            "points":  8
                        },
                        {
                            "text":  "cotton candy",
                            "points":  5
                        },
                        {
                            "text":  "chicken breast",
                            "points":  5
                        },
                        {
                            "text":  "marshmallows",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170323,
        "question":  "Name someone who sucks money out of you like a vampire sucks blood.",
        "answers":  [
                        {
                            "text":  "the irs/gov't",
                            "points":  30
                        },
                        {
                            "text":  "my kids",
                            "points":  28
                        },
                        {
                            "text":  "my spouse/mate",
                            "points":  8
                        },
                        {
                            "text":  "bank/credit card",
                            "points":  6
                        },
                        {
                            "text":  "doctor/dentist",
                            "points":  4
                        },
                        {
                            "text":  "cable/tv service",
                            "points":  3
                        },
                        {
                            "text":  "loser sibling",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170324,
        "question":  "What was the last thing you turned down?",
        "answers":  [
                        {
                            "text":  "food/dessert",
                            "points":  26
                        },
                        {
                            "text":  "bed/sheets",
                            "points":  14
                        },
                        {
                            "text":  "subpar sex",
                            "points":  12
                        },
                        {
                            "text":  "a date/invitation",
                            "points":  10
                        },
                        {
                            "text":  "drink/shot",
                            "points":  9
                        },
                        {
                            "text":  "job offer",
                            "points":  6
                        },
                        {
                            "text":  "volume/tv/phone",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170325,
        "question":  "When you die, name a part of your funeral that you worry your cheap family might skip.",
        "answers":  [
                        {
                            "text":  "casket",
                            "points":  20
                        },
                        {
                            "text":  "reception/food/bar",
                            "points":  17
                        },
                        {
                            "text":  "flowers",
                            "points":  12
                        },
                        {
                            "text":  "whole ceremony",
                            "points":  11
                        },
                        {
                            "text":  "headstone",
                            "points":  8
                        },
                        {
                            "text":  "wake/viewing",
                            "points":  8
                        },
                        {
                            "text":  "burial/cemetery",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  170326,
        "question":  "If a nurse were a magician, what might she pull out of a patient's bottom?",
        "answers":  [
                        {
                            "text":  "animal/donkey",
                            "points":  37
                        },
                        {
                            "text":  "money/change",
                            "points":  17
                        },
                        {
                            "text":  "flowers",
                            "points":  10
                        },
                        {
                            "text":  "meds/a cure!",
                            "points":  7
                        },
                        {
                            "text":  "30 ft. hanky/scarf",
                            "points":  4
                        },
                        {
                            "text":  "his liver/organs",
                            "points":  3
                        },
                        {
                            "text":  "stethoscope",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170327,
        "question":  "A doctor would have a hard time not laughing if a patient had what stuck in his nose?",
        "answers":  [
                        {
                            "text":  "food/candy",
                            "points":  32
                        },
                        {
                            "text":  "a finger",
                            "points":  19
                        },
                        {
                            "text":  "pencil/pen/crayon",
                            "points":  15
                        },
                        {
                            "text":  "cotton ball/swab",
                            "points":  5
                        },
                        {
                            "text":  "mega booger",
                            "points":  4
                        },
                        {
                            "text":  "a marble",
                            "points":  3
                        },
                        {
                            "text":  "a condom",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170328,
        "question":  "We asked 100 women... Name something you and your dog have in common.",
        "answers":  [
                        {
                            "text":  "cuddly/affectionate",
                            "points":  25
                        },
                        {
                            "text":  "love sleep/naps",
                            "points":  15
                        },
                        {
                            "text":  "our hair/shed",
                            "points":  12
                        },
                        {
                            "text":  "love food",
                            "points":  9
                        },
                        {
                            "text":  "crave attention",
                            "points":  9
                        },
                        {
                            "text":  "loyal friends",
                            "points":  7
                        },
                        {
                            "text":  "curiosity/explore",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170329,
        "question":  "Name something a wife might force her husband to go to at least once a year.",
        "answers":  [
                        {
                            "text":  "in-laws'/fam event",
                            "points":  23
                        },
                        {
                            "text":  "doc/dentist",
                            "points":  19
                        },
                        {
                            "text":  "church",
                            "points":  17
                        },
                        {
                            "text":  "ballet/musical",
                            "points":  8
                        },
                        {
                            "text":  "mall/store",
                            "points":  7
                        },
                        {
                            "text":  "dance/adult prom",
                            "points":  4
                        },
                        {
                            "text":  "chick flick",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170330,
        "question":  "Name something you should never do at a funeral.",
        "answers":  [
                        {
                            "text":  "laugh/joke",
                            "points":  52
                        },
                        {
                            "text":  "flirt/boink widow",
                            "points":  7
                        },
                        {
                            "text":  "dance/on casket",
                            "points":  6
                        },
                        {
                            "text":  "drink/get sloshed",
                            "points":  6
                        },
                        {
                            "text":  "fart/on corpse",
                            "points":  3
                        },
                        {
                            "text":  "start a fight",
                            "points":  3
                        },
                        {
                            "text":  "strip/streak",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170331,
        "question":  "Name something that can make an unattractive guy seem like the sexiest man in the world.",
        "answers":  [
                        {
                            "text":  "$3.5 million",
                            "points":  29
                        },
                        {
                            "text":  "'tude/humor",
                            "points":  18
                        },
                        {
                            "text":  "kindness/manners",
                            "points":  16
                        },
                        {
                            "text":  "clothes/pimp suit",
                            "points":  6
                        },
                        {
                            "text":  "bod/lickable abs",
                            "points":  5
                        },
                        {
                            "text":  "brains",
                            "points":  3
                        },
                        {
                            "text":  "great smile",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170332,
        "question":  "Fill in the blank: I can't believe I just saw my ______ smoking a joint.",
        "answers":  [
                        {
                            "text":  "mom/dad",
                            "points":  19
                        },
                        {
                            "text":  "kid/grandkid",
                            "points":  16
                        },
                        {
                            "text":  "granny/gramps",
                            "points":  11
                        },
                        {
                            "text":  "sibling",
                            "points":  10
                        },
                        {
                            "text":  "spouse/mate",
                            "points":  9
                        },
                        {
                            "text":  "neighbor",
                            "points":  8
                        },
                        {
                            "text":  "pastor",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  170333,
        "question":  "We asked 100 single men... Name a reason you aren't such a great catch.",
        "answers":  [
                        {
                            "text":  "i'm overweight",
                            "points":  18
                        },
                        {
                            "text":  "i'm po!",
                            "points":  17
                        },
                        {
                            "text":  "i'm lazy",
                            "points":  10
                        },
                        {
                            "text":  "i'm bald",
                            "points":  9
                        },
                        {
                            "text":  "my ugly mug",
                            "points":  9
                        },
                        {
                            "text":  "work too much",
                            "points":  9
                        },
                        {
                            "text":  "i'm old",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  170334,
        "question":  "Men should have to be approved by a panel of women before they can wear what?",
        "answers":  [
                        {
                            "text":  "speedo/pickle pincher",
                            "points":  29
                        },
                        {
                            "text":  "sandals/crocs",
                            "points":  15
                        },
                        {
                            "text":  "shorts/cargos",
                            "points":  9
                        },
                        {
                            "text":  "jeans/skinny jeans",
                            "points":  8
                        },
                        {
                            "text":  "tanks/midriff tees",
                            "points":  6
                        },
                        {
                            "text":  "thong/briefs",
                            "points":  5
                        },
                        {
                            "text":  "hats/fedoras",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170335,
        "question":  "\"Derriere\" is one. Name another nice way to describe the body part you sit on.",
        "answers":  [
                        {
                            "text":  "butt/buttocks",
                            "points":  25
                        },
                        {
                            "text":  "tush/tushy",
                            "points":  12
                        },
                        {
                            "text":  "arse",
                            "points":  9
                        },
                        {
                            "text":  "booty",
                            "points":  9
                        },
                        {
                            "text":  "rear/rear end",
                            "points":  9
                        },
                        {
                            "text":  "bottom",
                            "points":  6
                        },
                        {
                            "text":  "behind",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170336,
        "question":  "Name a movie monster who's the strong, silent type.",
        "answers":  [
                        {
                            "text":  "frankenstein",
                            "points":  23
                        },
                        {
                            "text":  "king kong",
                            "points":  15
                        },
                        {
                            "text":  "godzilla",
                            "points":  13
                        },
                        {
                            "text":  "hulk",
                            "points":  12
                        },
                        {
                            "text":  "jason voorhees",
                            "points":  5
                        },
                        {
                            "text":  "the wolfman",
                            "points":  4
                        },
                        {
                            "text":  "the blob",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170337,
        "question":  "We asked 100 men... Name a bad habit you have that you hope some woman will find endearing.",
        "answers":  [
                        {
                            "text":  "snoring",
                            "points":  18
                        },
                        {
                            "text":  "gas-blasting",
                            "points":  18
                        },
                        {
                            "text":  "boozing",
                            "points":  15
                        },
                        {
                            "text":  "watching sports/tv",
                            "points":  9
                        },
                        {
                            "text":  "sleeping late",
                            "points":  7
                        },
                        {
                            "text":  "smoking cigs",
                            "points":  5
                        },
                        {
                            "text":  "walk'g around nude",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170338,
        "question":  "We asked 100 married women... Thinking only of your man's naked body, what animal does he remind you of?",
        "answers":  [
                        {
                            "text":  "gorilla/monkey",
                            "points":  29
                        },
                        {
                            "text":  "bear",
                            "points":  18
                        },
                        {
                            "text":  "panther/jaguar",
                            "points":  7
                        },
                        {
                            "text":  "giraffe",
                            "points":  7
                        },
                        {
                            "text":  "cheetah",
                            "points":  5
                        },
                        {
                            "text":  "lion",
                            "points":  4
                        },
                        {
                            "text":  "dog/puppy",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170339,
        "question":  "Fill in the blank: I'd be shocked if my neighbor asked to borrow what?",
        "answers":  [
                        {
                            "text":  "my spouse/mate",
                            "points":  21
                        },
                        {
                            "text":  "money/a million",
                            "points":  15
                        },
                        {
                            "text":  "unwashed undies",
                            "points":  10
                        },
                        {
                            "text":  "my car/porsche",
                            "points":  9
                        },
                        {
                            "text":  "banana hammock",
                            "points":  8
                        },
                        {
                            "text":  "my massive vibrator",
                            "points":  5
                        },
                        {
                            "text":  "sugar/food",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170340,
        "question":  "We asked 100 women... Name a specific word you'd use to describe both an apple and a guy.",
        "answers":  [
                        {
                            "text":  "sweet",
                            "points":  20
                        },
                        {
                            "text":  "juicy",
                            "points":  19
                        },
                        {
                            "text":  "delicious",
                            "points":  10
                        },
                        {
                            "text":  "round",
                            "points":  9
                        },
                        {
                            "text":  "ripe/overripe",
                            "points":  6
                        },
                        {
                            "text":  "fresh",
                            "points":  4
                        },
                        {
                            "text":  "firm",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170341,
        "question":  "Name something a woman might pack in a coffin to prepare for the afterlife.",
        "answers":  [
                        {
                            "text":  "makeup",
                            "points":  34
                        },
                        {
                            "text":  "outfit/thong",
                            "points":  9
                        },
                        {
                            "text":  "bible/book/kindle",
                            "points":  8
                        },
                        {
                            "text":  "money/amex",
                            "points":  8
                        },
                        {
                            "text":  "wine/booze",
                            "points":  4
                        },
                        {
                            "text":  "cell phone",
                            "points":  4
                        },
                        {
                            "text":  "hairbrush/comb",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170342,
        "question":  "Name a reaction you might have if you got really scared.",
        "answers":  [
                        {
                            "text":  "scream",
                            "points":  33
                        },
                        {
                            "text":  "shiver/shake",
                            "points":  8
                        },
                        {
                            "text":  "pee/\"grow a tail\"",
                            "points":  7
                        },
                        {
                            "text":  "gasp/hyperventilate",
                            "points":  7
                        },
                        {
                            "text":  "heart pounds/races",
                            "points":  6
                        },
                        {
                            "text":  "cry",
                            "points":  5
                        },
                        {
                            "text":  "jump",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170343,
        "question":  "If a wedding took place in a deli, name something the guests might throw instead of rice.",
        "answers":  [
                        {
                            "text":  "bread/bagels",
                            "points":  18
                        },
                        {
                            "text":  "meat/ham",
                            "points":  17
                        },
                        {
                            "text":  "cheese",
                            "points":  10
                        },
                        {
                            "text":  "seeds/rye/poppy",
                            "points":  9
                        },
                        {
                            "text":  "lettuce",
                            "points":  6
                        },
                        {
                            "text":  "pasta",
                            "points":  6
                        },
                        {
                            "text":  "olives",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170344,
        "question":  "If grandma got high, tell me something she might do.",
        "answers":  [
                        {
                            "text":  "dance/a jig",
                            "points":  16
                        },
                        {
                            "text":  "bake/& eat it all",
                            "points":  16
                        },
                        {
                            "text":  "giggle",
                            "points":  15
                        },
                        {
                            "text":  "strip/show jugs",
                            "points":  9
                        },
                        {
                            "text":  "fall asleep",
                            "points":  6
                        },
                        {
                            "text":  "sing/liza minnelli",
                            "points":  5
                        },
                        {
                            "text":  "tell stories/secrets",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170345,
        "question":  "You know more Italian than you think. Give me a word in Italian.",
        "answers":  [
                        {
                            "text":  "ciao",
                            "points":  27
                        },
                        {
                            "text":  "pizza",
                            "points":  9
                        },
                        {
                            "text":  "bella/bellisima",
                            "points":  9
                        },
                        {
                            "text":  "spaghetti",
                            "points":  8
                        },
                        {
                            "text":  "pasta",
                            "points":  6
                        },
                        {
                            "text":  "vino",
                            "points":  5
                        },
                        {
                            "text":  "arrivederci",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170346,
        "question":  "Name something that helps take your mind off your troubles.",
        "answers":  [
                        {
                            "text":  "booze, honey!",
                            "points":  22
                        },
                        {
                            "text":  "tv/flick/youtube",
                            "points":  14
                        },
                        {
                            "text":  "reading",
                            "points":  9
                        },
                        {
                            "text":  "music",
                            "points":  6
                        },
                        {
                            "text":  "sexy time",
                            "points":  6
                        },
                        {
                            "text":  "drugs/fat blunt",
                            "points":  6
                        },
                        {
                            "text":  "food",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170347,
        "question":  "Name something that's big and white.",
        "answers":  [
                        {
                            "text":  "polar bear",
                            "points":  19
                        },
                        {
                            "text":  "cloud",
                            "points":  16
                        },
                        {
                            "text":  "snowman",
                            "points":  8
                        },
                        {
                            "text":  "house/white house",
                            "points":  6
                        },
                        {
                            "text":  "beluga whale",
                            "points":  6
                        },
                        {
                            "text":  "person",
                            "points":  5
                        },
                        {
                            "text":  "great white shark",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170348,
        "question":  "Besides a performer, what occupation would be a good fit for Steve Harvey?",
        "answers":  [
                        {
                            "text":  "sales/used cars",
                            "points":  21
                        },
                        {
                            "text":  "therapist/counselor",
                            "points":  12
                        },
                        {
                            "text":  "pastor/preacher",
                            "points":  11
                        },
                        {
                            "text":  "motivational speaker",
                            "points":  6
                        },
                        {
                            "text":  "teacher",
                            "points":  5
                        },
                        {
                            "text":  "writer/novelist",
                            "points":  4
                        },
                        {
                            "text":  "divorce lawyer",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170349,
        "question":  "Name a Hollywood hunk about whom a cannibal might say, \"He looks good enough to eat.\"",
        "answers":  [
                        {
                            "text":  "brad pitt",
                            "points":  23
                        },
                        {
                            "text":  "george clooney",
                            "points":  13
                        },
                        {
                            "text":  "the rock",
                            "points":  10
                        },
                        {
                            "text":  "tom selleck",
                            "points":  3
                        },
                        {
                            "text":  "ryan reynolds",
                            "points":  3
                        },
                        {
                            "text":  "tom cruise",
                            "points":  3
                        },
                        {
                            "text":  "schwarzenegger",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170350,
        "question":  "Besides Steve Harvey himself, name an actor you'd like to see play Steve Harvey in the Steve Harvey movie.",
        "answers":  [
                        {
                            "text":  "chris rock",
                            "points":  12
                        },
                        {
                            "text":  "eddie murphy",
                            "points":  11
                        },
                        {
                            "text":  "denzel washington",
                            "points":  11
                        },
                        {
                            "text":  "kevin hart",
                            "points":  10
                        },
                        {
                            "text":  "will smith",
                            "points":  5
                        },
                        {
                            "text":  "samuel l. jackson",
                            "points":  4
                        },
                        {
                            "text":  "jamie foxx",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170351,
        "question":  "Name something a mean wife might use her husband's toothbrush to clean.",
        "answers":  [
                        {
                            "text":  "toilet",
                            "points":  84
                        },
                        {
                            "text":  "sink",
                            "points":  5
                        },
                        {
                            "text":  "floor",
                            "points":  3
                        },
                        {
                            "text":  "shoes",
                            "points":  3
                        },
                        {
                            "text":  "her body/poop chute",
                            "points":  3
                        },
                        {
                            "text":  "dishes/pan",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170352,
        "question":  "Name a famous bear a woman might want her man to dress up like in bed.",
        "answers":  [
                        {
                            "text":  "yogi bear",
                            "points":  54
                        },
                        {
                            "text":  "smokey bear",
                            "points":  31
                        },
                        {
                            "text":  "winnie the pooh",
                            "points":  5
                        },
                        {
                            "text":  "boo-boo bear",
                            "points":  4
                        },
                        {
                            "text":  "teddy bear",
                            "points":  4
                        },
                        {
                            "text":  "bear grylls",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170353,
        "question":  "At the Thanksgiving table, name a reason people are bowing their heads.",
        "answers":  [
                        {
                            "text":  "praying/to leave",
                            "points":  85
                        },
                        {
                            "text":  "stuffed & sleepy",
                            "points":  4
                        },
                        {
                            "text":  "bad food/spit'g up",
                            "points":  3
                        },
                        {
                            "text":  "hungry/eating",
                            "points":  3
                        },
                        {
                            "text":  "ashamed/of family",
                            "points":  2
                        },
                        {
                            "text":  "drunk",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170354,
        "question":  "If there were a superhero called Fatman, tell me something he probably couldn't do like Superman.",
        "answers":  [
                        {
                            "text":  "fly",
                            "points":  79
                        },
                        {
                            "text":  "leap/tall building",
                            "points":  5
                        },
                        {
                            "text":  "cute suit/tights",
                            "points":  4
                        },
                        {
                            "text":  "run",
                            "points":  4
                        },
                        {
                            "text":  "fit in phone booth",
                            "points":  4
                        },
                        {
                            "text":  "bend over/see feet",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170355,
        "question":  "Name something you might see a squirrel at the park doing with its nuts.",
        "answers":  [
                        {
                            "text":  "burying/hiding 'em",
                            "points":  51
                        },
                        {
                            "text":  "eating 'em",
                            "points":  24
                        },
                        {
                            "text":  "carry/fill cheeks",
                            "points":  13
                        },
                        {
                            "text":  "playing with 'em",
                            "points":  4
                        },
                        {
                            "text":  "cracking 'em",
                            "points":  4
                        },
                        {
                            "text":  "scratching 'em",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170356,
        "question":  "We asked 100 married women... On those days when you want to kill your husband, name a reason you don't.",
        "answers":  [
                        {
                            "text":  "jail/hate orange",
                            "points":  47
                        },
                        {
                            "text":  "love him/good guy",
                            "points":  33
                        },
                        {
                            "text":  "the kids",
                            "points":  9
                        },
                        {
                            "text":  "toe-curling sex",
                            "points":  6
                        },
                        {
                            "text":  "his paycheck",
                            "points":  2
                        },
                        {
                            "text":  "helps out/mows lawn",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170357,
        "question":  "Name a type of snake that a guy might compare his you-know-what to.",
        "answers":  [
                        {
                            "text":  "anaconda",
                            "points":  47
                        },
                        {
                            "text":  "king cobra",
                            "points":  16
                        },
                        {
                            "text":  "boa constrictor",
                            "points":  14
                        },
                        {
                            "text":  "python",
                            "points":  12
                        },
                        {
                            "text":  "rattlesnake",
                            "points":  6
                        },
                        {
                            "text":  "black mamba",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170358,
        "question":  "We asked 100 married men... We want the naked truth. What part of your wife's body looks better with clothes on?",
        "answers":  [
                        {
                            "text":  "blubber butt",
                            "points":  45
                        },
                        {
                            "text":  "manly feet",
                            "points":  17
                        },
                        {
                            "text":  "pancake boobs",
                            "points":  16
                        },
                        {
                            "text":  "muffin top/belly",
                            "points":  11
                        },
                        {
                            "text":  "legs",
                            "points":  8
                        },
                        {
                            "text":  "batwing arms",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170359,
        "question":  "Name something you might do at work to convince your boss you're too sick to be there.",
        "answers":  [
                        {
                            "text":  "cough violently",
                            "points":  44
                        },
                        {
                            "text":  "barf/on boss' shoe",
                            "points":  42
                        },
                        {
                            "text":  "sneeze maniacally",
                            "points":  7
                        },
                        {
                            "text":  "stay in bathroom",
                            "points":  2
                        },
                        {
                            "text":  "blow nose/tissue pile",
                            "points":  2
                        },
                        {
                            "text":  "just say i'm sick",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170360,
        "question":  "We asked 100 women... Name an occasion when you slip into something sexy instead of comfortable.",
        "answers":  [
                        {
                            "text":  "date night",
                            "points":  32
                        },
                        {
                            "text":  "wedding/honeymoon",
                            "points":  20
                        },
                        {
                            "text":  "anniversary",
                            "points":  17
                        },
                        {
                            "text":  "valentine's day",
                            "points":  13
                        },
                        {
                            "text":  "nookie night!",
                            "points":  9
                        },
                        {
                            "text":  "birthday",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  170361,
        "question":  "We asked 100 single women... You know a guy is really into you if he kisses your what?",
        "answers":  [
                        {
                            "text":  "forehead/head",
                            "points":  30
                        },
                        {
                            "text":  "cheek",
                            "points":  22
                        },
                        {
                            "text":  "neck",
                            "points":  15
                        },
                        {
                            "text":  "lips",
                            "points":  14
                        },
                        {
                            "text":  "hand",
                            "points":  11
                        },
                        {
                            "text":  "ears",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  170362,
        "question":  "Name a gripe a woman might have about her computer that she might also have about her man.",
        "answers":  [
                        {
                            "text":  "too slow",
                            "points":  68
                        },
                        {
                            "text":  "doesn't work/crashes",
                            "points":  20
                        },
                        {
                            "text":  "won't follow command",
                            "points":  4
                        },
                        {
                            "text":  "low/no memory",
                            "points":  2
                        },
                        {
                            "text":  "goes to sleep",
                            "points":  2
                        },
                        {
                            "text":  "confusing/complex",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170363,
        "question":  "We asked 100 women... Name something you'd do if your date picked you up in a hearse.",
        "answers":  [
                        {
                            "text":  "run!/dump him",
                            "points":  66
                        },
                        {
                            "text":  "laugh/cheer",
                            "points":  13
                        },
                        {
                            "text":  "cry/scream",
                            "points":  6
                        },
                        {
                            "text":  "get in & play dead",
                            "points":  6
                        },
                        {
                            "text":  "die of embarrassment",
                            "points":  4
                        },
                        {
                            "text":  "check for corpse",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170364,
        "question":  "Name a gesture a mom would be surprised to see her baby making in an ultrasound.",
        "answers":  [
                        {
                            "text":  "flipping the bird",
                            "points":  63
                        },
                        {
                            "text":  "waving",
                            "points":  10
                        },
                        {
                            "text":  "peace sign",
                            "points":  9
                        },
                        {
                            "text":  "thumbs up",
                            "points":  7
                        },
                        {
                            "text":  "sucking thumb/finger",
                            "points":  6
                        },
                        {
                            "text":  "high five",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170365,
        "question":  "Name the hairiest part of Steve Harvey's body.",
        "answers":  [
                        {
                            "text":  "mustache/face",
                            "points":  59
                        },
                        {
                            "text":  "chest",
                            "points":  20
                        },
                        {
                            "text":  "back",
                            "points":  8
                        },
                        {
                            "text":  "arms/pits",
                            "points":  5
                        },
                        {
                            "text":  "legs",
                            "points":  3
                        },
                        {
                            "text":  "butt/crack",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170366,
        "question":  "Name a good musical instrument for someone who is full of hot air.",
        "answers":  [
                        {
                            "text":  "tuba",
                            "points":  56
                        },
                        {
                            "text":  "trumpet",
                            "points":  17
                        },
                        {
                            "text":  "trombone",
                            "points":  8
                        },
                        {
                            "text":  "bagpipes",
                            "points":  8
                        },
                        {
                            "text":  "saxophone",
                            "points":  5
                        },
                        {
                            "text":  "flute",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170367,
        "question":  "Name something you'd hate to find out was living in the walls of your house.",
        "answers":  [
                        {
                            "text":  "termites/bugs",
                            "points":  45
                        },
                        {
                            "text":  "rats/mice",
                            "points":  42
                        },
                        {
                            "text":  "snakes",
                            "points":  3
                        },
                        {
                            "text":  "mold",
                            "points":  3
                        },
                        {
                            "text":  "zombie/monster",
                            "points":  3
                        },
                        {
                            "text":  "person/in-laws",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170368,
        "question":  "We asked 100 married women... Name a place you take your husband where he acts like a zombie.",
        "answers":  [
                        {
                            "text":  "theater/movie",
                            "points":  45
                        },
                        {
                            "text":  "home/to bed",
                            "points":  28
                        },
                        {
                            "text":  "bar/nightclub",
                            "points":  16
                        },
                        {
                            "text":  "ballet/swan lake",
                            "points":  5
                        },
                        {
                            "text":  "restaurant/buffet",
                            "points":  2
                        },
                        {
                            "text":  "mall/craft store",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170369,
        "question":  "Name a question a man's second wife asks him about his first wife that starts with \"Was she\" what?",
        "answers":  [
                        {
                            "text":  "pretty/hot?",
                            "points":  43
                        },
                        {
                            "text":  "better in bed?",
                            "points":  40
                        },
                        {
                            "text":  "fat/skinnier?",
                            "points":  5
                        },
                        {
                            "text":  "a beeyatch/psycho?",
                            "points":  4
                        },
                        {
                            "text":  "like me?",
                            "points":  3
                        },
                        {
                            "text":  "a good cook?",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170370,
        "question":  "We asked 100 married men... Name something your wife asks you to choose and when you do, it's the wrong choice.",
        "answers":  [
                        {
                            "text":  "restaurant/meal",
                            "points":  40
                        },
                        {
                            "text":  "clothes/her outfit",
                            "points":  25
                        },
                        {
                            "text":  "a gift for her",
                            "points":  13
                        },
                        {
                            "text":  "movie/tv show",
                            "points":  12
                        },
                        {
                            "text":  "home decor/paint",
                            "points":  6
                        },
                        {
                            "text":  "another babe",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170371,
        "question":  "Name something a lady cop might do to her husband in the bedroom.",
        "answers":  [
                        {
                            "text":  "cuff him",
                            "points":  77
                        },
                        {
                            "text":  "cavity search/frisk",
                            "points":  8
                        },
                        {
                            "text":  "arrest him",
                            "points":  4
                        },
                        {
                            "text":  "spank/s&m",
                            "points":  4
                        },
                        {
                            "text":  "taser him",
                            "points":  2
                        },
                        {
                            "text":  "tie him up",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170372,
        "question":  "Name something people do with belly button lint.",
        "answers":  [
                        {
                            "text":  "pick/clean out/toss",
                            "points":  77
                        },
                        {
                            "text":  "roll into a ball",
                            "points":  6
                        },
                        {
                            "text":  "smell it",
                            "points":  5
                        },
                        {
                            "text":  "look at/inspect",
                            "points":  3
                        },
                        {
                            "text":  "eat it",
                            "points":  3
                        },
                        {
                            "text":  "save/collect it",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170373,
        "question":  "Name something you'd do if you lent a friend a thousand dollars and he forgot to pay you back.",
        "answers":  [
                        {
                            "text":  "remind/ask for",
                            "points":  74
                        },
                        {
                            "text":  "beat/break legs",
                            "points":  9
                        },
                        {
                            "text":  "yell/get mad",
                            "points":  5
                        },
                        {
                            "text":  "sue him",
                            "points":  4
                        },
                        {
                            "text":  "end friendship",
                            "points":  3
                        },
                        {
                            "text":  "forgive/bff's 4-ever",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170374,
        "question":  "Fill in the blank: After a man gets divorced, he might get a new ______ instead of a new wife.",
        "answers":  [
                        {
                            "text":  "car/truck",
                            "points":  62
                        },
                        {
                            "text":  "girlfriend/boyfriend",
                            "points":  18
                        },
                        {
                            "text":  "dog",
                            "points":  11
                        },
                        {
                            "text":  "hobby",
                            "points":  2
                        },
                        {
                            "text":  "home",
                            "points":  2
                        },
                        {
                            "text":  "motorcycle",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170375,
        "question":  "Name someone who might be holding a whip.",
        "answers":  [
                        {
                            "text":  "animal trainer",
                            "points":  56
                        },
                        {
                            "text":  "dominatrix",
                            "points":  16
                        },
                        {
                            "text":  "cowboy/rancher",
                            "points":  12
                        },
                        {
                            "text":  "jockey",
                            "points":  9
                        },
                        {
                            "text":  "coach/buggy driver",
                            "points":  2
                        },
                        {
                            "text":  "indiana jones",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170376,
        "question":  "Name a way that a coward ends a relationship.",
        "answers":  [
                        {
                            "text":  "text/\"bye felicia\"",
                            "points":  54
                        },
                        {
                            "text":  "vanish/move",
                            "points":  26
                        },
                        {
                            "text":  "e-mail",
                            "points":  8
                        },
                        {
                            "text":  "call",
                            "points":  3
                        },
                        {
                            "text":  "note/on post-it",
                            "points":  3
                        },
                        {
                            "text":  "facebook/soc. media",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170377,
        "question":  "Name something you might need if you wanted to hold a séance.",
        "answers":  [
                        {
                            "text":  "candles",
                            "points":  54
                        },
                        {
                            "text":  "ouija board",
                            "points":  19
                        },
                        {
                            "text":  "crystal ball",
                            "points":  8
                        },
                        {
                            "text":  "people/a medium",
                            "points":  7
                        },
                        {
                            "text":  "table",
                            "points":  6
                        },
                        {
                            "text":  "a stern talking-to",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170378,
        "question":  "We asked 100 divorced women... If your ex-husband were reincarnated, which animal would he come back as?",
        "answers":  [
                        {
                            "text":  "jackass",
                            "points":  45
                        },
                        {
                            "text":  "dog",
                            "points":  25
                        },
                        {
                            "text":  "humping rabbit",
                            "points":  9
                        },
                        {
                            "text":  "snake",
                            "points":  9
                        },
                        {
                            "text":  "pig",
                            "points":  5
                        },
                        {
                            "text":  "rat",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170379,
        "question":  "Name a kind of joint that men like.",
        "answers":  [
                        {
                            "text":  "bar/nightclub",
                            "points":  45
                        },
                        {
                            "text":  "strip joint",
                            "points":  20
                        },
                        {
                            "text":  "weed/a fatty",
                            "points":  20
                        },
                        {
                            "text":  "dinner/bbq",
                            "points":  5
                        },
                        {
                            "text":  "body/ankle/knee",
                            "points":  4
                        },
                        {
                            "text":  "ball joint",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170380,
        "question":  "Name something specific you like your lover to do to your bottom.",
        "answers":  [
                        {
                            "text":  "rub/caress",
                            "points":  38
                        },
                        {
                            "text":  "spank/pat",
                            "points":  31
                        },
                        {
                            "text":  "squeeze/grab",
                            "points":  11
                        },
                        {
                            "text":  "kiss it",
                            "points":  8
                        },
                        {
                            "text":  "admire/look at",
                            "points":  5
                        },
                        {
                            "text":  "don't touch/ignore",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170381,
        "question":  "Name something a cow might do really slowly after grazing in the farmer's marijuana crop.",
        "answers":  [
                        {
                            "text":  "walk/move",
                            "points":  38
                        },
                        {
                            "text":  "moooooooo!",
                            "points":  26
                        },
                        {
                            "text":  "eat/chew cud",
                            "points":  22
                        },
                        {
                            "text":  "give milk",
                            "points":  6
                        },
                        {
                            "text":  "make cow pies",
                            "points":  3
                        },
                        {
                            "text":  "blink",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170382,
        "question":  "We asked 100 women... Wouldn't you know it -- I ran into my ex on the one day I neglected to what?",
        "answers":  [
                        {
                            "text":  "wear makeup",
                            "points":  36
                        },
                        {
                            "text":  "shower/bathe",
                            "points":  24
                        },
                        {
                            "text":  "do my hair",
                            "points":  17
                        },
                        {
                            "text":  "shave/lady stache",
                            "points":  11
                        },
                        {
                            "text":  "dress nice/wear bra",
                            "points":  7
                        },
                        {
                            "text":  "put my teeth in",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170383,
        "question":  "We asked 100 married women... Fill in the blank: I like it when my man gives me a big what?",
        "answers":  [
                        {
                            "text":  "hug",
                            "points":  33
                        },
                        {
                            "text":  "juicy smacker",
                            "points":  21
                        },
                        {
                            "text":  "gift/car",
                            "points":  19
                        },
                        {
                            "text":  "compliment",
                            "points":  13
                        },
                        {
                            "text":  "massage/rub",
                            "points":  9
                        },
                        {
                            "text":  "smile",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170384,
        "question":  "Name something living in your basement that you hope you'll be able to get rid of once and for all.",
        "answers":  [
                        {
                            "text":  "spiders/bugs",
                            "points":  32
                        },
                        {
                            "text":  "mice/rats",
                            "points":  30
                        },
                        {
                            "text":  "mold/mildew",
                            "points":  21
                        },
                        {
                            "text":  "my loser kid",
                            "points":  8
                        },
                        {
                            "text":  "my in-laws",
                            "points":  4
                        },
                        {
                            "text":  "a ghost",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170385,
        "question":  "We asked 100 married men... In your nightmares, what is your mother-in-law doing to you?",
        "answers":  [
                        {
                            "text":  "nag/talk/yell'g",
                            "points":  63
                        },
                        {
                            "text":  "serving her cooking",
                            "points":  12
                        },
                        {
                            "text":  "beating me",
                            "points":  7
                        },
                        {
                            "text":  "hugging me",
                            "points":  5
                        },
                        {
                            "text":  "suck'g face/seducing",
                            "points":  5
                        },
                        {
                            "text":  "stab/castrating me",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170386,
        "question":  "Name something you do to your nose.",
        "answers":  [
                        {
                            "text":  "blow it",
                            "points":  52
                        },
                        {
                            "text":  "pick a winner",
                            "points":  26
                        },
                        {
                            "text":  "scratch/rub it",
                            "points":  9
                        },
                        {
                            "text":  "wipe it",
                            "points":  5
                        },
                        {
                            "text":  "scrunch it",
                            "points":  2
                        },
                        {
                            "text":  "pierce it",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170387,
        "question":  "Name something good that happens to you that you'd make sure your ex finds out about.",
        "answers":  [
                        {
                            "text":  "new mate/spouse",
                            "points":  48
                        },
                        {
                            "text":  "won $$$/lotto",
                            "points":  33
                        },
                        {
                            "text":  "promoted/new job",
                            "points":  7
                        },
                        {
                            "text":  "having baby",
                            "points":  3
                        },
                        {
                            "text":  "luxury vacation",
                            "points":  3
                        },
                        {
                            "text":  "healthy/firm stool",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170388,
        "question":  "We asked 100 men... Name something you'd hate to find out a cheap doctor used to circumcise you.",
        "answers":  [
                        {
                            "text":  "knife/butter knife",
                            "points":  46
                        },
                        {
                            "text":  "scissors/shears",
                            "points":  28
                        },
                        {
                            "text":  "razor blade",
                            "points":  14
                        },
                        {
                            "text":  "can opener",
                            "points":  3
                        },
                        {
                            "text":  "hacksaw/saw",
                            "points":  3
                        },
                        {
                            "text":  "broken bottle",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170389,
        "question":  "Name something you might borrow from a new friend to impress old friends at your high school reunion.",
        "answers":  [
                        {
                            "text":  "cool car",
                            "points":  45
                        },
                        {
                            "text":  "clothes/shoes",
                            "points":  21
                        },
                        {
                            "text":  "jewelry",
                            "points":  20
                        },
                        {
                            "text":  "their spouse/mate",
                            "points":  6
                        },
                        {
                            "text":  "money",
                            "points":  2
                        },
                        {
                            "text":  "purse",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170390,
        "question":  "Name a state whose people think they're better than anyone else.",
        "answers":  [
                        {
                            "text":  "california",
                            "points":  44
                        },
                        {
                            "text":  "new york",
                            "points":  27
                        },
                        {
                            "text":  "texas",
                            "points":  17
                        },
                        {
                            "text":  "connecticut",
                            "points":  3
                        },
                        {
                            "text":  "new jersey",
                            "points":  3
                        },
                        {
                            "text":  "massachusetts",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170391,
        "question":  "Name something a cat might do during a dinner party that's an appetite killer.",
        "answers":  [
                        {
                            "text":  "puke/a hairball",
                            "points":  40
                        },
                        {
                            "text":  "lick self/butt",
                            "points":  18
                        },
                        {
                            "text":  "drop a deuce/spray",
                            "points":  16
                        },
                        {
                            "text":  "hop on table/eat",
                            "points":  14
                        },
                        {
                            "text":  "meow/cry/purr",
                            "points":  5
                        },
                        {
                            "text":  "behead a mouse",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170392,
        "question":  "Name a kind of doctor that you'd be shocked asked you to take your clothes off.",
        "answers":  [
                        {
                            "text":  "dentist",
                            "points":  38
                        },
                        {
                            "text":  "eye doctor",
                            "points":  19
                        },
                        {
                            "text":  "shrink",
                            "points":  18
                        },
                        {
                            "text":  "foot doctor",
                            "points":  12
                        },
                        {
                            "text":  "veterinarian",
                            "points":  7
                        },
                        {
                            "text":  "ear, nose & throat",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170393,
        "question":  "We asked 100 married men... Fill in the blank: I've lost count of how many times my wife has made fun of my what?",
        "answers":  [
                        {
                            "text":  "feet/body",
                            "points":  38
                        },
                        {
                            "text":  "hair/lack of",
                            "points":  18
                        },
                        {
                            "text":  "duds/celine dion tee",
                            "points":  13
                        },
                        {
                            "text":  "cooking/food",
                            "points":  13
                        },
                        {
                            "text":  "intelligence",
                            "points":  7
                        },
                        {
                            "text":  "sense of humor",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  170394,
        "question":  "We asked 100 single men... I'd be afraid to date a woman whose ex was a what?",
        "answers":  [
                        {
                            "text":  "cop",
                            "points":  35
                        },
                        {
                            "text":  "wrestler/fighter",
                            "points":  18
                        },
                        {
                            "text":  "criminal/killer",
                            "points":  14
                        },
                        {
                            "text":  "body builder",
                            "points":  13
                        },
                        {
                            "text":  "psycho/stalker",
                            "points":  11
                        },
                        {
                            "text":  "navy seal",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170395,
        "question":  "We asked 100 married men... What do you think your wife will do as much of in heaven as she did on Earth?",
        "answers":  [
                        {
                            "text":  "talk/complain",
                            "points":  34
                        },
                        {
                            "text":  "shop/spend",
                            "points":  33
                        },
                        {
                            "text":  "text",
                            "points":  11
                        },
                        {
                            "text":  "love/be caring",
                            "points":  7
                        },
                        {
                            "text":  "sleep",
                            "points":  6
                        },
                        {
                            "text":  "clean",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170396,
        "question":  "Name something specific a dog might like to do to a cat calendar.",
        "answers":  [
                        {
                            "text":  "eat/chew it",
                            "points":  33
                        },
                        {
                            "text":  "pee/poop on it",
                            "points":  27
                        },
                        {
                            "text":  "claw/shred it",
                            "points":  23
                        },
                        {
                            "text":  "bark/growl at it",
                            "points":  9
                        },
                        {
                            "text":  "sniff it",
                            "points":  2
                        },
                        {
                            "text":  "lick it",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170397,
        "question":  "We asked 100 men... Name something you do with your dog that you'd rather do with a woman.",
        "answers":  [
                        {
                            "text":  "hug/cuddle",
                            "points":  31
                        },
                        {
                            "text":  "sleep together",
                            "points":  18
                        },
                        {
                            "text":  "long walk on beach",
                            "points":  18
                        },
                        {
                            "text":  "pet/rub belly",
                            "points":  15
                        },
                        {
                            "text":  "kiss/tongue action",
                            "points":  12
                        },
                        {
                            "text":  "play ball/catch",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170398,
        "question":  "Name something an employee might do if they think they're being underpaid.",
        "answers":  [
                        {
                            "text":  "ask 4 raise/gripe",
                            "points":  28
                        },
                        {
                            "text":  "slack off/work less",
                            "points":  27
                        },
                        {
                            "text":  "steal/a pen",
                            "points":  19
                        },
                        {
                            "text":  "look for job/quit",
                            "points":  16
                        },
                        {
                            "text":  "go on strike",
                            "points":  4
                        },
                        {
                            "text":  "sulk/be annoyed",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170399,
        "question":  "Tell me something a lady moose might find sexy about her mate.",
        "answers":  [
                        {
                            "text":  "antlers/huge rack",
                            "points":  78
                        },
                        {
                            "text":  "pungent scent",
                            "points":  5
                        },
                        {
                            "text":  "exotic face/nose",
                            "points":  4
                        },
                        {
                            "text":  "moose knuckle",
                            "points":  3
                        },
                        {
                            "text":  "so big & strong",
                            "points":  3
                        },
                        {
                            "text":  "long knobby legs",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170400,
        "question":  "If there were a stripper called The Caveman, name a prop he might use in his act.",
        "answers":  [
                        {
                            "text":  "club/stick",
                            "points":  68
                        },
                        {
                            "text":  "pelt/loincloth",
                            "points":  14
                        },
                        {
                            "text":  "big ole bone",
                            "points":  4
                        },
                        {
                            "text":  "stone/stone tool",
                            "points":  4
                        },
                        {
                            "text":  "wild hair/beard",
                            "points":  3
                        },
                        {
                            "text":  "fig leaf",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170401,
        "question":  "We asked 100 married women... It's bad if your husband lost his wedding ring. It's worse if he lost it where?",
        "answers":  [
                        {
                            "text":  "his hussy's bed/home",
                            "points":  59
                        },
                        {
                            "text":  "strip club",
                            "points":  20
                        },
                        {
                            "text":  "hotel/motel",
                            "points":  9
                        },
                        {
                            "text":  "down sink/toilet",
                            "points":  3
                        },
                        {
                            "text":  "bar/gay club",
                            "points":  2
                        },
                        {
                            "text":  "work",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170402,
        "question":  "We asked 100 men... When you really want to have a good time, there's no place like where?",
        "answers":  [
                        {
                            "text":  "home/my waterbed",
                            "points":  57
                        },
                        {
                            "text":  "bar/gay club",
                            "points":  18
                        },
                        {
                            "text":  "strip joint",
                            "points":  8
                        },
                        {
                            "text":  "outdoors/beach",
                            "points":  5
                        },
                        {
                            "text":  "sport event/golf",
                            "points":  4
                        },
                        {
                            "text":  "my broski's house",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170403,
        "question":  "Name something an old stripper might fall off of.",
        "answers":  [
                        {
                            "text":  "pole",
                            "points":  56
                        },
                        {
                            "text":  "stage",
                            "points":  24
                        },
                        {
                            "text":  "chair/stool",
                            "points":  8
                        },
                        {
                            "text":  "table/bar",
                            "points":  3
                        },
                        {
                            "text":  "\"the wagon\"",
                            "points":  2
                        },
                        {
                            "text":  "my lap",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170404,
        "question":  "If a female cop pulls over the man who dumped her, what might she do to him?",
        "answers":  [
                        {
                            "text":  "ticket him",
                            "points":  55
                        },
                        {
                            "text":  "arrest/cuff him",
                            "points":  25
                        },
                        {
                            "text":  "frisk/strip search",
                            "points":  5
                        },
                        {
                            "text":  "scare/make him sweat",
                            "points":  4
                        },
                        {
                            "text":  "let off/warning",
                            "points":  3
                        },
                        {
                            "text":  "shoot him",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170405,
        "question":  "Name something you'd hate to discover has a dead battery when you really need it.",
        "answers":  [
                        {
                            "text":  "car",
                            "points":  53
                        },
                        {
                            "text":  "phone",
                            "points":  26
                        },
                        {
                            "text":  "flashlight",
                            "points":  10
                        },
                        {
                            "text":  "tv remote",
                            "points":  2
                        },
                        {
                            "text":  "camera",
                            "points":  2
                        },
                        {
                            "text":  "vibrator",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170406,
        "question":  "Grandpa discovered grandma was cheating when he found the other guy's what under the bed?",
        "answers":  [
                        {
                            "text":  "duds/compression sock",
                            "points":  49
                        },
                        {
                            "text":  "dentures/cream",
                            "points":  35
                        },
                        {
                            "text":  "wig/toupee",
                            "points":  3
                        },
                        {
                            "text":  "wallet",
                            "points":  3
                        },
                        {
                            "text":  "cane/walker",
                            "points":  3
                        },
                        {
                            "text":  "gently used condom",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170407,
        "question":  "Breaking news: Santa left Mrs. Claus and ran off with a what?",
        "answers":  [
                        {
                            "text":  "elf/hot lady elf",
                            "points":  49
                        },
                        {
                            "text":  "rudolph",
                            "points":  30
                        },
                        {
                            "text":  "hooker/stripper",
                            "points":  8
                        },
                        {
                            "text":  "toy/teddy bear",
                            "points":  3
                        },
                        {
                            "text":  "tooth fairy",
                            "points":  3
                        },
                        {
                            "text":  "frosty",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170408,
        "question":  "Fill in the blank: Remember, when looking for a spouse, good looks are fleeting but ______ is forever.",
        "answers":  [
                        {
                            "text":  "love",
                            "points":  44
                        },
                        {
                            "text":  "personality/humor",
                            "points":  28
                        },
                        {
                            "text":  "character/heart",
                            "points":  14
                        },
                        {
                            "text":  "smart/dumb",
                            "points":  4
                        },
                        {
                            "text":  "money",
                            "points":  3
                        },
                        {
                            "text":  "ugly",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170409,
        "question":  "Name a piece of sporting equipment a wife might use to kill her husband.",
        "answers":  [
                        {
                            "text":  "bat",
                            "points":  44
                        },
                        {
                            "text":  "golf club",
                            "points":  21
                        },
                        {
                            "text":  "weights/dumbbell",
                            "points":  16
                        },
                        {
                            "text":  "hockey stick",
                            "points":  9
                        },
                        {
                            "text":  "hunting rifle/gun",
                            "points":  3
                        },
                        {
                            "text":  "javelin",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170410,
        "question":  "What might grandpa be talking about when he says, \"How do you turn this darn thing on?\"",
        "answers":  [
                        {
                            "text":  "computer",
                            "points":  38
                        },
                        {
                            "text":  "tv",
                            "points":  26
                        },
                        {
                            "text":  "cell phone",
                            "points":  21
                        },
                        {
                            "text":  "grandma",
                            "points":  6
                        },
                        {
                            "text":  "microwave",
                            "points":  2
                        },
                        {
                            "text":  "granny's vibrator",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170411,
        "question":  "We asked 100 married women... What would you do if your husband booked your vacation at a nudist camp?",
        "answers":  [
                        {
                            "text":  "stay home/cancel",
                            "points":  38
                        },
                        {
                            "text":  "scream/cry/mad",
                            "points":  20
                        },
                        {
                            "text":  "divorce him",
                            "points":  13
                        },
                        {
                            "text":  "go!/pack sunscreen",
                            "points":  11
                        },
                        {
                            "text":  "laugh",
                            "points":  8
                        },
                        {
                            "text":  "punch/smack him",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170412,
        "question":  "Name a complaint a vampire might have about his coffin.",
        "answers":  [
                        {
                            "text":  "too small",
                            "points":  36
                        },
                        {
                            "text":  "light/see sun",
                            "points":  31
                        },
                        {
                            "text":  "cold/hot/stuffy",
                            "points":  10
                        },
                        {
                            "text":  "no blood to drink",
                            "points":  7
                        },
                        {
                            "text":  "stinks/like garlic",
                            "points":  6
                        },
                        {
                            "text":  "hard/no cushion",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170413,
        "question":  "Fill in the blank: ______ canal.",
        "answers":  [
                        {
                            "text":  "panama canal",
                            "points":  35
                        },
                        {
                            "text":  "root canal",
                            "points":  22
                        },
                        {
                            "text":  "erie canal",
                            "points":  22
                        },
                        {
                            "text":  "suez canal",
                            "points":  10
                        },
                        {
                            "text":  "ear canal",
                            "points":  4
                        },
                        {
                            "text":  "anal canal",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170414,
        "question":  "Name something rude a ventriloquist might do on a date that he'd blame on his dummy.",
        "answers":  [
                        {
                            "text":  "blow air biscuits",
                            "points":  31
                        },
                        {
                            "text":  "throw shade/cuss out",
                            "points":  26
                        },
                        {
                            "text":  "fondle/kiss",
                            "points":  15
                        },
                        {
                            "text":  "burp",
                            "points":  13
                        },
                        {
                            "text":  "bring the dummy",
                            "points":  6
                        },
                        {
                            "text":  "flirt w/ skanks",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170415,
        "question":  "Name something a doctor would be surprised to see a grown man do when he gave him a shot.",
        "answers":  [
                        {
                            "text":  "cry",
                            "points":  77
                        },
                        {
                            "text":  "scream/squeal",
                            "points":  7
                        },
                        {
                            "text":  "faint",
                            "points":  4
                        },
                        {
                            "text":  "giggle/enjoy it",
                            "points":  2
                        },
                        {
                            "text":  "ask for a lollipop",
                            "points":  2
                        },
                        {
                            "text":  "run out",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170416,
        "question":  "We asked 100 women... What's the most kissable part of you?",
        "answers":  [
                        {
                            "text":  "my luscious lips",
                            "points":  60
                        },
                        {
                            "text":  "my swan neck",
                            "points":  13
                        },
                        {
                            "text":  "my rosy cheeks",
                            "points":  10
                        },
                        {
                            "text":  "my supple breasts",
                            "points":  6
                        },
                        {
                            "text":  "my head/forehead",
                            "points":  3
                        },
                        {
                            "text":  "my bulging belly",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170417,
        "question":  "Name a kind of bottle a wife would be holding.",
        "answers":  [
                        {
                            "text":  "booze/wine bottle",
                            "points":  58
                        },
                        {
                            "text":  "baby bottle",
                            "points":  27
                        },
                        {
                            "text":  "perfume bottle",
                            "points":  3
                        },
                        {
                            "text":  "ketchup bottle",
                            "points":  2
                        },
                        {
                            "text":  "soda bottle",
                            "points":  2
                        },
                        {
                            "text":  "oil/olive oil",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170418,
        "question":  "Name something a doctor in a nudist colony treats a lot of patients for.",
        "answers":  [
                        {
                            "text":  "sunburn",
                            "points":  54
                        },
                        {
                            "text":  "rash/poison ivy",
                            "points":  16
                        },
                        {
                            "text":  "std/the syph",
                            "points":  9
                        },
                        {
                            "text":  "bug bites",
                            "points":  7
                        },
                        {
                            "text":  "cuts/bruises",
                            "points":  5
                        },
                        {
                            "text":  "splinters",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170419,
        "question":  "Fill in the blank: A female elephant tells a male elephant, \"Keep your trunk off my\" what?",
        "answers":  [
                        {
                            "text":  "hot badonk, perv!",
                            "points":  51
                        },
                        {
                            "text":  "swishy li'l tail",
                            "points":  16
                        },
                        {
                            "text":  "trunk",
                            "points":  12
                        },
                        {
                            "text":  "peanuts/food",
                            "points":  11
                        },
                        {
                            "text":  "floppy ears",
                            "points":  2
                        },
                        {
                            "text":  "eye/face",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170420,
        "question":  "Make an animal sound that turns a farmer on.",
        "answers":  [
                        {
                            "text":  "moo",
                            "points":  48
                        },
                        {
                            "text":  "baah",
                            "points":  19
                        },
                        {
                            "text":  "oink/squeal",
                            "points":  16
                        },
                        {
                            "text":  "cock-a-doodle-doo",
                            "points":  7
                        },
                        {
                            "text":  "cluck, cluck",
                            "points":  2
                        },
                        {
                            "text":  "neigh",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170421,
        "question":  "Name a place the worst husband ever might be when his wife is giving birth.",
        "answers":  [
                        {
                            "text":  "bar/nightclub",
                            "points":  48
                        },
                        {
                            "text":  "golf/sports venue",
                            "points":  15
                        },
                        {
                            "text":  "nudie joint",
                            "points":  14
                        },
                        {
                            "text":  "lover's arms/bed",
                            "points":  10
                        },
                        {
                            "text":  "casino/vegas",
                            "points":  4
                        },
                        {
                            "text":  "big bertha's brothel",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170422,
        "question":  "Name something you might see a gardener slow-dancing with.",
        "answers":  [
                        {
                            "text":  "a rake",
                            "points":  45
                        },
                        {
                            "text":  "a hoe",
                            "points":  28
                        },
                        {
                            "text":  "plant/rose bush",
                            "points":  8
                        },
                        {
                            "text":  "garden hose",
                            "points":  6
                        },
                        {
                            "text":  "a shovel",
                            "points":  4
                        },
                        {
                            "text":  "a scarecrow",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170423,
        "question":  "Fill in the blank: Bob got arrested at the supermarket after they saw him put a ______ down his pants.",
        "answers":  [
                        {
                            "text":  "meat/whole chicken",
                            "points":  42
                        },
                        {
                            "text":  "fruit/veggie",
                            "points":  42
                        },
                        {
                            "text":  "beer/booze bottle",
                            "points":  3
                        },
                        {
                            "text":  "candy package",
                            "points":  3
                        },
                        {
                            "text":  "loaf of bread",
                            "points":  2
                        },
                        {
                            "text":  "shirt/clothes",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170424,
        "question":  "We asked 100 married women... Name something you'd never buy your man because he wouldn't look good in it.",
        "answers":  [
                        {
                            "text":  "speedo/bikini",
                            "points":  40
                        },
                        {
                            "text":  "skinny jeans",
                            "points":  20
                        },
                        {
                            "text":  "thong",
                            "points":  20
                        },
                        {
                            "text":  "fitted shirt",
                            "points":  7
                        },
                        {
                            "text":  "turtleneck",
                            "points":  5
                        },
                        {
                            "text":  "fedora/hat",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170425,
        "question":  "Name something a woman wears when she's sexy and she knows it.",
        "answers":  [
                        {
                            "text":  "lingerie/g-string",
                            "points":  34
                        },
                        {
                            "text":  "bikini",
                            "points":  24
                        },
                        {
                            "text":  "skimpy dress/skirt",
                            "points":  15
                        },
                        {
                            "text":  "heels/stilettos",
                            "points":  10
                        },
                        {
                            "text":  "nothing at all",
                            "points":  7
                        },
                        {
                            "text":  "low-cut top",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170426,
        "question":  "Name a reason your secret is safe with grandma.",
        "answers":  [
                        {
                            "text":  "she'll forget it",
                            "points":  33
                        },
                        {
                            "text":  "she's dead",
                            "points":  31
                        },
                        {
                            "text":  "trust/love",
                            "points":  13
                        },
                        {
                            "text":  "she's deaf",
                            "points":  10
                        },
                        {
                            "text":  "i know her secrets",
                            "points":  4
                        },
                        {
                            "text":  "she's a mute",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170427,
        "question":  "If you made your snowman anatomically correct, name a food you'd use for his naughty part.",
        "answers":  [
                        {
                            "text":  "sausage/hot dog",
                            "points":  25
                        },
                        {
                            "text":  "cucumber/pickle",
                            "points":  24
                        },
                        {
                            "text":  "carrot",
                            "points":  16
                        },
                        {
                            "text":  "banana",
                            "points":  14
                        },
                        {
                            "text":  "eggplant",
                            "points":  10
                        },
                        {
                            "text":  "zucchini/squash",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170428,
        "question":  "We asked 100 married women... Tell me something that makes your husband cry.",
        "answers":  [
                        {
                            "text":  "death",
                            "points":  64
                        },
                        {
                            "text":  "movie/the notebook",
                            "points":  10
                        },
                        {
                            "text":  "onions",
                            "points":  7
                        },
                        {
                            "text":  "illness/pain",
                            "points":  6
                        },
                        {
                            "text":  "babies",
                            "points":  3
                        },
                        {
                            "text":  "no coochie :-(",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170429,
        "question":  "Name something you have but your mother thinks you deserve better.",
        "answers":  [
                        {
                            "text":  "mate/sugar mama",
                            "points":  54
                        },
                        {
                            "text":  "job",
                            "points":  23
                        },
                        {
                            "text":  "home",
                            "points":  6
                        },
                        {
                            "text":  "car/pinto",
                            "points":  6
                        },
                        {
                            "text":  "2nd grade education",
                            "points":  2
                        },
                        {
                            "text":  "clothes",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170430,
        "question":  "To bring in some extra money, name something grandma might start selling.",
        "answers":  [
                        {
                            "text":  "food/prune pie",
                            "points":  50
                        },
                        {
                            "text":  "knitting/afghans",
                            "points":  25
                        },
                        {
                            "text":  "jewelry",
                            "points":  6
                        },
                        {
                            "text":  "drugs/meth & ex-lax",
                            "points":  5
                        },
                        {
                            "text":  "old clothes",
                            "points":  4
                        },
                        {
                            "text":  "her hot granny fanny",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170431,
        "question":  "Fill in the blank: You know a party is in full swing when everybody starts ______ing.",
        "answers":  [
                        {
                            "text":  "dancing/macarena",
                            "points":  45
                        },
                        {
                            "text":  "singing/peabo bryson",
                            "points":  16
                        },
                        {
                            "text":  "laughing",
                            "points":  9
                        },
                        {
                            "text":  "talking/yelling",
                            "points":  9
                        },
                        {
                            "text":  "drinking",
                            "points":  8
                        },
                        {
                            "text":  "stripping",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  170432,
        "question":  "Name something of yours that has an expiration date.",
        "answers":  [
                        {
                            "text":  "food/milk",
                            "points":  43
                        },
                        {
                            "text":  "driver's license",
                            "points":  15
                        },
                        {
                            "text":  "my body/life",
                            "points":  12
                        },
                        {
                            "text":  "medicine",
                            "points":  12
                        },
                        {
                            "text":  "debit/credit card",
                            "points":  9
                        },
                        {
                            "text":  "makeup",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170433,
        "question":  "A person might explode with what?",
        "answers":  [
                        {
                            "text":  "anger/rage",
                            "points":  40
                        },
                        {
                            "text":  "laughter/happiness",
                            "points":  35
                        },
                        {
                            "text":  "gas/farts",
                            "points":  8
                        },
                        {
                            "text":  "excitement",
                            "points":  4
                        },
                        {
                            "text":  "diarrhea",
                            "points":  3
                        },
                        {
                            "text":  "tnt/bomb",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170434,
        "question":  "At the cannibal's family Thanksgiving dinner, name a part everyone fights over.",
        "answers":  [
                        {
                            "text":  "leg/thigh",
                            "points":  62
                        },
                        {
                            "text":  "breast",
                            "points":  12
                        },
                        {
                            "text":  "rump",
                            "points":  6
                        },
                        {
                            "text":  "liver",
                            "points":  5
                        },
                        {
                            "text":  "heart",
                            "points":  4
                        },
                        {
                            "text":  "brain",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170435,
        "question":  "Name a reason it would be great to have Steve Harvey as your father.",
        "answers":  [
                        {
                            "text":  "rich/allowance",
                            "points":  58
                        },
                        {
                            "text":  "he's funny",
                            "points":  25
                        },
                        {
                            "text":  "celeb pals/denzel",
                            "points":  3
                        },
                        {
                            "text":  "free tickets/to feud",
                            "points":  2
                        },
                        {
                            "text":  "great vacays",
                            "points":  2
                        },
                        {
                            "text":  "advice/guidance",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170436,
        "question":  "Name something a wife should buy for herself when her husband forgets her birthday so he'll never forget again.",
        "answers":  [
                        {
                            "text":  "jewelry",
                            "points":  52
                        },
                        {
                            "text":  "car/bentley",
                            "points":  19
                        },
                        {
                            "text":  "clothes/louboutins",
                            "points":  10
                        },
                        {
                            "text":  "flowers/roses",
                            "points":  5
                        },
                        {
                            "text":  "dinner/cake",
                            "points":  4
                        },
                        {
                            "text":  "epic love wand",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170437,
        "question":  "Patty divorced her husband after she caught him with her what?",
        "answers":  [
                        {
                            "text":  "best friend",
                            "points":  48
                        },
                        {
                            "text":  "sister",
                            "points":  29
                        },
                        {
                            "text":  "clothes/panties",
                            "points":  6
                        },
                        {
                            "text":  "money/paycheck",
                            "points":  3
                        },
                        {
                            "text":  "mom",
                            "points":  3
                        },
                        {
                            "text":  "pet/goat",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170438,
        "question":  "A dog might think, \"If they leave me alone again, I'm going to chew up their\" what?",
        "answers":  [
                        {
                            "text":  "shoes/clothes",
                            "points":  45
                        },
                        {
                            "text":  "furniture/pillows",
                            "points":  38
                        },
                        {
                            "text":  "remote",
                            "points":  3
                        },
                        {
                            "text":  "body/throat",
                            "points":  2
                        },
                        {
                            "text":  "plants/yard",
                            "points":  2
                        },
                        {
                            "text":  "keys",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170439,
        "question":  "Name a sexy fabric that makes a good stripper name.",
        "answers":  [
                        {
                            "text":  "silk/silky",
                            "points":  32
                        },
                        {
                            "text":  "satin",
                            "points":  26
                        },
                        {
                            "text":  "lace/lacy",
                            "points":  17
                        },
                        {
                            "text":  "velvet",
                            "points":  12
                        },
                        {
                            "text":  "cashmere",
                            "points":  3
                        },
                        {
                            "text":  "polly esther",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170440,
        "question":  "We asked 100 men... Name something you'd be embarrassed that your grandma could do better than you.",
        "answers":  [
                        {
                            "text":  "bench press/exercise",
                            "points":  26
                        },
                        {
                            "text":  "sex/pet the kitty",
                            "points":  20
                        },
                        {
                            "text":  "sports/hoops",
                            "points":  19
                        },
                        {
                            "text":  "drive",
                            "points":  16
                        },
                        {
                            "text":  "drink/pound shots",
                            "points":  6
                        },
                        {
                            "text":  "cook/dessert",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170441,
        "question":  "Name something grandma has in her purse in case a man hits on her at the bingo parlor.",
        "answers":  [
                        {
                            "text":  "mace/weapon",
                            "points":  65
                        },
                        {
                            "text":  "mints/gum",
                            "points":  9
                        },
                        {
                            "text":  "lipstick/makeup",
                            "points":  6
                        },
                        {
                            "text":  "condom/piece fleece",
                            "points":  5
                        },
                        {
                            "text":  "pic of gramps/fam",
                            "points":  4
                        },
                        {
                            "text":  "bible/book",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170442,
        "question":  "If you got to spend a day with Steve Harvey, what would you look forward to doing?",
        "answers":  [
                        {
                            "text":  "talk/joke/laugh",
                            "points":  58
                        },
                        {
                            "text":  "be on feud/shows",
                            "points":  20
                        },
                        {
                            "text":  "eat/\"bah-bee-cue\"",
                            "points":  6
                        },
                        {
                            "text":  "dance/twerk",
                            "points":  3
                        },
                        {
                            "text":  "drinkin'/nightcap",
                            "points":  2
                        },
                        {
                            "text":  "leaving!",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170443,
        "question":  "At the Academy Awards, an actress yelled, \"Someone stole my\" what?",
        "answers":  [
                        {
                            "text":  "award/oscar",
                            "points":  45
                        },
                        {
                            "text":  "purse/money",
                            "points":  22
                        },
                        {
                            "text":  "dress/shoes/duds",
                            "points":  7
                        },
                        {
                            "text":  "seat",
                            "points":  7
                        },
                        {
                            "text":  "diamonds/jewelry",
                            "points":  5
                        },
                        {
                            "text":  "line/speech",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170444,
        "question":  "Name something that gets called off.",
        "answers":  [
                        {
                            "text":  "wedding/engagement",
                            "points":  39
                        },
                        {
                            "text":  "sporting event",
                            "points":  37
                        },
                        {
                            "text":  "party",
                            "points":  5
                        },
                        {
                            "text":  "work",
                            "points":  4
                        },
                        {
                            "text":  "school",
                            "points":  3
                        },
                        {
                            "text":  "a date",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170445,
        "question":  "We asked 100 married men... Name something your wife thinks she does really well but she doesn't.",
        "answers":  [
                        {
                            "text":  "cooks",
                            "points":  38
                        },
                        {
                            "text":  "cleans house",
                            "points":  22
                        },
                        {
                            "text":  "dances",
                            "points":  9
                        },
                        {
                            "text":  "saves money",
                            "points":  8
                        },
                        {
                            "text":  "laundry/folds",
                            "points":  7
                        },
                        {
                            "text":  "sings",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  170446,
        "question":  "Name something a dog sees outside and thinks, \"You're lucky I'm not out there.\"",
        "answers":  [
                        {
                            "text":  "cat",
                            "points":  35
                        },
                        {
                            "text":  "squirrel",
                            "points":  24
                        },
                        {
                            "text":  "person/mailman",
                            "points":  14
                        },
                        {
                            "text":  "dog/sexy shih tzu",
                            "points":  11
                        },
                        {
                            "text":  "rabbit",
                            "points":  4
                        },
                        {
                            "text":  "bird",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170447,
        "question":  "We asked 100 married women... Tell me a reason your husband probably wouldn't get much work as a fashion model.",
        "answers":  [
                        {
                            "text":  "he's a fat cow",
                            "points":  24
                        },
                        {
                            "text":  "no fashion sense",
                            "points":  22
                        },
                        {
                            "text":  "he's 4'7\"",
                            "points":  16
                        },
                        {
                            "text":  "he's a hairy ape",
                            "points":  12
                        },
                        {
                            "text":  "skinny & buttless",
                            "points":  9
                        },
                        {
                            "text":  "old/almost dead",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  170448,
        "question":  "Name an excuse a man gives his wife for coming home late that she doesn't buy.",
        "answers":  [
                        {
                            "text":  "work/meeting",
                            "points":  60
                        },
                        {
                            "text":  "stuck in traffic",
                            "points":  11
                        },
                        {
                            "text":  "car trouble/flat",
                            "points":  7
                        },
                        {
                            "text":  "out with buds/beer",
                            "points":  7
                        },
                        {
                            "text":  "shopping/for you",
                            "points":  3
                        },
                        {
                            "text":  "got lost",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170449,
        "question":  "Name a reason a man won't take his shirt off in public.",
        "answers":  [
                        {
                            "text":  "porky/d-cup moobs",
                            "points":  56
                        },
                        {
                            "text":  "shy/embarrassed",
                            "points":  13
                        },
                        {
                            "text":  "furry chest/back",
                            "points":  8
                        },
                        {
                            "text":  "pale/burns easily",
                            "points":  7
                        },
                        {
                            "text":  "has scars",
                            "points":  3
                        },
                        {
                            "text":  "laws/rules",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170450,
        "question":  "We asked 100 men... Name a fruit a doctor might use to show you how he'll be doing your vasectomy.",
        "answers":  [
                        {
                            "text":  "banana",
                            "points":  46
                        },
                        {
                            "text":  "cucumber",
                            "points":  16
                        },
                        {
                            "text":  "grapes",
                            "points":  10
                        },
                        {
                            "text":  "plums",
                            "points":  7
                        },
                        {
                            "text":  "apples",
                            "points":  6
                        },
                        {
                            "text":  "oranges",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170451,
        "question":  "Name something in your doctor's office that's been touched by a lot of sick people.",
        "answers":  [
                        {
                            "text":  "door/knob",
                            "points":  43
                        },
                        {
                            "text":  "mag/herpes weekly",
                            "points":  17
                        },
                        {
                            "text":  "chair",
                            "points":  17
                        },
                        {
                            "text":  "sign-in desk/sheet",
                            "points":  5
                        },
                        {
                            "text":  "pen",
                            "points":  5
                        },
                        {
                            "text":  "stethoscope",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170452,
        "question":  "If kids ran the world, what would be the first thing they'd get rid of?",
        "answers":  [
                        {
                            "text":  "school",
                            "points":  43
                        },
                        {
                            "text":  "rules/bedtime",
                            "points":  16
                        },
                        {
                            "text":  "veggies/gross food",
                            "points":  15
                        },
                        {
                            "text":  "parents",
                            "points":  9
                        },
                        {
                            "text":  "work/jobs",
                            "points":  4
                        },
                        {
                            "text":  "bullies/hate",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170453,
        "question":  "Name something in a kitchen someone might use to murder the Pillsbury Doughboy.",
        "answers":  [
                        {
                            "text":  "knife/cleaver",
                            "points":  42
                        },
                        {
                            "text":  "rolling pin",
                            "points":  30
                        },
                        {
                            "text":  "mixer/blender",
                            "points":  8
                        },
                        {
                            "text":  "oven/stove",
                            "points":  6
                        },
                        {
                            "text":  "fork",
                            "points":  2
                        },
                        {
                            "text":  "frying pan",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170454,
        "question":  "Your adult son moved in five years ago. How do you get rid of him?",
        "answers":  [
                        {
                            "text":  "\"get out\"/change lock",
                            "points":  37
                        },
                        {
                            "text":  "charge him/rent",
                            "points":  20
                        },
                        {
                            "text":  "move/sell house",
                            "points":  13
                        },
                        {
                            "text":  "don't feed him",
                            "points":  12
                        },
                        {
                            "text":  "find him a mate",
                            "points":  4
                        },
                        {
                            "text":  "cut cable/internet",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170455,
        "question":  "We asked 100 men... Name a sign your girlfriend's parents do not like you.",
        "answers":  [
                        {
                            "text":  "won't talk to me",
                            "points":  30
                        },
                        {
                            "text":  "i can't come over",
                            "points":  25
                        },
                        {
                            "text":  "dirty looks",
                            "points":  23
                        },
                        {
                            "text":  "criticize/say so",
                            "points":  5
                        },
                        {
                            "text":  "call wrong name",
                            "points":  5
                        },
                        {
                            "text":  "pretend not home",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170456,
        "question":  "Tell me a mean name Kermit might call Miss Piggy when they're having a fight.",
        "answers":  [
                        {
                            "text":  "fatty",
                            "points":  30
                        },
                        {
                            "text":  "hog/pig/swine",
                            "points":  21
                        },
                        {
                            "text":  "pork/porky",
                            "points":  19
                        },
                        {
                            "text":  "bacon/bacon bits",
                            "points":  13
                        },
                        {
                            "text":  "ham/hambone",
                            "points":  4
                        },
                        {
                            "text":  "oinker",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170457,
        "question":  "It would be rude for a man to end a relationship by writing \"It's over\" on a woman's what?",
        "answers":  [
                        {
                            "text":  "car/windshield",
                            "points":  29
                        },
                        {
                            "text":  "body/forehead",
                            "points":  23
                        },
                        {
                            "text":  "facebook/website",
                            "points":  15
                        },
                        {
                            "text":  "mirror",
                            "points":  13
                        },
                        {
                            "text":  "phone/text",
                            "points":  6
                        },
                        {
                            "text":  "door/house/wall",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170458,
        "question":  "Name something a flight attendant might throw at a rude passenger on her last day of work.",
        "answers":  [
                        {
                            "text":  "hot coffee/drink",
                            "points":  52
                        },
                        {
                            "text":  "peanuts/food",
                            "points":  25
                        },
                        {
                            "text":  "pillow",
                            "points":  5
                        },
                        {
                            "text":  "dishes/a glass",
                            "points":  3
                        },
                        {
                            "text":  "tantrum/cuss word",
                            "points":  2
                        },
                        {
                            "text":  "seat belt",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170459,
        "question":  "Mickey Mouse and Minnie Mouse knew they were soul mates because they both what?",
        "answers":  [
                        {
                            "text":  "are mice",
                            "points":  50
                        },
                        {
                            "text":  "like cheese",
                            "points":  10
                        },
                        {
                            "text":  "talk/squeaky voices",
                            "points":  10
                        },
                        {
                            "text":  "have big ears",
                            "points":  10
                        },
                        {
                            "text":  "love each other",
                            "points":  6
                        },
                        {
                            "text":  "can dance",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170460,
        "question":  "Name someone rich people try to bribe to get special treatment.",
        "answers":  [
                        {
                            "text":  "politician/gov't",
                            "points":  23
                        },
                        {
                            "text":  "restaurant staff",
                            "points":  20
                        },
                        {
                            "text":  "college/teacher",
                            "points":  16
                        },
                        {
                            "text":  "police",
                            "points":  15
                        },
                        {
                            "text":  "judge",
                            "points":  12
                        },
                        {
                            "text":  "banker",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170461,
        "question":  "Tell me something specific that Miss Piggy probably finds sexy about Kermit.",
        "answers":  [
                        {
                            "text":  "hot shade of green",
                            "points":  21
                        },
                        {
                            "text":  "voice/ribbit",
                            "points":  20
                        },
                        {
                            "text":  "dem legs/dat bod",
                            "points":  19
                        },
                        {
                            "text":  "dreamy eyes",
                            "points":  15
                        },
                        {
                            "text":  "long tongue/mouth",
                            "points":  11
                        },
                        {
                            "text":  "personality",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170462,
        "question":  "If you could go back to being a baby for a day, name something you'd enjoy doing most.",
        "answers":  [
                        {
                            "text":  "sleeping/naps",
                            "points":  60
                        },
                        {
                            "text":  "cuddled/carried",
                            "points":  9
                        },
                        {
                            "text":  "suckling/eating",
                            "points":  9
                        },
                        {
                            "text":  "pee/poo on myself",
                            "points":  4
                        },
                        {
                            "text":  "playing",
                            "points":  3
                        },
                        {
                            "text":  "rocking/swinging",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170463,
        "question":  "Name something grandma has that tells you she was once a girl gone wild.",
        "answers":  [
                        {
                            "text":  "tatt/tramp stamp",
                            "points":  58
                        },
                        {
                            "text":  "sexy duds/8\" heels",
                            "points":  15
                        },
                        {
                            "text":  "pics/nudes",
                            "points":  6
                        },
                        {
                            "text":  "mardi gras beads",
                            "points":  4
                        },
                        {
                            "text":  "sex toy/whip",
                            "points":  3
                        },
                        {
                            "text":  "a bong",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170464,
        "question":  "Fill in the blank: A chicken might say, \"If you like wings, a ______ has bigger ones than I do.\"",
        "answers":  [
                        {
                            "text":  "turkey",
                            "points":  58
                        },
                        {
                            "text":  "eagle",
                            "points":  7
                        },
                        {
                            "text":  "airplane",
                            "points":  7
                        },
                        {
                            "text":  "ostrich",
                            "points":  6
                        },
                        {
                            "text":  "hawk",
                            "points":  5
                        },
                        {
                            "text":  "duck",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170465,
        "question":  "We asked 100 men... Name something specific you put on when you want to feel sexy.",
        "answers":  [
                        {
                            "text":  "cologne",
                            "points":  47
                        },
                        {
                            "text":  "giraffe thong",
                            "points":  16
                        },
                        {
                            "text":  "robe",
                            "points":  11
                        },
                        {
                            "text":  "speedo",
                            "points":  5
                        },
                        {
                            "text":  "music",
                            "points":  5
                        },
                        {
                            "text":  "tight/sexy shirt",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170466,
        "question":  "Name the occupation of someone who, if they say \"Don't panic,\" you start to panic.",
        "answers":  [
                        {
                            "text":  "doctor/dentist",
                            "points":  27
                        },
                        {
                            "text":  "pilot/flight crew",
                            "points":  23
                        },
                        {
                            "text":  "firefighter",
                            "points":  16
                        },
                        {
                            "text":  "cop",
                            "points":  15
                        },
                        {
                            "text":  "emt/medic",
                            "points":  5
                        },
                        {
                            "text":  "plumber",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170467,
        "question":  "A family is a lot like a box of assorted chocolates because some are what?",
        "answers":  [
                        {
                            "text":  "nuts",
                            "points":  63
                        },
                        {
                            "text":  "different",
                            "points":  9
                        },
                        {
                            "text":  "sweet",
                            "points":  7
                        },
                        {
                            "text":  "dark",
                            "points":  3
                        },
                        {
                            "text":  "gross/rotten",
                            "points":  3
                        },
                        {
                            "text":  "good",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170468,
        "question":  "Name something the church could get that might suddenly make a man want to attend.",
        "answers":  [
                        {
                            "text":  "babes/stripper choir",
                            "points":  55
                        },
                        {
                            "text":  "free food/wings",
                            "points":  8
                        },
                        {
                            "text":  "beer/open bar",
                            "points":  8
                        },
                        {
                            "text":  "tv/nfl package",
                            "points":  7
                        },
                        {
                            "text":  "new/good pastor",
                            "points":  5
                        },
                        {
                            "text":  "new tunes/trap music",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170469,
        "question":  "When you're finally in heaven, name something you can stop worrying about.",
        "answers":  [
                        {
                            "text":  "money/bills",
                            "points":  34
                        },
                        {
                            "text":  "going to heaven/hell",
                            "points":  14
                        },
                        {
                            "text":  "weight/kale diet",
                            "points":  12
                        },
                        {
                            "text":  "health",
                            "points":  10
                        },
                        {
                            "text":  "my kid/family",
                            "points":  9
                        },
                        {
                            "text":  "aging/dying",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  170470,
        "question":  "Adult kids are sick of their parents asking, \"When are you going to\" what?",
        "answers":  [
                        {
                            "text":  "get hitched",
                            "points":  20
                        },
                        {
                            "text":  "pop some spawn",
                            "points":  18
                        },
                        {
                            "text":  "clean/your room",
                            "points":  17
                        },
                        {
                            "text":  "move the hell out",
                            "points":  14
                        },
                        {
                            "text":  "grow up",
                            "points":  11
                        },
                        {
                            "text":  "get a job",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  170471,
        "question":  "We asked 100 women... Name a way you'd describe a Thanksgiving turkey and your lover.",
        "answers":  [
                        {
                            "text":  "juicy",
                            "points":  19
                        },
                        {
                            "text":  "hot",
                            "points":  19
                        },
                        {
                            "text":  "delicious/tasty",
                            "points":  18
                        },
                        {
                            "text":  "tender",
                            "points":  12
                        },
                        {
                            "text":  "stuffed",
                            "points":  10
                        },
                        {
                            "text":  "plump/chubby/big",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  170472,
        "question":  "We asked 100 men... Name something you have more of than Steve Harvey.",
        "answers":  [
                        {
                            "text":  "hair/blonde hair",
                            "points":  70
                        },
                        {
                            "text":  "personality/humor",
                            "points":  6
                        },
                        {
                            "text":  "children",
                            "points":  3
                        },
                        {
                            "text":  "friends",
                            "points":  3
                        },
                        {
                            "text":  "debt",
                            "points":  2
                        },
                        {
                            "text":  "height",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170473,
        "question":  "We asked 100 men... Fill in the blank: My specialty is making women ______.",
        "answers":  [
                        {
                            "text":  "happy/laugh",
                            "points":  55
                        },
                        {
                            "text":  "safe/comfy",
                            "points":  9
                        },
                        {
                            "text":  "annoyed/crazy",
                            "points":  9
                        },
                        {
                            "text":  "cry",
                            "points":  6
                        },
                        {
                            "text":  "cringe/disgusted",
                            "points":  4
                        },
                        {
                            "text":  "run away/leave",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170474,
        "question":  "We asked 100 men... If you were dating a stripper, what might you tell your parents she did for a living?",
        "answers":  [
                        {
                            "text":  "pro dancer/ballet",
                            "points":  51
                        },
                        {
                            "text":  "waitress",
                            "points":  14
                        },
                        {
                            "text":  "model",
                            "points":  11
                        },
                        {
                            "text":  "stripper",
                            "points":  4
                        },
                        {
                            "text":  "actress/tony winner",
                            "points":  3
                        },
                        {
                            "text":  "bartender",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170475,
        "question":  "What's something that could kill you with one bite?",
        "answers":  [
                        {
                            "text":  "snake/asp",
                            "points":  47
                        },
                        {
                            "text":  "shark",
                            "points":  20
                        },
                        {
                            "text":  "lion",
                            "points":  6
                        },
                        {
                            "text":  "spider/black widow",
                            "points":  5
                        },
                        {
                            "text":  "alligator/croc",
                            "points":  4
                        },
                        {
                            "text":  "poison/arsenic",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170476,
        "question":  "Name something a man asks a woman that starts with \"What's your...\"",
        "answers":  [
                        {
                            "text":  "name?",
                            "points":  47
                        },
                        {
                            "text":  "phone number?",
                            "points":  14
                        },
                        {
                            "text":  "sign?",
                            "points":  11
                        },
                        {
                            "text":  "bra size?",
                            "points":  6
                        },
                        {
                            "text":  "problem?",
                            "points":  4
                        },
                        {
                            "text":  "occupation?",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170477,
        "question":  "Name something a man might juggle.",
        "answers":  [
                        {
                            "text":  "balls",
                            "points":  39
                        },
                        {
                            "text":  "women/dates",
                            "points":  22
                        },
                        {
                            "text":  "work/jobs",
                            "points":  10
                        },
                        {
                            "text":  "fruit/oranges",
                            "points":  7
                        },
                        {
                            "text":  "cans/beer",
                            "points":  4
                        },
                        {
                            "text":  "bowling pins",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170478,
        "question":  "We asked 100 women... Name a kind of glass you can fit one of your breasts into.",
        "answers":  [
                        {
                            "text":  "wine glass/goblet",
                            "points":  25
                        },
                        {
                            "text":  "bowl/soup cup",
                            "points":  19
                        },
                        {
                            "text":  "coffee/tea cup",
                            "points":  14
                        },
                        {
                            "text":  "beer/pint glass",
                            "points":  12
                        },
                        {
                            "text":  "shot glass",
                            "points":  9
                        },
                        {
                            "text":  "margarita glass",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  170479,
        "question":  "We asked 100 women... Superman's got the power, but name a reason Batman is sexier.",
        "answers":  [
                        {
                            "text":  "kinky batsuit/mask",
                            "points":  23
                        },
                        {
                            "text":  "batmobile",
                            "points":  20
                        },
                        {
                            "text":  "mysterious/dark",
                            "points":  18
                        },
                        {
                            "text":  "he's rich",
                            "points":  16
                        },
                        {
                            "text":  "that raspy voice",
                            "points":  5
                        },
                        {
                            "text":  "hot bod",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170480,
        "question":  "Name something that might be missing at a really cheap circus.",
        "answers":  [
                        {
                            "text":  "animals",
                            "points":  57
                        },
                        {
                            "text":  "clowns",
                            "points":  11
                        },
                        {
                            "text":  "a tent",
                            "points":  6
                        },
                        {
                            "text":  "cotton candy/food",
                            "points":  5
                        },
                        {
                            "text":  "acrobats",
                            "points":  3
                        },
                        {
                            "text":  "ringmaster",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170481,
        "question":  "Name something in a bar that might be flat.",
        "answers":  [
                        {
                            "text":  "beer",
                            "points":  52
                        },
                        {
                            "text":  "table/bar counter",
                            "points":  14
                        },
                        {
                            "text":  "soda",
                            "points":  7
                        },
                        {
                            "text":  "barstool",
                            "points":  5
                        },
                        {
                            "text":  "the chicks",
                            "points":  4
                        },
                        {
                            "text":  "coasters",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170482,
        "question":  "Fill in the blank: I'd love to get my hands on Steve Harvey's what?",
        "answers":  [
                        {
                            "text":  "money",
                            "points":  47
                        },
                        {
                            "text":  "slick bald head",
                            "points":  17
                        },
                        {
                            "text":  "clothes/hat",
                            "points":  6
                        },
                        {
                            "text":  "lady-ticklin' stache",
                            "points":  6
                        },
                        {
                            "text":  "neck/throat",
                            "points":  5
                        },
                        {
                            "text":  "hands",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170483,
        "question":  "Name a reason you might not invite your boss over for dinner.",
        "answers":  [
                        {
                            "text":  "hate their guts",
                            "points":  41
                        },
                        {
                            "text":  "tiny dumpy house",
                            "points":  22
                        },
                        {
                            "text":  "i can't cook",
                            "points":  10
                        },
                        {
                            "text":  "work-life boundary",
                            "points":  5
                        },
                        {
                            "text":  "hits on my mate",
                            "points":  4
                        },
                        {
                            "text":  "my 8 dogs/6 cats",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170484,
        "question":  "Name something that might land on the floor when a stripper's upside down on the pole.",
        "answers":  [
                        {
                            "text":  "money/tips",
                            "points":  38
                        },
                        {
                            "text":  "hair/wig",
                            "points":  16
                        },
                        {
                            "text":  "outfit/heels",
                            "points":  15
                        },
                        {
                            "text":  "massive knockers",
                            "points":  7
                        },
                        {
                            "text":  "jewelry",
                            "points":  5
                        },
                        {
                            "text":  "jacked/false teeth",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170485,
        "question":  "Men don't cry much. But when they do, it's probably where?",
        "answers":  [
                        {
                            "text":  "funeral/grave",
                            "points":  31
                        },
                        {
                            "text":  "home/bathroom",
                            "points":  31
                        },
                        {
                            "text":  "movies/plays",
                            "points":  8
                        },
                        {
                            "text":  "sports/game",
                            "points":  6
                        },
                        {
                            "text":  "hospital/birth",
                            "points":  5
                        },
                        {
                            "text":  "wedding/theirs",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170486,
        "question":  "Name someone to whom it would be inappropriate to give the gift of underwear.",
        "answers":  [
                        {
                            "text":  "boss/coworker",
                            "points":  29
                        },
                        {
                            "text":  "parent",
                            "points":  23
                        },
                        {
                            "text":  "teacher",
                            "points":  10
                        },
                        {
                            "text":  "in-law",
                            "points":  9
                        },
                        {
                            "text":  "grandma",
                            "points":  8
                        },
                        {
                            "text":  "clergy/nun",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  170487,
        "question":  "Name something a sexy cowgirl has that might be made out of leather.",
        "answers":  [
                        {
                            "text":  "chaps",
                            "points":  28
                        },
                        {
                            "text":  "boots",
                            "points":  20
                        },
                        {
                            "text":  "bra",
                            "points":  11
                        },
                        {
                            "text":  "pants",
                            "points":  9
                        },
                        {
                            "text":  "panties/thong",
                            "points":  9
                        },
                        {
                            "text":  "whip",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  170488,
        "question":  "We asked 100 women... Name something you'd like to do to Steve Harvey while he's sleeping.",
        "answers":  [
                        {
                            "text":  "shave stache/head",
                            "points":  23
                        },
                        {
                            "text":  "tickle/with feather",
                            "points":  19
                        },
                        {
                            "text":  "draw on him",
                            "points":  17
                        },
                        {
                            "text":  "kiss/each breast",
                            "points":  15
                        },
                        {
                            "text":  "poke him",
                            "points":  6
                        },
                        {
                            "text":  "rub his head",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170489,
        "question":  "We asked 100 married men... I wish my wife's bottom looked like whose?",
        "answers":  [
                        {
                            "text":  "jennifer lopez's",
                            "points":  22
                        },
                        {
                            "text":  "beyonce's",
                            "points":  16
                        },
                        {
                            "text":  "jennifer aniston's",
                            "points":  15
                        },
                        {
                            "text":  "michelle obama's",
                            "points":  11
                        },
                        {
                            "text":  "her own/at age 19",
                            "points":  11
                        },
                        {
                            "text":  "kim kardashian's",
                            "points":  10
                        }
                    ]
    },
    {
        "id":  170490,
        "question":  "Name a way a woman might say her man is like her favorite pair of shoes.",
        "answers":  [
                        {
                            "text":  "comfy fit/broken in",
                            "points":  64
                        },
                        {
                            "text":  "sexy/looks good",
                            "points":  6
                        },
                        {
                            "text":  "old & worn-out",
                            "points":  5
                        },
                        {
                            "text":  "tight",
                            "points":  5
                        },
                        {
                            "text":  "clean",
                            "points":  2
                        },
                        {
                            "text":  "walk all over him",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170491,
        "question":  "Name something people like to drink that starts with the letter M.",
        "answers":  [
                        {
                            "text":  "milk",
                            "points":  48
                        },
                        {
                            "text":  "margarita",
                            "points":  11
                        },
                        {
                            "text":  "milkshake",
                            "points":  9
                        },
                        {
                            "text":  "mountain dew",
                            "points":  6
                        },
                        {
                            "text":  "martini",
                            "points":  6
                        },
                        {
                            "text":  "mojito",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170492,
        "question":  "Name a place where a man could lose his shirt.",
        "answers":  [
                        {
                            "text":  "casino/poker game",
                            "points":  43
                        },
                        {
                            "text":  "beach/fiji",
                            "points":  22
                        },
                        {
                            "text":  "gym/locker room",
                            "points":  7
                        },
                        {
                            "text":  "home/bedroom",
                            "points":  5
                        },
                        {
                            "text":  "a pool",
                            "points":  4
                        },
                        {
                            "text":  "a fight/wrestling",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170493,
        "question":  "We asked 100 men... Name something you suspect your woman just pretends to like, but that's okay with you.",
        "answers":  [
                        {
                            "text":  "sports/the cubs",
                            "points":  35
                        },
                        {
                            "text":  "sex/with just me",
                            "points":  24
                        },
                        {
                            "text":  "my humor",
                            "points":  12
                        },
                        {
                            "text":  "video games",
                            "points":  5
                        },
                        {
                            "text":  "my odd bod",
                            "points":  5
                        },
                        {
                            "text":  "my looks/beard",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170494,
        "question":  "Name a specific place in the car where a pothead hides his weed.",
        "answers":  [
                        {
                            "text":  "under/in seat",
                            "points":  33
                        },
                        {
                            "text":  "glove compartment",
                            "points":  16
                        },
                        {
                            "text":  "tire/wheel well",
                            "points":  12
                        },
                        {
                            "text":  "trunk",
                            "points":  9
                        },
                        {
                            "text":  "console/cup holder",
                            "points":  9
                        },
                        {
                            "text":  "under carpet/mat",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170495,
        "question":  "Name something a billionaire has that might be as big as your house.",
        "answers":  [
                        {
                            "text":  "boat/yacht",
                            "points":  30
                        },
                        {
                            "text":  "swimming pool",
                            "points":  16
                        },
                        {
                            "text":  "garage",
                            "points":  13
                        },
                        {
                            "text":  "bathroom",
                            "points":  10
                        },
                        {
                            "text":  "bank vault/money",
                            "points":  9
                        },
                        {
                            "text":  "an ego",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  170496,
        "question":  "Name the worst place to be at midnight on New Year's Eve.",
        "answers":  [
                        {
                            "text":  "jail",
                            "points":  29
                        },
                        {
                            "text":  "times square/nyc",
                            "points":  22
                        },
                        {
                            "text":  "home/in bed",
                            "points":  17
                        },
                        {
                            "text":  "bathroom/puking",
                            "points":  9
                        },
                        {
                            "text":  "freeway/traffic",
                            "points":  4
                        },
                        {
                            "text":  "hospital",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170497,
        "question":  "Name a souvenir a woman might bring home from a male strip show.",
        "answers":  [
                        {
                            "text":  "thong/jock",
                            "points":  55
                        },
                        {
                            "text":  "bow tie/tie",
                            "points":  8
                        },
                        {
                            "text":  "his ripped shirt",
                            "points":  6
                        },
                        {
                            "text":  "sexy pics",
                            "points":  6
                        },
                        {
                            "text":  "mug/shot glass",
                            "points":  5
                        },
                        {
                            "text":  "the stripper!",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170498,
        "question":  "You've got 24 hours to live. What's on your to-do list?",
        "answers":  [
                        {
                            "text":  "see/call loved ones",
                            "points":  36
                        },
                        {
                            "text":  "eat",
                            "points":  14
                        },
                        {
                            "text":  "amusement park",
                            "points":  12
                        },
                        {
                            "text":  "sex/delightful orgy",
                            "points":  9
                        },
                        {
                            "text":  "pray/spread gospel",
                            "points":  7
                        },
                        {
                            "text":  "skydive",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170499,
        "question":  "Name something a wife might fantasize about pushing her husband off of.",
        "answers":  [
                        {
                            "text":  "cliff/mt. everest",
                            "points":  51
                        },
                        {
                            "text":  "the bed",
                            "points":  10
                        },
                        {
                            "text":  "bridge",
                            "points":  7
                        },
                        {
                            "text":  "diving board/pool",
                            "points":  6
                        },
                        {
                            "text":  "the couch",
                            "points":  5
                        },
                        {
                            "text":  "his \"high horse\"",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170500,
        "question":  "Name something specific a man does that makes a woman think a marriage proposal is in her future.",
        "answers":  [
                        {
                            "text":  "buys ring/\"size?\"",
                            "points":  41
                        },
                        {
                            "text":  "talks about future",
                            "points":  13
                        },
                        {
                            "text":  "says \"i love you\"",
                            "points":  11
                        },
                        {
                            "text":  "she/he meets folks",
                            "points":  9
                        },
                        {
                            "text":  "dinner/at red lobster",
                            "points":  5
                        },
                        {
                            "text":  "gets on one knee",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170501,
        "question":  "Name a bad habit that could get you kicked out of your carpool.",
        "answers":  [
                        {
                            "text":  "smoking",
                            "points":  34
                        },
                        {
                            "text":  "blowin' brown clouds",
                            "points":  25
                        },
                        {
                            "text":  "boogers on seat",
                            "points":  7
                        },
                        {
                            "text":  "yap/complain",
                            "points":  6
                        },
                        {
                            "text":  "speeding",
                            "points":  5
                        },
                        {
                            "text":  "being late",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170502,
        "question":  "What might someone teach a parrot to say to ward off burglars when they're not home?",
        "answers":  [
                        {
                            "text":  "gotta gun!",
                            "points":  33
                        },
                        {
                            "text":  "police/call 911!",
                            "points":  27
                        },
                        {
                            "text":  "sic 'em, dog/woof!",
                            "points":  8
                        },
                        {
                            "text":  "freeze/halt!",
                            "points":  8
                        },
                        {
                            "text":  "put your hands up!",
                            "points":  3
                        },
                        {
                            "text":  "hello!",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170503,
        "question":  "Name a four-letter word you call your spouse.",
        "answers":  [
                        {
                            "text":  "babe/baby",
                            "points":  33
                        },
                        {
                            "text":  "dear",
                            "points":  21
                        },
                        {
                            "text":  "love",
                            "points":  12
                        },
                        {
                            "text":  "wife",
                            "points":  9
                        },
                        {
                            "text":  "lazy",
                            "points":  4
                        },
                        {
                            "text":  "jerk",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170504,
        "question":  "If you're at a wild party and everyone is naked, name someone you'd hate to see show up.",
        "answers":  [
                        {
                            "text":  "a celeb",
                            "points":  32
                        },
                        {
                            "text":  "my mom/dad",
                            "points":  25
                        },
                        {
                            "text":  "my spouse/mate",
                            "points":  9
                        },
                        {
                            "text":  "the fuzz",
                            "points":  6
                        },
                        {
                            "text":  "my in-laws",
                            "points":  5
                        },
                        {
                            "text":  "my ex",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170505,
        "question":  "Name an occupation where you get paid to make things disappear.",
        "answers":  [
                        {
                            "text":  "magician",
                            "points":  55
                        },
                        {
                            "text":  "cleaning/janitor",
                            "points":  9
                        },
                        {
                            "text":  "garbage man",
                            "points":  7
                        },
                        {
                            "text":  "hit man/mobster",
                            "points":  4
                        },
                        {
                            "text":  "plumber",
                            "points":  3
                        },
                        {
                            "text":  "spy",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170506,
        "question":  "Name something that a woman who's naughty might leave out for Santa.",
        "answers":  [
                        {
                            "text":  "panties/lingerie",
                            "points":  40
                        },
                        {
                            "text":  "booze",
                            "points":  16
                        },
                        {
                            "text":  "nude/lewd pics",
                            "points":  8
                        },
                        {
                            "text":  "candy cane condom",
                            "points":  7
                        },
                        {
                            "text":  "herself/one boob",
                            "points":  5
                        },
                        {
                            "text":  "elf vibrator/toy",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170507,
        "question":  "You need the exact word for this question... A man might say, \"The weather today is a lot like my date last night. It's\" what?",
        "answers":  [
                        {
                            "text":  "cold",
                            "points":  33
                        },
                        {
                            "text":  "hot",
                            "points":  25
                        },
                        {
                            "text":  "frigid",
                            "points":  9
                        },
                        {
                            "text":  "stormy",
                            "points":  5
                        },
                        {
                            "text":  "wet",
                            "points":  5
                        },
                        {
                            "text":  "chilly",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170508,
        "question":  "We asked 100 men... You know it will be a bad date if the first thing she pulls out of her purse is what?",
        "answers":  [
                        {
                            "text":  "phone/tinder",
                            "points":  30
                        },
                        {
                            "text":  "glock/knife",
                            "points":  23
                        },
                        {
                            "text":  "mace",
                            "points":  15
                        },
                        {
                            "text":  "tape recorder",
                            "points":  5
                        },
                        {
                            "text":  "wedding ring",
                            "points":  5
                        },
                        {
                            "text":  "condom",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170509,
        "question":  "Where does a nudist carry their car keys?",
        "answers":  [
                        {
                            "text":  "around neck",
                            "points":  22
                        },
                        {
                            "text":  "tush/poop chute",
                            "points":  17
                        },
                        {
                            "text":  "hand/finger",
                            "points":  16
                        },
                        {
                            "text":  "purse/fanny pack",
                            "points":  13
                        },
                        {
                            "text":  "wrist/bracelet",
                            "points":  8
                        },
                        {
                            "text":  "mouth",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170510,
        "question":  "We asked 100 married men... Name someone you'd hate to hear you hit on while you were drunk.",
        "answers":  [
                        {
                            "text":  "mother-in-law",
                            "points":  29
                        },
                        {
                            "text":  "wife's bestie",
                            "points":  14
                        },
                        {
                            "text":  "sister-in-law",
                            "points":  11
                        },
                        {
                            "text":  "an ugly chick",
                            "points":  10
                        },
                        {
                            "text":  "buddy's wife",
                            "points":  8
                        },
                        {
                            "text":  "coworker",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  170511,
        "question":  "Name something that might be fuzzy.",
        "answers":  [
                        {
                            "text":  "bear/animal",
                            "points":  33
                        },
                        {
                            "text":  "peach/fruit",
                            "points":  19
                        },
                        {
                            "text":  "person/beard",
                            "points":  10
                        },
                        {
                            "text":  "stuffed animal",
                            "points":  7
                        },
                        {
                            "text":  "slippers",
                            "points":  5
                        },
                        {
                            "text":  "sweater",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170512,
        "question":  "Name a place you might wake up and not remember how you got there.",
        "answers":  [
                        {
                            "text":  "my home/lawn",
                            "points":  30
                        },
                        {
                            "text":  "someone's house/bed",
                            "points":  17
                        },
                        {
                            "text":  "jail cell",
                            "points":  10
                        },
                        {
                            "text":  "hospital",
                            "points":  8
                        },
                        {
                            "text":  "hotel/motel",
                            "points":  8
                        },
                        {
                            "text":  "car",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170513,
        "question":  "The man in the first row at the strip show got hit in the face with a what?",
        "answers":  [
                        {
                            "text":  "bra",
                            "points":  27
                        },
                        {
                            "text":  "g-string/panties",
                            "points":  22
                        },
                        {
                            "text":  "pastie/tassel",
                            "points":  12
                        },
                        {
                            "text":  "big ole boobie",
                            "points":  11
                        },
                        {
                            "text":  "dollar bill",
                            "points":  3
                        },
                        {
                            "text":  "boa/scarf",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170514,
        "question":  "As a punishment in hell, name something the women there would be forced to wear.",
        "answers":  [
                        {
                            "text":  "stilettos",
                            "points":  34
                        },
                        {
                            "text":  "corset/girdle/spanx",
                            "points":  15
                        },
                        {
                            "text":  "bra/underwire",
                            "points":  12
                        },
                        {
                            "text":  "thong/g-string",
                            "points":  8
                        },
                        {
                            "text":  "ball & chain",
                            "points":  5
                        },
                        {
                            "text":  "gag",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170515,
        "question":  "Tell me the name of an animal that the farmer calls his wife but he means it as a compliment.",
        "answers":  [
                        {
                            "text":  "heifer/cow",
                            "points":  29
                        },
                        {
                            "text":  "chick/chicken",
                            "points":  14
                        },
                        {
                            "text":  "pig/babe",
                            "points":  12
                        },
                        {
                            "text":  "horse/nag",
                            "points":  10
                        },
                        {
                            "text":  "kitty/cat/puss",
                            "points":  7
                        },
                        {
                            "text":  "lamb/sheep",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170516,
        "question":  "Tell me a game show that would make a great title for a book about your love life.",
        "answers":  [
                        {
                            "text":  "jeopardy",
                            "points":  28
                        },
                        {
                            "text":  "wheel of fortune",
                            "points":  21
                        },
                        {
                            "text":  "family feud",
                            "points":  14
                        },
                        {
                            "text":  "let's make a deal",
                            "points":  8
                        },
                        {
                            "text":  "the price is right",
                            "points":  3
                        },
                        {
                            "text":  "press your luck",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170517,
        "question":  "Name a place a man might work for free just to be around hot-looking women.",
        "answers":  [
                        {
                            "text":  "strip joint",
                            "points":  22
                        },
                        {
                            "text":  "gym/yoga studio",
                            "points":  18
                        },
                        {
                            "text":  "bar/nightclub",
                            "points":  16
                        },
                        {
                            "text":  "pool/water park",
                            "points":  9
                        },
                        {
                            "text":  "eatery/hooters",
                            "points":  7
                        },
                        {
                            "text":  "clothes/bra store",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170518,
        "question":  "What do you think heaven smells like?",
        "answers":  [
                        {
                            "text":  "flowers",
                            "points":  43
                        },
                        {
                            "text":  "bakery/cookies",
                            "points":  10
                        },
                        {
                            "text":  "fresh air/rain",
                            "points":  7
                        },
                        {
                            "text":  "chocolate",
                            "points":  6
                        },
                        {
                            "text":  "vanilla",
                            "points":  5
                        },
                        {
                            "text":  "linen/laundry",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170519,
        "question":  "Name something that people get caught in.",
        "answers":  [
                        {
                            "text":  "lies/gossip",
                            "points":  34
                        },
                        {
                            "text":  "bad weather",
                            "points":  13
                        },
                        {
                            "text":  "traffic",
                            "points":  10
                        },
                        {
                            "text":  "bed/torrid affair",
                            "points":  8
                        },
                        {
                            "text":  "a bind/trouble",
                            "points":  5
                        },
                        {
                            "text":  "a trap/speed trap",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170520,
        "question":  "Name a children's game that lovers play in the bedroom.",
        "answers":  [
                        {
                            "text":  "hide-and-seek",
                            "points":  26
                        },
                        {
                            "text":  "doctor",
                            "points":  17
                        },
                        {
                            "text":  "twister",
                            "points":  11
                        },
                        {
                            "text":  "spin the bottle",
                            "points":  10
                        },
                        {
                            "text":  "tag",
                            "points":  6
                        },
                        {
                            "text":  "peekaboo",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170521,
        "question":  "Name a food a woman might take a ferocious bite out of to scare her man.",
        "answers":  [
                        {
                            "text":  "hot dog/sausage",
                            "points":  26
                        },
                        {
                            "text":  "bloody steak/burger",
                            "points":  18
                        },
                        {
                            "text":  "banana",
                            "points":  15
                        },
                        {
                            "text":  "apple",
                            "points":  5
                        },
                        {
                            "text":  "turkey leg",
                            "points":  4
                        },
                        {
                            "text":  "a hot pepper",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170522,
        "question":  "Name a kind of car that a man might fantasize about making love in.",
        "answers":  [
                        {
                            "text":  "ferrari",
                            "points":  18
                        },
                        {
                            "text":  "corvette",
                            "points":  17
                        },
                        {
                            "text":  "porsche",
                            "points":  12
                        },
                        {
                            "text":  "lamborghini",
                            "points":  10
                        },
                        {
                            "text":  "limo",
                            "points":  8
                        },
                        {
                            "text":  "mustang",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  170523,
        "question":  "If you have an extra-large grave, name something you can actually take with you when you die.",
        "answers":  [
                        {
                            "text":  "car/truck",
                            "points":  30
                        },
                        {
                            "text":  "bed/furniture",
                            "points":  14
                        },
                        {
                            "text":  "pets/horse",
                            "points":  12
                        },
                        {
                            "text":  "clothes/shoes",
                            "points":  5
                        },
                        {
                            "text":  "tv",
                            "points":  5
                        },
                        {
                            "text":  "money/coin collect'n",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170524,
        "question":  "What's the most unusual animal you've kissed?",
        "answers":  [
                        {
                            "text":  "dog",
                            "points":  30
                        },
                        {
                            "text":  "cat",
                            "points":  19
                        },
                        {
                            "text":  "fish/shark",
                            "points":  6
                        },
                        {
                            "text":  "turtle",
                            "points":  6
                        },
                        {
                            "text":  "snake",
                            "points":  4
                        },
                        {
                            "text":  "bird/duck",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170525,
        "question":  "Name something Mrs. Claus wants for Christmas that can't be made by the elves.",
        "answers":  [
                        {
                            "text":  "santa's south pole",
                            "points":  45
                        },
                        {
                            "text":  "baby/grandkids",
                            "points":  5
                        },
                        {
                            "text":  "vacation",
                            "points":  5
                        },
                        {
                            "text":  "car/corvette",
                            "points":  5
                        },
                        {
                            "text":  "warm weather/heat",
                            "points":  4
                        },
                        {
                            "text":  "diamonds/jewelry",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170526,
        "question":  "If all the TV hosts got into a fistfight, who would win?",
        "answers":  [
                        {
                            "text":  "steve harvey",
                            "points":  36
                        },
                        {
                            "text":  "oprah",
                            "points":  10
                        },
                        {
                            "text":  "ellen",
                            "points":  7
                        },
                        {
                            "text":  "jimmy kimmel",
                            "points":  7
                        },
                        {
                            "text":  "dr. phil",
                            "points":  4
                        },
                        {
                            "text":  "bob barker",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170527,
        "question":  "Name something you'd be shocked to see if your kid told you, \"He followed me home -- can I keep him?\"",
        "answers":  [
                        {
                            "text":  "dog/puppy",
                            "points":  20
                        },
                        {
                            "text":  "person/creepy clown",
                            "points":  19
                        },
                        {
                            "text":  "skunk",
                            "points":  10
                        },
                        {
                            "text":  "horse/pony",
                            "points":  10
                        },
                        {
                            "text":  "alligator/croc",
                            "points":  5
                        },
                        {
                            "text":  "rat/mouse",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170528,
        "question":  "Fill in the blank: Grandpa might flirt with the old ladies by showing them his what?",
        "answers":  [
                        {
                            "text":  "gummy smile/teeth",
                            "points":  20
                        },
                        {
                            "text":  "wallet/$2 bill",
                            "points":  18
                        },
                        {
                            "text":  "chest/hairy boobs",
                            "points":  10
                        },
                        {
                            "text":  "muscles",
                            "points":  8
                        },
                        {
                            "text":  "medals",
                            "points":  6
                        },
                        {
                            "text":  "his \"6-shooter\"",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  170529,
        "question":  "Name an animal whose tail you wouldn't dare pull.",
        "answers":  [
                        {
                            "text":  "lion",
                            "points":  18
                        },
                        {
                            "text":  "tiger",
                            "points":  15
                        },
                        {
                            "text":  "bull",
                            "points":  11
                        },
                        {
                            "text":  "cat",
                            "points":  9
                        },
                        {
                            "text":  "skunk",
                            "points":  8
                        },
                        {
                            "text":  "donkey/mule",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  170530,
        "question":  "Name a kind of car you'd be surprised to see a pizza delivery guy was driving.",
        "answers":  [
                        {
                            "text":  "bmw",
                            "points":  18
                        },
                        {
                            "text":  "mercedes-benz",
                            "points":  18
                        },
                        {
                            "text":  "ferrari",
                            "points":  10
                        },
                        {
                            "text":  "porsche",
                            "points":  9
                        },
                        {
                            "text":  "corvette",
                            "points":  7
                        },
                        {
                            "text":  "cadillac",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170531,
        "question":  "We asked 100 women... Fill in the blank: My man is like a puppy dog because of the way he what?",
        "answers":  [
                        {
                            "text":  "whines/pouts",
                            "points":  17
                        },
                        {
                            "text":  "follows me",
                            "points":  16
                        },
                        {
                            "text":  "begs",
                            "points":  10
                        },
                        {
                            "text":  "cuddles",
                            "points":  8
                        },
                        {
                            "text":  "snores/sleeps",
                            "points":  8
                        },
                        {
                            "text":  "pants",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  170532,
        "question":  "A man loses interest in a woman the minute she tells him what?",
        "answers":  [
                        {
                            "text":  "i have kids/preggo",
                            "points":  31
                        },
                        {
                            "text":  "i'm married",
                            "points":  9
                        },
                        {
                            "text":  "want marriage/a boo",
                            "points":  9
                        },
                        {
                            "text":  "let's make babies!",
                            "points":  6
                        },
                        {
                            "text":  "i'm heavily diseased",
                            "points":  5
                        },
                        {
                            "text":  "no sex/headache",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170533,
        "question":  "Name some advice the world's greatest kissing expert has for you.",
        "answers":  [
                        {
                            "text":  "fresh breath/brush",
                            "points":  17
                        },
                        {
                            "text":  "close your eyes",
                            "points":  14
                        },
                        {
                            "text":  "more tongue",
                            "points":  9
                        },
                        {
                            "text":  "practice often",
                            "points":  8
                        },
                        {
                            "text":  "passion/emotion",
                            "points":  8
                        },
                        {
                            "text":  "don't slobber",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  170534,
        "question":  "If you won a vacation at a nudist camp and you could wear one thing, what would you choose?",
        "answers":  [
                        {
                            "text":  "hat",
                            "points":  16
                        },
                        {
                            "text":  "undies/panties",
                            "points":  15
                        },
                        {
                            "text":  "glasses/shades",
                            "points":  9
                        },
                        {
                            "text":  "dress/toga",
                            "points":  9
                        },
                        {
                            "text":  "swimsuit/speedo",
                            "points":  8
                        },
                        {
                            "text":  "flip-flops/shoes",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  170535,
        "question":  "Name a woman whose body shape has helped shape her career.",
        "answers":  [
                        {
                            "text":  "kim kardashian",
                            "points":  19
                        },
                        {
                            "text":  "pamela anderson",
                            "points":  12
                        },
                        {
                            "text":  "jennifer lopez",
                            "points":  11
                        },
                        {
                            "text":  "cindy crawford",
                            "points":  10
                        },
                        {
                            "text":  "marilyn monroe",
                            "points":  7
                        },
                        {
                            "text":  "oprah",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170536,
        "question":  "Name a talk show host who's your best friend in your head.",
        "answers":  [
                        {
                            "text":  "ellen",
                            "points":  26
                        },
                        {
                            "text":  "oprah",
                            "points":  14
                        },
                        {
                            "text":  "steve harvey",
                            "points":  9
                        },
                        {
                            "text":  "stephen colbert",
                            "points":  6
                        },
                        {
                            "text":  "dr. phil",
                            "points":  3
                        },
                        {
                            "text":  "jimmy fallon",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170537,
        "question":  "Tell me a B word that Mrs. Claus might use to describe Santa.",
        "answers":  [
                        {
                            "text":  "big",
                            "points":  35
                        },
                        {
                            "text":  "baby/babe",
                            "points":  7
                        },
                        {
                            "text":  "bossy/boss",
                            "points":  5
                        },
                        {
                            "text":  "bad",
                            "points":  5
                        },
                        {
                            "text":  "bearded",
                            "points":  4
                        },
                        {
                            "text":  "bubbly",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170538,
        "question":  "Name an occupation whose men should show more respect for women.",
        "answers":  [
                        {
                            "text":  "construct'n/carpentry",
                            "points":  18
                        },
                        {
                            "text":  "politics",
                            "points":  12
                        },
                        {
                            "text":  "entertainment/news",
                            "points":  9
                        },
                        {
                            "text":  "doctor",
                            "points":  8
                        },
                        {
                            "text":  "police",
                            "points":  7
                        },
                        {
                            "text":  "sports",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  170539,
        "question":  "Name an occupation whose men are being replaced by women.",
        "answers":  [
                        {
                            "text":  "doctor/dentist",
                            "points":  17
                        },
                        {
                            "text":  "politician",
                            "points":  10
                        },
                        {
                            "text":  "ceo",
                            "points":  10
                        },
                        {
                            "text":  "firefighter",
                            "points":  8
                        },
                        {
                            "text":  "police officer",
                            "points":  8
                        },
                        {
                            "text":  "construction",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  170540,
        "question":  "Fill in the blank: Meat ______.",
        "answers":  [
                        {
                            "text":  "meat market",
                            "points":  17
                        },
                        {
                            "text":  "meatloaf",
                            "points":  16
                        },
                        {
                            "text":  "meatball",
                            "points":  13
                        },
                        {
                            "text":  "meathead",
                            "points":  5
                        },
                        {
                            "text":  "meat cleaver",
                            "points":  4
                        },
                        {
                            "text":  "meat locker",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170541,
        "question":  "If Steve Harvey were working as a stripper, name a prop he might use in his act.",
        "answers":  [
                        {
                            "text":  "top hat",
                            "points":  16
                        },
                        {
                            "text":  "microphone",
                            "points":  12
                        },
                        {
                            "text":  "stripper pole",
                            "points":  8
                        },
                        {
                            "text":  "suit & tie",
                            "points":  8
                        },
                        {
                            "text":  "a wig",
                            "points":  7
                        },
                        {
                            "text":  "his mustache",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  170542,
        "question":  "Name something in your house that's old and disgusting.",
        "answers":  [
                        {
                            "text":  "pipes",
                            "points":  13
                        },
                        {
                            "text":  "carpet/rugs",
                            "points":  11
                        },
                        {
                            "text":  "furniture",
                            "points":  9
                        },
                        {
                            "text":  "my family/roomie",
                            "points":  8
                        },
                        {
                            "text":  "bathroom/toilet",
                            "points":  8
                        },
                        {
                            "text":  "garbage/trash cans",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  170543,
        "question":  "We asked 100 women... Name a reason you wouldn't want to be married to the sexiest man alive.",
        "answers":  [
                        {
                            "text":  "other gals/jealousy",
                            "points":  73
                        },
                        {
                            "text":  "his ego",
                            "points":  21
                        },
                        {
                            "text":  "dud personality",
                            "points":  2
                        },
                        {
                            "text":  "dumb/brain donor",
                            "points":  2
                        },
                        {
                            "text":  "the publicity",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170544,
        "question":  "After you murder someone, name something specific you must quickly get rid of.",
        "answers":  [
                        {
                            "text":  "the weapon",
                            "points":  58
                        },
                        {
                            "text":  "the body",
                            "points":  27
                        },
                        {
                            "text":  "blood",
                            "points":  6
                        },
                        {
                            "text":  "fingerprints",
                            "points":  5
                        },
                        {
                            "text":  "my clothes/shoes",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170545,
        "question":  "As a tribute, name something a circus clown's friends might wear to his funeral.",
        "answers":  [
                        {
                            "text":  "red nose",
                            "points":  54
                        },
                        {
                            "text":  "costume/big shoes",
                            "points":  23
                        },
                        {
                            "text":  "makeup/sad clown",
                            "points":  14
                        },
                        {
                            "text":  "wig/rainbow hair",
                            "points":  5
                        },
                        {
                            "text":  "squirting flower",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170546,
        "question":  "Name a reason a man might marry a woman old enough to be his mother.",
        "answers":  [
                        {
                            "text":  "she has oprah $$$",
                            "points":  87
                        },
                        {
                            "text":  "he loves her",
                            "points":  4
                        },
                        {
                            "text":  "she's kinky/sexpert",
                            "points":  4
                        },
                        {
                            "text":  "likes to be babied",
                            "points":  2
                        },
                        {
                            "text":  "his \"mommy issues\"",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170547,
        "question":  "Name something cats do when they fight that two women might do when they scuffle.",
        "answers":  [
                        {
                            "text":  "scratch/claw",
                            "points":  69
                        },
                        {
                            "text":  "screech/snarl",
                            "points":  13
                        },
                        {
                            "text":  "hiss",
                            "points":  11
                        },
                        {
                            "text":  "grab/pull out hair",
                            "points":  3
                        },
                        {
                            "text":  "bite",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170548,
        "question":  "We asked 100 single women... Name something specific you'd do if a guy took you to a strip club on a first date.",
        "answers":  [
                        {
                            "text":  "leave/uber",
                            "points":  55
                        },
                        {
                            "text":  "no 2nd date",
                            "points":  33
                        },
                        {
                            "text":  "love it/make it rain",
                            "points":  5
                        },
                        {
                            "text":  "start stripping/dancing",
                            "points":  4
                        },
                        {
                            "text":  "drink a lot",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170549,
        "question":  "Name something a woman licks when she's trying to be sexy.",
        "answers":  [
                        {
                            "text":  "plump red lips",
                            "points":  72
                        },
                        {
                            "text":  "giant lollipop",
                            "points":  8
                        },
                        {
                            "text":  "fingers",
                            "points":  7
                        },
                        {
                            "text":  "ice cream/popsicle",
                            "points":  7
                        },
                        {
                            "text":  "her chest",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170550,
        "question":  "Without a tongue, you wouldn't be able to lick what?",
        "answers":  [
                        {
                            "text":  "ice cream/popsicle",
                            "points":  62
                        },
                        {
                            "text":  "lollipop",
                            "points":  23
                        },
                        {
                            "text":  "yourself/your nose",
                            "points":  6
                        },
                        {
                            "text":  "mate/their feet",
                            "points":  5
                        },
                        {
                            "text":  "envelope/stamp",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170551,
        "question":  "Name a place where it's okay to sing even if you sing badly.",
        "answers":  [
                        {
                            "text":  "shower/bath",
                            "points":  61
                        },
                        {
                            "text":  "church",
                            "points":  26
                        },
                        {
                            "text":  "karaoke bar/club",
                            "points":  7
                        },
                        {
                            "text":  "car",
                            "points":  2
                        },
                        {
                            "text":  "sporting event",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170552,
        "question":  "We asked 100 married men... Name a way being married is just like prison.",
        "answers":  [
                        {
                            "text":  "rules/curfew",
                            "points":  60
                        },
                        {
                            "text":  "for life/no parole",
                            "points":  15
                        },
                        {
                            "text":  "routine schedule",
                            "points":  9
                        },
                        {
                            "text":  "no nookie",
                            "points":  7
                        },
                        {
                            "text":  "monogamy",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  170553,
        "question":  "We asked 100 women... When a man says, \"I have nothing to hide,\" what's he hiding?",
        "answers":  [
                        {
                            "text":  "a skankalicious ho",
                            "points":  54
                        },
                        {
                            "text":  "money/spending",
                            "points":  18
                        },
                        {
                            "text":  "his past",
                            "points":  15
                        },
                        {
                            "text":  "nudie flicks/pics",
                            "points":  9
                        },
                        {
                            "text":  "his feelings",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170554,
        "question":  "We asked 100 married men... What would you do if your wife insisted you get a vasectomy?",
        "answers":  [
                        {
                            "text":  "get it/snip, snip",
                            "points":  49
                        },
                        {
                            "text":  "say no",
                            "points":  26
                        },
                        {
                            "text":  "think/talk about it",
                            "points":  17
                        },
                        {
                            "text":  "divorce her/run",
                            "points":  4
                        },
                        {
                            "text":  "sweat/squirm",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170555,
        "question":  "Fill in the blank: Only a select few have ever ______ed my bare bottom.",
        "answers":  [
                        {
                            "text":  "spanked/smacked",
                            "points":  47
                        },
                        {
                            "text":  "seen",
                            "points":  39
                        },
                        {
                            "text":  "kissed",
                            "points":  6
                        },
                        {
                            "text":  "touched",
                            "points":  4
                        },
                        {
                            "text":  "licked",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170556,
        "question":  "We asked 100 women... Even though James Bond is sexy, why would he make a terrible husband?",
        "answers":  [
                        {
                            "text":  "he's a man-ho",
                            "points":  44
                        },
                        {
                            "text":  "he's never home",
                            "points":  27
                        },
                        {
                            "text":  "arrogant/big ego",
                            "points":  13
                        },
                        {
                            "text":  "dangerous life",
                            "points":  12
                        },
                        {
                            "text":  "he lies a lot",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170557,
        "question":  "We asked 100 men... You want a vasectomy. What's the first question you ask your doctor?",
        "answers":  [
                        {
                            "text":  "hurt/anesthesia?",
                            "points":  41
                        },
                        {
                            "text":  "reversible?",
                            "points":  26
                        },
                        {
                            "text":  "\"unit\" still work?",
                            "points":  18
                        },
                        {
                            "text":  "time to recover/sex?",
                            "points":  7
                        },
                        {
                            "text":  "doc's success rate",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  170558,
        "question":  "We asked 100 men... What would you do if, on the first date, a woman described her dream wedding?",
        "answers":  [
                        {
                            "text":  "bail/\"next!\"",
                            "points":  86
                        },
                        {
                            "text":  "listen/take notes",
                            "points":  5
                        },
                        {
                            "text":  "smile politely",
                            "points":  2
                        },
                        {
                            "text":  "marry her",
                            "points":  2
                        },
                        {
                            "text":  "say \"i love your ideas!\"",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170559,
        "question":  "Santa's reindeer are so rude, they made fun of Rudolph's nose and then they made fun of Santa's what?",
        "answers":  [
                        {
                            "text":  "bod/jelly belly",
                            "points":  75
                        },
                        {
                            "text":  "white hair/beard",
                            "points":  13
                        },
                        {
                            "text":  "hooptie sleigh",
                            "points":  4
                        },
                        {
                            "text":  "suit/hat",
                            "points":  3
                        },
                        {
                            "text":  "wife",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170560,
        "question":  "We asked 100 women... You'd dump your man in a minute if he asked you to do what to him like a baby?",
        "answers":  [
                        {
                            "text":  "change his diaper",
                            "points":  72
                        },
                        {
                            "text":  "feed/nurse him",
                            "points":  12
                        },
                        {
                            "text":  "hold/carry/rock",
                            "points":  6
                        },
                        {
                            "text":  "spank him",
                            "points":  4
                        },
                        {
                            "text":  "burp him",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170561,
        "question":  "Name something grandpa likes that's wrinkled.",
        "answers":  [
                        {
                            "text":  "grandma",
                            "points":  66
                        },
                        {
                            "text":  "prunes/fruit",
                            "points":  22
                        },
                        {
                            "text":  "comfy duds/hat",
                            "points":  5
                        },
                        {
                            "text":  "himself",
                            "points":  2
                        },
                        {
                            "text":  "money",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170562,
        "question":  "Name something that King Kong might be caught doing to the Statue of Liberty.",
        "answers":  [
                        {
                            "text":  "climb/swing",
                            "points":  62
                        },
                        {
                            "text":  "gettin' fresh/kiss'g",
                            "points":  25
                        },
                        {
                            "text":  "break'g/crush'g",
                            "points":  6
                        },
                        {
                            "text":  "eating it/visitors",
                            "points":  2
                        },
                        {
                            "text":  "peeing on it",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170563,
        "question":  "We asked 100 women... Name something you'd hate to hear your man compliment another woman on.",
        "answers":  [
                        {
                            "text":  "body/suckable feet",
                            "points":  61
                        },
                        {
                            "text":  "hot face",
                            "points":  26
                        },
                        {
                            "text":  "hair",
                            "points":  6
                        },
                        {
                            "text":  "good in bed",
                            "points":  2
                        },
                        {
                            "text":  "so fun/nice laugh",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170564,
        "question":  "Name something a man takes with him when he goes shopping with his wife.",
        "answers":  [
                        {
                            "text":  "cash/wallet/cards",
                            "points":  56
                        },
                        {
                            "text":  "phone/earphones",
                            "points":  24
                        },
                        {
                            "text":  "reading material",
                            "points":  13
                        },
                        {
                            "text":  "a list",
                            "points":  2
                        },
                        {
                            "text":  "his patience",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170565,
        "question":  "We asked 100 married men... Name an animal that gets more nookie than you do.",
        "answers":  [
                        {
                            "text":  "rabbit",
                            "points":  52
                        },
                        {
                            "text":  "neutered dog",
                            "points":  29
                        },
                        {
                            "text":  "monkey/ape",
                            "points":  9
                        },
                        {
                            "text":  "lion",
                            "points":  4
                        },
                        {
                            "text":  "cat",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170566,
        "question":  "Tell me a specific reason pregnant wives want their husbands in the delivery room.",
        "answers":  [
                        {
                            "text":  "support/coach",
                            "points":  51
                        },
                        {
                            "text":  "see/share pain",
                            "points":  16
                        },
                        {
                            "text":  "share joy/birth",
                            "points":  14
                        },
                        {
                            "text":  "yell/cuss out",
                            "points":  13
                        },
                        {
                            "text":  "hit/hurt him",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170567,
        "question":  "Name something you cheat on but it shouldn't stop you from getting into heaven.",
        "answers":  [
                        {
                            "text":  "my diet",
                            "points":  47
                        },
                        {
                            "text":  "test/to become doc",
                            "points":  26
                        },
                        {
                            "text":  "my taxes",
                            "points":  13
                        },
                        {
                            "text":  "cards/games",
                            "points":  7
                        },
                        {
                            "text":  "my boo",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170568,
        "question":  "Tell me something specific that people do when they win Fast Money on \"Family Feud.\"",
        "answers":  [
                        {
                            "text":  "scream/cheer",
                            "points":  44
                        },
                        {
                            "text":  "jump/chest bump",
                            "points":  28
                        },
                        {
                            "text":  "spend/blow it",
                            "points":  21
                        },
                        {
                            "text":  "dance",
                            "points":  2
                        },
                        {
                            "text":  "hug/steve",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170569,
        "question":  "We asked 100 women... If you were married to Steve Harvey, name a reason you'd never be bored.",
        "answers":  [
                        {
                            "text":  "he's funny",
                            "points":  84
                        },
                        {
                            "text":  "looker/that head",
                            "points":  4
                        },
                        {
                            "text":  "endless chedda",
                            "points":  4
                        },
                        {
                            "text":  "guru of hoo-hoo",
                            "points":  2
                        },
                        {
                            "text":  "he's busy/never there",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170570,
        "question":  "Name something grandma starts doing that might make grandpa turn off his hearing aid.",
        "answers":  [
                        {
                            "text":  "yap/nagging",
                            "points":  68
                        },
                        {
                            "text":  "singing/yodeling",
                            "points":  21
                        },
                        {
                            "text":  "snoring",
                            "points":  3
                        },
                        {
                            "text":  "grunt/moaning",
                            "points":  2
                        },
                        {
                            "text":  "vacuuming",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170571,
        "question":  "Name a place you think Steve Harvey goes to on Sunday after church.",
        "answers":  [
                        {
                            "text":  "brunch/waffle house",
                            "points":  67
                        },
                        {
                            "text":  "bar/nightclub",
                            "points":  15
                        },
                        {
                            "text":  "home",
                            "points":  7
                        },
                        {
                            "text":  "relative's home",
                            "points":  5
                        },
                        {
                            "text":  "strip joint",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170572,
        "question":  "If a man speaks seven languages, which one would he use when he wants to sound sexy?",
        "answers":  [
                        {
                            "text":  "french",
                            "points":  60
                        },
                        {
                            "text":  "italian",
                            "points":  23
                        },
                        {
                            "text":  "english/cockney",
                            "points":  8
                        },
                        {
                            "text":  "spanish",
                            "points":  3
                        },
                        {
                            "text":  "body language",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170573,
        "question":  "Death is too good for a married man who sends another woman a sexy what?",
        "answers":  [
                        {
                            "text":  "selfie/pic",
                            "points":  47
                        },
                        {
                            "text":  "nightie/clothes",
                            "points":  26
                        },
                        {
                            "text":  "text/e-mail",
                            "points":  12
                        },
                        {
                            "text":  "card/letter",
                            "points":  9
                        },
                        {
                            "text":  "toy",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170574,
        "question":  "Name a fruit that's the shape of a body part.",
        "answers":  [
                        {
                            "text":  "banana",
                            "points":  43
                        },
                        {
                            "text":  "pear",
                            "points":  35
                        },
                        {
                            "text":  "apple",
                            "points":  7
                        },
                        {
                            "text":  "melon",
                            "points":  7
                        },
                        {
                            "text":  "orange",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170575,
        "question":  "We asked 100 women... You love your fiancé but hate the ring. What do you do?",
        "answers":  [
                        {
                            "text":  "wear it/\"thanks\"",
                            "points":  40
                        },
                        {
                            "text":  "exchange/reset it",
                            "points":  29
                        },
                        {
                            "text":  "tell him/\"hate it!\"",
                            "points":  23
                        },
                        {
                            "text":  "dump him!",
                            "points":  2
                        },
                        {
                            "text":  "\"accidentally\" lose",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170576,
        "question":  "Name something that might be too dry.",
        "answers":  [
                        {
                            "text":  "food/chicken",
                            "points":  35
                        },
                        {
                            "text":  "wine/martini",
                            "points":  31
                        },
                        {
                            "text":  "my body/mouth",
                            "points":  19
                        },
                        {
                            "text":  "desert/weather",
                            "points":  8
                        },
                        {
                            "text":  "sense of humor",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170577,
        "question":  "Name a kind of ball that people chew.",
        "answers":  [
                        {
                            "text":  "gum ball",
                            "points":  81
                        },
                        {
                            "text":  "meatball",
                            "points":  6
                        },
                        {
                            "text":  "jawbreaker",
                            "points":  4
                        },
                        {
                            "text":  "cheese ball",
                            "points":  2
                        },
                        {
                            "text":  "melon ball",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170578,
        "question":  "On vacation, you wanted a room with a view. But you ended up looking at what?",
        "answers":  [
                        {
                            "text":  "a building/wall",
                            "points":  76
                        },
                        {
                            "text":  "a parking lot",
                            "points":  8
                        },
                        {
                            "text":  "an alley/street",
                            "points":  5
                        },
                        {
                            "text":  "dumpster/trash",
                            "points":  3
                        },
                        {
                            "text":  "each other/mate",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170579,
        "question":  "If a man spent too much time playing video games, what might his wife do to his joystick?",
        "answers":  [
                        {
                            "text":  "break/chop it up",
                            "points":  57
                        },
                        {
                            "text":  "hide it",
                            "points":  22
                        },
                        {
                            "text":  "throw it away",
                            "points":  10
                        },
                        {
                            "text":  "burn it",
                            "points":  4
                        },
                        {
                            "text":  "sit on/wipe on butt",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170580,
        "question":  "Name something that would be fun to do if you were a ghost.",
        "answers":  [
                        {
                            "text":  "scare folks/my ex",
                            "points":  56
                        },
                        {
                            "text":  "spy/gym showers",
                            "points":  17
                        },
                        {
                            "text":  "go through walls",
                            "points":  14
                        },
                        {
                            "text":  "fly",
                            "points":  6
                        },
                        {
                            "text":  "chill with buds/fam",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170581,
        "question":  "We asked 100 single men... What is the last thing you bought solely for the purpose of attracting women?",
        "answers":  [
                        {
                            "text":  "cologne",
                            "points":  50
                        },
                        {
                            "text":  "aston martin/car",
                            "points":  17
                        },
                        {
                            "text":  "trendy haircut",
                            "points":  14
                        },
                        {
                            "text":  "tank top/clothes",
                            "points":  10
                        },
                        {
                            "text":  "exercise equipment",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170582,
        "question":  "We asked 100 married women... Sometimes I get so mad at my husband, I could what?",
        "answers":  [
                        {
                            "text":  "scream",
                            "points":  48
                        },
                        {
                            "text":  "leave/divorce him",
                            "points":  28
                        },
                        {
                            "text":  "slap/punch him",
                            "points":  10
                        },
                        {
                            "text":  "cry",
                            "points":  6
                        },
                        {
                            "text":  "spit",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170583,
        "question":  "Name a reason a lonely guy might get rid of his inflatable doll.",
        "answers":  [
                        {
                            "text":  "it popped",
                            "points":  45
                        },
                        {
                            "text":  "got live babe",
                            "points":  40
                        },
                        {
                            "text":  "caught/by visitor",
                            "points":  4
                        },
                        {
                            "text":  "he outgrew her",
                            "points":  3
                        },
                        {
                            "text":  "dirty/moldy",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170584,
        "question":  "We asked 100 men... If you had two wives, name something they'd probably prefer to do with just each other.",
        "answers":  [
                        {
                            "text":  "shop",
                            "points":  44
                        },
                        {
                            "text":  "talk/gossip",
                            "points":  40
                        },
                        {
                            "text":  "make lady love",
                            "points":  6
                        },
                        {
                            "text":  "cook",
                            "points":  3
                        },
                        {
                            "text":  "plan to dump/kill me",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170585,
        "question":  "Name something Santa might fire an elf for doing on the job.",
        "answers":  [
                        {
                            "text":  "sleeping",
                            "points":  31
                        },
                        {
                            "text":  "stealing",
                            "points":  20
                        },
                        {
                            "text":  "sex/\"makin' poundcake\"",
                            "points":  19
                        },
                        {
                            "text":  "drink'g hot toddies",
                            "points":  17
                        },
                        {
                            "text":  "eat'g/kids' candy",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  170586,
        "question":  "Name something a woman is holding when she says, \"Come and get it.\"",
        "answers":  [
                        {
                            "text":  "pan of food/supper",
                            "points":  78
                        },
                        {
                            "text":  "inviting boobs/bod",
                            "points":  6
                        },
                        {
                            "text":  "beer/booze",
                            "points":  4
                        },
                        {
                            "text":  "a dinner bell",
                            "points":  3
                        },
                        {
                            "text":  "her bra/clothes",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170587,
        "question":  "Name a reason why making out in a car isn't such a good idea.",
        "answers":  [
                        {
                            "text":  "no room/stick shift",
                            "points":  47
                        },
                        {
                            "text":  "caught/by po-po",
                            "points":  28
                        },
                        {
                            "text":  "fogs up windows",
                            "points":  9
                        },
                        {
                            "text":  "might crash",
                            "points":  8
                        },
                        {
                            "text":  "too cold/weather",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170588,
        "question":  "We asked 100 married women... Name something you'd do if the babysitter winked at your husband.",
        "answers":  [
                        {
                            "text":  "fire the slut",
                            "points":  71
                        },
                        {
                            "text":  "laugh/smile",
                            "points":  15
                        },
                        {
                            "text":  "slap her",
                            "points":  3
                        },
                        {
                            "text":  "ask what's going on",
                            "points":  2
                        },
                        {
                            "text":  "wink back",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170589,
        "question":  "We asked 100 women... Name a reason you think Steve Harvey's a good kisser.",
        "answers":  [
                        {
                            "text":  "massive fish lips",
                            "points":  70
                        },
                        {
                            "text":  "he's sexy",
                            "points":  12
                        },
                        {
                            "text":  "lots of practice",
                            "points":  6
                        },
                        {
                            "text":  "has charisma/suave",
                            "points":  3
                        },
                        {
                            "text":  "he's kind",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170590,
        "question":  "We asked 100 women... It's bad if your man's eyes are open during a kiss. It's worse if he's looking at what?",
        "answers":  [
                        {
                            "text":  "some ho/my mom",
                            "points":  46
                        },
                        {
                            "text":  "tv/golden girls",
                            "points":  31
                        },
                        {
                            "text":  "e-mail/phone",
                            "points":  7
                        },
                        {
                            "text":  "ceiling/wall",
                            "points":  5
                        },
                        {
                            "text":  "clock/watch",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170591,
        "question":  "Name a part of your lover you've nibbled on like it was a snack.",
        "answers":  [
                        {
                            "text":  "ears",
                            "points":  44
                        },
                        {
                            "text":  "neck",
                            "points":  23
                        },
                        {
                            "text":  "gland of milk & honey",
                            "points":  15
                        },
                        {
                            "text":  "lips",
                            "points":  7
                        },
                        {
                            "text":  "toes/feet/corns",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170592,
        "question":  "We asked 100 married men... Just once, I wish my wife would greet me at the door wearing nothing but what?",
        "answers":  [
                        {
                            "text":  "lingerie/thong",
                            "points":  42
                        },
                        {
                            "text":  "a smile/b-day suit",
                            "points":  29
                        },
                        {
                            "text":  "10-inch stilettos",
                            "points":  10
                        },
                        {
                            "text":  "french maid getup",
                            "points":  9
                        },
                        {
                            "text":  "a tie",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170593,
        "question":  "Tell me something a mugger might hate to discover about the old lady he was trying to rob.",
        "answers":  [
                        {
                            "text":  "armed/mace",
                            "points":  39
                        },
                        {
                            "text":  "fighter/black belt",
                            "points":  22
                        },
                        {
                            "text":  "no $$$/valuables",
                            "points":  16
                        },
                        {
                            "text":  "disguised cop/man",
                            "points":  9
                        },
                        {
                            "text":  "it's his grandma",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  170594,
        "question":  "We asked 100 married men... Name something a man might have nightmares about his wife doing to him.",
        "answers":  [
                        {
                            "text":  "killing",
                            "points":  34
                        },
                        {
                            "text":  "cheating on him",
                            "points":  32
                        },
                        {
                            "text":  "leaving him",
                            "points":  18
                        },
                        {
                            "text":  "slugging him",
                            "points":  6
                        },
                        {
                            "text":  "a lorena bobbitt",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170595,
        "question":  "At the nursing home Christmas party, someone left their teeth in the what?",
        "answers":  [
                        {
                            "text":  "punch bowl/glass",
                            "points":  68
                        },
                        {
                            "text":  "bathroom/toilet",
                            "points":  10
                        },
                        {
                            "text":  "food/dip",
                            "points":  8
                        },
                        {
                            "text":  "manger scene",
                            "points":  3
                        },
                        {
                            "text":  "christmas tree",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170596,
        "question":  "Name something a funeral director would hate to discover about the body they're about to bury.",
        "answers":  [
                        {
                            "text":  "it's alliiiive!",
                            "points":  60
                        },
                        {
                            "text":  "wrong person",
                            "points":  18
                        },
                        {
                            "text":  "it reeks",
                            "points":  6
                        },
                        {
                            "text":  "it's missing",
                            "points":  5
                        },
                        {
                            "text":  "plague/contagious",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170597,
        "question":  "Just because a man is named Brad, it doesn't mean he has Brad Pitt's what?",
        "answers":  [
                        {
                            "text":  "looks/silky locks",
                            "points":  60
                        },
                        {
                            "text":  "money, honey!",
                            "points":  13
                        },
                        {
                            "text":  "charm/sex appeal",
                            "points":  12
                        },
                        {
                            "text":  "bod/6-pack",
                            "points":  5
                        },
                        {
                            "text":  "talent/career",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170598,
        "question":  "We asked 100 women... Name a reason no one could accuse you of having a boob job.",
        "answers":  [
                        {
                            "text":  "bee sting boobs",
                            "points":  51
                        },
                        {
                            "text":  "saggy/hit floor",
                            "points":  23
                        },
                        {
                            "text":  "no scars",
                            "points":  9
                        },
                        {
                            "text":  "always big/this size",
                            "points":  5
                        },
                        {
                            "text":  "one's bigger",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170599,
        "question":  "We asked 100 men... Fill in the blank: Oh no -- I have a really hot date tonight and I don't have what?",
        "answers":  [
                        {
                            "text":  "cash/wallet",
                            "points":  50
                        },
                        {
                            "text":  "a banana bandana",
                            "points":  31
                        },
                        {
                            "text":  "duds/leather pants",
                            "points":  6
                        },
                        {
                            "text":  "a car",
                            "points":  3
                        },
                        {
                            "text":  "viagra",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170600,
        "question":  "Name something Kermit does like a frog that Miss Piggy might say turns her on.",
        "answers":  [
                        {
                            "text":  "talks/croaks/sings",
                            "points":  38
                        },
                        {
                            "text":  "hops/leaps",
                            "points":  29
                        },
                        {
                            "text":  "uses tongue/eats bug",
                            "points":  19
                        },
                        {
                            "text":  "puffs out throat",
                            "points":  3
                        },
                        {
                            "text":  "dances",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170601,
        "question":  "Name a place a really dumb husband goes and uses his credit card instead of cash.",
        "answers":  [
                        {
                            "text":  "nudie joint",
                            "points":  63
                        },
                        {
                            "text":  "no-tell motel",
                            "points":  10
                        },
                        {
                            "text":  "bar/nightclub",
                            "points":  8
                        },
                        {
                            "text":  "casino",
                            "points":  5
                        },
                        {
                            "text":  "brothel",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170602,
        "question":  "If a stripper was called the Hawaiian Hottie, what might she be wearing during her act?",
        "answers":  [
                        {
                            "text":  "lei/flowers",
                            "points":  44
                        },
                        {
                            "text":  "hula/grass skirt",
                            "points":  29
                        },
                        {
                            "text":  "coconut bra",
                            "points":  11
                        },
                        {
                            "text":  "bikini/thong",
                            "points":  5
                        },
                        {
                            "text":  "flaming hula hoop",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170603,
        "question":  "It's bad if a crab pinches you while you're swimming. It's worse if he pinches you where?",
        "answers":  [
                        {
                            "text":  "stimulus package",
                            "points":  42
                        },
                        {
                            "text":  "butt/burrito blaster",
                            "points":  20
                        },
                        {
                            "text":  "boobs/golden globes",
                            "points":  11
                        },
                        {
                            "text":  "face/nose",
                            "points":  9
                        },
                        {
                            "text":  "toe/foot",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  170604,
        "question":  "Name something a wife might wait to tell her husband until he's in the right mood.",
        "answers":  [
                        {
                            "text":  "pregnant/triplets",
                            "points":  35
                        },
                        {
                            "text":  "wrecked car",
                            "points":  31
                        },
                        {
                            "text":  "spent/need $",
                            "points":  17
                        },
                        {
                            "text":  "divorce/buh-bye",
                            "points":  4
                        },
                        {
                            "text":  "craving your loins",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170605,
        "question":  "Give me a word starting with the letter L that might describe a woman's lips.",
        "answers":  [
                        {
                            "text":  "luscious",
                            "points":  76
                        },
                        {
                            "text":  "lush",
                            "points":  5
                        },
                        {
                            "text":  "lovely",
                            "points":  4
                        },
                        {
                            "text":  "lustful/lusty",
                            "points":  2
                        },
                        {
                            "text":  "large",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170606,
        "question":  "Name an expensive food a shoplifter might slip into their pants at the supermarket.",
        "answers":  [
                        {
                            "text":  "meat/prime rib",
                            "points":  67
                        },
                        {
                            "text":  "caviar",
                            "points":  11
                        },
                        {
                            "text":  "lobster/crab",
                            "points":  5
                        },
                        {
                            "text":  "truffles",
                            "points":  3
                        },
                        {
                            "text":  "cheese",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170607,
        "question":  "We asked 100 women... I like a man who's comfortable holding what?",
        "answers":  [
                        {
                            "text":  "me/my body",
                            "points":  36
                        },
                        {
                            "text":  "a baby/child",
                            "points":  26
                        },
                        {
                            "text":  "my purse",
                            "points":  19
                        },
                        {
                            "text":  "his temper/tongue",
                            "points":  4
                        },
                        {
                            "text":  "a kitten/puppy",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170608,
        "question":  "We asked 100 men... Name something you might get your tie caught in.",
        "answers":  [
                        {
                            "text":  "door/car door",
                            "points":  35
                        },
                        {
                            "text":  "shredder",
                            "points":  19
                        },
                        {
                            "text":  "drawer",
                            "points":  15
                        },
                        {
                            "text":  "a fan",
                            "points":  11
                        },
                        {
                            "text":  "my zipper/pants",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  170609,
        "question":  "Name something that usually smells better when it belongs to a woman instead of a man.",
        "answers":  [
                        {
                            "text":  "clothes/shoes",
                            "points":  34
                        },
                        {
                            "text":  "cologne",
                            "points":  27
                        },
                        {
                            "text":  "body/pits/hair",
                            "points":  13
                        },
                        {
                            "text":  "car",
                            "points":  11
                        },
                        {
                            "text":  "bathroom/home",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170610,
        "question":  "If business at the funeral home is dead, name a place the owner goes looking for more customers.",
        "answers":  [
                        {
                            "text":  "nursing home",
                            "points":  28
                        },
                        {
                            "text":  "hospital/e.r.",
                            "points":  26
                        },
                        {
                            "text":  "morgue",
                            "points":  21
                        },
                        {
                            "text":  "bar/biker bar",
                            "points":  10
                        },
                        {
                            "text":  "graveyard",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170611,
        "question":  "You'd hate to come home to see a burglar taking a what?",
        "answers":  [
                        {
                            "text":  "nap",
                            "points":  27
                        },
                        {
                            "text":  "dump/whiz/on sofa",
                            "points":  26
                        },
                        {
                            "text":  "tv",
                            "points":  17
                        },
                        {
                            "text":  "bath/shower",
                            "points":  14
                        },
                        {
                            "text":  "computer",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170612,
        "question":  "Name something that might take a dive.",
        "answers":  [
                        {
                            "text":  "stock market",
                            "points":  49
                        },
                        {
                            "text":  "bird/swan",
                            "points":  13
                        },
                        {
                            "text":  "swimmer/diver",
                            "points":  11
                        },
                        {
                            "text":  "boxer/wrestler",
                            "points":  9
                        },
                        {
                            "text":  "airplane",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  170613,
        "question":  "We asked 100 married women... Give me a phrase your husband doesn't say to you very often.",
        "answers":  [
                        {
                            "text":  "i love you",
                            "points":  26
                        },
                        {
                            "text":  "you're beautiful",
                            "points":  25
                        },
                        {
                            "text":  "you're right",
                            "points":  21
                        },
                        {
                            "text":  "thank you!",
                            "points":  14
                        },
                        {
                            "text":  "as you wish, master",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170614,
        "question":  "Name something a boss might do if one of his employees were parked in his spot.",
        "answers":  [
                        {
                            "text":  "\"move it!\"/hissy fit",
                            "points":  45
                        },
                        {
                            "text":  "have it towed",
                            "points":  20
                        },
                        {
                            "text":  "fire them",
                            "points":  9
                        },
                        {
                            "text":  "block them",
                            "points":  8
                        },
                        {
                            "text":  "damage/destroy car",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170615,
        "question":  "Name something you don't like to get out of once you're in it.",
        "answers":  [
                        {
                            "text":  "bed",
                            "points":  39
                        },
                        {
                            "text":  "shower/bath",
                            "points":  22
                        },
                        {
                            "text":  "pool/hot tub",
                            "points":  15
                        },
                        {
                            "text":  "rela'ship/marriage",
                            "points":  7
                        },
                        {
                            "text":  "maserati/car",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170616,
        "question":  "Instead of a bouquet, name something a mermaid might throw at her wedding.",
        "answers":  [
                        {
                            "text":  "fish/scales",
                            "points":  28
                        },
                        {
                            "text":  "seashells",
                            "points":  26
                        },
                        {
                            "text":  "seaweed/kelp",
                            "points":  25
                        },
                        {
                            "text":  "starfish",
                            "points":  4
                        },
                        {
                            "text":  "saltwater",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170617,
        "question":  "A week before the wedding is a little late for the groom to tell his bride he's what?",
        "answers":  [
                        {
                            "text":  "he's gay",
                            "points":  52
                        },
                        {
                            "text":  "already married",
                            "points":  13
                        },
                        {
                            "text":  "leaving/2nd thoughts",
                            "points":  10
                        },
                        {
                            "text":  "broke/job-free",
                            "points":  6
                        },
                        {
                            "text":  "he's a gal",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170618,
        "question":  "If they were trying to find a replacement for Santa, tell me something that they might test each candidate on.",
        "answers":  [
                        {
                            "text":  "jolly/his ho-ho-ho",
                            "points":  45
                        },
                        {
                            "text":  "patient/nice to kids",
                            "points":  21
                        },
                        {
                            "text":  "fast flier",
                            "points":  9
                        },
                        {
                            "text":  "weight/body fat",
                            "points":  5
                        },
                        {
                            "text":  "beard growth",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170619,
        "question":  "Name something a little kid might try to flush down the toilet.",
        "answers":  [
                        {
                            "text":  "toy/teddy bear",
                            "points":  57
                        },
                        {
                            "text":  "food/broccoli",
                            "points":  9
                        },
                        {
                            "text":  "clothes/diaper",
                            "points":  8
                        },
                        {
                            "text":  "pet/goldfish",
                            "points":  7
                        },
                        {
                            "text":  "paper/report card",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170620,
        "question":  "Give me a word that rhymes with \"ladder.\"",
        "answers":  [
                        {
                            "text":  "bladder",
                            "points":  46
                        },
                        {
                            "text":  "madder/matter",
                            "points":  14
                        },
                        {
                            "text":  "sadder",
                            "points":  12
                        },
                        {
                            "text":  "badder/batter",
                            "points":  9
                        },
                        {
                            "text":  "fatter",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170621,
        "question":  "Fill in the blank: Some people have a really hard time keeping a what?",
        "answers":  [
                        {
                            "text":  "secret",
                            "points":  29
                        },
                        {
                            "text":  "job",
                            "points":  22
                        },
                        {
                            "text":  "schedule/date",
                            "points":  16
                        },
                        {
                            "text":  "boo/rela'ship",
                            "points":  6
                        },
                        {
                            "text":  "straight face",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170622,
        "question":  "We asked 100 men... Tell me a traffic sign that best describes your love life.",
        "answers":  [
                        {
                            "text":  "stop",
                            "points":  37
                        },
                        {
                            "text":  "yield",
                            "points":  20
                        },
                        {
                            "text":  "slow",
                            "points":  9
                        },
                        {
                            "text":  "dead end",
                            "points":  5
                        },
                        {
                            "text":  "caution",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170623,
        "question":  "Name something about a woman's dress that can make it sexy.",
        "answers":  [
                        {
                            "text":  "length/skimpy",
                            "points":  22
                        },
                        {
                            "text":  "low-cut/cleavage",
                            "points":  21
                        },
                        {
                            "text":  "high-cut slit",
                            "points":  16
                        },
                        {
                            "text":  "tight fit",
                            "points":  10
                        },
                        {
                            "text":  "the color",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  170624,
        "question":  "Tell me something you skip.",
        "answers":  [
                        {
                            "text":  "meals/food",
                            "points":  42
                        },
                        {
                            "text":  "rope",
                            "points":  14
                        },
                        {
                            "text":  "rocks",
                            "points":  7
                        },
                        {
                            "text":  "exercise/gym",
                            "points":  7
                        },
                        {
                            "text":  "commercials/ads",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170625,
        "question":  "We asked 100 women... What's the occupation of your fantasy man?",
        "answers":  [
                        {
                            "text":  "doctor/dentist",
                            "points":  34
                        },
                        {
                            "text":  "firefighter",
                            "points":  16
                        },
                        {
                            "text":  "movie star/actor",
                            "points":  11
                        },
                        {
                            "text":  "athlete/sumo",
                            "points":  8
                        },
                        {
                            "text":  "singer/rock star",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170626,
        "question":  "When Little Red Riding Hood auditioned for \"Family Feud,\" she was surprised at the size of Steve Harvey's what?",
        "answers":  [
                        {
                            "text":  "big bald head",
                            "points":  28
                        },
                        {
                            "text":  "lips/teeth/smile",
                            "points":  16
                        },
                        {
                            "text":  "mustache",
                            "points":  13
                        },
                        {
                            "text":  "hands",
                            "points":  9
                        },
                        {
                            "text":  "feet/shoes",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  170627,
        "question":  "We asked 100 men... Name a term of endearment you'd better not call a coworker or it's straight to unemployment for you.",
        "answers":  [
                        {
                            "text":  "honey",
                            "points":  25
                        },
                        {
                            "text":  "babe/baby",
                            "points":  17
                        },
                        {
                            "text":  "sexy",
                            "points":  15
                        },
                        {
                            "text":  "sweetie/sweetcheeks",
                            "points":  12
                        },
                        {
                            "text":  "hottie/hot lips",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170628,
        "question":  "Name something you did as a baby that you don't like to hear your mother talk about.",
        "answers":  [
                        {
                            "text":  "pee/poo/on walls",
                            "points":  32
                        },
                        {
                            "text":  "cry/tantrums",
                            "points":  19
                        },
                        {
                            "text":  "go nude/strip",
                            "points":  11
                        },
                        {
                            "text":  "breastfeed",
                            "points":  5
                        },
                        {
                            "text":  "suck thumb",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170629,
        "question":  "We asked 100 women... What would you dress up as to role-play in the bedroom?",
        "answers":  [
                        {
                            "text":  "nurse",
                            "points":  28
                        },
                        {
                            "text":  "french maid",
                            "points":  26
                        },
                        {
                            "text":  "wonder woman",
                            "points":  8
                        },
                        {
                            "text":  "dirty li'l hooker",
                            "points":  6
                        },
                        {
                            "text":  "queen/princess/leia",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170630,
        "question":  "Who should star in the updated version of the Disney classic called \"Sleeping Booty\"?",
        "answers":  [
                        {
                            "text":  "kim kardashian",
                            "points":  25
                        },
                        {
                            "text":  "beyonce",
                            "points":  19
                        },
                        {
                            "text":  "jennifer lopez",
                            "points":  16
                        },
                        {
                            "text":  "nicki minaj",
                            "points":  7
                        },
                        {
                            "text":  "stormy daniels",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170631,
        "question":  "If they put music legends on money, whose picture would be on the $100 bill?",
        "answers":  [
                        {
                            "text":  "elvis presley",
                            "points":  27
                        },
                        {
                            "text":  "michael jackson",
                            "points":  16
                        },
                        {
                            "text":  "the beatles/john",
                            "points":  16
                        },
                        {
                            "text":  "johnny cash",
                            "points":  6
                        },
                        {
                            "text":  "prince",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170632,
        "question":  "We asked 100 women... Name an occupation whose men always think they're right.",
        "answers":  [
                        {
                            "text":  "lawyer",
                            "points":  22
                        },
                        {
                            "text":  "police",
                            "points":  14
                        },
                        {
                            "text":  "mechanic",
                            "points":  13
                        },
                        {
                            "text":  "doctor",
                            "points":  13
                        },
                        {
                            "text":  "politician",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  170633,
        "question":  "We asked 100 women... If your man had a mating call, what animal would it sound like?",
        "answers":  [
                        {
                            "text":  "wolf",
                            "points":  25
                        },
                        {
                            "text":  "monkey/ape",
                            "points":  14
                        },
                        {
                            "text":  "lion",
                            "points":  11
                        },
                        {
                            "text":  "dog/chihuahua",
                            "points":  10
                        },
                        {
                            "text":  "bird/turkey",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  170634,
        "question":  "Fill in the blank: Grandma was mad at grandpa on Thanksgiving, so she stuffed the turkey with his what?",
        "answers":  [
                        {
                            "text":  "socks/duds/hat",
                            "points":  28
                        },
                        {
                            "text":  "dentures/teeth",
                            "points":  20
                        },
                        {
                            "text":  "meds/viagra",
                            "points":  8
                        },
                        {
                            "text":  "tobacco/pipe",
                            "points":  7
                        },
                        {
                            "text":  "remote control",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170635,
        "question":  "Name a great gift for a man that would make a terrible gift for a woman.",
        "answers":  [
                        {
                            "text":  "his ties/jockstrap",
                            "points":  19
                        },
                        {
                            "text":  "tools",
                            "points":  17
                        },
                        {
                            "text":  "razor/trimmer",
                            "points":  11
                        },
                        {
                            "text":  "sports equip./gun",
                            "points":  11
                        },
                        {
                            "text":  "aftershave/cologne",
                            "points":  10
                        }
                    ]
    },
    {
        "id":  170636,
        "question":  "Name a U.S. president you think could have been a winner on \"Jeopardy!\".",
        "answers":  [
                        {
                            "text":  "barack obama",
                            "points":  32
                        },
                        {
                            "text":  "john f. kennedy",
                            "points":  10
                        },
                        {
                            "text":  "ronald reagan",
                            "points":  9
                        },
                        {
                            "text":  "bill clinton",
                            "points":  8
                        },
                        {
                            "text":  "abraham lincoln",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  170637,
        "question":  "Name something you'd be surprised your grandpa just handed to you.",
        "answers":  [
                        {
                            "text":  "cash/a million",
                            "points":  25
                        },
                        {
                            "text":  "his dentures",
                            "points":  16
                        },
                        {
                            "text":  "a condom",
                            "points":  15
                        },
                        {
                            "text":  "a car/keys to it",
                            "points":  5
                        },
                        {
                            "text":  "hot granny porn",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170638,
        "question":  "Tell me a specific part of your spouse's body you could pick out of a lineup.",
        "answers":  [
                        {
                            "text":  "legs/cankles",
                            "points":  18
                        },
                        {
                            "text":  "bean blaster",
                            "points":  15
                        },
                        {
                            "text":  "chest/puppies",
                            "points":  13
                        },
                        {
                            "text":  "eyes",
                            "points":  10
                        },
                        {
                            "text":  "nose",
                            "points":  10
                        }
                    ]
    },
    {
        "id":  170639,
        "question":  "You'd be offended if your best friend told you that you need to get a what?",
        "answers":  [
                        {
                            "text":  "life",
                            "points":  27
                        },
                        {
                            "text":  "surgery/new face",
                            "points":  23
                        },
                        {
                            "text":  "haircut",
                            "points":  7
                        },
                        {
                            "text":  "new outfit/girdle",
                            "points":  4
                        },
                        {
                            "text":  "shower/bath",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170640,
        "question":  "Name an old action star who should keep his shirt on.",
        "answers":  [
                        {
                            "text":  "\"aah-nold\"",
                            "points":  22
                        },
                        {
                            "text":  "clint eastwood",
                            "points":  21
                        },
                        {
                            "text":  "bruce willis",
                            "points":  9
                        },
                        {
                            "text":  "sly stallone",
                            "points":  7
                        },
                        {
                            "text":  "chuck norris",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  170641,
        "question":  "Name an Italian food that an Italian lover can make sound sexy.",
        "answers":  [
                        {
                            "text":  "lasagna",
                            "points":  26
                        },
                        {
                            "text":  "spaghetti",
                            "points":  14
                        },
                        {
                            "text":  "pasta",
                            "points":  8
                        },
                        {
                            "text":  "pizza",
                            "points":  8
                        },
                        {
                            "text":  "linguine",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  170642,
        "question":  "We asked 100 women... Name a famous woman who inspires you.",
        "answers":  [
                        {
                            "text":  "michelle obama",
                            "points":  23
                        },
                        {
                            "text":  "oprah winfrey",
                            "points":  18
                        },
                        {
                            "text":  "hillary clinton",
                            "points":  9
                        },
                        {
                            "text":  "madonna",
                            "points":  7
                        },
                        {
                            "text":  "ellen degeneres",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  170643,
        "question":  "The good news: You've been reincarnated as a bird. The bad news: It's what kind of bird?",
        "answers":  [
                        {
                            "text":  "pigeon",
                            "points":  19
                        },
                        {
                            "text":  "vulture",
                            "points":  14
                        },
                        {
                            "text":  "extinct dodo bird",
                            "points":  11
                        },
                        {
                            "text":  "crow/raven",
                            "points":  10
                        },
                        {
                            "text":  "turkey",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  170644,
        "question":  "Name a food you could eat every day for the rest of your life.",
        "answers":  [
                        {
                            "text":  "pizza",
                            "points":  27
                        },
                        {
                            "text":  "ice cream",
                            "points":  12
                        },
                        {
                            "text":  "pasta/ramen noodle",
                            "points":  8
                        },
                        {
                            "text":  "fruit/figs",
                            "points":  8
                        },
                        {
                            "text":  "seafood/sushi",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  170645,
        "question":  "Name something grandma lets grandpa wear at home but not in public.",
        "answers":  [
                        {
                            "text":  "shorts",
                            "points":  19
                        },
                        {
                            "text":  "undies/long johns",
                            "points":  16
                        },
                        {
                            "text":  "pajamas",
                            "points":  10
                        },
                        {
                            "text":  "robe",
                            "points":  9
                        },
                        {
                            "text":  "tee/holey shirt",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  170646,
        "question":  "Name something you can only do for a few minutes at a time.",
        "answers":  [
                        {
                            "text":  "run/exercise",
                            "points":  30
                        },
                        {
                            "text":  "hold my breath",
                            "points":  10
                        },
                        {
                            "text":  "housework/clean",
                            "points":  6
                        },
                        {
                            "text":  "read/study",
                            "points":  6
                        },
                        {
                            "text":  "make love",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170647,
        "question":  "Give me a word that rhymes with \"hustle.\"",
        "answers":  [
                        {
                            "text":  "bustle",
                            "points":  73
                        },
                        {
                            "text":  "muscle",
                            "points":  15
                        },
                        {
                            "text":  "rustle",
                            "points":  9
                        },
                        {
                            "text":  "tussle",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170648,
        "question":  "Name something you start doing when you hear your favorite song on the radio.",
        "answers":  [
                        {
                            "text":  "singing/humming",
                            "points":  64
                        },
                        {
                            "text":  "dancing/moving",
                            "points":  30
                        },
                        {
                            "text":  "crankin' volume",
                            "points":  4
                        },
                        {
                            "text":  "smiling",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170649,
        "question":  "We asked 100 single men... Fill in the blank: My dating life has suffered because I have a fear of what?",
        "answers":  [
                        {
                            "text":  "commitment/marriage",
                            "points":  59
                        },
                        {
                            "text":  "rejection/failure",
                            "points":  21
                        },
                        {
                            "text":  "women/talk'g to",
                            "points":  18
                        },
                        {
                            "text":  "vd/syphilis",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170650,
        "question":  "Playboys change their women as often as they change their what?",
        "answers":  [
                        {
                            "text":  "undies/clothes",
                            "points":  92
                        },
                        {
                            "text":  "cars",
                            "points":  3
                        },
                        {
                            "text":  "bedsheets",
                            "points":  2
                        },
                        {
                            "text":  "mind/opinions",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170651,
        "question":  "Name an occupation that works with buns.",
        "answers":  [
                        {
                            "text":  "baker/food industry",
                            "points":  90
                        },
                        {
                            "text":  "fitness trainer",
                            "points":  4
                        },
                        {
                            "text":  "massage therapist",
                            "points":  3
                        },
                        {
                            "text":  "stripper",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170652,
        "question":  "Name something a department store Santa might hate about his job.",
        "answers":  [
                        {
                            "text":  "kids/pee on him",
                            "points":  89
                        },
                        {
                            "text":  "long hours",
                            "points":  6
                        },
                        {
                            "text":  "low pay",
                            "points":  2
                        },
                        {
                            "text":  "the suit/it's dirty",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170653,
        "question":  "Name a kind of hoop.",
        "answers":  [
                        {
                            "text":  "hula hoop",
                            "points":  74
                        },
                        {
                            "text":  "basketball hoop",
                            "points":  18
                        },
                        {
                            "text":  "earring hoop",
                            "points":  4
                        },
                        {
                            "text":  "embroidery hoop",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170654,
        "question":  "Name something you think of when you hear the word \"rover.\"",
        "answers":  [
                        {
                            "text":  "dog/walkers",
                            "points":  65
                        },
                        {
                            "text":  "car/range rover",
                            "points":  20
                        },
                        {
                            "text":  "red rover/game",
                            "points":  10
                        },
                        {
                            "text":  "mars rover/space",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170655,
        "question":  "We asked 100 married men... What were you doing the last time you told your mate you were working late?",
        "answers":  [
                        {
                            "text":  "working",
                            "points":  56
                        },
                        {
                            "text":  "drinkin'",
                            "points":  36
                        },
                        {
                            "text":  "on a date/cheating",
                            "points":  5
                        },
                        {
                            "text":  "shopping/for cars",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170656,
        "question":  "We asked 100 men... Name something you're embarrassed to buy in a small size.",
        "answers":  [
                        {
                            "text":  "clothes/shoes",
                            "points":  51
                        },
                        {
                            "text":  "woody hoodies",
                            "points":  43
                        },
                        {
                            "text":  "car",
                            "points":  3
                        },
                        {
                            "text":  "tv",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170657,
        "question":  "We asked 100 married men... Your wife is out of town. What do you invite your guy friends over to do?",
        "answers":  [
                        {
                            "text":  "watch tv/sports",
                            "points":  51
                        },
                        {
                            "text":  "cards/games",
                            "points":  26
                        },
                        {
                            "text":  "drink beer",
                            "points":  13
                        },
                        {
                            "text":  "work on cars",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  170658,
        "question":  "Name something you wouldn't want to find a worm in.",
        "answers":  [
                        {
                            "text":  "apple/food",
                            "points":  87
                        },
                        {
                            "text":  "me/my intestines",
                            "points":  5
                        },
                        {
                            "text":  "beverage/tequila",
                            "points":  4
                        },
                        {
                            "text":  "my bed",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170659,
        "question":  "Name something that makes you breathe hard.",
        "answers":  [
                        {
                            "text":  "exercise/stairs",
                            "points":  75
                        },
                        {
                            "text":  "sex/a hottie",
                            "points":  17
                        },
                        {
                            "text":  "allergies/a cold",
                            "points":  4
                        },
                        {
                            "text":  "hot temperatures",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170660,
        "question":  "Name something you think of when you hear the word \"Caesar.\"",
        "answers":  [
                        {
                            "text":  "salad/dressing",
                            "points":  71
                        },
                        {
                            "text":  "julius/rome/ruler",
                            "points":  21
                        },
                        {
                            "text":  "caesars palace/casino",
                            "points":  3
                        },
                        {
                            "text":  "pizza/little caesars",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170661,
        "question":  "Name something that might be a day old.",
        "answers":  [
                        {
                            "text":  "food",
                            "points":  71
                        },
                        {
                            "text":  "a baby",
                            "points":  16
                        },
                        {
                            "text":  "animal/insect",
                            "points":  8
                        },
                        {
                            "text":  "news",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170662,
        "question":  "Give me a word that rhymes with \"fickle.\"",
        "answers":  [
                        {
                            "text":  "pickle",
                            "points":  71
                        },
                        {
                            "text":  "nickel",
                            "points":  13
                        },
                        {
                            "text":  "tickle",
                            "points":  12
                        },
                        {
                            "text":  "sickle",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170663,
        "question":  "Tell me a place that dead people hang out.",
        "answers":  [
                        {
                            "text":  "cemetery",
                            "points":  70
                        },
                        {
                            "text":  "mortuary/morgue",
                            "points":  17
                        },
                        {
                            "text":  "heaven/hell",
                            "points":  9
                        },
                        {
                            "text":  "haunted house",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170664,
        "question":  "Name something a rich wife hopes the maid doesn't steal.",
        "answers":  [
                        {
                            "text":  "diamonds/jewelry",
                            "points":  65
                        },
                        {
                            "text":  "husband",
                            "points":  24
                        },
                        {
                            "text":  "silver/silverware",
                            "points":  6
                        },
                        {
                            "text":  "money",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170665,
        "question":  "Fill in the blank: An invitation to a really cheap wedding might say, \"Bring your ______.\"",
        "answers":  [
                        {
                            "text":  "own booze",
                            "points":  64
                        },
                        {
                            "text":  "own food/cake",
                            "points":  25
                        },
                        {
                            "text":  "own chair",
                            "points":  6
                        },
                        {
                            "text":  "purse/wallet/cash",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170666,
        "question":  "Some like it hot and some like it cold. What?",
        "answers":  [
                        {
                            "text":  "beverage/coffee",
                            "points":  63
                        },
                        {
                            "text":  "food/pizza",
                            "points":  22
                        },
                        {
                            "text":  "weather",
                            "points":  8
                        },
                        {
                            "text":  "shower",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170667,
        "question":  "We asked 100 men... Name something Mickey Mouse has that you wouldn't want to have.",
        "answers":  [
                        {
                            "text":  "big ears",
                            "points":  63
                        },
                        {
                            "text":  "a tail",
                            "points":  20
                        },
                        {
                            "text":  "high voice",
                            "points":  10
                        },
                        {
                            "text":  "minnie mouse",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170668,
        "question":  "We asked 100 women... I'd never be a stripper, but I wouldn't mind having their what?",
        "answers":  [
                        {
                            "text":  "bod/firm melons",
                            "points":  58
                        },
                        {
                            "text":  "tips/cash",
                            "points":  32
                        },
                        {
                            "text":  "talent/flexibility",
                            "points":  5
                        },
                        {
                            "text":  "confidence",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170669,
        "question":  "Fill in the blank: Mrs. Claus put Santa on a diet because he no longer fits into what?",
        "answers":  [
                        {
                            "text":  "his clothes/boots",
                            "points":  57
                        },
                        {
                            "text":  "the sleigh",
                            "points":  35
                        },
                        {
                            "text":  "chimneys",
                            "points":  3
                        },
                        {
                            "text":  "bed",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170670,
        "question":  "Name something a person might use to cover bald spots.",
        "answers":  [
                        {
                            "text":  "hat/beret",
                            "points":  51
                        },
                        {
                            "text":  "wig/toupee/weave",
                            "points":  37
                        },
                        {
                            "text":  "comb-over/own hair",
                            "points":  5
                        },
                        {
                            "text":  "spray paint/color",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170671,
        "question":  "Name something slobs don't bother to do that saves a lot of time.",
        "answers":  [
                        {
                            "text":  "clean up/laundry",
                            "points":  49
                        },
                        {
                            "text":  "bathe/wash up",
                            "points":  31
                        },
                        {
                            "text":  "shave",
                            "points":  15
                        },
                        {
                            "text":  "use napkin/wipe mouth",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170672,
        "question":  "We asked 100 men... Name something you and your dog like to roll around on.",
        "answers":  [
                        {
                            "text":  "bed/furniture",
                            "points":  41
                        },
                        {
                            "text":  "ground/grass/mud",
                            "points":  36
                        },
                        {
                            "text":  "floor/carpet",
                            "points":  18
                        },
                        {
                            "text":  "pile of leaves",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170673,
        "question":  "Name something you'd hate to fall out of your mouth.",
        "answers":  [
                        {
                            "text":  "teeth/dentures",
                            "points":  82
                        },
                        {
                            "text":  "food/gum",
                            "points":  9
                        },
                        {
                            "text":  "drool/saliva",
                            "points":  4
                        },
                        {
                            "text":  "my tongue/my lover's",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170674,
        "question":  "Name something that breaks out.",
        "answers":  [
                        {
                            "text":  "face/skin blemish",
                            "points":  81
                        },
                        {
                            "text":  "convict",
                            "points":  11
                        },
                        {
                            "text":  "pet/animal",
                            "points":  3
                        },
                        {
                            "text":  "flu/epidemic",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170675,
        "question":  "It seems like there's never a good time to ask for what?",
        "answers":  [
                        {
                            "text":  "money/a raise",
                            "points":  77
                        },
                        {
                            "text":  "nookie",
                            "points":  13
                        },
                        {
                            "text":  "food/candy",
                            "points":  5
                        },
                        {
                            "text":  "time off work/vacay",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170676,
        "question":  "Name someplace where you might see Santa before Christmas.",
        "answers":  [
                        {
                            "text":  "mall/store",
                            "points":  77
                        },
                        {
                            "text":  "bar/nightclub",
                            "points":  10
                        },
                        {
                            "text":  "north pole/home",
                            "points":  8
                        },
                        {
                            "text":  "parade",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170677,
        "question":  "If toys come from the North Pole, how come they say \"Made in\" where?",
        "answers":  [
                        {
                            "text":  "china",
                            "points":  75
                        },
                        {
                            "text":  "usa",
                            "points":  17
                        },
                        {
                            "text":  "taiwan",
                            "points":  3
                        },
                        {
                            "text":  "japan",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170678,
        "question":  "Name something you carry on your back.",
        "answers":  [
                        {
                            "text":  "backpack/bag",
                            "points":  73
                        },
                        {
                            "text":  "burdens/pressure",
                            "points":  13
                        },
                        {
                            "text":  "child",
                            "points":  7
                        },
                        {
                            "text":  "clothes/tied sweater",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170679,
        "question":  "We asked 100 married men... After you die, what do you suspect your wife will do before you're even buried?",
        "answers":  [
                        {
                            "text":  "get/spend the $",
                            "points":  70
                        },
                        {
                            "text":  "cry",
                            "points":  15
                        },
                        {
                            "text":  "find a new schmuck",
                            "points":  7
                        },
                        {
                            "text":  "get rid of my stuff",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170680,
        "question":  "Name something ducks do.",
        "answers":  [
                        {
                            "text":  "quack",
                            "points":  69
                        },
                        {
                            "text":  "swim",
                            "points":  20
                        },
                        {
                            "text":  "fly",
                            "points":  5
                        },
                        {
                            "text":  "waddle",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170681,
        "question":  "What would you do if you noticed your boss forgot to zip up his fly?",
        "answers":  [
                        {
                            "text":  "tell him/gesture",
                            "points":  69
                        },
                        {
                            "text":  "laugh",
                            "points":  15
                        },
                        {
                            "text":  "look away/ignore",
                            "points":  11
                        },
                        {
                            "text":  "ask guy to tell him",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170682,
        "question":  "Name a type of cone.",
        "answers":  [
                        {
                            "text":  "ice cream/waffle",
                            "points":  68
                        },
                        {
                            "text":  "pine cone",
                            "points":  10
                        },
                        {
                            "text":  "pylon/traffic cone",
                            "points":  10
                        },
                        {
                            "text":  "snow cone",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  170683,
        "question":  "Name something a woman might do with her ex's underwear.",
        "answers":  [
                        {
                            "text":  "burn 'em",
                            "points":  67
                        },
                        {
                            "text":  "throw 'em away",
                            "points":  24
                        },
                        {
                            "text":  "clean/toilet",
                            "points":  4
                        },
                        {
                            "text":  "wear 'em",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170684,
        "question":  "Name something of yours that the older it gets, the more money you have to put into it.",
        "answers":  [
                        {
                            "text":  "car/truck",
                            "points":  62
                        },
                        {
                            "text":  "house",
                            "points":  24
                        },
                        {
                            "text":  "me/my body",
                            "points":  8
                        },
                        {
                            "text":  "bank acct./ira",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170685,
        "question":  "Name something that a person with long legs might not be able to fit into.",
        "answers":  [
                        {
                            "text":  "car",
                            "points":  57
                        },
                        {
                            "text":  "pants",
                            "points":  19
                        },
                        {
                            "text":  "airplane seat",
                            "points":  12
                        },
                        {
                            "text":  "amusement ride",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  170686,
        "question":  "We asked 100 women... Name something that happens on a girls' night out.",
        "answers":  [
                        {
                            "text":  "drink/get sloshed",
                            "points":  56
                        },
                        {
                            "text":  "gossip/gabfest",
                            "points":  21
                        },
                        {
                            "text":  "laugh",
                            "points":  15
                        },
                        {
                            "text":  "dance/on pole",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170687,
        "question":  "What's your favorite way to work up a sweat?",
        "answers":  [
                        {
                            "text":  "exercise/sports",
                            "points":  50
                        },
                        {
                            "text":  "making love",
                            "points":  38
                        },
                        {
                            "text":  "dancing",
                            "points":  7
                        },
                        {
                            "text":  "cooking",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170688,
        "question":  "We asked 100 married women... Name something of your man's you love to smell.",
        "answers":  [
                        {
                            "text":  "aftershave/cologne",
                            "points":  46
                        },
                        {
                            "text":  "hair/sweaty bod",
                            "points":  31
                        },
                        {
                            "text":  "his shirt",
                            "points":  18
                        },
                        {
                            "text":  "his cooking",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170689,
        "question":  "We asked 100 men... Name a question you should never ask a woman if you want to live to talk about it.",
        "answers":  [
                        {
                            "text":  "whadda ya weigh?",
                            "points":  44
                        },
                        {
                            "text":  "how old are you?",
                            "points":  35
                        },
                        {
                            "text":  "you pregnant?",
                            "points":  16
                        },
                        {
                            "text":  "dye your hair?",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170690,
        "question":  "A boss might tell an employee, \"You're getting\" what?",
        "answers":  [
                        {
                            "text":  "a raise/bonus",
                            "points":  42
                        },
                        {
                            "text":  "fired/laid off",
                            "points":  35
                        },
                        {
                            "text":  "lazy/slow",
                            "points":  11
                        },
                        {
                            "text":  "promoted",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  170691,
        "question":  "We asked 100 women... Which job in the circus has the sexiest men?",
        "answers":  [
                        {
                            "text":  "acrobat/trapeze",
                            "points":  42
                        },
                        {
                            "text":  "animal trainer",
                            "points":  28
                        },
                        {
                            "text":  "strongman",
                            "points":  22
                        },
                        {
                            "text":  "clown",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170692,
        "question":  "Name something you clinch when you're stressed out.",
        "answers":  [
                        {
                            "text":  "teeth/jaw",
                            "points":  38
                        },
                        {
                            "text":  "hands/fists",
                            "points":  36
                        },
                        {
                            "text":  "stress ball",
                            "points":  18
                        },
                        {
                            "text":  "butt/ring of fire",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170693,
        "question":  "A bald guy might start the rumor that bald guys make better what?",
        "answers":  [
                        {
                            "text":  "lovers",
                            "points":  88
                        },
                        {
                            "text":  "food/meals",
                            "points":  4
                        },
                        {
                            "text":  "money",
                            "points":  2
                        },
                        {
                            "text":  "hubbies/boyfriends",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170694,
        "question":  "Name something a man might brag that he once made love in the back of.",
        "answers":  [
                        {
                            "text":  "car/truck/hearse",
                            "points":  83
                        },
                        {
                            "text":  "movie theater",
                            "points":  6
                        },
                        {
                            "text":  "airplane",
                            "points":  4
                        },
                        {
                            "text":  "school/school gym",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170695,
        "question":  "If a man says, \"I'm too sexy for my shirt,\" his wife might say, \"No, you're too\" what \"for it\"?",
        "answers":  [
                        {
                            "text":  "fat/big/round",
                            "points":  82
                        },
                        {
                            "text":  "old",
                            "points":  10
                        },
                        {
                            "text":  "small/skinny",
                            "points":  2
                        },
                        {
                            "text":  "ugly/homely",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170696,
        "question":  "Name a way people lose all their money.",
        "answers":  [
                        {
                            "text":  "gamble/lotto",
                            "points":  82
                        },
                        {
                            "text":  "invest/in scam",
                            "points":  10
                        },
                        {
                            "text":  "drugs",
                            "points":  2
                        },
                        {
                            "text":  "marriage/divorce",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170697,
        "question":  "Name something a man hopes might happen when he wears his lucky underwear.",
        "answers":  [
                        {
                            "text":  "scores w/ hottie",
                            "points":  78
                        },
                        {
                            "text":  "wins lotto/big $$$",
                            "points":  9
                        },
                        {
                            "text":  "a date/future wife",
                            "points":  5
                        },
                        {
                            "text":  "his team wins",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170698,
        "question":  "Name something you ride on that you hope doesn't make you throw up.",
        "answers":  [
                        {
                            "text":  "amusement ride",
                            "points":  75
                        },
                        {
                            "text":  "boat/ship",
                            "points":  15
                        },
                        {
                            "text":  "airplane",
                            "points":  4
                        },
                        {
                            "text":  "bus",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170699,
        "question":  "Name something you'd hate to discover bit you while you were sleeping.",
        "answers":  [
                        {
                            "text":  "bug/spider",
                            "points":  67
                        },
                        {
                            "text":  "snake",
                            "points":  22
                        },
                        {
                            "text":  "rat/mouse",
                            "points":  4
                        },
                        {
                            "text":  "bat",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170700,
        "question":  "Name something that might be rippling.",
        "answers":  [
                        {
                            "text":  "water/stream",
                            "points":  61
                        },
                        {
                            "text":  "body/muscles",
                            "points":  29
                        },
                        {
                            "text":  "potato chips/chips",
                            "points":  4
                        },
                        {
                            "text":  "tight pants",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170701,
        "question":  "We asked 100 women... Name an animal that's more affectionate than your man.",
        "answers":  [
                        {
                            "text":  "dog",
                            "points":  59
                        },
                        {
                            "text":  "stray cat",
                            "points":  32
                        },
                        {
                            "text":  "cow",
                            "points":  3
                        },
                        {
                            "text":  "tiger",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170702,
        "question":  "We asked 100 married women... I'd like to trade in my old man for a new what?",
        "answers":  [
                        {
                            "text":  "model/young & rich",
                            "points":  57
                        },
                        {
                            "text":  "car",
                            "points":  20
                        },
                        {
                            "text":  "house",
                            "points":  16
                        },
                        {
                            "text":  "housekeeper",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170703,
        "question":  "Name something that happened to King Kong.",
        "answers":  [
                        {
                            "text":  "he was killed",
                            "points":  55
                        },
                        {
                            "text":  "he fell in love",
                            "points":  22
                        },
                        {
                            "text":  "climbed skyscraper",
                            "points":  13
                        },
                        {
                            "text":  "he was captured",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  170704,
        "question":  "Name something you might see people push down the street.",
        "answers":  [
                        {
                            "text":  "stroller",
                            "points":  54
                        },
                        {
                            "text":  "cart/shopping cart",
                            "points":  31
                        },
                        {
                            "text":  "stalled car",
                            "points":  7
                        },
                        {
                            "text":  "bicycle",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170705,
        "question":  "Name something big you hope is in the small package someone gives you.",
        "answers":  [
                        {
                            "text":  "cash/gift card",
                            "points":  46
                        },
                        {
                            "text":  "diamond/jewelry",
                            "points":  41
                        },
                        {
                            "text":  "car keys",
                            "points":  6
                        },
                        {
                            "text":  "cell phone",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170706,
        "question":  "Tell me something you might describe as a dead end.",
        "answers":  [
                        {
                            "text":  "street/road",
                            "points":  46
                        },
                        {
                            "text":  "job/job search",
                            "points":  41
                        },
                        {
                            "text":  "marriage/rela'ship",
                            "points":  6
                        },
                        {
                            "text":  "life",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170707,
        "question":  "Name something specific a mortician might not put on someone if it's a closed casket.",
        "answers":  [
                        {
                            "text":  "clothes/shoes",
                            "points":  42
                        },
                        {
                            "text":  "makeup",
                            "points":  39
                        },
                        {
                            "text":  "jewelry/watch",
                            "points":  13
                        },
                        {
                            "text":  "a smile",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170708,
        "question":  "Name something a little baby wears that a man who's a big baby would look ridiculous in.",
        "answers":  [
                        {
                            "text":  "diaper",
                            "points":  41
                        },
                        {
                            "text":  "bib",
                            "points":  31
                        },
                        {
                            "text":  "onesie/sleeper",
                            "points":  20
                        },
                        {
                            "text":  "bonnet",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170709,
        "question":  "A man should never say that his mother does what better than his wife?",
        "answers":  [
                        {
                            "text":  "cooks",
                            "points":  84
                        },
                        {
                            "text":  "housework/laundry",
                            "points":  6
                        },
                        {
                            "text":  "kisses",
                            "points":  3
                        },
                        {
                            "text":  "loves him",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170710,
        "question":  "Name something that should never be left alone.",
        "answers":  [
                        {
                            "text":  "baby/child",
                            "points":  82
                        },
                        {
                            "text":  "fire/candle",
                            "points":  7
                        },
                        {
                            "text":  "puppy/pet",
                            "points":  4
                        },
                        {
                            "text":  "money/gold",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170711,
        "question":  "Name something that can happen in a house that would make it a tough sell.",
        "answers":  [
                        {
                            "text":  "murder/death",
                            "points":  79
                        },
                        {
                            "text":  "water damage/mold",
                            "points":  10
                        },
                        {
                            "text":  "fire",
                            "points":  4
                        },
                        {
                            "text":  "ghosts take over",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170712,
        "question":  "Name something that might be missing a piece.",
        "answers":  [
                        {
                            "text":  "jigsaw puzzle",
                            "points":  79
                        },
                        {
                            "text":  "board game/chess",
                            "points":  6
                        },
                        {
                            "text":  "cake/pie",
                            "points":  6
                        },
                        {
                            "text":  "chain/jewelry",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170713,
        "question":  "Name something you hope your company gives you when you retire.",
        "answers":  [
                        {
                            "text":  "money/pension",
                            "points":  78
                        },
                        {
                            "text":  "legendary party",
                            "points":  8
                        },
                        {
                            "text":  "gold watch",
                            "points":  5
                        },
                        {
                            "text":  "health insurance",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170714,
        "question":  "Name something from high school that still fits.",
        "answers":  [
                        {
                            "text":  "duds/shoes/cap",
                            "points":  72
                        },
                        {
                            "text":  "jewelry/class ring",
                            "points":  17
                        },
                        {
                            "text":  "reputation/ego",
                            "points":  3
                        },
                        {
                            "text":  "name/nickname",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170715,
        "question":  "We asked 100 single women... Fill in the blank: You were very attracted to your blind date until you realized he reminded you of your ______.",
        "answers":  [
                        {
                            "text":  "ex",
                            "points":  69
                        },
                        {
                            "text":  "brother",
                            "points":  14
                        },
                        {
                            "text":  "boss",
                            "points":  7
                        },
                        {
                            "text":  "dad",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170716,
        "question":  "Tell me one difference between a chicken and a rooster.",
        "answers":  [
                        {
                            "text":  "gender",
                            "points":  68
                        },
                        {
                            "text":  "chickens lay eggs",
                            "points":  11
                        },
                        {
                            "text":  "roosters crow",
                            "points":  11
                        },
                        {
                            "text":  "rooster's comb/crown",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170717,
        "question":  "In a state where marijuana is legal, name a kind of business that is booming.",
        "answers":  [
                        {
                            "text":  "fast-food/grocery",
                            "points":  61
                        },
                        {
                            "text":  "dispensary",
                            "points":  23
                        },
                        {
                            "text":  "paraphernalia/shop",
                            "points":  8
                        },
                        {
                            "text":  "fertilizer",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170718,
        "question":  "We asked 100 single men... I want a woman who will laugh at my jokes, not at my what?",
        "answers":  [
                        {
                            "text":  "\"baby carrot\"/body",
                            "points":  59
                        },
                        {
                            "text":  "face/beak",
                            "points":  31
                        },
                        {
                            "text":  "mistakes",
                            "points":  3
                        },
                        {
                            "text":  "clothes",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170719,
        "question":  "Name a holiday that women seem to enjoy more than men do.",
        "answers":  [
                        {
                            "text":  "valentine's day",
                            "points":  59
                        },
                        {
                            "text":  "christmas",
                            "points":  27
                        },
                        {
                            "text":  "mother's day",
                            "points":  6
                        },
                        {
                            "text":  "easter",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170720,
        "question":  "Name something that might get into your bathing suit if you fall asleep at the beach.",
        "answers":  [
                        {
                            "text":  "sand",
                            "points":  51
                        },
                        {
                            "text":  "crabs",
                            "points":  32
                        },
                        {
                            "text":  "bugs/sand fleas",
                            "points":  10
                        },
                        {
                            "text":  "bird/seagull",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170721,
        "question":  "Name something you leave on all night when your spouse is out of town.",
        "answers":  [
                        {
                            "text":  "light/porch light",
                            "points":  51
                        },
                        {
                            "text":  "the tv",
                            "points":  27
                        },
                        {
                            "text":  "clothes/nightie",
                            "points":  15
                        },
                        {
                            "text":  "music",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170722,
        "question":  "Name something people show their love for by hugging it.",
        "answers":  [
                        {
                            "text":  "people/kids",
                            "points":  45
                        },
                        {
                            "text":  "pets/dogs",
                            "points":  37
                        },
                        {
                            "text":  "stuffed animals",
                            "points":  10
                        },
                        {
                            "text":  "trees",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170723,
        "question":  "We asked 100 single men... What would you do if the woman you're making love to started texting?",
        "answers":  [
                        {
                            "text":  "leave",
                            "points":  44
                        },
                        {
                            "text":  "keep going",
                            "points":  39
                        },
                        {
                            "text":  "get mad",
                            "points":  9
                        },
                        {
                            "text":  "text her/\"hello?\"",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170724,
        "question":  "We asked 100 women... Name something you need to throw a pity party.",
        "answers":  [
                        {
                            "text":  "ice cream/food",
                            "points":  36
                        },
                        {
                            "text":  "wine/booze",
                            "points":  33
                        },
                        {
                            "text":  "a reason/breakup",
                            "points":  19
                        },
                        {
                            "text":  "kleenex/tears",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  170725,
        "question":  "Name a place where women are excited and men are bored.",
        "answers":  [
                        {
                            "text":  "mall/store",
                            "points":  82
                        },
                        {
                            "text":  "beauty salon",
                            "points":  6
                        },
                        {
                            "text":  "baby shower",
                            "points":  4
                        },
                        {
                            "text":  "male strip joint",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170726,
        "question":  "Besides a dog, name an animal that someone might have for emotional support.",
        "answers":  [
                        {
                            "text":  "cat",
                            "points":  82
                        },
                        {
                            "text":  "bird/parrot",
                            "points":  4
                        },
                        {
                            "text":  "monkey/chimp",
                            "points":  4
                        },
                        {
                            "text":  "pig",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170727,
        "question":  "Name something some men are amazed to see a woman fix by herself.",
        "answers":  [
                        {
                            "text":  "flat tire/car",
                            "points":  78
                        },
                        {
                            "text":  "toilet/plumbing",
                            "points":  12
                        },
                        {
                            "text":  "hair/beehive updo",
                            "points":  2
                        },
                        {
                            "text":  "meal",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170728,
        "question":  "Name something people shop around for a really good pair of.",
        "answers":  [
                        {
                            "text":  "shoes/sneakers",
                            "points":  77
                        },
                        {
                            "text":  "jeans",
                            "points":  7
                        },
                        {
                            "text":  "glasses/shades",
                            "points":  7
                        },
                        {
                            "text":  "boobs/implants",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170729,
        "question":  "Fill in the blank (and you must match exactly): Shut your ______.",
        "answers":  [
                        {
                            "text":  "mouth",
                            "points":  74
                        },
                        {
                            "text":  "trap",
                            "points":  8
                        },
                        {
                            "text":  "face",
                            "points":  7
                        },
                        {
                            "text":  "pie hole",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170730,
        "question":  "Name something a man might spend a lot of money on just to impress a first date.",
        "answers":  [
                        {
                            "text":  "dinner/meal",
                            "points":  72
                        },
                        {
                            "text":  "clothes/suit",
                            "points":  11
                        },
                        {
                            "text":  "flowers",
                            "points":  7
                        },
                        {
                            "text":  "car/limo",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170731,
        "question":  "Give me a word that rhymes with \"nanny.\"",
        "answers":  [
                        {
                            "text":  "fanny",
                            "points":  71
                        },
                        {
                            "text":  "granny",
                            "points":  9
                        },
                        {
                            "text":  "canny/uncanny",
                            "points":  7
                        },
                        {
                            "text":  "danny",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  170732,
        "question":  "We asked 100 single women... Be honest -- if you had to pay for a date, where would you take a man?",
        "answers":  [
                        {
                            "text":  "eatery/fast food",
                            "points":  70
                        },
                        {
                            "text":  "hiking",
                            "points":  10
                        },
                        {
                            "text":  "movies",
                            "points":  10
                        },
                        {
                            "text":  "bowling",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170733,
        "question":  "Many people have a former what?",
        "answers":  [
                        {
                            "text":  "lover/spouse",
                            "points":  61
                        },
                        {
                            "text":  "job/boss",
                            "points":  21
                        },
                        {
                            "text":  "life",
                            "points":  7
                        },
                        {
                            "text":  "friend",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170734,
        "question":  "When someone says, \"I'm just going to have one,\" they mean one what?",
        "answers":  [
                        {
                            "text":  "drink/beer",
                            "points":  60
                        },
                        {
                            "text":  "cookie/food",
                            "points":  25
                        },
                        {
                            "text":  "child",
                            "points":  5
                        },
                        {
                            "text":  "mate/spouse",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170735,
        "question":  "Name something people like about Whoopi Goldberg.",
        "answers":  [
                        {
                            "text":  "she's funny",
                            "points":  59
                        },
                        {
                            "text":  "her opinions",
                            "points":  14
                        },
                        {
                            "text":  "good actress",
                            "points":  13
                        },
                        {
                            "text":  "her hair/dreads",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  170736,
        "question":  "We asked 100 married men... Name something you'd love to have two of but your wife won't let you.",
        "answers":  [
                        {
                            "text":  "wives/lovers",
                            "points":  58
                        },
                        {
                            "text":  "cars/trucks",
                            "points":  30
                        },
                        {
                            "text":  "game consoles",
                            "points":  4
                        },
                        {
                            "text":  "motorcycles",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170737,
        "question":  "Name something you'd worry about if you lived on an iceberg.",
        "answers":  [
                        {
                            "text":  "it melting/sun",
                            "points":  54
                        },
                        {
                            "text":  "freezin' my nips off",
                            "points":  33
                        },
                        {
                            "text":  "falling/slipping",
                            "points":  4
                        },
                        {
                            "text":  "ship hitting it",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170738,
        "question":  "If Tarzan had a Twitter account, name something he'd tweet about.",
        "answers":  [
                        {
                            "text":  "jane",
                            "points":  54
                        },
                        {
                            "text":  "swinging/vines",
                            "points":  22
                        },
                        {
                            "text":  "cheeta/animals",
                            "points":  16
                        },
                        {
                            "text":  "his loincloth",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170739,
        "question":  "Name a reason it's good to be Taylor Swift.",
        "answers":  [
                        {
                            "text":  "she's ballin'",
                            "points":  45
                        },
                        {
                            "text":  "she's a hottie",
                            "points":  21
                        },
                        {
                            "text":  "famous/popular",
                            "points":  19
                        },
                        {
                            "text":  "she's young",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  170740,
        "question":  "We asked 100 married women... Tell me something you hope you do just like your mom.",
        "answers":  [
                        {
                            "text":  "cook",
                            "points":  40
                        },
                        {
                            "text":  "raise my kids",
                            "points":  40
                        },
                        {
                            "text":  "stay married",
                            "points":  9
                        },
                        {
                            "text":  "act/look youthful",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170741,
        "question":  "Name something around the house that you empty.",
        "answers":  [
                        {
                            "text":  "the trash",
                            "points":  86
                        },
                        {
                            "text":  "washer/dryer",
                            "points":  3
                        },
                        {
                            "text":  "dishwasher",
                            "points":  2
                        },
                        {
                            "text":  "ashtray",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170742,
        "question":  "When someone talks about \"the king,\" who might they be referring to?",
        "answers":  [
                        {
                            "text":  "elvis presley",
                            "points":  81
                        },
                        {
                            "text":  "god/jesus",
                            "points":  7
                        },
                        {
                            "text":  "martin l. king, jr.",
                            "points":  3
                        },
                        {
                            "text":  "the burger king",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170743,
        "question":  "We asked 100 single men... The date ended early because she wouldn't stop doing what?",
        "answers":  [
                        {
                            "text":  "talk/complain/yell'g",
                            "points":  76
                        },
                        {
                            "text":  "texting",
                            "points":  11
                        },
                        {
                            "text":  "eating",
                            "points":  4
                        },
                        {
                            "text":  "dancing",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170744,
        "question":  "Name something you wouldn't want to sneak up on you.",
        "answers":  [
                        {
                            "text":  "animal/bug",
                            "points":  74
                        },
                        {
                            "text":  "person/mugger",
                            "points":  11
                        },
                        {
                            "text":  "monster/ghost",
                            "points":  4
                        },
                        {
                            "text":  "age/time",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170745,
        "question":  "Name something a practical joker might do to the firefighters' pole.",
        "answers":  [
                        {
                            "text":  "grease/butter it",
                            "points":  72
                        },
                        {
                            "text":  "pole dance",
                            "points":  12
                        },
                        {
                            "text":  "put glue on it",
                            "points":  7
                        },
                        {
                            "text":  "slide down it",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170746,
        "question":  "Name something a dog might want to take with him if he runs away from home.",
        "answers":  [
                        {
                            "text":  "bone/food/treat",
                            "points":  68
                        },
                        {
                            "text":  "toy/ball",
                            "points":  12
                        },
                        {
                            "text":  "dog bowl",
                            "points":  7
                        },
                        {
                            "text":  "bed/blanket",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  170747,
        "question":  "If you had to stay in a sleazy motel, name something from home you might bring with you.",
        "answers":  [
                        {
                            "text":  "pillow/bedding",
                            "points":  67
                        },
                        {
                            "text":  "lysol/bleach",
                            "points":  15
                        },
                        {
                            "text":  "bug spray",
                            "points":  7
                        },
                        {
                            "text":  "gun/weapon",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170748,
        "question":  "Name something everyone gets bitten by sooner or later.",
        "answers":  [
                        {
                            "text":  "insect/bug",
                            "points":  63
                        },
                        {
                            "text":  "the love bug",
                            "points":  20
                        },
                        {
                            "text":  "flu bug/illness",
                            "points":  8
                        },
                        {
                            "text":  "dog",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170749,
        "question":  "Name a place that people say they've seen a ghost.",
        "answers":  [
                        {
                            "text":  "house/castle",
                            "points":  51
                        },
                        {
                            "text":  "cemetery",
                            "points":  30
                        },
                        {
                            "text":  "hospital/asylum",
                            "points":  8
                        },
                        {
                            "text":  "hotel",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170750,
        "question":  "Name a bad occupation for someone who is afraid of water.",
        "answers":  [
                        {
                            "text":  "lifeguard",
                            "points":  51
                        },
                        {
                            "text":  "sailor/captain",
                            "points":  17
                        },
                        {
                            "text":  "diver",
                            "points":  17
                        },
                        {
                            "text":  "fisherman",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  170751,
        "question":  "We asked 100 married men... My wife likes me so much better after I've put on what?",
        "answers":  [
                        {
                            "text":  "clothes/shoes",
                            "points":  42
                        },
                        {
                            "text":  "cologne/aftershave",
                            "points":  30
                        },
                        {
                            "text":  "deodorant",
                            "points":  18
                        },
                        {
                            "text":  "a ribbed condom",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170752,
        "question":  "We asked 100 married women... Name something your husband is usually holding when he's ignoring you.",
        "answers":  [
                        {
                            "text":  "tv remote",
                            "points":  41
                        },
                        {
                            "text":  "phone",
                            "points":  39
                        },
                        {
                            "text":  "game controller",
                            "points":  8
                        },
                        {
                            "text":  "the dog/pet",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170753,
        "question":  "Name something of yours that seems to be shrinking.",
        "answers":  [
                        {
                            "text":  "money/wallet",
                            "points":  41
                        },
                        {
                            "text":  "my body",
                            "points":  34
                        },
                        {
                            "text":  "mind/memory",
                            "points":  13
                        },
                        {
                            "text":  "clothes",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170754,
        "question":  "We asked 100 men... If you're looking for a new love, try getting rid of your old what?",
        "answers":  [
                        {
                            "text":  "love/lady/hag",
                            "points":  41
                        },
                        {
                            "text":  "habits",
                            "points":  31
                        },
                        {
                            "text":  "clothes/moccasins",
                            "points":  15
                        },
                        {
                            "text":  "car",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  170755,
        "question":  "Name a reason a man and a woman might keep their romance a secret.",
        "answers":  [
                        {
                            "text":  "having an affair",
                            "points":  75
                        },
                        {
                            "text":  "work together",
                            "points":  9
                        },
                        {
                            "text":  "parents object",
                            "points":  6
                        },
                        {
                            "text":  "keep it exciting",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170756,
        "question":  "Give me a word starting with W that might describe a kiss.",
        "answers":  [
                        {
                            "text":  "wet",
                            "points":  73
                        },
                        {
                            "text":  "wow",
                            "points":  9
                        },
                        {
                            "text":  "wonderful",
                            "points":  8
                        },
                        {
                            "text":  "wild",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170757,
        "question":  "Give me another word for \"gigantic.\"",
        "answers":  [
                        {
                            "text":  "huge/yuuuge",
                            "points":  69
                        },
                        {
                            "text":  "enormous",
                            "points":  11
                        },
                        {
                            "text":  "big",
                            "points":  8
                        },
                        {
                            "text":  "humongous",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170758,
        "question":  "We asked 100 married men... If your wife is smiling, what might you worry she's getting ready to do?",
        "answers":  [
                        {
                            "text":  "shop till she drops",
                            "points":  68
                        },
                        {
                            "text":  "ask for something/favor",
                            "points":  15
                        },
                        {
                            "text":  "yell at me",
                            "points":  6
                        },
                        {
                            "text":  "tickle me",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170759,
        "question":  "The good news: I stopped smoking. The bad news: Now I'm doing too much what?",
        "answers":  [
                        {
                            "text":  "eating",
                            "points":  68
                        },
                        {
                            "text":  "drinking",
                            "points":  13
                        },
                        {
                            "text":  "crack/drugs",
                            "points":  7
                        },
                        {
                            "text":  "fidgeting/pacing",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170760,
        "question":  "Fill in the blank with one specific word: ______ your own business.",
        "answers":  [
                        {
                            "text":  "mind",
                            "points":  62
                        },
                        {
                            "text":  "own",
                            "points":  16
                        },
                        {
                            "text":  "start",
                            "points":  12
                        },
                        {
                            "text":  "run",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170761,
        "question":  "Name something a fly likes to land on.",
        "answers":  [
                        {
                            "text":  "food/honey",
                            "points":  60
                        },
                        {
                            "text":  "poop",
                            "points":  18
                        },
                        {
                            "text":  "people",
                            "points":  11
                        },
                        {
                            "text":  "wall/ceiling",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170762,
        "question":  "We asked 100 women... Fill in the blank: I love firemen with big what?",
        "answers":  [
                        {
                            "text":  "hoses",
                            "points":  58
                        },
                        {
                            "text":  "trucks",
                            "points":  16
                        },
                        {
                            "text":  "biceps",
                            "points":  12
                        },
                        {
                            "text":  "ladders",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  170763,
        "question":  "Name a reason you might not recognize your high school sweetheart.",
        "answers":  [
                        {
                            "text":  "got fat/skinny",
                            "points":  52
                        },
                        {
                            "text":  "old/wrinkly/gray",
                            "points":  20
                        },
                        {
                            "text":  "went bald",
                            "points":  15
                        },
                        {
                            "text":  "surgery/sex change",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170764,
        "question":  "Name something a female detective might find out about a man before she dates him.",
        "answers":  [
                        {
                            "text":  "criminal record",
                            "points":  46
                        },
                        {
                            "text":  "love life/exes",
                            "points":  25
                        },
                        {
                            "text":  "income/credit score",
                            "points":  18
                        },
                        {
                            "text":  "occupation",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170765,
        "question":  "Name a U.S. president who would have made a good Calvin Klein underwear model.",
        "answers":  [
                        {
                            "text":  "john f. kennedy",
                            "points":  42
                        },
                        {
                            "text":  "barack obama",
                            "points":  37
                        },
                        {
                            "text":  "bill clinton",
                            "points":  7
                        },
                        {
                            "text":  "ronald reagan",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  170766,
        "question":  "Fill in the blank: Olive Oyl said, \"I thought I was in love with Popeye until I saw him ______ over the side of the boat.\"",
        "answers":  [
                        {
                            "text":  "puke",
                            "points":  40
                        },
                        {
                            "text":  "plop-plop/whiz-whiz",
                            "points":  25
                        },
                        {
                            "text":  "fall/jump",
                            "points":  21
                        },
                        {
                            "text":  "spit",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  170767,
        "question":  "Name something that could have dire circumstances if you don't show up for it.",
        "answers":  [
                        {
                            "text":  "work",
                            "points":  31
                        },
                        {
                            "text":  "wedding/my own",
                            "points":  28
                        },
                        {
                            "text":  "my court date/trial",
                            "points":  24
                        },
                        {
                            "text":  "jury duty",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  170768,
        "question":  "Tell me something people ask you to smell.",
        "answers":  [
                        {
                            "text":  "perfume/cologne",
                            "points":  30
                        },
                        {
                            "text":  "food/milk",
                            "points":  30
                        },
                        {
                            "text":  "flowers/rose",
                            "points":  27
                        },
                        {
                            "text":  "their finger",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170769,
        "question":  "Name something people should keep shut most of the time.",
        "answers":  [
                        {
                            "text":  "mouth/fat trap",
                            "points":  74
                        },
                        {
                            "text":  "doors/bathroom",
                            "points":  11
                        },
                        {
                            "text":  "the fridge",
                            "points":  3
                        },
                        {
                            "text":  "their wallets",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170770,
        "question":  "After Thanksgiving, what's the biggest eating day of the year?",
        "answers":  [
                        {
                            "text":  "christmas/eve",
                            "points":  70
                        },
                        {
                            "text":  "halloween",
                            "points":  7
                        },
                        {
                            "text":  "super bowl sunday",
                            "points":  7
                        },
                        {
                            "text":  "new year's/eve",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  170771,
        "question":  "Name something you might find on the floor of a men's locker room.",
        "answers":  [
                        {
                            "text":  "clothes/jockstrap",
                            "points":  63
                        },
                        {
                            "text":  "towels",
                            "points":  22
                        },
                        {
                            "text":  "deodorant",
                            "points":  3
                        },
                        {
                            "text":  "germs/fungus",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170772,
        "question":  "Name an animal with spots.",
        "answers":  [
                        {
                            "text":  "leopard",
                            "points":  61
                        },
                        {
                            "text":  "dalmatian/dog",
                            "points":  17
                        },
                        {
                            "text":  "cheetah",
                            "points":  9
                        },
                        {
                            "text":  "giraffe",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170773,
        "question":  "Name something grandma might do behind grandpa's back because he can't hear her.",
        "answers":  [
                        {
                            "text":  "talk/mock/cuss out",
                            "points":  58
                        },
                        {
                            "text":  "machine gun fart",
                            "points":  27
                        },
                        {
                            "text":  "burp",
                            "points":  3
                        },
                        {
                            "text":  "cheat/tongue milkman",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170774,
        "question":  "Name something of yours that is starting to wear out.",
        "answers":  [
                        {
                            "text":  "clothes/shoes",
                            "points":  55
                        },
                        {
                            "text":  "body",
                            "points":  19
                        },
                        {
                            "text":  "car/truck",
                            "points":  10
                        },
                        {
                            "text":  "patience",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  170775,
        "question":  "Name something your spouse had better not do when you're telling a joke.",
        "answers":  [
                        {
                            "text":  "interrupt/spoil",
                            "points":  54
                        },
                        {
                            "text":  "ignore me/leave",
                            "points":  22
                        },
                        {
                            "text":  "cry",
                            "points":  8
                        },
                        {
                            "text":  "roll eyes/scowl",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  170776,
        "question":  "An ugly man might tell a pretty woman, \"I've got an ugly face, but I've got a great\" what?",
        "answers":  [
                        {
                            "text":  "personality/humor",
                            "points":  52
                        },
                        {
                            "text":  "bod/bone ranger",
                            "points":  24
                        },
                        {
                            "text":  "bank acct./wallet",
                            "points":  9
                        },
                        {
                            "text":  "heart",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  170777,
        "question":  "We asked 100 women... Name something you would never let your mother pick out for you.",
        "answers":  [
                        {
                            "text":  "my honey",
                            "points":  51
                        },
                        {
                            "text":  "my clothes/lingerie",
                            "points":  36
                        },
                        {
                            "text":  "my hairstyle",
                            "points":  2
                        },
                        {
                            "text":  "my friends",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170778,
        "question":  "Fill in the blank: If a man is a good liar, he'd make a great what?",
        "answers":  [
                        {
                            "text":  "politician",
                            "points":  51
                        },
                        {
                            "text":  "lawyer",
                            "points":  27
                        },
                        {
                            "text":  "salesman",
                            "points":  9
                        },
                        {
                            "text":  "actor/comedian",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170779,
        "question":  "Name something that a person might try to dig up.",
        "answers":  [
                        {
                            "text":  "treasure/money",
                            "points":  44
                        },
                        {
                            "text":  "weeds/plant",
                            "points":  22
                        },
                        {
                            "text":  "grave/skeleton",
                            "points":  13
                        },
                        {
                            "text":  "info/the past/\"dirt\"",
                            "points":  12
                        }
                    ]
    },
    {
        "id":  170780,
        "question":  "Give me a word that rhymes with \"twerk.\"",
        "answers":  [
                        {
                            "text":  "work",
                            "points":  42
                        },
                        {
                            "text":  "jerk",
                            "points":  39
                        },
                        {
                            "text":  "lurk",
                            "points":  5
                        },
                        {
                            "text":  "berserk",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170781,
        "question":  "Name something you might make out of coconuts if you were stranded on a deserted island.",
        "answers":  [
                        {
                            "text":  "bra/clothes",
                            "points":  38
                        },
                        {
                            "text":  "cups/bowls",
                            "points":  27
                        },
                        {
                            "text":  "food/drinks",
                            "points":  23
                        },
                        {
                            "text":  "shelter/roof",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170782,
        "question":  "It's hard to talk when you have what in your mouth?",
        "answers":  [
                        {
                            "text":  "food/candy",
                            "points":  78
                        },
                        {
                            "text":  "drink",
                            "points":  6
                        },
                        {
                            "text":  "a foot/\"your foot\"",
                            "points":  3
                        },
                        {
                            "text":  "toothbrush/paste",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170783,
        "question":  "Name an occupation that would give you the best chance of getting into heaven.",
        "answers":  [
                        {
                            "text":  "clergy/monk/nun",
                            "points":  69
                        },
                        {
                            "text":  "doctor",
                            "points":  13
                        },
                        {
                            "text":  "nurse",
                            "points":  5
                        },
                        {
                            "text":  "teacher",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170784,
        "question":  "Name something that gets ridden hard.",
        "answers":  [
                        {
                            "text":  "horse",
                            "points":  64
                        },
                        {
                            "text":  "motorcycle/dirt bike",
                            "points":  12
                        },
                        {
                            "text":  "bicycle",
                            "points":  10
                        },
                        {
                            "text":  "bull/mechanical",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170785,
        "question":  "Name something the boss brags about buying that really annoys his employees.",
        "answers":  [
                        {
                            "text":  "car/new tesla",
                            "points":  62
                        },
                        {
                            "text":  "boat",
                            "points":  15
                        },
                        {
                            "text":  "house/beach house",
                            "points":  10
                        },
                        {
                            "text":  "plane",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170786,
        "question":  "We asked 100 women... Fill in the blank: You really don't know a guy until you ______ with him.",
        "answers":  [
                        {
                            "text":  "live",
                            "points":  58
                        },
                        {
                            "text":  "sleep/have sex",
                            "points":  18
                        },
                        {
                            "text":  "travel/camp",
                            "points":  10
                        },
                        {
                            "text":  "eat",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170787,
        "question":  "Name a specific beverage people mix with alcohol.",
        "answers":  [
                        {
                            "text":  "coke/pepsi",
                            "points":  55
                        },
                        {
                            "text":  "orange juice",
                            "points":  21
                        },
                        {
                            "text":  "tonic water",
                            "points":  7
                        },
                        {
                            "text":  "7up/sprite",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  170788,
        "question":  "We asked 100 married men... If you didn't have a family, name something you'd splurge on just for yourself.",
        "answers":  [
                        {
                            "text":  "3 porsches & a truck",
                            "points":  55
                        },
                        {
                            "text":  "travel",
                            "points":  20
                        },
                        {
                            "text":  "clothes",
                            "points":  10
                        },
                        {
                            "text":  "video games",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170789,
        "question":  "Name a musical instrument on which people play the blues.",
        "answers":  [
                        {
                            "text":  "sax",
                            "points":  53
                        },
                        {
                            "text":  "guitar",
                            "points":  23
                        },
                        {
                            "text":  "harmonica",
                            "points":  7
                        },
                        {
                            "text":  "trumpet",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  170790,
        "question":  "Fill in the blank: I laughed until I what?",
        "answers":  [
                        {
                            "text":  "cried",
                            "points":  51
                        },
                        {
                            "text":  "peed myself",
                            "points":  30
                        },
                        {
                            "text":  "farted",
                            "points":  5
                        },
                        {
                            "text":  "fell/dropped",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170791,
        "question":  "Name something you need if you want to go places.",
        "answers":  [
                        {
                            "text":  "a car/uber",
                            "points":  48
                        },
                        {
                            "text":  "money/cash",
                            "points":  35
                        },
                        {
                            "text":  "passport",
                            "points":  4
                        },
                        {
                            "text":  "ambition/motivation",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170792,
        "question":  "Name something a man dribbles on.",
        "answers":  [
                        {
                            "text":  "basketball court",
                            "points":  46
                        },
                        {
                            "text":  "his chin/face",
                            "points":  20
                        },
                        {
                            "text":  "his duds/pants",
                            "points":  19
                        },
                        {
                            "text":  "napkin",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170793,
        "question":  "Instead of church, name a place some men prefer to commune with God.",
        "answers":  [
                        {
                            "text":  "nature/fishin' hole",
                            "points":  44
                        },
                        {
                            "text":  "home/on crapper",
                            "points":  33
                        },
                        {
                            "text":  "bar/nightclub",
                            "points":  9
                        },
                        {
                            "text":  "car/back of cop car",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170794,
        "question":  "Name someplace a suspicious wife might put a hidden camera.",
        "answers":  [
                        {
                            "text":  "bedroom",
                            "points":  42
                        },
                        {
                            "text":  "hubby's car",
                            "points":  33
                        },
                        {
                            "text":  "hubby's office",
                            "points":  9
                        },
                        {
                            "text":  "bathroom/toilet bowl",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  170795,
        "question":  "Fill in the blank: The key to ______.",
        "answers":  [
                        {
                            "text":  "happiness",
                            "points":  34
                        },
                        {
                            "text":  "success",
                            "points":  30
                        },
                        {
                            "text":  "my/your heart",
                            "points":  19
                        },
                        {
                            "text":  "life/long life",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  170796,
        "question":  "Name something you always make sure to keep covered.",
        "answers":  [
                        {
                            "text":  "my body/face",
                            "points":  77
                        },
                        {
                            "text":  "food/milk",
                            "points":  7
                        },
                        {
                            "text":  "my bed",
                            "points":  3
                        },
                        {
                            "text":  "my car",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  170797,
        "question":  "Name something you might find in your restaurant food that came off your waitress.",
        "answers":  [
                        {
                            "text":  "hair/eyelashes",
                            "points":  70
                        },
                        {
                            "text":  "jewelry",
                            "points":  11
                        },
                        {
                            "text":  "fingernail",
                            "points":  4
                        },
                        {
                            "text":  "her name tag",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170798,
        "question":  "Name something a kid goes downhill on.",
        "answers":  [
                        {
                            "text":  "sled/sleigh",
                            "points":  62
                        },
                        {
                            "text":  "bike",
                            "points":  19
                        },
                        {
                            "text":  "a hill/slope...duh!",
                            "points":  4
                        },
                        {
                            "text":  "skateboard",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170799,
        "question":  "Name a part of your body that's sharp.",
        "answers":  [
                        {
                            "text":  "my nails",
                            "points":  61
                        },
                        {
                            "text":  "my mind/brain",
                            "points":  13
                        },
                        {
                            "text":  "my teeth",
                            "points":  9
                        },
                        {
                            "text":  "my tongue",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  170800,
        "question":  "Fill in the blank: Cherry ______.",
        "answers":  [
                        {
                            "text":  "cherry pie",
                            "points":  59
                        },
                        {
                            "text":  "cherry coke/soda",
                            "points":  19
                        },
                        {
                            "text":  "cherry bomb",
                            "points":  6
                        },
                        {
                            "text":  "cherry blossom",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170801,
        "question":  "We asked 100 women... Name an animal that seems to have better manners than some men you know.",
        "answers":  [
                        {
                            "text":  "dog/st. bernard",
                            "points":  56
                        },
                        {
                            "text":  "cat",
                            "points":  23
                        },
                        {
                            "text":  "monkey/ape",
                            "points":  6
                        },
                        {
                            "text":  "pig",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170802,
        "question":  "Name a steamy place to make love.",
        "answers":  [
                        {
                            "text":  "spa/hot tub/sauna",
                            "points":  48
                        },
                        {
                            "text":  "shower/bathroom",
                            "points":  29
                        },
                        {
                            "text":  "car",
                            "points":  7
                        },
                        {
                            "text":  "tropical beach",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170803,
        "question":  "Name a reason you might dig a hole in your backyard.",
        "answers":  [
                        {
                            "text":  "planting",
                            "points":  45
                        },
                        {
                            "text":  "bury body/pet",
                            "points":  23
                        },
                        {
                            "text":  "hide/find treasure",
                            "points":  12
                        },
                        {
                            "text":  "put a pool in",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  170804,
        "question":  "Name something a woman can carry in her cleavage instead of her purse.",
        "answers":  [
                        {
                            "text":  "cash/wallet/visa",
                            "points":  45
                        },
                        {
                            "text":  "phone",
                            "points":  21
                        },
                        {
                            "text":  "lipstick",
                            "points":  13
                        },
                        {
                            "text":  "tissue/hanky",
                            "points":  10
                        }
                    ]
    },
    {
        "id":  170805,
        "question":  "We asked 100 men... Name something you don't want unless it's big.",
        "answers":  [
                        {
                            "text":  "money/winnings",
                            "points":  44
                        },
                        {
                            "text":  "tv",
                            "points":  25
                        },
                        {
                            "text":  "pair of knockers",
                            "points":  12
                        },
                        {
                            "text":  "meal/food",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  170806,
        "question":  "Fill in the blank: Please don't pull my what?",
        "answers":  [
                        {
                            "text":  "hair/chest fur",
                            "points":  39
                        },
                        {
                            "text":  "leg",
                            "points":  29
                        },
                        {
                            "text":  "chain",
                            "points":  15
                        },
                        {
                            "text":  "finger",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  170807,
        "question":  "Fill in the blank: I only have room for one ______ in my life.",
        "answers":  [
                        {
                            "text":  "mate/lover",
                            "points":  79
                        },
                        {
                            "text":  "crisis/headache",
                            "points":  3
                        },
                        {
                            "text":  "child",
                            "points":  3
                        },
                        {
                            "text":  "boss/job",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170808,
        "question":  "Besides Spain, tell me another country where people speak Spanish.",
        "answers":  [
                        {
                            "text":  "mexico",
                            "points":  77
                        },
                        {
                            "text":  "cuba",
                            "points":  4
                        },
                        {
                            "text":  "usa",
                            "points":  4
                        },
                        {
                            "text":  "colombia",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170809,
        "question":  "Name something you hope is as beautiful on the inside as the outside.",
        "answers":  [
                        {
                            "text":  "a person",
                            "points":  65
                        },
                        {
                            "text":  "a house",
                            "points":  10
                        },
                        {
                            "text":  "food/fruit",
                            "points":  10
                        },
                        {
                            "text":  "a car/truck",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170810,
        "question":  "Name an occupation that requires a steady hand.",
        "answers":  [
                        {
                            "text":  "surgeon/dentist",
                            "points":  63
                        },
                        {
                            "text":  "artist/tattoo",
                            "points":  13
                        },
                        {
                            "text":  "weld/construction",
                            "points":  9
                        },
                        {
                            "text":  "jeweler",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170811,
        "question":  "If time travel were possible, what former president would you love to see give a speech live?",
        "answers":  [
                        {
                            "text":  "abe lincoln",
                            "points":  46
                        },
                        {
                            "text":  "john f. kennedy",
                            "points":  24
                        },
                        {
                            "text":  "george washington",
                            "points":  12
                        },
                        {
                            "text":  "ronald reagan",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  170812,
        "question":  "Name something you shouldn't bother running after; another one will come along.",
        "answers":  [
                        {
                            "text":  "lover/mate/ex",
                            "points":  45
                        },
                        {
                            "text":  "bus",
                            "points":  27
                        },
                        {
                            "text":  "taxi",
                            "points":  12
                        },
                        {
                            "text":  "sale/bargain",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170813,
        "question":  "Name the worst day for a man to dump his fiancée.",
        "answers":  [
                        {
                            "text":  "valentine's day",
                            "points":  43
                        },
                        {
                            "text":  "wedding day",
                            "points":  22
                        },
                        {
                            "text":  "birthday",
                            "points":  18
                        },
                        {
                            "text":  "friday",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170814,
        "question":  "What's another word for \"tattle\"?",
        "answers":  [
                        {
                            "text":  "snitch",
                            "points":  39
                        },
                        {
                            "text":  "tell",
                            "points":  24
                        },
                        {
                            "text":  "rat",
                            "points":  20
                        },
                        {
                            "text":  "gossip",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170815,
        "question":  "Name something of a vampire's that his wife might make fun of.",
        "answers":  [
                        {
                            "text":  "his fangs/teeth",
                            "points":  70
                        },
                        {
                            "text":  "his cape",
                            "points":  7
                        },
                        {
                            "text":  "bloodsucking",
                            "points":  5
                        },
                        {
                            "text":  "pointy hairline",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170816,
        "question":  "Name something you cook on a griddle.",
        "answers":  [
                        {
                            "text":  "pancakes",
                            "points":  66
                        },
                        {
                            "text":  "hamburgers",
                            "points":  11
                        },
                        {
                            "text":  "bacon",
                            "points":  5
                        },
                        {
                            "text":  "steaks",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170817,
        "question":  "Fill in the blank: Foot in ______.",
        "answers":  [
                        {
                            "text":  "mouth",
                            "points":  64
                        },
                        {
                            "text":  "the door",
                            "points":  10
                        },
                        {
                            "text":  "shoe/boot",
                            "points":  9
                        },
                        {
                            "text":  "the grave",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170818,
        "question":  "Bet you can't eat just one what?",
        "answers":  [
                        {
                            "text":  "chip/lay's",
                            "points":  63
                        },
                        {
                            "text":  "cookie",
                            "points":  14
                        },
                        {
                            "text":  "candy/m&m",
                            "points":  7
                        },
                        {
                            "text":  "slice of pizza",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170819,
        "question":  "Pirates love their what?",
        "answers":  [
                        {
                            "text":  "booty/gold",
                            "points":  57
                        },
                        {
                            "text":  "rum/booze",
                            "points":  13
                        },
                        {
                            "text":  "ships",
                            "points":  11
                        },
                        {
                            "text":  "swords/knives",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  170820,
        "question":  "Name something you always handle with care when it's brand new.",
        "answers":  [
                        {
                            "text":  "car/vehicle",
                            "points":  54
                        },
                        {
                            "text":  "baby",
                            "points":  21
                        },
                        {
                            "text":  "phone",
                            "points":  8
                        },
                        {
                            "text":  "dishes/china",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170821,
        "question":  "Name a holiday or occasion that can make people feel like losers.",
        "answers":  [
                        {
                            "text":  "valentine's day",
                            "points":  54
                        },
                        {
                            "text":  "christmas",
                            "points":  19
                        },
                        {
                            "text":  "birthday",
                            "points":  8
                        },
                        {
                            "text":  "anniversary",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  170822,
        "question":  "Name something that might be nipping at your toes.",
        "answers":  [
                        {
                            "text":  "dog/puppy",
                            "points":  50
                        },
                        {
                            "text":  "the cold",
                            "points":  17
                        },
                        {
                            "text":  "cat/kitten",
                            "points":  12
                        },
                        {
                            "text":  "fish",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  170823,
        "question":  "Name a word that rhymes with \"tweet.\"",
        "answers":  [
                        {
                            "text":  "sweet",
                            "points":  63
                        },
                        {
                            "text":  "feet",
                            "points":  10
                        },
                        {
                            "text":  "beat/beet",
                            "points":  8
                        },
                        {
                            "text":  "seat",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170824,
        "question":  "Fill in the blank: Caught in the ______.",
        "answers":  [
                        {
                            "text":  "act",
                            "points":  62
                        },
                        {
                            "text":  "middle",
                            "points":  11
                        },
                        {
                            "text":  "crossfire/fire",
                            "points":  8
                        },
                        {
                            "text":  "rain/storm",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170825,
        "question":  "Fill in the blank: Social ______.",
        "answers":  [
                        {
                            "text":  "social security",
                            "points":  61
                        },
                        {
                            "text":  "social media",
                            "points":  17
                        },
                        {
                            "text":  "social worker",
                            "points":  4
                        },
                        {
                            "text":  "social studies",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170826,
        "question":  "Name something you know exists even if you can't see it.",
        "answers":  [
                        {
                            "text":  "god/heaven",
                            "points":  46
                        },
                        {
                            "text":  "air/wind",
                            "points":  31
                        },
                        {
                            "text":  "ghost that taunts me",
                            "points":  5
                        },
                        {
                            "text":  "love",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170827,
        "question":  "Name something in a town that might be crooked.",
        "answers":  [
                        {
                            "text":  "mayor/gov't",
                            "points":  46
                        },
                        {
                            "text":  "the roads",
                            "points":  20
                        },
                        {
                            "text":  "police/sheriff",
                            "points":  14
                        },
                        {
                            "text":  "a sign/street sign",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  170828,
        "question":  "We asked 100 women... Name something you carry around all day.",
        "answers":  [
                        {
                            "text":  "phone",
                            "points":  44
                        },
                        {
                            "text":  "purse",
                            "points":  31
                        },
                        {
                            "text":  "me/my body",
                            "points":  8
                        },
                        {
                            "text":  "bottled water",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170829,
        "question":  "Name someone who's got you right where they want you.",
        "answers":  [
                        {
                            "text":  "my boo/spouse",
                            "points":  39
                        },
                        {
                            "text":  "my kids/grandkids",
                            "points":  35
                        },
                        {
                            "text":  "my boss",
                            "points":  6
                        },
                        {
                            "text":  "irs/uncle sam",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  170830,
        "question":  "Name an occupation a woman might have that starts with a D.",
        "answers":  [
                        {
                            "text":  "doctor",
                            "points":  37
                        },
                        {
                            "text":  "dentist",
                            "points":  28
                        },
                        {
                            "text":  "dancer",
                            "points":  17
                        },
                        {
                            "text":  "designer",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170831,
        "question":  "We asked 100 men... When you have a problem, who's the best listener?",
        "answers":  [
                        {
                            "text":  "my spouse/mate",
                            "points":  30
                        },
                        {
                            "text":  "my mommy",
                            "points":  30
                        },
                        {
                            "text":  "my best bud",
                            "points":  16
                        },
                        {
                            "text":  "the bartender",
                            "points":  10
                        }
                    ]
    },
    {
        "id":  170832,
        "question":  "Name something of a woman's that might be heart shaped.",
        "answers":  [
                        {
                            "text":  "jewelry",
                            "points":  57
                        },
                        {
                            "text":  "lips/face/nose",
                            "points":  14
                        },
                        {
                            "text":  "that booty!",
                            "points":  8
                        },
                        {
                            "text":  "purse",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  170833,
        "question":  "Name something some people are afraid to get on.",
        "answers":  [
                        {
                            "text":  "amusement ride",
                            "points":  48
                        },
                        {
                            "text":  "airplane",
                            "points":  26
                        },
                        {
                            "text":  "horse",
                            "points":  6
                        },
                        {
                            "text":  "elevator",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170834,
        "question":  "Fill in the blank: May I ______ you?",
        "answers":  [
                        {
                            "text":  "help",
                            "points":  41
                        },
                        {
                            "text":  "kiss",
                            "points":  31
                        },
                        {
                            "text":  "hug",
                            "points":  7
                        },
                        {
                            "text":  "call",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  170835,
        "question":  "Fill in the blank: Sweet as what?",
        "answers":  [
                        {
                            "text":  "sweet as pie",
                            "points":  39
                        },
                        {
                            "text":  "sweet as honey",
                            "points":  20
                        },
                        {
                            "text":  "sweet as sugar",
                            "points":  19
                        },
                        {
                            "text":  "sweet as candy",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  170836,
        "question":  "Tell me somewhere or something a person might have just gotten out of.",
        "answers":  [
                        {
                            "text":  "jail/prison",
                            "points":  62
                        },
                        {
                            "text":  "rela'ship/marriage",
                            "points":  9
                        },
                        {
                            "text":  "car",
                            "points":  8
                        },
                        {
                            "text":  "trouble/a jam",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170837,
        "question":  "Name something you should throw out if it has a hole in it.",
        "answers":  [
                        {
                            "text":  "clothes/shoes",
                            "points":  61
                        },
                        {
                            "text":  "bag/trash bag",
                            "points":  11
                        },
                        {
                            "text":  "food/apple",
                            "points":  6
                        },
                        {
                            "text":  "bucket",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  170838,
        "question":  "After a long trip, what can't you wait to do once you get home?",
        "answers":  [
                        {
                            "text":  "sleep/in own bed",
                            "points":  59
                        },
                        {
                            "text":  "whiz/angry dump",
                            "points":  12
                        },
                        {
                            "text":  "shower/bathe",
                            "points":  9
                        },
                        {
                            "text":  "take off shoes",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170839,
        "question":  "Name a place where you're sure to find something rotten.",
        "answers":  [
                        {
                            "text":  "garbage/dump",
                            "points":  55
                        },
                        {
                            "text":  "refrigerator",
                            "points":  20
                        },
                        {
                            "text":  "denmark",
                            "points":  5
                        },
                        {
                            "text":  "grocery store",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170840,
        "question":  "Name the first thing you would do if you woke up in jail.",
        "answers":  [
                        {
                            "text":  "cry/freak out",
                            "points":  50
                        },
                        {
                            "text":  "phone call/lawyer",
                            "points":  22
                        },
                        {
                            "text":  "ask why",
                            "points":  8
                        },
                        {
                            "text":  "pee myself",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170841,
        "question":  "Name something a groom might be holding on his wedding day.",
        "answers":  [
                        {
                            "text":  "the rings",
                            "points":  47
                        },
                        {
                            "text":  "his bride/her hand",
                            "points":  27
                        },
                        {
                            "text":  "his breath",
                            "points":  6
                        },
                        {
                            "text":  "stiff drink",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170842,
        "question":  "If you were a celebrity, you'd have a bigger what?",
        "answers":  [
                        {
                            "text":  "bank acct./paycheck",
                            "points":  40
                        },
                        {
                            "text":  "house",
                            "points":  34
                        },
                        {
                            "text":  "ego/head",
                            "points":  5
                        },
                        {
                            "text":  "fan base/on facebook",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170843,
        "question":  "Name a kind of ball that would be hard to juggle.",
        "answers":  [
                        {
                            "text":  "bowling ball",
                            "points":  38
                        },
                        {
                            "text":  "basketball",
                            "points":  22
                        },
                        {
                            "text":  "football",
                            "points":  19
                        },
                        {
                            "text":  "beach ball",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170844,
        "question":  "Name something a vampire might say he wanted to be buried with.",
        "answers":  [
                        {
                            "text":  "bag o' blood",
                            "points":  51
                        },
                        {
                            "text":  "his cape",
                            "points":  21
                        },
                        {
                            "text":  "mate/hot victim",
                            "points":  6
                        },
                        {
                            "text":  "pet bat",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170845,
        "question":  "Name something in the kitchen a wife might hit her husband with.",
        "answers":  [
                        {
                            "text":  "pan/pot",
                            "points":  50
                        },
                        {
                            "text":  "spoon/utensil",
                            "points":  13
                        },
                        {
                            "text":  "rolling pin",
                            "points":  12
                        },
                        {
                            "text":  "dish towel/cloth",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  170846,
        "question":  "Name someone you hate having to talk to when you have a hangover.",
        "answers":  [
                        {
                            "text":  "parents/mom",
                            "points":  43
                        },
                        {
                            "text":  "spouse/mate",
                            "points":  19
                        },
                        {
                            "text":  "the boss",
                            "points":  14
                        },
                        {
                            "text":  "my in-laws",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  170847,
        "question":  "We asked 100 men... Fill in the blank: When it comes to animals, my woman brings out the ______ in me.",
        "answers":  [
                        {
                            "text":  "tiger",
                            "points":  35
                        },
                        {
                            "text":  "lion",
                            "points":  34
                        },
                        {
                            "text":  "wolf",
                            "points":  7
                        },
                        {
                            "text":  "bear",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  170848,
        "question":  "Name a place people go in the pursuit of happiness.",
        "answers":  [
                        {
                            "text":  "vacation",
                            "points":  50
                        },
                        {
                            "text":  "church",
                            "points":  19
                        },
                        {
                            "text":  "bar/nightclub",
                            "points":  7
                        },
                        {
                            "text":  "the spa",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  170849,
        "question":  "We asked 100 single men... Fill in the blank: My ideal wife would have to be both hot and what?",
        "answers":  [
                        {
                            "text":  "nice/sweet",
                            "points":  30
                        },
                        {
                            "text":  "smart",
                            "points":  27
                        },
                        {
                            "text":  "rich",
                            "points":  16
                        },
                        {
                            "text":  "loyal",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  170850,
        "question":  "Name something you jump.",
        "answers":  [
                        {
                            "text":  "rope",
                            "points":  68
                        },
                        {
                            "text":  "a fence/gate",
                            "points":  5
                        },
                        {
                            "text":  "a puddle",
                            "points":  4
                        },
                        {
                            "text":  "car battery",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170851,
        "question":  "Name something that's hard and round.",
        "answers":  [
                        {
                            "text":  "a ball/marble",
                            "points":  65
                        },
                        {
                            "text":  "a rock/stone",
                            "points":  6
                        },
                        {
                            "text":  "fruit/an orange",
                            "points":  6
                        },
                        {
                            "text":  "a coin",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170852,
        "question":  "The boss's wife might say, \"He may be a lion in the boardroom, but he's a ______ in the bedroom.\"",
        "answers":  [
                        {
                            "text":  "kitten/pussycat",
                            "points":  38
                        },
                        {
                            "text":  "lamb/sheep",
                            "points":  30
                        },
                        {
                            "text":  "tiger",
                            "points":  7
                        },
                        {
                            "text":  "mouse",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  170853,
        "question":  "Name a place where it's especially important to think before you speak.",
        "answers":  [
                        {
                            "text":  "job/interview",
                            "points":  38
                        },
                        {
                            "text":  "church",
                            "points":  21
                        },
                        {
                            "text":  "court",
                            "points":  18
                        },
                        {
                            "text":  "police station",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170854,
        "question":  "Name something a person might have five of.",
        "answers":  [
                        {
                            "text":  "fingers/toes",
                            "points":  60
                        },
                        {
                            "text":  "dollars",
                            "points":  9
                        },
                        {
                            "text":  "pairs of shoes",
                            "points":  6
                        },
                        {
                            "text":  "kids",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170855,
        "question":  "Name something a mom is talking about when she asks, \"Can you hold it?\"",
        "answers":  [
                        {
                            "text":  "whiz/dump",
                            "points":  54
                        },
                        {
                            "text":  "bottle/cup/water",
                            "points":  10
                        },
                        {
                            "text":  "her baby/kid",
                            "points":  9
                        },
                        {
                            "text":  "shop'g/grocery bag",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  170856,
        "question":  "When you go to the doctor, name something he might say needs to come out.",
        "answers":  [
                        {
                            "text":  "tonsils",
                            "points":  35
                        },
                        {
                            "text":  "appendix",
                            "points":  28
                        },
                        {
                            "text":  "tooth",
                            "points":  9
                        },
                        {
                            "text":  "gallbladder",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  170857,
        "question":  "In a public restroom, name something a celebrity wouldn't want a fan to stick under her bathroom stall.",
        "answers":  [
                        {
                            "text":  "cell phone/camera",
                            "points":  46
                        },
                        {
                            "text":  "stuff to sign/pen",
                            "points":  21
                        },
                        {
                            "text":  "a mirror",
                            "points":  6
                        },
                        {
                            "text":  "their head/\"hi!\"",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  170858,
        "question":  "Name something you might do every day that starts with the letter S.",
        "answers":  [
                        {
                            "text":  "sleep",
                            "points":  38
                        },
                        {
                            "text":  "shower",
                            "points":  23
                        },
                        {
                            "text":  "smile",
                            "points":  9
                        },
                        {
                            "text":  "shave",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  170859,
        "question":  "Name something red a stripper wears for the Christmas show.",
        "answers":  [
                        {
                            "text":  "g-string/panties",
                            "points":  30
                        },
                        {
                            "text":  "santa outfit/hat",
                            "points":  24
                        },
                        {
                            "text":  "bow/ribbon",
                            "points":  13
                        },
                        {
                            "text":  "garter belt",
                            "points":  10
                        }
                    ]
    },
    {
        "id":  170860,
        "question":  "Name a wardrobe malfunction that's happened to you.",
        "answers":  [
                        {
                            "text":  "zipper down/broke",
                            "points":  49
                        },
                        {
                            "text":  "tore/split pants",
                            "points":  18
                        },
                        {
                            "text":  "bra broke/undone",
                            "points":  6
                        },
                        {
                            "text":  "slip fell down",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  170861,
        "question":  "Name something a stay-at-home mom might turn on several times a day.",
        "answers":  [
                        {
                            "text":  "tv/bold & beautiful",
                            "points":  51
                        },
                        {
                            "text":  "radio/tunes",
                            "points":  8
                        },
                        {
                            "text":  "stove",
                            "points":  7
                        },
                        {
                            "text":  "faucet/bath",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  170862,
        "question":  "They say it's better to give than to receive. But name something you'd rather get than give.",
        "answers":  [
                        {
                            "text":  "dolla bills, y'all",
                            "points":  51
                        },
                        {
                            "text":  "love/affection",
                            "points":  10
                        },
                        {
                            "text":  "car/a rolls",
                            "points":  5
                        },
                        {
                            "text":  "advice/help",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  170863,
        "question":  "Name one specific word that describes how you like your coffee that also describes you.",
        "answers":  [
                        {
                            "text":  "sweet",
                            "points":  26
                        },
                        {
                            "text":  "hot",
                            "points":  21
                        },
                        {
                            "text":  "strong",
                            "points":  15
                        },
                        {
                            "text":  "black",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  170864,
        "question":  "Name someone you hope you'll only see once a year.",
        "answers":  [
                        {
                            "text":  "doctor/dentist",
                            "points":  26
                        },
                        {
                            "text":  "tax person/irs",
                            "points":  16
                        },
                        {
                            "text":  "my in-laws",
                            "points":  16
                        },
                        {
                            "text":  "santa",
                            "points":  10
                        }
                    ]
    },
    {
        "id":  170865,
        "question":  "Name something that got caught in the spokes of grandma's wheelchair.",
        "answers":  [
                        {
                            "text":  "clothes/shoes",
                            "points":  26
                        },
                        {
                            "text":  "cat/dog's tail",
                            "points":  14
                        },
                        {
                            "text":  "person/saggy boob",
                            "points":  11
                        },
                        {
                            "text":  "blanket/quilt",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  170866,
        "question":  "Fill in the blank: Seven ______.",
        "answers":  [
                        {
                            "text":  "7-eleven",
                            "points":  32
                        },
                        {
                            "text":  "seven dwarfs",
                            "points":  12
                        },
                        {
                            "text":  "7 years/bad luck",
                            "points":  6
                        },
                        {
                            "text":  "7up",
                            "points":  6
                        }
                    ]
    }
];
