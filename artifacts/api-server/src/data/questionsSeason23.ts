import type { SurveyQuestion } from "./questions.js";

// Season 23 set: a separate question set from the main bank in questions.ts.
// Boards from Family Feud season 23, as transcribed at
// https://mstiescott.neocities.org/feud23 (crawled 2026-11-13).
// Ids start at 140001 (each season has its own block of 10,000), so they
// never clash with the main bank (1-8782), AI questions (9000+) or other
// seasons. One-answer boards are left out.
// Not used in gameplay yet.
export const SEASON23_SET = "season23";
export const SEASON23_ID_START = 140001;

export function isSeason23Question(id: number): boolean {
  return id >= SEASON23_ID_START && id < SEASON23_ID_START + 10000;
}

export const season23Questions: SurveyQuestion[] = [
    {
        "id":  140001,
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
                            "text":  "grew whiskers",
                            "points":  18
                        },
                        {
                            "text":  "grew a tail",
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
        "id":  140002,
        "question":  "Name something you're embarrassed to admit you still do in the bathtub like a little kid.",
        "answers":  [
                        {
                            "text":  "play w/ bubbles",
                            "points":  34
                        },
                        {
                            "text":  "let one rip",
                            "points":  24
                        },
                        {
                            "text":  "toys/duckies",
                            "points":  12
                        },
                        {
                            "text":  "splash",
                            "points":  9
                        },
                        {
                            "text":  "sing",
                            "points":  8
                        },
                        {
                            "text":  "pee/turn it yellow",
                            "points":  6
                        },
                        {
                            "text":  "swim/go under",
                            "points":  5
                        },
                        {
                            "text":  "crazy hairstyles",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140003,
        "question":  "Name something you'd be surprised to see your boss riding to work on.",
        "answers":  [
                        {
                            "text":  "horse/animal",
                            "points":  37
                        },
                        {
                            "text":  "bike/tricycle",
                            "points":  23
                        },
                        {
                            "text":  "motorcycle",
                            "points":  22
                        },
                        {
                            "text":  "the bus",
                            "points":  7
                        },
                        {
                            "text":  "lawn mower",
                            "points":  4
                        },
                        {
                            "text":  "skateboard",
                            "points":  2
                        },
                        {
                            "text":  "broom",
                            "points":  2
                        },
                        {
                            "text":  "scooter",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140004,
        "question":  "We asked 100 married women... My husband likes to play a game where he's a dog and I'm a what?",
        "answers":  [
                        {
                            "text":  "pussycat",
                            "points":  33
                        },
                        {
                            "text":  "another dog",
                            "points":  29
                        },
                        {
                            "text":  "bone/treat",
                            "points":  18
                        },
                        {
                            "text":  "fire hydrant",
                            "points":  5
                        },
                        {
                            "text":  "dogcatcher",
                            "points":  5
                        },
                        {
                            "text":  "leg",
                            "points":  5
                        },
                        {
                            "text":  "chew toy",
                            "points":  2
                        },
                        {
                            "text":  "trainer",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140005,
        "question":  "Fill in the blank: Bob had such a horse face, his wife was tempted to put ______ on him.",
        "answers":  [
                        {
                            "text":  "bag/feedbag",
                            "points":  33
                        },
                        {
                            "text":  "reins/bridle",
                            "points":  18
                        },
                        {
                            "text":  "mask/blinders",
                            "points":  15
                        },
                        {
                            "text":  "saddle",
                            "points":  14
                        },
                        {
                            "text":  "makeup",
                            "points":  10
                        },
                        {
                            "text":  "muzzle",
                            "points":  4
                        },
                        {
                            "text":  "sheet/pillowcase",
                            "points":  3
                        },
                        {
                            "text":  "horseshoes",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140006,
        "question":  "We asked 100 single women... Name one thing a guy does during a conversation that can make you think he likes you.",
        "answers":  [
                        {
                            "text":  "listen",
                            "points":  18
                        },
                        {
                            "text":  "touch hand/arm",
                            "points":  17
                        },
                        {
                            "text":  "gaze into eyes",
                            "points":  15
                        },
                        {
                            "text":  "sweet talk",
                            "points":  14
                        },
                        {
                            "text":  "smile/laugh",
                            "points":  12
                        },
                        {
                            "text":  "ask for #/date",
                            "points":  11
                        },
                        {
                            "text":  "get close/lean",
                            "points":  9
                        },
                        {
                            "text":  "wink",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140007,
        "question":  "You'd be shocked if your friend told you that they hadn't done what in days?",
        "answers":  [
                        {
                            "text":  "bathed",
                            "points":  50
                        },
                        {
                            "text":  "peed/planted corn",
                            "points":  15
                        },
                        {
                            "text":  "eaten",
                            "points":  12
                        },
                        {
                            "text":  "slept",
                            "points":  9
                        },
                        {
                            "text":  "made love",
                            "points":  6
                        },
                        {
                            "text":  "gotten drunk",
                            "points":  2
                        },
                        {
                            "text":  "brushed teeth",
                            "points":  2
                        },
                        {
                            "text":  "shopped",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140008,
        "question":  "Fill in the blank: A married man might say, \"My wife taught me to be a better ______.\"",
        "answers":  [
                        {
                            "text":  "man/person",
                            "points":  49
                        },
                        {
                            "text":  "cook",
                            "points":  13
                        },
                        {
                            "text":  "lover/kisser",
                            "points":  12
                        },
                        {
                            "text":  "husband",
                            "points":  10
                        },
                        {
                            "text":  "listener",
                            "points":  5
                        },
                        {
                            "text":  "father",
                            "points":  5
                        },
                        {
                            "text":  "handyman",
                            "points":  2
                        },
                        {
                            "text":  "liar",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140009,
        "question":  "Name a part of your body a doctor might look inside of.",
        "answers":  [
                        {
                            "text":  "piehole",
                            "points":  47
                        },
                        {
                            "text":  "ear",
                            "points":  26
                        },
                        {
                            "text":  "\"my tush\"",
                            "points":  8
                        },
                        {
                            "text":  "\"lady parts\"",
                            "points":  5
                        },
                        {
                            "text":  "snout",
                            "points":  5
                        },
                        {
                            "text":  "head/skull",
                            "points":  3
                        },
                        {
                            "text":  "eye",
                            "points":  2
                        },
                        {
                            "text":  "heart",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140010,
        "question":  "Name something an angry Mrs. Potato Head decided to turn Mr. Potato Head into.",
        "answers":  [
                        {
                            "text":  "fries/tots",
                            "points":  46
                        },
                        {
                            "text":  "mashed potatoes",
                            "points":  30
                        },
                        {
                            "text":  "baked potato",
                            "points":  7
                        },
                        {
                            "text":  "hash browns",
                            "points":  5
                        },
                        {
                            "text":  "casserole",
                            "points":  3
                        },
                        {
                            "text":  "potato chips",
                            "points":  3
                        },
                        {
                            "text":  "ms. potato head",
                            "points":  2
                        },
                        {
                            "text":  "fritter",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140011,
        "question":  "Name something of his wife's a man might accidentally put on if he dressed in the dark.",
        "answers":  [
                        {
                            "text":  "lace panties",
                            "points":  35
                        },
                        {
                            "text":  "shirt/tank",
                            "points":  23
                        },
                        {
                            "text":  "socks/hose",
                            "points":  14
                        },
                        {
                            "text":  "pants/leggings",
                            "points":  12
                        },
                        {
                            "text":  "jammies/robe",
                            "points":  4
                        },
                        {
                            "text":  "shoes/slippers",
                            "points":  4
                        },
                        {
                            "text":  "jacket",
                            "points":  3
                        },
                        {
                            "text":  "bra",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140012,
        "question":  "We asked 100 women... Name a reason you wouldn't date a professional athlete.",
        "answers":  [
                        {
                            "text":  "gone/travel",
                            "points":  30
                        },
                        {
                            "text":  "cheat/groupies",
                            "points":  30
                        },
                        {
                            "text":  "big egos",
                            "points":  20
                        },
                        {
                            "text":  "fame/paparazzi",
                            "points":  5
                        },
                        {
                            "text":  "i hate sports",
                            "points":  4
                        },
                        {
                            "text":  "too muscly/'roids",
                            "points":  3
                        },
                        {
                            "text":  "i'm too plain",
                            "points":  3
                        },
                        {
                            "text":  "they're brainless",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140013,
        "question":  "We asked 100 women... It's your lucky day -- you just won a raffle to do what with Steve Harvey?",
        "answers":  [
                        {
                            "text":  "eat/red lobster",
                            "points":  27
                        },
                        {
                            "text":  "shop/for car!",
                            "points":  25
                        },
                        {
                            "text":  "on tv/host feud",
                            "points":  19
                        },
                        {
                            "text":  "vacation",
                            "points":  16
                        },
                        {
                            "text":  "talk/hang",
                            "points":  4
                        },
                        {
                            "text":  "body shots",
                            "points":  2
                        },
                        {
                            "text":  "dance/grind",
                            "points":  2
                        },
                        {
                            "text":  "kiss/boink",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140014,
        "question":  "Name a place you'd kill for a front-row seat.",
        "answers":  [
                        {
                            "text":  "concert/cher",
                            "points":  51
                        },
                        {
                            "text":  "sporting event",
                            "points":  20
                        },
                        {
                            "text":  "play/opera",
                            "points":  14
                        },
                        {
                            "text":  "tv show/oscars",
                            "points":  3
                        },
                        {
                            "text":  "raunchy strip joint",
                            "points":  2
                        },
                        {
                            "text":  "movie",
                            "points":  2
                        },
                        {
                            "text":  "airplane",
                            "points":  2
                        },
                        {
                            "text":  "heaven",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140015,
        "question":  "Name something a woman does to a man's car that's her way of saying \"You should have called me back.\"",
        "answers":  [
                        {
                            "text":  "scratch/key it",
                            "points":  49
                        },
                        {
                            "text":  "slash tires",
                            "points":  13
                        },
                        {
                            "text":  "leave note",
                            "points":  11
                        },
                        {
                            "text":  "paint/write on",
                            "points":  9
                        },
                        {
                            "text":  "break windows",
                            "points":  8
                        },
                        {
                            "text":  "kick it",
                            "points":  2
                        },
                        {
                            "text":  "soap it",
                            "points":  2
                        },
                        {
                            "text":  "egg/throw food",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140016,
        "question":  "Even though it's called an innie belly button, you shouldn't put what in it?",
        "answers":  [
                        {
                            "text":  "a finger",
                            "points":  40
                        },
                        {
                            "text":  "ring/piercing",
                            "points":  14
                        },
                        {
                            "text":  "penny/money",
                            "points":  14
                        },
                        {
                            "text":  "food/drink/mayo",
                            "points":  13
                        },
                        {
                            "text":  "your winky",
                            "points":  7
                        },
                        {
                            "text":  "lint",
                            "points":  4
                        },
                        {
                            "text":  "a button",
                            "points":  2
                        },
                        {
                            "text":  "a tongue",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140017,
        "question":  "Name something a man might give a woman on a first date to make sure there's a second.",
        "answers":  [
                        {
                            "text":  "flowers",
                            "points":  39
                        },
                        {
                            "text":  "kiss/hug",
                            "points":  33
                        },
                        {
                            "text":  "his number",
                            "points":  11
                        },
                        {
                            "text":  "cash/a check",
                            "points":  3
                        },
                        {
                            "text":  "the big \"o\"",
                            "points":  3
                        },
                        {
                            "text":  "food/dessert",
                            "points":  3
                        },
                        {
                            "text":  "his attention",
                            "points":  2
                        },
                        {
                            "text":  "compliments",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140018,
        "question":  "Name something you'd do if you smelled marijuana coming from your boss's office.",
        "answers":  [
                        {
                            "text":  "\"gimme a toke\"",
                            "points":  30
                        },
                        {
                            "text":  "ignore",
                            "points":  23
                        },
                        {
                            "text":  "laugh/grin",
                            "points":  16
                        },
                        {
                            "text":  "leave/avoid him",
                            "points":  8
                        },
                        {
                            "text":  "report to hr",
                            "points":  7
                        },
                        {
                            "text":  "call cops",
                            "points":  6
                        },
                        {
                            "text":  "gossip",
                            "points":  3
                        },
                        {
                            "text":  "inhale under door",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140019,
        "question":  "They called the serial killer \"the Gardener\" because he killed his victims with what?",
        "answers":  [
                        {
                            "text":  "a hoe",
                            "points":  29
                        },
                        {
                            "text":  "a shovel/spade",
                            "points":  26
                        },
                        {
                            "text":  "shears/clippers",
                            "points":  11
                        },
                        {
                            "text":  "a rake",
                            "points":  10
                        },
                        {
                            "text":  "plants/mushrooms",
                            "points":  6
                        },
                        {
                            "text":  "a hose",
                            "points":  5
                        },
                        {
                            "text":  "a trowel",
                            "points":  5
                        },
                        {
                            "text":  "a pitchfork",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140020,
        "question":  "We asked 100 married men... In your nightmares, what are you doing with your mother-in-law?",
        "answers":  [
                        {
                            "text":  "dunkin' the donut",
                            "points":  29
                        },
                        {
                            "text":  "talking",
                            "points":  19
                        },
                        {
                            "text":  "dancing/the wobble",
                            "points":  13
                        },
                        {
                            "text":  "traveling",
                            "points":  11
                        },
                        {
                            "text":  "fighting",
                            "points":  11
                        },
                        {
                            "text":  "shopping",
                            "points":  8
                        },
                        {
                            "text":  "living w/ her",
                            "points":  3
                        },
                        {
                            "text":  "making out",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140021,
        "question":  "We asked 100 women... Name a traffic sign that describes you when making out in a car.",
        "answers":  [
                        {
                            "text":  "yield",
                            "points":  30
                        },
                        {
                            "text":  "stop",
                            "points":  22
                        },
                        {
                            "text":  "caution",
                            "points":  12
                        },
                        {
                            "text":  "slippery when wet",
                            "points":  10
                        },
                        {
                            "text":  "go",
                            "points":  8
                        },
                        {
                            "text":  "curves ahead",
                            "points":  6
                        },
                        {
                            "text":  "slow",
                            "points":  5
                        },
                        {
                            "text":  "bumpy road",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140022,
        "question":  "Name something the Easter Bunny might be jealous that Santa Claus has and he doesn't.",
        "answers":  [
                        {
                            "text":  "flying sleigh",
                            "points":  29
                        },
                        {
                            "text":  "deer/rudolph",
                            "points":  18
                        },
                        {
                            "text":  "elf army",
                            "points":  18
                        },
                        {
                            "text":  "beautiful wife",
                            "points":  9
                        },
                        {
                            "text":  "sack of gifts",
                            "points":  7
                        },
                        {
                            "text":  "milk & cookies",
                            "points":  6
                        },
                        {
                            "text":  "trendy beard",
                            "points":  4
                        },
                        {
                            "text":  "hip outfit",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140023,
        "question":  "We asked 100 men... Name a reason you don't think that you'd be chosen as \"The Bachelor.\"",
        "answers":  [
                        {
                            "text":  "i'm married",
                            "points":  26
                        },
                        {
                            "text":  "i'm ugly",
                            "points":  23
                        },
                        {
                            "text":  "ancient/30+",
                            "points":  21
                        },
                        {
                            "text":  "i'm chubby",
                            "points":  11
                        },
                        {
                            "text":  "i dig dudes",
                            "points":  6
                        },
                        {
                            "text":  "i'm bald",
                            "points":  4
                        },
                        {
                            "text":  "i'm broke",
                            "points":  2
                        },
                        {
                            "text":  "i'm short",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140024,
        "question":  "Name something it's easier for men to commit to than committing to a woman.",
        "answers":  [
                        {
                            "text":  "sports",
                            "points":  25
                        },
                        {
                            "text":  "job",
                            "points":  22
                        },
                        {
                            "text":  "car",
                            "points":  14
                        },
                        {
                            "text":  "exercise/diet",
                            "points":  11
                        },
                        {
                            "text":  "drink/with guys",
                            "points":  11
                        },
                        {
                            "text":  "pet/6 dogs",
                            "points":  7
                        },
                        {
                            "text":  "sex/cheating",
                            "points":  3
                        },
                        {
                            "text":  "life of crime",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140025,
        "question":  "Grandma would look 20 years younger if she got rid of what?",
        "answers":  [
                        {
                            "text":  "her grays",
                            "points":  24
                        },
                        {
                            "text":  "old coot gramps",
                            "points":  21
                        },
                        {
                            "text":  "her wrinkles",
                            "points":  13
                        },
                        {
                            "text":  "clothes/muumuu",
                            "points":  12
                        },
                        {
                            "text":  "bad hairdo/wig",
                            "points":  11
                        },
                        {
                            "text":  "flab/badonk",
                            "points":  6
                        },
                        {
                            "text":  "her glasses",
                            "points":  4
                        },
                        {
                            "text":  "jacked/fake teeth",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140026,
        "question":  "At Thanksgiving, grandpa made his famous punch. But no one drank it because he stirred it with his what?",
        "answers":  [
                        {
                            "text":  "crusty fingers",
                            "points":  60
                        },
                        {
                            "text":  "cane",
                            "points":  14
                        },
                        {
                            "text":  "pipe/cigar",
                            "points":  6
                        },
                        {
                            "text":  "dirty utensils/knife",
                            "points":  5
                        },
                        {
                            "text":  "tongue",
                            "points":  3
                        },
                        {
                            "text":  "prosthetic leg/foot",
                            "points":  2
                        },
                        {
                            "text":  "weenie",
                            "points":  2
                        },
                        {
                            "text":  "dentures",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140027,
        "question":  "We asked 100 women... Fill in the blank: Dear Steve, I want to ______ you.",
        "answers":  [
                        {
                            "text":  "hug/kiss",
                            "points":  47
                        },
                        {
                            "text":  "talk to/meet",
                            "points":  14
                        },
                        {
                            "text":  "cook for/eat with",
                            "points":  8
                        },
                        {
                            "text":  "slap/kick",
                            "points":  8
                        },
                        {
                            "text":  "watch/laugh at",
                            "points":  6
                        },
                        {
                            "text":  "fire!/erase",
                            "points":  4
                        },
                        {
                            "text":  "thank",
                            "points":  4
                        },
                        {
                            "text":  "date/marry",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140028,
        "question":  "Give me a reason a guy might remarry his ex-wife.",
        "answers":  [
                        {
                            "text":  "loves/misses",
                            "points":  44
                        },
                        {
                            "text":  "$$$/tax break",
                            "points":  15
                        },
                        {
                            "text":  "for the kids",
                            "points":  14
                        },
                        {
                            "text":  "great sex",
                            "points":  10
                        },
                        {
                            "text":  "got hot/new boobs",
                            "points":  4
                        },
                        {
                            "text":  "he's an idiot!",
                            "points":  3
                        },
                        {
                            "text":  "made up/therapy",
                            "points":  2
                        },
                        {
                            "text":  "amnesia",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140029,
        "question":  "The waitress wasn't amused when a magician pulled a coin out of her what to tip her?",
        "answers":  [
                        {
                            "text":  "cleavage",
                            "points":  38
                        },
                        {
                            "text":  "ear",
                            "points":  24
                        },
                        {
                            "text":  "pocket/of apron",
                            "points":  12
                        },
                        {
                            "text":  "butt/ring of fire",
                            "points":  9
                        },
                        {
                            "text":  "own purse",
                            "points":  3
                        },
                        {
                            "text":  "nose",
                            "points":  3
                        },
                        {
                            "text":  "undies/pants",
                            "points":  3
                        },
                        {
                            "text":  "newly permed hair",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140030,
        "question":  "Uh-oh -- I think I might be falling in love with my who?",
        "answers":  [
                        {
                            "text":  "boss/coworker",
                            "points":  36
                        },
                        {
                            "text":  "best friend",
                            "points":  22
                        },
                        {
                            "text":  "awful spouse/mate",
                            "points":  13
                        },
                        {
                            "text":  "pet/dog",
                            "points":  7
                        },
                        {
                            "text":  "doc/shrink",
                            "points":  5
                        },
                        {
                            "text":  "nosy neighbor",
                            "points":  4
                        },
                        {
                            "text":  "ex",
                            "points":  4
                        },
                        {
                            "text":  "hot teacher",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140031,
        "question":  "If there was a scented candle that smelled like a man, what would it smell like?",
        "answers":  [
                        {
                            "text":  "b.o./used socks",
                            "points":  32
                        },
                        {
                            "text":  "musk/cologne",
                            "points":  31
                        },
                        {
                            "text":  "food/spices",
                            "points":  9
                        },
                        {
                            "text":  "outdoors/woods",
                            "points":  8
                        },
                        {
                            "text":  "essence of fart",
                            "points":  5
                        },
                        {
                            "text":  "beer",
                            "points":  3
                        },
                        {
                            "text":  "leather",
                            "points":  3
                        },
                        {
                            "text":  "tobacco/cigar",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140032,
        "question":  "Becky was very happy to hear that her ex-husband finally got what?",
        "answers":  [
                        {
                            "text":  "married",
                            "points":  31
                        },
                        {
                            "text":  "dumped",
                            "points":  14
                        },
                        {
                            "text":  "fired",
                            "points":  12
                        },
                        {
                            "text":  "job/alimony $",
                            "points":  12
                        },
                        {
                            "text":  "locked up",
                            "points":  10
                        },
                        {
                            "text":  "hurt/killed",
                            "points":  6
                        },
                        {
                            "text":  "the clap/sick",
                            "points":  5
                        },
                        {
                            "text":  "a vasectomy",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140033,
        "question":  "We asked 100 women... Name something you'd do if you hit on a guy and he called you a cougar.",
        "answers":  [
                        {
                            "text":  "laugh/grin",
                            "points":  30
                        },
                        {
                            "text":  "purr/roar",
                            "points":  18
                        },
                        {
                            "text":  "slap/deck him",
                            "points":  13
                        },
                        {
                            "text":  "walk away",
                            "points":  12
                        },
                        {
                            "text":  "own it/thanks",
                            "points":  11
                        },
                        {
                            "text":  "get his number",
                            "points":  4
                        },
                        {
                            "text":  "ask his age",
                            "points":  3
                        },
                        {
                            "text":  "cry",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140034,
        "question":  "We asked 100 married men... If you woke up and were single again, what's the first thing you'd do?",
        "answers":  [
                        {
                            "text":  "date/be man-slut",
                            "points":  29
                        },
                        {
                            "text":  "party/drink",
                            "points":  19
                        },
                        {
                            "text":  "sleep in",
                            "points":  15
                        },
                        {
                            "text":  "leave seat up",
                            "points":  10
                        },
                        {
                            "text":  "watch sports",
                            "points":  7
                        },
                        {
                            "text":  "go to work",
                            "points":  6
                        },
                        {
                            "text":  "cry/be sad",
                            "points":  5
                        },
                        {
                            "text":  "get back in shape",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140035,
        "question":  "Uh-oh -- a cake with a stripper inside that was supposed to go to a bachelor party went to what occasion?",
        "answers":  [
                        {
                            "text":  "b-day party/kid's",
                            "points":  25
                        },
                        {
                            "text":  "funeral",
                            "points":  19
                        },
                        {
                            "text":  "wedding",
                            "points":  13
                        },
                        {
                            "text":  "baby shower",
                            "points":  10
                        },
                        {
                            "text":  "bar/bat mitzvah",
                            "points":  10
                        },
                        {
                            "text":  "retirement party",
                            "points":  7
                        },
                        {
                            "text":  "baptism",
                            "points":  5
                        },
                        {
                            "text":  "anniversary",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140036,
        "question":  "We asked 100 women... After being dumped, a bottle of wine pairs well with what?",
        "answers":  [
                        {
                            "text":  "ice cream/food",
                            "points":  71
                        },
                        {
                            "text":  "another bottle",
                            "points":  5
                        },
                        {
                            "text":  "tv/movie",
                            "points":  4
                        },
                        {
                            "text":  "gal pals",
                            "points":  4
                        },
                        {
                            "text":  "a good cry",
                            "points":  3
                        },
                        {
                            "text":  "revenge",
                            "points":  2
                        },
                        {
                            "text":  "a joint",
                            "points":  2
                        },
                        {
                            "text":  "adele songs",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140037,
        "question":  "Name something that might be included in a do-it-yourself vasectomy kit.",
        "answers":  [
                        {
                            "text":  "cutting tool/axe",
                            "points":  62
                        },
                        {
                            "text":  "morphine/drugs",
                            "points":  9
                        },
                        {
                            "text":  "booze",
                            "points":  7
                        },
                        {
                            "text":  "bandage",
                            "points":  6
                        },
                        {
                            "text":  "mirror",
                            "points":  3
                        },
                        {
                            "text":  "instructions",
                            "points":  2
                        },
                        {
                            "text":  "ice pack",
                            "points":  2
                        },
                        {
                            "text":  "tight rubber band",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140038,
        "question":  "It might be romantic to propose to a woman while riding on a what?",
        "answers":  [
                        {
                            "text":  "horse/& buggy",
                            "points":  58
                        },
                        {
                            "text":  "boat",
                            "points":  15
                        },
                        {
                            "text":  "hot air balloon",
                            "points":  5
                        },
                        {
                            "text":  "ferris wheel/ride",
                            "points":  5
                        },
                        {
                            "text":  "motorcycle",
                            "points":  3
                        },
                        {
                            "text":  "train",
                            "points":  3
                        },
                        {
                            "text":  "dolphin",
                            "points":  2
                        },
                        {
                            "text":  "tandem bike",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140039,
        "question":  "Tell me the worst thing to discover your pet python swallowed.",
        "answers":  [
                        {
                            "text":  "another pet",
                            "points":  48
                        },
                        {
                            "text":  "my kids",
                            "points":  13
                        },
                        {
                            "text":  "wallet/money",
                            "points":  8
                        },
                        {
                            "text":  "ring/jewelry",
                            "points":  7
                        },
                        {
                            "text":  "phone",
                            "points":  6
                        },
                        {
                            "text":  "keys",
                            "points":  5
                        },
                        {
                            "text":  "bae/favorite lover",
                            "points":  4
                        },
                        {
                            "text":  "a rock! poor python!",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140040,
        "question":  "After a date with the Pillsbury Doughboy, a girl might say she did what to his buns?",
        "answers":  [
                        {
                            "text":  "squeezed",
                            "points":  45
                        },
                        {
                            "text":  "bake/toast/burned",
                            "points":  18
                        },
                        {
                            "text":  "rubbed",
                            "points":  9
                        },
                        {
                            "text":  "nibbled on/ate",
                            "points":  6
                        },
                        {
                            "text":  "buttered/glazed",
                            "points":  5
                        },
                        {
                            "text":  "slapped",
                            "points":  4
                        },
                        {
                            "text":  "poked",
                            "points":  3
                        },
                        {
                            "text":  "kissed",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140041,
        "question":  "We asked 100 women... You wish there were a dating app that only had men with what?",
        "answers":  [
                        {
                            "text":  "$/a job",
                            "points":  37
                        },
                        {
                            "text":  "character",
                            "points":  23
                        },
                        {
                            "text":  "sense/smarts",
                            "points":  16
                        },
                        {
                            "text":  "hair",
                            "points":  8
                        },
                        {
                            "text":  "smokin' bods",
                            "points":  3
                        },
                        {
                            "text":  "teeth/cute faces",
                            "points":  2
                        },
                        {
                            "text":  "humor/charm",
                            "points":  2
                        },
                        {
                            "text":  "bald heads",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140042,
        "question":  "We asked 100 women... Name something specific of yours you'd like to see your husband try to squeeze into.",
        "answers":  [
                        {
                            "text":  "bikini",
                            "points":  26
                        },
                        {
                            "text":  "girdle/spanx",
                            "points":  24
                        },
                        {
                            "text":  "aaa bra",
                            "points":  15
                        },
                        {
                            "text":  "6\" heels",
                            "points":  12
                        },
                        {
                            "text":  "skinny jeans/pants",
                            "points":  6
                        },
                        {
                            "text":  "panties/g-string",
                            "points":  5
                        },
                        {
                            "text":  "dress/skirt",
                            "points":  3
                        },
                        {
                            "text":  "hose",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140043,
        "question":  "Name a reason a father might be jealous of his son.",
        "answers":  [
                        {
                            "text":  "$$$/job",
                            "points":  21
                        },
                        {
                            "text":  "his hot honey",
                            "points":  16
                        },
                        {
                            "text":  "younger",
                            "points":  15
                        },
                        {
                            "text":  "tall/athletic",
                            "points":  12
                        },
                        {
                            "text":  "smart/tech whiz",
                            "points":  10
                        },
                        {
                            "text":  "studly face",
                            "points":  9
                        },
                        {
                            "text":  "mama dotes on him",
                            "points":  6
                        },
                        {
                            "text":  "he has hair",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140044,
        "question":  "We asked 100 men... What would a woman need to make her the girl of your dreams?",
        "answers":  [
                        {
                            "text":  "character/heart",
                            "points":  20
                        },
                        {
                            "text":  "barbie body",
                            "points":  19
                        },
                        {
                            "text":  "humor/personality",
                            "points":  13
                        },
                        {
                            "text":  "big bucks",
                            "points":  11
                        },
                        {
                            "text":  "love for me",
                            "points":  9
                        },
                        {
                            "text":  "purdy eyes/face",
                            "points":  9
                        },
                        {
                            "text":  "smarts",
                            "points":  9
                        },
                        {
                            "text":  "no clothes on",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140045,
        "question":  "Name someone you'd be surprised wanted to smoke pot with you.",
        "answers":  [
                        {
                            "text":  "parents",
                            "points":  52
                        },
                        {
                            "text":  "grandparents",
                            "points":  9
                        },
                        {
                            "text":  "clergy/nuns",
                            "points":  8
                        },
                        {
                            "text":  "boss",
                            "points":  7
                        },
                        {
                            "text":  "my prudish boo",
                            "points":  6
                        },
                        {
                            "text":  "politician",
                            "points":  4
                        },
                        {
                            "text":  "my kids",
                            "points":  3
                        },
                        {
                            "text":  "celeb/willie nelson",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140046,
        "question":  "Bad news -- you're dead. Worse news -- you look down from heaven and you see your spouse doing what?",
        "answers":  [
                        {
                            "text":  "dating/scoring",
                            "points":  36
                        },
                        {
                            "text":  "party/laugh'g",
                            "points":  28
                        },
                        {
                            "text":  "spend'g $",
                            "points":  10
                        },
                        {
                            "text":  "re-marrying",
                            "points":  5
                        },
                        {
                            "text":  "crying",
                            "points":  5
                        },
                        {
                            "text":  "dying/hellbound",
                            "points":  4
                        },
                        {
                            "text":  "sell'g my stuff",
                            "points":  2
                        },
                        {
                            "text":  "destroy'g evidence!",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140047,
        "question":  "Instead of the Ghostbusters, if you saw a ghost for real, who you gonna call?",
        "answers":  [
                        {
                            "text":  "911/cop",
                            "points":  28
                        },
                        {
                            "text":  "clergy",
                            "points":  17
                        },
                        {
                            "text":  "my folks",
                            "points":  16
                        },
                        {
                            "text":  "my boo",
                            "points":  10
                        },
                        {
                            "text":  "god",
                            "points":  8
                        },
                        {
                            "text":  "ghost hunter/medium",
                            "points":  6
                        },
                        {
                            "text":  "shrink/bellevue",
                            "points":  4
                        },
                        {
                            "text":  "the news",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140048,
        "question":  "Name something Steve Harvey has had for a long time.",
        "answers":  [
                        {
                            "text":  "lady tickler/stache",
                            "points":  28
                        },
                        {
                            "text":  "sexy bald bean",
                            "points":  15
                        },
                        {
                            "text":  "job/tv show",
                            "points":  14
                        },
                        {
                            "text":  "humor/'tude",
                            "points":  11
                        },
                        {
                            "text":  "fly threads",
                            "points":  8
                        },
                        {
                            "text":  "money",
                            "points":  7
                        },
                        {
                            "text":  "dazzling smile",
                            "points":  7
                        },
                        {
                            "text":  "his 3rd wife",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140049,
        "question":  "Name a part of her body a woman wouldn't want to be bigger than her boyfriend's.",
        "answers":  [
                        {
                            "text":  "gut/waist",
                            "points":  26
                        },
                        {
                            "text":  "feet",
                            "points":  17
                        },
                        {
                            "text":  "bubble butt",
                            "points":  14
                        },
                        {
                            "text":  "arms/biceps",
                            "points":  12
                        },
                        {
                            "text":  "hands",
                            "points":  10
                        },
                        {
                            "text":  "chest/boobs",
                            "points":  5
                        },
                        {
                            "text":  "nose",
                            "points":  5
                        },
                        {
                            "text":  "legs/thighs",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140050,
        "question":  "Name a party game played at a wild office party that could later turn into a lawsuit.",
        "answers":  [
                        {
                            "text":  "spin the bottle",
                            "points":  25
                        },
                        {
                            "text":  "twister",
                            "points":  22
                        },
                        {
                            "text":  "strip poker",
                            "points":  18
                        },
                        {
                            "text":  "truth or dare",
                            "points":  11
                        },
                        {
                            "text":  "beer pong",
                            "points":  7
                        },
                        {
                            "text":  "cards against humanity",
                            "points":  3
                        },
                        {
                            "text":  "7 min. in heaven",
                            "points":  3
                        },
                        {
                            "text":  "hide & seek",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140051,
        "question":  "Name something a wife might throw into the bathtub while her cheating husband is in it.",
        "answers":  [
                        {
                            "text":  "elect. appliance",
                            "points":  69
                        },
                        {
                            "text":  "his phone",
                            "points":  5
                        },
                        {
                            "text":  "ice water",
                            "points":  5
                        },
                        {
                            "text":  "acid",
                            "points":  3
                        },
                        {
                            "text":  "critter/piranha",
                            "points":  3
                        },
                        {
                            "text":  "dirt",
                            "points":  2
                        },
                        {
                            "text":  "boiling liquid",
                            "points":  2
                        },
                        {
                            "text":  "blades",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140052,
        "question":  "Name something a wife might do to her cheating husband's toothbrush.",
        "answers":  [
                        {
                            "text":  "dip in/scrub toilet",
                            "points":  60
                        },
                        {
                            "text":  "pee/poop on it",
                            "points":  9
                        },
                        {
                            "text":  "poison it",
                            "points":  7
                        },
                        {
                            "text":  "toss/flush it",
                            "points":  5
                        },
                        {
                            "text":  "soap on it",
                            "points":  3
                        },
                        {
                            "text":  "food/vinegar on it",
                            "points":  3
                        },
                        {
                            "text":  "hide it",
                            "points":  2
                        },
                        {
                            "text":  "scrub butt w/ it",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140053,
        "question":  "Name a part of the body besides the lips that you might touch during a kiss.",
        "answers":  [
                        {
                            "text":  "face/beard",
                            "points":  42
                        },
                        {
                            "text":  "neck",
                            "points":  14
                        },
                        {
                            "text":  "ears",
                            "points":  8
                        },
                        {
                            "text":  "booty/man-can",
                            "points":  7
                        },
                        {
                            "text":  "arms",
                            "points":  6
                        },
                        {
                            "text":  "back",
                            "points":  5
                        },
                        {
                            "text":  "pointer sisters/pecs",
                            "points":  5
                        },
                        {
                            "text":  "slithery tongues",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140054,
        "question":  "In hell, you might have to be roommates for eternity with your who?",
        "answers":  [
                        {
                            "text":  "my ex",
                            "points":  36
                        },
                        {
                            "text":  "\"worst enemy\"",
                            "points":  11
                        },
                        {
                            "text":  "in-law",
                            "points":  9
                        },
                        {
                            "text":  "spouse/mate",
                            "points":  8
                        },
                        {
                            "text":  "boss/coworker",
                            "points":  8
                        },
                        {
                            "text":  "sibling",
                            "points":  8
                        },
                        {
                            "text":  "annoy'g friend",
                            "points":  7
                        },
                        {
                            "text":  "politician",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140055,
        "question":  "A man knows he's had too much to drink at a family reunion if who starts looking sexy?",
        "answers":  [
                        {
                            "text":  "granny/great grams",
                            "points":  34
                        },
                        {
                            "text":  "mother-in-law",
                            "points":  18
                        },
                        {
                            "text":  "cousin/earl",
                            "points":  13
                        },
                        {
                            "text":  "aunt/agnes",
                            "points":  10
                        },
                        {
                            "text":  "mom",
                            "points":  6
                        },
                        {
                            "text":  "sis-in-law",
                            "points":  4
                        },
                        {
                            "text":  "sister",
                            "points":  3
                        },
                        {
                            "text":  "the dog",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140056,
        "question":  "Name something a man would be excited to see his wife bring home.",
        "answers":  [
                        {
                            "text":  "food/pizza",
                            "points":  33
                        },
                        {
                            "text":  "lingerie/thong",
                            "points":  14
                        },
                        {
                            "text":  "money",
                            "points":  14
                        },
                        {
                            "text":  "booze",
                            "points":  11
                        },
                        {
                            "text":  "hot guy/gal",
                            "points":  8
                        },
                        {
                            "text":  "new car",
                            "points":  5
                        },
                        {
                            "text":  "109-inch tv",
                            "points":  4
                        },
                        {
                            "text":  "handcuffs/sex toy",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140057,
        "question":  "We asked 100 married men... Tell me your secret weapon to get your wife out of a bad mood.",
        "answers":  [
                        {
                            "text":  "dinner/sweets",
                            "points":  32
                        },
                        {
                            "text":  "kiss/hug",
                            "points":  19
                        },
                        {
                            "text":  "jewelry",
                            "points":  13
                        },
                        {
                            "text":  "compliment",
                            "points":  10
                        },
                        {
                            "text":  "flowers",
                            "points":  5
                        },
                        {
                            "text":  "tickle/make laugh",
                            "points":  5
                        },
                        {
                            "text":  "my dazzling smile",
                            "points":  4
                        },
                        {
                            "text":  "rubdown",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140058,
        "question":  "Instead of a bottle, at the nursing home party, they play spin the what?",
        "answers":  [
                        {
                            "text":  "cane/walker",
                            "points":  32
                        },
                        {
                            "text":  "meds/bengay",
                            "points":  18
                        },
                        {
                            "text":  "dentures/cream",
                            "points":  13
                        },
                        {
                            "text":  "food/ensure",
                            "points":  8
                        },
                        {
                            "text":  "wheelchair",
                            "points":  7
                        },
                        {
                            "text":  "bedpan",
                            "points":  6
                        },
                        {
                            "text":  "wheel",
                            "points":  5
                        },
                        {
                            "text":  "loaded diaper",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140059,
        "question":  "Name something specific a grown man plays with that he also played with when he was a boy.",
        "answers":  [
                        {
                            "text":  "video games",
                            "points":  28
                        },
                        {
                            "text":  "cars",
                            "points":  19
                        },
                        {
                            "text":  "football/ball",
                            "points":  19
                        },
                        {
                            "text":  "himself",
                            "points":  14
                        },
                        {
                            "text":  "legos",
                            "points":  4
                        },
                        {
                            "text":  "computer",
                            "points":  3
                        },
                        {
                            "text":  "his food",
                            "points":  2
                        },
                        {
                            "text":  "guns",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140060,
        "question":  "Give me a seasoning that a chef might name his daughter.",
        "answers":  [
                        {
                            "text":  "rosemary",
                            "points":  26
                        },
                        {
                            "text":  "pepper",
                            "points":  22
                        },
                        {
                            "text":  "cinnamon",
                            "points":  14
                        },
                        {
                            "text":  "sage",
                            "points":  11
                        },
                        {
                            "text":  "saffron",
                            "points":  6
                        },
                        {
                            "text":  "ginger",
                            "points":  6
                        },
                        {
                            "text":  "paprika",
                            "points":  4
                        },
                        {
                            "text":  "vanilla",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140061,
        "question":  "A man would hate to discover on his honeymoon that his new bride does what all night?",
        "answers":  [
                        {
                            "text":  "sleeps/snores",
                            "points":  60
                        },
                        {
                            "text":  "rips egg farts",
                            "points":  11
                        },
                        {
                            "text":  "talks",
                            "points":  7
                        },
                        {
                            "text":  "watches tv",
                            "points":  3
                        },
                        {
                            "text":  "sleepwalks",
                            "points":  3
                        },
                        {
                            "text":  "sings",
                            "points":  2
                        },
                        {
                            "text":  "poops",
                            "points":  2
                        },
                        {
                            "text":  "moans/screams",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140062,
        "question":  "We asked 100 men... Name a term of endearment you've called women you don't know.",
        "answers":  [
                        {
                            "text":  "sweetie",
                            "points":  41
                        },
                        {
                            "text":  "honey",
                            "points":  11
                        },
                        {
                            "text":  "dear",
                            "points":  11
                        },
                        {
                            "text":  "beautiful/cutie",
                            "points":  9
                        },
                        {
                            "text":  "ma'am/madame",
                            "points":  6
                        },
                        {
                            "text":  "doll",
                            "points":  4
                        },
                        {
                            "text":  "sexy/hottie",
                            "points":  4
                        },
                        {
                            "text":  "babe",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140063,
        "question":  "Name something that gets changed.",
        "answers":  [
                        {
                            "text":  "diapers",
                            "points":  31
                        },
                        {
                            "text":  "clothes/undies",
                            "points":  15
                        },
                        {
                            "text":  "oil",
                            "points":  14
                        },
                        {
                            "text":  "light bulb",
                            "points":  11
                        },
                        {
                            "text":  "flat tire",
                            "points":  7
                        },
                        {
                            "text":  "clock/fall back",
                            "points":  5
                        },
                        {
                            "text":  "your mind",
                            "points":  4
                        },
                        {
                            "text":  "bed sheets...we hope",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140064,
        "question":  "Calling your wife \"bunny\" is a term of endearment. Calling her what animal is not?",
        "answers":  [
                        {
                            "text":  "piggy",
                            "points":  30
                        },
                        {
                            "text":  "cow/heifer",
                            "points":  26
                        },
                        {
                            "text":  "dog",
                            "points":  14
                        },
                        {
                            "text":  "donkey/mule",
                            "points":  5
                        },
                        {
                            "text":  "snake",
                            "points":  4
                        },
                        {
                            "text":  "horse",
                            "points":  4
                        },
                        {
                            "text":  "hippo",
                            "points":  4
                        },
                        {
                            "text":  "whale",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140065,
        "question":  "Name something people do for their dogs that would make an alien wonder, \"Who's in charge here?\"",
        "answers":  [
                        {
                            "text":  "scoop poop",
                            "points":  28
                        },
                        {
                            "text":  "cook/feed",
                            "points":  16
                        },
                        {
                            "text":  "dress them",
                            "points":  13
                        },
                        {
                            "text":  "groom/brush",
                            "points":  11
                        },
                        {
                            "text":  "let sleep on bed",
                            "points":  8
                        },
                        {
                            "text":  "walk them",
                            "points":  5
                        },
                        {
                            "text":  "talk/share problems",
                            "points":  5
                        },
                        {
                            "text":  "carry/in purse",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140066,
        "question":  "If \"Family Feud\" got freaky and you suddenly switched bodies with Steve Harvey, tell me what would be the best thing about it.",
        "answers":  [
                        {
                            "text":  "i'd be rich!",
                            "points":  24
                        },
                        {
                            "text":  "host feud/fame",
                            "points":  17
                        },
                        {
                            "text":  "glamor stache",
                            "points":  16
                        },
                        {
                            "text":  "funny/charm",
                            "points":  10
                        },
                        {
                            "text":  "i'd be tall",
                            "points":  8
                        },
                        {
                            "text":  "juicy lips/smile",
                            "points":  6
                        },
                        {
                            "text":  "i'd be black",
                            "points":  5
                        },
                        {
                            "text":  "i'd be bald",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140067,
        "question":  "Name something that would be rude to do at a funeral.",
        "answers":  [
                        {
                            "text":  "laugh",
                            "points":  41
                        },
                        {
                            "text":  "fart/in casket",
                            "points":  13
                        },
                        {
                            "text":  "blab/speak ill",
                            "points":  12
                        },
                        {
                            "text":  "get drunk",
                            "points":  6
                        },
                        {
                            "text":  "clap/cheer",
                            "points":  5
                        },
                        {
                            "text":  "karaoke",
                            "points":  4
                        },
                        {
                            "text":  "burp",
                            "points":  4
                        },
                        {
                            "text":  "yell/argue",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140068,
        "question":  "You might dare to drive in the nude, but you'd never dare ride what in the nude?",
        "answers":  [
                        {
                            "text":  "bicycle",
                            "points":  29
                        },
                        {
                            "text":  "horse",
                            "points":  25
                        },
                        {
                            "text":  "motorcycle/moped",
                            "points":  18
                        },
                        {
                            "text":  "roller coaster",
                            "points":  6
                        },
                        {
                            "text":  "bus",
                            "points":  5
                        },
                        {
                            "text":  "bull/mechanical",
                            "points":  2
                        },
                        {
                            "text":  "person/my hubby",
                            "points":  2
                        },
                        {
                            "text":  "porcupine",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140069,
        "question":  "Name something you hope your doctor doesn't reach for during an examination.",
        "answers":  [
                        {
                            "text":  "needle",
                            "points":  25
                        },
                        {
                            "text":  "my body",
                            "points":  25
                        },
                        {
                            "text":  "scalpel",
                            "points":  14
                        },
                        {
                            "text":  "jelly/lube",
                            "points":  7
                        },
                        {
                            "text":  "rubber gloves",
                            "points":  7
                        },
                        {
                            "text":  "phone/to post pics",
                            "points":  5
                        },
                        {
                            "text":  "speculum",
                            "points":  4
                        },
                        {
                            "text":  "scissors",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140070,
        "question":  "When you were a kid, your parents busted you for doing what?",
        "answers":  [
                        {
                            "text":  "lying",
                            "points":  25
                        },
                        {
                            "text":  "smoking",
                            "points":  16
                        },
                        {
                            "text":  "breaking curfew",
                            "points":  13
                        },
                        {
                            "text":  "sneak'g food/candy",
                            "points":  11
                        },
                        {
                            "text":  "drinking",
                            "points":  9
                        },
                        {
                            "text":  "theft/armed robbery",
                            "points":  7
                        },
                        {
                            "text":  "skippin' school",
                            "points":  5
                        },
                        {
                            "text":  "weed",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140071,
        "question":  "Name something the relatives have already claimed with Post-its on when Great Uncle Horace dies.",
        "answers":  [
                        {
                            "text":  "cash/rare coins",
                            "points":  19
                        },
                        {
                            "text":  "porsche",
                            "points":  16
                        },
                        {
                            "text":  "his house",
                            "points":  15
                        },
                        {
                            "text":  "pics/art",
                            "points":  12
                        },
                        {
                            "text":  "jewelry",
                            "points":  10
                        },
                        {
                            "text":  "dishes/china",
                            "points":  8
                        },
                        {
                            "text":  "furniture/lamp",
                            "points":  5
                        },
                        {
                            "text":  "his guns",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140072,
        "question":  "Name a popular beer that a male stripper might call himself.",
        "answers":  [
                        {
                            "text":  "bud light/weiser",
                            "points":  51
                        },
                        {
                            "text":  "dos equis",
                            "points":  15
                        },
                        {
                            "text":  "busch",
                            "points":  5
                        },
                        {
                            "text":  "blue moon",
                            "points":  4
                        },
                        {
                            "text":  "miller",
                            "points":  4
                        },
                        {
                            "text":  "samuel adams",
                            "points":  3
                        },
                        {
                            "text":  "heineken/heinie",
                            "points":  3
                        },
                        {
                            "text":  "coors",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140073,
        "question":  "Name something in the bedroom that a wife might use to kill her husband.",
        "answers":  [
                        {
                            "text":  "lamp",
                            "points":  41
                        },
                        {
                            "text":  "pillow",
                            "points":  21
                        },
                        {
                            "text":  "clothes/stiletto",
                            "points":  7
                        },
                        {
                            "text":  "gun",
                            "points":  5
                        },
                        {
                            "text":  "pills",
                            "points":  4
                        },
                        {
                            "text":  "alarm clock",
                            "points":  4
                        },
                        {
                            "text":  "cord",
                            "points":  3
                        },
                        {
                            "text":  "hanger",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140074,
        "question":  "Name a breed of dog that could be starring in \"The Real Housedogs of Beverly Hills.\"",
        "answers":  [
                        {
                            "text":  "chihuahua",
                            "points":  36
                        },
                        {
                            "text":  "poodle",
                            "points":  31
                        },
                        {
                            "text":  "pomeranian",
                            "points":  7
                        },
                        {
                            "text":  "golden retriever",
                            "points":  3
                        },
                        {
                            "text":  "shih tzu",
                            "points":  3
                        },
                        {
                            "text":  "beagle",
                            "points":  3
                        },
                        {
                            "text":  "pit bull",
                            "points":  3
                        },
                        {
                            "text":  "corgi",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140075,
        "question":  "Name something you might be able to buy at Count Dracula's yard sale.",
        "answers":  [
                        {
                            "text":  "blood/bodies",
                            "points":  29
                        },
                        {
                            "text":  "cape/outfit",
                            "points":  24
                        },
                        {
                            "text":  "coffin",
                            "points":  20
                        },
                        {
                            "text":  "fangs",
                            "points":  6
                        },
                        {
                            "text":  "stakes",
                            "points":  3
                        },
                        {
                            "text":  "cereal/count chocula",
                            "points":  2
                        },
                        {
                            "text":  "sunglasses",
                            "points":  2
                        },
                        {
                            "text":  "sunscreen",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140076,
        "question":  "Screaming while on a carnival ride is normal. Screaming while riding what is not normal?",
        "answers":  [
                        {
                            "text":  "a horse",
                            "points":  26
                        },
                        {
                            "text":  "a bicycle",
                            "points":  21
                        },
                        {
                            "text":  "in a car/taxi",
                            "points":  16
                        },
                        {
                            "text":  "a bus",
                            "points":  7
                        },
                        {
                            "text":  "your lover",
                            "points":  5
                        },
                        {
                            "text":  "a motorcycle",
                            "points":  5
                        },
                        {
                            "text":  "a train/subway",
                            "points":  4
                        },
                        {
                            "text":  "elevator/escalator",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140077,
        "question":  "Name a Disney character you're glad you don't sound like when you talk.",
        "answers":  [
                        {
                            "text":  "donald duck",
                            "points":  43
                        },
                        {
                            "text":  "goofy",
                            "points":  15
                        },
                        {
                            "text":  "mickey mouse",
                            "points":  13
                        },
                        {
                            "text":  "minnie mouse",
                            "points":  8
                        },
                        {
                            "text":  "tinker bell",
                            "points":  2
                        },
                        {
                            "text":  "dopey",
                            "points":  2
                        },
                        {
                            "text":  "snow white",
                            "points":  2
                        },
                        {
                            "text":  "the beast",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140078,
        "question":  "All the men in the hospital love Nurse Nancy because of the way she did what?",
        "answers":  [
                        {
                            "text":  "sponge baths",
                            "points":  40
                        },
                        {
                            "text":  "sashayed",
                            "points":  13
                        },
                        {
                            "text":  "cared for them",
                            "points":  8
                        },
                        {
                            "text":  "bent over",
                            "points":  7
                        },
                        {
                            "text":  "fixed bed",
                            "points":  5
                        },
                        {
                            "text":  "took temp/vitals",
                            "points":  5
                        },
                        {
                            "text":  "stuck 'em/gave meds",
                            "points":  5
                        },
                        {
                            "text":  "smiled",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140079,
        "question":  "Name something a car has that Santa Claus might wish he had in his sleigh.",
        "answers":  [
                        {
                            "text":  "heater/seat warmer",
                            "points":  34
                        },
                        {
                            "text":  "stereo",
                            "points":  17
                        },
                        {
                            "text":  "gps",
                            "points":  8
                        },
                        {
                            "text":  "horn",
                            "points":  7
                        },
                        {
                            "text":  "motor/accelerator",
                            "points":  7
                        },
                        {
                            "text":  "a roof",
                            "points":  6
                        },
                        {
                            "text":  "brakes",
                            "points":  4
                        },
                        {
                            "text":  "headlights",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140080,
        "question":  "If a burglar breaks into your house, what wouldn't you mind him taking?",
        "answers":  [
                        {
                            "text":  "the trash out",
                            "points":  30
                        },
                        {
                            "text":  "shabby furniture",
                            "points":  17
                        },
                        {
                            "text":  "awful spouse",
                            "points":  14
                        },
                        {
                            "text":  "clothes/crocs",
                            "points":  8
                        },
                        {
                            "text":  "dirty dishes",
                            "points":  6
                        },
                        {
                            "text":  "tv",
                            "points":  5
                        },
                        {
                            "text":  "pissy dog/cat",
                            "points":  4
                        },
                        {
                            "text":  "90's computer",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140081,
        "question":  "We asked 100 men... Name something you did because you knew you could get away with it.",
        "answers":  [
                        {
                            "text":  "cheat/sex",
                            "points":  19
                        },
                        {
                            "text":  "spend $$$",
                            "points":  14
                        },
                        {
                            "text":  "speed/run light",
                            "points":  12
                        },
                        {
                            "text":  "steal/a car",
                            "points":  11
                        },
                        {
                            "text":  "ogle hotties",
                            "points":  9
                        },
                        {
                            "text":  "lie hourly",
                            "points":  9
                        },
                        {
                            "text":  "sneak food",
                            "points":  7
                        },
                        {
                            "text":  "take off work",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  140082,
        "question":  "Name a part of a person that a cannibal hopes plumps up like a hot dog when they cook it.",
        "answers":  [
                        {
                            "text":  "leg o' liam",
                            "points":  18
                        },
                        {
                            "text":  "dink du jour",
                            "points":  17
                        },
                        {
                            "text":  "fingers alfredo",
                            "points":  15
                        },
                        {
                            "text":  "bbq butt cheek",
                            "points":  12
                        },
                        {
                            "text":  "arms au gratin",
                            "points":  8
                        },
                        {
                            "text":  "teriyaki ta-tas",
                            "points":  7
                        },
                        {
                            "text":  "porky belly",
                            "points":  6
                        },
                        {
                            "text":  "lips au jus",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140083,
        "question":  "Because it's hell, name something that happens whenever you catch a flight on a plane.",
        "answers":  [
                        {
                            "text":  "delayed",
                            "points":  29
                        },
                        {
                            "text":  "burns/crashes",
                            "points":  26
                        },
                        {
                            "text":  "bad seat/by baby",
                            "points":  14
                        },
                        {
                            "text":  "lost bags",
                            "points":  5
                        },
                        {
                            "text":  "cavity search",
                            "points":  3
                        },
                        {
                            "text":  "heat's blasting",
                            "points":  3
                        },
                        {
                            "text":  "crowded/lines",
                            "points":  3
                        },
                        {
                            "text":  "bumpy ride",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140084,
        "question":  "Name something a father advises his daughter to do on a first date to make sure she gets a second one.",
        "answers":  [
                        {
                            "text":  "no sex",
                            "points":  28
                        },
                        {
                            "text":  "nice/ladylike",
                            "points":  28
                        },
                        {
                            "text":  "smile/laugh",
                            "points":  8
                        },
                        {
                            "text":  "kiss/on cheek",
                            "points":  7
                        },
                        {
                            "text":  "be home early",
                            "points":  5
                        },
                        {
                            "text":  "be yourself",
                            "points":  4
                        },
                        {
                            "text":  "don't overshare",
                            "points":  3
                        },
                        {
                            "text":  "listen",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140085,
        "question":  "If a doctor is also an amateur magician, what might he pull out of you during an exam?",
        "answers":  [
                        {
                            "text":  "a rabbit",
                            "points":  28
                        },
                        {
                            "text":  "a coin",
                            "points":  22
                        },
                        {
                            "text":  "a flower",
                            "points":  13
                        },
                        {
                            "text":  "6-ft. scarf",
                            "points":  7
                        },
                        {
                            "text":  "med instrument",
                            "points":  6
                        },
                        {
                            "text":  "body part/heart",
                            "points":  4
                        },
                        {
                            "text":  "gallstones",
                            "points":  3
                        },
                        {
                            "text":  "food/your lunch",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140086,
        "question":  "In order to get more female worshipers, what might Preacher Bob start wearing at church?",
        "answers":  [
                        {
                            "text":  "grape-hugger pants",
                            "points":  24
                        },
                        {
                            "text":  "speedo",
                            "points":  13
                        },
                        {
                            "text":  "suit & tie",
                            "points":  12
                        },
                        {
                            "text":  "pimpin' shirt",
                            "points":  10
                        },
                        {
                            "text":  "toupee",
                            "points":  9
                        },
                        {
                            "text":  "cologne",
                            "points":  6
                        },
                        {
                            "text":  "booty shorts",
                            "points":  6
                        },
                        {
                            "text":  "thong/silk undies",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  140087,
        "question":  "Name a place you'd be surprised to see people sloppy kissing.",
        "answers":  [
                        {
                            "text":  "church",
                            "points":  50
                        },
                        {
                            "text":  "restaurant",
                            "points":  10
                        },
                        {
                            "text":  "store/mall",
                            "points":  9
                        },
                        {
                            "text":  "school",
                            "points":  4
                        },
                        {
                            "text":  "old folks' home",
                            "points":  3
                        },
                        {
                            "text":  "doc/e.r.",
                            "points":  3
                        },
                        {
                            "text":  "movie theater",
                            "points":  3
                        },
                        {
                            "text":  "work",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140088,
        "question":  "Guys became a lot more interested in Susan after she got rid of what?",
        "answers":  [
                        {
                            "text":  "psycho mate/ex",
                            "points":  42
                        },
                        {
                            "text":  "100 lbs",
                            "points":  16
                        },
                        {
                            "text":  "her clothes",
                            "points":  6
                        },
                        {
                            "text":  "std/warts",
                            "points":  6
                        },
                        {
                            "text":  "pet/18 cats",
                            "points":  5
                        },
                        {
                            "text":  "her zits",
                            "points":  4
                        },
                        {
                            "text":  "bad 'tude",
                            "points":  3
                        },
                        {
                            "text":  "hipster glasses",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140089,
        "question":  "Edward said, \"My blind date became awkward when she turned out to be my\" who?",
        "answers":  [
                        {
                            "text":  "ugly cuz",
                            "points":  30
                        },
                        {
                            "text":  "lecherous sis",
                            "points":  22
                        },
                        {
                            "text":  "crazy ex",
                            "points":  13
                        },
                        {
                            "text":  "wild mom",
                            "points":  6
                        },
                        {
                            "text":  "sneaky wife",
                            "points":  4
                        },
                        {
                            "text":  "nerdy teacher",
                            "points":  4
                        },
                        {
                            "text":  "naughty granny",
                            "points":  3
                        },
                        {
                            "text":  "evil boss",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140090,
        "question":  "We asked 100 women... Name a furry animal that reminds you of your man's hair.",
        "answers":  [
                        {
                            "text":  "dog/poodle",
                            "points":  28
                        },
                        {
                            "text":  "monkey/ape",
                            "points":  16
                        },
                        {
                            "text":  "bear",
                            "points":  12
                        },
                        {
                            "text":  "cat",
                            "points":  10
                        },
                        {
                            "text":  "squirrel",
                            "points":  6
                        },
                        {
                            "text":  "horse",
                            "points":  5
                        },
                        {
                            "text":  "lamb",
                            "points":  4
                        },
                        {
                            "text":  "fox/silver fox",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140091,
        "question":  "Name an animal it might be fun to be turned into for a day.",
        "answers":  [
                        {
                            "text":  "bird/eagle",
                            "points":  27
                        },
                        {
                            "text":  "cat",
                            "points":  17
                        },
                        {
                            "text":  "dog/a frenchie",
                            "points":  16
                        },
                        {
                            "text":  "tiger",
                            "points":  7
                        },
                        {
                            "text":  "dolphin",
                            "points":  6
                        },
                        {
                            "text":  "monkey/ape",
                            "points":  5
                        },
                        {
                            "text":  "lion",
                            "points":  4
                        },
                        {
                            "text":  "bear/panda",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140092,
        "question":  "Name something Steve Harvey's wife might give him when he gets home after a long day.",
        "answers":  [
                        {
                            "text":  "tonsil hockey",
                            "points":  26
                        },
                        {
                            "text":  "drink/boone's farm",
                            "points":  16
                        },
                        {
                            "text":  "a rubdown",
                            "points":  15
                        },
                        {
                            "text":  "a hug",
                            "points":  7
                        },
                        {
                            "text":  "toe-curling sex",
                            "points":  6
                        },
                        {
                            "text":  "dinner",
                            "points":  5
                        },
                        {
                            "text":  "grief/hell",
                            "points":  5
                        },
                        {
                            "text":  "to-do list",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140093,
        "question":  "Name a place people hate going so much that in hell, they'd have to spend eternity there.",
        "answers":  [
                        {
                            "text":  "dmv",
                            "points":  29
                        },
                        {
                            "text":  "dentist/proctologist",
                            "points":  27
                        },
                        {
                            "text":  "church",
                            "points":  7
                        },
                        {
                            "text":  "work",
                            "points":  6
                        },
                        {
                            "text":  "in-laws'",
                            "points":  5
                        },
                        {
                            "text":  "school",
                            "points":  3
                        },
                        {
                            "text":  "crowded bar",
                            "points":  3
                        },
                        {
                            "text":  "store/mall",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140094,
        "question":  "Name something you'd hate people to do when you walk into a room.",
        "answers":  [
                        {
                            "text":  "stare at me",
                            "points":  21
                        },
                        {
                            "text":  "laugh",
                            "points":  19
                        },
                        {
                            "text":  "stop talking",
                            "points":  14
                        },
                        {
                            "text":  "leave/run",
                            "points":  7
                        },
                        {
                            "text":  "ignore me",
                            "points":  6
                        },
                        {
                            "text":  "turn/look away",
                            "points":  6
                        },
                        {
                            "text":  "fart in unison",
                            "points":  5
                        },
                        {
                            "text":  "talk/whisper",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140095,
        "question":  "Name an occupation that a wife might ask her husband to dress up as in the bedroom.",
        "answers":  [
                        {
                            "text":  "fireman",
                            "points":  25
                        },
                        {
                            "text":  "cop",
                            "points":  24
                        },
                        {
                            "text":  "doc/gyno",
                            "points":  12
                        },
                        {
                            "text":  "stripper",
                            "points":  6
                        },
                        {
                            "text":  "repairman",
                            "points":  6
                        },
                        {
                            "text":  "cowboy",
                            "points":  3
                        },
                        {
                            "text":  "military",
                            "points":  3
                        },
                        {
                            "text":  "french maid",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140096,
        "question":  "Fill in the blank: Susan didn't like her tiny heinie. So she stuffed a couple of ______s in the back of her pants to make it look bigger.",
        "answers":  [
                        {
                            "text":  "pillows",
                            "points":  25
                        },
                        {
                            "text":  "melons/fruit",
                            "points":  13
                        },
                        {
                            "text":  "pads/butt pads",
                            "points":  10
                        },
                        {
                            "text":  "socks",
                            "points":  10
                        },
                        {
                            "text":  "tissues/t.p. rolls",
                            "points":  10
                        },
                        {
                            "text":  "towels",
                            "points":  6
                        },
                        {
                            "text":  "balloons",
                            "points":  4
                        },
                        {
                            "text":  "hams",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140097,
        "question":  "If you didn't have a barf bag on an airplane, name something you might puke into.",
        "answers":  [
                        {
                            "text":  "hat/clothes",
                            "points":  20
                        },
                        {
                            "text":  "purse/my wife's",
                            "points":  19
                        },
                        {
                            "text":  "seat pocket",
                            "points":  13
                        },
                        {
                            "text":  "cup",
                            "points":  11
                        },
                        {
                            "text":  "someone's lap",
                            "points":  6
                        },
                        {
                            "text":  "the seat",
                            "points":  5
                        },
                        {
                            "text":  "magazine",
                            "points":  4
                        },
                        {
                            "text":  "toilet",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140098,
        "question":  "Name a word starting with the letter S that many women call Steve Harvey.",
        "answers":  [
                        {
                            "text":  "sexy",
                            "points":  37
                        },
                        {
                            "text":  "successful",
                            "points":  9
                        },
                        {
                            "text":  "smart",
                            "points":  7
                        },
                        {
                            "text":  "stud/muffin",
                            "points":  7
                        },
                        {
                            "text":  "suave",
                            "points":  7
                        },
                        {
                            "text":  "silly",
                            "points":  7
                        },
                        {
                            "text":  "smooth",
                            "points":  4
                        },
                        {
                            "text":  "sugar daddy",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140099,
        "question":  "Name something specific grandma stopped wearing years ago.",
        "answers":  [
                        {
                            "text":  "bra",
                            "points":  31
                        },
                        {
                            "text":  "makeup",
                            "points":  12
                        },
                        {
                            "text":  "girdle/corset",
                            "points":  10
                        },
                        {
                            "text":  "her teeth",
                            "points":  8
                        },
                        {
                            "text":  "8-inch heels/boots",
                            "points":  8
                        },
                        {
                            "text":  "hose/stockings",
                            "points":  5
                        },
                        {
                            "text":  "skirt",
                            "points":  4
                        },
                        {
                            "text":  "anything at all!",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140100,
        "question":  "Fill in the blank: Granny's panties are so big, she can carry around her ______ in them.",
        "answers":  [
                        {
                            "text":  "purse",
                            "points":  31
                        },
                        {
                            "text":  "kitty/pets",
                            "points":  12
                        },
                        {
                            "text":  "groceries/food",
                            "points":  11
                        },
                        {
                            "text":  "wallet/$$$",
                            "points":  8
                        },
                        {
                            "text":  "grandkid/fam",
                            "points":  6
                        },
                        {
                            "text":  "musket",
                            "points":  4
                        },
                        {
                            "text":  "laundry/clothes",
                            "points":  4
                        },
                        {
                            "text":  "ginormous butt",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140101,
        "question":  "Fill in the blank: A woman might scare off men if her tattoo says \"I ______ a lot.\"",
        "answers":  [
                        {
                            "text":  "toot",
                            "points":  21
                        },
                        {
                            "text":  "shop/spend",
                            "points":  16
                        },
                        {
                            "text":  "boink/cheat",
                            "points":  15
                        },
                        {
                            "text":  "talk/yell/curse",
                            "points":  9
                        },
                        {
                            "text":  "cry",
                            "points":  7
                        },
                        {
                            "text":  "kill men",
                            "points":  4
                        },
                        {
                            "text":  "drink",
                            "points":  4
                        },
                        {
                            "text":  "sleep/snore",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140102,
        "question":  "Name something you'd love to have Steve Harvey do for you on your birthday.",
        "answers":  [
                        {
                            "text":  "sing to me",
                            "points":  19
                        },
                        {
                            "text":  "comedy roast",
                            "points":  19
                        },
                        {
                            "text":  "gimme $$$",
                            "points":  16
                        },
                        {
                            "text":  "dance",
                            "points":  8
                        },
                        {
                            "text":  "come by/party",
                            "points":  5
                        },
                        {
                            "text":  "play feud",
                            "points":  4
                        },
                        {
                            "text":  "jump out of cake",
                            "points":  4
                        },
                        {
                            "text":  "buy me a bentley",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140103,
        "question":  "You'd walk funny too if you had the legs of which animal?",
        "answers":  [
                        {
                            "text":  "giraffe",
                            "points":  31
                        },
                        {
                            "text":  "kangaroo",
                            "points":  11
                        },
                        {
                            "text":  "ostrich",
                            "points":  10
                        },
                        {
                            "text":  "monkey/ape",
                            "points":  8
                        },
                        {
                            "text":  "chicken",
                            "points":  5
                        },
                        {
                            "text":  "duck",
                            "points":  5
                        },
                        {
                            "text":  "elephant",
                            "points":  5
                        },
                        {
                            "text":  "flamingo",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140104,
        "question":  "Name something you want to have someday but time is running out.",
        "answers":  [
                        {
                            "text":  "money/lotto win",
                            "points":  21
                        },
                        {
                            "text":  "house",
                            "points":  17
                        },
                        {
                            "text":  "pimped-out ride",
                            "points":  15
                        },
                        {
                            "text":  "kids/5 more",
                            "points":  7
                        },
                        {
                            "text":  "spouse/mate",
                            "points":  6
                        },
                        {
                            "text":  "cruise/vacay",
                            "points":  5
                        },
                        {
                            "text":  "no voices in head",
                            "points":  3
                        },
                        {
                            "text":  "smokin' bod",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140105,
        "question":  "Name a game show that describes your sex life.",
        "answers":  [
                        {
                            "text":  "jeopardy",
                            "points":  31
                        },
                        {
                            "text":  "let's make a deal",
                            "points":  11
                        },
                        {
                            "text":  "wheel of fortune",
                            "points":  9
                        },
                        {
                            "text":  "the price is right",
                            "points":  7
                        },
                        {
                            "text":  "press your luck",
                            "points":  5
                        },
                        {
                            "text":  "wipeout",
                            "points":  4
                        },
                        {
                            "text":  "newlywed game",
                            "points":  4
                        },
                        {
                            "text":  "match game",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140106,
        "question":  "Name a creature God created that he might now say, \"Yeah... that one was a mistake.\"",
        "answers":  [
                        {
                            "text":  "mosquito",
                            "points":  18
                        },
                        {
                            "text":  "human",
                            "points":  16
                        },
                        {
                            "text":  "platypus",
                            "points":  12
                        },
                        {
                            "text":  "spider",
                            "points":  9
                        },
                        {
                            "text":  "snake",
                            "points":  9
                        },
                        {
                            "text":  "cockroach",
                            "points":  4
                        },
                        {
                            "text":  "ant",
                            "points":  4
                        },
                        {
                            "text":  "skunk",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140107,
        "question":  "Name something you have that you don't deserve.",
        "answers":  [
                        {
                            "text":  "my boo",
                            "points":  18
                        },
                        {
                            "text":  "ailment",
                            "points":  10
                        },
                        {
                            "text":  "ferrari/two",
                            "points":  9
                        },
                        {
                            "text":  "oprah money",
                            "points":  6
                        },
                        {
                            "text":  "god's grace",
                            "points":  6
                        },
                        {
                            "text":  "great kids",
                            "points":  6
                        },
                        {
                            "text":  "bills/debt",
                            "points":  5
                        },
                        {
                            "text":  "a home",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140108,
        "question":  "We asked 100 men... Bodybuilders have biceps the size of a melon. What fruit is the size of yours?",
        "answers":  [
                        {
                            "text":  "apple",
                            "points":  32
                        },
                        {
                            "text":  "lemon",
                            "points":  20
                        },
                        {
                            "text":  "orange",
                            "points":  18
                        },
                        {
                            "text":  "grapefruit",
                            "points":  13
                        },
                        {
                            "text":  "kumquat",
                            "points":  11
                        },
                        {
                            "text":  "plum",
                            "points":  4
                        },
                        {
                            "text":  "grape",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140109,
        "question":  "We asked 100 single women... Name something you might do in a sexier way if you knew a hot guy was watching you.",
        "answers":  [
                        {
                            "text":  "strut",
                            "points":  27
                        },
                        {
                            "text":  "lick my lips",
                            "points":  24
                        },
                        {
                            "text":  "bat eyelashes",
                            "points":  15
                        },
                        {
                            "text":  "smile",
                            "points":  13
                        },
                        {
                            "text":  "bend over",
                            "points":  9
                        },
                        {
                            "text":  "lick ice cream/eat",
                            "points":  6
                        },
                        {
                            "text":  "dress/change",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  140110,
        "question":  "Fill in the blank: A bull might tell a cow, \"I like the way you ______.\"",
        "answers":  [
                        {
                            "text":  "moo",
                            "points":  47
                        },
                        {
                            "text":  "mooove",
                            "points":  19
                        },
                        {
                            "text":  "chew/graze",
                            "points":  11
                        },
                        {
                            "text":  "squirt milk",
                            "points":  10
                        },
                        {
                            "text":  "look, hottie!",
                            "points":  7
                        },
                        {
                            "text":  "swat flies w/ tail",
                            "points":  3
                        },
                        {
                            "text":  "smell",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140111,
        "question":  "We asked 100 single people... Tell me the worst way to find out you got dumped.",
        "answers":  [
                        {
                            "text":  "text",
                            "points":  42
                        },
                        {
                            "text":  "social media post",
                            "points":  17
                        },
                        {
                            "text":  "e-mail",
                            "points":  12
                        },
                        {
                            "text":  "see 'em w/ someone",
                            "points":  12
                        },
                        {
                            "text":  "voicemail/call",
                            "points":  8
                        },
                        {
                            "text":  "from a friend",
                            "points":  6
                        },
                        {
                            "text":  "ghosting",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140112,
        "question":  "Name something about the Wicked Witch of the West that's the reason she's still single.",
        "answers":  [
                        {
                            "text":  "mean!",
                            "points":  38
                        },
                        {
                            "text":  "ugly/warty nose",
                            "points":  24
                        },
                        {
                            "text":  "green skin",
                            "points":  24
                        },
                        {
                            "text":  "that cackle/voice",
                            "points":  6
                        },
                        {
                            "text":  "can't bathe/melts",
                            "points":  3
                        },
                        {
                            "text":  "pet monkeys",
                            "points":  2
                        },
                        {
                            "text":  "gothic clothes",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140113,
        "question":  "Fill in the blank: Careful bending over in a crowd, or someone might ______ your bottom.",
        "answers":  [
                        {
                            "text":  "spank/pat",
                            "points":  55
                        },
                        {
                            "text":  "pinch/grab",
                            "points":  18
                        },
                        {
                            "text":  "see/stare at",
                            "points":  14
                        },
                        {
                            "text":  "expose",
                            "points":  4
                        },
                        {
                            "text":  "kick",
                            "points":  3
                        },
                        {
                            "text":  "photograph/insta",
                            "points":  2
                        },
                        {
                            "text":  "poke/goose",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140114,
        "question":  "Name something a cheating husband buys his mistress with cash so there's no paper trail.",
        "answers":  [
                        {
                            "text":  "ring/jewelry",
                            "points":  55
                        },
                        {
                            "text":  "flowers",
                            "points":  12
                        },
                        {
                            "text":  "dinner/food",
                            "points":  10
                        },
                        {
                            "text":  "lingerie/rubber bra",
                            "points":  9
                        },
                        {
                            "text":  "hotel room",
                            "points":  7
                        },
                        {
                            "text":  "car",
                            "points":  3
                        },
                        {
                            "text":  "house/condo",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140115,
        "question":  "We asked 100 divorced women... Divorcing your husband was a win-win. You don't have to see him or his ______ anymore.",
        "answers":  [
                        {
                            "text":  "trash family",
                            "points":  52
                        },
                        {
                            "text":  "skanky ho",
                            "points":  13
                        },
                        {
                            "text":  "nasty face/bod",
                            "points":  11
                        },
                        {
                            "text":  "laundry/mess",
                            "points":  9
                        },
                        {
                            "text":  "cheap beer",
                            "points":  5
                        },
                        {
                            "text":  "lame tv shows",
                            "points":  5
                        },
                        {
                            "text":  "loser friends",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140116,
        "question":  "Name a movie monster who'd leave a big cement footprint at Grauman's Chinese Theatre.",
        "answers":  [
                        {
                            "text":  "godzilla",
                            "points":  51
                        },
                        {
                            "text":  "king kong",
                            "points":  26
                        },
                        {
                            "text":  "bigfoot",
                            "points":  11
                        },
                        {
                            "text":  "frankenstein",
                            "points":  4
                        },
                        {
                            "text":  "swamp thing",
                            "points":  2
                        },
                        {
                            "text":  "james p. \"sully\" sullivan",
                            "points":  2
                        },
                        {
                            "text":  "hulk",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140117,
        "question":  "When Santa retires and moves to South Beach, name something he's not going to need.",
        "answers":  [
                        {
                            "text":  "suit/winter garb",
                            "points":  51
                        },
                        {
                            "text":  "sleigh",
                            "points":  23
                        },
                        {
                            "text":  "mangy reindeer",
                            "points":  9
                        },
                        {
                            "text":  "ornery elves",
                            "points":  5
                        },
                        {
                            "text":  "long beard",
                            "points":  4
                        },
                        {
                            "text":  "his old lady",
                            "points":  3
                        },
                        {
                            "text":  "a heater",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140118,
        "question":  "Fill in the blank: My aunt must still think I'm a baby because she kissed my ______.",
        "answers":  [
                        {
                            "text":  "cheek",
                            "points":  41
                        },
                        {
                            "text":  "forehead/head",
                            "points":  39
                        },
                        {
                            "text":  "lips",
                            "points":  6
                        },
                        {
                            "text":  "bare booty",
                            "points":  4
                        },
                        {
                            "text":  "belly",
                            "points":  3
                        },
                        {
                            "text":  "nose",
                            "points":  3
                        },
                        {
                            "text":  "boo-boo/cut",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140119,
        "question":  "We asked 100 married men... Fill in the blank: It's bad if you cheat. But you're going to hell if you cheat with your ______.",
        "answers":  [
                        {
                            "text":  "sister-in-law",
                            "points":  37
                        },
                        {
                            "text":  "wife's bff",
                            "points":  22
                        },
                        {
                            "text":  "mother-in-law",
                            "points":  17
                        },
                        {
                            "text":  "ex",
                            "points":  8
                        },
                        {
                            "text":  "own sister",
                            "points":  6
                        },
                        {
                            "text":  "boss",
                            "points":  4
                        },
                        {
                            "text":  "own cousin",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140120,
        "question":  "When Old MacDonald and his wife role-play in the bedroom, she dresses up as a farmer. He dresses up as which animal?",
        "answers":  [
                        {
                            "text":  "cow/bull",
                            "points":  37
                        },
                        {
                            "text":  "horse",
                            "points":  22
                        },
                        {
                            "text":  "sheep/lamb",
                            "points":  14
                        },
                        {
                            "text":  "pig",
                            "points":  13
                        },
                        {
                            "text":  "dog",
                            "points":  4
                        },
                        {
                            "text":  "donkey/mule",
                            "points":  4
                        },
                        {
                            "text":  "chicken/rooster",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140121,
        "question":  "We asked 100 women... Tell me a way your husband is not like Steve Harvey.",
        "answers":  [
                        {
                            "text":  "not funny",
                            "points":  36
                        },
                        {
                            "text":  "not rich",
                            "points":  33
                        },
                        {
                            "text":  "not famous",
                            "points":  13
                        },
                        {
                            "text":  "not black",
                            "points":  5
                        },
                        {
                            "text":  "doesn't wear suits",
                            "points":  4
                        },
                        {
                            "text":  "hubby's hotter",
                            "points":  4
                        },
                        {
                            "text":  "has hair",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140122,
        "question":  "We asked 100 women... Fill in the blank: I like men who smell like ______.",
        "answers":  [
                        {
                            "text":  "soap/clean",
                            "points":  35
                        },
                        {
                            "text":  "cologne/aftershave",
                            "points":  28
                        },
                        {
                            "text":  "ocean/nature",
                            "points":  17
                        },
                        {
                            "text":  "food/spices",
                            "points":  10
                        },
                        {
                            "text":  "money!",
                            "points":  4
                        },
                        {
                            "text":  "sweaty men",
                            "points":  2
                        },
                        {
                            "text":  "flowers",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140123,
        "question":  "You look professional to everyone at your work Zoom meeting. But what are you wearing from the waist down?",
        "answers":  [
                        {
                            "text":  "nada, baby!",
                            "points":  29
                        },
                        {
                            "text":  "undies/my wife's",
                            "points":  21
                        },
                        {
                            "text":  "butt-flap pj's",
                            "points":  15
                        },
                        {
                            "text":  "shorts",
                            "points":  11
                        },
                        {
                            "text":  "dress pants/jeans",
                            "points":  10
                        },
                        {
                            "text":  "sweats",
                            "points":  9
                        },
                        {
                            "text":  "leggings",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140124,
        "question":  "We asked 100 married women... Name something you ask your husband for using your sexiest voice.",
        "answers":  [
                        {
                            "text":  "massage/feet",
                            "points":  26
                        },
                        {
                            "text":  "food/drink",
                            "points":  23
                        },
                        {
                            "text":  "sexy time/in shower",
                            "points":  18
                        },
                        {
                            "text":  "money, honey",
                            "points":  16
                        },
                        {
                            "text":  "take out trash",
                            "points":  7
                        },
                        {
                            "text":  "help clean",
                            "points":  5
                        },
                        {
                            "text":  "kisses",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140125,
        "question":  "Name a sea creature the Little Mermaid might hitch a ride on.",
        "answers":  [
                        {
                            "text":  "dolphin/porpoise",
                            "points":  24
                        },
                        {
                            "text":  "seahorse",
                            "points":  24
                        },
                        {
                            "text":  "whale/orca",
                            "points":  19
                        },
                        {
                            "text":  "sea turtle",
                            "points":  11
                        },
                        {
                            "text":  "fish/shark",
                            "points":  10
                        },
                        {
                            "text":  "crab/sebastian",
                            "points":  5
                        },
                        {
                            "text":  "octopus",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140126,
        "question":  "Name a place that a man takes a woman on a date so she'll think he's smart.",
        "answers":  [
                        {
                            "text":  "museum/gallery",
                            "points":  63
                        },
                        {
                            "text":  "play/opera",
                            "points":  13
                        },
                        {
                            "text":  "library",
                            "points":  7
                        },
                        {
                            "text":  "eatery/french menu",
                            "points":  5
                        },
                        {
                            "text":  "lecture",
                            "points":  4
                        },
                        {
                            "text":  "bookstore",
                            "points":  3
                        },
                        {
                            "text":  "classical concert",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140127,
        "question":  "If a housesitter ran out of toilet paper, what would you hate to discover they used instead?",
        "answers":  [
                        {
                            "text":  "towel/washcloth",
                            "points":  61
                        },
                        {
                            "text":  "clothes/my tie",
                            "points":  10
                        },
                        {
                            "text":  "newspaper/book",
                            "points":  9
                        },
                        {
                            "text":  "napkin/paper towel",
                            "points":  7
                        },
                        {
                            "text":  "curtain",
                            "points":  4
                        },
                        {
                            "text":  "kleenex",
                            "points":  4
                        },
                        {
                            "text":  "bedding",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140128,
        "question":  "Name something Snow White might be sick and tired of doing for the seven dwarfs.",
        "answers":  [
                        {
                            "text":  "cleaning/laundry",
                            "points":  58
                        },
                        {
                            "text":  "cooking",
                            "points":  26
                        },
                        {
                            "text":  "french kissing",
                            "points":  4
                        },
                        {
                            "text":  "singing",
                            "points":  3
                        },
                        {
                            "text":  "carrying them",
                            "points":  2
                        },
                        {
                            "text":  "smiling",
                            "points":  2
                        },
                        {
                            "text":  "reach'g high places",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140129,
        "question":  "Tell me something that some people pay to have done to their bottoms.",
        "answers":  [
                        {
                            "text":  "shrink/enlarge",
                            "points":  55
                        },
                        {
                            "text":  "waxing",
                            "points":  21
                        },
                        {
                            "text":  "spanking",
                            "points":  8
                        },
                        {
                            "text":  "tattoo",
                            "points":  7
                        },
                        {
                            "text":  "tanning",
                            "points":  2
                        },
                        {
                            "text":  "bleach mr. brown eye",
                            "points":  2
                        },
                        {
                            "text":  "medical exam",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140130,
        "question":  "Name something a doctor asks you to do that sounds kind of sexy.",
        "answers":  [
                        {
                            "text":  "undress",
                            "points":  50
                        },
                        {
                            "text":  "bend over",
                            "points":  21
                        },
                        {
                            "text":  "open up/say \"ahh\"",
                            "points":  10
                        },
                        {
                            "text":  "breathe deeply",
                            "points":  6
                        },
                        {
                            "text":  "open legs/stirrup",
                            "points":  5
                        },
                        {
                            "text":  "lie back/relax",
                            "points":  3
                        },
                        {
                            "text":  "self-exam",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140131,
        "question":  "Name a carnival ride you shouldn't go on after eating several greasy corn dogs.",
        "answers":  [
                        {
                            "text":  "coaster/with loops",
                            "points":  47
                        },
                        {
                            "text":  "tilt-a-whirl",
                            "points":  24
                        },
                        {
                            "text":  "ferris wheel",
                            "points":  13
                        },
                        {
                            "text":  "merry-go-round",
                            "points":  4
                        },
                        {
                            "text":  "scrambler/twister",
                            "points":  4
                        },
                        {
                            "text":  "teacups",
                            "points":  3
                        },
                        {
                            "text":  "zipper",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140132,
        "question":  "Fill in the blank: Personally, I think I have a hot-looking what?",
        "answers":  [
                        {
                            "text":  "bod/triple nipple",
                            "points":  45
                        },
                        {
                            "text":  "sweetie",
                            "points":  27
                        },
                        {
                            "text":  "face/smile",
                            "points":  13
                        },
                        {
                            "text":  "car/truck",
                            "points":  6
                        },
                        {
                            "text":  "kid",
                            "points":  2
                        },
                        {
                            "text":  "hairdo",
                            "points":  2
                        },
                        {
                            "text":  "sibling! yum!",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140133,
        "question":  "Fill in the blank: I see London, I see France. I see ______ in your underpants.",
        "answers":  [
                        {
                            "text":  "spot/turd",
                            "points":  39
                        },
                        {
                            "text":  "hole/tear",
                            "points":  23
                        },
                        {
                            "text":  "bulge",
                            "points":  13
                        },
                        {
                            "text":  "bug/crabs",
                            "points":  12
                        },
                        {
                            "text":  "mouse/rat",
                            "points":  4
                        },
                        {
                            "text":  "butt crack",
                            "points":  3
                        },
                        {
                            "text":  "hand/hottie",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140134,
        "question":  "Name something a man does at a party that would embarrass his wife.",
        "answers":  [
                        {
                            "text":  "get sloshed",
                            "points":  37
                        },
                        {
                            "text":  "dance/on pole",
                            "points":  20
                        },
                        {
                            "text":  "flirt/kiss guys",
                            "points":  17
                        },
                        {
                            "text":  "speak/dad jokes",
                            "points":  8
                        },
                        {
                            "text":  "fart/crop dust",
                            "points":  6
                        },
                        {
                            "text":  "sing/abba songs",
                            "points":  5
                        },
                        {
                            "text":  "get nekkid!",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140135,
        "question":  "Name something about Miss Piggy that other pigs make fun of.",
        "answers":  [
                        {
                            "text":  "voice/laugh",
                            "points":  34
                        },
                        {
                            "text":  "face/makeup",
                            "points":  18
                        },
                        {
                            "text":  "dates a frog",
                            "points":  14
                        },
                        {
                            "text":  "hair/bow",
                            "points":  13
                        },
                        {
                            "text":  "clothes/bra",
                            "points":  10
                        },
                        {
                            "text":  "pudgy bod",
                            "points":  5
                        },
                        {
                            "text":  "snooty 'tude",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140136,
        "question":  "Name something a man might do if his wife threw out his lucky underwear.",
        "answers":  [
                        {
                            "text":  "mad/cry/cuss",
                            "points":  33
                        },
                        {
                            "text":  "dumpster dive",
                            "points":  27
                        },
                        {
                            "text":  "buy new pair",
                            "points":  17
                        },
                        {
                            "text":  "toss her stuff",
                            "points":  7
                        },
                        {
                            "text":  "go commando",
                            "points":  6
                        },
                        {
                            "text":  "wear others/hers",
                            "points":  5
                        },
                        {
                            "text":  "divorce her",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140137,
        "question":  "We asked 100 men... My girlfriend texted me \"Dinner's on me\" and then I found her lying on the table with a piece of what on her naked body?",
        "answers":  [
                        {
                            "text":  "chocolate/candy",
                            "points":  33
                        },
                        {
                            "text":  "pizza",
                            "points":  20
                        },
                        {
                            "text":  "fruit",
                            "points":  18
                        },
                        {
                            "text":  "meat/chicken",
                            "points":  9
                        },
                        {
                            "text":  "sushi/seafood",
                            "points":  9
                        },
                        {
                            "text":  "bread",
                            "points":  5
                        },
                        {
                            "text":  "butter",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140138,
        "question":  "If roles were reversed, what might a turkey do to you on Thanksgiving?",
        "answers":  [
                        {
                            "text":  "cook/baste me",
                            "points":  27
                        },
                        {
                            "text":  "stuff me",
                            "points":  26
                        },
                        {
                            "text":  "eat me",
                            "points":  24
                        },
                        {
                            "text":  "kill/behead me",
                            "points":  8
                        },
                        {
                            "text":  "peck me",
                            "points":  5
                        },
                        {
                            "text":  "pardon/set free",
                            "points":  4
                        },
                        {
                            "text":  "pluck me",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140139,
        "question":  "We asked 100 married men... Fill in the blank: My wife's panties are ______er than my undies.",
        "answers":  [
                        {
                            "text":  "softer",
                            "points":  20
                        },
                        {
                            "text":  "cleaner",
                            "points":  20
                        },
                        {
                            "text":  "sexier/cuter",
                            "points":  20
                        },
                        {
                            "text":  "smaller",
                            "points":  15
                        },
                        {
                            "text":  "brighter colored",
                            "points":  12
                        },
                        {
                            "text":  "dirtier",
                            "points":  5
                        },
                        {
                            "text":  "bigger",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140140,
        "question":  "If Abraham Lincoln showed up today, what about him would people make fun of?",
        "answers":  [
                        {
                            "text":  "clothes/hat",
                            "points":  61
                        },
                        {
                            "text":  "his height",
                            "points":  11
                        },
                        {
                            "text":  "the beard",
                            "points":  11
                        },
                        {
                            "text":  "face/nose",
                            "points":  6
                        },
                        {
                            "text":  "hairstyle",
                            "points":  3
                        },
                        {
                            "text":  "decayed corpse",
                            "points":  2
                        },
                        {
                            "text":  "big ears",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140141,
        "question":  "The magician started to dance when what animal got loose in his pants?",
        "answers":  [
                        {
                            "text":  "rabbit",
                            "points":  54
                        },
                        {
                            "text":  "snake/constrictor",
                            "points":  18
                        },
                        {
                            "text":  "pissy bird",
                            "points":  8
                        },
                        {
                            "text":  "mouse/rat",
                            "points":  6
                        },
                        {
                            "text":  "bugs/fire ants",
                            "points":  5
                        },
                        {
                            "text":  "ferret",
                            "points":  3
                        },
                        {
                            "text":  "dog",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140142,
        "question":  "Dear Instagrammers: Nobody wants to see a picture of your what?",
        "answers":  [
                        {
                            "text":  "bod/badonk",
                            "points":  53
                        },
                        {
                            "text":  "food",
                            "points":  21
                        },
                        {
                            "text":  "face/duck lips",
                            "points":  6
                        },
                        {
                            "text":  "pet",
                            "points":  6
                        },
                        {
                            "text":  "kid/ultrasound",
                            "points":  4
                        },
                        {
                            "text":  "clothes/closet",
                            "points":  4
                        },
                        {
                            "text":  "tattoo",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140143,
        "question":  "You'd love to have one of Steve Harvey's what?",
        "answers":  [
                        {
                            "text":  "millions",
                            "points":  50
                        },
                        {
                            "text":  "suits/ties",
                            "points":  21
                        },
                        {
                            "text":  "cars",
                            "points":  9
                        },
                        {
                            "text":  "babies",
                            "points":  5
                        },
                        {
                            "text":  "jokes",
                            "points":  5
                        },
                        {
                            "text":  "shows/jobs",
                            "points":  3
                        },
                        {
                            "text":  "mansions/villas",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140144,
        "question":  "Name something that can be dangerous to have on your lap when you're driving.",
        "answers":  [
                        {
                            "text":  "food/hot drink",
                            "points":  47
                        },
                        {
                            "text":  "pet/squirrel",
                            "points":  25
                        },
                        {
                            "text":  "a child",
                            "points":  11
                        },
                        {
                            "text":  "phone",
                            "points":  5
                        },
                        {
                            "text":  "a hot babe",
                            "points":  3
                        },
                        {
                            "text":  "weapon/bomb",
                            "points":  3
                        },
                        {
                            "text":  "a vibrator",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140145,
        "question":  "Name something you might start doing if your new neighbors are nudists.",
        "answers":  [
                        {
                            "text":  "close blinds",
                            "points":  43
                        },
                        {
                            "text":  "build fence",
                            "points":  16
                        },
                        {
                            "text":  "spy/binoculars",
                            "points":  12
                        },
                        {
                            "text":  "avoid/not look!",
                            "points":  9
                        },
                        {
                            "text":  "move!",
                            "points":  8
                        },
                        {
                            "text":  "join 'em/nude",
                            "points":  6
                        },
                        {
                            "text":  "tall thorny bushes",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140146,
        "question":  "Name something that might make you suspect your new house is haunted.",
        "answers":  [
                        {
                            "text":  "noises/voices",
                            "points":  40
                        },
                        {
                            "text":  "doors open/close",
                            "points":  15
                        },
                        {
                            "text":  "moving objects",
                            "points":  15
                        },
                        {
                            "text":  "ornery ghost",
                            "points":  14
                        },
                        {
                            "text":  "lights flicker",
                            "points":  7
                        },
                        {
                            "text":  "death/body in home",
                            "points":  3
                        },
                        {
                            "text":  "dark shadows",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140147,
        "question":  "We asked 100 married women... You shoved the cake in your husband's face at your wedding. What would you like to shove in it now?",
        "answers":  [
                        {
                            "text":  "my fist/hand",
                            "points":  34
                        },
                        {
                            "text":  "sock/clothes",
                            "points":  19
                        },
                        {
                            "text":  "my face/tongue",
                            "points":  16
                        },
                        {
                            "text":  "more cake/pie",
                            "points":  11
                        },
                        {
                            "text":  "pillow/till he dies",
                            "points":  7
                        },
                        {
                            "text":  "my foot",
                            "points":  6
                        },
                        {
                            "text":  "poop",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140148,
        "question":  "Name something at a nursing home that two older women fight over.",
        "answers":  [
                        {
                            "text":  "old men/male nurse",
                            "points":  63
                        },
                        {
                            "text":  "food/pudding",
                            "points":  11
                        },
                        {
                            "text":  "who sits where",
                            "points":  9
                        },
                        {
                            "text":  "remote",
                            "points":  6
                        },
                        {
                            "text":  "bedpan",
                            "points":  2
                        },
                        {
                            "text":  "clothes/housecoat",
                            "points":  2
                        },
                        {
                            "text":  "bingo/game",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140149,
        "question":  "We asked 100 men... What's the number one thing women shouldn't talk about on a first date?",
        "answers":  [
                        {
                            "text":  "ex/guys",
                            "points":  63
                        },
                        {
                            "text":  "marriage",
                            "points":  9
                        },
                        {
                            "text":  "having kids",
                            "points":  7
                        },
                        {
                            "text":  "money",
                            "points":  7
                        },
                        {
                            "text":  "sex/times per year",
                            "points":  4
                        },
                        {
                            "text":  "her mom/yours",
                            "points":  3
                        },
                        {
                            "text":  "politics",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140150,
        "question":  "Name something you do at work that you hope no one can hear.",
        "answers":  [
                        {
                            "text":  "crop dust",
                            "points":  57
                        },
                        {
                            "text":  "sing/britney",
                            "points":  16
                        },
                        {
                            "text":  "talk/cuss",
                            "points":  11
                        },
                        {
                            "text":  "burp",
                            "points":  4
                        },
                        {
                            "text":  "poop/snap a yam",
                            "points":  3
                        },
                        {
                            "text":  "cry & moan",
                            "points":  2
                        },
                        {
                            "text":  "sleep/yawn",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140151,
        "question":  "It's bad if you share your bed with a visiting relative. It's worse if they do what all night?",
        "answers":  [
                        {
                            "text":  "snore",
                            "points":  53
                        },
                        {
                            "text":  "have the winds",
                            "points":  22
                        },
                        {
                            "text":  "\"get busy\"",
                            "points":  7
                        },
                        {
                            "text":  "spoon you",
                            "points":  5
                        },
                        {
                            "text":  "jibber-jabber",
                            "points":  4
                        },
                        {
                            "text":  "moan/yell",
                            "points":  2
                        },
                        {
                            "text":  "kick you",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140152,
        "question":  "Jane knows Tarzan's in the mood for love whenever he puts on his loincloth made out of what?",
        "answers":  [
                        {
                            "text":  "animal skin/fur",
                            "points":  47
                        },
                        {
                            "text":  "silk/lace",
                            "points":  25
                        },
                        {
                            "text":  "leaves",
                            "points":  13
                        },
                        {
                            "text":  "flower petals",
                            "points":  3
                        },
                        {
                            "text":  "grass/straw",
                            "points":  3
                        },
                        {
                            "text":  "feathers",
                            "points":  2
                        },
                        {
                            "text":  "candy",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140153,
        "question":  "Name a place where you would hate to have a seat by the bathroom.",
        "answers":  [
                        {
                            "text":  "restaurant/bar",
                            "points":  46
                        },
                        {
                            "text":  "airplane",
                            "points":  25
                        },
                        {
                            "text":  "bus",
                            "points":  11
                        },
                        {
                            "text":  "theater/movies",
                            "points":  5
                        },
                        {
                            "text":  "sporting event",
                            "points":  4
                        },
                        {
                            "text":  "g.i. doc's office",
                            "points":  2
                        },
                        {
                            "text":  "work",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140154,
        "question":  "Fill in the blank: You never want to hear someone tell you, \"______ is looking for you.\"",
        "answers":  [
                        {
                            "text":  "the fuzz/fbi",
                            "points":  44
                        },
                        {
                            "text":  "the boss",
                            "points":  22
                        },
                        {
                            "text":  "the irs",
                            "points":  9
                        },
                        {
                            "text":  "satan/death",
                            "points":  7
                        },
                        {
                            "text":  "your mom",
                            "points":  6
                        },
                        {
                            "text":  "your ex",
                            "points":  5
                        },
                        {
                            "text":  "mother-in-law",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140155,
        "question":  "Name someone whose call you might take when you're on the toilet.",
        "answers":  [
                        {
                            "text":  "mom/dad",
                            "points":  43
                        },
                        {
                            "text":  "my sweetie",
                            "points":  29
                        },
                        {
                            "text":  "boss",
                            "points":  7
                        },
                        {
                            "text":  "my kid",
                            "points":  5
                        },
                        {
                            "text":  "sibling",
                            "points":  4
                        },
                        {
                            "text":  "friend",
                            "points":  4
                        },
                        {
                            "text":  "gastroenterologist",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140156,
        "question":  "We asked 100 single women... Tell me something an older guy might have that a younger one might not.",
        "answers":  [
                        {
                            "text":  "fresh chedda",
                            "points":  42
                        },
                        {
                            "text":  "life experience",
                            "points":  22
                        },
                        {
                            "text":  "kids",
                            "points":  9
                        },
                        {
                            "text":  "respect/manners",
                            "points":  9
                        },
                        {
                            "text":  "a house",
                            "points":  5
                        },
                        {
                            "text":  "viagra",
                            "points":  5
                        },
                        {
                            "text":  "patience",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140157,
        "question":  "If all the U.S. presidents were alive, single, and ready to mingle, who would you date?",
        "answers":  [
                        {
                            "text":  "john f. kennedy",
                            "points":  41
                        },
                        {
                            "text":  "barack obama",
                            "points":  25
                        },
                        {
                            "text":  "ronald reagan",
                            "points":  13
                        },
                        {
                            "text":  "abe lincoln",
                            "points":  7
                        },
                        {
                            "text":  "george washington",
                            "points":  4
                        },
                        {
                            "text":  "thomas jefferson",
                            "points":  3
                        },
                        {
                            "text":  "bill clinton",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140158,
        "question":  "We asked 100 women... Name something you'd like to do to your man when he starts whining.",
        "answers":  [
                        {
                            "text":  "pop/kick him",
                            "points":  41
                        },
                        {
                            "text":  "leave/ignore",
                            "points":  18
                        },
                        {
                            "text":  "gag/duct tape",
                            "points":  13
                        },
                        {
                            "text":  "whine back",
                            "points":  9
                        },
                        {
                            "text":  "support/kiss",
                            "points":  6
                        },
                        {
                            "text":  "throw stuff",
                            "points":  6
                        },
                        {
                            "text":  "\"chill/suck it up\"",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140159,
        "question":  "We asked 100 women... I was grossed out when my date did what like my dog?",
        "answers":  [
                        {
                            "text":  "ate/his poo",
                            "points":  39
                        },
                        {
                            "text":  "licked self & me",
                            "points":  25
                        },
                        {
                            "text":  "scratched",
                            "points":  13
                        },
                        {
                            "text":  "farted",
                            "points":  7
                        },
                        {
                            "text":  "pottied/on rug",
                            "points":  5
                        },
                        {
                            "text":  "sniffed/butts",
                            "points":  3
                        },
                        {
                            "text":  "belched",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140160,
        "question":  "Name something the best office party ever would have.",
        "answers":  [
                        {
                            "text":  "open bar",
                            "points":  37
                        },
                        {
                            "text":  "delish food",
                            "points":  21
                        },
                        {
                            "text":  "$$$/prizes/games",
                            "points":  12
                        },
                        {
                            "text":  "band/dj",
                            "points":  11
                        },
                        {
                            "text":  "reefer",
                            "points":  6
                        },
                        {
                            "text":  "strippers",
                            "points":  6
                        },
                        {
                            "text":  "celeb/carrot top",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140161,
        "question":  "Name a subject couples should discuss by talking, not texting.",
        "answers":  [
                        {
                            "text":  "finances",
                            "points":  35
                        },
                        {
                            "text":  "kids/\"i'm preggo\"",
                            "points":  23
                        },
                        {
                            "text":  "sex",
                            "points":  13
                        },
                        {
                            "text":  "getting married",
                            "points":  11
                        },
                        {
                            "text":  "divorce",
                            "points":  6
                        },
                        {
                            "text":  "recent fight",
                            "points":  4
                        },
                        {
                            "text":  "infidelity",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140162,
        "question":  "We asked 100 married men... Name something other women wear you wish your wife would wear.",
        "answers":  [
                        {
                            "text":  "lingerie/butt floss",
                            "points":  32
                        },
                        {
                            "text":  "sexy dress/skirt",
                            "points":  20
                        },
                        {
                            "text":  "bikini",
                            "points":  12
                        },
                        {
                            "text":  "10-inch heels",
                            "points":  11
                        },
                        {
                            "text":  "makeup",
                            "points":  10
                        },
                        {
                            "text":  "daisy dukes",
                            "points":  7
                        },
                        {
                            "text":  "skimpy top/halter",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140163,
        "question":  "We asked 100 married women... You wish it weren't true, but name something your husband spends more time holding than you.",
        "answers":  [
                        {
                            "text":  "phone",
                            "points":  26
                        },
                        {
                            "text":  "remote",
                            "points":  18
                        },
                        {
                            "text":  "beer",
                            "points":  16
                        },
                        {
                            "text":  "his dangler",
                            "points":  16
                        },
                        {
                            "text":  "his gun",
                            "points":  8
                        },
                        {
                            "text":  "game controller",
                            "points":  6
                        },
                        {
                            "text":  "cigarette",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140164,
        "question":  "We asked 100 men... Name something that might be fun to do like a pirate.",
        "answers":  [
                        {
                            "text":  "pillage/treasure",
                            "points":  23
                        },
                        {
                            "text":  "sail",
                            "points":  21
                        },
                        {
                            "text":  "talk/ahoy, matey!",
                            "points":  18
                        },
                        {
                            "text":  "walk",
                            "points":  10
                        },
                        {
                            "text":  "wear eyepatch",
                            "points":  9
                        },
                        {
                            "text":  "drink rum",
                            "points":  9
                        },
                        {
                            "text":  "sword fight",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140165,
        "question":  "We asked 100 married men... Tell me something your wife has thrown at you.",
        "answers":  [
                        {
                            "text":  "kisses",
                            "points":  22
                        },
                        {
                            "text":  "remote",
                            "points":  20
                        },
                        {
                            "text":  "her ring",
                            "points":  19
                        },
                        {
                            "text":  "food",
                            "points":  11
                        },
                        {
                            "text":  "plates/dishes",
                            "points":  10
                        },
                        {
                            "text":  "newspaper/paper",
                            "points":  8
                        },
                        {
                            "text":  "plant/cactus",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140166,
        "question":  "We asked 100 women... Tell me the one part of Steve Harvey's body you'd like to touch.",
        "answers":  [
                        {
                            "text":  "slick head",
                            "points":  64
                        },
                        {
                            "text":  "mustache",
                            "points":  10
                        },
                        {
                            "text":  "hand",
                            "points":  6
                        },
                        {
                            "text":  "booty/sphincter",
                            "points":  5
                        },
                        {
                            "text":  "lips/teeth",
                            "points":  4
                        },
                        {
                            "text":  "massive biceps/arms",
                            "points":  3
                        },
                        {
                            "text":  "cute cheeks",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140167,
        "question":  "Fill in the blank: They call Susan \"the camel\" because of her ______.",
        "answers":  [
                        {
                            "text":  "humps/curves",
                            "points":  61
                        },
                        {
                            "text":  "tight pants",
                            "points":  15
                        },
                        {
                            "text":  "drinking",
                            "points":  9
                        },
                        {
                            "text":  "odd feet",
                            "points":  3
                        },
                        {
                            "text":  "face/mouth",
                            "points":  2
                        },
                        {
                            "text":  "coarse beige hair",
                            "points":  2
                        },
                        {
                            "text":  "long legs",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140168,
        "question":  "You're not a stripper. But where have you been known to strip your clothes off?",
        "answers":  [
                        {
                            "text":  "home/kitchen",
                            "points":  58
                        },
                        {
                            "text":  "beach/lake",
                            "points":  16
                        },
                        {
                            "text":  "pool/hot tub",
                            "points":  9
                        },
                        {
                            "text":  "gym",
                            "points":  5
                        },
                        {
                            "text":  "hotel/seedy motel",
                            "points":  2
                        },
                        {
                            "text":  "the bar",
                            "points":  2
                        },
                        {
                            "text":  "car/while driving",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140169,
        "question":  "Name a prop that a male stripper called Nurse Nick might use in his act.",
        "answers":  [
                        {
                            "text":  "stethoscope",
                            "points":  56
                        },
                        {
                            "text":  "thermometer/rectal",
                            "points":  12
                        },
                        {
                            "text":  "nurse uniform",
                            "points":  7
                        },
                        {
                            "text":  "pole",
                            "points":  7
                        },
                        {
                            "text":  "needle/syringe",
                            "points":  6
                        },
                        {
                            "text":  "rubber gloves",
                            "points":  4
                        },
                        {
                            "text":  "bedpan",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140170,
        "question":  "Name something a person might want out of.",
        "answers":  [
                        {
                            "text":  "relationship",
                            "points":  48
                        },
                        {
                            "text":  "prison",
                            "points":  16
                        },
                        {
                            "text":  "contract/lease",
                            "points":  14
                        },
                        {
                            "text":  "job",
                            "points":  7
                        },
                        {
                            "text":  "jury duty",
                            "points":  5
                        },
                        {
                            "text":  "the car",
                            "points":  2
                        },
                        {
                            "text":  "the mafia",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140171,
        "question":  "We asked 100 men... What would you want your superpower to be?",
        "answers":  [
                        {
                            "text":  "flying",
                            "points":  42
                        },
                        {
                            "text":  "super strength",
                            "points":  16
                        },
                        {
                            "text":  "mind reading",
                            "points":  13
                        },
                        {
                            "text":  "invisibility",
                            "points":  10
                        },
                        {
                            "text":  "x-ray vision",
                            "points":  9
                        },
                        {
                            "text":  "a super wang",
                            "points":  2
                        },
                        {
                            "text":  "teleport/kinesis",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140172,
        "question":  "Name the circus performer that probably has the shortest lifespan.",
        "answers":  [
                        {
                            "text":  "animal tamer",
                            "points":  40
                        },
                        {
                            "text":  "acrobat/tight rope",
                            "points":  31
                        },
                        {
                            "text":  "clown",
                            "points":  5
                        },
                        {
                            "text":  "fire-eat/thrower",
                            "points":  5
                        },
                        {
                            "text":  "animal",
                            "points":  5
                        },
                        {
                            "text":  "fat/bearded lady",
                            "points":  4
                        },
                        {
                            "text":  "human cannonball",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140173,
        "question":  "Name something a male stripper from Texas might wear in honor of his state.",
        "answers":  [
                        {
                            "text":  "cowboy hat",
                            "points":  37
                        },
                        {
                            "text":  "flag/lone star",
                            "points":  23
                        },
                        {
                            "text":  "boots",
                            "points":  15
                        },
                        {
                            "text":  "spurs",
                            "points":  6
                        },
                        {
                            "text":  "longhorns",
                            "points":  6
                        },
                        {
                            "text":  "big belt buckle",
                            "points":  4
                        },
                        {
                            "text":  "gun/holster",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140174,
        "question":  "We asked 100 men... What might a first date do in your car that would make it the last date?",
        "answers":  [
                        {
                            "text":  "blow chunks",
                            "points":  34
                        },
                        {
                            "text":  "call of doody",
                            "points":  20
                        },
                        {
                            "text":  "smoke",
                            "points":  14
                        },
                        {
                            "text":  "burp",
                            "points":  9
                        },
                        {
                            "text":  "cry",
                            "points":  7
                        },
                        {
                            "text":  "gossip",
                            "points":  5
                        },
                        {
                            "text":  "pick nose",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140175,
        "question":  "A strip club owner tells the strippers, \"The show must go on, even if you don't have\" what?",
        "answers":  [
                        {
                            "text":  "costume/pasties",
                            "points":  34
                        },
                        {
                            "text":  "customers",
                            "points":  19
                        },
                        {
                            "text":  "music",
                            "points":  15
                        },
                        {
                            "text":  "a pole",
                            "points":  12
                        },
                        {
                            "text":  "any tips coming",
                            "points":  8
                        },
                        {
                            "text":  "the will/energy",
                            "points":  3
                        },
                        {
                            "text":  "boobs/hot bod",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140176,
        "question":  "Gary the groom is delusional. He thinks his bride will let him go where anytime he wants?",
        "answers":  [
                        {
                            "text":  "drinking/clubbing",
                            "points":  31
                        },
                        {
                            "text":  "nudie joint",
                            "points":  29
                        },
                        {
                            "text":  "golfing",
                            "points":  15
                        },
                        {
                            "text":  "fishing/hunting",
                            "points":  9
                        },
                        {
                            "text":  "casino",
                            "points":  6
                        },
                        {
                            "text":  "bowling",
                            "points":  2
                        },
                        {
                            "text":  "beulah's brothel",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140177,
        "question":  "Name something a magician might have up his sleeve.",
        "answers":  [
                        {
                            "text":  "cards/an ace",
                            "points":  31
                        },
                        {
                            "text":  "rabbit",
                            "points":  26
                        },
                        {
                            "text":  "hankie/scarf",
                            "points":  20
                        },
                        {
                            "text":  "flowers",
                            "points":  9
                        },
                        {
                            "text":  "his arm",
                            "points":  3
                        },
                        {
                            "text":  "dove/bird",
                            "points":  3
                        },
                        {
                            "text":  "wand",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140178,
        "question":  "We asked 100 women... You're dating a cute guy who kisses like a slobbery Saint Bernard. What do you do?",
        "answers":  [
                        {
                            "text":  "tell him/\"stop\"",
                            "points":  24
                        },
                        {
                            "text":  "wipe off",
                            "points":  21
                        },
                        {
                            "text":  "dump him",
                            "points":  21
                        },
                        {
                            "text":  "kiss-free rela'ship",
                            "points":  16
                        },
                        {
                            "text":  "back away",
                            "points":  6
                        },
                        {
                            "text":  "teach him",
                            "points":  3
                        },
                        {
                            "text":  "\"kiss me below neck\"",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140179,
        "question":  "Name a reason Steve Harvey might put on a wig.",
        "answers":  [
                        {
                            "text":  "wants hair",
                            "points":  21
                        },
                        {
                            "text":  "halloween",
                            "points":  21
                        },
                        {
                            "text":  "as joke",
                            "points":  16
                        },
                        {
                            "text":  "incognito/buy weed",
                            "points":  15
                        },
                        {
                            "text":  "he's cold",
                            "points":  12
                        },
                        {
                            "text":  "act/play rick james",
                            "points":  7
                        },
                        {
                            "text":  "into drag",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140180,
        "question":  "We asked 100 women... Name something it would be a turnoff to see in your man's bathtub.",
        "answers":  [
                        {
                            "text":  "hair clump",
                            "points":  39
                        },
                        {
                            "text":  "dirt/scum/mold",
                            "points":  19
                        },
                        {
                            "text":  "a turd/pee",
                            "points":  15
                        },
                        {
                            "text":  "rubber ducky",
                            "points":  8
                        },
                        {
                            "text":  "bubbles",
                            "points":  6
                        },
                        {
                            "text":  "2 chicks & a dude",
                            "points":  3
                        },
                        {
                            "text":  "lady's razor",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140181,
        "question":  "Bad news: you died. Worse news: they're burying you next to who?",
        "answers":  [
                        {
                            "text":  "politician",
                            "points":  35
                        },
                        {
                            "text":  "my ex",
                            "points":  18
                        },
                        {
                            "text":  "family/in-law",
                            "points":  18
                        },
                        {
                            "text":  "criminal/my killer",
                            "points":  9
                        },
                        {
                            "text":  "worst enemy",
                            "points":  6
                        },
                        {
                            "text":  "cow/animal",
                            "points":  4
                        },
                        {
                            "text":  "a comedian",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140182,
        "question":  "We asked 100 women... Name someone you'd be surprised gave you sexy lingerie for your birthday.",
        "answers":  [
                        {
                            "text":  "mom/dad",
                            "points":  35
                        },
                        {
                            "text":  "boss/coworker",
                            "points":  15
                        },
                        {
                            "text":  "mother-in-law",
                            "points":  12
                        },
                        {
                            "text":  "dull hubby",
                            "points":  12
                        },
                        {
                            "text":  "kid/creepy son",
                            "points":  8
                        },
                        {
                            "text":  "sibling",
                            "points":  7
                        },
                        {
                            "text":  "grandparents",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140183,
        "question":  "We talked to 100 married men... What's the least sexy thing your wife has ever worn in the bedroom?",
        "answers":  [
                        {
                            "text":  "sweats/jog pants",
                            "points":  32
                        },
                        {
                            "text":  "flannel/footie pj's",
                            "points":  30
                        },
                        {
                            "text":  "socks",
                            "points":  9
                        },
                        {
                            "text":  "granny panties",
                            "points":  9
                        },
                        {
                            "text":  "nightgown",
                            "points":  7
                        },
                        {
                            "text":  "diaper",
                            "points":  3
                        },
                        {
                            "text":  "bathrobe",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140184,
        "question":  "A wife would love an app that alerts her whenever her husband goes where?",
        "answers":  [
                        {
                            "text":  "bar/club",
                            "points":  55
                        },
                        {
                            "text":  "strip joint",
                            "points":  14
                        },
                        {
                            "text":  "anywhere/out",
                            "points":  9
                        },
                        {
                            "text":  "mall/store",
                            "points":  5
                        },
                        {
                            "text":  "skank's house",
                            "points":  3
                        },
                        {
                            "text":  "casino/track",
                            "points":  3
                        },
                        {
                            "text":  "bank/atm",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140185,
        "question":  "Mid-flight, you'd hate to hear the pilot say, \"Howdy folks -- this is your captain speaking. Sorry to inform you that I'm ______.\"",
        "answers":  [
                        {
                            "text":  "drunk/high",
                            "points":  54
                        },
                        {
                            "text":  "outta here/quit'g",
                            "points":  12
                        },
                        {
                            "text":  "blind",
                            "points":  8
                        },
                        {
                            "text":  "sick/dying",
                            "points":  8
                        },
                        {
                            "text":  "lost",
                            "points":  4
                        },
                        {
                            "text":  "tired/gonna nap",
                            "points":  3
                        },
                        {
                            "text":  "not a pilot/only 15",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140186,
        "question":  "Name something you hope your partner doesn't do the first time they see you naked.",
        "answers":  [
                        {
                            "text":  "laugh",
                            "points":  54
                        },
                        {
                            "text":  "make face/cringe",
                            "points":  10
                        },
                        {
                            "text":  "puke/gag",
                            "points":  8
                        },
                        {
                            "text":  "cry/scream",
                            "points":  6
                        },
                        {
                            "text":  "gasp",
                            "points":  5
                        },
                        {
                            "text":  "run",
                            "points":  5
                        },
                        {
                            "text":  "not look/light off",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140187,
        "question":  "Grandma said, \"Snap, crackle, and pop aren't just the sounds of cereal -- they're also the sounds grandpa makes when he\" does what?",
        "answers":  [
                        {
                            "text":  "stands up",
                            "points":  51
                        },
                        {
                            "text":  "walks/up stairs",
                            "points":  17
                        },
                        {
                            "text":  "bends over",
                            "points":  6
                        },
                        {
                            "text":  "snores/sleeps",
                            "points":  6
                        },
                        {
                            "text":  "farts",
                            "points":  5
                        },
                        {
                            "text":  "chews",
                            "points":  4
                        },
                        {
                            "text":  "sex",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140188,
        "question":  "We asked 100 married women... When it comes to your husband, sometimes you feel like you're sleeping next to what animal?",
        "answers":  [
                        {
                            "text":  "bear",
                            "points":  50
                        },
                        {
                            "text":  "pig",
                            "points":  15
                        },
                        {
                            "text":  "dog",
                            "points":  13
                        },
                        {
                            "text":  "king kong",
                            "points":  5
                        },
                        {
                            "text":  "octopus",
                            "points":  3
                        },
                        {
                            "text":  "elephant",
                            "points":  3
                        },
                        {
                            "text":  "horse",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140189,
        "question":  "We asked 100 men... Your date just threw up in your car. What do you do?",
        "answers":  [
                        {
                            "text":  "clean up/make her",
                            "points":  49
                        },
                        {
                            "text":  "pull over/help",
                            "points":  22
                        },
                        {
                            "text":  "throw up too",
                            "points":  8
                        },
                        {
                            "text":  "take her home",
                            "points":  4
                        },
                        {
                            "text":  "get turned on/kiss",
                            "points":  3
                        },
                        {
                            "text":  "run/leave her",
                            "points":  3
                        },
                        {
                            "text":  "open the window",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140190,
        "question":  "Name something you'd be shocked that Steve Harvey did to change his appearance.",
        "answers":  [
                        {
                            "text":  "shaved stache",
                            "points":  45
                        },
                        {
                            "text":  "hair/blond mullet",
                            "points":  32
                        },
                        {
                            "text":  "plastic surgery",
                            "points":  5
                        },
                        {
                            "text":  "got buff",
                            "points":  3
                        },
                        {
                            "text":  "bleached skin",
                            "points":  3
                        },
                        {
                            "text":  "long beard",
                            "points":  2
                        },
                        {
                            "text":  "wore wife's clothes",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140191,
        "question":  "Name an excuse kids give for not doing homework that you could never use at your job.",
        "answers":  [
                        {
                            "text":  "dog ate it",
                            "points":  42
                        },
                        {
                            "text":  "tired/sent to bed",
                            "points":  18
                        },
                        {
                            "text":  "don't get it/hard",
                            "points":  12
                        },
                        {
                            "text":  "forgot",
                            "points":  8
                        },
                        {
                            "text":  "busy/soccer",
                            "points":  5
                        },
                        {
                            "text":  "don't want to",
                            "points":  4
                        },
                        {
                            "text":  "sick/mumps",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140192,
        "question":  "Name a reason a man might leave his wife for a blow-up doll.",
        "answers":  [
                        {
                            "text":  "quiet/won't nag",
                            "points":  38
                        },
                        {
                            "text":  "better/more sex",
                            "points":  26
                        },
                        {
                            "text":  "he's wacko",
                            "points":  12
                        },
                        {
                            "text":  "save $",
                            "points":  8
                        },
                        {
                            "text":  "better bod",
                            "points":  4
                        },
                        {
                            "text":  "won't cheat",
                            "points":  2
                        },
                        {
                            "text":  "companionship",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140193,
        "question":  "Name a way you'd describe both a pizza and yourself.",
        "answers":  [
                        {
                            "text":  "tasty/delish",
                            "points":  35
                        },
                        {
                            "text":  "cheesy",
                            "points":  19
                        },
                        {
                            "text":  "hot",
                            "points":  17
                        },
                        {
                            "text":  "spicy",
                            "points":  8
                        },
                        {
                            "text":  "saucy",
                            "points":  7
                        },
                        {
                            "text":  "doughy",
                            "points":  4
                        },
                        {
                            "text":  "round",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140194,
        "question":  "What does a mom do for her kids at night that you might like your mate to do for you?",
        "answers":  [
                        {
                            "text":  "hug & kiss",
                            "points":  34
                        },
                        {
                            "text":  "tuck in",
                            "points":  27
                        },
                        {
                            "text":  "rub back",
                            "points":  8
                        },
                        {
                            "text":  "make food/drink",
                            "points":  7
                        },
                        {
                            "text":  "read story",
                            "points":  7
                        },
                        {
                            "text":  "bathe me",
                            "points":  6
                        },
                        {
                            "text":  "sing",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140195,
        "question":  "Name something you'd be shocked that grandma got arrested for doing at bingo hall.",
        "answers":  [
                        {
                            "text":  "showin' her goods",
                            "points":  34
                        },
                        {
                            "text":  "cheating",
                            "points":  20
                        },
                        {
                            "text":  "hit/fighting",
                            "points":  11
                        },
                        {
                            "text":  "smoking ganja",
                            "points":  9
                        },
                        {
                            "text":  "guzzling booze",
                            "points":  7
                        },
                        {
                            "text":  "nookie/for $",
                            "points":  6
                        },
                        {
                            "text":  "stealing",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140196,
        "question":  "Boring bingo night turned into a wild bingo party when grandpa showed up with what?",
        "answers":  [
                        {
                            "text":  "booze/keg",
                            "points":  33
                        },
                        {
                            "text":  "drugs/acid",
                            "points":  25
                        },
                        {
                            "text":  "hot babe/stripper",
                            "points":  18
                        },
                        {
                            "text":  "no pants on!",
                            "points":  6
                        },
                        {
                            "text":  "music/a dj",
                            "points":  5
                        },
                        {
                            "text":  "animal/sheep",
                            "points":  3
                        },
                        {
                            "text":  "food/butterscotch",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140197,
        "question":  "Name something that might be floppy.",
        "answers":  [
                        {
                            "text":  "ears/bunny",
                            "points":  30
                        },
                        {
                            "text":  "floppy disk",
                            "points":  26
                        },
                        {
                            "text":  "hat/bonnet",
                            "points":  22
                        },
                        {
                            "text":  "wild boobs",
                            "points":  8
                        },
                        {
                            "text":  "his limp \"noodle\"",
                            "points":  2
                        },
                        {
                            "text":  "big ole belly",
                            "points":  2
                        },
                        {
                            "text":  "shoes/slippers",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140198,
        "question":  "We asked 100 married men... Name an animal with a bottom that's about the size of your mother-in-law's.",
        "answers":  [
                        {
                            "text":  "elephant",
                            "points":  25
                        },
                        {
                            "text":  "hippo",
                            "points":  21
                        },
                        {
                            "text":  "cow",
                            "points":  17
                        },
                        {
                            "text":  "ape/monkey",
                            "points":  11
                        },
                        {
                            "text":  "donkey/mule",
                            "points":  10
                        },
                        {
                            "text":  "dog",
                            "points":  5
                        },
                        {
                            "text":  "horse",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140199,
        "question":  "What does a baby do when you hold it that you'd be creeped out if your mate did it when you held them?",
        "answers":  [
                        {
                            "text":  "barf/spit up",
                            "points":  23
                        },
                        {
                            "text":  "pee/drop dookies",
                            "points":  21
                        },
                        {
                            "text":  "be gassy/burp",
                            "points":  17
                        },
                        {
                            "text":  "cry/whine",
                            "points":  10
                        },
                        {
                            "text":  "suckle ta-tas",
                            "points":  10
                        },
                        {
                            "text":  "drool",
                            "points":  7
                        },
                        {
                            "text":  "suck thumb/toe",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140200,
        "question":  "Name something a woman pretends to like until after she's married, then the party's over.",
        "answers":  [
                        {
                            "text":  "bow chicka wow wow",
                            "points":  51
                        },
                        {
                            "text":  "sports",
                            "points":  21
                        },
                        {
                            "text":  "her in-laws",
                            "points":  7
                        },
                        {
                            "text":  "same food/cook'g",
                            "points":  5
                        },
                        {
                            "text":  "his buds",
                            "points":  3
                        },
                        {
                            "text":  "him!",
                            "points":  2
                        },
                        {
                            "text":  "his corny jokes",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140201,
        "question":  "I think there's a ghost in my house and he's a prankster. He keeps turning on my what?",
        "answers":  [
                        {
                            "text":  "lights",
                            "points":  40
                        },
                        {
                            "text":  "tv",
                            "points":  24
                        },
                        {
                            "text":  "water/faucet",
                            "points":  7
                        },
                        {
                            "text":  "kitchen appliances",
                            "points":  7
                        },
                        {
                            "text":  "spouse/mate",
                            "points":  5
                        },
                        {
                            "text":  "radio/stereo",
                            "points":  5
                        },
                        {
                            "text":  "heat/ac",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140202,
        "question":  "Name something that Santa Claus might say was the hardest part of his job.",
        "answers":  [
                        {
                            "text":  "deliver/fly all night",
                            "points":  36
                        },
                        {
                            "text":  "chimneys",
                            "points":  27
                        },
                        {
                            "text":  "the kids",
                            "points":  9
                        },
                        {
                            "text":  "o.d. on cookies/milk",
                            "points":  8
                        },
                        {
                            "text":  "check list twice",
                            "points":  4
                        },
                        {
                            "text":  "reindeer/smell",
                            "points":  4
                        },
                        {
                            "text":  "north pole",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140203,
        "question":  "We asked 100 women... Name something you're thankful that you don't do like a man.",
        "answers":  [
                        {
                            "text":  "use the bathroom/pee",
                            "points":  35
                        },
                        {
                            "text":  "snore/grunt",
                            "points":  21
                        },
                        {
                            "text":  "shave",
                            "points":  15
                        },
                        {
                            "text":  "smell",
                            "points":  9
                        },
                        {
                            "text":  "fart contests",
                            "points":  5
                        },
                        {
                            "text":  "burp",
                            "points":  4
                        },
                        {
                            "text":  "\"pitch a tent\"",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140204,
        "question":  "We asked 100 women... When you first met your man, he gave you flowers. Now what does he give you?",
        "answers":  [
                        {
                            "text":  "headache/grief",
                            "points":  34
                        },
                        {
                            "text":  "nothing",
                            "points":  33
                        },
                        {
                            "text":  "kisses/hugs",
                            "points":  6
                        },
                        {
                            "text":  "flowers/dandelions",
                            "points":  6
                        },
                        {
                            "text":  "$$$/alimony",
                            "points":  5
                        },
                        {
                            "text":  "jewelry",
                            "points":  4
                        },
                        {
                            "text":  "candy",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140205,
        "question":  "Name something you might start doing in the nude if you had a perfect body.",
        "answers":  [
                        {
                            "text":  "sunbathe",
                            "points":  27
                        },
                        {
                            "text":  "swim",
                            "points":  25
                        },
                        {
                            "text":  "dance/striptease",
                            "points":  12
                        },
                        {
                            "text":  "pose/model",
                            "points":  8
                        },
                        {
                            "text":  "sleep",
                            "points":  7
                        },
                        {
                            "text":  "exercise/yoga",
                            "points":  6
                        },
                        {
                            "text":  "walk around",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  140206,
        "question":  "Name something both dogs and men never get tired of doing.",
        "answers":  [
                        {
                            "text":  "sleep/lie around",
                            "points":  25
                        },
                        {
                            "text":  "eating",
                            "points":  23
                        },
                        {
                            "text":  "chasing tail/sex",
                            "points":  19
                        },
                        {
                            "text":  "scratching",
                            "points":  8
                        },
                        {
                            "text":  "playing/fetch'g",
                            "points":  7
                        },
                        {
                            "text":  "pee/poop'g",
                            "points":  6
                        },
                        {
                            "text":  "bark/howl'g",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140207,
        "question":  "Name something a wife might smack her husband's bottom with.",
        "answers":  [
                        {
                            "text":  "hand",
                            "points":  53
                        },
                        {
                            "text":  "towel",
                            "points":  15
                        },
                        {
                            "text":  "spatula/spoon",
                            "points":  11
                        },
                        {
                            "text":  "flyswatter",
                            "points":  3
                        },
                        {
                            "text":  "newspaper/mag",
                            "points":  3
                        },
                        {
                            "text":  "shoe",
                            "points":  3
                        },
                        {
                            "text":  "whip",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140208,
        "question":  "Name a way a bridesmaid might ruin her friend's wedding.",
        "answers":  [
                        {
                            "text":  "seduce groom",
                            "points":  49
                        },
                        {
                            "text":  "drink till puke",
                            "points":  20
                        },
                        {
                            "text":  "sexy dress/in white",
                            "points":  7
                        },
                        {
                            "text":  "not show",
                            "points":  6
                        },
                        {
                            "text":  "gossip/complain",
                            "points":  4
                        },
                        {
                            "text":  "\"i'm engaged!\"",
                            "points":  2
                        },
                        {
                            "text":  "forget rings",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140209,
        "question":  "Name something most men try to do in a sexy way that they just look foolish.",
        "answers":  [
                        {
                            "text":  "dance/twerk",
                            "points":  45
                        },
                        {
                            "text":  "flirt/wink",
                            "points":  18
                        },
                        {
                            "text":  "strut",
                            "points":  11
                        },
                        {
                            "text":  "pose/in selfie",
                            "points":  5
                        },
                        {
                            "text":  "style hair",
                            "points":  4
                        },
                        {
                            "text":  "dress",
                            "points":  4
                        },
                        {
                            "text":  "strip",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140210,
        "question":  "Name a cute animal that makes a cute nickname for a cute woman.",
        "answers":  [
                        {
                            "text":  "kitty/cat",
                            "points":  43
                        },
                        {
                            "text":  "bunny/rabbit",
                            "points":  23
                        },
                        {
                            "text":  "bird/ducky",
                            "points":  10
                        },
                        {
                            "text":  "panda/bear",
                            "points":  8
                        },
                        {
                            "text":  "deer",
                            "points":  2
                        },
                        {
                            "text":  "otter",
                            "points":  2
                        },
                        {
                            "text":  "poodle/pup",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140211,
        "question":  "They say a woman is at her most beautiful when she's what?",
        "answers":  [
                        {
                            "text":  "preggo/delivering",
                            "points":  41
                        },
                        {
                            "text":  "happy/smiling",
                            "points":  18
                        },
                        {
                            "text":  "sleeping",
                            "points":  11
                        },
                        {
                            "text":  "in love",
                            "points":  7
                        },
                        {
                            "text":  "natural/no makeup",
                            "points":  6
                        },
                        {
                            "text":  "30/young",
                            "points":  4
                        },
                        {
                            "text":  "mad/ready to kill",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140212,
        "question":  "If you were in front of a firing squad, what might you ask for instead of a cigarette?",
        "answers":  [
                        {
                            "text":  "alcohol",
                            "points":  39
                        },
                        {
                            "text":  "burger/munchies",
                            "points":  20
                        },
                        {
                            "text":  "drugs/blunt",
                            "points":  9
                        },
                        {
                            "text":  "a pardon",
                            "points":  7
                        },
                        {
                            "text":  "forgiveness/prayer",
                            "points":  6
                        },
                        {
                            "text":  "shield/armor",
                            "points":  5
                        },
                        {
                            "text":  "loaded gun",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140213,
        "question":  "Name something you've popped.",
        "answers":  [
                        {
                            "text":  "balloon",
                            "points":  36
                        },
                        {
                            "text":  "popcorn",
                            "points":  14
                        },
                        {
                            "text":  "zit/my lover's",
                            "points":  12
                        },
                        {
                            "text":  "champagne/cork",
                            "points":  12
                        },
                        {
                            "text":  "bubble wrap",
                            "points":  9
                        },
                        {
                            "text":  "gum",
                            "points":  4
                        },
                        {
                            "text":  "button/on pants",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140214,
        "question":  "Name something a man puts on when he's trying to be sexy.",
        "answers":  [
                        {
                            "text":  "cologne",
                            "points":  33
                        },
                        {
                            "text":  "suit & tie/tux",
                            "points":  18
                        },
                        {
                            "text":  "tight shirt",
                            "points":  12
                        },
                        {
                            "text":  "thong/silk boxers",
                            "points":  9
                        },
                        {
                            "text":  "skinny jeans",
                            "points":  7
                        },
                        {
                            "text":  "short shorts",
                            "points":  6
                        },
                        {
                            "text":  "uniform/u.p.s.",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140215,
        "question":  "Name something you'd hate to find out a hotel maid did with a pair of your underwear.",
        "answers":  [
                        {
                            "text":  "wore/on head",
                            "points":  30
                        },
                        {
                            "text":  "cleaned/toilet",
                            "points":  21
                        },
                        {
                            "text":  "inhaled 'em",
                            "points":  19
                        },
                        {
                            "text":  "stole 'em",
                            "points":  6
                        },
                        {
                            "text":  "touched 'em",
                            "points":  6
                        },
                        {
                            "text":  "threw 'em out",
                            "points":  5
                        },
                        {
                            "text":  "displayed/on pole",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140216,
        "question":  "You must match exactly... When Santa got divorced, he tried to impress women by telling them, \"Hey... wanna see my ______?\"",
        "answers":  [
                        {
                            "text":  "sleigh",
                            "points":  29
                        },
                        {
                            "text":  "package/sack/toy",
                            "points":  24
                        },
                        {
                            "text":  "reindeer",
                            "points":  15
                        },
                        {
                            "text":  "elf/li'l helper",
                            "points":  7
                        },
                        {
                            "text":  "jelly belly",
                            "points":  5
                        },
                        {
                            "text":  "workshop",
                            "points":  5
                        },
                        {
                            "text":  "\"north pole\"",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140217,
        "question":  "Becky interrupted her date and said, \"Let's go back to the part where you said you have\" what?",
        "answers":  [
                        {
                            "text":  "millions",
                            "points":  29
                        },
                        {
                            "text":  "3 std's",
                            "points":  15
                        },
                        {
                            "text":  "house/island",
                            "points":  15
                        },
                        {
                            "text":  "kids/with 6 women",
                            "points":  13
                        },
                        {
                            "text":  "wife/hubby",
                            "points":  12
                        },
                        {
                            "text":  "job/as gigolo",
                            "points":  3
                        },
                        {
                            "text":  "limo/sweet ride",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140218,
        "question":  "We asked 100 men... Name something you do to treat a woman like a queen.",
        "answers":  [
                        {
                            "text":  "cook/b'fast in bed",
                            "points":  26
                        },
                        {
                            "text":  "buy flowers",
                            "points":  25
                        },
                        {
                            "text":  "rub/feet",
                            "points":  11
                        },
                        {
                            "text":  "buy jewelry",
                            "points":  9
                        },
                        {
                            "text":  "clean house",
                            "points":  8
                        },
                        {
                            "text":  "open doors",
                            "points":  7
                        },
                        {
                            "text":  "\"your majesty\" & bow",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140219,
        "question":  "Name an exercise that can really develop the muscles you need for lovemaking.",
        "answers":  [
                        {
                            "text":  "squats",
                            "points":  24
                        },
                        {
                            "text":  "sit-ups/crunches",
                            "points":  21
                        },
                        {
                            "text":  "kegels",
                            "points":  20
                        },
                        {
                            "text":  "push-ups",
                            "points":  15
                        },
                        {
                            "text":  "hip/pelvic thrusts",
                            "points":  6
                        },
                        {
                            "text":  "mouth flex",
                            "points":  2
                        },
                        {
                            "text":  "running",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140220,
        "question":  "If a man claimed to be Steve Harvey, how might you know that he's an imposter?",
        "answers":  [
                        {
                            "text":  "not black",
                            "points":  23
                        },
                        {
                            "text":  "blonde/not bald",
                            "points":  22
                        },
                        {
                            "text":  "tiny lips/bad teeth",
                            "points":  12
                        },
                        {
                            "text":  "no humor/charm",
                            "points":  10
                        },
                        {
                            "text":  "his voice",
                            "points":  10
                        },
                        {
                            "text":  "fake/no stache",
                            "points":  8
                        },
                        {
                            "text":  "clothes/cheap suit",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140221,
        "question":  "We asked 100 women... Your new man tells you that his fantasy is to be treated like a baby. So tell me what you're going to do to him.",
        "answers":  [
                        {
                            "text":  "feed & burp",
                            "points":  23
                        },
                        {
                            "text":  "dump the freak",
                            "points":  21
                        },
                        {
                            "text":  "cuddle/hug",
                            "points":  13
                        },
                        {
                            "text":  "put in bed/crib",
                            "points":  9
                        },
                        {
                            "text":  "spank him",
                            "points":  9
                        },
                        {
                            "text":  "give pacifier",
                            "points":  8
                        },
                        {
                            "text":  "diaper/powder",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  140222,
        "question":  "Name a bug that in some countries they nosh and in America they squash.",
        "answers":  [
                        {
                            "text":  "cockroach",
                            "points":  23
                        },
                        {
                            "text":  "cricket",
                            "points":  20
                        },
                        {
                            "text":  "grasshopper",
                            "points":  16
                        },
                        {
                            "text":  "ant",
                            "points":  14
                        },
                        {
                            "text":  "beetle",
                            "points":  8
                        },
                        {
                            "text":  "fly",
                            "points":  5
                        },
                        {
                            "text":  "mosquito",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140223,
        "question":  "Name something a really small cowboy would have that's really small.",
        "answers":  [
                        {
                            "text":  "pony",
                            "points":  29
                        },
                        {
                            "text":  "1/2 gallon hat",
                            "points":  27
                        },
                        {
                            "text":  "boots",
                            "points":  10
                        },
                        {
                            "text":  "lasso",
                            "points":  6
                        },
                        {
                            "text":  "belt/buckle",
                            "points":  6
                        },
                        {
                            "text":  "dingus",
                            "points":  6
                        },
                        {
                            "text":  "saddle",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140224,
        "question":  "What do you do in the bathtub that until now you've kept a secret?",
        "answers":  [
                        {
                            "text":  "\"rumble in my jungle\"",
                            "points":  26
                        },
                        {
                            "text":  "pee",
                            "points":  22
                        },
                        {
                            "text":  "sing",
                            "points":  18
                        },
                        {
                            "text":  "fart/booty jet spa",
                            "points":  10
                        },
                        {
                            "text":  "sleep",
                            "points":  9
                        },
                        {
                            "text":  "shave",
                            "points":  2
                        },
                        {
                            "text":  "play games/apps",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140225,
        "question":  "Name something an angry clown's wife might do to his big red nose.",
        "answers":  [
                        {
                            "text":  "squeeze/honk it",
                            "points":  26
                        },
                        {
                            "text":  "punch/slap it",
                            "points":  18
                        },
                        {
                            "text":  "pull it/yank off",
                            "points":  18
                        },
                        {
                            "text":  "smash/crush",
                            "points":  9
                        },
                        {
                            "text":  "throw it away",
                            "points":  7
                        },
                        {
                            "text":  "cut/impale it",
                            "points":  6
                        },
                        {
                            "text":  "burn/melt it",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140226,
        "question":  "Name someone grandpa hopes doesn't show up at his house unexpectedly right after he takes a Viagra.",
        "answers":  [
                        {
                            "text":  "kid/grandkid",
                            "points":  61
                        },
                        {
                            "text":  "clergy/missionary",
                            "points":  10
                        },
                        {
                            "text":  "his ex",
                            "points":  5
                        },
                        {
                            "text":  "grandma/from a trip",
                            "points":  4
                        },
                        {
                            "text":  "neighbor",
                            "points":  3
                        },
                        {
                            "text":  "his parents",
                            "points":  3
                        },
                        {
                            "text":  "salesperson",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140227,
        "question":  "Name something drastic a man might do to get out of marrying his girlfriend.",
        "answers":  [
                        {
                            "text":  "skip town",
                            "points":  26
                        },
                        {
                            "text":  "cheat/with her mom",
                            "points":  24
                        },
                        {
                            "text":  "fake his death",
                            "points":  18
                        },
                        {
                            "text":  "drink cyanide",
                            "points":  8
                        },
                        {
                            "text":  "\"illness\"/injury",
                            "points":  6
                        },
                        {
                            "text":  "enlist",
                            "points":  3
                        },
                        {
                            "text":  "say, \"i'm gay\"",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140228,
        "question":  "A woman might cancel a date ahead of time if she finds out about the guy's what?",
        "answers":  [
                        {
                            "text":  "wife/women",
                            "points":  54
                        },
                        {
                            "text":  "debt/no job",
                            "points":  14
                        },
                        {
                            "text":  "oozy std",
                            "points":  5
                        },
                        {
                            "text":  "victim count",
                            "points":  4
                        },
                        {
                            "text":  "nasty 'tude",
                            "points":  4
                        },
                        {
                            "text":  "man boobs",
                            "points":  3
                        },
                        {
                            "text":  "janky car",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140229,
        "question":  "We asked 100 women... You've met a man. He's perfect. Tell me why you won't marry him.",
        "answers":  [
                        {
                            "text":  "married",
                            "points":  47
                        },
                        {
                            "text":  "i'm anti-marriage",
                            "points":  15
                        },
                        {
                            "text":  "makes under 6-mil",
                            "points":  8
                        },
                        {
                            "text":  "lose my alimony",
                            "points":  6
                        },
                        {
                            "text":  "too perfect",
                            "points":  4
                        },
                        {
                            "text":  "too old/young",
                            "points":  4
                        },
                        {
                            "text":  "he's gay/i am",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140230,
        "question":  "Name an object in your home that you'd hate to discover was spying on you.",
        "answers":  [
                        {
                            "text":  "tv/cable box",
                            "points":  45
                        },
                        {
                            "text":  "computer",
                            "points":  15
                        },
                        {
                            "text":  "mirror",
                            "points":  9
                        },
                        {
                            "text":  "camera",
                            "points":  6
                        },
                        {
                            "text":  "alexa/digital asst.",
                            "points":  5
                        },
                        {
                            "text":  "light/lamp",
                            "points":  4
                        },
                        {
                            "text":  "toilet",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140231,
        "question":  "Fill in the blank: ______ daddy.",
        "answers":  [
                        {
                            "text":  "sugar daddy",
                            "points":  41
                        },
                        {
                            "text":  "big daddy",
                            "points":  19
                        },
                        {
                            "text":  "baby daddy",
                            "points":  12
                        },
                        {
                            "text":  "godaddy.com",
                            "points":  4
                        },
                        {
                            "text":  "mack daddy",
                            "points":  4
                        },
                        {
                            "text":  "my daddy",
                            "points":  4
                        },
                        {
                            "text":  "puff daddy",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140232,
        "question":  "You'd hate to be in the middle of what when you discover you have dog poop on your shoe?",
        "answers":  [
                        {
                            "text":  "work/interview",
                            "points":  41
                        },
                        {
                            "text":  "church",
                            "points":  13
                        },
                        {
                            "text":  "date/hookup",
                            "points":  10
                        },
                        {
                            "text":  "eating/buffet line",
                            "points":  8
                        },
                        {
                            "text":  "driving",
                            "points":  6
                        },
                        {
                            "text":  "house/new rug",
                            "points":  5
                        },
                        {
                            "text":  "dancing/a kick line",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140233,
        "question":  "It would be really embarrassing to fall asleep during what?",
        "answers":  [
                        {
                            "text":  "whoopee",
                            "points":  40
                        },
                        {
                            "text":  "church",
                            "points":  14
                        },
                        {
                            "text":  "work/zoom mtg.",
                            "points":  13
                        },
                        {
                            "text":  "wedding/mine",
                            "points":  6
                        },
                        {
                            "text":  "a first date",
                            "points":  6
                        },
                        {
                            "text":  "dinner",
                            "points":  4
                        },
                        {
                            "text":  "a funeral",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140234,
        "question":  "We asked 100 men... Name a specific part of your body that's as soft as a woman's.",
        "answers":  [
                        {
                            "text":  "my peach booty",
                            "points":  38
                        },
                        {
                            "text":  "my gut",
                            "points":  17
                        },
                        {
                            "text":  "my silky hands",
                            "points":  10
                        },
                        {
                            "text":  "luscious lips",
                            "points":  7
                        },
                        {
                            "text":  "my ears",
                            "points":  7
                        },
                        {
                            "text":  "my hairless arms",
                            "points":  4
                        },
                        {
                            "text":  "my face/cheeks",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140235,
        "question":  "If Marjorie Harvey told Steve to go slip into something more comfortable, name something he might slip into.",
        "answers":  [
                        {
                            "text":  "robe",
                            "points":  34
                        },
                        {
                            "text":  "nada!",
                            "points":  19
                        },
                        {
                            "text":  "footie pajamas",
                            "points":  10
                        },
                        {
                            "text":  "gold thong",
                            "points":  9
                        },
                        {
                            "text":  "sweats",
                            "points":  7
                        },
                        {
                            "text":  "the sheets",
                            "points":  4
                        },
                        {
                            "text":  "denim cutoffs",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140236,
        "question":  "Name a complaint that women might have about a male stripper they hired for a bachelorette party.",
        "answers":  [
                        {
                            "text":  "chubster",
                            "points":  28
                        },
                        {
                            "text":  "teeny weenie",
                            "points":  27
                        },
                        {
                            "text":  "repulsive face",
                            "points":  15
                        },
                        {
                            "text":  "chewbacca hairy",
                            "points":  6
                        },
                        {
                            "text":  "can't dance",
                            "points":  4
                        },
                        {
                            "text":  "too touchy/close",
                            "points":  4
                        },
                        {
                            "text":  "stinks/like cheese",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140237,
        "question":  "Name someone you should never talk to if you've had too many drinks.",
        "answers":  [
                        {
                            "text":  "my boss",
                            "points":  26
                        },
                        {
                            "text":  "my ex",
                            "points":  18
                        },
                        {
                            "text":  "the po-po",
                            "points":  15
                        },
                        {
                            "text":  "mom/dad",
                            "points":  9
                        },
                        {
                            "text":  "hot date/crush",
                            "points":  8
                        },
                        {
                            "text":  "spouse",
                            "points":  6
                        },
                        {
                            "text":  "clergy/pastor pete",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140238,
        "question":  "Name something a wife might admit she loves more than she loves her husband.",
        "answers":  [
                        {
                            "text":  "$$$/a penny",
                            "points":  24
                        },
                        {
                            "text":  "kids",
                            "points":  19
                        },
                        {
                            "text":  "pet/dog next door",
                            "points":  17
                        },
                        {
                            "text":  "food/liver",
                            "points":  12
                        },
                        {
                            "text":  "clothes",
                            "points":  7
                        },
                        {
                            "text":  "herself",
                            "points":  4
                        },
                        {
                            "text":  "another stud",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140239,
        "question":  "A juggler's obituary might read, \"He died while trying to juggle\" what?",
        "answers":  [
                        {
                            "text":  "knives/swords",
                            "points":  33
                        },
                        {
                            "text":  "chain saws",
                            "points":  15
                        },
                        {
                            "text":  "fire/torches",
                            "points":  11
                        },
                        {
                            "text":  "bowl'g balls/balls",
                            "points":  9
                        },
                        {
                            "text":  "bombs",
                            "points":  7
                        },
                        {
                            "text":  "too many women",
                            "points":  6
                        },
                        {
                            "text":  "his hairy berries",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140240,
        "question":  "Name someone you might worry will actually dance on your grave someday.",
        "answers":  [
                        {
                            "text":  "my ex",
                            "points":  32
                        },
                        {
                            "text":  "my spouse/mate",
                            "points":  19
                        },
                        {
                            "text":  "my sibling",
                            "points":  11
                        },
                        {
                            "text":  "my kid",
                            "points":  8
                        },
                        {
                            "text":  "satan",
                            "points":  6
                        },
                        {
                            "text":  "my in-laws",
                            "points":  6
                        },
                        {
                            "text":  "my friends",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140241,
        "question":  "You sent an anonymous text to your boss. It might say \"You have the worst\" what?",
        "answers":  [
                        {
                            "text":  "breath/b.o.",
                            "points":  30
                        },
                        {
                            "text":  "'tude/temper",
                            "points":  30
                        },
                        {
                            "text":  "management skills",
                            "points":  13
                        },
                        {
                            "text":  "integrity/work ethic",
                            "points":  4
                        },
                        {
                            "text":  "employees",
                            "points":  3
                        },
                        {
                            "text":  "manners",
                            "points":  3
                        },
                        {
                            "text":  "clothes. ever.",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140242,
        "question":  "We asked 100 men... Fill in the blank: Be honest -- most women think you are ______.",
        "answers":  [
                        {
                            "text":  "nice/charming",
                            "points":  26
                        },
                        {
                            "text":  "smokin' hot",
                            "points":  18
                        },
                        {
                            "text":  "einstein-smart",
                            "points":  14
                        },
                        {
                            "text":  "cute enough",
                            "points":  11
                        },
                        {
                            "text":  "funny/silly",
                            "points":  8
                        },
                        {
                            "text":  "boring/lame",
                            "points":  6
                        },
                        {
                            "text":  "dumber than dirt",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140243,
        "question":  "Name something grandpa gets into that he hopes he can get out of.",
        "answers":  [
                        {
                            "text":  "tub/bathroom",
                            "points":  21
                        },
                        {
                            "text":  "trouble",
                            "points":  15
                        },
                        {
                            "text":  "recliner",
                            "points":  12
                        },
                        {
                            "text":  "car",
                            "points":  12
                        },
                        {
                            "text":  "bed",
                            "points":  11
                        },
                        {
                            "text":  "pants/overalls",
                            "points":  8
                        },
                        {
                            "text":  "nursing home",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  140244,
        "question":  "A man might actually like his mother-in-law if she had what?",
        "answers":  [
                        {
                            "text":  "money",
                            "points":  40
                        },
                        {
                            "text":  "humor/charm",
                            "points":  15
                        },
                        {
                            "text":  "looks/fine booty",
                            "points":  10
                        },
                        {
                            "text":  "a heart",
                            "points":  7
                        },
                        {
                            "text":  "no voice",
                            "points":  5
                        },
                        {
                            "text":  "own home/in siberia",
                            "points":  4
                        },
                        {
                            "text":  "tasty food",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140245,
        "question":  "Name something a teenage girl hopes her dad doesn't wear when she invites friends over.",
        "answers":  [
                        {
                            "text":  "undies/lingerie",
                            "points":  33
                        },
                        {
                            "text":  "short shorts",
                            "points":  19
                        },
                        {
                            "text":  "speedo",
                            "points":  10
                        },
                        {
                            "text":  "tank top",
                            "points":  9
                        },
                        {
                            "text":  "robe/pj's",
                            "points":  7
                        },
                        {
                            "text":  "her prom dress",
                            "points":  4
                        },
                        {
                            "text":  "b-day suit",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140246,
        "question":  "Name something a fisherman has that makes women think he's the catch of the day.",
        "answers":  [
                        {
                            "text":  "boat/fleet",
                            "points":  30
                        },
                        {
                            "text":  "fresh catch",
                            "points":  18
                        },
                        {
                            "text":  "strong bod",
                            "points":  11
                        },
                        {
                            "text":  "big/long pole",
                            "points":  9
                        },
                        {
                            "text":  "rugged face/beard",
                            "points":  8
                        },
                        {
                            "text":  "money",
                            "points":  5
                        },
                        {
                            "text":  "lure/juicy worm",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140247,
        "question":  "We asked 100 women... Your guy is no Superman. But what does he do faster than a speeding bullet?",
        "answers":  [
                        {
                            "text":  "fall asleep/snore",
                            "points":  26
                        },
                        {
                            "text":  "boink",
                            "points":  21
                        },
                        {
                            "text":  "eat",
                            "points":  19
                        },
                        {
                            "text":  "disappear",
                            "points":  5
                        },
                        {
                            "text":  "chug booze",
                            "points":  5
                        },
                        {
                            "text":  "drive",
                            "points":  5
                        },
                        {
                            "text":  "talk/lie",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140248,
        "question":  "You're in the middle of a kiss. Your lover pushes you away. What happened?",
        "answers":  [
                        {
                            "text":  "whiff of bad breath",
                            "points":  24
                        },
                        {
                            "text":  "massive burp",
                            "points":  23
                        },
                        {
                            "text":  "bite/bloody",
                            "points":  15
                        },
                        {
                            "text":  "fart attack",
                            "points":  13
                        },
                        {
                            "text":  "threw up",
                            "points":  4
                        },
                        {
                            "text":  "phone/his wife",
                            "points":  3
                        },
                        {
                            "text":  "chewing gum",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140249,
        "question":  "Name a place you'd hate to be on Christmas Day.",
        "answers":  [
                        {
                            "text":  "jail w/ bubba",
                            "points":  23
                        },
                        {
                            "text":  "work/on st. corner",
                            "points":  19
                        },
                        {
                            "text":  "airport/plane",
                            "points":  18
                        },
                        {
                            "text":  "hospital",
                            "points":  11
                        },
                        {
                            "text":  "church",
                            "points":  5
                        },
                        {
                            "text":  "store/mall",
                            "points":  5
                        },
                        {
                            "text":  "the in-laws'",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140250,
        "question":  "Name an amusement park ride that might be fun to make love on while riding it.",
        "answers":  [
                        {
                            "text":  "ferris wheel",
                            "points":  36
                        },
                        {
                            "text":  "roller coaster",
                            "points":  22
                        },
                        {
                            "text":  "carousel",
                            "points":  10
                        },
                        {
                            "text":  "small world",
                            "points":  4
                        },
                        {
                            "text":  "log flume",
                            "points":  4
                        },
                        {
                            "text":  "tunnel of love",
                            "points":  4
                        },
                        {
                            "text":  "swing/viking ship",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140251,
        "question":  "We asked 100 men... Fill in the blank: I love my wife even though I hate her ______.",
        "answers":  [
                        {
                            "text":  "mother/family",
                            "points":  28
                        },
                        {
                            "text":  "temper/'tude",
                            "points":  16
                        },
                        {
                            "text":  "spending",
                            "points":  12
                        },
                        {
                            "text":  "nagging",
                            "points":  12
                        },
                        {
                            "text":  "snoring",
                            "points":  7
                        },
                        {
                            "text":  "body/man feet",
                            "points":  5
                        },
                        {
                            "text":  "cooking",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140252,
        "question":  "Name someone you had better be nice to because they know things about you.",
        "answers":  [
                        {
                            "text":  "my bestie",
                            "points":  28
                        },
                        {
                            "text":  "my sibling",
                            "points":  14
                        },
                        {
                            "text":  "my bae",
                            "points":  13
                        },
                        {
                            "text":  "my parents",
                            "points":  11
                        },
                        {
                            "text":  "santa",
                            "points":  9
                        },
                        {
                            "text":  "my boss",
                            "points":  5
                        },
                        {
                            "text":  "doc/at std clinic",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140253,
        "question":  "In the big barnyard of life, what farm animal do you think you've become?",
        "answers":  [
                        {
                            "text":  "cow/bull",
                            "points":  23
                        },
                        {
                            "text":  "horse",
                            "points":  15
                        },
                        {
                            "text":  "pig",
                            "points":  13
                        },
                        {
                            "text":  "chicken/rooster",
                            "points":  11
                        },
                        {
                            "text":  "sheep/lamb",
                            "points":  10
                        },
                        {
                            "text":  "donkey/mule",
                            "points":  6
                        },
                        {
                            "text":  "sheepdog",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  140254,
        "question":  "Name something specific a driving instructor might say to his student and to his mate in bed.",
        "answers":  [
                        {
                            "text":  "slow down!",
                            "points":  44
                        },
                        {
                            "text":  "stop/brake!",
                            "points":  23
                        },
                        {
                            "text":  "go faster!",
                            "points":  4
                        },
                        {
                            "text":  "good job!",
                            "points":  4
                        },
                        {
                            "text":  "move over!",
                            "points":  3
                        },
                        {
                            "text":  "careful/watch out!",
                            "points":  3
                        },
                        {
                            "text":  "park it right there!",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140255,
        "question":  "Name an animal starting with S that a wife might say her husband reminds her of in bed.",
        "answers":  [
                        {
                            "text":  "snake/serpent",
                            "points":  39
                        },
                        {
                            "text":  "sloth",
                            "points":  18
                        },
                        {
                            "text":  "stallion",
                            "points":  9
                        },
                        {
                            "text":  "shark",
                            "points":  7
                        },
                        {
                            "text":  "skunk",
                            "points":  4
                        },
                        {
                            "text":  "squirrel",
                            "points":  3
                        },
                        {
                            "text":  "sheep",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140256,
        "question":  "Fill in the blank: In hell, you only get to ______ once a year.",
        "answers":  [
                        {
                            "text":  "bathe",
                            "points":  30
                        },
                        {
                            "text":  "drink/ice water",
                            "points":  19
                        },
                        {
                            "text":  "sleep/rest",
                            "points":  14
                        },
                        {
                            "text":  "eat",
                            "points":  9
                        },
                        {
                            "text":  "make fiery whoopee",
                            "points":  4
                        },
                        {
                            "text":  "laugh/smile",
                            "points":  4
                        },
                        {
                            "text":  "whiz/dump",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140257,
        "question":  "Name an animal a man actually likes women to compare him to.",
        "answers":  [
                        {
                            "text":  "stallion/horse",
                            "points":  24
                        },
                        {
                            "text":  "tiger",
                            "points":  20
                        },
                        {
                            "text":  "lion",
                            "points":  14
                        },
                        {
                            "text":  "dog",
                            "points":  9
                        },
                        {
                            "text":  "cougar/panther",
                            "points":  6
                        },
                        {
                            "text":  "fox/silver fox",
                            "points":  5
                        },
                        {
                            "text":  "cat",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140258,
        "question":  "Name something about you that you worry your friends are making fun of.",
        "answers":  [
                        {
                            "text":  "body/weight",
                            "points":  37
                        },
                        {
                            "text":  "hair/bald",
                            "points":  18
                        },
                        {
                            "text":  "face/snaggleteeth",
                            "points":  11
                        },
                        {
                            "text":  "clothes/crocs",
                            "points":  8
                        },
                        {
                            "text":  "dumbo ears",
                            "points":  3
                        },
                        {
                            "text":  "job/as ho",
                            "points":  3
                        },
                        {
                            "text":  "the way i talk",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140259,
        "question":  "Name something you'd be surprised that your boss wants to borrow from you.",
        "answers":  [
                        {
                            "text":  "$217,000",
                            "points":  31
                        },
                        {
                            "text":  "my caddy deville",
                            "points":  21
                        },
                        {
                            "text":  "my sweetie",
                            "points":  12
                        },
                        {
                            "text":  "clothes/panties",
                            "points":  7
                        },
                        {
                            "text":  "computer",
                            "points":  4
                        },
                        {
                            "text":  "phone",
                            "points":  4
                        },
                        {
                            "text":  "ideas/notes",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140260,
        "question":  "We asked 100 women... You love your dog. And sometimes you wish your husband would do what just like your dog?",
        "answers":  [
                        {
                            "text":  "listen/obey",
                            "points":  27
                        },
                        {
                            "text":  "cuddle & lick me",
                            "points":  21
                        },
                        {
                            "text":  "walk/heel",
                            "points":  10
                        },
                        {
                            "text":  "be loyal",
                            "points":  8
                        },
                        {
                            "text":  "happy to see me",
                            "points":  7
                        },
                        {
                            "text":  "sleep 16 hours",
                            "points":  5
                        },
                        {
                            "text":  "protect me",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140261,
        "question":  "We asked 100 men... Name something you would not do on a first date.",
        "answers":  [
                        {
                            "text":  "propose/tie knot",
                            "points":  26
                        },
                        {
                            "text":  "\"sugar the cookie\"",
                            "points":  21
                        },
                        {
                            "text":  "kiss",
                            "points":  14
                        },
                        {
                            "text":  "get drunk",
                            "points":  9
                        },
                        {
                            "text":  "go steady",
                            "points":  4
                        },
                        {
                            "text":  "brag",
                            "points":  4
                        },
                        {
                            "text":  "fart/more than once",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140262,
        "question":  "Name somewhere Santa hides his stash of marijuana.",
        "answers":  [
                        {
                            "text":  "his sleigh",
                            "points":  26
                        },
                        {
                            "text":  "his hat",
                            "points":  17
                        },
                        {
                            "text":  "his beard",
                            "points":  14
                        },
                        {
                            "text":  "his toy sack",
                            "points":  9
                        },
                        {
                            "text":  "kids' chimneys",
                            "points":  6
                        },
                        {
                            "text":  "stocking",
                            "points":  5
                        },
                        {
                            "text":  "reindeer stable",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140263,
        "question":  "Name a baked good that a baker might call a woman when he's flirting with her.",
        "answers":  [
                        {
                            "text":  "cupcake/cake",
                            "points":  32
                        },
                        {
                            "text":  "buns/honey bun",
                            "points":  16
                        },
                        {
                            "text":  "cookie",
                            "points":  14
                        },
                        {
                            "text":  "pie/sugar pie",
                            "points":  6
                        },
                        {
                            "text":  "muffin",
                            "points":  5
                        },
                        {
                            "text":  "roll/sweet roll",
                            "points":  5
                        },
                        {
                            "text":  "cream puff",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140264,
        "question":  "Name a sport whose players have dad bods.",
        "answers":  [
                        {
                            "text":  "bowling",
                            "points":  30
                        },
                        {
                            "text":  "golf",
                            "points":  15
                        },
                        {
                            "text":  "football",
                            "points":  14
                        },
                        {
                            "text":  "wrestling/sumo",
                            "points":  11
                        },
                        {
                            "text":  "baseball",
                            "points":  5
                        },
                        {
                            "text":  "curling",
                            "points":  3
                        },
                        {
                            "text":  "darts",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140265,
        "question":  "Name someone you'd be surprised to hear was Queen Elizabeth's favorite rapper.",
        "answers":  [
                        {
                            "text":  "snoop dogg",
                            "points":  26
                        },
                        {
                            "text":  "eminem",
                            "points":  16
                        },
                        {
                            "text":  "kanye west",
                            "points":  12
                        },
                        {
                            "text":  "tupac",
                            "points":  8
                        },
                        {
                            "text":  "jay-z",
                            "points":  8
                        },
                        {
                            "text":  "ice-t",
                            "points":  6
                        },
                        {
                            "text":  "50 cent",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140266,
        "question":  "You're in bed. You hear sounds coming from your closet. What do you do?",
        "answers":  [
                        {
                            "text":  "check it out",
                            "points":  22
                        },
                        {
                            "text":  "run!",
                            "points":  18
                        },
                        {
                            "text":  "get gun/weapon",
                            "points":  11
                        },
                        {
                            "text":  "hide/under covers",
                            "points":  10
                        },
                        {
                            "text":  "make wife/mate check",
                            "points":  8
                        },
                        {
                            "text":  "ignore/sleep",
                            "points":  7
                        },
                        {
                            "text":  "scream",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140267,
        "question":  "We asked 100 women... If you knew Steve Harvey was at your door, you'd answer it wearing what?",
        "answers":  [
                        {
                            "text":  "nada/a smile",
                            "points":  18
                        },
                        {
                            "text":  "vinyl lingerie",
                            "points":  17
                        },
                        {
                            "text":  "skinny jeans",
                            "points":  17
                        },
                        {
                            "text":  "dress/ball gown",
                            "points":  12
                        },
                        {
                            "text":  "robe/jammies",
                            "points":  9
                        },
                        {
                            "text":  "sweats",
                            "points":  4
                        },
                        {
                            "text":  "hat/floral bonnet",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140268,
        "question":  "Name something a man's mother-in-law has that makes him suspect she's a witch.",
        "answers":  [
                        {
                            "text":  "broom",
                            "points":  40
                        },
                        {
                            "text":  "big warty nose",
                            "points":  14
                        },
                        {
                            "text":  "book/of spells",
                            "points":  7
                        },
                        {
                            "text":  "voodoo doll",
                            "points":  7
                        },
                        {
                            "text":  "cauldron",
                            "points":  6
                        },
                        {
                            "text":  "pointy hat/clothes",
                            "points":  3
                        },
                        {
                            "text":  "black cat",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140269,
        "question":  "Name something you shouldn't use to get the wax out of your ears.",
        "answers":  [
                        {
                            "text":  "q-tip",
                            "points":  29
                        },
                        {
                            "text":  "knife/silverware",
                            "points":  12
                        },
                        {
                            "text":  "pen/pencil",
                            "points":  10
                        },
                        {
                            "text":  "bobby pin",
                            "points":  9
                        },
                        {
                            "text":  "finger/date's finger",
                            "points":  8
                        },
                        {
                            "text":  "drill/tool",
                            "points":  8
                        },
                        {
                            "text":  "stick/chopstick",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140270,
        "question":  "If you were an octopus, name something you could do to eight people all at once.",
        "answers":  [
                        {
                            "text":  "slap 'em",
                            "points":  26
                        },
                        {
                            "text":  "hug 'em",
                            "points":  21
                        },
                        {
                            "text":  "tickle 'em",
                            "points":  12
                        },
                        {
                            "text":  "choke 'em",
                            "points":  8
                        },
                        {
                            "text":  "fondle 'em",
                            "points":  6
                        },
                        {
                            "text":  "shake hands",
                            "points":  4
                        },
                        {
                            "text":  "rub/scratch",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140271,
        "question":  "Fill in the blank: I just saw a woman steal two live ______s from the pet store and hide them in her bra.",
        "answers":  [
                        {
                            "text":  "hamsters/gerbils",
                            "points":  18
                        },
                        {
                            "text":  "puppies",
                            "points":  15
                        },
                        {
                            "text":  "snakes",
                            "points":  12
                        },
                        {
                            "text":  "mice/rats",
                            "points":  12
                        },
                        {
                            "text":  "birds",
                            "points":  9
                        },
                        {
                            "text":  "lizards",
                            "points":  7
                        },
                        {
                            "text":  "kittens",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  140272,
        "question":  "Name something that makes everything taste better.",
        "answers":  [
                        {
                            "text":  "salt",
                            "points":  28
                        },
                        {
                            "text":  "butter",
                            "points":  13
                        },
                        {
                            "text":  "sugar",
                            "points":  9
                        },
                        {
                            "text":  "bacon",
                            "points":  8
                        },
                        {
                            "text":  "chocolate",
                            "points":  7
                        },
                        {
                            "text":  "ketchup",
                            "points":  6
                        },
                        {
                            "text":  "cheese/limburger",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140273,
        "question":  "Name an animal some people compare lawyers to.",
        "answers":  [
                        {
                            "text":  "shark",
                            "points":  26
                        },
                        {
                            "text":  "snake",
                            "points":  23
                        },
                        {
                            "text":  "jackass/mule",
                            "points":  7
                        },
                        {
                            "text":  "pig",
                            "points":  7
                        },
                        {
                            "text":  "rat",
                            "points":  5
                        },
                        {
                            "text":  "weasel",
                            "points":  4
                        },
                        {
                            "text":  "wolf",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140274,
        "question":  "Name a party game that they love to play at the nudist colony.",
        "answers":  [
                        {
                            "text":  "twister",
                            "points":  30
                        },
                        {
                            "text":  "spin the bottle",
                            "points":  12
                        },
                        {
                            "text":  "charades",
                            "points":  8
                        },
                        {
                            "text":  "poker",
                            "points":  7
                        },
                        {
                            "text":  "pin the tail...",
                            "points":  6
                        },
                        {
                            "text":  "tag",
                            "points":  5
                        },
                        {
                            "text":  "volleyball",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140275,
        "question":  "Name something you have two of but one is better than the other.",
        "answers":  [
                        {
                            "text":  "cars",
                            "points":  24
                        },
                        {
                            "text":  "eyes",
                            "points":  13
                        },
                        {
                            "text":  "kids/twins",
                            "points":  11
                        },
                        {
                            "text":  "shoes/clothes",
                            "points":  7
                        },
                        {
                            "text":  "hands",
                            "points":  7
                        },
                        {
                            "text":  "boobs",
                            "points":  6
                        },
                        {
                            "text":  "mates/lovers",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140276,
        "question":  "Name a dead music legend that you'd like to see perform again as a hologram.",
        "answers":  [
                        {
                            "text":  "elvis",
                            "points":  23
                        },
                        {
                            "text":  "michael jackson",
                            "points":  16
                        },
                        {
                            "text":  "jimi hendrix",
                            "points":  10
                        },
                        {
                            "text":  "freddie mercury",
                            "points":  9
                        },
                        {
                            "text":  "prince",
                            "points":  7
                        },
                        {
                            "text":  "tupac",
                            "points":  3
                        },
                        {
                            "text":  "whitney",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140277,
        "question":  "Name someone in your life you are most afraid of.",
        "answers":  [
                        {
                            "text":  "mommy/daddy dearest",
                            "points":  29
                        },
                        {
                            "text":  "psycho mate",
                            "points":  13
                        },
                        {
                            "text":  "i fear no one",
                            "points":  9
                        },
                        {
                            "text":  "unhinged boss",
                            "points":  6
                        },
                        {
                            "text":  "satan",
                            "points":  5
                        },
                        {
                            "text":  "deranged sibling",
                            "points":  4
                        },
                        {
                            "text":  "my inner self",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140278,
        "question":  "In your mind, you run like a deer. In reality, you run like what animal?",
        "answers":  [
                        {
                            "text":  "turtle",
                            "points":  22
                        },
                        {
                            "text":  "sloth",
                            "points":  19
                        },
                        {
                            "text":  "duck/bird",
                            "points":  8
                        },
                        {
                            "text":  "dog",
                            "points":  5
                        },
                        {
                            "text":  "cat",
                            "points":  5
                        },
                        {
                            "text":  "snail",
                            "points":  5
                        },
                        {
                            "text":  "cow/bull",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140279,
        "question":  "This is a morbid thought, but name something you might be holding in your hand on the day you die.",
        "answers":  [
                        {
                            "text":  "someone's hand",
                            "points":  20
                        },
                        {
                            "text":  "cell phone",
                            "points":  10
                        },
                        {
                            "text":  "bible",
                            "points":  8
                        },
                        {
                            "text":  "remote",
                            "points":  8
                        },
                        {
                            "text":  "food/fork",
                            "points":  7
                        },
                        {
                            "text":  "beer",
                            "points":  5
                        },
                        {
                            "text":  "my chest",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140280,
        "question":  "Name something you have more of than your parents do.",
        "answers":  [
                        {
                            "text":  "money",
                            "points":  15
                        },
                        {
                            "text":  "years left/youth",
                            "points":  15
                        },
                        {
                            "text":  "kids",
                            "points":  8
                        },
                        {
                            "text":  "bills/debt",
                            "points":  8
                        },
                        {
                            "text":  "clothes/shoes",
                            "points":  6
                        },
                        {
                            "text":  "patience",
                            "points":  5
                        },
                        {
                            "text":  "sex",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140281,
        "question":  "If Steve Harvey were a dog, what kind of dog would he be?",
        "answers":  [
                        {
                            "text":  "chocolate lab",
                            "points":  18
                        },
                        {
                            "text":  "bulldog",
                            "points":  12
                        },
                        {
                            "text":  "boxer",
                            "points":  7
                        },
                        {
                            "text":  "rottweiler",
                            "points":  5
                        },
                        {
                            "text":  "basset hound",
                            "points":  5
                        },
                        {
                            "text":  "bloodhound",
                            "points":  5
                        },
                        {
                            "text":  "st. bernard",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140282,
        "question":  "We asked 100 men... Where's the number one place you are when you think about sex?",
        "answers":  [
                        {
                            "text":  "bedroom/home",
                            "points":  80
                        },
                        {
                            "text":  "work",
                            "points":  9
                        },
                        {
                            "text":  "bar/dance club",
                            "points":  3
                        },
                        {
                            "text":  "the car",
                            "points":  3
                        },
                        {
                            "text":  "beach/nude one",
                            "points":  3
                        },
                        {
                            "text":  "earth/everywhere",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140283,
        "question":  "We asked 100 married men... Between us, what do you reach for when you see your wife leave the house?",
        "answers":  [
                        {
                            "text":  "the remote",
                            "points":  55
                        },
                        {
                            "text":  "beer",
                            "points":  26
                        },
                        {
                            "text":  "phone/call side babe",
                            "points":  10
                        },
                        {
                            "text":  "snacks",
                            "points":  5
                        },
                        {
                            "text":  "wallet",
                            "points":  2
                        },
                        {
                            "text":  "her clothes/to wear",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140284,
        "question":  "We asked 100 women... What would you hate to find out about an ex-lover when you Google his name?",
        "answers":  [
                        {
                            "text":  "serial killer/con",
                            "points":  46
                        },
                        {
                            "text":  "he's ballin'",
                            "points":  19
                        },
                        {
                            "text":  "heavily diseased",
                            "points":  14
                        },
                        {
                            "text":  "married/to j.lo",
                            "points":  13
                        },
                        {
                            "text":  "dead/worm food",
                            "points":  5
                        },
                        {
                            "text":  "gay/dates other ex",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140285,
        "question":  "In an all-nude orchestra, what instrument would offer little coverage?",
        "answers":  [
                        {
                            "text":  "flute/piccolo",
                            "points":  73
                        },
                        {
                            "text":  "violin/fiddle",
                            "points":  12
                        },
                        {
                            "text":  "triangle",
                            "points":  6
                        },
                        {
                            "text":  "clarinet",
                            "points":  3
                        },
                        {
                            "text":  "trumpet",
                            "points":  3
                        },
                        {
                            "text":  "harmonica",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140286,
        "question":  "The farmer slept in the barn after he told his wife she reminds him of what farm animal?",
        "answers":  [
                        {
                            "text":  "bessie the cow",
                            "points":  54
                        },
                        {
                            "text":  "juicy pig",
                            "points":  32
                        },
                        {
                            "text":  "stubborn donkey",
                            "points":  5
                        },
                        {
                            "text":  "raucous chicken",
                            "points":  4
                        },
                        {
                            "text":  "woolly sheep",
                            "points":  2
                        },
                        {
                            "text":  "nagging goat",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140287,
        "question":  "Name something the Wicked Witch of the West envied about Glinda the Good Witch.",
        "answers":  [
                        {
                            "text":  "cute face",
                            "points":  51
                        },
                        {
                            "text":  "chic outfit/crown",
                            "points":  18
                        },
                        {
                            "text":  "good/loved",
                            "points":  15
                        },
                        {
                            "text":  "hot ginger hair",
                            "points":  9
                        },
                        {
                            "text":  "always cheery",
                            "points":  4
                        },
                        {
                            "text":  "bigger boobs",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140288,
        "question":  "Name a reason you might remove your pants quickly.",
        "answers":  [
                        {
                            "text":  "explosive dump/pee",
                            "points":  47
                        },
                        {
                            "text":  "caught fire",
                            "points":  19
                        },
                        {
                            "text":  "ants/bugs",
                            "points":  14
                        },
                        {
                            "text":  "to bop a hottie",
                            "points":  8
                        },
                        {
                            "text":  "dirty/wet",
                            "points":  7
                        },
                        {
                            "text":  "hot/cool off",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140289,
        "question":  "Not that you need one, but which of the seven dwarfs would you least like to have as your defense lawyer?",
        "answers":  [
                        {
                            "text":  "dopey",
                            "points":  44
                        },
                        {
                            "text":  "sleepy",
                            "points":  28
                        },
                        {
                            "text":  "grumpy",
                            "points":  14
                        },
                        {
                            "text":  "bashful",
                            "points":  6
                        },
                        {
                            "text":  "doc",
                            "points":  5
                        },
                        {
                            "text":  "happy",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140290,
        "question":  "We asked 100 married men... Name something you'd do if your wife said she's pregnant with triplets.",
        "answers":  [
                        {
                            "text":  "have a drink/or ten",
                            "points":  41
                        },
                        {
                            "text":  "faint",
                            "points":  24
                        },
                        {
                            "text":  "cry/scream",
                            "points":  18
                        },
                        {
                            "text":  "leave her",
                            "points":  7
                        },
                        {
                            "text":  "smile/laugh",
                            "points":  6
                        },
                        {
                            "text":  "never retire",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140291,
        "question":  "If your house were recently a crime scene, what would you do to get it ready for sale?",
        "answers":  [
                        {
                            "text":  "clean/bleach it",
                            "points":  66
                        },
                        {
                            "text":  "paint it",
                            "points":  15
                        },
                        {
                            "text":  "new carpet/floors",
                            "points":  8
                        },
                        {
                            "text":  "list it/pics",
                            "points":  5
                        },
                        {
                            "text":  "hype crime/haunted",
                            "points":  2
                        },
                        {
                            "text":  "remove police tape",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140292,
        "question":  "Name something you don't stick your finger in, at least when someone's looking at you.",
        "answers":  [
                        {
                            "text":  "booger bakery",
                            "points":  66
                        },
                        {
                            "text":  "mouth/pie hole",
                            "points":  13
                        },
                        {
                            "text":  "bowel canal",
                            "points":  8
                        },
                        {
                            "text":  "food/peanut butter",
                            "points":  7
                        },
                        {
                            "text":  "undies/pants",
                            "points":  2
                        },
                        {
                            "text":  "ear",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140293,
        "question":  "Name something Cinderella told her friends happened to her that they found unbelievable.",
        "answers":  [
                        {
                            "text":  "met prince",
                            "points":  62
                        },
                        {
                            "text":  "pumpkin coach",
                            "points":  13
                        },
                        {
                            "text":  "glass slippers",
                            "points":  11
                        },
                        {
                            "text":  "mice pals/made dress",
                            "points":  8
                        },
                        {
                            "text":  "fairy godmother",
                            "points":  2
                        },
                        {
                            "text":  "went to ball",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140294,
        "question":  "Loser Bob bragged to the florist that the flowers he's buying are for his sexy girlfriend. Who are they really for?",
        "answers":  [
                        {
                            "text":  "his mom",
                            "points":  60
                        },
                        {
                            "text":  "his wife",
                            "points":  19
                        },
                        {
                            "text":  "himself",
                            "points":  8
                        },
                        {
                            "text":  "his boss/coworker",
                            "points":  6
                        },
                        {
                            "text":  "his sister",
                            "points":  3
                        },
                        {
                            "text":  "his sexy boyfriend",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140295,
        "question":  "Fill in the blank: A married woman might say, \"I never ever want to find another woman's ______ on my husband.\"",
        "answers":  [
                        {
                            "text":  "lipstick",
                            "points":  52
                        },
                        {
                            "text":  "perfume/stank",
                            "points":  22
                        },
                        {
                            "text":  "hair",
                            "points":  8
                        },
                        {
                            "text":  "panties/clothes",
                            "points":  6
                        },
                        {
                            "text":  "lips/mouth",
                            "points":  6
                        },
                        {
                            "text":  "hands/arms",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140296,
        "question":  "We asked 100 women... Name an article of clothing it would take a man an hour to get off of you.",
        "answers":  [
                        {
                            "text":  "bra",
                            "points":  52
                        },
                        {
                            "text":  "corset/spanx",
                            "points":  21
                        },
                        {
                            "text":  "hose/tights",
                            "points":  15
                        },
                        {
                            "text":  "waist-high boots",
                            "points":  5
                        },
                        {
                            "text":  "wedding dress",
                            "points":  3
                        },
                        {
                            "text":  "skinny jeans/pants",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140297,
        "question":  "We asked 100 men... Name something you like your girlfriend to do to your face.",
        "answers":  [
                        {
                            "text":  "kiss it",
                            "points":  47
                        },
                        {
                            "text":  "touch/rub it",
                            "points":  20
                        },
                        {
                            "text":  "shave it",
                            "points":  15
                        },
                        {
                            "text":  "have a seat",
                            "points":  11
                        },
                        {
                            "text":  "compliment it",
                            "points":  3
                        },
                        {
                            "text":  "lick it",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140298,
        "question":  "Name a place you'd be surprised a preacher went right after church.",
        "answers":  [
                        {
                            "text":  "bar/club",
                            "points":  44
                        },
                        {
                            "text":  "strip joint",
                            "points":  43
                        },
                        {
                            "text":  "ho house",
                            "points":  3
                        },
                        {
                            "text":  "hooters",
                            "points":  3
                        },
                        {
                            "text":  "holy roller casino",
                            "points":  3
                        },
                        {
                            "text":  "liquor store",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140299,
        "question":  "Name something a man might have in common with his underpants.",
        "answers":  [
                        {
                            "text":  "dirty/stinky",
                            "points":  44
                        },
                        {
                            "text":  "color/white",
                            "points":  21
                        },
                        {
                            "text":  "old/worn out",
                            "points":  18
                        },
                        {
                            "text":  "care for his \"goods\"",
                            "points":  10
                        },
                        {
                            "text":  "lousy/bad",
                            "points":  3
                        },
                        {
                            "text":  "saggy",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140300,
        "question":  "Fill in the blank: There's a specific reason Bob calls his mother-in-law \"cow.\" It's because she ______s like one.",
        "answers":  [
                        {
                            "text":  "eats/chews",
                            "points":  42
                        },
                        {
                            "text":  "looks/is built",
                            "points":  33
                        },
                        {
                            "text":  "smells",
                            "points":  7
                        },
                        {
                            "text":  "bellows/moos",
                            "points":  7
                        },
                        {
                            "text":  "walks/moves",
                            "points":  7
                        },
                        {
                            "text":  "breathes/snorts",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140301,
        "question":  "We asked 100 single men... You could never date a woman if she looked like your who?",
        "answers":  [
                        {
                            "text":  "mother",
                            "points":  39
                        },
                        {
                            "text":  "sister",
                            "points":  20
                        },
                        {
                            "text":  "ex",
                            "points":  17
                        },
                        {
                            "text":  "grandma",
                            "points":  12
                        },
                        {
                            "text":  "dog",
                            "points":  5
                        },
                        {
                            "text":  "father",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140302,
        "question":  "We asked 100 men... Name something you'd do to get out of cuddling.",
        "answers":  [
                        {
                            "text":  "tired/fake sleep",
                            "points":  32
                        },
                        {
                            "text":  "\"sick\"/headache",
                            "points":  31
                        },
                        {
                            "text":  "dishes/chores",
                            "points":  20
                        },
                        {
                            "text":  "fart",
                            "points":  8
                        },
                        {
                            "text":  "hide in bathroom",
                            "points":  5
                        },
                        {
                            "text":  "leave/go home",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140303,
        "question":  "If the cop who pulled you over was family, what might you be surprised he still did to you?",
        "answers":  [
                        {
                            "text":  "gave ticket",
                            "points":  78
                        },
                        {
                            "text":  "arrested/cuffed",
                            "points":  10
                        },
                        {
                            "text":  "asked for id",
                            "points":  3
                        },
                        {
                            "text":  "let me go",
                            "points":  2
                        },
                        {
                            "text":  "lectured/yelled",
                            "points":  2
                        },
                        {
                            "text":  "strip search",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140304,
        "question":  "Name an occupation that the better they look, the more money they make.",
        "answers":  [
                        {
                            "text":  "model",
                            "points":  65
                        },
                        {
                            "text":  "stripper",
                            "points":  12
                        },
                        {
                            "text":  "actor",
                            "points":  10
                        },
                        {
                            "text":  "server/bartender",
                            "points":  4
                        },
                        {
                            "text":  "lawyer",
                            "points":  3
                        },
                        {
                            "text":  "ho/gigolo",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140305,
        "question":  "We asked 100 married men... My wife's bottom is like a big, soft what?",
        "answers":  [
                        {
                            "text":  "pillow",
                            "points":  65
                        },
                        {
                            "text":  "marshmallow",
                            "points":  9
                        },
                        {
                            "text":  "stuffed animal",
                            "points":  9
                        },
                        {
                            "text":  "jell-o/pudding",
                            "points":  9
                        },
                        {
                            "text":  "cotton ball",
                            "points":  3
                        },
                        {
                            "text":  "fruit/melon",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140306,
        "question":  "Name something starting with the letter K that a wife might do to her husband.",
        "answers":  [
                        {
                            "text":  "kiss him",
                            "points":  62
                        },
                        {
                            "text":  "kill him",
                            "points":  17
                        },
                        {
                            "text":  "kick him",
                            "points":  10
                        },
                        {
                            "text":  "knife him",
                            "points":  3
                        },
                        {
                            "text":  "knock him/out",
                            "points":  3
                        },
                        {
                            "text":  "keep the loser",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140307,
        "question":  "Name something a male stripper might put on before performing.",
        "answers":  [
                        {
                            "text":  "costume/g-string",
                            "points":  58
                        },
                        {
                            "text":  "baby oil",
                            "points":  22
                        },
                        {
                            "text":  "deodorant",
                            "points":  7
                        },
                        {
                            "text":  "cologne",
                            "points":  5
                        },
                        {
                            "text":  "fake bulge",
                            "points":  3
                        },
                        {
                            "text":  "come-do-me smile",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140308,
        "question":  "We asked 100 men... What would you do if, at the beach, you found the top half of a bikini?",
        "answers":  [
                        {
                            "text":  "look for owner",
                            "points":  49
                        },
                        {
                            "text":  "leave it",
                            "points":  31
                        },
                        {
                            "text":  "look for bottoms",
                            "points":  9
                        },
                        {
                            "text":  "throw it away",
                            "points":  3
                        },
                        {
                            "text":  "wear it",
                            "points":  3
                        },
                        {
                            "text":  "hide it",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140309,
        "question":  "We asked 100 married women... Name something you've done to your man's behind.",
        "answers":  [
                        {
                            "text":  "spank/pat",
                            "points":  46
                        },
                        {
                            "text":  "pinch/grab",
                            "points":  29
                        },
                        {
                            "text":  "rub it",
                            "points":  12
                        },
                        {
                            "text":  "kiss it",
                            "points":  5
                        },
                        {
                            "text":  "shave it",
                            "points":  3
                        },
                        {
                            "text":  "scratch it",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140310,
        "question":  "Name a reason you open your mouth very wide.",
        "answers":  [
                        {
                            "text":  "for dentist",
                            "points":  46
                        },
                        {
                            "text":  "to yawn",
                            "points":  27
                        },
                        {
                            "text":  "eat/juicy burger",
                            "points":  18
                        },
                        {
                            "text":  "brush and floss",
                            "points":  2
                        },
                        {
                            "text":  "to yell",
                            "points":  2
                        },
                        {
                            "text":  "shocked",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140311,
        "question":  "Tell me a gemstone a stripper might use as her stage name.",
        "answers":  [
                        {
                            "text":  "ruby",
                            "points":  43
                        },
                        {
                            "text":  "diamond",
                            "points":  36
                        },
                        {
                            "text":  "sapphire",
                            "points":  6
                        },
                        {
                            "text":  "jade",
                            "points":  5
                        },
                        {
                            "text":  "opal",
                            "points":  4
                        },
                        {
                            "text":  "emerald",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140312,
        "question":  "Name something that's bad for you.",
        "answers":  [
                        {
                            "text":  "tobacco",
                            "points":  41
                        },
                        {
                            "text":  "sweets/foods",
                            "points":  32
                        },
                        {
                            "text":  "booze",
                            "points":  12
                        },
                        {
                            "text":  "drugs",
                            "points":  8
                        },
                        {
                            "text":  "drinking drano",
                            "points":  2
                        },
                        {
                            "text":  "tv/the news",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140313,
        "question":  "We asked 100 women... Your boyfriend has loads of pictures of his ex posted on social media but none of you. What do you do?",
        "answers":  [
                        {
                            "text":  "dump his arse!",
                            "points":  39
                        },
                        {
                            "text":  "make him delete",
                            "points":  25
                        },
                        {
                            "text":  "confront",
                            "points":  24
                        },
                        {
                            "text":  "cry",
                            "points":  4
                        },
                        {
                            "text":  "post pics of me",
                            "points":  3
                        },
                        {
                            "text":  "ignore/so be it",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140314,
        "question":  "Tell me the worst thing to happen while you're making love in the woods.",
        "answers":  [
                        {
                            "text":  "bear/wild animal",
                            "points":  34
                        },
                        {
                            "text":  "poison ivy/on loins",
                            "points":  22
                        },
                        {
                            "text":  "bug bite/attack",
                            "points":  20
                        },
                        {
                            "text":  "folks see/take pic",
                            "points":  10
                        },
                        {
                            "text":  "splinter/poked",
                            "points":  9
                        },
                        {
                            "text":  "rain/lightning",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140315,
        "question":  "Name some news you'd be surprised to hear about Martha Stewart and Snoop Dogg.",
        "answers":  [
                        {
                            "text":  "lovers/married",
                            "points":  83
                        },
                        {
                            "text":  "opened weed biz",
                            "points":  3
                        },
                        {
                            "text":  "preggers",
                            "points":  3
                        },
                        {
                            "text":  "rapping together",
                            "points":  3
                        },
                        {
                            "text":  "fugitives",
                            "points":  2
                        },
                        {
                            "text":  "they're feuding",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140316,
        "question":  "We asked 100 women... If your boyfriend broke up with you at dinner, you'd stand up and do what?",
        "answers":  [
                        {
                            "text":  "leave/\"bye\"",
                            "points":  66
                        },
                        {
                            "text":  "throw food/drink",
                            "points":  21
                        },
                        {
                            "text":  "yell/\"u suck in bed\"",
                            "points":  3
                        },
                        {
                            "text":  "slap/punch him",
                            "points":  2
                        },
                        {
                            "text":  "flip table over",
                            "points":  2
                        },
                        {
                            "text":  "cry",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140317,
        "question":  "Name something you like done to your buns.",
        "answers":  [
                        {
                            "text":  "toasted/warmed",
                            "points":  58
                        },
                        {
                            "text":  "buttered",
                            "points":  23
                        },
                        {
                            "text":  "rubbed/squeezed",
                            "points":  5
                        },
                        {
                            "text":  "iced/glazed",
                            "points":  5
                        },
                        {
                            "text":  "spanked",
                            "points":  3
                        },
                        {
                            "text":  "spiced",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140318,
        "question":  "Name something on your body that you have more than two of.",
        "answers":  [
                        {
                            "text":  "fingers/nails",
                            "points":  58
                        },
                        {
                            "text":  "toes",
                            "points":  19
                        },
                        {
                            "text":  "hairs",
                            "points":  9
                        },
                        {
                            "text":  "teeth",
                            "points":  4
                        },
                        {
                            "text":  "moles",
                            "points":  3
                        },
                        {
                            "text":  "tattoos",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140319,
        "question":  "We asked 100 married women... It might be grounds for divorce if you discovered that while you were giving birth, your husband was doing what?",
        "answers":  [
                        {
                            "text":  "cheating",
                            "points":  50
                        },
                        {
                            "text":  "texting",
                            "points":  16
                        },
                        {
                            "text":  "watching tv",
                            "points":  12
                        },
                        {
                            "text":  "play'g sports",
                            "points":  12
                        },
                        {
                            "text":  "soc. media/post'g vid",
                            "points":  3
                        },
                        {
                            "text":  "sleep'g/passed out",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140320,
        "question":  "Fill in the blank: A man would be in trouble if he compared his wife's ______ to a cow's.",
        "answers":  [
                        {
                            "text":  "butt/dumper",
                            "points":  42
                        },
                        {
                            "text":  "teats",
                            "points":  35
                        },
                        {
                            "text":  "belly",
                            "points":  8
                        },
                        {
                            "text":  "face/nose",
                            "points":  5
                        },
                        {
                            "text":  "tongue",
                            "points":  3
                        },
                        {
                            "text":  "mother",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140321,
        "question":  "Fill in the blank: You'd hate for your pharmacist to say loudly, \"Your prescription for ______ is ready!\"",
        "answers":  [
                        {
                            "text":  "viagra/e.d.",
                            "points":  42
                        },
                        {
                            "text":  "std/herpes",
                            "points":  28
                        },
                        {
                            "text":  "epic hemorrhoids",
                            "points":  11
                        },
                        {
                            "text":  "itch/rash",
                            "points":  7
                        },
                        {
                            "text":  "birth control",
                            "points":  4
                        },
                        {
                            "text":  "hormones/menopause",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140322,
        "question":  "If you owned 101 dalmatians, you'd probably have to buy 101 what?",
        "answers":  [
                        {
                            "text":  "collars",
                            "points":  41
                        },
                        {
                            "text":  "leashes",
                            "points":  25
                        },
                        {
                            "text":  "bowls",
                            "points":  14
                        },
                        {
                            "text":  "beds",
                            "points":  7
                        },
                        {
                            "text":  "bags of food/bones",
                            "points":  6
                        },
                        {
                            "text":  "toys",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140323,
        "question":  "Tell me why you're blindfolded.",
        "answers":  [
                        {
                            "text":  "game/pin the tail...",
                            "points":  41
                        },
                        {
                            "text":  "for a surprise",
                            "points":  21
                        },
                        {
                            "text":  "s&m",
                            "points":  15
                        },
                        {
                            "text":  "kidnapped",
                            "points":  10
                        },
                        {
                            "text":  "sleep/block light",
                            "points":  5
                        },
                        {
                            "text":  "firing squad",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140324,
        "question":  "Name something you buy for a birthday party that you might also buy for a divorce party.",
        "answers":  [
                        {
                            "text":  "champagne/booze",
                            "points":  40
                        },
                        {
                            "text":  "cake",
                            "points":  29
                        },
                        {
                            "text":  "a card/gifts",
                            "points":  11
                        },
                        {
                            "text":  "balloons/decor",
                            "points":  9
                        },
                        {
                            "text":  "noisemaker/firework",
                            "points":  4
                        },
                        {
                            "text":  "stripper",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140325,
        "question":  "We asked 100 men... What would you do if your girlfriend decided to go natural and threw away her razor?",
        "answers":  [
                        {
                            "text":  "dump her",
                            "points":  38
                        },
                        {
                            "text":  "nothing/love it",
                            "points":  16
                        },
                        {
                            "text":  "throw mine away",
                            "points":  15
                        },
                        {
                            "text":  "discuss",
                            "points":  11
                        },
                        {
                            "text":  "buy her razor/nair",
                            "points":  9
                        },
                        {
                            "text":  "freak out",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  140326,
        "question":  "Name an office supply a person swallows as a joke that's not so funny when it comes out the other end.",
        "answers":  [
                        {
                            "text":  "paper clip",
                            "points":  37
                        },
                        {
                            "text":  "staples/stapler",
                            "points":  31
                        },
                        {
                            "text":  "thumbtack",
                            "points":  9
                        },
                        {
                            "text":  "crumpled paper",
                            "points":  8
                        },
                        {
                            "text":  "pen/pencil",
                            "points":  8
                        },
                        {
                            "text":  "rubber band",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140327,
        "question":  "If a stripper called herself Goldilocks, name a prop she might use in her act.",
        "answers":  [
                        {
                            "text":  "blonde wig",
                            "points":  37
                        },
                        {
                            "text":  "3 bears",
                            "points":  30
                        },
                        {
                            "text":  "bowl of porridge",
                            "points":  15
                        },
                        {
                            "text":  "3 beds",
                            "points":  6
                        },
                        {
                            "text":  "3 chairs",
                            "points":  6
                        },
                        {
                            "text":  "hairbrush",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140328,
        "question":  "Name a specific reason a child might tell someone they look like a horse.",
        "answers":  [
                        {
                            "text":  "big teeth",
                            "points":  37
                        },
                        {
                            "text":  "long face",
                            "points":  30
                        },
                        {
                            "text":  "nose/nostrils",
                            "points":  13
                        },
                        {
                            "text":  "big/tall",
                            "points":  8
                        },
                        {
                            "text":  "kid's rude douche",
                            "points":  4
                        },
                        {
                            "text":  "ponytail/hair",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140329,
        "question":  "Name something specific a doctor might put in your bottom.",
        "answers":  [
                        {
                            "text":  "a finger or 2",
                            "points":  35
                        },
                        {
                            "text":  "thermometer",
                            "points":  26
                        },
                        {
                            "text":  "an enema",
                            "points":  10
                        },
                        {
                            "text":  "suppository",
                            "points":  10
                        },
                        {
                            "text":  "shot/needle",
                            "points":  8
                        },
                        {
                            "text":  "scope/colonscope",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  140330,
        "question":  "Name something a kid uses to practice the art of kissing.",
        "answers":  [
                        {
                            "text":  "mirror",
                            "points":  25
                        },
                        {
                            "text":  "pillow",
                            "points":  22
                        },
                        {
                            "text":  "hand/arm",
                            "points":  20
                        },
                        {
                            "text":  "doll/teddy bear",
                            "points":  17
                        },
                        {
                            "text":  "food/peach",
                            "points":  10
                        },
                        {
                            "text":  "balloon",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140331,
        "question":  "Name something you bring to the party that makes you the life of the party.",
        "answers":  [
                        {
                            "text":  "booze",
                            "points":  71
                        },
                        {
                            "text":  "tunes/a banjo",
                            "points":  8
                        },
                        {
                            "text":  "food/guac",
                            "points":  6
                        },
                        {
                            "text":  "winning personality",
                            "points":  4
                        },
                        {
                            "text":  "weed/drugs",
                            "points":  3
                        },
                        {
                            "text":  "games/twister",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140332,
        "question":  "Grandma said, \"The last time I made love in the back seat of a car, I broke my\" what?",
        "answers":  [
                        {
                            "text":  "hip/bone/spine",
                            "points":  67
                        },
                        {
                            "text":  "car/seat",
                            "points":  8
                        },
                        {
                            "text":  "jewelry",
                            "points":  7
                        },
                        {
                            "text":  "glasses",
                            "points":  6
                        },
                        {
                            "text":  "zipper/clothes",
                            "points":  4
                        },
                        {
                            "text":  "teeth",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140333,
        "question":  "We asked 100 women... Name something Santa Claus has that you wouldn't want your man to have.",
        "answers":  [
                        {
                            "text":  "chubby belly",
                            "points":  64
                        },
                        {
                            "text":  "bushy beard",
                            "points":  21
                        },
                        {
                            "text":  "reindeer",
                            "points":  3
                        },
                        {
                            "text":  "his job/schedule",
                            "points":  3
                        },
                        {
                            "text":  "elves",
                            "points":  2
                        },
                        {
                            "text":  "long white hair",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140334,
        "question":  "Fill in the blank: Santa Claus said, \"I don't clean my ______ -- I have the elves do that.\"",
        "answers":  [
                        {
                            "text":  "sleigh",
                            "points":  61
                        },
                        {
                            "text":  "suit/boots",
                            "points":  10
                        },
                        {
                            "text":  "house/toilet",
                            "points":  9
                        },
                        {
                            "text":  "reindeer/stalls",
                            "points":  6
                        },
                        {
                            "text":  "body",
                            "points":  5
                        },
                        {
                            "text":  "workshop",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140335,
        "question":  "Name a reason people stay in touch with an ex.",
        "answers":  [
                        {
                            "text":  "for the kids",
                            "points":  60
                        },
                        {
                            "text":  "booty call",
                            "points":  9
                        },
                        {
                            "text":  "still love/miss",
                            "points":  9
                        },
                        {
                            "text":  "best pals",
                            "points":  7
                        },
                        {
                            "text":  "to collect $",
                            "points":  7
                        },
                        {
                            "text":  "dumb & desperate",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140336,
        "question":  "Name something that's a lot easier to put on than it is to take off.",
        "answers":  [
                        {
                            "text":  "clothes/swimsuit",
                            "points":  54
                        },
                        {
                            "text":  "makeup",
                            "points":  18
                        },
                        {
                            "text":  "weight",
                            "points":  14
                        },
                        {
                            "text":  "ring",
                            "points":  3
                        },
                        {
                            "text":  "nail polish",
                            "points":  3
                        },
                        {
                            "text":  "band-aid",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140337,
        "question":  "Name the worst kind of music to listen to when you have a hangover.",
        "answers":  [
                        {
                            "text":  "rock/metal",
                            "points":  52
                        },
                        {
                            "text":  "rap/hip-hop",
                            "points":  25
                        },
                        {
                            "text":  "country",
                            "points":  9
                        },
                        {
                            "text":  "jazz",
                            "points":  3
                        },
                        {
                            "text":  "techno/edm",
                            "points":  3
                        },
                        {
                            "text":  "opera/classical",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140338,
        "question":  "We asked 100 women... Name something a squirrel and your man have in common.",
        "answers":  [
                        {
                            "text":  "nuts!/love nuts",
                            "points":  51
                        },
                        {
                            "text":  "hairy bod/tail",
                            "points":  28
                        },
                        {
                            "text":  "cute face/buck teeth",
                            "points":  8
                        },
                        {
                            "text":  "run/fast exit",
                            "points":  4
                        },
                        {
                            "text":  "always hungry",
                            "points":  2
                        },
                        {
                            "text":  "short attn. span",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140339,
        "question":  "Name something about Tarzan that Cheeta might make fun of behind his back.",
        "answers":  [
                        {
                            "text":  "loincloth",
                            "points":  51
                        },
                        {
                            "text":  "body/posture",
                            "points":  15
                        },
                        {
                            "text":  "his yell",
                            "points":  11
                        },
                        {
                            "text":  "long hair",
                            "points":  11
                        },
                        {
                            "text":  "poor grammar",
                            "points":  4
                        },
                        {
                            "text":  "can't run fast",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140340,
        "question":  "Name something Bigfoot probably complains about.",
        "answers":  [
                        {
                            "text":  "his feet/no shoes",
                            "points":  50
                        },
                        {
                            "text":  "people/being hunted",
                            "points":  25
                        },
                        {
                            "text":  "hairy",
                            "points":  10
                        },
                        {
                            "text":  "finding food",
                            "points":  5
                        },
                        {
                            "text":  "weather",
                            "points":  3
                        },
                        {
                            "text":  "fleas/ticks",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140341,
        "question":  "Name the worst city to be in if you have no money.",
        "answers":  [
                        {
                            "text":  "new york city",
                            "points":  47
                        },
                        {
                            "text":  "las vegas",
                            "points":  36
                        },
                        {
                            "text":  "los angeles",
                            "points":  4
                        },
                        {
                            "text":  "paris",
                            "points":  3
                        },
                        {
                            "text":  "san francisco",
                            "points":  3
                        },
                        {
                            "text":  "chicago",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140342,
        "question":  "Tell me something a man named Rod has that might make the ladies call him Hot Rod.",
        "answers":  [
                        {
                            "text":  "fast car",
                            "points":  43
                        },
                        {
                            "text":  "hot bod/robust rod",
                            "points":  38
                        },
                        {
                            "text":  "dreamy face",
                            "points":  5
                        },
                        {
                            "text":  "motorcycle",
                            "points":  5
                        },
                        {
                            "text":  "sexy slick hair",
                            "points":  2
                        },
                        {
                            "text":  "flirting skills",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140343,
        "question":  "When grandma's mad at grandpa, she turns off his what?",
        "answers":  [
                        {
                            "text":  "hearing aid",
                            "points":  42
                        },
                        {
                            "text":  "tv",
                            "points":  30
                        },
                        {
                            "text":  "pacemaker",
                            "points":  9
                        },
                        {
                            "text":  "oxygen",
                            "points":  7
                        },
                        {
                            "text":  "phone",
                            "points":  4
                        },
                        {
                            "text":  "radio",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140344,
        "question":  "Name something you like to put on your naked body.",
        "answers":  [
                        {
                            "text":  "lotion/oil",
                            "points":  40
                        },
                        {
                            "text":  "clothes/robe",
                            "points":  35
                        },
                        {
                            "text":  "hot nude lover",
                            "points":  9
                        },
                        {
                            "text":  "soap",
                            "points":  5
                        },
                        {
                            "text":  "whipped cream",
                            "points":  3
                        },
                        {
                            "text":  "warm water",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140345,
        "question":  "Name a reason the groom was crying at the wedding.",
        "answers":  [
                        {
                            "text":  "joy/hot bride",
                            "points":  30
                        },
                        {
                            "text":  "doesn't wanna marry",
                            "points":  30
                        },
                        {
                            "text":  "runaway bride",
                            "points":  24
                        },
                        {
                            "text":  "saw the bill",
                            "points":  6
                        },
                        {
                            "text":  "bride cheated",
                            "points":  3
                        },
                        {
                            "text":  "onion-based entree",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140346,
        "question":  "We asked 100 married men... What do you want for Christmas that you know your wife won't give you?",
        "answers":  [
                        {
                            "text":  "car/r.v.",
                            "points":  27
                        },
                        {
                            "text":  "her bod!",
                            "points":  26
                        },
                        {
                            "text":  "mistress/a 3rd",
                            "points":  22
                        },
                        {
                            "text":  "big-screen tv",
                            "points":  12
                        },
                        {
                            "text":  "silence",
                            "points":  5
                        },
                        {
                            "text":  "more allowance",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140347,
        "question":  "Fill in the blank: A wife might tell her ex's new girlfriend, \"Careful -- he ______s a lot.\"",
        "answers":  [
                        {
                            "text":  "cheats/dates",
                            "points":  27
                        },
                        {
                            "text":  "cuts the cheese",
                            "points":  24
                        },
                        {
                            "text":  "lies",
                            "points":  22
                        },
                        {
                            "text":  "snores",
                            "points":  13
                        },
                        {
                            "text":  "drinks",
                            "points":  7
                        },
                        {
                            "text":  "makes messes",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140348,
        "question":  "If you had a pumpkin for a head, name something someone might try to do to it.",
        "answers":  [
                        {
                            "text":  "carve it",
                            "points":  77
                        },
                        {
                            "text":  "smash/chuck it",
                            "points":  5
                        },
                        {
                            "text":  "light candle",
                            "points":  4
                        },
                        {
                            "text":  "eat/make pie",
                            "points":  4
                        },
                        {
                            "text":  "gut it",
                            "points":  2
                        },
                        {
                            "text":  "draw on/paint it",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140349,
        "question":  "Instead of something comfortable, what sexy thing does a man wish his wife would slip into?",
        "answers":  [
                        {
                            "text":  "lingerie/thong",
                            "points":  61
                        },
                        {
                            "text":  "b-day suit",
                            "points":  16
                        },
                        {
                            "text":  "bed/the sheets",
                            "points":  9
                        },
                        {
                            "text":  "t-shirt/his",
                            "points":  3
                        },
                        {
                            "text":  "s&m gear/saran wrap",
                            "points":  3
                        },
                        {
                            "text":  "hooker heels",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140350,
        "question":  "Tell me an animal you'd hate to meet while you're out hiking.",
        "answers":  [
                        {
                            "text":  "bear",
                            "points":  51
                        },
                        {
                            "text":  "mtn. lion",
                            "points":  21
                        },
                        {
                            "text":  "snake",
                            "points":  10
                        },
                        {
                            "text":  "wolf",
                            "points":  5
                        },
                        {
                            "text":  "lion",
                            "points":  4
                        },
                        {
                            "text":  "mother-in-law",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140351,
        "question":  "If a dog designed his own doghouse, what would he want to have inside it?",
        "answers":  [
                        {
                            "text":  "food/fridge",
                            "points":  47
                        },
                        {
                            "text":  "bedding/furniture",
                            "points":  27
                        },
                        {
                            "text":  "heat/ac",
                            "points":  8
                        },
                        {
                            "text":  "water",
                            "points":  5
                        },
                        {
                            "text":  "toys",
                            "points":  4
                        },
                        {
                            "text":  "fire hydrant",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140352,
        "question":  "Name something a naked fireman has to be more careful doing on the job.",
        "answers":  [
                        {
                            "text":  "fighting fire",
                            "points":  39
                        },
                        {
                            "text":  "handling hose",
                            "points":  21
                        },
                        {
                            "text":  "going down pole",
                            "points":  11
                        },
                        {
                            "text":  "climb'g ladder",
                            "points":  11
                        },
                        {
                            "text":  "swinging axe",
                            "points":  10
                        },
                        {
                            "text":  "rescuing feisty cat",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140353,
        "question":  "Name a game show where you'd like to see players take their clothes off for every wrong answer.",
        "answers":  [
                        {
                            "text":  "family feud",
                            "points":  36
                        },
                        {
                            "text":  "jeopardy!",
                            "points":  32
                        },
                        {
                            "text":  "wheel of fortune",
                            "points":  13
                        },
                        {
                            "text":  "who...millionaire?",
                            "points":  7
                        },
                        {
                            "text":  "match game",
                            "points":  3
                        },
                        {
                            "text":  "the price is right",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140354,
        "question":  "We asked 100 married women... Fill in the blank: You know your husband loves you if he still kisses you when you're ______.",
        "answers":  [
                        {
                            "text":  "sleeping",
                            "points":  35
                        },
                        {
                            "text":  "sick/mid-vomit",
                            "points":  18
                        },
                        {
                            "text":  "crying",
                            "points":  14
                        },
                        {
                            "text":  "sweaty/b.o.",
                            "points":  10
                        },
                        {
                            "text":  "cranky/mad",
                            "points":  10
                        },
                        {
                            "text":  "wear'g mud mask",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  140355,
        "question":  "Name something specific about a flamingo that a mockingbird might mock.",
        "answers":  [
                        {
                            "text":  "pink",
                            "points":  30
                        },
                        {
                            "text":  "long scrawny legs",
                            "points":  23
                        },
                        {
                            "text":  "stands on 1 leg",
                            "points":  21
                        },
                        {
                            "text":  "long neck",
                            "points":  10
                        },
                        {
                            "text":  "big beak",
                            "points":  5
                        },
                        {
                            "text":  "its strut",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140356,
        "question":  "We asked 100 married women... What would you do if you found a bag of weed in your husband's car?",
        "answers":  [
                        {
                            "text":  "toss/flush it",
                            "points":  27
                        },
                        {
                            "text":  "confront/yell",
                            "points":  24
                        },
                        {
                            "text":  "steal & smoke it",
                            "points":  23
                        },
                        {
                            "text":  "nothing",
                            "points":  10
                        },
                        {
                            "text":  "call police",
                            "points":  5
                        },
                        {
                            "text":  "tell him to share",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140357,
        "question":  "We asked 100 parents... So as not to set a bad example, name something you don't do until the kids are asleep.",
        "answers":  [
                        {
                            "text":  "beer bong",
                            "points":  22
                        },
                        {
                            "text":  "shag/on table",
                            "points":  18
                        },
                        {
                            "text":  "yell/cuss",
                            "points":  17
                        },
                        {
                            "text":  "pig out/candy",
                            "points":  16
                        },
                        {
                            "text":  "tv/racy flick",
                            "points":  16
                        },
                        {
                            "text":  "smoke cigar/cig",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140358,
        "question":  "Name a place you feel comfortable using a curse word.",
        "answers":  [
                        {
                            "text":  "home",
                            "points":  70
                        },
                        {
                            "text":  "the bar",
                            "points":  9
                        },
                        {
                            "text":  "work",
                            "points":  4
                        },
                        {
                            "text":  "church",
                            "points":  4
                        },
                        {
                            "text":  "sports event",
                            "points":  3
                        },
                        {
                            "text":  "my car",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140359,
        "question":  "People shake their booties. Which animals shake their tails?",
        "answers":  [
                        {
                            "text":  "dogs",
                            "points":  67
                        },
                        {
                            "text":  "cats",
                            "points":  9
                        },
                        {
                            "text":  "birds/peacocks",
                            "points":  9
                        },
                        {
                            "text":  "snakes",
                            "points":  3
                        },
                        {
                            "text":  "horses",
                            "points":  3
                        },
                        {
                            "text":  "squirrels",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140360,
        "question":  "A female secret agent might have a bra that can do what?",
        "answers":  [
                        {
                            "text":  "shoot/tear gas",
                            "points":  63
                        },
                        {
                            "text":  "hide stuff",
                            "points":  9
                        },
                        {
                            "text":  "pics/record",
                            "points":  7
                        },
                        {
                            "text":  "explode",
                            "points":  5
                        },
                        {
                            "text":  "talk/make call",
                            "points":  5
                        },
                        {
                            "text":  "stop bullets",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140361,
        "question":  "We asked 100 women... Name an instrument in an orchestra that sounds like your guy in the bathroom.",
        "answers":  [
                        {
                            "text":  "tuba",
                            "points":  62
                        },
                        {
                            "text":  "trumpet",
                            "points":  13
                        },
                        {
                            "text":  "drum",
                            "points":  7
                        },
                        {
                            "text":  "oboe",
                            "points":  4
                        },
                        {
                            "text":  "bassoon",
                            "points":  4
                        },
                        {
                            "text":  "trombone",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140362,
        "question":  "Matzo ball soup is great. But name a kind of ball you wouldn't want to find in your soup.",
        "answers":  [
                        {
                            "text":  "golf/sports ball",
                            "points":  53
                        },
                        {
                            "text":  "hairball",
                            "points":  20
                        },
                        {
                            "text":  "nads",
                            "points":  9
                        },
                        {
                            "text":  "mothball",
                            "points":  7
                        },
                        {
                            "text":  "spitball",
                            "points":  2
                        },
                        {
                            "text":  "eyeball",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140363,
        "question":  "We asked 100 men... My mother said she found the perfect girl for me. Unfortunately, she's just like my mother when it comes to her what?",
        "answers":  [
                        {
                            "text":  "bossy 'tude",
                            "points":  51
                        },
                        {
                            "text":  "cooking",
                            "points":  16
                        },
                        {
                            "text":  "face/wrinkly",
                            "points":  15
                        },
                        {
                            "text":  "irksome voice",
                            "points":  5
                        },
                        {
                            "text":  "clothes/bloomers",
                            "points":  4
                        },
                        {
                            "text":  "cleanliness",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140364,
        "question":  "We asked 100 women... Name a reason you will never be cast as a \"Baywatch\" lifeguard.",
        "answers":  [
                        {
                            "text":  "too pudgy",
                            "points":  49
                        },
                        {
                            "text":  "tiny pancake boobs",
                            "points":  15
                        },
                        {
                            "text":  "can't swim",
                            "points":  13
                        },
                        {
                            "text":  "elderly/over 30",
                            "points":  11
                        },
                        {
                            "text":  "can't run/in slo-mo",
                            "points":  3
                        },
                        {
                            "text":  "scar",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140365,
        "question":  "The devil says, \"It's easy to get a man to sell me his soul. I just offer him\" what?",
        "answers":  [
                        {
                            "text":  "sex/chicks/love",
                            "points":  44
                        },
                        {
                            "text":  "money",
                            "points":  33
                        },
                        {
                            "text":  "power",
                            "points":  6
                        },
                        {
                            "text":  "booze",
                            "points":  4
                        },
                        {
                            "text":  "food/a burger",
                            "points":  3
                        },
                        {
                            "text":  "fame",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140366,
        "question":  "Name something it might be hard to do if you literally had two left feet.",
        "answers":  [
                        {
                            "text":  "walk/run",
                            "points":  40
                        },
                        {
                            "text":  "dance",
                            "points":  34
                        },
                        {
                            "text":  "buy/wear shoes",
                            "points":  13
                        },
                        {
                            "text":  "turn right",
                            "points":  2
                        },
                        {
                            "text":  "balance",
                            "points":  2
                        },
                        {
                            "text":  "kick a ball",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140367,
        "question":  "Name something that Steve Harvey might wax.",
        "answers":  [
                        {
                            "text":  "head",
                            "points":  39
                        },
                        {
                            "text":  "stache/beard",
                            "points":  23
                        },
                        {
                            "text":  "his 16 cars",
                            "points":  12
                        },
                        {
                            "text":  "eyebrows",
                            "points":  10
                        },
                        {
                            "text":  "the harvey \"jewels\"",
                            "points":  5
                        },
                        {
                            "text":  "chest",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140368,
        "question":  "Name something that's okay for your doctor to ask you to do but not your boss.",
        "answers":  [
                        {
                            "text":  "drop 'em!",
                            "points":  38
                        },
                        {
                            "text":  "bend over",
                            "points":  25
                        },
                        {
                            "text":  "answer personal ?'s",
                            "points":  11
                        },
                        {
                            "text":  "lose weight",
                            "points":  10
                        },
                        {
                            "text":  "turn head/cough",
                            "points":  5
                        },
                        {
                            "text":  "open wide/say aah",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140369,
        "question":  "Name a specific occasion when a man might keep his gut sucked in the entire time.",
        "answers":  [
                        {
                            "text":  "date/hottie nearby",
                            "points":  36
                        },
                        {
                            "text":  "swim'g/beach",
                            "points":  26
                        },
                        {
                            "text":  "wedding",
                            "points":  16
                        },
                        {
                            "text":  "working out",
                            "points":  6
                        },
                        {
                            "text":  "having pic taken",
                            "points":  6
                        },
                        {
                            "text":  "class reunion",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140370,
        "question":  "Name something a farmer might be holding in his online dating photo.",
        "answers":  [
                        {
                            "text":  "pitchfork",
                            "points":  34
                        },
                        {
                            "text":  "animal/piglet",
                            "points":  26
                        },
                        {
                            "text":  "crop/zucchini",
                            "points":  17
                        },
                        {
                            "text":  "rake",
                            "points":  6
                        },
                        {
                            "text":  "hat",
                            "points":  5
                        },
                        {
                            "text":  "hoe",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140371,
        "question":  "A woman doesn't want to kiss a man if he has a what?",
        "answers":  [
                        {
                            "text":  "foul odor/breath",
                            "points":  33
                        },
                        {
                            "text":  "mouth sore/ill",
                            "points":  32
                        },
                        {
                            "text":  "mustache",
                            "points":  13
                        },
                        {
                            "text":  "wad of chew",
                            "points":  6
                        },
                        {
                            "text":  "wife/bae",
                            "points":  5
                        },
                        {
                            "text":  "bad/jacked tooth",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140372,
        "question":  "We asked 100 women... Give me a word starting with L that describes your bottom.",
        "answers":  [
                        {
                            "text":  "large",
                            "points":  33
                        },
                        {
                            "text":  "luscious/lush",
                            "points":  18
                        },
                        {
                            "text":  "little",
                            "points":  14
                        },
                        {
                            "text":  "lovely",
                            "points":  13
                        },
                        {
                            "text":  "lumpy",
                            "points":  13
                        },
                        {
                            "text":  "loved",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140373,
        "question":  "We asked 100 men... Be honest -- what part of you is below average?",
        "answers":  [
                        {
                            "text":  "hair/hairline",
                            "points":  31
                        },
                        {
                            "text":  "belly/1-pack",
                            "points":  25
                        },
                        {
                            "text":  "height",
                            "points":  21
                        },
                        {
                            "text":  "ken doll dong",
                            "points":  10
                        },
                        {
                            "text":  "amoeba-sized iq",
                            "points":  3
                        },
                        {
                            "text":  "weak furry back",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140374,
        "question":  "We asked 100 married men... Between us, if you ever divorce your wife, it will be because of her what?",
        "answers":  [
                        {
                            "text":  "temper/naggy 'tude",
                            "points":  27
                        },
                        {
                            "text":  "spending/finances",
                            "points":  19
                        },
                        {
                            "text":  "snoring",
                            "points":  14
                        },
                        {
                            "text":  "cooking",
                            "points":  14
                        },
                        {
                            "text":  "cheating on me",
                            "points":  14
                        },
                        {
                            "text":  "mother",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140375,
        "question":  "To make up for not giving them hair, God gave all bald men a better what?",
        "answers":  [
                        {
                            "text":  "personality",
                            "points":  26
                        },
                        {
                            "text":  "body/weenie size",
                            "points":  25
                        },
                        {
                            "text":  "smile/face",
                            "points":  20
                        },
                        {
                            "text":  "head shape/scalp",
                            "points":  10
                        },
                        {
                            "text":  "stache/beard",
                            "points":  7
                        },
                        {
                            "text":  "income/job",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140376,
        "question":  "Name an outdoor winter activity you'd be surprised to see a nudist doing.",
        "answers":  [
                        {
                            "text":  "ski/snowboard",
                            "points":  61
                        },
                        {
                            "text":  "sled/tubing",
                            "points":  10
                        },
                        {
                            "text":  "make snow angels",
                            "points":  7
                        },
                        {
                            "text":  "ice fish",
                            "points":  5
                        },
                        {
                            "text":  "ice-skate",
                            "points":  5
                        },
                        {
                            "text":  "polar plunge/swim",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140377,
        "question":  "Name something other than your lips that's involved with the best kiss ever.",
        "answers":  [
                        {
                            "text":  "tongue",
                            "points":  60
                        },
                        {
                            "text":  "hands/arms/hugs",
                            "points":  18
                        },
                        {
                            "text":  "neck",
                            "points":  6
                        },
                        {
                            "text":  "eyes",
                            "points":  4
                        },
                        {
                            "text":  "ear",
                            "points":  2
                        },
                        {
                            "text":  "the mind",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140378,
        "question":  "Name a reason that Superman doesn't date much.",
        "answers":  [
                        {
                            "text":  "busy/flying",
                            "points":  58
                        },
                        {
                            "text":  "secret identity",
                            "points":  11
                        },
                        {
                            "text":  "that wench, lois",
                            "points":  7
                        },
                        {
                            "text":  "crushes dates",
                            "points":  6
                        },
                        {
                            "text":  "pervy x-ray vision",
                            "points":  6
                        },
                        {
                            "text":  "suit/cape issues",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140379,
        "question":  "I could win a contest for having the ugliest what?",
        "answers":  [
                        {
                            "text":  "body/feet",
                            "points":  45
                        },
                        {
                            "text":  "face/nose",
                            "points":  27
                        },
                        {
                            "text":  "dog/pet",
                            "points":  8
                        },
                        {
                            "text":  "spouse/mate",
                            "points":  6
                        },
                        {
                            "text":  "clothes",
                            "points":  4
                        },
                        {
                            "text":  "car/truck",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140380,
        "question":  "A woman might tell a sexy vampire, \"Forget my neck -- bite me on my\" what?",
        "answers":  [
                        {
                            "text":  "milk wagons",
                            "points":  43
                        },
                        {
                            "text":  "plump rump",
                            "points":  24
                        },
                        {
                            "text":  "thigh/leg",
                            "points":  8
                        },
                        {
                            "text":  "lips/mouth",
                            "points":  8
                        },
                        {
                            "text":  "ear",
                            "points":  6
                        },
                        {
                            "text":  "belly",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140381,
        "question":  "We asked 100 married people... The longer you're married, the more you enjoy doing what alone?",
        "answers":  [
                        {
                            "text":  "sleeping",
                            "points":  28
                        },
                        {
                            "text":  "tv/movie",
                            "points":  27
                        },
                        {
                            "text":  "reading",
                            "points":  16
                        },
                        {
                            "text":  "eating",
                            "points":  12
                        },
                        {
                            "text":  "shopping",
                            "points":  5
                        },
                        {
                            "text":  "sex",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140382,
        "question":  "Name something all wicked witches have in common.",
        "answers":  [
                        {
                            "text":  "spells/potions",
                            "points":  20
                        },
                        {
                            "text":  "broom",
                            "points":  19
                        },
                        {
                            "text":  "ugly/warty",
                            "points":  18
                        },
                        {
                            "text":  "uh...they're wicked",
                            "points":  17
                        },
                        {
                            "text":  "the cackle",
                            "points":  9
                        },
                        {
                            "text":  "hat/black garb",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  140383,
        "question":  "We asked 100 women... It doesn't matter how hot a guy is if his voice sounds like which Muppet?",
        "answers":  [
                        {
                            "text":  "kermit",
                            "points":  60
                        },
                        {
                            "text":  "miss piggy",
                            "points":  11
                        },
                        {
                            "text":  "beaker",
                            "points":  9
                        },
                        {
                            "text":  "animal",
                            "points":  5
                        },
                        {
                            "text":  "elmo",
                            "points":  3
                        },
                        {
                            "text":  "cookie monster",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140384,
        "question":  "Name something specific of his mother's a man wears to feel closer to her.",
        "answers":  [
                        {
                            "text":  "jewelry/pearls",
                            "points":  58
                        },
                        {
                            "text":  "sweater",
                            "points":  12
                        },
                        {
                            "text":  "hankie/scarf",
                            "points":  10
                        },
                        {
                            "text":  "blouse/t-shirt",
                            "points":  5
                        },
                        {
                            "text":  "blanket",
                            "points":  3
                        },
                        {
                            "text":  "panties/lingerie",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140385,
        "question":  "When a stripper gets married, what might her bridesmaids be wearing?",
        "answers":  [
                        {
                            "text":  "thongs/lingerie",
                            "points":  55
                        },
                        {
                            "text":  "pasties/tassels",
                            "points":  11
                        },
                        {
                            "text":  "nothing",
                            "points":  10
                        },
                        {
                            "text":  "dresses",
                            "points":  9
                        },
                        {
                            "text":  "glitter",
                            "points":  3
                        },
                        {
                            "text":  "stripper heels",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140386,
        "question":  "Name something a wife gives her husband that makes him a happy chappie.",
        "answers":  [
                        {
                            "text":  "hot nooner!",
                            "points":  52
                        },
                        {
                            "text":  "fave food",
                            "points":  18
                        },
                        {
                            "text":  "beer/a cosmo",
                            "points":  7
                        },
                        {
                            "text":  "unconditional love",
                            "points":  6
                        },
                        {
                            "text":  "massage",
                            "points":  4
                        },
                        {
                            "text":  "weekend off/to date",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140387,
        "question":  "Tell me something you'd hate to have happen while you're making love in a car.",
        "answers":  [
                        {
                            "text":  "the cops!",
                            "points":  51
                        },
                        {
                            "text":  "car rolls/off cliff",
                            "points":  19
                        },
                        {
                            "text":  "people see/watch",
                            "points":  9
                        },
                        {
                            "text":  "honk the horn",
                            "points":  7
                        },
                        {
                            "text":  "car gets hit",
                            "points":  3
                        },
                        {
                            "text":  "alarm goes off",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140388,
        "question":  "Name one thing a naked circus clown might be wearing.",
        "answers":  [
                        {
                            "text":  "red nose",
                            "points":  50
                        },
                        {
                            "text":  "makeup/freaky smile",
                            "points":  19
                        },
                        {
                            "text":  "wig",
                            "points":  8
                        },
                        {
                            "text":  "clown shoes",
                            "points":  6
                        },
                        {
                            "text":  "hat",
                            "points":  4
                        },
                        {
                            "text":  "candy condom",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140389,
        "question":  "Susan said, \"I dated a doctor last night, and he kept checking my\" what?",
        "answers":  [
                        {
                            "text":  "pulse/heartbeat",
                            "points":  44
                        },
                        {
                            "text":  "temp",
                            "points":  27
                        },
                        {
                            "text":  "boobs",
                            "points":  11
                        },
                        {
                            "text":  "tonsils/mouth",
                            "points":  5
                        },
                        {
                            "text":  "lung capacity",
                            "points":  2
                        },
                        {
                            "text":  "blood pressure",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140390,
        "question":  "Tell me something that's fun to do even if you're not good at it.",
        "answers":  [
                        {
                            "text":  "sports/bowl",
                            "points":  39
                        },
                        {
                            "text":  "dance",
                            "points":  16
                        },
                        {
                            "text":  "sing/karaoke",
                            "points":  15
                        },
                        {
                            "text":  "games/gamble",
                            "points":  14
                        },
                        {
                            "text":  "arts & crafts/sew",
                            "points":  4
                        },
                        {
                            "text":  "shag",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140391,
        "question":  "Tell me one thing grandma might remove when she slips into something more comfortable.",
        "answers":  [
                        {
                            "text":  "chompers",
                            "points":  35
                        },
                        {
                            "text":  "bra/flopper stopper",
                            "points":  29
                        },
                        {
                            "text":  "shoes",
                            "points":  13
                        },
                        {
                            "text":  "girdle",
                            "points":  9
                        },
                        {
                            "text":  "stockings",
                            "points":  3
                        },
                        {
                            "text":  "apron",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140392,
        "question":  "Name something a wife would be wearing that she'd kill her husband if he took her picture.",
        "answers":  [
                        {
                            "text":  "lingerie/nightie",
                            "points":  35
                        },
                        {
                            "text":  "nothin'!",
                            "points":  23
                        },
                        {
                            "text":  "bikini",
                            "points":  11
                        },
                        {
                            "text":  "face mask/cream",
                            "points":  11
                        },
                        {
                            "text":  "curlers",
                            "points":  6
                        },
                        {
                            "text":  "jammies/robe",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140393,
        "question":  "What's your favorite thing to have covered in chocolate?",
        "answers":  [
                        {
                            "text":  "strawberry/fruit",
                            "points":  34
                        },
                        {
                            "text":  "ice cream",
                            "points":  17
                        },
                        {
                            "text":  "candy/caramel",
                            "points":  14
                        },
                        {
                            "text":  "nuts",
                            "points":  13
                        },
                        {
                            "text":  "me/wife's boobs",
                            "points":  8
                        },
                        {
                            "text":  "pretzels",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140394,
        "question":  "Name a part of your lover's body that looks better when the lights are dimmed.",
        "answers":  [
                        {
                            "text":  "gut/waist",
                            "points":  33
                        },
                        {
                            "text":  "poorly-wiped butt",
                            "points":  23
                        },
                        {
                            "text":  "face/eyes",
                            "points":  17
                        },
                        {
                            "text":  "chest",
                            "points":  11
                        },
                        {
                            "text":  "feet",
                            "points":  4
                        },
                        {
                            "text":  "\"land down under\"",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140395,
        "question":  "Fill in the blank: The hair on Susan's legs is so thick that she ______s it.",
        "answers":  [
                        {
                            "text":  "braids/weaves",
                            "points":  31
                        },
                        {
                            "text":  "combs/brushes",
                            "points":  19
                        },
                        {
                            "text":  "shaves",
                            "points":  16
                        },
                        {
                            "text":  "mows/weedwacks",
                            "points":  12
                        },
                        {
                            "text":  "cuts w/ scissors",
                            "points":  7
                        },
                        {
                            "text":  "curls",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  140396,
        "question":  "We asked 100 married men... Name something you'd be disturbed to discover your wife had bought without telling you.",
        "answers":  [
                        {
                            "text":  "car/mack truck",
                            "points":  30
                        },
                        {
                            "text":  "pet/alpaca",
                            "points":  15
                        },
                        {
                            "text":  "jewelry",
                            "points":  13
                        },
                        {
                            "text":  "separate house",
                            "points":  13
                        },
                        {
                            "text":  "trip without me",
                            "points":  11
                        },
                        {
                            "text":  "yacht",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  140397,
        "question":  "Name something a man who's self-conscious about his weight might do to look thin.",
        "answers":  [
                        {
                            "text":  "wear black",
                            "points":  24
                        },
                        {
                            "text":  "baggy/untuck",
                            "points":  23
                        },
                        {
                            "text":  "girdle/tight garb",
                            "points":  18
                        },
                        {
                            "text":  "diet/exercise",
                            "points":  11
                        },
                        {
                            "text":  "suck in gut",
                            "points":  11
                        },
                        {
                            "text":  "skinny mirror",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140398,
        "question":  "Name something that's not appropriate to wear to a funeral even if it's black.",
        "answers":  [
                        {
                            "text":  "bikini/trunks",
                            "points":  22
                        },
                        {
                            "text":  "miniskirt/sexy dress",
                            "points":  22
                        },
                        {
                            "text":  "lingerie/thong",
                            "points":  21
                        },
                        {
                            "text":  "short shorts",
                            "points":  14
                        },
                        {
                            "text":  "tee/halter top",
                            "points":  10
                        },
                        {
                            "text":  "fishnets",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140399,
        "question":  "Name a way a wife might be able to tell that her husband wore a pair of her panties.",
        "answers":  [
                        {
                            "text":  "stretched out",
                            "points":  62
                        },
                        {
                            "text":  "curious odor",
                            "points":  12
                        },
                        {
                            "text":  "dirty/skid mark",
                            "points":  7
                        },
                        {
                            "text":  "she sees him",
                            "points":  3
                        },
                        {
                            "text":  "they're torn",
                            "points":  3
                        },
                        {
                            "text":  "folded wrong",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140400,
        "question":  "Name something you'd be surprised your lover asked you to do to their feet.",
        "answers":  [
                        {
                            "text":  "kiss/lick 'em",
                            "points":  61
                        },
                        {
                            "text":  "rub 'em",
                            "points":  10
                        },
                        {
                            "text":  "wash/clean toe jam",
                            "points":  7
                        },
                        {
                            "text":  "tickle 'em",
                            "points":  5
                        },
                        {
                            "text":  "clip toenails",
                            "points":  4
                        },
                        {
                            "text":  "smell 'em",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140401,
        "question":  "Name something your ex stuck you with.",
        "answers":  [
                        {
                            "text":  "bills/alimony",
                            "points":  59
                        },
                        {
                            "text":  "tears/bad memories",
                            "points":  9
                        },
                        {
                            "text":  "nothing/took all",
                            "points":  6
                        },
                        {
                            "text":  "rotten kid",
                            "points":  6
                        },
                        {
                            "text":  "evil pet",
                            "points":  6
                        },
                        {
                            "text":  "herpes/6 std's",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140402,
        "question":  "Name something you'd spend a lot of time standing behind on your first day at a nudist colony.",
        "answers":  [
                        {
                            "text":  "tree/plant",
                            "points":  58
                        },
                        {
                            "text":  "another nudist",
                            "points":  13
                        },
                        {
                            "text":  "towel/blanket",
                            "points":  8
                        },
                        {
                            "text":  "furniture",
                            "points":  5
                        },
                        {
                            "text":  "bar/counter",
                            "points":  3
                        },
                        {
                            "text":  "sign",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140403,
        "question":  "Name something the doctor at the nudist camp urgent care might be wearing.",
        "answers":  [
                        {
                            "text":  "stethoscope",
                            "points":  57
                        },
                        {
                            "text":  "mask/shield",
                            "points":  15
                        },
                        {
                            "text":  "b-day suit",
                            "points":  5
                        },
                        {
                            "text":  "rubber gloves",
                            "points":  5
                        },
                        {
                            "text":  "loincloth/undies",
                            "points":  4
                        },
                        {
                            "text":  "sunscreen",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140404,
        "question":  "We asked 100 men... In your nightmares, you're naked in bed with a woman who looks just like your who?",
        "answers":  [
                        {
                            "text":  "mom",
                            "points":  41
                        },
                        {
                            "text":  "mother-in-law",
                            "points":  18
                        },
                        {
                            "text":  "wife",
                            "points":  11
                        },
                        {
                            "text":  "ex",
                            "points":  8
                        },
                        {
                            "text":  "boss/coworker",
                            "points":  7
                        },
                        {
                            "text":  "sister",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140405,
        "question":  "We asked 100 married women... Name a reason you never miss your husband.",
        "answers":  [
                        {
                            "text":  "he never leaves",
                            "points":  37
                        },
                        {
                            "text":  "do what i want/space",
                            "points":  16
                        },
                        {
                            "text":  "he snores",
                            "points":  14
                        },
                        {
                            "text":  "he's a grouch",
                            "points":  13
                        },
                        {
                            "text":  "he yaps nonstop",
                            "points":  6
                        },
                        {
                            "text":  "he farts/smells",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140406,
        "question":  "My carpenter became a dentist and took out my wisdom teeth with a what?",
        "answers":  [
                        {
                            "text":  "pair of pliers",
                            "points":  33
                        },
                        {
                            "text":  "hammer/jackhammer",
                            "points":  21
                        },
                        {
                            "text":  "drill",
                            "points":  14
                        },
                        {
                            "text":  "chisel",
                            "points":  10
                        },
                        {
                            "text":  "saw",
                            "points":  7
                        },
                        {
                            "text":  "wrench",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140407,
        "question":  "At the funeral director's house, he has some beautiful coffins that he uses as what?",
        "answers":  [
                        {
                            "text":  "beds",
                            "points":  28
                        },
                        {
                            "text":  "planters/for weed",
                            "points":  19
                        },
                        {
                            "text":  "tables",
                            "points":  15
                        },
                        {
                            "text":  "decoration/display",
                            "points":  12
                        },
                        {
                            "text":  "storage",
                            "points":  9
                        },
                        {
                            "text":  "seating",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  140408,
        "question":  "If Santa Claus upgraded to a jet, what would he do with his reindeer?",
        "answers":  [
                        {
                            "text":  "retire/fire 'em",
                            "points":  26
                        },
                        {
                            "text":  "bring on jet",
                            "points":  22
                        },
                        {
                            "text":  "keep as pets",
                            "points":  18
                        },
                        {
                            "text":  "shoot/eat 'em",
                            "points":  11
                        },
                        {
                            "text":  "petting zoo",
                            "points":  7
                        },
                        {
                            "text":  "sell/to glue factory",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  140409,
        "question":  "We asked 100 married men... Fill in the blank: You'd be alarmed if your baby was starting to look like the ______ man.",
        "answers":  [
                        {
                            "text":  "the mailman",
                            "points":  26
                        },
                        {
                            "text":  "the milkman",
                            "points":  18
                        },
                        {
                            "text":  "spider-man",
                            "points":  15
                        },
                        {
                            "text":  "the michelin man",
                            "points":  12
                        },
                        {
                            "text":  "the batman",
                            "points":  10
                        },
                        {
                            "text":  "the garbage man",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  140410,
        "question":  "Name something you'd be shocked that your boss gave everyone at work.",
        "answers":  [
                        {
                            "text":  "raises/money",
                            "points":  74
                        },
                        {
                            "text":  "french kisses",
                            "points":  4
                        },
                        {
                            "text":  "time off",
                            "points":  3
                        },
                        {
                            "text":  "promotions",
                            "points":  3
                        },
                        {
                            "text":  "cars",
                            "points":  3
                        },
                        {
                            "text":  "praise",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140411,
        "question":  "Name something a little kid might sell at his \"I'm running away from home\" sale.",
        "answers":  [
                        {
                            "text":  "toys",
                            "points":  47
                        },
                        {
                            "text":  "bed/bedding",
                            "points":  13
                        },
                        {
                            "text":  "garb/mom's undies",
                            "points":  8
                        },
                        {
                            "text":  "books/comics",
                            "points":  8
                        },
                        {
                            "text":  "sibling",
                            "points":  7
                        },
                        {
                            "text":  "lemonade",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  140412,
        "question":  "Fill in the blank: You might say to yourself, \"When did my ______ get so big?\"",
        "answers":  [
                        {
                            "text":  "belly/waist",
                            "points":  44
                        },
                        {
                            "text":  "butt/sphincter",
                            "points":  27
                        },
                        {
                            "text":  "nose/honker",
                            "points":  8
                        },
                        {
                            "text":  "feet/toes",
                            "points":  4
                        },
                        {
                            "text":  "debt/bills",
                            "points":  3
                        },
                        {
                            "text":  "ego/\"head\"",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140413,
        "question":  "Name something that came flying out of grandma's cleavage when she sneezed hard.",
        "answers":  [
                        {
                            "text":  "tissue/snot rag",
                            "points":  38
                        },
                        {
                            "text":  "cash/coin purse",
                            "points":  33
                        },
                        {
                            "text":  "food/ham slice",
                            "points":  7
                        },
                        {
                            "text":  "necklace",
                            "points":  4
                        },
                        {
                            "text":  "cell phone",
                            "points":  4
                        },
                        {
                            "text":  "critters/flies",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140414,
        "question":  "We asked 100 women... Fill in the blank: Sure, I'll go camping as long as there's a ______ in our tent.",
        "answers":  [
                        {
                            "text":  "bed/air mattress",
                            "points":  38
                        },
                        {
                            "text":  "bathroom/shower",
                            "points":  32
                        },
                        {
                            "text":  "heater/ac",
                            "points":  10
                        },
                        {
                            "text":  "mirror",
                            "points":  3
                        },
                        {
                            "text":  "gun/weapon",
                            "points":  3
                        },
                        {
                            "text":  "tv/lifetime movie",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140415,
        "question":  "Name a place where someone might be singing like a canary.",
        "answers":  [
                        {
                            "text":  "jail/police stn.",
                            "points":  37
                        },
                        {
                            "text":  "shower",
                            "points":  27
                        },
                        {
                            "text":  "court",
                            "points":  9
                        },
                        {
                            "text":  "concert/musical",
                            "points":  6
                        },
                        {
                            "text":  "church",
                            "points":  5
                        },
                        {
                            "text":  "karaoke bar",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140416,
        "question":  "We asked 100 men... Other than money, name something a rich guy has more of than you do.",
        "answers":  [
                        {
                            "text":  "cars/jags",
                            "points":  33
                        },
                        {
                            "text":  "houses",
                            "points":  17
                        },
                        {
                            "text":  "babes",
                            "points":  11
                        },
                        {
                            "text":  "influence/fame",
                            "points":  11
                        },
                        {
                            "text":  "ego",
                            "points":  10
                        },
                        {
                            "text":  "friends",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  140417,
        "question":  "No kid wants to trick-or-treat at a house that gives out what?",
        "answers":  [
                        {
                            "text":  "fruit/health food",
                            "points":  57
                        },
                        {
                            "text":  "toothbrush/paste",
                            "points":  12
                        },
                        {
                            "text":  "lame candy",
                            "points":  6
                        },
                        {
                            "text":  "pencil/pen",
                            "points":  6
                        },
                        {
                            "text":  "book/scientology guide",
                            "points":  4
                        },
                        {
                            "text":  "pennies",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140418,
        "question":  "We asked 100 men... Name something you'd be surprised a 100-year-old man does faster than you.",
        "answers":  [
                        {
                            "text":  "walk/run a 10k",
                            "points":  55
                        },
                        {
                            "text":  "mow the lawn",
                            "points":  10
                        },
                        {
                            "text":  "swim",
                            "points":  9
                        },
                        {
                            "text":  "boink",
                            "points":  9
                        },
                        {
                            "text":  "text",
                            "points":  3
                        },
                        {
                            "text":  "think",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140419,
        "question":  "Name something Itty Bitty Betty put in her bra to give herself a bigger, better bust.",
        "answers":  [
                        {
                            "text":  "tissue/t.p.",
                            "points":  54
                        },
                        {
                            "text":  "socks/stockings",
                            "points":  17
                        },
                        {
                            "text":  "falsies/pads",
                            "points":  8
                        },
                        {
                            "text":  "oranges",
                            "points":  3
                        },
                        {
                            "text":  "balloons",
                            "points":  3
                        },
                        {
                            "text":  "melon gelatin",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140420,
        "question":  "Name something specific a man might swallow right before he goes to prison so it comes out later.",
        "answers":  [
                        {
                            "text":  "drugs",
                            "points":  41
                        },
                        {
                            "text":  "key to cell",
                            "points":  16
                        },
                        {
                            "text":  "phone",
                            "points":  11
                        },
                        {
                            "text":  "money",
                            "points":  10
                        },
                        {
                            "text":  "pocketknife",
                            "points":  6
                        },
                        {
                            "text":  "lock pick",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140421,
        "question":  "Fill in the blank: After grandma smoked a joint, she started ______ing like crazy.",
        "answers":  [
                        {
                            "text":  "eat/cooking",
                            "points":  30
                        },
                        {
                            "text":  "laughing",
                            "points":  22
                        },
                        {
                            "text":  "talk/cussing",
                            "points":  15
                        },
                        {
                            "text":  "dance/twerking",
                            "points":  14
                        },
                        {
                            "text":  "coughing",
                            "points":  4
                        },
                        {
                            "text":  "singing/snoop songs",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140422,
        "question":  "Name something you'd hate to realize you peed on when you came home drunk last night.",
        "answers":  [
                        {
                            "text":  "bed",
                            "points":  27
                        },
                        {
                            "text":  "floor/persian rug",
                            "points":  18
                        },
                        {
                            "text":  "me/my clothes",
                            "points":  13
                        },
                        {
                            "text":  "dog/pet",
                            "points":  12
                        },
                        {
                            "text":  "sofa",
                            "points":  9
                        },
                        {
                            "text":  "bae/family",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  140423,
        "question":  "Tony is a real lowlife. For Valentine's Day, he stole two ______s -- one for his wife and the other for his girlfriend.",
        "answers":  [
                        {
                            "text":  "roses",
                            "points":  24
                        },
                        {
                            "text":  "boxes of candy",
                            "points":  23
                        },
                        {
                            "text":  "rings/jewelry",
                            "points":  16
                        },
                        {
                            "text":  "cards",
                            "points":  13
                        },
                        {
                            "text":  "cars",
                            "points":  8
                        },
                        {
                            "text":  "stuffed animals",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140424,
        "question":  "We asked 100 women... Name something your dog never complains about, unlike your man.",
        "answers":  [
                        {
                            "text":  "food/my cooking",
                            "points":  55
                        },
                        {
                            "text":  "housekeeping",
                            "points":  11
                        },
                        {
                            "text":  "no sex life",
                            "points":  7
                        },
                        {
                            "text":  "my weight/odd bod",
                            "points":  7
                        },
                        {
                            "text":  "cuddling/pet'g",
                            "points":  4
                        },
                        {
                            "text":  "our walks",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140425,
        "question":  "We asked 100 parents... Name something you might start doing to get your adult-aged kids to finally move out of the house.",
        "answers":  [
                        {
                            "text":  "charge rent",
                            "points":  50
                        },
                        {
                            "text":  "prance nude",
                            "points":  19
                        },
                        {
                            "text":  "\"clean! do laundry!\"",
                            "points":  7
                        },
                        {
                            "text":  "lock 'em out",
                            "points":  5
                        },
                        {
                            "text":  "move/sell house",
                            "points":  3
                        },
                        {
                            "text":  "pay 'em off",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140426,
        "question":  "The laziest man in the world thinks it's too much effort to change what?",
        "answers":  [
                        {
                            "text":  "undies/clothes",
                            "points":  48
                        },
                        {
                            "text":  "light bulb",
                            "points":  15
                        },
                        {
                            "text":  "tv channel",
                            "points":  8
                        },
                        {
                            "text":  "bad habits",
                            "points":  6
                        },
                        {
                            "text":  "bed sheets",
                            "points":  5
                        },
                        {
                            "text":  "t.p. roll",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140427,
        "question":  "Name something a wife might do to every pair of her cheating husband's underwear.",
        "answers":  [
                        {
                            "text":  "cut/rip up",
                            "points":  42
                        },
                        {
                            "text":  "burn them",
                            "points":  21
                        },
                        {
                            "text":  "itching powder",
                            "points":  9
                        },
                        {
                            "text":  "throw away",
                            "points":  8
                        },
                        {
                            "text":  "dye them/pink",
                            "points":  4
                        },
                        {
                            "text":  "write her name",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140428,
        "question":  "Name a gift a woman's rich boyfriend gets her that makes her feel like she's on a game show.",
        "answers":  [
                        {
                            "text":  "brand new caaar!",
                            "points":  36
                        },
                        {
                            "text":  "diamond/jewelry",
                            "points":  32
                        },
                        {
                            "text":  "appliance/washer",
                            "points":  7
                        },
                        {
                            "text":  "cruise/vacay",
                            "points":  6
                        },
                        {
                            "text":  "designer outfit",
                            "points":  3
                        },
                        {
                            "text":  "80-inch tv",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140429,
        "question":  "Name a sin you'd commit in heaven that might get you sent straight to hell.",
        "answers":  [
                        {
                            "text":  "ho around/lust",
                            "points":  34
                        },
                        {
                            "text":  "swear/lord's name",
                            "points":  23
                        },
                        {
                            "text":  "murder",
                            "points":  15
                        },
                        {
                            "text":  "lie",
                            "points":  7
                        },
                        {
                            "text":  "steal/all the halos",
                            "points":  5
                        },
                        {
                            "text":  "gluttony",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140430,
        "question":  "Fill in the blank: You're not proud of it, but you have eaten an entire ______ in one sitting.",
        "answers":  [
                        {
                            "text":  "pizza",
                            "points":  33
                        },
                        {
                            "text":  "cake/cheesecake",
                            "points":  15
                        },
                        {
                            "text":  "tub of ice cream",
                            "points":  14
                        },
                        {
                            "text":  "bag of chips",
                            "points":  11
                        },
                        {
                            "text":  "pie",
                            "points":  9
                        },
                        {
                            "text":  "candy/bar",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140431,
        "question":  "What's the worst thing to find inside of your house?",
        "answers":  [
                        {
                            "text":  "roaches/bugs",
                            "points":  32
                        },
                        {
                            "text":  "rats/mice",
                            "points":  28
                        },
                        {
                            "text":  "person/mom-in-law",
                            "points":  9
                        },
                        {
                            "text":  "snake",
                            "points":  8
                        },
                        {
                            "text":  "mold",
                            "points":  7
                        },
                        {
                            "text":  "dirt",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140432,
        "question":  "Name something you might put on your boss's chair the day you plan on quitting.",
        "answers":  [
                        {
                            "text":  "whoopee cushion",
                            "points":  23
                        },
                        {
                            "text":  "tack/pin",
                            "points":  22
                        },
                        {
                            "text":  "letter/card",
                            "points":  18
                        },
                        {
                            "text":  "super glue",
                            "points":  9
                        },
                        {
                            "text":  "steamy dump",
                            "points":  8
                        },
                        {
                            "text":  "food/gum/egg",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  140433,
        "question":  "We asked 100 women... When you can't find your rollers, what can you use instead to curl your hair?",
        "answers":  [
                        {
                            "text":  "curling/flat iron",
                            "points":  50
                        },
                        {
                            "text":  "cans/beer cans",
                            "points":  13
                        },
                        {
                            "text":  "cloth/rags",
                            "points":  8
                        },
                        {
                            "text":  "bobby pins",
                            "points":  6
                        },
                        {
                            "text":  "markers/pens",
                            "points":  5
                        },
                        {
                            "text":  "straws",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140434,
        "question":  "Fill in the blank: No, I wasn't caught in the rain. I went to the zoo and a ______ sneezed on me.",
        "answers":  [
                        {
                            "text":  "elephant",
                            "points":  50
                        },
                        {
                            "text":  "camel",
                            "points":  9
                        },
                        {
                            "text":  "ape/monkey",
                            "points":  9
                        },
                        {
                            "text":  "giraffe",
                            "points":  7
                        },
                        {
                            "text":  "hippo",
                            "points":  6
                        },
                        {
                            "text":  "llama",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140435,
        "question":  "Name something Steve Harvey's son might do just like dear old dad.",
        "answers":  [
                        {
                            "text":  "comedy/host",
                            "points":  48
                        },
                        {
                            "text":  "laugh/smile",
                            "points":  16
                        },
                        {
                            "text":  "shave head",
                            "points":  6
                        },
                        {
                            "text":  "grow stache",
                            "points":  6
                        },
                        {
                            "text":  "ladies' man/3 wives",
                            "points":  5
                        },
                        {
                            "text":  "dress",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140436,
        "question":  "Name something you'd want to take with you if you stayed overnight at a cemetery.",
        "answers":  [
                        {
                            "text":  "light/candle",
                            "points":  47
                        },
                        {
                            "text":  "weapon",
                            "points":  13
                        },
                        {
                            "text":  "pillow/blanket",
                            "points":  10
                        },
                        {
                            "text":  "cross/rosary",
                            "points":  8
                        },
                        {
                            "text":  "company/a priest",
                            "points":  5
                        },
                        {
                            "text":  "video camera",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140437,
        "question":  "Give me a nickname a man might call his wife with the word \"sweet\" in it.",
        "answers":  [
                        {
                            "text":  "sweetheart",
                            "points":  44
                        },
                        {
                            "text":  "sweet cheeks",
                            "points":  19
                        },
                        {
                            "text":  "sweetie/pie",
                            "points":  12
                        },
                        {
                            "text":  "sweet lips",
                            "points":  4
                        },
                        {
                            "text":  "sweet buns/arse",
                            "points":  4
                        },
                        {
                            "text":  "sweet pea",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140438,
        "question":  "Fill in the blank: A woman married for 70 years said, \"I credit our long marriage to ______ing my husband every day.\"",
        "answers":  [
                        {
                            "text":  "kissing/hugging",
                            "points":  36
                        },
                        {
                            "text":  "ignoring",
                            "points":  19
                        },
                        {
                            "text":  "boinking",
                            "points":  9
                        },
                        {
                            "text":  "feeding",
                            "points":  8
                        },
                        {
                            "text":  "talk'g to/threaten'g",
                            "points":  8
                        },
                        {
                            "text":  "loving",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  140439,
        "question":  "Name something you wish you'd had a different one of on your wedding day.",
        "answers":  [
                        {
                            "text":  "spouse",
                            "points":  33
                        },
                        {
                            "text":  "dress/tux/garb",
                            "points":  23
                        },
                        {
                            "text":  "ring",
                            "points":  11
                        },
                        {
                            "text":  "photographer/pic",
                            "points":  9
                        },
                        {
                            "text":  "bridesmaid/best man",
                            "points":  5
                        },
                        {
                            "text":  "venue",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140440,
        "question":  "Name something you'd find at grandma's place that tells you she's a bad grandma.",
        "answers":  [
                        {
                            "text":  "drugs/meth lab",
                            "points":  33
                        },
                        {
                            "text":  "bathtub gin",
                            "points":  18
                        },
                        {
                            "text":  "whip/sex toy",
                            "points":  18
                        },
                        {
                            "text":  "gun/taser",
                            "points":  8
                        },
                        {
                            "text":  "bad candy/food",
                            "points":  5
                        },
                        {
                            "text":  "condoms/40-pack",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140441,
        "question":  "Name a holiday where you hope you'll have a good time but you never do.",
        "answers":  [
                        {
                            "text":  "new year's",
                            "points":  33
                        },
                        {
                            "text":  "christmas",
                            "points":  17
                        },
                        {
                            "text":  "thanksgiving",
                            "points":  15
                        },
                        {
                            "text":  "valentine's day",
                            "points":  10
                        },
                        {
                            "text":  "halloween",
                            "points":  6
                        },
                        {
                            "text":  "4th of july",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140442,
        "question":  "We asked 100 men... Tell me the sexiest thing to watch a woman eat.",
        "answers":  [
                        {
                            "text":  "banana",
                            "points":  32
                        },
                        {
                            "text":  "ice cream/popsicle",
                            "points":  19
                        },
                        {
                            "text":  "strawberry",
                            "points":  13
                        },
                        {
                            "text":  "cucumber",
                            "points":  10
                        },
                        {
                            "text":  "whipped cream",
                            "points":  7
                        },
                        {
                            "text":  "breadstick",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140443,
        "question":  "Name something a vampire might have more than one of.",
        "answers":  [
                        {
                            "text":  "coffins",
                            "points":  27
                        },
                        {
                            "text":  "fangs/teeth",
                            "points":  27
                        },
                        {
                            "text":  "vials of blood",
                            "points":  13
                        },
                        {
                            "text":  "capes",
                            "points":  8
                        },
                        {
                            "text":  "brides/dates",
                            "points":  7
                        },
                        {
                            "text":  "victims",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140444,
        "question":  "Name something that might be full of holes.",
        "answers":  [
                        {
                            "text":  "swiss cheese",
                            "points":  45
                        },
                        {
                            "text":  "clothes",
                            "points":  14
                        },
                        {
                            "text":  "colander/strainer",
                            "points":  12
                        },
                        {
                            "text":  "alibi/story",
                            "points":  6
                        },
                        {
                            "text":  "net",
                            "points":  5
                        },
                        {
                            "text":  "sponge",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140445,
        "question":  "If you become a nudist, name a place that you might not be welcome anymore.",
        "answers":  [
                        {
                            "text":  "church",
                            "points":  45
                        },
                        {
                            "text":  "mall/grocery",
                            "points":  12
                        },
                        {
                            "text":  "eatery/buffet",
                            "points":  11
                        },
                        {
                            "text":  "school",
                            "points":  7
                        },
                        {
                            "text":  "family/friend house",
                            "points":  6
                        },
                        {
                            "text":  "my own home",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140446,
        "question":  "After you die, name something you'd hate for someone to do to your grave.",
        "answers":  [
                        {
                            "text":  "pee/drop a deuce",
                            "points":  43
                        },
                        {
                            "text":  "spit on it",
                            "points":  16
                        },
                        {
                            "text":  "dig up/move it",
                            "points":  14
                        },
                        {
                            "text":  "dance on it",
                            "points":  5
                        },
                        {
                            "text":  "ignore/forget it",
                            "points":  4
                        },
                        {
                            "text":  "walk/stomp on it",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140447,
        "question":  "As long as you live, name someone you never want to accidentally see naked.",
        "answers":  [
                        {
                            "text":  "my parents",
                            "points":  41
                        },
                        {
                            "text":  "my grandparents",
                            "points":  18
                        },
                        {
                            "text":  "politician",
                            "points":  13
                        },
                        {
                            "text":  "my in-law",
                            "points":  5
                        },
                        {
                            "text":  "steve harvey",
                            "points":  4
                        },
                        {
                            "text":  "my sibling",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140448,
        "question":  "Name a kind of paper that a dumb guy might use to roll a joint.",
        "answers":  [
                        {
                            "text":  "toilet paper",
                            "points":  39
                        },
                        {
                            "text":  "newspaper",
                            "points":  19
                        },
                        {
                            "text":  "sheet of paper",
                            "points":  12
                        },
                        {
                            "text":  "$/a benjamin",
                            "points":  9
                        },
                        {
                            "text":  "wax paper",
                            "points":  3
                        },
                        {
                            "text":  "wrap/tissue paper",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140449,
        "question":  "Name something some men can store under their man boobs.",
        "answers":  [
                        {
                            "text":  "$/wallet/i.d.",
                            "points":  36
                        },
                        {
                            "text":  "snack/cheese",
                            "points":  25
                        },
                        {
                            "text":  "pen/pencil",
                            "points":  8
                        },
                        {
                            "text":  "the remote",
                            "points":  7
                        },
                        {
                            "text":  "cigs/cigars",
                            "points":  5
                        },
                        {
                            "text":  "odorous sweat",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140450,
        "question":  "Name someone you'd be shocked just patted you on the bottom.",
        "answers":  [
                        {
                            "text":  "boss",
                            "points":  35
                        },
                        {
                            "text":  "clergy/pastor",
                            "points":  20
                        },
                        {
                            "text":  "stranger/perv",
                            "points":  11
                        },
                        {
                            "text":  "parents",
                            "points":  7
                        },
                        {
                            "text":  "celeb/steve",
                            "points":  7
                        },
                        {
                            "text":  "my in-law",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140451,
        "question":  "If two of Santa's elves got into a fight, name something one of them might use as a weapon.",
        "answers":  [
                        {
                            "text":  "candy cane",
                            "points":  27
                        },
                        {
                            "text":  "toys/bat",
                            "points":  27
                        },
                        {
                            "text":  "hammer/tool",
                            "points":  10
                        },
                        {
                            "text":  "antlers/reindeer",
                            "points":  8
                        },
                        {
                            "text":  "pointy shoes/garb",
                            "points":  7
                        },
                        {
                            "text":  "snowball/ice",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  140452,
        "question":  "Steve Harvey has probably hired a special person whose sole job is to do what for him?",
        "answers":  [
                        {
                            "text":  "shine/shave head",
                            "points":  25
                        },
                        {
                            "text":  "groom 'stache",
                            "points":  23
                        },
                        {
                            "text":  "dress him",
                            "points":  20
                        },
                        {
                            "text":  "write/approve jokes",
                            "points":  7
                        },
                        {
                            "text":  "drive him",
                            "points":  5
                        },
                        {
                            "text":  "cook",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140453,
        "question":  "We asked 100 women... Give me a word starting with S that would describe your man in a Speedo.",
        "answers":  [
                        {
                            "text":  "sexy",
                            "points":  44
                        },
                        {
                            "text":  "silly",
                            "points":  16
                        },
                        {
                            "text":  "scary",
                            "points":  10
                        },
                        {
                            "text":  "sloppy",
                            "points":  8
                        },
                        {
                            "text":  "strange",
                            "points":  3
                        },
                        {
                            "text":  "skinny",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140454,
        "question":  "Name something that's been up your nose.",
        "answers":  [
                        {
                            "text":  "a finger",
                            "points":  39
                        },
                        {
                            "text":  "a bug",
                            "points":  14
                        },
                        {
                            "text":  "snot/booger",
                            "points":  9
                        },
                        {
                            "text":  "nasal spray",
                            "points":  9
                        },
                        {
                            "text":  "tissue",
                            "points":  8
                        },
                        {
                            "text":  "swab/covid test",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140455,
        "question":  "Name something a wife might find in her husband's car after he's been to a strip club.",
        "answers":  [
                        {
                            "text":  "wad o' singles",
                            "points":  28
                        },
                        {
                            "text":  "glitter/sequins",
                            "points":  25
                        },
                        {
                            "text":  "g-string",
                            "points":  20
                        },
                        {
                            "text":  "matchbook",
                            "points":  4
                        },
                        {
                            "text":  "love glove",
                            "points":  4
                        },
                        {
                            "text":  "business card",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140456,
        "question":  "What would you put in your sandwich if people at work were always eating your lunch?",
        "answers":  [
                        {
                            "text":  "hot sauce/pepper",
                            "points":  47
                        },
                        {
                            "text":  "laxative",
                            "points":  18
                        },
                        {
                            "text":  "sardines/fish",
                            "points":  10
                        },
                        {
                            "text":  "horseradish",
                            "points":  3
                        },
                        {
                            "text":  "sand/cat litter",
                            "points":  3
                        },
                        {
                            "text":  "bug/maggots",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140457,
        "question":  "Name something a lifeguard might be wearing when he works at a nude beach.",
        "answers":  [
                        {
                            "text":  "whistle",
                            "points":  43
                        },
                        {
                            "text":  "sunscreen",
                            "points":  15
                        },
                        {
                            "text":  "nada/impish smile",
                            "points":  7
                        },
                        {
                            "text":  "sunglasses",
                            "points":  7
                        },
                        {
                            "text":  "vest/preserver",
                            "points":  6
                        },
                        {
                            "text":  "trunks",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140458,
        "question":  "What do you take to bed with you that you'd also like to take to heaven with you?",
        "answers":  [
                        {
                            "text":  "bae/of the day",
                            "points":  34
                        },
                        {
                            "text":  "pillow/bedding",
                            "points":  18
                        },
                        {
                            "text":  "dog/pet",
                            "points":  15
                        },
                        {
                            "text":  "phone",
                            "points":  6
                        },
                        {
                            "text":  "book/kindle",
                            "points":  5
                        },
                        {
                            "text":  "my body/mind",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140459,
        "question":  "Name something that gets rolled up.",
        "answers":  [
                        {
                            "text":  "joint",
                            "points":  20
                        },
                        {
                            "text":  "burrito/food",
                            "points":  18
                        },
                        {
                            "text":  "sleeping bag",
                            "points":  14
                        },
                        {
                            "text":  "newspaper",
                            "points":  13
                        },
                        {
                            "text":  "carpet/rug",
                            "points":  10
                        },
                        {
                            "text":  "sleeves/clothes",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  140460,
        "question":  "Name something you hope a houseguest brings so they don't use yours.",
        "answers":  [
                        {
                            "text":  "toothbrush",
                            "points":  37
                        },
                        {
                            "text":  "booze",
                            "points":  18
                        },
                        {
                            "text":  "towels",
                            "points":  9
                        },
                        {
                            "text":  "clothes/speedo",
                            "points":  7
                        },
                        {
                            "text":  "soap/shampoo",
                            "points":  6
                        },
                        {
                            "text":  "toilet paper",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140461,
        "question":  "Fill in the blank: You wouldn't want to go swimming if there's ______ in the water.",
        "answers":  [
                        {
                            "text":  "shark",
                            "points":  31
                        },
                        {
                            "text":  "doody/warm whiz",
                            "points":  24
                        },
                        {
                            "text":  "gator/croc",
                            "points":  13
                        },
                        {
                            "text":  "jellyfish",
                            "points":  5
                        },
                        {
                            "text":  "piranha",
                            "points":  5
                        },
                        {
                            "text":  "snake",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140462,
        "question":  "In your fantasies, who are you pushing off a cliff?",
        "answers":  [
                        {
                            "text":  "my ex",
                            "points":  24
                        },
                        {
                            "text":  "politician",
                            "points":  20
                        },
                        {
                            "text":  "boss/coworker",
                            "points":  15
                        },
                        {
                            "text":  "my in-laws",
                            "points":  10
                        },
                        {
                            "text":  "loser mate",
                            "points":  8
                        },
                        {
                            "text":  "bully/worst enemy",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140463,
        "question":  "Name something that starts with the word \"breaking.\"",
        "answers":  [
                        {
                            "text":  "breaking bad",
                            "points":  50
                        },
                        {
                            "text":  "breaking news",
                            "points":  15
                        },
                        {
                            "text":  "breaking up",
                            "points":  5
                        },
                        {
                            "text":  "breaking point",
                            "points":  4
                        },
                        {
                            "text":  "breaking glass",
                            "points":  4
                        },
                        {
                            "text":  "breaking out",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140464,
        "question":  "Fill in the blank: A married man might say, \"I'm spending more time with my mother-in-law ever since she told me she loves ______.\"",
        "answers":  [
                        {
                            "text":  "sports",
                            "points":  38
                        },
                        {
                            "text":  "cooking/food",
                            "points":  18
                        },
                        {
                            "text":  "me!/younger men",
                            "points":  15
                        },
                        {
                            "text":  "$$$/giving it out",
                            "points":  4
                        },
                        {
                            "text":  "drankin'!",
                            "points":  3
                        },
                        {
                            "text":  "dogs",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140465,
        "question":  "Name something you might not bend over to pick up at a nudist colony.",
        "answers":  [
                        {
                            "text":  "soap",
                            "points":  37
                        },
                        {
                            "text":  "penny/cash",
                            "points":  18
                        },
                        {
                            "text":  "food/drink",
                            "points":  10
                        },
                        {
                            "text":  "anything",
                            "points":  6
                        },
                        {
                            "text":  "trash",
                            "points":  5
                        },
                        {
                            "text":  "clothes/i'm a nudist",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140466,
        "question":  "Name something you'd do if your boss showed up to work naked.",
        "answers":  [
                        {
                            "text":  "laugh",
                            "points":  30
                        },
                        {
                            "text":  "leave/quit",
                            "points":  27
                        },
                        {
                            "text":  "call 911/security",
                            "points":  8
                        },
                        {
                            "text":  "look away",
                            "points":  6
                        },
                        {
                            "text":  "cover them up",
                            "points":  5
                        },
                        {
                            "text":  "get naked too!",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140467,
        "question":  "Name a gift that pirates might give each other at Christmas.",
        "answers":  [
                        {
                            "text":  "eye patches",
                            "points":  24
                        },
                        {
                            "text":  "booty/gold",
                            "points":  18
                        },
                        {
                            "text":  "rum/booze",
                            "points":  17
                        },
                        {
                            "text":  "swords",
                            "points":  12
                        },
                        {
                            "text":  "parrots",
                            "points":  6
                        },
                        {
                            "text":  "hooks",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140468,
        "question":  "Fill in the blank: Will you ever ______ me?",
        "answers":  [
                        {
                            "text":  "marry me",
                            "points":  31
                        },
                        {
                            "text":  "love me",
                            "points":  16
                        },
                        {
                            "text":  "leave/divorce me",
                            "points":  10
                        },
                        {
                            "text":  "listen to me",
                            "points":  10
                        },
                        {
                            "text":  "forgive me",
                            "points":  9
                        },
                        {
                            "text":  "trust/believe me",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140469,
        "question":  "We asked 100 married men... Name an animal noise you'd be surprised your wife asked you to make in the bedroom.",
        "answers":  [
                        {
                            "text":  "lion's roar",
                            "points":  20
                        },
                        {
                            "text":  "elephant's trumpet",
                            "points":  13
                        },
                        {
                            "text":  "wolf's howl",
                            "points":  13
                        },
                        {
                            "text":  "tiger's growl",
                            "points":  13
                        },
                        {
                            "text":  "horse's whinny",
                            "points":  11
                        },
                        {
                            "text":  "dog's bark",
                            "points":  10
                        }
                    ]
    },
    {
        "id":  140470,
        "question":  "When you go to heaven and they search your luggage, be sure you're not bringing in what?",
        "answers":  [
                        {
                            "text":  "drugs/angel dust",
                            "points":  22
                        },
                        {
                            "text":  "booze",
                            "points":  16
                        },
                        {
                            "text":  "devil's food",
                            "points":  13
                        },
                        {
                            "text":  "dirty pix",
                            "points":  10
                        },
                        {
                            "text":  "shady person",
                            "points":  9
                        },
                        {
                            "text":  "devil/horns",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  140471,
        "question":  "The Bride of Frankenstein said she married Frankie because of his sexy what?",
        "answers":  [
                        {
                            "text":  "nuts & bolts",
                            "points":  26
                        },
                        {
                            "text":  "face/smile",
                            "points":  16
                        },
                        {
                            "text":  "haircut",
                            "points":  10
                        },
                        {
                            "text":  "voice/grunts",
                            "points":  10
                        },
                        {
                            "text":  "square head shape",
                            "points":  9
                        },
                        {
                            "text":  "butt",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140472,
        "question":  "We asked 100 women... My man and I were getting ready to go on vacation until I saw he was packing what?",
        "answers":  [
                        {
                            "text":  "heat/gun",
                            "points":  20
                        },
                        {
                            "text":  "a speedo",
                            "points":  15
                        },
                        {
                            "text":  "work/computer",
                            "points":  15
                        },
                        {
                            "text":  "golf clubs",
                            "points":  12
                        },
                        {
                            "text":  "to move out",
                            "points":  7
                        },
                        {
                            "text":  "condoms",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140473,
        "question":  "Name a kind of car that most men want but will never be able to afford.",
        "answers":  [
                        {
                            "text":  "lamborghini",
                            "points":  25
                        },
                        {
                            "text":  "ferrari",
                            "points":  14
                        },
                        {
                            "text":  "corvette",
                            "points":  13
                        },
                        {
                            "text":  "porsche",
                            "points":  10
                        },
                        {
                            "text":  "maserati",
                            "points":  5
                        },
                        {
                            "text":  "rolls-royce",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140474,
        "question":  "We asked 100 women... Name something a guy is wearing that makes you turn him down flat for a date.",
        "answers":  [
                        {
                            "text":  "wedding ring",
                            "points":  24
                        },
                        {
                            "text":  "socks & sandals",
                            "points":  17
                        },
                        {
                            "text":  "wig/man bun",
                            "points":  13
                        },
                        {
                            "text":  "skinny/tacky pants",
                            "points":  8
                        },
                        {
                            "text":  "raggedy clothes",
                            "points":  5
                        },
                        {
                            "text":  "fedora hat",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140475,
        "question":  "Name something you pull.",
        "answers":  [
                        {
                            "text":  "wagon/cart",
                            "points":  33
                        },
                        {
                            "text":  "door",
                            "points":  11
                        },
                        {
                            "text":  "hair",
                            "points":  9
                        },
                        {
                            "text":  "rope",
                            "points":  5
                        },
                        {
                            "text":  "taffy",
                            "points":  4
                        },
                        {
                            "text":  "finger",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140476,
        "question":  "Give me an ice cream flavor a stripper might use as her stage name.",
        "answers":  [
                        {
                            "text":  "cherry/jubilee",
                            "points":  15
                        },
                        {
                            "text":  "strawberry",
                            "points":  14
                        },
                        {
                            "text":  "vanilla",
                            "points":  12
                        },
                        {
                            "text":  "chocolate",
                            "points":  11
                        },
                        {
                            "text":  "rocky road",
                            "points":  7
                        },
                        {
                            "text":  "mint",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  140477,
        "question":  "Give me a term of endearment a woman might call her man and her dog.",
        "answers":  [
                        {
                            "text":  "baby",
                            "points":  33
                        },
                        {
                            "text":  "sweetie",
                            "points":  11
                        },
                        {
                            "text":  "honey",
                            "points":  7
                        },
                        {
                            "text":  "boo-boo",
                            "points":  5
                        },
                        {
                            "text":  "buddy",
                            "points":  5
                        },
                        {
                            "text":  "love/lovebug",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140478,
        "question":  "What goes up that you'd be surprised if it didn't come back down?",
        "answers":  [
                        {
                            "text":  "ball",
                            "points":  21
                        },
                        {
                            "text":  "balloon/hot air...",
                            "points":  14
                        },
                        {
                            "text":  "plane",
                            "points":  12
                        },
                        {
                            "text":  "elevator",
                            "points":  6
                        },
                        {
                            "text":  "my weenie",
                            "points":  6
                        },
                        {
                            "text":  "investments",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  140479,
        "question":  "We don't mean to be morbid, but what's the last food you'd like to eat before you die?",
        "answers":  [
                        {
                            "text":  "steak/prime rib",
                            "points":  21
                        },
                        {
                            "text":  "pizza",
                            "points":  14
                        },
                        {
                            "text":  "lobster",
                            "points":  9
                        },
                        {
                            "text":  "candy/chocolates",
                            "points":  8
                        },
                        {
                            "text":  "ice cream",
                            "points":  7
                        },
                        {
                            "text":  "cake",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  140480,
        "question":  "Name something a man buys for himself because his wife refuses to buy it for him.",
        "answers":  [
                        {
                            "text":  "porsche",
                            "points":  20
                        },
                        {
                            "text":  "tools",
                            "points":  11
                        },
                        {
                            "text":  "overalls/clothes",
                            "points":  11
                        },
                        {
                            "text":  "video game/system",
                            "points":  9
                        },
                        {
                            "text":  "x-rated flick",
                            "points":  8
                        },
                        {
                            "text":  "smokes/cubans",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  140481,
        "question":  "If a weatherman described your boss's personality, what weather term would he use?",
        "answers":  [
                        {
                            "text":  "stormy",
                            "points":  26
                        },
                        {
                            "text":  "cloudy",
                            "points":  20
                        },
                        {
                            "text":  "sunny",
                            "points":  5
                        },
                        {
                            "text":  "hurricane",
                            "points":  4
                        },
                        {
                            "text":  "calm",
                            "points":  4
                        },
                        {
                            "text":  "cold",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140482,
        "question":  "Name something a friend gets that you might say, \"That's the biggest one I've ever seen.\"",
        "answers":  [
                        {
                            "text":  "fish/food",
                            "points":  26
                        },
                        {
                            "text":  "car/truck",
                            "points":  14
                        },
                        {
                            "text":  "house",
                            "points":  7
                        },
                        {
                            "text":  "zit",
                            "points":  6
                        },
                        {
                            "text":  "diamond/ring",
                            "points":  5
                        },
                        {
                            "text":  "tv",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140483,
        "question":  "Name something you could do that would finally make your mother proud.",
        "answers":  [
                        {
                            "text":  "get job/as doctor",
                            "points":  19
                        },
                        {
                            "text":  "get hitched",
                            "points":  17
                        },
                        {
                            "text":  "graduate",
                            "points":  9
                        },
                        {
                            "text":  "clean/do laundry",
                            "points":  7
                        },
                        {
                            "text":  "have/raise kid",
                            "points":  6
                        },
                        {
                            "text":  "move out",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140484,
        "question":  "Name the sport that most resembles your lovemaking style.",
        "answers":  [
                        {
                            "text":  "wrestling",
                            "points":  19
                        },
                        {
                            "text":  "tennis/mixed doubles",
                            "points":  10
                        },
                        {
                            "text":  "football",
                            "points":  9
                        },
                        {
                            "text":  "golf",
                            "points":  9
                        },
                        {
                            "text":  "run/100-yd. dash",
                            "points":  7
                        },
                        {
                            "text":  "horse racing",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  140485,
        "question":  "Name a favor a best friend might ask of you and you'd say no.",
        "answers":  [
                        {
                            "text":  "lend money",
                            "points":  33
                        },
                        {
                            "text":  "lie/cover for 'em",
                            "points":  9
                        },
                        {
                            "text":  "sex/swap mates",
                            "points":  6
                        },
                        {
                            "text":  "babysit",
                            "points":  4
                        },
                        {
                            "text":  "borrow car",
                            "points":  4
                        },
                        {
                            "text":  "murder someone",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140486,
        "question":  "Name a successfully funny man who really does laugh all the way to the bank.",
        "answers":  [
                        {
                            "text":  "steve harvey",
                            "points":  20
                        },
                        {
                            "text":  "jerry seinfeld",
                            "points":  13
                        },
                        {
                            "text":  "jim carrey",
                            "points":  8
                        },
                        {
                            "text":  "chris rock",
                            "points":  7
                        },
                        {
                            "text":  "jay leno",
                            "points":  7
                        },
                        {
                            "text":  "adam sandler",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140487,
        "question":  "If Steve Harvey became president, he'd make sure Air Force One had what on board?",
        "answers":  [
                        {
                            "text":  "a bar",
                            "points":  20
                        },
                        {
                            "text":  "tv/only his shows",
                            "points":  15
                        },
                        {
                            "text":  "tasty vittles",
                            "points":  7
                        },
                        {
                            "text":  "closet of suits/garb",
                            "points":  5
                        },
                        {
                            "text":  "mustache comb",
                            "points":  5
                        },
                        {
                            "text":  "random babes",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140488,
        "question":  "Name something a wife would be holding that would really get her husband's attention.",
        "answers":  [
                        {
                            "text":  "lingerie",
                            "points":  18
                        },
                        {
                            "text":  "his pee pee",
                            "points":  12
                        },
                        {
                            "text":  "a gun",
                            "points":  8
                        },
                        {
                            "text":  "a knife",
                            "points":  7
                        },
                        {
                            "text":  "toy/to use on him",
                            "points":  6
                        },
                        {
                            "text":  "food/a banana",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  140489,
        "question":  "Name a place where you might say, \"I don't want to go in there.\"",
        "answers":  [
                        {
                            "text":  "haunted house",
                            "points":  21
                        },
                        {
                            "text":  "cave",
                            "points":  12
                        },
                        {
                            "text":  "funeral home",
                            "points":  6
                        },
                        {
                            "text":  "the slammer",
                            "points":  6
                        },
                        {
                            "text":  "sketchy bar/club",
                            "points":  6
                        },
                        {
                            "text":  "nasty bathroom",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140490,
        "question":  "Name a part of your body that can make bubbles.",
        "answers":  [
                        {
                            "text":  "my mouth",
                            "points":  70
                        },
                        {
                            "text":  "my bugling booty",
                            "points":  16
                        },
                        {
                            "text":  "my snotty honker",
                            "points":  10
                        },
                        {
                            "text":  "my hands",
                            "points":  2
                        },
                        {
                            "text":  "my stomach",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140491,
        "question":  "Name something that gets backed up.",
        "answers":  [
                        {
                            "text":  "toilet/drain",
                            "points":  60
                        },
                        {
                            "text":  "data/documents",
                            "points":  20
                        },
                        {
                            "text":  "traffic",
                            "points":  10
                        },
                        {
                            "text":  "a car",
                            "points":  7
                        },
                        {
                            "text":  "bowels/person",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140492,
        "question":  "We asked 100 single women... What would you do if your fiancé asked you to split the cost of your ring?",
        "answers":  [
                        {
                            "text":  "bye, felicia!",
                            "points":  44
                        },
                        {
                            "text":  "say \"no\"",
                            "points":  19
                        },
                        {
                            "text":  "split it",
                            "points":  16
                        },
                        {
                            "text":  "laugh/\"so funny\"",
                            "points":  11
                        },
                        {
                            "text":  "pick cheaper ring",
                            "points":  10
                        }
                    ]
    },
    {
        "id":  140493,
        "question":  "Name something that might be cut into pieces so it would fit in a car trunk.",
        "answers":  [
                        {
                            "text":  "dead body",
                            "points":  43
                        },
                        {
                            "text":  "wood/trees",
                            "points":  36
                        },
                        {
                            "text":  "old furniture",
                            "points":  8
                        },
                        {
                            "text":  "tasty roadkill",
                            "points":  7
                        },
                        {
                            "text":  "cardboard/box",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  140494,
        "question":  "Name something a female fan asks Steve Harvey to sign that would make his wife say \"No way.\"",
        "answers":  [
                        {
                            "text":  "bod/left boob",
                            "points":  78
                        },
                        {
                            "text":  "bra/boulder holder",
                            "points":  11
                        },
                        {
                            "text":  "panties",
                            "points":  5
                        },
                        {
                            "text":  "blank check",
                            "points":  3
                        },
                        {
                            "text":  "divorce papers",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140495,
        "question":  "Name something that might come out of a piñata at a billionaire's birthday party.",
        "answers":  [
                        {
                            "text":  "ca$h money/gold",
                            "points":  65
                        },
                        {
                            "text":  "jewelry",
                            "points":  26
                        },
                        {
                            "text":  "candy of course!",
                            "points":  4
                        },
                        {
                            "text":  "keys to cars",
                            "points":  2
                        },
                        {
                            "text":  "hussies",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140496,
        "question":  "We asked 100 married men... Name a reason your wife has stopped talking.",
        "answers":  [
                        {
                            "text":  "mad/upset",
                            "points":  57
                        },
                        {
                            "text":  "asleep/tired",
                            "points":  26
                        },
                        {
                            "text":  "eating",
                            "points":  8
                        },
                        {
                            "text":  "laryngitis/sick",
                            "points":  6
                        },
                        {
                            "text":  "she croaked",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140497,
        "question":  "Name an animal a magician hides in his pants that he hopes doesn't bite his magical part.",
        "answers":  [
                        {
                            "text":  "bunny",
                            "points":  54
                        },
                        {
                            "text":  "snake",
                            "points":  18
                        },
                        {
                            "text":  "bird/dove",
                            "points":  17
                        },
                        {
                            "text":  "mouse/rat",
                            "points":  8
                        },
                        {
                            "text":  "snapping turtle",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140498,
        "question":  "Name someone in your life who has a nude photo of you.",
        "answers":  [
                        {
                            "text":  "my parents",
                            "points":  45
                        },
                        {
                            "text":  "my boo",
                            "points":  30
                        },
                        {
                            "text":  "no one",
                            "points":  18
                        },
                        {
                            "text":  "my doctor",
                            "points":  3
                        },
                        {
                            "text":  "my ex",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140499,
        "question":  "We asked 100 single men... Fill in the blank: I'm looking for a woman who has a bigger ______ than mine.",
        "answers":  [
                        {
                            "text":  "heart",
                            "points":  34
                        },
                        {
                            "text":  "bank acct./wallet",
                            "points":  32
                        },
                        {
                            "text":  "pair of boobs",
                            "points":  17
                        },
                        {
                            "text":  "house",
                            "points":  14
                        },
                        {
                            "text":  "booty",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140500,
        "question":  "Name something the camels are judged on at the camel beauty pageant.",
        "answers":  [
                        {
                            "text":  "humpalicious",
                            "points":  74
                        },
                        {
                            "text":  "hot smile/face",
                            "points":  9
                        },
                        {
                            "text":  "best toe/hoof",
                            "points":  7
                        },
                        {
                            "text":  "prettiest coat",
                            "points":  5
                        },
                        {
                            "text":  "spittin'/huffin'",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140501,
        "question":  "We asked 100 women... Fill in the blank: I'd stop seeing a man if he didn't ______ every day.",
        "answers":  [
                        {
                            "text":  "shower",
                            "points":  57
                        },
                        {
                            "text":  "brush teeth",
                            "points":  33
                        },
                        {
                            "text":  "change clothes",
                            "points":  3
                        },
                        {
                            "text":  "shave/his body",
                            "points":  3
                        },
                        {
                            "text":  "call/talk to me",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140502,
        "question":  "Name something a psycho-in-training might do to their ex's clothes for revenge.",
        "answers":  [
                        {
                            "text":  "cut/shred/rip 'em",
                            "points":  38
                        },
                        {
                            "text":  "burn 'em",
                            "points":  34
                        },
                        {
                            "text":  "throw 'em out",
                            "points":  12
                        },
                        {
                            "text":  "wear 'em",
                            "points":  8
                        },
                        {
                            "text":  "bleach 'em",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  140503,
        "question":  "Grandma is sick of grandpa falling asleep in the middle of what?",
        "answers":  [
                        {
                            "text":  "goin' to o-town",
                            "points":  33
                        },
                        {
                            "text":  "tv/wheel of fortune",
                            "points":  32
                        },
                        {
                            "text":  "dinner/meal",
                            "points":  29
                        },
                        {
                            "text":  "church",
                            "points":  2
                        },
                        {
                            "text":  "driving",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140504,
        "question":  "We asked 100 women... If Steve Harvey were giving you a full-body massage, you'd tell him to start where?",
        "answers":  [
                        {
                            "text":  "back, oh yass!",
                            "points":  27
                        },
                        {
                            "text":  "shoulders, mmm!",
                            "points":  25
                        },
                        {
                            "text":  "neck, that's right!",
                            "points":  23
                        },
                        {
                            "text":  "feet, w/ his tongue",
                            "points":  21
                        },
                        {
                            "text":  "scalp, baby!",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140505,
        "question":  "Name a place a man might bring along an ugly friend so he looks better to the women there.",
        "answers":  [
                        {
                            "text":  "bar/nightclub",
                            "points":  86
                        },
                        {
                            "text":  "party/mixer",
                            "points":  4
                        },
                        {
                            "text":  "strip joint",
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
        "id":  140506,
        "question":  "How can you tell if someone is lying to you?",
        "answers":  [
                        {
                            "text":  "shifty eyes/expression",
                            "points":  84
                        },
                        {
                            "text":  "voice/stutter",
                            "points":  5
                        },
                        {
                            "text":  "fidget/twitch",
                            "points":  4
                        },
                        {
                            "text":  "any time lips move",
                            "points":  2
                        },
                        {
                            "text":  "sweating",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140507,
        "question":  "Fill in the blank: Bob said, \"I never believed my wife when she told me she was raised by ducks. But then one day, she ______ed.\"",
        "answers":  [
                        {
                            "text":  "quacked",
                            "points":  79
                        },
                        {
                            "text":  "laid egg/& fried it",
                            "points":  8
                        },
                        {
                            "text":  "waddled",
                            "points":  5
                        },
                        {
                            "text":  "flew south",
                            "points":  3
                        },
                        {
                            "text":  "floated in pond",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140508,
        "question":  "Name something a fisherman does to a fish that his wife might do to him if he cheats.",
        "answers":  [
                        {
                            "text":  "skin, cut & gut",
                            "points":  76
                        },
                        {
                            "text":  "hook/catch",
                            "points":  8
                        },
                        {
                            "text":  "hit/club",
                            "points":  6
                        },
                        {
                            "text":  "release/toss back",
                            "points":  4
                        },
                        {
                            "text":  "batter/cook",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140509,
        "question":  "If a cat had a dinner party, what might it serve to its kitty dinner guests?",
        "answers":  [
                        {
                            "text":  "tuna/fish",
                            "points":  64
                        },
                        {
                            "text":  "mouse mousse",
                            "points":  14
                        },
                        {
                            "text":  "meow mix",
                            "points":  8
                        },
                        {
                            "text":  "milk/cream",
                            "points":  6
                        },
                        {
                            "text":  "catnip",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140510,
        "question":  "Name a reason a woman says she likes to date leprechauns.",
        "answers":  [
                        {
                            "text":  "pot o' gold",
                            "points":  57
                        },
                        {
                            "text":  "lucky/magical",
                            "points":  28
                        },
                        {
                            "text":  "digs shorties",
                            "points":  6
                        },
                        {
                            "text":  "into irish dudes",
                            "points":  3
                        },
                        {
                            "text":  "loves green clothes",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140511,
        "question":  "Name a man who is a game show legend.",
        "answers":  [
                        {
                            "text":  "alex trebek",
                            "points":  54
                        },
                        {
                            "text":  "bob barker",
                            "points":  24
                        },
                        {
                            "text":  "steve harvey",
                            "points":  11
                        },
                        {
                            "text":  "pat sajak",
                            "points":  5
                        },
                        {
                            "text":  "richard dawson",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140512,
        "question":  "Name something a man buys his new wife just to irritate his ex-wife.",
        "answers":  [
                        {
                            "text":  "car/yearly",
                            "points":  53
                        },
                        {
                            "text":  "20-ct. ring",
                            "points":  33
                        },
                        {
                            "text":  "house/next door",
                            "points":  6
                        },
                        {
                            "text":  "bigger boobs",
                            "points":  3
                        },
                        {
                            "text":  "clothes/lingerie",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140513,
        "question":  "We asked 100 women... What do you hope your man doesn't rip right off you in the heat of passion?",
        "answers":  [
                        {
                            "text":  "jewelry/piercing",
                            "points":  44
                        },
                        {
                            "text":  "bra/clothes",
                            "points":  34
                        },
                        {
                            "text":  "hair/extension",
                            "points":  12
                        },
                        {
                            "text":  "body part/head",
                            "points":  5
                        },
                        {
                            "text":  "glasses",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140514,
        "question":  "We asked 100 married women... You'd be shocked if you discovered that your husband bought your mom what?",
        "answers":  [
                        {
                            "text":  "lingerie/vinyl thong",
                            "points":  34
                        },
                        {
                            "text":  "flowers",
                            "points":  21
                        },
                        {
                            "text":  "jewelry/engage ring",
                            "points":  20
                        },
                        {
                            "text":  "car",
                            "points":  13
                        },
                        {
                            "text":  "anything at all",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  140515,
        "question":  "Name a reason a woman might marry a dumb guy.",
        "answers":  [
                        {
                            "text":  "money",
                            "points":  70
                        },
                        {
                            "text":  "she's dumb/feel smart",
                            "points":  10
                        },
                        {
                            "text":  "he's hot",
                            "points":  9
                        },
                        {
                            "text":  "boss him around",
                            "points":  4
                        },
                        {
                            "text":  "love",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140516,
        "question":  "To a kid, having an innie belly button is useful for storing what?",
        "answers":  [
                        {
                            "text":  "candy/peas",
                            "points":  55
                        },
                        {
                            "text":  "lint/dirt",
                            "points":  32
                        },
                        {
                            "text":  "coin",
                            "points":  5
                        },
                        {
                            "text":  "marble/toy",
                            "points":  2
                        },
                        {
                            "text":  "boogers",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140517,
        "question":  "Name a part of her cheating husband a wife might shave the hair off of while he's asleep.",
        "answers":  [
                        {
                            "text":  "head",
                            "points":  50
                        },
                        {
                            "text":  "his hairy manilow",
                            "points":  24
                        },
                        {
                            "text":  "eyebrows",
                            "points":  9
                        },
                        {
                            "text":  "chest",
                            "points":  8
                        },
                        {
                            "text":  "beard/stache",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140518,
        "question":  "Name an occupation where you might have to do the splits.",
        "answers":  [
                        {
                            "text":  "gymnast/acrobat",
                            "points":  48
                        },
                        {
                            "text":  "cheerleader",
                            "points":  17
                        },
                        {
                            "text":  "stripper",
                            "points":  13
                        },
                        {
                            "text":  "dancer/ballet",
                            "points":  13
                        },
                        {
                            "text":  "yoga instructor",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140519,
        "question":  "Name something that could go wrong on a cruise.",
        "answers":  [
                        {
                            "text":  "sick/\"the trots\"",
                            "points":  46
                        },
                        {
                            "text":  "sinks/iceberg",
                            "points":  32
                        },
                        {
                            "text":  "fall overboard",
                            "points":  12
                        },
                        {
                            "text":  "storm/weather",
                            "points":  4
                        },
                        {
                            "text":  "run out of booze",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140520,
        "question":  "Name something you'd have to get used to if you were a fly.",
        "answers":  [
                        {
                            "text":  "swatted at/death",
                            "points":  41
                        },
                        {
                            "text":  "eat poo/trash",
                            "points":  33
                        },
                        {
                            "text":  "fly'g/wind",
                            "points":  17
                        },
                        {
                            "text":  "compound eyes",
                            "points":  3
                        },
                        {
                            "text":  "glass/windows",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140521,
        "question":  "Name something Kermit might say he's glad that Miss Piggy doesn't do like a real pig.",
        "answers":  [
                        {
                            "text":  "squeal",
                            "points":  34
                        },
                        {
                            "text":  "roll in mud",
                            "points":  32
                        },
                        {
                            "text":  "eat/her young",
                            "points":  21
                        },
                        {
                            "text":  "smell",
                            "points":  7
                        },
                        {
                            "text":  "kiss/rub snouts",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140522,
        "question":  "Name something a woman might do with a picture of the man who dumped her.",
        "answers":  [
                        {
                            "text":  "burn it",
                            "points":  71
                        },
                        {
                            "text":  "cut/rip it up",
                            "points":  16
                        },
                        {
                            "text":  "throw darts at it",
                            "points":  4
                        },
                        {
                            "text":  "draw on it",
                            "points":  2
                        },
                        {
                            "text":  "poop/pee on it",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140523,
        "question":  "We asked 100 married men... Fill in the blank: I really hope my wife never ______s me.",
        "answers":  [
                        {
                            "text":  "leaves/divorces",
                            "points":  63
                        },
                        {
                            "text":  "kills/shoots",
                            "points":  15
                        },
                        {
                            "text":  "googles",
                            "points":  6
                        },
                        {
                            "text":  "hits/kicks",
                            "points":  6
                        },
                        {
                            "text":  "dies/croaks on me",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140524,
        "question":  "Name a part of your body with a hole that you wish you could open and shut with a zipper.",
        "answers":  [
                        {
                            "text":  "mouth",
                            "points":  60
                        },
                        {
                            "text":  "ears",
                            "points":  15
                        },
                        {
                            "text":  "butt/cinnamon ring",
                            "points":  12
                        },
                        {
                            "text":  "nose",
                            "points":  5
                        },
                        {
                            "text":  "cavernous navel",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140525,
        "question":  "A cheating husband would be mortified if his wife had him served with divorce papers where?",
        "answers":  [
                        {
                            "text":  "work",
                            "points":  58
                        },
                        {
                            "text":  "love nest/ho's bed",
                            "points":  24
                        },
                        {
                            "text":  "church",
                            "points":  6
                        },
                        {
                            "text":  "home/on crapper",
                            "points":  5
                        },
                        {
                            "text":  "his folks' house",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140526,
        "question":  "Name a specific part of a woman's body that a man might say is his favorite.",
        "answers":  [
                        {
                            "text":  "mt. everbreast",
                            "points":  48
                        },
                        {
                            "text":  "that cake!/butt",
                            "points":  27
                        },
                        {
                            "text":  "face/eyes",
                            "points":  10
                        },
                        {
                            "text":  "legs/thighs",
                            "points":  7
                        },
                        {
                            "text":  "neck",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140527,
        "question":  "Name the first thing Steve Harvey bought when he made his first million.",
        "answers":  [
                        {
                            "text":  "mansion/property",
                            "points":  46
                        },
                        {
                            "text":  "bentley/car",
                            "points":  37
                        },
                        {
                            "text":  "clothes/purple suit",
                            "points":  8
                        },
                        {
                            "text":  "yacht",
                            "points":  2
                        },
                        {
                            "text":  "teeth whitener",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140528,
        "question":  "If men wanted to show off their big booties, what would they wear?",
        "answers":  [
                        {
                            "text":  "tight pants/jeans",
                            "points":  43
                        },
                        {
                            "text":  "short shorts",
                            "points":  25
                        },
                        {
                            "text":  "undies/thongs",
                            "points":  15
                        },
                        {
                            "text":  "speedo/swimsuit",
                            "points":  9
                        },
                        {
                            "text":  "buttless chaps",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140529,
        "question":  "Name something you'd see a lot of at Snoop Dogg's house when he throws a party.",
        "answers":  [
                        {
                            "text":  "ganja/bongs",
                            "points":  67
                        },
                        {
                            "text":  "hooch/kegs",
                            "points":  13
                        },
                        {
                            "text":  "babes/celebs",
                            "points":  9
                        },
                        {
                            "text":  "food/candy",
                            "points":  3
                        },
                        {
                            "text":  "bling",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140530,
        "question":  "Name something specific a woman removes at bedtime that makes her man say, \"Who are you?\"",
        "answers":  [
                        {
                            "text":  "makeup",
                            "points":  66
                        },
                        {
                            "text":  "wig",
                            "points":  17
                        },
                        {
                            "text":  "padded bra",
                            "points":  5
                        },
                        {
                            "text":  "eyelashes",
                            "points":  3
                        },
                        {
                            "text":  "teeth",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140531,
        "question":  "Name something you might do naked in your backyard if you had a really high fence.",
        "answers":  [
                        {
                            "text":  "sunbathe",
                            "points":  62
                        },
                        {
                            "text":  "swim",
                            "points":  25
                        },
                        {
                            "text":  "dance in moonlight",
                            "points":  3
                        },
                        {
                            "text":  "yard work",
                            "points":  2
                        },
                        {
                            "text":  "whiz/dump",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140532,
        "question":  "Name something about a person that might remind you of Donald Duck.",
        "answers":  [
                        {
                            "text":  "voice/laugh",
                            "points":  47
                        },
                        {
                            "text":  "face/wide mouth",
                            "points":  25
                        },
                        {
                            "text":  "waddles",
                            "points":  12
                        },
                        {
                            "text":  "feet/webbed",
                            "points":  6
                        },
                        {
                            "text":  "temper/'tude",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140533,
        "question":  "We asked 100 men... Name something you might lie about on a first date that could come back to haunt you.",
        "answers":  [
                        {
                            "text":  "billionaire",
                            "points":  44
                        },
                        {
                            "text":  "job/male model",
                            "points":  26
                        },
                        {
                            "text":  "age/only 29",
                            "points":  15
                        },
                        {
                            "text":  "exes/# of lovers",
                            "points":  5
                        },
                        {
                            "text":  "being single",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140534,
        "question":  "Name something a cowboy might hide in his boot.",
        "answers":  [
                        {
                            "text":  "knife",
                            "points":  43
                        },
                        {
                            "text":  "money",
                            "points":  20
                        },
                        {
                            "text":  "gun",
                            "points":  19
                        },
                        {
                            "text":  "cigarette/cigar",
                            "points":  8
                        },
                        {
                            "text":  "flask",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140535,
        "question":  "Name a place a woman hopes her ex-husband ends up after their divorce.",
        "answers":  [
                        {
                            "text":  "hell/grave",
                            "points":  38
                        },
                        {
                            "text":  "prison/solitary",
                            "points":  24
                        },
                        {
                            "text":  "\"poor house\"",
                            "points":  24
                        },
                        {
                            "text":  "iceland/far away!",
                            "points":  6
                        },
                        {
                            "text":  "his parents'",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140536,
        "question":  "Name a reason you should never sleep naked.",
        "answers":  [
                        {
                            "text":  "fire/emergency",
                            "points":  61
                        },
                        {
                            "text":  "too cold",
                            "points":  14
                        },
                        {
                            "text":  "bug infestation",
                            "points":  11
                        },
                        {
                            "text":  "kids/relatives",
                            "points":  4
                        },
                        {
                            "text":  "pet on bed/snake",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140537,
        "question":  "Name a fruit a woman might tell her plastic surgeon she wants her bottom to be shaped like.",
        "answers":  [
                        {
                            "text":  "pear",
                            "points":  34
                        },
                        {
                            "text":  "peach",
                            "points":  28
                        },
                        {
                            "text":  "apple",
                            "points":  23
                        },
                        {
                            "text":  "2 watermelons",
                            "points":  4
                        },
                        {
                            "text":  "cantaloupe",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140538,
        "question":  "If a man runs out of shaving cream, name something from the fridge he can slather on for a smooth shave.",
        "answers":  [
                        {
                            "text":  "butter",
                            "points":  32
                        },
                        {
                            "text":  "whipped cream",
                            "points":  30
                        },
                        {
                            "text":  "mayo",
                            "points":  24
                        },
                        {
                            "text":  "sour cream",
                            "points":  4
                        },
                        {
                            "text":  "yogurt",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140539,
        "question":  "Fill in the blank: The mortician might have a collection of ______s he's taken off people.",
        "answers":  [
                        {
                            "text":  "jewelry/rings",
                            "points":  65
                        },
                        {
                            "text":  "body parts/toes",
                            "points":  12
                        },
                        {
                            "text":  "clothes/hats",
                            "points":  7
                        },
                        {
                            "text":  "hair/wigs",
                            "points":  5
                        },
                        {
                            "text":  "fake eyelashes",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140540,
        "question":  "Name a planet a stripper might use as their stage name.",
        "answers":  [
                        {
                            "text":  "venus",
                            "points":  57
                        },
                        {
                            "text":  "uranus",
                            "points":  16
                        },
                        {
                            "text":  "saturn",
                            "points":  8
                        },
                        {
                            "text":  "jupiter",
                            "points":  6
                        },
                        {
                            "text":  "pluto",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140541,
        "question":  "If a woman chooses to give birth underwater, name a sea creature that might assist with the birth.",
        "answers":  [
                        {
                            "text":  "dolphin",
                            "points":  41
                        },
                        {
                            "text":  "octopus",
                            "points":  29
                        },
                        {
                            "text":  "mermaid",
                            "points":  13
                        },
                        {
                            "text":  "whale",
                            "points":  6
                        },
                        {
                            "text":  "seahorse",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140542,
        "question":  "Name something you want to be really clean before you use it.",
        "answers":  [
                        {
                            "text":  "dishes/fork",
                            "points":  34
                        },
                        {
                            "text":  "bathroom/toilet",
                            "points":  33
                        },
                        {
                            "text":  "toothbrush",
                            "points":  21
                        },
                        {
                            "text":  "vibrator",
                            "points":  2
                        },
                        {
                            "text":  "undies",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140543,
        "question":  "We asked 100 single women... You just met a guy who's a perfect physical specimen. He's probably what?",
        "answers":  [
                        {
                            "text":  "gay",
                            "points":  42
                        },
                        {
                            "text":  "too young/17",
                            "points":  16
                        },
                        {
                            "text":  "a doofus",
                            "points":  16
                        },
                        {
                            "text":  "taken",
                            "points":  13
                        },
                        {
                            "text":  "a nut job",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140544,
        "question":  "Name a cramped place that if you can make love in there, you can make it anywhere.",
        "answers":  [
                        {
                            "text":  "car/vw bug",
                            "points":  39
                        },
                        {
                            "text":  "closet/pantry",
                            "points":  26
                        },
                        {
                            "text":  "bathroom/on plane",
                            "points":  22
                        },
                        {
                            "text":  "phone booth",
                            "points":  2
                        },
                        {
                            "text":  "twin bed",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140545,
        "question":  "Name something you'd hate to be caught on camera doing in an elevator.",
        "answers":  [
                        {
                            "text":  "pickin' a winner",
                            "points":  45
                        },
                        {
                            "text":  "sex/boss' wife",
                            "points":  22
                        },
                        {
                            "text":  "adjust/scratch'g",
                            "points":  13
                        },
                        {
                            "text":  "twerking",
                            "points":  5
                        },
                        {
                            "text":  "swappin' spit",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140546,
        "question":  "Name something a man finds in his son's drawer that he decides to keep for himself.",
        "answers":  [
                        {
                            "text":  "nudie pix/vids",
                            "points":  43
                        },
                        {
                            "text":  "drugs/dime bag",
                            "points":  23
                        },
                        {
                            "text":  "rubbers",
                            "points":  11
                        },
                        {
                            "text":  "money",
                            "points":  8
                        },
                        {
                            "text":  "socks/clothes",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140547,
        "question":  "Name the U.S. state that probably has the most nudists.",
        "answers":  [
                        {
                            "text":  "florida",
                            "points":  41
                        },
                        {
                            "text":  "california",
                            "points":  35
                        },
                        {
                            "text":  "hawaii",
                            "points":  8
                        },
                        {
                            "text":  "alabama",
                            "points":  3
                        },
                        {
                            "text":  "oregon",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140548,
        "question":  "We asked 100 women... Name a place a guy wants to take you on a date but you tell him it's too soon.",
        "answers":  [
                        {
                            "text":  "to bed/home",
                            "points":  36
                        },
                        {
                            "text":  "meet his family",
                            "points":  22
                        },
                        {
                            "text":  "no-tell motel",
                            "points":  19
                        },
                        {
                            "text":  "vacay/paris",
                            "points":  9
                        },
                        {
                            "text":  "restaurant",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140549,
        "question":  "Name a wild animal that would be fun to cuddle with if it weren't for the fact that it can kill you.",
        "answers":  [
                        {
                            "text":  "bear/panda",
                            "points":  37
                        },
                        {
                            "text":  "tiger",
                            "points":  27
                        },
                        {
                            "text":  "lion",
                            "points":  18
                        },
                        {
                            "text":  "cheetah",
                            "points":  4
                        },
                        {
                            "text":  "gorilla",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140550,
        "question":  "We asked 100 married men... What's the first thing your wife does after you make love?",
        "answers":  [
                        {
                            "text":  "sleeps",
                            "points":  29
                        },
                        {
                            "text":  "showers",
                            "points":  22
                        },
                        {
                            "text":  "pees",
                            "points":  21
                        },
                        {
                            "text":  "smiles coyly",
                            "points":  12
                        },
                        {
                            "text":  "cuddles...ugh",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140551,
        "question":  "Name a place that you'd be shocked if people started showing up there naked.",
        "answers":  [
                        {
                            "text":  "church",
                            "points":  40
                        },
                        {
                            "text":  "work",
                            "points":  32
                        },
                        {
                            "text":  "store/walmart",
                            "points":  8
                        },
                        {
                            "text":  "the beach",
                            "points":  4
                        },
                        {
                            "text":  "my house",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140552,
        "question":  "We asked 100 men... Name something that makes a woman unforgettable.",
        "answers":  [
                        {
                            "text":  "face/gummy smile",
                            "points":  37
                        },
                        {
                            "text":  "toe-curl'g sex",
                            "points":  19
                        },
                        {
                            "text":  "personality",
                            "points":  13
                        },
                        {
                            "text":  "body",
                            "points":  13
                        },
                        {
                            "text":  "scent",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  140553,
        "question":  "We asked 100 women... You'd hate to see a man do what while he was kissing you?",
        "answers":  [
                        {
                            "text":  "check phone/text",
                            "points":  33
                        },
                        {
                            "text":  "eyes open/bae watch",
                            "points":  29
                        },
                        {
                            "text":  "watch tv/sports",
                            "points":  20
                        },
                        {
                            "text":  "sleep/snore",
                            "points":  3
                        },
                        {
                            "text":  "get \"stimulus package\"",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140554,
        "question":  "Name a place a man might be hanging out where he'd get a text from his wife saying \"I can see you.\"",
        "answers":  [
                        {
                            "text":  "bar/club",
                            "points":  39
                        },
                        {
                            "text":  "strip joint",
                            "points":  35
                        },
                        {
                            "text":  "cafe/hooters",
                            "points":  5
                        },
                        {
                            "text":  "tramp's house",
                            "points":  5
                        },
                        {
                            "text":  "toilet/ladies' room",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140555,
        "question":  "To impress a woman, what might a fireman bring with him on a date?",
        "answers":  [
                        {
                            "text":  "hose/nozzle",
                            "points":  37
                        },
                        {
                            "text":  "uniform/helmet",
                            "points":  23
                        },
                        {
                            "text":  "dalmatian",
                            "points":  11
                        },
                        {
                            "text":  "axe",
                            "points":  9
                        },
                        {
                            "text":  "fire truck",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  140556,
        "question":  "We asked 100 married men... Your wife just announced her mother's moving in. What do you do?",
        "answers":  [
                        {
                            "text":  "leave/move",
                            "points":  29
                        },
                        {
                            "text":  "cry/scream",
                            "points":  23
                        },
                        {
                            "text":  "make room/in garage",
                            "points":  13
                        },
                        {
                            "text":  "change locks",
                            "points":  12
                        },
                        {
                            "text":  "drink...heavily",
                            "points":  10
                        }
                    ]
    },
    {
        "id":  140557,
        "question":  "Name an occupation that is filled with crooks.",
        "answers":  [
                        {
                            "text":  "politician",
                            "points":  52
                        },
                        {
                            "text":  "lawyer",
                            "points":  14
                        },
                        {
                            "text":  "banking",
                            "points":  9
                        },
                        {
                            "text":  "professional thief",
                            "points":  6
                        },
                        {
                            "text":  "car sales",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140558,
        "question":  "What do you think Steve Harvey smells like?",
        "answers":  [
                        {
                            "text":  "cologne/axe",
                            "points":  51
                        },
                        {
                            "text":  "food/parmesan",
                            "points":  19
                        },
                        {
                            "text":  "money",
                            "points":  9
                        },
                        {
                            "text":  "flowers/jasmine",
                            "points":  4
                        },
                        {
                            "text":  "smoke/cigars",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140559,
        "question":  "Name a country where the women's body language is as sexy as the language they speak.",
        "answers":  [
                        {
                            "text":  "france",
                            "points":  40
                        },
                        {
                            "text":  "italy",
                            "points":  22
                        },
                        {
                            "text":  "spain",
                            "points":  11
                        },
                        {
                            "text":  "brazil",
                            "points":  10
                        },
                        {
                            "text":  "sweden",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140560,
        "question":  "Parents always remember their child's first what?",
        "answers":  [
                        {
                            "text":  "word",
                            "points":  52
                        },
                        {
                            "text":  "steps",
                            "points":  19
                        },
                        {
                            "text":  "birthday",
                            "points":  5
                        },
                        {
                            "text":  "day of school",
                            "points":  5
                        },
                        {
                            "text":  "name",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140561,
        "question":  "We asked 100 drivers... Name an animal that, if you see it on the road, you'll pull over and say \"hop in.\"",
        "answers":  [
                        {
                            "text":  "dog",
                            "points":  45
                        },
                        {
                            "text":  "cat",
                            "points":  15
                        },
                        {
                            "text":  "kangaroo",
                            "points":  13
                        },
                        {
                            "text":  "rabbit",
                            "points":  8
                        },
                        {
                            "text":  "playboy bunny",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140562,
        "question":  "A wife tells her husband, \"My mom is coming for a visit. Go clean\" what?",
        "answers":  [
                        {
                            "text":  "the loo",
                            "points":  56
                        },
                        {
                            "text":  "bedrooms",
                            "points":  9
                        },
                        {
                            "text":  "the kitchen/dishes",
                            "points":  8
                        },
                        {
                            "text":  "the garage",
                            "points":  6
                        },
                        {
                            "text":  "your vile self",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140563,
        "question":  "Name something you'd hate to see fall from the sky.",
        "answers":  [
                        {
                            "text":  "plane",
                            "points":  51
                        },
                        {
                            "text":  "meteor/rock",
                            "points":  18
                        },
                        {
                            "text":  "sun/stars",
                            "points":  7
                        },
                        {
                            "text":  "bird",
                            "points":  5
                        },
                        {
                            "text":  "poop",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140564,
        "question":  "Name something you might celebrate leaving.",
        "answers":  [
                        {
                            "text":  "awful mate",
                            "points":  37
                        },
                        {
                            "text":  "crap job",
                            "points":  29
                        },
                        {
                            "text":  "school",
                            "points":  10
                        },
                        {
                            "text":  "the hospital",
                            "points":  5
                        },
                        {
                            "text":  "home/at age 40",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140565,
        "question":  "Living or dead, name a first lady who would make an excellent talk show host.",
        "answers":  [
                        {
                            "text":  "michelle obama",
                            "points":  49
                        },
                        {
                            "text":  "hillary clinton",
                            "points":  10
                        },
                        {
                            "text":  "barbara bush",
                            "points":  8
                        },
                        {
                            "text":  "jackie kennedy",
                            "points":  8
                        },
                        {
                            "text":  "nancy reagan",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  140566,
        "question":  "Name an article of clothing you've worn five days in a row.",
        "answers":  [
                        {
                            "text":  "jeans/pants",
                            "points":  39
                        },
                        {
                            "text":  "jacket/hoodie",
                            "points":  19
                        },
                        {
                            "text":  "shirt/tee",
                            "points":  9
                        },
                        {
                            "text":  "bra",
                            "points":  8
                        },
                        {
                            "text":  "shoes/sandals",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  140567,
        "question":  "You'd be horrified if your friend told you they never use what?",
        "answers":  [
                        {
                            "text":  "soap",
                            "points":  28
                        },
                        {
                            "text":  "toothbrush/paste",
                            "points":  19
                        },
                        {
                            "text":  "deodorant",
                            "points":  15
                        },
                        {
                            "text":  "toilet paper",
                            "points":  11
                        },
                        {
                            "text":  "papa stoppa/the pill",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  140568,
        "question":  "Name something you'd hate to discover Billy is feeding the dog.",
        "answers":  [
                        {
                            "text":  "chocolate",
                            "points":  52
                        },
                        {
                            "text":  "meat/ny strip",
                            "points":  9
                        },
                        {
                            "text":  "beans/produce",
                            "points":  9
                        },
                        {
                            "text":  "the cat/critter",
                            "points":  5
                        },
                        {
                            "text":  "poop",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140569,
        "question":  "Name a kid's dearly departed pet whose casket was a shoebox.",
        "answers":  [
                        {
                            "text":  "hamster",
                            "points":  49
                        },
                        {
                            "text":  "bird",
                            "points":  14
                        },
                        {
                            "text":  "cat",
                            "points":  6
                        },
                        {
                            "text":  "frog",
                            "points":  5
                        },
                        {
                            "text":  "guinea pig",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140570,
        "question":  "Name something that 99% of women wish their man had that he currently doesn't.",
        "answers":  [
                        {
                            "text":  "job/$$$/no debt",
                            "points":  49
                        },
                        {
                            "text":  "abs/muscles",
                            "points":  11
                        },
                        {
                            "text":  "hair",
                            "points":  10
                        },
                        {
                            "text":  "sense/brain",
                            "points":  5
                        },
                        {
                            "text":  "a visible wang",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140571,
        "question":  "Name something that can ruin a squirrel's day.",
        "answers":  [
                        {
                            "text":  "no nuts/bad nuts",
                            "points":  36
                        },
                        {
                            "text":  "a car",
                            "points":  13
                        },
                        {
                            "text":  "rain/snow",
                            "points":  12
                        },
                        {
                            "text":  "a dog",
                            "points":  10
                        },
                        {
                            "text":  "a hawk/bird",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  140572,
        "question":  "Name someone who might be called the greatest dancer of all time.",
        "answers":  [
                        {
                            "text":  "michael jackson",
                            "points":  28
                        },
                        {
                            "text":  "fred astaire",
                            "points":  27
                        },
                        {
                            "text":  "jennifer lopez",
                            "points":  9
                        },
                        {
                            "text":  "mikhail baryshnikov",
                            "points":  8
                        },
                        {
                            "text":  "patrick swayze",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140573,
        "question":  "Name an animal that would be hard to eat once you gave it a name.",
        "answers":  [
                        {
                            "text":  "cow",
                            "points":  24
                        },
                        {
                            "text":  "pig",
                            "points":  19
                        },
                        {
                            "text":  "chicken",
                            "points":  18
                        },
                        {
                            "text":  "dog",
                            "points":  8
                        },
                        {
                            "text":  "rabbit",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  140574,
        "question":  "Fill in the blank: No, the deli owner isn't glad to see you -- he's just got a ______ in his pocket.",
        "answers":  [
                        {
                            "text":  "salami/meat",
                            "points":  43
                        },
                        {
                            "text":  "pickle",
                            "points":  15
                        },
                        {
                            "text":  "bagel/bread",
                            "points":  6
                        },
                        {
                            "text":  "gun",
                            "points":  6
                        },
                        {
                            "text":  "quarter roll/$",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  140575,
        "question":  "We asked 100 women... Name an animal that your man's tongue reminds you of.",
        "answers":  [
                        {
                            "text":  "snake",
                            "points":  40
                        },
                        {
                            "text":  "dog",
                            "points":  14
                        },
                        {
                            "text":  "anteater",
                            "points":  10
                        },
                        {
                            "text":  "lizard",
                            "points":  7
                        },
                        {
                            "text":  "pig",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140576,
        "question":  "Name a place that the devil might hang out looking for future tenants.",
        "answers":  [
                        {
                            "text":  "bar/club",
                            "points":  40
                        },
                        {
                            "text":  "washington, d.c.",
                            "points":  18
                        },
                        {
                            "text":  "prison",
                            "points":  7
                        },
                        {
                            "text":  "casino",
                            "points":  5
                        },
                        {
                            "text":  "church",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140577,
        "question":  "If a mortician signed his work like an artist, where on the body might he put his signature?",
        "answers":  [
                        {
                            "text":  "foot/toe",
                            "points":  34
                        },
                        {
                            "text":  "butt/chili cannon",
                            "points":  15
                        },
                        {
                            "text":  "forehead/face",
                            "points":  12
                        },
                        {
                            "text":  "arm/pit",
                            "points":  8
                        },
                        {
                            "text":  "chest",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  140578,
        "question":  "A man loses his appeal when he loses what?",
        "answers":  [
                        {
                            "text":  "his hair",
                            "points":  30
                        },
                        {
                            "text":  "his humor/charm",
                            "points":  15
                        },
                        {
                            "text":  "his $$$/job",
                            "points":  14
                        },
                        {
                            "text":  "his teeth",
                            "points":  9
                        },
                        {
                            "text":  "his temper",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  140579,
        "question":  "Name a place you go that you love how it smells.",
        "answers":  [
                        {
                            "text":  "bakery/eatery",
                            "points":  35
                        },
                        {
                            "text":  "ocean/the outdoors",
                            "points":  23
                        },
                        {
                            "text":  "soap/lotion shop",
                            "points":  6
                        },
                        {
                            "text":  "laundromat",
                            "points":  4
                        },
                        {
                            "text":  "mom's house",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140580,
        "question":  "Of all the cute baby animals in the world, which is the cutest?",
        "answers":  [
                        {
                            "text":  "puppy",
                            "points":  24
                        },
                        {
                            "text":  "panda/bear",
                            "points":  17
                        },
                        {
                            "text":  "kitten",
                            "points":  16
                        },
                        {
                            "text":  "koala",
                            "points":  9
                        },
                        {
                            "text":  "elephant",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  140581,
        "question":  "Name someone wives everywhere have to thank for very curvy women being back in style.",
        "answers":  [
                        {
                            "text":  "kim kardashian",
                            "points":  25
                        },
                        {
                            "text":  "beyonce",
                            "points":  17
                        },
                        {
                            "text":  "sofia vergara",
                            "points":  13
                        },
                        {
                            "text":  "jennifer lopez",
                            "points":  10
                        },
                        {
                            "text":  "nicki minaj",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  140582,
        "question":  "I'd like to smoke pot with my grandma because she always has what food in her house?",
        "answers":  [
                        {
                            "text":  "cookies",
                            "points":  35
                        },
                        {
                            "text":  "brownies",
                            "points":  15
                        },
                        {
                            "text":  "chips/cheetos",
                            "points":  8
                        },
                        {
                            "text":  "candy/chocolate",
                            "points":  7
                        },
                        {
                            "text":  "cake",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140583,
        "question":  "Describe Abraham Lincoln using one word.",
        "answers":  [
                        {
                            "text":  "honest/sincere",
                            "points":  29
                        },
                        {
                            "text":  "tall",
                            "points":  21
                        },
                        {
                            "text":  "smart/intelligent",
                            "points":  7
                        },
                        {
                            "text":  "president",
                            "points":  6
                        },
                        {
                            "text":  "dead",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140584,
        "question":  "Name something you hate seeing your grandpa spend your future inheritance on.",
        "answers":  [
                        {
                            "text":  "bimbos/strippers",
                            "points":  28
                        },
                        {
                            "text":  "gambling",
                            "points":  15
                        },
                        {
                            "text":  "booze",
                            "points":  9
                        },
                        {
                            "text":  "car/oldsmobile",
                            "points":  8
                        },
                        {
                            "text":  "sports/fishing",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140585,
        "question":  "Name an occupation a man has that a lot of women fantasize about making love to him.",
        "answers":  [
                        {
                            "text":  "firefighter",
                            "points":  25
                        },
                        {
                            "text":  "actor/xxx star",
                            "points":  15
                        },
                        {
                            "text":  "athlete",
                            "points":  11
                        },
                        {
                            "text":  "cop",
                            "points":  7
                        },
                        {
                            "text":  "singer/rock star",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  140586,
        "question":  "We asked 100 women... If your man wore a Speedo, it would look like he had what candy in it?",
        "answers":  [
                        {
                            "text":  "snickers/bite size",
                            "points":  23
                        },
                        {
                            "text":  "tootsie roll",
                            "points":  16
                        },
                        {
                            "text":  "mounds",
                            "points":  12
                        },
                        {
                            "text":  "3 musketeers",
                            "points":  8
                        },
                        {
                            "text":  "reese's cups",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  140587,
        "question":  "Name someone who asks you questions that you don't like to answer.",
        "answers":  [
                        {
                            "text":  "doc/therapist",
                            "points":  21
                        },
                        {
                            "text":  "boss/coworker",
                            "points":  12
                        },
                        {
                            "text":  "mom/dad",
                            "points":  12
                        },
                        {
                            "text":  "cop",
                            "points":  10
                        },
                        {
                            "text":  "child",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  140588,
        "question":  "If you don't curse, what do you say when you hit your finger with a hammer?",
        "answers":  [
                        {
                            "text":  "ouch/ouchie",
                            "points":  20
                        },
                        {
                            "text":  "shoot",
                            "points":  14
                        },
                        {
                            "text":  "fudge/fudgesicle",
                            "points":  12
                        },
                        {
                            "text":  "darn",
                            "points":  9
                        },
                        {
                            "text":  "dang/dangnamit",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  140589,
        "question":  "Name something little that can cause big problems.",
        "answers":  [
                        {
                            "text":  "bug/termite",
                            "points":  26
                        },
                        {
                            "text":  "kid/baby",
                            "points":  12
                        },
                        {
                            "text":  "tooth/cavity",
                            "points":  8
                        },
                        {
                            "text":  "money/bills",
                            "points":  7
                        },
                        {
                            "text":  "mouse",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  140590,
        "question":  "Susan thought she married Prince Charming. But he turned into what Disney character?",
        "answers":  [
                        {
                            "text":  "goofy",
                            "points":  19
                        },
                        {
                            "text":  "the beast",
                            "points":  13
                        },
                        {
                            "text":  "dopey",
                            "points":  10
                        },
                        {
                            "text":  "the frog",
                            "points":  9
                        },
                        {
                            "text":  "dumbo",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  140591,
        "question":  "Speaking of \"Naked and Afraid,\" name a specific place where you would be afraid to be naked.",
        "answers":  [
                        {
                            "text":  "work",
                            "points":  22
                        },
                        {
                            "text":  "church",
                            "points":  10
                        },
                        {
                            "text":  "beach/ocean",
                            "points":  10
                        },
                        {
                            "text":  "store/mall",
                            "points":  8
                        },
                        {
                            "text":  "school",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  140592,
        "question":  "If being funny turns women on, name a living comedian who is a chick magnet.",
        "answers":  [
                        {
                            "text":  "steve harvey",
                            "points":  15
                        },
                        {
                            "text":  "steve martin",
                            "points":  13
                        },
                        {
                            "text":  "jerry seinfeld",
                            "points":  12
                        },
                        {
                            "text":  "jimmy fallon",
                            "points":  9
                        },
                        {
                            "text":  "chris rock",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  140593,
        "question":  "Past or present, name the greatest female singer of all time.",
        "answers":  [
                        {
                            "text":  "whitney houston",
                            "points":  30
                        },
                        {
                            "text":  "aretha franklin",
                            "points":  8
                        },
                        {
                            "text":  "barbra streisand",
                            "points":  6
                        },
                        {
                            "text":  "celine dion",
                            "points":  5
                        },
                        {
                            "text":  "dolly parton",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140594,
        "question":  "Name something in his house that a lonely ventriloquist might make talk.",
        "answers":  [
                        {
                            "text":  "dummy/doll",
                            "points":  17
                        },
                        {
                            "text":  "his pet",
                            "points":  15
                        },
                        {
                            "text":  "food/sandwich",
                            "points":  8
                        },
                        {
                            "text":  "pillow",
                            "points":  6
                        },
                        {
                            "text":  "plant/venus flytrap",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  140595,
        "question":  "Name something that can get scrambled.",
        "answers":  [
                        {
                            "text":  "eggs",
                            "points":  83
                        },
                        {
                            "text":  "brain/thoughts",
                            "points":  12
                        },
                        {
                            "text":  "words",
                            "points":  3
                        },
                        {
                            "text":  "signal",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140596,
        "question":  "When it gets really cold at the North Pole, tell me who or what might crawl into bed with Santa and Mrs. Claus.",
        "answers":  [
                        {
                            "text":  "naughty elf",
                            "points":  49
                        },
                        {
                            "text":  "reindeer/vixen",
                            "points":  35
                        },
                        {
                            "text":  "polar bear",
                            "points":  8
                        },
                        {
                            "text":  "their dog",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  140597,
        "question":  "Name something that causes people to wake up in the middle of the night.",
        "answers":  [
                        {
                            "text":  "gotta pee/poop",
                            "points":  42
                        },
                        {
                            "text":  "noise/thunder",
                            "points":  35
                        },
                        {
                            "text":  "nightmare",
                            "points":  20
                        },
                        {
                            "text":  "worries/finances",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140598,
        "question":  "We asked 100 men... If you tell a woman a secret, you can count on her telling who?",
        "answers":  [
                        {
                            "text":  "her bff",
                            "points":  38
                        },
                        {
                            "text":  "her mom",
                            "points":  33
                        },
                        {
                            "text":  "her sister",
                            "points":  22
                        },
                        {
                            "text":  "everyone!",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  140599,
        "question":  "Name something that might be salty.",
        "answers":  [
                        {
                            "text":  "chips/food",
                            "points":  84
                        },
                        {
                            "text":  "the ocean",
                            "points":  8
                        },
                        {
                            "text":  "tears",
                            "points":  5
                        },
                        {
                            "text":  "personality/words",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140600,
        "question":  "We asked 100 women... Tell me why you think Steve Harvey is probably a great kisser.",
        "answers":  [
                        {
                            "text":  "engulfing lips",
                            "points":  79
                        },
                        {
                            "text":  "tickly stache",
                            "points":  11
                        },
                        {
                            "text":  "lots of practice",
                            "points":  5
                        },
                        {
                            "text":  "he's hot",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140601,
        "question":  "Name something you turn on when you're having a dinner party.",
        "answers":  [
                        {
                            "text":  "music/soft jazz",
                            "points":  67
                        },
                        {
                            "text":  "lights/candles",
                            "points":  19
                        },
                        {
                            "text":  "oven/grill",
                            "points":  11
                        },
                        {
                            "text":  "the charm",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140602,
        "question":  "Grandma said that grandpa's idea of a hot date is when she gives him a hot what?",
        "answers":  [
                        {
                            "text":  "meal/toddy",
                            "points":  61
                        },
                        {
                            "text":  "epsom bath/shower",
                            "points":  24
                        },
                        {
                            "text":  "kiss",
                            "points":  11
                        },
                        {
                            "text":  "water bottle/heat pad",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140603,
        "question":  "Give me a word that rhymes with \"spanky.\"",
        "answers":  [
                        {
                            "text":  "hankie",
                            "points":  59
                        },
                        {
                            "text":  "cranky",
                            "points":  26
                        },
                        {
                            "text":  "lanky",
                            "points":  10
                        },
                        {
                            "text":  "yankee",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140604,
        "question":  "Susan said, \"I went on a date with Captain Hook and now I have a hole in my\" what?",
        "answers":  [
                        {
                            "text":  "hand/body",
                            "points":  55
                        },
                        {
                            "text":  "clothes/panties",
                            "points":  37
                        },
                        {
                            "text":  "purse",
                            "points":  5
                        },
                        {
                            "text":  "furniture/bed",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140605,
        "question":  "We asked 100 married women... You know your husband is cheating if he won't let you near his what?",
        "answers":  [
                        {
                            "text":  "phone",
                            "points":  87
                        },
                        {
                            "text":  "computer",
                            "points":  5
                        },
                        {
                            "text":  "bills/receipts",
                            "points":  4
                        },
                        {
                            "text":  "dong",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140606,
        "question":  "Name something a kangaroo can do much better than you.",
        "answers":  [
                        {
                            "text":  "jump",
                            "points":  86
                        },
                        {
                            "text":  "box/kick",
                            "points":  6
                        },
                        {
                            "text":  "run",
                            "points":  4
                        },
                        {
                            "text":  "carry a baby",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140607,
        "question":  "Name something a man might rent to trick a woman into thinking he's rich.",
        "answers":  [
                        {
                            "text":  "limo/car",
                            "points":  86
                        },
                        {
                            "text":  "yacht",
                            "points":  5
                        },
                        {
                            "text":  "house/villa",
                            "points":  5
                        },
                        {
                            "text":  "plane/helicopter",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140608,
        "question":  "Fill in the blank: Never say ______.",
        "answers":  [
                        {
                            "text":  "never",
                            "points":  85
                        },
                        {
                            "text":  "die",
                            "points":  8
                        },
                        {
                            "text":  "goodbye",
                            "points":  3
                        },
                        {
                            "text":  "i'm sorry",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140609,
        "question":  "What's the worst thing to see crawling up your leg?",
        "answers":  [
                        {
                            "text":  "spider/bug",
                            "points":  80
                        },
                        {
                            "text":  "snake",
                            "points":  12
                        },
                        {
                            "text":  "mouse/rat",
                            "points":  4
                        },
                        {
                            "text":  "a child",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140610,
        "question":  "We asked 100 men... Name a way a woman is like a roller coaster ride.",
        "answers":  [
                        {
                            "text":  "ups & downs/moods",
                            "points":  78
                        },
                        {
                            "text":  "thrilling/fun",
                            "points":  12
                        },
                        {
                            "text":  "scary",
                            "points":  6
                        },
                        {
                            "text":  "fast",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140611,
        "question":  "Name something a little Chihuahua might do in a big way.",
        "answers":  [
                        {
                            "text":  "bark/growl",
                            "points":  78
                        },
                        {
                            "text":  "poop/pee",
                            "points":  9
                        },
                        {
                            "text":  "bite/fight",
                            "points":  8
                        },
                        {
                            "text":  "jump",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140612,
        "question":  "Many people enjoy singing in the what?",
        "answers":  [
                        {
                            "text":  "shower",
                            "points":  74
                        },
                        {
                            "text":  "rain",
                            "points":  14
                        },
                        {
                            "text":  "car",
                            "points":  7
                        },
                        {
                            "text":  "choir",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140613,
        "question":  "Name a place where you check in.",
        "answers":  [
                        {
                            "text":  "hotel",
                            "points":  74
                        },
                        {
                            "text":  "airport",
                            "points":  11
                        },
                        {
                            "text":  "doctor's office",
                            "points":  11
                        },
                        {
                            "text":  "restaurant",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140614,
        "question":  "Name something a really small farm might only have one of.",
        "answers":  [
                        {
                            "text":  "animal",
                            "points":  72
                        },
                        {
                            "text":  "tractor",
                            "points":  16
                        },
                        {
                            "text":  "barn/shed",
                            "points":  8
                        },
                        {
                            "text":  "farmer",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140615,
        "question":  "Name something Mickey Mouse might say he loves.",
        "answers":  [
                        {
                            "text":  "minnie mouse",
                            "points":  70
                        },
                        {
                            "text":  "cheese",
                            "points":  23
                        },
                        {
                            "text":  "pluto",
                            "points":  3
                        },
                        {
                            "text":  "kids",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140616,
        "question":  "We asked 100 married women... What would you do if a magazine offered your husband $10,000 to pose nude?",
        "answers":  [
                        {
                            "text":  "deal!/undress him",
                            "points":  54
                        },
                        {
                            "text":  "say no",
                            "points":  24
                        },
                        {
                            "text":  "ask for more $",
                            "points":  11
                        },
                        {
                            "text":  "laugh",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  140617,
        "question":  "We asked 100 married women... Name something you do to new clothes so your husband won't know you've been shopping.",
        "answers":  [
                        {
                            "text":  "take tags off",
                            "points":  49
                        },
                        {
                            "text":  "hide 'em",
                            "points":  29
                        },
                        {
                            "text":  "wash 'em",
                            "points":  17
                        },
                        {
                            "text":  "don't wear 'em",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140618,
        "question":  "Name the first thing a bear might do after waking up from his five-month nap.",
        "answers":  [
                        {
                            "text":  "eat/drink/hunt",
                            "points":  48
                        },
                        {
                            "text":  "grizzly whiz/dump",
                            "points":  27
                        },
                        {
                            "text":  "yawn/stretch",
                            "points":  21
                        },
                        {
                            "text":  "growl",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140619,
        "question":  "Name a sport that don't mean a thing if you ain't got that swing.",
        "answers":  [
                        {
                            "text":  "baseball",
                            "points":  42
                        },
                        {
                            "text":  "golf",
                            "points":  42
                        },
                        {
                            "text":  "tennis",
                            "points":  10
                        },
                        {
                            "text":  "competitive dance",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140620,
        "question":  "Name something you see an \"out of order\" sign on just when you need it.",
        "answers":  [
                        {
                            "text":  "bathroom",
                            "points":  91
                        },
                        {
                            "text":  "atm",
                            "points":  2
                        },
                        {
                            "text":  "elevator",
                            "points":  2
                        },
                        {
                            "text":  "vending machine",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140621,
        "question":  "Name something kids love to jump into a pile of.",
        "answers":  [
                        {
                            "text":  "leaves",
                            "points":  86
                        },
                        {
                            "text":  "pillows",
                            "points":  6
                        },
                        {
                            "text":  "snow",
                            "points":  3
                        },
                        {
                            "text":  "dirt",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140622,
        "question":  "It can be wise to remember to shut your what?",
        "answers":  [
                        {
                            "text":  "mouth/trap",
                            "points":  82
                        },
                        {
                            "text":  "door",
                            "points":  10
                        },
                        {
                            "text":  "wallet/purse",
                            "points":  3
                        },
                        {
                            "text":  "window",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140623,
        "question":  "Name something you might be making when you're at home.",
        "answers":  [
                        {
                            "text":  "food/tea",
                            "points":  81
                        },
                        {
                            "text":  "wild whoopee",
                            "points":  11
                        },
                        {
                            "text":  "cocktails",
                            "points":  3
                        },
                        {
                            "text":  "the bed",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140624,
        "question":  "Face it -- you're never going to have a great body until you give up what?",
        "answers":  [
                        {
                            "text":  "eating habits/soda",
                            "points":  81
                        },
                        {
                            "text":  "boozing",
                            "points":  10
                        },
                        {
                            "text":  "being lazy",
                            "points":  4
                        },
                        {
                            "text":  "being alive",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140625,
        "question":  "Name something you might have delivered if you were spending your birthday all alone.",
        "answers":  [
                        {
                            "text":  "cake/fave meal",
                            "points":  79
                        },
                        {
                            "text":  "flowers",
                            "points":  7
                        },
                        {
                            "text":  "booze",
                            "points":  7
                        },
                        {
                            "text":  "a stripper",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140626,
        "question":  "We asked 100 men... Name a place where you try to avoid eye contact with the guy next to you.",
        "answers":  [
                        {
                            "text":  "pee trough",
                            "points":  77
                        },
                        {
                            "text":  "bar/club",
                            "points":  12
                        },
                        {
                            "text":  "strip joint",
                            "points":  5
                        },
                        {
                            "text":  "prison",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140627,
        "question":  "Name an occupation whose people had better not be on the phone while working on you.",
        "answers":  [
                        {
                            "text":  "surgeon/dentist",
                            "points":  77
                        },
                        {
                            "text":  "hair stylist",
                            "points":  10
                        },
                        {
                            "text":  "massage therapist",
                            "points":  8
                        },
                        {
                            "text":  "tattoo artist",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140628,
        "question":  "Fill in the blank: You know it's a lame roller coaster ride if nobody ______s.",
        "answers":  [
                        {
                            "text":  "screams",
                            "points":  70
                        },
                        {
                            "text":  "pukes",
                            "points":  18
                        },
                        {
                            "text":  "rides it",
                            "points":  6
                        },
                        {
                            "text":  "cries",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140629,
        "question":  "Name something that melts in your mouth.",
        "answers":  [
                        {
                            "text":  "m&m's/candy",
                            "points":  70
                        },
                        {
                            "text":  "ice cream/popsicle",
                            "points":  16
                        },
                        {
                            "text":  "ice",
                            "points":  6
                        },
                        {
                            "text":  "butter",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140630,
        "question":  "Name something that guests might have to pay for at a cheap wedding.",
        "answers":  [
                        {
                            "text":  "drinks",
                            "points":  68
                        },
                        {
                            "text":  "cake/food",
                            "points":  20
                        },
                        {
                            "text":  "a seat/cover charge",
                            "points":  6
                        },
                        {
                            "text":  "parking",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140631,
        "question":  "When circus clowns get together, they probably compare the size of their what?",
        "answers":  [
                        {
                            "text":  "feet/shoes",
                            "points":  63
                        },
                        {
                            "text":  "noses",
                            "points":  29
                        },
                        {
                            "text":  "clown cars",
                            "points":  3
                        },
                        {
                            "text":  "wigs",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140632,
        "question":  "If you want to know how messy someone is, just look in their what?",
        "answers":  [
                        {
                            "text":  "house",
                            "points":  63
                        },
                        {
                            "text":  "car",
                            "points":  27
                        },
                        {
                            "text":  "purse",
                            "points":  5
                        },
                        {
                            "text":  "work office/desk",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140633,
        "question":  "Name something a man might be talking about when he says \"That's hot.\"",
        "answers":  [
                        {
                            "text":  "boobalicious babe",
                            "points":  58
                        },
                        {
                            "text":  "car",
                            "points":  17
                        },
                        {
                            "text":  "food/coffee",
                            "points":  16
                        },
                        {
                            "text":  "stove/grill",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  140634,
        "question":  "Name something a cheap guy might tell his date ahead of time to bring your own.",
        "answers":  [
                        {
                            "text":  "cash/credit card",
                            "points":  52
                        },
                        {
                            "text":  "booze",
                            "points":  25
                        },
                        {
                            "text":  "food",
                            "points":  18
                        },
                        {
                            "text":  "coupon",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140635,
        "question":  "Fill in the blank: When a bear comes out of hibernation, he probably thinks, \"Man, I really need to ______.\"",
        "answers":  [
                        {
                            "text":  "eat/drink",
                            "points":  46
                        },
                        {
                            "text":  "whiz/dump",
                            "points":  45
                        },
                        {
                            "text":  "bathe",
                            "points":  4
                        },
                        {
                            "text":  "go back to sleep",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140636,
        "question":  "Judy said, \"I don't know if I'm more upset about my husband cheating or that he bought his mistress a\" what?",
        "answers":  [
                        {
                            "text":  "car/pink bmw",
                            "points":  46
                        },
                        {
                            "text":  "ring/jewelry",
                            "points":  34
                        },
                        {
                            "text":  "house",
                            "points":  11
                        },
                        {
                            "text":  "pet/puppy",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  140637,
        "question":  "Fill in the blank: Bob is so big, when he went to the beach, people thought a ______ washed up onshore.",
        "answers":  [
                        {
                            "text":  "whale",
                            "points":  88
                        },
                        {
                            "text":  "boat/cruise ship",
                            "points":  4
                        },
                        {
                            "text":  "walrus",
                            "points":  2
                        },
                        {
                            "text":  "manatee",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140638,
        "question":  "Name something cows might be asking for when they say \"moo.\"",
        "answers":  [
                        {
                            "text":  "food/grass",
                            "points":  84
                        },
                        {
                            "text":  "a milking",
                            "points":  5
                        },
                        {
                            "text":  "pet me",
                            "points":  4
                        },
                        {
                            "text":  "mooove over/space",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140639,
        "question":  "Name something people light on special occasions.",
        "answers":  [
                        {
                            "text":  "candles",
                            "points":  80
                        },
                        {
                            "text":  "fireworks",
                            "points":  9
                        },
                        {
                            "text":  "cigar/cig",
                            "points":  4
                        },
                        {
                            "text":  "christmas tree",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140640,
        "question":  "Fill in the blank: Fig ______.",
        "answers":  [
                        {
                            "text":  "fig newtons",
                            "points":  77
                        },
                        {
                            "text":  "fig tree",
                            "points":  12
                        },
                        {
                            "text":  "fig leaf",
                            "points":  4
                        },
                        {
                            "text":  "fig jam",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140641,
        "question":  "Name a circus performer who'd be even more thrilling to watch if they performed in the nude.",
        "answers":  [
                        {
                            "text":  "trapeze/acrobat",
                            "points":  71
                        },
                        {
                            "text":  "animal tamer",
                            "points":  14
                        },
                        {
                            "text":  "clown",
                            "points":  9
                        },
                        {
                            "text":  "juggler",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140642,
        "question":  "Tell me something that people stretch.",
        "answers":  [
                        {
                            "text":  "body/muscles",
                            "points":  71
                        },
                        {
                            "text":  "money/budget",
                            "points":  13
                        },
                        {
                            "text":  "the truth",
                            "points":  8
                        },
                        {
                            "text":  "rubber bands",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140643,
        "question":  "What do you think is the most popular sport in America?",
        "answers":  [
                        {
                            "text":  "football",
                            "points":  69
                        },
                        {
                            "text":  "baseball",
                            "points":  23
                        },
                        {
                            "text":  "golf",
                            "points":  2
                        },
                        {
                            "text":  "basketball",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140644,
        "question":  "Name something a cowboy in the Old West had that was probably smelling pretty bad.",
        "answers":  [
                        {
                            "text":  "getup/boots",
                            "points":  67
                        },
                        {
                            "text":  "body/breath",
                            "points":  18
                        },
                        {
                            "text":  "horse",
                            "points":  8
                        },
                        {
                            "text":  "saddle/cover",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140645,
        "question":  "Judge Judy might be small, but she has a big what?",
        "answers":  [
                        {
                            "text":  "mouth/voice",
                            "points":  63
                        },
                        {
                            "text":  "ego/personality",
                            "points":  24
                        },
                        {
                            "text":  "gavel",
                            "points":  5
                        },
                        {
                            "text":  "heart",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140646,
        "question":  "Name something you prefer to do with the lights out.",
        "answers":  [
                        {
                            "text":  "sleep",
                            "points":  63
                        },
                        {
                            "text":  "make love/to self",
                            "points":  21
                        },
                        {
                            "text":  "watch tv",
                            "points":  9
                        },
                        {
                            "text":  "be nude",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140647,
        "question":  "Name a reason people might point and laugh at a man as he leaves a public restroom.",
        "answers":  [
                        {
                            "text":  "fly down",
                            "points":  57
                        },
                        {
                            "text":  "toilet paper trail",
                            "points":  35
                        },
                        {
                            "text":  "was in women's",
                            "points":  2
                        },
                        {
                            "text":  "wet spot/pee",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140648,
        "question":  "Name something a cowboy in the Old West might be holding when he's in a saloon.",
        "answers":  [
                        {
                            "text":  "drink/bottle",
                            "points":  57
                        },
                        {
                            "text":  "six-shooter",
                            "points":  28
                        },
                        {
                            "text":  "his hat",
                            "points":  7
                        },
                        {
                            "text":  "cards/4 aces",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140649,
        "question":  "Name a tool that a handyman might nickname his package.",
        "answers":  [
                        {
                            "text":  "hammer/sledgehammer",
                            "points":  54
                        },
                        {
                            "text":  "screwdriver",
                            "points":  26
                        },
                        {
                            "text":  "power drill",
                            "points":  12
                        },
                        {
                            "text":  "wrench",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140650,
        "question":  "Name something a farmer might try to fatten up.",
        "answers":  [
                        {
                            "text":  "pig",
                            "points":  49
                        },
                        {
                            "text":  "cow/bull",
                            "points":  38
                        },
                        {
                            "text":  "chicken",
                            "points":  6
                        },
                        {
                            "text":  "his wife",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140651,
        "question":  "It's bad if a man is late to his own wedding. It's worse if it's because he was where?",
        "answers":  [
                        {
                            "text":  "cheating/motel",
                            "points":  47
                        },
                        {
                            "text":  "drinking/bar",
                            "points":  27
                        },
                        {
                            "text":  "strip joint",
                            "points":  17
                        },
                        {
                            "text":  "asleep in bed",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140652,
        "question":  "The shoplifter froze his package after putting a package of frozen what down his pants?",
        "answers":  [
                        {
                            "text":  "meat",
                            "points":  40
                        },
                        {
                            "text":  "veggies/fries",
                            "points":  39
                        },
                        {
                            "text":  "ice cream/popsicles",
                            "points":  12
                        },
                        {
                            "text":  "seafood",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140653,
        "question":  "Name something that might end up in your mouth during a kiss.",
        "answers":  [
                        {
                            "text":  "a tongue/or two",
                            "points":  36
                        },
                        {
                            "text":  "gum/candy",
                            "points":  30
                        },
                        {
                            "text":  "spit",
                            "points":  28
                        },
                        {
                            "text":  "hair",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140654,
        "question":  "Name something a singer would hate to lose.",
        "answers":  [
                        {
                            "text":  "voice",
                            "points":  89
                        },
                        {
                            "text":  "fans/audience",
                            "points":  2
                        },
                        {
                            "text":  "memory/the words",
                            "points":  2
                        },
                        {
                            "text":  "microphone",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140655,
        "question":  "A dog thinks it might have died and gone to doggie heaven if it finds a what?",
        "answers":  [
                        {
                            "text":  "bone/food",
                            "points":  88
                        },
                        {
                            "text":  "home/bed",
                            "points":  3
                        },
                        {
                            "text":  "fire hydrant",
                            "points":  2
                        },
                        {
                            "text":  "woof-worthy babe",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140656,
        "question":  "Name something that's better when it's thick instead of thin.",
        "answers":  [
                        {
                            "text":  "food/shakes",
                            "points":  86
                        },
                        {
                            "text":  "hair",
                            "points":  5
                        },
                        {
                            "text":  "a mattress",
                            "points":  2
                        },
                        {
                            "text":  "wad of money",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140657,
        "question":  "A woman would have a hard time standing by her man if he were to do what?",
        "answers":  [
                        {
                            "text":  "cheat/get ho preggo",
                            "points":  84
                        },
                        {
                            "text":  "murder",
                            "points":  7
                        },
                        {
                            "text":  "lie",
                            "points":  2
                        },
                        {
                            "text":  "fart",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140658,
        "question":  "If a dog threw a party for his dog friends, what would he be sure to have at it?",
        "answers":  [
                        {
                            "text":  "food/bones",
                            "points":  80
                        },
                        {
                            "text":  "flirty poodles",
                            "points":  6
                        },
                        {
                            "text":  "fire hydrants",
                            "points":  5
                        },
                        {
                            "text":  "toys",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140659,
        "question":  "Fill in the blank: Breaking news -- the president's dog just ______ed in the White House.",
        "answers":  [
                        {
                            "text":  "pooped/peed",
                            "points":  76
                        },
                        {
                            "text":  "died",
                            "points":  9
                        },
                        {
                            "text":  "bit someone",
                            "points":  7
                        },
                        {
                            "text":  "had puppies",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140660,
        "question":  "Name something that grandma wears that might also fit grandpa.",
        "answers":  [
                        {
                            "text":  "clothes/depends",
                            "points":  67
                        },
                        {
                            "text":  "glasses/solar shield",
                            "points":  17
                        },
                        {
                            "text":  "dentures",
                            "points":  9
                        },
                        {
                            "text":  "hearing aid",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140661,
        "question":  "Name a place Bad Santa might go on Christmas Eve instead of delivering presents.",
        "answers":  [
                        {
                            "text":  "bar/club",
                            "points":  66
                        },
                        {
                            "text":  "strip joint",
                            "points":  22
                        },
                        {
                            "text":  "ho ho ho house",
                            "points":  4
                        },
                        {
                            "text":  "bed/north pole",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140662,
        "question":  "Name something most wealthy people have more than one of.",
        "answers":  [
                        {
                            "text":  "cars",
                            "points":  63
                        },
                        {
                            "text":  "houses",
                            "points":  28
                        },
                        {
                            "text":  "outfit/clothes",
                            "points":  2
                        },
                        {
                            "text":  "dollars",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140663,
        "question":  "Name a place you remove your clothes that you hope there's no hidden camera.",
        "answers":  [
                        {
                            "text":  "dressing room",
                            "points":  57
                        },
                        {
                            "text":  "bathroom",
                            "points":  25
                        },
                        {
                            "text":  "bedroom",
                            "points":  8
                        },
                        {
                            "text":  "doctor's office",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140664,
        "question":  "Name something you'd have trouble doing without a tongue.",
        "answers":  [
                        {
                            "text":  "talking",
                            "points":  50
                        },
                        {
                            "text":  "eat/lick/taste",
                            "points":  39
                        },
                        {
                            "text":  "kissing",
                            "points":  4
                        },
                        {
                            "text":  "touch'g nose with it",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140665,
        "question":  "Name a reason you're tied up with a rope.",
        "answers":  [
                        {
                            "text":  "i'm kinky! grrr!",
                            "points":  45
                        },
                        {
                            "text":  "hostage",
                            "points":  44
                        },
                        {
                            "text":  "arrested/detained",
                            "points":  3
                        },
                        {
                            "text":  "kid game/pretend",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140666,
        "question":  "Name something you butter up.",
        "answers":  [
                        {
                            "text":  "bread",
                            "points":  79
                        },
                        {
                            "text":  "the boss",
                            "points":  9
                        },
                        {
                            "text":  "corn",
                            "points":  4
                        },
                        {
                            "text":  "my sweetums",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140667,
        "question":  "We asked 100 women... Name something that's fun to do with a woman and a drag to do with a man.",
        "answers":  [
                        {
                            "text":  "shop",
                            "points":  78
                        },
                        {
                            "text":  "clubbing",
                            "points":  7
                        },
                        {
                            "text":  "watch chick flick",
                            "points":  6
                        },
                        {
                            "text":  "beauty treatment",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140668,
        "question":  "Name an occasion when a lot of pictures are taken.",
        "answers":  [
                        {
                            "text":  "wedding",
                            "points":  77
                        },
                        {
                            "text":  "birthday party",
                            "points":  8
                        },
                        {
                            "text":  "vacation",
                            "points":  5
                        },
                        {
                            "text":  "family reunion",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140669,
        "question":  "Name the easiest animal in the jungle to imitate.",
        "answers":  [
                        {
                            "text":  "monkey/ape",
                            "points":  76
                        },
                        {
                            "text":  "lion",
                            "points":  9
                        },
                        {
                            "text":  "parrot/bird",
                            "points":  5
                        },
                        {
                            "text":  "snake",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140670,
        "question":  "Name a country whose men know how to kiss.",
        "answers":  [
                        {
                            "text":  "france",
                            "points":  73
                        },
                        {
                            "text":  "italy",
                            "points":  12
                        },
                        {
                            "text":  "united states",
                            "points":  7
                        },
                        {
                            "text":  "mexico",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140671,
        "question":  "Tell me the last person you kissed.",
        "answers":  [
                        {
                            "text":  "spouse/mate",
                            "points":  72
                        },
                        {
                            "text":  "kid/grandkid",
                            "points":  15
                        },
                        {
                            "text":  "overbearing mother",
                            "points":  4
                        },
                        {
                            "text":  "my ex",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140672,
        "question":  "Besides butter, name something you put on popcorn.",
        "answers":  [
                        {
                            "text":  "salt",
                            "points":  70
                        },
                        {
                            "text":  "cheese",
                            "points":  14
                        },
                        {
                            "text":  "caramel",
                            "points":  8
                        },
                        {
                            "text":  "garlic",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140673,
        "question":  "Name something you might skip in the morning so you can get to work on time.",
        "answers":  [
                        {
                            "text":  "breakfast/coffee",
                            "points":  67
                        },
                        {
                            "text":  "shower",
                            "points":  16
                        },
                        {
                            "text":  "exercise",
                            "points":  7
                        },
                        {
                            "text":  "brushing teeth",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140674,
        "question":  "We asked 100 women... You just discovered that a man with your exact job is making twice your salary. What do you do?",
        "answers":  [
                        {
                            "text":  "see boss/get raise",
                            "points":  65
                        },
                        {
                            "text":  "quit",
                            "points":  23
                        },
                        {
                            "text":  "call lawyer",
                            "points":  4
                        },
                        {
                            "text":  "nothing",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140675,
        "question":  "Name something you'd like to buy for your mom if you could afford it.",
        "answers":  [
                        {
                            "text":  "home/in the arctic",
                            "points":  64
                        },
                        {
                            "text":  "car",
                            "points":  18
                        },
                        {
                            "text":  "vacay",
                            "points":  7
                        },
                        {
                            "text":  "jewelry/promise ring",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140676,
        "question":  "If a stripper dressed as a clown, name something that might fly off her while she twirled on the pole.",
        "answers":  [
                        {
                            "text":  "big red nose",
                            "points":  61
                        },
                        {
                            "text":  "wig",
                            "points":  23
                        },
                        {
                            "text":  "clown shoes",
                            "points":  7
                        },
                        {
                            "text":  "balloon animals",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140677,
        "question":  "Give me a word you might hear a director shout on a movie set.",
        "answers":  [
                        {
                            "text":  "\"cut\"",
                            "points":  59
                        },
                        {
                            "text":  "\"action\"",
                            "points":  30
                        },
                        {
                            "text":  "\"quiet\"",
                            "points":  3
                        },
                        {
                            "text":  "\"wrap\"",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140678,
        "question":  "Name something a lady polar bear might find attractive about her mate.",
        "answers":  [
                        {
                            "text":  "silky white fur",
                            "points":  49
                        },
                        {
                            "text":  "big hot bod/paws",
                            "points":  30
                        },
                        {
                            "text":  "cute nose/face",
                            "points":  10
                        },
                        {
                            "text":  "hunting prowess",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140679,
        "question":  "Name a place where people are nervous the first day they are there.",
        "answers":  [
                        {
                            "text":  "job",
                            "points":  48
                        },
                        {
                            "text":  "school",
                            "points":  31
                        },
                        {
                            "text":  "doc/e.r./dentist",
                            "points":  12
                        },
                        {
                            "text":  "prison",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140680,
        "question":  "You'd really hate to fall on your what?",
        "answers":  [
                        {
                            "text":  "butt",
                            "points":  41
                        },
                        {
                            "text":  "face",
                            "points":  29
                        },
                        {
                            "text":  "top of head",
                            "points":  21
                        },
                        {
                            "text":  "proverbial sword",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140681,
        "question":  "You should never wake a sleeping ______.",
        "answers":  [
                        {
                            "text":  "bear",
                            "points":  33
                        },
                        {
                            "text":  "baby/person",
                            "points":  32
                        },
                        {
                            "text":  "dog",
                            "points":  20
                        },
                        {
                            "text":  "giant",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  140682,
        "question":  "If Steve Harvey owned 101 dalmatians, he might get tired of doing what?",
        "answers":  [
                        {
                            "text":  "walk/poop scoop",
                            "points":  81
                        },
                        {
                            "text":  "feeding 'em",
                            "points":  7
                        },
                        {
                            "text":  "hear'g 'em bark",
                            "points":  3
                        },
                        {
                            "text":  "naming/call'g names",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140683,
        "question":  "Name something a pirate is caught stealing from another pirate that he'd walk the plank for doing.",
        "answers":  [
                        {
                            "text":  "treasure/gold",
                            "points":  72
                        },
                        {
                            "text":  "rum",
                            "points":  9
                        },
                        {
                            "text":  "his wench",
                            "points":  7
                        },
                        {
                            "text":  "parrot",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140684,
        "question":  "Name something that's no good if it isn't sharp.",
        "answers":  [
                        {
                            "text":  "knife/sword",
                            "points":  70
                        },
                        {
                            "text":  "pencil",
                            "points":  11
                        },
                        {
                            "text":  "mind",
                            "points":  7
                        },
                        {
                            "text":  "scissors",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140685,
        "question":  "Tell me a reason you're touching your toes.",
        "answers":  [
                        {
                            "text":  "stretch/exercise",
                            "points":  67
                        },
                        {
                            "text":  "clip/paint nails",
                            "points":  16
                        },
                        {
                            "text":  "scratch itch",
                            "points":  6
                        },
                        {
                            "text":  "booty/colon exam",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140686,
        "question":  "Name something a wife would hate to hear her husband did to the nanny's fanny.",
        "answers":  [
                        {
                            "text":  "spank it",
                            "points":  64
                        },
                        {
                            "text":  "pinch it",
                            "points":  18
                        },
                        {
                            "text":  "caress it",
                            "points":  7
                        },
                        {
                            "text":  "kiss it",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140687,
        "question":  "Name something you miss about home when you're on vacation.",
        "answers":  [
                        {
                            "text":  "bed/pillow",
                            "points":  63
                        },
                        {
                            "text":  "pets",
                            "points":  24
                        },
                        {
                            "text":  "food/pork rinds",
                            "points":  3
                        },
                        {
                            "text":  "my tv shows",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140688,
        "question":  "We asked 100 women... It's sad to say, but name an occasion when you'd rather have a bad date than no date at all.",
        "answers":  [
                        {
                            "text":  "valentine's day",
                            "points":  60
                        },
                        {
                            "text":  "a wedding",
                            "points":  18
                        },
                        {
                            "text":  "new year's eve",
                            "points":  10
                        },
                        {
                            "text":  "my prom",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140689,
        "question":  "We asked 100 men... Name something you like to keep very clean.",
        "answers":  [
                        {
                            "text":  "myself!",
                            "points":  52
                        },
                        {
                            "text":  "car",
                            "points":  34
                        },
                        {
                            "text":  "computer screen",
                            "points":  4
                        },
                        {
                            "text":  "my office",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140690,
        "question":  "We asked 100 men... Name a woman in your life who's smarter than you.",
        "answers":  [
                        {
                            "text":  "my bae",
                            "points":  51
                        },
                        {
                            "text":  "my mom",
                            "points":  27
                        },
                        {
                            "text":  "my sister",
                            "points":  11
                        },
                        {
                            "text":  "my boss",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140691,
        "question":  "Good or bad, name something people spread.",
        "answers":  [
                        {
                            "text":  "germs/chlamydia",
                            "points":  44
                        },
                        {
                            "text":  "rumor/news",
                            "points":  38
                        },
                        {
                            "text":  "joy/love/smiles",
                            "points":  7
                        },
                        {
                            "text":  "butter",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140692,
        "question":  "Name something a man buys that's as big as his ego.",
        "answers":  [
                        {
                            "text":  "car/truck",
                            "points":  84
                        },
                        {
                            "text":  "boat",
                            "points":  3
                        },
                        {
                            "text":  "house",
                            "points":  3
                        },
                        {
                            "text":  "magnum condoms",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140693,
        "question":  "You'd have to be really unlucky to get struck by what?",
        "answers":  [
                        {
                            "text":  "lightning",
                            "points":  79
                        },
                        {
                            "text":  "a train",
                            "points":  5
                        },
                        {
                            "text":  "meteor/fall'g star",
                            "points":  5
                        },
                        {
                            "text":  "a car",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140694,
        "question":  "Name someone who might say \"Hold it right there.\"",
        "answers":  [
                        {
                            "text":  "cop",
                            "points":  78
                        },
                        {
                            "text":  "parent",
                            "points":  7
                        },
                        {
                            "text":  "security/bouncer",
                            "points":  4
                        },
                        {
                            "text":  "photographer",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140695,
        "question":  "Name something your grandma always gave you when you visited her house.",
        "answers":  [
                        {
                            "text":  "cookies/food",
                            "points":  75
                        },
                        {
                            "text":  "hug & kiss",
                            "points":  10
                        },
                        {
                            "text":  "'tude/lecture",
                            "points":  4
                        },
                        {
                            "text":  "$/silver dollar",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140696,
        "question":  "If you dared, name something about Superman you might make fun of.",
        "answers":  [
                        {
                            "text":  "tights/suit",
                            "points":  75
                        },
                        {
                            "text":  "his hair/curl",
                            "points":  8
                        },
                        {
                            "text":  "weakling",
                            "points":  5
                        },
                        {
                            "text":  "clark kent glasses",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140697,
        "question":  "Most kindergarten teachers are used to kids putting a finger in what?",
        "answers":  [
                        {
                            "text":  "their nose",
                            "points":  75
                        },
                        {
                            "text":  "their ear",
                            "points":  7
                        },
                        {
                            "text":  "glue",
                            "points":  6
                        },
                        {
                            "text":  "paint",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140698,
        "question":  "We asked 100 men... Name a place you might run into your father-in-law where you both agree to never talk about it.",
        "answers":  [
                        {
                            "text":  "strip joint",
                            "points":  70
                        },
                        {
                            "text":  "bar/gay club",
                            "points":  11
                        },
                        {
                            "text":  "nude sauna/spa",
                            "points":  8
                        },
                        {
                            "text":  "ho house",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140699,
        "question":  "Name an activity that brings men closer together.",
        "answers":  [
                        {
                            "text":  "sports/fish'g",
                            "points":  66
                        },
                        {
                            "text":  "cold brewskis",
                            "points":  13
                        },
                        {
                            "text":  "poker/games",
                            "points":  8
                        },
                        {
                            "text":  "gay lovemaking",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140700,
        "question":  "What's one thing people wish for when they wish upon a star?",
        "answers":  [
                        {
                            "text":  "money",
                            "points":  65
                        },
                        {
                            "text":  "love",
                            "points":  18
                        },
                        {
                            "text":  "happiness",
                            "points":  6
                        },
                        {
                            "text":  "a puppy",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140701,
        "question":  "Fill in the blank: God, I wish I had more ______.",
        "answers":  [
                        {
                            "text":  "money",
                            "points":  64
                        },
                        {
                            "text":  "time",
                            "points":  17
                        },
                        {
                            "text":  "knowledge",
                            "points":  6
                        },
                        {
                            "text":  "patience",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140702,
        "question":  "Name something from a cheap funeral that might be used for the next dearly departed.",
        "answers":  [
                        {
                            "text":  "flowers",
                            "points":  59
                        },
                        {
                            "text":  "casket/box",
                            "points":  28
                        },
                        {
                            "text":  "suit/outfit",
                            "points":  3
                        },
                        {
                            "text":  "urn",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140703,
        "question":  "Name someone who has put their hands on your body.",
        "answers":  [
                        {
                            "text":  "spouse/mate",
                            "points":  59
                        },
                        {
                            "text":  "doctor",
                            "points":  24
                        },
                        {
                            "text":  "massage therapist",
                            "points":  6
                        },
                        {
                            "text":  "my ex",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140704,
        "question":  "Name something you have that's broken in to perfection.",
        "answers":  [
                        {
                            "text":  "shoes/clothes",
                            "points":  53
                        },
                        {
                            "text":  "furniture/bed",
                            "points":  26
                        },
                        {
                            "text":  "baseball glove",
                            "points":  8
                        },
                        {
                            "text":  "car",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140705,
        "question":  "We asked 100 men... Name something of yours that your wife thinks is \"ours.\"",
        "answers":  [
                        {
                            "text":  "money/bank acct.",
                            "points":  51
                        },
                        {
                            "text":  "car",
                            "points":  35
                        },
                        {
                            "text":  "clothes/shirt",
                            "points":  4
                        },
                        {
                            "text":  "food",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140706,
        "question":  "Name something people might have a lot of in their ears while other people have nothing.",
        "answers":  [
                        {
                            "text":  "wax",
                            "points":  50
                        },
                        {
                            "text":  "hair",
                            "points":  22
                        },
                        {
                            "text":  "earrings",
                            "points":  13
                        },
                        {
                            "text":  "gossip/talk",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  140707,
        "question":  "If America had to sell a state to pay some bills, which one would sell for the highest price?",
        "answers":  [
                        {
                            "text":  "california",
                            "points":  44
                        },
                        {
                            "text":  "new york",
                            "points":  24
                        },
                        {
                            "text":  "texas",
                            "points":  14
                        },
                        {
                            "text":  "hawaii",
                            "points":  10
                        }
                    ]
    },
    {
        "id":  140708,
        "question":  "Name something of yours that you wish were softer.",
        "answers":  [
                        {
                            "text":  "skin/body",
                            "points":  42
                        },
                        {
                            "text":  "bed/bedding",
                            "points":  24
                        },
                        {
                            "text":  "hair",
                            "points":  17
                        },
                        {
                            "text":  "my heart/'tude",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  140709,
        "question":  "Name something you might swallow to hide the evidence.",
        "answers":  [
                        {
                            "text":  "drugs/meds",
                            "points":  41
                        },
                        {
                            "text":  "food/gum",
                            "points":  30
                        },
                        {
                            "text":  "paper/phone #",
                            "points":  15
                        },
                        {
                            "text":  "key",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  140710,
        "question":  "Name something you might have to give up if you want to live to be 100.",
        "answers":  [
                        {
                            "text":  "bad food/soda",
                            "points":  36
                        },
                        {
                            "text":  "smoking",
                            "points":  28
                        },
                        {
                            "text":  "hooch",
                            "points":  24
                        },
                        {
                            "text":  "extreme sports",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140711,
        "question":  "Name something a man should be prepared to do when he asks a woman on a date.",
        "answers":  [
                        {
                            "text":  "pony up",
                            "points":  74
                        },
                        {
                            "text":  "manners/open door",
                            "points":  7
                        },
                        {
                            "text":  "be rejected/no sex",
                            "points":  6
                        },
                        {
                            "text":  "plan it/creative",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140712,
        "question":  "Name something you keep in your kitchen in case a party breaks out.",
        "answers":  [
                        {
                            "text":  "booze/drinks",
                            "points":  70
                        },
                        {
                            "text":  "snacks",
                            "points":  14
                        },
                        {
                            "text":  "corkscrew",
                            "points":  4
                        },
                        {
                            "text":  "shot glasses",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140713,
        "question":  "Name a word starting with W a man might call his mother-in-law.",
        "answers":  [
                        {
                            "text":  "witch",
                            "points":  69
                        },
                        {
                            "text":  "woman",
                            "points":  14
                        },
                        {
                            "text":  "wonderful",
                            "points":  5
                        },
                        {
                            "text":  "wench",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140714,
        "question":  "We asked 100 men... I'd love to wake up tomorrow and find out that I'm a what?",
        "answers":  [
                        {
                            "text":  "billionaire",
                            "points":  67
                        },
                        {
                            "text":  "young man/kid",
                            "points":  20
                        },
                        {
                            "text":  "woman",
                            "points":  2
                        },
                        {
                            "text":  "father",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  140715,
        "question":  "Name something that starts off hot but eventually cools down.",
        "answers":  [
                        {
                            "text":  "coffee/food",
                            "points":  66
                        },
                        {
                            "text":  "relationship/sex",
                            "points":  19
                        },
                        {
                            "text":  "stove/oven",
                            "points":  3
                        },
                        {
                            "text":  "summer/weather",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140716,
        "question":  "Fill in the blank: I don't like being told what to ______.",
        "answers":  [
                        {
                            "text":  "do",
                            "points":  65
                        },
                        {
                            "text":  "wear",
                            "points":  12
                        },
                        {
                            "text":  "say",
                            "points":  7
                        },
                        {
                            "text":  "think",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  140717,
        "question":  "Name a place where it's acceptable to see man boobs but not woman boobs.",
        "answers":  [
                        {
                            "text":  "beach",
                            "points":  63
                        },
                        {
                            "text":  "gym/locker room",
                            "points":  12
                        },
                        {
                            "text":  "pool",
                            "points":  10
                        },
                        {
                            "text":  "wrestling/box'g ring",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  140718,
        "question":  "Name something you worry that, even now, your mom will do if you talk back to her.",
        "answers":  [
                        {
                            "text":  "slap/hit me",
                            "points":  60
                        },
                        {
                            "text":  "cuss/scold",
                            "points":  20
                        },
                        {
                            "text":  "silent treatment",
                            "points":  7
                        },
                        {
                            "text":  "send me to room",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140719,
        "question":  "What might a first-time parachute jumper do on his way down?",
        "answers":  [
                        {
                            "text":  "scream/cry",
                            "points":  53
                        },
                        {
                            "text":  "pray",
                            "points":  26
                        },
                        {
                            "text":  "pee/poo self",
                            "points":  7
                        },
                        {
                            "text":  "hurl",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140720,
        "question":  "Name something that might be sparkling.",
        "answers":  [
                        {
                            "text":  "wine/drink",
                            "points":  52
                        },
                        {
                            "text":  "diamond",
                            "points":  29
                        },
                        {
                            "text":  "star",
                            "points":  6
                        },
                        {
                            "text":  "sparkler",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140721,
        "question":  "Name something you can't do unless you open your mouth.",
        "answers":  [
                        {
                            "text":  "eat",
                            "points":  51
                        },
                        {
                            "text":  "talk",
                            "points":  25
                        },
                        {
                            "text":  "yawn",
                            "points":  8
                        },
                        {
                            "text":  "brush teeth",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  140722,
        "question":  "Name something a dog always sees on which it lifts its leg and pees.",
        "answers":  [
                        {
                            "text":  "tree/bush",
                            "points":  49
                        },
                        {
                            "text":  "fire hydrant",
                            "points":  35
                        },
                        {
                            "text":  "tire",
                            "points":  4
                        },
                        {
                            "text":  "grass/ground",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140723,
        "question":  "If a magazine featured the sexiest president ever, who would be the centerfold?",
        "answers":  [
                        {
                            "text":  "john f. kennedy",
                            "points":  49
                        },
                        {
                            "text":  "barack obama",
                            "points":  24
                        },
                        {
                            "text":  "bill clinton",
                            "points":  9
                        },
                        {
                            "text":  "ronald reagan",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  140724,
        "question":  "Name a job at a strip club where you can keep your clothes on.",
        "answers":  [
                        {
                            "text":  "bartender/server",
                            "points":  46
                        },
                        {
                            "text":  "bouncer/security",
                            "points":  37
                        },
                        {
                            "text":  "custodian",
                            "points":  4
                        },
                        {
                            "text":  "cook/wing chef",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140725,
        "question":  "Name something you might buy a tiny amount of.",
        "answers":  [
                        {
                            "text":  "food/spices",
                            "points":  45
                        },
                        {
                            "text":  "drugs",
                            "points":  29
                        },
                        {
                            "text":  "gold/jewels",
                            "points":  14
                        },
                        {
                            "text":  "perfume",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140726,
        "question":  "Name a purchase you shouldn't cheap out on because you'll be spending a lot of time in it.",
        "answers":  [
                        {
                            "text":  "bed/mattress",
                            "points":  38
                        },
                        {
                            "text":  "car/truck",
                            "points":  27
                        },
                        {
                            "text":  "house",
                            "points":  19
                        },
                        {
                            "text":  "clothes",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  140727,
        "question":  "Give me a word that rhymes with \"phony.\"",
        "answers":  [
                        {
                            "text":  "baloney",
                            "points":  37
                        },
                        {
                            "text":  "pony",
                            "points":  32
                        },
                        {
                            "text":  "bony",
                            "points":  15
                        },
                        {
                            "text":  "tony",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  140728,
        "question":  "Name something that goes up, up, and away.",
        "answers":  [
                        {
                            "text":  "balloon",
                            "points":  76
                        },
                        {
                            "text":  "airplane",
                            "points":  5
                        },
                        {
                            "text":  "superman",
                            "points":  5
                        },
                        {
                            "text":  "money/your income",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140729,
        "question":  "Name an animal that's bigger than a horse.",
        "answers":  [
                        {
                            "text":  "elephant",
                            "points":  72
                        },
                        {
                            "text":  "whale",
                            "points":  7
                        },
                        {
                            "text":  "giraffe",
                            "points":  6
                        },
                        {
                            "text":  "hippo",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140730,
        "question":  "Name a piece of sports equipment a woman keeps by her bed just in case.",
        "answers":  [
                        {
                            "text":  "bat",
                            "points":  70
                        },
                        {
                            "text":  "weights/dumbbell",
                            "points":  11
                        },
                        {
                            "text":  "a gun",
                            "points":  6
                        },
                        {
                            "text":  "golf club",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140731,
        "question":  "The babysitter asked the kids, \"Hey, where do your parents keep the\" what?",
        "answers":  [
                        {
                            "text":  "booze",
                            "points":  60
                        },
                        {
                            "text":  "snacks/juice",
                            "points":  16
                        },
                        {
                            "text":  "remote",
                            "points":  7
                        },
                        {
                            "text":  "1st aid kit",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  140732,
        "question":  "We asked 100 women... Which food pairs best with being dumped?",
        "answers":  [
                        {
                            "text":  "ice cream",
                            "points":  56
                        },
                        {
                            "text":  "chocolate",
                            "points":  28
                        },
                        {
                            "text":  "pizza",
                            "points":  3
                        },
                        {
                            "text":  "pasta/cacio e pepe",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140733,
        "question":  "You're devastated. Your rich uncle died and left all his money to his what?",
        "answers":  [
                        {
                            "text":  "dog/pets",
                            "points":  52
                        },
                        {
                            "text":  "lover/skank wife",
                            "points":  27
                        },
                        {
                            "text":  "awful kids",
                            "points":  6
                        },
                        {
                            "text":  "servant/maid",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140734,
        "question":  "We asked 100 women... I'd love to have a really expensive pair of what?",
        "answers":  [
                        {
                            "text":  "shoes",
                            "points":  51
                        },
                        {
                            "text":  "earrings",
                            "points":  29
                        },
                        {
                            "text":  "jeans",
                            "points":  5
                        },
                        {
                            "text":  "boobs",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140735,
        "question":  "No Disney Princess is complete without a what?",
        "answers":  [
                        {
                            "text":  "tiara/jewelry",
                            "points":  49
                        },
                        {
                            "text":  "prince",
                            "points":  21
                        },
                        {
                            "text":  "ball gown",
                            "points":  16
                        },
                        {
                            "text":  "sidekick/talk'g pet",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140736,
        "question":  "Name something that people bust out of.",
        "answers":  [
                        {
                            "text":  "the clink",
                            "points":  48
                        },
                        {
                            "text":  "clothes/tight dress",
                            "points":  33
                        },
                        {
                            "text":  "a cake",
                            "points":  5
                        },
                        {
                            "text":  "their shell/bubble",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140737,
        "question":  "Fill in the blank: Green is the color of ______.",
        "answers":  [
                        {
                            "text":  "grass",
                            "points":  47
                        },
                        {
                            "text":  "money",
                            "points":  37
                        },
                        {
                            "text":  "veggies/broccoli",
                            "points":  3
                        },
                        {
                            "text":  "envy/jealousy",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140738,
        "question":  "Name a superhero who might tell their shrink they're having a secret identity crisis.",
        "answers":  [
                        {
                            "text":  "superman",
                            "points":  39
                        },
                        {
                            "text":  "batman",
                            "points":  37
                        },
                        {
                            "text":  "the hulk",
                            "points":  8
                        },
                        {
                            "text":  "spider-man",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  140739,
        "question":  "At a wedding, a couple cuts up the cake. After a divorce, they cut up what?",
        "answers":  [
                        {
                            "text":  "$$$/assets",
                            "points":  35
                        },
                        {
                            "text":  "marriage lic.",
                            "points":  33
                        },
                        {
                            "text":  "pics",
                            "points":  17
                        },
                        {
                            "text":  "each other w/ knife",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140740,
        "question":  "Tell me an occupation where people hate coming to see you.",
        "answers":  [
                        {
                            "text":  "doc/dentist",
                            "points":  75
                        },
                        {
                            "text":  "mortician/funeral",
                            "points":  6
                        },
                        {
                            "text":  "irs/tax office",
                            "points":  4
                        },
                        {
                            "text":  "cop",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140741,
        "question":  "Name a place you really should put your phone on vibrate.",
        "answers":  [
                        {
                            "text":  "church",
                            "points":  64
                        },
                        {
                            "text":  "theater/movies",
                            "points":  10
                        },
                        {
                            "text":  "funeral",
                            "points":  8
                        },
                        {
                            "text":  "work",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  140742,
        "question":  "If you had a treasure chest like a pirate does, what would you put in it before you buried it?",
        "answers":  [
                        {
                            "text":  "treasure/jewels",
                            "points":  50
                        },
                        {
                            "text":  "photos",
                            "points":  23
                        },
                        {
                            "text":  "diary/private notes",
                            "points":  12
                        },
                        {
                            "text":  "person/mate",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140743,
        "question":  "Steve Harvey has a million-dollar what?",
        "answers":  [
                        {
                            "text":  "smile",
                            "points":  48
                        },
                        {
                            "text":  "mansion",
                            "points":  28
                        },
                        {
                            "text":  "salary/job",
                            "points":  10
                        },
                        {
                            "text":  "wardrobe",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140744,
        "question":  "We asked 100 men... What would you hate a date to say her jealous ex-boyfriend does for a living?",
        "answers":  [
                        {
                            "text":  "cop/detective",
                            "points":  42
                        },
                        {
                            "text":  "wrestler/fighter",
                            "points":  27
                        },
                        {
                            "text":  "mob/hitman",
                            "points":  16
                        },
                        {
                            "text":  "bouncer",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140745,
        "question":  "Name a place where you sit in the back row so no one will see you going or coming.",
        "answers":  [
                        {
                            "text":  "theater/movie",
                            "points":  41
                        },
                        {
                            "text":  "church",
                            "points":  37
                        },
                        {
                            "text":  "strip joint",
                            "points":  6
                        },
                        {
                            "text":  "funeral",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140746,
        "question":  "Name something you might squeeze to reduce stress.",
        "answers":  [
                        {
                            "text":  "ball/stress ball",
                            "points":  76
                        },
                        {
                            "text":  "boobs",
                            "points":  5
                        },
                        {
                            "text":  "my hand/fist",
                            "points":  4
                        },
                        {
                            "text":  "pillow",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140747,
        "question":  "Name something that's always more exciting when it's new.",
        "answers":  [
                        {
                            "text":  "sweet ride",
                            "points":  70
                        },
                        {
                            "text":  "love/sex",
                            "points":  12
                        },
                        {
                            "text":  "house",
                            "points":  3
                        },
                        {
                            "text":  "clothes",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140748,
        "question":  "Name something you look forward to turning on when you get home from work.",
        "answers":  [
                        {
                            "text":  "tv/feud",
                            "points":  70
                        },
                        {
                            "text":  "my hot honey",
                            "points":  6
                        },
                        {
                            "text":  "music/neil diamond",
                            "points":  6
                        },
                        {
                            "text":  "oven",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  140749,
        "question":  "Name a kind of ball that you hope never hits you in the face.",
        "answers":  [
                        {
                            "text":  "baseball/softball",
                            "points":  58
                        },
                        {
                            "text":  "bowling ball",
                            "points":  11
                        },
                        {
                            "text":  "golf ball",
                            "points":  10
                        },
                        {
                            "text":  "basketball",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  140750,
        "question":  "Fill in the blank: Smooth as ______.",
        "answers":  [
                        {
                            "text":  "silk",
                            "points":  51
                        },
                        {
                            "text":  "a baby's bottom",
                            "points":  22
                        },
                        {
                            "text":  "butter",
                            "points":  9
                        },
                        {
                            "text":  "ice/rink",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  140751,
        "question":  "Tell me a U.S. city that has a lot of millionaires.",
        "answers":  [
                        {
                            "text":  "new york",
                            "points":  42
                        },
                        {
                            "text":  "l.a./bev hills",
                            "points":  39
                        },
                        {
                            "text":  "washington, d.c.",
                            "points":  4
                        },
                        {
                            "text":  "miami",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140752,
        "question":  "We asked 100 men... Heaven won't be paradise unless they have what there?",
        "answers":  [
                        {
                            "text":  "tv/football",
                            "points":  30
                        },
                        {
                            "text":  "beer/bars",
                            "points":  29
                        },
                        {
                            "text":  "smokin' babes",
                            "points":  23
                        },
                        {
                            "text":  "dogs",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  140753,
        "question":  "When Santa returns home on Christmas Eve, what would he hate to discover is gone?",
        "answers":  [
                        {
                            "text":  "the mrs.",
                            "points":  63
                        },
                        {
                            "text":  "food/hot cocoa",
                            "points":  12
                        },
                        {
                            "text":  "petulant elves",
                            "points":  6
                        },
                        {
                            "text":  "his comfy chair",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  140754,
        "question":  "Tell me a day of the year when you know your family's going to get into a fight.",
        "answers":  [
                        {
                            "text":  "thanksgiving",
                            "points":  52
                        },
                        {
                            "text":  "christmas",
                            "points":  21
                        },
                        {
                            "text":  "election day",
                            "points":  7
                        },
                        {
                            "text":  "every day of year",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  140755,
        "question":  "Some men have a body like Mr. Peanut. And others are shaped like what kind of nut?",
        "answers":  [
                        {
                            "text":  "walnut",
                            "points":  39
                        },
                        {
                            "text":  "almond",
                            "points":  25
                        },
                        {
                            "text":  "cashew",
                            "points":  17
                        },
                        {
                            "text":  "brazil nut",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  140756,
        "question":  "A guy knows he's in love when he loses interest in what?",
        "answers":  [
                        {
                            "text":  "other babes/booty",
                            "points":  38
                        },
                        {
                            "text":  "sports",
                            "points":  25
                        },
                        {
                            "text":  "his buds/bar nights",
                            "points":  19
                        },
                        {
                            "text":  "eating",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140757,
        "question":  "Name something expensive you'd like to buy before you die.",
        "answers":  [
                        {
                            "text":  "house/villa",
                            "points":  36
                        },
                        {
                            "text":  "car/r.v.",
                            "points":  32
                        },
                        {
                            "text":  "boat/cruise ship",
                            "points":  12
                        },
                        {
                            "text":  "a pool",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  140758,
        "question":  "Name something a wife might want for Christmas that starts with the letter D.",
        "answers":  [
                        {
                            "text":  "diamond",
                            "points":  70
                        },
                        {
                            "text":  "divorce",
                            "points":  6
                        },
                        {
                            "text":  "dog",
                            "points":  6
                        },
                        {
                            "text":  "dress",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140759,
        "question":  "Name the worst thing to be late for because your alarm clock didn't go off.",
        "answers":  [
                        {
                            "text":  "work/interview",
                            "points":  59
                        },
                        {
                            "text":  "flight",
                            "points":  10
                        },
                        {
                            "text":  "wedding/your own",
                            "points":  9
                        },
                        {
                            "text":  "court",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  140760,
        "question":  "Fill in the blank: Grandma said, \"Oh, for goodness' sakes -- grandpa lost his ______ again.\"",
        "answers":  [
                        {
                            "text":  "teeth",
                            "points":  57
                        },
                        {
                            "text":  "glasses",
                            "points":  20
                        },
                        {
                            "text":  "marbles/mind",
                            "points":  5
                        },
                        {
                            "text":  "phone",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140761,
        "question":  "Name something newlyweds spend their wedding cash on.",
        "answers":  [
                        {
                            "text":  "honeymoon/hotel",
                            "points":  56
                        },
                        {
                            "text":  "new house",
                            "points":  13
                        },
                        {
                            "text":  "furniture/bed",
                            "points":  9
                        },
                        {
                            "text":  "booze",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  140762,
        "question":  "A woman dreams of someday having a big what?",
        "answers":  [
                        {
                            "text":  "house",
                            "points":  43
                        },
                        {
                            "text":  "wad of cash",
                            "points":  22
                        },
                        {
                            "text":  "wedding",
                            "points":  17
                        },
                        {
                            "text":  "family",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140763,
        "question":  "Give me a word that rhymes with \"thumb.\"",
        "answers":  [
                        {
                            "text":  "dumb",
                            "points":  42
                        },
                        {
                            "text":  "numb",
                            "points":  26
                        },
                        {
                            "text":  "bum",
                            "points":  10
                        },
                        {
                            "text":  "plum/plumb",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  140764,
        "question":  "Name something you forget to take off at the airport while clearing the TSA security screening.",
        "answers":  [
                        {
                            "text":  "belt",
                            "points":  35
                        },
                        {
                            "text":  "jewelry/watch",
                            "points":  25
                        },
                        {
                            "text":  "shoes",
                            "points":  21
                        },
                        {
                            "text":  "glasses/shades",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140765,
        "question":  "Name a place that makes you nervous when you're there.",
        "answers":  [
                        {
                            "text":  "dr./dentist/e.r.",
                            "points":  68
                        },
                        {
                            "text":  "court",
                            "points":  6
                        },
                        {
                            "text":  "police stn./slammer",
                            "points":  6
                        },
                        {
                            "text":  "big city/alley",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140766,
        "question":  "You got a job at an all-nude office. What might you hide behind on your first day?",
        "answers":  [
                        {
                            "text":  "desk",
                            "points":  65
                        },
                        {
                            "text":  "potted plant",
                            "points":  9
                        },
                        {
                            "text":  "file cabinet",
                            "points":  8
                        },
                        {
                            "text":  "computer",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140767,
        "question":  "Fill in the blank: Pumpkin ______.",
        "answers":  [
                        {
                            "text":  "pumpkin pie",
                            "points":  63
                        },
                        {
                            "text":  "pumpkin spice",
                            "points":  11
                        },
                        {
                            "text":  "pumpkin patch",
                            "points":  7
                        },
                        {
                            "text":  "pumpkin seed",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140768,
        "question":  "We asked 100 married women... Name a reason a Kardashian wouldn't be interested in your husband.",
        "answers":  [
                        {
                            "text":  "not rich",
                            "points":  57
                        },
                        {
                            "text":  "too old",
                            "points":  18
                        },
                        {
                            "text":  "boring/introvert",
                            "points":  6
                        },
                        {
                            "text":  "too smart/nerdy",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140769,
        "question":  "If a dog had a will, what might he leave to another dog?",
        "answers":  [
                        {
                            "text":  "bone stash/food",
                            "points":  54
                        },
                        {
                            "text":  "favorite toy",
                            "points":  18
                        },
                        {
                            "text":  "his human",
                            "points":  7
                        },
                        {
                            "text":  "bowl",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  140770,
        "question":  "Tell me a profession where adults seem to behave like children.",
        "answers":  [
                        {
                            "text":  "entertainer/clown",
                            "points":  44
                        },
                        {
                            "text":  "sports/athlete",
                            "points":  20
                        },
                        {
                            "text":  "teacher/pre-k",
                            "points":  11
                        },
                        {
                            "text":  "politician",
                            "points":  10
                        }
                    ]
    },
    {
        "id":  140771,
        "question":  "What is it in your house that makes a groaning and creaking sound?",
        "answers":  [
                        {
                            "text":  "floor/stairs",
                            "points":  40
                        },
                        {
                            "text":  "people/my lover",
                            "points":  33
                        },
                        {
                            "text":  "front/back door",
                            "points":  7
                        },
                        {
                            "text":  "furnace",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140772,
        "question":  "Name something about a bank robber's description that would make you suspect it was the Queen of England.",
        "answers":  [
                        {
                            "text":  "crown/jewelry",
                            "points":  37
                        },
                        {
                            "text":  "old/white hair",
                            "points":  19
                        },
                        {
                            "text":  "english accent",
                            "points":  17
                        },
                        {
                            "text":  "short/petite",
                            "points":  12
                        }
                    ]
    },
    {
        "id":  140773,
        "question":  "Name something grandpa says they don't make as good as they used to.",
        "answers":  [
                        {
                            "text":  "cars/trucks",
                            "points":  65
                        },
                        {
                            "text":  "food/candy",
                            "points":  9
                        },
                        {
                            "text":  "clothes",
                            "points":  5
                        },
                        {
                            "text":  "people/politicians",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140774,
        "question":  "You stayed at a $10-a-night motel. Name something you might find in your room.",
        "answers":  [
                        {
                            "text":  "roaches/bugs",
                            "points":  62
                        },
                        {
                            "text":  "condom",
                            "points":  12
                        },
                        {
                            "text":  "rats/mice",
                            "points":  6
                        },
                        {
                            "text":  "vibrating bed/futon",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140775,
        "question":  "Name an occupation that if you work in it, your mom claims bragging rights.",
        "answers":  [
                        {
                            "text":  "doctor",
                            "points":  61
                        },
                        {
                            "text":  "lawyer",
                            "points":  11
                        },
                        {
                            "text":  "actor",
                            "points":  8
                        },
                        {
                            "text":  "chef",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140776,
        "question":  "Name something that people say is running smoothly.",
        "answers":  [
                        {
                            "text":  "car/engine",
                            "points":  58
                        },
                        {
                            "text":  "work/business",
                            "points":  15
                        },
                        {
                            "text":  "the economy",
                            "points":  8
                        },
                        {
                            "text":  "life",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140777,
        "question":  "We asked 100 women... Name something everyone expects you to do just because you're the mom.",
        "answers":  [
                        {
                            "text":  "cook",
                            "points":  47
                        },
                        {
                            "text":  "clean/laundry",
                            "points":  28
                        },
                        {
                            "text":  "change diapers",
                            "points":  6
                        },
                        {
                            "text":  "drive carpool",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140778,
        "question":  "Name a big animal you should never try to tip over.",
        "answers":  [
                        {
                            "text":  "elephant",
                            "points":  45
                        },
                        {
                            "text":  "bear",
                            "points":  20
                        },
                        {
                            "text":  "cow/bull",
                            "points":  15
                        },
                        {
                            "text":  "buffalo/bison",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140779,
        "question":  "We asked 100 single women... A man can score a lot of points with me if he says I have a nice what?",
        "answers":  [
                        {
                            "text":  "smile/face",
                            "points":  40
                        },
                        {
                            "text":  "personality",
                            "points":  26
                        },
                        {
                            "text":  "firm fanny",
                            "points":  9
                        },
                        {
                            "text":  "family/kid",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  140780,
        "question":  "When I was a kid, if you talked back to the teacher, you got what?",
        "answers":  [
                        {
                            "text":  "paddled/hit",
                            "points":  40
                        },
                        {
                            "text":  "sent to principal",
                            "points":  25
                        },
                        {
                            "text":  "detention",
                            "points":  14
                        },
                        {
                            "text":  "put in corner",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140781,
        "question":  "Fill in the blank with one exact word: ______ bath.",
        "answers":  [
                        {
                            "text":  "bubble bath",
                            "points":  60
                        },
                        {
                            "text":  "hot bath",
                            "points":  14
                        },
                        {
                            "text":  "birdbath",
                            "points":  5
                        },
                        {
                            "text":  "sponge bath",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140782,
        "question":  "Name something grandpa is always doing that keeps the dog from getting a decent night's sleep.",
        "answers":  [
                        {
                            "text":  "snoring",
                            "points":  57
                        },
                        {
                            "text":  "farting",
                            "points":  14
                        },
                        {
                            "text":  "get'g up to pee",
                            "points":  9
                        },
                        {
                            "text":  "play'g music/radio",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140783,
        "question":  "Fill in the blank: Grandpa said, \"Oh dang it -- I lost my ______ again.\"",
        "answers":  [
                        {
                            "text":  "teeth",
                            "points":  54
                        },
                        {
                            "text":  "bifocals",
                            "points":  16
                        },
                        {
                            "text":  "mind/marbles",
                            "points":  7
                        },
                        {
                            "text":  "keys",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  140784,
        "question":  "Name a sport where the men have bigger bottoms than most women.",
        "answers":  [
                        {
                            "text":  "wrestling/sumo",
                            "points":  51
                        },
                        {
                            "text":  "football",
                            "points":  20
                        },
                        {
                            "text":  "weightlifting",
                            "points":  8
                        },
                        {
                            "text":  "ice skating",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140785,
        "question":  "Name an occupation with whistleblowers because they blow a whistle on the job.",
        "answers":  [
                        {
                            "text":  "referee/ump",
                            "points":  49
                        },
                        {
                            "text":  "traffic cop",
                            "points":  20
                        },
                        {
                            "text":  "coach/p.e. teacher",
                            "points":  8
                        },
                        {
                            "text":  "train conductor",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  140786,
        "question":  "Name something Tom Brady might count if he's trying to fall asleep.",
        "answers":  [
                        {
                            "text":  "footballs",
                            "points":  45
                        },
                        {
                            "text":  "td's/points",
                            "points":  15
                        },
                        {
                            "text":  "super bowl rings/wins",
                            "points":  15
                        },
                        {
                            "text":  "sheep, of course",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  140787,
        "question":  "Name something you have that's precious to you.",
        "answers":  [
                        {
                            "text":  "family/1 of my 3 kids",
                            "points":  63
                        },
                        {
                            "text":  "jewelry/watch",
                            "points":  10
                        },
                        {
                            "text":  "pet/pusssycat",
                            "points":  5
                        },
                        {
                            "text":  "photos",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140788,
        "question":  "Name someone who might tell you, \"It's all over.\"",
        "answers":  [
                        {
                            "text":  "mate/ex",
                            "points":  66
                        },
                        {
                            "text":  "boss",
                            "points":  7
                        },
                        {
                            "text":  "doctor",
                            "points":  4
                        },
                        {
                            "text":  "coach/ref",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140789,
        "question":  "Name something the best mom ever packs in her kid's school lunch.",
        "answers":  [
                        {
                            "text":  "sweets/dessert",
                            "points":  60
                        },
                        {
                            "text":  "sandwich/pbj",
                            "points":  9
                        },
                        {
                            "text":  "cute note",
                            "points":  8
                        },
                        {
                            "text":  "apple/fruit",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140790,
        "question":  "Oh no -- it's Christmas Eve and you forgot to get a present for who?",
        "answers":  [
                        {
                            "text":  "my bae",
                            "points":  54
                        },
                        {
                            "text":  "mom/pop",
                            "points":  13
                        },
                        {
                            "text":  "in-laws",
                            "points":  7
                        },
                        {
                            "text":  "pet/grand-dog",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  140791,
        "question":  "Name a place you'd be surprised to hear that Santa met Mrs. Claus.",
        "answers":  [
                        {
                            "text":  "bar/nightclub",
                            "points":  35
                        },
                        {
                            "text":  "beach/miami",
                            "points":  22
                        },
                        {
                            "text":  "strip joint",
                            "points":  20
                        },
                        {
                            "text":  "south pole",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  140792,
        "question":  "Name someone who can actually bring you to tears.",
        "answers":  [
                        {
                            "text":  "mom/dad",
                            "points":  28
                        },
                        {
                            "text":  "my bae",
                            "points":  26
                        },
                        {
                            "text":  "kid/grandkid",
                            "points":  21
                        },
                        {
                            "text":  "singer/streisand",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140793,
        "question":  "Fill in the blank: ______ bowl.",
        "answers":  [
                        {
                            "text":  "super bowl",
                            "points":  62
                        },
                        {
                            "text":  "rose bowl",
                            "points":  7
                        },
                        {
                            "text":  "sugar bowl",
                            "points":  5
                        },
                        {
                            "text":  "fish bowl",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140794,
        "question":  "Name an occupation whose people are saints on Earth.",
        "answers":  [
                        {
                            "text":  "nurses",
                            "points":  47
                        },
                        {
                            "text":  "clergy/nuns",
                            "points":  19
                        },
                        {
                            "text":  "doctors",
                            "points":  6
                        },
                        {
                            "text":  "new orleans saints",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  140795,
        "question":  "Name something someone might tell you to lower.",
        "answers":  [
                        {
                            "text":  "my voice",
                            "points":  52
                        },
                        {
                            "text":  "the volume/music",
                            "points":  11
                        },
                        {
                            "text":  "the price",
                            "points":  7
                        },
                        {
                            "text":  "blinds/shades",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140796,
        "question":  "Name something you would brush with a very little brush.",
        "answers":  [
                        {
                            "text":  "teeth",
                            "points":  40
                        },
                        {
                            "text":  "eyebrows/lashes",
                            "points":  20
                        },
                        {
                            "text":  "pet/hamster",
                            "points":  9
                        },
                        {
                            "text":  "baby's hair",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140797,
        "question":  "Name an organ in your body that might pop right out if you squeeze really hard.",
        "answers":  [
                        {
                            "text":  "eyeball",
                            "points":  48
                        },
                        {
                            "text":  "stomach",
                            "points":  8
                        },
                        {
                            "text":  "intestines/rectum",
                            "points":  7
                        },
                        {
                            "text":  "heart",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  140798,
        "question":  "Fill in the blank: I have way too many ______.",
        "answers":  [
                        {
                            "text":  "clothes",
                            "points":  37
                        },
                        {
                            "text":  "bills",
                            "points":  17
                        },
                        {
                            "text":  "books/mags",
                            "points":  6
                        },
                        {
                            "text":  "pets/chickens",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  140799,
        "question":  "We asked 100 men... Where's the craziest place you've ever gotten naked?",
        "answers":  [
                        {
                            "text":  "beach/sea/lake",
                            "points":  26
                        },
                        {
                            "text":  "home/roof",
                            "points":  15
                        },
                        {
                            "text":  "pool",
                            "points":  13
                        },
                        {
                            "text":  "woods",
                            "points":  11
                        }
                    ]
    },
    {
        "id":  140800,
        "question":  "We asked 100 men... Name something men should never say after the first date.",
        "answers":  [
                        {
                            "text":  "sex/my place?",
                            "points":  21
                        },
                        {
                            "text":  "marry me?",
                            "points":  16
                        },
                        {
                            "text":  "i love you!",
                            "points":  14
                        },
                        {
                            "text":  "have sister/friend?",
                            "points":  10
                        }
                    ]
    },
    {
        "id":  140801,
        "question":  "We asked 100 women... Fill in the blank: My man is like a football player in bed. He's always ______ing.",
        "answers":  [
                        {
                            "text":  "scoring/touchdown",
                            "points":  25
                        },
                        {
                            "text":  "fumbling",
                            "points":  25
                        },
                        {
                            "text":  "tackling",
                            "points":  6
                        },
                        {
                            "text":  "passing",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  140802,
        "question":  "Name a famous doctor you hope isn't performing surgery on anyone.",
        "answers":  [
                        {
                            "text":  "dr. phil",
                            "points":  26
                        },
                        {
                            "text":  "dr. dre",
                            "points":  13
                        },
                        {
                            "text":  "dr. seuss",
                            "points":  9
                        },
                        {
                            "text":  "dr. kevorkian",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  140803,
        "question":  "Name something that you might say you can't wait to get out of.",
        "answers":  [
                        {
                            "text":  "work/zoom mtg",
                            "points":  22
                        },
                        {
                            "text":  "clothes",
                            "points":  13
                        },
                        {
                            "text":  "debt",
                            "points":  10
                        },
                        {
                            "text":  "jail again",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  140804,
        "question":  "Name something in your home that you wonder, \"What was I thinking when I got this?\"",
        "answers":  [
                        {
                            "text":  "art/statue of me",
                            "points":  21
                        },
                        {
                            "text":  "furniture",
                            "points":  14
                        },
                        {
                            "text":  "vile spouse/mate",
                            "points":  9
                        },
                        {
                            "text":  "pet/fish tank",
                            "points":  8
                        }
                    ]
    }
];
