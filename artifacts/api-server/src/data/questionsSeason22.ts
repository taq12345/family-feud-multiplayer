import type { SurveyQuestion } from "./questions.js";

// Season 22 set: a separate question set from the main bank in questions.ts.
// Boards from Family Feud season 22, as transcribed at
// https://mstiescott.neocities.org/feud22 (crawled 2026-11-13).
// Ids start at 150001 (each season has its own block of 10,000), so they
// never clash with the main bank (1-8782), AI questions (9000+) or other
// seasons. One-answer boards are left out.
// Not used in gameplay yet.
export const SEASON22_SET = "season22";
export const SEASON22_ID_START = 150001;

export function isSeason22Question(id: number): boolean {
  return id >= SEASON22_ID_START && id < SEASON22_ID_START + 10000;
}

export const season22Questions: SurveyQuestion[] = [
    {
        "id":  150001,
        "question":  "Where do you go if the restroom at work is out of order and you really gotta go?",
        "answers":  [
                        {
                            "text":  "nearby business/cafe",
                            "points":  40
                        },
                        {
                            "text":  "outside/bushes",
                            "points":  34
                        },
                        {
                            "text":  "other sex bathroom",
                            "points":  9
                        },
                        {
                            "text":  "home",
                            "points":  7
                        },
                        {
                            "text":  "an office/closet",
                            "points":  4
                        },
                        {
                            "text":  "different floor",
                            "points":  2
                        },
                        {
                            "text":  "in a sink",
                            "points":  2
                        },
                        {
                            "text":  "i hold it in",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150002,
        "question":  "Breaking tabloid news: Dorothy from \"The Wizard of Oz\" was seen making out with who?",
        "answers":  [
                        {
                            "text":  "the tin man",
                            "points":  48
                        },
                        {
                            "text":  "scarecrow",
                            "points":  18
                        },
                        {
                            "text":  "the wizard/oz",
                            "points":  12
                        },
                        {
                            "text":  "not-so-cowardly lion",
                            "points":  9
                        },
                        {
                            "text":  "toto",
                            "points":  4
                        },
                        {
                            "text":  "glinda",
                            "points":  3
                        },
                        {
                            "text":  "wicked witch",
                            "points":  3
                        },
                        {
                            "text":  "lollipop guild",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150003,
        "question":  "Name one of Santa's reindeer that could also be the name of a stripper.",
        "answers":  [
                        {
                            "text":  "vixen",
                            "points":  30
                        },
                        {
                            "text":  "dancer",
                            "points":  22
                        },
                        {
                            "text":  "prancer",
                            "points":  15
                        },
                        {
                            "text":  "cupid",
                            "points":  10
                        },
                        {
                            "text":  "blitzen",
                            "points":  8
                        },
                        {
                            "text":  "dasher",
                            "points":  7
                        },
                        {
                            "text":  "rudolph",
                            "points":  5
                        },
                        {
                            "text":  "donner",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150004,
        "question":  "We asked 100 women... Name a sport where you'd love to be in the locker room during shower time.",
        "answers":  [
                        {
                            "text":  "football",
                            "points":  29
                        },
                        {
                            "text":  "baseball/softball",
                            "points":  17
                        },
                        {
                            "text":  "soccer",
                            "points":  17
                        },
                        {
                            "text":  "swim'g/water polo",
                            "points":  13
                        },
                        {
                            "text":  "hockey",
                            "points":  8
                        },
                        {
                            "text":  "weightlifting",
                            "points":  6
                        },
                        {
                            "text":  "basketball",
                            "points":  6
                        },
                        {
                            "text":  "volleyball",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150005,
        "question":  "Name something frogs might dream about.",
        "answers":  [
                        {
                            "text":  "flies/bugs",
                            "points":  52
                        },
                        {
                            "text":  "lily pads/ponds",
                            "points":  21
                        },
                        {
                            "text":  "kiss/become prince",
                            "points":  10
                        },
                        {
                            "text":  "other frog/toad",
                            "points":  5
                        },
                        {
                            "text":  "hopping",
                            "points":  4
                        },
                        {
                            "text":  "bud. weis. er.",
                            "points":  2
                        },
                        {
                            "text":  "makin' tadpoles",
                            "points":  2
                        },
                        {
                            "text":  "bein' a flying frog",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150006,
        "question":  "On a first date, a man should never tell a woman that she has a big what?",
        "answers":  [
                        {
                            "text":  "badonk",
                            "points":  50
                        },
                        {
                            "text":  "nose/honker",
                            "points":  20
                        },
                        {
                            "text":  "mouth",
                            "points":  10
                        },
                        {
                            "text":  "pair of \"puppies\"",
                            "points":  6
                        },
                        {
                            "text":  "head/ego",
                            "points":  4
                        },
                        {
                            "text":  "shoe size",
                            "points":  3
                        },
                        {
                            "text":  "belly",
                            "points":  3
                        },
                        {
                            "text":  "appetite",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150007,
        "question":  "Name a specific symptom you fake at work on Thursday if you plan on calling in sick on Friday.",
        "answers":  [
                        {
                            "text":  "cough",
                            "points":  50
                        },
                        {
                            "text":  "stomachache",
                            "points":  15
                        },
                        {
                            "text":  "headache",
                            "points":  9
                        },
                        {
                            "text":  "puking/nausea",
                            "points":  9
                        },
                        {
                            "text":  "fever",
                            "points":  5
                        },
                        {
                            "text":  "sniffles/sneezing",
                            "points":  4
                        },
                        {
                            "text":  "sore throat",
                            "points":  3
                        },
                        {
                            "text":  "dirty squirties",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150008,
        "question":  "Name a part of a woman a man might avoid when she asks him to kiss her all over.",
        "answers":  [
                        {
                            "text":  "crusty feet/toes",
                            "points":  48
                        },
                        {
                            "text":  "her pooper",
                            "points":  26
                        },
                        {
                            "text":  "aromatic armpit",
                            "points":  12
                        },
                        {
                            "text":  "her hair",
                            "points":  4
                        },
                        {
                            "text":  "her wonderland",
                            "points":  2
                        },
                        {
                            "text":  "her eye",
                            "points":  2
                        },
                        {
                            "text":  "her ear",
                            "points":  2
                        },
                        {
                            "text":  "belly button",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150009,
        "question":  "Grandma might tell grandpa, \"There's not enough room for both of us in this\" what?",
        "answers":  [
                        {
                            "text":  "bed/bedroom",
                            "points":  45
                        },
                        {
                            "text":  "tub/bathroom",
                            "points":  21
                        },
                        {
                            "text":  "house",
                            "points":  14
                        },
                        {
                            "text":  "chair",
                            "points":  5
                        },
                        {
                            "text":  "car/back seat",
                            "points":  5
                        },
                        {
                            "text":  "coffin",
                            "points":  4
                        },
                        {
                            "text":  "kitchen",
                            "points":  2
                        },
                        {
                            "text":  "town/world",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150010,
        "question":  "Name a tool a man hides if he suspects his wife might murder him with it.",
        "answers":  [
                        {
                            "text":  "hammer",
                            "points":  44
                        },
                        {
                            "text":  "axe",
                            "points":  25
                        },
                        {
                            "text":  "knife",
                            "points":  9
                        },
                        {
                            "text":  "saw/chain saw",
                            "points":  8
                        },
                        {
                            "text":  "screwdriver",
                            "points":  6
                        },
                        {
                            "text":  "nail gun",
                            "points":  2
                        },
                        {
                            "text":  "scissors/shears",
                            "points":  2
                        },
                        {
                            "text":  "wrench",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150011,
        "question":  "We asked 100 women... Imagine Steve Harvey is single. Tell me why he should take you on a date.",
        "answers":  [
                        {
                            "text":  "i'm funny",
                            "points":  44
                        },
                        {
                            "text":  "cuter than him",
                            "points":  17
                        },
                        {
                            "text":  "good cook",
                            "points":  9
                        },
                        {
                            "text":  "i'm single too",
                            "points":  7
                        },
                        {
                            "text":  "i'm smart",
                            "points":  6
                        },
                        {
                            "text":  "i love $/sugar daddies",
                            "points":  6
                        },
                        {
                            "text":  "good listener",
                            "points":  5
                        },
                        {
                            "text":  "nice/down-to-earth",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150012,
        "question":  "At a nudist colony show, a magician might pull a coin out of an audience member's what?",
        "answers":  [
                        {
                            "text":  "ear",
                            "points":  41
                        },
                        {
                            "text":  "brown star/butt",
                            "points":  32
                        },
                        {
                            "text":  "cleavage/nip",
                            "points":  7
                        },
                        {
                            "text":  "hair",
                            "points":  6
                        },
                        {
                            "text":  "armpit",
                            "points":  4
                        },
                        {
                            "text":  "urethra/hoo-ha",
                            "points":  4
                        },
                        {
                            "text":  "nose",
                            "points":  2
                        },
                        {
                            "text":  "belly button",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150013,
        "question":  "After he gets married, what would a man hate to find out his wife doesn't like to do?",
        "answers":  [
                        {
                            "text":  "cook",
                            "points":  40
                        },
                        {
                            "text":  "make love",
                            "points":  38
                        },
                        {
                            "text":  "travel",
                            "points":  5
                        },
                        {
                            "text":  "shower",
                            "points":  4
                        },
                        {
                            "text":  "clean/laundry",
                            "points":  3
                        },
                        {
                            "text":  "cuddle all night",
                            "points":  3
                        },
                        {
                            "text":  "watch sports",
                            "points":  3
                        },
                        {
                            "text":  "speak",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150014,
        "question":  "What might a nurse do to a sexy patient's bottom when it hangs out of his hospital gown?",
        "answers":  [
                        {
                            "text":  "slap/pat it",
                            "points":  36
                        },
                        {
                            "text":  "cover it/fix gown",
                            "points":  25
                        },
                        {
                            "text":  "pinch/grab it",
                            "points":  15
                        },
                        {
                            "text":  "examine it",
                            "points":  14
                        },
                        {
                            "text":  "tell him/\"i see you\"",
                            "points":  2
                        },
                        {
                            "text":  "lick it",
                            "points":  2
                        },
                        {
                            "text":  "rub/caress it",
                            "points":  2
                        },
                        {
                            "text":  "look away/ignore",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150015,
        "question":  "We asked 100 married men... Fill in the blank: Bad news -- you're dead. Worse news -- ______ is hitting on your wife at your funeral.",
        "answers":  [
                        {
                            "text":  "my best bud",
                            "points":  27
                        },
                        {
                            "text":  "boss/biz partner",
                            "points":  26
                        },
                        {
                            "text":  "my brother",
                            "points":  14
                        },
                        {
                            "text":  "her ex",
                            "points":  11
                        },
                        {
                            "text":  "the preacher",
                            "points":  8
                        },
                        {
                            "text":  "neighbor/18 yr-old",
                            "points":  6
                        },
                        {
                            "text":  "the undertaker",
                            "points":  4
                        },
                        {
                            "text":  "my dad",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150016,
        "question":  "Name a way a woman can flirt with a man without making physical contact.",
        "answers":  [
                        {
                            "text":  "wink/eye-bang him",
                            "points":  55
                        },
                        {
                            "text":  "smile/giggle",
                            "points":  22
                        },
                        {
                            "text":  "flip hair",
                            "points":  5
                        },
                        {
                            "text":  "bite/lick lips",
                            "points":  4
                        },
                        {
                            "text":  "talk/compliment",
                            "points":  4
                        },
                        {
                            "text":  "phone/text",
                            "points":  3
                        },
                        {
                            "text":  "shake dat booty/dance",
                            "points":  2
                        },
                        {
                            "text":  "get nekkid",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150017,
        "question":  "Name something a person might be running from.",
        "answers":  [
                        {
                            "text":  "the law/feds",
                            "points":  52
                        },
                        {
                            "text":  "bear/animal",
                            "points":  15
                        },
                        {
                            "text":  "their past/ex",
                            "points":  9
                        },
                        {
                            "text":  "debt/bills",
                            "points":  7
                        },
                        {
                            "text":  "criminal",
                            "points":  5
                        },
                        {
                            "text":  "commitment/marriage",
                            "points":  4
                        },
                        {
                            "text":  "monster/zombie",
                            "points":  3
                        },
                        {
                            "text":  "truth/inner self",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150018,
        "question":  "Name a reason people go commando.",
        "answers":  [
                        {
                            "text":  "comfy/cool/freeing",
                            "points":  47
                        },
                        {
                            "text":  "no clean undies",
                            "points":  31
                        },
                        {
                            "text":  "no viz panty line",
                            "points":  7
                        },
                        {
                            "text":  "sexy/might score",
                            "points":  3
                        },
                        {
                            "text":  "undies cost too much",
                            "points":  3
                        },
                        {
                            "text":  "rash/sunburn",
                            "points":  2
                        },
                        {
                            "text":  "they're bathing",
                            "points":  2
                        },
                        {
                            "text":  "ego/macho",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150019,
        "question":  "If men gave birth to babies, name a public place you'd see them breastfeeding.",
        "answers":  [
                        {
                            "text":  "bar/nightclub",
                            "points":  46
                        },
                        {
                            "text":  "sports arena",
                            "points":  21
                        },
                        {
                            "text":  "park",
                            "points":  13
                        },
                        {
                            "text":  "store/mall",
                            "points":  8
                        },
                        {
                            "text":  "eatery/hooters",
                            "points":  3
                        },
                        {
                            "text":  "men's room",
                            "points":  2
                        },
                        {
                            "text":  "subway",
                            "points":  2
                        },
                        {
                            "text":  "gym",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150020,
        "question":  "If a male stripper called himself The Handyman, name something he might use in his act.",
        "answers":  [
                        {
                            "text":  "hammer",
                            "points":  35
                        },
                        {
                            "text":  "tool belt",
                            "points":  31
                        },
                        {
                            "text":  "screwdriver",
                            "points":  9
                        },
                        {
                            "text":  "power drill",
                            "points":  7
                        },
                        {
                            "text":  "his handsy hands",
                            "points":  5
                        },
                        {
                            "text":  "wrench",
                            "points":  4
                        },
                        {
                            "text":  "tape measure",
                            "points":  3
                        },
                        {
                            "text":  "his \"tool\"",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150021,
        "question":  "We asked 100 married men... I sometimes think my wife would trade me in for a new what?",
        "answers":  [
                        {
                            "text":  "guy",
                            "points":  31
                        },
                        {
                            "text":  "car/suv",
                            "points":  24
                        },
                        {
                            "text":  "chick stick/vibrator",
                            "points":  16
                        },
                        {
                            "text":  "house",
                            "points":  13
                        },
                        {
                            "text":  "television",
                            "points":  7
                        },
                        {
                            "text":  "purse",
                            "points":  2
                        },
                        {
                            "text":  "oven",
                            "points":  2
                        },
                        {
                            "text":  "vacuum",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150022,
        "question":  "Name something people start worrying about more after they turn 30.",
        "answers":  [
                        {
                            "text":  "graying/balding",
                            "points":  26
                        },
                        {
                            "text":  "age/near death",
                            "points":  22
                        },
                        {
                            "text":  "weight/6 chins",
                            "points":  14
                        },
                        {
                            "text":  "wrinkles",
                            "points":  10
                        },
                        {
                            "text":  "love/marriage",
                            "points":  8
                        },
                        {
                            "text":  "$/retirement",
                            "points":  8
                        },
                        {
                            "text":  "having kids",
                            "points":  5
                        },
                        {
                            "text":  "health/hemorrhoids",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150023,
        "question":  "Name one specific thing that a bird does in a tree that you never would.",
        "answers":  [
                        {
                            "text":  "poop/on people",
                            "points":  23
                        },
                        {
                            "text":  "sleep",
                            "points":  20
                        },
                        {
                            "text":  "lay an egg",
                            "points":  14
                        },
                        {
                            "text":  "build nest",
                            "points":  12
                        },
                        {
                            "text":  "stand/on 1 leg",
                            "points":  8
                        },
                        {
                            "text":  "peck",
                            "points":  7
                        },
                        {
                            "text":  "sing",
                            "points":  7
                        },
                        {
                            "text":  "mate/with bird",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  150024,
        "question":  "Name a part of his own body the world's greatest contortionist could kiss.",
        "answers":  [
                        {
                            "text":  "butt/cinnamon ring",
                            "points":  62
                        },
                        {
                            "text":  "elbow",
                            "points":  10
                        },
                        {
                            "text":  "foot/toes",
                            "points":  10
                        },
                        {
                            "text":  "back",
                            "points":  4
                        },
                        {
                            "text":  "leg/back of leg",
                            "points":  3
                        },
                        {
                            "text":  "peter the great",
                            "points":  3
                        },
                        {
                            "text":  "belly/button",
                            "points":  2
                        },
                        {
                            "text":  "forehead/face",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150025,
        "question":  "Name something scary that might be chasing you in your nightmares.",
        "answers":  [
                        {
                            "text":  "monster/zombie",
                            "points":  49
                        },
                        {
                            "text":  "animal/spider",
                            "points":  24
                        },
                        {
                            "text":  "murderer/criminal",
                            "points":  7
                        },
                        {
                            "text":  "cop",
                            "points":  6
                        },
                        {
                            "text":  "clown",
                            "points":  3
                        },
                        {
                            "text":  "my ex",
                            "points":  3
                        },
                        {
                            "text":  "my mother-in-law",
                            "points":  2
                        },
                        {
                            "text":  "flood/tsunami",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150026,
        "question":  "Name something a man looks for in a wife if he wants to be happy the rest of his life.",
        "answers":  [
                        {
                            "text":  "delish cooking",
                            "points":  33
                        },
                        {
                            "text":  "sweet/loving",
                            "points":  28
                        },
                        {
                            "text":  "funny/cheery",
                            "points":  17
                        },
                        {
                            "text":  "smokin' face",
                            "points":  5
                        },
                        {
                            "text":  "maniac in the sack",
                            "points":  4
                        },
                        {
                            "text":  "$$$/heiress",
                            "points":  4
                        },
                        {
                            "text":  "loyal/rarely cheats7",
                            "points":  3
                        },
                        {
                            "text":  "muteness",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150027,
        "question":  "A man might say, \"I think my wife's a werewolf because she's got hair on her\" what?",
        "answers":  [
                        {
                            "text":  "face",
                            "points":  32
                        },
                        {
                            "text":  "back",
                            "points":  26
                        },
                        {
                            "text":  "chest/areolas",
                            "points":  13
                        },
                        {
                            "text":  "butt/crack",
                            "points":  8
                        },
                        {
                            "text":  "feet/toes",
                            "points":  6
                        },
                        {
                            "text":  "legs",
                            "points":  5
                        },
                        {
                            "text":  "arms",
                            "points":  3
                        },
                        {
                            "text":  "hands/palms",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150028,
        "question":  "We asked 100 married women... If you had a spare coffin lying around the house, name something you'd do with it.",
        "answers":  [
                        {
                            "text":  "storage/pantry",
                            "points":  25
                        },
                        {
                            "text":  "table/eat on it",
                            "points":  16
                        },
                        {
                            "text":  "sleep in it",
                            "points":  15
                        },
                        {
                            "text":  "plant flowers in it",
                            "points":  10
                        },
                        {
                            "text":  "save it for future",
                            "points":  9
                        },
                        {
                            "text":  "sell it",
                            "points":  9
                        },
                        {
                            "text":  "hide in it",
                            "points":  8
                        },
                        {
                            "text":  "kill & bury someone",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150029,
        "question":  "We asked 100 married women... Name something you'd like to give your husband tips on.",
        "answers":  [
                        {
                            "text":  "cooking",
                            "points":  24
                        },
                        {
                            "text":  "dressing",
                            "points":  21
                        },
                        {
                            "text":  "social skills/polite",
                            "points":  17
                        },
                        {
                            "text":  "cleaning",
                            "points":  16
                        },
                        {
                            "text":  "romance",
                            "points":  12
                        },
                        {
                            "text":  "bathing/hygiene",
                            "points":  2
                        },
                        {
                            "text":  "driving",
                            "points":  2
                        },
                        {
                            "text":  "foreplay",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150030,
        "question":  "Name a reason Santa Claus's brother is jealous of him.",
        "answers":  [
                        {
                            "text":  "he's famous",
                            "points":  23
                        },
                        {
                            "text":  "flies/sleigh & deer",
                            "points":  20
                        },
                        {
                            "text":  "milk & cookies",
                            "points":  17
                        },
                        {
                            "text":  "team of elves",
                            "points":  13
                        },
                        {
                            "text":  "jolly/ho ho ho",
                            "points":  9
                        },
                        {
                            "text":  "gives best toys",
                            "points":  7
                        },
                        {
                            "text":  "sultry mrs. claus",
                            "points":  5
                        },
                        {
                            "text":  "list of naughty gals",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150031,
        "question":  "Fill in the blank: You'd be the hit of a wild party if you brought ______ with you.",
        "answers":  [
                        {
                            "text":  "booze",
                            "points":  68
                        },
                        {
                            "text":  "drugs/a fat blunt",
                            "points":  8
                        },
                        {
                            "text":  "celeb/steve",
                            "points":  7
                        },
                        {
                            "text":  "food/tuna casserole",
                            "points":  3
                        },
                        {
                            "text":  "your hot boo",
                            "points":  3
                        },
                        {
                            "text":  "animal",
                            "points":  2
                        },
                        {
                            "text":  "your crazy pal",
                            "points":  2
                        },
                        {
                            "text":  "a stripper",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150032,
        "question":  "We asked 100 married women... It would be creepy if your husband asked you to wear his mother's what?",
        "answers":  [
                        {
                            "text":  "panties/thong",
                            "points":  47
                        },
                        {
                            "text":  "dress/wed'g dress",
                            "points":  20
                        },
                        {
                            "text":  "bra",
                            "points":  13
                        },
                        {
                            "text":  "nightgown",
                            "points":  5
                        },
                        {
                            "text":  "ring",
                            "points":  3
                        },
                        {
                            "text":  "dentures",
                            "points":  3
                        },
                        {
                            "text":  "wig/hairstyle",
                            "points":  2
                        },
                        {
                            "text":  "shoes/slippers",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150033,
        "question":  "Name something that might be bouncy.",
        "answers":  [
                        {
                            "text":  "ball",
                            "points":  46
                        },
                        {
                            "text":  "bounce house",
                            "points":  14
                        },
                        {
                            "text":  "my milk wagons",
                            "points":  12
                        },
                        {
                            "text":  "trampoline",
                            "points":  11
                        },
                        {
                            "text":  "my stylish hair",
                            "points":  6
                        },
                        {
                            "text":  "my bed every night",
                            "points":  2
                        },
                        {
                            "text":  "my juicy booty",
                            "points":  2
                        },
                        {
                            "text":  "tigger",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150034,
        "question":  "Name something in hell that is just out of a man's reach.",
        "answers":  [
                        {
                            "text":  "ice cold drink",
                            "points":  42
                        },
                        {
                            "text":  "dream gal",
                            "points":  19
                        },
                        {
                            "text":  "heaven/an exit",
                            "points":  17
                        },
                        {
                            "text":  "money",
                            "points":  5
                        },
                        {
                            "text":  "devil's throat",
                            "points":  5
                        },
                        {
                            "text":  "ac/fan",
                            "points":  3
                        },
                        {
                            "text":  "toilet paper",
                            "points":  2
                        },
                        {
                            "text":  "the remote",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150035,
        "question":  "We asked 100 women... Name something your pet does more often than your partner does.",
        "answers":  [
                        {
                            "text":  "kisses/licks me",
                            "points":  32
                        },
                        {
                            "text":  "snuggles",
                            "points":  31
                        },
                        {
                            "text":  "sleeps/with me",
                            "points":  15
                        },
                        {
                            "text":  "farts",
                            "points":  6
                        },
                        {
                            "text":  "bathes",
                            "points":  5
                        },
                        {
                            "text":  "walks/runs",
                            "points":  2
                        },
                        {
                            "text":  "sits on my lap",
                            "points":  2
                        },
                        {
                            "text":  "takes whiz/dump",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150036,
        "question":  "Name something Santa might say he wanted to be buried with.",
        "answers":  [
                        {
                            "text":  "sleigh",
                            "points":  25
                        },
                        {
                            "text":  "rudolph/reindeer",
                            "points":  19
                        },
                        {
                            "text":  "suit/hat/boots",
                            "points":  17
                        },
                        {
                            "text":  "mrs. claus",
                            "points":  12
                        },
                        {
                            "text":  "bag of toys",
                            "points":  11
                        },
                        {
                            "text":  "cookies & candy",
                            "points":  5
                        },
                        {
                            "text":  "his favorite elf",
                            "points":  4
                        },
                        {
                            "text":  "his pipe",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150037,
        "question":  "Name something you might not invite your nudist friend to.",
        "answers":  [
                        {
                            "text":  "church",
                            "points":  21
                        },
                        {
                            "text":  "party/kid's b-day",
                            "points":  21
                        },
                        {
                            "text":  "wedding",
                            "points":  19
                        },
                        {
                            "text":  "house/thanksgiving",
                            "points":  17
                        },
                        {
                            "text":  "game/twister",
                            "points":  7
                        },
                        {
                            "text":  "pool/beach",
                            "points":  6
                        },
                        {
                            "text":  "my work",
                            "points":  2
                        },
                        {
                            "text":  "fashion show",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150038,
        "question":  "Fill in the blank: I'm running out of time to find the perfect ______ before I die.",
        "answers":  [
                        {
                            "text":  "bae/pookie",
                            "points":  65
                        },
                        {
                            "text":  "job",
                            "points":  7
                        },
                        {
                            "text":  "digs/house",
                            "points":  6
                        },
                        {
                            "text":  "outfit/shoes",
                            "points":  4
                        },
                        {
                            "text":  "casket/urn",
                            "points":  4
                        },
                        {
                            "text":  "burger/meal",
                            "points":  3
                        },
                        {
                            "text":  "vacation/beach",
                            "points":  3
                        },
                        {
                            "text":  "doctor/cure",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150039,
        "question":  "If you had a pet pig, name a specific food you'd feel weird eating in front of it.",
        "answers":  [
                        {
                            "text":  "bacon",
                            "points":  60
                        },
                        {
                            "text":  "ham",
                            "points":  12
                        },
                        {
                            "text":  "pork chops",
                            "points":  10
                        },
                        {
                            "text":  "pulled pork",
                            "points":  3
                        },
                        {
                            "text":  "pork ribs",
                            "points":  3
                        },
                        {
                            "text":  "sausage",
                            "points":  2
                        },
                        {
                            "text":  "pig's feed/corn",
                            "points":  2
                        },
                        {
                            "text":  "hot dog",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150040,
        "question":  "We asked 100 women... Fill in the blank: If Steve Harvey was my hubby, I'd ______ him every day.",
        "answers":  [
                        {
                            "text":  "tongue wrestle/hug",
                            "points":  44
                        },
                        {
                            "text":  "sleep with/do",
                            "points":  13
                        },
                        {
                            "text":  "laugh with/talk",
                            "points":  13
                        },
                        {
                            "text":  "dance with",
                            "points":  10
                        },
                        {
                            "text":  "cook for",
                            "points":  5
                        },
                        {
                            "text":  "go to church w/",
                            "points":  3
                        },
                        {
                            "text":  "spank/slap",
                            "points":  3
                        },
                        {
                            "text":  "ignore/not look at",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150041,
        "question":  "We asked 100 men... Name something you'd do if you picked your blind date up and she was a nudist.",
        "answers":  [
                        {
                            "text":  "get nekkid too",
                            "points":  43
                        },
                        {
                            "text":  "smile",
                            "points":  16
                        },
                        {
                            "text":  "stare/enjoy view!",
                            "points":  14
                        },
                        {
                            "text":  "\"get dressed!\"",
                            "points":  10
                        },
                        {
                            "text":  "give blanket/towel",
                            "points":  4
                        },
                        {
                            "text":  "blush/shocked",
                            "points":  3
                        },
                        {
                            "text":  "clap & whistle",
                            "points":  2
                        },
                        {
                            "text":  "beg for sex",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150042,
        "question":  "Name something Kermit the Frog can do that Miss Piggy can't.",
        "answers":  [
                        {
                            "text":  "croak",
                            "points":  37
                        },
                        {
                            "text":  "hippity-hoppity",
                            "points":  28
                        },
                        {
                            "text":  "swim",
                            "points":  8
                        },
                        {
                            "text":  "pee standing up",
                            "points":  5
                        },
                        {
                            "text":  "catch flies",
                            "points":  5
                        },
                        {
                            "text":  "fit in small places",
                            "points":  4
                        },
                        {
                            "text":  "sing well",
                            "points":  4
                        },
                        {
                            "text":  "play the banjo",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150043,
        "question":  "You just smoked a joint. Name someone you should probably not talk to on the phone.",
        "answers":  [
                        {
                            "text":  "my mom/dad",
                            "points":  37
                        },
                        {
                            "text":  "police/911",
                            "points":  25
                        },
                        {
                            "text":  "my boss",
                            "points":  11
                        },
                        {
                            "text":  "my kid",
                            "points":  7
                        },
                        {
                            "text":  "my ex",
                            "points":  5
                        },
                        {
                            "text":  "my spouse/mate",
                            "points":  4
                        },
                        {
                            "text":  "my mother-in-law",
                            "points":  3
                        },
                        {
                            "text":  "my clergy",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150044,
        "question":  "The good news: you had a wild, crazy night last night. The bad news: you now have a what?",
        "answers":  [
                        {
                            "text":  "hangover",
                            "points":  35
                        },
                        {
                            "text":  "spouse/mate",
                            "points":  21
                        },
                        {
                            "text":  "burning std",
                            "points":  14
                        },
                        {
                            "text":  "tattoo/on face",
                            "points":  13
                        },
                        {
                            "text":  "black eye/injury",
                            "points":  4
                        },
                        {
                            "text":  "police record/tkt.",
                            "points":  3
                        },
                        {
                            "text":  "hickey",
                            "points":  2
                        },
                        {
                            "text":  "new pet/pony",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150045,
        "question":  "You might start smoking marijuana if they discovered it makes people what?",
        "answers":  [
                        {
                            "text":  "skinnier",
                            "points":  31
                        },
                        {
                            "text":  "happier/calmer",
                            "points":  18
                        },
                        {
                            "text":  "smarter",
                            "points":  12
                        },
                        {
                            "text":  "healthier/pain-free",
                            "points":  11
                        },
                        {
                            "text":  "richer/debt-free",
                            "points":  10
                        },
                        {
                            "text":  "younger/live longer",
                            "points":  6
                        },
                        {
                            "text":  "horny",
                            "points":  3
                        },
                        {
                            "text":  "fly",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150046,
        "question":  "Name something dogs do when they get together for yappy hour.",
        "answers":  [
                        {
                            "text":  "sniff/butts",
                            "points":  29
                        },
                        {
                            "text":  "bark/howl",
                            "points":  28
                        },
                        {
                            "text":  "play/run",
                            "points":  9
                        },
                        {
                            "text":  "eat",
                            "points":  8
                        },
                        {
                            "text":  "lick",
                            "points":  8
                        },
                        {
                            "text":  "drink/from toilet",
                            "points":  6
                        },
                        {
                            "text":  "wag tails",
                            "points":  3
                        },
                        {
                            "text":  "pee/fire hydrant",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150047,
        "question":  "We asked 100 married women... A woman is at your front door claiming to be your husband's mistress. What do you do?",
        "answers":  [
                        {
                            "text":  "invite in/ask ?'s",
                            "points":  24
                        },
                        {
                            "text":  "slam door",
                            "points":  15
                        },
                        {
                            "text":  "yell at her",
                            "points":  13
                        },
                        {
                            "text":  "confront my old man",
                            "points":  12
                        },
                        {
                            "text":  "punch the wench",
                            "points":  11
                        },
                        {
                            "text":  "laugh",
                            "points":  9
                        },
                        {
                            "text":  "not believe her",
                            "points":  5
                        },
                        {
                            "text":  "\"he's all yours!\"",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  150048,
        "question":  "We asked 100 women... Name something a guy better not tell you to get rid of or you'll get rid of him.",
        "answers":  [
                        {
                            "text":  "pet/my 8 cats",
                            "points":  54
                        },
                        {
                            "text":  "my job/career",
                            "points":  11
                        },
                        {
                            "text":  "my family/kids",
                            "points":  7
                        },
                        {
                            "text":  "duds/shoes",
                            "points":  6
                        },
                        {
                            "text":  "friend/guy pals",
                            "points":  5
                        },
                        {
                            "text":  "my computer",
                            "points":  4
                        },
                        {
                            "text":  "photos/of my ex",
                            "points":  3
                        },
                        {
                            "text":  "my fat bulge",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150049,
        "question":  "We asked 100 women... Name a way in which your date's face looked like a jack-o'-lantern.",
        "answers":  [
                        {
                            "text":  "smile/jacked teeth",
                            "points":  49
                        },
                        {
                            "text":  "eyes/empty eyes",
                            "points":  18
                        },
                        {
                            "text":  "lines/wrinkles",
                            "points":  7
                        },
                        {
                            "text":  "lit up when saw me",
                            "points":  5
                        },
                        {
                            "text":  "high forehead/bald",
                            "points":  4
                        },
                        {
                            "text":  "frowning/mean",
                            "points":  4
                        },
                        {
                            "text":  "creepy",
                            "points":  3
                        },
                        {
                            "text":  "orange skin",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150050,
        "question":  "If churches want more men to attend, name a place they should hold their service.",
        "answers":  [
                        {
                            "text":  "bar/nightclub",
                            "points":  47
                        },
                        {
                            "text":  "sports venue",
                            "points":  28
                        },
                        {
                            "text":  "strip joint",
                            "points":  6
                        },
                        {
                            "text":  "beach",
                            "points":  3
                        },
                        {
                            "text":  "eatery/hooters",
                            "points":  3
                        },
                        {
                            "text":  "pool hall",
                            "points":  2
                        },
                        {
                            "text":  "store/home depot",
                            "points":  2
                        },
                        {
                            "text":  "home/bedroom",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150051,
        "question":  "Name something that people count the days until.",
        "answers":  [
                        {
                            "text":  "christmas",
                            "points":  37
                        },
                        {
                            "text":  "vacation",
                            "points":  24
                        },
                        {
                            "text":  "payday",
                            "points":  9
                        },
                        {
                            "text":  "the weekend",
                            "points":  8
                        },
                        {
                            "text":  "retirement",
                            "points":  5
                        },
                        {
                            "text":  "summer/school out",
                            "points":  4
                        },
                        {
                            "text":  "birthday",
                            "points":  4
                        },
                        {
                            "text":  "their death",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150052,
        "question":  "Fill in the blank: An actress who becomes famous might say, \"I owe it all to my\" what?",
        "answers":  [
                        {
                            "text":  "parents",
                            "points":  35
                        },
                        {
                            "text":  "adoring fans",
                            "points":  14
                        },
                        {
                            "text":  "agent",
                            "points":  13
                        },
                        {
                            "text":  "double-d's/hot bod",
                            "points":  9
                        },
                        {
                            "text":  "boo",
                            "points":  8
                        },
                        {
                            "text":  "cute face",
                            "points":  7
                        },
                        {
                            "text":  "faith in god",
                            "points":  5
                        },
                        {
                            "text":  "immeasurable talent",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150053,
        "question":  "If your dog joined Instagram, name something he'd post a lot of pictures of.",
        "answers":  [
                        {
                            "text":  "himself/doing stuff",
                            "points":  30
                        },
                        {
                            "text":  "food/bowl",
                            "points":  26
                        },
                        {
                            "text":  "other dog/his boo",
                            "points":  14
                        },
                        {
                            "text":  "his owners",
                            "points":  6
                        },
                        {
                            "text":  "squirrels",
                            "points":  6
                        },
                        {
                            "text":  "his toys",
                            "points":  5
                        },
                        {
                            "text":  "fire hydrants",
                            "points":  3
                        },
                        {
                            "text":  "cats",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150054,
        "question":  "Fill in the blank: Grandma said, \"Once upon a time, grandpa had the best ______.\"",
        "answers":  [
                        {
                            "text":  "bod/derriere",
                            "points":  30
                        },
                        {
                            "text":  "hair/moptop",
                            "points":  18
                        },
                        {
                            "text":  "face/smile",
                            "points":  17
                        },
                        {
                            "text":  "car/truck",
                            "points":  11
                        },
                        {
                            "text":  "job",
                            "points":  8
                        },
                        {
                            "text":  "dance moves",
                            "points":  3
                        },
                        {
                            "text":  "jokes/stories",
                            "points":  3
                        },
                        {
                            "text":  "kisses/hugs",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150055,
        "question":  "Name a type of snake a male stripper might use as his stage name.",
        "answers":  [
                        {
                            "text":  "cobra",
                            "points":  25
                        },
                        {
                            "text":  "anaconda",
                            "points":  24
                        },
                        {
                            "text":  "python",
                            "points":  18
                        },
                        {
                            "text":  "viper",
                            "points":  10
                        },
                        {
                            "text":  "boa constrictor",
                            "points":  7
                        },
                        {
                            "text":  "rattlesnake",
                            "points":  5
                        },
                        {
                            "text":  "black racer",
                            "points":  2
                        },
                        {
                            "text":  "black mamba",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150056,
        "question":  "Name something a man might send his ex-wife on the anniversary of their divorce.",
        "answers":  [
                        {
                            "text":  "dead rose/poison ivy",
                            "points":  25
                        },
                        {
                            "text":  "thank u card",
                            "points":  22
                        },
                        {
                            "text":  "nothing",
                            "points":  18
                        },
                        {
                            "text":  "pic/of new babe",
                            "points":  11
                        },
                        {
                            "text":  "alimony/$",
                            "points":  6
                        },
                        {
                            "text":  "dead fish/critter",
                            "points":  5
                        },
                        {
                            "text":  "bag of poop",
                            "points":  3
                        },
                        {
                            "text":  "bill",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150057,
        "question":  "If Steve Harvey ran for president, what would he have that most candidates don't?",
        "answers":  [
                        {
                            "text":  "humor/charisma",
                            "points":  58
                        },
                        {
                            "text":  "'stache",
                            "points":  9
                        },
                        {
                            "text":  "style/pimp suits",
                            "points":  7
                        },
                        {
                            "text":  "smile/nice teeth",
                            "points":  5
                        },
                        {
                            "text":  "name recognition",
                            "points":  4
                        },
                        {
                            "text":  "tv show",
                            "points":  3
                        },
                        {
                            "text":  "brains/sense",
                            "points":  3
                        },
                        {
                            "text":  "honesty/decency",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150058,
        "question":  "To make a point, what might a woman do to her underwear so that it's just like her man's?",
        "answers":  [
                        {
                            "text":  "hole/pee slit",
                            "points":  55
                        },
                        {
                            "text":  "skid mark/pee stain",
                            "points":  15
                        },
                        {
                            "text":  "stuff w/ sock",
                            "points":  5
                        },
                        {
                            "text":  "let droop/sag",
                            "points":  4
                        },
                        {
                            "text":  "not wear any",
                            "points":  4
                        },
                        {
                            "text":  "dye to match",
                            "points":  3
                        },
                        {
                            "text":  "pull up too high",
                            "points":  3
                        },
                        {
                            "text":  "toss on floor",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150059,
        "question":  "A woman might put in her dating ad, \"I only want to date men who have\" what?",
        "answers":  [
                        {
                            "text":  "$10.3 million",
                            "points":  48
                        },
                        {
                            "text":  "a job/with perks",
                            "points":  20
                        },
                        {
                            "text":  "big...\"part\"",
                            "points":  5
                        },
                        {
                            "text":  "brains",
                            "points":  5
                        },
                        {
                            "text":  "hair. no baldies!",
                            "points":  5
                        },
                        {
                            "text":  "humor/fun",
                            "points":  4
                        },
                        {
                            "text":  "integrity",
                            "points":  3
                        },
                        {
                            "text":  "nice abs",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150060,
        "question":  "Name something grandma might put on grandpa in the bedroom.",
        "answers":  [
                        {
                            "text":  "blanket",
                            "points":  38
                        },
                        {
                            "text":  "jammies/clothes",
                            "points":  26
                        },
                        {
                            "text":  "cream/heat rub",
                            "points":  14
                        },
                        {
                            "text":  "his dentures",
                            "points":  5
                        },
                        {
                            "text":  "s & m gear/clamps",
                            "points":  3
                        },
                        {
                            "text":  "her lips/lovin'",
                            "points":  2
                        },
                        {
                            "text":  "sleep mask",
                            "points":  2
                        },
                        {
                            "text":  "cpap mask",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150061,
        "question":  "Fill in the blank: You cringe when a coworker says, \"Hey, you wanna see pictures of my ______?\"",
        "answers":  [
                        {
                            "text":  "kid/grandkid",
                            "points":  36
                        },
                        {
                            "text":  "fanny",
                            "points":  17
                        },
                        {
                            "text":  "vacay",
                            "points":  14
                        },
                        {
                            "text":  "pet/cat's wedding",
                            "points":  10
                        },
                        {
                            "text":  "spouse/mate",
                            "points":  7
                        },
                        {
                            "text":  "car/truck",
                            "points":  4
                        },
                        {
                            "text":  "meals",
                            "points":  2
                        },
                        {
                            "text":  "surgeries",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150062,
        "question":  "When you're at a singles' bar, name a question you answer over and over again with a lie.",
        "answers":  [
                        {
                            "text":  "age?",
                            "points":  32
                        },
                        {
                            "text":  "single/married?",
                            "points":  19
                        },
                        {
                            "text":  "name?",
                            "points":  11
                        },
                        {
                            "text":  "phone number?",
                            "points":  10
                        },
                        {
                            "text":  "job?",
                            "points":  8
                        },
                        {
                            "text":  "here alone?",
                            "points":  5
                        },
                        {
                            "text":  "how are you?",
                            "points":  4
                        },
                        {
                            "text":  "think i'm hot?",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150063,
        "question":  "We asked 100 single women... Name a flaw that every man you meet seems to have.",
        "answers":  [
                        {
                            "text":  "brag/big egos",
                            "points":  27
                        },
                        {
                            "text":  "lie hourly",
                            "points":  21
                        },
                        {
                            "text":  "they're lushes",
                            "points":  13
                        },
                        {
                            "text":  "don't listen",
                            "points":  11
                        },
                        {
                            "text":  "morons/no sense",
                            "points":  8
                        },
                        {
                            "text":  "can't multitask",
                            "points":  6
                        },
                        {
                            "text":  "sexist pigs",
                            "points":  3
                        },
                        {
                            "text":  "no job",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150064,
        "question":  "Name one thing about Steve Harvey that makes him the sexiest man alive.",
        "answers":  [
                        {
                            "text":  "hot bald noggin",
                            "points":  23
                        },
                        {
                            "text":  "humor/personality",
                            "points":  20
                        },
                        {
                            "text":  "big dimply smile",
                            "points":  11
                        },
                        {
                            "text":  "fly threads",
                            "points":  10
                        },
                        {
                            "text":  "big daddy got big $",
                            "points":  9
                        },
                        {
                            "text":  "lady tickler/stache",
                            "points":  9
                        },
                        {
                            "text":  "fine physique/fanny",
                            "points":  6
                        },
                        {
                            "text":  "angelic voice",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150065,
        "question":  "Other than cowboys, what might there be a lot of in cowboy heaven?",
        "answers":  [
                        {
                            "text":  "horses",
                            "points":  64
                        },
                        {
                            "text":  "hoochie cowgirls",
                            "points":  10
                        },
                        {
                            "text":  "cowboy garb/hats",
                            "points":  5
                        },
                        {
                            "text":  "beans/chow",
                            "points":  3
                        },
                        {
                            "text":  "cows/bulls",
                            "points":  3
                        },
                        {
                            "text":  "dogs",
                            "points":  2
                        },
                        {
                            "text":  "music/\"happy trails\"",
                            "points":  2
                        },
                        {
                            "text":  "cow pies",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150066,
        "question":  "We asked 100 married men... Name an animal your wife turns into as soon as you come to bed.",
        "answers":  [
                        {
                            "text":  "bear/hibernating",
                            "points":  26
                        },
                        {
                            "text":  "cat/kitten",
                            "points":  20
                        },
                        {
                            "text":  "lioness",
                            "points":  16
                        },
                        {
                            "text":  "sloth",
                            "points":  8
                        },
                        {
                            "text":  "raccoon",
                            "points":  7
                        },
                        {
                            "text":  "opossum",
                            "points":  6
                        },
                        {
                            "text":  "cow",
                            "points":  4
                        },
                        {
                            "text":  "fox",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150067,
        "question":  "Tell me something Steve Harvey prays for in church.",
        "answers":  [
                        {
                            "text":  "$/jobs/ratings",
                            "points":  23
                        },
                        {
                            "text":  "hair",
                            "points":  20
                        },
                        {
                            "text":  "world peace",
                            "points":  10
                        },
                        {
                            "text":  "his family",
                            "points":  10
                        },
                        {
                            "text":  "forgiveness/heaven",
                            "points":  9
                        },
                        {
                            "text":  "good health",
                            "points":  8
                        },
                        {
                            "text":  "good jokes",
                            "points":  6
                        },
                        {
                            "text":  "patience/with tanya",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  150068,
        "question":  "We asked 100 women... I like a man who's cute and loyal like a puppy, but doesn't do what like a puppy?",
        "answers":  [
                        {
                            "text":  "pee/doody on rug",
                            "points":  41
                        },
                        {
                            "text":  "whine/cry",
                            "points":  11
                        },
                        {
                            "text":  "chew/tear things",
                            "points":  10
                        },
                        {
                            "text":  "yap/bark",
                            "points":  10
                        },
                        {
                            "text":  "slobber",
                            "points":  6
                        },
                        {
                            "text":  "run",
                            "points":  4
                        },
                        {
                            "text":  "shed",
                            "points":  4
                        },
                        {
                            "text":  "lick/me",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150069,
        "question":  "Name something an angry wife flushes down the toilet.",
        "answers":  [
                        {
                            "text":  "ring/jewelry",
                            "points":  34
                        },
                        {
                            "text":  "his phone",
                            "points":  16
                        },
                        {
                            "text":  "drugs/heart meds",
                            "points":  11
                        },
                        {
                            "text":  "his money",
                            "points":  7
                        },
                        {
                            "text":  "his cigs/cigars",
                            "points":  7
                        },
                        {
                            "text":  "his keys",
                            "points":  7
                        },
                        {
                            "text":  "his booze",
                            "points":  5
                        },
                        {
                            "text":  "pic of him/his ho",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150070,
        "question":  "Name something a stripper might have onstage if she were performing for just farmers.",
        "answers":  [
                        {
                            "text":  "cow/animals",
                            "points":  24
                        },
                        {
                            "text":  "hay",
                            "points":  18
                        },
                        {
                            "text":  "a hoe",
                            "points":  13
                        },
                        {
                            "text":  "a pitchfork",
                            "points":  12
                        },
                        {
                            "text":  "overalls",
                            "points":  7
                        },
                        {
                            "text":  "corn/crops",
                            "points":  7
                        },
                        {
                            "text":  "hat/straw hat",
                            "points":  6
                        },
                        {
                            "text":  "tractor",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150071,
        "question":  "Name something a cheap boss gives to his workers instead of a Christmas bonus.",
        "answers":  [
                        {
                            "text":  "food/spam",
                            "points":  39
                        },
                        {
                            "text":  "used greeting card",
                            "points":  13
                        },
                        {
                            "text":  "$2 gift card",
                            "points":  12
                        },
                        {
                            "text":  "nada!",
                            "points":  8
                        },
                        {
                            "text":  "company pen",
                            "points":  6
                        },
                        {
                            "text":  "coupon",
                            "points":  5
                        },
                        {
                            "text":  "day off/half day",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150072,
        "question":  "Name something you'd be surprised to hear that Kim Kardashian got rid of.",
        "answers":  [
                        {
                            "text":  "that badonk",
                            "points":  32
                        },
                        {
                            "text":  "her money",
                            "points":  21
                        },
                        {
                            "text":  "kanye",
                            "points":  15
                        },
                        {
                            "text":  "her mansion",
                            "points":  7
                        },
                        {
                            "text":  "her double-d's",
                            "points":  5
                        },
                        {
                            "text":  "her insta/twitter",
                            "points":  3
                        },
                        {
                            "text":  "her makeup",
                            "points":  3
                        },
                        {
                            "text":  "her job/fame",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150073,
        "question":  "Name something a man might kiss with more passion than he does his wife.",
        "answers":  [
                        {
                            "text":  "his side chick",
                            "points":  27
                        },
                        {
                            "text":  "his dog/pet",
                            "points":  23
                        },
                        {
                            "text":  "car/truck",
                            "points":  15
                        },
                        {
                            "text":  "money/check",
                            "points":  10
                        },
                        {
                            "text":  "trophy",
                            "points":  5
                        },
                        {
                            "text":  "winning lotto ticket",
                            "points":  3
                        },
                        {
                            "text":  "food/a peach",
                            "points":  3
                        },
                        {
                            "text":  "his putter/golf club",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150074,
        "question":  "Name something a male bear might say a female bear does in a sexy way.",
        "answers":  [
                        {
                            "text":  "walks/waddles",
                            "points":  20
                        },
                        {
                            "text":  "sleeps/hibernates",
                            "points":  15
                        },
                        {
                            "text":  "growls/roars",
                            "points":  14
                        },
                        {
                            "text":  "hunts/catches fish",
                            "points":  12
                        },
                        {
                            "text":  "eats/honey",
                            "points":  12
                        },
                        {
                            "text":  "climbs tree",
                            "points":  7
                        },
                        {
                            "text":  "shakes booty/tail",
                            "points":  5
                        },
                        {
                            "text":  "scratches/on tree",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150075,
        "question":  "Name someone who you wonder whether they would save you if you were drowning.",
        "answers":  [
                        {
                            "text":  "my spouse/mate",
                            "points":  16
                        },
                        {
                            "text":  "my ex",
                            "points":  15
                        },
                        {
                            "text":  "a politician",
                            "points":  12
                        },
                        {
                            "text":  "my dog",
                            "points":  11
                        },
                        {
                            "text":  "my bestie",
                            "points":  10
                        },
                        {
                            "text":  "my kids",
                            "points":  9
                        },
                        {
                            "text":  "my boss/coworker",
                            "points":  8
                        },
                        {
                            "text":  "my sibling",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  150076,
        "question":  "We asked 100 women... Name something that would look good smeared all over your ex's car.",
        "answers":  [
                        {
                            "text":  "poop/mine",
                            "points":  33
                        },
                        {
                            "text":  "lipstick",
                            "points":  16
                        },
                        {
                            "text":  "peanut butter",
                            "points":  12
                        },
                        {
                            "text":  "eggs",
                            "points":  12
                        },
                        {
                            "text":  "mud",
                            "points":  6
                        },
                        {
                            "text":  "whipped cream",
                            "points":  3
                        },
                        {
                            "text":  "tar",
                            "points":  3
                        },
                        {
                            "text":  "his blood/innards",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150077,
        "question":  "Name the occupation with the sexiest-looking people in it.",
        "answers":  [
                        {
                            "text":  "model",
                            "points":  32
                        },
                        {
                            "text":  "actor",
                            "points":  20
                        },
                        {
                            "text":  "stripper/dancer",
                            "points":  13
                        },
                        {
                            "text":  "firefighter",
                            "points":  9
                        },
                        {
                            "text":  "porn star",
                            "points":  5
                        },
                        {
                            "text":  "athlete",
                            "points":  3
                        },
                        {
                            "text":  "doctor",
                            "points":  3
                        },
                        {
                            "text":  "server/bartender",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150078,
        "question":  "Name something you should never tease your boss about.",
        "answers":  [
                        {
                            "text":  "hair/balding",
                            "points":  20
                        },
                        {
                            "text":  "suck at job",
                            "points":  14
                        },
                        {
                            "text":  "pudgy/scrawny",
                            "points":  14
                        },
                        {
                            "text":  "my pay/cheapo",
                            "points":  13
                        },
                        {
                            "text":  "quitting",
                            "points":  8
                        },
                        {
                            "text":  "long work day",
                            "points":  7
                        },
                        {
                            "text":  "skanky spouse",
                            "points":  7
                        },
                        {
                            "text":  "outfit/from cvs",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  150079,
        "question":  "Fill in the blank: Susan said, \"I went out with Colonel Sanders. And he tried to put ______ on me.\"",
        "answers":  [
                        {
                            "text":  "chicken/bones",
                            "points":  16
                        },
                        {
                            "text":  "breading/flour",
                            "points":  16
                        },
                        {
                            "text":  "11 herbs/spices",
                            "points":  14
                        },
                        {
                            "text":  "gravy",
                            "points":  13
                        },
                        {
                            "text":  "ketchup/sauce",
                            "points":  13
                        },
                        {
                            "text":  "fingers/the moves",
                            "points":  8
                        },
                        {
                            "text":  "grease/oil",
                            "points":  5
                        },
                        {
                            "text":  "mashed potatoes",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150080,
        "question":  "If a man died after taking Viagra, name a way they might keep the casket lid closed.",
        "answers":  [
                        {
                            "text":  "duct tape",
                            "points":  16
                        },
                        {
                            "text":  "nails/screws",
                            "points":  16
                        },
                        {
                            "text":  "cord/chain",
                            "points":  14
                        },
                        {
                            "text":  "weigh down/sit on",
                            "points":  13
                        },
                        {
                            "text":  "lock/clamp",
                            "points":  8
                        },
                        {
                            "text":  "drill a hole",
                            "points":  7
                        },
                        {
                            "text":  "break/snap off woody",
                            "points":  7
                        },
                        {
                            "text":  "glue",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  150081,
        "question":  "Name someone who you'd be surprised came to your funeral.",
        "answers":  [
                        {
                            "text":  "my ex",
                            "points":  46
                        },
                        {
                            "text":  "politician/celeb",
                            "points":  15
                        },
                        {
                            "text":  "boss/coworker",
                            "points":  8
                        },
                        {
                            "text":  "enemy/class bully",
                            "points":  8
                        },
                        {
                            "text":  "long-lost pal",
                            "points":  3
                        },
                        {
                            "text":  "nutcase neighbor",
                            "points":  2
                        },
                        {
                            "text":  "my killer",
                            "points":  2
                        },
                        {
                            "text":  "anyone at all",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150082,
        "question":  "Tell me what happened on the best day of your life.",
        "answers":  [
                        {
                            "text":  "had a baby",
                            "points":  36
                        },
                        {
                            "text":  "met/married my boo",
                            "points":  26
                        },
                        {
                            "text":  "i was born. yay!",
                            "points":  5
                        },
                        {
                            "text":  "graduated",
                            "points":  5
                        },
                        {
                            "text":  "1st shag/at age 52",
                            "points":  4
                        },
                        {
                            "text":  "i won $$$",
                            "points":  4
                        },
                        {
                            "text":  "vacay/jamaica, man",
                            "points":  3
                        },
                        {
                            "text":  "got divorced!",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150083,
        "question":  "Name a kind of bird you'd hate to find out your relatives were serving for Thanksgiving dinner.",
        "answers":  [
                        {
                            "text":  "pigeon/dove",
                            "points":  28
                        },
                        {
                            "text":  "duck",
                            "points":  18
                        },
                        {
                            "text":  "crow/raven",
                            "points":  9
                        },
                        {
                            "text":  "chicken",
                            "points":  9
                        },
                        {
                            "text":  "turkey/i hate it!",
                            "points":  9
                        },
                        {
                            "text":  "quail",
                            "points":  6
                        },
                        {
                            "text":  "parrot",
                            "points":  4
                        },
                        {
                            "text":  "peacock",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150084,
        "question":  "Fill in the blank: My bottom was made to be ______ed.",
        "answers":  [
                        {
                            "text":  "sat on 24-7",
                            "points":  23
                        },
                        {
                            "text":  "spanked/patted",
                            "points":  18
                        },
                        {
                            "text":  "big & round",
                            "points":  18
                        },
                        {
                            "text":  "looked at/adored",
                            "points":  10
                        },
                        {
                            "text":  "caressed",
                            "points":  7
                        },
                        {
                            "text":  "squeezed",
                            "points":  4
                        },
                        {
                            "text":  "fit/tight",
                            "points":  3
                        },
                        {
                            "text":  "wiggly/like jell-o",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150085,
        "question":  "Dear Lord, please forgive me for lying to get out of what?",
        "answers":  [
                        {
                            "text":  "work/meeting",
                            "points":  23
                        },
                        {
                            "text":  "jury duty",
                            "points":  18
                        },
                        {
                            "text":  "\"trouble\"",
                            "points":  15
                        },
                        {
                            "text":  "a ticket",
                            "points":  9
                        },
                        {
                            "text":  "jail",
                            "points":  8
                        },
                        {
                            "text":  "church",
                            "points":  7
                        },
                        {
                            "text":  "in-law/family visit",
                            "points":  3
                        },
                        {
                            "text":  "doing dishes",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150086,
        "question":  "Name something you'd be surprised to hear that Steve Harvey wears around the house.",
        "answers":  [
                        {
                            "text":  "dress/wife's clothes",
                            "points":  24
                        },
                        {
                            "text":  "robe/kimono",
                            "points":  23
                        },
                        {
                            "text":  "gold thong/undies",
                            "points":  10
                        },
                        {
                            "text":  "suit/tux/tie",
                            "points":  7
                        },
                        {
                            "text":  "pimp hat",
                            "points":  7
                        },
                        {
                            "text":  "bunny slippers",
                            "points":  5
                        },
                        {
                            "text":  "wig",
                            "points":  5
                        },
                        {
                            "text":  "speedo/trunks",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150087,
        "question":  "Back off, guys. Nowadays, women don't need your help to do what?",
        "answers":  [
                        {
                            "text":  "repairs/on car",
                            "points":  22
                        },
                        {
                            "text":  "make/manage $",
                            "points":  19
                        },
                        {
                            "text":  "anything!",
                            "points":  15
                        },
                        {
                            "text":  "open doors",
                            "points":  15
                        },
                        {
                            "text":  "yard work",
                            "points":  5
                        },
                        {
                            "text":  "make a baby",
                            "points":  3
                        },
                        {
                            "text":  "take out trash",
                            "points":  3
                        },
                        {
                            "text":  "pump gas",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150088,
        "question":  "Name a kind of court that doesn't have a jury.",
        "answers":  [
                        {
                            "text":  "tennis court",
                            "points":  27
                        },
                        {
                            "text":  "basketball court",
                            "points":  21
                        },
                        {
                            "text":  "food court",
                            "points":  9
                        },
                        {
                            "text":  "kangaroo court",
                            "points":  7
                        },
                        {
                            "text":  "supreme court",
                            "points":  6
                        },
                        {
                            "text":  "traffic court",
                            "points":  6
                        },
                        {
                            "text":  "divorce court",
                            "points":  4
                        },
                        {
                            "text":  "king's/royal court",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150089,
        "question":  "What might a bride do a lot of on a honeymoon that makes the groom realize he might have made a mistake?",
        "answers":  [
                        {
                            "text":  "yap/complain",
                            "points":  27
                        },
                        {
                            "text":  "use phone/text",
                            "points":  14
                        },
                        {
                            "text":  "cry",
                            "points":  8
                        },
                        {
                            "text":  "sleep/snore",
                            "points":  8
                        },
                        {
                            "text":  "spend money",
                            "points":  8
                        },
                        {
                            "text":  "drink/clubbin'",
                            "points":  7
                        },
                        {
                            "text":  "rip power puffs",
                            "points":  6
                        },
                        {
                            "text":  "flirt/do bellhop",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  150090,
        "question":  "Name something parents would be shocked to see the babysitter wearing when she arrives.",
        "answers":  [
                        {
                            "text":  "lingerie/fishnets",
                            "points":  21
                        },
                        {
                            "text":  "stringkini",
                            "points":  20
                        },
                        {
                            "text":  "birthday suit",
                            "points":  17
                        },
                        {
                            "text":  "skimpy/crop top",
                            "points":  7
                        },
                        {
                            "text":  "miniskirt",
                            "points":  7
                        },
                        {
                            "text":  "booty shorts",
                            "points":  6
                        },
                        {
                            "text":  "scary mask/makeup",
                            "points":  3
                        },
                        {
                            "text":  "body piercings",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150091,
        "question":  "Name someone you might avoid seeing if they suddenly became a nudist.",
        "answers":  [
                        {
                            "text":  "parents",
                            "points":  33
                        },
                        {
                            "text":  "granny/gramps",
                            "points":  18
                        },
                        {
                            "text":  "in-laws",
                            "points":  7
                        },
                        {
                            "text":  "pastor/clergy",
                            "points":  6
                        },
                        {
                            "text":  "friend",
                            "points":  6
                        },
                        {
                            "text":  "bro/sis",
                            "points":  5
                        },
                        {
                            "text":  "santa claus",
                            "points":  4
                        },
                        {
                            "text":  "my ex",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150092,
        "question":  "Name something your friends won't tell you but your best friend will.",
        "answers":  [
                        {
                            "text":  "reek/of poo & fish",
                            "points":  25
                        },
                        {
                            "text":  "total tubster",
                            "points":  17
                        },
                        {
                            "text":  "ugly face/makeup",
                            "points":  11
                        },
                        {
                            "text":  "clothing issue",
                            "points":  9
                        },
                        {
                            "text":  "crazy idiot",
                            "points":  6
                        },
                        {
                            "text":  "food in teeth",
                            "points":  5
                        },
                        {
                            "text":  "mate's a ho/loser",
                            "points":  5
                        },
                        {
                            "text":  "their secrets",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  150093,
        "question":  "Name something a lonely guy does with his inflatable doll at Christmas.",
        "answers":  [
                        {
                            "text":  "kissy-kissy",
                            "points":  19
                        },
                        {
                            "text":  "dances",
                            "points":  16
                        },
                        {
                            "text":  "makes love",
                            "points":  13
                        },
                        {
                            "text":  "cuddles/in bed",
                            "points":  11
                        },
                        {
                            "text":  "dinner & eggnog",
                            "points":  10
                        },
                        {
                            "text":  "exchanges gifts",
                            "points":  5
                        },
                        {
                            "text":  "dresses her up",
                            "points":  5
                        },
                        {
                            "text":  "blows her up",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150094,
        "question":  "Name something you might be in the middle of and hate to have your picture taken.",
        "answers":  [
                        {
                            "text":  "shower/bath",
                            "points":  25
                        },
                        {
                            "text":  "eating/ribs",
                            "points":  16
                        },
                        {
                            "text":  "agonizing dump/whiz",
                            "points":  15
                        },
                        {
                            "text":  "hot nooner",
                            "points":  9
                        },
                        {
                            "text":  "dress/undress'g",
                            "points":  5
                        },
                        {
                            "text":  "getting hair done",
                            "points":  4
                        },
                        {
                            "text":  "cleaning",
                            "points":  3
                        },
                        {
                            "text":  "sleeping/yawn'g",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150095,
        "question":  "When a male stripper performs at the old folks' home, name something the ladies might shove in his G-string.",
        "answers":  [
                        {
                            "text":  "cash/silver dollar",
                            "points":  25
                        },
                        {
                            "text":  "their teeth",
                            "points":  21
                        },
                        {
                            "text":  "room #/key",
                            "points":  7
                        },
                        {
                            "text":  "food/ensure",
                            "points":  6
                        },
                        {
                            "text":  "tissue/hanky",
                            "points":  6
                        },
                        {
                            "text":  "phone number",
                            "points":  5
                        },
                        {
                            "text":  "hand/finger",
                            "points":  4
                        },
                        {
                            "text":  "meds/fiber",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150096,
        "question":  "Your dream vacation would include at least a week in what city?",
        "answers":  [
                        {
                            "text":  "paris",
                            "points":  15
                        },
                        {
                            "text":  "rome",
                            "points":  11
                        },
                        {
                            "text":  "new york",
                            "points":  6
                        },
                        {
                            "text":  "london",
                            "points":  6
                        },
                        {
                            "text":  "las vegas",
                            "points":  6
                        },
                        {
                            "text":  "honolulu",
                            "points":  5
                        },
                        {
                            "text":  "miami",
                            "points":  5
                        },
                        {
                            "text":  "vienna",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  150097,
        "question":  "We asked 100 married men... What does your wife do if you kiss her when she's mad at you?",
        "answers":  [
                        {
                            "text":  "turns/pulls away",
                            "points":  34
                        },
                        {
                            "text":  "slaps me",
                            "points":  28
                        },
                        {
                            "text":  "smiles/laughs",
                            "points":  13
                        },
                        {
                            "text":  "rolls her eyes",
                            "points":  8
                        },
                        {
                            "text":  "bites",
                            "points":  6
                        },
                        {
                            "text":  "no reaction/ignores",
                            "points":  6
                        },
                        {
                            "text":  "yells",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  150098,
        "question":  "Name something a cheap guy asks his mom to do so he doesn't have to pay anyone.",
        "answers":  [
                        {
                            "text":  "laundry/clean",
                            "points":  65
                        },
                        {
                            "text":  "cook/bring food",
                            "points":  15
                        },
                        {
                            "text":  "cut his hair",
                            "points":  5
                        },
                        {
                            "text":  "babysit his kids",
                            "points":  5
                        },
                        {
                            "text":  "pay his rent/bills",
                            "points":  3
                        },
                        {
                            "text":  "drive him/on dates",
                            "points":  3
                        },
                        {
                            "text":  "sew/hem clothes",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150099,
        "question":  "If the Jolly Green Giant rolled a joint, he'd make sure it was in the shape of what vegetable?",
        "answers":  [
                        {
                            "text":  "green bean",
                            "points":  52
                        },
                        {
                            "text":  "carrot",
                            "points":  13
                        },
                        {
                            "text":  "peapod",
                            "points":  11
                        },
                        {
                            "text":  "asparagus",
                            "points":  8
                        },
                        {
                            "text":  "ear of corn",
                            "points":  8
                        },
                        {
                            "text":  "broccoli",
                            "points":  5
                        },
                        {
                            "text":  "eggplant",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150100,
        "question":  "Name something a cavewoman got half of in the first-ever divorce.",
        "answers":  [
                        {
                            "text":  "the cave",
                            "points":  40
                        },
                        {
                            "text":  "fur/pelts",
                            "points":  13
                        },
                        {
                            "text":  "rocks",
                            "points":  13
                        },
                        {
                            "text":  "firepit/wood",
                            "points":  11
                        },
                        {
                            "text":  "the club",
                            "points":  10
                        },
                        {
                            "text":  "food/the meat",
                            "points":  8
                        },
                        {
                            "text":  "the wheel",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150101,
        "question":  "You finally located your old love. How come you don't recognize them?",
        "answers":  [
                        {
                            "text":  "fossil face/old",
                            "points":  39
                        },
                        {
                            "text":  "porky/skeletal",
                            "points":  36
                        },
                        {
                            "text":  "bald",
                            "points":  8
                        },
                        {
                            "text":  "surgery/new gender",
                            "points":  7
                        },
                        {
                            "text":  "dyed hair/gray",
                            "points":  4
                        },
                        {
                            "text":  "beard",
                            "points":  2
                        },
                        {
                            "text":  "i'm blind",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150102,
        "question":  "Name something a man doesn't want to see a picture of himself wearing as a baby.",
        "answers":  [
                        {
                            "text":  "diaper",
                            "points":  34
                        },
                        {
                            "text":  "dress/tutu",
                            "points":  26
                        },
                        {
                            "text":  "birthday suit",
                            "points":  20
                        },
                        {
                            "text":  "bonnet/hat",
                            "points":  10
                        },
                        {
                            "text":  "onesie/romper",
                            "points":  4
                        },
                        {
                            "text":  "undies",
                            "points":  2
                        },
                        {
                            "text":  "hair bow",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150103,
        "question":  "Name something a woman might like to put on her dog and her man.",
        "answers":  [
                        {
                            "text":  "leash/chain",
                            "points":  33
                        },
                        {
                            "text":  "collar/harness",
                            "points":  30
                        },
                        {
                            "text":  "matching clothes",
                            "points":  20
                        },
                        {
                            "text":  "a muzzle",
                            "points":  6
                        },
                        {
                            "text":  "a microchip",
                            "points":  4
                        },
                        {
                            "text":  "tag/jewelry",
                            "points":  3
                        },
                        {
                            "text":  "cologne",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150104,
        "question":  "Name something a magician hopes doesn't die in the middle of his act.",
        "answers":  [
                        {
                            "text":  "the rabbit",
                            "points":  65
                        },
                        {
                            "text":  "his assistant",
                            "points":  14
                        },
                        {
                            "text":  "the dove",
                            "points":  8
                        },
                        {
                            "text":  "himself",
                            "points":  4
                        },
                        {
                            "text":  "his act/jokes",
                            "points":  2
                        },
                        {
                            "text":  "audience volunteer",
                            "points":  2
                        },
                        {
                            "text":  "his magic wand",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150105,
        "question":  "Name something a man better do for his psycho girlfriend on Valentine's Day or else.",
        "answers":  [
                        {
                            "text":  "gift/roses",
                            "points":  64
                        },
                        {
                            "text":  "dinner/date",
                            "points":  15
                        },
                        {
                            "text":  "anything she says",
                            "points":  5
                        },
                        {
                            "text":  "get kinky/handcuff",
                            "points":  4
                        },
                        {
                            "text":  "remember!",
                            "points":  4
                        },
                        {
                            "text":  "give card",
                            "points":  3
                        },
                        {
                            "text":  "refill her meds",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150106,
        "question":  "Your cat is like a mobster. She dropped the head of what animal on your bed?",
        "answers":  [
                        {
                            "text":  "mouse/rat",
                            "points":  59
                        },
                        {
                            "text":  "bird/ostrich",
                            "points":  22
                        },
                        {
                            "text":  "squirrel",
                            "points":  5
                        },
                        {
                            "text":  "dog",
                            "points":  4
                        },
                        {
                            "text":  "horse",
                            "points":  3
                        },
                        {
                            "text":  "lizard",
                            "points":  2
                        },
                        {
                            "text":  "human/my girlfriend",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150107,
        "question":  "The upside to a man getting divorced is that he doesn't have to go where anymore?",
        "answers":  [
                        {
                            "text":  "in-laws'",
                            "points":  49
                        },
                        {
                            "text":  "store/yarn shop",
                            "points":  32
                        },
                        {
                            "text":  "home/to satan",
                            "points":  6
                        },
                        {
                            "text":  "counseling",
                            "points":  4
                        },
                        {
                            "text":  "movie/sing-along",
                            "points":  2
                        },
                        {
                            "text":  "anywhere wife wants",
                            "points":  2
                        },
                        {
                            "text":  "church",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150108,
        "question":  "We asked 100 women... Name something you'd like Steve Harvey to do to your bottom.",
        "answers":  [
                        {
                            "text":  "nada/stay away",
                            "points":  46
                        },
                        {
                            "text":  "pat/spank it",
                            "points":  29
                        },
                        {
                            "text":  "admire/look at",
                            "points":  7
                        },
                        {
                            "text":  "rub/with mustache",
                            "points":  5
                        },
                        {
                            "text":  "compliment it",
                            "points":  4
                        },
                        {
                            "text":  "pay for plastic surg.",
                            "points":  3
                        },
                        {
                            "text":  "pinch it",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150109,
        "question":  "Name an animal that wonders, \"Why do you want to eat me? What did I ever do to you?\"",
        "answers":  [
                        {
                            "text":  "cow",
                            "points":  45
                        },
                        {
                            "text":  "chicken",
                            "points":  19
                        },
                        {
                            "text":  "pig",
                            "points":  18
                        },
                        {
                            "text":  "deer",
                            "points":  7
                        },
                        {
                            "text":  "lamb",
                            "points":  3
                        },
                        {
                            "text":  "fish/eel",
                            "points":  3
                        },
                        {
                            "text":  "rabbit/hare",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150110,
        "question":  "Fill in the blank: Kim Kardashian is glad she got new insurance because now she knows her ______s are in good hands.",
        "answers":  [
                        {
                            "text":  "butt cheeks",
                            "points":  41
                        },
                        {
                            "text":  "pointer sisters",
                            "points":  23
                        },
                        {
                            "text":  "kids",
                            "points":  12
                        },
                        {
                            "text":  "mansions",
                            "points":  9
                        },
                        {
                            "text":  "cars",
                            "points":  5
                        },
                        {
                            "text":  "jewels",
                            "points":  4
                        },
                        {
                            "text":  "lips",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150111,
        "question":  "Name a former president who as a young man could have been a male stripper.",
        "answers":  [
                        {
                            "text":  "john f. kennedy",
                            "points":  36
                        },
                        {
                            "text":  "bill clinton",
                            "points":  21
                        },
                        {
                            "text":  "barack obama",
                            "points":  19
                        },
                        {
                            "text":  "ronald reagan",
                            "points":  12
                        },
                        {
                            "text":  "abraham lincoln",
                            "points":  4
                        },
                        {
                            "text":  "george w. bush",
                            "points":  3
                        },
                        {
                            "text":  "thomas jefferson",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150112,
        "question":  "Name someone you hire to entertain who will put the \"fun\" back in \"funeral.\"",
        "answers":  [
                        {
                            "text":  "clown",
                            "points":  36
                        },
                        {
                            "text":  "steve/comedian",
                            "points":  21
                        },
                        {
                            "text":  "dj/band",
                            "points":  15
                        },
                        {
                            "text":  "magician",
                            "points":  11
                        },
                        {
                            "text":  "stripper",
                            "points":  7
                        },
                        {
                            "text":  "juggler",
                            "points":  5
                        },
                        {
                            "text":  "quirky pastor",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150113,
        "question":  "Name something about Kermit the Frog that other frogs might make fun of.",
        "answers":  [
                        {
                            "text":  "voice/talks",
                            "points":  35
                        },
                        {
                            "text":  "dates a pig",
                            "points":  31
                        },
                        {
                            "text":  "sings/plays banjo",
                            "points":  13
                        },
                        {
                            "text":  "bod/skinny legs",
                            "points":  10
                        },
                        {
                            "text":  "face/eyes",
                            "points":  4
                        },
                        {
                            "text":  "pointy collar",
                            "points":  2
                        },
                        {
                            "text":  "fame/career choice",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150114,
        "question":  "Name someone that Santa Claus might tell his shrink is really starting to annoy him.",
        "answers":  [
                        {
                            "text":  "the friggin' elves",
                            "points":  31
                        },
                        {
                            "text":  "needy mrs. c",
                            "points":  21
                        },
                        {
                            "text":  "reindeer",
                            "points":  16
                        },
                        {
                            "text":  "politicians",
                            "points":  13
                        },
                        {
                            "text":  "greedy/naughty kids",
                            "points":  12
                        },
                        {
                            "text":  "the grinch",
                            "points":  2
                        },
                        {
                            "text":  "devious easter bunny",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150115,
        "question":  "Name a sport that could make a kangaroo a superstar.",
        "answers":  [
                        {
                            "text":  "boxing",
                            "points":  29
                        },
                        {
                            "text":  "basketball",
                            "points":  28
                        },
                        {
                            "text":  "jumping",
                            "points":  21
                        },
                        {
                            "text":  "kickboxing",
                            "points":  9
                        },
                        {
                            "text":  "soccer",
                            "points":  5
                        },
                        {
                            "text":  "volleyball",
                            "points":  3
                        },
                        {
                            "text":  "football",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150116,
        "question":  "We asked 100 women... If you're blonde and married, tell me a place you absolutely never want to find a long, dark hair.",
        "answers":  [
                        {
                            "text":  "my bed",
                            "points":  54
                        },
                        {
                            "text":  "shower/tub",
                            "points":  15
                        },
                        {
                            "text":  "hubby's clothes",
                            "points":  14
                        },
                        {
                            "text":  "the car",
                            "points":  4
                        },
                        {
                            "text":  "toothbrush",
                            "points":  3
                        },
                        {
                            "text":  "hairbrush",
                            "points":  3
                        },
                        {
                            "text":  "growing on me",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150117,
        "question":  "Name a specific place you could be where you might not want any visitors.",
        "answers":  [
                        {
                            "text":  "bathroom/tub",
                            "points":  49
                        },
                        {
                            "text":  "hospital",
                            "points":  23
                        },
                        {
                            "text":  "honeymoon/vacay",
                            "points":  8
                        },
                        {
                            "text":  "bed/bedroom",
                            "points":  6
                        },
                        {
                            "text":  "prison",
                            "points":  6
                        },
                        {
                            "text":  "work",
                            "points":  2
                        },
                        {
                            "text":  "rehab",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150118,
        "question":  "Bob thought it was sexy when his wife wore a nurse's costume in the bedroom until she did what to him?",
        "answers":  [
                        {
                            "text":  "probed pooper",
                            "points":  45
                        },
                        {
                            "text":  "a shot/euthanized",
                            "points":  24
                        },
                        {
                            "text":  "took temp",
                            "points":  16
                        },
                        {
                            "text":  "an enema",
                            "points":  4
                        },
                        {
                            "text":  "drew blood/5 pints",
                            "points":  3
                        },
                        {
                            "text":  "shoved in catheter",
                            "points":  2
                        },
                        {
                            "text":  "turn head/cough",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150119,
        "question":  "Name a part of Mrs. Sanders that Colonel Sanders might say reminds him of a chicken.",
        "answers":  [
                        {
                            "text":  "legs/thighs",
                            "points":  44
                        },
                        {
                            "text":  "juicy breasts",
                            "points":  24
                        },
                        {
                            "text":  "neck/loose chin",
                            "points":  12
                        },
                        {
                            "text":  "arms/wings",
                            "points":  6
                        },
                        {
                            "text":  "cackle/yapping",
                            "points":  5
                        },
                        {
                            "text":  "face/beak",
                            "points":  3
                        },
                        {
                            "text":  "crusty feet",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150120,
        "question":  "We asked 100 men... I want to be so rich that instead of water in my swimming pool, it's filled with what?",
        "answers":  [
                        {
                            "text":  "champagne/booze",
                            "points":  42
                        },
                        {
                            "text":  "gold/cash",
                            "points":  40
                        },
                        {
                            "text":  "pudding/tapioca",
                            "points":  3
                        },
                        {
                            "text":  "oil",
                            "points":  3
                        },
                        {
                            "text":  "perrier",
                            "points":  3
                        },
                        {
                            "text":  "lime jell-o",
                            "points":  3
                        },
                        {
                            "text":  "hot chicks",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150121,
        "question":  "Name something people at the public pool did when grandpa jumped into the pool naked.",
        "answers":  [
                        {
                            "text":  "jumped out/ran",
                            "points":  42
                        },
                        {
                            "text":  "screamed/gasped",
                            "points":  21
                        },
                        {
                            "text":  "laughed",
                            "points":  15
                        },
                        {
                            "text":  "covered eyes",
                            "points":  10
                        },
                        {
                            "text":  "stared/puzzled",
                            "points":  3
                        },
                        {
                            "text":  "puked",
                            "points":  3
                        },
                        {
                            "text":  "got nude too!",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150122,
        "question":  "We asked 100 men... You're walking down the street. A pretty lady whistles at you. What do you do?",
        "answers":  [
                        {
                            "text":  "smile/laugh",
                            "points":  41
                        },
                        {
                            "text":  "whistle back/howl",
                            "points":  17
                        },
                        {
                            "text":  "wink",
                            "points":  11
                        },
                        {
                            "text":  "turn & look",
                            "points":  11
                        },
                        {
                            "text":  "wave",
                            "points":  6
                        },
                        {
                            "text":  "walk on/ignore",
                            "points":  6
                        },
                        {
                            "text":  "talk/ \"wassup, baby?\"",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150123,
        "question":  "We asked 100 married women... You'd hate to come home and find your husband using your what?",
        "answers":  [
                        {
                            "text":  "panties/clothes",
                            "points":  40
                        },
                        {
                            "text":  "toothbrush",
                            "points":  23
                        },
                        {
                            "text":  "hairbrush",
                            "points":  10
                        },
                        {
                            "text":  "teaser pleaser",
                            "points":  10
                        },
                        {
                            "text":  "body wash",
                            "points":  5
                        },
                        {
                            "text":  "deodorant",
                            "points":  4
                        },
                        {
                            "text":  "razor",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150124,
        "question":  "It's the morning after a wild party. Tell me what's floating in the hot tub.",
        "answers":  [
                        {
                            "text":  "booze/empties",
                            "points":  38
                        },
                        {
                            "text":  "panties/clothes",
                            "points":  34
                        },
                        {
                            "text":  "used condom",
                            "points":  11
                        },
                        {
                            "text":  "lengthy turd",
                            "points":  5
                        },
                        {
                            "text":  "ducky/pool toy",
                            "points":  3
                        },
                        {
                            "text":  "bubbles/scum",
                            "points":  3
                        },
                        {
                            "text":  "dead bodies",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150125,
        "question":  "Name something on the farm that the farmer's wife ran off with.",
        "answers":  [
                        {
                            "text":  "farmhand",
                            "points":  35
                        },
                        {
                            "text":  "animal/horse",
                            "points":  31
                        },
                        {
                            "text":  "tractor",
                            "points":  10
                        },
                        {
                            "text":  "money/savings",
                            "points":  6
                        },
                        {
                            "text":  "pickup truck/car",
                            "points":  5
                        },
                        {
                            "text":  "food/milk/eggs",
                            "points":  5
                        },
                        {
                            "text":  "his hoe/pitchfork",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150126,
        "question":  "We asked 100 married women... Name something a trophy husband has that your husband doesn't.",
        "answers":  [
                        {
                            "text":  "money/good job",
                            "points":  32
                        },
                        {
                            "text":  "abs/hot bod",
                            "points":  26
                        },
                        {
                            "text":  "studly face",
                            "points":  14
                        },
                        {
                            "text":  "sweet wheels",
                            "points":  11
                        },
                        {
                            "text":  "sense of romance",
                            "points":  9
                        },
                        {
                            "text":  "yacht",
                            "points":  2
                        },
                        {
                            "text":  "kindness",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150127,
        "question":  "Women love anything French, especially what?",
        "answers":  [
                        {
                            "text":  "food/fries",
                            "points":  31
                        },
                        {
                            "text":  "kissing",
                            "points":  18
                        },
                        {
                            "text":  "the men",
                            "points":  13
                        },
                        {
                            "text":  "perfume",
                            "points":  13
                        },
                        {
                            "text":  "wine/champagne",
                            "points":  8
                        },
                        {
                            "text":  "clothes/berets",
                            "points":  7
                        },
                        {
                            "text":  "accent/language",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  150128,
        "question":  "We asked 100 men... You're fishing in the ocean. You reel in a mermaid. What do you do?",
        "answers":  [
                        {
                            "text":  "keep her/take home",
                            "points":  26
                        },
                        {
                            "text":  "throw her back",
                            "points":  21
                        },
                        {
                            "text":  "kiss her",
                            "points":  16
                        },
                        {
                            "text":  "chat/flirt",
                            "points":  15
                        },
                        {
                            "text":  "take a pic",
                            "points":  9
                        },
                        {
                            "text":  "join for a swim",
                            "points":  5
                        },
                        {
                            "text":  "make love/babies",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150129,
        "question":  "Name an animal Jane imitates in the bedroom that Tarzan says really turns him on.",
        "answers":  [
                        {
                            "text":  "cheeta/monkey",
                            "points":  70
                        },
                        {
                            "text":  "tiger",
                            "points":  8
                        },
                        {
                            "text":  "lion",
                            "points":  6
                        },
                        {
                            "text":  "cougar/panther",
                            "points":  4
                        },
                        {
                            "text":  "fish",
                            "points":  3
                        },
                        {
                            "text":  "rabbit",
                            "points":  2
                        },
                        {
                            "text":  "snake",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150130,
        "question":  "Name something in your bathroom that you'd be surprised to see the dog using.",
        "answers":  [
                        {
                            "text":  "toilet/t.p.",
                            "points":  68
                        },
                        {
                            "text":  "toothbrush/paste",
                            "points":  13
                        },
                        {
                            "text":  "shower/tub",
                            "points":  4
                        },
                        {
                            "text":  "sink",
                            "points":  4
                        },
                        {
                            "text":  "bath rug",
                            "points":  2
                        },
                        {
                            "text":  "scale",
                            "points":  2
                        },
                        {
                            "text":  "razor",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150131,
        "question":  "Name an amusement park ride that best describes your love life.",
        "answers":  [
                        {
                            "text":  "roller coaster",
                            "points":  60
                        },
                        {
                            "text":  "merry-go-round",
                            "points":  13
                        },
                        {
                            "text":  "ferris wheel",
                            "points":  10
                        },
                        {
                            "text":  "tilt-a-whirl",
                            "points":  6
                        },
                        {
                            "text":  "train",
                            "points":  2
                        },
                        {
                            "text":  "haunted house",
                            "points":  2
                        },
                        {
                            "text":  "mr. toad's wild ride",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150132,
        "question":  "Name a complaint a woman might have about a man's lips.",
        "answers":  [
                        {
                            "text":  "dry/chapped",
                            "points":  59
                        },
                        {
                            "text":  "too thin/small",
                            "points":  15
                        },
                        {
                            "text":  "too big",
                            "points":  11
                        },
                        {
                            "text":  "soft/rubbery",
                            "points":  3
                        },
                        {
                            "text":  "wet/sloppy",
                            "points":  3
                        },
                        {
                            "text":  "too cold",
                            "points":  2
                        },
                        {
                            "text":  "taste/smell/of hummus",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150133,
        "question":  "At a magician's funeral, as a tribute, what might his magician friends do to his casket?",
        "answers":  [
                        {
                            "text":  "make disappear",
                            "points":  51
                        },
                        {
                            "text":  "saw in half",
                            "points":  23
                        },
                        {
                            "text":  "levitate/float",
                            "points":  10
                        },
                        {
                            "text":  "chain & padlock",
                            "points":  4
                        },
                        {
                            "text":  "fill w/ rabbits",
                            "points":  3
                        },
                        {
                            "text":  "burn/blow up",
                            "points":  2
                        },
                        {
                            "text":  "put doves in it",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150134,
        "question":  "We asked 100 women... Let's face it -- men are tools. What tool is your man?",
        "answers":  [
                        {
                            "text":  "hammer",
                            "points":  40
                        },
                        {
                            "text":  "screwdriver",
                            "points":  26
                        },
                        {
                            "text":  "monkey wrench",
                            "points":  14
                        },
                        {
                            "text":  "power drill/drill bit",
                            "points":  9
                        },
                        {
                            "text":  "saw",
                            "points":  2
                        },
                        {
                            "text":  "plunger",
                            "points":  2
                        },
                        {
                            "text":  "needle-nose pliers",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150135,
        "question":  "Name something a wife gives her husband after he finishes his chores.",
        "answers":  [
                        {
                            "text":  "kiss/hug",
                            "points":  39
                        },
                        {
                            "text":  "the promised land",
                            "points":  33
                        },
                        {
                            "text":  "food/beef-a-roni",
                            "points":  8
                        },
                        {
                            "text":  "massage/rubdown",
                            "points":  5
                        },
                        {
                            "text":  "booze/mich ultra",
                            "points":  4
                        },
                        {
                            "text":  "praise/\"good boy!\"",
                            "points":  3
                        },
                        {
                            "text":  "more chores",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150136,
        "question":  "Because it's hell, name something that's always out of order.",
        "answers":  [
                        {
                            "text":  "ac/fan",
                            "points":  39
                        },
                        {
                            "text":  "toilet",
                            "points":  23
                        },
                        {
                            "text":  "cold water",
                            "points":  15
                        },
                        {
                            "text":  "elevator",
                            "points":  7
                        },
                        {
                            "text":  "vending machine",
                            "points":  5
                        },
                        {
                            "text":  "ice maker",
                            "points":  3
                        },
                        {
                            "text":  "atm/banking",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150137,
        "question":  "Name a place you might run into your pastor that you'd both keep it a secret.",
        "answers":  [
                        {
                            "text":  "strip joint",
                            "points":  38
                        },
                        {
                            "text":  "bar/nightclub",
                            "points":  37
                        },
                        {
                            "text":  "adult shop",
                            "points":  9
                        },
                        {
                            "text":  "kiki's cathouse",
                            "points":  4
                        },
                        {
                            "text":  "casino",
                            "points":  3
                        },
                        {
                            "text":  "liquor store",
                            "points":  2
                        },
                        {
                            "text":  "skin flick",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150138,
        "question":  "If men could get pregnant, name something they'd probably complain about during pregnancy.",
        "answers":  [
                        {
                            "text":  "aches & pains",
                            "points":  38
                        },
                        {
                            "text":  "weight/stretch marks",
                            "points":  25
                        },
                        {
                            "text":  "morning sickness",
                            "points":  11
                        },
                        {
                            "text":  "no booze",
                            "points":  10
                        },
                        {
                            "text":  "pee too much",
                            "points":  5
                        },
                        {
                            "text":  "always tired",
                            "points":  4
                        },
                        {
                            "text":  "every. dang. thing.",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150139,
        "question":  "The wedding quickly went from a marriage to a divorce to a funeral after the bride caught the groom making out with who?",
        "answers":  [
                        {
                            "text":  "her bridesmaid/bff",
                            "points":  36
                        },
                        {
                            "text":  "her sister",
                            "points":  26
                        },
                        {
                            "text":  "her mother",
                            "points":  14
                        },
                        {
                            "text":  "his best man/bud",
                            "points":  12
                        },
                        {
                            "text":  "his ex",
                            "points":  3
                        },
                        {
                            "text":  "her dad",
                            "points":  2
                        },
                        {
                            "text":  "her daughter",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150140,
        "question":  "We asked 100 married women... If you got a divorce, what's the first thing you'd buy with the alimony?",
        "answers":  [
                        {
                            "text":  "car",
                            "points":  34
                        },
                        {
                            "text":  "house",
                            "points":  31
                        },
                        {
                            "text":  "a vacay",
                            "points":  16
                        },
                        {
                            "text":  "clothes/shoes",
                            "points":  5
                        },
                        {
                            "text":  "boobs/surgery",
                            "points":  4
                        },
                        {
                            "text":  "fancy food/wine",
                            "points":  3
                        },
                        {
                            "text":  "jewelry",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150141,
        "question":  "Name a part of Miss Piggy that Kermit likes to sit on like it's a lily pad.",
        "answers":  [
                        {
                            "text":  "her lap/thighs",
                            "points":  34
                        },
                        {
                            "text":  "her bloated belly",
                            "points":  18
                        },
                        {
                            "text":  "her face/snout",
                            "points":  16
                        },
                        {
                            "text":  "her plump dumper",
                            "points":  15
                        },
                        {
                            "text":  "her boobs",
                            "points":  4
                        },
                        {
                            "text":  "her back",
                            "points":  4
                        },
                        {
                            "text":  "her hair/head",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150142,
        "question":  "We asked 100 single women... On a date, tell me the very first thing you ask a man.",
        "answers":  [
                        {
                            "text":  "job?",
                            "points":  33
                        },
                        {
                            "text":  "age/near death?",
                            "points":  23
                        },
                        {
                            "text":  "married/taken?",
                            "points":  17
                        },
                        {
                            "text":  "where we going?",
                            "points":  7
                        },
                        {
                            "text":  "name?",
                            "points":  7
                        },
                        {
                            "text":  "what do for fun?",
                            "points":  6
                        },
                        {
                            "text":  "you into dudes?",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150143,
        "question":  "We asked 100 women... Fill in the blank: I've always thought it might be fun to ______ naked.",
        "answers":  [
                        {
                            "text":  "swim",
                            "points":  25
                        },
                        {
                            "text":  "dance",
                            "points":  18
                        },
                        {
                            "text":  "run/streak",
                            "points":  17
                        },
                        {
                            "text":  "sleep",
                            "points":  14
                        },
                        {
                            "text":  "sunbathe",
                            "points":  11
                        },
                        {
                            "text":  "bake/cook",
                            "points":  5
                        },
                        {
                            "text":  "watch tv/dr. phil",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  150144,
        "question":  "We asked 100 men... At church, when the preacher says \"Bow your head and pray,\" what do you pray for?",
        "answers":  [
                        {
                            "text":  "my family",
                            "points":  23
                        },
                        {
                            "text":  "sex/with choir",
                            "points":  17
                        },
                        {
                            "text":  "money",
                            "points":  17
                        },
                        {
                            "text":  "health/firm b.m.",
                            "points":  15
                        },
                        {
                            "text":  "sports team",
                            "points":  14
                        },
                        {
                            "text":  "church to end",
                            "points":  6
                        },
                        {
                            "text":  "saved/not go to hell",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150145,
        "question":  "Name a reason you might get kicked out of a public pool.",
        "answers":  [
                        {
                            "text":  "pee/pinch a loaf",
                            "points":  64
                        },
                        {
                            "text":  "nude water aerobics",
                            "points":  13
                        },
                        {
                            "text":  "fighting",
                            "points":  8
                        },
                        {
                            "text":  "smoking",
                            "points":  3
                        },
                        {
                            "text":  "being drunk",
                            "points":  2
                        },
                        {
                            "text":  "running",
                            "points":  2
                        },
                        {
                            "text":  "splash/cannonball",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150146,
        "question":  "Name something the assistant might like to do to the magician.",
        "answers":  [
                        {
                            "text":  "make him disappear",
                            "points":  58
                        },
                        {
                            "text":  "cut in half",
                            "points":  20
                        },
                        {
                            "text":  "assist him",
                            "points":  4
                        },
                        {
                            "text":  "prank/hide cape",
                            "points":  4
                        },
                        {
                            "text":  "lock in box/chest",
                            "points":  3
                        },
                        {
                            "text":  "throw knives",
                            "points":  3
                        },
                        {
                            "text":  "slip him the tongue",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150147,
        "question":  "We asked 100 single men... Name something about you that you worry women don't like.",
        "answers":  [
                        {
                            "text":  "my hair/bald",
                            "points":  57
                        },
                        {
                            "text":  "i'm a shrimp",
                            "points":  13
                        },
                        {
                            "text":  "car/mom van",
                            "points":  9
                        },
                        {
                            "text":  "bank acct.",
                            "points":  6
                        },
                        {
                            "text":  "live at home/share bed",
                            "points":  4
                        },
                        {
                            "text":  "bod/gut",
                            "points":  3
                        },
                        {
                            "text":  "serial killer face",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150148,
        "question":  "Name something used to keep food fresh that a mortician might use to keep a body fresh.",
        "answers":  [
                        {
                            "text":  "fridge/ice",
                            "points":  54
                        },
                        {
                            "text":  "plastic wrap/bag",
                            "points":  15
                        },
                        {
                            "text":  "salt",
                            "points":  7
                        },
                        {
                            "text":  "baking soda",
                            "points":  7
                        },
                        {
                            "text":  "container/tupperware",
                            "points":  5
                        },
                        {
                            "text":  "alcohol",
                            "points":  3
                        },
                        {
                            "text":  "lemon/lime juice",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150149,
        "question":  "Name something specific you do during a kiss that turns it into a passionate kiss.",
        "answers":  [
                        {
                            "text":  "tongue action",
                            "points":  50
                        },
                        {
                            "text":  "hold/grope/touch",
                            "points":  28
                        },
                        {
                            "text":  "close eyes",
                            "points":  6
                        },
                        {
                            "text":  "moan/ooh-aah",
                            "points":  4
                        },
                        {
                            "text":  "start boinking",
                            "points":  2
                        },
                        {
                            "text":  "keep on kissin'",
                            "points":  2
                        },
                        {
                            "text":  "bite the lip",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150150,
        "question":  "Fill in the blank: My workplace is a circus and my boss is the ______.",
        "answers":  [
                        {
                            "text":  "ringmaster",
                            "points":  47
                        },
                        {
                            "text":  "clown",
                            "points":  31
                        },
                        {
                            "text":  "dancing monkey",
                            "points":  5
                        },
                        {
                            "text":  "animal tamer",
                            "points":  4
                        },
                        {
                            "text":  "mule/ass",
                            "points":  3
                        },
                        {
                            "text":  "elephant",
                            "points":  2
                        },
                        {
                            "text":  "manure",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150151,
        "question":  "Fill in the blank: I know my dog loves me, but he's got to stop licking my ______.",
        "answers":  [
                        {
                            "text":  "face/mouth",
                            "points":  38
                        },
                        {
                            "text":  "feet/toes",
                            "points":  24
                        },
                        {
                            "text":  "loins/\"tackle box\"",
                            "points":  12
                        },
                        {
                            "text":  "booty",
                            "points":  6
                        },
                        {
                            "text":  "legs/ankles",
                            "points":  6
                        },
                        {
                            "text":  "hand/fingers",
                            "points":  5
                        },
                        {
                            "text":  "arm/elbow",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150152,
        "question":  "We asked 100 men... It's good if a woman texts you a naked picture of herself. It's bad if she's who?",
        "answers":  [
                        {
                            "text":  "my mother",
                            "points":  37
                        },
                        {
                            "text":  "my mother-in-law",
                            "points":  24
                        },
                        {
                            "text":  "my sister",
                            "points":  18
                        },
                        {
                            "text":  "celeb/judge judy",
                            "points":  5
                        },
                        {
                            "text":  "my ex",
                            "points":  4
                        },
                        {
                            "text":  "my neighbor",
                            "points":  3
                        },
                        {
                            "text":  "my grandma",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150153,
        "question":  "Most men think of themselves as part man and part what powerful animal?",
        "answers":  [
                        {
                            "text":  "lion",
                            "points":  35
                        },
                        {
                            "text":  "tiger",
                            "points":  21
                        },
                        {
                            "text":  "ape",
                            "points":  11
                        },
                        {
                            "text":  "horse",
                            "points":  11
                        },
                        {
                            "text":  "bear",
                            "points":  10
                        },
                        {
                            "text":  "bull",
                            "points":  4
                        },
                        {
                            "text":  "wolf",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150154,
        "question":  "Tell me something Sleeping Beauty probably wanted to do right after she woke up.",
        "answers":  [
                        {
                            "text":  "pee/bake brownies",
                            "points":  33
                        },
                        {
                            "text":  "chow down",
                            "points":  28
                        },
                        {
                            "text":  "brush teeth",
                            "points":  11
                        },
                        {
                            "text":  "shower/wash",
                            "points":  8
                        },
                        {
                            "text":  "beverage/mimosa",
                            "points":  7
                        },
                        {
                            "text":  "the hot prince/kiss",
                            "points":  5
                        },
                        {
                            "text":  "go back to sleep",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150155,
        "question":  "Name something a man waxes to make his wife happy.",
        "answers":  [
                        {
                            "text":  "his chest/nips",
                            "points":  30
                        },
                        {
                            "text":  "his back",
                            "points":  24
                        },
                        {
                            "text":  "his \"rhythm section\"",
                            "points":  17
                        },
                        {
                            "text":  "car/truck",
                            "points":  8
                        },
                        {
                            "text":  "face/unibrow",
                            "points":  7
                        },
                        {
                            "text":  "his furry fanny",
                            "points":  5
                        },
                        {
                            "text":  "the floor",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150156,
        "question":  "Name something you do at a restaurant if your waiter is ignoring you.",
        "answers":  [
                        {
                            "text":  "complain",
                            "points":  23
                        },
                        {
                            "text":  "dine & dash",
                            "points":  20
                        },
                        {
                            "text":  "raise hand/wave",
                            "points":  17
                        },
                        {
                            "text":  "low/no tip",
                            "points":  14
                        },
                        {
                            "text":  "\"hey you!\"",
                            "points":  14
                        },
                        {
                            "text":  "snap fingers",
                            "points":  3
                        },
                        {
                            "text":  "serious stink eye",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150157,
        "question":  "Name something you'd be shocked to discover your neighbors were selling.",
        "answers":  [
                        {
                            "text":  "drugs/weed",
                            "points":  72
                        },
                        {
                            "text":  "their brat kids",
                            "points":  6
                        },
                        {
                            "text":  "their house",
                            "points":  5
                        },
                        {
                            "text":  "my things",
                            "points":  4
                        },
                        {
                            "text":  "xxx tapes",
                            "points":  2
                        },
                        {
                            "text":  "their pet",
                            "points":  2
                        },
                        {
                            "text":  "toenails/body parts",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150158,
        "question":  "When a celebrity is using a public bathroom, name something he doesn't want a fan coming up to ask him.",
        "answers":  [
                        {
                            "text":  "autograph?",
                            "points":  62
                        },
                        {
                            "text":  "pic/selfie?",
                            "points":  10
                        },
                        {
                            "text":  "shake hands?",
                            "points":  8
                        },
                        {
                            "text":  "how's it goin'/hangin'?",
                            "points":  4
                        },
                        {
                            "text":  "got extra t.p.?",
                            "points":  3
                        },
                        {
                            "text":  "what doing/#1 or #2?",
                            "points":  3
                        },
                        {
                            "text":  "may i see your junk?",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150159,
        "question":  "Name a pet at a pet store you wouldn't let sleep on your bed.",
        "answers":  [
                        {
                            "text":  "snake",
                            "points":  58
                        },
                        {
                            "text":  "lizard/iguana",
                            "points":  10
                        },
                        {
                            "text":  "dog",
                            "points":  7
                        },
                        {
                            "text":  "spider/tarantula",
                            "points":  6
                        },
                        {
                            "text":  "hamster",
                            "points":  4
                        },
                        {
                            "text":  "fish",
                            "points":  4
                        },
                        {
                            "text":  "rat",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150160,
        "question":  "When he goes to heaven, name something Steve Harvey will be doing there.",
        "answers":  [
                        {
                            "text":  "jokes/laughing",
                            "points":  56
                        },
                        {
                            "text":  "hosting/feud",
                            "points":  25
                        },
                        {
                            "text":  "dressin' fly",
                            "points":  4
                        },
                        {
                            "text":  "singing",
                            "points":  2
                        },
                        {
                            "text":  "flirting/with wife",
                            "points":  2
                        },
                        {
                            "text":  "making faces",
                            "points":  2
                        },
                        {
                            "text":  "begging to get in",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150161,
        "question":  "Fill in the blank: A wife might tell her chef husband, \"I want you to rub ______ all over me.\"",
        "answers":  [
                        {
                            "text":  "oil/crisco",
                            "points":  51
                        },
                        {
                            "text":  "butter",
                            "points":  15
                        },
                        {
                            "text":  "whipped cream",
                            "points":  9
                        },
                        {
                            "text":  "sauce/marinade",
                            "points":  8
                        },
                        {
                            "text":  "chocolate",
                            "points":  5
                        },
                        {
                            "text":  "fruit",
                            "points":  3
                        },
                        {
                            "text":  "spice/pepper",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150162,
        "question":  "Name something a flight attendant would hate to see both the pilot and the copilot doing.",
        "answers":  [
                        {
                            "text":  "sleeping",
                            "points":  50
                        },
                        {
                            "text":  "making love/kiss'g",
                            "points":  20
                        },
                        {
                            "text":  "shots/drinking",
                            "points":  11
                        },
                        {
                            "text":  "drugs/crack",
                            "points":  5
                        },
                        {
                            "text":  "phone/game/text",
                            "points":  3
                        },
                        {
                            "text":  "leaving cockpit",
                            "points":  2
                        },
                        {
                            "text":  "arguing/fight'g",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150163,
        "question":  "We asked 100 married women... Tell me something you might notice about your husband that can make you think he was turning into a bat.",
        "answers":  [
                        {
                            "text":  "nocturnal",
                            "points":  43
                        },
                        {
                            "text":  "hangs upside down",
                            "points":  20
                        },
                        {
                            "text":  "wings/flies",
                            "points":  18
                        },
                        {
                            "text":  "hairy",
                            "points":  4
                        },
                        {
                            "text":  "grow'g fangs",
                            "points":  4
                        },
                        {
                            "text":  "sees in dark",
                            "points":  2
                        },
                        {
                            "text":  "big pointy ears",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150164,
        "question":  "We asked 100 women... When you talk to people about your guy, name something you exaggerate.",
        "answers":  [
                        {
                            "text":  "job/tech billionaire",
                            "points":  41
                        },
                        {
                            "text":  "kind/male oprah",
                            "points":  11
                        },
                        {
                            "text":  "sexy bod",
                            "points":  9
                        },
                        {
                            "text":  "helps w/ house",
                            "points":  8
                        },
                        {
                            "text":  "face/of brad pitt",
                            "points":  8
                        },
                        {
                            "text":  "humor/charm",
                            "points":  8
                        },
                        {
                            "text":  "smart/einstein",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  150165,
        "question":  "Name something that might be missing at a really cheap funeral.",
        "answers":  [
                        {
                            "text":  "casket",
                            "points":  38
                        },
                        {
                            "text":  "flowers",
                            "points":  32
                        },
                        {
                            "text":  "the deceased",
                            "points":  8
                        },
                        {
                            "text":  "food/drinks",
                            "points":  4
                        },
                        {
                            "text":  "guests/pallbearers",
                            "points":  4
                        },
                        {
                            "text":  "hearse/procession",
                            "points":  4
                        },
                        {
                            "text":  "music/soloist",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150166,
        "question":  "Name someone a man has a romantic dream about that he wouldn't tell his wife.",
        "answers":  [
                        {
                            "text":  "celeb/al roker",
                            "points":  37
                        },
                        {
                            "text":  "boss/coworker",
                            "points":  17
                        },
                        {
                            "text":  "his ex",
                            "points":  12
                        },
                        {
                            "text":  "her bff/his bff",
                            "points":  11
                        },
                        {
                            "text":  "her mom",
                            "points":  6
                        },
                        {
                            "text":  "his buddy's wife",
                            "points":  5
                        },
                        {
                            "text":  "her sister",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  150167,
        "question":  "We asked 100 women... Give me an S word that describes your man's lips.",
        "answers":  [
                        {
                            "text":  "sexy",
                            "points":  33
                        },
                        {
                            "text":  "soft",
                            "points":  28
                        },
                        {
                            "text":  "sweet",
                            "points":  14
                        },
                        {
                            "text":  "smooth",
                            "points":  7
                        },
                        {
                            "text":  "sensual",
                            "points":  5
                        },
                        {
                            "text":  "slimy",
                            "points":  3
                        },
                        {
                            "text":  "small",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150168,
        "question":  "Mr. Peanut divorced his wife after he caught her getting salty with what kind of nut?",
        "answers":  [
                        {
                            "text":  "cashew",
                            "points":  32
                        },
                        {
                            "text":  "almond",
                            "points":  20
                        },
                        {
                            "text":  "walnut",
                            "points":  16
                        },
                        {
                            "text":  "hazelnut/filbert",
                            "points":  8
                        },
                        {
                            "text":  "brazil nut",
                            "points":  7
                        },
                        {
                            "text":  "pistachio",
                            "points":  6
                        },
                        {
                            "text":  "pecan",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150169,
        "question":  "Name something grandma might accidentally rip off of grandpa in the heat of passion.",
        "answers":  [
                        {
                            "text":  "clothes/suspenders",
                            "points":  28
                        },
                        {
                            "text":  "toupee",
                            "points":  27
                        },
                        {
                            "text":  "dentures",
                            "points":  15
                        },
                        {
                            "text":  "hearing aid",
                            "points":  11
                        },
                        {
                            "text":  "glasses",
                            "points":  6
                        },
                        {
                            "text":  "body hair/stache",
                            "points":  3
                        },
                        {
                            "text":  "oxygen",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150170,
        "question":  "We asked 100 men... In hell, all strippers look like your who?",
        "answers":  [
                        {
                            "text":  "mother",
                            "points":  27
                        },
                        {
                            "text":  "grandmother",
                            "points":  20
                        },
                        {
                            "text":  "ex",
                            "points":  19
                        },
                        {
                            "text":  "mother-in-law",
                            "points":  18
                        },
                        {
                            "text":  "wife/mate",
                            "points":  3
                        },
                        {
                            "text":  "dad",
                            "points":  3
                        },
                        {
                            "text":  "dog",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150171,
        "question":  "If you were on Steve Harvey's Christmas list, what do you hope he puts in your stocking?",
        "answers":  [
                        {
                            "text":  "money/his check",
                            "points":  73
                        },
                        {
                            "text":  "a lincoln/car keys",
                            "points":  7
                        },
                        {
                            "text":  "a hottie/himself",
                            "points":  4
                        },
                        {
                            "text":  "event/show ticket",
                            "points":  2
                        },
                        {
                            "text":  "tie/suit",
                            "points":  2
                        },
                        {
                            "text":  "jewelry/gold",
                            "points":  2
                        },
                        {
                            "text":  "jokes",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150172,
        "question":  "We asked 100 single men... Name a place you look for a respectable woman to bring home to mother.",
        "answers":  [
                        {
                            "text":  "church",
                            "points":  60
                        },
                        {
                            "text":  "store/piggly wiggly",
                            "points":  8
                        },
                        {
                            "text":  "school/sorority",
                            "points":  7
                        },
                        {
                            "text":  "library",
                            "points":  5
                        },
                        {
                            "text":  "bar",
                            "points":  5
                        },
                        {
                            "text":  "craigslist/app",
                            "points":  5
                        },
                        {
                            "text":  "work",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150173,
        "question":  "Name a job for which the recruiting ad should say \"Ugly people need not apply.\"",
        "answers":  [
                        {
                            "text":  "model",
                            "points":  57
                        },
                        {
                            "text":  "stripper/dancer",
                            "points":  15
                        },
                        {
                            "text":  "waitress/hooters",
                            "points":  6
                        },
                        {
                            "text":  "tv anchor/actor",
                            "points":  6
                        },
                        {
                            "text":  "banker/teller",
                            "points":  3
                        },
                        {
                            "text":  "flight attendant",
                            "points":  3
                        },
                        {
                            "text":  "bartender",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150174,
        "question":  "Name something a man might fantasize about Beyoncé putting on him.",
        "answers":  [
                        {
                            "text":  "her bod/lips",
                            "points":  41
                        },
                        {
                            "text":  "lotion/oil",
                            "points":  20
                        },
                        {
                            "text":  "a rubber",
                            "points":  14
                        },
                        {
                            "text":  "whipped cream",
                            "points":  6
                        },
                        {
                            "text":  "her panties/bra",
                            "points":  5
                        },
                        {
                            "text":  "his clothes/pants",
                            "points":  3
                        },
                        {
                            "text":  "ring/jewelry",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150175,
        "question":  "Name something a leprechaun might say about himself in an online dating ad.",
        "answers":  [
                        {
                            "text":  "huge pot of gold",
                            "points":  36
                        },
                        {
                            "text":  "magical/get lucky",
                            "points":  23
                        },
                        {
                            "text":  "tall/for a short guy",
                            "points":  14
                        },
                        {
                            "text":  "love the color green",
                            "points":  7
                        },
                        {
                            "text":  "fun/charming",
                            "points":  6
                        },
                        {
                            "text":  "i'm irish",
                            "points":  3
                        },
                        {
                            "text":  "i'm a cutie/hot",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150176,
        "question":  "When grandma and grandpa get romantic, name a place his hearing aid gets caught.",
        "answers":  [
                        {
                            "text":  "her hair/wig",
                            "points":  32
                        },
                        {
                            "text":  "bra/clothes",
                            "points":  26
                        },
                        {
                            "text":  "pillow/bedding",
                            "points":  17
                        },
                        {
                            "text":  "her dentures/mouth",
                            "points":  6
                        },
                        {
                            "text":  "her jewelry",
                            "points":  5
                        },
                        {
                            "text":  "boobs/lake titicaca",
                            "points":  3
                        },
                        {
                            "text":  "her warm thighs",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150177,
        "question":  "Name a part of Mr. Potato Head that he hopes doesn't pop off when he's making love.",
        "answers":  [
                        {
                            "text":  "his nose",
                            "points":  31
                        },
                        {
                            "text":  "his mouth/sexy lips",
                            "points":  27
                        },
                        {
                            "text":  "his eyes",
                            "points":  15
                        },
                        {
                            "text":  "wang/tater maker",
                            "points":  9
                        },
                        {
                            "text":  "his arms",
                            "points":  4
                        },
                        {
                            "text":  "his ears",
                            "points":  3
                        },
                        {
                            "text":  "his legs",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150178,
        "question":  "Name something you'd hate to find in your mouth when you wake up in the morning.",
        "answers":  [
                        {
                            "text":  "bug/worm",
                            "points":  53
                        },
                        {
                            "text":  "mystery hair",
                            "points":  19
                        },
                        {
                            "text":  "gum/food",
                            "points":  6
                        },
                        {
                            "text":  "lost teeth",
                            "points":  4
                        },
                        {
                            "text":  "bad taste/odor",
                            "points":  4
                        },
                        {
                            "text":  "puke",
                            "points":  3
                        },
                        {
                            "text":  "snake/asp",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150179,
        "question":  "I just looked at myself naked in the mirror, and I can't believe the size of my what?",
        "answers":  [
                        {
                            "text":  "gut/waist",
                            "points":  51
                        },
                        {
                            "text":  "butt/sphincter",
                            "points":  12
                        },
                        {
                            "text":  "legs/thighs",
                            "points":  7
                        },
                        {
                            "text":  "nose/nostrils",
                            "points":  6
                        },
                        {
                            "text":  "diddlestick",
                            "points":  6
                        },
                        {
                            "text":  "chest/milkshakes",
                            "points":  5
                        },
                        {
                            "text":  "head/face",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150180,
        "question":  "Name something you might be afraid to tell your boss that you need.",
        "answers":  [
                        {
                            "text":  "mo' money",
                            "points":  45
                        },
                        {
                            "text":  "time off/vacay",
                            "points":  29
                        },
                        {
                            "text":  "help",
                            "points":  6
                        },
                        {
                            "text":  "a date/some lovin'",
                            "points":  4
                        },
                        {
                            "text":  "new computer",
                            "points":  3
                        },
                        {
                            "text":  "break",
                            "points":  2
                        },
                        {
                            "text":  "toilet paper",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150181,
        "question":  "Fill in the blank: I've been known to ______ my own bottom.",
        "answers":  [
                        {
                            "text":  "spank/pat",
                            "points":  34
                        },
                        {
                            "text":  "wipe/wash",
                            "points":  20
                        },
                        {
                            "text":  "scratch",
                            "points":  14
                        },
                        {
                            "text":  "sit on",
                            "points":  10
                        },
                        {
                            "text":  "look at/admire",
                            "points":  7
                        },
                        {
                            "text":  "massage/rub",
                            "points":  3
                        },
                        {
                            "text":  "heel kick",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150182,
        "question":  "Fill in the blank: I think I had a great time at the party. The last thing I remember doing was ______ing.",
        "answers":  [
                        {
                            "text":  "dancing",
                            "points":  27
                        },
                        {
                            "text":  "shots/mind erasers",
                            "points":  26
                        },
                        {
                            "text":  "leaving/arriving",
                            "points":  14
                        },
                        {
                            "text":  "kissing everyone",
                            "points":  7
                        },
                        {
                            "text":  "laughing",
                            "points":  6
                        },
                        {
                            "text":  "chatting/flirt'g",
                            "points":  6
                        },
                        {
                            "text":  "passing out",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  150183,
        "question":  "We asked 100 women... Name something a man should be holding if he wants to melt your heart.",
        "answers":  [
                        {
                            "text":  "puppy/animal",
                            "points":  27
                        },
                        {
                            "text":  "flowers",
                            "points":  21
                        },
                        {
                            "text":  "ring/jewelry",
                            "points":  16
                        },
                        {
                            "text":  "my hand",
                            "points":  14
                        },
                        {
                            "text":  "money",
                            "points":  5
                        },
                        {
                            "text":  "box of chocolates",
                            "points":  5
                        },
                        {
                            "text":  "a baby",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150184,
        "question":  "Name an activity you hope a houseguest doesn't do in the nude.",
        "answers":  [
                        {
                            "text":  "sleep",
                            "points":  21
                        },
                        {
                            "text":  "cook/brew coffee",
                            "points":  18
                        },
                        {
                            "text":  "eat",
                            "points":  12
                        },
                        {
                            "text":  "walk around",
                            "points":  12
                        },
                        {
                            "text":  "dance/twerk",
                            "points":  11
                        },
                        {
                            "text":  "exercise/yoga",
                            "points":  11
                        },
                        {
                            "text":  "watch tv/on sofa",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  150185,
        "question":  "Name a reason you'd stop kissing mid-kiss.",
        "answers":  [
                        {
                            "text":  "rank breath/taste",
                            "points":  53
                        },
                        {
                            "text":  "looming belch",
                            "points":  9
                        },
                        {
                            "text":  "to sneeze",
                            "points":  8
                        },
                        {
                            "text":  "fartus interruptus",
                            "points":  5
                        },
                        {
                            "text":  "person/mate walks in",
                            "points":  5
                        },
                        {
                            "text":  "doorbell/phone",
                            "points":  5
                        },
                        {
                            "text":  "ill/heart attack",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  150186,
        "question":  "Name a specific reason a policeman might not give a ticket to a woman who's driving 80 miles per hour.",
        "answers":  [
                        {
                            "text":  "hot/boobalicious",
                            "points":  51
                        },
                        {
                            "text":  "emergency/in labor",
                            "points":  12
                        },
                        {
                            "text":  "she cries",
                            "points":  9
                        },
                        {
                            "text":  "she flirts",
                            "points":  7
                        },
                        {
                            "text":  "she's naked!",
                            "points":  5
                        },
                        {
                            "text":  "can't catch her",
                            "points":  3
                        },
                        {
                            "text":  "it's his wife",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150187,
        "question":  "The first rule on a first date is never eat what?",
        "answers":  [
                        {
                            "text":  "garlic",
                            "points":  48
                        },
                        {
                            "text":  "onions",
                            "points":  19
                        },
                        {
                            "text":  "beans",
                            "points":  6
                        },
                        {
                            "text":  "spaghetti",
                            "points":  6
                        },
                        {
                            "text":  "seafood/lobster",
                            "points":  5
                        },
                        {
                            "text":  "spinach",
                            "points":  3
                        },
                        {
                            "text":  "ribs",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150188,
        "question":  "Name something a man is holding in his hands that he might kiss.",
        "answers":  [
                        {
                            "text":  "gal/guy/boobs",
                            "points":  43
                        },
                        {
                            "text":  "a baby",
                            "points":  15
                        },
                        {
                            "text":  "money",
                            "points":  11
                        },
                        {
                            "text":  "dog/pet",
                            "points":  10
                        },
                        {
                            "text":  "a ring",
                            "points":  5
                        },
                        {
                            "text":  "pic/of self",
                            "points":  3
                        },
                        {
                            "text":  "trophy",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150189,
        "question":  "Name something a farmer might buy for his favorite cow.",
        "answers":  [
                        {
                            "text":  "hay/munchies",
                            "points":  41
                        },
                        {
                            "text":  "cowbell",
                            "points":  36
                        },
                        {
                            "text":  "a hot bull",
                            "points":  3
                        },
                        {
                            "text":  "blanket/quilt",
                            "points":  3
                        },
                        {
                            "text":  "teat warmer",
                            "points":  3
                        },
                        {
                            "text":  "cute hair bow",
                            "points":  2
                        },
                        {
                            "text":  "new milk'g machine",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150190,
        "question":  "Name something that might come off an old mortician and end up in the deceased's coffin.",
        "answers":  [
                        {
                            "text":  "hair/toupee",
                            "points":  38
                        },
                        {
                            "text":  "jewelry/watch",
                            "points":  18
                        },
                        {
                            "text":  "teeth",
                            "points":  16
                        },
                        {
                            "text":  "glasses/monocle",
                            "points":  9
                        },
                        {
                            "text":  "booger/snot",
                            "points":  4
                        },
                        {
                            "text":  "skin/dandruff",
                            "points":  3
                        },
                        {
                            "text":  "hearing aid",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150191,
        "question":  "Fill in the blank: Are those chocolate chips or did a ______ poop in my cookie dough?",
        "answers":  [
                        {
                            "text":  "mouse/rat",
                            "points":  36
                        },
                        {
                            "text":  "bunny",
                            "points":  30
                        },
                        {
                            "text":  "dog",
                            "points":  8
                        },
                        {
                            "text":  "hamster",
                            "points":  6
                        },
                        {
                            "text":  "bird",
                            "points":  4
                        },
                        {
                            "text":  "keebler elf",
                            "points":  3
                        },
                        {
                            "text":  "bug",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150192,
        "question":  "What might a lady pig find sexy about her big ol' hog?",
        "answers":  [
                        {
                            "text":  "fat/booty/belly",
                            "points":  29
                        },
                        {
                            "text":  "fine face/snout",
                            "points":  24
                        },
                        {
                            "text":  "curly tail",
                            "points":  20
                        },
                        {
                            "text":  "sexy snout",
                            "points":  5
                        },
                        {
                            "text":  "muddy/\"dirty boy\"",
                            "points":  5
                        },
                        {
                            "text":  "soft skin/fur",
                            "points":  4
                        },
                        {
                            "text":  "pungent scent",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150193,
        "question":  "If a wife sold her husband's golf clubs without asking, name something of hers he might sell.",
        "answers":  [
                        {
                            "text":  "jewelry/ring",
                            "points":  28
                        },
                        {
                            "text":  "clothes/shoes",
                            "points":  24
                        },
                        {
                            "text":  "purse/louis vuitton",
                            "points":  12
                        },
                        {
                            "text":  "her car",
                            "points":  11
                        },
                        {
                            "text":  "makeup",
                            "points":  11
                        },
                        {
                            "text":  "books",
                            "points":  2
                        },
                        {
                            "text":  "sewing machine",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150194,
        "question":  "Name something a wife might pay a mortician to do to her cheating husband's body.",
        "answers":  [
                        {
                            "text":  "chop him up",
                            "points":  59
                        },
                        {
                            "text":  "make up/paint face",
                            "points":  13
                        },
                        {
                            "text":  "shave hair",
                            "points":  5
                        },
                        {
                            "text":  "tacky outfit",
                            "points":  4
                        },
                        {
                            "text":  "rip out heart",
                            "points":  3
                        },
                        {
                            "text":  "cremate",
                            "points":  3
                        },
                        {
                            "text":  "write/carve \"ho\"",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150195,
        "question":  "Name something a woman wears to a funeral when she has her sights set on the widower.",
        "answers":  [
                        {
                            "text":  "sexy dress/skirt",
                            "points":  58
                        },
                        {
                            "text":  "cute hat/veil",
                            "points":  7
                        },
                        {
                            "text":  "makeup/red lipstick",
                            "points":  5
                        },
                        {
                            "text":  "low-cut blouse",
                            "points":  5
                        },
                        {
                            "text":  "perfume",
                            "points":  5
                        },
                        {
                            "text":  "killer shades",
                            "points":  5
                        },
                        {
                            "text":  "do-me stilettos",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150196,
        "question":  "The Colonel had a dream that a chicken was doing what to him?",
        "answers":  [
                        {
                            "text":  "cooking/eating",
                            "points":  55
                        },
                        {
                            "text":  "pecking",
                            "points":  13
                        },
                        {
                            "text":  "choking/killing",
                            "points":  5
                        },
                        {
                            "text":  "chasing",
                            "points":  5
                        },
                        {
                            "text":  "breading him",
                            "points":  4
                        },
                        {
                            "text":  "plucking",
                            "points":  4
                        },
                        {
                            "text":  "making sweet love",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150197,
        "question":  "You know it's going to be a wild party if the invitation says \"Bring your own\" what?",
        "answers":  [
                        {
                            "text":  "keg/booze",
                            "points":  52
                        },
                        {
                            "text":  "condoms",
                            "points":  11
                        },
                        {
                            "text":  "bong/drugs",
                            "points":  9
                        },
                        {
                            "text":  "babe",
                            "points":  7
                        },
                        {
                            "text":  "handcuffs/sex toys",
                            "points":  4
                        },
                        {
                            "text":  "bed/pillows",
                            "points":  3
                        },
                        {
                            "text":  "gun & ammo",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150198,
        "question":  "We asked 100 women... Name something a bag of french fries and a man have in common.",
        "answers":  [
                        {
                            "text":  "salty",
                            "points":  39
                        },
                        {
                            "text":  "greasy",
                            "points":  16
                        },
                        {
                            "text":  "tasty",
                            "points":  12
                        },
                        {
                            "text":  "better hot/heated up",
                            "points":  8
                        },
                        {
                            "text":  "cheap",
                            "points":  5
                        },
                        {
                            "text":  "not good for me",
                            "points":  5
                        },
                        {
                            "text":  "limp/soggy",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150199,
        "question":  "You hear a knock on the door. Who do you hope isn't there when you answer?",
        "answers":  [
                        {
                            "text":  "the fuzz",
                            "points":  33
                        },
                        {
                            "text":  "salesperson",
                            "points":  15
                        },
                        {
                            "text":  "my ex",
                            "points":  11
                        },
                        {
                            "text":  "clergy/missionary",
                            "points":  9
                        },
                        {
                            "text":  "in-law/relative",
                            "points":  8
                        },
                        {
                            "text":  "irs/bill collector",
                            "points":  8
                        },
                        {
                            "text":  "grim reaper",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  150200,
        "question":  "We asked 100 women... When a man moves in for a kiss, what might you see that you'd push him away?",
        "answers":  [
                        {
                            "text":  "booger/snot trail",
                            "points":  29
                        },
                        {
                            "text":  "food in teeth/face",
                            "points":  22
                        },
                        {
                            "text":  "jacked teeth",
                            "points":  15
                        },
                        {
                            "text":  "cold sore",
                            "points":  11
                        },
                        {
                            "text":  "wedding ring",
                            "points":  6
                        },
                        {
                            "text":  "exploding zit",
                            "points":  3
                        },
                        {
                            "text":  "nose hair",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150201,
        "question":  "We asked 100 married women... Name a household appliance that reminds you of how your husband makes love.",
        "answers":  [
                        {
                            "text":  "stove/oven",
                            "points":  27
                        },
                        {
                            "text":  "blender/processor",
                            "points":  18
                        },
                        {
                            "text":  "vacuum",
                            "points":  14
                        },
                        {
                            "text":  "toaster",
                            "points":  10
                        },
                        {
                            "text":  "slow cooker",
                            "points":  10
                        },
                        {
                            "text":  "mixer",
                            "points":  5
                        },
                        {
                            "text":  "washing machine",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  150202,
        "question":  "Name a Christmas decoration a nudist might put on themselves at Christmastime.",
        "answers":  [
                        {
                            "text":  "mistletoe",
                            "points":  25
                        },
                        {
                            "text":  "star/ornament",
                            "points":  16
                        },
                        {
                            "text":  "tinsel",
                            "points":  14
                        },
                        {
                            "text":  "wreath",
                            "points":  10
                        },
                        {
                            "text":  "lights/bulb",
                            "points":  10
                        },
                        {
                            "text":  "bow",
                            "points":  9
                        },
                        {
                            "text":  "garland",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  150203,
        "question":  "Admit it -- you've fantasized about doing what to your boss?",
        "answers":  [
                        {
                            "text":  "kill/run over",
                            "points":  23
                        },
                        {
                            "text":  "smack/punch",
                            "points":  22
                        },
                        {
                            "text":  "tell off/quit",
                            "points":  16
                        },
                        {
                            "text":  "fire/get him fired",
                            "points":  12
                        },
                        {
                            "text":  "go to pound town",
                            "points":  8
                        },
                        {
                            "text":  "gag/torture",
                            "points":  5
                        },
                        {
                            "text":  "ignore/walk away",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150204,
        "question":  "Name something that a boy might ask his new girlfriend not to wear when meeting his parents.",
        "answers":  [
                        {
                            "text":  "miniskirt/dress",
                            "points":  22
                        },
                        {
                            "text":  "low-cut/skimpy top",
                            "points":  20
                        },
                        {
                            "text":  "nose ring/jewelry",
                            "points":  19
                        },
                        {
                            "text":  "daisy dukes",
                            "points":  10
                        },
                        {
                            "text":  "string bikini",
                            "points":  8
                        },
                        {
                            "text":  "thong",
                            "points":  6
                        },
                        {
                            "text":  "stripper heels",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150205,
        "question":  "The doorbell rings. You open the door. You see Steve Harvey standing outside holding a what?",
        "answers":  [
                        {
                            "text":  "fat check/cash",
                            "points":  60
                        },
                        {
                            "text":  "microphone",
                            "points":  11
                        },
                        {
                            "text":  "6-pack/booze",
                            "points":  4
                        },
                        {
                            "text":  "flowers",
                            "points":  4
                        },
                        {
                            "text":  "puppy/animal",
                            "points":  3
                        },
                        {
                            "text":  "pizza delivery/food",
                            "points":  3
                        },
                        {
                            "text":  "feud card/game",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150206,
        "question":  "Name something you might get to do at a summer camp just for adults.",
        "answers":  [
                        {
                            "text":  "glug, glug, glug",
                            "points":  58
                        },
                        {
                            "text":  "shag/swap mates",
                            "points":  9
                        },
                        {
                            "text":  "swim/skinny-dip",
                            "points":  8
                        },
                        {
                            "text":  "sleep",
                            "points":  6
                        },
                        {
                            "text":  "fish/shoot",
                            "points":  3
                        },
                        {
                            "text":  "stay out late",
                            "points":  2
                        },
                        {
                            "text":  "gamble",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150207,
        "question":  "Name something that would be a lot more fun to do at a nudist camp than a regular camp.",
        "answers":  [
                        {
                            "text":  "sports/exercise",
                            "points":  49
                        },
                        {
                            "text":  "twister/games",
                            "points":  12
                        },
                        {
                            "text":  "sunbathe",
                            "points":  8
                        },
                        {
                            "text":  "dancing",
                            "points":  7
                        },
                        {
                            "text":  "sex/\"woodworking\"",
                            "points":  5
                        },
                        {
                            "text":  "people watch",
                            "points":  4
                        },
                        {
                            "text":  "cook/weenie roast",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150208,
        "question":  "What might you do outside in the nude to give your neighbors something to talk about?",
        "answers":  [
                        {
                            "text":  "yard work",
                            "points":  41
                        },
                        {
                            "text":  "sunbathe/lounge",
                            "points":  16
                        },
                        {
                            "text":  "exercise/yoga",
                            "points":  10
                        },
                        {
                            "text":  "dance",
                            "points":  8
                        },
                        {
                            "text":  "swim",
                            "points":  5
                        },
                        {
                            "text":  "wash car",
                            "points":  4
                        },
                        {
                            "text":  "pee proudly",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150209,
        "question":  "Name something a circus clown's wife might get tired of finding in their bed.",
        "answers":  [
                        {
                            "text":  "big red schnoz",
                            "points":  40
                        },
                        {
                            "text":  "makeup stain",
                            "points":  14
                        },
                        {
                            "text":  "a horn",
                            "points":  10
                        },
                        {
                            "text":  "big shoes",
                            "points":  9
                        },
                        {
                            "text":  "10 other clowns",
                            "points":  7
                        },
                        {
                            "text":  "confetti/glitter",
                            "points":  4
                        },
                        {
                            "text":  "wig/rainbow hair",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150210,
        "question":  "Name something a cheap person might use their earwax for.",
        "answers":  [
                        {
                            "text":  "candles",
                            "points":  39
                        },
                        {
                            "text":  "glue/envelope seal",
                            "points":  20
                        },
                        {
                            "text":  "lotion/lube",
                            "points":  8
                        },
                        {
                            "text":  "lip balm",
                            "points":  7
                        },
                        {
                            "text":  "hair gel/hair wax",
                            "points":  5
                        },
                        {
                            "text":  "polishing/car",
                            "points":  5
                        },
                        {
                            "text":  "food/cooking",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150211,
        "question":  "Name something a wife does in the house that makes her husband hide in the basement.",
        "answers":  [
                        {
                            "text":  "cleans",
                            "points":  38
                        },
                        {
                            "text":  "nags/yells",
                            "points":  25
                        },
                        {
                            "text":  "has gal's over",
                            "points":  9
                        },
                        {
                            "text":  "sings/showtunes",
                            "points":  7
                        },
                        {
                            "text":  "decorates",
                            "points":  3
                        },
                        {
                            "text":  "cooks",
                            "points":  3
                        },
                        {
                            "text":  "cries",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150212,
        "question":  "We asked 100 women... Name something you hope happens to all the guys who've ever dumped you.",
        "answers":  [
                        {
                            "text":  "dumped/alone 4-ever",
                            "points":  37
                        },
                        {
                            "text":  "go bald",
                            "points":  12
                        },
                        {
                            "text":  "mr. softie/falls off",
                            "points":  11
                        },
                        {
                            "text":  "drug-resistant std",
                            "points":  9
                        },
                        {
                            "text":  "paintful death",
                            "points":  7
                        },
                        {
                            "text":  "find happiness",
                            "points":  7
                        },
                        {
                            "text":  "gain 300 lbs.",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  150213,
        "question":  "Grandma pranked grandpa by putting Viagra in his food right before he had to go where?",
        "answers":  [
                        {
                            "text":  "church",
                            "points":  35
                        },
                        {
                            "text":  "doc/dentist",
                            "points":  30
                        },
                        {
                            "text":  "to bed",
                            "points":  7
                        },
                        {
                            "text":  "store/bass pro shops",
                            "points":  5
                        },
                        {
                            "text":  "work/interview",
                            "points":  5
                        },
                        {
                            "text":  "to pee/bathroom",
                            "points":  3
                        },
                        {
                            "text":  "game night/bingo",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150214,
        "question":  "Name something a woman might love to hear that her ex-husband has lost.",
        "answers":  [
                        {
                            "text":  "his floozy",
                            "points":  32
                        },
                        {
                            "text":  "every. darn. dime.",
                            "points":  31
                        },
                        {
                            "text":  "his beef torpedo",
                            "points":  11
                        },
                        {
                            "text":  "his job",
                            "points":  5
                        },
                        {
                            "text":  "his life",
                            "points":  3
                        },
                        {
                            "text":  "his house",
                            "points":  3
                        },
                        {
                            "text":  "his mind",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150215,
        "question":  "A woman would not be proud to have the world's largest what?",
        "answers":  [
                        {
                            "text":  "butt/wind instrument",
                            "points":  31
                        },
                        {
                            "text":  "schnoz",
                            "points":  24
                        },
                        {
                            "text":  "feet/toe",
                            "points":  10
                        },
                        {
                            "text":  "boobs",
                            "points":  9
                        },
                        {
                            "text":  "gut",
                            "points":  8
                        },
                        {
                            "text":  "man/hubby",
                            "points":  3
                        },
                        {
                            "text":  "mouth",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150216,
        "question":  "Name something people in Beverly Hills might have in their earthquake survival kit.",
        "answers":  [
                        {
                            "text":  "cristal/booze",
                            "points":  24
                        },
                        {
                            "text":  "$$$/black amex",
                            "points":  20
                        },
                        {
                            "text":  "perrier/water",
                            "points":  18
                        },
                        {
                            "text":  "caviar/food",
                            "points":  14
                        },
                        {
                            "text":  "cell/emergency #",
                            "points":  5
                        },
                        {
                            "text":  "jewelry",
                            "points":  4
                        },
                        {
                            "text":  "makeup",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150217,
        "question":  "A wife's wish might be that just as her husband says he's leaving her, he's hit by what?",
        "answers":  [
                        {
                            "text":  "car/truck/bus",
                            "points":  52
                        },
                        {
                            "text":  "lightning",
                            "points":  10
                        },
                        {
                            "text":  "guilt/remorse",
                            "points":  8
                        },
                        {
                            "text":  "a fist/hers",
                            "points":  5
                        },
                        {
                            "text":  "a train",
                            "points":  5
                        },
                        {
                            "text":  "a rock/meteor",
                            "points":  4
                        },
                        {
                            "text":  "a prison sentence",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150218,
        "question":  "Grandpa likes to wear one of grandma's bras so he can carry his what in it?",
        "answers":  [
                        {
                            "text":  "money/wallet",
                            "points":  40
                        },
                        {
                            "text":  "beer/flask",
                            "points":  13
                        },
                        {
                            "text":  "food/melons",
                            "points":  12
                        },
                        {
                            "text":  "teeth",
                            "points":  7
                        },
                        {
                            "text":  "phone",
                            "points":  6
                        },
                        {
                            "text":  "gun",
                            "points":  5
                        },
                        {
                            "text":  "\"his package\"",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150219,
        "question":  "Name something you'd hate to have happen while you're on a tanning bed.",
        "answers":  [
                        {
                            "text":  "get burned",
                            "points":  37
                        },
                        {
                            "text":  "fall asleep",
                            "points":  15
                        },
                        {
                            "text":  "stuck/locked in",
                            "points":  10
                        },
                        {
                            "text":  "power outage",
                            "points":  9
                        },
                        {
                            "text":  "someone joins",
                            "points":  6
                        },
                        {
                            "text":  "fire/alarm",
                            "points":  6
                        },
                        {
                            "text":  "pee/diarrhea",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150220,
        "question":  "Name something you do for your dog that makes it seem like he owns you.",
        "answers":  [
                        {
                            "text":  "cook/feed him",
                            "points":  32
                        },
                        {
                            "text":  "scoop poop",
                            "points":  24
                        },
                        {
                            "text":  "take for walk",
                            "points":  13
                        },
                        {
                            "text":  "hug & kiss",
                            "points":  6
                        },
                        {
                            "text":  "share my bed",
                            "points":  5
                        },
                        {
                            "text":  "bathe him",
                            "points":  4
                        },
                        {
                            "text":  "brush his teeth",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150221,
        "question":  "Name an animal that, if it were human, would definitely want to wear a girdle.",
        "answers":  [
                        {
                            "text":  "hippo",
                            "points":  32
                        },
                        {
                            "text":  "elephant",
                            "points":  19
                        },
                        {
                            "text":  "ape/monkey",
                            "points":  11
                        },
                        {
                            "text":  "cow",
                            "points":  7
                        },
                        {
                            "text":  "pig",
                            "points":  6
                        },
                        {
                            "text":  "kangaroo",
                            "points":  6
                        },
                        {
                            "text":  "panda/bear",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  150222,
        "question":  "Name something grandma might not tell grandpa she put in the pie he's eating.",
        "answers":  [
                        {
                            "text":  "laxative/fiber",
                            "points":  22
                        },
                        {
                            "text":  "fruit/veggies",
                            "points":  20
                        },
                        {
                            "text":  "viagra",
                            "points":  15
                        },
                        {
                            "text":  "sleep med/xanax",
                            "points":  13
                        },
                        {
                            "text":  "sweetener",
                            "points":  7
                        },
                        {
                            "text":  "poison",
                            "points":  6
                        },
                        {
                            "text":  "weed",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150223,
        "question":  "Name a kind of exercise that looks sexier when a woman does it than when a man does it.",
        "answers":  [
                        {
                            "text":  "yoga/stretching",
                            "points":  44
                        },
                        {
                            "text":  "squats",
                            "points":  12
                        },
                        {
                            "text":  "jumping jacks",
                            "points":  8
                        },
                        {
                            "text":  "push-ups",
                            "points":  8
                        },
                        {
                            "text":  "dance/pole dance",
                            "points":  6
                        },
                        {
                            "text":  "sit-ups/crunches",
                            "points":  4
                        },
                        {
                            "text":  "running",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150224,
        "question":  "Name a breed of dog you wish your chihuahua wouldn't try to start a fight with.",
        "answers":  [
                        {
                            "text":  "pit bull",
                            "points":  34
                        },
                        {
                            "text":  "great dane",
                            "points":  12
                        },
                        {
                            "text":  "german shepherd",
                            "points":  12
                        },
                        {
                            "text":  "rottweiler",
                            "points":  11
                        },
                        {
                            "text":  "doberman",
                            "points":  9
                        },
                        {
                            "text":  "bulldog",
                            "points":  6
                        },
                        {
                            "text":  "husky",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150225,
        "question":  "Name something in your home that a Martian might mistake for intelligent life.",
        "answers":  [
                        {
                            "text":  "my tv",
                            "points":  25
                        },
                        {
                            "text":  "me/person",
                            "points":  19
                        },
                        {
                            "text":  "pet/parrot",
                            "points":  19
                        },
                        {
                            "text":  "computer",
                            "points":  14
                        },
                        {
                            "text":  "teddy bear/toy",
                            "points":  3
                        },
                        {
                            "text":  "vacuum/roomba",
                            "points":  3
                        },
                        {
                            "text":  "cell phone",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150226,
        "question":  "We asked 100 single people... Face it -- the dating scene is a meat market. You want filet mignon, but you end up with what?",
        "answers":  [
                        {
                            "text":  "chopped liver",
                            "points":  23
                        },
                        {
                            "text":  "bologna",
                            "points":  20
                        },
                        {
                            "text":  "ground beef",
                            "points":  13
                        },
                        {
                            "text":  "spam",
                            "points":  11
                        },
                        {
                            "text":  "turkey",
                            "points":  10
                        },
                        {
                            "text":  "fish/a red snapper",
                            "points":  6
                        },
                        {
                            "text":  "pork/ham",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150227,
        "question":  "If no one saw you, what would you love to ride on in the nude?",
        "answers":  [
                        {
                            "text":  "amusement ride",
                            "points":  23
                        },
                        {
                            "text":  "horse",
                            "points":  18
                        },
                        {
                            "text":  "motorcycle",
                            "points":  15
                        },
                        {
                            "text":  "jet ski",
                            "points":  10
                        },
                        {
                            "text":  "bicycle",
                            "points":  10
                        },
                        {
                            "text":  "a hottie mcbody",
                            "points":  5
                        },
                        {
                            "text":  "a boat",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  150228,
        "question":  "Name something you'd hate to find in your closet.",
        "answers":  [
                        {
                            "text":  "bug/moth",
                            "points":  20
                        },
                        {
                            "text":  "rat/mouse",
                            "points":  18
                        },
                        {
                            "text":  "corpse/skeleton",
                            "points":  14
                        },
                        {
                            "text":  "person/hubby's ho",
                            "points":  13
                        },
                        {
                            "text":  "snake",
                            "points":  12
                        },
                        {
                            "text":  "clothes/not mine",
                            "points":  5
                        },
                        {
                            "text":  "ghost/monster",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150229,
        "question":  "At a nudist golf tournament, name a golfing term that the commentator might snicker at when he says it.",
        "answers":  [
                        {
                            "text":  "hole in one",
                            "points":  49
                        },
                        {
                            "text":  "ball/ball drop",
                            "points":  14
                        },
                        {
                            "text":  "putter/short putt",
                            "points":  7
                        },
                        {
                            "text":  "fore",
                            "points":  5
                        },
                        {
                            "text":  "par",
                            "points":  4
                        },
                        {
                            "text":  "swing/back swing",
                            "points":  3
                        },
                        {
                            "text":  "bogey",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150230,
        "question":  "If women wrote a list for men called \"Rules for Kissing Me,\" what might rule number one be?",
        "answers":  [
                        {
                            "text":  "clean teeth/breath",
                            "points":  44
                        },
                        {
                            "text":  "no tongue/past uvula",
                            "points":  14
                        },
                        {
                            "text":  "don't slobber",
                            "points":  8
                        },
                        {
                            "text":  "be gentle/slow",
                            "points":  8
                        },
                        {
                            "text":  "don't kiss me!",
                            "points":  4
                        },
                        {
                            "text":  "be passionate",
                            "points":  4
                        },
                        {
                            "text":  "pull me close",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150231,
        "question":  "Fill in the blank: The family cat might ask the family dog, \"Why do you embarrass yourself by ______ing so much?\"",
        "answers":  [
                        {
                            "text":  "licking/your goods",
                            "points":  35
                        },
                        {
                            "text":  "barking",
                            "points":  26
                        },
                        {
                            "text":  "drooling",
                            "points":  5
                        },
                        {
                            "text":  "pee/pooping",
                            "points":  5
                        },
                        {
                            "text":  "begging",
                            "points":  5
                        },
                        {
                            "text":  "farting",
                            "points":  5
                        },
                        {
                            "text":  "sniffing/my butt",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150232,
        "question":  "Name something Steve Harvey has had more than one of.",
        "answers":  [
                        {
                            "text":  "wives/women",
                            "points":  33
                        },
                        {
                            "text":  "hit shows/jobs",
                            "points":  19
                        },
                        {
                            "text":  "suits/outfits",
                            "points":  11
                        },
                        {
                            "text":  "cars",
                            "points":  8
                        },
                        {
                            "text":  "children",
                            "points":  6
                        },
                        {
                            "text":  "bloopers/misread cards",
                            "points":  4
                        },
                        {
                            "text":  "hands",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150233,
        "question":  "Tell me an animal that men are sometimes nicknamed after.",
        "answers":  [
                        {
                            "text":  "bear/grizzly",
                            "points":  27
                        },
                        {
                            "text":  "dog/puppy",
                            "points":  23
                        },
                        {
                            "text":  "tiger",
                            "points":  12
                        },
                        {
                            "text":  "bull",
                            "points":  7
                        },
                        {
                            "text":  "jackass/mule",
                            "points":  7
                        },
                        {
                            "text":  "pig",
                            "points":  5
                        },
                        {
                            "text":  "horse/stallion",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150234,
        "question":  "Mrs. Claus told Santa she was leaving him because she can't take what anymore?",
        "answers":  [
                        {
                            "text":  "workaholic/travel",
                            "points":  19
                        },
                        {
                            "text":  "the ho ho hos",
                            "points":  17
                        },
                        {
                            "text":  "cookie habit/fat",
                            "points":  16
                        },
                        {
                            "text":  "cold/snow",
                            "points":  12
                        },
                        {
                            "text":  "elves everywhere",
                            "points":  8
                        },
                        {
                            "text":  "ratty beard",
                            "points":  7
                        },
                        {
                            "text":  "he's home 364 days/yr.",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  150235,
        "question":  "Name the worst place you can imagine being on your birthday.",
        "answers":  [
                        {
                            "text":  "jail/prison...again",
                            "points":  46
                        },
                        {
                            "text":  "doc/dentist/e.r.",
                            "points":  20
                        },
                        {
                            "text":  "work",
                            "points":  6
                        },
                        {
                            "text":  "cemetery/funeral",
                            "points":  3
                        },
                        {
                            "text":  "home",
                            "points":  3
                        },
                        {
                            "text":  "court/jury duty",
                            "points":  3
                        },
                        {
                            "text":  "my in-laws'",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150236,
        "question":  "Name something you need if you're going to get rid of a dead body.",
        "answers":  [
                        {
                            "text":  "shovel/a hole",
                            "points":  40
                        },
                        {
                            "text":  "bag",
                            "points":  19
                        },
                        {
                            "text":  "muscles/a buddy",
                            "points":  10
                        },
                        {
                            "text":  "rug/tarp/sheet",
                            "points":  5
                        },
                        {
                            "text":  "bleach",
                            "points":  4
                        },
                        {
                            "text":  "big drum of acid",
                            "points":  3
                        },
                        {
                            "text":  "duct tape",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150237,
        "question":  "Name a TV show that you watch just because of the host.",
        "answers":  [
                        {
                            "text":  "family feud",
                            "points":  31
                        },
                        {
                            "text":  "ellen",
                            "points":  11
                        },
                        {
                            "text":  "jeopardy",
                            "points":  11
                        },
                        {
                            "text":  "wheel of fortune",
                            "points":  11
                        },
                        {
                            "text":  "late show/colbert",
                            "points":  9
                        },
                        {
                            "text":  "card sharks",
                            "points":  7
                        },
                        {
                            "text":  "survivor",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150238,
        "question":  "What's the first thing a stripper takes off?",
        "answers":  [
                        {
                            "text":  "her top",
                            "points":  30
                        },
                        {
                            "text":  "gloves",
                            "points":  16
                        },
                        {
                            "text":  "them heels",
                            "points":  14
                        },
                        {
                            "text":  "bra",
                            "points":  12
                        },
                        {
                            "text":  "boa",
                            "points":  4
                        },
                        {
                            "text":  "her dignity",
                            "points":  4
                        },
                        {
                            "text":  "dress/skirt",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150239,
        "question":  "We asked 100 men... If you switched bodies with your dog, what's the first thing you would do?",
        "answers":  [
                        {
                            "text":  "lick/my furry kiwis",
                            "points":  29
                        },
                        {
                            "text":  "hump/everything",
                            "points":  15
                        },
                        {
                            "text":  "run/escape",
                            "points":  12
                        },
                        {
                            "text":  "pee/on my boss",
                            "points":  11
                        },
                        {
                            "text":  "sleep",
                            "points":  9
                        },
                        {
                            "text":  "sniff/butts",
                            "points":  5
                        },
                        {
                            "text":  "eat/beg for food",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150240,
        "question":  "Farmer John got so drunk last night, he actually tried to milk what?",
        "answers":  [
                        {
                            "text":  "his wife",
                            "points":  28
                        },
                        {
                            "text":  "a horse",
                            "points":  19
                        },
                        {
                            "text":  "a bull",
                            "points":  13
                        },
                        {
                            "text":  "the cat",
                            "points":  8
                        },
                        {
                            "text":  "the dog",
                            "points":  8
                        },
                        {
                            "text":  "a pig",
                            "points":  4
                        },
                        {
                            "text":  "hen/pissy rooster",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150241,
        "question":  "Fill in the blank: A 100-year-old man might say, \"At my age, ______ is better than sex.\"",
        "answers":  [
                        {
                            "text":  "breathing/living",
                            "points":  24
                        },
                        {
                            "text":  "sleep",
                            "points":  23
                        },
                        {
                            "text":  "food/werther's original",
                            "points":  20
                        },
                        {
                            "text":  "a good b.m./whiz",
                            "points":  7
                        },
                        {
                            "text":  "scotch/booze",
                            "points":  4
                        },
                        {
                            "text":  "walking",
                            "points":  3
                        },
                        {
                            "text":  "dying",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150242,
        "question":  "Name something you might tell your family to put in your coffin just in case.",
        "answers":  [
                        {
                            "text":  "phone",
                            "points":  24
                        },
                        {
                            "text":  "money/a check",
                            "points":  19
                        },
                        {
                            "text":  "axe/escape tools",
                            "points":  11
                        },
                        {
                            "text":  "food/water",
                            "points":  9
                        },
                        {
                            "text":  "booze",
                            "points":  8
                        },
                        {
                            "text":  "bell/noisemaker",
                            "points":  7
                        },
                        {
                            "text":  "bible/book",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  150243,
        "question":  "Name someone you had a romantic dream about that made you feel very weird.",
        "answers":  [
                        {
                            "text":  "boss/coworker",
                            "points":  20
                        },
                        {
                            "text":  "my ex",
                            "points":  15
                        },
                        {
                            "text":  "celeb/wolf blitzer",
                            "points":  15
                        },
                        {
                            "text":  "relative/in-law",
                            "points":  13
                        },
                        {
                            "text":  "friend/broski",
                            "points":  9
                        },
                        {
                            "text":  "my boo's bestie",
                            "points":  6
                        },
                        {
                            "text":  "doc/proctologist",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  150244,
        "question":  "Name something you're thinking about when you're California dreaming.",
        "answers":  [
                        {
                            "text":  "beach/surfing",
                            "points":  44
                        },
                        {
                            "text":  "sun/warm weather",
                            "points":  14
                        },
                        {
                            "text":  "travel/vacation",
                            "points":  6
                        },
                        {
                            "text":  "babes/blondes",
                            "points":  6
                        },
                        {
                            "text":  "hollywood/stars",
                            "points":  5
                        },
                        {
                            "text":  "cool cars/drives",
                            "points":  4
                        },
                        {
                            "text":  "money/being rich",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150245,
        "question":  "If grandpa were a male stripper, what might he remove during his act?",
        "answers":  [
                        {
                            "text":  "dentures",
                            "points":  40
                        },
                        {
                            "text":  "shirt",
                            "points":  10
                        },
                        {
                            "text":  "undies",
                            "points":  10
                        },
                        {
                            "text":  "toupee",
                            "points":  8
                        },
                        {
                            "text":  "glasses",
                            "points":  7
                        },
                        {
                            "text":  "elastic-waist pants",
                            "points":  5
                        },
                        {
                            "text":  "suspenders",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150246,
        "question":  "Name a kind of candy a woman might put in her bra to make it look like a nipple.",
        "answers":  [
                        {
                            "text":  "hershey's kisses",
                            "points":  37
                        },
                        {
                            "text":  "dots/gumdrops",
                            "points":  14
                        },
                        {
                            "text":  "jelly beans",
                            "points":  10
                        },
                        {
                            "text":  "m&m's",
                            "points":  8
                        },
                        {
                            "text":  "skittles",
                            "points":  5
                        },
                        {
                            "text":  "life savers/mints",
                            "points":  5
                        },
                        {
                            "text":  "candy corn",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150247,
        "question":  "Name a place a 100-year-old man might take his 95-year-old bride for their honeymoon.",
        "answers":  [
                        {
                            "text":  "vacay/beach",
                            "points":  36
                        },
                        {
                            "text":  "house/rest home",
                            "points":  23
                        },
                        {
                            "text":  "hospital/doc",
                            "points":  8
                        },
                        {
                            "text":  "mortuary/grave",
                            "points":  7
                        },
                        {
                            "text":  "eatery/denny's",
                            "points":  3
                        },
                        {
                            "text":  "local motel",
                            "points":  3
                        },
                        {
                            "text":  "park",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150248,
        "question":  "Name the part of your body that would freak you out the most if it fell off.",
        "answers":  [
                        {
                            "text":  "my sniffer",
                            "points":  32
                        },
                        {
                            "text":  "my joyful genitalia",
                            "points":  11
                        },
                        {
                            "text":  "my legs",
                            "points":  10
                        },
                        {
                            "text":  "my fingers/hands",
                            "points":  9
                        },
                        {
                            "text":  "my head",
                            "points":  8
                        },
                        {
                            "text":  "my hair",
                            "points":  7
                        },
                        {
                            "text":  "my arms",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  150249,
        "question":  "Annabelle the cannibal told a man he looks good enough to eat. And then she put what on his buns?",
        "answers":  [
                        {
                            "text":  "ketchup",
                            "points":  27
                        },
                        {
                            "text":  "butter",
                            "points":  18
                        },
                        {
                            "text":  "mustard",
                            "points":  15
                        },
                        {
                            "text":  "hot/bbq sauce",
                            "points":  11
                        },
                        {
                            "text":  "salt",
                            "points":  5
                        },
                        {
                            "text":  "mayo",
                            "points":  4
                        },
                        {
                            "text":  "her hands",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150250,
        "question":  "In heaven, name something that you'd hope you could get a brand-new one of anytime you wanted.",
        "answers":  [
                        {
                            "text":  "body/life/soul",
                            "points":  26
                        },
                        {
                            "text":  "car",
                            "points":  19
                        },
                        {
                            "text":  "mate/lover",
                            "points":  12
                        },
                        {
                            "text":  "halo & wing set",
                            "points":  9
                        },
                        {
                            "text":  "taco/food",
                            "points":  9
                        },
                        {
                            "text":  "clothes/thong",
                            "points":  4
                        },
                        {
                            "text":  "mojito/booze",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150251,
        "question":  "We asked 100 women... Squeeze your man's bottom and give me a word starting with S that describes it.",
        "answers":  [
                        {
                            "text":  "squishy",
                            "points":  25
                        },
                        {
                            "text":  "soft",
                            "points":  22
                        },
                        {
                            "text":  "sexy",
                            "points":  17
                        },
                        {
                            "text":  "small",
                            "points":  10
                        },
                        {
                            "text":  "saggy",
                            "points":  3
                        },
                        {
                            "text":  "supple",
                            "points":  3
                        },
                        {
                            "text":  "sweet",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150252,
        "question":  "Name someone you'd kiss on the cheek but never on the lips.",
        "answers":  [
                        {
                            "text":  "big daddy/mama",
                            "points":  24
                        },
                        {
                            "text":  "friend/bud's wife",
                            "points":  18
                        },
                        {
                            "text":  "grandparent",
                            "points":  17
                        },
                        {
                            "text":  "in-laws",
                            "points":  7
                        },
                        {
                            "text":  "sibling",
                            "points":  7
                        },
                        {
                            "text":  "my kid/18-year-old",
                            "points":  6
                        },
                        {
                            "text":  "my pooch/animal",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150253,
        "question":  "Name a public place where it's inappropriate for a couple to start French-kissing.",
        "answers":  [
                        {
                            "text":  "church/mid-sermon",
                            "points":  42
                        },
                        {
                            "text":  "school",
                            "points":  12
                        },
                        {
                            "text":  "work/h.r. meeting",
                            "points":  7
                        },
                        {
                            "text":  "restaurant",
                            "points":  6
                        },
                        {
                            "text":  "bus/subway",
                            "points":  5
                        },
                        {
                            "text":  "funeral/with corpse",
                            "points":  5
                        },
                        {
                            "text":  "court",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  150254,
        "question":  "We asked 100 men... Admit it -- name something women wear that you wonder what you'd look like wearing.",
        "answers":  [
                        {
                            "text":  "thong/panties",
                            "points":  33
                        },
                        {
                            "text":  "bra",
                            "points":  15
                        },
                        {
                            "text":  "miniskirt/dress",
                            "points":  14
                        },
                        {
                            "text":  "leggings",
                            "points":  7
                        },
                        {
                            "text":  "wig",
                            "points":  5
                        },
                        {
                            "text":  "hose/fishnets",
                            "points":  4
                        },
                        {
                            "text":  "cute hat",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150255,
        "question":  "Name something the mischievous elves did to Santa while he was sleeping.",
        "answers":  [
                        {
                            "text":  "shaved beard",
                            "points":  42
                        },
                        {
                            "text":  "ate cookies/milk",
                            "points":  13
                        },
                        {
                            "text":  "stole/hid stuff",
                            "points":  8
                        },
                        {
                            "text":  "drew on/painted",
                            "points":  8
                        },
                        {
                            "text":  "tied/wrapped him up",
                            "points":  4
                        },
                        {
                            "text":  "hand in warm water",
                            "points":  3
                        },
                        {
                            "text":  "tickled him",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150256,
        "question":  "Name something a woman might do when she's at her husband's gravesite that would make you suspect she doesn't miss him.",
        "answers":  [
                        {
                            "text":  "launch loogie/spit",
                            "points":  25
                        },
                        {
                            "text":  "dance a jig",
                            "points":  22
                        },
                        {
                            "text":  "pee/pinch a loaf",
                            "points":  13
                        },
                        {
                            "text":  "laugh/grin",
                            "points":  9
                        },
                        {
                            "text":  "dead flowers/none",
                            "points":  4
                        },
                        {
                            "text":  "bring/do her lover",
                            "points":  4
                        },
                        {
                            "text":  "walk past/leave",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150257,
        "question":  "We asked 100 married men... Name an animal your mother-in-law will probably be reincarnated as.",
        "answers":  [
                        {
                            "text":  "jackass/mule",
                            "points":  30
                        },
                        {
                            "text":  "street cat",
                            "points":  14
                        },
                        {
                            "text":  "dog/pit bull",
                            "points":  14
                        },
                        {
                            "text":  "wolf",
                            "points":  8
                        },
                        {
                            "text":  "hyena",
                            "points":  6
                        },
                        {
                            "text":  "elephant",
                            "points":  4
                        },
                        {
                            "text":  "bird/pigeon",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150258,
        "question":  "If Satan relocated to the U.S., he'd feel most at home in what city?",
        "answers":  [
                        {
                            "text":  "las vegas",
                            "points":  19
                        },
                        {
                            "text":  "washington, d.c.",
                            "points":  17
                        },
                        {
                            "text":  "new york",
                            "points":  16
                        },
                        {
                            "text":  "l.a./hollywood",
                            "points":  14
                        },
                        {
                            "text":  "san francisco",
                            "points":  6
                        },
                        {
                            "text":  "miami",
                            "points":  5
                        },
                        {
                            "text":  "chicago",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150259,
        "question":  "Fill in the blank: You'd never want to hire a nude ______.",
        "answers":  [
                        {
                            "text":  "repairman",
                            "points":  27
                        },
                        {
                            "text":  "chef",
                            "points":  14
                        },
                        {
                            "text":  "maid",
                            "points":  12
                        },
                        {
                            "text":  "gardener/landscaper",
                            "points":  7
                        },
                        {
                            "text":  "doc/dentist",
                            "points":  6
                        },
                        {
                            "text":  "model",
                            "points":  6
                        },
                        {
                            "text":  "painter",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  150260,
        "question":  "If you could get rid of one thing in your life for a whole year, what would you choose?",
        "answers":  [
                        {
                            "text":  "bills/debt",
                            "points":  33
                        },
                        {
                            "text":  "my job",
                            "points":  12
                        },
                        {
                            "text":  "my fat",
                            "points":  8
                        },
                        {
                            "text":  "pain/illness",
                            "points":  7
                        },
                        {
                            "text":  "stress/drama",
                            "points":  7
                        },
                        {
                            "text":  "smoking habit/cigs",
                            "points":  4
                        },
                        {
                            "text":  "my in-laws",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150261,
        "question":  "A sharknado is bad. A tornado dumping what kind of animal on us would be worse?",
        "answers":  [
                        {
                            "text":  "snakes",
                            "points":  20
                        },
                        {
                            "text":  "elephants",
                            "points":  14
                        },
                        {
                            "text":  "skunks",
                            "points":  14
                        },
                        {
                            "text":  "cows",
                            "points":  8
                        },
                        {
                            "text":  "whales",
                            "points":  6
                        },
                        {
                            "text":  "bugs/murder hornets",
                            "points":  5
                        },
                        {
                            "text":  "tigers",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150262,
        "question":  "If you went to a nude dance party, which dance would be the most fun to watch?",
        "answers":  [
                        {
                            "text":  "chicken dance",
                            "points":  17
                        },
                        {
                            "text":  "twist",
                            "points":  15
                        },
                        {
                            "text":  "macarena",
                            "points":  12
                        },
                        {
                            "text":  "salsa",
                            "points":  9
                        },
                        {
                            "text":  "limbo",
                            "points":  7
                        },
                        {
                            "text":  "twerk",
                            "points":  6
                        },
                        {
                            "text":  "bunny hop/conga",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  150263,
        "question":  "Bob is so dumb, instead of a banana, he put what fruit down his pants to impress women?",
        "answers":  [
                        {
                            "text":  "melon",
                            "points":  17
                        },
                        {
                            "text":  "grape",
                            "points":  14
                        },
                        {
                            "text":  "apple",
                            "points":  12
                        },
                        {
                            "text":  "mini cucumber",
                            "points":  10
                        },
                        {
                            "text":  "orange",
                            "points":  7
                        },
                        {
                            "text":  "pineapple",
                            "points":  6
                        },
                        {
                            "text":  "cherry",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  150264,
        "question":  "The comedian was so bad, the audience didn't throw tomatoes -- they threw what?",
        "answers":  [
                        {
                            "text":  "drinks/bottles",
                            "points":  28
                        },
                        {
                            "text":  "rocks",
                            "points":  11
                        },
                        {
                            "text":  "shoes",
                            "points":  7
                        },
                        {
                            "text":  "insults/fits",
                            "points":  6
                        },
                        {
                            "text":  "bricks",
                            "points":  6
                        },
                        {
                            "text":  "the trash",
                            "points":  6
                        },
                        {
                            "text":  "the chairs",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  150265,
        "question":  "You go for a drive in the nude. A cop pulls you over. What do you tell him is the reason?",
        "answers":  [
                        {
                            "text":  "i was hot",
                            "points":  28
                        },
                        {
                            "text":  "clothes stolen",
                            "points":  11
                        },
                        {
                            "text":  "sleepwalking",
                            "points":  8
                        },
                        {
                            "text":  "fire/escaped",
                            "points":  6
                        },
                        {
                            "text":  "i'm a nudist",
                            "points":  6
                        },
                        {
                            "text":  "laundry day",
                            "points":  5
                        },
                        {
                            "text":  "forgot to dress",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  150266,
        "question":  "Name a star who's known for his gorgeous face and bulging biceps.",
        "answers":  [
                        {
                            "text":  "dwayne johnson",
                            "points":  27
                        },
                        {
                            "text":  "ah-nold",
                            "points":  10
                        },
                        {
                            "text":  "brad pitt",
                            "points":  8
                        },
                        {
                            "text":  "sylvester stallone",
                            "points":  6
                        },
                        {
                            "text":  "john cena",
                            "points":  5
                        },
                        {
                            "text":  "hulk hogan",
                            "points":  4
                        },
                        {
                            "text":  "jason momoa",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150267,
        "question":  "We asked 100 women... Fill in the blank: You might bail on a date if he showed up wearing what?",
        "answers":  [
                        {
                            "text":  "dress/skirt",
                            "points":  24
                        },
                        {
                            "text":  "speedo/trunks",
                            "points":  10
                        },
                        {
                            "text":  "shorts/daisy dukes",
                            "points":  9
                        },
                        {
                            "text":  "wedding ring",
                            "points":  6
                        },
                        {
                            "text":  "sandals & socks",
                            "points":  4
                        },
                        {
                            "text":  "lipstick",
                            "points":  4
                        },
                        {
                            "text":  "high heels",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150268,
        "question":  "Name a phrase that starts with the word \"dead.\"",
        "answers":  [
                        {
                            "text":  "...as a doorknob",
                            "points":  15
                        },
                        {
                            "text":  "deadbeat",
                            "points":  12
                        },
                        {
                            "text":  "dead right",
                            "points":  7
                        },
                        {
                            "text":  "dead meat",
                            "points":  7
                        },
                        {
                            "text":  "dead end",
                            "points":  6
                        },
                        {
                            "text":  "dead or alive",
                            "points":  6
                        },
                        {
                            "text":  "dead man walking",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  150269,
        "question":  "Fill in the blank: In my defense, it's not my fault that I'm what?",
        "answers":  [
                        {
                            "text":  "so dang hot",
                            "points":  24
                        },
                        {
                            "text":  "dumb as dirt",
                            "points":  6
                        },
                        {
                            "text":  "smart/sensible",
                            "points":  6
                        },
                        {
                            "text":  "fattish",
                            "points":  5
                        },
                        {
                            "text":  "short",
                            "points":  5
                        },
                        {
                            "text":  "broke",
                            "points":  5
                        },
                        {
                            "text":  "old/ancient",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  150270,
        "question":  "If you sneeze really hard at work, name something you hope it doesn't land on.",
        "answers":  [
                        {
                            "text":  "c.e.o./person",
                            "points":  52
                        },
                        {
                            "text":  "computer/keyboard",
                            "points":  24
                        },
                        {
                            "text":  "paperwork/files",
                            "points":  12
                        },
                        {
                            "text":  "desk/table",
                            "points":  7
                        },
                        {
                            "text":  "food/coffee",
                            "points":  3
                        },
                        {
                            "text":  "my own face/lip",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150271,
        "question":  "It's kind of creepy if your dog stares at you while you're doing what?",
        "answers":  [
                        {
                            "text":  "angry dump/whiz",
                            "points":  45
                        },
                        {
                            "text":  "\"tickling the tamale\"",
                            "points":  28
                        },
                        {
                            "text":  "bathing",
                            "points":  13
                        },
                        {
                            "text":  "eating",
                            "points":  10
                        },
                        {
                            "text":  "sleeping",
                            "points":  2
                        },
                        {
                            "text":  "dress'g/undress'g",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150272,
        "question":  "A man can't be an Elvis impersonator if he hasn't got the what?",
        "answers":  [
                        {
                            "text":  "hips/pelvic thrust",
                            "points":  36
                        },
                        {
                            "text":  "sideburns",
                            "points":  22
                        },
                        {
                            "text":  "voice",
                            "points":  18
                        },
                        {
                            "text":  "hair",
                            "points":  14
                        },
                        {
                            "text":  "white jumpsuit",
                            "points":  6
                        },
                        {
                            "text":  "lip curl",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150273,
        "question":  "We asked 100 women... Name something you'd hope you'd have the courage to do if your date spent the evening texting.",
        "answers":  [
                        {
                            "text":  "leave/text \"byeee\"",
                            "points":  67
                        },
                        {
                            "text":  "take/flush phone",
                            "points":  13
                        },
                        {
                            "text":  "throw a drink",
                            "points":  7
                        },
                        {
                            "text":  "\"stop!\"/tell off",
                            "points":  6
                        },
                        {
                            "text":  "slap/kick him",
                            "points":  4
                        },
                        {
                            "text":  "text/a hotter guy",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150274,
        "question":  "Fill in the blank: As revenge, a woman might marry her ex-husband's ______.",
        "answers":  [
                        {
                            "text":  "brother",
                            "points":  50
                        },
                        {
                            "text":  "best broski",
                            "points":  37
                        },
                        {
                            "text":  "sister",
                            "points":  5
                        },
                        {
                            "text":  "father",
                            "points":  3
                        },
                        {
                            "text":  "boss",
                            "points":  2
                        },
                        {
                            "text":  "mistress/new boo",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150275,
        "question":  "We asked 100 married men... My wife looks hottest when she's wearing what?",
        "answers":  [
                        {
                            "text":  "nothing",
                            "points":  35
                        },
                        {
                            "text":  "lingerie/negligee",
                            "points":  25
                        },
                        {
                            "text":  "a dress",
                            "points":  18
                        },
                        {
                            "text":  "jeans",
                            "points":  9
                        },
                        {
                            "text":  "bikini",
                            "points":  8
                        },
                        {
                            "text":  "a nurse's outfit",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150276,
        "question":  "Name something a doctor might tell Santa Claus he needs to stop doing.",
        "answers":  [
                        {
                            "text":  "eating/trans fats",
                            "points":  80
                        },
                        {
                            "text":  "sliding down chimney",
                            "points":  6
                        },
                        {
                            "text":  "ho-ho-ho-ing",
                            "points":  5
                        },
                        {
                            "text":  "boozing",
                            "points":  3
                        },
                        {
                            "text":  "flying sleigh",
                            "points":  2
                        },
                        {
                            "text":  "smoking his pipe",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150277,
        "question":  "We asked 100 men... Fill in the blank: Telling a woman that she's ______ may be hazardous to your health.",
        "answers":  [
                        {
                            "text":  "\"well fed\"",
                            "points":  79
                        },
                        {
                            "text":  "a numskull",
                            "points":  8
                        },
                        {
                            "text":  "worst cook ever",
                            "points":  4
                        },
                        {
                            "text":  "a bad driver",
                            "points":  3
                        },
                        {
                            "text":  "an \"antique\"",
                            "points":  2
                        },
                        {
                            "text":  "pretty/at your job",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150278,
        "question":  "Name something a guy might cover his bald spot with so it doesn't stand out in photos.",
        "answers":  [
                        {
                            "text":  "hat",
                            "points":  67
                        },
                        {
                            "text":  "toupee",
                            "points":  17
                        },
                        {
                            "text":  "marker",
                            "points":  4
                        },
                        {
                            "text":  "paint/hair paint",
                            "points":  4
                        },
                        {
                            "text":  "combed-over hair",
                            "points":  3
                        },
                        {
                            "text":  "his hand",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150279,
        "question":  "We asked 100 single men... You ask your girlfriend's father for her hand in marriage. He says no. Now what?",
        "answers":  [
                        {
                            "text":  "still do it/elope",
                            "points":  64
                        },
                        {
                            "text":  "ask why/beg",
                            "points":  13
                        },
                        {
                            "text":  "move on/adios",
                            "points":  10
                        },
                        {
                            "text":  "ask her mom",
                            "points":  5
                        },
                        {
                            "text":  "tell my boo",
                            "points":  3
                        },
                        {
                            "text":  "earn trust/ask later",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150280,
        "question":  "We asked 100 women... If after six years your boyfriend still hasn't proposed, what do you do?",
        "answers":  [
                        {
                            "text":  "sayonara, loser!",
                            "points":  58
                        },
                        {
                            "text":  "propose to him",
                            "points":  24
                        },
                        {
                            "text":  "give ultimatum",
                            "points":  6
                        },
                        {
                            "text":  "nada/give him time",
                            "points":  6
                        },
                        {
                            "text":  "discuss why",
                            "points":  2
                        },
                        {
                            "text":  "thankful/celebrate",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150281,
        "question":  "We asked 100 married men... Quick -- tell us your wife's best feature or we'll tell her you couldn't think of one.",
        "answers":  [
                        {
                            "text":  "face/smile",
                            "points":  54
                        },
                        {
                            "text":  "bod/supple breasts",
                            "points":  17
                        },
                        {
                            "text":  "personality/humor",
                            "points":  11
                        },
                        {
                            "text":  "mind",
                            "points":  7
                        },
                        {
                            "text":  "heart/kindness",
                            "points":  7
                        },
                        {
                            "text":  "cooking skills",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150282,
        "question":  "Name something you sneak inside a nursing home to give to your bad grandpa.",
        "answers":  [
                        {
                            "text":  "gin & prune juice",
                            "points":  53
                        },
                        {
                            "text":  "food/butterscotch",
                            "points":  17
                        },
                        {
                            "text":  "hot granny mags",
                            "points":  12
                        },
                        {
                            "text":  "smokes/cubans",
                            "points":  8
                        },
                        {
                            "text":  "cocaine/drugs",
                            "points":  5
                        },
                        {
                            "text":  "rubbers/100 pack",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150283,
        "question":  "We asked 100 women... What kind of plastic surgery would you need to keep up with the Kardashians?",
        "answers":  [
                        {
                            "text":  "a puppy pump",
                            "points":  45
                        },
                        {
                            "text":  "a booty boost",
                            "points":  39
                        },
                        {
                            "text":  "every known surgery",
                            "points":  6
                        },
                        {
                            "text":  "lip injection",
                            "points":  4
                        },
                        {
                            "text":  "lipo/tummy tuck",
                            "points":  2
                        },
                        {
                            "text":  "facelift",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150284,
        "question":  "Name something Santa Claus might stop to do while he's delivering presents.",
        "answers":  [
                        {
                            "text":  "massive b.m./pee",
                            "points":  45
                        },
                        {
                            "text":  "eat/get milk",
                            "points":  39
                        },
                        {
                            "text":  "feed reindeer",
                            "points":  5
                        },
                        {
                            "text":  "get tipsy",
                            "points":  5
                        },
                        {
                            "text":  "take a nap",
                            "points":  2
                        },
                        {
                            "text":  "pet reindeer",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150285,
        "question":  "Name something Marjorie Harvey does to Steve's bald head.",
        "answers":  [
                        {
                            "text":  "rubs it",
                            "points":  43
                        },
                        {
                            "text":  "shines/waxes/oils",
                            "points":  25
                        },
                        {
                            "text":  "kisses it",
                            "points":  17
                        },
                        {
                            "text":  "shaves it",
                            "points":  6
                        },
                        {
                            "text":  "smacks it",
                            "points":  5
                        },
                        {
                            "text":  "spits on it",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150286,
        "question":  "What is your biggest complaint about sleeping with your spouse?",
        "answers":  [
                        {
                            "text":  "snores",
                            "points":  72
                        },
                        {
                            "text":  "hogs bed/covers",
                            "points":  14
                        },
                        {
                            "text":  "cuts the cheese",
                            "points":  3
                        },
                        {
                            "text":  "too warm",
                            "points":  3
                        },
                        {
                            "text":  "boring/sick of 'em",
                            "points":  3
                        },
                        {
                            "text":  "restless/can't sleep",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150287,
        "question":  "We asked 100 women... It's bad if another woman gives your man her phone number. It's worse if she writes it on what?",
        "answers":  [
                        {
                            "text":  "him/his thigh",
                            "points":  70
                        },
                        {
                            "text":  "her thong/clothes",
                            "points":  13
                        },
                        {
                            "text":  "a napkin",
                            "points":  7
                        },
                        {
                            "text":  "bathroom/mirror",
                            "points":  3
                        },
                        {
                            "text":  "cash/a benjamin",
                            "points":  2
                        },
                        {
                            "text":  "used toilet paper",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150288,
        "question":  "What's a lie a woman tells her date to avoid kissing him good night?",
        "answers":  [
                        {
                            "text":  "ailment/gas pains",
                            "points":  62
                        },
                        {
                            "text":  "kickin' breath",
                            "points":  17
                        },
                        {
                            "text":  "\"not on 1st date\"",
                            "points":  9
                        },
                        {
                            "text":  "in a hurry/plans",
                            "points":  4
                        },
                        {
                            "text":  "too tired",
                            "points":  3
                        },
                        {
                            "text":  "gotta pee/major dump",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150289,
        "question":  "Your neighbor has a better Christmas light display than you. What are you going to do about it?",
        "answers":  [
                        {
                            "text":  "nada/suck it up",
                            "points":  61
                        },
                        {
                            "text":  "buy more/game on!",
                            "points":  13
                        },
                        {
                            "text":  "compliment/enjoy",
                            "points":  12
                        },
                        {
                            "text":  "unplug/break bulbs",
                            "points":  7
                        },
                        {
                            "text":  "laugh at power bill",
                            "points":  2
                        },
                        {
                            "text":  "burn house down",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150290,
        "question":  "Come on, people -- it's really not appropriate to be on your knees in church praying for what?",
        "answers":  [
                        {
                            "text":  "dough/lotto win",
                            "points":  57
                        },
                        {
                            "text":  "easy/new booty",
                            "points":  25
                        },
                        {
                            "text":  "sports/team win",
                            "points":  7
                        },
                        {
                            "text":  "death/of your ex",
                            "points":  4
                        },
                        {
                            "text":  "a brewski",
                            "points":  2
                        },
                        {
                            "text":  "rain",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150291,
        "question":  "Name an occupation where you'd see dead people.",
        "answers":  [
                        {
                            "text":  "mortician",
                            "points":  57
                        },
                        {
                            "text":  "coroner",
                            "points":  12
                        },
                        {
                            "text":  "police officer",
                            "points":  12
                        },
                        {
                            "text":  "doctor",
                            "points":  12
                        },
                        {
                            "text":  "psychic",
                            "points":  2
                        },
                        {
                            "text":  "emt",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150292,
        "question":  "We asked 100 married men... My wife is like a bloodhound. She can smell what on me a mile away?",
        "answers":  [
                        {
                            "text":  "perfume/eau de ho",
                            "points":  44
                        },
                        {
                            "text":  "alcohol",
                            "points":  37
                        },
                        {
                            "text":  "smoke",
                            "points":  10
                        },
                        {
                            "text":  "sweets/junk food",
                            "points":  2
                        },
                        {
                            "text":  "money",
                            "points":  2
                        },
                        {
                            "text":  "sweat/b.o.",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150293,
        "question":  "We asked 100 women... What might you do after a breakup that would cause you to be called the psycho ex-girlfriend?",
        "answers":  [
                        {
                            "text":  "stalk him",
                            "points":  42
                        },
                        {
                            "text":  "destroy car/tires",
                            "points":  28
                        },
                        {
                            "text":  "text/call 24-7",
                            "points":  9
                        },
                        {
                            "text":  "burn his clothes",
                            "points":  7
                        },
                        {
                            "text":  "put his stuff in street",
                            "points":  7
                        },
                        {
                            "text":  "vandalize/burn house",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150294,
        "question":  "We asked 100 women... Name something you'd like to do to Steve Harvey's mustache.",
        "answers":  [
                        {
                            "text":  "shave it off",
                            "points":  40
                        },
                        {
                            "text":  "trim/pencil stache",
                            "points":  18
                        },
                        {
                            "text":  "touch/caress",
                            "points":  13
                        },
                        {
                            "text":  "comb it",
                            "points":  12
                        },
                        {
                            "text":  "nothing",
                            "points":  9
                        },
                        {
                            "text":  "braid/beads into it",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  150295,
        "question":  "In which U.S. city would you expect to find the most cheating husbands?",
        "answers":  [
                        {
                            "text":  "las vegas",
                            "points":  34
                        },
                        {
                            "text":  "los angeles",
                            "points":  31
                        },
                        {
                            "text":  "new york",
                            "points":  16
                        },
                        {
                            "text":  "miami",
                            "points":  8
                        },
                        {
                            "text":  "washington, d.c.",
                            "points":  6
                        },
                        {
                            "text":  "reno",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150296,
        "question":  "Name something that's fun to pop.",
        "answers":  [
                        {
                            "text":  "bubble wrap",
                            "points":  31
                        },
                        {
                            "text":  "balloon",
                            "points":  29
                        },
                        {
                            "text":  "bubblegum",
                            "points":  18
                        },
                        {
                            "text":  "zit",
                            "points":  13
                        },
                        {
                            "text":  "bottle/champagne",
                            "points":  4
                        },
                        {
                            "text":  "fingers/knuckles",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150297,
        "question":  "Name something a woman might say she doesn't like about her man's bottom.",
        "answers":  [
                        {
                            "text":  "tiny pancake",
                            "points":  28
                        },
                        {
                            "text":  "too hairy",
                            "points":  26
                        },
                        {
                            "text":  "wide load/fatty",
                            "points":  21
                        },
                        {
                            "text":  "saggy/soft",
                            "points":  13
                        },
                        {
                            "text":  "scent of poo",
                            "points":  7
                        },
                        {
                            "text":  "too rock hard",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150298,
        "question":  "When a husband comes home, name something on the doorstep that would make him wonder, \"What did I do?\"",
        "answers":  [
                        {
                            "text":  "clothes/in suitcase",
                            "points":  80
                        },
                        {
                            "text":  "blanket/pillow",
                            "points":  5
                        },
                        {
                            "text":  "his wife/armed",
                            "points":  4
                        },
                        {
                            "text":  "garbage",
                            "points":  3
                        },
                        {
                            "text":  "a steamy dump",
                            "points":  2
                        },
                        {
                            "text":  "a note",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150299,
        "question":  "A man might suspect that his wife is having an affair with Colonel Sanders if he finds what in his bed?",
        "answers":  [
                        {
                            "text":  "chicken bucket/bones",
                            "points":  74
                        },
                        {
                            "text":  "his outfit/tie",
                            "points":  8
                        },
                        {
                            "text":  "secret herbs/spices",
                            "points":  5
                        },
                        {
                            "text":  "grease stains",
                            "points":  4
                        },
                        {
                            "text":  "biscuit crumbs",
                            "points":  3
                        },
                        {
                            "text":  "the colonel",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150300,
        "question":  "We asked 100 women... Name a reason you wish you married Al Roker.",
        "answers":  [
                        {
                            "text":  "al be ballin'",
                            "points":  60
                        },
                        {
                            "text":  "weather updates",
                            "points":  15
                        },
                        {
                            "text":  "he's funny",
                            "points":  11
                        },
                        {
                            "text":  "fame/events",
                            "points":  5
                        },
                        {
                            "text":  "he's never home",
                            "points":  3
                        },
                        {
                            "text":  "diets/eats right",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150301,
        "question":  "We asked 100 men... Tell me the last person who you'd want to see a condom fall out of your pocket.",
        "answers":  [
                        {
                            "text":  "mom & dad",
                            "points":  56
                        },
                        {
                            "text":  "wife",
                            "points":  17
                        },
                        {
                            "text":  "my mother-in-law",
                            "points":  9
                        },
                        {
                            "text":  "my boss",
                            "points":  6
                        },
                        {
                            "text":  "my kids",
                            "points":  6
                        },
                        {
                            "text":  "pastor",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150302,
        "question":  "Grandma just yelled at grandpa in the supermarket to stop squeezing what?",
        "answers":  [
                        {
                            "text":  "melons/produce",
                            "points":  55
                        },
                        {
                            "text":  "the charmin",
                            "points":  24
                        },
                        {
                            "text":  "her/her booty",
                            "points":  7
                        },
                        {
                            "text":  "others/the bag boy",
                            "points":  5
                        },
                        {
                            "text":  "bread/buns",
                            "points":  3
                        },
                        {
                            "text":  "himself! yowza!",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150303,
        "question":  "It sounds like fun, but I've never made love in a moving what?",
        "answers":  [
                        {
                            "text":  "car/truck/van",
                            "points":  54
                        },
                        {
                            "text":  "airplane",
                            "points":  18
                        },
                        {
                            "text":  "train",
                            "points":  9
                        },
                        {
                            "text":  "boat",
                            "points":  7
                        },
                        {
                            "text":  "amusement ride",
                            "points":  6
                        },
                        {
                            "text":  "bus",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150304,
        "question":  "Name something that lives in your house whether you want it to or not.",
        "answers":  [
                        {
                            "text":  "bugs/roaches",
                            "points":  52
                        },
                        {
                            "text":  "mice/rats",
                            "points":  16
                        },
                        {
                            "text":  "snitty cat/pet",
                            "points":  10
                        },
                        {
                            "text":  "my family/in-laws",
                            "points":  10
                        },
                        {
                            "text":  "dust bunny/dirt",
                            "points":  5
                        },
                        {
                            "text":  "mold/mildew",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150305,
        "question":  "Name a place in your house besides the bedroom that you've made love in.",
        "answers":  [
                        {
                            "text":  "living/family room",
                            "points":  51
                        },
                        {
                            "text":  "kitchen/stovetop",
                            "points":  26
                        },
                        {
                            "text":  "bathroom",
                            "points":  13
                        },
                        {
                            "text":  "basement",
                            "points":  2
                        },
                        {
                            "text":  "laundry room",
                            "points":  2
                        },
                        {
                            "text":  "staircase",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150306,
        "question":  "We asked 100 single women... Unfortunately, you couldn't tell from his online photo that your date would do what like a horse?",
        "answers":  [
                        {
                            "text":  "eat/chew",
                            "points":  49
                        },
                        {
                            "text":  "laugh/snort",
                            "points":  18
                        },
                        {
                            "text":  "hump me",
                            "points":  10
                        },
                        {
                            "text":  "smell",
                            "points":  7
                        },
                        {
                            "text":  "walk/run/buck",
                            "points":  7
                        },
                        {
                            "text":  "snore",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  150307,
        "question":  "Fill in the blank: It's okay for a woman to ______ her man if she catches him cheating.",
        "answers":  [
                        {
                            "text":  "dump/divorce",
                            "points":  43
                        },
                        {
                            "text":  "slap/punch",
                            "points":  28
                        },
                        {
                            "text":  "shoot/kill",
                            "points":  11
                        },
                        {
                            "text":  "scream at",
                            "points":  10
                        },
                        {
                            "text":  "cut off/not boink",
                            "points":  2
                        },
                        {
                            "text":  "cheat on",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150308,
        "question":  "Name a place you should never be seen smoking a joint.",
        "answers":  [
                        {
                            "text":  "police stn./jail",
                            "points":  37
                        },
                        {
                            "text":  "church",
                            "points":  26
                        },
                        {
                            "text":  "school/1st grade",
                            "points":  15
                        },
                        {
                            "text":  "court/city hall",
                            "points":  9
                        },
                        {
                            "text":  "work",
                            "points":  7
                        },
                        {
                            "text":  "park/playground",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150309,
        "question":  "If you were a chicken, what might you be doing right now?",
        "answers":  [
                        {
                            "text":  "eating/pecking",
                            "points":  34
                        },
                        {
                            "text":  "sleep/roosting",
                            "points":  22
                        },
                        {
                            "text":  "laying eggs",
                            "points":  15
                        },
                        {
                            "text":  "clucking",
                            "points":  13
                        },
                        {
                            "text":  "being fried/eaten",
                            "points":  6
                        },
                        {
                            "text":  "crossing the road",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  150310,
        "question":  "In a bad economy, what might Santa Claus have to do to one of his reindeer?",
        "answers":  [
                        {
                            "text":  "eat him",
                            "points":  29
                        },
                        {
                            "text":  "\"you're fired!\"",
                            "points":  29
                        },
                        {
                            "text":  "sell/auction",
                            "points":  26
                        },
                        {
                            "text":  "rent out/side biz",
                            "points":  5
                        },
                        {
                            "text":  "ground/leave behind",
                            "points":  5
                        },
                        {
                            "text":  "cut his pay",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150311,
        "question":  "We asked 100 women... Despite what men think, it's not romantic to make love where?",
        "answers":  [
                        {
                            "text":  "car/back seat",
                            "points":  28
                        },
                        {
                            "text":  "bathroom/on plane",
                            "points":  27
                        },
                        {
                            "text":  "outside/woods",
                            "points":  22
                        },
                        {
                            "text":  "kitchen/table",
                            "points":  14
                        },
                        {
                            "text":  "sofa/with feud on tv",
                            "points":  3
                        },
                        {
                            "text":  "on the floor",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150312,
        "question":  "We asked 100 single women... If you went to the market looking for your soul mate, what aisle would you stand in?",
        "answers":  [
                        {
                            "text":  "beer/booze",
                            "points":  26
                        },
                        {
                            "text":  "snacks/cookies",
                            "points":  22
                        },
                        {
                            "text":  "sausage/meat",
                            "points":  19
                        },
                        {
                            "text":  "fresh produce",
                            "points":  11
                        },
                        {
                            "text":  "candy",
                            "points":  9
                        },
                        {
                            "text":  "frozen food",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  150313,
        "question":  "I can't believe I'm on my way to the hospital and the ambulance driver stops for what?",
        "answers":  [
                        {
                            "text":  "food/a latte",
                            "points":  71
                        },
                        {
                            "text":  "gas",
                            "points":  11
                        },
                        {
                            "text":  "red lights",
                            "points":  5
                        },
                        {
                            "text":  "directions",
                            "points":  3
                        },
                        {
                            "text":  "look at animal",
                            "points":  3
                        },
                        {
                            "text":  "beer/cocktail",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150314,
        "question":  "Name something a psychic might do if she knows that her man is about to dump her.",
        "answers":  [
                        {
                            "text":  "dump him first",
                            "points":  67
                        },
                        {
                            "text":  "empty bank account",
                            "points":  9
                        },
                        {
                            "text":  "cheat/get new boo",
                            "points":  6
                        },
                        {
                            "text":  "kill/set him on fire",
                            "points":  5
                        },
                        {
                            "text":  "cast a spell",
                            "points":  4
                        },
                        {
                            "text":  "take/ruin his stuff",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150315,
        "question":  "He may be the man on TV, but what might Steve Harvey's wife make him do at home?",
        "answers":  [
                        {
                            "text":  "clean/toilets",
                            "points":  65
                        },
                        {
                            "text":  "take out trash",
                            "points":  15
                        },
                        {
                            "text":  "cook",
                            "points":  9
                        },
                        {
                            "text":  "sex/6x a night",
                            "points":  2
                        },
                        {
                            "text":  "not speak a word",
                            "points":  2
                        },
                        {
                            "text":  "submit & obey",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150316,
        "question":  "A man might say, \"Women won't date me because I don't have\" what?",
        "answers":  [
                        {
                            "text":  "a dime",
                            "points":  63
                        },
                        {
                            "text":  "a car/ferrari",
                            "points":  11
                        },
                        {
                            "text":  "a job",
                            "points":  7
                        },
                        {
                            "text":  "a personality",
                            "points":  6
                        },
                        {
                            "text":  "hair/chest hair",
                            "points":  5
                        },
                        {
                            "text":  "cute face/any teeth",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150317,
        "question":  "Name something you ride on that afterwards, you might say it was a wild ride.",
        "answers":  [
                        {
                            "text":  "amusement ride",
                            "points":  62
                        },
                        {
                            "text":  "motorcycle",
                            "points":  11
                        },
                        {
                            "text":  "bull/mechanical",
                            "points":  11
                        },
                        {
                            "text":  "horse",
                            "points":  5
                        },
                        {
                            "text":  "booty call/mate",
                            "points":  4
                        },
                        {
                            "text":  "jet ski",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150318,
        "question":  "Fill in the blank: I laughed so hard, I ______ed.",
        "answers":  [
                        {
                            "text":  "peed & pooped",
                            "points":  61
                        },
                        {
                            "text":  "cried",
                            "points":  21
                        },
                        {
                            "text":  "farted",
                            "points":  6
                        },
                        {
                            "text":  "snorted",
                            "points":  3
                        },
                        {
                            "text":  "spit out my drink",
                            "points":  2
                        },
                        {
                            "text":  "hiccupped",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150319,
        "question":  "Name an animal Jane might compare Tarzan to in the bedroom.",
        "answers":  [
                        {
                            "text":  "monkey/ape",
                            "points":  58
                        },
                        {
                            "text":  "tiger",
                            "points":  17
                        },
                        {
                            "text":  "lion",
                            "points":  12
                        },
                        {
                            "text":  "horse",
                            "points":  4
                        },
                        {
                            "text":  "snake/boa",
                            "points":  2
                        },
                        {
                            "text":  "dog",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150320,
        "question":  "Fill in the blank: Bob asked his wife to talk dirty to him. She said, \"Okay. The ______ is dirty -- go clean it.\"",
        "answers":  [
                        {
                            "text":  "bathroom/toilet",
                            "points":  57
                        },
                        {
                            "text":  "kitchen/stove",
                            "points":  22
                        },
                        {
                            "text":  "garage",
                            "points":  5
                        },
                        {
                            "text":  "floor",
                            "points":  5
                        },
                        {
                            "text":  "the car",
                            "points":  4
                        },
                        {
                            "text":  "laundry",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150321,
        "question":  "Name a complaint that animals probably had about Noah's ark.",
        "answers":  [
                        {
                            "text":  "crowded/small",
                            "points":  53
                        },
                        {
                            "text":  "smelly/poopy",
                            "points":  29
                        },
                        {
                            "text":  "boring/only 1 mate",
                            "points":  6
                        },
                        {
                            "text":  "noisy",
                            "points":  3
                        },
                        {
                            "text":  "too cold/hot",
                            "points":  2
                        },
                        {
                            "text":  "no grass/trees",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150322,
        "question":  "You and the rest of the civilized world never want to see your grandma wearing what?",
        "answers":  [
                        {
                            "text":  "thong/lingerie",
                            "points":  50
                        },
                        {
                            "text":  "bikini/speedo",
                            "points":  36
                        },
                        {
                            "text":  "short shorts",
                            "points":  3
                        },
                        {
                            "text":  "tank/tube top",
                            "points":  2
                        },
                        {
                            "text":  "miniskirt",
                            "points":  2
                        },
                        {
                            "text":  "tutu",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150323,
        "question":  "What do you do if you're in a public restroom and someone looks under your stall door?",
        "answers":  [
                        {
                            "text":  "kick/hit them",
                            "points":  47
                        },
                        {
                            "text":  "scream/swear",
                            "points":  28
                        },
                        {
                            "text":  "wave/say hi",
                            "points":  10
                        },
                        {
                            "text":  "\"excuse me! busy!\"",
                            "points":  5
                        },
                        {
                            "text":  "throw my poop/pee",
                            "points":  3
                        },
                        {
                            "text":  "leave/run",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150324,
        "question":  "We asked 100 men... It's hot in hell. So if you think you're going there, what might you want to be buried wearing?",
        "answers":  [
                        {
                            "text":  "speedo/trunks",
                            "points":  44
                        },
                        {
                            "text":  "nothing",
                            "points":  20
                        },
                        {
                            "text":  "booty shorts",
                            "points":  14
                        },
                        {
                            "text":  "fireproof suit",
                            "points":  9
                        },
                        {
                            "text":  "thong/undies",
                            "points":  4
                        },
                        {
                            "text":  "sunscreen",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150325,
        "question":  "Name a place you worry your cheap family might bury you instead of a cemetery.",
        "answers":  [
                        {
                            "text":  "the yard",
                            "points":  44
                        },
                        {
                            "text":  "park/playground",
                            "points":  18
                        },
                        {
                            "text":  "forest/campground",
                            "points":  13
                        },
                        {
                            "text":  "the dump/landfill",
                            "points":  8
                        },
                        {
                            "text":  "at sea",
                            "points":  7
                        },
                        {
                            "text":  "parking lot",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  150326,
        "question":  "Sometimes you feel like your life is a circus and you're what kind of act?",
        "answers":  [
                        {
                            "text":  "clown/clown car",
                            "points":  44
                        },
                        {
                            "text":  "juggler",
                            "points":  16
                        },
                        {
                            "text":  "trapeze",
                            "points":  12
                        },
                        {
                            "text":  "tightrope/balance",
                            "points":  12
                        },
                        {
                            "text":  "lion/tamer",
                            "points":  8
                        },
                        {
                            "text":  "bearded lady",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150327,
        "question":  "Name a city that might be called the party capital of the world.",
        "answers":  [
                        {
                            "text":  "las vegas",
                            "points":  43
                        },
                        {
                            "text":  "new orleans",
                            "points":  19
                        },
                        {
                            "text":  "new york",
                            "points":  19
                        },
                        {
                            "text":  "los angeles",
                            "points":  9
                        },
                        {
                            "text":  "miami",
                            "points":  3
                        },
                        {
                            "text":  "rio de janeiro",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150328,
        "question":  "We asked 100 married women... If you knew your husband was cheating, what would you charge on his credit card before divorcing him?",
        "answers":  [
                        {
                            "text":  "new gucci wardrobe",
                            "points":  37
                        },
                        {
                            "text":  "car/rv",
                            "points":  29
                        },
                        {
                            "text":  "great lawyer",
                            "points":  12
                        },
                        {
                            "text":  "everything i could",
                            "points":  11
                        },
                        {
                            "text":  "plastic surgery",
                            "points":  3
                        },
                        {
                            "text":  "plane tkt./vacay",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150329,
        "question":  "Name someone a man might call the night before his wedding day.",
        "answers":  [
                        {
                            "text":  "his mom/dad",
                            "points":  37
                        },
                        {
                            "text":  "his ex",
                            "points":  27
                        },
                        {
                            "text":  "his bud/best man",
                            "points":  19
                        },
                        {
                            "text":  "his fiancee",
                            "points":  8
                        },
                        {
                            "text":  "his brother",
                            "points":  2
                        },
                        {
                            "text":  "a 2-bit tramp",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150330,
        "question":  "Name something about a person that might remind you of a snowman.",
        "answers":  [
                        {
                            "text":  "belly/round",
                            "points":  37
                        },
                        {
                            "text":  "long pointy nose",
                            "points":  20
                        },
                        {
                            "text":  "cold bod/heart",
                            "points":  19
                        },
                        {
                            "text":  "top hat",
                            "points":  10
                        },
                        {
                            "text":  "smokes a pipe",
                            "points":  5
                        },
                        {
                            "text":  "white clothes/skin",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150331,
        "question":  "Fill in the blank: I dreamed that Oprah gave me a ______ for my birthday.",
        "answers":  [
                        {
                            "text":  "blank check",
                            "points":  35
                        },
                        {
                            "text":  "car! you get a car!",
                            "points":  32
                        },
                        {
                            "text":  "house",
                            "points":  15
                        },
                        {
                            "text":  "trip/with stedman",
                            "points":  7
                        },
                        {
                            "text":  "job/business",
                            "points":  4
                        },
                        {
                            "text":  "hug/tongue kiss",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150332,
        "question":  "We asked 100 women... What might you do if you're dancing cheek to cheek and he grabs your other cheeks?",
        "answers":  [
                        {
                            "text":  "slap/stomp him",
                            "points":  33
                        },
                        {
                            "text":  "grab his!",
                            "points":  19
                        },
                        {
                            "text":  "laugh/smile",
                            "points":  18
                        },
                        {
                            "text":  "leave/push him away",
                            "points":  13
                        },
                        {
                            "text":  "kiss/hug/flirt",
                            "points":  9
                        },
                        {
                            "text":  "move his hands",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150333,
        "question":  "We asked 100 women... If you met a guy you really liked, who's the last person you'd introduce him to?",
        "answers":  [
                        {
                            "text":  "parents",
                            "points":  32
                        },
                        {
                            "text":  "sibling/evil twin",
                            "points":  21
                        },
                        {
                            "text":  "my hot friend",
                            "points":  17
                        },
                        {
                            "text":  "my hubby",
                            "points":  12
                        },
                        {
                            "text":  "kids/prodigal son",
                            "points":  8
                        },
                        {
                            "text":  "my ex",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  150334,
        "question":  "We asked 100 men... You'll totally up your dating game if you do what like Steve Harvey?",
        "answers":  [
                        {
                            "text":  "dress w/ finesse",
                            "points":  31
                        },
                        {
                            "text":  "get rich/hustle",
                            "points":  22
                        },
                        {
                            "text":  "tell jokes/talk",
                            "points":  19
                        },
                        {
                            "text":  "shave that noggin",
                            "points":  11
                        },
                        {
                            "text":  "smile/laugh",
                            "points":  10
                        },
                        {
                            "text":  "dance",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150335,
        "question":  "We asked 100 men... It's bad if a woman hits you with her purse. It's worse if she has what inside it?",
        "answers":  [
                        {
                            "text":  "a loaded gun",
                            "points":  27
                        },
                        {
                            "text":  "bricks/rocks",
                            "points":  27
                        },
                        {
                            "text":  "a bottle",
                            "points":  12
                        },
                        {
                            "text":  "loose change",
                            "points":  10
                        },
                        {
                            "text":  "wallet",
                            "points":  10
                        },
                        {
                            "text":  "frying pan",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  150336,
        "question":  "We asked 100 married men... Name something you wear to bed your wife might object to.",
        "answers":  [
                        {
                            "text":  "socks",
                            "points":  24
                        },
                        {
                            "text":  "shoes/slippers",
                            "points":  21
                        },
                        {
                            "text":  "undies/gold ones",
                            "points":  19
                        },
                        {
                            "text":  "sunglasses/specs",
                            "points":  13
                        },
                        {
                            "text":  "dirty gym clothes",
                            "points":  9
                        },
                        {
                            "text":  "nothing",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  150337,
        "question":  "Fill in the blank: Grandma says, \"If grandpa misbehaves, I ______ him.\"",
        "answers":  [
                        {
                            "text":  "spank/clobber",
                            "points":  71
                        },
                        {
                            "text":  "scold/\"bad grampy!\"",
                            "points":  10
                        },
                        {
                            "text":  "ignore",
                            "points":  4
                        },
                        {
                            "text":  "starve",
                            "points":  3
                        },
                        {
                            "text":  "will kill/shoot",
                            "points":  3
                        },
                        {
                            "text":  "forgive/kiss",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150338,
        "question":  "If his car trunk were full, where might a mobster put a dead body?",
        "answers":  [
                        {
                            "text":  "inside/back seat",
                            "points":  61
                        },
                        {
                            "text":  "tied to roof",
                            "points":  11
                        },
                        {
                            "text":  "lake/river",
                            "points":  9
                        },
                        {
                            "text":  "ground/yard",
                            "points":  5
                        },
                        {
                            "text":  "freezer",
                            "points":  4
                        },
                        {
                            "text":  "basement",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150339,
        "question":  "Name something a man might do to his ex-wife's house on Halloween.",
        "answers":  [
                        {
                            "text":  "t.p. it",
                            "points":  55
                        },
                        {
                            "text":  "egg it",
                            "points":  27
                        },
                        {
                            "text":  "burn/blow it up",
                            "points":  6
                        },
                        {
                            "text":  "poop on porch",
                            "points":  2
                        },
                        {
                            "text":  "spray paint it",
                            "points":  2
                        },
                        {
                            "text":  "soap the windows",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150340,
        "question":  "Fill in the blank: Grandpa had to buy a new toupee because the dog kept ______ing it.",
        "answers":  [
                        {
                            "text":  "eating/chewing",
                            "points":  47
                        },
                        {
                            "text":  "humping",
                            "points":  20
                        },
                        {
                            "text":  "stealing/burying",
                            "points":  11
                        },
                        {
                            "text":  "pee/pooping on",
                            "points":  8
                        },
                        {
                            "text":  "licking",
                            "points":  5
                        },
                        {
                            "text":  "bark/growl'g at",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150341,
        "question":  "Name a musical instrument a man should master if he wants to master the art of romance.",
        "answers":  [
                        {
                            "text":  "guitar",
                            "points":  45
                        },
                        {
                            "text":  "piano",
                            "points":  21
                        },
                        {
                            "text":  "violin",
                            "points":  12
                        },
                        {
                            "text":  "sax",
                            "points":  9
                        },
                        {
                            "text":  "flute",
                            "points":  4
                        },
                        {
                            "text":  "drum",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150342,
        "question":  "Name something grandma might be talking about when she says \"the pot.\"",
        "answers":  [
                        {
                            "text":  "toilet",
                            "points":  43
                        },
                        {
                            "text":  "stove/cooking pot",
                            "points":  38
                        },
                        {
                            "text":  "weed/she's dealing",
                            "points":  6
                        },
                        {
                            "text":  "flowerpot",
                            "points":  3
                        },
                        {
                            "text":  "poker pot",
                            "points":  2
                        },
                        {
                            "text":  "a pot belly",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150343,
        "question":  "Name something the Colonel enjoys doing with his nuggets.",
        "answers":  [
                        {
                            "text":  "dipping 'em",
                            "points":  43
                        },
                        {
                            "text":  "munching on 'em",
                            "points":  31
                        },
                        {
                            "text":  "fry/cooking 'em",
                            "points":  8
                        },
                        {
                            "text":  "throwing 'em4",
                            "points":  5
                        },
                        {
                            "text":  "caressing 'em",
                            "points":  4
                        },
                        {
                            "text":  "juggling 'em",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150344,
        "question":  "Name a place that Bad Grandpa might go right after he gets out of prison.",
        "answers":  [
                        {
                            "text":  "bar/nightclub",
                            "points":  41
                        },
                        {
                            "text":  "strip joint",
                            "points":  35
                        },
                        {
                            "text":  "red-light district",
                            "points":  7
                        },
                        {
                            "text":  "casino/the track",
                            "points":  5
                        },
                        {
                            "text":  "home/to bad grandma",
                            "points":  4
                        },
                        {
                            "text":  "store/to rob it",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150345,
        "question":  "We asked 100 men... Fill in the blank: You'd be thrilled if a psychic said, \"Someday you will have a ______ just like Steve Harvey.\"",
        "answers":  [
                        {
                            "text":  "bank account",
                            "points":  41
                        },
                        {
                            "text":  "tv show/career",
                            "points":  25
                        },
                        {
                            "text":  "face/stache",
                            "points":  12
                        },
                        {
                            "text":  "wardrobe",
                            "points":  10
                        },
                        {
                            "text":  "body",
                            "points":  3
                        },
                        {
                            "text":  "mansion",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150346,
        "question":  "We asked 100 married men... Name something sexy your wife hasn't worn in a long time.",
        "answers":  [
                        {
                            "text":  "nightie/teddy",
                            "points":  41
                        },
                        {
                            "text":  "bikini",
                            "points":  19
                        },
                        {
                            "text":  "thong/panties",
                            "points":  16
                        },
                        {
                            "text":  "tight jeans",
                            "points":  11
                        },
                        {
                            "text":  "bra",
                            "points":  4
                        },
                        {
                            "text":  "stockings",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150347,
        "question":  "When Mrs. Claus is away, name something Santa cuddles with in bed.",
        "answers":  [
                        {
                            "text":  "elf of the month",
                            "points":  32
                        },
                        {
                            "text":  "reindeer",
                            "points":  23
                        },
                        {
                            "text":  "teddy bear/toys",
                            "points":  19
                        },
                        {
                            "text":  "pillow",
                            "points":  14
                        },
                        {
                            "text":  "the dog/cat",
                            "points":  4
                        },
                        {
                            "text":  "a polar bear",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150348,
        "question":  "No matter how hard you tried, name a fruit you could never swallow whole.",
        "answers":  [
                        {
                            "text":  "watermelon/melon",
                            "points":  28
                        },
                        {
                            "text":  "apple",
                            "points":  27
                        },
                        {
                            "text":  "banana",
                            "points":  17
                        },
                        {
                            "text":  "orange",
                            "points":  10
                        },
                        {
                            "text":  "pineapple",
                            "points":  9
                        },
                        {
                            "text":  "plum/prune",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150349,
        "question":  "Fill in the blank: Married couples fight about who's better at what?",
        "answers":  [
                        {
                            "text":  "finances/making $",
                            "points":  24
                        },
                        {
                            "text":  "cooking",
                            "points":  23
                        },
                        {
                            "text":  "boinking",
                            "points":  19
                        },
                        {
                            "text":  "driving",
                            "points":  14
                        },
                        {
                            "text":  "cleaning/chores",
                            "points":  11
                        },
                        {
                            "text":  "parenting",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150350,
        "question":  "Name one specific reason you might suspect you're turning into a squirrel.",
        "answers":  [
                        {
                            "text":  "eat nuts/hoard food",
                            "points":  70
                        },
                        {
                            "text":  "i'm nutso/crazy",
                            "points":  8
                        },
                        {
                            "text":  "i climb trees",
                            "points":  6
                        },
                        {
                            "text":  "i grew a tail",
                            "points":  4
                        },
                        {
                            "text":  "getting furry",
                            "points":  3
                        },
                        {
                            "text":  "hibernate/in hole",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150351,
        "question":  "We asked 100 men... Fill in the blank: Admit it -- you're too ______ to be a male exotic dancer.",
        "answers":  [
                        {
                            "text":  "\"well-fed\"",
                            "points":  50
                        },
                        {
                            "text":  "scrawny",
                            "points":  13
                        },
                        {
                            "text":  "old",
                            "points":  13
                        },
                        {
                            "text":  "clumsy",
                            "points":  9
                        },
                        {
                            "text":  "smart",
                            "points":  6
                        },
                        {
                            "text":  "ugly",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150352,
        "question":  "You're at a funeral and the deceased just sat up in his casket. What do you do?",
        "answers":  [
                        {
                            "text":  "scream/cry/freak",
                            "points":  48
                        },
                        {
                            "text":  "run!",
                            "points":  22
                        },
                        {
                            "text":  "faint",
                            "points":  10
                        },
                        {
                            "text":  "laugh/\"hilarious!\"",
                            "points":  5
                        },
                        {
                            "text":  "\"hi. how's life?\"",
                            "points":  4
                        },
                        {
                            "text":  "clap/celebrate",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150353,
        "question":  "Instead of a bouquet, name something a bride might throw at the wedding that could make you think she worked as a stripper.",
        "answers":  [
                        {
                            "text":  "garter/belt",
                            "points":  43
                        },
                        {
                            "text":  "dolla' bills",
                            "points":  19
                        },
                        {
                            "text":  "thong/panties",
                            "points":  18
                        },
                        {
                            "text":  "bra",
                            "points":  9
                        },
                        {
                            "text":  "pasties/tassels",
                            "points":  2
                        },
                        {
                            "text":  "her bridal veil",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150354,
        "question":  "Fill in the blank: Farmer Joe's cow went from chewing grass to smoking grass, and now it ______s all day.",
        "answers":  [
                        {
                            "text":  "sleeps/snores",
                            "points":  42
                        },
                        {
                            "text":  "eats/grazes",
                            "points":  19
                        },
                        {
                            "text":  "laughs/smiles",
                            "points":  11
                        },
                        {
                            "text":  "chills/sits",
                            "points":  8
                        },
                        {
                            "text":  "moos",
                            "points":  7
                        },
                        {
                            "text":  "smokes/gets high",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  150355,
        "question":  "Name something you'd hate to discover is older than you thought.",
        "answers":  [
                        {
                            "text":  "food/milk",
                            "points":  40
                        },
                        {
                            "text":  "my spouse/mate",
                            "points":  40
                        },
                        {
                            "text":  "my house",
                            "points":  6
                        },
                        {
                            "text":  "my car",
                            "points":  3
                        },
                        {
                            "text":  "my computer",
                            "points":  2
                        },
                        {
                            "text":  "my refrigerator",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150356,
        "question":  "Name something a dog can touch with his tongue.",
        "answers":  [
                        {
                            "text":  "his nose",
                            "points":  39
                        },
                        {
                            "text":  "rosebud/butt",
                            "points":  30
                        },
                        {
                            "text":  "\"lipstick\" & nads",
                            "points":  14
                        },
                        {
                            "text":  "his paws",
                            "points":  5
                        },
                        {
                            "text":  "his tail",
                            "points":  3
                        },
                        {
                            "text":  "person/my tongue",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150357,
        "question":  "Name something that a person who's a free spirit doesn't bother wearing.",
        "answers":  [
                        {
                            "text":  "bra",
                            "points":  38
                        },
                        {
                            "text":  "panties/skivvies",
                            "points":  28
                        },
                        {
                            "text":  "any clothes at all",
                            "points":  13
                        },
                        {
                            "text":  "shoes",
                            "points":  6
                        },
                        {
                            "text":  "socks",
                            "points":  4
                        },
                        {
                            "text":  "deodorant",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150358,
        "question":  "Name something in the park a squirrel might throw his nuts at.",
        "answers":  [
                        {
                            "text":  "dog",
                            "points":  30
                        },
                        {
                            "text":  "people/kids",
                            "points":  25
                        },
                        {
                            "text":  "another squirrel",
                            "points":  22
                        },
                        {
                            "text":  "stray cat",
                            "points":  6
                        },
                        {
                            "text":  "bird/pigeon",
                            "points":  6
                        },
                        {
                            "text":  "tree/knothole",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150359,
        "question":  "We asked 100 married men... Name a gift that you got your wife thinking it would make her happy but instead she was insulted.",
        "answers":  [
                        {
                            "text":  "kitchen gadget/pan",
                            "points":  23
                        },
                        {
                            "text":  "spanx/clothes",
                            "points":  22
                        },
                        {
                            "text":  "candy/licorice",
                            "points":  20
                        },
                        {
                            "text":  "exercise bike/equip.",
                            "points":  14
                        },
                        {
                            "text":  "vacuum",
                            "points":  12
                        },
                        {
                            "text":  "cookbook",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150360,
        "question":  "Name something James Bond might teach his dog to fetch for him.",
        "answers":  [
                        {
                            "text":  "gun/weapon",
                            "points":  49
                        },
                        {
                            "text":  "martini/drink",
                            "points":  32
                        },
                        {
                            "text":  "hot hussies",
                            "points":  5
                        },
                        {
                            "text":  "keys",
                            "points":  2
                        },
                        {
                            "text":  "lady's panties/bra",
                            "points":  2
                        },
                        {
                            "text":  "the bad guys",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150361,
        "question":  "You walk into a party. Everyone is nude. What do you do?",
        "answers":  [
                        {
                            "text":  "walk back out",
                            "points":  48
                        },
                        {
                            "text":  "bring out my goods!",
                            "points":  29
                        },
                        {
                            "text":  "laugh/smile",
                            "points":  7
                        },
                        {
                            "text":  "stare/sightsee",
                            "points":  3
                        },
                        {
                            "text":  "mingle/find cutie",
                            "points":  3
                        },
                        {
                            "text":  "get a stiff...drink",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150362,
        "question":  "Name something you'd need for a strip poker party.",
        "answers":  [
                        {
                            "text":  "lotsa clothes",
                            "points":  43
                        },
                        {
                            "text":  "the cards",
                            "points":  32
                        },
                        {
                            "text":  "players/hot ones",
                            "points":  8
                        },
                        {
                            "text":  "lotsa booze!",
                            "points":  4
                        },
                        {
                            "text":  "poker chips",
                            "points":  3
                        },
                        {
                            "text":  "courage/nerve",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150363,
        "question":  "Fill in the blank: I really love Swedish ______.",
        "answers":  [
                        {
                            "text":  "meatballs",
                            "points":  36
                        },
                        {
                            "text":  "fish",
                            "points":  26
                        },
                        {
                            "text":  "women/men",
                            "points":  13
                        },
                        {
                            "text":  "massage",
                            "points":  9
                        },
                        {
                            "text":  "chocolate",
                            "points":  4
                        },
                        {
                            "text":  "pancakes/crepes",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150364,
        "question":  "A Speedo should come with a built-in pouch so a man can put what in it?",
        "answers":  [
                        {
                            "text":  "$/wallet/i.d.",
                            "points":  35
                        },
                        {
                            "text":  "keys",
                            "points":  30
                        },
                        {
                            "text":  "phone",
                            "points":  11
                        },
                        {
                            "text":  "his \"moose knuckle\"",
                            "points":  10
                        },
                        {
                            "text":  "sunblock",
                            "points":  3
                        },
                        {
                            "text":  "condoms",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150365,
        "question":  "Name something you might put on your front porch to scare burglars away.",
        "answers":  [
                        {
                            "text":  "camera/alarm",
                            "points":  35
                        },
                        {
                            "text":  "pissy pooch",
                            "points":  25
                        },
                        {
                            "text":  "sign/security",
                            "points":  16
                        },
                        {
                            "text":  "lights",
                            "points":  9
                        },
                        {
                            "text":  "weapon/cannon",
                            "points":  4
                        },
                        {
                            "text":  "person/mother-in-law",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150366,
        "question":  "Name something a female cop might do to a sexy guy she pulls over.",
        "answers":  [
                        {
                            "text":  "frisk/cavity search",
                            "points":  34
                        },
                        {
                            "text":  "flirt/show boob",
                            "points":  27
                        },
                        {
                            "text":  "let go/warning",
                            "points":  12
                        },
                        {
                            "text":  "exchange numbers",
                            "points":  9
                        },
                        {
                            "text":  "cuff/arrest him",
                            "points":  6
                        },
                        {
                            "text":  "give a ticket",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150367,
        "question":  "Name a creature you'd be shocked that SeaWorld tried to flush down the toilet when it died.",
        "answers":  [
                        {
                            "text":  "whale/orca",
                            "points":  33
                        },
                        {
                            "text":  "fish/shark/eel",
                            "points":  23
                        },
                        {
                            "text":  "dolphin",
                            "points":  18
                        },
                        {
                            "text":  "seal/sea lion",
                            "points":  9
                        },
                        {
                            "text":  "octopus",
                            "points":  5
                        },
                        {
                            "text":  "gator/croc",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150368,
        "question":  "Name a place a woman might post a photo of her ex-husband with the word \"cheater\" on it.",
        "answers":  [
                        {
                            "text":  "online/tinder",
                            "points":  75
                        },
                        {
                            "text":  "bar/nightclub",
                            "points":  4
                        },
                        {
                            "text":  "his workplace",
                            "points":  4
                        },
                        {
                            "text":  "billboard",
                            "points":  3
                        },
                        {
                            "text":  "newspaper",
                            "points":  3
                        },
                        {
                            "text":  "car/truck",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150369,
        "question":  "Tell me something a person might do in the elevator that would make you get off at the next floor.",
        "answers":  [
                        {
                            "text":  "juicy toot",
                            "points":  64
                        },
                        {
                            "text":  "cough/sneeze",
                            "points":  8
                        },
                        {
                            "text":  "hurl",
                            "points":  7
                        },
                        {
                            "text":  "whiz/dump",
                            "points":  5
                        },
                        {
                            "text":  "sing show tunes",
                            "points":  4
                        },
                        {
                            "text":  "get naked",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150370,
        "question":  "Name something in the kitchen that Mrs. Potato Head might use to kill Mr. Potato Head.",
        "answers":  [
                        {
                            "text":  "knife",
                            "points":  44
                        },
                        {
                            "text":  "peeler",
                            "points":  20
                        },
                        {
                            "text":  "grater",
                            "points":  14
                        },
                        {
                            "text":  "pot/of boil'g water",
                            "points":  5
                        },
                        {
                            "text":  "potato slicer",
                            "points":  4
                        },
                        {
                            "text":  "potato masher",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150371,
        "question":  "We asked 100 women... Name something about a date that might remind you of a chihuahua.",
        "answers":  [
                        {
                            "text":  "high-pitch yap",
                            "points":  37
                        },
                        {
                            "text":  "short/tiny legs",
                            "points":  27
                        },
                        {
                            "text":  "skinny face/big eyes",
                            "points":  15
                        },
                        {
                            "text":  "snippy 'tude",
                            "points":  5
                        },
                        {
                            "text":  "ears",
                            "points":  4
                        },
                        {
                            "text":  "hyper/nervous",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150372,
        "question":  "To please Santa on Christmas morning, name something Mrs. Claus covered her body with to turn herself into a Christmas cookie.",
        "answers":  [
                        {
                            "text":  "frosting",
                            "points":  36
                        },
                        {
                            "text":  "chocolate/chips",
                            "points":  22
                        },
                        {
                            "text":  "sprinkles",
                            "points":  9
                        },
                        {
                            "text":  "sugar",
                            "points":  9
                        },
                        {
                            "text":  "whipped cream",
                            "points":  9
                        },
                        {
                            "text":  "cookie dough",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  150373,
        "question":  "We asked 100 married women... If it were up to your husband, where would you go on vacation next year?",
        "answers":  [
                        {
                            "text":  "a beach",
                            "points":  31
                        },
                        {
                            "text":  "las vegas",
                            "points":  29
                        },
                        {
                            "text":  "nowhere/stay home",
                            "points":  12
                        },
                        {
                            "text":  "theme park/orlando",
                            "points":  10
                        },
                        {
                            "text":  "his mom's",
                            "points":  7
                        },
                        {
                            "text":  "alaska",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150374,
        "question":  "We asked 100 married women... Your husband and dog are your significant others. Name something you do with both.",
        "answers":  [
                        {
                            "text":  "walk/exercise",
                            "points":  30
                        },
                        {
                            "text":  "cuddle/heavy petting",
                            "points":  29
                        },
                        {
                            "text":  "sleep",
                            "points":  14
                        },
                        {
                            "text":  "smooch",
                            "points":  9
                        },
                        {
                            "text":  "feed/eat",
                            "points":  5
                        },
                        {
                            "text":  "talk/yell",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150375,
        "question":  "Bad news -- they spelled your name wrong. Worse news -- they spelled it wrong on your what?",
        "answers":  [
                        {
                            "text":  "driver's license",
                            "points":  30
                        },
                        {
                            "text":  "birth certificate",
                            "points":  17
                        },
                        {
                            "text":  "paycheck",
                            "points":  13
                        },
                        {
                            "text":  "diploma",
                            "points":  12
                        },
                        {
                            "text":  "tombstone",
                            "points":  10
                        },
                        {
                            "text":  "passport",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  150376,
        "question":  "Fill in the blank: Bob said, \"I accidentally went to a veterinarian instead of a doctor and he tried to ______ me.\"",
        "answers":  [
                        {
                            "text":  "neuter me",
                            "points":  62
                        },
                        {
                            "text":  "pet me",
                            "points":  9
                        },
                        {
                            "text":  "examine me",
                            "points":  8
                        },
                        {
                            "text":  "muzzle me",
                            "points":  4
                        },
                        {
                            "text":  "bathe/groom me",
                            "points":  4
                        },
                        {
                            "text":  "sedate/euthanize",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150377,
        "question":  "A cannibal not only likes to nibble on his date's ear, he also likes to nibble on her what?",
        "answers":  [
                        {
                            "text":  "toes/feet",
                            "points":  32
                        },
                        {
                            "text":  "fingers/hand",
                            "points":  16
                        },
                        {
                            "text":  "nose/face",
                            "points":  14
                        },
                        {
                            "text":  "milk wagons",
                            "points":  12
                        },
                        {
                            "text":  "arm",
                            "points":  9
                        },
                        {
                            "text":  "neck",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  150378,
        "question":  "Name something Humpty Dumpty might have used to cover his crack.",
        "answers":  [
                        {
                            "text":  "tape",
                            "points":  25
                        },
                        {
                            "text":  "glue",
                            "points":  20
                        },
                        {
                            "text":  "clothes/his hat",
                            "points":  19
                        },
                        {
                            "text":  "bandage",
                            "points":  16
                        },
                        {
                            "text":  "spackle/caulk",
                            "points":  6
                        },
                        {
                            "text":  "concealer/makeup",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150379,
        "question":  "Name a place you wouldn't want to check into.",
        "answers":  [
                        {
                            "text":  "bad/bates motel",
                            "points":  24
                        },
                        {
                            "text":  "hospital/asylum",
                            "points":  19
                        },
                        {
                            "text":  "prison/rikers3",
                            "points":  18
                        },
                        {
                            "text":  "hell",
                            "points":  15
                        },
                        {
                            "text":  "morgue/mortuary",
                            "points":  7
                        },
                        {
                            "text":  "rehab...again",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  150380,
        "question":  "Instead of a bouquet, name something a witch might throw at her wedding.",
        "answers":  [
                        {
                            "text":  "a broom",
                            "points":  60
                        },
                        {
                            "text":  "potion/spell",
                            "points":  14
                        },
                        {
                            "text":  "rice",
                            "points":  5
                        },
                        {
                            "text":  "toads/animals",
                            "points":  5
                        },
                        {
                            "text":  "ball of fire",
                            "points":  3
                        },
                        {
                            "text":  "poison ivy/weeds",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150381,
        "question":  "Name something at a wild party that a party animal might have at his funeral.",
        "answers":  [
                        {
                            "text":  "booze/beer bong",
                            "points":  60
                        },
                        {
                            "text":  "stripper",
                            "points":  9
                        },
                        {
                            "text":  "tunes/dance party",
                            "points":  9
                        },
                        {
                            "text":  "drugs/angel dust",
                            "points":  5
                        },
                        {
                            "text":  "friends",
                            "points":  3
                        },
                        {
                            "text":  "party hats/horns",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150382,
        "question":  "We asked 100 married women... Name something you wish your husband wasn't so comfortable doing around you.",
        "answers":  [
                        {
                            "text":  "two-toot salute",
                            "points":  43
                        },
                        {
                            "text":  "pick'g his nose",
                            "points":  14
                        },
                        {
                            "text":  "pee/baking brownies",
                            "points":  11
                        },
                        {
                            "text":  "burping",
                            "points":  8
                        },
                        {
                            "text":  "lying",
                            "points":  7
                        },
                        {
                            "text":  "snoring",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  150383,
        "question":  "If you went to hell, who would you expect to see in the welcoming committee?",
        "answers":  [
                        {
                            "text":  "politician/dictator",
                            "points":  40
                        },
                        {
                            "text":  "satan himself",
                            "points":  35
                        },
                        {
                            "text":  "my ex",
                            "points":  5
                        },
                        {
                            "text":  "serial killer/manson",
                            "points":  4
                        },
                        {
                            "text":  "all my buddies!",
                            "points":  3
                        },
                        {
                            "text":  "my kids",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150384,
        "question":  "Men's underwear should come with a pocket so they can keep their what in it?",
        "answers":  [
                        {
                            "text":  "condoms",
                            "points":  27
                        },
                        {
                            "text":  "phones",
                            "points":  19
                        },
                        {
                            "text":  "keys",
                            "points":  15
                        },
                        {
                            "text":  "$/wallet/id",
                            "points":  14
                        },
                        {
                            "text":  "baloney pony/nads",
                            "points":  9
                        },
                        {
                            "text":  "pea-sized brains",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  150385,
        "question":  "We asked 100 men... What would you do if when you got home, you found a strange woman taking a shower in your bathroom?",
        "answers":  [
                        {
                            "text":  "who r u/why here?",
                            "points":  25
                        },
                        {
                            "text":  "join her",
                            "points":  24
                        },
                        {
                            "text":  "call the cops",
                            "points":  15
                        },
                        {
                            "text":  "gawk",
                            "points":  12
                        },
                        {
                            "text":  "\"need help/soap?\"",
                            "points":  7
                        },
                        {
                            "text":  "call/get my wife",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  150386,
        "question":  "If you were above the law, name a crime you might commit.",
        "answers":  [
                        {
                            "text":  "stealing/robbery",
                            "points":  63
                        },
                        {
                            "text":  "murder",
                            "points":  11
                        },
                        {
                            "text":  "run a cartel/drugs",
                            "points":  5
                        },
                        {
                            "text":  "adultery",
                            "points":  3
                        },
                        {
                            "text":  "insider trading",
                            "points":  3
                        },
                        {
                            "text":  "money laundering",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150387,
        "question":  "Bad news -- you're going to hell. Good news -- you've packed plenty of what?",
        "answers":  [
                        {
                            "text":  "water/ice",
                            "points":  49
                        },
                        {
                            "text":  "booze/fireball",
                            "points":  14
                        },
                        {
                            "text":  "food/marshmallows",
                            "points":  10
                        },
                        {
                            "text":  "light-color clothes",
                            "points":  7
                        },
                        {
                            "text":  "sunscreen",
                            "points":  5
                        },
                        {
                            "text":  "fans/ac's",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150388,
        "question":  "Name a fruit you're glad your head isn't shaped like.",
        "answers":  [
                        {
                            "text":  "banana",
                            "points":  41
                        },
                        {
                            "text":  "pear",
                            "points":  20
                        },
                        {
                            "text":  "melon",
                            "points":  18
                        },
                        {
                            "text":  "lemon",
                            "points":  3
                        },
                        {
                            "text":  "pineapple",
                            "points":  3
                        },
                        {
                            "text":  "strawberry",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150389,
        "question":  "People were shocked when instead of cutting the cake, the bride cut the what?",
        "answers":  [
                        {
                            "text":  "cheese",
                            "points":  37
                        },
                        {
                            "text":  "groom",
                            "points":  23
                        },
                        {
                            "text":  "dress",
                            "points":  15
                        },
                        {
                            "text":  "line",
                            "points":  5
                        },
                        {
                            "text":  "flowers up",
                            "points":  4
                        },
                        {
                            "text":  "ribbon",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150390,
        "question":  "Name a word starting with the letter S that describes Steve Harvey's head.",
        "answers":  [
                        {
                            "text":  "shiny",
                            "points":  36
                        },
                        {
                            "text":  "smooth",
                            "points":  27
                        },
                        {
                            "text":  "shaved",
                            "points":  14
                        },
                        {
                            "text":  "slick",
                            "points":  6
                        },
                        {
                            "text":  "sexy",
                            "points":  3
                        },
                        {
                            "text":  "strange",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150391,
        "question":  "We asked 100 married men... Name an animal that if it talked, would sound just like your wife.",
        "answers":  [
                        {
                            "text":  "parrot/bird",
                            "points":  29
                        },
                        {
                            "text":  "dog",
                            "points":  16
                        },
                        {
                            "text":  "cat",
                            "points":  15
                        },
                        {
                            "text":  "hyena",
                            "points":  13
                        },
                        {
                            "text":  "chimp/ape",
                            "points":  11
                        },
                        {
                            "text":  "horse",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150392,
        "question":  "Name something that can make a big, strong man cry like a little girl.",
        "answers":  [
                        {
                            "text":  "pain/groin kick",
                            "points":  26
                        },
                        {
                            "text":  "death",
                            "points":  25
                        },
                        {
                            "text":  "new baby/birth",
                            "points":  11
                        },
                        {
                            "text":  "onions",
                            "points":  10
                        },
                        {
                            "text":  "wedding/royal wed'g",
                            "points":  8
                        },
                        {
                            "text":  "movie/titanic",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  150393,
        "question":  "A music conductor told his mistress, \"Oh baby, play me like a\" what?",
        "answers":  [
                        {
                            "text":  "fiddle/violin",
                            "points":  58
                        },
                        {
                            "text":  "flute",
                            "points":  10
                        },
                        {
                            "text":  "piano",
                            "points":  9
                        },
                        {
                            "text":  "drum",
                            "points":  5
                        },
                        {
                            "text":  "trombone",
                            "points":  3
                        },
                        {
                            "text":  "harp",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150394,
        "question":  "If a stripper called herself Cinderella, name something she might use in her act.",
        "answers":  [
                        {
                            "text":  "glass slipper",
                            "points":  56
                        },
                        {
                            "text":  "broom/clean'g supply",
                            "points":  11
                        },
                        {
                            "text":  "pumpkin",
                            "points":  7
                        },
                        {
                            "text":  "magic/wand",
                            "points":  6
                        },
                        {
                            "text":  "ball gown",
                            "points":  4
                        },
                        {
                            "text":  "tiara/crown",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150395,
        "question":  "Name something you never want to see your grandma do in a sexy way.",
        "answers":  [
                        {
                            "text":  "dance/striptease",
                            "points":  55
                        },
                        {
                            "text":  "dress/wear bikini",
                            "points":  8
                        },
                        {
                            "text":  "anything",
                            "points":  8
                        },
                        {
                            "text":  "strut",
                            "points":  7
                        },
                        {
                            "text":  "kiss/me",
                            "points":  5
                        },
                        {
                            "text":  "flirt/tease me",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150396,
        "question":  "Name a place that is the perfect setting for love.",
        "answers":  [
                        {
                            "text":  "beach/hawaii",
                            "points":  54
                        },
                        {
                            "text":  "bedroom",
                            "points":  14
                        },
                        {
                            "text":  "paris/france",
                            "points":  9
                        },
                        {
                            "text":  "hotel/motel",
                            "points":  4
                        },
                        {
                            "text":  "by fireplace",
                            "points":  3
                        },
                        {
                            "text":  "a park",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150397,
        "question":  "Name something you worry that you might do when you get really, really excited.",
        "answers":  [
                        {
                            "text":  "make \"warm lemonade\"",
                            "points":  43
                        },
                        {
                            "text":  "scream/cuss",
                            "points":  25
                        },
                        {
                            "text":  "jump",
                            "points":  6
                        },
                        {
                            "text":  "snort",
                            "points":  5
                        },
                        {
                            "text":  "a 2-toot salute",
                            "points":  5
                        },
                        {
                            "text":  "cry",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150398,
        "question":  "Name something of yours that you look back and think, \"I obviously made the wrong choice.\"",
        "answers":  [
                        {
                            "text":  "spouse #2/mate",
                            "points":  38
                        },
                        {
                            "text":  "career",
                            "points":  19
                        },
                        {
                            "text":  "school/my major",
                            "points":  10
                        },
                        {
                            "text":  "car/truck",
                            "points":  8
                        },
                        {
                            "text":  "clothes/wool undies",
                            "points":  6
                        },
                        {
                            "text":  "haircut/color",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  150399,
        "question":  "Name a reason you're standing on one leg.",
        "answers":  [
                        {
                            "text":  "pain/broken leg",
                            "points":  34
                        },
                        {
                            "text":  "yoga/exercise",
                            "points":  22
                        },
                        {
                            "text":  "i love to hop!",
                            "points":  12
                        },
                        {
                            "text":  "only have one leg",
                            "points":  11
                        },
                        {
                            "text":  "sobriety test",
                            "points":  4
                        },
                        {
                            "text":  "putting shoe on",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150400,
        "question":  "We asked 100 married women... What would you do if you wanted a pair of earrings but your husband got you a pair of Spanx?",
        "answers":  [
                        {
                            "text":  "return/exchange",
                            "points":  27
                        },
                        {
                            "text":  "buy 'em myself",
                            "points":  20
                        },
                        {
                            "text":  "wear 'em/\"thanks!\"",
                            "points":  17
                        },
                        {
                            "text":  "beat his arse",
                            "points":  11
                        },
                        {
                            "text":  "instant divorce",
                            "points":  7
                        },
                        {
                            "text":  "yell/cuss out",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  150401,
        "question":  "Name something you think Steve Harvey spends a lot of money on.",
        "answers":  [
                        {
                            "text":  "suits/clothes",
                            "points":  63
                        },
                        {
                            "text":  "wife/women",
                            "points":  7
                        },
                        {
                            "text":  "head wax/oil",
                            "points":  5
                        },
                        {
                            "text":  "stache grooming",
                            "points":  4
                        },
                        {
                            "text":  "teeth/whitener",
                            "points":  4
                        },
                        {
                            "text":  "cars",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150402,
        "question":  "Name a football term a football player calls out in the bedroom.",
        "answers":  [
                        {
                            "text":  "touchdown!",
                            "points":  55
                        },
                        {
                            "text":  "score!",
                            "points":  14
                        },
                        {
                            "text":  "hut, hut, hike!",
                            "points":  10
                        },
                        {
                            "text":  "false start!",
                            "points":  3
                        },
                        {
                            "text":  "unsport'like conduct",
                            "points":  2
                        },
                        {
                            "text":  "go long/deep",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150403,
        "question":  "Name a part you could see Steve Harvey playing in a TV miniseries of the Bible.",
        "answers":  [
                        {
                            "text":  "moses",
                            "points":  36
                        },
                        {
                            "text":  "noah",
                            "points":  19
                        },
                        {
                            "text":  "jesus/god",
                            "points":  14
                        },
                        {
                            "text":  "random high priest",
                            "points":  7
                        },
                        {
                            "text":  "judas",
                            "points":  7
                        },
                        {
                            "text":  "pharoah/shishak",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150404,
        "question":  "Steve Harvey says, \"My Aunt Agnes has the world's biggest\" what?",
        "answers":  [
                        {
                            "text":  "patootie",
                            "points":  34
                        },
                        {
                            "text":  "mouth/lips",
                            "points":  29
                        },
                        {
                            "text":  "heart",
                            "points":  8
                        },
                        {
                            "text":  "attitude/ego",
                            "points":  6
                        },
                        {
                            "text":  "nose",
                            "points":  5
                        },
                        {
                            "text":  "bosoms/bra",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150405,
        "question":  "Name something that you can't always control if it comes out of you.",
        "answers":  [
                        {
                            "text":  "silent-violent fart",
                            "points":  32
                        },
                        {
                            "text":  "a sneeze",
                            "points":  17
                        },
                        {
                            "text":  "words/temper",
                            "points":  14
                        },
                        {
                            "text":  "pee flow/angry turd",
                            "points":  10
                        },
                        {
                            "text":  "a burp",
                            "points":  7
                        },
                        {
                            "text":  "vomit stream",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  150406,
        "question":  "Grandma told grandpa, \"If your boobs get any bigger, you'll need to\" do what?",
        "answers":  [
                        {
                            "text":  "wear a bra",
                            "points":  55
                        },
                        {
                            "text":  "get lift/reduction",
                            "points":  9
                        },
                        {
                            "text":  "tie/tape 'em",
                            "points":  8
                        },
                        {
                            "text":  "buy forklift",
                            "points":  5
                        },
                        {
                            "text":  "use wheelbarrow",
                            "points":  4
                        },
                        {
                            "text":  "wear a brace",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150407,
        "question":  "We asked 100 men... Give me an S word that describes your ideal woman.",
        "answers":  [
                        {
                            "text":  "sexy",
                            "points":  52
                        },
                        {
                            "text":  "smart",
                            "points":  14
                        },
                        {
                            "text":  "sweet",
                            "points":  8
                        },
                        {
                            "text":  "sophisticated",
                            "points":  6
                        },
                        {
                            "text":  "slutty",
                            "points":  3
                        },
                        {
                            "text":  "sassy",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150408,
        "question":  "Name a part of a woman's body that is the last part a man notices.",
        "answers":  [
                        {
                            "text":  "feet/toes",
                            "points":  34
                        },
                        {
                            "text":  "elbows/arms/pits",
                            "points":  16
                        },
                        {
                            "text":  "eyes/face",
                            "points":  10
                        },
                        {
                            "text":  "hands/nails",
                            "points":  9
                        },
                        {
                            "text":  "ears",
                            "points":  8
                        },
                        {
                            "text":  "ankles/legs",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  150409,
        "question":  "We asked 100 married men... If you retire before your wife does, what will you do while she's at work?",
        "answers":  [
                        {
                            "text":  "sleep",
                            "points":  29
                        },
                        {
                            "text":  "watch tv",
                            "points":  27
                        },
                        {
                            "text":  "computer/games",
                            "points":  10
                        },
                        {
                            "text":  "fish/sports",
                            "points":  9
                        },
                        {
                            "text":  "chores",
                            "points":  7
                        },
                        {
                            "text":  "drink/bar with pals",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150410,
        "question":  "Name a place parents go to smoke weed so their children won't suspect.",
        "answers":  [
                        {
                            "text":  "in garage",
                            "points":  22
                        },
                        {
                            "text":  "yard/treehouse",
                            "points":  22
                        },
                        {
                            "text":  "bathroom",
                            "points":  19
                        },
                        {
                            "text":  "car/hippie van",
                            "points":  10
                        },
                        {
                            "text":  "bedroom",
                            "points":  6
                        },
                        {
                            "text":  "park/woods",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  150411,
        "question":  "Fill in the blank: Most men see themselves as the world's best what?",
        "answers":  [
                        {
                            "text":  "lover/kisser",
                            "points":  63
                        },
                        {
                            "text":  "man/person",
                            "points":  7
                        },
                        {
                            "text":  "driver",
                            "points":  5
                        },
                        {
                            "text":  "looking",
                            "points":  3
                        },
                        {
                            "text":  "dad",
                            "points":  3
                        },
                        {
                            "text":  "repairman",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150412,
        "question":  "Roses are red; violets are blue. If a man dumps his girlfriend on Valentine's Day, what might she do?",
        "answers":  [
                        {
                            "text":  "cry/boo-hoo",
                            "points":  46
                        },
                        {
                            "text":  "celebrate/drink",
                            "points":  9
                        },
                        {
                            "text":  "key/trash car",
                            "points":  9
                        },
                        {
                            "text":  "his bud/new guy",
                            "points":  9
                        },
                        {
                            "text":  "punch/kick him",
                            "points":  6
                        },
                        {
                            "text":  "kill/cut out heart",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  150413,
        "question":  "Name something you'd be shocked to come home and find your dog using.",
        "answers":  [
                        {
                            "text":  "toilet",
                            "points":  43
                        },
                        {
                            "text":  "tv remote",
                            "points":  13
                        },
                        {
                            "text":  "computer",
                            "points":  8
                        },
                        {
                            "text":  "chick stick",
                            "points":  8
                        },
                        {
                            "text":  "phone",
                            "points":  7
                        },
                        {
                            "text":  "my toothbrush",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  150414,
        "question":  "Fill in the blank: At karaoke night, when the boss sang, all the employees ______ed.",
        "answers":  [
                        {
                            "text":  "clapped & cheered",
                            "points":  37
                        },
                        {
                            "text":  "laughed",
                            "points":  15
                        },
                        {
                            "text":  "left/ran away",
                            "points":  13
                        },
                        {
                            "text":  "booed/groaned",
                            "points":  7
                        },
                        {
                            "text":  "cringed/shuddered",
                            "points":  7
                        },
                        {
                            "text":  "sang along",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  150415,
        "question":  "Name something your parents have that's better than yours.",
        "answers":  [
                        {
                            "text":  "house",
                            "points":  33
                        },
                        {
                            "text":  "money/management",
                            "points":  23
                        },
                        {
                            "text":  "maserati",
                            "points":  16
                        },
                        {
                            "text":  "marriage/love",
                            "points":  7
                        },
                        {
                            "text":  "children",
                            "points":  3
                        },
                        {
                            "text":  "graves",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150416,
        "question":  "Name something you might find at a bachelor party for a 100-year-old man.",
        "answers":  [
                        {
                            "text":  "babes/old stripper",
                            "points":  31
                        },
                        {
                            "text":  "viagra/meds",
                            "points":  21
                        },
                        {
                            "text":  "misplaced teeth",
                            "points":  12
                        },
                        {
                            "text":  "wheelchair/cane",
                            "points":  11
                        },
                        {
                            "text":  "oxygen/med equip.",
                            "points":  5
                        },
                        {
                            "text":  "soft food",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150417,
        "question":  "Name something that you think might be fun about being a cow.",
        "answers":  [
                        {
                            "text":  "eat/cud",
                            "points":  26
                        },
                        {
                            "text":  "milk/a teat-tug",
                            "points":  25
                        },
                        {
                            "text":  "chillax/roam outside",
                            "points":  16
                        },
                        {
                            "text":  "moo/cow talk",
                            "points":  8
                        },
                        {
                            "text":  "poo/pee freely",
                            "points":  5
                        },
                        {
                            "text":  "beefy build",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150418,
        "question":  "At a $50 funeral, what might they put someone's ashes in instead of an urn?",
        "answers":  [
                        {
                            "text":  "box/cheerios box",
                            "points":  23
                        },
                        {
                            "text":  "can/coffee tin",
                            "points":  17
                        },
                        {
                            "text":  "bottle/mayo jar",
                            "points":  14
                        },
                        {
                            "text":  "cup/mug",
                            "points":  13
                        },
                        {
                            "text":  "bag/ziploc",
                            "points":  12
                        },
                        {
                            "text":  "ashtray",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  150419,
        "question":  "We asked 100 women... You'd never tell her, but what are you better at than your mom is?",
        "answers":  [
                        {
                            "text":  "cooking",
                            "points":  40
                        },
                        {
                            "text":  "tech/smartphone",
                            "points":  17
                        },
                        {
                            "text":  "parenting",
                            "points":  14
                        },
                        {
                            "text":  "cleaning/laundry",
                            "points":  5
                        },
                        {
                            "text":  "patience/calm",
                            "points":  5
                        },
                        {
                            "text":  "driving",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150420,
        "question":  "Some guys are so lonely, they'll go out on a date with their who?",
        "answers":  [
                        {
                            "text":  "cousin",
                            "points":  36
                        },
                        {
                            "text":  "mother",
                            "points":  16
                        },
                        {
                            "text":  "sister",
                            "points":  15
                        },
                        {
                            "text":  "ex",
                            "points":  6
                        },
                        {
                            "text":  "friend/ugly gal pal",
                            "points":  6
                        },
                        {
                            "text":  "boss/coworker",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150421,
        "question":  "On Thanksgiving, name a farm animal that a turkey might try to disguise itself as.",
        "answers":  [
                        {
                            "text":  "chicken/rooster",
                            "points":  33
                        },
                        {
                            "text":  "pig",
                            "points":  23
                        },
                        {
                            "text":  "cow",
                            "points":  11
                        },
                        {
                            "text":  "sheep/lamb",
                            "points":  8
                        },
                        {
                            "text":  "dog",
                            "points":  4
                        },
                        {
                            "text":  "horse",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150422,
        "question":  "Name the last place you were when you got in trouble.",
        "answers":  [
                        {
                            "text":  "work",
                            "points":  22
                        },
                        {
                            "text":  "home/bedroom",
                            "points":  22
                        },
                        {
                            "text":  "bar/nightclub",
                            "points":  17
                        },
                        {
                            "text":  "school/college",
                            "points":  11
                        },
                        {
                            "text":  "store/mall",
                            "points":  7
                        },
                        {
                            "text":  "my car",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150423,
        "question":  "Tell me something you might notice about a hitchhiker that would make you think twice about giving him a lift.",
        "answers":  [
                        {
                            "text":  "dirty/unkempt",
                            "points":  33
                        },
                        {
                            "text":  "armed/weapon",
                            "points":  27
                        },
                        {
                            "text":  "mean face/'tude",
                            "points":  7
                        },
                        {
                            "text":  "tattoo/of satan",
                            "points":  7
                        },
                        {
                            "text":  "covered in blood",
                            "points":  5
                        },
                        {
                            "text":  "large bag/case",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150424,
        "question":  "Name an animal everyone calls the boss behind his back.",
        "answers":  [
                        {
                            "text":  "jackass/mule",
                            "points":  31
                        },
                        {
                            "text":  "pig/hog",
                            "points":  16
                        },
                        {
                            "text":  "dog",
                            "points":  14
                        },
                        {
                            "text":  "lion",
                            "points":  12
                        },
                        {
                            "text":  "weasel",
                            "points":  5
                        },
                        {
                            "text":  "cat/kitty",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150425,
        "question":  "If you ever did see a real ghost, name a question you'd want to ask it.",
        "answers":  [
                        {
                            "text":  "who are you?",
                            "points":  21
                        },
                        {
                            "text":  "why you here?",
                            "points":  20
                        },
                        {
                            "text":  "how's afterlife?",
                            "points":  20
                        },
                        {
                            "text":  "how'd you die?",
                            "points":  12
                        },
                        {
                            "text":  "are you real?",
                            "points":  5
                        },
                        {
                            "text":  "know casper/my fam?",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150426,
        "question":  "Name an animal you might look at and say, \"Oh my -- what sharp teeth you have.\"",
        "answers":  [
                        {
                            "text":  "shark",
                            "points":  33
                        },
                        {
                            "text":  "tiger",
                            "points":  17
                        },
                        {
                            "text":  "wolf",
                            "points":  12
                        },
                        {
                            "text":  "lion",
                            "points":  9
                        },
                        {
                            "text":  "gator/croc",
                            "points":  5
                        },
                        {
                            "text":  "cat",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  150427,
        "question":  "Name a kind of pole that doesn't attract strippers.",
        "answers":  [
                        {
                            "text":  "north pole",
                            "points":  37
                        },
                        {
                            "text":  "phone/utility",
                            "points":  13
                        },
                        {
                            "text":  "flagpole",
                            "points":  9
                        },
                        {
                            "text":  "fishing pole",
                            "points":  8
                        },
                        {
                            "text":  "barber pole",
                            "points":  7
                        },
                        {
                            "text":  "light pole",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  150428,
        "question":  "Name something some married men might secretly say that they love more than they love their wife.",
        "answers":  [
                        {
                            "text":  "car/'67 shelby",
                            "points":  31
                        },
                        {
                            "text":  "sports/equip.",
                            "points":  26
                        },
                        {
                            "text":  "the dog",
                            "points":  10
                        },
                        {
                            "text":  "booze",
                            "points":  6
                        },
                        {
                            "text":  "babes & boobs",
                            "points":  4
                        },
                        {
                            "text":  "$$$/wife's salary",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150429,
        "question":  "Name something a teacher caught you doing in high school.",
        "answers":  [
                        {
                            "text":  "cheating",
                            "points":  25
                        },
                        {
                            "text":  "skipping class",
                            "points":  15
                        },
                        {
                            "text":  "smoking",
                            "points":  12
                        },
                        {
                            "text":  "sleeping",
                            "points":  11
                        },
                        {
                            "text":  "talking/cussing",
                            "points":  11
                        },
                        {
                            "text":  "passing notes",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  150430,
        "question":  "Name something on your desk that you'd love to shove in an annoying coworker's mouth.",
        "answers":  [
                        {
                            "text":  "stapler",
                            "points":  38
                        },
                        {
                            "text":  "computer/mouse",
                            "points":  14
                        },
                        {
                            "text":  "pen/pencil",
                            "points":  10
                        },
                        {
                            "text":  "paper/post-its",
                            "points":  8
                        },
                        {
                            "text":  "paperweight",
                            "points":  5
                        },
                        {
                            "text":  "tape dispenser",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150431,
        "question":  "Name a kind of seat you'd hate to fall off of.",
        "answers":  [
                        {
                            "text":  "toilet/bidet",
                            "points":  30
                        },
                        {
                            "text":  "barstool",
                            "points":  20
                        },
                        {
                            "text":  "ski lift",
                            "points":  8
                        },
                        {
                            "text":  "amusement ride seat",
                            "points":  8
                        },
                        {
                            "text":  "airplane seat",
                            "points":  6
                        },
                        {
                            "text":  "bicycle seat",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  150432,
        "question":  "We asked 100 millennials... Your parents paid all of your college costs. But now what favor do they want?",
        "answers":  [
                        {
                            "text":  "me to move out",
                            "points":  19
                        },
                        {
                            "text":  "pay bills/rent",
                            "points":  13
                        },
                        {
                            "text":  "be their caretaker",
                            "points":  12
                        },
                        {
                            "text":  "pay it all back",
                            "points":  12
                        },
                        {
                            "text":  "visit/time together",
                            "points":  11
                        },
                        {
                            "text":  "a house/live with me",
                            "points":  11
                        }
                    ]
    },
    {
        "id":  150433,
        "question":  "We asked 100 men... If you come home late, you'll know your wife's angry if she's carrying what?",
        "answers":  [
                        {
                            "text":  "a frying pan",
                            "points":  16
                        },
                        {
                            "text":  "a gun",
                            "points":  16
                        },
                        {
                            "text":  "a bat",
                            "points":  16
                        },
                        {
                            "text":  "a knife",
                            "points":  12
                        },
                        {
                            "text":  "a rolling pin",
                            "points":  10
                        },
                        {
                            "text":  "suitcase/my clothes",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  150434,
        "question":  "Name something you'd be surprised to find in the cookies that grandma baked you.",
        "answers":  [
                        {
                            "text":  "marijuana/drugs",
                            "points":  48
                        },
                        {
                            "text":  "raisins/fruit",
                            "points":  10
                        },
                        {
                            "text":  "her teeth",
                            "points":  5
                        },
                        {
                            "text":  "choc. chips/candy",
                            "points":  5
                        },
                        {
                            "text":  "hair",
                            "points":  5
                        },
                        {
                            "text":  "meat/fish",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150435,
        "question":  "Be honest -- you'll probably never hear anybody say you have the sexiest what?",
        "answers":  [
                        {
                            "text":  "corn cannon",
                            "points":  17
                        },
                        {
                            "text":  "beer gut/abs",
                            "points":  16
                        },
                        {
                            "text":  "feet/big toe",
                            "points":  16
                        },
                        {
                            "text":  "face/smile",
                            "points":  10
                        },
                        {
                            "text":  "bony arms",
                            "points":  8
                        },
                        {
                            "text":  "legs/kneecaps",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  150436,
        "question":  "Name a word starting with B that describes your granny's fanny.",
        "answers":  [
                        {
                            "text":  "big",
                            "points":  44
                        },
                        {
                            "text":  "butt/buttocks",
                            "points":  9
                        },
                        {
                            "text":  "broad",
                            "points":  7
                        },
                        {
                            "text":  "bouncy",
                            "points":  4
                        },
                        {
                            "text":  "booty/licious",
                            "points":  4
                        },
                        {
                            "text":  "bony",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150437,
        "question":  "In your nightmares, name a place where you are the only one there who is naked.",
        "answers":  [
                        {
                            "text":  "school",
                            "points":  22
                        },
                        {
                            "text":  "church",
                            "points":  20
                        },
                        {
                            "text":  "work/mtg.",
                            "points":  17
                        },
                        {
                            "text":  "store/walmart",
                            "points":  7
                        },
                        {
                            "text":  "restaurant",
                            "points":  3
                        },
                        {
                            "text":  "beach",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150438,
        "question":  "Name something you'd do if your boss came to work naked.",
        "answers":  [
                        {
                            "text":  "laugh",
                            "points":  31
                        },
                        {
                            "text":  "run/hide/leave",
                            "points":  18
                        },
                        {
                            "text":  "post pics/video",
                            "points":  6
                        },
                        {
                            "text":  "quit",
                            "points":  5
                        },
                        {
                            "text":  "scream/freak/cry",
                            "points":  5
                        },
                        {
                            "text":  "blow chunks",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  150439,
        "question":  "Which TV host has the best moves?",
        "answers":  [
                        {
                            "text":  "steve harvey",
                            "points":  27
                        },
                        {
                            "text":  "ellen",
                            "points":  14
                        },
                        {
                            "text":  "alex trebek",
                            "points":  11
                        },
                        {
                            "text":  "wayne brady",
                            "points":  8
                        },
                        {
                            "text":  "pat sajak",
                            "points":  5
                        },
                        {
                            "text":  "jimmy fallon",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150440,
        "question":  "Name something of yours that none of your relatives would want to inherit if you die.",
        "answers":  [
                        {
                            "text":  "debt/bills",
                            "points":  22
                        },
                        {
                            "text":  "garb/flannel thong",
                            "points":  22
                        },
                        {
                            "text":  "pet/chickens",
                            "points":  12
                        },
                        {
                            "text":  "old toys/dolls",
                            "points":  5
                        },
                        {
                            "text":  "furniture/mattress",
                            "points":  4
                        },
                        {
                            "text":  "awful kids",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150441,
        "question":  "Name something in a hospital room that a patient might be tempted to steal.",
        "answers":  [
                        {
                            "text":  "luxe bedding",
                            "points":  25
                        },
                        {
                            "text":  "tv",
                            "points":  14
                        },
                        {
                            "text":  "meds",
                            "points":  11
                        },
                        {
                            "text":  "towels",
                            "points":  7
                        },
                        {
                            "text":  "bedpan/urinal",
                            "points":  6
                        },
                        {
                            "text":  "tissue/tp rolls",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  150442,
        "question":  "Name something your finger fits inside of but you might not want to put it in there.",
        "answers":  [
                        {
                            "text":  "nose",
                            "points":  20
                        },
                        {
                            "text":  "your bottom",
                            "points":  20
                        },
                        {
                            "text":  "ear",
                            "points":  8
                        },
                        {
                            "text":  "bottle/jar",
                            "points":  7
                        },
                        {
                            "text":  "light/elec. socket",
                            "points":  7
                        },
                        {
                            "text":  "ring/from mr. wrong",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  150443,
        "question":  "Name an activity for which you might need a drink to loosen up before you do it.",
        "answers":  [
                        {
                            "text":  "dancing",
                            "points":  20
                        },
                        {
                            "text":  "dating/blind date",
                            "points":  14
                        },
                        {
                            "text":  "karaoke/singing",
                            "points":  11
                        },
                        {
                            "text":  "making love",
                            "points":  8
                        },
                        {
                            "text":  "giving a speech",
                            "points":  8
                        },
                        {
                            "text":  "bowling",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  150444,
        "question":  "Name a specific place you fantasize about making love when no one is looking.",
        "answers":  [
                        {
                            "text":  "beach/ocean",
                            "points":  34
                        },
                        {
                            "text":  "plane/mile high",
                            "points":  8
                        },
                        {
                            "text":  "car/parking lot",
                            "points":  8
                        },
                        {
                            "text":  "swimming pool",
                            "points":  5
                        },
                        {
                            "text":  "the office",
                            "points":  5
                        },
                        {
                            "text":  "my yard",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  150445,
        "question":  "Name an unusual place where some couples hold their wedding ceremony.",
        "answers":  [
                        {
                            "text":  "under water",
                            "points":  25
                        },
                        {
                            "text":  "beach",
                            "points":  13
                        },
                        {
                            "text":  "skydiving",
                            "points":  9
                        },
                        {
                            "text":  "vegas/drive-thru",
                            "points":  9
                        },
                        {
                            "text":  "cemetery",
                            "points":  5
                        },
                        {
                            "text":  "park",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150446,
        "question":  "We asked 100 women... If you could trade lives with any woman in the world, who would it be?",
        "answers":  [
                        {
                            "text":  "oprah",
                            "points":  30
                        },
                        {
                            "text":  "jennifer aniston",
                            "points":  8
                        },
                        {
                            "text":  "ellen",
                            "points":  7
                        },
                        {
                            "text":  "jennifer garner",
                            "points":  6
                        },
                        {
                            "text":  "meghan markle",
                            "points":  6
                        },
                        {
                            "text":  "beyonce",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  150447,
        "question":  "Name the worst thing you've ever done at work.",
        "answers":  [
                        {
                            "text":  "sleep",
                            "points":  31
                        },
                        {
                            "text":  "steal/$1 million",
                            "points":  10
                        },
                        {
                            "text":  "rude/lose temper",
                            "points":  7
                        },
                        {
                            "text":  "lie",
                            "points":  5
                        },
                        {
                            "text":  "fart/in lunchroom",
                            "points":  4
                        },
                        {
                            "text":  "bail early",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150448,
        "question":  "Name something the cheapest guy in the world doesn't have in his house.",
        "answers":  [
                        {
                            "text":  "2-ply t.p./tissue",
                            "points":  19
                        },
                        {
                            "text":  "tv/cable",
                            "points":  19
                        },
                        {
                            "text":  "furniture/bed",
                            "points":  8
                        },
                        {
                            "text":  "dishwasher",
                            "points":  5
                        },
                        {
                            "text":  "food/coffee",
                            "points":  5
                        },
                        {
                            "text":  "computer/wifi",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  150449,
        "question":  "Name something you loved when you first got it, but now, not so much.",
        "answers":  [
                        {
                            "text":  "car",
                            "points":  25
                        },
                        {
                            "text":  "clothes/pumps",
                            "points":  8
                        },
                        {
                            "text":  "mate/ex",
                            "points":  7
                        },
                        {
                            "text":  "bed/furniture",
                            "points":  6
                        },
                        {
                            "text":  "house",
                            "points":  5
                        },
                        {
                            "text":  "cell phone",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150450,
        "question":  "Name an occupation that few people have the courage to do.",
        "answers":  [
                        {
                            "text":  "firefighter",
                            "points":  16
                        },
                        {
                            "text":  "cop",
                            "points":  9
                        },
                        {
                            "text":  "military",
                            "points":  9
                        },
                        {
                            "text":  "circus act/lion tamer",
                            "points":  7
                        },
                        {
                            "text":  "window washer",
                            "points":  6
                        },
                        {
                            "text":  "morgue/mortician",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  150451,
        "question":  "Name something a guy does to get in good with his girlfriend's dog.",
        "answers":  [
                        {
                            "text":  "feed it/bone",
                            "points":  78
                        },
                        {
                            "text":  "pet/rub belly",
                            "points":  8
                        },
                        {
                            "text":  "take on walks",
                            "points":  6
                        },
                        {
                            "text":  "buy toy/play fetch",
                            "points":  6
                        },
                        {
                            "text":  "let dog hump him",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150452,
        "question":  "Name a place where you love being naked.",
        "answers":  [
                        {
                            "text":  "shower/bathroom",
                            "points":  61
                        },
                        {
                            "text":  "bed",
                            "points":  29
                        },
                        {
                            "text":  "pool/at ymca",
                            "points":  4
                        },
                        {
                            "text":  "hot tub",
                            "points":  3
                        },
                        {
                            "text":  "beach",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150453,
        "question":  "In hell, name something the surgeons don't do before they operate on you.",
        "answers":  [
                        {
                            "text":  "give anesthesia",
                            "points":  51
                        },
                        {
                            "text":  "wash their hands",
                            "points":  40
                        },
                        {
                            "text":  "pray",
                            "points":  4
                        },
                        {
                            "text":  "sterilize equipment",
                            "points":  3
                        },
                        {
                            "text":  "train/med school",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150454,
        "question":  "Name something a person needs to be a good game show host.",
        "answers":  [
                        {
                            "text":  "charisma/humor",
                            "points":  83
                        },
                        {
                            "text":  "buttery voice",
                            "points":  6
                        },
                        {
                            "text":  "cute face/smile",
                            "points":  4
                        },
                        {
                            "text":  "patience",
                            "points":  4
                        },
                        {
                            "text":  "smarts/180 i.q.",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150455,
        "question":  "Name someone who has touched your bare bottom.",
        "answers":  [
                        {
                            "text":  "my sweetie",
                            "points":  68
                        },
                        {
                            "text":  "overbearing mom",
                            "points":  20
                        },
                        {
                            "text":  "doc/nurse",
                            "points":  7
                        },
                        {
                            "text":  "buddy/1 drunken nite",
                            "points":  2
                        },
                        {
                            "text":  "my ex",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150456,
        "question":  "Name a part of your lover's body that's always cold.",
        "answers":  [
                        {
                            "text":  "feet/toes",
                            "points":  68
                        },
                        {
                            "text":  "hands/fingers",
                            "points":  14
                        },
                        {
                            "text":  "nose",
                            "points":  11
                        },
                        {
                            "text":  "ears",
                            "points":  3
                        },
                        {
                            "text":  "their evil heart",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150457,
        "question":  "We surveyed 100 married women... Fill in the blank: Some days, I'm tempted to ______ my husband.",
        "answers":  [
                        {
                            "text":  "smack/deck",
                            "points":  44
                        },
                        {
                            "text":  "leave/divorce",
                            "points":  35
                        },
                        {
                            "text":  "strangle/kill",
                            "points":  9
                        },
                        {
                            "text":  "kiss",
                            "points":  7
                        },
                        {
                            "text":  "caress/cuddle",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150458,
        "question":  "Name something you'd have to be really unlucky to be struck by.",
        "answers":  [
                        {
                            "text":  "lightning",
                            "points":  86
                        },
                        {
                            "text":  "car/truck",
                            "points":  4
                        },
                        {
                            "text":  "airplane",
                            "points":  4
                        },
                        {
                            "text":  "meteor",
                            "points":  2
                        },
                        {
                            "text":  "train",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150459,
        "question":  "Name something that might be at the top of a pole.",
        "answers":  [
                        {
                            "text":  "flag",
                            "points":  78
                        },
                        {
                            "text":  "eagle/bird",
                            "points":  7
                        },
                        {
                            "text":  "light",
                            "points":  5
                        },
                        {
                            "text":  "ball/decorative",
                            "points":  4
                        },
                        {
                            "text":  "stripper/dancer",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150460,
        "question":  "We asked 100 married men... Your wife would kill you if you came home from work with what?",
        "answers":  [
                        {
                            "text":  "a hoochie",
                            "points":  63
                        },
                        {
                            "text":  "lipstick stain",
                            "points":  17
                        },
                        {
                            "text":  "a new car",
                            "points":  9
                        },
                        {
                            "text":  "std/all of them",
                            "points":  6
                        },
                        {
                            "text":  "a hickey",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150461,
        "question":  "We asked 100 married men... If your wife ever decided to kill you, how do you think she'd do it?",
        "answers":  [
                        {
                            "text":  "poison me",
                            "points":  59
                        },
                        {
                            "text":  "shoot me",
                            "points":  23
                        },
                        {
                            "text":  "talk me to death",
                            "points":  8
                        },
                        {
                            "text":  "stab me",
                            "points":  6
                        },
                        {
                            "text":  "her cooking",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150462,
        "question":  "Name something a cheating husband has to buy two of on Valentine's Day.",
        "answers":  [
                        {
                            "text":  "flowers/bouquets",
                            "points":  52
                        },
                        {
                            "text":  "boxes of candy",
                            "points":  21
                        },
                        {
                            "text":  "greeting cards",
                            "points":  20
                        },
                        {
                            "text":  "jewelry",
                            "points":  3
                        },
                        {
                            "text":  "dinners",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150463,
        "question":  "Name a service someone performs on you while you're sitting down.",
        "answers":  [
                        {
                            "text":  "haircut/style",
                            "points":  49
                        },
                        {
                            "text":  "dental/medical",
                            "points":  21
                        },
                        {
                            "text":  "mani/pedi",
                            "points":  20
                        },
                        {
                            "text":  "massage",
                            "points":  5
                        },
                        {
                            "text":  "shoeshine",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150464,
        "question":  "We asked 100 single men... If your girlfriend were a mermaid, name a good place to take her on a date.",
        "answers":  [
                        {
                            "text":  "beach/body of water",
                            "points":  43
                        },
                        {
                            "text":  "sea world/aquarium",
                            "points":  24
                        },
                        {
                            "text":  "red lobster/eatery",
                            "points":  16
                        },
                        {
                            "text":  "pool",
                            "points":  13
                        },
                        {
                            "text":  "home/my water bed",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150465,
        "question":  "If you spied the Easter Bunny delivering Easter eggs, you'd hate to see him pulling the eggs out from where?",
        "answers":  [
                        {
                            "text":  "his dump trumpet",
                            "points":  76
                        },
                        {
                            "text":  "an angry chicken",
                            "points":  7
                        },
                        {
                            "text":  "his pants/pocket",
                            "points":  6
                        },
                        {
                            "text":  "the trash",
                            "points":  4
                        },
                        {
                            "text":  "his mouth",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150466,
        "question":  "What expensive thing might you buy that would make your boss think she is paying you too much?",
        "answers":  [
                        {
                            "text":  "new car/tesla",
                            "points":  70
                        },
                        {
                            "text":  "designer purse",
                            "points":  15
                        },
                        {
                            "text":  "jewelry/watch",
                            "points":  8
                        },
                        {
                            "text":  "lunch/mcdonald's",
                            "points":  2
                        },
                        {
                            "text":  "motorcycle",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150467,
        "question":  "Name something a man does on a date if he's an old-fashioned guy.",
        "answers":  [
                        {
                            "text":  "opens doors",
                            "points":  64
                        },
                        {
                            "text":  "pays",
                            "points":  17
                        },
                        {
                            "text":  "pulls out chair",
                            "points":  7
                        },
                        {
                            "text":  "buys flowers",
                            "points":  6
                        },
                        {
                            "text":  "g'night kiss/cheek",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150468,
        "question":  "It's good to take the day off work. It's bad if it's because you have to go where?",
        "answers":  [
                        {
                            "text":  "doc/dentist",
                            "points":  62
                        },
                        {
                            "text":  "court/jury duty",
                            "points":  24
                        },
                        {
                            "text":  "the dmv",
                            "points":  4
                        },
                        {
                            "text":  "a funeral",
                            "points":  4
                        },
                        {
                            "text":  "jail...again",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150469,
        "question":  "We asked 100 women... Name the go-to part of your body you use for flirting.",
        "answers":  [
                        {
                            "text":  "eyes",
                            "points":  60
                        },
                        {
                            "text":  "titillating ta-tas",
                            "points":  21
                        },
                        {
                            "text":  "mouth/smile",
                            "points":  8
                        },
                        {
                            "text":  "onion booty",
                            "points":  5
                        },
                        {
                            "text":  "hair",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150470,
        "question":  "Name something about a man's underpants that's different from a woman's panties.",
        "answers":  [
                        {
                            "text":  "winky flap/pouch",
                            "points":  58
                        },
                        {
                            "text":  "bigger/boxers",
                            "points":  22
                        },
                        {
                            "text":  "dirty",
                            "points":  11
                        },
                        {
                            "text":  "fabric/lace",
                            "points":  3
                        },
                        {
                            "text":  "what's inside",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150471,
        "question":  "We asked 100 single men... Name something married men have that as far as you're concerned, they can keep it.",
        "answers":  [
                        {
                            "text":  "battleaxe mate",
                            "points":  49
                        },
                        {
                            "text":  "vile rugrats",
                            "points":  21
                        },
                        {
                            "text":  "ring",
                            "points":  12
                        },
                        {
                            "text":  "debt",
                            "points":  11
                        },
                        {
                            "text":  "a dad bod",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150472,
        "question":  "We asked 100 women... What would you do if a man still hadn't kissed you by the third date?",
        "answers":  [
                        {
                            "text":  "why?/dig dudes?",
                            "points":  47
                        },
                        {
                            "text":  "lay one on him",
                            "points":  28
                        },
                        {
                            "text":  "nothing/be glad",
                            "points":  10
                        },
                        {
                            "text":  "dump him",
                            "points":  9
                        },
                        {
                            "text":  "buy mouthwash",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150473,
        "question":  "Name something both Tarzan and King Kong like to do.",
        "answers":  [
                        {
                            "text":  "beat chest & yell",
                            "points":  46
                        },
                        {
                            "text":  "swing around",
                            "points":  36
                        },
                        {
                            "text":  "climb",
                            "points":  10
                        },
                        {
                            "text":  "live in jungle",
                            "points":  3
                        },
                        {
                            "text":  "grab hot babes",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150474,
        "question":  "We asked 100 women... Admit it -- you'd love to plant a big, wet kiss on Steve Harvey's what?",
        "answers":  [
                        {
                            "text":  "slick bald head",
                            "points":  42
                        },
                        {
                            "text":  "dimpled cheek",
                            "points":  35
                        },
                        {
                            "text":  "scrumptious lips",
                            "points":  11
                        },
                        {
                            "text":  "overflowing wallet",
                            "points":  6
                        },
                        {
                            "text":  "thick stache",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150475,
        "question":  "We asked 100 married men... Bad news -- you just died. Worse news -- your wife is doing what?",
        "answers":  [
                        {
                            "text":  "happy dance/party",
                            "points":  39
                        },
                        {
                            "text":  "dating/my bud",
                            "points":  26
                        },
                        {
                            "text":  "spend'g/insurance $",
                            "points":  15
                        },
                        {
                            "text":  "crying",
                            "points":  9
                        },
                        {
                            "text":  "selling my stuff",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  150476,
        "question":  "Fill in the blank: That earthquake was so strong, it shook grandpa's ______ right off.",
        "answers":  [
                        {
                            "text":  "3 teeth/dentures",
                            "points":  34
                        },
                        {
                            "text":  "specs",
                            "points":  23
                        },
                        {
                            "text":  "hat/clothes",
                            "points":  18
                        },
                        {
                            "text":  "toupee",
                            "points":  17
                        },
                        {
                            "text":  "hearing aid",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  150477,
        "question":  "Fill in the blank: When the magician's wife caught him cheating, she pulled a ______ out of her hat.",
        "answers":  [
                        {
                            "text":  "gun/weapon",
                            "points":  67
                        },
                        {
                            "text":  "divorce/lawyer",
                            "points":  23
                        },
                        {
                            "text":  "condom",
                            "points":  2
                        },
                        {
                            "text":  "bra of his tramp's",
                            "points":  2
                        },
                        {
                            "text":  "pic of him cheat'g",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150478,
        "question":  "Name something about Mickey Mouse that's different from a mouse you'd find in your house.",
        "answers":  [
                        {
                            "text":  "talks",
                            "points":  60
                        },
                        {
                            "text":  "wears clothes",
                            "points":  21
                        },
                        {
                            "text":  "cartoon/not real",
                            "points":  7
                        },
                        {
                            "text":  "fun/not scary",
                            "points":  5
                        },
                        {
                            "text":  "walks on 2 legs",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150479,
        "question":  "Name an S word that a woman loves to hear her man call her.",
        "answers":  [
                        {
                            "text":  "sweet/heart",
                            "points":  51
                        },
                        {
                            "text":  "sexy",
                            "points":  39
                        },
                        {
                            "text":  "stunning",
                            "points":  2
                        },
                        {
                            "text":  "smart",
                            "points":  2
                        },
                        {
                            "text":  "sunshine",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150480,
        "question":  "We asked 100 married men... Name something you can criticize about your friends but not your wife.",
        "answers":  [
                        {
                            "text":  "weight/body",
                            "points":  42
                        },
                        {
                            "text":  "cooking skills",
                            "points":  27
                        },
                        {
                            "text":  "creepy face",
                            "points":  12
                        },
                        {
                            "text":  "clothes",
                            "points":  11
                        },
                        {
                            "text":  "politics",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150481,
        "question":  "We asked 100 married women... Name something you'd like to give your husband when he acts like a child.",
        "answers":  [
                        {
                            "text":  "spanking/slap",
                            "points":  40
                        },
                        {
                            "text":  "time out",
                            "points":  26
                        },
                        {
                            "text":  "pacifier/binky",
                            "points":  20
                        },
                        {
                            "text":  "bottle",
                            "points":  5
                        },
                        {
                            "text":  "food/lollipop",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  150482,
        "question":  "Name something that gets dumped.",
        "answers":  [
                        {
                            "text":  "trash",
                            "points":  59
                        },
                        {
                            "text":  "mate/me",
                            "points":  30
                        },
                        {
                            "text":  "food/leftovers",
                            "points":  2
                        },
                        {
                            "text":  "poop",
                            "points":  2
                        },
                        {
                            "text":  "car/truck",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150483,
        "question":  "Name a reason a man might like to be Kim Kardashian's baby.",
        "answers":  [
                        {
                            "text":  "rich/spoiled",
                            "points":  47
                        },
                        {
                            "text":  "meal time! :-)",
                            "points":  41
                        },
                        {
                            "text":  "the cuddles",
                            "points":  3
                        },
                        {
                            "text":  "loving/nurturing",
                            "points":  2
                        },
                        {
                            "text":  "see her booty",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150484,
        "question":  "Name something that might come off of grandma if grandpa kisses her too hard.",
        "answers":  [
                        {
                            "text":  "teeth/dentures",
                            "points":  47
                        },
                        {
                            "text":  "lipstick/makeup",
                            "points":  25
                        },
                        {
                            "text":  "wig/hair",
                            "points":  11
                        },
                        {
                            "text":  "glasses",
                            "points":  9
                        },
                        {
                            "text":  "clothes/panties",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150485,
        "question":  "We asked 100 women... What would you do if your date said, \"The sexiest woman I know is my mother\"?",
        "answers":  [
                        {
                            "text":  "run/buh-bye!",
                            "points":  83
                        },
                        {
                            "text":  "smile politely",
                            "points":  4
                        },
                        {
                            "text":  "worry/rethink date",
                            "points":  3
                        },
                        {
                            "text":  "give a weird look",
                            "points":  2
                        },
                        {
                            "text":  "ask his mom out",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150486,
        "question":  "Name something two hospital patients in the same room might fight over.",
        "answers":  [
                        {
                            "text":  "tv/remote",
                            "points":  77
                        },
                        {
                            "text":  "nurse's attention",
                            "points":  6
                        },
                        {
                            "text":  "light/shades open",
                            "points":  4
                        },
                        {
                            "text":  "the beds",
                            "points":  3
                        },
                        {
                            "text":  "thermostat",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150487,
        "question":  "If Mrs. Dracula was mad at her husband, she might do what to his coffin while he was in it?",
        "answers":  [
                        {
                            "text":  "seal shut/lock",
                            "points":  69
                        },
                        {
                            "text":  "burn it",
                            "points":  12
                        },
                        {
                            "text":  "fill it w/ garlic",
                            "points":  6
                        },
                        {
                            "text":  "drill holes in it",
                            "points":  3
                        },
                        {
                            "text":  "drive stakes into it",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150488,
        "question":  "Name something you see on the ground that tells you a snowman was here.",
        "answers":  [
                        {
                            "text":  "carrot nose",
                            "points":  49
                        },
                        {
                            "text":  "melted snow/water",
                            "points":  29
                        },
                        {
                            "text":  "hat/scarf",
                            "points":  6
                        },
                        {
                            "text":  "coal eyes",
                            "points":  6
                        },
                        {
                            "text":  "footprints/tracks",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150489,
        "question":  "Name something about his wife a man learns the hard way to never make fun of.",
        "answers":  [
                        {
                            "text":  "bod/muffin top",
                            "points":  79
                        },
                        {
                            "text":  "cooking/meat loaf",
                            "points":  5
                        },
                        {
                            "text":  "horrible hair",
                            "points":  4
                        },
                        {
                            "text":  "mood/meltdown",
                            "points":  2
                        },
                        {
                            "text":  "clothes/plaid skirt",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150490,
        "question":  "Name a place a woman goes with a plan to land a man.",
        "answers":  [
                        {
                            "text":  "bar/nightclub",
                            "points":  78
                        },
                        {
                            "text":  "church",
                            "points":  7
                        },
                        {
                            "text":  "school",
                            "points":  3
                        },
                        {
                            "text":  "wedding",
                            "points":  2
                        },
                        {
                            "text":  "gym",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150491,
        "question":  "Name a kind of music you'd be surprised to hear the church organist playing on Sunday.",
        "answers":  [
                        {
                            "text":  "rap/hip-hop",
                            "points":  45
                        },
                        {
                            "text":  "rock & roll",
                            "points":  33
                        },
                        {
                            "text":  "country",
                            "points":  6
                        },
                        {
                            "text":  "jazz",
                            "points":  6
                        },
                        {
                            "text":  "pop/britney",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150492,
        "question":  "Name something you'd be surprised to find in the trunk of your rental car.",
        "answers":  [
                        {
                            "text":  "person/body",
                            "points":  66
                        },
                        {
                            "text":  "money",
                            "points":  12
                        },
                        {
                            "text":  "gun/weapon",
                            "points":  5
                        },
                        {
                            "text":  "dirty shovel",
                            "points":  4
                        },
                        {
                            "text":  "luggage",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150493,
        "question":  "Name something you'd make sure you had lots of at your \"end of the world\" party.",
        "answers":  [
                        {
                            "text":  "booze/boxed wine",
                            "points":  55
                        },
                        {
                            "text":  "food/dessert",
                            "points":  15
                        },
                        {
                            "text":  "guests/family",
                            "points":  14
                        },
                        {
                            "text":  "drugs",
                            "points":  4
                        },
                        {
                            "text":  "bibles/religion",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150494,
        "question":  "Cheese pairs well with fine wine. What food pairs well with fine marijuana?",
        "answers":  [
                        {
                            "text":  "chips/cheetos",
                            "points":  47
                        },
                        {
                            "text":  "pizza",
                            "points":  25
                        },
                        {
                            "text":  "brownies",
                            "points":  12
                        },
                        {
                            "text":  "twinkies/cake",
                            "points":  4
                        },
                        {
                            "text":  "tacos",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150495,
        "question":  "We asked 100 single men... I wouldn't want to date a woman who has a lot of what?",
        "answers":  [
                        {
                            "text":  "baggage/drama",
                            "points":  41
                        },
                        {
                            "text":  "children",
                            "points":  33
                        },
                        {
                            "text":  "debt",
                            "points":  11
                        },
                        {
                            "text":  "hair/on her chest",
                            "points":  4
                        },
                        {
                            "text":  "cats/pets",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150496,
        "question":  "Larry is so dumb that he didn't know the bag of weed he bought was really what?",
        "answers":  [
                        {
                            "text":  "grass/lawn weeds",
                            "points":  41
                        },
                        {
                            "text":  "oregano",
                            "points":  31
                        },
                        {
                            "text":  "basil",
                            "points":  13
                        },
                        {
                            "text":  "parsley",
                            "points":  4
                        },
                        {
                            "text":  "empty",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150497,
        "question":  "If a man calls his wife \"mother,\" name something he probably wants her to do for him.",
        "answers":  [
                        {
                            "text":  "cook/cut his food",
                            "points":  62
                        },
                        {
                            "text":  "laundry/clean",
                            "points":  19
                        },
                        {
                            "text":  "have babies",
                            "points":  3
                        },
                        {
                            "text":  "spank/scold him",
                            "points":  3
                        },
                        {
                            "text":  "wipe butt/diaper him",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150498,
        "question":  "At a bad restaurant, you find a hair in your food. At a really bad restaurant, you find what in your food?",
        "answers":  [
                        {
                            "text":  "roach/bug",
                            "points":  44
                        },
                        {
                            "text":  "head/body part",
                            "points":  23
                        },
                        {
                            "text":  "mouse/rat",
                            "points":  11
                        },
                        {
                            "text":  "ponytail/wig",
                            "points":  8
                        },
                        {
                            "text":  "turd",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150499,
        "question":  "Name a place women get into fights.",
        "answers":  [
                        {
                            "text":  "bar/nightclub",
                            "points":  65
                        },
                        {
                            "text":  "store/on black fri.",
                            "points":  13
                        },
                        {
                            "text":  "bathroom",
                            "points":  5
                        },
                        {
                            "text":  "work",
                            "points":  3
                        },
                        {
                            "text":  "roller derby",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150500,
        "question":  "When someone says their dog will eat anything, that includes what?",
        "answers":  [
                        {
                            "text":  "feces pieces/poop",
                            "points":  47
                        },
                        {
                            "text":  "shoes/clothes",
                            "points":  20
                        },
                        {
                            "text":  "wife's cooking",
                            "points":  13
                        },
                        {
                            "text":  "homework/paper",
                            "points":  5
                        },
                        {
                            "text":  "cat/animal",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150501,
        "question":  "If you know what's good for you, name a food you should never fry in the nude.",
        "answers":  [
                        {
                            "text":  "bacon",
                            "points":  33
                        },
                        {
                            "text":  "chicken",
                            "points":  24
                        },
                        {
                            "text":  "fries/taters",
                            "points":  24
                        },
                        {
                            "text":  "eggs",
                            "points":  4
                        },
                        {
                            "text":  "turkey",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150502,
        "question":  "Fill in the blank: Admit it -- you might love your ______ more than you do your family.",
        "answers":  [
                        {
                            "text":  "dog/pet",
                            "points":  60
                        },
                        {
                            "text":  "car/truck",
                            "points":  11
                        },
                        {
                            "text":  "yourself",
                            "points":  8
                        },
                        {
                            "text":  "job",
                            "points":  4
                        },
                        {
                            "text":  "friends",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150503,
        "question":  "Name something grandma might pull out of her cleavage and hand to grandpa.",
        "answers":  [
                        {
                            "text":  "tissue/hanky",
                            "points":  40
                        },
                        {
                            "text":  "moist money",
                            "points":  37
                        },
                        {
                            "text":  "dentures",
                            "points":  6
                        },
                        {
                            "text":  "melted candy",
                            "points":  2
                        },
                        {
                            "text":  "phone",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150504,
        "question":  "Name something you do in your underwear.",
        "answers":  [
                        {
                            "text":  "sleep",
                            "points":  48
                        },
                        {
                            "text":  "watch tv/lounge",
                            "points":  14
                        },
                        {
                            "text":  "dance",
                            "points":  11
                        },
                        {
                            "text":  "groom/makeup",
                            "points":  9
                        },
                        {
                            "text":  "clean",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150505,
        "question":  "Fill in the blank: Most men are clueless as to why women like to ______ so much.",
        "answers":  [
                        {
                            "text":  "talk/argue",
                            "points":  43
                        },
                        {
                            "text":  "shop/spend",
                            "points":  33
                        },
                        {
                            "text":  "sleep",
                            "points":  4
                        },
                        {
                            "text":  "put on makeup",
                            "points":  3
                        },
                        {
                            "text":  "cuddle",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150506,
        "question":  "Name something that gets lit.",
        "answers":  [
                        {
                            "text":  "candle",
                            "points":  40
                        },
                        {
                            "text":  "people/\"me nightly\"",
                            "points":  17
                        },
                        {
                            "text":  "cigarette",
                            "points":  13
                        },
                        {
                            "text":  "match",
                            "points":  9
                        },
                        {
                            "text":  "lights",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  150507,
        "question":  "What's the most illegal thing that you or a friend of yours has ever done?",
        "answers":  [
                        {
                            "text":  "drugs/dealer",
                            "points":  30
                        },
                        {
                            "text":  "steal/rob neighbor",
                            "points":  27
                        },
                        {
                            "text":  "drink/dui",
                            "points":  16
                        },
                        {
                            "text":  "speed",
                            "points":  9
                        },
                        {
                            "text":  "break windows",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150508,
        "question":  "Linda's jeans were so tight that her boyfriend had to use what to get them off?",
        "answers":  [
                        {
                            "text":  "scissors/clippers",
                            "points":  40
                        },
                        {
                            "text":  "lube/butter",
                            "points":  24
                        },
                        {
                            "text":  "knife/razor",
                            "points":  10
                        },
                        {
                            "text":  "crowbar",
                            "points":  6
                        },
                        {
                            "text":  "pliers",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150509,
        "question":  "Jasmine said, \"Yes, I'm a stripper, but I tell people I'm a\" what?",
        "answers":  [
                        {
                            "text":  "dancer",
                            "points":  62
                        },
                        {
                            "text":  "waitress",
                            "points":  8
                        },
                        {
                            "text":  "model",
                            "points":  6
                        },
                        {
                            "text":  "nurse",
                            "points":  3
                        },
                        {
                            "text":  "student",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150510,
        "question":  "Fill in the blank: A woman might say, \"The best thing about my ex is ______.\"",
        "answers":  [
                        {
                            "text":  "he's gone/my ex",
                            "points":  51
                        },
                        {
                            "text":  "$$$/alimony",
                            "points":  11
                        },
                        {
                            "text":  "nothing",
                            "points":  8
                        },
                        {
                            "text":  "dead & rotting",
                            "points":  6
                        },
                        {
                            "text":  "sex/his weenosaurus",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  150511,
        "question":  "Name an animal who could use a nose job.",
        "answers":  [
                        {
                            "text":  "anteater/aardvark",
                            "points":  36
                        },
                        {
                            "text":  "elephant",
                            "points":  14
                        },
                        {
                            "text":  "pig",
                            "points":  13
                        },
                        {
                            "text":  "dog/pug",
                            "points":  13
                        },
                        {
                            "text":  "bird/toucan",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  150512,
        "question":  "Name an article of women's clothing it would take a man a long time to get in and out of.",
        "answers":  [
                        {
                            "text":  "bra",
                            "points":  38
                        },
                        {
                            "text":  "hose/nylons/tights",
                            "points":  20
                        },
                        {
                            "text":  "corset/spanx",
                            "points":  12
                        },
                        {
                            "text":  "dress/ball gown",
                            "points":  6
                        },
                        {
                            "text":  "leggings/yoga pants",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  150513,
        "question":  "Name a food that's good to eat on bread and on your lover.",
        "answers":  [
                        {
                            "text":  "peanut butter",
                            "points":  26
                        },
                        {
                            "text":  "jelly",
                            "points":  23
                        },
                        {
                            "text":  "honey",
                            "points":  19
                        },
                        {
                            "text":  "butter",
                            "points":  7
                        },
                        {
                            "text":  "cheese/cream cheese",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  150514,
        "question":  "We asked 100 women... Name something you don't want a man to do for you; you'd rather do it yourself.",
        "answers":  [
                        {
                            "text":  "shop/pick clothes",
                            "points":  24
                        },
                        {
                            "text":  "clean/laundry",
                            "points":  16
                        },
                        {
                            "text":  "open doors",
                            "points":  14
                        },
                        {
                            "text":  "shave/my legs",
                            "points":  14
                        },
                        {
                            "text":  "drive",
                            "points":  13
                        }
                    ]
    },
    {
        "id":  150515,
        "question":  "Name a place you have to go that always puts you in a bad mood.",
        "answers":  [
                        {
                            "text":  "dentist/doc/er",
                            "points":  32
                        },
                        {
                            "text":  "work/boss' office",
                            "points":  16
                        },
                        {
                            "text":  "store/mall",
                            "points":  13
                        },
                        {
                            "text":  "dmv",
                            "points":  12
                        },
                        {
                            "text":  "in-laws'",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  150516,
        "question":  "Name something Mrs. Claus might hit an elf with if he tried to pinch her bottom.",
        "answers":  [
                        {
                            "text":  "candy cane/food",
                            "points":  35
                        },
                        {
                            "text":  "santa's sack/toy",
                            "points":  24
                        },
                        {
                            "text":  "rolling pin",
                            "points":  8
                        },
                        {
                            "text":  "broom",
                            "points":  6
                        },
                        {
                            "text":  "spoon",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150517,
        "question":  "Fill in the blank: Pop a ______.",
        "answers":  [
                        {
                            "text":  "balloon",
                            "points":  20
                        },
                        {
                            "text":  "pill",
                            "points":  19
                        },
                        {
                            "text":  "pimple/zit",
                            "points":  16
                        },
                        {
                            "text":  "cap/in your arse",
                            "points":  15
                        },
                        {
                            "text":  "top",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  150518,
        "question":  "Name something people say was great while it lasted.",
        "answers":  [
                        {
                            "text":  "rela'ship/romance",
                            "points":  26
                        },
                        {
                            "text":  "sex/all 30 seconds",
                            "points":  21
                        },
                        {
                            "text":  "vacay/summer",
                            "points":  18
                        },
                        {
                            "text":  "a meal/food",
                            "points":  6
                        },
                        {
                            "text":  "winning",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  150519,
        "question":  "In a supermodel's dream, she's eating what?",
        "answers":  [
                        {
                            "text":  "ice cream/sundae",
                            "points":  20
                        },
                        {
                            "text":  "cake",
                            "points":  17
                        },
                        {
                            "text":  "pizza",
                            "points":  16
                        },
                        {
                            "text":  "fruits & veggies",
                            "points":  14
                        },
                        {
                            "text":  "burger/a triple",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  150520,
        "question":  "You'd be surprised if your grandparents said, \"Last week, we made love on\" what?",
        "answers":  [
                        {
                            "text":  "the beach",
                            "points":  24
                        },
                        {
                            "text":  "kitchen table",
                            "points":  24
                        },
                        {
                            "text":  "the couch",
                            "points":  15
                        },
                        {
                            "text":  "the floor",
                            "points":  8
                        },
                        {
                            "text":  "bed/yours!",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150521,
        "question":  "Someday I hope to be what?",
        "answers":  [
                        {
                            "text":  "oprah rich",
                            "points":  48
                        },
                        {
                            "text":  "retired",
                            "points":  11
                        },
                        {
                            "text":  "famous",
                            "points":  5
                        },
                        {
                            "text":  "content/happy",
                            "points":  5
                        },
                        {
                            "text":  "thin/under 600 lbs",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  150522,
        "question":  "Name a place you wouldn't want to be seen with toilet paper stuck to your shoe.",
        "answers":  [
                        {
                            "text":  "work/interview",
                            "points":  42
                        },
                        {
                            "text":  "church",
                            "points":  11
                        },
                        {
                            "text":  "any-darn-where!",
                            "points":  9
                        },
                        {
                            "text":  "restaurant",
                            "points":  7
                        },
                        {
                            "text":  "bar/nightclub",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  150523,
        "question":  "Losing weight is good. Losing what is bad?",
        "answers":  [
                        {
                            "text":  "your hair",
                            "points":  28
                        },
                        {
                            "text":  "money/wallet",
                            "points":  24
                        },
                        {
                            "text":  "your mind",
                            "points":  8
                        },
                        {
                            "text":  "your keys",
                            "points":  7
                        },
                        {
                            "text":  "your teeth",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  150524,
        "question":  "To boost her ratings, Judge Judy stopped wearing a robe and started wearing what?",
        "answers":  [
                        {
                            "text":  "bikini",
                            "points":  28
                        },
                        {
                            "text":  "dress/miniskirt",
                            "points":  18
                        },
                        {
                            "text":  "lingerie/thong",
                            "points":  14
                        },
                        {
                            "text":  "revealing/crop top",
                            "points":  6
                        },
                        {
                            "text":  "nothin'/topless",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  150525,
        "question":  "Name something a dog trainer might say to her dog and to her man in bed.",
        "answers":  [
                        {
                            "text":  "down/lie down",
                            "points":  23
                        },
                        {
                            "text":  "sit",
                            "points":  14
                        },
                        {
                            "text":  "stay",
                            "points":  12
                        },
                        {
                            "text":  "roll over",
                            "points":  11
                        },
                        {
                            "text":  "good boy",
                            "points":  10
                        }
                    ]
    },
    {
        "id":  150526,
        "question":  "Name something you don't like if it's too long.",
        "answers":  [
                        {
                            "text":  "a movie",
                            "points":  33
                        },
                        {
                            "text":  "a line",
                            "points":  15
                        },
                        {
                            "text":  "car ride/traffic",
                            "points":  9
                        },
                        {
                            "text":  "hair",
                            "points":  6
                        },
                        {
                            "text":  "church/sermon",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  150527,
        "question":  "It's bad if a burglar breaks into your house. It's worse if he uses your what?",
        "answers":  [
                        {
                            "text":  "toilet/& clogs it",
                            "points":  27
                        },
                        {
                            "text":  "toothbrush",
                            "points":  17
                        },
                        {
                            "text":  "key/front door",
                            "points":  14
                        },
                        {
                            "text":  "bed",
                            "points":  5
                        },
                        {
                            "text":  "shower/tub",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  150528,
        "question":  "Name someone that you'd be shocked just gave you a big, sloppy, wet kiss.",
        "answers":  [
                        {
                            "text":  "relative/in-law",
                            "points":  25
                        },
                        {
                            "text":  "celeb/brad pitt",
                            "points":  17
                        },
                        {
                            "text":  "pet/animal",
                            "points":  10
                        },
                        {
                            "text":  "clergy",
                            "points":  8
                        },
                        {
                            "text":  "my boss",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  150529,
        "question":  "You'd be shocked if you turned on \"Family Feud\" and Steve Harvey was wearing what?",
        "answers":  [
                        {
                            "text":  "his birthday suit",
                            "points":  17
                        },
                        {
                            "text":  "speedo/swimsuit",
                            "points":  15
                        },
                        {
                            "text":  "dress/tutu",
                            "points":  13
                        },
                        {
                            "text":  "booty shorts",
                            "points":  11
                        },
                        {
                            "text":  "toupee/blond wig",
                            "points":  10
                        }
                    ]
    },
    {
        "id":  150530,
        "question":  "Name an animal that would look ridiculous in a tutu.",
        "answers":  [
                        {
                            "text":  "elephant",
                            "points":  28
                        },
                        {
                            "text":  "giraffe",
                            "points":  12
                        },
                        {
                            "text":  "hippo",
                            "points":  11
                        },
                        {
                            "text":  "bear",
                            "points":  9
                        },
                        {
                            "text":  "dog",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  150531,
        "question":  "Instead of a suit, what might a wife have her dead, cheating husband wearing in his open casket?",
        "answers":  [
                        {
                            "text":  "his birthday suit",
                            "points":  25
                        },
                        {
                            "text":  "his tramp's dress",
                            "points":  11
                        },
                        {
                            "text":  "undies/panties",
                            "points":  10
                        },
                        {
                            "text":  "costume/pig nose",
                            "points":  9
                        },
                        {
                            "text":  "shirt/\"i cheated\"",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  150532,
        "question":  "Name a place where adults have temper tantrums.",
        "answers":  [
                        {
                            "text":  "sporting events",
                            "points":  21
                        },
                        {
                            "text":  "home/bathroom",
                            "points":  18
                        },
                        {
                            "text":  "bar/nightclub",
                            "points":  10
                        },
                        {
                            "text":  "work",
                            "points":  8
                        },
                        {
                            "text":  "store/checkout",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  150533,
        "question":  "You'd hate to discover your new car doesn't have what?",
        "answers":  [
                        {
                            "text":  "ac/heat",
                            "points":  27
                        },
                        {
                            "text":  "radio/music",
                            "points":  11
                        },
                        {
                            "text":  "tires/a spare",
                            "points":  9
                        },
                        {
                            "text":  "an engine",
                            "points":  8
                        },
                        {
                            "text":  "brakes",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  150534,
        "question":  "Name something about you that your mom can't stop herself from criticizing.",
        "answers":  [
                        {
                            "text":  "my hair",
                            "points":  23
                        },
                        {
                            "text":  "my weight/eating",
                            "points":  19
                        },
                        {
                            "text":  "my clothes",
                            "points":  8
                        },
                        {
                            "text":  "my cussing",
                            "points":  4
                        },
                        {
                            "text":  "my spouse/mate",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150535,
        "question":  "Name something you'd want to be buried with that would never fit in the urn.",
        "answers":  [
                        {
                            "text":  "car/truck",
                            "points":  26
                        },
                        {
                            "text":  "my pet/horse",
                            "points":  11
                        },
                        {
                            "text":  "tv",
                            "points":  8
                        },
                        {
                            "text":  "spouse/mate",
                            "points":  6
                        },
                        {
                            "text":  "books/comic books",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  150536,
        "question":  "Fill in the blank: Dr. ______.",
        "answers":  [
                        {
                            "text":  "dr. who",
                            "points":  19
                        },
                        {
                            "text":  "dr. feelgood",
                            "points":  13
                        },
                        {
                            "text":  "dr. phil",
                            "points":  11
                        },
                        {
                            "text":  "dr. dolittle",
                            "points":  7
                        },
                        {
                            "text":  "dr. oz",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  150537,
        "question":  "If you could eat only one thing for the rest of your life, what would it be?",
        "answers":  [
                        {
                            "text":  "pizza",
                            "points":  25
                        },
                        {
                            "text":  "steak/beef",
                            "points":  9
                        },
                        {
                            "text":  "sushi/seafood",
                            "points":  8
                        },
                        {
                            "text":  "pasta/mac & cheese",
                            "points":  7
                        },
                        {
                            "text":  "chocolate",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  150538,
        "question":  "Grandpa regrets going to the cheap dentist because he gave him dentures made from the teeth of what animal?",
        "answers":  [
                        {
                            "text":  "horse",
                            "points":  15
                        },
                        {
                            "text":  "dog",
                            "points":  15
                        },
                        {
                            "text":  "monkey/ape",
                            "points":  10
                        },
                        {
                            "text":  "cow",
                            "points":  8
                        },
                        {
                            "text":  "donkey/mule",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  150539,
        "question":  "Tell me America's coolest city.",
        "answers":  [
                        {
                            "text":  "new york",
                            "points":  24
                        },
                        {
                            "text":  "miami",
                            "points":  10
                        },
                        {
                            "text":  "las vegas",
                            "points":  8
                        },
                        {
                            "text":  "chicago",
                            "points":  6
                        },
                        {
                            "text":  "san francisco",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  150540,
        "question":  "Name something a patient might steal from a hospital.",
        "answers":  [
                        {
                            "text":  "drugs",
                            "points":  19
                        },
                        {
                            "text":  "bedding/pillow",
                            "points":  10
                        },
                        {
                            "text":  "gloves",
                            "points":  9
                        },
                        {
                            "text":  "sexy gown/robe",
                            "points":  9
                        },
                        {
                            "text":  "bandages",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  150541,
        "question":  "Name a specific part of you that's bigger after the holidays.",
        "answers":  [
                        {
                            "text":  "my belly/waistline",
                            "points":  85
                        },
                        {
                            "text":  "my butt",
                            "points":  8
                        },
                        {
                            "text":  "my thighs/legs",
                            "points":  4
                        },
                        {
                            "text":  "my joyous heart",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150542,
        "question":  "Give me a word that rhymes with \"tattle.\"",
        "answers":  [
                        {
                            "text":  "rattle",
                            "points":  65
                        },
                        {
                            "text":  "battle",
                            "points":  25
                        },
                        {
                            "text":  "cattle",
                            "points":  6
                        },
                        {
                            "text":  "prattle",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150543,
        "question":  "We asked 100 single women... Tell me a reason you might nickname your blind date \"the magician.\"",
        "answers":  [
                        {
                            "text":  "he disappeared",
                            "points":  51
                        },
                        {
                            "text":  "magic in the sack",
                            "points":  30
                        },
                        {
                            "text":  "mysterious/tricky",
                            "points":  13
                        },
                        {
                            "text":  "had magical date/time",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  150544,
        "question":  "Name something specific a squirrel might do to you if you try to touch his nuts.",
        "answers":  [
                        {
                            "text":  "bite you",
                            "points":  92
                        },
                        {
                            "text":  "scream at you",
                            "points":  3
                        },
                        {
                            "text":  "scracth you",
                            "points":  2
                        },
                        {
                            "text":  "run from you",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150545,
        "question":  "We asked 100 women... Name something you wear that no one can see but it makes you feel sexy.",
        "answers":  [
                        {
                            "text":  "lingerie/spiked bra",
                            "points":  91
                        },
                        {
                            "text":  "perfume",
                            "points":  4
                        },
                        {
                            "text":  "belly button ring",
                            "points":  2
                        },
                        {
                            "text":  "undershirt/tank",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150546,
        "question":  "Name a holiday that you might blow a whole paycheck on.",
        "answers":  [
                        {
                            "text":  "christmas",
                            "points":  90
                        },
                        {
                            "text":  "new year's",
                            "points":  4
                        },
                        {
                            "text":  "valentine's day",
                            "points":  3
                        },
                        {
                            "text":  "fourth of july",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150547,
        "question":  "Name a cheap place you'd be surprised a billionaire took a woman on a first date.",
        "answers":  [
                        {
                            "text":  "restaurant/coffee",
                            "points":  88
                        },
                        {
                            "text":  "the park",
                            "points":  5
                        },
                        {
                            "text":  "movies/drive-in",
                            "points":  4
                        },
                        {
                            "text":  "bowling alley",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150548,
        "question":  "Name a place where people walk down an aisle.",
        "answers":  [
                        {
                            "text":  "church/wedding",
                            "points":  82
                        },
                        {
                            "text":  "store",
                            "points":  11
                        },
                        {
                            "text":  "plane",
                            "points":  3
                        },
                        {
                            "text":  "theater",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150549,
        "question":  "If they don't have kids, name something over which a couple might have a custody battle.",
        "answers":  [
                        {
                            "text":  "pets",
                            "points":  77
                        },
                        {
                            "text":  "house",
                            "points":  11
                        },
                        {
                            "text":  "money/alimony",
                            "points":  6
                        },
                        {
                            "text":  "car",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  150550,
        "question":  "We asked 100 women... It irritates you when a guy takes longer to do what than you?",
        "answers":  [
                        {
                            "text":  "\"get ready\"",
                            "points":  76
                        },
                        {
                            "text":  "pee/blast dookies",
                            "points":  19
                        },
                        {
                            "text":  "eat",
                            "points":  2
                        },
                        {
                            "text":  "clean/dishes",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150551,
        "question":  "We asked 100 men... You could never be a stripper because you don't have what?",
        "answers":  [
                        {
                            "text":  "bod/stimulus pkg.",
                            "points":  76
                        },
                        {
                            "text":  "tolerable face",
                            "points":  10
                        },
                        {
                            "text":  "moves/rhythm",
                            "points":  10
                        },
                        {
                            "text":  "the nerve",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150552,
        "question":  "We asked 100 women... Name something Kim Kardashian has that you want.",
        "answers":  [
                        {
                            "text":  "wads of dough",
                            "points":  76
                        },
                        {
                            "text":  "perfect hair",
                            "points":  9
                        },
                        {
                            "text":  "giant globes",
                            "points":  7
                        },
                        {
                            "text":  "jewelry/diamonds",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  150553,
        "question":  "Name a fruit with one pit in it.",
        "answers":  [
                        {
                            "text":  "peach",
                            "points":  69
                        },
                        {
                            "text":  "cherry",
                            "points":  13
                        },
                        {
                            "text":  "plum",
                            "points":  9
                        },
                        {
                            "text":  "avocado",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  150554,
        "question":  "Besides his hands, name a part of his body a man might use to steer a car.",
        "answers":  [
                        {
                            "text":  "knee/leg",
                            "points":  58
                        },
                        {
                            "text":  "elbow/arm",
                            "points":  31
                        },
                        {
                            "text":  "feet",
                            "points":  8
                        },
                        {
                            "text":  "face/mouth",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150555,
        "question":  "We asked 100 women... Dear men: If you have man boobs, don't even think about wearing what?",
        "answers":  [
                        {
                            "text":  "tank/tight shirt",
                            "points":  57
                        },
                        {
                            "text":  "no shirt/just speedo",
                            "points":  20
                        },
                        {
                            "text":  "bra",
                            "points":  19
                        },
                        {
                            "text":  "thin/white shirt",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150556,
        "question":  "Name something that shakes when an elephant walks.",
        "answers":  [
                        {
                            "text":  "ground/earth",
                            "points":  50
                        },
                        {
                            "text":  "his body/trunk",
                            "points":  40
                        },
                        {
                            "text":  "floor/house",
                            "points":  5
                        },
                        {
                            "text":  "trees",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150557,
        "question":  "Name something you couldn't do if you were allergic to water.",
        "answers":  [
                        {
                            "text":  "swim/surf",
                            "points":  43
                        },
                        {
                            "text":  "bathe/shower",
                            "points":  32
                        },
                        {
                            "text":  "drink it",
                            "points":  15
                        },
                        {
                            "text":  "live/exist",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  150558,
        "question":  "Name something a woman might buy a new pair of before starting a new job.",
        "answers":  [
                        {
                            "text":  "shoes",
                            "points":  87
                        },
                        {
                            "text":  "earrings",
                            "points":  5
                        },
                        {
                            "text":  "pants/jeans",
                            "points":  4
                        },
                        {
                            "text":  "hose/stockings",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150559,
        "question":  "Name a type of opener.",
        "answers":  [
                        {
                            "text":  "can opener",
                            "points":  83
                        },
                        {
                            "text":  "bottle opener",
                            "points":  9
                        },
                        {
                            "text":  "garage door opener",
                            "points":  4
                        },
                        {
                            "text":  "letter opener",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150560,
        "question":  "When the grandchildren want treats, they know to look in nana's what?",
        "answers":  [
                        {
                            "text":  "house/cookie jar",
                            "points":  80
                        },
                        {
                            "text":  "purse",
                            "points":  12
                        },
                        {
                            "text":  "eyes, with love",
                            "points":  4
                        },
                        {
                            "text":  "bra/cleavage",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150561,
        "question":  "Name something an old frog might not be able to do as well as a young frog.",
        "answers":  [
                        {
                            "text":  "jump",
                            "points":  74
                        },
                        {
                            "text":  "croak",
                            "points":  17
                        },
                        {
                            "text":  "catch fly w/ tongue",
                            "points":  5
                        },
                        {
                            "text":  "become prince/kiss",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150562,
        "question":  "Name a go-to gift for a man to buy his wife when he does something wrong.",
        "answers":  [
                        {
                            "text":  "flowers",
                            "points":  74
                        },
                        {
                            "text":  "jewelry",
                            "points":  12
                        },
                        {
                            "text":  "chocolate/candy",
                            "points":  9
                        },
                        {
                            "text":  "gift card/to spa",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150563,
        "question":  "Name something you hope you have in your car when you get a flat tire.",
        "answers":  [
                        {
                            "text":  "spare tire",
                            "points":  73
                        },
                        {
                            "text":  "jack/tools",
                            "points":  15
                        },
                        {
                            "text":  "phone",
                            "points":  7
                        },
                        {
                            "text":  "someone to change it",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150564,
        "question":  "We asked 100 men... Name someone who's always asking you when you're going to get married.",
        "answers":  [
                        {
                            "text":  "parents",
                            "points":  71
                        },
                        {
                            "text":  "grandparents",
                            "points":  16
                        },
                        {
                            "text":  "aunt",
                            "points":  7
                        },
                        {
                            "text":  "kids",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150565,
        "question":  "Name someone specific a woman hopes will approve of the man she's about to marry.",
        "answers":  [
                        {
                            "text":  "her father",
                            "points":  56
                        },
                        {
                            "text":  "her mother",
                            "points":  35
                        },
                        {
                            "text":  "her bff",
                            "points":  4
                        },
                        {
                            "text":  "her kids",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150566,
        "question":  "We asked 100 single people... Fill in the blank: On some dates, you've felt like saying, \"Less talk, more ______.\"",
        "answers":  [
                        {
                            "text":  "action/gettin' fresh",
                            "points":  56
                        },
                        {
                            "text":  "eating",
                            "points":  27
                        },
                        {
                            "text":  "drinking",
                            "points":  12
                        },
                        {
                            "text":  "listening/attention",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150567,
        "question":  "Name an animal that hopes the farmer is a vegetarian.",
        "answers":  [
                        {
                            "text":  "cow/bull",
                            "points":  43
                        },
                        {
                            "text":  "hog",
                            "points":  32
                        },
                        {
                            "text":  "chicken",
                            "points":  17
                        },
                        {
                            "text":  "rabbit",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  150568,
        "question":  "Fill in the blank: A pothead might say that he's higher than a ______.",
        "answers":  [
                        {
                            "text":  "a kite",
                            "points":  87
                        },
                        {
                            "text":  "a cloud/the sky",
                            "points":  6
                        },
                        {
                            "text":  "a plane",
                            "points":  2
                        },
                        {
                            "text":  "a giraffe",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150569,
        "question":  "Santa must have had a good year, because instead of a sleigh, he's riding in what?",
        "answers":  [
                        {
                            "text":  "pimp car/truck",
                            "points":  87
                        },
                        {
                            "text":  "plane",
                            "points":  5
                        },
                        {
                            "text":  "rocket/spaceship",
                            "points":  3
                        },
                        {
                            "text":  "yacht",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150570,
        "question":  "Name a sport that you think most men would say is their favorite to watch.",
        "answers":  [
                        {
                            "text":  "football",
                            "points":  85
                        },
                        {
                            "text":  "baseball",
                            "points":  6
                        },
                        {
                            "text":  "basketball",
                            "points":  3
                        },
                        {
                            "text":  "wrestling/female!",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150571,
        "question":  "We asked 100 women... Name something you used to do to your teddy bear that you now do to your man.",
        "answers":  [
                        {
                            "text":  "hug/spoon",
                            "points":  80
                        },
                        {
                            "text":  "sleep with",
                            "points":  8
                        },
                        {
                            "text":  "kiss him",
                            "points":  7
                        },
                        {
                            "text":  "rub/pet him",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150572,
        "question":  "Name a sport where the ball might land in the water.",
        "answers":  [
                        {
                            "text":  "golf",
                            "points":  76
                        },
                        {
                            "text":  "water polo",
                            "points":  10
                        },
                        {
                            "text":  "beach volleyball",
                            "points":  7
                        },
                        {
                            "text":  "baseball",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150573,
        "question":  "Fill in the blank: It's ______ outside.",
        "answers":  [
                        {
                            "text":  "cold/freezing",
                            "points":  74
                        },
                        {
                            "text":  "hot/warm",
                            "points":  13
                        },
                        {
                            "text":  "raining",
                            "points":  6
                        },
                        {
                            "text":  "dark",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150574,
        "question":  "Name something that gets blocked up.",
        "answers":  [
                        {
                            "text":  "plumbing/toilet",
                            "points":  73
                        },
                        {
                            "text":  "nose/sinus",
                            "points":  14
                        },
                        {
                            "text":  "road/traffic",
                            "points":  6
                        },
                        {
                            "text":  "bowels",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150575,
        "question":  "Name a fruit you'd want on your head if someone was going to shoot it with an arrow.",
        "answers":  [
                        {
                            "text":  "watermelon",
                            "points":  73
                        },
                        {
                            "text":  "pineapple",
                            "points":  10
                        },
                        {
                            "text":  "apple/i'm traditional",
                            "points":  8
                        },
                        {
                            "text":  "pumpkin",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  150576,
        "question":  "We asked 100 married men... Pretend you're single again. Where would you go tonight?",
        "answers":  [
                        {
                            "text":  "bar/nightclub",
                            "points":  66
                        },
                        {
                            "text":  "movie/play",
                            "points":  15
                        },
                        {
                            "text":  "strip joint",
                            "points":  14
                        },
                        {
                            "text":  "home/to bed",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150577,
        "question":  "Name something people quit.",
        "answers":  [
                        {
                            "text":  "their job",
                            "points":  47
                        },
                        {
                            "text":  "smoking",
                            "points":  46
                        },
                        {
                            "text":  "school",
                            "points":  2
                        },
                        {
                            "text":  "a diet",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150578,
        "question":  "Name an animal that can be bright yellow.",
        "answers":  [
                        {
                            "text":  "canary/bird",
                            "points":  86
                        },
                        {
                            "text":  "frog",
                            "points":  4
                        },
                        {
                            "text":  "snake",
                            "points":  3
                        },
                        {
                            "text":  "giraffe",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150579,
        "question":  "Name something you put on pancakes.",
        "answers":  [
                        {
                            "text":  "syrup",
                            "points":  78
                        },
                        {
                            "text":  "butter",
                            "points":  12
                        },
                        {
                            "text":  "fruit/berries",
                            "points":  4
                        },
                        {
                            "text":  "powdered sugar",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150580,
        "question":  "No kid wants to trick-or-treat at a house that gives away what healthy snack?",
        "answers":  [
                        {
                            "text":  "fruit/apples",
                            "points":  72
                        },
                        {
                            "text":  "carrots/veggies",
                            "points":  19
                        },
                        {
                            "text":  "granola/bars",
                            "points":  3
                        },
                        {
                            "text":  "trail mix",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150581,
        "question":  "Name something a goldfish might be happy that you just put in his little bowl.",
        "answers":  [
                        {
                            "text":  "food/worm",
                            "points":  70
                        },
                        {
                            "text":  "fish pal/hot gal",
                            "points":  18
                        },
                        {
                            "text":  "fresh water",
                            "points":  5
                        },
                        {
                            "text":  "little castle",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150582,
        "question":  "Name something you do at a party on Saturday that you repent for at church on Sunday.",
        "answers":  [
                        {
                            "text":  "get sloshed",
                            "points":  65
                        },
                        {
                            "text":  "sex/pastor's wife",
                            "points":  22
                        },
                        {
                            "text":  "swear",
                            "points":  7
                        },
                        {
                            "text":  "gossip/spread lies",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150583,
        "question":  "I hate coming home after a hard day at work and having to do what?",
        "answers":  [
                        {
                            "text":  "clean/laundry",
                            "points":  59
                        },
                        {
                            "text":  "cook",
                            "points":  32
                        },
                        {
                            "text":  "more work",
                            "points":  3
                        },
                        {
                            "text":  "exercise",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150584,
        "question":  "Name something husbands and wives fight for control of.",
        "answers":  [
                        {
                            "text":  "finances",
                            "points":  54
                        },
                        {
                            "text":  "tv remote",
                            "points":  35
                        },
                        {
                            "text":  "the thermostat",
                            "points":  5
                        },
                        {
                            "text":  "covers/blankets",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150585,
        "question":  "We asked 100 married women... Your husband is hooked up to a lie detector. Go ahead -- ask him a question.",
        "answers":  [
                        {
                            "text":  "you a man ho?",
                            "points":  53
                        },
                        {
                            "text":  "do you love me?",
                            "points":  27
                        },
                        {
                            "text":  "ever been a druggie?",
                            "points":  10
                        },
                        {
                            "text":  "find me sexy?",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  150586,
        "question":  "Name a reason you're seeing stars.",
        "answers":  [
                        {
                            "text":  "hurt/dizzy/fainted",
                            "points":  52
                        },
                        {
                            "text":  "night/clear sky",
                            "points":  40
                        },
                        {
                            "text":  "i'm in love!",
                            "points":  2
                        },
                        {
                            "text":  "i'm in hollywood!",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150587,
        "question":  "Steve Harvey says, \"My Aunt Agnes is so mean, when kids see her coming, they\" what?",
        "answers":  [
                        {
                            "text":  "run/cross street",
                            "points":  48
                        },
                        {
                            "text":  "hide",
                            "points":  36
                        },
                        {
                            "text":  "scream/cry",
                            "points":  10
                        },
                        {
                            "text":  "pee/poo selves",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150588,
        "question":  "Name something people are always saying they're going to start doing but they never do.",
        "answers":  [
                        {
                            "text":  "diet/exercise",
                            "points":  85
                        },
                        {
                            "text":  "quit smoking",
                            "points":  5
                        },
                        {
                            "text":  "saving $",
                            "points":  3
                        },
                        {
                            "text":  "help others/selfless",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150589,
        "question":  "Name something a caveman might have accidentally burned when he first discovered fire.",
        "answers":  [
                        {
                            "text":  "his body/hair",
                            "points":  84
                        },
                        {
                            "text":  "his cute outfit",
                            "points":  5
                        },
                        {
                            "text":  "his club",
                            "points":  3
                        },
                        {
                            "text":  "his food",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150590,
        "question":  "Fill in the blank: The fattest part of my body is my ______.",
        "answers":  [
                        {
                            "text":  "belly/waist",
                            "points":  70
                        },
                        {
                            "text":  "bowl'g ball booty",
                            "points":  19
                        },
                        {
                            "text":  "cheese thighs",
                            "points":  4
                        },
                        {
                            "text":  "head",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150591,
        "question":  "We asked 100 men... Where are you when you hear the words \"slow down\"?",
        "answers":  [
                        {
                            "text":  "car/highway",
                            "points":  65
                        },
                        {
                            "text":  "in bed",
                            "points":  18
                        },
                        {
                            "text":  "eatery/dinner",
                            "points":  8
                        },
                        {
                            "text":  "at a bar",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150592,
        "question":  "Name something about a really bad kiss that can make it seem like the kiss of death.",
        "answers":  [
                        {
                            "text":  "bad/toilet breath",
                            "points":  64
                        },
                        {
                            "text":  "wet/slobbery",
                            "points":  27
                        },
                        {
                            "text":  "too hard/suction",
                            "points":  2
                        },
                        {
                            "text":  "bite my lip",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150593,
        "question":  "It might be okay for Santa Claus, but what about him wouldn't be sexy on the average man?",
        "answers":  [
                        {
                            "text":  "jelly belly",
                            "points":  64
                        },
                        {
                            "text":  "beard",
                            "points":  22
                        },
                        {
                            "text":  "that outfit/hat",
                            "points":  7
                        },
                        {
                            "text":  "rosy cheeks/face",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150594,
        "question":  "Name an animal that has really big babies.",
        "answers":  [
                        {
                            "text":  "elephant",
                            "points":  63
                        },
                        {
                            "text":  "hippo",
                            "points":  20
                        },
                        {
                            "text":  "whale",
                            "points":  9
                        },
                        {
                            "text":  "rhino",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150595,
        "question":  "We asked 100 women... Where does your man go that you'd hate if every woman there knew his name?",
        "answers":  [
                        {
                            "text":  "bar/nightclub",
                            "points":  50
                        },
                        {
                            "text":  "strip joint",
                            "points":  39
                        },
                        {
                            "text":  "gym",
                            "points":  3
                        },
                        {
                            "text":  "store/lingerie shop",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150596,
        "question":  "These days, name something people can go online and do from home in their underwear.",
        "answers":  [
                        {
                            "text":  "shop",
                            "points":  50
                        },
                        {
                            "text":  "work",
                            "points":  37
                        },
                        {
                            "text":  "bank/pay bills",
                            "points":  4
                        },
                        {
                            "text":  "school",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150597,
        "question":  "At a nudist football game, the players might still be wearing what?",
        "answers":  [
                        {
                            "text":  "helmets",
                            "points":  45
                        },
                        {
                            "text":  "cups/jocks",
                            "points":  32
                        },
                        {
                            "text":  "shoes",
                            "points":  16
                        },
                        {
                            "text":  "socks",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150598,
        "question":  "Name something an actress might be on.",
        "answers":  [
                        {
                            "text":  "tv/movie screen",
                            "points":  45
                        },
                        {
                            "text":  "drugs/meds",
                            "points":  29
                        },
                        {
                            "text":  "stage/broadway",
                            "points":  18
                        },
                        {
                            "text":  "a diet",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150599,
        "question":  "We asked 100 women... Name something specific of Leonardo DiCaprio's that you'd like to hold.",
        "answers":  [
                        {
                            "text":  "his billions/wallet",
                            "points":  41
                        },
                        {
                            "text":  "his hand",
                            "points":  35
                        },
                        {
                            "text":  "his oscar",
                            "points":  17
                        },
                        {
                            "text":  "his hair",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150600,
        "question":  "Name something that rabbits just love to do.",
        "answers":  [
                        {
                            "text":  "hop",
                            "points":  34
                        },
                        {
                            "text":  "boink/multiply",
                            "points":  33
                        },
                        {
                            "text":  "eat/carrots",
                            "points":  23
                        },
                        {
                            "text":  "burrow/dig hole",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  150601,
        "question":  "Name something a woman slips into.",
        "answers":  [
                        {
                            "text":  "clothes/shoes",
                            "points":  76
                        },
                        {
                            "text":  "bed",
                            "points":  7
                        },
                        {
                            "text":  "bathtub",
                            "points":  6
                        },
                        {
                            "text":  "mood/2nd personality",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  150602,
        "question":  "Name something people hope will be fast and painless.",
        "answers":  [
                        {
                            "text":  "dental/medical",
                            "points":  59
                        },
                        {
                            "text":  "death",
                            "points":  30
                        },
                        {
                            "text":  "waxing/chest hair",
                            "points":  3
                        },
                        {
                            "text":  "dmv",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150603,
        "question":  "Fill in the blank: Dear Mr. Steve Harvey, please buy me a new ______.",
        "answers":  [
                        {
                            "text":  "car/truck",
                            "points":  55
                        },
                        {
                            "text":  "house",
                            "points":  34
                        },
                        {
                            "text":  "wardrobe/suit",
                            "points":  3
                        },
                        {
                            "text":  "tv",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150604,
        "question":  "Name something a man can't drive past without slowing down to look at.",
        "answers":  [
                        {
                            "text":  "hot babes/in bikinis",
                            "points":  55
                        },
                        {
                            "text":  "pimp cars",
                            "points":  26
                        },
                        {
                            "text":  "an accident",
                            "points":  11
                        },
                        {
                            "text":  "billboard/sign",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150605,
        "question":  "Name something a farmer has in his barn that you don't have in your garage.",
        "answers":  [
                        {
                            "text":  "tractor",
                            "points":  49
                        },
                        {
                            "text":  "animals",
                            "points":  33
                        },
                        {
                            "text":  "hay/grain",
                            "points":  10
                        },
                        {
                            "text":  "pitchfork",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150606,
        "question":  "Name something a cowboy might bring into a bar that could get him in trouble.",
        "answers":  [
                        {
                            "text":  "gun",
                            "points":  48
                        },
                        {
                            "text":  "horse",
                            "points":  41
                        },
                        {
                            "text":  "cow/bull",
                            "points":  3
                        },
                        {
                            "text":  "lasso",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150607,
        "question":  "Name a phrase that starts with the word \"shut.\"",
        "answers":  [
                        {
                            "text":  "shut up",
                            "points":  46
                        },
                        {
                            "text":  "...the front door",
                            "points":  35
                        },
                        {
                            "text":  "...your mouth",
                            "points":  7
                        },
                        {
                            "text":  "shutdown/...it down",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  150608,
        "question":  "If the police had a retreat at a nudist colony, name something they might still be wearing.",
        "answers":  [
                        {
                            "text":  "gun/gun belt",
                            "points":  46
                        },
                        {
                            "text":  "badge",
                            "points":  27
                        },
                        {
                            "text":  "hat",
                            "points":  18
                        },
                        {
                            "text":  "handcuffs",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150609,
        "question":  "Fill in the blank: I need a long ______.",
        "answers":  [
                        {
                            "text":  "vacation",
                            "points":  45
                        },
                        {
                            "text":  "nap/rest",
                            "points":  39
                        },
                        {
                            "text":  "bath/shower",
                            "points":  6
                        },
                        {
                            "text":  "walk",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150610,
        "question":  "Name the worst thing to run out of when you're camping in the wilderness.",
        "answers":  [
                        {
                            "text":  "toilet paper",
                            "points":  44
                        },
                        {
                            "text":  "food/water",
                            "points":  37
                        },
                        {
                            "text":  "matches/fire/wood",
                            "points":  8
                        },
                        {
                            "text":  "bug spray",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  150611,
        "question":  "Name one of the seven dwarfs that would have a good chance of getting a job in politics.",
        "answers":  [
                        {
                            "text":  "dopey",
                            "points":  44
                        },
                        {
                            "text":  "doc",
                            "points":  22
                        },
                        {
                            "text":  "grumpy",
                            "points":  22
                        },
                        {
                            "text":  "happy",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  150612,
        "question":  "Name a superhero whose costume would make it difficult for him to make out with a woman.",
        "answers":  [
                        {
                            "text":  "spider-man",
                            "points":  38
                        },
                        {
                            "text":  "batman",
                            "points":  28
                        },
                        {
                            "text":  "iron man",
                            "points":  23
                        },
                        {
                            "text":  "deadpool",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  150613,
        "question":  "What does Santa do when he returns to the North Pole Christmas morning?",
        "answers":  [
                        {
                            "text":  "sleep/rest",
                            "points":  79
                        },
                        {
                            "text":  "breakfast/cocoa",
                            "points":  6
                        },
                        {
                            "text":  "get sloshed",
                            "points":  5
                        },
                        {
                            "text":  "hug/kiss the mrs.",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150614,
        "question":  "Name an animal on Noah's Ark that took up lots of space.",
        "answers":  [
                        {
                            "text":  "elephant",
                            "points":  76
                        },
                        {
                            "text":  "hippo",
                            "points":  10
                        },
                        {
                            "text":  "rhino",
                            "points":  4
                        },
                        {
                            "text":  "people/fat noah",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150615,
        "question":  "Every parent would love to say, \"My kid just got accepted to\" what specific school?",
        "answers":  [
                        {
                            "text":  "harvard",
                            "points":  76
                        },
                        {
                            "text":  "yale",
                            "points":  9
                        },
                        {
                            "text":  "mit",
                            "points":  5
                        },
                        {
                            "text":  "notre dame",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150616,
        "question":  "Name something you'd love to hear a fortune-teller say will happen to you next year.",
        "answers":  [
                        {
                            "text":  "get rich/lotto",
                            "points":  72
                        },
                        {
                            "text":  "healthy/fewer std's",
                            "points":  9
                        },
                        {
                            "text":  "find love",
                            "points":  9
                        },
                        {
                            "text":  "new car",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150617,
        "question":  "When you were a child, who did you think was the smartest person in the world?",
        "answers":  [
                        {
                            "text":  "my parents",
                            "points":  71
                        },
                        {
                            "text":  "albert einstein",
                            "points":  9
                        },
                        {
                            "text":  "my teacher",
                            "points":  7
                        },
                        {
                            "text":  "my grandparents",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  150618,
        "question":  "Name an animal that the farmer's little children love to ride.",
        "answers":  [
                        {
                            "text":  "pony/horse",
                            "points":  71
                        },
                        {
                            "text":  "donkey/mule",
                            "points":  9
                        },
                        {
                            "text":  "sheep/lamb",
                            "points":  7
                        },
                        {
                            "text":  "goat",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  150619,
        "question":  "We asked 100 married women... If you weren't around, tell me the first thing your husband would stop doing.",
        "answers":  [
                        {
                            "text":  "cleaning/laundry",
                            "points":  67
                        },
                        {
                            "text":  "bathing/showering",
                            "points":  18
                        },
                        {
                            "text":  "cooking",
                            "points":  5
                        },
                        {
                            "text":  "complaining",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150620,
        "question":  "Birds do it. Bees do it. Name a creature that does it even more than they do it.",
        "answers":  [
                        {
                            "text":  "rabbits",
                            "points":  67
                        },
                        {
                            "text":  "humans/my ex",
                            "points":  16
                        },
                        {
                            "text":  "dogs",
                            "points":  6
                        },
                        {
                            "text":  "monkeys/apes",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150621,
        "question":  "Name something that's fun to make.",
        "answers":  [
                        {
                            "text":  "cookies/food",
                            "points":  66
                        },
                        {
                            "text":  "whoopee/babies",
                            "points":  21
                        },
                        {
                            "text":  "crafts/art",
                            "points":  3
                        },
                        {
                            "text":  "money",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150622,
        "question":  "Fill in the blank: You should trust your ______.",
        "answers":  [
                        {
                            "text":  "gut/self/heart",
                            "points":  65
                        },
                        {
                            "text":  "spouse/mate",
                            "points":  20
                        },
                        {
                            "text":  "doctor",
                            "points":  4
                        },
                        {
                            "text":  "mother",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150623,
        "question":  "Name a state that might someday fall into the ocean.",
        "answers":  [
                        {
                            "text":  "california",
                            "points":  63
                        },
                        {
                            "text":  "florida",
                            "points":  22
                        },
                        {
                            "text":  "hawaii",
                            "points":  6
                        },
                        {
                            "text":  "new york",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150624,
        "question":  "Name a kind of implant.",
        "answers":  [
                        {
                            "text":  "breast",
                            "points":  63
                        },
                        {
                            "text":  "tooth/dental",
                            "points":  19
                        },
                        {
                            "text":  "heart/pacemaker",
                            "points":  8
                        },
                        {
                            "text":  "cochlear/ear",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150625,
        "question":  "A single guy might want to rent an apartment within walking distance of what?",
        "answers":  [
                        {
                            "text":  "bar/nightclub",
                            "points":  62
                        },
                        {
                            "text":  "strip joint",
                            "points":  17
                        },
                        {
                            "text":  "restaurant",
                            "points":  9
                        },
                        {
                            "text":  "store/liquor shop",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  150626,
        "question":  "When a magician proposes to a woman, what might he pull the ring out of?",
        "answers":  [
                        {
                            "text":  "hat",
                            "points":  61
                        },
                        {
                            "text":  "ear/behind ear",
                            "points":  23
                        },
                        {
                            "text":  "thin air",
                            "points":  5
                        },
                        {
                            "text":  "butt/the rabbit's",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150627,
        "question":  "We asked 100 men... Tell me something you'll have more of when you get divorced.",
        "answers":  [
                        {
                            "text":  "time/freedom",
                            "points":  60
                        },
                        {
                            "text":  "honeys/sex",
                            "points":  16
                        },
                        {
                            "text":  "money",
                            "points":  14
                        },
                        {
                            "text":  "blues/sadness",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150628,
        "question":  "Name someone grandpa might show his colonoscopy pictures to.",
        "answers":  [
                        {
                            "text":  "grandma",
                            "points":  57
                        },
                        {
                            "text":  "kids/grandkids",
                            "points":  22
                        },
                        {
                            "text":  "buddies",
                            "points":  8
                        },
                        {
                            "text":  "another doctor",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  150629,
        "question":  "Fill in the blank: A wife might tell her husband, \"Today, it's your turn to ______.\"",
        "answers":  [
                        {
                            "text":  "clean/dishes",
                            "points":  51
                        },
                        {
                            "text":  "cook",
                            "points":  32
                        },
                        {
                            "text":  "walk/feed dog",
                            "points":  5
                        },
                        {
                            "text":  "take out trash",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  150630,
        "question":  "Name something rich people hire other people to carry for them.",
        "answers":  [
                        {
                            "text":  "luggage",
                            "points":  49
                        },
                        {
                            "text":  "golf clubs",
                            "points":  19
                        },
                        {
                            "text":  "grocery/shop'g bag",
                            "points":  14
                        },
                        {
                            "text":  "their kids",
                            "points":  11
                        }
                    ]
    },
    {
        "id":  150631,
        "question":  "Name someone it's acceptable to text when you're on a date.",
        "answers":  [
                        {
                            "text":  "mom/dad",
                            "points":  48
                        },
                        {
                            "text":  "your kids",
                            "points":  25
                        },
                        {
                            "text":  "best friend",
                            "points":  13
                        },
                        {
                            "text":  "babysitter",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  150632,
        "question":  "Name something a man sees his wife buying that makes him think she's planning on killing him.",
        "answers":  [
                        {
                            "text":  "gun",
                            "points":  42
                        },
                        {
                            "text":  "knife/machete",
                            "points":  25
                        },
                        {
                            "text":  "poison/antifreeze",
                            "points":  22
                        },
                        {
                            "text":  "life insurance",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150633,
        "question":  "We asked 100 single women... You hope the ring your fiancé gives you will be what?",
        "answers":  [
                        {
                            "text":  "a real diamond",
                            "points":  41
                        },
                        {
                            "text":  "huuuge!",
                            "points":  26
                        },
                        {
                            "text":  "beautiful/sparkly",
                            "points":  21
                        },
                        {
                            "text":  "the correct size",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  150634,
        "question":  "Name something that is sexier when it's in black.",
        "answers":  [
                        {
                            "text":  "lingerie/nightie",
                            "points":  39
                        },
                        {
                            "text":  "dress/skirt",
                            "points":  36
                        },
                        {
                            "text":  "car",
                            "points":  13
                        },
                        {
                            "text":  "person",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  150635,
        "question":  "Name something broke students eat a lot of.",
        "answers":  [
                        {
                            "text":  "ramen/soup",
                            "points":  82
                        },
                        {
                            "text":  "pizza",
                            "points":  4
                        },
                        {
                            "text":  "peanut butter/pbj",
                            "points":  4
                        },
                        {
                            "text":  "beans",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150636,
        "question":  "Name something there might be six or more of in your kitchen.",
        "answers":  [
                        {
                            "text":  "dishes/utensils",
                            "points":  77
                        },
                        {
                            "text":  "pots & pans",
                            "points":  5
                        },
                        {
                            "text":  "eggs",
                            "points":  5
                        },
                        {
                            "text":  "beers",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  150637,
        "question":  "Name an animal they tell you \"never run away from\" that you'd run away from anyway.",
        "answers":  [
                        {
                            "text":  "bear",
                            "points":  73
                        },
                        {
                            "text":  "lion/mtn. lion",
                            "points":  10
                        },
                        {
                            "text":  "dog",
                            "points":  6
                        },
                        {
                            "text":  "tiger",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150638,
        "question":  "Name a piece of sporting equipment that you swing.",
        "answers":  [
                        {
                            "text":  "baseball bat",
                            "points":  72
                        },
                        {
                            "text":  "golf club",
                            "points":  13
                        },
                        {
                            "text":  "tennis racket",
                            "points":  4
                        },
                        {
                            "text":  "rope/lasso",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150639,
        "question":  "Name someone who'd better not mess with grandma now that she has a black belt in karate.",
        "answers":  [
                        {
                            "text":  "grandpa",
                            "points":  66
                        },
                        {
                            "text":  "crook/scammer",
                            "points":  17
                        },
                        {
                            "text":  "grandchildren",
                            "points":  7
                        },
                        {
                            "text":  "in-laws",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150640,
        "question":  "Name something a man might have on the side.",
        "answers":  [
                        {
                            "text":  "babe",
                            "points":  65
                        },
                        {
                            "text":  "food/fries",
                            "points":  14
                        },
                        {
                            "text":  "weapon/sheath",
                            "points":  7
                        },
                        {
                            "text":  "2nd job/hustle",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  150641,
        "question":  "The day after the wild poker party, I found a chip in my what?",
        "answers":  [
                        {
                            "text":  "bra/clothes",
                            "points":  65
                        },
                        {
                            "text":  "bod/fat rolls",
                            "points":  13
                        },
                        {
                            "text":  "food/drink/dish",
                            "points":  11
                        },
                        {
                            "text":  "toilet",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150642,
        "question":  "Fill in the blank: A man might be intimidated by a woman with a better what?",
        "answers":  [
                        {
                            "text":  "job/salary",
                            "points":  57
                        },
                        {
                            "text":  "brain/iq",
                            "points":  21
                        },
                        {
                            "text":  "car",
                            "points":  7
                        },
                        {
                            "text":  "body/bicep",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  150643,
        "question":  "We asked 100 men... What's the most fun you have with your clothes on?",
        "answers":  [
                        {
                            "text":  "play sports/pool",
                            "points":  56
                        },
                        {
                            "text":  "watch tv/movies",
                            "points":  15
                        },
                        {
                            "text":  "listen to/play music",
                            "points":  12
                        },
                        {
                            "text":  "eating",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  150644,
        "question":  "Fill in the blank: A man might tell his wife, \"Go ahead and leave me. But take ______ with you.\"",
        "answers":  [
                        {
                            "text":  "the cats/pets",
                            "points":  49
                        },
                        {
                            "text":  "the kids",
                            "points":  33
                        },
                        {
                            "text":  "your mother",
                            "points":  6
                        },
                        {
                            "text":  "the bills",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150645,
        "question":  "Fill in the blank: I'm in the mood for ______.",
        "answers":  [
                        {
                            "text":  "love/sexy time",
                            "points":  49
                        },
                        {
                            "text":  "food/chocolate",
                            "points":  31
                        },
                        {
                            "text":  "a stiff drink",
                            "points":  8
                        },
                        {
                            "text":  "sleep/a nap",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150646,
        "question":  "We asked 100 married men... Sometimes your wife is as sweet as sugar, and other times she's as sour as what?",
        "answers":  [
                        {
                            "text":  "a lemon",
                            "points":  46
                        },
                        {
                            "text":  "vinegar",
                            "points":  25
                        },
                        {
                            "text":  "a grape",
                            "points":  11
                        },
                        {
                            "text":  "a pickle",
                            "points":  10
                        }
                    ]
    },
    {
        "id":  150647,
        "question":  "If Mrs. Claus kicked Santa out of the house, where might he spend the night?",
        "answers":  [
                        {
                            "text":  "barn/with vixen",
                            "points":  44
                        },
                        {
                            "text":  "elf's pad/workshop",
                            "points":  37
                        },
                        {
                            "text":  "the sleigh",
                            "points":  8
                        },
                        {
                            "text":  "in an igloo",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150648,
        "question":  "While he was in Russia, name something an American diplomat might worry was bugged.",
        "answers":  [
                        {
                            "text":  "his phone",
                            "points":  43
                        },
                        {
                            "text":  "hotel/room",
                            "points":  42
                        },
                        {
                            "text":  "his car",
                            "points":  4
                        },
                        {
                            "text":  "embassy/office",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150649,
        "question":  "Name something you like in your brownies.",
        "answers":  [
                        {
                            "text":  "nuts",
                            "points":  43
                        },
                        {
                            "text":  "chocolate/chips",
                            "points":  38
                        },
                        {
                            "text":  "weed/hash",
                            "points":  7
                        },
                        {
                            "text":  "caramel",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150650,
        "question":  "Dwayne \"The Rock\" Johnson is known for his what?",
        "answers":  [
                        {
                            "text":  "muscles/body",
                            "points":  41
                        },
                        {
                            "text":  "wrestling",
                            "points":  26
                        },
                        {
                            "text":  "acting/movies",
                            "points":  20
                        },
                        {
                            "text":  "raised eyebrow",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  150651,
        "question":  "Name something that, if a man forgets, his wife will hold against him for the rest of his life.",
        "answers":  [
                        {
                            "text":  "anniversary",
                            "points":  40
                        },
                        {
                            "text":  "birthday",
                            "points":  35
                        },
                        {
                            "text":  "not to cheat",
                            "points":  12
                        },
                        {
                            "text":  "her name",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  150652,
        "question":  "After a crazy night out, you might wake up with a what?",
        "answers":  [
                        {
                            "text":  "hangover/headache",
                            "points":  75
                        },
                        {
                            "text":  "new lover",
                            "points":  10
                        },
                        {
                            "text":  "hickey",
                            "points":  3
                        },
                        {
                            "text":  "bad taste/dry mouth",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150653,
        "question":  "A fisherman would be surprised if you got him what kind of pole for his birthday?",
        "answers":  [
                        {
                            "text":  "stripper pole",
                            "points":  66
                        },
                        {
                            "text":  "new fishing pole",
                            "points":  16
                        },
                        {
                            "text":  "flag pole",
                            "points":  6
                        },
                        {
                            "text":  "vaulting pole",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150654,
        "question":  "Name something a woman has that's perky.",
        "answers":  [
                        {
                            "text":  "boobies",
                            "points":  66
                        },
                        {
                            "text":  "personality/'tude",
                            "points":  15
                        },
                        {
                            "text":  "nose",
                            "points":  5
                        },
                        {
                            "text":  "smile/mouth",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  150655,
        "question":  "Name something specific a man might practice taking off with his teeth.",
        "answers":  [
                        {
                            "text":  "panties/lingerie",
                            "points":  63
                        },
                        {
                            "text":  "beer cap/can tab",
                            "points":  14
                        },
                        {
                            "text":  "gloves",
                            "points":  8
                        },
                        {
                            "text":  "shirt",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  150656,
        "question":  "We asked 100 men... I like a woman who likes to play what?",
        "answers":  [
                        {
                            "text":  "games/strip poker",
                            "points":  62
                        },
                        {
                            "text":  "sports/wrestling",
                            "points":  17
                        },
                        {
                            "text":  "rough/dirty",
                            "points":  6
                        },
                        {
                            "text":  "the flute/music",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  150657,
        "question":  "Name something of yours that you wish was more flexible.",
        "answers":  [
                        {
                            "text":  "my body/knees",
                            "points":  60
                        },
                        {
                            "text":  "time/work schedule",
                            "points":  23
                        },
                        {
                            "text":  "my spouse/mate",
                            "points":  4
                        },
                        {
                            "text":  "my mind/opinions",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150658,
        "question":  "Give me a word that rhymes with \"Spanky.\"",
        "answers":  [
                        {
                            "text":  "hanky",
                            "points":  48
                        },
                        {
                            "text":  "cranky",
                            "points":  24
                        },
                        {
                            "text":  "lanky",
                            "points":  13
                        },
                        {
                            "text":  "panky",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  150659,
        "question":  "Tell me a reason you've got a sore toe.",
        "answers":  [
                        {
                            "text":  "stubbed/kicked",
                            "points":  64
                        },
                        {
                            "text":  "tight shoes",
                            "points":  16
                        },
                        {
                            "text":  "gout",
                            "points":  6
                        },
                        {
                            "text":  "dropped something on",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150660,
        "question":  "We asked 100 women... I love my best friend, but she has no taste when it comes to what?",
        "answers":  [
                        {
                            "text":  "men",
                            "points":  60
                        },
                        {
                            "text":  "clothes/shoes",
                            "points":  18
                        },
                        {
                            "text":  "food/eateries",
                            "points":  7
                        },
                        {
                            "text":  "music",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  150661,
        "question":  "Fill in the blank with one word: Knock ______.",
        "answers":  [
                        {
                            "text":  "knock knock",
                            "points":  56
                        },
                        {
                            "text":  "knockout",
                            "points":  13
                        },
                        {
                            "text":  "knock down",
                            "points":  12
                        },
                        {
                            "text":  "knackwurst",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  150662,
        "question":  "If you went as a shark for Halloween, name something specific you'd have hanging out of your mouth.",
        "answers":  [
                        {
                            "text":  "person/limb",
                            "points":  55
                        },
                        {
                            "text":  "fish",
                            "points":  16
                        },
                        {
                            "text":  "massive teeth",
                            "points":  15
                        },
                        {
                            "text":  "fish hook",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150663,
        "question":  "We asked 100 men... Name something of yours that will never be good enough for your mother.",
        "answers":  [
                        {
                            "text":  "my spouse/mate",
                            "points":  38
                        },
                        {
                            "text":  "job/salary",
                            "points":  35
                        },
                        {
                            "text":  "my weight/body",
                            "points":  9
                        },
                        {
                            "text":  "my house",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  150664,
        "question":  "We asked 100 married women... Fill in the blank: I wish my husband had a better ______.",
        "answers":  [
                        {
                            "text":  "personality/'tude",
                            "points":  37
                        },
                        {
                            "text":  "job/work schedule",
                            "points":  31
                        },
                        {
                            "text":  "body",
                            "points":  13
                        },
                        {
                            "text":  "fashion sense",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  150665,
        "question":  "Name someone a five-year-old might call when he's mad at his parents.",
        "answers":  [
                        {
                            "text":  "grandparents",
                            "points":  71
                        },
                        {
                            "text":  "police/911",
                            "points":  10
                        },
                        {
                            "text":  "santa",
                            "points":  5
                        },
                        {
                            "text":  "friend",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150666,
        "question":  "If you could have one part of your body never age, which one would you choose?",
        "answers":  [
                        {
                            "text":  "face/eyes",
                            "points":  71
                        },
                        {
                            "text":  "brain",
                            "points":  8
                        },
                        {
                            "text":  "boobs",
                            "points":  6
                        },
                        {
                            "text":  "heart",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150667,
        "question":  "You know you're not getting a raise if your boss just got a new what?",
        "answers":  [
                        {
                            "text":  "car/truck",
                            "points":  70
                        },
                        {
                            "text":  "house/villa",
                            "points":  9
                        },
                        {
                            "text":  "trophy wife/boy toy",
                            "points":  6
                        },
                        {
                            "text":  "yacht",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150668,
        "question":  "Name something in your home that gets wasted.",
        "answers":  [
                        {
                            "text":  "food/soda",
                            "points":  68
                        },
                        {
                            "text":  "water/ice",
                            "points":  10
                        },
                        {
                            "text":  "paper towels/napkins",
                            "points":  6
                        },
                        {
                            "text":  "me/my lush kid",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  150669,
        "question":  "We asked 100 women... Name something your best friend stole from you that has now made her dead to you.",
        "answers":  [
                        {
                            "text":  "my man",
                            "points":  65
                        },
                        {
                            "text":  "money",
                            "points":  16
                        },
                        {
                            "text":  "book/twilight series",
                            "points":  4
                        },
                        {
                            "text":  "clothes",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150670,
        "question":  "You know you must be really tired if you fall asleep sitting on the what?",
        "answers":  [
                        {
                            "text":  "toilet",
                            "points":  62
                        },
                        {
                            "text":  "couch/chair",
                            "points":  21
                        },
                        {
                            "text":  "amusement ride",
                            "points":  3
                        },
                        {
                            "text":  "driver's seat/freeway",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150671,
        "question":  "At the supermarket, name a food that's too cold to steal by hiding it in your underwear.",
        "answers":  [
                        {
                            "text":  "ice cream/popsicles",
                            "points":  58
                        },
                        {
                            "text":  "meat/poultry",
                            "points":  21
                        },
                        {
                            "text":  "frozen veggies",
                            "points":  5
                        },
                        {
                            "text":  "frozen pizza",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  150672,
        "question":  "We asked 100 married men... Name the last place you want to go to on the weekend.",
        "answers":  [
                        {
                            "text":  "store/mall",
                            "points":  52
                        },
                        {
                            "text":  "work",
                            "points":  19
                        },
                        {
                            "text":  "in-laws'",
                            "points":  15
                        },
                        {
                            "text":  "bar/nightclub",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150673,
        "question":  "Name someone that you have to pretend to like whether you do or not.",
        "answers":  [
                        {
                            "text":  "boss/coworker",
                            "points":  42
                        },
                        {
                            "text":  "family/in-law",
                            "points":  37
                        },
                        {
                            "text":  "politician",
                            "points":  7
                        },
                        {
                            "text":  "teacher",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150674,
        "question":  "Name an occasion when you might be asked to get up and say a few words.",
        "answers":  [
                        {
                            "text":  "wedding",
                            "points":  42
                        },
                        {
                            "text":  "funeral/wake",
                            "points":  37
                        },
                        {
                            "text":  "retirement",
                            "points":  6
                        },
                        {
                            "text":  "church service",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150675,
        "question":  "Name someone that if you could read their mind, it sure would cut down on arguments.",
        "answers":  [
                        {
                            "text":  "spouse/mate",
                            "points":  74
                        },
                        {
                            "text":  "mom/dad",
                            "points":  5
                        },
                        {
                            "text":  "sibling",
                            "points":  5
                        },
                        {
                            "text":  "boss",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150676,
        "question":  "Name a profession where you'd hate to be their very first customer.",
        "answers":  [
                        {
                            "text":  "surgeon/dentist",
                            "points":  68
                        },
                        {
                            "text":  "hairstylist",
                            "points":  11
                        },
                        {
                            "text":  "undertaker",
                            "points":  6
                        },
                        {
                            "text":  "tattoo artist",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150677,
        "question":  "Name something specific you stop doing when you see the boss is looking at you.",
        "answers":  [
                        {
                            "text":  "using phone/web",
                            "points":  68
                        },
                        {
                            "text":  "snoozing",
                            "points":  10
                        },
                        {
                            "text":  "eat'g/chew'g gum",
                            "points":  6
                        },
                        {
                            "text":  "picking nose",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150678,
        "question":  "Fill in the blank: All people should have a second ______.",
        "answers":  [
                        {
                            "text":  "chance",
                            "points":  67
                        },
                        {
                            "text":  "car",
                            "points":  11
                        },
                        {
                            "text":  "job/income",
                            "points":  7
                        },
                        {
                            "text":  "life",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150679,
        "question":  "Snoop Dogg might never go anywhere without his what?",
        "answers":  [
                        {
                            "text":  "blunt/supplies",
                            "points":  67
                        },
                        {
                            "text":  "posse/security",
                            "points":  10
                        },
                        {
                            "text":  "jewelry/chains",
                            "points":  6
                        },
                        {
                            "text":  "sunglasses",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  150680,
        "question":  "Name something you wouldn't want to put in your mouth after it's been in someone else's.",
        "answers":  [
                        {
                            "text":  "gum/candy/food",
                            "points":  66
                        },
                        {
                            "text":  "toothbrush",
                            "points":  13
                        },
                        {
                            "text":  "anything",
                            "points":  6
                        },
                        {
                            "text":  "cigarette",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150681,
        "question":  "Fill in the blank: You should never go to bed ______.",
        "answers":  [
                        {
                            "text":  "angry",
                            "points":  57
                        },
                        {
                            "text":  "hungry/thirsty",
                            "points":  21
                        },
                        {
                            "text":  "w/o brushing teeth",
                            "points":  5
                        },
                        {
                            "text":  "sad",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  150682,
        "question":  "If you had a lot of money, who would be a lot nicer to you?",
        "answers":  [
                        {
                            "text":  "spouse/family",
                            "points":  49
                        },
                        {
                            "text":  "everyone",
                            "points":  25
                        },
                        {
                            "text":  "friends",
                            "points":  11
                        },
                        {
                            "text":  "boss/coworker",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150683,
        "question":  "If you're driving in the country, name an animal you might have to share the road with.",
        "answers":  [
                        {
                            "text":  "deer",
                            "points":  49
                        },
                        {
                            "text":  "cow",
                            "points":  23
                        },
                        {
                            "text":  "horse",
                            "points":  14
                        },
                        {
                            "text":  "sheep",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150684,
        "question":  "Name a place where you might be in hot water.",
        "answers":  [
                        {
                            "text":  "spa/hot tub",
                            "points":  48
                        },
                        {
                            "text":  "shower/bath",
                            "points":  24
                        },
                        {
                            "text":  "hot springs",
                            "points":  11
                        },
                        {
                            "text":  "work",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  150685,
        "question":  "The good news: you started a new job. The bad news: your desk is right next to what?",
        "answers":  [
                        {
                            "text":  "the crapper",
                            "points":  44
                        },
                        {
                            "text":  "the boss",
                            "points":  34
                        },
                        {
                            "text":  "kitchen/water cooler",
                            "points":  7
                        },
                        {
                            "text":  "copier/printer",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150686,
        "question":  "After a divorce, what might a woman throw into the fireplace and laugh while it burns?",
        "answers":  [
                        {
                            "text":  "marriage license",
                            "points":  35
                        },
                        {
                            "text":  "pics",
                            "points":  35
                        },
                        {
                            "text":  "clothes/dress",
                            "points":  15
                        },
                        {
                            "text":  "his sports equip.",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150687,
        "question":  "Name someone who looks at you like a human ATM machine.",
        "answers":  [
                        {
                            "text":  "kids/grandkids",
                            "points":  69
                        },
                        {
                            "text":  "spouse/mate",
                            "points":  12
                        },
                        {
                            "text":  "mooch friend",
                            "points":  3
                        },
                        {
                            "text":  "irs/uncle sam",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150688,
        "question":  "Name someone who might tell you to put your hands in the air.",
        "answers":  [
                        {
                            "text":  "the po-po",
                            "points":  65
                        },
                        {
                            "text":  "robber",
                            "points":  10
                        },
                        {
                            "text":  "dj",
                            "points":  8
                        },
                        {
                            "text":  "singer/springsteen",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150689,
        "question":  "We asked 100 women... Before you marry a man, you might like to see a copy of his what?",
        "answers":  [
                        {
                            "text":  "finances/fico",
                            "points":  58
                        },
                        {
                            "text":  "birth certificate",
                            "points":  13
                        },
                        {
                            "text":  "divorce papers",
                            "points":  8
                        },
                        {
                            "text":  "criminal record",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  150690,
        "question":  "Fill in the blank: Sleep in the ______.",
        "answers":  [
                        {
                            "text":  "nude/buff",
                            "points":  55
                        },
                        {
                            "text":  "bed/bedroom",
                            "points":  23
                        },
                        {
                            "text":  "car",
                            "points":  5
                        },
                        {
                            "text":  "dark",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150691,
        "question":  "Name something or someone that's made of dough.",
        "answers":  [
                        {
                            "text":  "pillsbury doughboy",
                            "points":  48
                        },
                        {
                            "text":  "bread/roll",
                            "points":  28
                        },
                        {
                            "text":  "cookie/gingerbread",
                            "points":  6
                        },
                        {
                            "text":  "pizza",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  150692,
        "question":  "Name something on a golf course that an alligator might eat.",
        "answers":  [
                        {
                            "text":  "golfer/person",
                            "points":  40
                        },
                        {
                            "text":  "golf ball",
                            "points":  37
                        },
                        {
                            "text":  "bird/duck",
                            "points":  7
                        },
                        {
                            "text":  "rabbit",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150693,
        "question":  "Name a place that plain people go to to become beautiful people.",
        "answers":  [
                        {
                            "text":  "beauty salon",
                            "points":  36
                        },
                        {
                            "text":  "spa/for weight loss",
                            "points":  24
                        },
                        {
                            "text":  "plastic surgeon",
                            "points":  23
                        },
                        {
                            "text":  "dark bar/club",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150694,
        "question":  "Fill in the blank: Never wake a sleeping ______.",
        "answers":  [
                        {
                            "text":  "bear",
                            "points":  33
                        },
                        {
                            "text":  "baby/child",
                            "points":  25
                        },
                        {
                            "text":  "dog",
                            "points":  21
                        },
                        {
                            "text":  "giant",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  150695,
        "question":  "Name a board game that you've almost come to blows with the person you played against.",
        "answers":  [
                        {
                            "text":  "monopoly",
                            "points":  71
                        },
                        {
                            "text":  "scrabble",
                            "points":  7
                        },
                        {
                            "text":  "chess",
                            "points":  4
                        },
                        {
                            "text":  "risk",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150696,
        "question":  "There's a million-to-one chance that what will happen to you?",
        "answers":  [
                        {
                            "text":  "win lotto/get rich",
                            "points":  64
                        },
                        {
                            "text":  "struck by lightning",
                            "points":  16
                        },
                        {
                            "text":  "drop dead today",
                            "points":  4
                        },
                        {
                            "text":  "marry/a 4th time",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  150697,
        "question":  "It's 11:59 p.m. on New Year's Eve. The countdown begins. What do you reach for?",
        "answers":  [
                        {
                            "text":  "bubbly/beverage",
                            "points":  49
                        },
                        {
                            "text":  "spouse/mate",
                            "points":  29
                        },
                        {
                            "text":  "the remote",
                            "points":  5
                        },
                        {
                            "text":  "phone",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150698,
        "question":  "Name someone who gets paid to cut things.",
        "answers":  [
                        {
                            "text":  "barber/beautician",
                            "points":  47
                        },
                        {
                            "text":  "butcher",
                            "points":  25
                        },
                        {
                            "text":  "gardener",
                            "points":  8
                        },
                        {
                            "text":  "tailor/seamstress",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  150699,
        "question":  "Name an animal that if it sat on you, it would probably kill you.",
        "answers":  [
                        {
                            "text":  "elephant",
                            "points":  72
                        },
                        {
                            "text":  "lion",
                            "points":  6
                        },
                        {
                            "text":  "snake/cobra",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150700,
        "question":  "Name something a pirate might be embarrassed to admit he's afraid of.",
        "answers":  [
                        {
                            "text":  "water",
                            "points":  69
                        },
                        {
                            "text":  "parrots/birds",
                            "points":  7
                        },
                        {
                            "text":  "sharks",
                            "points":  5
                        },
                        {
                            "text":  "ships",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150701,
        "question":  "It gives a man confidence if he's got a lot of what?",
        "answers":  [
                        {
                            "text":  "money",
                            "points":  62
                        },
                        {
                            "text":  "hair",
                            "points":  12
                        },
                        {
                            "text":  "muscles/strength",
                            "points":  8
                        },
                        {
                            "text":  "power/authority",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150702,
        "question":  "Name a place a man goes after a divorce where they'd say, \"Long time, no see.\"",
        "answers":  [
                        {
                            "text":  "bar/nightclub",
                            "points":  58
                        },
                        {
                            "text":  "strip joint",
                            "points":  19
                        },
                        {
                            "text":  "las vegas/casino",
                            "points":  4
                        },
                        {
                            "text":  "his ex's",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150703,
        "question":  "Besides Disneyland, what do tourists want to see when they visit California?",
        "answers":  [
                        {
                            "text":  "ocean/beach",
                            "points":  49
                        },
                        {
                            "text":  "hollywood/sign",
                            "points":  26
                        },
                        {
                            "text":  "golden gate bridge",
                            "points":  6
                        },
                        {
                            "text":  "celebs",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150704,
        "question":  "Life can be more enjoyable when you turn on what?",
        "answers":  [
                        {
                            "text":  "music/radio",
                            "points":  49
                        },
                        {
                            "text":  "tv/family feud",
                            "points":  21
                        },
                        {
                            "text":  "mate/kinky lover",
                            "points":  11
                        },
                        {
                            "text":  "\"the charm\"",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150705,
        "question":  "Name something you might miss while you're traveling overseas.",
        "answers":  [
                        {
                            "text":  "my home/bed",
                            "points":  38
                        },
                        {
                            "text":  "family/spouse",
                            "points":  36
                        },
                        {
                            "text":  "good eats/starbucks",
                            "points":  7
                        },
                        {
                            "text":  "tv show/c-span",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150706,
        "question":  "Name something at church a man might have in his jacket pocket in case he gets bored.",
        "answers":  [
                        {
                            "text":  "phone",
                            "points":  65
                        },
                        {
                            "text":  "candy/mints",
                            "points":  7
                        },
                        {
                            "text":  "book/mag",
                            "points":  7
                        },
                        {
                            "text":  "radio/ipod",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  150707,
        "question":  "Name someone a billionaire hires who his wife makes him choose the ugliest one possible.",
        "answers":  [
                        {
                            "text":  "assistant/reception",
                            "points":  36
                        },
                        {
                            "text":  "maid",
                            "points":  21
                        },
                        {
                            "text":  "nanny/babysitter",
                            "points":  19
                        },
                        {
                            "text":  "masseuse",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  150708,
        "question":  "Which country's schoolchildren are the smartest in the world?",
        "answers":  [
                        {
                            "text":  "japan",
                            "points":  34
                        },
                        {
                            "text":  "china",
                            "points":  31
                        },
                        {
                            "text":  "united states",
                            "points":  14
                        },
                        {
                            "text":  "india",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  150709,
        "question":  "Susan said, \"When it comes to my body, I got dad's big nose and mom's big\" what?",
        "answers":  [
                        {
                            "text":  "juicy peach booty",
                            "points":  51
                        },
                        {
                            "text":  "mouth/rabbit teeth",
                            "points":  19
                        },
                        {
                            "text":  "chest",
                            "points":  9
                        },
                        {
                            "text":  "heart",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150710,
        "question":  "Name something at a bakery that starts with the letter B.",
        "answers":  [
                        {
                            "text":  "bread",
                            "points":  33
                        },
                        {
                            "text":  "bun",
                            "points":  24
                        },
                        {
                            "text":  "bagel",
                            "points":  21
                        },
                        {
                            "text":  "butter",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  150711,
        "question":  "Tell me a place you find yourself when you make bad choices.",
        "answers":  [
                        {
                            "text":  "jail",
                            "points":  31
                        },
                        {
                            "text":  "bar/nightclub",
                            "points":  30
                        },
                        {
                            "text":  "home/in fridge",
                            "points":  15
                        },
                        {
                            "text":  "casino/vegas",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  150712,
        "question":  "Name someone who always seems to blame you for their own mistakes.",
        "answers":  [
                        {
                            "text":  "boss/coworker",
                            "points":  31
                        },
                        {
                            "text":  "spouse/mate",
                            "points":  29
                        },
                        {
                            "text":  "my kids",
                            "points":  16
                        },
                        {
                            "text":  "politicians",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  150713,
        "question":  "Name a singer in heaven who probably made 75 million dollars this year.",
        "answers":  [
                        {
                            "text":  "michael jackson",
                            "points":  47
                        },
                        {
                            "text":  "elvis presley",
                            "points":  19
                        },
                        {
                            "text":  "prince",
                            "points":  10
                        },
                        {
                            "text":  "whitney houston",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  150714,
        "question":  "Name something you don't like to get too close to.",
        "answers":  [
                        {
                            "text":  "critters",
                            "points":  43
                        },
                        {
                            "text":  "people/sourpusses",
                            "points":  26
                        },
                        {
                            "text":  "fire/flames",
                            "points":  10
                        },
                        {
                            "text":  "an edge/cliff",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150715,
        "question":  "Name a former president who you think would look the best in a thong.",
        "answers":  [
                        {
                            "text":  "barack obama",
                            "points":  40
                        },
                        {
                            "text":  "john f. kennedy",
                            "points":  24
                        },
                        {
                            "text":  "bill clinton",
                            "points":  13
                        },
                        {
                            "text":  "george washington",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  150716,
        "question":  "We asked 100 married women... Name a specific question your husband is smart enough to never ask you.",
        "answers":  [
                        {
                            "text":  "weight/gain a few?",
                            "points":  61
                        },
                        {
                            "text":  "pregnant yet?",
                            "points":  9
                        },
                        {
                            "text":  "mow the lawn?",
                            "points":  7
                        },
                        {
                            "text":  "# of lovers/today",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150717,
        "question":  "Name something specific someone might be referring to when they say \"Stick it out.\"",
        "answers":  [
                        {
                            "text":  "tongue",
                            "points":  53
                        },
                        {
                            "text":  "job/basic training",
                            "points":  14
                        },
                        {
                            "text":  "pecs/bazookas",
                            "points":  7
                        },
                        {
                            "text":  "school",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  150718,
        "question":  "In the waiting room in heaven, name something they probably offer you while you're waiting.",
        "answers":  [
                        {
                            "text":  "drink/boone's farm",
                            "points":  47
                        },
                        {
                            "text":  "angel food/snack",
                            "points":  21
                        },
                        {
                            "text":  "bible/mag",
                            "points":  7
                        },
                        {
                            "text":  "seat/on cloud",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  150719,
        "question":  "Name something you'd buy if money grew on trees.",
        "answers":  [
                        {
                            "text":  "house/land",
                            "points":  41
                        },
                        {
                            "text":  "hot car/lambo",
                            "points":  24
                        },
                        {
                            "text":  "yacht/boat",
                            "points":  8
                        },
                        {
                            "text":  "more money trees!",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  150720,
        "question":  "Name something you keep locked up.",
        "answers":  [
                        {
                            "text":  "gun",
                            "points":  39
                        },
                        {
                            "text":  "money/coins",
                            "points":  25
                        },
                        {
                            "text":  "jewelry",
                            "points":  10
                        },
                        {
                            "text":  "passport",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  150721,
        "question":  "Name someone you'd hate to see walk into the room right as you're making fun of them.",
        "answers":  [
                        {
                            "text":  "boss/coworker",
                            "points":  44
                        },
                        {
                            "text":  "bae/lame-o lover",
                            "points":  18
                        },
                        {
                            "text":  "friend",
                            "points":  11
                        },
                        {
                            "text":  "in-law",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  150722,
        "question":  "Tell me the name of an animal you might call one of your friends who's nuts.",
        "answers":  [
                        {
                            "text":  "ape/monkey",
                            "points":  42
                        },
                        {
                            "text":  "squirrel",
                            "points":  29
                        },
                        {
                            "text":  "loon",
                            "points":  5
                        },
                        {
                            "text":  "bat",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150723,
        "question":  "Grandma shocked us by announcing she's training to become a professional what?",
        "answers":  [
                        {
                            "text":  "wrestler/boxer",
                            "points":  48
                        },
                        {
                            "text":  "stripper/dancer",
                            "points":  23
                        },
                        {
                            "text":  "driver/nascar",
                            "points":  5
                        },
                        {
                            "text":  "singer",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  150724,
        "question":  "Name a TV host who always makes you laugh out loud.",
        "answers":  [
                        {
                            "text":  "steve harvey",
                            "points":  45
                        },
                        {
                            "text":  "jimmy fallon",
                            "points":  13
                        },
                        {
                            "text":  "ellen",
                            "points":  13
                        },
                        {
                            "text":  "drew carey",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  150725,
        "question":  "Tell me the most fun U.S. city to live in.",
        "answers":  [
                        {
                            "text":  "las vegas",
                            "points":  26
                        },
                        {
                            "text":  "new york city",
                            "points":  22
                        },
                        {
                            "text":  "orlando",
                            "points":  16
                        },
                        {
                            "text":  "miami",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  150726,
        "question":  "Name something you might do a lot more of if you didn't have to work for a living.",
        "answers":  [
                        {
                            "text":  "travel",
                            "points":  31
                        },
                        {
                            "text":  "sleep",
                            "points":  24
                        },
                        {
                            "text":  "get sloshed/bars",
                            "points":  7
                        },
                        {
                            "text":  "sports/fish",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  150727,
        "question":  "Name an occupation that you think should be paid twice what they are now.",
        "answers":  [
                        {
                            "text":  "teacher",
                            "points":  48
                        },
                        {
                            "text":  "police officer",
                            "points":  8
                        },
                        {
                            "text":  "stay-at-home parent",
                            "points":  5
                        },
                        {
                            "text":  "emt/paramedic",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150728,
        "question":  "Name something that you'd hate to find out stopped working right when you need it.",
        "answers":  [
                        {
                            "text":  "car/brakes",
                            "points":  39
                        },
                        {
                            "text":  "toilet/after a dump",
                            "points":  12
                        },
                        {
                            "text":  "phone",
                            "points":  10
                        },
                        {
                            "text":  "stove/oven",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150729,
        "question":  "Name something of her cheating husband's that a wife might give to her brother.",
        "answers":  [
                        {
                            "text":  "clothes/armani suit",
                            "points":  26
                        },
                        {
                            "text":  "rolex/jewelry",
                            "points":  16
                        },
                        {
                            "text":  "car/truck",
                            "points":  11
                        },
                        {
                            "text":  "his ho's phone #",
                            "points":  11
                        }
                    ]
    },
    {
        "id":  150730,
        "question":  "If you had a big tomb like King Tut, what would you be buried with?",
        "answers":  [
                        {
                            "text":  "my car/truck",
                            "points":  22
                        },
                        {
                            "text":  "my dog/pets",
                            "points":  21
                        },
                        {
                            "text":  "my spouse/family",
                            "points":  13
                        },
                        {
                            "text":  "money/gold",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  150731,
        "question":  "Name a place you've made love and felt guilty about it.",
        "answers":  [
                        {
                            "text":  "car",
                            "points":  22
                        },
                        {
                            "text":  "family's house/bed",
                            "points":  22
                        },
                        {
                            "text":  "park/playground",
                            "points":  7
                        },
                        {
                            "text":  "kitchen/table",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  150732,
        "question":  "Name something some people have a hard time turning on.",
        "answers":  [
                        {
                            "text":  "each other",
                            "points":  27
                        },
                        {
                            "text":  "tv/remote",
                            "points":  12
                        },
                        {
                            "text":  "dvd player/dvr",
                            "points":  9
                        },
                        {
                            "text":  "lawn mower",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  150733,
        "question":  "Name some personal information you'd be surprised to see on someone's tombstone.",
        "answers":  [
                        {
                            "text":  "cheater",
                            "points":  19
                        },
                        {
                            "text":  "weight/300 lbs.",
                            "points":  13
                        },
                        {
                            "text":  "social security #",
                            "points":  10
                        },
                        {
                            "text":  "all 3 spouses",
                            "points":  9
                        }
                    ]
    }
];
