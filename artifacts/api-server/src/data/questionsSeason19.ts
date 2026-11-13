import type { SurveyQuestion } from "./questions.js";

// Season 19 set: a separate question set from the main bank in questions.ts.
// Boards from Family Feud season 19, as transcribed at
// https://mstiescott.neocities.org/feud19 (crawled 2026-11-13).
// Ids start at 180001 (each season has its own block of 10,000), so they
// never clash with the main bank (1-8782), AI questions (9000+) or other
// seasons. One-answer boards are left out.
// Not used in gameplay yet.
export const SEASON19_SET = "season19";
export const SEASON19_ID_START = 180001;

export function isSeason19Question(id: number): boolean {
  return id >= SEASON19_ID_START && id < SEASON19_ID_START + 10000;
}

export const season19Questions: SurveyQuestion[] = [
    {
        "id":  180001,
        "question":  "Name a part of his inflatable doll that a man might wish he could inflate even bigger.",
        "answers":  [
                        {
                            "text":  "jugs",
                            "points":  79
                        },
                        {
                            "text":  "bootay",
                            "points":  7
                        },
                        {
                            "text":  "muscles/strong arms",
                            "points":  3
                        },
                        {
                            "text":  "head/brain",
                            "points":  3
                        },
                        {
                            "text":  "eyes",
                            "points":  2
                        },
                        {
                            "text":  "hands",
                            "points":  2
                        },
                        {
                            "text":  "dong",
                            "points":  2
                        },
                        {
                            "text":  "lips/mouth",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180002,
        "question":  "Name something specific that's bitten you in the bedroom.",
        "answers":  [
                        {
                            "text":  "spider",
                            "points":  32
                        },
                        {
                            "text":  "mosquito",
                            "points":  27
                        },
                        {
                            "text":  "my pervy lover",
                            "points":  23
                        },
                        {
                            "text":  "flea",
                            "points":  9
                        },
                        {
                            "text":  "bedbug",
                            "points":  3
                        },
                        {
                            "text":  "flies/circl'g my butt",
                            "points":  2
                        },
                        {
                            "text":  "ant",
                            "points":  2
                        },
                        {
                            "text":  "pussycat",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180003,
        "question":  "We asked 100 married women... Name something you leave on during sex so you don't get bored.",
        "answers":  [
                        {
                            "text":  "tv/wolf blitzer",
                            "points":  32
                        },
                        {
                            "text":  "music/radio",
                            "points":  25
                        },
                        {
                            "text":  "clothes/heels",
                            "points":  17
                        },
                        {
                            "text":  "light/lamp",
                            "points":  16
                        },
                        {
                            "text":  "my imagination",
                            "points":  3
                        },
                        {
                            "text":  "jewelry/watch",
                            "points":  2
                        },
                        {
                            "text":  "vibrator",
                            "points":  2
                        },
                        {
                            "text":  "phone/tinder",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180004,
        "question":  "We asked 100 married men... Name something of your wife's that's thicker than yours.",
        "answers":  [
                        {
                            "text":  "4-foot fanny",
                            "points":  32
                        },
                        {
                            "text":  "luxurious locks",
                            "points":  21
                        },
                        {
                            "text":  "milk wagons",
                            "points":  16
                        },
                        {
                            "text":  "waist/belly",
                            "points":  8
                        },
                        {
                            "text":  "hips",
                            "points":  7
                        },
                        {
                            "text":  "thunder thighs",
                            "points":  7
                        },
                        {
                            "text":  "luscious lips",
                            "points":  4
                        },
                        {
                            "text":  "her wallet",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180005,
        "question":  "Name a nighttime ritual a 30-year-old mama's boy might still do with his mother.",
        "answers":  [
                        {
                            "text":  "kiss/hug",
                            "points":  26
                        },
                        {
                            "text":  "tuck into bed",
                            "points":  22
                        },
                        {
                            "text":  "call/nite/love ya",
                            "points":  12
                        },
                        {
                            "text":  "spoon/sleep with",
                            "points":  9
                        },
                        {
                            "text":  "dine/snack",
                            "points":  9
                        },
                        {
                            "text":  "pray/now i lay me...",
                            "points":  7
                        },
                        {
                            "text":  "tv/care bears",
                            "points":  7
                        },
                        {
                            "text":  "bedtime story",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  180006,
        "question":  "The bad news: You got a snake bite and someone needs to suck out the poison. The worse news: It's on your what?",
        "answers":  [
                        {
                            "text":  "bean blaster",
                            "points":  65
                        },
                        {
                            "text":  "boob",
                            "points":  11
                        },
                        {
                            "text":  "foot/crusty toe",
                            "points":  7
                        },
                        {
                            "text":  "hairy manilow",
                            "points":  6
                        },
                        {
                            "text":  "nose",
                            "points":  3
                        },
                        {
                            "text":  "fat gut",
                            "points":  2
                        },
                        {
                            "text":  "armpit",
                            "points":  2
                        },
                        {
                            "text":  "leg/thigh",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180007,
        "question":  "Name the worst thing to find in the hotel room you're in.",
        "answers":  [
                        {
                            "text":  "bugs/bedbugs",
                            "points":  56
                        },
                        {
                            "text":  "used rubbers",
                            "points":  18
                        },
                        {
                            "text":  "rotting corpse",
                            "points":  6
                        },
                        {
                            "text":  "rat/mouse",
                            "points":  6
                        },
                        {
                            "text":  "dirty sheets",
                            "points":  5
                        },
                        {
                            "text":  "drugs/crack pipe",
                            "points":  3
                        },
                        {
                            "text":  "pair of undies",
                            "points":  2
                        },
                        {
                            "text":  "person/slutty wife",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180008,
        "question":  "We asked 100 single women... If you were blindfolded, name something you could tell about someone by just a kiss.",
        "answers":  [
                        {
                            "text":  "hygiene/fresh breath",
                            "points":  50
                        },
                        {
                            "text":  "who it is",
                            "points":  14
                        },
                        {
                            "text":  "if they smoke",
                            "points":  11
                        },
                        {
                            "text":  "passion/good kisser",
                            "points":  10
                        },
                        {
                            "text":  "mustache/shaved",
                            "points":  7
                        },
                        {
                            "text":  "their confidence",
                            "points":  2
                        },
                        {
                            "text":  "if they have teeth",
                            "points":  2
                        },
                        {
                            "text":  "if gentle/rough",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180009,
        "question":  "Name something a police officer at a nudist colony might be wearing.",
        "answers":  [
                        {
                            "text":  "gun belt/holster",
                            "points":  43
                        },
                        {
                            "text":  "badge",
                            "points":  36
                        },
                        {
                            "text":  "hat",
                            "points":  9
                        },
                        {
                            "text":  "handcuffs",
                            "points":  2
                        },
                        {
                            "text":  "sunglasses",
                            "points":  2
                        },
                        {
                            "text":  "a smile",
                            "points":  2
                        },
                        {
                            "text":  "whistle",
                            "points":  2
                        },
                        {
                            "text":  "boots",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180010,
        "question":  "What do you think Steve Harvey's wife would say is the best thing about him?",
        "answers":  [
                        {
                            "text":  "humor/personality",
                            "points":  42
                        },
                        {
                            "text":  "bae is ballin'!",
                            "points":  24
                        },
                        {
                            "text":  "smile/those xl lips",
                            "points":  19
                        },
                        {
                            "text":  "that lickable head",
                            "points":  4
                        },
                        {
                            "text":  "his laugh",
                            "points":  3
                        },
                        {
                            "text":  "his fine threads",
                            "points":  2
                        },
                        {
                            "text":  "sexy stache",
                            "points":  2
                        },
                        {
                            "text":  "character/heart",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180011,
        "question":  "Tell me the name of one of Santa's reindeer a male exotic dancer might use as his stage name.",
        "answers":  [
                        {
                            "text":  "prancer",
                            "points":  33
                        },
                        {
                            "text":  "blitzen",
                            "points":  12
                        },
                        {
                            "text":  "vixen",
                            "points":  12
                        },
                        {
                            "text":  "dancer",
                            "points":  12
                        },
                        {
                            "text":  "cupid",
                            "points":  8
                        },
                        {
                            "text":  "dasher",
                            "points":  8
                        },
                        {
                            "text":  "rudolph",
                            "points":  8
                        },
                        {
                            "text":  "comet",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180012,
        "question":  "We asked 100 women... If you were on a date with Steve Harvey, name someone you'd love to run into.",
        "answers":  [
                        {
                            "text":  "my ex",
                            "points":  30
                        },
                        {
                            "text":  "my friends",
                            "points":  24
                        },
                        {
                            "text":  "steve's wife",
                            "points":  17
                        },
                        {
                            "text":  "celeb/denzel",
                            "points":  17
                        },
                        {
                            "text":  "my spouse/mate",
                            "points":  4
                        },
                        {
                            "text":  "my mom",
                            "points":  2
                        },
                        {
                            "text":  "my sis/brother",
                            "points":  2
                        },
                        {
                            "text":  "the paparazzi",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180013,
        "question":  "Name something specific of his wife's a man might wear under his clothes to feel sexy.",
        "answers":  [
                        {
                            "text":  "panties/thong",
                            "points":  67
                        },
                        {
                            "text":  "bra",
                            "points":  9
                        },
                        {
                            "text":  "hose/knee-hi socks",
                            "points":  6
                        },
                        {
                            "text":  "perfume",
                            "points":  5
                        },
                        {
                            "text":  "necklace",
                            "points":  4
                        },
                        {
                            "text":  "lotion",
                            "points":  2
                        },
                        {
                            "text":  "garter/garter belt",
                            "points":  2
                        },
                        {
                            "text":  "shirt/tank",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180014,
        "question":  "Name something the Pillsbury Doughboy might complain about to his psychiatrist.",
        "answers":  [
                        {
                            "text":  "poked in belly",
                            "points":  64
                        },
                        {
                            "text":  "being pudgy",
                            "points":  17
                        },
                        {
                            "text":  "baked/heat",
                            "points":  4
                        },
                        {
                            "text":  "being \"a softy\"",
                            "points":  4
                        },
                        {
                            "text":  "commercials/fame",
                            "points":  2
                        },
                        {
                            "text":  "his giggle/voice",
                            "points":  2
                        },
                        {
                            "text":  "being eaten",
                            "points":  2
                        },
                        {
                            "text":  "being nude",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180015,
        "question":  "If Steve Harvey were the next James Bond, what would he do better than the previous Bonds?",
        "answers":  [
                        {
                            "text":  "make us laugh",
                            "points":  61
                        },
                        {
                            "text":  "dress/wear suit",
                            "points":  12
                        },
                        {
                            "text":  "smile",
                            "points":  9
                        },
                        {
                            "text":  "kiss",
                            "points":  5
                        },
                        {
                            "text":  "sex/make toes curl",
                            "points":  3
                        },
                        {
                            "text":  "talk smack/argue",
                            "points":  3
                        },
                        {
                            "text":  "dance",
                            "points":  2
                        },
                        {
                            "text":  "run from danger",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180016,
        "question":  "We asked 100 men... Name a reason you'd make a very unattractive woman.",
        "answers":  [
                        {
                            "text":  "hairy/beard",
                            "points":  59
                        },
                        {
                            "text":  "thinning hair/bald",
                            "points":  11
                        },
                        {
                            "text":  "i'm 300 lbs.",
                            "points":  10
                        },
                        {
                            "text":  "i'm too short",
                            "points":  5
                        },
                        {
                            "text":  "bro-ish personality",
                            "points":  4
                        },
                        {
                            "text":  "scrawny legs",
                            "points":  3
                        },
                        {
                            "text":  "big/ugly feet",
                            "points":  3
                        },
                        {
                            "text":  "zits",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180017,
        "question":  "We asked 100 married men... Not that she would, but if your wife ever killed you, how might she do it?",
        "answers":  [
                        {
                            "text":  "poison/my food",
                            "points":  54
                        },
                        {
                            "text":  "pump full of lead",
                            "points":  14
                        },
                        {
                            "text":  "stab me",
                            "points":  12
                        },
                        {
                            "text":  "smother/with boobs",
                            "points":  5
                        },
                        {
                            "text":  "strangle me",
                            "points":  5
                        },
                        {
                            "text":  "run me over",
                            "points":  3
                        },
                        {
                            "text":  "frying pan/to face",
                            "points":  2
                        },
                        {
                            "text":  "talk me to death",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180018,
        "question":  "If a female squirrel could talk, she might tell you that a male squirrel's package is about the size of what kind of nut?",
        "answers":  [
                        {
                            "text":  "peanut",
                            "points":  51
                        },
                        {
                            "text":  "walnut",
                            "points":  16
                        },
                        {
                            "text":  "acorn",
                            "points":  14
                        },
                        {
                            "text":  "pine nut",
                            "points":  5
                        },
                        {
                            "text":  "pistachio",
                            "points":  4
                        },
                        {
                            "text":  "pecan",
                            "points":  3
                        },
                        {
                            "text":  "almond",
                            "points":  2
                        },
                        {
                            "text":  "hazelnut",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180019,
        "question":  "If a little kid asked the bank for a loan, what might he put up as collateral?",
        "answers":  [
                        {
                            "text":  "bike/big wheel",
                            "points":  42
                        },
                        {
                            "text":  "toy/wagon",
                            "points":  37
                        },
                        {
                            "text":  "mom/dad",
                            "points":  5
                        },
                        {
                            "text":  "baseball glove",
                            "points":  3
                        },
                        {
                            "text":  "computer",
                            "points":  3
                        },
                        {
                            "text":  "piggy bank/money",
                            "points":  3
                        },
                        {
                            "text":  "pet/frog",
                            "points":  2
                        },
                        {
                            "text":  "comic books",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180020,
        "question":  "We asked 100 married women... If your husband decided he wanted to be a male stripper, what might the women in the audience do during his act?",
        "answers":  [
                        {
                            "text":  "laugh",
                            "points":  39
                        },
                        {
                            "text":  "cheer/whistle",
                            "points":  17
                        },
                        {
                            "text":  "make it rain",
                            "points":  13
                        },
                        {
                            "text":  "leave/bathroom",
                            "points":  11
                        },
                        {
                            "text":  "barf",
                            "points":  5
                        },
                        {
                            "text":  "throw stuff/tomato",
                            "points":  5
                        },
                        {
                            "text":  "pass out",
                            "points":  4
                        },
                        {
                            "text":  "rush the stage",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180021,
        "question":  "We asked 100 men... Name something about a woman that makes her the one.",
        "answers":  [
                        {
                            "text":  "personality/'tude",
                            "points":  33
                        },
                        {
                            "text":  "face/moist lips",
                            "points":  24
                        },
                        {
                            "text":  "character/values",
                            "points":  15
                        },
                        {
                            "text":  "babealicious bod",
                            "points":  8
                        },
                        {
                            "text":  "love",
                            "points":  7
                        },
                        {
                            "text":  "she's brainy",
                            "points":  4
                        },
                        {
                            "text":  "she can cook",
                            "points":  4
                        },
                        {
                            "text":  "black belt in booty",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180022,
        "question":  "What might a horse trainer use on a horse that she'd also use on her man in the bedroom?",
        "answers":  [
                        {
                            "text":  "crop/whip",
                            "points":  69
                        },
                        {
                            "text":  "brush",
                            "points":  7
                        },
                        {
                            "text":  "saddle",
                            "points":  5
                        },
                        {
                            "text":  "harness/collar",
                            "points":  3
                        },
                        {
                            "text":  "blinders",
                            "points":  3
                        },
                        {
                            "text":  "spurs",
                            "points":  3
                        },
                        {
                            "text":  "bridle/reins/bit",
                            "points":  3
                        },
                        {
                            "text":  "balm/jelly/oil",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180023,
        "question":  "Name something a pothead really loves to do right after smoking pot.",
        "answers":  [
                        {
                            "text":  "munch/eat doritos",
                            "points":  66
                        },
                        {
                            "text":  "sleep",
                            "points":  12
                        },
                        {
                            "text":  "light another",
                            "points":  5
                        },
                        {
                            "text":  "sugar the cookie",
                            "points":  4
                        },
                        {
                            "text":  "drink/beer",
                            "points":  3
                        },
                        {
                            "text":  "tv/nature shows",
                            "points":  2
                        },
                        {
                            "text":  "laugh",
                            "points":  2
                        },
                        {
                            "text":  "music/sing kumbaya",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180024,
        "question":  "Name a reason a woman hasn't seen her husband in a year.",
        "answers":  [
                        {
                            "text":  "deployment",
                            "points":  57
                        },
                        {
                            "text":  "job/space station",
                            "points":  11
                        },
                        {
                            "text":  "in prison",
                            "points":  10
                        },
                        {
                            "text":  "legally separated",
                            "points":  7
                        },
                        {
                            "text":  "he's dead",
                            "points":  4
                        },
                        {
                            "text":  "walked out",
                            "points":  3
                        },
                        {
                            "text":  "she's blind",
                            "points":  2
                        },
                        {
                            "text":  "cheated",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180025,
        "question":  "We asked 100 men... Name something you'd hate for a women to tell you right after you've told her you want to break up.",
        "answers":  [
                        {
                            "text":  "i'm pregnant",
                            "points":  57
                        },
                        {
                            "text":  "won the lotto/rich",
                            "points":  9
                        },
                        {
                            "text":  "cheated/have a guy",
                            "points":  9
                        },
                        {
                            "text":  "i love you",
                            "points":  5
                        },
                        {
                            "text":  "bad in bed",
                            "points":  5
                        },
                        {
                            "text":  "let's be friends",
                            "points":  4
                        },
                        {
                            "text":  "gave you std",
                            "points":  4
                        },
                        {
                            "text":  "good/get lost",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180026,
        "question":  "We asked 100 women... You know a man is just not into you if he does what while you're kissing him?",
        "answers":  [
                        {
                            "text":  "phone/text",
                            "points":  45
                        },
                        {
                            "text":  "pulls/pushes away",
                            "points":  14
                        },
                        {
                            "text":  "eyes open/rolls eyes",
                            "points":  12
                        },
                        {
                            "text":  "checks out babes",
                            "points":  8
                        },
                        {
                            "text":  "doesn't kiss back",
                            "points":  7
                        },
                        {
                            "text":  "watches tv",
                            "points":  5
                        },
                        {
                            "text":  "yawns/nods off",
                            "points":  3
                        },
                        {
                            "text":  "chats with you",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180027,
        "question":  "We asked 100 married women... Name something you wish your hubby would do just in the bathroom, not everywhere he goes.",
        "answers":  [
                        {
                            "text":  "blow butt kisses",
                            "points":  41
                        },
                        {
                            "text":  "pee",
                            "points":  11
                        },
                        {
                            "text":  "blow/pick nose",
                            "points":  10
                        },
                        {
                            "text":  "leave his clothes",
                            "points":  9
                        },
                        {
                            "text":  "spit",
                            "points":  9
                        },
                        {
                            "text":  "brush his teeth",
                            "points":  8
                        },
                        {
                            "text":  "clip his nails",
                            "points":  6
                        },
                        {
                            "text":  "trim/pluck hairs",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180028,
        "question":  "We asked 100 women... Name something that women are better at making than men are.",
        "answers":  [
                        {
                            "text":  "dinner/food",
                            "points":  37
                        },
                        {
                            "text":  "babies",
                            "points":  18
                        },
                        {
                            "text":  "a bed",
                            "points":  10
                        },
                        {
                            "text":  "decisions/plans",
                            "points":  9
                        },
                        {
                            "text":  "a home",
                            "points":  8
                        },
                        {
                            "text":  "conversation",
                            "points":  7
                        },
                        {
                            "text":  "sweet love",
                            "points":  4
                        },
                        {
                            "text":  "quilts/afghans",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180029,
        "question":  "We asked 100 men... Assuming sex is the first thing, what's the second thing you're always thinking about?",
        "answers":  [
                        {
                            "text":  "food/bacon",
                            "points":  27
                        },
                        {
                            "text":  "money/bills",
                            "points":  23
                        },
                        {
                            "text":  "sleep",
                            "points":  15
                        },
                        {
                            "text":  "sex again/babes",
                            "points":  9
                        },
                        {
                            "text":  "work",
                            "points":  8
                        },
                        {
                            "text":  "my health",
                            "points":  5
                        },
                        {
                            "text":  "beer",
                            "points":  5
                        },
                        {
                            "text":  "sports/fishing",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180030,
        "question":  "We asked 100 married women... Name something your husband can be easily replaced by.",
        "answers":  [
                        {
                            "text":  "sexy new boo",
                            "points":  26
                        },
                        {
                            "text":  "handyman/gardener",
                            "points":  17
                        },
                        {
                            "text":  "pet/cute rat",
                            "points":  16
                        },
                        {
                            "text":  "charged-up vibrator",
                            "points":  14
                        },
                        {
                            "text":  "body pillow",
                            "points":  9
                        },
                        {
                            "text":  "robot",
                            "points":  6
                        },
                        {
                            "text":  "money, baby!",
                            "points":  6
                        },
                        {
                            "text":  "computer",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180031,
        "question":  "Name something you'd use as a last resort when you've run out of toilet paper.",
        "answers":  [
                        {
                            "text":  "tissue",
                            "points":  19
                        },
                        {
                            "text":  "newspaper/mag",
                            "points":  17
                        },
                        {
                            "text":  "paper towel",
                            "points":  14
                        },
                        {
                            "text":  "napkin",
                            "points":  11
                        },
                        {
                            "text":  "towel/washcloth",
                            "points":  11
                        },
                        {
                            "text":  "clothes/sock",
                            "points":  9
                        },
                        {
                            "text":  "hand/finger",
                            "points":  9
                        },
                        {
                            "text":  "a leaf",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  180032,
        "question":  "Name a place a woman goes shopping for a piece of man meat.",
        "answers":  [
                        {
                            "text":  "bar/nightclub",
                            "points":  56
                        },
                        {
                            "text":  "the gym",
                            "points":  13
                        },
                        {
                            "text":  "butcher shop",
                            "points":  10
                        },
                        {
                            "text":  "strip joint",
                            "points":  5
                        },
                        {
                            "text":  "grocery store",
                            "points":  5
                        },
                        {
                            "text":  "church",
                            "points":  2
                        },
                        {
                            "text":  "sport'g goods store",
                            "points":  2
                        },
                        {
                            "text":  "deli/restaurant",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180033,
        "question":  "We asked 100 married women... Name something you've had to teach your husband to do.",
        "answers":  [
                        {
                            "text":  "clean/laundry",
                            "points":  53
                        },
                        {
                            "text":  "cook/bake",
                            "points":  20
                        },
                        {
                            "text":  "change diapers",
                            "points":  6
                        },
                        {
                            "text":  "put the seat down",
                            "points":  5
                        },
                        {
                            "text":  "be nice/sensitive",
                            "points":  4
                        },
                        {
                            "text":  "budget",
                            "points":  3
                        },
                        {
                            "text":  "shave my legs",
                            "points":  2
                        },
                        {
                            "text":  "sew",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180034,
        "question":  "We asked 100 men... Fill in the blank: I meant to kiss her on the lips, but accidentally kissed her what?",
        "answers":  [
                        {
                            "text":  "nose/up nostril",
                            "points":  51
                        },
                        {
                            "text":  "chin",
                            "points":  13
                        },
                        {
                            "text":  "cheek",
                            "points":  12
                        },
                        {
                            "text":  "ear",
                            "points":  6
                        },
                        {
                            "text":  "butt/bark'g starfish",
                            "points":  4
                        },
                        {
                            "text":  "neck",
                            "points":  3
                        },
                        {
                            "text":  "eye",
                            "points":  3
                        },
                        {
                            "text":  "head/forehead",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180035,
        "question":  "Fill in the blank: Grandma said her date was terrible because he forgot his what?",
        "answers":  [
                        {
                            "text":  "teeth/bottom row",
                            "points":  42
                        },
                        {
                            "text":  "wallet/money",
                            "points":  25
                        },
                        {
                            "text":  "viagra",
                            "points":  10
                        },
                        {
                            "text":  "hearing aid",
                            "points":  6
                        },
                        {
                            "text":  "pants",
                            "points":  4
                        },
                        {
                            "text":  "glasses",
                            "points":  3
                        },
                        {
                            "text":  "name",
                            "points":  3
                        },
                        {
                            "text":  "condom/prune-flavor",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180036,
        "question":  "Name something a man does at a party that embarrasses his wife.",
        "answers":  [
                        {
                            "text":  "gets sloshed",
                            "points":  37
                        },
                        {
                            "text":  "yaps/bad jokes",
                            "points":  29
                        },
                        {
                            "text":  "dances/twerks",
                            "points":  10
                        },
                        {
                            "text":  "flirts",
                            "points":  7
                        },
                        {
                            "text":  "sings/cher songs",
                            "points":  4
                        },
                        {
                            "text":  "belches",
                            "points":  3
                        },
                        {
                            "text":  "farts/on the food",
                            "points":  3
                        },
                        {
                            "text":  "cheats/swaps keys",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180037,
        "question":  "If Santa started robbing banks, name something he might tell his elves to do.",
        "answers":  [
                        {
                            "text":  "be lookouts",
                            "points":  37
                        },
                        {
                            "text":  "bag/hide money",
                            "points":  28
                        },
                        {
                            "text":  "drive sleigh/car",
                            "points":  16
                        },
                        {
                            "text":  "pick locks/sneak in",
                            "points":  4
                        },
                        {
                            "text":  "take hostages",
                            "points":  3
                        },
                        {
                            "text":  "commit other crimes",
                            "points":  3
                        },
                        {
                            "text":  "cause a diversion",
                            "points":  2
                        },
                        {
                            "text":  "keep quiet",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180038,
        "question":  "We asked 100 single men... Fill in the blank: I stay away from women who have what?",
        "answers":  [
                        {
                            "text":  "kids/evil spawn",
                            "points":  37
                        },
                        {
                            "text":  "illness/ooz'g sore",
                            "points":  15
                        },
                        {
                            "text":  "\"baggage\"",
                            "points":  11
                        },
                        {
                            "text":  "janky teeth",
                            "points":  10
                        },
                        {
                            "text":  "serious 'tude",
                            "points":  9
                        },
                        {
                            "text":  "drug habits",
                            "points":  6
                        },
                        {
                            "text":  "tattoos",
                            "points":  5
                        },
                        {
                            "text":  "b.o./stank breath",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180039,
        "question":  "Name something a man might rub on his underwear to make them smell better.",
        "answers":  [
                        {
                            "text":  "cologne/aftershave",
                            "points":  35
                        },
                        {
                            "text":  "deodorant/axe",
                            "points":  29
                        },
                        {
                            "text":  "powder",
                            "points":  11
                        },
                        {
                            "text":  "fabric softener sheet",
                            "points":  8
                        },
                        {
                            "text":  "air freshener",
                            "points":  4
                        },
                        {
                            "text":  "lotion",
                            "points":  3
                        },
                        {
                            "text":  "food/chocolate",
                            "points":  3
                        },
                        {
                            "text":  "flower petals",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180040,
        "question":  "We asked 100 men... Fill in the blank: My wife loves me for my what?",
        "answers":  [
                        {
                            "text":  "smarts",
                            "points":  33
                        },
                        {
                            "text":  "cash wad",
                            "points":  21
                        },
                        {
                            "text":  "my handsome face",
                            "points":  12
                        },
                        {
                            "text":  "humor",
                            "points":  10
                        },
                        {
                            "text":  "big heart",
                            "points":  7
                        },
                        {
                            "text":  "bangable bod",
                            "points":  4
                        },
                        {
                            "text":  "strength",
                            "points":  4
                        },
                        {
                            "text":  "patience",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180041,
        "question":  "Name something newlyweds remove from the kitchen table before making love on it.",
        "answers":  [
                        {
                            "text":  "dishes/glasses",
                            "points":  33
                        },
                        {
                            "text":  "silverware",
                            "points":  20
                        },
                        {
                            "text":  "salt & pepper",
                            "points":  11
                        },
                        {
                            "text":  "food",
                            "points":  10
                        },
                        {
                            "text":  "white tablecloth",
                            "points":  8
                        },
                        {
                            "text":  "everything",
                            "points":  6
                        },
                        {
                            "text":  "centerpiece/vase",
                            "points":  4
                        },
                        {
                            "text":  "lit candles",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180042,
        "question":  "We asked 100 women... Name a place you go to look at studs.",
        "answers":  [
                        {
                            "text":  "bar/nightclub",
                            "points":  31
                        },
                        {
                            "text":  "hardware store",
                            "points":  19
                        },
                        {
                            "text":  "gym",
                            "points":  16
                        },
                        {
                            "text":  "jewelry store",
                            "points":  10
                        },
                        {
                            "text":  "chippendales",
                            "points":  9
                        },
                        {
                            "text":  "horse farm/ranch",
                            "points":  6
                        },
                        {
                            "text":  "home/my bed",
                            "points":  2
                        },
                        {
                            "text":  "construct'n site",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180043,
        "question":  "We asked 100 single women... Name something that falls out of your date's pocket that makes you say, \"I'm out of here.\"",
        "answers":  [
                        {
                            "text":  "piece fleece/condom",
                            "points":  29
                        },
                        {
                            "text":  "wedding ring",
                            "points":  19
                        },
                        {
                            "text":  "gun",
                            "points":  14
                        },
                        {
                            "text":  "knife",
                            "points":  9
                        },
                        {
                            "text":  "handcuffs/zip tie",
                            "points":  9
                        },
                        {
                            "text":  "black book/phone #",
                            "points":  6
                        },
                        {
                            "text":  "drugs/bath salts",
                            "points":  5
                        },
                        {
                            "text":  "pics of chicks",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180044,
        "question":  "Oops -- you just accidentally e-mailed a naked picture of yourself to all your contacts. What do you do now?",
        "answers":  [
                        {
                            "text":  "cry/freak/die",
                            "points":  24
                        },
                        {
                            "text":  "hide/flee country",
                            "points":  18
                        },
                        {
                            "text":  "oops, sorry!",
                            "points":  13
                        },
                        {
                            "text":  "i was hacked!",
                            "points":  13
                        },
                        {
                            "text":  "own it/ask 4 theirs",
                            "points":  10
                        },
                        {
                            "text":  "nada/laugh it off",
                            "points":  7
                        },
                        {
                            "text":  "unsend/recall it",
                            "points":  6
                        },
                        {
                            "text":  "say it's fake",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180045,
        "question":  "We asked 100 married men... What would you do if your wife's New Year's resolution was to not have sex with you for a year?",
        "answers":  [
                        {
                            "text":  "get mad/complain",
                            "points":  23
                        },
                        {
                            "text":  "divorce her",
                            "points":  19
                        },
                        {
                            "text":  "cheat",
                            "points":  15
                        },
                        {
                            "text":  "doodle my noodle",
                            "points":  12
                        },
                        {
                            "text":  "lose my mind",
                            "points":  10
                        },
                        {
                            "text":  "accept/it's the norm",
                            "points":  6
                        },
                        {
                            "text":  "celebrate!",
                            "points":  6
                        },
                        {
                            "text":  "negotiate/discuss",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180046,
        "question":  "Name something Mickey Mouse has that other mice might wish they had.",
        "answers":  [
                        {
                            "text":  "minnie/a babe",
                            "points":  45
                        },
                        {
                            "text":  "pimp duds/gloves",
                            "points":  13
                        },
                        {
                            "text":  "job/disney money",
                            "points":  10
                        },
                        {
                            "text":  "bigger ears",
                            "points":  7
                        },
                        {
                            "text":  "speech/cute voice",
                            "points":  6
                        },
                        {
                            "text":  "fame",
                            "points":  6
                        },
                        {
                            "text":  "theme parks",
                            "points":  4
                        },
                        {
                            "text":  "thumbs/big hands",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180047,
        "question":  "When a nudist pays cash for something, they might pull it out of what?",
        "answers":  [
                        {
                            "text":  "butt/cadbury cavern",
                            "points":  41
                        },
                        {
                            "text":  "bag/fanny pack",
                            "points":  18
                        },
                        {
                            "text":  "hair/hair tie",
                            "points":  8
                        },
                        {
                            "text":  "boobs/cleavage",
                            "points":  8
                        },
                        {
                            "text":  "wallet",
                            "points":  6
                        },
                        {
                            "text":  "sock/shoe",
                            "points":  5
                        },
                        {
                            "text":  "armpit",
                            "points":  4
                        },
                        {
                            "text":  "hat",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180048,
        "question":  "We asked 100 married women... Name something you don't like your husband to hear you do.",
        "answers":  [
                        {
                            "text":  "pee/pinch a loaf",
                            "points":  37
                        },
                        {
                            "text":  "let one rip",
                            "points":  24
                        },
                        {
                            "text":  "gossip/on phone",
                            "points":  11
                        },
                        {
                            "text":  "snore",
                            "points":  6
                        },
                        {
                            "text":  "sing/hum",
                            "points":  5
                        },
                        {
                            "text":  "yell",
                            "points":  4
                        },
                        {
                            "text":  "burp",
                            "points":  4
                        },
                        {
                            "text":  "blow chunks",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180049,
        "question":  "If Santa were having a midlife crisis, name something he would change.",
        "answers":  [
                        {
                            "text":  "sleigh/to sports car",
                            "points":  36
                        },
                        {
                            "text":  "lose weight",
                            "points":  23
                        },
                        {
                            "text":  "beard/shave it",
                            "points":  8
                        },
                        {
                            "text":  "suit/pimp it out",
                            "points":  7
                        },
                        {
                            "text":  "reindeer/eat comet",
                            "points":  5
                        },
                        {
                            "text":  "his hair/man bun",
                            "points":  5
                        },
                        {
                            "text":  "dump mrs. claus",
                            "points":  5
                        },
                        {
                            "text":  "home/move to miami",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180050,
        "question":  "Name something in his apartment a lonely guy might slow dance with.",
        "answers":  [
                        {
                            "text":  "broom/mop",
                            "points":  35
                        },
                        {
                            "text":  "pillow/cushion",
                            "points":  22
                        },
                        {
                            "text":  "doll/mannequin",
                            "points":  15
                        },
                        {
                            "text":  "lamp",
                            "points":  8
                        },
                        {
                            "text":  "pet/great dane",
                            "points":  7
                        },
                        {
                            "text":  "stuffed animal",
                            "points":  3
                        },
                        {
                            "text":  "lonely girl/guy",
                            "points":  2
                        },
                        {
                            "text":  "himself",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180051,
        "question":  "When two nerds date, he puts a banana in his pants and she puts what fruit in her bra?",
        "answers":  [
                        {
                            "text":  "grapefruits",
                            "points":  27
                        },
                        {
                            "text":  "melons/honeydew",
                            "points":  24
                        },
                        {
                            "text":  "oranges",
                            "points":  23
                        },
                        {
                            "text":  "apples",
                            "points":  8
                        },
                        {
                            "text":  "coconuts",
                            "points":  5
                        },
                        {
                            "text":  "peaches",
                            "points":  3
                        },
                        {
                            "text":  "grapes",
                            "points":  2
                        },
                        {
                            "text":  "cherries",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180052,
        "question":  "We asked 100 women... Name a musical instrument that looks like your body.",
        "answers":  [
                        {
                            "text":  "violin",
                            "points":  25
                        },
                        {
                            "text":  "guitar",
                            "points":  16
                        },
                        {
                            "text":  "tuba",
                            "points":  13
                        },
                        {
                            "text":  "cello",
                            "points":  13
                        },
                        {
                            "text":  "harp",
                            "points":  9
                        },
                        {
                            "text":  "bass",
                            "points":  8
                        },
                        {
                            "text":  "saxophone",
                            "points":  6
                        },
                        {
                            "text":  "trumpet",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180053,
        "question":  "Name the sport that feels best when you're completely naked.",
        "answers":  [
                        {
                            "text":  "swimming",
                            "points":  66
                        },
                        {
                            "text":  "wrestling",
                            "points":  12
                        },
                        {
                            "text":  "volleyball",
                            "points":  4
                        },
                        {
                            "text":  "soccer",
                            "points":  3
                        },
                        {
                            "text":  "water polo",
                            "points":  2
                        },
                        {
                            "text":  "fishing",
                            "points":  2
                        },
                        {
                            "text":  "tennis",
                            "points":  2
                        },
                        {
                            "text":  "baseball",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180054,
        "question":  "Name something a nurse might do to make a patient feel good.",
        "answers":  [
                        {
                            "text":  "give meds",
                            "points":  48
                        },
                        {
                            "text":  "talk/listen",
                            "points":  10
                        },
                        {
                            "text":  "smile",
                            "points":  9
                        },
                        {
                            "text":  "sponge bath",
                            "points":  8
                        },
                        {
                            "text":  "new pillow/tuck in",
                            "points":  6
                        },
                        {
                            "text":  "massage/rub",
                            "points":  6
                        },
                        {
                            "text":  "sing/serenade",
                            "points":  3
                        },
                        {
                            "text":  "make out/hug",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180055,
        "question":  "Name something on your body you're glad you only have one of.",
        "answers":  [
                        {
                            "text":  "nose",
                            "points":  44
                        },
                        {
                            "text":  "bellowing booty",
                            "points":  15
                        },
                        {
                            "text":  "mouth/tongue",
                            "points":  9
                        },
                        {
                            "text":  "head",
                            "points":  8
                        },
                        {
                            "text":  "belly/waistline",
                            "points":  6
                        },
                        {
                            "text":  "navel",
                            "points":  4
                        },
                        {
                            "text":  "chin",
                            "points":  4
                        },
                        {
                            "text":  "brain",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180056,
        "question":  "We asked 100 women... Name something that makes a guy look sleazy.",
        "answers":  [
                        {
                            "text":  "bad hair/greasy",
                            "points":  40
                        },
                        {
                            "text":  "tight pants",
                            "points":  13
                        },
                        {
                            "text":  "tank/open shirt",
                            "points":  13
                        },
                        {
                            "text":  "sagging pants",
                            "points":  11
                        },
                        {
                            "text":  "beard/stache",
                            "points":  9
                        },
                        {
                            "text":  "jewelry/chain",
                            "points":  3
                        },
                        {
                            "text":  "toupee",
                            "points":  2
                        },
                        {
                            "text":  "bad/gold teeth",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180057,
        "question":  "A beautiful nurse doesn't look very sexy when she's holding a what?",
        "answers":  [
                        {
                            "text":  "bedpan",
                            "points":  37
                        },
                        {
                            "text":  "needle",
                            "points":  31
                        },
                        {
                            "text":  "catheter/pee bag",
                            "points":  7
                        },
                        {
                            "text":  "enema bag",
                            "points":  6
                        },
                        {
                            "text":  "cigarette",
                            "points":  3
                        },
                        {
                            "text":  "heart/body part",
                            "points":  3
                        },
                        {
                            "text":  "cup of whiz/to drink",
                            "points":  3
                        },
                        {
                            "text":  "rectal thermometer",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180058,
        "question":  "Name something elephants do in a very big way.",
        "answers":  [
                        {
                            "text":  "whiz/lay cable",
                            "points":  35
                        },
                        {
                            "text":  "walk/stampede",
                            "points":  19
                        },
                        {
                            "text":  "eat",
                            "points":  13
                        },
                        {
                            "text":  "trumpet/snort",
                            "points":  10
                        },
                        {
                            "text":  "bathe",
                            "points":  6
                        },
                        {
                            "text":  "dip the wick",
                            "points":  4
                        },
                        {
                            "text":  "drink",
                            "points":  3
                        },
                        {
                            "text":  "sneeze",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180059,
        "question":  "Fill in the blank: A wife tells her husband, \"You must be part woman because your ______ is so big.\"",
        "answers":  [
                        {
                            "text":  "biscuit/butt",
                            "points":  31
                        },
                        {
                            "text":  "chest",
                            "points":  27
                        },
                        {
                            "text":  "mouth",
                            "points":  10
                        },
                        {
                            "text":  "heart/love",
                            "points":  9
                        },
                        {
                            "text":  "ego/head",
                            "points":  7
                        },
                        {
                            "text":  "brain/iq",
                            "points":  3
                        },
                        {
                            "text":  "hair",
                            "points":  3
                        },
                        {
                            "text":  "belly/waistline",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180060,
        "question":  "Name a lost item you'd hate to see sticking out of the cat's litter box.",
        "answers":  [
                        {
                            "text":  "jewelry/watch",
                            "points":  29
                        },
                        {
                            "text":  "toothbrush",
                            "points":  21
                        },
                        {
                            "text":  "keys",
                            "points":  19
                        },
                        {
                            "text":  "cell phone",
                            "points":  9
                        },
                        {
                            "text":  "dentures",
                            "points":  5
                        },
                        {
                            "text":  "lipstick",
                            "points":  4
                        },
                        {
                            "text":  "money/wallet",
                            "points":  3
                        },
                        {
                            "text":  "birth ctl./diaphragm",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180061,
        "question":  "Name something a dog pees on that you'd be shocked to see a person pee on.",
        "answers":  [
                        {
                            "text":  "fire hydrant",
                            "points":  29
                        },
                        {
                            "text":  "floor/carpet",
                            "points":  18
                        },
                        {
                            "text":  "tree/bush",
                            "points":  15
                        },
                        {
                            "text":  "person/shoe",
                            "points":  13
                        },
                        {
                            "text":  "couch/furniture",
                            "points":  7
                        },
                        {
                            "text":  "car/tire",
                            "points":  5
                        },
                        {
                            "text":  "fence/electric",
                            "points":  3
                        },
                        {
                            "text":  "grass/my lawn",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180062,
        "question":  "Name something you might get on your rear end at a nudist camp.",
        "answers":  [
                        {
                            "text":  "sand/dirt",
                            "points":  26
                        },
                        {
                            "text":  "sunburn",
                            "points":  25
                        },
                        {
                            "text":  "bug/bite/ticks",
                            "points":  17
                        },
                        {
                            "text":  "slap/pat",
                            "points":  11
                        },
                        {
                            "text":  "leaf/grass",
                            "points":  5
                        },
                        {
                            "text":  "a pervy nudist",
                            "points":  3
                        },
                        {
                            "text":  "poison ivy/rash",
                            "points":  3
                        },
                        {
                            "text":  "tattoo",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180063,
        "question":  "Name a ticklish spot where your dog knows to lick you.",
        "answers":  [
                        {
                            "text":  "my feet/toes",
                            "points":  26
                        },
                        {
                            "text":  "my neck",
                            "points":  22
                        },
                        {
                            "text":  "my ear/inside it",
                            "points":  19
                        },
                        {
                            "text":  "my face/cheek",
                            "points":  12
                        },
                        {
                            "text":  "my leg/knee",
                            "points":  5
                        },
                        {
                            "text":  "my belly/button",
                            "points":  3
                        },
                        {
                            "text":  "my arms/pits",
                            "points":  3
                        },
                        {
                            "text":  "my hand/palm",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180064,
        "question":  "We asked 100 women... It's hard to be a woman. But name a reason you wouldn't want to be a man.",
        "answers":  [
                        {
                            "text":  "hairy bod/shave face",
                            "points":  38
                        },
                        {
                            "text":  "wang/pee stand'g",
                            "points":  27
                        },
                        {
                            "text":  "work/pay for stuff",
                            "points":  11
                        },
                        {
                            "text":  "always macho",
                            "points":  5
                        },
                        {
                            "text":  "they smell",
                            "points":  4
                        },
                        {
                            "text":  "can't have babies",
                            "points":  3
                        },
                        {
                            "text":  "they go bald",
                            "points":  2
                        },
                        {
                            "text":  "gotta deal w/ women",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180065,
        "question":  "Name something Olive Oyl might tell Popeye he has to change about himself before she'll marry him.",
        "answers":  [
                        {
                            "text":  "quit smoking pipe",
                            "points":  36
                        },
                        {
                            "text":  "diet/less spinach",
                            "points":  17
                        },
                        {
                            "text":  "voice/chuckle",
                            "points":  12
                        },
                        {
                            "text":  "no fight'g/be nice",
                            "points":  10
                        },
                        {
                            "text":  "new job/no sail'g",
                            "points":  6
                        },
                        {
                            "text":  "odor/smelly urine",
                            "points":  4
                        },
                        {
                            "text":  "bod/forearms",
                            "points":  4
                        },
                        {
                            "text":  "face/squinty eye",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180066,
        "question":  "We asked 100 women... Fill in the blank: I'd dump my man if I found a ______ in his pants.",
        "answers":  [
                        {
                            "text":  "a ho's phone #",
                            "points":  33
                        },
                        {
                            "text":  "a condom",
                            "points":  31
                        },
                        {
                            "text":  "a ho's panties/bra",
                            "points":  15
                        },
                        {
                            "text":  "a ho",
                            "points":  4
                        },
                        {
                            "text":  "a va-jay-jay",
                            "points":  3
                        },
                        {
                            "text":  "a ho's picture",
                            "points":  2
                        },
                        {
                            "text":  "love note from ho",
                            "points":  2
                        },
                        {
                            "text":  "necklace/jewelry",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180067,
        "question":  "Name something you might need to help you get out of your skinny jeans.",
        "answers":  [
                        {
                            "text":  "scissors",
                            "points":  32
                        },
                        {
                            "text":  "other person",
                            "points":  29
                        },
                        {
                            "text":  "oil/crisco",
                            "points":  14
                        },
                        {
                            "text":  "crowbar",
                            "points":  9
                        },
                        {
                            "text":  "powder",
                            "points":  2
                        },
                        {
                            "text":  "a room",
                            "points":  2
                        },
                        {
                            "text":  "pliers",
                            "points":  2
                        },
                        {
                            "text":  "a hoist/winch",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180068,
        "question":  "Name something you'd hate for someone to do right in your face.",
        "answers":  [
                        {
                            "text":  "spit",
                            "points":  31
                        },
                        {
                            "text":  "sneeze",
                            "points":  14
                        },
                        {
                            "text":  "spread butt & fart",
                            "points":  14
                        },
                        {
                            "text":  "burp",
                            "points":  11
                        },
                        {
                            "text":  "lie",
                            "points":  8
                        },
                        {
                            "text":  "talk/yell/cuss",
                            "points":  6
                        },
                        {
                            "text":  "cough",
                            "points":  5
                        },
                        {
                            "text":  "blow smoke",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180069,
        "question":  "Name one specific thing a corpse might be wearing if his funeral is casual.",
        "answers":  [
                        {
                            "text":  "jeans",
                            "points":  29
                        },
                        {
                            "text":  "shorts",
                            "points":  20
                        },
                        {
                            "text":  "t-shirt/nascar tee",
                            "points":  14
                        },
                        {
                            "text":  "pajamas",
                            "points":  8
                        },
                        {
                            "text":  "hawaiian shirt",
                            "points":  8
                        },
                        {
                            "text":  "track suit",
                            "points":  5
                        },
                        {
                            "text":  "trunks/speedo",
                            "points":  4
                        },
                        {
                            "text":  "polo/golf shirt",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180070,
        "question":  "If there were a Baby Olympics, tell me what one of the events might be.",
        "answers":  [
                        {
                            "text":  "crawl/100-meter",
                            "points":  57
                        },
                        {
                            "text":  "poo/diaper fill-up",
                            "points":  8
                        },
                        {
                            "text":  "crying/screaming",
                            "points":  7
                        },
                        {
                            "text":  "bottle toss",
                            "points":  7
                        },
                        {
                            "text":  "best nurser",
                            "points":  5
                        },
                        {
                            "text":  "spit-up",
                            "points":  3
                        },
                        {
                            "text":  "toddling",
                            "points":  2
                        },
                        {
                            "text":  "rolling over",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180071,
        "question":  "Dogs understand about ten words. Name one of those specific words.",
        "answers":  [
                        {
                            "text":  "sit",
                            "points":  54
                        },
                        {
                            "text":  "come",
                            "points":  11
                        },
                        {
                            "text":  "walk",
                            "points":  6
                        },
                        {
                            "text":  "food",
                            "points":  6
                        },
                        {
                            "text":  "their name",
                            "points":  5
                        },
                        {
                            "text":  "stay",
                            "points":  4
                        },
                        {
                            "text":  "fetch",
                            "points":  3
                        },
                        {
                            "text":  "treat",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180072,
        "question":  "Oh no -- I was using super glue and now my finger's stuck to my what?",
        "answers":  [
                        {
                            "text":  "face/eyelid",
                            "points":  44
                        },
                        {
                            "text":  "hand/fingers",
                            "points":  19
                        },
                        {
                            "text":  "hair/top of head",
                            "points":  10
                        },
                        {
                            "text":  "clothes",
                            "points":  6
                        },
                        {
                            "text":  "ear",
                            "points":  4
                        },
                        {
                            "text":  "table/countertop",
                            "points":  3
                        },
                        {
                            "text":  "\"pink weasel\"",
                            "points":  3
                        },
                        {
                            "text":  "tush",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180073,
        "question":  "We asked 100 married men... Name something you aren't allowed to touch in your own home.",
        "answers":  [
                        {
                            "text":  "wife's purse/$",
                            "points":  39
                        },
                        {
                            "text":  "washer/laundry",
                            "points":  12
                        },
                        {
                            "text":  "stove",
                            "points":  9
                        },
                        {
                            "text":  "my wife",
                            "points":  8
                        },
                        {
                            "text":  "thermostat",
                            "points":  8
                        },
                        {
                            "text":  "tv remote",
                            "points":  6
                        },
                        {
                            "text":  "wife's clothes",
                            "points":  5
                        },
                        {
                            "text":  "alcohol",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180074,
        "question":  "Name something that might be leaking where a plumber would be no help.",
        "answers":  [
                        {
                            "text":  "bladder/body",
                            "points":  33
                        },
                        {
                            "text":  "the roof",
                            "points":  22
                        },
                        {
                            "text":  "car/tire",
                            "points":  21
                        },
                        {
                            "text":  "gas line",
                            "points":  5
                        },
                        {
                            "text":  "groceries/milk",
                            "points":  3
                        },
                        {
                            "text":  "fridge/freezer",
                            "points":  3
                        },
                        {
                            "text":  "secrets/data",
                            "points":  2
                        },
                        {
                            "text":  "balloon",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180075,
        "question":  "We asked 100 men... If you think you might be going there, tell me something you hope they have in hell.",
        "answers":  [
                        {
                            "text":  "ice/water",
                            "points":  33
                        },
                        {
                            "text":  "ice cream/food",
                            "points":  17
                        },
                        {
                            "text":  "girls",
                            "points":  12
                        },
                        {
                            "text":  "brewski/booze",
                            "points":  12
                        },
                        {
                            "text":  "air conditioning",
                            "points":  11
                        },
                        {
                            "text":  "a way out",
                            "points":  2
                        },
                        {
                            "text":  "fun/humor",
                            "points":  2
                        },
                        {
                            "text":  "tv",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180076,
        "question":  "You'd be suspicious about a job interview if they wanted to meet you where?",
        "answers":  [
                        {
                            "text":  "bar/nightclub",
                            "points":  33
                        },
                        {
                            "text":  "strip joint",
                            "points":  13
                        },
                        {
                            "text":  "alley/street corner",
                            "points":  12
                        },
                        {
                            "text":  "hotel/motel",
                            "points":  11
                        },
                        {
                            "text":  "home/bedroom",
                            "points":  9
                        },
                        {
                            "text":  "cafe/mcdonald's",
                            "points":  5
                        },
                        {
                            "text":  "parking lot",
                            "points":  4
                        },
                        {
                            "text":  "restroom stall",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180077,
        "question":  "Fill in the blank: When a nudist goes out on a date, she might wear her best what?",
        "answers":  [
                        {
                            "text":  "jewelry",
                            "points":  33
                        },
                        {
                            "text":  "shoes/heels",
                            "points":  11
                        },
                        {
                            "text":  "hair clip/bow",
                            "points":  10
                        },
                        {
                            "text":  "perfume",
                            "points":  9
                        },
                        {
                            "text":  "smile",
                            "points":  9
                        },
                        {
                            "text":  "makeup/bronzer",
                            "points":  7
                        },
                        {
                            "text":  "hat",
                            "points":  7
                        },
                        {
                            "text":  "hairdo/wig",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180078,
        "question":  "Name something you'd do if your date ate off your plate.",
        "answers":  [
                        {
                            "text":  "eat off theirs",
                            "points":  31
                        },
                        {
                            "text":  "slap/stab hand",
                            "points":  15
                        },
                        {
                            "text":  "share/give to date",
                            "points":  14
                        },
                        {
                            "text":  "laugh/smile coyly",
                            "points":  8
                        },
                        {
                            "text":  "leave/dump them",
                            "points":  7
                        },
                        {
                            "text":  "stop eating",
                            "points":  6
                        },
                        {
                            "text":  "say something/yell",
                            "points":  6
                        },
                        {
                            "text":  "order more",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180079,
        "question":  "If you want to be comfortable in the afterlife, what should you wear when they bury you?",
        "answers":  [
                        {
                            "text":  "pajamas/nightgown",
                            "points":  27
                        },
                        {
                            "text":  "sweats",
                            "points":  15
                        },
                        {
                            "text":  "nothing",
                            "points":  14
                        },
                        {
                            "text":  "t-shirt",
                            "points":  10
                        },
                        {
                            "text":  "shoes/slippers",
                            "points":  9
                        },
                        {
                            "text":  "jeans",
                            "points":  6
                        },
                        {
                            "text":  "undies/lingerie",
                            "points":  5
                        },
                        {
                            "text":  "shorts",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180080,
        "question":  "In your nightmares, what is your boss doing to you at work?",
        "answers":  [
                        {
                            "text":  "yell'g/insult'g me",
                            "points":  26
                        },
                        {
                            "text":  "firing me",
                            "points":  24
                        },
                        {
                            "text":  "whip'g/torturing",
                            "points":  13
                        },
                        {
                            "text":  "piling on work",
                            "points":  9
                        },
                        {
                            "text":  "flirt'g/kiss'g",
                            "points":  7
                        },
                        {
                            "text":  "killing/eating me",
                            "points":  5
                        },
                        {
                            "text":  "watching me",
                            "points":  4
                        },
                        {
                            "text":  "getting lucky",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180081,
        "question":  "Name something you might stuff in one of Pillsbury Doughboy's buns.",
        "answers":  [
                        {
                            "text":  "wiener/meat",
                            "points":  26
                        },
                        {
                            "text":  "cheese",
                            "points":  17
                        },
                        {
                            "text":  "butter",
                            "points":  14
                        },
                        {
                            "text":  "raisins/fruit",
                            "points":  8
                        },
                        {
                            "text":  "jam/jelly",
                            "points":  7
                        },
                        {
                            "text":  "chocolate/chips",
                            "points":  7
                        },
                        {
                            "text":  "cinnamon",
                            "points":  7
                        },
                        {
                            "text":  "lubed finger/fist",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180082,
        "question":  "We asked 100 women... Name a card game that describes your love life.",
        "answers":  [
                        {
                            "text":  "hearts",
                            "points":  22
                        },
                        {
                            "text":  "solitaire",
                            "points":  22
                        },
                        {
                            "text":  "old maid",
                            "points":  17
                        },
                        {
                            "text":  "uno",
                            "points":  10
                        },
                        {
                            "text":  "poker",
                            "points":  6
                        },
                        {
                            "text":  "gin rummy",
                            "points":  6
                        },
                        {
                            "text":  "go fish",
                            "points":  5
                        },
                        {
                            "text":  "war",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180083,
        "question":  "We asked 100 women... If you want to attract a man, name a food you should rub all over your body.",
        "answers":  [
                        {
                            "text":  "bacon",
                            "points":  22
                        },
                        {
                            "text":  "chocolate",
                            "points":  18
                        },
                        {
                            "text":  "steak",
                            "points":  17
                        },
                        {
                            "text":  "whipped cream",
                            "points":  17
                        },
                        {
                            "text":  "pizza",
                            "points":  6
                        },
                        {
                            "text":  "bbq sauce",
                            "points":  4
                        },
                        {
                            "text":  "strawberries/fruit",
                            "points":  4
                        },
                        {
                            "text":  "honey",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180084,
        "question":  "Name something a man might reach for if his zipper breaks at work.",
        "answers":  [
                        {
                            "text":  "stapler",
                            "points":  21
                        },
                        {
                            "text":  "pin/safety pin",
                            "points":  19
                        },
                        {
                            "text":  "tape",
                            "points":  11
                        },
                        {
                            "text":  "his coat/sweater",
                            "points":  11
                        },
                        {
                            "text":  "paper clip",
                            "points":  10
                        },
                        {
                            "text":  "file folder",
                            "points":  7
                        },
                        {
                            "text":  "his dangling dingus",
                            "points":  7
                        },
                        {
                            "text":  "pliers",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180085,
        "question":  "Name a part of your body you could use to play \"Jingle Bells.\"",
        "answers":  [
                        {
                            "text":  "hands/fingers",
                            "points":  19
                        },
                        {
                            "text":  "mouth/teeth",
                            "points":  16
                        },
                        {
                            "text":  "boobs/nip rings",
                            "points":  15
                        },
                        {
                            "text":  "arms/armpits",
                            "points":  14
                        },
                        {
                            "text":  "belly",
                            "points":  13
                        },
                        {
                            "text":  "jingle balls",
                            "points":  5
                        },
                        {
                            "text":  "nose",
                            "points":  5
                        },
                        {
                            "text":  "cheeks/jowls",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180086,
        "question":  "We asked 100 women... Name a good-looking talk show host you like to watch on TV while you're making love.",
        "answers":  [
                        {
                            "text":  "anderson cooper",
                            "points":  15
                        },
                        {
                            "text":  "steve harvey",
                            "points":  13
                        },
                        {
                            "text":  "jimmy fallon",
                            "points":  13
                        },
                        {
                            "text":  "harry connick, jr.",
                            "points":  13
                        },
                        {
                            "text":  "montel williams",
                            "points":  11
                        },
                        {
                            "text":  "conan o'brien",
                            "points":  10
                        },
                        {
                            "text":  "dr. oz",
                            "points":  10
                        },
                        {
                            "text":  "carson daly",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  180087,
        "question":  "Name something a man has that a woman might wonder if it's real.",
        "answers":  [
                        {
                            "text":  "hair",
                            "points":  53
                        },
                        {
                            "text":  "rolex/jewelry",
                            "points":  11
                        },
                        {
                            "text":  "ankle spanker",
                            "points":  6
                        },
                        {
                            "text":  "muscles/6-pack",
                            "points":  6
                        },
                        {
                            "text":  "a job/with cia",
                            "points":  5
                        },
                        {
                            "text":  "bank account",
                            "points":  3
                        },
                        {
                            "text":  "intelligence",
                            "points":  3
                        },
                        {
                            "text":  "teeth",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180088,
        "question":  "Name something a woman does that gets a man's blood pressure rising.",
        "answers":  [
                        {
                            "text":  "talks/argues/lies",
                            "points":  45
                        },
                        {
                            "text":  "shops/spends $",
                            "points":  20
                        },
                        {
                            "text":  "gets naked",
                            "points":  12
                        },
                        {
                            "text":  "cheats on him",
                            "points":  3
                        },
                        {
                            "text":  "lap dance",
                            "points":  3
                        },
                        {
                            "text":  "dresses sexy",
                            "points":  3
                        },
                        {
                            "text":  "changes her mind",
                            "points":  2
                        },
                        {
                            "text":  "drives",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180089,
        "question":  "Fill in the blank: Banana ______.",
        "answers":  [
                        {
                            "text":  "banana split",
                            "points":  41
                        },
                        {
                            "text":  "banana boat",
                            "points":  14
                        },
                        {
                            "text":  "banana republic",
                            "points":  12
                        },
                        {
                            "text":  "banana hammock",
                            "points":  6
                        },
                        {
                            "text":  "banana pudding",
                            "points":  5
                        },
                        {
                            "text":  "banana cream/pie",
                            "points":  5
                        },
                        {
                            "text":  "banana peel",
                            "points":  4
                        },
                        {
                            "text":  "bananarama",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180090,
        "question":  "Name something that's romantic to a woman but sappy to a man.",
        "answers":  [
                        {
                            "text":  "movie/bridget jones",
                            "points":  35
                        },
                        {
                            "text":  "flowers",
                            "points":  30
                        },
                        {
                            "text":  "candlelight",
                            "points":  9
                        },
                        {
                            "text":  "music/serenading",
                            "points":  6
                        },
                        {
                            "text":  "poetry",
                            "points":  3
                        },
                        {
                            "text":  "love letter/card",
                            "points":  3
                        },
                        {
                            "text":  "slow dancing",
                            "points":  2
                        },
                        {
                            "text":  "romance novel",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180091,
        "question":  "We asked 100 women... Name an occupation whose sexy men might show up in your dreams.",
        "answers":  [
                        {
                            "text":  "firefighter",
                            "points":  33
                        },
                        {
                            "text":  "construction",
                            "points":  15
                        },
                        {
                            "text":  "exotic dancer",
                            "points":  11
                        },
                        {
                            "text":  "actor",
                            "points":  10
                        },
                        {
                            "text":  "doc/plastic surgeon",
                            "points":  9
                        },
                        {
                            "text":  "model",
                            "points":  7
                        },
                        {
                            "text":  "cowboy",
                            "points":  3
                        },
                        {
                            "text":  "masseur",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180092,
        "question":  "Name something you'd hate to be in the middle of when your cat decides to jump on you.",
        "answers":  [
                        {
                            "text":  "romancing the bone",
                            "points":  31
                        },
                        {
                            "text":  "eating",
                            "points":  19
                        },
                        {
                            "text":  "peeing/power dump",
                            "points":  12
                        },
                        {
                            "text":  "sleep'g/dream'g",
                            "points":  9
                        },
                        {
                            "text":  "a bath/shower",
                            "points":  9
                        },
                        {
                            "text":  "drinking",
                            "points":  5
                        },
                        {
                            "text":  "cooking",
                            "points":  3
                        },
                        {
                            "text":  "a fight",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180093,
        "question":  "Name something some guys do with their hair that looks stupid.",
        "answers":  [
                        {
                            "text":  "comb-over",
                            "points":  28
                        },
                        {
                            "text":  "man bun/top knot",
                            "points":  15
                        },
                        {
                            "text":  "mohawk/fauxhawk",
                            "points":  11
                        },
                        {
                            "text":  "spike it",
                            "points":  10
                        },
                        {
                            "text":  "grease/gel it",
                            "points":  8
                        },
                        {
                            "text":  "ponytail/pigtails",
                            "points":  8
                        },
                        {
                            "text":  "color/frost tips",
                            "points":  5
                        },
                        {
                            "text":  "shave it bald",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180094,
        "question":  "Name something a man would hate to realize he inherited from his mother.",
        "answers":  [
                        {
                            "text":  "body/massive jugs",
                            "points":  46
                        },
                        {
                            "text":  "personality/nagging",
                            "points":  19
                        },
                        {
                            "text":  "face/chiclet teeth",
                            "points":  8
                        },
                        {
                            "text":  "health issues",
                            "points":  4
                        },
                        {
                            "text":  "her debt",
                            "points":  3
                        },
                        {
                            "text":  "clothes/panties",
                            "points":  3
                        },
                        {
                            "text":  "her voice",
                            "points":  3
                        },
                        {
                            "text":  "baldness/hairline",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180095,
        "question":  "Name something a farmer's wife likes to watch the farmer do because it turns her on.",
        "answers":  [
                        {
                            "text":  "milk them teats!",
                            "points":  42
                        },
                        {
                            "text":  "plow/hoe",
                            "points":  17
                        },
                        {
                            "text":  "bale/stack hay",
                            "points":  11
                        },
                        {
                            "text":  "dress/undress",
                            "points":  5
                        },
                        {
                            "text":  "ride tractor",
                            "points":  4
                        },
                        {
                            "text":  "plant/harvest",
                            "points":  4
                        },
                        {
                            "text":  "ride a horse",
                            "points":  4
                        },
                        {
                            "text":  "churn butter",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180096,
        "question":  "Name something you never want to see your mother wearing.",
        "answers":  [
                        {
                            "text":  "lingerie/nightie",
                            "points":  38
                        },
                        {
                            "text":  "bikini/swimsuit",
                            "points":  35
                        },
                        {
                            "text":  "tight pants/jeans",
                            "points":  4
                        },
                        {
                            "text":  "miniskirt",
                            "points":  3
                        },
                        {
                            "text":  "my clothes",
                            "points":  3
                        },
                        {
                            "text":  "her birthday suit",
                            "points":  2
                        },
                        {
                            "text":  "hose/fishnets",
                            "points":  2
                        },
                        {
                            "text":  "crop top",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180097,
        "question":  "We asked 100 married women... Tell me something your husband is full of.",
        "answers":  [
                        {
                            "text":  "doody",
                            "points":  35
                        },
                        {
                            "text":  "love",
                            "points":  13
                        },
                        {
                            "text":  "himself",
                            "points":  12
                        },
                        {
                            "text":  "humor/jokes",
                            "points":  10
                        },
                        {
                            "text":  "knowledge",
                            "points":  7
                        },
                        {
                            "text":  "excuses",
                            "points":  5
                        },
                        {
                            "text":  "\"hot air\"",
                            "points":  4
                        },
                        {
                            "text":  "gas",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180098,
        "question":  "Fill in the blank: A girl might say, \"My mom doesn't like my boyfriend's\" what?",
        "answers":  [
                        {
                            "text":  "'tude/personality",
                            "points":  30
                        },
                        {
                            "text":  "hair/pigtails",
                            "points":  18
                        },
                        {
                            "text":  "tattoo/of me nude",
                            "points":  9
                        },
                        {
                            "text":  "family/6 kids",
                            "points":  8
                        },
                        {
                            "text":  "clothes/moccasins",
                            "points":  7
                        },
                        {
                            "text":  "car/vw van",
                            "points":  7
                        },
                        {
                            "text":  "job",
                            "points":  6
                        },
                        {
                            "text":  "ugly/psycho face",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180099,
        "question":  "Name something Captain Hook must always remember to do with his good hand, not his hook hand.",
        "answers":  [
                        {
                            "text":  "wipe his booty",
                            "points":  29
                        },
                        {
                            "text":  "scratch/rub an itch",
                            "points":  28
                        },
                        {
                            "text":  "pick/blow nose",
                            "points":  14
                        },
                        {
                            "text":  "shake hands/high-5",
                            "points":  7
                        },
                        {
                            "text":  "eat",
                            "points":  3
                        },
                        {
                            "text":  "wash",
                            "points":  3
                        },
                        {
                            "text":  "brush his hair",
                            "points":  3
                        },
                        {
                            "text":  "pee & shake it",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180100,
        "question":  "At Christmas, name a decoration a wife might wear in the bedroom with nothing else on.",
        "answers":  [
                        {
                            "text":  "mistletoe/on navel",
                            "points":  28
                        },
                        {
                            "text":  "bow/ribbon",
                            "points":  20
                        },
                        {
                            "text":  "sexy santa suit",
                            "points":  15
                        },
                        {
                            "text":  "tinsel",
                            "points":  9
                        },
                        {
                            "text":  "garland",
                            "points":  8
                        },
                        {
                            "text":  "a wreath",
                            "points":  3
                        },
                        {
                            "text":  "jingle bells",
                            "points":  3
                        },
                        {
                            "text":  "lights",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180101,
        "question":  "Name something the worst male stripper in the world might only have one of.",
        "answers":  [
                        {
                            "text":  "outfit/pickle pouch",
                            "points":  24
                        },
                        {
                            "text":  "testicle/bro globe",
                            "points":  20
                        },
                        {
                            "text":  "leg/foot",
                            "points":  11
                        },
                        {
                            "text":  "routine/move",
                            "points":  10
                        },
                        {
                            "text":  "eye",
                            "points":  8
                        },
                        {
                            "text":  "tip/dollar",
                            "points":  6
                        },
                        {
                            "text":  "patron/fan",
                            "points":  6
                        },
                        {
                            "text":  "nipple",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180102,
        "question":  "Name something you'd see grandma wearing that tells you she's looking for a new man.",
        "answers":  [
                        {
                            "text":  "makeup/extra blush",
                            "points":  23
                        },
                        {
                            "text":  "dress/skirt",
                            "points":  21
                        },
                        {
                            "text":  "lingerie/nightie",
                            "points":  15
                        },
                        {
                            "text":  "heels/new sneakers",
                            "points":  8
                        },
                        {
                            "text":  "pearls/jewelry",
                            "points":  7
                        },
                        {
                            "text":  "low-cut blouse",
                            "points":  5
                        },
                        {
                            "text":  "false teeth",
                            "points":  5
                        },
                        {
                            "text":  "new hairdo/wig",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180103,
        "question":  "Name someone you'd be surprised to see smoking a joint.",
        "answers":  [
                        {
                            "text":  "the pope/clergy",
                            "points":  31
                        },
                        {
                            "text":  "my parents",
                            "points":  24
                        },
                        {
                            "text":  "me!",
                            "points":  10
                        },
                        {
                            "text":  "prez/politician",
                            "points":  9
                        },
                        {
                            "text":  "granny/gramps",
                            "points":  5
                        },
                        {
                            "text":  "a cop",
                            "points":  3
                        },
                        {
                            "text":  "a kid/mine",
                            "points":  3
                        },
                        {
                            "text":  "mother-in-law",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180104,
        "question":  "Name something a man loses in the divorce that his ex-wife might send him a picture of her new man using.",
        "answers":  [
                        {
                            "text":  "car/truck",
                            "points":  56
                        },
                        {
                            "text":  "herself/her boobs",
                            "points":  8
                        },
                        {
                            "text":  "house",
                            "points":  7
                        },
                        {
                            "text":  "boat",
                            "points":  5
                        },
                        {
                            "text":  "lawn mower",
                            "points":  3
                        },
                        {
                            "text":  "his clothes/robe",
                            "points":  3
                        },
                        {
                            "text":  "bed",
                            "points":  3
                        },
                        {
                            "text":  "tv",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180105,
        "question":  "We asked 100 women... If you could test-drive a man, where would you take him to see how he performs?",
        "answers":  [
                        {
                            "text":  "straight to bed",
                            "points":  38
                        },
                        {
                            "text":  "kitchen",
                            "points":  25
                        },
                        {
                            "text":  "store/mall",
                            "points":  5
                        },
                        {
                            "text":  "hotel/resort",
                            "points":  4
                        },
                        {
                            "text":  "highway/open road",
                            "points":  4
                        },
                        {
                            "text":  "outdoors/mtn. hike",
                            "points":  4
                        },
                        {
                            "text":  "mom's/family gather'g",
                            "points":  4
                        },
                        {
                            "text":  "restaurant",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180106,
        "question":  "Name a reason you wouldn't want to be a frog.",
        "answers":  [
                        {
                            "text":  "short life/eaten",
                            "points":  21
                        },
                        {
                            "text":  "eat bugs",
                            "points":  14
                        },
                        {
                            "text":  "i hate water/swim'g",
                            "points":  12
                        },
                        {
                            "text":  "too slimy",
                            "points":  12
                        },
                        {
                            "text":  "too warty",
                            "points":  10
                        },
                        {
                            "text":  "croak/don't talk",
                            "points":  9
                        },
                        {
                            "text":  "have to hop",
                            "points":  6
                        },
                        {
                            "text":  "green isn't my color",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180107,
        "question":  "If your boss called you into his office, what would you not want to see him holding?",
        "answers":  [
                        {
                            "text":  "pink slip",
                            "points":  56
                        },
                        {
                            "text":  "final paycheck",
                            "points":  7
                        },
                        {
                            "text":  "weapon",
                            "points":  6
                        },
                        {
                            "text":  "his dinky",
                            "points":  6
                        },
                        {
                            "text":  "sex toy/whip",
                            "points":  3
                        },
                        {
                            "text":  "web history/email",
                            "points":  3
                        },
                        {
                            "text":  "my wife/mate",
                            "points":  3
                        },
                        {
                            "text":  "box/bag to pack",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180108,
        "question":  "If he believed in the afterlife, name something that Hugh Hefner might say he wanted to be buried with him.",
        "answers":  [
                        {
                            "text":  "playmates/babes",
                            "points":  51
                        },
                        {
                            "text":  "playboy magazine",
                            "points":  9
                        },
                        {
                            "text":  "his robe & pjs",
                            "points":  8
                        },
                        {
                            "text":  "his millions",
                            "points":  6
                        },
                        {
                            "text":  "his pipe",
                            "points":  4
                        },
                        {
                            "text":  "viagra",
                            "points":  4
                        },
                        {
                            "text":  "bunny ears/costume",
                            "points":  3
                        },
                        {
                            "text":  "breast implants",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180109,
        "question":  "Tell me somewhere couples really shouldn't start making out.",
        "answers":  [
                        {
                            "text":  "church/temple",
                            "points":  46
                        },
                        {
                            "text":  "car/freeway",
                            "points":  11
                        },
                        {
                            "text":  "store/mall",
                            "points":  9
                        },
                        {
                            "text":  "movie/play",
                            "points":  7
                        },
                        {
                            "text":  "park/playground",
                            "points":  4
                        },
                        {
                            "text":  "elevator",
                            "points":  4
                        },
                        {
                            "text":  "cafe/waffle house",
                            "points":  3
                        },
                        {
                            "text":  "funeral/by casket",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180110,
        "question":  "We asked 100 married women... Name a reason your husband could never play James Bond.",
        "answers":  [
                        {
                            "text":  "too fat/not fit",
                            "points":  37
                        },
                        {
                            "text":  "no accent",
                            "points":  9
                        },
                        {
                            "text":  "too old",
                            "points":  9
                        },
                        {
                            "text":  "bald",
                            "points":  8
                        },
                        {
                            "text":  "can't use a gun",
                            "points":  7
                        },
                        {
                            "text":  "doesn't drink",
                            "points":  7
                        },
                        {
                            "text":  "not a manslut",
                            "points":  6
                        },
                        {
                            "text":  "too short",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180111,
        "question":  "We asked 100 married people... Besides the obvious, name something it would be fun to do naked with your spouse.",
        "answers":  [
                        {
                            "text":  "skinny-dip",
                            "points":  36
                        },
                        {
                            "text":  "bathe/shower",
                            "points":  26
                        },
                        {
                            "text":  "hot tub/spa",
                            "points":  8
                        },
                        {
                            "text":  "wrestle/in mud",
                            "points":  4
                        },
                        {
                            "text":  "hit beach/sunbathe",
                            "points":  4
                        },
                        {
                            "text":  "dance",
                            "points":  3
                        },
                        {
                            "text":  "play twister",
                            "points":  3
                        },
                        {
                            "text":  "watch movies/tv",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180112,
        "question":  "Name something a man should have before telling his wife he wants a divorce.",
        "answers":  [
                        {
                            "text":  "a good lawyer",
                            "points":  34
                        },
                        {
                            "text":  "cash/swiss account",
                            "points":  20
                        },
                        {
                            "text":  "place to crash",
                            "points":  10
                        },
                        {
                            "text":  "a reason",
                            "points":  7
                        },
                        {
                            "text":  "a prenup",
                            "points":  5
                        },
                        {
                            "text":  "body armor/cup",
                            "points":  4
                        },
                        {
                            "text":  "life insurance",
                            "points":  4
                        },
                        {
                            "text":  "divorce papers",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180113,
        "question":  "If Abraham Lincoln were on a dating site, name something he'd say about himself that would appeal to any woman of today.",
        "answers":  [
                        {
                            "text":  "tall drink o' water",
                            "points":  31
                        },
                        {
                            "text":  "honest",
                            "points":  31
                        },
                        {
                            "text":  "i'm the prez, yo",
                            "points":  8
                        },
                        {
                            "text":  "brainiac",
                            "points":  5
                        },
                        {
                            "text":  "trendy beard",
                            "points":  3
                        },
                        {
                            "text":  "everyone's equal",
                            "points":  3
                        },
                        {
                            "text":  "slim/swimmer bod",
                            "points":  3
                        },
                        {
                            "text":  "strong/big hands",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180114,
        "question":  "At the stage deli, what kind of sandwich should be named the Steve Harvey special?",
        "answers":  [
                        {
                            "text":  "ham",
                            "points":  28
                        },
                        {
                            "text":  "roast beef",
                            "points":  14
                        },
                        {
                            "text":  "bologna",
                            "points":  13
                        },
                        {
                            "text":  "pastrami",
                            "points":  9
                        },
                        {
                            "text":  "meatball",
                            "points":  7
                        },
                        {
                            "text":  "turkey",
                            "points":  6
                        },
                        {
                            "text":  "reuben/corned beef",
                            "points":  6
                        },
                        {
                            "text":  "chicken/dark meat",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180115,
        "question":  "If a friendly ghost lived in your house, name something nice it might do for you.",
        "answers":  [
                        {
                            "text":  "housework/cook",
                            "points":  57
                        },
                        {
                            "text":  "scare off/in-laws",
                            "points":  11
                        },
                        {
                            "text":  "turn light on/off",
                            "points":  5
                        },
                        {
                            "text":  "massage me/cuddle",
                            "points":  3
                        },
                        {
                            "text":  "grab me a beer/wine",
                            "points":  3
                        },
                        {
                            "text":  "be my bud/chill",
                            "points":  3
                        },
                        {
                            "text":  "check on kid/play",
                            "points":  2
                        },
                        {
                            "text":  "entertain/tap dance",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180116,
        "question":  "A woman shouldn't expect her man to cuddle when he's in the middle of what?",
        "answers":  [
                        {
                            "text":  "watch'g tv/sports",
                            "points":  44
                        },
                        {
                            "text":  "work/meeting",
                            "points":  9
                        },
                        {
                            "text":  "eating",
                            "points":  9
                        },
                        {
                            "text":  "sleeping",
                            "points":  8
                        },
                        {
                            "text":  "repairs/fix'g car",
                            "points":  7
                        },
                        {
                            "text":  "driving",
                            "points":  3
                        },
                        {
                            "text":  "paying bills/taxes",
                            "points":  3
                        },
                        {
                            "text":  "a whiz/dump",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180117,
        "question":  "We asked 100 women... Tell me a country where you think the men are sexier than American men.",
        "answers":  [
                        {
                            "text":  "italy",
                            "points":  35
                        },
                        {
                            "text":  "france",
                            "points":  15
                        },
                        {
                            "text":  "australia",
                            "points":  12
                        },
                        {
                            "text":  "england",
                            "points":  6
                        },
                        {
                            "text":  "spain",
                            "points":  6
                        },
                        {
                            "text":  "ireland",
                            "points":  4
                        },
                        {
                            "text":  "brazil",
                            "points":  4
                        },
                        {
                            "text":  "norway",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180118,
        "question":  "We asked 100 women... If a rude man calls your breasts melons, what food might you call his package?",
        "answers":  [
                        {
                            "text":  "wiener",
                            "points":  33
                        },
                        {
                            "text":  "pickle/gherkin",
                            "points":  16
                        },
                        {
                            "text":  "peanut/nut",
                            "points":  13
                        },
                        {
                            "text":  "grape",
                            "points":  6
                        },
                        {
                            "text":  "raisin",
                            "points":  6
                        },
                        {
                            "text":  "cucumber",
                            "points":  5
                        },
                        {
                            "text":  "banana",
                            "points":  4
                        },
                        {
                            "text":  "baby carrot",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180119,
        "question":  "Name something the nicest jail in the world would have in every cell for the prisoners.",
        "answers":  [
                        {
                            "text":  "flat-screen tv",
                            "points":  33
                        },
                        {
                            "text":  "private bathroom",
                            "points":  15
                        },
                        {
                            "text":  "computer/wifi",
                            "points":  12
                        },
                        {
                            "text":  "nice bed/bedding",
                            "points":  7
                        },
                        {
                            "text":  "food/kitchen",
                            "points":  6
                        },
                        {
                            "text":  "spa/hot tub",
                            "points":  5
                        },
                        {
                            "text":  "cell phone",
                            "points":  4
                        },
                        {
                            "text":  "keys/exit door",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180120,
        "question":  "When Mr. Potato Head plays strip poker, what's the first thing to go?",
        "answers":  [
                        {
                            "text":  "hat",
                            "points":  32
                        },
                        {
                            "text":  "nose",
                            "points":  19
                        },
                        {
                            "text":  "ears",
                            "points":  11
                        },
                        {
                            "text":  "shoes/feet",
                            "points":  5
                        },
                        {
                            "text":  "eyes",
                            "points":  5
                        },
                        {
                            "text":  "hair/toupee",
                            "points":  5
                        },
                        {
                            "text":  "mustache",
                            "points":  5
                        },
                        {
                            "text":  "glasses",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180121,
        "question":  "We asked 100 married women... My man thinks he's a lion in the bedroom. But he's more like a what?",
        "answers":  [
                        {
                            "text":  "pussycat/kitten",
                            "points":  30
                        },
                        {
                            "text":  "lamb",
                            "points":  15
                        },
                        {
                            "text":  "bear/teddy bear",
                            "points":  11
                        },
                        {
                            "text":  "dog/puppy",
                            "points":  11
                        },
                        {
                            "text":  "tiger",
                            "points":  9
                        },
                        {
                            "text":  "ape/monkey",
                            "points":  4
                        },
                        {
                            "text":  "pig",
                            "points":  3
                        },
                        {
                            "text":  "rabbit",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180122,
        "question":  "Name something a man might decorate his beard with at Christmastime.",
        "answers":  [
                        {
                            "text":  "tinsel",
                            "points":  19
                        },
                        {
                            "text":  "ornaments",
                            "points":  14
                        },
                        {
                            "text":  "ribbons/bows",
                            "points":  12
                        },
                        {
                            "text":  "lights",
                            "points":  11
                        },
                        {
                            "text":  "glitter/sparkles",
                            "points":  11
                        },
                        {
                            "text":  "mistletoe",
                            "points":  9
                        },
                        {
                            "text":  "candy/food",
                            "points":  6
                        },
                        {
                            "text":  "cold, wet snow",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180123,
        "question":  "Name a hot food that a hot babe might call herself.",
        "answers":  [
                        {
                            "text":  "hot tamale",
                            "points":  34
                        },
                        {
                            "text":  "chili/pepper",
                            "points":  28
                        },
                        {
                            "text":  "hot chocolate",
                            "points":  6
                        },
                        {
                            "text":  "cherry pie",
                            "points":  4
                        },
                        {
                            "text":  "hot fudge/sundae",
                            "points":  3
                        },
                        {
                            "text":  "hot/sweet potato",
                            "points":  3
                        },
                        {
                            "text":  "taco",
                            "points":  3
                        },
                        {
                            "text":  "hot wings",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180124,
        "question":  "If he had a death wish, name an animal a man might compare his wife's legs to.",
        "answers":  [
                        {
                            "text":  "elephant",
                            "points":  33
                        },
                        {
                            "text":  "bird/ostrich",
                            "points":  21
                        },
                        {
                            "text":  "hippo",
                            "points":  13
                        },
                        {
                            "text":  "bear",
                            "points":  5
                        },
                        {
                            "text":  "giraffe",
                            "points":  3
                        },
                        {
                            "text":  "cow/bull",
                            "points":  3
                        },
                        {
                            "text":  "gator/croc",
                            "points":  3
                        },
                        {
                            "text":  "monkey/ape",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180125,
        "question":  "Name an animal that makes a sexy sound.",
        "answers":  [
                        {
                            "text":  "cat/in heat",
                            "points":  54
                        },
                        {
                            "text":  "tiger",
                            "points":  9
                        },
                        {
                            "text":  "leopard",
                            "points":  6
                        },
                        {
                            "text":  "lion",
                            "points":  6
                        },
                        {
                            "text":  "bear",
                            "points":  2
                        },
                        {
                            "text":  "goose",
                            "points":  2
                        },
                        {
                            "text":  "dolphin",
                            "points":  2
                        },
                        {
                            "text":  "sheep",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180126,
        "question":  "Name something surprising that Judge Judy might be hiding under her robe.",
        "answers":  [
                        {
                            "text":  "gun",
                            "points":  27
                        },
                        {
                            "text":  "bikini/sexy duds",
                            "points":  18
                        },
                        {
                            "text":  "fit nude bod",
                            "points":  14
                        },
                        {
                            "text":  "toy",
                            "points":  9
                        },
                        {
                            "text":  "booze/flask",
                            "points":  5
                        },
                        {
                            "text":  "snack/tuna sandwich",
                            "points":  4
                        },
                        {
                            "text":  "pajamas",
                            "points":  3
                        },
                        {
                            "text":  "pet/hissy kitty",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180127,
        "question":  "We asked 100 women... Fill in the blank: I love a man with ______. Too bad my man doesn't have it.",
        "answers":  [
                        {
                            "text":  "hair",
                            "points":  20
                        },
                        {
                            "text":  "money",
                            "points":  18
                        },
                        {
                            "text":  "brains/sense",
                            "points":  13
                        },
                        {
                            "text":  "ambition/a job",
                            "points":  11
                        },
                        {
                            "text":  "heart/compassion",
                            "points":  7
                        },
                        {
                            "text":  "humor/charm",
                            "points":  6
                        },
                        {
                            "text":  "hot body",
                            "points":  4
                        },
                        {
                            "text":  "class/manners",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180128,
        "question":  "We asked 100 men... If your doctor was an amateur magician, what might he pull out of his bottom?",
        "answers":  [
                        {
                            "text":  "thermometer",
                            "points":  18
                        },
                        {
                            "text":  "stethoscope",
                            "points":  17
                        },
                        {
                            "text":  "his bill",
                            "points":  13
                        },
                        {
                            "text":  "scalpel",
                            "points":  12
                        },
                        {
                            "text":  "rabbit",
                            "points":  11
                        },
                        {
                            "text":  "needle",
                            "points":  5
                        },
                        {
                            "text":  "gauze",
                            "points":  4
                        },
                        {
                            "text":  "gloves",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180129,
        "question":  "Name the most popular thing to ride at a nudist camp.",
        "answers":  [
                        {
                            "text":  "bicycle",
                            "points":  30
                        },
                        {
                            "text":  "horse",
                            "points":  20
                        },
                        {
                            "text":  "each other",
                            "points":  13
                        },
                        {
                            "text":  "waterslide",
                            "points":  5
                        },
                        {
                            "text":  "waves/surfboard",
                            "points":  5
                        },
                        {
                            "text":  "camel",
                            "points":  3
                        },
                        {
                            "text":  "seesaw",
                            "points":  3
                        },
                        {
                            "text":  "boat/raft",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180130,
        "question":  "Name something that would upset a woman if her man did it right after he kissed her.",
        "answers":  [
                        {
                            "text":  "wiped his mouth",
                            "points":  27
                        },
                        {
                            "text":  "burped",
                            "points":  19
                        },
                        {
                            "text":  "spit",
                            "points":  13
                        },
                        {
                            "text":  "threw up",
                            "points":  6
                        },
                        {
                            "text":  "brushed teeth",
                            "points":  5
                        },
                        {
                            "text":  "left/dumped her",
                            "points":  4
                        },
                        {
                            "text":  "yawned",
                            "points":  4
                        },
                        {
                            "text":  "made face/cringed",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180131,
        "question":  "We asked 100 married men... Name something your wife wants you to stop doing.",
        "answers":  [
                        {
                            "text":  "snoring",
                            "points":  18
                        },
                        {
                            "text":  "farting/dutch oven",
                            "points":  16
                        },
                        {
                            "text":  "watching porn",
                            "points":  12
                        },
                        {
                            "text":  "cussing/at kids",
                            "points":  11
                        },
                        {
                            "text":  "burping",
                            "points":  9
                        },
                        {
                            "text":  "smoking",
                            "points":  7
                        },
                        {
                            "text":  "breathing",
                            "points":  5
                        },
                        {
                            "text":  "leaving seat up",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180132,
        "question":  "Name a specific part of your body you would lick if you had a tongue the size of an anteater.",
        "answers":  [
                        {
                            "text":  "my twanger",
                            "points":  18
                        },
                        {
                            "text":  "my elbow",
                            "points":  14
                        },
                        {
                            "text":  "my ear/canal",
                            "points":  12
                        },
                        {
                            "text":  "my runny nose",
                            "points":  11
                        },
                        {
                            "text":  "my belly/button",
                            "points":  9
                        },
                        {
                            "text":  "my chin",
                            "points":  7
                        },
                        {
                            "text":  "my back",
                            "points":  6
                        },
                        {
                            "text":  "my tickly toes",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180133,
        "question":  "Name a question you think women ask Steve Harvey all the time.",
        "answers":  [
                        {
                            "text":  "married/single?",
                            "points":  40
                        },
                        {
                            "text":  "rub your head?",
                            "points":  12
                        },
                        {
                            "text":  "boxers or briefs?",
                            "points":  8
                        },
                        {
                            "text":  "how old?",
                            "points":  5
                        },
                        {
                            "text":  "why stache?/real?",
                            "points":  4
                        },
                        {
                            "text":  "where buy suits?",
                            "points":  4
                        },
                        {
                            "text":  "love advice?",
                            "points":  4
                        },
                        {
                            "text":  "who are you?",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180134,
        "question":  "Fill in the blank: You should never tell your boss that she's what?",
        "answers":  [
                        {
                            "text":  "borderline obese",
                            "points":  38
                        },
                        {
                            "text":  "mean/crabby",
                            "points":  11
                        },
                        {
                            "text":  "cute/hot",
                            "points":  10
                        },
                        {
                            "text":  "dumb/box o' rocks",
                            "points":  8
                        },
                        {
                            "text":  "wrong",
                            "points":  5
                        },
                        {
                            "text":  "lazy",
                            "points":  3
                        },
                        {
                            "text":  "ho",
                            "points":  3
                        },
                        {
                            "text":  "over the hill",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180135,
        "question":  "Name an appliance that describes your moves in the bedroom.",
        "answers":  [
                        {
                            "text":  "blender",
                            "points":  20
                        },
                        {
                            "text":  "oven/stove",
                            "points":  16
                        },
                        {
                            "text":  "washer",
                            "points":  16
                        },
                        {
                            "text":  "toaster",
                            "points":  7
                        },
                        {
                            "text":  "microwave",
                            "points":  6
                        },
                        {
                            "text":  "vacuum/hoover",
                            "points":  5
                        },
                        {
                            "text":  "slow cooker",
                            "points":  5
                        },
                        {
                            "text":  "mixer",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180136,
        "question":  "Name something some people do and don't care who's watching.",
        "answers":  [
                        {
                            "text":  "pick their nose",
                            "points":  30
                        },
                        {
                            "text":  "dance",
                            "points":  13
                        },
                        {
                            "text":  "kiss/grope/pda",
                            "points":  10
                        },
                        {
                            "text":  "scratch/adjust",
                            "points":  8
                        },
                        {
                            "text":  "talk/yell",
                            "points":  6
                        },
                        {
                            "text":  "yawn",
                            "points":  4
                        },
                        {
                            "text":  "pee",
                            "points":  4
                        },
                        {
                            "text":  "eat like a pig",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180137,
        "question":  "Name a place where you avoid making eye contact with people.",
        "answers":  [
                        {
                            "text":  "restroom/pee trough",
                            "points":  26
                        },
                        {
                            "text":  "jail/police stn.",
                            "points":  12
                        },
                        {
                            "text":  "bar/full o' skanks",
                            "points":  10
                        },
                        {
                            "text":  "subway",
                            "points":  7
                        },
                        {
                            "text":  "elevator",
                            "points":  7
                        },
                        {
                            "text":  "mall/store",
                            "points":  6
                        },
                        {
                            "text":  "doctor's office",
                            "points":  5
                        },
                        {
                            "text":  "church",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180138,
        "question":  "Name something people do with their fingers.",
        "answers":  [
                        {
                            "text":  "snap 'em",
                            "points":  23
                        },
                        {
                            "text":  "type/text",
                            "points":  18
                        },
                        {
                            "text":  "lick/suck on 'em",
                            "points":  8
                        },
                        {
                            "text":  "eat",
                            "points":  7
                        },
                        {
                            "text":  "pick their nose",
                            "points":  6
                        },
                        {
                            "text":  "count",
                            "points":  6
                        },
                        {
                            "text":  "write/finger paint",
                            "points":  5
                        },
                        {
                            "text":  "crack knuckles",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180139,
        "question":  "Some noses are the shape of what specific food?",
        "answers":  [
                        {
                            "text":  "banana",
                            "points":  25
                        },
                        {
                            "text":  "pear",
                            "points":  22
                        },
                        {
                            "text":  "carrot",
                            "points":  13
                        },
                        {
                            "text":  "cheese wedge",
                            "points":  4
                        },
                        {
                            "text":  "broccoli",
                            "points":  3
                        },
                        {
                            "text":  "cauliflower",
                            "points":  3
                        },
                        {
                            "text":  "grape",
                            "points":  3
                        },
                        {
                            "text":  "potato/mashed",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180140,
        "question":  "Name something you did at work that was inappropriate.",
        "answers":  [
                        {
                            "text":  "mad/cuss/flip off",
                            "points":  16
                        },
                        {
                            "text":  "sleep/all 8 hours",
                            "points":  11
                        },
                        {
                            "text":  "talk/gossip/joke",
                            "points":  11
                        },
                        {
                            "text":  "fart/in lunch room",
                            "points":  10
                        },
                        {
                            "text":  "flirt/kiss/spank",
                            "points":  9
                        },
                        {
                            "text":  "boink/on desk",
                            "points":  6
                        },
                        {
                            "text":  "lie",
                            "points":  4
                        },
                        {
                            "text":  "surf web",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180141,
        "question":  "Name something that wipes you out.",
        "answers":  [
                        {
                            "text":  "exercise/running",
                            "points":  26
                        },
                        {
                            "text":  "work",
                            "points":  14
                        },
                        {
                            "text":  "sun/heat",
                            "points":  7
                        },
                        {
                            "text":  "tappin' hot tail",
                            "points":  6
                        },
                        {
                            "text":  "kids/grandkids",
                            "points":  5
                        },
                        {
                            "text":  "boozing it up",
                            "points":  5
                        },
                        {
                            "text":  "toilet paper",
                            "points":  3
                        },
                        {
                            "text":  "homework/tests",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180142,
        "question":  "Name an alcoholic drink a stripper might call herself.",
        "answers":  [
                        {
                            "text":  "margarita",
                            "points":  11
                        },
                        {
                            "text":  "tequila",
                            "points":  11
                        },
                        {
                            "text":  "brandy",
                            "points":  10
                        },
                        {
                            "text":  "bloody mary",
                            "points":  9
                        },
                        {
                            "text":  "martini",
                            "points":  9
                        },
                        {
                            "text":  "sex on the beach",
                            "points":  7
                        },
                        {
                            "text":  "buttery nipple",
                            "points":  4
                        },
                        {
                            "text":  "screwdriver",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180143,
        "question":  "Name something on a car you'd be surprised a doctor called one of your body parts.",
        "answers":  [
                        {
                            "text":  "bumper",
                            "points":  13
                        },
                        {
                            "text":  "tire/wheel",
                            "points":  11
                        },
                        {
                            "text":  "headlights/lamps",
                            "points":  10
                        },
                        {
                            "text":  "trunk",
                            "points":  6
                        },
                        {
                            "text":  "stick shift/gear",
                            "points":  6
                        },
                        {
                            "text":  "horn",
                            "points":  5
                        },
                        {
                            "text":  "hood/ornament",
                            "points":  5
                        },
                        {
                            "text":  "engine/motor",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180144,
        "question":  "Name something you'd do if you saw a coworker sleeping on the job.",
        "answers":  [
                        {
                            "text":  "wake/scare them",
                            "points":  61
                        },
                        {
                            "text":  "laugh",
                            "points":  8
                        },
                        {
                            "text":  "ignore/let them be",
                            "points":  8
                        },
                        {
                            "text":  "join them",
                            "points":  7
                        },
                        {
                            "text":  "tell boss",
                            "points":  7
                        },
                        {
                            "text":  "take pic/vid",
                            "points":  5
                        },
                        {
                            "text":  "draw on them",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180145,
        "question":  "We asked 100 women... Name something you put into your cleavage on a hot day.",
        "answers":  [
                        {
                            "text":  "tissue/paper products",
                            "points":  36
                        },
                        {
                            "text":  "powder",
                            "points":  22
                        },
                        {
                            "text":  "ice/ice water",
                            "points":  22
                        },
                        {
                            "text":  "a towel",
                            "points":  7
                        },
                        {
                            "text":  "hankie",
                            "points":  6
                        },
                        {
                            "text":  "mini fan",
                            "points":  4
                        },
                        {
                            "text":  "perfume",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180146,
        "question":  "Name something that will make a cat or a woman purr.",
        "answers":  [
                        {
                            "text":  "pet/rub/scratch",
                            "points":  75
                        },
                        {
                            "text":  "milk/food",
                            "points":  8
                        },
                        {
                            "text":  "love/happiness",
                            "points":  5
                        },
                        {
                            "text":  "snuggling",
                            "points":  4
                        },
                        {
                            "text":  "gift/blingy collar",
                            "points":  3
                        },
                        {
                            "text":  "brushing hair",
                            "points":  2
                        },
                        {
                            "text":  "hot sex/in alley",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180147,
        "question":  "Tell me a part of your body you can hang a doughnut on.",
        "answers":  [
                        {
                            "text":  "finger/hand",
                            "points":  58
                        },
                        {
                            "text":  "my magic johnson",
                            "points":  20
                        },
                        {
                            "text":  "ear",
                            "points":  6
                        },
                        {
                            "text":  "nose",
                            "points":  5
                        },
                        {
                            "text":  "toe",
                            "points":  4
                        },
                        {
                            "text":  "arm",
                            "points":  3
                        },
                        {
                            "text":  "long pointy boobs",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180148,
        "question":  "Fill in the blank: I don't mind kissing my boss's behind, but I'd never kiss his what?",
        "answers":  [
                        {
                            "text":  "lips/nose/face",
                            "points":  55
                        },
                        {
                            "text":  "real butt/rosebud",
                            "points":  10
                        },
                        {
                            "text":  "feet/shoes",
                            "points":  9
                        },
                        {
                            "text":  "pork sword",
                            "points":  9
                        },
                        {
                            "text":  "spouse/mate",
                            "points":  9
                        },
                        {
                            "text":  "hand/ring",
                            "points":  5
                        },
                        {
                            "text":  "bald head",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180149,
        "question":  "We asked 100 men... If you could be a woman for a day, name a place you'd spend the day hanging out.",
        "answers":  [
                        {
                            "text":  "lingerie store/mall",
                            "points":  44
                        },
                        {
                            "text":  "locker rm./restroom",
                            "points":  24
                        },
                        {
                            "text":  "spa",
                            "points":  12
                        },
                        {
                            "text":  "bar/nightclub",
                            "points":  6
                        },
                        {
                            "text":  "beach",
                            "points":  6
                        },
                        {
                            "text":  "gym",
                            "points":  5
                        },
                        {
                            "text":  "home/in bed",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180150,
        "question":  "We asked 100 women... Name something on a hunk you'd like to grab a chunk of.",
        "answers":  [
                        {
                            "text":  "muscly man can",
                            "points":  38
                        },
                        {
                            "text":  "arm/bulging bi",
                            "points":  20
                        },
                        {
                            "text":  "cute cheeks",
                            "points":  13
                        },
                        {
                            "text":  "hair",
                            "points":  9
                        },
                        {
                            "text":  "abs/waist",
                            "points":  8
                        },
                        {
                            "text":  "chest/pecs",
                            "points":  7
                        },
                        {
                            "text":  "his jolly ween giant",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180151,
        "question":  "We asked 100 women... When it comes to attracting men, name a part of your body that's your secret weapon.",
        "answers":  [
                        {
                            "text":  "perky twins",
                            "points":  34
                        },
                        {
                            "text":  "bette davis eyes",
                            "points":  25
                        },
                        {
                            "text":  "sly smile",
                            "points":  14
                        },
                        {
                            "text":  "bookshelf booty",
                            "points":  14
                        },
                        {
                            "text":  "mommy long legs",
                            "points":  5
                        },
                        {
                            "text":  "cunning mind",
                            "points":  5
                        },
                        {
                            "text":  "lips/open mouth",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180152,
        "question":  "We asked 100 married women... Name a part of your husband that you wish wasn't so darn hairy.",
        "answers":  [
                        {
                            "text":  "his back",
                            "points":  27
                        },
                        {
                            "text":  "his pooper",
                            "points":  20
                        },
                        {
                            "text":  "his pits",
                            "points":  14
                        },
                        {
                            "text":  "his face",
                            "points":  14
                        },
                        {
                            "text":  "his legs",
                            "points":  11
                        },
                        {
                            "text":  "his chest",
                            "points":  11
                        },
                        {
                            "text":  "his low hangers",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180153,
        "question":  "Name something Kermit might say Miss Piggy does just like a pig.",
        "answers":  [
                        {
                            "text":  "eats",
                            "points":  61
                        },
                        {
                            "text":  "snorts/makes noises",
                            "points":  27
                        },
                        {
                            "text":  "kisses",
                            "points":  2
                        },
                        {
                            "text":  "looks like",
                            "points":  2
                        },
                        {
                            "text":  "plays in the mud",
                            "points":  2
                        },
                        {
                            "text":  "humps",
                            "points":  2
                        },
                        {
                            "text":  "smells like",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180154,
        "question":  "Name a place on his body Steve Harvey is rumored to have a tattoo.",
        "answers":  [
                        {
                            "text":  "butt/crack",
                            "points":  52
                        },
                        {
                            "text":  "arm",
                            "points":  29
                        },
                        {
                            "text":  "back",
                            "points":  8
                        },
                        {
                            "text":  "chest",
                            "points":  3
                        },
                        {
                            "text":  "leg/inner thighs",
                            "points":  2
                        },
                        {
                            "text":  "under mustache",
                            "points":  2
                        },
                        {
                            "text":  "shoulder",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180155,
        "question":  "Women have cellulite. Name something unwanted that men have on their bodies.",
        "answers":  [
                        {
                            "text":  "hair/wooly back",
                            "points":  51
                        },
                        {
                            "text":  "gut/love handles",
                            "points":  33
                        },
                        {
                            "text":  "man boobs/nipples",
                            "points":  6
                        },
                        {
                            "text":  "zits",
                            "points":  2
                        },
                        {
                            "text":  "moles",
                            "points":  2
                        },
                        {
                            "text":  "odor/wife's scent",
                            "points":  2
                        },
                        {
                            "text":  "wrinkles/saggy skin",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180156,
        "question":  "Name a fruit a man might use to refer to a part of his wife's anatomy.",
        "answers":  [
                        {
                            "text":  "melons",
                            "points":  48
                        },
                        {
                            "text":  "peaches",
                            "points":  18
                        },
                        {
                            "text":  "pears",
                            "points":  14
                        },
                        {
                            "text":  "apples",
                            "points":  8
                        },
                        {
                            "text":  "banana",
                            "points":  4
                        },
                        {
                            "text":  "oranges",
                            "points":  4
                        },
                        {
                            "text":  "grapes",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180157,
        "question":  "Name something you'd be surprised to see your grandma bouncing on.",
        "answers":  [
                        {
                            "text":  "trampoline",
                            "points":  44
                        },
                        {
                            "text":  "gramps/her fella",
                            "points":  18
                        },
                        {
                            "text":  "a bed/mine",
                            "points":  16
                        },
                        {
                            "text":  "a ball",
                            "points":  8
                        },
                        {
                            "text":  "bounce house",
                            "points":  5
                        },
                        {
                            "text":  "a pogo stick",
                            "points":  4
                        },
                        {
                            "text":  "animal/kangaroo",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180158,
        "question":  "You're in a buffet line. You see someone sneezing close to the food. What do you do?",
        "answers":  [
                        {
                            "text":  "leave/not eat",
                            "points":  43
                        },
                        {
                            "text":  "avoid area/food",
                            "points":  34
                        },
                        {
                            "text":  "complain to staff",
                            "points":  10
                        },
                        {
                            "text":  "confront/hit him",
                            "points":  5
                        },
                        {
                            "text":  "block sneeze/tissue",
                            "points":  2
                        },
                        {
                            "text":  "barf/gag",
                            "points":  2
                        },
                        {
                            "text":  "make face/raise brow",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180159,
        "question":  "Name a reason a divorced man might not recognize his ex-wife.",
        "answers":  [
                        {
                            "text":  "got thin/porky",
                            "points":  40
                        },
                        {
                            "text":  "surgery/sex change",
                            "points":  26
                        },
                        {
                            "text":  "changed hair/wig",
                            "points":  24
                        },
                        {
                            "text":  "she has on glasses",
                            "points":  2
                        },
                        {
                            "text":  "amnesia/memory prob.",
                            "points":  2
                        },
                        {
                            "text":  "he's blind",
                            "points":  2
                        },
                        {
                            "text":  "he's drunk",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180160,
        "question":  "We asked 100 married men... You're home alone. The doorbell rings. It's a naked lady. What do you do?",
        "answers":  [
                        {
                            "text":  "\"come in, toots\"!",
                            "points":  37
                        },
                        {
                            "text":  "slam door shut",
                            "points":  20
                        },
                        {
                            "text":  "give towel/duds",
                            "points":  12
                        },
                        {
                            "text":  "smile/laugh",
                            "points":  12
                        },
                        {
                            "text":  "say, \"what the...\"",
                            "points":  11
                        },
                        {
                            "text":  "run away",
                            "points":  3
                        },
                        {
                            "text":  "\"whatcha sellin'?\"",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180161,
        "question":  "We asked 100 men... I like a woman to tease me with a sexy what?",
        "answers":  [
                        {
                            "text":  "outfit/bikini",
                            "points":  32
                        },
                        {
                            "text":  "body/biscuit",
                            "points":  21
                        },
                        {
                            "text":  "dance/striptease",
                            "points":  16
                        },
                        {
                            "text":  "look/wink",
                            "points":  11
                        },
                        {
                            "text":  "voice/comment",
                            "points":  8
                        },
                        {
                            "text":  "smile",
                            "points":  6
                        },
                        {
                            "text":  "walk/strut",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180162,
        "question":  "If babies could text, name a message they'd text mommy.",
        "answers":  [
                        {
                            "text":  "hungry/bring boob!",
                            "points":  69
                        },
                        {
                            "text":  "change me/big dump",
                            "points":  12
                        },
                        {
                            "text":  "love ya, mommy",
                            "points":  7
                        },
                        {
                            "text":  "waaaaaa",
                            "points":  3
                        },
                        {
                            "text":  "i'm sleepy",
                            "points":  2
                        },
                        {
                            "text":  "get me outta here",
                            "points":  2
                        },
                        {
                            "text":  "hiiiiii!",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180163,
        "question":  "What do you do when your dog poops and you've run out of bags?",
        "answers":  [
                        {
                            "text":  "leave it/run!",
                            "points":  54
                        },
                        {
                            "text":  "paper towel/napkin",
                            "points":  20
                        },
                        {
                            "text":  "go get bag",
                            "points":  8
                        },
                        {
                            "text":  "pick up w/ leaf",
                            "points":  7
                        },
                        {
                            "text":  "use newspaper",
                            "points":  3
                        },
                        {
                            "text":  "bury/cover poop",
                            "points":  3
                        },
                        {
                            "text":  "use scooper/shovel",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180164,
        "question":  "Name a part of a dog's daily routine that's also part of a man's daily routine.",
        "answers":  [
                        {
                            "text":  "pee/shoot a dookie",
                            "points":  53
                        },
                        {
                            "text":  "chow time",
                            "points":  18
                        },
                        {
                            "text":  "sleep/lie around",
                            "points":  13
                        },
                        {
                            "text":  "walk/run",
                            "points":  5
                        },
                        {
                            "text":  "clean/groom self",
                            "points":  4
                        },
                        {
                            "text":  "scratch himself",
                            "points":  2
                        },
                        {
                            "text":  "sniff/himself",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180165,
        "question":  "We asked 100 men... Name something a male stripper has that's better than yours.",
        "answers":  [
                        {
                            "text":  "bod/groomed groin",
                            "points":  51
                        },
                        {
                            "text":  "moves",
                            "points":  13
                        },
                        {
                            "text":  "money",
                            "points":  12
                        },
                        {
                            "text":  "hair",
                            "points":  8
                        },
                        {
                            "text":  "confidence/guts",
                            "points":  8
                        },
                        {
                            "text":  "job",
                            "points":  3
                        },
                        {
                            "text":  "g-string/clothes",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180166,
        "question":  "We asked 100 married men... What do you worry your wife might want to do to you?",
        "answers":  [
                        {
                            "text":  "dump me/divorce",
                            "points":  49
                        },
                        {
                            "text":  "chop off my ween",
                            "points":  13
                        },
                        {
                            "text":  "refuse to boink",
                            "points":  9
                        },
                        {
                            "text":  "kill me",
                            "points":  8
                        },
                        {
                            "text":  "spend all my dough",
                            "points":  7
                        },
                        {
                            "text":  "cut my hair",
                            "points":  6
                        },
                        {
                            "text":  "clean/chores",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180167,
        "question":  "Name something at the North Pole the elves might play with when Santa's not around.",
        "answers":  [
                        {
                            "text":  "toys/games",
                            "points":  41
                        },
                        {
                            "text":  "rudolph/reindeer",
                            "points":  18
                        },
                        {
                            "text":  "the sleigh",
                            "points":  15
                        },
                        {
                            "text":  "snow",
                            "points":  8
                        },
                        {
                            "text":  "mrs. claus",
                            "points":  7
                        },
                        {
                            "text":  "each other",
                            "points":  6
                        },
                        {
                            "text":  "santa's list",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180168,
        "question":  "Fill in the blank: If a male dog is flirting with a female dog, she might say, \"Keep your ______ to yourself.\"",
        "answers":  [
                        {
                            "text":  "nose",
                            "points":  37
                        },
                        {
                            "text":  "paws",
                            "points":  32
                        },
                        {
                            "text":  "tongue/licking",
                            "points":  9
                        },
                        {
                            "text":  "\"red rocket\"/dong",
                            "points":  8
                        },
                        {
                            "text":  "tail",
                            "points":  5
                        },
                        {
                            "text":  "chewbone",
                            "points":  3
                        },
                        {
                            "text":  "fleas",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180169,
        "question":  "We asked 100 married women... If you were planning to murder your husband, name something you'd buy with cash to do the deed.",
        "answers":  [
                        {
                            "text":  "a gun",
                            "points":  37
                        },
                        {
                            "text":  "poison",
                            "points":  27
                        },
                        {
                            "text":  "rope",
                            "points":  14
                        },
                        {
                            "text":  "a hit man",
                            "points":  8
                        },
                        {
                            "text":  "sedatives/pills",
                            "points":  5
                        },
                        {
                            "text":  "a knife",
                            "points":  4
                        },
                        {
                            "text":  "an axe",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180170,
        "question":  "Name something a woman gets rid of when she wants to jump-start her love life.",
        "answers":  [
                        {
                            "text":  "her man/ex",
                            "points":  36
                        },
                        {
                            "text":  "weight/beer belly",
                            "points":  24
                        },
                        {
                            "text":  "clothes/her bra",
                            "points":  20
                        },
                        {
                            "text":  "wedding ring",
                            "points":  5
                        },
                        {
                            "text":  "photos",
                            "points":  5
                        },
                        {
                            "text":  "hair/on her legs",
                            "points":  4
                        },
                        {
                            "text":  "vlad the vibrator",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180171,
        "question":  "Face it -- if it were really up to a man, where would they take a woman on a date?",
        "answers":  [
                        {
                            "text":  "sport event/activity",
                            "points":  34
                        },
                        {
                            "text":  "bar/nightclub",
                            "points":  21
                        },
                        {
                            "text":  "home/to bed",
                            "points":  21
                        },
                        {
                            "text":  "restaurant/popeyes",
                            "points":  15
                        },
                        {
                            "text":  "hotel/motel 6",
                            "points":  2
                        },
                        {
                            "text":  "strip joint",
                            "points":  2
                        },
                        {
                            "text":  "chili cook-off",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180172,
        "question":  "We asked 100 men... Name a sport you could watch women play all day.",
        "answers":  [
                        {
                            "text":  "beach volleyball",
                            "points":  32
                        },
                        {
                            "text":  "wrestling/mud",
                            "points":  27
                        },
                        {
                            "text":  "tennis",
                            "points":  16
                        },
                        {
                            "text":  "swimming",
                            "points":  14
                        },
                        {
                            "text":  "basketball",
                            "points":  4
                        },
                        {
                            "text":  "gymnastics",
                            "points":  2
                        },
                        {
                            "text":  "lingerie football",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180173,
        "question":  "If you were trapped inside an ATM, name something you might do to try to get people's attention.",
        "answers":  [
                        {
                            "text":  "toss cash out",
                            "points":  25
                        },
                        {
                            "text":  "yell/cuss",
                            "points":  24
                        },
                        {
                            "text":  "bang/knock",
                            "points":  16
                        },
                        {
                            "text":  "s.o.s. note",
                            "points":  16
                        },
                        {
                            "text":  "withhold money",
                            "points":  12
                        },
                        {
                            "text":  "sing",
                            "points":  2
                        },
                        {
                            "text":  "keep atm cards",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180174,
        "question":  "Name something a man might be ashamed to say his wife is in charge of.",
        "answers":  [
                        {
                            "text":  "$$$/purchases",
                            "points":  74
                        },
                        {
                            "text":  "car repairs",
                            "points":  7
                        },
                        {
                            "text":  "sex/spanking him",
                            "points":  4
                        },
                        {
                            "text":  "him/his life",
                            "points":  4
                        },
                        {
                            "text":  "household repairs",
                            "points":  3
                        },
                        {
                            "text":  "driving",
                            "points":  2
                        },
                        {
                            "text":  "dressing him",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180175,
        "question":  "Besides pot, name something a pothead might buy a bag of.",
        "answers":  [
                        {
                            "text":  "chips/cheetos",
                            "points":  66
                        },
                        {
                            "text":  "candy",
                            "points":  9
                        },
                        {
                            "text":  "rolling papers",
                            "points":  8
                        },
                        {
                            "text":  "'shrooms",
                            "points":  4
                        },
                        {
                            "text":  "brownies",
                            "points":  3
                        },
                        {
                            "text":  "cookies",
                            "points":  3
                        },
                        {
                            "text":  "donuts",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180176,
        "question":  "We asked 100 single men... What do you look for in a woman now that you might not want in a wife?",
        "answers":  [
                        {
                            "text":  "easy/big ole ho",
                            "points":  60
                        },
                        {
                            "text":  "drinks/colt 45",
                            "points":  20
                        },
                        {
                            "text":  "flashy/tacky",
                            "points":  5
                        },
                        {
                            "text":  "beautiful",
                            "points":  4
                        },
                        {
                            "text":  "lotsa money",
                            "points":  3
                        },
                        {
                            "text":  "no kids/hates 'em",
                            "points":  2
                        },
                        {
                            "text":  "sarcasm",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180177,
        "question":  "Name some childish behavior that's funnier to men than to women.",
        "answers":  [
                        {
                            "text":  "fart/noises",
                            "points":  57
                        },
                        {
                            "text":  "burp/alphabet",
                            "points":  17
                        },
                        {
                            "text":  "pick boogers",
                            "points":  9
                        },
                        {
                            "text":  "put undies on head",
                            "points":  5
                        },
                        {
                            "text":  "touch tatas",
                            "points":  3
                        },
                        {
                            "text":  "throw tantrums",
                            "points":  3
                        },
                        {
                            "text":  "cussin'",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180178,
        "question":  "Name something a wife might do to her bald husband's head in the bedroom.",
        "answers":  [
                        {
                            "text":  "rub/massage it",
                            "points":  53
                        },
                        {
                            "text":  "kiss it",
                            "points":  20
                        },
                        {
                            "text":  "lick it",
                            "points":  8
                        },
                        {
                            "text":  "draw on/draw hair",
                            "points":  8
                        },
                        {
                            "text":  "shave it",
                            "points":  3
                        },
                        {
                            "text":  "moisturize/oil it",
                            "points":  2
                        },
                        {
                            "text":  "sit on/engulf it",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180179,
        "question":  "A bunch of pirates were relaxing at a nudist colony. Name something they might still be wearing.",
        "answers":  [
                        {
                            "text":  "eyepatches",
                            "points":  51
                        },
                        {
                            "text":  "pirate hats",
                            "points":  20
                        },
                        {
                            "text":  "swords",
                            "points":  12
                        },
                        {
                            "text":  "earrings/jewelry",
                            "points":  6
                        },
                        {
                            "text":  "hooks",
                            "points":  3
                        },
                        {
                            "text":  "parrots on shoulders",
                            "points":  2
                        },
                        {
                            "text":  "wooden legs",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180180,
        "question":  "Name something a woman checks out to see if her date is rich.",
        "answers":  [
                        {
                            "text":  "his ride",
                            "points":  48
                        },
                        {
                            "text":  "wallet/bank acct.",
                            "points":  18
                        },
                        {
                            "text":  "his clothes/shoes",
                            "points":  13
                        },
                        {
                            "text":  "watch/jewelry",
                            "points":  8
                        },
                        {
                            "text":  "credit score/limit",
                            "points":  3
                        },
                        {
                            "text":  "google/social media",
                            "points":  3
                        },
                        {
                            "text":  "his pad",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180181,
        "question":  "The party doesn't really get started until you see people doing what?",
        "answers":  [
                        {
                            "text":  "dancing",
                            "points":  47
                        },
                        {
                            "text":  "drink'g/jell-o shots",
                            "points":  30
                        },
                        {
                            "text":  "laughing",
                            "points":  8
                        },
                        {
                            "text":  "talking",
                            "points":  3
                        },
                        {
                            "text":  "hurling",
                            "points":  3
                        },
                        {
                            "text":  "eating",
                            "points":  3
                        },
                        {
                            "text":  "strippin'",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180182,
        "question":  "We asked 100 married women... Name one word you'd use to describe Steve Harvey you wouldn't use to describe your man.",
        "answers":  [
                        {
                            "text":  "funny/comedian",
                            "points":  43
                        },
                        {
                            "text":  "rich",
                            "points":  15
                        },
                        {
                            "text":  "bald",
                            "points":  13
                        },
                        {
                            "text":  "black/chocolate",
                            "points":  11
                        },
                        {
                            "text":  "sexy/suave",
                            "points":  8
                        },
                        {
                            "text":  "chivalrous",
                            "points":  3
                        },
                        {
                            "text":  "listener",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180183,
        "question":  "When the geezers at the strip club came on to 90-year-old Edible Edna, she hit them with her what?",
        "answers":  [
                        {
                            "text":  "cane/crutch",
                            "points":  41
                        },
                        {
                            "text":  "purse/fanny pack",
                            "points":  26
                        },
                        {
                            "text":  "saggy puppies",
                            "points":  18
                        },
                        {
                            "text":  "thong/granny panties",
                            "points":  4
                        },
                        {
                            "text":  "dentures",
                            "points":  3
                        },
                        {
                            "text":  "tassels/pasties",
                            "points":  2
                        },
                        {
                            "text":  "hand",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180184,
        "question":  "Name a part of your body you prefer to look at with your glasses off.",
        "answers":  [
                        {
                            "text":  "buddha belly",
                            "points":  40
                        },
                        {
                            "text":  "pimply pooper",
                            "points":  24
                        },
                        {
                            "text":  "tragic face/eyes",
                            "points":  21
                        },
                        {
                            "text":  "saggy jugs",
                            "points":  4
                        },
                        {
                            "text":  "decaying hair",
                            "points":  3
                        },
                        {
                            "text":  "ken doll dong",
                            "points":  2
                        },
                        {
                            "text":  "arms/pits",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180185,
        "question":  "We asked 100 women... Name something you do with your mouth to get a man's attention.",
        "answers":  [
                        {
                            "text":  "lick my lips",
                            "points":  39
                        },
                        {
                            "text":  "kiss",
                            "points":  24
                        },
                        {
                            "text":  "talk/yell",
                            "points":  10
                        },
                        {
                            "text":  "smile",
                            "points":  10
                        },
                        {
                            "text":  "whistle",
                            "points":  7
                        },
                        {
                            "text":  "pout",
                            "points":  3
                        },
                        {
                            "text":  "bite lip/bite him",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180186,
        "question":  "Name something you'd do if another driver flipped you off.",
        "answers":  [
                        {
                            "text":  "flip them off",
                            "points":  31
                        },
                        {
                            "text":  "smile/laugh/wave",
                            "points":  19
                        },
                        {
                            "text":  "honk",
                            "points":  14
                        },
                        {
                            "text":  "ignore/drive on",
                            "points":  14
                        },
                        {
                            "text":  "cuss/yell",
                            "points":  11
                        },
                        {
                            "text":  "chase/tail them",
                            "points":  4
                        },
                        {
                            "text":  "cut off/cause wreck",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180187,
        "question":  "Name something at the playground that would be a sexy place to make love.",
        "answers":  [
                        {
                            "text":  "swing",
                            "points":  30
                        },
                        {
                            "text":  "slide",
                            "points":  27
                        },
                        {
                            "text":  "seesaw",
                            "points":  14
                        },
                        {
                            "text":  "merry-go-round",
                            "points":  10
                        },
                        {
                            "text":  "sandbox",
                            "points":  7
                        },
                        {
                            "text":  "tree house/playhouse",
                            "points":  6
                        },
                        {
                            "text":  "the grass",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180188,
        "question":  "Fill in the blank: Having a bird poop on you is bad. But imagine how much worse it would be if ______s could fly.",
        "answers":  [
                        {
                            "text":  "elephants",
                            "points":  29
                        },
                        {
                            "text":  "cows",
                            "points":  22
                        },
                        {
                            "text":  "pigs",
                            "points":  21
                        },
                        {
                            "text":  "horses",
                            "points":  12
                        },
                        {
                            "text":  "dogs",
                            "points":  7
                        },
                        {
                            "text":  "humans",
                            "points":  3
                        },
                        {
                            "text":  "rats",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180189,
        "question":  "Fill in the blank: You're never too old for your mom to ______ you.",
        "answers":  [
                        {
                            "text":  "scold/lecture",
                            "points":  27
                        },
                        {
                            "text":  "kiss/mouth kiss",
                            "points":  20
                        },
                        {
                            "text":  "slap/bare butt",
                            "points":  18
                        },
                        {
                            "text":  "hug/cuddle with",
                            "points":  17
                        },
                        {
                            "text":  "cook for you",
                            "points":  9
                        },
                        {
                            "text":  "love",
                            "points":  3
                        },
                        {
                            "text":  "call",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180190,
        "question":  "Fill in the blank: Grandma shocked us all when she was arrested for what?",
        "answers":  [
                        {
                            "text":  "public nudity",
                            "points":  25
                        },
                        {
                            "text":  "turning tricks",
                            "points":  23
                        },
                        {
                            "text":  "drugs/ran coke ring",
                            "points":  21
                        },
                        {
                            "text":  "stealing",
                            "points":  12
                        },
                        {
                            "text":  "dui",
                            "points":  10
                        },
                        {
                            "text":  "hitting a cop",
                            "points":  3
                        },
                        {
                            "text":  "protesting",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180191,
        "question":  "We asked 100 married men... Name a sea creature your mother-in-law reminds you of.",
        "answers":  [
                        {
                            "text":  "shark/fish",
                            "points":  21
                        },
                        {
                            "text":  "dolphin",
                            "points":  14
                        },
                        {
                            "text":  "whale",
                            "points":  14
                        },
                        {
                            "text":  "mermaid",
                            "points":  13
                        },
                        {
                            "text":  "octopus",
                            "points":  12
                        },
                        {
                            "text":  "turtle",
                            "points":  12
                        },
                        {
                            "text":  "crab",
                            "points":  10
                        }
                    ]
    },
    {
        "id":  180192,
        "question":  "Tell me a nicer way to say someone is dead.",
        "answers":  [
                        {
                            "text":  "passed on/away",
                            "points":  72
                        },
                        {
                            "text":  "deceased",
                            "points":  9
                        },
                        {
                            "text":  "gone/home/to glory",
                            "points":  4
                        },
                        {
                            "text":  "expired",
                            "points":  3
                        },
                        {
                            "text":  "no longer w/ us",
                            "points":  3
                        },
                        {
                            "text":  "in heaven",
                            "points":  2
                        },
                        {
                            "text":  "kicked the bucket",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180193,
        "question":  "Name a secret about himself a man might only tell his wife on his deathbed.",
        "answers":  [
                        {
                            "text":  "i cheated/daily",
                            "points":  70
                        },
                        {
                            "text":  "i dream of dudes",
                            "points":  9
                        },
                        {
                            "text":  "i hid $/atm pin",
                            "points":  5
                        },
                        {
                            "text":  "2nd family/8 kids",
                            "points":  4
                        },
                        {
                            "text":  "i'm a criminal",
                            "points":  3
                        },
                        {
                            "text":  "i do love you",
                            "points":  2
                        },
                        {
                            "text":  "sick of/hate you",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180194,
        "question":  "Name something the world's greatest kisser probably does before he kisses a woman.",
        "answers":  [
                        {
                            "text":  "freshens breath",
                            "points":  64
                        },
                        {
                            "text":  "puckers up",
                            "points":  10
                        },
                        {
                            "text":  "chapstick/balm",
                            "points":  7
                        },
                        {
                            "text":  "licks his lips",
                            "points":  5
                        },
                        {
                            "text":  "practices/in mirror",
                            "points":  4
                        },
                        {
                            "text":  "gazes in her eyes",
                            "points":  3
                        },
                        {
                            "text":  "touches her neck",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180195,
        "question":  "Some men are chick magnets. What might make a man a chick repellent?",
        "answers":  [
                        {
                            "text":  "stench/breath",
                            "points":  61
                        },
                        {
                            "text":  "douchey/personality",
                            "points":  15
                        },
                        {
                            "text":  "ugly face",
                            "points":  7
                        },
                        {
                            "text":  "broke",
                            "points":  4
                        },
                        {
                            "text":  "he's a porker",
                            "points":  3
                        },
                        {
                            "text":  "bad hair/bald",
                            "points":  3
                        },
                        {
                            "text":  "smokes/cigars",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180196,
        "question":  "Tell me a furry creature a really hairy man might be nicknamed.",
        "answers":  [
                        {
                            "text":  "bear/teddy bear",
                            "points":  45
                        },
                        {
                            "text":  "ape/monkey/kong",
                            "points":  31
                        },
                        {
                            "text":  "bigfoot/sasquatch",
                            "points":  9
                        },
                        {
                            "text":  "chewbacca/wookiee",
                            "points":  3
                        },
                        {
                            "text":  "beaver",
                            "points":  3
                        },
                        {
                            "text":  "werewolf/wolf",
                            "points":  2
                        },
                        {
                            "text":  "mouse/rat",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180197,
        "question":  "At a cannibal restaurant, tell me a reason a customer might send his leg of man back to the kitchen.",
        "answers":  [
                        {
                            "text":  "too rare/kicking",
                            "points":  44
                        },
                        {
                            "text":  "too hairy",
                            "points":  26
                        },
                        {
                            "text":  "overdone/tough",
                            "points":  15
                        },
                        {
                            "text":  "prefers another cut",
                            "points":  4
                        },
                        {
                            "text":  "not meaty enough",
                            "points":  2
                        },
                        {
                            "text":  "too fatty",
                            "points":  2
                        },
                        {
                            "text":  "too small/short",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180198,
        "question":  "Name something Steve Harvey has had several of in his life.",
        "answers":  [
                        {
                            "text":  "shows/jobs",
                            "points":  39
                        },
                        {
                            "text":  "wives/lovers",
                            "points":  36
                        },
                        {
                            "text":  "laughs/jokes",
                            "points":  6
                        },
                        {
                            "text":  "suits/old pimp suits",
                            "points":  5
                        },
                        {
                            "text":  "cars",
                            "points":  4
                        },
                        {
                            "text":  "kids",
                            "points":  3
                        },
                        {
                            "text":  "tv guests",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180199,
        "question":  "Name a reason a man might not be able to look a woman in the eye.",
        "answers":  [
                        {
                            "text":  "he's lying",
                            "points":  34
                        },
                        {
                            "text":  "he cheated",
                            "points":  29
                        },
                        {
                            "text":  "shy & likes her",
                            "points":  9
                        },
                        {
                            "text":  "he's blind",
                            "points":  7
                        },
                        {
                            "text":  "her face is vile",
                            "points":  6
                        },
                        {
                            "text":  "has delightful boobs",
                            "points":  6
                        },
                        {
                            "text":  "height difference",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180200,
        "question":  "After a wild party, name something you wouldn't want to find in your bathtub.",
        "answers":  [
                        {
                            "text":  "person/drunk & nude",
                            "points":  34
                        },
                        {
                            "text":  "chunky puke",
                            "points":  22
                        },
                        {
                            "text":  "dead body",
                            "points":  15
                        },
                        {
                            "text":  "float'g doody/pee",
                            "points":  8
                        },
                        {
                            "text":  "animal/gator",
                            "points":  7
                        },
                        {
                            "text":  "used condom",
                            "points":  5
                        },
                        {
                            "text":  "panties/undies",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180201,
        "question":  "If someone says \"I've got a whopper,\" what might they be talking about?",
        "answers":  [
                        {
                            "text":  "burger/sandwich",
                            "points":  31
                        },
                        {
                            "text":  "a big fish",
                            "points":  23
                        },
                        {
                            "text":  "story/lie/gossip",
                            "points":  23
                        },
                        {
                            "text":  "headache/migraine",
                            "points":  7
                        },
                        {
                            "text":  "a wonder down under",
                            "points":  7
                        },
                        {
                            "text":  "bruise/black eye",
                            "points":  2
                        },
                        {
                            "text":  "an onion booty",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180202,
        "question":  "We asked 100 married people... Name something annoying the dog does when you and your spouse are trying to get romantic.",
        "answers":  [
                        {
                            "text":  "jumps on bed",
                            "points":  29
                        },
                        {
                            "text":  "barks/whines",
                            "points":  23
                        },
                        {
                            "text":  "gets between us",
                            "points":  16
                        },
                        {
                            "text":  "licks self/us",
                            "points":  14
                        },
                        {
                            "text":  "stares",
                            "points":  8
                        },
                        {
                            "text":  "sniffs/our butts",
                            "points":  3
                        },
                        {
                            "text":  "joins in",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180203,
        "question":  "Name something scary you never want to find under your bed.",
        "answers":  [
                        {
                            "text":  "snake/king cobra",
                            "points":  27
                        },
                        {
                            "text":  "bug/scorpion",
                            "points":  23
                        },
                        {
                            "text":  "monster/chucky",
                            "points":  18
                        },
                        {
                            "text":  "person/mom-in-law",
                            "points":  12
                        },
                        {
                            "text":  "mouse/rat",
                            "points":  9
                        },
                        {
                            "text":  "dead body",
                            "points":  4
                        },
                        {
                            "text":  "poop/my hubby's",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180204,
        "question":  "Name someone who might say, \"Big breasts are my business.\"",
        "answers":  [
                        {
                            "text":  "doc/plastic surgeon",
                            "points":  67
                        },
                        {
                            "text":  "dolly parton",
                            "points":  6
                        },
                        {
                            "text":  "bra-maker/shop",
                            "points":  5
                        },
                        {
                            "text":  "stripper/club owner",
                            "points":  5
                        },
                        {
                            "text":  "hugh hefner",
                            "points":  5
                        },
                        {
                            "text":  "colonel sanders",
                            "points":  3
                        },
                        {
                            "text":  "a farmer",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180205,
        "question":  "We asked 100 women... Name something you want to do whenever you see a big bald-headed man.",
        "answers":  [
                        {
                            "text":  "rub his head",
                            "points":  57
                        },
                        {
                            "text":  "smile",
                            "points":  10
                        },
                        {
                            "text":  "kiss his head",
                            "points":  8
                        },
                        {
                            "text":  "shine/wax/oil head",
                            "points":  7
                        },
                        {
                            "text":  "stare",
                            "points":  6
                        },
                        {
                            "text":  "run/back away",
                            "points":  3
                        },
                        {
                            "text":  "get him a hat",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180206,
        "question":  "We asked 100 married men... Name a button on the remote that you wish worked on your wife.",
        "answers":  [
                        {
                            "text":  "mute",
                            "points":  52
                        },
                        {
                            "text":  "off/power",
                            "points":  12
                        },
                        {
                            "text":  "delete",
                            "points":  9
                        },
                        {
                            "text":  "rewind",
                            "points":  8
                        },
                        {
                            "text":  "next",
                            "points":  5
                        },
                        {
                            "text":  "volume",
                            "points":  4
                        },
                        {
                            "text":  "pause",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180207,
        "question":  "Fill in the blank: It was distressing for Barbie to discover that Ken only liked her for her what?",
        "answers":  [
                        {
                            "text":  "bod/milk wagons",
                            "points":  47
                        },
                        {
                            "text":  "dreamhouse",
                            "points":  17
                        },
                        {
                            "text":  "pink car/jeep",
                            "points":  10
                        },
                        {
                            "text":  "beautiful face",
                            "points":  10
                        },
                        {
                            "text":  "clothes/shoes",
                            "points":  4
                        },
                        {
                            "text":  "money",
                            "points":  3
                        },
                        {
                            "text":  "hair/silky locks",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180208,
        "question":  "Based on your shape, what fruit are you?",
        "answers":  [
                        {
                            "text":  "pear",
                            "points":  42
                        },
                        {
                            "text":  "banana",
                            "points":  24
                        },
                        {
                            "text":  "apple",
                            "points":  17
                        },
                        {
                            "text":  "melon/watermelon",
                            "points":  5
                        },
                        {
                            "text":  "peach",
                            "points":  2
                        },
                        {
                            "text":  "squash",
                            "points":  2
                        },
                        {
                            "text":  "pineapple",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180209,
        "question":  "Fill in the blank: At Christmas, a stripper might enter the stage dressed up like ______.",
        "answers":  [
                        {
                            "text":  "a trampy elf",
                            "points":  42
                        },
                        {
                            "text":  "mrs. claus",
                            "points":  20
                        },
                        {
                            "text":  "santa",
                            "points":  18
                        },
                        {
                            "text":  "a gift",
                            "points":  7
                        },
                        {
                            "text":  "a reindeer",
                            "points":  3
                        },
                        {
                            "text":  "a christmas tree",
                            "points":  2
                        },
                        {
                            "text":  "an angel",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180210,
        "question":  "The good news is you have a winning lottery ticket. What might be the bad news?",
        "answers":  [
                        {
                            "text":  "lost/tossed it",
                            "points":  34
                        },
                        {
                            "text":  "taxes",
                            "points":  19
                        },
                        {
                            "text":  "other winners",
                            "points":  14
                        },
                        {
                            "text":  "it's expired",
                            "points":  13
                        },
                        {
                            "text":  "tiny jackpot/$1",
                            "points":  8
                        },
                        {
                            "text":  "pals/family want $",
                            "points":  3
                        },
                        {
                            "text":  "fake ticket",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180211,
        "question":  "Name something some people can do with their mouths open and closed.",
        "answers":  [
                        {
                            "text":  "eat/chew",
                            "points":  33
                        },
                        {
                            "text":  "breathe",
                            "points":  25
                        },
                        {
                            "text":  "sleep/snore",
                            "points":  16
                        },
                        {
                            "text":  "hum",
                            "points":  11
                        },
                        {
                            "text":  "talk",
                            "points":  4
                        },
                        {
                            "text":  "kiss",
                            "points":  3
                        },
                        {
                            "text":  "walk/run",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180212,
        "question":  "If Dracula's wife discovered that he'd been cheating, name something she might do to his coffin.",
        "answers":  [
                        {
                            "text":  "nail/seal shut",
                            "points":  32
                        },
                        {
                            "text":  "open/let light in",
                            "points":  25
                        },
                        {
                            "text":  "burn it",
                            "points":  16
                        },
                        {
                            "text":  "fill with garlic",
                            "points":  11
                        },
                        {
                            "text":  "bury it",
                            "points":  4
                        },
                        {
                            "text":  "chop it up",
                            "points":  3
                        },
                        {
                            "text":  "stake/dagger in it",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180213,
        "question":  "We asked 100 married women... Some days, I'd be willing to trade my man for a really good what?",
        "answers":  [
                        {
                            "text":  "massage/spa day",
                            "points":  32
                        },
                        {
                            "text":  "bank account",
                            "points":  21
                        },
                        {
                            "text":  "dog",
                            "points":  18
                        },
                        {
                            "text":  "young stud",
                            "points":  8
                        },
                        {
                            "text":  "vacation",
                            "points":  7
                        },
                        {
                            "text":  "drink",
                            "points":  5
                        },
                        {
                            "text":  "nap",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180214,
        "question":  "If men planned weddings, name something they would want bridesmaids to wear.",
        "answers":  [
                        {
                            "text":  "bikini",
                            "points":  27
                        },
                        {
                            "text":  "lingerie/pasties",
                            "points":  22
                        },
                        {
                            "text":  "short/sexy dress",
                            "points":  21
                        },
                        {
                            "text":  "not a dang thing",
                            "points":  12
                        },
                        {
                            "text":  "heels/hooker boots",
                            "points":  5
                        },
                        {
                            "text":  "jeans/leggings",
                            "points":  5
                        },
                        {
                            "text":  "skimpy top/halter",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180215,
        "question":  "A man would hate to hear his child say, \"I saw mommy kissing Santa Claus just like she kisses\" who?",
        "answers":  [
                        {
                            "text":  "the mailman",
                            "points":  68
                        },
                        {
                            "text":  "neighbor",
                            "points":  7
                        },
                        {
                            "text":  "the milkman",
                            "points":  6
                        },
                        {
                            "text":  "daddy",
                            "points":  4
                        },
                        {
                            "text":  "the dog",
                            "points":  3
                        },
                        {
                            "text":  "the pool boy",
                            "points":  3
                        },
                        {
                            "text":  "my uncle",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180216,
        "question":  "We're all going to die someday. So tell me what you'd like to be doing when you go.",
        "answers":  [
                        {
                            "text":  "sleeping",
                            "points":  56
                        },
                        {
                            "text":  "sex/out with bang",
                            "points":  16
                        },
                        {
                            "text":  "chillin' with fam",
                            "points":  6
                        },
                        {
                            "text":  "praising god",
                            "points":  6
                        },
                        {
                            "text":  "travel'g/beach",
                            "points":  5
                        },
                        {
                            "text":  "tv/art film",
                            "points":  2
                        },
                        {
                            "text":  "shop'g/for coffin",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180217,
        "question":  "Name a tool a plumber could carry between his crack.",
        "answers":  [
                        {
                            "text":  "wrench",
                            "points":  54
                        },
                        {
                            "text":  "hammer",
                            "points":  13
                        },
                        {
                            "text":  "plunger",
                            "points":  11
                        },
                        {
                            "text":  "screwdriver",
                            "points":  9
                        },
                        {
                            "text":  "caulk/putty",
                            "points":  2
                        },
                        {
                            "text":  "file",
                            "points":  2
                        },
                        {
                            "text":  "tape measure",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180218,
        "question":  "Name a place a lonely guy might put his inflatable doll when his mother comes to visit.",
        "answers":  [
                        {
                            "text":  "closet",
                            "points":  48
                        },
                        {
                            "text":  "under bed/mattress",
                            "points":  31
                        },
                        {
                            "text":  "attic",
                            "points":  6
                        },
                        {
                            "text":  "basement",
                            "points":  2
                        },
                        {
                            "text":  "in the trash",
                            "points":  2
                        },
                        {
                            "text":  "in the pool",
                            "points":  2
                        },
                        {
                            "text":  "car trunk",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180219,
        "question":  "Like it or not, name a place people have to go.",
        "answers":  [
                        {
                            "text":  "bathroom",
                            "points":  48
                        },
                        {
                            "text":  "work",
                            "points":  19
                        },
                        {
                            "text":  "doctor/dentist",
                            "points":  9
                        },
                        {
                            "text":  "grocery store",
                            "points":  5
                        },
                        {
                            "text":  "court/jury duty",
                            "points":  4
                        },
                        {
                            "text":  "dmv",
                            "points":  4
                        },
                        {
                            "text":  "the grave/hell",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180220,
        "question":  "Fill in the blank: I'm so excited, I could what?",
        "answers":  [
                        {
                            "text":  "scream/shout",
                            "points":  47
                        },
                        {
                            "text":  "pee/drop dookies",
                            "points":  17
                        },
                        {
                            "text":  "burst/explode",
                            "points":  10
                        },
                        {
                            "text":  "cry",
                            "points":  7
                        },
                        {
                            "text":  "die",
                            "points":  4
                        },
                        {
                            "text":  "spit",
                            "points":  4
                        },
                        {
                            "text":  "jump",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180221,
        "question":  "We asked 100 women... Fill in the blank: When I think of my ex, it makes me want to what?",
        "answers":  [
                        {
                            "text":  "puke/gag",
                            "points":  47
                        },
                        {
                            "text":  "scream/yell",
                            "points":  16
                        },
                        {
                            "text":  "laugh/smile",
                            "points":  11
                        },
                        {
                            "text":  "cry",
                            "points":  7
                        },
                        {
                            "text":  "hit something/him",
                            "points":  5
                        },
                        {
                            "text":  "kill",
                            "points":  4
                        },
                        {
                            "text":  "talk/apologize",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180222,
        "question":  "Name a good place to go when you want to cry.",
        "answers":  [
                        {
                            "text":  "bed/bedroom",
                            "points":  46
                        },
                        {
                            "text":  "shower/bathroom",
                            "points":  27
                        },
                        {
                            "text":  "movie/theater",
                            "points":  9
                        },
                        {
                            "text":  "my car",
                            "points":  4
                        },
                        {
                            "text":  "a friend's",
                            "points":  3
                        },
                        {
                            "text":  "in a closet",
                            "points":  2
                        },
                        {
                            "text":  "the woods",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180223,
        "question":  "Name a reason a woman might say, \"My date last night reminded me of Steve Harvey.\"",
        "answers":  [
                        {
                            "text":  "funny",
                            "points":  44
                        },
                        {
                            "text":  "thick tickly stache",
                            "points":  14
                        },
                        {
                            "text":  "bald milk dud head",
                            "points":  11
                        },
                        {
                            "text":  "sharp dresser",
                            "points":  9
                        },
                        {
                            "text":  "smile/pearly whites",
                            "points":  7
                        },
                        {
                            "text":  "loud & chatty",
                            "points":  5
                        },
                        {
                            "text":  "black",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180224,
        "question":  "You'd hate to wake up to find your dog licking your what?",
        "answers":  [
                        {
                            "text":  "face/ears",
                            "points":  42
                        },
                        {
                            "text":  "toes/feet",
                            "points":  18
                        },
                        {
                            "text":  "ripe booty",
                            "points":  13
                        },
                        {
                            "text":  "junk/member",
                            "points":  12
                        },
                        {
                            "text":  "food/dishes",
                            "points":  4
                        },
                        {
                            "text":  "undies/duds/shoes",
                            "points":  2
                        },
                        {
                            "text":  "toothbrush",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180225,
        "question":  "Name an animal a farmer's wife might say the farmer acts like in the bedroom.",
        "answers":  [
                        {
                            "text":  "pig/wild hog",
                            "points":  35
                        },
                        {
                            "text":  "bull",
                            "points":  23
                        },
                        {
                            "text":  "horse/stallion",
                            "points":  10
                        },
                        {
                            "text":  "chicken",
                            "points":  9
                        },
                        {
                            "text":  "cow",
                            "points":  8
                        },
                        {
                            "text":  "ass/mule",
                            "points":  5
                        },
                        {
                            "text":  "goat",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180226,
        "question":  "Sad news: Your rich uncle died. Sadder news: He left all his money to who?",
        "answers":  [
                        {
                            "text":  "the dog/pet",
                            "points":  35
                        },
                        {
                            "text":  "charity/church",
                            "points":  21
                        },
                        {
                            "text":  "sibling",
                            "points":  11
                        },
                        {
                            "text":  "his mate/6th wife",
                            "points":  9
                        },
                        {
                            "text":  "gov't/political grp.",
                            "points":  7
                        },
                        {
                            "text":  "his worthless kid",
                            "points":  6
                        },
                        {
                            "text":  "mistress/a ho",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180227,
        "question":  "Name something you might do to prepare yourself for your first day at a nudist camp.",
        "answers":  [
                        {
                            "text":  "diet/work out",
                            "points":  32
                        },
                        {
                            "text":  "shave/wax",
                            "points":  27
                        },
                        {
                            "text":  "tan/bronzer",
                            "points":  17
                        },
                        {
                            "text":  "bathe/scrub crack",
                            "points":  6
                        },
                        {
                            "text":  "walk around nude",
                            "points":  6
                        },
                        {
                            "text":  "buy sunscreen",
                            "points":  3
                        },
                        {
                            "text":  "mentally prepare",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180228,
        "question":  "We asked 100 men... Name something you might reach for right after you kiss your lover.",
        "answers":  [
                        {
                            "text":  "firm melons/bra",
                            "points":  24
                        },
                        {
                            "text":  "mint/mouthwash",
                            "points":  24
                        },
                        {
                            "text":  "her hot badonk",
                            "points":  16
                        },
                        {
                            "text":  "zucchini beanie",
                            "points":  10
                        },
                        {
                            "text":  "light switch",
                            "points":  10
                        },
                        {
                            "text":  "booze",
                            "points":  6
                        },
                        {
                            "text":  "my/her glasses",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180229,
        "question":  "We asked 100 married women... Fill in the blank: You'd laugh if your husband said, \"Honey, let's make whoopee in the\" where?",
        "answers":  [
                        {
                            "text":  "car",
                            "points":  23
                        },
                        {
                            "text":  "bathroom/shower",
                            "points":  17
                        },
                        {
                            "text":  "garage",
                            "points":  14
                        },
                        {
                            "text":  "kitchen",
                            "points":  14
                        },
                        {
                            "text":  "yard/garden",
                            "points":  14
                        },
                        {
                            "text":  "basement",
                            "points":  6
                        },
                        {
                            "text":  "living room",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180230,
        "question":  "Name something the world's richest dog might hire someone to do for him.",
        "answers":  [
                        {
                            "text":  "scratch/rub",
                            "points":  18
                        },
                        {
                            "text":  "clean/groom",
                            "points":  18
                        },
                        {
                            "text":  "scoop poop",
                            "points":  18
                        },
                        {
                            "text":  "walk/run him",
                            "points":  17
                        },
                        {
                            "text":  "cook/feed him",
                            "points":  11
                        },
                        {
                            "text":  "play/fetch",
                            "points":  9
                        },
                        {
                            "text":  "lick him/his nads",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180231,
        "question":  "Name something a naïve mom might think her grown son has never done.",
        "answers":  [
                        {
                            "text":  "lasso the lizard",
                            "points":  61
                        },
                        {
                            "text":  "drugs/weed",
                            "points":  11
                        },
                        {
                            "text":  "had alcohol",
                            "points":  8
                        },
                        {
                            "text":  "smoked cigs",
                            "points":  5
                        },
                        {
                            "text":  "dated/kissed",
                            "points":  3
                        },
                        {
                            "text":  "lied",
                            "points":  2
                        },
                        {
                            "text":  "stolen",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180232,
        "question":  "Name something that comes to mind when you hear the word \"flat.\"",
        "answers":  [
                        {
                            "text":  "tire",
                            "points":  60
                        },
                        {
                            "text":  "chest/raisin boobs",
                            "points":  17
                        },
                        {
                            "text":  "pancake",
                            "points":  5
                        },
                        {
                            "text":  "british apartment",
                            "points":  3
                        },
                        {
                            "text":  "bread",
                            "points":  3
                        },
                        {
                            "text":  "hair",
                            "points":  2
                        },
                        {
                            "text":  "feet",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180233,
        "question":  "Name something in your house that grandpa wouldn't know how to turn on.",
        "answers":  [
                        {
                            "text":  "computer/laptop",
                            "points":  56
                        },
                        {
                            "text":  "tv",
                            "points":  18
                        },
                        {
                            "text":  "dvd/vcr/dvr",
                            "points":  9
                        },
                        {
                            "text":  "cell phone",
                            "points":  3
                        },
                        {
                            "text":  "coffee maker",
                            "points":  2
                        },
                        {
                            "text":  "lamp/lights",
                            "points":  2
                        },
                        {
                            "text":  "grandma",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180234,
        "question":  "Name something people say they'd never dare do because they're afraid of being caught.",
        "answers":  [
                        {
                            "text":  "steal/rob bank",
                            "points":  46
                        },
                        {
                            "text":  "kink/tickle my tulip",
                            "points":  19
                        },
                        {
                            "text":  "cheat on mate",
                            "points":  13
                        },
                        {
                            "text":  "streak/skinny-dip",
                            "points":  7
                        },
                        {
                            "text":  "drugs",
                            "points":  3
                        },
                        {
                            "text":  "speed/run lights",
                            "points":  2
                        },
                        {
                            "text":  "murder",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180235,
        "question":  "Name something a stripper considers part of her work uniform.",
        "answers":  [
                        {
                            "text":  "g-string/panties",
                            "points":  44
                        },
                        {
                            "text":  "pasties/tassels",
                            "points":  15
                        },
                        {
                            "text":  "bra",
                            "points":  13
                        },
                        {
                            "text":  "9-inch heels",
                            "points":  8
                        },
                        {
                            "text":  "glitter",
                            "points":  6
                        },
                        {
                            "text":  "stockings/socks",
                            "points":  3
                        },
                        {
                            "text":  "boobs",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180236,
        "question":  "If Mrs. Claus discovered on Christmas Eve that Santa had been cheating on her, name something she might do that could mess up his night.",
        "answers":  [
                        {
                            "text":  "mess with deer",
                            "points":  43
                        },
                        {
                            "text":  "hide/trash sleigh",
                            "points":  23
                        },
                        {
                            "text":  "sabotage/take sack",
                            "points":  7
                        },
                        {
                            "text":  "steal/ruin suit",
                            "points":  7
                        },
                        {
                            "text":  "swipe/switch list",
                            "points":  5
                        },
                        {
                            "text":  "slip him booze/meds",
                            "points":  4
                        },
                        {
                            "text":  "leave him",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180237,
        "question":  "Name something that the dog can't help finding sexy about the cat.",
        "answers":  [
                        {
                            "text":  "playful tail",
                            "points":  39
                        },
                        {
                            "text":  "flirty purr/meow",
                            "points":  18
                        },
                        {
                            "text":  "walk/sashay",
                            "points":  9
                        },
                        {
                            "text":  "puckered booty",
                            "points":  9
                        },
                        {
                            "text":  "face/eyes/whiskers",
                            "points":  8
                        },
                        {
                            "text":  "silky fur",
                            "points":  6
                        },
                        {
                            "text":  "pungent poop",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180238,
        "question":  "What would you do if you were making fun of the boss in the restroom and suddenly realized he's in one of the stalls?",
        "answers":  [
                        {
                            "text":  "leave/stop talk'g",
                            "points":  33
                        },
                        {
                            "text":  "laugh/just kidding",
                            "points":  22
                        },
                        {
                            "text":  "\"die\"/cry/turn red",
                            "points":  14
                        },
                        {
                            "text":  "apologize",
                            "points":  8
                        },
                        {
                            "text":  "quit/find new job",
                            "points":  8
                        },
                        {
                            "text":  "say nice things",
                            "points":  4
                        },
                        {
                            "text":  "disguise voice/self",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180239,
        "question":  "We asked 100 men... Name a kind of plastic surgery you'd like to get.",
        "answers":  [
                        {
                            "text":  "lipo/tummy tuck",
                            "points":  32
                        },
                        {
                            "text":  "elong the shlong",
                            "points":  24
                        },
                        {
                            "text":  "nose job",
                            "points":  16
                        },
                        {
                            "text":  "hair implants",
                            "points":  9
                        },
                        {
                            "text":  "facelift",
                            "points":  5
                        },
                        {
                            "text":  "pec job",
                            "points":  3
                        },
                        {
                            "text":  "calf implants",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180240,
        "question":  "We asked 100 men... What might you do if a friend started telling you details about his vasectomy?",
        "answers":  [
                        {
                            "text":  "leave/run away",
                            "points":  29
                        },
                        {
                            "text":  "cringe/hold my junk",
                            "points":  23
                        },
                        {
                            "text":  "\"stop! tmi, bro!\"",
                            "points":  17
                        },
                        {
                            "text":  "listen/supportive",
                            "points":  12
                        },
                        {
                            "text":  "cover my ears",
                            "points":  5
                        },
                        {
                            "text":  "laugh/make jokes",
                            "points":  3
                        },
                        {
                            "text":  "say, \"ouch!\"",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180241,
        "question":  "Name the worst thing for someone to show up drunk to.",
        "answers":  [
                        {
                            "text":  "wedding/their own",
                            "points":  23
                        },
                        {
                            "text":  "work/interview",
                            "points":  22
                        },
                        {
                            "text":  "funeral",
                            "points":  16
                        },
                        {
                            "text":  "church",
                            "points":  14
                        },
                        {
                            "text":  "court/jury duty",
                            "points":  10
                        },
                        {
                            "text":  "kid's b-day party",
                            "points":  4
                        },
                        {
                            "text":  "aa meeting",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180242,
        "question":  "We asked 100 women... Fill in the blank: I'd never want to date a man who had three ______s.",
        "answers":  [
                        {
                            "text":  "wives/exes/women",
                            "points":  57
                        },
                        {
                            "text":  "kids",
                            "points":  14
                        },
                        {
                            "text":  "nipples/breasts",
                            "points":  7
                        },
                        {
                            "text":  "cats/dogs",
                            "points":  4
                        },
                        {
                            "text":  "personalities/issues",
                            "points":  3
                        },
                        {
                            "text":  "man nuggets",
                            "points":  3
                        },
                        {
                            "text":  "eyes",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180243,
        "question":  "Grandpa's dentures slipped out of his mouth and into grandma's what?",
        "answers":  [
                        {
                            "text":  "food/dish/drink",
                            "points":  47
                        },
                        {
                            "text":  "lap",
                            "points":  19
                        },
                        {
                            "text":  "mouth",
                            "points":  11
                        },
                        {
                            "text":  "cleavage/bra",
                            "points":  6
                        },
                        {
                            "text":  "cavernous hoo-ha",
                            "points":  3
                        },
                        {
                            "text":  "hands",
                            "points":  3
                        },
                        {
                            "text":  "purse",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180244,
        "question":  "In the all-nudist marching band, the musician playing which instrument is most likely to hurt himself?",
        "answers":  [
                        {
                            "text":  "drums",
                            "points":  45
                        },
                        {
                            "text":  "cymbals",
                            "points":  21
                        },
                        {
                            "text":  "trombone",
                            "points":  10
                        },
                        {
                            "text":  "tuba",
                            "points":  8
                        },
                        {
                            "text":  "saxophone",
                            "points":  3
                        },
                        {
                            "text":  "clarinet",
                            "points":  2
                        },
                        {
                            "text":  "accordion",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180245,
        "question":  "We asked 100 men... When you break up with your psycho girlfriend, name something you should remember to get back.",
        "answers":  [
                        {
                            "text":  "my keys",
                            "points":  40
                        },
                        {
                            "text":  "ring/jewelry",
                            "points":  31
                        },
                        {
                            "text":  "my clothes",
                            "points":  7
                        },
                        {
                            "text":  "my mind/sanity",
                            "points":  4
                        },
                        {
                            "text":  "$$$/black amex",
                            "points":  3
                        },
                        {
                            "text":  "my life",
                            "points":  3
                        },
                        {
                            "text":  "my furniture",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180246,
        "question":  "Name a famous woman whose bottom might be called a work of art.",
        "answers":  [
                        {
                            "text":  "kim kardashian",
                            "points":  37
                        },
                        {
                            "text":  "jennifer lopez",
                            "points":  29
                        },
                        {
                            "text":  "beyonce",
                            "points":  12
                        },
                        {
                            "text":  "marilyn monroe",
                            "points":  5
                        },
                        {
                            "text":  "nicki minaj",
                            "points":  4
                        },
                        {
                            "text":  "madonna",
                            "points":  2
                        },
                        {
                            "text":  "aphrodite",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180247,
        "question":  "Name something a woman does to forget the guy who dumped her.",
        "answers":  [
                        {
                            "text":  "find a new hunk",
                            "points":  36
                        },
                        {
                            "text":  "drink/with gal pals",
                            "points":  22
                        },
                        {
                            "text":  "binge eat",
                            "points":  16
                        },
                        {
                            "text":  "get rid of pics",
                            "points":  7
                        },
                        {
                            "text":  "take a vacay",
                            "points":  4
                        },
                        {
                            "text":  "toss his stuff/gifts",
                            "points":  3
                        },
                        {
                            "text":  "no facebook/unfriend",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180248,
        "question":  "We asked 100 married women... When you first met your husband, what did he have that he no longer does?",
        "answers":  [
                        {
                            "text":  "hair",
                            "points":  34
                        },
                        {
                            "text":  "job/money",
                            "points":  17
                        },
                        {
                            "text":  "youth",
                            "points":  12
                        },
                        {
                            "text":  "buff bod",
                            "points":  10
                        },
                        {
                            "text":  "handsome face",
                            "points":  7
                        },
                        {
                            "text":  "car/pimpmobile",
                            "points":  6
                        },
                        {
                            "text":  "manners",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180249,
        "question":  "Name something specific you'd do if your neighbors were nude sunbathing on their lawn.",
        "answers":  [
                        {
                            "text":  "not look/close blinds",
                            "points":  31
                        },
                        {
                            "text":  "peek/get binoculars",
                            "points":  28
                        },
                        {
                            "text":  "call 911/po-po",
                            "points":  10
                        },
                        {
                            "text":  "take pic/film it",
                            "points":  9
                        },
                        {
                            "text":  "join in",
                            "points":  5
                        },
                        {
                            "text":  "laugh/smile coyly",
                            "points":  5
                        },
                        {
                            "text":  "say hi/borrow sugar",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180250,
        "question":  "Name a word a woman might use to describe her date that rhymes with \"hickey.\"",
        "answers":  [
                        {
                            "text":  "picky",
                            "points":  27
                        },
                        {
                            "text":  "dicky",
                            "points":  14
                        },
                        {
                            "text":  "sticky",
                            "points":  13
                        },
                        {
                            "text":  "icky",
                            "points":  12
                        },
                        {
                            "text":  "tricky",
                            "points":  12
                        },
                        {
                            "text":  "sickie",
                            "points":  7
                        },
                        {
                            "text":  "licky",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  180251,
        "question":  "We asked 100 men... If you had a tail, name a place that you'd go where it would be wagging.",
        "answers":  [
                        {
                            "text":  "bar",
                            "points":  26
                        },
                        {
                            "text":  "strip joint",
                            "points":  24
                        },
                        {
                            "text":  "sporting event",
                            "points":  17
                        },
                        {
                            "text":  "beach/nude beach",
                            "points":  13
                        },
                        {
                            "text":  "home/bedroom",
                            "points":  4
                        },
                        {
                            "text":  "mall/car shop",
                            "points":  4
                        },
                        {
                            "text":  "theme/water park",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180252,
        "question":  "Name something some people don't replace until it's completely dead.",
        "answers":  [
                        {
                            "text":  "battery",
                            "points":  50
                        },
                        {
                            "text":  "car/truck",
                            "points":  10
                        },
                        {
                            "text":  "light bulb",
                            "points":  9
                        },
                        {
                            "text":  "phone",
                            "points":  6
                        },
                        {
                            "text":  "plants/flowers",
                            "points":  6
                        },
                        {
                            "text":  "tv",
                            "points":  5
                        },
                        {
                            "text":  "spouse",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180253,
        "question":  "Name something a mom would be shocked to hear her baby ask for on a baby monitor.",
        "answers":  [
                        {
                            "text":  "hennessy/booze",
                            "points":  38
                        },
                        {
                            "text":  "food/milk/boob",
                            "points":  22
                        },
                        {
                            "text":  "pack of smokes",
                            "points":  14
                        },
                        {
                            "text":  "mom, dad, anybody???",
                            "points":  5
                        },
                        {
                            "text":  "cash/untraceable",
                            "points":  4
                        },
                        {
                            "text":  "clean diaper",
                            "points":  4
                        },
                        {
                            "text":  "drugs/a doob",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180254,
        "question":  "Name something a five-year-old might ask a bank to loan him money to buy.",
        "answers":  [
                        {
                            "text":  "toys",
                            "points":  31
                        },
                        {
                            "text":  "bike/tricycle",
                            "points":  26
                        },
                        {
                            "text":  "candy/gum",
                            "points":  16
                        },
                        {
                            "text":  "a pet/pony",
                            "points":  5
                        },
                        {
                            "text":  "gift/for mom",
                            "points":  5
                        },
                        {
                            "text":  "video game/system",
                            "points":  5
                        },
                        {
                            "text":  "latest iphone",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180255,
        "question":  "We asked 100 women... I went out with a guy whose apartment smelled like the inside of a what?",
        "answers":  [
                        {
                            "text":  "toilet/bathroom",
                            "points":  29
                        },
                        {
                            "text":  "gym/locker room",
                            "points":  22
                        },
                        {
                            "text":  "sock/shoe",
                            "points":  20
                        },
                        {
                            "text":  "fish/market",
                            "points":  6
                        },
                        {
                            "text":  "garbage can/truck",
                            "points":  5
                        },
                        {
                            "text":  "restaurant/bakery",
                            "points":  4
                        },
                        {
                            "text":  "brewery/bar",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180256,
        "question":  "Name a number that most men exaggerate.",
        "answers":  [
                        {
                            "text":  "size of \"inch worm\"",
                            "points":  24
                        },
                        {
                            "text":  "salary/bank acct.",
                            "points":  23
                        },
                        {
                            "text":  "height",
                            "points":  14
                        },
                        {
                            "text":  "# of conquests",
                            "points":  14
                        },
                        {
                            "text":  "age",
                            "points":  6
                        },
                        {
                            "text":  "iq",
                            "points":  5
                        },
                        {
                            "text":  "size of fish",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180257,
        "question":  "Fill in the blank: Steve Harvey is one of the ______est guys around.",
        "answers":  [
                        {
                            "text":  "funniest",
                            "points":  57
                        },
                        {
                            "text":  "coolest",
                            "points":  9
                        },
                        {
                            "text":  "baldest",
                            "points":  6
                        },
                        {
                            "text":  "weirdest",
                            "points":  6
                        },
                        {
                            "text":  "goofiest/silliest",
                            "points":  4
                        },
                        {
                            "text":  "nicest/sweetest",
                            "points":  4
                        },
                        {
                            "text":  "loudest",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180258,
        "question":  "At some point in your life, name something you've been kicked out of.",
        "answers":  [
                        {
                            "text":  "bar/nightclub",
                            "points":  53
                        },
                        {
                            "text":  "school/class",
                            "points":  19
                        },
                        {
                            "text":  "job/work",
                            "points":  5
                        },
                        {
                            "text":  "home/my boo's house",
                            "points":  4
                        },
                        {
                            "text":  "concert/choir",
                            "points":  3
                        },
                        {
                            "text":  "cafe/waffle house",
                            "points":  3
                        },
                        {
                            "text":  "movie theater",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180259,
        "question":  "Name something you wouldn't want to see your dog aiming at when he lifts his leg.",
        "answers":  [
                        {
                            "text":  "me/my open mouth",
                            "points":  50
                        },
                        {
                            "text":  "furniture",
                            "points":  12
                        },
                        {
                            "text":  "shoes/clothes",
                            "points":  10
                        },
                        {
                            "text":  "other person",
                            "points":  7
                        },
                        {
                            "text":  "computer",
                            "points":  4
                        },
                        {
                            "text":  "tv",
                            "points":  3
                        },
                        {
                            "text":  "car/tires",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180260,
        "question":  "When you're hired for a new job, name some information you might neglect to tell the boss.",
        "answers":  [
                        {
                            "text":  "work history/fired",
                            "points":  49
                        },
                        {
                            "text":  "my age",
                            "points":  12
                        },
                        {
                            "text":  "bun in the oven",
                            "points":  11
                        },
                        {
                            "text":  "jailtime/murderer",
                            "points":  8
                        },
                        {
                            "text":  "always sick",
                            "points":  5
                        },
                        {
                            "text":  "late/long lunches",
                            "points":  2
                        },
                        {
                            "text":  "love to do drugs",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180261,
        "question":  "Fill in the blank: I'm not proud of it, but I have prayed for what?",
        "answers":  [
                        {
                            "text":  "money/success",
                            "points":  46
                        },
                        {
                            "text":  "revenge/ex to die",
                            "points":  15
                        },
                        {
                            "text":  "good/bad weather",
                            "points":  10
                        },
                        {
                            "text":  "peen/punani",
                            "points":  7
                        },
                        {
                            "text":  "sports/the cubs",
                            "points":  6
                        },
                        {
                            "text":  "love",
                            "points":  3
                        },
                        {
                            "text":  "food/ice cream",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180262,
        "question":  "Fill in the blanks: If a woman had to choose between a man and her ______, she'd choose her ______.",
        "answers":  [
                        {
                            "text":  "pet/goldfish",
                            "points":  41
                        },
                        {
                            "text":  "family/kids/hubby",
                            "points":  21
                        },
                        {
                            "text":  "best friend",
                            "points":  6
                        },
                        {
                            "text":  "vibrator",
                            "points":  6
                        },
                        {
                            "text":  "purse",
                            "points":  5
                        },
                        {
                            "text":  "money/credit card",
                            "points":  5
                        },
                        {
                            "text":  "career",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180263,
        "question":  "Name something of a person's that might literally be in the toilet.",
        "answers":  [
                        {
                            "text":  "whiz/corn snake",
                            "points":  36
                        },
                        {
                            "text":  "phone",
                            "points":  23
                        },
                        {
                            "text":  "credit/finances",
                            "points":  9
                        },
                        {
                            "text":  "job",
                            "points":  8
                        },
                        {
                            "text":  "cologne",
                            "points":  5
                        },
                        {
                            "text":  "toothbrush",
                            "points":  5
                        },
                        {
                            "text":  "their booty",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180264,
        "question":  "Name a place a guy gets a job where he's surrounded by boobs.",
        "answers":  [
                        {
                            "text":  "strip joint",
                            "points":  35
                        },
                        {
                            "text":  "hooters/restaurant",
                            "points":  26
                        },
                        {
                            "text":  "dr.'s/hospital",
                            "points":  10
                        },
                        {
                            "text":  "bar/nightclub",
                            "points":  6
                        },
                        {
                            "text":  "gov't/congress",
                            "points":  5
                        },
                        {
                            "text":  "gym",
                            "points":  4
                        },
                        {
                            "text":  "bra factory",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180265,
        "question":  "Name something specific that might cause your bottom to be sore.",
        "answers":  [
                        {
                            "text":  "sitting too long",
                            "points":  30
                        },
                        {
                            "text":  "riding a horse",
                            "points":  21
                        },
                        {
                            "text":  "spanking",
                            "points":  16
                        },
                        {
                            "text":  "itchy achy 'rhoids",
                            "points":  7
                        },
                        {
                            "text":  "riding a bike",
                            "points":  6
                        },
                        {
                            "text":  "a violent poo",
                            "points":  5
                        },
                        {
                            "text":  "falling on it",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180266,
        "question":  "Name a place you go where everyone is lying down.",
        "answers":  [
                        {
                            "text":  "beach",
                            "points":  29
                        },
                        {
                            "text":  "hospital",
                            "points":  22
                        },
                        {
                            "text":  "bed/bedroom",
                            "points":  15
                        },
                        {
                            "text":  "massage parlor",
                            "points":  8
                        },
                        {
                            "text":  "cemetery",
                            "points":  6
                        },
                        {
                            "text":  "yoga class/gym",
                            "points":  5
                        },
                        {
                            "text":  "morgue",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180267,
        "question":  "Name something a mother might do for her 30-year-old son that would make him feel like he's still 10.",
        "answers":  [
                        {
                            "text":  "make meal/spoon feed",
                            "points":  28
                        },
                        {
                            "text":  "laundry/clean up",
                            "points":  24
                        },
                        {
                            "text":  "wash/wipe face",
                            "points":  14
                        },
                        {
                            "text":  "hug/kiss him",
                            "points":  8
                        },
                        {
                            "text":  "buy undies/clothes",
                            "points":  6
                        },
                        {
                            "text":  "scold/spank him",
                            "points":  5
                        },
                        {
                            "text":  "pat face/pinch cheek",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180268,
        "question":  "We asked 100 married men... Name a place single guys brag about making love that makes you jealous.",
        "answers":  [
                        {
                            "text":  "car",
                            "points":  26
                        },
                        {
                            "text":  "shower",
                            "points":  15
                        },
                        {
                            "text":  "beach",
                            "points":  13
                        },
                        {
                            "text":  "hotel room",
                            "points":  10
                        },
                        {
                            "text":  "elevator",
                            "points":  9
                        },
                        {
                            "text":  "pad/house/kitchen",
                            "points":  9
                        },
                        {
                            "text":  "bar/nightclub",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  180269,
        "question":  "Fill in the blank: ______ gives a woman power.",
        "answers":  [
                        {
                            "text":  "education/smarts",
                            "points":  24
                        },
                        {
                            "text":  "money/credit card",
                            "points":  21
                        },
                        {
                            "text":  "sex/coochie",
                            "points":  14
                        },
                        {
                            "text":  "confidence",
                            "points":  13
                        },
                        {
                            "text":  "beauty",
                            "points":  10
                        },
                        {
                            "text":  "nice figure",
                            "points":  4
                        },
                        {
                            "text":  "authority/status",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180270,
        "question":  "We asked 100 women... Name a sign you see at a construction site that describes your man in bed.",
        "answers":  [
                        {
                            "text":  "men at work",
                            "points":  18
                        },
                        {
                            "text":  "caution",
                            "points":  17
                        },
                        {
                            "text":  "hard hat area",
                            "points":  17
                        },
                        {
                            "text":  "slow down",
                            "points":  13
                        },
                        {
                            "text":  "stop",
                            "points":  9
                        },
                        {
                            "text":  "yield",
                            "points":  8
                        },
                        {
                            "text":  "danger",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  180271,
        "question":  "Name a place where a woman has the best chances of finding a man to marry.",
        "answers":  [
                        {
                            "text":  "church",
                            "points":  39
                        },
                        {
                            "text":  "bar/nightclub",
                            "points":  13
                        },
                        {
                            "text":  "college/school",
                            "points":  11
                        },
                        {
                            "text":  "workplace",
                            "points":  8
                        },
                        {
                            "text":  "store/mall",
                            "points":  7
                        },
                        {
                            "text":  "farmersonly.com/app",
                            "points":  6
                        },
                        {
                            "text":  "alaska",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180272,
        "question":  "We asked 100 married women... Name an animal your husband sounds like when he whines.",
        "answers":  [
                        {
                            "text":  "dog/puppy",
                            "points":  32
                        },
                        {
                            "text":  "cat",
                            "points":  19
                        },
                        {
                            "text":  "pig",
                            "points":  16
                        },
                        {
                            "text":  "seal",
                            "points":  10
                        },
                        {
                            "text":  "sheep",
                            "points":  5
                        },
                        {
                            "text":  "hyena",
                            "points":  3
                        },
                        {
                            "text":  "bird/crow",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180273,
        "question":  "Name something a copilot would hate to discover about the pilot just as they came in to land.",
        "answers":  [
                        {
                            "text":  "drunk",
                            "points":  32
                        },
                        {
                            "text":  "dead",
                            "points":  15
                        },
                        {
                            "text":  "asleep",
                            "points":  13
                        },
                        {
                            "text":  "blind/bad eyes",
                            "points":  11
                        },
                        {
                            "text":  "fraud/never flown",
                            "points":  8
                        },
                        {
                            "text":  "passed out",
                            "points":  5
                        },
                        {
                            "text":  "ill/heart attack",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180274,
        "question":  "We asked 100 men... Name something about you that's super smooth.",
        "answers":  [
                        {
                            "text":  "my face",
                            "points":  29
                        },
                        {
                            "text":  "my turd tosser",
                            "points":  23
                        },
                        {
                            "text":  "my beanbag",
                            "points":  12
                        },
                        {
                            "text":  "my hands/palms",
                            "points":  9
                        },
                        {
                            "text":  "my chest/moobs",
                            "points":  5
                        },
                        {
                            "text":  "charm/personality",
                            "points":  5
                        },
                        {
                            "text":  "my voice",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180275,
        "question":  "Name a part of your body you'd have a hard time touching your nose with.",
        "answers":  [
                        {
                            "text":  "elbow",
                            "points":  26
                        },
                        {
                            "text":  "belly/button",
                            "points":  19
                        },
                        {
                            "text":  "butt",
                            "points":  13
                        },
                        {
                            "text":  "feet/toes",
                            "points":  11
                        },
                        {
                            "text":  "back",
                            "points":  9
                        },
                        {
                            "text":  "tongue",
                            "points":  6
                        },
                        {
                            "text":  "chin",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180276,
        "question":  "Name something a man buys his wife that she'd say, \"I'm not putting that thing on.\"",
        "answers":  [
                        {
                            "text":  "lingerie/edible",
                            "points":  51
                        },
                        {
                            "text":  "string bikini",
                            "points":  10
                        },
                        {
                            "text":  "hat/football helmet",
                            "points":  9
                        },
                        {
                            "text":  "dress/muumuu/skirt",
                            "points":  8
                        },
                        {
                            "text":  "tacky shirt/tee",
                            "points":  3
                        },
                        {
                            "text":  "costume/furry",
                            "points":  3
                        },
                        {
                            "text":  "ring/fake diamond",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180277,
        "question":  "Fill in the blank: Some people's bottoms were just made to be ______ed.",
        "answers":  [
                        {
                            "text":  "spanked/patted",
                            "points":  31
                        },
                        {
                            "text":  "big/fat/wide",
                            "points":  17
                        },
                        {
                            "text":  "pinched",
                            "points":  13
                        },
                        {
                            "text":  "grabbed/fondled",
                            "points":  11
                        },
                        {
                            "text":  "hot/stared at",
                            "points":  9
                        },
                        {
                            "text":  "flat",
                            "points":  4
                        },
                        {
                            "text":  "covered/clothed",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180278,
        "question":  "We asked 100 married men... If your spouse let you, what would you blow a lot of your savings on?",
        "answers":  [
                        {
                            "text":  "car",
                            "points":  25
                        },
                        {
                            "text":  "vacay/cruise",
                            "points":  25
                        },
                        {
                            "text":  "house/fab decor",
                            "points":  14
                        },
                        {
                            "text":  "jewelry/gold chain",
                            "points":  13
                        },
                        {
                            "text":  "electronics",
                            "points":  4
                        },
                        {
                            "text":  "a party",
                            "points":  3
                        },
                        {
                            "text":  "motorcycle",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180279,
        "question":  "Name something that could fall on your head at a strip club.",
        "answers":  [
                        {
                            "text":  "bra",
                            "points":  18
                        },
                        {
                            "text":  "stripper/big jugs",
                            "points":  16
                        },
                        {
                            "text":  "panties/g-string",
                            "points":  15
                        },
                        {
                            "text":  "pole",
                            "points":  14
                        },
                        {
                            "text":  "money",
                            "points":  11
                        },
                        {
                            "text":  "a light",
                            "points":  7
                        },
                        {
                            "text":  "beer/drink",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  180280,
        "question":  "Name a place in the hospital a doctor takes a nurse for a romantic examination.",
        "answers":  [
                        {
                            "text":  "closet/supply room",
                            "points":  45
                        },
                        {
                            "text":  "his office",
                            "points":  12
                        },
                        {
                            "text":  "exam room/stirrups",
                            "points":  11
                        },
                        {
                            "text":  "doctor's lounge",
                            "points":  5
                        },
                        {
                            "text":  "x-ray room",
                            "points":  5
                        },
                        {
                            "text":  "the o.r.",
                            "points":  4
                        },
                        {
                            "text":  "patient's room",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180281,
        "question":  "Name something a woman's cheating husband wouldn't be caught dead in but his wife will make sure he's wearing it at his funeral.",
        "answers":  [
                        {
                            "text":  "wedding ring",
                            "points":  39
                        },
                        {
                            "text":  "chick duds/thong",
                            "points":  22
                        },
                        {
                            "text":  "suit/tux/tie",
                            "points":  13
                        },
                        {
                            "text":  "sweater",
                            "points":  3
                        },
                        {
                            "text":  "pants",
                            "points":  3
                        },
                        {
                            "text":  "speedo",
                            "points":  3
                        },
                        {
                            "text":  "makeup",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180282,
        "question":  "Name a kind of animal whose poop you can recognize.",
        "answers":  [
                        {
                            "text":  "dog",
                            "points":  34
                        },
                        {
                            "text":  "rabbit",
                            "points":  18
                        },
                        {
                            "text":  "mouse",
                            "points":  8
                        },
                        {
                            "text":  "deer",
                            "points":  7
                        },
                        {
                            "text":  "cow",
                            "points":  7
                        },
                        {
                            "text":  "bird",
                            "points":  6
                        },
                        {
                            "text":  "horse",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  180283,
        "question":  "We asked 100 married women... On those rare occasions when your man cries, what animal does he sound like?",
        "answers":  [
                        {
                            "text":  "dog/puppy",
                            "points":  29
                        },
                        {
                            "text":  "cat/kitten",
                            "points":  20
                        },
                        {
                            "text":  "horse",
                            "points":  12
                        },
                        {
                            "text":  "mouse",
                            "points":  8
                        },
                        {
                            "text":  "cow/calf",
                            "points":  6
                        },
                        {
                            "text":  "wolf",
                            "points":  6
                        },
                        {
                            "text":  "deer",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180284,
        "question":  "Fill in the blank: Grandpa has been a lot less cranky ever since grandma started putting marijuana in his what?",
        "answers":  [
                        {
                            "text":  "brownies",
                            "points":  28
                        },
                        {
                            "text":  "oatmeal/cereal",
                            "points":  22
                        },
                        {
                            "text":  "coffee/tea",
                            "points":  14
                        },
                        {
                            "text":  "pipe/cigar/cig",
                            "points":  11
                        },
                        {
                            "text":  "cookies",
                            "points":  5
                        },
                        {
                            "text":  "metamucil/fiber",
                            "points":  3
                        },
                        {
                            "text":  "cake",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180285,
        "question":  "Name something babies do that men do also.",
        "answers":  [
                        {
                            "text":  "cry/whine/fuss",
                            "points":  50
                        },
                        {
                            "text":  "drool",
                            "points":  8
                        },
                        {
                            "text":  "pee/poo selves",
                            "points":  7
                        },
                        {
                            "text":  "sleep/snore",
                            "points":  7
                        },
                        {
                            "text":  "fart whenever",
                            "points":  5
                        },
                        {
                            "text":  "suckle boobies",
                            "points":  5
                        },
                        {
                            "text":  "babble/coo",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180286,
        "question":  "Tell me a term of endearment your grandma calls you that you might also call your lover.",
        "answers":  [
                        {
                            "text":  "sweetie/sweetheart",
                            "points":  37
                        },
                        {
                            "text":  "honey/hun",
                            "points":  22
                        },
                        {
                            "text":  "dear/dearie",
                            "points":  9
                        },
                        {
                            "text":  "baby/babycakes",
                            "points":  8
                        },
                        {
                            "text":  "bunny",
                            "points":  3
                        },
                        {
                            "text":  "darling",
                            "points":  3
                        },
                        {
                            "text":  "sugar/sugarplum",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180287,
        "question":  "Name something about a 50-year-old woman that could be hot.",
        "answers":  [
                        {
                            "text":  "killer bod/legs",
                            "points":  37
                        },
                        {
                            "text":  "face/eyes",
                            "points":  19
                        },
                        {
                            "text":  "experience/mind",
                            "points":  13
                        },
                        {
                            "text":  "attitude/confidence",
                            "points":  6
                        },
                        {
                            "text":  "mane/silky grays",
                            "points":  4
                        },
                        {
                            "text":  "her cash",
                            "points":  3
                        },
                        {
                            "text":  "hoochie mama clothes",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180288,
        "question":  "Name a bug a stripper might use as her stage name.",
        "answers":  [
                        {
                            "text":  "ladybug",
                            "points":  36
                        },
                        {
                            "text":  "butterfly",
                            "points":  22
                        },
                        {
                            "text":  "bee/honeybee",
                            "points":  8
                        },
                        {
                            "text":  "firefly",
                            "points":  6
                        },
                        {
                            "text":  "cricket",
                            "points":  5
                        },
                        {
                            "text":  "praying mantis",
                            "points":  5
                        },
                        {
                            "text":  "black widow/spider",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180289,
        "question":  "Name something specific a hypnotist might say during his act that he might also say to his mate in bed.",
        "answers":  [
                        {
                            "text":  "getting sleepy",
                            "points":  35
                        },
                        {
                            "text":  "wake up",
                            "points":  15
                        },
                        {
                            "text":  "close your eyes",
                            "points":  14
                        },
                        {
                            "text":  "just relax",
                            "points":  10
                        },
                        {
                            "text":  "look into my eyes",
                            "points":  5
                        },
                        {
                            "text":  "snap out of it",
                            "points":  3
                        },
                        {
                            "text":  "do as i say",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180290,
        "question":  "Name something a sexy cowboy does in a sexy way.",
        "answers":  [
                        {
                            "text":  "walks/struts",
                            "points":  34
                        },
                        {
                            "text":  "mounts & rides",
                            "points":  16
                        },
                        {
                            "text":  "dances/two-step",
                            "points":  11
                        },
                        {
                            "text":  "tips his hat",
                            "points":  7
                        },
                        {
                            "text":  "lassos/me",
                            "points":  7
                        },
                        {
                            "text":  "talks",
                            "points":  6
                        },
                        {
                            "text":  "dresses/tight chaps",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180291,
        "question":  "When going on a date, name a vegetable the Jolly Green Giant might put in his shorts.",
        "answers":  [
                        {
                            "text":  "cucumber",
                            "points":  31
                        },
                        {
                            "text":  "carrot",
                            "points":  12
                        },
                        {
                            "text":  "corn/cob",
                            "points":  11
                        },
                        {
                            "text":  "peas/pod",
                            "points":  11
                        },
                        {
                            "text":  "bean/green bean",
                            "points":  9
                        },
                        {
                            "text":  "zucchini/squash",
                            "points":  6
                        },
                        {
                            "text":  "broccoli",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180292,
        "question":  "We asked 100 women... Name something you shouldn't correct about a man until you're married.",
        "answers":  [
                        {
                            "text":  "how he dresses",
                            "points":  30
                        },
                        {
                            "text":  "hygiene/fish breath",
                            "points":  16
                        },
                        {
                            "text":  "his housekeeping",
                            "points":  10
                        },
                        {
                            "text":  "spending habits",
                            "points":  10
                        },
                        {
                            "text":  "his bad manners",
                            "points":  7
                        },
                        {
                            "text":  "his awful mother",
                            "points":  6
                        },
                        {
                            "text":  "what he eats",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  180293,
        "question":  "When Snow White went out with Pinocchio, she got sawdust in her what?",
        "answers":  [
                        {
                            "text":  "eye",
                            "points":  25
                        },
                        {
                            "text":  "mouth/teeth",
                            "points":  20
                        },
                        {
                            "text":  "hair",
                            "points":  17
                        },
                        {
                            "text":  "punani",
                            "points":  10
                        },
                        {
                            "text":  "ear",
                            "points":  5
                        },
                        {
                            "text":  "bra/cleavage",
                            "points":  4
                        },
                        {
                            "text":  "hand",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180294,
        "question":  "Name a kind of bug your boss reminds you of.",
        "answers":  [
                        {
                            "text":  "bee/wasp",
                            "points":  21
                        },
                        {
                            "text":  "roach",
                            "points":  17
                        },
                        {
                            "text":  "fly",
                            "points":  14
                        },
                        {
                            "text":  "ant",
                            "points":  11
                        },
                        {
                            "text":  "praying mantis",
                            "points":  10
                        },
                        {
                            "text":  "spider",
                            "points":  7
                        },
                        {
                            "text":  "gnat",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180295,
        "question":  "If Santa Claus joined a dating site, what might he brag to the ladies that he has?",
        "answers":  [
                        {
                            "text":  "big sack/toys",
                            "points":  48
                        },
                        {
                            "text":  "sleigh/sweet ride",
                            "points":  11
                        },
                        {
                            "text":  "sexy white beard",
                            "points":  7
                        },
                        {
                            "text":  "staff of elves",
                            "points":  6
                        },
                        {
                            "text":  "big belly",
                            "points":  4
                        },
                        {
                            "text":  "flying reindeer",
                            "points":  4
                        },
                        {
                            "text":  "fun laugh/ho ho ho",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180296,
        "question":  "Name something a male stripper might wear on Super Bowl Sunday.",
        "answers":  [
                        {
                            "text":  "helmet",
                            "points":  21
                        },
                        {
                            "text":  "jersey",
                            "points":  19
                        },
                        {
                            "text":  "thong/g-string",
                            "points":  19
                        },
                        {
                            "text":  "jockstrap/& cup",
                            "points":  14
                        },
                        {
                            "text":  "dangling football",
                            "points":  5
                        },
                        {
                            "text":  "a team cap",
                            "points":  3
                        },
                        {
                            "text":  "shoulder pads",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180297,
        "question":  "Name something a valet might do to the car of someone who never tips him.",
        "answers":  [
                        {
                            "text":  "key/scratch/dent",
                            "points":  41
                        },
                        {
                            "text":  "joyride/race it",
                            "points":  15
                        },
                        {
                            "text":  "fart in it",
                            "points":  10
                        },
                        {
                            "text":  "reset radio",
                            "points":  5
                        },
                        {
                            "text":  "steal stuff/cher cd",
                            "points":  4
                        },
                        {
                            "text":  "crash/off cliff",
                            "points":  4
                        },
                        {
                            "text":  "pee/poo on seat",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180298,
        "question":  "Name something of yours that disappoints you every time you look at it.",
        "answers":  [
                        {
                            "text":  "bod/jacked feet",
                            "points":  37
                        },
                        {
                            "text":  "my low cash flow",
                            "points":  20
                        },
                        {
                            "text":  "my hideous home",
                            "points":  9
                        },
                        {
                            "text":  "face/lady stache",
                            "points":  7
                        },
                        {
                            "text":  "my ratty hair",
                            "points":  4
                        },
                        {
                            "text":  "my hooptie car",
                            "points":  3
                        },
                        {
                            "text":  "my child",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180299,
        "question":  "Name something a woman should not sit around and wait for a man to do.",
        "answers":  [
                        {
                            "text":  "clean/laundry",
                            "points":  35
                        },
                        {
                            "text":  "propose/commit",
                            "points":  12
                        },
                        {
                            "text":  "cook",
                            "points":  10
                        },
                        {
                            "text":  "call/ask her out",
                            "points":  8
                        },
                        {
                            "text":  "\"anything\"",
                            "points":  7
                        },
                        {
                            "text":  "take out trash",
                            "points":  6
                        },
                        {
                            "text":  "repairs/fix stuff",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180300,
        "question":  "Name the first woman who might be inducted into the booty hall of fame.",
        "answers":  [
                        {
                            "text":  "kim kardashian",
                            "points":  26
                        },
                        {
                            "text":  "jennifer lopez",
                            "points":  24
                        },
                        {
                            "text":  "beyonce",
                            "points":  18
                        },
                        {
                            "text":  "blac chyna",
                            "points":  4
                        },
                        {
                            "text":  "dolly parton",
                            "points":  4
                        },
                        {
                            "text":  "nicki minaj",
                            "points":  4
                        },
                        {
                            "text":  "simone biles",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180301,
        "question":  "Give me an \"H\" word that might describe someone's bottom.",
        "answers":  [
                        {
                            "text":  "huge",
                            "points":  25
                        },
                        {
                            "text":  "hot",
                            "points":  25
                        },
                        {
                            "text":  "hard",
                            "points":  11
                        },
                        {
                            "text":  "heavy",
                            "points":  7
                        },
                        {
                            "text":  "hiney",
                            "points":  7
                        },
                        {
                            "text":  "heart-shaped",
                            "points":  4
                        },
                        {
                            "text":  "hefty",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180302,
        "question":  "Name something of yours you hope your dog never tries to mate with.",
        "answers":  [
                        {
                            "text":  "my cat",
                            "points":  25
                        },
                        {
                            "text":  "me/my leg/my butt",
                            "points":  24
                        },
                        {
                            "text":  "my bed/pillow",
                            "points":  10
                        },
                        {
                            "text":  "my clothes/shoes",
                            "points":  8
                        },
                        {
                            "text":  "my mate/spouse",
                            "points":  7
                        },
                        {
                            "text":  "my kid",
                            "points":  5
                        },
                        {
                            "text":  "my stuffed animal",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180303,
        "question":  "Name someone a naked patient would not want to see enter their hospital room.",
        "answers":  [
                        {
                            "text":  "clergy",
                            "points":  22
                        },
                        {
                            "text":  "mom/dad",
                            "points":  21
                        },
                        {
                            "text":  "doc/medical team",
                            "points":  16
                        },
                        {
                            "text":  "their boss",
                            "points":  7
                        },
                        {
                            "text":  "kid/girl scouts",
                            "points":  7
                        },
                        {
                            "text":  "celeb/politician",
                            "points":  5
                        },
                        {
                            "text":  "tv crew/cameras",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180304,
        "question":  "Name something a man might do when his mother-in-law visits so she'll never return.",
        "answers":  [
                        {
                            "text":  "fart/on her pillow",
                            "points":  31
                        },
                        {
                            "text":  "insult/\"hi skank\"",
                            "points":  12
                        },
                        {
                            "text":  "ignore/watch tv",
                            "points":  12
                        },
                        {
                            "text":  "strut nude/undies",
                            "points":  9
                        },
                        {
                            "text":  "argue/yell",
                            "points":  8
                        },
                        {
                            "text":  "get drunk",
                            "points":  5
                        },
                        {
                            "text":  "leave/hide",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180305,
        "question":  "Name something your dog does better than you.",
        "answers":  [
                        {
                            "text":  "sleep",
                            "points":  30
                        },
                        {
                            "text":  "run/play/fetch",
                            "points":  24
                        },
                        {
                            "text":  "lick/kiss",
                            "points":  9
                        },
                        {
                            "text":  "poop/on schedule",
                            "points":  5
                        },
                        {
                            "text":  "chillax/be carefree",
                            "points":  5
                        },
                        {
                            "text":  "bark",
                            "points":  5
                        },
                        {
                            "text":  "eat",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180306,
        "question":  "Name something you'd be surprised a traffic cop gave you instead of a ticket.",
        "answers":  [
                        {
                            "text":  "warning/lecture",
                            "points":  27
                        },
                        {
                            "text":  "his phone number",
                            "points":  18
                        },
                        {
                            "text":  "money",
                            "points":  12
                        },
                        {
                            "text":  "compliment/praise",
                            "points":  8
                        },
                        {
                            "text":  "kiss",
                            "points":  7
                        },
                        {
                            "text":  "smile",
                            "points":  7
                        },
                        {
                            "text":  "his doughnut",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180307,
        "question":  "To spice up their love life, what might a wife hand to her husband and say, \"Put this on\"?",
        "answers":  [
                        {
                            "text":  "hot undies/lady's",
                            "points":  25
                        },
                        {
                            "text":  "costume/fake boobs",
                            "points":  18
                        },
                        {
                            "text":  "\"burrito sleeve\"",
                            "points":  12
                        },
                        {
                            "text":  "cologne",
                            "points":  11
                        },
                        {
                            "text":  "blindfold",
                            "points":  8
                        },
                        {
                            "text":  "suit & tie/tux",
                            "points":  4
                        },
                        {
                            "text":  "lotion/k-y",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180308,
        "question":  "We asked 100 women... Fill in the blank: Some days I'd rather have a good ______ than a good man.",
        "answers":  [
                        {
                            "text":  "meal/food/candy",
                            "points":  20
                        },
                        {
                            "text":  "sleep/nap",
                            "points":  18
                        },
                        {
                            "text":  "book",
                            "points":  10
                        },
                        {
                            "text":  "cocktail/beer",
                            "points":  10
                        },
                        {
                            "text":  "friend",
                            "points":  9
                        },
                        {
                            "text":  "massage",
                            "points":  8
                        },
                        {
                            "text":  "dog/pet",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  180309,
        "question":  "Besides an alligator or crocodile, name something else that lives in a swamp.",
        "answers":  [
                        {
                            "text":  "snake/anaconda",
                            "points":  39
                        },
                        {
                            "text":  "frog/tadpole",
                            "points":  15
                        },
                        {
                            "text":  "turtle",
                            "points":  8
                        },
                        {
                            "text":  "mosquito/bug",
                            "points":  8
                        },
                        {
                            "text":  "politician",
                            "points":  4
                        },
                        {
                            "text":  "fish/swamp eel",
                            "points":  4
                        },
                        {
                            "text":  "bird/heron",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180310,
        "question":  "Give me a B word that describes your bottom.",
        "answers":  [
                        {
                            "text":  "big",
                            "points":  35
                        },
                        {
                            "text":  "butt/buttocks",
                            "points":  18
                        },
                        {
                            "text":  "beautiful/beauty",
                            "points":  9
                        },
                        {
                            "text":  "bodacious",
                            "points":  8
                        },
                        {
                            "text":  "booty/licious",
                            "points":  5
                        },
                        {
                            "text":  "bare",
                            "points":  3
                        },
                        {
                            "text":  "broad",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180311,
        "question":  "Name a place a man would hate to be instead of at home watching the Super Bowl.",
        "answers":  [
                        {
                            "text":  "store/jo-ann fabrics",
                            "points":  30
                        },
                        {
                            "text":  "church",
                            "points":  16
                        },
                        {
                            "text":  "his in-laws'",
                            "points":  14
                        },
                        {
                            "text":  "work",
                            "points":  11
                        },
                        {
                            "text":  "ballet/opera",
                            "points":  4
                        },
                        {
                            "text":  "jail/rikers",
                            "points":  3
                        },
                        {
                            "text":  "movie/la la land",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180312,
        "question":  "Name something that women, as they get older, get the itch to do.",
        "answers":  [
                        {
                            "text":  "affair/date",
                            "points":  27
                        },
                        {
                            "text":  "travel",
                            "points":  21
                        },
                        {
                            "text":  "surgery/face-lift",
                            "points":  18
                        },
                        {
                            "text":  "quit/change job",
                            "points":  5
                        },
                        {
                            "text":  "have a baby",
                            "points":  4
                        },
                        {
                            "text":  "go dancing",
                            "points":  3
                        },
                        {
                            "text":  "decorate/remodel",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180313,
        "question":  "Name something a wife does to make sure her husband will never cheat on her again.",
        "answers":  [
                        {
                            "text":  "divorce/threaten to",
                            "points":  31
                        },
                        {
                            "text":  "spy/check phone",
                            "points":  20
                        },
                        {
                            "text":  "slice nads/feed to dog",
                            "points":  11
                        },
                        {
                            "text":  "kill/buy gun",
                            "points":  7
                        },
                        {
                            "text":  "cheat on him",
                            "points":  4
                        },
                        {
                            "text":  "become kinky nympho",
                            "points":  4
                        },
                        {
                            "text":  "cook/bake for him",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180314,
        "question":  "Name something a wife might do at her cheating husband's funeral.",
        "answers":  [
                        {
                            "text":  "laugh/smile",
                            "points":  28
                        },
                        {
                            "text":  "dance a jig",
                            "points":  13
                        },
                        {
                            "text":  "bring date/flirt",
                            "points":  10
                        },
                        {
                            "text":  "spit on body/grave",
                            "points":  10
                        },
                        {
                            "text":  "be a no-show",
                            "points":  9
                        },
                        {
                            "text":  "tell all/confront ho",
                            "points":  6
                        },
                        {
                            "text":  "cry/fake cry",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180315,
        "question":  "Fill in the blank: A woman might say, \"He broke up with me, so I broke his\" what?",
        "answers":  [
                        {
                            "text":  "car/windows",
                            "points":  27
                        },
                        {
                            "text":  "phone",
                            "points":  14
                        },
                        {
                            "text":  "nose/face",
                            "points":  12
                        },
                        {
                            "text":  "bank acct./credit",
                            "points":  9
                        },
                        {
                            "text":  "little needle wang",
                            "points":  7
                        },
                        {
                            "text":  "sporting equip.",
                            "points":  6
                        },
                        {
                            "text":  "tv",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180316,
        "question":  "The Realtor assured you that your new house didn't have mice. But name something it did have.",
        "answers":  [
                        {
                            "text":  "roaches",
                            "points":  30
                        },
                        {
                            "text":  "sewer rats",
                            "points":  15
                        },
                        {
                            "text":  "termites",
                            "points":  13
                        },
                        {
                            "text":  "ants",
                            "points":  6
                        },
                        {
                            "text":  "leak/water damage",
                            "points":  6
                        },
                        {
                            "text":  "ghost/horny one",
                            "points":  5
                        },
                        {
                            "text":  "toxic mold",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180317,
        "question":  "We asked 100 women... Name something that for you is an aphrodisiac.",
        "answers":  [
                        {
                            "text":  "booze/wine",
                            "points":  26
                        },
                        {
                            "text":  "kisses/on my neck",
                            "points":  19
                        },
                        {
                            "text":  "chocolate",
                            "points":  18
                        },
                        {
                            "text":  "oysters",
                            "points":  5
                        },
                        {
                            "text":  "massage",
                            "points":  4
                        },
                        {
                            "text":  "music/neil diamond",
                            "points":  4
                        },
                        {
                            "text":  "my man doing chores",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180318,
        "question":  "If there was a dating site called MatchDog.com, what might a dog be doing in his profile picture?",
        "answers":  [
                        {
                            "text":  "smiling",
                            "points":  26
                        },
                        {
                            "text":  "play/catch frisbee",
                            "points":  19
                        },
                        {
                            "text":  "sitting",
                            "points":  11
                        },
                        {
                            "text":  "licking/kissing",
                            "points":  9
                        },
                        {
                            "text":  "wagging its tail",
                            "points":  5
                        },
                        {
                            "text":  "panting",
                            "points":  5
                        },
                        {
                            "text":  "begging",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180319,
        "question":  "Fill in the blank: A good stage name for a stripper would be ______ Buns.",
        "answers":  [
                        {
                            "text":  "honey buns",
                            "points":  22
                        },
                        {
                            "text":  "hot/cross buns",
                            "points":  20
                        },
                        {
                            "text":  "sticky buns",
                            "points":  15
                        },
                        {
                            "text":  "sweet buns",
                            "points":  9
                        },
                        {
                            "text":  "cinnamon buns",
                            "points":  6
                        },
                        {
                            "text":  "big buns",
                            "points":  4
                        },
                        {
                            "text":  "sugar buns",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180320,
        "question":  "Fill in the blank: After a divorce, a man is surprised to hear his ex-wife changed what?",
        "answers":  [
                        {
                            "text":  "her gender",
                            "points":  21
                        },
                        {
                            "text":  "her hair/to pink",
                            "points":  19
                        },
                        {
                            "text":  "her name",
                            "points":  18
                        },
                        {
                            "text":  "her weight/bod",
                            "points":  6
                        },
                        {
                            "text":  "her mind/about him",
                            "points":  5
                        },
                        {
                            "text":  "the locks",
                            "points":  5
                        },
                        {
                            "text":  "her number",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180321,
        "question":  "Name a place where everyone has nightmares about being naked.",
        "answers":  [
                        {
                            "text":  "school",
                            "points":  23
                        },
                        {
                            "text":  "church",
                            "points":  18
                        },
                        {
                            "text":  "work",
                            "points":  16
                        },
                        {
                            "text":  "on stage/a speech",
                            "points":  10
                        },
                        {
                            "text":  "beach",
                            "points":  4
                        },
                        {
                            "text":  "store/walmart",
                            "points":  4
                        },
                        {
                            "text":  "on street/downtown",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180322,
        "question":  "Name something done at a 5-year-old's birthday party that would be silly to do at a 50-year-old's.",
        "answers":  [
                        {
                            "text":  "pin tail on donkey",
                            "points":  37
                        },
                        {
                            "text":  "have a clown",
                            "points":  17
                        },
                        {
                            "text":  "balloons",
                            "points":  8
                        },
                        {
                            "text":  "hit a pinata",
                            "points":  5
                        },
                        {
                            "text":  "bouncy house",
                            "points":  4
                        },
                        {
                            "text":  "pony rides",
                            "points":  3
                        },
                        {
                            "text":  "blow out candles",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180323,
        "question":  "After you get married, it would be shocking to find out your spouse has what?",
        "answers":  [
                        {
                            "text":  "illness/syphilis",
                            "points":  26
                        },
                        {
                            "text":  "another spouse",
                            "points":  17
                        },
                        {
                            "text":  "kids",
                            "points":  11
                        },
                        {
                            "text":  "a lover",
                            "points":  10
                        },
                        {
                            "text":  "same genitalia as me",
                            "points":  6
                        },
                        {
                            "text":  "an ex-spouse",
                            "points":  4
                        },
                        {
                            "text":  "extra toes",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180324,
        "question":  "Name a word used to describe a steak that a man might have printed on his underwear.",
        "answers":  [
                        {
                            "text":  "rare",
                            "points":  19
                        },
                        {
                            "text":  "t-bone",
                            "points":  18
                        },
                        {
                            "text":  "prime",
                            "points":  12
                        },
                        {
                            "text":  "meaty",
                            "points":  9
                        },
                        {
                            "text":  "well-done",
                            "points":  9
                        },
                        {
                            "text":  "thick",
                            "points":  6
                        },
                        {
                            "text":  "beef",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180325,
        "question":  "Most men want a woman who does what like a man?",
        "answers":  [
                        {
                            "text":  "works/earns $",
                            "points":  25
                        },
                        {
                            "text":  "drinks/12-packs",
                            "points":  15
                        },
                        {
                            "text":  "thinks",
                            "points":  10
                        },
                        {
                            "text":  "has sex/digs sex",
                            "points":  9
                        },
                        {
                            "text":  "likes/plays sports",
                            "points":  7
                        },
                        {
                            "text":  "drives",
                            "points":  5
                        },
                        {
                            "text":  "fixes things",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180326,
        "question":  "Name something a trucker keeps in the truck for those cross-country trips.",
        "answers":  [
                        {
                            "text":  "coffee/drinks",
                            "points":  25
                        },
                        {
                            "text":  "food/beef jerky",
                            "points":  17
                        },
                        {
                            "text":  "bed/blanket/pillow",
                            "points":  10
                        },
                        {
                            "text":  "music",
                            "points":  8
                        },
                        {
                            "text":  "pee jar/potty",
                            "points":  6
                        },
                        {
                            "text":  "drugs/meth",
                            "points":  4
                        },
                        {
                            "text":  "map/gps",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180327,
        "question":  "We asked 100 men... Name something a woman does for a living that makes her more appealing.",
        "answers":  [
                        {
                            "text":  "cook/chef",
                            "points":  15
                        },
                        {
                            "text":  "doctor",
                            "points":  14
                        },
                        {
                            "text":  "nurse",
                            "points":  12
                        },
                        {
                            "text":  "lawyer",
                            "points":  10
                        },
                        {
                            "text":  "hairdresser",
                            "points":  9
                        },
                        {
                            "text":  "actress",
                            "points":  7
                        },
                        {
                            "text":  "fitness/athlete",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  180328,
        "question":  "Name the first place you'd think of to hide a dead body.",
        "answers":  [
                        {
                            "text":  "lake/ocean/river",
                            "points":  27
                        },
                        {
                            "text":  "woods/forest",
                            "points":  11
                        },
                        {
                            "text":  "cemetery/grave",
                            "points":  9
                        },
                        {
                            "text":  "trunk/car trunk",
                            "points":  7
                        },
                        {
                            "text":  "freezer",
                            "points":  6
                        },
                        {
                            "text":  "basement",
                            "points":  6
                        },
                        {
                            "text":  "yard/garden",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  180329,
        "question":  "What do you think grandpa wants for his 100th birthday?",
        "answers":  [
                        {
                            "text":  "time/more b-days",
                            "points":  16
                        },
                        {
                            "text":  "teeth",
                            "points":  14
                        },
                        {
                            "text":  "sex/granny's cookie",
                            "points":  14
                        },
                        {
                            "text":  "cake/good food",
                            "points":  12
                        },
                        {
                            "text":  "booze/scotch",
                            "points":  7
                        },
                        {
                            "text":  "stripper/lap dance",
                            "points":  5
                        },
                        {
                            "text":  "sleep/rest",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180330,
        "question":  "Some men with beards look like they've got what furry animal sitting on their face?",
        "answers":  [
                        {
                            "text":  "squirrel",
                            "points":  29
                        },
                        {
                            "text":  "cat",
                            "points":  11
                        },
                        {
                            "text":  "beaver",
                            "points":  10
                        },
                        {
                            "text":  "raccoon",
                            "points":  6
                        },
                        {
                            "text":  "rat/mouse",
                            "points":  5
                        },
                        {
                            "text":  "bear",
                            "points":  5
                        },
                        {
                            "text":  "dog/poodle",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180331,
        "question":  "Name something you could live without but life wouldn't be much fun.",
        "answers":  [
                        {
                            "text":  "computer/internet",
                            "points":  19
                        },
                        {
                            "text":  "hot sex",
                            "points":  15
                        },
                        {
                            "text":  "tv/movies",
                            "points":  13
                        },
                        {
                            "text":  "junk food/sweets",
                            "points":  11
                        },
                        {
                            "text":  "money",
                            "points":  5
                        },
                        {
                            "text":  "car",
                            "points":  4
                        },
                        {
                            "text":  "booze",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180332,
        "question":  "Name a word that could describe cheese or a person.",
        "answers":  [
                        {
                            "text":  "stinky/smelly/rank",
                            "points":  30
                        },
                        {
                            "text":  "sharp",
                            "points":  12
                        },
                        {
                            "text":  "cheesy",
                            "points":  8
                        },
                        {
                            "text":  "american",
                            "points":  6
                        },
                        {
                            "text":  "swiss",
                            "points":  6
                        },
                        {
                            "text":  "holy/holey",
                            "points":  4
                        },
                        {
                            "text":  "soft/squishy",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180333,
        "question":  "Name a country a man with a moustache should visit to meet a woman with a moustache.",
        "answers":  [
                        {
                            "text":  "italy",
                            "points":  23
                        },
                        {
                            "text":  "russia",
                            "points":  13
                        },
                        {
                            "text":  "france",
                            "points":  8
                        },
                        {
                            "text":  "germany",
                            "points":  8
                        },
                        {
                            "text":  "poland",
                            "points":  6
                        },
                        {
                            "text":  "india",
                            "points":  6
                        },
                        {
                            "text":  "greece",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  180334,
        "question":  "Name something people hunt for that doesn't require a gun.",
        "answers":  [
                        {
                            "text":  "bargains/deals",
                            "points":  21
                        },
                        {
                            "text":  "keys",
                            "points":  12
                        },
                        {
                            "text":  "easter eggs",
                            "points":  11
                        },
                        {
                            "text":  "a mate/date",
                            "points":  10
                        },
                        {
                            "text":  "fish/seafood",
                            "points":  8
                        },
                        {
                            "text":  "mushrooms",
                            "points":  5
                        },
                        {
                            "text":  "birds",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180335,
        "question":  "Name any monster.",
        "answers":  [
                        {
                            "text":  "frankenstein",
                            "points":  19
                        },
                        {
                            "text":  "godzilla",
                            "points":  17
                        },
                        {
                            "text":  "cookie monster",
                            "points":  13
                        },
                        {
                            "text":  "nessie/loch ness",
                            "points":  6
                        },
                        {
                            "text":  "dracula",
                            "points":  5
                        },
                        {
                            "text":  "bigfoot/sasquatch",
                            "points":  5
                        },
                        {
                            "text":  "king kong",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180336,
        "question":  "Name a good job for a woman who intimidates men.",
        "answers":  [
                        {
                            "text":  "police officer",
                            "points":  20
                        },
                        {
                            "text":  "lawyer",
                            "points":  12
                        },
                        {
                            "text":  "ceo",
                            "points":  11
                        },
                        {
                            "text":  "warden/prison guard",
                            "points":  10
                        },
                        {
                            "text":  "construction",
                            "points":  5
                        },
                        {
                            "text":  "athlete/boxer",
                            "points":  5
                        },
                        {
                            "text":  "dominatrix",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180337,
        "question":  "As the bride walks down the aisle, what would she hate to see her groom wearing?",
        "answers":  [
                        {
                            "text":  "sneakers",
                            "points":  14
                        },
                        {
                            "text":  "same gown/nicer one",
                            "points":  13
                        },
                        {
                            "text":  "shorts",
                            "points":  10
                        },
                        {
                            "text":  "jeans",
                            "points":  10
                        },
                        {
                            "text":  "his birthday suit",
                            "points":  9
                        },
                        {
                            "text":  "undies/thong/hers",
                            "points":  6
                        },
                        {
                            "text":  "tacky hat/cap",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180338,
        "question":  "We asked 100 married women... Name something your husband loves so much, you'll make sure to stick it in his coffin.",
        "answers":  [
                        {
                            "text":  "tv/remote",
                            "points":  18
                        },
                        {
                            "text":  "beer/booze",
                            "points":  12
                        },
                        {
                            "text":  "phone",
                            "points":  10
                        },
                        {
                            "text":  "sports equipment",
                            "points":  8
                        },
                        {
                            "text":  "watch/ring",
                            "points":  6
                        },
                        {
                            "text":  "clothes",
                            "points":  6
                        },
                        {
                            "text":  "car/car key",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180339,
        "question":  "Name something you hang on to for dear life.",
        "answers":  [
                        {
                            "text":  "money/wallet",
                            "points":  23
                        },
                        {
                            "text":  "spouse/love",
                            "points":  11
                        },
                        {
                            "text":  "life raft/jacket",
                            "points":  9
                        },
                        {
                            "text":  "rope",
                            "points":  6
                        },
                        {
                            "text":  "ring/jewelry",
                            "points":  6
                        },
                        {
                            "text":  "photos",
                            "points":  4
                        },
                        {
                            "text":  "amusem't ride seat",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180340,
        "question":  "When you die, tell me a word starting with S you hope people use in your eulogy.",
        "answers":  [
                        {
                            "text":  "smart",
                            "points":  23
                        },
                        {
                            "text":  "sincere",
                            "points":  14
                        },
                        {
                            "text":  "sweet",
                            "points":  9
                        },
                        {
                            "text":  "sexy",
                            "points":  7
                        },
                        {
                            "text":  "special",
                            "points":  3
                        },
                        {
                            "text":  "super",
                            "points":  3
                        },
                        {
                            "text":  "strong/willed",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180341,
        "question":  "Fill in the blank: In my next lifetime, I want to be Steve Harvey's what?",
        "answers":  [
                        {
                            "text":  "bestie",
                            "points":  23
                        },
                        {
                            "text":  "daughter/son",
                            "points":  10
                        },
                        {
                            "text":  "boss",
                            "points":  8
                        },
                        {
                            "text":  "agent/manager",
                            "points":  7
                        },
                        {
                            "text":  "wife",
                            "points":  6
                        },
                        {
                            "text":  "mustache",
                            "points":  4
                        },
                        {
                            "text":  "assistant",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180342,
        "question":  "Tell me something that follows the word \"magic.\"",
        "answers":  [
                        {
                            "text":  "magic trick",
                            "points":  12
                        },
                        {
                            "text":  "magic kingdom",
                            "points":  12
                        },
                        {
                            "text":  "magic johnson",
                            "points":  11
                        },
                        {
                            "text":  "magic mike",
                            "points":  8
                        },
                        {
                            "text":  "magic show/act",
                            "points":  8
                        },
                        {
                            "text":  "magic wand",
                            "points":  6
                        },
                        {
                            "text":  "magic carpet/ride",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180343,
        "question":  "Name something you own that you now wish you could unload.",
        "answers":  [
                        {
                            "text":  "car/truck",
                            "points":  13
                        },
                        {
                            "text":  "house",
                            "points":  12
                        },
                        {
                            "text":  "weight/fat",
                            "points":  9
                        },
                        {
                            "text":  "furniture",
                            "points":  9
                        },
                        {
                            "text":  "clothes",
                            "points":  6
                        },
                        {
                            "text":  "boat",
                            "points":  5
                        },
                        {
                            "text":  "gun",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180344,
        "question":  "Name something specific that has a long neck.",
        "answers":  [
                        {
                            "text":  "giraffe",
                            "points":  78
                        },
                        {
                            "text":  "ostrich",
                            "points":  10
                        },
                        {
                            "text":  "bottle/beer bottle",
                            "points":  4
                        },
                        {
                            "text":  "crane",
                            "points":  3
                        },
                        {
                            "text":  "swan",
                            "points":  3
                        },
                        {
                            "text":  "a glass",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180345,
        "question":  "Name something you'd hate to see when you blow your nose.",
        "answers":  [
                        {
                            "text":  "blood",
                            "points":  75
                        },
                        {
                            "text":  "boogers/green snot",
                            "points":  17
                        },
                        {
                            "text":  "a bug",
                            "points":  2
                        },
                        {
                            "text":  "hole in tissue",
                            "points":  2
                        },
                        {
                            "text":  "pieces of my brain",
                            "points":  2
                        },
                        {
                            "text":  "food/a carrot",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180346,
        "question":  "Fill in the blank: The grandchildren have a game where they try to guess how many ______s are on grandpa's face.",
        "answers":  [
                        {
                            "text":  "wrinkles/lines",
                            "points":  48
                        },
                        {
                            "text":  "spots/freckles",
                            "points":  24
                        },
                        {
                            "text":  "hairs/whiskers",
                            "points":  22
                        },
                        {
                            "text":  "warts",
                            "points":  2
                        },
                        {
                            "text":  "crumbs",
                            "points":  2
                        },
                        {
                            "text":  "zits",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180347,
        "question":  "If a stripper called herself the Easter Bunny, name something she might use in her act.",
        "answers":  [
                        {
                            "text":  "bunny costume",
                            "points":  39
                        },
                        {
                            "text":  "egg",
                            "points":  25
                        },
                        {
                            "text":  "big ole carrot",
                            "points":  21
                        },
                        {
                            "text":  "a basket",
                            "points":  9
                        },
                        {
                            "text":  "candy",
                            "points":  4
                        },
                        {
                            "text":  "a live bunny",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180348,
        "question":  "We asked 100 single women... If a guy brings his dog along on a date, name something it'd better not do.",
        "answers":  [
                        {
                            "text":  "bite me",
                            "points":  36
                        },
                        {
                            "text":  "whiz/launch logs",
                            "points":  36
                        },
                        {
                            "text":  "bark/growl",
                            "points":  18
                        },
                        {
                            "text":  "chew/my shoe",
                            "points":  4
                        },
                        {
                            "text":  "puke",
                            "points":  4
                        },
                        {
                            "text":  "lick me/my boobs",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180349,
        "question":  "Name something that should not be on your lap when you're driving.",
        "answers":  [
                        {
                            "text":  "baby/child",
                            "points":  25
                        },
                        {
                            "text":  "dog/pet",
                            "points":  21
                        },
                        {
                            "text":  "food/drink/coffee",
                            "points":  21
                        },
                        {
                            "text":  "cell phone",
                            "points":  15
                        },
                        {
                            "text":  "lover",
                            "points":  15
                        },
                        {
                            "text":  "laptop",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180350,
        "question":  "We asked 100 women... Name a reason your man looks better with clothes than without.",
        "answers":  [
                        {
                            "text":  "he's a fatty",
                            "points":  69
                        },
                        {
                            "text":  "flatter'g outfits",
                            "points":  11
                        },
                        {
                            "text":  "skinny/bird legs",
                            "points":  9
                        },
                        {
                            "text":  "furry/hairy back",
                            "points":  5
                        },
                        {
                            "text":  "he's old/wrinkly",
                            "points":  3
                        },
                        {
                            "text":  "bad tan line/pale",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180351,
        "question":  "Name something a doctor gives you that might actually make you feel worse.",
        "answers":  [
                        {
                            "text":  "a shot/meds",
                            "points":  68
                        },
                        {
                            "text":  "an enema",
                            "points":  10
                        },
                        {
                            "text":  "the bill",
                            "points":  10
                        },
                        {
                            "text":  "diagnosis/the clap",
                            "points":  6
                        },
                        {
                            "text":  "a lecture",
                            "points":  3
                        },
                        {
                            "text":  "a prostate exam",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180352,
        "question":  "We asked 100 married men... Name something about your wife you'd never make fun of when she's around.",
        "answers":  [
                        {
                            "text":  "body/sumo butt",
                            "points":  64
                        },
                        {
                            "text":  "her cooking",
                            "points":  15
                        },
                        {
                            "text":  "hair/boyish 'do",
                            "points":  11
                        },
                        {
                            "text":  "face/wonky eyes",
                            "points":  3
                        },
                        {
                            "text":  "cleaning skills",
                            "points":  3
                        },
                        {
                            "text":  "clothes/feather bra",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180353,
        "question":  "Name something people don't want their doctor to give them.",
        "answers":  [
                        {
                            "text":  "a shot/meds",
                            "points":  49
                        },
                        {
                            "text":  "bad news",
                            "points":  22
                        },
                        {
                            "text":  "an enema",
                            "points":  13
                        },
                        {
                            "text":  "exam/butt probe",
                            "points":  9
                        },
                        {
                            "text":  "a bill",
                            "points":  4
                        },
                        {
                            "text":  "advice",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180354,
        "question":  "A woman's warning to men: \"Do not kiss me if you've got\" what?",
        "answers":  [
                        {
                            "text":  "illness/the herps",
                            "points":  48
                        },
                        {
                            "text":  "bad breath",
                            "points":  40
                        },
                        {
                            "text":  "a wife/skank",
                            "points":  4
                        },
                        {
                            "text":  "beard/porn stache",
                            "points":  3
                        },
                        {
                            "text":  "food on your face",
                            "points":  2
                        },
                        {
                            "text":  "something in mouth",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180355,
        "question":  "We asked 100 married women... Name someone you don't mind your husband kissing.",
        "answers":  [
                        {
                            "text":  "his mom/my mom",
                            "points":  43
                        },
                        {
                            "text":  "our kids",
                            "points":  22
                        },
                        {
                            "text":  "his sister",
                            "points":  13
                        },
                        {
                            "text":  "the dog/pets",
                            "points":  13
                        },
                        {
                            "text":  "granny",
                            "points":  5
                        },
                        {
                            "text":  "me!",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180356,
        "question":  "We asked 100 married women... Fill in the blank and be specific: My husband will never cheat on me because he loves what?",
        "answers":  [
                        {
                            "text":  "me",
                            "points":  41
                        },
                        {
                            "text":  "our family",
                            "points":  19
                        },
                        {
                            "text":  "my cooking",
                            "points":  16
                        },
                        {
                            "text":  "breathing/living",
                            "points":  13
                        },
                        {
                            "text":  "my hottie mcbody",
                            "points":  8
                        },
                        {
                            "text":  "money/his 401k",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180357,
        "question":  "Name something about a man's bottom that's different from a woman's bottom.",
        "answers":  [
                        {
                            "text":  "bushy butt hair",
                            "points":  33
                        },
                        {
                            "text":  "flat/small",
                            "points":  31
                        },
                        {
                            "text":  "firm/hard muscle",
                            "points":  18
                        },
                        {
                            "text":  "bigger/wider",
                            "points":  10
                        },
                        {
                            "text":  "smells/farts more",
                            "points":  4
                        },
                        {
                            "text":  "rough/zitty skin",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180358,
        "question":  "Name something that men do in public that women should be able to do also.",
        "answers":  [
                        {
                            "text":  "go shirtless",
                            "points":  73
                        },
                        {
                            "text":  "drain the lizard",
                            "points":  15
                        },
                        {
                            "text":  "drive/parallel park",
                            "points":  3
                        },
                        {
                            "text":  "cuss/yell",
                            "points":  3
                        },
                        {
                            "text":  "spit",
                            "points":  2
                        },
                        {
                            "text":  "burp",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180359,
        "question":  "Name something a man cracks open.",
        "answers":  [
                        {
                            "text":  "beer/champagne",
                            "points":  70
                        },
                        {
                            "text":  "nuts/peanuts",
                            "points":  15
                        },
                        {
                            "text":  "an egg",
                            "points":  5
                        },
                        {
                            "text":  "a coconut",
                            "points":  4
                        },
                        {
                            "text":  "his skull",
                            "points":  2
                        },
                        {
                            "text":  "a soda",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180360,
        "question":  "Name something a wife might drop her dead cheating husband's ashes down.",
        "answers":  [
                        {
                            "text":  "toilet/porta-potty",
                            "points":  69
                        },
                        {
                            "text":  "drain/disposal",
                            "points":  10
                        },
                        {
                            "text":  "trash chute",
                            "points":  6
                        },
                        {
                            "text":  "sewer",
                            "points":  6
                        },
                        {
                            "text":  "river/body of water",
                            "points":  4
                        },
                        {
                            "text":  "mountain/volcano",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180361,
        "question":  "Name something cold your lover might put on your body.",
        "answers":  [
                        {
                            "text":  "ice/ice pack",
                            "points":  64
                        },
                        {
                            "text":  "their feet",
                            "points":  15
                        },
                        {
                            "text":  "lotion/oil",
                            "points":  8
                        },
                        {
                            "text":  "whipped cream",
                            "points":  4
                        },
                        {
                            "text":  "ice cream",
                            "points":  4
                        },
                        {
                            "text":  "their hands",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180362,
        "question":  "We asked 100 women... Name something you'd do if you had a crush on the new minister in church.",
        "answers":  [
                        {
                            "text":  "go more/get involved",
                            "points":  61
                        },
                        {
                            "text":  "pray/repent",
                            "points":  17
                        },
                        {
                            "text":  "flirt/chat/ask out",
                            "points":  11
                        },
                        {
                            "text":  "keep it secret",
                            "points":  4
                        },
                        {
                            "text":  "new church/don't go",
                            "points":  3
                        },
                        {
                            "text":  "dress like a ho",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180363,
        "question":  "Name someone a bride would be mad that her groom kissed a little too long at their wedding.",
        "answers":  [
                        {
                            "text":  "bridesmaid/her bff",
                            "points":  58
                        },
                        {
                            "text":  "his ex",
                            "points":  11
                        },
                        {
                            "text":  "her sister",
                            "points":  11
                        },
                        {
                            "text":  "her mom",
                            "points":  9
                        },
                        {
                            "text":  "his best man",
                            "points":  7
                        },
                        {
                            "text":  "hot pastor",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180364,
        "question":  "Name a part of a woman that moves when she walks in a sexy way.",
        "answers":  [
                        {
                            "text":  "her glazed hams",
                            "points":  57
                        },
                        {
                            "text":  "hips",
                            "points":  28
                        },
                        {
                            "text":  "pink-nosed puppies",
                            "points":  6
                        },
                        {
                            "text":  "legs",
                            "points":  3
                        },
                        {
                            "text":  "hair",
                            "points":  2
                        },
                        {
                            "text":  "flirty eyes",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180365,
        "question":  "What might a wife do with Valentine's Day roses from her cheating husband?",
        "answers":  [
                        {
                            "text":  "trash 'em",
                            "points":  55
                        },
                        {
                            "text":  "throw at/hit him",
                            "points":  27
                        },
                        {
                            "text":  "burn 'em",
                            "points":  8
                        },
                        {
                            "text":  "stick him w/ thorn",
                            "points":  3
                        },
                        {
                            "text":  "rip up/mulch 'em",
                            "points":  3
                        },
                        {
                            "text":  "give away/2 her lover",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180366,
        "question":  "We asked 100 women... You know it's going to be a bad date if, instead of a car, he arrives riding what?",
        "answers":  [
                        {
                            "text":  "bike/unicycle",
                            "points":  54
                        },
                        {
                            "text":  "motorcycle/moped",
                            "points":  24
                        },
                        {
                            "text":  "bus",
                            "points":  9
                        },
                        {
                            "text":  "horse",
                            "points":  6
                        },
                        {
                            "text":  "skateboard",
                            "points":  3
                        },
                        {
                            "text":  "beat-up truck",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180367,
        "question":  "Name someone a lonely guy would not want to know that he owned an inflatable doll.",
        "answers":  [
                        {
                            "text":  "his mommy",
                            "points":  52
                        },
                        {
                            "text":  "his buds",
                            "points":  12
                        },
                        {
                            "text":  "his wife/mate",
                            "points":  11
                        },
                        {
                            "text":  "his boss/coworker",
                            "points":  10
                        },
                        {
                            "text":  "date/new prospect",
                            "points":  9
                        },
                        {
                            "text":  "his pastor/rabbi",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180368,
        "question":  "We asked 100 married women... What does your man do just like a baby?",
        "answers":  [
                        {
                            "text":  "cry/whine/fuss",
                            "points":  43
                        },
                        {
                            "text":  "sleep",
                            "points":  22
                        },
                        {
                            "text":  "pout",
                            "points":  12
                        },
                        {
                            "text":  "eat",
                            "points":  9
                        },
                        {
                            "text":  "snore",
                            "points":  7
                        },
                        {
                            "text":  "fart/in my lap",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180369,
        "question":  "Name something a woman can hug with no fear of being dumped.",
        "answers":  [
                        {
                            "text":  "dog/pet",
                            "points":  36
                        },
                        {
                            "text":  "stuffed animal",
                            "points":  29
                        },
                        {
                            "text":  "baby/child",
                            "points":  15
                        },
                        {
                            "text":  "pillow",
                            "points":  8
                        },
                        {
                            "text":  "tree",
                            "points":  8
                        },
                        {
                            "text":  "friend",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180370,
        "question":  "We asked 100 single women... Name a breed of dog whose face looks like some of the guys you've dated.",
        "answers":  [
                        {
                            "text":  "bulldog",
                            "points":  31
                        },
                        {
                            "text":  "pit bull",
                            "points":  22
                        },
                        {
                            "text":  "german shepherd",
                            "points":  13
                        },
                        {
                            "text":  "boxer",
                            "points":  12
                        },
                        {
                            "text":  "doberman",
                            "points":  11
                        },
                        {
                            "text":  "pug",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  180371,
        "question":  "Name a sound a burglar never wants to hear when he's robbing someone's house.",
        "answers":  [
                        {
                            "text":  "alarm",
                            "points":  27
                        },
                        {
                            "text":  "a dog",
                            "points":  22
                        },
                        {
                            "text":  "gun cock/shot",
                            "points":  19
                        },
                        {
                            "text":  "police siren",
                            "points":  17
                        },
                        {
                            "text":  "voice/\"freeze sucka\"",
                            "points":  10
                        },
                        {
                            "text":  "door opening",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180372,
        "question":  "Name something on a man's body that might be soft like a woman.",
        "answers":  [
                        {
                            "text":  "hands",
                            "points":  27
                        },
                        {
                            "text":  "pretty face/lips",
                            "points":  19
                        },
                        {
                            "text":  "freshly shaven butt",
                            "points":  18
                        },
                        {
                            "text":  "belly",
                            "points":  16
                        },
                        {
                            "text":  "silky locks",
                            "points":  15
                        },
                        {
                            "text":  "d-cup man boobs",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180373,
        "question":  "If dinosaurs were alive today, what do you think humans would do to them?",
        "answers":  [
                        {
                            "text":  "kill/eat 'em",
                            "points":  68
                        },
                        {
                            "text":  "cage/zoo/park",
                            "points":  9
                        },
                        {
                            "text":  "ride/race 'em",
                            "points":  8
                        },
                        {
                            "text":  "keep as pets",
                            "points":  7
                        },
                        {
                            "text":  "make 'em work",
                            "points":  3
                        },
                        {
                            "text":  "take pic/instagram",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180374,
        "question":  "We asked 100 married women... Name something in your bedroom you'd like to replace.",
        "answers":  [
                        {
                            "text":  "bed/mattress",
                            "points":  51
                        },
                        {
                            "text":  "carpet",
                            "points":  14
                        },
                        {
                            "text":  "my husband",
                            "points":  12
                        },
                        {
                            "text":  "closets",
                            "points":  9
                        },
                        {
                            "text":  "curtains",
                            "points":  9
                        },
                        {
                            "text":  "dresser",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180375,
        "question":  "What might a wife find in her husband's car that would make him say, \"I have no idea how that got there\"?",
        "answers":  [
                        {
                            "text":  "panties/chick duds",
                            "points":  47
                        },
                        {
                            "text":  "wienerhosen",
                            "points":  22
                        },
                        {
                            "text":  "playboy/porn",
                            "points":  14
                        },
                        {
                            "text":  "weed/drugs",
                            "points":  6
                        },
                        {
                            "text":  "lipstick",
                            "points":  5
                        },
                        {
                            "text":  "jewelry",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180376,
        "question":  "We asked 100 single men... Fill in the blank: I'd have an easier time meeting women if I had a what?",
        "answers":  [
                        {
                            "text":  "wad of cash",
                            "points":  46
                        },
                        {
                            "text":  "car/roadster",
                            "points":  35
                        },
                        {
                            "text":  "house/apt.",
                            "points":  8
                        },
                        {
                            "text":  "lot of confidence",
                            "points":  3
                        },
                        {
                            "text":  "drink/or four",
                            "points":  3
                        },
                        {
                            "text":  "desire/for chicks",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180377,
        "question":  "We asked 100 single men... What would you do if you found a pregnancy test in your girlfriend's purse?",
        "answers":  [
                        {
                            "text":  "talk about it",
                            "points":  45
                        },
                        {
                            "text":  "freak/cry",
                            "points":  42
                        },
                        {
                            "text":  "run/disappear",
                            "points":  4
                        },
                        {
                            "text":  "\"who's the daddy?\"",
                            "points":  2
                        },
                        {
                            "text":  "clap/be happy",
                            "points":  2
                        },
                        {
                            "text":  "faint",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180378,
        "question":  "We asked 100 men... Tell me something that might be sitting on your lap.",
        "answers":  [
                        {
                            "text":  "pet/guinea pig",
                            "points":  43
                        },
                        {
                            "text":  "woman/stripper",
                            "points":  28
                        },
                        {
                            "text":  "kid/18-yr.-old son",
                            "points":  12
                        },
                        {
                            "text":  "laptop",
                            "points":  10
                        },
                        {
                            "text":  "cell phone",
                            "points":  2
                        },
                        {
                            "text":  "tv remote",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180379,
        "question":  "Name something of Steve Harvey's you'd love to have if he ever gets tired of it.",
        "answers":  [
                        {
                            "text":  "all that chedda!",
                            "points":  41
                        },
                        {
                            "text":  "suits/ties/duds",
                            "points":  21
                        },
                        {
                            "text":  "his 9,000 jobs",
                            "points":  15
                        },
                        {
                            "text":  "his wheels",
                            "points":  12
                        },
                        {
                            "text":  "his wit/talent",
                            "points":  4
                        },
                        {
                            "text":  "mustache/trimmings",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180380,
        "question":  "Name something edible that's spreadable.",
        "answers":  [
                        {
                            "text":  "butter/margarine",
                            "points":  35
                        },
                        {
                            "text":  "cheese",
                            "points":  23
                        },
                        {
                            "text":  "peanut butter",
                            "points":  22
                        },
                        {
                            "text":  "jelly/jam",
                            "points":  13
                        },
                        {
                            "text":  "chocolate",
                            "points":  2
                        },
                        {
                            "text":  "icing",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180381,
        "question":  "Ashes to ashes, dust to dust. Name something on a person that a mortician might adjust.",
        "answers":  [
                        {
                            "text":  "face/makeup",
                            "points":  33
                        },
                        {
                            "text":  "hair/wig",
                            "points":  30
                        },
                        {
                            "text":  "clothes/tie",
                            "points":  20
                        },
                        {
                            "text":  "junk/massive nads",
                            "points":  5
                        },
                        {
                            "text":  "arms/hands",
                            "points":  5
                        },
                        {
                            "text":  "head position",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180382,
        "question":  "Name something a man has that jiggles when he walks.",
        "answers":  [
                        {
                            "text":  "gut/flabdomen",
                            "points":  33
                        },
                        {
                            "text":  "keys",
                            "points":  19
                        },
                        {
                            "text":  "change",
                            "points":  19
                        },
                        {
                            "text":  "nads/\"frog eyes\"",
                            "points":  14
                        },
                        {
                            "text":  "perky pooper",
                            "points":  8
                        },
                        {
                            "text":  "man boobs",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180383,
        "question":  "We asked 100 men... Fill in the blank: The directions say, \"To get your inflatable doll started, blow into her\" what?",
        "answers":  [
                        {
                            "text":  "mouth",
                            "points":  32
                        },
                        {
                            "text":  "bottom",
                            "points":  20
                        },
                        {
                            "text":  "ear",
                            "points":  15
                        },
                        {
                            "text":  "boobs",
                            "points":  14
                        },
                        {
                            "text":  "belly button",
                            "points":  9
                        },
                        {
                            "text":  "nozzle/valve/tube",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  180384,
        "question":  "Name something you might see in a hot tub the morning after a wild party.",
        "answers":  [
                        {
                            "text":  "clothes/my bikini",
                            "points":  31
                        },
                        {
                            "text":  "beer cans/bottles",
                            "points":  28
                        },
                        {
                            "text":  "wienerhosen",
                            "points":  23
                        },
                        {
                            "text":  "puke",
                            "points":  7
                        },
                        {
                            "text":  "cups/glasses",
                            "points":  5
                        },
                        {
                            "text":  "pee/floating turd",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180385,
        "question":  "Name a plus to working in a morgue.",
        "answers":  [
                        {
                            "text":  "quiet/no complaints",
                            "points":  83
                        },
                        {
                            "text":  "funeral discounts",
                            "points":  4
                        },
                        {
                            "text":  "make dead look sexy",
                            "points":  3
                        },
                        {
                            "text":  "wear what i want",
                            "points":  2
                        },
                        {
                            "text":  "always have business",
                            "points":  2
                        },
                        {
                            "text":  "good money",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180386,
        "question":  "Name something that makes a kiss tickle.",
        "answers":  [
                        {
                            "text":  "hair/her beard",
                            "points":  76
                        },
                        {
                            "text":  "slithering tongue",
                            "points":  10
                        },
                        {
                            "text":  "lips",
                            "points":  3
                        },
                        {
                            "text":  "nerves/new love",
                            "points":  3
                        },
                        {
                            "text":  "noses rubbing",
                            "points":  2
                        },
                        {
                            "text":  "static electricity",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180387,
        "question":  "Name something a first-time parachuter might do on the way down.",
        "answers":  [
                        {
                            "text":  "scream/cuss",
                            "points":  55
                        },
                        {
                            "text":  "pray",
                            "points":  20
                        },
                        {
                            "text":  "pee/float a doody",
                            "points":  9
                        },
                        {
                            "text":  "faint",
                            "points":  5
                        },
                        {
                            "text":  "cry",
                            "points":  4
                        },
                        {
                            "text":  "hurl",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180388,
        "question":  "We asked 100 women... Fill in the blank: My date was great right up until he said he had a what?",
        "answers":  [
                        {
                            "text":  "wife/boyfriend",
                            "points":  54
                        },
                        {
                            "text":  "std/bloody cough",
                            "points":  21
                        },
                        {
                            "text":  "kid",
                            "points":  13
                        },
                        {
                            "text":  "pet snake",
                            "points":  4
                        },
                        {
                            "text":  "foot fetish",
                            "points":  2
                        },
                        {
                            "text":  "wig on",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180389,
        "question":  "We asked 100 women... Give me a complaint you might have if you were dating a caveman.",
        "answers":  [
                        {
                            "text":  "stinky/bad hygiene",
                            "points":  53
                        },
                        {
                            "text":  "too much hair",
                            "points":  25
                        },
                        {
                            "text":  "drags me by hair",
                            "points":  10
                        },
                        {
                            "text":  "too controlling",
                            "points":  4
                        },
                        {
                            "text":  "his stupid club",
                            "points":  2
                        },
                        {
                            "text":  "cave life",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180390,
        "question":  "No one turned up to your party. Why?",
        "answers":  [
                        {
                            "text":  "forgot to invite",
                            "points":  48
                        },
                        {
                            "text":  "i'm disliked",
                            "points":  20
                        },
                        {
                            "text":  "wrong day",
                            "points":  18
                        },
                        {
                            "text":  "no booze/bad booze",
                            "points":  6
                        },
                        {
                            "text":  "i'm busy",
                            "points":  2
                        },
                        {
                            "text":  "no food",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180391,
        "question":  "Name something the farmer's pig might do to look more like her idol, Miss Piggy.",
        "answers":  [
                        {
                            "text":  "makeup/mascara",
                            "points":  46
                        },
                        {
                            "text":  "hairdo/bow/wig",
                            "points":  26
                        },
                        {
                            "text":  "wear dress/hat",
                            "points":  11
                        },
                        {
                            "text":  "take bath/shower",
                            "points":  7
                        },
                        {
                            "text":  "sing/talk",
                            "points":  4
                        },
                        {
                            "text":  "shave",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180392,
        "question":  "Name something an elephant's body has that you're glad you don't have.",
        "answers":  [
                        {
                            "text":  "trunk/big nose",
                            "points":  46
                        },
                        {
                            "text":  "huge floppy ears",
                            "points":  22
                        },
                        {
                            "text":  "tusks",
                            "points":  10
                        },
                        {
                            "text":  "fat/a wide booty",
                            "points":  8
                        },
                        {
                            "text":  "wrinkles",
                            "points":  6
                        },
                        {
                            "text":  "a tail",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180393,
        "question":  "We asked 100 married women... Fill in the blank: I can honestly say I have more what than my husband?",
        "answers":  [
                        {
                            "text":  "brains/sense",
                            "points":  46
                        },
                        {
                            "text":  "patience",
                            "points":  17
                        },
                        {
                            "text":  "hair",
                            "points":  12
                        },
                        {
                            "text":  "money",
                            "points":  9
                        },
                        {
                            "text":  "compassion",
                            "points":  7
                        },
                        {
                            "text":  "\"balls\"",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180394,
        "question":  "We asked 100 married men... Tell me something your wife might do that you'd better notice.",
        "answers":  [
                        {
                            "text":  "dress up/sexy",
                            "points":  38
                        },
                        {
                            "text":  "get haircut",
                            "points":  30
                        },
                        {
                            "text":  "hint at anniversary",
                            "points":  8
                        },
                        {
                            "text":  "new makeup",
                            "points":  8
                        },
                        {
                            "text":  "cook/favorite dish",
                            "points":  7
                        },
                        {
                            "text":  "redecorate",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180395,
        "question":  "We asked 100 men... Name a place you would hate to be when you realize you didn't zip up your pants.",
        "answers":  [
                        {
                            "text":  "church",
                            "points":  36
                        },
                        {
                            "text":  "work/interview",
                            "points":  33
                        },
                        {
                            "text":  "on stage",
                            "points":  11
                        },
                        {
                            "text":  "school",
                            "points":  9
                        },
                        {
                            "text":  "store/mall",
                            "points":  4
                        },
                        {
                            "text":  "wedding",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180396,
        "question":  "We asked 100 women... I'd walk around the house nude if I didn't have what?",
        "answers":  [
                        {
                            "text":  "family/kids there",
                            "points":  33
                        },
                        {
                            "text":  "a bad bod/fat",
                            "points":  30
                        },
                        {
                            "text":  "neighbors",
                            "points":  15
                        },
                        {
                            "text":  "windows",
                            "points":  11
                        },
                        {
                            "text":  "pets/pervy dog",
                            "points":  5
                        },
                        {
                            "text":  "a drafty house",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180397,
        "question":  "Name something that's bouncy.",
        "answers":  [
                        {
                            "text":  "a ball",
                            "points":  79
                        },
                        {
                            "text":  "my soft shiny hair",
                            "points":  5
                        },
                        {
                            "text":  "a trampoline",
                            "points":  3
                        },
                        {
                            "text":  "a balloon",
                            "points":  3
                        },
                        {
                            "text":  "hot set of knockers",
                            "points":  3
                        },
                        {
                            "text":  "a bounce house",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180398,
        "question":  "Fill in the blank: If God didn't want women to attract men, he wouldn't have given them what?",
        "answers":  [
                        {
                            "text":  "gland of milk & honey",
                            "points":  68
                        },
                        {
                            "text":  "pretty faces",
                            "points":  9
                        },
                        {
                            "text":  "inviting va-jays",
                            "points":  6
                        },
                        {
                            "text":  "lickable legs",
                            "points":  6
                        },
                        {
                            "text":  "brains",
                            "points":  4
                        },
                        {
                            "text":  "personalities",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180399,
        "question":  "If a man doesn't want a woman to get the wrong idea, he'll break up with her before what day?",
        "answers":  [
                        {
                            "text":  "valentine's day",
                            "points":  64
                        },
                        {
                            "text":  "birthday",
                            "points":  11
                        },
                        {
                            "text":  "their wedding day",
                            "points":  7
                        },
                        {
                            "text":  "their anniversary",
                            "points":  7
                        },
                        {
                            "text":  "christmas",
                            "points":  3
                        },
                        {
                            "text":  "friday/weekend",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180400,
        "question":  "We asked 100 women... Fill in the blank with a word beginning with the letter F: This dress makes me look ______.",
        "answers":  [
                        {
                            "text":  "fat",
                            "points":  57
                        },
                        {
                            "text":  "fabulous",
                            "points":  21
                        },
                        {
                            "text":  "fantastic",
                            "points":  7
                        },
                        {
                            "text":  "fine",
                            "points":  5
                        },
                        {
                            "text":  "fancy",
                            "points":  3
                        },
                        {
                            "text":  "frumpy",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180401,
        "question":  "We asked 100 men... If the woman next door is a nudist, name something you hope she does outdoors.",
        "answers":  [
                        {
                            "text":  "exercise/downw'd dog",
                            "points":  48
                        },
                        {
                            "text":  "sunbathe/oil up",
                            "points":  18
                        },
                        {
                            "text":  "yard work/garden",
                            "points":  16
                        },
                        {
                            "text":  "bend over",
                            "points":  7
                        },
                        {
                            "text":  "wash the car",
                            "points":  3
                        },
                        {
                            "text":  "have sex",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180402,
        "question":  "Tell me a kids' breakfast cereal character that might be a good name for a male stripper.",
        "answers":  [
                        {
                            "text":  "tony the tiger",
                            "points":  47
                        },
                        {
                            "text":  "cap'n crunch",
                            "points":  25
                        },
                        {
                            "text":  "toucan sam",
                            "points":  8
                        },
                        {
                            "text":  "lucky the leprechaun",
                            "points":  7
                        },
                        {
                            "text":  "trix rabbit",
                            "points":  5
                        },
                        {
                            "text":  "count chocula",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180403,
        "question":  "If Santa went to a bar, who might be his wingman?",
        "answers":  [
                        {
                            "text":  "rudolph",
                            "points":  46
                        },
                        {
                            "text":  "studly elf",
                            "points":  35
                        },
                        {
                            "text":  "frosty the snowman",
                            "points":  6
                        },
                        {
                            "text":  "easter bunny",
                            "points":  4
                        },
                        {
                            "text":  "jack frost",
                            "points":  2
                        },
                        {
                            "text":  "mrs. claus/for 3-way",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180404,
        "question":  "To a bull, name the sexiest part of a cow.",
        "answers":  [
                        {
                            "text":  "them teaties!",
                            "points":  46
                        },
                        {
                            "text":  "fine behind",
                            "points":  26
                        },
                        {
                            "text":  "cute face/eyes",
                            "points":  11
                        },
                        {
                            "text":  "swishy tail",
                            "points":  6
                        },
                        {
                            "text":  "hot horns",
                            "points":  3
                        },
                        {
                            "text":  "beefy legs/ankles",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180405,
        "question":  "We asked 100 single men... If a girlfriend dumped you at 8 p.m., what would you be doing at 9 p.m.?",
        "answers":  [
                        {
                            "text":  "brewskis w/ bros",
                            "points":  46
                        },
                        {
                            "text":  "new chick/her sis",
                            "points":  23
                        },
                        {
                            "text":  "watching tv",
                            "points":  18
                        },
                        {
                            "text":  "sleeping",
                            "points":  4
                        },
                        {
                            "text":  "crying",
                            "points":  2
                        },
                        {
                            "text":  "eat'g/whole pizza",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180406,
        "question":  "It's bad if a wife finds another woman's panties. It's worse if she finds them where?",
        "answers":  [
                        {
                            "text":  "bed/her pillow",
                            "points":  45
                        },
                        {
                            "text":  "hubby's body/orifice",
                            "points":  28
                        },
                        {
                            "text":  "car/glove box",
                            "points":  8
                        },
                        {
                            "text":  "hubby's pocket",
                            "points":  6
                        },
                        {
                            "text":  "in a drawer",
                            "points":  5
                        },
                        {
                            "text":  "on herself!",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180407,
        "question":  "Name a specific way you can tell your date thinks you're a big bore.",
        "answers":  [
                        {
                            "text":  "yawns",
                            "points":  45
                        },
                        {
                            "text":  "looks around/ignores",
                            "points":  14
                        },
                        {
                            "text":  "on phone/texts",
                            "points":  13
                        },
                        {
                            "text":  "sleeps",
                            "points":  12
                        },
                        {
                            "text":  "checks watch",
                            "points":  6
                        },
                        {
                            "text":  "leaves early",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180408,
        "question":  "Name something that's easy to pick.",
        "answers":  [
                        {
                            "text":  "my snotlocker",
                            "points":  43
                        },
                        {
                            "text":  "fruit/food",
                            "points":  39
                        },
                        {
                            "text":  "flowers",
                            "points":  5
                        },
                        {
                            "text":  "my meth teeth",
                            "points":  3
                        },
                        {
                            "text":  "clothes/socks",
                            "points":  3
                        },
                        {
                            "text":  "sides",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180409,
        "question":  "We asked 100 women... You want an apple bottom. But instead, yours is shaped like what fruit?",
        "answers":  [
                        {
                            "text":  "pear",
                            "points":  42
                        },
                        {
                            "text":  "melon/watermelon",
                            "points":  26
                        },
                        {
                            "text":  "grapefruit",
                            "points":  15
                        },
                        {
                            "text":  "bunch of grapes",
                            "points":  7
                        },
                        {
                            "text":  "pumpkin",
                            "points":  3
                        },
                        {
                            "text":  "apricot",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180410,
        "question":  "We asked 100 single men... If you want there to be a next time, name something you shouldn't do while making love.",
        "answers":  [
                        {
                            "text":  "say wrong name",
                            "points":  42
                        },
                        {
                            "text":  "fall asleep",
                            "points":  20
                        },
                        {
                            "text":  "last 30 seconds",
                            "points":  11
                        },
                        {
                            "text":  "use phone/instagram",
                            "points":  11
                        },
                        {
                            "text":  "talk/complain",
                            "points":  8
                        },
                        {
                            "text":  "fart during big \"o\"",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180411,
        "question":  "We asked 100 married women... If we promise not to tell your husband, name a place you'd flirt with other men.",
        "answers":  [
                        {
                            "text":  "store/walmart",
                            "points":  41
                        },
                        {
                            "text":  "work",
                            "points":  15
                        },
                        {
                            "text":  "bar/nightclub",
                            "points":  15
                        },
                        {
                            "text":  "online/facebook",
                            "points":  12
                        },
                        {
                            "text":  "the gym",
                            "points":  7
                        },
                        {
                            "text":  "cafe/coffee shop",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180412,
        "question":  "We asked 100 married women... Name something you don't like to see on your husband's face.",
        "answers":  [
                        {
                            "text":  "facial hair",
                            "points":  35
                        },
                        {
                            "text":  "frown/anger",
                            "points":  20
                        },
                        {
                            "text":  "food/mayo",
                            "points":  17
                        },
                        {
                            "text":  "lipstick",
                            "points":  15
                        },
                        {
                            "text":  "guilt",
                            "points":  5
                        },
                        {
                            "text":  "snot",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180413,
        "question":  "Name something a really cheap guy might do at a restaurant so he doesn't have to pay.",
        "answers":  [
                        {
                            "text":  "bail/hit bathroom",
                            "points":  34
                        },
                        {
                            "text":  "complain/plant a bug",
                            "points":  28
                        },
                        {
                            "text":  "\"forget\" wallet",
                            "points":  16
                        },
                        {
                            "text":  "act ill",
                            "points":  9
                        },
                        {
                            "text":  "have water & bread",
                            "points":  5
                        },
                        {
                            "text":  "tell date to pay",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180414,
        "question":  "Who might you have to share a bed with and you hope they don't sleep in the nude?",
        "answers":  [
                        {
                            "text":  "mom/well-hung dad",
                            "points":  33
                        },
                        {
                            "text":  "brother/sister",
                            "points":  24
                        },
                        {
                            "text":  "gramps/granny",
                            "points":  15
                        },
                        {
                            "text":  "a friend",
                            "points":  13
                        },
                        {
                            "text":  "my kids",
                            "points":  6
                        },
                        {
                            "text":  "in-laws",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180415,
        "question":  "We asked 100 single women... When you meet your boyfriend's mother, name a question she might ask that you'd refuse to answer.",
        "answers":  [
                        {
                            "text":  "# of dudes before?",
                            "points":  32
                        },
                        {
                            "text":  "boinking my boy?",
                            "points":  25
                        },
                        {
                            "text":  "age/over 18?",
                            "points":  11
                        },
                        {
                            "text":  "pregnant yet?",
                            "points":  10
                        },
                        {
                            "text":  "make lotsa money?",
                            "points":  9
                        },
                        {
                            "text":  "what u weigh, missy?",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  180416,
        "question":  "We asked 100 single men... Fill in the blank: I'm looking for a woman with a really big what?",
        "answers":  [
                        {
                            "text":  "bank acct./dowry",
                            "points":  29
                        },
                        {
                            "text":  "heart",
                            "points":  28
                        },
                        {
                            "text":  "pair of knockers",
                            "points":  21
                        },
                        {
                            "text":  "brain/iq",
                            "points":  8
                        },
                        {
                            "text":  "melon booty",
                            "points":  7
                        },
                        {
                            "text":  "personality",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180417,
        "question":  "Name something that, if Steve Harvey wanted to give you, you would gladly accept.",
        "answers":  [
                        {
                            "text":  "$$$/100 million",
                            "points":  77
                        },
                        {
                            "text":  "a tongue kiss/hug",
                            "points":  5
                        },
                        {
                            "text":  "car/a rolls",
                            "points":  5
                        },
                        {
                            "text":  "house",
                            "points":  3
                        },
                        {
                            "text":  "vacation/with him",
                            "points":  2
                        },
                        {
                            "text":  "pageant title/crown",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180418,
        "question":  "Name something a man called Big Daddy might have a lot of.",
        "answers":  [
                        {
                            "text":  "money",
                            "points":  65
                        },
                        {
                            "text":  "size/fat/height",
                            "points":  13
                        },
                        {
                            "text":  "chicks/big mamas",
                            "points":  6
                        },
                        {
                            "text":  "kids",
                            "points":  4
                        },
                        {
                            "text":  "cars",
                            "points":  3
                        },
                        {
                            "text":  "power/charisma",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180419,
        "question":  "Men like women in lingerie. Women like men in what?",
        "answers":  [
                        {
                            "text":  "sexy duds/uniform",
                            "points":  64
                        },
                        {
                            "text":  "the buff",
                            "points":  18
                        },
                        {
                            "text":  "the kitchen",
                            "points":  4
                        },
                        {
                            "text":  "nice cars/teslas",
                            "points":  4
                        },
                        {
                            "text":  "bed",
                            "points":  2
                        },
                        {
                            "text":  "handcuffs",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180420,
        "question":  "Name something it would be weird for twins to share.",
        "answers":  [
                        {
                            "text":  "spouse/date",
                            "points":  56
                        },
                        {
                            "text":  "a toothbrush",
                            "points":  18
                        },
                        {
                            "text":  "undies",
                            "points":  8
                        },
                        {
                            "text":  "a bed",
                            "points":  4
                        },
                        {
                            "text":  "a first name",
                            "points":  4
                        },
                        {
                            "text":  "food/baby bottle",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180421,
        "question":  "No one ever had to teach a baby how to do what?",
        "answers":  [
                        {
                            "text":  "cry/scream",
                            "points":  53
                        },
                        {
                            "text":  "dump/spray pee",
                            "points":  19
                        },
                        {
                            "text":  "eat/suckle",
                            "points":  10
                        },
                        {
                            "text":  "crawl",
                            "points":  6
                        },
                        {
                            "text":  "smile/laugh",
                            "points":  4
                        },
                        {
                            "text":  "breathe",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180422,
        "question":  "Fill in the blank: The handyman's wife thought he was having an affair because she found lipstick on his what?",
        "answers":  [
                        {
                            "text":  "shirt/collar",
                            "points":  48
                        },
                        {
                            "text":  "hammer/tools",
                            "points":  21
                        },
                        {
                            "text":  "neck/body",
                            "points":  11
                        },
                        {
                            "text":  "tool belt",
                            "points":  8
                        },
                        {
                            "text":  "toolbox",
                            "points":  3
                        },
                        {
                            "text":  "undies",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180423,
        "question":  "When you were a kid, name a specific place you knew monsters were hiding.",
        "answers":  [
                        {
                            "text":  "under bed",
                            "points":  45
                        },
                        {
                            "text":  "closet",
                            "points":  36
                        },
                        {
                            "text":  "basement",
                            "points":  7
                        },
                        {
                            "text":  "attic",
                            "points":  2
                        },
                        {
                            "text":  "mountain/woods",
                            "points":  2
                        },
                        {
                            "text":  "stairs/under them",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180424,
        "question":  "Name something Powerball lottery winners probably worry about.",
        "answers":  [
                        {
                            "text":  "greedy \"pals\"/kin",
                            "points":  37
                        },
                        {
                            "text":  "taxes",
                            "points":  25
                        },
                        {
                            "text":  "theft/crime target",
                            "points":  21
                        },
                        {
                            "text":  "losing anonymity",
                            "points":  4
                        },
                        {
                            "text":  "losing ticket",
                            "points":  4
                        },
                        {
                            "text":  "salespeople",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180425,
        "question":  "We asked 100 women... Fill in the blank: My man is like a box of chocolates. He's what?",
        "answers":  [
                        {
                            "text":  "a surprise/never same",
                            "points":  33
                        },
                        {
                            "text":  "sweet",
                            "points":  31
                        },
                        {
                            "text":  "soft on inside",
                            "points":  15
                        },
                        {
                            "text":  "oh so yummy!",
                            "points":  11
                        },
                        {
                            "text":  "nutty",
                            "points":  2
                        },
                        {
                            "text":  "dark",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180426,
        "question":  "Fill in the blank: Uh-oh -- grandpa just put his hearing aid in his ______.",
        "answers":  [
                        {
                            "text":  "snot locker",
                            "points":  32
                        },
                        {
                            "text":  "mouth",
                            "points":  23
                        },
                        {
                            "text":  "butt/brown recluse",
                            "points":  19
                        },
                        {
                            "text":  "drink/coffee",
                            "points":  13
                        },
                        {
                            "text":  "pocket",
                            "points":  4
                        },
                        {
                            "text":  "denture cleaner",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180427,
        "question":  "Name something about a pig that the other farm animals make fun of.",
        "answers":  [
                        {
                            "text":  "curly tail",
                            "points":  32
                        },
                        {
                            "text":  "snout/nose",
                            "points":  21
                        },
                        {
                            "text":  "muddy/stinky",
                            "points":  16
                        },
                        {
                            "text":  "fat/overeater",
                            "points":  15
                        },
                        {
                            "text":  "oink/squeal/grunt",
                            "points":  8
                        },
                        {
                            "text":  "no hair/wiry hair",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180428,
        "question":  "Instead of hiring someone else to do it, name something a cheap dad might do at his daughter's wedding.",
        "answers":  [
                        {
                            "text":  "dj/play music",
                            "points":  25
                        },
                        {
                            "text":  "take pics/video",
                            "points":  23
                        },
                        {
                            "text":  "sing",
                            "points":  15
                        },
                        {
                            "text":  "bartend",
                            "points":  14
                        },
                        {
                            "text":  "cater/bake cake",
                            "points":  12
                        },
                        {
                            "text":  "decorate/set up",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180429,
        "question":  "Name something the new guy at a nudist camp hides behind.",
        "answers":  [
                        {
                            "text":  "bush/tree/leaf",
                            "points":  77
                        },
                        {
                            "text":  "person/fat guy",
                            "points":  6
                        },
                        {
                            "text":  "a sign",
                            "points":  3
                        },
                        {
                            "text":  "a chair",
                            "points":  3
                        },
                        {
                            "text":  "door/doorjamb",
                            "points":  2
                        },
                        {
                            "text":  "his hands",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180430,
        "question":  "Name a way insects are killed that would be a horrible way for you to die.",
        "answers":  [
                        {
                            "text":  "squashed/swatted",
                            "points":  73
                        },
                        {
                            "text":  "poisoned",
                            "points":  7
                        },
                        {
                            "text":  "hit windshield",
                            "points":  7
                        },
                        {
                            "text":  "burned/mag. glass",
                            "points":  2
                        },
                        {
                            "text":  "zapped",
                            "points":  2
                        },
                        {
                            "text":  "dismembered",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180431,
        "question":  "Name something of grandpa's that might end up in grandma's bra when they make out.",
        "answers":  [
                        {
                            "text":  "his chompers",
                            "points":  64
                        },
                        {
                            "text":  "his arthritic hand",
                            "points":  20
                        },
                        {
                            "text":  "hair/from his ear",
                            "points":  3
                        },
                        {
                            "text":  "hearing aid",
                            "points":  2
                        },
                        {
                            "text":  "his face/mouth",
                            "points":  2
                        },
                        {
                            "text":  "half-chewed food",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180432,
        "question":  "If Barbie could talk, name something she might complain about.",
        "answers":  [
                        {
                            "text":  "ken/has no wang",
                            "points":  49
                        },
                        {
                            "text":  "her body/stiff",
                            "points":  19
                        },
                        {
                            "text":  "her clothes/shoes",
                            "points":  9
                        },
                        {
                            "text":  "her hair",
                            "points":  7
                        },
                        {
                            "text":  "dieting/food",
                            "points":  6
                        },
                        {
                            "text":  "always smiling",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180433,
        "question":  "Name something you have that's cuter than anyone else's.",
        "answers":  [
                        {
                            "text":  "kids/grandkids",
                            "points":  33
                        },
                        {
                            "text":  "pet/pussy cat",
                            "points":  25
                        },
                        {
                            "text":  "face/smile",
                            "points":  21
                        },
                        {
                            "text":  "spouse/mate",
                            "points":  7
                        },
                        {
                            "text":  "tush/rosebud",
                            "points":  5
                        },
                        {
                            "text":  "purse",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180434,
        "question":  "When a cheating husband dies, what might his wife literally do over his dead body?",
        "answers":  [
                        {
                            "text":  "dance",
                            "points":  30
                        },
                        {
                            "text":  "laugh/smile",
                            "points":  29
                        },
                        {
                            "text":  "pee/take dump",
                            "points":  14
                        },
                        {
                            "text":  "spit/big loogie",
                            "points":  12
                        },
                        {
                            "text":  "cry",
                            "points":  4
                        },
                        {
                            "text":  "have sex on it",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180435,
        "question":  "When you were a kid, name a place your parents would take you kicking and screaming.",
        "answers":  [
                        {
                            "text":  "doctor/dentist",
                            "points":  72
                        },
                        {
                            "text":  "church",
                            "points":  9
                        },
                        {
                            "text":  "pool/swim lessons",
                            "points":  5
                        },
                        {
                            "text":  "barber/hair salon",
                            "points":  2
                        },
                        {
                            "text":  "school",
                            "points":  2
                        },
                        {
                            "text":  "bathroom",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180436,
        "question":  "Name something you might learn to do in elf school.",
        "answers":  [
                        {
                            "text":  "build toys",
                            "points":  68
                        },
                        {
                            "text":  "wrap gifts",
                            "points":  12
                        },
                        {
                            "text":  "sew/make clothes",
                            "points":  4
                        },
                        {
                            "text":  "sing carols",
                            "points":  4
                        },
                        {
                            "text":  "fly sleigh",
                            "points":  2
                        },
                        {
                            "text":  "smile/have fun",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180437,
        "question":  "Name someone a stripper would hate to see sitting in the audience.",
        "answers":  [
                        {
                            "text":  "dad/mom",
                            "points":  68
                        },
                        {
                            "text":  "her man/hubby",
                            "points":  8
                        },
                        {
                            "text":  "cop",
                            "points":  5
                        },
                        {
                            "text":  "clergy/pastor",
                            "points":  4
                        },
                        {
                            "text":  "her ex",
                            "points":  4
                        },
                        {
                            "text":  "celeb/r. kelly",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180438,
        "question":  "Name something you can honestly say you've never made love in while it's moving.",
        "answers":  [
                        {
                            "text":  "car/truck/rv",
                            "points":  57
                        },
                        {
                            "text":  "airplane",
                            "points":  15
                        },
                        {
                            "text":  "train",
                            "points":  7
                        },
                        {
                            "text":  "bus",
                            "points":  5
                        },
                        {
                            "text":  "boat",
                            "points":  4
                        },
                        {
                            "text":  "roller coaster",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180439,
        "question":  "Name a reason a very attractive woman might have a hard time finding a boyfriend.",
        "answers":  [
                        {
                            "text":  "'tude/personality",
                            "points":  53
                        },
                        {
                            "text":  "too hot/intimidates",
                            "points":  15
                        },
                        {
                            "text":  "she's dumb as dirt",
                            "points":  9
                        },
                        {
                            "text":  "she's too picky",
                            "points":  7
                        },
                        {
                            "text":  "gold digger/broke",
                            "points":  4
                        },
                        {
                            "text":  "has butt breath",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180440,
        "question":  "Name something an ugly guy gets that could turn him into a chick magnet.",
        "answers":  [
                        {
                            "text":  "money/great job",
                            "points":  52
                        },
                        {
                            "text":  "sweet car",
                            "points":  26
                        },
                        {
                            "text":  "cute dog",
                            "points":  5
                        },
                        {
                            "text":  "humor/personality",
                            "points":  4
                        },
                        {
                            "text":  "trendy haircut",
                            "points":  3
                        },
                        {
                            "text":  "studly threads",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180441,
        "question":  "Name something a wife might do behind her husband's back.",
        "answers":  [
                        {
                            "text":  "shop/spend money",
                            "points":  50
                        },
                        {
                            "text":  "shag/his dad",
                            "points":  33
                        },
                        {
                            "text":  "stick tongue out",
                            "points":  3
                        },
                        {
                            "text":  "pig out",
                            "points":  2
                        },
                        {
                            "text":  "flirt",
                            "points":  2
                        },
                        {
                            "text":  "surprise party",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180442,
        "question":  "We asked 100 men... Name something you need to do if you're going as Steve Harvey for Halloween.",
        "answers":  [
                        {
                            "text":  "shave head/bald cap",
                            "points":  33
                        },
                        {
                            "text":  "dress well/suit",
                            "points":  17
                        },
                        {
                            "text":  "grow stache",
                            "points":  13
                        },
                        {
                            "text":  "become black",
                            "points":  12
                        },
                        {
                            "text":  "whiten my teeth",
                            "points":  9
                        },
                        {
                            "text":  "be funny",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  180443,
        "question":  "Name an inappropriate gift for a man to give his brother's wife.",
        "answers":  [
                        {
                            "text":  "lingerie/nightie",
                            "points":  61
                        },
                        {
                            "text":  "toy/rubber wang",
                            "points":  12
                        },
                        {
                            "text":  "condoms",
                            "points":  9
                        },
                        {
                            "text":  "jewelry/diamond ring",
                            "points":  5
                        },
                        {
                            "text":  "dozen red roses",
                            "points":  2
                        },
                        {
                            "text":  "perfume",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180444,
        "question":  "Name something a dog might do a lot more of if it got into his owner's stash of marijuana.",
        "answers":  [
                        {
                            "text":  "eat/cheetos",
                            "points":  45
                        },
                        {
                            "text":  "sleep/lie around",
                            "points":  33
                        },
                        {
                            "text":  "get sick/visit vet",
                            "points":  4
                        },
                        {
                            "text":  "lick himself",
                            "points":  3
                        },
                        {
                            "text":  "roll around",
                            "points":  3
                        },
                        {
                            "text":  "run/chase cats",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180445,
        "question":  "What's the first question someone might ask when they wake up from a coma?",
        "answers":  [
                        {
                            "text":  "where am i?",
                            "points":  45
                        },
                        {
                            "text":  "what day/year?",
                            "points":  26
                        },
                        {
                            "text":  "how long in coma?",
                            "points":  6
                        },
                        {
                            "text":  "who are you?",
                            "points":  6
                        },
                        {
                            "text":  "what happened?",
                            "points":  5
                        },
                        {
                            "text":  "who am i?",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180446,
        "question":  "We asked 100 men... Name something an attractive woman tells you she has that might scare you off.",
        "answers":  [
                        {
                            "text":  "disease/every std",
                            "points":  44
                        },
                        {
                            "text":  "kids/quintuplets",
                            "points":  22
                        },
                        {
                            "text":  "a man/in nfl",
                            "points":  11
                        },
                        {
                            "text":  "6-inch wang",
                            "points":  9
                        },
                        {
                            "text":  "money/big job",
                            "points":  3
                        },
                        {
                            "text":  "tough/mob family",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180447,
        "question":  "We asked 100 men... Name something Popeye has that you have, too.",
        "answers":  [
                        {
                            "text":  "big guns/muscle",
                            "points":  39
                        },
                        {
                            "text":  "babe",
                            "points":  15
                        },
                        {
                            "text":  "a pipe",
                            "points":  13
                        },
                        {
                            "text":  "bald head",
                            "points":  9
                        },
                        {
                            "text":  "spinach",
                            "points":  8
                        },
                        {
                            "text":  "tattoo",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  180448,
        "question":  "Name an animal with big breasts.",
        "answers":  [
                        {
                            "text":  "cow",
                            "points":  35
                        },
                        {
                            "text":  "gorilla/ape",
                            "points":  28
                        },
                        {
                            "text":  "turkey",
                            "points":  11
                        },
                        {
                            "text":  "chicken",
                            "points":  10
                        },
                        {
                            "text":  "elephant",
                            "points":  4
                        },
                        {
                            "text":  "human/tubby hubby",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180449,
        "question":  "Fill in the blank: Strip what?",
        "answers":  [
                        {
                            "text":  "striptease",
                            "points":  24
                        },
                        {
                            "text":  "strip poker",
                            "points":  23
                        },
                        {
                            "text":  "strip club",
                            "points":  19
                        },
                        {
                            "text":  "strip mall",
                            "points":  14
                        },
                        {
                            "text":  "strip naked",
                            "points":  6
                        },
                        {
                            "text":  "strip search",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180450,
        "question":  "Name another famous bear that Yogi Bear might get into a fight with.",
        "answers":  [
                        {
                            "text":  "smokey bear",
                            "points":  65
                        },
                        {
                            "text":  "boo-boo bear",
                            "points":  10
                        },
                        {
                            "text":  "winnie the pooh",
                            "points":  9
                        },
                        {
                            "text":  "fozzie bear",
                            "points":  2
                        },
                        {
                            "text":  "paddington bear",
                            "points":  2
                        },
                        {
                            "text":  "max baer sr./jr.",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180451,
        "question":  "In a pinch, what might you use toilet paper for besides its intended use?",
        "answers":  [
                        {
                            "text":  "blow/wipe nose",
                            "points":  59
                        },
                        {
                            "text":  "clean house/spills",
                            "points":  19
                        },
                        {
                            "text":  "stop bleed'g/bandage",
                            "points":  4
                        },
                        {
                            "text":  "as napkins",
                            "points":  3
                        },
                        {
                            "text":  "take off makeup",
                            "points":  3
                        },
                        {
                            "text":  "coffee filter",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180452,
        "question":  "Name something Pinocchio might use to give himself a nose job.",
        "answers":  [
                        {
                            "text":  "saw",
                            "points":  54
                        },
                        {
                            "text":  "sander/sandpaper",
                            "points":  11
                        },
                        {
                            "text":  "the truth/a lie",
                            "points":  9
                        },
                        {
                            "text":  "knife/whittle",
                            "points":  7
                        },
                        {
                            "text":  "file",
                            "points":  5
                        },
                        {
                            "text":  "axe",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180453,
        "question":  "Name someone who might tell you to take a deep breath.",
        "answers":  [
                        {
                            "text":  "doctor",
                            "points":  54
                        },
                        {
                            "text":  "friend",
                            "points":  8
                        },
                        {
                            "text":  "mom",
                            "points":  8
                        },
                        {
                            "text":  "spouse/mate",
                            "points":  8
                        },
                        {
                            "text":  "coach/instructor",
                            "points":  7
                        },
                        {
                            "text":  "therapist/shrink",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180454,
        "question":  "Name a place a man likes to go that's not a good place for him to propose marriage.",
        "answers":  [
                        {
                            "text":  "bar/nightclub",
                            "points":  41
                        },
                        {
                            "text":  "strip joint",
                            "points":  30
                        },
                        {
                            "text":  "sports venue/bowl'g",
                            "points":  13
                        },
                        {
                            "text":  "bathroom/stall",
                            "points":  2
                        },
                        {
                            "text":  "gym",
                            "points":  2
                        },
                        {
                            "text":  "restaurant/hooters",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180455,
        "question":  "Name an animal that can give the zookeeper an awesome hickey.",
        "answers":  [
                        {
                            "text":  "monkey/ape",
                            "points":  41
                        },
                        {
                            "text":  "anteater/aardvark",
                            "points":  20
                        },
                        {
                            "text":  "giraffe",
                            "points":  11
                        },
                        {
                            "text":  "elephant",
                            "points":  9
                        },
                        {
                            "text":  "leech",
                            "points":  6
                        },
                        {
                            "text":  "octopus",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180456,
        "question":  "We asked 100 single women... What do you ask a first date about which you want to know the truth, the whole truth, and nothing but the truth?",
        "answers":  [
                        {
                            "text":  "married/single?",
                            "points":  40
                        },
                        {
                            "text":  "job/salary?",
                            "points":  17
                        },
                        {
                            "text":  "kids/evil spawn?",
                            "points":  12
                        },
                        {
                            "text":  "age/birthday?",
                            "points":  12
                        },
                        {
                            "text":  "dig dudes?",
                            "points":  5
                        },
                        {
                            "text":  "church?",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180457,
        "question":  "Name a place that's hard to sneak out of once you're there.",
        "answers":  [
                        {
                            "text":  "church",
                            "points":  37
                        },
                        {
                            "text":  "police station/jail",
                            "points":  21
                        },
                        {
                            "text":  "work/biz meeting",
                            "points":  12
                        },
                        {
                            "text":  "home/relative's",
                            "points":  10
                        },
                        {
                            "text":  "theater/concert",
                            "points":  7
                        },
                        {
                            "text":  "a wedding",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180458,
        "question":  "We asked 100 women... I wouldn't date a man who refuses to wear what?",
        "answers":  [
                        {
                            "text":  "deodorant",
                            "points":  34
                        },
                        {
                            "text":  "underwear",
                            "points":  31
                        },
                        {
                            "text":  "any clothes",
                            "points":  9
                        },
                        {
                            "text":  "shoes/sandals",
                            "points":  7
                        },
                        {
                            "text":  "pants",
                            "points":  5
                        },
                        {
                            "text":  "condom/papa stoppa",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180459,
        "question":  "We asked 100 married people... Name something you've caught your spouse doing in the middle of sex.",
        "answers":  [
                        {
                            "text":  "tv/maury povich",
                            "points":  32
                        },
                        {
                            "text":  "sleeping",
                            "points":  22
                        },
                        {
                            "text":  "text'g/check cell",
                            "points":  15
                        },
                        {
                            "text":  "silently farting",
                            "points":  8
                        },
                        {
                            "text":  "yawning",
                            "points":  8
                        },
                        {
                            "text":  "eating",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180460,
        "question":  "We asked 100 men... What would you do if you woke up tomorrow morning and you were completely bald?",
        "answers":  [
                        {
                            "text":  "yell/freak/cry",
                            "points":  30
                        },
                        {
                            "text":  "nothing/rock it!",
                            "points":  27
                        },
                        {
                            "text":  "wear a hat",
                            "points":  11
                        },
                        {
                            "text":  "call a doctor",
                            "points":  9
                        },
                        {
                            "text":  "toss hair stuff",
                            "points":  7
                        },
                        {
                            "text":  "buy a wig",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  180461,
        "question":  "We asked 100 married men... Name something your wife calls you that makes you feel good.",
        "answers":  [
                        {
                            "text":  "baby/babe/bae",
                            "points":  26
                        },
                        {
                            "text":  "sexy",
                            "points":  16
                        },
                        {
                            "text":  "honey",
                            "points":  16
                        },
                        {
                            "text":  "handsome",
                            "points":  15
                        },
                        {
                            "text":  "stud/muffin",
                            "points":  14
                        },
                        {
                            "text":  "sweetheart/sweetie",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180462,
        "question":  "Name something that gives you a buzz.",
        "answers":  [
                        {
                            "text":  "alcohol",
                            "points":  70
                        },
                        {
                            "text":  "caffeine/soda",
                            "points":  6
                        },
                        {
                            "text":  "a fat blunt",
                            "points":  5
                        },
                        {
                            "text":  "hot babe/my boo",
                            "points":  3
                        },
                        {
                            "text":  "happiness/joy",
                            "points":  3
                        },
                        {
                            "text":  "my barber",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180463,
        "question":  "A man might suspect his wife hates him when she housebreaks the dog on his what?",
        "answers":  [
                        {
                            "text":  "shoes/clothes",
                            "points":  53
                        },
                        {
                            "text":  "pillow/side of bed",
                            "points":  13
                        },
                        {
                            "text":  "chair/sofa seat",
                            "points":  13
                        },
                        {
                            "text":  "car",
                            "points":  5
                        },
                        {
                            "text":  "golf clubs",
                            "points":  3
                        },
                        {
                            "text":  "newspaper/mags",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180464,
        "question":  "Name something a nudist might want to warm up before using.",
        "answers":  [
                        {
                            "text":  "chair",
                            "points":  45
                        },
                        {
                            "text":  "towel/blanket",
                            "points":  19
                        },
                        {
                            "text":  "hands/body",
                            "points":  9
                        },
                        {
                            "text":  "lotion/sunscreen",
                            "points":  7
                        },
                        {
                            "text":  "water/shower",
                            "points":  5
                        },
                        {
                            "text":  "toilet seat",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180465,
        "question":  "We asked 100 women... Name something you'd be happy with, but your mother thinks you could do better.",
        "answers":  [
                        {
                            "text":  "my guy/in san quentin",
                            "points":  43
                        },
                        {
                            "text":  "my weight",
                            "points":  12
                        },
                        {
                            "text":  "my housekeeping",
                            "points":  11
                        },
                        {
                            "text":  "my job",
                            "points":  10
                        },
                        {
                            "text":  "my kids",
                            "points":  7
                        },
                        {
                            "text":  "my cooking",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  180466,
        "question":  "We asked 100 men... If you caught a mermaid, tell me a reason you might throw her back.",
        "answers":  [
                        {
                            "text":  "fishy smell",
                            "points":  29
                        },
                        {
                            "text":  "ugly face",
                            "points":  20
                        },
                        {
                            "text":  "needs water to live",
                            "points":  19
                        },
                        {
                            "text":  "no coochie",
                            "points":  11
                        },
                        {
                            "text":  "blabs/nags",
                            "points":  7
                        },
                        {
                            "text":  "too young",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180467,
        "question":  "When the Jolly Green Giant proposed to his lady love, instead of a diamond, the ring had one perfect what?",
        "answers":  [
                        {
                            "text":  "pea",
                            "points":  53
                        },
                        {
                            "text":  "bean/green bean",
                            "points":  14
                        },
                        {
                            "text":  "carrot",
                            "points":  7
                        },
                        {
                            "text":  "corn kernel",
                            "points":  6
                        },
                        {
                            "text":  "green gem/emerald",
                            "points":  5
                        },
                        {
                            "text":  "broccoli floret",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180468,
        "question":  "Name something Santa might do right after having a pot brownie at Snoop Dogg's house.",
        "answers":  [
                        {
                            "text":  "pig out/chug milk",
                            "points":  46
                        },
                        {
                            "text":  "sleep/pass out",
                            "points":  20
                        },
                        {
                            "text":  "rap/jingle bells",
                            "points":  8
                        },
                        {
                            "text":  "fly/crash sleigh",
                            "points":  6
                        },
                        {
                            "text":  "dance/nae nae",
                            "points":  5
                        },
                        {
                            "text":  "get the giggles",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180469,
        "question":  "Name something that gets rolled out.",
        "answers":  [
                        {
                            "text":  "red carpet/rug",
                            "points":  45
                        },
                        {
                            "text":  "dough/bread/pie",
                            "points":  34
                        },
                        {
                            "text":  "a tight joint, yo!",
                            "points":  3
                        },
                        {
                            "text":  "toilet paper",
                            "points":  2
                        },
                        {
                            "text":  "\"the barrel\"",
                            "points":  2
                        },
                        {
                            "text":  "a cot",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180470,
        "question":  "If a man could read his wife's mind, what would he hate to discover she's thinking of doing?",
        "answers":  [
                        {
                            "text":  "leaving his arse",
                            "points":  36
                        },
                        {
                            "text":  "hot stud/swim team",
                            "points":  28
                        },
                        {
                            "text":  "shop'g/spend'g",
                            "points":  14
                        },
                        {
                            "text":  "killing him",
                            "points":  6
                        },
                        {
                            "text":  "eat'g/entire ham",
                            "points":  2
                        },
                        {
                            "text":  "cleaning",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180471,
        "question":  "When a man comes home, he'd hate to see a note from his wife that says \"Gone to\" where?",
        "answers":  [
                        {
                            "text":  "mall/car dealer",
                            "points":  32
                        },
                        {
                            "text":  "my folks'/come by",
                            "points":  23
                        },
                        {
                            "text":  "my boyfriend's/ex's",
                            "points":  14
                        },
                        {
                            "text":  "vegas/vacation",
                            "points":  10
                        },
                        {
                            "text":  "bed",
                            "points":  5
                        },
                        {
                            "text":  "bar/nightclub",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180472,
        "question":  "Name something a man hates being forced to do with his wife's friends.",
        "answers":  [
                        {
                            "text":  "go shopping",
                            "points":  26
                        },
                        {
                            "text":  "eat/dinner",
                            "points":  21
                        },
                        {
                            "text":  "talk/listen to",
                            "points":  20
                        },
                        {
                            "text":  "watch movie/beaches",
                            "points":  9
                        },
                        {
                            "text":  "dance",
                            "points":  6
                        },
                        {
                            "text":  "parties/baby shower",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  180473,
        "question":  "If a mermaid and a merman were getting married, name something that could ruin their special day.",
        "answers":  [
                        {
                            "text":  "drought/low tide",
                            "points":  22
                        },
                        {
                            "text":  "hurricane/storm",
                            "points":  22
                        },
                        {
                            "text":  "a shark/fish",
                            "points":  16
                        },
                        {
                            "text":  "fisherman/harpoon",
                            "points":  13
                        },
                        {
                            "text":  "tsunami/tidal wave",
                            "points":  10
                        },
                        {
                            "text":  "oil/dirty water",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180474,
        "question":  "Name a sport a man teaches a woman so he'll have an excuse to put his arms around her.",
        "answers":  [
                        {
                            "text":  "golf",
                            "points":  55
                        },
                        {
                            "text":  "tennis",
                            "points":  8
                        },
                        {
                            "text":  "football",
                            "points":  8
                        },
                        {
                            "text":  "pool/billiards",
                            "points":  7
                        },
                        {
                            "text":  "baseball",
                            "points":  5
                        },
                        {
                            "text":  "wrestling",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180475,
        "question":  "Name something even worse than a fly that you might find in your soup.",
        "answers":  [
                        {
                            "text":  "hair/short & curly",
                            "points":  46
                        },
                        {
                            "text":  "cockroach",
                            "points":  13
                        },
                        {
                            "text":  "finger/fingernail",
                            "points":  12
                        },
                        {
                            "text":  "spider",
                            "points":  9
                        },
                        {
                            "text":  "band-aid",
                            "points":  4
                        },
                        {
                            "text":  "spit/big loogie",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180476,
        "question":  "Name something real or fictional that has wings.",
        "answers":  [
                        {
                            "text":  "bird",
                            "points":  43
                        },
                        {
                            "text":  "angel",
                            "points":  12
                        },
                        {
                            "text":  "pegasus",
                            "points":  10
                        },
                        {
                            "text":  "dragon",
                            "points":  8
                        },
                        {
                            "text":  "airplane",
                            "points":  7
                        },
                        {
                            "text":  "unicorn",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  180477,
        "question":  "We asked 100 men... Name something specific a woman needs that makes her too needy for you.",
        "answers":  [
                        {
                            "text":  "moolah",
                            "points":  39
                        },
                        {
                            "text":  "attention/check-ins",
                            "points":  28
                        },
                        {
                            "text":  "praise/validat'n",
                            "points":  6
                        },
                        {
                            "text":  "clothes/shoes",
                            "points":  5
                        },
                        {
                            "text":  "jewelry",
                            "points":  5
                        },
                        {
                            "text":  "hugs/spooning",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180478,
        "question":  "Fill in the blank: Other than jail, I wish I had a \"Get out of ______\" card.",
        "answers":  [
                        {
                            "text":  "work",
                            "points":  33
                        },
                        {
                            "text":  "debt/bills",
                            "points":  28
                        },
                        {
                            "text":  "marriage/rela'ship",
                            "points":  10
                        },
                        {
                            "text":  "trouble/doghouse",
                            "points":  9
                        },
                        {
                            "text":  "hell",
                            "points":  4
                        },
                        {
                            "text":  "cleaning/laundry",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180479,
        "question":  "Fill in the blank: It might be fun for a day to be Mrs. Tom ______.",
        "answers":  [
                        {
                            "text":  "hanks",
                            "points":  30
                        },
                        {
                            "text":  "cruise",
                            "points":  16
                        },
                        {
                            "text":  "brady",
                            "points":  12
                        },
                        {
                            "text":  "selleck",
                            "points":  12
                        },
                        {
                            "text":  "jones",
                            "points":  9
                        },
                        {
                            "text":  "thumb",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  180480,
        "question":  "We asked 100 married women... Name something your husband has that would hurt his feelings if you made fun of it.",
        "answers":  [
                        {
                            "text":  "a dinky winky",
                            "points":  29
                        },
                        {
                            "text":  "hair issues/bald'g",
                            "points":  26
                        },
                        {
                            "text":  "too scrawny/fat",
                            "points":  23
                        },
                        {
                            "text":  "clothes/velour suit",
                            "points":  4
                        },
                        {
                            "text":  "an accent/french",
                            "points":  3
                        },
                        {
                            "text":  "height/of 5-yr. old",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180481,
        "question":  "When a man swims in cold water, his package shrinks from the size of zucchini to what vegetable?",
        "answers":  [
                        {
                            "text":  "baby carrot",
                            "points":  26
                        },
                        {
                            "text":  "pickle/gherkin",
                            "points":  23
                        },
                        {
                            "text":  "bean/lima bean",
                            "points":  15
                        },
                        {
                            "text":  "pea/peapod",
                            "points":  14
                        },
                        {
                            "text":  "pepper/jalapeno",
                            "points":  5
                        },
                        {
                            "text":  "cherry tomato",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180482,
        "question":  "Fill in the blank: Before his big date, the teenage pirate asked, \"Dad, can I borrow your\" what?",
        "answers":  [
                        {
                            "text":  "ship/dinghy",
                            "points":  36
                        },
                        {
                            "text":  "sword/cutlass",
                            "points":  14
                        },
                        {
                            "text":  "eyepatch",
                            "points":  14
                        },
                        {
                            "text":  "carrrr, arr",
                            "points":  12
                        },
                        {
                            "text":  "hook",
                            "points":  7
                        },
                        {
                            "text":  "booze/rum",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180483,
        "question":  "We asked 100 men... Fill in the blank: I'm the sexiest man in my what?",
        "answers":  [
                        {
                            "text":  "home/bedroom",
                            "points":  35
                        },
                        {
                            "text":  "mind/dreams",
                            "points":  32
                        },
                        {
                            "text":  "ugly family",
                            "points":  8
                        },
                        {
                            "text":  "generation",
                            "points":  4
                        },
                        {
                            "text":  "neighborhood",
                            "points":  4
                        },
                        {
                            "text":  "workplace",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180484,
        "question":  "We asked 100 women... What would you do if your man wanted to weigh you every week?",
        "answers":  [
                        {
                            "text":  "dump the schmuck",
                            "points":  31
                        },
                        {
                            "text":  "say no",
                            "points":  22
                        },
                        {
                            "text":  "get mad/beat him",
                            "points":  19
                        },
                        {
                            "text":  "cry",
                            "points":  5
                        },
                        {
                            "text":  "weigh him too",
                            "points":  5
                        },
                        {
                            "text":  "toss/sabotage scale",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180485,
        "question":  "We asked 100 men... Name a food that makes you think about sex.",
        "answers":  [
                        {
                            "text":  "banana",
                            "points":  31
                        },
                        {
                            "text":  "oysters",
                            "points":  19
                        },
                        {
                            "text":  "hot dog",
                            "points":  14
                        },
                        {
                            "text":  "cucumber",
                            "points":  14
                        },
                        {
                            "text":  "ice cream",
                            "points":  5
                        },
                        {
                            "text":  "chocolate",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180486,
        "question":  "In elementary school, name something little Dracula brought in for show and tell.",
        "answers":  [
                        {
                            "text":  "blood/to drink",
                            "points":  30
                        },
                        {
                            "text":  "cute pet bat",
                            "points":  20
                        },
                        {
                            "text":  "fangs/his baby fangs",
                            "points":  16
                        },
                        {
                            "text":  "his cape",
                            "points":  9
                        },
                        {
                            "text":  "his coffin",
                            "points":  7
                        },
                        {
                            "text":  "monster/frankenstein",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180487,
        "question":  "Instead of a birthday cake, the wife surprised the husband with a lit candle stuck in her what?",
        "answers":  [
                        {
                            "text":  "jugs/gland canyon",
                            "points":  24
                        },
                        {
                            "text":  "mouth",
                            "points":  23
                        },
                        {
                            "text":  "belly button",
                            "points":  17
                        },
                        {
                            "text":  "hershey highway",
                            "points":  10
                        },
                        {
                            "text":  "\"peach cobbler\"",
                            "points":  8
                        },
                        {
                            "text":  "hand",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180488,
        "question":  "Name something you'd be shocked to find in the cookies grandma baked for you.",
        "answers":  [
                        {
                            "text":  "pot/drugs/lsd",
                            "points":  67
                        },
                        {
                            "text":  "alcohol/brandy",
                            "points":  4
                        },
                        {
                            "text":  "bugs/maggots",
                            "points":  4
                        },
                        {
                            "text":  "hair/gray pube",
                            "points":  4
                        },
                        {
                            "text":  "her teeth",
                            "points":  3
                        },
                        {
                            "text":  "fruit/prunes",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180489,
        "question":  "Fill in the blank: A woman might get fired as a stripper if her ______ is too big.",
        "answers":  [
                        {
                            "text":  "gut/waist",
                            "points":  47
                        },
                        {
                            "text":  "bootious maximus",
                            "points":  21
                        },
                        {
                            "text":  "chest/left boob",
                            "points":  5
                        },
                        {
                            "text":  "ego/attitude",
                            "points":  4
                        },
                        {
                            "text":  "outfit/underwear",
                            "points":  4
                        },
                        {
                            "text":  "nose",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180490,
        "question":  "Fill in the blank: Two ______s are better than one.",
        "answers":  [
                        {
                            "text":  "heads/minds",
                            "points":  43
                        },
                        {
                            "text":  "dollars/millions",
                            "points":  15
                        },
                        {
                            "text":  "lovers",
                            "points":  14
                        },
                        {
                            "text":  "servings of food",
                            "points":  7
                        },
                        {
                            "text":  "hands",
                            "points":  3
                        },
                        {
                            "text":  "drinks/beers",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180491,
        "question":  "Fill in the blank: Tongue ______.",
        "answers":  [
                        {
                            "text":  "tongue-tied",
                            "points":  33
                        },
                        {
                            "text":  "tongue-in-cheek",
                            "points":  23
                        },
                        {
                            "text":  "tongue twister",
                            "points":  10
                        },
                        {
                            "text":  "tongue-lashing",
                            "points":  8
                        },
                        {
                            "text":  "tongue depressor",
                            "points":  7
                        },
                        {
                            "text":  "tongue kiss",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180492,
        "question":  "We asked 100 men... Fill in the blank: ______ women make men nervous.",
        "answers":  [
                        {
                            "text":  "beautiful/hot",
                            "points":  31
                        },
                        {
                            "text":  "big/pudgy",
                            "points":  21
                        },
                        {
                            "text":  "strong powerful",
                            "points":  14
                        },
                        {
                            "text":  "aggressive/pushy",
                            "points":  10
                        },
                        {
                            "text":  "smart",
                            "points":  6
                        },
                        {
                            "text":  "crazy/freaky",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180493,
        "question":  "Name something you wouldn't want to be on when it starts to fall apart.",
        "answers":  [
                        {
                            "text":  "airplane",
                            "points":  29
                        },
                        {
                            "text":  "amusement ride",
                            "points":  26
                        },
                        {
                            "text":  "bridge",
                            "points":  13
                        },
                        {
                            "text":  "boat/ship",
                            "points":  9
                        },
                        {
                            "text":  "building/roof",
                            "points":  5
                        },
                        {
                            "text":  "bicycle",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180494,
        "question":  "Name something a secretary might put in her mean boss's coffee.",
        "answers":  [
                        {
                            "text":  "laxative/3 doses",
                            "points":  27
                        },
                        {
                            "text":  "spit",
                            "points":  21
                        },
                        {
                            "text":  "salt",
                            "points":  18
                        },
                        {
                            "text":  "poison",
                            "points":  7
                        },
                        {
                            "text":  "her warm whiz",
                            "points":  7
                        },
                        {
                            "text":  "too much sugar",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180495,
        "question":  "We asked 100 men... Name something you should never do when you're kissing someone.",
        "answers":  [
                        {
                            "text":  "let one rip",
                            "points":  19
                        },
                        {
                            "text":  "sneeze/cough",
                            "points":  18
                        },
                        {
                            "text":  "talk/rate the kiss",
                            "points":  15
                        },
                        {
                            "text":  "burp",
                            "points":  15
                        },
                        {
                            "text":  "puke/in her mouth",
                            "points":  14
                        },
                        {
                            "text":  "open eyes/ogle babe",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180496,
        "question":  "Name something a man would hate to fall out of his pants when he starts to dance.",
        "answers":  [
                        {
                            "text":  "wallet/money",
                            "points":  47
                        },
                        {
                            "text":  "dong corleone",
                            "points":  16
                        },
                        {
                            "text":  "condom/x-small",
                            "points":  10
                        },
                        {
                            "text":  "cell phone",
                            "points":  5
                        },
                        {
                            "text":  "turd/butt gravy",
                            "points":  3
                        },
                        {
                            "text":  "undies/his mom's",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180497,
        "question":  "Name a kind of business you'd be surprised your grandparents opened.",
        "answers":  [
                        {
                            "text":  "porn/adult toys",
                            "points":  46
                        },
                        {
                            "text":  "bar/nightclub",
                            "points":  17
                        },
                        {
                            "text":  "pot biz/meth lab",
                            "points":  9
                        },
                        {
                            "text":  "bakery/restaurant",
                            "points":  4
                        },
                        {
                            "text":  "75 & up brothel",
                            "points":  4
                        },
                        {
                            "text":  "strip joint",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180498,
        "question":  "We asked 100 women... Give me an S word that describes how your man would look in a Speedo.",
        "answers":  [
                        {
                            "text":  "sexy",
                            "points":  33
                        },
                        {
                            "text":  "stupid",
                            "points":  22
                        },
                        {
                            "text":  "silly",
                            "points":  16
                        },
                        {
                            "text":  "sweet",
                            "points":  6
                        },
                        {
                            "text":  "scary",
                            "points":  4
                        },
                        {
                            "text":  "superb",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180499,
        "question":  "Name something you'd hate to be in the middle of doing when you get the hiccups.",
        "answers":  [
                        {
                            "text":  "frost'g the cookie",
                            "points":  31
                        },
                        {
                            "text":  "speaking/public",
                            "points":  20
                        },
                        {
                            "text":  "eat'g/drink'g",
                            "points":  18
                        },
                        {
                            "text":  "sing'g/at the met",
                            "points":  7
                        },
                        {
                            "text":  "surgery/dental",
                            "points":  4
                        },
                        {
                            "text":  "kissing",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180500,
        "question":  "A girl might say, \"I'm never dating that guy again. He ______ed during the entire date.\"",
        "answers":  [
                        {
                            "text":  "talked/complained",
                            "points":  29
                        },
                        {
                            "text":  "farted/stank",
                            "points":  24
                        },
                        {
                            "text":  "texted/used phone",
                            "points":  13
                        },
                        {
                            "text":  "slept",
                            "points":  9
                        },
                        {
                            "text":  "burped",
                            "points":  6
                        },
                        {
                            "text":  "drank booze",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180501,
        "question":  "Tell me a reason why you would instantly fail your driving test.",
        "answers":  [
                        {
                            "text":  "car accident",
                            "points":  29
                        },
                        {
                            "text":  "run light/stop sign",
                            "points":  16
                        },
                        {
                            "text":  "show up drunk",
                            "points":  13
                        },
                        {
                            "text":  "bad eyes/blind",
                            "points":  13
                        },
                        {
                            "text":  "hit person/tester",
                            "points":  7
                        },
                        {
                            "text":  "forgot seat belt",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  180502,
        "question":  "If a wife with short hair finds a long hair on her husband, how might he explain it?",
        "answers":  [
                        {
                            "text":  "from dog/animal",
                            "points":  27
                        },
                        {
                            "text":  "his mom's/relative's",
                            "points":  24
                        },
                        {
                            "text":  "someone at work",
                            "points":  19
                        },
                        {
                            "text":  "his/got haircut",
                            "points":  6
                        },
                        {
                            "text":  "\"very carefully\"",
                            "points":  4
                        },
                        {
                            "text":  "blew in the wind",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180503,
        "question":  "If you had a talking scale, name one specific word you wouldn't want it to call you.",
        "answers":  [
                        {
                            "text":  "fat/fatty/fatso",
                            "points":  67
                        },
                        {
                            "text":  "piggy/hog",
                            "points":  4
                        },
                        {
                            "text":  "whale",
                            "points":  3
                        },
                        {
                            "text":  "obese",
                            "points":  3
                        },
                        {
                            "text":  "skinny",
                            "points":  3
                        },
                        {
                            "text":  "tubby/tubs",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180504,
        "question":  "Name something that some women never stop doing.",
        "answers":  [
                        {
                            "text":  "talk'g/nagging",
                            "points":  55
                        },
                        {
                            "text":  "shop'g/spend'g",
                            "points":  9
                        },
                        {
                            "text":  "caring/mothering",
                            "points":  5
                        },
                        {
                            "text":  "worrying",
                            "points":  5
                        },
                        {
                            "text":  "put'g on makeup",
                            "points":  5
                        },
                        {
                            "text":  "fixing their hair",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180505,
        "question":  "Fill in the blank: Grandma says she'll date any guy who's got a what?",
        "answers":  [
                        {
                            "text":  "wad o' dough/401k",
                            "points":  30
                        },
                        {
                            "text":  "car/oldsmobile",
                            "points":  19
                        },
                        {
                            "text":  "pulse/heartbeat",
                            "points":  18
                        },
                        {
                            "text":  "woody/viagra",
                            "points":  9
                        },
                        {
                            "text":  "house/mansion",
                            "points":  4
                        },
                        {
                            "text":  "smile/set of teeth",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180506,
        "question":  "Fill in the blank: Pop ______.",
        "answers":  [
                        {
                            "text":  "pop goes the weasel",
                            "points":  28
                        },
                        {
                            "text":  "pop-tarts",
                            "points":  28
                        },
                        {
                            "text":  "popcorn",
                            "points":  13
                        },
                        {
                            "text":  "pop rocks",
                            "points":  6
                        },
                        {
                            "text":  "pop music",
                            "points":  4
                        },
                        {
                            "text":  "popsicle",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180507,
        "question":  "Name a fun place a person plans to have his funeral so it will attract a big crowd.",
        "answers":  [
                        {
                            "text":  "theme park/fair",
                            "points":  41
                        },
                        {
                            "text":  "stadium/sport event",
                            "points":  15
                        },
                        {
                            "text":  "bar/nightclub",
                            "points":  9
                        },
                        {
                            "text":  "beach/ocean",
                            "points":  8
                        },
                        {
                            "text":  "casino",
                            "points":  5
                        },
                        {
                            "text":  "cafe/pizza hut",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180508,
        "question":  "Name something a man might insist his mail-order bride has.",
        "answers":  [
                        {
                            "text":  "hot bod/milk makers",
                            "points":  38
                        },
                        {
                            "text":  "looks/hair/teeth",
                            "points":  22
                        },
                        {
                            "text":  "money/dowry",
                            "points":  10
                        },
                        {
                            "text":  "cooking skills",
                            "points":  5
                        },
                        {
                            "text":  "smarts/sense",
                            "points":  4
                        },
                        {
                            "text":  "free returns/postage",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180509,
        "question":  "Name the first thing a 100-year-old man might reach for when he wakes up.",
        "answers":  [
                        {
                            "text":  "glasses",
                            "points":  37
                        },
                        {
                            "text":  "teeth/dentures",
                            "points":  30
                        },
                        {
                            "text":  "cane/walker",
                            "points":  4
                        },
                        {
                            "text":  "pills/viagra",
                            "points":  4
                        },
                        {
                            "text":  "woman",
                            "points":  4
                        },
                        {
                            "text":  "beer/booze",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180510,
        "question":  "Name something a man would be horrified to realize his second wife does just like his first.",
        "answers":  [
                        {
                            "text":  "nags/argues",
                            "points":  22
                        },
                        {
                            "text":  "flirts/cheats",
                            "points":  18
                        },
                        {
                            "text":  "cooks",
                            "points":  16
                        },
                        {
                            "text":  "shops/spends",
                            "points":  10
                        },
                        {
                            "text":  "sleeps/snores",
                            "points":  9
                        },
                        {
                            "text":  "rides my bony pony",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  180511,
        "question":  "Name something a multitasking wife does during sex.",
        "answers":  [
                        {
                            "text":  "make list/schedule",
                            "points":  31
                        },
                        {
                            "text":  "read/text/e-mail",
                            "points":  23
                        },
                        {
                            "text":  "call/her mom",
                            "points":  8
                        },
                        {
                            "text":  "her nails",
                            "points":  8
                        },
                        {
                            "text":  "clean/make bed",
                            "points":  6
                        },
                        {
                            "text":  "pay bills",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180512,
        "question":  "Name a kind of business you'd be shocked went topless.",
        "answers":  [
                        {
                            "text":  "rest./chuck e. cheese",
                            "points":  23
                        },
                        {
                            "text":  "bank",
                            "points":  14
                        },
                        {
                            "text":  "doctor/dentist",
                            "points":  14
                        },
                        {
                            "text":  "church",
                            "points":  13
                        },
                        {
                            "text":  "bar/club",
                            "points":  9
                        },
                        {
                            "text":  "store/grocery",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  180513,
        "question":  "What might a man do if his ex-wife was telling everyone that he has a teeny weenie?",
        "answers":  [
                        {
                            "text":  "she's lying/get mad",
                            "points":  22
                        },
                        {
                            "text":  "ignore/laugh off",
                            "points":  19
                        },
                        {
                            "text":  "lie/rumor about her",
                            "points":  16
                        },
                        {
                            "text":  "show it off/post pic",
                            "points":  11
                        },
                        {
                            "text":  "confront her",
                            "points":  7
                        },
                        {
                            "text":  "get buff/work out",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  180514,
        "question":  "You'd really have to love someone in order to kiss them while they're doing what?",
        "answers":  [
                        {
                            "text":  "pee/planting corn",
                            "points":  39
                        },
                        {
                            "text":  "eating/chewing",
                            "points":  17
                        },
                        {
                            "text":  "hurling",
                            "points":  9
                        },
                        {
                            "text":  "cough/sneezing",
                            "points":  6
                        },
                        {
                            "text":  "having sex",
                            "points":  5
                        },
                        {
                            "text":  "brush teeth/floss'g",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180515,
        "question":  "Name something you hope doesn't come out of you while you're sleeping.",
        "answers":  [
                        {
                            "text":  "warm golden rain/pee",
                            "points":  33
                        },
                        {
                            "text":  "drool",
                            "points":  18
                        },
                        {
                            "text":  "air biscuit",
                            "points":  9
                        },
                        {
                            "text":  "words/wrong name",
                            "points":  8
                        },
                        {
                            "text":  "snore",
                            "points":  7
                        },
                        {
                            "text":  "poo/deuce juice",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180516,
        "question":  "Name something a doctor might ask a patient to do that you'd be surprised to hear a vet say to an animal.",
        "answers":  [
                        {
                            "text":  "turn head & cough",
                            "points":  23
                        },
                        {
                            "text":  "open up/say ahh",
                            "points":  18
                        },
                        {
                            "text":  "undress/put gown on",
                            "points":  16
                        },
                        {
                            "text":  "bend over",
                            "points":  13
                        },
                        {
                            "text":  "lie back/relax",
                            "points":  6
                        },
                        {
                            "text":  "eat well/go vegan",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180517,
        "question":  "We asked 100 women... Name something you'd love Steve Harvey to teach your man how to do better.",
        "answers":  [
                        {
                            "text":  "be funny/laugh",
                            "points":  34
                        },
                        {
                            "text":  "listen/shut up",
                            "points":  14
                        },
                        {
                            "text":  "make money",
                            "points":  11
                        },
                        {
                            "text":  "kiss/tonsil hockey",
                            "points":  8
                        },
                        {
                            "text":  "treat women nicely",
                            "points":  7
                        },
                        {
                            "text":  "dress/wear suit",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180518,
        "question":  "If Jane went on \"The Bachelorette,\" she might say to Tarzan, \"Will you accept this\" what?",
        "answers":  [
                        {
                            "text":  "banana",
                            "points":  24
                        },
                        {
                            "text":  "rose/flower",
                            "points":  22
                        },
                        {
                            "text":  "vine/rope",
                            "points":  13
                        },
                        {
                            "text":  "loincloth/pelt",
                            "points":  8
                        },
                        {
                            "text":  "ring",
                            "points":  7
                        },
                        {
                            "text":  "monkey/ape",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180519,
        "question":  "Name the first thing you'd do if a UFO landed in your backyard.",
        "answers":  [
                        {
                            "text":  "take pic/video",
                            "points":  23
                        },
                        {
                            "text":  "run",
                            "points":  18
                        },
                        {
                            "text":  "call 911/fbi",
                            "points":  12
                        },
                        {
                            "text":  "hide/lock doors",
                            "points":  11
                        },
                        {
                            "text":  "\"hi aliens! 'sup?\"",
                            "points":  8
                        },
                        {
                            "text":  "grab a gun",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  180520,
        "question":  "Name something a baker might put inside his sweet buns.",
        "answers":  [
                        {
                            "text":  "cinnamon",
                            "points":  21
                        },
                        {
                            "text":  "sugar/brown sugar",
                            "points":  18
                        },
                        {
                            "text":  "cream",
                            "points":  16
                        },
                        {
                            "text":  "jelly/jam",
                            "points":  9
                        },
                        {
                            "text":  "chocolate/chips",
                            "points":  8
                        },
                        {
                            "text":  "raisins/fruit",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  180521,
        "question":  "We asked 100 women... Name something you're good at throwing.",
        "answers":  [
                        {
                            "text":  "a ball",
                            "points":  28
                        },
                        {
                            "text":  "a fit/tantrum",
                            "points":  25
                        },
                        {
                            "text":  "kisses",
                            "points":  7
                        },
                        {
                            "text":  "insults/words",
                            "points":  7
                        },
                        {
                            "text":  "dishes",
                            "points":  6
                        },
                        {
                            "text":  "trash",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180522,
        "question":  "The Easter Bunny brings kids candy. What might he bring to adults?",
        "answers":  [
                        {
                            "text":  "booze/tequila",
                            "points":  22
                        },
                        {
                            "text":  "candy/edible undies",
                            "points":  18
                        },
                        {
                            "text":  "money",
                            "points":  16
                        },
                        {
                            "text":  "rabbit vibrator/toy",
                            "points":  9
                        },
                        {
                            "text":  "eggs",
                            "points":  7
                        },
                        {
                            "text":  "pack of trojans",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180523,
        "question":  "Name something you might be willing to fake your own death to get out of.",
        "answers":  [
                        {
                            "text":  "jail/prison",
                            "points":  24
                        },
                        {
                            "text":  "debt/bills/taxes",
                            "points":  23
                        },
                        {
                            "text":  "marriage/rela'ship",
                            "points":  11
                        },
                        {
                            "text":  "jury duty",
                            "points":  7
                        },
                        {
                            "text":  "being killed",
                            "points":  6
                        },
                        {
                            "text":  "public speech",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180524,
        "question":  "Fill in the blank: A woman might say bald men are more what?",
        "answers":  [
                        {
                            "text":  "sexy/attractive",
                            "points":  53
                        },
                        {
                            "text":  "fun/exciting",
                            "points":  6
                        },
                        {
                            "text":  "shiny",
                            "points":  5
                        },
                        {
                            "text":  "mature/experienced",
                            "points":  4
                        },
                        {
                            "text":  "loving/romantic",
                            "points":  3
                        },
                        {
                            "text":  "caring/kind",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180525,
        "question":  "Name something an insecure man might find on the beach to stick in his Speedo.",
        "answers":  [
                        {
                            "text":  "shell/a clam",
                            "points":  32
                        },
                        {
                            "text":  "driftwood/stick",
                            "points":  16
                        },
                        {
                            "text":  "rock",
                            "points":  9
                        },
                        {
                            "text":  "banana",
                            "points":  8
                        },
                        {
                            "text":  "towel/washcloth",
                            "points":  5
                        },
                        {
                            "text":  "empty bottle",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180526,
        "question":  "Name a sexy dance you'd be surprised to see your grandparents doing.",
        "answers":  [
                        {
                            "text":  "tango",
                            "points":  25
                        },
                        {
                            "text":  "twerking",
                            "points":  14
                        },
                        {
                            "text":  "salsa",
                            "points":  13
                        },
                        {
                            "text":  "lambada",
                            "points":  10
                        },
                        {
                            "text":  "the twist",
                            "points":  7
                        },
                        {
                            "text":  "rumba",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180527,
        "question":  "Name a famous horse that a well-endowed male stripper might call himself.",
        "answers":  [
                        {
                            "text":  "mister ed",
                            "points":  19
                        },
                        {
                            "text":  "seabiscuit",
                            "points":  15
                        },
                        {
                            "text":  "secretariat",
                            "points":  13
                        },
                        {
                            "text":  "black beauty",
                            "points":  10
                        },
                        {
                            "text":  "black stallion",
                            "points":  10
                        },
                        {
                            "text":  "trigger",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180528,
        "question":  "Fill in the blank: Grandma shocked grandpa by saying she wants a what?",
        "answers":  [
                        {
                            "text":  "baby",
                            "points":  17
                        },
                        {
                            "text":  "boob job/surgery",
                            "points":  15
                        },
                        {
                            "text":  "divorce",
                            "points":  13
                        },
                        {
                            "text":  "new mate/18-yr-old",
                            "points":  11
                        },
                        {
                            "text":  "new car/hot rod",
                            "points":  8
                        },
                        {
                            "text":  "vibrator/toy",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  180529,
        "question":  "Name a breakfast cereal that describes you in the bedroom.",
        "answers":  [
                        {
                            "text":  "lucky charms",
                            "points":  22
                        },
                        {
                            "text":  "trix",
                            "points":  15
                        },
                        {
                            "text":  "froot loops",
                            "points":  11
                        },
                        {
                            "text":  "rice krispies",
                            "points":  9
                        },
                        {
                            "text":  "cheerios/honey nut",
                            "points":  8
                        },
                        {
                            "text":  "frosted flakes",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  180530,
        "question":  "Name something you hate but you're stuck with it.",
        "answers":  [
                        {
                            "text":  "my bod/looks/hair",
                            "points":  32
                        },
                        {
                            "text":  "my job",
                            "points":  13
                        },
                        {
                            "text":  "bills/debt",
                            "points":  7
                        },
                        {
                            "text":  "my awful spouse",
                            "points":  6
                        },
                        {
                            "text":  "relatives/in-laws",
                            "points":  6
                        },
                        {
                            "text":  "my name",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  180531,
        "question":  "Name something grandma wears to bed that only grandpa would think is sexy.",
        "answers":  [
                        {
                            "text":  "flannel/gown/pjs",
                            "points":  27
                        },
                        {
                            "text":  "false teeth",
                            "points":  17
                        },
                        {
                            "text":  "panties/bloomers",
                            "points":  8
                        },
                        {
                            "text":  "socks/support hose",
                            "points":  7
                        },
                        {
                            "text":  "nada!",
                            "points":  6
                        },
                        {
                            "text":  "nightcap/bonnet",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180532,
        "question":  "Fill in the blank: Never ever have I what?",
        "answers":  [
                        {
                            "text":  "gone skydiving",
                            "points":  25
                        },
                        {
                            "text":  "used drugs",
                            "points":  11
                        },
                        {
                            "text":  "killed anyone...yet",
                            "points":  11
                        },
                        {
                            "text":  "traveled/on cruise",
                            "points":  9
                        },
                        {
                            "text":  "surfed",
                            "points":  7
                        },
                        {
                            "text":  "died",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  180533,
        "question":  "Making love is like dancing. So what kind of dance reflects your lovemaking style?",
        "answers":  [
                        {
                            "text":  "slow dance",
                            "points":  20
                        },
                        {
                            "text":  "tango",
                            "points":  15
                        },
                        {
                            "text":  "waltz",
                            "points":  11
                        },
                        {
                            "text":  "salsa",
                            "points":  8
                        },
                        {
                            "text":  "rumba",
                            "points":  7
                        },
                        {
                            "text":  "cha-cha",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  180534,
        "question":  "Name an \"S\" word that describes your very first romantic kiss.",
        "answers":  [
                        {
                            "text":  "sloppy",
                            "points":  26
                        },
                        {
                            "text":  "sweet",
                            "points":  22
                        },
                        {
                            "text":  "sexy/sexual",
                            "points":  6
                        },
                        {
                            "text":  "sensual",
                            "points":  5
                        },
                        {
                            "text":  "soft",
                            "points":  4
                        },
                        {
                            "text":  "slow",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180535,
        "question":  "Fill in the blank: \"Oh no,\" said the nudist, \"I just sat on a\" what?",
        "answers":  [
                        {
                            "text":  "nail/tack/pin",
                            "points":  25
                        },
                        {
                            "text":  "cactus/thorn",
                            "points":  16
                        },
                        {
                            "text":  "bee/bug",
                            "points":  9
                        },
                        {
                            "text":  "stick",
                            "points":  6
                        },
                        {
                            "text":  "pinecone",
                            "points":  6
                        },
                        {
                            "text":  "wanker",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180536,
        "question":  "Name a game you would never play with Captain Hook.",
        "answers":  [
                        {
                            "text":  "tag/marco polo",
                            "points":  18
                        },
                        {
                            "text":  "cards/slapjack",
                            "points":  16
                        },
                        {
                            "text":  "pat-a-cake",
                            "points":  12
                        },
                        {
                            "text":  "twister",
                            "points":  11
                        },
                        {
                            "text":  "wrestle/arm wrestle",
                            "points":  5
                        },
                        {
                            "text":  "volleyball",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180537,
        "question":  "Name a talk show host you'd vote for for president.",
        "answers":  [
                        {
                            "text":  "ellen degeneres",
                            "points":  19
                        },
                        {
                            "text":  "oprah winfrey",
                            "points":  13
                        },
                        {
                            "text":  "steve harvey",
                            "points":  11
                        },
                        {
                            "text":  "jon stewart",
                            "points":  8
                        },
                        {
                            "text":  "steven colbert",
                            "points":  7
                        },
                        {
                            "text":  "jimmy fallon",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  180538,
        "question":  "Tell me a cocktail that reminds you of your love life.",
        "answers":  [
                        {
                            "text":  "sex on the beach",
                            "points":  29
                        },
                        {
                            "text":  "martini/dry/dirty",
                            "points":  11
                        },
                        {
                            "text":  "margarita",
                            "points":  9
                        },
                        {
                            "text":  "screwdriver",
                            "points":  5
                        },
                        {
                            "text":  "bloody mary",
                            "points":  4
                        },
                        {
                            "text":  "tequila/sunrise",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180539,
        "question":  "Name an occupation you think is full of men who cheat on their wives.",
        "answers":  [
                        {
                            "text":  "athlete",
                            "points":  16
                        },
                        {
                            "text":  "salesman",
                            "points":  14
                        },
                        {
                            "text":  "politician",
                            "points":  10
                        },
                        {
                            "text":  "lawyer",
                            "points":  9
                        },
                        {
                            "text":  "actor",
                            "points":  6
                        },
                        {
                            "text":  "male stripper",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  180540,
        "question":  "Fill in the blank: When the Colonel ran out of chicken, he started making Kentucky Fried what?",
        "answers":  [
                        {
                            "text":  "turkey",
                            "points":  17
                        },
                        {
                            "text":  "beef/steak/burger",
                            "points":  16
                        },
                        {
                            "text":  "pork/bacon",
                            "points":  8
                        },
                        {
                            "text":  "rat/mouse",
                            "points":  7
                        },
                        {
                            "text":  "potato",
                            "points":  6
                        },
                        {
                            "text":  "fish",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  180541,
        "question":  "Name a job where you'd be bending over a lot.",
        "answers":  [
                        {
                            "text":  "construct'n/builder",
                            "points":  16
                        },
                        {
                            "text":  "gardener/landscaper",
                            "points":  11
                        },
                        {
                            "text":  "garbage man",
                            "points":  10
                        },
                        {
                            "text":  "plumber",
                            "points":  9
                        },
                        {
                            "text":  "farmer",
                            "points":  7
                        },
                        {
                            "text":  "housekeeper",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  180542,
        "question":  "Give me the title of a scary movie people consider to be a classic.",
        "answers":  [
                        {
                            "text":  "the exorcist",
                            "points":  21
                        },
                        {
                            "text":  "psycho",
                            "points":  14
                        },
                        {
                            "text":  "halloween",
                            "points":  8
                        },
                        {
                            "text":  "dracula",
                            "points":  5
                        },
                        {
                            "text":  "friday the 13th",
                            "points":  5
                        },
                        {
                            "text":  "frankenstein",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180543,
        "question":  "We asked 100 men... Name something you have two of that will never be exactly alike.",
        "answers":  [
                        {
                            "text":  "feet",
                            "points":  15
                        },
                        {
                            "text":  "nads/love spuds",
                            "points":  14
                        },
                        {
                            "text":  "hands/fingers",
                            "points":  10
                        },
                        {
                            "text":  "ears",
                            "points":  7
                        },
                        {
                            "text":  "eyes",
                            "points":  6
                        },
                        {
                            "text":  "kids",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  180544,
        "question":  "Name an animal you wouldn't want your lover to compare you to.",
        "answers":  [
                        {
                            "text":  "pig/hog",
                            "points":  13
                        },
                        {
                            "text":  "cow",
                            "points":  10
                        },
                        {
                            "text":  "skunk",
                            "points":  9
                        },
                        {
                            "text":  "dog/chihuahua",
                            "points":  9
                        },
                        {
                            "text":  "ape/monkey",
                            "points":  8
                        },
                        {
                            "text":  "donkey/jackass",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  180545,
        "question":  "Name an animal that's all brawn and no brains.",
        "answers":  [
                        {
                            "text":  "bear",
                            "points":  16
                        },
                        {
                            "text":  "rhinoceros",
                            "points":  10
                        },
                        {
                            "text":  "dog",
                            "points":  9
                        },
                        {
                            "text":  "bull",
                            "points":  8
                        },
                        {
                            "text":  "elephant",
                            "points":  6
                        },
                        {
                            "text":  "men",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180546,
        "question":  "If a man calls his wife's bottom Good & Plenty, what candy does she call his package?",
        "answers":  [
                        {
                            "text":  "mr. goodbar",
                            "points":  11
                        },
                        {
                            "text":  "tootsie roll",
                            "points":  10
                        },
                        {
                            "text":  "twizzlers/licorice",
                            "points":  10
                        },
                        {
                            "text":  "baby ruth",
                            "points":  9
                        },
                        {
                            "text":  "snickers",
                            "points":  7
                        },
                        {
                            "text":  "payday",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  180547,
        "question":  "We asked 100 women... Fill in the blank: If I thought my man was cheating on me, I'd ______ him.",
        "answers":  [
                        {
                            "text":  "leave/divorce",
                            "points":  38
                        },
                        {
                            "text":  "confront/ask",
                            "points":  22
                        },
                        {
                            "text":  "follow/spy on",
                            "points":  21
                        },
                        {
                            "text":  "hurt/castrate",
                            "points":  12
                        },
                        {
                            "text":  "kill",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  180548,
        "question":  "Name something you haven't worn since you were a baby.",
        "answers":  [
                        {
                            "text":  "diaper",
                            "points":  80
                        },
                        {
                            "text":  "bib",
                            "points":  7
                        },
                        {
                            "text":  "onesie/romper",
                            "points":  6
                        },
                        {
                            "text":  "booties",
                            "points":  4
                        },
                        {
                            "text":  "hat/bonnet",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180549,
        "question":  "Name someone the cat complains about to the pet psychologist.",
        "answers":  [
                        {
                            "text":  "dumb dog",
                            "points":  53
                        },
                        {
                            "text":  "lousy inbred owner",
                            "points":  28
                        },
                        {
                            "text":  "annoying kid",
                            "points":  14
                        },
                        {
                            "text":  "pesky mouse",
                            "points":  2
                        },
                        {
                            "text":  "vet",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180550,
        "question":  "Fill in the blank: I had the worst waitress. She kept putting her finger in her what?",
        "answers":  [
                        {
                            "text":  "booger barn",
                            "points":  48
                        },
                        {
                            "text":  "mouth",
                            "points":  26
                        },
                        {
                            "text":  "wax-filled ear",
                            "points":  15
                        },
                        {
                            "text":  "greasy hair",
                            "points":  7
                        },
                        {
                            "text":  "butt/rusty badge",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180551,
        "question":  "We asked 100 married men... Name something you'd hate for your wife to catch you in.",
        "answers":  [
                        {
                            "text":  "a lie",
                            "points":  37
                        },
                        {
                            "text":  "my lover/his bed",
                            "points":  26
                        },
                        {
                            "text":  "her duds/prom gown",
                            "points":  23
                        },
                        {
                            "text":  "mid-stare at babe",
                            "points":  10
                        },
                        {
                            "text":  "a hotel",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180552,
        "question":  "We asked 100 men... Name the number one place where you think about sex.",
        "answers":  [
                        {
                            "text":  "home/bed/shower",
                            "points":  68
                        },
                        {
                            "text":  "work",
                            "points":  12
                        },
                        {
                            "text":  "bar/nightclub",
                            "points":  9
                        },
                        {
                            "text":  "beach",
                            "points":  5
                        },
                        {
                            "text":  "everywhere!",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180553,
        "question":  "Name something that might crawl into your sleeping bag when you're camping.",
        "answers":  [
                        {
                            "text":  "bug/scorpion",
                            "points":  65
                        },
                        {
                            "text":  "snake",
                            "points":  23
                        },
                        {
                            "text":  "my lover",
                            "points":  6
                        },
                        {
                            "text":  "mouse",
                            "points":  2
                        },
                        {
                            "text":  "me!",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180554,
        "question":  "We asked 100 single men... Tell me a gift you might give to your girlfriend that you'd never give to your mom.",
        "answers":  [
                        {
                            "text":  "lingerie/nightie",
                            "points":  50
                        },
                        {
                            "text":  "sex toys",
                            "points":  16
                        },
                        {
                            "text":  "flowers/red rose",
                            "points":  13
                        },
                        {
                            "text":  "engagement ring",
                            "points":  12
                        },
                        {
                            "text":  "vacation",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  180555,
        "question":  "Name something an exhausted wife does when her husband won't stop snoring.",
        "answers":  [
                        {
                            "text":  "hit/kick/wake him",
                            "points":  44
                        },
                        {
                            "text":  "she leaves room",
                            "points":  37
                        },
                        {
                            "text":  "pillow/smother him",
                            "points":  10
                        },
                        {
                            "text":  "kick him out",
                            "points":  5
                        },
                        {
                            "text":  "use earplugs",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180556,
        "question":  "We asked 100 married men... Name something you hope your wife never does like her mother.",
        "answers":  [
                        {
                            "text":  "cooks",
                            "points":  34
                        },
                        {
                            "text":  "nags",
                            "points":  28
                        },
                        {
                            "text":  "ages/looks like",
                            "points":  22
                        },
                        {
                            "text":  "hoards junk",
                            "points":  9
                        },
                        {
                            "text":  "has sex",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180557,
        "question":  "We asked 100 men... Name something you won't clean until it looks dirty.",
        "answers":  [
                        {
                            "text":  "my car",
                            "points":  31
                        },
                        {
                            "text":  "duds/shoes/undies",
                            "points":  31
                        },
                        {
                            "text":  "my toilet",
                            "points":  21
                        },
                        {
                            "text":  "my windows",
                            "points":  12
                        },
                        {
                            "text":  "my sink",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180558,
        "question":  "Fill in the blank: Grandma used to be a hairdresser until she accidentally cut someone's ______ off.",
        "answers":  [
                        {
                            "text":  "ear/ears",
                            "points":  80
                        },
                        {
                            "text":  "ponytail/hair all off",
                            "points":  7
                        },
                        {
                            "text":  "nose",
                            "points":  4
                        },
                        {
                            "text":  "eyebrows",
                            "points":  3
                        },
                        {
                            "text":  "head",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180559,
        "question":  "Name something that might be sold at a funeral home's going out of business sale.",
        "answers":  [
                        {
                            "text":  "coffins",
                            "points":  78
                        },
                        {
                            "text":  "urns",
                            "points":  7
                        },
                        {
                            "text":  "furniture/pews",
                            "points":  7
                        },
                        {
                            "text":  "hearse",
                            "points":  3
                        },
                        {
                            "text":  "flowers/wreaths",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180560,
        "question":  "We asked 100 men... You never want to hear another guy say that your mom has a sexy what?",
        "answers":  [
                        {
                            "text":  "pooper/to spank",
                            "points":  75
                        },
                        {
                            "text":  "rack",
                            "points":  9
                        },
                        {
                            "text":  "pair of legs",
                            "points":  7
                        },
                        {
                            "text":  "voice",
                            "points":  4
                        },
                        {
                            "text":  "thong",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180561,
        "question":  "Name something that makes a dog and a man happy.",
        "answers":  [
                        {
                            "text":  "food/peanut butter",
                            "points":  66
                        },
                        {
                            "text":  "good rub/scratch",
                            "points":  13
                        },
                        {
                            "text":  "sleep",
                            "points":  9
                        },
                        {
                            "text":  "humping",
                            "points":  5
                        },
                        {
                            "text":  "companionship",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180562,
        "question":  "We asked 100 men... Name something you might do if you develop really big man boobs.",
        "answers":  [
                        {
                            "text":  "diet/exercise",
                            "points":  61
                        },
                        {
                            "text":  "see doc/surgery",
                            "points":  27
                        },
                        {
                            "text":  "hide 'em/baggy duds",
                            "points":  3
                        },
                        {
                            "text":  "cry/scream",
                            "points":  3
                        },
                        {
                            "text":  "buy a cute bra",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180563,
        "question":  "Name something a woman might promise her man to get him to go to church with her.",
        "answers":  [
                        {
                            "text":  "her pearly gates",
                            "points":  56
                        },
                        {
                            "text":  "delish meal",
                            "points":  34
                        },
                        {
                            "text":  "boys' night out",
                            "points":  3
                        },
                        {
                            "text":  "marriage",
                            "points":  2
                        },
                        {
                            "text":  "new car/truck",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180564,
        "question":  "Name a part of her body a woman sticks out when she's teasing a man.",
        "answers":  [
                        {
                            "text":  "bazookas",
                            "points":  53
                        },
                        {
                            "text":  "tempting tongue",
                            "points":  24
                        },
                        {
                            "text":  "bean-blastin' booty",
                            "points":  16
                        },
                        {
                            "text":  "come-hither finger",
                            "points":  2
                        },
                        {
                            "text":  "heavenly hips",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180565,
        "question":  "If a man lost his barbecue tongs, what might he use to flip his meat?",
        "answers":  [
                        {
                            "text":  "fork",
                            "points":  49
                        },
                        {
                            "text":  "spatula",
                            "points":  28
                        },
                        {
                            "text":  "hands/fingers",
                            "points":  16
                        },
                        {
                            "text":  "spade/shovel",
                            "points":  2
                        },
                        {
                            "text":  "sticks",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180566,
        "question":  "Fill in the blank: Wipe your ______.",
        "answers":  [
                        {
                            "text":  "face",
                            "points":  44
                        },
                        {
                            "text":  "butt/chocolate star",
                            "points":  35
                        },
                        {
                            "text":  "feet",
                            "points":  13
                        },
                        {
                            "text":  "hands",
                            "points":  3
                        },
                        {
                            "text":  "windshield",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180567,
        "question":  "Name something a man has that he brags is very hot.",
        "answers":  [
                        {
                            "text":  "car/truck",
                            "points":  41
                        },
                        {
                            "text":  "woman/babe",
                            "points":  25
                        },
                        {
                            "text":  "body/3rd nipple",
                            "points":  25
                        },
                        {
                            "text":  "salsa/food",
                            "points":  4
                        },
                        {
                            "text":  "hair",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180568,
        "question":  "Name a way you can tell that someone's smoked a joint.",
        "answers":  [
                        {
                            "text":  "smell/on breath",
                            "points":  40
                        },
                        {
                            "text":  "stoner eyes",
                            "points":  39
                        },
                        {
                            "text":  "silly/giggling",
                            "points":  11
                        },
                        {
                            "text":  "has the munchies",
                            "points":  5
                        },
                        {
                            "text":  "speech/slurring",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180569,
        "question":  "Name a place older women go to find young men.",
        "answers":  [
                        {
                            "text":  "bar/nightclub",
                            "points":  72
                        },
                        {
                            "text":  "gym",
                            "points":  11
                        },
                        {
                            "text":  "online/cougar app",
                            "points":  5
                        },
                        {
                            "text":  "school/prom",
                            "points":  4
                        },
                        {
                            "text":  "sporting event",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180570,
        "question":  "We asked 100 men... Name something you didn't like as a little boy that you totally love now.",
        "answers":  [
                        {
                            "text":  "foods/coffee",
                            "points":  71
                        },
                        {
                            "text":  "women",
                            "points":  19
                        },
                        {
                            "text":  "bedtime/sleep",
                            "points":  2
                        },
                        {
                            "text":  "sports/golf",
                            "points":  2
                        },
                        {
                            "text":  "spankings",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180571,
        "question":  "Name a way you might be able to tell a man is married just by looking at him.",
        "answers":  [
                        {
                            "text":  "ring/tan line",
                            "points":  70
                        },
                        {
                            "text":  "sad/tired/defeated",
                            "points":  12
                        },
                        {
                            "text":  "won't flirt/ogle",
                            "points":  7
                        },
                        {
                            "text":  "clothes/ironed",
                            "points":  4
                        },
                        {
                            "text":  "belly/dad bod",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180572,
        "question":  "We asked 100 married men... What do you wish your wife would wear more often?",
        "answers":  [
                        {
                            "text":  "lingerie/crotchless",
                            "points":  52
                        },
                        {
                            "text":  "nothing/a smile",
                            "points":  18
                        },
                        {
                            "text":  "dress/ball gown",
                            "points":  11
                        },
                        {
                            "text":  "bikini",
                            "points":  10
                        },
                        {
                            "text":  "makeup",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180573,
        "question":  "We asked 100 married men... In your nightmares, what is your mother-in-law wearing?",
        "answers":  [
                        {
                            "text":  "nothing/a smile",
                            "points":  49
                        },
                        {
                            "text":  "bikini",
                            "points":  19
                        },
                        {
                            "text":  "butt floss/lingerie",
                            "points":  19
                        },
                        {
                            "text":  "tight jeans",
                            "points":  5
                        },
                        {
                            "text":  "sexy costume/clown",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180574,
        "question":  "If a party is beginning to look like a flop, it's time to bring out the what?",
        "answers":  [
                        {
                            "text":  "booze/shots",
                            "points":  47
                        },
                        {
                            "text":  "music/karaoke",
                            "points":  18
                        },
                        {
                            "text":  "games/twister",
                            "points":  16
                        },
                        {
                            "text":  "stripper",
                            "points":  12
                        },
                        {
                            "text":  "food",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180575,
        "question":  "Name something a dog does to a bone that a woman might try to do to her husband.",
        "answers":  [
                        {
                            "text":  "bury him",
                            "points":  34
                        },
                        {
                            "text":  "lick him",
                            "points":  28
                        },
                        {
                            "text":  "bite/chew/swallow",
                            "points":  28
                        },
                        {
                            "text":  "hide him",
                            "points":  4
                        },
                        {
                            "text":  "destroy/shred him",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180576,
        "question":  "We asked 100 married men... Name a place you'd have your mother-in-law's name tattooed.",
        "answers":  [
                        {
                            "text":  "butt/down crack",
                            "points":  46
                        },
                        {
                            "text":  "foot/sole",
                            "points":  36
                        },
                        {
                            "text":  "ankle/leg",
                            "points":  6
                        },
                        {
                            "text":  "arm/bicep",
                            "points":  4
                        },
                        {
                            "text":  "on father-in-law",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180577,
        "question":  "Name something a woman hopes isn't in her man's moustache.",
        "answers":  [
                        {
                            "text":  "food/mayo",
                            "points":  68
                        },
                        {
                            "text":  "boogers/snot",
                            "points":  13
                        },
                        {
                            "text":  "bugs/crabs",
                            "points":  9
                        },
                        {
                            "text":  "dirty ho's lipstick",
                            "points":  2
                        },
                        {
                            "text":  "fuzz",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180578,
        "question":  "We asked 100 single men... Name something you've lied more than once about on a first date.",
        "answers":  [
                        {
                            "text":  "job/rich bigwig",
                            "points":  58
                        },
                        {
                            "text":  "she looks great",
                            "points":  11
                        },
                        {
                            "text":  "my age/over 18",
                            "points":  11
                        },
                        {
                            "text":  "my exes/how many",
                            "points":  8
                        },
                        {
                            "text":  "she's fun/fascinat'g",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  180579,
        "question":  "We asked 100 married women... Tell me a way you know your husband is lying.",
        "answers":  [
                        {
                            "text":  "no eye contact",
                            "points":  55
                        },
                        {
                            "text":  "not answer question",
                            "points":  16
                        },
                        {
                            "text":  "laughs/smirks",
                            "points":  13
                        },
                        {
                            "text":  "gets mad",
                            "points":  5
                        },
                        {
                            "text":  "blinks a lot",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180580,
        "question":  "Name one thing a fireman's wife asks him to wear in the bedroom to heat things up.",
        "answers":  [
                        {
                            "text":  "helmet/hat",
                            "points":  54
                        },
                        {
                            "text":  "uniform",
                            "points":  16
                        },
                        {
                            "text":  "his hose",
                            "points":  13
                        },
                        {
                            "text":  "boots",
                            "points":  7
                        },
                        {
                            "text":  "lingerie/thong",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180581,
        "question":  "Name something an indoor cat hates watching the outdoor cats chase while he sits in the window.",
        "answers":  [
                        {
                            "text":  "birds",
                            "points":  50
                        },
                        {
                            "text":  "mice/rats",
                            "points":  24
                        },
                        {
                            "text":  "squirrels",
                            "points":  15
                        },
                        {
                            "text":  "weak dogs",
                            "points":  3
                        },
                        {
                            "text":  "cats/hot kitties",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180582,
        "question":  "Name something a man might have at his \"just got out of jail\" party.",
        "answers":  [
                        {
                            "text":  "beer/booze",
                            "points":  48
                        },
                        {
                            "text":  "wild women/sex",
                            "points":  32
                        },
                        {
                            "text":  "food/steak",
                            "points":  8
                        },
                        {
                            "text":  "dank weed",
                            "points":  3
                        },
                        {
                            "text":  "cop/parole officer",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180583,
        "question":  "We asked 100 single men... Name something a date might do a lot of that tells you she's a little psycho.",
        "answers":  [
                        {
                            "text":  "talk/about murder",
                            "points":  48
                        },
                        {
                            "text":  "jealous/possessive",
                            "points":  28
                        },
                        {
                            "text":  "yell at me",
                            "points":  11
                        },
                        {
                            "text":  "bondage/tie me up",
                            "points":  4
                        },
                        {
                            "text":  "twitch",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180584,
        "question":  "Name something at a pet store a wife might buy her husband when he acts like a dog.",
        "answers":  [
                        {
                            "text":  "collar/shock collar",
                            "points":  46
                        },
                        {
                            "text":  "leash",
                            "points":  23
                        },
                        {
                            "text":  "bone",
                            "points":  16
                        },
                        {
                            "text":  "muzzle",
                            "points":  6
                        },
                        {
                            "text":  "a doghouse",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180585,
        "question":  "It's hot in hell. Name something that probably sells really well there.",
        "answers":  [
                        {
                            "text":  "ice/water",
                            "points":  40
                        },
                        {
                            "text":  "ice cream/popsicles",
                            "points":  32
                        },
                        {
                            "text":  "fan/a.c.",
                            "points":  17
                        },
                        {
                            "text":  "lemonade",
                            "points":  3
                        },
                        {
                            "text":  "bathing suits",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180586,
        "question":  "We asked 100 married men... If there was a divorce survival kit, what might be in it?",
        "answers":  [
                        {
                            "text":  "cash/secret acct.",
                            "points":  31
                        },
                        {
                            "text":  "booze",
                            "points":  31
                        },
                        {
                            "text":  "hotter, nicer babe",
                            "points":  17
                        },
                        {
                            "text":  "blow-up doll",
                            "points":  9
                        },
                        {
                            "text":  "a good lawyer",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  180587,
        "question":  "Tell me a part of a woman's body that might be bigger than a man's.",
        "answers":  [
                        {
                            "text":  "glad of milk & honey",
                            "points":  63
                        },
                        {
                            "text":  "bowl'g ball booty",
                            "points":  22
                        },
                        {
                            "text":  "her mouth",
                            "points":  3
                        },
                        {
                            "text":  "her hips",
                            "points":  3
                        },
                        {
                            "text":  "her brain",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180588,
        "question":  "Name something of her husband's a wife goes through after he goes to sleep.",
        "answers":  [
                        {
                            "text":  "his wallet",
                            "points":  53
                        },
                        {
                            "text":  "his cell phone",
                            "points":  19
                        },
                        {
                            "text":  "his pockets/clothes",
                            "points":  14
                        },
                        {
                            "text":  "his snoring",
                            "points":  4
                        },
                        {
                            "text":  "his computer",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180589,
        "question":  "Name something you'd hate to see a chef wipe on his apron.",
        "answers":  [
                        {
                            "text":  "his nose/boogers",
                            "points":  50
                        },
                        {
                            "text":  "blood",
                            "points":  25
                        },
                        {
                            "text":  "butt/dingleberry",
                            "points":  9
                        },
                        {
                            "text":  "knife/utensil",
                            "points":  6
                        },
                        {
                            "text":  "his hands",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180590,
        "question":  "Grandpa didn't intentionally stand his date up -- he just couldn't remember what?",
        "answers":  [
                        {
                            "text":  "the day/time",
                            "points":  48
                        },
                        {
                            "text":  "place/her address",
                            "points":  21
                        },
                        {
                            "text":  "he had a date",
                            "points":  13
                        },
                        {
                            "text":  "who she was/name",
                            "points":  9
                        },
                        {
                            "text":  "where car/keys were",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180591,
        "question":  "Name something some people spit on when they talk.",
        "answers":  [
                        {
                            "text":  "other people",
                            "points":  46
                        },
                        {
                            "text":  "ground/floor",
                            "points":  28
                        },
                        {
                            "text":  "food/table",
                            "points":  7
                        },
                        {
                            "text":  "selves/own hands",
                            "points":  6
                        },
                        {
                            "text":  "cell phone",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  180592,
        "question":  "We asked 100 mothers... Name something you see in your teenager's room that makes you sorry you looked.",
        "answers":  [
                        {
                            "text":  "dirty clothes",
                            "points":  43
                        },
                        {
                            "text":  "willy wrap/birth ctl.",
                            "points":  26
                        },
                        {
                            "text":  "doobie/drugs",
                            "points":  12
                        },
                        {
                            "text":  "porn",
                            "points":  8
                        },
                        {
                            "text":  "used dishes",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180593,
        "question":  "We asked 100 married women... When you aren't in the mood, what do you wear because you know it would turn your husband off?",
        "answers":  [
                        {
                            "text":  "flannel gown/pjs",
                            "points":  42
                        },
                        {
                            "text":  "sweats",
                            "points":  22
                        },
                        {
                            "text":  "granny panties",
                            "points":  21
                        },
                        {
                            "text":  "cold cream",
                            "points":  5
                        },
                        {
                            "text":  "leg warmers",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180594,
        "question":  "Name something that might be called a nail-biter.",
        "answers":  [
                        {
                            "text":  "movie/tv/book",
                            "points":  37
                        },
                        {
                            "text":  "sporting event",
                            "points":  36
                        },
                        {
                            "text":  "human/foot fetishist",
                            "points":  13
                        },
                        {
                            "text":  "test/result",
                            "points":  4
                        },
                        {
                            "text":  "roller coaster",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180595,
        "question":  "What do you think of when you hear the word \"whiz\"?",
        "answers":  [
                        {
                            "text":  "joy of urination",
                            "points":  30
                        },
                        {
                            "text":  "wizard of oz/wiz",
                            "points":  24
                        },
                        {
                            "text":  "genius/whiz kid",
                            "points":  23
                        },
                        {
                            "text":  "cheez whiz",
                            "points":  13
                        },
                        {
                            "text":  "gee-whiz",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180596,
        "question":  "Name a slang word for a person's mouth.",
        "answers":  [
                        {
                            "text":  "piehole/hole",
                            "points":  49
                        },
                        {
                            "text":  "trap",
                            "points":  24
                        },
                        {
                            "text":  "yapper/yap",
                            "points":  10
                        },
                        {
                            "text":  "kisser",
                            "points":  6
                        },
                        {
                            "text":  "puss",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180597,
        "question":  "Name something people do in the mud.",
        "answers":  [
                        {
                            "text":  "wrestle/fight",
                            "points":  48
                        },
                        {
                            "text":  "play/roll/jump",
                            "points":  24
                        },
                        {
                            "text":  "drive/atv",
                            "points":  8
                        },
                        {
                            "text":  "get stuck/sink",
                            "points":  7
                        },
                        {
                            "text":  "bathe",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180598,
        "question":  "Fill in the blank: At a wild office party, they might play \"pin the tail on the\" what?",
        "answers":  [
                        {
                            "text":  "boss/owner",
                            "points":  43
                        },
                        {
                            "text":  "assistant",
                            "points":  21
                        },
                        {
                            "text":  "donkey",
                            "points":  15
                        },
                        {
                            "text":  "stripper",
                            "points":  10
                        },
                        {
                            "text":  "intern",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180599,
        "question":  "We asked 100 single women... Fill in the blank: I'd like to run into my ex-boyfriend with a what?",
        "answers":  [
                        {
                            "text":  "car/mack truck",
                            "points":  48
                        },
                        {
                            "text":  "hot new hunk",
                            "points":  23
                        },
                        {
                            "text":  "pitchfork",
                            "points":  8
                        },
                        {
                            "text":  "bus",
                            "points":  7
                        },
                        {
                            "text":  "snowplow",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180600,
        "question":  "Fill in the blank: Tarzan dumped Jane after he found ______ in the treehouse.",
        "answers":  [
                        {
                            "text":  "8 men/female lover",
                            "points":  44
                        },
                        {
                            "text":  "cheeta/happy ape",
                            "points":  26
                        },
                        {
                            "text":  "toy/banana vibrator",
                            "points":  13
                        },
                        {
                            "text":  "man's loincloth/leaf",
                            "points":  4
                        },
                        {
                            "text":  "condoms",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180601,
        "question":  "We asked 100 married men... You used to drive your wife wild. Now where do you drive her?",
        "answers":  [
                        {
                            "text":  "store/mall",
                            "points":  43
                        },
                        {
                            "text":  "crazy/loony bin",
                            "points":  33
                        },
                        {
                            "text":  "to drink/the bar",
                            "points":  7
                        },
                        {
                            "text":  "doctor/hospital",
                            "points":  5
                        },
                        {
                            "text":  "to bed/sleep",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180602,
        "question":  "Name something you wouldn't have done at work if you'd known the boss was standing behind you.",
        "answers":  [
                        {
                            "text":  "go online/porn",
                            "points":  39
                        },
                        {
                            "text":  "talk about/mock boss",
                            "points":  31
                        },
                        {
                            "text":  "call/text",
                            "points":  11
                        },
                        {
                            "text":  "fart/on their desk",
                            "points":  7
                        },
                        {
                            "text":  "cuss/dirty joke",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180603,
        "question":  "Name someplace a man might take his son that would get them both in trouble with mom.",
        "answers":  [
                        {
                            "text":  "strip joint",
                            "points":  51
                        },
                        {
                            "text":  "bar/nightclub",
                            "points":  30
                        },
                        {
                            "text":  "ho house",
                            "points":  5
                        },
                        {
                            "text":  "hooters",
                            "points":  2
                        },
                        {
                            "text":  "r-rated/porn flick",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180604,
        "question":  "Name something your dog does when \"Family Feud\" comes on TV.",
        "answers":  [
                        {
                            "text":  "barks/howls",
                            "points":  47
                        },
                        {
                            "text":  "sleeps",
                            "points":  23
                        },
                        {
                            "text":  "hides/leaves room",
                            "points":  10
                        },
                        {
                            "text":  "eats",
                            "points":  5
                        },
                        {
                            "text":  "watches it",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180605,
        "question":  "In which U.S. state would you find the most potheads?",
        "answers":  [
                        {
                            "text":  "colorado",
                            "points":  44
                        },
                        {
                            "text":  "california",
                            "points":  34
                        },
                        {
                            "text":  "oregon",
                            "points":  6
                        },
                        {
                            "text":  "arizona",
                            "points":  3
                        },
                        {
                            "text":  "washington",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180606,
        "question":  "What would you do if you saw your neighbor was growing marijuana in his garden?",
        "answers":  [
                        {
                            "text":  "get some/smoke it",
                            "points":  34
                        },
                        {
                            "text":  "nothing/ignore",
                            "points":  29
                        },
                        {
                            "text":  "call cops/dea",
                            "points":  20
                        },
                        {
                            "text":  "help tend garden",
                            "points":  3
                        },
                        {
                            "text":  "laugh/grin",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180607,
        "question":  "After the divorce, name something specific a man might use pictures of his ex-wife for.",
        "answers":  [
                        {
                            "text":  "target pract./darts",
                            "points":  50
                        },
                        {
                            "text":  "fire/kindling",
                            "points":  17
                        },
                        {
                            "text":  "bribe/blackmail",
                            "points":  12
                        },
                        {
                            "text":  "toilet paper",
                            "points":  5
                        },
                        {
                            "text":  "put online/porn site",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180608,
        "question":  "We asked 100 women... Name a way you like your men and your burgers.",
        "answers":  [
                        {
                            "text":  "hot",
                            "points":  35
                        },
                        {
                            "text":  "well-done",
                            "points":  18
                        },
                        {
                            "text":  "beefy/thick",
                            "points":  16
                        },
                        {
                            "text":  "juicy",
                            "points":  15
                        },
                        {
                            "text":  "lean",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180609,
        "question":  "Name something specific a bald guy might do if he woke up with a full head of hair.",
        "answers":  [
                        {
                            "text":  "yell/cry/jump 4 joy",
                            "points":  56
                        },
                        {
                            "text":  "comb/style it",
                            "points":  16
                        },
                        {
                            "text":  "feel/pull it",
                            "points":  6
                        },
                        {
                            "text":  "stare in mirror",
                            "points":  5
                        },
                        {
                            "text":  "haircut/shave it",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180610,
        "question":  "Name something a mugger would hate to discover about you when he tried to mug you.",
        "answers":  [
                        {
                            "text":  "don't have money",
                            "points":  39
                        },
                        {
                            "text":  "pro fighter/judo",
                            "points":  20
                        },
                        {
                            "text":  "have a gun",
                            "points":  19
                        },
                        {
                            "text":  "i'm a cop",
                            "points":  5
                        },
                        {
                            "text":  "sick/with ebola",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180611,
        "question":  "We asked 100 men... Name a special occasion when you wear your best pair of underwear.",
        "answers":  [
                        {
                            "text":  "date/hot hookup",
                            "points":  37
                        },
                        {
                            "text":  "surgery/dr. appt.",
                            "points":  23
                        },
                        {
                            "text":  "anniversary",
                            "points":  12
                        },
                        {
                            "text":  "wedding",
                            "points":  10
                        },
                        {
                            "text":  "birthday",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180612,
        "question":  "Name a flavor of Life Saver that would make a sexy name for a stripper.",
        "answers":  [
                        {
                            "text":  "wild cherry",
                            "points":  63
                        },
                        {
                            "text":  "butter rum/scotch",
                            "points":  9
                        },
                        {
                            "text":  "pep o mint",
                            "points":  7
                        },
                        {
                            "text":  "strawberry",
                            "points":  3
                        },
                        {
                            "text":  "raspberry",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180613,
        "question":  "Fill in the blank: Grandma said, \"When I need a good laugh, I hide grandpa's\" what?",
        "answers":  [
                        {
                            "text":  "dentures",
                            "points":  55
                        },
                        {
                            "text":  "glasses",
                            "points":  14
                        },
                        {
                            "text":  "clothes/slippers",
                            "points":  8
                        },
                        {
                            "text":  "remote control",
                            "points":  4
                        },
                        {
                            "text":  "cane/walker",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180614,
        "question":  "Name a place where three really is a crowd.",
        "answers":  [
                        {
                            "text":  "bed/bedroom",
                            "points":  50
                        },
                        {
                            "text":  "on a date",
                            "points":  15
                        },
                        {
                            "text":  "bathroom/shower",
                            "points":  8
                        },
                        {
                            "text":  "car/front seat",
                            "points":  7
                        },
                        {
                            "text":  "theme park/ride",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180615,
        "question":  "We asked 100 men... Name something you do in just your underwear.",
        "answers":  [
                        {
                            "text":  "sleep",
                            "points":  33
                        },
                        {
                            "text":  "watch tv",
                            "points":  23
                        },
                        {
                            "text":  "work out/dance",
                            "points":  12
                        },
                        {
                            "text":  "strut around",
                            "points":  11
                        },
                        {
                            "text":  "clean/laundry",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180616,
        "question":  "We asked 100 men... Name something a bossy woman insists on doing her way.",
        "answers":  [
                        {
                            "text":  "cleaning/dishes",
                            "points":  33
                        },
                        {
                            "text":  "cooking",
                            "points":  15
                        },
                        {
                            "text":  "driving/directions",
                            "points":  15
                        },
                        {
                            "text":  "decorating",
                            "points":  12
                        },
                        {
                            "text":  "shopping",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  180617,
        "question":  "Tell me a way that a night in jail is different from a night in a nice hotel.",
        "answers":  [
                        {
                            "text":  "bed/thread count",
                            "points":  31
                        },
                        {
                            "text":  "inmates/watch me poo",
                            "points":  22
                        },
                        {
                            "text":  "can't leave jail",
                            "points":  13
                        },
                        {
                            "text":  "free room",
                            "points":  10
                        },
                        {
                            "text":  "the food",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  180618,
        "question":  "Name a question parents ask their daughter when she tells them she's getting married.",
        "answers":  [
                        {
                            "text":  "his job/income?",
                            "points":  24
                        },
                        {
                            "text":  "you preggers?",
                            "points":  19
                        },
                        {
                            "text":  "you sure?",
                            "points":  14
                        },
                        {
                            "text":  "when?/do u move out?",
                            "points":  14
                        },
                        {
                            "text":  "you love him?",
                            "points":  13
                        }
                    ]
    },
    {
        "id":  180619,
        "question":  "What would you do at a fancy restaurant if your credit card was declined?",
        "answers":  [
                        {
                            "text":  "run/dash",
                            "points":  20
                        },
                        {
                            "text":  "use other card",
                            "points":  20
                        },
                        {
                            "text":  "pay cash/hit atm",
                            "points":  18
                        },
                        {
                            "text":  "cry/embarrassed",
                            "points":  16
                        },
                        {
                            "text":  "dishes/work",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  180620,
        "question":  "We asked 100 women... Name something you don't like to see your man put in his mouth.",
        "answers":  [
                        {
                            "text":  "cig/tobacco",
                            "points":  41
                        },
                        {
                            "text":  "food/junk food",
                            "points":  17
                        },
                        {
                            "text":  "his fingers/nails",
                            "points":  16
                        },
                        {
                            "text":  "my toes/his toes",
                            "points":  5
                        },
                        {
                            "text":  "a woman/her tongue",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180621,
        "question":  "We asked 100 women... Fill in the blank: I'd never marry a man who has a big collection of what?",
        "answers":  [
                        {
                            "text":  "plushies/toys",
                            "points":  30
                        },
                        {
                            "text":  "porn/dirty mags",
                            "points":  24
                        },
                        {
                            "text":  "guns",
                            "points":  12
                        },
                        {
                            "text":  "critters/taxidermy",
                            "points":  12
                        },
                        {
                            "text":  "wigs",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180622,
        "question":  "Give me a word that rhymes with \"rapper.\"",
        "answers":  [
                        {
                            "text":  "dapper",
                            "points":  29
                        },
                        {
                            "text":  "tapper",
                            "points":  18
                        },
                        {
                            "text":  "crapper",
                            "points":  15
                        },
                        {
                            "text":  "trapper",
                            "points":  13
                        },
                        {
                            "text":  "napper",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  180623,
        "question":  "Fill in the blank: Pack of what?",
        "answers":  [
                        {
                            "text":  "wolves",
                            "points":  42
                        },
                        {
                            "text":  "gum",
                            "points":  17
                        },
                        {
                            "text":  "cigs/smokes",
                            "points":  12
                        },
                        {
                            "text":  "cards",
                            "points":  5
                        },
                        {
                            "text":  "lies",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180624,
        "question":  "We asked 100 women... Name the last place you'd expect to find true love.",
        "answers":  [
                        {
                            "text":  "bar/nightclub",
                            "points":  50
                        },
                        {
                            "text":  "work",
                            "points":  11
                        },
                        {
                            "text":  "prison",
                            "points":  9
                        },
                        {
                            "text":  "online",
                            "points":  7
                        },
                        {
                            "text":  "gas station",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180625,
        "question":  "Name something in your bedroom that would be weird if it glowed in the dark.",
        "answers":  [
                        {
                            "text":  "bed/covers/pillow",
                            "points":  48
                        },
                        {
                            "text":  "person/mate's hoo-ha",
                            "points":  11
                        },
                        {
                            "text":  "cat/dog",
                            "points":  7
                        },
                        {
                            "text":  "vibrator",
                            "points":  7
                        },
                        {
                            "text":  "undies",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180626,
        "question":  "Name something you roll.",
        "answers":  [
                        {
                            "text":  "ball/bowling ball",
                            "points":  23
                        },
                        {
                            "text":  "dough/play-doh",
                            "points":  20
                        },
                        {
                            "text":  "joint/blunt",
                            "points":  14
                        },
                        {
                            "text":  "dice",
                            "points":  13
                        },
                        {
                            "text":  "coins",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  180627,
        "question":  "Name something you might hurt yourself riding on.",
        "answers":  [
                        {
                            "text":  "horse",
                            "points":  36
                        },
                        {
                            "text":  "bull/mechanical",
                            "points":  19
                        },
                        {
                            "text":  "motorcycle",
                            "points":  11
                        },
                        {
                            "text":  "skateboard",
                            "points":  6
                        },
                        {
                            "text":  "surfboard",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180628,
        "question":  "What do you want right this minute?",
        "answers":  [
                        {
                            "text":  "food/dessert",
                            "points":  21
                        },
                        {
                            "text":  "money/steve's",
                            "points":  17
                        },
                        {
                            "text":  "sleep",
                            "points":  16
                        },
                        {
                            "text":  "booze please!",
                            "points":  14
                        },
                        {
                            "text":  "sex/with steve",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  180629,
        "question":  "You might tell someone, \"Give me a\" what?",
        "answers":  [
                        {
                            "text":  "break",
                            "points":  42
                        },
                        {
                            "text":  "hug",
                            "points":  9
                        },
                        {
                            "text":  "kiss",
                            "points":  9
                        },
                        {
                            "text":  "minute/second",
                            "points":  8
                        },
                        {
                            "text":  "hand",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  180630,
        "question":  "Name something that follows sleeping.",
        "answers":  [
                        {
                            "text":  "sleeping beauty",
                            "points":  38
                        },
                        {
                            "text":  "sleeping bag",
                            "points":  14
                        },
                        {
                            "text":  "sleeping pill",
                            "points":  12
                        },
                        {
                            "text":  "sleep'g dog/dogs lie",
                            "points":  6
                        },
                        {
                            "text":  "waking up",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180631,
        "question":  "Give me a word that rhymes with \"clock.\"",
        "answers":  [
                        {
                            "text":  "dock",
                            "points":  30
                        },
                        {
                            "text":  "sock",
                            "points":  15
                        },
                        {
                            "text":  "block",
                            "points":  13
                        },
                        {
                            "text":  "rock",
                            "points":  11
                        },
                        {
                            "text":  "stock",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  180632,
        "question":  "Young couples make love. Older couples make what?",
        "answers":  [
                        {
                            "text":  "whoopee/love",
                            "points":  42
                        },
                        {
                            "text":  "history/memories",
                            "points":  9
                        },
                        {
                            "text":  "food/cup of tea",
                            "points":  8
                        },
                        {
                            "text":  "conversation",
                            "points":  7
                        },
                        {
                            "text":  "heirs",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  180633,
        "question":  "Name a place that's filled with people who don't want to be there.",
        "answers":  [
                        {
                            "text":  "jail/prison",
                            "points":  36
                        },
                        {
                            "text":  "hell",
                            "points":  10
                        },
                        {
                            "text":  "work/meetings",
                            "points":  10
                        },
                        {
                            "text":  "church",
                            "points":  8
                        },
                        {
                            "text":  "cemetery",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  180634,
        "question":  "Name something that's small and green.",
        "answers":  [
                        {
                            "text":  "a pea",
                            "points":  29
                        },
                        {
                            "text":  "frog/toad",
                            "points":  22
                        },
                        {
                            "text":  "plant/leaf/grass",
                            "points":  12
                        },
                        {
                            "text":  "money/dollar",
                            "points":  4
                        },
                        {
                            "text":  "a jalapeno",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180635,
        "question":  "Name a weather condition that would be a good name for a wrestler.",
        "answers":  [
                        {
                            "text":  "tornado",
                            "points":  19
                        },
                        {
                            "text":  "stormy/storm",
                            "points":  18
                        },
                        {
                            "text":  "thunder/thunderstorm",
                            "points":  16
                        },
                        {
                            "text":  "hurricane",
                            "points":  12
                        },
                        {
                            "text":  "tsunami",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  180636,
        "question":  "Fill in the blank: Blood ______.",
        "answers":  [
                        {
                            "text":  "blood bank",
                            "points":  50
                        },
                        {
                            "text":  "blood brother/sis",
                            "points":  6
                        },
                        {
                            "text":  "bloodbath",
                            "points":  5
                        },
                        {
                            "text":  "bloodsucker",
                            "points":  3
                        },
                        {
                            "text":  "bloodline",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180637,
        "question":  "Name something a wife gives a cheating husband that tells him she knows.",
        "answers":  [
                        {
                            "text":  "divorce papers",
                            "points":  30
                        },
                        {
                            "text":  "photos/video",
                            "points":  12
                        },
                        {
                            "text":  "the ho's panties",
                            "points":  11
                        },
                        {
                            "text":  "cold shoulder",
                            "points":  7
                        },
                        {
                            "text":  "a look/stare",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  180638,
        "question":  "We asked 100 married women... Tell me something your husband stopped doing so much of after you got married.",
        "answers":  [
                        {
                            "text":  "flowers/gifts",
                            "points":  19
                        },
                        {
                            "text":  "compliment'g me",
                            "points":  16
                        },
                        {
                            "text":  "housework/cook'g",
                            "points":  13
                        },
                        {
                            "text":  "exercising",
                            "points":  11
                        },
                        {
                            "text":  "manners/open'g door",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  180639,
        "question":  "A man should not tell his mother-in-law she needs a what?",
        "answers":  [
                        {
                            "text":  "facelift/surgery",
                            "points":  32
                        },
                        {
                            "text":  "man/lover",
                            "points":  10
                        },
                        {
                            "text":  "haircut/new 'do",
                            "points":  8
                        },
                        {
                            "text":  "diet plan",
                            "points":  8
                        },
                        {
                            "text":  "\"life\"",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  180640,
        "question":  "Name an animal that doesn't have much personality.",
        "answers":  [
                        {
                            "text":  "sloth",
                            "points":  31
                        },
                        {
                            "text":  "fish",
                            "points":  12
                        },
                        {
                            "text":  "turtle",
                            "points":  8
                        },
                        {
                            "text":  "slug/snail",
                            "points":  7
                        },
                        {
                            "text":  "snake",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  180641,
        "question":  "Other than sex, name an activity husbands like to do with their wives.",
        "answers":  [
                        {
                            "text":  "eat/dine out",
                            "points":  27
                        },
                        {
                            "text":  "watch tv/movie",
                            "points":  14
                        },
                        {
                            "text":  "travel/vacation",
                            "points":  9
                        },
                        {
                            "text":  "talk",
                            "points":  9
                        },
                        {
                            "text":  "dance",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  180642,
        "question":  "We asked 100 women... Name a bad habit a man has that's an automatic dealbreaker.",
        "answers":  [
                        {
                            "text":  "nose picking",
                            "points":  24
                        },
                        {
                            "text":  "smoking",
                            "points":  11
                        },
                        {
                            "text":  "cheating/ogling",
                            "points":  11
                        },
                        {
                            "text":  "spitting",
                            "points":  10
                        },
                        {
                            "text":  "fart/crop dust'g",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  180643,
        "question":  "Name something that never lasts as long as you hoped it would.",
        "answers":  [
                        {
                            "text":  "sex/my weak woody",
                            "points":  21
                        },
                        {
                            "text":  "vacation",
                            "points":  12
                        },
                        {
                            "text":  "food/ice cream",
                            "points":  12
                        },
                        {
                            "text":  "money",
                            "points":  12
                        },
                        {
                            "text":  "love/relationship",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  180644,
        "question":  "Name a place you'd go to but you wouldn't want to work there.",
        "answers":  [
                        {
                            "text":  "restaurant",
                            "points":  24
                        },
                        {
                            "text":  "store/mall",
                            "points":  19
                        },
                        {
                            "text":  "bar/nightclub",
                            "points":  7
                        },
                        {
                            "text":  "amusement park",
                            "points":  7
                        },
                        {
                            "text":  "zoo",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180645,
        "question":  "Name something we might have seen you eating when you were in kindergarten.",
        "answers":  [
                        {
                            "text":  "cookies/crackers",
                            "points":  14
                        },
                        {
                            "text":  "sandwich/pbj",
                            "points":  14
                        },
                        {
                            "text":  "paste/glue",
                            "points":  13
                        },
                        {
                            "text":  "candy",
                            "points":  12
                        },
                        {
                            "text":  "apple/fruit",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  180646,
        "question":  "Instead of the fireplace, name something a child would be surprised to see Santa come out of.",
        "answers":  [
                        {
                            "text":  "the closet",
                            "points":  15
                        },
                        {
                            "text":  "toilet bowl/bathrm.",
                            "points":  14
                        },
                        {
                            "text":  "present/box",
                            "points":  12
                        },
                        {
                            "text":  "door/front door",
                            "points":  11
                        },
                        {
                            "text":  "oven/stove",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  180647,
        "question":  "Name something of yours you regret not shopping around for before getting it.",
        "answers":  [
                        {
                            "text":  "car/truck",
                            "points":  28
                        },
                        {
                            "text":  "house/apartment",
                            "points":  8
                        },
                        {
                            "text":  "mate/crazy ex",
                            "points":  8
                        },
                        {
                            "text":  "clothes/shoes",
                            "points":  8
                        },
                        {
                            "text":  "furniture/mattress",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  180648,
        "question":  "If they made a breakfast cereal just for men, name a surprise they might put in each box.",
        "answers":  [
                        {
                            "text":  "peter parkas",
                            "points":  26
                        },
                        {
                            "text":  "beer/bottle opener",
                            "points":  10
                        },
                        {
                            "text":  "money",
                            "points":  10
                        },
                        {
                            "text":  "toy car/truck",
                            "points":  6
                        },
                        {
                            "text":  "nudie pics",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  180649,
        "question":  "When you get to heaven, who's the first famous person from history you'd want to meet?",
        "answers":  [
                        {
                            "text":  "jesus/god",
                            "points":  27
                        },
                        {
                            "text":  "abe lincoln",
                            "points":  11
                        },
                        {
                            "text":  "martin l. king, jr.",
                            "points":  9
                        },
                        {
                            "text":  "elvis",
                            "points":  5
                        },
                        {
                            "text":  "benjamin franklin",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180650,
        "question":  "Give me a word that rhymes with \"crow.\"",
        "answers":  [
                        {
                            "text":  "bow",
                            "points":  14
                        },
                        {
                            "text":  "grow",
                            "points":  13
                        },
                        {
                            "text":  "mow",
                            "points":  11
                        },
                        {
                            "text":  "row",
                            "points":  10
                        },
                        {
                            "text":  "blow",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  180651,
        "question":  "Name something of yours you'd say you're in love with.",
        "answers":  [
                        {
                            "text":  "my pets",
                            "points":  19
                        },
                        {
                            "text":  "my car/truck",
                            "points":  11
                        },
                        {
                            "text":  "my body/mind",
                            "points":  9
                        },
                        {
                            "text":  "my computer/mac",
                            "points":  8
                        },
                        {
                            "text":  "my spouse/mate",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  180652,
        "question":  "Fill in the blank: Thank ______.",
        "answers":  [
                        {
                            "text":  "thank you",
                            "points":  60
                        },
                        {
                            "text":  "thank god/the lord",
                            "points":  27
                        },
                        {
                            "text":  "thank goodness",
                            "points":  8
                        },
                        {
                            "text":  "thank heaven",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180653,
        "question":  "Fill in the blank: It would be weird if a guy named his ______ after his mother.",
        "answers":  [
                        {
                            "text":  "dog/pet",
                            "points":  48
                        },
                        {
                            "text":  "his \"member\"",
                            "points":  38
                        },
                        {
                            "text":  "car/truck",
                            "points":  10
                        },
                        {
                            "text":  "son",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180654,
        "question":  "We asked 100 single women... Fill in the blank: I wish I had the key to my boyfriend's what?",
        "answers":  [
                        {
                            "text":  "house/apartment",
                            "points":  39
                        },
                        {
                            "text":  "car",
                            "points":  34
                        },
                        {
                            "text":  "heart",
                            "points":  19
                        },
                        {
                            "text":  "safe",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  180655,
        "question":  "The Jolly Green Giant's son isn't very smart. He has a brain that's the size of what vegetable?",
        "answers":  [
                        {
                            "text":  "pea",
                            "points":  92
                        },
                        {
                            "text":  "bean",
                            "points":  3
                        },
                        {
                            "text":  "corn kernel",
                            "points":  2
                        },
                        {
                            "text":  "broccoli floret",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180656,
        "question":  "Name something you want to be hot but not too hot.",
        "answers":  [
                        {
                            "text":  "food/drink",
                            "points":  89
                        },
                        {
                            "text":  "my boo",
                            "points":  5
                        },
                        {
                            "text":  "the weather",
                            "points":  3
                        },
                        {
                            "text":  "a bath",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180657,
        "question":  "Fill in the blank: Police dogs are trained to recognize the smell of what?",
        "answers":  [
                        {
                            "text":  "drugs/pot",
                            "points":  88
                        },
                        {
                            "text":  "fear",
                            "points":  5
                        },
                        {
                            "text":  "blood traces",
                            "points":  3
                        },
                        {
                            "text":  "person/criminal",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180658,
        "question":  "Name something you wear two of that in strip poker, you'd take one off at a time.",
        "answers":  [
                        {
                            "text":  "socks",
                            "points":  86
                        },
                        {
                            "text":  "earrings",
                            "points":  5
                        },
                        {
                            "text":  "gloves",
                            "points":  4
                        },
                        {
                            "text":  "shirt/undershirt",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180659,
        "question":  "Name something you might like to have two of on your bed.",
        "answers":  [
                        {
                            "text":  "pillows",
                            "points":  77
                        },
                        {
                            "text":  "covers/sheets",
                            "points":  11
                        },
                        {
                            "text":  "people/nude swedes",
                            "points":  8
                        },
                        {
                            "text":  "pets/great danes",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180660,
        "question":  "Name something kids just love to jump on.",
        "answers":  [
                        {
                            "text":  "bed",
                            "points":  71
                        },
                        {
                            "text":  "trampoline",
                            "points":  20
                        },
                        {
                            "text":  "couch",
                            "points":  5
                        },
                        {
                            "text":  "pile of leaves",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180661,
        "question":  "Name something in your refrigerator that you should thank a cow for.",
        "answers":  [
                        {
                            "text":  "milk",
                            "points":  68
                        },
                        {
                            "text":  "cheese",
                            "points":  19
                        },
                        {
                            "text":  "steak/hamburger",
                            "points":  8
                        },
                        {
                            "text":  "butter",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180662,
        "question":  "Fill in the blank: I got my ______ stuck in a beer bottle.",
        "answers":  [
                        {
                            "text":  "finger/thumb",
                            "points":  66
                        },
                        {
                            "text":  "tongue",
                            "points":  24
                        },
                        {
                            "text":  "dingus khan",
                            "points":  6
                        },
                        {
                            "text":  "lime",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180663,
        "question":  "We asked 100 married women... Fill in the blank: I'd kill my husband if he took me to a strip joint to celebrate what?",
        "answers":  [
                        {
                            "text":  "our anniversary",
                            "points":  64
                        },
                        {
                            "text":  "my birthday",
                            "points":  29
                        },
                        {
                            "text":  "anything",
                            "points":  4
                        },
                        {
                            "text":  "stripper/ho's b-day",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180664,
        "question":  "Name something specific that's a hassle to replace when you lose your wallet.",
        "answers":  [
                        {
                            "text":  "license/id",
                            "points":  62
                        },
                        {
                            "text":  "credit/debit card",
                            "points":  27
                        },
                        {
                            "text":  "soc. security card",
                            "points":  7
                        },
                        {
                            "text":  "cash",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180665,
        "question":  "Fill in the blank: Keep your ______ to yourself.",
        "answers":  [
                        {
                            "text":  "hands",
                            "points":  59
                        },
                        {
                            "text":  "thoughts/opinions",
                            "points":  35
                        },
                        {
                            "text":  "eyes",
                            "points":  3
                        },
                        {
                            "text":  "secrets",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180666,
        "question":  "Name an animal with long ears.",
        "answers":  [
                        {
                            "text":  "rabbit",
                            "points":  56
                        },
                        {
                            "text":  "dog",
                            "points":  18
                        },
                        {
                            "text":  "elephant",
                            "points":  14
                        },
                        {
                            "text":  "donkey/mule",
                            "points":  11
                        }
                    ]
    },
    {
        "id":  180667,
        "question":  "Name something a caveman wanted that he probably had a specific grunt for.",
        "answers":  [
                        {
                            "text":  "babe/cave booty",
                            "points":  52
                        },
                        {
                            "text":  "food",
                            "points":  42
                        },
                        {
                            "text":  "fire",
                            "points":  3
                        },
                        {
                            "text":  "rock",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180668,
        "question":  "We asked 100 women... Name something a man brings on a dinner date that makes you think he's cheap.",
        "answers":  [
                        {
                            "text":  "coupons",
                            "points":  48
                        },
                        {
                            "text":  "food/dessert",
                            "points":  36
                        },
                        {
                            "text":  "calculator",
                            "points":  13
                        },
                        {
                            "text":  "cheap/fake flower",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180669,
        "question":  "Fill in the blank: ______ wreck.",
        "answers":  [
                        {
                            "text":  "train wreck",
                            "points":  45
                        },
                        {
                            "text":  "shipwreck",
                            "points":  34
                        },
                        {
                            "text":  "car wreck",
                            "points":  17
                        },
                        {
                            "text":  "nervous wreck",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180670,
        "question":  "Name a word that rhymes with \"Jay-Z.\"",
        "answers":  [
                        {
                            "text":  "lazy",
                            "points":  45
                        },
                        {
                            "text":  "hazy",
                            "points":  30
                        },
                        {
                            "text":  "crazy",
                            "points":  21
                        },
                        {
                            "text":  "daisy",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180671,
        "question":  "Name a part of your own body that you bite.",
        "answers":  [
                        {
                            "text":  "finger/nails",
                            "points":  45
                        },
                        {
                            "text":  "lips",
                            "points":  26
                        },
                        {
                            "text":  "tongue",
                            "points":  24
                        },
                        {
                            "text":  "cheek",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180672,
        "question":  "We asked 100 single women... Your date looked good on paper. But in real life, name something he did just like a fish.",
        "answers":  [
                        {
                            "text":  "drank",
                            "points":  44
                        },
                        {
                            "text":  "kissed",
                            "points":  36
                        },
                        {
                            "text":  "smelled",
                            "points":  14
                        },
                        {
                            "text":  "swam away",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180673,
        "question":  "We asked 100 single women... Name something you'd hate to discover was missing on the morning of your wedding.",
        "answers":  [
                        {
                            "text":  "my fiance",
                            "points":  36
                        },
                        {
                            "text":  "my dress",
                            "points":  32
                        },
                        {
                            "text":  "the rings",
                            "points":  28
                        },
                        {
                            "text":  "marriage license",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180674,
        "question":  "We asked 100 women... Name something you can't wait to get out of at the end of your day.",
        "answers":  [
                        {
                            "text":  "bra/duds/shoes",
                            "points":  85
                        },
                        {
                            "text":  "work/the office",
                            "points":  6
                        },
                        {
                            "text":  "doing dishes",
                            "points":  4
                        },
                        {
                            "text":  "having to cook",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180675,
        "question":  "Name an animal you think of as being black and white.",
        "answers":  [
                        {
                            "text":  "zebra",
                            "points":  82
                        },
                        {
                            "text":  "skunk",
                            "points":  7
                        },
                        {
                            "text":  "panda",
                            "points":  6
                        },
                        {
                            "text":  "penguin",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180676,
        "question":  "Tell me something you do on ice.",
        "answers":  [
                        {
                            "text":  "ice skate",
                            "points":  81
                        },
                        {
                            "text":  "slip/slide/fall",
                            "points":  11
                        },
                        {
                            "text":  "go fishing",
                            "points":  3
                        },
                        {
                            "text":  "play hockey",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180677,
        "question":  "Fill in the blank: Sponge ______.",
        "answers":  [
                        {
                            "text":  "spongebob",
                            "points":  77
                        },
                        {
                            "text":  "sponge bath",
                            "points":  15
                        },
                        {
                            "text":  "sponge mop",
                            "points":  3
                        },
                        {
                            "text":  "sponge cake",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180678,
        "question":  "Fill in the blank: Grandpa and his new young bride have lots in common. He has false teeth and she has false what?",
        "answers":  [
                        {
                            "text":  "knockers",
                            "points":  77
                        },
                        {
                            "text":  "love/feelings",
                            "points":  9
                        },
                        {
                            "text":  "eyelashes",
                            "points":  7
                        },
                        {
                            "text":  "hair/weaves",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180679,
        "question":  "We asked 100 single women... Fill in the blank: I'm looking for a calendar of hot guys holding what?",
        "answers":  [
                        {
                            "text":  "puppies/kittens",
                            "points":  77
                        },
                        {
                            "text":  "footballs",
                            "points":  9
                        },
                        {
                            "text":  "weights",
                            "points":  6
                        },
                        {
                            "text":  "tools",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  180680,
        "question":  "Tell me something that twinkles.",
        "answers":  [
                        {
                            "text":  "little star",
                            "points":  76
                        },
                        {
                            "text":  "eyes",
                            "points":  16
                        },
                        {
                            "text":  "lights",
                            "points":  4
                        },
                        {
                            "text":  "glitter",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180681,
        "question":  "Name something you might like your lover to rub on your bottom.",
        "answers":  [
                        {
                            "text":  "oil/lotion/lube",
                            "points":  75
                        },
                        {
                            "text":  "hands/bod/face",
                            "points":  19
                        },
                        {
                            "text":  "chocolate",
                            "points":  2
                        },
                        {
                            "text":  "whipped cream",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180682,
        "question":  "Name a holiday when people put a flag in the front of their house.",
        "answers":  [
                        {
                            "text":  "4th of july",
                            "points":  74
                        },
                        {
                            "text":  "memorial day",
                            "points":  11
                        },
                        {
                            "text":  "flag day",
                            "points":  10
                        },
                        {
                            "text":  "veterans day",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180683,
        "question":  "We asked 100 women... Name something you might like a man to do in your ear.",
        "answers":  [
                        {
                            "text":  "whisper/\"do me!\"",
                            "points":  71
                        },
                        {
                            "text":  "kiss/lick it",
                            "points":  19
                        },
                        {
                            "text":  "blow in it",
                            "points":  6
                        },
                        {
                            "text":  "nothing/stay away",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180684,
        "question":  "If dogs drove cars, name something they'd see that they might try to run over.",
        "answers":  [
                        {
                            "text":  "cat",
                            "points":  71
                        },
                        {
                            "text":  "squirrel",
                            "points":  17
                        },
                        {
                            "text":  "fire hydrant",
                            "points":  6
                        },
                        {
                            "text":  "mailman",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180685,
        "question":  "Name something Tarzan taught his son how to do.",
        "answers":  [
                        {
                            "text":  "swing/climb trees",
                            "points":  70
                        },
                        {
                            "text":  "hunt/fish",
                            "points":  12
                        },
                        {
                            "text":  "pound chest/yell",
                            "points":  9
                        },
                        {
                            "text":  "swim",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  180686,
        "question":  "We asked 100 married women... Name something your husband and your dog both do at night.",
        "answers":  [
                        {
                            "text":  "sleep/snore",
                            "points":  69
                        },
                        {
                            "text":  "scratch themselves",
                            "points":  13
                        },
                        {
                            "text":  "fart",
                            "points":  10
                        },
                        {
                            "text":  "hog the bed",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  180687,
        "question":  "Name something that rhymes with \"King Kong.\"",
        "answers":  [
                        {
                            "text":  "ding-dong",
                            "points":  68
                        },
                        {
                            "text":  "ping-pong",
                            "points":  23
                        },
                        {
                            "text":  "bing bong",
                            "points":  5
                        },
                        {
                            "text":  "singsong",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180688,
        "question":  "Name something you do even though you know you're going to regret it in the morning.",
        "answers":  [
                        {
                            "text":  "drink/double fist",
                            "points":  60
                        },
                        {
                            "text":  "stay up late",
                            "points":  20
                        },
                        {
                            "text":  "eat/late/badly",
                            "points":  16
                        },
                        {
                            "text":  "gossip/lie",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180689,
        "question":  "Name a kind of bank that doesn't deal in money.",
        "answers":  [
                        {
                            "text":  "blood bank",
                            "points":  57
                        },
                        {
                            "text":  "sperm bank",
                            "points":  27
                        },
                        {
                            "text":  "food bank",
                            "points":  9
                        },
                        {
                            "text":  "riverbank",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180690,
        "question":  "Name something that women wash more often than men do.",
        "answers":  [
                        {
                            "text":  "body/hair",
                            "points":  56
                        },
                        {
                            "text":  "clothes/bras",
                            "points":  29
                        },
                        {
                            "text":  "bedsheets",
                            "points":  8
                        },
                        {
                            "text":  "dishes",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180691,
        "question":  "Fill in the blank: Very few people ______ their age.",
        "answers":  [
                        {
                            "text":  "act",
                            "points":  54
                        },
                        {
                            "text":  "tell/reveal",
                            "points":  19
                        },
                        {
                            "text":  "look/show",
                            "points":  16
                        },
                        {
                            "text":  "like/appreciate",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  180692,
        "question":  "Name something you turn off at the end of the day.",
        "answers":  [
                        {
                            "text":  "lights",
                            "points":  53
                        },
                        {
                            "text":  "tv",
                            "points":  33
                        },
                        {
                            "text":  "computer",
                            "points":  9
                        },
                        {
                            "text":  "me/my brain",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180693,
        "question":  "Name something starting with the letter N that men like to see women wearing.",
        "answers":  [
                        {
                            "text":  "nothing",
                            "points":  49
                        },
                        {
                            "text":  "negligee/nightie",
                            "points":  42
                        },
                        {
                            "text":  "necklace",
                            "points":  5
                        },
                        {
                            "text":  "nails/to scratch him",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180694,
        "question":  "Which one of the seven dwarfs describes you in the morning?",
        "answers":  [
                        {
                            "text":  "sleepy",
                            "points":  48
                        },
                        {
                            "text":  "grumpy",
                            "points":  38
                        },
                        {
                            "text":  "happy",
                            "points":  10
                        },
                        {
                            "text":  "dopey",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180695,
        "question":  "Name a place that's too small of a space for making whoopee.",
        "answers":  [
                        {
                            "text":  "bathroom/tub",
                            "points":  48
                        },
                        {
                            "text":  "closet/pantry",
                            "points":  32
                        },
                        {
                            "text":  "car/truck",
                            "points":  16
                        },
                        {
                            "text":  "phone booth",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180696,
        "question":  "We asked 100 women... Name a place your man better have a picture of you.",
        "answers":  [
                        {
                            "text":  "wallet",
                            "points":  43
                        },
                        {
                            "text":  "work/his desk",
                            "points":  33
                        },
                        {
                            "text":  "phone/lock screen",
                            "points":  18
                        },
                        {
                            "text":  "his heart/mind",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180697,
        "question":  "We asked 100 single women... Name something a man does that makes you feel weak in the knees.",
        "answers":  [
                        {
                            "text":  "smiles",
                            "points":  32
                        },
                        {
                            "text":  "looks into my eyes",
                            "points":  27
                        },
                        {
                            "text":  "kisses me/my neck",
                            "points":  27
                        },
                        {
                            "text":  "cooks",
                            "points":  12
                        }
                    ]
    },
    {
        "id":  180698,
        "question":  "Name an occupation that you hope isn't in a big hurry when they're working on you.",
        "answers":  [
                        {
                            "text":  "dr./dentist/surgeon",
                            "points":  86
                        },
                        {
                            "text":  "hairstylist",
                            "points":  6
                        },
                        {
                            "text":  "massage therapist",
                            "points":  3
                        },
                        {
                            "text":  "body waxer/manscaper",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180699,
        "question":  "Fill in the blank: Grocery ______.",
        "answers":  [
                        {
                            "text":  "grocery store",
                            "points":  82
                        },
                        {
                            "text":  "grocery shopping",
                            "points":  10
                        },
                        {
                            "text":  "grocery bag",
                            "points":  3
                        },
                        {
                            "text":  "grocery list",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180700,
        "question":  "When God designed women, what did he give them so men would be attracted to them?",
        "answers":  [
                        {
                            "text":  "bodacious bods",
                            "points":  80
                        },
                        {
                            "text":  "beautiful faces",
                            "points":  10
                        },
                        {
                            "text":  "brilliant brains",
                            "points":  5
                        },
                        {
                            "text":  "kind souls",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180701,
        "question":  "Name something a fireman holds onto very tightly.",
        "answers":  [
                        {
                            "text":  "hose",
                            "points":  79
                        },
                        {
                            "text":  "axe",
                            "points":  8
                        },
                        {
                            "text":  "ladder",
                            "points":  7
                        },
                        {
                            "text":  "a life/his own",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180702,
        "question":  "Give me a word that rhymes with \"mister.\"",
        "answers":  [
                        {
                            "text":  "sister",
                            "points":  78
                        },
                        {
                            "text":  "twister",
                            "points":  9
                        },
                        {
                            "text":  "blister",
                            "points":  7
                        },
                        {
                            "text":  "lister",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180703,
        "question":  "When Tarzan sends out his mating call, what might show up?",
        "answers":  [
                        {
                            "text":  "ape/monkey",
                            "points":  77
                        },
                        {
                            "text":  "jane/woman",
                            "points":  12
                        },
                        {
                            "text":  "elephant",
                            "points":  5
                        },
                        {
                            "text":  "tiger",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180704,
        "question":  "Name something in a public restroom that you try to never touch with your hands.",
        "answers":  [
                        {
                            "text":  "toilet/flusher",
                            "points":  75
                        },
                        {
                            "text":  "door/stall door",
                            "points":  17
                        },
                        {
                            "text":  "faucet/sink",
                            "points":  3
                        },
                        {
                            "text":  "the floor",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180705,
        "question":  "Fill in the blank: Tip of the ______.",
        "answers":  [
                        {
                            "text":  "iceberg",
                            "points":  72
                        },
                        {
                            "text":  "day/week",
                            "points":  9
                        },
                        {
                            "text":  "tongue",
                            "points":  9
                        },
                        {
                            "text":  "hat",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  180706,
        "question":  "Name a sound a farm animal makes.",
        "answers":  [
                        {
                            "text":  "moo",
                            "points":  71
                        },
                        {
                            "text":  "oink",
                            "points":  15
                        },
                        {
                            "text":  "neigh/whinny",
                            "points":  6
                        },
                        {
                            "text":  "baa",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180707,
        "question":  "Name something you spread on bread.",
        "answers":  [
                        {
                            "text":  "butter",
                            "points":  67
                        },
                        {
                            "text":  "peanut butter",
                            "points":  16
                        },
                        {
                            "text":  "jam/jelly",
                            "points":  10
                        },
                        {
                            "text":  "mayonnaise",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180708,
        "question":  "We asked 100 women... Name a reason you'd like to see Steve Harvey perform at Chippendales.",
        "answers":  [
                        {
                            "text":  "he'd be funny",
                            "points":  65
                        },
                        {
                            "text":  "hot bod/manaconda",
                            "points":  18
                        },
                        {
                            "text":  "cute face/stache",
                            "points":  9
                        },
                        {
                            "text":  "good dancer",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180709,
        "question":  "Name something belonging to his girlfriend that a guy in love might wear.",
        "answers":  [
                        {
                            "text":  "duds/undies/on head",
                            "points":  62
                        },
                        {
                            "text":  "jewelry/necklace",
                            "points":  31
                        },
                        {
                            "text":  "her perfume",
                            "points":  2
                        },
                        {
                            "text":  "her pic/on t-shirt",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180710,
        "question":  "Name a reason parents might be unhappy that their daughter is getting married.",
        "answers":  [
                        {
                            "text":  "don't like guy",
                            "points":  59
                        },
                        {
                            "text":  "too young",
                            "points":  19
                        },
                        {
                            "text":  "knocked up",
                            "points":  12
                        },
                        {
                            "text":  "leaving/empty nest",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  180711,
        "question":  "We asked 100 married women... When it comes to grooming, name something you wish your husband would do more often.",
        "answers":  [
                        {
                            "text":  "shave/trim unibrow",
                            "points":  59
                        },
                        {
                            "text":  "clip/clean nails",
                            "points":  17
                        },
                        {
                            "text":  "shower/wash up",
                            "points":  12
                        },
                        {
                            "text":  "brush teeth/gargle",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  180712,
        "question":  "We asked 100 women... Fill in the blank: I always look better when I take off my what?",
        "answers":  [
                        {
                            "text":  "clothes/shoes",
                            "points":  49
                        },
                        {
                            "text":  "glasses",
                            "points":  26
                        },
                        {
                            "text":  "makeup",
                            "points":  15
                        },
                        {
                            "text":  "hair/wig",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  180713,
        "question":  "We asked 100 married men... Name something of your wife's you'd like to glue together.",
        "answers":  [
                        {
                            "text":  "blabbing lips",
                            "points":  44
                        },
                        {
                            "text":  "wallet/purse/cards",
                            "points":  43
                        },
                        {
                            "text":  "sideways boobs",
                            "points":  6
                        },
                        {
                            "text":  "shoes/laces",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180714,
        "question":  "Name something people keep a bottle of on the nightstand.",
        "answers":  [
                        {
                            "text":  "water",
                            "points":  43
                        },
                        {
                            "text":  "medication",
                            "points":  32
                        },
                        {
                            "text":  "lotion/k-y",
                            "points":  20
                        },
                        {
                            "text":  "perfume",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180715,
        "question":  "What's in your wallet?",
        "answers":  [
                        {
                            "text":  "money/cash",
                            "points":  42
                        },
                        {
                            "text":  "credit/debit cards",
                            "points":  36
                        },
                        {
                            "text":  "i.d./driver's lic.",
                            "points":  16
                        },
                        {
                            "text":  "coupons",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180716,
        "question":  "We asked 100 married women... Name something specific your man sits on like a king on his throne.",
        "answers":  [
                        {
                            "text":  "the can",
                            "points":  40
                        },
                        {
                            "text":  "couch",
                            "points":  26
                        },
                        {
                            "text":  "recliner/chair",
                            "points":  26
                        },
                        {
                            "text":  "motorcycle",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180717,
        "question":  "Name something that gets squeezed from the bottom.",
        "answers":  [
                        {
                            "text":  "toothpaste",
                            "points":  87
                        },
                        {
                            "text":  "person's bootay",
                            "points":  4
                        },
                        {
                            "text":  "ketchup",
                            "points":  3
                        },
                        {
                            "text":  "lemon",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180718,
        "question":  "Name something you'd have to have lots of if you were throwing a wild party.",
        "answers":  [
                        {
                            "text":  "booze",
                            "points":  86
                        },
                        {
                            "text":  "food",
                            "points":  6
                        },
                        {
                            "text":  "condoms",
                            "points":  2
                        },
                        {
                            "text":  "people/hotties",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180719,
        "question":  "Name something on your face you wouldn't want to be too large.",
        "answers":  [
                        {
                            "text":  "nose",
                            "points":  83
                        },
                        {
                            "text":  "festering zit",
                            "points":  5
                        },
                        {
                            "text":  "wart",
                            "points":  4
                        },
                        {
                            "text":  "mouth/lips",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180720,
        "question":  "Name something a wife helps her husband put on.",
        "answers":  [
                        {
                            "text":  "clothes/tie",
                            "points":  82
                        },
                        {
                            "text":  "condom",
                            "points":  9
                        },
                        {
                            "text":  "weight",
                            "points":  3
                        },
                        {
                            "text":  "lotion",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180721,
        "question":  "Name something you wash outdoors.",
        "answers":  [
                        {
                            "text":  "car",
                            "points":  81
                        },
                        {
                            "text":  "dog",
                            "points":  11
                        },
                        {
                            "text":  "outdoor furniture",
                            "points":  2
                        },
                        {
                            "text":  "sidewalk",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180722,
        "question":  "We asked 100 married men... Fill in the blank: My marriage advice to a new husband is: Don't ever tell your wife she's what?",
        "answers":  [
                        {
                            "text":  "fat",
                            "points":  77
                        },
                        {
                            "text":  "old",
                            "points":  12
                        },
                        {
                            "text":  "ugly",
                            "points":  4
                        },
                        {
                            "text":  "mean",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180723,
        "question":  "Name something a lazy husband is doing while his wife is cleaning the house.",
        "answers":  [
                        {
                            "text":  "watch'g tv/sports",
                            "points":  65
                        },
                        {
                            "text":  "sleeping",
                            "points":  23
                        },
                        {
                            "text":  "play'g video games",
                            "points":  5
                        },
                        {
                            "text":  "surfing web",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180724,
        "question":  "We asked 100 married men... Try as you might, name something your wife says you never do right.",
        "answers":  [
                        {
                            "text":  "clean/laundry",
                            "points":  65
                        },
                        {
                            "text":  "cook",
                            "points":  16
                        },
                        {
                            "text":  "drive",
                            "points":  10
                        },
                        {
                            "text":  "talk/compliment",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180725,
        "question":  "Give me a word that rhymes with the word \"summer.\"",
        "answers":  [
                        {
                            "text":  "bummer",
                            "points":  55
                        },
                        {
                            "text":  "hummer",
                            "points":  23
                        },
                        {
                            "text":  "dumber",
                            "points":  11
                        },
                        {
                            "text":  "plumber",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  180726,
        "question":  "Name something that follows the word \"hash.\"",
        "answers":  [
                        {
                            "text":  "hash browns",
                            "points":  53
                        },
                        {
                            "text":  "hashtag",
                            "points":  37
                        },
                        {
                            "text":  "hash pipe",
                            "points":  4
                        },
                        {
                            "text":  "hash brownies",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180727,
        "question":  "We asked 100 women... It's a week before your wedding. A friend sees your fiancé making out with another woman. What do you do?",
        "answers":  [
                        {
                            "text":  "call off/bye felicia",
                            "points":  52
                        },
                        {
                            "text":  "confront him/yell",
                            "points":  37
                        },
                        {
                            "text":  "kill/beat him",
                            "points":  5
                        },
                        {
                            "text":  "kick his slut's butt",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180728,
        "question":  "Name something that rhymes with \"shook up.\"",
        "answers":  [
                        {
                            "text":  "hook up",
                            "points":  51
                        },
                        {
                            "text":  "look up",
                            "points":  26
                        },
                        {
                            "text":  "took up",
                            "points":  12
                        },
                        {
                            "text":  "cook up",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  180729,
        "question":  "Name something or someone who might be wearing a collar.",
        "answers":  [
                        {
                            "text":  "pet",
                            "points":  50
                        },
                        {
                            "text":  "priest/clergy",
                            "points":  42
                        },
                        {
                            "text":  "stripper",
                            "points":  2
                        },
                        {
                            "text":  "s&m submissive",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180730,
        "question":  "We asked 100 women... Name a reason you might not want to marry a farmer.",
        "answers":  [
                        {
                            "text":  "the work/crazy hours",
                            "points":  50
                        },
                        {
                            "text":  "dirty/manure smell",
                            "points":  34
                        },
                        {
                            "text":  "boring area/no wifi",
                            "points":  10
                        },
                        {
                            "text":  "i wanna be rich",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180731,
        "question":  "Name something Batman won't need anymore when he retires.",
        "answers":  [
                        {
                            "text":  "batsuit/mask",
                            "points":  49
                        },
                        {
                            "text":  "batmobile",
                            "points":  26
                        },
                        {
                            "text":  "robin",
                            "points":  16
                        },
                        {
                            "text":  "batcave",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180732,
        "question":  "We asked 100 married women... Name a way you know your husband is happy to see you.",
        "answers":  [
                        {
                            "text":  "smiles at me",
                            "points":  46
                        },
                        {
                            "text":  "great big hug",
                            "points":  24
                        },
                        {
                            "text":  "gives me a kiss",
                            "points":  21
                        },
                        {
                            "text":  "his eyes light up",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180733,
        "question":  "Name something of yours that the dog thinks is his.",
        "answers":  [
                        {
                            "text":  "bed",
                            "points":  45
                        },
                        {
                            "text":  "couch/chair",
                            "points":  32
                        },
                        {
                            "text":  "shoes/slippers",
                            "points":  17
                        },
                        {
                            "text":  "whole house",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180734,
        "question":  "We asked 100 married men... In a good way, name something about your wife that reminds you of your mother.",
        "answers":  [
                        {
                            "text":  "her cooking",
                            "points":  44
                        },
                        {
                            "text":  "kind/nurturing",
                            "points":  26
                        },
                        {
                            "text":  "her cleaning",
                            "points":  23
                        },
                        {
                            "text":  "hard worker",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180735,
        "question":  "Name something a dog might dream of biting into.",
        "answers":  [
                        {
                            "text":  "steak/hamburger",
                            "points":  43
                        },
                        {
                            "text":  "bone",
                            "points":  37
                        },
                        {
                            "text":  "human/leg",
                            "points":  14
                        },
                        {
                            "text":  "chicken",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180736,
        "question":  "Name something you do in the shower and no one ever has to know.",
        "answers":  [
                        {
                            "text":  "pee",
                            "points":  40
                        },
                        {
                            "text":  "sing/nickelback",
                            "points":  38
                        },
                        {
                            "text":  "sex",
                            "points":  16
                        },
                        {
                            "text":  "pick nose",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180737,
        "question":  "Give me a word that rhymes with \"yawn.\"",
        "answers":  [
                        {
                            "text":  "dawn",
                            "points":  36
                        },
                        {
                            "text":  "lawn",
                            "points":  32
                        },
                        {
                            "text":  "pawn",
                            "points":  14
                        },
                        {
                            "text":  "fawn",
                            "points":  14
                        }
                    ]
    },
    {
        "id":  180738,
        "question":  "Name a place where fights break out.",
        "answers":  [
                        {
                            "text":  "bar/nightclub",
                            "points":  80
                        },
                        {
                            "text":  "sporting event",
                            "points":  9
                        },
                        {
                            "text":  "school/playground",
                            "points":  4
                        },
                        {
                            "text":  "store/sale",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180739,
        "question":  "Fill in the blank: Pumpkin ______.",
        "answers":  [
                        {
                            "text":  "pumpkin pie",
                            "points":  80
                        },
                        {
                            "text":  "pumpkin patch",
                            "points":  9
                        },
                        {
                            "text":  "pumpkin seed",
                            "points":  3
                        },
                        {
                            "text":  "pumpkin spice",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180740,
        "question":  "Name something a man has that his mother-in-law might think is just not good enough.",
        "answers":  [
                        {
                            "text":  "job/income",
                            "points":  78
                        },
                        {
                            "text":  "car",
                            "points":  8
                        },
                        {
                            "text":  "house",
                            "points":  6
                        },
                        {
                            "text":  "face/looks",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180741,
        "question":  "When a bear is hibernating, what does he dream about?",
        "answers":  [
                        {
                            "text":  "honey/food",
                            "points":  77
                        },
                        {
                            "text":  "spring/summer",
                            "points":  10
                        },
                        {
                            "text":  "other bears/cubs",
                            "points":  6
                        },
                        {
                            "text":  "chase/kill'g people",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180742,
        "question":  "After Shaquille O'Neal was born, his parents realized he's going to need a bigger what?",
        "answers":  [
                        {
                            "text":  "crib/bed",
                            "points":  76
                        },
                        {
                            "text":  "pair of shoes",
                            "points":  11
                        },
                        {
                            "text":  "diaper",
                            "points":  6
                        },
                        {
                            "text":  "stroller",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180743,
        "question":  "Name a word that rhymes with \"yummy.\"",
        "answers":  [
                        {
                            "text":  "tummy",
                            "points":  74
                        },
                        {
                            "text":  "gummy",
                            "points":  11
                        },
                        {
                            "text":  "dummy",
                            "points":  5
                        },
                        {
                            "text":  "mummy",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180744,
        "question":  "Fill in the blank: Spider ______.",
        "answers":  [
                        {
                            "text":  "spider-man",
                            "points":  71
                        },
                        {
                            "text":  "spiderweb",
                            "points":  20
                        },
                        {
                            "text":  "spider bite",
                            "points":  2
                        },
                        {
                            "text":  "spider monkey",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180745,
        "question":  "Name an occasion when people gather to honor you.",
        "answers":  [
                        {
                            "text":  "birthday",
                            "points":  67
                        },
                        {
                            "text":  "funeral",
                            "points":  18
                        },
                        {
                            "text":  "graduation",
                            "points":  6
                        },
                        {
                            "text":  "retirement",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180746,
        "question":  "Name someone who might scold you for not seeing them often enough.",
        "answers":  [
                        {
                            "text":  "parents",
                            "points":  65
                        },
                        {
                            "text":  "grandparents",
                            "points":  17
                        },
                        {
                            "text":  "spouse/mate",
                            "points":  10
                        },
                        {
                            "text":  "dr./dentist",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180747,
        "question":  "Give me a word that rhymes with \"thunder.\"",
        "answers":  [
                        {
                            "text":  "blunder",
                            "points":  62
                        },
                        {
                            "text":  "under",
                            "points":  23
                        },
                        {
                            "text":  "plunder",
                            "points":  5
                        },
                        {
                            "text":  "wonder",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180748,
        "question":  "Fill in the blank: Pumping ______.",
        "answers":  [
                        {
                            "text":  "pumping iron",
                            "points":  61
                        },
                        {
                            "text":  "pumping gas",
                            "points":  25
                        },
                        {
                            "text":  "pumping station",
                            "points":  5
                        },
                        {
                            "text":  "pumping oil",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180749,
        "question":  "Birds catch worms. What do people catch?",
        "answers":  [
                        {
                            "text":  "colds/germs/v.d.",
                            "points":  60
                        },
                        {
                            "text":  "fish/animals",
                            "points":  29
                        },
                        {
                            "text":  "balls",
                            "points":  3
                        },
                        {
                            "text":  "people",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180750,
        "question":  "What would you do if you accidentally put a $100 bill in the church collection plate instead of a ten?",
        "answers":  [
                        {
                            "text":  "nothing/leave it",
                            "points":  60
                        },
                        {
                            "text":  "get it back/change",
                            "points":  19
                        },
                        {
                            "text":  "cry/scream/pout",
                            "points":  12
                        },
                        {
                            "text":  "less $ next time",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180751,
        "question":  "When you're sick, nothing comforts you like your mother's what?",
        "answers":  [
                        {
                            "text":  "soup/cooking",
                            "points":  58
                        },
                        {
                            "text":  "love",
                            "points":  17
                        },
                        {
                            "text":  "touch/arms/bosom",
                            "points":  15
                        },
                        {
                            "text":  "voice/humming",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180752,
        "question":  "We asked 100 men... Name something you want to do like Tom Brady.",
        "answers":  [
                        {
                            "text":  "play football/win",
                            "points":  57
                        },
                        {
                            "text":  "make money",
                            "points":  20
                        },
                        {
                            "text":  "marry a model",
                            "points":  13
                        },
                        {
                            "text":  "look like/smile",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180753,
        "question":  "Name something a man wears under his clothes to feel sexy.",
        "answers":  [
                        {
                            "text":  "undies/women's",
                            "points":  54
                        },
                        {
                            "text":  "nothing/free willy",
                            "points":  25
                        },
                        {
                            "text":  "cologne",
                            "points":  11
                        },
                        {
                            "text":  "speedo/bikini",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180754,
        "question":  "Name something a fireman might use to put out a small fire.",
        "answers":  [
                        {
                            "text":  "fire extinguisher",
                            "points":  49
                        },
                        {
                            "text":  "water/hose",
                            "points":  36
                        },
                        {
                            "text":  "blanket/towel",
                            "points":  5
                        },
                        {
                            "text":  "his pee stream",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180755,
        "question":  "Name a character who only visits when children are sleeping.",
        "answers":  [
                        {
                            "text":  "tooth fairy",
                            "points":  47
                        },
                        {
                            "text":  "santa claus",
                            "points":  34
                        },
                        {
                            "text":  "sandman",
                            "points":  10
                        },
                        {
                            "text":  "bogeyman",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180756,
        "question":  "When you get to a party, what's the first thing you check out?",
        "answers":  [
                        {
                            "text":  "people/their clothes",
                            "points":  41
                        },
                        {
                            "text":  "food/dessert",
                            "points":  26
                        },
                        {
                            "text":  "bar/drinks",
                            "points":  24
                        },
                        {
                            "text":  "the bathroom",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180757,
        "question":  "Name something people use to write their names in the snow.",
        "answers":  [
                        {
                            "text":  "stick/branch",
                            "points":  36
                        },
                        {
                            "text":  "warm yellow whiz",
                            "points":  35
                        },
                        {
                            "text":  "finger/glove",
                            "points":  22
                        },
                        {
                            "text":  "foot",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180758,
        "question":  "Name something grandma puts in her bra for safekeeping.",
        "answers":  [
                        {
                            "text":  "cash/wallet",
                            "points":  83
                        },
                        {
                            "text":  "her teeth",
                            "points":  4
                        },
                        {
                            "text":  "tissues",
                            "points":  4
                        },
                        {
                            "text":  "keys",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180759,
        "question":  "Name a place where you might be caught with your pants down.",
        "answers":  [
                        {
                            "text":  "bathroom",
                            "points":  81
                        },
                        {
                            "text":  "bedroom",
                            "points":  8
                        },
                        {
                            "text":  "store dressing room",
                            "points":  3
                        },
                        {
                            "text":  "beach/pool",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180760,
        "question":  "Tell me something Dracula's mom probably tells Dracula he has to stop doing if he wants to meet a nice girl.",
        "answers":  [
                        {
                            "text":  "bite/suck/killing",
                            "points":  77
                        },
                        {
                            "text":  "sleep days/out nites",
                            "points":  9
                        },
                        {
                            "text":  "showing/filing fangs",
                            "points":  4
                        },
                        {
                            "text":  "turn'g into a bat",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180761,
        "question":  "Name something you must have every day or you're not a happy camper.",
        "answers":  [
                        {
                            "text":  "food/beverage",
                            "points":  74
                        },
                        {
                            "text":  "sleep",
                            "points":  13
                        },
                        {
                            "text":  "shower",
                            "points":  4
                        },
                        {
                            "text":  "wifi",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180762,
        "question":  "Name something about which a man wonders, \"Where's the off button?\"",
        "answers":  [
                        {
                            "text":  "women/mom-in-law",
                            "points":  68
                        },
                        {
                            "text":  "kids/babies",
                            "points":  10
                        },
                        {
                            "text":  "vacuum",
                            "points":  9
                        },
                        {
                            "text":  "tv/remote",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  180763,
        "question":  "Name a place your parents used to tell you to be on your best behavior.",
        "answers":  [
                        {
                            "text":  "church",
                            "points":  67
                        },
                        {
                            "text":  "restaurant",
                            "points":  18
                        },
                        {
                            "text":  "relative's house",
                            "points":  5
                        },
                        {
                            "text":  "school",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180764,
        "question":  "We asked 100 women... Fill in the blank: I'd be insulted if someone mistook me for a what?",
        "answers":  [
                        {
                            "text":  "man",
                            "points":  59
                        },
                        {
                            "text":  "grandma/old lady",
                            "points":  17
                        },
                        {
                            "text":  "pregnant woman",
                            "points":  11
                        },
                        {
                            "text":  "a $2 hooker",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  180765,
        "question":  "Name something that might land on you while you're riding in a convertible.",
        "answers":  [
                        {
                            "text":  "bird poop",
                            "points":  54
                        },
                        {
                            "text":  "bug",
                            "points":  27
                        },
                        {
                            "text":  "rain",
                            "points":  9
                        },
                        {
                            "text":  "leaf",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180766,
        "question":  "When interviewing for a new job, name a question you should not start off by asking.",
        "answers":  [
                        {
                            "text":  "whatcha payin'?",
                            "points":  51
                        },
                        {
                            "text":  "vacay?",
                            "points":  37
                        },
                        {
                            "text":  "you married, shuga?",
                            "points":  3
                        },
                        {
                            "text":  "breaks/lunch?",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180767,
        "question":  "Name something that's hard for some people to grow.",
        "answers":  [
                        {
                            "text":  "hair/on face",
                            "points":  51
                        },
                        {
                            "text":  "plant/fruit/weed",
                            "points":  36
                        },
                        {
                            "text":  "their mind/vocab",
                            "points":  4
                        },
                        {
                            "text":  "savings/$$$",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180768,
        "question":  "Tell me something you flip.",
        "answers":  [
                        {
                            "text":  "pancakes",
                            "points":  49
                        },
                        {
                            "text":  "a coin",
                            "points":  31
                        },
                        {
                            "text":  "houses",
                            "points":  7
                        },
                        {
                            "text":  "burgers",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  180769,
        "question":  "Name a word that rhymes with \"song.\"",
        "answers":  [
                        {
                            "text":  "long",
                            "points":  49
                        },
                        {
                            "text":  "wrong",
                            "points":  22
                        },
                        {
                            "text":  "thong",
                            "points":  16
                        },
                        {
                            "text":  "bong",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  180770,
        "question":  "We asked 100 single women... Name a city where you think it's hard to find a nice guy.",
        "answers":  [
                        {
                            "text":  "new york",
                            "points":  44
                        },
                        {
                            "text":  "los angeles",
                            "points":  26
                        },
                        {
                            "text":  "las vegas",
                            "points":  17
                        },
                        {
                            "text":  "san francisco",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  180771,
        "question":  "On New Year's Eve, what do people vow they're going to get rid of next year?",
        "answers":  [
                        {
                            "text":  "weight/hippo booty",
                            "points":  80
                        },
                        {
                            "text":  "debt",
                            "points":  5
                        },
                        {
                            "text":  "resolutions",
                            "points":  4
                        },
                        {
                            "text":  "cigarettes",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180772,
        "question":  "Fill in the blank: Home is where your ______ is.",
        "answers":  [
                        {
                            "text":  "heart",
                            "points":  74
                        },
                        {
                            "text":  "family/mate",
                            "points":  11
                        },
                        {
                            "text":  "bed",
                            "points":  5
                        },
                        {
                            "text":  "puss/pet",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180773,
        "question":  "Name something the Big Bad Wolf would hate to discover Little Red Riding Hood was carrying in her basket.",
        "answers":  [
                        {
                            "text":  "gun",
                            "points":  73
                        },
                        {
                            "text":  "mace/pepper spray",
                            "points":  8
                        },
                        {
                            "text":  "bad food/veggies",
                            "points":  8
                        },
                        {
                            "text":  "knife",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180774,
        "question":  "The kids might call their dad \"The Closer\" because he's always telling them to close what?",
        "answers":  [
                        {
                            "text":  "door/fridge door",
                            "points":  72
                        },
                        {
                            "text":  "their mouths",
                            "points":  15
                        },
                        {
                            "text":  "zippers",
                            "points":  3
                        },
                        {
                            "text":  "drawers",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180775,
        "question":  "Name something people rush into.",
        "answers":  [
                        {
                            "text":  "love/marriage",
                            "points":  72
                        },
                        {
                            "text":  "spending/debt",
                            "points":  10
                        },
                        {
                            "text":  "having kids",
                            "points":  8
                        },
                        {
                            "text":  "job/work",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180776,
        "question":  "Tell me something a cowboy might get hit with in a saloon fight.",
        "answers":  [
                        {
                            "text":  "bottle/drink/mug",
                            "points":  68
                        },
                        {
                            "text":  "chair/stool",
                            "points":  18
                        },
                        {
                            "text":  "hand/fist",
                            "points":  4
                        },
                        {
                            "text":  "a bullet",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180777,
        "question":  "Name something that gets scooped.",
        "answers":  [
                        {
                            "text":  "ice cream",
                            "points":  64
                        },
                        {
                            "text":  "poop/kitty litter",
                            "points":  19
                        },
                        {
                            "text":  "news",
                            "points":  7
                        },
                        {
                            "text":  "snow",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180778,
        "question":  "If a pirate lost his wooden leg, name a piece of sports equipment he could use to replace it.",
        "answers":  [
                        {
                            "text":  "baseball bat",
                            "points":  64
                        },
                        {
                            "text":  "golf club",
                            "points":  15
                        },
                        {
                            "text":  "hockey stick",
                            "points":  12
                        },
                        {
                            "text":  "extreme pogo stick",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180779,
        "question":  "Fill in the blank: Here comes the ______.",
        "answers":  [
                        {
                            "text":  "bride",
                            "points":  62
                        },
                        {
                            "text":  "judge",
                            "points":  12
                        },
                        {
                            "text":  "sun",
                            "points":  10
                        },
                        {
                            "text":  "boom",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  180780,
        "question":  "Name the state you think has the most nudists living in it.",
        "answers":  [
                        {
                            "text":  "california",
                            "points":  59
                        },
                        {
                            "text":  "florida",
                            "points":  26
                        },
                        {
                            "text":  "hawaii",
                            "points":  4
                        },
                        {
                            "text":  "arizona",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180781,
        "question":  "Fill in the blank: A high-maintenance woman makes sure to never miss an appointment with her who?",
        "answers":  [
                        {
                            "text":  "hairdresser",
                            "points":  59
                        },
                        {
                            "text":  "nail tech",
                            "points":  21
                        },
                        {
                            "text":  "doc/plastic surg.",
                            "points":  9
                        },
                        {
                            "text":  "masseur",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180782,
        "question":  "Name a kind of flush.",
        "answers":  [
                        {
                            "text":  "toilet/courtesy",
                            "points":  41
                        },
                        {
                            "text":  "royal",
                            "points":  40
                        },
                        {
                            "text":  "straight",
                            "points":  9
                        },
                        {
                            "text":  "facial/blush",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180783,
        "question":  "We asked 100 married men... Name a breed of dog that reminds you of your wife.",
        "answers":  [
                        {
                            "text":  "pit bull",
                            "points":  40
                        },
                        {
                            "text":  "german shepherd",
                            "points":  33
                        },
                        {
                            "text":  "retriever/lab",
                            "points":  14
                        },
                        {
                            "text":  "poodle",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  180784,
        "question":  "Name something that might go up, up, and away.",
        "answers":  [
                        {
                            "text":  "balloon/hot air",
                            "points":  83
                        },
                        {
                            "text":  "superman",
                            "points":  5
                        },
                        {
                            "text":  "kite",
                            "points":  2
                        },
                        {
                            "text":  "rocket",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180785,
        "question":  "Name the most embarrassing place someone might ask to take a selfie with you.",
        "answers":  [
                        {
                            "text":  "bathroom/shower",
                            "points":  83
                        },
                        {
                            "text":  "bedroom/in bed",
                            "points":  5
                        },
                        {
                            "text":  "dressing room",
                            "points":  2
                        },
                        {
                            "text":  "bar/nightclub",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180786,
        "question":  "Fill in the blank: You should try to be the best ______ you can.",
        "answers":  [
                        {
                            "text":  "person",
                            "points":  75
                        },
                        {
                            "text":  "that",
                            "points":  8
                        },
                        {
                            "text":  "parent",
                            "points":  6
                        },
                        {
                            "text":  "worker/employee",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180787,
        "question":  "Name a time that people scream while having fun.",
        "answers":  [
                        {
                            "text":  "roller coaster",
                            "points":  67
                        },
                        {
                            "text":  "sporting event",
                            "points":  11
                        },
                        {
                            "text":  "horror movie",
                            "points":  9
                        },
                        {
                            "text":  "hot boink session",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180788,
        "question":  "Name something that spreads quickly.",
        "answers":  [
                        {
                            "text":  "virus/germs",
                            "points":  55
                        },
                        {
                            "text":  "gossip/rumors",
                            "points":  15
                        },
                        {
                            "text":  "butter/margarine",
                            "points":  14
                        },
                        {
                            "text":  "fire",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  180789,
        "question":  "We asked 100 married women... Name a specific punishment for men who cheat on their wives.",
        "answers":  [
                        {
                            "text":  "divorce",
                            "points":  54
                        },
                        {
                            "text":  "lose everything",
                            "points":  16
                        },
                        {
                            "text":  "dismember/castrate",
                            "points":  13
                        },
                        {
                            "text":  "\"doghouse\"",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  180790,
        "question":  "Tell me something you know about Snoop Dogg.",
        "answers":  [
                        {
                            "text":  "raps/performs",
                            "points":  49
                        },
                        {
                            "text":  "smokes weed",
                            "points":  33
                        },
                        {
                            "text":  "has braids/dreads",
                            "points":  5
                        },
                        {
                            "text":  "he's tall",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180791,
        "question":  "When mom yells \"Keep it clean,\" keep what clean?",
        "answers":  [
                        {
                            "text":  "your room",
                            "points":  45
                        },
                        {
                            "text":  "language/jokes",
                            "points":  41
                        },
                        {
                            "text":  "bathroom/toilet",
                            "points":  4
                        },
                        {
                            "text":  "your hands",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180792,
        "question":  "Name something Batman would hate to lose.",
        "answers":  [
                        {
                            "text":  "costume/cape/belt",
                            "points":  42
                        },
                        {
                            "text":  "batmobile",
                            "points":  26
                        },
                        {
                            "text":  "robin",
                            "points":  22
                        },
                        {
                            "text":  "a fight",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180793,
        "question":  "Name a place you don't like to go because it might be painful.",
        "answers":  [
                        {
                            "text":  "doc/dentist/e.r.",
                            "points":  81
                        },
                        {
                            "text":  "gym",
                            "points":  5
                        },
                        {
                            "text":  "work",
                            "points":  3
                        },
                        {
                            "text":  "cemetery/funeral",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180794,
        "question":  "Name a place where you just want to be left alone.",
        "answers":  [
                        {
                            "text":  "home/bathroom",
                            "points":  80
                        },
                        {
                            "text":  "the beach",
                            "points":  4
                        },
                        {
                            "text":  "work",
                            "points":  4
                        },
                        {
                            "text":  "church",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180795,
        "question":  "Name something that when a farmer sees you holding it, he'd say, \"That came from my cow.\"",
        "answers":  [
                        {
                            "text":  "milk",
                            "points":  75
                        },
                        {
                            "text":  "burger/steak",
                            "points":  6
                        },
                        {
                            "text":  "calf",
                            "points":  5
                        },
                        {
                            "text":  "manure",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180796,
        "question":  "Tell me a day of the year you wouldn't want to have as your birthday.",
        "answers":  [
                        {
                            "text":  "christmas",
                            "points":  74
                        },
                        {
                            "text":  "leap year day",
                            "points":  7
                        },
                        {
                            "text":  "new year's",
                            "points":  6
                        },
                        {
                            "text":  "april fools' day",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180797,
        "question":  "Name something that looks better when the lighting is dim.",
        "answers":  [
                        {
                            "text":  "person/my dates",
                            "points":  72
                        },
                        {
                            "text":  "old/messy house",
                            "points":  9
                        },
                        {
                            "text":  "tv/movies",
                            "points":  6
                        },
                        {
                            "text":  "fire/candlelight",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180798,
        "question":  "Tell me something that might be runny.",
        "answers":  [
                        {
                            "text":  "nose",
                            "points":  62
                        },
                        {
                            "text":  "eggs",
                            "points":  23
                        },
                        {
                            "text":  "chocolate thunder",
                            "points":  4
                        },
                        {
                            "text":  "gravy",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180799,
        "question":  "Name an animal a woman looks like when she gets lip implants.",
        "answers":  [
                        {
                            "text":  "ape/monkey",
                            "points":  54
                        },
                        {
                            "text":  "duck",
                            "points":  17
                        },
                        {
                            "text":  "fish",
                            "points":  17
                        },
                        {
                            "text":  "hippo",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180800,
        "question":  "Name something that might be running down your leg.",
        "answers":  [
                        {
                            "text":  "warm bubbly urine",
                            "points":  38
                        },
                        {
                            "text":  "sweat",
                            "points":  24
                        },
                        {
                            "text":  "bug/fire ant colony",
                            "points":  15
                        },
                        {
                            "text":  "water/after swim",
                            "points":  14
                        }
                    ]
    },
    {
        "id":  180801,
        "question":  "Name something a single guy might have on his shopping list.",
        "answers":  [
                        {
                            "text":  "food/frozen pizza",
                            "points":  33
                        },
                        {
                            "text":  "dink slings",
                            "points":  30
                        },
                        {
                            "text":  "beer/hooch",
                            "points":  26
                        },
                        {
                            "text":  "a date/bae",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180802,
        "question":  "Fill in the blank: The ______ of my dreams.",
        "answers":  [
                        {
                            "text":  "man/woman",
                            "points":  78
                        },
                        {
                            "text":  "vacation/trip",
                            "points":  5
                        },
                        {
                            "text":  "car",
                            "points":  4
                        },
                        {
                            "text":  "home",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180803,
        "question":  "Fill in the blank: Pickup ______.",
        "answers":  [
                        {
                            "text":  "pickup truck",
                            "points":  77
                        },
                        {
                            "text":  "pickup line",
                            "points":  9
                        },
                        {
                            "text":  "pick up milk",
                            "points":  2
                        },
                        {
                            "text":  "pickup artist",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180804,
        "question":  "Tell me something that might be padded.",
        "answers":  [
                        {
                            "text":  "bra",
                            "points":  72
                        },
                        {
                            "text":  "room/cell",
                            "points":  9
                        },
                        {
                            "text":  "bank acct./wallet",
                            "points":  6
                        },
                        {
                            "text":  "bed",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180805,
        "question":  "Tell me something you pick that can make you rich.",
        "answers":  [
                        {
                            "text":  "numbers/lotto",
                            "points":  72
                        },
                        {
                            "text":  "mined gold/jewels",
                            "points":  7
                        },
                        {
                            "text":  "spouse",
                            "points":  6
                        },
                        {
                            "text":  "stocks",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180806,
        "question":  "We asked 100 men... Name a place you go where you would prefer there be no women allowed.",
        "answers":  [
                        {
                            "text":  "bathroom/urinal",
                            "points":  69
                        },
                        {
                            "text":  "gym",
                            "points":  9
                        },
                        {
                            "text":  "strip joint",
                            "points":  8
                        },
                        {
                            "text":  "bar/nightclub",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180807,
        "question":  "Name something a dog does outdoors that you might also see a man do outdoors.",
        "answers":  [
                        {
                            "text":  "pee/launch logs",
                            "points":  67
                        },
                        {
                            "text":  "run/walk",
                            "points":  15
                        },
                        {
                            "text":  "dig holes",
                            "points":  4
                        },
                        {
                            "text":  "scratch",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180808,
        "question":  "Name a place a woman would love to see her ex-husband end up.",
        "answers":  [
                        {
                            "text":  "behind bars",
                            "points":  67
                        },
                        {
                            "text":  "grave/morgue/hell",
                            "points":  14
                        },
                        {
                            "text":  "new state/country",
                            "points":  5
                        },
                        {
                            "text":  "street/poorhouse",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180809,
        "question":  "Name an animal that bathes itself.",
        "answers":  [
                        {
                            "text":  "cat",
                            "points":  65
                        },
                        {
                            "text":  "bird/duck",
                            "points":  12
                        },
                        {
                            "text":  "elephant",
                            "points":  10
                        },
                        {
                            "text":  "dog",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180810,
        "question":  "Name a kind of colony.",
        "answers":  [
                        {
                            "text":  "ant colony",
                            "points":  59
                        },
                        {
                            "text":  "nudist colony",
                            "points":  16
                        },
                        {
                            "text":  "bee colony",
                            "points":  12
                        },
                        {
                            "text":  "penal colony",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180811,
        "question":  "Fill in the blank: Vice ______.",
        "answers":  [
                        {
                            "text":  "vice president",
                            "points":  56
                        },
                        {
                            "text":  "vice squad",
                            "points":  16
                        },
                        {
                            "text":  "vice versa",
                            "points":  14
                        },
                        {
                            "text":  "vice principal",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180812,
        "question":  "Name a quiet place you'd be surprised a brawl broke out.",
        "answers":  [
                        {
                            "text":  "church",
                            "points":  53
                        },
                        {
                            "text":  "library",
                            "points":  32
                        },
                        {
                            "text":  "home/bedroom",
                            "points":  3
                        },
                        {
                            "text":  "cemetery",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180813,
        "question":  "Name something furry in your home that the dog might mistake for competition.",
        "answers":  [
                        {
                            "text":  "animal/rat",
                            "points":  44
                        },
                        {
                            "text":  "plush toy/doll",
                            "points":  21
                        },
                        {
                            "text":  "slipper/uggs/shoe",
                            "points":  18
                        },
                        {
                            "text":  "pillow",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  180814,
        "question":  "Fill in the blank: Isn't it about time Santa Claus got a new what?",
        "answers":  [
                        {
                            "text":  "sleigh/ride",
                            "points":  42
                        },
                        {
                            "text":  "suit/hat",
                            "points":  41
                        },
                        {
                            "text":  "gig/job",
                            "points":  4
                        },
                        {
                            "text":  "reindeer",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180815,
        "question":  "Name something people say they will do when they are dead.",
        "answers":  [
                        {
                            "text":  "sleep/r.i.p.",
                            "points":  39
                        },
                        {
                            "text":  "haunt/their ex",
                            "points":  29
                        },
                        {
                            "text":  "heaven w/ god & fam",
                            "points":  18
                        },
                        {
                            "text":  "rot/decompose",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180816,
        "question":  "Name something a cowboy in the old west cleaned about once a month.",
        "answers":  [
                        {
                            "text":  "gun",
                            "points":  28
                        },
                        {
                            "text":  "himself",
                            "points":  28
                        },
                        {
                            "text":  "duds/boots/hat",
                            "points":  27
                        },
                        {
                            "text":  "saddle",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  180817,
        "question":  "Name an occupation in which you'd worry about leaks.",
        "answers":  [
                        {
                            "text":  "plumber",
                            "points":  66
                        },
                        {
                            "text":  "politics/gov't",
                            "points":  16
                        },
                        {
                            "text":  "boat captain/fish'g",
                            "points":  4
                        },
                        {
                            "text":  "gas worker",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180818,
        "question":  "Name a sport that reminds you of summer.",
        "answers":  [
                        {
                            "text":  "baseball",
                            "points":  64
                        },
                        {
                            "text":  "swimming",
                            "points":  16
                        },
                        {
                            "text":  "tennis",
                            "points":  5
                        },
                        {
                            "text":  "volleyball",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180819,
        "question":  "Name something that's a hassle to lose.",
        "answers":  [
                        {
                            "text":  "keys",
                            "points":  44
                        },
                        {
                            "text":  "wallet/$/i.d.",
                            "points":  28
                        },
                        {
                            "text":  "weight",
                            "points":  12
                        },
                        {
                            "text":  "your mind",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180820,
        "question":  "Name something kids cut.",
        "answers":  [
                        {
                            "text":  "their hair",
                            "points":  36
                        },
                        {
                            "text":  "paper",
                            "points":  35
                        },
                        {
                            "text":  "class/school",
                            "points":  12
                        },
                        {
                            "text":  "\"the cheese\"",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  180821,
        "question":  "Name something people usually find once they stop looking for it.",
        "answers":  [
                        {
                            "text":  "keys",
                            "points":  66
                        },
                        {
                            "text":  "love/romance",
                            "points":  11
                        },
                        {
                            "text":  "happiness",
                            "points":  6
                        },
                        {
                            "text":  "remote control",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180822,
        "question":  "If grandpa swears like a sailor, name a place you wouldn't want to go with him.",
        "answers":  [
                        {
                            "text":  "church",
                            "points":  64
                        },
                        {
                            "text":  "school",
                            "points":  11
                        },
                        {
                            "text":  "restaurant",
                            "points":  9
                        },
                        {
                            "text":  "movies/g-rated",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180823,
        "question":  "Name something that a woman who craves variety likes in different colors.",
        "answers":  [
                        {
                            "text":  "clothes/shoes",
                            "points":  62
                        },
                        {
                            "text":  "food/candy",
                            "points":  15
                        },
                        {
                            "text":  "purses",
                            "points":  6
                        },
                        {
                            "text":  "flowers",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180824,
        "question":  "Name something grandma turned on that she forgot to turn off.",
        "answers":  [
                        {
                            "text":  "oven/burner",
                            "points":  55
                        },
                        {
                            "text":  "lights/headlights",
                            "points":  20
                        },
                        {
                            "text":  "grandpa",
                            "points":  9
                        },
                        {
                            "text":  "tv",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180825,
        "question":  "Name something lovers might do if they wanted to be like Adam and Eve.",
        "answers":  [
                        {
                            "text":  "be nude/fig leaf",
                            "points":  63
                        },
                        {
                            "text":  "eat apples",
                            "points":  14
                        },
                        {
                            "text":  "be fruitful/multiply",
                            "points":  6
                        },
                        {
                            "text":  "garden/plant trees",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180826,
        "question":  "Name something a woman gets rid of when it no longer looks good.",
        "answers":  [
                        {
                            "text":  "clothes/shoes",
                            "points":  63
                        },
                        {
                            "text":  "her used-up man",
                            "points":  12
                        },
                        {
                            "text":  "purse",
                            "points":  6
                        },
                        {
                            "text":  "her wig",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  180827,
        "question":  "Name something a mama's boy would not do without his mother's approval.",
        "answers":  [
                        {
                            "text":  "propose/tie knot",
                            "points":  60
                        },
                        {
                            "text":  "go on a date",
                            "points":  21
                        },
                        {
                            "text":  "travel",
                            "points":  3
                        },
                        {
                            "text":  "eat/snack",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180828,
        "question":  "Fill in the blank: Swiss ______.",
        "answers":  [
                        {
                            "text":  "swiss cheese",
                            "points":  56
                        },
                        {
                            "text":  "swiss alps",
                            "points":  15
                        },
                        {
                            "text":  "swiss bank/account",
                            "points":  11
                        },
                        {
                            "text":  "swiss miss",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180829,
        "question":  "Name something you'd be shocked a doctor was afraid of.",
        "answers":  [
                        {
                            "text":  "blood",
                            "points":  45
                        },
                        {
                            "text":  "needles/shots",
                            "points":  23
                        },
                        {
                            "text":  "germs/disease",
                            "points":  11
                        },
                        {
                            "text":  "examining body",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  180830,
        "question":  "Name a word or phrase you wish you heard more often from your kids.",
        "answers":  [
                        {
                            "text":  "thank you",
                            "points":  41
                        },
                        {
                            "text":  "i love you",
                            "points":  29
                        },
                        {
                            "text":  "please",
                            "points":  9
                        },
                        {
                            "text":  "yes/yes ma'am",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  180831,
        "question":  "Name a subject a woman should bring up if she wants to scare away a boring date.",
        "answers":  [
                        {
                            "text":  "kids/preg. with #7",
                            "points":  38
                        },
                        {
                            "text":  "marriage",
                            "points":  27
                        },
                        {
                            "text":  "ill/chlamydia",
                            "points":  15
                        },
                        {
                            "text":  "her ex/homicidal",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  180832,
        "question":  "Admit it: Your neighbor has a better what?",
        "answers":  [
                        {
                            "text":  "yard/garden",
                            "points":  34
                        },
                        {
                            "text":  "car/truck",
                            "points":  23
                        },
                        {
                            "text":  "house/apartment",
                            "points":  23
                        },
                        {
                            "text":  "body/booty",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  180833,
        "question":  "Name something a person might be referring to when they say, \"I've got me a good one.\"",
        "answers":  [
                        {
                            "text":  "spouse/mate",
                            "points":  70
                        },
                        {
                            "text":  "fish",
                            "points":  11
                        },
                        {
                            "text":  "fruit/plum",
                            "points":  3
                        },
                        {
                            "text":  "car",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  180834,
        "question":  "Give me a word that starts with \"chap.\"",
        "answers":  [
                        {
                            "text":  "chapstick",
                            "points":  70
                        },
                        {
                            "text":  "chapel",
                            "points":  6
                        },
                        {
                            "text":  "chapter",
                            "points":  5
                        },
                        {
                            "text":  "chaplain",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180835,
        "question":  "We asked 100 women... Name something a girl can never have too many of.",
        "answers":  [
                        {
                            "text":  "shoes/clothes",
                            "points":  67
                        },
                        {
                            "text":  "purses",
                            "points":  10
                        },
                        {
                            "text":  "diamonds/jewelry",
                            "points":  6
                        },
                        {
                            "text":  "friends",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180836,
        "question":  "Tell me something you have to warm up to get it going.",
        "answers":  [
                        {
                            "text":  "car/truck",
                            "points":  65
                        },
                        {
                            "text":  "stove/oven/grill",
                            "points":  11
                        },
                        {
                            "text":  "person/my old lady",
                            "points":  7
                        },
                        {
                            "text":  "iron",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180837,
        "question":  "Name something you get struck by.",
        "answers":  [
                        {
                            "text":  "lightning",
                            "points":  62
                        },
                        {
                            "text":  "a car",
                            "points":  14
                        },
                        {
                            "text":  "an idea/thought",
                            "points":  6
                        },
                        {
                            "text":  "person/fist",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180838,
        "question":  "We asked 100 single men... Some women have hot bodies. But the women you meet have hot what?",
        "answers":  [
                        {
                            "text":  "hot tempers/'tudes",
                            "points":  56
                        },
                        {
                            "text":  "hot lips/faces",
                            "points":  19
                        },
                        {
                            "text":  "hot flashes",
                            "points":  7
                        },
                        {
                            "text":  "hot breath",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180839,
        "question":  "Name something that might bite you in the rear.",
        "answers":  [
                        {
                            "text":  "dog",
                            "points":  55
                        },
                        {
                            "text":  "bug/mosquito",
                            "points":  21
                        },
                        {
                            "text":  "a lie/gossip",
                            "points":  7
                        },
                        {
                            "text":  "person/kinky lover",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180840,
        "question":  "Tell me a gift your company might give you when you retire.",
        "answers":  [
                        {
                            "text":  "a watch",
                            "points":  52
                        },
                        {
                            "text":  "a pension/money",
                            "points":  20
                        },
                        {
                            "text":  "a plaque",
                            "points":  8
                        },
                        {
                            "text":  "a pen",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  180841,
        "question":  "We asked 100 women... Name something you have enough of to last you a lifetime.",
        "answers":  [
                        {
                            "text":  "clothes/shoes",
                            "points":  49
                        },
                        {
                            "text":  "love",
                            "points":  15
                        },
                        {
                            "text":  "problems/bad luck",
                            "points":  13
                        },
                        {
                            "text":  "fat",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  180842,
        "question":  "Fill in the blank: Sometimes you just want to scream, \"Put down the\" what?",
        "answers":  [
                        {
                            "text":  "phone",
                            "points":  47
                        },
                        {
                            "text":  "remote",
                            "points":  31
                        },
                        {
                            "text":  "toilet seat",
                            "points":  4
                        },
                        {
                            "text":  "gun",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180843,
        "question":  "Name a blood-sucking creature that likes nude people because they're easy access.",
        "answers":  [
                        {
                            "text":  "mosquito",
                            "points":  40
                        },
                        {
                            "text":  "leech",
                            "points":  31
                        },
                        {
                            "text":  "tick",
                            "points":  9
                        },
                        {
                            "text":  "vampire/dracula",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  180844,
        "question":  "Fill in the blank: A wife never wants to hear her husband say, \"Honey, I lost our ______.\"",
        "answers":  [
                        {
                            "text":  "kids",
                            "points":  34
                        },
                        {
                            "text":  "money/life savings",
                            "points":  30
                        },
                        {
                            "text":  "house",
                            "points":  17
                        },
                        {
                            "text":  "keys",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180845,
        "question":  "Name something thrill seekers love to ride on.",
        "answers":  [
                        {
                            "text":  "roller coaster",
                            "points":  75
                        },
                        {
                            "text":  "motorcycle",
                            "points":  4
                        },
                        {
                            "text":  "zip line",
                            "points":  3
                        },
                        {
                            "text":  "plane/glider",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180846,
        "question":  "Fill in the blank: I wish I didn't have to go where?",
        "answers":  [
                        {
                            "text":  "work",
                            "points":  68
                        },
                        {
                            "text":  "doctor/dentist",
                            "points":  9
                        },
                        {
                            "text":  "bed",
                            "points":  4
                        },
                        {
                            "text":  "store/mall",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180847,
        "question":  "Name something people buy, use, and then return.",
        "answers":  [
                        {
                            "text":  "clothes/shoes",
                            "points":  65
                        },
                        {
                            "text":  "bottles/cans",
                            "points":  9
                        },
                        {
                            "text":  "tools/tire iron",
                            "points":  6
                        },
                        {
                            "text":  "car",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180848,
        "question":  "We asked 100 women... Want to humble your man? Make him wear a Speedo when he goes where?",
        "answers":  [
                        {
                            "text":  "swim'g/beach",
                            "points":  59
                        },
                        {
                            "text":  "shopping",
                            "points":  14
                        },
                        {
                            "text":  "to work",
                            "points":  7
                        },
                        {
                            "text":  "to mow lawn",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180849,
        "question":  "Name something you might have to go to whether you're sick or not.",
        "answers":  [
                        {
                            "text":  "work",
                            "points":  54
                        },
                        {
                            "text":  "doc/hospital",
                            "points":  14
                        },
                        {
                            "text":  "funeral",
                            "points":  9
                        },
                        {
                            "text":  "wedding",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  180850,
        "question":  "What might two women fight over that you'd be surprised to see two men fighting over?",
        "answers":  [
                        {
                            "text":  "clothes/shoes",
                            "points":  52
                        },
                        {
                            "text":  "man/chris hemsworth",
                            "points":  26
                        },
                        {
                            "text":  "purse",
                            "points":  4
                        },
                        {
                            "text":  "money/the check",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180851,
        "question":  "Where is your happy place?",
        "answers":  [
                        {
                            "text":  "home/bed",
                            "points":  51
                        },
                        {
                            "text":  "outdoors/beach",
                            "points":  25
                        },
                        {
                            "text":  "my imagination",
                            "points":  6
                        },
                        {
                            "text":  "the mall/shopping",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180852,
        "question":  "Name the last thing you bought a dozen of even though you didn't need that many.",
        "answers":  [
                        {
                            "text":  "eggs",
                            "points":  46
                        },
                        {
                            "text":  "donuts",
                            "points":  31
                        },
                        {
                            "text":  "cookies",
                            "points":  5
                        },
                        {
                            "text":  "light bulbs",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180853,
        "question":  "Name something that has lots of twists and turns.",
        "answers":  [
                        {
                            "text":  "road/highway",
                            "points":  45
                        },
                        {
                            "text":  "amusement ride",
                            "points":  21
                        },
                        {
                            "text":  "story/plot",
                            "points":  13
                        },
                        {
                            "text":  "life",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  180854,
        "question":  "Name something Superman might hit if he's flying and texting.",
        "answers":  [
                        {
                            "text":  "building/wall",
                            "points":  50
                        },
                        {
                            "text":  "plane",
                            "points":  19
                        },
                        {
                            "text":  "bird",
                            "points":  11
                        },
                        {
                            "text":  "pole/telephone pole",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180855,
        "question":  "Name something specific you hope happens tomorrow.",
        "answers":  [
                        {
                            "text":  "win lotto/get rich",
                            "points":  47
                        },
                        {
                            "text":  "weather i like",
                            "points":  26
                        },
                        {
                            "text":  "sleep in/nap",
                            "points":  7
                        },
                        {
                            "text":  "world peace",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180856,
        "question":  "Name a part of a person's body starting with the letter T that might be described as ugly.",
        "answers":  [
                        {
                            "text":  "toes",
                            "points":  47
                        },
                        {
                            "text":  "teeth",
                            "points":  22
                        },
                        {
                            "text":  "tongue",
                            "points":  8
                        },
                        {
                            "text":  "tummy",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  180857,
        "question":  "We asked 100 men... Fill in the blank: I know I just woke up in hell because ______ is lying in bed next to me.",
        "answers":  [
                        {
                            "text":  "my ex",
                            "points":  38
                        },
                        {
                            "text":  "my mother-in-law",
                            "points":  30
                        },
                        {
                            "text":  "the devil",
                            "points":  11
                        },
                        {
                            "text":  "my wife/mate",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180858,
        "question":  "Name an animal that comes in different colors.",
        "answers":  [
                        {
                            "text":  "dog",
                            "points":  34
                        },
                        {
                            "text":  "cat",
                            "points":  22
                        },
                        {
                            "text":  "bird/peacock",
                            "points":  21
                        },
                        {
                            "text":  "chameleon",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  180859,
        "question":  "Name something that has lines on it.",
        "answers":  [
                        {
                            "text":  "lined paper",
                            "points":  57
                        },
                        {
                            "text":  "face/keith richards",
                            "points":  12
                        },
                        {
                            "text":  "road/highway",
                            "points":  8
                        },
                        {
                            "text":  "zebra",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  180860,
        "question":  "Name something big you might buy to protect yourself with.",
        "answers":  [
                        {
                            "text":  "gun",
                            "points":  54
                        },
                        {
                            "text":  "dog",
                            "points":  14
                        },
                        {
                            "text":  "bat/stick",
                            "points":  12
                        },
                        {
                            "text":  "insurance policy",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180861,
        "question":  "Name one specific word that can describe peanut butter or a woman's body.",
        "answers":  [
                        {
                            "text":  "smooth",
                            "points":  41
                        },
                        {
                            "text":  "creamy",
                            "points":  20
                        },
                        {
                            "text":  "chunky",
                            "points":  15
                        },
                        {
                            "text":  "sticky",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  180862,
        "question":  "Name an exercise that would be funny to watch a nudist try to do.",
        "answers":  [
                        {
                            "text":  "jumping jacks",
                            "points":  51
                        },
                        {
                            "text":  "yoga/touch toes",
                            "points":  14
                        },
                        {
                            "text":  "running",
                            "points":  12
                        },
                        {
                            "text":  "squats",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180863,
        "question":  "Name something you like to have within reach while you're driving your car.",
        "answers":  [
                        {
                            "text":  "water/a drink",
                            "points":  43
                        },
                        {
                            "text":  "phone",
                            "points":  31
                        },
                        {
                            "text":  "radio",
                            "points":  4
                        },
                        {
                            "text":  "steering wheel/horn",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  180864,
        "question":  "Tell me something that follows the word \"baseball.\"",
        "answers":  [
                        {
                            "text":  "baseball game",
                            "points":  40
                        },
                        {
                            "text":  "baseball bat",
                            "points":  30
                        },
                        {
                            "text":  "baseball hat/cap",
                            "points":  6
                        },
                        {
                            "text":  "baseball diamond",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180865,
        "question":  "Name a place where you see hands in the air.",
        "answers":  [
                        {
                            "text":  "amusement park",
                            "points":  37
                        },
                        {
                            "text":  "concert",
                            "points":  23
                        },
                        {
                            "text":  "sporting event",
                            "points":  14
                        },
                        {
                            "text":  "church",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  180866,
        "question":  "Name a city that has a lot of strip clubs.",
        "answers":  [
                        {
                            "text":  "las vegas",
                            "points":  60
                        },
                        {
                            "text":  "new york",
                            "points":  13
                        },
                        {
                            "text":  "l.a./hollywood",
                            "points":  4
                        },
                        {
                            "text":  "new orleans",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180867,
        "question":  "Fill in the blank: When I went to the doctor, he told me I should have my ______ examined.",
        "answers":  [
                        {
                            "text":  "head/brain",
                            "points":  53
                        },
                        {
                            "text":  "eyes",
                            "points":  16
                        },
                        {
                            "text":  "boobs",
                            "points":  6
                        },
                        {
                            "text":  "heart",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180868,
        "question":  "Name an occupation where there's no room for error.",
        "answers":  [
                        {
                            "text":  "doctor/surgeon",
                            "points":  61
                        },
                        {
                            "text":  "pilot",
                            "points":  11
                        },
                        {
                            "text":  "air traffic ctl.",
                            "points":  3
                        },
                        {
                            "text":  "bomb squad/maker",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  180869,
        "question":  "Name something people swallow without chewing.",
        "answers":  [
                        {
                            "text":  "pills/medicine",
                            "points":  50
                        },
                        {
                            "text":  "ice cream",
                            "points":  10
                        },
                        {
                            "text":  "water",
                            "points":  8
                        },
                        {
                            "text":  "oysters",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  180870,
        "question":  "Name something that might be cut short.",
        "answers":  [
                        {
                            "text":  "hair",
                            "points":  41
                        },
                        {
                            "text":  "conversation/call",
                            "points":  15
                        },
                        {
                            "text":  "a life",
                            "points":  12
                        },
                        {
                            "text":  "a vacation",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  180871,
        "question":  "If you ever have a meltdown, name the place you'll probably be.",
        "answers":  [
                        {
                            "text":  "work",
                            "points":  37
                        },
                        {
                            "text":  "home",
                            "points":  22
                        },
                        {
                            "text":  "mall/store",
                            "points":  7
                        },
                        {
                            "text":  "dmv",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  180872,
        "question":  "Name a specific place where you're glad people can't read your mind.",
        "answers":  [
                        {
                            "text":  "work",
                            "points":  20
                        },
                        {
                            "text":  "church",
                            "points":  19
                        },
                        {
                            "text":  "restroom/shower",
                            "points":  18
                        },
                        {
                            "text":  "store/mall",
                            "points":  11
                        }
                    ]
    },
    {
        "id":  180873,
        "question":  "We asked 100 married men... Give me one word you'd hate to see in a text message from your wife.",
        "answers":  [
                        {
                            "text":  "divorce",
                            "points":  30
                        },
                        {
                            "text":  "leaving",
                            "points":  12
                        },
                        {
                            "text":  "shopping",
                            "points":  11
                        },
                        {
                            "text":  "money",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  180874,
        "question":  "If grandpa started dating again, what might he want his dates to be good at?",
        "answers":  [
                        {
                            "text":  "cook'g/soft food",
                            "points":  34
                        },
                        {
                            "text":  "bingo/games",
                            "points":  13
                        },
                        {
                            "text":  "sex/gumming",
                            "points":  8
                        },
                        {
                            "text":  "cpr",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  180875,
        "question":  "Name something you use to cover a crack.",
        "answers":  [
                        {
                            "text":  "caulk/putty",
                            "points":  23
                        },
                        {
                            "text":  "tape",
                            "points":  18
                        },
                        {
                            "text":  "pants/undies",
                            "points":  11
                        },
                        {
                            "text":  "cement/asphalt",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  180876,
        "question":  "When on vacation, a man would hate to hear his wife say, \"Oh no -- I forgot to bring the\" what?",
        "answers":  [
                        {
                            "text":  "cash/wallet",
                            "points":  27
                        },
                        {
                            "text":  "rubbers/birth ctl.",
                            "points":  12
                        },
                        {
                            "text":  "swimsuits/clothes",
                            "points":  7
                        },
                        {
                            "text":  "sunscreen",
                            "points":  5
                        }
                    ]
    }
];
