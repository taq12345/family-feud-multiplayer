import type { SurveyQuestion } from "./questions.js";

// Season 17 set: a separate question set from the main bank in questions.ts.
// Boards from Family Feud season 17, as transcribed at
// https://mstiescott.neocities.org/feud17 (crawled 2026-11-13).
// Ids start at 200001 (each season has its own block of 10,000), so they
// never clash with the main bank (1-8782), AI questions (9000+) or other
// seasons. One-answer boards are left out.
// Not used in gameplay yet.
export const SEASON17_SET = "season17";
export const SEASON17_ID_START = 200001;

export function isSeason17Question(id: number): boolean {
  return id >= SEASON17_ID_START && id < SEASON17_ID_START + 10000;
}

export const season17Questions: SurveyQuestion[] = [
    {
        "id":  200001,
        "question":  "Name something a wedding and a funeral have in common.",
        "answers":  [
                        {
                            "text":  "family/guests",
                            "points":  41
                        },
                        {
                            "text":  "flowers",
                            "points":  15
                        },
                        {
                            "text":  "church/clergy",
                            "points":  12
                        },
                        {
                            "text":  "dressing up",
                            "points":  10
                        },
                        {
                            "text":  "reception/food",
                            "points":  9
                        },
                        {
                            "text":  "ceremony",
                            "points":  8
                        },
                        {
                            "text":  "emotions/tears",
                            "points":  3
                        },
                        {
                            "text":  "music/i will survive",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200002,
        "question":  "We asked 100 married women... Name something you think your husband has hidden around the house somewhere.",
        "answers":  [
                        {
                            "text":  "money",
                            "points":  35
                        },
                        {
                            "text":  "porn/granny porn",
                            "points":  29
                        },
                        {
                            "text":  "cigs/pall malls",
                            "points":  10
                        },
                        {
                            "text":  "dirty clothes",
                            "points":  9
                        },
                        {
                            "text":  "weed",
                            "points":  5
                        },
                        {
                            "text":  "phone #s/of skanks",
                            "points":  5
                        },
                        {
                            "text":  "tools",
                            "points":  4
                        },
                        {
                            "text":  "food/can of spam",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200003,
        "question":  "We asked 100 married women... Give me one word you'd use to describe the last kiss your man gave you.",
        "answers":  [
                        {
                            "text":  "warm",
                            "points":  27
                        },
                        {
                            "text":  "sloppy",
                            "points":  25
                        },
                        {
                            "text":  "wet",
                            "points":  21
                        },
                        {
                            "text":  "quick",
                            "points":  14
                        },
                        {
                            "text":  "sweet",
                            "points":  5
                        },
                        {
                            "text":  "perfect",
                            "points":  4
                        },
                        {
                            "text":  "cold",
                            "points":  2
                        },
                        {
                            "text":  "happy",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200004,
        "question":  "Name a part of your body that might hit you in the face when you're bouncing on a trampoline.",
        "answers":  [
                        {
                            "text":  "my arm",
                            "points":  26
                        },
                        {
                            "text":  "my leg/knee",
                            "points":  26
                        },
                        {
                            "text":  "my milk wagons",
                            "points":  20
                        },
                        {
                            "text":  "my hand/finger",
                            "points":  16
                        },
                        {
                            "text":  "my hair",
                            "points":  4
                        },
                        {
                            "text":  "my belly",
                            "points":  4
                        },
                        {
                            "text":  "my foot",
                            "points":  2
                        },
                        {
                            "text":  "my man apples",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200005,
        "question":  "We asked 100 married men... Name something you've learned not to do if your wife is watching.",
        "answers":  [
                        {
                            "text":  "flirt",
                            "points":  24
                        },
                        {
                            "text":  "eye-bang chicks",
                            "points":  24
                        },
                        {
                            "text":  "pick my nose",
                            "points":  22
                        },
                        {
                            "text":  "be lazy/lie around",
                            "points":  12
                        },
                        {
                            "text":  "make fun of her",
                            "points":  7
                        },
                        {
                            "text":  "scratch my crack",
                            "points":  5
                        },
                        {
                            "text":  "complain",
                            "points":  3
                        },
                        {
                            "text":  "give dirty look",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200006,
        "question":  "Name something a wife tells her hubby he's lucky to have.",
        "answers":  [
                        {
                            "text":  "her for a wife",
                            "points":  81
                        },
                        {
                            "text":  "food/dinner",
                            "points":  4
                        },
                        {
                            "text":  "money",
                            "points":  3
                        },
                        {
                            "text":  "sex/once a month",
                            "points":  3
                        },
                        {
                            "text":  "children",
                            "points":  2
                        },
                        {
                            "text":  "happiness",
                            "points":  2
                        },
                        {
                            "text":  "hair on his head",
                            "points":  2
                        },
                        {
                            "text":  "a job",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200007,
        "question":  "Fill in the blank: A troll can get a supermodel if he's got what?",
        "answers":  [
                        {
                            "text":  "moola!/gold",
                            "points":  66
                        },
                        {
                            "text":  "hot bod/magic wand",
                            "points":  13
                        },
                        {
                            "text":  "personality/charm",
                            "points":  10
                        },
                        {
                            "text":  "brains",
                            "points":  2
                        },
                        {
                            "text":  "fab hair",
                            "points":  2
                        },
                        {
                            "text":  "stilts",
                            "points":  2
                        },
                        {
                            "text":  "nice skin",
                            "points":  2
                        },
                        {
                            "text":  "power, baby!",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200008,
        "question":  "We asked 100 married women... Sometimes your husband acts like his brain is the size of what fruit?",
        "answers":  [
                        {
                            "text":  "grape",
                            "points":  57
                        },
                        {
                            "text":  "plum",
                            "points":  12
                        },
                        {
                            "text":  "raisin",
                            "points":  9
                        },
                        {
                            "text":  "melon/watermelon",
                            "points":  6
                        },
                        {
                            "text":  "cherry",
                            "points":  5
                        },
                        {
                            "text":  "blueberry",
                            "points":  4
                        },
                        {
                            "text":  "apple",
                            "points":  3
                        },
                        {
                            "text":  "kiwi",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200009,
        "question":  "We asked 100 married men... Name an animal your wife sounds like in bed.",
        "answers":  [
                        {
                            "text":  "cat/kitten",
                            "points":  54
                        },
                        {
                            "text":  "baboon/monkey",
                            "points":  11
                        },
                        {
                            "text":  "dog",
                            "points":  8
                        },
                        {
                            "text":  "seal",
                            "points":  7
                        },
                        {
                            "text":  "cow",
                            "points":  6
                        },
                        {
                            "text":  "bear",
                            "points":  5
                        },
                        {
                            "text":  "horse",
                            "points":  5
                        },
                        {
                            "text":  "bird/crow",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200010,
        "question":  "If Santa Claus was having a going out of business sale, tell me something that might be up for sale.",
        "answers":  [
                        {
                            "text":  "sleigh",
                            "points":  44
                        },
                        {
                            "text":  "toys/presents",
                            "points":  18
                        },
                        {
                            "text":  "elves",
                            "points":  16
                        },
                        {
                            "text":  "reindeer/prancer",
                            "points":  9
                        },
                        {
                            "text":  "santa suit/hat",
                            "points":  5
                        },
                        {
                            "text":  "mrs. claus",
                            "points":  3
                        },
                        {
                            "text":  "candy canes",
                            "points":  2
                        },
                        {
                            "text":  "stockings/socks",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200011,
        "question":  "We asked 100 women... What has your man long since forgotten he shouldn't do at the dinner table?",
        "answers":  [
                        {
                            "text":  "burp",
                            "points":  44
                        },
                        {
                            "text":  "slurp",
                            "points":  14
                        },
                        {
                            "text":  "phone call/text",
                            "points":  13
                        },
                        {
                            "text":  "chew w/ mouth open",
                            "points":  11
                        },
                        {
                            "text":  "blow his nose",
                            "points":  6
                        },
                        {
                            "text":  "watch tv",
                            "points":  4
                        },
                        {
                            "text":  "elbows on table",
                            "points":  4
                        },
                        {
                            "text":  "eat bare-chested",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200012,
        "question":  "Name a part of a fish you wouldn't want to find in your fish taco.",
        "answers":  [
                        {
                            "text":  "eyeballs",
                            "points":  37
                        },
                        {
                            "text":  "head/brains",
                            "points":  18
                        },
                        {
                            "text":  "bones",
                            "points":  15
                        },
                        {
                            "text":  "fins/tail fin",
                            "points":  10
                        },
                        {
                            "text":  "scales",
                            "points":  7
                        },
                        {
                            "text":  "pooper",
                            "points":  5
                        },
                        {
                            "text":  "gills",
                            "points":  4
                        },
                        {
                            "text":  "guts",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200013,
        "question":  "We asked 100 married men... Between us, name something your mother-in-law has that's big.",
        "answers":  [
                        {
                            "text":  "her mouth",
                            "points":  36
                        },
                        {
                            "text":  "her heart",
                            "points":  15
                        },
                        {
                            "text":  "attitude/ego",
                            "points":  15
                        },
                        {
                            "text":  "spankable booty",
                            "points":  11
                        },
                        {
                            "text":  "heavenly hooters",
                            "points":  9
                        },
                        {
                            "text":  "her belly",
                            "points":  5
                        },
                        {
                            "text":  "her witch nose",
                            "points":  5
                        },
                        {
                            "text":  "her hair/beehive",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200014,
        "question":  "We asked 100 women... Name a furry animal costume you'd like your man to wear to bed.",
        "answers":  [
                        {
                            "text":  "bear/grizzly",
                            "points":  28
                        },
                        {
                            "text":  "tiger",
                            "points":  24
                        },
                        {
                            "text":  "lion",
                            "points":  14
                        },
                        {
                            "text":  "leopard",
                            "points":  10
                        },
                        {
                            "text":  "monkey/orangutan",
                            "points":  8
                        },
                        {
                            "text":  "fox",
                            "points":  7
                        },
                        {
                            "text":  "dog",
                            "points":  5
                        },
                        {
                            "text":  "koala",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200015,
        "question":  "Name something that would be hard to do if you had a really small tongue.",
        "answers":  [
                        {
                            "text":  "lick/eat",
                            "points":  60
                        },
                        {
                            "text":  "kiss/tonsil hockey",
                            "points":  11
                        },
                        {
                            "text":  "talk/pronounce",
                            "points":  9
                        },
                        {
                            "text":  "whistle",
                            "points":  7
                        },
                        {
                            "text":  "touch nose w/ it",
                            "points":  4
                        },
                        {
                            "text":  "blow bubbles",
                            "points":  3
                        },
                        {
                            "text":  "stick it out",
                            "points":  2
                        },
                        {
                            "text":  "tie a cherry stem",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200016,
        "question":  "Name something to which Steve Harvey owes his good fortune.",
        "answers":  [
                        {
                            "text":  "comedy/big mouth",
                            "points":  41
                        },
                        {
                            "text":  "tv/family feud",
                            "points":  31
                        },
                        {
                            "text":  "his hot face/smile",
                            "points":  9
                        },
                        {
                            "text":  "his pretty voice",
                            "points":  7
                        },
                        {
                            "text":  "luck",
                            "points":  3
                        },
                        {
                            "text":  "god/faith",
                            "points":  3
                        },
                        {
                            "text":  "investing/money",
                            "points":  2
                        },
                        {
                            "text":  "his wife marjorie",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200017,
        "question":  "Name an occupation for which a man greases himself up.",
        "answers":  [
                        {
                            "text":  "mechanic",
                            "points":  34
                        },
                        {
                            "text":  "bodybuilder",
                            "points":  24
                        },
                        {
                            "text":  "wrestler",
                            "points":  17
                        },
                        {
                            "text":  "stripper",
                            "points":  8
                        },
                        {
                            "text":  "proctologist/dr.",
                            "points":  5
                        },
                        {
                            "text":  "model",
                            "points":  4
                        },
                        {
                            "text":  "porn star",
                            "points":  4
                        },
                        {
                            "text":  "human cannonball",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200018,
        "question":  "Fill in the blank: A woman might tell her man, \"I'll shave my legs when you start shaving your\" what?",
        "answers":  [
                        {
                            "text":  "face/beard",
                            "points":  32
                        },
                        {
                            "text":  "back",
                            "points":  22
                        },
                        {
                            "text":  "sascrotch",
                            "points":  19
                        },
                        {
                            "text":  "chest",
                            "points":  7
                        },
                        {
                            "text":  "hairy butt/crack",
                            "points":  7
                        },
                        {
                            "text":  "armpits",
                            "points":  7
                        },
                        {
                            "text":  "head",
                            "points":  2
                        },
                        {
                            "text":  "legs",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200019,
        "question":  "We asked 100 married men... Name something your wife has that's bigger than yours.",
        "answers":  [
                        {
                            "text":  "juicy booty",
                            "points":  19
                        },
                        {
                            "text":  "mouth/voice",
                            "points":  16
                        },
                        {
                            "text":  "frost detectors",
                            "points":  15
                        },
                        {
                            "text":  "closet",
                            "points":  12
                        },
                        {
                            "text":  "ring",
                            "points":  12
                        },
                        {
                            "text":  "bank acct./income",
                            "points":  12
                        },
                        {
                            "text":  "hair",
                            "points":  9
                        },
                        {
                            "text":  "car",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200020,
        "question":  "Name someplace a cheating husband has a romantic encounter with his mistress.",
        "answers":  [
                        {
                            "text":  "hotel/motel",
                            "points":  68
                        },
                        {
                            "text":  "his/her house",
                            "points":  6
                        },
                        {
                            "text":  "bar",
                            "points":  6
                        },
                        {
                            "text":  "movie",
                            "points":  5
                        },
                        {
                            "text":  "restaurant",
                            "points":  4
                        },
                        {
                            "text":  "in the car",
                            "points":  3
                        },
                        {
                            "text":  "las vegas",
                            "points":  3
                        },
                        {
                            "text":  "at work",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200021,
        "question":  "Name something a college kid might buy with the money his parents send him for food.",
        "answers":  [
                        {
                            "text":  "keg/booze",
                            "points":  53
                        },
                        {
                            "text":  "video game/console",
                            "points":  16
                        },
                        {
                            "text":  "pot/drugs",
                            "points":  10
                        },
                        {
                            "text":  "food/ramen noodle",
                            "points":  7
                        },
                        {
                            "text":  "books/magazines",
                            "points":  5
                        },
                        {
                            "text":  "porn",
                            "points":  2
                        },
                        {
                            "text":  "laptop/tablet",
                            "points":  2
                        },
                        {
                            "text":  "new iphone",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200022,
        "question":  "We asked 100 men... Which part of your body gets the most exercise?",
        "answers":  [
                        {
                            "text":  "my legs",
                            "points":  41
                        },
                        {
                            "text":  "my arms",
                            "points":  17
                        },
                        {
                            "text":  "my hands/fingers",
                            "points":  15
                        },
                        {
                            "text":  "my mouth/tongue",
                            "points":  12
                        },
                        {
                            "text":  "mr. bone dangles",
                            "points":  6
                        },
                        {
                            "text":  "my abs/waist",
                            "points":  2
                        },
                        {
                            "text":  "my butt/poop chute",
                            "points":  2
                        },
                        {
                            "text":  "my brain",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200023,
        "question":  "Name something a nude magician might pull a rabbit out of.",
        "answers":  [
                        {
                            "text":  "his hat",
                            "points":  44
                        },
                        {
                            "text":  "his ham flower",
                            "points":  36
                        },
                        {
                            "text":  "his ear",
                            "points":  5
                        },
                        {
                            "text":  "his mouth",
                            "points":  3
                        },
                        {
                            "text":  "his hair",
                            "points":  3
                        },
                        {
                            "text":  "thin air",
                            "points":  2
                        },
                        {
                            "text":  "its cage",
                            "points":  2
                        },
                        {
                            "text":  "a box",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200024,
        "question":  "Name something you might grab hold of during a really great kiss.",
        "answers":  [
                        {
                            "text":  "butt cheeks",
                            "points":  36
                        },
                        {
                            "text":  "hair",
                            "points":  16
                        },
                        {
                            "text":  "her crowd pleasers",
                            "points":  14
                        },
                        {
                            "text":  "face",
                            "points":  13
                        },
                        {
                            "text":  "arms",
                            "points":  8
                        },
                        {
                            "text":  "neck",
                            "points":  5
                        },
                        {
                            "text":  "back of head",
                            "points":  3
                        },
                        {
                            "text":  "hands",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200025,
        "question":  "Give me a word starting with the letter \"H\" that most men love to be called.",
        "answers":  [
                        {
                            "text":  "honey/hon",
                            "points":  35
                        },
                        {
                            "text":  "handsome",
                            "points":  26
                        },
                        {
                            "text":  "hunk",
                            "points":  13
                        },
                        {
                            "text":  "hot",
                            "points":  11
                        },
                        {
                            "text":  "hero",
                            "points":  4
                        },
                        {
                            "text":  "honest",
                            "points":  4
                        },
                        {
                            "text":  "huge",
                            "points":  2
                        },
                        {
                            "text":  "hung",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200026,
        "question":  "Name something you want to do right after a marathon lovemaking session.",
        "answers":  [
                        {
                            "text":  "fall asleep",
                            "points":  34
                        },
                        {
                            "text":  "eat/pork rinds",
                            "points":  14
                        },
                        {
                            "text":  "smoke/cigar",
                            "points":  12
                        },
                        {
                            "text":  "drink/water/booze",
                            "points":  11
                        },
                        {
                            "text":  "cuddle/spoon",
                            "points":  10
                        },
                        {
                            "text":  "bathe/brush teeth",
                            "points":  10
                        },
                        {
                            "text":  "do it again!",
                            "points":  4
                        },
                        {
                            "text":  "pee",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200027,
        "question":  "Name something babies look cute wearing that you'd look silly wearing.",
        "answers":  [
                        {
                            "text":  "bonnet/ducky hat",
                            "points":  31
                        },
                        {
                            "text":  "onesie/romper",
                            "points":  29
                        },
                        {
                            "text":  "bib",
                            "points":  14
                        },
                        {
                            "text":  "diaper",
                            "points":  12
                        },
                        {
                            "text":  "footie pajamas",
                            "points":  3
                        },
                        {
                            "text":  "booties",
                            "points":  3
                        },
                        {
                            "text":  "headband/bow",
                            "points":  3
                        },
                        {
                            "text":  "tutu",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200028,
        "question":  "We asked 100 married women... Name a circus act that reminds you of your man's lovemaking style.",
        "answers":  [
                        {
                            "text":  "trapeze/acrobat",
                            "points":  30
                        },
                        {
                            "text":  "lion tamer",
                            "points":  19
                        },
                        {
                            "text":  "tightrope walker",
                            "points":  16
                        },
                        {
                            "text":  "ringmaster",
                            "points":  11
                        },
                        {
                            "text":  "clown",
                            "points":  11
                        },
                        {
                            "text":  "human cannonball",
                            "points":  5
                        },
                        {
                            "text":  "fire-eater",
                            "points":  3
                        },
                        {
                            "text":  "knife thrower",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200029,
        "question":  "We asked 100 single people... Name a place you go to hoping to find your soul mate.",
        "answers":  [
                        {
                            "text":  "bar/club",
                            "points":  29
                        },
                        {
                            "text":  "church",
                            "points":  25
                        },
                        {
                            "text":  "grocery store",
                            "points":  15
                        },
                        {
                            "text":  "party/bbq",
                            "points":  13
                        },
                        {
                            "text":  "movie theater",
                            "points":  5
                        },
                        {
                            "text":  "restaurant/sizzler",
                            "points":  4
                        },
                        {
                            "text":  "library",
                            "points":  3
                        },
                        {
                            "text":  "park/bushes",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200030,
        "question":  "We asked 100 men... Fill in the blank: Compared to other men, I'm a much better what?",
        "answers":  [
                        {
                            "text":  "lover/sex god",
                            "points":  29
                        },
                        {
                            "text":  "listener",
                            "points":  20
                        },
                        {
                            "text":  "hubby/mate",
                            "points":  14
                        },
                        {
                            "text":  "kisser/tongue sucker",
                            "points":  11
                        },
                        {
                            "text":  "golfer/athlete",
                            "points":  11
                        },
                        {
                            "text":  "gardener",
                            "points":  8
                        },
                        {
                            "text":  "thinker",
                            "points":  2
                        },
                        {
                            "text":  "person/man",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200031,
        "question":  "We asked 100 men... Name a way you try to hide it when you're about to cry.",
        "answers":  [
                        {
                            "text":  "sneeze/cough/\"ahem\"",
                            "points":  28
                        },
                        {
                            "text":  "turn/look away",
                            "points":  22
                        },
                        {
                            "text":  "rub eyes/face",
                            "points":  15
                        },
                        {
                            "text":  "leave/walk away",
                            "points":  14
                        },
                        {
                            "text":  "yawn",
                            "points":  6
                        },
                        {
                            "text":  "eat an onion",
                            "points":  5
                        },
                        {
                            "text":  "hold it all in",
                            "points":  4
                        },
                        {
                            "text":  "bite lip",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200032,
        "question":  "We asked 100 married women... Name something you'd like to know about your husband's ex-girlfriends.",
        "answers":  [
                        {
                            "text":  "good in bed?",
                            "points":  23
                        },
                        {
                            "text":  "why the breakup?",
                            "points":  19
                        },
                        {
                            "text":  "pretty or troll?",
                            "points":  18
                        },
                        {
                            "text":  "body/cup size?",
                            "points":  17
                        },
                        {
                            "text":  "smart or dumb?",
                            "points":  7
                        },
                        {
                            "text":  "nothing at all",
                            "points":  6
                        },
                        {
                            "text":  "still talk?",
                            "points":  5
                        },
                        {
                            "text":  "cheat?/slutty ho?",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200033,
        "question":  "We asked 100 married women... Name something else you wish Viagra made your husband better at.",
        "answers":  [
                        {
                            "text":  "listening",
                            "points":  18
                        },
                        {
                            "text":  "making money",
                            "points":  15
                        },
                        {
                            "text":  "cleaning",
                            "points":  15
                        },
                        {
                            "text":  "repairs/diy",
                            "points":  13
                        },
                        {
                            "text":  "having emotions",
                            "points":  12
                        },
                        {
                            "text":  "romance/kissing",
                            "points":  11
                        },
                        {
                            "text":  "talking",
                            "points":  8
                        },
                        {
                            "text":  "remembering",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  200034,
        "question":  "Name a reason a man might let the woman do all the talking on a first date.",
        "answers":  [
                        {
                            "text":  "shy/nervous",
                            "points":  53
                        },
                        {
                            "text":  "get to know her",
                            "points":  14
                        },
                        {
                            "text":  "bored/no interest",
                            "points":  8
                        },
                        {
                            "text":  "she's hot/wants her",
                            "points":  8
                        },
                        {
                            "text":  "she won't shut up",
                            "points":  4
                        },
                        {
                            "text":  "mute/medical prob.",
                            "points":  4
                        },
                        {
                            "text":  "he has bad breath",
                            "points":  3
                        },
                        {
                            "text":  "he's tired",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200035,
        "question":  "Fill in the blank: Your lover is like really good ice cream because they are what?",
        "answers":  [
                        {
                            "text":  "sweet",
                            "points":  49
                        },
                        {
                            "text":  "smooth",
                            "points":  13
                        },
                        {
                            "text":  "tasty/delish",
                            "points":  10
                        },
                        {
                            "text":  "cold/cool",
                            "points":  9
                        },
                        {
                            "text":  "creamy",
                            "points":  8
                        },
                        {
                            "text":  "soft",
                            "points":  3
                        },
                        {
                            "text":  "fun to lick",
                            "points":  2
                        },
                        {
                            "text":  "melt'g/in my arms",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200036,
        "question":  "We asked 100 men... Fill in the blank: When I get to heaven, I sure hope they have lots of what?",
        "answers":  [
                        {
                            "text":  "hot kinky chicks",
                            "points":  49
                        },
                        {
                            "text":  "food/cheese whiz",
                            "points":  13
                        },
                        {
                            "text":  "sports/fishing",
                            "points":  9
                        },
                        {
                            "text":  "weed/good doobage",
                            "points":  7
                        },
                        {
                            "text":  "my family/friends",
                            "points":  7
                        },
                        {
                            "text":  "guys/bros",
                            "points":  4
                        },
                        {
                            "text":  "beer/booze",
                            "points":  4
                        },
                        {
                            "text":  "t.p./when i poo-poo",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200037,
        "question":  "For her cheating husband's funeral, what might the wife tell the funeral director to skip?",
        "answers":  [
                        {
                            "text":  "eulogy/kind words",
                            "points":  44
                        },
                        {
                            "text":  "\"the whole dang thing\"",
                            "points":  18
                        },
                        {
                            "text":  "viewing/wake",
                            "points":  12
                        },
                        {
                            "text":  "coffin/use trash bag",
                            "points":  7
                        },
                        {
                            "text":  "flowers",
                            "points":  6
                        },
                        {
                            "text":  "dress'g him/pants",
                            "points":  4
                        },
                        {
                            "text":  "embalming him",
                            "points":  3
                        },
                        {
                            "text":  "song/michael bolton",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200038,
        "question":  "When the Jolly Green Giant sneezes, name a vegetable that comes out of his nose.",
        "answers":  [
                        {
                            "text":  "peas",
                            "points":  41
                        },
                        {
                            "text":  "beans/green beans",
                            "points":  19
                        },
                        {
                            "text":  "corn/niblets",
                            "points":  14
                        },
                        {
                            "text":  "broccoli",
                            "points":  7
                        },
                        {
                            "text":  "spinach",
                            "points":  5
                        },
                        {
                            "text":  "asparagus",
                            "points":  5
                        },
                        {
                            "text":  "brussels sprouts",
                            "points":  3
                        },
                        {
                            "text":  "carrots",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200039,
        "question":  "Name a specific place on your body where your mom used to kiss you that she'd better not now.",
        "answers":  [
                        {
                            "text":  "my belly",
                            "points":  38
                        },
                        {
                            "text":  "my lips",
                            "points":  23
                        },
                        {
                            "text":  "my biscuit",
                            "points":  9
                        },
                        {
                            "text":  "my forehead",
                            "points":  9
                        },
                        {
                            "text":  "my cheek",
                            "points":  7
                        },
                        {
                            "text":  "my knee/leg",
                            "points":  5
                        },
                        {
                            "text":  "my foot",
                            "points":  3
                        },
                        {
                            "text":  "my neck",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200040,
        "question":  "We asked 100 married women... Name something you wish your man would not take his shirt off to do.",
        "answers":  [
                        {
                            "text":  "mow/yard work",
                            "points":  38
                        },
                        {
                            "text":  "go swimming",
                            "points":  20
                        },
                        {
                            "text":  "wash the car",
                            "points":  15
                        },
                        {
                            "text":  "cook out",
                            "points":  8
                        },
                        {
                            "text":  "go to the store",
                            "points":  5
                        },
                        {
                            "text":  "drain lizard/poop",
                            "points":  5
                        },
                        {
                            "text":  "boink me",
                            "points":  3
                        },
                        {
                            "text":  "eat",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200041,
        "question":  "We asked 100 men... What would you do if a woman you didn't know pinched your bottom?",
        "answers":  [
                        {
                            "text":  "smile/laugh",
                            "points":  34
                        },
                        {
                            "text":  "pinch/cop a feel",
                            "points":  33
                        },
                        {
                            "text":  "get her number",
                            "points":  13
                        },
                        {
                            "text":  "thank her",
                            "points":  6
                        },
                        {
                            "text":  "blush",
                            "points":  3
                        },
                        {
                            "text":  "turn/stare",
                            "points":  3
                        },
                        {
                            "text":  "why?/how dare you!",
                            "points":  2
                        },
                        {
                            "text":  "tongue kiss her",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200042,
        "question":  "Name something a wife might buy if she suspects her husband's cheating on her.",
        "answers":  [
                        {
                            "text":  "camera/recorder",
                            "points":  31
                        },
                        {
                            "text":  "gun/weapon",
                            "points":  28
                        },
                        {
                            "text":  "lingerie/new duds",
                            "points":  8
                        },
                        {
                            "text":  "gps/track'g device",
                            "points":  7
                        },
                        {
                            "text":  "divorce lawyer",
                            "points":  7
                        },
                        {
                            "text":  "private eye",
                            "points":  7
                        },
                        {
                            "text":  "diamonds/jewelry",
                            "points":  5
                        },
                        {
                            "text":  "condoms/dink wrap",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200043,
        "question":  "Name something a divorced man hopes his ex-wife will do.",
        "answers":  [
                        {
                            "text":  "die/eaten by hyenas",
                            "points":  30
                        },
                        {
                            "text":  "go away/move",
                            "points":  21
                        },
                        {
                            "text":  "remarry/new chump",
                            "points":  16
                        },
                        {
                            "text":  "come back/for booty",
                            "points":  10
                        },
                        {
                            "text":  "no lawyer/alimony",
                            "points":  10
                        },
                        {
                            "text":  "become fat cow",
                            "points":  4
                        },
                        {
                            "text":  "be single forever",
                            "points":  3
                        },
                        {
                            "text":  "share the kids",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200044,
        "question":  "Name a specific gift a little boy might give to his first little girlfriend.",
        "answers":  [
                        {
                            "text":  "flower/dandelion",
                            "points":  29
                        },
                        {
                            "text":  "candy/gum",
                            "points":  28
                        },
                        {
                            "text":  "toy/doll",
                            "points":  15
                        },
                        {
                            "text":  "valentine/card",
                            "points":  7
                        },
                        {
                            "text":  "a frog",
                            "points":  6
                        },
                        {
                            "text":  "bling/pasta bracelet",
                            "points":  6
                        },
                        {
                            "text":  "a kiss",
                            "points":  3
                        },
                        {
                            "text":  "a rock",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200045,
        "question":  "We asked 100 women... Name something specific a man does in the middle of a kiss that would make you push him away.",
        "answers":  [
                        {
                            "text":  "burp",
                            "points":  29
                        },
                        {
                            "text":  "bite/till i bleed",
                            "points":  27
                        },
                        {
                            "text":  "cut the cheese",
                            "points":  13
                        },
                        {
                            "text":  "drool/spit in throat",
                            "points":  12
                        },
                        {
                            "text":  "sneeze/cough",
                            "points":  6
                        },
                        {
                            "text":  "laugh",
                            "points":  4
                        },
                        {
                            "text":  "crazy tongue action",
                            "points":  3
                        },
                        {
                            "text":  "fondle/my hot fanny",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200046,
        "question":  "Name a gift a woman gets from her boss that would make her husband suspicious.",
        "answers":  [
                        {
                            "text":  "clothes/panties",
                            "points":  28
                        },
                        {
                            "text":  "flowers",
                            "points":  23
                        },
                        {
                            "text":  "jewelry/ring",
                            "points":  20
                        },
                        {
                            "text":  "perfume",
                            "points":  14
                        },
                        {
                            "text":  "candy",
                            "points":  4
                        },
                        {
                            "text":  "trip/to belize",
                            "points":  3
                        },
                        {
                            "text":  "cash",
                            "points":  2
                        },
                        {
                            "text":  "vibrator/engraved",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200047,
        "question":  "We asked 100 single men... What might a girl tell you at the end of a date that would ruin the whole evening?",
        "answers":  [
                        {
                            "text":  "married/taken",
                            "points":  28
                        },
                        {
                            "text":  "let's be pals, bro",
                            "points":  19
                        },
                        {
                            "text":  "i dig chicks",
                            "points":  17
                        },
                        {
                            "text":  "don't call me",
                            "points":  12
                        },
                        {
                            "text":  "i'm pregnant",
                            "points":  10
                        },
                        {
                            "text":  "was a guy/yesterday",
                            "points":  4
                        },
                        {
                            "text":  "love you/marry me",
                            "points":  3
                        },
                        {
                            "text":  "have a good night",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200048,
        "question":  "We asked 100 men... If you like big, beautiful women, name a place you might go to find them.",
        "answers":  [
                        {
                            "text":  "buffet/restaurant",
                            "points":  21
                        },
                        {
                            "text":  "weight loss center",
                            "points":  18
                        },
                        {
                            "text":  "grocery/market",
                            "points":  13
                        },
                        {
                            "text":  "sweets/donut shop",
                            "points":  13
                        },
                        {
                            "text":  "bar/club",
                            "points":  12
                        },
                        {
                            "text":  "gym/health club",
                            "points":  9
                        },
                        {
                            "text":  "walmart",
                            "points":  7
                        },
                        {
                            "text":  "strip joint",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200050,
        "question":  "We asked 100 married men... When you're hot to trot, name something you see your wife wearing that's like a cold shower.",
        "answers":  [
                        {
                            "text":  "sweats",
                            "points":  58
                        },
                        {
                            "text":  "flannel/pjs",
                            "points":  12
                        },
                        {
                            "text":  "mom jeans",
                            "points":  7
                        },
                        {
                            "text":  "coveralls/overalls",
                            "points":  5
                        },
                        {
                            "text":  "granny panties",
                            "points":  5
                        },
                        {
                            "text":  "sweater/turtleneck",
                            "points":  4
                        },
                        {
                            "text":  "mud mask",
                            "points":  2
                        },
                        {
                            "text":  "old robe",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200051,
        "question":  "Name something you hope you don't do when airport security pats you down.",
        "answers":  [
                        {
                            "text":  "cut a muffin",
                            "points":  55
                        },
                        {
                            "text":  "giggle/laugh",
                            "points":  15
                        },
                        {
                            "text":  "enjoy it/pitch tent",
                            "points":  10
                        },
                        {
                            "text":  "slap/hit them",
                            "points":  5
                        },
                        {
                            "text":  "flinch/jump",
                            "points":  3
                        },
                        {
                            "text":  "get mad/cuss out",
                            "points":  3
                        },
                        {
                            "text":  "burp",
                            "points":  2
                        },
                        {
                            "text":  "pee/spew poo",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200052,
        "question":  "Name a topic that's just too much information on a first date.",
        "answers":  [
                        {
                            "text":  "sex/love life/exes",
                            "points":  55
                        },
                        {
                            "text":  "toilet/poo schedule",
                            "points":  12
                        },
                        {
                            "text":  "health/venereal wart",
                            "points":  9
                        },
                        {
                            "text":  "family/feuds",
                            "points":  8
                        },
                        {
                            "text":  "money/salary",
                            "points":  4
                        },
                        {
                            "text":  "politics",
                            "points":  3
                        },
                        {
                            "text":  "religion",
                            "points":  2
                        },
                        {
                            "text":  "kids",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200053,
        "question":  "Name someone who calls you at work that you'd be embarrassed to put on speakerphone.",
        "answers":  [
                        {
                            "text":  "overbear'g mom/dad",
                            "points":  53
                        },
                        {
                            "text":  "spouse/horny mate",
                            "points":  19
                        },
                        {
                            "text":  "brat kids",
                            "points":  8
                        },
                        {
                            "text":  "collections/irs",
                            "points":  5
                        },
                        {
                            "text":  "doctor/vd clinic",
                            "points":  3
                        },
                        {
                            "text":  "friend",
                            "points":  3
                        },
                        {
                            "text":  "stripper i met fri.",
                            "points":  2
                        },
                        {
                            "text":  "mistress/lover",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200054,
        "question":  "Name something you do on the couch you should never do while driving.",
        "answers":  [
                        {
                            "text":  "lie down/sleep",
                            "points":  51
                        },
                        {
                            "text":  "text",
                            "points":  19
                        },
                        {
                            "text":  "chug booze",
                            "points":  7
                        },
                        {
                            "text":  "tv/sharknado 3",
                            "points":  5
                        },
                        {
                            "text":  "badger the beaver",
                            "points":  4
                        },
                        {
                            "text":  "talk on phone",
                            "points":  3
                        },
                        {
                            "text":  "read",
                            "points":  3
                        },
                        {
                            "text":  "clip my toenails",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200055,
        "question":  "Name something that squirts water.",
        "answers":  [
                        {
                            "text":  "water gun",
                            "points":  49
                        },
                        {
                            "text":  "hose/fire hose",
                            "points":  31
                        },
                        {
                            "text":  "fountain",
                            "points":  4
                        },
                        {
                            "text":  "bottle",
                            "points":  3
                        },
                        {
                            "text":  "dong/her tulip",
                            "points":  2
                        },
                        {
                            "text":  "sprinkler",
                            "points":  2
                        },
                        {
                            "text":  "whale",
                            "points":  2
                        },
                        {
                            "text":  "shower/faucet",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200056,
        "question":  "Name a kind of ball it might feel like a woman is pushing out when she gives birth.",
        "answers":  [
                        {
                            "text":  "basketball",
                            "points":  49
                        },
                        {
                            "text":  "bowling ball",
                            "points":  17
                        },
                        {
                            "text":  "football",
                            "points":  8
                        },
                        {
                            "text":  "beach ball",
                            "points":  7
                        },
                        {
                            "text":  "soccer ball",
                            "points":  6
                        },
                        {
                            "text":  "medicine ball",
                            "points":  4
                        },
                        {
                            "text":  "dodgeball/kickball",
                            "points":  2
                        },
                        {
                            "text":  "softball",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200057,
        "question":  "Name a reason a woman in a kissing booth would not want to kiss someone in line.",
        "answers":  [
                        {
                            "text":  "he smells/smoker",
                            "points":  47
                        },
                        {
                            "text":  "dude's sick/herpin'",
                            "points":  19
                        },
                        {
                            "text":  "guy's ugly/no teeth",
                            "points":  9
                        },
                        {
                            "text":  "he's dirty/greasy",
                            "points":  6
                        },
                        {
                            "text":  "a relative/her son",
                            "points":  5
                        },
                        {
                            "text":  "he has facial hair",
                            "points":  3
                        },
                        {
                            "text":  "not into chicks",
                            "points":  3
                        },
                        {
                            "text":  "he's her ex",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200058,
        "question":  "Name one of the little romantic things men should remember to do.",
        "answers":  [
                        {
                            "text":  "give flowers/gifts",
                            "points":  41
                        },
                        {
                            "text":  "kiss/on neck",
                            "points":  13
                        },
                        {
                            "text":  "\"love ya, babes\"",
                            "points":  13
                        },
                        {
                            "text":  "open doors",
                            "points":  8
                        },
                        {
                            "text":  "compliment/\"so sexy\"",
                            "points":  6
                        },
                        {
                            "text":  "cook/take to dinner",
                            "points":  5
                        },
                        {
                            "text":  "hold hand/cuddle",
                            "points":  5
                        },
                        {
                            "text":  "remember b-day",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200059,
        "question":  "Even though you're an adult, what might grandma do if you swear in her house?",
        "answers":  [
                        {
                            "text":  "scold/cuss me out",
                            "points":  39
                        },
                        {
                            "text":  "hit me/with spoon",
                            "points":  37
                        },
                        {
                            "text":  "glare/dirty look",
                            "points":  5
                        },
                        {
                            "text":  "laugh",
                            "points":  4
                        },
                        {
                            "text":  "wash mouth w/ soap",
                            "points":  4
                        },
                        {
                            "text":  "cringe",
                            "points":  2
                        },
                        {
                            "text":  "$ for swear jar",
                            "points":  2
                        },
                        {
                            "text":  "cover her ears",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200060,
        "question":  "Name something you wouldn't want to see come up from the drain in the shower.",
        "answers":  [
                        {
                            "text":  "snake/spitting cobra",
                            "points":  38
                        },
                        {
                            "text":  "roachfest/bugs",
                            "points":  20
                        },
                        {
                            "text":  "sewage/butt dumplin'",
                            "points":  17
                        },
                        {
                            "text":  "hair/not mine",
                            "points":  10
                        },
                        {
                            "text":  "rat/rodents",
                            "points":  4
                        },
                        {
                            "text":  "frog",
                            "points":  2
                        },
                        {
                            "text":  "a used condom",
                            "points":  2
                        },
                        {
                            "text":  "dirt/mud",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200061,
        "question":  "As his last request, what might a really cheap guy ask his friends to bring to his funeral?",
        "answers":  [
                        {
                            "text":  "$$$/cover charge",
                            "points":  37
                        },
                        {
                            "text":  "food/coffee",
                            "points":  14
                        },
                        {
                            "text":  "a casket",
                            "points":  14
                        },
                        {
                            "text":  "alcohol/byob",
                            "points":  13
                        },
                        {
                            "text":  "flowers/plastic",
                            "points":  8
                        },
                        {
                            "text":  "a shovel",
                            "points":  3
                        },
                        {
                            "text":  "their own chairs",
                            "points":  3
                        },
                        {
                            "text":  "a suit for him",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200062,
        "question":  "Name a word that rhymes with the word \"gong.\"",
        "answers":  [
                        {
                            "text":  "bong",
                            "points":  35
                        },
                        {
                            "text":  "song",
                            "points":  14
                        },
                        {
                            "text":  "pong",
                            "points":  10
                        },
                        {
                            "text":  "long",
                            "points":  8
                        },
                        {
                            "text":  "thong",
                            "points":  8
                        },
                        {
                            "text":  "dong",
                            "points":  7
                        },
                        {
                            "text":  "kong",
                            "points":  7
                        },
                        {
                            "text":  "wrong",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  200063,
        "question":  "Name a quality Santa Claus has that many women wish their man had.",
        "answers":  [
                        {
                            "text":  "dude's jolly",
                            "points":  33
                        },
                        {
                            "text":  "gives endless gifts",
                            "points":  28
                        },
                        {
                            "text":  "kind/patient",
                            "points":  12
                        },
                        {
                            "text":  "magic/flies around",
                            "points":  9
                        },
                        {
                            "text":  "trendy beard",
                            "points":  7
                        },
                        {
                            "text":  "good listener",
                            "points":  2
                        },
                        {
                            "text":  "fat/cuddly",
                            "points":  2
                        },
                        {
                            "text":  "he lasts all night",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200064,
        "question":  "We asked 100 married men... Fill in the blank: I didn't know my wife was mad at me until she what?",
        "answers":  [
                        {
                            "text":  "stopped talking",
                            "points":  29
                        },
                        {
                            "text":  "yelled/cussed out",
                            "points":  21
                        },
                        {
                            "text":  "told me so",
                            "points":  15
                        },
                        {
                            "text":  "threw me out",
                            "points":  10
                        },
                        {
                            "text":  "left me",
                            "points":  9
                        },
                        {
                            "text":  "slapped me",
                            "points":  4
                        },
                        {
                            "text":  "gave me that look",
                            "points":  4
                        },
                        {
                            "text":  "didn't make dinner",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200065,
        "question":  "What color underwear do you think Steve Harvey's wearing?",
        "answers":  [
                        {
                            "text":  "black",
                            "points":  27
                        },
                        {
                            "text":  "white",
                            "points":  26
                        },
                        {
                            "text":  "red",
                            "points":  12
                        },
                        {
                            "text":  "blue",
                            "points":  10
                        },
                        {
                            "text":  "pink",
                            "points":  9
                        },
                        {
                            "text":  "gray",
                            "points":  5
                        },
                        {
                            "text":  "purple",
                            "points":  3
                        },
                        {
                            "text":  "yellow",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200066,
        "question":  "We asked 100 women... If you owned a male version of Hooters, name something sexy you'd make the waiters wear.",
        "answers":  [
                        {
                            "text":  "g-string/thong",
                            "points":  26
                        },
                        {
                            "text":  "boxers/briefs",
                            "points":  19
                        },
                        {
                            "text":  "speedo/swim trunks",
                            "points":  18
                        },
                        {
                            "text":  "tie/bow tie",
                            "points":  13
                        },
                        {
                            "text":  "tight jeans",
                            "points":  8
                        },
                        {
                            "text":  "chaps/buttless",
                            "points":  5
                        },
                        {
                            "text":  "muscle shirt",
                            "points":  3
                        },
                        {
                            "text":  "cowboy hat",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200067,
        "question":  "We asked 100 married men... Name something of yours you'd hate to discover your wife cut in half.",
        "answers":  [
                        {
                            "text":  "credit card",
                            "points":  24
                        },
                        {
                            "text":  "remote",
                            "points":  23
                        },
                        {
                            "text":  "my weenie",
                            "points":  14
                        },
                        {
                            "text":  "lovemaking sessions",
                            "points":  9
                        },
                        {
                            "text":  "computer",
                            "points":  8
                        },
                        {
                            "text":  "car",
                            "points":  8
                        },
                        {
                            "text":  "fishing rod",
                            "points":  5
                        },
                        {
                            "text":  "my allowance",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200068,
        "question":  "Name something a sneaky dogcatcher might disguise himself as.",
        "answers":  [
                        {
                            "text":  "a fire hydrant",
                            "points":  22
                        },
                        {
                            "text":  "a mailman",
                            "points":  22
                        },
                        {
                            "text":  "a tree/bush",
                            "points":  21
                        },
                        {
                            "text":  "a cat",
                            "points":  15
                        },
                        {
                            "text":  "another dog",
                            "points":  8
                        },
                        {
                            "text":  "a bone",
                            "points":  3
                        },
                        {
                            "text":  "a butcher",
                            "points":  2
                        },
                        {
                            "text":  "food/a steak",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200069,
        "question":  "Name a food a little kid might stick in his belly button for later.",
        "answers":  [
                        {
                            "text":  "candy/gum",
                            "points":  68
                        },
                        {
                            "text":  "cereal/cheerios",
                            "points":  7
                        },
                        {
                            "text":  "raisins",
                            "points":  7
                        },
                        {
                            "text":  "peanut butter",
                            "points":  3
                        },
                        {
                            "text":  "peas",
                            "points":  3
                        },
                        {
                            "text":  "cheetos",
                            "points":  2
                        },
                        {
                            "text":  "cheese/cottage chs.",
                            "points":  2
                        },
                        {
                            "text":  "hot dog",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200070,
        "question":  "Name a reason people pull off onto the shoulder of a highway.",
        "answers":  [
                        {
                            "text":  "flat/change tire",
                            "points":  59
                        },
                        {
                            "text":  "broke down",
                            "points":  12
                        },
                        {
                            "text":  "text/phone call",
                            "points":  7
                        },
                        {
                            "text":  "rest/tired",
                            "points":  4
                        },
                        {
                            "text":  "lost/check map",
                            "points":  4
                        },
                        {
                            "text":  "cops/pulled over",
                            "points":  3
                        },
                        {
                            "text":  "pee/deposit turds",
                            "points":  3
                        },
                        {
                            "text":  "gotta hurl",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200071,
        "question":  "What's the best way for a shy guy to meet women?",
        "answers":  [
                        {
                            "text":  "online/tinder",
                            "points":  53
                        },
                        {
                            "text":  "friend/blind date",
                            "points":  10
                        },
                        {
                            "text":  "bar/liquid courage",
                            "points":  9
                        },
                        {
                            "text":  "church",
                            "points":  8
                        },
                        {
                            "text":  "just smile",
                            "points":  5
                        },
                        {
                            "text":  "through work",
                            "points":  3
                        },
                        {
                            "text":  "join club/sports",
                            "points":  3
                        },
                        {
                            "text":  "talk/compliment",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200072,
        "question":  "If you see a body in the woods, name something you'd do to make sure it's dead and not sleeping.",
        "answers":  [
                        {
                            "text":  "poke/with stick",
                            "points":  50
                        },
                        {
                            "text":  "kick it",
                            "points":  10
                        },
                        {
                            "text":  "check for pulse",
                            "points":  10
                        },
                        {
                            "text":  "hello?/yell",
                            "points":  8
                        },
                        {
                            "text":  "check if breathing",
                            "points":  5
                        },
                        {
                            "text":  "shake it",
                            "points":  4
                        },
                        {
                            "text":  "throw rock/log at it",
                            "points":  4
                        },
                        {
                            "text":  "call 911",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200073,
        "question":  "Name something someone might hide in their freezer.",
        "answers":  [
                        {
                            "text":  "money/cash",
                            "points":  38
                        },
                        {
                            "text":  "food/ice cream",
                            "points":  26
                        },
                        {
                            "text":  "drugs/fat blunt",
                            "points":  8
                        },
                        {
                            "text":  "credit card",
                            "points":  6
                        },
                        {
                            "text":  "body/lover's head",
                            "points":  5
                        },
                        {
                            "text":  "booze",
                            "points":  5
                        },
                        {
                            "text":  "jewelry/diamonds",
                            "points":  4
                        },
                        {
                            "text":  "sex toy/peter pump",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200074,
        "question":  "Name something a male stripper named \"Big Baby\" might have on stage with him.",
        "answers":  [
                        {
                            "text":  "pacifier/binky",
                            "points":  31
                        },
                        {
                            "text":  "big diaper",
                            "points":  23
                        },
                        {
                            "text":  "bottle",
                            "points":  14
                        },
                        {
                            "text":  "rattle",
                            "points":  7
                        },
                        {
                            "text":  "blankie",
                            "points":  6
                        },
                        {
                            "text":  "stuffed animal/doll",
                            "points":  6
                        },
                        {
                            "text":  "bib",
                            "points":  4
                        },
                        {
                            "text":  "crib",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200075,
        "question":  "We asked 100 men... Name something that makes you feel sexy.",
        "answers":  [
                        {
                            "text":  "my lean/muscly bod",
                            "points":  28
                        },
                        {
                            "text":  "clothes/my manties",
                            "points":  18
                        },
                        {
                            "text":  "cologne/brut",
                            "points":  16
                        },
                        {
                            "text":  "attn. from a hottie",
                            "points":  12
                        },
                        {
                            "text":  "sexy haircut",
                            "points":  6
                        },
                        {
                            "text":  "wine/liquid courage",
                            "points":  5
                        },
                        {
                            "text":  "showering",
                            "points":  5
                        },
                        {
                            "text":  "going commando",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200076,
        "question":  "Name something a guest might steal from a wedding.",
        "answers":  [
                        {
                            "text":  "flowers",
                            "points":  27
                        },
                        {
                            "text":  "gift/cash",
                            "points":  15
                        },
                        {
                            "text":  "silverware",
                            "points":  14
                        },
                        {
                            "text":  "cake/food",
                            "points":  12
                        },
                        {
                            "text":  "napkins",
                            "points":  8
                        },
                        {
                            "text":  "bride/person",
                            "points":  6
                        },
                        {
                            "text":  "glass/wine glass",
                            "points":  6
                        },
                        {
                            "text":  "booze",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  200077,
        "question":  "Name something a dog likes to stick his nose in.",
        "answers":  [
                        {
                            "text":  "bowl/food",
                            "points":  24
                        },
                        {
                            "text":  "a savory booty",
                            "points":  23
                        },
                        {
                            "text":  "ground/garden",
                            "points":  12
                        },
                        {
                            "text":  "a pungent pelvis",
                            "points":  11
                        },
                        {
                            "text":  "steamy turd pile",
                            "points":  10
                        },
                        {
                            "text":  "garbage/cans",
                            "points":  10
                        },
                        {
                            "text":  "toilet water",
                            "points":  2
                        },
                        {
                            "text":  "your face",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200078,
        "question":  "Name something a stripper should never wear if she has to go to court.",
        "answers":  [
                        {
                            "text":  "g-string/thong",
                            "points":  38
                        },
                        {
                            "text":  "pasties/tassels",
                            "points":  24
                        },
                        {
                            "text":  "hooker heels/boots",
                            "points":  10
                        },
                        {
                            "text":  "fishnet stockings",
                            "points":  10
                        },
                        {
                            "text":  "birthday suit",
                            "points":  4
                        },
                        {
                            "text":  "sexy dress/skirt",
                            "points":  3
                        },
                        {
                            "text":  "feathers/boa",
                            "points":  2
                        },
                        {
                            "text":  "skimpy top",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200079,
        "question":  "Name something of an ex's that a person might pee on for revenge.",
        "answers":  [
                        {
                            "text":  "clothes/shoes",
                            "points":  37
                        },
                        {
                            "text":  "car/driver's seat",
                            "points":  24
                        },
                        {
                            "text":  "bed/furniture",
                            "points":  16
                        },
                        {
                            "text":  "their toothbrush",
                            "points":  5
                        },
                        {
                            "text":  "their photo",
                            "points":  4
                        },
                        {
                            "text":  "their grave",
                            "points":  3
                        },
                        {
                            "text":  "their porch/house",
                            "points":  2
                        },
                        {
                            "text":  "their body/face",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200080,
        "question":  "What would you do if you ran into your boss at a nude beach?",
        "answers":  [
                        {
                            "text":  "run/leave",
                            "points":  35
                        },
                        {
                            "text":  "laugh/grin",
                            "points":  17
                        },
                        {
                            "text":  "look away/close eyes",
                            "points":  12
                        },
                        {
                            "text":  "hide",
                            "points":  10
                        },
                        {
                            "text":  "hi/'sup?",
                            "points":  8
                        },
                        {
                            "text":  "blush",
                            "points":  5
                        },
                        {
                            "text":  "scream/cry",
                            "points":  3
                        },
                        {
                            "text":  "take a pic of him",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200081,
        "question":  "Name something a food handler should keep his hands out of when he's handling food.",
        "answers":  [
                        {
                            "text":  "pants/sweaty crack",
                            "points":  31
                        },
                        {
                            "text":  "his nose",
                            "points":  22
                        },
                        {
                            "text":  "his mouth",
                            "points":  9
                        },
                        {
                            "text":  "other food/raw meat",
                            "points":  8
                        },
                        {
                            "text":  "garbage/trash can",
                            "points":  7
                        },
                        {
                            "text":  "cash/register",
                            "points":  7
                        },
                        {
                            "text":  "his hair",
                            "points":  6
                        },
                        {
                            "text":  "the toilet",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200082,
        "question":  "Name a part of the body that should never be mentioned in a love song.",
        "answers":  [
                        {
                            "text":  "pretty punani/peter",
                            "points":  25
                        },
                        {
                            "text":  "bean blaster",
                            "points":  21
                        },
                        {
                            "text":  "her perky puppies",
                            "points":  13
                        },
                        {
                            "text":  "arm/pit/elbow",
                            "points":  13
                        },
                        {
                            "text":  "foot/toe/toenail",
                            "points":  11
                        },
                        {
                            "text":  "nose/nostrils",
                            "points":  6
                        },
                        {
                            "text":  "hand/knuckle",
                            "points":  2
                        },
                        {
                            "text":  "belly/fat gut",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200083,
        "question":  "We asked 100 men... Name a part of your body with hair that you've never once cut or trimmed.",
        "answers":  [
                        {
                            "text":  "my penal colony",
                            "points":  22
                        },
                        {
                            "text":  "my arms/pits",
                            "points":  21
                        },
                        {
                            "text":  "my furry buns/crack",
                            "points":  14
                        },
                        {
                            "text":  "my legs",
                            "points":  13
                        },
                        {
                            "text":  "my chest",
                            "points":  8
                        },
                        {
                            "text":  "my eyebrows",
                            "points":  5
                        },
                        {
                            "text":  "my stomach",
                            "points":  5
                        },
                        {
                            "text":  "my ears",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  200084,
        "question":  "Name something a man wears to look sexy that might cause a woman to laugh out loud.",
        "answers":  [
                        {
                            "text":  "speedo",
                            "points":  21
                        },
                        {
                            "text":  "thong/g-string",
                            "points":  20
                        },
                        {
                            "text":  "toupee/wig",
                            "points":  15
                        },
                        {
                            "text":  "tank top/sexy top",
                            "points":  13
                        },
                        {
                            "text":  "tight jeans/pants",
                            "points":  10
                        },
                        {
                            "text":  "mustache/beard",
                            "points":  8
                        },
                        {
                            "text":  "hat/fedora",
                            "points":  3
                        },
                        {
                            "text":  "jewelry/chain",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200085,
        "question":  "Name something a woman finds that gives her a thrill.",
        "answers":  [
                        {
                            "text":  "cash/credit card",
                            "points":  38
                        },
                        {
                            "text":  "a sale/good deal",
                            "points":  14
                        },
                        {
                            "text":  "jewelry",
                            "points":  9
                        },
                        {
                            "text":  "a stud to love",
                            "points":  9
                        },
                        {
                            "text":  "photo/old pic",
                            "points":  7
                        },
                        {
                            "text":  "vibrator/toy",
                            "points":  6
                        },
                        {
                            "text":  "hot dress/clothes",
                            "points":  5
                        },
                        {
                            "text":  "chocolate",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200086,
        "question":  "We asked 100 women... As far as you're concerned, name something that makes a man undateable.",
        "answers":  [
                        {
                            "text":  "smells/bad breath",
                            "points":  34
                        },
                        {
                            "text":  "bad 'tude/pers.",
                            "points":  25
                        },
                        {
                            "text":  "he's married",
                            "points":  14
                        },
                        {
                            "text":  "he drinks",
                            "points":  7
                        },
                        {
                            "text":  "he's ugly/facial hair",
                            "points":  3
                        },
                        {
                            "text":  "he smokes",
                            "points":  3
                        },
                        {
                            "text":  "lies/dishonest",
                            "points":  3
                        },
                        {
                            "text":  "sloppy/clothes",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200087,
        "question":  "If a wife literally makes her husband spend the night in the doghouse, what does he hope the dog doesn't do?",
        "answers":  [
                        {
                            "text":  "pee/drop a deuce",
                            "points":  29
                        },
                        {
                            "text":  "fart/silent-violent",
                            "points":  19
                        },
                        {
                            "text":  "join him/cuddle",
                            "points":  10
                        },
                        {
                            "text":  "bite him",
                            "points":  10
                        },
                        {
                            "text":  "snore",
                            "points":  9
                        },
                        {
                            "text":  "sleep w/ his wife",
                            "points":  6
                        },
                        {
                            "text":  "make love to him",
                            "points":  6
                        },
                        {
                            "text":  "give him fleas",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200088,
        "question":  "We asked 100 men... Name a fruit you'd be surprised your Fruit of the Loom underwear smelled like.",
        "answers":  [
                        {
                            "text":  "bananas",
                            "points":  24
                        },
                        {
                            "text":  "grapes",
                            "points":  14
                        },
                        {
                            "text":  "oranges",
                            "points":  12
                        },
                        {
                            "text":  "apples/sour apple",
                            "points":  11
                        },
                        {
                            "text":  "strawberries",
                            "points":  11
                        },
                        {
                            "text":  "peaches",
                            "points":  9
                        },
                        {
                            "text":  "cherries",
                            "points":  6
                        },
                        {
                            "text":  "pears",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  200089,
        "question":  "If a wife notices her cheating husband's hickey, name something he might say bit him.",
        "answers":  [
                        {
                            "text":  "bug/spider",
                            "points":  44
                        },
                        {
                            "text":  "dog",
                            "points":  23
                        },
                        {
                            "text":  "cat",
                            "points":  7
                        },
                        {
                            "text":  "bat",
                            "points":  6
                        },
                        {
                            "text":  "vacuum cleaner",
                            "points":  5
                        },
                        {
                            "text":  "monkey",
                            "points":  2
                        },
                        {
                            "text":  "raccoon",
                            "points":  2
                        },
                        {
                            "text":  "leech",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200090,
        "question":  "Name something that's half black and half white.",
        "answers":  [
                        {
                            "text":  "zebra",
                            "points":  42
                        },
                        {
                            "text":  "cookie/oreo",
                            "points":  24
                        },
                        {
                            "text":  "newspaper",
                            "points":  8
                        },
                        {
                            "text":  "people",
                            "points":  4
                        },
                        {
                            "text":  "yin-yang symbol",
                            "points":  4
                        },
                        {
                            "text":  "cow",
                            "points":  3
                        },
                        {
                            "text":  "giant panda",
                            "points":  3
                        },
                        {
                            "text":  "piano keyboard",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200091,
        "question":  "Name something you'd never do in public that you do freely at home.",
        "answers":  [
                        {
                            "text":  "chill nude/undies",
                            "points":  30
                        },
                        {
                            "text":  "fart/in a jar",
                            "points":  19
                        },
                        {
                            "text":  "pick nose/eat it",
                            "points":  17
                        },
                        {
                            "text":  "watch tv/housewives",
                            "points":  11
                        },
                        {
                            "text":  "scratch",
                            "points":  4
                        },
                        {
                            "text":  "tickle the tamale",
                            "points":  4
                        },
                        {
                            "text":  "pee/choke a brownie",
                            "points":  3
                        },
                        {
                            "text":  "go commando/no bra",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200092,
        "question":  "Fill in the blank: At the wedding, the bride got so drunk, she kept her bouquet and tossed her what?",
        "answers":  [
                        {
                            "text":  "\"cookies\"/meal up",
                            "points":  28
                        },
                        {
                            "text":  "wedding ring",
                            "points":  12
                        },
                        {
                            "text":  "veil",
                            "points":  10
                        },
                        {
                            "text":  "shoes",
                            "points":  10
                        },
                        {
                            "text":  "bra/panties",
                            "points":  9
                        },
                        {
                            "text":  "garter",
                            "points":  8
                        },
                        {
                            "text":  "drink/glass",
                            "points":  7
                        },
                        {
                            "text":  "groom",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  200093,
        "question":  "Name something a girl should not wear when meeting her boyfriend's parents.",
        "answers":  [
                        {
                            "text":  "skimpy top",
                            "points":  27
                        },
                        {
                            "text":  "tiny skirt/dress",
                            "points":  25
                        },
                        {
                            "text":  "bikini/swimsuit",
                            "points":  15
                        },
                        {
                            "text":  "lingerie/nightie",
                            "points":  9
                        },
                        {
                            "text":  "daisy dukes",
                            "points":  7
                        },
                        {
                            "text":  "piercing/tongue",
                            "points":  4
                        },
                        {
                            "text":  "her birthday suit",
                            "points":  2
                        },
                        {
                            "text":  "whorish makeup",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200094,
        "question":  "We asked 100 single women... Name something you hope a date doesn't do right after you kiss him.",
        "answers":  [
                        {
                            "text":  "wipe his mouth",
                            "points":  26
                        },
                        {
                            "text":  "burp",
                            "points":  19
                        },
                        {
                            "text":  "gag",
                            "points":  14
                        },
                        {
                            "text":  "leave/run away",
                            "points":  12
                        },
                        {
                            "text":  "cough",
                            "points":  7
                        },
                        {
                            "text":  "throw up",
                            "points":  5
                        },
                        {
                            "text":  "cringe",
                            "points":  4
                        },
                        {
                            "text":  "sneeze",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200095,
        "question":  "If you were squeezed really hard, name something that might come shooting out of you.",
        "answers":  [
                        {
                            "text":  "pee/flying turd",
                            "points":  23
                        },
                        {
                            "text":  "juicy fart",
                            "points":  16
                        },
                        {
                            "text":  "barf/blood",
                            "points":  15
                        },
                        {
                            "text":  "blood",
                            "points":  12
                        },
                        {
                            "text":  "spit",
                            "points":  8
                        },
                        {
                            "text":  "air/breath",
                            "points":  7
                        },
                        {
                            "text":  "sounds/cussing",
                            "points":  6
                        },
                        {
                            "text":  "snot",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200096,
        "question":  "We asked 100 women... Name something that, if your husband tells you to get it, you'll tell him to get lost.",
        "answers":  [
                        {
                            "text":  "his meal/dessert",
                            "points":  21
                        },
                        {
                            "text":  "the remote",
                            "points":  18
                        },
                        {
                            "text":  "phone",
                            "points":  11
                        },
                        {
                            "text":  "the door",
                            "points":  11
                        },
                        {
                            "text":  "a beer/beverage",
                            "points":  10
                        },
                        {
                            "text":  "his slippers",
                            "points":  8
                        },
                        {
                            "text":  "his lover/a hooker",
                            "points":  6
                        },
                        {
                            "text":  "sexy lingerie",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  200097,
        "question":  "We asked 100 married men... Admit it -- just once, you'd like to tell your wife that she's what?",
        "answers":  [
                        {
                            "text":  "annoy'g pain in a#$",
                            "points":  20
                        },
                        {
                            "text":  "a heifer",
                            "points":  17
                        },
                        {
                            "text":  "wrong/full of it",
                            "points":  16
                        },
                        {
                            "text":  "an awful cook",
                            "points":  12
                        },
                        {
                            "text":  "bossy",
                            "points":  9
                        },
                        {
                            "text":  "frigid/bad in bed",
                            "points":  7
                        },
                        {
                            "text":  "bat-crap crazy",
                            "points":  5
                        },
                        {
                            "text":  "stupid/brainless",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  200098,
        "question":  "We asked 100 married men... Name something your wife does just like a guy.",
        "answers":  [
                        {
                            "text":  "crop dust",
                            "points":  15
                        },
                        {
                            "text":  "eat",
                            "points":  13
                        },
                        {
                            "text":  "watch tv",
                            "points":  13
                        },
                        {
                            "text":  "belch",
                            "points":  11
                        },
                        {
                            "text":  "play sports",
                            "points":  11
                        },
                        {
                            "text":  "work",
                            "points":  11
                        },
                        {
                            "text":  "exercise/bench 250",
                            "points":  9
                        },
                        {
                            "text":  "drink/keg stand",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  200099,
        "question":  "Name something men love to discuss that starts with the letter \"C.\"",
        "answers":  [
                        {
                            "text":  "cars",
                            "points":  57
                        },
                        {
                            "text":  "chicks",
                            "points":  9
                        },
                        {
                            "text":  "cards",
                            "points":  6
                        },
                        {
                            "text":  "cash",
                            "points":  5
                        },
                        {
                            "text":  "cooking",
                            "points":  4
                        },
                        {
                            "text":  "crushes",
                            "points":  3
                        },
                        {
                            "text":  "coors",
                            "points":  3
                        },
                        {
                            "text":  "crack",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200100,
        "question":  "Name something a man thinks he's so good at that he should be given a Ph.D. in it.",
        "answers":  [
                        {
                            "text":  "paging dr. nookie",
                            "points":  53
                        },
                        {
                            "text":  "fixing/building",
                            "points":  11
                        },
                        {
                            "text":  "understand'g women",
                            "points":  7
                        },
                        {
                            "text":  "driving/directions",
                            "points":  7
                        },
                        {
                            "text":  "sports/frisbee",
                            "points":  3
                        },
                        {
                            "text":  "couch potato-ology",
                            "points":  3
                        },
                        {
                            "text":  "logic/thinking",
                            "points":  3
                        },
                        {
                            "text":  "barbecuing",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200101,
        "question":  "Name a word or phrase a man might use to describe a freeway and a woman.",
        "answers":  [
                        {
                            "text":  "fast",
                            "points":  44
                        },
                        {
                            "text":  "busy",
                            "points":  9
                        },
                        {
                            "text":  "easy",
                            "points":  9
                        },
                        {
                            "text":  "curvy",
                            "points":  8
                        },
                        {
                            "text":  "dangerous",
                            "points":  6
                        },
                        {
                            "text":  "wide",
                            "points":  6
                        },
                        {
                            "text":  "bumpy",
                            "points":  4
                        },
                        {
                            "text":  "highway/to hell",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200102,
        "question":  "Name a specific occupation in which you might have to hurt someone.",
        "answers":  [
                        {
                            "text":  "police officer",
                            "points":  39
                        },
                        {
                            "text":  "boxer",
                            "points":  15
                        },
                        {
                            "text":  "doctor/dentist",
                            "points":  14
                        },
                        {
                            "text":  "wrestler",
                            "points":  6
                        },
                        {
                            "text":  "bodyguard",
                            "points":  5
                        },
                        {
                            "text":  "military",
                            "points":  5
                        },
                        {
                            "text":  "nurse",
                            "points":  3
                        },
                        {
                            "text":  "football player",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200103,
        "question":  "We asked 100 men... Name the first part of a woman you touch to get her in the mood.",
        "answers":  [
                        {
                            "text":  "knockers/nipples",
                            "points":  27
                        },
                        {
                            "text":  "her neck",
                            "points":  20
                        },
                        {
                            "text":  "her creamy caboose",
                            "points":  13
                        },
                        {
                            "text":  "her face/lips",
                            "points":  7
                        },
                        {
                            "text":  "her shoulders",
                            "points":  7
                        },
                        {
                            "text":  "her legs/thighs",
                            "points":  7
                        },
                        {
                            "text":  "her hands/palms",
                            "points":  5
                        },
                        {
                            "text":  "her back",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200104,
        "question":  "Name something you'd hate to find out people put in your brownies.",
        "answers":  [
                        {
                            "text":  "drugs/pot/lsd",
                            "points":  51
                        },
                        {
                            "text":  "poo/manure",
                            "points":  11
                        },
                        {
                            "text":  "hair",
                            "points":  7
                        },
                        {
                            "text":  "nuts/pistachios",
                            "points":  6
                        },
                        {
                            "text":  "laxatives",
                            "points":  4
                        },
                        {
                            "text":  "dirt",
                            "points":  4
                        },
                        {
                            "text":  "poison",
                            "points":  3
                        },
                        {
                            "text":  "fruit/raisins",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200105,
        "question":  "Name a gift that would be insulting if a woman received it from her mother-in-law.",
        "answers":  [
                        {
                            "text":  "cook/self-help book",
                            "points":  41
                        },
                        {
                            "text":  "clothes/xl-sized",
                            "points":  13
                        },
                        {
                            "text":  "cleaning tools",
                            "points":  13
                        },
                        {
                            "text":  "deodorant/soap",
                            "points":  7
                        },
                        {
                            "text":  "sex toys",
                            "points":  6
                        },
                        {
                            "text":  "makeover/boob job",
                            "points":  5
                        },
                        {
                            "text":  "birth control",
                            "points":  2
                        },
                        {
                            "text":  "exercise machine",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200106,
        "question":  "Name something friends e-mail you pictures of that you wish they wouldn't.",
        "answers":  [
                        {
                            "text":  "their ugly kids",
                            "points":  32
                        },
                        {
                            "text":  "animals/roadkill",
                            "points":  24
                        },
                        {
                            "text":  "them/nude & lewd",
                            "points":  13
                        },
                        {
                            "text":  "porn/soviet porn",
                            "points":  6
                        },
                        {
                            "text":  "their food/recipes",
                            "points":  5
                        },
                        {
                            "text":  "their vacation",
                            "points":  3
                        },
                        {
                            "text":  "political memes",
                            "points":  3
                        },
                        {
                            "text":  "their poop",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200107,
        "question":  "Fill in the blank: A guy knows he's had too much to drink when he tries to pick up his ________.",
        "answers":  [
                        {
                            "text":  "sister",
                            "points":  28
                        },
                        {
                            "text":  "own wife",
                            "points":  22
                        },
                        {
                            "text":  "friend/best bud",
                            "points":  11
                        },
                        {
                            "text":  "mother-in-law",
                            "points":  8
                        },
                        {
                            "text":  "mom",
                            "points":  8
                        },
                        {
                            "text":  "nightmare ex",
                            "points":  5
                        },
                        {
                            "text":  "car/with one hand",
                            "points":  4
                        },
                        {
                            "text":  "boss' wife",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200108,
        "question":  "If you're going to hell anyway, name a food you should bring along for roasting.",
        "answers":  [
                        {
                            "text":  "marshmallow",
                            "points":  28
                        },
                        {
                            "text":  "wiener/sausage",
                            "points":  12
                        },
                        {
                            "text":  "steak",
                            "points":  11
                        },
                        {
                            "text":  "chicken",
                            "points":  11
                        },
                        {
                            "text":  "ribs",
                            "points":  8
                        },
                        {
                            "text":  "whole pig",
                            "points":  8
                        },
                        {
                            "text":  "turkey",
                            "points":  8
                        },
                        {
                            "text":  "nuts/chestnuts",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200109,
        "question":  "Fill in the blank: After the champagne bottle exploded, the cork got stuck in my what?",
        "answers":  [
                        {
                            "text":  "ceiling",
                            "points":  19
                        },
                        {
                            "text":  "mouth/throat",
                            "points":  18
                        },
                        {
                            "text":  "hair",
                            "points":  14
                        },
                        {
                            "text":  "eye",
                            "points":  14
                        },
                        {
                            "text":  "nose",
                            "points":  13
                        },
                        {
                            "text":  "ear",
                            "points":  5
                        },
                        {
                            "text":  "bra/gland canyon",
                            "points":  3
                        },
                        {
                            "text":  "corn chute/butt",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200110,
        "question":  "Name something you might throw at a waiter if you couldn't get his attention.",
        "answers":  [
                        {
                            "text":  "napkin",
                            "points":  44
                        },
                        {
                            "text":  "knife/spoon/fork",
                            "points":  10
                        },
                        {
                            "text":  "bread/peas/food",
                            "points":  9
                        },
                        {
                            "text":  "water/glass",
                            "points":  7
                        },
                        {
                            "text":  "menu",
                            "points":  6
                        },
                        {
                            "text":  "money/change",
                            "points":  5
                        },
                        {
                            "text":  "words/cuss-a-thon",
                            "points":  4
                        },
                        {
                            "text":  "the stink eye",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200111,
        "question":  "Good or bad, name something a man gives a woman to remember him by.",
        "answers":  [
                        {
                            "text":  "ring/jewelry",
                            "points":  42
                        },
                        {
                            "text":  "flowers",
                            "points":  9
                        },
                        {
                            "text":  "a hickey",
                            "points":  7
                        },
                        {
                            "text":  "a pic/his 8 x 10",
                            "points":  7
                        },
                        {
                            "text":  "his duds/ripe undies",
                            "points":  7
                        },
                        {
                            "text":  "the clap/an std",
                            "points":  6
                        },
                        {
                            "text":  "a baby",
                            "points":  6
                        },
                        {
                            "text":  "a kiss/his tongue",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200112,
        "question":  "We asked 100 men... Name something you wish you could take with you to heaven when you die.",
        "answers":  [
                        {
                            "text":  "my dog/pets",
                            "points":  30
                        },
                        {
                            "text":  "my cell phone",
                            "points":  14
                        },
                        {
                            "text":  "my wife/family",
                            "points":  12
                        },
                        {
                            "text":  "my car",
                            "points":  11
                        },
                        {
                            "text":  "my ultra hdtv",
                            "points":  9
                        },
                        {
                            "text":  "beer",
                            "points":  5
                        },
                        {
                            "text":  "my buds/broskis",
                            "points":  4
                        },
                        {
                            "text":  "video games",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200113,
        "question":  "We asked 100 single women... Name something you buy in a hardware store that reminds you of your love life.",
        "answers":  [
                        {
                            "text":  "screwdriver",
                            "points":  24
                        },
                        {
                            "text":  "hammer",
                            "points":  17
                        },
                        {
                            "text":  "nuts",
                            "points":  12
                        },
                        {
                            "text":  "screws",
                            "points":  9
                        },
                        {
                            "text":  "plunger",
                            "points":  8
                        },
                        {
                            "text":  "hose",
                            "points":  7
                        },
                        {
                            "text":  "tape measure",
                            "points":  6
                        },
                        {
                            "text":  "wrench",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  200114,
        "question":  "Name something the bachelor probably doesn't even know about the woman he kisses.",
        "answers":  [
                        {
                            "text":  "past lovers",
                            "points":  21
                        },
                        {
                            "text":  "her name",
                            "points":  19
                        },
                        {
                            "text":  "has stds/the herps",
                            "points":  15
                        },
                        {
                            "text":  "her age",
                            "points":  14
                        },
                        {
                            "text":  "her job",
                            "points":  5
                        },
                        {
                            "text":  "who her family is",
                            "points":  5
                        },
                        {
                            "text":  "she's a man",
                            "points":  5
                        },
                        {
                            "text":  "her dental hygiene",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200115,
        "question":  "Name an urge you should resist.",
        "answers":  [
                        {
                            "text":  "overeat/fried oreos",
                            "points":  41
                        },
                        {
                            "text":  "smoke cigs",
                            "points":  16
                        },
                        {
                            "text":  "a fling/with cousin",
                            "points":  13
                        },
                        {
                            "text":  "drink/jager shot",
                            "points":  4
                        },
                        {
                            "text":  "spend/shop",
                            "points":  4
                        },
                        {
                            "text":  "assault/hit",
                            "points":  4
                        },
                        {
                            "text":  "steal",
                            "points":  3
                        },
                        {
                            "text":  "pee/poo/in prison",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200116,
        "question":  "What would you do if you saw your neighbor mowing their lawn in the nude?",
        "answers":  [
                        {
                            "text":  "laugh/smile",
                            "points":  29
                        },
                        {
                            "text":  "watch/ogle",
                            "points":  16
                        },
                        {
                            "text":  "take pic/video",
                            "points":  15
                        },
                        {
                            "text":  "call cops",
                            "points":  9
                        },
                        {
                            "text":  "not look/close eyes",
                            "points":  6
                        },
                        {
                            "text":  "scream",
                            "points":  4
                        },
                        {
                            "text":  "close my blinds",
                            "points":  4
                        },
                        {
                            "text":  "confront/you ok?",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200117,
        "question":  "We asked 100 men... When a woman says she's going to slip into something more comfortable, name something you don't expect to see her wearing.",
        "answers":  [
                        {
                            "text":  "sweats",
                            "points":  23
                        },
                        {
                            "text":  "pajamas/nightgown",
                            "points":  21
                        },
                        {
                            "text":  "jeans/snow pants",
                            "points":  16
                        },
                        {
                            "text":  "lingerie/corset",
                            "points":  9
                        },
                        {
                            "text":  "heels/boots",
                            "points":  7
                        },
                        {
                            "text":  "coat/parka",
                            "points":  4
                        },
                        {
                            "text":  "suit/pantsuit",
                            "points":  4
                        },
                        {
                            "text":  "a snuggie",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200118,
        "question":  "Name a reason someone might be squirming.",
        "answers":  [
                        {
                            "text":  "scared/nervous",
                            "points":  21
                        },
                        {
                            "text":  "call of doody/pee",
                            "points":  21
                        },
                        {
                            "text":  "lying/guilty",
                            "points":  16
                        },
                        {
                            "text":  "itchy/hemorrhoids",
                            "points":  12
                        },
                        {
                            "text":  "bugs/lice/worms",
                            "points":  5
                        },
                        {
                            "text":  "bored/restless",
                            "points":  4
                        },
                        {
                            "text":  "pain/infection",
                            "points":  4
                        },
                        {
                            "text":  "tight undies/duds",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200119,
        "question":  "Name something furry you should never try to pet.",
        "answers":  [
                        {
                            "text":  "lion",
                            "points":  21
                        },
                        {
                            "text":  "skunk",
                            "points":  16
                        },
                        {
                            "text":  "bear",
                            "points":  15
                        },
                        {
                            "text":  "tiger",
                            "points":  13
                        },
                        {
                            "text":  "raccoon",
                            "points":  11
                        },
                        {
                            "text":  "spider/tarantula",
                            "points":  5
                        },
                        {
                            "text":  "badger",
                            "points":  3
                        },
                        {
                            "text":  "person/their armpit",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200120,
        "question":  "We asked 100 married women... Fill in the blank: Before I got married, I had no idea how often men what?",
        "answers":  [
                        {
                            "text":  "blast cabbage",
                            "points":  17
                        },
                        {
                            "text":  "pee/take hour dump",
                            "points":  14
                        },
                        {
                            "text":  "sleep/snore",
                            "points":  14
                        },
                        {
                            "text":  "ride the honey train",
                            "points":  13
                        },
                        {
                            "text":  "shower",
                            "points":  10
                        },
                        {
                            "text":  "shave",
                            "points":  9
                        },
                        {
                            "text":  "lie",
                            "points":  5
                        },
                        {
                            "text":  "leave duds around",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  200121,
        "question":  "Name something that Mickey Mouse has that you don't.",
        "answers":  [
                        {
                            "text":  "big mouse ears",
                            "points":  36
                        },
                        {
                            "text":  "a tail",
                            "points":  30
                        },
                        {
                            "text":  "minnie/hot babe",
                            "points":  7
                        },
                        {
                            "text":  "$$$/bajillions",
                            "points":  5
                        },
                        {
                            "text":  "a clubhouse",
                            "points":  2
                        },
                        {
                            "text":  "goofy",
                            "points":  2
                        },
                        {
                            "text":  "a squeaky voice",
                            "points":  2
                        },
                        {
                            "text":  "fame/popularity",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200122,
        "question":  "Name an animal's nose you wouldn't want your nose to look like.",
        "answers":  [
                        {
                            "text":  "pig",
                            "points":  27
                        },
                        {
                            "text":  "elephant",
                            "points":  25
                        },
                        {
                            "text":  "aardvark/anteater",
                            "points":  14
                        },
                        {
                            "text":  "ape/proboscis monkey",
                            "points":  5
                        },
                        {
                            "text":  "horse",
                            "points":  4
                        },
                        {
                            "text":  "platypus",
                            "points":  4
                        },
                        {
                            "text":  "rhino",
                            "points":  4
                        },
                        {
                            "text":  "dog/pug",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200123,
        "question":  "Name a place that people go looking for happiness.",
        "answers":  [
                        {
                            "text":  "bar/club",
                            "points":  27
                        },
                        {
                            "text":  "church",
                            "points":  23
                        },
                        {
                            "text":  "park/disneyland",
                            "points":  13
                        },
                        {
                            "text":  "beach/hawaii",
                            "points":  8
                        },
                        {
                            "text":  "home/bedroom",
                            "points":  5
                        },
                        {
                            "text":  "las vegas/casino",
                            "points":  4
                        },
                        {
                            "text":  "within themselves",
                            "points":  3
                        },
                        {
                            "text":  "web/craigslist ad",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200124,
        "question":  "Name something a cannibal might remove from someone before eating them.",
        "answers":  [
                        {
                            "text":  "clothes/shoes",
                            "points":  31
                        },
                        {
                            "text":  "pesky hairs",
                            "points":  21
                        },
                        {
                            "text":  "teeth",
                            "points":  9
                        },
                        {
                            "text":  "bones",
                            "points":  6
                        },
                        {
                            "text":  "guts/intestines",
                            "points":  5
                        },
                        {
                            "text":  "skin/abba tattoo",
                            "points":  5
                        },
                        {
                            "text":  "bling",
                            "points":  4
                        },
                        {
                            "text":  "heart",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200125,
        "question":  "Name something a cat does that you hope your date doesn't do.",
        "answers":  [
                        {
                            "text":  "lick self/me",
                            "points":  31
                        },
                        {
                            "text":  "scratch/claw me",
                            "points":  16
                        },
                        {
                            "text":  "purr",
                            "points":  9
                        },
                        {
                            "text":  "shed",
                            "points":  8
                        },
                        {
                            "text":  "use a litter box",
                            "points":  7
                        },
                        {
                            "text":  "sleep/on my head",
                            "points":  5
                        },
                        {
                            "text":  "spit up/hairball",
                            "points":  5
                        },
                        {
                            "text":  "spray pee/on me",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200126,
        "question":  "Name something that people tie up.",
        "answers":  [
                        {
                            "text":  "shoes/laces",
                            "points":  29
                        },
                        {
                            "text":  "people/kinky lover",
                            "points":  19
                        },
                        {
                            "text":  "animals/horse",
                            "points":  15
                        },
                        {
                            "text":  "trash bag",
                            "points":  7
                        },
                        {
                            "text":  "their hair",
                            "points":  5
                        },
                        {
                            "text":  "\"loose ends\"",
                            "points":  4
                        },
                        {
                            "text":  "packages",
                            "points":  3
                        },
                        {
                            "text":  "traffic",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200127,
        "question":  "We asked 100 men... Name a reason a desirable woman might not give you the time of day.",
        "answers":  [
                        {
                            "text":  "i'm dirt-poor",
                            "points":  18
                        },
                        {
                            "text":  "i'm butt-ugly",
                            "points":  16
                        },
                        {
                            "text":  "she's taken/i am",
                            "points":  14
                        },
                        {
                            "text":  "i'm rotund",
                            "points":  12
                        },
                        {
                            "text":  "i reek/fish breath",
                            "points":  12
                        },
                        {
                            "text":  "she's stuck-up",
                            "points":  5
                        },
                        {
                            "text":  "i'm ancient",
                            "points":  5
                        },
                        {
                            "text":  "i'm short/munchkin",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200128,
        "question":  "Name something specific a skydiver would hate to land on.",
        "answers":  [
                        {
                            "text":  "cactus/tree",
                            "points":  34
                        },
                        {
                            "text":  "building/steeple",
                            "points":  11
                        },
                        {
                            "text":  "rocks/mtn. peak",
                            "points":  11
                        },
                        {
                            "text":  "water/ice",
                            "points":  9
                        },
                        {
                            "text":  "pavement/concrete",
                            "points":  7
                        },
                        {
                            "text":  "electric wire/pole",
                            "points":  6
                        },
                        {
                            "text":  "animal/porcupine",
                            "points":  3
                        },
                        {
                            "text":  "his head",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200129,
        "question":  "Name an animal that pretty much just eats, mates, and poops.",
        "answers":  [
                        {
                            "text":  "rabbit",
                            "points":  30
                        },
                        {
                            "text":  "pig",
                            "points":  15
                        },
                        {
                            "text":  "mouse/rat",
                            "points":  11
                        },
                        {
                            "text":  "cat",
                            "points":  9
                        },
                        {
                            "text":  "cow",
                            "points":  6
                        },
                        {
                            "text":  "dog",
                            "points":  6
                        },
                        {
                            "text":  "lion",
                            "points":  4
                        },
                        {
                            "text":  "men/humans",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200130,
        "question":  "Name an animal that could suffocate in Dolly Parton's cleavage.",
        "answers":  [
                        {
                            "text":  "mouse/rat",
                            "points":  23
                        },
                        {
                            "text":  "hamster/gerbil",
                            "points":  15
                        },
                        {
                            "text":  "cat/kitten",
                            "points":  13
                        },
                        {
                            "text":  "bird",
                            "points":  10
                        },
                        {
                            "text":  "squirrel",
                            "points":  7
                        },
                        {
                            "text":  "chipmunk",
                            "points":  6
                        },
                        {
                            "text":  "dog/chihuahua",
                            "points":  6
                        },
                        {
                            "text":  "person/her man",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200131,
        "question":  "We asked 100 women... Give me a word starting with \"S\" that describes your man's underwear.",
        "answers":  [
                        {
                            "text":  "sexy",
                            "points":  22
                        },
                        {
                            "text":  "saggy",
                            "points":  13
                        },
                        {
                            "text":  "stinky",
                            "points":  12
                        },
                        {
                            "text":  "short/shorts",
                            "points":  12
                        },
                        {
                            "text":  "snug",
                            "points":  9
                        },
                        {
                            "text":  "sad",
                            "points":  7
                        },
                        {
                            "text":  "superman",
                            "points":  5
                        },
                        {
                            "text":  "stylish",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200132,
        "question":  "Name something grandma might do at a family reunion if she's had too much to drink.",
        "answers":  [
                        {
                            "text":  "dance",
                            "points":  19
                        },
                        {
                            "text":  "sleep/pass out",
                            "points":  12
                        },
                        {
                            "text":  "sing/ethel merman",
                            "points":  11
                        },
                        {
                            "text":  "trip/fall",
                            "points":  9
                        },
                        {
                            "text":  "yell/cuss out kids",
                            "points":  9
                        },
                        {
                            "text":  "fart/in microphone",
                            "points":  8
                        },
                        {
                            "text":  "gab/tell stories",
                            "points":  8
                        },
                        {
                            "text":  "strip/jiggle jugs",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  200133,
        "question":  "Name something you'd hate to find out you still have to do every day in heaven.",
        "answers":  [
                        {
                            "text":  "clean/laundry",
                            "points":  33
                        },
                        {
                            "text":  "work/telemarketing",
                            "points":  23
                        },
                        {
                            "text":  "shave/my hairy legs",
                            "points":  9
                        },
                        {
                            "text":  "cook",
                            "points":  5
                        },
                        {
                            "text":  "pee/roll nut logs",
                            "points":  4
                        },
                        {
                            "text":  "brush my teeth",
                            "points":  3
                        },
                        {
                            "text":  "bathe/shower",
                            "points":  3
                        },
                        {
                            "text":  "go to church/pray",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200134,
        "question":  "Name something you do in your bathroom at home that you probably wouldn't do in an airplane bathroom.",
        "answers":  [
                        {
                            "text":  "shower/bathe",
                            "points":  30
                        },
                        {
                            "text":  "download a brownload",
                            "points":  18
                        },
                        {
                            "text":  "shave",
                            "points":  10
                        },
                        {
                            "text":  "brush teeth",
                            "points":  9
                        },
                        {
                            "text":  "read",
                            "points":  6
                        },
                        {
                            "text":  "sex/play my flute",
                            "points":  4
                        },
                        {
                            "text":  "sing",
                            "points":  3
                        },
                        {
                            "text":  "brush/curl hair",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200135,
        "question":  "Fill in the blank: A man should never make fun of his wife when she's wearing what?",
        "answers":  [
                        {
                            "text":  "swimsuit/bikini",
                            "points":  27
                        },
                        {
                            "text":  "nothing at all",
                            "points":  15
                        },
                        {
                            "text":  "dress/muumuu",
                            "points":  15
                        },
                        {
                            "text":  "pajamas",
                            "points":  8
                        },
                        {
                            "text":  "tight jeans",
                            "points":  5
                        },
                        {
                            "text":  "a wig",
                            "points":  5
                        },
                        {
                            "text":  "panties",
                            "points":  5
                        },
                        {
                            "text":  "a girdle",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200136,
        "question":  "Name something an angry football wife might put in her husband's jockstrap.",
        "answers":  [
                        {
                            "text":  "itching powder",
                            "points":  26
                        },
                        {
                            "text":  "bengay/icy hot",
                            "points":  21
                        },
                        {
                            "text":  "peppers/hot sauce",
                            "points":  17
                        },
                        {
                            "text":  "bugs/fire ants",
                            "points":  7
                        },
                        {
                            "text":  "poison ivy/oak",
                            "points":  5
                        },
                        {
                            "text":  "ice",
                            "points":  3
                        },
                        {
                            "text":  "thorny/spiky plant",
                            "points":  2
                        },
                        {
                            "text":  "super glue",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200137,
        "question":  "We asked 100 women... Name something the pioneer women did that you could never do.",
        "answers":  [
                        {
                            "text":  "hand wash clothes",
                            "points":  19
                        },
                        {
                            "text":  "cook/from scratch",
                            "points":  15
                        },
                        {
                            "text":  "hunt/kill chickens",
                            "points":  14
                        },
                        {
                            "text":  "home childbirth",
                            "points":  13
                        },
                        {
                            "text":  "chop wood",
                            "points":  7
                        },
                        {
                            "text":  "obey men",
                            "points":  6
                        },
                        {
                            "text":  "use outhouse/woods",
                            "points":  5
                        },
                        {
                            "text":  "bathe outside",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200138,
        "question":  "We asked 100 men... Fill in the blank: Shopping for a wife is like shopping for a car. You want one that's what?",
        "answers":  [
                        {
                            "text":  "beautiful",
                            "points":  18
                        },
                        {
                            "text":  "well-built",
                            "points":  13
                        },
                        {
                            "text":  "reliable/lasting",
                            "points":  12
                        },
                        {
                            "text":  "fast",
                            "points":  11
                        },
                        {
                            "text":  "new/low mileage",
                            "points":  10
                        },
                        {
                            "text":  "easy to handle",
                            "points":  9
                        },
                        {
                            "text":  "economical",
                            "points":  5
                        },
                        {
                            "text":  "smooth/sleek",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  200139,
        "question":  "If you and your spouse got romantic while camping, what animal might the forest ranger think was in your tent?",
        "answers":  [
                        {
                            "text":  "bear",
                            "points":  53
                        },
                        {
                            "text":  "tiger",
                            "points":  6
                        },
                        {
                            "text":  "dog",
                            "points":  6
                        },
                        {
                            "text":  "lion",
                            "points":  5
                        },
                        {
                            "text":  "rabbit",
                            "points":  3
                        },
                        {
                            "text":  "coyote",
                            "points":  3
                        },
                        {
                            "text":  "raccoon",
                            "points":  3
                        },
                        {
                            "text":  "snake",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200140,
        "question":  "Name something grandma takes out to let grandpa know she's in the mood.",
        "answers":  [
                        {
                            "text":  "her teeth",
                            "points":  35
                        },
                        {
                            "text":  "booze/fireball shot",
                            "points":  10
                        },
                        {
                            "text":  "lotion/flavored lube",
                            "points":  9
                        },
                        {
                            "text":  "nightie/lingerie",
                            "points":  8
                        },
                        {
                            "text":  "candles",
                            "points":  7
                        },
                        {
                            "text":  "her hangin' hooters",
                            "points":  5
                        },
                        {
                            "text":  "toy/blow-up doll",
                            "points":  4
                        },
                        {
                            "text":  "viagra",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200141,
        "question":  "Name something that leaves you breathless.",
        "answers":  [
                        {
                            "text":  "running/exercise",
                            "points":  33
                        },
                        {
                            "text":  "scenery/sunsets",
                            "points":  13
                        },
                        {
                            "text":  "a hottie/my mate",
                            "points":  11
                        },
                        {
                            "text":  "cold air/wind",
                            "points":  8
                        },
                        {
                            "text":  "mind-blowing boink",
                            "points":  5
                        },
                        {
                            "text":  "kiss/tonsil boxing",
                            "points":  5
                        },
                        {
                            "text":  "love",
                            "points":  4
                        },
                        {
                            "text":  "music/barry gibb",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200142,
        "question":  "Name something you'd hate to realize you put in the church collection plate by mistake.",
        "answers":  [
                        {
                            "text":  "condom/papa stoppa",
                            "points":  32
                        },
                        {
                            "text":  "$100/money i need",
                            "points":  22
                        },
                        {
                            "text":  "credit card",
                            "points":  8
                        },
                        {
                            "text":  "jewelry/watch",
                            "points":  6
                        },
                        {
                            "text":  "cell phone",
                            "points":  4
                        },
                        {
                            "text":  "wallet",
                            "points":  4
                        },
                        {
                            "text":  "receipt/bar tab",
                            "points":  3
                        },
                        {
                            "text":  "phone #/my digits",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200143,
        "question":  "To impress Eve, name something Adam might have put behind his fig leaf.",
        "answers":  [
                        {
                            "text":  "big ole banana",
                            "points":  31
                        },
                        {
                            "text":  "apple/2 apples",
                            "points":  22
                        },
                        {
                            "text":  "his popped stiffy",
                            "points":  7
                        },
                        {
                            "text":  "the serpent",
                            "points":  5
                        },
                        {
                            "text":  "branch/log",
                            "points":  5
                        },
                        {
                            "text":  "figs/more leaves",
                            "points":  4
                        },
                        {
                            "text":  "diamond/jewelry",
                            "points":  4
                        },
                        {
                            "text":  "cucumber",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200144,
        "question":  "Name a part of the cow you'd hate to find in the burger you're eating.",
        "answers":  [
                        {
                            "text":  "eyeball",
                            "points":  14
                        },
                        {
                            "text":  "udder",
                            "points":  13
                        },
                        {
                            "text":  "hoof",
                            "points":  13
                        },
                        {
                            "text":  "tongue",
                            "points":  11
                        },
                        {
                            "text":  "pooper",
                            "points":  10
                        },
                        {
                            "text":  "weenie/testes",
                            "points":  9
                        },
                        {
                            "text":  "intestines",
                            "points":  7
                        },
                        {
                            "text":  "nose",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  200145,
        "question":  "Name something at work you wouldn't want your boss to catch you holding.",
        "answers":  [
                        {
                            "text":  "my cell phone",
                            "points":  31
                        },
                        {
                            "text":  "a gun",
                            "points":  10
                        },
                        {
                            "text":  "coworker/intern",
                            "points":  8
                        },
                        {
                            "text":  "boss' horny spouse",
                            "points":  8
                        },
                        {
                            "text":  "food/candy",
                            "points":  8
                        },
                        {
                            "text":  "myself/mr. one eye",
                            "points":  7
                        },
                        {
                            "text":  "booze/natty light",
                            "points":  5
                        },
                        {
                            "text":  "drugs/dank weed",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200146,
        "question":  "Name a place an 80-year-old man takes an 80-year-old woman on a hot date.",
        "answers":  [
                        {
                            "text":  "restaurant/denny's",
                            "points":  25
                        },
                        {
                            "text":  "bingo hall",
                            "points":  22
                        },
                        {
                            "text":  "a park",
                            "points":  8
                        },
                        {
                            "text":  "theater/drive-in",
                            "points":  7
                        },
                        {
                            "text":  "ice cream shop",
                            "points":  6
                        },
                        {
                            "text":  "dance hall",
                            "points":  5
                        },
                        {
                            "text":  "old folks' home",
                            "points":  4
                        },
                        {
                            "text":  "store/cvs",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200147,
        "question":  "If your grandma was dating, what question would you ask her about her boyfriend?",
        "answers":  [
                        {
                            "text":  "age/over 21?",
                            "points":  23
                        },
                        {
                            "text":  "treat you well?",
                            "points":  15
                        },
                        {
                            "text":  "good in sack?",
                            "points":  13
                        },
                        {
                            "text":  "good job/loaded?",
                            "points":  13
                        },
                        {
                            "text":  "handsome/any teeth?",
                            "points":  6
                        },
                        {
                            "text":  "like/love him?",
                            "points":  4
                        },
                        {
                            "text":  "is he breathing?",
                            "points":  4
                        },
                        {
                            "text":  "his intentions?",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200148,
        "question":  "If dogs took selfies, what would they snap a picture of themselves doing?",
        "answers":  [
                        {
                            "text":  "eating/chewing",
                            "points":  22
                        },
                        {
                            "text":  "sleeping",
                            "points":  11
                        },
                        {
                            "text":  "licking selves",
                            "points":  11
                        },
                        {
                            "text":  "playing/frisbee",
                            "points":  9
                        },
                        {
                            "text":  "pee/pinching a loaf",
                            "points":  9
                        },
                        {
                            "text":  "barking",
                            "points":  7
                        },
                        {
                            "text":  "chase cat/squirrel",
                            "points":  6
                        },
                        {
                            "text":  "sniffing butts",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  200149,
        "question":  "Fill in the blank: Orange what?",
        "answers":  [
                        {
                            "text":  "juice",
                            "points":  34
                        },
                        {
                            "text":  "crush",
                            "points":  12
                        },
                        {
                            "text":  "is the new black",
                            "points":  9
                        },
                        {
                            "text":  "sicle/popsicle",
                            "points":  8
                        },
                        {
                            "text":  "julius",
                            "points":  5
                        },
                        {
                            "text":  "peel",
                            "points":  5
                        },
                        {
                            "text":  "county",
                            "points":  3
                        },
                        {
                            "text":  "sherbet",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200150,
        "question":  "Name something some people like to have on when they're making love.",
        "answers":  [
                        {
                            "text":  "music/barry manilow",
                            "points":  25
                        },
                        {
                            "text":  "throbbin' hood",
                            "points":  12
                        },
                        {
                            "text":  "socks/tube socks",
                            "points":  10
                        },
                        {
                            "text":  "nothing/b-day suit",
                            "points":  7
                        },
                        {
                            "text":  "cologne",
                            "points":  7
                        },
                        {
                            "text":  "lights/dim light'g",
                            "points":  7
                        },
                        {
                            "text":  "lingerie/nightie",
                            "points":  7
                        },
                        {
                            "text":  "shoes/6-inch heels",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200151,
        "question":  "When most guys wear a Speedo, their package is about the size of what kind of fruit?",
        "answers":  [
                        {
                            "text":  "banana/plantain",
                            "points":  26
                        },
                        {
                            "text":  "orange",
                            "points":  12
                        },
                        {
                            "text":  "grapes/one grape",
                            "points":  9
                        },
                        {
                            "text":  "apple",
                            "points":  8
                        },
                        {
                            "text":  "lemon",
                            "points":  7
                        },
                        {
                            "text":  "plum",
                            "points":  7
                        },
                        {
                            "text":  "kiwi",
                            "points":  5
                        },
                        {
                            "text":  "peach",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200152,
        "question":  "Fill in the blank: I wish there was a pill that would make me what?",
        "answers":  [
                        {
                            "text":  "skinny",
                            "points":  24
                        },
                        {
                            "text":  "younger",
                            "points":  13
                        },
                        {
                            "text":  "sexy/attractive",
                            "points":  9
                        },
                        {
                            "text":  "smart",
                            "points":  8
                        },
                        {
                            "text":  "rich",
                            "points":  7
                        },
                        {
                            "text":  "taller",
                            "points":  6
                        },
                        {
                            "text":  "hung/sex beast",
                            "points":  5
                        },
                        {
                            "text":  "invisible",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  200153,
        "question":  "What might a wife be holding that she'd think, \"I could really hurt my husband with this\"?",
        "answers":  [
                        {
                            "text":  "knife",
                            "points":  43
                        },
                        {
                            "text":  "pan/skillet",
                            "points":  10
                        },
                        {
                            "text":  "gun",
                            "points":  6
                        },
                        {
                            "text":  "$$$/credit card",
                            "points":  4
                        },
                        {
                            "text":  "baseball bat",
                            "points":  4
                        },
                        {
                            "text":  "fork",
                            "points":  3
                        },
                        {
                            "text":  "another dude",
                            "points":  3
                        },
                        {
                            "text":  "giant vibrator",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200154,
        "question":  "Name something bad boys have that's bad.",
        "answers":  [
                        {
                            "text":  "attitude",
                            "points":  29
                        },
                        {
                            "text":  "weapon/slingshot",
                            "points":  18
                        },
                        {
                            "text":  "tattoos/on face",
                            "points":  9
                        },
                        {
                            "text":  "cigarettes",
                            "points":  4
                        },
                        {
                            "text":  "hair/greasy hair",
                            "points":  4
                        },
                        {
                            "text":  "criminal record",
                            "points":  4
                        },
                        {
                            "text":  "a bad-arse car",
                            "points":  4
                        },
                        {
                            "text":  "a pimpin' harley",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200155,
        "question":  "We asked 100 men... Name something you'd be surprised a woman did while you kiss her.",
        "answers":  [
                        {
                            "text":  "let one rip",
                            "points":  22
                        },
                        {
                            "text":  "burped",
                            "points":  15
                        },
                        {
                            "text":  "laughed",
                            "points":  14
                        },
                        {
                            "text":  "groped/my fig",
                            "points":  7
                        },
                        {
                            "text":  "kept eyes open",
                            "points":  5
                        },
                        {
                            "text":  "watched tv/maury",
                            "points":  4
                        },
                        {
                            "text":  "bit me/bloody",
                            "points":  4
                        },
                        {
                            "text":  "fell asleep",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200156,
        "question":  "What's the last thing a woman wants to hear her husband say when she's in labor?",
        "answers":  [
                        {
                            "text":  "shut up/relax",
                            "points":  16
                        },
                        {
                            "text":  "not so bad/it's ok",
                            "points":  12
                        },
                        {
                            "text":  "love ya shnookums",
                            "points":  9
                        },
                        {
                            "text":  "push! harder!",
                            "points":  8
                        },
                        {
                            "text":  "hurt?/you ok?",
                            "points":  8
                        },
                        {
                            "text":  "breathe, sweetie",
                            "points":  7
                        },
                        {
                            "text":  "i want a divorce",
                            "points":  5
                        },
                        {
                            "text":  "let's have more!",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  200157,
        "question":  "Name something you want to get rid of, but it refuses to go away.",
        "answers":  [
                        {
                            "text":  "fat/mile-wide booty",
                            "points":  24
                        },
                        {
                            "text":  "bugs/lice",
                            "points":  9
                        },
                        {
                            "text":  "grays/body hair",
                            "points":  6
                        },
                        {
                            "text":  "bills/taxes",
                            "points":  6
                        },
                        {
                            "text":  "my ex",
                            "points":  6
                        },
                        {
                            "text":  "my zits",
                            "points":  5
                        },
                        {
                            "text":  "cold/illness",
                            "points":  4
                        },
                        {
                            "text":  "my spouse/mate",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200158,
        "question":  "Name something a wife does to her husband's face.",
        "answers":  [
                        {
                            "text":  "kisses it",
                            "points":  50
                        },
                        {
                            "text":  "slaps it",
                            "points":  24
                        },
                        {
                            "text":  "wipes it off",
                            "points":  17
                        },
                        {
                            "text":  "shaves it",
                            "points":  3
                        },
                        {
                            "text":  "pinches it",
                            "points":  2
                        },
                        {
                            "text":  "caresses it",
                            "points":  2
                        },
                        {
                            "text":  "sits on it",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200159,
        "question":  "We asked 100 men... Name a part of a woman's body that should be soft.",
        "answers":  [
                        {
                            "text":  "her plump bosoms",
                            "points":  50
                        },
                        {
                            "text":  "her dazzling dumper",
                            "points":  18
                        },
                        {
                            "text":  "her juicy lips",
                            "points":  13
                        },
                        {
                            "text":  "her fondling hands",
                            "points":  11
                        },
                        {
                            "text":  "her tasty legs",
                            "points":  3
                        },
                        {
                            "text":  "her foxy face",
                            "points":  3
                        },
                        {
                            "text":  "her lickable feet",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200160,
        "question":  "What was your area of expertise in kindergarten?",
        "answers":  [
                        {
                            "text":  "coloring/drawing",
                            "points":  38
                        },
                        {
                            "text":  "napping",
                            "points":  28
                        },
                        {
                            "text":  "math",
                            "points":  11
                        },
                        {
                            "text":  "reading/dr. seuss",
                            "points":  8
                        },
                        {
                            "text":  "playing/recess",
                            "points":  7
                        },
                        {
                            "text":  "hotties/1st graders",
                            "points":  5
                        },
                        {
                            "text":  "making people laugh",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200161,
        "question":  "Name something that might wake up a farmer by licking him.",
        "answers":  [
                        {
                            "text":  "cow",
                            "points":  33
                        },
                        {
                            "text":  "dog",
                            "points":  32
                        },
                        {
                            "text":  "cat",
                            "points":  16
                        },
                        {
                            "text":  "pig",
                            "points":  11
                        },
                        {
                            "text":  "horse",
                            "points":  4
                        },
                        {
                            "text":  "frisky, fertile wife",
                            "points":  2
                        },
                        {
                            "text":  "rooster",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200162,
        "question":  "We asked 100 married women... Name something your husband does in public that's embarrassing.",
        "answers":  [
                        {
                            "text":  "butt whispers",
                            "points":  27
                        },
                        {
                            "text":  "scratch/his oysters",
                            "points":  22
                        },
                        {
                            "text":  "tells bad jokes",
                            "points":  13
                        },
                        {
                            "text":  "gets sloshed",
                            "points":  11
                        },
                        {
                            "text":  "pats my hot booty",
                            "points":  11
                        },
                        {
                            "text":  "burps/the alphabet",
                            "points":  9
                        },
                        {
                            "text":  "talks too much",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  200163,
        "question":  "We asked 100 married women... Name something the man of your dreams has that your husband sadly does not.",
        "answers":  [
                        {
                            "text":  "an income/millions",
                            "points":  21
                        },
                        {
                            "text":  "sweet bod/abs",
                            "points":  20
                        },
                        {
                            "text":  "hair",
                            "points":  18
                        },
                        {
                            "text":  "hot face/a few teeth",
                            "points":  18
                        },
                        {
                            "text":  "communication skills",
                            "points":  9
                        },
                        {
                            "text":  "charm",
                            "points":  7
                        },
                        {
                            "text":  "libido/the hornies",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  200164,
        "question":  "We asked 100 men... If you're good at reading body language, what part of a woman speaks the loudest?",
        "answers":  [
                        {
                            "text":  "do-me eyes",
                            "points":  66
                        },
                        {
                            "text":  "tempting ta-tas",
                            "points":  13
                        },
                        {
                            "text":  "mouth/collagen lips",
                            "points":  8
                        },
                        {
                            "text":  "groping hands",
                            "points":  4
                        },
                        {
                            "text":  "heavenly hips",
                            "points":  4
                        },
                        {
                            "text":  "bellowing booty",
                            "points":  2
                        },
                        {
                            "text":  "coquettish hair",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200165,
        "question":  "Name a cuddly animal a woman might nickname her man.",
        "answers":  [
                        {
                            "text":  "bear/teddy",
                            "points":  53
                        },
                        {
                            "text":  "dog/puppy/pooch",
                            "points":  27
                        },
                        {
                            "text":  "cat/kitty",
                            "points":  7
                        },
                        {
                            "text":  "bunny",
                            "points":  5
                        },
                        {
                            "text":  "tiger",
                            "points":  3
                        },
                        {
                            "text":  "koala",
                            "points":  2
                        },
                        {
                            "text":  "bird/ducky",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200166,
        "question":  "Name something you wipe.",
        "answers":  [
                        {
                            "text":  "my log launcher",
                            "points":  47
                        },
                        {
                            "text":  "my snotty schnoz",
                            "points":  35
                        },
                        {
                            "text":  "table/counter",
                            "points":  8
                        },
                        {
                            "text":  "mirror",
                            "points":  3
                        },
                        {
                            "text":  "eyes/eye boogers",
                            "points":  2
                        },
                        {
                            "text":  "my hands",
                            "points":  2
                        },
                        {
                            "text":  "my mouth",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200167,
        "question":  "We asked 100 single women... When you go on a date, name something the guy has that you hope is clean.",
        "answers":  [
                        {
                            "text":  "body/breath",
                            "points":  37
                        },
                        {
                            "text":  "clothes/undies",
                            "points":  25
                        },
                        {
                            "text":  "home/bed",
                            "points":  15
                        },
                        {
                            "text":  "condom",
                            "points":  8
                        },
                        {
                            "text":  "car",
                            "points":  7
                        },
                        {
                            "text":  "mind/humor",
                            "points":  4
                        },
                        {
                            "text":  "record",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200168,
        "question":  "We asked 100 married men... Name something specific of your wife's you might wear on Halloween.",
        "answers":  [
                        {
                            "text":  "makeup",
                            "points":  28
                        },
                        {
                            "text":  "dress/micro skirt",
                            "points":  21
                        },
                        {
                            "text":  "wig/weave",
                            "points":  19
                        },
                        {
                            "text":  "bra/leather bra",
                            "points":  16
                        },
                        {
                            "text":  "shirt/belly shirt",
                            "points":  11
                        },
                        {
                            "text":  "french maid outfit",
                            "points":  2
                        },
                        {
                            "text":  "hat",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200169,
        "question":  "We asked 100 single men... Name a line you use in bars that usually works.",
        "answers":  [
                        {
                            "text":  "know/met before?",
                            "points":  26
                        },
                        {
                            "text":  "hi/howdy/hey babe",
                            "points":  21
                        },
                        {
                            "text":  "buy drink/beer?",
                            "points":  17
                        },
                        {
                            "text":  "come here often?",
                            "points":  11
                        },
                        {
                            "text":  "you're cute!",
                            "points":  9
                        },
                        {
                            "text":  "here with someone?",
                            "points":  8
                        },
                        {
                            "text":  "died/see an angel",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  200170,
        "question":  "Name a question employees in a company are encouraged not to ask each other.",
        "answers":  [
                        {
                            "text":  "how much you make?",
                            "points":  62
                        },
                        {
                            "text":  "how old are you?",
                            "points":  14
                        },
                        {
                            "text":  "you married?",
                            "points":  9
                        },
                        {
                            "text":  "like guys or girls?",
                            "points":  5
                        },
                        {
                            "text":  "do me/on desk?",
                            "points":  3
                        },
                        {
                            "text":  "go on a date?",
                            "points":  3
                        },
                        {
                            "text":  "hate your job?",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200171,
        "question":  "Name something that winds up in bed with you and your mate.",
        "answers":  [
                        {
                            "text":  "pet/nine cats",
                            "points":  61
                        },
                        {
                            "text":  "kids/17-year-old",
                            "points":  13
                        },
                        {
                            "text":  "pillows",
                            "points":  9
                        },
                        {
                            "text":  "sheets/blankets",
                            "points":  5
                        },
                        {
                            "text":  "phone",
                            "points":  4
                        },
                        {
                            "text":  "tv remote",
                            "points":  4
                        },
                        {
                            "text":  "crumbs/chocolate",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200172,
        "question":  "Name something a slob can get his new car smelling like in no time at all.",
        "answers":  [
                        {
                            "text":  "food/fries",
                            "points":  59
                        },
                        {
                            "text":  "b.o./sweaty feet",
                            "points":  16
                        },
                        {
                            "text":  "poop/eau de fart",
                            "points":  10
                        },
                        {
                            "text":  "garbage",
                            "points":  6
                        },
                        {
                            "text":  "cigarettes",
                            "points":  3
                        },
                        {
                            "text":  "dirty duds/his jock",
                            "points":  2
                        },
                        {
                            "text":  "air freshener",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200173,
        "question":  "We asked 100 men... Name the most important thing your mother taught you to do.",
        "answers":  [
                        {
                            "text":  "be nice/respect gals",
                            "points":  55
                        },
                        {
                            "text":  "hygiene/clean undies",
                            "points":  18
                        },
                        {
                            "text":  "tell the truth",
                            "points":  11
                        },
                        {
                            "text":  "cook",
                            "points":  6
                        },
                        {
                            "text":  "be reliable",
                            "points":  3
                        },
                        {
                            "text":  "cross the street",
                            "points":  3
                        },
                        {
                            "text":  "pee/poo in toilet",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200174,
        "question":  "Name something the Pillsbury Doughboy's wife might do to him if he cheats on her.",
        "answers":  [
                        {
                            "text":  "cook/bake/burn him",
                            "points":  53
                        },
                        {
                            "text":  "flatten/roll him",
                            "points":  20
                        },
                        {
                            "text":  "hit/pound him",
                            "points":  12
                        },
                        {
                            "text":  "poke him",
                            "points":  6
                        },
                        {
                            "text":  "leave him",
                            "points":  3
                        },
                        {
                            "text":  "bite/eat him",
                            "points":  2
                        },
                        {
                            "text":  "take all his dough",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200175,
        "question":  "Name a reason you might say to someone, \"Don't come near me.\"",
        "answers":  [
                        {
                            "text":  "sick/have plague",
                            "points":  51
                        },
                        {
                            "text":  "reek/skunky/farty",
                            "points":  23
                        },
                        {
                            "text":  "afraid of them",
                            "points":  10
                        },
                        {
                            "text":  "covered in filth",
                            "points":  5
                        },
                        {
                            "text":  "angry/i hate them",
                            "points":  5
                        },
                        {
                            "text":  "gonna tickle me!",
                            "points":  2
                        },
                        {
                            "text":  "i'm sunburned",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200176,
        "question":  "Name a part of a female elephant about which a male elephant might think, \"That's hot.\"",
        "answers":  [
                        {
                            "text":  "titillating trunk",
                            "points":  51
                        },
                        {
                            "text":  "beefy wrinkly rear",
                            "points":  21
                        },
                        {
                            "text":  "biteable ears",
                            "points":  15
                        },
                        {
                            "text":  "come-hither tail",
                            "points":  4
                        },
                        {
                            "text":  "long hard tusks",
                            "points":  3
                        },
                        {
                            "text":  "deep do-me eyes",
                            "points":  2
                        },
                        {
                            "text":  "lickable legs",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200177,
        "question":  "Name something a cowboy does to his woman and his horse.",
        "answers":  [
                        {
                            "text":  "mounts & rides",
                            "points":  50
                        },
                        {
                            "text":  "feeds/gives a drink",
                            "points":  13
                        },
                        {
                            "text":  "lassos/ties up",
                            "points":  13
                        },
                        {
                            "text":  "pets/caresses",
                            "points":  12
                        },
                        {
                            "text":  "brushes/grooms",
                            "points":  5
                        },
                        {
                            "text":  "slaps butt",
                            "points":  3
                        },
                        {
                            "text":  "reigns in",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200178,
        "question":  "If you wanted a nude photo of yourself, who would you trust to take the picture?",
        "answers":  [
                        {
                            "text":  "spouse/mate",
                            "points":  47
                        },
                        {
                            "text":  "no one, no how!",
                            "points":  20
                        },
                        {
                            "text":  "me/a selfie",
                            "points":  17
                        },
                        {
                            "text":  "my best bud",
                            "points":  5
                        },
                        {
                            "text":  "my kid",
                            "points":  3
                        },
                        {
                            "text":  "my sibling",
                            "points":  3
                        },
                        {
                            "text":  "pro photographer",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200179,
        "question":  "The bowling team used one of its members as a human bowling ball. They stuck their fingers in his what?",
        "answers":  [
                        {
                            "text":  "nose",
                            "points":  43
                        },
                        {
                            "text":  "ears",
                            "points":  14
                        },
                        {
                            "text":  "mouth",
                            "points":  14
                        },
                        {
                            "text":  "butt/sphinc",
                            "points":  11
                        },
                        {
                            "text":  "eye sockets",
                            "points":  8
                        },
                        {
                            "text":  "pants/belt loops",
                            "points":  4
                        },
                        {
                            "text":  "belly button",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200180,
        "question":  "Name some personal grooming you should do at home instead of in your cubicle at work.",
        "answers":  [
                        {
                            "text":  "clip/polish nails",
                            "points":  42
                        },
                        {
                            "text":  "shave/your cooter",
                            "points":  25
                        },
                        {
                            "text":  "trim nose hair",
                            "points":  13
                        },
                        {
                            "text":  "brush/floss teeth",
                            "points":  8
                        },
                        {
                            "text":  "clean out earwax",
                            "points":  5
                        },
                        {
                            "text":  "dig out boogers",
                            "points":  3
                        },
                        {
                            "text":  "brush/comb hair",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200181,
        "question":  "Name a way you can tell the couple in the car next to you is married.",
        "answers":  [
                        {
                            "text":  "they're arguing",
                            "points":  38
                        },
                        {
                            "text":  "wedding rings",
                            "points":  19
                        },
                        {
                            "text":  "no talk/eye contact",
                            "points":  15
                        },
                        {
                            "text":  "snuggling/sit close",
                            "points":  10
                        },
                        {
                            "text":  "kid/baby on board",
                            "points":  10
                        },
                        {
                            "text":  "sit far apart",
                            "points":  4
                        },
                        {
                            "text":  "\"just wed\"/garter",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200182,
        "question":  "Tell me something you spread.",
        "answers":  [
                        {
                            "text":  "butter",
                            "points":  33
                        },
                        {
                            "text":  "peanut butter",
                            "points":  14
                        },
                        {
                            "text":  "joy/love",
                            "points":  14
                        },
                        {
                            "text":  "jelly",
                            "points":  11
                        },
                        {
                            "text":  "gossip/lies",
                            "points":  11
                        },
                        {
                            "text":  "disease/scabies",
                            "points":  10
                        },
                        {
                            "text":  "cheese",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  200183,
        "question":  "Name something that follows the word \"strip.\"",
        "answers":  [
                        {
                            "text":  "club",
                            "points":  31
                        },
                        {
                            "text":  "tease",
                            "points":  28
                        },
                        {
                            "text":  "joint",
                            "points":  12
                        },
                        {
                            "text":  "poker",
                            "points":  9
                        },
                        {
                            "text":  "mall",
                            "points":  8
                        },
                        {
                            "text":  "search",
                            "points":  7
                        },
                        {
                            "text":  "show",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200184,
        "question":  "We asked 100 married men... Name something your wife can do for hours.",
        "answers":  [
                        {
                            "text":  "talk/on phone",
                            "points":  27
                        },
                        {
                            "text":  "facebook/computer",
                            "points":  17
                        },
                        {
                            "text":  "watch tv",
                            "points":  16
                        },
                        {
                            "text":  "sleep",
                            "points":  13
                        },
                        {
                            "text":  "read",
                            "points":  13
                        },
                        {
                            "text":  "nag/complain",
                            "points":  10
                        },
                        {
                            "text":  "play piano",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200185,
        "question":  "Name something a detective might find at a crime scene that would make him suspect the culprit was a farmer.",
        "answers":  [
                        {
                            "text":  "a pitchfork/hoe",
                            "points":  22
                        },
                        {
                            "text":  "manure/bad smells",
                            "points":  22
                        },
                        {
                            "text":  "overalls",
                            "points":  16
                        },
                        {
                            "text":  "hay",
                            "points":  13
                        },
                        {
                            "text":  "tractor/tires",
                            "points":  12
                        },
                        {
                            "text":  "seeds",
                            "points":  9
                        },
                        {
                            "text":  "farm animal/pig",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200186,
        "question":  "Name something a teenage boy hopes doesn't happen right before a big date.",
        "answers":  [
                        {
                            "text":  "big zit",
                            "points":  69
                        },
                        {
                            "text":  "she cancels",
                            "points":  12
                        },
                        {
                            "text":  "gets grounded",
                            "points":  6
                        },
                        {
                            "text":  "car problem/tires",
                            "points":  3
                        },
                        {
                            "text":  "sick/diarrhea",
                            "points":  3
                        },
                        {
                            "text":  "has no cash",
                            "points":  2
                        },
                        {
                            "text":  "gets nervous",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200187,
        "question":  "Name something you would not want an elephant to do when you're near it.",
        "answers":  [
                        {
                            "text":  "take a dump/whiz",
                            "points":  68
                        },
                        {
                            "text":  "ele-fart",
                            "points":  11
                        },
                        {
                            "text":  "run/charge",
                            "points":  5
                        },
                        {
                            "text":  "spray water",
                            "points":  5
                        },
                        {
                            "text":  "trumpet/roar",
                            "points":  4
                        },
                        {
                            "text":  "sleep/lie down",
                            "points":  2
                        },
                        {
                            "text":  "sneeze",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200188,
        "question":  "Name a kind of ball a guy could carry around in his pocket.",
        "answers":  [
                        {
                            "text":  "golf ball",
                            "points":  62
                        },
                        {
                            "text":  "tennis ball",
                            "points":  11
                        },
                        {
                            "text":  "ping-pong ball",
                            "points":  10
                        },
                        {
                            "text":  "gumball",
                            "points":  5
                        },
                        {
                            "text":  "stress ball",
                            "points":  4
                        },
                        {
                            "text":  "hair ball",
                            "points":  3
                        },
                        {
                            "text":  "ball bearing ball",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200189,
        "question":  "Name something a man might be afraid to tell his wife he lost.",
        "answers":  [
                        {
                            "text":  "wedding ring",
                            "points":  55
                        },
                        {
                            "text":  "$$$/wallet/amex",
                            "points":  26
                        },
                        {
                            "text":  "the keys",
                            "points":  6
                        },
                        {
                            "text":  "his job",
                            "points":  3
                        },
                        {
                            "text":  "the kids",
                            "points":  3
                        },
                        {
                            "text":  "a bet",
                            "points":  2
                        },
                        {
                            "text":  "his mind",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200190,
        "question":  "On a woman's first date with a doctor, name a part of her body he might try to examine.",
        "answers":  [
                        {
                            "text":  "her blossoming mams",
                            "points":  55
                        },
                        {
                            "text":  "her kisser/throat",
                            "points":  15
                        },
                        {
                            "text":  "her secret garden",
                            "points":  8
                        },
                        {
                            "text":  "her hands",
                            "points":  8
                        },
                        {
                            "text":  "her tight biscuit",
                            "points":  5
                        },
                        {
                            "text":  "her eyes",
                            "points":  4
                        },
                        {
                            "text":  "her head",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200191,
        "question":  "Give me one good reason why you're not a nudist.",
        "answers":  [
                        {
                            "text":  "fat/body issues",
                            "points":  51
                        },
                        {
                            "text":  "it's cold",
                            "points":  15
                        },
                        {
                            "text":  "shy/embarrassed",
                            "points":  15
                        },
                        {
                            "text":  "my morals/values",
                            "points":  7
                        },
                        {
                            "text":  "i love clothes",
                            "points":  5
                        },
                        {
                            "text":  "i burn easily",
                            "points":  2
                        },
                        {
                            "text":  "none/i am one!",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200192,
        "question":  "Name a reason a man might be jealous of his girlfriend's dog.",
        "answers":  [
                        {
                            "text":  "attention/time",
                            "points":  49
                        },
                        {
                            "text":  "cuddle/kiss/lick",
                            "points":  17
                        },
                        {
                            "text":  "sleeps with her",
                            "points":  13
                        },
                        {
                            "text":  "she loves dog more",
                            "points":  9
                        },
                        {
                            "text":  "it's cuter than him",
                            "points":  5
                        },
                        {
                            "text":  "dog's well hung",
                            "points":  2
                        },
                        {
                            "text":  "it gets more gifts",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200193,
        "question":  "Name something creepy that makes people scream.",
        "answers":  [
                        {
                            "text":  "spider/bug/worm",
                            "points":  46
                        },
                        {
                            "text":  "snake",
                            "points":  33
                        },
                        {
                            "text":  "rat/mouse",
                            "points":  7
                        },
                        {
                            "text":  "scary movie",
                            "points":  4
                        },
                        {
                            "text":  "ghost",
                            "points":  3
                        },
                        {
                            "text":  "zombie",
                            "points":  2
                        },
                        {
                            "text":  "costume/clown",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200194,
        "question":  "Fill in the blank: You can never have too much what?",
        "answers":  [
                        {
                            "text":  "money",
                            "points":  44
                        },
                        {
                            "text":  "fun/happiness",
                            "points":  25
                        },
                        {
                            "text":  "love",
                            "points":  10
                        },
                        {
                            "text":  "cooch/wang",
                            "points":  7
                        },
                        {
                            "text":  "ice cream/food",
                            "points":  7
                        },
                        {
                            "text":  "booze/peach schnapps",
                            "points":  2
                        },
                        {
                            "text":  "time",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200195,
        "question":  "Name something a little kid might blame on his imaginary friend.",
        "answers":  [
                        {
                            "text":  "broke something",
                            "points":  42
                        },
                        {
                            "text":  "made mess/spilled",
                            "points":  34
                        },
                        {
                            "text":  "ate cookies/snack",
                            "points":  9
                        },
                        {
                            "text":  "stole something",
                            "points":  4
                        },
                        {
                            "text":  "drew on walls",
                            "points":  4
                        },
                        {
                            "text":  "wet the bed",
                            "points":  2
                        },
                        {
                            "text":  "blew a butt bomb",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200196,
        "question":  "Name something you can tell your coworker was doing before work just by the smell.",
        "answers":  [
                        {
                            "text":  "smoking",
                            "points":  40
                        },
                        {
                            "text":  "drinkin' hooch",
                            "points":  32
                        },
                        {
                            "text":  "eating/tuna",
                            "points":  14
                        },
                        {
                            "text":  "sex/\"hiding salami\"",
                            "points":  3
                        },
                        {
                            "text":  "weed/meth",
                            "points":  3
                        },
                        {
                            "text":  "working out/swim'g",
                            "points":  3
                        },
                        {
                            "text":  "having coffee",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200197,
        "question":  "Name a part of a man that's a turnoff if it's dirty.",
        "answers":  [
                        {
                            "text":  "hands/fingernails",
                            "points":  40
                        },
                        {
                            "text":  "hair",
                            "points":  15
                        },
                        {
                            "text":  "face/beard",
                            "points":  14
                        },
                        {
                            "text":  "teeth",
                            "points":  11
                        },
                        {
                            "text":  "undies/clothes",
                            "points":  11
                        },
                        {
                            "text":  "richie & the gonads",
                            "points":  4
                        },
                        {
                            "text":  "feet",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200198,
        "question":  "Fill in the blank: If I only were what?",
        "answers":  [
                        {
                            "text":  "rich",
                            "points":  36
                        },
                        {
                            "text":  "skinny/thin",
                            "points":  21
                        },
                        {
                            "text":  "young/18 again",
                            "points":  13
                        },
                        {
                            "text":  "tall",
                            "points":  11
                        },
                        {
                            "text":  "smart/a genius",
                            "points":  11
                        },
                        {
                            "text":  "perfect",
                            "points":  3
                        },
                        {
                            "text":  "a bird",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200199,
        "question":  "We asked 100 men... Name a famous woman whose booty might be too much for your lap.",
        "answers":  [
                        {
                            "text":  "kim kardashian",
                            "points":  34
                        },
                        {
                            "text":  "jennifer lopez",
                            "points":  23
                        },
                        {
                            "text":  "beyonce",
                            "points":  16
                        },
                        {
                            "text":  "oprah winfrey",
                            "points":  11
                        },
                        {
                            "text":  "nicki minaj",
                            "points":  7
                        },
                        {
                            "text":  "rosie o'donnell",
                            "points":  3
                        },
                        {
                            "text":  "shakira",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200200,
        "question":  "We asked 100 married men... In a whisper, tell me a part of your wife that's bigger than it should be.",
        "answers":  [
                        {
                            "text":  "her jell-o booty",
                            "points":  34
                        },
                        {
                            "text":  "her belly",
                            "points":  17
                        },
                        {
                            "text":  "her big fat mouth",
                            "points":  16
                        },
                        {
                            "text":  "her brain",
                            "points":  9
                        },
                        {
                            "text":  "her thighs/legs",
                            "points":  8
                        },
                        {
                            "text":  "her heart",
                            "points":  7
                        },
                        {
                            "text":  "boobs/the left one",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  200201,
        "question":  "Name something about Abraham Lincoln that was long.",
        "answers":  [
                        {
                            "text":  "his beard",
                            "points":  33
                        },
                        {
                            "text":  "his hat",
                            "points":  27
                        },
                        {
                            "text":  "his legs/height",
                            "points":  19
                        },
                        {
                            "text":  "his face/nose",
                            "points":  6
                        },
                        {
                            "text":  "his speeches/tales",
                            "points":  6
                        },
                        {
                            "text":  "his coat",
                            "points":  3
                        },
                        {
                            "text":  "his name",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200202,
        "question":  "If your dog got into the Viagra, name something in your house that wouldn't be safe.",
        "answers":  [
                        {
                            "text":  "furniture/chair",
                            "points":  32
                        },
                        {
                            "text":  "legs/sexy hairy ones",
                            "points":  21
                        },
                        {
                            "text":  "stuffed animals",
                            "points":  13
                        },
                        {
                            "text":  "my sweet pussycat",
                            "points":  12
                        },
                        {
                            "text":  "pillows",
                            "points":  11
                        },
                        {
                            "text":  "my other dog",
                            "points":  4
                        },
                        {
                            "text":  "everything",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200203,
        "question":  "Fill in the blank: A perfect New Year's Eve could be ruined if you got home and threw up on your what?",
        "answers":  [
                        {
                            "text":  "bed",
                            "points":  28
                        },
                        {
                            "text":  "mate/their mouth",
                            "points":  25
                        },
                        {
                            "text":  "couch/sofa",
                            "points":  16
                        },
                        {
                            "text":  "clothes/self",
                            "points":  12
                        },
                        {
                            "text":  "carpet/floor",
                            "points":  10
                        },
                        {
                            "text":  "dog/pet",
                            "points":  4
                        },
                        {
                            "text":  "children",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200204,
        "question":  "Name a reason you would never drive your car in the nude.",
        "answers":  [
                        {
                            "text":  "cops/get arrested",
                            "points":  28
                        },
                        {
                            "text":  "hot, sticky seat",
                            "points":  21
                        },
                        {
                            "text":  "shy/people may see",
                            "points":  20
                        },
                        {
                            "text":  "too cold/icy nips",
                            "points":  17
                        },
                        {
                            "text":  "have/cause wreck",
                            "points":  5
                        },
                        {
                            "text":  "seat belt chafing",
                            "points":  4
                        },
                        {
                            "text":  "jabba the hutt body",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200205,
        "question":  "Name something a stripper might have a picture of on her business card.",
        "answers":  [
                        {
                            "text":  "her/her \"honeypot\"",
                            "points":  56
                        },
                        {
                            "text":  "lingerie/tassels",
                            "points":  12
                        },
                        {
                            "text":  "stripper pole",
                            "points":  11
                        },
                        {
                            "text":  "stilettos",
                            "points":  7
                        },
                        {
                            "text":  "an animal/duck",
                            "points":  6
                        },
                        {
                            "text":  "flowers/rose",
                            "points":  2
                        },
                        {
                            "text":  "$/dollar bill",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200206,
        "question":  "We asked 100 single women... Tell me a reason you might suspect the guy you're dating is a werewolf.",
        "answers":  [
                        {
                            "text":  "oddly hairy",
                            "points":  53
                        },
                        {
                            "text":  "no date if full moon",
                            "points":  21
                        },
                        {
                            "text":  "howls",
                            "points":  11
                        },
                        {
                            "text":  "has fleas",
                            "points":  4
                        },
                        {
                            "text":  "eats raw meat",
                            "points":  3
                        },
                        {
                            "text":  "bites me/hickeys",
                            "points":  2
                        },
                        {
                            "text":  "stays out all night",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200207,
        "question":  "We asked 100 married men... Name something of your wife's you might be holding in your hand.",
        "answers":  [
                        {
                            "text":  "her hand",
                            "points":  45
                        },
                        {
                            "text":  "the boobsy twins",
                            "points":  19
                        },
                        {
                            "text":  "her purse",
                            "points":  14
                        },
                        {
                            "text":  "her drink",
                            "points":  9
                        },
                        {
                            "text":  "her phone",
                            "points":  5
                        },
                        {
                            "text":  "her gun",
                            "points":  2
                        },
                        {
                            "text":  "her ring",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200208,
        "question":  "Fill in the blank: On the wedding night, the groom might want to see the bride wearing just her what?",
        "answers":  [
                        {
                            "text":  "b-day suit/smile",
                            "points":  44
                        },
                        {
                            "text":  "bra/panties",
                            "points":  17
                        },
                        {
                            "text":  "wedding ring",
                            "points":  11
                        },
                        {
                            "text":  "veil",
                            "points":  9
                        },
                        {
                            "text":  "teddy/nightie",
                            "points":  8
                        },
                        {
                            "text":  "garter belt",
                            "points":  4
                        },
                        {
                            "text":  "heels",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200209,
        "question":  "If a man had a \"get out of trouble with my wife\" card, he'd use it when he did what?",
        "answers":  [
                        {
                            "text":  "cheated/did her mom",
                            "points":  38
                        },
                        {
                            "text":  "forgot b-day/anniv.",
                            "points":  25
                        },
                        {
                            "text":  "was late/out late",
                            "points":  18
                        },
                        {
                            "text":  "got sloshed",
                            "points":  8
                        },
                        {
                            "text":  "lied",
                            "points":  3
                        },
                        {
                            "text":  "gambled/las vegas",
                            "points":  2
                        },
                        {
                            "text":  "eyeballed a babe",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200210,
        "question":  "Whether they admit it or not, women are always competing to see who has the best what?",
        "answers":  [
                        {
                            "text":  "body/bazongas",
                            "points":  36
                        },
                        {
                            "text":  "hair/weave",
                            "points":  20
                        },
                        {
                            "text":  "clothes/shoes",
                            "points":  17
                        },
                        {
                            "text":  "man/husband",
                            "points":  16
                        },
                        {
                            "text":  "house/decorations",
                            "points":  3
                        },
                        {
                            "text":  "life",
                            "points":  2
                        },
                        {
                            "text":  "kids",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200211,
        "question":  "Name a kind of place where every room is identical.",
        "answers":  [
                        {
                            "text":  "hotel/motel",
                            "points":  35
                        },
                        {
                            "text":  "hospital/asylum",
                            "points":  25
                        },
                        {
                            "text":  "jail/prison",
                            "points":  14
                        },
                        {
                            "text":  "school",
                            "points":  10
                        },
                        {
                            "text":  "doctor's office",
                            "points":  5
                        },
                        {
                            "text":  "morgue",
                            "points":  4
                        },
                        {
                            "text":  "nursing home",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200212,
        "question":  "At a really cheap hospital, name something patients could be forced to share.",
        "answers":  [
                        {
                            "text":  "room",
                            "points":  35
                        },
                        {
                            "text":  "bed",
                            "points":  24
                        },
                        {
                            "text":  "bathroom/toilet",
                            "points":  14
                        },
                        {
                            "text":  "gown",
                            "points":  8
                        },
                        {
                            "text":  "bedpan",
                            "points":  8
                        },
                        {
                            "text":  "tv",
                            "points":  4
                        },
                        {
                            "text":  "pillow",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200213,
        "question":  "Name something a wife would hate to see her ex-husband buy right after the divorce.",
        "answers":  [
                        {
                            "text":  "ferrari/car",
                            "points":  34
                        },
                        {
                            "text":  "engagement ring",
                            "points":  31
                        },
                        {
                            "text":  "house/next door",
                            "points":  18
                        },
                        {
                            "text":  "bride/mail-order",
                            "points":  6
                        },
                        {
                            "text":  "lola the street ho",
                            "points":  3
                        },
                        {
                            "text":  "clothes/a dress",
                            "points":  2
                        },
                        {
                            "text":  "boat",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200214,
        "question":  "Name something you'd find in Santa's sleigh that tells you he's been naughty.",
        "answers":  [
                        {
                            "text":  "lingerie/my mom's",
                            "points":  31
                        },
                        {
                            "text":  "booze/gin & juice",
                            "points":  14
                        },
                        {
                            "text":  "coal",
                            "points":  13
                        },
                        {
                            "text":  "sex toys/whip",
                            "points":  13
                        },
                        {
                            "text":  "nudie pix/flix",
                            "points":  12
                        },
                        {
                            "text":  "used condom/a dozen",
                            "points":  11
                        },
                        {
                            "text":  "bimbo/trampy elf",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200215,
        "question":  "Name something a woman would get that might suddenly make men interested in her.",
        "answers":  [
                        {
                            "text":  "va-va-voom bazooms",
                            "points":  55
                        },
                        {
                            "text":  "$$$/inheritance",
                            "points":  18
                        },
                        {
                            "text":  "her hair did",
                            "points":  6
                        },
                        {
                            "text":  "sexy duds/bikini",
                            "points":  6
                        },
                        {
                            "text":  "face-lift/eye job",
                            "points":  4
                        },
                        {
                            "text":  "a sporty ride",
                            "points":  3
                        },
                        {
                            "text":  "a thin bod",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200216,
        "question":  "Name something kids do during a tantrum that an adult might do when they're mad.",
        "answers":  [
                        {
                            "text":  "yell/cuss",
                            "points":  51
                        },
                        {
                            "text":  "throw things",
                            "points":  13
                        },
                        {
                            "text":  "cry/whine",
                            "points":  9
                        },
                        {
                            "text":  "hit/kick things",
                            "points":  8
                        },
                        {
                            "text":  "pout/sulk",
                            "points":  6
                        },
                        {
                            "text":  "stomp feet",
                            "points":  6
                        },
                        {
                            "text":  "turn red",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200217,
        "question":  "Name something or someone that entertains people by doing tricks.",
        "answers":  [
                        {
                            "text":  "magician",
                            "points":  47
                        },
                        {
                            "text":  "clown",
                            "points":  26
                        },
                        {
                            "text":  "dog",
                            "points":  14
                        },
                        {
                            "text":  "monkey",
                            "points":  2
                        },
                        {
                            "text":  "seal",
                            "points":  2
                        },
                        {
                            "text":  "hooker",
                            "points":  2
                        },
                        {
                            "text":  "juggler",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200218,
        "question":  "What's closest to you when you go to sleep at night?",
        "answers":  [
                        {
                            "text":  "bed/pillow/blanket",
                            "points":  41
                        },
                        {
                            "text":  "mate/2 of them",
                            "points":  25
                        },
                        {
                            "text":  "my trusty phone",
                            "points":  16
                        },
                        {
                            "text":  "my alarm clock",
                            "points":  6
                        },
                        {
                            "text":  "cuddly pooch/pet",
                            "points":  3
                        },
                        {
                            "text":  "my kid/adult son",
                            "points":  2
                        },
                        {
                            "text":  "teddy bear",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200219,
        "question":  "Name something a woman needs to be a biker babe.",
        "answers":  [
                        {
                            "text":  "leather clothes",
                            "points":  41
                        },
                        {
                            "text":  "tattoo",
                            "points":  17
                        },
                        {
                            "text":  "a bike",
                            "points":  13
                        },
                        {
                            "text":  "biker boyfriend",
                            "points":  12
                        },
                        {
                            "text":  "hot body/cha-chas",
                            "points":  8
                        },
                        {
                            "text":  "loose morals",
                            "points":  2
                        },
                        {
                            "text":  "attitude",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200220,
        "question":  "We asked 100 women... Name a kind of ball that's the shape of your breast.",
        "answers":  [
                        {
                            "text":  "softball/baseball",
                            "points":  39
                        },
                        {
                            "text":  "tennis ball",
                            "points":  18
                        },
                        {
                            "text":  "soccer ball",
                            "points":  13
                        },
                        {
                            "text":  "football",
                            "points":  9
                        },
                        {
                            "text":  "basketball",
                            "points":  8
                        },
                        {
                            "text":  "volleyball",
                            "points":  4
                        },
                        {
                            "text":  "ping-pong ball",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200221,
        "question":  "Name something a bald guy might put on his head for a night of romance.",
        "answers":  [
                        {
                            "text":  "hat/beanie",
                            "points":  36
                        },
                        {
                            "text":  "toupee/wig",
                            "points":  30
                        },
                        {
                            "text":  "oil/lotion",
                            "points":  12
                        },
                        {
                            "text":  "cologne/aftershave",
                            "points":  11
                        },
                        {
                            "text":  "bandana/do-rag",
                            "points":  2
                        },
                        {
                            "text":  "wax",
                            "points":  2
                        },
                        {
                            "text":  "condom",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200222,
        "question":  "Fill in the blank: The cannibal said, \"If what I'm saying isn't true, I'll eat my\" what?",
        "answers":  [
                        {
                            "text":  "myself/my nads",
                            "points":  70
                        },
                        {
                            "text":  "spouse/partner",
                            "points":  9
                        },
                        {
                            "text":  "brother/sister",
                            "points":  4
                        },
                        {
                            "text":  "clothes/hat",
                            "points":  4
                        },
                        {
                            "text":  "neighbor",
                            "points":  3
                        },
                        {
                            "text":  "mother",
                            "points":  2
                        },
                        {
                            "text":  "mother-in-law",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200223,
        "question":  "Name some bad news you would love to hear about a boss who fired you.",
        "answers":  [
                        {
                            "text":  "got canned too",
                            "points":  65
                        },
                        {
                            "text":  "lost biz/bankrupt",
                            "points":  8
                        },
                        {
                            "text":  "prison/embezzled",
                            "points":  6
                        },
                        {
                            "text":  "dead & buried",
                            "points":  5
                        },
                        {
                            "text":  "hurt/ill/syphilis",
                            "points":  5
                        },
                        {
                            "text":  "got divorced",
                            "points":  3
                        },
                        {
                            "text":  "got demoted",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200224,
        "question":  "Name a reason a man might say he prefers a chubby woman.",
        "answers":  [
                        {
                            "text":  "more curves/cushion",
                            "points":  55
                        },
                        {
                            "text":  "keeps him warm",
                            "points":  12
                        },
                        {
                            "text":  "he's tubby, too",
                            "points":  11
                        },
                        {
                            "text":  "big mama can cook",
                            "points":  6
                        },
                        {
                            "text":  "sweet/fun person",
                            "points":  4
                        },
                        {
                            "text":  "hot sex/dongologist",
                            "points":  3
                        },
                        {
                            "text":  "own wife is chubby",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200225,
        "question":  "Name something that's under Santa's red suit.",
        "answers":  [
                        {
                            "text":  "undies/long johns",
                            "points":  47
                        },
                        {
                            "text":  "body/jelly belly",
                            "points":  30
                        },
                        {
                            "text":  "t-shirt",
                            "points":  6
                        },
                        {
                            "text":  "pillow",
                            "points":  4
                        },
                        {
                            "text":  "body hair",
                            "points":  3
                        },
                        {
                            "text":  "socks",
                            "points":  2
                        },
                        {
                            "text":  "suspenders",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200226,
        "question":  "If a man ran out of deodorant, name a fruit he might rub under his pits to hide the odor.",
        "answers":  [
                        {
                            "text":  "orange",
                            "points":  38
                        },
                        {
                            "text":  "lemon",
                            "points":  35
                        },
                        {
                            "text":  "pineapple",
                            "points":  7
                        },
                        {
                            "text":  "apple",
                            "points":  7
                        },
                        {
                            "text":  "banana",
                            "points":  3
                        },
                        {
                            "text":  "lime",
                            "points":  2
                        },
                        {
                            "text":  "strawberry",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200227,
        "question":  "Name something a doctor does to patients that he'd have a hard time doing to himself.",
        "answers":  [
                        {
                            "text":  "tinker w/ stinker",
                            "points":  38
                        },
                        {
                            "text":  "inject/spinal tap",
                            "points":  20
                        },
                        {
                            "text":  "surgery/stitches",
                            "points":  15
                        },
                        {
                            "text":  "look in ears",
                            "points":  9
                        },
                        {
                            "text":  "give orders/advice",
                            "points":  5
                        },
                        {
                            "text":  "check throat",
                            "points":  4
                        },
                        {
                            "text":  "send big bill",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200228,
        "question":  "Name something a person might inflate for a wild party.",
        "answers":  [
                        {
                            "text":  "doll/blow-up betty",
                            "points":  37
                        },
                        {
                            "text":  "balloons",
                            "points":  35
                        },
                        {
                            "text":  "their ego/stories",
                            "points":  6
                        },
                        {
                            "text":  "pool float/tube",
                            "points":  6
                        },
                        {
                            "text":  "pool/hot tub",
                            "points":  4
                        },
                        {
                            "text":  "condoms",
                            "points":  3
                        },
                        {
                            "text":  "bounce house",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200229,
        "question":  "We asked 100 men... Name something dogs do that you'd hate to hear you did when you were really drunk.",
        "answers":  [
                        {
                            "text":  "public whiz/dump",
                            "points":  36
                        },
                        {
                            "text":  "humped/dude's leg",
                            "points":  20
                        },
                        {
                            "text":  "licked self/someone",
                            "points":  19
                        },
                        {
                            "text":  "drank from toilet",
                            "points":  6
                        },
                        {
                            "text":  "howled",
                            "points":  5
                        },
                        {
                            "text":  "ate poop",
                            "points":  5
                        },
                        {
                            "text":  "bit someone",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200230,
        "question":  "Name something you might get hit by if a fight broke out at the old folks' bingo parlor.",
        "answers":  [
                        {
                            "text":  "cane/walker",
                            "points":  35
                        },
                        {
                            "text":  "false teeth",
                            "points":  28
                        },
                        {
                            "text":  "marker/dauber",
                            "points":  11
                        },
                        {
                            "text":  "bingo chips",
                            "points":  11
                        },
                        {
                            "text":  "purse",
                            "points":  5
                        },
                        {
                            "text":  "pen/pencil",
                            "points":  2
                        },
                        {
                            "text":  "bingo card",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200231,
        "question":  "We asked 100 married men... Name a reason you don't worry about your wife ever leaving you.",
        "answers":  [
                        {
                            "text":  "i'm rich",
                            "points":  33
                        },
                        {
                            "text":  "she loves me",
                            "points":  28
                        },
                        {
                            "text":  "vows/committed",
                            "points":  11
                        },
                        {
                            "text":  "i rock in the sack",
                            "points":  7
                        },
                        {
                            "text":  "i'm nice/best pals",
                            "points":  6
                        },
                        {
                            "text":  "we're geezers",
                            "points":  5
                        },
                        {
                            "text":  "our pimpin' house",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200232,
        "question":  "Name something a ten-foot man would have to get on his knees to do to his wife.",
        "answers":  [
                        {
                            "text":  "make out",
                            "points":  59
                        },
                        {
                            "text":  "noodle her nah-nah",
                            "points":  9
                        },
                        {
                            "text":  "hug her",
                            "points":  8
                        },
                        {
                            "text":  "dance",
                            "points":  8
                        },
                        {
                            "text":  "look into her eyes",
                            "points":  5
                        },
                        {
                            "text":  "clean the floors",
                            "points":  2
                        },
                        {
                            "text":  "talk to her",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200233,
        "question":  "Name a food starting with \"hot\" that would be a good name for a stripper.",
        "answers":  [
                        {
                            "text":  "hot tamale",
                            "points":  51
                        },
                        {
                            "text":  "hot pepper",
                            "points":  27
                        },
                        {
                            "text":  "hot dog",
                            "points":  4
                        },
                        {
                            "text":  "hot sauce",
                            "points":  4
                        },
                        {
                            "text":  "hot chili",
                            "points":  3
                        },
                        {
                            "text":  "hot buns",
                            "points":  2
                        },
                        {
                            "text":  "hot chocolate",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200234,
        "question":  "Name something a man pretends to like so a woman will think he's sensitive.",
        "answers":  [
                        {
                            "text":  "sappy flick/tv",
                            "points":  51
                        },
                        {
                            "text":  "animals/puppies",
                            "points":  14
                        },
                        {
                            "text":  "kids/babies",
                            "points":  13
                        },
                        {
                            "text":  "the arts/poetry",
                            "points":  5
                        },
                        {
                            "text":  "talking/listening",
                            "points":  4
                        },
                        {
                            "text":  "shopping",
                            "points":  4
                        },
                        {
                            "text":  "cooking/her cook'g",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200235,
        "question":  "Name something a bunch of single girlfriends might do to make it a great Valentine's Day.",
        "answers":  [
                        {
                            "text":  "drink/club/party",
                            "points":  49
                        },
                        {
                            "text":  "eat/go to dinner",
                            "points":  26
                        },
                        {
                            "text":  "hit strip joint",
                            "points":  7
                        },
                        {
                            "text":  "see movie/50 shades",
                            "points":  5
                        },
                        {
                            "text":  "throw orgy",
                            "points":  2
                        },
                        {
                            "text":  "dress up/lingerie",
                            "points":  2
                        },
                        {
                            "text":  "game/pillow fight",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200236,
        "question":  "Name something Hugh Hefner's kid might bring to school for show and tell.",
        "answers":  [
                        {
                            "text":  "playboy magazine",
                            "points":  42
                        },
                        {
                            "text":  "playmate/bunny",
                            "points":  24
                        },
                        {
                            "text":  "bunny ears/tail",
                            "points":  9
                        },
                        {
                            "text":  "lingerie/panties",
                            "points":  9
                        },
                        {
                            "text":  "pop's robe/jacket",
                            "points":  4
                        },
                        {
                            "text":  "sex toys",
                            "points":  3
                        },
                        {
                            "text":  "cash stash",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200237,
        "question":  "Name a place people go to take care of business.",
        "answers":  [
                        {
                            "text":  "bathroom/poo palace",
                            "points":  37
                        },
                        {
                            "text":  "the bank",
                            "points":  36
                        },
                        {
                            "text":  "work/office",
                            "points":  12
                        },
                        {
                            "text":  "hotel/motel",
                            "points":  2
                        },
                        {
                            "text":  "restaurant",
                            "points":  2
                        },
                        {
                            "text":  "court",
                            "points":  2
                        },
                        {
                            "text":  "bar",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200238,
        "question":  "Name something that you buy and hope you never have to use.",
        "answers":  [
                        {
                            "text":  "insurance",
                            "points":  37
                        },
                        {
                            "text":  "fire extinguisher",
                            "points":  20
                        },
                        {
                            "text":  "gun",
                            "points":  18
                        },
                        {
                            "text":  "1st aid kit/meds",
                            "points":  9
                        },
                        {
                            "text":  "coffin/plot",
                            "points":  3
                        },
                        {
                            "text":  "generator",
                            "points":  3
                        },
                        {
                            "text":  "toilet plunger",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200239,
        "question":  "If goldfish could talk, name something they might complain about.",
        "answers":  [
                        {
                            "text":  "dirty water/poo",
                            "points":  32
                        },
                        {
                            "text":  "tiny bowl/cramped",
                            "points":  21
                        },
                        {
                            "text":  "no food/food sucks",
                            "points":  17
                        },
                        {
                            "text":  "water temperature",
                            "points":  13
                        },
                        {
                            "text":  "the view/scenery",
                            "points":  4
                        },
                        {
                            "text":  "too dark/light",
                            "points":  3
                        },
                        {
                            "text":  "too many chemicals",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200240,
        "question":  "Name something a kindergartner sticks up his nose.",
        "answers":  [
                        {
                            "text":  "crayon",
                            "points":  31
                        },
                        {
                            "text":  "his finger",
                            "points":  26
                        },
                        {
                            "text":  "pencil",
                            "points":  17
                        },
                        {
                            "text":  "produce/broccoli",
                            "points":  10
                        },
                        {
                            "text":  "toy/lego",
                            "points":  4
                        },
                        {
                            "text":  "eraser",
                            "points":  3
                        },
                        {
                            "text":  "candy/jelly bean",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200241,
        "question":  "Name a nosy question you'll answer but not tell the truth.",
        "answers":  [
                        {
                            "text":  "money/income?",
                            "points":  24
                        },
                        {
                            "text":  "whadda u weigh?",
                            "points":  23
                        },
                        {
                            "text":  "how old are ya?",
                            "points":  21
                        },
                        {
                            "text":  "sex life/partners?",
                            "points":  16
                        },
                        {
                            "text":  "are you happy?",
                            "points":  4
                        },
                        {
                            "text":  "are you single?",
                            "points":  3
                        },
                        {
                            "text":  "been arrested?",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200242,
        "question":  "Name something God might forgive a man for doing but a woman might not.",
        "answers":  [
                        {
                            "text":  "cheating/man-slut",
                            "points":  73
                        },
                        {
                            "text":  "lying",
                            "points":  6
                        },
                        {
                            "text":  "farting/during sex",
                            "points":  3
                        },
                        {
                            "text":  "forgetting b-day",
                            "points":  3
                        },
                        {
                            "text":  "looking at women",
                            "points":  3
                        },
                        {
                            "text":  "drinking",
                            "points":  2
                        },
                        {
                            "text":  "burping his worm",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200243,
        "question":  "Name something an astronaut doesn't want to see floating around the spaceship.",
        "answers":  [
                        {
                            "text":  "pee/turdzilla",
                            "points":  61
                        },
                        {
                            "text":  "food/drink/water",
                            "points":  16
                        },
                        {
                            "text":  "puke",
                            "points":  5
                        },
                        {
                            "text":  "hardware/parts",
                            "points":  3
                        },
                        {
                            "text":  "used toilet paper",
                            "points":  3
                        },
                        {
                            "text":  "person/gary busey",
                            "points":  2
                        },
                        {
                            "text":  "asteroid/rock",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200244,
        "question":  "Fill in the blank: A dog is a man's best friend because unlike a woman, he never what?",
        "answers":  [
                        {
                            "text":  "talks/nags",
                            "points":  61
                        },
                        {
                            "text":  "spends/needs $",
                            "points":  7
                        },
                        {
                            "text":  "leaves/divorces",
                            "points":  7
                        },
                        {
                            "text":  "gets mad/pulls gun",
                            "points":  7
                        },
                        {
                            "text":  "betrays/cheats",
                            "points":  5
                        },
                        {
                            "text":  "ignores me/in bed",
                            "points":  3
                        },
                        {
                            "text":  "judges me",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200245,
        "question":  "We asked 100 men... Name an animal that's more well-endowed than you.",
        "answers":  [
                        {
                            "text":  "horse",
                            "points":  56
                        },
                        {
                            "text":  "elephant",
                            "points":  13
                        },
                        {
                            "text":  "dog/chihuahua",
                            "points":  7
                        },
                        {
                            "text":  "lion",
                            "points":  6
                        },
                        {
                            "text":  "whale",
                            "points":  5
                        },
                        {
                            "text":  "bull",
                            "points":  3
                        },
                        {
                            "text":  "donkey",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200246,
        "question":  "Name something you'd hate to see your dog standing next to when he lifts his leg.",
        "answers":  [
                        {
                            "text":  "me/a person",
                            "points":  55
                        },
                        {
                            "text":  "couch/furniture",
                            "points":  10
                        },
                        {
                            "text":  "electric fence/wire",
                            "points":  8
                        },
                        {
                            "text":  "car/cop car",
                            "points":  7
                        },
                        {
                            "text":  "my clothes/shoes",
                            "points":  5
                        },
                        {
                            "text":  "animal/my cat",
                            "points":  4
                        },
                        {
                            "text":  "my computer",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200247,
        "question":  "Name something couples hide from each other.",
        "answers":  [
                        {
                            "text":  "money/bank acct.",
                            "points":  43
                        },
                        {
                            "text":  "past/present lovers",
                            "points":  14
                        },
                        {
                            "text":  "bills/purchases",
                            "points":  13
                        },
                        {
                            "text":  "gifts",
                            "points":  10
                        },
                        {
                            "text":  "food/food addiction",
                            "points":  5
                        },
                        {
                            "text":  "their bodies/fat",
                            "points":  4
                        },
                        {
                            "text":  "true feelings",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200248,
        "question":  "We asked 100 women... Name something a dog does that would be obnoxious for your date to do.",
        "answers":  [
                        {
                            "text":  "sniff/my butt",
                            "points":  41
                        },
                        {
                            "text":  "beg/for food",
                            "points":  16
                        },
                        {
                            "text":  "lick self/own wang",
                            "points":  13
                        },
                        {
                            "text":  "hump my leg",
                            "points":  9
                        },
                        {
                            "text":  "lick me/slobber",
                            "points":  6
                        },
                        {
                            "text":  "fart",
                            "points":  4
                        },
                        {
                            "text":  "pant",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200249,
        "question":  "Name something a woman would like to give her husband when he's acting like a child.",
        "answers":  [
                        {
                            "text":  "pacifier/binky",
                            "points":  39
                        },
                        {
                            "text":  "slap/spank/bare butt",
                            "points":  21
                        },
                        {
                            "text":  "time-out",
                            "points":  15
                        },
                        {
                            "text":  "bottle",
                            "points":  6
                        },
                        {
                            "text":  "candy/sucker",
                            "points":  5
                        },
                        {
                            "text":  "the door/divorce",
                            "points":  4
                        },
                        {
                            "text":  "rattle",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200250,
        "question":  "Name a reason a rich man takes his blind date to a fast-food restaurant.",
        "answers":  [
                        {
                            "text":  "he's cheap/stingy",
                            "points":  38
                        },
                        {
                            "text":  "test/gold digger?",
                            "points":  15
                        },
                        {
                            "text":  "she's ugly/easy out",
                            "points":  14
                        },
                        {
                            "text":  "in a hurry/to score",
                            "points":  7
                        },
                        {
                            "text":  "hide his wealth",
                            "points":  7
                        },
                        {
                            "text":  "he owns it",
                            "points":  6
                        },
                        {
                            "text":  "he/she likes it",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  200251,
        "question":  "Before a man goes to prison, what might he do to make himself really unattractive?",
        "answers":  [
                        {
                            "text":  "get porky",
                            "points":  31
                        },
                        {
                            "text":  "bad hair/shave head",
                            "points":  17
                        },
                        {
                            "text":  "grow scraggly beard",
                            "points":  16
                        },
                        {
                            "text":  "stab self/scars",
                            "points":  9
                        },
                        {
                            "text":  "get tattoo/on face",
                            "points":  8
                        },
                        {
                            "text":  "stop bathing",
                            "points":  7
                        },
                        {
                            "text":  "get rash/sore/std",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200252,
        "question":  "Women like to share clothes with their friends. What do men like to share?",
        "answers":  [
                        {
                            "text":  "beer/booze",
                            "points":  29
                        },
                        {
                            "text":  "good story/lie",
                            "points":  22
                        },
                        {
                            "text":  "tools",
                            "points":  16
                        },
                        {
                            "text":  "women/hookers",
                            "points":  9
                        },
                        {
                            "text":  "video games",
                            "points":  8
                        },
                        {
                            "text":  "tips/advice",
                            "points":  4
                        },
                        {
                            "text":  "sporting equipment",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200253,
        "question":  "Name something a guy should never say about an ex-girlfriend to his current girlfriend.",
        "answers":  [
                        {
                            "text":  "best. sex. ever.",
                            "points":  28
                        },
                        {
                            "text":  "hot bod/much thinner",
                            "points":  19
                        },
                        {
                            "text":  "face of an angel",
                            "points":  16
                        },
                        {
                            "text":  "anything/her name",
                            "points":  11
                        },
                        {
                            "text":  "love/miss/\"the one\"",
                            "points":  9
                        },
                        {
                            "text":  "good person/fun",
                            "points":  5
                        },
                        {
                            "text":  "total nutjob/wench",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200254,
        "question":  "Fill in the blank: Lady ________.",
        "answers":  [
                        {
                            "text":  "lady gaga",
                            "points":  27
                        },
                        {
                            "text":  "lady luck",
                            "points":  24
                        },
                        {
                            "text":  "lady godiva",
                            "points":  18
                        },
                        {
                            "text":  "ladybug",
                            "points":  13
                        },
                        {
                            "text":  "lady-killer",
                            "points":  4
                        },
                        {
                            "text":  "lady marmalade",
                            "points":  3
                        },
                        {
                            "text":  "lady parts",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200255,
        "question":  "We asked 100 women... Name something about your panties that's different from your man's underwear.",
        "answers":  [
                        {
                            "text":  "they're lacy",
                            "points":  27
                        },
                        {
                            "text":  "size/smaller",
                            "points":  17
                        },
                        {
                            "text":  "the color",
                            "points":  12
                        },
                        {
                            "text":  "the cut/shape",
                            "points":  12
                        },
                        {
                            "text":  "no fly",
                            "points":  9
                        },
                        {
                            "text":  "brand/vic. secret",
                            "points":  9
                        },
                        {
                            "text":  "no rips/holes",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  200256,
        "question":  "Name something that's rude for a shrink to do while a patient tells them their problems.",
        "answers":  [
                        {
                            "text":  "nod off/snore",
                            "points":  25
                        },
                        {
                            "text":  "yawn",
                            "points":  22
                        },
                        {
                            "text":  "laugh hysterically",
                            "points":  18
                        },
                        {
                            "text":  "use/talk on phone",
                            "points":  17
                        },
                        {
                            "text":  "interrupt/time's up",
                            "points":  6
                        },
                        {
                            "text":  "eat/lobster",
                            "points":  2
                        },
                        {
                            "text":  "trim their nails",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200257,
        "question":  "We asked 100 men... Name something about a woman that might remind you of a cavewoman.",
        "answers":  [
                        {
                            "text":  "hair/her goatee",
                            "points":  65
                        },
                        {
                            "text":  "grunts/noises/in bed",
                            "points":  7
                        },
                        {
                            "text":  "cooking/pounds meat",
                            "points":  6
                        },
                        {
                            "text":  "temper/yelling",
                            "points":  5
                        },
                        {
                            "text":  "big/nasty feet",
                            "points":  3
                        },
                        {
                            "text":  "clothes/leopard bra",
                            "points":  3
                        },
                        {
                            "text":  "stubborn/attitude",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200258,
        "question":  "We asked 100 men... Name something specific you love to watch another man do.",
        "answers":  [
                        {
                            "text":  "sports/fight/box",
                            "points":  64
                        },
                        {
                            "text":  "work/my job",
                            "points":  7
                        },
                        {
                            "text":  "fail/with a chick",
                            "points":  6
                        },
                        {
                            "text":  "drink beer",
                            "points":  5
                        },
                        {
                            "text":  "fix/pimp a car",
                            "points":  3
                        },
                        {
                            "text":  "catch a fish",
                            "points":  3
                        },
                        {
                            "text":  "run/in slo-mo",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200259,
        "question":  "Name something a woman might make a man show her before she'll marry him.",
        "answers":  [
                        {
                            "text":  "finances/wallet",
                            "points":  46
                        },
                        {
                            "text":  "a ring",
                            "points":  16
                        },
                        {
                            "text":  "his digs/room",
                            "points":  8
                        },
                        {
                            "text":  "love/devotion",
                            "points":  8
                        },
                        {
                            "text":  "his bod/\"dong juan\"",
                            "points":  7
                        },
                        {
                            "text":  "his family",
                            "points":  4
                        },
                        {
                            "text":  "his car",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200260,
        "question":  "Name a place you wouldn't want your boss to know you're texting her from.",
        "answers":  [
                        {
                            "text":  "bathroom/crapper",
                            "points":  45
                        },
                        {
                            "text":  "bar",
                            "points":  15
                        },
                        {
                            "text":  "strip joint",
                            "points":  11
                        },
                        {
                            "text":  "my house/hers",
                            "points":  9
                        },
                        {
                            "text":  "golf course",
                            "points":  4
                        },
                        {
                            "text":  "mall",
                            "points":  4
                        },
                        {
                            "text":  "a party",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200261,
        "question":  "We asked 100 women... What might a blind date conveniently forget to mention about himself?",
        "answers":  [
                        {
                            "text":  "married/taken",
                            "points":  44
                        },
                        {
                            "text":  "no job/no moolah",
                            "points":  17
                        },
                        {
                            "text":  "weight/looks preg",
                            "points":  9
                        },
                        {
                            "text":  "age/he's 90-ish",
                            "points":  7
                        },
                        {
                            "text":  "was in prison/twice",
                            "points":  6
                        },
                        {
                            "text":  "has kids/a dozen",
                            "points":  4
                        },
                        {
                            "text":  "prefers fellas",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200262,
        "question":  "Name something a bald man might object to someone doing to his head.",
        "answers":  [
                        {
                            "text":  "rub it/touch it",
                            "points":  43
                        },
                        {
                            "text":  "draw/paint/write",
                            "points":  31
                        },
                        {
                            "text":  "tattoo it",
                            "points":  5
                        },
                        {
                            "text":  "wax/shine it",
                            "points":  5
                        },
                        {
                            "text":  "shave it",
                            "points":  3
                        },
                        {
                            "text":  "slap it",
                            "points":  2
                        },
                        {
                            "text":  "look at/reflection",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200263,
        "question":  "We asked 100 women... Name a way you like desserts and your men.",
        "answers":  [
                        {
                            "text":  "sweet",
                            "points":  41
                        },
                        {
                            "text":  "rich",
                            "points":  16
                        },
                        {
                            "text":  "delicious",
                            "points":  10
                        },
                        {
                            "text":  "hot",
                            "points":  8
                        },
                        {
                            "text":  "warm",
                            "points":  8
                        },
                        {
                            "text":  "good looking",
                            "points":  5
                        },
                        {
                            "text":  "dripping chocolate",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200264,
        "question":  "After the groom was a no-show, name something the bride did to the little groom on top of the wedding cake.",
        "answers":  [
                        {
                            "text":  "smashed/broke it",
                            "points":  40
                        },
                        {
                            "text":  "stab/chop/blender",
                            "points":  14
                        },
                        {
                            "text":  "threw it",
                            "points":  13
                        },
                        {
                            "text":  "bit/ate it",
                            "points":  8
                        },
                        {
                            "text":  "set it on fire",
                            "points":  7
                        },
                        {
                            "text":  "tossed in trash",
                            "points":  5
                        },
                        {
                            "text":  "choked it",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200265,
        "question":  "Name a place a man would never want to run into his wife's best friend.",
        "answers":  [
                        {
                            "text":  "strip joint",
                            "points":  38
                        },
                        {
                            "text":  "bar/club",
                            "points":  26
                        },
                        {
                            "text":  "hotel/motel",
                            "points":  12
                        },
                        {
                            "text":  "bathroom/stall",
                            "points":  5
                        },
                        {
                            "text":  "big bertha's brothel",
                            "points":  4
                        },
                        {
                            "text":  "store/vic's secret",
                            "points":  3
                        },
                        {
                            "text":  "bed/under his sheet",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200266,
        "question":  "Name something you might wait to do in a movie theater until the lights go out.",
        "answers":  [
                        {
                            "text":  "eat/smuggled food",
                            "points":  36
                        },
                        {
                            "text":  "kiss/a stranger",
                            "points":  34
                        },
                        {
                            "text":  "turn off phone",
                            "points":  7
                        },
                        {
                            "text":  "surf web/phone app",
                            "points":  6
                        },
                        {
                            "text":  "pick tasty booger",
                            "points":  4
                        },
                        {
                            "text":  "sleep",
                            "points":  2
                        },
                        {
                            "text":  "wink my sphinc/fart",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200267,
        "question":  "Name something a bad grandma carries around in her purse.",
        "answers":  [
                        {
                            "text":  "a gun",
                            "points":  36
                        },
                        {
                            "text":  "booze/mad dog 20/20",
                            "points":  15
                        },
                        {
                            "text":  "dope/to sell",
                            "points":  13
                        },
                        {
                            "text":  "mace/pepper spray",
                            "points":  10
                        },
                        {
                            "text":  "virginia slims",
                            "points":  9
                        },
                        {
                            "text":  "paddle/switch",
                            "points":  4
                        },
                        {
                            "text":  "poison",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200268,
        "question":  "We asked 100 single women... If you had a first aid kit for when you get dumped by a man, what would be in it?",
        "answers":  [
                        {
                            "text":  "booze",
                            "points":  35
                        },
                        {
                            "text":  "sweets/ice cream",
                            "points":  29
                        },
                        {
                            "text":  "band-aid for heart",
                            "points":  9
                        },
                        {
                            "text":  "much finer man",
                            "points":  8
                        },
                        {
                            "text":  "netflix subscription",
                            "points":  4
                        },
                        {
                            "text":  "tissues",
                            "points":  4
                        },
                        {
                            "text":  "cash/stolen from him",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200269,
        "question":  "Name the worst thing a person can fall out of.",
        "answers":  [
                        {
                            "text":  "a plane",
                            "points":  35
                        },
                        {
                            "text":  "love",
                            "points":  27
                        },
                        {
                            "text":  "building/window",
                            "points":  10
                        },
                        {
                            "text":  "a tree",
                            "points":  7
                        },
                        {
                            "text":  "a car",
                            "points":  6
                        },
                        {
                            "text":  "favor/grace",
                            "points":  3
                        },
                        {
                            "text":  "hot air balloon",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200270,
        "question":  "Name something women fall in love with besides men.",
        "answers":  [
                        {
                            "text":  "animals/horses",
                            "points":  28
                        },
                        {
                            "text":  "shoes/clothes",
                            "points":  20
                        },
                        {
                            "text":  "babies/children",
                            "points":  15
                        },
                        {
                            "text":  "money/bank acct.",
                            "points":  11
                        },
                        {
                            "text":  "chocolate/candy",
                            "points":  9
                        },
                        {
                            "text":  "diamonds/jewelry",
                            "points":  4
                        },
                        {
                            "text":  "babealicious chicks",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200271,
        "question":  "We asked 100 women... Name something men think is sexy on a woman but you think is trashy.",
        "answers":  [
                        {
                            "text":  "lingerie/thong",
                            "points":  26
                        },
                        {
                            "text":  "tattoo/tramp stamp",
                            "points":  20
                        },
                        {
                            "text":  "cleavage/fake rack",
                            "points":  20
                        },
                        {
                            "text":  "miniskirt",
                            "points":  9
                        },
                        {
                            "text":  "hooker heels",
                            "points":  7
                        },
                        {
                            "text":  "bubble butt",
                            "points":  5
                        },
                        {
                            "text":  "makeup/lipstick",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200272,
        "question":  "We asked 100 married men... Making love to your wife is like playing what instrument?",
        "answers":  [
                        {
                            "text":  "violin/fiddle",
                            "points":  26
                        },
                        {
                            "text":  "piano",
                            "points":  20
                        },
                        {
                            "text":  "drums/bongos",
                            "points":  18
                        },
                        {
                            "text":  "guitar",
                            "points":  17
                        },
                        {
                            "text":  "trombone",
                            "points":  4
                        },
                        {
                            "text":  "upright bass",
                            "points":  3
                        },
                        {
                            "text":  "tuba",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200273,
        "question":  "Name something a pirate has on his ship for all those lonely nights at sea.",
        "answers":  [
                        {
                            "text":  "arrr, rum/booze",
                            "points":  42
                        },
                        {
                            "text":  "parrot/pet",
                            "points":  22
                        },
                        {
                            "text":  "wench/studly mate",
                            "points":  11
                        },
                        {
                            "text":  "book",
                            "points":  7
                        },
                        {
                            "text":  "hot pics/porn",
                            "points":  4
                        },
                        {
                            "text":  "oil/lotion/lube",
                            "points":  2
                        },
                        {
                            "text":  "blow-up doll",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200274,
        "question":  "Fill in the blank: Grandma may have shrunk as she's gotten older, but she still has a big what?",
        "answers":  [
                        {
                            "text":  "heart",
                            "points":  39
                        },
                        {
                            "text":  "bootay",
                            "points":  17
                        },
                        {
                            "text":  "mouth",
                            "points":  13
                        },
                        {
                            "text":  "ego/attitude",
                            "points":  10
                        },
                        {
                            "text":  "belly",
                            "points":  5
                        },
                        {
                            "text":  "hairdo/wig",
                            "points":  3
                        },
                        {
                            "text":  "rack",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200275,
        "question":  "Name something that the worse it smells, the more dogs love it.",
        "answers":  [
                        {
                            "text":  "food/dog food",
                            "points":  33
                        },
                        {
                            "text":  "poop/cat turds",
                            "points":  23
                        },
                        {
                            "text":  "garbage",
                            "points":  12
                        },
                        {
                            "text":  "dogs/butts",
                            "points":  8
                        },
                        {
                            "text":  "dead animal",
                            "points":  6
                        },
                        {
                            "text":  "people/belly button",
                            "points":  4
                        },
                        {
                            "text":  "bones",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200276,
        "question":  "If you knew the day you were going to die, what would you do a lot of the day before?",
        "answers":  [
                        {
                            "text":  "see loved ones",
                            "points":  33
                        },
                        {
                            "text":  "eat/sushi",
                            "points":  14
                        },
                        {
                            "text":  "pray",
                            "points":  14
                        },
                        {
                            "text":  "pokin-hontas",
                            "points":  13
                        },
                        {
                            "text":  "travel/sightsee",
                            "points":  6
                        },
                        {
                            "text":  "drink/party up",
                            "points":  6
                        },
                        {
                            "text":  "spend/give $",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200277,
        "question":  "If love were really blind, name something disgusting your spouse does that you wouldn't notice.",
        "answers":  [
                        {
                            "text":  "butt cheek squeak",
                            "points":  27
                        },
                        {
                            "text":  "pick nose & look",
                            "points":  25
                        },
                        {
                            "text":  "burp",
                            "points":  15
                        },
                        {
                            "text":  "eat loud/mouth open",
                            "points":  11
                        },
                        {
                            "text":  "scratch self",
                            "points":  7
                        },
                        {
                            "text":  "won't tip anyone",
                            "points":  3
                        },
                        {
                            "text":  "pluck body hair",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200278,
        "question":  "If women grew beards, what would they do to them to make them look pretty?",
        "answers":  [
                        {
                            "text":  "dye/highlights",
                            "points":  27
                        },
                        {
                            "text":  "braid",
                            "points":  24
                        },
                        {
                            "text":  "shave/trim",
                            "points":  15
                        },
                        {
                            "text":  "bows/ribbons",
                            "points":  13
                        },
                        {
                            "text":  "curl",
                            "points":  7
                        },
                        {
                            "text":  "put beads in them",
                            "points":  2
                        },
                        {
                            "text":  "add flowers",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200279,
        "question":  "We asked 100 married men... The good news is, your wife is an animal in bed. The bad news is, the animal is a what?",
        "answers":  [
                        {
                            "text":  "dog",
                            "points":  21
                        },
                        {
                            "text":  "pig",
                            "points":  15
                        },
                        {
                            "text":  "cat/feral cat",
                            "points":  14
                        },
                        {
                            "text":  "fish/a dead one",
                            "points":  12
                        },
                        {
                            "text":  "cheetah",
                            "points":  11
                        },
                        {
                            "text":  "gorilla",
                            "points":  9
                        },
                        {
                            "text":  "tiger",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  200280,
        "question":  "Name a place a couple meets but they wouldn't want their wedding to be held there.",
        "answers":  [
                        {
                            "text":  "bar/club",
                            "points":  69
                        },
                        {
                            "text":  "eatery/applebee's",
                            "points":  5
                        },
                        {
                            "text":  "online/xxx webcam",
                            "points":  4
                        },
                        {
                            "text":  "work/office",
                            "points":  4
                        },
                        {
                            "text":  "park",
                            "points":  3
                        },
                        {
                            "text":  "store/tj maxx",
                            "points":  2
                        },
                        {
                            "text":  "jail/prison",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200281,
        "question":  "Tell me a gift vampires probably give to each other at Christmas.",
        "answers":  [
                        {
                            "text":  "blood",
                            "points":  64
                        },
                        {
                            "text":  "coffin",
                            "points":  7
                        },
                        {
                            "text":  "hickey",
                            "points":  7
                        },
                        {
                            "text":  "cape",
                            "points":  5
                        },
                        {
                            "text":  "a human",
                            "points":  2
                        },
                        {
                            "text":  "toothbrush",
                            "points":  2
                        },
                        {
                            "text":  "sunglasses",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200282,
        "question":  "If you're in grandpa's will, what would you hate to see him spending money on?",
        "answers":  [
                        {
                            "text":  "women/strippers",
                            "points":  44
                        },
                        {
                            "text":  "gambling/lotto",
                            "points":  19
                        },
                        {
                            "text":  "nothing/it's his",
                            "points":  12
                        },
                        {
                            "text":  "booze/prune vodka",
                            "points":  6
                        },
                        {
                            "text":  "scams",
                            "points":  4
                        },
                        {
                            "text":  "cigarettes/tobacco",
                            "points":  2
                        },
                        {
                            "text":  "fancy new house",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200283,
        "question":  "Name something that would be very bad for Santa to lose.",
        "answers":  [
                        {
                            "text":  "his sleigh",
                            "points":  44
                        },
                        {
                            "text":  "his sack/gifts",
                            "points":  17
                        },
                        {
                            "text":  "reindeer/rudolph",
                            "points":  10
                        },
                        {
                            "text":  "nice/naughty list",
                            "points":  7
                        },
                        {
                            "text":  "his way/my address",
                            "points":  4
                        },
                        {
                            "text":  "his keys",
                            "points":  4
                        },
                        {
                            "text":  "weight",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200284,
        "question":  "Name something you'd be absolutely shocked to hear that Steve Harvey was wearing under his dapper suit.",
        "answers":  [
                        {
                            "text":  "bra/panties",
                            "points":  35
                        },
                        {
                            "text":  "man thong/butt floss",
                            "points":  19
                        },
                        {
                            "text":  "huggies",
                            "points":  18
                        },
                        {
                            "text":  "long johns",
                            "points":  7
                        },
                        {
                            "text":  "superhero costume",
                            "points":  4
                        },
                        {
                            "text":  "bulletproof vest",
                            "points":  3
                        },
                        {
                            "text":  "girdle/spanx",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200285,
        "question":  "We asked 100 women... Name something you see in your boyfriend's bedroom which makes you realize he's too young for marriage.",
        "answers":  [
                        {
                            "text":  "action figs/toys",
                            "points":  33
                        },
                        {
                            "text":  "video games/xbox",
                            "points":  14
                        },
                        {
                            "text":  "comic books",
                            "points":  13
                        },
                        {
                            "text":  "posters/miley cyrus",
                            "points":  10
                        },
                        {
                            "text":  "dirty laundry",
                            "points":  8
                        },
                        {
                            "text":  "mom's pic/over bed",
                            "points":  6
                        },
                        {
                            "text":  "food/moldy pizza",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  200286,
        "question":  "We asked 100 men... What would you hate to see the doctor holding right before he circumcises you?",
        "answers":  [
                        {
                            "text":  "knife/butter knife",
                            "points":  32
                        },
                        {
                            "text":  "beer/cocktail",
                            "points":  30
                        },
                        {
                            "text":  "scissors",
                            "points":  12
                        },
                        {
                            "text":  "saw/chainsaw",
                            "points":  8
                        },
                        {
                            "text":  "axe/hatchet",
                            "points":  3
                        },
                        {
                            "text":  "drugs/fat doobie",
                            "points":  2
                        },
                        {
                            "text":  "syringe/big needle",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200287,
        "question":  "Name something some men have no idea how to turn on.",
        "answers":  [
                        {
                            "text":  "a woman",
                            "points":  32
                        },
                        {
                            "text":  "stove/oven",
                            "points":  18
                        },
                        {
                            "text":  "washing machine",
                            "points":  16
                        },
                        {
                            "text":  "dishwasher",
                            "points":  15
                        },
                        {
                            "text":  "curling iron",
                            "points":  4
                        },
                        {
                            "text":  "a vibrator",
                            "points":  2
                        },
                        {
                            "text":  "the heat",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200288,
        "question":  "What animal should a married guy never compare his wife to, even if she looks like one?",
        "answers":  [
                        {
                            "text":  "pig",
                            "points":  31
                        },
                        {
                            "text":  "cow/heifer",
                            "points":  17
                        },
                        {
                            "text":  "hippo",
                            "points":  12
                        },
                        {
                            "text":  "elephant",
                            "points":  12
                        },
                        {
                            "text":  "goat",
                            "points":  7
                        },
                        {
                            "text":  "dog/bulldog",
                            "points":  6
                        },
                        {
                            "text":  "horse",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200289,
        "question":  "Tell me a kind of place that really gives you the creeps.",
        "answers":  [
                        {
                            "text":  "graveyard",
                            "points":  29
                        },
                        {
                            "text":  "haunted/old house",
                            "points":  20
                        },
                        {
                            "text":  "morgue",
                            "points":  15
                        },
                        {
                            "text":  "hospital/asylum",
                            "points":  10
                        },
                        {
                            "text":  "dark alley",
                            "points":  6
                        },
                        {
                            "text":  "funeral home",
                            "points":  5
                        },
                        {
                            "text":  "cave",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200290,
        "question":  "Name a place to make love that's sexier in the movies than it is in real life.",
        "answers":  [
                        {
                            "text":  "car/backseat",
                            "points":  26
                        },
                        {
                            "text":  "beach",
                            "points":  25
                        },
                        {
                            "text":  "bathroom",
                            "points":  23
                        },
                        {
                            "text":  "kitchen",
                            "points":  5
                        },
                        {
                            "text":  "airplane",
                            "points":  4
                        },
                        {
                            "text":  "public park",
                            "points":  3
                        },
                        {
                            "text":  "hot tub/jacuzzi",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200291,
        "question":  "We asked 100 married women... Name something you'd be surprised to find out your husband picked up.",
        "answers":  [
                        {
                            "text":  "floozy/skanky ho",
                            "points":  22
                        },
                        {
                            "text":  "dinner",
                            "points":  15
                        },
                        {
                            "text":  "flowers",
                            "points":  13
                        },
                        {
                            "text":  "std/crotch crickets",
                            "points":  11
                        },
                        {
                            "text":  "jewelry/ring",
                            "points":  11
                        },
                        {
                            "text":  "clothes/laundry",
                            "points":  10
                        },
                        {
                            "text":  "animal/feral cat",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  200292,
        "question":  "Name something that gets baked.",
        "answers":  [
                        {
                            "text":  "cookies",
                            "points":  21
                        },
                        {
                            "text":  "cake/cupcake",
                            "points":  20
                        },
                        {
                            "text":  "bread/roll",
                            "points":  17
                        },
                        {
                            "text":  "pie",
                            "points":  14
                        },
                        {
                            "text":  "chicken",
                            "points":  8
                        },
                        {
                            "text":  "casserole/lasagna",
                            "points":  5
                        },
                        {
                            "text":  "a pothead",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200293,
        "question":  "Name a game show that a man might say describes his divorce.",
        "answers":  [
                        {
                            "text":  "jeopardy",
                            "points":  18
                        },
                        {
                            "text":  "let's make a deal",
                            "points":  18
                        },
                        {
                            "text":  "family feud",
                            "points":  18
                        },
                        {
                            "text":  "the price is right",
                            "points":  15
                        },
                        {
                            "text":  "wheel of fortune",
                            "points":  10
                        },
                        {
                            "text":  "the gong show",
                            "points":  6
                        },
                        {
                            "text":  "survivor",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200294,
        "question":  "Fill in the blank: The 80-year-old stripper manages to stay in show business because she has a brand new what?",
        "answers":  [
                        {
                            "text":  "body/set of melons",
                            "points":  60
                        },
                        {
                            "text":  "costume/g-string",
                            "points":  10
                        },
                        {
                            "text":  "face",
                            "points":  5
                        },
                        {
                            "text":  "audience",
                            "points":  4
                        },
                        {
                            "text":  "act/dance",
                            "points":  3
                        },
                        {
                            "text":  "club/showroom",
                            "points":  3
                        },
                        {
                            "text":  "surgeon",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200295,
        "question":  "Name an animal a male stripper might call himself because of his size.",
        "answers":  [
                        {
                            "text":  "horse/stallion",
                            "points":  41
                        },
                        {
                            "text":  "tiger",
                            "points":  11
                        },
                        {
                            "text":  "bull",
                            "points":  10
                        },
                        {
                            "text":  "gorilla",
                            "points":  8
                        },
                        {
                            "text":  "anaconda/snake",
                            "points":  7
                        },
                        {
                            "text":  "elephant/jumbo",
                            "points":  7
                        },
                        {
                            "text":  "donkey/jackass",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200296,
        "question":  "Fill in the blank: ________ mouth.",
        "answers":  [
                        {
                            "text":  "big mouth",
                            "points":  39
                        },
                        {
                            "text":  "loudmouth",
                            "points":  22
                        },
                        {
                            "text":  "potty mouth",
                            "points":  9
                        },
                        {
                            "text":  "dry mouth",
                            "points":  7
                        },
                        {
                            "text":  "open mouth",
                            "points":  5
                        },
                        {
                            "text":  "smash mouth",
                            "points":  3
                        },
                        {
                            "text":  "blabbermouth",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200297,
        "question":  "Name a place Mrs. Claus would hate to find out Santa stopped by on his way home.",
        "answers":  [
                        {
                            "text":  "bar/club",
                            "points":  36
                        },
                        {
                            "text":  "strip joint",
                            "points":  28
                        },
                        {
                            "text":  "ho house",
                            "points":  9
                        },
                        {
                            "text":  "hooters",
                            "points":  5
                        },
                        {
                            "text":  "his ex's/a hussy's",
                            "points":  4
                        },
                        {
                            "text":  "casino/vegas",
                            "points":  3
                        },
                        {
                            "text":  "playboy mansion",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200298,
        "question":  "Name something on their body someone might try to shrink with hemorrhoid cream.",
        "answers":  [
                        {
                            "text":  "umm...a hemorrhoid",
                            "points":  36
                        },
                        {
                            "text":  "a zit",
                            "points":  22
                        },
                        {
                            "text":  "their porky pooper",
                            "points":  9
                        },
                        {
                            "text":  "eye bags/circles",
                            "points":  8
                        },
                        {
                            "text":  "a wart",
                            "points":  5
                        },
                        {
                            "text":  "massive gut",
                            "points":  5
                        },
                        {
                            "text":  "legs/ham hocks",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200299,
        "question":  "Name something you'd hate to be wearing if a cop pulled you over and told you to get out of the car.",
        "answers":  [
                        {
                            "text":  "a smile/bare butt",
                            "points":  33
                        },
                        {
                            "text":  "pajamas/nightie",
                            "points":  23
                        },
                        {
                            "text":  "swimsuit/mankini",
                            "points":  9
                        },
                        {
                            "text":  "tight/booty shorts",
                            "points":  7
                        },
                        {
                            "text":  "dress/miniskirt",
                            "points":  7
                        },
                        {
                            "text":  "undies/pickle pouch",
                            "points":  5
                        },
                        {
                            "text":  "costume/pony head",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200300,
        "question":  "Name something a male stripper might do to prepare for a performance.",
        "answers":  [
                        {
                            "text":  "oil up",
                            "points":  27
                        },
                        {
                            "text":  "exercise/stretch",
                            "points":  16
                        },
                        {
                            "text":  "shave/wax bod",
                            "points":  14
                        },
                        {
                            "text":  "shower",
                            "points":  11
                        },
                        {
                            "text":  "practice routine",
                            "points":  10
                        },
                        {
                            "text":  "dress/stuff thong",
                            "points":  6
                        },
                        {
                            "text":  "fluff his chub",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200301,
        "question":  "We asked 100 women... Name something you do when you catch a man staring at your boobs.",
        "answers":  [
                        {
                            "text":  "stare/dirty look",
                            "points":  26
                        },
                        {
                            "text":  "cover/cross arms",
                            "points":  22
                        },
                        {
                            "text":  "turn/walk away",
                            "points":  15
                        },
                        {
                            "text":  "call him on it",
                            "points":  10
                        },
                        {
                            "text":  "smile/laugh",
                            "points":  7
                        },
                        {
                            "text":  "jiggle/show 'em off",
                            "points":  5
                        },
                        {
                            "text":  "slap him/with boobs",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200302,
        "question":  "During a tandem parachute jump, what does the pro hope the person strapped to him doesn't do?",
        "answers":  [
                        {
                            "text":  "panic/yell/wiggle",
                            "points":  26
                        },
                        {
                            "text":  "puke",
                            "points":  20
                        },
                        {
                            "text":  "come loose/fall",
                            "points":  17
                        },
                        {
                            "text":  "spray pee/poo storm",
                            "points":  10
                        },
                        {
                            "text":  "die",
                            "points":  7
                        },
                        {
                            "text":  "fart",
                            "points":  4
                        },
                        {
                            "text":  "pull cord too soon",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200303,
        "question":  "Name something that people have a fear of.",
        "answers":  [
                        {
                            "text":  "spiders",
                            "points":  24
                        },
                        {
                            "text":  "heights/falling",
                            "points":  19
                        },
                        {
                            "text":  "snakes",
                            "points":  14
                        },
                        {
                            "text":  "death",
                            "points":  14
                        },
                        {
                            "text":  "flying",
                            "points":  9
                        },
                        {
                            "text":  "the dark",
                            "points":  4
                        },
                        {
                            "text":  "dogs",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200304,
        "question":  "Name something Steve Harvey's very proud of.",
        "answers":  [
                        {
                            "text":  "his career/humor",
                            "points":  22
                        },
                        {
                            "text":  "his clothes/ties",
                            "points":  14
                        },
                        {
                            "text":  "his mustache",
                            "points":  14
                        },
                        {
                            "text":  "his family/wife",
                            "points":  14
                        },
                        {
                            "text":  "his smile/teeth",
                            "points":  12
                        },
                        {
                            "text":  "his bald head",
                            "points":  7
                        },
                        {
                            "text":  "his bank account",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  200305,
        "question":  "Name something that was a big deal when your parents finally let you do it for the first time.",
        "answers":  [
                        {
                            "text":  "drive/borrow car",
                            "points":  61
                        },
                        {
                            "text":  "date/school tramp",
                            "points":  13
                        },
                        {
                            "text":  "drink",
                            "points":  4
                        },
                        {
                            "text":  "travel/fly",
                            "points":  3
                        },
                        {
                            "text":  "shave/my legs",
                            "points":  2
                        },
                        {
                            "text":  "smoke",
                            "points":  2
                        },
                        {
                            "text":  "wear makeup",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200306,
        "question":  "Name something you would buy if you thought your neighbor was a vampire.",
        "answers":  [
                        {
                            "text":  "garlic",
                            "points":  46
                        },
                        {
                            "text":  "a crucifix",
                            "points":  12
                        },
                        {
                            "text":  "a stake",
                            "points":  11
                        },
                        {
                            "text":  "a gun",
                            "points":  8
                        },
                        {
                            "text":  "window bars",
                            "points":  4
                        },
                        {
                            "text":  "holy water",
                            "points":  3
                        },
                        {
                            "text":  "sword/dagger",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200307,
        "question":  "Name an occasion when you'd be shocked to see a stripper pop out of a cake.",
        "answers":  [
                        {
                            "text":  "wedding",
                            "points":  27
                        },
                        {
                            "text":  "religious event",
                            "points":  16
                        },
                        {
                            "text":  "kid's b-day party",
                            "points":  14
                        },
                        {
                            "text":  "funeral",
                            "points":  12
                        },
                        {
                            "text":  "anniversary",
                            "points":  8
                        },
                        {
                            "text":  "baby shower",
                            "points":  5
                        },
                        {
                            "text":  "office party",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  200308,
        "question":  "Tell me a word that rhymes with \"punk.\"",
        "answers":  [
                        {
                            "text":  "junk",
                            "points":  23
                        },
                        {
                            "text":  "skunk",
                            "points":  22
                        },
                        {
                            "text":  "funk",
                            "points":  21
                        },
                        {
                            "text":  "dunk",
                            "points":  8
                        },
                        {
                            "text":  "spunk",
                            "points":  5
                        },
                        {
                            "text":  "trunk",
                            "points":  4
                        },
                        {
                            "text":  "bunk",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200309,
        "question":  "It would be fun to swim in a pool filled with what?",
        "answers":  [
                        {
                            "text":  "jell-o",
                            "points":  22
                        },
                        {
                            "text":  "booze/champagne",
                            "points":  18
                        },
                        {
                            "text":  "water/rain",
                            "points":  13
                        },
                        {
                            "text":  "hotties/nude ones",
                            "points":  13
                        },
                        {
                            "text":  "cash/coins",
                            "points":  10
                        },
                        {
                            "text":  "chocolate/candy",
                            "points":  7
                        },
                        {
                            "text":  "fish/dolphins",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200310,
        "question":  "Name something people don't like being stuck with.",
        "answers":  [
                        {
                            "text":  "the check/bills",
                            "points":  59
                        },
                        {
                            "text":  "kids/crying baby",
                            "points":  11
                        },
                        {
                            "text":  "relatives/in-laws",
                            "points":  5
                        },
                        {
                            "text":  "a needle",
                            "points":  4
                        },
                        {
                            "text":  "a lemon car",
                            "points":  3
                        },
                        {
                            "text":  "a raging std",
                            "points":  2
                        },
                        {
                            "text":  "pet/barking dog",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200311,
        "question":  "Name a musical instrument that sounds like a person with digestive problems.",
        "answers":  [
                        {
                            "text":  "tuba",
                            "points":  56
                        },
                        {
                            "text":  "oboe",
                            "points":  9
                        },
                        {
                            "text":  "trumpet",
                            "points":  8
                        },
                        {
                            "text":  "kazoo",
                            "points":  4
                        },
                        {
                            "text":  "bagpipes",
                            "points":  3
                        },
                        {
                            "text":  "saxophone",
                            "points":  3
                        },
                        {
                            "text":  "bassoon",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200312,
        "question":  "Name something of yours that's out of style.",
        "answers":  [
                        {
                            "text":  "my clothes/shoes",
                            "points":  50
                        },
                        {
                            "text":  "my hairstyle",
                            "points":  14
                        },
                        {
                            "text":  "my watch/jewelry",
                            "points":  8
                        },
                        {
                            "text":  "my car",
                            "points":  4
                        },
                        {
                            "text":  "my furniture",
                            "points":  4
                        },
                        {
                            "text":  "my phone/flip phone",
                            "points":  3
                        },
                        {
                            "text":  "my purse",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200313,
        "question":  "If you want to keep the magic in your relationship, name something you and your spouse should not do in front of each other.",
        "answers":  [
                        {
                            "text":  "pee/power dump",
                            "points":  48
                        },
                        {
                            "text":  "blow butt whistles",
                            "points":  17
                        },
                        {
                            "text":  "pick your nose",
                            "points":  6
                        },
                        {
                            "text":  "cuss/fight",
                            "points":  4
                        },
                        {
                            "text":  "lie/gossip",
                            "points":  4
                        },
                        {
                            "text":  "undress",
                            "points":  4
                        },
                        {
                            "text":  "floss",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200314,
        "question":  "Name a word used to describe a steak that also is used to describe a kiss.",
        "answers":  [
                        {
                            "text":  "juicy",
                            "points":  41
                        },
                        {
                            "text":  "rare",
                            "points":  16
                        },
                        {
                            "text":  "tender",
                            "points":  14
                        },
                        {
                            "text":  "hot",
                            "points":  5
                        },
                        {
                            "text":  "well-done",
                            "points":  4
                        },
                        {
                            "text":  "moist",
                            "points":  3
                        },
                        {
                            "text":  "french",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200315,
        "question":  "Name something of yours that might be wide open.",
        "answers":  [
                        {
                            "text":  "my mouth",
                            "points":  37
                        },
                        {
                            "text":  "door/garage door",
                            "points":  19
                        },
                        {
                            "text":  "my zipper",
                            "points":  12
                        },
                        {
                            "text":  "my eyes",
                            "points":  5
                        },
                        {
                            "text":  "my legs",
                            "points":  5
                        },
                        {
                            "text":  "my mind",
                            "points":  4
                        },
                        {
                            "text":  "my heart",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200316,
        "question":  "If a wife found out her dead husband had been cheating on her, what might she do to his grave?",
        "answers":  [
                        {
                            "text":  "pee/blast poo on it",
                            "points":  35
                        },
                        {
                            "text":  "spit on it",
                            "points":  30
                        },
                        {
                            "text":  "kick/hit/break it",
                            "points":  5
                        },
                        {
                            "text":  "forget/not visit",
                            "points":  5
                        },
                        {
                            "text":  "graffiti/\"manwhore\"",
                            "points":  4
                        },
                        {
                            "text":  "dance/stomp on it",
                            "points":  4
                        },
                        {
                            "text":  "dig it up",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200317,
        "question":  "Tell me something you call a woman when you don't know her name.",
        "answers":  [
                        {
                            "text":  "miss/missy",
                            "points":  32
                        },
                        {
                            "text":  "ma'am",
                            "points":  29
                        },
                        {
                            "text":  "hon/honey",
                            "points":  12
                        },
                        {
                            "text":  "babe",
                            "points":  4
                        },
                        {
                            "text":  "madam",
                            "points":  3
                        },
                        {
                            "text":  "sweetie/sweetheart",
                            "points":  3
                        },
                        {
                            "text":  "you",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200318,
        "question":  "Name something a really bad hospital might make a patient do for himself.",
        "answers":  [
                        {
                            "text":  "stick needle/iv meds",
                            "points":  23
                        },
                        {
                            "text":  "surgery/stitches",
                            "points":  20
                        },
                        {
                            "text":  "change bedpan",
                            "points":  12
                        },
                        {
                            "text":  "check vitals/temp",
                            "points":  10
                        },
                        {
                            "text":  "wash/wipe self",
                            "points":  9
                        },
                        {
                            "text":  "walk to bathroom",
                            "points":  6
                        },
                        {
                            "text":  "change sheets",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  200319,
        "question":  "When you look in the mirror, tell me the something specific you think about yourself.",
        "answers":  [
                        {
                            "text":  "i'm getting old",
                            "points":  21
                        },
                        {
                            "text":  "dang, i am fine!",
                            "points":  21
                        },
                        {
                            "text":  "ugly/swamp donkey",
                            "points":  18
                        },
                        {
                            "text":  "i'm a porker",
                            "points":  9
                        },
                        {
                            "text":  "tired/puffy eyes",
                            "points":  8
                        },
                        {
                            "text":  "i'm so-so/a solid 5",
                            "points":  5
                        },
                        {
                            "text":  "how's my hair?",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200320,
        "question":  "You say \"break a leg\" to an actor. To a stripper, you might say \"break a\" what?",
        "answers":  [
                        {
                            "text":  "pole",
                            "points":  39
                        },
                        {
                            "text":  "boob/nip/implant",
                            "points":  15
                        },
                        {
                            "text":  "strap/bra strap",
                            "points":  9
                        },
                        {
                            "text":  "g-string",
                            "points":  8
                        },
                        {
                            "text":  "heel/stiletto",
                            "points":  6
                        },
                        {
                            "text":  "neck",
                            "points":  4
                        },
                        {
                            "text":  "tassel",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200321,
        "question":  "Name something you'd hate to find out a hotel maid did with a pair of your underwear.",
        "answers":  [
                        {
                            "text":  "wore them",
                            "points":  25
                        },
                        {
                            "text":  "cleaned room/toilet",
                            "points":  25
                        },
                        {
                            "text":  "sniffed them",
                            "points":  12
                        },
                        {
                            "text":  "stole/kept them",
                            "points":  9
                        },
                        {
                            "text":  "threw them away",
                            "points":  6
                        },
                        {
                            "text":  "hung on door/pole",
                            "points":  5
                        },
                        {
                            "text":  "washed them",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200322,
        "question":  "Name something a cowboy's tombstone might be in the shape of.",
        "answers":  [
                        {
                            "text":  "cowboy hat",
                            "points":  22
                        },
                        {
                            "text":  "horse",
                            "points":  19
                        },
                        {
                            "text":  "boot",
                            "points":  18
                        },
                        {
                            "text":  "horseshoe",
                            "points":  8
                        },
                        {
                            "text":  "cross",
                            "points":  7
                        },
                        {
                            "text":  "gun/six-shooter",
                            "points":  7
                        },
                        {
                            "text":  "saddle",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200323,
        "question":  "Name something a game show host hopes an excited contestant doesn't do.",
        "answers":  [
                        {
                            "text":  "pee/erupt in poo",
                            "points":  22
                        },
                        {
                            "text":  "scream/cuss",
                            "points":  18
                        },
                        {
                            "text":  "faint",
                            "points":  12
                        },
                        {
                            "text":  "hug/lift/jump on",
                            "points":  10
                        },
                        {
                            "text":  "barf",
                            "points":  8
                        },
                        {
                            "text":  "kiss host/use tongue",
                            "points":  8
                        },
                        {
                            "text":  "knock down/hurt",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  200324,
        "question":  "Name something grandma might hide when the grandkids come over.",
        "answers":  [
                        {
                            "text":  "sweets/candy",
                            "points":  18
                        },
                        {
                            "text":  "booze/fireball",
                            "points":  18
                        },
                        {
                            "text":  "her moolah",
                            "points":  14
                        },
                        {
                            "text":  "meds/gramp's viagra",
                            "points":  11
                        },
                        {
                            "text":  "her weed/ganja",
                            "points":  11
                        },
                        {
                            "text":  "vibrator",
                            "points":  9
                        },
                        {
                            "text":  "tv remote",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200325,
        "question":  "If a man is secretly dating many women, tell me a name he might call them all.",
        "answers":  [
                        {
                            "text":  "babe/baby",
                            "points":  35
                        },
                        {
                            "text":  "honey",
                            "points":  16
                        },
                        {
                            "text":  "his harem",
                            "points":  10
                        },
                        {
                            "text":  "love/lover",
                            "points":  6
                        },
                        {
                            "text":  "ho",
                            "points":  6
                        },
                        {
                            "text":  "girl/my girls",
                            "points":  6
                        },
                        {
                            "text":  "girlfriend",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  200326,
        "question":  "Name something Santa might be hiding under his hat.",
        "answers":  [
                        {
                            "text":  "white hair/wig",
                            "points":  29
                        },
                        {
                            "text":  "bald head",
                            "points":  21
                        },
                        {
                            "text":  "present/toy",
                            "points":  10
                        },
                        {
                            "text":  "cookies/sweets",
                            "points":  8
                        },
                        {
                            "text":  "an elf",
                            "points":  7
                        },
                        {
                            "text":  "booze/flask",
                            "points":  6
                        },
                        {
                            "text":  "tobacco/cigarette",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200327,
        "question":  "Instead of toys, what would Santa be shocked to discover the elves were making?",
        "answers":  [
                        {
                            "text":  "drugs/meth",
                            "points":  16
                        },
                        {
                            "text":  "food/pizza",
                            "points":  16
                        },
                        {
                            "text":  "guns/weapons",
                            "points":  15
                        },
                        {
                            "text":  "sex toys/vibrators",
                            "points":  12
                        },
                        {
                            "text":  "booze/moonshine",
                            "points":  11
                        },
                        {
                            "text":  "whoopee",
                            "points":  10
                        },
                        {
                            "text":  "cars/parts",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200328,
        "question":  "Name a word starting with \"B\" that describes Kim Kardashian's behind.",
        "answers":  [
                        {
                            "text":  "big",
                            "points":  52
                        },
                        {
                            "text":  "booty/licious",
                            "points":  8
                        },
                        {
                            "text":  "beautiful",
                            "points":  7
                        },
                        {
                            "text":  "butt",
                            "points":  7
                        },
                        {
                            "text":  "bad",
                            "points":  5
                        },
                        {
                            "text":  "bubble/bubbly",
                            "points":  3
                        },
                        {
                            "text":  "boring",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200329,
        "question":  "We asked 100 married women... Give me a word used to describe a pillow that also describes your husband's body.",
        "answers":  [
                        {
                            "text":  "soft",
                            "points":  31
                        },
                        {
                            "text":  "comfortable",
                            "points":  18
                        },
                        {
                            "text":  "cuddly",
                            "points":  14
                        },
                        {
                            "text":  "fluffy",
                            "points":  7
                        },
                        {
                            "text":  "puffy",
                            "points":  5
                        },
                        {
                            "text":  "fat",
                            "points":  4
                        },
                        {
                            "text":  "plump",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200330,
        "question":  "Fill in the blank: If a man wants a woman to be all over him, he should cover himself with what?",
        "answers":  [
                        {
                            "text":  "cash, baby!",
                            "points":  30
                        },
                        {
                            "text":  "chocolate/hot fudge",
                            "points":  27
                        },
                        {
                            "text":  "cologne/drakkar",
                            "points":  13
                        },
                        {
                            "text":  "honey",
                            "points":  4
                        },
                        {
                            "text":  "whipped cream",
                            "points":  4
                        },
                        {
                            "text":  "wine/booze",
                            "points":  3
                        },
                        {
                            "text":  "diamonds",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200331,
        "question":  "A dog lifts one leg to tinkle. What does a man lift one leg to do?",
        "answers":  [
                        {
                            "text":  "let one go",
                            "points":  25
                        },
                        {
                            "text":  "walk/run/climb",
                            "points":  22
                        },
                        {
                            "text":  "scratch/adjust junk",
                            "points":  13
                        },
                        {
                            "text":  "put pants on",
                            "points":  7
                        },
                        {
                            "text":  "hop/jump",
                            "points":  6
                        },
                        {
                            "text":  "kick/a ball",
                            "points":  5
                        },
                        {
                            "text":  "get on bike/harley",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  200332,
        "question":  "We asked 100 men... Name something you love to watch a woman do when she's fully clothed.",
        "answers":  [
                        {
                            "text":  "dance",
                            "points":  21
                        },
                        {
                            "text":  "cook & clean/for me",
                            "points":  18
                        },
                        {
                            "text":  "play w/ children",
                            "points":  12
                        },
                        {
                            "text":  "undress",
                            "points":  9
                        },
                        {
                            "text":  "bend over/stretch",
                            "points":  8
                        },
                        {
                            "text":  "work out/jog",
                            "points":  8
                        },
                        {
                            "text":  "walk",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  200333,
        "question":  "Name something you'd hate to be in the middle of doing when your mate kisses you.",
        "answers":  [
                        {
                            "text":  "explosive dump/pee",
                            "points":  19
                        },
                        {
                            "text":  "brushing/flossing",
                            "points":  16
                        },
                        {
                            "text":  "eating/tuna",
                            "points":  16
                        },
                        {
                            "text":  "reading",
                            "points":  11
                        },
                        {
                            "text":  "cleaning/dishes",
                            "points":  11
                        },
                        {
                            "text":  "working",
                            "points":  6
                        },
                        {
                            "text":  "cooking",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200334,
        "question":  "Name a pop star who makes men whistle when she twerks.",
        "answers":  [
                        {
                            "text":  "miley cyrus",
                            "points":  53
                        },
                        {
                            "text":  "beyonce",
                            "points":  11
                        },
                        {
                            "text":  "jennifer lopez",
                            "points":  5
                        },
                        {
                            "text":  "britney spears",
                            "points":  4
                        },
                        {
                            "text":  "katy perry",
                            "points":  3
                        },
                        {
                            "text":  "nicki minaj",
                            "points":  3
                        },
                        {
                            "text":  "madonna",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200335,
        "question":  "Name a seasoning an adult film actress might be named after.",
        "answers":  [
                        {
                            "text":  "pepper/chili pepper",
                            "points":  26
                        },
                        {
                            "text":  "cinnamon",
                            "points":  18
                        },
                        {
                            "text":  "ginger",
                            "points":  13
                        },
                        {
                            "text":  "paprika",
                            "points":  9
                        },
                        {
                            "text":  "cumin",
                            "points":  6
                        },
                        {
                            "text":  "spice",
                            "points":  6
                        },
                        {
                            "text":  "mrs. dash",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200336,
        "question":  "We asked 100 men... Name a bad habit that's okay for your friends but not your wife.",
        "answers":  [
                        {
                            "text":  "smoking",
                            "points":  20
                        },
                        {
                            "text":  "farting/on lighter",
                            "points":  16
                        },
                        {
                            "text":  "being a lush",
                            "points":  16
                        },
                        {
                            "text":  "flirting",
                            "points":  13
                        },
                        {
                            "text":  "burping",
                            "points":  8
                        },
                        {
                            "text":  "slutting around",
                            "points":  6
                        },
                        {
                            "text":  "cussing",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200337,
        "question":  "Name something of yours you'd hate to see in your dog's mouth.",
        "answers":  [
                        {
                            "text":  "my clothes/shoes",
                            "points":  40
                        },
                        {
                            "text":  "my food/chocolate",
                            "points":  10
                        },
                        {
                            "text":  "my toothbrush",
                            "points":  9
                        },
                        {
                            "text":  "my $/wallet",
                            "points":  8
                        },
                        {
                            "text":  "my best vibrator",
                            "points":  5
                        },
                        {
                            "text":  "my phone",
                            "points":  5
                        },
                        {
                            "text":  "my cat/other pet",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200338,
        "question":  "Name something that terrifies men.",
        "answers":  [
                        {
                            "text":  "commitment/marriage",
                            "points":  31
                        },
                        {
                            "text":  "women/ugly ones",
                            "points":  23
                        },
                        {
                            "text":  "spiders",
                            "points":  8
                        },
                        {
                            "text":  "failure",
                            "points":  5
                        },
                        {
                            "text":  "having kids",
                            "points":  5
                        },
                        {
                            "text":  "death",
                            "points":  5
                        },
                        {
                            "text":  "dr./dental visit",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200339,
        "question":  "Name something a wife does to a piece of chicken that she'd like to do to her husband.",
        "answers":  [
                        {
                            "text":  "fry/cook/grill him",
                            "points":  25
                        },
                        {
                            "text":  "pound/beat him",
                            "points":  14
                        },
                        {
                            "text":  "bite/eat/savor flavor",
                            "points":  13
                        },
                        {
                            "text":  "season/spice him up",
                            "points":  9
                        },
                        {
                            "text":  "skin him",
                            "points":  8
                        },
                        {
                            "text":  "chop/slice him up",
                            "points":  7
                        },
                        {
                            "text":  "marinate him",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  200340,
        "question":  "We asked 100 women... Name a specific activity that literally can cause your panties to get in a wad.",
        "answers":  [
                        {
                            "text":  "laundry/wash them",
                            "points":  20
                        },
                        {
                            "text":  "riding a bike",
                            "points":  17
                        },
                        {
                            "text":  "mama's gettin' some",
                            "points":  13
                        },
                        {
                            "text":  "horseback riding",
                            "points":  10
                        },
                        {
                            "text":  "running",
                            "points":  10
                        },
                        {
                            "text":  "yoga",
                            "points":  6
                        },
                        {
                            "text":  "bending over",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  200341,
        "question":  "If you were an octopus, name something you could do to eight people all at once.",
        "answers":  [
                        {
                            "text":  "slap them",
                            "points":  26
                        },
                        {
                            "text":  "hug them",
                            "points":  21
                        },
                        {
                            "text":  "tickle them",
                            "points":  12
                        },
                        {
                            "text":  "choke them",
                            "points":  8
                        },
                        {
                            "text":  "fondle/their butts",
                            "points":  6
                        },
                        {
                            "text":  "shake hands",
                            "points":  4
                        },
                        {
                            "text":  "massage/scratch back",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200342,
        "question":  "Tell me the last thing you stuck your finger in.",
        "answers":  [
                        {
                            "text":  "food/frosting",
                            "points":  24
                        },
                        {
                            "text":  "nose",
                            "points":  18
                        },
                        {
                            "text":  "ear/my cat's ear",
                            "points":  15
                        },
                        {
                            "text":  "water/faucet",
                            "points":  9
                        },
                        {
                            "text":  "a ring",
                            "points":  7
                        },
                        {
                            "text":  "mouth/teeth",
                            "points":  4
                        },
                        {
                            "text":  "soap",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200343,
        "question":  "Fill in the blank: Sex aside, a man likes a woman who likes to what?",
        "answers":  [
                        {
                            "text":  "cook/bake",
                            "points":  47
                        },
                        {
                            "text":  "watch sports",
                            "points":  8
                        },
                        {
                            "text":  "eat",
                            "points":  6
                        },
                        {
                            "text":  "dance",
                            "points":  5
                        },
                        {
                            "text":  "fish/hunt",
                            "points":  5
                        },
                        {
                            "text":  "cuddle/snuggle",
                            "points":  4
                        },
                        {
                            "text":  "laugh",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200344,
        "question":  "Name a popular candy they should make edible underwear out of.",
        "answers":  [
                        {
                            "text":  "twizzlers/licorice",
                            "points":  32
                        },
                        {
                            "text":  "snickers",
                            "points":  17
                        },
                        {
                            "text":  "jolly rancher",
                            "points":  7
                        },
                        {
                            "text":  "reese's cup/pieces",
                            "points":  7
                        },
                        {
                            "text":  "skittles",
                            "points":  6
                        },
                        {
                            "text":  "starburst",
                            "points":  5
                        },
                        {
                            "text":  "gummies",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200345,
        "question":  "Name something grandpa might do if grandma said she wanted to have another baby.",
        "answers":  [
                        {
                            "text":  "run off/leave her",
                            "points":  26
                        },
                        {
                            "text":  "get snipped",
                            "points":  15
                        },
                        {
                            "text":  "laugh",
                            "points":  12
                        },
                        {
                            "text":  "heart attack/stroke",
                            "points":  7
                        },
                        {
                            "text":  "get viagra",
                            "points":  7
                        },
                        {
                            "text":  "faint",
                            "points":  6
                        },
                        {
                            "text":  "die/off himself",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  200346,
        "question":  "Name a food men wish women smelled like.",
        "answers":  [
                        {
                            "text":  "pork/bacon",
                            "points":  20
                        },
                        {
                            "text":  "beef/steak",
                            "points":  19
                        },
                        {
                            "text":  "pizza",
                            "points":  12
                        },
                        {
                            "text":  "fruit/berries",
                            "points":  11
                        },
                        {
                            "text":  "beer",
                            "points":  6
                        },
                        {
                            "text":  "chicken/wings",
                            "points":  6
                        },
                        {
                            "text":  "cake",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200347,
        "question":  "We asked 100 men... In the movies, name something that looks sexier when you see a woman do it in slow motion.",
        "answers":  [
                        {
                            "text":  "run/walk",
                            "points":  24
                        },
                        {
                            "text":  "undress",
                            "points":  21
                        },
                        {
                            "text":  "dance/gyrate",
                            "points":  8
                        },
                        {
                            "text":  "shake/toss hair",
                            "points":  8
                        },
                        {
                            "text":  "eat/a banana",
                            "points":  6
                        },
                        {
                            "text":  "kiss/blow one",
                            "points":  5
                        },
                        {
                            "text":  "sex/tickle rooster",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  200348,
        "question":  "Name something that often lasts longer than you want it to.",
        "answers":  [
                        {
                            "text":  "work/meetings",
                            "points":  28
                        },
                        {
                            "text":  "sex/with cellmate",
                            "points":  11
                        },
                        {
                            "text":  "church service",
                            "points":  9
                        },
                        {
                            "text":  "movie/nic cage film",
                            "points":  8
                        },
                        {
                            "text":  "illness/herpes",
                            "points":  8
                        },
                        {
                            "text":  "winter weather",
                            "points":  6
                        },
                        {
                            "text":  "speeches",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  200349,
        "question":  "Name a question you might ask a bald man about being bald.",
        "answers":  [
                        {
                            "text":  "sunburn/sunscreen?",
                            "points":  18
                        },
                        {
                            "text":  "when/how long?",
                            "points":  15
                        },
                        {
                            "text":  "natural/shave?",
                            "points":  13
                        },
                        {
                            "text":  "cold/breezy?",
                            "points":  8
                        },
                        {
                            "text":  "wax/polish?",
                            "points":  8
                        },
                        {
                            "text":  "miss having hair?",
                            "points":  6
                        },
                        {
                            "text":  "how wash/shampoo?",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  200350,
        "question":  "If you were stuck in prison, what would you like to find in your cell?",
        "answers":  [
                        {
                            "text":  "tv/high def",
                            "points":  21
                        },
                        {
                            "text":  "books/magazines",
                            "points":  12
                        },
                        {
                            "text":  "the key",
                            "points":  10
                        },
                        {
                            "text":  "computer/wifi",
                            "points":  9
                        },
                        {
                            "text":  "food/steak",
                            "points":  7
                        },
                        {
                            "text":  "hottie/james franco",
                            "points":  7
                        },
                        {
                            "text":  "new iphone",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  200351,
        "question":  "Name a place a really dumb guy might stick his finger.",
        "answers":  [
                        {
                            "text":  "elec./light socket",
                            "points":  36
                        },
                        {
                            "text":  "up his nose",
                            "points":  15
                        },
                        {
                            "text":  "in his pooper",
                            "points":  5
                        },
                        {
                            "text":  "dark hole/mousehole",
                            "points":  5
                        },
                        {
                            "text":  "bottle/jar",
                            "points":  4
                        },
                        {
                            "text":  "in a fan",
                            "points":  3
                        },
                        {
                            "text":  "in his eye",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200352,
        "question":  "Name something made for a woman that her man might be tempted to use.",
        "answers":  [
                        {
                            "text":  "razor",
                            "points":  15
                        },
                        {
                            "text":  "deodorant",
                            "points":  15
                        },
                        {
                            "text":  "panties/clothes",
                            "points":  14
                        },
                        {
                            "text":  "vibrator/adult toy",
                            "points":  8
                        },
                        {
                            "text":  "lotion/moisturizer",
                            "points":  7
                        },
                        {
                            "text":  "soap/shampoo",
                            "points":  6
                        },
                        {
                            "text":  "hair products/dye",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  200353,
        "question":  "Name something a wife might send to her cheating husband's mistress.",
        "answers":  [
                        {
                            "text":  "threat letter/text",
                            "points":  19
                        },
                        {
                            "text":  "his laundry/clothes",
                            "points":  16
                        },
                        {
                            "text":  "a creature/dead one",
                            "points":  8
                        },
                        {
                            "text":  "dead/black roses",
                            "points":  7
                        },
                        {
                            "text":  "hubby/severed dong",
                            "points":  7
                        },
                        {
                            "text":  "photos/from p.i.",
                            "points":  6
                        },
                        {
                            "text":  "condom",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  200354,
        "question":  "Name a specific word starting with the letter \"C\" that makes a woman happy.",
        "answers":  [
                        {
                            "text":  "cash",
                            "points":  24
                        },
                        {
                            "text":  "candy",
                            "points":  15
                        },
                        {
                            "text":  "car",
                            "points":  9
                        },
                        {
                            "text":  "chocolate",
                            "points":  8
                        },
                        {
                            "text":  "carats",
                            "points":  6
                        },
                        {
                            "text":  "cake",
                            "points":  3
                        },
                        {
                            "text":  "clothes",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200355,
        "question":  "Fill in the blank: It would be very bad for a man to dump his woman in the middle of what?",
        "answers":  [
                        {
                            "text":  "pregnancy/labor",
                            "points":  16
                        },
                        {
                            "text":  "steamy nookie",
                            "points":  15
                        },
                        {
                            "text":  "the road/traffic",
                            "points":  11
                        },
                        {
                            "text":  "dinner/dessert",
                            "points":  8
                        },
                        {
                            "text":  "their wedding",
                            "points":  6
                        },
                        {
                            "text":  "vacay/honeymoon",
                            "points":  6
                        },
                        {
                            "text":  "a date",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  200356,
        "question":  "Name something you shake.",
        "answers":  [
                        {
                            "text":  "salt & pepper",
                            "points":  16
                        },
                        {
                            "text":  "hands",
                            "points":  16
                        },
                        {
                            "text":  "my phat booty",
                            "points":  13
                        },
                        {
                            "text":  "baby rattle",
                            "points":  6
                        },
                        {
                            "text":  "paint",
                            "points":  5
                        },
                        {
                            "text":  "juice",
                            "points":  5
                        },
                        {
                            "text":  "my head/hair",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  200357,
        "question":  "Name an animal whose females are just as big as the males.",
        "answers":  [
                        {
                            "text":  "elephant",
                            "points":  23
                        },
                        {
                            "text":  "ape/monkey",
                            "points":  9
                        },
                        {
                            "text":  "dog",
                            "points":  9
                        },
                        {
                            "text":  "horse",
                            "points":  9
                        },
                        {
                            "text":  "bird/chicken",
                            "points":  5
                        },
                        {
                            "text":  "whale",
                            "points":  5
                        },
                        {
                            "text":  "giraffe",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  200358,
        "question":  "We asked 100 women... Name a movie monster your man resembles in bed.",
        "answers":  [
                        {
                            "text":  "the incredible hulk",
                            "points":  13
                        },
                        {
                            "text":  "king kong",
                            "points":  11
                        },
                        {
                            "text":  "dracula/vampire",
                            "points":  10
                        },
                        {
                            "text":  "wolfman/werewolf",
                            "points":  9
                        },
                        {
                            "text":  "godzilla",
                            "points":  9
                        },
                        {
                            "text":  "the blob",
                            "points":  6
                        },
                        {
                            "text":  "the thing",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  200359,
        "question":  "Name a kind of ball that doesn't bounce.",
        "answers":  [
                        {
                            "text":  "bowling ball",
                            "points":  30
                        },
                        {
                            "text":  "snowball",
                            "points":  6
                        },
                        {
                            "text":  "billiard ball",
                            "points":  6
                        },
                        {
                            "text":  "a man's",
                            "points":  6
                        },
                        {
                            "text":  "baseball/softball",
                            "points":  5
                        },
                        {
                            "text":  "ball bearing ball",
                            "points":  5
                        },
                        {
                            "text":  "meatball",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  200360,
        "question":  "As a baby, you held your blankie. As an adult, what do you hold to feel secure?",
        "answers":  [
                        {
                            "text":  "mate/their hand",
                            "points":  20
                        },
                        {
                            "text":  "money/wallet",
                            "points":  10
                        },
                        {
                            "text":  "pillow",
                            "points":  8
                        },
                        {
                            "text":  "phone",
                            "points":  8
                        },
                        {
                            "text":  "blankie",
                            "points":  7
                        },
                        {
                            "text":  "dog/pet",
                            "points":  6
                        },
                        {
                            "text":  "a gun",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200361,
        "question":  "Name a reason a woman refuses to give her date a good-night kiss.",
        "answers":  [
                        {
                            "text":  "reeks/butt breath",
                            "points":  64
                        },
                        {
                            "text":  "bad date/no match",
                            "points":  17
                        },
                        {
                            "text":  "first date/too soon",
                            "points":  6
                        },
                        {
                            "text":  "ill/oral gonorrhea",
                            "points":  6
                        },
                        {
                            "text":  "she's mad at him",
                            "points":  4
                        },
                        {
                            "text":  "he's drunk",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200362,
        "question":  "Name something a man polishes until it shines.",
        "answers":  [
                        {
                            "text":  "his car/truck",
                            "points":  46
                        },
                        {
                            "text":  "his shoes/boots",
                            "points":  43
                        },
                        {
                            "text":  "his watch",
                            "points":  4
                        },
                        {
                            "text":  "his tools",
                            "points":  3
                        },
                        {
                            "text":  "his gun",
                            "points":  2
                        },
                        {
                            "text":  "his face/head",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200363,
        "question":  "We asked 100 married men... If you're smart, you've learned to lie to your wife about her what?",
        "answers":  [
                        {
                            "text":  "weight/figure",
                            "points":  45
                        },
                        {
                            "text":  "pukeable cooking",
                            "points":  25
                        },
                        {
                            "text":  "hair/color",
                            "points":  17
                        },
                        {
                            "text":  "age/you're not old",
                            "points":  5
                        },
                        {
                            "text":  "evil mother",
                            "points":  5
                        },
                        {
                            "text":  "butterface",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200364,
        "question":  "We asked 100 married men... Fill in the blank: My wife's bottom is so big, that at parties, we can ________ on it.",
        "answers":  [
                        {
                            "text":  "put drinks on it",
                            "points":  26
                        },
                        {
                            "text":  "bounce/jump on it",
                            "points":  18
                        },
                        {
                            "text":  "dance/line dance",
                            "points":  17
                        },
                        {
                            "text":  "eat on it",
                            "points":  17
                        },
                        {
                            "text":  "sit/lounge",
                            "points":  15
                        },
                        {
                            "text":  "play games/darts",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  200365,
        "question":  "We asked 100 women... Name a part of your body that looks better lying down than standing up.",
        "answers":  [
                        {
                            "text":  "my belly/flabs",
                            "points":  76
                        },
                        {
                            "text":  "my droopy d-cups",
                            "points":  11
                        },
                        {
                            "text":  "my face/jowls",
                            "points":  4
                        },
                        {
                            "text":  "my rat nest hair",
                            "points":  3
                        },
                        {
                            "text":  "my jell-o arms",
                            "points":  3
                        },
                        {
                            "text":  "my thunder thighs",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200366,
        "question":  "Name something a husband might find all over the bed that makes him suspect his wife is having an affair with a baker.",
        "answers":  [
                        {
                            "text":  "flour",
                            "points":  70
                        },
                        {
                            "text":  "sugar",
                            "points":  10
                        },
                        {
                            "text":  "baked goods/crumbs",
                            "points":  10
                        },
                        {
                            "text":  "icing/frosting",
                            "points":  5
                        },
                        {
                            "text":  "yeast",
                            "points":  2
                        },
                        {
                            "text":  "dough",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200367,
        "question":  "Besides the top of your head, name something else you comb the hair on.",
        "answers":  [
                        {
                            "text":  "face/bushy brows",
                            "points":  69
                        },
                        {
                            "text":  "my chest",
                            "points":  8
                        },
                        {
                            "text":  "my pet/dog",
                            "points":  8
                        },
                        {
                            "text":  "my butt/crack",
                            "points":  5
                        },
                        {
                            "text":  "my back",
                            "points":  5
                        },
                        {
                            "text":  "my legs",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200368,
        "question":  "We asked 100 married women... Name something you might do and then say to yourself, \"My husband's going to kill me.\"",
        "answers":  [
                        {
                            "text":  "spend money/shop",
                            "points":  60
                        },
                        {
                            "text":  "wreck the car",
                            "points":  21
                        },
                        {
                            "text":  "throw out something",
                            "points":  8
                        },
                        {
                            "text":  "cheat/nightly",
                            "points":  4
                        },
                        {
                            "text":  "cut my hair",
                            "points":  3
                        },
                        {
                            "text":  "stay out late",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200369,
        "question":  "We asked 100 men... Name something Tarzan does that you might like to do when you're on vacation.",
        "answers":  [
                        {
                            "text":  "swing/zip-line",
                            "points":  51
                        },
                        {
                            "text":  "swim/skinny-dip",
                            "points":  29
                        },
                        {
                            "text":  "wear loincloth",
                            "points":  13
                        },
                        {
                            "text":  "sleep/in treehouse",
                            "points":  2
                        },
                        {
                            "text":  "slip jane my banana",
                            "points":  2
                        },
                        {
                            "text":  "ride an elephant",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200370,
        "question":  "If you had a pumpkin for a head, what would you worry someone might do to it?",
        "answers":  [
                        {
                            "text":  "smash/chuck it",
                            "points":  46
                        },
                        {
                            "text":  "carve a face",
                            "points":  40
                        },
                        {
                            "text":  "cook/eat it",
                            "points":  6
                        },
                        {
                            "text":  "light candle",
                            "points":  3
                        },
                        {
                            "text":  "draw on it",
                            "points":  2
                        },
                        {
                            "text":  "gut the seeds",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200371,
        "question":  "Name a sport where you see men with big bottoms.",
        "answers":  [
                        {
                            "text":  "wrestling/sumo",
                            "points":  43
                        },
                        {
                            "text":  "football",
                            "points":  42
                        },
                        {
                            "text":  "baseball",
                            "points":  6
                        },
                        {
                            "text":  "boxing",
                            "points":  3
                        },
                        {
                            "text":  "golf",
                            "points":  3
                        },
                        {
                            "text":  "swimming",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200372,
        "question":  "Fill in the blank: A wealthy woman would hate to have someone mistake her new husband for her what?",
        "answers":  [
                        {
                            "text":  "son",
                            "points":  41
                        },
                        {
                            "text":  "help/driver",
                            "points":  32
                        },
                        {
                            "text":  "father",
                            "points":  15
                        },
                        {
                            "text":  "ex",
                            "points":  6
                        },
                        {
                            "text":  "brother",
                            "points":  3
                        },
                        {
                            "text":  "gigolo",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200373,
        "question":  "We asked 100 women... Name something you fantasize your handyman will do.",
        "answers":  [
                        {
                            "text":  "fix things/paint",
                            "points":  41
                        },
                        {
                            "text":  "clean up",
                            "points":  21
                        },
                        {
                            "text":  "be nude/shirtless",
                            "points":  17
                        },
                        {
                            "text":  "cook for me",
                            "points":  11
                        },
                        {
                            "text":  "work for free",
                            "points":  6
                        },
                        {
                            "text":  "do me/\"tool time\"",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200374,
        "question":  "These days, women are getting fat injections to give them buttocks the shape of what fruit?",
        "answers":  [
                        {
                            "text":  "apple",
                            "points":  32
                        },
                        {
                            "text":  "pear",
                            "points":  31
                        },
                        {
                            "text":  "melon/watermelon",
                            "points":  20
                        },
                        {
                            "text":  "peach",
                            "points":  10
                        },
                        {
                            "text":  "cherry",
                            "points":  4
                        },
                        {
                            "text":  "mango",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200375,
        "question":  "We asked 100 married men... Name something you wish you could be honest about with your wife.",
        "answers":  [
                        {
                            "text":  "budget/her spending",
                            "points":  31
                        },
                        {
                            "text":  "sex/yearn for orgy",
                            "points":  21
                        },
                        {
                            "text":  "my ex/still in love",
                            "points":  19
                        },
                        {
                            "text":  "her vile cooking",
                            "points":  13
                        },
                        {
                            "text":  "her looks/big booty",
                            "points":  12
                        },
                        {
                            "text":  "her housekeeping",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200376,
        "question":  "We asked 100 women... If your man were a stripper, which one of the seven dwarfs' names might his stage name be?",
        "answers":  [
                        {
                            "text":  "happy",
                            "points":  29
                        },
                        {
                            "text":  "grumpy",
                            "points":  27
                        },
                        {
                            "text":  "sleepy",
                            "points":  19
                        },
                        {
                            "text":  "bashful",
                            "points":  18
                        },
                        {
                            "text":  "doc",
                            "points":  3
                        },
                        {
                            "text":  "dopey",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200377,
        "question":  "We asked 100 married men... Name something your wife would never let you bring to bed with you.",
        "answers":  [
                        {
                            "text":  "dog/pet",
                            "points":  26
                        },
                        {
                            "text":  "food/pigs' feet",
                            "points":  23
                        },
                        {
                            "text":  "a chick/ugly one",
                            "points":  20
                        },
                        {
                            "text":  "my shoes",
                            "points":  13
                        },
                        {
                            "text":  "computer",
                            "points":  12
                        },
                        {
                            "text":  "phone",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  200378,
        "question":  "Name something done to a football you wouldn't want someone to do to your behind.",
        "answers":  [
                        {
                            "text":  "kick/punt it",
                            "points":  58
                        },
                        {
                            "text":  "throw/make a pass",
                            "points":  11
                        },
                        {
                            "text":  "deflate/inflate it",
                            "points":  10
                        },
                        {
                            "text":  "spike it",
                            "points":  9
                        },
                        {
                            "text":  "slap/punch it",
                            "points":  5
                        },
                        {
                            "text":  "grab/squeeze/pinch",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  200379,
        "question":  "We asked 100 men... Name something specific about a woman's nightie that makes it a good nightie.",
        "answers":  [
                        {
                            "text":  "see-through/sheer",
                            "points":  51
                        },
                        {
                            "text":  "short/tight",
                            "points":  21
                        },
                        {
                            "text":  "off easy/on floor",
                            "points":  11
                        },
                        {
                            "text":  "lace",
                            "points":  6
                        },
                        {
                            "text":  "crotchless",
                            "points":  6
                        },
                        {
                            "text":  "silk/satin",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200380,
        "question":  "Name something you do when a driver cuts you off that you wouldn't do if it was a cop car.",
        "answers":  [
                        {
                            "text":  "flip 'em off",
                            "points":  49
                        },
                        {
                            "text":  "honk",
                            "points":  19
                        },
                        {
                            "text":  "yell/cuss",
                            "points":  13
                        },
                        {
                            "text":  "speed up/tail/pass",
                            "points":  9
                        },
                        {
                            "text":  "nothing",
                            "points":  5
                        },
                        {
                            "text":  "swerve at/hit 'em",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200381,
        "question":  "Name something a policeman wears that his wife might ask him to wear in the bedroom.",
        "answers":  [
                        {
                            "text":  "uniform/hat",
                            "points":  46
                        },
                        {
                            "text":  "handcuffs",
                            "points":  25
                        },
                        {
                            "text":  "holster/gun",
                            "points":  12
                        },
                        {
                            "text":  "badge",
                            "points":  8
                        },
                        {
                            "text":  "billy club",
                            "points":  4
                        },
                        {
                            "text":  "bulletproof vest",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200382,
        "question":  "Before they can make it to the bedroom, what might newlyweds make love on?",
        "answers":  [
                        {
                            "text":  "the couch",
                            "points":  45
                        },
                        {
                            "text":  "the floor/rug",
                            "points":  31
                        },
                        {
                            "text":  "table/at reception",
                            "points":  15
                        },
                        {
                            "text":  "car seat/hood",
                            "points":  3
                        },
                        {
                            "text":  "an airplane",
                            "points":  2
                        },
                        {
                            "text":  "kitchen countertop",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200383,
        "question":  "We asked 100 single women... Name something you'd hate to see fall out of your date's underwear.",
        "answers":  [
                        {
                            "text":  "a sock",
                            "points":  43
                        },
                        {
                            "text":  "poo/day-old turd",
                            "points":  24
                        },
                        {
                            "text":  "condom/slightly used",
                            "points":  13
                        },
                        {
                            "text":  "toilet paper",
                            "points":  11
                        },
                        {
                            "text":  "drugs/'shrooms",
                            "points":  5
                        },
                        {
                            "text":  "a phone",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200384,
        "question":  "If he were brave, name a kind of plastic surgery a man might tell his wife she should get.",
        "answers":  [
                        {
                            "text":  "boob job",
                            "points":  42
                        },
                        {
                            "text":  "facelift",
                            "points":  22
                        },
                        {
                            "text":  "lipo",
                            "points":  13
                        },
                        {
                            "text":  "tummy tuck",
                            "points":  10
                        },
                        {
                            "text":  "va-jay shrinkage",
                            "points":  7
                        },
                        {
                            "text":  "nose job",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200385,
        "question":  "We asked 100 men... Name something that's important in a girlfriend but not in a mom.",
        "answers":  [
                        {
                            "text":  "sexy bod/perky jugs",
                            "points":  40
                        },
                        {
                            "text":  "hot sex/loves kink",
                            "points":  27
                        },
                        {
                            "text":  "beautiful face",
                            "points":  23
                        },
                        {
                            "text":  "spontaneity",
                            "points":  3
                        },
                        {
                            "text":  "courage/independence",
                            "points":  3
                        },
                        {
                            "text":  "duds/booty cutters",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200386,
        "question":  "We asked 100 women... Fill in the blank: If you could have two husbands, one might be strictly for what?",
        "answers":  [
                        {
                            "text":  "boinking",
                            "points":  39
                        },
                        {
                            "text":  "cleaning/chores",
                            "points":  22
                        },
                        {
                            "text":  "makin' moolah",
                            "points":  16
                        },
                        {
                            "text":  "companionship/talk",
                            "points":  13
                        },
                        {
                            "text":  "cooking",
                            "points":  5
                        },
                        {
                            "text":  "home repairs",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200387,
        "question":  "We asked 100 men... Name a place that's filled with bad girls.",
        "answers":  [
                        {
                            "text":  "strip joint",
                            "points":  38
                        },
                        {
                            "text":  "bar/biker bar/club",
                            "points":  33
                        },
                        {
                            "text":  "jail/prison",
                            "points":  19
                        },
                        {
                            "text":  "las vegas",
                            "points":  3
                        },
                        {
                            "text":  "red-light district",
                            "points":  3
                        },
                        {
                            "text":  "all-girl high school",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200388,
        "question":  "We asked 100 single women... If you were shopping for a husband, what part of a man would you squeeze before you buy him?",
        "answers":  [
                        {
                            "text":  "arms/bulging biceps",
                            "points":  36
                        },
                        {
                            "text":  "his cinnamon buns",
                            "points":  31
                        },
                        {
                            "text":  "ken stiffy, jr.",
                            "points":  16
                        },
                        {
                            "text":  "his rosy cheeks",
                            "points":  10
                        },
                        {
                            "text":  "his wallet",
                            "points":  3
                        },
                        {
                            "text":  "his hand",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200389,
        "question":  "We asked 100 men... Name something you're not too proud to beg for.",
        "answers":  [
                        {
                            "text":  "coochie coochie!",
                            "points":  32
                        },
                        {
                            "text":  "money/raise",
                            "points":  28
                        },
                        {
                            "text":  "forgiveness",
                            "points":  17
                        },
                        {
                            "text":  "food/ma's taters",
                            "points":  14
                        },
                        {
                            "text":  "\"help\"",
                            "points":  4
                        },
                        {
                            "text":  "new car",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200390,
        "question":  "Name something a child does to convince his parents he's too sick for school.",
        "answers":  [
                        {
                            "text":  "coughs",
                            "points":  29
                        },
                        {
                            "text":  "barfs/fake puke",
                            "points":  23
                        },
                        {
                            "text":  "heats thermometer",
                            "points":  17
                        },
                        {
                            "text":  "holds his tummy",
                            "points":  14
                        },
                        {
                            "text":  "whines/moans/cries",
                            "points":  10
                        },
                        {
                            "text":  "sad face/mopes",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  200391,
        "question":  "Name something you might judge by how good it smells.",
        "answers":  [
                        {
                            "text":  "food/milk/coffee",
                            "points":  70
                        },
                        {
                            "text":  "flowers",
                            "points":  12
                        },
                        {
                            "text":  "perfume",
                            "points":  6
                        },
                        {
                            "text":  "wine",
                            "points":  4
                        },
                        {
                            "text":  "person/my hook up",
                            "points":  3
                        },
                        {
                            "text":  "soap",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200392,
        "question":  "Name something that's described as sharp.",
        "answers":  [
                        {
                            "text":  "knife",
                            "points":  69
                        },
                        {
                            "text":  "needle",
                            "points":  8
                        },
                        {
                            "text":  "tack",
                            "points":  7
                        },
                        {
                            "text":  "pencil",
                            "points":  5
                        },
                        {
                            "text":  "razor blade",
                            "points":  5
                        },
                        {
                            "text":  "intelligence",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200393,
        "question":  "Name something a woman will do with a baby or a Chihuahua.",
        "answers":  [
                        {
                            "text":  "hold/cuddle/carry",
                            "points":  65
                        },
                        {
                            "text":  "baby talk/coo",
                            "points":  11
                        },
                        {
                            "text":  "feed/breast-feed",
                            "points":  7
                        },
                        {
                            "text":  "dress in clothes",
                            "points":  6
                        },
                        {
                            "text":  "kiss",
                            "points":  5
                        },
                        {
                            "text":  "pet/rub",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200394,
        "question":  "Name something that might come out of a person's nose.",
        "answers":  [
                        {
                            "text":  "snot/nest o' boogers",
                            "points":  64
                        },
                        {
                            "text":  "blood",
                            "points":  12
                        },
                        {
                            "text":  "hair",
                            "points":  10
                        },
                        {
                            "text":  "air/breath",
                            "points":  7
                        },
                        {
                            "text":  "a sneeze",
                            "points":  2
                        },
                        {
                            "text":  "soda/a drink",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200395,
        "question":  "If a male stripper called himself Tarzan, what might he do during his act?",
        "answers":  [
                        {
                            "text":  "swing/on a vine",
                            "points":  60
                        },
                        {
                            "text":  "yell",
                            "points":  15
                        },
                        {
                            "text":  "beat his chest",
                            "points":  14
                        },
                        {
                            "text":  "strip/show banana",
                            "points":  3
                        },
                        {
                            "text":  "wear loincloth",
                            "points":  3
                        },
                        {
                            "text":  "climb tree/pole",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200396,
        "question":  "Name something the dog guests each did to the casket at Fido's funeral.",
        "answers":  [
                        {
                            "text":  "peed on it",
                            "points":  56
                        },
                        {
                            "text":  "sniffed it",
                            "points":  22
                        },
                        {
                            "text":  "left bone/toy/treat",
                            "points":  7
                        },
                        {
                            "text":  "licked it",
                            "points":  6
                        },
                        {
                            "text":  "put paws on it",
                            "points":  3
                        },
                        {
                            "text":  "wagged tail at it",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200397,
        "question":  "Name an office supply you'd use to pick food out of your teeth.",
        "answers":  [
                        {
                            "text":  "paper clip",
                            "points":  53
                        },
                        {
                            "text":  "paper/envelope",
                            "points":  12
                        },
                        {
                            "text":  "staple",
                            "points":  9
                        },
                        {
                            "text":  "pen/pencil",
                            "points":  9
                        },
                        {
                            "text":  "letter opener",
                            "points":  8
                        },
                        {
                            "text":  "tack/pin",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  200398,
        "question":  "What would you do if a coworker kept flirting with you at work?",
        "answers":  [
                        {
                            "text":  "flirt back",
                            "points":  36
                        },
                        {
                            "text":  "tell them to stop",
                            "points":  29
                        },
                        {
                            "text":  "ignore/distance",
                            "points":  15
                        },
                        {
                            "text":  "report them",
                            "points":  11
                        },
                        {
                            "text":  "ask out on date",
                            "points":  4
                        },
                        {
                            "text":  "kick/slap them",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200399,
        "question":  "We asked 100 men... Name a food that makes a woman look sexy when she eats it.",
        "answers":  [
                        {
                            "text":  "banana",
                            "points":  35
                        },
                        {
                            "text":  "strawberry",
                            "points":  31
                        },
                        {
                            "text":  "ice cream/popsicle",
                            "points":  14
                        },
                        {
                            "text":  "juicy wiener",
                            "points":  10
                        },
                        {
                            "text":  "succulent peach",
                            "points":  4
                        },
                        {
                            "text":  "spaghetti",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200400,
        "question":  "Name a reason you'd rather be a horse than a cow.",
        "answers":  [
                        {
                            "text":  "not killed/eaten",
                            "points":  29
                        },
                        {
                            "text":  "run faster",
                            "points":  27
                        },
                        {
                            "text":  "hot looks/hair/bod",
                            "points":  18
                        },
                        {
                            "text":  "no udder/milking",
                            "points":  17
                        },
                        {
                            "text":  "i wanna be ridden",
                            "points":  4
                        },
                        {
                            "text":  "smell better",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200401,
        "question":  "We asked 100 married women... Fill in the blank: I still love my man, even though he doesn't have a very good what?",
        "answers":  [
                        {
                            "text":  "job/income",
                            "points":  24
                        },
                        {
                            "text":  "personality/'tude",
                            "points":  24
                        },
                        {
                            "text":  "brain/memory",
                            "points":  18
                        },
                        {
                            "text":  "fashion style",
                            "points":  14
                        },
                        {
                            "text":  "physique/body",
                            "points":  10
                        },
                        {
                            "text":  "head of hair",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  200402,
        "question":  "If you dated a fireman, name something of his you might like to play with.",
        "answers":  [
                        {
                            "text":  "his fire hose",
                            "points":  61
                        },
                        {
                            "text":  "helmet/uniform",
                            "points":  17
                        },
                        {
                            "text":  "his truck/siren",
                            "points":  8
                        },
                        {
                            "text":  "smoldering bod/rod",
                            "points":  4
                        },
                        {
                            "text":  "his dalmatian",
                            "points":  4
                        },
                        {
                            "text":  "the fire pole",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200403,
        "question":  "We asked 100 married men... Name something about a chicken that might remind you of your wife.",
        "answers":  [
                        {
                            "text":  "its legs/thighs",
                            "points":  51
                        },
                        {
                            "text":  "its breasts",
                            "points":  31
                        },
                        {
                            "text":  "its wings/flapping",
                            "points":  6
                        },
                        {
                            "text":  "its neck",
                            "points":  3
                        },
                        {
                            "text":  "its strut",
                            "points":  3
                        },
                        {
                            "text":  "its skin",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200404,
        "question":  "Name someone who tells you to lie back and relax.",
        "answers":  [
                        {
                            "text":  "dentist/hygienist",
                            "points":  49
                        },
                        {
                            "text":  "doctor/gyno",
                            "points":  25
                        },
                        {
                            "text":  "my spouse/mate",
                            "points":  8
                        },
                        {
                            "text":  "my therapist/shrink",
                            "points":  7
                        },
                        {
                            "text":  "masseur/masseuse",
                            "points":  4
                        },
                        {
                            "text":  "dominating hooker",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200405,
        "question":  "Name something that might bite you for which you would require medical attention.",
        "answers":  [
                        {
                            "text":  "snake/rattlesnake",
                            "points":  48
                        },
                        {
                            "text":  "bug/brown recluse",
                            "points":  22
                        },
                        {
                            "text":  "dog",
                            "points":  20
                        },
                        {
                            "text":  "alligator",
                            "points":  2
                        },
                        {
                            "text":  "raccoon",
                            "points":  2
                        },
                        {
                            "text":  "rat",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200406,
        "question":  "Name something the world's smallest strip club might have only one of inside.",
        "answers":  [
                        {
                            "text":  "pole",
                            "points":  45
                        },
                        {
                            "text":  "stripper",
                            "points":  37
                        },
                        {
                            "text":  "bathroom",
                            "points":  7
                        },
                        {
                            "text":  "stage",
                            "points":  3
                        },
                        {
                            "text":  "emcee",
                            "points":  2
                        },
                        {
                            "text":  "bouncer",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200407,
        "question":  "Name something people run across their lips.",
        "answers":  [
                        {
                            "text":  "chapstick/balm",
                            "points":  44
                        },
                        {
                            "text":  "tongue",
                            "points":  26
                        },
                        {
                            "text":  "lipstick/gloss",
                            "points":  19
                        },
                        {
                            "text":  "finger",
                            "points":  3
                        },
                        {
                            "text":  "food/juicy cherry",
                            "points":  2
                        },
                        {
                            "text":  "ice/water",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200408,
        "question":  "Instead of a bouquet, what might a stripper bride throw at her wedding?",
        "answers":  [
                        {
                            "text":  "panties/g-string",
                            "points":  42
                        },
                        {
                            "text":  "garter/belt",
                            "points":  20
                        },
                        {
                            "text":  "bra/pasties",
                            "points":  15
                        },
                        {
                            "text":  "dollar bills/$",
                            "points":  15
                        },
                        {
                            "text":  "condoms",
                            "points":  2
                        },
                        {
                            "text":  "her dress",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200409,
        "question":  "What's the worst thing someone can notice about you as you walk out of a public restroom?",
        "answers":  [
                        {
                            "text":  "fly's open",
                            "points":  38
                        },
                        {
                            "text":  "tp stuck on me",
                            "points":  30
                        },
                        {
                            "text":  "wet spot on pants",
                            "points":  12
                        },
                        {
                            "text":  "skirt up/in panties",
                            "points":  10
                        },
                        {
                            "text":  "messy hair/sex hair",
                            "points":  3
                        },
                        {
                            "text":  "wet/dirty hands",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200410,
        "question":  "When the boss's door is closed for an hour, what's going on in there?",
        "answers":  [
                        {
                            "text":  "they're sleeping",
                            "points":  39
                        },
                        {
                            "text":  "meeting/working",
                            "points":  21
                        },
                        {
                            "text":  "private call",
                            "points":  14
                        },
                        {
                            "text":  "poking/hot secretary",
                            "points":  12
                        },
                        {
                            "text":  "chewing out/firing",
                            "points":  7
                        },
                        {
                            "text":  "online/games",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200411,
        "question":  "Name something a man loves to spend time with because it doesn't talk.",
        "answers":  [
                        {
                            "text":  "pet/dog",
                            "points":  33
                        },
                        {
                            "text":  "tv/remote",
                            "points":  28
                        },
                        {
                            "text":  "car/truck",
                            "points":  24
                        },
                        {
                            "text":  "booze/beer",
                            "points":  5
                        },
                        {
                            "text":  "boat",
                            "points":  3
                        },
                        {
                            "text":  "book",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200412,
        "question":  "If a man swims nude in the ocean, what sea creature might mistake his manhood for food?",
        "answers":  [
                        {
                            "text":  "fish/shark/jellyfish",
                            "points":  80
                        },
                        {
                            "text":  "turtle",
                            "points":  6
                        },
                        {
                            "text":  "crab",
                            "points":  3
                        },
                        {
                            "text":  "seal",
                            "points":  2
                        },
                        {
                            "text":  "octopus",
                            "points":  2
                        },
                        {
                            "text":  "dolphin",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200413,
        "question":  "Name something associated with cheerleaders.",
        "answers":  [
                        {
                            "text":  "pom-poms",
                            "points":  73
                        },
                        {
                            "text":  "hot uniforms",
                            "points":  11
                        },
                        {
                            "text":  "bouncing boobs",
                            "points":  3
                        },
                        {
                            "text":  "cheers",
                            "points":  3
                        },
                        {
                            "text":  "football/sports",
                            "points":  3
                        },
                        {
                            "text":  "dance/gymnastics",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200414,
        "question":  "We asked 100 women... When you close your eyes and get a sloppy kiss, what animal does it feel like you're kissing?",
        "answers":  [
                        {
                            "text":  "dog",
                            "points":  72
                        },
                        {
                            "text":  "fish",
                            "points":  8
                        },
                        {
                            "text":  "horse",
                            "points":  8
                        },
                        {
                            "text":  "camel",
                            "points":  3
                        },
                        {
                            "text":  "monkey/ape",
                            "points":  2
                        },
                        {
                            "text":  "cow",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200415,
        "question":  "Name something in a bedroom you hope doesn't get broken while making whoopee.",
        "answers":  [
                        {
                            "text":  "bed/headboard",
                            "points":  68
                        },
                        {
                            "text":  "bodies/\"dickie jr.\"",
                            "points":  14
                        },
                        {
                            "text":  "lamp/lights",
                            "points":  6
                        },
                        {
                            "text":  "mirrors/over bed",
                            "points":  3
                        },
                        {
                            "text":  "the tv",
                            "points":  2
                        },
                        {
                            "text":  "condom/peter parka",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200416,
        "question":  "Name a place a man goes for some incredible breasts and legs.",
        "answers":  [
                        {
                            "text":  "restaurant/kfc",
                            "points":  63
                        },
                        {
                            "text":  "strip joint",
                            "points":  19
                        },
                        {
                            "text":  "bar/club",
                            "points":  5
                        },
                        {
                            "text":  "home/bedroom",
                            "points":  4
                        },
                        {
                            "text":  "the gym",
                            "points":  2
                        },
                        {
                            "text":  "plastic surgeon",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200417,
        "question":  "Name something a woman might put in her bra.",
        "answers":  [
                        {
                            "text":  "money",
                            "points":  62
                        },
                        {
                            "text":  "kleenex/t.p.",
                            "points":  21
                        },
                        {
                            "text":  "phone",
                            "points":  4
                        },
                        {
                            "text":  "falsies/pads",
                            "points":  3
                        },
                        {
                            "text":  "socks",
                            "points":  3
                        },
                        {
                            "text":  "her yummy bosoms",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200418,
        "question":  "Name something a man might name after himself.",
        "answers":  [
                        {
                            "text":  "his son/daughter",
                            "points":  61
                        },
                        {
                            "text":  "his car/truck",
                            "points":  15
                        },
                        {
                            "text":  "his dog",
                            "points":  11
                        },
                        {
                            "text":  "his manaconda",
                            "points":  4
                        },
                        {
                            "text":  "a sandwich",
                            "points":  2
                        },
                        {
                            "text":  "his boat",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200419,
        "question":  "We asked 100 married men... Admit it -- name something of your wife's you use when she's not looking.",
        "answers":  [
                        {
                            "text":  "comb/brush",
                            "points":  57
                        },
                        {
                            "text":  "nail clippers",
                            "points":  12
                        },
                        {
                            "text":  "tweezers",
                            "points":  11
                        },
                        {
                            "text":  "apron",
                            "points":  5
                        },
                        {
                            "text":  "loofah",
                            "points":  5
                        },
                        {
                            "text":  "toothbrush",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  200420,
        "question":  "We asked 100 men... Name something you'd hate to be wearing when you wake up after a wild party.",
        "answers":  [
                        {
                            "text":  "panties/girl duds",
                            "points":  56
                        },
                        {
                            "text":  "not a thing",
                            "points":  20
                        },
                        {
                            "text":  "my clothes/shoes",
                            "points":  8
                        },
                        {
                            "text":  "lipstick/makeup",
                            "points":  7
                        },
                        {
                            "text":  "a condom/used",
                            "points":  2
                        },
                        {
                            "text":  "a lamp shade",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200421,
        "question":  "Name something a pet psychologist does to make his patient feel relaxed.",
        "answers":  [
                        {
                            "text":  "pets/scratches",
                            "points":  54
                        },
                        {
                            "text":  "gives food/treats",
                            "points":  21
                        },
                        {
                            "text":  "talks/soothingly",
                            "points":  8
                        },
                        {
                            "text":  "drugs/pet prozac",
                            "points":  6
                        },
                        {
                            "text":  "plays/toys",
                            "points":  3
                        },
                        {
                            "text":  "music/atomic dog",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200422,
        "question":  "We asked 100 men... When the woman you're dating says she has something important to tell you, what's the first thing you think of?",
        "answers":  [
                        {
                            "text":  "she's pregnant",
                            "points":  53
                        },
                        {
                            "text":  "she's dumping me",
                            "points":  28
                        },
                        {
                            "text":  "wants to marry me",
                            "points":  6
                        },
                        {
                            "text":  "meet her parents",
                            "points":  3
                        },
                        {
                            "text":  "she needs money",
                            "points":  3
                        },
                        {
                            "text":  "she's married",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200423,
        "question":  "We asked 100 women... Name something your boyfriend stops doing that makes you suspect you're about to be dumped.",
        "answers":  [
                        {
                            "text":  "calling/texting",
                            "points":  45
                        },
                        {
                            "text":  "taking me out",
                            "points":  17
                        },
                        {
                            "text":  "kissing me",
                            "points":  15
                        },
                        {
                            "text":  "holding me/hands",
                            "points":  8
                        },
                        {
                            "text":  "\"i love you\"",
                            "points":  6
                        },
                        {
                            "text":  "hittin' my hoo-ha",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200424,
        "question":  "What's a bad plant to grow in a nudist colony?",
        "answers":  [
                        {
                            "text":  "poison ivy/oak",
                            "points":  44
                        },
                        {
                            "text":  "cactus",
                            "points":  37
                        },
                        {
                            "text":  "rose bush",
                            "points":  6
                        },
                        {
                            "text":  "thistle",
                            "points":  3
                        },
                        {
                            "text":  "venus flytrap",
                            "points":  3
                        },
                        {
                            "text":  "stinging nettle",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200425,
        "question":  "We asked 100 men... What would you do if you found out your girlfriend was posing nude for money?",
        "answers":  [
                        {
                            "text":  "ask for a cut/half",
                            "points":  42
                        },
                        {
                            "text":  "dump her",
                            "points":  31
                        },
                        {
                            "text":  "make her buy dinner",
                            "points":  7
                        },
                        {
                            "text":  "get upset/angry",
                            "points":  5
                        },
                        {
                            "text":  "be proud/brag",
                            "points":  5
                        },
                        {
                            "text":  "get copies of pics",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  200426,
        "question":  "Name something you need to have if you want to open a disco.",
        "answers":  [
                        {
                            "text":  "groovy tunes/dj",
                            "points":  35
                        },
                        {
                            "text":  "disco ball",
                            "points":  35
                        },
                        {
                            "text":  "money",
                            "points":  11
                        },
                        {
                            "text":  "dance floor",
                            "points":  7
                        },
                        {
                            "text":  "licenses/permits",
                            "points":  4
                        },
                        {
                            "text":  "funky lights",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200427,
        "question":  "Name something that follows the word \"boy.\"",
        "answers":  [
                        {
                            "text":  "boy toy",
                            "points":  28
                        },
                        {
                            "text":  "boyfriend",
                            "points":  27
                        },
                        {
                            "text":  "boyhood",
                            "points":  23
                        },
                        {
                            "text":  "boy scout",
                            "points":  9
                        },
                        {
                            "text":  "boy wonder",
                            "points":  6
                        },
                        {
                            "text":  "boy george",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200428,
        "question":  "Name something you would like Steve Harvey to give you.",
        "answers":  [
                        {
                            "text":  "money/$1 million",
                            "points":  73
                        },
                        {
                            "text":  "big hug/juicy kiss",
                            "points":  6
                        },
                        {
                            "text":  "advice",
                            "points":  6
                        },
                        {
                            "text":  "a vacation",
                            "points":  3
                        },
                        {
                            "text":  "a new car",
                            "points":  3
                        },
                        {
                            "text":  "jokes/laughs",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200429,
        "question":  "We asked 100 married women... Even though he's your man, what do you hate watching your husband do in the nude?",
        "answers":  [
                        {
                            "text":  "pee/launch a doody",
                            "points":  57
                        },
                        {
                            "text":  "brush & floss",
                            "points":  17
                        },
                        {
                            "text":  "shower",
                            "points":  13
                        },
                        {
                            "text":  "shave",
                            "points":  3
                        },
                        {
                            "text":  "strut around",
                            "points":  2
                        },
                        {
                            "text":  "the dishes",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200430,
        "question":  "We asked 100 women... Name something you're pretty good at figuring out about a man on a first date.",
        "answers":  [
                        {
                            "text":  "character/intentions",
                            "points":  50
                        },
                        {
                            "text":  "personality/humor",
                            "points":  23
                        },
                        {
                            "text":  "his iq",
                            "points":  7
                        },
                        {
                            "text":  "if homie's rich",
                            "points":  6
                        },
                        {
                            "text":  "hygiene/washes nads",
                            "points":  5
                        },
                        {
                            "text":  "his name",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200431,
        "question":  "Two men fight over a woman. What might two women fight over?",
        "answers":  [
                        {
                            "text":  "man/chris hemsworth",
                            "points":  46
                        },
                        {
                            "text":  "clothes/shoes",
                            "points":  31
                        },
                        {
                            "text":  "purse/handbag",
                            "points":  8
                        },
                        {
                            "text":  "money",
                            "points":  4
                        },
                        {
                            "text":  "woman/beyonce",
                            "points":  3
                        },
                        {
                            "text":  "jewelry/ring",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200432,
        "question":  "We asked 100 men... Name something Popeye has that you wouldn't want.",
        "answers":  [
                        {
                            "text":  "his gal, olive oyl",
                            "points":  42
                        },
                        {
                            "text":  "pipe/smoking habit",
                            "points":  21
                        },
                        {
                            "text":  "tattoos",
                            "points":  11
                        },
                        {
                            "text":  "odd/giant arms",
                            "points":  9
                        },
                        {
                            "text":  "one eye/squinty eye",
                            "points":  6
                        },
                        {
                            "text":  "canned spinach",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  200433,
        "question":  "Name something a church might do to encourage men to attend church on Super Bowl Sunday.",
        "answers":  [
                        {
                            "text":  "show game/big tv",
                            "points":  41
                        },
                        {
                            "text":  "free food/beer",
                            "points":  38
                        },
                        {
                            "text":  "quick/early service",
                            "points":  9
                        },
                        {
                            "text":  "take bets",
                            "points":  2
                        },
                        {
                            "text":  "give away game tix",
                            "points":  2
                        },
                        {
                            "text":  "sermon about game",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200434,
        "question":  "What do chickens have that you're glad you don't?",
        "answers":  [
                        {
                            "text":  "feathers",
                            "points":  34
                        },
                        {
                            "text":  "beak",
                            "points":  30
                        },
                        {
                            "text":  "thin/drumstick legs",
                            "points":  8
                        },
                        {
                            "text":  "eggs to lay",
                            "points":  8
                        },
                        {
                            "text":  "wings",
                            "points":  7
                        },
                        {
                            "text":  "clawed feet",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  200435,
        "question":  "Name something rabbits must really find sexy about each other to mate so much.",
        "answers":  [
                        {
                            "text":  "long suckable ears",
                            "points":  31
                        },
                        {
                            "text":  "soft colorful fur",
                            "points":  29
                        },
                        {
                            "text":  "sweet funky scent",
                            "points":  12
                        },
                        {
                            "text":  "big bushy tail",
                            "points":  8
                        },
                        {
                            "text":  "nice junk/hot hump",
                            "points":  8
                        },
                        {
                            "text":  "hot face/pink nose",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  200436,
        "question":  "Name something that would be hard to eat if you only had one tooth.",
        "answers":  [
                        {
                            "text":  "apples",
                            "points":  28
                        },
                        {
                            "text":  "corn on the cob",
                            "points":  27
                        },
                        {
                            "text":  "steak/meat",
                            "points":  27
                        },
                        {
                            "text":  "chewy candy/gum",
                            "points":  8
                        },
                        {
                            "text":  "carrots",
                            "points":  2
                        },
                        {
                            "text":  "sandwich/gyro",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200437,
        "question":  "Name the worst place to be caught in a lie.",
        "answers":  [
                        {
                            "text":  "church",
                            "points":  25
                        },
                        {
                            "text":  "job/interview",
                            "points":  24
                        },
                        {
                            "text":  "court/witness stand",
                            "points":  18
                        },
                        {
                            "text":  "home/in bed",
                            "points":  15
                        },
                        {
                            "text":  "police station/jail",
                            "points":  10
                        },
                        {
                            "text":  "parents' house",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200438,
        "question":  "Give me a word that rhymes with \"lucky.\"",
        "answers":  [
                        {
                            "text":  "ducky",
                            "points":  54
                        },
                        {
                            "text":  "plucky",
                            "points":  15
                        },
                        {
                            "text":  "bucky",
                            "points":  8
                        },
                        {
                            "text":  "yucky",
                            "points":  7
                        },
                        {
                            "text":  "mucky",
                            "points":  6
                        },
                        {
                            "text":  "sucky",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200439,
        "question":  "Name something a couple might decide to get that starts with the letter \"D.\"",
        "answers":  [
                        {
                            "text":  "divorce",
                            "points":  41
                        },
                        {
                            "text":  "dog",
                            "points":  32
                        },
                        {
                            "text":  "diamond",
                            "points":  8
                        },
                        {
                            "text":  "dinner",
                            "points":  5
                        },
                        {
                            "text":  "dildo",
                            "points":  4
                        },
                        {
                            "text":  "dishwasher",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200440,
        "question":  "We asked 100 women... Name some information you would tell your best friend for her own good.",
        "answers":  [
                        {
                            "text":  "her man's a ho/jerk",
                            "points":  34
                        },
                        {
                            "text":  "smells/butt breath",
                            "points":  20
                        },
                        {
                            "text":  "fash'n police coming",
                            "points":  14
                        },
                        {
                            "text":  "food-filled teeth",
                            "points":  12
                        },
                        {
                            "text":  "slim down, porky!",
                            "points":  8
                        },
                        {
                            "text":  "quit boozing, lush!",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  200441,
        "question":  "When you were a baby, you loved your pacifier. What do you love sucking on now?",
        "answers":  [
                        {
                            "text":  "candy/lollipops",
                            "points":  65
                        },
                        {
                            "text":  "handful o' hooters",
                            "points":  12
                        },
                        {
                            "text":  "popsicles/ice cream",
                            "points":  7
                        },
                        {
                            "text":  "beer/bottle",
                            "points":  3
                        },
                        {
                            "text":  "lemons/limes",
                            "points":  3
                        },
                        {
                            "text":  "ice cubes",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200442,
        "question":  "Name something a lonely guy likes to squeeze because it feels like a woman.",
        "answers":  [
                        {
                            "text":  "pillows",
                            "points":  59
                        },
                        {
                            "text":  "melons",
                            "points":  13
                        },
                        {
                            "text":  "balloons",
                            "points":  9
                        },
                        {
                            "text":  "ball/stress ball",
                            "points":  5
                        },
                        {
                            "text":  "doll/blow-up",
                            "points":  4
                        },
                        {
                            "text":  "oranges",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200443,
        "question":  "We asked 100 women... What would you do if a man asked you when you were expecting your baby and you weren't pregnant?",
        "answers":  [
                        {
                            "text":  "\"i'm not!\"/cuss out",
                            "points":  48
                        },
                        {
                            "text":  "hit/slap him",
                            "points":  16
                        },
                        {
                            "text":  "walk away",
                            "points":  9
                        },
                        {
                            "text":  "cry",
                            "points":  8
                        },
                        {
                            "text":  "dirty look/frown",
                            "points":  6
                        },
                        {
                            "text":  "make up a due date",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  200444,
        "question":  "Name something specific grandpa would hate to find out grandma did with his toupee.",
        "answers":  [
                        {
                            "text":  "cleaned house",
                            "points":  45
                        },
                        {
                            "text":  "threw it away",
                            "points":  21
                        },
                        {
                            "text":  "washed it",
                            "points":  19
                        },
                        {
                            "text":  "dropped in toilet",
                            "points":  3
                        },
                        {
                            "text":  "wiped her butt",
                            "points":  2
                        },
                        {
                            "text":  "gave to dog/to wear",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200445,
        "question":  "Name something that would be hard to do if you only had one lip instead of two.",
        "answers":  [
                        {
                            "text":  "kiss",
                            "points":  42
                        },
                        {
                            "text":  "whistle",
                            "points":  23
                        },
                        {
                            "text":  "drink",
                            "points":  9
                        },
                        {
                            "text":  "eat/chew",
                            "points":  9
                        },
                        {
                            "text":  "talk",
                            "points":  5
                        },
                        {
                            "text":  "suck",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200446,
        "question":  "We asked 100 married people... Name a nice four-letter word you call your spouse.",
        "answers":  [
                        {
                            "text":  "babe/baby",
                            "points":  40
                        },
                        {
                            "text":  "love",
                            "points":  34
                        },
                        {
                            "text":  "dear",
                            "points":  12
                        },
                        {
                            "text":  "dork",
                            "points":  2
                        },
                        {
                            "text":  "bobo",
                            "points":  2
                        },
                        {
                            "text":  "cute",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200447,
        "question":  "Name the occupation of someone who could cut you.",
        "answers":  [
                        {
                            "text":  "surgeon/dr.",
                            "points":  39
                        },
                        {
                            "text":  "butcher",
                            "points":  22
                        },
                        {
                            "text":  "barber/hairdresser",
                            "points":  21
                        },
                        {
                            "text":  "chef/cook",
                            "points":  5
                        },
                        {
                            "text":  "knife thrower",
                            "points":  3
                        },
                        {
                            "text":  "sports coach",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200448,
        "question":  "We asked 100 men... Name a place you might run into your boss where you'd both agree to keep it a secret.",
        "answers":  [
                        {
                            "text":  "strip joint",
                            "points":  56
                        },
                        {
                            "text":  "bar/club",
                            "points":  15
                        },
                        {
                            "text":  "porn palace",
                            "points":  7
                        },
                        {
                            "text":  "ms. kitty's cathouse",
                            "points":  6
                        },
                        {
                            "text":  "eatery/waffle house",
                            "points":  5
                        },
                        {
                            "text":  "the bathroom/stall",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200449,
        "question":  "We asked 100 men... Fill in the blank: Dear God, please don't let me die in the middle of what?",
        "answers":  [
                        {
                            "text":  "sex/with my pillow",
                            "points":  53
                        },
                        {
                            "text":  "peeing/a rough poo",
                            "points":  15
                        },
                        {
                            "text":  "traffic/driving",
                            "points":  12
                        },
                        {
                            "text":  "a big game",
                            "points":  7
                        },
                        {
                            "text":  "desert/new mexico",
                            "points":  2
                        },
                        {
                            "text":  "the street/road",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200450,
        "question":  "Name something real housewives throw when they are drunk.",
        "answers":  [
                        {
                            "text":  "their drink",
                            "points":  45
                        },
                        {
                            "text":  "tantrum/insults",
                            "points":  22
                        },
                        {
                            "text":  "dishes",
                            "points":  10
                        },
                        {
                            "text":  "bottles",
                            "points":  6
                        },
                        {
                            "text":  "a party/orgy",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200451,
        "question":  "Name a reason you'd have to call 911 when you're making love.",
        "answers":  [
                        {
                            "text":  "injury/broke weenie",
                            "points":  38
                        },
                        {
                            "text":  "heart attack",
                            "points":  34
                        },
                        {
                            "text":  "stuck together",
                            "points":  7
                        },
                        {
                            "text":  "house/bed on fire",
                            "points":  5
                        },
                        {
                            "text":  "lover croaked",
                            "points":  4
                        },
                        {
                            "text":  "lost handcuff key",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200452,
        "question":  "Name a part of someone that some might say is as big as an elephant.",
        "answers":  [
                        {
                            "text":  "badonk",
                            "points":  31
                        },
                        {
                            "text":  "ears",
                            "points":  22
                        },
                        {
                            "text":  "nose",
                            "points":  21
                        },
                        {
                            "text":  "ego",
                            "points":  7
                        },
                        {
                            "text":  "tallywacker",
                            "points":  6
                        },
                        {
                            "text":  "brain/memory",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200453,
        "question":  "Name something big that most women would like to have.",
        "answers":  [
                        {
                            "text":  "house",
                            "points":  29
                        },
                        {
                            "text":  "double g hooters",
                            "points":  23
                        },
                        {
                            "text":  "bank account",
                            "points":  14
                        },
                        {
                            "text":  "ring/diamonds",
                            "points":  12
                        },
                        {
                            "text":  "beyonce's butt",
                            "points":  8
                        },
                        {
                            "text":  "car/suv",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  200454,
        "question":  "Fill in the blank: You'd be shocked if grandma ever announced to the family, \"I'm\" what?",
        "answers":  [
                        {
                            "text":  "pregnant",
                            "points":  48
                        },
                        {
                            "text":  "gay/craving cooch",
                            "points":  30
                        },
                        {
                            "text":  "a man/named elmer",
                            "points":  6
                        },
                        {
                            "text":  "dying",
                            "points":  2
                        },
                        {
                            "text":  "engaged",
                            "points":  2
                        },
                        {
                            "text":  "outta here/travel'g",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200455,
        "question":  "Name something dogs tinkle on that would be weird to see a person tinkle on.",
        "answers":  [
                        {
                            "text":  "fire hydrant",
                            "points":  41
                        },
                        {
                            "text":  "tree/bush",
                            "points":  24
                        },
                        {
                            "text":  "grass/my lawn",
                            "points":  9
                        },
                        {
                            "text":  "chair/furniture",
                            "points":  6
                        },
                        {
                            "text":  "pole/lamppost",
                            "points":  5
                        },
                        {
                            "text":  "tire",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  200456,
        "question":  "Name a word that rhymes with \"soup.\"",
        "answers":  [
                        {
                            "text":  "poop",
                            "points":  36
                        },
                        {
                            "text":  "coupe/coop",
                            "points":  25
                        },
                        {
                            "text":  "loop",
                            "points":  17
                        },
                        {
                            "text":  "troop",
                            "points":  5
                        },
                        {
                            "text":  "hoop",
                            "points":  4
                        },
                        {
                            "text":  "group",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200457,
        "question":  "We asked 100 men... Name a state your wife's behind is as big as.",
        "answers":  [
                        {
                            "text":  "texas",
                            "points":  29
                        },
                        {
                            "text":  "rhode island",
                            "points":  25
                        },
                        {
                            "text":  "california",
                            "points":  19
                        },
                        {
                            "text":  "florida",
                            "points":  8
                        },
                        {
                            "text":  "ohio",
                            "points":  5
                        },
                        {
                            "text":  "alaska",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200458,
        "question":  "Name someone you wish were alive and all their impersonators were dead.",
        "answers":  [
                        {
                            "text":  "elvis",
                            "points":  67
                        },
                        {
                            "text":  "robin williams",
                            "points":  6
                        },
                        {
                            "text":  "abraham lincoln",
                            "points":  5
                        },
                        {
                            "text":  "charlie chaplin",
                            "points":  4
                        },
                        {
                            "text":  "michael jackson",
                            "points":  4
                        },
                        {
                            "text":  "winston churchill",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200459,
        "question":  "Name an occupation for which you have to have good moves.",
        "answers":  [
                        {
                            "text":  "pro dancer/ballet",
                            "points":  58
                        },
                        {
                            "text":  "pro sports",
                            "points":  15
                        },
                        {
                            "text":  "stripper",
                            "points":  8
                        },
                        {
                            "text":  "ninja",
                            "points":  3
                        },
                        {
                            "text":  "sales/marketing",
                            "points":  3
                        },
                        {
                            "text":  "waiter",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200460,
        "question":  "Name a place it would just be wrong for a woman to be seen wearing a thong.",
        "answers":  [
                        {
                            "text":  "church/nunnery",
                            "points":  53
                        },
                        {
                            "text":  "store/mall",
                            "points":  17
                        },
                        {
                            "text":  "work/office",
                            "points":  9
                        },
                        {
                            "text":  "wedding",
                            "points":  5
                        },
                        {
                            "text":  "buffet/restaurant",
                            "points":  3
                        },
                        {
                            "text":  "family reunion",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200461,
        "question":  "Name a reason you can't sit down.",
        "answers":  [
                        {
                            "text":  "sore/pain/'rhoids",
                            "points":  52
                        },
                        {
                            "text":  "no seats",
                            "points":  13
                        },
                        {
                            "text":  "gotta pee/lay cable",
                            "points":  9
                        },
                        {
                            "text":  "nervous/hyper",
                            "points":  8
                        },
                        {
                            "text":  "too busy/working",
                            "points":  4
                        },
                        {
                            "text":  "pants too tight",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200462,
        "question":  "Name something some women used to do with their dolls that now they do with their men.",
        "answers":  [
                        {
                            "text":  "dress/undress",
                            "points":  51
                        },
                        {
                            "text":  "kiss/cuddle",
                            "points":  14
                        },
                        {
                            "text":  "fix hair",
                            "points":  8
                        },
                        {
                            "text":  "talk/boss around",
                            "points":  7
                        },
                        {
                            "text":  "play/house",
                            "points":  5
                        },
                        {
                            "text":  "bathe",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200463,
        "question":  "If grandpa got a divorce, where might he go to look for a new wife?",
        "answers":  [
                        {
                            "text":  "senior home/ctr.",
                            "points":  45
                        },
                        {
                            "text":  "web/hotgeezer.com",
                            "points":  12
                        },
                        {
                            "text":  "church",
                            "points":  10
                        },
                        {
                            "text":  "bar",
                            "points":  9
                        },
                        {
                            "text":  "bingo parlor",
                            "points":  7
                        },
                        {
                            "text":  "store/mall",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  200464,
        "question":  "Fill in the blank: Old enough to what?",
        "answers":  [
                        {
                            "text":  "know better",
                            "points":  43
                        },
                        {
                            "text":  "drink/beer",
                            "points":  31
                        },
                        {
                            "text":  "die",
                            "points":  6
                        },
                        {
                            "text":  "care/not care",
                            "points":  3
                        },
                        {
                            "text":  "drive",
                            "points":  3
                        },
                        {
                            "text":  "vote",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200465,
        "question":  "What's the most embarrassing thing a cop could find in the trunk of your car?",
        "answers":  [
                        {
                            "text":  "kinky toys/doll",
                            "points":  36
                        },
                        {
                            "text":  "panties/dirty duds",
                            "points":  18
                        },
                        {
                            "text":  "body/my dead uncle",
                            "points":  16
                        },
                        {
                            "text":  "condoms/x-small",
                            "points":  9
                        },
                        {
                            "text":  "drugs",
                            "points":  5
                        },
                        {
                            "text":  "porn",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  200466,
        "question":  "Santa brings coal to naughty children. What might the Easter Bunny bring to them?",
        "answers":  [
                        {
                            "text":  "rotten eggs",
                            "points":  35
                        },
                        {
                            "text":  "his poop",
                            "points":  23
                        },
                        {
                            "text":  "grass",
                            "points":  9
                        },
                        {
                            "text":  "veggies/carrot",
                            "points":  9
                        },
                        {
                            "text":  "rocks/stones",
                            "points":  8
                        },
                        {
                            "text":  "bad/diet candy",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  200467,
        "question":  "Besides hay, name something a farmer and his wife might have a romp in.",
        "answers":  [
                        {
                            "text":  "fields/cow pasture",
                            "points":  34
                        },
                        {
                            "text":  "their bed",
                            "points":  22
                        },
                        {
                            "text":  "barn/horse stable",
                            "points":  20
                        },
                        {
                            "text":  "mud/pig pen",
                            "points":  5
                        },
                        {
                            "text":  "on the tractor",
                            "points":  4
                        },
                        {
                            "text":  "pickup truck",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200468,
        "question":  "If grandpa lost his glasses, what might he squeeze thinking is grandma's behind?",
        "answers":  [
                        {
                            "text":  "pillow/sofa",
                            "points":  57
                        },
                        {
                            "text":  "the dog/cat",
                            "points":  7
                        },
                        {
                            "text":  "someone else/a nun",
                            "points":  7
                        },
                        {
                            "text":  "orange/fruit",
                            "points":  7
                        },
                        {
                            "text":  "her leg/thighs",
                            "points":  6
                        },
                        {
                            "text":  "her saggy boobs",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200469,
        "question":  "We asked 100 men... Fill in the blank: Every girl I meet tells me I'm what?",
        "answers":  [
                        {
                            "text":  "hot/handsome",
                            "points":  52
                        },
                        {
                            "text":  "funny/fun",
                            "points":  14
                        },
                        {
                            "text":  "nice",
                            "points":  11
                        },
                        {
                            "text":  "a hard worker",
                            "points":  4
                        },
                        {
                            "text":  "old",
                            "points":  4
                        },
                        {
                            "text":  "brainy/a nerd",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200470,
        "question":  "Name something a woman with a great body might also have that's not so great.",
        "answers":  [
                        {
                            "text":  "personality/'tude",
                            "points":  51
                        },
                        {
                            "text":  "pea-brain",
                            "points":  12
                        },
                        {
                            "text":  "face of a warthog",
                            "points":  12
                        },
                        {
                            "text":  "nasty mangled feet",
                            "points":  6
                        },
                        {
                            "text":  "a man/douchey one",
                            "points":  4
                        },
                        {
                            "text":  "health/oozing rash",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200471,
        "question":  "We asked 100 women... Name something you're sorry to say no man has never bought.",
        "answers":  [
                        {
                            "text":  "jewelry/ring",
                            "points":  50
                        },
                        {
                            "text":  "car",
                            "points":  17
                        },
                        {
                            "text":  "lingerie/crotchless",
                            "points":  7
                        },
                        {
                            "text":  "trip/to paris",
                            "points":  6
                        },
                        {
                            "text":  "perfume",
                            "points":  5
                        },
                        {
                            "text":  "home/my own island",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200472,
        "question":  "If your right hand was broken, name something you'd have to start doing with your left.",
        "answers":  [
                        {
                            "text":  "writing",
                            "points":  46
                        },
                        {
                            "text":  "eating",
                            "points":  16
                        },
                        {
                            "text":  "washing dishes",
                            "points":  13
                        },
                        {
                            "text":  "driving",
                            "points":  6
                        },
                        {
                            "text":  "wiping my booty",
                            "points":  4
                        },
                        {
                            "text":  "putting on makeup",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200473,
        "question":  "Name an occasion that makes a guy very nervous.",
        "answers":  [
                        {
                            "text":  "wedding day",
                            "points":  44
                        },
                        {
                            "text":  "date/blind date",
                            "points":  26
                        },
                        {
                            "text":  "meeting her family",
                            "points":  7
                        },
                        {
                            "text":  "valentine's day",
                            "points":  5
                        },
                        {
                            "text":  "proposing",
                            "points":  3
                        },
                        {
                            "text":  "job interview",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200474,
        "question":  "Fill in the blank: If a woman meets a guy on FarmersOnly.com, he might be too attached to his what?",
        "answers":  [
                        {
                            "text":  "tractor/plow",
                            "points":  44
                        },
                        {
                            "text":  "cows",
                            "points":  19
                        },
                        {
                            "text":  "horses",
                            "points":  8
                        },
                        {
                            "text":  "farm/land",
                            "points":  7
                        },
                        {
                            "text":  "goats",
                            "points":  6
                        },
                        {
                            "text":  "sheep",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200475,
        "question":  "Name something spring breakers do in Florida that grandpa might like to join in on.",
        "answers":  [
                        {
                            "text":  "drink/beer pong",
                            "points":  42
                        },
                        {
                            "text":  "swim/skinny-dip",
                            "points":  20
                        },
                        {
                            "text":  "sports/fishing",
                            "points":  10
                        },
                        {
                            "text":  "dance",
                            "points":  7
                        },
                        {
                            "text":  "sunbathe",
                            "points":  5
                        },
                        {
                            "text":  "watch hot chicks",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200476,
        "question":  "Oh no -- you meant to send naked pictures to your beloved. But they accidentally went to who?",
        "answers":  [
                        {
                            "text":  "parents",
                            "points":  39
                        },
                        {
                            "text":  "boss/coworker",
                            "points":  23
                        },
                        {
                            "text":  "friend",
                            "points":  9
                        },
                        {
                            "text":  "brother/sister",
                            "points":  9
                        },
                        {
                            "text":  "kids",
                            "points":  4
                        },
                        {
                            "text":  "ex",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200477,
        "question":  "Name a specific place where you hate to see couples making out.",
        "answers":  [
                        {
                            "text":  "restaurant",
                            "points":  24
                        },
                        {
                            "text":  "movies/theater",
                            "points":  19
                        },
                        {
                            "text":  "park/playground",
                            "points":  16
                        },
                        {
                            "text":  "church",
                            "points":  15
                        },
                        {
                            "text":  "store/mall",
                            "points":  11
                        },
                        {
                            "text":  "car/my back seat",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200478,
        "question":  "Name a kind of place that might have mirrors installed on the ceiling.",
        "answers":  [
                        {
                            "text":  "hotel/motel",
                            "points":  45
                        },
                        {
                            "text":  "home/bedroom",
                            "points":  11
                        },
                        {
                            "text":  "strip joint",
                            "points":  9
                        },
                        {
                            "text":  "bar/club",
                            "points":  9
                        },
                        {
                            "text":  "fun house",
                            "points":  7
                        },
                        {
                            "text":  "store/dress'g room",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  200479,
        "question":  "Name something people ride that isn't as easy as riding a bike.",
        "answers":  [
                        {
                            "text":  "unicycle",
                            "points":  29
                        },
                        {
                            "text":  "motorcycle/scooter",
                            "points":  25
                        },
                        {
                            "text":  "skateboard",
                            "points":  13
                        },
                        {
                            "text":  "horse",
                            "points":  12
                        },
                        {
                            "text":  "bull/mechanical",
                            "points":  5
                        },
                        {
                            "text":  "camel",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200480,
        "question":  "Name something men do just like a bear.",
        "answers":  [
                        {
                            "text":  "sleep/snore",
                            "points":  25
                        },
                        {
                            "text":  "growl/roar",
                            "points":  22
                        },
                        {
                            "text":  "scratch",
                            "points":  12
                        },
                        {
                            "text":  "hug/cuddle",
                            "points":  11
                        },
                        {
                            "text":  "eat",
                            "points":  10
                        },
                        {
                            "text":  "poop/pee/in woods",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  200481,
        "question":  "Name something in the house that a woman might use to murder her husband.",
        "answers":  [
                        {
                            "text":  "knife",
                            "points":  56
                        },
                        {
                            "text":  "gun",
                            "points":  15
                        },
                        {
                            "text":  "poison",
                            "points":  5
                        },
                        {
                            "text":  "pot/pan",
                            "points":  4
                        },
                        {
                            "text":  "ice pick",
                            "points":  3
                        },
                        {
                            "text":  "pills",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200482,
        "question":  "Name something a woman hopes doesn't break right before going out on a big date.",
        "answers":  [
                        {
                            "text":  "shoe/heel",
                            "points":  40
                        },
                        {
                            "text":  "fingernail",
                            "points":  30
                        },
                        {
                            "text":  "bra",
                            "points":  6
                        },
                        {
                            "text":  "car",
                            "points":  4
                        },
                        {
                            "text":  "hair dryer",
                            "points":  3
                        },
                        {
                            "text":  "her water",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200483,
        "question":  "Name a part of your lover's body you'd like to eat a chocolate mold of.",
        "answers":  [
                        {
                            "text":  "boobs/nips/pecs",
                            "points":  40
                        },
                        {
                            "text":  "wonder down under",
                            "points":  18
                        },
                        {
                            "text":  "hot thick lips",
                            "points":  11
                        },
                        {
                            "text":  "hands/fingers",
                            "points":  7
                        },
                        {
                            "text":  "doodymaker",
                            "points":  6
                        },
                        {
                            "text":  "beating heart",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200484,
        "question":  "Name a bakery product people use when referring to parts of their body.",
        "answers":  [
                        {
                            "text":  "buns",
                            "points":  36
                        },
                        {
                            "text":  "muffin/top",
                            "points":  22
                        },
                        {
                            "text":  "rolls",
                            "points":  9
                        },
                        {
                            "text":  "dough",
                            "points":  8
                        },
                        {
                            "text":  "donut",
                            "points":  7
                        },
                        {
                            "text":  "bread/basket",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200485,
        "question":  "Name something some people are desperate to get out of.",
        "answers":  [
                        {
                            "text":  "debt/taxes",
                            "points":  45
                        },
                        {
                            "text":  "work/job",
                            "points":  14
                        },
                        {
                            "text":  "marriage/rela'ship",
                            "points":  11
                        },
                        {
                            "text":  "jail",
                            "points":  7
                        },
                        {
                            "text":  "jury duty",
                            "points":  5
                        },
                        {
                            "text":  "bad/blind date",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200486,
        "question":  "We asked 100 women... Name something you'd have to get used to if you married a pirate.",
        "answers":  [
                        {
                            "text":  "his hook/one hand",
                            "points":  36
                        },
                        {
                            "text":  "his peg leg",
                            "points":  15
                        },
                        {
                            "text":  "his eye patch",
                            "points":  13
                        },
                        {
                            "text":  "the sea/sailing",
                            "points":  9
                        },
                        {
                            "text":  "his scruffy beard",
                            "points":  6
                        },
                        {
                            "text":  "his parrot",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  200487,
        "question":  "Name something doctors should have in their waiting room to make the wait more fun.",
        "answers":  [
                        {
                            "text":  "games/video games",
                            "points":  25
                        },
                        {
                            "text":  "tv/movies",
                            "points":  18
                        },
                        {
                            "text":  "open bar",
                            "points":  15
                        },
                        {
                            "text":  "magazines/playboy",
                            "points":  14
                        },
                        {
                            "text":  "computer/internet",
                            "points":  8
                        },
                        {
                            "text":  "food/milkshake",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  200488,
        "question":  "When a man is on the phone with his wife, what does she start talking about that would make him pretend the call is breaking up?",
        "answers":  [
                        {
                            "text":  "chores/repairs",
                            "points":  21
                        },
                        {
                            "text":  "money",
                            "points":  19
                        },
                        {
                            "text":  "where r u/time home?",
                            "points":  17
                        },
                        {
                            "text":  "shop'g/go to store",
                            "points":  13
                        },
                        {
                            "text":  "his in-laws",
                            "points":  10
                        },
                        {
                            "text":  "their children",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  200489,
        "question":  "Name a state whose people have a lot of attitude.",
        "answers":  [
                        {
                            "text":  "new york",
                            "points":  45
                        },
                        {
                            "text":  "california",
                            "points":  23
                        },
                        {
                            "text":  "new jersey",
                            "points":  7
                        },
                        {
                            "text":  "georgia",
                            "points":  3
                        },
                        {
                            "text":  "michigan",
                            "points":  3
                        },
                        {
                            "text":  "texas",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200490,
        "question":  "Name something your neighbors can't seem to do without making a lot of noise.",
        "answers":  [
                        {
                            "text":  "have a party",
                            "points":  24
                        },
                        {
                            "text":  "yard work",
                            "points":  23
                        },
                        {
                            "text":  "\"sugar the cookie\"",
                            "points":  11
                        },
                        {
                            "text":  "come & go/drive off",
                            "points":  11
                        },
                        {
                            "text":  "fight/argue",
                            "points":  9
                        },
                        {
                            "text":  "vacuum/clean",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  200491,
        "question":  "Name something a smuggler hides things in.",
        "answers":  [
                        {
                            "text":  "luggage/bag/pouch",
                            "points":  23
                        },
                        {
                            "text":  "clothes/shoes",
                            "points":  20
                        },
                        {
                            "text":  "body/poop chute",
                            "points":  19
                        },
                        {
                            "text":  "car/tire/trunk",
                            "points":  16
                        },
                        {
                            "text":  "a cave",
                            "points":  3
                        },
                        {
                            "text":  "box/crate",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200492,
        "question":  "We asked 100 men... Name something a woman does that shows she likes you.",
        "answers":  [
                        {
                            "text":  "smiles",
                            "points":  23
                        },
                        {
                            "text":  "plays with hair",
                            "points":  20
                        },
                        {
                            "text":  "winks/bats eyelashes",
                            "points":  19
                        },
                        {
                            "text":  "dresses sexy",
                            "points":  9
                        },
                        {
                            "text":  "kisses me",
                            "points":  7
                        },
                        {
                            "text":  "cooks dinner",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  200493,
        "question":  "Fill in the blank: A woman might knock a man out with her what?",
        "answers":  [
                        {
                            "text":  "purse/handbag",
                            "points":  21
                        },
                        {
                            "text":  "fist/hand",
                            "points":  21
                        },
                        {
                            "text":  "beauty",
                            "points":  18
                        },
                        {
                            "text":  "sweater puppies",
                            "points":  13
                        },
                        {
                            "text":  "shoes/stilettos",
                            "points":  7
                        },
                        {
                            "text":  "shapely badonk",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200494,
        "question":  "Name something that might be strong and silent.",
        "answers":  [
                        {
                            "text":  "person/mute boxer",
                            "points":  50
                        },
                        {
                            "text":  "animal/tiger",
                            "points":  14
                        },
                        {
                            "text":  "farts",
                            "points":  8
                        },
                        {
                            "text":  "a rock",
                            "points":  4
                        },
                        {
                            "text":  "steel/metal",
                            "points":  4
                        },
                        {
                            "text":  "a tree",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200495,
        "question":  "Name something specific that you turn over.",
        "answers":  [
                        {
                            "text":  "pancakes",
                            "points":  44
                        },
                        {
                            "text":  "hot slobbery pillow",
                            "points":  12
                        },
                        {
                            "text":  "mattress",
                            "points":  9
                        },
                        {
                            "text":  "pages of book",
                            "points":  8
                        },
                        {
                            "text":  "car/engine",
                            "points":  5
                        },
                        {
                            "text":  "eggs",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  200496,
        "question":  "Name a sea creature that a scuba diver wouldn't want to look at him romantically.",
        "answers":  [
                        {
                            "text":  "shark",
                            "points":  36
                        },
                        {
                            "text":  "octopus",
                            "points":  25
                        },
                        {
                            "text":  "whale",
                            "points":  7
                        },
                        {
                            "text":  "dolphin",
                            "points":  5
                        },
                        {
                            "text":  "squid",
                            "points":  5
                        },
                        {
                            "text":  "eel",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  200497,
        "question":  "Name a place where you see a lot of nervous people.",
        "answers":  [
                        {
                            "text":  "doctor/dentist ofc.",
                            "points":  35
                        },
                        {
                            "text":  "courthouse",
                            "points":  24
                        },
                        {
                            "text":  "hospital/e.r.",
                            "points":  11
                        },
                        {
                            "text":  "job interview/work",
                            "points":  6
                        },
                        {
                            "text":  "irs/tax office",
                            "points":  4
                        },
                        {
                            "text":  "police station/jail",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200498,
        "question":  "We asked 100 men... Name something a dog can do that you can't.",
        "answers":  [
                        {
                            "text":  "lick self/butt",
                            "points":  42
                        },
                        {
                            "text":  "sleep all day",
                            "points":  13
                        },
                        {
                            "text":  "run fast",
                            "points":  9
                        },
                        {
                            "text":  "bark",
                            "points":  6
                        },
                        {
                            "text":  "scratch neck w/ leg",
                            "points":  6
                        },
                        {
                            "text":  "walk on all fours",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  200499,
        "question":  "Name something a woman gets for herself because she's tired of waiting for a man to do it.",
        "answers":  [
                        {
                            "text":  "jewelry/ring",
                            "points":  39
                        },
                        {
                            "text":  "flowers",
                            "points":  12
                        },
                        {
                            "text":  "clothes/shoes",
                            "points":  12
                        },
                        {
                            "text":  "vibrator/big \"o\"",
                            "points":  11
                        },
                        {
                            "text":  "candy/chocolate",
                            "points":  4
                        },
                        {
                            "text":  "car",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200500,
        "question":  "Give me the name of an expensive car that a man might also name one of his children.",
        "answers":  [
                        {
                            "text":  "mercedes",
                            "points":  38
                        },
                        {
                            "text":  "porsche",
                            "points":  20
                        },
                        {
                            "text":  "lexus",
                            "points":  13
                        },
                        {
                            "text":  "ferrari",
                            "points":  5
                        },
                        {
                            "text":  "jaguar",
                            "points":  3
                        },
                        {
                            "text":  "bentley",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200501,
        "question":  "We asked 100 married men... Name something you like to watch your wife do.",
        "answers":  [
                        {
                            "text":  "cook",
                            "points":  27
                        },
                        {
                            "text":  "dress/undress",
                            "points":  19
                        },
                        {
                            "text":  "sleep",
                            "points":  14
                        },
                        {
                            "text":  "shower",
                            "points":  13
                        },
                        {
                            "text":  "bend over",
                            "points":  5
                        },
                        {
                            "text":  "clean",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200502,
        "question":  "Name something that some men like little and some like big.",
        "answers":  [
                        {
                            "text":  "knockers/nipples",
                            "points":  24
                        },
                        {
                            "text":  "cars/trucks",
                            "points":  18
                        },
                        {
                            "text":  "tiny gals/big mamas",
                            "points":  14
                        },
                        {
                            "text":  "food/portions",
                            "points":  13
                        },
                        {
                            "text":  "butts",
                            "points":  10
                        },
                        {
                            "text":  "dogs",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200503,
        "question":  "If your dog understood you, what would it not want to hear you talking about?",
        "answers":  [
                        {
                            "text":  "vet/snip snip",
                            "points":  38
                        },
                        {
                            "text":  "sex/fave position",
                            "points":  25
                        },
                        {
                            "text":  "bath time",
                            "points":  8
                        },
                        {
                            "text":  "another dog",
                            "points":  4
                        },
                        {
                            "text":  "poop/scooping",
                            "points":  3
                        },
                        {
                            "text":  "my love of cats",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200504,
        "question":  "Name something it would be mean to put in someone's shoe.",
        "answers":  [
                        {
                            "text":  "steaming doody",
                            "points":  34
                        },
                        {
                            "text":  "a tack",
                            "points":  15
                        },
                        {
                            "text":  "gum",
                            "points":  12
                        },
                        {
                            "text":  "super glue",
                            "points":  12
                        },
                        {
                            "text":  "bug/tarantula",
                            "points":  5
                        },
                        {
                            "text":  "gravel/rocks",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200505,
        "question":  "Name something from her first wedding a bride might use again for her second.",
        "answers":  [
                        {
                            "text":  "dress/veil",
                            "points":  32
                        },
                        {
                            "text":  "shoes",
                            "points":  17
                        },
                        {
                            "text":  "garter belt",
                            "points":  12
                        },
                        {
                            "text":  "the ring/jewelry",
                            "points":  10
                        },
                        {
                            "text":  "bridesmaids",
                            "points":  6
                        },
                        {
                            "text":  "cake topper",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200506,
        "question":  "Fill in the blank: A wife who wants to get her husband's attention should stand in front of the TV holding what?",
        "answers":  [
                        {
                            "text":  "beer/booze",
                            "points":  22
                        },
                        {
                            "text":  "her clothes/undies",
                            "points":  17
                        },
                        {
                            "text":  "the remote",
                            "points":  15
                        },
                        {
                            "text":  "food/wings",
                            "points":  13
                        },
                        {
                            "text":  "her eager jugs/bod",
                            "points":  9
                        },
                        {
                            "text":  "weapon/axe",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  200507,
        "question":  "Young lovers put whipped cream on each other. What does an old couple put on each other?",
        "answers":  [
                        {
                            "text":  "bengay/med ointment",
                            "points":  48
                        },
                        {
                            "text":  "covers/blanket",
                            "points":  11
                        },
                        {
                            "text":  "clothes",
                            "points":  11
                        },
                        {
                            "text":  "lotion/anti-wrinkle",
                            "points":  4
                        },
                        {
                            "text":  "ice cream",
                            "points":  3
                        },
                        {
                            "text":  "chocolate",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200508,
        "question":  "Name something an 80-year-old man might bring with him on a date with a 25-year-old.",
        "answers":  [
                        {
                            "text":  "viagra/his meds",
                            "points":  42
                        },
                        {
                            "text":  "money/wallet",
                            "points":  13
                        },
                        {
                            "text":  "flowers",
                            "points":  11
                        },
                        {
                            "text":  "his cane/walker",
                            "points":  6
                        },
                        {
                            "text":  "oxygen",
                            "points":  4
                        },
                        {
                            "text":  "eyeglasses",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200509,
        "question":  "Name something a man would never get criticized for doing in public but a woman would.",
        "answers":  [
                        {
                            "text":  "going shirtless",
                            "points":  37
                        },
                        {
                            "text":  "taking a squirt",
                            "points":  22
                        },
                        {
                            "text":  "cuss/yell/argue",
                            "points":  6
                        },
                        {
                            "text":  "flirting/catcalls",
                            "points":  6
                        },
                        {
                            "text":  "scratch'g/the goods",
                            "points":  5
                        },
                        {
                            "text":  "boozing/keg stand",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200510,
        "question":  "Name something it only takes two minutes to do.",
        "answers":  [
                        {
                            "text":  "brush my teeth",
                            "points":  34
                        },
                        {
                            "text":  "pee/snap a yam",
                            "points":  14
                        },
                        {
                            "text":  "nooner/quickie",
                            "points":  12
                        },
                        {
                            "text":  "eat/a snack",
                            "points":  11
                        },
                        {
                            "text":  "cook/microwave",
                            "points":  5
                        },
                        {
                            "text":  "shave",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200511,
        "question":  "Name something that gets pulled off.",
        "answers":  [
                        {
                            "text":  "my panties/clothes",
                            "points":  52
                        },
                        {
                            "text":  "band-aid/bandage",
                            "points":  12
                        },
                        {
                            "text":  "robbery/scam",
                            "points":  6
                        },
                        {
                            "text":  "label/tag",
                            "points":  3
                        },
                        {
                            "text":  "stunt/prank",
                            "points":  3
                        },
                        {
                            "text":  "hair/body hair",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200512,
        "question":  "Name an expression with the word \"bottom\" in it.",
        "answers":  [
                        {
                            "text":  "bottoms up",
                            "points":  38
                        },
                        {
                            "text":  "rock-bottom",
                            "points":  15
                        },
                        {
                            "text":  "bottom-feeder",
                            "points":  8
                        },
                        {
                            "text":  "...of the barrel",
                            "points":  7
                        },
                        {
                            "text":  "bottom line",
                            "points":  6
                        },
                        {
                            "text":  "bottom out",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  200513,
        "question":  "Name a place you've learned to keep your mouth shut if you want to stay out of trouble.",
        "answers":  [
                        {
                            "text":  "work",
                            "points":  23
                        },
                        {
                            "text":  "church",
                            "points":  13
                        },
                        {
                            "text":  "court",
                            "points":  13
                        },
                        {
                            "text":  "home/bedroom",
                            "points":  10
                        },
                        {
                            "text":  "school",
                            "points":  10
                        },
                        {
                            "text":  "police station/jail",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  200514,
        "question":  "Besides \"hooters,\" give me another word or words for breasts that a bar might call itself.",
        "answers":  [
                        {
                            "text":  "jugs",
                            "points":  18
                        },
                        {
                            "text":  "boobs/boobies",
                            "points":  15
                        },
                        {
                            "text":  "knockers",
                            "points":  15
                        },
                        {
                            "text":  "melons",
                            "points":  11
                        },
                        {
                            "text":  "ta-tas",
                            "points":  9
                        },
                        {
                            "text":  "twin peaks",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  200515,
        "question":  "Give me a word starting with \"H\" a man might use to describe his wife.",
        "answers":  [
                        {
                            "text":  "hot/hottie",
                            "points":  31
                        },
                        {
                            "text":  "happy",
                            "points":  12
                        },
                        {
                            "text":  "honey",
                            "points":  9
                        },
                        {
                            "text":  "hag",
                            "points":  8
                        },
                        {
                            "text":  "honest",
                            "points":  7
                        },
                        {
                            "text":  "horny",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  200516,
        "question":  "Name something that gives a woman a lift.",
        "answers":  [
                        {
                            "text":  "a good bra",
                            "points":  28
                        },
                        {
                            "text":  "food/sweets",
                            "points":  15
                        },
                        {
                            "text":  "flowers",
                            "points":  8
                        },
                        {
                            "text":  "hooker heels",
                            "points":  8
                        },
                        {
                            "text":  "a compliment",
                            "points":  7
                        },
                        {
                            "text":  "spa day",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  200517,
        "question":  "After she marries him, name a specific activity a woman would hate to find out her man likes to do in the nude.",
        "answers":  [
                        {
                            "text":  "exercise/jog",
                            "points":  15
                        },
                        {
                            "text":  "cook/fry chicken",
                            "points":  14
                        },
                        {
                            "text":  "watch tv/judge judy",
                            "points":  13
                        },
                        {
                            "text":  "yard work/garden",
                            "points":  12
                        },
                        {
                            "text":  "clean house",
                            "points":  9
                        },
                        {
                            "text":  "dance",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  200518,
        "question":  "Name something you do to your dog that you wouldn't do to your best friend.",
        "answers":  [
                        {
                            "text":  "pet/rub belly",
                            "points":  26
                        },
                        {
                            "text":  "bathe/groom them",
                            "points":  11
                        },
                        {
                            "text":  "walk them/on a leash",
                            "points":  10
                        },
                        {
                            "text":  "kiss/let lick me",
                            "points":  8
                        },
                        {
                            "text":  "medical stuff/neuter",
                            "points":  7
                        },
                        {
                            "text":  "feed him/on floor",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  200519,
        "question":  "A kid might say, \"I saw mommy kissing Santa Claus. And I saw daddy kissing\" who?",
        "answers":  [
                        {
                            "text":  "mrs. claus",
                            "points":  22
                        },
                        {
                            "text":  "mommy",
                            "points":  17
                        },
                        {
                            "text":  "the neighbor",
                            "points":  9
                        },
                        {
                            "text":  "an elf",
                            "points":  8
                        },
                        {
                            "text":  "the sitter/nanny",
                            "points":  7
                        },
                        {
                            "text":  "rudolph/reindeer",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  200520,
        "question":  "Name a state where you see lots of guys with mullet haircuts.",
        "answers":  [
                        {
                            "text":  "alabama",
                            "points":  21
                        },
                        {
                            "text":  "california",
                            "points":  12
                        },
                        {
                            "text":  "arkansas",
                            "points":  12
                        },
                        {
                            "text":  "tennessee",
                            "points":  11
                        },
                        {
                            "text":  "texas",
                            "points":  8
                        },
                        {
                            "text":  "new york",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  200521,
        "question":  "Fill in the blank: Most men have learned to never come between a woman and her what?",
        "answers":  [
                        {
                            "text":  "children",
                            "points":  23
                        },
                        {
                            "text":  "mom/parents",
                            "points":  17
                        },
                        {
                            "text":  "shoes/clothes",
                            "points":  12
                        },
                        {
                            "text":  "chocolate/sweets",
                            "points":  6
                        },
                        {
                            "text":  "hair/appointment",
                            "points":  5
                        },
                        {
                            "text":  "dog/kitty",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  200522,
        "question":  "Name someone who's a lot less intimidating if you picture them in just their underwear.",
        "answers":  [
                        {
                            "text":  "my boss",
                            "points":  23
                        },
                        {
                            "text":  "president/obama",
                            "points":  17
                        },
                        {
                            "text":  "teacher",
                            "points":  10
                        },
                        {
                            "text":  "police officer",
                            "points":  9
                        },
                        {
                            "text":  "dad",
                            "points":  5
                        },
                        {
                            "text":  "spouse/mate",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200523,
        "question":  "Name something you'd hate to discover you slept on top of all night long.",
        "answers":  [
                        {
                            "text":  "bugs/spiders",
                            "points":  17
                        },
                        {
                            "text":  "pee/poo",
                            "points":  16
                        },
                        {
                            "text":  "pet/boa constrictor",
                            "points":  12
                        },
                        {
                            "text":  "person/someone ugly",
                            "points":  11
                        },
                        {
                            "text":  "ironed/dirty clothes",
                            "points":  6
                        },
                        {
                            "text":  "my glasses",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  200524,
        "question":  "Name something that gets pulled.",
        "answers":  [
                        {
                            "text":  "hair",
                            "points":  18
                        },
                        {
                            "text":  "pork",
                            "points":  16
                        },
                        {
                            "text":  "teeth",
                            "points":  16
                        },
                        {
                            "text":  "wagon",
                            "points":  8
                        },
                        {
                            "text":  "taffy",
                            "points":  5
                        },
                        {
                            "text":  "my finger",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200525,
        "question":  "Name something people swap.",
        "answers":  [
                        {
                            "text":  "clothes/shoes",
                            "points":  16
                        },
                        {
                            "text":  "phone numbers",
                            "points":  14
                        },
                        {
                            "text":  "stories/gossip",
                            "points":  13
                        },
                        {
                            "text":  "spit/germs",
                            "points":  10
                        },
                        {
                            "text":  "books",
                            "points":  8
                        },
                        {
                            "text":  "recipes",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  200526,
        "question":  "Keeping it clean, name another word or expression for having sex.",
        "answers":  [
                        {
                            "text":  "making love",
                            "points":  35
                        },
                        {
                            "text":  "doing it",
                            "points":  10
                        },
                        {
                            "text":  "making whoopee",
                            "points":  8
                        },
                        {
                            "text":  "intercourse",
                            "points":  6
                        },
                        {
                            "text":  "nookie",
                            "points":  4
                        },
                        {
                            "text":  "roll in the hay",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200527,
        "question":  "Name something of yours you'd consider selling if the price were right.",
        "answers":  [
                        {
                            "text":  "my car/truck",
                            "points":  31
                        },
                        {
                            "text":  "my house",
                            "points":  13
                        },
                        {
                            "text":  "jewelry/wed'g ring",
                            "points":  7
                        },
                        {
                            "text":  "my computer/laptop",
                            "points":  5
                        },
                        {
                            "text":  "records/cds/dvds",
                            "points":  5
                        },
                        {
                            "text":  "my bod/tight booty",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200528,
        "question":  "Name something really old guys wear that makes you laugh.",
        "answers":  [
                        {
                            "text":  "suspenders",
                            "points":  20
                        },
                        {
                            "text":  "hairpieces",
                            "points":  14
                        },
                        {
                            "text":  "socks w/ sandals",
                            "points":  10
                        },
                        {
                            "text":  "pants too high",
                            "points":  9
                        },
                        {
                            "text":  "hats",
                            "points":  7
                        },
                        {
                            "text":  "bow ties",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  200529,
        "question":  "Name a woman who has curve appeal.",
        "answers":  [
                        {
                            "text":  "kim kardashian",
                            "points":  15
                        },
                        {
                            "text":  "beyonce",
                            "points":  14
                        },
                        {
                            "text":  "jennifer lopez",
                            "points":  13
                        },
                        {
                            "text":  "sofia vergara",
                            "points":  12
                        },
                        {
                            "text":  "marilyn monroe",
                            "points":  7
                        },
                        {
                            "text":  "shakira",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200530,
        "question":  "Name something that's harder to do when your hands are huge.",
        "answers":  [
                        {
                            "text":  "thread needle/sew",
                            "points":  22
                        },
                        {
                            "text":  "dial/type/text",
                            "points":  16
                        },
                        {
                            "text":  "tie shoe/knot",
                            "points":  9
                        },
                        {
                            "text":  "fix/clasp jewelry",
                            "points":  8
                        },
                        {
                            "text":  "button shirt",
                            "points":  5
                        },
                        {
                            "text":  "guitar/instrument",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200531,
        "question":  "We asked 100 married women... Name an animal your man looks like when he runs.",
        "answers":  [
                        {
                            "text":  "ape/monkey",
                            "points":  14
                        },
                        {
                            "text":  "tiger",
                            "points":  12
                        },
                        {
                            "text":  "horse",
                            "points":  11
                        },
                        {
                            "text":  "leopard",
                            "points":  9
                        },
                        {
                            "text":  "cheetah",
                            "points":  9
                        },
                        {
                            "text":  "hippopotamus",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  200532,
        "question":  "Name something that starts with the word \"tax.\"",
        "answers":  [
                        {
                            "text":  "taxidermy",
                            "points":  20
                        },
                        {
                            "text":  "taxi/taxicab",
                            "points":  17
                        },
                        {
                            "text":  "tax break",
                            "points":  9
                        },
                        {
                            "text":  "tax refund",
                            "points":  6
                        },
                        {
                            "text":  "tax evasion",
                            "points":  5
                        },
                        {
                            "text":  "taxpayer",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  200533,
        "question":  "Name a TV host who should be on everybody's \"best dressed\" list.",
        "answers":  [
                        {
                            "text":  "steve harvey",
                            "points":  18
                        },
                        {
                            "text":  "jay leno",
                            "points":  15
                        },
                        {
                            "text":  "ryan seacrest",
                            "points":  12
                        },
                        {
                            "text":  "alex trebek",
                            "points":  9
                        },
                        {
                            "text":  "pat sajak",
                            "points":  4
                        },
                        {
                            "text":  "oprah winfrey",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200534,
        "question":  "If you designed your own coffin, name something you might put in it just in case.",
        "answers":  [
                        {
                            "text":  "phone",
                            "points":  26
                        },
                        {
                            "text":  "tools/shovel",
                            "points":  11
                        },
                        {
                            "text":  "oxygen/mask",
                            "points":  9
                        },
                        {
                            "text":  "booze/beer",
                            "points":  5
                        },
                        {
                            "text":  "bible",
                            "points":  4
                        },
                        {
                            "text":  "money",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200535,
        "question":  "Whipped cream might be fun, but name something you would not want your mate spreading all over your body.",
        "answers":  [
                        {
                            "text":  "peanut butter",
                            "points":  17
                        },
                        {
                            "text":  "honey",
                            "points":  14
                        },
                        {
                            "text":  "butter",
                            "points":  9
                        },
                        {
                            "text":  "chocolate/hot fudge",
                            "points":  8
                        },
                        {
                            "text":  "jelly",
                            "points":  6
                        },
                        {
                            "text":  "hot sauce/tobasco",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200536,
        "question":  "Name something you'd have to be dead to sleep through.",
        "answers":  [
                        {
                            "text":  "earthquake",
                            "points":  15
                        },
                        {
                            "text":  "tornado",
                            "points":  10
                        },
                        {
                            "text":  "sex",
                            "points":  8
                        },
                        {
                            "text":  "fire/alarm",
                            "points":  8
                        },
                        {
                            "text":  "snoring",
                            "points":  7
                        },
                        {
                            "text":  "explosion/bomb",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  200537,
        "question":  "We asked 100 women... Name something you'd say if your boyfriend called at night and asked, \"What are you wearing?\"",
        "answers":  [
                        {
                            "text":  "nothing/skin",
                            "points":  52
                        },
                        {
                            "text":  "lingerie/bra",
                            "points":  18
                        },
                        {
                            "text":  "footie pajamas",
                            "points":  17
                        },
                        {
                            "text":  "sweats",
                            "points":  11
                        },
                        {
                            "text":  "come find out, stud",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200538,
        "question":  "We asked 100 single women... Name something your last blind date had in common with Mickey Mouse.",
        "answers":  [
                        {
                            "text":  "had big ears",
                            "points":  46
                        },
                        {
                            "text":  "had a high voice",
                            "points":  19
                        },
                        {
                            "text":  "ate cheese",
                            "points":  15
                        },
                        {
                            "text":  "he was black",
                            "points":  13
                        },
                        {
                            "text":  "he was short",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  200539,
        "question":  "We asked 100 married men... Name something you'd have a lot more of if you didn't have a wife.",
        "answers":  [
                        {
                            "text":  "money",
                            "points":  44
                        },
                        {
                            "text":  "dates/girlfriends",
                            "points":  38
                        },
                        {
                            "text":  "free time",
                            "points":  9
                        },
                        {
                            "text":  "stds",
                            "points":  5
                        },
                        {
                            "text":  "loneliness",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200540,
        "question":  "We asked 100 women... Based on his personality, what kind of meat is your man?",
        "answers":  [
                        {
                            "text":  "beef/prime rib",
                            "points":  67
                        },
                        {
                            "text":  "pig/pork chop",
                            "points":  19
                        },
                        {
                            "text":  "lamb",
                            "points":  8
                        },
                        {
                            "text":  "vegan \"meat\"/tofu",
                            "points":  3
                        },
                        {
                            "text":  "duck pate",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200541,
        "question":  "Tell me something you just know that a young child will say during a long car trip.",
        "answers":  [
                        {
                            "text":  "there yet/how long?",
                            "points":  64
                        },
                        {
                            "text":  "prairie doggin'/pee",
                            "points":  27
                        },
                        {
                            "text":  "i'm bored!",
                            "points":  3
                        },
                        {
                            "text":  "i'm hungry!",
                            "points":  3
                        },
                        {
                            "text":  "i'm tired!",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200542,
        "question":  "Give me another way people say \"dead body.\"",
        "answers":  [
                        {
                            "text":  "corpse",
                            "points":  63
                        },
                        {
                            "text":  "stiff",
                            "points":  20
                        },
                        {
                            "text":  "deceased",
                            "points":  8
                        },
                        {
                            "text":  "victim",
                            "points":  4
                        },
                        {
                            "text":  "cadaver",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200543,
        "question":  "Name something chickens do that you'd feel pretty silly doing.",
        "answers":  [
                        {
                            "text":  "cluck/crow",
                            "points":  63
                        },
                        {
                            "text":  "lay egg/sit on it",
                            "points":  16
                        },
                        {
                            "text":  "peck/ground/to eat",
                            "points":  15
                        },
                        {
                            "text":  "flap wings",
                            "points":  3
                        },
                        {
                            "text":  "scratch the dirt",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200544,
        "question":  "Which of the seven dwarfs describes how you feel after a couple of drinks?",
        "answers":  [
                        {
                            "text":  "happy",
                            "points":  56
                        },
                        {
                            "text":  "dopey",
                            "points":  25
                        },
                        {
                            "text":  "sleepy",
                            "points":  10
                        },
                        {
                            "text":  "bashful",
                            "points":  5
                        },
                        {
                            "text":  "grumpy",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200545,
        "question":  "Name something about women that proves God spent more time designing them.",
        "answers":  [
                        {
                            "text":  "hot bods/boobies!",
                            "points":  52
                        },
                        {
                            "text":  "pretty faces/hair",
                            "points":  25
                        },
                        {
                            "text":  "pop out babies",
                            "points":  11
                        },
                        {
                            "text":  "smarter",
                            "points":  6
                        },
                        {
                            "text":  "caring/patient",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  200546,
        "question":  "With the right lawyer, what can a woman get all of in a divorce instead of half?",
        "answers":  [
                        {
                            "text":  "house/real estate",
                            "points":  47
                        },
                        {
                            "text":  "the kids/custody",
                            "points":  24
                        },
                        {
                            "text":  "the money",
                            "points":  22
                        },
                        {
                            "text":  "the car",
                            "points":  4
                        },
                        {
                            "text":  "the man's soul",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200547,
        "question":  "Name something that could be made of gold in a billionaire's bathroom.",
        "answers":  [
                        {
                            "text":  "toilet/seat",
                            "points":  44
                        },
                        {
                            "text":  "faucet/sink",
                            "points":  34
                        },
                        {
                            "text":  "shower/tub",
                            "points":  16
                        },
                        {
                            "text":  "toilet paper/holder",
                            "points":  3
                        },
                        {
                            "text":  "razor",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200548,
        "question":  "Name someone at a funeral you'd be shocked to hear telling jokes.",
        "answers":  [
                        {
                            "text":  "the clergy",
                            "points":  41
                        },
                        {
                            "text":  "widow/family",
                            "points":  36
                        },
                        {
                            "text":  "the corpse",
                            "points":  10
                        },
                        {
                            "text":  "funeral director",
                            "points":  10
                        },
                        {
                            "text":  "comic/don rickles",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200549,
        "question":  "Name a reason a woman might date a man who says he never wants to get married.",
        "answers":  [
                        {
                            "text":  "big daddy got big $",
                            "points":  38
                        },
                        {
                            "text":  "he's fun/friends",
                            "points":  21
                        },
                        {
                            "text":  "neither does she",
                            "points":  18
                        },
                        {
                            "text":  "to change his mind",
                            "points":  17
                        },
                        {
                            "text":  "sex/ph.d. in punani",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  200550,
        "question":  "We asked 100 women... What would it be hard to do if you accidentally put on super glue instead of lipstick?",
        "answers":  [
                        {
                            "text":  "eat",
                            "points":  32
                        },
                        {
                            "text":  "talk",
                            "points":  32
                        },
                        {
                            "text":  "kiss",
                            "points":  25
                        },
                        {
                            "text":  "breathe",
                            "points":  8
                        },
                        {
                            "text":  "take it off",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200551,
        "question":  "Name something about Steve Harvey that makes his wife one lucky woman.",
        "answers":  [
                        {
                            "text":  "he's got bank",
                            "points":  58
                        },
                        {
                            "text":  "he's funny",
                            "points":  31
                        },
                        {
                            "text":  "panty-droppin' hot",
                            "points":  4
                        },
                        {
                            "text":  "he loves her",
                            "points":  3
                        },
                        {
                            "text":  "kind/treats well",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200552,
        "question":  "Name a chore a woman should do in the nude if she wants her man to pitch in.",
        "answers":  [
                        {
                            "text":  "clean/vacuum",
                            "points":  53
                        },
                        {
                            "text":  "wash dishes",
                            "points":  20
                        },
                        {
                            "text":  "make the bed",
                            "points":  13
                        },
                        {
                            "text":  "laundry",
                            "points":  7
                        },
                        {
                            "text":  "cook",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  200553,
        "question":  "Name a reason you might suspect a Little Leaguer is more than twelve years old.",
        "answers":  [
                        {
                            "text":  "has facial hair",
                            "points":  45
                        },
                        {
                            "text":  "size/6 ft. 200 lbs.",
                            "points":  33
                        },
                        {
                            "text":  "a little too good",
                            "points":  13
                        },
                        {
                            "text":  "has deep voice",
                            "points":  5
                        },
                        {
                            "text":  "drives a car",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200554,
        "question":  "We asked 100 single men... Name something a woman has a collection of that might frighten you away.",
        "answers":  [
                        {
                            "text":  "dolls/teddy bears",
                            "points":  41
                        },
                        {
                            "text":  "porn/homemade",
                            "points":  23
                        },
                        {
                            "text":  "cats",
                            "points":  17
                        },
                        {
                            "text":  "makeup",
                            "points":  11
                        },
                        {
                            "text":  "knives",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  200555,
        "question":  "Name something that can be inflated or deflated.",
        "answers":  [
                        {
                            "text":  "tire/inner tube",
                            "points":  33
                        },
                        {
                            "text":  "ball/football",
                            "points":  26
                        },
                        {
                            "text":  "ego/emotions",
                            "points":  18
                        },
                        {
                            "text":  "balloon",
                            "points":  13
                        },
                        {
                            "text":  "air mattress",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  200556,
        "question":  "Name something you ride that is not motorized.",
        "answers":  [
                        {
                            "text":  "a bike",
                            "points":  81
                        },
                        {
                            "text":  "a horse",
                            "points":  8
                        },
                        {
                            "text":  "my lover",
                            "points":  4
                        },
                        {
                            "text":  "a golf cart",
                            "points":  2
                        },
                        {
                            "text":  "a skateboard",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200557,
        "question":  "Name something grandma might store under her boobs.",
        "answers":  [
                        {
                            "text":  "money",
                            "points":  72
                        },
                        {
                            "text":  "tissue/hankie",
                            "points":  18
                        },
                        {
                            "text":  "cell phone",
                            "points":  3
                        },
                        {
                            "text":  "sweat",
                            "points":  2
                        },
                        {
                            "text":  ".44 special/gun",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200558,
        "question":  "If people were like dogs, what might we do when we greet each other?",
        "answers":  [
                        {
                            "text":  "sniff/booty",
                            "points":  62
                        },
                        {
                            "text":  "lick/kiss",
                            "points":  18
                        },
                        {
                            "text":  "bark",
                            "points":  9
                        },
                        {
                            "text":  "rub/touch noses",
                            "points":  6
                        },
                        {
                            "text":  "hump",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200559,
        "question":  "We asked 100 women... Name an animal that has better grooming habits than some men you've met.",
        "answers":  [
                        {
                            "text":  "cat",
                            "points":  60
                        },
                        {
                            "text":  "monkey/ape",
                            "points":  25
                        },
                        {
                            "text":  "dog",
                            "points":  8
                        },
                        {
                            "text":  "pig",
                            "points":  2
                        },
                        {
                            "text":  "raccoon",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200560,
        "question":  "We asked 100 single men... Tell me an occupation of a woman you'd date but you wouldn't marry.",
        "answers":  [
                        {
                            "text":  "stripper/dancer",
                            "points":  56
                        },
                        {
                            "text":  "police officer",
                            "points":  21
                        },
                        {
                            "text":  "doctor",
                            "points":  9
                        },
                        {
                            "text":  "bartender",
                            "points":  7
                        },
                        {
                            "text":  "hooker/street ho",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200561,
        "question":  "Name a uniform a woman wears at work that her man likes her to wear in the bedroom.",
        "answers":  [
                        {
                            "text":  "nurse",
                            "points":  43
                        },
                        {
                            "text":  "maid",
                            "points":  36
                        },
                        {
                            "text":  "police",
                            "points":  12
                        },
                        {
                            "text":  "waitress/ihop",
                            "points":  4
                        },
                        {
                            "text":  "flight attendant",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200562,
        "question":  "We asked 100 women... Name something a man cries at that tells you he's sensitive.",
        "answers":  [
                        {
                            "text":  "chick flick/tv",
                            "points":  43
                        },
                        {
                            "text":  "funeral",
                            "points":  20
                        },
                        {
                            "text":  "animal dying",
                            "points":  19
                        },
                        {
                            "text":  "birth of child",
                            "points":  10
                        },
                        {
                            "text":  "wedding",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  200563,
        "question":  "Name a number that men want to know but women don't want to tell.",
        "answers":  [
                        {
                            "text":  "age/birthdate",
                            "points":  41
                        },
                        {
                            "text":  "# of exes/hookups",
                            "points":  21
                        },
                        {
                            "text":  "poundage",
                            "points":  16
                        },
                        {
                            "text":  "phone number",
                            "points":  11
                        },
                        {
                            "text":  "bra/melon size",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  200564,
        "question":  "Name something the bride wears at a nudist wedding.",
        "answers":  [
                        {
                            "text":  "a veil",
                            "points":  32
                        },
                        {
                            "text":  "nothing/a smile",
                            "points":  22
                        },
                        {
                            "text":  "jewelry/ring",
                            "points":  22
                        },
                        {
                            "text":  "garter/belt",
                            "points":  19
                        },
                        {
                            "text":  "flowers/on nipples",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200565,
        "question":  "We asked 100 men... Name something you'd like your mate to do to your face.",
        "answers":  [
                        {
                            "text":  "kiss it",
                            "points":  53
                        },
                        {
                            "text":  "massage/stroke it",
                            "points":  36
                        },
                        {
                            "text":  "nothing",
                            "points":  3
                        },
                        {
                            "text":  "bite it",
                            "points":  2
                        },
                        {
                            "text":  "clean it/face mask",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200566,
        "question":  "Name something a dog trainer uses that a woman might use to train her man.",
        "answers":  [
                        {
                            "text":  "food/treat",
                            "points":  48
                        },
                        {
                            "text":  "whistle",
                            "points":  15
                        },
                        {
                            "text":  "leash",
                            "points":  14
                        },
                        {
                            "text":  "shock/choke/collar",
                            "points":  13
                        },
                        {
                            "text":  "verbal commands",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  200567,
        "question":  "We asked 100 men... Name something you like to see women wearing that's itty-bitty.",
        "answers":  [
                        {
                            "text":  "lingerie/nightie",
                            "points":  43
                        },
                        {
                            "text":  "bikini/swimsuit",
                            "points":  35
                        },
                        {
                            "text":  "booty shorts",
                            "points":  14
                        },
                        {
                            "text":  "earrings",
                            "points":  2
                        },
                        {
                            "text":  "skirt/dress",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200568,
        "question":  "We asked 100 married men... Name a cute animal your wife reminds you of when she shakes her tail.",
        "answers":  [
                        {
                            "text":  "bunny/rabbit",
                            "points":  25
                        },
                        {
                            "text":  "puppy/dog",
                            "points":  24
                        },
                        {
                            "text":  "squirrel",
                            "points":  19
                        },
                        {
                            "text":  "fox",
                            "points":  18
                        },
                        {
                            "text":  "kitty/cat",
                            "points":  10
                        }
                    ]
    },
    {
        "id":  200569,
        "question":  "If you felt brave, name something about Batman you might make fun of.",
        "answers":  [
                        {
                            "text":  "costume/bat ears",
                            "points":  81
                        },
                        {
                            "text":  "annoying voice",
                            "points":  5
                        },
                        {
                            "text":  "cheesy batmobile",
                            "points":  5
                        },
                        {
                            "text":  "his dead parents",
                            "points":  2
                        },
                        {
                            "text":  "robin, boy wonder",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200570,
        "question":  "When a wife is mad at her husband, name something she spends his money on.",
        "answers":  [
                        {
                            "text":  "clothes/shoes",
                            "points":  70
                        },
                        {
                            "text":  "jewelry",
                            "points":  13
                        },
                        {
                            "text":  "ice cream/food",
                            "points":  7
                        },
                        {
                            "text":  "purse",
                            "points":  3
                        },
                        {
                            "text":  "a man/pool boy",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200571,
        "question":  "Name something a lonely woman might buy for herself on Valentine's Day.",
        "answers":  [
                        {
                            "text":  "chocolate/sweets",
                            "points":  62
                        },
                        {
                            "text":  "flowers/roses",
                            "points":  21
                        },
                        {
                            "text":  "massive vibrator",
                            "points":  7
                        },
                        {
                            "text":  "wine/booze",
                            "points":  3
                        },
                        {
                            "text":  "date/speed dating",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200572,
        "question":  "Name a kind of suit that's not appropriate for the office.",
        "answers":  [
                        {
                            "text":  "birthday suit",
                            "points":  59
                        },
                        {
                            "text":  "swimsuit",
                            "points":  28
                        },
                        {
                            "text":  "jogging/sweat suit",
                            "points":  4
                        },
                        {
                            "text":  "bodysuit/catsuit",
                            "points":  2
                        },
                        {
                            "text":  "leisure suit",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200573,
        "question":  "We asked 100 men... Name something you see that you have a hard time taking your eyes off of.",
        "answers":  [
                        {
                            "text":  "babes/boobalicious",
                            "points":  74
                        },
                        {
                            "text":  "tv/movie",
                            "points":  9
                        },
                        {
                            "text":  "car/'57 chevy",
                            "points":  7
                        },
                        {
                            "text":  "nature/rainbow",
                            "points":  2
                        },
                        {
                            "text":  "a hot bro",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200574,
        "question":  "We asked 100 women... Tell me the worst place to discover a guy has a lot of hair.",
        "answers":  [
                        {
                            "text":  "his back",
                            "points":  68
                        },
                        {
                            "text":  "his ears",
                            "points":  14
                        },
                        {
                            "text":  "his chest",
                            "points":  8
                        },
                        {
                            "text":  "his pits",
                            "points":  2
                        },
                        {
                            "text":  "his pooper",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200575,
        "question":  "We asked 100 men... You kiss a woman's cheek on the first date. Where do you kiss her on the third?",
        "answers":  [
                        {
                            "text":  "mouth/uvula",
                            "points":  60
                        },
                        {
                            "text":  "any/everywhere",
                            "points":  16
                        },
                        {
                            "text":  "boobs/tip of the nip",
                            "points":  9
                        },
                        {
                            "text":  "nape/neck",
                            "points":  6
                        },
                        {
                            "text":  "butt/doody cannon",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200576,
        "question":  "Name something you wouldn't want to be flat.",
        "answers":  [
                        {
                            "text":  "tire",
                            "points":  57
                        },
                        {
                            "text":  "chest/bazoombas",
                            "points":  21
                        },
                        {
                            "text":  "my bubble butt",
                            "points":  9
                        },
                        {
                            "text":  "drink/beer/soda",
                            "points":  5
                        },
                        {
                            "text":  "the earth",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200577,
        "question":  "Name something a clown's wife finds a hair on that makes her suspect he's seeing the bearded lady.",
        "answers":  [
                        {
                            "text":  "face/makeup/nose",
                            "points":  45
                        },
                        {
                            "text":  "outfit/zipper",
                            "points":  41
                        },
                        {
                            "text":  "his wig",
                            "points":  3
                        },
                        {
                            "text":  "his horn",
                            "points":  3
                        },
                        {
                            "text":  "his clown car",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200578,
        "question":  "When you're at a party, name something you never let out of your sight.",
        "answers":  [
                        {
                            "text":  "my purse/wallet",
                            "points":  37
                        },
                        {
                            "text":  "my drink",
                            "points":  24
                        },
                        {
                            "text":  "my mate/a hot stud",
                            "points":  22
                        },
                        {
                            "text":  "my phone",
                            "points":  7
                        },
                        {
                            "text":  "the food",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200579,
        "question":  "Name someone who uses a pole.",
        "answers":  [
                        {
                            "text":  "stripper/dancer",
                            "points":  35
                        },
                        {
                            "text":  "fisherman",
                            "points":  22
                        },
                        {
                            "text":  "pole vaulter",
                            "points":  20
                        },
                        {
                            "text":  "firefighter",
                            "points":  11
                        },
                        {
                            "text":  "skier",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  200580,
        "question":  "We asked 100 married women... Using the barter system, what could we give you in exchange for your man?",
        "answers":  [
                        {
                            "text":  "money",
                            "points":  34
                        },
                        {
                            "text":  "a maid",
                            "points":  27
                        },
                        {
                            "text":  "better man/denzel",
                            "points":  21
                        },
                        {
                            "text":  "nothing",
                            "points":  8
                        },
                        {
                            "text":  "a robot",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200581,
        "question":  "We asked 100 men... Name something you like to see women wear that starts with the letter \"T.\"",
        "answers":  [
                        {
                            "text":  "thong",
                            "points":  29
                        },
                        {
                            "text":  "t-shirt",
                            "points":  28
                        },
                        {
                            "text":  "tank top",
                            "points":  23
                        },
                        {
                            "text":  "tights",
                            "points":  9
                        },
                        {
                            "text":  "tiara",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200582,
        "question":  "Name something you pump.",
        "answers":  [
                        {
                            "text":  "gas",
                            "points":  61
                        },
                        {
                            "text":  "iron/muscles",
                            "points":  13
                        },
                        {
                            "text":  "tires",
                            "points":  10
                        },
                        {
                            "text":  "breast milk",
                            "points":  4
                        },
                        {
                            "text":  "a pump",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200583,
        "question":  "What's the most embarrassing thing the doctor does during your physical exam?",
        "answers":  [
                        {
                            "text":  "orbits uranus",
                            "points":  44
                        },
                        {
                            "text":  "probes your pelvis",
                            "points":  40
                        },
                        {
                            "text":  "weighs/pokes fat",
                            "points":  4
                        },
                        {
                            "text":  "sees you naked",
                            "points":  2
                        },
                        {
                            "text":  "ignores/takes call",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200584,
        "question":  "Give me a word that rhymes with \"hubby.\"",
        "answers":  [
                        {
                            "text":  "tubby",
                            "points":  36
                        },
                        {
                            "text":  "chubby",
                            "points":  31
                        },
                        {
                            "text":  "bubby",
                            "points":  11
                        },
                        {
                            "text":  "cubby",
                            "points":  8
                        },
                        {
                            "text":  "nubby",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  200585,
        "question":  "Name something that follows the word \"shark.\"",
        "answers":  [
                        {
                            "text":  "shark tank",
                            "points":  33
                        },
                        {
                            "text":  "shark attack",
                            "points":  29
                        },
                        {
                            "text":  "shark bait",
                            "points":  22
                        },
                        {
                            "text":  "shark tale/tail",
                            "points":  4
                        },
                        {
                            "text":  "shark week",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200586,
        "question":  "Name something men do at a bachelor party that women might also do at a bridal shower.",
        "answers":  [
                        {
                            "text":  "drink/shotgun beer",
                            "points":  57
                        },
                        {
                            "text":  "stripper/all-nude",
                            "points":  18
                        },
                        {
                            "text":  "eat",
                            "points":  9
                        },
                        {
                            "text":  "gifts/party favors",
                            "points":  5
                        },
                        {
                            "text":  "dance/the ymca",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200587,
        "question":  "Name something Geppetto did not allow Pinocchio to play with because it was too dangerous.",
        "answers":  [
                        {
                            "text":  "fire/matches",
                            "points":  56
                        },
                        {
                            "text":  "saw/chain saw",
                            "points":  13
                        },
                        {
                            "text":  "knife",
                            "points":  13
                        },
                        {
                            "text":  "himself/his nose",
                            "points":  6
                        },
                        {
                            "text":  "termites",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200588,
        "question":  "Name something no one wants to hear rich people complain about.",
        "answers":  [
                        {
                            "text":  "money/costs",
                            "points":  81
                        },
                        {
                            "text":  "their car/bentley",
                            "points":  2
                        },
                        {
                            "text":  "their mansion",
                            "points":  2
                        },
                        {
                            "text":  "their yacht",
                            "points":  2
                        },
                        {
                            "text":  "being lonely/alone",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200589,
        "question":  "Name something a doctor might be wearing at an all-nudist hospital.",
        "answers":  [
                        {
                            "text":  "stethoscope",
                            "points":  66
                        },
                        {
                            "text":  "mask",
                            "points":  9
                        },
                        {
                            "text":  "rubber gloves",
                            "points":  8
                        },
                        {
                            "text":  "glasses",
                            "points":  3
                        },
                        {
                            "text":  "a grin",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200590,
        "question":  "We asked 100 women... Name a question you're asked that you always answer with a lie.",
        "answers":  [
                        {
                            "text":  "how old are you?",
                            "points":  42
                        },
                        {
                            "text":  "what do you weigh?",
                            "points":  40
                        },
                        {
                            "text":  "was it good for you?",
                            "points":  3
                        },
                        {
                            "text":  "how are you?",
                            "points":  2
                        },
                        {
                            "text":  "do i look good/fat?",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200591,
        "question":  "Name something specific you just pop into your mouth.",
        "answers":  [
                        {
                            "text":  "candy/mint/gum",
                            "points":  65
                        },
                        {
                            "text":  "pill/vitamin",
                            "points":  9
                        },
                        {
                            "text":  "popcorn",
                            "points":  8
                        },
                        {
                            "text":  "nuts",
                            "points":  3
                        },
                        {
                            "text":  "lozenge",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200592,
        "question":  "Name a kind of place where people complain, \"It's dead in here.\"",
        "answers":  [
                        {
                            "text":  "bar/club",
                            "points":  65
                        },
                        {
                            "text":  "mortuary/cemetery",
                            "points":  7
                        },
                        {
                            "text":  "mall/store",
                            "points":  6
                        },
                        {
                            "text":  "party",
                            "points":  6
                        },
                        {
                            "text":  "restaurant",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200593,
        "question":  "Name something you don't like to do when you're wearing your tightest pair of jeans.",
        "answers":  [
                        {
                            "text":  "bend over",
                            "points":  56
                        },
                        {
                            "text":  "exercise/squats",
                            "points":  16
                        },
                        {
                            "text":  "sit",
                            "points":  6
                        },
                        {
                            "text":  "pee/poop/in them",
                            "points":  6
                        },
                        {
                            "text":  "dance/riverdance",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200594,
        "question":  "If they made a sexy perfume for female dogs, what might it smell like?",
        "answers":  [
                        {
                            "text":  "meat/fish",
                            "points":  34
                        },
                        {
                            "text":  "dog/rover's rump",
                            "points":  25
                        },
                        {
                            "text":  "dog food/treat/bone",
                            "points":  14
                        },
                        {
                            "text":  "pee/poop",
                            "points":  11
                        },
                        {
                            "text":  "grass",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200595,
        "question":  "Noah didn't do us any favor by allowing what creature onto the ark?",
        "answers":  [
                        {
                            "text":  "mosquitos/bugs",
                            "points":  43
                        },
                        {
                            "text":  "snakes",
                            "points":  30
                        },
                        {
                            "text":  "alligators/crocs",
                            "points":  6
                        },
                        {
                            "text":  "people",
                            "points":  4
                        },
                        {
                            "text":  "skunks",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200596,
        "question":  "Name a place where people are allowed to let it all hang out.",
        "answers":  [
                        {
                            "text":  "nude beach/colony",
                            "points":  34
                        },
                        {
                            "text":  "home/bathroom",
                            "points":  26
                        },
                        {
                            "text":  "dance club/bar",
                            "points":  22
                        },
                        {
                            "text":  "swimming pool",
                            "points":  3
                        },
                        {
                            "text":  "sauna",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200597,
        "question":  "If Superman flew naked, name something he might hit his super package on.",
        "answers":  [
                        {
                            "text":  "building/skyscraper",
                            "points":  49
                        },
                        {
                            "text":  "pole/lamppost",
                            "points":  15
                        },
                        {
                            "text":  "bird/biting goose",
                            "points":  8
                        },
                        {
                            "text":  "tree/pine tree",
                            "points":  8
                        },
                        {
                            "text":  "antenna/cell tower",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  200598,
        "question":  "Name a food that will be hard to keep on the shelf if marijuana becomes legal for all.",
        "answers":  [
                        {
                            "text":  "chips/doritos",
                            "points":  43
                        },
                        {
                            "text":  "cookies",
                            "points":  21
                        },
                        {
                            "text":  "brownies",
                            "points":  11
                        },
                        {
                            "text":  "candy/chocolate",
                            "points":  8
                        },
                        {
                            "text":  "cheetos",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200599,
        "question":  "Name something grandpa sees grandma wearing that would make him reach for his Viagra.",
        "answers":  [
                        {
                            "text":  "lingerie/nightie",
                            "points":  52
                        },
                        {
                            "text":  "birthday suit",
                            "points":  17
                        },
                        {
                            "text":  "bikini/swimsuit",
                            "points":  8
                        },
                        {
                            "text":  "her teeth",
                            "points":  5
                        },
                        {
                            "text":  "a towel",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200600,
        "question":  "We asked 100 married people... What did you share as newlyweds that you now want all to yourself?",
        "answers":  [
                        {
                            "text":  "bathroom/shower",
                            "points":  29
                        },
                        {
                            "text":  "bed/covers",
                            "points":  27
                        },
                        {
                            "text":  "money",
                            "points":  14
                        },
                        {
                            "text":  "time",
                            "points":  10
                        },
                        {
                            "text":  "tv/remote",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  200601,
        "question":  "Name something a stripper claims as a business expense.",
        "answers":  [
                        {
                            "text":  "costume/heels",
                            "points":  65
                        },
                        {
                            "text":  "boob job",
                            "points":  7
                        },
                        {
                            "text":  "pole/pole class",
                            "points":  4
                        },
                        {
                            "text":  "bikini wax",
                            "points":  4
                        },
                        {
                            "text":  "glitter/makeup",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200602,
        "question":  "Fill in the blank: A woman might say, \"I don't really need a man as long as I have a good\" what?",
        "answers":  [
                        {
                            "text":  "sex toy/showerhead",
                            "points":  30
                        },
                        {
                            "text":  "job/income",
                            "points":  24
                        },
                        {
                            "text":  "friend",
                            "points":  14
                        },
                        {
                            "text":  "cat/pet",
                            "points":  10
                        },
                        {
                            "text":  "drink/wine",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  200603,
        "question":  "Name something you might tell someone that starts with \"get out of my ________.\"",
        "answers":  [
                        {
                            "text":  "face",
                            "points":  25
                        },
                        {
                            "text":  "way",
                            "points":  20
                        },
                        {
                            "text":  "house",
                            "points":  18
                        },
                        {
                            "text":  "life",
                            "points":  12
                        },
                        {
                            "text":  "hair",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  200604,
        "question":  "Tell me something a woman might have to give up to save her marriage.",
        "answers":  [
                        {
                            "text":  "her man-ho/group of",
                            "points":  30
                        },
                        {
                            "text":  "her job",
                            "points":  17
                        },
                        {
                            "text":  "friends/going out",
                            "points":  15
                        },
                        {
                            "text":  "shop'g/at neiman's",
                            "points":  12
                        },
                        {
                            "text":  "smoking/a pipe",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  200605,
        "question":  "Name something a magician might say he wanted to be buried with.",
        "answers":  [
                        {
                            "text":  "his magic wand",
                            "points":  47
                        },
                        {
                            "text":  "his hat",
                            "points":  10
                        },
                        {
                            "text":  "his rabbit",
                            "points":  10
                        },
                        {
                            "text":  "his cape",
                            "points":  10
                        },
                        {
                            "text":  "his sexy assistant",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200606,
        "question":  "We asked 100 men... Name something you put in your mouth as a child that you still do as an adult.",
        "answers":  [
                        {
                            "text":  "candy/gum/food",
                            "points":  33
                        },
                        {
                            "text":  "pen/pencil",
                            "points":  14
                        },
                        {
                            "text":  "fingers/hand",
                            "points":  14
                        },
                        {
                            "text":  "breasts",
                            "points":  10
                        },
                        {
                            "text":  "spoon/fork",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  200607,
        "question":  "Name something grandma calls marijuana that would make you suspect she smokes it.",
        "answers":  [
                        {
                            "text":  "weed/skunk weed",
                            "points":  33
                        },
                        {
                            "text":  "pot",
                            "points":  14
                        },
                        {
                            "text":  "ganja",
                            "points":  11
                        },
                        {
                            "text":  "mary jane",
                            "points":  10
                        },
                        {
                            "text":  "reefer",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  200608,
        "question":  "Name something you don't do unless you're in the mood.",
        "answers":  [
                        {
                            "text":  "gland-2-gland combat",
                            "points":  42
                        },
                        {
                            "text":  "clean/laundry",
                            "points":  18
                        },
                        {
                            "text":  "drink/get sloshed",
                            "points":  5
                        },
                        {
                            "text":  "exercise",
                            "points":  5
                        },
                        {
                            "text":  "cook/bake",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  200609,
        "question":  "Name a famous Jimmy.",
        "answers":  [
                        {
                            "text":  "jimmy fallon",
                            "points":  19
                        },
                        {
                            "text":  "jimmy carter",
                            "points":  18
                        },
                        {
                            "text":  "jimmy dean",
                            "points":  16
                        },
                        {
                            "text":  "jimmy kimmel",
                            "points":  9
                        },
                        {
                            "text":  "jimmy hoffa",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  200610,
        "question":  "What would be hard to steal from a sports store if you had to shove it down your underwear?",
        "answers":  [
                        {
                            "text":  "ball/bowling ball",
                            "points":  27
                        },
                        {
                            "text":  "baseball bat",
                            "points":  24
                        },
                        {
                            "text":  "hockey stick",
                            "points":  6
                        },
                        {
                            "text":  "a racket",
                            "points":  6
                        },
                        {
                            "text":  "shoes/cleats",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  200611,
        "question":  "Name something you'll step outside to do in the nude if it's dark.",
        "answers":  [
                        {
                            "text":  "whiz/dump",
                            "points":  24
                        },
                        {
                            "text":  "swim",
                            "points":  18
                        },
                        {
                            "text":  "get newspaper",
                            "points":  13
                        },
                        {
                            "text":  "let pet in/out",
                            "points":  6
                        },
                        {
                            "text":  "take out trash",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  200612,
        "question":  "Name a word that starts with the sound \"pee.\"",
        "answers":  [
                        {
                            "text":  "peanut",
                            "points":  28
                        },
                        {
                            "text":  "people",
                            "points":  16
                        },
                        {
                            "text":  "pea/pee/pee-pee",
                            "points":  8
                        },
                        {
                            "text":  "pee-wee",
                            "points":  8
                        },
                        {
                            "text":  "peace",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  200613,
        "question":  "Name a famous singer you wish could tweet from beyond the grave.",
        "answers":  [
                        {
                            "text":  "elvis",
                            "points":  32
                        },
                        {
                            "text":  "michael jackson",
                            "points":  13
                        },
                        {
                            "text":  "john lennon",
                            "points":  7
                        },
                        {
                            "text":  "janis joplin",
                            "points":  6
                        },
                        {
                            "text":  "jim morrison",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  200614,
        "question":  "Name something a 100-year-old man shows a 100-year-old woman to impress her.",
        "answers":  [
                        {
                            "text":  "money/ira",
                            "points":  23
                        },
                        {
                            "text":  "his teeth",
                            "points":  20
                        },
                        {
                            "text":  "body/pitched tent",
                            "points":  9
                        },
                        {
                            "text":  "flowers",
                            "points":  6
                        },
                        {
                            "text":  "jewelry/watch",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  200615,
        "question":  "Name an event where you wouldn't want to be the center of attention.",
        "answers":  [
                        {
                            "text":  "funeral",
                            "points":  20
                        },
                        {
                            "text":  "trial/investigation",
                            "points":  15
                        },
                        {
                            "text":  "bullfight/sport",
                            "points":  12
                        },
                        {
                            "text":  "wedding",
                            "points":  8
                        },
                        {
                            "text":  "execution",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  200616,
        "question":  "Give me another name for \"mistress.\"",
        "answers":  [
                        {
                            "text":  "lover",
                            "points":  16
                        },
                        {
                            "text":  "whore/ho",
                            "points":  16
                        },
                        {
                            "text":  "other woman",
                            "points":  12
                        },
                        {
                            "text":  "girlfriend",
                            "points":  9
                        },
                        {
                            "text":  "slut",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  200617,
        "question":  "Fill in the blank: Butter ________",
        "answers":  [
                        {
                            "text":  "butterball",
                            "points":  20
                        },
                        {
                            "text":  "butter beans",
                            "points":  14
                        },
                        {
                            "text":  "buttermilk",
                            "points":  9
                        },
                        {
                            "text":  "butterfingers",
                            "points":  9
                        },
                        {
                            "text":  "butter cookies",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  200618,
        "question":  "Name something that might be missing the day after you throw a wild party.",
        "answers":  [
                        {
                            "text":  "money/wallet",
                            "points":  19
                        },
                        {
                            "text":  "booze",
                            "points":  12
                        },
                        {
                            "text":  "my undies/clothes",
                            "points":  10
                        },
                        {
                            "text":  "jewelry",
                            "points":  10
                        },
                        {
                            "text":  "a glass/dish",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  200619,
        "question":  "Besides doors and windows, name something people open.",
        "answers":  [
                        {
                            "text":  "can/\"can of worms\"",
                            "points":  18
                        },
                        {
                            "text":  "their mouth",
                            "points":  12
                        },
                        {
                            "text":  "mail/e-mail",
                            "points":  12
                        },
                        {
                            "text":  "boxes/gifts",
                            "points":  7
                        },
                        {
                            "text":  "bank account",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  200620,
        "question":  "Name something a person has that might be described as huge.",
        "answers":  [
                        {
                            "text":  "house",
                            "points":  13
                        },
                        {
                            "text":  "nose",
                            "points":  12
                        },
                        {
                            "text":  "ego",
                            "points":  12
                        },
                        {
                            "text":  "belly",
                            "points":  7
                        },
                        {
                            "text":  "bustline",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  200621,
        "question":  "Name something that drips.",
        "answers":  [
                        {
                            "text":  "water/faucet",
                            "points":  92
                        },
                        {
                            "text":  "a nose",
                            "points":  4
                        },
                        {
                            "text":  "a candle",
                            "points":  2
                        },
                        {
                            "text":  "coffee",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200622,
        "question":  "Name something a person might be serving.",
        "answers":  [
                        {
                            "text":  "food/drink",
                            "points":  84
                        },
                        {
                            "text":  "time",
                            "points":  7
                        },
                        {
                            "text":  "subpoena/court doc",
                            "points":  6
                        },
                        {
                            "text":  "ball/tennis ball",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200623,
        "question":  "Name something grandpa might pinch.",
        "answers":  [
                        {
                            "text":  "person/cheek/butt",
                            "points":  82
                        },
                        {
                            "text":  "pennies",
                            "points":  8
                        },
                        {
                            "text":  "snuff/tobacco",
                            "points":  8
                        },
                        {
                            "text":  "salt",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200624,
        "question":  "Fill in the blank: Jumping ________.",
        "answers":  [
                        {
                            "text":  "jacks",
                            "points":  75
                        },
                        {
                            "text":  "bean",
                            "points":  13
                        },
                        {
                            "text":  "rope",
                            "points":  10
                        },
                        {
                            "text":  "frog",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200625,
        "question":  "Name something you do that rhymes with \"grow up.\"",
        "answers":  [
                        {
                            "text":  "throw up",
                            "points":  74
                        },
                        {
                            "text":  "show up",
                            "points":  16
                        },
                        {
                            "text":  "blow up",
                            "points":  8
                        },
                        {
                            "text":  "slow up",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200626,
        "question":  "Name something that has roots.",
        "answers":  [
                        {
                            "text":  "plants/trees",
                            "points":  72
                        },
                        {
                            "text":  "people/family",
                            "points":  17
                        },
                        {
                            "text":  "teeth",
                            "points":  7
                        },
                        {
                            "text":  "hair",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200627,
        "question":  "Name a way a comedian knows he's bombing.",
        "answers":  [
                        {
                            "text":  "no laughs/claps",
                            "points":  59
                        },
                        {
                            "text":  "booing/heckling",
                            "points":  34
                        },
                        {
                            "text":  "throwing things",
                            "points":  5
                        },
                        {
                            "text":  "people leaving",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200628,
        "question":  "Name a reason babies cry that would be weird if men cried for the same reason.",
        "answers":  [
                        {
                            "text":  "hungry/for nipple",
                            "points":  46
                        },
                        {
                            "text":  "peed/pooped pants",
                            "points":  34
                        },
                        {
                            "text":  "teething",
                            "points":  11
                        },
                        {
                            "text":  "toy taken away",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  200629,
        "question":  "Name something a mouse might dream about.",
        "answers":  [
                        {
                            "text":  "cheese",
                            "points":  87
                        },
                        {
                            "text":  "cats/being one",
                            "points":  8
                        },
                        {
                            "text":  "peanut butter",
                            "points":  2
                        },
                        {
                            "text":  "mice/its soulmouse",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200630,
        "question":  "Name a fruit that's the size of a Kardashian bottom.",
        "answers":  [
                        {
                            "text":  "watermelon/melon",
                            "points":  85
                        },
                        {
                            "text":  "pumpkin",
                            "points":  9
                        },
                        {
                            "text":  "pineapple",
                            "points":  3
                        },
                        {
                            "text":  "jackfruit",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200631,
        "question":  "Name something that is thrown at weddings.",
        "answers":  [
                        {
                            "text":  "rice",
                            "points":  73
                        },
                        {
                            "text":  "flowers/bouquet",
                            "points":  16
                        },
                        {
                            "text":  "birdseed",
                            "points":  7
                        },
                        {
                            "text":  "confetti",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200632,
        "question":  "Name something that you see on a person's arm.",
        "answers":  [
                        {
                            "text":  "tattoos",
                            "points":  66
                        },
                        {
                            "text":  "hair",
                            "points":  18
                        },
                        {
                            "text":  "watch",
                            "points":  13
                        },
                        {
                            "text":  "moles",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200633,
        "question":  "Name a job where you bring home cash every night from work.",
        "answers":  [
                        {
                            "text":  "waitress/waiter",
                            "points":  66
                        },
                        {
                            "text":  "stripper",
                            "points":  17
                        },
                        {
                            "text":  "bartender",
                            "points":  13
                        },
                        {
                            "text":  "food delivery",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200634,
        "question":  "Name a fruit you find on top of cheesecake.",
        "answers":  [
                        {
                            "text":  "strawberry",
                            "points":  60
                        },
                        {
                            "text":  "cherry",
                            "points":  31
                        },
                        {
                            "text":  "blueberry",
                            "points":  5
                        },
                        {
                            "text":  "apple",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200635,
        "question":  "Tell me another way people say \"mother.\"",
        "answers":  [
                        {
                            "text":  "mom/mommy",
                            "points":  55
                        },
                        {
                            "text":  "mama",
                            "points":  29
                        },
                        {
                            "text":  "ma",
                            "points":  13
                        },
                        {
                            "text":  "mum",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200636,
        "question":  "Give me a word that rhymes with \"cuddle.\"",
        "answers":  [
                        {
                            "text":  "puddle",
                            "points":  48
                        },
                        {
                            "text":  "muddle",
                            "points":  30
                        },
                        {
                            "text":  "huddle",
                            "points":  19
                        },
                        {
                            "text":  "fuddle",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200637,
        "question":  "Nine months after what holiday are a lot of babies born?",
        "answers":  [
                        {
                            "text":  "valentine's day",
                            "points":  39
                        },
                        {
                            "text":  "new year's",
                            "points":  28
                        },
                        {
                            "text":  "christmas",
                            "points":  27
                        },
                        {
                            "text":  "easter",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  200638,
        "question":  "We asked 100 married men... While your wife is cleaning up after a party, what are you doing?",
        "answers":  [
                        {
                            "text":  "sleeping/snoring",
                            "points":  36
                        },
                        {
                            "text":  "helping clean",
                            "points":  36
                        },
                        {
                            "text":  "watching tv",
                            "points":  24
                        },
                        {
                            "text":  "smoking cig",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200639,
        "question":  "Name a country where kissing is an art form.",
        "answers":  [
                        {
                            "text":  "france",
                            "points":  88
                        },
                        {
                            "text":  "italy",
                            "points":  6
                        },
                        {
                            "text":  "japan",
                            "points":  2
                        },
                        {
                            "text":  "united states",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200640,
        "question":  "Name something that most women must prove to their doubting mother-in-laws that they can do right.",
        "answers":  [
                        {
                            "text":  "be a good cook",
                            "points":  82
                        },
                        {
                            "text":  "make happy/in bed",
                            "points":  8
                        },
                        {
                            "text":  "keep house clean",
                            "points":  5
                        },
                        {
                            "text":  "raise a child",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200641,
        "question":  "Name an article of its owner's clothing that provides a dog with hours of chewing pleasure.",
        "answers":  [
                        {
                            "text":  "shoe/slipper",
                            "points":  81
                        },
                        {
                            "text":  "sock",
                            "points":  12
                        },
                        {
                            "text":  "sweater",
                            "points":  3
                        },
                        {
                            "text":  "undies/vinyl thong",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200642,
        "question":  "Name something that people soak in their sink.",
        "answers":  [
                        {
                            "text":  "dishes/pots",
                            "points":  78
                        },
                        {
                            "text":  "clothes",
                            "points":  14
                        },
                        {
                            "text":  "sponge/rags",
                            "points":  4
                        },
                        {
                            "text":  "dentures",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200643,
        "question":  "Name a complaint people have about hospital gowns.",
        "answers":  [
                        {
                            "text":  "my biscuit shows",
                            "points":  74
                        },
                        {
                            "text":  "thin/drafty/cold",
                            "points":  12
                        },
                        {
                            "text":  "bad fit",
                            "points":  8
                        },
                        {
                            "text":  "ugly/not trendy",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200644,
        "question":  "Tell me something guys never get tired of looking at.",
        "answers":  [
                        {
                            "text":  "chicks/bodies/porn",
                            "points":  73
                        },
                        {
                            "text":  "tv/movie/sports",
                            "points":  16
                        },
                        {
                            "text":  "cars",
                            "points":  7
                        },
                        {
                            "text":  "money",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200645,
        "question":  "If a person's head is down in church, what are they doing?",
        "answers":  [
                        {
                            "text":  "praying",
                            "points":  72
                        },
                        {
                            "text":  "sleeping",
                            "points":  20
                        },
                        {
                            "text":  "thinking/football",
                            "points":  4
                        },
                        {
                            "text":  "texting/phone app",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200646,
        "question":  "Name something specific that we get from a cow.",
        "answers":  [
                        {
                            "text":  "milk",
                            "points":  71
                        },
                        {
                            "text":  "beef/steak",
                            "points":  21
                        },
                        {
                            "text":  "leather",
                            "points":  4
                        },
                        {
                            "text":  "cheese",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200647,
        "question":  "Name a kind of jewel a rich guy's dog might have on its collar.",
        "answers":  [
                        {
                            "text":  "diamond",
                            "points":  71
                        },
                        {
                            "text":  "ruby",
                            "points":  20
                        },
                        {
                            "text":  "sapphire",
                            "points":  5
                        },
                        {
                            "text":  "emerald",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200648,
        "question":  "Name an animal that eats mice.",
        "answers":  [
                        {
                            "text":  "cat",
                            "points":  70
                        },
                        {
                            "text":  "snake/boa",
                            "points":  24
                        },
                        {
                            "text":  "owl",
                            "points":  2
                        },
                        {
                            "text":  "hawk",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200649,
        "question":  "Name something golfers might lose during a round of golf.",
        "answers":  [
                        {
                            "text":  "their balls",
                            "points":  70
                        },
                        {
                            "text":  "their temper/mind",
                            "points":  21
                        },
                        {
                            "text":  "a tee",
                            "points":  5
                        },
                        {
                            "text":  "a stroke/shot",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200650,
        "question":  "Name a place it would be wrong to sneak in some beer.",
        "answers":  [
                        {
                            "text":  "church",
                            "points":  68
                        },
                        {
                            "text":  "work",
                            "points":  22
                        },
                        {
                            "text":  "school",
                            "points":  6
                        },
                        {
                            "text":  "nursery/day care",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200651,
        "question":  "Name something specific that gets brushed.",
        "answers":  [
                        {
                            "text":  "person's hair",
                            "points":  68
                        },
                        {
                            "text":  "teeth",
                            "points":  16
                        },
                        {
                            "text":  "dog",
                            "points":  11
                        },
                        {
                            "text":  "cat",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200652,
        "question":  "We asked 100 single women... Name something you'd do if your date insisted on belting out Justin Bieber songs.",
        "answers":  [
                        {
                            "text":  "leave/go home",
                            "points":  68
                        },
                        {
                            "text":  "laugh",
                            "points":  15
                        },
                        {
                            "text":  "plug my ears",
                            "points":  12
                        },
                        {
                            "text":  "throw up/on him",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200653,
        "question":  "If mice designed a trap for people, what would they put in it instead of cheese?",
        "answers":  [
                        {
                            "text":  "food/pizza",
                            "points":  68
                        },
                        {
                            "text":  "money/lotto ticket",
                            "points":  15
                        },
                        {
                            "text":  "rat poison",
                            "points":  11
                        },
                        {
                            "text":  "car keys",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200654,
        "question":  "Name a way a priest might know he's giving a boring sermon.",
        "answers":  [
                        {
                            "text":  "people sleeping",
                            "points":  67
                        },
                        {
                            "text":  "people yawning",
                            "points":  23
                        },
                        {
                            "text":  "people leaving",
                            "points":  6
                        },
                        {
                            "text":  "people reading",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200655,
        "question":  "Name a place where you see people with wet hair.",
        "answers":  [
                        {
                            "text":  "pool",
                            "points":  67
                        },
                        {
                            "text":  "beach",
                            "points":  17
                        },
                        {
                            "text":  "hair salon",
                            "points":  12
                        },
                        {
                            "text":  "gym/locker room",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200656,
        "question":  "Name something you do to a moustache.",
        "answers":  [
                        {
                            "text":  "trim/shave it",
                            "points":  64
                        },
                        {
                            "text":  "comb/brush it",
                            "points":  18
                        },
                        {
                            "text":  "wax it",
                            "points":  9
                        },
                        {
                            "text":  "twist/twirl it",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  200657,
        "question":  "We asked 100 women... Fill in the blank: The only way to stop your man from whining is to shove what in his mouth?",
        "answers":  [
                        {
                            "text":  "food/coffee",
                            "points":  63
                        },
                        {
                            "text":  "beer/booze",
                            "points":  19
                        },
                        {
                            "text":  "my boobs",
                            "points":  13
                        },
                        {
                            "text":  "soap",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200658,
        "question":  "Name something that gets bleached.",
        "answers":  [
                        {
                            "text":  "laundry/sheets",
                            "points":  62
                        },
                        {
                            "text":  "hair/above lip",
                            "points":  29
                        },
                        {
                            "text":  "bathroom/toilet",
                            "points":  4
                        },
                        {
                            "text":  "a butt/\"brown eye\"",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200659,
        "question":  "Name something a farmer might have several of.",
        "answers":  [
                        {
                            "text":  "animals/cows",
                            "points":  61
                        },
                        {
                            "text":  "farm tools/tractors",
                            "points":  32
                        },
                        {
                            "text":  "acres/fields",
                            "points":  3
                        },
                        {
                            "text":  "seeds/crops",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200660,
        "question":  "Name something that is carried in a tanker truck.",
        "answers":  [
                        {
                            "text":  "gasoline",
                            "points":  58
                        },
                        {
                            "text":  "oil",
                            "points":  19
                        },
                        {
                            "text":  "water",
                            "points":  12
                        },
                        {
                            "text":  "milk",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  200661,
        "question":  "During your lifetime, name someone who has told you to remove your pants.",
        "answers":  [
                        {
                            "text":  "my doctor",
                            "points":  53
                        },
                        {
                            "text":  "horny spouse/mate",
                            "points":  40
                        },
                        {
                            "text":  "my mother",
                            "points":  3
                        },
                        {
                            "text":  "my tailor",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200662,
        "question":  "Give me a person's name that rhymes with \"ham.\"",
        "answers":  [
                        {
                            "text":  "sam",
                            "points":  53
                        },
                        {
                            "text":  "pam",
                            "points":  35
                        },
                        {
                            "text":  "cam",
                            "points":  8
                        },
                        {
                            "text":  "tam",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200663,
        "question":  "We asked 100 married women... Name something your husband would need to look like a rock star.",
        "answers":  [
                        {
                            "text":  "hair/long hair",
                            "points":  50
                        },
                        {
                            "text":  "a guitar",
                            "points":  40
                        },
                        {
                            "text":  "tattoos",
                            "points":  6
                        },
                        {
                            "text":  "hot face/some teeth",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200664,
        "question":  "We asked 100 married women... Name a specific place you never want to find another woman's panties.",
        "answers":  [
                        {
                            "text":  "my bed/bedroom",
                            "points":  46
                        },
                        {
                            "text":  "car/glove box",
                            "points":  27
                        },
                        {
                            "text":  "in the laundry",
                            "points":  18
                        },
                        {
                            "text":  "hubby's pocket",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  200665,
        "question":  "Give me a phrase that starts with \"It's raining.\"",
        "answers":  [
                        {
                            "text":  "it's pouring...",
                            "points":  41
                        },
                        {
                            "text":  "cats & dogs",
                            "points":  28
                        },
                        {
                            "text":  "men",
                            "points":  27
                        },
                        {
                            "text":  "outside",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200666,
        "question":  "Name something that, when you see it, you just have to kiss it.",
        "answers":  [
                        {
                            "text":  "pet/puppy",
                            "points":  40
                        },
                        {
                            "text":  "baby/kid",
                            "points":  38
                        },
                        {
                            "text":  "stud/babe/boobs",
                            "points":  18
                        },
                        {
                            "text":  "blarney stone",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200667,
        "question":  "Name a sport in which the distances are measured by laps.",
        "answers":  [
                        {
                            "text":  "track/running",
                            "points":  35
                        },
                        {
                            "text":  "car racing/nascar",
                            "points":  31
                        },
                        {
                            "text":  "swimming",
                            "points":  28
                        },
                        {
                            "text":  "horse racing",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200668,
        "question":  "Name something left over from a wedding that a cheap church might use for a funeral.e",
        "answers":  [
                        {
                            "text":  "flowers",
                            "points":  85
                        },
                        {
                            "text":  "food/cake/wings",
                            "points":  7
                        },
                        {
                            "text":  "candles",
                            "points":  3
                        },
                        {
                            "text":  "scarf/veil",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200669,
        "question":  "Name something that happy couples wear to bed.",
        "answers":  [
                        {
                            "text":  "nothing/a smile",
                            "points":  83
                        },
                        {
                            "text":  "pajamas",
                            "points":  6
                        },
                        {
                            "text":  "lingerie/his & hers",
                            "points":  5
                        },
                        {
                            "text":  "wedding rings",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200670,
        "question":  "Fill in the blank: I eat when I'm what?",
        "answers":  [
                        {
                            "text":  "hungry",
                            "points":  81
                        },
                        {
                            "text":  "bored",
                            "points":  8
                        },
                        {
                            "text":  "depressed/sad",
                            "points":  5
                        },
                        {
                            "text":  "nervous/stressed",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200671,
        "question":  "Name something that hisses.",
        "answers":  [
                        {
                            "text":  "snakes",
                            "points":  77
                        },
                        {
                            "text":  "cats",
                            "points":  14
                        },
                        {
                            "text":  "steam/teapots",
                            "points":  4
                        },
                        {
                            "text":  "birds",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200672,
        "question":  "Name something that's itsy bitsy.",
        "answers":  [
                        {
                            "text":  "spider/bug",
                            "points":  75
                        },
                        {
                            "text":  "polka-dot bikini",
                            "points":  17
                        },
                        {
                            "text":  "waistline",
                            "points":  3
                        },
                        {
                            "text":  "pinhead",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200673,
        "question":  "Name something a pirate might throw off his ship.",
        "answers":  [
                        {
                            "text":  "person/dead one",
                            "points":  75
                        },
                        {
                            "text":  "anchor",
                            "points":  10
                        },
                        {
                            "text":  "garbage/rum bottle",
                            "points":  10
                        },
                        {
                            "text":  "bucket o' poo/pee",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200674,
        "question":  "Name a place where you should always wear a clean pair of underwear.",
        "answers":  [
                        {
                            "text":  "dr./hospital",
                            "points":  73
                        },
                        {
                            "text":  "church",
                            "points":  9
                        },
                        {
                            "text":  "work",
                            "points":  8
                        },
                        {
                            "text":  "gym/locker room",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  200675,
        "question":  "Name a piece of information that a bachelor puts in his little black book.",
        "answers":  [
                        {
                            "text":  "phone numbers",
                            "points":  72
                        },
                        {
                            "text":  "names",
                            "points":  16
                        },
                        {
                            "text":  "ratings/hotness",
                            "points":  6
                        },
                        {
                            "text":  "measurements",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200676,
        "question":  "Name something you might find under the bed in a sleazy hotel room.",
        "answers":  [
                        {
                            "text":  "condom",
                            "points":  70
                        },
                        {
                            "text":  "panties/clothes",
                            "points":  17
                        },
                        {
                            "text":  "vibrator/toy",
                            "points":  6
                        },
                        {
                            "text":  "mice/rats/drop'gs",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200677,
        "question":  "If a candy is colored red, tell me the flavor it might be.",
        "answers":  [
                        {
                            "text":  "cherry",
                            "points":  70
                        },
                        {
                            "text":  "cinnamon",
                            "points":  16
                        },
                        {
                            "text":  "strawberry",
                            "points":  8
                        },
                        {
                            "text":  "peppermint",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200678,
        "question":  "Name a kind of kit people keep around their home.",
        "answers":  [
                        {
                            "text":  "1st-aid/emergency",
                            "points":  68
                        },
                        {
                            "text":  "sewing kit",
                            "points":  19
                        },
                        {
                            "text":  "tool kit",
                            "points":  8
                        },
                        {
                            "text":  "grooming/pedicure",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200679,
        "question":  "Name something people tint.",
        "answers":  [
                        {
                            "text":  "windows/car windows",
                            "points":  66
                        },
                        {
                            "text":  "head of hair",
                            "points":  25
                        },
                        {
                            "text":  "eyeglasses",
                            "points":  4
                        },
                        {
                            "text":  "eyebrows/lashes",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200680,
        "question":  "Tell me someone who might use the phrase \"Put your hands in the air.\"",
        "answers":  [
                        {
                            "text":  "cop",
                            "points":  62
                        },
                        {
                            "text":  "rapper/singer/dj",
                            "points":  23
                        },
                        {
                            "text":  "robber",
                            "points":  9
                        },
                        {
                            "text":  "gym instructor",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200681,
        "question":  "Give me a word that rhymes with \"yellow.\"",
        "answers":  [
                        {
                            "text":  "mellow",
                            "points":  59
                        },
                        {
                            "text":  "fellow",
                            "points":  26
                        },
                        {
                            "text":  "bellow",
                            "points":  9
                        },
                        {
                            "text":  "hello",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200682,
        "question":  "What might a cheating husband give his mistress that's nicer than the one his wife has?",
        "answers":  [
                        {
                            "text":  "jewelry/ring",
                            "points":  58
                        },
                        {
                            "text":  "car",
                            "points":  18
                        },
                        {
                            "text":  "clothes/lingerie",
                            "points":  18
                        },
                        {
                            "text":  "purse",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200683,
        "question":  "Name something that takes blood from people.",
        "answers":  [
                        {
                            "text":  "health worker/needle",
                            "points":  57
                        },
                        {
                            "text":  "a mosquito",
                            "points":  25
                        },
                        {
                            "text":  "a vampire/dracula",
                            "points":  13
                        },
                        {
                            "text":  "a leech",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200684,
        "question":  "We asked 100 women... Name something about the best man that the bride might realize is better than the groom's.",
        "answers":  [
                        {
                            "text":  "his face/hair",
                            "points":  55
                        },
                        {
                            "text":  "his job/paycheck",
                            "points":  27
                        },
                        {
                            "text":  "tight, tasty bod",
                            "points":  13
                        },
                        {
                            "text":  "odor/deodorant",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200685,
        "question":  "Name something men do when a pretty woman walks by.",
        "answers":  [
                        {
                            "text":  "stare/gawk",
                            "points":  53
                        },
                        {
                            "text":  "whistle/catcall",
                            "points":  39
                        },
                        {
                            "text":  "smile",
                            "points":  3
                        },
                        {
                            "text":  "fantasize/wish",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200686,
        "question":  "Name something you wouldn't do to your worst enemy, so you hope your dog will do it.",
        "answers":  [
                        {
                            "text":  "whiz/poop/on them",
                            "points":  52
                        },
                        {
                            "text":  "bite them",
                            "points":  36
                        },
                        {
                            "text":  "kill them",
                            "points":  7
                        },
                        {
                            "text":  "dig up their yard",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200687,
        "question":  "Name something in your home that smells like you.",
        "answers":  [
                        {
                            "text":  "pillows/bed/linens",
                            "points":  51
                        },
                        {
                            "text":  "clothes/singlet",
                            "points":  41
                        },
                        {
                            "text":  "candles",
                            "points":  3
                        },
                        {
                            "text":  "soap/body wash",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200688,
        "question":  "Name something a student might decide to swallow rather than hand it over to the teacher.",
        "answers":  [
                        {
                            "text":  "bubblicious/food",
                            "points":  51
                        },
                        {
                            "text":  "note/love note",
                            "points":  31
                        },
                        {
                            "text":  "drugs/pills",
                            "points":  12
                        },
                        {
                            "text":  "cheat sheet",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200689,
        "question":  "Name something people try to patch up.",
        "answers":  [
                        {
                            "text":  "rela'ship/marriage",
                            "points":  51
                        },
                        {
                            "text":  "tire/inner tube",
                            "points":  25
                        },
                        {
                            "text":  "jeans/clothes",
                            "points":  18
                        },
                        {
                            "text":  "a wall",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200690,
        "question":  "Name something a politician hopes a voter's baby doesn't do while he's holding it.",
        "answers":  [
                        {
                            "text":  "blow chunks",
                            "points":  47
                        },
                        {
                            "text":  "pee/squeeze a log",
                            "points":  24
                        },
                        {
                            "text":  "cry/scream",
                            "points":  24
                        },
                        {
                            "text":  "burp",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200691,
        "question":  "We asked 100 single men... What do you see married men doing that makes you glad you aren't married?",
        "answers":  [
                        {
                            "text":  "fighting/arguing",
                            "points":  41
                        },
                        {
                            "text":  "getting nagged",
                            "points":  35
                        },
                        {
                            "text":  "listening",
                            "points":  13
                        },
                        {
                            "text":  "babysitting",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  200692,
        "question":  "Name something a pig might be asking for when it says \"oink oink.\"",
        "answers":  [
                        {
                            "text":  "food",
                            "points":  84
                        },
                        {
                            "text":  "drink/water",
                            "points":  8
                        },
                        {
                            "text":  "a bath",
                            "points":  2
                        },
                        {
                            "text":  "love",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200693,
        "question":  "Name an animal that lays really big eggs.",
        "answers":  [
                        {
                            "text":  "ostrich",
                            "points":  84
                        },
                        {
                            "text":  "goose",
                            "points":  6
                        },
                        {
                            "text":  "emu",
                            "points":  4
                        },
                        {
                            "text":  "chicken",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200694,
        "question":  "Name a food that rhymes with \"Spam.\"",
        "answers":  [
                        {
                            "text":  "ham",
                            "points":  83
                        },
                        {
                            "text":  "clam",
                            "points":  6
                        },
                        {
                            "text":  "jam",
                            "points":  4
                        },
                        {
                            "text":  "lamb",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200695,
        "question":  "Name something hospital nurses might fight over doing to a hot male patient.",
        "answers":  [
                        {
                            "text":  "sponge bath",
                            "points":  80
                        },
                        {
                            "text":  "taking temp/up butt",
                            "points":  12
                        },
                        {
                            "text":  "blood pressure",
                            "points":  2
                        },
                        {
                            "text":  "stick w/ needle",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200696,
        "question":  "Name a kind of business with a drive-through service.",
        "answers":  [
                        {
                            "text":  "fast-food",
                            "points":  79
                        },
                        {
                            "text":  "bank",
                            "points":  13
                        },
                        {
                            "text":  "car wash",
                            "points":  2
                        },
                        {
                            "text":  "pharmacy",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200697,
        "question":  "Name something that people roast.",
        "answers":  [
                        {
                            "text":  "meat",
                            "points":  79
                        },
                        {
                            "text":  "people/comedians",
                            "points":  9
                        },
                        {
                            "text":  "marshmallows",
                            "points":  4
                        },
                        {
                            "text":  "vegetables",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200698,
        "question":  "Name something at a bachelor party a man might also have at his divorce party.",
        "answers":  [
                        {
                            "text":  "chicks/strippers",
                            "points":  74
                        },
                        {
                            "text":  "booze",
                            "points":  12
                        },
                        {
                            "text":  "his buds",
                            "points":  8
                        },
                        {
                            "text":  "cake",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200699,
        "question":  "Name an animal head a cat might hang on the wall of his cat cave.",
        "answers":  [
                        {
                            "text":  "mouse/rat",
                            "points":  73
                        },
                        {
                            "text":  "dog",
                            "points":  16
                        },
                        {
                            "text":  "bird",
                            "points":  4
                        },
                        {
                            "text":  "lizard",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200700,
        "question":  "Name something a boy might give a girl on their first date.",
        "answers":  [
                        {
                            "text":  "flowers/a rose",
                            "points":  69
                        },
                        {
                            "text":  "a kiss",
                            "points":  20
                        },
                        {
                            "text":  "a hug",
                            "points":  4
                        },
                        {
                            "text":  "candy/chocolates",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200701,
        "question":  "Name a place where you see a lot of people dancing.",
        "answers":  [
                        {
                            "text":  "club/bar",
                            "points":  60
                        },
                        {
                            "text":  "ballroom/wedding",
                            "points":  29
                        },
                        {
                            "text":  "tv show/ellen",
                            "points":  4
                        },
                        {
                            "text":  "concert",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200702,
        "question":  "Name a place you might be naked with the lights on.",
        "answers":  [
                        {
                            "text":  "bathroom",
                            "points":  58
                        },
                        {
                            "text":  "bedroom/bed",
                            "points":  25
                        },
                        {
                            "text":  "dr. office/hospital",
                            "points":  10
                        },
                        {
                            "text":  "tanning salon",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200703,
        "question":  "Fill in the blank: Boob ________.",
        "answers":  [
                        {
                            "text":  "boob job",
                            "points":  54
                        },
                        {
                            "text":  "boob tube",
                            "points":  34
                        },
                        {
                            "text":  "boobies",
                            "points":  6
                        },
                        {
                            "text":  "boob size",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200704,
        "question":  "Fill in the blank: You should never show up to work what?",
        "answers":  [
                        {
                            "text":  "drunk/drinking",
                            "points":  53
                        },
                        {
                            "text":  "late",
                            "points":  27
                        },
                        {
                            "text":  "naked/pantless",
                            "points":  13
                        },
                        {
                            "text":  "high/stoned",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200705,
        "question":  "We asked 100 married men... If you take Viagra, name someone you hope your wife doesn't blab it to.",
        "answers":  [
                        {
                            "text":  "parent",
                            "points":  49
                        },
                        {
                            "text":  "friend",
                            "points":  39
                        },
                        {
                            "text":  "neighbor",
                            "points":  5
                        },
                        {
                            "text":  "coworker/boss",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200706,
        "question":  "Name an animal you associate with a holiday.",
        "answers":  [
                        {
                            "text":  "reindeer",
                            "points":  49
                        },
                        {
                            "text":  "bunny",
                            "points":  32
                        },
                        {
                            "text":  "turkey",
                            "points":  12
                        },
                        {
                            "text":  "christmas dove",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200707,
        "question":  "Fill in the blank: Bouncing ________.",
        "answers":  [
                        {
                            "text":  "ball/balls",
                            "points":  48
                        },
                        {
                            "text":  "baby boy/girl",
                            "points":  35
                        },
                        {
                            "text":  "boobs",
                            "points":  7
                        },
                        {
                            "text":  "check",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  200708,
        "question":  "Name a fruit that most of the people in your family are shaped like.",
        "answers":  [
                        {
                            "text":  "pear",
                            "points":  43
                        },
                        {
                            "text":  "banana",
                            "points":  26
                        },
                        {
                            "text":  "apple",
                            "points":  24
                        },
                        {
                            "text":  "watermelon",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200709,
        "question":  "Name something you wouldn't want the surgical staff doing during your operation on New Year's Eve.",
        "answers":  [
                        {
                            "text":  "toasting/drinking",
                            "points":  88
                        },
                        {
                            "text":  "watching ball drop",
                            "points":  3
                        },
                        {
                            "text":  "counting down",
                            "points":  2
                        },
                        {
                            "text":  "kissing/making out",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200710,
        "question":  "Name something Eve might have thrown at Adam when she was mad at him.",
        "answers":  [
                        {
                            "text":  "an apple/core",
                            "points":  80
                        },
                        {
                            "text":  "a rock",
                            "points":  7
                        },
                        {
                            "text":  "snake/serpent",
                            "points":  5
                        },
                        {
                            "text":  "fig/fig leaf",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200711,
        "question":  "Name something a really small fire department might only have one of.",
        "answers":  [
                        {
                            "text":  "fire truck",
                            "points":  80
                        },
                        {
                            "text":  "hose",
                            "points":  7
                        },
                        {
                            "text":  "ladder",
                            "points":  4
                        },
                        {
                            "text":  "stove",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200712,
        "question":  "If there was a restaurant just for frogs, what insect might be listed as catch of the day?",
        "answers":  [
                        {
                            "text":  "fly",
                            "points":  77
                        },
                        {
                            "text":  "mosquito",
                            "points":  8
                        },
                        {
                            "text":  "cricket",
                            "points":  8
                        },
                        {
                            "text":  "dragonfly",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200713,
        "question":  "Name a part of Minnie Mouse that's not so mini.",
        "answers":  [
                        {
                            "text":  "her ears",
                            "points":  68
                        },
                        {
                            "text":  "her feet/shoes",
                            "points":  15
                        },
                        {
                            "text":  "her head",
                            "points":  9
                        },
                        {
                            "text":  "her bow",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200714,
        "question":  "On a windy day, name something a man might use to keep his combover in place.",
        "answers":  [
                        {
                            "text":  "hat/cap",
                            "points":  64
                        },
                        {
                            "text":  "hair spray/gel",
                            "points":  13
                        },
                        {
                            "text":  "his hands",
                            "points":  9
                        },
                        {
                            "text":  "glue/superglue",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  200715,
        "question":  "A woman could give a guy the wrong idea if she makes eye contact while she's eating a what?",
        "answers":  [
                        {
                            "text":  "banana",
                            "points":  63
                        },
                        {
                            "text":  "hot dog/corn dog",
                            "points":  18
                        },
                        {
                            "text":  "ice cream/popsicle",
                            "points":  12
                        },
                        {
                            "text":  "peach",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200716,
        "question":  "Name something that takes off.",
        "answers":  [
                        {
                            "text":  "jet/plane",
                            "points":  62
                        },
                        {
                            "text":  "rocket/missile",
                            "points":  27
                        },
                        {
                            "text":  "car/getaway car",
                            "points":  4
                        },
                        {
                            "text":  "investment/business",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200717,
        "question":  "Name something people wash once a week.",
        "answers":  [
                        {
                            "text":  "laundry/clothes",
                            "points":  61
                        },
                        {
                            "text":  "car",
                            "points":  28
                        },
                        {
                            "text":  "head/hair",
                            "points":  3
                        },
                        {
                            "text":  "floor",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200718,
        "question":  "Name a place where you hope the seat next to you will be empty.",
        "answers":  [
                        {
                            "text":  "airplane",
                            "points":  58
                        },
                        {
                            "text":  "bus",
                            "points":  17
                        },
                        {
                            "text":  "theater/movies/porn",
                            "points":  15
                        },
                        {
                            "text":  "bathroom/outhouse",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  200719,
        "question":  "What's the worst thing to forget to take with you to the beach?",
        "answers":  [
                        {
                            "text":  "sunscreen/tan lotion",
                            "points":  55
                        },
                        {
                            "text":  "suit/banana hammock",
                            "points":  20
                        },
                        {
                            "text":  "towel/blanket",
                            "points":  18
                        },
                        {
                            "text":  "water",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200720,
        "question":  "Name an American city with the best-looking people and the worst personalities.",
        "answers":  [
                        {
                            "text":  "l.a./hollywood",
                            "points":  49
                        },
                        {
                            "text":  "new york",
                            "points":  31
                        },
                        {
                            "text":  "miami",
                            "points":  9
                        },
                        {
                            "text":  "las vegas",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  200721,
        "question":  "Instead of cleaning it, name something a man might just spray cologne on.",
        "answers":  [
                        {
                            "text":  "body/armpits",
                            "points":  45
                        },
                        {
                            "text":  "clothes/shoes",
                            "points":  44
                        },
                        {
                            "text":  "couch/chair",
                            "points":  3
                        },
                        {
                            "text":  "toilet",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200722,
        "question":  "Name something that can be straight or curvy.",
        "answers":  [
                        {
                            "text":  "hair",
                            "points":  43
                        },
                        {
                            "text":  "a road/highway",
                            "points":  32
                        },
                        {
                            "text":  "a body/his wiener",
                            "points":  14
                        },
                        {
                            "text":  "a line",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  200723,
        "question":  "Name a female celebrity whose bottom seems to have as big a career as she does.",
        "answers":  [
                        {
                            "text":  "kim kardashian",
                            "points":  41
                        },
                        {
                            "text":  "jennifer lopez",
                            "points":  39
                        },
                        {
                            "text":  "beyonce",
                            "points":  12
                        },
                        {
                            "text":  "nicki minaj",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200724,
        "question":  "Name an animal with a pot belly.",
        "answers":  [
                        {
                            "text":  "pig",
                            "points":  85
                        },
                        {
                            "text":  "bear",
                            "points":  3
                        },
                        {
                            "text":  "human",
                            "points":  3
                        },
                        {
                            "text":  "kangaroo",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200725,
        "question":  "Name something people steer.",
        "answers":  [
                        {
                            "text":  "car/truck",
                            "points":  79
                        },
                        {
                            "text":  "boat/canoe",
                            "points":  11
                        },
                        {
                            "text":  "bicycle",
                            "points":  2
                        },
                        {
                            "text":  "horse",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200726,
        "question":  "Name something a wife might tell her dog to do to her husband if he's being a jerk.",
        "answers":  [
                        {
                            "text":  "bite/sic 'em",
                            "points":  75
                        },
                        {
                            "text":  "take leak/dump on",
                            "points":  12
                        },
                        {
                            "text":  "bark at him",
                            "points":  5
                        },
                        {
                            "text":  "kill him",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200727,
        "question":  "Name an animal that's easier to get off of than onto.",
        "answers":  [
                        {
                            "text":  "horse/pony",
                            "points":  72
                        },
                        {
                            "text":  "elephant",
                            "points":  13
                        },
                        {
                            "text":  "bull",
                            "points":  5
                        },
                        {
                            "text":  "camel",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200728,
        "question":  "Name something that some people like better when it's old.",
        "answers":  [
                        {
                            "text":  "fine wine/booze",
                            "points":  67
                        },
                        {
                            "text":  "cheese/food",
                            "points":  15
                        },
                        {
                            "text":  "clothes/shoes",
                            "points":  8
                        },
                        {
                            "text":  "music",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200729,
        "question":  "Name something some people are as slow as.",
        "answers":  [
                        {
                            "text":  "molasses",
                            "points":  57
                        },
                        {
                            "text":  "a turtle",
                            "points":  19
                        },
                        {
                            "text":  "a snail",
                            "points":  15
                        },
                        {
                            "text":  "dirt/mud",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200730,
        "question":  "Name something people dunk their doughnuts in at the old folks' home.",
        "answers":  [
                        {
                            "text":  "coffee/tea",
                            "points":  55
                        },
                        {
                            "text":  "milk",
                            "points":  35
                        },
                        {
                            "text":  "meds/alka seltzer",
                            "points":  2
                        },
                        {
                            "text":  "prune juice",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200731,
        "question":  "Name something about you your grandparents always forgot.",
        "answers":  [
                        {
                            "text":  "my age",
                            "points":  50
                        },
                        {
                            "text":  "my name",
                            "points":  26
                        },
                        {
                            "text":  "my birthday",
                            "points":  14
                        },
                        {
                            "text":  "my height",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200732,
        "question":  "Name a fruit that people add to cottage cheese.",
        "answers":  [
                        {
                            "text":  "peach",
                            "points":  42
                        },
                        {
                            "text":  "pineapple",
                            "points":  38
                        },
                        {
                            "text":  "strawberry",
                            "points":  8
                        },
                        {
                            "text":  "apple",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  200733,
        "question":  "Name something a man might offer to buy his wife a new pair of.",
        "answers":  [
                        {
                            "text":  "shoes/boots",
                            "points":  40
                        },
                        {
                            "text":  "earrings",
                            "points":  35
                        },
                        {
                            "text":  "double-g ta-tas",
                            "points":  13
                        },
                        {
                            "text":  "sunglasses",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  200734,
        "question":  "Name something people take with them to the laundromat.",
        "answers":  [
                        {
                            "text":  "soap/bleach",
                            "points":  38
                        },
                        {
                            "text":  "dirty laundry",
                            "points":  35
                        },
                        {
                            "text":  "change/quarters",
                            "points":  15
                        },
                        {
                            "text":  "book/magazine",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  200735,
        "question":  "We asked 100 single women... If the man you want is more interested in your friend, name a lie you'd tell him about her.",
        "answers":  [
                        {
                            "text":  "has std/crab city",
                            "points":  35
                        },
                        {
                            "text":  "married/dating",
                            "points":  32
                        },
                        {
                            "text":  "into gals/\"vagitarian\"",
                            "points":  24
                        },
                        {
                            "text":  "whorelike tendencies",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200736,
        "question":  "Name a place you think you'll be on your 100th birthday.",
        "answers":  [
                        {
                            "text":  "grave/heaven/hell",
                            "points":  81
                        },
                        {
                            "text":  "my house",
                            "points":  6
                        },
                        {
                            "text":  "nursing home",
                            "points":  4
                        },
                        {
                            "text":  "disney world",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200737,
        "question":  "Fill in the blank: Little red what?",
        "answers":  [
                        {
                            "text":  "riding hood",
                            "points":  74
                        },
                        {
                            "text":  "corvette",
                            "points":  8
                        },
                        {
                            "text":  "hen",
                            "points":  6
                        },
                        {
                            "text":  "wagon",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  200738,
        "question":  "Name something you might be holding in your hand when you're in the bathtub.",
        "answers":  [
                        {
                            "text":  "soap/shampoo",
                            "points":  73
                        },
                        {
                            "text":  "washcloth",
                            "points":  9
                        },
                        {
                            "text":  "sponge/loofah",
                            "points":  7
                        },
                        {
                            "text":  "cell phone",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200739,
        "question":  "Name something that's made for a ball to drop into.",
        "answers":  [
                        {
                            "text":  "hoop/basket",
                            "points":  72
                        },
                        {
                            "text":  "golf cup/hole",
                            "points":  14
                        },
                        {
                            "text":  "mitt/glove",
                            "points":  5
                        },
                        {
                            "text":  "pool table",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200740,
        "question":  "Give me a word beginning with the letter \"Z.\"",
        "answers":  [
                        {
                            "text":  "zebra",
                            "points":  71
                        },
                        {
                            "text":  "zoo",
                            "points":  13
                        },
                        {
                            "text":  "zip/zipper",
                            "points":  5
                        },
                        {
                            "text":  "zero",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200741,
        "question":  "Name something people search for in the dark.",
        "answers":  [
                        {
                            "text":  "lights/flashlight",
                            "points":  71
                        },
                        {
                            "text":  "keys",
                            "points":  9
                        },
                        {
                            "text":  "clothes/shoes",
                            "points":  8
                        },
                        {
                            "text":  "glasses",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  200742,
        "question":  "Name something a valet might steal from your car.",
        "answers":  [
                        {
                            "text":  "change/wallet",
                            "points":  69
                        },
                        {
                            "text":  "cd/neil diamond",
                            "points":  12
                        },
                        {
                            "text":  "phone/bluetooth",
                            "points":  8
                        },
                        {
                            "text":  "candy/food",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200743,
        "question":  "If you're sitting under a tree, name an animal you hope doesn't poop on your head.",
        "answers":  [
                        {
                            "text":  "bird/condor",
                            "points":  64
                        },
                        {
                            "text":  "squirrel",
                            "points":  16
                        },
                        {
                            "text":  "monkey",
                            "points":  9
                        },
                        {
                            "text":  "bear",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200744,
        "question":  "Name something you ride on where you have to deal with rude people.",
        "answers":  [
                        {
                            "text":  "bus",
                            "points":  58
                        },
                        {
                            "text":  "subway/train",
                            "points":  22
                        },
                        {
                            "text":  "airplane",
                            "points":  7
                        },
                        {
                            "text":  "elevator",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  200745,
        "question":  "Name something divers dive for.",
        "answers":  [
                        {
                            "text":  "treasure/gold",
                            "points":  51
                        },
                        {
                            "text":  "pearls",
                            "points":  25
                        },
                        {
                            "text":  "seafood/fish",
                            "points":  10
                        },
                        {
                            "text":  "contest/medal",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  200746,
        "question":  "Name something that starts making weird noises as it gets older.",
        "answers":  [
                        {
                            "text":  "car",
                            "points":  50
                        },
                        {
                            "text":  "people/bones",
                            "points":  35
                        },
                        {
                            "text":  "house/stairs/doors",
                            "points":  5
                        },
                        {
                            "text":  "refrigerator",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200747,
        "question":  "Name something embarrassing that could happen when you're doubled over with laughter.",
        "answers":  [
                        {
                            "text":  "pee/grow a tail",
                            "points":  47
                        },
                        {
                            "text":  "blow a beefer",
                            "points":  41
                        },
                        {
                            "text":  "rip pants",
                            "points":  3
                        },
                        {
                            "text":  "snort",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200748,
        "question":  "Give me an occupation where you tell a lot of lies.",
        "answers":  [
                        {
                            "text":  "lawyer",
                            "points":  37
                        },
                        {
                            "text":  "salesman/used car",
                            "points":  29
                        },
                        {
                            "text":  "politician",
                            "points":  22
                        },
                        {
                            "text":  "journalist",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  200749,
        "question":  "Give me a word that rhymes with \"saloon.\"",
        "answers":  [
                        {
                            "text":  "balloon",
                            "points":  72
                        },
                        {
                            "text":  "buffoon",
                            "points":  10
                        },
                        {
                            "text":  "baboon",
                            "points":  7
                        },
                        {
                            "text":  "maroon",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200750,
        "question":  "Name something that gets thrown by an athlete.",
        "answers":  [
                        {
                            "text":  "ball",
                            "points":  68
                        },
                        {
                            "text":  "discus",
                            "points":  12
                        },
                        {
                            "text":  "javelin",
                            "points":  8
                        },
                        {
                            "text":  "a fit/insult",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200751,
        "question":  "Name a place where you see grown men jumping up and down.",
        "answers":  [
                        {
                            "text":  "sporting event",
                            "points":  67
                        },
                        {
                            "text":  "gym/trampoline",
                            "points":  19
                        },
                        {
                            "text":  "bar/sports bar",
                            "points":  3
                        },
                        {
                            "text":  "concert",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200752,
        "question":  "Name a place where you see people saying their good-byes.",
        "answers":  [
                        {
                            "text":  "airport",
                            "points":  59
                        },
                        {
                            "text":  "funeral/cemetery",
                            "points":  29
                        },
                        {
                            "text":  "school/parking lot",
                            "points":  2
                        },
                        {
                            "text":  "cruise ship",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200753,
        "question":  "Name something sexy that newlyweds shop for together.",
        "answers":  [
                        {
                            "text":  "lingerie/nighties",
                            "points":  59
                        },
                        {
                            "text":  "bed/sheets",
                            "points":  20
                        },
                        {
                            "text":  "sex toys",
                            "points":  10
                        },
                        {
                            "text":  "lube",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200754,
        "question":  "Name something a cowboy might be embarrassed to admit he can't do.",
        "answers":  [
                        {
                            "text":  "saddle/ride horse",
                            "points":  57
                        },
                        {
                            "text":  "lasso/rope",
                            "points":  29
                        },
                        {
                            "text":  "use a gun",
                            "points":  3
                        },
                        {
                            "text":  "line dance",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200755,
        "question":  "Name a kind of well.",
        "answers":  [
                        {
                            "text":  "wishing well",
                            "points":  57
                        },
                        {
                            "text":  "water/artesian",
                            "points":  21
                        },
                        {
                            "text":  "oil well",
                            "points":  10
                        },
                        {
                            "text":  "inkwell",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200756,
        "question":  "They may call themselves stay-at-home moms, but where are they most of the time?",
        "answers":  [
                        {
                            "text":  "store/mall",
                            "points":  56
                        },
                        {
                            "text":  "in the car",
                            "points":  21
                        },
                        {
                            "text":  "home/in kitchen",
                            "points":  10
                        },
                        {
                            "text":  "park",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  200757,
        "question":  "Name a section in the supermarket where a woman is most likely to meet a man.",
        "answers":  [
                        {
                            "text":  "produce",
                            "points":  51
                        },
                        {
                            "text":  "meats/deli",
                            "points":  23
                        },
                        {
                            "text":  "beer/alcohol",
                            "points":  13
                        },
                        {
                            "text":  "frozen foods",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  200758,
        "question":  "Name something you have to take the top off of before you squeeze it.",
        "answers":  [
                        {
                            "text":  "toothpaste",
                            "points":  50
                        },
                        {
                            "text":  "condiment/ketchup",
                            "points":  33
                        },
                        {
                            "text":  "juice/lemon juice",
                            "points":  5
                        },
                        {
                            "text":  "hot pair of jugs",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200759,
        "question":  "We asked 100 married women... What's your husband's best physical feature?",
        "answers":  [
                        {
                            "text":  "eyes",
                            "points":  47
                        },
                        {
                            "text":  "smile",
                            "points":  27
                        },
                        {
                            "text":  "butt",
                            "points":  12
                        },
                        {
                            "text":  "broad shoulders",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  200760,
        "question":  "Name something that has a pointy tip.",
        "answers":  [
                        {
                            "text":  "pen/pencil",
                            "points":  43
                        },
                        {
                            "text":  "knife",
                            "points":  39
                        },
                        {
                            "text":  "pin",
                            "points":  8
                        },
                        {
                            "text":  "ice pick",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200761,
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
        "id":  200762,
        "question":  "Name something that's foamy.",
        "answers":  [
                        {
                            "text":  "shaving cream",
                            "points":  39
                        },
                        {
                            "text":  "soap/bubble bath",
                            "points":  34
                        },
                        {
                            "text":  "beer",
                            "points":  16
                        },
                        {
                            "text":  "ocean/waves",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200763,
        "question":  "We asked 100 men... What would you do if you had Donald Trump's hair?",
        "answers":  [
                        {
                            "text":  "cut it/shave it",
                            "points":  74
                        },
                        {
                            "text":  "recomb/brush it",
                            "points":  13
                        },
                        {
                            "text":  "dye it/gray",
                            "points":  2
                        },
                        {
                            "text":  "hide/never go out",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200764,
        "question":  "Name something you buy by the gram.",
        "answers":  [
                        {
                            "text":  "coke/drugs/meds",
                            "points":  70
                        },
                        {
                            "text":  "gold",
                            "points":  11
                        },
                        {
                            "text":  "spices/herbs",
                            "points":  6
                        },
                        {
                            "text":  "sugar",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200765,
        "question":  "Name something cows might dream about.",
        "answers":  [
                        {
                            "text":  "grass/hay/eating it",
                            "points":  64
                        },
                        {
                            "text":  "being milked",
                            "points":  18
                        },
                        {
                            "text":  "jumping over moon",
                            "points":  5
                        },
                        {
                            "text":  "cow/hot, hung bull",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200766,
        "question":  "Fill in the blank: Anyone can kiss you on the cheek. But only your lover can kiss you on the what?",
        "answers":  [
                        {
                            "text":  "lips/piehole",
                            "points":  60
                        },
                        {
                            "text":  "neck",
                            "points":  15
                        },
                        {
                            "text":  "pooper",
                            "points":  10
                        },
                        {
                            "text":  "boobs",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  200767,
        "question":  "Name a beverage you drink from paper cups.",
        "answers":  [
                        {
                            "text":  "water",
                            "points":  56
                        },
                        {
                            "text":  "soda",
                            "points":  17
                        },
                        {
                            "text":  "coffee",
                            "points":  12
                        },
                        {
                            "text":  "beer/booze",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  200768,
        "question":  "What's the first thing you reach for when you see your boss leave work?",
        "answers":  [
                        {
                            "text":  "my phone",
                            "points":  49
                        },
                        {
                            "text":  "computer/internet",
                            "points":  21
                        },
                        {
                            "text":  "my car keys",
                            "points":  15
                        },
                        {
                            "text":  "cigarette/e-cig",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  200769,
        "question":  "Name something you hope has been built to last.",
        "answers":  [
                        {
                            "text":  "house/building",
                            "points":  46
                        },
                        {
                            "text":  "car/truck",
                            "points":  36
                        },
                        {
                            "text":  "love/marriage",
                            "points":  5
                        },
                        {
                            "text":  "me",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200770,
        "question":  "Name a place where a man's glasses might get steamed up.",
        "answers":  [
                        {
                            "text":  "bathroom/shower",
                            "points":  44
                        },
                        {
                            "text":  "spa/turkish baths",
                            "points":  35
                        },
                        {
                            "text":  "the kitchen",
                            "points":  8
                        },
                        {
                            "text":  "bed/buried in boobs",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200771,
        "question":  "Name something of yours that's just not fast enough.",
        "answers":  [
                        {
                            "text":  "my clunker car/truck",
                            "points":  42
                        },
                        {
                            "text":  "computer/internet",
                            "points":  25
                        },
                        {
                            "text":  "mind/bod/metabolism",
                            "points":  22
                        },
                        {
                            "text":  "my pet",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200772,
        "question":  "Give me a sound that a horn makes.",
        "answers":  [
                        {
                            "text":  "honk",
                            "points":  40
                        },
                        {
                            "text":  "beep",
                            "points":  40
                        },
                        {
                            "text":  "toot",
                            "points":  9
                        },
                        {
                            "text":  "ahwooooga",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200773,
        "question":  "Besides Santa, who else knows if you've been naughty or nice?",
        "answers":  [
                        {
                            "text":  "god/jesus",
                            "points":  39
                        },
                        {
                            "text":  "spouse/mate",
                            "points":  21
                        },
                        {
                            "text":  "mom/dad",
                            "points":  19
                        },
                        {
                            "text":  "me",
                            "points":  12
                        }
                    ]
    },
    {
        "id":  200774,
        "question":  "Name something people swipe.",
        "answers":  [
                        {
                            "text":  "credit/debit cards",
                            "points":  76
                        },
                        {
                            "text":  "pens",
                            "points":  6
                        },
                        {
                            "text":  "food/candy",
                            "points":  5
                        },
                        {
                            "text":  "money",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200775,
        "question":  "Name something that gets slammed.",
        "answers":  [
                        {
                            "text":  "door/car door",
                            "points":  74
                        },
                        {
                            "text":  "old school phone",
                            "points":  8
                        },
                        {
                            "text":  "finger",
                            "points":  4
                        },
                        {
                            "text":  "baseball/balls",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200776,
        "question":  "Name a job some people can't get just because they're not good-looking enough.",
        "answers":  [
                        {
                            "text":  "model",
                            "points":  72
                        },
                        {
                            "text":  "actor/actress",
                            "points":  9
                        },
                        {
                            "text":  "newscaster",
                            "points":  6
                        },
                        {
                            "text":  "dancer/stripper",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200777,
        "question":  "If animals wore underpants, name one that would need a really big pair.",
        "answers":  [
                        {
                            "text":  "elephant",
                            "points":  61
                        },
                        {
                            "text":  "hippo",
                            "points":  18
                        },
                        {
                            "text":  "bear/panda",
                            "points":  7
                        },
                        {
                            "text":  "rhino",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200778,
        "question":  "Name something a woman gets mad at her man for breaking.",
        "answers":  [
                        {
                            "text":  "her heart/trust",
                            "points":  59
                        },
                        {
                            "text":  "a date",
                            "points":  16
                        },
                        {
                            "text":  "dishes/plates",
                            "points":  11
                        },
                        {
                            "text":  "wind",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200779,
        "question":  "We asked 100 married men... Name a place you like your wife to go to because she'll be gone for hours.",
        "answers":  [
                        {
                            "text":  "store/mall",
                            "points":  55
                        },
                        {
                            "text":  "hair/nail salon",
                            "points":  23
                        },
                        {
                            "text":  "her mom's house",
                            "points":  8
                        },
                        {
                            "text":  "work",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200780,
        "question":  "Give me a word that rhymes with \"pope.\"",
        "answers":  [
                        {
                            "text":  "hope",
                            "points":  52
                        },
                        {
                            "text":  "dope",
                            "points":  22
                        },
                        {
                            "text":  "rope",
                            "points":  10
                        },
                        {
                            "text":  "cope",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  200781,
        "question":  "Name something a man might be holding while his wife is giving birth.",
        "answers":  [
                        {
                            "text":  "her hand",
                            "points":  51
                        },
                        {
                            "text":  "camera/phone",
                            "points":  32
                        },
                        {
                            "text":  "his breath",
                            "points":  4
                        },
                        {
                            "text":  "her legs",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200782,
        "question":  "Name something with crunchy nuts.",
        "answers":  [
                        {
                            "text":  "candy/candy bar",
                            "points":  49
                        },
                        {
                            "text":  "cereal/granola",
                            "points":  24
                        },
                        {
                            "text":  "trail mix/chex mix",
                            "points":  11
                        },
                        {
                            "text":  "cracker jack",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  200783,
        "question":  "Name a piece of equipment with the word \"scope\" in its name.",
        "answers":  [
                        {
                            "text":  "telescope",
                            "points":  47
                        },
                        {
                            "text":  "microscope",
                            "points":  25
                        },
                        {
                            "text":  "stethoscope",
                            "points":  12
                        },
                        {
                            "text":  "periscope",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  200784,
        "question":  "Besides her finger, name a place on her body that a woman might wear jewelry.",
        "answers":  [
                        {
                            "text":  "neck",
                            "points":  41
                        },
                        {
                            "text":  "ear",
                            "points":  35
                        },
                        {
                            "text":  "wrist",
                            "points":  9
                        },
                        {
                            "text":  "toe",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  200785,
        "question":  "When people say \"use it or lose it,\" what are they referring to?",
        "answers":  [
                        {
                            "text":  "brain/memory",
                            "points":  31
                        },
                        {
                            "text":  "money",
                            "points":  29
                        },
                        {
                            "text":  "body/\"tommy salami\"",
                            "points":  24
                        },
                        {
                            "text":  "vacation days",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  200786,
        "question":  "Name a college known for really smart people.",
        "answers":  [
                        {
                            "text":  "harvard",
                            "points":  60
                        },
                        {
                            "text":  "mit",
                            "points":  13
                        },
                        {
                            "text":  "yale",
                            "points":  12
                        },
                        {
                            "text":  "princeton",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200787,
        "question":  "Name an American city people from other countries flock to.",
        "answers":  [
                        {
                            "text":  "new york",
                            "points":  59
                        },
                        {
                            "text":  "los angeles",
                            "points":  15
                        },
                        {
                            "text":  "las vegas",
                            "points":  10
                        },
                        {
                            "text":  "orlando",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  200788,
        "question":  "Name something you steam.",
        "answers":  [
                        {
                            "text":  "vegetables",
                            "points":  57
                        },
                        {
                            "text":  "clothes",
                            "points":  15
                        },
                        {
                            "text":  "rice",
                            "points":  11
                        },
                        {
                            "text":  "clams",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  200789,
        "question":  "Name something in which people put a single flower.",
        "answers":  [
                        {
                            "text":  "vase",
                            "points":  54
                        },
                        {
                            "text":  "suit/lapel",
                            "points":  21
                        },
                        {
                            "text":  "hair",
                            "points":  7
                        },
                        {
                            "text":  "grave/casket",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  200790,
        "question":  "Name something you put your lips together to do.",
        "answers":  [
                        {
                            "text":  "kiss/blow kiss",
                            "points":  52
                        },
                        {
                            "text":  "whistle",
                            "points":  27
                        },
                        {
                            "text":  "drink from a straw",
                            "points":  6
                        },
                        {
                            "text":  "lipstick/lip gloss",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200791,
        "question":  "Name someone to whom you should never say \"I told you so.\"",
        "answers":  [
                        {
                            "text":  "spouse/mate",
                            "points":  41
                        },
                        {
                            "text":  "mom/dad",
                            "points":  29
                        },
                        {
                            "text":  "boss",
                            "points":  14
                        },
                        {
                            "text":  "judge/judy",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  200792,
        "question":  "Name a kind of belt.",
        "answers":  [
                        {
                            "text":  "leather/pant belt",
                            "points":  39
                        },
                        {
                            "text":  "black/martial arts",
                            "points":  32
                        },
                        {
                            "text":  "seat belt",
                            "points":  14
                        },
                        {
                            "text":  "chastity belt",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200793,
        "question":  "Name something warm you sleep with when there's no warm body next to you.",
        "answers":  [
                        {
                            "text":  "blanket/quilt",
                            "points":  39
                        },
                        {
                            "text":  "pet/dog",
                            "points":  24
                        },
                        {
                            "text":  "pillow",
                            "points":  22
                        },
                        {
                            "text":  "hot water bottle",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200794,
        "question":  "Besides your house, name a specific place you might have a gun.",
        "answers":  [
                        {
                            "text":  "car/pickup truck",
                            "points":  71
                        },
                        {
                            "text":  "garage/workshop",
                            "points":  7
                        },
                        {
                            "text":  "work/desk",
                            "points":  7
                        },
                        {
                            "text":  "on me/holster",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200795,
        "question":  "Name something that's thicker than water.",
        "answers":  [
                        {
                            "text":  "blood",
                            "points":  60
                        },
                        {
                            "text":  "oil",
                            "points":  15
                        },
                        {
                            "text":  "syrup",
                            "points":  9
                        },
                        {
                            "text":  "pudding",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200796,
        "question":  "Name something you'd find on someone's neck.",
        "answers":  [
                        {
                            "text":  "necklace/chain",
                            "points":  55
                        },
                        {
                            "text":  "hickey",
                            "points":  16
                        },
                        {
                            "text":  "mole",
                            "points":  12
                        },
                        {
                            "text":  "scarf",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  200797,
        "question":  "Name an animal that jumps through hoops.",
        "answers":  [
                        {
                            "text":  "dog",
                            "points":  49
                        },
                        {
                            "text":  "lion",
                            "points":  20
                        },
                        {
                            "text":  "tiger",
                            "points":  12
                        },
                        {
                            "text":  "seal",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  200798,
        "question":  "Give me a word that rhymes with \"gender.\"",
        "answers":  [
                        {
                            "text":  "bender",
                            "points":  47
                        },
                        {
                            "text":  "fender",
                            "points":  25
                        },
                        {
                            "text":  "tender",
                            "points":  11
                        },
                        {
                            "text":  "slender",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  200799,
        "question":  "If you were a bear, what might we see you do in the woods?",
        "answers":  [
                        {
                            "text":  "eat/find food",
                            "points":  36
                        },
                        {
                            "text":  "whiz/dump",
                            "points":  34
                        },
                        {
                            "text":  "sleep/hibernate",
                            "points":  13
                        },
                        {
                            "text":  "rub back on tree",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  200800,
        "question":  "Name an activity some women are addicted to.",
        "answers":  [
                        {
                            "text":  "shopping/coupons",
                            "points":  69
                        },
                        {
                            "text":  "tv/the bachelor",
                            "points":  7
                        },
                        {
                            "text":  "gossiping",
                            "points":  6
                        },
                        {
                            "text":  "yoga/exercise",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  200801,
        "question":  "Name something a hiker would have in his backpack.",
        "answers":  [
                        {
                            "text":  "water",
                            "points":  67
                        },
                        {
                            "text":  "food/snacks",
                            "points":  11
                        },
                        {
                            "text":  "compass",
                            "points":  5
                        },
                        {
                            "text":  "rope",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200802,
        "question":  "Name something that people grow fields of.",
        "answers":  [
                        {
                            "text":  "corn",
                            "points":  66
                        },
                        {
                            "text":  "wheat",
                            "points":  9
                        },
                        {
                            "text":  "flowers/poppies",
                            "points":  9
                        },
                        {
                            "text":  "pot",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200803,
        "question":  "Name a fruit that's good with ice cream.",
        "answers":  [
                        {
                            "text":  "strawberries",
                            "points":  60
                        },
                        {
                            "text":  "bananas",
                            "points":  11
                        },
                        {
                            "text":  "cherries",
                            "points":  10
                        },
                        {
                            "text":  "peaches",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  200804,
        "question":  "Name something people pitch.",
        "answers":  [
                        {
                            "text":  "a ball",
                            "points":  59
                        },
                        {
                            "text":  "idea/for movie",
                            "points":  13
                        },
                        {
                            "text":  "product/service",
                            "points":  9
                        },
                        {
                            "text":  "horseshoes",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  200805,
        "question":  "Name something that you see in every courtroom.",
        "answers":  [
                        {
                            "text":  "judge",
                            "points":  54
                        },
                        {
                            "text":  "gavel",
                            "points":  22
                        },
                        {
                            "text":  "chairs",
                            "points":  7
                        },
                        {
                            "text":  "judge's bench",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200806,
        "question":  "Name something you'd hate to have to jump out of.",
        "answers":  [
                        {
                            "text":  "plane",
                            "points":  53
                        },
                        {
                            "text":  "moving car",
                            "points":  20
                        },
                        {
                            "text":  "window/building",
                            "points":  9
                        },
                        {
                            "text":  "a cake",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  200807,
        "question":  "Name something made of foam rubber.",
        "answers":  [
                        {
                            "text":  "pillow/seat cushion",
                            "points":  53
                        },
                        {
                            "text":  "ball/nerf ball",
                            "points":  14
                        },
                        {
                            "text":  "mattress/topper",
                            "points":  12
                        },
                        {
                            "text":  "foam finger",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  200808,
        "question":  "Name a food that's easy to catch in your mouth.",
        "answers":  [
                        {
                            "text":  "popcorn",
                            "points":  46
                        },
                        {
                            "text":  "grapes",
                            "points":  20
                        },
                        {
                            "text":  "peanuts/nuts",
                            "points":  11
                        },
                        {
                            "text":  "candy",
                            "points":  10
                        }
                    ]
    },
    {
        "id":  200809,
        "question":  "Give me a word that rhymes with \"rumble.\"",
        "answers":  [
                        {
                            "text":  "tumble",
                            "points":  44
                        },
                        {
                            "text":  "bumble",
                            "points":  26
                        },
                        {
                            "text":  "humble",
                            "points":  9
                        },
                        {
                            "text":  "stumble",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  200810,
        "question":  "The older you are when you get married, the less likely you are to what?",
        "answers":  [
                        {
                            "text":  "have kids/grandkids",
                            "points":  39
                        },
                        {
                            "text":  "divorce",
                            "points":  34
                        },
                        {
                            "text":  "cheat",
                            "points":  10
                        },
                        {
                            "text":  "hump like bunnies",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200811,
        "question":  "Fill in the blank: Traffic ________",
        "answers":  [
                        {
                            "text":  "light",
                            "points":  37
                        },
                        {
                            "text":  "jam",
                            "points":  33
                        },
                        {
                            "text":  "stop",
                            "points":  11
                        },
                        {
                            "text":  "cone",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  200812,
        "question":  "Name something a girl carries in her purse on the first date just in case she needs it.",
        "answers":  [
                        {
                            "text":  "mace/gun",
                            "points":  36
                        },
                        {
                            "text":  "money",
                            "points":  23
                        },
                        {
                            "text":  "condom/birth control",
                            "points":  16
                        },
                        {
                            "text":  "phone",
                            "points":  12
                        }
                    ]
    },
    {
        "id":  200813,
        "question":  "Name something you don't want people to ask you for.",
        "answers":  [
                        {
                            "text":  "money/donation",
                            "points":  79
                        },
                        {
                            "text":  "my age",
                            "points":  3
                        },
                        {
                            "text":  "advice",
                            "points":  2
                        },
                        {
                            "text":  "my weight",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  200814,
        "question":  "Name something in your home that sometimes gets very hot.",
        "answers":  [
                        {
                            "text":  "stove/oven",
                            "points":  74
                        },
                        {
                            "text":  "water",
                            "points":  6
                        },
                        {
                            "text":  "bed/mattress",
                            "points":  3
                        },
                        {
                            "text":  "heater/furnace",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200815,
        "question":  "Tell me another way people say \"stoned.\"",
        "answers":  [
                        {
                            "text":  "high",
                            "points":  64
                        },
                        {
                            "text":  "baked",
                            "points":  10
                        },
                        {
                            "text":  "wasted",
                            "points":  9
                        },
                        {
                            "text":  "drunk",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200816,
        "question":  "Name a place where you sit in an adjustable seat.",
        "answers":  [
                        {
                            "text":  "car",
                            "points":  53
                        },
                        {
                            "text":  "airplane",
                            "points":  13
                        },
                        {
                            "text":  "desk/at work",
                            "points":  11
                        },
                        {
                            "text":  "dentist office",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  200817,
        "question":  "Name something about a male gorilla that makes a female gorilla go ape.",
        "answers":  [
                        {
                            "text":  "body/strong & furry",
                            "points":  43
                        },
                        {
                            "text":  "his musky scent",
                            "points":  21
                        },
                        {
                            "text":  "beats his chest",
                            "points":  13
                        },
                        {
                            "text":  "his roar/voice",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  200818,
        "question":  "Name something about people that gets bigger as they reach middle age.",
        "answers":  [
                        {
                            "text":  "belly/waist",
                            "points":  71
                        },
                        {
                            "text":  "ears",
                            "points":  6
                        },
                        {
                            "text":  "nose",
                            "points":  4
                        },
                        {
                            "text":  "ego/attitude",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200819,
        "question":  "If he ran out of diapers, what might a dad put on a baby instead?",
        "answers":  [
                        {
                            "text":  "towel/washcloth",
                            "points":  54
                        },
                        {
                            "text":  "shirt/t-shirt",
                            "points":  20
                        },
                        {
                            "text":  "paper towel",
                            "points":  8
                        },
                        {
                            "text":  "newspaper",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200820,
        "question":  "Name something found on a roof.",
        "answers":  [
                        {
                            "text":  "shingles/tiles",
                            "points":  52
                        },
                        {
                            "text":  "chimney",
                            "points":  20
                        },
                        {
                            "text":  "tar",
                            "points":  8
                        },
                        {
                            "text":  "vents",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  200821,
        "question":  "Name something that's slippery when it's wet.",
        "answers":  [
                        {
                            "text":  "floor",
                            "points":  50
                        },
                        {
                            "text":  "road/bridge",
                            "points":  23
                        },
                        {
                            "text":  "body part/person",
                            "points":  9
                        },
                        {
                            "text":  "stairs",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200822,
        "question":  "What would be the worst kind of bug to crawl up your nose?",
        "answers":  [
                        {
                            "text":  "spider/tarantula",
                            "points":  43
                        },
                        {
                            "text":  "cockroach",
                            "points":  24
                        },
                        {
                            "text":  "tick",
                            "points":  9
                        },
                        {
                            "text":  "wasp/bee",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  200823,
        "question":  "Name something Mrs. Claus would probably like to ride on.",
        "answers":  [
                        {
                            "text":  "sleigh",
                            "points":  34
                        },
                        {
                            "text":  "santa's pole",
                            "points":  30
                        },
                        {
                            "text":  "rudolph/reindeer",
                            "points":  14
                        },
                        {
                            "text":  "motorcycle/harley",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  200824,
        "question":  "Besides a bull, name an animal that has \"bull\" in its name.",
        "answers":  [
                        {
                            "text":  "bulldog",
                            "points":  33
                        },
                        {
                            "text":  "pit bull/terrier",
                            "points":  21
                        },
                        {
                            "text":  "bullfrog",
                            "points":  17
                        },
                        {
                            "text":  "bull moose/winkle",
                            "points":  14
                        }
                    ]
    },
    {
        "id":  200825,
        "question":  "We asked 100 married men... Fill in the blank: You'd love my wife if you love women who ________ too much.",
        "answers":  [
                        {
                            "text":  "talk/nag",
                            "points":  48
                        },
                        {
                            "text":  "work",
                            "points":  16
                        },
                        {
                            "text":  "eat",
                            "points":  13
                        },
                        {
                            "text":  "worry",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  200826,
        "question":  "Name something you might find in a tank.",
        "answers":  [
                        {
                            "text":  "fish",
                            "points":  36
                        },
                        {
                            "text":  "gas",
                            "points":  30
                        },
                        {
                            "text":  "water",
                            "points":  9
                        },
                        {
                            "text":  "soldier/commander",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  200827,
        "question":  "They say, \"If you've got it, flaunt it.\" So what have you got that you like to flaunt?",
        "answers":  [
                        {
                            "text":  "looks/silky mane",
                            "points":  27
                        },
                        {
                            "text":  "body/onion booty",
                            "points":  26
                        },
                        {
                            "text":  "brains/degree",
                            "points":  20
                        },
                        {
                            "text":  "personality/humor",
                            "points":  11
                        }
                    ]
    },
    {
        "id":  200828,
        "question":  "Tell me a type of food people serve stuffed.",
        "answers":  [
                        {
                            "text":  "turkey",
                            "points":  62
                        },
                        {
                            "text":  "chicken",
                            "points":  14
                        },
                        {
                            "text":  "pork chops",
                            "points":  4
                        },
                        {
                            "text":  "peppers",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200829,
        "question":  "Name a place people spend the night and think of the comforts of home.",
        "answers":  [
                        {
                            "text":  "hotel/motel/b&b",
                            "points":  45
                        },
                        {
                            "text":  "tent/cabin/woods",
                            "points":  26
                        },
                        {
                            "text":  "their own home/bed",
                            "points":  9
                        },
                        {
                            "text":  "jail",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200830,
        "question":  "Name something that once you learn how to do it, you never forget.",
        "answers":  [
                        {
                            "text":  "ride a bike",
                            "points":  61
                        },
                        {
                            "text":  "walk",
                            "points":  8
                        },
                        {
                            "text":  "tie shoes",
                            "points":  7
                        },
                        {
                            "text":  "drive",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  200831,
        "question":  "Name something people have trouble closing.",
        "answers":  [
                        {
                            "text":  "their mouths",
                            "points":  36
                        },
                        {
                            "text":  "doors/cabinets",
                            "points":  33
                        },
                        {
                            "text":  "a deal/mortgage",
                            "points":  8
                        },
                        {
                            "text":  "a good book",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  200832,
        "question":  "Name a fear that people eventually grow out of.",
        "answers":  [
                        {
                            "text":  "the dark",
                            "points":  54
                        },
                        {
                            "text":  "bogeyman/monster",
                            "points":  11
                        },
                        {
                            "text":  "heights/falling",
                            "points":  9
                        },
                        {
                            "text":  "death/dying",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  200833,
        "question":  "We asked 100 women... Fill in the blank: A girl can always use more what?",
        "answers":  [
                        {
                            "text":  "money",
                            "points":  33
                        },
                        {
                            "text":  "shoes/clothes",
                            "points":  29
                        },
                        {
                            "text":  "food/chocolate",
                            "points":  12
                        },
                        {
                            "text":  "love",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  200834,
        "question":  "Name something that women break.",
        "answers":  [
                        {
                            "text":  "nails",
                            "points":  27
                        },
                        {
                            "text":  "dish/glass",
                            "points":  24
                        },
                        {
                            "text":  "hearts",
                            "points":  23
                        },
                        {
                            "text":  "the bank",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  200835,
        "question":  "A new TV show about dogs might be titled \"So You Think You Can\" what?",
        "answers":  [
                        {
                            "text":  "bark/woof",
                            "points":  52
                        },
                        {
                            "text":  "eat/chew",
                            "points":  6
                        },
                        {
                            "text":  "be trained/obey",
                            "points":  5
                        },
                        {
                            "text":  "fetch",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  200836,
        "question":  "Name a food that a low-fat version of just doesn't cut it.",
        "answers":  [
                        {
                            "text":  "ice cream",
                            "points":  23
                        },
                        {
                            "text":  "cheese",
                            "points":  15
                        },
                        {
                            "text":  "cake/cheesecake",
                            "points":  11
                        },
                        {
                            "text":  "pizza",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  200837,
        "question":  "Name an activity that puts a big smile on your face.",
        "answers":  [
                        {
                            "text":  "hiding the salami",
                            "points":  23
                        },
                        {
                            "text":  "sports",
                            "points":  12
                        },
                        {
                            "text":  "watching tv/movie",
                            "points":  9
                        },
                        {
                            "text":  "playing with kids",
                            "points":  7
                        }
                    ]
    }
];
