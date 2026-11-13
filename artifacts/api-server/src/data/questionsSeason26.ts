import type { SurveyQuestion } from "./questions.js";

// Season 26 set: a separate question set from the main bank in questions.ts.
// Boards from Family Feud season 26, as transcribed at
// https://mstiescott.neocities.org/feud26 (crawled 2026-11-13).
// Ids start at 110001 (each season has its own block of 10,000), so they
// never clash with the main bank (1-8782), AI questions (9000+) or other
// seasons. One-answer boards are left out.
// Not used in gameplay yet.
export const SEASON26_SET = "season26";
export const SEASON26_ID_START = 110001;

export function isSeason26Question(id: number): boolean {
  return id >= SEASON26_ID_START && id < SEASON26_ID_START + 10000;
}

export const season26Questions: SurveyQuestion[] = [
    {
        "id":  110001,
        "question":  "Name something a wife might shove in her husband's big mouth to shut him up.",
        "answers":  [
                        {
                            "text":  "donut/food",
                            "points":  64
                        },
                        {
                            "text":  "sock",
                            "points":  20
                        },
                        {
                            "text":  "rag",
                            "points":  3
                        },
                        {
                            "text":  "her fist",
                            "points":  3
                        },
                        {
                            "text":  "her boobs",
                            "points":  3
                        },
                        {
                            "text":  "beer",
                            "points":  3
                        },
                        {
                            "text":  "napkin",
                            "points":  2
                        },
                        {
                            "text":  "her tongue",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110002,
        "question":  "A wife might tell her husband she'll get a boob job if he does what to improve his looks?",
        "answers":  [
                        {
                            "text":  "lose weight/get abs",
                            "points":  60
                        },
                        {
                            "text":  "shave",
                            "points":  12
                        },
                        {
                            "text":  "facelift",
                            "points":  8
                        },
                        {
                            "text":  "\"enlargement\"",
                            "points":  6
                        },
                        {
                            "text":  "hair transplant",
                            "points":  5
                        },
                        {
                            "text":  "nose job",
                            "points":  4
                        },
                        {
                            "text":  "haircut/dye",
                            "points":  3
                        },
                        {
                            "text":  "tummy tuck/lipo",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110003,
        "question":  "Name a way your dad is like a bear.",
        "answers":  [
                        {
                            "text":  "growls/grouchy",
                            "points":  35
                        },
                        {
                            "text":  "big & round",
                            "points":  17
                        },
                        {
                            "text":  "hairy",
                            "points":  14
                        },
                        {
                            "text":  "hibernates/snores",
                            "points":  12
                        },
                        {
                            "text":  "gives bear hugs",
                            "points":  10
                        },
                        {
                            "text":  "strong",
                            "points":  5
                        },
                        {
                            "text":  "eats a lot",
                            "points":  4
                        },
                        {
                            "text":  "protective/caring",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110004,
        "question":  "We asked 100 married men... Fill in the blank: I've never met a woman who ______s as good as my wife.",
        "answers":  [
                        {
                            "text":  "looks/smiles",
                            "points":  31
                        },
                        {
                            "text":  "cooks",
                            "points":  22
                        },
                        {
                            "text":  "loves/makes love",
                            "points":  12
                        },
                        {
                            "text":  "understands me",
                            "points":  9
                        },
                        {
                            "text":  "cleans",
                            "points":  9
                        },
                        {
                            "text":  "manipulates",
                            "points":  6
                        },
                        {
                            "text":  "kisses",
                            "points":  6
                        },
                        {
                            "text":  "withholds sex",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  110005,
        "question":  "Name something you might be holding while watching \"Family Feud\" on TV.",
        "answers":  [
                        {
                            "text":  "remote",
                            "points":  46
                        },
                        {
                            "text":  "food/drink",
                            "points":  28
                        },
                        {
                            "text":  "phone",
                            "points":  10
                        },
                        {
                            "text":  "pet",
                            "points":  5
                        },
                        {
                            "text":  "book to read",
                            "points":  4
                        },
                        {
                            "text":  "blanket",
                            "points":  2
                        },
                        {
                            "text":  "myself",
                            "points":  2
                        },
                        {
                            "text":  "my breath in excitement!",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110006,
        "question":  "Tell me a place Dracula takes girls on a first date.",
        "answers":  [
                        {
                            "text":  "blood bank",
                            "points":  45
                        },
                        {
                            "text":  "castle/dungeon",
                            "points":  15
                        },
                        {
                            "text":  "cemetary/morgue",
                            "points":  13
                        },
                        {
                            "text":  "dark bar/club",
                            "points":  9
                        },
                        {
                            "text":  "movie/twilight saga",
                            "points":  9
                        },
                        {
                            "text":  "casket/bed",
                            "points":  4
                        },
                        {
                            "text":  "steakhouse",
                            "points":  2
                        },
                        {
                            "text":  "moonlit beach",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110007,
        "question":  "Popeye would be easy to pick out of a police lineup just by his what?",
        "answers":  [
                        {
                            "text":  "forearms/muscles",
                            "points":  40
                        },
                        {
                            "text":  "pipe",
                            "points":  34
                        },
                        {
                            "text":  "sailor suit/cap",
                            "points":  7
                        },
                        {
                            "text":  "tattoos",
                            "points":  6
                        },
                        {
                            "text":  "squinting eye",
                            "points":  6
                        },
                        {
                            "text":  "bulbous chin",
                            "points":  2
                        },
                        {
                            "text":  "can of spinach",
                            "points":  2
                        },
                        {
                            "text":  "voice/laugh",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110008,
        "question":  "Tell me another way people say \"grandpa.\"",
        "answers":  [
                        {
                            "text":  "papa",
                            "points":  35
                        },
                        {
                            "text":  "pops/pop-pop",
                            "points":  23
                        },
                        {
                            "text":  "gramps/grampy",
                            "points":  14
                        },
                        {
                            "text":  "paw-paw",
                            "points":  9
                        },
                        {
                            "text":  "granddad",
                            "points":  8
                        },
                        {
                            "text":  "grandfather",
                            "points":  6
                        },
                        {
                            "text":  "opa",
                            "points":  2
                        },
                        {
                            "text":  "pappy",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110009,
        "question":  "Tell me why you think your house is haunted.",
        "answers":  [
                        {
                            "text":  "noises/voices",
                            "points":  68
                        },
                        {
                            "text":  "ghosts!",
                            "points":  8
                        },
                        {
                            "text":  "doors open/close",
                            "points":  7
                        },
                        {
                            "text":  "things move/vanish",
                            "points":  6
                        },
                        {
                            "text":  "i don't!",
                            "points":  3
                        },
                        {
                            "text":  "cold breezes",
                            "points":  2
                        },
                        {
                            "text":  "dead animals",
                            "points":  2
                        },
                        {
                            "text":  "gets dusty/dirty",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110010,
        "question":  "Name something a dog eats that you wouldn't eat no matter how hungry you were.",
        "answers":  [
                        {
                            "text":  "poop",
                            "points":  59
                        },
                        {
                            "text":  "dog food/raw",
                            "points":  23
                        },
                        {
                            "text":  "vomit",
                            "points":  3
                        },
                        {
                            "text":  "bones",
                            "points":  3
                        },
                        {
                            "text":  "trash",
                            "points":  3
                        },
                        {
                            "text":  "liver",
                            "points":  3
                        },
                        {
                            "text":  "grass",
                            "points":  2
                        },
                        {
                            "text":  "dead animal/bugs",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110011,
        "question":  "We asked 100 women... Name something you'd do at the beach if you lost your bikini top.",
        "answers":  [
                        {
                            "text":  "use towel",
                            "points":  48
                        },
                        {
                            "text":  "cross arms/cup boobs",
                            "points":  17
                        },
                        {
                            "text":  "run home",
                            "points":  13
                        },
                        {
                            "text":  "flaunt it/sunbathe",
                            "points":  7
                        },
                        {
                            "text":  "get in ocean",
                            "points":  6
                        },
                        {
                            "text":  "cry/scream",
                            "points":  3
                        },
                        {
                            "text":  "make seaweed bikini",
                            "points":  2
                        },
                        {
                            "text":  "blush",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110012,
        "question":  "Name something you buy to put on your body.",
        "answers":  [
                        {
                            "text":  "lotion/cream",
                            "points":  44
                        },
                        {
                            "text":  "clothes/hat",
                            "points":  39
                        },
                        {
                            "text":  "cologne",
                            "points":  4
                        },
                        {
                            "text":  "jewelry/watch",
                            "points":  3
                        },
                        {
                            "text":  "shampoo/soap",
                            "points":  2
                        },
                        {
                            "text":  "tattoo",
                            "points":  2
                        },
                        {
                            "text":  "makeup",
                            "points":  2
                        },
                        {
                            "text":  "deodorant",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110013,
        "question":  "We asked 100 married women... What do you wish your husband bought you at least once a month?",
        "answers":  [
                        {
                            "text":  "flowers",
                            "points":  40
                        },
                        {
                            "text":  "dinner",
                            "points":  25
                        },
                        {
                            "text":  "candy/treats",
                            "points":  12
                        },
                        {
                            "text":  "vacation",
                            "points":  9
                        },
                        {
                            "text":  "jewelry",
                            "points":  3
                        },
                        {
                            "text":  "massage/spa day",
                            "points":  3
                        },
                        {
                            "text":  "champagne/booze",
                            "points":  3
                        },
                        {
                            "text":  "housekeeper",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110014,
        "question":  "Tell me a word that women use for a very attractive man.",
        "answers":  [
                        {
                            "text":  "hot/hottie",
                            "points":  36
                        },
                        {
                            "text":  "handsome",
                            "points":  27
                        },
                        {
                            "text":  "hunk",
                            "points":  19
                        },
                        {
                            "text":  "stud",
                            "points":  6
                        },
                        {
                            "text":  "fine",
                            "points":  3
                        },
                        {
                            "text":  "sexy",
                            "points":  3
                        },
                        {
                            "text":  "cute/cutie",
                            "points":  2
                        },
                        {
                            "text":  "yummy",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110015,
        "question":  "If your boss were a \"Sesame Street\" character, which one would he be?",
        "answers":  [
                        {
                            "text":  "oscar the grouch",
                            "points":  36
                        },
                        {
                            "text":  "big bird",
                            "points":  27
                        },
                        {
                            "text":  "elmo",
                            "points":  12
                        },
                        {
                            "text":  "cookie monster",
                            "points":  8
                        },
                        {
                            "text":  "ernie",
                            "points":  6
                        },
                        {
                            "text":  "kermit the frog",
                            "points":  5
                        },
                        {
                            "text":  "bert",
                            "points":  2
                        },
                        {
                            "text":  "grover",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110016,
        "question":  "In Hannibal the cannibal's BLT sandwich, the B might stand for what body part?",
        "answers":  [
                        {
                            "text":  "booty",
                            "points":  33
                        },
                        {
                            "text":  "boob",
                            "points":  23
                        },
                        {
                            "text":  "brain",
                            "points":  15
                        },
                        {
                            "text":  "belly",
                            "points":  8
                        },
                        {
                            "text":  "bladder",
                            "points":  5
                        },
                        {
                            "text":  "bone",
                            "points":  5
                        },
                        {
                            "text":  "bollocks",
                            "points":  5
                        },
                        {
                            "text":  "bicep",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110017,
        "question":  "You're buried up to your neck in sand at the beach. What do you worry might happen to your head?",
        "answers":  [
                        {
                            "text":  "stepped on/kicked",
                            "points":  26
                        },
                        {
                            "text":  "high tide!",
                            "points":  18
                        },
                        {
                            "text":  "bird poo/dog pee",
                            "points":  18
                        },
                        {
                            "text":  "sunburn",
                            "points":  17
                        },
                        {
                            "text":  "critters attack/peck",
                            "points":  11
                        },
                        {
                            "text":  "head buried too",
                            "points":  4
                        },
                        {
                            "text":  "sand in mouth",
                            "points":  2
                        },
                        {
                            "text":  "truck runs over",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110018,
        "question":  "We asked 100 men... Fill in the blank: If you were granted one wish, you might use it to become ______.",
        "answers":  [
                        {
                            "text":  "rich",
                            "points":  51
                        },
                        {
                            "text":  "famous",
                            "points":  11
                        },
                        {
                            "text":  "tall",
                            "points":  9
                        },
                        {
                            "text":  "happy",
                            "points":  7
                        },
                        {
                            "text":  "young",
                            "points":  6
                        },
                        {
                            "text":  "sexy",
                            "points":  6
                        },
                        {
                            "text":  "healthy",
                            "points":  4
                        },
                        {
                            "text":  "invisible",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110019,
        "question":  "Name something you'd stop doing in the nude if you moved back in with your parents.",
        "answers":  [
                        {
                            "text":  "sleeping",
                            "points":  50
                        },
                        {
                            "text":  "walking around",
                            "points":  25
                        },
                        {
                            "text":  "housework",
                            "points":  7
                        },
                        {
                            "text":  "cooking",
                            "points":  5
                        },
                        {
                            "text":  "sunbathe/pool time",
                            "points":  4
                        },
                        {
                            "text":  "dancing",
                            "points":  2
                        },
                        {
                            "text":  "boinking",
                            "points":  2
                        },
                        {
                            "text":  "anything at all!",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110020,
        "question":  "Name a specific reason a wife might say she stopped taking romantic baths with her husband.",
        "answers":  [
                        {
                            "text":  "too porky to fit",
                            "points":  49
                        },
                        {
                            "text":  "he farts",
                            "points":  24
                        },
                        {
                            "text":  "he's too dirty",
                            "points":  6
                        },
                        {
                            "text":  "too tired/busy",
                            "points":  6
                        },
                        {
                            "text":  "old & arthritic",
                            "points":  5
                        },
                        {
                            "text":  "he pees in it",
                            "points":  3
                        },
                        {
                            "text":  "kids are home",
                            "points":  2
                        },
                        {
                            "text":  "hairy/sheds",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110021,
        "question":  "Name something big you might take with you to a nude beach.",
        "answers":  [
                        {
                            "text":  "towel/blanket",
                            "points":  46
                        },
                        {
                            "text":  "umbrella",
                            "points":  31
                        },
                        {
                            "text":  "floppy hat",
                            "points":  4
                        },
                        {
                            "text":  "beach ball",
                            "points":  4
                        },
                        {
                            "text":  "confidence",
                            "points":  3
                        },
                        {
                            "text":  "sunglasses",
                            "points":  3
                        },
                        {
                            "text":  "bag",
                            "points":  3
                        },
                        {
                            "text":  "float",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110022,
        "question":  "Name something a female dolphin might find sexy about her mate.",
        "answers":  [
                        {
                            "text":  "fine fins/tail",
                            "points":  41
                        },
                        {
                            "text":  "cute face/nose",
                            "points":  18
                        },
                        {
                            "text":  "swim/jump skills",
                            "points":  14
                        },
                        {
                            "text":  "sultry sound",
                            "points":  9
                        },
                        {
                            "text":  "nice blowhole",
                            "points":  7
                        },
                        {
                            "text":  "fab phallus",
                            "points":  3
                        },
                        {
                            "text":  "sleek skin",
                            "points":  3
                        },
                        {
                            "text":  "size/shape",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110023,
        "question":  "When a cowboy wants to spice things up in his love life, he brings what into the bedroom?",
        "answers":  [
                        {
                            "text":  "lasso! yeehaw!",
                            "points":  41
                        },
                        {
                            "text":  "spurs",
                            "points":  17
                        },
                        {
                            "text":  "whip",
                            "points":  15
                        },
                        {
                            "text":  "hat",
                            "points":  9
                        },
                        {
                            "text":  "his horse! giddy-up!",
                            "points":  6
                        },
                        {
                            "text":  "boots",
                            "points":  3
                        },
                        {
                            "text":  "saddle",
                            "points":  3
                        },
                        {
                            "text":  "chaps",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110024,
        "question":  "Name a bird that's also the name of a sports team.",
        "answers":  [
                        {
                            "text":  "cardinals",
                            "points":  41
                        },
                        {
                            "text":  "eagles",
                            "points":  16
                        },
                        {
                            "text":  "falcons",
                            "points":  10
                        },
                        {
                            "text":  "ravens",
                            "points":  9
                        },
                        {
                            "text":  "orioles",
                            "points":  8
                        },
                        {
                            "text":  "blue jays",
                            "points":  6
                        },
                        {
                            "text":  "seahawks",
                            "points":  4
                        },
                        {
                            "text":  "pelicans",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110025,
        "question":  "If grandpa is such a grouchy old fart, why doesn't grandma divorce him?",
        "answers":  [
                        {
                            "text":  "honey got money",
                            "points":  37
                        },
                        {
                            "text":  "love",
                            "points":  26
                        },
                        {
                            "text":  "too much hassle",
                            "points":  11
                        },
                        {
                            "text":  "makes her squeal",
                            "points":  10
                        },
                        {
                            "text":  "too old",
                            "points":  6
                        },
                        {
                            "text":  "handy/chores",
                            "points":  3
                        },
                        {
                            "text":  "she's weak",
                            "points":  2
                        },
                        {
                            "text":  "he's never awake",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110026,
        "question":  "Name something you do at a rock concert but not at a classical music concert.",
        "answers":  [
                        {
                            "text":  "scream",
                            "points":  31
                        },
                        {
                            "text":  "dance/mosh pit",
                            "points":  20
                        },
                        {
                            "text":  "sing along",
                            "points":  13
                        },
                        {
                            "text":  "stand",
                            "points":  10
                        },
                        {
                            "text":  "wave lighter/phone",
                            "points":  7
                        },
                        {
                            "text":  "wear jeans",
                            "points":  6
                        },
                        {
                            "text":  "get drunk",
                            "points":  6
                        },
                        {
                            "text":  "pass a joint",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110027,
        "question":  "What would be the best thing about being besties with Beyoncé?",
        "answers":  [
                        {
                            "text":  "all her $$$",
                            "points":  28
                        },
                        {
                            "text":  "music/free tickets",
                            "points":  27
                        },
                        {
                            "text":  "travel the world",
                            "points":  14
                        },
                        {
                            "text":  "great parties",
                            "points":  11
                        },
                        {
                            "text":  "fame",
                            "points":  8
                        },
                        {
                            "text":  "celeb pals/jay-z",
                            "points":  4
                        },
                        {
                            "text":  "michelin star food",
                            "points":  3
                        },
                        {
                            "text":  "designer clothes",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110028,
        "question":  "Name a part of your body you could break and still do your job.",
        "answers":  [
                        {
                            "text":  "toe",
                            "points":  23
                        },
                        {
                            "text":  "nose",
                            "points":  20
                        },
                        {
                            "text":  "leg",
                            "points":  17
                        },
                        {
                            "text":  "finger",
                            "points":  12
                        },
                        {
                            "text":  "foot",
                            "points":  12
                        },
                        {
                            "text":  "arm/elbow",
                            "points":  5
                        },
                        {
                            "text":  "rib",
                            "points":  5
                        },
                        {
                            "text":  "tooth",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110029,
        "question":  "Name something you'd find in a rental car that tells you Snoop Dogg rented it last.",
        "answers":  [
                        {
                            "text":  "blunt/roach clip",
                            "points":  73
                        },
                        {
                            "text":  "chain/bling",
                            "points":  8
                        },
                        {
                            "text":  "clothes/bandana",
                            "points":  4
                        },
                        {
                            "text":  "gin & juice",
                            "points":  3
                        },
                        {
                            "text":  "his license",
                            "points":  2
                        },
                        {
                            "text":  "munchies",
                            "points":  2
                        },
                        {
                            "text":  "martha stewart",
                            "points":  2
                        },
                        {
                            "text":  "music/sound system",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110030,
        "question":  "Scarlett the stripper was mad that someone put what all over the stripper pole?",
        "answers":  [
                        {
                            "text":  "oil/grease",
                            "points":  68
                        },
                        {
                            "text":  "butter",
                            "points":  6
                        },
                        {
                            "text":  "glue",
                            "points":  6
                        },
                        {
                            "text":  "honey",
                            "points":  5
                        },
                        {
                            "text":  "tar",
                            "points":  3
                        },
                        {
                            "text":  "jelly",
                            "points":  3
                        },
                        {
                            "text":  "syrup/sap",
                            "points":  3
                        },
                        {
                            "text":  "tacks/spikes",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110031,
        "question":  "Tell me a reason you haven't brushed your teeth for a few days.",
        "answers":  [
                        {
                            "text":  "sore mouth/sick",
                            "points":  54
                        },
                        {
                            "text":  "no brush/camping",
                            "points":  17
                        },
                        {
                            "text":  "lazy/tired",
                            "points":  11
                        },
                        {
                            "text":  "too busy",
                            "points":  4
                        },
                        {
                            "text":  "no teeth",
                            "points":  4
                        },
                        {
                            "text":  "been too drunk",
                            "points":  2
                        },
                        {
                            "text":  "sad/about breakup",
                            "points":  2
                        },
                        {
                            "text":  "dead",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110032,
        "question":  "Name a sin that when the preacher talks about it at church, you hope he ain't looking right at you.",
        "answers":  [
                        {
                            "text":  "lust/sleeping around",
                            "points":  51
                        },
                        {
                            "text":  "lying",
                            "points":  13
                        },
                        {
                            "text":  "gluttony/boozing",
                            "points":  8
                        },
                        {
                            "text":  "swearing",
                            "points":  7
                        },
                        {
                            "text":  "jealousy/envy",
                            "points":  6
                        },
                        {
                            "text":  "stealing",
                            "points":  4
                        },
                        {
                            "text":  "sloth",
                            "points":  4
                        },
                        {
                            "text":  "gossiping",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110033,
        "question":  "We asked 100 parents... If your adult child moved back in with you, what would your first fight be about?",
        "answers":  [
                        {
                            "text":  "mess/laundry",
                            "points":  49
                        },
                        {
                            "text":  "money/rent",
                            "points":  17
                        },
                        {
                            "text":  "curfew",
                            "points":  12
                        },
                        {
                            "text":  "finding job",
                            "points":  9
                        },
                        {
                            "text":  "bathroom usage",
                            "points":  3
                        },
                        {
                            "text":  "their mate/lovers",
                            "points":  2
                        },
                        {
                            "text":  "moving out",
                            "points":  2
                        },
                        {
                            "text":  "the tv",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110034,
        "question":  "We asked 100 women... You know your friend is setting you up with a loser if she says, \"He has a nice\" what?",
        "answers":  [
                        {
                            "text":  "personality/'tude",
                            "points":  44
                        },
                        {
                            "text":  "smile/laugh",
                            "points":  21
                        },
                        {
                            "text":  "car/truck",
                            "points":  15
                        },
                        {
                            "text":  "tush/man-can",
                            "points":  5
                        },
                        {
                            "text":  "mother",
                            "points":  5
                        },
                        {
                            "text":  "name",
                            "points":  2
                        },
                        {
                            "text":  "pet",
                            "points":  2
                        },
                        {
                            "text":  "outfit/pocket square",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110035,
        "question":  "Name a reason someone might be squirming.",
        "answers":  [
                        {
                            "text":  "gotta pee/poo",
                            "points":  40
                        },
                        {
                            "text":  "lying/guilty",
                            "points":  19
                        },
                        {
                            "text":  "itchy/hemorrhoids",
                            "points":  11
                        },
                        {
                            "text":  "nervous/scared",
                            "points":  10
                        },
                        {
                            "text":  "see critter/bug",
                            "points":  5
                        },
                        {
                            "text":  "pain/dentist",
                            "points":  5
                        },
                        {
                            "text":  "sitting/uncomf.",
                            "points":  4
                        },
                        {
                            "text":  "bored/restless",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110036,
        "question":  "Name something a chicken has that you're glad you don't.",
        "answers":  [
                        {
                            "text":  "beak",
                            "points":  39
                        },
                        {
                            "text":  "feathers",
                            "points":  33
                        },
                        {
                            "text":  "ugly feet",
                            "points":  10
                        },
                        {
                            "text":  "fleshy neck/wattle",
                            "points":  6
                        },
                        {
                            "text":  "gizzard",
                            "points":  2
                        },
                        {
                            "text":  "wings",
                            "points":  2
                        },
                        {
                            "text":  "chicken legs",
                            "points":  2
                        },
                        {
                            "text":  "eggs poppin' out",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110037,
        "question":  "We asked 100 women... If a man plays what instrument, he's probably good at making love?",
        "answers":  [
                        {
                            "text":  "guitar",
                            "points":  39
                        },
                        {
                            "text":  "piano",
                            "points":  19
                        },
                        {
                            "text":  "drums",
                            "points":  11
                        },
                        {
                            "text":  "sax",
                            "points":  8
                        },
                        {
                            "text":  "violin/fiddle",
                            "points":  8
                        },
                        {
                            "text":  "flute",
                            "points":  4
                        },
                        {
                            "text":  "harp",
                            "points":  4
                        },
                        {
                            "text":  "trumpet",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110038,
        "question":  "We asked 100 women... A guy looks sexiest when he's doing what outdoors?",
        "answers":  [
                        {
                            "text":  "exercise/swim'g",
                            "points":  34
                        },
                        {
                            "text":  "yard work",
                            "points":  32
                        },
                        {
                            "text":  "chopping wood",
                            "points":  14
                        },
                        {
                            "text":  "working on car",
                            "points":  7
                        },
                        {
                            "text":  "home repairs",
                            "points":  3
                        },
                        {
                            "text":  "cleaning pool",
                            "points":  2
                        },
                        {
                            "text":  "grilling",
                            "points":  2
                        },
                        {
                            "text":  "playing w/ kids",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110039,
        "question":  "Name something a male stripper called \"The Leprechaun\" might have.",
        "answers":  [
                        {
                            "text":  "green outfit/skin",
                            "points":  31
                        },
                        {
                            "text":  "shamrock/tattoo",
                            "points":  18
                        },
                        {
                            "text":  "gold",
                            "points":  16
                        },
                        {
                            "text":  "wee lil' body",
                            "points":  13
                        },
                        {
                            "text":  "red hair/beard",
                            "points":  7
                        },
                        {
                            "text":  "lucky charms cereal",
                            "points":  5
                        },
                        {
                            "text":  "big ears",
                            "points":  3
                        },
                        {
                            "text":  "club/cane",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110040,
        "question":  "Name something Dorothy saw in Oz and said, \"We don't have that in Kansas.\"",
        "answers":  [
                        {
                            "text":  "yellow brick road",
                            "points":  28
                        },
                        {
                            "text":  "munchkins",
                            "points":  20
                        },
                        {
                            "text":  "witches",
                            "points":  19
                        },
                        {
                            "text":  "flying monkeys",
                            "points":  15
                        },
                        {
                            "text":  "color-changing horse",
                            "points":  5
                        },
                        {
                            "text":  "tin man",
                            "points":  4
                        },
                        {
                            "text":  "magic poppies",
                            "points":  3
                        },
                        {
                            "text":  "the wizard",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110041,
        "question":  "Name a reason a man might say he has a beard.",
        "answers":  [
                        {
                            "text":  "looks hot/manly",
                            "points":  28
                        },
                        {
                            "text":  "hide zits/scar",
                            "points":  15
                        },
                        {
                            "text":  "unattractive/jawline",
                            "points":  14
                        },
                        {
                            "text":  "too lazy to shave",
                            "points":  13
                        },
                        {
                            "text":  "stay warm",
                            "points":  10
                        },
                        {
                            "text":  "he's santa",
                            "points":  6
                        },
                        {
                            "text":  "because he does!",
                            "points":  5
                        },
                        {
                            "text":  "look older",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  110042,
        "question":  "Name something from a pet store that Batman might buy Catwoman for her birthday.",
        "answers":  [
                        {
                            "text":  "catnip",
                            "points":  27
                        },
                        {
                            "text":  "collar & leash",
                            "points":  21
                        },
                        {
                            "text":  "cat food/treats",
                            "points":  16
                        },
                        {
                            "text":  "a kitten",
                            "points":  12
                        },
                        {
                            "text":  "ball/toy",
                            "points":  8
                        },
                        {
                            "text":  "scratching post",
                            "points":  7
                        },
                        {
                            "text":  "rats/mice",
                            "points":  3
                        },
                        {
                            "text":  "litter box",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110043,
        "question":  "We asked 100 women... What do you learn about a man's past that tells you there's no future with him?",
        "answers":  [
                        {
                            "text":  "man-ho",
                            "points":  23
                        },
                        {
                            "text":  "jail/most wanted",
                            "points":  23
                        },
                        {
                            "text":  "mom drama/lives with",
                            "points":  22
                        },
                        {
                            "text":  "many divorces",
                            "points":  10
                        },
                        {
                            "text":  "liar",
                            "points":  7
                        },
                        {
                            "text":  "lots of kids",
                            "points":  4
                        },
                        {
                            "text":  "cheap",
                            "points":  4
                        },
                        {
                            "text":  "can't keep a job",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110044,
        "question":  "We asked 100 married women... Name a command that would make both your husband and your dog think you were talking to them.",
        "answers":  [
                        {
                            "text":  "be quiet!",
                            "points":  21
                        },
                        {
                            "text":  "sit!",
                            "points":  17
                        },
                        {
                            "text":  "come here!",
                            "points":  12
                        },
                        {
                            "text":  "stop!",
                            "points":  12
                        },
                        {
                            "text":  "dinner!/eat!",
                            "points":  12
                        },
                        {
                            "text":  "stay!",
                            "points":  10
                        },
                        {
                            "text":  "down, boy!",
                            "points":  7
                        },
                        {
                            "text":  "go for a walk?",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  110045,
        "question":  "Name something a Beverly Hills housewife would be embarrassed to say she does for herself.",
        "answers":  [
                        {
                            "text":  "cleans/laundry",
                            "points":  60
                        },
                        {
                            "text":  "her nails",
                            "points":  15
                        },
                        {
                            "text":  "her hair/color",
                            "points":  4
                        },
                        {
                            "text":  "makes love to self",
                            "points":  2
                        },
                        {
                            "text":  "mows lawn",
                            "points":  2
                        },
                        {
                            "text":  "pumps gas",
                            "points":  2
                        },
                        {
                            "text":  "her makeup",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110046,
        "question":  "We asked 100 men... Give me one word that describes how you like your food and your women.",
        "answers":  [
                        {
                            "text":  "hot",
                            "points":  51
                        },
                        {
                            "text":  "spicy",
                            "points":  14
                        },
                        {
                            "text":  "warm",
                            "points":  10
                        },
                        {
                            "text":  "sweet",
                            "points":  7
                        },
                        {
                            "text":  "tender",
                            "points":  4
                        },
                        {
                            "text":  "cheap",
                            "points":  3
                        },
                        {
                            "text":  "satisfying",
                            "points":  3
                        },
                        {
                            "text":  "seasoned",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110047,
        "question":  "The world is ending in one hour. Where do you tell the Uber driver to take you?",
        "answers":  [
                        {
                            "text":  "home/family's",
                            "points":  47
                        },
                        {
                            "text":  "church",
                            "points":  13
                        },
                        {
                            "text":  "beach",
                            "points":  11
                        },
                        {
                            "text":  "bar",
                            "points":  9
                        },
                        {
                            "text":  "eatery/chili's",
                            "points":  7
                        },
                        {
                            "text":  "casino/vegas",
                            "points":  3
                        },
                        {
                            "text":  "store/shopping",
                            "points":  3
                        },
                        {
                            "text":  "strip joint",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110048,
        "question":  "Name something the toughest bald guy in the world shaves his head with.",
        "answers":  [
                        {
                            "text":  "knife/sword",
                            "points":  42
                        },
                        {
                            "text":  "razor blade",
                            "points":  33
                        },
                        {
                            "text":  "broken glass",
                            "points":  8
                        },
                        {
                            "text":  "rock/flint",
                            "points":  3
                        },
                        {
                            "text":  "ax",
                            "points":  3
                        },
                        {
                            "text":  "chain saw",
                            "points":  2
                        },
                        {
                            "text":  "sandpaper",
                            "points":  2
                        },
                        {
                            "text":  "lawn mower",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110049,
        "question":  "Name something a good basketball player gets a lot of.",
        "answers":  [
                        {
                            "text":  "baskets/shots",
                            "points":  33
                        },
                        {
                            "text":  "money",
                            "points":  31
                        },
                        {
                            "text":  "praise/fans",
                            "points":  17
                        },
                        {
                            "text":  "sex/dates",
                            "points":  4
                        },
                        {
                            "text":  "rebounds",
                            "points":  3
                        },
                        {
                            "text":  "exercise",
                            "points":  3
                        },
                        {
                            "text":  "assists",
                            "points":  2
                        },
                        {
                            "text":  "practice",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110050,
        "question":  "Name something you say on a date even if you don't mean it.",
        "answers":  [
                        {
                            "text":  "look great/cute!",
                            "points":  31
                        },
                        {
                            "text":  "nice time!",
                            "points":  20
                        },
                        {
                            "text":  "i like/love you!",
                            "points":  11
                        },
                        {
                            "text":  "see again/call",
                            "points":  11
                        },
                        {
                            "text":  "so interesting!",
                            "points":  7
                        },
                        {
                            "text":  "thank you!",
                            "points":  6
                        },
                        {
                            "text":  "great restaurant!",
                            "points":  5
                        },
                        {
                            "text":  "nice to meet u!",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110051,
        "question":  "How does a man get a girlfriend who's out of his league?",
        "answers":  [
                        {
                            "text":  "be rich",
                            "points":  31
                        },
                        {
                            "text":  "buy gifts/bling",
                            "points":  16
                        },
                        {
                            "text":  "funny/charming",
                            "points":  10
                        },
                        {
                            "text":  "seductive cologne",
                            "points":  10
                        },
                        {
                            "text":  "be a good man",
                            "points":  10
                        },
                        {
                            "text":  "confidence",
                            "points":  10
                        },
                        {
                            "text":  "lie",
                            "points":  6
                        },
                        {
                            "text":  "be persistent!",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110052,
        "question":  "What's something you do in the shower that you wouldn't do when you're showering with your boo?",
        "answers":  [
                        {
                            "text":  "shave",
                            "points":  30
                        },
                        {
                            "text":  "pee",
                            "points":  19
                        },
                        {
                            "text":  "sing showtunes",
                            "points":  18
                        },
                        {
                            "text":  "let one go",
                            "points":  13
                        },
                        {
                            "text":  "make love to self",
                            "points":  7
                        },
                        {
                            "text":  "get clean",
                            "points":  4
                        },
                        {
                            "text":  "talk to self",
                            "points":  2
                        },
                        {
                            "text":  "spit",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110053,
        "question":  "We asked 100 women... Name something your man has in common with peanut butter.",
        "answers":  [
                        {
                            "text":  "smooth",
                            "points":  28
                        },
                        {
                            "text":  "nutty",
                            "points":  21
                        },
                        {
                            "text":  "tasty",
                            "points":  15
                        },
                        {
                            "text":  "chunky/thick",
                            "points":  10
                        },
                        {
                            "text":  "sweet",
                            "points":  9
                        },
                        {
                            "text":  "sticky",
                            "points":  4
                        },
                        {
                            "text":  "creamy",
                            "points":  4
                        },
                        {
                            "text":  "salty",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110054,
        "question":  "Fill in the blank: I may be terrible at ______, but I still love doing it.",
        "answers":  [
                        {
                            "text":  "sports/fishing",
                            "points":  28
                        },
                        {
                            "text":  "singing",
                            "points":  21
                        },
                        {
                            "text":  "cooking",
                            "points":  14
                        },
                        {
                            "text":  "dancing",
                            "points":  12
                        },
                        {
                            "text":  "shagging",
                            "points":  12
                        },
                        {
                            "text":  "drawing/paint'g",
                            "points":  4
                        },
                        {
                            "text":  "driving",
                            "points":  2
                        },
                        {
                            "text":  "gambling",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110055,
        "question":  "A soccer player would be laughed off the field if he wore what kind of shoes?",
        "answers":  [
                        {
                            "text":  "high heels",
                            "points":  27
                        },
                        {
                            "text":  "ballet/dance",
                            "points":  18
                        },
                        {
                            "text":  "flip-flops/sandals",
                            "points":  17
                        },
                        {
                            "text":  "crocs",
                            "points":  11
                        },
                        {
                            "text":  "sneakers/tennies",
                            "points":  9
                        },
                        {
                            "text":  "dress shoes",
                            "points":  6
                        },
                        {
                            "text":  "bowling shoes",
                            "points":  4
                        },
                        {
                            "text":  "clown shoes",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110056,
        "question":  "We asked 100 single men... What's the single worst thing that can happen on a date?",
        "answers":  [
                        {
                            "text":  "no-show",
                            "points":  22
                        },
                        {
                            "text":  "forget wallet",
                            "points":  21
                        },
                        {
                            "text":  "raging bowel/gas",
                            "points":  18
                        },
                        {
                            "text":  "argue",
                            "points":  10
                        },
                        {
                            "text":  "lame/no convo",
                            "points":  9
                        },
                        {
                            "text":  "she sneaks out",
                            "points":  6
                        },
                        {
                            "text":  "30-second sex",
                            "points":  5
                        },
                        {
                            "text":  "ex shows up",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110057,
        "question":  "Name something a married man sees a single guy holding that might make him jealous.",
        "answers":  [
                        {
                            "text":  "beautiful gal",
                            "points":  57
                        },
                        {
                            "text":  "dough/wallet",
                            "points":  13
                        },
                        {
                            "text":  "sports car keys",
                            "points":  10
                        },
                        {
                            "text":  "beer",
                            "points":  6
                        },
                        {
                            "text":  "my wife!",
                            "points":  2
                        },
                        {
                            "text":  "sports tickets",
                            "points":  2
                        },
                        {
                            "text":  "video game",
                            "points":  2
                        },
                        {
                            "text":  "golf clubs",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110058,
        "question":  "There's a grizzly bear outside of your tent. What do you do?",
        "answers":  [
                        {
                            "text":  "play dead/stay put",
                            "points":  52
                        },
                        {
                            "text":  "yell/make noise",
                            "points":  14
                        },
                        {
                            "text":  "pray!",
                            "points":  8
                        },
                        {
                            "text":  "run",
                            "points":  7
                        },
                        {
                            "text":  "shoot off gun",
                            "points":  5
                        },
                        {
                            "text":  "poo/pee self",
                            "points":  4
                        },
                        {
                            "text":  "cry",
                            "points":  2
                        },
                        {
                            "text":  "sacrifice mate/pal",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110059,
        "question":  "Other than \"attractive,\" what word would you use to describe a very attractive person?",
        "answers":  [
                        {
                            "text":  "hot/hottie",
                            "points":  49
                        },
                        {
                            "text":  "beautiful",
                            "points":  11
                        },
                        {
                            "text":  "gorgeous",
                            "points":  10
                        },
                        {
                            "text":  "sexy",
                            "points":  9
                        },
                        {
                            "text":  "handsome",
                            "points":  6
                        },
                        {
                            "text":  "smokin'",
                            "points":  4
                        },
                        {
                            "text":  "pretty",
                            "points":  3
                        },
                        {
                            "text":  "niiiice",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110060,
        "question":  "Your hot date goes in for a kiss, but they have a cold sore. What do you do?",
        "answers":  [
                        {
                            "text":  "turn away/duck",
                            "points":  48
                        },
                        {
                            "text":  "give cheek kiss",
                            "points":  11
                        },
                        {
                            "text":  "say \"ew, no!\"",
                            "points":  8
                        },
                        {
                            "text":  "kiss 'em anyway",
                            "points":  8
                        },
                        {
                            "text":  "run!/\"toodles!\"",
                            "points":  6
                        },
                        {
                            "text":  "push 'em away",
                            "points":  5
                        },
                        {
                            "text":  "fake cough/sneeze",
                            "points":  5
                        },
                        {
                            "text":  "hand on mouth",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110061,
        "question":  "Name an alcoholic beverage you drink poolside.",
        "answers":  [
                        {
                            "text":  "beer",
                            "points":  39
                        },
                        {
                            "text":  "margarita",
                            "points":  24
                        },
                        {
                            "text":  "pina colada",
                            "points":  8
                        },
                        {
                            "text":  "mai tai",
                            "points":  6
                        },
                        {
                            "text":  "wine",
                            "points":  6
                        },
                        {
                            "text":  "daiquiri",
                            "points":  5
                        },
                        {
                            "text":  "long island",
                            "points":  3
                        },
                        {
                            "text":  "mimosa",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110062,
        "question":  "Name something about George Washington that a woman might think was hot.",
        "answers":  [
                        {
                            "text":  "trendy hair/wig",
                            "points":  37
                        },
                        {
                            "text":  "potus/power",
                            "points":  26
                        },
                        {
                            "text":  "wooden teeth",
                            "points":  10
                        },
                        {
                            "text":  "honest/cut tree",
                            "points":  7
                        },
                        {
                            "text":  "dude's smart",
                            "points":  4
                        },
                        {
                            "text":  "brave soldier",
                            "points":  4
                        },
                        {
                            "text":  "tall glass of water",
                            "points":  4
                        },
                        {
                            "text":  "sexy outfit",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110063,
        "question":  "Bob said, \"My new girlfriend is great -- there's just one problem. She always wants to make out in the middle of\" what?",
        "answers":  [
                        {
                            "text":  "tv show/the game",
                            "points":  37
                        },
                        {
                            "text":  "church",
                            "points":  25
                        },
                        {
                            "text":  "a meal",
                            "points":  15
                        },
                        {
                            "text":  "the street",
                            "points":  5
                        },
                        {
                            "text":  "the night/a nap",
                            "points":  4
                        },
                        {
                            "text":  "store",
                            "points":  3
                        },
                        {
                            "text":  "driving/traffic",
                            "points":  3
                        },
                        {
                            "text":  "a conversation",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110064,
        "question":  "Name a natural disaster that might describe your lovemaking style.",
        "answers":  [
                        {
                            "text":  "tornado/twister",
                            "points":  36
                        },
                        {
                            "text":  "earthquake",
                            "points":  27
                        },
                        {
                            "text":  "hurricane",
                            "points":  11
                        },
                        {
                            "text":  "tsunami",
                            "points":  6
                        },
                        {
                            "text":  "lightning/thunder",
                            "points":  4
                        },
                        {
                            "text":  "flash flood",
                            "points":  4
                        },
                        {
                            "text":  "drought",
                            "points":  3
                        },
                        {
                            "text":  "volcano",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110065,
        "question":  "Tell me something grandpa might do if he ate one of Snoop Dogg's pot brownies.",
        "answers":  [
                        {
                            "text":  "conk out",
                            "points":  36
                        },
                        {
                            "text":  "dance/strip",
                            "points":  22
                        },
                        {
                            "text":  "laugh/smile",
                            "points":  13
                        },
                        {
                            "text":  "get munchies",
                            "points":  11
                        },
                        {
                            "text":  "hit on granny",
                            "points":  4
                        },
                        {
                            "text":  "run/streak",
                            "points":  3
                        },
                        {
                            "text":  "sing/rap",
                            "points":  3
                        },
                        {
                            "text":  "die",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110066,
        "question":  "Name a food that would be dangerous to fry when you're naked.",
        "answers":  [
                        {
                            "text":  "bacon",
                            "points":  35
                        },
                        {
                            "text":  "chicken",
                            "points":  23
                        },
                        {
                            "text":  "fries/potatoes",
                            "points":  16
                        },
                        {
                            "text":  "turkey",
                            "points":  9
                        },
                        {
                            "text":  "fish",
                            "points":  5
                        },
                        {
                            "text":  "eggs",
                            "points":  2
                        },
                        {
                            "text":  "onion rings",
                            "points":  2
                        },
                        {
                            "text":  "sausage/franks",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110067,
        "question":  "Tell me something a drunk person might do just like a baby.",
        "answers":  [
                        {
                            "text":  "cry/whine",
                            "points":  35
                        },
                        {
                            "text":  "go in their pants",
                            "points":  19
                        },
                        {
                            "text":  "sleep/snore",
                            "points":  16
                        },
                        {
                            "text":  "babble",
                            "points":  6
                        },
                        {
                            "text":  "drool",
                            "points":  5
                        },
                        {
                            "text":  "puke",
                            "points":  5
                        },
                        {
                            "text":  "crawl",
                            "points":  4
                        },
                        {
                            "text":  "walk",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110068,
        "question":  "We asked 100 married people... Fill in the blank: Looks may fade, but my spouse's ______ better stay the same.",
        "answers":  [
                        {
                            "text":  "personality",
                            "points":  34
                        },
                        {
                            "text":  "wealth",
                            "points":  18
                        },
                        {
                            "text":  "love for me",
                            "points":  11
                        },
                        {
                            "text":  "weight/smokin' bod",
                            "points":  11
                        },
                        {
                            "text":  "heart/kindness",
                            "points":  10
                        },
                        {
                            "text":  "work ethic",
                            "points":  4
                        },
                        {
                            "text":  "hair/hairline",
                            "points":  3
                        },
                        {
                            "text":  "smile",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110069,
        "question":  "If you were covered in quills like a porcupine, name something you might have trouble doing.",
        "answers":  [
                        {
                            "text":  "sleepin'",
                            "points":  24
                        },
                        {
                            "text":  "hug & kissin'",
                            "points":  22
                        },
                        {
                            "text":  "gettin' dressed",
                            "points":  13
                        },
                        {
                            "text":  "sittin'",
                            "points":  8
                        },
                        {
                            "text":  "the naughty",
                            "points":  8
                        },
                        {
                            "text":  "bathin'",
                            "points":  7
                        },
                        {
                            "text":  "scratchin'",
                            "points":  7
                        },
                        {
                            "text":  "potty/wipin'",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  110070,
        "question":  "Name a place where you might stick your bottom in the air.",
        "answers":  [
                        {
                            "text":  "yoga/gym",
                            "points":  20
                        },
                        {
                            "text":  "doctor",
                            "points":  16
                        },
                        {
                            "text":  "beach",
                            "points":  14
                        },
                        {
                            "text":  "bar/nightclub",
                            "points":  13
                        },
                        {
                            "text":  "bedroom",
                            "points":  11
                        },
                        {
                            "text":  "car window",
                            "points":  8
                        },
                        {
                            "text":  "pool",
                            "points":  7
                        },
                        {
                            "text":  "bathroom",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  110071,
        "question":  "Name a reason you couldn't be paid to go to your high school reunion.",
        "answers":  [
                        {
                            "text":  "hated everyone",
                            "points":  45
                        },
                        {
                            "text":  "gained weight",
                            "points":  16
                        },
                        {
                            "text":  "boring/no interest",
                            "points":  10
                        },
                        {
                            "text":  "ex is going",
                            "points":  9
                        },
                        {
                            "text":  "too far",
                            "points":  6
                        },
                        {
                            "text":  "had bad reputation",
                            "points":  3
                        },
                        {
                            "text":  "didn't graduate",
                            "points":  2
                        },
                        {
                            "text":  "i look 90",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110072,
        "question":  "Fill in the blank: I'm so happy, I could ______.",
        "answers":  [
                        {
                            "text":  "cry",
                            "points":  43
                        },
                        {
                            "text":  "scream",
                            "points":  12
                        },
                        {
                            "text":  "burst/explode",
                            "points":  9
                        },
                        {
                            "text":  "poop/fart",
                            "points":  8
                        },
                        {
                            "text":  "jump for joy",
                            "points":  6
                        },
                        {
                            "text":  "sing",
                            "points":  5
                        },
                        {
                            "text":  "dance",
                            "points":  5
                        },
                        {
                            "text":  "smile forever!",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  110073,
        "question":  "Mirror, mirror, on the wall, who's the richest TV host of them all?",
        "answers":  [
                        {
                            "text":  "steve harvey",
                            "points":  42
                        },
                        {
                            "text":  "pat sajak",
                            "points":  14
                        },
                        {
                            "text":  "oprah",
                            "points":  13
                        },
                        {
                            "text":  "ryan seacrest",
                            "points":  12
                        },
                        {
                            "text":  "jay leno",
                            "points":  3
                        },
                        {
                            "text":  "ellen",
                            "points":  3
                        },
                        {
                            "text":  "jimmy fallon",
                            "points":  3
                        },
                        {
                            "text":  "jimmy kimmel",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110074,
        "question":  "We asked 100 women... Why do you sometimes like wearing a face mask in public?",
        "answers":  [
                        {
                            "text":  "no makeup!",
                            "points":  33
                        },
                        {
                            "text":  "zits galore",
                            "points":  21
                        },
                        {
                            "text":  "protect my health",
                            "points":  12
                        },
                        {
                            "text":  "hide/incognito",
                            "points":  10
                        },
                        {
                            "text":  "cover frown/mouth",
                            "points":  6
                        },
                        {
                            "text":  "my breath is vile",
                            "points":  5
                        },
                        {
                            "text":  "keep smells out",
                            "points":  3
                        },
                        {
                            "text":  "i'm rather ugly",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110075,
        "question":  "We asked 100 married women... What would your best friend get you as a gift if you got divorced?",
        "answers":  [
                        {
                            "text":  "vacay/girls' trip",
                            "points":  31
                        },
                        {
                            "text":  "wine/booze",
                            "points":  16
                        },
                        {
                            "text":  "spa day/massage",
                            "points":  12
                        },
                        {
                            "text":  "a date/dating app",
                            "points":  9
                        },
                        {
                            "text":  "flowers",
                            "points":  9
                        },
                        {
                            "text":  "a facelift",
                            "points":  7
                        },
                        {
                            "text":  "ice cream/food",
                            "points":  6
                        },
                        {
                            "text":  "a pet",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110076,
        "question":  "Fill in the blank: God sent me a text message, and it said \"Stop ______ing so much.\"",
        "answers":  [
                        {
                            "text":  "swearing",
                            "points":  27
                        },
                        {
                            "text":  "worry/stressing",
                            "points":  25
                        },
                        {
                            "text":  "complaining",
                            "points":  22
                        },
                        {
                            "text":  "drinking",
                            "points":  5
                        },
                        {
                            "text":  "lying",
                            "points":  5
                        },
                        {
                            "text":  "texting",
                            "points":  4
                        },
                        {
                            "text":  "vegging/slacking",
                            "points":  3
                        },
                        {
                            "text":  "asking for so much",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110077,
        "question":  "Name something a crab might crab about to its friends.",
        "answers":  [
                        {
                            "text":  "get eaten/caught",
                            "points":  25
                        },
                        {
                            "text":  "heat/cold",
                            "points":  17
                        },
                        {
                            "text":  "pollution",
                            "points":  16
                        },
                        {
                            "text":  "sand everywhere",
                            "points":  10
                        },
                        {
                            "text":  "food/fish",
                            "points":  8
                        },
                        {
                            "text":  "cramped shell",
                            "points":  8
                        },
                        {
                            "text":  "sore pincers",
                            "points":  7
                        },
                        {
                            "text":  "bein' a shortie",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110078,
        "question":  "Name something that makes a guy a great kisser.",
        "answers":  [
                        {
                            "text":  "the lips!",
                            "points":  38
                        },
                        {
                            "text":  "no slobber",
                            "points":  10
                        },
                        {
                            "text":  "passion/love",
                            "points":  10
                        },
                        {
                            "text":  "tongue skills",
                            "points":  10
                        },
                        {
                            "text":  "practice",
                            "points":  8
                        },
                        {
                            "text":  "fresh breath",
                            "points":  7
                        },
                        {
                            "text":  "gentle",
                            "points":  7
                        },
                        {
                            "text":  "holds me",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110079,
        "question":  "We asked 100 married women... When your husband is nude, what animal does he remind you of?",
        "answers":  [
                        {
                            "text":  "hairy ape",
                            "points":  35
                        },
                        {
                            "text":  "elephant",
                            "points":  19
                        },
                        {
                            "text":  "bear",
                            "points":  13
                        },
                        {
                            "text":  "giraffe",
                            "points":  9
                        },
                        {
                            "text":  "lion",
                            "points":  8
                        },
                        {
                            "text":  "tiger",
                            "points":  4
                        },
                        {
                            "text":  "snake",
                            "points":  2
                        },
                        {
                            "text":  "walrus",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110080,
        "question":  "When grandpa and grandma have been making mad love, name something you might find scattered by the bed.",
        "answers":  [
                        {
                            "text":  "garb/long johns",
                            "points":  34
                        },
                        {
                            "text":  "teeth",
                            "points":  31
                        },
                        {
                            "text":  "viagra/meds",
                            "points":  9
                        },
                        {
                            "text":  "sheets/pillows",
                            "points":  5
                        },
                        {
                            "text":  "diapers",
                            "points":  4
                        },
                        {
                            "text":  "canes/walkers",
                            "points":  3
                        },
                        {
                            "text":  "bottles of lube",
                            "points":  3
                        },
                        {
                            "text":  "rose petals",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110081,
        "question":  "What would you do if you found out your significant other was your cousin?",
        "answers":  [
                        {
                            "text":  "buh-bye!",
                            "points":  29
                        },
                        {
                            "text":  "cry/freak out",
                            "points":  22
                        },
                        {
                            "text":  "nothing",
                            "points":  14
                        },
                        {
                            "text":  "get sick/faint",
                            "points":  9
                        },
                        {
                            "text":  "find out how close",
                            "points":  7
                        },
                        {
                            "text":  "keep it a secret",
                            "points":  4
                        },
                        {
                            "text":  "laugh",
                            "points":  4
                        },
                        {
                            "text":  "move/to the south",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110082,
        "question":  "Fill in the blank: My body is like my car because it's always ______.",
        "answers":  [
                        {
                            "text":  "broken down/stalled",
                            "points":  26
                        },
                        {
                            "text":  "ready/running",
                            "points":  21
                        },
                        {
                            "text":  "empty/on fumes",
                            "points":  18
                        },
                        {
                            "text":  "clean/shiny",
                            "points":  12
                        },
                        {
                            "text":  "idle/at home",
                            "points":  5
                        },
                        {
                            "text":  "overheating",
                            "points":  4
                        },
                        {
                            "text":  "dirty",
                            "points":  3
                        },
                        {
                            "text":  "full of gas",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110083,
        "question":  "Name an animal some men sound like when they make love.",
        "answers":  [
                        {
                            "text":  "pig",
                            "points":  42
                        },
                        {
                            "text":  "bear",
                            "points":  10
                        },
                        {
                            "text":  "bull/cow",
                            "points":  10
                        },
                        {
                            "text":  "ape/monkey",
                            "points":  8
                        },
                        {
                            "text":  "dog",
                            "points":  7
                        },
                        {
                            "text":  "horse",
                            "points":  7
                        },
                        {
                            "text":  "bird/chicken",
                            "points":  4
                        },
                        {
                            "text":  "donkey",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110084,
        "question":  "Name someone you'd never want to take a shower with.",
        "answers":  [
                        {
                            "text":  "mom/daddy-o",
                            "points":  32
                        },
                        {
                            "text":  "dog/animal",
                            "points":  13
                        },
                        {
                            "text":  "sibling",
                            "points":  11
                        },
                        {
                            "text":  "gram/gramps",
                            "points":  9
                        },
                        {
                            "text":  "d-list celeb/politician",
                            "points":  9
                        },
                        {
                            "text":  "ex",
                            "points":  7
                        },
                        {
                            "text":  "my kid/adult son",
                            "points":  5
                        },
                        {
                            "text":  "stranger",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  110085,
        "question":  "In heaven, when you turn on the faucet, what comes out?",
        "answers":  [
                        {
                            "text":  "cocktails",
                            "points":  26
                        },
                        {
                            "text":  "liquid gold",
                            "points":  18
                        },
                        {
                            "text":  "water/la croix",
                            "points":  17
                        },
                        {
                            "text":  "money",
                            "points":  13
                        },
                        {
                            "text":  "chocolate/milk",
                            "points":  7
                        },
                        {
                            "text":  "soda/mtn. dew",
                            "points":  6
                        },
                        {
                            "text":  "lemonade",
                            "points":  2
                        },
                        {
                            "text":  "rainbows",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110086,
        "question":  "Name a baby's first word that tells his parents he's going to be a cowboy.",
        "answers":  [
                        {
                            "text":  "yeehaw!",
                            "points":  40
                        },
                        {
                            "text":  "horsey",
                            "points":  16
                        },
                        {
                            "text":  "howdy",
                            "points":  12
                        },
                        {
                            "text":  "giddy-up",
                            "points":  6
                        },
                        {
                            "text":  "whoa",
                            "points":  4
                        },
                        {
                            "text":  "cow",
                            "points":  4
                        },
                        {
                            "text":  "moo",
                            "points":  4
                        },
                        {
                            "text":  "yippee-ki-yay!",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110087,
        "question":  "We asked 100 men... If you had a mating call, what musical instrument would it sound like?",
        "answers":  [
                        {
                            "text":  "trumpet",
                            "points":  36
                        },
                        {
                            "text":  "saxophone",
                            "points":  12
                        },
                        {
                            "text":  "guitar",
                            "points":  12
                        },
                        {
                            "text":  "drums",
                            "points":  11
                        },
                        {
                            "text":  "piano",
                            "points":  6
                        },
                        {
                            "text":  "flute",
                            "points":  6
                        },
                        {
                            "text":  "french horn",
                            "points":  4
                        },
                        {
                            "text":  "violin",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110088,
        "question":  "We asked 100 women... If you really want to see your man sweat, ask him for what?",
        "answers":  [
                        {
                            "text":  "money",
                            "points":  34
                        },
                        {
                            "text":  "his phone",
                            "points":  15
                        },
                        {
                            "text":  "engagem't ring",
                            "points":  10
                        },
                        {
                            "text":  "car/rolls royce",
                            "points":  9
                        },
                        {
                            "text":  "divorce",
                            "points":  7
                        },
                        {
                            "text":  "truth/explanation",
                            "points":  7
                        },
                        {
                            "text":  "sex/threesome",
                            "points":  5
                        },
                        {
                            "text":  "a baby",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110089,
        "question":  "We asked 100 parents... Name something you do that embarrasses your kids in front of their friends.",
        "answers":  [
                        {
                            "text":  "kiss/hug/\"love u\"",
                            "points":  33
                        },
                        {
                            "text":  "sing",
                            "points":  15
                        },
                        {
                            "text":  "share pics/stories",
                            "points":  13
                        },
                        {
                            "text":  "dance",
                            "points":  11
                        },
                        {
                            "text":  "talk too loudly",
                            "points":  7
                        },
                        {
                            "text":  "dad jokes",
                            "points":  5
                        },
                        {
                            "text":  "2-toot salute",
                            "points":  3
                        },
                        {
                            "text":  "ask lotsa questions",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110090,
        "question":  "Name a specific sound you'd be shocked to hear coming from a casket at a funeral.",
        "answers":  [
                        {
                            "text":  "talking/yelling",
                            "points":  25
                        },
                        {
                            "text":  "moaning",
                            "points":  14
                        },
                        {
                            "text":  "knocking",
                            "points":  12
                        },
                        {
                            "text":  "farting",
                            "points":  11
                        },
                        {
                            "text":  "sneeze/cough",
                            "points":  8
                        },
                        {
                            "text":  "snoring",
                            "points":  7
                        },
                        {
                            "text":  "singing",
                            "points":  7
                        },
                        {
                            "text":  "laughing",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  110091,
        "question":  "Name a slang word that Americans call their bottom.",
        "answers":  [
                        {
                            "text":  "butt",
                            "points":  24
                        },
                        {
                            "text":  "booty",
                            "points":  24
                        },
                        {
                            "text":  "arse",
                            "points":  15
                        },
                        {
                            "text":  "tush",
                            "points":  12
                        },
                        {
                            "text":  "rump",
                            "points":  4
                        },
                        {
                            "text":  "bum",
                            "points":  4
                        },
                        {
                            "text":  "badonkadonk",
                            "points":  4
                        },
                        {
                            "text":  "fanny",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110092,
        "question":  "We asked 100 men... Name something you keep in your desk at work if you've got a lot of sexy coworkers.",
        "answers":  [
                        {
                            "text":  "mints/candy",
                            "points":  21
                        },
                        {
                            "text":  "cologne",
                            "points":  17
                        },
                        {
                            "text":  "mouthwash/spray",
                            "points":  13
                        },
                        {
                            "text":  "condoms",
                            "points":  11
                        },
                        {
                            "text":  "deodorant",
                            "points":  10
                        },
                        {
                            "text":  "pic of wife/mate",
                            "points":  8
                        },
                        {
                            "text":  "cam/video cam",
                            "points":  7
                        },
                        {
                            "text":  "binoculars/telescope",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110093,
        "question":  "We asked 100 married men... Name a question your wife asks you that you pretend not to hear.",
        "answers":  [
                        {
                            "text":  "you listening?",
                            "points":  17
                        },
                        {
                            "text":  "do i look fat?",
                            "points":  14
                        },
                        {
                            "text":  "take out trash?",
                            "points":  14
                        },
                        {
                            "text":  "help clean/laundry?",
                            "points":  13
                        },
                        {
                            "text":  "can i have money?",
                            "points":  10
                        },
                        {
                            "text":  "go see my fam?",
                            "points":  9
                        },
                        {
                            "text":  "what ya thinkin'?",
                            "points":  9
                        },
                        {
                            "text":  "how was your day?",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110094,
        "question":  "Name something you hide before giving someone a tour of your house.",
        "answers":  [
                        {
                            "text":  "dirty clothes",
                            "points":  43
                        },
                        {
                            "text":  "adult toys",
                            "points":  15
                        },
                        {
                            "text":  "dirty dishes",
                            "points":  10
                        },
                        {
                            "text":  "jewelry",
                            "points":  7
                        },
                        {
                            "text":  "nudie pix/flix",
                            "points":  4
                        },
                        {
                            "text":  "medications",
                            "points":  4
                        },
                        {
                            "text":  "$/wallet",
                            "points":  3
                        },
                        {
                            "text":  "litter box",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110095,
        "question":  "Name a reason a married man might say he went to a singles' bar.",
        "answers":  [
                        {
                            "text":  "help bud/wingman",
                            "points":  38
                        },
                        {
                            "text":  "meet ladies. duh",
                            "points":  14
                        },
                        {
                            "text":  "drink/thirsty",
                            "points":  13
                        },
                        {
                            "text":  "bored",
                            "points":  6
                        },
                        {
                            "text":  "work party/mtg.",
                            "points":  6
                        },
                        {
                            "text":  "bachelor party",
                            "points":  5
                        },
                        {
                            "text":  "space/be alone",
                            "points":  4
                        },
                        {
                            "text":  "research/to look",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110096,
        "question":  "If you were writing a Yelp review about your stay in prison, name a complaint you might have.",
        "answers":  [
                        {
                            "text":  "food sucks",
                            "points":  28
                        },
                        {
                            "text":  "no privacy/cellmate",
                            "points":  15
                        },
                        {
                            "text":  "hard/lumpy bed",
                            "points":  14
                        },
                        {
                            "text":  "noisy neighbors",
                            "points":  11
                        },
                        {
                            "text":  "dirty/rats",
                            "points":  7
                        },
                        {
                            "text":  "rules/can't leave",
                            "points":  6
                        },
                        {
                            "text":  "single-ply t.p.",
                            "points":  4
                        },
                        {
                            "text":  "small rooms",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110097,
        "question":  "Name something a caveman has that turns all the cavewomen on.",
        "answers":  [
                        {
                            "text":  "big club",
                            "points":  26
                        },
                        {
                            "text":  "muscles/abs",
                            "points":  16
                        },
                        {
                            "text":  "long hair/beard",
                            "points":  16
                        },
                        {
                            "text":  "sexy loincloth",
                            "points":  11
                        },
                        {
                            "text":  "cozy fire",
                            "points":  10
                        },
                        {
                            "text":  "hunting skills/food",
                            "points":  4
                        },
                        {
                            "text":  "tools",
                            "points":  3
                        },
                        {
                            "text":  "his own cave",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110098,
        "question":  "You might think you're dying if you wake up and see who standing over you?",
        "answers":  [
                        {
                            "text":  "god/jesus",
                            "points":  23
                        },
                        {
                            "text":  "grim reaper",
                            "points":  16
                        },
                        {
                            "text":  "parents",
                            "points":  13
                        },
                        {
                            "text":  "clergy",
                            "points":  11
                        },
                        {
                            "text":  "doctor",
                            "points":  9
                        },
                        {
                            "text":  "angel",
                            "points":  9
                        },
                        {
                            "text":  "the devil",
                            "points":  4
                        },
                        {
                            "text":  "grandparents",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110099,
        "question":  "Name something with the word \"cream\" that a stripper might call herself.",
        "answers":  [
                        {
                            "text":  "ice cream",
                            "points":  20
                        },
                        {
                            "text":  "whipped cream",
                            "points":  17
                        },
                        {
                            "text":  "cream pie/coconut",
                            "points":  15
                        },
                        {
                            "text":  "sweet cream",
                            "points":  11
                        },
                        {
                            "text":  "creamsicle",
                            "points":  10
                        },
                        {
                            "text":  "buttercream",
                            "points":  7
                        },
                        {
                            "text":  "cream puff",
                            "points":  6
                        },
                        {
                            "text":  "peaches 'n cream",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110100,
        "question":  "Susan got too much Botox and couldn't show any emotion when she went where?",
        "answers":  [
                        {
                            "text":  "funeral",
                            "points":  50
                        },
                        {
                            "text":  "comedy show",
                            "points":  15
                        },
                        {
                            "text":  "wedding",
                            "points":  7
                        },
                        {
                            "text":  "movies",
                            "points":  4
                        },
                        {
                            "text":  "church",
                            "points":  3
                        },
                        {
                            "text":  "nightclub",
                            "points":  3
                        },
                        {
                            "text":  "party/b-day",
                            "points":  3
                        },
                        {
                            "text":  "theme park",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110101,
        "question":  "Name a place where saying the wrong thing can get you in big trouble.",
        "answers":  [
                        {
                            "text":  "work",
                            "points":  28
                        },
                        {
                            "text":  "court",
                            "points":  25
                        },
                        {
                            "text":  "police station",
                            "points":  7
                        },
                        {
                            "text":  "airport",
                            "points":  7
                        },
                        {
                            "text":  "school",
                            "points":  6
                        },
                        {
                            "text":  "prison",
                            "points":  6
                        },
                        {
                            "text":  "church",
                            "points":  5
                        },
                        {
                            "text":  "bar",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110102,
        "question":  "Name something a really dumb guy might have tattooed on his body so he doesn't forget it.",
        "answers":  [
                        {
                            "text":  "his name",
                            "points":  28
                        },
                        {
                            "text":  "boo's name",
                            "points":  15
                        },
                        {
                            "text":  "phone #",
                            "points":  14
                        },
                        {
                            "text":  "social security #",
                            "points":  9
                        },
                        {
                            "text":  "address",
                            "points":  8
                        },
                        {
                            "text":  "birthday",
                            "points":  6
                        },
                        {
                            "text":  "anniversary",
                            "points":  5
                        },
                        {
                            "text":  "pin #",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110103,
        "question":  "I see London, I see France, I see you're not wearing underpants. Why?",
        "answers":  [
                        {
                            "text":  "bathing",
                            "points":  27
                        },
                        {
                            "text":  "no clean ones",
                            "points":  26
                        },
                        {
                            "text":  "undies too tight",
                            "points":  10
                        },
                        {
                            "text":  "too hot",
                            "points":  10
                        },
                        {
                            "text":  "in bed/jammies",
                            "points":  5
                        },
                        {
                            "text":  "like the freedom",
                            "points":  4
                        },
                        {
                            "text":  "show off/sexy",
                            "points":  3
                        },
                        {
                            "text":  "wearin' swimsuit",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110104,
        "question":  "Name a place people shouldn't take off their shoes if they have stinky feet.",
        "answers":  [
                        {
                            "text":  "someone's house",
                            "points":  25
                        },
                        {
                            "text":  "airplane",
                            "points":  14
                        },
                        {
                            "text":  "restaurant",
                            "points":  12
                        },
                        {
                            "text":  "work",
                            "points":  12
                        },
                        {
                            "text":  "church",
                            "points":  10
                        },
                        {
                            "text":  "store/shoe shop",
                            "points":  7
                        },
                        {
                            "text":  "theater",
                            "points":  5
                        },
                        {
                            "text":  "gym",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110105,
        "question":  "Give me a term of endearment starting with \"honey\" that you might call your partner.",
        "answers":  [
                        {
                            "text":  "honey bear",
                            "points":  22
                        },
                        {
                            "text":  "honeybun/buns",
                            "points":  18
                        },
                        {
                            "text":  "honey bunny",
                            "points":  10
                        },
                        {
                            "text":  "honey dear",
                            "points":  9
                        },
                        {
                            "text":  "honeybunch",
                            "points":  9
                        },
                        {
                            "text":  "honey pie",
                            "points":  9
                        },
                        {
                            "text":  "honey boo",
                            "points":  7
                        },
                        {
                            "text":  "honey baby",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110106,
        "question":  "Past or present, name a celebrity who's been married at least three times.",
        "answers":  [
                        {
                            "text":  "elizabeth taylor",
                            "points":  43
                        },
                        {
                            "text":  "jennifer lopez",
                            "points":  11
                        },
                        {
                            "text":  "steve harvey",
                            "points":  9
                        },
                        {
                            "text":  "zsa zsa gabor",
                            "points":  7
                        },
                        {
                            "text":  "donald trump",
                            "points":  6
                        },
                        {
                            "text":  "angelina jolie",
                            "points":  4
                        },
                        {
                            "text":  "kim kardashian",
                            "points":  4
                        },
                        {
                            "text":  "tom cruise",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110107,
        "question":  "Name something a cheerleader puts in the jockstrap of the quarterback who dumped her.",
        "answers":  [
                        {
                            "text":  "itching powder",
                            "points":  34
                        },
                        {
                            "text":  "ointment/bengay",
                            "points":  20
                        },
                        {
                            "text":  "hot sauce/pepper",
                            "points":  16
                        },
                        {
                            "text":  "bugs/ants",
                            "points":  8
                        },
                        {
                            "text":  "poison ivy",
                            "points":  3
                        },
                        {
                            "text":  "nair",
                            "points":  2
                        },
                        {
                            "text":  "superglue",
                            "points":  2
                        },
                        {
                            "text":  "tacks",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110108,
        "question":  "Social media is the best way to spy on your friends to find out if they are what?",
        "answers":  [
                        {
                            "text":  "lying",
                            "points":  30
                        },
                        {
                            "text":  "in a relationship",
                            "points":  20
                        },
                        {
                            "text":  "talking about me",
                            "points":  10
                        },
                        {
                            "text":  "cheating",
                            "points":  9
                        },
                        {
                            "text":  "not including me",
                            "points":  8
                        },
                        {
                            "text":  "rich/successful",
                            "points":  4
                        },
                        {
                            "text":  "straight or gay",
                            "points":  3
                        },
                        {
                            "text":  "traveling",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110109,
        "question":  "Fill in the blank with a word starting with the letter S: I wish I were ______.",
        "answers":  [
                        {
                            "text":  "smart",
                            "points":  24
                        },
                        {
                            "text":  "skinny/slim",
                            "points":  20
                        },
                        {
                            "text":  "sexy",
                            "points":  18
                        },
                        {
                            "text":  "sleeping",
                            "points":  13
                        },
                        {
                            "text":  "single",
                            "points":  4
                        },
                        {
                            "text":  "short",
                            "points":  3
                        },
                        {
                            "text":  "super/superman",
                            "points":  3
                        },
                        {
                            "text":  "snakelike",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110110,
        "question":  "Name something Leonardo da Vinci did right before he painted Mona Lisa to make her smile.",
        "answers":  [
                        {
                            "text":  "told a joke",
                            "points":  23
                        },
                        {
                            "text":  "farted",
                            "points":  18
                        },
                        {
                            "text":  "made love to her",
                            "points":  9
                        },
                        {
                            "text":  "flashed her",
                            "points":  9
                        },
                        {
                            "text":  "complimented her",
                            "points":  9
                        },
                        {
                            "text":  "tickled her",
                            "points":  8
                        },
                        {
                            "text":  "kissed her",
                            "points":  7
                        },
                        {
                            "text":  "gave her a drink",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110111,
        "question":  "Name something a nerd might do when a girl kisses him for the first time.",
        "answers":  [
                        {
                            "text":  "blush",
                            "points":  39
                        },
                        {
                            "text":  "laugh/smile",
                            "points":  12
                        },
                        {
                            "text":  "pull away/panic",
                            "points":  9
                        },
                        {
                            "text":  "faint",
                            "points":  8
                        },
                        {
                            "text":  "get turned on",
                            "points":  7
                        },
                        {
                            "text":  "cry",
                            "points":  5
                        },
                        {
                            "text":  "puke",
                            "points":  3
                        },
                        {
                            "text":  "clap & cheer",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110112,
        "question":  "Tell me something you suspect your neighbor does just to annoy you.",
        "answers":  [
                        {
                            "text":  "yard work/at 6 am",
                            "points":  33
                        },
                        {
                            "text":  "blasts music",
                            "points":  22
                        },
                        {
                            "text":  "dog out/poops",
                            "points":  11
                        },
                        {
                            "text":  "smokes",
                            "points":  7
                        },
                        {
                            "text":  "yells",
                            "points":  4
                        },
                        {
                            "text":  "blocks driveway",
                            "points":  3
                        },
                        {
                            "text":  "has trashy yard",
                            "points":  3
                        },
                        {
                            "text":  "watches me",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110113,
        "question":  "Name a creature you might try to escape from by climbing a tree.",
        "answers":  [
                        {
                            "text":  "vicious chihuahua",
                            "points":  31
                        },
                        {
                            "text":  "bear",
                            "points":  25
                        },
                        {
                            "text":  "lion",
                            "points":  9
                        },
                        {
                            "text":  "wolf",
                            "points":  6
                        },
                        {
                            "text":  "gator/croc",
                            "points":  5
                        },
                        {
                            "text":  "moose",
                            "points":  4
                        },
                        {
                            "text":  "hippo",
                            "points":  3
                        },
                        {
                            "text":  "rat/mouse",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110114,
        "question":  "Who is the greatest rapper of all time?",
        "answers":  [
                        {
                            "text":  "snoop dogg",
                            "points":  25
                        },
                        {
                            "text":  "tupac",
                            "points":  20
                        },
                        {
                            "text":  "eminem",
                            "points":  16
                        },
                        {
                            "text":  "dr. dre",
                            "points":  9
                        },
                        {
                            "text":  "ll cool j",
                            "points":  5
                        },
                        {
                            "text":  "the notorious b.i.g.",
                            "points":  5
                        },
                        {
                            "text":  "50 cent",
                            "points":  3
                        },
                        {
                            "text":  "jay-z",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110115,
        "question":  "Name a reason you might think your date is a witch.",
        "answers":  [
                        {
                            "text":  "magic/spells",
                            "points":  24
                        },
                        {
                            "text":  "flew on broom",
                            "points":  18
                        },
                        {
                            "text":  "black garb/hat",
                            "points":  15
                        },
                        {
                            "text":  "ugly face/warty nose",
                            "points":  8
                        },
                        {
                            "text":  "her cackle",
                            "points":  6
                        },
                        {
                            "text":  "mean/scary",
                            "points":  6
                        },
                        {
                            "text":  "has black cat",
                            "points":  5
                        },
                        {
                            "text":  "cauldron/boils frogs",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110116,
        "question":  "It would be silly to see the stars of \"The Fast and Furious\" riding what in their next movie?",
        "answers":  [
                        {
                            "text":  "bikes/tricycles",
                            "points":  23
                        },
                        {
                            "text":  "horse/& buggy",
                            "points":  21
                        },
                        {
                            "text":  "scooters",
                            "points":  12
                        },
                        {
                            "text":  "beetles/tiny cars",
                            "points":  11
                        },
                        {
                            "text":  "camels",
                            "points":  7
                        },
                        {
                            "text":  "go-karts",
                            "points":  4
                        },
                        {
                            "text":  "mopeds",
                            "points":  4
                        },
                        {
                            "text":  "golf carts",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110117,
        "question":  "The biggest prank in a nudist colony is to put what on someone's chair?",
        "answers":  [
                        {
                            "text":  "whoopee cushion",
                            "points":  22
                        },
                        {
                            "text":  "glue",
                            "points":  16
                        },
                        {
                            "text":  "chocolate/food",
                            "points":  16
                        },
                        {
                            "text":  "tack/nail",
                            "points":  11
                        },
                        {
                            "text":  "vaseline/lotion/oil",
                            "points":  8
                        },
                        {
                            "text":  "poop",
                            "points":  5
                        },
                        {
                            "text":  "sand",
                            "points":  5
                        },
                        {
                            "text":  "ice",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110118,
        "question":  "Besides a ball, name something you pass.",
        "answers":  [
                        {
                            "text":  "gas",
                            "points":  45
                        },
                        {
                            "text":  "test",
                            "points":  10
                        },
                        {
                            "text":  "food/plate",
                            "points":  8
                        },
                        {
                            "text":  "a joint",
                            "points":  5
                        },
                        {
                            "text":  "notes/letters",
                            "points":  5
                        },
                        {
                            "text":  "slow car",
                            "points":  4
                        },
                        {
                            "text":  "the baton",
                            "points":  4
                        },
                        {
                            "text":  "\"the buck\"",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110119,
        "question":  "The Wicked Witch of the West reminds me a lot of my who?",
        "answers":  [
                        {
                            "text":  "witch-in-law",
                            "points":  34
                        },
                        {
                            "text":  "mom/stepmom",
                            "points":  11
                        },
                        {
                            "text":  "teacher",
                            "points":  10
                        },
                        {
                            "text":  "neighbor",
                            "points":  7
                        },
                        {
                            "text":  "boss/coworker",
                            "points":  7
                        },
                        {
                            "text":  "ex",
                            "points":  6
                        },
                        {
                            "text":  "grandma",
                            "points":  5
                        },
                        {
                            "text":  "aunt/agnes",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110120,
        "question":  "Name something a woman can hide in her wig that's too big for a man to hide under a toupee.",
        "answers":  [
                        {
                            "text":  "money/purse",
                            "points":  33
                        },
                        {
                            "text":  "phone",
                            "points":  13
                        },
                        {
                            "text":  "gun/weapon",
                            "points":  11
                        },
                        {
                            "text":  "comb/brush",
                            "points":  11
                        },
                        {
                            "text":  "pen/pencil",
                            "points":  5
                        },
                        {
                            "text":  "makeup/lipstick",
                            "points":  4
                        },
                        {
                            "text":  "flask/booze",
                            "points":  4
                        },
                        {
                            "text":  "food/banana",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110121,
        "question":  "You might get turned off if you find out your date has a lot of what?",
        "answers":  [
                        {
                            "text":  "hair/back hair",
                            "points":  28
                        },
                        {
                            "text":  "pimples",
                            "points":  16
                        },
                        {
                            "text":  "boos/exes",
                            "points":  15
                        },
                        {
                            "text":  "debt",
                            "points":  10
                        },
                        {
                            "text":  "kids",
                            "points":  4
                        },
                        {
                            "text":  "warts",
                            "points":  4
                        },
                        {
                            "text":  "b.o.",
                            "points":  4
                        },
                        {
                            "text":  "std's",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110122,
        "question":  "Name a kind of cheese a male stripper might call himself.",
        "answers":  [
                        {
                            "text":  "cheddar",
                            "points":  30
                        },
                        {
                            "text":  "gouda",
                            "points":  19
                        },
                        {
                            "text":  "pepper jack",
                            "points":  10
                        },
                        {
                            "text":  "swiss",
                            "points":  7
                        },
                        {
                            "text":  "american",
                            "points":  6
                        },
                        {
                            "text":  "brie",
                            "points":  4
                        },
                        {
                            "text":  "muenster",
                            "points":  4
                        },
                        {
                            "text":  "string cheese",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110123,
        "question":  "Name a dangerous animal that the worst petting zoo ever would have in it.",
        "answers":  [
                        {
                            "text":  "lion",
                            "points":  24
                        },
                        {
                            "text":  "bear",
                            "points":  16
                        },
                        {
                            "text":  "tiger",
                            "points":  10
                        },
                        {
                            "text":  "shark",
                            "points":  10
                        },
                        {
                            "text":  "gator/croc",
                            "points":  10
                        },
                        {
                            "text":  "snake/cobra",
                            "points":  6
                        },
                        {
                            "text":  "porcupine",
                            "points":  4
                        },
                        {
                            "text":  "hippo",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110124,
        "question":  "If there were a Ten Commandments for one-night stands, number one would be \"thou shalt not\" what?",
        "answers":  [
                        {
                            "text":  "call/text me",
                            "points":  22
                        },
                        {
                            "text":  "forget condom",
                            "points":  14
                        },
                        {
                            "text":  "tell anyone",
                            "points":  13
                        },
                        {
                            "text":  "stay over",
                            "points":  9
                        },
                        {
                            "text":  "talk/ask name",
                            "points":  9
                        },
                        {
                            "text":  "be married",
                            "points":  8
                        },
                        {
                            "text":  "fall in love",
                            "points":  4
                        },
                        {
                            "text":  "lie",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110125,
        "question":  "Name a type of music that makes you want to get up and dance.",
        "answers":  [
                        {
                            "text":  "hip-hop",
                            "points":  20
                        },
                        {
                            "text":  "pop",
                            "points":  15
                        },
                        {
                            "text":  "country",
                            "points":  10
                        },
                        {
                            "text":  "rock/metal",
                            "points":  9
                        },
                        {
                            "text":  "techno/edm",
                            "points":  9
                        },
                        {
                            "text":  "disco",
                            "points":  7
                        },
                        {
                            "text":  "r & b/soul",
                            "points":  7
                        },
                        {
                            "text":  "reggae",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  110126,
        "question":  "Name a birthday gift your kids get you to let you know you're elderly now.",
        "answers":  [
                        {
                            "text":  "cane/walker",
                            "points":  37
                        },
                        {
                            "text":  "old people clothes",
                            "points":  18
                        },
                        {
                            "text":  "readers/mag. glass",
                            "points":  10
                        },
                        {
                            "text":  "blanket",
                            "points":  4
                        },
                        {
                            "text":  "hearing aid",
                            "points":  4
                        },
                        {
                            "text":  "lotta b-day candles",
                            "points":  3
                        },
                        {
                            "text":  "diapers",
                            "points":  3
                        },
                        {
                            "text":  "\"over the hill\" card",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110127,
        "question":  "We asked 100 women... You know a date is much older than he says he is if he's wearing what?",
        "answers":  [
                        {
                            "text":  "toupee/dye",
                            "points":  26
                        },
                        {
                            "text":  "suit/tie",
                            "points":  16
                        },
                        {
                            "text":  "suspenders",
                            "points":  10
                        },
                        {
                            "text":  "diaper",
                            "points":  8
                        },
                        {
                            "text":  "loafers/dress shoes",
                            "points":  7
                        },
                        {
                            "text":  "a watch",
                            "points":  6
                        },
                        {
                            "text":  "\"members only\" jacket",
                            "points":  5
                        },
                        {
                            "text":  "dentures",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110128,
        "question":  "Name someone you're embarrassed to admit you have a crush on.",
        "answers":  [
                        {
                            "text":  "celebrity",
                            "points":  25
                        },
                        {
                            "text":  "boss/coworker",
                            "points":  14
                        },
                        {
                            "text":  "teacher",
                            "points":  12
                        },
                        {
                            "text":  "clergy",
                            "points":  11
                        },
                        {
                            "text":  "bff",
                            "points":  5
                        },
                        {
                            "text":  "doctor",
                            "points":  5
                        },
                        {
                            "text":  "neighbor",
                            "points":  5
                        },
                        {
                            "text":  "my ex",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  110129,
        "question":  "We asked 100 women... If your stripper name is your favorite fruit, what's your name?",
        "answers":  [
                        {
                            "text":  "juicy berry",
                            "points":  24
                        },
                        {
                            "text":  "peaches",
                            "points":  15
                        },
                        {
                            "text":  "cherry",
                            "points":  13
                        },
                        {
                            "text":  "watermelon",
                            "points":  8
                        },
                        {
                            "text":  "banana",
                            "points":  7
                        },
                        {
                            "text":  "mango",
                            "points":  5
                        },
                        {
                            "text":  "orange",
                            "points":  5
                        },
                        {
                            "text":  "clementine",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  110130,
        "question":  "If a five-year-old invited you to their dinner party, what might be on the menu?",
        "answers":  [
                        {
                            "text":  "chicken nuggets",
                            "points":  22
                        },
                        {
                            "text":  "pizza",
                            "points":  21
                        },
                        {
                            "text":  "pasta/mac & cheese",
                            "points":  9
                        },
                        {
                            "text":  "hot dogs",
                            "points":  7
                        },
                        {
                            "text":  "cookies",
                            "points":  6
                        },
                        {
                            "text":  "candy",
                            "points":  6
                        },
                        {
                            "text":  "fake food/mud pie",
                            "points":  6
                        },
                        {
                            "text":  "cake",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  110131,
        "question":  "What actor do you think should be on the Mount Rushmore of action movies?",
        "answers":  [
                        {
                            "text":  "tom cruise",
                            "points":  19
                        },
                        {
                            "text":  "sly stallone",
                            "points":  13
                        },
                        {
                            "text":  "arnold",
                            "points":  13
                        },
                        {
                            "text":  "liam neeson",
                            "points":  10
                        },
                        {
                            "text":  "bruce willis",
                            "points":  10
                        },
                        {
                            "text":  "chuck norris",
                            "points":  7
                        },
                        {
                            "text":  "the rock",
                            "points":  6
                        },
                        {
                            "text":  "denzel",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110132,
        "question":  "We asked 100 women... Admit it -- what TV host, past or present, have you had romantic fantasies about?",
        "answers":  [
                        {
                            "text":  "steve harvey",
                            "points":  17
                        },
                        {
                            "text":  "jimmy fallon",
                            "points":  15
                        },
                        {
                            "text":  "bob barker",
                            "points":  12
                        },
                        {
                            "text":  "alex trebek",
                            "points":  11
                        },
                        {
                            "text":  "regis philbin",
                            "points":  9
                        },
                        {
                            "text":  "conan o'brien",
                            "points":  7
                        },
                        {
                            "text":  "donny osmond",
                            "points":  6
                        },
                        {
                            "text":  "jeff probst",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  110133,
        "question":  "Name a kind of fabric you'd be surprised a man's underwear was made of.",
        "answers":  [
                        {
                            "text":  "silk",
                            "points":  41
                        },
                        {
                            "text":  "wool",
                            "points":  13
                        },
                        {
                            "text":  "burlap",
                            "points":  6
                        },
                        {
                            "text":  "satin",
                            "points":  6
                        },
                        {
                            "text":  "lace",
                            "points":  5
                        },
                        {
                            "text":  "leather",
                            "points":  4
                        },
                        {
                            "text":  "linen",
                            "points":  3
                        },
                        {
                            "text":  "corduroy",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110134,
        "question":  "Name something a wife might put on top of her cheating husband's birthday cake.",
        "answers":  [
                        {
                            "text":  "divorce papers",
                            "points":  28
                        },
                        {
                            "text":  "cheating pic",
                            "points":  18
                        },
                        {
                            "text":  "poop frosting",
                            "points":  7
                        },
                        {
                            "text":  "condom",
                            "points":  7
                        },
                        {
                            "text":  "panties/bra",
                            "points":  6
                        },
                        {
                            "text":  "middle finger topper",
                            "points":  5
                        },
                        {
                            "text":  "her ring",
                            "points":  5
                        },
                        {
                            "text":  "bomb/fireworks",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  110135,
        "question":  "Name an emoji that best represents your love life.",
        "answers":  [
                        {
                            "text":  "smiley/happy :-)",
                            "points":  26
                        },
                        {
                            "text":  "sad/crying :-(",
                            "points":  19
                        },
                        {
                            "text":  "heart",
                            "points":  9
                        },
                        {
                            "text":  "frown",
                            "points":  7
                        },
                        {
                            "text":  "laughing",
                            "points":  6
                        },
                        {
                            "text":  "broken heart",
                            "points":  5
                        },
                        {
                            "text":  "poop",
                            "points":  5
                        },
                        {
                            "text":  "thumbs down",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110136,
        "question":  "Name something it might be fun to be covered in.",
        "answers":  [
                        {
                            "text":  "chocolate/hot fudge",
                            "points":  29
                        },
                        {
                            "text":  "whipped cream",
                            "points":  16
                        },
                        {
                            "text":  "gold/benjamins",
                            "points":  15
                        },
                        {
                            "text":  "snow/ice/water",
                            "points":  5
                        },
                        {
                            "text":  "puppies/kittens",
                            "points":  5
                        },
                        {
                            "text":  "bubbles",
                            "points":  3
                        },
                        {
                            "text":  "jell-o",
                            "points":  3
                        },
                        {
                            "text":  "blankets",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110137,
        "question":  "A wife used to tell her husband, \"I think you're sexy.\" Now she says, \"I think you're\" what?",
        "answers":  [
                        {
                            "text":  "handsome/sexier",
                            "points":  20
                        },
                        {
                            "text":  "porky",
                            "points":  16
                        },
                        {
                            "text":  "lazy",
                            "points":  15
                        },
                        {
                            "text":  "elderly",
                            "points":  8
                        },
                        {
                            "text":  "stupid",
                            "points":  6
                        },
                        {
                            "text":  "deaf",
                            "points":  5
                        },
                        {
                            "text":  "stinky",
                            "points":  5
                        },
                        {
                            "text":  "annoying",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110138,
        "question":  "Name a place where people could be stepping all over you.",
        "answers":  [
                        {
                            "text":  "work",
                            "points":  23
                        },
                        {
                            "text":  "concert",
                            "points":  14
                        },
                        {
                            "text":  "bar/club",
                            "points":  11
                        },
                        {
                            "text":  "sporting event",
                            "points":  9
                        },
                        {
                            "text":  "beach",
                            "points":  5
                        },
                        {
                            "text":  "cemetery",
                            "points":  5
                        },
                        {
                            "text":  "store/mall",
                            "points":  5
                        },
                        {
                            "text":  "theater/movie",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  110139,
        "question":  "Name something a tree might complain about.",
        "answers":  [
                        {
                            "text":  "dry/thirsty",
                            "points":  22
                        },
                        {
                            "text":  "critters/dogs",
                            "points":  20
                        },
                        {
                            "text":  "falling leaves",
                            "points":  15
                        },
                        {
                            "text":  "being cut",
                            "points":  4
                        },
                        {
                            "text":  "folks climbing it",
                            "points":  4
                        },
                        {
                            "text":  "roots cramped/sore",
                            "points":  4
                        },
                        {
                            "text":  "cold/snow",
                            "points":  4
                        },
                        {
                            "text":  "stands all day",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110140,
        "question":  "After finally saying \"I love you\" to your partner, you hope they don't say what?",
        "answers":  [
                        {
                            "text":  "\"thanks\"",
                            "points":  23
                        },
                        {
                            "text":  "\"i don't\"",
                            "points":  14
                        },
                        {
                            "text":  "\"it's over/byeee!\"",
                            "points":  9
                        },
                        {
                            "text":  "\"ok\"",
                            "points":  8
                        },
                        {
                            "text":  "\"really?\"",
                            "points":  5
                        },
                        {
                            "text":  "\"that's nice\"",
                            "points":  5
                        },
                        {
                            "text":  "\"me too\"",
                            "points":  5
                        },
                        {
                            "text":  "\"i hate you!\"",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  110141,
        "question":  "Name a Mexican food that Americans don't pronounce correctly when ordering it.",
        "answers":  [
                        {
                            "text":  "fajita",
                            "points":  14
                        },
                        {
                            "text":  "quesadilla",
                            "points":  14
                        },
                        {
                            "text":  "burrito",
                            "points":  13
                        },
                        {
                            "text":  "enchilada",
                            "points":  9
                        },
                        {
                            "text":  "taco",
                            "points":  8
                        },
                        {
                            "text":  "salsa",
                            "points":  5
                        },
                        {
                            "text":  "guacamole",
                            "points":  5
                        },
                        {
                            "text":  "tortilla",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  110142,
        "question":  "Name a female singer you'd hate to have to follow at a bar on karaoke night.",
        "answers":  [
                        {
                            "text":  "adele",
                            "points":  15
                        },
                        {
                            "text":  "taylor swift",
                            "points":  15
                        },
                        {
                            "text":  "lady gaga",
                            "points":  8
                        },
                        {
                            "text":  "beyonce",
                            "points":  7
                        },
                        {
                            "text":  "mariah carey",
                            "points":  7
                        },
                        {
                            "text":  "dolly parton",
                            "points":  5
                        },
                        {
                            "text":  "celine dion",
                            "points":  5
                        },
                        {
                            "text":  "carrie underwood",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110143,
        "question":  "Name something you try to get rid of that always seems to come back.",
        "answers":  [
                        {
                            "text":  "last 10 lbs.",
                            "points":  15
                        },
                        {
                            "text":  "illness/headache",
                            "points":  11
                        },
                        {
                            "text":  "zits",
                            "points":  8
                        },
                        {
                            "text":  "bugs/ants",
                            "points":  7
                        },
                        {
                            "text":  "loser mate/ex",
                            "points":  7
                        },
                        {
                            "text":  "dust",
                            "points":  6
                        },
                        {
                            "text":  "weeds",
                            "points":  5
                        },
                        {
                            "text":  "hair/grays",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  110144,
        "question":  "A husband wouldn't like his wife bringing her work husband where?",
        "answers":  [
                        {
                            "text":  "home/to bed",
                            "points":  81
                        },
                        {
                            "text":  "hotel/vacay",
                            "points":  6
                        },
                        {
                            "text":  "restaurant/nobu",
                            "points":  4
                        },
                        {
                            "text":  "bar/club",
                            "points":  3
                        },
                        {
                            "text":  "church",
                            "points":  2
                        },
                        {
                            "text":  "party/hubby's b-day",
                            "points":  2
                        },
                        {
                            "text":  "store/lingerie shop",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110145,
        "question":  "We asked 100 married women... Name a reason your husband takes you to the store and says \"Get whatever you want.\"",
        "answers":  [
                        {
                            "text":  "feels guilty/i'm mad",
                            "points":  55
                        },
                        {
                            "text":  "my birthday",
                            "points":  17
                        },
                        {
                            "text":  "loves me",
                            "points":  10
                        },
                        {
                            "text":  "anniversary",
                            "points":  8
                        },
                        {
                            "text":  "he's dying",
                            "points":  5
                        },
                        {
                            "text":  "at dollar store",
                            "points":  3
                        },
                        {
                            "text":  "new job/payday",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110146,
        "question":  "We asked 100 married women... Name something nobody wants to see your husband doing shirtless.",
        "answers":  [
                        {
                            "text":  "yard work",
                            "points":  52
                        },
                        {
                            "text":  "walk'g/exercise",
                            "points":  19
                        },
                        {
                            "text":  "washing car",
                            "points":  12
                        },
                        {
                            "text":  "cook/eating",
                            "points":  8
                        },
                        {
                            "text":  "dancing",
                            "points":  5
                        },
                        {
                            "text":  "posing",
                            "points":  2
                        },
                        {
                            "text":  "anything! yuck!",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110147,
        "question":  "Name a place you'd hate to discover a two-way mirror.",
        "answers":  [
                        {
                            "text":  "bathroom",
                            "points":  51
                        },
                        {
                            "text":  "dressing room",
                            "points":  31
                        },
                        {
                            "text":  "doctor's office",
                            "points":  5
                        },
                        {
                            "text":  "gym/locker room",
                            "points":  5
                        },
                        {
                            "text":  "hotel room",
                            "points":  4
                        },
                        {
                            "text":  "at work",
                            "points":  2
                        },
                        {
                            "text":  "my bedroom",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110148,
        "question":  "We asked 100 men... You're getting married in the morning. Tell me what you're doing tonight.",
        "answers":  [
                        {
                            "text":  "party/boozing",
                            "points":  50
                        },
                        {
                            "text":  "sleeping",
                            "points":  22
                        },
                        {
                            "text":  "sex/with everyone",
                            "points":  10
                        },
                        {
                            "text":  "running away",
                            "points":  6
                        },
                        {
                            "text":  "dinner/with fam",
                            "points":  5
                        },
                        {
                            "text":  "praying",
                            "points":  4
                        },
                        {
                            "text":  "questioning decision",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110149,
        "question":  "We asked 100 single men... Tell me the last person who has seen your bare bottom.",
        "answers":  [
                        {
                            "text":  "partner/hookup",
                            "points":  47
                        },
                        {
                            "text":  "doctor",
                            "points":  15
                        },
                        {
                            "text":  "mom",
                            "points":  11
                        },
                        {
                            "text":  "ex",
                            "points":  11
                        },
                        {
                            "text":  "my buddy",
                            "points":  7
                        },
                        {
                            "text":  "me",
                            "points":  6
                        },
                        {
                            "text":  "masseuse",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110150,
        "question":  "We asked 100 married women... What would you do if you caught your husband under the mistletoe with someone else?",
        "answers":  [
                        {
                            "text":  "leave/divorce",
                            "points":  58
                        },
                        {
                            "text":  "slap 'em both",
                            "points":  17
                        },
                        {
                            "text":  "yell",
                            "points":  8
                        },
                        {
                            "text":  "kiss a guy",
                            "points":  6
                        },
                        {
                            "text":  "dirty look/stare",
                            "points":  4
                        },
                        {
                            "text":  "laugh/be glad",
                            "points":  3
                        },
                        {
                            "text":  "push 'em apart",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110151,
        "question":  "Name a reason you might compare your lover to a blanket.",
        "answers":  [
                        {
                            "text":  "warm/makes me hot",
                            "points":  56
                        },
                        {
                            "text":  "soft/cuddly",
                            "points":  24
                        },
                        {
                            "text":  "lifeless/lies there",
                            "points":  8
                        },
                        {
                            "text":  "gives comfort",
                            "points":  5
                        },
                        {
                            "text":  "on top of me",
                            "points":  2
                        },
                        {
                            "text":  "flat/no figure",
                            "points":  2
                        },
                        {
                            "text":  "fuzzy",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110152,
        "question":  "We asked 100 women... It's perfectly fine to date a younger man, especially if he has what?",
        "answers":  [
                        {
                            "text":  "money/good job",
                            "points":  55
                        },
                        {
                            "text":  "hot body",
                            "points":  19
                        },
                        {
                            "text":  "humor/personality",
                            "points":  9
                        },
                        {
                            "text":  "dreamy face",
                            "points":  8
                        },
                        {
                            "text":  "manners/respect",
                            "points":  4
                        },
                        {
                            "text":  "good heart",
                            "points":  2
                        },
                        {
                            "text":  "an old soul",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110153,
        "question":  "Name something a kid does to convince mom and dad they're too sick for school.",
        "answers":  [
                        {
                            "text":  "cough",
                            "points":  46
                        },
                        {
                            "text":  "puke/gag self",
                            "points":  25
                        },
                        {
                            "text":  "fake fever",
                            "points":  12
                        },
                        {
                            "text":  "cry/moan",
                            "points":  7
                        },
                        {
                            "text":  "sneeze/blow nose",
                            "points":  3
                        },
                        {
                            "text":  "stomachache",
                            "points":  3
                        },
                        {
                            "text":  "stay in bed",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110154,
        "question":  "At the restaurant in hell, you won't just find a fly in your soup, you'll also find one in your what?",
        "answers":  [
                        {
                            "text":  "drink/other food",
                            "points":  45
                        },
                        {
                            "text":  "mouth/teeth",
                            "points":  29
                        },
                        {
                            "text":  "nose",
                            "points":  7
                        },
                        {
                            "text":  "ear",
                            "points":  6
                        },
                        {
                            "text":  "eye",
                            "points":  6
                        },
                        {
                            "text":  "butt",
                            "points":  4
                        },
                        {
                            "text":  "hair",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110155,
        "question":  "We asked 100 men... You love a naked woman just as long as it isn't your who?",
        "answers":  [
                        {
                            "text":  "mom",
                            "points":  44
                        },
                        {
                            "text":  "mother-in-law",
                            "points":  27
                        },
                        {
                            "text":  "sister",
                            "points":  15
                        },
                        {
                            "text":  "wife",
                            "points":  4
                        },
                        {
                            "text":  "grandma",
                            "points":  4
                        },
                        {
                            "text":  "daughter",
                            "points":  3
                        },
                        {
                            "text":  "ex",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110156,
        "question":  "If Batman got married, name something his wife might tell him he has to get rid of.",
        "answers":  [
                        {
                            "text":  "costume",
                            "points":  42
                        },
                        {
                            "text":  "clingy robin",
                            "points":  25
                        },
                        {
                            "text":  "batmobile",
                            "points":  16
                        },
                        {
                            "text":  "batcave",
                            "points":  7
                        },
                        {
                            "text":  "job/late night calls",
                            "points":  4
                        },
                        {
                            "text":  "babes/catwoman",
                            "points":  3
                        },
                        {
                            "text":  "weapons",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110157,
        "question":  "We asked 100 women... What do you get on your wedding day that you throw away on your divorce day?",
        "answers":  [
                        {
                            "text":  "dress/clothes",
                            "points":  34
                        },
                        {
                            "text":  "ring",
                            "points":  30
                        },
                        {
                            "text":  "pics/album",
                            "points":  15
                        },
                        {
                            "text":  "marriage license",
                            "points":  8
                        },
                        {
                            "text":  "corsage/flowers",
                            "points":  5
                        },
                        {
                            "text":  "gifts/his & hers",
                            "points":  4
                        },
                        {
                            "text":  "husband",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110158,
        "question":  "Name someone you'd be surprised just lit up a joint.",
        "answers":  [
                        {
                            "text":  "parents",
                            "points":  34
                        },
                        {
                            "text":  "clergy/sister ethel",
                            "points":  24
                        },
                        {
                            "text":  "politician/prez",
                            "points":  20
                        },
                        {
                            "text":  "grandparents",
                            "points":  7
                        },
                        {
                            "text":  "spouse",
                            "points":  5
                        },
                        {
                            "text":  "celeb/oprah",
                            "points":  5
                        },
                        {
                            "text":  "doctor",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110159,
        "question":  "We asked 100 women... You know there's been a man in your house if you can smell what?",
        "answers":  [
                        {
                            "text":  "bad cologne",
                            "points":  33
                        },
                        {
                            "text":  "sweaty pits/feet",
                            "points":  32
                        },
                        {
                            "text":  "beer",
                            "points":  15
                        },
                        {
                            "text":  "farts",
                            "points":  9
                        },
                        {
                            "text":  "cigars/tobacco",
                            "points":  4
                        },
                        {
                            "text":  "burnt food/old pizza",
                            "points":  4
                        },
                        {
                            "text":  "gasoline/oil",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110160,
        "question":  "If a wife is studying to be a doctor, what might she practice doing on her husband?",
        "answers":  [
                        {
                            "text":  "exam/diagnosis",
                            "points":  75
                        },
                        {
                            "text":  "cpr/mouth-to-mouth",
                            "points":  8
                        },
                        {
                            "text":  "shot/needles",
                            "points":  5
                        },
                        {
                            "text":  "stitches",
                            "points":  3
                        },
                        {
                            "text":  "convo/bad news",
                            "points":  3
                        },
                        {
                            "text":  "surgery/amputate",
                            "points":  2
                        },
                        {
                            "text":  "bandaging",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110161,
        "question":  "Steve Harvey likes the color of his suit to match the color of his what?",
        "answers":  [
                        {
                            "text":  "shoes/other clothes",
                            "points":  73
                        },
                        {
                            "text":  "eyes",
                            "points":  10
                        },
                        {
                            "text":  "head/skin",
                            "points":  5
                        },
                        {
                            "text":  "car",
                            "points":  3
                        },
                        {
                            "text":  "money/wallet",
                            "points":  3
                        },
                        {
                            "text":  "mood/aura",
                            "points":  2
                        },
                        {
                            "text":  "watch",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110162,
        "question":  "You hope a restaurant chef doesn't do what while he's making your food?",
        "answers":  [
                        {
                            "text":  "sneeze/cough",
                            "points":  70
                        },
                        {
                            "text":  "spit",
                            "points":  15
                        },
                        {
                            "text":  "pick/blow nose",
                            "points":  4
                        },
                        {
                            "text":  "get sick/puke",
                            "points":  3
                        },
                        {
                            "text":  "sweat",
                            "points":  2
                        },
                        {
                            "text":  "smoke profusely",
                            "points":  2
                        },
                        {
                            "text":  "go to bathroom",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110163,
        "question":  "If a wife says \"A little bird told me my husband is cheating,\" who might the little bird be?",
        "answers":  [
                        {
                            "text":  "friend",
                            "points":  69
                        },
                        {
                            "text":  "nosy neighbor",
                            "points":  13
                        },
                        {
                            "text":  "the mistress",
                            "points":  6
                        },
                        {
                            "text":  "her sister",
                            "points":  4
                        },
                        {
                            "text":  "her kid",
                            "points":  2
                        },
                        {
                            "text":  "the p.i.",
                            "points":  2
                        },
                        {
                            "text":  "her parrot",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110164,
        "question":  "Name an occasion that a wife might put on her rarely worn sexy lingerie.",
        "answers":  [
                        {
                            "text":  "anniversary",
                            "points":  55
                        },
                        {
                            "text":  "birthday",
                            "points":  17
                        },
                        {
                            "text":  "valentine's day",
                            "points":  15
                        },
                        {
                            "text":  "date night",
                            "points":  4
                        },
                        {
                            "text":  "wedding night",
                            "points":  3
                        },
                        {
                            "text":  "cheating w/ a stud!",
                            "points":  2
                        },
                        {
                            "text":  "vacation",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110165,
        "question":  "Name something your mother used to do when you talked back.",
        "answers":  [
                        {
                            "text":  "spank me",
                            "points":  55
                        },
                        {
                            "text":  "time out/go to room",
                            "points":  11
                        },
                        {
                            "text":  "ground me",
                            "points":  10
                        },
                        {
                            "text":  "soap in mouth",
                            "points":  10
                        },
                        {
                            "text":  "yell/cuss out",
                            "points":  8
                        },
                        {
                            "text":  "death stare",
                            "points":  2
                        },
                        {
                            "text":  "tell dad",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110166,
        "question":  "Tell me something that's not food that people chew.",
        "answers":  [
                        {
                            "text":  "gum",
                            "points":  54
                        },
                        {
                            "text":  "tobacco/dip",
                            "points":  19
                        },
                        {
                            "text":  "fingernail/toenail",
                            "points":  16
                        },
                        {
                            "text":  "toothpick",
                            "points":  3
                        },
                        {
                            "text":  "cigar",
                            "points":  2
                        },
                        {
                            "text":  "grass/hay",
                            "points":  2
                        },
                        {
                            "text":  "pen/pencil",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110167,
        "question":  "Name a stand-up comic's worst fear when they're onstage.",
        "answers":  [
                        {
                            "text":  "no laughs/silence",
                            "points":  54
                        },
                        {
                            "text":  "hecklers",
                            "points":  13
                        },
                        {
                            "text":  "forget/botch joke",
                            "points":  11
                        },
                        {
                            "text":  "get booed",
                            "points":  9
                        },
                        {
                            "text":  "stage fright",
                            "points":  6
                        },
                        {
                            "text":  "crowd throws stuff",
                            "points":  3
                        },
                        {
                            "text":  "slapped/will smith",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110168,
        "question":  "We asked 100 married women... When kids misbehave, you take away their allowance. When your husband misbehaves, you take away what?",
        "answers":  [
                        {
                            "text":  "sexy time",
                            "points":  48
                        },
                        {
                            "text":  "his food",
                            "points":  15
                        },
                        {
                            "text":  "his allowance",
                            "points":  15
                        },
                        {
                            "text":  "his beer",
                            "points":  11
                        },
                        {
                            "text":  "tv time",
                            "points":  4
                        },
                        {
                            "text":  "house keys",
                            "points":  3
                        },
                        {
                            "text":  "his car",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110169,
        "question":  "Name something about someone's lips that can be a real turnoff.",
        "answers":  [
                        {
                            "text":  "chapped",
                            "points":  46
                        },
                        {
                            "text":  "too big/fillers",
                            "points":  26
                        },
                        {
                            "text":  "oozing sores",
                            "points":  9
                        },
                        {
                            "text":  "too thin",
                            "points":  7
                        },
                        {
                            "text":  "dirty/white gunk",
                            "points":  4
                        },
                        {
                            "text":  "pouty/pursed",
                            "points":  3
                        },
                        {
                            "text":  "pierced",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110170,
        "question":  "Fill in the blank: Grandma said, \"Every time grandpa ______s, his dentures pop out.\"",
        "answers":  [
                        {
                            "text":  "sneezes/coughs",
                            "points":  43
                        },
                        {
                            "text":  "laughs/smiles",
                            "points":  27
                        },
                        {
                            "text":  "burps",
                            "points":  11
                        },
                        {
                            "text":  "cuts the cheese",
                            "points":  10
                        },
                        {
                            "text":  "eats",
                            "points":  3
                        },
                        {
                            "text":  "sings/hits high note",
                            "points":  2
                        },
                        {
                            "text":  "talks",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110171,
        "question":  "If a witch and a wizard got divorced, she might complain that he got the what?",
        "answers":  [
                        {
                            "text":  "wand",
                            "points":  43
                        },
                        {
                            "text":  "good spells/potions",
                            "points":  18
                        },
                        {
                            "text":  "broom",
                            "points":  17
                        },
                        {
                            "text":  "cauldron",
                            "points":  13
                        },
                        {
                            "text":  "crystal ball",
                            "points":  3
                        },
                        {
                            "text":  "castle",
                            "points":  2
                        },
                        {
                            "text":  "hat",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110172,
        "question":  "Susan said, \"That's it -- not only is my husband cheating, he gave his mistress a\" what?",
        "answers":  [
                        {
                            "text":  "convertible",
                            "points":  25
                        },
                        {
                            "text":  "baby",
                            "points":  18
                        },
                        {
                            "text":  "house/condo",
                            "points":  7
                        },
                        {
                            "text":  "kiss/hickey",
                            "points":  3
                        },
                        {
                            "text":  "full-body massage",
                            "points":  2
                        },
                        {
                            "text":  "check",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110173,
        "question":  "Fill in the blank: Susan's jeans were so tight that they ripped every time she ______ed.",
        "answers":  [
                        {
                            "text":  "bent over",
                            "points":  40
                        },
                        {
                            "text":  "sat/squatted",
                            "points":  22
                        },
                        {
                            "text":  "walked/stepped",
                            "points":  12
                        },
                        {
                            "text":  "breathed",
                            "points":  8
                        },
                        {
                            "text":  "farted",
                            "points":  8
                        },
                        {
                            "text":  "coughed/sneezed",
                            "points":  6
                        },
                        {
                            "text":  "twerked",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110174,
        "question":  "Name something of his wife's a man might wear because all of his are dirty.",
        "answers":  [
                        {
                            "text":  "socks",
                            "points":  39
                        },
                        {
                            "text":  "silk panties",
                            "points":  26
                        },
                        {
                            "text":  "shirt",
                            "points":  20
                        },
                        {
                            "text":  "pants",
                            "points":  4
                        },
                        {
                            "text":  "coat/hoodie",
                            "points":  3
                        },
                        {
                            "text":  "bathrobe",
                            "points":  3
                        },
                        {
                            "text":  "hat",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110175,
        "question":  "Name something a rich guy might pay a dentist to do to his prize horse's teeth.",
        "answers":  [
                        {
                            "text":  "gold/bling/grill",
                            "points":  38
                        },
                        {
                            "text":  "brush/clean",
                            "points":  24
                        },
                        {
                            "text":  "implants",
                            "points":  9
                        },
                        {
                            "text":  "whiten 'em",
                            "points":  9
                        },
                        {
                            "text":  "braces/straighten",
                            "points":  8
                        },
                        {
                            "text":  "caps/veneers",
                            "points":  7
                        },
                        {
                            "text":  "file 'em",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110176,
        "question":  "Name something a baby sleeps with that a teen probably wouldn't.",
        "answers":  [
                        {
                            "text":  "a plushy/doll",
                            "points":  37
                        },
                        {
                            "text":  "pacifier",
                            "points":  32
                        },
                        {
                            "text":  "tiny blanket",
                            "points":  14
                        },
                        {
                            "text":  "bottle",
                            "points":  7
                        },
                        {
                            "text":  "diaper",
                            "points":  4
                        },
                        {
                            "text":  "night-light",
                            "points":  2
                        },
                        {
                            "text":  "parents",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110177,
        "question":  "We asked 100 married men... Tell me a B word that describes your wife's bottom.",
        "answers":  [
                        {
                            "text":  "beautiful",
                            "points":  37
                        },
                        {
                            "text":  "big",
                            "points":  21
                        },
                        {
                            "text":  "bouncy",
                            "points":  13
                        },
                        {
                            "text":  "bodacious",
                            "points":  13
                        },
                        {
                            "text":  "blubbery",
                            "points":  9
                        },
                        {
                            "text":  "booty/licious",
                            "points":  3
                        },
                        {
                            "text":  "bubble",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110178,
        "question":  "We asked 100 single women... You love being single, but sometimes you want a man around to do what?",
        "answers":  [
                        {
                            "text":  "chores/yard work",
                            "points":  32
                        },
                        {
                            "text":  "repairs",
                            "points":  29
                        },
                        {
                            "text":  "go to dinner",
                            "points":  15
                        },
                        {
                            "text":  "talk to",
                            "points":  7
                        },
                        {
                            "text":  "reach top shelf",
                            "points":  6
                        },
                        {
                            "text":  "pay bills/make $",
                            "points":  5
                        },
                        {
                            "text":  "affection/sex",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110179,
        "question":  "Tell me a type of snake a male stripper might use as his stage name.",
        "answers":  [
                        {
                            "text":  "anaconda",
                            "points":  31
                        },
                        {
                            "text":  "king cobra",
                            "points":  28
                        },
                        {
                            "text":  "python",
                            "points":  16
                        },
                        {
                            "text":  "boa constrictor",
                            "points":  9
                        },
                        {
                            "text":  "viper/asp",
                            "points":  8
                        },
                        {
                            "text":  "rattlesnake",
                            "points":  4
                        },
                        {
                            "text":  "black mamba",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110180,
        "question":  "Name something that's done to an egg that you wouldn't want done to you.",
        "answers":  [
                        {
                            "text":  "cracked",
                            "points":  28
                        },
                        {
                            "text":  "boiled/poached",
                            "points":  28
                        },
                        {
                            "text":  "scrambled",
                            "points":  20
                        },
                        {
                            "text":  "beaten",
                            "points":  10
                        },
                        {
                            "text":  "fried",
                            "points":  8
                        },
                        {
                            "text":  "eaten",
                            "points":  2
                        },
                        {
                            "text":  "dyed",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110181,
        "question":  "Fill in the blank: Bob ate so much at the all-you-can-eat buffet that he ______ed.",
        "answers":  [
                        {
                            "text":  "barfed",
                            "points":  67
                        },
                        {
                            "text":  "passed out/slept",
                            "points":  13
                        },
                        {
                            "text":  "exploded",
                            "points":  7
                        },
                        {
                            "text":  "pooped",
                            "points":  3
                        },
                        {
                            "text":  "burped",
                            "points":  3
                        },
                        {
                            "text":  "got kicked out",
                            "points":  2
                        },
                        {
                            "text":  "croaked",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110182,
        "question":  "Tell me a reason a woman might still marry a guy who was completely broke.",
        "answers":  [
                        {
                            "text":  "loves him",
                            "points":  60
                        },
                        {
                            "text":  "he's hot",
                            "points":  14
                        },
                        {
                            "text":  "kind/good character",
                            "points":  9
                        },
                        {
                            "text":  "he's funny",
                            "points":  5
                        },
                        {
                            "text":  "she's loaded",
                            "points":  5
                        },
                        {
                            "text":  "she's stupid",
                            "points":  2
                        },
                        {
                            "text":  "good in bed",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110183,
        "question":  "Name something you'd find in a hotel room that would make you check right out.",
        "answers":  [
                        {
                            "text":  "bugs",
                            "points":  55
                        },
                        {
                            "text":  "condom",
                            "points":  13
                        },
                        {
                            "text":  "blood",
                            "points":  7
                        },
                        {
                            "text":  "rat/mouse",
                            "points":  7
                        },
                        {
                            "text":  "dirty sheets/room",
                            "points":  7
                        },
                        {
                            "text":  "person/corpse",
                            "points":  6
                        },
                        {
                            "text":  "hidden cam",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110184,
        "question":  "There's a special place in hell for men who dump their girlfriend the day before what?",
        "answers":  [
                        {
                            "text":  "valentine's day",
                            "points":  49
                        },
                        {
                            "text":  "christmas",
                            "points":  13
                        },
                        {
                            "text":  "their wedding",
                            "points":  13
                        },
                        {
                            "text":  "her birthday",
                            "points":  11
                        },
                        {
                            "text":  "baby's birth",
                            "points":  6
                        },
                        {
                            "text":  "their anniversary",
                            "points":  3
                        },
                        {
                            "text":  "big date/prom",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110185,
        "question":  "Name something in the refrigerator a cheap guy might use in his hair instead of styling gel.",
        "answers":  [
                        {
                            "text":  "mayo",
                            "points":  48
                        },
                        {
                            "text":  "butter/margarine",
                            "points":  21
                        },
                        {
                            "text":  "oil",
                            "points":  10
                        },
                        {
                            "text":  "jelly",
                            "points":  6
                        },
                        {
                            "text":  "raw egg",
                            "points":  5
                        },
                        {
                            "text":  "whipped cream",
                            "points":  4
                        },
                        {
                            "text":  "lard/grease",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110186,
        "question":  "Name a reason you'd never want to be a pig.",
        "answers":  [
                        {
                            "text":  "muddy/stinky",
                            "points":  46
                        },
                        {
                            "text":  "get eaten/bacon",
                            "points":  34
                        },
                        {
                            "text":  "too fat",
                            "points":  7
                        },
                        {
                            "text":  "eat slop",
                            "points":  4
                        },
                        {
                            "text":  "boring life",
                            "points":  2
                        },
                        {
                            "text":  "no thumbs",
                            "points":  2
                        },
                        {
                            "text":  "oinking/noisy",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110187,
        "question":  "Name something about the Pillsbury Doughboy that women might find sexy.",
        "answers":  [
                        {
                            "text":  "giggle/smile",
                            "points":  43
                        },
                        {
                            "text":  "squishy dad bod",
                            "points":  42
                        },
                        {
                            "text":  "cooks/baked goods",
                            "points":  3
                        },
                        {
                            "text":  "smooth skin",
                            "points":  3
                        },
                        {
                            "text":  "dreamy eyes",
                            "points":  2
                        },
                        {
                            "text":  "he's naked",
                            "points":  2
                        },
                        {
                            "text":  "rich/big job",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110188,
        "question":  "We asked 100 women... You should never announce that you're what at another person's wedding?",
        "answers":  [
                        {
                            "text":  "engaged",
                            "points":  42
                        },
                        {
                            "text":  "pregnant",
                            "points":  29
                        },
                        {
                            "text":  "getting divorced",
                            "points":  13
                        },
                        {
                            "text":  "in love w/ groom",
                            "points":  6
                        },
                        {
                            "text":  "groom/bride's ex",
                            "points":  3
                        },
                        {
                            "text":  "drunk",
                            "points":  2
                        },
                        {
                            "text":  "lookin' to hook up",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110189,
        "question":  "We asked 100 women... Your blind date proposed and you said yes. Tell me why.",
        "answers":  [
                        {
                            "text":  "he's rich",
                            "points":  41
                        },
                        {
                            "text":  "love at 1st sight",
                            "points":  19
                        },
                        {
                            "text":  "i was drunk",
                            "points":  10
                        },
                        {
                            "text":  "he's hot",
                            "points":  10
                        },
                        {
                            "text":  "desperate/why not?",
                            "points":  9
                        },
                        {
                            "text":  "knew him/old flame",
                            "points":  4
                        },
                        {
                            "text":  "he is kind",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110190,
        "question":  "Name someone at a woman's funeral that you'd be shocked her husband hit on.",
        "answers":  [
                        {
                            "text":  "her sister",
                            "points":  40
                        },
                        {
                            "text":  "her mother",
                            "points":  38
                        },
                        {
                            "text":  "her bff",
                            "points":  8
                        },
                        {
                            "text":  "her grandma",
                            "points":  5
                        },
                        {
                            "text":  "her daughter",
                            "points":  2
                        },
                        {
                            "text":  "mortician",
                            "points":  2
                        },
                        {
                            "text":  "preacher",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110191,
        "question":  "Fill in the blank: Aliens might say, \"The female earthling has a much better ______ than the male.\"",
        "answers":  [
                        {
                            "text":  "body/booty",
                            "points":  38
                        },
                        {
                            "text":  "brain",
                            "points":  31
                        },
                        {
                            "text":  "face",
                            "points":  13
                        },
                        {
                            "text":  "personality/'tude",
                            "points":  8
                        },
                        {
                            "text":  "pain tolerance",
                            "points":  3
                        },
                        {
                            "text":  "hairstyle",
                            "points":  2
                        },
                        {
                            "text":  "scent",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110192,
        "question":  "Name something your body and a mattress have in common.",
        "answers":  [
                        {
                            "text":  "soft",
                            "points":  33
                        },
                        {
                            "text":  "lumpy",
                            "points":  30
                        },
                        {
                            "text":  "firm",
                            "points":  14
                        },
                        {
                            "text":  "saggy",
                            "points":  8
                        },
                        {
                            "text":  "comfy",
                            "points":  5
                        },
                        {
                            "text":  "old/worn",
                            "points":  5
                        },
                        {
                            "text":  "horizontal/lie around",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110193,
        "question":  "You might describe your underwear as too what?",
        "answers":  [
                        {
                            "text":  "holey/worn/old",
                            "points":  32
                        },
                        {
                            "text":  "tight/small",
                            "points":  24
                        },
                        {
                            "text":  "big/baggy",
                            "points":  13
                        },
                        {
                            "text":  "sexy/lacy",
                            "points":  11
                        },
                        {
                            "text":  "old man/old lady",
                            "points":  10
                        },
                        {
                            "text":  "plain/boring",
                            "points":  4
                        },
                        {
                            "text":  "dirty",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110194,
        "question":  "We asked 100 women... If you wanted to seduce the mailman, name something you might leave in the mailbox.",
        "answers":  [
                        {
                            "text":  "note/number",
                            "points":  31
                        },
                        {
                            "text":  "panties/clothes",
                            "points":  25
                        },
                        {
                            "text":  "food/cupcakes",
                            "points":  17
                        },
                        {
                            "text":  "sexy pics",
                            "points":  9
                        },
                        {
                            "text":  "condoms",
                            "points":  7
                        },
                        {
                            "text":  "house key",
                            "points":  6
                        },
                        {
                            "text":  "wine",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110195,
        "question":  "We asked 100 men... I wish I could get away with doing what like a baby can?",
        "answers":  [
                        {
                            "text":  "sleeping all day",
                            "points":  30
                        },
                        {
                            "text":  "crying",
                            "points":  30
                        },
                        {
                            "text":  "pee/poo'g self",
                            "points":  12
                        },
                        {
                            "text":  "breastfeeding",
                            "points":  11
                        },
                        {
                            "text":  "drooling",
                            "points":  6
                        },
                        {
                            "text":  "making messes",
                            "points":  5
                        },
                        {
                            "text":  "being naked",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110196,
        "question":  "Name something about a male rock star that so many women are attracted to.",
        "answers":  [
                        {
                            "text":  "voice/talent",
                            "points":  26
                        },
                        {
                            "text":  "all that chedda'",
                            "points":  23
                        },
                        {
                            "text":  "long hair",
                            "points":  20
                        },
                        {
                            "text":  "fame",
                            "points":  17
                        },
                        {
                            "text":  "rebel 'tude/cocky",
                            "points":  4
                        },
                        {
                            "text":  "clothes/leather",
                            "points":  4
                        },
                        {
                            "text":  "sexy bod",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110197,
        "question":  "Name something a bald guy does to look more attractive.",
        "answers":  [
                        {
                            "text":  "wears hat",
                            "points":  26
                        },
                        {
                            "text":  "buys wig",
                            "points":  22
                        },
                        {
                            "text":  "shaves it clean",
                            "points":  16
                        },
                        {
                            "text":  "grows a stache",
                            "points":  12
                        },
                        {
                            "text":  "shines that dome",
                            "points":  9
                        },
                        {
                            "text":  "snazzy clothes",
                            "points":  6
                        },
                        {
                            "text":  "steroids/muscly",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  110198,
        "question":  "We asked 100 married people... What does your spouse do to let you know they're mad without saying a word?",
        "answers":  [
                        {
                            "text":  "not talk/ignore",
                            "points":  51
                        },
                        {
                            "text":  "evil eye",
                            "points":  13
                        },
                        {
                            "text":  "slam/stomp",
                            "points":  12
                        },
                        {
                            "text":  "leave/go to bed",
                            "points":  7
                        },
                        {
                            "text":  "groan/sigh",
                            "points":  6
                        },
                        {
                            "text":  "pout",
                            "points":  5
                        },
                        {
                            "text":  "mad cleaning spree",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110199,
        "question":  "Name a complaint Snow White's husband might have about living with the Seven Dwarfs.",
        "answers":  [
                        {
                            "text":  "no privacy/space",
                            "points":  48
                        },
                        {
                            "text":  "noisy/whistle",
                            "points":  18
                        },
                        {
                            "text":  "leave mess",
                            "points":  11
                        },
                        {
                            "text":  "all dudes",
                            "points":  9
                        },
                        {
                            "text":  "everything's small",
                            "points":  4
                        },
                        {
                            "text":  "food costs",
                            "points":  3
                        },
                        {
                            "text":  "they smell",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110200,
        "question":  "We asked 100 single women... Sorry, guys -- if you marry me, you'll have to give up what?",
        "answers":  [
                        {
                            "text":  "dating/flirting",
                            "points":  45
                        },
                        {
                            "text":  "drinking/bars",
                            "points":  27
                        },
                        {
                            "text":  "sleeping alone",
                            "points":  7
                        },
                        {
                            "text":  "sports on tv",
                            "points":  6
                        },
                        {
                            "text":  "your pet",
                            "points":  5
                        },
                        {
                            "text":  "sex",
                            "points":  3
                        },
                        {
                            "text":  "social media",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110201,
        "question":  "Name something people do in the park that would be creepy to do in a graveyard.",
        "answers":  [
                        {
                            "text":  "picnic",
                            "points":  45
                        },
                        {
                            "text":  "make out/jump bones",
                            "points":  22
                        },
                        {
                            "text":  "frisbee/games",
                            "points":  11
                        },
                        {
                            "text":  "sleep",
                            "points":  6
                        },
                        {
                            "text":  "run/walk",
                            "points":  5
                        },
                        {
                            "text":  "play in grass/dig",
                            "points":  4
                        },
                        {
                            "text":  "fly kite",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110202,
        "question":  "Name a reason that dating an older woman is the best decision a man can make.",
        "answers":  [
                        {
                            "text":  "worldly/wise",
                            "points":  45
                        },
                        {
                            "text":  "mature/no drama",
                            "points":  18
                        },
                        {
                            "text":  "honey got money",
                            "points":  18
                        },
                        {
                            "text":  "better sex",
                            "points":  7
                        },
                        {
                            "text":  "more confident",
                            "points":  4
                        },
                        {
                            "text":  "more loyal",
                            "points":  2
                        },
                        {
                            "text":  "no more kids",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110203,
        "question":  "Name a Disney character Minnie Mouse would be upset to find out gave Mickey a hickey.",
        "answers":  [
                        {
                            "text":  "daisy duck",
                            "points":  45
                        },
                        {
                            "text":  "goofy",
                            "points":  15
                        },
                        {
                            "text":  "donald duck",
                            "points":  15
                        },
                        {
                            "text":  "snow white",
                            "points":  10
                        },
                        {
                            "text":  "pluto",
                            "points":  6
                        },
                        {
                            "text":  "ariel",
                            "points":  3
                        },
                        {
                            "text":  "elsa",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110204,
        "question":  "We asked 100 married men... Name an animal your wife looks like when she gives you her mean face.",
        "answers":  [
                        {
                            "text":  "monkey/gorilla",
                            "points":  42
                        },
                        {
                            "text":  "lion",
                            "points":  15
                        },
                        {
                            "text":  "tiger",
                            "points":  15
                        },
                        {
                            "text":  "barracuda",
                            "points":  13
                        },
                        {
                            "text":  "dog/bulldog",
                            "points":  4
                        },
                        {
                            "text":  "hyena",
                            "points":  4
                        },
                        {
                            "text":  "bull",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110205,
        "question":  "We asked 100 women... What would you do if your man proposed without a ring because he lost it?",
        "answers":  [
                        {
                            "text":  "say, \"yes/it's ok\"",
                            "points":  41
                        },
                        {
                            "text":  "\"find/replace it!\"",
                            "points":  17
                        },
                        {
                            "text":  "cry",
                            "points":  12
                        },
                        {
                            "text":  "laugh",
                            "points":  11
                        },
                        {
                            "text":  "\"no!/adios!\"",
                            "points":  10
                        },
                        {
                            "text":  "help find it",
                            "points":  3
                        },
                        {
                            "text":  "scold/slap him",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110206,
        "question":  "Name something you miss doing with your ex at night.",
        "answers":  [
                        {
                            "text":  "spooning/sleep'g",
                            "points":  40
                        },
                        {
                            "text":  "shakin' the sheets!",
                            "points":  32
                        },
                        {
                            "text":  "watching tv",
                            "points":  13
                        },
                        {
                            "text":  "talking",
                            "points":  4
                        },
                        {
                            "text":  "boozing",
                            "points":  3
                        },
                        {
                            "text":  "reading aloud",
                            "points":  2
                        },
                        {
                            "text":  "arguing",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110207,
        "question":  "Fill in the blank: A woman might say, \"I hope my ex-husband is ______ right now.\"",
        "answers":  [
                        {
                            "text":  "dead/in hell",
                            "points":  40
                        },
                        {
                            "text":  "happy",
                            "points":  18
                        },
                        {
                            "text":  "miserable/sad",
                            "points":  16
                        },
                        {
                            "text":  "all alone",
                            "points":  8
                        },
                        {
                            "text":  "destitute",
                            "points":  8
                        },
                        {
                            "text":  "sick/in pain",
                            "points":  4
                        },
                        {
                            "text":  "600 lbs.",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110208,
        "question":  "We asked 100 women... The good news -- it's raining men. The bad news -- they all look like your who?",
        "answers":  [
                        {
                            "text":  "ex",
                            "points":  40
                        },
                        {
                            "text":  "father",
                            "points":  18
                        },
                        {
                            "text":  "dog/shar-pei",
                            "points":  15
                        },
                        {
                            "text":  "boss",
                            "points":  13
                        },
                        {
                            "text":  "crazy uncle",
                            "points":  4
                        },
                        {
                            "text":  "gramps",
                            "points":  3
                        },
                        {
                            "text":  "brother",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110209,
        "question":  "Name something a man might say is actually an upside to being in jail.",
        "answers":  [
                        {
                            "text":  "no wife/family",
                            "points":  36
                        },
                        {
                            "text":  "3 meals a day",
                            "points":  32
                        },
                        {
                            "text":  "no rent/bills",
                            "points":  10
                        },
                        {
                            "text":  "less chores",
                            "points":  7
                        },
                        {
                            "text":  "sleep well",
                            "points":  5
                        },
                        {
                            "text":  "no job",
                            "points":  4
                        },
                        {
                            "text":  "meet new friends!",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110210,
        "question":  "Name something you'd be surprised to see your boss wearing to work in the summer.",
        "answers":  [
                        {
                            "text":  "booty shorts",
                            "points":  36
                        },
                        {
                            "text":  "swimsuit",
                            "points":  26
                        },
                        {
                            "text":  "flip-flops",
                            "points":  14
                        },
                        {
                            "text":  "winter garb/coat",
                            "points":  7
                        },
                        {
                            "text":  "tee/tank",
                            "points":  6
                        },
                        {
                            "text":  "just a thong",
                            "points":  4
                        },
                        {
                            "text":  "hawaiian shirt",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110211,
        "question":  "At a funeral, name something specific you might notice that could make you suspect the deceased isn't dead.",
        "answers":  [
                        {
                            "text":  "moves around/waves",
                            "points":  35
                        },
                        {
                            "text":  "breathing",
                            "points":  33
                        },
                        {
                            "text":  "opens eyes/winks",
                            "points":  11
                        },
                        {
                            "text":  "no casket/empty!",
                            "points":  6
                        },
                        {
                            "text":  "corpse talks/laughs",
                            "points":  5
                        },
                        {
                            "text":  "coughs/sneezes",
                            "points":  3
                        },
                        {
                            "text":  "knocks/creaky casket",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110212,
        "question":  "Name something Santa Claus might wear when he delivers presents to kids in Hawaii.",
        "answers":  [
                        {
                            "text":  "shorts",
                            "points":  35
                        },
                        {
                            "text":  "lei",
                            "points":  27
                        },
                        {
                            "text":  "speedo",
                            "points":  14
                        },
                        {
                            "text":  "hawaiian shirt",
                            "points":  10
                        },
                        {
                            "text":  "grass skirt",
                            "points":  5
                        },
                        {
                            "text":  "wetsuit",
                            "points":  3
                        },
                        {
                            "text":  "santa suit, of course!",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110213,
        "question":  "Name something a date might smell like that would make you cut your date short.",
        "answers":  [
                        {
                            "text":  "b.o.",
                            "points":  32
                        },
                        {
                            "text":  "raw sewage",
                            "points":  23
                        },
                        {
                            "text":  "garlic",
                            "points":  11
                        },
                        {
                            "text":  "expired sardines",
                            "points":  11
                        },
                        {
                            "text":  "smoke",
                            "points":  9
                        },
                        {
                            "text":  "skunk",
                            "points":  8
                        },
                        {
                            "text":  "dirty clothes",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110214,
        "question":  "Name a reason you might say your date reminds you of a frog.",
        "answers":  [
                        {
                            "text":  "croaks/voice",
                            "points":  31
                        },
                        {
                            "text":  "frog-face/eyes",
                            "points":  29
                        },
                        {
                            "text":  "green",
                            "points":  11
                        },
                        {
                            "text":  "long darting tongue",
                            "points":  11
                        },
                        {
                            "text":  "jumpin' around",
                            "points":  6
                        },
                        {
                            "text":  "slimy/wet",
                            "points":  4
                        },
                        {
                            "text":  "he's a prince",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110215,
        "question":  "Name a complaint Rapunzel probably had about her hair.",
        "answers":  [
                        {
                            "text":  "tangled",
                            "points":  31
                        },
                        {
                            "text":  "long/trips on",
                            "points":  24
                        },
                        {
                            "text":  "dirty/hard to wash",
                            "points":  16
                        },
                        {
                            "text":  "frizz/split ends",
                            "points":  16
                        },
                        {
                            "text":  "so heavy",
                            "points":  5
                        },
                        {
                            "text":  "hard to style",
                            "points":  2
                        },
                        {
                            "text":  "gets stuck places",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110216,
        "question":  "We asked 100 married men... Name one thing about your wife that's the reason you'll never leave her.",
        "answers":  [
                        {
                            "text":  "love",
                            "points":  29
                        },
                        {
                            "text":  "money/no prenup",
                            "points":  17
                        },
                        {
                            "text":  "great cook",
                            "points":  14
                        },
                        {
                            "text":  "the sex",
                            "points":  12
                        },
                        {
                            "text":  "she's loyal",
                            "points":  9
                        },
                        {
                            "text":  "tolerates me",
                            "points":  9
                        },
                        {
                            "text":  "kind/humble",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  110217,
        "question":  "Name something grandma gives you on your birthday because she thinks you're still a child.",
        "answers":  [
                        {
                            "text":  "$10 or less",
                            "points":  26
                        },
                        {
                            "text":  "toy/game",
                            "points":  23
                        },
                        {
                            "text":  "candy",
                            "points":  21
                        },
                        {
                            "text":  "underoos/clothes",
                            "points":  16
                        },
                        {
                            "text":  "corny card",
                            "points":  5
                        },
                        {
                            "text":  "big wet kiss",
                            "points":  3
                        },
                        {
                            "text":  "coloring book",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110218,
        "question":  "At the worst hospital ever, name something that all patients might have to share.",
        "answers":  [
                        {
                            "text":  "bathroom",
                            "points":  21
                        },
                        {
                            "text":  "bedpan",
                            "points":  19
                        },
                        {
                            "text":  "room/bed",
                            "points":  19
                        },
                        {
                            "text":  "food/water/dishes",
                            "points":  15
                        },
                        {
                            "text":  "needle/iv",
                            "points":  14
                        },
                        {
                            "text":  "nurse/doc",
                            "points":  6
                        },
                        {
                            "text":  "booty thermometer",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110219,
        "question":  "Chocolate would be even better if eating lots of it made you what?",
        "answers":  [
                        {
                            "text":  "thin/fit",
                            "points":  75
                        },
                        {
                            "text":  "healthier",
                            "points":  5
                        },
                        {
                            "text":  "rich",
                            "points":  5
                        },
                        {
                            "text":  "happy",
                            "points":  3
                        },
                        {
                            "text":  "smarter",
                            "points":  3
                        },
                        {
                            "text":  "poop/be regular",
                            "points":  2
                        },
                        {
                            "text":  "taller",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110220,
        "question":  "Name something a lady cop does to her husband before she leaves the house so he won't cheat.",
        "answers":  [
                        {
                            "text":  "cuff/tie up",
                            "points":  72
                        },
                        {
                            "text":  "kiss him",
                            "points":  6
                        },
                        {
                            "text":  "tase him",
                            "points":  5
                        },
                        {
                            "text":  "frisk/for phone #'s",
                            "points":  3
                        },
                        {
                            "text":  "track/ankle monitor",
                            "points":  3
                        },
                        {
                            "text":  "threaten him",
                            "points":  3
                        },
                        {
                            "text":  "make love to him",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110221,
        "question":  "Name something you had at your first birthday party that you might also have at your 100th.",
        "answers":  [
                        {
                            "text":  "cake & ice cream",
                            "points":  69
                        },
                        {
                            "text":  "loaded diaper",
                            "points":  11
                        },
                        {
                            "text":  "balloons",
                            "points":  4
                        },
                        {
                            "text":  "candles",
                            "points":  3
                        },
                        {
                            "text":  "family/love",
                            "points":  3
                        },
                        {
                            "text":  "a bib",
                            "points":  3
                        },
                        {
                            "text":  "bald head",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110222,
        "question":  "Name something a man loses that might make him less desirable to women.",
        "answers":  [
                        {
                            "text":  "hair",
                            "points":  61
                        },
                        {
                            "text":  "job/cash",
                            "points":  15
                        },
                        {
                            "text":  "libido",
                            "points":  8
                        },
                        {
                            "text":  "physique",
                            "points":  3
                        },
                        {
                            "text":  "teeth",
                            "points":  3
                        },
                        {
                            "text":  "his temper",
                            "points":  3
                        },
                        {
                            "text":  "charm/personality",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110223,
        "question":  "We asked 100 married people... What does your partner do when they're lying that's a dead giveaway?",
        "answers":  [
                        {
                            "text":  "looks away",
                            "points":  57
                        },
                        {
                            "text":  "smiles/laughs",
                            "points":  11
                        },
                        {
                            "text":  "twitches",
                            "points":  8
                        },
                        {
                            "text":  "blinks",
                            "points":  6
                        },
                        {
                            "text":  "turns red",
                            "points":  6
                        },
                        {
                            "text":  "rolls eyes",
                            "points":  4
                        },
                        {
                            "text":  "speaks/opens mouth",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110224,
        "question":  "You might suspect that a magician had a day job as a doctor if he pulled what out of his hat?",
        "answers":  [
                        {
                            "text":  "stethoscope",
                            "points":  52
                        },
                        {
                            "text":  "body part/colon",
                            "points":  24
                        },
                        {
                            "text":  "scalpel",
                            "points":  8
                        },
                        {
                            "text":  "syringe/needle",
                            "points":  4
                        },
                        {
                            "text":  "surgical glove",
                            "points":  3
                        },
                        {
                            "text":  "a baby!",
                            "points":  2
                        },
                        {
                            "text":  "thermometer",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110225,
        "question":  "We asked 100 married people... Name something you've done to your mate's feet.",
        "answers":  [
                        {
                            "text":  "rubbed 'em",
                            "points":  50
                        },
                        {
                            "text":  "pedicure",
                            "points":  27
                        },
                        {
                            "text":  "put socks on/covered",
                            "points":  8
                        },
                        {
                            "text":  "tickled 'em",
                            "points":  3
                        },
                        {
                            "text":  "washed 'em",
                            "points":  3
                        },
                        {
                            "text":  "stepped on 'em",
                            "points":  2
                        },
                        {
                            "text":  "smelled 'em",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110226,
        "question":  "If Dr. Seuss had a birthday party, name someone you'd expect to see there.",
        "answers":  [
                        {
                            "text":  "cat in the hat",
                            "points":  45
                        },
                        {
                            "text":  "the grinch",
                            "points":  17
                        },
                        {
                            "text":  "horton",
                            "points":  11
                        },
                        {
                            "text":  "mrs. seuss",
                            "points":  7
                        },
                        {
                            "text":  "thing 1 & thing 2",
                            "points":  7
                        },
                        {
                            "text":  "the lorax",
                            "points":  5
                        },
                        {
                            "text":  "his publisher",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110227,
        "question":  "Name something Kermit the Frog has that other frogs might be jealous of.",
        "answers":  [
                        {
                            "text":  "miss piggy/a boo",
                            "points":  44
                        },
                        {
                            "text":  "a voice",
                            "points":  32
                        },
                        {
                            "text":  "fame/tv show",
                            "points":  8
                        },
                        {
                            "text":  "money",
                            "points":  3
                        },
                        {
                            "text":  "longer legs",
                            "points":  3
                        },
                        {
                            "text":  "nice green color",
                            "points":  3
                        },
                        {
                            "text":  "humor",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110228,
        "question":  "We asked 100 women... Name something you'd rather take to bed with you than a man.",
        "answers":  [
                        {
                            "text":  "my pet",
                            "points":  42
                        },
                        {
                            "text":  "a good book",
                            "points":  14
                        },
                        {
                            "text":  "stuffed animal",
                            "points":  13
                        },
                        {
                            "text":  "body pillow",
                            "points":  7
                        },
                        {
                            "text":  "sex toy",
                            "points":  7
                        },
                        {
                            "text":  "warm blanket",
                            "points":  7
                        },
                        {
                            "text":  "wine",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  110229,
        "question":  "Evil Grandma just baked some cookies for grandpa. What's in them?",
        "answers":  [
                        {
                            "text":  "laxative",
                            "points":  41
                        },
                        {
                            "text":  "poison",
                            "points":  28
                        },
                        {
                            "text":  "pot",
                            "points":  16
                        },
                        {
                            "text":  "hot peppers",
                            "points":  3
                        },
                        {
                            "text":  "raisins...yuck!",
                            "points":  3
                        },
                        {
                            "text":  "prunes",
                            "points":  2
                        },
                        {
                            "text":  "poop/rabbit turds",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110230,
        "question":  "Name a place a bride would hate to hear her groom is when he should be at the wedding.",
        "answers":  [
                        {
                            "text":  "strip club",
                            "points":  40
                        },
                        {
                            "text":  "bar",
                            "points":  24
                        },
                        {
                            "text":  "ex's/girlfriend's",
                            "points":  16
                        },
                        {
                            "text":  "jail",
                            "points":  7
                        },
                        {
                            "text":  "casino",
                            "points":  4
                        },
                        {
                            "text":  "golf course",
                            "points":  2
                        },
                        {
                            "text":  "hotel",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110231,
        "question":  "You know someone really loves a joke if they do what while they're laughing?",
        "answers":  [
                        {
                            "text":  "snort",
                            "points":  40
                        },
                        {
                            "text":  "pee",
                            "points":  20
                        },
                        {
                            "text":  "cry",
                            "points":  18
                        },
                        {
                            "text":  "fart",
                            "points":  8
                        },
                        {
                            "text":  "slap their leg",
                            "points":  4
                        },
                        {
                            "text":  "cover their mouth",
                            "points":  3
                        },
                        {
                            "text":  "gasp/can't breathe",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110232,
        "question":  "Fill in the blank: Steve Harvey should be inducted into the ______ hall of fame.",
        "answers":  [
                        {
                            "text":  "comedy",
                            "points":  34
                        },
                        {
                            "text":  "game show/host",
                            "points":  30
                        },
                        {
                            "text":  "bald man",
                            "points":  13
                        },
                        {
                            "text":  "african-american",
                            "points":  6
                        },
                        {
                            "text":  "mustache",
                            "points":  4
                        },
                        {
                            "text":  "sexy/hot lips",
                            "points":  4
                        },
                        {
                            "text":  "fashion",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110233,
        "question":  "Name something you might do to your neighbor's car if they kept parking in your space.",
        "answers":  [
                        {
                            "text":  "leave note on it",
                            "points":  32
                        },
                        {
                            "text":  "tow it",
                            "points":  24
                        },
                        {
                            "text":  "flatten tires",
                            "points":  16
                        },
                        {
                            "text":  "key it",
                            "points":  11
                        },
                        {
                            "text":  "block them in",
                            "points":  7
                        },
                        {
                            "text":  "nothing",
                            "points":  3
                        },
                        {
                            "text":  "set it on fire",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110234,
        "question":  "We asked 100 men... Fill in the blank: You know a date's not into you if she ______s after you kiss her.",
        "answers":  [
                        {
                            "text":  "pukes/gags",
                            "points":  31
                        },
                        {
                            "text":  "pulls/turns away",
                            "points":  20
                        },
                        {
                            "text":  "wipes it off",
                            "points":  16
                        },
                        {
                            "text":  "runs",
                            "points":  12
                        },
                        {
                            "text":  "yawns",
                            "points":  7
                        },
                        {
                            "text":  "frowns/makes face",
                            "points":  6
                        },
                        {
                            "text":  "spits",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110235,
        "question":  "Name something sexy you'd never want to see your mother wearing.",
        "answers":  [
                        {
                            "text":  "nightie/teddy",
                            "points":  29
                        },
                        {
                            "text":  "thong/panties",
                            "points":  28
                        },
                        {
                            "text":  "bikini",
                            "points":  21
                        },
                        {
                            "text":  "bra",
                            "points":  7
                        },
                        {
                            "text":  "miniskirt/tight dress",
                            "points":  4
                        },
                        {
                            "text":  "sexy maid costume",
                            "points":  4
                        },
                        {
                            "text":  "stripper heels",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110236,
        "question":  "We asked 100 men... My honey's heinie looks like a pair of what kind of balls?",
        "answers":  [
                        {
                            "text":  "basketballs",
                            "points":  24
                        },
                        {
                            "text":  "footballs",
                            "points":  16
                        },
                        {
                            "text":  "bowling balls",
                            "points":  15
                        },
                        {
                            "text":  "soccer balls",
                            "points":  13
                        },
                        {
                            "text":  "beach balls",
                            "points":  13
                        },
                        {
                            "text":  "tennis balls",
                            "points":  11
                        },
                        {
                            "text":  "cannonballs",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110237,
        "question":  "What does a wife wear to bed that just screams \"Not tonight -- I have a headache\"?",
        "answers":  [
                        {
                            "text":  "flannel pj's/gown",
                            "points":  57
                        },
                        {
                            "text":  "sweats",
                            "points":  16
                        },
                        {
                            "text":  "granny panties",
                            "points":  6
                        },
                        {
                            "text":  "muumuu",
                            "points":  4
                        },
                        {
                            "text":  "pants/jeans",
                            "points":  4
                        },
                        {
                            "text":  "face mask/cream",
                            "points":  4
                        },
                        {
                            "text":  "raggedy tee",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110238,
        "question":  "Name a way you'd be surprised that God got in touch with you.",
        "answers":  [
                        {
                            "text":  "text/phone call",
                            "points":  55
                        },
                        {
                            "text":  "in person",
                            "points":  14
                        },
                        {
                            "text":  "in a dream",
                            "points":  9
                        },
                        {
                            "text":  "e-mail",
                            "points":  6
                        },
                        {
                            "text":  "letter/snail mail",
                            "points":  5
                        },
                        {
                            "text":  "soc. media/tweet",
                            "points":  3
                        },
                        {
                            "text":  "through mate/lover",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110239,
        "question":  "Name a B word you'd use to describe a man's beard.",
        "answers":  [
                        {
                            "text":  "bushy",
                            "points":  55
                        },
                        {
                            "text":  "black",
                            "points":  13
                        },
                        {
                            "text":  "bristly",
                            "points":  10
                        },
                        {
                            "text":  "brown",
                            "points":  7
                        },
                        {
                            "text":  "big",
                            "points":  4
                        },
                        {
                            "text":  "beard",
                            "points":  3
                        },
                        {
                            "text":  "beautiful",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110240,
        "question":  "If scarecrows could talk, name something they might complain about.",
        "answers":  [
                        {
                            "text":  "birds/bird doo",
                            "points":  52
                        },
                        {
                            "text":  "weather/air quality",
                            "points":  13
                        },
                        {
                            "text":  "itchy straw",
                            "points":  8
                        },
                        {
                            "text":  "standing/on pole",
                            "points":  7
                        },
                        {
                            "text":  "lame outfit",
                            "points":  6
                        },
                        {
                            "text":  "bored/lonely",
                            "points":  5
                        },
                        {
                            "text":  "stupid humans",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110241,
        "question":  "Name something they might teach you at Santa school.",
        "answers":  [
                        {
                            "text":  "\"ho ho ho-ing\"",
                            "points":  47
                        },
                        {
                            "text":  "sleigh flying",
                            "points":  20
                        },
                        {
                            "text":  "toy making",
                            "points":  13
                        },
                        {
                            "text":  "gift wrapping",
                            "points":  5
                        },
                        {
                            "text":  "be nice/generous",
                            "points":  4
                        },
                        {
                            "text":  "the chimney drop",
                            "points":  3
                        },
                        {
                            "text":  "cookie eating",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110242,
        "question":  "Name something that's harder to do when you're wearing your tightest jeans.",
        "answers":  [
                        {
                            "text":  "bend/tie shoes",
                            "points":  42
                        },
                        {
                            "text":  "exercise/stretch",
                            "points":  26
                        },
                        {
                            "text":  "sit down",
                            "points":  14
                        },
                        {
                            "text":  "eat",
                            "points":  6
                        },
                        {
                            "text":  "have a quickie",
                            "points":  2
                        },
                        {
                            "text":  "breathe",
                            "points":  2
                        },
                        {
                            "text":  "dance",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110243,
        "question":  "What baked good might a baker call her bottom?",
        "answers":  [
                        {
                            "text":  "buns/honey buns",
                            "points":  41
                        },
                        {
                            "text":  "cake/cupcake",
                            "points":  21
                        },
                        {
                            "text":  "muffin",
                            "points":  13
                        },
                        {
                            "text":  "donut",
                            "points":  7
                        },
                        {
                            "text":  "bread/loaf",
                            "points":  5
                        },
                        {
                            "text":  "pie/pie crust",
                            "points":  4
                        },
                        {
                            "text":  "cookie",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110244,
        "question":  "If a man has no money for alimony, name something he'd offer his ex-wife instead.",
        "answers":  [
                        {
                            "text":  "the car",
                            "points":  36
                        },
                        {
                            "text":  "the house",
                            "points":  36
                        },
                        {
                            "text":  "chores/babysit",
                            "points":  7
                        },
                        {
                            "text":  "his bod on fridays",
                            "points":  6
                        },
                        {
                            "text":  "groceries/food",
                            "points":  4
                        },
                        {
                            "text":  "jewelry/his rolex",
                            "points":  3
                        },
                        {
                            "text":  "the cat/dog",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110245,
        "question":  "What might Taylor Swift count when she's trying to fall asleep?",
        "answers":  [
                        {
                            "text":  "money/$ signs",
                            "points":  31
                        },
                        {
                            "text":  "guys/exes",
                            "points":  24
                        },
                        {
                            "text":  "songs/albums",
                            "points":  14
                        },
                        {
                            "text":  "sheep, of course!",
                            "points":  9
                        },
                        {
                            "text":  "grammys",
                            "points":  8
                        },
                        {
                            "text":  "swifties/fans",
                            "points":  6
                        },
                        {
                            "text":  "footballs/touchdowns",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110246,
        "question":  "Name something a couple might make love on while it's moving.",
        "answers":  [
                        {
                            "text":  "train",
                            "points":  27
                        },
                        {
                            "text":  "boat",
                            "points":  27
                        },
                        {
                            "text":  "plane",
                            "points":  13
                        },
                        {
                            "text":  "truck bed/car",
                            "points":  12
                        },
                        {
                            "text":  "washer/dryer",
                            "points":  9
                        },
                        {
                            "text":  "elevator",
                            "points":  3
                        },
                        {
                            "text":  "amusement ride",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110247,
        "question":  "We asked 100 women... Good news: you're in the middle of a passionate kiss. Bad news: you open your eyes to find the guy doing what?",
        "answers":  [
                        {
                            "text":  "checking phone",
                            "points":  26
                        },
                        {
                            "text":  "watching tv",
                            "points":  23
                        },
                        {
                            "text":  "staring at me",
                            "points":  18
                        },
                        {
                            "text":  "sleeping",
                            "points":  12
                        },
                        {
                            "text":  "ogling gal/dude",
                            "points":  6
                        },
                        {
                            "text":  "grab/scratch self",
                            "points":  5
                        },
                        {
                            "text":  "making faces",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110248,
        "question":  "We asked 100 men... When women talk about you, you hope they don't say \"He is so\" what?",
        "answers":  [
                        {
                            "text":  "awful/annoying",
                            "points":  26
                        },
                        {
                            "text":  "ugly",
                            "points":  20
                        },
                        {
                            "text":  "dumb",
                            "points":  15
                        },
                        {
                            "text":  "boring/quiet",
                            "points":  13
                        },
                        {
                            "text":  "bad in bed/small",
                            "points":  13
                        },
                        {
                            "text":  "stingy",
                            "points":  4
                        },
                        {
                            "text":  "short",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110249,
        "question":  "Fill in the blank: If men came with an instruction manual, it might say \"Needs ______ daily.\"",
        "answers":  [
                        {
                            "text":  "attention/praise",
                            "points":  24
                        },
                        {
                            "text":  "food",
                            "points":  20
                        },
                        {
                            "text":  "sex",
                            "points":  17
                        },
                        {
                            "text":  "love/kisses",
                            "points":  11
                        },
                        {
                            "text":  "help/re-training",
                            "points":  10
                        },
                        {
                            "text":  "beer",
                            "points":  7
                        },
                        {
                            "text":  "bath",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  110250,
        "question":  "Name something Fred Flintstone has that a real caveman didn't.",
        "answers":  [
                        {
                            "text":  "car",
                            "points":  65
                        },
                        {
                            "text":  "pet/dino",
                            "points":  10
                        },
                        {
                            "text":  "wilma",
                            "points":  6
                        },
                        {
                            "text":  "job",
                            "points":  5
                        },
                        {
                            "text":  "trendy clothes",
                            "points":  3
                        },
                        {
                            "text":  "fruity/cocoa pebbles",
                            "points":  2
                        },
                        {
                            "text":  "disposal/pigasaurus",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110251,
        "question":  "Name something the groom's mother might do at the wedding that would make you think she and her son are a little too close.",
        "answers":  [
                        {
                            "text":  "30-second kiss",
                            "points":  63
                        },
                        {
                            "text":  "1st dance/grind",
                            "points":  12
                        },
                        {
                            "text":  "hold hands/couple",
                            "points":  7
                        },
                        {
                            "text":  "feed/wipe mouth",
                            "points":  4
                        },
                        {
                            "text":  "dress him",
                            "points":  3
                        },
                        {
                            "text":  "wear white dress",
                            "points":  2
                        },
                        {
                            "text":  "pat his booty",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110252,
        "question":  "Name a golfing term a golfing couple might use as code for nookie.",
        "answers":  [
                        {
                            "text":  "hole in one",
                            "points":  59
                        },
                        {
                            "text":  "fore",
                            "points":  11
                        },
                        {
                            "text":  "putting",
                            "points":  9
                        },
                        {
                            "text":  "long drive",
                            "points":  7
                        },
                        {
                            "text":  "bogey",
                            "points":  3
                        },
                        {
                            "text":  "tee off",
                            "points":  2
                        },
                        {
                            "text":  "hit the course",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110253,
        "question":  "Name something a skinny guy puts in his back pocket so his booty looks bigger.",
        "answers":  [
                        {
                            "text":  "wallet",
                            "points":  57
                        },
                        {
                            "text":  "socks",
                            "points":  17
                        },
                        {
                            "text":  "tissue/hankie",
                            "points":  10
                        },
                        {
                            "text":  "cell phone",
                            "points":  3
                        },
                        {
                            "text":  "produce/apple",
                            "points":  2
                        },
                        {
                            "text":  "papers",
                            "points":  2
                        },
                        {
                            "text":  "padding",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110254,
        "question":  "Name something the world's most dangerous juggler might juggle in his act.",
        "answers":  [
                        {
                            "text":  "knives/swords",
                            "points":  54
                        },
                        {
                            "text":  "chainsaws",
                            "points":  17
                        },
                        {
                            "text":  "fire",
                            "points":  8
                        },
                        {
                            "text":  "grenades/dynamite",
                            "points":  5
                        },
                        {
                            "text":  "axes",
                            "points":  4
                        },
                        {
                            "text":  "snakes",
                            "points":  3
                        },
                        {
                            "text":  "bowling balls",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110255,
        "question":  "Name something in a soap opera that might happen to a character several times.",
        "answers":  [
                        {
                            "text":  "die",
                            "points":  35
                        },
                        {
                            "text":  "married/love",
                            "points":  19
                        },
                        {
                            "text":  "hurt/coma",
                            "points":  16
                        },
                        {
                            "text":  "divorced/dumped",
                            "points":  12
                        },
                        {
                            "text":  "affairs/sex",
                            "points":  7
                        },
                        {
                            "text":  "get kissed",
                            "points":  2
                        },
                        {
                            "text":  "amnesia",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110256,
        "question":  "We asked 100 married women... Name something your husband does when he's trying to be romantic.",
        "answers":  [
                        {
                            "text":  "kisses & cuddles",
                            "points":  35
                        },
                        {
                            "text":  "massages me",
                            "points":  15
                        },
                        {
                            "text":  "cooks",
                            "points":  11
                        },
                        {
                            "text":  "gifts/flowers",
                            "points":  11
                        },
                        {
                            "text":  "dim lights/candles",
                            "points":  10
                        },
                        {
                            "text":  "puts on music",
                            "points":  9
                        },
                        {
                            "text":  "talks sexy",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110257,
        "question":  "Name a place you'd love to go to but you wouldn't want to work there.",
        "answers":  [
                        {
                            "text":  "restaurant",
                            "points":  34
                        },
                        {
                            "text":  "mall/store",
                            "points":  26
                        },
                        {
                            "text":  "bar/club",
                            "points":  14
                        },
                        {
                            "text":  "theme park/fair",
                            "points":  8
                        },
                        {
                            "text":  "movie theater",
                            "points":  5
                        },
                        {
                            "text":  "casino",
                            "points":  4
                        },
                        {
                            "text":  "strip club",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110258,
        "question":  "Name someone you'd hate to be talking smack about just as they walk into the room.",
        "answers":  [
                        {
                            "text":  "boss/coworker",
                            "points":  34
                        },
                        {
                            "text":  "my boo",
                            "points":  18
                        },
                        {
                            "text":  "parent",
                            "points":  16
                        },
                        {
                            "text":  "bff",
                            "points":  8
                        },
                        {
                            "text":  "mother-in-law",
                            "points":  7
                        },
                        {
                            "text":  "sibling",
                            "points":  6
                        },
                        {
                            "text":  "fighter/mike tyson",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110259,
        "question":  "We asked 100 women... My body is bottle shaped. Unfortunately, it's what kind of bottle?",
        "answers":  [
                        {
                            "text":  "soda/2-liter",
                            "points":  32
                        },
                        {
                            "text":  "wine bottle",
                            "points":  20
                        },
                        {
                            "text":  "milk jug",
                            "points":  19
                        },
                        {
                            "text":  "beer bottle",
                            "points":  10
                        },
                        {
                            "text":  "baby bottle",
                            "points":  5
                        },
                        {
                            "text":  "ketchup bottle",
                            "points":  4
                        },
                        {
                            "text":  "bleach bottle",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110260,
        "question":  "Name something a man might not bother cleaning until it starts to stink.",
        "answers":  [
                        {
                            "text":  "toilet/house",
                            "points":  27
                        },
                        {
                            "text":  "himself/feet",
                            "points":  27
                        },
                        {
                            "text":  "undies/garb",
                            "points":  23
                        },
                        {
                            "text":  "car",
                            "points":  5
                        },
                        {
                            "text":  "the fridge",
                            "points":  4
                        },
                        {
                            "text":  "garbage can",
                            "points":  4
                        },
                        {
                            "text":  "sheets",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110261,
        "question":  "Name something a cat has that you don't.",
        "answers":  [
                        {
                            "text":  "tail",
                            "points":  27
                        },
                        {
                            "text":  "claws/paws",
                            "points":  24
                        },
                        {
                            "text":  "9 lives",
                            "points":  16
                        },
                        {
                            "text":  "whiskers",
                            "points":  13
                        },
                        {
                            "text":  "fur",
                            "points":  9
                        },
                        {
                            "text":  "nap time",
                            "points":  2
                        },
                        {
                            "text":  "balance/flexibility",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110262,
        "question":  "Name something grandma might like to replace grandpa with for companionship.",
        "answers":  [
                        {
                            "text":  "dog/pet",
                            "points":  60
                        },
                        {
                            "text":  "tv",
                            "points":  10
                        },
                        {
                            "text":  "other man/frat boy",
                            "points":  7
                        },
                        {
                            "text":  "grandkids",
                            "points":  7
                        },
                        {
                            "text":  "cozy quilt/pillow",
                            "points":  3
                        },
                        {
                            "text":  "tablet/phone app",
                            "points":  3
                        },
                        {
                            "text":  "battery-operated boo",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110263,
        "question":  "It's never a good idea for a man to criticize his wife if she's holding what in her hand?",
        "answers":  [
                        {
                            "text":  "a knife",
                            "points":  58
                        },
                        {
                            "text":  "a pan/pot",
                            "points":  13
                        },
                        {
                            "text":  "a gun3",
                            "points":  8
                        },
                        {
                            "text":  "his \"package\"",
                            "points":  4
                        },
                        {
                            "text":  "a hammer",
                            "points":  3
                        },
                        {
                            "text":  "a rolling pin",
                            "points":  3
                        },
                        {
                            "text":  "a purse/wallet",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110264,
        "question":  "If we repaid France with their own Statue of Liberty, what French item might it be holding?",
        "answers":  [
                        {
                            "text":  "baguette/pastry",
                            "points":  56
                        },
                        {
                            "text":  "champagne",
                            "points":  11
                        },
                        {
                            "text":  "french fries",
                            "points":  10
                        },
                        {
                            "text":  "flag",
                            "points":  5
                        },
                        {
                            "text":  "beret",
                            "points":  5
                        },
                        {
                            "text":  "mini eiffel tower",
                            "points":  3
                        },
                        {
                            "text":  "cheese/camembert",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110265,
        "question":  "Name an occasion that Jane might tell Tarzan to ditch the loincloth and put on a suit.",
        "answers":  [
                        {
                            "text":  "wedding",
                            "points":  50
                        },
                        {
                            "text":  "date night/dance",
                            "points":  10
                        },
                        {
                            "text":  "meet her folks",
                            "points":  8
                        },
                        {
                            "text":  "party/her b-day",
                            "points":  7
                        },
                        {
                            "text":  "church",
                            "points":  6
                        },
                        {
                            "text":  "work/job interview",
                            "points":  6
                        },
                        {
                            "text":  "funeral",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  110266,
        "question":  "Name something on your face that looks scary in a magnifying mirror.",
        "answers":  [
                        {
                            "text":  "nose/nose hair",
                            "points":  49
                        },
                        {
                            "text":  "zit/boil",
                            "points":  11
                        },
                        {
                            "text":  "gaping pores",
                            "points":  9
                        },
                        {
                            "text":  "mole/age spot",
                            "points":  9
                        },
                        {
                            "text":  "brows/facial hair",
                            "points":  6
                        },
                        {
                            "text":  "wrinkles",
                            "points":  5
                        },
                        {
                            "text":  "wonky eye",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110267,
        "question":  "Fill in the blank: Just between us, I think I'm the best-looking person in my ______.",
        "answers":  [
                        {
                            "text":  "family/house",
                            "points":  48
                        },
                        {
                            "text":  "office",
                            "points":  14
                        },
                        {
                            "text":  "class",
                            "points":  12
                        },
                        {
                            "text":  "friend group",
                            "points":  6
                        },
                        {
                            "text":  "neighborhood",
                            "points":  5
                        },
                        {
                            "text":  "car/uber",
                            "points":  4
                        },
                        {
                            "text":  "own imagination",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110268,
        "question":  "A woman might tell her man, \"I love you, but stop squeezing me like I'm a\" what?",
        "answers":  [
                        {
                            "text":  "lemon/fruit",
                            "points":  37
                        },
                        {
                            "text":  "doll/plushie",
                            "points":  24
                        },
                        {
                            "text":  "wet sponge",
                            "points":  9
                        },
                        {
                            "text":  "stress ball",
                            "points":  8
                        },
                        {
                            "text":  "pillow/cushion",
                            "points":  8
                        },
                        {
                            "text":  "balloon",
                            "points":  3
                        },
                        {
                            "text":  "toothpaste tube",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110269,
        "question":  "A friend really tests your friendship when they ask you to do what for them?",
        "answers":  [
                        {
                            "text":  "lie",
                            "points":  36
                        },
                        {
                            "text":  "loan $$$",
                            "points":  34
                        },
                        {
                            "text":  "help 'em move",
                            "points":  8
                        },
                        {
                            "text":  "babysit their kid",
                            "points":  5
                        },
                        {
                            "text":  "airport ride",
                            "points":  4
                        },
                        {
                            "text":  "steal",
                            "points":  3
                        },
                        {
                            "text":  "bury a body",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110270,
        "question":  "We asked 100 married women... Name a reason your husband could never be a gigolo.",
        "answers":  [
                        {
                            "text":  "too chubby",
                            "points":  35
                        },
                        {
                            "text":  "lazy/no stamina",
                            "points":  20
                        },
                        {
                            "text":  "dude's ugly",
                            "points":  11
                        },
                        {
                            "text":  "too short",
                            "points":  9
                        },
                        {
                            "text":  "he's ancient",
                            "points":  7
                        },
                        {
                            "text":  "shy/hates people",
                            "points":  5
                        },
                        {
                            "text":  "loyal to me",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  110271,
        "question":  "We asked 100 men... If you took a mermaid on a dinner date, name something she might order to eat.",
        "answers":  [
                        {
                            "text":  "fish/tuna",
                            "points":  32
                        },
                        {
                            "text":  "lobster",
                            "points":  16
                        },
                        {
                            "text":  "shrimp",
                            "points":  13
                        },
                        {
                            "text":  "caviar",
                            "points":  11
                        },
                        {
                            "text":  "sushi",
                            "points":  9
                        },
                        {
                            "text":  "seaweed",
                            "points":  8
                        },
                        {
                            "text":  "snails",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110272,
        "question":  "Name a part of you that rarely gets any soap on it when you take a shower.",
        "answers":  [
                        {
                            "text":  "back",
                            "points":  32
                        },
                        {
                            "text":  "feet/toes",
                            "points":  16
                        },
                        {
                            "text":  "ears",
                            "points":  13
                        },
                        {
                            "text":  "badonk",
                            "points":  10
                        },
                        {
                            "text":  "eyes/face",
                            "points":  10
                        },
                        {
                            "text":  "hair/head",
                            "points":  6
                        },
                        {
                            "text":  "legs",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  110273,
        "question":  "Name a reason a woman might say she prefers bald men.",
        "answers":  [
                        {
                            "text":  "so sexy!",
                            "points":  28
                        },
                        {
                            "text":  "hates hair/shed'g",
                            "points":  25
                        },
                        {
                            "text":  "fun to rub",
                            "points":  16
                        },
                        {
                            "text":  "no maintenance",
                            "points":  11
                        },
                        {
                            "text":  "likes older men",
                            "points":  6
                        },
                        {
                            "text":  "see reflection",
                            "points":  3
                        },
                        {
                            "text":  "more humble/meek",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110274,
        "question":  "We asked 100 women... Even if it's true, you should never tell your best friend that she's what?",
        "answers":  [
                        {
                            "text":  "\"well fed\"",
                            "points":  59
                        },
                        {
                            "text":  "kinda ugly",
                            "points":  16
                        },
                        {
                            "text":  "an airhead",
                            "points":  6
                        },
                        {
                            "text":  "mean",
                            "points":  3
                        },
                        {
                            "text":  "stinky",
                            "points":  3
                        },
                        {
                            "text":  "annoying",
                            "points":  2
                        },
                        {
                            "text":  "old/looks it",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110275,
        "question":  "Name something a cowboy might say to his horse and to his cowgirl in the bedroom.",
        "answers":  [
                        {
                            "text":  "giddy-up!",
                            "points":  51
                        },
                        {
                            "text":  "whoa nellie!",
                            "points":  20
                        },
                        {
                            "text":  "howdy/night, pardner",
                            "points":  8
                        },
                        {
                            "text":  "yeehaw!",
                            "points":  5
                        },
                        {
                            "text":  "let's ride!",
                            "points":  3
                        },
                        {
                            "text":  "easy, girl!",
                            "points":  2
                        },
                        {
                            "text":  "good girl!",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110276,
        "question":  "Name a fabric that's also a good stripper name.",
        "answers":  [
                        {
                            "text":  "silk",
                            "points":  37
                        },
                        {
                            "text":  "satin/sateen",
                            "points":  19
                        },
                        {
                            "text":  "velvet",
                            "points":  15
                        },
                        {
                            "text":  "cotton",
                            "points":  10
                        },
                        {
                            "text":  "lace",
                            "points":  5
                        },
                        {
                            "text":  "chiffon",
                            "points":  3
                        },
                        {
                            "text":  "nylon",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110277,
        "question":  "Name something nice that you wish all people smelled like.",
        "answers":  [
                        {
                            "text":  "flowers/lilacs",
                            "points":  36
                        },
                        {
                            "text":  "vanilla",
                            "points":  19
                        },
                        {
                            "text":  "fruit/citrus",
                            "points":  16
                        },
                        {
                            "text":  "soap",
                            "points":  11
                        },
                        {
                            "text":  "fresh breeze",
                            "points":  3
                        },
                        {
                            "text":  "donuts/pastries",
                            "points":  3
                        },
                        {
                            "text":  "baby powder",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110278,
        "question":  "If your cat became a rapper, name something it might rap about.",
        "answers":  [
                        {
                            "text":  "cat food/\"feed me\"",
                            "points":  35
                        },
                        {
                            "text":  "mice",
                            "points":  15
                        },
                        {
                            "text":  "litter box",
                            "points":  12
                        },
                        {
                            "text":  "catnip/drugs",
                            "points":  11
                        },
                        {
                            "text":  "naps/bein' lazy",
                            "points":  8
                        },
                        {
                            "text":  "\"dawgs\"",
                            "points":  7
                        },
                        {
                            "text":  "fur/hairballs",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110279,
        "question":  "We asked 100 men... Fill in the blank: You secretly wish you were a professional ______.",
        "answers":  [
                        {
                            "text":  "athlete",
                            "points":  58
                        },
                        {
                            "text":  "writer",
                            "points":  9
                        },
                        {
                            "text":  "musician/singer",
                            "points":  9
                        },
                        {
                            "text":  "astronaut",
                            "points":  5
                        },
                        {
                            "text":  "gigolo",
                            "points":  3
                        },
                        {
                            "text":  "actor",
                            "points":  3
                        },
                        {
                            "text":  "assassin",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110280,
        "question":  "You're in a restaurant. You see your blind date arrive. Tell me why you might run for the exit.",
        "answers":  [
                        {
                            "text":  "ug-ly/unibrow",
                            "points":  48
                        },
                        {
                            "text":  "it's my ex",
                            "points":  11
                        },
                        {
                            "text":  "body/too short",
                            "points":  9
                        },
                        {
                            "text":  "we're related",
                            "points":  9
                        },
                        {
                            "text":  "dirty/sloppy",
                            "points":  6
                        },
                        {
                            "text":  "too old/young",
                            "points":  4
                        },
                        {
                            "text":  "tacky dresser",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110281,
        "question":  "If a man doesn't buy his wife roses on Valentine's Day, he won't get whoopee again until what holiday?",
        "answers":  [
                        {
                            "text":  "christmas",
                            "points":  46
                        },
                        {
                            "text":  "4th of july",
                            "points":  16
                        },
                        {
                            "text":  "next valentine's day",
                            "points":  8
                        },
                        {
                            "text":  "easter",
                            "points":  7
                        },
                        {
                            "text":  "st. patrick's day",
                            "points":  5
                        },
                        {
                            "text":  "new year's",
                            "points":  5
                        },
                        {
                            "text":  "thanksgiving",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110282,
        "question":  "You really don't want people posting pictures of you when you're where?",
        "answers":  [
                        {
                            "text":  "bathroom/shower",
                            "points":  46
                        },
                        {
                            "text":  "strip club",
                            "points":  13
                        },
                        {
                            "text":  "bar",
                            "points":  9
                        },
                        {
                            "text":  "beach/pool",
                            "points":  9
                        },
                        {
                            "text":  "in bed",
                            "points":  6
                        },
                        {
                            "text":  "work",
                            "points":  4
                        },
                        {
                            "text":  "gym",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110283,
        "question":  "Grandma might ask grandpa to hold her what while she takes a skinny dip?",
        "answers":  [
                        {
                            "text":  "garb/granny panties",
                            "points":  45
                        },
                        {
                            "text":  "teeth",
                            "points":  13
                        },
                        {
                            "text":  "towel",
                            "points":  9
                        },
                        {
                            "text":  "glasses",
                            "points":  8
                        },
                        {
                            "text":  "purse",
                            "points":  7
                        },
                        {
                            "text":  "cane/walker",
                            "points":  4
                        },
                        {
                            "text":  "her boobs up",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110284,
        "question":  "If you were in prison for ten years, what's the first thing you'd do when you get out?",
        "answers":  [
                        {
                            "text":  "eat/cracker barrel",
                            "points":  44
                        },
                        {
                            "text":  "see/hug fam",
                            "points":  13
                        },
                        {
                            "text":  "hit the beach",
                            "points":  10
                        },
                        {
                            "text":  "have sex",
                            "points":  8
                        },
                        {
                            "text":  "shower alone",
                            "points":  7
                        },
                        {
                            "text":  "smoke/cubans",
                            "points":  4
                        },
                        {
                            "text":  "have a drink",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110285,
        "question":  "A newsperson might get caught doing what when they think the camera's off?",
        "answers":  [
                        {
                            "text":  "pick/blow nose",
                            "points":  38
                        },
                        {
                            "text":  "talk smack/laugh",
                            "points":  19
                        },
                        {
                            "text":  "cursing",
                            "points":  13
                        },
                        {
                            "text":  "primp/pick wedgie",
                            "points":  10
                        },
                        {
                            "text":  "belch'g/farting",
                            "points":  6
                        },
                        {
                            "text":  "eating",
                            "points":  2
                        },
                        {
                            "text":  "checking phone",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110286,
        "question":  "As soon as a mean boss arrives at the office, they hurl what at their assistant?",
        "answers":  [
                        {
                            "text":  "papers/work",
                            "points":  36
                        },
                        {
                            "text":  "insults/criticism",
                            "points":  31
                        },
                        {
                            "text":  "their coat",
                            "points":  9
                        },
                        {
                            "text":  "curse words",
                            "points":  4
                        },
                        {
                            "text":  "pens",
                            "points":  4
                        },
                        {
                            "text":  "coffee",
                            "points":  3
                        },
                        {
                            "text":  "a stapler",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110287,
        "question":  "Name something a farmer might lie about on his FarmersOnly.com dating profile.",
        "answers":  [
                        {
                            "text":  "size of farm",
                            "points":  29
                        },
                        {
                            "text":  "big tractor/plow",
                            "points":  16
                        },
                        {
                            "text":  "looks/body",
                            "points":  10
                        },
                        {
                            "text":  "wealth",
                            "points":  10
                        },
                        {
                            "text":  "age",
                            "points":  9
                        },
                        {
                            "text":  "animals/prize pig",
                            "points":  9
                        },
                        {
                            "text":  "crops",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  110288,
        "question":  "Name something Minnie Mouse might do if Mickey got fresh with another mouse.",
        "answers":  [
                        {
                            "text":  "dump him",
                            "points":  28
                        },
                        {
                            "text":  "slap him",
                            "points":  24
                        },
                        {
                            "text":  "pull his ears",
                            "points":  12
                        },
                        {
                            "text":  "mousetrap/kill",
                            "points":  10
                        },
                        {
                            "text":  "cheat/kiss donald",
                            "points":  6
                        },
                        {
                            "text":  "cut off his tail",
                            "points":  5
                        },
                        {
                            "text":  "throw a fit/yell",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  110289,
        "question":  "We asked 100 married women... Tell me why you don't think your husband is going to heaven.",
        "answers":  [
                        {
                            "text":  "he's a jerk",
                            "points":  26
                        },
                        {
                            "text":  "he cheats",
                            "points":  20
                        },
                        {
                            "text":  "he lies",
                            "points":  14
                        },
                        {
                            "text":  "he cusses",
                            "points":  14
                        },
                        {
                            "text":  "he farts too much",
                            "points":  8
                        },
                        {
                            "text":  "porn connoisseur",
                            "points":  5
                        },
                        {
                            "text":  "he's a slob",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110290,
        "question":  "We asked 100 women... What does a man do the first time you kiss him that would make it the last time?",
        "answers":  [
                        {
                            "text":  "cop a feel",
                            "points":  25
                        },
                        {
                            "text":  "drool/eat face",
                            "points":  16
                        },
                        {
                            "text":  "use tongue",
                            "points":  15
                        },
                        {
                            "text":  "bite",
                            "points":  12
                        },
                        {
                            "text":  "burp & blow",
                            "points":  9
                        },
                        {
                            "text":  "pull away/cringe",
                            "points":  7
                        },
                        {
                            "text":  "bad breath",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  110291,
        "question":  "What would you do if you found out your partner secretly went through your phone?",
        "answers":  [
                        {
                            "text":  "ask why",
                            "points":  21
                        },
                        {
                            "text":  "go through theirs",
                            "points":  17
                        },
                        {
                            "text":  "get mad/yell",
                            "points":  16
                        },
                        {
                            "text":  "break up",
                            "points":  13
                        },
                        {
                            "text":  "new passcode",
                            "points":  10
                        },
                        {
                            "text":  "nothing",
                            "points":  8
                        },
                        {
                            "text":  "laugh",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  110292,
        "question":  "Tell me another word for underwear.",
        "answers":  [
                        {
                            "text":  "panties",
                            "points":  63
                        },
                        {
                            "text":  "drawers",
                            "points":  12
                        },
                        {
                            "text":  "undergarments",
                            "points":  4
                        },
                        {
                            "text":  "knickers",
                            "points":  3
                        },
                        {
                            "text":  "undies",
                            "points":  3
                        },
                        {
                            "text":  "boxers",
                            "points":  2
                        },
                        {
                            "text":  "skivvies",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110293,
        "question":  "On Christmas morning, you'd be shocked to wake up and find Santa doing what in your house?",
        "answers":  [
                        {
                            "text":  "sleeping",
                            "points":  50
                        },
                        {
                            "text":  "eat/cooking",
                            "points":  12
                        },
                        {
                            "text":  "nookie/mommy",
                            "points":  9
                        },
                        {
                            "text":  "pooping/in stocking",
                            "points":  9
                        },
                        {
                            "text":  "anything!",
                            "points":  3
                        },
                        {
                            "text":  "cleaning",
                            "points":  3
                        },
                        {
                            "text":  "bathing",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110294,
        "question":  "You can tell someone watches a lot of \"Family Feud\" if their pet parrot keeps saying what?",
        "answers":  [
                        {
                            "text":  "survey says",
                            "points":  44
                        },
                        {
                            "text":  "top answer is...",
                            "points":  21
                        },
                        {
                            "text":  "good answer!",
                            "points":  11
                        },
                        {
                            "text":  "steve harvey!",
                            "points":  5
                        },
                        {
                            "text":  "show me...",
                            "points":  3
                        },
                        {
                            "text":  "name something",
                            "points":  3
                        },
                        {
                            "text":  "$20,000!",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110295,
        "question":  "On Christmas morning, you discover Santa Claus is stuck in your chimney. Tell me the first thing you do.",
        "answers":  [
                        {
                            "text":  "call 9-1-1",
                            "points":  40
                        },
                        {
                            "text":  "help/pull him",
                            "points":  22
                        },
                        {
                            "text":  "laugh!",
                            "points":  10
                        },
                        {
                            "text":  "take pictures",
                            "points":  6
                        },
                        {
                            "text":  "gasp/scream",
                            "points":  4
                        },
                        {
                            "text":  "light the fire",
                            "points":  4
                        },
                        {
                            "text":  "steal gift sack",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110296,
        "question":  "Name something your lover can put on you but can't nobody else can.",
        "answers":  [
                        {
                            "text":  "hands/lips/bod",
                            "points":  38
                        },
                        {
                            "text":  "whipped cream/food",
                            "points":  22
                        },
                        {
                            "text":  "clothes/thong",
                            "points":  9
                        },
                        {
                            "text":  "lotion/oil",
                            "points":  9
                        },
                        {
                            "text":  "cuffs/harness",
                            "points":  5
                        },
                        {
                            "text":  "guilt trip",
                            "points":  3
                        },
                        {
                            "text":  "a ring",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110297,
        "question":  "Name a bad occasion for your deodorant to lose its effectiveness.",
        "answers":  [
                        {
                            "text":  "on a date",
                            "points":  33
                        },
                        {
                            "text":  "job/interview",
                            "points":  29
                        },
                        {
                            "text":  "wedding",
                            "points":  9
                        },
                        {
                            "text":  "sex",
                            "points":  7
                        },
                        {
                            "text":  "riding in elevator",
                            "points":  5
                        },
                        {
                            "text":  "party",
                            "points":  3
                        },
                        {
                            "text":  "gym/sports",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110298,
        "question":  "We asked 100 women... Name something you'd do if your fiancé's mother came to your wedding wearing her white wedding dress.",
        "answers":  [
                        {
                            "text":  "mad/\"go change!\"",
                            "points":  26
                        },
                        {
                            "text":  "nothing/ignore",
                            "points":  21
                        },
                        {
                            "text":  "think it's funny",
                            "points":  15
                        },
                        {
                            "text":  "cry",
                            "points":  13
                        },
                        {
                            "text":  "spill wine on her",
                            "points":  6
                        },
                        {
                            "text":  "make face",
                            "points":  4
                        },
                        {
                            "text":  "snarky comment",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110299,
        "question":  "Name something on a person's face that you'd have a hard time not staring at.",
        "answers":  [
                        {
                            "text":  "explosive zit",
                            "points":  26
                        },
                        {
                            "text":  "snotty honker",
                            "points":  20
                        },
                        {
                            "text":  "hairy mole",
                            "points":  16
                        },
                        {
                            "text":  "eyes/lashes",
                            "points":  10
                        },
                        {
                            "text":  "cauliflower wart",
                            "points":  7
                        },
                        {
                            "text":  "food",
                            "points":  6
                        },
                        {
                            "text":  "piercing",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110300,
        "question":  "Name something a married man has learned to do when his wife is really mad at him.",
        "answers":  [
                        {
                            "text":  "run/hide",
                            "points":  24
                        },
                        {
                            "text":  "apologize/beg",
                            "points":  23
                        },
                        {
                            "text":  "shut up",
                            "points":  23
                        },
                        {
                            "text":  "buy gifts/roses",
                            "points":  7
                        },
                        {
                            "text":  "chores/cook",
                            "points":  5
                        },
                        {
                            "text":  "ignore her",
                            "points":  4
                        },
                        {
                            "text":  "agree/obey",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110301,
        "question":  "Name a way a nudist might warm up his buns.",
        "answers":  [
                        {
                            "text":  "by a fire",
                            "points":  23
                        },
                        {
                            "text":  "sunbathe",
                            "points":  22
                        },
                        {
                            "text":  "rub/spank/hands",
                            "points":  20
                        },
                        {
                            "text":  "sit on them",
                            "points":  13
                        },
                        {
                            "text":  "hot tub/shower",
                            "points":  5
                        },
                        {
                            "text":  "get dressed",
                            "points":  3
                        },
                        {
                            "text":  "in oven/toaster",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110302,
        "question":  "Name something people ride when they're looking for a cheap thrill.",
        "answers":  [
                        {
                            "text":  "amusement ride",
                            "points":  60
                        },
                        {
                            "text":  "motorcycle",
                            "points":  8
                        },
                        {
                            "text":  "bicycle",
                            "points":  5
                        },
                        {
                            "text":  "each other",
                            "points":  5
                        },
                        {
                            "text":  "mechanical bull",
                            "points":  4
                        },
                        {
                            "text":  "city bus",
                            "points":  3
                        },
                        {
                            "text":  "car",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110303,
        "question":  "Name something that Darth Vader might take off his helmet to do.",
        "answers":  [
                        {
                            "text":  "eat/drink",
                            "points":  56
                        },
                        {
                            "text":  "wash up",
                            "points":  10
                        },
                        {
                            "text":  "make out",
                            "points":  5
                        },
                        {
                            "text":  "sleep",
                            "points":  5
                        },
                        {
                            "text":  "brush teeth",
                            "points":  5
                        },
                        {
                            "text":  "scratch an itch",
                            "points":  4
                        },
                        {
                            "text":  "scare everyone",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110304,
        "question":  "If your grandma had a YouTube channel, what would her videos be about?",
        "answers":  [
                        {
                            "text":  "cookin' & bakin'",
                            "points":  48
                        },
                        {
                            "text":  "knittin' & sewin'",
                            "points":  17
                        },
                        {
                            "text":  "cats & dogs",
                            "points":  7
                        },
                        {
                            "text":  "gardening",
                            "points":  6
                        },
                        {
                            "text":  "her family",
                            "points":  4
                        },
                        {
                            "text":  "games/bridge tips",
                            "points":  3
                        },
                        {
                            "text":  "nookie after 80",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110305,
        "question":  "Name something that's inappropriate to comment on at a funeral.",
        "answers":  [
                        {
                            "text":  "the corpse",
                            "points":  44
                        },
                        {
                            "text":  "the will/$$$",
                            "points":  15
                        },
                        {
                            "text":  "jerk/glad dead",
                            "points":  12
                        },
                        {
                            "text":  "how died",
                            "points":  7
                        },
                        {
                            "text":  "lame casket",
                            "points":  4
                        },
                        {
                            "text":  "tacky flowers",
                            "points":  3
                        },
                        {
                            "text":  "the guests",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110306,
        "question":  "Name something a really dumb guy might do with his eyes shut.",
        "answers":  [
                        {
                            "text":  "drive",
                            "points":  38
                        },
                        {
                            "text":  "walk/run",
                            "points":  30
                        },
                        {
                            "text":  "shave",
                            "points":  5
                        },
                        {
                            "text":  "eat",
                            "points":  5
                        },
                        {
                            "text":  "cook/carve food",
                            "points":  4
                        },
                        {
                            "text":  "watch movie/tv",
                            "points":  3
                        },
                        {
                            "text":  "hammer/repairs",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110307,
        "question":  "What do the Wicked Witch's friends make fun of about her behind her back?",
        "answers":  [
                        {
                            "text":  "long nose",
                            "points":  35
                        },
                        {
                            "text":  "she's green",
                            "points":  16
                        },
                        {
                            "text":  "voice/cackle",
                            "points":  9
                        },
                        {
                            "text":  "can't bathe/smells",
                            "points":  9
                        },
                        {
                            "text":  "warts/moles",
                            "points":  9
                        },
                        {
                            "text":  "hair",
                            "points":  6
                        },
                        {
                            "text":  "clothes/hat",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110308,
        "question":  "Name something a man would hate to find out his wife did with his lucky underwear.",
        "answers":  [
                        {
                            "text":  "laundered/shrunk",
                            "points":  31
                        },
                        {
                            "text":  "threw it away",
                            "points":  18
                        },
                        {
                            "text":  "used as t.p.",
                            "points":  12
                        },
                        {
                            "text":  "ripped/cut it",
                            "points":  9
                        },
                        {
                            "text":  "cleaned w/ it",
                            "points":  9
                        },
                        {
                            "text":  "lost it",
                            "points":  5
                        },
                        {
                            "text":  "burned it",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110309,
        "question":  "Name something of yours that you shouldn't tell your boss is better than his.",
        "answers":  [
                        {
                            "text":  "car",
                            "points":  30
                        },
                        {
                            "text":  "house",
                            "points":  16
                        },
                        {
                            "text":  "work/skills",
                            "points":  12
                        },
                        {
                            "text":  "iq",
                            "points":  10
                        },
                        {
                            "text":  "income",
                            "points":  8
                        },
                        {
                            "text":  "spouse/love life",
                            "points":  7
                        },
                        {
                            "text":  "personality/'tude",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  110310,
        "question":  "We asked 100 women... My man is so attractive that I'm willing to overlook that he is also what?",
        "answers":  [
                        {
                            "text":  "dumb as dirt",
                            "points":  27
                        },
                        {
                            "text":  "an annoying jerk",
                            "points":  16
                        },
                        {
                            "text":  "broke",
                            "points":  12
                        },
                        {
                            "text":  "lazy",
                            "points":  10
                        },
                        {
                            "text":  "quiet/borrrring!",
                            "points":  10
                        },
                        {
                            "text":  "a slob",
                            "points":  8
                        },
                        {
                            "text":  "short",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  110311,
        "question":  "It's bad if a husband is cheating. It's worse if his mistress uses his wife's what?",
        "answers":  [
                        {
                            "text":  "toothbrush",
                            "points":  23
                        },
                        {
                            "text":  "lingerie/clothes",
                            "points":  22
                        },
                        {
                            "text":  "bed",
                            "points":  20
                        },
                        {
                            "text":  "sex toys",
                            "points":  9
                        },
                        {
                            "text":  "makeup",
                            "points":  6
                        },
                        {
                            "text":  "car",
                            "points":  5
                        },
                        {
                            "text":  "perfume",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110312,
        "question":  "Name something you don't feel comfortable doing at a neat freak's house.",
        "answers":  [
                        {
                            "text":  "eating/drinking",
                            "points":  34
                        },
                        {
                            "text":  "using bathroom",
                            "points":  19
                        },
                        {
                            "text":  "wearing shoes",
                            "points":  12
                        },
                        {
                            "text":  "touching anything",
                            "points":  7
                        },
                        {
                            "text":  "sitting down",
                            "points":  6
                        },
                        {
                            "text":  "cooking",
                            "points":  5
                        },
                        {
                            "text":  "put'g feet up",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110313,
        "question":  "In your nightmare, you're naked and you're where?",
        "answers":  [
                        {
                            "text":  "work",
                            "points":  32
                        },
                        {
                            "text":  "school",
                            "points":  19
                        },
                        {
                            "text":  "church",
                            "points":  13
                        },
                        {
                            "text":  "mall/store",
                            "points":  12
                        },
                        {
                            "text":  "in the woods",
                            "points":  5
                        },
                        {
                            "text":  "theme park",
                            "points":  3
                        },
                        {
                            "text":  "home/front yard",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110314,
        "question":  "We asked 100 men... Name a place you would never take a first date.",
        "answers":  [
                        {
                            "text":  "strip joint",
                            "points":  32
                        },
                        {
                            "text":  "tacky restaurant",
                            "points":  15
                        },
                        {
                            "text":  "parents' house",
                            "points":  14
                        },
                        {
                            "text":  "bar/dance club",
                            "points":  9
                        },
                        {
                            "text":  "sports/tractor pull",
                            "points":  9
                        },
                        {
                            "text":  "church",
                            "points":  5
                        },
                        {
                            "text":  "home/bed",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110315,
        "question":  "Give me a word that rhymes with \"clump.\"",
        "answers":  [
                        {
                            "text":  "dump",
                            "points":  29
                        },
                        {
                            "text":  "chump",
                            "points":  20
                        },
                        {
                            "text":  "bump",
                            "points":  18
                        },
                        {
                            "text":  "slump",
                            "points":  6
                        },
                        {
                            "text":  "stump",
                            "points":  5
                        },
                        {
                            "text":  "plump",
                            "points":  5
                        },
                        {
                            "text":  "pump",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110316,
        "question":  "Fill in the blank: A woman might say, \"I dumped my new boyfriend when I found out that his mom still ______s him.\"",
        "answers":  [
                        {
                            "text":  "bathes",
                            "points":  28
                        },
                        {
                            "text":  "feeds/nurses",
                            "points":  21
                        },
                        {
                            "text":  "dresses",
                            "points":  14
                        },
                        {
                            "text":  "lives with",
                            "points":  7
                        },
                        {
                            "text":  "pays for/supports",
                            "points":  7
                        },
                        {
                            "text":  "cleans for",
                            "points":  6
                        },
                        {
                            "text":  "spanks",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110317,
        "question":  "Name a creature with no hair on it.",
        "answers":  [
                        {
                            "text":  "snake",
                            "points":  27
                        },
                        {
                            "text":  "fish/shark",
                            "points":  20
                        },
                        {
                            "text":  "hairless cat",
                            "points":  18
                        },
                        {
                            "text":  "bird",
                            "points":  8
                        },
                        {
                            "text":  "lizard",
                            "points":  5
                        },
                        {
                            "text":  "baby mouse/rat",
                            "points":  5
                        },
                        {
                            "text":  "steve/some people",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110318,
        "question":  "Name something they hand you when you get to heaven.",
        "answers":  [
                        {
                            "text":  "cute wings",
                            "points":  26
                        },
                        {
                            "text":  "jazzy halo",
                            "points":  19
                        },
                        {
                            "text":  "robe",
                            "points":  16
                        },
                        {
                            "text":  "keys/to pearly gates",
                            "points":  14
                        },
                        {
                            "text":  "drink/brewski",
                            "points":  5
                        },
                        {
                            "text":  "map/brochure",
                            "points":  4
                        },
                        {
                            "text":  "harp",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110319,
        "question":  "We asked 100 women... Tell me a reason your blind date ended almost immediately.",
        "answers":  [
                        {
                            "text":  "rude/douchey",
                            "points":  23
                        },
                        {
                            "text":  "pee-yew!",
                            "points":  23
                        },
                        {
                            "text":  "no chemistry/bore",
                            "points":  16
                        },
                        {
                            "text":  "ug-ly!",
                            "points":  14
                        },
                        {
                            "text":  "he was drunk",
                            "points":  6
                        },
                        {
                            "text":  "yapped/about ex",
                            "points":  3
                        },
                        {
                            "text":  "his age",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110320,
        "question":  "You'd hate riding home with your friend who does what in the car?",
        "answers":  [
                        {
                            "text":  "farts",
                            "points":  23
                        },
                        {
                            "text":  "sings/to bad music",
                            "points":  21
                        },
                        {
                            "text":  "smokes",
                            "points":  18
                        },
                        {
                            "text":  "uses phone/texts",
                            "points":  11
                        },
                        {
                            "text":  "speeds",
                            "points":  5
                        },
                        {
                            "text":  "road rages",
                            "points":  5
                        },
                        {
                            "text":  "yaps/whines",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110321,
        "question":  "Tell me an occupation where you probably need a good sense of humor.",
        "answers":  [
                        {
                            "text":  "comedian",
                            "points":  53
                        },
                        {
                            "text":  "doc/proctologist",
                            "points":  11
                        },
                        {
                            "text":  "mortician",
                            "points":  7
                        },
                        {
                            "text":  "clown",
                            "points":  5
                        },
                        {
                            "text":  "game show host",
                            "points":  4
                        },
                        {
                            "text":  "teacher",
                            "points":  3
                        },
                        {
                            "text":  "retail/sales",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110322,
        "question":  "If your bottom could talk, it might say, \"I like to be\" what?",
        "answers":  [
                        {
                            "text":  "spanked",
                            "points":  33
                        },
                        {
                            "text":  "massaged/touched",
                            "points":  21
                        },
                        {
                            "text":  "cleaned",
                            "points":  11
                        },
                        {
                            "text":  "small",
                            "points":  10
                        },
                        {
                            "text":  "exercised/twerked",
                            "points":  4
                        },
                        {
                            "text":  "tight & firm",
                            "points":  4
                        },
                        {
                            "text":  "big & round",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110323,
        "question":  "The bad news: you have bird legs. The worse news: it's what kind of bird?",
        "answers":  [
                        {
                            "text":  "ostrich",
                            "points":  32
                        },
                        {
                            "text":  "flamingo",
                            "points":  19
                        },
                        {
                            "text":  "chicken",
                            "points":  15
                        },
                        {
                            "text":  "stork",
                            "points":  9
                        },
                        {
                            "text":  "penguin",
                            "points":  4
                        },
                        {
                            "text":  "crane",
                            "points":  4
                        },
                        {
                            "text":  "duck",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110324,
        "question":  "We asked 100 men... Someday, your tombstone might read \"Here lies a man who shouldn't have ______ed so much.\"",
        "answers":  [
                        {
                            "text":  "worked",
                            "points":  24
                        },
                        {
                            "text":  "eaten",
                            "points":  21
                        },
                        {
                            "text":  "smoked",
                            "points":  14
                        },
                        {
                            "text":  "lied",
                            "points":  10
                        },
                        {
                            "text":  "slept",
                            "points":  9
                        },
                        {
                            "text":  "drunk",
                            "points":  5
                        },
                        {
                            "text":  "farted",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110325,
        "question":  "Besides a phone, what one thing would you want if you were trapped in an elevator?",
        "answers":  [
                        {
                            "text":  "food/water",
                            "points":  54
                        },
                        {
                            "text":  "company/a hottie",
                            "points":  10
                        },
                        {
                            "text":  "booze",
                            "points":  8
                        },
                        {
                            "text":  "toilet/bedpan",
                            "points":  7
                        },
                        {
                            "text":  "book/mag",
                            "points":  2
                        },
                        {
                            "text":  "earbuds",
                            "points":  2
                        },
                        {
                            "text":  "ladder",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110326,
        "question":  "Tell me the first thing you'd do if you went outside and saw King Kong standing on your roof.",
        "answers":  [
                        {
                            "text":  "run/hide/inside",
                            "points":  52
                        },
                        {
                            "text":  "scream/cuss",
                            "points":  10
                        },
                        {
                            "text":  "post pics",
                            "points":  7
                        },
                        {
                            "text":  "\"hi\"/wave",
                            "points":  5
                        },
                        {
                            "text":  "911/animal ctl.",
                            "points":  4
                        },
                        {
                            "text":  "pee/poo self",
                            "points":  4
                        },
                        {
                            "text":  "offer banana/beer",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110327,
        "question":  "If you were on your deathbed, what would you want to have within reach?",
        "answers":  [
                        {
                            "text":  "family/loved ones",
                            "points":  38
                        },
                        {
                            "text":  "food/tacos",
                            "points":  9
                        },
                        {
                            "text":  "beer/booze",
                            "points":  9
                        },
                        {
                            "text":  "phone",
                            "points":  8
                        },
                        {
                            "text":  "the bible",
                            "points":  8
                        },
                        {
                            "text":  "drugs/weed",
                            "points":  8
                        },
                        {
                            "text":  "pet/kitty",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  110328,
        "question":  "Name a U.S. state where people say \"y'all.\"",
        "answers":  [
                        {
                            "text":  "texas",
                            "points":  37
                        },
                        {
                            "text":  "alabama",
                            "points":  17
                        },
                        {
                            "text":  "georgia",
                            "points":  11
                        },
                        {
                            "text":  "louisiana",
                            "points":  7
                        },
                        {
                            "text":  "arkansas",
                            "points":  5
                        },
                        {
                            "text":  "tennessee",
                            "points":  4
                        },
                        {
                            "text":  "kentucky",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110329,
        "question":  "Fill in the blank: When Peter saw the X-rays of his pet python, he said, \"Oh, so that's where my ______ went.\"",
        "answers":  [
                        {
                            "text":  "cat/other pet",
                            "points":  34
                        },
                        {
                            "text":  "phone",
                            "points":  19
                        },
                        {
                            "text":  "keys",
                            "points":  11
                        },
                        {
                            "text":  "watch/jewelry",
                            "points":  7
                        },
                        {
                            "text":  "remote",
                            "points":  5
                        },
                        {
                            "text":  "wallet/money",
                            "points":  5
                        },
                        {
                            "text":  "shoes/socks",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110330,
        "question":  "Fill in the blank: A woman might say, \"I met my ex's new girlfriend and she's ______er than I am.\"",
        "answers":  [
                        {
                            "text":  "8 lbs. heavier",
                            "points":  27
                        },
                        {
                            "text":  "hotter",
                            "points":  20
                        },
                        {
                            "text":  "uglier",
                            "points":  15
                        },
                        {
                            "text":  "taller",
                            "points":  6
                        },
                        {
                            "text":  "dumber",
                            "points":  6
                        },
                        {
                            "text":  "thinner",
                            "points":  6
                        },
                        {
                            "text":  "younger",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  110331,
        "question":  "Fill in the blank: According to my mom, I have the best what?",
        "answers":  [
                        {
                            "text":  "looks/smile",
                            "points":  43
                        },
                        {
                            "text":  "personality/humor",
                            "points":  12
                        },
                        {
                            "text":  "mind",
                            "points":  8
                        },
                        {
                            "text":  "mother",
                            "points":  7
                        },
                        {
                            "text":  "heart",
                            "points":  6
                        },
                        {
                            "text":  "manners",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110332,
        "question":  "Name something they'd sell to old men at a store called Forever 81.",
        "answers":  [
                        {
                            "text":  "suspenders/clothes",
                            "points":  42
                        },
                        {
                            "text":  "viagra",
                            "points":  9
                        },
                        {
                            "text":  "diapers",
                            "points":  8
                        },
                        {
                            "text":  "dentures/fixodent",
                            "points":  7
                        },
                        {
                            "text":  "canes/walkers",
                            "points":  7
                        },
                        {
                            "text":  "toupee/dye",
                            "points":  7
                        },
                        {
                            "text":  "musky cologne",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110333,
        "question":  "Name a place you'd be surprised became clothing optional.",
        "answers":  [
                        {
                            "text":  "church",
                            "points":  36
                        },
                        {
                            "text":  "the beach",
                            "points":  11
                        },
                        {
                            "text":  "mall/store",
                            "points":  11
                        },
                        {
                            "text":  "work",
                            "points":  10
                        },
                        {
                            "text":  "restaurant",
                            "points":  6
                        },
                        {
                            "text":  "bar/club",
                            "points":  6
                        },
                        {
                            "text":  "amusement park",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110334,
        "question":  "We asked 100 women... Fill in the blank: If I spent a day with Steve Harvey, I'd make sure to impress him with my ______ skills.",
        "answers":  [
                        {
                            "text":  "comedy",
                            "points":  28
                        },
                        {
                            "text":  "cooking",
                            "points":  21
                        },
                        {
                            "text":  "talking",
                            "points":  14
                        },
                        {
                            "text":  "trivia/knowledge",
                            "points":  10
                        },
                        {
                            "text":  "fashion/shopping",
                            "points":  4
                        },
                        {
                            "text":  "hot lovin'",
                            "points":  4
                        },
                        {
                            "text":  "ignoring/ghosting",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110335,
        "question":  "If you lived in the ocean, what kind of sea creature would you most want to be?",
        "answers":  [
                        {
                            "text":  "dolphin",
                            "points":  26
                        },
                        {
                            "text":  "whale/orca",
                            "points":  18
                        },
                        {
                            "text":  "shark",
                            "points":  16
                        },
                        {
                            "text":  "mermaid",
                            "points":  9
                        },
                        {
                            "text":  "starfish",
                            "points":  6
                        },
                        {
                            "text":  "seal/sea lion",
                            "points":  5
                        },
                        {
                            "text":  "octopus",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110336,
        "question":  "Bob was too cheap to buy a plane ticket, so he FedExed himself across the country. But what went wrong?",
        "answers":  [
                        {
                            "text":  "box dropped/broke",
                            "points":  21
                        },
                        {
                            "text":  "wrong address",
                            "points":  16
                        },
                        {
                            "text":  "lost/delay",
                            "points":  13
                        },
                        {
                            "text":  "suffocated",
                            "points":  12
                        },
                        {
                            "text":  "had to potty",
                            "points":  8
                        },
                        {
                            "text":  "box fell from plane",
                            "points":  7
                        },
                        {
                            "text":  "plane/truck crash",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  110337,
        "question":  "Name something people try to get out of.",
        "answers":  [
                        {
                            "text":  "jury duty",
                            "points":  32
                        },
                        {
                            "text":  "work/meeting",
                            "points":  15
                        },
                        {
                            "text":  "ticket",
                            "points":  13
                        },
                        {
                            "text":  "relationship",
                            "points":  7
                        },
                        {
                            "text":  "chores",
                            "points":  6
                        },
                        {
                            "text":  "party",
                            "points":  5
                        },
                        {
                            "text":  "jail",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  110338,
        "question":  "Name a public place where you'd feel strange dancing to music.",
        "answers":  [
                        {
                            "text":  "library",
                            "points":  20
                        },
                        {
                            "text":  "store/mall",
                            "points":  18
                        },
                        {
                            "text":  "church",
                            "points":  17
                        },
                        {
                            "text":  "court/city hall",
                            "points":  11
                        },
                        {
                            "text":  "doc/hospital",
                            "points":  8
                        },
                        {
                            "text":  "funeral/cemetery",
                            "points":  5
                        },
                        {
                            "text":  "park",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110339,
        "question":  "Name a living female singer who might shatter glass when she hits a high note.",
        "answers":  [
                        {
                            "text":  "mariah carey",
                            "points":  42
                        },
                        {
                            "text":  "adele",
                            "points":  17
                        },
                        {
                            "text":  "celine dion",
                            "points":  8
                        },
                        {
                            "text":  "beyonce",
                            "points":  5
                        },
                        {
                            "text":  "ariana grande",
                            "points":  4
                        },
                        {
                            "text":  "lady gaga",
                            "points":  3
                        },
                        {
                            "text":  "taylor swift",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110340,
        "question":  "We asked 100 women... In your fantasies, you just won a date with what TV host?",
        "answers":  [
                        {
                            "text":  "steve harvey",
                            "points":  29
                        },
                        {
                            "text":  "ryan seacrest",
                            "points":  14
                        },
                        {
                            "text":  "mario lopez",
                            "points":  13
                        },
                        {
                            "text":  "nick cannon",
                            "points":  10
                        },
                        {
                            "text":  "jimmy kimmel",
                            "points":  7
                        },
                        {
                            "text":  "drew carey",
                            "points":  6
                        },
                        {
                            "text":  "jimmy fallon",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110341,
        "question":  "Name the last person in your life you would want to get caught under the mistletoe with.",
        "answers":  [
                        {
                            "text":  "ex",
                            "points":  27
                        },
                        {
                            "text":  "sibling",
                            "points":  13
                        },
                        {
                            "text":  "in-law",
                            "points":  10
                        },
                        {
                            "text":  "parent",
                            "points":  10
                        },
                        {
                            "text":  "friend",
                            "points":  8
                        },
                        {
                            "text":  "boss/coworker",
                            "points":  8
                        },
                        {
                            "text":  "grandparent",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  110342,
        "question":  "Name a female American celebrity who's basically royalty.",
        "answers":  [
                        {
                            "text":  "taylor swift",
                            "points":  21
                        },
                        {
                            "text":  "oprah winfrey",
                            "points":  18
                        },
                        {
                            "text":  "meghan markle",
                            "points":  15
                        },
                        {
                            "text":  "beyonce",
                            "points":  13
                        },
                        {
                            "text":  "cher",
                            "points":  7
                        },
                        {
                            "text":  "madonna",
                            "points":  4
                        },
                        {
                            "text":  "dolly parton",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110343,
        "question":  "Name something of your partner's you flush down the toilet during a fight.",
        "answers":  [
                        {
                            "text":  "ring/jewelry",
                            "points":  29
                        },
                        {
                            "text":  "phone",
                            "points":  16
                        },
                        {
                            "text":  "wallet/$$$",
                            "points":  9
                        },
                        {
                            "text":  "drugs/heart meds",
                            "points":  9
                        },
                        {
                            "text":  "toothbrush",
                            "points":  8
                        },
                        {
                            "text":  "keys",
                            "points":  5
                        },
                        {
                            "text":  "favorite clothes",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110344,
        "question":  "Tell me a female Disney character a Disney-loving mom might name her daughter.",
        "answers":  [
                        {
                            "text":  "ariel",
                            "points":  29
                        },
                        {
                            "text":  "belle",
                            "points":  15
                        },
                        {
                            "text":  "elsa",
                            "points":  14
                        },
                        {
                            "text":  "cinderella",
                            "points":  6
                        },
                        {
                            "text":  "aurora",
                            "points":  6
                        },
                        {
                            "text":  "daisy",
                            "points":  5
                        },
                        {
                            "text":  "minnie",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  110345,
        "question":  "We asked 100 men... Name a famous man that if you looked like him, you'd be dating beautiful women every night.",
        "answers":  [
                        {
                            "text":  "brad pitt",
                            "points":  18
                        },
                        {
                            "text":  "george clooney",
                            "points":  14
                        },
                        {
                            "text":  "tom cruise",
                            "points":  12
                        },
                        {
                            "text":  "ryan gosling",
                            "points":  11
                        },
                        {
                            "text":  "ryan reynolds",
                            "points":  11
                        },
                        {
                            "text":  "jason momoa",
                            "points":  7
                        },
                        {
                            "text":  "steve harvey",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  110346,
        "question":  "Keeping it clean, give me an F word that you'd use to describe your family.",
        "answers":  [
                        {
                            "text":  "fun/funny",
                            "points":  43
                        },
                        {
                            "text":  "fantastic",
                            "points":  11
                        },
                        {
                            "text":  "friendly",
                            "points":  7
                        },
                        {
                            "text":  "fabulous",
                            "points":  5
                        },
                        {
                            "text":  "freaky",
                            "points":  5
                        },
                        {
                            "text":  "functional",
                            "points":  3
                        },
                        {
                            "text":  "funky",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110347,
        "question":  "Name an animal that always looks like it's really busy.",
        "answers":  [
                        {
                            "text":  "beaver",
                            "points":  19
                        },
                        {
                            "text":  "squirrel",
                            "points":  18
                        },
                        {
                            "text":  "ant",
                            "points":  11
                        },
                        {
                            "text":  "rabbit",
                            "points":  10
                        },
                        {
                            "text":  "bee",
                            "points":  7
                        },
                        {
                            "text":  "bird/chicken",
                            "points":  7
                        },
                        {
                            "text":  "monkey/chimp",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  110348,
        "question":  "When you get to heaven, they give you a harp. Name a musical instrument they might give you when you go to hell.",
        "answers":  [
                        {
                            "text":  "drums",
                            "points":  30
                        },
                        {
                            "text":  "electric guitar",
                            "points":  12
                        },
                        {
                            "text":  "flute/recorder",
                            "points":  10
                        },
                        {
                            "text":  "kazoo",
                            "points":  8
                        },
                        {
                            "text":  "bagpipes",
                            "points":  6
                        },
                        {
                            "text":  "violin/fiddle",
                            "points":  5
                        },
                        {
                            "text":  "trumpet",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  110349,
        "question":  "What kitchen gadget would you compare your lovemaking to?",
        "answers":  [
                        {
                            "text":  "blender/mixer",
                            "points":  45
                        },
                        {
                            "text":  "spoon/ladle",
                            "points":  10
                        },
                        {
                            "text":  "hot oven",
                            "points":  4
                        },
                        {
                            "text":  "cork opener",
                            "points":  3
                        },
                        {
                            "text":  "can opener",
                            "points":  3
                        },
                        {
                            "text":  "baster",
                            "points":  3
                        },
                        {
                            "text":  "whisk/beater",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110350,
        "question":  "Name a product you probably shouldn't buy from a dollar store but you do anyway.",
        "answers":  [
                        {
                            "text":  "food/steak",
                            "points":  25
                        },
                        {
                            "text":  "shampoo/soap",
                            "points":  13
                        },
                        {
                            "text":  "tp/tissue",
                            "points":  9
                        },
                        {
                            "text":  "clothes",
                            "points":  8
                        },
                        {
                            "text":  "batteries",
                            "points":  7
                        },
                        {
                            "text":  "makeup",
                            "points":  5
                        },
                        {
                            "text":  "toothpaste",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110351,
        "question":  "Fill in the blank: Bar ______.",
        "answers":  [
                        {
                            "text":  "bar none",
                            "points":  20
                        },
                        {
                            "text":  "barstool",
                            "points":  12
                        },
                        {
                            "text":  "bar fight",
                            "points":  10
                        },
                        {
                            "text":  "bar tab",
                            "points":  9
                        },
                        {
                            "text":  "barhopping",
                            "points":  8
                        },
                        {
                            "text":  "barback",
                            "points":  7
                        },
                        {
                            "text":  "barfly",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  110352,
        "question":  "Most man boobs are about the size of what kind of fruit?",
        "answers":  [
                        {
                            "text":  "apples",
                            "points":  19
                        },
                        {
                            "text":  "oranges",
                            "points":  11
                        },
                        {
                            "text":  "peaches",
                            "points":  9
                        },
                        {
                            "text":  "melons",
                            "points":  9
                        },
                        {
                            "text":  "grapefruits",
                            "points":  7
                        },
                        {
                            "text":  "grapes",
                            "points":  7
                        },
                        {
                            "text":  "lemons",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  110353,
        "question":  "Name something with the word \"devil\" in it.",
        "answers":  [
                        {
                            "text":  "...made me do it",
                            "points":  43
                        },
                        {
                            "text":  "...is in the details",
                            "points":  8
                        },
                        {
                            "text":  "speak/talk of the...",
                            "points":  4
                        },
                        {
                            "text":  "devil's food cake",
                            "points":  3
                        },
                        {
                            "text":  "devil-may-care",
                            "points":  3
                        },
                        {
                            "text":  "deviled eggs",
                            "points":  3
                        },
                        {
                            "text":  "dirt devil",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110354,
        "question":  "Name a U.S. state you think of as God's country.",
        "answers":  [
                        {
                            "text":  "montana",
                            "points":  16
                        },
                        {
                            "text":  "alaska",
                            "points":  14
                        },
                        {
                            "text":  "hawaii",
                            "points":  8
                        },
                        {
                            "text":  "wyoming",
                            "points":  8
                        },
                        {
                            "text":  "colorado",
                            "points":  8
                        },
                        {
                            "text":  "maine",
                            "points":  6
                        },
                        {
                            "text":  "texas",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  110355,
        "question":  "Fill in the blank: Young and ______.",
        "answers":  [
                        {
                            "text":  "young & restless",
                            "points":  16
                        },
                        {
                            "text":  "young & free",
                            "points":  11
                        },
                        {
                            "text":  "young & beautiful",
                            "points":  10
                        },
                        {
                            "text":  "young & carefree",
                            "points":  9
                        },
                        {
                            "text":  "young & dumb",
                            "points":  8
                        },
                        {
                            "text":  "young & happy",
                            "points":  5
                        },
                        {
                            "text":  "young & wild",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  110356,
        "question":  "Fill in the blank: Baby ______.",
        "answers":  [
                        {
                            "text":  "baby blanket",
                            "points":  23
                        },
                        {
                            "text":  "baby talk",
                            "points":  12
                        },
                        {
                            "text":  "baby boy/girl",
                            "points":  8
                        },
                        {
                            "text":  "baby bottle",
                            "points":  6
                        },
                        {
                            "text":  "baby yoda",
                            "points":  4
                        },
                        {
                            "text":  "baby blues/blue",
                            "points":  4
                        },
                        {
                            "text":  "baby shark",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110357,
        "question":  "Fill in the blank: Hot ______.",
        "answers":  [
                        {
                            "text":  "hot tamale",
                            "points":  10
                        },
                        {
                            "text":  "hot mama",
                            "points":  9
                        },
                        {
                            "text":  "hot sauce",
                            "points":  8
                        },
                        {
                            "text":  "hot damn",
                            "points":  8
                        },
                        {
                            "text":  "hot dog/diggity dog",
                            "points":  8
                        },
                        {
                            "text":  "hot potato",
                            "points":  7
                        },
                        {
                            "text":  "hot pocket",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  110358,
        "question":  "Name something that some people jump into and others ease into.",
        "answers":  [
                        {
                            "text":  "pool/water",
                            "points":  69
                        },
                        {
                            "text":  "relationship/sex",
                            "points":  22
                        },
                        {
                            "text":  "bed/furniture",
                            "points":  3
                        },
                        {
                            "text":  "good book",
                            "points":  2
                        },
                        {
                            "text":  "car",
                            "points":  2
                        },
                        {
                            "text":  "new job",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110359,
        "question":  "Name something you'd hate to have happen while you're making love in the backyard.",
        "answers":  [
                        {
                            "text":  "caught/by spouse",
                            "points":  61
                        },
                        {
                            "text":  "storm/hail",
                            "points":  18
                        },
                        {
                            "text":  "animal/bee attack",
                            "points":  12
                        },
                        {
                            "text":  "sprinklers start",
                            "points":  5
                        },
                        {
                            "text":  "roll in poop",
                            "points":  2
                        },
                        {
                            "text":  "lights turn on",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110360,
        "question":  "Name a word or phrase that describes how eggs are prepared that also describes you.",
        "answers":  [
                        {
                            "text":  "scrambled",
                            "points":  47
                        },
                        {
                            "text":  "over easy",
                            "points":  19
                        },
                        {
                            "text":  "boiled/hard-boiled",
                            "points":  14
                        },
                        {
                            "text":  "sunny-side up",
                            "points":  11
                        },
                        {
                            "text":  "deviled",
                            "points":  7
                        },
                        {
                            "text":  "fried",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110361,
        "question":  "Name a musical instrument a person plays that would give them strong, kissable lips.",
        "answers":  [
                        {
                            "text":  "trumpet",
                            "points":  45
                        },
                        {
                            "text":  "tuba",
                            "points":  17
                        },
                        {
                            "text":  "flute",
                            "points":  16
                        },
                        {
                            "text":  "sax",
                            "points":  15
                        },
                        {
                            "text":  "trombone",
                            "points":  5
                        },
                        {
                            "text":  "french horn",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110362,
        "question":  "We asked 100 women... I'd love to move some of the fat from my belly to my what?",
        "answers":  [
                        {
                            "text":  "boobs",
                            "points":  42
                        },
                        {
                            "text":  "badonkadonk",
                            "points":  40
                        },
                        {
                            "text":  "sunken face",
                            "points":  9
                        },
                        {
                            "text":  "trash can",
                            "points":  4
                        },
                        {
                            "text":  "enemy's body",
                            "points":  3
                        },
                        {
                            "text":  "legs/calves",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110363,
        "question":  "We asked 100 married men... Name something your wife does in bed that Sleeping Beauty wouldn't have.",
        "answers":  [
                        {
                            "text":  "snore",
                            "points":  40
                        },
                        {
                            "text":  "watch tv",
                            "points":  22
                        },
                        {
                            "text":  "read",
                            "points":  19
                        },
                        {
                            "text":  "wear socks",
                            "points":  9
                        },
                        {
                            "text":  "drool",
                            "points":  8
                        },
                        {
                            "text":  "stuff her face",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110364,
        "question":  "Name something Steve Harvey and Mr. Clean have in common.",
        "answers":  [
                        {
                            "text":  "shiny bald heads",
                            "points":  77
                        },
                        {
                            "text":  "they're men",
                            "points":  8
                        },
                        {
                            "text":  "they're famous",
                            "points":  7
                        },
                        {
                            "text":  "cute/smiles",
                            "points":  3
                        },
                        {
                            "text":  "muscular build",
                            "points":  2
                        },
                        {
                            "text":  "they're clean",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110365,
        "question":  "Instead of leaving her shoe at the ball, today's Cinderella might leave her what?",
        "answers":  [
                        {
                            "text":  "phone",
                            "points":  60
                        },
                        {
                            "text":  "thong/clothes",
                            "points":  23
                        },
                        {
                            "text":  "card/number",
                            "points":  6
                        },
                        {
                            "text":  "purse/wallet",
                            "points":  4
                        },
                        {
                            "text":  "jewelry/bracelet",
                            "points":  4
                        },
                        {
                            "text":  "tesla/keys",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110366,
        "question":  "Name something a baseball player does on the field that would be unacceptable in church.",
        "answers":  [
                        {
                            "text":  "spit/chew",
                            "points":  53
                        },
                        {
                            "text":  "adjust/scratch",
                            "points":  26
                        },
                        {
                            "text":  "cuss",
                            "points":  10
                        },
                        {
                            "text":  "play ball/slide",
                            "points":  6
                        },
                        {
                            "text":  "tap/throw bat",
                            "points":  2
                        },
                        {
                            "text":  "wear a hat",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110367,
        "question":  "Give me a word that rhymes with \"curdle.\"",
        "answers":  [
                        {
                            "text":  "hurdle/hurtle",
                            "points":  49
                        },
                        {
                            "text":  "girdle",
                            "points":  26
                        },
                        {
                            "text":  "turtle",
                            "points":  12
                        },
                        {
                            "text":  "myrtle",
                            "points":  5
                        },
                        {
                            "text":  "wordle",
                            "points":  4
                        },
                        {
                            "text":  "fertile",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110368,
        "question":  "We asked 100 married women... You wish you could cover your husband from pits to toes in Old Spice Total Body Deodorant after what?",
        "answers":  [
                        {
                            "text":  "exercise/sports",
                            "points":  34
                        },
                        {
                            "text":  "whoopee",
                            "points":  18
                        },
                        {
                            "text":  "work",
                            "points":  17
                        },
                        {
                            "text":  "his shower",
                            "points":  14
                        },
                        {
                            "text":  "yard work",
                            "points":  12
                        },
                        {
                            "text":  "camping trip",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110369,
        "question":  "Name something that would be hard to do if you had just one lip instead of two.",
        "answers":  [
                        {
                            "text":  "eat/drink/straw",
                            "points":  32
                        },
                        {
                            "text":  "kiss",
                            "points":  31
                        },
                        {
                            "text":  "whistle",
                            "points":  18
                        },
                        {
                            "text":  "talk",
                            "points":  14
                        },
                        {
                            "text":  "play instrument",
                            "points":  2
                        },
                        {
                            "text":  "smile",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110370,
        "question":  "Name something a bank robber does not want to see when he runs into a bank.",
        "answers":  [
                        {
                            "text":  "cops/guard",
                            "points":  86
                        },
                        {
                            "text":  "cameras",
                            "points":  3
                        },
                        {
                            "text":  "no tellers/\"be back\"",
                            "points":  3
                        },
                        {
                            "text":  "competing robber",
                            "points":  2
                        },
                        {
                            "text":  "his spouse/mate",
                            "points":  2
                        },
                        {
                            "text":  "his parents",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110371,
        "question":  "Name something specific you'd need to impersonate Mary Poppins.",
        "answers":  [
                        {
                            "text":  "umbrella",
                            "points":  78
                        },
                        {
                            "text":  "bag",
                            "points":  5
                        },
                        {
                            "text":  "hat",
                            "points":  5
                        },
                        {
                            "text":  "british accent",
                            "points":  4
                        },
                        {
                            "text":  "dress/skirt",
                            "points":  4
                        },
                        {
                            "text":  "singing talent",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110372,
        "question":  "Name something a preacher might buy that could make the congregation wonder where all their donations are going.",
        "answers":  [
                        {
                            "text":  "corvette",
                            "points":  68
                        },
                        {
                            "text":  "mansion",
                            "points":  19
                        },
                        {
                            "text":  "yacht",
                            "points":  4
                        },
                        {
                            "text":  "jet",
                            "points":  3
                        },
                        {
                            "text":  "porn",
                            "points":  2
                        },
                        {
                            "text":  "rolex",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110373,
        "question":  "Name something a guy does when he walks past a beautiful woman.",
        "answers":  [
                        {
                            "text":  "turns & gawks",
                            "points":  68
                        },
                        {
                            "text":  "whistles",
                            "points":  17
                        },
                        {
                            "text":  "smiles",
                            "points":  6
                        },
                        {
                            "text":  "keeps going/ignores",
                            "points":  3
                        },
                        {
                            "text":  "dopey comment",
                            "points":  2
                        },
                        {
                            "text":  "winks",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110374,
        "question":  "Linda told her man, \"Pretend I'm ice cream and cover me with\" what?",
        "answers":  [
                        {
                            "text":  "chocolate/hot fudge",
                            "points":  62
                        },
                        {
                            "text":  "whipped cream",
                            "points":  20
                        },
                        {
                            "text":  "sprinkles",
                            "points":  7
                        },
                        {
                            "text":  "caramel",
                            "points":  4
                        },
                        {
                            "text":  "nuts",
                            "points":  3
                        },
                        {
                            "text":  "your mouth",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110375,
        "question":  "We asked 100 women... Name a reason you might not be able to run your fingers through a man's hair.",
        "answers":  [
                        {
                            "text":  "he's bald",
                            "points":  61
                        },
                        {
                            "text":  "it's too short",
                            "points":  12
                        },
                        {
                            "text":  "grease/product",
                            "points":  12
                        },
                        {
                            "text":  "matted",
                            "points":  8
                        },
                        {
                            "text":  "he doesn't want it",
                            "points":  3
                        },
                        {
                            "text":  "lotta dandruff",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110376,
        "question":  "Tell me a kind of flower that a lot of grandmas have as a first name.",
        "answers":  [
                        {
                            "text":  "rose",
                            "points":  58
                        },
                        {
                            "text":  "daisy",
                            "points":  13
                        },
                        {
                            "text":  "lily",
                            "points":  12
                        },
                        {
                            "text":  "iris",
                            "points":  6
                        },
                        {
                            "text":  "violet",
                            "points":  6
                        },
                        {
                            "text":  "petunia",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110377,
        "question":  "We asked 100 married men... I'm in a twelve-step program. I take twelve steps away from my angry wife when we argue about what?",
        "answers":  [
                        {
                            "text":  "money",
                            "points":  54
                        },
                        {
                            "text":  "chores",
                            "points":  11
                        },
                        {
                            "text":  "sex",
                            "points":  10
                        },
                        {
                            "text":  "boozing",
                            "points":  9
                        },
                        {
                            "text":  "politics",
                            "points":  9
                        },
                        {
                            "text":  "each other's parents",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  110378,
        "question":  "Name a reason why coworkers would keep moving out of the cubicle next to you.",
        "answers":  [
                        {
                            "text":  "i stink",
                            "points":  52
                        },
                        {
                            "text":  "loud/chatty",
                            "points":  32
                        },
                        {
                            "text":  "i'm rude/mean",
                            "points":  5
                        },
                        {
                            "text":  "they get fired",
                            "points":  5
                        },
                        {
                            "text":  "i eat gross food",
                            "points":  2
                        },
                        {
                            "text":  "i'm messy",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110379,
        "question":  "We asked 100 married men... Your wife just asked you to put on something sexy. What do you put on?",
        "answers":  [
                        {
                            "text":  "my undies/a thong",
                            "points":  52
                        },
                        {
                            "text":  "birthday suit",
                            "points":  20
                        },
                        {
                            "text":  "her panties",
                            "points":  9
                        },
                        {
                            "text":  "cologne",
                            "points":  9
                        },
                        {
                            "text":  "jockstrap",
                            "points":  5
                        },
                        {
                            "text":  "a seductive smile",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110380,
        "question":  "We asked 100 single women... Your best friend's billionaire boyfriend just hit on you. What do you do?",
        "answers":  [
                        {
                            "text":  "tell bff",
                            "points":  46
                        },
                        {
                            "text":  "go for it!",
                            "points":  18
                        },
                        {
                            "text":  "say no/leave",
                            "points":  15
                        },
                        {
                            "text":  "mention his girlfriend",
                            "points":  11
                        },
                        {
                            "text":  "blackmail/take $",
                            "points":  5
                        },
                        {
                            "text":  "tell him off",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110381,
        "question":  "Name something you do with your eyes to flirt with someone.",
        "answers":  [
                        {
                            "text":  "wink",
                            "points":  45
                        },
                        {
                            "text":  "bat them",
                            "points":  38
                        },
                        {
                            "text":  "stare/eye contact",
                            "points":  8
                        },
                        {
                            "text":  "raise eyebrows",
                            "points":  3
                        },
                        {
                            "text":  "open wide",
                            "points":  2
                        },
                        {
                            "text":  "squint",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110382,
        "question":  "At the nursing home, grandma flirts by flashing her what at the men?",
        "answers":  [
                        {
                            "text":  "smile/3 teeth",
                            "points":  45
                        },
                        {
                            "text":  "ta-tas/lady bits",
                            "points":  34
                        },
                        {
                            "text":  "legs/ankles",
                            "points":  11
                        },
                        {
                            "text":  "checkbook",
                            "points":  4
                        },
                        {
                            "text":  "eyelashes",
                            "points":  2
                        },
                        {
                            "text":  "bloomers/lingerie",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110383,
        "question":  "When you walk into a hospital, what might you see on the floor that would make you walk back out?",
        "answers":  [
                        {
                            "text":  "blood",
                            "points":  45
                        },
                        {
                            "text":  "a body/an arm",
                            "points":  27
                        },
                        {
                            "text":  "barf",
                            "points":  12
                        },
                        {
                            "text":  "pee/poo",
                            "points":  6
                        },
                        {
                            "text":  "roaches/critters",
                            "points":  5
                        },
                        {
                            "text":  "dirt/trash",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110384,
        "question":  "Name a reason a woman might nickname her blind date \"Ronald McDonald.\"",
        "answers":  [
                        {
                            "text":  "red hair",
                            "points":  40
                        },
                        {
                            "text":  "clown/goofy",
                            "points":  29
                        },
                        {
                            "text":  "big feet",
                            "points":  16
                        },
                        {
                            "text":  "loves mcd's",
                            "points":  7
                        },
                        {
                            "text":  "he's cheap",
                            "points":  3
                        },
                        {
                            "text":  "big red nose",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110385,
        "question":  "Name something your cheap friends bring to your party.",
        "answers":  [
                        {
                            "text":  "leftovers/cheap food",
                            "points":  39
                        },
                        {
                            "text":  "cheap liquor",
                            "points":  37
                        },
                        {
                            "text":  "cups/paper plates",
                            "points":  8
                        },
                        {
                            "text":  "bupkis",
                            "points":  8
                        },
                        {
                            "text":  "water/ice",
                            "points":  4
                        },
                        {
                            "text":  "paper towels",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110386,
        "question":  "Tell me something that gets squeezed out.",
        "answers":  [
                        {
                            "text":  "toothpaste",
                            "points":  38
                        },
                        {
                            "text":  "fruit/juice",
                            "points":  36
                        },
                        {
                            "text":  "ketchup/condiment",
                            "points":  12
                        },
                        {
                            "text":  "a zit",
                            "points":  7
                        },
                        {
                            "text":  "towel/washrag",
                            "points":  3
                        },
                        {
                            "text":  "sponge",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110387,
        "question":  "Name something G.I. Joe has that Barbie says really turns her on.",
        "answers":  [
                        {
                            "text":  "hunky bod",
                            "points":  34
                        },
                        {
                            "text":  "uniform/helmet",
                            "points":  30
                        },
                        {
                            "text":  "gun/grenade",
                            "points":  22
                        },
                        {
                            "text":  "beard",
                            "points":  6
                        },
                        {
                            "text":  "kung-fu grip",
                            "points":  4
                        },
                        {
                            "text":  "jeep",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110388,
        "question":  "Name something a single guy might put on his stinky feet to hide the smell.",
        "answers":  [
                        {
                            "text":  "foot powder/spray",
                            "points":  30
                        },
                        {
                            "text":  "socks/shoes",
                            "points":  23
                        },
                        {
                            "text":  "cologne/aftershave",
                            "points":  22
                        },
                        {
                            "text":  "deodorant",
                            "points":  17
                        },
                        {
                            "text":  "lotion",
                            "points":  4
                        },
                        {
                            "text":  "baking soda",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110389,
        "question":  "We asked 100 single women... Tell me a reason you might nickname your blind date \"Yoda.\"",
        "answers":  [
                        {
                            "text":  "shorty",
                            "points":  28
                        },
                        {
                            "text":  "big ears",
                            "points":  27
                        },
                        {
                            "text":  "ugly face",
                            "points":  22
                        },
                        {
                            "text":  "smarty pants",
                            "points":  15
                        },
                        {
                            "text":  "psychic/sees future",
                            "points":  4
                        },
                        {
                            "text":  "turned green",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110390,
        "question":  "Who might give you a hard time if you haven't showered in a couple of days?",
        "answers":  [
                        {
                            "text":  "my boo",
                            "points":  77
                        },
                        {
                            "text":  "parent",
                            "points":  6
                        },
                        {
                            "text":  "coworker",
                            "points":  5
                        },
                        {
                            "text":  "friend",
                            "points":  4
                        },
                        {
                            "text":  "kid",
                            "points":  3
                        },
                        {
                            "text":  "teacher",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110391,
        "question":  "We asked 100 men... Money can't buy love, but what can it buy so women are attracted to you?",
        "answers":  [
                        {
                            "text":  "sweet car",
                            "points":  62
                        },
                        {
                            "text":  "nice threads",
                            "points":  16
                        },
                        {
                            "text":  "cool crib",
                            "points":  10
                        },
                        {
                            "text":  "gifts for them",
                            "points":  4
                        },
                        {
                            "text":  "looks/hair",
                            "points":  3
                        },
                        {
                            "text":  "education",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110392,
        "question":  "Name a reason you might want to get rid of a tattoo.",
        "answers":  [
                        {
                            "text":  "ex's name/face",
                            "points":  60
                        },
                        {
                            "text":  "i matured/tacky",
                            "points":  11
                        },
                        {
                            "text":  "ugly/bad art",
                            "points":  10
                        },
                        {
                            "text":  "misspelled",
                            "points":  6
                        },
                        {
                            "text":  "got flabby/wrinkly",
                            "points":  5
                        },
                        {
                            "text":  "for work",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  110393,
        "question":  "We asked 100 women... What's the first thing you notice about a man when he enters a room?",
        "answers":  [
                        {
                            "text":  "face/eyes/smile",
                            "points":  59
                        },
                        {
                            "text":  "tall/great bod",
                            "points":  21
                        },
                        {
                            "text":  "his clothes",
                            "points":  6
                        },
                        {
                            "text":  "his posture/walk",
                            "points":  5
                        },
                        {
                            "text":  "his hair",
                            "points":  4
                        },
                        {
                            "text":  "his scent/stench",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110394,
        "question":  "Tell me a way that a mafia hit man might dispose of his victims.",
        "answers":  [
                        {
                            "text":  "river/ocean",
                            "points":  58
                        },
                        {
                            "text":  "barrel/of acid",
                            "points":  14
                        },
                        {
                            "text":  "grind 'em up",
                            "points":  9
                        },
                        {
                            "text":  "in cement",
                            "points":  7
                        },
                        {
                            "text":  "bury them",
                            "points":  6
                        },
                        {
                            "text":  "bonfire/burn",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110395,
        "question":  "Name something you do in a regular pool that would be weird to do in a kid's inflatable pool.",
        "answers":  [
                        {
                            "text":  "swim/do laps",
                            "points":  50
                        },
                        {
                            "text":  "dive/jump",
                            "points":  32
                        },
                        {
                            "text":  "pee",
                            "points":  6
                        },
                        {
                            "text":  "float",
                            "points":  4
                        },
                        {
                            "text":  "skinny-dip",
                            "points":  3
                        },
                        {
                            "text":  "handstands",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110396,
        "question":  "Tell me a reason Mrs. Claus's mom told her she might regret marrying Santa.",
        "answers":  [
                        {
                            "text":  "schedule/hours",
                            "points":  49
                        },
                        {
                            "text":  "jelly belly",
                            "points":  19
                        },
                        {
                            "text":  "north pole!",
                            "points":  15
                        },
                        {
                            "text":  "hangs w/ elves",
                            "points":  8
                        },
                        {
                            "text":  "toys all over",
                            "points":  4
                        },
                        {
                            "text":  "tacky dresser",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110397,
        "question":  "Name something you might order a cake in the shape of for a cowboy's birthday.",
        "answers":  [
                        {
                            "text":  "hat",
                            "points":  47
                        },
                        {
                            "text":  "boot",
                            "points":  28
                        },
                        {
                            "text":  "horse",
                            "points":  14
                        },
                        {
                            "text":  "cow/bull",
                            "points":  4
                        },
                        {
                            "text":  "saddle",
                            "points":  2
                        },
                        {
                            "text":  "texas",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110398,
        "question":  "Name something that might go wrong while hand-feeding your lover pieces of grapefruit.",
        "answers":  [
                        {
                            "text":  "juice/in eye",
                            "points":  41
                        },
                        {
                            "text":  "get bitten",
                            "points":  25
                        },
                        {
                            "text":  "they choke",
                            "points":  23
                        },
                        {
                            "text":  "i drop it",
                            "points":  4
                        },
                        {
                            "text":  "allergic reaction",
                            "points":  2
                        },
                        {
                            "text":  "spit it out",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110399,
        "question":  "We asked 100 married women... What would you do if you found out your husband had a side job as a stripper?",
        "answers":  [
                        {
                            "text":  "go watch!",
                            "points":  40
                        },
                        {
                            "text":  "laugh",
                            "points":  22
                        },
                        {
                            "text":  "divorce him",
                            "points":  15
                        },
                        {
                            "text":  "take his tips/shop",
                            "points":  15
                        },
                        {
                            "text":  "nada/\"oh well\"",
                            "points":  3
                        },
                        {
                            "text":  "\"perform for me!\"",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110400,
        "question":  "If a baby had a credit card, name something they'd use it to buy.",
        "answers":  [
                        {
                            "text":  "food/milk",
                            "points":  37
                        },
                        {
                            "text":  "toys/rattle",
                            "points":  33
                        },
                        {
                            "text":  "diapers",
                            "points":  14
                        },
                        {
                            "text":  "pacifier",
                            "points":  9
                        },
                        {
                            "text":  "boob job for mom",
                            "points":  2
                        },
                        {
                            "text":  "hipper clothes",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110401,
        "question":  "Name something a lazy single dad might use if he runs out of diapers.",
        "answers":  [
                        {
                            "text":  "towel/dish towel",
                            "points":  59
                        },
                        {
                            "text":  "paper towels",
                            "points":  17
                        },
                        {
                            "text":  "old shirt",
                            "points":  14
                        },
                        {
                            "text":  "toilet paper",
                            "points":  2
                        },
                        {
                            "text":  "newspaper",
                            "points":  2
                        },
                        {
                            "text":  "napkins",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110402,
        "question":  "Name something about his wife a comedian had better not make fun of during his act.",
        "answers":  [
                        {
                            "text":  "her weight/figure",
                            "points":  59
                        },
                        {
                            "text":  "her face/3 teeth",
                            "points":  16
                        },
                        {
                            "text":  "her lovemaking",
                            "points":  12
                        },
                        {
                            "text":  "her hair",
                            "points":  3
                        },
                        {
                            "text":  "her personality",
                            "points":  3
                        },
                        {
                            "text":  "her mom",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110403,
        "question":  "Fill in the blank: You should never show up to a funeral ______.",
        "answers":  [
                        {
                            "text":  "drunk",
                            "points":  57
                        },
                        {
                            "text":  "naked",
                            "points":  18
                        },
                        {
                            "text":  "happy/laughing",
                            "points":  8
                        },
                        {
                            "text":  "wearing white",
                            "points":  6
                        },
                        {
                            "text":  "late",
                            "points":  5
                        },
                        {
                            "text":  "stoned",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110404,
        "question":  "When a magician proposes, he might pull an engagement ring out of his girlfriend's what?",
        "answers":  [
                        {
                            "text":  "ear",
                            "points":  56
                        },
                        {
                            "text":  "clothes/bra",
                            "points":  20
                        },
                        {
                            "text":  "purse/wallet",
                            "points":  10
                        },
                        {
                            "text":  "hand",
                            "points":  4
                        },
                        {
                            "text":  "hair",
                            "points":  3
                        },
                        {
                            "text":  "food",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110405,
        "question":  "Name something you'd hate to have to brush with a toilet brush.",
        "answers":  [
                        {
                            "text":  "my teeth",
                            "points":  54
                        },
                        {
                            "text":  "my hair",
                            "points":  28
                        },
                        {
                            "text":  "my filthy toilet",
                            "points":  6
                        },
                        {
                            "text":  "shower/tub",
                            "points":  4
                        },
                        {
                            "text":  "kitchen sink",
                            "points":  2
                        },
                        {
                            "text":  "my dog",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110406,
        "question":  "Name something of yours that you wish were better looking.",
        "answers":  [
                        {
                            "text":  "body",
                            "points":  50
                        },
                        {
                            "text":  "beastly face",
                            "points":  30
                        },
                        {
                            "text":  "hair",
                            "points":  6
                        },
                        {
                            "text":  "mate/ugly hubby",
                            "points":  5
                        },
                        {
                            "text":  "jacked teeth",
                            "points":  3
                        },
                        {
                            "text":  "trashy house",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110407,
        "question":  "Tell me a reason a house burglar might say he had a bad day.",
        "answers":  [
                        {
                            "text":  "caught/arrested",
                            "points":  47
                        },
                        {
                            "text":  "no loot",
                            "points":  20
                        },
                        {
                            "text":  "dog bite",
                            "points":  15
                        },
                        {
                            "text":  "set off alarm/cam",
                            "points":  5
                        },
                        {
                            "text":  "everyone was home",
                            "points":  5
                        },
                        {
                            "text":  "got shot",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110408,
        "question":  "Name something that could make a funeral more fun than usual.",
        "answers":  [
                        {
                            "text":  "music/dancing",
                            "points":  44
                        },
                        {
                            "text":  "open bar",
                            "points":  29
                        },
                        {
                            "text":  "games/pop goes weasel",
                            "points":  11
                        },
                        {
                            "text":  "home movies",
                            "points":  6
                        },
                        {
                            "text":  "jokes/clowns",
                            "points":  4
                        },
                        {
                            "text":  "balloon drop",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110409,
        "question":  "Name something the Jolly Green Giant has nightmares about a woman doing to his niblets.",
        "answers":  [
                        {
                            "text":  "eat/biting 'em",
                            "points":  44
                        },
                        {
                            "text":  "cut/chopping 'em",
                            "points":  24
                        },
                        {
                            "text":  "mashing 'em",
                            "points":  13
                        },
                        {
                            "text":  "cooking 'em",
                            "points":  11
                        },
                        {
                            "text":  "stick fork in",
                            "points":  2
                        },
                        {
                            "text":  "wasting 'em",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110410,
        "question":  "We asked 100 single men... Your friends might call you desperate if you start hitting on women where?",
        "answers":  [
                        {
                            "text":  "church",
                            "points":  43
                        },
                        {
                            "text":  "grocery store",
                            "points":  25
                        },
                        {
                            "text":  "nursing home",
                            "points":  14
                        },
                        {
                            "text":  "laundromat",
                            "points":  7
                        },
                        {
                            "text":  "bar",
                            "points":  5
                        },
                        {
                            "text":  "funeral",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110411,
        "question":  "Name something that's on every teenager's Christmas wish list.",
        "answers":  [
                        {
                            "text":  "phone",
                            "points":  42
                        },
                        {
                            "text":  "moolah",
                            "points":  22
                        },
                        {
                            "text":  "game system",
                            "points":  16
                        },
                        {
                            "text":  "car",
                            "points":  12
                        },
                        {
                            "text":  "clothes",
                            "points":  2
                        },
                        {
                            "text":  "earbuds",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110412,
        "question":  "A man might call his mate \"honey bunny\" because she does what like a rabbit?",
        "answers":  [
                        {
                            "text":  "shags/multiplies",
                            "points":  38
                        },
                        {
                            "text":  "nibbles/lettuce",
                            "points":  27
                        },
                        {
                            "text":  "hops/runs",
                            "points":  17
                        },
                        {
                            "text":  "snuggles",
                            "points":  7
                        },
                        {
                            "text":  "kisses",
                            "points":  4
                        },
                        {
                            "text":  "wiggles nose",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110413,
        "question":  "Name a place you go where a stranger sees you naked.",
        "answers":  [
                        {
                            "text":  "doc/hospital",
                            "points":  32
                        },
                        {
                            "text":  "gym lockers",
                            "points":  23
                        },
                        {
                            "text":  "nude beach/camp",
                            "points":  18
                        },
                        {
                            "text":  "spa/sauna",
                            "points":  16
                        },
                        {
                            "text":  "tanning salon",
                            "points":  4
                        },
                        {
                            "text":  "pool/pool shower",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110414,
        "question":  "Name something people stick their noses in.",
        "answers":  [
                        {
                            "text":  "my bizness/marriage",
                            "points":  74
                        },
                        {
                            "text":  "flowers",
                            "points":  10
                        },
                        {
                            "text":  "tissue",
                            "points":  5
                        },
                        {
                            "text":  "scented candles",
                            "points":  2
                        },
                        {
                            "text":  "the fridge",
                            "points":  2
                        },
                        {
                            "text":  "bod/their armpits",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110415,
        "question":  "Name something you'd have to get used to if you were a penguin.",
        "answers":  [
                        {
                            "text":  "the cold",
                            "points":  58
                        },
                        {
                            "text":  "waddle/walk a lot",
                            "points":  16
                        },
                        {
                            "text":  "eat'g live fish",
                            "points":  8
                        },
                        {
                            "text":  "black & white tux",
                            "points":  5
                        },
                        {
                            "text":  "heat/global warming",
                            "points":  5
                        },
                        {
                            "text":  "swimming/water",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110416,
        "question":  "We asked 100 single men... Your new girlfriend has the best body and the worst breath. What do you do?",
        "answers":  [
                        {
                            "text":  "mouthwash/mint",
                            "points":  54
                        },
                        {
                            "text":  "break up",
                            "points":  13
                        },
                        {
                            "text":  "hold nose",
                            "points":  8
                        },
                        {
                            "text":  "tell her",
                            "points":  7
                        },
                        {
                            "text":  "live with/enjoy",
                            "points":  7
                        },
                        {
                            "text":  "never kiss her",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  110417,
        "question":  "We asked 100 married women... Tell me something you'd love your husband to say to you without any prompting.",
        "answers":  [
                        {
                            "text":  "i love you",
                            "points":  43
                        },
                        {
                            "text":  "lookin' good",
                            "points":  32
                        },
                        {
                            "text":  "i appreciate you",
                            "points":  9
                        },
                        {
                            "text":  "i'll clean/vacuum",
                            "points":  4
                        },
                        {
                            "text":  "take you shopping?",
                            "points":  4
                        },
                        {
                            "text":  "out to dinner/movie?",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110418,
        "question":  "A cop pulls you over for speeding. What's an excuse you give to get out of a ticket?",
        "answers":  [
                        {
                            "text":  "emergency/hospital",
                            "points":  40
                        },
                        {
                            "text":  "gotta potty",
                            "points":  29
                        },
                        {
                            "text":  "didn't realize",
                            "points":  15
                        },
                        {
                            "text":  "late for work",
                            "points":  7
                        },
                        {
                            "text":  "gas pedal stuck",
                            "points":  2
                        },
                        {
                            "text":  "date night/anniv.",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110419,
        "question":  "Tell me something it might be harder to do if you had a teeny-weeny nose.",
        "answers":  [
                        {
                            "text":  "smell",
                            "points":  27
                        },
                        {
                            "text":  "wear glasses",
                            "points":  19
                        },
                        {
                            "text":  "breathe/snore",
                            "points":  19
                        },
                        {
                            "text":  "pick/blow it",
                            "points":  19
                        },
                        {
                            "text":  "pierce it",
                            "points":  8
                        },
                        {
                            "text":  "sneeze",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110420,
        "question":  "We asked 100 married women... Name a hand-me-down you don't want from your mother-in-law.",
        "answers":  [
                        {
                            "text":  "clothes/panties",
                            "points":  83
                        },
                        {
                            "text":  "jewelry",
                            "points":  3
                        },
                        {
                            "text":  "wig",
                            "points":  2
                        },
                        {
                            "text":  "blankets/sheets",
                            "points":  2
                        },
                        {
                            "text":  "furniture/mattress",
                            "points":  2
                        },
                        {
                            "text":  "her husband",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110421,
        "question":  "We asked 100 women... Name a reason you might suspect your man is turning into the Wolf Man.",
        "answers":  [
                        {
                            "text":  "extra hairy/sheds",
                            "points":  73
                        },
                        {
                            "text":  "howls at moon",
                            "points":  11
                        },
                        {
                            "text":  "has claws",
                            "points":  3
                        },
                        {
                            "text":  "grow'g fangs",
                            "points":  3
                        },
                        {
                            "text":  "start'g to bite",
                            "points":  2
                        },
                        {
                            "text":  "ripped clothing",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110422,
        "question":  "Name something Tom Cruise and Tom Brady have in common.",
        "answers":  [
                        {
                            "text":  "first names",
                            "points":  65
                        },
                        {
                            "text":  "richer than rich",
                            "points":  8
                        },
                        {
                            "text":  "famous",
                            "points":  7
                        },
                        {
                            "text":  "hotties",
                            "points":  6
                        },
                        {
                            "text":  "males",
                            "points":  5
                        },
                        {
                            "text":  "annoying!",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110423,
        "question":  "If a brawl broke out at a nursing home, what might one of the nurses get hit by?",
        "answers":  [
                        {
                            "text":  "cane/walker",
                            "points":  59
                        },
                        {
                            "text":  "bedpan",
                            "points":  17
                        },
                        {
                            "text":  "dentures",
                            "points":  9
                        },
                        {
                            "text":  "diaper",
                            "points":  3
                        },
                        {
                            "text":  "a patient",
                            "points":  3
                        },
                        {
                            "text":  "wheelchair",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110424,
        "question":  "Name something you'd be surprised adult twins shared with each other.",
        "answers":  [
                        {
                            "text":  "boos/dates",
                            "points":  59
                        },
                        {
                            "text":  "clothes",
                            "points":  13
                        },
                        {
                            "text":  "toothbrush",
                            "points":  9
                        },
                        {
                            "text":  "bed/bedroom",
                            "points":  8
                        },
                        {
                            "text":  "food/gum",
                            "points":  3
                        },
                        {
                            "text":  "baths",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110425,
        "question":  "If the Statue of Liberty was feeling sexy, what might she wear instead of a robe?",
        "answers":  [
                        {
                            "text":  "bikini",
                            "points":  57
                        },
                        {
                            "text":  "teddy/nightie",
                            "points":  14
                        },
                        {
                            "text":  "g-string/panties",
                            "points":  12
                        },
                        {
                            "text":  "miniskirt/dress",
                            "points":  7
                        },
                        {
                            "text":  "cape",
                            "points":  2
                        },
                        {
                            "text":  "short shorts",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110426,
        "question":  "Name something a woman would wear to the club on Saturday night that she wouldn't wear to church on Sunday.",
        "answers":  [
                        {
                            "text":  "slinky dress/skirt",
                            "points":  55
                        },
                        {
                            "text":  "revealing top",
                            "points":  18
                        },
                        {
                            "text":  "high heels",
                            "points":  11
                        },
                        {
                            "text":  "stockings/fishnet",
                            "points":  5
                        },
                        {
                            "text":  "tight jeans/pants",
                            "points":  3
                        },
                        {
                            "text":  "daisy dukes",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110427,
        "question":  "Name something you might be doing in a booth.",
        "answers":  [
                        {
                            "text":  "kissing",
                            "points":  36
                        },
                        {
                            "text":  "eating",
                            "points":  29
                        },
                        {
                            "text":  "taking photos",
                            "points":  15
                        },
                        {
                            "text":  "buy/selling stuff",
                            "points":  6
                        },
                        {
                            "text":  "phone call",
                            "points":  5
                        },
                        {
                            "text":  "voting",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110428,
        "question":  "Name someone a lonely woman might hire to work at her house because he's a nudist.",
        "answers":  [
                        {
                            "text":  "handyman/plumber",
                            "points":  35
                        },
                        {
                            "text":  "pool/cabana boy",
                            "points":  23
                        },
                        {
                            "text":  "gardener",
                            "points":  14
                        },
                        {
                            "text":  "housekeeper",
                            "points":  13
                        },
                        {
                            "text":  "painter",
                            "points":  7
                        },
                        {
                            "text":  "cook",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110429,
        "question":  "Name the biggest gripe you have about your doctor.",
        "answers":  [
                        {
                            "text":  "waiting time",
                            "points":  34
                        },
                        {
                            "text":  "the bill",
                            "points":  30
                        },
                        {
                            "text":  "rushes me",
                            "points":  12
                        },
                        {
                            "text":  "rude/doesn't listen",
                            "points":  11
                        },
                        {
                            "text":  "cold hands",
                            "points":  4
                        },
                        {
                            "text":  "incompetent",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110430,
        "question":  "Name a ball a wife might throw at her husband's head if he watches sports all day on TV.",
        "answers":  [
                        {
                            "text":  "baseball",
                            "points":  32
                        },
                        {
                            "text":  "football",
                            "points":  30
                        },
                        {
                            "text":  "basketball",
                            "points":  10
                        },
                        {
                            "text":  "tennis ball",
                            "points":  9
                        },
                        {
                            "text":  "golf ball",
                            "points":  7
                        },
                        {
                            "text":  "bowling ball",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  110431,
        "question":  "Name something a magician might be embarrassed to admit that he gambled away in a poker game.",
        "answers":  [
                        {
                            "text":  "rabbit",
                            "points":  31
                        },
                        {
                            "text":  "magic wand",
                            "points":  28
                        },
                        {
                            "text":  "hat/outfit",
                            "points":  19
                        },
                        {
                            "text":  "$/magic coin",
                            "points":  7
                        },
                        {
                            "text":  "his boo/assistant",
                            "points":  5
                        },
                        {
                            "text":  "tricks/secrets",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110432,
        "question":  "We asked 100 married women... Name something you wish you could tell your husband, but you're afraid it would end your marriage.",
        "answers":  [
                        {
                            "text":  "lame-o-lover",
                            "points":  26
                        },
                        {
                            "text":  "we're broke/i spent it",
                            "points":  22
                        },
                        {
                            "text":  "i cheated",
                            "points":  20
                        },
                        {
                            "text":  "you're a jerk",
                            "points":  11
                        },
                        {
                            "text":  "lose that gut",
                            "points":  9
                        },
                        {
                            "text":  "i hate your mom",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  110433,
        "question":  "Name a female singer whose concerts sell out within hours after tickets go on sale.",
        "answers":  [
                        {
                            "text":  "taylor swift",
                            "points":  81
                        },
                        {
                            "text":  "beyonce",
                            "points":  4
                        },
                        {
                            "text":  "adele",
                            "points":  2
                        },
                        {
                            "text":  "celine dion",
                            "points":  2
                        },
                        {
                            "text":  "cher",
                            "points":  2
                        },
                        {
                            "text":  "lady gaga",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110434,
        "question":  "Name somewhere it's inappropriate to play the explicit version of a song.",
        "answers":  [
                        {
                            "text":  "church",
                            "points":  67
                        },
                        {
                            "text":  "school/kindergarten",
                            "points":  12
                        },
                        {
                            "text":  "funeral",
                            "points":  5
                        },
                        {
                            "text":  "park/playground",
                            "points":  4
                        },
                        {
                            "text":  "wedding",
                            "points":  3
                        },
                        {
                            "text":  "daycare",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110435,
        "question":  "We asked 100 men... Name something your partner will never do as well as your mom.",
        "answers":  [
                        {
                            "text":  "cook",
                            "points":  63
                        },
                        {
                            "text":  "clean/laundry",
                            "points":  21
                        },
                        {
                            "text":  "yell/lecture",
                            "points":  3
                        },
                        {
                            "text":  "sew",
                            "points":  2
                        },
                        {
                            "text":  "hug me",
                            "points":  2
                        },
                        {
                            "text":  "love me",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110436,
        "question":  "Name something done to a carpet that a bald guy might do to his toupee.",
        "answers":  [
                        {
                            "text":  "clean/shampoo",
                            "points":  61
                        },
                        {
                            "text":  "brush/comb",
                            "points":  11
                        },
                        {
                            "text":  "vacuum",
                            "points":  10
                        },
                        {
                            "text":  "glue/tape it",
                            "points":  5
                        },
                        {
                            "text":  "throw it away",
                            "points":  4
                        },
                        {
                            "text":  "fluff it",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110437,
        "question":  "The party went from average to epic when Bob arrived with what?",
        "answers":  [
                        {
                            "text":  "booze/beer bong",
                            "points":  48
                        },
                        {
                            "text":  "drugs/pot",
                            "points":  14
                        },
                        {
                            "text":  "strippers",
                            "points":  10
                        },
                        {
                            "text":  "music/a band",
                            "points":  10
                        },
                        {
                            "text":  "celeb/sam l. jackson",
                            "points":  6
                        },
                        {
                            "text":  "food",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  110438,
        "question":  "Judge Judy would smack you with her gavel if you made fun of her what?",
        "answers":  [
                        {
                            "text":  "her hair",
                            "points":  44
                        },
                        {
                            "text":  "voice/laugh",
                            "points":  23
                        },
                        {
                            "text":  "'tude/comments",
                            "points":  11
                        },
                        {
                            "text":  "her height",
                            "points":  6
                        },
                        {
                            "text":  "her age",
                            "points":  5
                        },
                        {
                            "text":  "robe/collar",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110439,
        "question":  "Name somebody you pay to work on your body.",
        "answers":  [
                        {
                            "text":  "masseuse",
                            "points":  41
                        },
                        {
                            "text":  "doc/dentist",
                            "points":  29
                        },
                        {
                            "text":  "hairstylist",
                            "points":  8
                        },
                        {
                            "text":  "chiropractor",
                            "points":  6
                        },
                        {
                            "text":  "tattoo artist",
                            "points":  5
                        },
                        {
                            "text":  "fitness trainer",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110440,
        "question":  "If the word of God is number one for you, whose word is number two?",
        "answers":  [
                        {
                            "text":  "parents'",
                            "points":  41
                        },
                        {
                            "text":  "mine",
                            "points":  22
                        },
                        {
                            "text":  "my honey's",
                            "points":  22
                        },
                        {
                            "text":  "clergy's",
                            "points":  3
                        },
                        {
                            "text":  "satan's",
                            "points":  3
                        },
                        {
                            "text":  "my child's",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110441,
        "question":  "We asked 100 men... Name someone who shows up naked in your dream that turns into a nightmare.",
        "answers":  [
                        {
                            "text":  "evil ex",
                            "points":  37
                        },
                        {
                            "text":  "mother-in-law",
                            "points":  18
                        },
                        {
                            "text":  "parents",
                            "points":  13
                        },
                        {
                            "text":  "boss",
                            "points":  11
                        },
                        {
                            "text":  "sister",
                            "points":  7
                        },
                        {
                            "text":  "spouse!",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  110442,
        "question":  "Name a specific job in which you'd be exposed to a lot of germs.",
        "answers":  [
                        {
                            "text":  "nurse",
                            "points":  35
                        },
                        {
                            "text":  "doctor",
                            "points":  33
                        },
                        {
                            "text":  "janitor/housekeeper",
                            "points":  11
                        },
                        {
                            "text":  "trash collector",
                            "points":  10
                        },
                        {
                            "text":  "lab tech",
                            "points":  2
                        },
                        {
                            "text":  "teacher",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110443,
        "question":  "Name a city where there might be more strippers than ballet dancers.",
        "answers":  [
                        {
                            "text":  "las vegas",
                            "points":  77
                        },
                        {
                            "text":  "miami",
                            "points":  7
                        },
                        {
                            "text":  "atlanta",
                            "points":  2
                        },
                        {
                            "text":  "atlantic city",
                            "points":  2
                        },
                        {
                            "text":  "reno",
                            "points":  2
                        },
                        {
                            "text":  "tampa",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110444,
        "question":  "When Jane wants to let Tarzan know she's in the mood for love, she makes a noise like what animal?",
        "answers":  [
                        {
                            "text":  "\"cheeta\"/monkey",
                            "points":  59
                        },
                        {
                            "text":  "kitty cat",
                            "points":  14
                        },
                        {
                            "text":  "tiger",
                            "points":  11
                        },
                        {
                            "text":  "lion",
                            "points":  3
                        },
                        {
                            "text":  "bird",
                            "points":  3
                        },
                        {
                            "text":  "elephant",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110445,
        "question":  "Give me a boy's name that starts with M.",
        "answers":  [
                        {
                            "text":  "mike/michael",
                            "points":  55
                        },
                        {
                            "text":  "matt/matthew",
                            "points":  18
                        },
                        {
                            "text":  "mark/marcus",
                            "points":  13
                        },
                        {
                            "text":  "mason",
                            "points":  2
                        },
                        {
                            "text":  "maverick",
                            "points":  2
                        },
                        {
                            "text":  "malcolm",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110446,
        "question":  "Fill in the blank: Your dog must wonder, \"How come no one else in the family has a ______ like me?\"",
        "answers":  [
                        {
                            "text":  "tail",
                            "points":  54
                        },
                        {
                            "text":  "cute face/nose",
                            "points":  13
                        },
                        {
                            "text":  "collar & leash",
                            "points":  10
                        },
                        {
                            "text":  "bowl",
                            "points":  7
                        },
                        {
                            "text":  "bed",
                            "points":  4
                        },
                        {
                            "text":  "bark",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110447,
        "question":  "Name something a coworker puts on your desk when they don't like you.",
        "answers":  [
                        {
                            "text":  "more work",
                            "points":  52
                        },
                        {
                            "text":  "trash",
                            "points":  14
                        },
                        {
                            "text":  "poop",
                            "points":  9
                        },
                        {
                            "text":  "dead plant",
                            "points":  6
                        },
                        {
                            "text":  "critter/rat",
                            "points":  6
                        },
                        {
                            "text":  "note/\"you're fired!\"",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  110448,
        "question":  "Name a hygiene product a wife might hand her husband and say, \"Hint, hint.\"",
        "answers":  [
                        {
                            "text":  "deodorant",
                            "points":  51
                        },
                        {
                            "text":  "toothbrush/paste",
                            "points":  19
                        },
                        {
                            "text":  "soap/shampoo",
                            "points":  8
                        },
                        {
                            "text":  "condom",
                            "points":  6
                        },
                        {
                            "text":  "cologne",
                            "points":  4
                        },
                        {
                            "text":  "toilet paper",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110449,
        "question":  "Name something a zookeeper might find in the kangaroo's pouch that could make him think the animals were planning an escape.",
        "answers":  [
                        {
                            "text":  "keys",
                            "points":  44
                        },
                        {
                            "text":  "wire cutter/tools",
                            "points":  30
                        },
                        {
                            "text":  "weapon",
                            "points":  7
                        },
                        {
                            "text":  "rope",
                            "points":  6
                        },
                        {
                            "text":  "map",
                            "points":  3
                        },
                        {
                            "text":  "food stash",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110450,
        "question":  "God might have made a mistake because he created what?",
        "answers":  [
                        {
                            "text":  "people/politicians",
                            "points":  41
                        },
                        {
                            "text":  "bugs",
                            "points":  36
                        },
                        {
                            "text":  "snakes",
                            "points":  8
                        },
                        {
                            "text":  "satan",
                            "points":  3
                        },
                        {
                            "text":  "the platypus",
                            "points":  2
                        },
                        {
                            "text":  "taxes",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110451,
        "question":  "Give me a word or expression that contains the word \"drag.\"",
        "answers":  [
                        {
                            "text":  "drag queen",
                            "points":  40
                        },
                        {
                            "text":  "drag race",
                            "points":  28
                        },
                        {
                            "text":  "dragnet",
                            "points":  10
                        },
                        {
                            "text":  "what a.../it's a drag",
                            "points":  7
                        },
                        {
                            "text":  "dragon",
                            "points":  5
                        },
                        {
                            "text":  "drag strip",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110452,
        "question":  "Name something specific Mrs. Peanut might threaten to do to Mr. Peanut when she gets angry.",
        "answers":  [
                        {
                            "text":  "crack/chop him",
                            "points":  37
                        },
                        {
                            "text":  "grind/peanut butter",
                            "points":  23
                        },
                        {
                            "text":  "roast/boil him",
                            "points":  16
                        },
                        {
                            "text":  "eat him",
                            "points":  11
                        },
                        {
                            "text":  "break his monocle",
                            "points":  3
                        },
                        {
                            "text":  "erase his face",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110453,
        "question":  "Grandma is a mover and shaker because when she moves, what shakes?",
        "answers":  [
                        {
                            "text":  "her booty",
                            "points":  28
                        },
                        {
                            "text":  "arms/bat wings",
                            "points":  16
                        },
                        {
                            "text":  "heaven & earth",
                            "points":  15
                        },
                        {
                            "text":  "her boobs",
                            "points":  15
                        },
                        {
                            "text":  "her belly",
                            "points":  13
                        },
                        {
                            "text":  "the house/floor",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  110454,
        "question":  "Name a city where it's easier to walk than drive.",
        "answers":  [
                        {
                            "text":  "new york city",
                            "points":  74
                        },
                        {
                            "text":  "chicago",
                            "points":  6
                        },
                        {
                            "text":  "las vegas",
                            "points":  4
                        },
                        {
                            "text":  "san francisco",
                            "points":  3
                        },
                        {
                            "text":  "paris",
                            "points":  2
                        },
                        {
                            "text":  "emerald city/oz",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110455,
        "question":  "Name an L word you might call your boss behind his back.",
        "answers":  [
                        {
                            "text":  "loser",
                            "points":  65
                        },
                        {
                            "text":  "lame",
                            "points":  8
                        },
                        {
                            "text":  "lazy",
                            "points":  8
                        },
                        {
                            "text":  "liar",
                            "points":  6
                        },
                        {
                            "text":  "loud",
                            "points":  2
                        },
                        {
                            "text":  "love/lover",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110456,
        "question":  "Having big lips is an advantage when you're doing what?",
        "answers":  [
                        {
                            "text":  "kissing",
                            "points":  57
                        },
                        {
                            "text":  "eat/drinking",
                            "points":  17
                        },
                        {
                            "text":  "trumpet/horn",
                            "points":  8
                        },
                        {
                            "text":  "pouting/smiling",
                            "points":  3
                        },
                        {
                            "text":  "bobbing 4 apples",
                            "points":  3
                        },
                        {
                            "text":  "applying lipstick",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110457,
        "question":  "Fill in the blank: White as ______.",
        "answers":  [
                        {
                            "text":  "white as snow",
                            "points":  46
                        },
                        {
                            "text":  "white as rice",
                            "points":  22
                        },
                        {
                            "text":  "white as a ghost",
                            "points":  13
                        },
                        {
                            "text":  "white as a sheet",
                            "points":  6
                        },
                        {
                            "text":  "white as hell",
                            "points":  2
                        },
                        {
                            "text":  "white as bread",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110458,
        "question":  "A wife might not let her husband or the dog in bed for the same reason: they both do what?",
        "answers":  [
                        {
                            "text":  "stink/fart",
                            "points":  44
                        },
                        {
                            "text":  "snore",
                            "points":  23
                        },
                        {
                            "text":  "hog bed",
                            "points":  10
                        },
                        {
                            "text":  "move/kick",
                            "points":  8
                        },
                        {
                            "text":  "cuddle",
                            "points":  3
                        },
                        {
                            "text":  "hump/everyone!",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110459,
        "question":  "We asked 100 married women... Tell me a reason it might be nicer to be married to a robot than a man.",
        "answers":  [
                        {
                            "text":  "obeys/no back talk",
                            "points":  35
                        },
                        {
                            "text":  "cooks & cleans",
                            "points":  28
                        },
                        {
                            "text":  "off button",
                            "points":  13
                        },
                        {
                            "text":  "no sex",
                            "points":  6
                        },
                        {
                            "text":  "won't lie",
                            "points":  5
                        },
                        {
                            "text":  "logical/smart",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110460,
        "question":  "Name a female country singer known by just her first name.",
        "answers":  [
                        {
                            "text":  "reba",
                            "points":  34
                        },
                        {
                            "text":  "dolly",
                            "points":  30
                        },
                        {
                            "text":  "shania",
                            "points":  16
                        },
                        {
                            "text":  "jewel",
                            "points":  4
                        },
                        {
                            "text":  "loretta",
                            "points":  4
                        },
                        {
                            "text":  "wynonna",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110461,
        "question":  "Name an occupation in which you might have to break up a fight.",
        "answers":  [
                        {
                            "text":  "bouncer",
                            "points":  30
                        },
                        {
                            "text":  "referee",
                            "points":  25
                        },
                        {
                            "text":  "po-po",
                            "points":  22
                        },
                        {
                            "text":  "security guard",
                            "points":  5
                        },
                        {
                            "text":  "bartender",
                            "points":  5
                        },
                        {
                            "text":  "teacher/principal",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110462,
        "question":  "Name something of yours that looks like it was hit with an ugly stick.",
        "answers":  [
                        {
                            "text":  "me/my face",
                            "points":  55
                        },
                        {
                            "text":  "mother-in-law",
                            "points":  10
                        },
                        {
                            "text":  "my bae",
                            "points":  8
                        },
                        {
                            "text":  "my car",
                            "points":  7
                        },
                        {
                            "text":  "my clothes/shoes",
                            "points":  6
                        },
                        {
                            "text":  "my furniture",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110463,
        "question":  "We asked 100 men... I don't want to rest in peace -- I want to be buried next to what to watch the action?",
        "answers":  [
                        {
                            "text":  "sports venue/golf",
                            "points":  52
                        },
                        {
                            "text":  "a tv",
                            "points":  20
                        },
                        {
                            "text":  "bar/club",
                            "points":  8
                        },
                        {
                            "text":  "my wife/mate",
                            "points":  5
                        },
                        {
                            "text":  "strip joint",
                            "points":  3
                        },
                        {
                            "text":  "casino/vegas",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110464,
        "question":  "Name a sound that ruins a moment of romance.",
        "answers":  [
                        {
                            "text":  "2-toot-salute",
                            "points":  45
                        },
                        {
                            "text":  "kids/crying",
                            "points":  17
                        },
                        {
                            "text":  "burp",
                            "points":  12
                        },
                        {
                            "text":  "horn/siren",
                            "points":  8
                        },
                        {
                            "text":  "door/\"fbi! open up!\"",
                            "points":  5
                        },
                        {
                            "text":  "phone",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110465,
        "question":  "Name a lie a woman tells a guy after a bad first date so he stops calling.",
        "answers":  [
                        {
                            "text":  "taken/back with ex",
                            "points":  40
                        },
                        {
                            "text":  "disease/dying",
                            "points":  18
                        },
                        {
                            "text":  "prefer ladies",
                            "points":  10
                        },
                        {
                            "text":  "moving",
                            "points":  9
                        },
                        {
                            "text":  "so busy/work",
                            "points":  7
                        },
                        {
                            "text":  "i'm pregnant",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  110466,
        "question":  "We asked 100 men... Your mate searches for what on the internet that makes you think you're going to be a father?",
        "answers":  [
                        {
                            "text":  "baby clothes",
                            "points":  32
                        },
                        {
                            "text":  "crib/baby furniture",
                            "points":  27
                        },
                        {
                            "text":  "diapers",
                            "points":  12
                        },
                        {
                            "text":  "pregnancy test",
                            "points":  10
                        },
                        {
                            "text":  "parent'g book/info",
                            "points":  6
                        },
                        {
                            "text":  "child names",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110467,
        "question":  "A store selling what might be really popular in hell?",
        "answers":  [
                        {
                            "text":  "ice/cold water",
                            "points":  52
                        },
                        {
                            "text":  "ac/fans",
                            "points":  19
                        },
                        {
                            "text":  "drugs/cbd",
                            "points":  6
                        },
                        {
                            "text":  "booze/fireball",
                            "points":  5
                        },
                        {
                            "text":  "ice cream/popsicles",
                            "points":  5
                        },
                        {
                            "text":  "cute red clothes",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110468,
        "question":  "Name an animal starting with the letter S that would make a terrible pet.",
        "answers":  [
                        {
                            "text":  "snake",
                            "points":  42
                        },
                        {
                            "text":  "skunk",
                            "points":  19
                        },
                        {
                            "text":  "shark",
                            "points":  11
                        },
                        {
                            "text":  "sloth",
                            "points":  8
                        },
                        {
                            "text":  "snail",
                            "points":  5
                        },
                        {
                            "text":  "scorpion",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110469,
        "question":  "Name something you might put in your evil ex's shampoo.",
        "answers":  [
                        {
                            "text":  "nair",
                            "points":  39
                        },
                        {
                            "text":  "bleach/dye",
                            "points":  29
                        },
                        {
                            "text":  "pee",
                            "points":  6
                        },
                        {
                            "text":  "condiments/spices",
                            "points":  6
                        },
                        {
                            "text":  "glue",
                            "points":  5
                        },
                        {
                            "text":  "water",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110470,
        "question":  "Name something Steve Harvey and The Rock have in common.",
        "answers":  [
                        {
                            "text":  "bald",
                            "points":  39
                        },
                        {
                            "text":  "bathe in money",
                            "points":  12
                        },
                        {
                            "text":  "they're black",
                            "points":  12
                        },
                        {
                            "text":  "fine faces/smiles",
                            "points":  10
                        },
                        {
                            "text":  "tall & hunky",
                            "points":  9
                        },
                        {
                            "text":  "famous",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  110471,
        "question":  "Name a place where it's inappropriate to be rolling on the floor laughing.",
        "answers":  [
                        {
                            "text":  "church",
                            "points":  38
                        },
                        {
                            "text":  "funeral/cemetery",
                            "points":  23
                        },
                        {
                            "text":  "work",
                            "points":  14
                        },
                        {
                            "text":  "hospital/doc",
                            "points":  6
                        },
                        {
                            "text":  "bathroom/at rest stop",
                            "points":  4
                        },
                        {
                            "text":  "store/chanel",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110472,
        "question":  "Fill in the blank: ______ bells.",
        "answers":  [
                        {
                            "text":  "jingle bells",
                            "points":  32
                        },
                        {
                            "text":  "hell's bells",
                            "points":  18
                        },
                        {
                            "text":  "silver bells",
                            "points":  14
                        },
                        {
                            "text":  "wedding bells",
                            "points":  10
                        },
                        {
                            "text":  "church bells",
                            "points":  9
                        },
                        {
                            "text":  "christmas bells",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  110473,
        "question":  "We asked 100 women... Tell me a reason your BFF might tell you she loves dating Italian men.",
        "answers":  [
                        {
                            "text":  "sexier!",
                            "points":  25
                        },
                        {
                            "text":  "that accent! yum!",
                            "points":  25
                        },
                        {
                            "text":  "romantic",
                            "points":  12
                        },
                        {
                            "text":  "good food!",
                            "points":  12
                        },
                        {
                            "text":  "better lovers",
                            "points":  11
                        },
                        {
                            "text":  "thick dark hair6",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110474,
        "question":  "Name something a castle might have that would be weird if your house had it.",
        "answers":  [
                        {
                            "text":  "moat/drawbridge",
                            "points":  61
                        },
                        {
                            "text":  "torture dungeon",
                            "points":  10
                        },
                        {
                            "text":  "turret/tower",
                            "points":  9
                        },
                        {
                            "text":  "no plumbing/a well",
                            "points":  3
                        },
                        {
                            "text":  "knights/guards",
                            "points":  2
                        },
                        {
                            "text":  "pet dragon",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110475,
        "question":  "Name the worst place to find a fresh wad of chewing gum.",
        "answers":  [
                        {
                            "text":  "chair/seat",
                            "points":  32
                        },
                        {
                            "text":  "shoe",
                            "points":  24
                        },
                        {
                            "text":  "hair",
                            "points":  17
                        },
                        {
                            "text":  "clothes/butt",
                            "points":  5
                        },
                        {
                            "text":  "table",
                            "points":  5
                        },
                        {
                            "text":  "toilet",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110476,
        "question":  "If your family is stressing you out, what might you buy yourself for Christmas?",
        "answers":  [
                        {
                            "text":  "booze",
                            "points":  26
                        },
                        {
                            "text":  "earphones/plugs",
                            "points":  23
                        },
                        {
                            "text":  "vacation",
                            "points":  15
                        },
                        {
                            "text":  "spa day/massage",
                            "points":  14
                        },
                        {
                            "text":  "chocolate/candy",
                            "points":  6
                        },
                        {
                            "text":  "meds/weed",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110477,
        "question":  "Name someone in your life that, however tempting, it would be a big no-no to start a romantic relationship with.",
        "answers":  [
                        {
                            "text":  "boss/coworker",
                            "points":  25
                        },
                        {
                            "text":  "best friend",
                            "points":  24
                        },
                        {
                            "text":  "my ex",
                            "points":  14
                        },
                        {
                            "text":  "sis/bro-in-law",
                            "points":  9
                        },
                        {
                            "text":  "best friend's mate",
                            "points":  8
                        },
                        {
                            "text":  "neighbor",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  110478,
        "question":  "If dogs knew how to use Google, what might they search for the most?",
        "answers":  [
                        {
                            "text":  "bones/food",
                            "points":  59
                        },
                        {
                            "text":  "where da cats",
                            "points":  10
                        },
                        {
                            "text":  "toy delivery",
                            "points":  5
                        },
                        {
                            "text":  "pee spots/hydrants",
                            "points":  4
                        },
                        {
                            "text":  "dog parks",
                            "points":  4
                        },
                        {
                            "text":  "dog pics",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110479,
        "question":  "Name a specific moment you suck in your gut.",
        "answers":  [
                        {
                            "text":  "photos",
                            "points":  36
                        },
                        {
                            "text":  "dress'g/skinny jeans",
                            "points":  21
                        },
                        {
                            "text":  "see a cutie!",
                            "points":  15
                        },
                        {
                            "text":  "wedding",
                            "points":  6
                        },
                        {
                            "text":  "doctor's office",
                            "points":  4
                        },
                        {
                            "text":  "in the mirror",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110480,
        "question":  "They call Batman by shining a symbol of a bat in the sky. What symbol would they shine to summon Steve Harvey?",
        "answers":  [
                        {
                            "text":  "mustache",
                            "points":  36
                        },
                        {
                            "text":  "dollar sign",
                            "points":  18
                        },
                        {
                            "text":  "smile/white teeth",
                            "points":  13
                        },
                        {
                            "text":  "bald head",
                            "points":  11
                        },
                        {
                            "text":  "a fine suit",
                            "points":  5
                        },
                        {
                            "text":  "family feud logo",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110481,
        "question":  "A woman probably should not do what when she's nine months pregnant?",
        "answers":  [
                        {
                            "text":  "sports/bungee jump",
                            "points":  43
                        },
                        {
                            "text":  "drink/bar hop",
                            "points":  23
                        },
                        {
                            "text":  "smoke",
                            "points":  7
                        },
                        {
                            "text":  "sex",
                            "points":  6
                        },
                        {
                            "text":  "dance/twerk",
                            "points":  3
                        },
                        {
                            "text":  "fly/travel",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110482,
        "question":  "Name something a woman might want to be buried with in case she needs it in the afterlife.",
        "answers":  [
                        {
                            "text":  "cash/purse",
                            "points":  35
                        },
                        {
                            "text":  "phone",
                            "points":  14
                        },
                        {
                            "text":  "jewelry",
                            "points":  13
                        },
                        {
                            "text":  "makeup",
                            "points":  12
                        },
                        {
                            "text":  "cute outfit",
                            "points":  8
                        },
                        {
                            "text":  "vibrator",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110483,
        "question":  "Eve told Adam, \"I'm just glad God made me from your rib and not your\" what?",
        "answers":  [
                        {
                            "text":  "butt",
                            "points":  27
                        },
                        {
                            "text":  "pea-brain",
                            "points":  22
                        },
                        {
                            "text":  "ding-a-ling",
                            "points":  15
                        },
                        {
                            "text":  "foot/toenail",
                            "points":  12
                        },
                        {
                            "text":  "ear",
                            "points":  5
                        },
                        {
                            "text":  "ugly mug/nose",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110484,
        "question":  "Tell me something people know about Prince Harry.",
        "answers":  [
                        {
                            "text":  "married to meghan",
                            "points":  31
                        },
                        {
                            "text":  "diana's son",
                            "points":  21
                        },
                        {
                            "text":  "redhead",
                            "points":  16
                        },
                        {
                            "text":  "he's a prince...duh",
                            "points":  9
                        },
                        {
                            "text":  "hottie!",
                            "points":  4
                        },
                        {
                            "text":  "balding",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110485,
        "question":  "Name something your parents used to tell you that you should be grateful to have.",
        "answers":  [
                        {
                            "text":  "food/broccoli",
                            "points":  35
                        },
                        {
                            "text":  "a home",
                            "points":  25
                        },
                        {
                            "text":  "them",
                            "points":  11
                        },
                        {
                            "text":  "brains/sense",
                            "points":  4
                        },
                        {
                            "text":  "clothes/ugly loafers",
                            "points":  4
                        },
                        {
                            "text":  "annoying sibling",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110486,
        "question":  "If people laid eggs, name a specific place that you'd hate to be when one pops out of you.",
        "answers":  [
                        {
                            "text":  "work/interview",
                            "points":  25
                        },
                        {
                            "text":  "store/mall",
                            "points":  18
                        },
                        {
                            "text":  "church",
                            "points":  16
                        },
                        {
                            "text":  "bathroom/toilet",
                            "points":  12
                        },
                        {
                            "text":  "car/taxi",
                            "points":  8
                        },
                        {
                            "text":  "restaurant/on date",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110487,
        "question":  "Fill in the blank: My ______ should win an Oscar because they are such a drama queen.",
        "answers":  [
                        {
                            "text":  "child/teen",
                            "points":  25
                        },
                        {
                            "text":  "spouse/partner",
                            "points":  18
                        },
                        {
                            "text":  "sibling",
                            "points":  15
                        },
                        {
                            "text":  "boss/coworker",
                            "points":  9
                        },
                        {
                            "text":  "friend",
                            "points":  8
                        },
                        {
                            "text":  "dog/pet",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  110488,
        "question":  "Fill in the blank: You'd probably get kicked off of a jury if you ______ed during the trial.",
        "answers":  [
                        {
                            "text":  "slept/snored",
                            "points":  36
                        },
                        {
                            "text":  "talked/yelled",
                            "points":  24
                        },
                        {
                            "text":  "farted",
                            "points":  8
                        },
                        {
                            "text":  "laughed",
                            "points":  7
                        },
                        {
                            "text":  "puked",
                            "points":  4
                        },
                        {
                            "text":  "pics/live-streamed",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110489,
        "question":  "Fill in the blank: If Satan were a woman, she'd make the men in hell wear ______ all day.",
        "answers":  [
                        {
                            "text":  "stilettos",
                            "points":  34
                        },
                        {
                            "text":  "thongs/panties",
                            "points":  15
                        },
                        {
                            "text":  "bras",
                            "points":  13
                        },
                        {
                            "text":  "suits/ties",
                            "points":  10
                        },
                        {
                            "text":  "winter coats/sweaters",
                            "points":  7
                        },
                        {
                            "text":  "speedos",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110490,
        "question":  "Name something a thin supermodel might have that's fat.",
        "answers":  [
                        {
                            "text":  "bank account",
                            "points":  25
                        },
                        {
                            "text":  "lips",
                            "points":  16
                        },
                        {
                            "text":  "peach booty",
                            "points":  13
                        },
                        {
                            "text":  "pet",
                            "points":  12
                        },
                        {
                            "text":  "burger/food",
                            "points":  9
                        },
                        {
                            "text":  "ego",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  110491,
        "question":  "Name a B word that describes your belly.",
        "answers":  [
                        {
                            "text":  "big",
                            "points":  45
                        },
                        {
                            "text":  "bloated",
                            "points":  13
                        },
                        {
                            "text":  "beautiful",
                            "points":  8
                        },
                        {
                            "text":  "bouncy",
                            "points":  7
                        },
                        {
                            "text":  "bulging",
                            "points":  5
                        },
                        {
                            "text":  "blubbery",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110492,
        "question":  "Fill in the blank: I want to live in a mansion so big, it has its own ______.",
        "answers":  [
                        {
                            "text":  "zip/area code",
                            "points":  43
                        },
                        {
                            "text":  "water park",
                            "points":  20
                        },
                        {
                            "text":  "guest house",
                            "points":  7
                        },
                        {
                            "text":  "helipad/plane",
                            "points":  4
                        },
                        {
                            "text":  "mall/store",
                            "points":  4
                        },
                        {
                            "text":  "movie theater",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110493,
        "question":  "If a baby could talk while it was still in the womb, tell me a question it might ask its mom.",
        "answers":  [
                        {
                            "text":  "when do i get out?",
                            "points":  31
                        },
                        {
                            "text":  "what are we eating?",
                            "points":  29
                        },
                        {
                            "text":  "what's my name?",
                            "points":  8
                        },
                        {
                            "text":  "who are you?",
                            "points":  5
                        },
                        {
                            "text":  "what's that noise?",
                            "points":  4
                        },
                        {
                            "text":  "where am i?",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110494,
        "question":  "Name something you're tempted to do when you notice a stranger staring at you.",
        "answers":  [
                        {
                            "text":  "stare right back",
                            "points":  24
                        },
                        {
                            "text":  "smile/laugh",
                            "points":  14
                        },
                        {
                            "text":  "wave",
                            "points":  13
                        },
                        {
                            "text":  "confront/ask",
                            "points":  13
                        },
                        {
                            "text":  "turn away",
                            "points":  9
                        },
                        {
                            "text":  "make face/tongue out",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  110495,
        "question":  "Tell me an S word that describes how you feel after smoking pot.",
        "answers":  [
                        {
                            "text":  "sleepy",
                            "points":  27
                        },
                        {
                            "text":  "stoned",
                            "points":  24
                        },
                        {
                            "text":  "silly",
                            "points":  15
                        },
                        {
                            "text":  "stupid/stupefied",
                            "points":  8
                        },
                        {
                            "text":  "serene",
                            "points":  3
                        },
                        {
                            "text":  "smooth",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110496,
        "question":  "We asked 100 women... Fill in the blank: I must admit, I ______ too much.",
        "answers":  [
                        {
                            "text":  "shop/spend",
                            "points":  21
                        },
                        {
                            "text":  "drink2",
                            "points":  16
                        },
                        {
                            "text":  "eat",
                            "points":  14
                        },
                        {
                            "text":  "talk",
                            "points":  13
                        },
                        {
                            "text":  "worry",
                            "points":  12
                        },
                        {
                            "text":  "cry",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110497,
        "question":  "Name a famous captain.",
        "answers":  [
                        {
                            "text":  "cap'n crunch",
                            "points":  20
                        },
                        {
                            "text":  "captain hook",
                            "points":  17
                        },
                        {
                            "text":  "captain america",
                            "points":  15
                        },
                        {
                            "text":  "captain kirk",
                            "points":  10
                        },
                        {
                            "text":  "captain kangaroo",
                            "points":  10
                        },
                        {
                            "text":  "captain jack sparrow",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  110498,
        "question":  "Name something a bride might ride down the aisle to make a big entrance.",
        "answers":  [
                        {
                            "text":  "horse",
                            "points":  43
                        },
                        {
                            "text":  "motorcycle",
                            "points":  14
                        },
                        {
                            "text":  "car/jeep",
                            "points":  7
                        },
                        {
                            "text":  "stand-up scooter",
                            "points":  5
                        },
                        {
                            "text":  "bike/unicycle",
                            "points":  5
                        },
                        {
                            "text":  "elephant",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110499,
        "question":  "You get to experience a little heaven on earth whenever you have a good what?",
        "answers":  [
                        {
                            "text":  "meal/food",
                            "points":  38
                        },
                        {
                            "text":  "shag",
                            "points":  14
                        },
                        {
                            "text":  "massage",
                            "points":  8
                        },
                        {
                            "text":  "nap/sleep",
                            "points":  6
                        },
                        {
                            "text":  "wine/drink",
                            "points":  5
                        },
                        {
                            "text":  "doody",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  110500,
        "question":  "Name something outside your house that you'd hate to get inside your house.",
        "answers":  [
                        {
                            "text":  "bugs/spider",
                            "points":  36
                        },
                        {
                            "text":  "snake",
                            "points":  9
                        },
                        {
                            "text":  "mouse/rat",
                            "points":  9
                        },
                        {
                            "text":  "skunk",
                            "points":  8
                        },
                        {
                            "text":  "dirt/mud",
                            "points":  6
                        },
                        {
                            "text":  "raccoon",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  110501,
        "question":  "Name an occupation in which all eyes are on your hands.",
        "answers":  [
                        {
                            "text":  "surgeon/dentist",
                            "points":  23
                        },
                        {
                            "text":  "hand model",
                            "points":  19
                        },
                        {
                            "text":  "manicurist",
                            "points":  13
                        },
                        {
                            "text":  "magician",
                            "points":  7
                        },
                        {
                            "text":  "casino/card dealer",
                            "points":  7
                        },
                        {
                            "text":  "sign lang. translator",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  110502,
        "question":  "Name an occupation that you'd never want to hear say, \"Oh no -- this is not good.\"",
        "answers":  [
                        {
                            "text":  "doctor/dentist",
                            "points":  55
                        },
                        {
                            "text":  "plumber",
                            "points":  6
                        },
                        {
                            "text":  "nuclear engineer",
                            "points":  3
                        },
                        {
                            "text":  "cook/chef",
                            "points":  3
                        },
                        {
                            "text":  "politician",
                            "points":  3
                        },
                        {
                            "text":  "pilot",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110503,
        "question":  "Name an animal you might compare a date's French kissing to.",
        "answers":  [
                        {
                            "text":  "slobbery dog",
                            "points":  40
                        },
                        {
                            "text":  "fish",
                            "points":  8
                        },
                        {
                            "text":  "snake",
                            "points":  8
                        },
                        {
                            "text":  "lizard",
                            "points":  7
                        },
                        {
                            "text":  "frog",
                            "points":  5
                        },
                        {
                            "text":  "giraffe",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110504,
        "question":  "Name something you should never, ever do in the middle of a job interview.",
        "answers":  [
                        {
                            "text":  "fart",
                            "points":  33
                        },
                        {
                            "text":  "use phone/text",
                            "points":  12
                        },
                        {
                            "text":  "pick nose",
                            "points":  11
                        },
                        {
                            "text":  "cuss/yell",
                            "points":  10
                        },
                        {
                            "text":  "go to bathroom",
                            "points":  3
                        },
                        {
                            "text":  "light up a cig",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110505,
        "question":  "Name a female singer who would intimidate most men she dates.",
        "answers":  [
                        {
                            "text":  "taylor swift",
                            "points":  30
                        },
                        {
                            "text":  "beyonce",
                            "points":  11
                        },
                        {
                            "text":  "cher",
                            "points":  9
                        },
                        {
                            "text":  "jennifer lopez",
                            "points":  9
                        },
                        {
                            "text":  "madonna",
                            "points":  7
                        },
                        {
                            "text":  "pink",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  110506,
        "question":  "A kid in a candy store behaves the same as a grown man in a where?",
        "answers":  [
                        {
                            "text":  "strip joint",
                            "points":  21
                        },
                        {
                            "text":  "sporting goods store",
                            "points":  14
                        },
                        {
                            "text":  "car lot/show",
                            "points":  13
                        },
                        {
                            "text":  "hardware store",
                            "points":  12
                        },
                        {
                            "text":  "brothel",
                            "points":  6
                        },
                        {
                            "text":  "bar/nightclub",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  110507,
        "question":  "If a woman asked a man to fill out a date application, what question might be on it?",
        "answers":  [
                        {
                            "text":  "income/job?",
                            "points":  26
                        },
                        {
                            "text":  "you single?",
                            "points":  16
                        },
                        {
                            "text":  "perv/man-ho?",
                            "points":  9
                        },
                        {
                            "text":  "age/near death?",
                            "points":  8
                        },
                        {
                            "text":  "have/want kids?",
                            "points":  7
                        },
                        {
                            "text":  "height & weight?",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110508,
        "question":  "Susan got fired from the choir because her singing sounds like what animal?",
        "answers":  [
                        {
                            "text":  "bird/screech owl",
                            "points":  24
                        },
                        {
                            "text":  "cat in heat",
                            "points":  15
                        },
                        {
                            "text":  "hyena",
                            "points":  14
                        },
                        {
                            "text":  "donkey",
                            "points":  7
                        },
                        {
                            "text":  "monkey/ape",
                            "points":  6
                        },
                        {
                            "text":  "whale/orca",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110509,
        "question":  "Name something that goes down.",
        "answers":  [
                        {
                            "text":  "elevator",
                            "points":  27
                        },
                        {
                            "text":  "the sun",
                            "points":  23
                        },
                        {
                            "text":  "temperature",
                            "points":  6
                        },
                        {
                            "text":  "rain",
                            "points":  5
                        },
                        {
                            "text":  "my meal/drink",
                            "points":  4
                        },
                        {
                            "text":  "submarine",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110510,
        "question":  "Name something that would be harder to do if you had a neck like a giraffe.",
        "answers":  [
                        {
                            "text":  "drive",
                            "points":  19
                        },
                        {
                            "text":  "getting dressed/clothing",
                            "points":  16
                        },
                        {
                            "text":  "eat/drink",
                            "points":  11
                        },
                        {
                            "text":  "enter door/house",
                            "points":  10
                        },
                        {
                            "text":  "sleep",
                            "points":  7
                        },
                        {
                            "text":  "kiss",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  110511,
        "question":  "Name something you might admit to your dog because you know he can't tell anyone.",
        "answers":  [
                        {
                            "text":  "affair/love life",
                            "points":  41
                        },
                        {
                            "text":  "who i hate",
                            "points":  8
                        },
                        {
                            "text":  "i'm sad",
                            "points":  5
                        },
                        {
                            "text":  "criminal/robbed bank",
                            "points":  5
                        },
                        {
                            "text":  "i farted",
                            "points":  4
                        },
                        {
                            "text":  "my weight",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110512,
        "question":  "Grandma's 40-year-old lower back butterfly tattoo now looks like what kind of insect?",
        "answers":  [
                        {
                            "text":  "moth",
                            "points":  24
                        },
                        {
                            "text":  "caterpillar",
                            "points":  15
                        },
                        {
                            "text":  "fly",
                            "points":  8
                        },
                        {
                            "text":  "spider",
                            "points":  8
                        },
                        {
                            "text":  "dragonfly",
                            "points":  6
                        },
                        {
                            "text":  "beetle",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  110513,
        "question":  "Instead of a bottle, the people at a wild party might play a game of spin the what?",
        "answers":  [
                        {
                            "text":  "person/drunk",
                            "points":  19
                        },
                        {
                            "text":  "vibrator",
                            "points":  12
                        },
                        {
                            "text":  "animal/cat",
                            "points":  10
                        },
                        {
                            "text":  "can",
                            "points":  9
                        },
                        {
                            "text":  "cell phone",
                            "points":  9
                        },
                        {
                            "text":  "glass/shot glass",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  110514,
        "question":  "Name a dirty job that they should just let workers do in the nude.",
        "answers":  [
                        {
                            "text":  "construction",
                            "points":  21
                        },
                        {
                            "text":  "cleaning pools",
                            "points":  11
                        },
                        {
                            "text":  "washing cars",
                            "points":  8
                        },
                        {
                            "text":  "house cleaning",
                            "points":  7
                        },
                        {
                            "text":  "painting",
                            "points":  7
                        },
                        {
                            "text":  "sewer worker",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  110515,
        "question":  "Fill in the blank: ______ love.",
        "answers":  [
                        {
                            "text":  "puppy love",
                            "points":  30
                        },
                        {
                            "text":  "truelove",
                            "points":  7
                        },
                        {
                            "text":  "first love",
                            "points":  6
                        },
                        {
                            "text":  "my love",
                            "points":  5
                        },
                        {
                            "text":  "undying love",
                            "points":  5
                        },
                        {
                            "text":  "mad love",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  110516,
        "question":  "Name something you probably do 100 times a day.",
        "answers":  [
                        {
                            "text":  "blink",
                            "points":  21
                        },
                        {
                            "text":  "breathe",
                            "points":  12
                        },
                        {
                            "text":  "check phone/apps",
                            "points":  10
                        },
                        {
                            "text":  "walk/step",
                            "points":  6
                        },
                        {
                            "text":  "talk/swear",
                            "points":  5
                        },
                        {
                            "text":  "fart",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110517,
        "question":  "We asked 100 women... Fill in the blank: I wish they made a pill for men that would make them what?",
        "answers":  [
                        {
                            "text":  "kind/sensitive",
                            "points":  18
                        },
                        {
                            "text":  "clean/do dishes",
                            "points":  15
                        },
                        {
                            "text":  "honest",
                            "points":  8
                        },
                        {
                            "text":  "smarter",
                            "points":  6
                        },
                        {
                            "text":  "chill out/calm",
                            "points":  6
                        },
                        {
                            "text":  "romantic",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  110518,
        "question":  "You just won a fully furnished mansion in the city of your choice. What's your choice?",
        "answers":  [
                        {
                            "text":  "new york city",
                            "points":  21
                        },
                        {
                            "text":  "nashville",
                            "points":  11
                        },
                        {
                            "text":  "la/bev. hills",
                            "points":  11
                        },
                        {
                            "text":  "london",
                            "points":  4
                        },
                        {
                            "text":  "paris",
                            "points":  4
                        },
                        {
                            "text":  "miami",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110519,
        "question":  "We asked 100 single men... What do you do if your date talks nonstop?",
        "answers":  [
                        {
                            "text":  "leave/pee break",
                            "points":  40
                        },
                        {
                            "text":  "listen/nod & smile",
                            "points":  31
                        },
                        {
                            "text":  "ignore her",
                            "points":  16
                        },
                        {
                            "text":  "kiss her",
                            "points":  11
                        },
                        {
                            "text":  "change subject",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110520,
        "question":  "Name something scientists would be excited to find on Mars.",
        "answers":  [
                        {
                            "text":  "life/fossils",
                            "points":  87
                        },
                        {
                            "text":  "water",
                            "points":  6
                        },
                        {
                            "text":  "ruins/buildings",
                            "points":  2
                        },
                        {
                            "text":  "food/mars bars",
                            "points":  2
                        },
                        {
                            "text":  "diamonds/gold",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110521,
        "question":  "Name something you hold back from doing when someone insults your mother.",
        "answers":  [
                        {
                            "text":  "socking 'em",
                            "points":  74
                        },
                        {
                            "text":  "yell'g/cussing",
                            "points":  12
                        },
                        {
                            "text":  "insulting theirs",
                            "points":  8
                        },
                        {
                            "text":  "laughing",
                            "points":  3
                        },
                        {
                            "text":  "agreeing",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110522,
        "question":  "Name something you fish for.",
        "answers":  [
                        {
                            "text":  "fish/seafood",
                            "points":  66
                        },
                        {
                            "text":  "a compliment",
                            "points":  16
                        },
                        {
                            "text":  "my keys",
                            "points":  8
                        },
                        {
                            "text":  "$$$/change",
                            "points":  5
                        },
                        {
                            "text":  "answer/info",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110523,
        "question":  "If you don't like your date, you might put what between you on the couch?",
        "answers":  [
                        {
                            "text":  "pillow",
                            "points":  64
                        },
                        {
                            "text":  "pet/python",
                            "points":  22
                        },
                        {
                            "text":  "food/with garlic",
                            "points":  9
                        },
                        {
                            "text":  "pal/uncle ernie",
                            "points":  2
                        },
                        {
                            "text":  "a lot of space",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110524,
        "question":  "We asked 100 men... Name an accent you fake at the bar to attract women.",
        "answers":  [
                        {
                            "text":  "british",
                            "points":  58
                        },
                        {
                            "text":  "aussie",
                            "points":  16
                        },
                        {
                            "text":  "french",
                            "points":  15
                        },
                        {
                            "text":  "italian",
                            "points":  8
                        },
                        {
                            "text":  "irish",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110525,
        "question":  "We asked 100 married men... What would you be surprised your mother-in-law just did to your bottom?",
        "answers":  [
                        {
                            "text":  "pat/spanked",
                            "points":  57
                        },
                        {
                            "text":  "pinch/squeezed",
                            "points":  27
                        },
                        {
                            "text":  "touch/rubbed",
                            "points":  9
                        },
                        {
                            "text":  "kissed",
                            "points":  4
                        },
                        {
                            "text":  "complimented",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110526,
        "question":  "We asked 100 married men... Fill in the blank: My wife is like ice cream -- they're both ______.",
        "answers":  [
                        {
                            "text":  "delicious",
                            "points":  44
                        },
                        {
                            "text":  "sweet",
                            "points":  27
                        },
                        {
                            "text":  "cold/frigid",
                            "points":  19
                        },
                        {
                            "text":  "creamy",
                            "points":  6
                        },
                        {
                            "text":  "lickable",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110527,
        "question":  "You're on a road trip. You're miles from the next rest stop, but nature calls. What do you do?",
        "answers":  [
                        {
                            "text":  "pull over/use bush",
                            "points":  78
                        },
                        {
                            "text":  "hold it in",
                            "points":  10
                        },
                        {
                            "text":  "pee in cup/bottle",
                            "points":  6
                        },
                        {
                            "text":  "drive faster",
                            "points":  2
                        },
                        {
                            "text":  "pee out window",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110528,
        "question":  "We asked 100 women... Name an L word that describes how you feel on Valentine's Day.",
        "answers":  [
                        {
                            "text":  "loved/loving",
                            "points":  64
                        },
                        {
                            "text":  "lonely",
                            "points":  27
                        },
                        {
                            "text":  "lovely",
                            "points":  3
                        },
                        {
                            "text":  "lucky",
                            "points":  2
                        },
                        {
                            "text":  "liberated",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110529,
        "question":  "Name a specific problem you might have if you lived in a house made out of chocolate.",
        "answers":  [
                        {
                            "text":  "heat/melting",
                            "points":  61
                        },
                        {
                            "text":  "house eaten/get fat",
                            "points":  27
                        },
                        {
                            "text":  "pests/ants",
                            "points":  6
                        },
                        {
                            "text":  "cavities",
                            "points":  2
                        },
                        {
                            "text":  "chocolate stains",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110530,
        "question":  "Fill in the blank: After a divorce, it's always awkward to run into your ex's ______.",
        "answers":  [
                        {
                            "text":  "new boo/fling",
                            "points":  57
                        },
                        {
                            "text":  "parents/fam",
                            "points":  34
                        },
                        {
                            "text":  "friends",
                            "points":  3
                        },
                        {
                            "text":  "lawyer",
                            "points":  2
                        },
                        {
                            "text":  "ex's evil face",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110531,
        "question":  "Name a reason your hands might be tied behind your back.",
        "answers":  [
                        {
                            "text":  "kidnapped/robbery",
                            "points":  39
                        },
                        {
                            "text":  "arrested",
                            "points":  36
                        },
                        {
                            "text":  "fun w/ my boo",
                            "points":  17
                        },
                        {
                            "text":  "magic trick",
                            "points":  3
                        },
                        {
                            "text":  "bobbing for apples",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110532,
        "question":  "We asked 100 men... Who might you practice your marriage proposal on first?",
        "answers":  [
                        {
                            "text":  "myself/mirror",
                            "points":  30
                        },
                        {
                            "text":  "friend",
                            "points":  29
                        },
                        {
                            "text":  "mom",
                            "points":  24
                        },
                        {
                            "text":  "sibling",
                            "points":  13
                        },
                        {
                            "text":  "dog",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110533,
        "question":  "Fill in the blank: Grandma said, \"At my age, I'd rather ______ in bed than make love in it.\"",
        "answers":  [
                        {
                            "text":  "sleep",
                            "points":  75
                        },
                        {
                            "text":  "eat",
                            "points":  9
                        },
                        {
                            "text":  "die",
                            "points":  6
                        },
                        {
                            "text":  "read",
                            "points":  5
                        },
                        {
                            "text":  "tinkle",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110534,
        "question":  "Since he has no pockets, what might a nudist carry around under his hat?",
        "answers":  [
                        {
                            "text":  "wallet/$$$/i.d.",
                            "points":  66
                        },
                        {
                            "text":  "keys",
                            "points":  14
                        },
                        {
                            "text":  "phone",
                            "points":  13
                        },
                        {
                            "text":  "condoms",
                            "points":  2
                        },
                        {
                            "text":  "sunscreen",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110535,
        "question":  "Name something your mom made you go to whether you wanted to or not.",
        "answers":  [
                        {
                            "text":  "church/bible lesson",
                            "points":  58
                        },
                        {
                            "text":  "school",
                            "points":  30
                        },
                        {
                            "text":  "relative's house",
                            "points":  3
                        },
                        {
                            "text":  "store/mall",
                            "points":  3
                        },
                        {
                            "text":  "your room/bed",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110536,
        "question":  "What would you do if you clogged a date's toilet?",
        "answers":  [
                        {
                            "text":  "plunge/fix it",
                            "points":  50
                        },
                        {
                            "text":  "flee/out window",
                            "points":  18
                        },
                        {
                            "text":  "tell 'em/\"sorry!\"",
                            "points":  17
                        },
                        {
                            "text":  "cry/die",
                            "points":  10
                        },
                        {
                            "text":  "call a plumber",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110537,
        "question":  "Fill in the blank: Sally said, \"My ex broke my heart, so I broke his ______.\"",
        "answers":  [
                        {
                            "text":  "car/windshield",
                            "points":  35
                        },
                        {
                            "text":  "face/body",
                            "points":  29
                        },
                        {
                            "text":  "bank account",
                            "points":  25
                        },
                        {
                            "text":  "phone",
                            "points":  5
                        },
                        {
                            "text":  "spirit/will to live",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110538,
        "question":  "Name something Zorro uses when fighting crime that other heroes don't.",
        "answers":  [
                        {
                            "text":  "sword",
                            "points":  80
                        },
                        {
                            "text":  "whip",
                            "points":  7
                        },
                        {
                            "text":  "horse",
                            "points":  5
                        },
                        {
                            "text":  "a mask",
                            "points":  2
                        },
                        {
                            "text":  "spanish",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110539,
        "question":  "Make the sound of one of the animals on Old MacDonald's farm.",
        "answers":  [
                        {
                            "text":  "moo-moo",
                            "points":  49
                        },
                        {
                            "text":  "oink-oink",
                            "points":  31
                        },
                        {
                            "text":  "quack-quack",
                            "points":  10
                        },
                        {
                            "text":  "baa-baa",
                            "points":  4
                        },
                        {
                            "text":  "cluck-cluck",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110540,
        "question":  "Name a place a man takes a first date to make himself look sophisticated.",
        "answers":  [
                        {
                            "text":  "fancy restaurant",
                            "points":  48
                        },
                        {
                            "text":  "theater/opera",
                            "points":  28
                        },
                        {
                            "text":  "museum",
                            "points":  13
                        },
                        {
                            "text":  "concert/symphony",
                            "points":  5
                        },
                        {
                            "text":  "trendy bar/club",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110541,
        "question":  "Name something a person with hemorrhoids avoids riding on.",
        "answers":  [
                        {
                            "text":  "horses",
                            "points":  46
                        },
                        {
                            "text":  "bicycles",
                            "points":  31
                        },
                        {
                            "text":  "motorcycles",
                            "points":  11
                        },
                        {
                            "text":  "mechanical bulls",
                            "points":  5
                        },
                        {
                            "text":  "roller-coasters",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110542,
        "question":  "Fill in the blank: Out of your ______.",
        "answers":  [
                        {
                            "text":  "dang mind",
                            "points":  82
                        },
                        {
                            "text":  "league",
                            "points":  5
                        },
                        {
                            "text":  "butt",
                            "points":  3
                        },
                        {
                            "text":  "mouth",
                            "points":  3
                        },
                        {
                            "text":  "comfort zone",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110543,
        "question":  "Name a famous rabbit you'd be surprised a magician pulled out of his hat.",
        "answers":  [
                        {
                            "text":  "bugs bunny",
                            "points":  64
                        },
                        {
                            "text":  "roger rabbit",
                            "points":  22
                        },
                        {
                            "text":  "peter rabbit",
                            "points":  5
                        },
                        {
                            "text":  "eddie rabbitt",
                            "points":  2
                        },
                        {
                            "text":  "volkswagen rabbit",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110544,
        "question":  "Name something a man needs if he wants to be a rock star.",
        "answers":  [
                        {
                            "text":  "voice/talent",
                            "points":  45
                        },
                        {
                            "text":  "a guitar",
                            "points":  32
                        },
                        {
                            "text":  "wild hair",
                            "points":  10
                        },
                        {
                            "text":  "fame/fans",
                            "points":  4
                        },
                        {
                            "text":  "tight pants/rock garb",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110545,
        "question":  "We asked 100 women... What would you do if your man asked your sister on the phone, \"What are you wearing?\"",
        "answers":  [
                        {
                            "text":  "leave him",
                            "points":  29
                        },
                        {
                            "text":  "confront him/yell",
                            "points":  25
                        },
                        {
                            "text":  "smack him",
                            "points":  21
                        },
                        {
                            "text":  "hang up phone",
                            "points":  13
                        },
                        {
                            "text":  "laugh",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  110546,
        "question":  "Tell me what love smells like.",
        "answers":  [
                        {
                            "text":  "roses/garden/grass",
                            "points":  51
                        },
                        {
                            "text":  "chocolate/food",
                            "points":  26
                        },
                        {
                            "text":  "cologne",
                            "points":  8
                        },
                        {
                            "text":  "fresh air/sunny day",
                            "points":  7
                        },
                        {
                            "text":  "heaven",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110547,
        "question":  "We asked 100 married women... In your fantasies, you just traded your husband for a brand new what?",
        "answers":  [
                        {
                            "text":  "house/land",
                            "points":  34
                        },
                        {
                            "text":  "car/r.v.",
                            "points":  25
                        },
                        {
                            "text":  "lover",
                            "points":  22
                        },
                        {
                            "text":  "housekeeper",
                            "points":  11
                        },
                        {
                            "text":  "dog/cat",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110548,
        "question":  "You know you're famous if your picture appears where?",
        "answers":  [
                        {
                            "text":  "newspaper/mag",
                            "points":  37
                        },
                        {
                            "text":  "tv",
                            "points":  33
                        },
                        {
                            "text":  "internet/app",
                            "points":  12
                        },
                        {
                            "text":  "billboard",
                            "points":  7
                        },
                        {
                            "text":  "most wanted list",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110549,
        "question":  "Name something a woman might do if she sees that her Uber driver is her ex-husband.",
        "answers":  [
                        {
                            "text":  "cancel/new ride",
                            "points":  71
                        },
                        {
                            "text":  "talk/yell at",
                            "points":  7
                        },
                        {
                            "text":  "1-star rating",
                            "points":  6
                        },
                        {
                            "text":  "no tip",
                            "points":  4
                        },
                        {
                            "text":  "laugh",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110550,
        "question":  "We asked 100 women... Name an animal your man looks like when he puckers up for a kiss.",
        "answers":  [
                        {
                            "text":  "fish/puffer",
                            "points":  55
                        },
                        {
                            "text":  "monkey/ape",
                            "points":  28
                        },
                        {
                            "text":  "duck",
                            "points":  3
                        },
                        {
                            "text":  "drooling dog",
                            "points":  3
                        },
                        {
                            "text":  "anteater",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110551,
        "question":  "At a hotel, name something the maid might clean with the same sponge she uses to clean the toilet.",
        "answers":  [
                        {
                            "text":  "sink/faucet",
                            "points":  51
                        },
                        {
                            "text":  "tub/shower",
                            "points":  18
                        },
                        {
                            "text":  "counters/vanity",
                            "points":  13
                        },
                        {
                            "text":  "floor",
                            "points":  5
                        },
                        {
                            "text":  "drinking glass",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110552,
        "question":  "Name something in a strip club a man might like to have in his man cave.",
        "answers":  [
                        {
                            "text":  "6 mvp strippers",
                            "points":  41
                        },
                        {
                            "text":  "stripper pole",
                            "points":  36
                        },
                        {
                            "text":  "neon/strobe lights",
                            "points":  5
                        },
                        {
                            "text":  "full bar",
                            "points":  5
                        },
                        {
                            "text":  "music/d.j.",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110553,
        "question":  "What does a bride have at the wedding if she thinks she might run from the altar?",
        "answers":  [
                        {
                            "text":  "comfy kicks",
                            "points":  39
                        },
                        {
                            "text":  "car/keys",
                            "points":  38
                        },
                        {
                            "text":  "cold feet, of course",
                            "points":  5
                        },
                        {
                            "text":  "money",
                            "points":  4
                        },
                        {
                            "text":  "bridesmaids/pals",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110554,
        "question":  "Name a famous Tom that a girl would love to go to the prom with.",
        "answers":  [
                        {
                            "text":  "tom cruise",
                            "points":  42
                        },
                        {
                            "text":  "tom brady",
                            "points":  21
                        },
                        {
                            "text":  "tom hanks",
                            "points":  12
                        },
                        {
                            "text":  "tom selleck",
                            "points":  10
                        },
                        {
                            "text":  "tom holland",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110555,
        "question":  "Name the game show with the best-dressed contestants.",
        "answers":  [
                        {
                            "text":  "family feud",
                            "points":  42
                        },
                        {
                            "text":  "jeopardy!",
                            "points":  29
                        },
                        {
                            "text":  "let's make a deal",
                            "points":  8
                        },
                        {
                            "text":  "wheel of fortune",
                            "points":  4
                        },
                        {
                            "text":  "the price is right",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110556,
        "question":  "Name something you'd be surprised to see your boss riding to work.",
        "answers":  [
                        {
                            "text":  "horse",
                            "points":  36
                        },
                        {
                            "text":  "motorcycle/moped",
                            "points":  26
                        },
                        {
                            "text":  "bike/unicycle",
                            "points":  18
                        },
                        {
                            "text":  "the bus",
                            "points":  4
                        },
                        {
                            "text":  "donkey/mule",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110557,
        "question":  "Name a place a 60-year-old cougar goes to look for a younger guy.",
        "answers":  [
                        {
                            "text":  "bar/club",
                            "points":  68
                        },
                        {
                            "text":  "store/gamestop",
                            "points":  7
                        },
                        {
                            "text":  "gym",
                            "points":  4
                        },
                        {
                            "text":  "online/tiktok",
                            "points":  3
                        },
                        {
                            "text":  "college/frat party",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110558,
        "question":  "Instead of an Easter egg hunt, grandpa makes the kids hunt for his what?",
        "answers":  [
                        {
                            "text":  "dentures",
                            "points":  39
                        },
                        {
                            "text":  "trifocals",
                            "points":  34
                        },
                        {
                            "text":  "velcro shoes/garb",
                            "points":  5
                        },
                        {
                            "text":  "wallet/nickels",
                            "points":  4
                        },
                        {
                            "text":  "nuts/food",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110559,
        "question":  "Name something from childhood that many people save.",
        "answers":  [
                        {
                            "text":  "pics/yearbook",
                            "points":  39
                        },
                        {
                            "text":  "toys/teddy bears",
                            "points":  28
                        },
                        {
                            "text":  "blankie",
                            "points":  9
                        },
                        {
                            "text":  "baby teeth",
                            "points":  5
                        },
                        {
                            "text":  "clothes/baby booties",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110560,
        "question":  "Instead of strip poker, it might be fun to strip while playing what card game?",
        "answers":  [
                        {
                            "text":  "uno",
                            "points":  33
                        },
                        {
                            "text":  "go fish",
                            "points":  21
                        },
                        {
                            "text":  "blackjack",
                            "points":  16
                        },
                        {
                            "text":  "gin rummy",
                            "points":  7
                        },
                        {
                            "text":  "solitaire",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  110561,
        "question":  "Name a time when you tell your partner, \"Be quiet.\"",
        "answers":  [
                        {
                            "text":  "movie/tv time",
                            "points":  49
                        },
                        {
                            "text":  "church",
                            "points":  12
                        },
                        {
                            "text":  "nap/bedtime",
                            "points":  11
                        },
                        {
                            "text":  "sexy time",
                            "points":  7
                        },
                        {
                            "text":  "all. day. long.",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110562,
        "question":  "Fill in the blank: Girl ______.",
        "answers":  [
                        {
                            "text":  "girl power",
                            "points":  43
                        },
                        {
                            "text":  "girl talk",
                            "points":  23
                        },
                        {
                            "text":  "girlfriend",
                            "points":  10
                        },
                        {
                            "text":  "girlboss",
                            "points":  3
                        },
                        {
                            "text":  "\"girl, bye!\"",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110563,
        "question":  "Living or dead, who would be on a \"famous men named Steve\" list?",
        "answers":  [
                        {
                            "text":  "steve harvey",
                            "points":  42
                        },
                        {
                            "text":  "steve martin",
                            "points":  18
                        },
                        {
                            "text":  "steve jobs",
                            "points":  14
                        },
                        {
                            "text":  "stevie wonder",
                            "points":  4
                        },
                        {
                            "text":  "steven tyler",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110564,
        "question":  "When you get to work, name something you wouldn't want to see on your desk.",
        "answers":  [
                        {
                            "text":  "pink slip",
                            "points":  33
                        },
                        {
                            "text":  "stack of work",
                            "points":  30
                        },
                        {
                            "text":  "\"see me\" note",
                            "points":  9
                        },
                        {
                            "text":  "rat/creature",
                            "points":  6
                        },
                        {
                            "text":  "my boss",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110565,
        "question":  "Name something you might have on your hands.",
        "answers":  [
                        {
                            "text":  "rings",
                            "points":  25
                        },
                        {
                            "text":  "dirt/grease",
                            "points":  21
                        },
                        {
                            "text":  "lotion",
                            "points":  18
                        },
                        {
                            "text":  "gloves",
                            "points":  9
                        },
                        {
                            "text":  "too much time",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  110566,
        "question":  "Name something a man has that he loves to show off to other men.",
        "answers":  [
                        {
                            "text":  "sweet wheels",
                            "points":  48
                        },
                        {
                            "text":  "smokin' babe",
                            "points":  16
                        },
                        {
                            "text":  "power tools",
                            "points":  7
                        },
                        {
                            "text":  "$$$/bank acct.",
                            "points":  5
                        },
                        {
                            "text":  "muscles/6-pack",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110567,
        "question":  "Name something that men seem to enjoy the smell of.",
        "answers":  [
                        {
                            "text":  "food/coffee",
                            "points":  35
                        },
                        {
                            "text":  "cologne",
                            "points":  21
                        },
                        {
                            "text":  "women",
                            "points":  10
                        },
                        {
                            "text":  "whiskey/booze",
                            "points":  6
                        },
                        {
                            "text":  "car/gasoline",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  110568,
        "question":  "Name a food item you'd use to deface your ex's car.",
        "answers":  [
                        {
                            "text":  "eggs",
                            "points":  64
                        },
                        {
                            "text":  "tomato",
                            "points":  4
                        },
                        {
                            "text":  "bologna slices",
                            "points":  3
                        },
                        {
                            "text":  "ketchup",
                            "points":  3
                        },
                        {
                            "text":  "mustard",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110569,
        "question":  "Name an activity that makes you feel alive.",
        "answers":  [
                        {
                            "text":  "exercise/sports",
                            "points":  47
                        },
                        {
                            "text":  "dancing",
                            "points":  11
                        },
                        {
                            "text":  "nookie",
                            "points":  9
                        },
                        {
                            "text":  "music/concert",
                            "points":  5
                        },
                        {
                            "text":  "traveling",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110570,
        "question":  "You'd hate to move to a town with only one what?",
        "answers":  [
                        {
                            "text":  "store",
                            "points":  44
                        },
                        {
                            "text":  "bar",
                            "points":  14
                        },
                        {
                            "text":  "restaurant",
                            "points":  8
                        },
                        {
                            "text":  "gas station",
                            "points":  6
                        },
                        {
                            "text":  "cop",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110571,
        "question":  "Name a food you should avoid eating on a first date.",
        "answers":  [
                        {
                            "text":  "garlic",
                            "points":  31
                        },
                        {
                            "text":  "onions",
                            "points":  19
                        },
                        {
                            "text":  "spaghetti/pasta",
                            "points":  12
                        },
                        {
                            "text":  "beans",
                            "points":  9
                        },
                        {
                            "text":  "fish",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  110572,
        "question":  "Name a sport that's harder to play on a windy day.",
        "answers":  [
                        {
                            "text":  "badminton",
                            "points":  18
                        },
                        {
                            "text":  "tennis",
                            "points":  17
                        },
                        {
                            "text":  "baseball",
                            "points":  15
                        },
                        {
                            "text":  "golf",
                            "points":  13
                        },
                        {
                            "text":  "frisbee",
                            "points":  10
                        }
                    ]
    },
    {
        "id":  110573,
        "question":  "Fill in the blank: The big ______.",
        "answers":  [
                        {
                            "text":  "the big bang/theory",
                            "points":  40
                        },
                        {
                            "text":  "the big lebowski",
                            "points":  9
                        },
                        {
                            "text":  "the big kahuna",
                            "points":  8
                        },
                        {
                            "text":  "the big easy",
                            "points":  8
                        },
                        {
                            "text":  "the big chill",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  110574,
        "question":  "Name an occupation that might have some explaining to do before they're let into heaven.",
        "answers":  [
                        {
                            "text":  "stripper",
                            "points":  21
                        },
                        {
                            "text":  "lawyer",
                            "points":  16
                        },
                        {
                            "text":  "hooker",
                            "points":  16
                        },
                        {
                            "text":  "politician",
                            "points":  13
                        },
                        {
                            "text":  "hit man/mafia",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  110575,
        "question":  "If your fairy godmother granted you a single wish, you'd tell her you want to go back to the moment right before you did what?",
        "answers":  [
                        {
                            "text":  "married/said yes",
                            "points":  40
                        },
                        {
                            "text":  "sex/got preggo",
                            "points":  13
                        },
                        {
                            "text":  "lost money",
                            "points":  6
                        },
                        {
                            "text":  "had an accident",
                            "points":  6
                        },
                        {
                            "text":  "took job",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  110576,
        "question":  "Name something that some people love to be on top of.",
        "answers":  [
                        {
                            "text":  "mountain/old smoky",
                            "points":  23
                        },
                        {
                            "text":  "\"the world\"",
                            "points":  19
                        },
                        {
                            "text":  "each other!",
                            "points":  13
                        },
                        {
                            "text":  "news/gossip",
                            "points":  7
                        },
                        {
                            "text":  "finances/stocks",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  110577,
        "question":  "Name something that you do fast and furiously.",
        "answers":  [
                        {
                            "text":  "clean/laundry",
                            "points":  28
                        },
                        {
                            "text":  "drive/motorcycle",
                            "points":  18
                        },
                        {
                            "text":  "chow down food",
                            "points":  11
                        },
                        {
                            "text":  "spend/shop",
                            "points":  6
                        },
                        {
                            "text":  "text/write",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  110578,
        "question":  "Name a question an overprotective dad asks his daughter's date.",
        "answers":  [
                        {
                            "text":  "intentions?",
                            "points":  23
                        },
                        {
                            "text":  "how old?",
                            "points":  16
                        },
                        {
                            "text":  "when home?",
                            "points":  14
                        },
                        {
                            "text":  "where going?",
                            "points":  8
                        },
                        {
                            "text":  "have a job?",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  110579,
        "question":  "Name an occasion you'd hate to wake up and realize that you slept right through it.",
        "answers":  [
                        {
                            "text":  "wedding",
                            "points":  23
                        },
                        {
                            "text":  "christmas",
                            "points":  19
                        },
                        {
                            "text":  "birthday/wife's",
                            "points":  13
                        },
                        {
                            "text":  "game/super bowl",
                            "points":  6
                        },
                        {
                            "text":  "job/presentation",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  110580,
        "question":  "Name the perfect occupation for a nosy person.",
        "answers":  [
                        {
                            "text":  "detective/p.i.",
                            "points":  30
                        },
                        {
                            "text":  "reporter/columnist",
                            "points":  19
                        },
                        {
                            "text":  "shrink/therapist",
                            "points":  6
                        },
                        {
                            "text":  "spy",
                            "points":  6
                        },
                        {
                            "text":  "banker/broker",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110581,
        "question":  "We asked 100 women... Fill in the blank: I must admit, I really enjoy ______ing.",
        "answers":  [
                        {
                            "text":  "shopping",
                            "points":  21
                        },
                        {
                            "text":  "boinking",
                            "points":  19
                        },
                        {
                            "text":  "eating",
                            "points":  11
                        },
                        {
                            "text":  "sleeping",
                            "points":  9
                        },
                        {
                            "text":  "reading",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  110582,
        "question":  "Fill in the blank: It's ______ to me.",
        "answers":  [
                        {
                            "text":  "news",
                            "points":  22
                        },
                        {
                            "text":  "greek",
                            "points":  17
                        },
                        {
                            "text":  "up",
                            "points":  11
                        },
                        {
                            "text":  "new",
                            "points":  9
                        },
                        {
                            "text":  "nothing",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  110583,
        "question":  "Tell me the most important thing you ever forgot.",
        "answers":  [
                        {
                            "text":  "a birthday",
                            "points":  28
                        },
                        {
                            "text":  "an anniversary",
                            "points":  14
                        },
                        {
                            "text":  "my keys",
                            "points":  10
                        },
                        {
                            "text":  "phone",
                            "points":  4
                        },
                        {
                            "text":  "password/pin",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110584,
        "question":  "Give me a word that rhymes with \"flute.\"",
        "answers":  [
                        {
                            "text":  "toot",
                            "points":  25
                        },
                        {
                            "text":  "shoot/chute",
                            "points":  12
                        },
                        {
                            "text":  "cute",
                            "points":  11
                        },
                        {
                            "text":  "brute",
                            "points":  6
                        },
                        {
                            "text":  "mute",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  110585,
        "question":  "Finish this phrase: I've never been what?",
        "answers":  [
                        {
                            "text":  "out of the u.s.",
                            "points":  16
                        },
                        {
                            "text":  "married",
                            "points":  14
                        },
                        {
                            "text":  "a parent/preggers",
                            "points":  10
                        },
                        {
                            "text":  "drunk",
                            "points":  9
                        },
                        {
                            "text":  "fired",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  110586,
        "question":  "Fill in the blank: Johnny ______.",
        "answers":  [
                        {
                            "text":  "johnny appleseed",
                            "points":  15
                        },
                        {
                            "text":  "johnny b. goode",
                            "points":  13
                        },
                        {
                            "text":  "johnny depp",
                            "points":  12
                        },
                        {
                            "text":  "johnny cash",
                            "points":  9
                        },
                        {
                            "text":  "johnnie walker",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  110587,
        "question":  "Give me a word starting with the letter S that you'd use to describe your personality.",
        "answers":  [
                        {
                            "text":  "smart",
                            "points":  20
                        },
                        {
                            "text":  "sweet",
                            "points":  12
                        },
                        {
                            "text":  "sarcastic",
                            "points":  10
                        },
                        {
                            "text":  "sassy",
                            "points":  8
                        },
                        {
                            "text":  "silly",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  110588,
        "question":  "Name a comedian who makes a lot of money for being funny.",
        "answers":  [
                        {
                            "text":  "kevin hart",
                            "points":  16
                        },
                        {
                            "text":  "steve harvey",
                            "points":  16
                        },
                        {
                            "text":  "jerry seinfeld",
                            "points":  13
                        },
                        {
                            "text":  "jeff dunham",
                            "points":  6
                        },
                        {
                            "text":  "chris rock",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  110589,
        "question":  "Name one exact word a man never wants to see in a text from his wife.",
        "answers":  [
                        {
                            "text":  "divorce",
                            "points":  30
                        },
                        {
                            "text":  "pregnant",
                            "points":  11
                        },
                        {
                            "text":  "cheated/cheater",
                            "points":  7
                        },
                        {
                            "text":  "accident",
                            "points":  3
                        },
                        {
                            "text":  "sorry",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110590,
        "question":  "Tell me a phrase or expression with the word \"wild\" in it.",
        "answers":  [
                        {
                            "text":  "wild thing",
                            "points":  22
                        },
                        {
                            "text":  "wild child",
                            "points":  9
                        },
                        {
                            "text":  "wild west",
                            "points":  9
                        },
                        {
                            "text":  "wet and wild",
                            "points":  6
                        },
                        {
                            "text":  "wild card",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  110591,
        "question":  "Name something you wish you were an expert at.",
        "answers":  [
                        {
                            "text":  "business/finance",
                            "points":  18
                        },
                        {
                            "text":  "music/singing",
                            "points":  13
                        },
                        {
                            "text":  "painting/art",
                            "points":  8
                        },
                        {
                            "text":  "foreign languages",
                            "points":  6
                        },
                        {
                            "text":  "sports/fitness",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  110592,
        "question":  "Name something the dog sees you licking that it thinks, \"I want me some of that.\"",
        "answers":  [
                        {
                            "text":  "ice cream/popsicle",
                            "points":  90
                        },
                        {
                            "text":  "lollipop/candy",
                            "points":  5
                        },
                        {
                            "text":  "bone",
                            "points":  3
                        },
                        {
                            "text":  "my lover",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110593,
        "question":  "You'd fight with your neighbor if their what keeps getting in your yard?",
        "answers":  [
                        {
                            "text":  "pet/dog's poop",
                            "points":  84
                        },
                        {
                            "text":  "leaves/tree",
                            "points":  10
                        },
                        {
                            "text":  "car",
                            "points":  3
                        },
                        {
                            "text":  "kids",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110594,
        "question":  "Name something that's no good if it's not juicy.",
        "answers":  [
                        {
                            "text":  "fruit/orange",
                            "points":  74
                        },
                        {
                            "text":  "steak/meat",
                            "points":  20
                        },
                        {
                            "text":  "gossip",
                            "points":  3
                        },
                        {
                            "text":  "booty/bod",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110595,
        "question":  "Name the first person a woman would tell if she discovered her husband was cheating.",
        "answers":  [
                        {
                            "text":  "friend",
                            "points":  70
                        },
                        {
                            "text":  "mom",
                            "points":  17
                        },
                        {
                            "text":  "sister",
                            "points":  9
                        },
                        {
                            "text":  "lawyer",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110596,
        "question":  "We asked 100 married men... Fill in the blank: If I were rich, my wife would never have to ______ again.",
        "answers":  [
                        {
                            "text":  "work",
                            "points":  61
                        },
                        {
                            "text":  "clean",
                            "points":  19
                        },
                        {
                            "text":  "cook",
                            "points":  18
                        },
                        {
                            "text":  "cheat",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110597,
        "question":  "Name something many women have been known to lie about the size of.",
        "answers":  [
                        {
                            "text":  "body/clothes",
                            "points":  87
                        },
                        {
                            "text":  "bank account",
                            "points":  6
                        },
                        {
                            "text":  "their man",
                            "points":  4
                        },
                        {
                            "text":  "ring/diamond",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110598,
        "question":  "Name something a kid in a big family has to wait his turn to use.",
        "answers":  [
                        {
                            "text":  "bathroom",
                            "points":  85
                        },
                        {
                            "text":  "car",
                            "points":  8
                        },
                        {
                            "text":  "tv",
                            "points":  4
                        },
                        {
                            "text":  "bike",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110599,
        "question":  "A broke couple asked their wedding guests to bring their own what?",
        "answers":  [
                        {
                            "text":  "booze/drinks",
                            "points":  75
                        },
                        {
                            "text":  "cake/food",
                            "points":  17
                        },
                        {
                            "text":  "cash for the bar",
                            "points":  4
                        },
                        {
                            "text":  "chairs",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110600,
        "question":  "Tell me something a couple does in public that shows you they like each other.",
        "answers":  [
                        {
                            "text":  "hold hands/each other",
                            "points":  69
                        },
                        {
                            "text":  "kiss",
                            "points":  26
                        },
                        {
                            "text":  "smile",
                            "points":  2
                        },
                        {
                            "text":  "eat/share food",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110601,
        "question":  "Name a job that requires wearing a white coat.",
        "answers":  [
                        {
                            "text":  "doc/dentist",
                            "points":  69
                        },
                        {
                            "text":  "lab tech/scientist",
                            "points":  17
                        },
                        {
                            "text":  "pharmacist",
                            "points":  11
                        },
                        {
                            "text":  "butcher",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110602,
        "question":  "Name something that gets put on ice.",
        "answers":  [
                        {
                            "text":  "drinks/champagne",
                            "points":  68
                        },
                        {
                            "text":  "fish/food",
                            "points":  15
                        },
                        {
                            "text":  "bodies/parts/organs",
                            "points":  14
                        },
                        {
                            "text":  "ice skaters",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110603,
        "question":  "When the zoo animals have a pool party, name an animal that might empty the pool when it jumps in.",
        "answers":  [
                        {
                            "text":  "elephant",
                            "points":  66
                        },
                        {
                            "text":  "hippo",
                            "points":  22
                        },
                        {
                            "text":  "rhino",
                            "points":  9
                        },
                        {
                            "text":  "hungry gator/croc",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110604,
        "question":  "Name something that might be wrinkled.",
        "answers":  [
                        {
                            "text":  "clothes/shirt",
                            "points":  64
                        },
                        {
                            "text":  "person/skin",
                            "points":  30
                        },
                        {
                            "text":  "prune/fruit",
                            "points":  3
                        },
                        {
                            "text":  "the sheets",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110605,
        "question":  "Fill in the blank: Pen and ______.",
        "answers":  [
                        {
                            "text":  "pen & paper",
                            "points":  63
                        },
                        {
                            "text":  "pen & pencil",
                            "points":  14
                        },
                        {
                            "text":  "penn & teller",
                            "points":  11
                        },
                        {
                            "text":  "pen & ink",
                            "points":  11
                        }
                    ]
    },
    {
        "id":  110606,
        "question":  "Name an Italian food item that's popular in the U.S.",
        "answers":  [
                        {
                            "text":  "pizza",
                            "points":  48
                        },
                        {
                            "text":  "pasta",
                            "points":  47
                        },
                        {
                            "text":  "meatballs",
                            "points":  2
                        },
                        {
                            "text":  "chicken parm",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110607,
        "question":  "You might swim with dolphins. But you wouldn't want to swim with what sea creature?",
        "answers":  [
                        {
                            "text":  "shark",
                            "points":  91
                        },
                        {
                            "text":  "whale",
                            "points":  3
                        },
                        {
                            "text":  "octopus",
                            "points":  2
                        },
                        {
                            "text":  "eel",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110608,
        "question":  "Fill in the blank: A man has a death wish if he tells his wife, \"Quit ______ing so much.\"",
        "answers":  [
                        {
                            "text":  "yapping/nagging",
                            "points":  85
                        },
                        {
                            "text":  "eating",
                            "points":  6
                        },
                        {
                            "text":  "spending",
                            "points":  5
                        },
                        {
                            "text":  "snoring",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110609,
        "question":  "You should stay inside if it's raining cats and dogs. But you would rush outside if it were raining what?",
        "answers":  [
                        {
                            "text":  "$$$/gold coins",
                            "points":  84
                        },
                        {
                            "text":  "food/coffee",
                            "points":  7
                        },
                        {
                            "text":  "men",
                            "points":  5
                        },
                        {
                            "text":  "beer",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110610,
        "question":  "Name a piece of safety equipment you'd find on a boat.",
        "answers":  [
                        {
                            "text":  "life vest/ring",
                            "points":  82
                        },
                        {
                            "text":  "lifeboat",
                            "points":  7
                        },
                        {
                            "text":  "fire extinguisher",
                            "points":  6
                        },
                        {
                            "text":  "flares/flare gun",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110611,
        "question":  "Name something you hold up to your ear.",
        "answers":  [
                        {
                            "text":  "phone",
                            "points":  76
                        },
                        {
                            "text":  "seashell",
                            "points":  15
                        },
                        {
                            "text":  "music/earbud",
                            "points":  5
                        },
                        {
                            "text":  "earring",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110612,
        "question":  "Name a common first job for teenagers.",
        "answers":  [
                        {
                            "text":  "restaurant worker",
                            "points":  75
                        },
                        {
                            "text":  "babysitter",
                            "points":  16
                        },
                        {
                            "text":  "retail worker",
                            "points":  4
                        },
                        {
                            "text":  "newspaper delivery",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110613,
        "question":  "Name something a single guy spends a lot of money on so women think he's rich.",
        "answers":  [
                        {
                            "text":  "car",
                            "points":  75
                        },
                        {
                            "text":  "clothes",
                            "points":  12
                        },
                        {
                            "text":  "bling/watch",
                            "points":  9
                        },
                        {
                            "text":  "cologne",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110614,
        "question":  "Name something dogs do faster than people.",
        "answers":  [
                        {
                            "text":  "run",
                            "points":  74
                        },
                        {
                            "text":  "eat",
                            "points":  18
                        },
                        {
                            "text":  "pee/poop",
                            "points":  4
                        },
                        {
                            "text":  "dig",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110615,
        "question":  "Fill in the blank: A stripper might say, \"I'm only working here until I can pay for ______.\"",
        "answers":  [
                        {
                            "text":  "school",
                            "points":  74
                        },
                        {
                            "text":  "a house/apt.",
                            "points":  13
                        },
                        {
                            "text":  "a car",
                            "points":  9
                        },
                        {
                            "text":  "a boob job",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110616,
        "question":  "We asked 100 women... It might be worth being a nudist just so you never have to wear what again?",
        "answers":  [
                        {
                            "text":  "bra",
                            "points":  71
                        },
                        {
                            "text":  "thong",
                            "points":  14
                        },
                        {
                            "text":  "pants",
                            "points":  9
                        },
                        {
                            "text":  "work uniform",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110617,
        "question":  "If a man dies during a divorce, what might he request he be buried with him so his wife doesn't get it?",
        "answers":  [
                        {
                            "text":  "money",
                            "points":  68
                        },
                        {
                            "text":  "car/keys",
                            "points":  15
                        },
                        {
                            "text":  "jewelry/watch",
                            "points":  11
                        },
                        {
                            "text":  "his will",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110618,
        "question":  "We asked 100 women... Name something a guy can wear to make himself look smarter.",
        "answers":  [
                        {
                            "text":  "glasses",
                            "points":  67
                        },
                        {
                            "text":  "suit & tie",
                            "points":  27
                        },
                        {
                            "text":  "a shirt/for once",
                            "points":  2
                        },
                        {
                            "text":  "vest",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110619,
        "question":  "Name a musical instrument that you can hide in your underpants.",
        "answers":  [
                        {
                            "text":  "harmonica",
                            "points":  62
                        },
                        {
                            "text":  "flute/piccolo",
                            "points":  20
                        },
                        {
                            "text":  "kazoo",
                            "points":  11
                        },
                        {
                            "text":  "triangle",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  110620,
        "question":  "We asked 100 husbands... Name something your wife spends more money on than you do.",
        "answers":  [
                        {
                            "text":  "clothes/shoes",
                            "points":  61
                        },
                        {
                            "text":  "makeup",
                            "points":  33
                        },
                        {
                            "text":  "food",
                            "points":  2
                        },
                        {
                            "text":  "the kids/grandkids",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110621,
        "question":  "Susan told her cheating husband, \"From now on, you can ask your girlfriend when you want\" what?",
        "answers":  [
                        {
                            "text":  "hanky panky",
                            "points":  60
                        },
                        {
                            "text":  "dinner",
                            "points":  31
                        },
                        {
                            "text":  "money",
                            "points":  5
                        },
                        {
                            "text":  "clean clothes",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110622,
        "question":  "We asked 100 men... If you knew you were going to kiss someone later tonight, tell me something specific you'd do beforehand.",
        "answers":  [
                        {
                            "text":  "brush & floss",
                            "points":  59
                        },
                        {
                            "text":  "take a mint",
                            "points":  21
                        },
                        {
                            "text":  "gargle",
                            "points":  13
                        },
                        {
                            "text":  "shave face",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  110623,
        "question":  "Uh-oh -- you just realized that the beach you're on is a nude beach. What do you do?",
        "answers":  [
                        {
                            "text":  "strip, baby!",
                            "points":  51
                        },
                        {
                            "text":  "leave/go home",
                            "points":  40
                        },
                        {
                            "text":  "stare",
                            "points":  5
                        },
                        {
                            "text":  "stay in water",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110624,
        "question":  "Name something a 4th of July cookie cutter would be shaped like.",
        "answers":  [
                        {
                            "text":  "star",
                            "points":  48
                        },
                        {
                            "text":  "flag",
                            "points":  35
                        },
                        {
                            "text":  "fireworks/rocket",
                            "points":  12
                        },
                        {
                            "text":  "liberty bell",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110625,
        "question":  "Name a type of milk you expect to find in a vegan's fridge.",
        "answers":  [
                        {
                            "text":  "almond milk",
                            "points":  38
                        },
                        {
                            "text":  "soy milk",
                            "points":  36
                        },
                        {
                            "text":  "oat milk",
                            "points":  21
                        },
                        {
                            "text":  "coconut milk",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110626,
        "question":  "Name something a jockey tells his horse he'll give it if they win the race.",
        "answers":  [
                        {
                            "text":  "treat/sugar cube",
                            "points":  87
                        },
                        {
                            "text":  "time off",
                            "points":  5
                        },
                        {
                            "text":  "mate/fine filly",
                            "points":  3
                        },
                        {
                            "text":  "praise/\"good job!\"",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110627,
        "question":  "Fill in the blank: Field of ______.",
        "answers":  [
                        {
                            "text":  "field of dreams",
                            "points":  86
                        },
                        {
                            "text":  "...daisies/flowers",
                            "points":  6
                        },
                        {
                            "text":  "field of corn",
                            "points":  3
                        },
                        {
                            "text":  "field of vision",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110628,
        "question":  "Name the U.S. city that you think has the most expensive apartment rentals.",
        "answers":  [
                        {
                            "text":  "new york city",
                            "points":  83
                        },
                        {
                            "text":  "l.a./bev hills",
                            "points":  7
                        },
                        {
                            "text":  "san francisco",
                            "points":  5
                        },
                        {
                            "text":  "washington, d.c.",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110629,
        "question":  "Who might Mickey Mouse talk about in therapy?",
        "answers":  [
                        {
                            "text":  "minnie mouse",
                            "points":  82
                        },
                        {
                            "text":  "goofy",
                            "points":  7
                        },
                        {
                            "text":  "donald duck",
                            "points":  5
                        },
                        {
                            "text":  "walt disney",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110630,
        "question":  "We asked 100 single people... Who in your life pressures you the most to get married?",
        "answers":  [
                        {
                            "text":  "parents",
                            "points":  80
                        },
                        {
                            "text":  "friends",
                            "points":  6
                        },
                        {
                            "text":  "my kids",
                            "points":  6
                        },
                        {
                            "text":  "my mate",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  110631,
        "question":  "Name something in a nudist colony that has soft seats.",
        "answers":  [
                        {
                            "text":  "chairs/furniture",
                            "points":  73
                        },
                        {
                            "text":  "toilet",
                            "points":  16
                        },
                        {
                            "text":  "the nudists",
                            "points":  5
                        },
                        {
                            "text":  "bikes",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110632,
        "question":  "We asked 100 single people... Name someone who's sick of hearing about your bad dates.",
        "answers":  [
                        {
                            "text":  "bestie",
                            "points":  69
                        },
                        {
                            "text":  "mom/family",
                            "points":  19
                        },
                        {
                            "text":  "coworkers",
                            "points":  5
                        },
                        {
                            "text":  "person i'm dating",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110633,
        "question":  "We asked 100 married women... Name something you do for your family that no one notices until the one time you don't.",
        "answers":  [
                        {
                            "text":  "clean/laundry",
                            "points":  68
                        },
                        {
                            "text":  "cook",
                            "points":  25
                        },
                        {
                            "text":  "give $/pay their bills",
                            "points":  2
                        },
                        {
                            "text":  "grocery shop",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110634,
        "question":  "Name someone kids think comes to the house while they're fast asleep.",
        "answers":  [
                        {
                            "text":  "santa",
                            "points":  68
                        },
                        {
                            "text":  "tooth fairy",
                            "points":  23
                        },
                        {
                            "text":  "boogeyman/monster",
                            "points":  4
                        },
                        {
                            "text":  "easter bunny",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110635,
        "question":  "If Snow White had a yard sale when the dwarfs moved out, you might find she was selling seven what?",
        "answers":  [
                        {
                            "text":  "beds",
                            "points":  65
                        },
                        {
                            "text":  "outfits/hats",
                            "points":  26
                        },
                        {
                            "text":  "pickaxes",
                            "points":  3
                        },
                        {
                            "text":  "dishes/mugs",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110636,
        "question":  "We asked 100 women... If you still used your toy Easy-Bake Oven, what might take a few months to cook?",
        "answers":  [
                        {
                            "text":  "meat/turkey",
                            "points":  63
                        },
                        {
                            "text":  "cake",
                            "points":  25
                        },
                        {
                            "text":  "lasagna",
                            "points":  7
                        },
                        {
                            "text":  "brownies",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110637,
        "question":  "Who might a cowardly guy send in his place to break up with his mate?",
        "answers":  [
                        {
                            "text":  "friend",
                            "points":  63
                        },
                        {
                            "text":  "parent",
                            "points":  23
                        },
                        {
                            "text":  "sibling",
                            "points":  6
                        },
                        {
                            "text":  "his wife/other mate",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  110638,
        "question":  "Name a part of your eyeball.",
        "answers":  [
                        {
                            "text":  "iris",
                            "points":  61
                        },
                        {
                            "text":  "pupil",
                            "points":  13
                        },
                        {
                            "text":  "cornea",
                            "points":  12
                        },
                        {
                            "text":  "retina",
                            "points":  11
                        }
                    ]
    },
    {
        "id":  110639,
        "question":  "Name something the Flintstones had that was made out of rock.",
        "answers":  [
                        {
                            "text":  "house",
                            "points":  51
                        },
                        {
                            "text":  "car/wheels",
                            "points":  34
                        },
                        {
                            "text":  "furniture",
                            "points":  10
                        },
                        {
                            "text":  "tv",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110640,
        "question":  "Name a place a married man might say he hasn't been since he was single.",
        "answers":  [
                        {
                            "text":  "strip joint",
                            "points":  50
                        },
                        {
                            "text":  "pub/club",
                            "points":  42
                        },
                        {
                            "text":  "dating site/app",
                            "points":  3
                        },
                        {
                            "text":  "vegas vacay",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110641,
        "question":  "Name something a mom of triplet babies spends most of her day doing.",
        "answers":  [
                        {
                            "text":  "changing diapers",
                            "points":  48
                        },
                        {
                            "text":  "feeding them",
                            "points":  34
                        },
                        {
                            "text":  "cleaning/laundry",
                            "points":  12
                        },
                        {
                            "text":  "crying/complain'g",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110642,
        "question":  "If you were the last person on Earth, what would you never have to wear again?",
        "answers":  [
                        {
                            "text":  "clothes/heels",
                            "points":  90
                        },
                        {
                            "text":  "deodorant",
                            "points":  2
                        },
                        {
                            "text":  "makeup",
                            "points":  2
                        },
                        {
                            "text":  "a watch",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110643,
        "question":  "Name something a short man does to make himself look taller.",
        "answers":  [
                        {
                            "text":  "heels/lifts",
                            "points":  83
                        },
                        {
                            "text":  "stand up straight",
                            "points":  8
                        },
                        {
                            "text":  "shorter pals/mate",
                            "points":  3
                        },
                        {
                            "text":  "hat/top hat",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110644,
        "question":  "Fill in the blank: London ______.",
        "answers":  [
                        {
                            "text":  "london bridge",
                            "points":  82
                        },
                        {
                            "text":  "london, england",
                            "points":  7
                        },
                        {
                            "text":  "london fog",
                            "points":  5
                        },
                        {
                            "text":  "london calling",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110645,
        "question":  "We asked 100 married women... You use your husband's what in the bathroom because you like it better than yours?",
        "answers":  [
                        {
                            "text":  "razor",
                            "points":  81
                        },
                        {
                            "text":  "deodorant",
                            "points":  6
                        },
                        {
                            "text":  "tweezers",
                            "points":  5
                        },
                        {
                            "text":  "soap",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110646,
        "question":  "Name someone whose job it is to enforce the rules.",
        "answers":  [
                        {
                            "text":  "police",
                            "points":  79
                        },
                        {
                            "text":  "teacher/principal",
                            "points":  8
                        },
                        {
                            "text":  "referee",
                            "points":  7
                        },
                        {
                            "text":  "h.r. rep",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110647,
        "question":  "Name something you punch holes in.",
        "answers":  [
                        {
                            "text":  "paper",
                            "points":  73
                        },
                        {
                            "text":  "wall",
                            "points":  17
                        },
                        {
                            "text":  "story/alibi",
                            "points":  4
                        },
                        {
                            "text":  "donuts/dough",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110648,
        "question":  "Fill in the blank: Matter of ______.",
        "answers":  [
                        {
                            "text":  "matter of fact",
                            "points":  69
                        },
                        {
                            "text":  "matter of time",
                            "points":  19
                        },
                        {
                            "text":  "matter of opinion",
                            "points":  5
                        },
                        {
                            "text":  "...life & death",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110649,
        "question":  "A man might try to pick up a woman by saying \"Your eyes sparkle like\" what?",
        "answers":  [
                        {
                            "text":  "diamonds/jewels",
                            "points":  68
                        },
                        {
                            "text":  "stars/the sun",
                            "points":  22
                        },
                        {
                            "text":  "glitter",
                            "points":  3
                        },
                        {
                            "text":  "champagne",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110650,
        "question":  "Name an occasion when you need a lot of tissues.",
        "answers":  [
                        {
                            "text":  "death/funeral",
                            "points":  66
                        },
                        {
                            "text":  "sick/allergies",
                            "points":  13
                        },
                        {
                            "text":  "wedding",
                            "points":  9
                        },
                        {
                            "text":  "movie/\"the notebook\"",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  110651,
        "question":  "Name a reason someone might say they could never be a stand-up comedian.",
        "answers":  [
                        {
                            "text":  "stage fright/shy",
                            "points":  60
                        },
                        {
                            "text":  "not funny",
                            "points":  32
                        },
                        {
                            "text":  "hecklers",
                            "points":  2
                        },
                        {
                            "text":  "can't stand",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110652,
        "question":  "Name something a lazy guy has next to his couch so he never has to move.",
        "answers":  [
                        {
                            "text":  "fridge/snacks",
                            "points":  50
                        },
                        {
                            "text":  "remote",
                            "points":  40
                        },
                        {
                            "text":  "toilet",
                            "points":  4
                        },
                        {
                            "text":  "wife/a babe",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110653,
        "question":  "If a person's license plate reads \"SNIP,\" name a job they might have.",
        "answers":  [
                        {
                            "text":  "hairdresser",
                            "points":  42
                        },
                        {
                            "text":  "doc/surgeon",
                            "points":  39
                        },
                        {
                            "text":  "vet",
                            "points":  10
                        },
                        {
                            "text":  "tailor",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  110654,
        "question":  "If you pass out at the sight of blood, you'd better not be a what?",
        "answers":  [
                        {
                            "text":  "doctor",
                            "points":  41
                        },
                        {
                            "text":  "nurse",
                            "points":  27
                        },
                        {
                            "text":  "phlebotomist",
                            "points":  23
                        },
                        {
                            "text":  "vampire",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  110655,
        "question":  "We asked 100 married women... If you ever get divorced, where's the first place you'd look for a new man?",
        "answers":  [
                        {
                            "text":  "bar",
                            "points":  37
                        },
                        {
                            "text":  "grocery store",
                            "points":  30
                        },
                        {
                            "text":  "church",
                            "points":  25
                        },
                        {
                            "text":  "vegas",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110656,
        "question":  "Fill in the blank: Robin ______.",
        "answers":  [
                        {
                            "text":  "robin hood",
                            "points":  80
                        },
                        {
                            "text":  "robin redbreast",
                            "points":  9
                        },
                        {
                            "text":  "robin thicke",
                            "points":  3
                        },
                        {
                            "text":  "robin williams",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110657,
        "question":  "Name a kind of performer you'd like to have at your funeral.",
        "answers":  [
                        {
                            "text":  "singer/musician",
                            "points":  78
                        },
                        {
                            "text":  "comedian",
                            "points":  13
                        },
                        {
                            "text":  "juggler",
                            "points":  2
                        },
                        {
                            "text":  "actor",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110658,
        "question":  "Fill in the blank: I seem to get into trouble whenever I open my ______.",
        "answers":  [
                        {
                            "text":  "mouth",
                            "points":  72
                        },
                        {
                            "text":  "wallet",
                            "points":  15
                        },
                        {
                            "text":  "eyes",
                            "points":  5
                        },
                        {
                            "text":  "door",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110659,
        "question":  "Name something in the ocean that's big and scary.",
        "answers":  [
                        {
                            "text":  "shark",
                            "points":  63
                        },
                        {
                            "text":  "whale",
                            "points":  25
                        },
                        {
                            "text":  "octopus",
                            "points":  4
                        },
                        {
                            "text":  "the bottom/abyss",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110660,
        "question":  "Name something psychos in horror movies use as a weapon instead of a gun.",
        "answers":  [
                        {
                            "text":  "machete/knife",
                            "points":  61
                        },
                        {
                            "text":  "chain saw",
                            "points":  16
                        },
                        {
                            "text":  "axe",
                            "points":  15
                        },
                        {
                            "text":  "hammer",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110661,
        "question":  "If you're ever in a nursing home, you hope that it has the very best what?",
        "answers":  [
                        {
                            "text":  "caretakers/staff",
                            "points":  58
                        },
                        {
                            "text":  "food/jell-o",
                            "points":  33
                        },
                        {
                            "text":  "rooms/beds",
                            "points":  2
                        },
                        {
                            "text":  "tv/stations",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110662,
        "question":  "Name something that shines.",
        "answers":  [
                        {
                            "text":  "sun/star",
                            "points":  49
                        },
                        {
                            "text":  "diamond/jewelry",
                            "points":  32
                        },
                        {
                            "text":  "bulb/flashlight",
                            "points":  10
                        },
                        {
                            "text":  "new car",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110663,
        "question":  "Name a U.S. state that is part of New England.",
        "answers":  [
                        {
                            "text":  "maine",
                            "points":  48
                        },
                        {
                            "text":  "massachusetts",
                            "points":  33
                        },
                        {
                            "text":  "vermont",
                            "points":  7
                        },
                        {
                            "text":  "connecticut",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  110664,
        "question":  "While you're at work, where do you daydream about being instead?",
        "answers":  [
                        {
                            "text":  "home/with fam",
                            "points":  47
                        },
                        {
                            "text":  "beach/vacay",
                            "points":  44
                        },
                        {
                            "text":  "theme park",
                            "points":  2
                        },
                        {
                            "text":  "another job",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110665,
        "question":  "Name somewhere you might get in trouble for yawning.",
        "answers":  [
                        {
                            "text":  "church",
                            "points":  40
                        },
                        {
                            "text":  "work/mtg.",
                            "points":  38
                        },
                        {
                            "text":  "school",
                            "points":  13
                        },
                        {
                            "text":  "wedding",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110666,
        "question":  "Which NBA player has the number one selling jersey?",
        "answers":  [
                        {
                            "text":  "lebron james",
                            "points":  40
                        },
                        {
                            "text":  "michael jordan",
                            "points":  35
                        },
                        {
                            "text":  "steph curry",
                            "points":  16
                        },
                        {
                            "text":  "kobe bryant",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110667,
        "question":  "Name a fast food chain that was here before you were born and will be here after you die.",
        "answers":  [
                        {
                            "text":  "mcdonald's",
                            "points":  85
                        },
                        {
                            "text":  "white castle",
                            "points":  4
                        },
                        {
                            "text":  "burger king",
                            "points":  3
                        },
                        {
                            "text":  "kfc",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110668,
        "question":  "Name an office supply you might try to put up your nose when you're bored at work.",
        "answers":  [
                        {
                            "text":  "pen/pencil",
                            "points":  70
                        },
                        {
                            "text":  "eraser",
                            "points":  12
                        },
                        {
                            "text":  "paper clip",
                            "points":  9
                        },
                        {
                            "text":  "post-it/paper",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110669,
        "question":  "Everyone knows that there are seven what?",
        "answers":  [
                        {
                            "text":  "dwarfs",
                            "points":  66
                        },
                        {
                            "text":  "deadly sins",
                            "points":  16
                        },
                        {
                            "text":  "days of the week",
                            "points":  7
                        },
                        {
                            "text":  "wonders of the world",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  110670,
        "question":  "Tell me what you're doing when you tell yourself, \"I'm going to regret this in the morning.\"",
        "answers":  [
                        {
                            "text":  "binge drinking",
                            "points":  64
                        },
                        {
                            "text":  "all-nighter",
                            "points":  17
                        },
                        {
                            "text":  "pigging out",
                            "points":  8
                        },
                        {
                            "text":  "exercising",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  110671,
        "question":  "Name something women talk about at a beauty salon that starts with the letter M.",
        "answers":  [
                        {
                            "text":  "men",
                            "points":  62
                        },
                        {
                            "text":  "makeup/mascara",
                            "points":  13
                        },
                        {
                            "text":  "money",
                            "points":  12
                        },
                        {
                            "text":  "manicures",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  110672,
        "question":  "Name a juice often used as a cocktail mixer.",
        "answers":  [
                        {
                            "text":  "orange juice",
                            "points":  59
                        },
                        {
                            "text":  "cranberry juice",
                            "points":  20
                        },
                        {
                            "text":  "tomato juice",
                            "points":  8
                        },
                        {
                            "text":  "pineapple juice",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  110673,
        "question":  "Name the country that produces the most exciting clothing fashions.",
        "answers":  [
                        {
                            "text":  "france",
                            "points":  55
                        },
                        {
                            "text":  "italy",
                            "points":  25
                        },
                        {
                            "text":  "china",
                            "points":  7
                        },
                        {
                            "text":  "usa",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  110674,
        "question":  "Scientists should create cows that produce what beverage instead of plain old milk?",
        "answers":  [
                        {
                            "text":  "beer/booze",
                            "points":  53
                        },
                        {
                            "text":  "soda",
                            "points":  18
                        },
                        {
                            "text":  "coffee",
                            "points":  17
                        },
                        {
                            "text":  "chocolate milk",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  110675,
        "question":  "Tell me a nickname that someone with red hair might be given.",
        "answers":  [
                        {
                            "text":  "red/big red",
                            "points":  52
                        },
                        {
                            "text":  "ginger",
                            "points":  25
                        },
                        {
                            "text":  "carrot top",
                            "points":  13
                        },
                        {
                            "text":  "rusty",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110676,
        "question":  "We asked 100 married men... If you woke up a single man tomorrow, what's the first thing you'd buy?",
        "answers":  [
                        {
                            "text":  "muscle car",
                            "points":  48
                        },
                        {
                            "text":  "80-inch tv",
                            "points":  21
                        },
                        {
                            "text":  "beer",
                            "points":  13
                        },
                        {
                            "text":  "condoms",
                            "points":  12
                        }
                    ]
    },
    {
        "id":  110677,
        "question":  "Tell me a great place to take a nap.",
        "answers":  [
                        {
                            "text":  "bed, obviously",
                            "points":  44
                        },
                        {
                            "text":  "sofa/recliner",
                            "points":  38
                        },
                        {
                            "text":  "hammock",
                            "points":  8
                        },
                        {
                            "text":  "work",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110678,
        "question":  "Name something you'd hate to find on your wiener at the ballpark.",
        "answers":  [
                        {
                            "text":  "bug/flies",
                            "points":  43
                        },
                        {
                            "text":  "toppings i hate",
                            "points":  28
                        },
                        {
                            "text":  "hair",
                            "points":  18
                        },
                        {
                            "text":  "bird poop",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  110679,
        "question":  "Name an animal that's happier in a tree than on the ground.",
        "answers":  [
                        {
                            "text":  "bird",
                            "points":  32
                        },
                        {
                            "text":  "monkey/ape",
                            "points":  27
                        },
                        {
                            "text":  "squirrel",
                            "points":  27
                        },
                        {
                            "text":  "koala",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  110680,
        "question":  "Bad news: you dropped your contact lens. Worse news: it landed where?",
        "answers":  [
                        {
                            "text":  "toilet/in porta potty",
                            "points":  82
                        },
                        {
                            "text":  "litter box",
                            "points":  6
                        },
                        {
                            "text":  "floor",
                            "points":  3
                        },
                        {
                            "text":  "food/drink",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110681,
        "question":  "Name something associated with Las Vegas.",
        "answers":  [
                        {
                            "text":  "gambling",
                            "points":  81
                        },
                        {
                            "text":  "neon lights",
                            "points":  4
                        },
                        {
                            "text":  "shows",
                            "points":  4
                        },
                        {
                            "text":  "hookers",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110682,
        "question":  "Name a popular Tom Cruise movie.",
        "answers":  [
                        {
                            "text":  "top gun/maverick",
                            "points":  68
                        },
                        {
                            "text":  "mission: impossible",
                            "points":  19
                        },
                        {
                            "text":  "cocktail",
                            "points":  4
                        },
                        {
                            "text":  "a few good men",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110683,
        "question":  "Name a sport that requires more brawn than brains.",
        "answers":  [
                        {
                            "text":  "football",
                            "points":  67
                        },
                        {
                            "text":  "wrestling",
                            "points":  12
                        },
                        {
                            "text":  "boxing",
                            "points":  10
                        },
                        {
                            "text":  "rugby",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110684,
        "question":  "If someone paid for a car with all one-dollar bills, what would you suspect they do for a living?",
        "answers":  [
                        {
                            "text":  "stripper",
                            "points":  65
                        },
                        {
                            "text":  "wait staff",
                            "points":  21
                        },
                        {
                            "text":  "drug dealer",
                            "points":  5
                        },
                        {
                            "text":  "robber",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110685,
        "question":  "Name the scariest thing you see a dentist holding when you're in the chair.",
        "answers":  [
                        {
                            "text":  "drill",
                            "points":  64
                        },
                        {
                            "text":  "syringe",
                            "points":  22
                        },
                        {
                            "text":  "pliers/extractor",
                            "points":  4
                        },
                        {
                            "text":  "the bill",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110686,
        "question":  "Name something that starts with the word \"purple.\"",
        "answers":  [
                        {
                            "text":  "purple rain",
                            "points":  63
                        },
                        {
                            "text":  "purple heart",
                            "points":  12
                        },
                        {
                            "text":  "purple haze",
                            "points":  10
                        },
                        {
                            "text":  "purple people eater",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  110687,
        "question":  "Name something that both dogs and men get excited about when they see it.",
        "answers":  [
                        {
                            "text":  "food/steak",
                            "points":  62
                        },
                        {
                            "text":  "females",
                            "points":  21
                        },
                        {
                            "text":  "ball/toys",
                            "points":  5
                        },
                        {
                            "text":  "cars",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  110688,
        "question":  "The perfect Saturday morning starts with what?",
        "answers":  [
                        {
                            "text":  "coffee/breakfast",
                            "points":  55
                        },
                        {
                            "text":  "sleeping in",
                            "points":  23
                        },
                        {
                            "text":  "cartoons",
                            "points":  9
                        },
                        {
                            "text":  "some good lovin'",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  110689,
        "question":  "Real or fictional, name a famous Willy.",
        "answers":  [
                        {
                            "text":  "willy wonka",
                            "points":  51
                        },
                        {
                            "text":  "willie nelson",
                            "points":  23
                        },
                        {
                            "text":  "willie mays",
                            "points":  14
                        },
                        {
                            "text":  "free willy",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  110690,
        "question":  "Tell me a fish that starts with a T.",
        "answers":  [
                        {
                            "text":  "trout",
                            "points":  51
                        },
                        {
                            "text":  "tuna",
                            "points":  20
                        },
                        {
                            "text":  "tilapia",
                            "points":  16
                        },
                        {
                            "text":  "tarpon",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  110691,
        "question":  "We asked 100 married men... Bad news: your wife ran away. Worse news: she took your what?",
        "answers":  [
                        {
                            "text":  "money/wallet",
                            "points":  47
                        },
                        {
                            "text":  "car/lambo",
                            "points":  41
                        },
                        {
                            "text":  "golf clubs",
                            "points":  3
                        },
                        {
                            "text":  "pet/dog",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110692,
        "question":  "Name a U.S. president who appears on money.",
        "answers":  [
                        {
                            "text":  "george washington",
                            "points":  41
                        },
                        {
                            "text":  "abe lincoln",
                            "points":  29
                        },
                        {
                            "text":  "thomas jefferson",
                            "points":  14
                        },
                        {
                            "text":  "andrew jackson",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  110693,
        "question":  "Name something the Easter Bunny would hate to lose right before Easter.",
        "answers":  [
                        {
                            "text":  "basket",
                            "points":  38
                        },
                        {
                            "text":  "eggs",
                            "points":  36
                        },
                        {
                            "text":  "ear/body part",
                            "points":  16
                        },
                        {
                            "text":  "his way",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110694,
        "question":  "Name something you can tell is new by how it smells.",
        "answers":  [
                        {
                            "text":  "car",
                            "points":  80
                        },
                        {
                            "text":  "clothes/shoes",
                            "points":  6
                        },
                        {
                            "text":  "rose",
                            "points":  3
                        },
                        {
                            "text":  "milk",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110695,
        "question":  "What might a man buy his lover on Valentine's Day that costs more than a dozen roses?",
        "answers":  [
                        {
                            "text":  "jewelry",
                            "points":  73
                        },
                        {
                            "text":  "car",
                            "points":  8
                        },
                        {
                            "text":  "chocolates",
                            "points":  7
                        },
                        {
                            "text":  "13 roses/2 dozen",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110696,
        "question":  "Name a product you see advertised in commercials during a football game.",
        "answers":  [
                        {
                            "text":  "beer",
                            "points":  65
                        },
                        {
                            "text":  "chips",
                            "points":  14
                        },
                        {
                            "text":  "soda",
                            "points":  8
                        },
                        {
                            "text":  "cars/trucks",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  110697,
        "question":  "What might baseball fans ask their favorite player to sign?",
        "answers":  [
                        {
                            "text":  "baseball",
                            "points":  60
                        },
                        {
                            "text":  "jersey",
                            "points":  22
                        },
                        {
                            "text":  "hat",
                            "points":  6
                        },
                        {
                            "text":  "program",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110698,
        "question":  "Name something you turn on to help you relax after work.",
        "answers":  [
                        {
                            "text":  "tv/movie",
                            "points":  55
                        },
                        {
                            "text":  "tunes/radio",
                            "points":  31
                        },
                        {
                            "text":  "phone/app",
                            "points":  3
                        },
                        {
                            "text":  "shower/bath",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110699,
        "question":  "What's the most fashionable city in the world?",
        "answers":  [
                        {
                            "text":  "paris",
                            "points":  50
                        },
                        {
                            "text":  "new york",
                            "points":  29
                        },
                        {
                            "text":  "milan",
                            "points":  8
                        },
                        {
                            "text":  "los angeles",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  110700,
        "question":  "Name something in your life you wish were smaller.",
        "answers":  [
                        {
                            "text":  "me/my gut",
                            "points":  49
                        },
                        {
                            "text":  "debt/bills",
                            "points":  37
                        },
                        {
                            "text":  "workload/to-do list",
                            "points":  3
                        },
                        {
                            "text":  "car/mom van",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110701,
        "question":  "We asked 100 women... Fill in the blank: Mirror, mirror, on the wall, why can't you make my ______ look small?",
        "answers":  [
                        {
                            "text":  "tummy",
                            "points":  48
                        },
                        {
                            "text":  "caboose",
                            "points":  37
                        },
                        {
                            "text":  "wrinkles",
                            "points":  4
                        },
                        {
                            "text":  "feet",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110702,
        "question":  "Name a fruit that starts with the letter C.",
        "answers":  [
                        {
                            "text":  "cherry",
                            "points":  47
                        },
                        {
                            "text":  "cantaloupe",
                            "points":  32
                        },
                        {
                            "text":  "cranberry",
                            "points":  8
                        },
                        {
                            "text":  "coconut",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  110703,
        "question":  "Name the sport with the biggest, sweatiest men.",
        "answers":  [
                        {
                            "text":  "football",
                            "points":  44
                        },
                        {
                            "text":  "wrestling",
                            "points":  39
                        },
                        {
                            "text":  "powerlifting",
                            "points":  5
                        },
                        {
                            "text":  "basketball",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110704,
        "question":  "Name something people hate getting stuck in.",
        "answers":  [
                        {
                            "text":  "traffic",
                            "points":  43
                        },
                        {
                            "text":  "elevators",
                            "points":  41
                        },
                        {
                            "text":  "mud",
                            "points":  6
                        },
                        {
                            "text":  "meetings",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110705,
        "question":  "We asked 100 men... In your nightmares, you're taking a shower with your who?",
        "answers":  [
                        {
                            "text":  "mother-in-law",
                            "points":  43
                        },
                        {
                            "text":  "ex",
                            "points":  25
                        },
                        {
                            "text":  "mother",
                            "points":  15
                        },
                        {
                            "text":  "boss",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  110706,
        "question":  "If a divorced woman decides to start dating again, she might want to buy a new what?",
        "answers":  [
                        {
                            "text":  "dress/clothes",
                            "points":  79
                        },
                        {
                            "text":  "car",
                            "points":  6
                        },
                        {
                            "text":  "bed/waterbed",
                            "points":  3
                        },
                        {
                            "text":  "wig/hairdo",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110707,
        "question":  "Name a famous person who died that some people believe is still alive.",
        "answers":  [
                        {
                            "text":  "elvis",
                            "points":  79
                        },
                        {
                            "text":  "tupac",
                            "points":  6
                        },
                        {
                            "text":  "michael jackson",
                            "points":  3
                        },
                        {
                            "text":  "jfk",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110708,
        "question":  "People usually know how to say what in a foreign language even if they don't speak it?",
        "answers":  [
                        {
                            "text":  "hello/goodbye",
                            "points":  65
                        },
                        {
                            "text":  "yes/no",
                            "points":  13
                        },
                        {
                            "text":  "curse word",
                            "points":  8
                        },
                        {
                            "text":  "bathroom",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  110709,
        "question":  "Name something you might start doing at a party if everyone else were doing it.",
        "answers":  [
                        {
                            "text":  "dancing",
                            "points":  61
                        },
                        {
                            "text":  "drinking",
                            "points":  21
                        },
                        {
                            "text":  "eating",
                            "points":  5
                        },
                        {
                            "text":  "karaoke/singing",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110710,
        "question":  "Name a dangerous creature you might put in your mean boss's desk the day you quit.",
        "answers":  [
                        {
                            "text":  "snake",
                            "points":  59
                        },
                        {
                            "text":  "spider",
                            "points":  19
                        },
                        {
                            "text":  "scorpion",
                            "points":  11
                        },
                        {
                            "text":  "baby croc/gator",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110711,
        "question":  "Give me a country that starts with a C.",
        "answers":  [
                        {
                            "text":  "canada",
                            "points":  54
                        },
                        {
                            "text":  "china",
                            "points":  25
                        },
                        {
                            "text":  "colombia",
                            "points":  6
                        },
                        {
                            "text":  "croatia",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  110712,
        "question":  "Name something on a farm you'd be surprised the farmer could lift up.",
        "answers":  [
                        {
                            "text":  "tractor",
                            "points":  39
                        },
                        {
                            "text":  "cow",
                            "points":  39
                        },
                        {
                            "text":  "bale of hay",
                            "points":  8
                        },
                        {
                            "text":  "horse",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  110713,
        "question":  "Name a sea creature that probably gets all tangled up when it makes love.",
        "answers":  [
                        {
                            "text":  "octopus",
                            "points":  80
                        },
                        {
                            "text":  "jellyfish",
                            "points":  4
                        },
                        {
                            "text":  "eel",
                            "points":  3
                        },
                        {
                            "text":  "squid/the kraken",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110714,
        "question":  "Name the worst sport for a player to be hit in the groin by a ball.",
        "answers":  [
                        {
                            "text":  "baseball",
                            "points":  69
                        },
                        {
                            "text":  "golf",
                            "points":  11
                        },
                        {
                            "text":  "bowling",
                            "points":  6
                        },
                        {
                            "text":  "soccer",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110715,
        "question":  "If all the game show hosts of past and present got into a bar fight, who would win?",
        "answers":  [
                        {
                            "text":  "steve harvey",
                            "points":  68
                        },
                        {
                            "text":  "bob barker",
                            "points":  15
                        },
                        {
                            "text":  "alex trebek",
                            "points":  5
                        },
                        {
                            "text":  "michael strahan",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110716,
        "question":  "Name something people ride that doesn't run on gasoline.",
        "answers":  [
                        {
                            "text":  "bicycle",
                            "points":  68
                        },
                        {
                            "text":  "horse",
                            "points":  15
                        },
                        {
                            "text":  "skateboard",
                            "points":  4
                        },
                        {
                            "text":  "amusement ride",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110717,
        "question":  "If baby animals wore diapers, tell me whose would be the biggest.",
        "answers":  [
                        {
                            "text":  "elephant",
                            "points":  65
                        },
                        {
                            "text":  "hippo",
                            "points":  11
                        },
                        {
                            "text":  "whale",
                            "points":  10
                        },
                        {
                            "text":  "rhino",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110718,
        "question":  "Complete the sentence: I just started a new what?",
        "answers":  [
                        {
                            "text":  "job/career",
                            "points":  60
                        },
                        {
                            "text":  "diet",
                            "points":  20
                        },
                        {
                            "text":  "book",
                            "points":  7
                        },
                        {
                            "text":  "hobby",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110719,
        "question":  "Tell me a type of card.",
        "answers":  [
                        {
                            "text":  "credit card",
                            "points":  58
                        },
                        {
                            "text":  "greeting/b-day",
                            "points":  26
                        },
                        {
                            "text":  "playing card",
                            "points":  4
                        },
                        {
                            "text":  "index card",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110720,
        "question":  "Name something you might guard with your life.",
        "answers":  [
                        {
                            "text":  "family/kid",
                            "points":  57
                        },
                        {
                            "text":  "money",
                            "points":  15
                        },
                        {
                            "text":  "dog/pet",
                            "points":  14
                        },
                        {
                            "text":  "a secret",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110721,
        "question":  "Who do you text when you're feeling lonely at night?",
        "answers":  [
                        {
                            "text":  "bff",
                            "points":  50
                        },
                        {
                            "text":  "my boo",
                            "points":  26
                        },
                        {
                            "text":  "ex",
                            "points":  7
                        },
                        {
                            "text":  "parents",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  110722,
        "question":  "Name something that boring people do on Saturday night.",
        "answers":  [
                        {
                            "text":  "tv/movies",
                            "points":  48
                        },
                        {
                            "text":  "sleep",
                            "points":  26
                        },
                        {
                            "text":  "read",
                            "points":  13
                        },
                        {
                            "text":  "games/bingo",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110723,
        "question":  "Name an instrument you see in a jazz band.",
        "answers":  [
                        {
                            "text":  "saxophone",
                            "points":  43
                        },
                        {
                            "text":  "trumpet",
                            "points":  35
                        },
                        {
                            "text":  "trombone",
                            "points":  7
                        },
                        {
                            "text":  "piano",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  110724,
        "question":  "Fill in the blank: Never tell your mom that a store-bought ______ tastes better than hers.",
        "answers":  [
                        {
                            "text":  "cake",
                            "points":  42
                        },
                        {
                            "text":  "pie",
                            "points":  30
                        },
                        {
                            "text":  "cookie",
                            "points":  10
                        },
                        {
                            "text":  "lasagna/pasta",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  110725,
        "question":  "Give me a U.S. state with the letter Y in it.",
        "answers":  [
                        {
                            "text":  "wyoming",
                            "points":  40
                        },
                        {
                            "text":  "new york",
                            "points":  30
                        },
                        {
                            "text":  "kentucky",
                            "points":  11
                        },
                        {
                            "text":  "maryland",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  110726,
        "question":  "Name a bug you should leave alone because it's here to help us.",
        "answers":  [
                        {
                            "text":  "bee",
                            "points":  38
                        },
                        {
                            "text":  "spider",
                            "points":  30
                        },
                        {
                            "text":  "ladybug",
                            "points":  14
                        },
                        {
                            "text":  "butterfly",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  110727,
        "question":  "Name an expensive food you'd be surprised they served in a prison cafeteria.",
        "answers":  [
                        {
                            "text":  "lobster",
                            "points":  36
                        },
                        {
                            "text":  "steak",
                            "points":  30
                        },
                        {
                            "text":  "caviar",
                            "points":  16
                        },
                        {
                            "text":  "sushi",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  110728,
        "question":  "Name someone who might ask you to bend over.",
        "answers":  [
                        {
                            "text":  "doctor",
                            "points":  67
                        },
                        {
                            "text":  "spouse/mate",
                            "points":  12
                        },
                        {
                            "text":  "yoga/dance teacher",
                            "points":  6
                        },
                        {
                            "text":  "kid/grandkid",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110729,
        "question":  "Name something you'd see at a wild party that starts with the letter B.",
        "answers":  [
                        {
                            "text":  "booze/beer",
                            "points":  61
                        },
                        {
                            "text":  "boobs",
                            "points":  19
                        },
                        {
                            "text":  "bong",
                            "points":  6
                        },
                        {
                            "text":  "butts",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110730,
        "question":  "Name someone a wife makes her husband be nice to whether he likes them or not.",
        "answers":  [
                        {
                            "text":  "her parents",
                            "points":  59
                        },
                        {
                            "text":  "friend",
                            "points":  19
                        },
                        {
                            "text":  "their kid",
                            "points":  6
                        },
                        {
                            "text":  "boss/coworker",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  110731,
        "question":  "A 10-year-old might tell his mom, \"I had a rough day at school -- pour me a double\" what?",
        "answers":  [
                        {
                            "text":  "chocolate milk",
                            "points":  58
                        },
                        {
                            "text":  "soda/root beer",
                            "points":  15
                        },
                        {
                            "text":  "shake/malt",
                            "points":  9
                        },
                        {
                            "text":  "kool-aid",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  110732,
        "question":  "Name someone you'd be surprised to hear curse like a sailor.",
        "answers":  [
                        {
                            "text":  "clergy/sister edna",
                            "points":  51
                        },
                        {
                            "text":  "parent",
                            "points":  21
                        },
                        {
                            "text":  "grandma",
                            "points":  12
                        },
                        {
                            "text":  "teacher",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  110733,
        "question":  "Name something you see a lot of in beer commercials.",
        "answers":  [
                        {
                            "text":  "beer, bars & boozin'",
                            "points":  37
                        },
                        {
                            "text":  "hot peeps",
                            "points":  37
                        },
                        {
                            "text":  "sports",
                            "points":  10
                        },
                        {
                            "text":  "clydesdales/animals",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  110734,
        "question":  "Name something people don't ride on because it makes them nauseous.",
        "answers":  [
                        {
                            "text":  "amusement ride",
                            "points":  72
                        },
                        {
                            "text":  "boat",
                            "points":  10
                        },
                        {
                            "text":  "plane",
                            "points":  3
                        },
                        {
                            "text":  "bus",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110735,
        "question":  "Name an animal that can run faster than an Olympic track star.",
        "answers":  [
                        {
                            "text":  "cheetah",
                            "points":  70
                        },
                        {
                            "text":  "gazelle/antelope",
                            "points":  9
                        },
                        {
                            "text":  "ostrich",
                            "points":  5
                        },
                        {
                            "text":  "jaguar",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110736,
        "question":  "Michael Jackson is indisputably the King of Pop. But who's the Prince of Pop?",
        "answers":  [
                        {
                            "text":  "prince",
                            "points":  68
                        },
                        {
                            "text":  "justin bieber",
                            "points":  10
                        },
                        {
                            "text":  "justin timberlake",
                            "points":  5
                        },
                        {
                            "text":  "usher",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  110737,
        "question":  "You'd happily be stranded on an island if it was filled with what?",
        "answers":  [
                        {
                            "text":  "food/fruit",
                            "points":  61
                        },
                        {
                            "text":  "wine/booze",
                            "points":  10
                        },
                        {
                            "text":  "babes/people",
                            "points":  10
                        },
                        {
                            "text":  "books",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  110738,
        "question":  "Name an event where some people laugh and some people cry.",
        "answers":  [
                        {
                            "text":  "wedding",
                            "points":  55
                        },
                        {
                            "text":  "movie",
                            "points":  14
                        },
                        {
                            "text":  "funeral",
                            "points":  13
                        },
                        {
                            "text":  "comedy show",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  110739,
        "question":  "Name a place you wish you could spend more time.",
        "answers":  [
                        {
                            "text":  "vacay spot/beach",
                            "points":  51
                        },
                        {
                            "text":  "home/bed",
                            "points":  33
                        },
                        {
                            "text":  "the park",
                            "points":  2
                        },
                        {
                            "text":  "the gym",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  110740,
        "question":  "Name a U.S. state with a lot of billionaires.",
        "answers":  [
                        {
                            "text":  "california",
                            "points":  51
                        },
                        {
                            "text":  "new york",
                            "points":  20
                        },
                        {
                            "text":  "florida",
                            "points":  11
                        },
                        {
                            "text":  "connecticut",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  110741,
        "question":  "We asked 100 women... Name something that looks perfect when you take off your glasses.",
        "answers":  [
                        {
                            "text":  "me/my belly",
                            "points":  45
                        },
                        {
                            "text":  "my spouse/men",
                            "points":  21
                        },
                        {
                            "text":  "my house",
                            "points":  15
                        },
                        {
                            "text":  "the sky",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  110742,
        "question":  "Name something a man should perform a sniff test on before wearing it.",
        "answers":  [
                        {
                            "text":  "shirt",
                            "points":  40
                        },
                        {
                            "text":  "skivvies",
                            "points":  32
                        },
                        {
                            "text":  "cologne",
                            "points":  9
                        },
                        {
                            "text":  "socks",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  110743,
        "question":  "Name someone who might tell you you've got some explaining to do.",
        "answers":  [
                        {
                            "text":  "parent",
                            "points":  38
                        },
                        {
                            "text":  "spouse/mate",
                            "points":  36
                        },
                        {
                            "text":  "ricky ricardo",
                            "points":  9
                        },
                        {
                            "text":  "boss",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  110744,
        "question":  "Name an occupation for which a man might wax his chest.",
        "answers":  [
                        {
                            "text":  "stripper/dancer",
                            "points":  34
                        },
                        {
                            "text":  "model",
                            "points":  31
                        },
                        {
                            "text":  "pro swimmer",
                            "points":  13
                        },
                        {
                            "text":  "lifeguard",
                            "points":  10
                        }
                    ]
    },
    {
        "id":  110745,
        "question":  "Name something everyone knows about Winnie-the-Pooh.",
        "answers":  [
                        {
                            "text":  "he loves honey",
                            "points":  69
                        },
                        {
                            "text":  "he's a bear",
                            "points":  8
                        },
                        {
                            "text":  "no pants!",
                            "points":  7
                        },
                        {
                            "text":  "buds w/ tigger",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110746,
        "question":  "Name an animal that's big enough to swallow you whole.",
        "answers":  [
                        {
                            "text":  "whale",
                            "points":  60
                        },
                        {
                            "text":  "gator/croc",
                            "points":  12
                        },
                        {
                            "text":  "anaconda/snake",
                            "points":  8
                        },
                        {
                            "text":  "shark",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  110747,
        "question":  "Fill in the blank: School of ______.",
        "answers":  [
                        {
                            "text":  "school of rock",
                            "points":  42
                        },
                        {
                            "text":  "...hard knocks",
                            "points":  27
                        },
                        {
                            "text":  "school of thought",
                            "points":  10
                        },
                        {
                            "text":  "school of fish",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  110748,
        "question":  "Name any brand of American beer.",
        "answers":  [
                        {
                            "text":  "bud/light",
                            "points":  39
                        },
                        {
                            "text":  "coors",
                            "points":  26
                        },
                        {
                            "text":  "miller",
                            "points":  18
                        },
                        {
                            "text":  "busch",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110749,
        "question":  "Name something you remember buying your very first one of.",
        "answers":  [
                        {
                            "text":  "car",
                            "points":  68
                        },
                        {
                            "text":  "record/cd/song",
                            "points":  8
                        },
                        {
                            "text":  "bra/outfit",
                            "points":  7
                        },
                        {
                            "text":  "home",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110750,
        "question":  "Name a bad state for a nudist to live in because it's too darn cold.",
        "answers":  [
                        {
                            "text":  "alaska",
                            "points":  67
                        },
                        {
                            "text":  "minnesota",
                            "points":  8
                        },
                        {
                            "text":  "colorado",
                            "points":  6
                        },
                        {
                            "text":  "montana",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  110751,
        "question":  "When a pregnant woman shows her baby bump, it's usually the size of what kind of ball?",
        "answers":  [
                        {
                            "text":  "basketball",
                            "points":  64
                        },
                        {
                            "text":  "soccer ball",
                            "points":  9
                        },
                        {
                            "text":  "beach ball",
                            "points":  7
                        },
                        {
                            "text":  "volleyball",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  110752,
        "question":  "Name a place you hear a lot of people swearing.",
        "answers":  [
                        {
                            "text":  "bar/club",
                            "points":  51
                        },
                        {
                            "text":  "sports event",
                            "points":  25
                        },
                        {
                            "text":  "work",
                            "points":  7
                        },
                        {
                            "text":  "casino",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110753,
        "question":  "Name a kind of business that never seems to have enough people working there.",
        "answers":  [
                        {
                            "text":  "eatery/coffee shop",
                            "points":  48
                        },
                        {
                            "text":  "store",
                            "points":  29
                        },
                        {
                            "text":  "hospital",
                            "points":  5
                        },
                        {
                            "text":  "bank",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110754,
        "question":  "Name something you might buy only one of your whole life.",
        "answers":  [
                        {
                            "text":  "house",
                            "points":  48
                        },
                        {
                            "text":  "ring/jewelry",
                            "points":  23
                        },
                        {
                            "text":  "casket/plot",
                            "points":  9
                        },
                        {
                            "text":  "wedding dress",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  110755,
        "question":  "Name somebody who might take a bribe.",
        "answers":  [
                        {
                            "text":  "politician",
                            "points":  48
                        },
                        {
                            "text":  "cop",
                            "points":  21
                        },
                        {
                            "text":  "judge",
                            "points":  11
                        },
                        {
                            "text":  "criminal/mobster",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  110756,
        "question":  "Name a word or phrase that starts with the word \"knock.\"",
        "answers":  [
                        {
                            "text":  "knock, knock/joke",
                            "points":  34
                        },
                        {
                            "text":  "knockout",
                            "points":  30
                        },
                        {
                            "text":  "knock on wood",
                            "points":  16
                        },
                        {
                            "text":  "knockoff",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  110757,
        "question":  "Name something that's hard to eat quietly.",
        "answers":  [
                        {
                            "text":  "chips",
                            "points":  71
                        },
                        {
                            "text":  "popcorn",
                            "points":  5
                        },
                        {
                            "text":  "apples",
                            "points":  5
                        },
                        {
                            "text":  "carrots",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110758,
        "question":  "Name a superhero who might say, \"I'm too sexy for my tights.\"",
        "answers":  [
                        {
                            "text":  "superman",
                            "points":  59
                        },
                        {
                            "text":  "batman",
                            "points":  12
                        },
                        {
                            "text":  "spider-man",
                            "points":  10
                        },
                        {
                            "text":  "deadpool",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110759,
        "question":  "A good man is hard to find. But a bad man can easily be found where?",
        "answers":  [
                        {
                            "text":  "bar/club",
                            "points":  50
                        },
                        {
                            "text":  "prison",
                            "points":  22
                        },
                        {
                            "text":  "strip joint",
                            "points":  7
                        },
                        {
                            "text":  "casino",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  110760,
        "question":  "Name something a woman would not want to invite her ex-husband to.",
        "answers":  [
                        {
                            "text":  "wedding",
                            "points":  68
                        },
                        {
                            "text":  "date/dinner",
                            "points":  7
                        },
                        {
                            "text":  "vacay/honeymoon",
                            "points":  5
                        },
                        {
                            "text":  "bed",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110761,
        "question":  "Name a state a lot of country singers come from.",
        "answers":  [
                        {
                            "text":  "tennessee",
                            "points":  61
                        },
                        {
                            "text":  "texas",
                            "points":  12
                        },
                        {
                            "text":  "kentucky",
                            "points":  6
                        },
                        {
                            "text":  "oklahoma",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  110762,
        "question":  "If you're going camping, don't leave home without your what?",
        "answers":  [
                        {
                            "text":  "tent",
                            "points":  53
                        },
                        {
                            "text":  "flashlight/lantern",
                            "points":  13
                        },
                        {
                            "text":  "matches/lighter",
                            "points":  13
                        },
                        {
                            "text":  "bug spray",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  110763,
        "question":  "Name a famous animated dog.",
        "answers":  [
                        {
                            "text":  "snoopy",
                            "points":  47
                        },
                        {
                            "text":  "scooby-doo",
                            "points":  20
                        },
                        {
                            "text":  "clifford",
                            "points":  9
                        },
                        {
                            "text":  "pluto",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  110764,
        "question":  "Name something that might burst.",
        "answers":  [
                        {
                            "text":  "balloon",
                            "points":  44
                        },
                        {
                            "text":  "bubble",
                            "points":  28
                        },
                        {
                            "text":  "appendix",
                            "points":  6
                        },
                        {
                            "text":  "pipe",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  110765,
        "question":  "Tell me a U.S. city that starts with B.",
        "answers":  [
                        {
                            "text":  "boston",
                            "points":  43
                        },
                        {
                            "text":  "baltimore",
                            "points":  27
                        },
                        {
                            "text":  "buffalo",
                            "points":  8
                        },
                        {
                            "text":  "birmingham",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  110766,
        "question":  "Name something that the fluffier it is, the better.",
        "answers":  [
                        {
                            "text":  "pillow/blankie/bed",
                            "points":  56
                        },
                        {
                            "text":  "cat/critter",
                            "points":  18
                        },
                        {
                            "text":  "frosting",
                            "points":  5
                        },
                        {
                            "text":  "scrambled eggs",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110767,
        "question":  "Tell me somewhere you go when you need peace and quiet.",
        "answers":  [
                        {
                            "text":  "bathroom",
                            "points":  38
                        },
                        {
                            "text":  "bedroom",
                            "points":  30
                        },
                        {
                            "text":  "woods",
                            "points":  9
                        },
                        {
                            "text":  "library",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  110768,
        "question":  "Name a salad dressing that's name reminds you of a vacation spot.",
        "answers":  [
                        {
                            "text":  "hidden valley ranch",
                            "points":  36
                        },
                        {
                            "text":  "thousand island",
                            "points":  35
                        },
                        {
                            "text":  "french",
                            "points":  6
                        },
                        {
                            "text":  "catalina",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  110769,
        "question":  "Name one reason you wouldn't want to be a cow.",
        "answers":  [
                        {
                            "text":  "get milked",
                            "points":  35
                        },
                        {
                            "text":  "killed/eaten",
                            "points":  34
                        },
                        {
                            "text":  "eat grass",
                            "points":  8
                        },
                        {
                            "text":  "i'd be even fatter!",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  110770,
        "question":  "Name a word or phrase that begins with the word \"double.\"",
        "answers":  [
                        {
                            "text":  "double trouble",
                            "points":  64
                        },
                        {
                            "text":  "double jeopardy",
                            "points":  9
                        },
                        {
                            "text":  "doublemint",
                            "points":  5
                        },
                        {
                            "text":  "double down",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110771,
        "question":  "A woman might have hot lips and a cold what?",
        "answers":  [
                        {
                            "text":  "heart",
                            "points":  57
                        },
                        {
                            "text":  "bottom",
                            "points":  14
                        },
                        {
                            "text":  "pair of feet",
                            "points":  6
                        },
                        {
                            "text":  "pair of hands",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  110772,
        "question":  "We asked 100 women... Name a superhero who would make a super husband.",
        "answers":  [
                        {
                            "text":  "superman",
                            "points":  50
                        },
                        {
                            "text":  "batman",
                            "points":  20
                        },
                        {
                            "text":  "thor",
                            "points":  7
                        },
                        {
                            "text":  "hulk",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  110773,
        "question":  "Tell me an animal a lazy guy might look at and think, \"Ah, that's the life.\"",
        "answers":  [
                        {
                            "text":  "sloth",
                            "points":  50
                        },
                        {
                            "text":  "dog",
                            "points":  13
                        },
                        {
                            "text":  "cat",
                            "points":  12
                        },
                        {
                            "text":  "male lion",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  110774,
        "question":  "Name something that's designed to be full of holes.",
        "answers":  [
                        {
                            "text":  "swiss cheese",
                            "points":  49
                        },
                        {
                            "text":  "strainer",
                            "points":  22
                        },
                        {
                            "text":  "net",
                            "points":  6
                        },
                        {
                            "text":  "golf course",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  110775,
        "question":  "Name someone you might say you owe a lot to.",
        "answers":  [
                        {
                            "text":  "parents",
                            "points":  57
                        },
                        {
                            "text":  "bank/lender",
                            "points":  9
                        },
                        {
                            "text":  "spouse/mate",
                            "points":  9
                        },
                        {
                            "text":  "teacher/mentor",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  110776,
        "question":  "Name something you get in trouble for doing at a museum.",
        "answers":  [
                        {
                            "text":  "touching art",
                            "points":  50
                        },
                        {
                            "text":  "talking/being loud",
                            "points":  19
                        },
                        {
                            "text":  "taking pics",
                            "points":  6
                        },
                        {
                            "text":  "stealing",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  110777,
        "question":  "What state might have the most people who smoke pot?",
        "answers":  [
                        {
                            "text":  "california",
                            "points":  46
                        },
                        {
                            "text":  "colorado",
                            "points":  27
                        },
                        {
                            "text":  "new york",
                            "points":  5
                        },
                        {
                            "text":  "oregon",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110778,
        "question":  "If you want to hear people singing badly, look no further than where?",
        "answers":  [
                        {
                            "text":  "karaoke bar",
                            "points":  28
                        },
                        {
                            "text":  "church",
                            "points":  25
                        },
                        {
                            "text":  "shower/home",
                            "points":  22
                        },
                        {
                            "text":  "internet/tiktok",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  110779,
        "question":  "Name the place where you're most likely to get chewed out by someone.",
        "answers":  [
                        {
                            "text":  "work",
                            "points":  63
                        },
                        {
                            "text":  "home",
                            "points":  10
                        },
                        {
                            "text":  "bar",
                            "points":  4
                        },
                        {
                            "text":  "sporting event",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  110780,
        "question":  "Name the candy that you can fit the most pieces in your mouth at once.",
        "answers":  [
                        {
                            "text":  "m&m's",
                            "points":  60
                        },
                        {
                            "text":  "skittles",
                            "points":  10
                        },
                        {
                            "text":  "nerds",
                            "points":  5
                        },
                        {
                            "text":  "reese's pieces",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  110781,
        "question":  "Name a food that looks the same on the way in as it does on the way out.",
        "answers":  [
                        {
                            "text":  "corn",
                            "points":  55
                        },
                        {
                            "text":  "chocolate/pudding",
                            "points":  14
                        },
                        {
                            "text":  "liver/meat",
                            "points":  6
                        },
                        {
                            "text":  "nuts",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  110782,
        "question":  "Name something you haven't done in the snow since you were a kid.",
        "answers":  [
                        {
                            "text":  "snow angel",
                            "points":  53
                        },
                        {
                            "text":  "sled",
                            "points":  14
                        },
                        {
                            "text":  "igloo/fort",
                            "points":  7
                        },
                        {
                            "text":  "ski",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  110783,
        "question":  "Name an occupation that begins with the letter J.",
        "answers":  [
                        {
                            "text":  "janitor",
                            "points":  51
                        },
                        {
                            "text":  "jockey",
                            "points":  13
                        },
                        {
                            "text":  "judge/justice",
                            "points":  11
                        },
                        {
                            "text":  "jailer",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  110784,
        "question":  "Name something that might come in a pouch.",
        "answers":  [
                        {
                            "text":  "tobacco/snuff",
                            "points":  27
                        },
                        {
                            "text":  "kangaroo/a joey",
                            "points":  20
                        },
                        {
                            "text":  "tuna/food",
                            "points":  19
                        },
                        {
                            "text":  "drink/juice",
                            "points":  14
                        }
                    ]
    },
    {
        "id":  110785,
        "question":  "Name something dads always think they can fix.",
        "answers":  [
                        {
                            "text":  "car",
                            "points":  45
                        },
                        {
                            "text":  "plumbing",
                            "points":  22
                        },
                        {
                            "text":  "everything",
                            "points":  7
                        },
                        {
                            "text":  "bicycle",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  110786,
        "question":  "Name something you might ask your best friend to help you get rid of.",
        "answers":  [
                        {
                            "text":  "person/body",
                            "points":  50
                        },
                        {
                            "text":  "old clothes",
                            "points":  17
                        },
                        {
                            "text":  "furniture",
                            "points":  6
                        },
                        {
                            "text":  "zit on my back",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  110787,
        "question":  "Give me a country that starts with S.",
        "answers":  [
                        {
                            "text":  "spain",
                            "points":  42
                        },
                        {
                            "text":  "sweden",
                            "points":  20
                        },
                        {
                            "text":  "switzerland",
                            "points":  10
                        },
                        {
                            "text":  "singapore",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110788,
        "question":  "Fill in the blank: ______ butter.",
        "answers":  [
                        {
                            "text":  "peanut butter",
                            "points":  51
                        },
                        {
                            "text":  "apple butter",
                            "points":  13
                        },
                        {
                            "text":  "nutter butter",
                            "points":  6
                        },
                        {
                            "text":  "bread & butter",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  110789,
        "question":  "Name something every woman would love to have a dozen of.",
        "answers":  [
                        {
                            "text":  "roses",
                            "points":  24
                        },
                        {
                            "text":  "diamonds/jewelry",
                            "points":  24
                        },
                        {
                            "text":  "shoes",
                            "points":  21
                        },
                        {
                            "text":  "maids",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  110790,
        "question":  "Name something you've thought about doing but don't have the nerve to actually do it.",
        "answers":  [
                        {
                            "text":  "skydiving",
                            "points":  48
                        },
                        {
                            "text":  "quit'g job",
                            "points":  10
                        },
                        {
                            "text":  "bungee jumping",
                            "points":  8
                        },
                        {
                            "text":  "cheating",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  110791,
        "question":  "Superman couldn't believe the dry cleaners gave him whose costume by mistake?",
        "answers":  [
                        {
                            "text":  "batman",
                            "points":  41
                        },
                        {
                            "text":  "wonder woman",
                            "points":  15
                        },
                        {
                            "text":  "spider-man",
                            "points":  12
                        },
                        {
                            "text":  "joker",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  110792,
        "question":  "A single woman might not have a man, but name something she has that she loves.",
        "answers":  [
                        {
                            "text":  "pet/cats",
                            "points":  50
                        },
                        {
                            "text":  "vibrator",
                            "points":  9
                        },
                        {
                            "text":  "freedom",
                            "points":  7
                        },
                        {
                            "text":  "career/own money",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  110793,
        "question":  "We asked 100 men... Fill in the blank: I'd love to be known for how great of a ______ I am.",
        "answers":  [
                        {
                            "text":  "person/man",
                            "points":  23
                        },
                        {
                            "text":  "lover",
                            "points":  21
                        },
                        {
                            "text":  "dad",
                            "points":  13
                        },
                        {
                            "text":  "husband",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  110794,
        "question":  "Name an animal a 50-year-old cougar might compare her 25-year-old boyfriend to.",
        "answers":  [
                        {
                            "text":  "tiger",
                            "points":  25
                        },
                        {
                            "text":  "horse/black stallion",
                            "points":  16
                        },
                        {
                            "text":  "lion",
                            "points":  14
                        },
                        {
                            "text":  "puppy/lap dog",
                            "points":  10
                        }
                    ]
    },
    {
        "id":  110795,
        "question":  "You must match exactly... Fill in the blank: ______ patrol.",
        "answers":  [
                        {
                            "text":  "paw patrol",
                            "points":  34
                        },
                        {
                            "text":  "rat patrol",
                            "points":  15
                        },
                        {
                            "text":  "police patrol",
                            "points":  7
                        },
                        {
                            "text":  "ski patrol",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  110796,
        "question":  "Name a kind of weird-looking bird that other birds might make fun of.",
        "answers":  [
                        {
                            "text":  "dodo",
                            "points":  20
                        },
                        {
                            "text":  "ostrich",
                            "points":  19
                        },
                        {
                            "text":  "flamingo",
                            "points":  11
                        },
                        {
                            "text":  "stork",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  110797,
        "question":  "Name something you need that starts with the letter C.",
        "answers":  [
                        {
                            "text":  "cash",
                            "points":  20
                        },
                        {
                            "text":  "car",
                            "points":  19
                        },
                        {
                            "text":  "chocolate/candy",
                            "points":  10
                        },
                        {
                            "text":  "coffee",
                            "points":  7
                        }
                    ]
    }
];
