import type { SurveyQuestion } from "./questions.js";

// Season 25 set: a separate question set from the main bank in questions.ts.
// Boards from Family Feud season 25, as transcribed at
// https://mstiescott.neocities.org/feud25 (crawled 2026-11-13).
// Ids start at 120001 (each season has its own block of 10,000), so they
// never clash with the main bank (1-8782), AI questions (9000+) or other
// seasons. One-answer boards are left out.
// Not used in gameplay yet.
export const SEASON25_SET = "season25";
export const SEASON25_ID_START = 120001;

export function isSeason25Question(id: number): boolean {
  return id >= SEASON25_ID_START && id < SEASON25_ID_START + 10000;
}

export const season25Questions: SurveyQuestion[] = [
    {
        "id":  120001,
        "question":  "We asked 100 women... If you wanted to turn your man into a tasty hot dog, what would you smear on him?",
        "answers":  [
                        {
                            "text":  "mustard",
                            "points":  34
                        },
                        {
                            "text":  "ketchup",
                            "points":  29
                        },
                        {
                            "text":  "relish",
                            "points":  18
                        },
                        {
                            "text":  "chili",
                            "points":  7
                        },
                        {
                            "text":  "cheese",
                            "points":  4
                        },
                        {
                            "text":  "onions",
                            "points":  3
                        },
                        {
                            "text":  "mayo",
                            "points":  3
                        },
                        {
                            "text":  "sauerkraut",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120002,
        "question":  "We asked 100 married men... Some women eat like a bird. What animal does your wife eat like?",
        "answers":  [
                        {
                            "text":  "3 horses",
                            "points":  33
                        },
                        {
                            "text":  "dog",
                            "points":  22
                        },
                        {
                            "text":  "pack of wolves",
                            "points":  13
                        },
                        {
                            "text":  "elephant",
                            "points":  12
                        },
                        {
                            "text":  "hog",
                            "points":  7
                        },
                        {
                            "text":  "cow",
                            "points":  5
                        },
                        {
                            "text":  "giraffe",
                            "points":  5
                        },
                        {
                            "text":  "rhino",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120003,
        "question":  "We asked 100 married women... If you had to guess, your husband's brain is the size of what kind of ball?",
        "answers":  [
                        {
                            "text":  "tennis ball",
                            "points":  25
                        },
                        {
                            "text":  "golf ball",
                            "points":  21
                        },
                        {
                            "text":  "baseball/softball",
                            "points":  17
                        },
                        {
                            "text":  "soccer ball",
                            "points":  11
                        },
                        {
                            "text":  "basketball",
                            "points":  9
                        },
                        {
                            "text":  "volleyball",
                            "points":  8
                        },
                        {
                            "text":  "bowling ball",
                            "points":  5
                        },
                        {
                            "text":  "beach ball",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120004,
        "question":  "Name something about Mickey Mouse that Minnie Mouse thinks is hot.",
        "answers":  [
                        {
                            "text":  "dem ears",
                            "points":  62
                        },
                        {
                            "text":  "outfit/shirtless",
                            "points":  13
                        },
                        {
                            "text":  "voice/laugh",
                            "points":  9
                        },
                        {
                            "text":  "big \"hands\"",
                            "points":  4
                        },
                        {
                            "text":  "cute booty/tail",
                            "points":  3
                        },
                        {
                            "text":  "kind/charming",
                            "points":  3
                        },
                        {
                            "text":  "he's rich",
                            "points":  3
                        },
                        {
                            "text":  "big nose",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120005,
        "question":  "If a woman had a clown fetish, what about a clown might she say really turns her on?",
        "answers":  [
                        {
                            "text":  "red nose",
                            "points":  53
                        },
                        {
                            "text":  "big feet/shoes",
                            "points":  28
                        },
                        {
                            "text":  "humor/pranks",
                            "points":  5
                        },
                        {
                            "text":  "makeup",
                            "points":  3
                        },
                        {
                            "text":  "ginger perm",
                            "points":  3
                        },
                        {
                            "text":  "big smile",
                            "points":  3
                        },
                        {
                            "text":  "horn noises",
                            "points":  2
                        },
                        {
                            "text":  "eyes/creepy stare",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120006,
        "question":  "Miss Piggy aside, name a reason Kermit the Frog might say female pigs are sexier than female frogs.",
        "answers":  [
                        {
                            "text":  "hot bod/big booty",
                            "points":  48
                        },
                        {
                            "text":  "nice snout",
                            "points":  19
                        },
                        {
                            "text":  "they're pink",
                            "points":  16
                        },
                        {
                            "text":  "taste like bacon",
                            "points":  7
                        },
                        {
                            "text":  "sexier noises",
                            "points":  3
                        },
                        {
                            "text":  "don't jump",
                            "points":  2
                        },
                        {
                            "text":  "don't give you warts",
                            "points":  2
                        },
                        {
                            "text":  "cute tail",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120007,
        "question":  "If a bald guy were really into baldness, he might also shave the hair off his what?",
        "answers":  [
                        {
                            "text":  "chest",
                            "points":  36
                        },
                        {
                            "text":  "groin/wrinkly nads",
                            "points":  24
                        },
                        {
                            "text":  "face/eyebrows",
                            "points":  18
                        },
                        {
                            "text":  "entire body!",
                            "points":  6
                        },
                        {
                            "text":  "arms/pits",
                            "points":  5
                        },
                        {
                            "text":  "back",
                            "points":  4
                        },
                        {
                            "text":  "legs",
                            "points":  3
                        },
                        {
                            "text":  "butt/chili cannon",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120008,
        "question":  "Name something your body might do while laughing uncontrollably.",
        "answers":  [
                        {
                            "text":  "pee a little",
                            "points":  33
                        },
                        {
                            "text":  "shake/twitch",
                            "points":  29
                        },
                        {
                            "text":  "toot",
                            "points":  19
                        },
                        {
                            "text":  "cry",
                            "points":  7
                        },
                        {
                            "text":  "snort",
                            "points":  4
                        },
                        {
                            "text":  "cramp/hurt",
                            "points":  3
                        },
                        {
                            "text":  "fall down",
                            "points":  2
                        },
                        {
                            "text":  "contort",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120009,
        "question":  "We asked 100 women... You were dating the world's most handsome man. Tell me why you dumped him.",
        "answers":  [
                        {
                            "text":  "ego/douchey",
                            "points":  33
                        },
                        {
                            "text":  "cheated",
                            "points":  20
                        },
                        {
                            "text":  "peaked in 1st grade",
                            "points":  18
                        },
                        {
                            "text":  "dullsville",
                            "points":  12
                        },
                        {
                            "text":  "no $/cheap",
                            "points":  5
                        },
                        {
                            "text":  "pinky-sized dinky",
                            "points":  5
                        },
                        {
                            "text":  "odor/fish & poo",
                            "points":  4
                        },
                        {
                            "text":  "liar",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120010,
        "question":  "Name something you hope they don't reuse in the doctor's office.",
        "answers":  [
                        {
                            "text":  "needle",
                            "points":  31
                        },
                        {
                            "text":  "tongue depressor",
                            "points":  25
                        },
                        {
                            "text":  "gloves",
                            "points":  20
                        },
                        {
                            "text":  "pee cup",
                            "points":  7
                        },
                        {
                            "text":  "cotton/swab",
                            "points":  6
                        },
                        {
                            "text":  "thermometer",
                            "points":  4
                        },
                        {
                            "text":  "tissues",
                            "points":  3
                        },
                        {
                            "text":  "gown",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120011,
        "question":  "We asked 100 men... If humans had a mating call, what animal might yours sound like?",
        "answers":  [
                        {
                            "text":  "gorilla/monkey",
                            "points":  31
                        },
                        {
                            "text":  "lion",
                            "points":  21
                        },
                        {
                            "text":  "wolf",
                            "points":  14
                        },
                        {
                            "text":  "dog",
                            "points":  13
                        },
                        {
                            "text":  "horse",
                            "points":  9
                        },
                        {
                            "text":  "kitty cat",
                            "points":  7
                        },
                        {
                            "text":  "bear",
                            "points":  2
                        },
                        {
                            "text":  "elephant",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120012,
        "question":  "Name something about Ronald McDonald that a woman might find sexy.",
        "answers":  [
                        {
                            "text":  "face/nose",
                            "points":  29
                        },
                        {
                            "text":  "ginger perm",
                            "points":  23
                        },
                        {
                            "text":  "bod/big feet",
                            "points":  18
                        },
                        {
                            "text":  "nothing!",
                            "points":  8
                        },
                        {
                            "text":  "sexy outfit",
                            "points":  7
                        },
                        {
                            "text":  "heart/personality",
                            "points":  7
                        },
                        {
                            "text":  "ronnie's rich",
                            "points":  5
                        },
                        {
                            "text":  "free food!",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120013,
        "question":  "Fill in the blank: A wife might call her husband \"baby,\" but only because he ______s like a baby.",
        "answers":  [
                        {
                            "text":  "whines/cries",
                            "points":  72
                        },
                        {
                            "text":  "sleeps",
                            "points":  7
                        },
                        {
                            "text":  "talks",
                            "points":  4
                        },
                        {
                            "text":  "smells",
                            "points":  3
                        },
                        {
                            "text":  "eats",
                            "points":  3
                        },
                        {
                            "text":  "burps",
                            "points":  3
                        },
                        {
                            "text":  "looks/is cute",
                            "points":  3
                        },
                        {
                            "text":  "is helpless",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120014,
        "question":  "A man wants a woman's phone number. Name a number of his that she might want to know.",
        "answers":  [
                        {
                            "text":  "salary/net worth",
                            "points":  57
                        },
                        {
                            "text":  "age",
                            "points":  16
                        },
                        {
                            "text":  "his phone #",
                            "points":  6
                        },
                        {
                            "text":  "iq",
                            "points":  6
                        },
                        {
                            "text":  "\"shoe\" size/girth",
                            "points":  5
                        },
                        {
                            "text":  "babes/ex-wives",
                            "points":  4
                        },
                        {
                            "text":  "credit score",
                            "points":  2
                        },
                        {
                            "text":  "address",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120015,
        "question":  "You've got a hot date. You've also got a huge pimple on your nose. Tell me what you do.",
        "answers":  [
                        {
                            "text":  "pop that sucka!",
                            "points":  48
                        },
                        {
                            "text":  "makeup",
                            "points":  18
                        },
                        {
                            "text":  "cancel date",
                            "points":  12
                        },
                        {
                            "text":  "band-aid",
                            "points":  9
                        },
                        {
                            "text":  "covid mask",
                            "points":  5
                        },
                        {
                            "text":  "joke about it",
                            "points":  2
                        },
                        {
                            "text":  "meds/compress",
                            "points":  2
                        },
                        {
                            "text":  "ignore/keep date",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120016,
        "question":  "Your young kids just discovered your stash of weed. What do you tell them it is?",
        "answers":  [
                        {
                            "text":  "herbs/spices",
                            "points":  48
                        },
                        {
                            "text":  "weed/uncle steve's",
                            "points":  17
                        },
                        {
                            "text":  "medicine",
                            "points":  9
                        },
                        {
                            "text":  "tobacco",
                            "points":  8
                        },
                        {
                            "text":  "potpourri",
                            "points":  5
                        },
                        {
                            "text":  "veggies",
                            "points":  4
                        },
                        {
                            "text":  "grass clippings",
                            "points":  4
                        },
                        {
                            "text":  "catnip",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120017,
        "question":  "Bob's back hair was so thick, his wife used what garden tool to groom it?",
        "answers":  [
                        {
                            "text":  "rake",
                            "points":  46
                        },
                        {
                            "text":  "shears/clippers",
                            "points":  24
                        },
                        {
                            "text":  "hoe",
                            "points":  7
                        },
                        {
                            "text":  "hedge trimmer",
                            "points":  6
                        },
                        {
                            "text":  "chainsaw",
                            "points":  5
                        },
                        {
                            "text":  "lawn mower",
                            "points":  4
                        },
                        {
                            "text":  "weedwacker",
                            "points":  4
                        },
                        {
                            "text":  "garden brush",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120018,
        "question":  "You're driving around nude for fun and your car breaks down. Who do you call?",
        "answers":  [
                        {
                            "text":  "bae/spouse",
                            "points":  43
                        },
                        {
                            "text":  "bff",
                            "points":  22
                        },
                        {
                            "text":  "aaa/mechanic",
                            "points":  15
                        },
                        {
                            "text":  "sibling",
                            "points":  5
                        },
                        {
                            "text":  "tailor/clothing shop",
                            "points":  4
                        },
                        {
                            "text":  "parents",
                            "points":  3
                        },
                        {
                            "text":  "police/911",
                            "points":  3
                        },
                        {
                            "text":  "my kid",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120019,
        "question":  "During a Zoom meeting, you'd mute yourself so you can do what?",
        "answers":  [
                        {
                            "text":  "sneeze/cough",
                            "points":  40
                        },
                        {
                            "text":  "side convo/yell",
                            "points":  21
                        },
                        {
                            "text":  "blow air biscuits",
                            "points":  20
                        },
                        {
                            "text":  "burp",
                            "points":  5
                        },
                        {
                            "text":  "whiz/dump",
                            "points":  5
                        },
                        {
                            "text":  "eat/cook",
                            "points":  3
                        },
                        {
                            "text":  "yawn/sleep",
                            "points":  2
                        },
                        {
                            "text":  "text/type",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120020,
        "question":  "Name someone you visit who you hope doesn't answer the door naked.",
        "answers":  [
                        {
                            "text":  "parents",
                            "points":  37
                        },
                        {
                            "text":  "grandparents",
                            "points":  21
                        },
                        {
                            "text":  "neighbor",
                            "points":  17
                        },
                        {
                            "text":  "bff",
                            "points":  8
                        },
                        {
                            "text":  "preacher/clergy",
                            "points":  6
                        },
                        {
                            "text":  "in-law",
                            "points":  4
                        },
                        {
                            "text":  "sibling",
                            "points":  3
                        },
                        {
                            "text":  "my kids",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120021,
        "question":  "During his act, Bob the stripping baker invites the ladies to put what on his buns?",
        "answers":  [
                        {
                            "text":  "hot butter",
                            "points":  36
                        },
                        {
                            "text":  "icing/glaze",
                            "points":  29
                        },
                        {
                            "text":  "oil",
                            "points":  8
                        },
                        {
                            "text":  "money",
                            "points":  7
                        },
                        {
                            "text":  "cream/whipped",
                            "points":  6
                        },
                        {
                            "text":  "flour",
                            "points":  5
                        },
                        {
                            "text":  "their hands",
                            "points":  4
                        },
                        {
                            "text":  "honey",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120022,
        "question":  "We asked 100 men... You wouldn't want your wife to have what just like your mom's?",
        "answers":  [
                        {
                            "text":  "temper/loud mouth",
                            "points":  36
                        },
                        {
                            "text":  "hairstyle",
                            "points":  18
                        },
                        {
                            "text":  "bod/beer gut",
                            "points":  18
                        },
                        {
                            "text":  "face/whiskers",
                            "points":  12
                        },
                        {
                            "text":  "bad health",
                            "points":  8
                        },
                        {
                            "text":  "rules/a whip",
                            "points":  2
                        },
                        {
                            "text":  "cooking skills",
                            "points":  2
                        },
                        {
                            "text":  "granny clothes",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120023,
        "question":  "We asked 100 men... If they made a statue of you, name a part you'd hope they make a little bigger than it really is.",
        "answers":  [
                        {
                            "text":  "vienna sausage",
                            "points":  34
                        },
                        {
                            "text":  "biceps/arms",
                            "points":  20
                        },
                        {
                            "text":  "my dinky hands",
                            "points":  14
                        },
                        {
                            "text":  "legs/calves",
                            "points":  13
                        },
                        {
                            "text":  "head/brain",
                            "points":  7
                        },
                        {
                            "text":  "pecs",
                            "points":  6
                        },
                        {
                            "text":  "face/chin",
                            "points":  2
                        },
                        {
                            "text":  "shoulders",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120024,
        "question":  "We asked 100 married women... If you were going to seduce your husband, tell me the first thing you'd do.",
        "answers":  [
                        {
                            "text":  "get nekkid!",
                            "points":  33
                        },
                        {
                            "text":  "put on lingerie",
                            "points":  21
                        },
                        {
                            "text":  "shower",
                            "points":  11
                        },
                        {
                            "text":  "sext him",
                            "points":  10
                        },
                        {
                            "text":  "kiss/lick him",
                            "points":  8
                        },
                        {
                            "text":  "light candles",
                            "points":  7
                        },
                        {
                            "text":  "compliment him",
                            "points":  5
                        },
                        {
                            "text":  "rub/touch him",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120025,
        "question":  "We asked 100 married women... Name a reason you haven't killed your husband yet.",
        "answers":  [
                        {
                            "text":  "need his income",
                            "points":  31
                        },
                        {
                            "text":  "i'd go to jail",
                            "points":  25
                        },
                        {
                            "text":  "i love him",
                            "points":  25
                        },
                        {
                            "text":  "does yard work",
                            "points":  5
                        },
                        {
                            "text":  "the kids",
                            "points":  4
                        },
                        {
                            "text":  "i'd be lonely",
                            "points":  3
                        },
                        {
                            "text":  "the cleanup",
                            "points":  3
                        },
                        {
                            "text":  "he cooks",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120026,
        "question":  "We asked 100 women... Fill in the blank: You'd be surprised if your man told you, \"You ______ just like my mom.\"",
        "answers":  [
                        {
                            "text":  "nag/talk",
                            "points":  30
                        },
                        {
                            "text":  "cook",
                            "points":  28
                        },
                        {
                            "text":  "look",
                            "points":  17
                        },
                        {
                            "text":  "kiss",
                            "points":  8
                        },
                        {
                            "text":  "smell",
                            "points":  8
                        },
                        {
                            "text":  "hug",
                            "points":  3
                        },
                        {
                            "text":  "make love",
                            "points":  2
                        },
                        {
                            "text":  "burp & fart",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120027,
        "question":  "Who does a married man claim his mistress is when he's caught out in public with her?",
        "answers":  [
                        {
                            "text":  "coworker",
                            "points":  29
                        },
                        {
                            "text":  "sister",
                            "points":  25
                        },
                        {
                            "text":  "cousin",
                            "points":  22
                        },
                        {
                            "text":  "friend",
                            "points":  12
                        },
                        {
                            "text":  "niece",
                            "points":  4
                        },
                        {
                            "text":  "daughter",
                            "points":  2
                        },
                        {
                            "text":  "wife",
                            "points":  2
                        },
                        {
                            "text":  "nanny",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120028,
        "question":  "We asked 100 single women... Fill in the blank: A guy who is good at ______ is probably also good in bed.",
        "answers":  [
                        {
                            "text":  "conversation",
                            "points":  25
                        },
                        {
                            "text":  "dancing",
                            "points":  23
                        },
                        {
                            "text":  "cooking",
                            "points":  16
                        },
                        {
                            "text":  "kissing",
                            "points":  15
                        },
                        {
                            "text":  "fixing things",
                            "points":  12
                        },
                        {
                            "text":  "play'g instrument",
                            "points":  3
                        },
                        {
                            "text":  "push-ups",
                            "points":  2
                        },
                        {
                            "text":  "buying gifts",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120029,
        "question":  "We asked 100 men... Two heads are better than one because if you had two heads, you could do twice as much what?",
        "answers":  [
                        {
                            "text":  "eating",
                            "points":  24
                        },
                        {
                            "text":  "thinking",
                            "points":  19
                        },
                        {
                            "text":  "complain'g/talk'g",
                            "points":  17
                        },
                        {
                            "text":  "drinking",
                            "points":  13
                        },
                        {
                            "text":  "smooching",
                            "points":  11
                        },
                        {
                            "text":  "reading",
                            "points":  10
                        },
                        {
                            "text":  "working",
                            "points":  2
                        },
                        {
                            "text":  "lovemaking",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120030,
        "question":  "Name something a bad singer might see the audience do while they're singing.",
        "answers":  [
                        {
                            "text":  "leave/run!",
                            "points":  19
                        },
                        {
                            "text":  "laugh",
                            "points":  17
                        },
                        {
                            "text":  "yawn/sleep",
                            "points":  17
                        },
                        {
                            "text":  "plug ears",
                            "points":  16
                        },
                        {
                            "text":  "boo",
                            "points":  11
                        },
                        {
                            "text":  "cringe/make faces",
                            "points":  11
                        },
                        {
                            "text":  "talk",
                            "points":  4
                        },
                        {
                            "text":  "play on phone",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120031,
        "question":  "What do people do around a campfire that you'd be surprised to see firemen do at a house fire?",
        "answers":  [
                        {
                            "text":  "cook/eat s'mores",
                            "points":  60
                        },
                        {
                            "text":  "sing",
                            "points":  11
                        },
                        {
                            "text":  "stoke/fuel it",
                            "points":  8
                        },
                        {
                            "text":  "talk/ghost story",
                            "points":  6
                        },
                        {
                            "text":  "stare/do nothing",
                            "points":  4
                        },
                        {
                            "text":  "drink brewskis",
                            "points":  3
                        },
                        {
                            "text":  "pee on it",
                            "points":  3
                        },
                        {
                            "text":  "smoke pot",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120032,
        "question":  "Name an animal with a longer tongue than yours.",
        "answers":  [
                        {
                            "text":  "giraffe",
                            "points":  50
                        },
                        {
                            "text":  "snake",
                            "points":  15
                        },
                        {
                            "text":  "anteater/aardvark",
                            "points":  12
                        },
                        {
                            "text":  "lizard",
                            "points":  9
                        },
                        {
                            "text":  "frog",
                            "points":  4
                        },
                        {
                            "text":  "dog",
                            "points":  3
                        },
                        {
                            "text":  "cow",
                            "points":  2
                        },
                        {
                            "text":  "horse",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120033,
        "question":  "Name something a wife might do if her husband named his new boat after his ex-wife.",
        "answers":  [
                        {
                            "text":  "destroy/sink it",
                            "points":  39
                        },
                        {
                            "text":  "\"adios!\"",
                            "points":  33
                        },
                        {
                            "text":  "beat him up",
                            "points":  6
                        },
                        {
                            "text":  "kill him",
                            "points":  5
                        },
                        {
                            "text":  "paint over/rename",
                            "points":  5
                        },
                        {
                            "text":  "scream",
                            "points":  4
                        },
                        {
                            "text":  "pout",
                            "points":  3
                        },
                        {
                            "text":  "name car after her ex",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120034,
        "question":  "We asked 100 married women... Name something your husband does to make you feel sexy.",
        "answers":  [
                        {
                            "text":  "tells me i am!",
                            "points":  37
                        },
                        {
                            "text":  "kisses me",
                            "points":  18
                        },
                        {
                            "text":  "buys gifts",
                            "points":  14
                        },
                        {
                            "text":  "hugs/touches me",
                            "points":  10
                        },
                        {
                            "text":  "smiles at me",
                            "points":  7
                        },
                        {
                            "text":  "listens",
                            "points":  5
                        },
                        {
                            "text":  "sultry stare",
                            "points":  4
                        },
                        {
                            "text":  "whistles",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120035,
        "question":  "A woman would hate to hear her new boyfriend does what in the shower?",
        "answers":  [
                        {
                            "text":  "pees",
                            "points":  36
                        },
                        {
                            "text":  "tickles his tamale",
                            "points":  24
                        },
                        {
                            "text":  "sings/britney",
                            "points":  22
                        },
                        {
                            "text":  "poops",
                            "points":  5
                        },
                        {
                            "text":  "farts",
                            "points":  3
                        },
                        {
                            "text":  "spits/blows snot",
                            "points":  3
                        },
                        {
                            "text":  "cries",
                            "points":  2
                        },
                        {
                            "text":  "not use soap/clean",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120036,
        "question":  "Mrs. Peanut traded up. She dumped Mr. Peanut and she started dating Mr. what kind of nut?",
        "answers":  [
                        {
                            "text":  "mr. cashew",
                            "points":  35
                        },
                        {
                            "text":  "mr. brazil nut",
                            "points":  18
                        },
                        {
                            "text":  "mr. walnut",
                            "points":  13
                        },
                        {
                            "text":  "mr. almond",
                            "points":  11
                        },
                        {
                            "text":  "mr. pistachio",
                            "points":  10
                        },
                        {
                            "text":  "mr. hazelnut",
                            "points":  5
                        },
                        {
                            "text":  "mr. pecan",
                            "points":  3
                        },
                        {
                            "text":  "mr. macadamia",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120037,
        "question":  "We asked 100 men... You'd give up what before you'd give up drinking beer?",
        "answers":  [
                        {
                            "text":  "working",
                            "points":  35
                        },
                        {
                            "text":  "sports/exercise",
                            "points":  11
                        },
                        {
                            "text":  "soda",
                            "points":  11
                        },
                        {
                            "text":  "cigs/cigars",
                            "points":  10
                        },
                        {
                            "text":  "eating",
                            "points":  9
                        },
                        {
                            "text":  "water",
                            "points":  9
                        },
                        {
                            "text":  "sex",
                            "points":  6
                        },
                        {
                            "text":  "my spouse/mate",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  120038,
        "question":  "We asked 100 men... Name something James Bond has in his car that you might wish you had in yours.",
        "answers":  [
                        {
                            "text":  "weapon/missile",
                            "points":  34
                        },
                        {
                            "text":  "ejection seat",
                            "points":  20
                        },
                        {
                            "text":  "hot babes",
                            "points":  16
                        },
                        {
                            "text":  "autopilot",
                            "points":  7
                        },
                        {
                            "text":  "bar/martini",
                            "points":  6
                        },
                        {
                            "text":  "bulletproof glass",
                            "points":  5
                        },
                        {
                            "text":  "smoke screen",
                            "points":  5
                        },
                        {
                            "text":  "way to fly/transform",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120039,
        "question":  "Name something that unfortunately does not stay in Vegas but might follow you home.",
        "answers":  [
                        {
                            "text":  "std",
                            "points":  33
                        },
                        {
                            "text":  "debt",
                            "points":  32
                        },
                        {
                            "text":  "fling/new spouse",
                            "points":  10
                        },
                        {
                            "text":  "bedbugs",
                            "points":  9
                        },
                        {
                            "text":  "stories/pics",
                            "points":  4
                        },
                        {
                            "text":  "hangover",
                            "points":  3
                        },
                        {
                            "text":  "cop/warrant",
                            "points":  3
                        },
                        {
                            "text":  "bad luck",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120040,
        "question":  "We asked 100 men... Name something the girl of your dreams doesn't care about.",
        "answers":  [
                        {
                            "text":  "$$$/me working",
                            "points":  33
                        },
                        {
                            "text":  "my troll face",
                            "points":  18
                        },
                        {
                            "text":  "makeup",
                            "points":  13
                        },
                        {
                            "text":  "my age",
                            "points":  12
                        },
                        {
                            "text":  "big house",
                            "points":  11
                        },
                        {
                            "text":  "diet/weight",
                            "points":  6
                        },
                        {
                            "text":  "sports",
                            "points":  2
                        },
                        {
                            "text":  "sex",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120041,
        "question":  "Name something that happens to a man that his ex-wife might say he had it coming.",
        "answers":  [
                        {
                            "text":  "dumped/cheated on",
                            "points":  33
                        },
                        {
                            "text":  "hurt/by her car",
                            "points":  16
                        },
                        {
                            "text":  "broke/no job",
                            "points":  14
                        },
                        {
                            "text":  "dead/eaten by dog",
                            "points":  11
                        },
                        {
                            "text":  "every std/sick",
                            "points":  7
                        },
                        {
                            "text":  "jail/ticket",
                            "points":  7
                        },
                        {
                            "text":  "impotence",
                            "points":  5
                        },
                        {
                            "text":  "gray/balding",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120042,
        "question":  "We asked 100 married women... Name something an elephant has that your husband has, too.",
        "answers":  [
                        {
                            "text":  "big ears",
                            "points":  27
                        },
                        {
                            "text":  "long nose",
                            "points":  17
                        },
                        {
                            "text":  "big belly",
                            "points":  13
                        },
                        {
                            "text":  "rough, wrinkly skin",
                            "points":  13
                        },
                        {
                            "text":  "good memory",
                            "points":  11
                        },
                        {
                            "text":  "big mouth",
                            "points":  9
                        },
                        {
                            "text":  "huge feet",
                            "points":  4
                        },
                        {
                            "text":  "flat booty",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120043,
        "question":  "We asked 100 married men... Good news: your wife is wearing edible underwear. Better news: it tates like what?",
        "answers":  [
                        {
                            "text":  "chocolate/candy",
                            "points":  23
                        },
                        {
                            "text":  "fruit/berries",
                            "points":  17
                        },
                        {
                            "text":  "beer",
                            "points":  16
                        },
                        {
                            "text":  "bacon",
                            "points":  12
                        },
                        {
                            "text":  "coffee",
                            "points":  12
                        },
                        {
                            "text":  "cake",
                            "points":  9
                        },
                        {
                            "text":  "pizza",
                            "points":  5
                        },
                        {
                            "text":  "chicken nuggets",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120044,
        "question":  "Name a subtle signal you send your date so they kiss you.",
        "answers":  [
                        {
                            "text":  "lean in",
                            "points":  22
                        },
                        {
                            "text":  "wink/bat eyes",
                            "points":  17
                        },
                        {
                            "text":  "lick/bite lips",
                            "points":  16
                        },
                        {
                            "text":  "stare/at their lips",
                            "points":  15
                        },
                        {
                            "text":  "close eyes",
                            "points":  8
                        },
                        {
                            "text":  "pucker up",
                            "points":  7
                        },
                        {
                            "text":  "smile coyly",
                            "points":  6
                        },
                        {
                            "text":  "touch/hands",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  120045,
        "question":  "Grandpa got confused and stuck his hearing aid in his what?",
        "answers":  [
                        {
                            "text":  "nose",
                            "points":  58
                        },
                        {
                            "text":  "mouth",
                            "points":  18
                        },
                        {
                            "text":  "pocket/clothes",
                            "points":  8
                        },
                        {
                            "text":  "belly button",
                            "points":  3
                        },
                        {
                            "text":  "coffee/drink",
                            "points":  3
                        },
                        {
                            "text":  "hemorrhoidal booty",
                            "points":  2
                        },
                        {
                            "text":  "wallet",
                            "points":  2
                        },
                        {
                            "text":  "denture cup",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120046,
        "question":  "You know you shouldn't, but name someone you have sexy dreams about.",
        "answers":  [
                        {
                            "text":  "celeb/jason momoa",
                            "points":  54
                        },
                        {
                            "text":  "my ex",
                            "points":  16
                        },
                        {
                            "text":  "boss/coworker",
                            "points":  9
                        },
                        {
                            "text":  "my hot buddy",
                            "points":  7
                        },
                        {
                            "text":  "in-law",
                            "points":  4
                        },
                        {
                            "text":  "politician",
                            "points":  2
                        },
                        {
                            "text":  "clergy",
                            "points":  2
                        },
                        {
                            "text":  "doc/proctologist",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120047,
        "question":  "Name something music puts you in the mood to do.",
        "answers":  [
                        {
                            "text":  "dance/tango",
                            "points":  53
                        },
                        {
                            "text":  "clean/vacuum",
                            "points":  15
                        },
                        {
                            "text":  "make love",
                            "points":  13
                        },
                        {
                            "text":  "sing",
                            "points":  5
                        },
                        {
                            "text":  "sleep",
                            "points":  3
                        },
                        {
                            "text":  "run/exercise",
                            "points":  3
                        },
                        {
                            "text":  "work",
                            "points":  2
                        },
                        {
                            "text":  "play instrument",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120048,
        "question":  "Name something you'd be surprised a doctor did to your bottom during a routine exam.",
        "answers":  [
                        {
                            "text":  "spank/patted it",
                            "points":  45
                        },
                        {
                            "text":  "pinch/squeezed it",
                            "points":  18
                        },
                        {
                            "text":  "caressed it",
                            "points":  15
                        },
                        {
                            "text":  "probed it",
                            "points":  9
                        },
                        {
                            "text":  "took a pic",
                            "points":  3
                        },
                        {
                            "text":  "kissed it",
                            "points":  2
                        },
                        {
                            "text":  "took a whiff",
                            "points":  2
                        },
                        {
                            "text":  "shaved it",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120049,
        "question":  "Name something specific you only do during a kiss if it's a passionate kiss.",
        "answers":  [
                        {
                            "text":  "tongue 'em",
                            "points":  39
                        },
                        {
                            "text":  "moan & sigh",
                            "points":  19
                        },
                        {
                            "text":  "close eyes",
                            "points":  16
                        },
                        {
                            "text":  "hug/grope",
                            "points":  11
                        },
                        {
                            "text":  "aroused/more kisses!",
                            "points":  5
                        },
                        {
                            "text":  "lift one leg",
                            "points":  2
                        },
                        {
                            "text":  "make it last",
                            "points":  2
                        },
                        {
                            "text":  "bite!",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120050,
        "question":  "Name something that's hard for a man to admit he's not very good at.",
        "answers":  [
                        {
                            "text":  "sex",
                            "points":  38
                        },
                        {
                            "text":  "driving/directions",
                            "points":  18
                        },
                        {
                            "text":  "fixing things",
                            "points":  13
                        },
                        {
                            "text":  "sports",
                            "points":  12
                        },
                        {
                            "text":  "cooking",
                            "points":  8
                        },
                        {
                            "text":  "finances",
                            "points":  3
                        },
                        {
                            "text":  "listening",
                            "points":  2
                        },
                        {
                            "text":  "cleaning",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120051,
        "question":  "Grandpa suspected grandma was having an affair when he found another guy's false teeth where?",
        "answers":  [
                        {
                            "text":  "bed/under pillow",
                            "points":  37
                        },
                        {
                            "text":  "nightstand",
                            "points":  19
                        },
                        {
                            "text":  "bathroom/denture cup",
                            "points":  12
                        },
                        {
                            "text":  "panties/garb",
                            "points":  11
                        },
                        {
                            "text":  "kitchen/coffee",
                            "points":  7
                        },
                        {
                            "text":  "in her mouth",
                            "points":  4
                        },
                        {
                            "text":  "dresser drawer",
                            "points":  3
                        },
                        {
                            "text":  "under bed",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120052,
        "question":  "What might a wife do if her husband said, \"Yes, that dress does make you look fat\"?",
        "answers":  [
                        {
                            "text":  "slap/kick in nads",
                            "points":  32
                        },
                        {
                            "text":  "cry",
                            "points":  23
                        },
                        {
                            "text":  "change/thank him",
                            "points":  15
                        },
                        {
                            "text":  "get mad/cuss",
                            "points":  12
                        },
                        {
                            "text":  "divorce him",
                            "points":  6
                        },
                        {
                            "text":  "kick outta bed",
                            "points":  4
                        },
                        {
                            "text":  "flip him off",
                            "points":  2
                        },
                        {
                            "text":  "silent treatment",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120053,
        "question":  "Your mom just posted a topless photo on Instagram. What do you do?",
        "answers":  [
                        {
                            "text":  "die/cry/hide",
                            "points":  30
                        },
                        {
                            "text":  "call her",
                            "points":  20
                        },
                        {
                            "text":  "don't look/ignore",
                            "points":  16
                        },
                        {
                            "text":  "report/delete it",
                            "points":  12
                        },
                        {
                            "text":  "laugh/love it",
                            "points":  9
                        },
                        {
                            "text":  "unfollow her",
                            "points":  5
                        },
                        {
                            "text":  "take her phone",
                            "points":  2
                        },
                        {
                            "text":  "delete my acct.",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120054,
        "question":  "We asked 100 married men... Name something you'd like to give your mother-in-law.",
        "answers":  [
                        {
                            "text":  "one-way ticket",
                            "points":  30
                        },
                        {
                            "text":  "my wife",
                            "points":  13
                        },
                        {
                            "text":  "grandkids",
                            "points":  11
                        },
                        {
                            "text":  "nearby house",
                            "points":  9
                        },
                        {
                            "text":  "flowers",
                            "points":  9
                        },
                        {
                            "text":  "hug/wet kiss",
                            "points":  9
                        },
                        {
                            "text":  "a funeral/cyanide",
                            "points":  8
                        },
                        {
                            "text":  "the finger",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  120055,
        "question":  "Name a way a woman flirts with a man at a bar.",
        "answers":  [
                        {
                            "text":  "eyes/winks",
                            "points":  29
                        },
                        {
                            "text":  "smiles/laughs",
                            "points":  19
                        },
                        {
                            "text":  "buys/asks for drink",
                            "points":  18
                        },
                        {
                            "text":  "flips hair",
                            "points":  11
                        },
                        {
                            "text":  "gets touchy",
                            "points":  9
                        },
                        {
                            "text":  "dancing",
                            "points":  5
                        },
                        {
                            "text":  "chats/sexy voice",
                            "points":  3
                        },
                        {
                            "text":  "bites/licks lips",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120056,
        "question":  "If you're invited to a really cheap funeral, you might be asked to bring your own what?",
        "answers":  [
                        {
                            "text":  "chair/pew",
                            "points":  28
                        },
                        {
                            "text":  "flowers",
                            "points":  20
                        },
                        {
                            "text":  "food",
                            "points":  12
                        },
                        {
                            "text":  "booze",
                            "points":  12
                        },
                        {
                            "text":  "casket/corpse",
                            "points":  10
                        },
                        {
                            "text":  "tissues",
                            "points":  7
                        },
                        {
                            "text":  "shovel/dirt",
                            "points":  5
                        },
                        {
                            "text":  "fan",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120057,
        "question":  "Name something people lose on a roller coaster that you might find on the ground below.",
        "answers":  [
                        {
                            "text":  "money/wallet",
                            "points":  27
                        },
                        {
                            "text":  "phone",
                            "points":  21
                        },
                        {
                            "text":  "glasses",
                            "points":  19
                        },
                        {
                            "text":  "hat",
                            "points":  15
                        },
                        {
                            "text":  "keys",
                            "points":  5
                        },
                        {
                            "text":  "\"their lunch\"",
                            "points":  4
                        },
                        {
                            "text":  "a shoe",
                            "points":  3
                        },
                        {
                            "text":  "teeth",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120058,
        "question":  "If Peter Pan ever gets married, what will his wife get tired of him talking about?",
        "answers":  [
                        {
                            "text":  "flying",
                            "points":  27
                        },
                        {
                            "text":  "neverland",
                            "points":  20
                        },
                        {
                            "text":  "tinker bell",
                            "points":  18
                        },
                        {
                            "text":  "never growing up",
                            "points":  13
                        },
                        {
                            "text":  "capt. hook/pirates",
                            "points":  9
                        },
                        {
                            "text":  "the lost boys",
                            "points":  5
                        },
                        {
                            "text":  "wendy",
                            "points":  2
                        },
                        {
                            "text":  "peanut butter",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120059,
        "question":  "Name a chore you might be surprised Steve Harvey does around the house.",
        "answers":  [
                        {
                            "text":  "vacuum/sweep",
                            "points":  22
                        },
                        {
                            "text":  "dishes",
                            "points":  20
                        },
                        {
                            "text":  "laundry/for sons",
                            "points":  16
                        },
                        {
                            "text":  "clean toilet",
                            "points":  10
                        },
                        {
                            "text":  "empty trash",
                            "points":  10
                        },
                        {
                            "text":  "cook",
                            "points":  9
                        },
                        {
                            "text":  "mow lawn",
                            "points":  5
                        },
                        {
                            "text":  "dust",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120060,
        "question":  "Name something of Santa's that an elf might get caught using.",
        "answers":  [
                        {
                            "text":  "sleigh & deer",
                            "points":  57
                        },
                        {
                            "text":  "outfit/hat",
                            "points":  19
                        },
                        {
                            "text":  "gift sack/toys",
                            "points":  6
                        },
                        {
                            "text":  "bed...with mrs. c",
                            "points":  3
                        },
                        {
                            "text":  "comb",
                            "points":  3
                        },
                        {
                            "text":  "kitchen/cookies",
                            "points":  3
                        },
                        {
                            "text":  "tools",
                            "points":  2
                        },
                        {
                            "text":  "naughty list",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120061,
        "question":  "If I don't win money on \"Family Feud,\" I hope at least I do what?",
        "answers":  [
                        {
                            "text":  "have fun",
                            "points":  45
                        },
                        {
                            "text":  "seem smart",
                            "points":  22
                        },
                        {
                            "text":  "look sexy",
                            "points":  8
                        },
                        {
                            "text":  "meet/kiss steve",
                            "points":  8
                        },
                        {
                            "text":  "consolation prize",
                            "points":  4
                        },
                        {
                            "text":  "get famous/you tube",
                            "points":  4
                        },
                        {
                            "text":  "win game",
                            "points":  2
                        },
                        {
                            "text":  "win lotto instead",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120062,
        "question":  "Name something some people do with their eyes open that others do with their eyes closed.",
        "answers":  [
                        {
                            "text":  "kiss",
                            "points":  45
                        },
                        {
                            "text":  "sex",
                            "points":  14
                        },
                        {
                            "text":  "sleep",
                            "points":  14
                        },
                        {
                            "text":  "swim/dive",
                            "points":  12
                        },
                        {
                            "text":  "sing",
                            "points":  4
                        },
                        {
                            "text":  "sneeze",
                            "points":  2
                        },
                        {
                            "text":  "think",
                            "points":  2
                        },
                        {
                            "text":  "put on makeup",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120063,
        "question":  "Name a bakery item a baker might stuff in her bra before a date to give herself bigger cleavage.",
        "answers":  [
                        {
                            "text":  "buns/rolls",
                            "points":  43
                        },
                        {
                            "text":  "muffins",
                            "points":  14
                        },
                        {
                            "text":  "donuts",
                            "points":  13
                        },
                        {
                            "text":  "bread/dough",
                            "points":  10
                        },
                        {
                            "text":  "cupcakes",
                            "points":  6
                        },
                        {
                            "text":  "bagels",
                            "points":  4
                        },
                        {
                            "text":  "croissants",
                            "points":  3
                        },
                        {
                            "text":  "cookies",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120064,
        "question":  "Name a kind of job where you might be cheered or booed by crowds.",
        "answers":  [
                        {
                            "text":  "athlete",
                            "points":  42
                        },
                        {
                            "text":  "comedian/actor",
                            "points":  17
                        },
                        {
                            "text":  "politician",
                            "points":  14
                        },
                        {
                            "text":  "ref/umpire",
                            "points":  10
                        },
                        {
                            "text":  "cop",
                            "points":  5
                        },
                        {
                            "text":  "singer",
                            "points":  3
                        },
                        {
                            "text":  "cheerleader",
                            "points":  2
                        },
                        {
                            "text":  "stripper",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120065,
        "question":  "Name something a man has that he might pump up.",
        "answers":  [
                        {
                            "text":  "tire",
                            "points":  41
                        },
                        {
                            "text":  "muscles",
                            "points":  27
                        },
                        {
                            "text":  "sports ball",
                            "points":  9
                        },
                        {
                            "text":  "his dangler",
                            "points":  6
                        },
                        {
                            "text":  "ego",
                            "points":  6
                        },
                        {
                            "text":  "air mattress",
                            "points":  2
                        },
                        {
                            "text":  "raft",
                            "points":  2
                        },
                        {
                            "text":  "reebok pump shoes",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120066,
        "question":  "What might a wife buy two of at a pet store -- one for the dog and one for her husband?",
        "answers":  [
                        {
                            "text":  "leashes",
                            "points":  37
                        },
                        {
                            "text":  "bones/food",
                            "points":  21
                        },
                        {
                            "text":  "shock collars",
                            "points":  13
                        },
                        {
                            "text":  "toys/balls",
                            "points":  10
                        },
                        {
                            "text":  "muzzles",
                            "points":  4
                        },
                        {
                            "text":  "matching clothes",
                            "points":  4
                        },
                        {
                            "text":  "crates/doghouses",
                            "points":  3
                        },
                        {
                            "text":  "beds/blankets",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120067,
        "question":  "The magician's rabbit said, \"I don't mind when he pulls me out of his hat, but I hate it when he pulls me out of his ______.\"",
        "answers":  [
                        {
                            "text":  "pants/fly",
                            "points":  36
                        },
                        {
                            "text":  "butt/dump trumpet",
                            "points":  35
                        },
                        {
                            "text":  "sleeve",
                            "points":  9
                        },
                        {
                            "text":  "stinky shoe",
                            "points":  4
                        },
                        {
                            "text":  "mouth",
                            "points":  4
                        },
                        {
                            "text":  "trunk/basket",
                            "points":  3
                        },
                        {
                            "text":  "ear canal",
                            "points":  2
                        },
                        {
                            "text":  "suit coat",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120068,
        "question":  "Name something lovers have within reach when taking a bath together.",
        "answers":  [
                        {
                            "text":  "soap/shampoo",
                            "points":  34
                        },
                        {
                            "text":  "wine",
                            "points":  24
                        },
                        {
                            "text":  "each other",
                            "points":  12
                        },
                        {
                            "text":  "towel/washcloth",
                            "points":  8
                        },
                        {
                            "text":  "toy/\"good vibes\"",
                            "points":  5
                        },
                        {
                            "text":  "bubble bath",
                            "points":  4
                        },
                        {
                            "text":  "sponge/loofah",
                            "points":  4
                        },
                        {
                            "text":  "candles",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120069,
        "question":  "Name something new a woman might get within days of her divorce being final.",
        "answers":  [
                        {
                            "text":  "boy toy",
                            "points":  34
                        },
                        {
                            "text":  "lexus",
                            "points":  19
                        },
                        {
                            "text":  "head-to-toe surgery",
                            "points":  17
                        },
                        {
                            "text":  "sexy garb",
                            "points":  8
                        },
                        {
                            "text":  "fancy crib",
                            "points":  7
                        },
                        {
                            "text":  "new 'do",
                            "points":  6
                        },
                        {
                            "text":  "depressed",
                            "points":  2
                        },
                        {
                            "text":  "cha-ching!",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120070,
        "question":  "Name something a sword swallower would hate to do in the middle of their act.",
        "answers":  [
                        {
                            "text":  "cough",
                            "points":  32
                        },
                        {
                            "text":  "sneeze",
                            "points":  22
                        },
                        {
                            "text":  "hiccup",
                            "points":  12
                        },
                        {
                            "text":  "choke",
                            "points":  10
                        },
                        {
                            "text":  "burp",
                            "points":  8
                        },
                        {
                            "text":  "puke/gag",
                            "points":  7
                        },
                        {
                            "text":  "trip/fall",
                            "points":  2
                        },
                        {
                            "text":  "stab self/die",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120071,
        "question":  "Name a complaint a firefighter might have about his hose.",
        "answers":  [
                        {
                            "text":  "too short",
                            "points":  31
                        },
                        {
                            "text":  "kinked/no water",
                            "points":  19
                        },
                        {
                            "text":  "hole/leaks",
                            "points":  12
                        },
                        {
                            "text":  "heavy/thick",
                            "points":  10
                        },
                        {
                            "text":  "low pressure",
                            "points":  10
                        },
                        {
                            "text":  "too long",
                            "points":  6
                        },
                        {
                            "text":  "droopy",
                            "points":  4
                        },
                        {
                            "text":  "out of control",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120072,
        "question":  "Good news: the party last night was epic. Bad news: this morning, there was what in your swimming pool?",
        "answers":  [
                        {
                            "text":  "pee/poop",
                            "points":  27
                        },
                        {
                            "text":  "people/body",
                            "points":  25
                        },
                        {
                            "text":  "beer/food/trash",
                            "points":  17
                        },
                        {
                            "text":  "puke",
                            "points":  10
                        },
                        {
                            "text":  "bikini/garb",
                            "points":  6
                        },
                        {
                            "text":  "car/my lambo",
                            "points":  4
                        },
                        {
                            "text":  "condom",
                            "points":  3
                        },
                        {
                            "text":  "an alligator",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120073,
        "question":  "Name a reason a woman might say she thinks farmers are sexy.",
        "answers":  [
                        {
                            "text":  "strong bods/hands",
                            "points":  26
                        },
                        {
                            "text":  "work hard",
                            "points":  18
                        },
                        {
                            "text":  "overalls/getup",
                            "points":  17
                        },
                        {
                            "text":  "farmer's tan",
                            "points":  13
                        },
                        {
                            "text":  "big tractors",
                            "points":  8
                        },
                        {
                            "text":  "rugged looks",
                            "points":  7
                        },
                        {
                            "text":  "sweaty scent",
                            "points":  3
                        },
                        {
                            "text":  "free food",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120074,
        "question":  "We asked 100 women... Steve Harvey probably looks hottest when he's wearing what?",
        "answers":  [
                        {
                            "text":  "suit/tux",
                            "points":  63
                        },
                        {
                            "text":  "nothing/a smile",
                            "points":  15
                        },
                        {
                            "text":  "speedo/trunks",
                            "points":  5
                        },
                        {
                            "text":  "hat/beret",
                            "points":  3
                        },
                        {
                            "text":  "undies",
                            "points":  2
                        },
                        {
                            "text":  "a paper bag",
                            "points":  2
                        },
                        {
                            "text":  "booty shorts",
                            "points":  2
                        },
                        {
                            "text":  "wig",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120075,
        "question":  "Name something you'd be shocked your boss gave you for your birthday.",
        "answers":  [
                        {
                            "text":  "$$$/raise",
                            "points":  53
                        },
                        {
                            "text":  "garb/fur undies",
                            "points":  15
                        },
                        {
                            "text":  "sex toy",
                            "points":  6
                        },
                        {
                            "text":  "15-second kiss",
                            "points":  5
                        },
                        {
                            "text":  "car",
                            "points":  5
                        },
                        {
                            "text":  "vacay/1 whole day",
                            "points":  4
                        },
                        {
                            "text":  "bling",
                            "points":  4
                        },
                        {
                            "text":  "walking papers",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120076,
        "question":  "Name something of his wife's a man might try on just to see how he looks in it.",
        "answers":  [
                        {
                            "text":  "lingerie/stockings",
                            "points":  46
                        },
                        {
                            "text":  "dress/skirt",
                            "points":  16
                        },
                        {
                            "text":  "heels",
                            "points":  8
                        },
                        {
                            "text":  "jacket",
                            "points":  6
                        },
                        {
                            "text":  "shirt/tube top",
                            "points":  5
                        },
                        {
                            "text":  "wig",
                            "points":  5
                        },
                        {
                            "text":  "hat/bonnet",
                            "points":  4
                        },
                        {
                            "text":  "jeans/pants",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120077,
        "question":  "Sally said, \"It was so embarrassing. My husband was laying out at the nude beach and someone mistook him for a\" what?",
        "answers":  [
                        {
                            "text":  "beached whale",
                            "points":  45
                        },
                        {
                            "text":  "woman",
                            "points":  26
                        },
                        {
                            "text":  "walrus",
                            "points":  6
                        },
                        {
                            "text":  "seal/sea lion",
                            "points":  6
                        },
                        {
                            "text":  "actor",
                            "points":  5
                        },
                        {
                            "text":  "child",
                            "points":  2
                        },
                        {
                            "text":  "old geezer",
                            "points":  2
                        },
                        {
                            "text":  "blanket/towel",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120078,
        "question":  "Name something a broke cowboy might ride if he couldn't afford a horse.",
        "answers":  [
                        {
                            "text":  "donkey/mule",
                            "points":  44
                        },
                        {
                            "text":  "bike",
                            "points":  24
                        },
                        {
                            "text":  "cow/bull",
                            "points":  11
                        },
                        {
                            "text":  "stick pony/broom",
                            "points":  5
                        },
                        {
                            "text":  "mini pony",
                            "points":  4
                        },
                        {
                            "text":  "beat-up car",
                            "points":  2
                        },
                        {
                            "text":  "moped",
                            "points":  2
                        },
                        {
                            "text":  "a cowgirl",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120079,
        "question":  "Name someone you kissed and then regretted it.",
        "answers":  [
                        {
                            "text":  "my ex",
                            "points":  43
                        },
                        {
                            "text":  "a friend",
                            "points":  23
                        },
                        {
                            "text":  "random stranger",
                            "points":  9
                        },
                        {
                            "text":  "1st date",
                            "points":  6
                        },
                        {
                            "text":  "hot cousin",
                            "points":  4
                        },
                        {
                            "text":  "my dog",
                            "points":  4
                        },
                        {
                            "text":  "boss/coworker",
                            "points":  3
                        },
                        {
                            "text":  "friend's spouse",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120080,
        "question":  "We asked 100 women... You're drunk at a bar. You see a man who dumped you. What do you do?",
        "answers":  [
                        {
                            "text":  "ignore him",
                            "points":  40
                        },
                        {
                            "text":  "leave/hide",
                            "points":  18
                        },
                        {
                            "text":  "tell him off",
                            "points":  15
                        },
                        {
                            "text":  "pour drink on him",
                            "points":  8
                        },
                        {
                            "text":  "say hi",
                            "points":  7
                        },
                        {
                            "text":  "puke on him",
                            "points":  2
                        },
                        {
                            "text":  "flip him off",
                            "points":  2
                        },
                        {
                            "text":  "headbutt/attack",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120081,
        "question":  "We asked 100 women... Brad Pitt just moved in next door. What's the first thing you do?",
        "answers":  [
                        {
                            "text":  "\"hiii!\"",
                            "points":  38
                        },
                        {
                            "text":  "bring food/gift",
                            "points":  30
                        },
                        {
                            "text":  "open blinds",
                            "points":  8
                        },
                        {
                            "text":  "nada/be calm",
                            "points":  6
                        },
                        {
                            "text":  "brag/post on fb",
                            "points":  4
                        },
                        {
                            "text":  "move out",
                            "points":  4
                        },
                        {
                            "text":  "\"go back to jen\"",
                            "points":  2
                        },
                        {
                            "text":  "buy binoculars",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120082,
        "question":  "Name something men do shirtless that they wish women would, too.",
        "answers":  [
                        {
                            "text":  "swim/gym/sports",
                            "points":  37
                        },
                        {
                            "text":  "yard work",
                            "points":  17
                        },
                        {
                            "text":  "sunbathe",
                            "points":  16
                        },
                        {
                            "text":  "wash car",
                            "points":  10
                        },
                        {
                            "text":  "walk around",
                            "points":  5
                        },
                        {
                            "text":  "sleep",
                            "points":  4
                        },
                        {
                            "text":  "work/construct'n",
                            "points":  3
                        },
                        {
                            "text":  "clean house",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120083,
        "question":  "Name a bad occasion to yawn very loudly.",
        "answers":  [
                        {
                            "text":  "funeral/eulogy",
                            "points":  36
                        },
                        {
                            "text":  "church",
                            "points":  26
                        },
                        {
                            "text":  "wedding",
                            "points":  11
                        },
                        {
                            "text":  "work/mtg.",
                            "points":  7
                        },
                        {
                            "text":  "mid-sex",
                            "points":  5
                        },
                        {
                            "text":  "recital/play",
                            "points":  3
                        },
                        {
                            "text":  "movie",
                            "points":  3
                        },
                        {
                            "text":  "speech/dad's lecture",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120084,
        "question":  "Bob walked out of the bathroom and exclaimed, \"Uh-oh -- I forgot to\" what?",
        "answers":  [
                        {
                            "text":  "flush my doody",
                            "points":  35
                        },
                        {
                            "text":  "wash my hands",
                            "points":  17
                        },
                        {
                            "text":  "wipe my booty",
                            "points":  14
                        },
                        {
                            "text":  "brush my teeth",
                            "points":  11
                        },
                        {
                            "text":  "shave",
                            "points":  7
                        },
                        {
                            "text":  "zip my fly",
                            "points":  4
                        },
                        {
                            "text":  "put seat down",
                            "points":  3
                        },
                        {
                            "text":  "pull up pants",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120085,
        "question":  "We asked 100 men... You're visiting your buddy in jail. What are you taking to him?",
        "answers":  [
                        {
                            "text":  "magazines/nudies",
                            "points":  31
                        },
                        {
                            "text":  "food/tacos",
                            "points":  27
                        },
                        {
                            "text":  "smokes",
                            "points":  19
                        },
                        {
                            "text":  "cards/games",
                            "points":  5
                        },
                        {
                            "text":  "sexy undies",
                            "points":  4
                        },
                        {
                            "text":  "advice/comfort",
                            "points":  3
                        },
                        {
                            "text":  "a file",
                            "points":  3
                        },
                        {
                            "text":  "money",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120086,
        "question":  "We asked 100 married women... Just between us, name an animal that probably has a higher IQ than your husband.",
        "answers":  [
                        {
                            "text":  "monkey/ape",
                            "points":  31
                        },
                        {
                            "text":  "dog",
                            "points":  24
                        },
                        {
                            "text":  "dolphin",
                            "points":  13
                        },
                        {
                            "text":  "elephant",
                            "points":  11
                        },
                        {
                            "text":  "pig",
                            "points":  8
                        },
                        {
                            "text":  "octopus",
                            "points":  3
                        },
                        {
                            "text":  "bird",
                            "points":  2
                        },
                        {
                            "text":  "lion",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120087,
        "question":  "When there's a serious toilet paper shortage, name something you might have to use instead.",
        "answers":  [
                        {
                            "text":  "kleenex",
                            "points":  26
                        },
                        {
                            "text":  "paper towel",
                            "points":  21
                        },
                        {
                            "text":  "newspaper/mag",
                            "points":  14
                        },
                        {
                            "text":  "towel/washrag",
                            "points":  10
                        },
                        {
                            "text":  "napkins",
                            "points":  9
                        },
                        {
                            "text":  "baby wipes",
                            "points":  7
                        },
                        {
                            "text":  "leaves",
                            "points":  4
                        },
                        {
                            "text":  "socks",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120088,
        "question":  "Name a reason you don't swim in the nude.",
        "answers":  [
                        {
                            "text":  "embarrassed/of bod",
                            "points":  25
                        },
                        {
                            "text":  "critters",
                            "points":  23
                        },
                        {
                            "text":  "get caught",
                            "points":  21
                        },
                        {
                            "text":  "cold/shrinkage",
                            "points":  9
                        },
                        {
                            "text":  "no pool/place",
                            "points":  5
                        },
                        {
                            "text":  "sunburn",
                            "points":  4
                        },
                        {
                            "text":  "can't swim",
                            "points":  4
                        },
                        {
                            "text":  "modest/shy",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120089,
        "question":  "Name something special you might buy for a night of lovemaking.",
        "answers":  [
                        {
                            "text":  "lingerie/edible",
                            "points":  24
                        },
                        {
                            "text":  "lube/oil",
                            "points":  20
                        },
                        {
                            "text":  "wine",
                            "points":  19
                        },
                        {
                            "text":  "candles",
                            "points":  15
                        },
                        {
                            "text":  "whipped cream/food",
                            "points":  7
                        },
                        {
                            "text":  "swing/sex toy",
                            "points":  4
                        },
                        {
                            "text":  "condoms/12-pack",
                            "points":  3
                        },
                        {
                            "text":  "flowers",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120090,
        "question":  "Name something Miss Nude America contestants might model instead of swimsuits.",
        "answers":  [
                        {
                            "text":  "jewelry",
                            "points":  23
                        },
                        {
                            "text":  "stilettos",
                            "points":  18
                        },
                        {
                            "text":  "hats/crowns",
                            "points":  14
                        },
                        {
                            "text":  "bods/booties",
                            "points":  12
                        },
                        {
                            "text":  "pasties",
                            "points":  9
                        },
                        {
                            "text":  "hairstyles/bows",
                            "points":  9
                        },
                        {
                            "text":  "body paint",
                            "points":  6
                        },
                        {
                            "text":  "flowers",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120091,
        "question":  "Name a place you might choose to have a bridal shower for a 100-year-old bride.",
        "answers":  [
                        {
                            "text":  "senior home/ctr.",
                            "points":  58
                        },
                        {
                            "text":  "cemetery/morgue",
                            "points":  16
                        },
                        {
                            "text":  "cracker barrel",
                            "points":  6
                        },
                        {
                            "text":  "hospital",
                            "points":  4
                        },
                        {
                            "text":  "church",
                            "points":  3
                        },
                        {
                            "text":  "bingo hall",
                            "points":  2
                        },
                        {
                            "text":  "a garden",
                            "points":  2
                        },
                        {
                            "text":  "florida",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120092,
        "question":  "Tell me another way people say \"prison.\"",
        "answers":  [
                        {
                            "text":  "jail/jailhouse",
                            "points":  55
                        },
                        {
                            "text":  "slammer",
                            "points":  10
                        },
                        {
                            "text":  "big house",
                            "points":  6
                        },
                        {
                            "text":  "clink",
                            "points":  6
                        },
                        {
                            "text":  "lockup",
                            "points":  5
                        },
                        {
                            "text":  "pokey",
                            "points":  4
                        },
                        {
                            "text":  "joint",
                            "points":  4
                        },
                        {
                            "text":  "pen/penitentiary",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120093,
        "question":  "We asked 100 women... The morning after a wild night with Ronald McDonald, you found a Chicken McNugget where?",
        "answers":  [
                        {
                            "text":  "in the bed",
                            "points":  49
                        },
                        {
                            "text":  "my bra/clothes",
                            "points":  11
                        },
                        {
                            "text":  "the nightstand",
                            "points":  8
                        },
                        {
                            "text":  "my hair",
                            "points":  7
                        },
                        {
                            "text":  "in my ear",
                            "points":  6
                        },
                        {
                            "text":  "my hoo-ha",
                            "points":  5
                        },
                        {
                            "text":  "my booty",
                            "points":  4
                        },
                        {
                            "text":  "my navel",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120094,
        "question":  "Name something a woman might do if her church got a sexy new preacher.",
        "answers":  [
                        {
                            "text":  "go more/join choir",
                            "points":  42
                        },
                        {
                            "text":  "confession",
                            "points":  14
                        },
                        {
                            "text":  "dolled up/cleavage",
                            "points":  12
                        },
                        {
                            "text":  "hit on him",
                            "points":  8
                        },
                        {
                            "text":  "pray/give thanks",
                            "points":  7
                        },
                        {
                            "text":  "sit in front",
                            "points":  6
                        },
                        {
                            "text":  "quit/complain",
                            "points":  2
                        },
                        {
                            "text":  "donate more",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120095,
        "question":  "What would you do if a bear started following you in the woods?",
        "answers":  [
                        {
                            "text":  "leave/outrun my kid",
                            "points":  40
                        },
                        {
                            "text":  "yell/roar",
                            "points":  19
                        },
                        {
                            "text":  "hide/in tree",
                            "points":  9
                        },
                        {
                            "text":  "play dead",
                            "points":  9
                        },
                        {
                            "text":  "attack/kill it",
                            "points":  5
                        },
                        {
                            "text":  "freeze",
                            "points":  5
                        },
                        {
                            "text":  "ignore it",
                            "points":  3
                        },
                        {
                            "text":  "pee/poo myself",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120096,
        "question":  "Name something Marjorie Harvey likes to put on Steve's bald head.",
        "answers":  [
                        {
                            "text":  "lotion/oil",
                            "points":  37
                        },
                        {
                            "text":  "hat/beret",
                            "points":  14
                        },
                        {
                            "text":  "wig/ladies' wig",
                            "points":  11
                        },
                        {
                            "text":  "whipped cream",
                            "points":  10
                        },
                        {
                            "text":  "her tongue/bod",
                            "points":  8
                        },
                        {
                            "text":  "wax",
                            "points":  7
                        },
                        {
                            "text":  "hot fudge",
                            "points":  3
                        },
                        {
                            "text":  "honey",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120097,
        "question":  "When cows get together, name something they probably complain about.",
        "answers":  [
                        {
                            "text":  "milked",
                            "points":  36
                        },
                        {
                            "text":  "food/crabgrass",
                            "points":  32
                        },
                        {
                            "text":  "people kill/eat",
                            "points":  7
                        },
                        {
                            "text":  "weather",
                            "points":  7
                        },
                        {
                            "text":  "fences/crowded",
                            "points":  4
                        },
                        {
                            "text":  "flies",
                            "points":  3
                        },
                        {
                            "text":  "sleep standing",
                            "points":  2
                        },
                        {
                            "text":  "their weight",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120098,
        "question":  "If a funeral home lost the deceased's body, what might they put in the closed casket instead?",
        "answers":  [
                        {
                            "text":  "dummy/doll",
                            "points":  33
                        },
                        {
                            "text":  "rocks/bricks",
                            "points":  21
                        },
                        {
                            "text":  "sandbags",
                            "points":  20
                        },
                        {
                            "text":  "pillows",
                            "points":  5
                        },
                        {
                            "text":  "other body/skeleton",
                            "points":  5
                        },
                        {
                            "text":  "sacks of food",
                            "points":  5
                        },
                        {
                            "text":  "animal carcass",
                            "points":  2
                        },
                        {
                            "text":  "clothes",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120099,
        "question":  "We asked 100 women... Name something about a male stripper that makes him the worst ever.",
        "answers":  [
                        {
                            "text":  "gut/d-cup moobs",
                            "points":  30
                        },
                        {
                            "text":  "ugly",
                            "points":  21
                        },
                        {
                            "text":  "hairy/back fur",
                            "points":  19
                        },
                        {
                            "text":  "teeny in the weenie",
                            "points":  9
                        },
                        {
                            "text":  "bad dancer",
                            "points":  6
                        },
                        {
                            "text":  "stinky/sweaty",
                            "points":  4
                        },
                        {
                            "text":  "clothes",
                            "points":  2
                        },
                        {
                            "text":  "flat butt",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120100,
        "question":  "We asked 100 women... You'd fire your babysitter immediately if you came home and found her using your what?",
        "answers":  [
                        {
                            "text":  "makeup",
                            "points":  25
                        },
                        {
                            "text":  "toothbrush",
                            "points":  20
                        },
                        {
                            "text":  "thong/garb",
                            "points":  20
                        },
                        {
                            "text":  "hubby",
                            "points":  10
                        },
                        {
                            "text":  "fave vibrator",
                            "points":  10
                        },
                        {
                            "text":  "bed",
                            "points":  3
                        },
                        {
                            "text":  "razor",
                            "points":  3
                        },
                        {
                            "text":  "computer",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120101,
        "question":  "Name a musical instrument that an insecure man might hide in his underpants to look more endowed.",
        "answers":  [
                        {
                            "text":  "flute/piccolo",
                            "points":  49
                        },
                        {
                            "text":  "harmonica",
                            "points":  21
                        },
                        {
                            "text":  "clarinet",
                            "points":  5
                        },
                        {
                            "text":  "trumpet",
                            "points":  5
                        },
                        {
                            "text":  "trombone",
                            "points":  4
                        },
                        {
                            "text":  "pair of maracas",
                            "points":  3
                        },
                        {
                            "text":  "saxophone",
                            "points":  3
                        },
                        {
                            "text":  "tuba",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120102,
        "question":  "Name something a wife wants to know about her ex-husband that starts with \"Is he\" what?",
        "answers":  [
                        {
                            "text":  "married/dating?",
                            "points":  36
                        },
                        {
                            "text":  "gay/out yet?",
                            "points":  20
                        },
                        {
                            "text":  "dead yet?",
                            "points":  12
                        },
                        {
                            "text":  "rich/broke?",
                            "points":  11
                        },
                        {
                            "text":  "happy/sad?",
                            "points":  7
                        },
                        {
                            "text":  "still stupid?",
                            "points":  2
                        },
                        {
                            "text":  "still a cheater?",
                            "points":  2
                        },
                        {
                            "text":  "in prison yet?",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120103,
        "question":  "Fill in the blank: A little kid might ask a stranger, \"Why are you so ______?\"",
        "answers":  [
                        {
                            "text":  "tall",
                            "points":  34
                        },
                        {
                            "text":  "fat",
                            "points":  28
                        },
                        {
                            "text":  "ugly",
                            "points":  13
                        },
                        {
                            "text":  "old",
                            "points":  5
                        },
                        {
                            "text":  "angry/mean",
                            "points":  5
                        },
                        {
                            "text":  "sad",
                            "points":  3
                        },
                        {
                            "text":  "dumb",
                            "points":  2
                        },
                        {
                            "text":  "weird",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120104,
        "question":  "Name something other than chicken that they make nuggets out of at the Roadkill Café.",
        "answers":  [
                        {
                            "text":  "possum",
                            "points":  33
                        },
                        {
                            "text":  "squirrel",
                            "points":  16
                        },
                        {
                            "text":  "deer",
                            "points":  14
                        },
                        {
                            "text":  "raccoon",
                            "points":  13
                        },
                        {
                            "text":  "wild turkey",
                            "points":  6
                        },
                        {
                            "text":  "skunk",
                            "points":  4
                        },
                        {
                            "text":  "rabbit",
                            "points":  3
                        },
                        {
                            "text":  "gator",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120105,
        "question":  "Susan's plastic surgery went all wrong, and now her eyes are where?",
        "answers":  [
                        {
                            "text":  "her forehead",
                            "points":  29
                        },
                        {
                            "text":  "top/back of head",
                            "points":  16
                        },
                        {
                            "text":  "her boobs",
                            "points":  12
                        },
                        {
                            "text":  "her nose",
                            "points":  8
                        },
                        {
                            "text":  "her chin",
                            "points":  7
                        },
                        {
                            "text":  "her booty cakes",
                            "points":  7
                        },
                        {
                            "text":  "her cheeks",
                            "points":  7
                        },
                        {
                            "text":  "her ears",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  120106,
        "question":  "Name something that might physically happen to your body when you're scared.",
        "answers":  [
                        {
                            "text":  "sweat",
                            "points":  26
                        },
                        {
                            "text":  "shake/shiver",
                            "points":  22
                        },
                        {
                            "text":  "pee down leg",
                            "points":  20
                        },
                        {
                            "text":  "goose bumps",
                            "points":  9
                        },
                        {
                            "text":  "heart races",
                            "points":  5
                        },
                        {
                            "text":  "muscles tense up",
                            "points":  4
                        },
                        {
                            "text":  "faint",
                            "points":  3
                        },
                        {
                            "text":  "cry",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120107,
        "question":  "If Steve Harvey had hair, what style would you be surprised he wore it in?",
        "answers":  [
                        {
                            "text":  "mohawk",
                            "points":  21
                        },
                        {
                            "text":  "afro",
                            "points":  19
                        },
                        {
                            "text":  "long/ponytail",
                            "points":  16
                        },
                        {
                            "text":  "mullet",
                            "points":  14
                        },
                        {
                            "text":  "dreadlocks",
                            "points":  8
                        },
                        {
                            "text":  "jheri curl/curly",
                            "points":  6
                        },
                        {
                            "text":  "comb-over",
                            "points":  5
                        },
                        {
                            "text":  "pompadour",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120108,
        "question":  "Fill in the blank: Maybe some people dig it, but I would never want to ______ in the nude.",
        "answers":  [
                        {
                            "text":  "swim/exercise",
                            "points":  41
                        },
                        {
                            "text":  "sunbathe",
                            "points":  22
                        },
                        {
                            "text":  "cook/grill",
                            "points":  8
                        },
                        {
                            "text":  "sleep",
                            "points":  6
                        },
                        {
                            "text":  "dance/twerk",
                            "points":  5
                        },
                        {
                            "text":  "eat",
                            "points":  4
                        },
                        {
                            "text":  "yard work",
                            "points":  3
                        },
                        {
                            "text":  "pose/for picture",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120109,
        "question":  "Name something a wife might playfully smack her husband with in the bedroom.",
        "answers":  [
                        {
                            "text":  "pillow",
                            "points":  38
                        },
                        {
                            "text":  "her hand",
                            "points":  15
                        },
                        {
                            "text":  "towel",
                            "points":  13
                        },
                        {
                            "text":  "thong/lingerie",
                            "points":  7
                        },
                        {
                            "text":  "whip/paddle",
                            "points":  6
                        },
                        {
                            "text":  "hairbrush",
                            "points":  5
                        },
                        {
                            "text":  "sex toy",
                            "points":  4
                        },
                        {
                            "text":  "her boobies",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120110,
        "question":  "Tell me something about a man that might remind you of Dr. Frankenstein's monster.",
        "answers":  [
                        {
                            "text":  "face/square head",
                            "points":  38
                        },
                        {
                            "text":  "height",
                            "points":  14
                        },
                        {
                            "text":  "way he moves/dances",
                            "points":  8
                        },
                        {
                            "text":  "haircut",
                            "points":  7
                        },
                        {
                            "text":  "convo/i.q.",
                            "points":  7
                        },
                        {
                            "text":  "scary/temper",
                            "points":  7
                        },
                        {
                            "text":  "skin/green hue",
                            "points":  5
                        },
                        {
                            "text":  "huge feet",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  120111,
        "question":  "Name a pizza topping that would make a good stripper name.",
        "answers":  [
                        {
                            "text":  "pepper/jalapeno",
                            "points":  31
                        },
                        {
                            "text":  "pepperoni",
                            "points":  17
                        },
                        {
                            "text":  "cheese/mozzarella",
                            "points":  16
                        },
                        {
                            "text":  "black olive",
                            "points":  8
                        },
                        {
                            "text":  "pineapple",
                            "points":  7
                        },
                        {
                            "text":  "sausage",
                            "points":  6
                        },
                        {
                            "text":  "red sauce/white sauce",
                            "points":  3
                        },
                        {
                            "text":  "portabello",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120112,
        "question":  "Name something you'd hate to come outside and find on your car.",
        "answers":  [
                        {
                            "text":  "poop",
                            "points":  30
                        },
                        {
                            "text":  "a ticket",
                            "points":  16
                        },
                        {
                            "text":  "skunk/critter",
                            "points":  14
                        },
                        {
                            "text":  "egg",
                            "points":  9
                        },
                        {
                            "text":  "a tree",
                            "points":  9
                        },
                        {
                            "text":  "graffiti/paint",
                            "points":  5
                        },
                        {
                            "text":  "snow",
                            "points":  4
                        },
                        {
                            "text":  "a person/i ran over",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120113,
        "question":  "Name something a man would hate to have happen as he was proposing to his girlfriend.",
        "answers":  [
                        {
                            "text":  "farts/the runs",
                            "points":  28
                        },
                        {
                            "text":  "she says no",
                            "points":  23
                        },
                        {
                            "text":  "loses ring",
                            "points":  16
                        },
                        {
                            "text":  "mate/ex shows up",
                            "points":  6
                        },
                        {
                            "text":  "rain/lightn'g strike",
                            "points":  6
                        },
                        {
                            "text":  "phone rings",
                            "points":  5
                        },
                        {
                            "text":  "his pants rip",
                            "points":  5
                        },
                        {
                            "text":  "faints",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120114,
        "question":  "As painful as it sounds, Bob, the nude athlete, uses his package to play what sport?",
        "answers":  [
                        {
                            "text":  "baseball",
                            "points":  28
                        },
                        {
                            "text":  "tennis",
                            "points":  19
                        },
                        {
                            "text":  "golf",
                            "points":  17
                        },
                        {
                            "text":  "ping-pong",
                            "points":  9
                        },
                        {
                            "text":  "billiards",
                            "points":  8
                        },
                        {
                            "text":  "volleyball",
                            "points":  4
                        },
                        {
                            "text":  "hockey",
                            "points":  3
                        },
                        {
                            "text":  "pole vaulting",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120115,
        "question":  "Name something you might do if you forgot to put on deodorant for the day.",
        "answers":  [
                        {
                            "text":  "cologne",
                            "points":  26
                        },
                        {
                            "text":  "wash off/wipes",
                            "points":  19
                        },
                        {
                            "text":  "avoid people",
                            "points":  12
                        },
                        {
                            "text":  "keep arms down",
                            "points":  10
                        },
                        {
                            "text":  "own my stank!",
                            "points":  7
                        },
                        {
                            "text":  "buy/borrow some",
                            "points":  7
                        },
                        {
                            "text":  "stay cool/swim",
                            "points":  6
                        },
                        {
                            "text":  "sniff pits",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120116,
        "question":  "We asked 100 women... You'd rather do what than have sex?",
        "answers":  [
                        {
                            "text":  "eat/a raw onion",
                            "points":  24
                        },
                        {
                            "text":  "sleep",
                            "points":  16
                        },
                        {
                            "text":  "tv/romantic movie",
                            "points":  16
                        },
                        {
                            "text":  "shop",
                            "points":  14
                        },
                        {
                            "text":  "go dancing",
                            "points":  7
                        },
                        {
                            "text":  "cuddle",
                            "points":  6
                        },
                        {
                            "text":  "spa day/massage",
                            "points":  4
                        },
                        {
                            "text":  "travel",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120117,
        "question":  "We asked 100 women... Name an exercise you'd like to see a guy do in a man thong.",
        "answers":  [
                        {
                            "text":  "push-ups",
                            "points":  20
                        },
                        {
                            "text":  "squats",
                            "points":  18
                        },
                        {
                            "text":  "yoga/downward dog",
                            "points":  17
                        },
                        {
                            "text":  "jumping jacks",
                            "points":  16
                        },
                        {
                            "text":  "sit-ups",
                            "points":  7
                        },
                        {
                            "text":  "jog/walk",
                            "points":  7
                        },
                        {
                            "text":  "lunges",
                            "points":  4
                        },
                        {
                            "text":  "planking",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120118,
        "question":  "Name a person you might be secretly attracted to.",
        "answers":  [
                        {
                            "text":  "coworker",
                            "points":  44
                        },
                        {
                            "text":  "celeb/nick cannon",
                            "points":  21
                        },
                        {
                            "text":  "my doc/nurse",
                            "points":  6
                        },
                        {
                            "text":  "friend",
                            "points":  5
                        },
                        {
                            "text":  "clergy/sister suzy",
                            "points":  4
                        },
                        {
                            "text":  "teacher",
                            "points":  4
                        },
                        {
                            "text":  "ex/old flame",
                            "points":  3
                        },
                        {
                            "text":  "in-law",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120119,
        "question":  "Name something a woman might do if her husband ditched her on their honeymoon.",
        "answers":  [
                        {
                            "text":  "cry",
                            "points":  29
                        },
                        {
                            "text":  "divorce him",
                            "points":  23
                        },
                        {
                            "text":  "drink/clubbing",
                            "points":  13
                        },
                        {
                            "text":  "boink a bellhop",
                            "points":  9
                        },
                        {
                            "text":  "use his amex",
                            "points":  7
                        },
                        {
                            "text":  "push off cliff/kill",
                            "points":  3
                        },
                        {
                            "text":  "go home",
                            "points":  3
                        },
                        {
                            "text":  "be thrilled!",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120120,
        "question":  "Name something you wish you could tell your ex you miss about them.",
        "answers":  [
                        {
                            "text":  "toe-curling sex",
                            "points":  26
                        },
                        {
                            "text":  "humor/laugh",
                            "points":  15
                        },
                        {
                            "text":  "face/smile",
                            "points":  13
                        },
                        {
                            "text":  "hugs/kisses",
                            "points":  13
                        },
                        {
                            "text":  "their $$$",
                            "points":  8
                        },
                        {
                            "text":  "companionship/chats",
                            "points":  8
                        },
                        {
                            "text":  "their family",
                            "points":  4
                        },
                        {
                            "text":  "their cooking",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120121,
        "question":  "Marian the librarian shocked everyone when she wore what to work?",
        "answers":  [
                        {
                            "text":  "nothing",
                            "points":  23
                        },
                        {
                            "text":  "skimpy dress/skirt",
                            "points":  17
                        },
                        {
                            "text":  "thong/lingerie",
                            "points":  13
                        },
                        {
                            "text":  "daisy dukes",
                            "points":  12
                        },
                        {
                            "text":  "high heels",
                            "points":  11
                        },
                        {
                            "text":  "bikini",
                            "points":  10
                        },
                        {
                            "text":  "fishnets",
                            "points":  2
                        },
                        {
                            "text":  "p.j.'s",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120122,
        "question":  "Name a kind of plastic surgery you'd be surprised Steve Harvey just had done.",
        "answers":  [
                        {
                            "text":  "hair transplant",
                            "points":  22
                        },
                        {
                            "text":  "nose job",
                            "points":  20
                        },
                        {
                            "text":  "facelift",
                            "points":  19
                        },
                        {
                            "text":  "lip job/enhancement",
                            "points":  7
                        },
                        {
                            "text":  "eye lift",
                            "points":  6
                        },
                        {
                            "text":  "butt lift/implants",
                            "points":  6
                        },
                        {
                            "text":  "boob job/pecs",
                            "points":  6
                        },
                        {
                            "text":  "tummy tuck/lipo",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120123,
        "question":  "I bet you speak some Spanish. Give me one word in Spanish that everybody knows.",
        "answers":  [
                        {
                            "text":  "hola",
                            "points":  64
                        },
                        {
                            "text":  "uno",
                            "points":  5
                        },
                        {
                            "text":  "gracias",
                            "points":  5
                        },
                        {
                            "text":  "si",
                            "points":  4
                        },
                        {
                            "text":  "agua",
                            "points":  4
                        },
                        {
                            "text":  "amigo",
                            "points":  3
                        },
                        {
                            "text":  "bueno",
                            "points":  2
                        },
                        {
                            "text":  "taco",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120124,
        "question":  "What might make a lady frog fall in love with a bullfrog?",
        "answers":  [
                        {
                            "text":  "deep croak",
                            "points":  44
                        },
                        {
                            "text":  "power tongue",
                            "points":  17
                        },
                        {
                            "text":  "long legs",
                            "points":  7
                        },
                        {
                            "text":  "body size",
                            "points":  6
                        },
                        {
                            "text":  "kiss/become prince",
                            "points":  5
                        },
                        {
                            "text":  "sexy warts",
                            "points":  4
                        },
                        {
                            "text":  "hunter/food stash",
                            "points":  3
                        },
                        {
                            "text":  "his coloring",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120125,
        "question":  "Name something your boss would be surprised you did while he's yelling at you.",
        "answers":  [
                        {
                            "text":  "laugh/smile",
                            "points":  38
                        },
                        {
                            "text":  "ignore/make calls",
                            "points":  17
                        },
                        {
                            "text":  "yawn/doze off",
                            "points":  8
                        },
                        {
                            "text":  "yell back",
                            "points":  6
                        },
                        {
                            "text":  "sashay away",
                            "points":  6
                        },
                        {
                            "text":  "quit",
                            "points":  5
                        },
                        {
                            "text":  "sob",
                            "points":  5
                        },
                        {
                            "text":  "fart on him",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120126,
        "question":  "Fill in the blank: My perfect mate wouldn't ______ too much.",
        "answers":  [
                        {
                            "text":  "talk/nag",
                            "points":  36
                        },
                        {
                            "text":  "fart",
                            "points":  13
                        },
                        {
                            "text":  "snore",
                            "points":  11
                        },
                        {
                            "text":  "drink",
                            "points":  10
                        },
                        {
                            "text":  "yell/cuss",
                            "points":  7
                        },
                        {
                            "text":  "eat",
                            "points":  5
                        },
                        {
                            "text":  "spend",
                            "points":  4
                        },
                        {
                            "text":  "cheat",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120127,
        "question":  "We asked 100 men... Name something you share with your best friend.",
        "answers":  [
                        {
                            "text":  "beer/drink",
                            "points":  28
                        },
                        {
                            "text":  "thoughts/story",
                            "points":  20
                        },
                        {
                            "text":  "food",
                            "points":  11
                        },
                        {
                            "text":  "tools",
                            "points":  10
                        },
                        {
                            "text":  "good laugh/jokes",
                            "points":  7
                        },
                        {
                            "text":  "car/truck",
                            "points":  5
                        },
                        {
                            "text":  "cigs",
                            "points":  4
                        },
                        {
                            "text":  "my wife/mate",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120128,
        "question":  "Name something you go up and down on.",
        "answers":  [
                        {
                            "text":  "elevator",
                            "points":  27
                        },
                        {
                            "text":  "seesaw",
                            "points":  16
                        },
                        {
                            "text":  "stairs",
                            "points":  14
                        },
                        {
                            "text":  "ladder",
                            "points":  8
                        },
                        {
                            "text":  "escalator",
                            "points":  8
                        },
                        {
                            "text":  "my stripper pole",
                            "points":  7
                        },
                        {
                            "text":  "my weight",
                            "points":  5
                        },
                        {
                            "text":  "roller coaster",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120129,
        "question":  "Name a tall guy whose nickname should be \"Mount Baldy.\"",
        "answers":  [
                        {
                            "text":  "shaq",
                            "points":  26
                        },
                        {
                            "text":  "dwayne johnson",
                            "points":  17
                        },
                        {
                            "text":  "mr. clean",
                            "points":  17
                        },
                        {
                            "text":  "steve harvey",
                            "points":  10
                        },
                        {
                            "text":  "michael jordan",
                            "points":  7
                        },
                        {
                            "text":  "kojak/telly savalas",
                            "points":  6
                        },
                        {
                            "text":  "dr. phil",
                            "points":  3
                        },
                        {
                            "text":  "kareem abdul-jabbar",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120130,
        "question":  "Name an animal that would creep you out if it stuck its tongue down your throat.",
        "answers":  [
                        {
                            "text":  "lizard",
                            "points":  22
                        },
                        {
                            "text":  "snake",
                            "points":  18
                        },
                        {
                            "text":  "dog",
                            "points":  13
                        },
                        {
                            "text":  "anteater/aardvark",
                            "points":  12
                        },
                        {
                            "text":  "giraffe",
                            "points":  11
                        },
                        {
                            "text":  "cow",
                            "points":  5
                        },
                        {
                            "text":  "frog",
                            "points":  4
                        },
                        {
                            "text":  "horse",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120131,
        "question":  "Name something you might see coming out of a hole.",
        "answers":  [
                        {
                            "text":  "worm/bug",
                            "points":  18
                        },
                        {
                            "text":  "snake",
                            "points":  13
                        },
                        {
                            "text":  "gopher",
                            "points":  12
                        },
                        {
                            "text":  "rabbit",
                            "points":  12
                        },
                        {
                            "text":  "mouse/rat",
                            "points":  11
                        },
                        {
                            "text":  "groundhog",
                            "points":  11
                        },
                        {
                            "text":  "mole",
                            "points":  9
                        },
                        {
                            "text":  "poop",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120132,
        "question":  "Give me another word for a person's bottom.",
        "answers":  [
                        {
                            "text":  "butt/buttocks",
                            "points":  46
                        },
                        {
                            "text":  "arse",
                            "points":  11
                        },
                        {
                            "text":  "booty",
                            "points":  7
                        },
                        {
                            "text":  "bum",
                            "points":  6
                        },
                        {
                            "text":  "tush",
                            "points":  6
                        },
                        {
                            "text":  "behind",
                            "points":  4
                        },
                        {
                            "text":  "rear",
                            "points":  4
                        },
                        {
                            "text":  "rump",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120133,
        "question":  "Tell me something you'd sell today if you were offered a million dollars for it.",
        "answers":  [
                        {
                            "text":  "house",
                            "points":  39
                        },
                        {
                            "text":  "car",
                            "points":  20
                        },
                        {
                            "text":  "jewelry",
                            "points":  6
                        },
                        {
                            "text":  "baseball cards",
                            "points":  6
                        },
                        {
                            "text":  "body/testicle",
                            "points":  6
                        },
                        {
                            "text":  "family member",
                            "points":  5
                        },
                        {
                            "text":  "comic books",
                            "points":  3
                        },
                        {
                            "text":  "art/painting",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120134,
        "question":  "Name a hole where only an idiot would stick a firecracker.",
        "answers":  [
                        {
                            "text":  "butt",
                            "points":  36
                        },
                        {
                            "text":  "ear",
                            "points":  13
                        },
                        {
                            "text":  "nose",
                            "points":  11
                        },
                        {
                            "text":  "mouth",
                            "points":  9
                        },
                        {
                            "text":  "gas tank",
                            "points":  6
                        },
                        {
                            "text":  "toilet",
                            "points":  6
                        },
                        {
                            "text":  "bottle",
                            "points":  4
                        },
                        {
                            "text":  "pipe/tail pipe",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120135,
        "question":  "Name an animal a nearsighted dogcatcher might mistake for a dog.",
        "answers":  [
                        {
                            "text":  "coyote",
                            "points":  21
                        },
                        {
                            "text":  "fox",
                            "points":  20
                        },
                        {
                            "text":  "wolf",
                            "points":  16
                        },
                        {
                            "text":  "cat",
                            "points":  12
                        },
                        {
                            "text":  "raccoon",
                            "points":  9
                        },
                        {
                            "text":  "possum",
                            "points":  4
                        },
                        {
                            "text":  "goat",
                            "points":  3
                        },
                        {
                            "text":  "skunk",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120136,
        "question":  "I won't be using that housesitter again -- not after they did what?",
        "answers":  [
                        {
                            "text":  "threw a rager",
                            "points":  20
                        },
                        {
                            "text":  "trashed/burned home",
                            "points":  19
                        },
                        {
                            "text":  "robbed me",
                            "points":  18
                        },
                        {
                            "text":  "raided food/drink",
                            "points":  11
                        },
                        {
                            "text":  "slept/in my bed",
                            "points":  7
                        },
                        {
                            "text":  "had boo over",
                            "points":  7
                        },
                        {
                            "text":  "my hubby",
                            "points":  3
                        },
                        {
                            "text":  "didn't flush",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120137,
        "question":  "Name something in your dreams that you might be riding on naked.",
        "answers":  [
                        {
                            "text":  "horse",
                            "points":  45
                        },
                        {
                            "text":  "babe/bradley cooper",
                            "points":  13
                        },
                        {
                            "text":  "bike",
                            "points":  8
                        },
                        {
                            "text":  "motorcycle",
                            "points":  6
                        },
                        {
                            "text":  "unicorn",
                            "points":  5
                        },
                        {
                            "text":  "boat",
                            "points":  4
                        },
                        {
                            "text":  "wave",
                            "points":  3
                        },
                        {
                            "text":  "dolphin",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120138,
        "question":  "Name something a husband lives in fear that his wife will ask him for.",
        "answers":  [
                        {
                            "text":  "$$$",
                            "points":  31
                        },
                        {
                            "text":  "a divorce",
                            "points":  26
                        },
                        {
                            "text":  "more kids",
                            "points":  10
                        },
                        {
                            "text":  "help w/to-do list",
                            "points":  6
                        },
                        {
                            "text":  "his phone",
                            "points":  5
                        },
                        {
                            "text":  "diamond",
                            "points":  3
                        },
                        {
                            "text":  "boyfriend/a 3rd",
                            "points":  3
                        },
                        {
                            "text":  "let her ma move in",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120139,
        "question":  "Name something grandpa might start doing that could make grandma suspect he has a secret lover.",
        "answers":  [
                        {
                            "text":  "go out/late",
                            "points":  30
                        },
                        {
                            "text":  "use/hide phone",
                            "points":  15
                        },
                        {
                            "text":  "cologne",
                            "points":  12
                        },
                        {
                            "text":  "dress up/cardigan",
                            "points":  11
                        },
                        {
                            "text":  "gifts/for lover",
                            "points":  6
                        },
                        {
                            "text":  "taking viagra",
                            "points":  5
                        },
                        {
                            "text":  "bathing",
                            "points":  4
                        },
                        {
                            "text":  "being happy",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120140,
        "question":  "Fill in the blank: A pirate might say in his online dating profile, \"I'm looking for that special woman who knows how to ______.\"",
        "answers":  [
                        {
                            "text":  "sail",
                            "points":  30
                        },
                        {
                            "text":  "rob/get treasure",
                            "points":  14
                        },
                        {
                            "text":  "walk plank",
                            "points":  11
                        },
                        {
                            "text":  "cook grub",
                            "points":  8
                        },
                        {
                            "text":  "drink rum",
                            "points":  8
                        },
                        {
                            "text":  "say \"arrr\"",
                            "points":  6
                        },
                        {
                            "text":  "\"shiver me timber\"",
                            "points":  6
                        },
                        {
                            "text":  "use sword",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120141,
        "question":  "You might want to learn magic just so you can make who disappear?",
        "answers":  [
                        {
                            "text":  "boss/coworker",
                            "points":  24
                        },
                        {
                            "text":  "ex",
                            "points":  23
                        },
                        {
                            "text":  "in-law",
                            "points":  12
                        },
                        {
                            "text":  "politician",
                            "points":  11
                        },
                        {
                            "text":  "my idiot mate",
                            "points":  6
                        },
                        {
                            "text":  "worst enemy",
                            "points":  5
                        },
                        {
                            "text":  "my awful mother",
                            "points":  3
                        },
                        {
                            "text":  "my neighbors",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120142,
        "question":  "Name something grandpa wants to know about a woman before he dates her.",
        "answers":  [
                        {
                            "text":  "age/under 30?",
                            "points":  40
                        },
                        {
                            "text":  "stack of crispies?",
                            "points":  11
                        },
                        {
                            "text":  "cook?",
                            "points":  9
                        },
                        {
                            "text":  "is she hot?",
                            "points":  6
                        },
                        {
                            "text":  "teeth/eat solids?",
                            "points":  6
                        },
                        {
                            "text":  "single?",
                            "points":  6
                        },
                        {
                            "text":  "sex life?",
                            "points":  5
                        },
                        {
                            "text":  "grandkids?",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120143,
        "question":  "Farmer Bob got drunk and attached the automatic milking machine to what?",
        "answers":  [
                        {
                            "text":  "his dingus/self",
                            "points":  27
                        },
                        {
                            "text":  "his wife",
                            "points":  25
                        },
                        {
                            "text":  "his bull",
                            "points":  12
                        },
                        {
                            "text":  "his horse",
                            "points":  9
                        },
                        {
                            "text":  "his dog",
                            "points":  5
                        },
                        {
                            "text":  "his car",
                            "points":  3
                        },
                        {
                            "text":  "his pig",
                            "points":  3
                        },
                        {
                            "text":  "his tractor",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120144,
        "question":  "Name the first thing grandpa did when grandma told him she was pregnant.",
        "answers":  [
                        {
                            "text":  "fainted",
                            "points":  34
                        },
                        {
                            "text":  "smiled/laughed",
                            "points":  15
                        },
                        {
                            "text":  "cried",
                            "points":  9
                        },
                        {
                            "text":  "hugged her",
                            "points":  8
                        },
                        {
                            "text":  "heart attack/died",
                            "points":  6
                        },
                        {
                            "text":  "\"yay!\"/clapped",
                            "points":  5
                        },
                        {
                            "text":  "\"whose is it?\"",
                            "points":  5
                        },
                        {
                            "text":  "got sloshed",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120145,
        "question":  "Name something you'd find in the world's worst gas station bathroom.",
        "answers":  [
                        {
                            "text":  "pee/poo/on walls",
                            "points":  25
                        },
                        {
                            "text":  "no toilet paper",
                            "points":  21
                        },
                        {
                            "text":  "roaches/bugs",
                            "points":  19
                        },
                        {
                            "text":  "vomit",
                            "points":  6
                        },
                        {
                            "text":  "clogged toilet",
                            "points":  5
                        },
                        {
                            "text":  "dead body",
                            "points":  3
                        },
                        {
                            "text":  "drugs/syringe",
                            "points":  3
                        },
                        {
                            "text":  "no soap",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120146,
        "question":  "Name someone you'd be shocked to hear say to you, \"Let's get naked.\"",
        "answers":  [
                        {
                            "text":  "boss",
                            "points":  23
                        },
                        {
                            "text":  "friend",
                            "points":  14
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
                            "text":  "celeb/george clooney",
                            "points":  8
                        },
                        {
                            "text":  "neighbor",
                            "points":  7
                        },
                        {
                            "text":  "teacher",
                            "points":  5
                        },
                        {
                            "text":  "in-law",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120147,
        "question":  "Tell me a place you see people behaving badly.",
        "answers":  [
                        {
                            "text":  "bar/club",
                            "points":  46
                        },
                        {
                            "text":  "store/checkout",
                            "points":  12
                        },
                        {
                            "text":  "jail",
                            "points":  7
                        },
                        {
                            "text":  "las vegas",
                            "points":  5
                        },
                        {
                            "text":  "school",
                            "points":  4
                        },
                        {
                            "text":  "strip joint",
                            "points":  4
                        },
                        {
                            "text":  "concert",
                            "points":  3
                        },
                        {
                            "text":  "plane",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120148,
        "question":  "Name something that you hope Bad Grandpa doesn't do at your birthday party.",
        "answers":  [
                        {
                            "text":  "get naked",
                            "points":  28
                        },
                        {
                            "text":  "2-toot salute",
                            "points":  19
                        },
                        {
                            "text":  "get drunk",
                            "points":  11
                        },
                        {
                            "text":  "yell/cuss",
                            "points":  6
                        },
                        {
                            "text":  "show up",
                            "points":  6
                        },
                        {
                            "text":  "hit on guests",
                            "points":  6
                        },
                        {
                            "text":  "talk/politics",
                            "points":  5
                        },
                        {
                            "text":  "sing perry como",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120149,
        "question":  "Because it's hell, there's no toilet paper there. Instead, everyone uses what?",
        "answers":  [
                        {
                            "text":  "their hands",
                            "points":  28
                        },
                        {
                            "text":  "sandpaper",
                            "points":  15
                        },
                        {
                            "text":  "rocks/coal/lava",
                            "points":  11
                        },
                        {
                            "text":  "poison ivy/leaf",
                            "points":  10
                        },
                        {
                            "text":  "fireballs",
                            "points":  7
                        },
                        {
                            "text":  "pine cones",
                            "points":  6
                        },
                        {
                            "text":  "cactus",
                            "points":  4
                        },
                        {
                            "text":  "paper/cvs receipt",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120150,
        "question":  "Name the most embarrassing public place to throw up.",
        "answers":  [
                        {
                            "text":  "restaurant",
                            "points":  27
                        },
                        {
                            "text":  "church",
                            "points":  23
                        },
                        {
                            "text":  "mall/store",
                            "points":  12
                        },
                        {
                            "text":  "work",
                            "points":  7
                        },
                        {
                            "text":  "school",
                            "points":  5
                        },
                        {
                            "text":  "wedding",
                            "points":  4
                        },
                        {
                            "text":  "bar/dance floor",
                            "points":  3
                        },
                        {
                            "text":  "theme park",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120151,
        "question":  "Name an S word grandpa might use to describe grandma's bottom.",
        "answers":  [
                        {
                            "text":  "saggy",
                            "points":  25
                        },
                        {
                            "text":  "sexy",
                            "points":  20
                        },
                        {
                            "text":  "sweet",
                            "points":  18
                        },
                        {
                            "text":  "squishy",
                            "points":  7
                        },
                        {
                            "text":  "soft",
                            "points":  7
                        },
                        {
                            "text":  "sassy",
                            "points":  3
                        },
                        {
                            "text":  "slippery",
                            "points":  2
                        },
                        {
                            "text":  "sugar",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120152,
        "question":  "Name something a male stripper called the Pool Boy might be holding onstage.",
        "answers":  [
                        {
                            "text":  "net/skimmer",
                            "points":  39
                        },
                        {
                            "text":  "hose",
                            "points":  11
                        },
                        {
                            "text":  "pool noodle",
                            "points":  11
                        },
                        {
                            "text":  "life preserver",
                            "points":  7
                        },
                        {
                            "text":  "beach ball",
                            "points":  4
                        },
                        {
                            "text":  "speedo/trunks",
                            "points":  4
                        },
                        {
                            "text":  "himself",
                            "points":  4
                        },
                        {
                            "text":  "float/raft",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120153,
        "question":  "Nothing says \"I love you\" like what?",
        "answers":  [
                        {
                            "text":  "flowers",
                            "points":  19
                        },
                        {
                            "text":  "diamonds/jewelry",
                            "points":  17
                        },
                        {
                            "text":  "a big hug/kiss",
                            "points":  15
                        },
                        {
                            "text":  "food/candy",
                            "points":  13
                        },
                        {
                            "text":  "money, honey!",
                            "points":  6
                        },
                        {
                            "text":  "saying it!",
                            "points":  5
                        },
                        {
                            "text":  "listening",
                            "points":  4
                        },
                        {
                            "text":  "cleaning house",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120154,
        "question":  "To save money, what do you worry your family might bury you in instead of a casket?",
        "answers":  [
                        {
                            "text":  "box",
                            "points":  41
                        },
                        {
                            "text":  "bag/potato sack",
                            "points":  18
                        },
                        {
                            "text":  "yard/random hole",
                            "points":  6
                        },
                        {
                            "text":  "tin can",
                            "points":  4
                        },
                        {
                            "text":  "lake/water",
                            "points":  4
                        },
                        {
                            "text":  "urn",
                            "points":  3
                        },
                        {
                            "text":  "plastic wrap/tarp",
                            "points":  3
                        },
                        {
                            "text":  "dumpster",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120155,
        "question":  "Name something you might find in your rental car that would make you suspect the last person who rented it was Santa Claus.",
        "answers":  [
                        {
                            "text":  "bag of gifts",
                            "points":  27
                        },
                        {
                            "text":  "santa suit/hat",
                            "points":  19
                        },
                        {
                            "text":  "cookies/milk",
                            "points":  8
                        },
                        {
                            "text":  "candy canes",
                            "points":  7
                        },
                        {
                            "text":  "naughty/nice list",
                            "points":  7
                        },
                        {
                            "text":  "reindeer food",
                            "points":  6
                        },
                        {
                            "text":  "forgotten elf",
                            "points":  4
                        },
                        {
                            "text":  "jingle bells",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120156,
        "question":  "What might a guy with man boobs have in his cleavage?",
        "answers":  [
                        {
                            "text":  "cheetos/food",
                            "points":  35
                        },
                        {
                            "text":  "chest hair",
                            "points":  12
                        },
                        {
                            "text":  "lint/dirt",
                            "points":  8
                        },
                        {
                            "text":  "sweat",
                            "points":  7
                        },
                        {
                            "text":  "wallet/money",
                            "points":  7
                        },
                        {
                            "text":  "phone",
                            "points":  5
                        },
                        {
                            "text":  "beer can",
                            "points":  4
                        },
                        {
                            "text":  "cigs/cigars",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120157,
        "question":  "Tell me a place Bad Grandma got banned from.",
        "answers":  [
                        {
                            "text":  "church",
                            "points":  19
                        },
                        {
                            "text":  "biker bar",
                            "points":  17
                        },
                        {
                            "text":  "senior home",
                            "points":  15
                        },
                        {
                            "text":  "bingo parlor",
                            "points":  10
                        },
                        {
                            "text":  "strip joint",
                            "points":  8
                        },
                        {
                            "text":  "store/walmart",
                            "points":  5
                        },
                        {
                            "text":  "golden corral",
                            "points":  3
                        },
                        {
                            "text":  "theater",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120158,
        "question":  "Name something a vampire hopes a person doesn't do while he's biting their neck.",
        "answers":  [
                        {
                            "text":  "fight/kill him",
                            "points":  19
                        },
                        {
                            "text":  "grab/eat garlic",
                            "points":  11
                        },
                        {
                            "text":  "bite back",
                            "points":  10
                        },
                        {
                            "text":  "sneeze/cough",
                            "points":  10
                        },
                        {
                            "text":  "let one rip",
                            "points":  9
                        },
                        {
                            "text":  "scream",
                            "points":  8
                        },
                        {
                            "text":  "hurl",
                            "points":  6
                        },
                        {
                            "text":  "die",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  120159,
        "question":  "Name something most husbands wear but wouldn't wear unless their wives forced them to.",
        "answers":  [
                        {
                            "text":  "suit/tux/tie",
                            "points":  42
                        },
                        {
                            "text":  "wife's clothes",
                            "points":  9
                        },
                        {
                            "text":  "ugly sweater",
                            "points":  5
                        },
                        {
                            "text":  "undies/thong",
                            "points":  5
                        },
                        {
                            "text":  "pinks/pastels",
                            "points":  5
                        },
                        {
                            "text":  "wedding ring",
                            "points":  4
                        },
                        {
                            "text":  "pj's/onesie",
                            "points":  3
                        },
                        {
                            "text":  "condom/willy wrap",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120160,
        "question":  "Tell me the greatest rock and roll band of all time.",
        "answers":  [
                        {
                            "text":  "the beatles",
                            "points":  23
                        },
                        {
                            "text":  "the rolling stones",
                            "points":  11
                        },
                        {
                            "text":  "ac/dc",
                            "points":  10
                        },
                        {
                            "text":  "led zeppelin",
                            "points":  8
                        },
                        {
                            "text":  "aerosmith",
                            "points":  6
                        },
                        {
                            "text":  "kiss",
                            "points":  6
                        },
                        {
                            "text":  "queen",
                            "points":  6
                        },
                        {
                            "text":  "metallica",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  120161,
        "question":  "Name a famous professional athlete that seems superhuman.",
        "answers":  [
                        {
                            "text":  "michael jordan",
                            "points":  24
                        },
                        {
                            "text":  "tom brady",
                            "points":  13
                        },
                        {
                            "text":  "simone biles",
                            "points":  10
                        },
                        {
                            "text":  "david beckham",
                            "points":  6
                        },
                        {
                            "text":  "the rock",
                            "points":  5
                        },
                        {
                            "text":  "shaq",
                            "points":  5
                        },
                        {
                            "text":  "patrick mahomes",
                            "points":  4
                        },
                        {
                            "text":  "lebron james",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120162,
        "question":  "Name something in a sporting goods store that's hard to steal by putting it down your pants.",
        "answers":  [
                        {
                            "text":  "baseball bat",
                            "points":  20
                        },
                        {
                            "text":  "golf club",
                            "points":  16
                        },
                        {
                            "text":  "basketball",
                            "points":  11
                        },
                        {
                            "text":  "fishing rod",
                            "points":  7
                        },
                        {
                            "text":  "treadmill",
                            "points":  5
                        },
                        {
                            "text":  "tennis racket",
                            "points":  4
                        },
                        {
                            "text":  "hockey stick",
                            "points":  4
                        },
                        {
                            "text":  "football",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120163,
        "question":  "A dentist would charge you double if you had big teeth like what animal?",
        "answers":  [
                        {
                            "text":  "horse",
                            "points":  17
                        },
                        {
                            "text":  "walrus",
                            "points":  16
                        },
                        {
                            "text":  "beaver",
                            "points":  13
                        },
                        {
                            "text":  "elephant",
                            "points":  7
                        },
                        {
                            "text":  "shark",
                            "points":  6
                        },
                        {
                            "text":  "hippo",
                            "points":  4
                        },
                        {
                            "text":  "lion",
                            "points":  4
                        },
                        {
                            "text":  "tiger",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120164,
        "question":  "Knowing your luck, if you're reincarnated as an animal, it would be what kind of animal?",
        "answers":  [
                        {
                            "text":  "bug/dung beetle",
                            "points":  17
                        },
                        {
                            "text":  "dog",
                            "points":  12
                        },
                        {
                            "text":  "skunk",
                            "points":  9
                        },
                        {
                            "text":  "chicken/bird",
                            "points":  6
                        },
                        {
                            "text":  "donkey/mule",
                            "points":  6
                        },
                        {
                            "text":  "rat/mouse",
                            "points":  5
                        },
                        {
                            "text":  "cat",
                            "points":  5
                        },
                        {
                            "text":  "snake",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  120165,
        "question":  "What would you hate your lover to say your bottom feels like when they squeeze it?",
        "answers":  [
                        {
                            "text":  "jell-o",
                            "points":  20
                        },
                        {
                            "text":  "cottage cheese",
                            "points":  13
                        },
                        {
                            "text":  "marshmallows",
                            "points":  7
                        },
                        {
                            "text":  "sponge",
                            "points":  6
                        },
                        {
                            "text":  "jelly",
                            "points":  4
                        },
                        {
                            "text":  "pillows",
                            "points":  4
                        },
                        {
                            "text":  "rocks",
                            "points":  4
                        },
                        {
                            "text":  "dough/play-doh",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120166,
        "question":  "Name an animal that would never be the name of a sports car.",
        "answers":  [
                        {
                            "text":  "sloth",
                            "points":  17
                        },
                        {
                            "text":  "turtle/tortoise",
                            "points":  13
                        },
                        {
                            "text":  "snail",
                            "points":  7
                        },
                        {
                            "text":  "elephant",
                            "points":  6
                        },
                        {
                            "text":  "mouse/rat",
                            "points":  5
                        },
                        {
                            "text":  "dog",
                            "points":  5
                        },
                        {
                            "text":  "skunk",
                            "points":  4
                        },
                        {
                            "text":  "opossum",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120167,
        "question":  "Name something you do right before you step onto the bathroom scale.",
        "answers":  [
                        {
                            "text":  "strip down",
                            "points":  46
                        },
                        {
                            "text":  "pee/bomb the bowl",
                            "points":  27
                        },
                        {
                            "text":  "pray",
                            "points":  11
                        },
                        {
                            "text":  "deep breath/sigh",
                            "points":  7
                        },
                        {
                            "text":  "close eyes",
                            "points":  4
                        },
                        {
                            "text":  "empty pockets",
                            "points":  3
                        },
                        {
                            "text":  "suck in gut/posture",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120168,
        "question":  "We asked 100 women... Tell me the worst person to accidentally find your vibrator.",
        "answers":  [
                        {
                            "text":  "mom & dad",
                            "points":  45
                        },
                        {
                            "text":  "kid/grandkid",
                            "points":  35
                        },
                        {
                            "text":  "in-laws",
                            "points":  6
                        },
                        {
                            "text":  "clergy",
                            "points":  5
                        },
                        {
                            "text":  "spouse/mate",
                            "points":  4
                        },
                        {
                            "text":  "brother",
                            "points":  3
                        },
                        {
                            "text":  "grandparents",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120169,
        "question":  "Name a part of your body you'd be shocked your doctor got his finger stuck in.",
        "answers":  [
                        {
                            "text":  "ear",
                            "points":  41
                        },
                        {
                            "text":  "butt/rusty bagel",
                            "points":  35
                        },
                        {
                            "text":  "snout/nose",
                            "points":  12
                        },
                        {
                            "text":  "va-jay/coochella",
                            "points":  4
                        },
                        {
                            "text":  "mouth",
                            "points":  3
                        },
                        {
                            "text":  "cavernous navel",
                            "points":  3
                        },
                        {
                            "text":  "jungly armpit",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120170,
        "question":  "If a man dared, he might ask his wife to change what specific thing about her appearance?",
        "answers":  [
                        {
                            "text":  "hair",
                            "points":  36
                        },
                        {
                            "text":  "weight",
                            "points":  31
                        },
                        {
                            "text":  "tiny coconuts",
                            "points":  18
                        },
                        {
                            "text":  "garb/granny panties",
                            "points":  5
                        },
                        {
                            "text":  "clown makeup",
                            "points":  5
                        },
                        {
                            "text":  "pancake booty",
                            "points":  3
                        },
                        {
                            "text":  "lumpy nose",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120171,
        "question":  "We asked 100 single men... Name something you'd be surprised a date pulled out of her bra.",
        "answers":  [
                        {
                            "text":  "stuffing/socks",
                            "points":  50
                        },
                        {
                            "text":  "$$$/dollar bills",
                            "points":  23
                        },
                        {
                            "text":  "rubbers",
                            "points":  9
                        },
                        {
                            "text":  "lipstick",
                            "points":  6
                        },
                        {
                            "text":  "weapon",
                            "points":  5
                        },
                        {
                            "text":  "food/warm cheese",
                            "points":  4
                        },
                        {
                            "text":  "ferret/animal",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120172,
        "question":  "Name something about Mr. Peanut that Mrs. Peanut says is sexy.",
        "answers":  [
                        {
                            "text":  "his bod/nuts",
                            "points":  46
                        },
                        {
                            "text":  "erotic monocle",
                            "points":  21
                        },
                        {
                            "text":  "that dishy hat",
                            "points":  13
                        },
                        {
                            "text":  "stylin' cane",
                            "points":  7
                        },
                        {
                            "text":  "\"salty\"/taste",
                            "points":  5
                        },
                        {
                            "text":  "hot face/lips",
                            "points":  5
                        },
                        {
                            "text":  "his golden tan",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120173,
        "question":  "Name something a caveman might throw at a dinosaur that's chasing him.",
        "answers":  [
                        {
                            "text":  "rock",
                            "points":  46
                        },
                        {
                            "text":  "bone",
                            "points":  16
                        },
                        {
                            "text":  "club/stick",
                            "points":  16
                        },
                        {
                            "text":  "cave bud/the mrs.",
                            "points":  8
                        },
                        {
                            "text":  "spear",
                            "points":  8
                        },
                        {
                            "text":  "poop",
                            "points":  3
                        },
                        {
                            "text":  "raw meat",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120174,
        "question":  "Fill in the blank: Sure, it's hell, but at least every party you go to there has ______.",
        "answers":  [
                        {
                            "text":  "booze/fireball",
                            "points":  39
                        },
                        {
                            "text":  "bonfire",
                            "points":  20
                        },
                        {
                            "text":  "food/tabasco",
                            "points":  18
                        },
                        {
                            "text":  "people/my granny",
                            "points":  16
                        },
                        {
                            "text":  "drugs, bro!",
                            "points":  2
                        },
                        {
                            "text":  "pool/hot tub",
                            "points":  2
                        },
                        {
                            "text":  "music/ozzy",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120175,
        "question":  "We asked 100 men... If you were wearing women's clothes, you'd have the hardest time putting on what?",
        "answers":  [
                        {
                            "text":  "bra",
                            "points":  38
                        },
                        {
                            "text":  "high heels",
                            "points":  19
                        },
                        {
                            "text":  "panties/xxs thong",
                            "points":  17
                        },
                        {
                            "text":  "nylons/hose",
                            "points":  13
                        },
                        {
                            "text":  "girdle/corset",
                            "points":  4
                        },
                        {
                            "text":  "dress",
                            "points":  4
                        },
                        {
                            "text":  "skinny jeans",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120176,
        "question":  "We asked 100 men... Other than food, what do you like to put in your mouth?",
        "answers":  [
                        {
                            "text":  "beer/beverage",
                            "points":  31
                        },
                        {
                            "text":  "cig/cigar",
                            "points":  15
                        },
                        {
                            "text":  "mate",
                            "points":  15
                        },
                        {
                            "text":  "toothpick",
                            "points":  12
                        },
                        {
                            "text":  "toothbrush",
                            "points":  10
                        },
                        {
                            "text":  "gum",
                            "points":  10
                        },
                        {
                            "text":  "my fingers",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  120177,
        "question":  "Name something Snow White and Vanna White have in common.",
        "answers":  [
                        {
                            "text":  "last name",
                            "points":  60
                        },
                        {
                            "text":  "total hotties",
                            "points":  17
                        },
                        {
                            "text":  "they're white",
                            "points":  7
                        },
                        {
                            "text":  "both are women",
                            "points":  6
                        },
                        {
                            "text":  "men love them",
                            "points":  3
                        },
                        {
                            "text":  "stunning dresses",
                            "points":  3
                        },
                        {
                            "text":  "on tv/film",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120178,
        "question":  "Name something you just love to put on your body.",
        "answers":  [
                        {
                            "text":  "lotion/oil",
                            "points":  59
                        },
                        {
                            "text":  "clothes/silk",
                            "points":  16
                        },
                        {
                            "text":  "cologne",
                            "points":  11
                        },
                        {
                            "text":  "my pookie/a babe",
                            "points":  4
                        },
                        {
                            "text":  "soap",
                            "points":  4
                        },
                        {
                            "text":  "water",
                            "points":  2
                        },
                        {
                            "text":  "tattoos",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120179,
        "question":  "A vampire actor demands to have what in his dressing room?",
        "answers":  [
                        {
                            "text":  "blood/victims",
                            "points":  51
                        },
                        {
                            "text":  "coffin",
                            "points":  22
                        },
                        {
                            "text":  "clothes/cape",
                            "points":  8
                        },
                        {
                            "text":  "extra fangs",
                            "points":  6
                        },
                        {
                            "text":  "darkness",
                            "points":  6
                        },
                        {
                            "text":  "drinks/red wine",
                            "points":  3
                        },
                        {
                            "text":  "food/blood orange",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120180,
        "question":  "We asked 100 married people... Name something that has doubled in size since you were married.",
        "answers":  [
                        {
                            "text":  "me/my mate",
                            "points":  49
                        },
                        {
                            "text":  "expenses/debt",
                            "points":  18
                        },
                        {
                            "text":  "bank acct.",
                            "points":  14
                        },
                        {
                            "text":  "problems",
                            "points":  5
                        },
                        {
                            "text":  "our house",
                            "points":  4
                        },
                        {
                            "text":  "my bed",
                            "points":  4
                        },
                        {
                            "text":  "family members",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120181,
        "question":  "Steve Harvey said, \"My Aunt Agnes is so ungrateful, I gave her my Emmy Award and she said, 'I wish it was'\" what?",
        "answers":  [
                        {
                            "text":  "cash",
                            "points":  46
                        },
                        {
                            "text":  "an oscar/better award",
                            "points":  18
                        },
                        {
                            "text":  "worth more",
                            "points":  16
                        },
                        {
                            "text":  "food/candy",
                            "points":  7
                        },
                        {
                            "text":  "bigger",
                            "points":  6
                        },
                        {
                            "text":  "mine",
                            "points":  3
                        },
                        {
                            "text":  "keys to a house",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120182,
        "question":  "When a girl meets her boyfriend's parents, what would she be wearing that makes dad smile and mom frown?",
        "answers":  [
                        {
                            "text":  "miniskirt/dress",
                            "points":  45
                        },
                        {
                            "text":  "sexy/low-cut top",
                            "points":  33
                        },
                        {
                            "text":  "visible lingerie",
                            "points":  5
                        },
                        {
                            "text":  "tight pants",
                            "points":  5
                        },
                        {
                            "text":  "short shorts",
                            "points":  4
                        },
                        {
                            "text":  "sports team logo",
                            "points":  3
                        },
                        {
                            "text":  "bikini",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120183,
        "question":  "We asked 100 married men... Name something you've tried to get your wife to wear in the bedroom.",
        "answers":  [
                        {
                            "text":  "lingerie/edible",
                            "points":  44
                        },
                        {
                            "text":  "high heels",
                            "points":  18
                        },
                        {
                            "text":  "nothing!",
                            "points":  13
                        },
                        {
                            "text":  "handcuffs",
                            "points":  12
                        },
                        {
                            "text":  "wig/costume",
                            "points":  6
                        },
                        {
                            "text":  "vibrator",
                            "points":  3
                        },
                        {
                            "text":  "leather",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120184,
        "question":  "Name one thing a mortician might do if a body is too big for the coffin.",
        "answers":  [
                        {
                            "text":  "slice & dice 'em",
                            "points":  39
                        },
                        {
                            "text":  "new coffin",
                            "points":  23
                        },
                        {
                            "text":  "cram/fold legs",
                            "points":  20
                        },
                        {
                            "text":  "break bones",
                            "points":  7
                        },
                        {
                            "text":  "cremate 'em",
                            "points":  5
                        },
                        {
                            "text":  "remove lining",
                            "points":  2
                        },
                        {
                            "text":  "turn on their side",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120185,
        "question":  "You might start having second thoughts about going on a cruise if they told you to bring your own what?",
        "answers":  [
                        {
                            "text":  "life preserver",
                            "points":  38
                        },
                        {
                            "text":  "food",
                            "points":  24
                        },
                        {
                            "text":  "toilet paper",
                            "points":  11
                        },
                        {
                            "text":  "lifeboat/oar",
                            "points":  11
                        },
                        {
                            "text":  "barf bag",
                            "points":  6
                        },
                        {
                            "text":  "bedding",
                            "points":  5
                        },
                        {
                            "text":  "booze",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120186,
        "question":  "We asked 100 married women... You find out your husband cheated on Valentine's Day. What do you do with the gift you bought him?",
        "answers":  [
                        {
                            "text":  "return it",
                            "points":  33
                        },
                        {
                            "text":  "throw it away",
                            "points":  29
                        },
                        {
                            "text":  "hit him with it",
                            "points":  15
                        },
                        {
                            "text":  "keep for me",
                            "points":  8
                        },
                        {
                            "text":  "burn/destroy it",
                            "points":  7
                        },
                        {
                            "text":  "sell it",
                            "points":  4
                        },
                        {
                            "text":  "give to my lover",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120187,
        "question":  "We asked 100 women... You'd be hopping mad if your man posted a photo online of you wearing what?",
        "answers":  [
                        {
                            "text":  "lingerie",
                            "points":  33
                        },
                        {
                            "text":  "nada",
                            "points":  26
                        },
                        {
                            "text":  "frumpy pj's/robe",
                            "points":  23
                        },
                        {
                            "text":  "bikini",
                            "points":  7
                        },
                        {
                            "text":  "sweats",
                            "points":  5
                        },
                        {
                            "text":  "handcuffs",
                            "points":  2
                        },
                        {
                            "text":  "a towel",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120188,
        "question":  "Name something you'd have to get used to if you were a bee.",
        "answers":  [
                        {
                            "text":  "flying",
                            "points":  31
                        },
                        {
                            "text":  "dying/after sting",
                            "points":  16
                        },
                        {
                            "text":  "pollinating",
                            "points":  15
                        },
                        {
                            "text":  "makin' honey",
                            "points":  12
                        },
                        {
                            "text":  "1000 roomies/in hive",
                            "points":  12
                        },
                        {
                            "text":  "buzzing",
                            "points":  10
                        },
                        {
                            "text":  "outdoors",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120189,
        "question":  "We asked 100 men... Name something you know about British people.",
        "answers":  [
                        {
                            "text":  "yummy accent!",
                            "points":  28
                        },
                        {
                            "text":  "afternoon tea",
                            "points":  22
                        },
                        {
                            "text":  "fish & chips/food",
                            "points":  22
                        },
                        {
                            "text":  "very polite",
                            "points":  12
                        },
                        {
                            "text":  "bad teeth",
                            "points":  9
                        },
                        {
                            "text":  "funny!",
                            "points":  3
                        },
                        {
                            "text":  "speak english",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120190,
        "question":  "Name something that might be checkered.",
        "answers":  [
                        {
                            "text":  "your past",
                            "points":  23
                        },
                        {
                            "text":  "shirt/clothes",
                            "points":  22
                        },
                        {
                            "text":  "tablecloth",
                            "points":  20
                        },
                        {
                            "text":  "flag",
                            "points":  18
                        },
                        {
                            "text":  "game board",
                            "points":  10
                        },
                        {
                            "text":  "floor",
                            "points":  3
                        },
                        {
                            "text":  "blanket",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120191,
        "question":  "Name something specific a man might do if his female blind date had a mustache like Steve Harvey's.",
        "answers":  [
                        {
                            "text":  "bolt!",
                            "points":  74
                        },
                        {
                            "text":  "laugh",
                            "points":  10
                        },
                        {
                            "text":  "scream/cry",
                            "points":  4
                        },
                        {
                            "text":  "shave/give nair",
                            "points":  3
                        },
                        {
                            "text":  "caress it",
                            "points":  2
                        },
                        {
                            "text":  "get turned on",
                            "points":  2
                        },
                        {
                            "text":  "share tips/stache oil",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120192,
        "question":  "At the mermaid beauty pageant, contestants are judged on their what?",
        "answers":  [
                        {
                            "text":  "tails/scales/fins",
                            "points":  72
                        },
                        {
                            "text":  "shell bikini top",
                            "points":  6
                        },
                        {
                            "text":  "hair/style",
                            "points":  5
                        },
                        {
                            "text":  "boobies",
                            "points":  5
                        },
                        {
                            "text":  "face/lips",
                            "points":  4
                        },
                        {
                            "text":  "talent/tail tricks",
                            "points":  3
                        },
                        {
                            "text":  "personality",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120193,
        "question":  "Name a place a single woman goes that a mom with kids wishes she could go.",
        "answers":  [
                        {
                            "text":  "bar/nightclub",
                            "points":  69
                        },
                        {
                            "text":  "vacay/cruise",
                            "points":  10
                        },
                        {
                            "text":  "strip joint",
                            "points":  4
                        },
                        {
                            "text":  "spa",
                            "points":  4
                        },
                        {
                            "text":  "bathroom alone",
                            "points":  4
                        },
                        {
                            "text":  "theater/movies",
                            "points":  3
                        },
                        {
                            "text":  "nice restaurant",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120194,
        "question":  "Name something you'd buy for protection if Count Dracula moved in next door.",
        "answers":  [
                        {
                            "text":  "garlic",
                            "points":  62
                        },
                        {
                            "text":  "cross",
                            "points":  16
                        },
                        {
                            "text":  "wooden stake",
                            "points":  7
                        },
                        {
                            "text":  "floodlights",
                            "points":  4
                        },
                        {
                            "text":  "gun",
                            "points":  3
                        },
                        {
                            "text":  "holy water",
                            "points":  3
                        },
                        {
                            "text":  "neck guard",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120195,
        "question":  "Name a place you hope the baby sitting near you doesn't have a loaded diaper.",
        "answers":  [
                        {
                            "text":  "plane",
                            "points":  51
                        },
                        {
                            "text":  "eatery/meal",
                            "points":  17
                        },
                        {
                            "text":  "church",
                            "points":  14
                        },
                        {
                            "text":  "bus/train",
                            "points":  7
                        },
                        {
                            "text":  "dr./hospital",
                            "points":  3
                        },
                        {
                            "text":  "theater",
                            "points":  3
                        },
                        {
                            "text":  "car",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120196,
        "question":  "Name a part of your body that makes a lot of noise.",
        "answers":  [
                        {
                            "text":  "mouth",
                            "points":  47
                        },
                        {
                            "text":  "bean blaster",
                            "points":  26
                        },
                        {
                            "text":  "knees",
                            "points":  9
                        },
                        {
                            "text":  "stomach",
                            "points":  7
                        },
                        {
                            "text":  "nose",
                            "points":  4
                        },
                        {
                            "text":  "armpits",
                            "points":  2
                        },
                        {
                            "text":  "stomping feet",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120197,
        "question":  "Name something on a man's face a woman might avoid when kissing it.",
        "answers":  [
                        {
                            "text":  "beard/stache",
                            "points":  47
                        },
                        {
                            "text":  "big schnoz",
                            "points":  21
                        },
                        {
                            "text":  "explosive zit",
                            "points":  11
                        },
                        {
                            "text":  "sore/herpes",
                            "points":  5
                        },
                        {
                            "text":  "mole",
                            "points":  5
                        },
                        {
                            "text":  "food from yesterday",
                            "points":  4
                        },
                        {
                            "text":  "wart",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120198,
        "question":  "Using one specific word, give me a sound a bird makes.",
        "answers":  [
                        {
                            "text":  "chirp",
                            "points":  46
                        },
                        {
                            "text":  "tweet",
                            "points":  23
                        },
                        {
                            "text":  "caw",
                            "points":  13
                        },
                        {
                            "text":  "coo",
                            "points":  5
                        },
                        {
                            "text":  "peep",
                            "points":  5
                        },
                        {
                            "text":  "bwak",
                            "points":  3
                        },
                        {
                            "text":  "cheep",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120199,
        "question":  "Tell me something your mother is happy she doesn't have to do for you anymore.",
        "answers":  [
                        {
                            "text":  "laundry",
                            "points":  44
                        },
                        {
                            "text":  "diaper/wipe me",
                            "points":  20
                        },
                        {
                            "text":  "cook",
                            "points":  17
                        },
                        {
                            "text":  "clean/my room",
                            "points":  7
                        },
                        {
                            "text":  "bathe me",
                            "points":  4
                        },
                        {
                            "text":  "buy my clothes",
                            "points":  3
                        },
                        {
                            "text":  "comb my hair",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120200,
        "question":  "Name something about a female horse that makes a male horse hot to trot.",
        "answers":  [
                        {
                            "text":  "glossy coat/mane",
                            "points":  43
                        },
                        {
                            "text":  "swishin' tail",
                            "points":  16
                        },
                        {
                            "text":  "scent/in heat",
                            "points":  15
                        },
                        {
                            "text":  "hot bod/booty",
                            "points":  12
                        },
                        {
                            "text":  "those eyes",
                            "points":  4
                        },
                        {
                            "text":  "jump/gait",
                            "points":  4
                        },
                        {
                            "text":  "her neigh",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120201,
        "question":  "Name something that turns a kiss into a great kiss.",
        "answers":  [
                        {
                            "text":  "technique/tongue",
                            "points":  39
                        },
                        {
                            "text":  "love/passion",
                            "points":  39
                        },
                        {
                            "text":  "soft lips",
                            "points":  6
                        },
                        {
                            "text":  "embrace",
                            "points":  5
                        },
                        {
                            "text":  "fresh breath",
                            "points":  3
                        },
                        {
                            "text":  "hot guy/gal",
                            "points":  3
                        },
                        {
                            "text":  "time/20 min.",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120202,
        "question":  "Name something you should probably warn a date about before bringing them home.",
        "answers":  [
                        {
                            "text":  "pet/16 cats",
                            "points":  39
                        },
                        {
                            "text":  "crazy parents",
                            "points":  23
                        },
                        {
                            "text":  "the mess",
                            "points":  13
                        },
                        {
                            "text":  "roommate",
                            "points":  10
                        },
                        {
                            "text":  "married/kids",
                            "points":  6
                        },
                        {
                            "text":  "nosy neighbors",
                            "points":  4
                        },
                        {
                            "text":  "my bad cooking",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120203,
        "question":  "Name something on a park playground that might be fun to make love on.",
        "answers":  [
                        {
                            "text":  "swing",
                            "points":  35
                        },
                        {
                            "text":  "slippery slide",
                            "points":  24
                        },
                        {
                            "text":  "merry-go-round",
                            "points":  15
                        },
                        {
                            "text":  "teeter-totter",
                            "points":  14
                        },
                        {
                            "text":  "monkey bars",
                            "points":  5
                        },
                        {
                            "text":  "sandpit",
                            "points":  2
                        },
                        {
                            "text":  "animal spring rider",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120204,
        "question":  "Fill in the blank: My ______ died and I need a new one.",
        "answers":  [
                        {
                            "text":  "phone",
                            "points":  34
                        },
                        {
                            "text":  "car/battery",
                            "points":  29
                        },
                        {
                            "text":  "fish/pet",
                            "points":  18
                        },
                        {
                            "text":  "computer",
                            "points":  6
                        },
                        {
                            "text":  "spouse",
                            "points":  6
                        },
                        {
                            "text":  "tv/remote",
                            "points":  2
                        },
                        {
                            "text":  "blender",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120205,
        "question":  "We asked 100 women... Fill in the blank: I'd love to be the ______est woman on Earth.",
        "answers":  [
                        {
                            "text":  "hottest",
                            "points":  33
                        },
                        {
                            "text":  "richest",
                            "points":  29
                        },
                        {
                            "text":  "smartest",
                            "points":  12
                        },
                        {
                            "text":  "happiest",
                            "points":  11
                        },
                        {
                            "text":  "nicest",
                            "points":  6
                        },
                        {
                            "text":  "fittest/thinnest",
                            "points":  4
                        },
                        {
                            "text":  "luckiest",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120206,
        "question":  "We asked 100 married men... Name something you might find in bed that could make you think your wife was sleeping with an Elvis impersonator.",
        "answers":  [
                        {
                            "text":  "wig/sideburns",
                            "points":  33
                        },
                        {
                            "text":  "sequins/bling",
                            "points":  27
                        },
                        {
                            "text":  "jumpsuit/outfit",
                            "points":  11
                        },
                        {
                            "text":  "guitar/pick",
                            "points":  10
                        },
                        {
                            "text":  "blue suede shoes",
                            "points":  9
                        },
                        {
                            "text":  "pomade stains",
                            "points":  5
                        },
                        {
                            "text":  "pb & banana",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120207,
        "question":  "Fill in the blank: Adam said to Eve, \"Hey, did you ______ my fig leaf?\"",
        "answers":  [
                        {
                            "text":  "wash/iron/shrink",
                            "points":  31
                        },
                        {
                            "text":  "take/hide",
                            "points":  31
                        },
                        {
                            "text":  "eat",
                            "points":  14
                        },
                        {
                            "text":  "see/find",
                            "points":  8
                        },
                        {
                            "text":  "peek under/take off",
                            "points":  6
                        },
                        {
                            "text":  "wear",
                            "points":  4
                        },
                        {
                            "text":  "rip",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120208,
        "question":  "Fill in the blank: I'd hate for an elephant to ______ me.",
        "answers":  [
                        {
                            "text":  "sit on",
                            "points":  31
                        },
                        {
                            "text":  "trample/step on",
                            "points":  28
                        },
                        {
                            "text":  "attack",
                            "points":  15
                        },
                        {
                            "text":  "pee/poop on",
                            "points":  9
                        },
                        {
                            "text":  "spray",
                            "points":  9
                        },
                        {
                            "text":  "kick",
                            "points":  3
                        },
                        {
                            "text":  "make love to",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120209,
        "question":  "A man would suspect his wife cheated if their son was the spitting image of who?",
        "answers":  [
                        {
                            "text":  "mailman",
                            "points":  31
                        },
                        {
                            "text":  "celeb/steve harvey",
                            "points":  20
                        },
                        {
                            "text":  "neighbor",
                            "points":  13
                        },
                        {
                            "text":  "best bud",
                            "points":  13
                        },
                        {
                            "text":  "boss/coworker",
                            "points":  10
                        },
                        {
                            "text":  "milkman",
                            "points":  8
                        },
                        {
                            "text":  "fitness trainer",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120210,
        "question":  "We asked 100 single women... Tell me a reason you might nickname your date \"Steve Harvey.\"",
        "answers":  [
                        {
                            "text":  "he's funny",
                            "points":  31
                        },
                        {
                            "text":  "bald",
                            "points":  19
                        },
                        {
                            "text":  "lip ticklin' stache",
                            "points":  14
                        },
                        {
                            "text":  "rich",
                            "points":  11
                        },
                        {
                            "text":  "smile/white teeth",
                            "points":  11
                        },
                        {
                            "text":  "high intellect",
                            "points":  9
                        },
                        {
                            "text":  "snazzy suits",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120211,
        "question":  "We asked 100 men... Fill in the blank: Even if they're a doctor, you'd never let your ______ perform your vasectomy.",
        "answers":  [
                        {
                            "text":  "pal/drinking bud",
                            "points":  30
                        },
                        {
                            "text":  "sibling",
                            "points":  23
                        },
                        {
                            "text":  "parent",
                            "points":  20
                        },
                        {
                            "text":  "spouse",
                            "points":  15
                        },
                        {
                            "text":  "dentist",
                            "points":  5
                        },
                        {
                            "text":  "in-law",
                            "points":  2
                        },
                        {
                            "text":  "ex",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120212,
        "question":  "If a man gets kicked in his babymaker, what might he have a hard time doing for a while?",
        "answers":  [
                        {
                            "text":  "making love",
                            "points":  25
                        },
                        {
                            "text":  "walk/running",
                            "points":  22
                        },
                        {
                            "text":  "standing up",
                            "points":  17
                        },
                        {
                            "text":  "peeing",
                            "points":  14
                        },
                        {
                            "text":  "breathing",
                            "points":  9
                        },
                        {
                            "text":  "talking",
                            "points":  6
                        },
                        {
                            "text":  "sitting/on bike",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120213,
        "question":  "Name a reason you might marry someone even if you're not physically attracted to them.",
        "answers":  [
                        {
                            "text":  "money honey!",
                            "points":  71
                        },
                        {
                            "text":  "fun personality",
                            "points":  9
                        },
                        {
                            "text":  "love",
                            "points":  5
                        },
                        {
                            "text":  "they're kind",
                            "points":  5
                        },
                        {
                            "text":  "they're famous",
                            "points":  2
                        },
                        {
                            "text":  "they're brainy",
                            "points":  2
                        },
                        {
                            "text":  "dying/need me",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120214,
        "question":  "We asked 100 women... Name a part of your man that eliminates him from being the sexiest man alive.",
        "answers":  [
                        {
                            "text":  "fat gut",
                            "points":  62
                        },
                        {
                            "text":  "face/6 chins",
                            "points":  17
                        },
                        {
                            "text":  "chest/moobs",
                            "points":  6
                        },
                        {
                            "text":  "vile feet",
                            "points":  4
                        },
                        {
                            "text":  "hairy back",
                            "points":  3
                        },
                        {
                            "text":  "chicken legs",
                            "points":  2
                        },
                        {
                            "text":  "flat smelly butt",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120215,
        "question":  "We asked 100 women... Fill in the blank: If your man isn't a good kisser, he'd better be good at ______.",
        "answers":  [
                        {
                            "text":  "makin' me squeal!",
                            "points":  52
                        },
                        {
                            "text":  "cuddles/hugs",
                            "points":  13
                        },
                        {
                            "text":  "conversation",
                            "points":  11
                        },
                        {
                            "text":  "makin' bank",
                            "points":  10
                        },
                        {
                            "text":  "cooking",
                            "points":  4
                        },
                        {
                            "text":  "giving massages",
                            "points":  3
                        },
                        {
                            "text":  "cleaning/chores",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120216,
        "question":  "We asked 100 women... Good or bad, tell me an L word you've called your man.",
        "answers":  [
                        {
                            "text":  "love/lover",
                            "points":  49
                        },
                        {
                            "text":  "lazy",
                            "points":  15
                        },
                        {
                            "text":  "loser",
                            "points":  15
                        },
                        {
                            "text":  "liberal",
                            "points":  8
                        },
                        {
                            "text":  "lucky",
                            "points":  4
                        },
                        {
                            "text":  "lowlife",
                            "points":  3
                        },
                        {
                            "text":  "louse",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120217,
        "question":  "If you were Pinocchio, name a part of your body you'd pay a carpenter to make smaller.",
        "answers":  [
                        {
                            "text":  "snotlocker",
                            "points":  46
                        },
                        {
                            "text":  "fat gut/waist",
                            "points":  29
                        },
                        {
                            "text":  "butt/bean blaster",
                            "points":  9
                        },
                        {
                            "text":  "feet",
                            "points":  4
                        },
                        {
                            "text":  "hips",
                            "points":  3
                        },
                        {
                            "text":  "z-cup boobs",
                            "points":  3
                        },
                        {
                            "text":  "ears",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120218,
        "question":  "Name an outdoor activity that a nudist would tell you is more enjoyable to do in the nude.",
        "answers":  [
                        {
                            "text":  "swimming",
                            "points":  46
                        },
                        {
                            "text":  "sunbathing",
                            "points":  20
                        },
                        {
                            "text":  "run/hiking",
                            "points":  12
                        },
                        {
                            "text":  "volleyball",
                            "points":  8
                        },
                        {
                            "text":  "yard work",
                            "points":  5
                        },
                        {
                            "text":  "tennis",
                            "points":  3
                        },
                        {
                            "text":  "bbq/picnic",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120219,
        "question":  "What might you put on your porch to keep kids away on Halloween?",
        "answers":  [
                        {
                            "text":  "scary decorations",
                            "points":  43
                        },
                        {
                            "text":  "sign/\"go away\"",
                            "points":  20
                        },
                        {
                            "text":  "dog/critters",
                            "points":  19
                        },
                        {
                            "text":  "celery/bad treats",
                            "points":  7
                        },
                        {
                            "text":  "trash",
                            "points":  3
                        },
                        {
                            "text":  "caution tape",
                            "points":  2
                        },
                        {
                            "text":  "smeared poop",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120220,
        "question":  "Name something a parrot might say that would make you think his last owner was a police officer.",
        "answers":  [
                        {
                            "text":  "freeze/stop!",
                            "points":  42
                        },
                        {
                            "text":  "hands up",
                            "points":  32
                        },
                        {
                            "text":  "under arrest",
                            "points":  7
                        },
                        {
                            "text":  "license & reg.",
                            "points":  5
                        },
                        {
                            "text":  "...remain silent",
                            "points":  4
                        },
                        {
                            "text":  "book 'em!",
                            "points":  3
                        },
                        {
                            "text":  "on ground/wall",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120221,
        "question":  "We asked 100 men... Name a way you like your weather and your women.",
        "answers":  [
                        {
                            "text":  "hot!",
                            "points":  36
                        },
                        {
                            "text":  "warm",
                            "points":  25
                        },
                        {
                            "text":  "beautiful",
                            "points":  11
                        },
                        {
                            "text":  "damp",
                            "points":  10
                        },
                        {
                            "text":  "bright",
                            "points":  7
                        },
                        {
                            "text":  "steamy",
                            "points":  4
                        },
                        {
                            "text":  "cold/frigid",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120222,
        "question":  "We asked 100 married men... Give me an H word that describes your wife.",
        "answers":  [
                        {
                            "text":  "hot",
                            "points":  36
                        },
                        {
                            "text":  "happy",
                            "points":  20
                        },
                        {
                            "text":  "helpful",
                            "points":  15
                        },
                        {
                            "text":  "hardworking",
                            "points":  12
                        },
                        {
                            "text":  "heavy",
                            "points":  6
                        },
                        {
                            "text":  "hostile",
                            "points":  4
                        },
                        {
                            "text":  "horny",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120223,
        "question":  "We asked 100 divorced women... Which animal enclosure at the zoo would you like to put your ex-husband in?",
        "answers":  [
                        {
                            "text":  "gorilla/monkey",
                            "points":  35
                        },
                        {
                            "text":  "lion",
                            "points":  16
                        },
                        {
                            "text":  "tiger",
                            "points":  14
                        },
                        {
                            "text":  "snake",
                            "points":  13
                        },
                        {
                            "text":  "cheetah",
                            "points":  8
                        },
                        {
                            "text":  "bear",
                            "points":  6
                        },
                        {
                            "text":  "wolf",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120224,
        "question":  "You're in a public bathroom and you discover too late that there's no toilet paper. What do you do?",
        "answers":  [
                        {
                            "text":  "ask/yell",
                            "points":  33
                        },
                        {
                            "text":  "towel/kleenex",
                            "points":  25
                        },
                        {
                            "text":  "shake 'n dry",
                            "points":  24
                        },
                        {
                            "text":  "use undies/clothes",
                            "points":  4
                        },
                        {
                            "text":  "use seat cover",
                            "points":  4
                        },
                        {
                            "text":  "cry/panic",
                            "points":  3
                        },
                        {
                            "text":  "waddle to next stall",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120225,
        "question":  "Name something a man might do if he got an invitation to his ex-wife's wedding.",
        "answers":  [
                        {
                            "text":  "no thanks!",
                            "points":  31
                        },
                        {
                            "text":  "go, with a hottie",
                            "points":  21
                        },
                        {
                            "text":  "laugh",
                            "points":  16
                        },
                        {
                            "text":  "rip up/burn it",
                            "points":  15
                        },
                        {
                            "text":  "rejoice/no alimony!",
                            "points":  8
                        },
                        {
                            "text":  "get drunk",
                            "points":  3
                        },
                        {
                            "text":  "cry",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120226,
        "question":  "We asked 100 married men... Once upon a time, a long, long time ago, you made love where?",
        "answers":  [
                        {
                            "text":  "beach",
                            "points":  30
                        },
                        {
                            "text":  "car",
                            "points":  28
                        },
                        {
                            "text":  "work",
                            "points":  10
                        },
                        {
                            "text":  "shower",
                            "points":  9
                        },
                        {
                            "text":  "park",
                            "points":  8
                        },
                        {
                            "text":  "locker room",
                            "points":  7
                        },
                        {
                            "text":  "home/bed",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120227,
        "question":  "We asked 100 men... Your best buddy confesses he had a sexy dream about your mate. What do you do?",
        "answers":  [
                        {
                            "text":  "mad/end friendship",
                            "points":  30
                        },
                        {
                            "text":  "laugh/joke",
                            "points":  17
                        },
                        {
                            "text":  "deck him",
                            "points":  17
                        },
                        {
                            "text":  "tell bud's wife",
                            "points":  13
                        },
                        {
                            "text":  "ask details",
                            "points":  10
                        },
                        {
                            "text":  "ignore it",
                            "points":  6
                        },
                        {
                            "text":  "turned on/wife swap",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120228,
        "question":  "A mother knows it's time to stop breastfeeding when her child does what?",
        "answers":  [
                        {
                            "text":  "bites",
                            "points":  63
                        },
                        {
                            "text":  "uses cup",
                            "points":  8
                        },
                        {
                            "text":  "talks",
                            "points":  7
                        },
                        {
                            "text":  "stops/pulls away",
                            "points":  6
                        },
                        {
                            "text":  "starts school",
                            "points":  5
                        },
                        {
                            "text":  "unbuttons her top",
                            "points":  3
                        },
                        {
                            "text":  "walks",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120229,
        "question":  "Name something grandma shakes on the dance floor when her song comes on.",
        "answers":  [
                        {
                            "text":  "buns/prosthetic hip",
                            "points":  61
                        },
                        {
                            "text":  "arms/jazz hands",
                            "points":  10
                        },
                        {
                            "text":  "cane",
                            "points":  9
                        },
                        {
                            "text":  "head/hair",
                            "points":  7
                        },
                        {
                            "text":  "glow sticks",
                            "points":  3
                        },
                        {
                            "text":  "legs/feet",
                            "points":  3
                        },
                        {
                            "text":  "floor-length boobs",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120230,
        "question":  "Susan divorced her husband after seeing him French-kissing who in their wedding video?",
        "answers":  [
                        {
                            "text":  "bridesmaid/bff",
                            "points":  50
                        },
                        {
                            "text":  "her sister",
                            "points":  28
                        },
                        {
                            "text":  "best man",
                            "points":  5
                        },
                        {
                            "text":  "her mom",
                            "points":  5
                        },
                        {
                            "text":  "his ex",
                            "points":  3
                        },
                        {
                            "text":  "his mom/stepmom",
                            "points":  2
                        },
                        {
                            "text":  "the dog",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120231,
        "question":  "She's living with seven dwarfs, so name something Snow White probably buys in bulk.",
        "answers":  [
                        {
                            "text":  "t.p./tissues",
                            "points":  50
                        },
                        {
                            "text":  "milk/food",
                            "points":  17
                        },
                        {
                            "text":  "clothes/dwarf hats",
                            "points":  13
                        },
                        {
                            "text":  "condoms",
                            "points":  5
                        },
                        {
                            "text":  "bedding",
                            "points":  4
                        },
                        {
                            "text":  "step stools",
                            "points":  3
                        },
                        {
                            "text":  "soap/shampoo",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120232,
        "question":  "Name something people keep on their desk that can double as a murder weapon.",
        "answers":  [
                        {
                            "text":  "letter opener",
                            "points":  47
                        },
                        {
                            "text":  "paperweight",
                            "points":  18
                        },
                        {
                            "text":  "scissors",
                            "points":  11
                        },
                        {
                            "text":  "stapler",
                            "points":  9
                        },
                        {
                            "text":  "pen/pencil",
                            "points":  6
                        },
                        {
                            "text":  "lamp",
                            "points":  2
                        },
                        {
                            "text":  "knife",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120233,
        "question":  "Name something Mickey Mouse has that Minnie Mouse should get half of if they break up.",
        "answers":  [
                        {
                            "text":  "money/stock",
                            "points":  42
                        },
                        {
                            "text":  "disney/world",
                            "points":  21
                        },
                        {
                            "text":  "cheese",
                            "points":  14
                        },
                        {
                            "text":  "mouse house",
                            "points":  10
                        },
                        {
                            "text":  "ears",
                            "points":  4
                        },
                        {
                            "text":  "custody of pluto",
                            "points":  2
                        },
                        {
                            "text":  "mouse car",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120234,
        "question":  "We asked 100 married women... What might you do if your husband bought an inflatable love doll?",
        "answers":  [
                        {
                            "text":  "pop/destroy",
                            "points":  37
                        },
                        {
                            "text":  "laugh",
                            "points":  16
                        },
                        {
                            "text":  "bye!/wish 'em well",
                            "points":  16
                        },
                        {
                            "text":  "toss it",
                            "points":  12
                        },
                        {
                            "text":  "kick outta bed",
                            "points":  8
                        },
                        {
                            "text":  "scream/mad",
                            "points":  4
                        },
                        {
                            "text":  "ask why",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120235,
        "question":  "Name something a caveman did in his cave when it was raining outside.",
        "answers":  [
                        {
                            "text":  "cave art",
                            "points":  29
                        },
                        {
                            "text":  "sleep",
                            "points":  23
                        },
                        {
                            "text":  "cozy fire",
                            "points":  23
                        },
                        {
                            "text":  "cook/eat",
                            "points":  10
                        },
                        {
                            "text":  "fun w/ cave babe",
                            "points":  5
                        },
                        {
                            "text":  "pee/doody",
                            "points":  3
                        },
                        {
                            "text":  "sing cave-pop",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120236,
        "question":  "We asked 100 single women... Fill in the blank: I'm looking for a man who doesn't ______ in bed.",
        "answers":  [
                        {
                            "text":  "suck/ignore me",
                            "points":  27
                        },
                        {
                            "text":  "snore",
                            "points":  22
                        },
                        {
                            "text":  "fart/dutch oven",
                            "points":  21
                        },
                        {
                            "text":  "eat",
                            "points":  8
                        },
                        {
                            "text":  "pee",
                            "points":  6
                        },
                        {
                            "text":  "hog the covers",
                            "points":  6
                        },
                        {
                            "text":  "judge me",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  120237,
        "question":  "Now that Barbie is a senior citizen, what accessory might she come with?",
        "answers":  [
                        {
                            "text":  "pink walker/cane",
                            "points":  76
                        },
                        {
                            "text":  "bedazzled diapers",
                            "points":  6
                        },
                        {
                            "text":  "wheelchair",
                            "points":  4
                        },
                        {
                            "text":  "dentures",
                            "points":  2
                        },
                        {
                            "text":  "life alert",
                            "points":  2
                        },
                        {
                            "text":  "aarp card",
                            "points":  2
                        },
                        {
                            "text":  "bifocals",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120238,
        "question":  "Name a food that pairs well with love.",
        "answers":  [
                        {
                            "text":  "chocolate/candy",
                            "points":  56
                        },
                        {
                            "text":  "strawberries",
                            "points":  21
                        },
                        {
                            "text":  "steak",
                            "points":  5
                        },
                        {
                            "text":  "oysters",
                            "points":  5
                        },
                        {
                            "text":  "lobster",
                            "points":  3
                        },
                        {
                            "text":  "pasta/spaghetti",
                            "points":  2
                        },
                        {
                            "text":  "whipped cream",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120239,
        "question":  "Fill in the blank: I can't ______ straight.",
        "answers":  [
                        {
                            "text":  "think",
                            "points":  55
                        },
                        {
                            "text":  "see",
                            "points":  23
                        },
                        {
                            "text":  "shoot",
                            "points":  5
                        },
                        {
                            "text":  "walk",
                            "points":  5
                        },
                        {
                            "text":  "talk",
                            "points":  2
                        },
                        {
                            "text":  "pee",
                            "points":  2
                        },
                        {
                            "text":  "stand",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120240,
        "question":  "Fill in the blank: A bull might look at a cow and think, \"She has the sexiest ______.\"",
        "answers":  [
                        {
                            "text":  "teats!/udder",
                            "points":  49
                        },
                        {
                            "text":  "twitchin' tail",
                            "points":  12
                        },
                        {
                            "text":  "rump",
                            "points":  11
                        },
                        {
                            "text":  "eyes/face",
                            "points":  9
                        },
                        {
                            "text":  "moo",
                            "points":  5
                        },
                        {
                            "text":  "horns",
                            "points":  5
                        },
                        {
                            "text":  "spots",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120241,
        "question":  "A married woman might say, \"Love at first sight does exist. I fell in love with my husband when I saw his\" what?",
        "answers":  [
                        {
                            "text":  "smile/face",
                            "points":  48
                        },
                        {
                            "text":  "bank account",
                            "points":  22
                        },
                        {
                            "text":  "body/6-pack",
                            "points":  12
                        },
                        {
                            "text":  "car/vw van",
                            "points":  5
                        },
                        {
                            "text":  "personality/humor",
                            "points":  3
                        },
                        {
                            "text":  "mega mansion",
                            "points":  2
                        },
                        {
                            "text":  "heart/kindness",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120242,
        "question":  "If a guy had a single hair left on his bald head, name something he might do to it.",
        "answers":  [
                        {
                            "text":  "pluck/shave off",
                            "points":  48
                        },
                        {
                            "text":  "comb it over",
                            "points":  16
                        },
                        {
                            "text":  "charlie brown curl",
                            "points":  11
                        },
                        {
                            "text":  "trim it",
                            "points":  7
                        },
                        {
                            "text":  "slick it/gel",
                            "points":  6
                        },
                        {
                            "text":  "dye it",
                            "points":  4
                        },
                        {
                            "text":  "glue on/protect it",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120243,
        "question":  "The Kardashians could sell one of their many what if they went broke?",
        "answers":  [
                        {
                            "text":  "houses",
                            "points":  42
                        },
                        {
                            "text":  "cars",
                            "points":  22
                        },
                        {
                            "text":  "designer outfits",
                            "points":  12
                        },
                        {
                            "text":  "jewels",
                            "points":  5
                        },
                        {
                            "text":  "family members",
                            "points":  5
                        },
                        {
                            "text":  "businesses",
                            "points":  5
                        },
                        {
                            "text":  "hair weaves",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120244,
        "question":  "We asked 100 women... What might you do if you ran your fingers through a date's hair and realized it was a toupee?",
        "answers":  [
                        {
                            "text":  "laugh/smile",
                            "points":  40
                        },
                        {
                            "text":  "scream/panic",
                            "points":  22
                        },
                        {
                            "text":  "leave",
                            "points":  13
                        },
                        {
                            "text":  "pull hand away",
                            "points":  6
                        },
                        {
                            "text":  "yank it off",
                            "points":  5
                        },
                        {
                            "text":  "ignore",
                            "points":  4
                        },
                        {
                            "text":  "cringe",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120245,
        "question":  "A boss without boundaries calls you when you're doing what?",
        "answers":  [
                        {
                            "text":  "sleeping",
                            "points":  38
                        },
                        {
                            "text":  "on vacay",
                            "points":  24
                        },
                        {
                            "text":  "pee/poo",
                            "points":  11
                        },
                        {
                            "text":  "eating",
                            "points":  7
                        },
                        {
                            "text":  "bathing",
                            "points":  6
                        },
                        {
                            "text":  "sexy time",
                            "points":  5
                        },
                        {
                            "text":  "at a funeral",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120246,
        "question":  "Name something you'd put in a fanny pack that a nudist might pack in his fanny.",
        "answers":  [
                        {
                            "text":  "sunscreen/lotion",
                            "points":  31
                        },
                        {
                            "text":  "cash/amex",
                            "points":  29
                        },
                        {
                            "text":  "chapstick/gloss",
                            "points":  12
                        },
                        {
                            "text":  "cell phone",
                            "points":  9
                        },
                        {
                            "text":  "tissue",
                            "points":  6
                        },
                        {
                            "text":  "snacks",
                            "points":  4
                        },
                        {
                            "text":  "keys",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120247,
        "question":  "Name something hillbillies might be holding in their engagement photos.",
        "answers":  [
                        {
                            "text":  "moonshine",
                            "points":  28
                        },
                        {
                            "text":  "shotgun. yeehaw!",
                            "points":  26
                        },
                        {
                            "text":  "pitchfork/shovel",
                            "points":  13
                        },
                        {
                            "text":  "fiance/cousin",
                            "points":  12
                        },
                        {
                            "text":  "pig/critter",
                            "points":  10
                        },
                        {
                            "text":  "corn/food",
                            "points":  3
                        },
                        {
                            "text":  "baby/5 kids",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120248,
        "question":  "Name something you might wake up to that can make you think you've been transported to Oz.",
        "answers":  [
                        {
                            "text":  "yellow brick road",
                            "points":  27
                        },
                        {
                            "text":  "dorothy & pals",
                            "points":  19
                        },
                        {
                            "text":  "munchkins",
                            "points":  17
                        },
                        {
                            "text":  "tornado",
                            "points":  14
                        },
                        {
                            "text":  "flying monkeys",
                            "points":  8
                        },
                        {
                            "text":  "witch/green chick",
                            "points":  6
                        },
                        {
                            "text":  "everyone singing",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120249,
        "question":  "Name something of your roommate's that stinks up the house.",
        "answers":  [
                        {
                            "text":  "socks/clothes",
                            "points":  60
                        },
                        {
                            "text":  "food/tuna",
                            "points":  9
                        },
                        {
                            "text":  "their butt/bathroom",
                            "points":  8
                        },
                        {
                            "text":  "b.o./feet",
                            "points":  5
                        },
                        {
                            "text":  "cigs",
                            "points":  4
                        },
                        {
                            "text":  "pets",
                            "points":  4
                        },
                        {
                            "text":  "dank weed",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120250,
        "question":  "When you get to heaven, what do you want to see when you pass through the Pearly Gates?",
        "answers":  [
                        {
                            "text":  "family",
                            "points":  48
                        },
                        {
                            "text":  "pets",
                            "points":  25
                        },
                        {
                            "text":  "god/jesus",
                            "points":  10
                        },
                        {
                            "text":  "friends",
                            "points":  4
                        },
                        {
                            "text":  "celeb/betty white",
                            "points":  2
                        },
                        {
                            "text":  "angels",
                            "points":  2
                        },
                        {
                            "text":  "gold/money, honey!",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120251,
        "question":  "Because it's hell, whenever you go on a blind date there, your blind date always turns out to be who?",
        "answers":  [
                        {
                            "text":  "my crazy ex",
                            "points":  43
                        },
                        {
                            "text":  "satan",
                            "points":  23
                        },
                        {
                            "text":  "politician",
                            "points":  11
                        },
                        {
                            "text":  "my boss",
                            "points":  4
                        },
                        {
                            "text":  "a serial killer",
                            "points":  4
                        },
                        {
                            "text":  "my parent",
                            "points":  4
                        },
                        {
                            "text":  "my spouse/mate",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120252,
        "question":  "Name a reason a man might want his girlfriend to bring her mother along on a date.",
        "answers":  [
                        {
                            "text":  "wants to propose",
                            "points":  42
                        },
                        {
                            "text":  "she'll pay",
                            "points":  34
                        },
                        {
                            "text":  "mom's hot/3-way",
                            "points":  4
                        },
                        {
                            "text":  "to meet/bond",
                            "points":  4
                        },
                        {
                            "text":  "see how boo will age",
                            "points":  3
                        },
                        {
                            "text":  "impress mom",
                            "points":  3
                        },
                        {
                            "text":  "mother's day",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120253,
        "question":  "You'd do anything for your best friend. But you wouldn't do what?",
        "answers":  [
                        {
                            "text":  "crime/time",
                            "points":  41
                        },
                        {
                            "text":  "sleep with/their spouse",
                            "points":  16
                        },
                        {
                            "text":  "lie for 'em",
                            "points":  15
                        },
                        {
                            "text":  "loan 'em money",
                            "points":  9
                        },
                        {
                            "text":  "die/take bullet",
                            "points":  6
                        },
                        {
                            "text":  "wipe their butt",
                            "points":  4
                        },
                        {
                            "text":  "kiss 'em",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120254,
        "question":  "Name a part of you a snake would bite that you couldn't suck out the venom yourself.",
        "answers":  [
                        {
                            "text":  "dump trumpet",
                            "points":  41
                        },
                        {
                            "text":  "back",
                            "points":  15
                        },
                        {
                            "text":  "elbow",
                            "points":  12
                        },
                        {
                            "text":  "foot/toe",
                            "points":  8
                        },
                        {
                            "text":  "privates",
                            "points":  7
                        },
                        {
                            "text":  "leg/calf",
                            "points":  5
                        },
                        {
                            "text":  "neck",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  120255,
        "question":  "We asked 100 married women... Name one thing an ex-boyfriend had that you wish your husband had.",
        "answers":  [
                        {
                            "text":  "money/a job",
                            "points":  39
                        },
                        {
                            "text":  "bedroom skills",
                            "points":  12
                        },
                        {
                            "text":  "nice family",
                            "points":  11
                        },
                        {
                            "text":  "rhythm to dance",
                            "points":  9
                        },
                        {
                            "text":  "good health",
                            "points":  9
                        },
                        {
                            "text":  "hot bod/abs",
                            "points":  7
                        },
                        {
                            "text":  "a personality",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  120256,
        "question":  "We asked 100 dads... Fill in the blank: I wouldn't trade my family for the world, but I might trade them for ______.",
        "answers":  [
                        {
                            "text":  "$$$/lotto win",
                            "points":  37
                        },
                        {
                            "text":  "new car",
                            "points":  27
                        },
                        {
                            "text":  "peace & quiet",
                            "points":  11
                        },
                        {
                            "text":  "island/real estate",
                            "points":  10
                        },
                        {
                            "text":  "nice vacay",
                            "points":  4
                        },
                        {
                            "text":  "a day of golf",
                            "points":  2
                        },
                        {
                            "text":  "a beer",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120257,
        "question":  "We asked 100 married men... Fill in the blank: Between us, I'm getting really tired of my wife's ______.",
        "answers":  [
                        {
                            "text":  "nagging/voice",
                            "points":  32
                        },
                        {
                            "text":  "cooking",
                            "points":  17
                        },
                        {
                            "text":  "attitude",
                            "points":  17
                        },
                        {
                            "text":  "spending",
                            "points":  13
                        },
                        {
                            "text":  "family",
                            "points":  5
                        },
                        {
                            "text":  "snoring",
                            "points":  5
                        },
                        {
                            "text":  "no sex policy",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120258,
        "question":  "Name a place that always has a long bathroom line.",
        "answers":  [
                        {
                            "text":  "sports venue",
                            "points":  28
                        },
                        {
                            "text":  "concert",
                            "points":  27
                        },
                        {
                            "text":  "bar/club",
                            "points":  15
                        },
                        {
                            "text":  "movie",
                            "points":  8
                        },
                        {
                            "text":  "theme park/fair",
                            "points":  6
                        },
                        {
                            "text":  "restaurant",
                            "points":  5
                        },
                        {
                            "text":  "every ladies' room",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120259,
        "question":  "We asked 100 men... I consider myself one of the top five what in the country?",
        "answers":  [
                        {
                            "text":  "boozers",
                            "points":  26
                        },
                        {
                            "text":  "lovers/studs",
                            "points":  23
                        },
                        {
                            "text":  "sportsmen",
                            "points":  14
                        },
                        {
                            "text":  "at my job",
                            "points":  10
                        },
                        {
                            "text":  "dads",
                            "points":  8
                        },
                        {
                            "text":  "talkers",
                            "points":  7
                        },
                        {
                            "text":  "brainiacs",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  120260,
        "question":  "We asked 100 women... You know what really turns me on? When a man buys me a what?",
        "answers":  [
                        {
                            "text":  "rose",
                            "points":  24
                        },
                        {
                            "text":  "ring/jewelry",
                            "points":  23
                        },
                        {
                            "text":  "tasty treat/drink",
                            "points":  23
                        },
                        {
                            "text":  "sexy outfit",
                            "points":  11
                        },
                        {
                            "text":  "car",
                            "points":  5
                        },
                        {
                            "text":  "house",
                            "points":  4
                        },
                        {
                            "text":  "maid",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120261,
        "question":  "Tell me something that Steve Harvey's Aunt Agnes probably keeps in her bra.",
        "answers":  [
                        {
                            "text":  "$$$/wallet",
                            "points":  67
                        },
                        {
                            "text":  "tissue/hanky",
                            "points":  10
                        },
                        {
                            "text":  "food/peanuts",
                            "points":  4
                        },
                        {
                            "text":  "gun/weapon",
                            "points":  4
                        },
                        {
                            "text":  "phone",
                            "points":  3
                        },
                        {
                            "text":  "keys",
                            "points":  2
                        },
                        {
                            "text":  "her epic boobage",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120262,
        "question":  "Name something grandpa says goes too darn fast.",
        "answers":  [
                        {
                            "text":  "time/life",
                            "points":  63
                        },
                        {
                            "text":  "cars",
                            "points":  16
                        },
                        {
                            "text":  "sex/drive",
                            "points":  5
                        },
                        {
                            "text":  "money",
                            "points":  2
                        },
                        {
                            "text":  "planes",
                            "points":  2
                        },
                        {
                            "text":  "closed-captioning",
                            "points":  2
                        },
                        {
                            "text":  "grandma",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120263,
        "question":  "We asked 100 women... Name something a Barbie doll has that you realized years ago you'll never have.",
        "answers":  [
                        {
                            "text":  "hot bod/6\" waist",
                            "points":  59
                        },
                        {
                            "text":  "dreamhouse",
                            "points":  9
                        },
                        {
                            "text":  "silky blond hair",
                            "points":  7
                        },
                        {
                            "text":  "sick threads",
                            "points":  5
                        },
                        {
                            "text":  "glam car",
                            "points":  5
                        },
                        {
                            "text":  "gorgeous face",
                            "points":  4
                        },
                        {
                            "text":  "man like ken",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120264,
        "question":  "Name something a man might do if he saw his wife digging a six-foot-deep hole in the yard.",
        "answers":  [
                        {
                            "text":  "run/leave u.s.",
                            "points":  54
                        },
                        {
                            "text":  "offer to help",
                            "points":  10
                        },
                        {
                            "text":  "ask why",
                            "points":  9
                        },
                        {
                            "text":  "call cops",
                            "points":  6
                        },
                        {
                            "text":  "say sorry/buy gift",
                            "points":  5
                        },
                        {
                            "text":  "put her in it",
                            "points":  5
                        },
                        {
                            "text":  "cancel life insur.",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120265,
        "question":  "Tell me something that once you've done it, you never forget how.",
        "answers":  [
                        {
                            "text":  "ride a bike",
                            "points":  53
                        },
                        {
                            "text":  "do the nasty",
                            "points":  22
                        },
                        {
                            "text":  "drive/stick shift",
                            "points":  5
                        },
                        {
                            "text":  "eat/feed self",
                            "points":  4
                        },
                        {
                            "text":  "walk",
                            "points":  4
                        },
                        {
                            "text":  "kiss/dart my tongue",
                            "points":  2
                        },
                        {
                            "text":  "type",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120266,
        "question":  "Fill in the blank: They nicknamed Bob \"the Grinch\" because his ______ is two sizes too small.",
        "answers":  [
                        {
                            "text":  "heart",
                            "points":  49
                        },
                        {
                            "text":  "shirt/clothes",
                            "points":  23
                        },
                        {
                            "text":  "weenie",
                            "points":  6
                        },
                        {
                            "text":  "left foot",
                            "points":  4
                        },
                        {
                            "text":  "wallet",
                            "points":  4
                        },
                        {
                            "text":  "hand/finger",
                            "points":  3
                        },
                        {
                            "text":  "head",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120267,
        "question":  "Fill in the blank: If you could choose how you die, you'd die ______ing.",
        "answers":  [
                        {
                            "text":  "sleeping",
                            "points":  49
                        },
                        {
                            "text":  "laughing",
                            "points":  17
                        },
                        {
                            "text":  "boinking",
                            "points":  16
                        },
                        {
                            "text":  "boozing",
                            "points":  3
                        },
                        {
                            "text":  "pigging out",
                            "points":  3
                        },
                        {
                            "text":  "singing",
                            "points":  2
                        },
                        {
                            "text":  "climbing mtn.",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120268,
        "question":  "What might a wife ask a deliveryperson to deliver to her cheating spouse?",
        "answers":  [
                        {
                            "text":  "divorce papers",
                            "points":  49
                        },
                        {
                            "text":  "his stuff",
                            "points":  14
                        },
                        {
                            "text":  "poisoned food",
                            "points":  12
                        },
                        {
                            "text":  "box o' poo",
                            "points":  7
                        },
                        {
                            "text":  "pic/of him cheat'g",
                            "points":  4
                        },
                        {
                            "text":  "dead roses",
                            "points":  3
                        },
                        {
                            "text":  "ring",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120269,
        "question":  "Fill in the blank: If there were a Ten Commandments of marriage, one would be \"Thou shall not ______.\"",
        "answers":  [
                        {
                            "text":  "\"do\" others/flirt",
                            "points":  44
                        },
                        {
                            "text":  "nag/argue",
                            "points":  20
                        },
                        {
                            "text":  "lie",
                            "points":  15
                        },
                        {
                            "text":  "leave seat up",
                            "points":  4
                        },
                        {
                            "text":  "be a slob",
                            "points":  4
                        },
                        {
                            "text":  "ignore spouse",
                            "points":  3
                        },
                        {
                            "text":  "waste $",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120270,
        "question":  "Name something a shy guy might take to a nude beach to hold in front of himself.",
        "answers":  [
                        {
                            "text":  "towel",
                            "points":  41
                        },
                        {
                            "text":  "book/mag",
                            "points":  30
                        },
                        {
                            "text":  "hat",
                            "points":  6
                        },
                        {
                            "text":  "umbrella",
                            "points":  5
                        },
                        {
                            "text":  "beach ball",
                            "points":  4
                        },
                        {
                            "text":  "leaf",
                            "points":  3
                        },
                        {
                            "text":  "cup/bottle",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120271,
        "question":  "We asked 100 women... Tarzan is sexy, but why would you never want to marry him?",
        "answers":  [
                        {
                            "text":  "reeks/hygiene",
                            "points":  40
                        },
                        {
                            "text":  "lives in jungle",
                            "points":  27
                        },
                        {
                            "text":  "poor speech/yells",
                            "points":  9
                        },
                        {
                            "text":  "swings in trees",
                            "points":  5
                        },
                        {
                            "text":  "no job/broke",
                            "points":  5
                        },
                        {
                            "text":  "long hair",
                            "points":  3
                        },
                        {
                            "text":  "half-nude/loincloth",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120272,
        "question":  "Women love the male stripper Cowboy Carl because he lets them touch his what?",
        "answers":  [
                        {
                            "text":  "bod/man can",
                            "points":  40
                        },
                        {
                            "text":  "hat",
                            "points":  21
                        },
                        {
                            "text":  "lasso",
                            "points":  10
                        },
                        {
                            "text":  "gun/holster",
                            "points":  8
                        },
                        {
                            "text":  "boots/spurs",
                            "points":  5
                        },
                        {
                            "text":  "horse",
                            "points":  4
                        },
                        {
                            "text":  "chaps",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120273,
        "question":  "Name a reason you might suspect that your new home was once a funeral home.",
        "answers":  [
                        {
                            "text":  "funky smell",
                            "points":  38
                        },
                        {
                            "text":  "ghost/noises",
                            "points":  24
                        },
                        {
                            "text":  "found casket",
                            "points":  13
                        },
                        {
                            "text":  "big oven/ashes",
                            "points":  7
                        },
                        {
                            "text":  "embalming fluid",
                            "points":  4
                        },
                        {
                            "text":  "morgue/fridge",
                            "points":  3
                        },
                        {
                            "text":  "odd floorplan",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120274,
        "question":  "We asked 100 married women... I can count on one hand how many times my husband's given me what?",
        "answers":  [
                        {
                            "text":  "flowers",
                            "points":  32
                        },
                        {
                            "text":  "compliments",
                            "points":  27
                        },
                        {
                            "text":  "jewelry",
                            "points":  16
                        },
                        {
                            "text":  "back/foot rub",
                            "points":  6
                        },
                        {
                            "text":  "half-decent sex",
                            "points":  5
                        },
                        {
                            "text":  "grief...he's the best!",
                            "points":  3
                        },
                        {
                            "text":  "help around house",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120275,
        "question":  "We asked 100 married women... Name a vegetable you might compare your man's nose to.",
        "answers":  [
                        {
                            "text":  "carrot",
                            "points":  31
                        },
                        {
                            "text":  "squash/zucchini",
                            "points":  18
                        },
                        {
                            "text":  "cucumber",
                            "points":  14
                        },
                        {
                            "text":  "eggplant",
                            "points":  11
                        },
                        {
                            "text":  "celery",
                            "points":  8
                        },
                        {
                            "text":  "broccoli",
                            "points":  5
                        },
                        {
                            "text":  "mushroom",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  120276,
        "question":  "We asked 100 married men... What might you do if a sexy single woman pinched your bottom?",
        "answers":  [
                        {
                            "text":  "smile/laugh",
                            "points":  28
                        },
                        {
                            "text":  "blush",
                            "points":  19
                        },
                        {
                            "text":  "enjoy/\"do again!\"",
                            "points":  14
                        },
                        {
                            "text":  "\"stop, woman!\"",
                            "points":  12
                        },
                        {
                            "text":  "pray wife didn't see",
                            "points":  8
                        },
                        {
                            "text":  "pinch her back",
                            "points":  6
                        },
                        {
                            "text":  "say hello",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  120277,
        "question":  "If Steve Harvey were wearing \"Family Feud\" underwear, they might have pictures of little whats on them?",
        "answers":  [
                        {
                            "text":  "xxx's",
                            "points":  27
                        },
                        {
                            "text":  "steves/staches",
                            "points":  22
                        },
                        {
                            "text":  "questions/cards",
                            "points":  12
                        },
                        {
                            "text":  "contestants",
                            "points":  10
                        },
                        {
                            "text":  "answers/boards",
                            "points":  8
                        },
                        {
                            "text":  "dollar signs",
                            "points":  7
                        },
                        {
                            "text":  "buzzers",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  120278,
        "question":  "Name a fruit or vegetable a farmer grows that he might say reminds him of his wife's bottom.",
        "answers":  [
                        {
                            "text":  "peach",
                            "points":  24
                        },
                        {
                            "text":  "melon",
                            "points":  21
                        },
                        {
                            "text":  "apple",
                            "points":  17
                        },
                        {
                            "text":  "pumpkin",
                            "points":  16
                        },
                        {
                            "text":  "tomato",
                            "points":  8
                        },
                        {
                            "text":  "pear",
                            "points":  4
                        },
                        {
                            "text":  "squash",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120279,
        "question":  "Name something it gets harder to do after you're the ripe old age of 40.",
        "answers":  [
                        {
                            "text":  "move/exercise/lift",
                            "points":  56
                        },
                        {
                            "text":  "lose weight",
                            "points":  18
                        },
                        {
                            "text":  "sleep",
                            "points":  5
                        },
                        {
                            "text":  "stay up",
                            "points":  4
                        },
                        {
                            "text":  "make friends",
                            "points":  3
                        },
                        {
                            "text":  "pee/poop",
                            "points":  3
                        },
                        {
                            "text":  "see",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120280,
        "question":  "Name something from the kitchen that lovers might bring into the bedroom.",
        "answers":  [
                        {
                            "text":  "whipped cream",
                            "points":  48
                        },
                        {
                            "text":  "produce",
                            "points":  12
                        },
                        {
                            "text":  "chocolate",
                            "points":  9
                        },
                        {
                            "text":  "crisco/oil",
                            "points":  8
                        },
                        {
                            "text":  "drink/booze",
                            "points":  7
                        },
                        {
                            "text":  "spatula/spoon",
                            "points":  5
                        },
                        {
                            "text":  "ice cream",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120281,
        "question":  "Fill in the blank: That person is as thin as a ______.",
        "answers":  [
                        {
                            "text":  "rail",
                            "points":  39
                        },
                        {
                            "text":  "stick/twig",
                            "points":  18
                        },
                        {
                            "text":  "pole/beanpole",
                            "points":  17
                        },
                        {
                            "text":  "sheet of paper",
                            "points":  7
                        },
                        {
                            "text":  "pencil/pen",
                            "points":  4
                        },
                        {
                            "text":  "toothpick",
                            "points":  4
                        },
                        {
                            "text":  "reed",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120282,
        "question":  "Name something a person running barefoot at the beach would hate to step on.",
        "answers":  [
                        {
                            "text":  "glass",
                            "points":  36
                        },
                        {
                            "text":  "shell",
                            "points":  27
                        },
                        {
                            "text":  "jellyfish",
                            "points":  11
                        },
                        {
                            "text":  "crab",
                            "points":  6
                        },
                        {
                            "text":  "rock",
                            "points":  5
                        },
                        {
                            "text":  "used syringe",
                            "points":  3
                        },
                        {
                            "text":  "sea urchin",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120283,
        "question":  "Most wives are psychic because they know when their husband is doing what?",
        "answers":  [
                        {
                            "text":  "cheating",
                            "points":  36
                        },
                        {
                            "text":  "lying",
                            "points":  25
                        },
                        {
                            "text":  "pooping",
                            "points":  10
                        },
                        {
                            "text":  "eating",
                            "points":  7
                        },
                        {
                            "text":  "boozing/at bar",
                            "points":  6
                        },
                        {
                            "text":  "sleeping",
                            "points":  5
                        },
                        {
                            "text":  "gaming",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120284,
        "question":  "Name something a woman hopes is in her room when she checks into the Heartbreak Hotel.",
        "answers":  [
                        {
                            "text":  "chocolate/food",
                            "points":  28
                        },
                        {
                            "text":  "wine",
                            "points":  26
                        },
                        {
                            "text":  "hot dude",
                            "points":  15
                        },
                        {
                            "text":  "tissues",
                            "points":  8
                        },
                        {
                            "text":  "tv",
                            "points":  6
                        },
                        {
                            "text":  "tub/jacuzzi",
                            "points":  5
                        },
                        {
                            "text":  "vibrating bed",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120285,
        "question":  "Name something a man wears because he thinks it makes him look like a tough guy.",
        "answers":  [
                        {
                            "text":  "leather/pants",
                            "points":  27
                        },
                        {
                            "text":  "tank top",
                            "points":  26
                        },
                        {
                            "text":  "beard",
                            "points":  12
                        },
                        {
                            "text":  "hat/sideways cap",
                            "points":  9
                        },
                        {
                            "text":  "shades",
                            "points":  8
                        },
                        {
                            "text":  "chain/jewelry",
                            "points":  6
                        },
                        {
                            "text":  "boots",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120286,
        "question":  "Fill in the blank: Becky intimidated men because she had a big what?",
        "answers":  [
                        {
                            "text":  "mouth",
                            "points":  27
                        },
                        {
                            "text":  "brain/vocab",
                            "points":  16
                        },
                        {
                            "text":  "biscuit/butt",
                            "points":  15
                        },
                        {
                            "text":  "ego/personality",
                            "points":  13
                        },
                        {
                            "text":  "career/salary",
                            "points":  9
                        },
                        {
                            "text":  "bicep",
                            "points":  6
                        },
                        {
                            "text":  "pair of milkers",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  120287,
        "question":  "When Steve Harvey counts his blessings, name one that he'd be sure to include.",
        "answers":  [
                        {
                            "text":  "bein' a big balla",
                            "points":  21
                        },
                        {
                            "text":  "feud/fame",
                            "points":  20
                        },
                        {
                            "text":  "wife/family",
                            "points":  20
                        },
                        {
                            "text":  "talent",
                            "points":  11
                        },
                        {
                            "text":  "that stache",
                            "points":  10
                        },
                        {
                            "text":  "cute face/smile",
                            "points":  6
                        },
                        {
                            "text":  "pocket squares/garb",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120288,
        "question":  "We asked 100 married women... Bad news: you found your husband's blow-up doll. Worse news: it's dressed to look like who?",
        "answers":  [
                        {
                            "text":  "his ex",
                            "points":  35
                        },
                        {
                            "text":  "my mom",
                            "points":  29
                        },
                        {
                            "text":  "celeb/brad pitt",
                            "points":  10
                        },
                        {
                            "text":  "me",
                            "points":  6
                        },
                        {
                            "text":  "his mother",
                            "points":  4
                        },
                        {
                            "text":  "my bestie",
                            "points":  3
                        },
                        {
                            "text":  "my dad",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120289,
        "question":  "A dentist might pull your tooth. An immature dentist might pull your what?",
        "answers":  [
                        {
                            "text":  "leg",
                            "points":  32
                        },
                        {
                            "text":  "finger",
                            "points":  20
                        },
                        {
                            "text":  "tongue",
                            "points":  20
                        },
                        {
                            "text":  "hair",
                            "points":  6
                        },
                        {
                            "text":  "nose",
                            "points":  6
                        },
                        {
                            "text":  "ear",
                            "points":  3
                        },
                        {
                            "text":  "tonsils",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120290,
        "question":  "Name something you shouldn't do during your court trial.",
        "answers":  [
                        {
                            "text":  "talk/cuss out judge",
                            "points":  29
                        },
                        {
                            "text":  "lie",
                            "points":  24
                        },
                        {
                            "text":  "laugh",
                            "points":  15
                        },
                        {
                            "text":  "sleep/yawn",
                            "points":  11
                        },
                        {
                            "text":  "confess",
                            "points":  7
                        },
                        {
                            "text":  "pick your nose",
                            "points":  2
                        },
                        {
                            "text":  "strip/expose goods",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120291,
        "question":  "Name something a caveman might give his cavewoman for her birthday.",
        "answers":  [
                        {
                            "text":  "shiny rock",
                            "points":  24
                        },
                        {
                            "text":  "new club",
                            "points":  19
                        },
                        {
                            "text":  "fur/pelt dress",
                            "points":  18
                        },
                        {
                            "text":  "food/t-rex pie",
                            "points":  15
                        },
                        {
                            "text":  "bone",
                            "points":  5
                        },
                        {
                            "text":  "pet/mammoth",
                            "points":  5
                        },
                        {
                            "text":  "flower/weeds",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120292,
        "question":  "Name a reason a man might tell his wife that he's not in the mood.",
        "answers":  [
                        {
                            "text":  "tired",
                            "points":  22
                        },
                        {
                            "text":  "sick/headache",
                            "points":  22
                        },
                        {
                            "text":  "game on tv",
                            "points":  15
                        },
                        {
                            "text":  "cheated 10 min. ago",
                            "points":  10
                        },
                        {
                            "text":  "limp/whiskey wang",
                            "points":  8
                        },
                        {
                            "text":  "stress/work",
                            "points":  7
                        },
                        {
                            "text":  "full belly/gassy",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  120293,
        "question":  "Name something Pinocchio has nightmares about someone doing to him.",
        "answers":  [
                        {
                            "text":  "chop'g/his nose",
                            "points":  50
                        },
                        {
                            "text":  "burn'g him",
                            "points":  21
                        },
                        {
                            "text":  "making him lie",
                            "points":  7
                        },
                        {
                            "text":  "pinch/pull'g nose",
                            "points":  4
                        },
                        {
                            "text":  "punching nose",
                            "points":  3
                        },
                        {
                            "text":  "getting fresh",
                            "points":  2
                        },
                        {
                            "text":  "sanding him",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120294,
        "question":  "Name an excuse you give a cop for why you can't go to jail.",
        "answers":  [
                        {
                            "text":  "have kids/preggo",
                            "points":  48
                        },
                        {
                            "text":  "gotta work",
                            "points":  25
                        },
                        {
                            "text":  "i'm innocent!",
                            "points":  4
                        },
                        {
                            "text":  "i'm too pretty",
                            "points":  4
                        },
                        {
                            "text":  "wedding",
                            "points":  3
                        },
                        {
                            "text":  "sick/dying",
                            "points":  3
                        },
                        {
                            "text":  "i'm pee shy",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120295,
        "question":  "Name something in a sporting goods store that a clerk might hit a shoplifter with.",
        "answers":  [
                        {
                            "text":  "a bat",
                            "points":  44
                        },
                        {
                            "text":  "hockey stick",
                            "points":  14
                        },
                        {
                            "text":  "golf club",
                            "points":  12
                        },
                        {
                            "text":  "a racket",
                            "points":  8
                        },
                        {
                            "text":  "oar",
                            "points":  4
                        },
                        {
                            "text":  "ball/bowl'g ball",
                            "points":  4
                        },
                        {
                            "text":  "ski pole",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120296,
        "question":  "At holiday dinners, tell me why you don't want to sit next to grandpa.",
        "answers":  [
                        {
                            "text":  "reeks/cuts cheese",
                            "points":  44
                        },
                        {
                            "text":  "yaps/same stories",
                            "points":  13
                        },
                        {
                            "text":  "messy/spits",
                            "points":  12
                        },
                        {
                            "text":  "he's dead :-(",
                            "points":  5
                        },
                        {
                            "text":  "loud eater",
                            "points":  5
                        },
                        {
                            "text":  "can't hear",
                            "points":  5
                        },
                        {
                            "text":  "burps",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  120297,
        "question":  "Name a food starting with C that you can hand-feed your lover.",
        "answers":  [
                        {
                            "text":  "chocolate/candy",
                            "points":  40
                        },
                        {
                            "text":  "cherries",
                            "points":  18
                        },
                        {
                            "text":  "cake/cheesecake",
                            "points":  10
                        },
                        {
                            "text":  "cookies",
                            "points":  7
                        },
                        {
                            "text":  "carrot",
                            "points":  6
                        },
                        {
                            "text":  "cheese/cottage cheese",
                            "points":  4
                        },
                        {
                            "text":  "chips",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120298,
        "question":  "When a cheating husband is cremated, what might his wife throw in to burn with him?",
        "answers":  [
                        {
                            "text":  "his tramp",
                            "points":  34
                        },
                        {
                            "text":  "wedding ring",
                            "points":  18
                        },
                        {
                            "text":  "pictures",
                            "points":  14
                        },
                        {
                            "text":  "black book/phone",
                            "points":  7
                        },
                        {
                            "text":  "his clothes",
                            "points":  7
                        },
                        {
                            "text":  "marriage license",
                            "points":  6
                        },
                        {
                            "text":  "gasoline",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120299,
        "question":  "A single guy is hitting on girls at the bar on Saturday night. What is a married man doing?",
        "answers":  [
                        {
                            "text":  "tv/law & order",
                            "points":  34
                        },
                        {
                            "text":  "date night w/ wife",
                            "points":  15
                        },
                        {
                            "text":  "sleeping",
                            "points":  14
                        },
                        {
                            "text":  "drinking",
                            "points":  9
                        },
                        {
                            "text":  "the same thing!",
                            "points":  9
                        },
                        {
                            "text":  "envying him",
                            "points":  4
                        },
                        {
                            "text":  "hiding from wife",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120300,
        "question":  "Because it's hell, tell me something about all the beds there that make them hellish.",
        "answers":  [
                        {
                            "text":  "hot/on fire",
                            "points":  31
                        },
                        {
                            "text":  "made of nails",
                            "points":  23
                        },
                        {
                            "text":  "hard as rock",
                            "points":  15
                        },
                        {
                            "text":  "lumpy",
                            "points":  8
                        },
                        {
                            "text":  "bedbugs",
                            "points":  4
                        },
                        {
                            "text":  "bad springs",
                            "points":  4
                        },
                        {
                            "text":  "thin/no mattress",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120301,
        "question":  "Name something a man might ask his wife to tie up.",
        "answers":  [
                        {
                            "text":  "his tie",
                            "points":  27
                        },
                        {
                            "text":  "him! yowza!",
                            "points":  21
                        },
                        {
                            "text":  "shoelaces",
                            "points":  18
                        },
                        {
                            "text":  "trash bag",
                            "points":  9
                        },
                        {
                            "text":  "horse/pet",
                            "points":  6
                        },
                        {
                            "text":  "her hair",
                            "points":  5
                        },
                        {
                            "text":  "her tubes",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120302,
        "question":  "If a stoner ran out of pot and smoked catnip, name something he might do just like a cat.",
        "answers":  [
                        {
                            "text":  "purr",
                            "points":  23
                        },
                        {
                            "text":  "meow",
                            "points":  22
                        },
                        {
                            "text":  "lick/self",
                            "points":  16
                        },
                        {
                            "text":  "roll around",
                            "points":  9
                        },
                        {
                            "text":  "nap/in sun",
                            "points":  8
                        },
                        {
                            "text":  "run/chase stuff",
                            "points":  7
                        },
                        {
                            "text":  "potty/litter box",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120303,
        "question":  "If you were in a rich guy's will, what dangerous activity might you invite him to do with you?",
        "answers":  [
                        {
                            "text":  "skydive",
                            "points":  60
                        },
                        {
                            "text":  "mountain climb",
                            "points":  7
                        },
                        {
                            "text":  "car race",
                            "points":  5
                        },
                        {
                            "text":  "hang glide",
                            "points":  5
                        },
                        {
                            "text":  "hunt/shoot",
                            "points":  5
                        },
                        {
                            "text":  "24-hr. shag-a-thon",
                            "points":  3
                        },
                        {
                            "text":  "shark dive",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120304,
        "question":  "Name something every game show host needs to have.",
        "answers":  [
                        {
                            "text":  "humor/charisma",
                            "points":  49
                        },
                        {
                            "text":  "a mic",
                            "points":  15
                        },
                        {
                            "text":  "sultry voice",
                            "points":  8
                        },
                        {
                            "text":  "foxy sidekick",
                            "points":  5
                        },
                        {
                            "text":  "stylin' threads",
                            "points":  5
                        },
                        {
                            "text":  "great smile",
                            "points":  4
                        },
                        {
                            "text":  "an audience",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120305,
        "question":  "It's a red flag if a man says he has a close relationship with who?",
        "answers":  [
                        {
                            "text":  "his ex",
                            "points":  43
                        },
                        {
                            "text":  "his mother",
                            "points":  26
                        },
                        {
                            "text":  "boss/coworker",
                            "points":  10
                        },
                        {
                            "text":  "a politician",
                            "points":  3
                        },
                        {
                            "text":  "best friend's bae",
                            "points":  2
                        },
                        {
                            "text":  "his sexy bestie",
                            "points":  2
                        },
                        {
                            "text":  "his pet/horse",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120306,
        "question":  "Name something you don't want to find out that grandma does on the weekends with her friends.",
        "answers":  [
                        {
                            "text":  "orgies/sex",
                            "points":  36
                        },
                        {
                            "text":  "gets drunk",
                            "points":  16
                        },
                        {
                            "text":  "male strip joint",
                            "points":  15
                        },
                        {
                            "text":  "nude beach/strips",
                            "points":  7
                        },
                        {
                            "text":  "gambles",
                            "points":  6
                        },
                        {
                            "text":  "trolls for men",
                            "points":  4
                        },
                        {
                            "text":  "drugs/sells 'em",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120307,
        "question":  "Name something a man will do around his wife but not his mother.",
        "answers":  [
                        {
                            "text":  "cuss/yell/argue",
                            "points":  27
                        },
                        {
                            "text":  "be nude/undies",
                            "points":  25
                        },
                        {
                            "text":  "fart",
                            "points":  20
                        },
                        {
                            "text":  "kiss/make love",
                            "points":  7
                        },
                        {
                            "text":  "scratch his goods",
                            "points":  3
                        },
                        {
                            "text":  "burp",
                            "points":  3
                        },
                        {
                            "text":  "get drunk",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120308,
        "question":  "Name something on a dog that you wouldn't want on you.",
        "answers":  [
                        {
                            "text":  "fleas/ticks",
                            "points":  27
                        },
                        {
                            "text":  "tail",
                            "points":  25
                        },
                        {
                            "text":  "fur all over",
                            "points":  17
                        },
                        {
                            "text":  "collar & leash",
                            "points":  7
                        },
                        {
                            "text":  "floppy/pointy ears",
                            "points":  6
                        },
                        {
                            "text":  "exposed booty",
                            "points":  3
                        },
                        {
                            "text":  "hanging tongue",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120309,
        "question":  "Name something a pirate might be doing when he tells his parrot, \"Shut your eyes -- I don't want you to see this.\"",
        "answers":  [
                        {
                            "text":  "pee/pooping",
                            "points":  27
                        },
                        {
                            "text":  "sex ahoy",
                            "points":  23
                        },
                        {
                            "text":  "eat'g/chicken",
                            "points":  14
                        },
                        {
                            "text":  "killing/fight'g",
                            "points":  11
                        },
                        {
                            "text":  "burying treasure",
                            "points":  7
                        },
                        {
                            "text":  "removing eye patch",
                            "points":  3
                        },
                        {
                            "text":  "looting",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120310,
        "question":  "If it had a great coach, name a sport that an octopus might become unbeatable at.",
        "answers":  [
                        {
                            "text":  "baseball",
                            "points":  26
                        },
                        {
                            "text":  "tennis",
                            "points":  25
                        },
                        {
                            "text":  "ping-pong",
                            "points":  12
                        },
                        {
                            "text":  "soccer",
                            "points":  8
                        },
                        {
                            "text":  "swimming",
                            "points":  7
                        },
                        {
                            "text":  "volleyball",
                            "points":  5
                        },
                        {
                            "text":  "football",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  120311,
        "question":  "Name something you pretend to be doing when you don't want to talk to someone.",
        "answers":  [
                        {
                            "text":  "sleeping",
                            "points":  25
                        },
                        {
                            "text":  "reading",
                            "points":  21
                        },
                        {
                            "text":  "on phone/text'g",
                            "points":  19
                        },
                        {
                            "text":  "working",
                            "points":  12
                        },
                        {
                            "text":  "bathroom run",
                            "points":  4
                        },
                        {
                            "text":  "music/audio book",
                            "points":  4
                        },
                        {
                            "text":  "thinking hard",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120312,
        "question":  "We asked 100 women... Which high-paying job has the sexiest men?",
        "answers":  [
                        {
                            "text":  "doctor",
                            "points":  24
                        },
                        {
                            "text":  "actor",
                            "points":  21
                        },
                        {
                            "text":  "lawyer",
                            "points":  18
                        },
                        {
                            "text":  "athlete",
                            "points":  9
                        },
                        {
                            "text":  "firefighter",
                            "points":  8
                        },
                        {
                            "text":  "model",
                            "points":  5
                        },
                        {
                            "text":  "ceo",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120313,
        "question":  "A wife might call herself a lady in waiting because she's always waiting for her husband to do what?",
        "answers":  [
                        {
                            "text":  "clean/chores",
                            "points":  40
                        },
                        {
                            "text":  "home repairs",
                            "points":  15
                        },
                        {
                            "text":  "be nice/compliment",
                            "points":  10
                        },
                        {
                            "text":  "grow up",
                            "points":  7
                        },
                        {
                            "text":  "come home",
                            "points":  5
                        },
                        {
                            "text":  "get ready to go out",
                            "points":  5
                        },
                        {
                            "text":  "finish pooping",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  120314,
        "question":  "Fill in the blank: A party is not a wild party until someone ______s.",
        "answers":  [
                        {
                            "text":  "pukes",
                            "points":  35
                        },
                        {
                            "text":  "gets naked",
                            "points":  18
                        },
                        {
                            "text":  "passes out",
                            "points":  16
                        },
                        {
                            "text":  "breaks stuff",
                            "points":  6
                        },
                        {
                            "text":  "falls",
                            "points":  5
                        },
                        {
                            "text":  "yells",
                            "points":  4
                        },
                        {
                            "text":  "dances/on table",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120315,
        "question":  "At a funeral, name something inappropriate a person might do at their lover's casket.",
        "answers":  [
                        {
                            "text":  "french 'em",
                            "points":  30
                        },
                        {
                            "text":  "fondle/hug 'em",
                            "points":  16
                        },
                        {
                            "text":  "lie in/on it",
                            "points":  15
                        },
                        {
                            "text":  "yell/cuss out",
                            "points":  12
                        },
                        {
                            "text":  "laugh",
                            "points":  6
                        },
                        {
                            "text":  "steal jewelry/hair",
                            "points":  5
                        },
                        {
                            "text":  "take selfie",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120316,
        "question":  "Fill in the blank: If women ran the IRS, men would be taxed every time they ______ed.",
        "answers":  [
                        {
                            "text":  "lied/spoke",
                            "points":  28
                        },
                        {
                            "text":  "farted",
                            "points":  22
                        },
                        {
                            "text":  "cheated",
                            "points":  22
                        },
                        {
                            "text":  "left toilet seat up",
                            "points":  4
                        },
                        {
                            "text":  "pooped/peed",
                            "points":  4
                        },
                        {
                            "text":  "drank",
                            "points":  4
                        },
                        {
                            "text":  "flirted/ogled",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120317,
        "question":  "Name an animal with a really big mouth.",
        "answers":  [
                        {
                            "text":  "hippo",
                            "points":  44
                        },
                        {
                            "text":  "lion",
                            "points":  11
                        },
                        {
                            "text":  "gator/croc",
                            "points":  10
                        },
                        {
                            "text":  "whale",
                            "points":  8
                        },
                        {
                            "text":  "shark",
                            "points":  6
                        },
                        {
                            "text":  "largemouth bass",
                            "points":  4
                        },
                        {
                            "text":  "elephant",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120318,
        "question":  "In hell, when the dentist is taking out your tooth, they use what?",
        "answers":  [
                        {
                            "text":  "pliers",
                            "points":  38
                        },
                        {
                            "text":  "pitchfork",
                            "points":  15
                        },
                        {
                            "text":  "hammer/jackhammer",
                            "points":  12
                        },
                        {
                            "text":  "blow torch/fire",
                            "points":  9
                        },
                        {
                            "text":  "crowbar",
                            "points":  5
                        },
                        {
                            "text":  "saw/chain saw",
                            "points":  4
                        },
                        {
                            "text":  "hot poker",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120319,
        "question":  "Kids avoid the deli owner's house on Halloween because he puts scoops of what in their bag?",
        "answers":  [
                        {
                            "text":  "meat/liverwurst",
                            "points":  33
                        },
                        {
                            "text":  "potato salad",
                            "points":  16
                        },
                        {
                            "text":  "mayo/condiments",
                            "points":  16
                        },
                        {
                            "text":  "tuna",
                            "points":  6
                        },
                        {
                            "text":  "coleslaw",
                            "points":  6
                        },
                        {
                            "text":  "cheese",
                            "points":  5
                        },
                        {
                            "text":  "pasta salad",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120320,
        "question":  "Name something that you did more of than other kids in kindergarten.",
        "answers":  [
                        {
                            "text":  "read/study",
                            "points":  27
                        },
                        {
                            "text":  "nap",
                            "points":  20
                        },
                        {
                            "text":  "cry/scream",
                            "points":  13
                        },
                        {
                            "text":  "color/paint",
                            "points":  9
                        },
                        {
                            "text":  "pee/poo myself",
                            "points":  6
                        },
                        {
                            "text":  "play/run",
                            "points":  6
                        },
                        {
                            "text":  "talk/tattle",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  120321,
        "question":  "You'd be shocked if you got an obscene phone call and the caller ID said it's from your who?",
        "answers":  [
                        {
                            "text":  "mom/dad",
                            "points":  25
                        },
                        {
                            "text":  "boss/coworker",
                            "points":  13
                        },
                        {
                            "text":  "pastor...again",
                            "points":  13
                        },
                        {
                            "text":  "bro/sis",
                            "points":  11
                        },
                        {
                            "text":  "gram/gramps",
                            "points":  10
                        },
                        {
                            "text":  "ex",
                            "points":  9
                        },
                        {
                            "text":  "shrink",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  120322,
        "question":  "The Big Bad Wolf was surprised to discover that Little Red Riding Hood had a really big what?",
        "answers":  [
                        {
                            "text":  "gun/weapon",
                            "points":  24
                        },
                        {
                            "text":  "patootie",
                            "points":  14
                        },
                        {
                            "text":  "nose",
                            "points":  13
                        },
                        {
                            "text":  "mouth/teeth",
                            "points":  12
                        },
                        {
                            "text":  "basket",
                            "points":  10
                        },
                        {
                            "text":  "head/ego",
                            "points":  8
                        },
                        {
                            "text":  "\"man part\"",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  120323,
        "question":  "Name something even a tough guy might admit he's afraid of.",
        "answers":  [
                        {
                            "text":  "spiders/bugs",
                            "points":  39
                        },
                        {
                            "text":  "snakes",
                            "points":  26
                        },
                        {
                            "text":  "death",
                            "points":  6
                        },
                        {
                            "text":  "the dark",
                            "points":  4
                        },
                        {
                            "text":  "ghosts/monsters",
                            "points":  4
                        },
                        {
                            "text":  "his wife",
                            "points":  3
                        },
                        {
                            "text":  "his mom",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120324,
        "question":  "Name something twin cowboys might share.",
        "answers":  [
                        {
                            "text":  "horse/saddle",
                            "points":  39
                        },
                        {
                            "text":  "boots",
                            "points":  14
                        },
                        {
                            "text":  "hat",
                            "points":  12
                        },
                        {
                            "text":  "mom/good genes",
                            "points":  7
                        },
                        {
                            "text":  "lover/cowgirl",
                            "points":  6
                        },
                        {
                            "text":  "lasso",
                            "points":  4
                        },
                        {
                            "text":  "bedroom",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120325,
        "question":  "Fill in the blank: A man never wants to hear his wife say, \"I'm ______.\"",
        "answers":  [
                        {
                            "text":  "leaving",
                            "points":  36
                        },
                        {
                            "text":  "preggo/triplets",
                            "points":  19
                        },
                        {
                            "text":  "too tired",
                            "points":  8
                        },
                        {
                            "text":  "broke/jobless",
                            "points":  8
                        },
                        {
                            "text":  "dying/sick",
                            "points":  5
                        },
                        {
                            "text":  "gay",
                            "points":  5
                        },
                        {
                            "text":  "angry, you scumbag!",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120326,
        "question":  "Name something a waitress might do if Steve Harvey tipped her $500.",
        "answers":  [
                        {
                            "text":  "kiss & hug him",
                            "points":  32
                        },
                        {
                            "text":  "cry/scream",
                            "points":  23
                        },
                        {
                            "text":  "faint",
                            "points":  7
                        },
                        {
                            "text":  "lap dance",
                            "points":  7
                        },
                        {
                            "text":  "\"thanks bruh!\"",
                            "points":  6
                        },
                        {
                            "text":  "brag/post about it",
                            "points":  5
                        },
                        {
                            "text":  "jump for joy",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  120327,
        "question":  "Real men don't use toilet paper. They use what?",
        "answers":  [
                        {
                            "text":  "leaves",
                            "points":  17
                        },
                        {
                            "text":  "their hand",
                            "points":  16
                        },
                        {
                            "text":  "sandpaper",
                            "points":  13
                        },
                        {
                            "text":  "paper towels",
                            "points":  11
                        },
                        {
                            "text":  "bidet/pressure hose",
                            "points":  11
                        },
                        {
                            "text":  "newspaper",
                            "points":  10
                        },
                        {
                            "text":  "wipes",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  120328,
        "question":  "Name the worst place to go looking for love.",
        "answers":  [
                        {
                            "text":  "bar/club",
                            "points":  41
                        },
                        {
                            "text":  "funeral/cemetery",
                            "points":  14
                        },
                        {
                            "text":  "jail/rikers",
                            "points":  13
                        },
                        {
                            "text":  "family reunion",
                            "points":  5
                        },
                        {
                            "text":  "strip joint",
                            "points":  5
                        },
                        {
                            "text":  "church",
                            "points":  3
                        },
                        {
                            "text":  "nursing home",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120329,
        "question":  "Fill in the blank: I always wondered what it would be like to ______ naked.",
        "answers":  [
                        {
                            "text":  "swim/hit beach",
                            "points":  36
                        },
                        {
                            "text":  "run/walk",
                            "points":  12
                        },
                        {
                            "text":  "drive",
                            "points":  10
                        },
                        {
                            "text":  "sleep",
                            "points":  10
                        },
                        {
                            "text":  "dance/twerk",
                            "points":  7
                        },
                        {
                            "text":  "shop/at walmart",
                            "points":  5
                        },
                        {
                            "text":  "cook",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120330,
        "question":  "Name something the Bad Tooth Fairy might leave in exchange for a tooth.",
        "answers":  [
                        {
                            "text":  "candy/sweets",
                            "points":  24
                        },
                        {
                            "text":  "coal",
                            "points":  21
                        },
                        {
                            "text":  "toothbrush/floss",
                            "points":  17
                        },
                        {
                            "text":  "a measly penny",
                            "points":  9
                        },
                        {
                            "text":  "rocks",
                            "points":  5
                        },
                        {
                            "text":  "another tooth",
                            "points":  4
                        },
                        {
                            "text":  "steamy turd",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120331,
        "question":  "Fill in the blank: My nose is ______.",
        "answers":  [
                        {
                            "text":  "running",
                            "points":  25
                        },
                        {
                            "text":  "stuffy",
                            "points":  16
                        },
                        {
                            "text":  "huge/long",
                            "points":  13
                        },
                        {
                            "text":  "cold",
                            "points":  11
                        },
                        {
                            "text":  "cute/perfect",
                            "points":  7
                        },
                        {
                            "text":  "red",
                            "points":  6
                        },
                        {
                            "text":  "itchy",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  120332,
        "question":  "Name a Disney movie that makes adults cry like babies.",
        "answers":  [
                        {
                            "text":  "bambi",
                            "points":  32
                        },
                        {
                            "text":  "the lion king",
                            "points":  20
                        },
                        {
                            "text":  "dumbo",
                            "points":  7
                        },
                        {
                            "text":  "up",
                            "points":  7
                        },
                        {
                            "text":  "toy story",
                            "points":  7
                        },
                        {
                            "text":  "old yeller",
                            "points":  5
                        },
                        {
                            "text":  "the little mermaid",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120333,
        "question":  "We asked 100 women... You might call your mate \"the Gingerbread Man\" because you love nibbling on his what?",
        "answers":  [
                        {
                            "text":  "ears",
                            "points":  28
                        },
                        {
                            "text":  "neck",
                            "points":  22
                        },
                        {
                            "text":  "arm",
                            "points":  10
                        },
                        {
                            "text":  "lips",
                            "points":  6
                        },
                        {
                            "text":  "chest",
                            "points":  6
                        },
                        {
                            "text":  "feet/toes",
                            "points":  6
                        },
                        {
                            "text":  "hands/fingers",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120334,
        "question":  "Name a kind of bug a nudist lives in fear of crawling on his bottom.",
        "answers":  [
                        {
                            "text":  "spider",
                            "points":  27
                        },
                        {
                            "text":  "fire ant",
                            "points":  16
                        },
                        {
                            "text":  "roach",
                            "points":  11
                        },
                        {
                            "text":  "tick",
                            "points":  10
                        },
                        {
                            "text":  "bee/wasp",
                            "points":  8
                        },
                        {
                            "text":  "scorpion",
                            "points":  6
                        },
                        {
                            "text":  "flea",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120335,
        "question":  "Name someone you'd hate to run into while you were out jogging naked through the neighborhood.",
        "answers":  [
                        {
                            "text":  "mom & dad",
                            "points":  23
                        },
                        {
                            "text":  "clergy/pastor peter",
                            "points":  17
                        },
                        {
                            "text":  "the po-po",
                            "points":  13
                        },
                        {
                            "text":  "my boss",
                            "points":  13
                        },
                        {
                            "text":  "my ex",
                            "points":  7
                        },
                        {
                            "text":  "neighbor",
                            "points":  5
                        },
                        {
                            "text":  "in-law",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120336,
        "question":  "Things got wild at the nursing home party when Nurse Linda showed up with what?",
        "answers":  [
                        {
                            "text":  "prune-tinis",
                            "points":  26
                        },
                        {
                            "text":  "drugs/viagra i.v.",
                            "points":  19
                        },
                        {
                            "text":  "stripper",
                            "points":  11
                        },
                        {
                            "text":  "food/tapioca",
                            "points":  9
                        },
                        {
                            "text":  "games/twister",
                            "points":  6
                        },
                        {
                            "text":  "a sexy outfit on",
                            "points":  5
                        },
                        {
                            "text":  "sex toy",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  120337,
        "question":  "Name something that never lasts as long as you want it to.",
        "answers":  [
                        {
                            "text":  "sex/my minute man",
                            "points":  23
                        },
                        {
                            "text":  "good food/drink",
                            "points":  19
                        },
                        {
                            "text":  "money",
                            "points":  10
                        },
                        {
                            "text":  "vacation",
                            "points":  9
                        },
                        {
                            "text":  "the weekend",
                            "points":  8
                        },
                        {
                            "text":  "sleep",
                            "points":  6
                        },
                        {
                            "text":  "love/romance",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  120338,
        "question":  "Name someone you'd be surprised to find out isn't wearing any underwear.",
        "answers":  [
                        {
                            "text":  "my folks",
                            "points":  20
                        },
                        {
                            "text":  "clergy/sister agnes",
                            "points":  14
                        },
                        {
                            "text":  "president",
                            "points":  12
                        },
                        {
                            "text":  "granny/gramps",
                            "points":  11
                        },
                        {
                            "text":  "my boss",
                            "points":  10
                        },
                        {
                            "text":  "my boo",
                            "points":  10
                        },
                        {
                            "text":  "my doc/shrink",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120339,
        "question":  "We asked 100 women... What do you really think is the sexiest part of a man?",
        "answers":  [
                        {
                            "text":  "eyes",
                            "points":  19
                        },
                        {
                            "text":  "smile/lips",
                            "points":  18
                        },
                        {
                            "text":  "buns",
                            "points":  13
                        },
                        {
                            "text":  "biceps/arms",
                            "points":  10
                        },
                        {
                            "text":  "brain",
                            "points":  9
                        },
                        {
                            "text":  "humor/personality",
                            "points":  7
                        },
                        {
                            "text":  "thighs/legs",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  120340,
        "question":  "In a \"Naked Women of Nursing Homes\" calendar, what might Miss July be holding?",
        "answers":  [
                        {
                            "text":  "american flag",
                            "points":  27
                        },
                        {
                            "text":  "firecrackers",
                            "points":  26
                        },
                        {
                            "text":  "walker/cane",
                            "points":  13
                        },
                        {
                            "text":  "food/bomb pop",
                            "points":  4
                        },
                        {
                            "text":  "her teeth",
                            "points":  4
                        },
                        {
                            "text":  "booze",
                            "points":  3
                        },
                        {
                            "text":  "oxygen tank",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120341,
        "question":  "Name an occupation that you might be embarrassed to admit you paid for their service.",
        "answers":  [
                        {
                            "text":  "weekly hooker",
                            "points":  32
                        },
                        {
                            "text":  "housekeeper",
                            "points":  18
                        },
                        {
                            "text":  "doc/plastic surg.",
                            "points":  13
                        },
                        {
                            "text":  "stripper",
                            "points":  6
                        },
                        {
                            "text":  "masseur",
                            "points":  4
                        },
                        {
                            "text":  "dating service",
                            "points":  3
                        },
                        {
                            "text":  "plumber/roto-rooter",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120342,
        "question":  "Name a reason you might have a hot bottom.",
        "answers":  [
                        {
                            "text":  "heated/hot seat",
                            "points":  21
                        },
                        {
                            "text":  "got spanked",
                            "points":  16
                        },
                        {
                            "text":  "sunburn",
                            "points":  16
                        },
                        {
                            "text":  "sat by fire",
                            "points":  10
                        },
                        {
                            "text":  "a heater",
                            "points":  6
                        },
                        {
                            "text":  "raging hemorrhoids",
                            "points":  5
                        },
                        {
                            "text":  "i'm sexy/buff",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  120343,
        "question":  "Name something that you do that your mother wouldn't approve of if she knew you did it.",
        "answers":  [
                        {
                            "text":  "smoke",
                            "points":  38
                        },
                        {
                            "text":  "weed",
                            "points":  11
                        },
                        {
                            "text":  "drink",
                            "points":  7
                        },
                        {
                            "text":  "swear",
                            "points":  7
                        },
                        {
                            "text":  "lie",
                            "points":  5
                        },
                        {
                            "text":  "eat junk",
                            "points":  5
                        },
                        {
                            "text":  "sex",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  120344,
        "question":  "We asked 100 women... Fill in the blank: I desperately want a boyfriend because my ______ is broken.",
        "answers":  [
                        {
                            "text":  "heart",
                            "points":  35
                        },
                        {
                            "text":  "car",
                            "points":  22
                        },
                        {
                            "text":  "vibrator",
                            "points":  6
                        },
                        {
                            "text":  "husband",
                            "points":  5
                        },
                        {
                            "text":  "confidence/psyche",
                            "points":  4
                        },
                        {
                            "text":  "hope/faith",
                            "points":  3
                        },
                        {
                            "text":  "tv",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120345,
        "question":  "Name a big bird that would not fit into the average birdcage.",
        "answers":  [
                        {
                            "text":  "ostrich",
                            "points":  24
                        },
                        {
                            "text":  "eagle",
                            "points":  22
                        },
                        {
                            "text":  "emu",
                            "points":  13
                        },
                        {
                            "text":  "flamingo",
                            "points":  5
                        },
                        {
                            "text":  "pelican",
                            "points":  5
                        },
                        {
                            "text":  "big bird!",
                            "points":  5
                        },
                        {
                            "text":  "hawk",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120346,
        "question":  "Fill in the blank: I want to ______ Steve Harvey.",
        "answers":  [
                        {
                            "text":  "meet/talk to",
                            "points":  32
                        },
                        {
                            "text":  "hug",
                            "points":  19
                        },
                        {
                            "text":  "spank/hit",
                            "points":  6
                        },
                        {
                            "text":  "tongue kiss",
                            "points":  5
                        },
                        {
                            "text":  "be",
                            "points":  4
                        },
                        {
                            "text":  "get $ from/rob",
                            "points":  4
                        },
                        {
                            "text":  "shake hands with",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120347,
        "question":  "Name a food a sword swallower could shove right down their throat.",
        "answers":  [
                        {
                            "text":  "1-ft. wiener/sausage",
                            "points":  23
                        },
                        {
                            "text":  "banana",
                            "points":  21
                        },
                        {
                            "text":  "cucumber/pickle",
                            "points":  11
                        },
                        {
                            "text":  "bread/loaf",
                            "points":  6
                        },
                        {
                            "text":  "fish",
                            "points":  5
                        },
                        {
                            "text":  "shish kebab",
                            "points":  4
                        },
                        {
                            "text":  "chicken",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120348,
        "question":  "Name something old that you love.",
        "answers":  [
                        {
                            "text":  "spouse/family",
                            "points":  22
                        },
                        {
                            "text":  "blanket/quilt",
                            "points":  12
                        },
                        {
                            "text":  "music/lawrence welk",
                            "points":  9
                        },
                        {
                            "text":  "clothes/shoes",
                            "points":  9
                        },
                        {
                            "text":  "houses",
                            "points":  7
                        },
                        {
                            "text":  "movies/tv shows",
                            "points":  7
                        },
                        {
                            "text":  "photos",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  120349,
        "question":  "Name an occupation in which you'd trust a woman more than a man.",
        "answers":  [
                        {
                            "text":  "nurse",
                            "points":  20
                        },
                        {
                            "text":  "doc/dentist",
                            "points":  19
                        },
                        {
                            "text":  "beautician/hair",
                            "points":  9
                        },
                        {
                            "text":  "nanny/day care",
                            "points":  7
                        },
                        {
                            "text":  "teacher",
                            "points":  6
                        },
                        {
                            "text":  "politician",
                            "points":  5
                        },
                        {
                            "text":  "massage therapist",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120350,
        "question":  "Name an S word that describes the underwear you have on right now.",
        "answers":  [
                        {
                            "text":  "soft",
                            "points":  15
                        },
                        {
                            "text":  "sexy",
                            "points":  13
                        },
                        {
                            "text":  "silky",
                            "points":  12
                        },
                        {
                            "text":  "short",
                            "points":  7
                        },
                        {
                            "text":  "small",
                            "points":  6
                        },
                        {
                            "text":  "simple",
                            "points":  5
                        },
                        {
                            "text":  "skimpy",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  120351,
        "question":  "If you really could be bored to death, name a place where you might die.",
        "answers":  [
                        {
                            "text":  "work",
                            "points":  14
                        },
                        {
                            "text":  "beach/island",
                            "points":  10
                        },
                        {
                            "text":  "school/class",
                            "points":  9
                        },
                        {
                            "text":  "church",
                            "points":  8
                        },
                        {
                            "text":  "desert/death valley",
                            "points":  8
                        },
                        {
                            "text":  "library",
                            "points":  7
                        },
                        {
                            "text":  "home/crapper",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  120352,
        "question":  "You love the smell of what?",
        "answers":  [
                        {
                            "text":  "flowers",
                            "points":  26
                        },
                        {
                            "text":  "rain",
                            "points":  9
                        },
                        {
                            "text":  "bacon",
                            "points":  7
                        },
                        {
                            "text":  "coffee",
                            "points":  7
                        },
                        {
                            "text":  "vanilla",
                            "points":  5
                        },
                        {
                            "text":  "cookies",
                            "points":  4
                        },
                        {
                            "text":  "gasoline",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120353,
        "question":  "Name an occupation where you use your arms a lot.",
        "answers":  [
                        {
                            "text":  "athlete",
                            "points":  25
                        },
                        {
                            "text":  "construction",
                            "points":  15
                        },
                        {
                            "text":  "air traffic",
                            "points":  7
                        },
                        {
                            "text":  "mover",
                            "points":  5
                        },
                        {
                            "text":  "chef",
                            "points":  4
                        },
                        {
                            "text":  "driver",
                            "points":  3
                        },
                        {
                            "text":  "fitness trainer",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120354,
        "question":  "Name something about you that a friend criticizes one too many times that you dump them.",
        "answers":  [
                        {
                            "text":  "my weight/body",
                            "points":  25
                        },
                        {
                            "text":  "my hair",
                            "points":  8
                        },
                        {
                            "text":  "my face",
                            "points":  8
                        },
                        {
                            "text":  "my style/overalls",
                            "points":  6
                        },
                        {
                            "text":  "talking too much",
                            "points":  5
                        },
                        {
                            "text":  "my bae",
                            "points":  5
                        },
                        {
                            "text":  "my intellect",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  120355,
        "question":  "Name something specific you'd be shocked to see everybody wearing when you get to heaven.",
        "answers":  [
                        {
                            "text":  "g-strings",
                            "points":  14
                        },
                        {
                            "text":  "swimsuits/bikinis",
                            "points":  13
                        },
                        {
                            "text":  "nothing",
                            "points":  12
                        },
                        {
                            "text":  "shoes/crocs",
                            "points":  7
                        },
                        {
                            "text":  "glasses",
                            "points":  5
                        },
                        {
                            "text":  "hats/fedoras",
                            "points":  5
                        },
                        {
                            "text":  "skinny jeans",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  120356,
        "question":  "Name a living comedian who's smart enough to be president.",
        "answers":  [
                        {
                            "text":  "steve harvey",
                            "points":  14
                        },
                        {
                            "text":  "dave chappelle",
                            "points":  10
                        },
                        {
                            "text":  "jon stewart",
                            "points":  8
                        },
                        {
                            "text":  "steve martin",
                            "points":  8
                        },
                        {
                            "text":  "chris rock",
                            "points":  6
                        },
                        {
                            "text":  "jerry seinfeld",
                            "points":  6
                        },
                        {
                            "text":  "howie mandel",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  120357,
        "question":  "Name something in your home that isn't working.",
        "answers":  [
                        {
                            "text":  "me",
                            "points":  13
                        },
                        {
                            "text":  "my spouse/mate",
                            "points":  9
                        },
                        {
                            "text":  "light/flashlight",
                            "points":  9
                        },
                        {
                            "text":  "ceiling fan",
                            "points":  6
                        },
                        {
                            "text":  "air cond./heater",
                            "points":  5
                        },
                        {
                            "text":  "tv",
                            "points":  5
                        },
                        {
                            "text":  "plumbing/toilet",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  120358,
        "question":  "Name an animal in Alaska that a wife might train to attack her cheating husband.",
        "answers":  [
                        {
                            "text":  "bear",
                            "points":  73
                        },
                        {
                            "text":  "moose",
                            "points":  12
                        },
                        {
                            "text":  "husky/dog",
                            "points":  5
                        },
                        {
                            "text":  "wolf",
                            "points":  4
                        },
                        {
                            "text":  "eagle/bird",
                            "points":  4
                        },
                        {
                            "text":  "wolverine",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120359,
        "question":  "Give me a U.S. state with a Y in it.",
        "answers":  [
                        {
                            "text":  "wyoming",
                            "points":  43
                        },
                        {
                            "text":  "kentucky",
                            "points":  24
                        },
                        {
                            "text":  "new york",
                            "points":  22
                        },
                        {
                            "text":  "new jersey",
                            "points":  6
                        },
                        {
                            "text":  "pennsylvania",
                            "points":  3
                        },
                        {
                            "text":  "maryland",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120360,
        "question":  "We asked 100 married men... If you told your wife to shut up today, where would you be sleeping tonight?",
        "answers":  [
                        {
                            "text":  "couch",
                            "points":  40
                        },
                        {
                            "text":  "doghouse",
                            "points":  21
                        },
                        {
                            "text":  "car/garage",
                            "points":  18
                        },
                        {
                            "text":  "my bed...alone",
                            "points":  10
                        },
                        {
                            "text":  "patio/porch",
                            "points":  6
                        },
                        {
                            "text":  "on the streets",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  120361,
        "question":  "We asked 100 men... What about your ex's new boyfriend makes you jealous?",
        "answers":  [
                        {
                            "text":  "he's hotter",
                            "points":  35
                        },
                        {
                            "text":  "he's richer",
                            "points":  25
                        },
                        {
                            "text":  "sweeter car",
                            "points":  15
                        },
                        {
                            "text":  "thicker hair",
                            "points":  12
                        },
                        {
                            "text":  "taller",
                            "points":  10
                        },
                        {
                            "text":  "he's w/ my ex!",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120362,
        "question":  "We asked 100 single women... People think I'm shallow because I fell out of love when I saw his what?",
        "answers":  [
                        {
                            "text":  "shoddy body",
                            "points":  33
                        },
                        {
                            "text":  "empty wallet/ira",
                            "points":  23
                        },
                        {
                            "text":  "car/'76 gremlin",
                            "points":  15
                        },
                        {
                            "text":  "home/bunk beds",
                            "points":  12
                        },
                        {
                            "text":  "face/single tooth",
                            "points":  11
                        },
                        {
                            "text":  "bald head",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  120363,
        "question":  "We asked 100 married men... If you were in a pinch, you might borrow your wife's what?",
        "answers":  [
                        {
                            "text":  "panties",
                            "points":  19
                        },
                        {
                            "text":  "car",
                            "points":  18
                        },
                        {
                            "text":  "razor",
                            "points":  18
                        },
                        {
                            "text":  "socks",
                            "points":  18
                        },
                        {
                            "text":  "shirt/tube top",
                            "points":  15
                        },
                        {
                            "text":  "deodorant",
                            "points":  12
                        }
                    ]
    },
    {
        "id":  120364,
        "question":  "Name something that might go wrong if you had your wedding at the zoo.",
        "answers":  [
                        {
                            "text":  "animals escape/kill",
                            "points":  80
                        },
                        {
                            "text":  "throw poo",
                            "points":  11
                        },
                        {
                            "text":  "too noisy",
                            "points":  2
                        },
                        {
                            "text":  "rain",
                            "points":  2
                        },
                        {
                            "text":  "animals hump",
                            "points":  2
                        },
                        {
                            "text":  "animals eat the cake",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120365,
        "question":  "Name something at a nudist camp that people examine carefully before they sit on it.",
        "answers":  [
                        {
                            "text":  "chair/seat",
                            "points":  67
                        },
                        {
                            "text":  "grass/ground",
                            "points":  13
                        },
                        {
                            "text":  "jagged rock",
                            "points":  7
                        },
                        {
                            "text":  "tree stump/log",
                            "points":  6
                        },
                        {
                            "text":  "the toilet",
                            "points":  3
                        },
                        {
                            "text":  "bed",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120366,
        "question":  "We asked 100 married women... Name a reason you might suspect your husband was turning into a rooster.",
        "answers":  [
                        {
                            "text":  "crows at dawn",
                            "points":  63
                        },
                        {
                            "text":  "sagging neck",
                            "points":  17
                        },
                        {
                            "text":  "he's \"cocky\"",
                            "points":  7
                        },
                        {
                            "text":  "pecks",
                            "points":  4
                        },
                        {
                            "text":  "struts around",
                            "points":  4
                        },
                        {
                            "text":  "grow'g feathers",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120367,
        "question":  "Name an occasion that's inappropriate to bring a bottle of champagne to.",
        "answers":  [
                        {
                            "text":  "funeral",
                            "points":  60
                        },
                        {
                            "text":  "baptism/church",
                            "points":  15
                        },
                        {
                            "text":  "kid's party",
                            "points":  9
                        },
                        {
                            "text":  "a.a. meeting",
                            "points":  9
                        },
                        {
                            "text":  "baby shower",
                            "points":  4
                        },
                        {
                            "text":  "kid's graduation",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120368,
        "question":  "Name something you'd buy if vampires moved in next door.",
        "answers":  [
                        {
                            "text":  "garlic",
                            "points":  57
                        },
                        {
                            "text":  "new house",
                            "points":  13
                        },
                        {
                            "text":  "cross",
                            "points":  13
                        },
                        {
                            "text":  "stake/weapon",
                            "points":  10
                        },
                        {
                            "text":  "blood welcome gift",
                            "points":  3
                        },
                        {
                            "text":  "new locks",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120369,
        "question":  "A woman might say, \"I prefer cuddling my pillow rather than a man because a pillow doesn't ______.\"",
        "answers":  [
                        {
                            "text":  "snore",
                            "points":  53
                        },
                        {
                            "text":  "fart/stink",
                            "points":  17
                        },
                        {
                            "text":  "talk/complain",
                            "points":  13
                        },
                        {
                            "text":  "want sex",
                            "points":  8
                        },
                        {
                            "text":  "move/turn away",
                            "points":  5
                        },
                        {
                            "text":  "sweat",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120370,
        "question":  "Name something that might get inflated at a nude beach.",
        "answers":  [
                        {
                            "text":  "raft/tube/floatie",
                            "points":  49
                        },
                        {
                            "text":  "beach ball",
                            "points":  32
                        },
                        {
                            "text":  "egos",
                            "points":  9
                        },
                        {
                            "text":  "private parts",
                            "points":  5
                        },
                        {
                            "text":  "blow-up doll",
                            "points":  2
                        },
                        {
                            "text":  "hopes/expectations",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120371,
        "question":  "Name something you'd be surprised that Steve Harvey wanted to swap with you for a week.",
        "answers":  [
                        {
                            "text":  "jobs/paychecks",
                            "points":  38
                        },
                        {
                            "text":  "homes",
                            "points":  27
                        },
                        {
                            "text":  "wives",
                            "points":  17
                        },
                        {
                            "text":  "cars",
                            "points":  13
                        },
                        {
                            "text":  "kids",
                            "points":  2
                        },
                        {
                            "text":  "clothes/undies",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120372,
        "question":  "Name something a farmer might put on his pig at Halloween to make it look like Miss Piggy.",
        "answers":  [
                        {
                            "text":  "wig",
                            "points":  37
                        },
                        {
                            "text":  "dress/garb",
                            "points":  26
                        },
                        {
                            "text":  "makeup/lashes",
                            "points":  24
                        },
                        {
                            "text":  "pearls/jewelry",
                            "points":  7
                        },
                        {
                            "text":  "boa",
                            "points":  3
                        },
                        {
                            "text":  "bow",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120373,
        "question":  "We asked 100 men... It would be weird if a woman said she wanted to do what to you like a baby?",
        "answers":  [
                        {
                            "text":  "feed/breastfeed",
                            "points":  36
                        },
                        {
                            "text":  "hold/rock",
                            "points":  29
                        },
                        {
                            "text":  "swaddle/clothe",
                            "points":  24
                        },
                        {
                            "text":  "pat my booty",
                            "points":  5
                        },
                        {
                            "text":  "change diaper",
                            "points":  3
                        },
                        {
                            "text":  "powder",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120374,
        "question":  "Tell me somewhere you see people wandering around naked.",
        "answers":  [
                        {
                            "text":  "nude beach/camp",
                            "points":  68
                        },
                        {
                            "text":  "gym lockers",
                            "points":  17
                        },
                        {
                            "text":  "bedroom/home",
                            "points":  5
                        },
                        {
                            "text":  "resort spa",
                            "points":  4
                        },
                        {
                            "text":  "my dreams",
                            "points":  2
                        },
                        {
                            "text":  "strip joint",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120375,
        "question":  "If a wife killed her cheating husband, name something she might do at his funeral when she discovers he's not quite dead.",
        "answers":  [
                        {
                            "text":  "finish the job",
                            "points":  65
                        },
                        {
                            "text":  "faint",
                            "points":  9
                        },
                        {
                            "text":  "cry/scream",
                            "points":  7
                        },
                        {
                            "text":  "run!",
                            "points":  7
                        },
                        {
                            "text":  "slam coffin shut",
                            "points":  7
                        },
                        {
                            "text":  "hit/knock out",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120376,
        "question":  "Name a game that would be inappropriate for a church game night.",
        "answers":  [
                        {
                            "text":  "strip poker",
                            "points":  59
                        },
                        {
                            "text":  "twister",
                            "points":  14
                        },
                        {
                            "text":  "cards against humanity",
                            "points":  12
                        },
                        {
                            "text":  "spin the bottle",
                            "points":  8
                        },
                        {
                            "text":  "beer pong",
                            "points":  3
                        },
                        {
                            "text":  "truth or dare",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120377,
        "question":  "When George Washington was doing a sexy striptease for his wife, he probably started by taking off his what?",
        "answers":  [
                        {
                            "text":  "wig",
                            "points":  55
                        },
                        {
                            "text":  "hat",
                            "points":  22
                        },
                        {
                            "text":  "wooden teeth",
                            "points":  10
                        },
                        {
                            "text":  "boots",
                            "points":  4
                        },
                        {
                            "text":  "jacket",
                            "points":  4
                        },
                        {
                            "text":  "frilly shirt",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120378,
        "question":  "Name something your dog watches you do that kind of creeps you out.",
        "answers":  [
                        {
                            "text":  "sit on the pot",
                            "points":  48
                        },
                        {
                            "text":  "eat",
                            "points":  19
                        },
                        {
                            "text":  "sex/party of 1",
                            "points":  19
                        },
                        {
                            "text":  "sleep",
                            "points":  8
                        },
                        {
                            "text":  "shower",
                            "points":  2
                        },
                        {
                            "text":  "change/undress",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120379,
        "question":  "If a dog ran away from home, what might it take with it?",
        "answers":  [
                        {
                            "text":  "bone/food",
                            "points":  43
                        },
                        {
                            "text":  "toy/ball",
                            "points":  28
                        },
                        {
                            "text":  "collar & leash",
                            "points":  15
                        },
                        {
                            "text":  "blanket/bed",
                            "points":  5
                        },
                        {
                            "text":  "favorite bowl",
                            "points":  4
                        },
                        {
                            "text":  "other dog/cat",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120380,
        "question":  "After a great first date, you can't stop what when you get home?",
        "answers":  [
                        {
                            "text":  "daydreaming",
                            "points":  40
                        },
                        {
                            "text":  "smiling",
                            "points":  37
                        },
                        {
                            "text":  "talking about it",
                            "points":  10
                        },
                        {
                            "text":  "checking phone",
                            "points":  6
                        },
                        {
                            "text":  "singing",
                            "points":  3
                        },
                        {
                            "text":  "kissin'/doin' em",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120381,
        "question":  "Name a part of your body that might look like a carrot.",
        "answers":  [
                        {
                            "text":  "finger",
                            "points":  40
                        },
                        {
                            "text":  "nose",
                            "points":  27
                        },
                        {
                            "text":  "man part",
                            "points":  18
                        },
                        {
                            "text":  "arms",
                            "points":  5
                        },
                        {
                            "text":  "legs",
                            "points":  4
                        },
                        {
                            "text":  "toe/foot",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120382,
        "question":  "You bounce naked on a trampoline. What part of you would sound like wings flapping?",
        "answers":  [
                        {
                            "text":  "my 2-ton tatas",
                            "points":  37
                        },
                        {
                            "text":  "bat arms",
                            "points":  32
                        },
                        {
                            "text":  "tallywhacker",
                            "points":  12
                        },
                        {
                            "text":  "beer gut",
                            "points":  10
                        },
                        {
                            "text":  "butt cheeks",
                            "points":  5
                        },
                        {
                            "text":  "cheese thighs",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120383,
        "question":  "Name a complaint that Bigfoot probably has about campers.",
        "answers":  [
                        {
                            "text":  "dirty/litter",
                            "points":  36
                        },
                        {
                            "text":  "noisy",
                            "points":  29
                        },
                        {
                            "text":  "fires/smoke",
                            "points":  11
                        },
                        {
                            "text":  "b.o./they smell!",
                            "points":  9
                        },
                        {
                            "text":  "invade privacy",
                            "points":  8
                        },
                        {
                            "text":  "don't share food",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  120384,
        "question":  "Name something your cheap friend does to try to avoid paying his share of the restaurant check.",
        "answers":  [
                        {
                            "text":  "hides in loo",
                            "points":  34
                        },
                        {
                            "text":  "leaves early",
                            "points":  33
                        },
                        {
                            "text":  "\"forgets\" wallet",
                            "points":  25
                        },
                        {
                            "text":  "just gets water",
                            "points":  2
                        },
                        {
                            "text":  "complains about food",
                            "points":  2
                        },
                        {
                            "text":  "\"i'm broke\" :(",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120385,
        "question":  "We asked 100 women... Name a way you can tell a guy is nervous around you.",
        "answers":  [
                        {
                            "text":  "sweats buckets",
                            "points":  31
                        },
                        {
                            "text":  "yaps/bad jokes",
                            "points":  25
                        },
                        {
                            "text":  "stutters",
                            "points":  21
                        },
                        {
                            "text":  "fidgets/shakes",
                            "points":  9
                        },
                        {
                            "text":  "no eye contact",
                            "points":  7
                        },
                        {
                            "text":  "giggles",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  120386,
        "question":  "Fill in the blank: A dog might be thinking, \"I love the smell of ______ in the morning.\"",
        "answers":  [
                        {
                            "text":  "bacon/food",
                            "points":  76
                        },
                        {
                            "text":  "outdoors/grass",
                            "points":  9
                        },
                        {
                            "text":  "pee/poo",
                            "points":  6
                        },
                        {
                            "text":  "pussycat",
                            "points":  2
                        },
                        {
                            "text":  "squirrel",
                            "points":  2
                        },
                        {
                            "text":  "booty",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120387,
        "question":  "If a stripper called herself Snow White, name a prop she might use in her act.",
        "answers":  [
                        {
                            "text":  "7 dwarfs",
                            "points":  44
                        },
                        {
                            "text":  "poisoned apple",
                            "points":  36
                        },
                        {
                            "text":  "the dress/cape",
                            "points":  10
                        },
                        {
                            "text":  "talking mirror",
                            "points":  3
                        },
                        {
                            "text":  "snow",
                            "points":  2
                        },
                        {
                            "text":  "broom",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120388,
        "question":  "You'd be surprised if grandma got a tattoo. But you'd really be shocked if it was on her what?",
        "answers":  [
                        {
                            "text":  "booty",
                            "points":  44
                        },
                        {
                            "text":  "boobs",
                            "points":  30
                        },
                        {
                            "text":  "face",
                            "points":  10
                        },
                        {
                            "text":  "lower back",
                            "points":  6
                        },
                        {
                            "text":  "lady part",
                            "points":  5
                        },
                        {
                            "text":  "neck",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120389,
        "question":  "If all of your toilets broke, where would you go to the bathroom?",
        "answers":  [
                        {
                            "text":  "outside/woods",
                            "points":  43
                        },
                        {
                            "text":  "public restroom",
                            "points":  16
                        },
                        {
                            "text":  "neighbor's",
                            "points":  15
                        },
                        {
                            "text":  "bathtub",
                            "points":  11
                        },
                        {
                            "text":  "bucket",
                            "points":  7
                        },
                        {
                            "text":  "sink",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  120390,
        "question":  "We asked 100 women... I like it when my lover gently squeezes my what?",
        "answers":  [
                        {
                            "text":  "bootyful biscuits",
                            "points":  41
                        },
                        {
                            "text":  "dairy pillows",
                            "points":  29
                        },
                        {
                            "text":  "arm",
                            "points":  11
                        },
                        {
                            "text":  "hand",
                            "points":  7
                        },
                        {
                            "text":  "shoulders",
                            "points":  5
                        },
                        {
                            "text":  "thigh/leg",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120391,
        "question":  "Name a place a cheap guy makes his wife sit on his lap so they only have to buy one seat.",
        "answers":  [
                        {
                            "text":  "theater/movies",
                            "points":  37
                        },
                        {
                            "text":  "plane",
                            "points":  23
                        },
                        {
                            "text":  "concert",
                            "points":  13
                        },
                        {
                            "text":  "ball game",
                            "points":  12
                        },
                        {
                            "text":  "bus",
                            "points":  10
                        },
                        {
                            "text":  "train",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120392,
        "question":  "If you go camping with a friend, what do you hope they don't do in the tent?",
        "answers":  [
                        {
                            "text":  "blow air biscuits",
                            "points":  35
                        },
                        {
                            "text":  "snore",
                            "points":  21
                        },
                        {
                            "text":  "make love/to self",
                            "points":  16
                        },
                        {
                            "text":  "pee/poop",
                            "points":  16
                        },
                        {
                            "text":  "blab",
                            "points":  5
                        },
                        {
                            "text":  "eat/tuna",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120393,
        "question":  "Name something that happens to Santa when he ends up on Mrs. Claus's naughty list.",
        "answers":  [
                        {
                            "text":  "no cookies",
                            "points":  33
                        },
                        {
                            "text":  "sleep with deer/sofa",
                            "points":  29
                        },
                        {
                            "text":  "get spanked",
                            "points":  15
                        },
                        {
                            "text":  "no booty",
                            "points":  8
                        },
                        {
                            "text":  "lump of coal",
                            "points":  7
                        },
                        {
                            "text":  "no christmas/gifts",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  120394,
        "question":  "Name a part about being a vampire that sounds like fun.",
        "answers":  [
                        {
                            "text":  "sleep days/up nights",
                            "points":  30
                        },
                        {
                            "text":  "never die/age",
                            "points":  21
                        },
                        {
                            "text":  "fangs/suck blood",
                            "points":  21
                        },
                        {
                            "text":  "become bat/flying",
                            "points":  18
                        },
                        {
                            "text":  "cool outfit",
                            "points":  5
                        },
                        {
                            "text":  "scaring folks",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120395,
        "question":  "Fill in the blank: My favorite kind of date involves lots of ______ing.",
        "answers":  [
                        {
                            "text":  "kiss'g/cuddling",
                            "points":  28
                        },
                        {
                            "text":  "talk'g/laughing",
                            "points":  27
                        },
                        {
                            "text":  "eating",
                            "points":  21
                        },
                        {
                            "text":  "wild boinking",
                            "points":  11
                        },
                        {
                            "text":  "drinking",
                            "points":  6
                        },
                        {
                            "text":  "dancing",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120396,
        "question":  "Name something you'd hate to see the pilot flying your plane do right before you take off.",
        "answers":  [
                        {
                            "text":  "tequila shot",
                            "points":  73
                        },
                        {
                            "text":  "drugs",
                            "points":  10
                        },
                        {
                            "text":  "pass out/sleep",
                            "points":  5
                        },
                        {
                            "text":  "read manual",
                            "points":  4
                        },
                        {
                            "text":  "pray",
                            "points":  2
                        },
                        {
                            "text":  "shake/stagger",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120397,
        "question":  "We asked 100 married men... Name something you don't ask your wife for if she's in a bad mood.",
        "answers":  [
                        {
                            "text":  "that booty",
                            "points":  57
                        },
                        {
                            "text":  "4-course meal",
                            "points":  25
                        },
                        {
                            "text":  "advice",
                            "points":  5
                        },
                        {
                            "text":  "$/my allowance",
                            "points":  4
                        },
                        {
                            "text":  "a ride/to strip club",
                            "points":  3
                        },
                        {
                            "text":  "anything!",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120398,
        "question":  "We asked 100 women... Name something you wear that can make your bottom look better.",
        "answers":  [
                        {
                            "text":  "tight pants/leggings",
                            "points":  54
                        },
                        {
                            "text":  "spanx/girdle",
                            "points":  29
                        },
                        {
                            "text":  "tight skirt/dress",
                            "points":  5
                        },
                        {
                            "text":  "tights",
                            "points":  3
                        },
                        {
                            "text":  "long blouse/tunic",
                            "points":  3
                        },
                        {
                            "text":  "butt pads",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120399,
        "question":  "Name a kind of place where men size each other up.",
        "answers":  [
                        {
                            "text":  "gym/lockers",
                            "points":  53
                        },
                        {
                            "text":  "bar/club",
                            "points":  20
                        },
                        {
                            "text":  "bathroom/urinal",
                            "points":  15
                        },
                        {
                            "text":  "sports venue",
                            "points":  4
                        },
                        {
                            "text":  "beach/poolside",
                            "points":  2
                        },
                        {
                            "text":  "work",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120400,
        "question":  "Fill in the blank: ______ daddy.",
        "answers":  [
                        {
                            "text":  "sugar daddy",
                            "points":  50
                        },
                        {
                            "text":  "big daddy",
                            "points":  23
                        },
                        {
                            "text":  "baby daddy",
                            "points":  13
                        },
                        {
                            "text":  "mack daddy",
                            "points":  6
                        },
                        {
                            "text":  "pimp daddy",
                            "points":  2
                        },
                        {
                            "text":  "who's your daddy?",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120401,
        "question":  "Be honest -- you have more pictures of your dog than you do of who?",
        "answers":  [
                        {
                            "text":  "spouse/mate",
                            "points":  48
                        },
                        {
                            "text":  "myself",
                            "points":  22
                        },
                        {
                            "text":  "kid/grandkid",
                            "points":  13
                        },
                        {
                            "text":  "mother",
                            "points":  8
                        },
                        {
                            "text":  "sibling",
                            "points":  3
                        },
                        {
                            "text":  "cat",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120402,
        "question":  "We asked 100 married men... Name something you worry that your mother-in-law wants to do.",
        "answers":  [
                        {
                            "text":  "move in",
                            "points":  47
                        },
                        {
                            "text":  "pay for everything",
                            "points":  21
                        },
                        {
                            "text":  "visit",
                            "points":  11
                        },
                        {
                            "text":  "join on vacay",
                            "points":  10
                        },
                        {
                            "text":  "kiss/do me",
                            "points":  5
                        },
                        {
                            "text":  "end my marriage",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120403,
        "question":  "We asked 100 women... Your guy thinks his package is an eggplant. But it looks more like what vegetable?",
        "answers":  [
                        {
                            "text":  "cucumber/pickle",
                            "points":  46
                        },
                        {
                            "text":  "baby carrot",
                            "points":  31
                        },
                        {
                            "text":  "zucchini",
                            "points":  10
                        },
                        {
                            "text":  "mushroom",
                            "points":  4
                        },
                        {
                            "text":  "string bean",
                            "points":  3
                        },
                        {
                            "text":  "pepper/jalapeno",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120404,
        "question":  "At a doggie wedding, what do newlyweds do that ruins their first dance?",
        "answers":  [
                        {
                            "text":  "whiz/dump",
                            "points":  42
                        },
                        {
                            "text":  "sniff butts",
                            "points":  23
                        },
                        {
                            "text":  "bark",
                            "points":  11
                        },
                        {
                            "text":  "start humpin'",
                            "points":  9
                        },
                        {
                            "text":  "fight",
                            "points":  6
                        },
                        {
                            "text":  "run/after squirrel",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  120405,
        "question":  "We asked 100 women... Since men are so fixated with big bottoms, they should date what animal?",
        "answers":  [
                        {
                            "text":  "hippo",
                            "points":  42
                        },
                        {
                            "text":  "ape/baboon",
                            "points":  22
                        },
                        {
                            "text":  "elephant",
                            "points":  15
                        },
                        {
                            "text":  "rhino",
                            "points":  11
                        },
                        {
                            "text":  "bear",
                            "points":  4
                        },
                        {
                            "text":  "horse",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120406,
        "question":  "We asked 100 married men... Name an animal at the zoo that bears a striking resemblance to your mother-in-law.",
        "answers":  [
                        {
                            "text":  "monkey/ape",
                            "points":  39
                        },
                        {
                            "text":  "bear",
                            "points":  17
                        },
                        {
                            "text":  "lion",
                            "points":  15
                        },
                        {
                            "text":  "sloth",
                            "points":  12
                        },
                        {
                            "text":  "hippo",
                            "points":  11
                        },
                        {
                            "text":  "swan",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120407,
        "question":  "In the winter, you've got your what to keep you warm?",
        "answers":  [
                        {
                            "text":  "blanket",
                            "points":  38
                        },
                        {
                            "text":  "winter clothes",
                            "points":  34
                        },
                        {
                            "text":  "pookie",
                            "points":  15
                        },
                        {
                            "text":  "blubber/fat arse",
                            "points":  3
                        },
                        {
                            "text":  "fireplace",
                            "points":  3
                        },
                        {
                            "text":  "dog",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120408,
        "question":  "Name an event people quickly get in shape for.",
        "answers":  [
                        {
                            "text":  "wedding",
                            "points":  37
                        },
                        {
                            "text":  "marathon",
                            "points":  29
                        },
                        {
                            "text":  "vacay/beach trip",
                            "points":  15
                        },
                        {
                            "text":  "class reunion",
                            "points":  11
                        },
                        {
                            "text":  "fight/boxing",
                            "points":  2
                        },
                        {
                            "text":  "modeling gig",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120409,
        "question":  "We asked 100 single men... In the meat market of life, women treat you like you're what kind of meat?",
        "answers":  [
                        {
                            "text":  "steak",
                            "points":  33
                        },
                        {
                            "text":  "hamburger",
                            "points":  21
                        },
                        {
                            "text":  "hot dog/sausage",
                            "points":  18
                        },
                        {
                            "text":  "bologna",
                            "points":  15
                        },
                        {
                            "text":  "spam",
                            "points":  5
                        },
                        {
                            "text":  "ham",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120410,
        "question":  "We asked 100 single men... I want a girl just like the girls I see where?",
        "answers":  [
                        {
                            "text":  "tv/the bachelor",
                            "points":  32
                        },
                        {
                            "text":  "insta/internet",
                            "points":  31
                        },
                        {
                            "text":  "the beach",
                            "points":  14
                        },
                        {
                            "text":  "the gym",
                            "points":  12
                        },
                        {
                            "text":  "my dreams",
                            "points":  4
                        },
                        {
                            "text":  "store",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120411,
        "question":  "We asked 100 married men... A pretty woman winks at you at the bar while your wife is in the bathroom. What do you do?",
        "answers":  [
                        {
                            "text":  "ignore/turn away",
                            "points":  30
                        },
                        {
                            "text":  "wink back",
                            "points":  25
                        },
                        {
                            "text":  "smile",
                            "points":  18
                        },
                        {
                            "text":  "say hi/go chat",
                            "points":  11
                        },
                        {
                            "text":  "show my ring",
                            "points":  10
                        },
                        {
                            "text":  "wave",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120412,
        "question":  "We asked 100 divorced people... Name something you and your ex should have talked about before getting married.",
        "answers":  [
                        {
                            "text":  "having kids/12",
                            "points":  28
                        },
                        {
                            "text":  "cleaning/chores",
                            "points":  25
                        },
                        {
                            "text":  "money",
                            "points":  24
                        },
                        {
                            "text":  "sex/times per year",
                            "points":  9
                        },
                        {
                            "text":  "pets",
                            "points":  8
                        },
                        {
                            "text":  "not cheating",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120413,
        "question":  "Name something a ventriloquist would be surprised to come home and find his wife doing with his dummy.",
        "answers":  [
                        {
                            "text":  "making sweet love",
                            "points":  27
                        },
                        {
                            "text":  "smooching",
                            "points":  25
                        },
                        {
                            "text":  "talk/perform'g",
                            "points":  25
                        },
                        {
                            "text":  "destroy'g/burning",
                            "points":  10
                        },
                        {
                            "text":  "feeding it",
                            "points":  7
                        },
                        {
                            "text":  "bathing it",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120414,
        "question":  "Name something that if an old guy bounced on it, he might hurt himself.",
        "answers":  [
                        {
                            "text":  "trampoline",
                            "points":  62
                        },
                        {
                            "text":  "bed",
                            "points":  15
                        },
                        {
                            "text":  "exercise ball",
                            "points":  8
                        },
                        {
                            "text":  "pogo stick",
                            "points":  4
                        },
                        {
                            "text":  "floor/ground",
                            "points":  3
                        },
                        {
                            "text":  "his old lady",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120415,
        "question":  "We asked 100 women... The bar you're at is full of men, but the bad news is they're all what?",
        "answers":  [
                        {
                            "text":  "gay",
                            "points":  61
                        },
                        {
                            "text":  "married",
                            "points":  13
                        },
                        {
                            "text":  "butt ugly",
                            "points":  7
                        },
                        {
                            "text":  "short",
                            "points":  6
                        },
                        {
                            "text":  "bald",
                            "points":  4
                        },
                        {
                            "text":  "geriatric",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120416,
        "question":  "Name a U.S. city that's known for its music scene.",
        "answers":  [
                        {
                            "text":  "nashville",
                            "points":  59
                        },
                        {
                            "text":  "new orleans",
                            "points":  18
                        },
                        {
                            "text":  "austin",
                            "points":  9
                        },
                        {
                            "text":  "memphis",
                            "points":  3
                        },
                        {
                            "text":  "los angeles",
                            "points":  3
                        },
                        {
                            "text":  "new york",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120417,
        "question":  "We asked 100 women... What might you do on a date when a guy you don't like moves in for a kiss?",
        "answers":  [
                        {
                            "text":  "turn/move back",
                            "points":  56
                        },
                        {
                            "text":  "cough/sneeze",
                            "points":  27
                        },
                        {
                            "text":  "burp",
                            "points":  4
                        },
                        {
                            "text":  "leave/run away",
                            "points":  3
                        },
                        {
                            "text":  "\"no!\"/reject him",
                            "points":  3
                        },
                        {
                            "text":  "punch/slap him",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120418,
        "question":  "When your clothes come off, what goes on your naked body?",
        "answers":  [
                        {
                            "text":  "pj's/new clothes",
                            "points":  54
                        },
                        {
                            "text":  "lotion",
                            "points":  17
                        },
                        {
                            "text":  "soap & water",
                            "points":  17
                        },
                        {
                            "text":  "boo/2 or 3 hotties",
                            "points":  3
                        },
                        {
                            "text":  "perfume",
                            "points":  2
                        },
                        {
                            "text":  "blanket/sheets",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120419,
        "question":  "We asked 100 men... Admit it -- name something you see a woman eating that turns you on.",
        "answers":  [
                        {
                            "text":  "banana",
                            "points":  45
                        },
                        {
                            "text":  "popsicle/ice cream",
                            "points":  20
                        },
                        {
                            "text":  "hot dog/sausage",
                            "points":  13
                        },
                        {
                            "text":  "lollipop",
                            "points":  9
                        },
                        {
                            "text":  "grapes",
                            "points":  5
                        },
                        {
                            "text":  "carrot",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120420,
        "question":  "Bob always wanted to be a fireman. So he put what on his pickup truck?",
        "answers":  [
                        {
                            "text":  "lights/siren",
                            "points":  42
                        },
                        {
                            "text":  "ladder",
                            "points":  26
                        },
                        {
                            "text":  "red paint",
                            "points":  12
                        },
                        {
                            "text":  "hose",
                            "points":  7
                        },
                        {
                            "text":  "logo/\"fire dept\"",
                            "points":  4
                        },
                        {
                            "text":  "dalmatian",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120421,
        "question":  "Fill in the blank: I change my seat in the movies when the person next to me ______s.",
        "answers":  [
                        {
                            "text":  "yaps/yells at screen",
                            "points":  41
                        },
                        {
                            "text":  "farts/reeks",
                            "points":  27
                        },
                        {
                            "text":  "coughs/sneezes",
                            "points":  12
                        },
                        {
                            "text":  "sits close",
                            "points":  6
                        },
                        {
                            "text":  "smacks food",
                            "points":  5
                        },
                        {
                            "text":  "snores",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120422,
        "question":  "You'd think your partner was cheating if you overheard them say what on the phone?",
        "answers":  [
                        {
                            "text":  "love/miss you",
                            "points":  39
                        },
                        {
                            "text":  "see later/where?",
                            "points":  31
                        },
                        {
                            "text":  "can't talk now",
                            "points":  9
                        },
                        {
                            "text":  "babe/pet name",
                            "points":  9
                        },
                        {
                            "text":  "don't tell anyone!",
                            "points":  4
                        },
                        {
                            "text":  "whatcha wearin'?",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120423,
        "question":  "We asked 100 women... Name a place your man goes alone where you know he flirts with other women.",
        "answers":  [
                        {
                            "text":  "bar/club",
                            "points":  39
                        },
                        {
                            "text":  "work",
                            "points":  27
                        },
                        {
                            "text":  "store/mall",
                            "points":  16
                        },
                        {
                            "text":  "strip joint",
                            "points":  9
                        },
                        {
                            "text":  "the gym",
                            "points":  2
                        },
                        {
                            "text":  "online/girl cams",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120424,
        "question":  "Name something a female owl might find sexy about her mate.",
        "answers":  [
                        {
                            "text":  "big eyes",
                            "points":  37
                        },
                        {
                            "text":  "his hoot",
                            "points":  29
                        },
                        {
                            "text":  "feathers/wings",
                            "points":  18
                        },
                        {
                            "text":  "his beak",
                            "points":  6
                        },
                        {
                            "text":  "pointy ears",
                            "points":  3
                        },
                        {
                            "text":  "spinning head",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120425,
        "question":  "Name a country you think gets the most American tourists.",
        "answers":  [
                        {
                            "text":  "mexico",
                            "points":  34
                        },
                        {
                            "text":  "france",
                            "points":  31
                        },
                        {
                            "text":  "uk/england",
                            "points":  12
                        },
                        {
                            "text":  "canada",
                            "points":  11
                        },
                        {
                            "text":  "italy",
                            "points":  5
                        },
                        {
                            "text":  "bahamas",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120426,
        "question":  "After a divorce, a wife replaces a picture of her ex in her wallet with a picture of what?",
        "answers":  [
                        {
                            "text":  "kiddos",
                            "points":  34
                        },
                        {
                            "text":  "her new meat",
                            "points":  20
                        },
                        {
                            "text":  "dog/pet",
                            "points":  19
                        },
                        {
                            "text":  "herself",
                            "points":  13
                        },
                        {
                            "text":  "celeb/harry styles",
                            "points":  6
                        },
                        {
                            "text":  "bestie",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120427,
        "question":  "Name something adults see kids do that makes them not want to have kids.",
        "answers":  [
                        {
                            "text":  "tantrum/disobey",
                            "points":  65
                        },
                        {
                            "text":  "play/in mud",
                            "points":  7
                        },
                        {
                            "text":  "puke",
                            "points":  6
                        },
                        {
                            "text":  "eat booger/snot",
                            "points":  6
                        },
                        {
                            "text":  "full diaper",
                            "points":  5
                        },
                        {
                            "text":  "destroy things",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  120428,
        "question":  "Tell me a reason you're bending over.",
        "answers":  [
                        {
                            "text":  "pick up something",
                            "points":  52
                        },
                        {
                            "text":  "tie my shoes",
                            "points":  27
                        },
                        {
                            "text":  "sumpin' sumpin'",
                            "points":  6
                        },
                        {
                            "text":  "yoga/stretch",
                            "points":  5
                        },
                        {
                            "text":  "catch my breath",
                            "points":  2
                        },
                        {
                            "text":  "moon someone",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120429,
        "question":  "We asked 100 women... Good news: you're dating Steve Harvey. Better news: he bought you what for your birthday?",
        "answers":  [
                        {
                            "text":  "new car",
                            "points":  52
                        },
                        {
                            "text":  "house/ranch",
                            "points":  16
                        },
                        {
                            "text":  "bling",
                            "points":  14
                        },
                        {
                            "text":  "trip/around world",
                            "points":  5
                        },
                        {
                            "text":  "cake/food",
                            "points":  4
                        },
                        {
                            "text":  "exotic pet/llama",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120430,
        "question":  "Name a reason a woman might marry a man half her age.",
        "answers":  [
                        {
                            "text":  "great sex",
                            "points":  37
                        },
                        {
                            "text":  "$$$/tech ceo",
                            "points":  27
                        },
                        {
                            "text":  "love",
                            "points":  12
                        },
                        {
                            "text":  "total hottie",
                            "points":  11
                        },
                        {
                            "text":  "desperate/cray",
                            "points":  4
                        },
                        {
                            "text":  "feel younger",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120431,
        "question":  "If Steve Harvey were coming to your house for Sunday dinner, what do you hope he brings?",
        "answers":  [
                        {
                            "text":  "food/whole meal",
                            "points":  36
                        },
                        {
                            "text":  "bottle of dom",
                            "points":  30
                        },
                        {
                            "text":  "humor/smiles",
                            "points":  13
                        },
                        {
                            "text":  "$ to hand out",
                            "points":  8
                        },
                        {
                            "text":  "marjorie",
                            "points":  4
                        },
                        {
                            "text":  "an appetite",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120432,
        "question":  "Name something you hope doesn't come out of you when playing Twister at a party.",
        "answers":  [
                        {
                            "text":  "3 loud toots!!!",
                            "points":  75
                        },
                        {
                            "text":  "my junk",
                            "points":  5
                        },
                        {
                            "text":  "my defiant boob",
                            "points":  5
                        },
                        {
                            "text":  "snot",
                            "points":  3
                        },
                        {
                            "text":  "spit/drool",
                            "points":  3
                        },
                        {
                            "text":  "puke",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120433,
        "question":  "Name something you put in your bedroom to make it more romantic.",
        "answers":  [
                        {
                            "text":  "candles",
                            "points":  67
                        },
                        {
                            "text":  "flowers",
                            "points":  14
                        },
                        {
                            "text":  "dimmed lights",
                            "points":  5
                        },
                        {
                            "text":  "some michael buble",
                            "points":  3
                        },
                        {
                            "text":  "my sexy self",
                            "points":  2
                        },
                        {
                            "text":  "s&m gear & mirrors",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120434,
        "question":  "Name something bad you might consider doing if you had a \"get out of hell free\" card.",
        "answers":  [
                        {
                            "text":  "steal/rob",
                            "points":  50
                        },
                        {
                            "text":  "murder/kill",
                            "points":  28
                        },
                        {
                            "text":  "cheat",
                            "points":  5
                        },
                        {
                            "text":  "punch someone",
                            "points":  4
                        },
                        {
                            "text":  "speed",
                            "points":  3
                        },
                        {
                            "text":  "gamble",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120435,
        "question":  "Name something Adam might have given Eve on their anniversary.",
        "answers":  [
                        {
                            "text":  "apples",
                            "points":  50
                        },
                        {
                            "text":  "fig leaf/clothes",
                            "points":  19
                        },
                        {
                            "text":  "flowers",
                            "points":  13
                        },
                        {
                            "text":  "carved ring",
                            "points":  6
                        },
                        {
                            "text":  "another rib",
                            "points":  3
                        },
                        {
                            "text":  "his body",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120436,
        "question":  "If no one was watching, what amusement park ride would be fun to make love on?",
        "answers":  [
                        {
                            "text":  "ferris wheel",
                            "points":  44
                        },
                        {
                            "text":  "carousel",
                            "points":  15
                        },
                        {
                            "text":  "roller coaster",
                            "points":  14
                        },
                        {
                            "text":  "boat/tunnel of love",
                            "points":  14
                        },
                        {
                            "text":  "haunted house",
                            "points":  3
                        },
                        {
                            "text":  "bumper cars",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120437,
        "question":  "Name something you've tinkled on in an emergency.",
        "answers":  [
                        {
                            "text":  "tree/plant",
                            "points":  41
                        },
                        {
                            "text":  "ground/lawn",
                            "points":  34
                        },
                        {
                            "text":  "my nasty self/pants",
                            "points":  9
                        },
                        {
                            "text":  "building/wall",
                            "points":  3
                        },
                        {
                            "text":  "bed/blankie",
                            "points":  3
                        },
                        {
                            "text":  "car/seat",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120438,
        "question":  "We asked 100 women... You wouldn't trade your man for the world. But you might trade for a what?",
        "answers":  [
                        {
                            "text":  "million bucks",
                            "points":  41
                        },
                        {
                            "text":  "mansion",
                            "points":  29
                        },
                        {
                            "text":  "better man",
                            "points":  13
                        },
                        {
                            "text":  "sports car",
                            "points":  5
                        },
                        {
                            "text":  "diamond/jewelry",
                            "points":  3
                        },
                        {
                            "text":  "dog/yorkie",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120439,
        "question":  "Name something that's appropriate to do at a wedding but not at a funeral.",
        "answers":  [
                        {
                            "text":  "dance/electric slide",
                            "points":  41
                        },
                        {
                            "text":  "laugh/joke",
                            "points":  24
                        },
                        {
                            "text":  "cheer/clap",
                            "points":  11
                        },
                        {
                            "text":  "pop champagne",
                            "points":  8
                        },
                        {
                            "text":  "throw rice",
                            "points":  6
                        },
                        {
                            "text":  "toss bouquet",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120440,
        "question":  "A man thinks he has a shark in his Speedo. But it's more like the size of what fish?",
        "answers":  [
                        {
                            "text":  "minnow",
                            "points":  35
                        },
                        {
                            "text":  "guppy",
                            "points":  26
                        },
                        {
                            "text":  "goldfish",
                            "points":  23
                        },
                        {
                            "text":  "sardine",
                            "points":  4
                        },
                        {
                            "text":  "clownfish",
                            "points":  3
                        },
                        {
                            "text":  "tilapia",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120441,
        "question":  "Name an occasion where you'd be disappointed if they didn't serve alcohol.",
        "answers":  [
                        {
                            "text":  "wedding",
                            "points":  76
                        },
                        {
                            "text":  "birthday",
                            "points":  4
                        },
                        {
                            "text":  "new year's",
                            "points":  4
                        },
                        {
                            "text":  "4th of july",
                            "points":  3
                        },
                        {
                            "text":  "bachelor/ette party",
                            "points":  3
                        },
                        {
                            "text":  "concert",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120442,
        "question":  "We asked 100 women... Give me a word starting with F you'd use to describe Steve Harvey.",
        "answers":  [
                        {
                            "text":  "funny/fun",
                            "points":  68
                        },
                        {
                            "text":  "famous",
                            "points":  8
                        },
                        {
                            "text":  "fine",
                            "points":  6
                        },
                        {
                            "text":  "friendly/friend",
                            "points":  6
                        },
                        {
                            "text":  "fancy",
                            "points":  2
                        },
                        {
                            "text":  "flirty",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120443,
        "question":  "Name something that happens every time you go to a restaurant in hell.",
        "answers":  [
                        {
                            "text":  "burnt/bad food",
                            "points":  64
                        },
                        {
                            "text":  "no ice water",
                            "points":  11
                        },
                        {
                            "text":  "hot/catch fire",
                            "points":  9
                        },
                        {
                            "text":  "long wait/no staff",
                            "points":  3
                        },
                        {
                            "text":  "out of food",
                            "points":  3
                        },
                        {
                            "text":  "hair/spit in food",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120444,
        "question":  "Fill in the blank: Susan said, \"My husband is so lazy, he only ______s once a week.\"",
        "answers":  [
                        {
                            "text":  "bathes",
                            "points":  55
                        },
                        {
                            "text":  "works",
                            "points":  14
                        },
                        {
                            "text":  "takes whiz/dump",
                            "points":  7
                        },
                        {
                            "text":  "\"sugars my cookie\"",
                            "points":  6
                        },
                        {
                            "text":  "shaves",
                            "points":  5
                        },
                        {
                            "text":  "cooks/eats",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  120445,
        "question":  "Give me the first name of a game show host that a game show fan might name their son.",
        "answers":  [
                        {
                            "text":  "steve",
                            "points":  50
                        },
                        {
                            "text":  "alex",
                            "points":  12
                        },
                        {
                            "text":  "bob",
                            "points":  10
                        },
                        {
                            "text":  "pat",
                            "points":  10
                        },
                        {
                            "text":  "richard",
                            "points":  6
                        },
                        {
                            "text":  "howie",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120446,
        "question":  "Name something a man might find in the laundry that would make him think his wife was cheating on him with Santa.",
        "answers":  [
                        {
                            "text":  "santa suit/hat",
                            "points":  48
                        },
                        {
                            "text":  "x-mas undies",
                            "points":  20
                        },
                        {
                            "text":  "white hair/beard",
                            "points":  13
                        },
                        {
                            "text":  "striped condom",
                            "points":  6
                        },
                        {
                            "text":  "candy canes",
                            "points":  3
                        },
                        {
                            "text":  "lump of coal",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120447,
        "question":  "We asked 100 men... If you had a really big beard, you might keep what in it?",
        "answers":  [
                        {
                            "text":  "food for later",
                            "points":  39
                        },
                        {
                            "text":  "$$$/wallet",
                            "points":  21
                        },
                        {
                            "text":  "comb/pick",
                            "points":  11
                        },
                        {
                            "text":  "keys",
                            "points":  7
                        },
                        {
                            "text":  "weed",
                            "points":  7
                        },
                        {
                            "text":  "birds",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  120448,
        "question":  "Nowadays, Little Red Riding Hood might ride what to grandma's house?",
        "answers":  [
                        {
                            "text":  "scooter",
                            "points":  35
                        },
                        {
                            "text":  "car/uber",
                            "points":  26
                        },
                        {
                            "text":  "motorcycle/moped",
                            "points":  15
                        },
                        {
                            "text":  "bicycle",
                            "points":  8
                        },
                        {
                            "text":  "hoverboard",
                            "points":  4
                        },
                        {
                            "text":  "atv",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120449,
        "question":  "Fill in the blank: Linda said, \"I think my new boyfriend is already married, because he'll only meet me at ______.\"",
        "answers":  [
                        {
                            "text":  "my crib/house",
                            "points":  30
                        },
                        {
                            "text":  "motel 6",
                            "points":  26
                        },
                        {
                            "text":  "night",
                            "points":  16
                        },
                        {
                            "text":  "cafe/applebee's",
                            "points":  10
                        },
                        {
                            "text":  "work",
                            "points":  8
                        },
                        {
                            "text":  "bar/club",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120450,
        "question":  "Name someone who'd show up to a man's bachelor party that would ruin it for him.",
        "answers":  [
                        {
                            "text":  "ex",
                            "points":  30
                        },
                        {
                            "text":  "his fiancee",
                            "points":  21
                        },
                        {
                            "text":  "his mom",
                            "points":  19
                        },
                        {
                            "text":  "in-law",
                            "points":  14
                        },
                        {
                            "text":  "his side chick",
                            "points":  6
                        },
                        {
                            "text":  "ugly stripper",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120451,
        "question":  "Name something that's very hairy that's also very scary.",
        "answers":  [
                        {
                            "text":  "tarantula",
                            "points":  23
                        },
                        {
                            "text":  "bear",
                            "points":  19
                        },
                        {
                            "text":  "ape/monkey",
                            "points":  16
                        },
                        {
                            "text":  "person/butt crack",
                            "points":  16
                        },
                        {
                            "text":  "bigfoot",
                            "points":  13
                        },
                        {
                            "text":  "werewolf",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  120452,
        "question":  "If you started to turn green, what fictional character might you be turning into?",
        "answers":  [
                        {
                            "text":  "hulk",
                            "points":  56
                        },
                        {
                            "text":  "the grinch",
                            "points":  11
                        },
                        {
                            "text":  "shrek",
                            "points":  10
                        },
                        {
                            "text":  "kermit",
                            "points":  8
                        },
                        {
                            "text":  "jolly green giant",
                            "points":  3
                        },
                        {
                            "text":  "green lantern",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120453,
        "question":  "Name something a man might do if his mother-in-law started coming on to him.",
        "answers":  [
                        {
                            "text":  "run/leave",
                            "points":  53
                        },
                        {
                            "text":  "tell his wife",
                            "points":  14
                        },
                        {
                            "text":  "scream/scold her",
                            "points":  10
                        },
                        {
                            "text":  "puke",
                            "points":  9
                        },
                        {
                            "text":  "do it to it!",
                            "points":  3
                        },
                        {
                            "text":  "ignore her",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120454,
        "question":  "Bad news: you're going to prison. Good news: now you'll finally have time to do what?",
        "answers":  [
                        {
                            "text":  "read",
                            "points":  47
                        },
                        {
                            "text":  "sleep/relax",
                            "points":  27
                        },
                        {
                            "text":  "get buff",
                            "points":  6
                        },
                        {
                            "text":  "write/screenplay",
                            "points":  4
                        },
                        {
                            "text":  "knit/quilt",
                            "points":  4
                        },
                        {
                            "text":  "get hot lovin'",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120455,
        "question":  "We asked 100 women... Uh-oh -- your tracking device just showed that your man is at a strip club. What do you do?",
        "answers":  [
                        {
                            "text":  "go there!",
                            "points":  44
                        },
                        {
                            "text":  "call/text him",
                            "points":  25
                        },
                        {
                            "text":  "sigh/oh well",
                            "points":  8
                        },
                        {
                            "text":  "lock him out",
                            "points":  6
                        },
                        {
                            "text":  "dump him",
                            "points":  5
                        },
                        {
                            "text":  "freeze credit card",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120456,
        "question":  "Name something an adventurous couple might make love on top of.",
        "answers":  [
                        {
                            "text":  "cliff/volcano",
                            "points":  45
                        },
                        {
                            "text":  "car",
                            "points":  26
                        },
                        {
                            "text":  "roof/skyscraper",
                            "points":  7
                        },
                        {
                            "text":  "table/counter",
                            "points":  6
                        },
                        {
                            "text":  "ferris wheel",
                            "points":  3
                        },
                        {
                            "text":  "washer/dryer",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120457,
        "question":  "Fill in the blank: A dog's head might explode if it saw twelve ______s all at once.",
        "answers":  [
                        {
                            "text":  "bones/food bowls",
                            "points":  37
                        },
                        {
                            "text":  "cats",
                            "points":  30
                        },
                        {
                            "text":  "squirrels",
                            "points":  9
                        },
                        {
                            "text":  "balls",
                            "points":  6
                        },
                        {
                            "text":  "other dogs",
                            "points":  4
                        },
                        {
                            "text":  "fire hydrants",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120458,
        "question":  "Name a scent you'd be shocked to see in an air freshener.",
        "answers":  [
                        {
                            "text":  "food/broccoli",
                            "points":  29
                        },
                        {
                            "text":  "poop/fart",
                            "points":  26
                        },
                        {
                            "text":  "skunk",
                            "points":  14
                        },
                        {
                            "text":  "wet dog",
                            "points":  8
                        },
                        {
                            "text":  "b.o./dirty sock",
                            "points":  7
                        },
                        {
                            "text":  "garbage",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  120459,
        "question":  "A wife might tell her husband, \"You're the reason I'm getting\" what?",
        "answers":  [
                        {
                            "text":  "old & gray",
                            "points":  27
                        },
                        {
                            "text":  "a divorce",
                            "points":  25
                        },
                        {
                            "text":  "fat",
                            "points":  24
                        },
                        {
                            "text":  "angry/therapy",
                            "points":  7
                        },
                        {
                            "text":  "sick/headache",
                            "points":  4
                        },
                        {
                            "text":  "surgery/sex change",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120460,
        "question":  "Name some news a wife might have to break to her husband gently.",
        "answers":  [
                        {
                            "text":  "preggo/kid #9",
                            "points":  48
                        },
                        {
                            "text":  "it's over",
                            "points":  20
                        },
                        {
                            "text":  "totaled car",
                            "points":  10
                        },
                        {
                            "text":  "cheated/with 17 men",
                            "points":  6
                        },
                        {
                            "text":  "someone died",
                            "points":  3
                        },
                        {
                            "text":  "gonna be a grandpa",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120461,
        "question":  "Name a place you'd be shocked to see a man bring his inflatable doll as his date.",
        "answers":  [
                        {
                            "text":  "restaurant",
                            "points":  39
                        },
                        {
                            "text":  "movie",
                            "points":  14
                        },
                        {
                            "text":  "church",
                            "points":  13
                        },
                        {
                            "text":  "wedding",
                            "points":  10
                        },
                        {
                            "text":  "play/opera",
                            "points":  7
                        },
                        {
                            "text":  "bar/club",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  120462,
        "question":  "Name something that's spiky.",
        "answers":  [
                        {
                            "text":  "porcupine",
                            "points":  28
                        },
                        {
                            "text":  "hair/mohawk",
                            "points":  26
                        },
                        {
                            "text":  "cactus/plant",
                            "points":  18
                        },
                        {
                            "text":  "shoes/cleats",
                            "points":  8
                        },
                        {
                            "text":  "hedgehog",
                            "points":  5
                        },
                        {
                            "text":  "hairbrush",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120463,
        "question":  "Fill in the blank: Grandma found herself a sugar daddy. He bought her a new ______.",
        "answers":  [
                        {
                            "text":  "car",
                            "points":  49
                        },
                        {
                            "text":  "walker/cane",
                            "points":  15
                        },
                        {
                            "text":  "hip",
                            "points":  8
                        },
                        {
                            "text":  "set of dentures",
                            "points":  7
                        },
                        {
                            "text":  "muumuu/garb",
                            "points":  5
                        },
                        {
                            "text":  "recliner/rocker",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120464,
        "question":  "Name a part of Bob that might be on a cannibal's Bob-b-que grill.",
        "answers":  [
                        {
                            "text":  "thick thighs/legs",
                            "points":  42
                        },
                        {
                            "text":  "meaty ribs",
                            "points":  12
                        },
                        {
                            "text":  "head/brain",
                            "points":  10
                        },
                        {
                            "text":  "bulging arms",
                            "points":  9
                        },
                        {
                            "text":  "juicy booty",
                            "points":  8
                        },
                        {
                            "text":  "plump wiener/nads",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  120465,
        "question":  "Name something from the office that you'd get in trouble if you took it home.",
        "answers":  [
                        {
                            "text":  "computer",
                            "points":  41
                        },
                        {
                            "text":  "printer/copier",
                            "points":  18
                        },
                        {
                            "text":  "cash",
                            "points":  12
                        },
                        {
                            "text":  "classified files",
                            "points":  11
                        },
                        {
                            "text":  "vehicle/forklift",
                            "points":  3
                        },
                        {
                            "text":  "coworker/assistant",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120466,
        "question":  "We asked 100 married people... Tell me something a dog does that you might do while making love.",
        "answers":  [
                        {
                            "text":  "howl/bark/growl",
                            "points":  34
                        },
                        {
                            "text":  "lickity-lick/kiss",
                            "points":  23
                        },
                        {
                            "text":  "pant",
                            "points":  17
                        },
                        {
                            "text":  "sniff",
                            "points":  6
                        },
                        {
                            "text":  "snuggle",
                            "points":  4
                        },
                        {
                            "text":  "watch/stare",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120467,
        "question":  "Name something a woman is tempted to put in a sexy plumber's crack when he bends over.",
        "answers":  [
                        {
                            "text":  "money",
                            "points":  32
                        },
                        {
                            "text":  "hand/finger",
                            "points":  30
                        },
                        {
                            "text":  "her phone #",
                            "points":  9
                        },
                        {
                            "text":  "tool/plunger",
                            "points":  7
                        },
                        {
                            "text":  "ice/water",
                            "points":  6
                        },
                        {
                            "text":  "her mouth",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120468,
        "question":  "If you were going to jail for a long time, you'd do what one last time?",
        "answers":  [
                        {
                            "text":  "boink-a-thon",
                            "points":  30
                        },
                        {
                            "text":  "binge eat",
                            "points":  20
                        },
                        {
                            "text":  "get drunk",
                            "points":  19
                        },
                        {
                            "text":  "take trip/beach",
                            "points":  7
                        },
                        {
                            "text":  "see fam/friends",
                            "points":  7
                        },
                        {
                            "text":  "get high",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  120469,
        "question":  "Your boss just gave you $10,000 for Christmas. What do you do?",
        "answers":  [
                        {
                            "text":  "pay bills",
                            "points":  26
                        },
                        {
                            "text":  "save/invest",
                            "points":  22
                        },
                        {
                            "text":  "spend/buy house",
                            "points":  22
                        },
                        {
                            "text":  "vacaaay!",
                            "points":  11
                        },
                        {
                            "text":  "quit/retire on it",
                            "points":  4
                        },
                        {
                            "text":  "donate it",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120470,
        "question":  "When a magician is scanned at the airport security, what might they see he has in his pants?",
        "answers":  [
                        {
                            "text":  "3 rabbits",
                            "points":  44
                        },
                        {
                            "text":  "magic wand",
                            "points":  16
                        },
                        {
                            "text":  "biting bird",
                            "points":  11
                        },
                        {
                            "text":  "cards",
                            "points":  7
                        },
                        {
                            "text":  "scarves/hankies",
                            "points":  6
                        },
                        {
                            "text":  "flowers",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120471,
        "question":  "Name a word starting with an H that a woman might use to describe her ideal man.",
        "answers":  [
                        {
                            "text":  "handsome",
                            "points":  42
                        },
                        {
                            "text":  "hot/hottie",
                            "points":  27
                        },
                        {
                            "text":  "hunk",
                            "points":  8
                        },
                        {
                            "text":  "hung",
                            "points":  4
                        },
                        {
                            "text":  "happy",
                            "points":  3
                        },
                        {
                            "text":  "honest",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120472,
        "question":  "Fill in the blank: Some women call their man \"my honey ______.\"",
        "answers":  [
                        {
                            "text":  "honey bun",
                            "points":  38
                        },
                        {
                            "text":  "honey bear",
                            "points":  17
                        },
                        {
                            "text":  "honey bunny",
                            "points":  16
                        },
                        {
                            "text":  "honey pie",
                            "points":  7
                        },
                        {
                            "text":  "honeybunch",
                            "points":  5
                        },
                        {
                            "text":  "honey boo",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120473,
        "question":  "Name something that can ruin a wedding.",
        "answers":  [
                        {
                            "text":  "ex shows up",
                            "points":  25
                        },
                        {
                            "text":  "storm/weather",
                            "points":  23
                        },
                        {
                            "text":  "drunks",
                            "points":  17
                        },
                        {
                            "text":  "runaway bride/groom",
                            "points":  14
                        },
                        {
                            "text":  "annoying kid",
                            "points":  4
                        },
                        {
                            "text":  "cheating/2nd spouse",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120474,
        "question":  "Name somewhere you've accidentally caught someone with their pants down.",
        "answers":  [
                        {
                            "text":  "bathroom",
                            "points":  63
                        },
                        {
                            "text":  "dressing room",
                            "points":  7
                        },
                        {
                            "text":  "bedroom",
                            "points":  5
                        },
                        {
                            "text":  "gym/lockers",
                            "points":  4
                        },
                        {
                            "text":  "woods/bushes",
                            "points":  4
                        },
                        {
                            "text":  "work/boss' office",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120475,
        "question":  "Fill in the blank: A woman might say, \"I'm not dating any guy who is ______er than me.\"",
        "answers":  [
                        {
                            "text":  "shorter",
                            "points":  46
                        },
                        {
                            "text":  "cuter/hotter",
                            "points":  16
                        },
                        {
                            "text":  "taller",
                            "points":  8
                        },
                        {
                            "text":  "poorer",
                            "points":  6
                        },
                        {
                            "text":  "younger",
                            "points":  6
                        },
                        {
                            "text":  "thinner",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120476,
        "question":  "We asked 100 men... If there were a Mount Tushmore, which celebrity's bottom would you want to see up there carved in stone?",
        "answers":  [
                        {
                            "text":  "jennifer lopez",
                            "points":  34
                        },
                        {
                            "text":  "kim kardashian",
                            "points":  14
                        },
                        {
                            "text":  "beyonce",
                            "points":  14
                        },
                        {
                            "text":  "sofia vergara",
                            "points":  12
                        },
                        {
                            "text":  "julianne hough",
                            "points":  9
                        },
                        {
                            "text":  "pippa middleton",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120477,
        "question":  "Name a place a man fantasizes about making his mother-in-law sleep when she visits.",
        "answers":  [
                        {
                            "text":  "doghouse/outside",
                            "points":  25
                        },
                        {
                            "text":  "basement",
                            "points":  21
                        },
                        {
                            "text":  "garage",
                            "points":  17
                        },
                        {
                            "text":  "hotel",
                            "points":  9
                        },
                        {
                            "text":  "couch",
                            "points":  8
                        },
                        {
                            "text":  "coffin/grave",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  120478,
        "question":  "If two clowns got married, name something they might exchange instead of rings.",
        "answers":  [
                        {
                            "text":  "red noses",
                            "points":  55
                        },
                        {
                            "text":  "squeaky horns",
                            "points":  8
                        },
                        {
                            "text":  "balloon animals",
                            "points":  8
                        },
                        {
                            "text":  "rainbow wigs",
                            "points":  5
                        },
                        {
                            "text":  "squirt flowers",
                            "points":  4
                        },
                        {
                            "text":  "jokes/laughs",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120479,
        "question":  "Fill in the blank: If I had a magic wand, I would make my ______ disappear.",
        "answers":  [
                        {
                            "text":  "fat/6 chins",
                            "points":  43
                        },
                        {
                            "text":  "debt",
                            "points":  20
                        },
                        {
                            "text":  "family/spouse",
                            "points":  7
                        },
                        {
                            "text":  "pain/gonorrhea",
                            "points":  6
                        },
                        {
                            "text":  "worries/troubles",
                            "points":  5
                        },
                        {
                            "text":  "ex",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120480,
        "question":  "Name a place you would not want to spend your 100th birthday.",
        "answers":  [
                        {
                            "text":  "grave/hell",
                            "points":  40
                        },
                        {
                            "text":  "prison",
                            "points":  14
                        },
                        {
                            "text":  "hospital",
                            "points":  10
                        },
                        {
                            "text":  "old folks' home",
                            "points":  10
                        },
                        {
                            "text":  "theme park",
                            "points":  6
                        },
                        {
                            "text":  "chuck e. cheese",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120481,
        "question":  "Name something a wife might give her misbehaving husband.",
        "answers":  [
                        {
                            "text":  "slap/spanking",
                            "points":  39
                        },
                        {
                            "text":  "divorce papers",
                            "points":  16
                        },
                        {
                            "text":  "silent treatment",
                            "points":  10
                        },
                        {
                            "text":  "stink eye",
                            "points":  10
                        },
                        {
                            "text":  "lecture",
                            "points":  5
                        },
                        {
                            "text":  "an ultimatum",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120482,
        "question":  "We asked 100 women... Name a kind of dog your husband reminds you of when he barks at people.",
        "answers":  [
                        {
                            "text":  "pit bull",
                            "points":  28
                        },
                        {
                            "text":  "german shepherd",
                            "points":  20
                        },
                        {
                            "text":  "bulldog",
                            "points":  12
                        },
                        {
                            "text":  "chihuahua",
                            "points":  10
                        },
                        {
                            "text":  "doberman",
                            "points":  8
                        },
                        {
                            "text":  "rottweiler",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  120483,
        "question":  "No horse could carry Big Bart, the Wild West's chubbiest cowboy, so he rode what instead?",
        "answers":  [
                        {
                            "text":  "bull/cow",
                            "points":  27
                        },
                        {
                            "text":  "elephant",
                            "points":  19
                        },
                        {
                            "text":  "donkey/mule",
                            "points":  12
                        },
                        {
                            "text":  "buffalo/bison",
                            "points":  10
                        },
                        {
                            "text":  "ox",
                            "points":  9
                        },
                        {
                            "text":  "hippo",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  120484,
        "question":  "Name a public place that you shouldn't pop pimples on your face.",
        "answers":  [
                        {
                            "text":  "restaurant",
                            "points":  40
                        },
                        {
                            "text":  "church",
                            "points":  18
                        },
                        {
                            "text":  "store/mall",
                            "points":  14
                        },
                        {
                            "text":  "school",
                            "points":  4
                        },
                        {
                            "text":  "public restroom",
                            "points":  4
                        },
                        {
                            "text":  "library",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120485,
        "question":  "Name an L word you hope no one ever uses to describe you.",
        "answers":  [
                        {
                            "text":  "loser",
                            "points":  52
                        },
                        {
                            "text":  "lazy",
                            "points":  16
                        },
                        {
                            "text":  "liar",
                            "points":  4
                        },
                        {
                            "text":  "loose",
                            "points":  4
                        },
                        {
                            "text":  "lame",
                            "points":  3
                        },
                        {
                            "text":  "loopy",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120486,
        "question":  "Name someone you wish was as glad to see you as your dog is.",
        "answers":  [
                        {
                            "text":  "my boo",
                            "points":  51
                        },
                        {
                            "text":  "my kids",
                            "points":  11
                        },
                        {
                            "text":  "my friend",
                            "points":  6
                        },
                        {
                            "text":  "my boss",
                            "points":  5
                        },
                        {
                            "text":  "my parents",
                            "points":  5
                        },
                        {
                            "text":  "my cat",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120487,
        "question":  "I'm too afraid to run with the bulls, but I am up for running with what animal?",
        "answers":  [
                        {
                            "text":  "the puppies",
                            "points":  33
                        },
                        {
                            "text":  "the turtles",
                            "points":  17
                        },
                        {
                            "text":  "the kitties",
                            "points":  15
                        },
                        {
                            "text":  "the sloths",
                            "points":  8
                        },
                        {
                            "text":  "the bunnies",
                            "points":  5
                        },
                        {
                            "text":  "the chickens",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120488,
        "question":  "Name a nighttime activity that, for you, works better than any sleeping pill.",
        "answers":  [
                        {
                            "text":  "sex",
                            "points":  29
                        },
                        {
                            "text":  "reading",
                            "points":  24
                        },
                        {
                            "text":  "watching tv",
                            "points":  11
                        },
                        {
                            "text":  "cocktailing",
                            "points":  7
                        },
                        {
                            "text":  "hot bath/shower",
                            "points":  6
                        },
                        {
                            "text":  "game/online",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  120489,
        "question":  "Name something of yours that nobody would want after you die.",
        "answers":  [
                        {
                            "text":  "clothes/undies",
                            "points":  51
                        },
                        {
                            "text":  "bills/debt",
                            "points":  8
                        },
                        {
                            "text":  "toothbrush",
                            "points":  7
                        },
                        {
                            "text":  "books",
                            "points":  6
                        },
                        {
                            "text":  "body parts/ashes",
                            "points":  5
                        },
                        {
                            "text":  "pet/pissy cat",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120490,
        "question":  "Name a tool from the hardware store a dumb guy might buy to perform his own vasectomy.",
        "answers":  [
                        {
                            "text":  "chain saw",
                            "points":  33
                        },
                        {
                            "text":  "pliers",
                            "points":  17
                        },
                        {
                            "text":  "scissors/clippers",
                            "points":  10
                        },
                        {
                            "text":  "wire cutters",
                            "points":  7
                        },
                        {
                            "text":  "hammer",
                            "points":  7
                        },
                        {
                            "text":  "knife",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  120491,
        "question":  "Name something you think Steve Harvey gives to his sons on their birthday.",
        "answers":  [
                        {
                            "text":  "$100,000/gift card",
                            "points":  50
                        },
                        {
                            "text":  "bentleys",
                            "points":  9
                        },
                        {
                            "text":  "used suits/clothes",
                            "points":  7
                        },
                        {
                            "text":  "advice",
                            "points":  6
                        },
                        {
                            "text":  "feud board game",
                            "points":  4
                        },
                        {
                            "text":  "hugs & kisses",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120492,
        "question":  "Tell me why you're talking funny.",
        "answers":  [
                        {
                            "text":  "dentist/toothache",
                            "points":  39
                        },
                        {
                            "text":  "i'm drunk",
                            "points":  18
                        },
                        {
                            "text":  "sick/cold",
                            "points":  7
                        },
                        {
                            "text":  "helium",
                            "points":  6
                        },
                        {
                            "text":  "talking to a baby",
                            "points":  5
                        },
                        {
                            "text":  "mouthful of food",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120493,
        "question":  "Name something you've stuck your finger in more times than you can count.",
        "answers":  [
                        {
                            "text":  "food/peanut butter",
                            "points":  32
                        },
                        {
                            "text":  "ear",
                            "points":  21
                        },
                        {
                            "text":  "nose",
                            "points":  11
                        },
                        {
                            "text":  "mouth",
                            "points":  9
                        },
                        {
                            "text":  "glove",
                            "points":  3
                        },
                        {
                            "text":  "dirt/mud",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120494,
        "question":  "Name a place you'd be shocked to hear your grandparents say they made love last night.",
        "answers":  [
                        {
                            "text":  "car/on hood",
                            "points":  32
                        },
                        {
                            "text":  "my bed!",
                            "points":  14
                        },
                        {
                            "text":  "kitchen/dining table",
                            "points":  12
                        },
                        {
                            "text":  "sofa/living rm.",
                            "points":  8
                        },
                        {
                            "text":  "park/bench",
                            "points":  7
                        },
                        {
                            "text":  "anywhere!",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  120495,
        "question":  "Name a famous rich man whose money is a 10 but whose looks are barely a 5.",
        "answers":  [
                        {
                            "text":  "elon musk",
                            "points":  25
                        },
                        {
                            "text":  "donald trump",
                            "points":  25
                        },
                        {
                            "text":  "bill gates",
                            "points":  17
                        },
                        {
                            "text":  "jeff bezos",
                            "points":  4
                        },
                        {
                            "text":  "mark zuckerberg",
                            "points":  3
                        },
                        {
                            "text":  "steve harvey",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120496,
        "question":  "We asked 100 women... Give me a word starting with W that describes your man in the bedroom.",
        "answers":  [
                        {
                            "text":  "wild",
                            "points":  42
                        },
                        {
                            "text":  "warm",
                            "points":  12
                        },
                        {
                            "text":  "wonderful",
                            "points":  9
                        },
                        {
                            "text":  "weirdo",
                            "points":  6
                        },
                        {
                            "text":  "white",
                            "points":  3
                        },
                        {
                            "text":  "wow!",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120497,
        "question":  "Name an animal a wife doesn't mind her husband calling her.",
        "answers":  [
                        {
                            "text":  "kitten/cat",
                            "points":  40
                        },
                        {
                            "text":  "tigress",
                            "points":  12
                        },
                        {
                            "text":  "bunny",
                            "points":  8
                        },
                        {
                            "text":  "lioness",
                            "points":  5
                        },
                        {
                            "text":  "fox",
                            "points":  5
                        },
                        {
                            "text":  "deer/doe",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  120498,
        "question":  "Name something a wife might fantasize about hitting her husband with.",
        "answers":  [
                        {
                            "text":  "pot/pan",
                            "points":  32
                        },
                        {
                            "text":  "baseball bat",
                            "points":  26
                        },
                        {
                            "text":  "her fist/hand",
                            "points":  5
                        },
                        {
                            "text":  "rolling pin",
                            "points":  4
                        },
                        {
                            "text":  "food/dead fish",
                            "points":  4
                        },
                        {
                            "text":  "pillow",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120499,
        "question":  "If space aliens landed in the U.S., they'd probably feel most at home in what state?",
        "answers":  [
                        {
                            "text":  "california",
                            "points":  27
                        },
                        {
                            "text":  "florida",
                            "points":  19
                        },
                        {
                            "text":  "new mexico",
                            "points":  9
                        },
                        {
                            "text":  "arizona",
                            "points":  8
                        },
                        {
                            "text":  "nevada",
                            "points":  5
                        },
                        {
                            "text":  "new york",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  120500,
        "question":  "There's nothing sexier than a pair of hot what?",
        "answers":  [
                        {
                            "text":  "pants/shorts",
                            "points":  19
                        },
                        {
                            "text":  "buns",
                            "points":  16
                        },
                        {
                            "text":  "legs",
                            "points":  13
                        },
                        {
                            "text":  "ta-tas",
                            "points":  10
                        },
                        {
                            "text":  "undies",
                            "points":  7
                        },
                        {
                            "text":  "heels/shoes",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  120501,
        "question":  "We asked 100 women... If a man has one of these, he's too old for you.",
        "answers":  [
                        {
                            "text":  "grandchild",
                            "points":  18
                        },
                        {
                            "text":  "walker/cane",
                            "points":  15
                        },
                        {
                            "text":  "gray hair",
                            "points":  12
                        },
                        {
                            "text":  "hearing aid",
                            "points":  10
                        },
                        {
                            "text":  "oxygen tank",
                            "points":  10
                        },
                        {
                            "text":  "set of dentures",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  120502,
        "question":  "Name something of yours you'd hate to find out your neighbor used without asking.",
        "answers":  [
                        {
                            "text":  "mower/tools",
                            "points":  23
                        },
                        {
                            "text":  "car",
                            "points":  18
                        },
                        {
                            "text":  "toothbrush",
                            "points":  18
                        },
                        {
                            "text":  "pool/hot tub",
                            "points":  8
                        },
                        {
                            "text":  "hose/water",
                            "points":  8
                        },
                        {
                            "text":  "my trampy spouse",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  120503,
        "question":  "Name something you'd be surprised Judge Judy put on after she took off her robe.",
        "answers":  [
                        {
                            "text":  "bikini",
                            "points":  22
                        },
                        {
                            "text":  "lingerie/thong",
                            "points":  17
                        },
                        {
                            "text":  "booty shorts",
                            "points":  10
                        },
                        {
                            "text":  "dress/miniskirt",
                            "points":  8
                        },
                        {
                            "text":  "biker jacket",
                            "points":  7
                        },
                        {
                            "text":  "another robe",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  120504,
        "question":  "Give me an ice cream flavor that a stripper might use as her stage name.",
        "answers":  [
                        {
                            "text":  "rocky road",
                            "points":  17
                        },
                        {
                            "text":  "chocolate/chip",
                            "points":  15
                        },
                        {
                            "text":  "vanilla",
                            "points":  14
                        },
                        {
                            "text":  "black cherry",
                            "points":  9
                        },
                        {
                            "text":  "cotton candy",
                            "points":  7
                        },
                        {
                            "text":  "mint/peppermint",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  120505,
        "question":  "Tell me where Bad Grandma hides her weed.",
        "answers":  [
                        {
                            "text":  "bra/cleavage",
                            "points":  22
                        },
                        {
                            "text":  "cookie jar",
                            "points":  13
                        },
                        {
                            "text":  "nightstand/dresser",
                            "points":  10
                        },
                        {
                            "text":  "under bed/pillow",
                            "points":  9
                        },
                        {
                            "text":  "purse",
                            "points":  8
                        },
                        {
                            "text":  "denture container",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  120506,
        "question":  "Name something that you realized was a big mistake soon after you got it.",
        "answers":  [
                        {
                            "text":  "mate/spouse 1 thru 6",
                            "points":  18
                        },
                        {
                            "text":  "car/pinto",
                            "points":  16
                        },
                        {
                            "text":  "pet/cuss'g parrot",
                            "points":  15
                        },
                        {
                            "text":  "garb/wool thong",
                            "points":  11
                        },
                        {
                            "text":  "house/apt.",
                            "points":  4
                        },
                        {
                            "text":  "haircut/perm",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120507,
        "question":  "Name a football player who's the man.",
        "answers":  [
                        {
                            "text":  "tom brady",
                            "points":  40
                        },
                        {
                            "text":  "patrick mahomes",
                            "points":  8
                        },
                        {
                            "text":  "aaron rodgers",
                            "points":  7
                        },
                        {
                            "text":  "ben roethlisberger",
                            "points":  4
                        },
                        {
                            "text":  "peyton manning",
                            "points":  4
                        },
                        {
                            "text":  "joe namath",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120508,
        "question":  "I'd like to have a clone so if I needed what body part, I could take theirs?",
        "answers":  [
                        {
                            "text":  "heart",
                            "points":  27
                        },
                        {
                            "text":  "kidney",
                            "points":  14
                        },
                        {
                            "text":  "leg/knee",
                            "points":  7
                        },
                        {
                            "text":  "weenie",
                            "points":  6
                        },
                        {
                            "text":  "eyes",
                            "points":  6
                        },
                        {
                            "text":  "brain",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  120509,
        "question":  "A young pop star aspires to be as big as who?",
        "answers":  [
                        {
                            "text":  "elvis",
                            "points":  26
                        },
                        {
                            "text":  "michael jackson",
                            "points":  18
                        },
                        {
                            "text":  "taylor swift",
                            "points":  6
                        },
                        {
                            "text":  "beyonce",
                            "points":  6
                        },
                        {
                            "text":  "justin bieber",
                            "points":  5
                        },
                        {
                            "text":  "madonna",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  120510,
        "question":  "Name something that's round and white.",
        "answers":  [
                        {
                            "text":  "golf ball",
                            "points":  22
                        },
                        {
                            "text":  "snowball/snowman",
                            "points":  22
                        },
                        {
                            "text":  "pearl",
                            "points":  6
                        },
                        {
                            "text":  "cotton ball",
                            "points":  5
                        },
                        {
                            "text":  "marshmallow",
                            "points":  5
                        },
                        {
                            "text":  "baseball",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  120511,
        "question":  "Name something about your life that has your mother very disappointed.",
        "answers":  [
                        {
                            "text":  "job/not a priest",
                            "points":  17
                        },
                        {
                            "text":  "loser spouse",
                            "points":  17
                        },
                        {
                            "text":  "no kids",
                            "points":  13
                        },
                        {
                            "text":  "nada/i'm perfect!",
                            "points":  8
                        },
                        {
                            "text":  "house/location",
                            "points":  5
                        },
                        {
                            "text":  "2nd grade education",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  120512,
        "question":  "Name the most impressive occupation a person can have.",
        "answers":  [
                        {
                            "text":  "doctor",
                            "points":  39
                        },
                        {
                            "text":  "astronaut",
                            "points":  7
                        },
                        {
                            "text":  "teacher",
                            "points":  5
                        },
                        {
                            "text":  "scientist",
                            "points":  5
                        },
                        {
                            "text":  "prez/politician",
                            "points":  4
                        },
                        {
                            "text":  "ceo",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120513,
        "question":  "Name something you do to your kids you'd never do to an adult.",
        "answers":  [
                        {
                            "text":  "spank 'em",
                            "points":  24
                        },
                        {
                            "text":  "time-out/ground",
                            "points":  11
                        },
                        {
                            "text":  "yell at 'em",
                            "points":  10
                        },
                        {
                            "text":  "feed 'em",
                            "points":  7
                        },
                        {
                            "text":  "tickle 'em",
                            "points":  7
                        },
                        {
                            "text":  "smooches & hugs",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  120514,
        "question":  "Fill in the blank: Because it's heaven, when you're there, you'll finally have the ______ you always wanted.",
        "answers":  [
                        {
                            "text":  "smokin' bod",
                            "points":  27
                        },
                        {
                            "text":  "peace",
                            "points":  14
                        },
                        {
                            "text":  "love life",
                            "points":  7
                        },
                        {
                            "text":  "face/jawline",
                            "points":  6
                        },
                        {
                            "text":  "mansion",
                            "points":  5
                        },
                        {
                            "text":  "free time",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120515,
        "question":  "Name one state that you'd choose to represent the entire United States.",
        "answers":  [
                        {
                            "text":  "california",
                            "points":  16
                        },
                        {
                            "text":  "new york",
                            "points":  13
                        },
                        {
                            "text":  "texas",
                            "points":  11
                        },
                        {
                            "text":  "florida",
                            "points":  9
                        },
                        {
                            "text":  "hawaii",
                            "points":  8
                        },
                        {
                            "text":  "ohio",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  120516,
        "question":  "Name something that might be going down.",
        "answers":  [
                        {
                            "text":  "elevator",
                            "points":  16
                        },
                        {
                            "text":  "ship/titanic",
                            "points":  13
                        },
                        {
                            "text":  "plane",
                            "points":  10
                        },
                        {
                            "text":  "stocks/economy",
                            "points":  9
                        },
                        {
                            "text":  "temperature/fever",
                            "points":  7
                        },
                        {
                            "text":  "drug deal/a crime",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  120517,
        "question":  "Name a singer whose music pairs well with lovemaking.",
        "answers":  [
                        {
                            "text":  "barry white",
                            "points":  22
                        },
                        {
                            "text":  "adele",
                            "points":  13
                        },
                        {
                            "text":  "luther vandross",
                            "points":  8
                        },
                        {
                            "text":  "marvin gaye",
                            "points":  5
                        },
                        {
                            "text":  "lionel richie",
                            "points":  5
                        },
                        {
                            "text":  "whitney houston",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120518,
        "question":  "Name a place that, for you, is the closest thing there is to hell on Earth.",
        "answers":  [
                        {
                            "text":  "work/mtg.",
                            "points":  19
                        },
                        {
                            "text":  "doc/dentist/e.r.",
                            "points":  13
                        },
                        {
                            "text":  "dmv",
                            "points":  11
                        },
                        {
                            "text":  "desert",
                            "points":  5
                        },
                        {
                            "text":  "volcano",
                            "points":  5
                        },
                        {
                            "text":  "los angeles",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120519,
        "question":  "Name an occupation that makes a lot of money but you wouldn't want to work in it.",
        "answers":  [
                        {
                            "text":  "doctor",
                            "points":  19
                        },
                        {
                            "text":  "lawyer",
                            "points":  10
                        },
                        {
                            "text":  "finance/stock broker",
                            "points":  10
                        },
                        {
                            "text":  "politician",
                            "points":  7
                        },
                        {
                            "text":  "plumber/sewer work",
                            "points":  6
                        },
                        {
                            "text":  "truck driver",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  120520,
        "question":  "You'd be shocked to hear the bride and groom brought who along on their honeymoon?",
        "answers":  [
                        {
                            "text":  "parents",
                            "points":  65
                        },
                        {
                            "text":  "lover/an ex",
                            "points":  18
                        },
                        {
                            "text":  "pet/kitty",
                            "points":  8
                        },
                        {
                            "text":  "the kids",
                            "points":  6
                        },
                        {
                            "text":  "grandparents",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120521,
        "question":  "Name something an elf might get teased about that hurts his feelings.",
        "answers":  [
                        {
                            "text":  "his wee bod",
                            "points":  59
                        },
                        {
                            "text":  "big ears",
                            "points":  33
                        },
                        {
                            "text":  "pointy nose",
                            "points":  3
                        },
                        {
                            "text":  "nerdy clothes",
                            "points":  3
                        },
                        {
                            "text":  "worst toymaker",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120522,
        "question":  "There's nothing better than a big, juicy what?",
        "answers":  [
                        {
                            "text":  "steak/burger",
                            "points":  58
                        },
                        {
                            "text":  "peach/fruit",
                            "points":  34
                        },
                        {
                            "text":  "sausage/wiener",
                            "points":  3
                        },
                        {
                            "text":  "kiss",
                            "points":  3
                        },
                        {
                            "text":  "booty/babe",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120523,
        "question":  "We asked 100 married men... When you first met your wife, she had a much better what?",
        "answers":  [
                        {
                            "text":  "body",
                            "points":  48
                        },
                        {
                            "text":  "personality/'tude",
                            "points":  29
                        },
                        {
                            "text":  "sex drive",
                            "points":  15
                        },
                        {
                            "text":  "car",
                            "points":  5
                        },
                        {
                            "text":  "face/smile",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120524,
        "question":  "We asked 100 single men... Your mom wants you to find a nice girl. You want to find one who has what?",
        "answers":  [
                        {
                            "text":  "great body",
                            "points":  47
                        },
                        {
                            "text":  "job/$ to support me",
                            "points":  31
                        },
                        {
                            "text":  "pretty face",
                            "points":  18
                        },
                        {
                            "text":  "faith",
                            "points":  2
                        },
                        {
                            "text":  "few-to-no morals",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120525,
        "question":  "What holiday probably leads to the most hangovers?",
        "answers":  [
                        {
                            "text":  "new year's",
                            "points":  84
                        },
                        {
                            "text":  "st. patrick's day",
                            "points":  9
                        },
                        {
                            "text":  "mardi gras",
                            "points":  2
                        },
                        {
                            "text":  "christmas",
                            "points":  2
                        },
                        {
                            "text":  "4th of july",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120526,
        "question":  "Bertha's family was so awful that at her funeral, they stole what right off her body?",
        "answers":  [
                        {
                            "text":  "jewelry/watch",
                            "points":  83
                        },
                        {
                            "text":  "clothes",
                            "points":  10
                        },
                        {
                            "text":  "glasses",
                            "points":  2
                        },
                        {
                            "text":  "gold teeth",
                            "points":  2
                        },
                        {
                            "text":  "wig",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120527,
        "question":  "What do you think of when you hear the word \"bud\"?",
        "answers":  [
                        {
                            "text":  "beer/bud light",
                            "points":  63
                        },
                        {
                            "text":  "flower",
                            "points":  16
                        },
                        {
                            "text":  "weed",
                            "points":  9
                        },
                        {
                            "text":  "friend",
                            "points":  9
                        },
                        {
                            "text":  "earbuds",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120528,
        "question":  "Bob told his ex-wife, \"When we had sex, I pretended I was making love to your\" who?",
        "answers":  [
                        {
                            "text":  "sister",
                            "points":  60
                        },
                        {
                            "text":  "best friend",
                            "points":  25
                        },
                        {
                            "text":  "mom",
                            "points":  9
                        },
                        {
                            "text":  "boss",
                            "points":  3
                        },
                        {
                            "text":  "brother",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120529,
        "question":  "We asked 100 married men... Name something you give your wife that you'd never give to your mother-in-law.",
        "answers":  [
                        {
                            "text":  "lingerie/edible",
                            "points":  52
                        },
                        {
                            "text":  "big \"o\"/baby",
                            "points":  24
                        },
                        {
                            "text":  "kinky toy",
                            "points":  11
                        },
                        {
                            "text":  "french kiss",
                            "points":  7
                        },
                        {
                            "text":  "foot/back rub",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  120530,
        "question":  "When an 80-year-old male stripper hears \"Take it off! Take it off,\" besides clothing, what might he take off?",
        "answers":  [
                        {
                            "text":  "toupee",
                            "points":  42
                        },
                        {
                            "text":  "dentures",
                            "points":  29
                        },
                        {
                            "text":  "hearing aid",
                            "points":  15
                        },
                        {
                            "text":  "glasses",
                            "points":  9
                        },
                        {
                            "text":  "loaded diaper",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120531,
        "question":  "We asked 100 men... Name something a woman and bacon might have in common.",
        "answers":  [
                        {
                            "text":  "tasty",
                            "points":  35
                        },
                        {
                            "text":  "smell good",
                            "points":  28
                        },
                        {
                            "text":  "fatty",
                            "points":  19
                        },
                        {
                            "text":  "sizzlin' hot!",
                            "points":  15
                        },
                        {
                            "text":  "bad for you",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120532,
        "question":  "Name a famous mouse that an exterminator would hate to discover he just terminated.",
        "answers":  [
                        {
                            "text":  "mickey mouse",
                            "points":  85
                        },
                        {
                            "text":  "jerry",
                            "points":  6
                        },
                        {
                            "text":  "mighty mouse",
                            "points":  3
                        },
                        {
                            "text":  "minnie mouse",
                            "points":  2
                        },
                        {
                            "text":  "speedy gonzales",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120533,
        "question":  "An angry wife might clean the toilet with her cheating husband's what?",
        "answers":  [
                        {
                            "text":  "toothbrush",
                            "points":  82
                        },
                        {
                            "text":  "clothes",
                            "points":  7
                        },
                        {
                            "text":  "face",
                            "points":  4
                        },
                        {
                            "text":  "hairbrush",
                            "points":  3
                        },
                        {
                            "text":  "washcloth/towel",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120534,
        "question":  "You hope the person above you on a Ferris wheel doesn't do what?",
        "answers":  [
                        {
                            "text":  "blow chunks",
                            "points":  75
                        },
                        {
                            "text":  "spew poo/pee",
                            "points":  10
                        },
                        {
                            "text":  "spit",
                            "points":  9
                        },
                        {
                            "text":  "fall/jump off",
                            "points":  2
                        },
                        {
                            "text":  "spill food/drink",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120535,
        "question":  "We asked 100 men... When you're camping, name something you hope isn't waiting for you in the sleeping bag.",
        "answers":  [
                        {
                            "text":  "snake",
                            "points":  69
                        },
                        {
                            "text":  "bear",
                            "points":  19
                        },
                        {
                            "text":  "spider",
                            "points":  4
                        },
                        {
                            "text":  "fire ants",
                            "points":  3
                        },
                        {
                            "text":  "creepy stranger",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120536,
        "question":  "You think dog owners are too close to their dogs when they let them do what?",
        "answers":  [
                        {
                            "text":  "lick/french",
                            "points":  43
                        },
                        {
                            "text":  "share food",
                            "points":  31
                        },
                        {
                            "text":  "share bed/during sex",
                            "points":  20
                        },
                        {
                            "text":  "potty on floor",
                            "points":  2
                        },
                        {
                            "text":  "sit on sofa",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120537,
        "question":  "We asked 100 women... What would you do if your man had a big hickey and it wasn't from you?",
        "answers":  [
                        {
                            "text":  "dump the scumbag",
                            "points":  40
                        },
                        {
                            "text":  "question him",
                            "points":  25
                        },
                        {
                            "text":  "hurt/kill him",
                            "points":  25
                        },
                        {
                            "text":  "scream/cry",
                            "points":  6
                        },
                        {
                            "text":  "get my own",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120538,
        "question":  "Name a sea creature that would be finding Nemo and then eating Nemo.",
        "answers":  [
                        {
                            "text":  "shark",
                            "points":  84
                        },
                        {
                            "text":  "whale",
                            "points":  6
                        },
                        {
                            "text":  "barracuda",
                            "points":  3
                        },
                        {
                            "text":  "dolphin",
                            "points":  2
                        },
                        {
                            "text":  "sea turtle",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120539,
        "question":  "Name a place that's not bad to be caught with your pants down.",
        "answers":  [
                        {
                            "text":  "home/shower",
                            "points":  81
                        },
                        {
                            "text":  "doctor's office",
                            "points":  10
                        },
                        {
                            "text":  "pool",
                            "points":  2
                        },
                        {
                            "text":  "the tailor",
                            "points":  2
                        },
                        {
                            "text":  "dressing room",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120540,
        "question":  "Your lover is dieting. Name a low-calorie food you might make your edible underwear out of.",
        "answers":  [
                        {
                            "text":  "veggies/cabbage",
                            "points":  60
                        },
                        {
                            "text":  "fruit/berries",
                            "points":  29
                        },
                        {
                            "text":  "tofu",
                            "points":  4
                        },
                        {
                            "text":  "rice/paper",
                            "points":  2
                        },
                        {
                            "text":  "yogurt",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120541,
        "question":  "Name a complaint a woman might have about her man's tighty-whities.",
        "answers":  [
                        {
                            "text":  "dirty",
                            "points":  60
                        },
                        {
                            "text":  "holes",
                            "points":  17
                        },
                        {
                            "text":  "too tight/small",
                            "points":  16
                        },
                        {
                            "text":  "they're white",
                            "points":  2
                        },
                        {
                            "text":  "juvenile",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120542,
        "question":  "If insects ruled the world, name a way we kill them they might kill us.",
        "answers":  [
                        {
                            "text":  "squash/swat",
                            "points":  51
                        },
                        {
                            "text":  "poison",
                            "points":  36
                        },
                        {
                            "text":  "burn/magnify'g glass",
                            "points":  5
                        },
                        {
                            "text":  "electrocution",
                            "points":  3
                        },
                        {
                            "text":  "pull off heads",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120543,
        "question":  "Name someone Cinderella probably discusses with her therapist.",
        "answers":  [
                        {
                            "text":  "stepmother",
                            "points":  50
                        },
                        {
                            "text":  "prince charming",
                            "points":  21
                        },
                        {
                            "text":  "stepsisters",
                            "points":  21
                        },
                        {
                            "text":  "fairy godmother",
                            "points":  3
                        },
                        {
                            "text":  "her singing mice",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120544,
        "question":  "We asked 100 women... You kiss your husband the day you get married. Now name something you wish you could do to him the day you get divorced.",
        "answers":  [
                        {
                            "text":  "wallop/break leg",
                            "points":  43
                        },
                        {
                            "text":  "kill/behead",
                            "points":  30
                        },
                        {
                            "text":  "kiss goodbye",
                            "points":  14
                        },
                        {
                            "text":  "take every cent!",
                            "points":  7
                        },
                        {
                            "text":  "avoid/forget",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120545,
        "question":  "Name something that's fun to bounce on when you're young but dangerous if you're old.",
        "answers":  [
                        {
                            "text":  "trampoline",
                            "points":  58
                        },
                        {
                            "text":  "bed",
                            "points":  24
                        },
                        {
                            "text":  "bounce house",
                            "points":  6
                        },
                        {
                            "text":  "ball/yoga ball",
                            "points":  6
                        },
                        {
                            "text":  "pogo stick",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120546,
        "question":  "We asked 100 married men... If you inherited a fortune, what's the first thing you'd give your wife?",
        "answers":  [
                        {
                            "text":  "half/some of it",
                            "points":  23
                        },
                        {
                            "text":  "new house",
                            "points":  23
                        },
                        {
                            "text":  "car/my old one",
                            "points":  22
                        },
                        {
                            "text":  "vacay/to paris",
                            "points":  14
                        },
                        {
                            "text":  "divorce papers",
                            "points":  14
                        }
                    ]
    },
    {
        "id":  120547,
        "question":  "Name something a magician hopes the rabbit in his hat doesn't do.",
        "answers":  [
                        {
                            "text":  "pee/poop",
                            "points":  72
                        },
                        {
                            "text":  "vanish/run",
                            "points":  14
                        },
                        {
                            "text":  "bite him",
                            "points":  4
                        },
                        {
                            "text":  "die",
                            "points":  3
                        },
                        {
                            "text":  "eat the hat",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120548,
        "question":  "A doctor would be stunned if a baby did what the moment it was born?",
        "answers":  [
                        {
                            "text":  "spoke/recited poem",
                            "points":  65
                        },
                        {
                            "text":  "laughed/smiled",
                            "points":  16
                        },
                        {
                            "text":  "a song & dance",
                            "points":  7
                        },
                        {
                            "text":  "walked",
                            "points":  5
                        },
                        {
                            "text":  "high five/slap",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120549,
        "question":  "Name something a stand-up comedian never wants to have an audience do.",
        "answers":  [
                        {
                            "text":  "boo/heckle",
                            "points":  56
                        },
                        {
                            "text":  "walk out",
                            "points":  24
                        },
                        {
                            "text":  "silent/no laughs",
                            "points":  10
                        },
                        {
                            "text":  "cry/be sad",
                            "points":  3
                        },
                        {
                            "text":  "fall asleep",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120550,
        "question":  "Name something you might put in your mouth when you're nervous.",
        "answers":  [
                        {
                            "text":  "food/gum",
                            "points":  47
                        },
                        {
                            "text":  "fingers/nails",
                            "points":  26
                        },
                        {
                            "text":  "pen/pencil",
                            "points":  13
                        },
                        {
                            "text":  "cigarette",
                            "points":  5
                        },
                        {
                            "text":  "\"your foot\"",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120551,
        "question":  "Name the very worst occasion to get dumped.",
        "answers":  [
                        {
                            "text":  "valentine's day",
                            "points":  39
                        },
                        {
                            "text":  "wedding/at altar",
                            "points":  21
                        },
                        {
                            "text":  "birthday",
                            "points":  18
                        },
                        {
                            "text":  "christmas",
                            "points":  11
                        },
                        {
                            "text":  "a funeral",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120552,
        "question":  "Fill in the blank: The baker told his date, \"I'm a baker, so I know how to ______ your buns.\"",
        "answers":  [
                        {
                            "text":  "bake/heat/burn",
                            "points":  47
                        },
                        {
                            "text":  "knead/massage",
                            "points":  18
                        },
                        {
                            "text":  "butter",
                            "points":  13
                        },
                        {
                            "text":  "frost/glaze",
                            "points":  8
                        },
                        {
                            "text":  "pat/whip",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  120553,
        "question":  "Grandma was so sick of grandpa that she rolled him and his wheelchair right into what?",
        "answers":  [
                        {
                            "text":  "lake/water",
                            "points":  39
                        },
                        {
                            "text":  "traffic",
                            "points":  33
                        },
                        {
                            "text":  "other room/closet",
                            "points":  8
                        },
                        {
                            "text":  "the wall",
                            "points":  7
                        },
                        {
                            "text":  "nursing home",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120554,
        "question":  "We asked 100 men... Fill in the blank: For a dress to be sexy, it has to be ______.",
        "answers":  [
                        {
                            "text":  "tight/fitted",
                            "points":  31
                        },
                        {
                            "text":  "short",
                            "points":  24
                        },
                        {
                            "text":  "low-cut",
                            "points":  16
                        },
                        {
                            "text":  "black",
                            "points":  13
                        },
                        {
                            "text":  "backless",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  120555,
        "question":  "We asked 100 women... Name something that's more fun to do with other women than with a man.",
        "answers":  [
                        {
                            "text":  "shop",
                            "points":  55
                        },
                        {
                            "text":  "gossip",
                            "points":  14
                        },
                        {
                            "text":  "drink/bars",
                            "points":  14
                        },
                        {
                            "text":  "make out",
                            "points":  3
                        },
                        {
                            "text":  "spa/mani-pedis",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120556,
        "question":  "Name something that can only stretch so far.",
        "answers":  [
                        {
                            "text":  "$/budget",
                            "points":  41
                        },
                        {
                            "text":  "body/skin",
                            "points":  18
                        },
                        {
                            "text":  "rubber band",
                            "points":  16
                        },
                        {
                            "text":  "clothes/belt",
                            "points":  8
                        },
                        {
                            "text":  "patience",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  120557,
        "question":  "We asked 100 married men... Name an S word that your wife calls you the most often.",
        "answers":  [
                        {
                            "text":  "sweetheart",
                            "points":  29
                        },
                        {
                            "text":  "sexy",
                            "points":  19
                        },
                        {
                            "text":  "stupid",
                            "points":  18
                        },
                        {
                            "text":  "slob",
                            "points":  12
                        },
                        {
                            "text":  "smart",
                            "points":  11
                        }
                    ]
    },
    {
        "id":  120558,
        "question":  "Real or fictional, name a famous Harry.",
        "answers":  [
                        {
                            "text":  "harry potter",
                            "points":  58
                        },
                        {
                            "text":  "harry houdini",
                            "points":  13
                        },
                        {
                            "text":  "prince harry",
                            "points":  7
                        },
                        {
                            "text":  "harry styles",
                            "points":  5
                        },
                        {
                            "text":  "harry truman",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120559,
        "question":  "If a deli owner got married, instead of confetti, the guests might throw what?",
        "answers":  [
                        {
                            "text":  "salami/meat",
                            "points":  49
                        },
                        {
                            "text":  "cheese",
                            "points":  13
                        },
                        {
                            "text":  "bread/crumbs",
                            "points":  10
                        },
                        {
                            "text":  "rice...duh!",
                            "points":  9
                        },
                        {
                            "text":  "lettuce",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  120560,
        "question":  "Name a state that might also be a woman's first name.",
        "answers":  [
                        {
                            "text":  "georgia",
                            "points":  39
                        },
                        {
                            "text":  "virginia",
                            "points":  32
                        },
                        {
                            "text":  "arizona",
                            "points":  5
                        },
                        {
                            "text":  "dakota",
                            "points":  5
                        },
                        {
                            "text":  "florida",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120561,
        "question":  "Name something a kid might put under his pillow to try to trick the Tooth Fairy into thinking it's his tooth.",
        "answers":  [
                        {
                            "text":  "pebble",
                            "points":  28
                        },
                        {
                            "text":  "chiclets/candy",
                            "points":  26
                        },
                        {
                            "text":  "popcorn",
                            "points":  12
                        },
                        {
                            "text":  "fake tooth/dog's",
                            "points":  9
                        },
                        {
                            "text":  "mini marshmallow",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  120562,
        "question":  "If People magazine had a \"Sexiest Bald Man Alive\" issue, who would be on the cover?",
        "answers":  [
                        {
                            "text":  "the rock",
                            "points":  39
                        },
                        {
                            "text":  "steve harvey",
                            "points":  28
                        },
                        {
                            "text":  "bruce willis",
                            "points":  8
                        },
                        {
                            "text":  "patrick stewart",
                            "points":  3
                        },
                        {
                            "text":  "stanley tucci",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120563,
        "question":  "Fill in the blank: Ray ______.",
        "answers":  [
                        {
                            "text":  "ray-ban",
                            "points":  39
                        },
                        {
                            "text":  "ray charles",
                            "points":  23
                        },
                        {
                            "text":  "ray liotta",
                            "points":  7
                        },
                        {
                            "text":  "ray romano",
                            "points":  6
                        },
                        {
                            "text":  "ray gun",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  120564,
        "question":  "Name a place where we might see you flat on your back.",
        "answers":  [
                        {
                            "text":  "bedroom",
                            "points":  45
                        },
                        {
                            "text":  "beach",
                            "points":  12
                        },
                        {
                            "text":  "doc/hospital",
                            "points":  12
                        },
                        {
                            "text":  "gym/yoga class",
                            "points":  7
                        },
                        {
                            "text":  "chiropractor",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120565,
        "question":  "Name something you might ride on standing up.",
        "answers":  [
                        {
                            "text":  "subway/train",
                            "points":  30
                        },
                        {
                            "text":  "bus",
                            "points":  20
                        },
                        {
                            "text":  "elevator",
                            "points":  13
                        },
                        {
                            "text":  "scooter",
                            "points":  10
                        },
                        {
                            "text":  "skateboard",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  120566,
        "question":  "Name something a woman might find if she ran her fingers through a magician's hair.",
        "answers":  [
                        {
                            "text":  "bunny",
                            "points":  28
                        },
                        {
                            "text":  "coin",
                            "points":  23
                        },
                        {
                            "text":  "deck of cards",
                            "points":  16
                        },
                        {
                            "text":  "grease/hair product",
                            "points":  6
                        },
                        {
                            "text":  "bird/dove",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  120567,
        "question":  "Name something of yours that, for you, was love at first sight.",
        "answers":  [
                        {
                            "text":  "car",
                            "points":  22
                        },
                        {
                            "text":  "pet/gerbil",
                            "points":  20
                        },
                        {
                            "text":  "mate/3rd wife",
                            "points":  17
                        },
                        {
                            "text":  "kid/grandkid",
                            "points":  14
                        },
                        {
                            "text":  "chocolate/food",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  120568,
        "question":  "Name a kitchen tool you can use in the kitchen and the bedroom.",
        "answers":  [
                        {
                            "text":  "spatula/spoon",
                            "points":  53
                        },
                        {
                            "text":  "baster",
                            "points":  10
                        },
                        {
                            "text":  "scissors",
                            "points":  6
                        },
                        {
                            "text":  "rolling pin",
                            "points":  4
                        },
                        {
                            "text":  "towel",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120569,
        "question":  "Name a phony excuse people give when they don't want to talk to you on the phone.",
        "answers":  [
                        {
                            "text":  "doorbell/company",
                            "points":  23
                        },
                        {
                            "text":  "\"i'm busy\"",
                            "points":  16
                        },
                        {
                            "text":  "another call",
                            "points":  16
                        },
                        {
                            "text":  "cooking/eating",
                            "points":  14
                        },
                        {
                            "text":  "on way out/late",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  120570,
        "question":  "Give me an S word you like being called.",
        "answers":  [
                        {
                            "text":  "sweet/heart",
                            "points":  35
                        },
                        {
                            "text":  "smart",
                            "points":  21
                        },
                        {
                            "text":  "sexy",
                            "points":  12
                        },
                        {
                            "text":  "stud",
                            "points":  4
                        },
                        {
                            "text":  "slut",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120571,
        "question":  "Past or present, name a game show host with the best hair... sorry, Steve.",
        "answers":  [
                        {
                            "text":  "pat sajak",
                            "points":  32
                        },
                        {
                            "text":  "alex trebek",
                            "points":  13
                        },
                        {
                            "text":  "bob barker",
                            "points":  10
                        },
                        {
                            "text":  "vanna white",
                            "points":  10
                        },
                        {
                            "text":  "drew carey",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  120572,
        "question":  "Name something that's better to do slow than fast.",
        "answers":  [
                        {
                            "text":  "make love",
                            "points":  27
                        },
                        {
                            "text":  "eat/chew",
                            "points":  26
                        },
                        {
                            "text":  "drive",
                            "points":  8
                        },
                        {
                            "text":  "make out",
                            "points":  6
                        },
                        {
                            "text":  "cut stuff/surgery",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  120573,
        "question":  "Fill in the blank: Bob was so bald, he used the hair from his ______ as a comb-over.",
        "answers":  [
                        {
                            "text":  "his chest",
                            "points":  16
                        },
                        {
                            "text":  "his back",
                            "points":  16
                        },
                        {
                            "text":  "his dog/pet",
                            "points":  16
                        },
                        {
                            "text":  "his beard/neck",
                            "points":  14
                        },
                        {
                            "text":  "his ears",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  120574,
        "question":  "Name a musical instrument that you'd be surprised to see a cowboy playing around the campfire.",
        "answers":  [
                        {
                            "text":  "flute/piccolo",
                            "points":  27
                        },
                        {
                            "text":  "harp",
                            "points":  15
                        },
                        {
                            "text":  "sax",
                            "points":  11
                        },
                        {
                            "text":  "piano",
                            "points":  9
                        },
                        {
                            "text":  "cello",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  120575,
        "question":  "Name something that's black and shiny.",
        "answers":  [
                        {
                            "text":  "car/limo",
                            "points":  33
                        },
                        {
                            "text":  "shoes/clothes",
                            "points":  20
                        },
                        {
                            "text":  "stone/coal/gem",
                            "points":  10
                        },
                        {
                            "text":  "gun",
                            "points":  3
                        },
                        {
                            "text":  "vibrator",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120576,
        "question":  "Name a place a person with hemorrhoids prays has soft seats.",
        "answers":  [
                        {
                            "text":  "church",
                            "points":  31
                        },
                        {
                            "text":  "bus",
                            "points":  10
                        },
                        {
                            "text":  "stadium/arena",
                            "points":  10
                        },
                        {
                            "text":  "airplane",
                            "points":  9
                        },
                        {
                            "text":  "restaurant",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  120577,
        "question":  "Name something that's hard to stay up on.",
        "answers":  [
                        {
                            "text":  "news/politics",
                            "points":  41
                        },
                        {
                            "text":  "technology",
                            "points":  11
                        },
                        {
                            "text":  "my finances",
                            "points":  8
                        },
                        {
                            "text":  "a bull",
                            "points":  4
                        },
                        {
                            "text":  "a horse/bronco",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120578,
        "question":  "Tell me a kind of bed it would be really uncomfortable to make love in.",
        "answers":  [
                        {
                            "text":  "waterbed",
                            "points":  25
                        },
                        {
                            "text":  "bed of nails",
                            "points":  25
                        },
                        {
                            "text":  "flower/plant bed",
                            "points":  8
                        },
                        {
                            "text":  "cot",
                            "points":  5
                        },
                        {
                            "text":  "straw bed",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120579,
        "question":  "Name someone who is more popular dead than when they were alive.",
        "answers":  [
                        {
                            "text":  "elvis",
                            "points":  24
                        },
                        {
                            "text":  "michael jackson",
                            "points":  17
                        },
                        {
                            "text":  "jesus",
                            "points":  15
                        },
                        {
                            "text":  "van gogh",
                            "points":  7
                        },
                        {
                            "text":  "edgar allen poe",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120580,
        "question":  "Name something grandma says that grandpa does just like an old dog.",
        "answers":  [
                        {
                            "text":  "sleeps/snores",
                            "points":  23
                        },
                        {
                            "text":  "eats/off floor",
                            "points":  15
                        },
                        {
                            "text":  "farts",
                            "points":  12
                        },
                        {
                            "text":  "barks/whines",
                            "points":  9
                        },
                        {
                            "text":  "potties",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  120581,
        "question":  "Name a rich comedian who laughs all the way to the bank.",
        "answers":  [
                        {
                            "text":  "kevin hart",
                            "points":  19
                        },
                        {
                            "text":  "steve harvey",
                            "points":  18
                        },
                        {
                            "text":  "jerry seinfeld",
                            "points":  17
                        },
                        {
                            "text":  "chris rock",
                            "points":  6
                        },
                        {
                            "text":  "steve martin",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120582,
        "question":  "In a world filled with many famous Chrises, who's your favorite?",
        "answers":  [
                        {
                            "text":  "chris rock",
                            "points":  19
                        },
                        {
                            "text":  "chris hemsworth",
                            "points":  13
                        },
                        {
                            "text":  "kris kringle",
                            "points":  13
                        },
                        {
                            "text":  "chris evans",
                            "points":  11
                        },
                        {
                            "text":  "chris farley",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  120583,
        "question":  "Name a place people avoid making eye contact.",
        "answers":  [
                        {
                            "text":  "bathroom",
                            "points":  26
                        },
                        {
                            "text":  "doc/e.r.",
                            "points":  13
                        },
                        {
                            "text":  "jail/police stn.",
                            "points":  9
                        },
                        {
                            "text":  "nude beach/camp",
                            "points":  8
                        },
                        {
                            "text":  "church",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  120584,
        "question":  "Name a bad habit that keeps you from being perfect.",
        "answers":  [
                        {
                            "text":  "nail-biting",
                            "points":  21
                        },
                        {
                            "text":  "smoking",
                            "points":  14
                        },
                        {
                            "text":  "overeating",
                            "points":  13
                        },
                        {
                            "text":  "procrastinate/lazy",
                            "points":  8
                        },
                        {
                            "text":  "boozing",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  120585,
        "question":  "Name a question you ask a first date that's a good conversation starter.",
        "answers":  [
                        {
                            "text":  "job?",
                            "points":  24
                        },
                        {
                            "text":  "hobbies/for fun?",
                            "points":  15
                        },
                        {
                            "text":  "where from?",
                            "points":  10
                        },
                        {
                            "text":  "fave food?",
                            "points":  6
                        },
                        {
                            "text":  "fave music/singer?",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120586,
        "question":  "Name something you've stopped caring about.",
        "answers":  [
                        {
                            "text":  "others' opinions",
                            "points":  23
                        },
                        {
                            "text":  "my stupid job",
                            "points":  12
                        },
                        {
                            "text":  "diet/weight",
                            "points":  10
                        },
                        {
                            "text":  "politics",
                            "points":  7
                        },
                        {
                            "text":  "aging/balding",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  120587,
        "question":  "Name something newlyweds get that starts with the letter C.",
        "answers":  [
                        {
                            "text":  "cash",
                            "points":  22
                        },
                        {
                            "text":  "china",
                            "points":  16
                        },
                        {
                            "text":  "car",
                            "points":  8
                        },
                        {
                            "text":  "cake",
                            "points":  7
                        },
                        {
                            "text":  "coffee maker",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120588,
        "question":  "If Steve Harvey wasn't married, what female celebrity would you match him up with?",
        "answers":  [
                        {
                            "text":  "oprah winfrey",
                            "points":  37
                        },
                        {
                            "text":  "halle berry",
                            "points":  7
                        },
                        {
                            "text":  "beyonce",
                            "points":  6
                        },
                        {
                            "text":  "niecy nash",
                            "points":  3
                        },
                        {
                            "text":  "vivica a. fox",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120589,
        "question":  "Name a city you'd want to live in if you had a lot of money.",
        "answers":  [
                        {
                            "text":  "new york",
                            "points":  17
                        },
                        {
                            "text":  "paris",
                            "points":  15
                        },
                        {
                            "text":  "l.a./bev hills",
                            "points":  11
                        },
                        {
                            "text":  "las vegas",
                            "points":  8
                        },
                        {
                            "text":  "honolulu",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  120590,
        "question":  "It's Steve Harvey's birthday. What did his wife give him?",
        "answers":  [
                        {
                            "text":  "socks/clothes",
                            "points":  21
                        },
                        {
                            "text":  "car",
                            "points":  9
                        },
                        {
                            "text":  "toupee",
                            "points":  9
                        },
                        {
                            "text":  "some hot action",
                            "points":  8
                        },
                        {
                            "text":  "cake",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  120591,
        "question":  "Fill in the blank: Magic ______.",
        "answers":  [
                        {
                            "text":  "magic wand",
                            "points":  18
                        },
                        {
                            "text":  "magic trick",
                            "points":  13
                        },
                        {
                            "text":  "magic mike",
                            "points":  7
                        },
                        {
                            "text":  "magic johnson",
                            "points":  7
                        },
                        {
                            "text":  "magic show",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  120592,
        "question":  "Fill in the blank: Jack and ______.",
        "answers":  [
                        {
                            "text":  "jack & jill",
                            "points":  92
                        },
                        {
                            "text":  "jack & the beanstalk",
                            "points":  4
                        },
                        {
                            "text":  "jack & coke",
                            "points":  2
                        },
                        {
                            "text":  "jack & diane",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120593,
        "question":  "Name a place you might hear someone say \"hit me.\"",
        "answers":  [
                        {
                            "text":  "casino/poker game",
                            "points":  89
                        },
                        {
                            "text":  "boxing ring",
                            "points":  7
                        },
                        {
                            "text":  "a bar",
                            "points":  2
                        },
                        {
                            "text":  "martial arts",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120594,
        "question":  "The police realized Toto had eaten Dorothy when they saw what hanging out of his mouth?",
        "answers":  [
                        {
                            "text":  "ruby slippers",
                            "points":  85
                        },
                        {
                            "text":  "pigtails w/ bows",
                            "points":  9
                        },
                        {
                            "text":  "blue dress",
                            "points":  4
                        },
                        {
                            "text":  "her basket",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120595,
        "question":  "Tell me a word that rhymes with \"motto.\"",
        "answers":  [
                        {
                            "text":  "lotto",
                            "points":  66
                        },
                        {
                            "text":  "grotto",
                            "points":  20
                        },
                        {
                            "text":  "auto/otto",
                            "points":  10
                        },
                        {
                            "text":  "blotto",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120596,
        "question":  "Name something you save a lot of money on if you buy it used instead of new.",
        "answers":  [
                        {
                            "text":  "car",
                            "points":  88
                        },
                        {
                            "text":  "clothes",
                            "points":  6
                        },
                        {
                            "text":  "book",
                            "points":  3
                        },
                        {
                            "text":  "phone",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120597,
        "question":  "What does a dog see that makes it instinctively go into chase mode?",
        "answers":  [
                        {
                            "text":  "squirrel/animal",
                            "points":  88
                        },
                        {
                            "text":  "car",
                            "points":  5
                        },
                        {
                            "text":  "its tail",
                            "points":  4
                        },
                        {
                            "text":  "ball",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120598,
        "question":  "Name something it's easier to do on a windy day.",
        "answers":  [
                        {
                            "text":  "fly a kite",
                            "points":  85
                        },
                        {
                            "text":  "go sailing",
                            "points":  7
                        },
                        {
                            "text":  "be lazy/stay inside",
                            "points":  5
                        },
                        {
                            "text":  "fart in public",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120599,
        "question":  "Name something a kid gets in trouble for molding out of Play-Doh.",
        "answers":  [
                        {
                            "text":  "body part",
                            "points":  75
                        },
                        {
                            "text":  "weapon",
                            "points":  19
                        },
                        {
                            "text":  "turd",
                            "points":  3
                        },
                        {
                            "text":  "ashtray",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120600,
        "question":  "Tell me a place in the newspaper where you wouldn't want to see your name.",
        "answers":  [
                        {
                            "text":  "obituaries",
                            "points":  74
                        },
                        {
                            "text":  "crimes/arrests",
                            "points":  19
                        },
                        {
                            "text":  "front page",
                            "points":  4
                        },
                        {
                            "text":  "bankruptcies",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120601,
        "question":  "We asked 100 women... You might put your drunk friend's what in your purse for safekeeping?",
        "answers":  [
                        {
                            "text":  "keys",
                            "points":  69
                        },
                        {
                            "text":  "phone",
                            "points":  22
                        },
                        {
                            "text":  "wallet/$",
                            "points":  6
                        },
                        {
                            "text":  "weed/pipe",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120602,
        "question":  "We asked 100 men... If you left your laptop open, what do you hope isn't on your screen when your mom walks by?",
        "answers":  [
                        {
                            "text":  "dirty pix/of me",
                            "points":  65
                        },
                        {
                            "text":  "bank info/finances",
                            "points":  28
                        },
                        {
                            "text":  "video game",
                            "points":  4
                        },
                        {
                            "text":  "dating site",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120603,
        "question":  "Name an occasion a daughter hopes her dad doesn't forget.",
        "answers":  [
                        {
                            "text":  "birthday",
                            "points":  64
                        },
                        {
                            "text":  "wedding day",
                            "points":  31
                        },
                        {
                            "text":  "prom",
                            "points":  2
                        },
                        {
                            "text":  "dad-daughter dance",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120604,
        "question":  "We asked 100 men... You should never tell your blind date that you just got out of what?",
        "answers":  [
                        {
                            "text":  "prison",
                            "points":  59
                        },
                        {
                            "text":  "failed relationship",
                            "points":  23
                        },
                        {
                            "text":  "insane asylum",
                            "points":  12
                        },
                        {
                            "text":  "bed...at 6 p.m.",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  120605,
        "question":  "Name something that gets lit on holidays.",
        "answers":  [
                        {
                            "text":  "lights/tree",
                            "points":  55
                        },
                        {
                            "text":  "candles/menorah",
                            "points":  29
                        },
                        {
                            "text":  "people/granny",
                            "points":  11
                        },
                        {
                            "text":  "fireworks",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120606,
        "question":  "Tell me what you'd like to be putting in your mouth right now.",
        "answers":  [
                        {
                            "text":  "food/coffee",
                            "points":  89
                        },
                        {
                            "text":  "wine/booze",
                            "points":  5
                        },
                        {
                            "text":  "boobs",
                            "points":  2
                        },
                        {
                            "text":  "a joint",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120607,
        "question":  "Name something a woman buys when she wants to feel sexy.",
        "answers":  [
                        {
                            "text":  "clothes/thong",
                            "points":  89
                        },
                        {
                            "text":  "perfume",
                            "points":  4
                        },
                        {
                            "text":  "makeup",
                            "points":  3
                        },
                        {
                            "text":  "lotion",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120608,
        "question":  "Name a sea creature people pay money to swim with.",
        "answers":  [
                        {
                            "text":  "dolphins",
                            "points":  83
                        },
                        {
                            "text":  "sharks",
                            "points":  8
                        },
                        {
                            "text":  "whales/orcas",
                            "points":  5
                        },
                        {
                            "text":  "manatees",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120609,
        "question":  "Just once, name something Robin probably wishes Batman would let him do.",
        "answers":  [
                        {
                            "text":  "drive batmobile",
                            "points":  81
                        },
                        {
                            "text":  "lead/be hero",
                            "points":  11
                        },
                        {
                            "text":  "get the gal/catwoman",
                            "points":  3
                        },
                        {
                            "text":  "make love to batman",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120610,
        "question":  "If you've been working from home for a long time, name something you might miss about going into the office.",
        "answers":  [
                        {
                            "text":  "people/gossip",
                            "points":  80
                        },
                        {
                            "text":  "free eats/coffee",
                            "points":  8
                        },
                        {
                            "text":  "peace/no kids",
                            "points":  7
                        },
                        {
                            "text":  "dressing up",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120611,
        "question":  "Name something that might be full of hot air.",
        "answers":  [
                        {
                            "text":  "balloon",
                            "points":  75
                        },
                        {
                            "text":  "person/politician",
                            "points":  19
                        },
                        {
                            "text":  "sauna",
                            "points":  2
                        },
                        {
                            "text":  "oven",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120612,
        "question":  "Name something you see at a wedding that's white.",
        "answers":  [
                        {
                            "text":  "dress",
                            "points":  75
                        },
                        {
                            "text":  "cake",
                            "points":  17
                        },
                        {
                            "text":  "flowers",
                            "points":  4
                        },
                        {
                            "text":  "people",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120613,
        "question":  "Name a place you see Abraham Lincoln's face.",
        "answers":  [
                        {
                            "text":  "penny/$5 bill",
                            "points":  72
                        },
                        {
                            "text":  "d.c./lincoln memorial",
                            "points":  21
                        },
                        {
                            "text":  "mount rushmore",
                            "points":  3
                        },
                        {
                            "text":  "history book",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120614,
        "question":  "Name something you'd need to go fishing.",
        "answers":  [
                        {
                            "text":  "rod/reel",
                            "points":  72
                        },
                        {
                            "text":  "bait/worms",
                            "points":  19
                        },
                        {
                            "text":  "a pal/my pops",
                            "points":  5
                        },
                        {
                            "text":  "fish",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120615,
        "question":  "Name something you and your friends can never agree on when making plans.",
        "answers":  [
                        {
                            "text":  "where to go/eat",
                            "points":  67
                        },
                        {
                            "text":  "time/date",
                            "points":  21
                        },
                        {
                            "text":  "which movie",
                            "points":  6
                        },
                        {
                            "text":  "$$$/who pays",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120616,
        "question":  "Name an Olympic sport where athletes have to stick the landing.",
        "answers":  [
                        {
                            "text":  "gymnastics",
                            "points":  67
                        },
                        {
                            "text":  "track & field",
                            "points":  16
                        },
                        {
                            "text":  "skiing",
                            "points":  13
                        },
                        {
                            "text":  "figure skating",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120617,
        "question":  "Name something that crashes that would upset a billionaire.",
        "answers":  [
                        {
                            "text":  "stocks/economy",
                            "points":  64
                        },
                        {
                            "text":  "private jet",
                            "points":  21
                        },
                        {
                            "text":  "car/bugatti",
                            "points":  10
                        },
                        {
                            "text":  "computer/web",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120618,
        "question":  "Name something that gets buttoned up.",
        "answers":  [
                        {
                            "text":  "shirt",
                            "points":  63
                        },
                        {
                            "text":  "coat",
                            "points":  24
                        },
                        {
                            "text":  "cardigan",
                            "points":  7
                        },
                        {
                            "text":  "lips",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120619,
        "question":  "Name something your dog sees you holding that gets it all excited.",
        "answers":  [
                        {
                            "text":  "food/bowl",
                            "points":  54
                        },
                        {
                            "text":  "his leash",
                            "points":  29
                        },
                        {
                            "text":  "ball/toy",
                            "points":  13
                        },
                        {
                            "text":  "car keys",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120620,
        "question":  "Fill in the blank: The Easter Bunny just ordered ten million ______s on Amazon.",
        "answers":  [
                        {
                            "text":  "easter eggs",
                            "points":  53
                        },
                        {
                            "text":  "candies/peeps",
                            "points":  27
                        },
                        {
                            "text":  "baskets",
                            "points":  13
                        },
                        {
                            "text":  "carrots",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  120621,
        "question":  "We asked 100 married men... My mother-in-law thinks I have good taste in what?",
        "answers":  [
                        {
                            "text":  "women",
                            "points":  53
                        },
                        {
                            "text":  "food",
                            "points":  23
                        },
                        {
                            "text":  "clothes",
                            "points":  15
                        },
                        {
                            "text":  "art",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  120622,
        "question":  "What does a bride with cold feet need from her maid of honor?",
        "answers":  [
                        {
                            "text":  "support/push",
                            "points":  52
                        },
                        {
                            "text":  "stiff drink",
                            "points":  24
                        },
                        {
                            "text":  "escape plan",
                            "points":  16
                        },
                        {
                            "text":  "warm socks of course!",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  120623,
        "question":  "Name something people turn on to help them stay up all night.",
        "answers":  [
                        {
                            "text":  "tv",
                            "points":  41
                        },
                        {
                            "text":  "the lights",
                            "points":  34
                        },
                        {
                            "text":  "music",
                            "points":  16
                        },
                        {
                            "text":  "coffee maker",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  120624,
        "question":  "Name something you have two of on your face.",
        "answers":  [
                        {
                            "text":  "eyes",
                            "points":  84
                        },
                        {
                            "text":  "nostrils",
                            "points":  7
                        },
                        {
                            "text":  "lips",
                            "points":  3
                        },
                        {
                            "text":  "cheeks",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120625,
        "question":  "Name something you wear that's hard to put on and harder to take off.",
        "answers":  [
                        {
                            "text":  "bra/clothes",
                            "points":  84
                        },
                        {
                            "text":  "makeup",
                            "points":  6
                        },
                        {
                            "text":  "wedding ring/jewelry",
                            "points":  5
                        },
                        {
                            "text":  "condom",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120626,
        "question":  "A man might tell his wife, \"I only went to Hooters for the\" what?",
        "answers":  [
                        {
                            "text":  "wings/food",
                            "points":  83
                        },
                        {
                            "text":  "booze",
                            "points":  9
                        },
                        {
                            "text":  "decor/cute owls",
                            "points":  3
                        },
                        {
                            "text":  "sports/on tv",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120627,
        "question":  "Bridesmaids might get matching what for the wedding?",
        "answers":  [
                        {
                            "text":  "dresses/clothes",
                            "points":  83
                        },
                        {
                            "text":  "jewelry",
                            "points":  8
                        },
                        {
                            "text":  "bouquets",
                            "points":  3
                        },
                        {
                            "text":  "tattoos",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120628,
        "question":  "Name something hibernating bears can go the whole winter without doing.",
        "answers":  [
                        {
                            "text":  "eating/drinking",
                            "points":  83
                        },
                        {
                            "text":  "going potty",
                            "points":  6
                        },
                        {
                            "text":  "hot bear sex",
                            "points":  5
                        },
                        {
                            "text":  "being awake",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120629,
        "question":  "Name something specific Snow White would talk about on a date that would make a man think she's crazy.",
        "answers":  [
                        {
                            "text":  "the dwarfs",
                            "points":  80
                        },
                        {
                            "text":  "poisoned apple",
                            "points":  11
                        },
                        {
                            "text":  "she sings w/ animals",
                            "points":  3
                        },
                        {
                            "text":  "awakened by kiss",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120630,
        "question":  "We asked 100 women... Fill in the blank: I'm a perfect ten if you add a five to my ______.",
        "answers":  [
                        {
                            "text":  "body/height",
                            "points":  71
                        },
                        {
                            "text":  "hair",
                            "points":  10
                        },
                        {
                            "text":  "face/smile",
                            "points":  10
                        },
                        {
                            "text":  "wallet",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  120631,
        "question":  "Name something you'd be surprised your store-bought frozen turkey still had on it.",
        "answers":  [
                        {
                            "text":  "feathers",
                            "points":  69
                        },
                        {
                            "text":  "head/beak",
                            "points":  24
                        },
                        {
                            "text":  "blood",
                            "points":  2
                        },
                        {
                            "text":  "feet",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120632,
        "question":  "Name a creature that lives in a swamp.",
        "answers":  [
                        {
                            "text":  "gator/croc",
                            "points":  69
                        },
                        {
                            "text":  "snake",
                            "points":  14
                        },
                        {
                            "text":  "frog",
                            "points":  11
                        },
                        {
                            "text":  "monster/swamp thing",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120633,
        "question":  "Italians think they are the world's greatest what?",
        "answers":  [
                        {
                            "text":  "cooks",
                            "points":  64
                        },
                        {
                            "text":  "lovers, amore mio!",
                            "points":  28
                        },
                        {
                            "text":  "baristas",
                            "points":  3
                        },
                        {
                            "text":  "artists",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120634,
        "question":  "When snowmen get together, they probably compare the size of their what?",
        "answers":  [
                        {
                            "text":  "noses/carrots",
                            "points":  60
                        },
                        {
                            "text":  "snowballs/bods",
                            "points":  31
                        },
                        {
                            "text":  "pipes",
                            "points":  3
                        },
                        {
                            "text":  "hats",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120635,
        "question":  "Tell me the worst thing to get locked out of.",
        "answers":  [
                        {
                            "text":  "house",
                            "points":  54
                        },
                        {
                            "text":  "car",
                            "points":  34
                        },
                        {
                            "text":  "bathroom",
                            "points":  6
                        },
                        {
                            "text":  "bank account",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120636,
        "question":  "We asked 100 women... Name a word rhyming with \"gum\" that might describe a man you've dated.",
        "answers":  [
                        {
                            "text":  "bum",
                            "points":  48
                        },
                        {
                            "text":  "dumb",
                            "points":  44
                        },
                        {
                            "text":  "scum",
                            "points":  3
                        },
                        {
                            "text":  "glum",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120637,
        "question":  "Name a place that you see lots of round buns.",
        "answers":  [
                        {
                            "text":  "bakery/store",
                            "points":  48
                        },
                        {
                            "text":  "restaurant",
                            "points":  35
                        },
                        {
                            "text":  "beach/pool",
                            "points":  12
                        },
                        {
                            "text":  "sports/soccer game",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120638,
        "question":  "Name something a man shouldn't tell his wife to do when she's yelling.",
        "answers":  [
                        {
                            "text":  "calm down/shush",
                            "points":  89
                        },
                        {
                            "text":  "clean/iron",
                            "points":  3
                        },
                        {
                            "text":  "drive/park car",
                            "points":  2
                        },
                        {
                            "text":  "make his food",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120639,
        "question":  "Name someone Mickey Mouse might send a lot of text messages to.",
        "answers":  [
                        {
                            "text":  "minnie mouse",
                            "points":  82
                        },
                        {
                            "text":  "goofy",
                            "points":  8
                        },
                        {
                            "text":  "donald duck",
                            "points":  4
                        },
                        {
                            "text":  "his fans",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120640,
        "question":  "Name something that's sexy about a military man.",
        "answers":  [
                        {
                            "text":  "uniform",
                            "points":  78
                        },
                        {
                            "text":  "tasty bod/muscles",
                            "points":  9
                        },
                        {
                            "text":  "big ole gun",
                            "points":  5
                        },
                        {
                            "text":  "great posture",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120641,
        "question":  "Name something a waitress has in her apron pocket.",
        "answers":  [
                        {
                            "text":  "pen/pencil",
                            "points":  70
                        },
                        {
                            "text":  "order pad/bill",
                            "points":  13
                        },
                        {
                            "text":  "straws",
                            "points":  10
                        },
                        {
                            "text":  "money/tips",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120642,
        "question":  "Name something you'd be surprised Popeye got rid of.",
        "answers":  [
                        {
                            "text":  "spinach",
                            "points":  58
                        },
                        {
                            "text":  "olive oyl",
                            "points":  21
                        },
                        {
                            "text":  "his pipe",
                            "points":  12
                        },
                        {
                            "text":  "his tattoos",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  120643,
        "question":  "We asked 100 single women... In your fantasy, it's just you and Steve Harvey where?",
        "answers":  [
                        {
                            "text":  "beach/vacay",
                            "points":  51
                        },
                        {
                            "text":  "eatery/olive garden",
                            "points":  38
                        },
                        {
                            "text":  "on tv",
                            "points":  5
                        },
                        {
                            "text":  "at his bank",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120644,
        "question":  "Name a reason you know someone is rich just by looking at them.",
        "answers":  [
                        {
                            "text":  "swanky clothes",
                            "points":  49
                        },
                        {
                            "text":  "bling/watch",
                            "points":  30
                        },
                        {
                            "text":  "sick car",
                            "points":  13
                        },
                        {
                            "text":  "perfect hair",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120645,
        "question":  "Name something that comes in pairs of two because just one would be useless.",
        "answers":  [
                        {
                            "text":  "shoes",
                            "points":  48
                        },
                        {
                            "text":  "socks",
                            "points":  37
                        },
                        {
                            "text":  "gloves",
                            "points":  9
                        },
                        {
                            "text":  "chopsticks",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120646,
        "question":  "If two orchestra conductors got into a fight, name something one of them might use as a weapon.",
        "answers":  [
                        {
                            "text":  "instrument/drum",
                            "points":  45
                        },
                        {
                            "text":  "baton",
                            "points":  44
                        },
                        {
                            "text":  "music stand",
                            "points":  5
                        },
                        {
                            "text":  "sheet music",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120647,
        "question":  "Name a reason a couple might be in a hurry to get married.",
        "answers":  [
                        {
                            "text":  "preggo/kids",
                            "points":  87
                        },
                        {
                            "text":  "they're 95",
                            "points":  4
                        },
                        {
                            "text":  "green card",
                            "points":  2
                        },
                        {
                            "text":  "in love/can't wait",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120648,
        "question":  "Name something that might be leaking.",
        "answers":  [
                        {
                            "text":  "plumbing/faucet",
                            "points":  81
                        },
                        {
                            "text":  "car/oil",
                            "points":  7
                        },
                        {
                            "text":  "roof",
                            "points":  4
                        },
                        {
                            "text":  "my bladder",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120649,
        "question":  "Tell me why you're surrounded by bubbles.",
        "answers":  [
                        {
                            "text":  "in bath/fart'g",
                            "points":  78
                        },
                        {
                            "text":  "blow'g bubbles/kids",
                            "points":  12
                        },
                        {
                            "text":  "underwater",
                            "points":  3
                        },
                        {
                            "text":  "drink'g/champagne",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120650,
        "question":  "Name something that might cause you to walk funny after riding it.",
        "answers":  [
                        {
                            "text":  "horse",
                            "points":  78
                        },
                        {
                            "text":  "bike",
                            "points":  11
                        },
                        {
                            "text":  "thrill ride/teacups",
                            "points":  3
                        },
                        {
                            "text":  "bull",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120651,
        "question":  "Name a place that dogs would drive to a lot if they could drive.",
        "answers":  [
                        {
                            "text":  "park",
                            "points":  74
                        },
                        {
                            "text":  "pet store",
                            "points":  13
                        },
                        {
                            "text":  "beach",
                            "points":  4
                        },
                        {
                            "text":  "restaurant",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120652,
        "question":  "There are two sides to every what?",
        "answers":  [
                        {
                            "text":  "story/argument",
                            "points":  73
                        },
                        {
                            "text":  "coin",
                            "points":  18
                        },
                        {
                            "text":  "door",
                            "points":  2
                        },
                        {
                            "text":  "record album",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120653,
        "question":  "Name something dogs do much faster than people.",
        "answers":  [
                        {
                            "text":  "run/walk",
                            "points":  73
                        },
                        {
                            "text":  "eat",
                            "points":  13
                        },
                        {
                            "text":  "grow/age",
                            "points":  5
                        },
                        {
                            "text":  "notice smells",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120654,
        "question":  "Name a tool you'd use to open a coconut.",
        "answers":  [
                        {
                            "text":  "hammer",
                            "points":  70
                        },
                        {
                            "text":  "machete/knife",
                            "points":  18
                        },
                        {
                            "text":  "screwdriver",
                            "points":  4
                        },
                        {
                            "text":  "ice pick",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120655,
        "question":  "Name something you hope is quick and painless.",
        "answers":  [
                        {
                            "text":  "dental/medical",
                            "points":  68
                        },
                        {
                            "text":  "death",
                            "points":  22
                        },
                        {
                            "text":  "pay'g bills/taxes",
                            "points":  3
                        },
                        {
                            "text":  "breakup/divorce",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120656,
        "question":  "Name a kind of place that's packed on Saturday night.",
        "answers":  [
                        {
                            "text":  "bar/club",
                            "points":  65
                        },
                        {
                            "text":  "restaurant",
                            "points":  19
                        },
                        {
                            "text":  "theater",
                            "points":  9
                        },
                        {
                            "text":  "bowling alley",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120657,
        "question":  "Name a sport with little balls.",
        "answers":  [
                        {
                            "text":  "golf",
                            "points":  61
                        },
                        {
                            "text":  "ping-pong",
                            "points":  25
                        },
                        {
                            "text":  "billiards",
                            "points":  5
                        },
                        {
                            "text":  "tennis",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120658,
        "question":  "If it weren't for the Italians, we'd never know the heavenly taste of what food?",
        "answers":  [
                        {
                            "text":  "pasta/lasagna",
                            "points":  60
                        },
                        {
                            "text":  "pizza",
                            "points":  30
                        },
                        {
                            "text":  "cannoli",
                            "points":  3
                        },
                        {
                            "text":  "tiramisu",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120659,
        "question":  "We asked 100 women... Name something a man does on a date that tells you he's a mama's boy.",
        "answers":  [
                        {
                            "text":  "calls/texts her",
                            "points":  60
                        },
                        {
                            "text":  "yaps about her",
                            "points":  21
                        },
                        {
                            "text":  "whines/cries",
                            "points":  12
                        },
                        {
                            "text":  "wants food cut",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120660,
        "question":  "Name something you'd love to be able to shrink.",
        "answers":  [
                        {
                            "text":  "bod/massive booty",
                            "points":  58
                        },
                        {
                            "text":  "debt",
                            "points":  33
                        },
                        {
                            "text":  "my car/mom van",
                            "points":  2
                        },
                        {
                            "text":  "my stress",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120661,
        "question":  "Who's the first person you tell when you've fallen in love?",
        "answers":  [
                        {
                            "text":  "bestie",
                            "points":  53
                        },
                        {
                            "text":  "parents",
                            "points":  21
                        },
                        {
                            "text":  "person i love",
                            "points":  17
                        },
                        {
                            "text":  "current spouse. bye!",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120662,
        "question":  "Name a type of pot.",
        "answers":  [
                        {
                            "text":  "crock/cooking",
                            "points":  44
                        },
                        {
                            "text":  "flower pot",
                            "points":  33
                        },
                        {
                            "text":  "weed, bruh!",
                            "points":  14
                        },
                        {
                            "text":  "toilet/chamber pot",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120663,
        "question":  "Tell me the worst thing to step in.",
        "answers":  [
                        {
                            "text":  "poop",
                            "points":  83
                        },
                        {
                            "text":  "puke",
                            "points":  7
                        },
                        {
                            "text":  "gum",
                            "points":  2
                        },
                        {
                            "text":  "quicksand",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120664,
        "question":  "The Fourth of July has become a holiday where people gather to see who can eat the most what?",
        "answers":  [
                        {
                            "text":  "plump wieners",
                            "points":  80
                        },
                        {
                            "text":  "watermelon",
                            "points":  6
                        },
                        {
                            "text":  "bbq/ribs",
                            "points":  5
                        },
                        {
                            "text":  "hamburgers",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120665,
        "question":  "Name a holiday gift that dad must be tired of getting every year.",
        "answers":  [
                        {
                            "text":  "ties/clothes",
                            "points":  80
                        },
                        {
                            "text":  "tools",
                            "points":  6
                        },
                        {
                            "text":  "razors",
                            "points":  4
                        },
                        {
                            "text":  "cologne",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120666,
        "question":  "A large section of a man's brain is devoted to storing images of what?",
        "answers":  [
                        {
                            "text":  "babes/sex",
                            "points":  79
                        },
                        {
                            "text":  "sports/stats",
                            "points":  8
                        },
                        {
                            "text":  "cars",
                            "points":  4
                        },
                        {
                            "text":  "food",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120667,
        "question":  "We asked 100 men... Name something of yours you'd never want women to describe as cute.",
        "answers":  [
                        {
                            "text":  "body",
                            "points":  78
                        },
                        {
                            "text":  "car/ram truck",
                            "points":  6
                        },
                        {
                            "text":  "face/nose",
                            "points":  6
                        },
                        {
                            "text":  "haircut",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120668,
        "question":  "On your first day of a new job, you might ask someone, \"Where's the\" what?",
        "answers":  [
                        {
                            "text":  "bathroom",
                            "points":  77
                        },
                        {
                            "text":  "cafe/break room",
                            "points":  13
                        },
                        {
                            "text":  "exit",
                            "points":  2
                        },
                        {
                            "text":  "paper",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120669,
        "question":  "Name something specific a man might get down on one knee to do.",
        "answers":  [
                        {
                            "text":  "propose",
                            "points":  75
                        },
                        {
                            "text":  "tie shoes",
                            "points":  11
                        },
                        {
                            "text":  "change tire",
                            "points":  5
                        },
                        {
                            "text":  "beg forgiveness",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120670,
        "question":  "If a wife were a cop, what might she do to her husband when he acts up?",
        "answers":  [
                        {
                            "text":  "cuff/hog-tie",
                            "points":  75
                        },
                        {
                            "text":  "arrest him",
                            "points":  9
                        },
                        {
                            "text":  "tase him",
                            "points":  6
                        },
                        {
                            "text":  "point gun/shoot",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120671,
        "question":  "Name an occasion when grandma slips Viagra into grandpa's food so he'll be romantic.",
        "answers":  [
                        {
                            "text":  "anniversary",
                            "points":  74
                        },
                        {
                            "text":  "birthday",
                            "points":  9
                        },
                        {
                            "text":  "valentine's day",
                            "points":  8
                        },
                        {
                            "text":  "new year's",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120672,
        "question":  "Name something that might be happening when you're surrounded by flashing lights.",
        "answers":  [
                        {
                            "text":  "cops/emt/fire",
                            "points":  72
                        },
                        {
                            "text":  "dancing/concert/club",
                            "points":  17
                        },
                        {
                            "text":  "casino jackpot",
                            "points":  3
                        },
                        {
                            "text":  "lightning storm",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120673,
        "question":  "Where do parents tell children that babies come from?",
        "answers":  [
                        {
                            "text":  "the stork",
                            "points":  70
                        },
                        {
                            "text":  "mommy/parents",
                            "points":  10
                        },
                        {
                            "text":  "cabbage patch",
                            "points":  8
                        },
                        {
                            "text":  "god/heaven",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  120674,
        "question":  "Two signs that a woman just got dumped: One, she's crying. Two, she's buying what?",
        "answers":  [
                        {
                            "text":  "ice cream/food",
                            "points":  67
                        },
                        {
                            "text":  "clothes/shoes",
                            "points":  16
                        },
                        {
                            "text":  "wine/booze",
                            "points":  9
                        },
                        {
                            "text":  "a vibrator",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120675,
        "question":  "Name something embarrassing that might happen to you at the public pool.",
        "answers":  [
                        {
                            "text":  "suit slip/rip",
                            "points":  64
                        },
                        {
                            "text":  "poop/pee",
                            "points":  23
                        },
                        {
                            "text":  "trip/fall in",
                            "points":  4
                        },
                        {
                            "text":  "can't swim/drown",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120676,
        "question":  "If there were a store for Disney princesses, they'd probably sell what there?",
        "answers":  [
                        {
                            "text":  "tiaras/crowns",
                            "points":  60
                        },
                        {
                            "text":  "dresses",
                            "points":  27
                        },
                        {
                            "text":  "princess shoes",
                            "points":  5
                        },
                        {
                            "text":  "magic wands",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120677,
        "question":  "Name something a cheap guy might use to pierce his own nipple.",
        "answers":  [
                        {
                            "text":  "needle",
                            "points":  58
                        },
                        {
                            "text":  "pin/tack",
                            "points":  27
                        },
                        {
                            "text":  "nail",
                            "points":  5
                        },
                        {
                            "text":  "stapler",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120678,
        "question":  "Name something that you'd hate to be on when it malfunctions.",
        "answers":  [
                        {
                            "text":  "coaster/ride",
                            "points":  56
                        },
                        {
                            "text":  "plane",
                            "points":  24
                        },
                        {
                            "text":  "elevator",
                            "points":  12
                        },
                        {
                            "text":  "ship/boat",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120679,
        "question":  "We asked 100 women... You love a man in uniform, particularly which one?",
        "answers":  [
                        {
                            "text":  "military/sailor",
                            "points":  42
                        },
                        {
                            "text":  "fireman",
                            "points":  32
                        },
                        {
                            "text":  "police",
                            "points":  14
                        },
                        {
                            "text":  "doctor scrubs",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  120680,
        "question":  "Need something you need to throw a Paris theme party.",
        "answers":  [
                        {
                            "text":  "food/croissants",
                            "points":  33
                        },
                        {
                            "text":  "eiffel tower",
                            "points":  29
                        },
                        {
                            "text":  "wine",
                            "points":  25
                        },
                        {
                            "text":  "berets",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  120681,
        "question":  "Fill in the blank: When I get home from work, I can't wait to watch ______.",
        "answers":  [
                        {
                            "text":  "tv/netflix",
                            "points":  84
                        },
                        {
                            "text":  "my pets/dog",
                            "points":  4
                        },
                        {
                            "text":  "my kids",
                            "points":  3
                        },
                        {
                            "text":  "nudie flicks",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120682,
        "question":  "Name something that might get rained out.",
        "answers":  [
                        {
                            "text":  "sporting event",
                            "points":  82
                        },
                        {
                            "text":  "picnic/bbq",
                            "points":  4
                        },
                        {
                            "text":  "concert",
                            "points":  4
                        },
                        {
                            "text":  "parade",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120683,
        "question":  "Name something with a diamond in it.",
        "answers":  [
                        {
                            "text":  "ring",
                            "points":  78
                        },
                        {
                            "text":  "baseball field",
                            "points":  6
                        },
                        {
                            "text":  "earrings",
                            "points":  6
                        },
                        {
                            "text":  "necklace",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120684,
        "question":  "Name something Steve Harvey might admit he spends too much money on.",
        "answers":  [
                        {
                            "text":  "clothes/shoes",
                            "points":  77
                        },
                        {
                            "text":  "cars",
                            "points":  8
                        },
                        {
                            "text":  "caviar/food",
                            "points":  4
                        },
                        {
                            "text":  "teeth whitener",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120685,
        "question":  "We asked 100 women... You'd freak out if hair started growing on your what?",
        "answers":  [
                        {
                            "text":  "face/nose",
                            "points":  77
                        },
                        {
                            "text":  "boobs",
                            "points":  7
                        },
                        {
                            "text":  "butt",
                            "points":  5
                        },
                        {
                            "text":  "hands/knuckles",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120686,
        "question":  "Name a board game you play that you don't think will ever end.",
        "answers":  [
                        {
                            "text":  "monopoly",
                            "points":  76
                        },
                        {
                            "text":  "risk",
                            "points":  11
                        },
                        {
                            "text":  "life",
                            "points":  3
                        },
                        {
                            "text":  "chess",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120687,
        "question":  "Fill in the blank: Wonder ______.",
        "answers":  [
                        {
                            "text":  "wonder woman",
                            "points":  70
                        },
                        {
                            "text":  "wonder bread",
                            "points":  17
                        },
                        {
                            "text":  "wonder years",
                            "points":  3
                        },
                        {
                            "text":  "wonderwall",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120688,
        "question":  "Name a type of surfing you're doing where you don't need a surfboard.",
        "answers":  [
                        {
                            "text":  "web surfing",
                            "points":  68
                        },
                        {
                            "text":  "bodysurfing",
                            "points":  14
                        },
                        {
                            "text":  "couch surfing",
                            "points":  7
                        },
                        {
                            "text":  "channel surfing",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120689,
        "question":  "Name something you don't loan to your irresponsible friends.",
        "answers":  [
                        {
                            "text":  "money/$50k",
                            "points":  62
                        },
                        {
                            "text":  "my car",
                            "points":  26
                        },
                        {
                            "text":  "tools",
                            "points":  3
                        },
                        {
                            "text":  "book/encyclopedia",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120690,
        "question":  "Fill in the blank: Pole ______.",
        "answers":  [
                        {
                            "text":  "pole dancer",
                            "points":  56
                        },
                        {
                            "text":  "pole vault",
                            "points":  26
                        },
                        {
                            "text":  "pole position",
                            "points":  7
                        },
                        {
                            "text":  "polecat",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120691,
        "question":  "If you're going to try stand-up comedy, you need a lot of what?",
        "answers":  [
                        {
                            "text":  "guts/confidence",
                            "points":  51
                        },
                        {
                            "text":  "jokes/talent",
                            "points":  35
                        },
                        {
                            "text":  "persistence",
                            "points":  5
                        },
                        {
                            "text":  "patience",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120692,
        "question":  "Fill in the blank: I wish I had X-ray vision so I could see through what?",
        "answers":  [
                        {
                            "text":  "clothes!",
                            "points":  44
                        },
                        {
                            "text":  "walls/doors",
                            "points":  40
                        },
                        {
                            "text":  "vault/safe",
                            "points":  6
                        },
                        {
                            "text":  "lotto scratchers",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120693,
        "question":  "Tell me an expensive jewel that rich people might name their child.",
        "answers":  [
                        {
                            "text":  "ruby",
                            "points":  44
                        },
                        {
                            "text":  "diamond",
                            "points":  33
                        },
                        {
                            "text":  "sapphire",
                            "points":  10
                        },
                        {
                            "text":  "pearl",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  120694,
        "question":  "Name something bars should give to their drunk customers for free.",
        "answers":  [
                        {
                            "text":  "food & water",
                            "points":  42
                        },
                        {
                            "text":  "ride home",
                            "points":  42
                        },
                        {
                            "text":  "more booze",
                            "points":  6
                        },
                        {
                            "text":  "phone call",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120695,
        "question":  "Name a sea creature that, if it were smarter, would go on strike at SeaWorld.",
        "answers":  [
                        {
                            "text":  "dolphin",
                            "points":  42
                        },
                        {
                            "text":  "orca/whale",
                            "points":  39
                        },
                        {
                            "text":  "seal/sea lion",
                            "points":  9
                        },
                        {
                            "text":  "penguin",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120696,
        "question":  "Name something a woman hopes a male stripper does when she's watching him perform.",
        "answers":  [
                        {
                            "text":  "takes it off",
                            "points":  42
                        },
                        {
                            "text":  "gyrates/on her lap",
                            "points":  37
                        },
                        {
                            "text":  "smiles/winks at her",
                            "points":  11
                        },
                        {
                            "text":  "goes away",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120697,
        "question":  "Bad Santa paid someone else to deliver gifts on Christmas Eve so he could go where?",
        "answers":  [
                        {
                            "text":  "vacay/vegas",
                            "points":  36
                        },
                        {
                            "text":  "bar/nightclub",
                            "points":  33
                        },
                        {
                            "text":  "elf strip joint",
                            "points":  18
                        },
                        {
                            "text":  "home/to bed",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  120698,
        "question":  "Besides another human, tell me something you might plant a kiss on.",
        "answers":  [
                        {
                            "text":  "dog/pet",
                            "points":  86
                        },
                        {
                            "text":  "mirror",
                            "points":  2
                        },
                        {
                            "text":  "$$$/paycheck",
                            "points":  2
                        },
                        {
                            "text":  "love letter",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120699,
        "question":  "Name something your grandma can do even better than your mom.",
        "answers":  [
                        {
                            "text":  "cook/bake",
                            "points":  83
                        },
                        {
                            "text":  "knit",
                            "points":  4
                        },
                        {
                            "text":  "yell/criticize",
                            "points":  3
                        },
                        {
                            "text":  "clean",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120700,
        "question":  "Grandpa showed up to Thanksgiving dinner without his false teeth, so he's not going to be able to eat any what?",
        "answers":  [
                        {
                            "text":  "turkey",
                            "points":  66
                        },
                        {
                            "text":  "corn on the cob",
                            "points":  18
                        },
                        {
                            "text":  "pecan pie",
                            "points":  5
                        },
                        {
                            "text":  "ham",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120701,
        "question":  "Name a chore around the house where using gloves is a good idea.",
        "answers":  [
                        {
                            "text":  "clean bathroom",
                            "points":  65
                        },
                        {
                            "text":  "dishes",
                            "points":  17
                        },
                        {
                            "text":  "gardening",
                            "points":  6
                        },
                        {
                            "text":  "cat litter/dog poo",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120702,
        "question":  "Fill in the blank: There's nothing better than hot ______ on a cold day.",
        "answers":  [
                        {
                            "text":  "chocolate/cocoa",
                            "points":  60
                        },
                        {
                            "text":  "coffee/tea",
                            "points":  21
                        },
                        {
                            "text":  "soup",
                            "points":  8
                        },
                        {
                            "text":  "sex",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120703,
        "question":  "What do people plan to do first when they retire?",
        "answers":  [
                        {
                            "text":  "travel",
                            "points":  59
                        },
                        {
                            "text":  "sleep",
                            "points":  26
                        },
                        {
                            "text":  "celebrate/party",
                            "points":  4
                        },
                        {
                            "text":  "move/florida",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120704,
        "question":  "Name a sea creature that might be bigger than a surfboard.",
        "answers":  [
                        {
                            "text":  "whale",
                            "points":  54
                        },
                        {
                            "text":  "shark",
                            "points":  27
                        },
                        {
                            "text":  "octopus",
                            "points":  7
                        },
                        {
                            "text":  "dolphin",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120705,
        "question":  "Fill in the blank: You know you're at a wild party if it has a lot of ______.",
        "answers":  [
                        {
                            "text":  "kegs/drunks",
                            "points":  54
                        },
                        {
                            "text":  "bongs/drugs",
                            "points":  18
                        },
                        {
                            "text":  "strippers/nudity",
                            "points":  15
                        },
                        {
                            "text":  "cops",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  120706,
        "question":  "Name something a dog considers one of its favorite things.",
        "answers":  [
                        {
                            "text":  "bone/food",
                            "points":  48
                        },
                        {
                            "text":  "ball/toy",
                            "points":  28
                        },
                        {
                            "text":  "its owner",
                            "points":  13
                        },
                        {
                            "text":  "shoes/socks",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120707,
        "question":  "Some people worry that they're getting what?",
        "answers":  [
                        {
                            "text":  "old/wrinkly/gray",
                            "points":  48
                        },
                        {
                            "text":  "fat",
                            "points":  28
                        },
                        {
                            "text":  "sick",
                            "points":  11
                        },
                        {
                            "text":  "shafted",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  120708,
        "question":  "We asked 100 married women... Name a reason your husband is in an unusually good mood.",
        "answers":  [
                        {
                            "text":  "raise/promotion",
                            "points":  46
                        },
                        {
                            "text":  "sex",
                            "points":  27
                        },
                        {
                            "text":  "good meal",
                            "points":  14
                        },
                        {
                            "text":  "day off/vacay",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  120709,
        "question":  "Name something that is best served cold.",
        "answers":  [
                        {
                            "text":  "beverages/booze",
                            "points":  44
                        },
                        {
                            "text":  "revenge",
                            "points":  22
                        },
                        {
                            "text":  "ice cream",
                            "points":  18
                        },
                        {
                            "text":  "salad",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  120710,
        "question":  "We asked 100 men... You're starting a five-year prison sentence tomorrow. What will you be doing tonight?",
        "answers":  [
                        {
                            "text":  "boinkin'",
                            "points":  43
                        },
                        {
                            "text":  "drankin'",
                            "points":  22
                        },
                        {
                            "text":  "escaping",
                            "points":  21
                        },
                        {
                            "text":  "sleeping soundly",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  120711,
        "question":  "What's the first thing you want to do after getting a cast removed?",
        "answers":  [
                        {
                            "text":  "bathe",
                            "points":  41
                        },
                        {
                            "text":  "scratch",
                            "points":  38
                        },
                        {
                            "text":  "stretch/move",
                            "points":  10
                        },
                        {
                            "text":  "post a selfie",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120712,
        "question":  "Name the worst kind of bug to find in your bed.",
        "answers":  [
                        {
                            "text":  "bedbug",
                            "points":  39
                        },
                        {
                            "text":  "cockroach",
                            "points":  25
                        },
                        {
                            "text":  "spider",
                            "points":  24
                        },
                        {
                            "text":  "centipede",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120713,
        "question":  "Name a sport a lot of married men love as much as they do their wives.",
        "answers":  [
                        {
                            "text":  "football",
                            "points":  77
                        },
                        {
                            "text":  "baseball",
                            "points":  6
                        },
                        {
                            "text":  "basketball",
                            "points":  5
                        },
                        {
                            "text":  "volleyball",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120714,
        "question":  "Name something a surgeon needs in order to perform surgery.",
        "answers":  [
                        {
                            "text":  "scalpel/instrument",
                            "points":  77
                        },
                        {
                            "text":  "a patient",
                            "points":  5
                        },
                        {
                            "text":  "steady hands",
                            "points":  5
                        },
                        {
                            "text":  "gloves",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120715,
        "question":  "We asked 100 women... You should never get your hair cut right before what event?",
        "answers":  [
                        {
                            "text":  "wedding",
                            "points":  74
                        },
                        {
                            "text":  "first date",
                            "points":  9
                        },
                        {
                            "text":  "photo shoot",
                            "points":  4
                        },
                        {
                            "text":  "holiday/new year's",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120716,
        "question":  "What happens in Vegas stays in Vegas unless who finds out?",
        "answers":  [
                        {
                            "text":  "spouse/boo",
                            "points":  64
                        },
                        {
                            "text":  "parents",
                            "points":  11
                        },
                        {
                            "text":  "cops",
                            "points":  11
                        },
                        {
                            "text":  "media/news",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  120717,
        "question":  "Name a creature at a seafood restaurant that Aquaman might try to rescue.",
        "answers":  [
                        {
                            "text":  "lobster",
                            "points":  63
                        },
                        {
                            "text":  "fish/eel",
                            "points":  12
                        },
                        {
                            "text":  "crab",
                            "points":  8
                        },
                        {
                            "text":  "octopus",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  120718,
        "question":  "Name a city with a lot of people who are obsessed with their appearance.",
        "answers":  [
                        {
                            "text":  "l.a./bev hills",
                            "points":  62
                        },
                        {
                            "text":  "new york",
                            "points":  17
                        },
                        {
                            "text":  "paris",
                            "points":  7
                        },
                        {
                            "text":  "miami",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  120719,
        "question":  "You might celebrate a new job by buying yourself a new what?",
        "answers":  [
                        {
                            "text":  "outfit",
                            "points":  56
                        },
                        {
                            "text":  "car",
                            "points":  24
                        },
                        {
                            "text":  "purse",
                            "points":  6
                        },
                        {
                            "text":  "laptop",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  120720,
        "question":  "Tell me something that starts with an S that you might buy from a deli.",
        "answers":  [
                        {
                            "text":  "salami",
                            "points":  55
                        },
                        {
                            "text":  "sandwich/sub",
                            "points":  26
                        },
                        {
                            "text":  "salad",
                            "points":  6
                        },
                        {
                            "text":  "swiss cheese",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120721,
        "question":  "Name your favorite day of the year.",
        "answers":  [
                        {
                            "text":  "christmas/eve",
                            "points":  50
                        },
                        {
                            "text":  "my birthday",
                            "points":  22
                        },
                        {
                            "text":  "halloween",
                            "points":  10
                        },
                        {
                            "text":  "4th of july",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  120722,
        "question":  "Name something you haven't licked in a long time.",
        "answers":  [
                        {
                            "text":  "lollipop",
                            "points":  49
                        },
                        {
                            "text":  "ice cream/popsicle",
                            "points":  31
                        },
                        {
                            "text":  "a lover",
                            "points":  7
                        },
                        {
                            "text":  "a stamp",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120723,
        "question":  "Name something that might have olives in it.",
        "answers":  [
                        {
                            "text":  "martini/drink",
                            "points":  46
                        },
                        {
                            "text":  "salad",
                            "points":  25
                        },
                        {
                            "text":  "pizza",
                            "points":  17
                        },
                        {
                            "text":  "tapenade",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120724,
        "question":  "Name an inappropriate place for a children's surprise party.",
        "answers":  [
                        {
                            "text":  "bar/club",
                            "points":  45
                        },
                        {
                            "text":  "strip joint",
                            "points":  33
                        },
                        {
                            "text":  "hooters",
                            "points":  11
                        },
                        {
                            "text":  "haunted house",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  120725,
        "question":  "We asked 100 married women... Name a superhero's costume your husband would have a hard time squeezing into.",
        "answers":  [
                        {
                            "text":  "superman",
                            "points":  44
                        },
                        {
                            "text":  "spider-man",
                            "points":  25
                        },
                        {
                            "text":  "batman",
                            "points":  18
                        },
                        {
                            "text":  "aquaman",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120726,
        "question":  "Name something a kid might bury in the backyard.",
        "answers":  [
                        {
                            "text":  "toy/marble",
                            "points":  39
                        },
                        {
                            "text":  "dead pet",
                            "points":  26
                        },
                        {
                            "text":  "$/treasure",
                            "points":  22
                        },
                        {
                            "text":  "their broccoli/food",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120727,
        "question":  "If you're afraid of what, you shouldn't live in a high-rise?",
        "answers":  [
                        {
                            "text":  "heights/falling",
                            "points":  78
                        },
                        {
                            "text":  "earthquakes",
                            "points":  5
                        },
                        {
                            "text":  "elevators",
                            "points":  4
                        },
                        {
                            "text":  "fire",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120728,
        "question":  "Fill in the blank: No matter how many ______s a woman has, it will never be enough.",
        "answers":  [
                        {
                            "text":  "shoes/outfits",
                            "points":  76
                        },
                        {
                            "text":  "diamonds/jewelry",
                            "points":  7
                        },
                        {
                            "text":  "dollars",
                            "points":  4
                        },
                        {
                            "text":  "purses",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120729,
        "question":  "Name a mobster's favorite place to dump a body.",
        "answers":  [
                        {
                            "text":  "water",
                            "points":  73
                        },
                        {
                            "text":  "dumpster/landfill",
                            "points":  9
                        },
                        {
                            "text":  "desert",
                            "points":  5
                        },
                        {
                            "text":  "construction site",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120730,
        "question":  "Fill in the blank: You really should take that ______ out of your mouth before you kiss me.",
        "answers":  [
                        {
                            "text":  "food/gum",
                            "points":  69
                        },
                        {
                            "text":  "cig/tobacco",
                            "points":  15
                        },
                        {
                            "text":  "beer bottle",
                            "points":  3
                        },
                        {
                            "text":  "toothpick",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120731,
        "question":  "Name something about a person you might describe as sharp.",
        "answers":  [
                        {
                            "text":  "wit/mind/tongue",
                            "points":  66
                        },
                        {
                            "text":  "fashion sense",
                            "points":  14
                        },
                        {
                            "text":  "elbows/bones",
                            "points":  5
                        },
                        {
                            "text":  "haircut",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  120732,
        "question":  "Give me a word that rhymes with \"perk.\"",
        "answers":  [
                        {
                            "text":  "jerk",
                            "points":  66
                        },
                        {
                            "text":  "work",
                            "points":  11
                        },
                        {
                            "text":  "lurk",
                            "points":  7
                        },
                        {
                            "text":  "twerk",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  120733,
        "question":  "Fill in the blank: It would be a lot cheaper if my car ran on ______.",
        "answers":  [
                        {
                            "text":  "water",
                            "points":  61
                        },
                        {
                            "text":  "air",
                            "points":  23
                        },
                        {
                            "text":  "grass/leaves",
                            "points":  3
                        },
                        {
                            "text":  "crisco/oil",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120734,
        "question":  "Name something a wife turns on just to annoy her husband.",
        "answers":  [
                        {
                            "text":  "tv/steve harvey",
                            "points":  50
                        },
                        {
                            "text":  "radio/abba",
                            "points":  23
                        },
                        {
                            "text":  "vacuum",
                            "points":  13
                        },
                        {
                            "text":  "the lights",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120735,
        "question":  "Name a bowl you'd never eat out of.",
        "answers":  [
                        {
                            "text":  "toilet bowl",
                            "points":  48
                        },
                        {
                            "text":  "dog bowl",
                            "points":  28
                        },
                        {
                            "text":  "super bowl",
                            "points":  8
                        },
                        {
                            "text":  "fish bowl",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  120736,
        "question":  "Name a flying insect that might consider a bald guy's head a landing strip.",
        "answers":  [
                        {
                            "text":  "fly",
                            "points":  47
                        },
                        {
                            "text":  "mosquito",
                            "points":  20
                        },
                        {
                            "text":  "bee/wasp",
                            "points":  14
                        },
                        {
                            "text":  "dragonfly",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  120737,
        "question":  "Fill in the blank: Shark ______.",
        "answers":  [
                        {
                            "text":  "shark tank",
                            "points":  46
                        },
                        {
                            "text":  "shark week",
                            "points":  19
                        },
                        {
                            "text":  "shark attack",
                            "points":  18
                        },
                        {
                            "text":  "shark bait",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  120738,
        "question":  "Name a place you might be when someone tells you to stay in your lane.",
        "answers":  [
                        {
                            "text":  "car/highway",
                            "points":  45
                        },
                        {
                            "text":  "workplace",
                            "points":  26
                        },
                        {
                            "text":  "bowling alley",
                            "points":  12
                        },
                        {
                            "text":  "store/checkout",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  120739,
        "question":  "Name something you are really tired of having to cut so often.",
        "answers":  [
                        {
                            "text":  "my hair",
                            "points":  41
                        },
                        {
                            "text":  "my nails",
                            "points":  29
                        },
                        {
                            "text":  "the lawn",
                            "points":  15
                        },
                        {
                            "text":  "my budget",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  120740,
        "question":  "Name an occasion that women like to celebrate more than men do.",
        "answers":  [
                        {
                            "text":  "valentine's day",
                            "points":  41
                        },
                        {
                            "text":  "birthday",
                            "points":  25
                        },
                        {
                            "text":  "anniversary",
                            "points":  19
                        },
                        {
                            "text":  "baby shower/birth",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  120741,
        "question":  "Name something you like to be firm.",
        "answers":  [
                        {
                            "text":  "bed/pillow",
                            "points":  39
                        },
                        {
                            "text":  "bod/mr. bone dangles",
                            "points":  35
                        },
                        {
                            "text":  "apple/fruit",
                            "points":  11
                        },
                        {
                            "text":  "handshake",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  120742,
        "question":  "Tell me a crop a farmer plants.",
        "answers":  [
                        {
                            "text":  "corn",
                            "points":  71
                        },
                        {
                            "text":  "wheat",
                            "points":  11
                        },
                        {
                            "text":  "cannabis",
                            "points":  4
                        },
                        {
                            "text":  "beans/soybeans",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120743,
        "question":  "We asked 100 men... Fill in the blank: I'd love to become a professional ______.",
        "answers":  [
                        {
                            "text":  "athlete",
                            "points":  69
                        },
                        {
                            "text":  "actor",
                            "points":  12
                        },
                        {
                            "text":  "comedian",
                            "points":  5
                        },
                        {
                            "text":  "gigolo",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120744,
        "question":  "Name an animal that calls Alaska its home.",
        "answers":  [
                        {
                            "text":  "bear",
                            "points":  65
                        },
                        {
                            "text":  "moose",
                            "points":  18
                        },
                        {
                            "text":  "seal/sea lion",
                            "points":  3
                        },
                        {
                            "text":  "salmon",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120745,
        "question":  "We asked 100 single men... If you could propose to your girlfriend in any city in the world, which would it be?",
        "answers":  [
                        {
                            "text":  "paris",
                            "points":  48
                        },
                        {
                            "text":  "las vegas",
                            "points":  22
                        },
                        {
                            "text":  "new york",
                            "points":  12
                        },
                        {
                            "text":  "barcelona",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  120746,
        "question":  "Name something that might be living in your basement.",
        "answers":  [
                        {
                            "text":  "bugs galore!",
                            "points":  39
                        },
                        {
                            "text":  "mice/rats",
                            "points":  37
                        },
                        {
                            "text":  "people",
                            "points":  7
                        },
                        {
                            "text":  "mold",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  120747,
        "question":  "If you worked at an aquarium, which animal's tank would you avoid?",
        "answers":  [
                        {
                            "text":  "shark",
                            "points":  74
                        },
                        {
                            "text":  "piranha",
                            "points":  6
                        },
                        {
                            "text":  "electric eel",
                            "points":  5
                        },
                        {
                            "text":  "jellyfish",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120748,
        "question":  "Name an animal that might take a bite out of you in the woods.",
        "answers":  [
                        {
                            "text":  "bear",
                            "points":  68
                        },
                        {
                            "text":  "snake",
                            "points":  7
                        },
                        {
                            "text":  "wolf",
                            "points":  7
                        },
                        {
                            "text":  "raccoon",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  120749,
        "question":  "Name an occupation you go to for help.",
        "answers":  [
                        {
                            "text":  "doc/therapist",
                            "points":  66
                        },
                        {
                            "text":  "police",
                            "points":  16
                        },
                        {
                            "text":  "social worker",
                            "points":  3
                        },
                        {
                            "text":  "lawyer",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120750,
        "question":  "Name something of yours that you wish still looked like it did when it was brand new.",
        "answers":  [
                        {
                            "text":  "car",
                            "points":  50
                        },
                        {
                            "text":  "me/my body",
                            "points":  23
                        },
                        {
                            "text":  "house",
                            "points":  11
                        },
                        {
                            "text":  "phone",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120751,
        "question":  "Name the U.S. state you head to when you're looking for sand, sea, and sun.",
        "answers":  [
                        {
                            "text":  "florida",
                            "points":  46
                        },
                        {
                            "text":  "california",
                            "points":  27
                        },
                        {
                            "text":  "hawaii",
                            "points":  11
                        },
                        {
                            "text":  "texas",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120752,
        "question":  "We asked 100 women... Name a subject all your friends seem to be experts on.",
        "answers":  [
                        {
                            "text":  "relationships/sex",
                            "points":  40
                        },
                        {
                            "text":  "kids/parenting",
                            "points":  36
                        },
                        {
                            "text":  "politics",
                            "points":  9
                        },
                        {
                            "text":  "money/bargains",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120753,
        "question":  "Name something in the house that makes a squeaking sound.",
        "answers":  [
                        {
                            "text":  "door",
                            "points":  40
                        },
                        {
                            "text":  "floor/stairs",
                            "points":  20
                        },
                        {
                            "text":  "bed/furniture",
                            "points":  16
                        },
                        {
                            "text":  "mouse infestation",
                            "points":  12
                        }
                    ]
    },
    {
        "id":  120754,
        "question":  "Name a place you are where you hold on tight.",
        "answers":  [
                        {
                            "text":  "theme park/fair",
                            "points":  78
                        },
                        {
                            "text":  "speedboat",
                            "points":  3
                        },
                        {
                            "text":  "airplane",
                            "points":  3
                        },
                        {
                            "text":  "subway",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120755,
        "question":  "Name an occupation where you spend all day listening to people's troubles.",
        "answers":  [
                        {
                            "text":  "shrink/doc",
                            "points":  67
                        },
                        {
                            "text":  "bartender",
                            "points":  10
                        },
                        {
                            "text":  "hair stylist",
                            "points":  5
                        },
                        {
                            "text":  "clergy",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  120756,
        "question":  "Humans would look weird if they had the ears of what animal?",
        "answers":  [
                        {
                            "text":  "elephant",
                            "points":  66
                        },
                        {
                            "text":  "rabbit",
                            "points":  9
                        },
                        {
                            "text":  "dog",
                            "points":  6
                        },
                        {
                            "text":  "donkey/mule",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  120757,
        "question":  "Name something you wouldn't want your preacher to know that you pray for a lot.",
        "answers":  [
                        {
                            "text":  "money!",
                            "points":  64
                        },
                        {
                            "text":  "sex",
                            "points":  15
                        },
                        {
                            "text":  "death/of my enemy",
                            "points":  4
                        },
                        {
                            "text":  "new preacher",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120758,
        "question":  "Name the occupation of someone who says to you, \"Don't move.\"",
        "answers":  [
                        {
                            "text":  "po-po",
                            "points":  60
                        },
                        {
                            "text":  "doc/dentist",
                            "points":  14
                        },
                        {
                            "text":  "photographer",
                            "points":  9
                        },
                        {
                            "text":  "hairdresser",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120759,
        "question":  "Name an animal that weighs over 500 pounds.",
        "answers":  [
                        {
                            "text":  "elephant",
                            "points":  60
                        },
                        {
                            "text":  "hippo",
                            "points":  11
                        },
                        {
                            "text":  "whale",
                            "points":  8
                        },
                        {
                            "text":  "bear",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  120760,
        "question":  "Name a state where it gets really cold.",
        "answers":  [
                        {
                            "text":  "alaska",
                            "points":  57
                        },
                        {
                            "text":  "minnesota",
                            "points":  19
                        },
                        {
                            "text":  "north dakota",
                            "points":  8
                        },
                        {
                            "text":  "maine",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120761,
        "question":  "A leg of lamb could feed several people. A leg of what would barely serve one?",
        "answers":  [
                        {
                            "text":  "chicken",
                            "points":  53
                        },
                        {
                            "text":  "frog",
                            "points":  22
                        },
                        {
                            "text":  "rabbit",
                            "points":  7
                        },
                        {
                            "text":  "mouse/rat",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  120762,
        "question":  "Tell me the worst thing to be up to your neck in.",
        "answers":  [
                        {
                            "text":  "debt",
                            "points":  45
                        },
                        {
                            "text":  "deep doo-doo",
                            "points":  21
                        },
                        {
                            "text":  "work/homework",
                            "points":  15
                        },
                        {
                            "text":  "dishes",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  120763,
        "question":  "If there were a Mount Rushmore of game show hosts, who would be on it?",
        "answers":  [
                        {
                            "text":  "alex trebek",
                            "points":  40
                        },
                        {
                            "text":  "bob barker",
                            "points":  29
                        },
                        {
                            "text":  "steve harvey",
                            "points":  9
                        },
                        {
                            "text":  "pat sajak",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  120764,
        "question":  "Name something that you shouldn't have to do on your birthday.",
        "answers":  [
                        {
                            "text":  "work",
                            "points":  40
                        },
                        {
                            "text":  "cook/bake my cake",
                            "points":  28
                        },
                        {
                            "text":  "clean/laundry",
                            "points":  15
                        },
                        {
                            "text":  "pay for anything",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120765,
        "question":  "Name a creature a woman might release a dozen of in her cheating ex-husband's house.",
        "answers":  [
                        {
                            "text":  "mice/rats",
                            "points":  33
                        },
                        {
                            "text":  "roaches/bugs",
                            "points":  28
                        },
                        {
                            "text":  "snakes",
                            "points":  19
                        },
                        {
                            "text":  "bats",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  120766,
        "question":  "Name an object considered to be good luck.",
        "answers":  [
                        {
                            "text":  "4-leaf clover",
                            "points":  31
                        },
                        {
                            "text":  "rabbit's foot",
                            "points":  30
                        },
                        {
                            "text":  "horseshoe",
                            "points":  19
                        },
                        {
                            "text":  "dandelion/flower",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  120767,
        "question":  "Name something specific you might pop into your mouth.",
        "answers":  [
                        {
                            "text":  "candy/gum",
                            "points":  69
                        },
                        {
                            "text":  "popcorn",
                            "points":  8
                        },
                        {
                            "text":  "nuts",
                            "points":  5
                        },
                        {
                            "text":  "cough drop/lozenge",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120768,
        "question":  "If a dogcatcher couldn't find any stray dogs, what animal might he catch to fill his quota?",
        "answers":  [
                        {
                            "text":  "cats",
                            "points":  61
                        },
                        {
                            "text":  "raccoons",
                            "points":  10
                        },
                        {
                            "text":  "squirrels",
                            "points":  8
                        },
                        {
                            "text":  "coyotes",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  120769,
        "question":  "Fill in the blank: You buy a dozen eggs, while a billionaire buys a dozen ______s.",
        "answers":  [
                        {
                            "text":  "cars",
                            "points":  54
                        },
                        {
                            "text":  "properties",
                            "points":  17
                        },
                        {
                            "text":  "stocks/currencies",
                            "points":  9
                        },
                        {
                            "text":  "diamonds/rolexes",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  120770,
        "question":  "Name a place people dream of going on vacation.",
        "answers":  [
                        {
                            "text":  "hawaii",
                            "points":  65
                        },
                        {
                            "text":  "paris/france",
                            "points":  8
                        },
                        {
                            "text":  "bahamas",
                            "points":  8
                        },
                        {
                            "text":  "florida",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120771,
        "question":  "We asked 100 women... I wish my man had better taste in what?",
        "answers":  [
                        {
                            "text":  "clothes/shoes",
                            "points":  62
                        },
                        {
                            "text":  "food/eateries",
                            "points":  13
                        },
                        {
                            "text":  "friends",
                            "points":  5
                        },
                        {
                            "text":  "tv shows",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  120772,
        "question":  "We asked 100 married women... Name something you can tell your husband is doing just by the sound of it.",
        "answers":  [
                        {
                            "text":  "sleeping/snoring",
                            "points":  52
                        },
                        {
                            "text":  "watch'g tv/sports",
                            "points":  13
                        },
                        {
                            "text":  "brushing teeth",
                            "points":  10
                        },
                        {
                            "text":  "eating",
                            "points":  10
                        }
                    ]
    },
    {
        "id":  120773,
        "question":  "Besides a bedbug, you'd hate to have what kind of bug in your bed?",
        "answers":  [
                        {
                            "text":  "roach",
                            "points":  41
                        },
                        {
                            "text":  "spider",
                            "points":  29
                        },
                        {
                            "text":  "flea/tick",
                            "points":  9
                        },
                        {
                            "text":  "fire ant",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  120774,
        "question":  "Tell me the last thing you split.",
        "answers":  [
                        {
                            "text":  "check/bill",
                            "points":  34
                        },
                        {
                            "text":  "food/dessert",
                            "points":  31
                        },
                        {
                            "text":  "my pants",
                            "points":  15
                        },
                        {
                            "text":  "wood/log",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  120775,
        "question":  "When you don't have a date for New Year's, what do you do at midnight?",
        "answers":  [
                        {
                            "text":  "sleep",
                            "points":  63
                        },
                        {
                            "text":  "have a drink",
                            "points":  9
                        },
                        {
                            "text":  "kiss my pet",
                            "points":  7
                        },
                        {
                            "text":  "watch tv/ball drop",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  120776,
        "question":  "Fill in the blank: Slow ______.",
        "answers":  [
                        {
                            "text":  "slow down",
                            "points":  40
                        },
                        {
                            "text":  "slow motion",
                            "points":  27
                        },
                        {
                            "text":  "slowpoke",
                            "points":  10
                        },
                        {
                            "text":  "slow dance",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  120777,
        "question":  "Name a creature that there are so many of them, it will never be an endangered species.",
        "answers":  [
                        {
                            "text":  "bugs/ants",
                            "points":  63
                        },
                        {
                            "text":  "rats/mice",
                            "points":  11
                        },
                        {
                            "text":  "deer",
                            "points":  5
                        },
                        {
                            "text":  "birds",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120778,
        "question":  "Name something you squeeze when you're feeling anxious.",
        "answers":  [
                        {
                            "text":  "hand/fingers",
                            "points":  41
                        },
                        {
                            "text":  "stress ball",
                            "points":  34
                        },
                        {
                            "text":  "my pet",
                            "points":  4
                        },
                        {
                            "text":  "leg/thigh",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120779,
        "question":  "Name something on a farm that, during a tornado, might be gone with the wind.",
        "answers":  [
                        {
                            "text":  "barn/shed",
                            "points":  41
                        },
                        {
                            "text":  "hay",
                            "points":  20
                        },
                        {
                            "text":  "animals",
                            "points":  16
                        },
                        {
                            "text":  "windmill",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  120780,
        "question":  "Name a TV host you might see performing at a comedy club.",
        "answers":  [
                        {
                            "text":  "steve harvey",
                            "points":  64
                        },
                        {
                            "text":  "jay leno",
                            "points":  9
                        },
                        {
                            "text":  "jimmy fallon",
                            "points":  6
                        },
                        {
                            "text":  "ellen",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120781,
        "question":  "We asked 100 men... I'm not cut out for dating because I don't like to what?",
        "answers":  [
                        {
                            "text":  "chat/meet people",
                            "points":  47
                        },
                        {
                            "text":  "spend money",
                            "points":  22
                        },
                        {
                            "text":  "dance",
                            "points":  9
                        },
                        {
                            "text":  "plan things",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120782,
        "question":  "Fill in the blank: Killer ______.",
        "answers":  [
                        {
                            "text":  "killer whale",
                            "points":  40
                        },
                        {
                            "text":  "killer bee",
                            "points":  27
                        },
                        {
                            "text":  "killer abs",
                            "points":  10
                        },
                        {
                            "text":  "killer queen",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  120783,
        "question":  "Name a place you love going to that you hope never goes out of business.",
        "answers":  [
                        {
                            "text":  "restaurant",
                            "points":  38
                        },
                        {
                            "text":  "store/mall",
                            "points":  35
                        },
                        {
                            "text":  "movies",
                            "points":  5
                        },
                        {
                            "text":  "theme park",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120784,
        "question":  "Name a profession where the men generally dress well.",
        "answers":  [
                        {
                            "text":  "attorney",
                            "points":  61
                        },
                        {
                            "text":  "sales",
                            "points":  7
                        },
                        {
                            "text":  "exec/ceo",
                            "points":  7
                        },
                        {
                            "text":  "politician",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  120785,
        "question":  "Tell me something that's fluffy.",
        "answers":  [
                        {
                            "text":  "animal/kitty",
                            "points":  53
                        },
                        {
                            "text":  "pillow",
                            "points":  16
                        },
                        {
                            "text":  "teddy bear",
                            "points":  7
                        },
                        {
                            "text":  "marshmallows",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  120786,
        "question":  "Name a sea creature only a fool would try to pet.",
        "answers":  [
                        {
                            "text":  "shark",
                            "points":  60
                        },
                        {
                            "text":  "jellyfish",
                            "points":  8
                        },
                        {
                            "text":  "electric eel",
                            "points":  6
                        },
                        {
                            "text":  "stingray",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  120787,
        "question":  "Name something a couple that breaks up might still share.",
        "answers":  [
                        {
                            "text":  "kids",
                            "points":  47
                        },
                        {
                            "text":  "pets",
                            "points":  18
                        },
                        {
                            "text":  "bills/netflix",
                            "points":  8
                        },
                        {
                            "text":  "mutual friends",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  120788,
        "question":  "Name a city where nine out of ten people wear sunglasses.",
        "answers":  [
                        {
                            "text":  "miami",
                            "points":  37
                        },
                        {
                            "text":  "los angeles",
                            "points":  34
                        },
                        {
                            "text":  "orlando",
                            "points":  5
                        },
                        {
                            "text":  "san diego",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  120789,
        "question":  "Name an occupation that a boy wouldn't want his girlfriend's father to have.",
        "answers":  [
                        {
                            "text":  "cop/fbi",
                            "points":  63
                        },
                        {
                            "text":  "clergy/monk",
                            "points":  7
                        },
                        {
                            "text":  "undertaker",
                            "points":  4
                        },
                        {
                            "text":  "mob",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  120790,
        "question":  "If you were a magician's rabbit, name something you'd hate to be shoved into.",
        "answers":  [
                        {
                            "text":  "smelly hat",
                            "points":  52
                        },
                        {
                            "text":  "undies/down pants",
                            "points":  10
                        },
                        {
                            "text":  "pocket",
                            "points":  6
                        },
                        {
                            "text":  "pot/oven",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  120791,
        "question":  "Name the profession that hears the best gossip.",
        "answers":  [
                        {
                            "text":  "hairdresser",
                            "points":  32
                        },
                        {
                            "text":  "shrink/doc",
                            "points":  20
                        },
                        {
                            "text":  "reporter/tv host",
                            "points":  11
                        },
                        {
                            "text":  "bartender",
                            "points":  10
                        }
                    ]
    },
    {
        "id":  120792,
        "question":  "Name an athlete who has so many trophies, he'd make a good trophy husband.",
        "answers":  [
                        {
                            "text":  "tom brady",
                            "points":  32
                        },
                        {
                            "text":  "michael jordan",
                            "points":  15
                        },
                        {
                            "text":  "michael phelps",
                            "points":  10
                        },
                        {
                            "text":  "tiger woods",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  120793,
        "question":  "Tell me a U.S. state you'd like to move to when you retire.",
        "answers":  [
                        {
                            "text":  "florida",
                            "points":  25
                        },
                        {
                            "text":  "hawaii",
                            "points":  16
                        },
                        {
                            "text":  "california",
                            "points":  11
                        },
                        {
                            "text":  "south carolina",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  120794,
        "question":  "What one thing in your life gives you the most pleasure?",
        "answers":  [
                        {
                            "text":  "family/spouse",
                            "points":  31
                        },
                        {
                            "text":  "fooood!",
                            "points":  11
                        },
                        {
                            "text":  "critters/pets",
                            "points":  9
                        },
                        {
                            "text":  "travel",
                            "points":  6
                        }
                    ]
    }
];
