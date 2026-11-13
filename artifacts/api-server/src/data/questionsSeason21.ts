import type { SurveyQuestion } from "./questions.js";

// Season 21 set: a separate question set from the main bank in questions.ts.
// Boards from Family Feud season 21, as transcribed at
// https://mstiescott.neocities.org/feud21 (crawled 2026-11-13).
// Ids start at 160001 (each season has its own block of 10,000), so they
// never clash with the main bank (1-8782), AI questions (9000+) or other
// seasons. One-answer boards are left out.
// Not used in gameplay yet.
export const SEASON21_SET = "season21";
export const SEASON21_ID_START = 160001;

export function isSeason21Question(id: number): boolean {
  return id >= SEASON21_ID_START && id < SEASON21_ID_START + 10000;
}

export const season21Questions: SurveyQuestion[] = [
    {
        "id":  160001,
        "question":  "Fill in the blank: Just about everyone has had their bottom ______ed at least once.",
        "answers":  [
                        {
                            "text":  "spanked/patted",
                            "points":  80
                        },
                        {
                            "text":  "pinched",
                            "points":  3
                        },
                        {
                            "text":  "ogled/examined",
                            "points":  3
                        },
                        {
                            "text":  "wet/washed",
                            "points":  3
                        },
                        {
                            "text":  "grabbed/touched",
                            "points":  3
                        },
                        {
                            "text":  "wiped",
                            "points":  2
                        },
                        {
                            "text":  "kicked",
                            "points":  2
                        },
                        {
                            "text":  "exposed",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160003,
        "question":  "Name something a lonely guy sleeps with at night to keep him company.",
        "answers":  [
                        {
                            "text":  "dog/pet",
                            "points":  47
                        },
                        {
                            "text":  "pillow/blankie",
                            "points":  20
                        },
                        {
                            "text":  "teddy bear",
                            "points":  11
                        },
                        {
                            "text":  "inflatable flo",
                            "points":  10
                        },
                        {
                            "text":  "ho w/ heart of gold",
                            "points":  4
                        },
                        {
                            "text":  "his phone",
                            "points":  2
                        },
                        {
                            "text":  "remote/the tv on",
                            "points":  2
                        },
                        {
                            "text":  "booze",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160004,
        "question":  "Name something a newly divorced woman should get rid of before she starts dating again.",
        "answers":  [
                        {
                            "text":  "wedding ring",
                            "points":  47
                        },
                        {
                            "text":  "pics of ex",
                            "points":  18
                        },
                        {
                            "text":  "ex's stuff/bed",
                            "points":  15
                        },
                        {
                            "text":  "emotional baggage",
                            "points":  9
                        },
                        {
                            "text":  "her beer gut",
                            "points":  3
                        },
                        {
                            "text":  "wedding dress",
                            "points":  2
                        },
                        {
                            "text":  "facial/body hair",
                            "points":  2
                        },
                        {
                            "text":  "his last name",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160005,
        "question":  "Fill in the blank: Bob said, \"I dated a girl who ______ed like a chicken.\"",
        "answers":  [
                        {
                            "text":  "clucked/sounded",
                            "points":  44
                        },
                        {
                            "text":  "walked",
                            "points":  27
                        },
                        {
                            "text":  "ate/swallowed",
                            "points":  9
                        },
                        {
                            "text":  "looked",
                            "points":  5
                        },
                        {
                            "text":  "danced",
                            "points":  5
                        },
                        {
                            "text":  "kissed/pecked",
                            "points":  3
                        },
                        {
                            "text":  "smelled",
                            "points":  3
                        },
                        {
                            "text":  "was killed/beheaded",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160006,
        "question":  "We asked 100 single men... If you're dating more than one woman, you need to be really careful about what?",
        "answers":  [
                        {
                            "text":  "get name right",
                            "points":  41
                        },
                        {
                            "text":  "your schedule",
                            "points":  16
                        },
                        {
                            "text":  "other girlfriends",
                            "points":  12
                        },
                        {
                            "text":  "incurable clap",
                            "points":  11
                        },
                        {
                            "text":  "calls/texts",
                            "points":  10
                        },
                        {
                            "text":  "stories straight",
                            "points":  4
                        },
                        {
                            "text":  "friends telling",
                            "points":  2
                        },
                        {
                            "text":  "the cost/budget",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160007,
        "question":  "We asked 100 men... Name someone you call a lot that you'd never ask, \"What are you wearing?\"",
        "answers":  [
                        {
                            "text":  "ma/pa",
                            "points":  38
                        },
                        {
                            "text":  "my boss",
                            "points":  19
                        },
                        {
                            "text":  "my sister/brother",
                            "points":  15
                        },
                        {
                            "text":  "my doctor",
                            "points":  7
                        },
                        {
                            "text":  "my bud/broseph",
                            "points":  7
                        },
                        {
                            "text":  "my daughter/son",
                            "points":  6
                        },
                        {
                            "text":  "my spouse/mate",
                            "points":  4
                        },
                        {
                            "text":  "trampy neighbor",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160008,
        "question":  "If an actor is playing a corpse, name something he might accidentally do to ruin the take.",
        "answers":  [
                        {
                            "text":  "sneeze/cough",
                            "points":  34
                        },
                        {
                            "text":  "breathe",
                            "points":  23
                        },
                        {
                            "text":  "laugh/smile",
                            "points":  20
                        },
                        {
                            "text":  "blink/wink",
                            "points":  12
                        },
                        {
                            "text":  "move/sit up",
                            "points":  3
                        },
                        {
                            "text":  "talk/crack jokes",
                            "points":  2
                        },
                        {
                            "text":  "open his eyes",
                            "points":  2
                        },
                        {
                            "text":  "\"pitch a tent\"",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160009,
        "question":  "We asked 100 men... Who would you hate to run into just as the pharmacist says, \"Your Viagra's ready\"?",
        "answers":  [
                        {
                            "text":  "my wife/mate",
                            "points":  30
                        },
                        {
                            "text":  "my mom/dad",
                            "points":  23
                        },
                        {
                            "text":  "my boss/coworker",
                            "points":  16
                        },
                        {
                            "text":  "my priest/clergy",
                            "points":  12
                        },
                        {
                            "text":  "my kid",
                            "points":  6
                        },
                        {
                            "text":  "my ex",
                            "points":  5
                        },
                        {
                            "text":  "my friend/bff",
                            "points":  4
                        },
                        {
                            "text":  "anybody at all",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160010,
        "question":  "We asked 100 men... Good news -- there's a stripper at your bachelor party. Bad news -- it's who?",
        "answers":  [
                        {
                            "text":  "my fiancee",
                            "points":  22
                        },
                        {
                            "text":  "my mom",
                            "points":  19
                        },
                        {
                            "text":  "my mother-in-law",
                            "points":  19
                        },
                        {
                            "text":  "my sister",
                            "points":  15
                        },
                        {
                            "text":  "my ex from hell",
                            "points":  15
                        },
                        {
                            "text":  "my sister-in-law",
                            "points":  4
                        },
                        {
                            "text":  "a dude/pops",
                            "points":  2
                        },
                        {
                            "text":  "celeb",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160011,
        "question":  "Name something a doctor would be shocked a baby could do right out of the womb.",
        "answers":  [
                        {
                            "text":  "talk/critique dr.",
                            "points":  71
                        },
                        {
                            "text":  "walk",
                            "points":  8
                        },
                        {
                            "text":  "dance/fred astaire",
                            "points":  6
                        },
                        {
                            "text":  "sing",
                            "points":  4
                        },
                        {
                            "text":  "stand",
                            "points":  2
                        },
                        {
                            "text":  "laugh maniacally",
                            "points":  2
                        },
                        {
                            "text":  "smoke cigarette",
                            "points":  2
                        },
                        {
                            "text":  "sit up",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160012,
        "question":  "Fill in the blank: Nobody wants to hear supermodels complain about what?",
        "answers":  [
                        {
                            "text":  "weight/so hungry",
                            "points":  60
                        },
                        {
                            "text":  "looks/giant zit",
                            "points":  15
                        },
                        {
                            "text":  "hard job/hours",
                            "points":  7
                        },
                        {
                            "text":  "being poor/pay",
                            "points":  5
                        },
                        {
                            "text":  "clothes/shoes",
                            "points":  4
                        },
                        {
                            "text":  "fame/no privacy",
                            "points":  2
                        },
                        {
                            "text":  "lonely/sexless",
                            "points":  2
                        },
                        {
                            "text":  "being hit on",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160013,
        "question":  "What does a woman hope she has when she runs into the man who dumped her?",
        "answers":  [
                        {
                            "text":  "a studmuffin",
                            "points":  55
                        },
                        {
                            "text":  "hot bod/implants",
                            "points":  11
                        },
                        {
                            "text":  "gun/weapon",
                            "points":  8
                        },
                        {
                            "text":  "diamond ring",
                            "points":  8
                        },
                        {
                            "text":  "good hair day",
                            "points":  6
                        },
                        {
                            "text":  "dignity/positivity",
                            "points":  5
                        },
                        {
                            "text":  "makeup on/glitter",
                            "points":  2
                        },
                        {
                            "text":  "sexy outfit",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160014,
        "question":  "Name something a dog does to you that if your boss did it, you'd sue her.",
        "answers":  [
                        {
                            "text":  "lick/kiss me",
                            "points":  44
                        },
                        {
                            "text":  "hump/my leg",
                            "points":  23
                        },
                        {
                            "text":  "pee/poop on me",
                            "points":  10
                        },
                        {
                            "text":  "sniff me",
                            "points":  6
                        },
                        {
                            "text":  "bark at me",
                            "points":  5
                        },
                        {
                            "text":  "bite me",
                            "points":  4
                        },
                        {
                            "text":  "jump at me",
                            "points":  3
                        },
                        {
                            "text":  "sit in my lap",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160015,
        "question":  "Fill in the blank: A wife might tell her husband, \"Get out of this house and take your dirty ______ with you.\"",
        "answers":  [
                        {
                            "text":  "clothes/shoes",
                            "points":  44
                        },
                        {
                            "text":  "ho",
                            "points":  21
                        },
                        {
                            "text":  "dog",
                            "points":  9
                        },
                        {
                            "text":  "mind",
                            "points":  7
                        },
                        {
                            "text":  "mouth",
                            "points":  6
                        },
                        {
                            "text":  "porn flicks/mags",
                            "points":  5
                        },
                        {
                            "text":  "arse",
                            "points":  3
                        },
                        {
                            "text":  "car/truck",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160016,
        "question":  "We asked 100 married men... Where does your wife spend so much time that you might scatter her ashes there when she dies?",
        "answers":  [
                        {
                            "text":  "mall/store",
                            "points":  37
                        },
                        {
                            "text":  "bathroom/tub",
                            "points":  23
                        },
                        {
                            "text":  "garden/yard",
                            "points":  13
                        },
                        {
                            "text":  "sofa",
                            "points":  8
                        },
                        {
                            "text":  "work",
                            "points":  7
                        },
                        {
                            "text":  "on her phone",
                            "points":  5
                        },
                        {
                            "text":  "the beach",
                            "points":  2
                        },
                        {
                            "text":  "in bed",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160017,
        "question":  "We asked 100 married men... Fill in the blank: What if hell isn't an actual place? What if it's listening to your wife complain about ______ every day?",
        "answers":  [
                        {
                            "text":  "chores/cleaning",
                            "points":  34
                        },
                        {
                            "text":  "money",
                            "points":  27
                        },
                        {
                            "text":  "me",
                            "points":  13
                        },
                        {
                            "text":  "her weight",
                            "points":  9
                        },
                        {
                            "text":  "her mother",
                            "points":  8
                        },
                        {
                            "text":  "the weather",
                            "points":  2
                        },
                        {
                            "text":  "her work",
                            "points":  2
                        },
                        {
                            "text":  "our kids",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160018,
        "question":  "We asked 100 men... Name someone you wish you could give the silent treatment.",
        "answers":  [
                        {
                            "text":  "my wife",
                            "points":  27
                        },
                        {
                            "text":  "my in-laws",
                            "points":  24
                        },
                        {
                            "text":  "my boss",
                            "points":  19
                        },
                        {
                            "text":  "my kids",
                            "points":  9
                        },
                        {
                            "text":  "my ex",
                            "points":  7
                        },
                        {
                            "text":  "my parents",
                            "points":  7
                        },
                        {
                            "text":  "my dog",
                            "points":  2
                        },
                        {
                            "text":  "politicians",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160019,
        "question":  "We asked 100 married women... Fill in the blank: I wish my husband looked at me the way he looks at what?",
        "answers":  [
                        {
                            "text":  "his car/truck",
                            "points":  23
                        },
                        {
                            "text":  "the tv/sports",
                            "points":  20
                        },
                        {
                            "text":  "food/plump wieners",
                            "points":  15
                        },
                        {
                            "text":  "money",
                            "points":  11
                        },
                        {
                            "text":  "his tools",
                            "points":  9
                        },
                        {
                            "text":  "floozies",
                            "points":  9
                        },
                        {
                            "text":  "his computer",
                            "points":  5
                        },
                        {
                            "text":  "his boat",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160020,
        "question":  "We asked 100 women... What would you do if a man you really liked shook your hand at the end of a date?",
        "answers":  [
                        {
                            "text":  "shake his/firmly",
                            "points":  23
                        },
                        {
                            "text":  "be bummed/cry",
                            "points":  15
                        },
                        {
                            "text":  "be happy/thank him",
                            "points":  15
                        },
                        {
                            "text":  "walk away",
                            "points":  14
                        },
                        {
                            "text":  "doesn't dig me/next!",
                            "points":  13
                        },
                        {
                            "text":  "hug him",
                            "points":  12
                        },
                        {
                            "text":  "be shocked",
                            "points":  3
                        },
                        {
                            "text":  "gross!/sniff my palm",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160021,
        "question":  "Name an animal a woman imitates in an attempt to make her voice sound sexy.",
        "answers":  [
                        {
                            "text":  "cat",
                            "points":  61
                        },
                        {
                            "text":  "tiger",
                            "points":  12
                        },
                        {
                            "text":  "cougar/panther",
                            "points":  4
                        },
                        {
                            "text":  "bird",
                            "points":  4
                        },
                        {
                            "text":  "lion",
                            "points":  4
                        },
                        {
                            "text":  "monkey/ape",
                            "points":  4
                        },
                        {
                            "text":  "snake",
                            "points":  4
                        },
                        {
                            "text":  "dog",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160022,
        "question":  "If men got pregnant, what part of pregnancy would they whine about more than women?",
        "answers":  [
                        {
                            "text":  "pains/labor",
                            "points":  52
                        },
                        {
                            "text":  "gettin' porky",
                            "points":  15
                        },
                        {
                            "text":  "morning sickness",
                            "points":  13
                        },
                        {
                            "text":  "tired/can't sleep",
                            "points":  4
                        },
                        {
                            "text":  "endless peeing",
                            "points":  4
                        },
                        {
                            "text":  "mood swings/crying",
                            "points":  3
                        },
                        {
                            "text":  "everything",
                            "points":  3
                        },
                        {
                            "text":  "cravings",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160023,
        "question":  "Name something a friend might ask you to take a whiff of to see if it smells disgusting.",
        "answers":  [
                        {
                            "text":  "milk/food",
                            "points":  50
                        },
                        {
                            "text":  "clothes/shoes",
                            "points":  14
                        },
                        {
                            "text":  "cologne",
                            "points":  10
                        },
                        {
                            "text":  "their armpits",
                            "points":  8
                        },
                        {
                            "text":  "their farting butt",
                            "points":  5
                        },
                        {
                            "text":  "their breath",
                            "points":  4
                        },
                        {
                            "text":  "beer/booze",
                            "points":  3
                        },
                        {
                            "text":  "their feet",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160024,
        "question":  "What do you put on a hot dog that a cannibal might put on Snoop Dogg?",
        "answers":  [
                        {
                            "text":  "ketchup",
                            "points":  40
                        },
                        {
                            "text":  "mustard",
                            "points":  34
                        },
                        {
                            "text":  "relish",
                            "points":  9
                        },
                        {
                            "text":  "chili",
                            "points":  3
                        },
                        {
                            "text":  "grated weed",
                            "points":  3
                        },
                        {
                            "text":  "hot sauce",
                            "points":  3
                        },
                        {
                            "text":  "sauerkraut",
                            "points":  2
                        },
                        {
                            "text":  "onions",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160025,
        "question":  "We eat animals. But name an animal that eats us.",
        "answers":  [
                        {
                            "text":  "lion",
                            "points":  33
                        },
                        {
                            "text":  "shark",
                            "points":  22
                        },
                        {
                            "text":  "bear/grizzly",
                            "points":  14
                        },
                        {
                            "text":  "gator/croc",
                            "points":  12
                        },
                        {
                            "text":  "tiger",
                            "points":  7
                        },
                        {
                            "text":  "vulture/buzzard",
                            "points":  3
                        },
                        {
                            "text":  "maggot/fly",
                            "points":  3
                        },
                        {
                            "text":  "rat",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160026,
        "question":  "We asked 100 married men... No pressure, but your wife wants you to tell us what her best feature is.",
        "answers":  [
                        {
                            "text":  "face/eyes",
                            "points":  31
                        },
                        {
                            "text":  "perky pooper",
                            "points":  24
                        },
                        {
                            "text":  "dairy cannons",
                            "points":  22
                        },
                        {
                            "text":  "loving nature",
                            "points":  5
                        },
                        {
                            "text":  "heavenly hair",
                            "points":  5
                        },
                        {
                            "text":  "personality/humor",
                            "points":  4
                        },
                        {
                            "text":  "honesty",
                            "points":  3
                        },
                        {
                            "text":  "brain",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160027,
        "question":  "Name a kind of meat the deli owner's wife might use to make a meat dress.",
        "answers":  [
                        {
                            "text":  "salami",
                            "points":  27
                        },
                        {
                            "text":  "pastrami",
                            "points":  20
                        },
                        {
                            "text":  "ham/prosciutto",
                            "points":  18
                        },
                        {
                            "text":  "steak/skirt steak",
                            "points":  9
                        },
                        {
                            "text":  "turkey",
                            "points":  8
                        },
                        {
                            "text":  "bologna",
                            "points":  6
                        },
                        {
                            "text":  "roast beef",
                            "points":  5
                        },
                        {
                            "text":  "bacon/pancetta",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160028,
        "question":  "Name something a male stripper hopes doesn't break in the middle of his act.",
        "answers":  [
                        {
                            "text":  "banana hammock",
                            "points":  56
                        },
                        {
                            "text":  "the pole",
                            "points":  18
                        },
                        {
                            "text":  "his leg/knee",
                            "points":  7
                        },
                        {
                            "text":  "wind",
                            "points":  5
                        },
                        {
                            "text":  "his pants/zipper",
                            "points":  3
                        },
                        {
                            "text":  "his hip",
                            "points":  2
                        },
                        {
                            "text":  "shoe/cowboy boot",
                            "points":  2
                        },
                        {
                            "text":  "the stage",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160029,
        "question":  "Name a carnival ride that would be exciting to make love on.",
        "answers":  [
                        {
                            "text":  "ferris wheel",
                            "points":  42
                        },
                        {
                            "text":  "roller coaster",
                            "points":  28
                        },
                        {
                            "text":  "merry-go-round",
                            "points":  8
                        },
                        {
                            "text":  "tunnel of love",
                            "points":  6
                        },
                        {
                            "text":  "tilt-a-whirl",
                            "points":  4
                        },
                        {
                            "text":  "bumper cars",
                            "points":  3
                        },
                        {
                            "text":  "flying swings",
                            "points":  2
                        },
                        {
                            "text":  "scrambler/sizzler",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160030,
        "question":  "Tell me a reason a woman might say she likes chubby men.",
        "answers":  [
                        {
                            "text":  "more cushion/cuddly",
                            "points":  42
                        },
                        {
                            "text":  "she's chubby too",
                            "points":  12
                        },
                        {
                            "text":  "for the warmth",
                            "points":  9
                        },
                        {
                            "text":  "they're jolly/fun",
                            "points":  8
                        },
                        {
                            "text":  "found a rich one",
                            "points":  7
                        },
                        {
                            "text":  "likes to cook/eat",
                            "points":  7
                        },
                        {
                            "text":  "sweet/\"teddy bear\"",
                            "points":  6
                        },
                        {
                            "text":  "she looks thinner",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160031,
        "question":  "Name something you'd hate to see a police officer holding after he checks your trunk.",
        "answers":  [
                        {
                            "text":  "my primo drugs",
                            "points":  33
                        },
                        {
                            "text":  "his gun/mine",
                            "points":  25
                        },
                        {
                            "text":  "dead body",
                            "points":  17
                        },
                        {
                            "text":  "clothes/bloody",
                            "points":  5
                        },
                        {
                            "text":  "handcuffs",
                            "points":  4
                        },
                        {
                            "text":  "tire iron/crowbar",
                            "points":  4
                        },
                        {
                            "text":  "booze",
                            "points":  4
                        },
                        {
                            "text":  "a ticket he wrote",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160032,
        "question":  "Name the first thing you might see when you get to heaven.",
        "answers":  [
                        {
                            "text":  "jesus/god",
                            "points":  33
                        },
                        {
                            "text":  "pearly gates",
                            "points":  16
                        },
                        {
                            "text":  "st. peter/angel",
                            "points":  15
                        },
                        {
                            "text":  "fam/loved ones",
                            "points":  14
                        },
                        {
                            "text":  "clouds/sky",
                            "points":  5
                        },
                        {
                            "text":  "my dog/pet",
                            "points":  5
                        },
                        {
                            "text":  "white light",
                            "points":  4
                        },
                        {
                            "text":  "sexy male strippers",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160033,
        "question":  "We asked 100 women... You dreamt you went on a date with Steve Harvey. Where did he take you?",
        "answers":  [
                        {
                            "text":  "family feud/tv show",
                            "points":  30
                        },
                        {
                            "text":  "eat/olive garden",
                            "points":  29
                        },
                        {
                            "text":  "vacay/to vegas",
                            "points":  21
                        },
                        {
                            "text":  "to bed/home",
                            "points":  7
                        },
                        {
                            "text":  "comedy club",
                            "points":  2
                        },
                        {
                            "text":  "carnival/circus",
                            "points":  2
                        },
                        {
                            "text":  "the zoo",
                            "points":  2
                        },
                        {
                            "text":  "bar/dance club",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160034,
        "question":  "If a funeral director lost a deceased person's ashes, what might he put in the urn instead?",
        "answers":  [
                        {
                            "text":  "soot/ashes",
                            "points":  30
                        },
                        {
                            "text":  "sand/rock",
                            "points":  23
                        },
                        {
                            "text":  "cigar/cig ashes",
                            "points":  14
                        },
                        {
                            "text":  "dirt/vacuum dust",
                            "points":  13
                        },
                        {
                            "text":  "other person/pet",
                            "points":  6
                        },
                        {
                            "text":  "burned paper",
                            "points":  4
                        },
                        {
                            "text":  "charcoal/ash",
                            "points":  3
                        },
                        {
                            "text":  "baby powder",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160035,
        "question":  "After a woman gets home from a great date and looks in the mirror, name something she'd be horrified to see.",
        "answers":  [
                        {
                            "text":  "food in teeth",
                            "points":  30
                        },
                        {
                            "text":  "makeup smear/issue",
                            "points":  21
                        },
                        {
                            "text":  "booger/bat in cave",
                            "points":  17
                        },
                        {
                            "text":  "huge hickey",
                            "points":  11
                        },
                        {
                            "text":  "big honkin' zit",
                            "points":  9
                        },
                        {
                            "text":  "messy/sticky hair",
                            "points":  3
                        },
                        {
                            "text":  "person/her hubby",
                            "points":  2
                        },
                        {
                            "text":  "rash/cold sore",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160036,
        "question":  "We asked 100 men... Be honest: Name something about Mary Poppins that you find sexy.",
        "answers":  [
                        {
                            "text":  "foxy outfit/hat",
                            "points":  25
                        },
                        {
                            "text":  "flies/umbrella",
                            "points":  22
                        },
                        {
                            "text":  "hot rolled hair",
                            "points":  13
                        },
                        {
                            "text":  "dat butt/dem curves",
                            "points":  13
                        },
                        {
                            "text":  "accent/voice",
                            "points":  11
                        },
                        {
                            "text":  "face/smile",
                            "points":  6
                        },
                        {
                            "text":  "her last name",
                            "points":  3
                        },
                        {
                            "text":  "bold & dominating",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160037,
        "question":  "If Santa Claus smoked marijuana, what might you leave out for him on Christmas Eve?",
        "answers":  [
                        {
                            "text":  "brownies",
                            "points":  24
                        },
                        {
                            "text":  "cookies",
                            "points":  24
                        },
                        {
                            "text":  "joint/bong/pipe",
                            "points":  24
                        },
                        {
                            "text":  "chips/cheetos",
                            "points":  13
                        },
                        {
                            "text":  "matches/lighter",
                            "points":  3
                        },
                        {
                            "text":  "candy",
                            "points":  3
                        },
                        {
                            "text":  "cops/warrant",
                            "points":  2
                        },
                        {
                            "text":  "pizza",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160038,
        "question":  "Name a card game you'd be surprised to see men playing on poker night.",
        "answers":  [
                        {
                            "text":  "go fish",
                            "points":  56
                        },
                        {
                            "text":  "old maid",
                            "points":  9
                        },
                        {
                            "text":  "bridge",
                            "points":  8
                        },
                        {
                            "text":  "uno",
                            "points":  7
                        },
                        {
                            "text":  "strip poker",
                            "points":  6
                        },
                        {
                            "text":  "solitaire",
                            "points":  3
                        },
                        {
                            "text":  "gin rummy",
                            "points":  3
                        },
                        {
                            "text":  "crazy eights",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160039,
        "question":  "Name a reason a woman might not want her husband on her team for \"Family Feud.\"",
        "answers":  [
                        {
                            "text":  "gives bad answers",
                            "points":  55
                        },
                        {
                            "text":  "competitive/argues",
                            "points":  14
                        },
                        {
                            "text":  "blabs/secrets",
                            "points":  10
                        },
                        {
                            "text":  "too slow on buzzer",
                            "points":  4
                        },
                        {
                            "text":  "doesn't listen",
                            "points":  3
                        },
                        {
                            "text":  "too racy",
                            "points":  3
                        },
                        {
                            "text":  "too smart",
                            "points":  3
                        },
                        {
                            "text":  "cheats at games",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160040,
        "question":  "Name something that worries you if it starts shaking.",
        "answers":  [
                        {
                            "text":  "car/steering wheel",
                            "points":  27
                        },
                        {
                            "text":  "house/building",
                            "points":  26
                        },
                        {
                            "text":  "person/me",
                            "points":  19
                        },
                        {
                            "text":  "ground/earth",
                            "points":  9
                        },
                        {
                            "text":  "airplane",
                            "points":  6
                        },
                        {
                            "text":  "washer",
                            "points":  3
                        },
                        {
                            "text":  "snake/rattler",
                            "points":  2
                        },
                        {
                            "text":  "refrigerator",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160041,
        "question":  "Name a reason a bride is late to her own wedding.",
        "answers":  [
                        {
                            "text":  "car issue/traffic",
                            "points":  25
                        },
                        {
                            "text":  "cold feet/doubts",
                            "points":  23
                        },
                        {
                            "text":  "hair/makeup issues",
                            "points":  16
                        },
                        {
                            "text":  "gown malfunction",
                            "points":  13
                        },
                        {
                            "text":  "overslept",
                            "points":  6
                        },
                        {
                            "text":  "sick/the trots",
                            "points":  5
                        },
                        {
                            "text":  "drunk...again",
                            "points":  3
                        },
                        {
                            "text":  "boinking/best man",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160042,
        "question":  "When Dorothy returned from Oz, what did she talk about that made her sound insane?",
        "answers":  [
                        {
                            "text":  "lion",
                            "points":  22
                        },
                        {
                            "text":  "the wizard",
                            "points":  21
                        },
                        {
                            "text":  "flying monkeys",
                            "points":  17
                        },
                        {
                            "text":  "munchkins",
                            "points":  13
                        },
                        {
                            "text":  "witches",
                            "points":  8
                        },
                        {
                            "text":  "you were all there!",
                            "points":  6
                        },
                        {
                            "text":  "yellow brick rd.",
                            "points":  4
                        },
                        {
                            "text":  "flying house/rainbow",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160043,
        "question":  "Name something in a bakery that a baker might nickname his wife's bottom.",
        "answers":  [
                        {
                            "text":  "buns/sticky buns",
                            "points":  47
                        },
                        {
                            "text":  "cupcake/cake",
                            "points":  16
                        },
                        {
                            "text":  "high-fiber muffin",
                            "points":  15
                        },
                        {
                            "text":  "donut hole",
                            "points":  6
                        },
                        {
                            "text":  "cream puff",
                            "points":  3
                        },
                        {
                            "text":  "cookie",
                            "points":  2
                        },
                        {
                            "text":  "doughball",
                            "points":  2
                        },
                        {
                            "text":  "sweet roll",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160044,
        "question":  "We asked 100 single women... Name something a man might do too much of that might be a turn-off.",
        "answers":  [
                        {
                            "text":  "talk/brag/whine",
                            "points":  39
                        },
                        {
                            "text":  "snore",
                            "points":  10
                        },
                        {
                            "text":  "ignore/not call",
                            "points":  10
                        },
                        {
                            "text":  "drink",
                            "points":  9
                        },
                        {
                            "text":  "cut the cheese",
                            "points":  9
                        },
                        {
                            "text":  "check his phone",
                            "points":  6
                        },
                        {
                            "text":  "burp/in my ear",
                            "points":  5
                        },
                        {
                            "text":  "call me/every hour",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160045,
        "question":  "We asked 100 married women... Name something you might be forced to throw at your husband to get his attention.",
        "answers":  [
                        {
                            "text":  "the remote",
                            "points":  38
                        },
                        {
                            "text":  "a pillow",
                            "points":  18
                        },
                        {
                            "text":  "panties/dirty laundry",
                            "points":  14
                        },
                        {
                            "text":  "a shoe",
                            "points":  10
                        },
                        {
                            "text":  "the frying pan",
                            "points":  5
                        },
                        {
                            "text":  "keys",
                            "points":  4
                        },
                        {
                            "text":  "her ring",
                            "points":  2
                        },
                        {
                            "text":  "food/a pineapple",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160046,
        "question":  "Name something grandma and grandpa do during their happy hour.",
        "answers":  [
                        {
                            "text":  "drink/prune juice",
                            "points":  37
                        },
                        {
                            "text":  "sleep",
                            "points":  26
                        },
                        {
                            "text":  "tv/matlock",
                            "points":  11
                        },
                        {
                            "text":  "eat",
                            "points":  5
                        },
                        {
                            "text":  "cuddle/smooch",
                            "points":  4
                        },
                        {
                            "text":  "talk/complain",
                            "points":  4
                        },
                        {
                            "text":  "make love",
                            "points":  4
                        },
                        {
                            "text":  "smoke a joint",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160047,
        "question":  "Name something a man might do if his boobs were bigger than his wife's.",
        "answers":  [
                        {
                            "text":  "get reduction",
                            "points":  28
                        },
                        {
                            "text":  "diet/exercise",
                            "points":  26
                        },
                        {
                            "text":  "wear bra",
                            "points":  21
                        },
                        {
                            "text":  "touch/play with them",
                            "points":  6
                        },
                        {
                            "text":  "show off/strip",
                            "points":  5
                        },
                        {
                            "text":  "cry",
                            "points":  3
                        },
                        {
                            "text":  "tape 'em down",
                            "points":  2
                        },
                        {
                            "text":  "stare at all day",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160048,
        "question":  "When Jesus comes back, name a Christmas tradition he might find strange.",
        "answers":  [
                        {
                            "text":  "santa/sit on lap",
                            "points":  25
                        },
                        {
                            "text":  "decorate tree",
                            "points":  21
                        },
                        {
                            "text":  "give gifts",
                            "points":  20
                        },
                        {
                            "text":  "mistletoe makeouts",
                            "points":  9
                        },
                        {
                            "text":  "carols/mariah song",
                            "points":  5
                        },
                        {
                            "text":  "hang stockings",
                            "points":  5
                        },
                        {
                            "text":  "black friday",
                            "points":  4
                        },
                        {
                            "text":  "food/eggnog",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160049,
        "question":  "If Steve Harvey came over to your home, what would you do to entertain him?",
        "answers":  [
                        {
                            "text":  "chat/joke/beg for $",
                            "points":  24
                        },
                        {
                            "text":  "cook/fried possum",
                            "points":  19
                        },
                        {
                            "text":  "tv/movies",
                            "points":  18
                        },
                        {
                            "text":  "play games/feud",
                            "points":  12
                        },
                        {
                            "text":  "drink/body shots",
                            "points":  7
                        },
                        {
                            "text":  "dance/striptease",
                            "points":  6
                        },
                        {
                            "text":  "throw party",
                            "points":  4
                        },
                        {
                            "text":  "tunes/sing hymnal",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160050,
        "question":  "We asked 100 women... I really love a man who does what when he kisses me?",
        "answers":  [
                        {
                            "text":  "holds/cups",
                            "points":  57
                        },
                        {
                            "text":  "closes his eyes",
                            "points":  10
                        },
                        {
                            "text":  "stroks my hair",
                            "points":  9
                        },
                        {
                            "text":  "goes slow/gentle",
                            "points":  6
                        },
                        {
                            "text":  "looks into my eyes",
                            "points":  3
                        },
                        {
                            "text":  "means it!",
                            "points":  3
                        },
                        {
                            "text":  "moans",
                            "points":  2
                        },
                        {
                            "text":  "has nice breath",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160051,
        "question":  "Name something you might take an extra one of when going to a nude beach.",
        "answers":  [
                        {
                            "text":  "towel/blanket",
                            "points":  53
                        },
                        {
                            "text":  "sunscreen",
                            "points":  24
                        },
                        {
                            "text":  "stiff drink",
                            "points":  4
                        },
                        {
                            "text":  "cover-up",
                            "points":  3
                        },
                        {
                            "text":  "wide-brimmed hat",
                            "points":  2
                        },
                        {
                            "text":  "camera",
                            "points":  2
                        },
                        {
                            "text":  "viagra",
                            "points":  2
                        },
                        {
                            "text":  "glance/look",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160052,
        "question":  "Name a children's game that would be sexy if it were played at a nudist camp.",
        "answers":  [
                        {
                            "text":  "twister",
                            "points":  53
                        },
                        {
                            "text":  "duck, duck, goose",
                            "points":  13
                        },
                        {
                            "text":  "tag",
                            "points":  10
                        },
                        {
                            "text":  "hide & seek",
                            "points":  5
                        },
                        {
                            "text":  "leapfrog",
                            "points":  4
                        },
                        {
                            "text":  "musical chairs",
                            "points":  3
                        },
                        {
                            "text":  "spin-the-bottle",
                            "points":  2
                        },
                        {
                            "text":  "hopscotch",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160053,
        "question":  "Name something a man holds in front of his lap when his zipper breaks in public.",
        "answers":  [
                        {
                            "text":  "hand/someone else's",
                            "points":  45
                        },
                        {
                            "text":  "book/paper",
                            "points":  20
                        },
                        {
                            "text":  "jacket/coat",
                            "points":  8
                        },
                        {
                            "text":  "briefcase",
                            "points":  5
                        },
                        {
                            "text":  "napkin",
                            "points":  4
                        },
                        {
                            "text":  "shirt/sweater",
                            "points":  4
                        },
                        {
                            "text":  "hat",
                            "points":  3
                        },
                        {
                            "text":  "laptop",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160054,
        "question":  "Harry said, \"Whenever I get romantic, my wife starts to\" what?",
        "answers":  [
                        {
                            "text":  "snooze/yawn",
                            "points":  42
                        },
                        {
                            "text":  "laugh/guffaw",
                            "points":  16
                        },
                        {
                            "text":  "get frisky",
                            "points":  8
                        },
                        {
                            "text":  "get a migraine",
                            "points":  8
                        },
                        {
                            "text":  "cry",
                            "points":  6
                        },
                        {
                            "text":  "yell at me/talk",
                            "points":  4
                        },
                        {
                            "text":  "stop/freeze",
                            "points":  4
                        },
                        {
                            "text":  "run away",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160055,
        "question":  "Name something a man brings home from a trip to Las Vegas that could cause a divorce.",
        "answers":  [
                        {
                            "text":  "a chick/new wife",
                            "points":  39
                        },
                        {
                            "text":  "panties/lingerie",
                            "points":  20
                        },
                        {
                            "text":  "4 std's",
                            "points":  17
                        },
                        {
                            "text":  "lipstick stains",
                            "points":  4
                        },
                        {
                            "text":  "pics",
                            "points":  3
                        },
                        {
                            "text":  "empty wallet",
                            "points":  3
                        },
                        {
                            "text":  "condom/empty box",
                            "points":  3
                        },
                        {
                            "text":  "phone number",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160056,
        "question":  "We asked 100 women... Name something specific you'd do to look like a Kardashian.",
        "answers":  [
                        {
                            "text":  "heavy makeup",
                            "points":  31
                        },
                        {
                            "text":  "nothing",
                            "points":  23
                        },
                        {
                            "text":  "work out/squats",
                            "points":  13
                        },
                        {
                            "text":  "surgery/butt implant",
                            "points":  9
                        },
                        {
                            "text":  "get tan",
                            "points":  6
                        },
                        {
                            "text":  "tight clothes",
                            "points":  4
                        },
                        {
                            "text":  "duck/pouty face",
                            "points":  3
                        },
                        {
                            "text":  "collagen lips",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160057,
        "question":  "Name something an ex-wife might leave on her ex-husband's doorstep when he's not home.",
        "answers":  [
                        {
                            "text":  "poop/hers",
                            "points":  31
                        },
                        {
                            "text":  "his clothes/shoes",
                            "points":  19
                        },
                        {
                            "text":  "bills",
                            "points":  12
                        },
                        {
                            "text":  "pic/her w/his bro",
                            "points":  10
                        },
                        {
                            "text":  "their kids",
                            "points":  8
                        },
                        {
                            "text":  "letter/note",
                            "points":  5
                        },
                        {
                            "text":  "a dead animal",
                            "points":  4
                        },
                        {
                            "text":  "court order",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160058,
        "question":  "We asked 100 women... Name something you like to imagine Steve Harvey wearing when he's relaxing at home.",
        "answers":  [
                        {
                            "text":  "robe/kimono",
                            "points":  29
                        },
                        {
                            "text":  "undies/leather thong",
                            "points":  16
                        },
                        {
                            "text":  "sweats",
                            "points":  15
                        },
                        {
                            "text":  "shorts",
                            "points":  13
                        },
                        {
                            "text":  "just a t-shirt",
                            "points":  6
                        },
                        {
                            "text":  "jammies/flannel",
                            "points":  6
                        },
                        {
                            "text":  "sunglasses",
                            "points":  4
                        },
                        {
                            "text":  "fuzzy slippers",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160059,
        "question":  "We asked 100 women... My ex just got a Tesla. Too bad I'm going to do what to it?",
        "answers":  [
                        {
                            "text":  "key/scratch",
                            "points":  28
                        },
                        {
                            "text":  "slash tires",
                            "points":  12
                        },
                        {
                            "text":  "steal/sell it",
                            "points":  11
                        },
                        {
                            "text":  "crash it",
                            "points":  10
                        },
                        {
                            "text":  "take joyride",
                            "points":  10
                        },
                        {
                            "text":  "take battery/unplug",
                            "points":  9
                        },
                        {
                            "text":  "break windows",
                            "points":  7
                        },
                        {
                            "text":  "hit/kick/dent",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160060,
        "question":  "Tell me an animal with three letters in its name that a man can never call his wife.",
        "answers":  [
                        {
                            "text":  "pig/hog",
                            "points":  26
                        },
                        {
                            "text":  "dog",
                            "points":  23
                        },
                        {
                            "text":  "cow",
                            "points":  11
                        },
                        {
                            "text":  "ape",
                            "points":  8
                        },
                        {
                            "text":  "cat",
                            "points":  8
                        },
                        {
                            "text":  "rat",
                            "points":  7
                        },
                        {
                            "text":  "ass",
                            "points":  5
                        },
                        {
                            "text":  "bat",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160061,
        "question":  "Name something Santa Claus might say he wants for Christmas.",
        "answers":  [
                        {
                            "text":  "vacay/time off",
                            "points":  24
                        },
                        {
                            "text":  "pimped-out sleigh",
                            "points":  22
                        },
                        {
                            "text":  "sleep/peace & quiet",
                            "points":  20
                        },
                        {
                            "text":  "more elves/help",
                            "points":  7
                        },
                        {
                            "text":  "the mrs.",
                            "points":  6
                        },
                        {
                            "text":  "food/cocoa",
                            "points":  5
                        },
                        {
                            "text":  "good flying weather",
                            "points":  4
                        },
                        {
                            "text":  "new suit/socks",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160062,
        "question":  "Name something you're happy to say you've never been bitten by.",
        "answers":  [
                        {
                            "text":  "snake",
                            "points":  70
                        },
                        {
                            "text":  "dog",
                            "points":  5
                        },
                        {
                            "text":  "shark",
                            "points":  5
                        },
                        {
                            "text":  "spider",
                            "points":  3
                        },
                        {
                            "text":  "rat",
                            "points":  2
                        },
                        {
                            "text":  "scorpion",
                            "points":  2
                        },
                        {
                            "text":  "vampire",
                            "points":  2
                        },
                        {
                            "text":  "horse",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160063,
        "question":  "We asked 100 married people... Name something your spouse doesn't know you have in the house.",
        "answers":  [
                        {
                            "text":  "cash/credit cards",
                            "points":  42
                        },
                        {
                            "text":  "gun",
                            "points":  16
                        },
                        {
                            "text":  "candy",
                            "points":  10
                        },
                        {
                            "text":  "new clothes/shoes",
                            "points":  8
                        },
                        {
                            "text":  "nudie magazines",
                            "points":  8
                        },
                        {
                            "text":  "gift for them",
                            "points":  3
                        },
                        {
                            "text":  "pics/of my ex7",
                            "points":  2
                        },
                        {
                            "text":  "pricey jewelry",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160064,
        "question":  "Bob said, \"My wife's legs are so hairy, it feels like I'm sleeping next to a\" what?",
        "answers":  [
                        {
                            "text":  "gorilla/monkey",
                            "points":  34
                        },
                        {
                            "text":  "bear",
                            "points":  18
                        },
                        {
                            "text":  "sasquatch/yeti",
                            "points":  11
                        },
                        {
                            "text":  "dog",
                            "points":  9
                        },
                        {
                            "text":  "porcupine",
                            "points":  7
                        },
                        {
                            "text":  "wolf/werewolf",
                            "points":  4
                        },
                        {
                            "text":  "dude/guy's beard",
                            "points":  4
                        },
                        {
                            "text":  "thorn bush/tree",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160065,
        "question":  "Name something Steve Harvey's wife might say Steve spends a lot of time doing at home.",
        "answers":  [
                        {
                            "text":  "fixing stache",
                            "points":  28
                        },
                        {
                            "text":  "flappin' lips/on phone",
                            "points":  23
                        },
                        {
                            "text":  "tv/feud marathon",
                            "points":  12
                        },
                        {
                            "text":  "sleeping",
                            "points":  9
                        },
                        {
                            "text":  "reading host cards",
                            "points":  6
                        },
                        {
                            "text":  "laughing/joking",
                            "points":  5
                        },
                        {
                            "text":  "dressing",
                            "points":  4
                        },
                        {
                            "text":  "eating bbq",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160066,
        "question":  "There's a dead body in your house. Cops will blame you. What do you do with the body?",
        "answers":  [
                        {
                            "text":  "bury it",
                            "points":  28
                        },
                        {
                            "text":  "hide it/in fridge",
                            "points":  18
                        },
                        {
                            "text":  "call cops anyway",
                            "points":  11
                        },
                        {
                            "text":  "leave it/don't touch",
                            "points":  10
                        },
                        {
                            "text":  "burn it",
                            "points":  7
                        },
                        {
                            "text":  "take to neighbor's",
                            "points":  7
                        },
                        {
                            "text":  "toss in lake",
                            "points":  5
                        },
                        {
                            "text":  "trash/dumpster",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160067,
        "question":  "Name something you'd leave on the gravesite of a rich relative who cut you out of their will.",
        "answers":  [
                        {
                            "text":  "flower/dead one",
                            "points":  24
                        },
                        {
                            "text":  "a long turd/whiz",
                            "points":  22
                        },
                        {
                            "text":  "nada",
                            "points":  21
                        },
                        {
                            "text":  "a penny",
                            "points":  11
                        },
                        {
                            "text":  "rock/dirt",
                            "points":  5
                        },
                        {
                            "text":  "nasty note/sign",
                            "points":  4
                        },
                        {
                            "text":  "footprints",
                            "points":  2
                        },
                        {
                            "text":  "lump of coal",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160068,
        "question":  "Name something that should happen to all men who cheat on their wives.",
        "answers":  [
                        {
                            "text":  "adios mr. stiffy",
                            "points":  58
                        },
                        {
                            "text":  "divorce",
                            "points":  11
                        },
                        {
                            "text":  "execution",
                            "points":  5
                        },
                        {
                            "text":  "go broke/fined",
                            "points":  4
                        },
                        {
                            "text":  "get caught",
                            "points":  3
                        },
                        {
                            "text":  "the clink/rikers",
                            "points":  3
                        },
                        {
                            "text":  "beaten",
                            "points":  3
                        },
                        {
                            "text":  "public shame/branded",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160069,
        "question":  "Name something women do in a sexy way that most men do not.",
        "answers":  [
                        {
                            "text":  "strut/wiggle hips",
                            "points":  56
                        },
                        {
                            "text":  "dress/undress",
                            "points":  12
                        },
                        {
                            "text":  "eat/lick fingers",
                            "points":  5
                        },
                        {
                            "text":  "sit/cross legs",
                            "points":  4
                        },
                        {
                            "text":  "play w/ their hair",
                            "points":  4
                        },
                        {
                            "text":  "wink/flutter lashes",
                            "points":  3
                        },
                        {
                            "text":  "talk/whisper",
                            "points":  3
                        },
                        {
                            "text":  "the look/pouty lips",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160070,
        "question":  "If cows could talk, tell me something they might complain about.",
        "answers":  [
                        {
                            "text":  "milked/teats pulled",
                            "points":  49
                        },
                        {
                            "text":  "boring food/grass",
                            "points":  17
                        },
                        {
                            "text":  "killed/eaten",
                            "points":  6
                        },
                        {
                            "text":  "weather/heat",
                            "points":  6
                        },
                        {
                            "text":  "annoying flies",
                            "points":  5
                        },
                        {
                            "text":  "standing all day",
                            "points":  3
                        },
                        {
                            "text":  "i'm so fat",
                            "points":  2
                        },
                        {
                            "text":  "mad cow disease",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160071,
        "question":  "The bridal shower was a flop because the male stripper they hired was too what?",
        "answers":  [
                        {
                            "text":  "porky",
                            "points":  38
                        },
                        {
                            "text":  "elderly",
                            "points":  18
                        },
                        {
                            "text":  "teeny in the weenie",
                            "points":  8
                        },
                        {
                            "text":  "skinny",
                            "points":  7
                        },
                        {
                            "text":  "shy/clothed",
                            "points":  7
                        },
                        {
                            "text":  "hairy",
                            "points":  6
                        },
                        {
                            "text":  "into dudes",
                            "points":  3
                        },
                        {
                            "text":  "facially challenged",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160072,
        "question":  "Name something you might do if your boss wore a Speedo to work.",
        "answers":  [
                        {
                            "text":  "laugh",
                            "points":  38
                        },
                        {
                            "text":  "gag/puke in mouth",
                            "points":  17
                        },
                        {
                            "text":  "leave/run home",
                            "points":  9
                        },
                        {
                            "text":  "take pic/post it",
                            "points":  8
                        },
                        {
                            "text":  "look away",
                            "points":  5
                        },
                        {
                            "text":  "stare",
                            "points":  5
                        },
                        {
                            "text":  "quit",
                            "points":  4
                        },
                        {
                            "text":  "complain to h.r.",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160073,
        "question":  "When you die, what would you want to have at your service that puts the \"fun\" in \"funeral\"?",
        "answers":  [
                        {
                            "text":  "music/karaoke",
                            "points":  37
                        },
                        {
                            "text":  "beer/open bar",
                            "points":  28
                        },
                        {
                            "text":  "performer/stripper",
                            "points":  7
                        },
                        {
                            "text":  "food/sundae bar",
                            "points":  5
                        },
                        {
                            "text":  "guests/\"the hoff\"",
                            "points":  4
                        },
                        {
                            "text":  "bounce house",
                            "points":  4
                        },
                        {
                            "text":  "dancing/conga line",
                            "points":  3
                        },
                        {
                            "text":  "confetti/streamers",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160074,
        "question":  "Name something men do that can turn any girlfriend into a psycho girlfriend.",
        "answers":  [
                        {
                            "text":  "cheat/sext tramps",
                            "points":  36
                        },
                        {
                            "text":  "lie",
                            "points":  14
                        },
                        {
                            "text":  "be a slob",
                            "points":  14
                        },
                        {
                            "text":  "not call",
                            "points":  9
                        },
                        {
                            "text":  "flirt/ogle",
                            "points":  8
                        },
                        {
                            "text":  "snore",
                            "points":  5
                        },
                        {
                            "text":  "say, \"you look fat\"",
                            "points":  2
                        },
                        {
                            "text":  "flip tv channels",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160075,
        "question":  "We asked 100 women... It's a jungle out there. Which animal do most of the men remind you of?",
        "answers":  [
                        {
                            "text":  "apes/baboons",
                            "points":  34
                        },
                        {
                            "text":  "jackasses",
                            "points":  24
                        },
                        {
                            "text":  "pigs",
                            "points":  13
                        },
                        {
                            "text":  "dogs",
                            "points":  6
                        },
                        {
                            "text":  "lions",
                            "points":  6
                        },
                        {
                            "text":  "hyenas",
                            "points":  3
                        },
                        {
                            "text":  "wolves",
                            "points":  2
                        },
                        {
                            "text":  "tigers",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160076,
        "question":  "We asked 100 single women... Name something men think impresses you but it doesn't.",
        "answers":  [
                        {
                            "text":  "money/income",
                            "points":  23
                        },
                        {
                            "text":  "porsche/big truck",
                            "points":  22
                        },
                        {
                            "text":  "muscles/6-pack",
                            "points":  20
                        },
                        {
                            "text":  "big purple eggplant",
                            "points":  8
                        },
                        {
                            "text":  "pick-up lines",
                            "points":  7
                        },
                        {
                            "text":  "dinner/sizzler",
                            "points":  6
                        },
                        {
                            "text":  "knows celeb/snooki",
                            "points":  2
                        },
                        {
                            "text":  "whistling",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160077,
        "question":  "Name someone a housewife might turn her attention to if she gets tired of the pool boy.",
        "answers":  [
                        {
                            "text":  "gardener",
                            "points":  47
                        },
                        {
                            "text":  "mailman/ups",
                            "points":  17
                        },
                        {
                            "text":  "repairman/plumber",
                            "points":  8
                        },
                        {
                            "text":  "neighbor",
                            "points":  6
                        },
                        {
                            "text":  "back to hubby",
                            "points":  4
                        },
                        {
                            "text":  "pizza boy/food guy",
                            "points":  3
                        },
                        {
                            "text":  "neighbor's pool boy",
                            "points":  2
                        },
                        {
                            "text":  "the pool lady",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160078,
        "question":  "We asked 100 men... The good news: It's your first day in heaven. The bad news: There's no what?",
        "answers":  [
                        {
                            "text":  "babes/boinking",
                            "points":  41
                        },
                        {
                            "text":  "beer/bars",
                            "points":  19
                        },
                        {
                            "text":  "sports/fishing",
                            "points":  7
                        },
                        {
                            "text":  "pizza/food",
                            "points":  7
                        },
                        {
                            "text":  "family/friends",
                            "points":  7
                        },
                        {
                            "text":  "tv/movies",
                            "points":  4
                        },
                        {
                            "text":  "weed",
                            "points":  2
                        },
                        {
                            "text":  "cloud to sleep on",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160079,
        "question":  "Fill in the blank: Sometimes at work, I fantasize about ______ing my boss.",
        "answers":  [
                        {
                            "text":  "slapping",
                            "points":  23
                        },
                        {
                            "text":  "killing",
                            "points":  18
                        },
                        {
                            "text":  "firing",
                            "points":  14
                        },
                        {
                            "text":  "cuss'g out/yell'g",
                            "points":  12
                        },
                        {
                            "text":  "kissin' & humpin'",
                            "points":  11
                        },
                        {
                            "text":  "being/replacing",
                            "points":  5
                        },
                        {
                            "text":  "ignoring",
                            "points":  4
                        },
                        {
                            "text":  "laughing at",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160080,
        "question":  "We asked 100 women... Dear men: The fastest way to turn a woman on is to buy her a what?",
        "answers":  [
                        {
                            "text":  "diamond/jewelry",
                            "points":  19
                        },
                        {
                            "text":  "meal/tgi fridays",
                            "points":  18
                        },
                        {
                            "text":  "pink corvette",
                            "points":  16
                        },
                        {
                            "text":  "puppy",
                            "points":  15
                        },
                        {
                            "text":  "rose",
                            "points":  9
                        },
                        {
                            "text":  "chocolate",
                            "points":  4
                        },
                        {
                            "text":  "vacuum",
                            "points":  4
                        },
                        {
                            "text":  "outfit/lingerie",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160081,
        "question":  "We asked 100 married women... Name something you've been tempted to do to your husband when he's fast asleep.",
        "answers":  [
                        {
                            "text":  "shave him/cut hair",
                            "points":  17
                        },
                        {
                            "text":  "smother/kill",
                            "points":  16
                        },
                        {
                            "text":  "push outta bed",
                            "points":  12
                        },
                        {
                            "text":  "tickle him",
                            "points":  12
                        },
                        {
                            "text":  "smack him",
                            "points":  11
                        },
                        {
                            "text":  "kiss his nips",
                            "points":  8
                        },
                        {
                            "text":  "draw on his face",
                            "points":  7
                        },
                        {
                            "text":  "pinch his nose",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  160082,
        "question":  "It's fun to get into a pillow fight. It's not fun if the other person puts what in their pillow?",
        "answers":  [
                        {
                            "text":  "rocks",
                            "points":  52
                        },
                        {
                            "text":  "bricks",
                            "points":  15
                        },
                        {
                            "text":  "shoes",
                            "points":  5
                        },
                        {
                            "text":  "books",
                            "points":  4
                        },
                        {
                            "text":  "soap bars",
                            "points":  3
                        },
                        {
                            "text":  "their fist",
                            "points":  3
                        },
                        {
                            "text":  "coins",
                            "points":  3
                        },
                        {
                            "text":  "ball/billiard balls",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160083,
        "question":  "Name something in your life you hope you don't have in the afterlife.",
        "answers":  [
                        {
                            "text":  "ailment/pinworms",
                            "points":  41
                        },
                        {
                            "text":  "stress/worry",
                            "points":  14
                        },
                        {
                            "text":  "debt/taxes",
                            "points":  14
                        },
                        {
                            "text":  "blubbery bod",
                            "points":  7
                        },
                        {
                            "text":  "a job",
                            "points":  3
                        },
                        {
                            "text":  "an ex",
                            "points":  3
                        },
                        {
                            "text":  "bad hair/baldness",
                            "points":  3
                        },
                        {
                            "text":  "my kids",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160084,
        "question":  "We asked 100 men... Name a place you've never made love but still hold out hope that you will someday.",
        "answers":  [
                        {
                            "text":  "airplane",
                            "points":  40
                        },
                        {
                            "text":  "kitchen/table",
                            "points":  12
                        },
                        {
                            "text":  "elevator",
                            "points":  12
                        },
                        {
                            "text":  "swimming pool",
                            "points":  7
                        },
                        {
                            "text":  "movie theater",
                            "points":  6
                        },
                        {
                            "text":  "shower/bathroom",
                            "points":  5
                        },
                        {
                            "text":  "beach",
                            "points":  3
                        },
                        {
                            "text":  "car/fire truck",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160085,
        "question":  "Name something a man reaches for when his wife says her mom is coming over to visit.",
        "answers":  [
                        {
                            "text":  "booze",
                            "points":  28
                        },
                        {
                            "text":  "keys/car keys",
                            "points":  21
                        },
                        {
                            "text":  "the remote",
                            "points":  15
                        },
                        {
                            "text":  "meds/pepto",
                            "points":  8
                        },
                        {
                            "text":  "wallet",
                            "points":  4
                        },
                        {
                            "text":  "gun/weapon",
                            "points":  4
                        },
                        {
                            "text":  "the phone",
                            "points":  4
                        },
                        {
                            "text":  "earmuffs/plugs",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160086,
        "question":  "Name something you can usually tell is fake because it looks so perfect.",
        "answers":  [
                        {
                            "text":  "boobs",
                            "points":  28
                        },
                        {
                            "text":  "flowers/plants",
                            "points":  20
                        },
                        {
                            "text":  "diamond/watch",
                            "points":  12
                        },
                        {
                            "text":  "hair/color",
                            "points":  10
                        },
                        {
                            "text":  "fruit/food",
                            "points":  6
                        },
                        {
                            "text":  "teeth/smile",
                            "points":  5
                        },
                        {
                            "text":  "airbrushed photo",
                            "points":  4
                        },
                        {
                            "text":  "painting/art",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160087,
        "question":  "At work, name something that's very unprofessional to do on your desk.",
        "answers":  [
                        {
                            "text":  "sleep/snore",
                            "points":  22
                        },
                        {
                            "text":  "eat/bbq ribs",
                            "points":  17
                        },
                        {
                            "text":  "boink/a customer",
                            "points":  16
                        },
                        {
                            "text":  "clip/paint nails",
                            "points":  10
                        },
                        {
                            "text":  "dance/tap",
                            "points":  9
                        },
                        {
                            "text":  "sit on it",
                            "points":  5
                        },
                        {
                            "text":  "wipe boogers",
                            "points":  5
                        },
                        {
                            "text":  "fart on it",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160088,
        "question":  "Name something small that grandpa might store in the cups of one of grandma's old bras.",
        "answers":  [
                        {
                            "text":  "cash/coins",
                            "points":  39
                        },
                        {
                            "text":  "food/beans",
                            "points":  15
                        },
                        {
                            "text":  "dentures",
                            "points":  11
                        },
                        {
                            "text":  "nails/hardware",
                            "points":  6
                        },
                        {
                            "text":  "jewelry/watch",
                            "points":  5
                        },
                        {
                            "text":  "socks",
                            "points":  4
                        },
                        {
                            "text":  "weed",
                            "points":  4
                        },
                        {
                            "text":  "medication",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160089,
        "question":  "Name an animal whose walk is easy to imitate.",
        "answers":  [
                        {
                            "text":  "gorilla/monkey",
                            "points":  38
                        },
                        {
                            "text":  "duck",
                            "points":  10
                        },
                        {
                            "text":  "penguin",
                            "points":  8
                        },
                        {
                            "text":  "dog",
                            "points":  7
                        },
                        {
                            "text":  "elephant",
                            "points":  7
                        },
                        {
                            "text":  "kangaroo",
                            "points":  6
                        },
                        {
                            "text":  "chicken",
                            "points":  6
                        },
                        {
                            "text":  "bear",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160090,
        "question":  "Name something you have now that you wish you had in high school.",
        "answers":  [
                        {
                            "text":  "car/mom van",
                            "points":  25
                        },
                        {
                            "text":  "wisdom/experience",
                            "points":  22
                        },
                        {
                            "text":  "money",
                            "points":  14
                        },
                        {
                            "text":  "confidence/esteem",
                            "points":  11
                        },
                        {
                            "text":  "computer/web",
                            "points":  6
                        },
                        {
                            "text":  "girlfriend/boyfriend",
                            "points":  4
                        },
                        {
                            "text":  "phone",
                            "points":  3
                        },
                        {
                            "text":  "curves",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160091,
        "question":  "When your mom says, \"I don't mean to criticize you,\" what is she about to criticize?",
        "answers":  [
                        {
                            "text":  "outfit/skankalicious",
                            "points":  24
                        },
                        {
                            "text":  "home/cleanliness",
                            "points":  15
                        },
                        {
                            "text":  "my weight",
                            "points":  11
                        },
                        {
                            "text":  "my mate/love life",
                            "points":  10
                        },
                        {
                            "text":  "my cooking",
                            "points":  8
                        },
                        {
                            "text":  "my hair",
                            "points":  8
                        },
                        {
                            "text":  "my parenting",
                            "points":  6
                        },
                        {
                            "text":  "every.single.thing.",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160092,
        "question":  "It was all fun and games at the family reunion until grandma got drunk and did what?",
        "answers":  [
                        {
                            "text":  "stripped/danced",
                            "points":  35
                        },
                        {
                            "text":  "blew chunks",
                            "points":  12
                        },
                        {
                            "text":  "passed out",
                            "points":  11
                        },
                        {
                            "text":  "got mouthy/cussed",
                            "points":  9
                        },
                        {
                            "text":  "fell/broke hip",
                            "points":  6
                        },
                        {
                            "text":  "shot folks",
                            "points":  5
                        },
                        {
                            "text":  "farted in kfc bucket",
                            "points":  4
                        },
                        {
                            "text":  "got fresh/with cuz",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160093,
        "question":  "Name an animal that women actually like being compared to.",
        "answers":  [
                        {
                            "text":  "cat/kitten",
                            "points":  26
                        },
                        {
                            "text":  "cougar/panther",
                            "points":  20
                        },
                        {
                            "text":  "fox",
                            "points":  13
                        },
                        {
                            "text":  "bird/peacock",
                            "points":  8
                        },
                        {
                            "text":  "cheetah",
                            "points":  6
                        },
                        {
                            "text":  "their dog",
                            "points":  5
                        },
                        {
                            "text":  "lioness",
                            "points":  4
                        },
                        {
                            "text":  "tigress",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160094,
        "question":  "Name something you'd love to run naked through.",
        "answers":  [
                        {
                            "text":  "sprinkler/water",
                            "points":  38
                        },
                        {
                            "text":  "field/woods",
                            "points":  28
                        },
                        {
                            "text":  "babes/librarians",
                            "points":  4
                        },
                        {
                            "text":  "automatic car wash",
                            "points":  3
                        },
                        {
                            "text":  "dollars",
                            "points":  3
                        },
                        {
                            "text":  "fabric/silk sheets",
                            "points":  3
                        },
                        {
                            "text":  "feathers",
                            "points":  3
                        },
                        {
                            "text":  "my house",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160095,
        "question":  "Name something a wife would never allow her husband to wear to church.",
        "answers":  [
                        {
                            "text":  "shorts/daisy dukes",
                            "points":  36
                        },
                        {
                            "text":  "speedo/trunks",
                            "points":  12
                        },
                        {
                            "text":  "tee/tank",
                            "points":  10
                        },
                        {
                            "text":  "her dress/skirt",
                            "points":  9
                        },
                        {
                            "text":  "hat/ball cap",
                            "points":  6
                        },
                        {
                            "text":  "pajamas",
                            "points":  5
                        },
                        {
                            "text":  "ripped jeans",
                            "points":  4
                        },
                        {
                            "text":  "costume/devil horns",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160096,
        "question":  "Name something at a hospital in Beverly Hills that might be made out of gold.",
        "answers":  [
                        {
                            "text":  "bedpan",
                            "points":  21
                        },
                        {
                            "text":  "faucet/sink",
                            "points":  15
                        },
                        {
                            "text":  "forceps/instruments",
                            "points":  15
                        },
                        {
                            "text":  "bed",
                            "points":  13
                        },
                        {
                            "text":  "toilet/seat",
                            "points":  12
                        },
                        {
                            "text":  "statues",
                            "points":  3
                        },
                        {
                            "text":  "jewelry/doc's watch",
                            "points":  3
                        },
                        {
                            "text":  "dishes/spoons",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160097,
        "question":  "If Steve Harvey's mustache could talk, name something it might say to him.",
        "answers":  [
                        {
                            "text":  "trim/shave me",
                            "points":  40
                        },
                        {
                            "text":  "quiet/watch your mouth",
                            "points":  13
                        },
                        {
                            "text":  "hey, sup?",
                            "points":  8
                        },
                        {
                            "text":  "clean me!",
                            "points":  8
                        },
                        {
                            "text":  "oh the lips i've seen",
                            "points":  6
                        },
                        {
                            "text":  "day-um, you sexy!",
                            "points":  4
                        },
                        {
                            "text":  "you're cool, dude",
                            "points":  3
                        },
                        {
                            "text":  "those are big lips",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160098,
        "question":  "Mrs. Claus just posed for Playboy magazine wearing what?",
        "answers":  [
                        {
                            "text":  "santa hat",
                            "points":  31
                        },
                        {
                            "text":  "nothing/a smile",
                            "points":  21
                        },
                        {
                            "text":  "lingerie/bloomers",
                            "points":  13
                        },
                        {
                            "text":  "velvet bikini",
                            "points":  6
                        },
                        {
                            "text":  "jingle bells",
                            "points":  4
                        },
                        {
                            "text":  "an apron",
                            "points":  3
                        },
                        {
                            "text":  "santa's beard",
                            "points":  3
                        },
                        {
                            "text":  "a red suit",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160099,
        "question":  "Name something a lonely plumber might do with his plunger.",
        "answers":  [
                        {
                            "text":  "dance/tango",
                            "points":  17
                        },
                        {
                            "text":  "plunge/work",
                            "points":  16
                        },
                        {
                            "text":  "kiss it",
                            "points":  15
                        },
                        {
                            "text":  "sleep with it",
                            "points":  14
                        },
                        {
                            "text":  "hug/fondle it",
                            "points":  8
                        },
                        {
                            "text":  "sing to/use as mic",
                            "points":  6
                        },
                        {
                            "text":  "clean it",
                            "points":  4
                        },
                        {
                            "text":  "talk/therapy",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160100,
        "question":  "Name something that people are probably always offering to Steve Harvey.",
        "answers":  [
                        {
                            "text":  "ideas/joke advice",
                            "points":  39
                        },
                        {
                            "text":  "french kiss/hug",
                            "points":  11
                        },
                        {
                            "text":  "money/bribes",
                            "points":  8
                        },
                        {
                            "text":  "phone #/date",
                            "points":  7
                        },
                        {
                            "text":  "food/ribs",
                            "points":  6
                        },
                        {
                            "text":  "their loins/baby #8",
                            "points":  4
                        },
                        {
                            "text":  "clothes/headscarf",
                            "points":  4
                        },
                        {
                            "text":  "breath mints",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160101,
        "question":  "Name something you hope someone hands you the minute you get to heaven.",
        "answers":  [
                        {
                            "text":  "booze",
                            "points":  26
                        },
                        {
                            "text":  "my wings",
                            "points":  20
                        },
                        {
                            "text":  "my family",
                            "points":  10
                        },
                        {
                            "text":  "food/frappucino",
                            "points":  7
                        },
                        {
                            "text":  "a crown/halo",
                            "points":  6
                        },
                        {
                            "text":  "my pets",
                            "points":  5
                        },
                        {
                            "text":  "key/to restroom",
                            "points":  5
                        },
                        {
                            "text":  "a harp",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160102,
        "question":  "After Santa had too much eggnog on Christmas Eve, name something he tried to stuff in his sack.",
        "answers":  [
                        {
                            "text":  "food/drinks",
                            "points":  22
                        },
                        {
                            "text":  "all the elves",
                            "points":  14
                        },
                        {
                            "text":  "mrs. claus",
                            "points":  11
                        },
                        {
                            "text":  "the reindeer",
                            "points":  10
                        },
                        {
                            "text":  "kid's dog/cat",
                            "points":  10
                        },
                        {
                            "text":  "christmas tree",
                            "points":  7
                        },
                        {
                            "text":  "the gifts, of course",
                            "points":  5
                        },
                        {
                            "text":  "a kid's hot mom",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160103,
        "question":  "Name something a driving teacher might do after riding with the worst student driver ever.",
        "answers":  [
                        {
                            "text":  "chug some hooch",
                            "points":  42
                        },
                        {
                            "text":  "quit",
                            "points":  16
                        },
                        {
                            "text":  "blow chunks",
                            "points":  8
                        },
                        {
                            "text":  "pray",
                            "points":  4
                        },
                        {
                            "text":  "cry",
                            "points":  3
                        },
                        {
                            "text":  "cuss/yell",
                            "points":  3
                        },
                        {
                            "text":  "flunk them",
                            "points":  3
                        },
                        {
                            "text":  "kiss the ground",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160104,
        "question":  "You're on death row. It's your last meal. What are you having?",
        "answers":  [
                        {
                            "text":  "steak/prime rib",
                            "points":  32
                        },
                        {
                            "text":  "seafood/sushi",
                            "points":  19
                        },
                        {
                            "text":  "pizza",
                            "points":  8
                        },
                        {
                            "text":  "pasta/lasagna",
                            "points":  8
                        },
                        {
                            "text":  "bacon/pork",
                            "points":  4
                        },
                        {
                            "text":  "chicken/wings",
                            "points":  4
                        },
                        {
                            "text":  "ice cream",
                            "points":  3
                        },
                        {
                            "text":  "rice-a-roni",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160105,
        "question":  "If you had the body of a kangaroo, what would you carry around in your pouch?",
        "answers":  [
                        {
                            "text":  "money/wallet",
                            "points":  23
                        },
                        {
                            "text":  "food/candy",
                            "points":  18
                        },
                        {
                            "text":  "babies/kids",
                            "points":  15
                        },
                        {
                            "text":  "cell phone",
                            "points":  7
                        },
                        {
                            "text":  "booze/a keg",
                            "points":  6
                        },
                        {
                            "text":  "keys",
                            "points":  5
                        },
                        {
                            "text":  "bottled water",
                            "points":  4
                        },
                        {
                            "text":  "gun",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160106,
        "question":  "When you think of your ex, name something it makes you want to do.",
        "answers":  [
                        {
                            "text":  "vomit/gag",
                            "points":  20
                        },
                        {
                            "text":  "scream/cuss",
                            "points":  16
                        },
                        {
                            "text":  "forget 'em/move on",
                            "points":  14
                        },
                        {
                            "text":  "laugh/smile",
                            "points":  10
                        },
                        {
                            "text":  "slap/kick 'em",
                            "points":  6
                        },
                        {
                            "text":  "celebrate",
                            "points":  5
                        },
                        {
                            "text":  "break stuff/hit wall",
                            "points":  5
                        },
                        {
                            "text":  "cry",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160107,
        "question":  "If Steve Harvey were reincarnated, name an animal he'd come back as.",
        "answers":  [
                        {
                            "text":  "lion",
                            "points":  16
                        },
                        {
                            "text":  "dog/hairless dog",
                            "points":  12
                        },
                        {
                            "text":  "hyena",
                            "points":  12
                        },
                        {
                            "text":  "panther/cougar",
                            "points":  11
                        },
                        {
                            "text":  "bear/panda",
                            "points":  9
                        },
                        {
                            "text":  "tiger",
                            "points":  8
                        },
                        {
                            "text":  "horse/black stallion",
                            "points":  8
                        },
                        {
                            "text":  "bird/chicken",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160108,
        "question":  "Name something you'd hate to get into the cranny of your fanny.",
        "answers":  [
                        {
                            "text":  "sand",
                            "points":  31
                        },
                        {
                            "text":  "food/fat pickle",
                            "points":  11
                        },
                        {
                            "text":  "bugs/wasp sting",
                            "points":  10
                        },
                        {
                            "text":  "my undies",
                            "points":  9
                        },
                        {
                            "text":  "toilet paper",
                            "points":  8
                        },
                        {
                            "text":  "dirt",
                            "points":  4
                        },
                        {
                            "text":  "poison ivy/rash",
                            "points":  4
                        },
                        {
                            "text":  "poop remnants",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160109,
        "question":  "If you had to trade your ears for those of an animal, which would you pick?",
        "answers":  [
                        {
                            "text":  "cat",
                            "points":  26
                        },
                        {
                            "text":  "dog/basset hound",
                            "points":  22
                        },
                        {
                            "text":  "monkey/ape",
                            "points":  13
                        },
                        {
                            "text":  "mouse/rat",
                            "points":  4
                        },
                        {
                            "text":  "elephant",
                            "points":  4
                        },
                        {
                            "text":  "fox",
                            "points":  4
                        },
                        {
                            "text":  "lynx/bobcat",
                            "points":  4
                        },
                        {
                            "text":  "bunny",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160110,
        "question":  "Name a place where you consider everybody there is crazy except you.",
        "answers":  [
                        {
                            "text":  "psych ward/hospital",
                            "points":  30
                        },
                        {
                            "text":  "my job",
                            "points":  19
                        },
                        {
                            "text":  "store/walmart",
                            "points":  8
                        },
                        {
                            "text":  "home",
                            "points":  7
                        },
                        {
                            "text":  "family reunion",
                            "points":  4
                        },
                        {
                            "text":  "political rally",
                            "points":  4
                        },
                        {
                            "text":  "church",
                            "points":  3
                        },
                        {
                            "text":  "california",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160111,
        "question":  "Tell me a breakfast cereal a male stripper might use as a stage name.",
        "answers":  [
                        {
                            "text":  "cap'n crunch",
                            "points":  20
                        },
                        {
                            "text":  "lucky charms",
                            "points":  14
                        },
                        {
                            "text":  "trix",
                            "points":  10
                        },
                        {
                            "text":  "special k",
                            "points":  7
                        },
                        {
                            "text":  "count chocula",
                            "points":  7
                        },
                        {
                            "text":  "kix",
                            "points":  6
                        },
                        {
                            "text":  "cheerios",
                            "points":  6
                        },
                        {
                            "text":  "cocoa puffs",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160112,
        "question":  "We asked 100 men... Name something you'd hate to get your finger stuck in.",
        "answers":  [
                        {
                            "text":  "door/car door",
                            "points":  15
                        },
                        {
                            "text":  "person/uranus",
                            "points":  12
                        },
                        {
                            "text":  "bottle/jar",
                            "points":  12
                        },
                        {
                            "text":  "socket/outlet",
                            "points":  10
                        },
                        {
                            "text":  "disposal/drain",
                            "points":  9
                        },
                        {
                            "text":  "a vice",
                            "points":  6
                        },
                        {
                            "text":  "meat grinder/slicer",
                            "points":  5
                        },
                        {
                            "text":  "fresh warm poo",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160113,
        "question":  "Name a way a wife might make the case that her husband is like an apple.",
        "answers":  [
                        {
                            "text":  "round/plump",
                            "points":  23
                        },
                        {
                            "text":  "sweet",
                            "points":  14
                        },
                        {
                            "text":  "rotten to core",
                            "points":  10
                        },
                        {
                            "text":  "crisp/firm",
                            "points":  6
                        },
                        {
                            "text":  "healthy/good 4 me",
                            "points":  5
                        },
                        {
                            "text":  "juicy",
                            "points":  4
                        },
                        {
                            "text":  "delicious",
                            "points":  4
                        },
                        {
                            "text":  "fun to bite him",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160114,
        "question":  "Name something a husband might get his wife for her birthday that would be grounds for divorce.",
        "answers":  [
                        {
                            "text":  "vacuum",
                            "points":  28
                        },
                        {
                            "text":  "nothing",
                            "points":  10
                        },
                        {
                            "text":  "diet plan/pills",
                            "points":  9
                        },
                        {
                            "text":  "hot chick/3-way",
                            "points":  9
                        },
                        {
                            "text":  "\"toy\"/handcuffs",
                            "points":  4
                        },
                        {
                            "text":  "gym pass/treadmill",
                            "points":  3
                        },
                        {
                            "text":  "face-lift/surgery",
                            "points":  3
                        },
                        {
                            "text":  "tools",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160115,
        "question":  "Name something a policewoman might do if she thinks her boyfriend is cheating on her.",
        "answers":  [
                        {
                            "text":  "spy/tail/surveil",
                            "points":  62
                        },
                        {
                            "text":  "cuff him/to bed",
                            "points":  10
                        },
                        {
                            "text":  "arrest/frame him",
                            "points":  7
                        },
                        {
                            "text":  "shoot/taze him",
                            "points":  6
                        },
                        {
                            "text":  "beat with baton",
                            "points":  5
                        },
                        {
                            "text":  "interrogate him",
                            "points":  5
                        },
                        {
                            "text":  "pull over/ticket",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160116,
        "question":  "We asked 100 women... If your man cheated on you, what might your girlfriends do to him?",
        "answers":  [
                        {
                            "text":  "tell off/cuss out",
                            "points":  43
                        },
                        {
                            "text":  "shun him",
                            "points":  20
                        },
                        {
                            "text":  "tell on him/tweet",
                            "points":  15
                        },
                        {
                            "text":  "beat/castrate",
                            "points":  14
                        },
                        {
                            "text":  "damage his car",
                            "points":  3
                        },
                        {
                            "text":  "nair in his shampoo",
                            "points":  2
                        },
                        {
                            "text":  "stalk him",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160117,
        "question":  "A big moment in Steve Harvey's life was when he decided to do what?",
        "answers":  [
                        {
                            "text":  "feud/tv host",
                            "points":  42
                        },
                        {
                            "text":  "marry/3 times",
                            "points":  19
                        },
                        {
                            "text":  "comedy/act",
                            "points":  13
                        },
                        {
                            "text":  "shave/shine his bean",
                            "points":  11
                        },
                        {
                            "text":  "\"miss colombia!\"",
                            "points":  7
                        },
                        {
                            "text":  "grow stache",
                            "points":  5
                        },
                        {
                            "text":  "speak for 1st time",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160118,
        "question":  "In the remake of \"The Wizard of Oz,\" what part would you like to see Steve Harvey play?",
        "answers":  [
                        {
                            "text":  "cowardly lion",
                            "points":  35
                        },
                        {
                            "text":  "tin man",
                            "points":  21
                        },
                        {
                            "text":  "the wizard",
                            "points":  19
                        },
                        {
                            "text":  "scarecrow",
                            "points":  17
                        },
                        {
                            "text":  "toto/dog",
                            "points":  3
                        },
                        {
                            "text":  "dorothy",
                            "points":  2
                        },
                        {
                            "text":  "wicked witch",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160119,
        "question":  "We asked 100 women... Name a reason you'd rather sleep with a dog than a man.",
        "answers":  [
                        {
                            "text":  "dogs cuddle",
                            "points":  31
                        },
                        {
                            "text":  "no snoring",
                            "points":  22
                        },
                        {
                            "text":  "loyal/sweeter",
                            "points":  19
                        },
                        {
                            "text":  "no sex-pectations",
                            "points":  12
                        },
                        {
                            "text":  "take up less room",
                            "points":  6
                        },
                        {
                            "text":  "kiss/affectionate",
                            "points":  6
                        },
                        {
                            "text":  "furry/warm",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160120,
        "question":  "We asked 100 married men... In heaven, what do you hope to finally get to have all to yourself?",
        "answers":  [
                        {
                            "text":  "time/quiet time",
                            "points":  22
                        },
                        {
                            "text":  "bathroom/vanity",
                            "points":  20
                        },
                        {
                            "text":  "remote/tv",
                            "points":  19
                        },
                        {
                            "text":  "the bed",
                            "points":  18
                        },
                        {
                            "text":  "my trampy mate",
                            "points":  10
                        },
                        {
                            "text":  "beer/keg",
                            "points":  6
                        },
                        {
                            "text":  "food/candy",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160121,
        "question":  "When you were a kid, who did you blame your misdeeds on?",
        "answers":  [
                        {
                            "text":  "my sibling",
                            "points":  71
                        },
                        {
                            "text":  "i blame only myself",
                            "points":  7
                        },
                        {
                            "text":  "my dog",
                            "points":  6
                        },
                        {
                            "text":  "imaginary friend",
                            "points":  5
                        },
                        {
                            "text":  "friend/neighbor kid",
                            "points":  5
                        },
                        {
                            "text":  "satan, lord of hell",
                            "points":  2
                        },
                        {
                            "text":  "pesky ghost",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160122,
        "question":  "Fill in the blank: Instead of sitting at my desk, I wish I were lying on ______.",
        "answers":  [
                        {
                            "text":  "the beach",
                            "points":  55
                        },
                        {
                            "text":  "my bed",
                            "points":  25
                        },
                        {
                            "text":  "a hammock",
                            "points":  5
                        },
                        {
                            "text":  "the couch",
                            "points":  4
                        },
                        {
                            "text":  "a hottie!",
                            "points":  4
                        },
                        {
                            "text":  "the floor",
                            "points":  3
                        },
                        {
                            "text":  "a cloud",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160123,
        "question":  "We asked 100 married women... Name a gift you'd buy for your husband to make him more attractive.",
        "answers":  [
                        {
                            "text":  "clothes/leather thong",
                            "points":  54
                        },
                        {
                            "text":  "cologne/aftershave",
                            "points":  25
                        },
                        {
                            "text":  "new hair/rogaine",
                            "points":  8
                        },
                        {
                            "text":  "gym pass/equipment",
                            "points":  4
                        },
                        {
                            "text":  "hair color",
                            "points":  3
                        },
                        {
                            "text":  "beard trimmer/razor",
                            "points":  2
                        },
                        {
                            "text":  "a few teeth",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160124,
        "question":  "We asked 100 married men... Honesty is not the best policy when discussing your wife's what?",
        "answers":  [
                        {
                            "text":  "weight/dress size",
                            "points":  54
                        },
                        {
                            "text":  "mother/her family",
                            "points":  14
                        },
                        {
                            "text":  "cooking",
                            "points":  10
                        },
                        {
                            "text":  "age",
                            "points":  8
                        },
                        {
                            "text":  "her face",
                            "points":  5
                        },
                        {
                            "text":  "ratty hair",
                            "points":  4
                        },
                        {
                            "text":  "spending",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160125,
        "question":  "Name something the average dad would do if a burglar broke into the house.",
        "answers":  [
                        {
                            "text":  "call 911",
                            "points":  46
                        },
                        {
                            "text":  "get gun/shoot",
                            "points":  18
                        },
                        {
                            "text":  "hide/under kid's bed",
                            "points":  15
                        },
                        {
                            "text":  "scream",
                            "points":  12
                        },
                        {
                            "text":  "hit/with bat",
                            "points":  3
                        },
                        {
                            "text":  "bark/growl like dog",
                            "points":  2
                        },
                        {
                            "text":  "run away",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160126,
        "question":  "If there's a stripper in your family, you just hope it's not your who?",
        "answers":  [
                        {
                            "text":  "mom",
                            "points":  45
                        },
                        {
                            "text":  "daughter/son",
                            "points":  23
                        },
                        {
                            "text":  "sibling",
                            "points":  9
                        },
                        {
                            "text":  "granny",
                            "points":  8
                        },
                        {
                            "text":  "dad",
                            "points":  6
                        },
                        {
                            "text":  "spouse/mate",
                            "points":  5
                        },
                        {
                            "text":  "91-yr.-old aunt",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160127,
        "question":  "Name something a farmer hopes the cow doesn't do when he's trying to milk it.",
        "answers":  [
                        {
                            "text":  "kick/him",
                            "points":  41
                        },
                        {
                            "text":  "whiz/snap a yam",
                            "points":  36
                        },
                        {
                            "text":  "let one rip",
                            "points":  13
                        },
                        {
                            "text":  "die",
                            "points":  2
                        },
                        {
                            "text":  "bite him",
                            "points":  2
                        },
                        {
                            "text":  "step/sit on him",
                            "points":  2
                        },
                        {
                            "text":  "hold it in/run dry",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160128,
        "question":  "Name a fun activity in kindergarten that you wish could be a fun activity at work.",
        "answers":  [
                        {
                            "text":  "art/play-doh",
                            "points":  37
                        },
                        {
                            "text":  "nap time",
                            "points":  25
                        },
                        {
                            "text":  "playtime/recess",
                            "points":  23
                        },
                        {
                            "text":  "sing-alongs",
                            "points":  5
                        },
                        {
                            "text":  "snack time",
                            "points":  4
                        },
                        {
                            "text":  "story time",
                            "points":  2
                        },
                        {
                            "text":  "show & tell/sharing",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160129,
        "question":  "What do you do at a family reunion when the family starts feuding?",
        "answers":  [
                        {
                            "text":  "leave/run away",
                            "points":  72
                        },
                        {
                            "text":  "intervene/stop it",
                            "points":  8
                        },
                        {
                            "text":  "drink more",
                            "points":  6
                        },
                        {
                            "text":  "eat their food",
                            "points":  3
                        },
                        {
                            "text":  "sit back & watch",
                            "points":  3
                        },
                        {
                            "text":  "join fight",
                            "points":  3
                        },
                        {
                            "text":  "post pics/vids",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160130,
        "question":  "Fill in the blank: The police arrested Old Mother Hubbard after they found ______ in her cupboard.",
        "answers":  [
                        {
                            "text":  "drugs/crack",
                            "points":  71
                        },
                        {
                            "text":  "severed head/bones",
                            "points":  8
                        },
                        {
                            "text":  "her kids/jack & jill",
                            "points":  7
                        },
                        {
                            "text":  "old father hubbard",
                            "points":  4
                        },
                        {
                            "text":  "weapons arsenal",
                            "points":  3
                        },
                        {
                            "text":  "poison",
                            "points":  2
                        },
                        {
                            "text":  "her poor dog",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160131,
        "question":  "Name something a woman is tempted to do to her man's behind when he bends over.",
        "answers":  [
                        {
                            "text":  "smack/pat it",
                            "points":  60
                        },
                        {
                            "text":  "pinch/goose it",
                            "points":  20
                        },
                        {
                            "text":  "kick it",
                            "points":  8
                        },
                        {
                            "text":  "grab/fondle it",
                            "points":  3
                        },
                        {
                            "text":  "poke it",
                            "points":  2
                        },
                        {
                            "text":  "stare/at crack",
                            "points":  2
                        },
                        {
                            "text":  "kiss it",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160132,
        "question":  "Name a reason a lady squirrel might say she's nuts about her mate.",
        "answers":  [
                        {
                            "text":  "brings delish nuts",
                            "points":  60
                        },
                        {
                            "text":  "hot bushy tail",
                            "points":  16
                        },
                        {
                            "text":  "his \"wooly mammoth\"",
                            "points":  7
                        },
                        {
                            "text":  "nice fur coat",
                            "points":  5
                        },
                        {
                            "text":  "cutie/big cheeks!",
                            "points":  4
                        },
                        {
                            "text":  "she's in love",
                            "points":  3
                        },
                        {
                            "text":  "eccentric/squirrelly",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160133,
        "question":  "Name something a lifeguard might get fired for doing on the job.",
        "answers":  [
                        {
                            "text":  "sleeping",
                            "points":  52
                        },
                        {
                            "text":  "drinking",
                            "points":  15
                        },
                        {
                            "text":  "flirt/mouth-to-mouth",
                            "points":  10
                        },
                        {
                            "text":  "pee in pool/on beach",
                            "points":  9
                        },
                        {
                            "text":  "smoking cigs",
                            "points":  4
                        },
                        {
                            "text":  "let people drown",
                            "points":  4
                        },
                        {
                            "text":  "being on phone",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160134,
        "question":  "Name something about a man's hair that would make it hard for a woman to run her fingers through it.",
        "answers":  [
                        {
                            "text":  "he's bald",
                            "points":  43
                        },
                        {
                            "text":  "hair products galore",
                            "points":  27
                        },
                        {
                            "text":  "it's dirty/greasy",
                            "points":  9
                        },
                        {
                            "text":  "too short/fade",
                            "points":  7
                        },
                        {
                            "text":  "sporting a wig",
                            "points":  5
                        },
                        {
                            "text":  "cornrows/braids",
                            "points":  3
                        },
                        {
                            "text":  "it's curly",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160135,
        "question":  "Name something you'd do to the guy who cut you off in traffic if you weren't such a chicken.",
        "answers":  [
                        {
                            "text":  "flip him off",
                            "points":  41
                        },
                        {
                            "text":  "ram car/off road",
                            "points":  21
                        },
                        {
                            "text":  "yell/cuss out",
                            "points":  11
                        },
                        {
                            "text":  "honk maniacally",
                            "points":  8
                        },
                        {
                            "text":  "cut him off",
                            "points":  8
                        },
                        {
                            "text":  "follow him home",
                            "points":  4
                        },
                        {
                            "text":  "beat up/wrestle",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160136,
        "question":  "We asked 100 married men... Fill in the blank: It's bad if your wife cheats on you. It's worse if the other guy is ______er than you.",
        "answers":  [
                        {
                            "text":  "sexier/handsomer",
                            "points":  40
                        },
                        {
                            "text":  "richer",
                            "points":  27
                        },
                        {
                            "text":  "bigger/everywhere",
                            "points":  11
                        },
                        {
                            "text":  "younger/22",
                            "points":  7
                        },
                        {
                            "text":  "uglier",
                            "points":  6
                        },
                        {
                            "text":  "older/pushin' 90",
                            "points":  4
                        },
                        {
                            "text":  "smaller",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160137,
        "question":  "Fill in the blank: A cowboy exotic dancer might only wear his ______ onstage.",
        "answers":  [
                        {
                            "text":  "cowboy hat",
                            "points":  29
                        },
                        {
                            "text":  "chaps",
                            "points":  25
                        },
                        {
                            "text":  "gun/gun belt",
                            "points":  16
                        },
                        {
                            "text":  "boots",
                            "points":  12
                        },
                        {
                            "text":  "g-string/undies",
                            "points":  8
                        },
                        {
                            "text":  "spurs",
                            "points":  4
                        },
                        {
                            "text":  "bandana",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160138,
        "question":  "We asked 100 single women... Fill in the blank: At a wild party, some guy tried to ______ my feet.",
        "answers":  [
                        {
                            "text":  "kiss",
                            "points":  28
                        },
                        {
                            "text":  "rub/touch",
                            "points":  20
                        },
                        {
                            "text":  "lick",
                            "points":  16
                        },
                        {
                            "text":  "tickle",
                            "points":  13
                        },
                        {
                            "text":  "suck",
                            "points":  12
                        },
                        {
                            "text":  "step/stomp on",
                            "points":  6
                        },
                        {
                            "text":  "smell",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160139,
        "question":  "We asked 100 women... If your man wore a thong, there'd still be enough room left in it to carry his what?",
        "answers":  [
                        {
                            "text":  "wallet/cash/id",
                            "points":  59
                        },
                        {
                            "text":  "phone/home phone",
                            "points":  22
                        },
                        {
                            "text":  "keys",
                            "points":  5
                        },
                        {
                            "text":  "gun",
                            "points":  4
                        },
                        {
                            "text":  "knife/machete",
                            "points":  2
                        },
                        {
                            "text":  "toothpick",
                            "points":  2
                        },
                        {
                            "text":  "hanky/tissue",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160140,
        "question":  "We asked 100 women... Fill in the blank: Ugh... I hate my ______.",
        "answers":  [
                        {
                            "text":  "figure/weight",
                            "points":  57
                        },
                        {
                            "text":  "hair",
                            "points":  15
                        },
                        {
                            "text":  "job",
                            "points":  10
                        },
                        {
                            "text":  "face/teeth",
                            "points":  5
                        },
                        {
                            "text":  "wrinkles",
                            "points":  5
                        },
                        {
                            "text":  "husband/mate",
                            "points":  2
                        },
                        {
                            "text":  "clothes",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160141,
        "question":  "Name something that George Washington would take off in a game of strip poker.",
        "answers":  [
                        {
                            "text":  "his hipster wig",
                            "points":  47
                        },
                        {
                            "text":  "his wooden teeth",
                            "points":  19
                        },
                        {
                            "text":  "that fly hat",
                            "points":  18
                        },
                        {
                            "text":  "his coat/jacket",
                            "points":  4
                        },
                        {
                            "text":  "his shoes/boots",
                            "points":  3
                        },
                        {
                            "text":  "his pants/knickers",
                            "points":  3
                        },
                        {
                            "text":  "his frilly shirt",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160142,
        "question":  "Name something grown-ups have to do that little kids should be glad they don't have to do.",
        "answers":  [
                        {
                            "text":  "go to work",
                            "points":  45
                        },
                        {
                            "text":  "pay bills/taxes",
                            "points":  29
                        },
                        {
                            "text":  "clean",
                            "points":  8
                        },
                        {
                            "text":  "shave",
                            "points":  7
                        },
                        {
                            "text":  "change diapers",
                            "points":  3
                        },
                        {
                            "text":  "mow the lawn",
                            "points":  2
                        },
                        {
                            "text":  "make out",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160143,
        "question":  "Name something people pick out of their bodies and study.",
        "answers":  [
                        {
                            "text":  "booger/green snot",
                            "points":  40
                        },
                        {
                            "text":  "earwax",
                            "points":  21
                        },
                        {
                            "text":  "lint/navel crust",
                            "points":  16
                        },
                        {
                            "text":  "hair/nose hair",
                            "points":  7
                        },
                        {
                            "text":  "scab/blood",
                            "points":  6
                        },
                        {
                            "text":  "blackhead/zit pus",
                            "points":  4
                        },
                        {
                            "text":  "stubborn turd",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160144,
        "question":  "Name a fruit a teenager might practice the art of kissing on.",
        "answers":  [
                        {
                            "text":  "apple",
                            "points":  35
                        },
                        {
                            "text":  "peach",
                            "points":  21
                        },
                        {
                            "text":  "orange",
                            "points":  20
                        },
                        {
                            "text":  "banana",
                            "points":  7
                        },
                        {
                            "text":  "melon/watermelon",
                            "points":  6
                        },
                        {
                            "text":  "lemon",
                            "points":  4
                        },
                        {
                            "text":  "plum",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160145,
        "question":  "Name a reason you're in a hole.",
        "answers":  [
                        {
                            "text":  "fell/into trap",
                            "points":  33
                        },
                        {
                            "text":  "debt/no $$$",
                            "points":  24
                        },
                        {
                            "text":  "digging",
                            "points":  20
                        },
                        {
                            "text":  "hiding/trench",
                            "points":  9
                        },
                        {
                            "text":  "i'm dead",
                            "points":  5
                        },
                        {
                            "text":  "i'm golfing",
                            "points":  3
                        },
                        {
                            "text":  "i'm a bunny! yay!",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160146,
        "question":  "We asked 100 women... If you woke up tomorrow with a perfect body, what might you wear to show it off?",
        "answers":  [
                        {
                            "text":  "bikini",
                            "points":  32
                        },
                        {
                            "text":  "tight jeans/leggings",
                            "points":  31
                        },
                        {
                            "text":  "sexy dress",
                            "points":  12
                        },
                        {
                            "text":  "not a dang thing",
                            "points":  11
                        },
                        {
                            "text":  "skimpy/crop top",
                            "points":  6
                        },
                        {
                            "text":  "daisy dukes",
                            "points":  2
                        },
                        {
                            "text":  "just panties/thong",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160147,
        "question":  "Name a reason you suspect your coworker is living in his cubicle.",
        "answers":  [
                        {
                            "text":  "clothes/hang drying",
                            "points":  27
                        },
                        {
                            "text":  "bedding/a cot",
                            "points":  27
                        },
                        {
                            "text":  "the stench",
                            "points":  15
                        },
                        {
                            "text":  "toiletries/soap",
                            "points":  9
                        },
                        {
                            "text":  "eats/cooks in it",
                            "points":  9
                        },
                        {
                            "text":  "no home/divorce",
                            "points":  5
                        },
                        {
                            "text":  "he's always there",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160148,
        "question":  "Name something Barbie has that makes Ken jealous.",
        "answers":  [
                        {
                            "text":  "house in malibu",
                            "points":  25
                        },
                        {
                            "text":  "boobs/nicer chest",
                            "points":  21
                        },
                        {
                            "text":  "car/corvette",
                            "points":  18
                        },
                        {
                            "text":  "long/real hair",
                            "points":  14
                        },
                        {
                            "text":  "clothes/shoes",
                            "points":  7
                        },
                        {
                            "text":  "doll pals/skipper",
                            "points":  6
                        },
                        {
                            "text":  "more fans",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160149,
        "question":  "For his birthday, the dog hopes he gets a scented candle that smells like what?",
        "answers":  [
                        {
                            "text":  "meat/a bone",
                            "points":  63
                        },
                        {
                            "text":  "butts/poo",
                            "points":  19
                        },
                        {
                            "text":  "peanut butter",
                            "points":  4
                        },
                        {
                            "text":  "cheese",
                            "points":  3
                        },
                        {
                            "text":  "candy",
                            "points":  2
                        },
                        {
                            "text":  "owner/his undies",
                            "points":  2
                        },
                        {
                            "text":  "animal carcass",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160150,
        "question":  "Name a way you like your men and your chili.",
        "answers":  [
                        {
                            "text":  "hot",
                            "points":  55
                        },
                        {
                            "text":  "spicy",
                            "points":  29
                        },
                        {
                            "text":  "mild",
                            "points":  3
                        },
                        {
                            "text":  "cooked/stewed",
                            "points":  2
                        },
                        {
                            "text":  "meaty/beefy",
                            "points":  2
                        },
                        {
                            "text":  "far from me",
                            "points":  2
                        },
                        {
                            "text":  "warm",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160151,
        "question":  "We asked 100 single men... Fill in the blank: I dated her for two years and never knew her ______ was fake.",
        "answers":  [
                        {
                            "text":  "boobage",
                            "points":  52
                        },
                        {
                            "text":  "bootious maximus",
                            "points":  12
                        },
                        {
                            "text":  "hair",
                            "points":  10
                        },
                        {
                            "text":  "nose",
                            "points":  8
                        },
                        {
                            "text":  "name",
                            "points":  7
                        },
                        {
                            "text":  "accent",
                            "points":  3
                        },
                        {
                            "text":  "job",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160152,
        "question":  "We asked 100 men... Name a place you go where you'd hate to realize your zipper was open the entire time.",
        "answers":  [
                        {
                            "text":  "church",
                            "points":  47
                        },
                        {
                            "text":  "work/interview",
                            "points":  30
                        },
                        {
                            "text":  "restaurant",
                            "points":  7
                        },
                        {
                            "text":  "party",
                            "points":  4
                        },
                        {
                            "text":  "stage/speech",
                            "points":  3
                        },
                        {
                            "text":  "my boo's parents'",
                            "points":  2
                        },
                        {
                            "text":  "bar",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160153,
        "question":  "Name a flower a stripper might use as her stage name.",
        "answers":  [
                        {
                            "text":  "rose",
                            "points":  43
                        },
                        {
                            "text":  "daisy",
                            "points":  29
                        },
                        {
                            "text":  "lily/tiger lily",
                            "points":  13
                        },
                        {
                            "text":  "poppy",
                            "points":  3
                        },
                        {
                            "text":  "petunia",
                            "points":  3
                        },
                        {
                            "text":  "jasmine",
                            "points":  2
                        },
                        {
                            "text":  "pansy",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160154,
        "question":  "Name an animal you're glad can't fly so it can't poop on your head like a bird.",
        "answers":  [
                        {
                            "text":  "elephant",
                            "points":  43
                        },
                        {
                            "text":  "dog",
                            "points":  18
                        },
                        {
                            "text":  "cow",
                            "points":  12
                        },
                        {
                            "text":  "horse",
                            "points":  12
                        },
                        {
                            "text":  "cat",
                            "points":  6
                        },
                        {
                            "text":  "pig",
                            "points":  2
                        },
                        {
                            "text":  "ape/monkey",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160155,
        "question":  "You open your trunk. You see a dead body. What's the very first thing you do?",
        "answers":  [
                        {
                            "text":  "call the police",
                            "points":  33
                        },
                        {
                            "text":  "scream/freak",
                            "points":  26
                        },
                        {
                            "text":  "close trunk",
                            "points":  23
                        },
                        {
                            "text":  "run",
                            "points":  5
                        },
                        {
                            "text":  "bury the body",
                            "points":  3
                        },
                        {
                            "text":  "call a friend",
                            "points":  3
                        },
                        {
                            "text":  "look around",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160156,
        "question":  "Name a place you never want to hear someone say, \"You're next.\"",
        "answers":  [
                        {
                            "text":  "doc/dentist/o.r.",
                            "points":  32
                        },
                        {
                            "text":  "funeral home",
                            "points":  27
                        },
                        {
                            "text":  "death row/prison",
                            "points":  24
                        },
                        {
                            "text":  "hell",
                            "points":  6
                        },
                        {
                            "text":  "slaughterhouse",
                            "points":  2
                        },
                        {
                            "text":  "military/draft board",
                            "points":  2
                        },
                        {
                            "text":  "police station",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160157,
        "question":  "We asked 100 married women... If you bought your man a Speedo with an animal print, what animal would be on it to match the size of his package?",
        "answers":  [
                        {
                            "text":  "elephant",
                            "points":  26
                        },
                        {
                            "text":  "tiger",
                            "points":  23
                        },
                        {
                            "text":  "lion",
                            "points":  22
                        },
                        {
                            "text":  "hippo",
                            "points":  11
                        },
                        {
                            "text":  "bull",
                            "points":  9
                        },
                        {
                            "text":  "yorkie/dog",
                            "points":  2
                        },
                        {
                            "text":  "mouse",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160158,
        "question":  "Based on its size, if your bottom were a planet, which one would it be?",
        "answers":  [
                        {
                            "text":  "uranus",
                            "points":  17
                        },
                        {
                            "text":  "earth",
                            "points":  16
                        },
                        {
                            "text":  "mars",
                            "points":  15
                        },
                        {
                            "text":  "jupiter",
                            "points":  15
                        },
                        {
                            "text":  "venus",
                            "points":  13
                        },
                        {
                            "text":  "pluto",
                            "points":  10
                        },
                        {
                            "text":  "saturn",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  160159,
        "question":  "Name a creature that wishes it could tell us humans, \"Don't step on me.\"",
        "answers":  [
                        {
                            "text":  "ant",
                            "points":  56
                        },
                        {
                            "text":  "cockroach",
                            "points":  10
                        },
                        {
                            "text":  "snake",
                            "points":  8
                        },
                        {
                            "text":  "worm",
                            "points":  8
                        },
                        {
                            "text":  "spider",
                            "points":  6
                        },
                        {
                            "text":  "teacup dog",
                            "points":  3
                        },
                        {
                            "text":  "snail/slug",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160160,
        "question":  "After the toys are delivered, where might Santa stop before heading back to the North Pole?",
        "answers":  [
                        {
                            "text":  "bar/rave club",
                            "points":  54
                        },
                        {
                            "text":  "eatery/coffee shop",
                            "points":  23
                        },
                        {
                            "text":  "spa/massage",
                            "points":  7
                        },
                        {
                            "text":  "restroom/take dump",
                            "points":  4
                        },
                        {
                            "text":  "bahamas/beach",
                            "points":  2
                        },
                        {
                            "text":  "someone's kitchen",
                            "points":  2
                        },
                        {
                            "text":  "strip joint",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160161,
        "question":  "What might a jealous stripper do to the pole when the hot new girl comes out?",
        "answers":  [
                        {
                            "text":  "grease/oil it",
                            "points":  53
                        },
                        {
                            "text":  "climb/grind it",
                            "points":  11
                        },
                        {
                            "text":  "break/unbolt it",
                            "points":  10
                        },
                        {
                            "text":  "lick/spit on it",
                            "points":  8
                        },
                        {
                            "text":  "gum/food on it",
                            "points":  7
                        },
                        {
                            "text":  "put glue on it",
                            "points":  3
                        },
                        {
                            "text":  "bengay on it",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160162,
        "question":  "What might Mrs. Claus find in Santa's sleigh from an office Christmas party he stopped at?",
        "answers":  [
                        {
                            "text":  "booze/eggnog",
                            "points":  52
                        },
                        {
                            "text":  "food/cookies",
                            "points":  15
                        },
                        {
                            "text":  "panties/clothes",
                            "points":  15
                        },
                        {
                            "text":  "stolen gifts",
                            "points":  4
                        },
                        {
                            "text":  "hoochie/drunk elf",
                            "points":  4
                        },
                        {
                            "text":  "rubbers",
                            "points":  2
                        },
                        {
                            "text":  "mistletoe",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160163,
        "question":  "Name something a man might say his ex-wife and an elephant have in common.",
        "answers":  [
                        {
                            "text":  "big butt/weight",
                            "points":  51
                        },
                        {
                            "text":  "good memory",
                            "points":  17
                        },
                        {
                            "text":  "long nose",
                            "points":  9
                        },
                        {
                            "text":  "big/loud mouth",
                            "points":  7
                        },
                        {
                            "text":  "rough wrinkly skin",
                            "points":  4
                        },
                        {
                            "text":  "big ears",
                            "points":  4
                        },
                        {
                            "text":  "huge feet",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160164,
        "question":  "Name something a naked gardener really has to be careful using.",
        "answers":  [
                        {
                            "text":  "shears/trimmer",
                            "points":  57
                        },
                        {
                            "text":  "weed-whacker",
                            "points":  13
                        },
                        {
                            "text":  "hoe",
                            "points":  9
                        },
                        {
                            "text":  "rake",
                            "points":  6
                        },
                        {
                            "text":  "saw/chain saw",
                            "points":  5
                        },
                        {
                            "text":  "chemical fertilizer",
                            "points":  2
                        },
                        {
                            "text":  "leaf blower",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160165,
        "question":  "We asked 100 single men... You broke up with your girl on February 13th. Great -- now instead of roses, you can spend the money on what?",
        "answers":  [
                        {
                            "text":  "a keg/booze",
                            "points":  49
                        },
                        {
                            "text":  "skin flicks",
                            "points":  12
                        },
                        {
                            "text":  "steak/food",
                            "points":  12
                        },
                        {
                            "text":  "vacation",
                            "points":  7
                        },
                        {
                            "text":  "video games",
                            "points":  6
                        },
                        {
                            "text":  "strippers",
                            "points":  5
                        },
                        {
                            "text":  "heidi the ho",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160166,
        "question":  "When grandma attempted a handstand, name something that fell to the ground.",
        "answers":  [
                        {
                            "text":  "her 3 teeth/dentures",
                            "points":  47
                        },
                        {
                            "text":  "her breasts",
                            "points":  17
                        },
                        {
                            "text":  "grandma",
                            "points":  10
                        },
                        {
                            "text":  "her glasses",
                            "points":  9
                        },
                        {
                            "text":  "her dress/shirt",
                            "points":  7
                        },
                        {
                            "text":  "her pearls/jewelry",
                            "points":  2
                        },
                        {
                            "text":  "her wig",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160167,
        "question":  "Fill in the blank: A wife might put super glue in her cheating husband's ______.",
        "answers":  [
                        {
                            "text":  "undies/clothes",
                            "points":  47
                        },
                        {
                            "text":  "wallet",
                            "points":  14
                        },
                        {
                            "text":  "condom",
                            "points":  14
                        },
                        {
                            "text":  "his urethra",
                            "points":  9
                        },
                        {
                            "text":  "car/ignition",
                            "points":  5
                        },
                        {
                            "text":  "lotion/preparation h",
                            "points":  3
                        },
                        {
                            "text":  "toothpaste",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160168,
        "question":  "We asked 100 married men... If your wife left you on Saturday night, what would you do on Sunday morning?",
        "answers":  [
                        {
                            "text":  "sleep in",
                            "points":  41
                        },
                        {
                            "text":  "watch football/tv",
                            "points":  17
                        },
                        {
                            "text":  "play golf",
                            "points":  12
                        },
                        {
                            "text":  "celebrate/smile",
                            "points":  8
                        },
                        {
                            "text":  "call her",
                            "points":  7
                        },
                        {
                            "text":  "go to church",
                            "points":  7
                        },
                        {
                            "text":  "cry",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160169,
        "question":  "Fill in the blank: If a man has to brag about being ______, he probably isn't.",
        "answers":  [
                        {
                            "text":  "rich/successful",
                            "points":  40
                        },
                        {
                            "text":  "smart",
                            "points":  22
                        },
                        {
                            "text":  "crackerjack in the sack",
                            "points":  14
                        },
                        {
                            "text":  "sexy/cute",
                            "points":  9
                        },
                        {
                            "text":  "brave",
                            "points":  3
                        },
                        {
                            "text":  "strong/tough",
                            "points":  3
                        },
                        {
                            "text":  "wonderful",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160170,
        "question":  "You'd be surprised if a fortune cookie said, \"Confucius say you have the worst\" what?",
        "answers":  [
                        {
                            "text":  "breath",
                            "points":  38
                        },
                        {
                            "text":  "luck",
                            "points":  27
                        },
                        {
                            "text":  "attitude",
                            "points":  8
                        },
                        {
                            "text":  "looks/hair",
                            "points":  8
                        },
                        {
                            "text":  "life/day ahead",
                            "points":  7
                        },
                        {
                            "text":  "b.o. pee-yew!",
                            "points":  4
                        },
                        {
                            "text":  "mind/memory",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160171,
        "question":  "We asked 100 men... If your dog were really your best friend, what would it be fetching for you every darn day?",
        "answers":  [
                        {
                            "text":  "beer/booze",
                            "points":  37
                        },
                        {
                            "text":  "remote",
                            "points":  15
                        },
                        {
                            "text":  "neighbor's newspaper",
                            "points":  13
                        },
                        {
                            "text":  "food/a steak",
                            "points":  11
                        },
                        {
                            "text":  "stolen cash",
                            "points":  10
                        },
                        {
                            "text":  "a fat blunt",
                            "points":  4
                        },
                        {
                            "text":  "my keys",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160172,
        "question":  "Name something about Colonel Sanders that a woman might find sexy.",
        "answers":  [
                        {
                            "text":  "tickly goatee",
                            "points":  36
                        },
                        {
                            "text":  "cooks/juicy thighs",
                            "points":  26
                        },
                        {
                            "text":  "white wavy hair",
                            "points":  14
                        },
                        {
                            "text":  "that fat wallet",
                            "points":  9
                        },
                        {
                            "text":  "hot southern voice",
                            "points":  3
                        },
                        {
                            "text":  "his gamey odor",
                            "points":  3
                        },
                        {
                            "text":  "that fly outfit",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160173,
        "question":  "We asked 100 women... Name one thing your man could do to make his kisses better.",
        "answers":  [
                        {
                            "text":  "brush/fresh breath",
                            "points":  29
                        },
                        {
                            "text":  "passion/slow down",
                            "points":  19
                        },
                        {
                            "text":  "not slobber",
                            "points":  15
                        },
                        {
                            "text":  "more/less tongue",
                            "points":  12
                        },
                        {
                            "text":  "use chapstick",
                            "points":  8
                        },
                        {
                            "text":  "kiss me more!",
                            "points":  6
                        },
                        {
                            "text":  "shave",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160174,
        "question":  "We asked 100 women... What would you do if a man came up to you and said he wanted to lick you from your head to your toes?",
        "answers":  [
                        {
                            "text":  "slap him",
                            "points":  27
                        },
                        {
                            "text":  "laugh",
                            "points":  18
                        },
                        {
                            "text":  "walk/run away",
                            "points":  18
                        },
                        {
                            "text":  "scold/\"get lost!\"",
                            "points":  12
                        },
                        {
                            "text":  "feel grossed out",
                            "points":  10
                        },
                        {
                            "text":  "ignore/do nothing",
                            "points":  5
                        },
                        {
                            "text":  "let him/\"please do\"",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160175,
        "question":  "If women grew beards like men, what would they do to make them look more feminine?",
        "answers":  [
                        {
                            "text":  "ribbon in it",
                            "points":  23
                        },
                        {
                            "text":  "braid it",
                            "points":  20
                        },
                        {
                            "text":  "dye/highlights",
                            "points":  16
                        },
                        {
                            "text":  "curl/perm it",
                            "points":  13
                        },
                        {
                            "text":  "shave/trim it",
                            "points":  12
                        },
                        {
                            "text":  "put glitter in it",
                            "points":  6
                        },
                        {
                            "text":  "bejewel it",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160176,
        "question":  "Name a place that if there were a swear jar, you'd be filling it up with cash.",
        "answers":  [
                        {
                            "text":  "bar",
                            "points":  22
                        },
                        {
                            "text":  "car/the road",
                            "points":  22
                        },
                        {
                            "text":  "home/kitchen",
                            "points":  22
                        },
                        {
                            "text":  "work",
                            "points":  18
                        },
                        {
                            "text":  "church",
                            "points":  4
                        },
                        {
                            "text":  "sports venue/golf",
                            "points":  4
                        },
                        {
                            "text":  "casino",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160177,
        "question":  "Name something rich people complain about that makes you want to slap them.",
        "answers":  [
                        {
                            "text":  "money/taxes/costs",
                            "points":  76
                        },
                        {
                            "text":  "no good servants",
                            "points":  5
                        },
                        {
                            "text":  "bad food/wine",
                            "points":  3
                        },
                        {
                            "text":  "waiting in line",
                            "points":  3
                        },
                        {
                            "text":  "poor people",
                            "points":  2
                        },
                        {
                            "text":  "travel/sick of paris",
                            "points":  2
                        },
                        {
                            "text":  "car/tesla battery",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160178,
        "question":  "Fill in the blank: A girl might tell a boy after they kiss, \"My ______ kisses better than that.\"",
        "answers":  [
                        {
                            "text":  "dog",
                            "points":  64
                        },
                        {
                            "text":  "dad",
                            "points":  8
                        },
                        {
                            "text":  "mom",
                            "points":  6
                        },
                        {
                            "text":  "cat",
                            "points":  4
                        },
                        {
                            "text":  "brother",
                            "points":  4
                        },
                        {
                            "text":  "ex",
                            "points":  4
                        },
                        {
                            "text":  "grandma",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160179,
        "question":  "It's bad if your lover dumps you. It's worse if they do what right after they dump you?",
        "answers":  [
                        {
                            "text":  "new lover/post pic",
                            "points":  55
                        },
                        {
                            "text":  "get married",
                            "points":  20
                        },
                        {
                            "text":  "brag/lie about",
                            "points":  8
                        },
                        {
                            "text":  "steal cash/credit",
                            "points":  3
                        },
                        {
                            "text":  "call/let's be pals",
                            "points":  3
                        },
                        {
                            "text":  "admit they're gay",
                            "points":  2
                        },
                        {
                            "text":  "sue me",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160180,
        "question":  "We asked 100 married men... You just realized you have the winning SuperLotto numbers. What might you do before telling your wife?",
        "answers":  [
                        {
                            "text":  "divorce/lawyer up",
                            "points":  42
                        },
                        {
                            "text":  "cash it in",
                            "points":  12
                        },
                        {
                            "text":  "nada/tell her asap",
                            "points":  10
                        },
                        {
                            "text":  "buy a car",
                            "points":  9
                        },
                        {
                            "text":  "tkt. in safe place",
                            "points":  7
                        },
                        {
                            "text":  "vacay/leave town",
                            "points":  7
                        },
                        {
                            "text":  "i'd never tell her",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  160181,
        "question":  "Name a place the cheapest airline in the world might make a passenger sit.",
        "answers":  [
                        {
                            "text":  "on toilet/lavatory",
                            "points":  40
                        },
                        {
                            "text":  "floor/aisle",
                            "points":  15
                        },
                        {
                            "text":  "cargo/luggage hold",
                            "points":  15
                        },
                        {
                            "text":  "on wing/tail",
                            "points":  12
                        },
                        {
                            "text":  "back row",
                            "points":  6
                        },
                        {
                            "text":  "cockpit",
                            "points":  3
                        },
                        {
                            "text":  "overhead bin",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160182,
        "question":  "Name something you worry that grandpa might blow all his money on so you get nothing.",
        "answers":  [
                        {
                            "text":  "gambling/lotto",
                            "points":  39
                        },
                        {
                            "text":  "honeys & hookers",
                            "points":  36
                        },
                        {
                            "text":  "fancy car",
                            "points":  6
                        },
                        {
                            "text":  "scotch/booze",
                            "points":  4
                        },
                        {
                            "text":  "drugs/viagra",
                            "points":  3
                        },
                        {
                            "text":  "property/home",
                            "points":  3
                        },
                        {
                            "text":  "hospital stay",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160183,
        "question":  "Instead of a casket, name something a person might choose to be buried in.",
        "answers":  [
                        {
                            "text":  "car/pinto",
                            "points":  32
                        },
                        {
                            "text":  "urn/vase",
                            "points":  30
                        },
                        {
                            "text":  "wood/cardboard box",
                            "points":  16
                        },
                        {
                            "text":  "boat/at sea",
                            "points":  5
                        },
                        {
                            "text":  "blanket/shroud",
                            "points":  4
                        },
                        {
                            "text":  "jar/folgers can",
                            "points":  3
                        },
                        {
                            "text":  "in dirt/a hole",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160184,
        "question":  "We asked 100 men... Name a reason you wouldn't kiss a woman at a kissing booth.",
        "answers":  [
                        {
                            "text":  "coyote ugly",
                            "points":  32
                        },
                        {
                            "text":  "germs/cold sore",
                            "points":  27
                        },
                        {
                            "text":  "my wife/has a gun",
                            "points":  14
                        },
                        {
                            "text":  "dragon breath",
                            "points":  12
                        },
                        {
                            "text":  "she kisses lotsa guys",
                            "points":  3
                        },
                        {
                            "text":  "bad teeth/only 3",
                            "points":  3
                        },
                        {
                            "text":  "has stache/chin hair",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160185,
        "question":  "Name something the stripper Little Red Riding Hood might pull out of her basket onstage.",
        "answers":  [
                        {
                            "text":  "food/sausage",
                            "points":  29
                        },
                        {
                            "text":  "the wolf",
                            "points":  19
                        },
                        {
                            "text":  "whip/toys",
                            "points":  14
                        },
                        {
                            "text":  "cape/hood",
                            "points":  13
                        },
                        {
                            "text":  "panties",
                            "points":  12
                        },
                        {
                            "text":  "pasties/bra",
                            "points":  4
                        },
                        {
                            "text":  "a boa",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160186,
        "question":  "Name something a man might wear to work if his female boss told him to dress sexy.",
        "answers":  [
                        {
                            "text":  "pickle pincher pants",
                            "points":  28
                        },
                        {
                            "text":  "sexy shirt/tank",
                            "points":  28
                        },
                        {
                            "text":  "suit/tie",
                            "points":  19
                        },
                        {
                            "text":  "undies/mesh thong",
                            "points":  7
                        },
                        {
                            "text":  "booty shorts",
                            "points":  6
                        },
                        {
                            "text":  "speedo",
                            "points":  3
                        },
                        {
                            "text":  "buttless chaps",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160187,
        "question":  "Name something you wish your dog wouldn't stick his nose into.",
        "answers":  [
                        {
                            "text":  "poop/litter box",
                            "points":  28
                        },
                        {
                            "text":  "fragrant fannies",
                            "points":  19
                        },
                        {
                            "text":  "my princess parts",
                            "points":  13
                        },
                        {
                            "text":  "garbage",
                            "points":  12
                        },
                        {
                            "text":  "food/fridge",
                            "points":  10
                        },
                        {
                            "text":  "the toilet",
                            "points":  6
                        },
                        {
                            "text":  "dirt/mud",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160188,
        "question":  "We asked 100 men... Fill in the blank: You'd love for women to say you're the ______est man they know.",
        "answers":  [
                        {
                            "text":  "sexiest",
                            "points":  26
                        },
                        {
                            "text":  "handsomest/cutest",
                            "points":  20
                        },
                        {
                            "text":  "smartest",
                            "points":  16
                        },
                        {
                            "text":  "nicest/sweetest",
                            "points":  12
                        },
                        {
                            "text":  "strongest",
                            "points":  9
                        },
                        {
                            "text":  "coolest",
                            "points":  5
                        },
                        {
                            "text":  "funniest",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160189,
        "question":  "Name something grandma might put in grandpa's coffee for his own good.",
        "answers":  [
                        {
                            "text":  "viagra",
                            "points":  24
                        },
                        {
                            "text":  "vitamins",
                            "points":  18
                        },
                        {
                            "text":  "laxative/prune juice",
                            "points":  15
                        },
                        {
                            "text":  "whiskey/booze",
                            "points":  13
                        },
                        {
                            "text":  "sleep aid/valium",
                            "points":  11
                        },
                        {
                            "text":  "sweetener/honey",
                            "points":  7
                        },
                        {
                            "text":  "cream/milk",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160190,
        "question":  "We asked 100 married men... Name something your mother-in-law could do to make you like her more.",
        "answers":  [
                        {
                            "text":  "cook/bake",
                            "points":  22
                        },
                        {
                            "text":  "don't talk/criticize",
                            "points":  20
                        },
                        {
                            "text":  "not visit/go home",
                            "points":  16
                        },
                        {
                            "text":  "pay me",
                            "points":  15
                        },
                        {
                            "text":  "move to cuba",
                            "points":  11
                        },
                        {
                            "text":  "be nicer/smile",
                            "points":  5
                        },
                        {
                            "text":  "take my side",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160191,
        "question":  "Name something about the Wicked Witch in \"The Wizard of Oz\" that a man might think is kind of sexy.",
        "answers":  [
                        {
                            "text":  "voice/cute cackle",
                            "points":  18
                        },
                        {
                            "text":  "killer bod/feet",
                            "points":  18
                        },
                        {
                            "text":  "hot black outfit",
                            "points":  18
                        },
                        {
                            "text":  "bewitch'g face/nose",
                            "points":  13
                        },
                        {
                            "text":  "way she rides broom",
                            "points":  12
                        },
                        {
                            "text":  "glow'g green skin",
                            "points":  8
                        },
                        {
                            "text":  "bad girl/tough",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  160192,
        "question":  "At a singles bar for dogs, a pickup line might be \"You have the sexiest\" what?",
        "answers":  [
                        {
                            "text":  "tail/wag",
                            "points":  51
                        },
                        {
                            "text":  "puckered pooper",
                            "points":  14
                        },
                        {
                            "text":  "bark",
                            "points":  8
                        },
                        {
                            "text":  "ears",
                            "points":  7
                        },
                        {
                            "text":  "collar",
                            "points":  5
                        },
                        {
                            "text":  "fur coat",
                            "points":  4
                        },
                        {
                            "text":  "stench",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160193,
        "question":  "Women have little black dresses. What's a man's go-to sexy outfit?",
        "answers":  [
                        {
                            "text":  "suit/white tux",
                            "points":  51
                        },
                        {
                            "text":  "grape-hugger jeans",
                            "points":  11
                        },
                        {
                            "text":  "birthday suit",
                            "points":  7
                        },
                        {
                            "text":  "speedo",
                            "points":  7
                        },
                        {
                            "text":  "undies/silk boxers",
                            "points":  6
                        },
                        {
                            "text":  "unbuttoned shirt",
                            "points":  5
                        },
                        {
                            "text":  "tank top/tee",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160194,
        "question":  "Name something grandma doesn't like grandpa taking.",
        "answers":  [
                        {
                            "text":  "viagra/drugs",
                            "points":  45
                        },
                        {
                            "text":  "naps",
                            "points":  21
                        },
                        {
                            "text":  "a drink/shots",
                            "points":  14
                        },
                        {
                            "text":  "the car/a drive",
                            "points":  5
                        },
                        {
                            "text":  "money",
                            "points":  3
                        },
                        {
                            "text":  "cookies/dessert",
                            "points":  2
                        },
                        {
                            "text":  "her dentures",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160195,
        "question":  "A woman doesn't need to be a magician to make a man disappear. She just needs to tell him she wants what?",
        "answers":  [
                        {
                            "text":  "commitment/a ring",
                            "points":  44
                        },
                        {
                            "text":  "his baby",
                            "points":  23
                        },
                        {
                            "text":  "cash/all of his",
                            "points":  14
                        },
                        {
                            "text":  "divorce/breakup",
                            "points":  5
                        },
                        {
                            "text":  "him to get vasectomy",
                            "points":  2
                        },
                        {
                            "text":  "a new car",
                            "points":  2
                        },
                        {
                            "text":  "\"to talk\"",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160196,
        "question":  "We asked 100 men... When you die, what do you hope your family doesn't bury you too close to?",
        "answers":  [
                        {
                            "text":  "my in-laws",
                            "points":  36
                        },
                        {
                            "text":  "landfill/dump",
                            "points":  13
                        },
                        {
                            "text":  "my ex",
                            "points":  11
                        },
                        {
                            "text":  "sewer/drainage",
                            "points":  10
                        },
                        {
                            "text":  "highway/road",
                            "points":  9
                        },
                        {
                            "text":  "my wife",
                            "points":  8
                        },
                        {
                            "text":  "river/stream",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160197,
        "question":  "We asked 100 married men... If your wife were listening, tell me an S word you'd use to describe her.",
        "answers":  [
                        {
                            "text":  "sexy",
                            "points":  34
                        },
                        {
                            "text":  "sweet",
                            "points":  30
                        },
                        {
                            "text":  "smart",
                            "points":  10
                        },
                        {
                            "text":  "sincere",
                            "points":  7
                        },
                        {
                            "text":  "spouse",
                            "points":  5
                        },
                        {
                            "text":  "spectacular",
                            "points":  3
                        },
                        {
                            "text":  "subtle",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160198,
        "question":  "Bob said, \"I have the most suspicious wife. She won't let me go\" where \"alone\"?",
        "answers":  [
                        {
                            "text":  "shopping/store",
                            "points":  28
                        },
                        {
                            "text":  "bathroom/drop logs",
                            "points":  21
                        },
                        {
                            "text":  "anywhere",
                            "points":  19
                        },
                        {
                            "text":  "bar/drinking",
                            "points":  13
                        },
                        {
                            "text":  "to work",
                            "points":  5
                        },
                        {
                            "text":  "church/confession",
                            "points":  3
                        },
                        {
                            "text":  "vacay/south beach",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160199,
        "question":  "Grandma says that grandpa is like old cheese because he is what?",
        "answers":  [
                        {
                            "text":  "pungent/smelly",
                            "points":  60
                        },
                        {
                            "text":  "aged/to perfection",
                            "points":  15
                        },
                        {
                            "text":  "moldy",
                            "points":  7
                        },
                        {
                            "text":  "fatty",
                            "points":  3
                        },
                        {
                            "text":  "stiff/brittle",
                            "points":  2
                        },
                        {
                            "text":  "soft",
                            "points":  2
                        },
                        {
                            "text":  "crumbling",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160200,
        "question":  "Name a reason you might regret kissing someone right after you kiss them.",
        "answers":  [
                        {
                            "text":  "bad breath/smoker",
                            "points":  53
                        },
                        {
                            "text":  "sick/cold sore",
                            "points":  14
                        },
                        {
                            "text":  "not single/wife saw",
                            "points":  7
                        },
                        {
                            "text":  "bad/sloppy kisser",
                            "points":  7
                        },
                        {
                            "text":  "wrong person",
                            "points":  5
                        },
                        {
                            "text":  "got wrong idea",
                            "points":  3
                        },
                        {
                            "text":  "they puked/i tasted",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160201,
        "question":  "We asked folks at home... What do you think Steve Harvey smells like?",
        "answers":  [
                        {
                            "text":  "cologne/axe",
                            "points":  48
                        },
                        {
                            "text":  "food/cinnamon",
                            "points":  24
                        },
                        {
                            "text":  "$1 billion/success",
                            "points":  6
                        },
                        {
                            "text":  "lilacs/flowers",
                            "points":  4
                        },
                        {
                            "text":  "b.o./sweat",
                            "points":  3
                        },
                        {
                            "text":  "soap/\"clean\"",
                            "points":  3
                        },
                        {
                            "text":  "cuban cigars",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160202,
        "question":  "Name something Mrs. Claus helps Santa do but she gets no credit.",
        "answers":  [
                        {
                            "text":  "wrap & load gifts",
                            "points":  45
                        },
                        {
                            "text":  "bake/stay fat",
                            "points":  15
                        },
                        {
                            "text":  "dress/laundry",
                            "points":  10
                        },
                        {
                            "text":  "feed reindeer",
                            "points":  8
                        },
                        {
                            "text":  "make naughty list",
                            "points":  5
                        },
                        {
                            "text":  "make toys",
                            "points":  5
                        },
                        {
                            "text":  "manage/fire elves",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160203,
        "question":  "Name something a woman has that she might complain is too small.",
        "answers":  [
                        {
                            "text":  "pancake boobs",
                            "points":  40
                        },
                        {
                            "text":  "bra/duds/shoes",
                            "points":  14
                        },
                        {
                            "text":  "badinkadink",
                            "points":  13
                        },
                        {
                            "text":  "house",
                            "points":  8
                        },
                        {
                            "text":  "income",
                            "points":  6
                        },
                        {
                            "text":  "diamond ring",
                            "points":  5
                        },
                        {
                            "text":  "purse",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160204,
        "question":  "The size and shape of Steve Harvey's head is like a perfect what?",
        "answers":  [
                        {
                            "text":  "melon/watermelon",
                            "points":  36
                        },
                        {
                            "text":  "ball/8-ball",
                            "points":  36
                        },
                        {
                            "text":  "pumpkin",
                            "points":  8
                        },
                        {
                            "text":  "circle/sphere",
                            "points":  4
                        },
                        {
                            "text":  "coconut",
                            "points":  3
                        },
                        {
                            "text":  "peach",
                            "points":  2
                        },
                        {
                            "text":  "oval",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160205,
        "question":  "Name something a doctor checks on you that would be weird if he asked you to check on him.",
        "answers":  [
                        {
                            "text":  "butt/rusty badge",
                            "points":  31
                        },
                        {
                            "text":  "his \"beef stroganoff\"",
                            "points":  24
                        },
                        {
                            "text":  "pulse/heart/bp",
                            "points":  13
                        },
                        {
                            "text":  "his hairy breasts",
                            "points":  9
                        },
                        {
                            "text":  "mouth/tonsils",
                            "points":  8
                        },
                        {
                            "text":  "ears",
                            "points":  4
                        },
                        {
                            "text":  "eyes",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160206,
        "question":  "Fill in the blank: Heaven can wait because I still want to do more ______ before I die.",
        "answers":  [
                        {
                            "text":  "traveling",
                            "points":  30
                        },
                        {
                            "text":  "\"living\"",
                            "points":  20
                        },
                        {
                            "text":  "child-rearing",
                            "points":  17
                        },
                        {
                            "text":  "shaggin'/kink",
                            "points":  10
                        },
                        {
                            "text":  "money-makin'",
                            "points":  7
                        },
                        {
                            "text":  "loving/marrying",
                            "points":  4
                        },
                        {
                            "text":  "eating",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160207,
        "question":  "Name something any woman would prefer to see a man holding instead of the remote.",
        "answers":  [
                        {
                            "text":  "flowers",
                            "points":  25
                        },
                        {
                            "text":  "her!",
                            "points":  24
                        },
                        {
                            "text":  "clean'g supplies/mop",
                            "points":  21
                        },
                        {
                            "text":  "wad of cash",
                            "points":  12
                        },
                        {
                            "text":  "wine/booze",
                            "points":  3
                        },
                        {
                            "text":  "tools",
                            "points":  3
                        },
                        {
                            "text":  "food/candy",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160208,
        "question":  "Name something Frankenstein's bride complains that her husband has two of that don't match.",
        "answers":  [
                        {
                            "text":  "hands/fingers",
                            "points":  23
                        },
                        {
                            "text":  "ears",
                            "points":  22
                        },
                        {
                            "text":  "feet",
                            "points":  15
                        },
                        {
                            "text":  "bolts/screws",
                            "points":  10
                        },
                        {
                            "text":  "arms",
                            "points":  9
                        },
                        {
                            "text":  "eyes",
                            "points":  8
                        },
                        {
                            "text":  "socks",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160209,
        "question":  "When grandma took her bra off, she heard a thud. And then she said, \"Oh, that's where I lost my\" what?",
        "answers":  [
                        {
                            "text":  "phone",
                            "points":  23
                        },
                        {
                            "text":  "wallet/purse",
                            "points":  20
                        },
                        {
                            "text":  "teeth",
                            "points":  19
                        },
                        {
                            "text":  "keys",
                            "points":  15
                        },
                        {
                            "text":  "glasses",
                            "points":  6
                        },
                        {
                            "text":  "remote",
                            "points":  5
                        },
                        {
                            "text":  "jewelry",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160210,
        "question":  "Name something horrible that horrible bosses do.",
        "answers":  [
                        {
                            "text":  "yell/berate",
                            "points":  54
                        },
                        {
                            "text":  "fire you",
                            "points":  10
                        },
                        {
                            "text":  "pile on work/o.t.",
                            "points":  8
                        },
                        {
                            "text":  "lie/take credit",
                            "points":  6
                        },
                        {
                            "text":  "flirt",
                            "points":  5
                        },
                        {
                            "text":  "underpay you",
                            "points":  4
                        },
                        {
                            "text":  "micromanage",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160211,
        "question":  "Nine out of ten men would like to be what?",
        "answers":  [
                        {
                            "text":  "rich",
                            "points":  53
                        },
                        {
                            "text":  "hot/buff",
                            "points":  15
                        },
                        {
                            "text":  "tall",
                            "points":  8
                        },
                        {
                            "text":  "single",
                            "points":  4
                        },
                        {
                            "text":  "younger",
                            "points":  4
                        },
                        {
                            "text":  "pro athlete",
                            "points":  3
                        },
                        {
                            "text":  "retired",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160212,
        "question":  "Name something that, once a year, a wife might put on her cheating husband's grave.",
        "answers":  [
                        {
                            "text":  "dead/black flowers",
                            "points":  42
                        },
                        {
                            "text":  "steamy dump/whiz",
                            "points":  20
                        },
                        {
                            "text":  "spit/big loogie",
                            "points":  8
                        },
                        {
                            "text":  "pic/of her new boo",
                            "points":  7
                        },
                        {
                            "text":  "condoms",
                            "points":  7
                        },
                        {
                            "text":  "rock/stone",
                            "points":  3
                        },
                        {
                            "text":  "graffiti/\"manslut\"",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160213,
        "question":  "Name someone wives might flirt with during an average day.",
        "answers":  [
                        {
                            "text":  "coworker/boss",
                            "points":  36
                        },
                        {
                            "text":  "mail/delivery man",
                            "points":  35
                        },
                        {
                            "text":  "husband",
                            "points":  6
                        },
                        {
                            "text":  "store worker/bag boy",
                            "points":  5
                        },
                        {
                            "text":  "waiter",
                            "points":  3
                        },
                        {
                            "text":  "repair/handyman",
                            "points":  3
                        },
                        {
                            "text":  "pool guy",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160214,
        "question":  "You're at a funeral. You hear a noise coming from the casket. What could it be?",
        "answers":  [
                        {
                            "text":  "mouse/critter",
                            "points":  36
                        },
                        {
                            "text":  "body gas/air",
                            "points":  17
                        },
                        {
                            "text":  "ghost/zombie",
                            "points":  10
                        },
                        {
                            "text":  "squeaky casket",
                            "points":  8
                        },
                        {
                            "text":  "omg! they're alive",
                            "points":  8
                        },
                        {
                            "text":  "phone in casket",
                            "points":  6
                        },
                        {
                            "text":  "my imagination",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160215,
        "question":  "We asked 100 married men... You think your wife has too much what?",
        "answers":  [
                        {
                            "text":  "clothing/jimmy choos",
                            "points":  36
                        },
                        {
                            "text":  "fat",
                            "points":  14
                        },
                        {
                            "text":  "jewelry3",
                            "points":  11
                        },
                        {
                            "text":  "free time",
                            "points":  10
                        },
                        {
                            "text":  "'tude",
                            "points":  9
                        },
                        {
                            "text":  "to say",
                            "points":  5
                        },
                        {
                            "text":  "hair/on her chest",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160216,
        "question":  "We asked 100 married women... You wanted a dreamboat, but instead you married what kind of boat?",
        "answers":  [
                        {
                            "text":  "tugboat",
                            "points":  35
                        },
                        {
                            "text":  "slow boat to china",
                            "points":  12
                        },
                        {
                            "text":  "steamboat",
                            "points":  12
                        },
                        {
                            "text":  "houseboat",
                            "points":  10
                        },
                        {
                            "text":  "love boat",
                            "points":  9
                        },
                        {
                            "text":  "fishing boat",
                            "points":  8
                        },
                        {
                            "text":  "sailboat/yacht",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160217,
        "question":  "Name a place where grandma and grandpa celebrated their 75th anniversary.",
        "answers":  [
                        {
                            "text":  "old folks' home",
                            "points":  29
                        },
                        {
                            "text":  "home/bed",
                            "points":  15
                        },
                        {
                            "text":  "golden corral/eatery",
                            "points":  14
                        },
                        {
                            "text":  "6 ft under/heaven",
                            "points":  14
                        },
                        {
                            "text":  "vacay/florida",
                            "points":  10
                        },
                        {
                            "text":  "church",
                            "points":  5
                        },
                        {
                            "text":  "theme park",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160218,
        "question":  "Name something Tarzan puts on when he's feeling romantic.",
        "answers":  [
                        {
                            "text":  "nice loincloth/thong",
                            "points":  28
                        },
                        {
                            "text":  "more clothes/tie",
                            "points":  23
                        },
                        {
                            "text":  "leaf/flower",
                            "points":  15
                        },
                        {
                            "text":  "scent/eau de ape",
                            "points":  9
                        },
                        {
                            "text":  "sexy jungle music",
                            "points":  7
                        },
                        {
                            "text":  "coconut oil",
                            "points":  4
                        },
                        {
                            "text":  "banana bandana",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160219,
        "question":  "Name something the dog does to guarantee you will like him better than the cat.",
        "answers":  [
                        {
                            "text":  "snuggles/on lap",
                            "points":  25
                        },
                        {
                            "text":  "fetches/tricks",
                            "points":  24
                        },
                        {
                            "text":  "kisses/licks me good",
                            "points":  16
                        },
                        {
                            "text":  "greets at door",
                            "points":  7
                        },
                        {
                            "text":  "obeys/when called",
                            "points":  7
                        },
                        {
                            "text":  "protects me/home",
                            "points":  6
                        },
                        {
                            "text":  "pees/poos outside",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160220,
        "question":  "It's bad if a regular old fish gets into your bathing suit. It's worse if what sea creature gets in there?",
        "answers":  [
                        {
                            "text":  "jellyfish",
                            "points":  24
                        },
                        {
                            "text":  "crab",
                            "points":  20
                        },
                        {
                            "text":  "shark",
                            "points":  16
                        },
                        {
                            "text":  "octopus",
                            "points":  11
                        },
                        {
                            "text":  "eel",
                            "points":  8
                        },
                        {
                            "text":  "snake",
                            "points":  6
                        },
                        {
                            "text":  "stingray",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160221,
        "question":  "When your ship finally comes in, what one thing do you hope is on it?",
        "answers":  [
                        {
                            "text":  "money/treasure",
                            "points":  56
                        },
                        {
                            "text":  "people/1000 studs",
                            "points":  11
                        },
                        {
                            "text":  "food/chocolate",
                            "points":  10
                        },
                        {
                            "text":  "booze",
                            "points":  6
                        },
                        {
                            "text":  "weed",
                            "points":  2
                        },
                        {
                            "text":  "home/beach house",
                            "points":  2
                        },
                        {
                            "text":  "car/aston martin",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160222,
        "question":  "After a hard day at work, you just need one thing. What is it?",
        "answers":  [
                        {
                            "text":  "booze",
                            "points":  38
                        },
                        {
                            "text":  "sleep/my pillow",
                            "points":  21
                        },
                        {
                            "text":  "quiet/me time",
                            "points":  13
                        },
                        {
                            "text":  "dinner/snack",
                            "points":  5
                        },
                        {
                            "text":  "a fat doob",
                            "points":  5
                        },
                        {
                            "text":  "hot bath/shower",
                            "points":  5
                        },
                        {
                            "text":  "hug/love",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160223,
        "question":  "Name something a man has got to have to look good bald.",
        "answers":  [
                        {
                            "text":  "smooth shapely head",
                            "points":  37
                        },
                        {
                            "text":  "nice face/eyes",
                            "points":  16
                        },
                        {
                            "text":  "a hat on",
                            "points":  12
                        },
                        {
                            "text":  "beard/stache",
                            "points":  11
                        },
                        {
                            "text":  "shiny head",
                            "points":  7
                        },
                        {
                            "text":  "a tan/dark skin",
                            "points":  3
                        },
                        {
                            "text":  "tall, muscly bod",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160224,
        "question":  "We asked 100 women... Fill in the blank: My boyfriend isn't as ______ as he thinks he is.",
        "answers":  [
                        {
                            "text":  "hot/handsome",
                            "points":  35
                        },
                        {
                            "text":  "smart/clever",
                            "points":  28
                        },
                        {
                            "text":  "funny",
                            "points":  7
                        },
                        {
                            "text":  "rich",
                            "points":  7
                        },
                        {
                            "text":  "macho",
                            "points":  6
                        },
                        {
                            "text":  "fit/thin/buff",
                            "points":  3
                        },
                        {
                            "text":  "big/down there",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160225,
        "question":  "Name something Good Santa does that Bad Santa thinks is corny.",
        "answers":  [
                        {
                            "text":  "gives free gifts",
                            "points":  27
                        },
                        {
                            "text":  "milk & cookies",
                            "points":  24
                        },
                        {
                            "text":  "\"ho ho ho\"/laughs",
                            "points":  23
                        },
                        {
                            "text":  "makes a list",
                            "points":  5
                        },
                        {
                            "text":  "talks to kids/on lap",
                            "points":  4
                        },
                        {
                            "text":  "sings carols",
                            "points":  3
                        },
                        {
                            "text":  "loves reindeer",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160226,
        "question":  "Name something that might steal a squirrel's nuts.",
        "answers":  [
                        {
                            "text":  "bird",
                            "points":  26
                        },
                        {
                            "text":  "another squirrel",
                            "points":  24
                        },
                        {
                            "text":  "chipmunk",
                            "points":  22
                        },
                        {
                            "text":  "raccoon",
                            "points":  7
                        },
                        {
                            "text":  "mouse/rat",
                            "points":  4
                        },
                        {
                            "text":  "cat",
                            "points":  3
                        },
                        {
                            "text":  "person",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160227,
        "question":  "Give me an exact word that describes a tomato and someone's bottom.",
        "answers":  [
                        {
                            "text":  "plump",
                            "points":  25
                        },
                        {
                            "text":  "round",
                            "points":  24
                        },
                        {
                            "text":  "juicy",
                            "points":  17
                        },
                        {
                            "text":  "red",
                            "points":  9
                        },
                        {
                            "text":  "firm",
                            "points":  8
                        },
                        {
                            "text":  "smooth",
                            "points":  3
                        },
                        {
                            "text":  "ripe",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160228,
        "question":  "Name something that mean grandma might use grandpa's toupee to clean.",
        "answers":  [
                        {
                            "text":  "the toilet",
                            "points":  51
                        },
                        {
                            "text":  "furniture",
                            "points":  9
                        },
                        {
                            "text":  "the floor",
                            "points":  9
                        },
                        {
                            "text":  "sink/drain",
                            "points":  5
                        },
                        {
                            "text":  "herself/her butt",
                            "points":  5
                        },
                        {
                            "text":  "the dishes",
                            "points":  5
                        },
                        {
                            "text":  "stove/oven",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160229,
        "question":  "Tell me a name a weathercaster might name her baby.",
        "answers":  [
                        {
                            "text":  "stormy/storm",
                            "points":  45
                        },
                        {
                            "text":  "sunny/sunshine",
                            "points":  24
                        },
                        {
                            "text":  "rain",
                            "points":  6
                        },
                        {
                            "text":  "summer",
                            "points":  5
                        },
                        {
                            "text":  "windy",
                            "points":  4
                        },
                        {
                            "text":  "cloudy",
                            "points":  2
                        },
                        {
                            "text":  "breezy",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160230,
        "question":  "Name an animal that poops more than you do.",
        "answers":  [
                        {
                            "text":  "dog",
                            "points":  38
                        },
                        {
                            "text":  "bird/goose",
                            "points":  19
                        },
                        {
                            "text":  "elephant",
                            "points":  11
                        },
                        {
                            "text":  "horse",
                            "points":  7
                        },
                        {
                            "text":  "cat",
                            "points":  6
                        },
                        {
                            "text":  "rabbit",
                            "points":  4
                        },
                        {
                            "text":  "cow",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160231,
        "question":  "Name an occupation you'd be surprised a stripper has as their day job.",
        "answers":  [
                        {
                            "text":  "teacher/sunday school",
                            "points":  34
                        },
                        {
                            "text":  "doctor",
                            "points":  13
                        },
                        {
                            "text":  "nurse",
                            "points":  13
                        },
                        {
                            "text":  "lawyer",
                            "points":  13
                        },
                        {
                            "text":  "librarian",
                            "points":  7
                        },
                        {
                            "text":  "account'g/finance",
                            "points":  6
                        },
                        {
                            "text":  "day care worker",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160232,
        "question":  "Name something specific Martha Stewart might do to a chicken or an ex-lover in her kitchen.",
        "answers":  [
                        {
                            "text":  "cook/roast 'em",
                            "points":  33
                        },
                        {
                            "text":  "chop/skin 'em",
                            "points":  32
                        },
                        {
                            "text":  "debone 'em",
                            "points":  7
                        },
                        {
                            "text":  "marinade/season 'em",
                            "points":  6
                        },
                        {
                            "text":  "wring his neck",
                            "points":  4
                        },
                        {
                            "text":  "pluck 'em bald",
                            "points":  3
                        },
                        {
                            "text":  "stuff 'em",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160233,
        "question":  "Name a part of Steve Harvey's body that you bet is as soft as a baby's behind.",
        "answers":  [
                        {
                            "text":  "milk dud head",
                            "points":  31
                        },
                        {
                            "text":  "spankable booty",
                            "points":  17
                        },
                        {
                            "text":  "belly/washboard abs",
                            "points":  11
                        },
                        {
                            "text":  "sleek cheeks",
                            "points":  10
                        },
                        {
                            "text":  "bee-stung lips",
                            "points":  9
                        },
                        {
                            "text":  "hot lotioned hands",
                            "points":  7
                        },
                        {
                            "text":  "sexy shaven legs",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160234,
        "question":  "If a wife wanted to rub it in, what might she wear when serving her husband divorce papers?",
        "answers":  [
                        {
                            "text":  "lingerie/nightie",
                            "points":  30
                        },
                        {
                            "text":  "sexy dress/skirt",
                            "points":  19
                        },
                        {
                            "text":  "nada",
                            "points":  13
                        },
                        {
                            "text":  "bikini",
                            "points":  11
                        },
                        {
                            "text":  "ring from new stud",
                            "points":  7
                        },
                        {
                            "text":  "wedding dress",
                            "points":  4
                        },
                        {
                            "text":  "stilettos",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160235,
        "question":  "We asked 100 married women... I wouldn't have invited my ex to my wedding if I'd known he'd sit there and what?",
        "answers":  [
                        {
                            "text":  "cry/sulk",
                            "points":  28
                        },
                        {
                            "text":  "heckle/throw shade",
                            "points":  22
                        },
                        {
                            "text":  "laugh/smirk",
                            "points":  13
                        },
                        {
                            "text":  "sleep/pass out",
                            "points":  9
                        },
                        {
                            "text":  "slow clap",
                            "points":  6
                        },
                        {
                            "text":  "text",
                            "points":  6
                        },
                        {
                            "text":  "sing/to bridal march",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160236,
        "question":  "Name something a Beverly Hills baby gets for her first birthday.",
        "answers":  [
                        {
                            "text":  "diamonds/jewelry",
                            "points":  27
                        },
                        {
                            "text":  "moolah/stocks",
                            "points":  16
                        },
                        {
                            "text":  "silver/gold spoon",
                            "points":  13
                        },
                        {
                            "text":  "pony",
                            "points":  12
                        },
                        {
                            "text":  "car/mini-bmw",
                            "points":  8
                        },
                        {
                            "text":  "fancy rattle",
                            "points":  6
                        },
                        {
                            "text":  "versace garb/bib",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  160237,
        "question":  "The sword swallower met an untimely death when he did what while swallowing a sword?",
        "answers":  [
                        {
                            "text":  "coughed",
                            "points":  26
                        },
                        {
                            "text":  "sneezed",
                            "points":  22
                        },
                        {
                            "text":  "hiccuped",
                            "points":  21
                        },
                        {
                            "text":  "choked",
                            "points":  8
                        },
                        {
                            "text":  "cut throat/organ",
                            "points":  4
                        },
                        {
                            "text":  "burped",
                            "points":  4
                        },
                        {
                            "text":  "swallowed it whole",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160238,
        "question":  "Name something specific about Godzilla that King Kong might make fun of.",
        "answers":  [
                        {
                            "text":  "his tail",
                            "points":  23
                        },
                        {
                            "text":  "atomic breath",
                            "points":  20
                        },
                        {
                            "text":  "scaly green skin",
                            "points":  18
                        },
                        {
                            "text":  "tiny arms/hands",
                            "points":  17
                        },
                        {
                            "text":  "pea-sized head",
                            "points":  4
                        },
                        {
                            "text":  "big jacked teeth",
                            "points":  3
                        },
                        {
                            "text":  "orangey eyes",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160239,
        "question":  "We asked 100 women... Name an occupation whose dudes you'd never want to see work nude.",
        "answers":  [
                        {
                            "text":  "plumbers",
                            "points":  23
                        },
                        {
                            "text":  "waiters",
                            "points":  20
                        },
                        {
                            "text":  "doctors/dentists",
                            "points":  18
                        },
                        {
                            "text":  "chefs/cooks",
                            "points":  15
                        },
                        {
                            "text":  "sumo wrestlers",
                            "points":  7
                        },
                        {
                            "text":  "construction",
                            "points":  3
                        },
                        {
                            "text":  "nurses",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160240,
        "question":  "Name something it's childish for people to be afraid of.",
        "answers":  [
                        {
                            "text":  "the dark",
                            "points":  22
                        },
                        {
                            "text":  "clowns",
                            "points":  20
                        },
                        {
                            "text":  "spiders/bugs",
                            "points":  18
                        },
                        {
                            "text":  "ghosts/monsters",
                            "points":  13
                        },
                        {
                            "text":  "thunderstorms",
                            "points":  8
                        },
                        {
                            "text":  "black cats",
                            "points":  4
                        },
                        {
                            "text":  "snakes",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160241,
        "question":  "Name something kids do to Santa that made him decide long ago to never have children.",
        "answers":  [
                        {
                            "text":  "pull his beard",
                            "points":  21
                        },
                        {
                            "text":  "pee/poop on him",
                            "points":  21
                        },
                        {
                            "text":  "cry/tantrum",
                            "points":  19
                        },
                        {
                            "text":  "ask for too much",
                            "points":  11
                        },
                        {
                            "text":  "hit/kick him",
                            "points":  7
                        },
                        {
                            "text":  "sit/jump on lap",
                            "points":  5
                        },
                        {
                            "text":  "mock/\"hey fat boy\"",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160242,
        "question":  "In an all-nude orchestra, what instrument leaves a man the most exposed?",
        "answers":  [
                        {
                            "text":  "flute/piccolo",
                            "points":  43
                        },
                        {
                            "text":  "violin",
                            "points":  18
                        },
                        {
                            "text":  "trumpet",
                            "points":  11
                        },
                        {
                            "text":  "tuba",
                            "points":  5
                        },
                        {
                            "text":  "trombone",
                            "points":  4
                        },
                        {
                            "text":  "triangle",
                            "points":  3
                        },
                        {
                            "text":  "harmonica",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160243,
        "question":  "After fifty years of marriage, name something about grandma that still turns grandpa on.",
        "answers":  [
                        {
                            "text":  "1-tooth smile/face",
                            "points":  35
                        },
                        {
                            "text":  "her cooking",
                            "points":  23
                        },
                        {
                            "text":  "bod/pancake butt",
                            "points":  13
                        },
                        {
                            "text":  "her love/heart",
                            "points":  5
                        },
                        {
                            "text":  "personality/mischief",
                            "points":  5
                        },
                        {
                            "text":  "sloppy kisses",
                            "points":  3
                        },
                        {
                            "text":  "gravelly voice",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160244,
        "question":  "Name something a married couple gets to protect both of them.",
        "answers":  [
                        {
                            "text":  "insurance",
                            "points":  34
                        },
                        {
                            "text":  ".44 magnum/gun",
                            "points":  17
                        },
                        {
                            "text":  "chihuahua/dog",
                            "points":  11
                        },
                        {
                            "text":  "alarm system",
                            "points":  9
                        },
                        {
                            "text":  "condom/peter parka",
                            "points":  7
                        },
                        {
                            "text":  "prenup",
                            "points":  6
                        },
                        {
                            "text":  "divorce",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160245,
        "question":  "Name an occasion a married man looks forward to because he can flirt with other women.",
        "answers":  [
                        {
                            "text":  "party",
                            "points":  32
                        },
                        {
                            "text":  "wedding",
                            "points":  29
                        },
                        {
                            "text":  "boys' night at bar",
                            "points":  8
                        },
                        {
                            "text":  "class reunion",
                            "points":  6
                        },
                        {
                            "text":  "his divorce",
                            "points":  5
                        },
                        {
                            "text":  "swingers' love-in",
                            "points":  4
                        },
                        {
                            "text":  "wife's funeral",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160247,
        "question":  "If Fruit of the Loom made edible underwear, what fruit might they taste like?",
        "answers":  [
                        {
                            "text":  "berry/dingleberry",
                            "points":  25
                        },
                        {
                            "text":  "cherry",
                            "points":  15
                        },
                        {
                            "text":  "apple",
                            "points":  14
                        },
                        {
                            "text":  "banana",
                            "points":  14
                        },
                        {
                            "text":  "grape",
                            "points":  13
                        },
                        {
                            "text":  "lemon",
                            "points":  3
                        },
                        {
                            "text":  "orange",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160248,
        "question":  "Name a question a woman doesn't like to be asked on a first date.",
        "answers":  [
                        {
                            "text":  "age/you legal?",
                            "points":  39
                        },
                        {
                            "text":  "your place or mine?",
                            "points":  13
                        },
                        {
                            "text":  "weight/dieting?",
                            "points":  12
                        },
                        {
                            "text":  "# of lovers/exes?",
                            "points":  12
                        },
                        {
                            "text":  "income?",
                            "points":  4
                        },
                        {
                            "text":  "have/want kids?",
                            "points":  3
                        },
                        {
                            "text":  "marry me?",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160249,
        "question":  "We asked 100 married people... What's the biggest mistake you made at your wedding?",
        "answers":  [
                        {
                            "text":  "got sloshed",
                            "points":  30
                        },
                        {
                            "text":  "said \"i do\"",
                            "points":  20
                        },
                        {
                            "text":  "spent too much",
                            "points":  18
                        },
                        {
                            "text":  "didn't eat",
                            "points":  7
                        },
                        {
                            "text":  "too many guests",
                            "points":  7
                        },
                        {
                            "text":  "invited ex",
                            "points":  2
                        },
                        {
                            "text":  "cake in face",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160250,
        "question":  "Fill in the blank: If most women are shopaholics, then most men are ______aholics.",
        "answers":  [
                        {
                            "text":  "tv-/sports-aholics",
                            "points":  29
                        },
                        {
                            "text":  "alcoholics",
                            "points":  22
                        },
                        {
                            "text":  "workaholics",
                            "points":  13
                        },
                        {
                            "text":  "sex-/women-aholics",
                            "points":  9
                        },
                        {
                            "text":  "car-aholics",
                            "points":  7
                        },
                        {
                            "text":  "sleep-aholics",
                            "points":  3
                        },
                        {
                            "text":  "video game-aholics",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160251,
        "question":  "Name an occupation a man might go into just because what they wear attracts the babes.",
        "answers":  [
                        {
                            "text":  "firefighter",
                            "points":  26
                        },
                        {
                            "text":  "po-po",
                            "points":  17
                        },
                        {
                            "text":  "stripper/dancer",
                            "points":  16
                        },
                        {
                            "text":  "lifeguard",
                            "points":  15
                        },
                        {
                            "text":  "military",
                            "points":  4
                        },
                        {
                            "text":  "modeling",
                            "points":  4
                        },
                        {
                            "text":  "construction",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160252,
        "question":  "Name a kind of animal you might call someone who did wrong.",
        "answers":  [
                        {
                            "text":  "dog/beeyatch",
                            "points":  25
                        },
                        {
                            "text":  "jackass/donkey",
                            "points":  22
                        },
                        {
                            "text":  "skunk",
                            "points":  11
                        },
                        {
                            "text":  "snake",
                            "points":  11
                        },
                        {
                            "text":  "pig",
                            "points":  6
                        },
                        {
                            "text":  "rat",
                            "points":  6
                        },
                        {
                            "text":  "weasel",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160253,
        "question":  "Your boss just said, \"Get out -- you're fired.\" What might you do before you leave the building?",
        "answers":  [
                        {
                            "text":  "pack/clean desk",
                            "points":  24
                        },
                        {
                            "text":  "tell off/flip off",
                            "points":  23
                        },
                        {
                            "text":  "break/throw stuff",
                            "points":  16
                        },
                        {
                            "text":  "steal/a soda",
                            "points":  9
                        },
                        {
                            "text":  "\"thanks, boss!\"",
                            "points":  5
                        },
                        {
                            "text":  "bye to coworkers",
                            "points":  5
                        },
                        {
                            "text":  "punch/slap boss",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160254,
        "question":  "We asked 100 married men... Name something your wife is holding when she says, \"You've got some explaining to do.\"",
        "answers":  [
                        {
                            "text":  "bank/visa statement",
                            "points":  23
                        },
                        {
                            "text":  "a jezebel's panties",
                            "points":  20
                        },
                        {
                            "text":  "my phone",
                            "points":  16
                        },
                        {
                            "text":  "stained shirt/lipstick",
                            "points":  8
                        },
                        {
                            "text":  "nudie flix/sex tape",
                            "points":  8
                        },
                        {
                            "text":  "receipt/bill",
                            "points":  7
                        },
                        {
                            "text":  "chick's phone #",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160255,
        "question":  "We asked 100 women... Name something your fiancé might criticize about you that would make you call off the wedding.",
        "answers":  [
                        {
                            "text":  "my weight/bod",
                            "points":  52
                        },
                        {
                            "text":  "my face",
                            "points":  9
                        },
                        {
                            "text":  "my spending",
                            "points":  6
                        },
                        {
                            "text":  "my smarts",
                            "points":  5
                        },
                        {
                            "text":  "my personality",
                            "points":  5
                        },
                        {
                            "text":  "my family/mom",
                            "points":  5
                        },
                        {
                            "text":  "i cheat/with gals",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160256,
        "question":  "Fill in the blank: Helen stole two ______s from a supermarket by putting them in her big, oversized bra.",
        "answers":  [
                        {
                            "text":  "melons",
                            "points":  48
                        },
                        {
                            "text":  "grapefruits",
                            "points":  14
                        },
                        {
                            "text":  "steaks",
                            "points":  8
                        },
                        {
                            "text":  "apples",
                            "points":  5
                        },
                        {
                            "text":  "oranges",
                            "points":  4
                        },
                        {
                            "text":  "bread loaves/buns",
                            "points":  3
                        },
                        {
                            "text":  "hams",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160257,
        "question":  "Fill in the blank: The nurse was fired for making patients undress just to give them a what?",
        "answers":  [
                        {
                            "text":  "shot in the arm",
                            "points":  39
                        },
                        {
                            "text":  "pill/aspirin",
                            "points":  22
                        },
                        {
                            "text":  "blood press. test",
                            "points":  8
                        },
                        {
                            "text":  "temperature check",
                            "points":  5
                        },
                        {
                            "text":  "eye exam",
                            "points":  5
                        },
                        {
                            "text":  "massage/rub",
                            "points":  3
                        },
                        {
                            "text":  "bedpan",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160258,
        "question":  "Name an animal costume a farmer's wife might put on just to get his attention.",
        "answers":  [
                        {
                            "text":  "lactating cow",
                            "points":  39
                        },
                        {
                            "text":  "sheep/lamb",
                            "points":  15
                        },
                        {
                            "text":  "chicken/rooster",
                            "points":  12
                        },
                        {
                            "text":  "pig/hog",
                            "points":  8
                        },
                        {
                            "text":  "bunny rabbit",
                            "points":  4
                        },
                        {
                            "text":  "fox",
                            "points":  4
                        },
                        {
                            "text":  "horse",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160259,
        "question":  "Name something a girlfriend has that she might make her boyfriend kiss.",
        "answers":  [
                        {
                            "text":  "hot wet smackers",
                            "points":  33
                        },
                        {
                            "text":  "her pet/kitty",
                            "points":  15
                        },
                        {
                            "text":  "her butt",
                            "points":  11
                        },
                        {
                            "text":  "her feet",
                            "points":  7
                        },
                        {
                            "text":  "her hand",
                            "points":  7
                        },
                        {
                            "text":  "jugs/pepperoni nips",
                            "points":  7
                        },
                        {
                            "text":  "a boo-boo",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160260,
        "question":  "Name something you might do if you're positive no one is looking.",
        "answers":  [
                        {
                            "text":  "pick/blow nose",
                            "points":  32
                        },
                        {
                            "text":  "scratch/pick wedgie",
                            "points":  26
                        },
                        {
                            "text":  "fart/in sauna",
                            "points":  11
                        },
                        {
                            "text":  "pee/poo/in a jar",
                            "points":  6
                        },
                        {
                            "text":  "eat/entire ham",
                            "points":  4
                        },
                        {
                            "text":  "dance",
                            "points":  3
                        },
                        {
                            "text":  "burp",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160261,
        "question":  "Name something specific you do when you get caught in a lie.",
        "answers":  [
                        {
                            "text":  "blush",
                            "points":  28
                        },
                        {
                            "text":  "lie more/deny",
                            "points":  18
                        },
                        {
                            "text":  "\"sorry\"/feel bad",
                            "points":  15
                        },
                        {
                            "text":  "stutter",
                            "points":  7
                        },
                        {
                            "text":  "confess",
                            "points":  6
                        },
                        {
                            "text":  "grin/maniacal laugh",
                            "points":  6
                        },
                        {
                            "text":  "avoid eye contact",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160262,
        "question":  "Where did you have your first make out session?",
        "answers":  [
                        {
                            "text":  "car/truck",
                            "points":  41
                        },
                        {
                            "text":  "movie theater",
                            "points":  12
                        },
                        {
                            "text":  "school/prom",
                            "points":  11
                        },
                        {
                            "text":  "park/playground",
                            "points":  9
                        },
                        {
                            "text":  "bedroom/dorm",
                            "points":  4
                        },
                        {
                            "text":  "woods/mtn.",
                            "points":  4
                        },
                        {
                            "text":  "at a party",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160263,
        "question":  "Name a kind of dog you might start to look like when you get old.",
        "answers":  [
                        {
                            "text":  "bulldog",
                            "points":  38
                        },
                        {
                            "text":  "pug",
                            "points":  17
                        },
                        {
                            "text":  "basset hound",
                            "points":  10
                        },
                        {
                            "text":  "poodle",
                            "points":  9
                        },
                        {
                            "text":  "shar-pei",
                            "points":  4
                        },
                        {
                            "text":  "bloodhound",
                            "points":  3
                        },
                        {
                            "text":  "mutt",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160264,
        "question":  "Name something at work you'd be surprised your boss charged you to use.",
        "answers":  [
                        {
                            "text":  "bathroom/t.p.",
                            "points":  33
                        },
                        {
                            "text":  "phone",
                            "points":  21
                        },
                        {
                            "text":  "pen/pencil",
                            "points":  8
                        },
                        {
                            "text":  "computer",
                            "points":  7
                        },
                        {
                            "text":  "coffee maker",
                            "points":  5
                        },
                        {
                            "text":  "stapler",
                            "points":  5
                        },
                        {
                            "text":  "copier",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160265,
        "question":  "Name a place you'd be embarrassed to tell your Uber driver to drop you off.",
        "answers":  [
                        {
                            "text":  "doctor/std clinic",
                            "points":  30
                        },
                        {
                            "text":  "strip joint",
                            "points":  22
                        },
                        {
                            "text":  "trixie's toy shop",
                            "points":  13
                        },
                        {
                            "text":  "prison/jail",
                            "points":  8
                        },
                        {
                            "text":  "ho house",
                            "points":  4
                        },
                        {
                            "text":  "bar/club",
                            "points":  4
                        },
                        {
                            "text":  "aa meeting",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160266,
        "question":  "Name something that a guy does when he's stoned that for a dog is normal behavior.",
        "answers":  [
                        {
                            "text":  "whiz outside",
                            "points":  30
                        },
                        {
                            "text":  "nap/on floor",
                            "points":  17
                        },
                        {
                            "text":  "bark/howl",
                            "points":  9
                        },
                        {
                            "text":  "pig out",
                            "points":  9
                        },
                        {
                            "text":  "lick/himself",
                            "points":  8
                        },
                        {
                            "text":  "drool/slobber",
                            "points":  6
                        },
                        {
                            "text":  "sniff/butts",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160267,
        "question":  "We asked 100 women... Name a reason you'd dump a guy.",
        "answers":  [
                        {
                            "text":  "total man-whore",
                            "points":  27
                        },
                        {
                            "text":  "big liar",
                            "points":  16
                        },
                        {
                            "text":  "mean/rude",
                            "points":  16
                        },
                        {
                            "text":  "poor/only $500k",
                            "points":  10
                        },
                        {
                            "text":  "lazy/no ambition",
                            "points":  7
                        },
                        {
                            "text":  "needy/clingy",
                            "points":  5
                        },
                        {
                            "text":  "boring/no humor",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160268,
        "question":  "When a boy is on Santa's lap, what would he ask for that would make Santa wonder, \"How old is this kid?\"",
        "answers":  [
                        {
                            "text":  "car/truck",
                            "points":  24
                        },
                        {
                            "text":  "playboy/xxx flick",
                            "points":  15
                        },
                        {
                            "text":  "stocks/stock tip",
                            "points":  14
                        },
                        {
                            "text":  "booty/a ho-ho-ho",
                            "points":  12
                        },
                        {
                            "text":  "girflfriend/date",
                            "points":  11
                        },
                        {
                            "text":  "phone",
                            "points":  5
                        },
                        {
                            "text":  "bar/booze",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160269,
        "question":  "Name a creature that a nudist might worry will crawl into his bottom.",
        "answers":  [
                        {
                            "text":  "spider",
                            "points":  23
                        },
                        {
                            "text":  "snake/20-ft. python",
                            "points":  21
                        },
                        {
                            "text":  "ant",
                            "points":  17
                        },
                        {
                            "text":  "worm",
                            "points":  14
                        },
                        {
                            "text":  "centipede",
                            "points":  3
                        },
                        {
                            "text":  "crab",
                            "points":  3
                        },
                        {
                            "text":  "scorpion",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160270,
        "question":  "Name something a supermodel might have that's thick.",
        "answers":  [
                        {
                            "text":  "hair",
                            "points":  52
                        },
                        {
                            "text":  "wallet",
                            "points":  10
                        },
                        {
                            "text":  "lips/like steve",
                            "points":  8
                        },
                        {
                            "text":  "legs/thighs",
                            "points":  4
                        },
                        {
                            "text":  "ego",
                            "points":  3
                        },
                        {
                            "text":  "brain/head",
                            "points":  3
                        },
                        {
                            "text":  "booty",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160271,
        "question":  "Name the worst place to spend your wedding night.",
        "answers":  [
                        {
                            "text":  "jail/with bubba",
                            "points":  37
                        },
                        {
                            "text":  "parents'/in-laws'",
                            "points":  28
                        },
                        {
                            "text":  "airport",
                            "points":  4
                        },
                        {
                            "text":  "home",
                            "points":  4
                        },
                        {
                            "text":  "car/traffic",
                            "points":  4
                        },
                        {
                            "text":  "hourly motel",
                            "points":  3
                        },
                        {
                            "text":  "hospital",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160272,
        "question":  "You like to make money. Name something you don't like to make.",
        "answers":  [
                        {
                            "text":  "food/microwave",
                            "points":  28
                        },
                        {
                            "text":  "trouble/fuss",
                            "points":  16
                        },
                        {
                            "text":  "a mess",
                            "points":  11
                        },
                        {
                            "text":  "the bed",
                            "points":  9
                        },
                        {
                            "text":  "enemies",
                            "points":  8
                        },
                        {
                            "text":  "debt/bills",
                            "points":  7
                        },
                        {
                            "text":  "mistakes",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160273,
        "question":  "The wedding got off to a bad start when the bride walked down the aisle holding what?",
        "answers":  [
                        {
                            "text":  "gun/weapon",
                            "points":  27
                        },
                        {
                            "text":  "other man's hand",
                            "points":  20
                        },
                        {
                            "text":  "dead/black flowers",
                            "points":  15
                        },
                        {
                            "text":  "baby/pregnant belly",
                            "points":  10
                        },
                        {
                            "text":  "ball & chain/cuffs",
                            "points":  4
                        },
                        {
                            "text":  "a prenup",
                            "points":  4
                        },
                        {
                            "text":  "phone/to ear",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160274,
        "question":  "Name something of hers a wife might tell her husband to get out of.",
        "answers":  [
                        {
                            "text":  "her purse",
                            "points":  25
                        },
                        {
                            "text":  "her panties/clothes",
                            "points":  20
                        },
                        {
                            "text":  "her car",
                            "points":  14
                        },
                        {
                            "text":  "the kitchen",
                            "points":  9
                        },
                        {
                            "text":  "the house",
                            "points":  9
                        },
                        {
                            "text":  "the bed/bedroom",
                            "points":  3
                        },
                        {
                            "text":  "her bathroom",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160275,
        "question":  "Fill in the blank: I cannot tell a lie: I have the worst-looking ______.",
        "answers":  [
                        {
                            "text":  "face/teeth",
                            "points":  25
                        },
                        {
                            "text":  "feet/toes",
                            "points":  19
                        },
                        {
                            "text":  "gut/waist",
                            "points":  12
                        },
                        {
                            "text":  "hair",
                            "points":  8
                        },
                        {
                            "text":  "pooper",
                            "points":  7
                        },
                        {
                            "text":  "spouse/family",
                            "points":  6
                        },
                        {
                            "text":  "hands/fingers",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  160276,
        "question":  "Candy is dandy. Liquor is quicker. But what food gets you in the mood?",
        "answers":  [
                        {
                            "text":  "chocolate",
                            "points":  24
                        },
                        {
                            "text":  "oysters/seafood",
                            "points":  23
                        },
                        {
                            "text":  "meat/polish sausage",
                            "points":  10
                        },
                        {
                            "text":  "fleshy peach/fruit",
                            "points":  9
                        },
                        {
                            "text":  "cake",
                            "points":  6
                        },
                        {
                            "text":  "pizza",
                            "points":  6
                        },
                        {
                            "text":  "ice cream",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160277,
        "question":  "Name a word starting with the letter T that you might use to describe a kiss.",
        "answers":  [
                        {
                            "text":  "tender",
                            "points":  33
                        },
                        {
                            "text":  "tasty",
                            "points":  17
                        },
                        {
                            "text":  "tingly",
                            "points":  9
                        },
                        {
                            "text":  "terrific",
                            "points":  7
                        },
                        {
                            "text":  "tantalizing",
                            "points":  6
                        },
                        {
                            "text":  "tongue",
                            "points":  5
                        },
                        {
                            "text":  "terrible",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160278,
        "question":  "The dog lover and her dog dress alike. But who wants to see a chihuahua wearing a what?",
        "answers":  [
                        {
                            "text":  "dress/skirt",
                            "points":  31
                        },
                        {
                            "text":  "pink thong",
                            "points":  15
                        },
                        {
                            "text":  "tutu",
                            "points":  12
                        },
                        {
                            "text":  "bikini/swimsuit",
                            "points":  10
                        },
                        {
                            "text":  "bra/for 8 nipples",
                            "points":  6
                        },
                        {
                            "text":  "crop top/shirt",
                            "points":  4
                        },
                        {
                            "text":  "pair of heels",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160279,
        "question":  "Name a place a gold digger goes looking to score.",
        "answers":  [
                        {
                            "text":  "vegas/casino",
                            "points":  21
                        },
                        {
                            "text":  "bar/nightclub",
                            "points":  21
                        },
                        {
                            "text":  "golf/country club",
                            "points":  19
                        },
                        {
                            "text":  "retirement home",
                            "points":  8
                        },
                        {
                            "text":  "cruise ship/yacht",
                            "points":  5
                        },
                        {
                            "text":  "wedding/party",
                            "points":  5
                        },
                        {
                            "text":  "mountain/mine",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160280,
        "question":  "Name something belonging to his lady love that a man might wear so he can feel close to her.",
        "answers":  [
                        {
                            "text":  "panties/thong",
                            "points":  18
                        },
                        {
                            "text":  "shirt/crop top",
                            "points":  15
                        },
                        {
                            "text":  "ring/jewelry",
                            "points":  15
                        },
                        {
                            "text":  "scarf",
                            "points":  13
                        },
                        {
                            "text":  "perfume",
                            "points":  12
                        },
                        {
                            "text":  "robe",
                            "points":  5
                        },
                        {
                            "text":  "bra",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160281,
        "question":  "Name something belonging to their ex that an angry person might use as a pooper scooper.",
        "answers":  [
                        {
                            "text":  "clothes/silk shirt",
                            "points":  42
                        },
                        {
                            "text":  "toothbrush",
                            "points":  13
                        },
                        {
                            "text":  "photo/wedding pic",
                            "points":  7
                        },
                        {
                            "text":  "brush/comb",
                            "points":  7
                        },
                        {
                            "text":  "phone",
                            "points":  4
                        },
                        {
                            "text":  "golf club",
                            "points":  4
                        },
                        {
                            "text":  "spoon/spatula",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160282,
        "question":  "I wish I had a pair of magic underwear that could make me what?",
        "answers":  [
                        {
                            "text":  "thinner",
                            "points":  34
                        },
                        {
                            "text":  "younger",
                            "points":  10
                        },
                        {
                            "text":  "invisible",
                            "points":  10
                        },
                        {
                            "text":  "fly like a bird",
                            "points":  9
                        },
                        {
                            "text":  "sexy/irresistible",
                            "points":  8
                        },
                        {
                            "text":  "bigger",
                            "points":  6
                        },
                        {
                            "text":  "rich",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160283,
        "question":  "Grandma said, \"Hee hee -- gramps still hasn't figured out that I keep my marijuana stash in my\" what?",
        "answers":  [
                        {
                            "text":  "nightstand",
                            "points":  27
                        },
                        {
                            "text":  "bra",
                            "points":  23
                        },
                        {
                            "text":  "purse/wallet",
                            "points":  10
                        },
                        {
                            "text":  "jewelry box",
                            "points":  7
                        },
                        {
                            "text":  "panties i'm wearing",
                            "points":  6
                        },
                        {
                            "text":  "sewing box",
                            "points":  4
                        },
                        {
                            "text":  "food container",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160284,
        "question":  "If the world were ending tomorrow, what would you blow all your savings on today?",
        "answers":  [
                        {
                            "text":  "vacay/disney world",
                            "points":  27
                        },
                        {
                            "text":  "food/sizzler",
                            "points":  23
                        },
                        {
                            "text":  "booze",
                            "points":  9
                        },
                        {
                            "text":  "car/truck",
                            "points":  8
                        },
                        {
                            "text":  "gambling/lottery",
                            "points":  7
                        },
                        {
                            "text":  "clothes/shoes",
                            "points":  4
                        },
                        {
                            "text":  "hot ho/gigolo",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160285,
        "question":  "We asked 100 women... Name something you'd do if your sister started dating the man that dumped you.",
        "answers":  [
                        {
                            "text":  "talk/warn her",
                            "points":  27
                        },
                        {
                            "text":  "dead to me/ignore",
                            "points":  16
                        },
                        {
                            "text":  "yell/raise hell",
                            "points":  13
                        },
                        {
                            "text":  "cry/feel hurt",
                            "points":  8
                        },
                        {
                            "text":  "kick the ho's arse",
                            "points":  6
                        },
                        {
                            "text":  "wish her luck",
                            "points":  6
                        },
                        {
                            "text":  "laugh/celebrate",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160286,
        "question":  "Name something women make men do to prove their love.",
        "answers":  [
                        {
                            "text":  "buy gifts/car",
                            "points":  33
                        },
                        {
                            "text":  "propose/marry",
                            "points":  15
                        },
                        {
                            "text":  "say it/on facebook",
                            "points":  10
                        },
                        {
                            "text":  "clean/dishes",
                            "points":  6
                        },
                        {
                            "text":  "date",
                            "points":  6
                        },
                        {
                            "text":  "kiss/pda",
                            "points":  5
                        },
                        {
                            "text":  "massage feet",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160287,
        "question":  "If Disney made a horror movie, which popular character might they turn into a psycho?",
        "answers":  [
                        {
                            "text":  "mickey mouse",
                            "points":  23
                        },
                        {
                            "text":  "goofy",
                            "points":  15
                        },
                        {
                            "text":  "cinderella",
                            "points":  13
                        },
                        {
                            "text":  "snow white",
                            "points":  11
                        },
                        {
                            "text":  "donald duck",
                            "points":  9
                        },
                        {
                            "text":  "tinker bell",
                            "points":  4
                        },
                        {
                            "text":  "pinocchio",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160288,
        "question":  "Name a place you hate going that might be more tolerable if you smoke pot first.",
        "answers":  [
                        {
                            "text":  "dentist/dr./e.r.",
                            "points":  27
                        },
                        {
                            "text":  "work",
                            "points":  15
                        },
                        {
                            "text":  "in-laws' house",
                            "points":  12
                        },
                        {
                            "text":  "store/mall",
                            "points":  9
                        },
                        {
                            "text":  "theater/opera",
                            "points":  6
                        },
                        {
                            "text":  "church",
                            "points":  5
                        },
                        {
                            "text":  "bar/nightclub",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160289,
        "question":  "Name a word starting with the letter H that describes Steve Harvey.",
        "answers":  [
                        {
                            "text":  "happy",
                            "points":  23
                        },
                        {
                            "text":  "handsome",
                            "points":  19
                        },
                        {
                            "text":  "hilarious",
                            "points":  19
                        },
                        {
                            "text":  "humorous",
                            "points":  8
                        },
                        {
                            "text":  "hairless",
                            "points":  3
                        },
                        {
                            "text":  "human",
                            "points":  3
                        },
                        {
                            "text":  "hot",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160290,
        "question":  "I could never get so carried away that I'd make love in a what?",
        "answers":  [
                        {
                            "text":  "bathroom/on plane",
                            "points":  26
                        },
                        {
                            "text":  "car/taxi",
                            "points":  24
                        },
                        {
                            "text":  "elevator",
                            "points":  8
                        },
                        {
                            "text":  "park",
                            "points":  5
                        },
                        {
                            "text":  "boat/kayak",
                            "points":  5
                        },
                        {
                            "text":  "movie theater",
                            "points":  4
                        },
                        {
                            "text":  "casket/funeral home",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160291,
        "question":  "If Steve Harvey had his own Rat Pack like Sinatra, who would be in it?",
        "answers":  [
                        {
                            "text":  "kevin hart",
                            "points":  29
                        },
                        {
                            "text":  "chris rock",
                            "points":  19
                        },
                        {
                            "text":  "cedric the entertainer",
                            "points":  15
                        },
                        {
                            "text":  "nick cannon",
                            "points":  5
                        },
                        {
                            "text":  "jimmy fallon",
                            "points":  2
                        },
                        {
                            "text":  "ellen degeneres",
                            "points":  2
                        },
                        {
                            "text":  "montel williams",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160292,
        "question":  "Name something your mom gave you as a kid that you'd be surprised she gave you now.",
        "answers":  [
                        {
                            "text":  "toy/easy-bake oven",
                            "points":  28
                        },
                        {
                            "text":  "kid food/candy",
                            "points":  15
                        },
                        {
                            "text":  "a spanking",
                            "points":  8
                        },
                        {
                            "text":  "allowance/$$$",
                            "points":  8
                        },
                        {
                            "text":  "a bath",
                            "points":  6
                        },
                        {
                            "text":  "kiss/from grave",
                            "points":  5
                        },
                        {
                            "text":  "lecture/pep talk",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160293,
        "question":  "The good news: You finally found a new roommate. The bad news: You just found out that they do what for a living?",
        "answers":  [
                        {
                            "text":  "discount escort",
                            "points":  16
                        },
                        {
                            "text":  "drug dealer",
                            "points":  12
                        },
                        {
                            "text":  "mortician/coroner",
                            "points":  10
                        },
                        {
                            "text":  "sewage cleaner",
                            "points":  10
                        },
                        {
                            "text":  "stripper",
                            "points":  8
                        },
                        {
                            "text":  "collect garbage",
                            "points":  8
                        },
                        {
                            "text":  "music/play drums",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  160294,
        "question":  "Name a word starting with S that describes how you look when you're naked.",
        "answers":  [
                        {
                            "text":  "sexy",
                            "points":  37
                        },
                        {
                            "text":  "saggy",
                            "points":  9
                        },
                        {
                            "text":  "silly",
                            "points":  6
                        },
                        {
                            "text":  "sloppy",
                            "points":  4
                        },
                        {
                            "text":  "sad",
                            "points":  4
                        },
                        {
                            "text":  "scary",
                            "points":  4
                        },
                        {
                            "text":  "skinny",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160295,
        "question":  "Name a word starting with S that describes most of your underwear.",
        "answers":  [
                        {
                            "text":  "silky/silk",
                            "points":  17
                        },
                        {
                            "text":  "soft",
                            "points":  12
                        },
                        {
                            "text":  "sexy",
                            "points":  12
                        },
                        {
                            "text":  "soiled",
                            "points":  8
                        },
                        {
                            "text":  "simple",
                            "points":  7
                        },
                        {
                            "text":  "stretched/stretchy",
                            "points":  6
                        },
                        {
                            "text":  "small",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160296,
        "question":  "Name a place a man works where it would be hard to meet a nice girl.",
        "answers":  [
                        {
                            "text":  "prison/jail",
                            "points":  17
                        },
                        {
                            "text":  "strip joint",
                            "points":  11
                        },
                        {
                            "text":  "construction site",
                            "points":  10
                        },
                        {
                            "text":  "bar/nightclub",
                            "points":  8
                        },
                        {
                            "text":  "factory/mill",
                            "points":  8
                        },
                        {
                            "text":  "coal mine",
                            "points":  7
                        },
                        {
                            "text":  "sewer",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160297,
        "question":  "Name something you'd like to have one of in every room in the house.",
        "answers":  [
                        {
                            "text":  "tv",
                            "points":  32
                        },
                        {
                            "text":  "light/flashlight",
                            "points":  10
                        },
                        {
                            "text":  "chair/couch",
                            "points":  8
                        },
                        {
                            "text":  "computer",
                            "points":  5
                        },
                        {
                            "text":  "window",
                            "points":  3
                        },
                        {
                            "text":  "stash of cash",
                            "points":  3
                        },
                        {
                            "text":  "air freshener",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160298,
        "question":  "Where was your favorite place to hang out when you were in high school?",
        "answers":  [
                        {
                            "text":  "eatery",
                            "points":  24
                        },
                        {
                            "text":  "friend's house",
                            "points":  12
                        },
                        {
                            "text":  "park",
                            "points":  8
                        },
                        {
                            "text":  "mall/store",
                            "points":  7
                        },
                        {
                            "text":  "home",
                            "points":  5
                        },
                        {
                            "text":  "ball field/bleachers",
                            "points":  4
                        },
                        {
                            "text":  "library/study hall",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160299,
        "question":  "Name something a woman sprays all over her body for a night of romance.",
        "answers":  [
                        {
                            "text":  "perfume/body spray",
                            "points":  86
                        },
                        {
                            "text":  "oil",
                            "points":  4
                        },
                        {
                            "text":  "glitter",
                            "points":  3
                        },
                        {
                            "text":  "pheromone spray",
                            "points":  3
                        },
                        {
                            "text":  "water",
                            "points":  2
                        },
                        {
                            "text":  "whipped cream",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160300,
        "question":  "If someone killed Pinocchio, name a way they might get rid of his body.",
        "answers":  [
                        {
                            "text":  "burn it",
                            "points":  57
                        },
                        {
                            "text":  "woodchipper/chop up",
                            "points":  31
                        },
                        {
                            "text":  "bury it",
                            "points":  5
                        },
                        {
                            "text":  "feed to termites",
                            "points":  3
                        },
                        {
                            "text":  "dump in river/water",
                            "points":  2
                        },
                        {
                            "text":  "recycle/to toothpicks",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160301,
        "question":  "Most people would fail a lie detector test when asked if they've ever cheated on what?",
        "answers":  [
                        {
                            "text":  "a test",
                            "points":  42
                        },
                        {
                            "text":  "spouse/mate",
                            "points":  33
                        },
                        {
                            "text":  "their taxes",
                            "points":  14
                        },
                        {
                            "text":  "a diet",
                            "points":  5
                        },
                        {
                            "text":  "the job/work",
                            "points":  3
                        },
                        {
                            "text":  "game/game show",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160302,
        "question":  "Tell me which one of the Seven Dwarfs would make the worst stripper.",
        "answers":  [
                        {
                            "text":  "bashful",
                            "points":  32
                        },
                        {
                            "text":  "dopey",
                            "points":  18
                        },
                        {
                            "text":  "grumpy",
                            "points":  17
                        },
                        {
                            "text":  "sneezy",
                            "points":  14
                        },
                        {
                            "text":  "sleepy",
                            "points":  12
                        },
                        {
                            "text":  "doc",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  160303,
        "question":  "You're driving naked. The cops pull you over. What do you hope they don't ask you to do?",
        "answers":  [
                        {
                            "text":  "step out",
                            "points":  81
                        },
                        {
                            "text":  "spread 'em",
                            "points":  6
                        },
                        {
                            "text":  "dui test/walk line",
                            "points":  4
                        },
                        {
                            "text":  "show license",
                            "points":  3
                        },
                        {
                            "text":  "answer questions",
                            "points":  3
                        },
                        {
                            "text":  "\"stick 'em up!\"",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160304,
        "question":  "Name something that a husband might do to his wife's credit cards.",
        "answers":  [
                        {
                            "text":  "cut 'em up",
                            "points":  74
                        },
                        {
                            "text":  "hide 'em",
                            "points":  10
                        },
                        {
                            "text":  "cancel/freeze 'em",
                            "points":  5
                        },
                        {
                            "text":  "use 'em/max out",
                            "points":  5
                        },
                        {
                            "text":  "pay 'em off",
                            "points":  3
                        },
                        {
                            "text":  "burn 'em",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160305,
        "question":  "Fill in the blank: Ken broke up with Barbie when he discovered her ______ wasn't real.",
        "answers":  [
                        {
                            "text":  "epic boobage/bod",
                            "points":  71
                        },
                        {
                            "text":  "hair",
                            "points":  6
                        },
                        {
                            "text":  "dream house",
                            "points":  6
                        },
                        {
                            "text":  "face/mouth",
                            "points":  6
                        },
                        {
                            "text":  "pink car",
                            "points":  5
                        },
                        {
                            "text":  "bank acct./credit",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160306,
        "question":  "Name something a girl's jealous dog might do every time her boyfriend kisses her.",
        "answers":  [
                        {
                            "text":  "bark/growl/cry",
                            "points":  55
                        },
                        {
                            "text":  "attack/bite him",
                            "points":  27
                        },
                        {
                            "text":  "jump up between 'em",
                            "points":  9
                        },
                        {
                            "text":  "pee/on the schmuck",
                            "points":  4
                        },
                        {
                            "text":  "hump boyfriend",
                            "points":  2
                        },
                        {
                            "text":  "join in kissing",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160307,
        "question":  "Name something you bounce on for fun.",
        "answers":  [
                        {
                            "text":  "trampoline",
                            "points":  54
                        },
                        {
                            "text":  "bed",
                            "points":  25
                        },
                        {
                            "text":  "exercise ball",
                            "points":  12
                        },
                        {
                            "text":  "bounce house",
                            "points":  3
                        },
                        {
                            "text":  "mate",
                            "points":  3
                        },
                        {
                            "text":  "couch",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160308,
        "question":  "We asked 100 married men... If you were blindfolded, you could still identify your wife by feeling her what?",
        "answers":  [
                        {
                            "text":  "face/collagen lips",
                            "points":  36
                        },
                        {
                            "text":  "voluptuous bosoms",
                            "points":  32
                        },
                        {
                            "text":  "hefty hiney",
                            "points":  19
                        },
                        {
                            "text":  "hair/split ends",
                            "points":  4
                        },
                        {
                            "text":  "man hands",
                            "points":  4
                        },
                        {
                            "text":  "calloused feet",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160309,
        "question":  "When it comes to dating, name something a shy guy practices doing to build up his confidence.",
        "answers":  [
                        {
                            "text":  "talking/ask'g out",
                            "points":  63
                        },
                        {
                            "text":  "kissing/his hand",
                            "points":  22
                        },
                        {
                            "text":  "dressing/like steve",
                            "points":  4
                        },
                        {
                            "text":  "eye contact/head up",
                            "points":  4
                        },
                        {
                            "text":  "smiling",
                            "points":  3
                        },
                        {
                            "text":  "drinking",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160310,
        "question":  "Name something Adam and Eve might have done to keep warm on a cold day.",
        "answers":  [
                        {
                            "text":  "cuddle",
                            "points":  62
                        },
                        {
                            "text":  "\"explore the garden\"",
                            "points":  18
                        },
                        {
                            "text":  "build a fire",
                            "points":  11
                        },
                        {
                            "text":  "wear more leaves/fur",
                            "points":  3
                        },
                        {
                            "text":  "go running",
                            "points":  2
                        },
                        {
                            "text":  "dance/whip & nae nae",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160311,
        "question":  "Name a part of a person's body that can be played like a drum.",
        "answers":  [
                        {
                            "text":  "bloated belly",
                            "points":  52
                        },
                        {
                            "text":  "perky pooper",
                            "points":  25
                        },
                        {
                            "text":  "head/bald spot",
                            "points":  12
                        },
                        {
                            "text":  "chest/boobs",
                            "points":  5
                        },
                        {
                            "text":  "back",
                            "points":  2
                        },
                        {
                            "text":  "thighs/knees",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160312,
        "question":  "A woman isn't ready to have a baby if she can't even take care of what?",
        "answers":  [
                        {
                            "text":  "pet/goldfish",
                            "points":  48
                        },
                        {
                            "text":  "herself",
                            "points":  24
                        },
                        {
                            "text":  "a plant",
                            "points":  16
                        },
                        {
                            "text":  "her home",
                            "points":  5
                        },
                        {
                            "text":  "a kid/babysit",
                            "points":  3
                        },
                        {
                            "text":  "car",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160313,
        "question":  "If a farmer's wife made him sleep in the barn, what animal might he snuggle up with?",
        "answers":  [
                        {
                            "text":  "sultry sheep",
                            "points":  46
                        },
                        {
                            "text":  "cute cow",
                            "points":  20
                        },
                        {
                            "text":  "happy horse",
                            "points":  14
                        },
                        {
                            "text":  "adorable dog",
                            "points":  10
                        },
                        {
                            "text":  "provacative pig",
                            "points":  6
                        },
                        {
                            "text":  "purring pussycat",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160314,
        "question":  "We asked 100 women... Fill in the blank: My best friend broke the girl code when she started dating my what?",
        "answers":  [
                        {
                            "text":  "ex",
                            "points":  45
                        },
                        {
                            "text":  "spouse/mate",
                            "points":  43
                        },
                        {
                            "text":  "brother",
                            "points":  4
                        },
                        {
                            "text":  "mailman",
                            "points":  2
                        },
                        {
                            "text":  "son",
                            "points":  2
                        },
                        {
                            "text":  "father",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160315,
        "question":  "We asked 100 women... Name something you'd do if you woke up tomorrow as Mrs. Steve Harvey.",
        "answers":  [
                        {
                            "text":  "spend dat cheese!",
                            "points":  45
                        },
                        {
                            "text":  "laugh/celebrate",
                            "points":  19
                        },
                        {
                            "text":  "scream/cry",
                            "points":  10
                        },
                        {
                            "text":  "divorce/leave him",
                            "points":  10
                        },
                        {
                            "text":  "host family feud",
                            "points":  7
                        },
                        {
                            "text":  "sleep/bad dream",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  160316,
        "question":  "Before a date, a female werewolf might get what body part waxed?",
        "answers":  [
                        {
                            "text":  "face/lip/chin",
                            "points":  45
                        },
                        {
                            "text":  "arms/pits",
                            "points":  19
                        },
                        {
                            "text":  "dat booty",
                            "points":  10
                        },
                        {
                            "text":  "va-jay-jay",
                            "points":  9
                        },
                        {
                            "text":  "her 6 boobies",
                            "points":  8
                        },
                        {
                            "text":  "legs",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  160317,
        "question":  "We asked 100 single women... Name something they could do to make men's underwear sexier looking.",
        "answers":  [
                        {
                            "text":  "tighter/smaller",
                            "points":  40
                        },
                        {
                            "text":  "bright colors/tie-dye",
                            "points":  17
                        },
                        {
                            "text":  "make see-thru",
                            "points":  16
                        },
                        {
                            "text":  "make 'em silky",
                            "points":  13
                        },
                        {
                            "text":  "wash them",
                            "points":  8
                        },
                        {
                            "text":  "add lace/fun design",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160318,
        "question":  "We asked 100 women... What would you do if your date asked permission to touch your feet?",
        "answers":  [
                        {
                            "text":  "no!/not yet",
                            "points":  30
                        },
                        {
                            "text":  "yasss!/get oil",
                            "points":  25
                        },
                        {
                            "text":  "leave/run",
                            "points":  19
                        },
                        {
                            "text":  "ask why/\"fetish?\"",
                            "points":  13
                        },
                        {
                            "text":  "giggle",
                            "points":  6
                        },
                        {
                            "text":  "cringe/\"weirdo\"",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160319,
        "question":  "We asked 100 men... What would you do if your beautiful date told you the Earth was flat?",
        "answers":  [
                        {
                            "text":  "agree/\"so smart!\"",
                            "points":  23
                        },
                        {
                            "text":  "laugh/smile",
                            "points":  22
                        },
                        {
                            "text":  "bail!/run",
                            "points":  22
                        },
                        {
                            "text":  "think dumb/ignore",
                            "points":  15
                        },
                        {
                            "text":  "discuss/disagree",
                            "points":  14
                        },
                        {
                            "text":  "kiss/bed her",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160320,
        "question":  "Name something a man is glad his wife likes to do with friends instead of him.",
        "answers":  [
                        {
                            "text":  "shop",
                            "points":  73
                        },
                        {
                            "text":  "gossip/talk",
                            "points":  11
                        },
                        {
                            "text":  "watch movies/tv",
                            "points":  5
                        },
                        {
                            "text":  "mani/pedi/spa",
                            "points":  3
                        },
                        {
                            "text":  "drink/go to bars",
                            "points":  3
                        },
                        {
                            "text":  "book club/read",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160321,
        "question":  "If the Jolly Green Giant cheated on his wife, what might she do to his zucchini?",
        "answers":  [
                        {
                            "text":  "chop/peel/spiralize",
                            "points":  72
                        },
                        {
                            "text":  "cook/boil it",
                            "points":  13
                        },
                        {
                            "text":  "eat it off",
                            "points":  4
                        },
                        {
                            "text":  "break/squash it",
                            "points":  4
                        },
                        {
                            "text":  "put it up his booty",
                            "points":  2
                        },
                        {
                            "text":  "hide it",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160322,
        "question":  "We asked 100 married women... Name something specific of yours that you'd hate to see the babysitter wearing.",
        "answers":  [
                        {
                            "text":  "lingerie/nightie",
                            "points":  72
                        },
                        {
                            "text":  "wedding ring/jewelry",
                            "points":  12
                        },
                        {
                            "text":  "bikini/swimsuit",
                            "points":  6
                        },
                        {
                            "text":  "robe",
                            "points":  3
                        },
                        {
                            "text":  "skirt/chic sundress",
                            "points":  2
                        },
                        {
                            "text":  "shoes/slippers",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160323,
        "question":  "Name something Pinocchio's wife might do to him if she catches him cheating on her.",
        "answers":  [
                        {
                            "text":  "cut off/break nose",
                            "points":  67
                        },
                        {
                            "text":  "set him on fire",
                            "points":  13
                        },
                        {
                            "text":  "saw off woody",
                            "points":  11
                        },
                        {
                            "text":  "dump him",
                            "points":  2
                        },
                        {
                            "text":  "watch his nose grow",
                            "points":  2
                        },
                        {
                            "text":  "hit him",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160324,
        "question":  "Name something specific that grandma stops wearing because she figures, \"why bother anymore?\"",
        "answers":  [
                        {
                            "text":  "bra",
                            "points":  61
                        },
                        {
                            "text":  "makeup",
                            "points":  21
                        },
                        {
                            "text":  "teeth",
                            "points":  7
                        },
                        {
                            "text":  "dress/ball gown",
                            "points":  3
                        },
                        {
                            "text":  "girdle",
                            "points":  3
                        },
                        {
                            "text":  "heels/shoes",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160325,
        "question":  "We asked 100 married women... Tell me the single hardest word for your husband to say.",
        "answers":  [
                        {
                            "text":  "sorry",
                            "points":  59
                        },
                        {
                            "text":  "please",
                            "points":  11
                        },
                        {
                            "text":  "thanks",
                            "points":  10
                        },
                        {
                            "text":  "love",
                            "points":  6
                        },
                        {
                            "text":  "yes",
                            "points":  6
                        },
                        {
                            "text":  "no",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160326,
        "question":  "Besides her hands, name a part of her body a stripper could use to play the piano.",
        "answers":  [
                        {
                            "text":  "lickable feet",
                            "points":  57
                        },
                        {
                            "text":  "bodacious tatas",
                            "points":  21
                        },
                        {
                            "text":  "bouncy butt cheeks",
                            "points":  9
                        },
                        {
                            "text":  "long, wet tongue",
                            "points":  6
                        },
                        {
                            "text":  "her elbows",
                            "points":  2
                        },
                        {
                            "text":  "her nose",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160327,
        "question":  "We asked 100 single women... You don't really need a man as long as you have lots of what?",
        "answers":  [
                        {
                            "text":  "dough",
                            "points":  57
                        },
                        {
                            "text":  "friends",
                            "points":  21
                        },
                        {
                            "text":  "\"toys\"/batteries",
                            "points":  6
                        },
                        {
                            "text":  "chocolate",
                            "points":  5
                        },
                        {
                            "text":  "gerbils/pets",
                            "points":  5
                        },
                        {
                            "text":  "wine",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160328,
        "question":  "We asked 100 women... Name something you'd hate about being married to King Kong.",
        "answers":  [
                        {
                            "text":  "hairy/sheds",
                            "points":  55
                        },
                        {
                            "text":  "too big/down there",
                            "points":  24
                        },
                        {
                            "text":  "aggressive/angry",
                            "points":  7
                        },
                        {
                            "text":  "stinky/breath",
                            "points":  6
                        },
                        {
                            "text":  "carries me around",
                            "points":  3
                        },
                        {
                            "text":  "likes heights",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160329,
        "question":  "We asked 100 women... Name something you're glad Steve Harvey can't see you wearing when you watch \"Family Feud\" at home.",
        "answers":  [
                        {
                            "text":  "pj's/nightie",
                            "points":  51
                        },
                        {
                            "text":  "undies/lingerie",
                            "points":  18
                        },
                        {
                            "text":  "ratty robe",
                            "points":  16
                        },
                        {
                            "text":  "baggy sweats",
                            "points":  7
                        },
                        {
                            "text":  "bunny slippers",
                            "points":  3
                        },
                        {
                            "text":  "ugly/holey shirt",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160330,
        "question":  "When giving a eulogy for his pet, Goldie the goldfish, what might a child say that Goldie really liked?",
        "answers":  [
                        {
                            "text":  "water/swimming",
                            "points":  50
                        },
                        {
                            "text":  "his fish food",
                            "points":  26
                        },
                        {
                            "text":  "other fishies",
                            "points":  6
                        },
                        {
                            "text":  "aquarium/toys",
                            "points":  6
                        },
                        {
                            "text":  "time w/ the kid",
                            "points":  5
                        },
                        {
                            "text":  "blowing bubbles",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160331,
        "question":  "Name something you do on a range.",
        "answers":  [
                        {
                            "text":  "shoot guns",
                            "points":  47
                        },
                        {
                            "text":  "cook",
                            "points":  26
                        },
                        {
                            "text":  "golf",
                            "points":  10
                        },
                        {
                            "text":  "ride horses",
                            "points":  10
                        },
                        {
                            "text":  "herd cows",
                            "points":  2
                        },
                        {
                            "text":  "lasso",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160332,
        "question":  "We asked 100 women... What's the sexiest thing you've ever sent to a man?",
        "answers":  [
                        {
                            "text":  "panties/lingerie",
                            "points":  43
                        },
                        {
                            "text":  "pic/nude selfie",
                            "points":  19
                        },
                        {
                            "text":  "\"my love\"/self",
                            "points":  12
                        },
                        {
                            "text":  "letter/perfumed",
                            "points":  9
                        },
                        {
                            "text":  "a blown kiss",
                            "points":  8
                        },
                        {
                            "text":  "a danish/food",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  160333,
        "question":  "The highlight of the wedding was when a pair of doves flew out of the bride's what?",
        "answers":  [
                        {
                            "text":  "dress/cleavage",
                            "points":  33
                        },
                        {
                            "text":  "hair",
                            "points":  23
                        },
                        {
                            "text":  "bouquet",
                            "points":  18
                        },
                        {
                            "text":  "veil/hat",
                            "points":  12
                        },
                        {
                            "text":  "cake",
                            "points":  8
                        },
                        {
                            "text":  "butt/poop chute",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160334,
        "question":  "Name something that's in a man's wallet that tells a woman all she needs to know.",
        "answers":  [
                        {
                            "text":  "condom/from 1973",
                            "points":  31
                        },
                        {
                            "text":  "crisp chedda/check",
                            "points":  22
                        },
                        {
                            "text":  "photo/wife's pic",
                            "points":  17
                        },
                        {
                            "text":  "i.d./driver's license",
                            "points":  15
                        },
                        {
                            "text":  "credit/black amex",
                            "points":  10
                        },
                        {
                            "text":  "bae's phone #",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160335,
        "question":  "We asked 100 married men... When your wife asks if you think her new girlfriend is pretty, what do you say?",
        "answers":  [
                        {
                            "text":  "not as pretty as you",
                            "points":  29
                        },
                        {
                            "text":  "i guess she's ok",
                            "points":  29
                        },
                        {
                            "text":  "yes/absolutely",
                            "points":  19
                        },
                        {
                            "text":  "didn't notice",
                            "points":  15
                        },
                        {
                            "text":  "do you?",
                            "points":  3
                        },
                        {
                            "text":  "no/compared to what?",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160336,
        "question":  "We asked 100 women... Fill in the blank: My idea of a perfect night is me in bed with a ______.",
        "answers":  [
                        {
                            "text":  "tv remote/movie",
                            "points":  26
                        },
                        {
                            "text":  "bible/book",
                            "points":  22
                        },
                        {
                            "text":  "bottle of vino",
                            "points":  21
                        },
                        {
                            "text":  "hunkalicious stud",
                            "points":  13
                        },
                        {
                            "text":  "dog/cat",
                            "points":  11
                        },
                        {
                            "text":  "pillow/covers",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160337,
        "question":  "Name a place that bad boys end up.",
        "answers":  [
                        {
                            "text":  "jail/juvie",
                            "points":  82
                        },
                        {
                            "text":  "dead in hell",
                            "points":  5
                        },
                        {
                            "text":  "hollywood/on tv",
                            "points":  3
                        },
                        {
                            "text":  "with me/bad girls",
                            "points":  2
                        },
                        {
                            "text":  "bar/nightclub",
                            "points":  2
                        },
                        {
                            "text":  "in the corner",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160338,
        "question":  "A man might say, \"I wouldn't say my ex-wife is a witch, but she does have a\" what?",
        "answers":  [
                        {
                            "text":  "broom",
                            "points":  68
                        },
                        {
                            "text":  "temper/'tude",
                            "points":  17
                        },
                        {
                            "text":  "long bumpy nose",
                            "points":  5
                        },
                        {
                            "text":  "cauldron/oven",
                            "points":  2
                        },
                        {
                            "text":  "cackling laugh",
                            "points":  2
                        },
                        {
                            "text":  "pointy hat",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160339,
        "question":  "You're not a nudist, but name something you do frequently in the nude.",
        "answers":  [
                        {
                            "text":  "shower/bathe",
                            "points":  68
                        },
                        {
                            "text":  "sleep",
                            "points":  17
                        },
                        {
                            "text":  "laundry/clean",
                            "points":  4
                        },
                        {
                            "text":  "swim",
                            "points":  3
                        },
                        {
                            "text":  "dance/to ymca",
                            "points":  2
                        },
                        {
                            "text":  "look in mirror",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160340,
        "question":  "We asked 100 men... Name something women look sexier wearing instead of being completely naked.",
        "answers":  [
                        {
                            "text":  "lingerie/nightie",
                            "points":  66
                        },
                        {
                            "text":  "bikini",
                            "points":  15
                        },
                        {
                            "text":  "skimpy dress",
                            "points":  8
                        },
                        {
                            "text":  "6-inch heels",
                            "points":  3
                        },
                        {
                            "text":  "booty shorts",
                            "points":  2
                        },
                        {
                            "text":  "guy's shirt",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160341,
        "question":  "Name something Santa would not need if he lived in Hawaii instead of the North Pole.",
        "answers":  [
                        {
                            "text":  "santa suit/boots",
                            "points":  65
                        },
                        {
                            "text":  "his sleigh",
                            "points":  16
                        },
                        {
                            "text":  "reindeer",
                            "points":  5
                        },
                        {
                            "text":  "bushy beard",
                            "points":  5
                        },
                        {
                            "text":  "chimney/fireplace",
                            "points":  3
                        },
                        {
                            "text":  "snow shovel",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160342,
        "question":  "What's the first thing a man reaches for when a woman dumps him?",
        "answers":  [
                        {
                            "text":  "booze/boxed wine",
                            "points":  59
                        },
                        {
                            "text":  "new woman/a ho",
                            "points":  14
                        },
                        {
                            "text":  "his phone",
                            "points":  13
                        },
                        {
                            "text":  "black book",
                            "points":  5
                        },
                        {
                            "text":  "a friend",
                            "points":  3
                        },
                        {
                            "text":  "tv remote",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160343,
        "question":  "We asked 100 single men... Name someone you'd never bring with you to a bar as your wingman.",
        "answers":  [
                        {
                            "text":  "pops",
                            "points":  56
                        },
                        {
                            "text":  "ma",
                            "points":  17
                        },
                        {
                            "text":  "my brother",
                            "points":  9
                        },
                        {
                            "text":  "my priest/clergy",
                            "points":  8
                        },
                        {
                            "text":  "my girlfriend",
                            "points":  3
                        },
                        {
                            "text":  "celeb/denzel",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160344,
        "question":  "Name something a naked juggler should be careful juggling.",
        "answers":  [
                        {
                            "text":  "knives/swords",
                            "points":  54
                        },
                        {
                            "text":  "fire/torches",
                            "points":  22
                        },
                        {
                            "text":  "balls",
                            "points":  9
                        },
                        {
                            "text":  "chain saws",
                            "points":  5
                        },
                        {
                            "text":  "bowling pins",
                            "points":  3
                        },
                        {
                            "text":  "axes/hatchets",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160345,
        "question":  "If roles were reversed, what part of a human might turkeys fight over at Thanksgiving?",
        "answers":  [
                        {
                            "text":  "leg/thigh",
                            "points":  52
                        },
                        {
                            "text":  "plump breast",
                            "points":  27
                        },
                        {
                            "text":  "butt/tailbone",
                            "points":  10
                        },
                        {
                            "text":  "eyeballs",
                            "points":  3
                        },
                        {
                            "text":  "arms",
                            "points":  2
                        },
                        {
                            "text":  "brain",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160346,
        "question":  "It's hot in hell. Name a type of clothing that's probably really popular there.",
        "answers":  [
                        {
                            "text":  "bikini/swimsuit",
                            "points":  48
                        },
                        {
                            "text":  "shorts",
                            "points":  20
                        },
                        {
                            "text":  "tank top/tee",
                            "points":  14
                        },
                        {
                            "text":  "thong/jock strap",
                            "points":  7
                        },
                        {
                            "text":  "bandana/headband",
                            "points":  4
                        },
                        {
                            "text":  "fireproof/fire suit",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160347,
        "question":  "We asked 100 married men... Name something your mother-in-law has that's bigger than yours.",
        "answers":  [
                        {
                            "text":  "big mouth",
                            "points":  38
                        },
                        {
                            "text":  "bank account",
                            "points":  27
                        },
                        {
                            "text":  "house",
                            "points":  18
                        },
                        {
                            "text":  "onion booty",
                            "points":  5
                        },
                        {
                            "text":  "car/truck",
                            "points":  5
                        },
                        {
                            "text":  "beer gut",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160348,
        "question":  "Name something Steve Harvey might wear to disguise himself in public.",
        "answers":  [
                        {
                            "text":  "wig/with dreads",
                            "points":  38
                        },
                        {
                            "text":  "hat/beret",
                            "points":  26
                        },
                        {
                            "text":  "beard",
                            "points":  10
                        },
                        {
                            "text":  "mask",
                            "points":  10
                        },
                        {
                            "text":  "shades/nerd glasses",
                            "points":  9
                        },
                        {
                            "text":  "casual outfit/jordache",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160349,
        "question":  "Name a place a man hopes his psycho ex-girlfriend doesn't show up.",
        "answers":  [
                        {
                            "text":  "work",
                            "points":  36
                        },
                        {
                            "text":  "home/the shower",
                            "points":  28
                        },
                        {
                            "text":  "his wedding",
                            "points":  22
                        },
                        {
                            "text":  "bar/nightclub",
                            "points":  5
                        },
                        {
                            "text":  "his folks' house",
                            "points":  3
                        },
                        {
                            "text":  "church",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160350,
        "question":  "Name a part of your lover's body it's okay to gently bite.",
        "answers":  [
                        {
                            "text":  "ear",
                            "points":  36
                        },
                        {
                            "text":  "neck",
                            "points":  28
                        },
                        {
                            "text":  "boobs/nipples",
                            "points":  14
                        },
                        {
                            "text":  "lips",
                            "points":  10
                        },
                        {
                            "text":  "shoulder",
                            "points":  6
                        },
                        {
                            "text":  "toes",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160351,
        "question":  "Big bottoms are in. So what might a woman do to make hers look even bigger?",
        "answers":  [
                        {
                            "text":  "pad/with balloons",
                            "points":  35
                        },
                        {
                            "text":  "tight pants/clothes",
                            "points":  25
                        },
                        {
                            "text":  "implants",
                            "points":  13
                        },
                        {
                            "text":  "squats/work out",
                            "points":  11
                        },
                        {
                            "text":  "eat/gain weight",
                            "points":  8
                        },
                        {
                            "text":  "filler injections",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160352,
        "question":  "If you had a hickey on your neck, who would you try to hide it from?",
        "answers":  [
                        {
                            "text":  "my mom/dad",
                            "points":  34
                        },
                        {
                            "text":  "my spouse/mate",
                            "points":  21
                        },
                        {
                            "text":  "everyone",
                            "points":  13
                        },
                        {
                            "text":  "boss/coworker",
                            "points":  12
                        },
                        {
                            "text":  "nobody/be proud!",
                            "points":  11
                        },
                        {
                            "text":  "my kids",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160353,
        "question":  "We asked 100 men... I know my toupee is made out of human hair because it's starting to what?",
        "answers":  [
                        {
                            "text":  "turn gray",
                            "points":  31
                        },
                        {
                            "text":  "fall out/go bald",
                            "points":  31
                        },
                        {
                            "text":  "get dandruff",
                            "points":  10
                        },
                        {
                            "text":  "grow",
                            "points":  9
                        },
                        {
                            "text":  "smell/get dirty",
                            "points":  9
                        },
                        {
                            "text":  "itch",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  160354,
        "question":  "Name the worst thing to visualize your grandfather wearing.",
        "answers":  [
                        {
                            "text":  "thong/undies",
                            "points":  28
                        },
                        {
                            "text":  "nada/just his teeth",
                            "points":  27
                        },
                        {
                            "text":  "speedo/swimsuit",
                            "points":  26
                        },
                        {
                            "text":  "granny's clothes",
                            "points":  10
                        },
                        {
                            "text":  "shorts",
                            "points":  3
                        },
                        {
                            "text":  "suspenders",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160355,
        "question":  "Name something that people say just flew by.",
        "answers":  [
                        {
                            "text":  "time/life",
                            "points":  74
                        },
                        {
                            "text":  "a plane",
                            "points":  8
                        },
                        {
                            "text":  "a bird",
                            "points":  6
                        },
                        {
                            "text":  "a cop car",
                            "points":  3
                        },
                        {
                            "text":  "superman",
                            "points":  2
                        },
                        {
                            "text":  "a bug",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160356,
        "question":  "If a 30-year-old man still lives at home, what wouldn't he want others to know his mom still does for him?",
        "answers":  [
                        {
                            "text":  "laundry",
                            "points":  59
                        },
                        {
                            "text":  "cooks/feeds him",
                            "points":  11
                        },
                        {
                            "text":  "cleans/makes bed",
                            "points":  10
                        },
                        {
                            "text":  "bathes him",
                            "points":  6
                        },
                        {
                            "text":  "dresses him",
                            "points":  5
                        },
                        {
                            "text":  "tucks him in",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160357,
        "question":  "Name something you'd be shocked your parents gave you a bag of for your birthday.",
        "answers":  [
                        {
                            "text":  "weed/drugs",
                            "points":  56
                        },
                        {
                            "text":  "benjamins!",
                            "points":  20
                        },
                        {
                            "text":  "condoms/magnums",
                            "points":  13
                        },
                        {
                            "text":  "gold",
                            "points":  2
                        },
                        {
                            "text":  "candy/chocolate",
                            "points":  2
                        },
                        {
                            "text":  "their poo",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160358,
        "question":  "When the old folks play spin the bottle at the retirement home, what kind of bottle do they use?",
        "answers":  [
                        {
                            "text":  "med/vitamin/fiber",
                            "points":  54
                        },
                        {
                            "text":  "booze",
                            "points":  16
                        },
                        {
                            "text":  "ensure/boost",
                            "points":  9
                        },
                        {
                            "text":  "hot water bottle",
                            "points":  7
                        },
                        {
                            "text":  "soda bottle",
                            "points":  6
                        },
                        {
                            "text":  "urine bottle",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160359,
        "question":  "Name something a woman wouldn't want to ride on after getting implants in her bottom.",
        "answers":  [
                        {
                            "text":  "horse",
                            "points":  54
                        },
                        {
                            "text":  "roller coaster",
                            "points":  14
                        },
                        {
                            "text":  "motorcycle/moped",
                            "points":  12
                        },
                        {
                            "text":  "bicycle",
                            "points":  9
                        },
                        {
                            "text":  "bull/mechanical",
                            "points":  4
                        },
                        {
                            "text":  "her lover",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160360,
        "question":  "Fill in the blank: A mom is embarrassed if her child says to someone, \"You're ______.\"",
        "answers":  [
                        {
                            "text":  "9000 pounds",
                            "points":  53
                        },
                        {
                            "text":  "ugly",
                            "points":  25
                        },
                        {
                            "text":  "stupid/idiotic",
                            "points":  8
                        },
                        {
                            "text":  "a jerk/d-bag",
                            "points":  5
                        },
                        {
                            "text":  "old",
                            "points":  2
                        },
                        {
                            "text":  "weird/goofy",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160361,
        "question":  "When you're at a wild party, what might you start doing because everybody else is?",
        "answers":  [
                        {
                            "text":  "drinking/body shots",
                            "points":  39
                        },
                        {
                            "text":  "dancing",
                            "points":  32
                        },
                        {
                            "text":  "stripping",
                            "points":  10
                        },
                        {
                            "text":  "swapping spit",
                            "points":  6
                        },
                        {
                            "text":  "singing",
                            "points":  5
                        },
                        {
                            "text":  "drugs/ganja",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160362,
        "question":  "Tell me something a bride would have a hard time doing if she got drunk before the wedding.",
        "answers":  [
                        {
                            "text":  "walking/down aisle",
                            "points":  32
                        },
                        {
                            "text":  "vows/talking",
                            "points":  26
                        },
                        {
                            "text":  "dressing",
                            "points":  20
                        },
                        {
                            "text":  "stand up/still",
                            "points":  10
                        },
                        {
                            "text":  "dancing",
                            "points":  5
                        },
                        {
                            "text":  "peeing w/ gown on",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160363,
        "question":  "Name a question wives ask husbands that husbands won't answer because it could be a trick.",
        "answers":  [
                        {
                            "text":  "how do i look/fat?",
                            "points":  62
                        },
                        {
                            "text":  "where were you?",
                            "points":  15
                        },
                        {
                            "text":  "do you love me?",
                            "points":  10
                        },
                        {
                            "text":  "is that gal pretty?",
                            "points":  3
                        },
                        {
                            "text":  "what do today?",
                            "points":  2
                        },
                        {
                            "text":  "had sex w/ others?",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160364,
        "question":  "Fill in the blank: Steve Harvey was robbed from winning \"sexiest man of the year.\" But he'd win \"______est man of the year.\"",
        "answers":  [
                        {
                            "text":  "funniest/goofiest",
                            "points":  58
                        },
                        {
                            "text":  "baldest",
                            "points":  20
                        },
                        {
                            "text":  "flyest dressed",
                            "points":  7
                        },
                        {
                            "text":  "coolest",
                            "points":  4
                        },
                        {
                            "text":  "blackest",
                            "points":  3
                        },
                        {
                            "text":  "smartest",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160365,
        "question":  "We asked 100 married women... Fill in the blank: I think my man is ______ even if no one else does.",
        "answers":  [
                        {
                            "text":  "smokin' hot",
                            "points":  54
                        },
                        {
                            "text":  "brilliant",
                            "points":  16
                        },
                        {
                            "text":  "sweet/thoughtful",
                            "points":  9
                        },
                        {
                            "text":  "funny/witty",
                            "points":  6
                        },
                        {
                            "text":  "an annoying douche",
                            "points":  5
                        },
                        {
                            "text":  "hardworking",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160366,
        "question":  "Fill in the blank: You never want to hear a zookeeper say, \"Who let the ______s out?\"",
        "answers":  [
                        {
                            "text":  "lions",
                            "points":  51
                        },
                        {
                            "text":  "tigers",
                            "points":  15
                        },
                        {
                            "text":  "dogs",
                            "points":  9
                        },
                        {
                            "text":  "bears",
                            "points":  9
                        },
                        {
                            "text":  "apes/monkeys",
                            "points":  7
                        },
                        {
                            "text":  "snakes",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160367,
        "question":  "Bob calls his wife \"Juicy Fruit\" because her bottom is shaped like what fruit?",
        "answers":  [
                        {
                            "text":  "pear",
                            "points":  45
                        },
                        {
                            "text":  "peach",
                            "points":  18
                        },
                        {
                            "text":  "watermelon/melon",
                            "points":  14
                        },
                        {
                            "text":  "apple",
                            "points":  11
                        },
                        {
                            "text":  "pineapple",
                            "points":  3
                        },
                        {
                            "text":  "orange",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160368,
        "question":  "Name a kind of ball a bald guy might decorate his head to look like on Halloween.",
        "answers":  [
                        {
                            "text":  "basketball",
                            "points":  41
                        },
                        {
                            "text":  "bowling ball",
                            "points":  14
                        },
                        {
                            "text":  "8-ball/pool ball",
                            "points":  14
                        },
                        {
                            "text":  "baseball",
                            "points":  12
                        },
                        {
                            "text":  "soccer ball",
                            "points":  11
                        },
                        {
                            "text":  "golf ball",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160369,
        "question":  "If a couple still lived together after their divorce, what part of the house would the wife want?",
        "answers":  [
                        {
                            "text":  "bedroom/master",
                            "points":  36
                        },
                        {
                            "text":  "all of it",
                            "points":  24
                        },
                        {
                            "text":  "kitchen",
                            "points":  18
                        },
                        {
                            "text":  "bathroom",
                            "points":  9
                        },
                        {
                            "text":  "living room",
                            "points":  4
                        },
                        {
                            "text":  "closet",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160370,
        "question":  "Name something about Santa Claus that might really annoy the elves.",
        "answers":  [
                        {
                            "text":  "jolly/ho ho ho",
                            "points":  35
                        },
                        {
                            "text":  "\"fatty eats our food\"",
                            "points":  29
                        },
                        {
                            "text":  "terrible boss",
                            "points":  15
                        },
                        {
                            "text":  "fart constantly",
                            "points":  6
                        },
                        {
                            "text":  "dirty bushy beard",
                            "points":  5
                        },
                        {
                            "text":  "he snores",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160371,
        "question":  "We asked 100 married men... Name something your wife refuses to share with you.",
        "answers":  [
                        {
                            "text":  "food/chocolate",
                            "points":  32
                        },
                        {
                            "text":  "secrets/fantasies",
                            "points":  30
                        },
                        {
                            "text":  "the bathroom",
                            "points":  12
                        },
                        {
                            "text":  "her money",
                            "points":  10
                        },
                        {
                            "text":  "bed/covers",
                            "points":  7
                        },
                        {
                            "text":  "her clothes/undies",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160372,
        "question":  "Fill in the blank: To be honest, I don't enjoy seeing pictures that other people post of their ______.",
        "answers":  [
                        {
                            "text":  "ugly kids",
                            "points":  24
                        },
                        {
                            "text":  "trashy bod/face",
                            "points":  21
                        },
                        {
                            "text":  "vacations",
                            "points":  19
                        },
                        {
                            "text":  "food/dinner",
                            "points":  19
                        },
                        {
                            "text":  "pets/dog",
                            "points":  9
                        },
                        {
                            "text":  "surgery/gaping sore",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160373,
        "question":  "Name something a woman discovers about her boyfriend that makes her say, \"My life is a lie.\"",
        "answers":  [
                        {
                            "text":  "cheating man-ho!",
                            "points":  76
                        },
                        {
                            "text":  "job/russian spy",
                            "points":  5
                        },
                        {
                            "text":  "broke/mega debt",
                            "points":  4
                        },
                        {
                            "text":  "fake name",
                            "points":  3
                        },
                        {
                            "text":  "delights in dudes",
                            "points":  3
                        },
                        {
                            "text":  "age/he's 17",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160374,
        "question":  "Name something a farmer does to a cow that he would hate the cow to do to him.",
        "answers":  [
                        {
                            "text":  "milk/yank his nips",
                            "points":  70
                        },
                        {
                            "text":  "brand him",
                            "points":  7
                        },
                        {
                            "text":  "butcher him",
                            "points":  7
                        },
                        {
                            "text":  "inseminate him",
                            "points":  4
                        },
                        {
                            "text":  "castrate/neuter",
                            "points":  3
                        },
                        {
                            "text":  "smack booty",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160375,
        "question":  "Name something a lady crab might find sexy about her king crab.",
        "answers":  [
                        {
                            "text":  "big ole pinchers",
                            "points":  61
                        },
                        {
                            "text":  "long bumpy legs",
                            "points":  17
                        },
                        {
                            "text":  "trendy color",
                            "points":  5
                        },
                        {
                            "text":  "sideways strut",
                            "points":  4
                        },
                        {
                            "text":  "his baby maker",
                            "points":  3
                        },
                        {
                            "text":  "his hard shell",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160376,
        "question":  "Name someone you're talking trash about that you'd hate to find out is standing behind you.",
        "answers":  [
                        {
                            "text":  "boss/coworker",
                            "points":  56
                        },
                        {
                            "text":  "spouse/mate",
                            "points":  16
                        },
                        {
                            "text":  "best friend",
                            "points":  9
                        },
                        {
                            "text":  "mother-in-law",
                            "points":  5
                        },
                        {
                            "text":  "parents/mom",
                            "points":  4
                        },
                        {
                            "text":  "celeb/mike tyson",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160377,
        "question":  "What might you put marijuana in at Thanksgiving so the family's too mellow to argue?",
        "answers":  [
                        {
                            "text":  "stuffing/dressing",
                            "points":  55
                        },
                        {
                            "text":  "the turkey",
                            "points":  11
                        },
                        {
                            "text":  "brownies",
                            "points":  9
                        },
                        {
                            "text":  "potatoes/yams",
                            "points":  8
                        },
                        {
                            "text":  "pie/pumpkin pie",
                            "points":  7
                        },
                        {
                            "text":  "gravy",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160378,
        "question":  "Fill in the blank: ______ pack.",
        "answers":  [
                        {
                            "text":  "backpack",
                            "points":  53
                        },
                        {
                            "text":  "rat pack",
                            "points":  13
                        },
                        {
                            "text":  "six-pack",
                            "points":  13
                        },
                        {
                            "text":  "fanny pack",
                            "points":  9
                        },
                        {
                            "text":  "snack pack",
                            "points":  3
                        },
                        {
                            "text":  "wolf pack",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160379,
        "question":  "Name something you'd better not do if you're sitting in the front row of church.",
        "answers":  [
                        {
                            "text":  "sleep/yawn",
                            "points":  47
                        },
                        {
                            "text":  "talk/yell/cuss",
                            "points":  16
                        },
                        {
                            "text":  "2-toot salute",
                            "points":  12
                        },
                        {
                            "text":  "pick your nose",
                            "points":  10
                        },
                        {
                            "text":  "sneeze",
                            "points":  4
                        },
                        {
                            "text":  "laugh/mid-prayer",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160380,
        "question":  "What's something a woman might have at her \"the divorce is final\" party?",
        "answers":  [
                        {
                            "text":  "stripper",
                            "points":  44
                        },
                        {
                            "text":  "some dranks",
                            "points":  22
                        },
                        {
                            "text":  "new boo/men",
                            "points":  14
                        },
                        {
                            "text":  "bonfire",
                            "points":  7
                        },
                        {
                            "text":  "cake",
                            "points":  4
                        },
                        {
                            "text":  "cute new car",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160381,
        "question":  "Name a reason that a woman might say that her ex is the greatest ex-husband a girl could have.",
        "answers":  [
                        {
                            "text":  "alimony/his moolah",
                            "points":  44
                        },
                        {
                            "text":  "still her bff",
                            "points":  16
                        },
                        {
                            "text":  "good w/ our kids",
                            "points":  13
                        },
                        {
                            "text":  "he's dead",
                            "points":  7
                        },
                        {
                            "text":  "hot ex sex",
                            "points":  7
                        },
                        {
                            "text":  "not around/in china",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  160382,
        "question":  "Fill in the blank: A teenager magician might wish he could make his ______ disappear.",
        "answers":  [
                        {
                            "text":  "acne",
                            "points":  43
                        },
                        {
                            "text":  "parents",
                            "points":  27
                        },
                        {
                            "text":  "homework",
                            "points":  6
                        },
                        {
                            "text":  "teacher",
                            "points":  6
                        },
                        {
                            "text":  "siblings",
                            "points":  6
                        },
                        {
                            "text":  "grades/report card",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160383,
        "question":  "What do you hope the guy seated next to you on an airplane didn't eat at the airport?",
        "answers":  [
                        {
                            "text":  "beans",
                            "points":  43
                        },
                        {
                            "text":  "garlic",
                            "points":  18
                        },
                        {
                            "text":  "onions",
                            "points":  14
                        },
                        {
                            "text":  "burrito/taco",
                            "points":  9
                        },
                        {
                            "text":  "fish/seafood",
                            "points":  5
                        },
                        {
                            "text":  "chili",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160384,
        "question":  "Name a place where men are players.",
        "answers":  [
                        {
                            "text":  "sports venue",
                            "points":  41
                        },
                        {
                            "text":  "bar/nightclub",
                            "points":  34
                        },
                        {
                            "text":  "vegas/casino",
                            "points":  9
                        },
                        {
                            "text":  "strip joint",
                            "points":  5
                        },
                        {
                            "text":  "theater",
                            "points":  2
                        },
                        {
                            "text":  "europe/italy",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160385,
        "question":  "Name something you can't do until you first loosen up with a few drinks.",
        "answers":  [
                        {
                            "text":  "dance in public",
                            "points":  36
                        },
                        {
                            "text":  "sing/karaoke",
                            "points":  30
                        },
                        {
                            "text":  "talk/flirt",
                            "points":  21
                        },
                        {
                            "text":  "become drunk",
                            "points":  2
                        },
                        {
                            "text":  "play pool",
                            "points":  2
                        },
                        {
                            "text":  "boink/someone ugly",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160386,
        "question":  "We asked 100 men... Name someone you never want to hear say, \"Help me get my bra off.\"",
        "answers":  [
                        {
                            "text":  "my mother",
                            "points":  35
                        },
                        {
                            "text":  "my grandma",
                            "points":  29
                        },
                        {
                            "text":  "my mother-in-law",
                            "points":  12
                        },
                        {
                            "text":  "my daughter",
                            "points":  6
                        },
                        {
                            "text":  "my sister",
                            "points":  6
                        },
                        {
                            "text":  "a man/my hubby",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160387,
        "question":  "Name something the naked chef ties his dish towel around.",
        "answers":  [
                        {
                            "text":  "his waist/belly",
                            "points":  32
                        },
                        {
                            "text":  "his kabob",
                            "points":  21
                        },
                        {
                            "text":  "his neck",
                            "points":  17
                        },
                        {
                            "text":  "his arm/wrist",
                            "points":  16
                        },
                        {
                            "text":  "oven handle",
                            "points":  4
                        },
                        {
                            "text":  "his head/forehead",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160388,
        "question":  "A cavewoman might say about a caveman, \"He doesn't talk much, but he has a great big\" what?",
        "answers":  [
                        {
                            "text":  "club/stick",
                            "points":  73
                        },
                        {
                            "text":  "dongosaurus",
                            "points":  6
                        },
                        {
                            "text":  "mouth",
                            "points":  6
                        },
                        {
                            "text":  "heart",
                            "points":  3
                        },
                        {
                            "text":  "head",
                            "points":  2
                        },
                        {
                            "text":  "cave",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160389,
        "question":  "Name an occupation where they wish they could say, \"Go get it yourself.\"",
        "answers":  [
                        {
                            "text":  "server/restaurant",
                            "points":  69
                        },
                        {
                            "text":  "retail/clerk",
                            "points":  9
                        },
                        {
                            "text":  "bartender",
                            "points":  5
                        },
                        {
                            "text":  "valet/parking lot",
                            "points":  4
                        },
                        {
                            "text":  "assistant/sect'y",
                            "points":  3
                        },
                        {
                            "text":  "mother",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160390,
        "question":  "If all dogs go to heaven, name something God must have up there for them.",
        "answers":  [
                        {
                            "text":  "bones/food",
                            "points":  61
                        },
                        {
                            "text":  "fire hydrants",
                            "points":  11
                        },
                        {
                            "text":  "big yard/park",
                            "points":  9
                        },
                        {
                            "text":  "cats/animals",
                            "points":  4
                        },
                        {
                            "text":  "balls/toys",
                            "points":  4
                        },
                        {
                            "text":  "poop scoop/cleaner",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160391,
        "question":  "Name something Steve Harvey might hire the best Steve Harvey look-alike to do in his place.",
        "answers":  [
                        {
                            "text":  "host feud/work",
                            "points":  53
                        },
                        {
                            "text":  "events/autographs",
                            "points":  12
                        },
                        {
                            "text":  "sing/dance",
                            "points":  11
                        },
                        {
                            "text":  "jury duty/court",
                            "points":  7
                        },
                        {
                            "text":  "house/yard work",
                            "points":  6
                        },
                        {
                            "text":  "be with/romance wife",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160392,
        "question":  "If a restaurant customer only left a 25¢ tip, what might the waiter throw at him?",
        "answers":  [
                        {
                            "text":  "the quarter",
                            "points":  49
                        },
                        {
                            "text":  "food/beverage",
                            "points":  24
                        },
                        {
                            "text":  "dish/broken glass",
                            "points":  9
                        },
                        {
                            "text":  "insult/\"bite me\"",
                            "points":  4
                        },
                        {
                            "text":  "towel/dishrag",
                            "points":  3
                        },
                        {
                            "text":  "stink eye",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160393,
        "question":  "Name something a bridesmaid might wear to get all the attention from the men at the wedding.",
        "answers":  [
                        {
                            "text":  "sexy dress/skirt",
                            "points":  48
                        },
                        {
                            "text":  "lingerie/garter",
                            "points":  17
                        },
                        {
                            "text":  "nothing",
                            "points":  12
                        },
                        {
                            "text":  "no bra",
                            "points":  11
                        },
                        {
                            "text":  "hooker heels",
                            "points":  2
                        },
                        {
                            "text":  "a sign/\"thirsty\"",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160394,
        "question":  "We asked 100 men... Name a tiny lie that you tell to get women.",
        "answers":  [
                        {
                            "text":  "i got harvey money",
                            "points":  39
                        },
                        {
                            "text":  "my age",
                            "points":  24
                        },
                        {
                            "text":  "job/i'm a pilot",
                            "points":  13
                        },
                        {
                            "text":  "i'm single",
                            "points":  9
                        },
                        {
                            "text":  "same interests as u!",
                            "points":  4
                        },
                        {
                            "text":  "you're hot",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160395,
        "question":  "Name something you'd be surprised a nurse did to your bottom after giving you a shot.",
        "answers":  [
                        {
                            "text":  "spanked/patted it",
                            "points":  38
                        },
                        {
                            "text":  "kissed it",
                            "points":  22
                        },
                        {
                            "text":  "rubbed/touched",
                            "points":  15
                        },
                        {
                            "text":  "squeezed/pinched it",
                            "points":  9
                        },
                        {
                            "text":  "took pic/posted it",
                            "points":  5
                        },
                        {
                            "text":  "licked each cheek",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160396,
        "question":  "Name a reason Santa Claus might refuse to come down someone's chimney.",
        "answers":  [
                        {
                            "text":  "blazing fire",
                            "points":  37
                        },
                        {
                            "text":  "can't fit/too fat",
                            "points":  20
                        },
                        {
                            "text":  "dirty/soot",
                            "points":  16
                        },
                        {
                            "text":  "on naughty list/bad",
                            "points":  11
                        },
                        {
                            "text":  "chimney closed off",
                            "points":  5
                        },
                        {
                            "text":  "no chimney",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160397,
        "question":  "Fill in the blank and be specific: In a new Thanksgiving horror movie, a psychotic turkey is on the loose and ______ing people.",
        "answers":  [
                        {
                            "text":  "eating",
                            "points":  32
                        },
                        {
                            "text":  "pecking",
                            "points":  20
                        },
                        {
                            "text":  "stuffing",
                            "points":  13
                        },
                        {
                            "text":  "carving up",
                            "points":  12
                        },
                        {
                            "text":  "cooking/basting",
                            "points":  9
                        },
                        {
                            "text":  "chasing",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  160398,
        "question":  "We asked 100 women... Name a place you shouldn't agree to meet a guy on the first date.",
        "answers":  [
                        {
                            "text":  "his house",
                            "points":  30
                        },
                        {
                            "text":  "hotel/motel",
                            "points":  19
                        },
                        {
                            "text":  "your house",
                            "points":  17
                        },
                        {
                            "text":  "bar/nightclub",
                            "points":  17
                        },
                        {
                            "text":  "strip joint",
                            "points":  6
                        },
                        {
                            "text":  "dark alley",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160399,
        "question":  "We asked 100 women... Name something you like in a man that you also like in a cup of coffee.",
        "answers":  [
                        {
                            "text":  "strength/boldness",
                            "points":  28
                        },
                        {
                            "text":  "sweetness/sugar",
                            "points":  22
                        },
                        {
                            "text":  "nice aroma",
                            "points":  15
                        },
                        {
                            "text":  "cream",
                            "points":  15
                        },
                        {
                            "text":  "nice body",
                            "points":  8
                        },
                        {
                            "text":  "hotness",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160400,
        "question":  "Name a woman who's a thing of booty.",
        "answers":  [
                        {
                            "text":  "kim kardashian",
                            "points":  27
                        },
                        {
                            "text":  "jennifer lopez",
                            "points":  24
                        },
                        {
                            "text":  "beyonce",
                            "points":  21
                        },
                        {
                            "text":  "oprah winfrey",
                            "points":  8
                        },
                        {
                            "text":  "nicki minaj",
                            "points":  6
                        },
                        {
                            "text":  "rihanna",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  160401,
        "question":  "Name something Taylor Swift has a lot of.",
        "answers":  [
                        {
                            "text":  "moolah",
                            "points":  50
                        },
                        {
                            "text":  "boyfriends/exes",
                            "points":  15
                        },
                        {
                            "text":  "songs/hits",
                            "points":  14
                        },
                        {
                            "text":  "fans",
                            "points":  6
                        },
                        {
                            "text":  "clothes/shoes",
                            "points":  3
                        },
                        {
                            "text":  "talent",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160402,
        "question":  "Name something men think they do perfectly until they marry and the wife shows them what idiots they are.",
        "answers":  [
                        {
                            "text":  "clean/laundry",
                            "points":  41
                        },
                        {
                            "text":  "cook/grill",
                            "points":  25
                        },
                        {
                            "text":  "bring glee to the \"v\"",
                            "points":  14
                        },
                        {
                            "text":  "drive/directions",
                            "points":  5
                        },
                        {
                            "text":  "dress",
                            "points":  4
                        },
                        {
                            "text":  "shop",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160403,
        "question":  "Parents pick up their kids. What do single people pick up?",
        "answers":  [
                        {
                            "text":  "hot honeys & hos",
                            "points":  39
                        },
                        {
                            "text":  "their pets",
                            "points":  21
                        },
                        {
                            "text":  "food/chinese",
                            "points":  16
                        },
                        {
                            "text":  "the latest std",
                            "points":  7
                        },
                        {
                            "text":  "their cocktails",
                            "points":  4
                        },
                        {
                            "text":  "dry cleaning",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160404,
        "question":  "What does a bald man have that a woman might run her fingers through?",
        "answers":  [
                        {
                            "text":  "chest hair",
                            "points":  38
                        },
                        {
                            "text":  "wallet/$$$",
                            "points":  25
                        },
                        {
                            "text":  "beard/stache",
                            "points":  14
                        },
                        {
                            "text":  "hairy berries",
                            "points":  7
                        },
                        {
                            "text":  "woolly back",
                            "points":  4
                        },
                        {
                            "text":  "his fingers",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160405,
        "question":  "You never want to hear someone tell you that you're getting what?",
        "answers":  [
                        {
                            "text":  "fat/even fatter",
                            "points":  37
                        },
                        {
                            "text":  "old",
                            "points":  32
                        },
                        {
                            "text":  "fired",
                            "points":  13
                        },
                        {
                            "text":  "sick/ebola",
                            "points":  4
                        },
                        {
                            "text":  "senile/forgetful",
                            "points":  3
                        },
                        {
                            "text":  "ugly/much uglier",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160406,
        "question":  "We asked 100 women... You love your mom. But name a part of her body that you hope yours doesn't end up looking like.",
        "answers":  [
                        {
                            "text":  "flat/fat fanny",
                            "points":  26
                        },
                        {
                            "text":  "bloated belly",
                            "points":  22
                        },
                        {
                            "text":  "beagle-ear boobs",
                            "points":  20
                        },
                        {
                            "text":  "cat face/hag nose",
                            "points":  11
                        },
                        {
                            "text":  "cratered legs",
                            "points":  8
                        },
                        {
                            "text":  "jacked feet/toes",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160407,
        "question":  "If you and your coworkers won the super lottery, what might you all give your boss?",
        "answers":  [
                        {
                            "text":  "resignation/\"g'bye\"",
                            "points":  49
                        },
                        {
                            "text":  "the bird",
                            "points":  17
                        },
                        {
                            "text":  "nothing",
                            "points":  8
                        },
                        {
                            "text":  "money/all of it",
                            "points":  8
                        },
                        {
                            "text":  "gift card",
                            "points":  5
                        },
                        {
                            "text":  "food/pizza hut",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160408,
        "question":  "Steve Harvey just knocked on your front door. What do you hope he wants?",
        "answers":  [
                        {
                            "text":  "give me money",
                            "points":  47
                        },
                        {
                            "text":  "put me on tv",
                            "points":  21
                        },
                        {
                            "text":  "to hug, kiss & \"do me\"",
                            "points":  7
                        },
                        {
                            "text":  "food/drink",
                            "points":  6
                        },
                        {
                            "text":  "talk/tell joke",
                            "points":  5
                        },
                        {
                            "text":  "directions",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160409,
        "question":  "When you feel like cursing, name a word you should use instead.",
        "answers":  [
                        {
                            "text":  "darn!",
                            "points":  46
                        },
                        {
                            "text":  "shoot!",
                            "points":  25
                        },
                        {
                            "text":  "fudge!",
                            "points":  10
                        },
                        {
                            "text":  "sugar!",
                            "points":  3
                        },
                        {
                            "text":  "shucks!",
                            "points":  3
                        },
                        {
                            "text":  "dang!",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160410,
        "question":  "Name something a woman might do if her dud of a date starts moving in for a kiss.",
        "answers":  [
                        {
                            "text":  "turn away/duck",
                            "points":  45
                        },
                        {
                            "text":  "sneeze/cough",
                            "points":  25
                        },
                        {
                            "text":  "leave/powder nose",
                            "points":  8
                        },
                        {
                            "text":  "kiss the fool",
                            "points":  4
                        },
                        {
                            "text":  "talk/say no",
                            "points":  4
                        },
                        {
                            "text":  "punch/slap him",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160411,
        "question":  "After appearing on \"Family Feud,\" a contestant might say, \"I had no idea Steve Harvey was so\" what?",
        "answers":  [
                        {
                            "text":  "funny",
                            "points":  26
                        },
                        {
                            "text":  "tall",
                            "points":  23
                        },
                        {
                            "text":  "handsome/sexy",
                            "points":  21
                        },
                        {
                            "text":  "nice/friendly",
                            "points":  10
                        },
                        {
                            "text":  "crazy",
                            "points":  6
                        },
                        {
                            "text":  "short/or was that rubin?",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160412,
        "question":  "Name something on a McDonald's menu that a male stripper might call himself.",
        "answers":  [
                        {
                            "text":  "big mac",
                            "points":  68
                        },
                        {
                            "text":  "mcnuggets",
                            "points":  7
                        },
                        {
                            "text":  "quarter pounder",
                            "points":  4
                        },
                        {
                            "text":  "mcdouble",
                            "points":  4
                        },
                        {
                            "text":  "mcrib",
                            "points":  3
                        },
                        {
                            "text":  "mcflurry",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160413,
        "question":  "At the Roadkill Café, they don't sell fried chicken. They sell fried what?",
        "answers":  [
                        {
                            "text":  "possum",
                            "points":  57
                        },
                        {
                            "text":  "squirrel",
                            "points":  9
                        },
                        {
                            "text":  "rat/mouse",
                            "points":  8
                        },
                        {
                            "text":  "raccoon",
                            "points":  6
                        },
                        {
                            "text":  "deer",
                            "points":  5
                        },
                        {
                            "text":  "skunk",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160414,
        "question":  "Name a place Dracula might take his date for Valentine's Day.",
        "answers":  [
                        {
                            "text":  "blood bank",
                            "points":  47
                        },
                        {
                            "text":  "cemetery/coffin",
                            "points":  17
                        },
                        {
                            "text":  "castle/dungeon",
                            "points":  8
                        },
                        {
                            "text":  "horror flick",
                            "points":  8
                        },
                        {
                            "text":  "transylvania",
                            "points":  5
                        },
                        {
                            "text":  "his cave/see bats",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160415,
        "question":  "Fill in the blank: If you go to hell, you might be stuck in a room with your ______ for eternity.",
        "answers":  [
                        {
                            "text":  "ex",
                            "points":  44
                        },
                        {
                            "text":  "in-laws",
                            "points":  16
                        },
                        {
                            "text":  "boss/coworker",
                            "points":  11
                        },
                        {
                            "text":  "spouse/mate",
                            "points":  10
                        },
                        {
                            "text":  "mother",
                            "points":  5
                        },
                        {
                            "text":  "friend",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160416,
        "question":  "Name something a mom does to get both her baby and her husband to go to sleep.",
        "answers":  [
                        {
                            "text":  "sing/soft music",
                            "points":  41
                        },
                        {
                            "text":  "feed 'em/the nip",
                            "points":  24
                        },
                        {
                            "text":  "cuddle/rock 'em",
                            "points":  14
                        },
                        {
                            "text":  "turn off lights",
                            "points":  4
                        },
                        {
                            "text":  "yell/\"shut up\"",
                            "points":  3
                        },
                        {
                            "text":  "medicate 'em",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160417,
        "question":  "We asked 100 men... Mirror, mirror on the wall: My gut is as big as what kind of ball?",
        "answers":  [
                        {
                            "text":  "basketball",
                            "points":  40
                        },
                        {
                            "text":  "beach ball",
                            "points":  19
                        },
                        {
                            "text":  "medicine ball",
                            "points":  15
                        },
                        {
                            "text":  "soccer ball",
                            "points":  6
                        },
                        {
                            "text":  "volleyball",
                            "points":  5
                        },
                        {
                            "text":  "baseball",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160418,
        "question":  "God did not give you fingers to stick them in what?",
        "answers":  [
                        {
                            "text":  "your nose",
                            "points":  40
                        },
                        {
                            "text":  "a butt/your own",
                            "points":  15
                        },
                        {
                            "text":  "pies/food",
                            "points":  12
                        },
                        {
                            "text":  "ears",
                            "points":  9
                        },
                        {
                            "text":  "electrical socket",
                            "points":  9
                        },
                        {
                            "text":  "mouth/your lover's",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160419,
        "question":  "Name something nobody ever wants to see grandpa wearing.",
        "answers":  [
                        {
                            "text":  "thong/undies",
                            "points":  37
                        },
                        {
                            "text":  "speedo/trunks",
                            "points":  34
                        },
                        {
                            "text":  "gal garb",
                            "points":  11
                        },
                        {
                            "text":  "birthday suit",
                            "points":  3
                        },
                        {
                            "text":  "bike shorts",
                            "points":  2
                        },
                        {
                            "text":  "diaper",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160420,
        "question":  "If they sold a Steve Harvey costume for Halloween, what might it come with?",
        "answers":  [
                        {
                            "text":  "mustache",
                            "points":  35
                        },
                        {
                            "text":  "bald cap/'90s wig",
                            "points":  17
                        },
                        {
                            "text":  "suit/clothes",
                            "points":  12
                        },
                        {
                            "text":  "microphone",
                            "points":  12
                        },
                        {
                            "text":  "big lips/teeth",
                            "points":  10
                        },
                        {
                            "text":  "laugh track",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160421,
        "question":  "Fill in the blank: Some might say that Steve Harvey is as bald as a ______.",
        "answers":  [
                        {
                            "text":  "bald eagle",
                            "points":  34
                        },
                        {
                            "text":  "cue/billiard ball",
                            "points":  25
                        },
                        {
                            "text":  "baby/baby's butt",
                            "points":  15
                        },
                        {
                            "text":  "bowling ball",
                            "points":  9
                        },
                        {
                            "text":  "egg",
                            "points":  3
                        },
                        {
                            "text":  "melon",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160422,
        "question":  "Name something you might stick a pin into.",
        "answers":  [
                        {
                            "text":  "pincushion",
                            "points":  33
                        },
                        {
                            "text":  "balloon",
                            "points":  32
                        },
                        {
                            "text":  "clothing/hat",
                            "points":  9
                        },
                        {
                            "text":  "body/zit",
                            "points":  6
                        },
                        {
                            "text":  "voodoo doll",
                            "points":  5
                        },
                        {
                            "text":  "bulletin board",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160423,
        "question":  "Name something there's probably a lot of at the pirates' lost and found.",
        "answers":  [
                        {
                            "text":  "eyepatches",
                            "points":  33
                        },
                        {
                            "text":  "gold/booty",
                            "points":  26
                        },
                        {
                            "text":  "peg legs",
                            "points":  17
                        },
                        {
                            "text":  "pirate hats",
                            "points":  5
                        },
                        {
                            "text":  "swords",
                            "points":  4
                        },
                        {
                            "text":  "hooks",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160424,
        "question":  "Grandpa says, \"Grandma used to like to make love. Now she likes to make\" what?",
        "answers":  [
                        {
                            "text":  "cookies/food",
                            "points":  65
                        },
                        {
                            "text":  "quilts/clothes",
                            "points":  6
                        },
                        {
                            "text":  "war/a fuss",
                            "points":  6
                        },
                        {
                            "text":  "tea/coffee",
                            "points":  4
                        },
                        {
                            "text":  "zzz's/sleep",
                            "points":  4
                        },
                        {
                            "text":  "egg farts",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160425,
        "question":  "You've been dumped. What's the best revenge?",
        "answers":  [
                        {
                            "text":  "new hottie/ex's bff",
                            "points":  58
                        },
                        {
                            "text":  "forget loser/ignore",
                            "points":  9
                        },
                        {
                            "text":  "trash-talk/online",
                            "points":  7
                        },
                        {
                            "text":  "get fit/look good",
                            "points":  6
                        },
                        {
                            "text":  "success/win lotto",
                            "points":  5
                        },
                        {
                            "text":  "prank call/text ex",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160426,
        "question":  "Fill in the blank: There's a party in my ______.",
        "answers":  [
                        {
                            "text":  "pants",
                            "points":  45
                        },
                        {
                            "text":  "house/crib",
                            "points":  18
                        },
                        {
                            "text":  "mouth",
                            "points":  8
                        },
                        {
                            "text":  "backyard",
                            "points":  8
                        },
                        {
                            "text":  "head/mind",
                            "points":  6
                        },
                        {
                            "text":  "dorm room",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160427,
        "question":  "Name something you'd do if you woke up really, really ugly tomorrow.",
        "answers":  [
                        {
                            "text":  "hide/stay in bed",
                            "points":  40
                        },
                        {
                            "text":  "cry",
                            "points":  23
                        },
                        {
                            "text":  "pile on makeup",
                            "points":  8
                        },
                        {
                            "text":  "plastic surgery",
                            "points":  7
                        },
                        {
                            "text":  "not care/keep going",
                            "points":  5
                        },
                        {
                            "text":  "wide brim hat",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160428,
        "question":  "We asked 100 women... If it were up to your man -- and it isn't -- what would you wear every day?",
        "answers":  [
                        {
                            "text":  "lingerie/thong",
                            "points":  32
                        },
                        {
                            "text":  "bikini",
                            "points":  14
                        },
                        {
                            "text":  "dress/skirt",
                            "points":  13
                        },
                        {
                            "text":  "hooker heels/boots",
                            "points":  11
                        },
                        {
                            "text":  "pajamas/onesie",
                            "points":  10
                        },
                        {
                            "text":  "sweats",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  160429,
        "question":  "If airlines had all-nude flights, what might a shy guy hold on his lap during the flight?",
        "answers":  [
                        {
                            "text":  "laptop/tablet",
                            "points":  31
                        },
                        {
                            "text":  "pillow/blanket",
                            "points":  24
                        },
                        {
                            "text":  "mag/book",
                            "points":  20
                        },
                        {
                            "text":  "carry-on/briefcase",
                            "points":  7
                        },
                        {
                            "text":  "tray/table",
                            "points":  3
                        },
                        {
                            "text":  "coat/clothes",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160430,
        "question":  "Name a reason a dog would prefer to sleep in his dog bed instead of his master's bed.",
        "answers":  [
                        {
                            "text":  "master snores",
                            "points":  29
                        },
                        {
                            "text":  "roomier",
                            "points":  27
                        },
                        {
                            "text":  "master reeks/farts",
                            "points":  13
                        },
                        {
                            "text":  "softer/comfy",
                            "points":  8
                        },
                        {
                            "text":  "cooler/warmer",
                            "points":  8
                        },
                        {
                            "text":  "cat's w/ master",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160431,
        "question":  "Name something that would land on a bald guy's head that might slide right off.",
        "answers":  [
                        {
                            "text":  "bird poo",
                            "points":  29
                        },
                        {
                            "text":  "fried egg/food",
                            "points":  19
                        },
                        {
                            "text":  "water/ice",
                            "points":  18
                        },
                        {
                            "text":  "a bird",
                            "points":  10
                        },
                        {
                            "text":  "hair/toupee",
                            "points":  6
                        },
                        {
                            "text":  "a leaf",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  160432,
        "question":  "We asked 100 women... Name a place that all men will eventually go to.",
        "answers":  [
                        {
                            "text":  "hell/the grave",
                            "points":  28
                        },
                        {
                            "text":  "bar/nightclub",
                            "points":  23
                        },
                        {
                            "text":  "strip joint",
                            "points":  21
                        },
                        {
                            "text":  "home/bed",
                            "points":  6
                        },
                        {
                            "text":  "bathroom/2-hour dump",
                            "points":  5
                        },
                        {
                            "text":  "store/jewelry shop",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160433,
        "question":  "Fill in the blank: I had a nightmare where I lost all of my what?",
        "answers":  [
                        {
                            "text":  "money",
                            "points":  26
                        },
                        {
                            "text":  "hair",
                            "points":  21
                        },
                        {
                            "text":  "teeth",
                            "points":  18
                        },
                        {
                            "text":  "marbles/mind",
                            "points":  8
                        },
                        {
                            "text":  "clothes",
                            "points":  8
                        },
                        {
                            "text":  "family/friends",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  160434,
        "question":  "Name something a bald guy might not want to find on top of his head.",
        "answers":  [
                        {
                            "text":  "bird turd/poo",
                            "points":  46
                        },
                        {
                            "text":  "critter/leech",
                            "points":  21
                        },
                        {
                            "text":  "hair/toupee",
                            "points":  8
                        },
                        {
                            "text":  "sunburn",
                            "points":  6
                        },
                        {
                            "text":  "food/ice cream",
                            "points":  3
                        },
                        {
                            "text":  "blood/cut",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160435,
        "question":  "The cowboy was allergic to horses. So he had to ride through the Wild West on a what?",
        "answers":  [
                        {
                            "text":  "donkey/mule",
                            "points":  37
                        },
                        {
                            "text":  "cow/bull",
                            "points":  29
                        },
                        {
                            "text":  "camel",
                            "points":  11
                        },
                        {
                            "text":  "motorcycle/moped",
                            "points":  4
                        },
                        {
                            "text":  "bicycle",
                            "points":  3
                        },
                        {
                            "text":  "ostrich",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160436,
        "question":  "At a wedding, the bride holds a bouquet. What might the groom be holding?",
        "answers":  [
                        {
                            "text":  "the ring",
                            "points":  34
                        },
                        {
                            "text":  "hands/the bride",
                            "points":  21
                        },
                        {
                            "text":  "a cocktail/flask",
                            "points":  13
                        },
                        {
                            "text":  "his breath",
                            "points":  8
                        },
                        {
                            "text":  "the garter",
                            "points":  8
                        },
                        {
                            "text":  "his wallet/money",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160437,
        "question":  "Name something Santa Claus might get rid of when he retires.",
        "answers":  [
                        {
                            "text":  "the sleigh",
                            "points":  33
                        },
                        {
                            "text":  "his suit",
                            "points":  25
                        },
                        {
                            "text":  "the elves",
                            "points":  10
                        },
                        {
                            "text":  "the reindeer",
                            "points":  10
                        },
                        {
                            "text":  "mrs. claus",
                            "points":  5
                        },
                        {
                            "text":  "his beard",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160438,
        "question":  "Name something you lie about to your annoying in-laws so they don't stay at your house.",
        "answers":  [
                        {
                            "text":  "no room at the inn",
                            "points":  33
                        },
                        {
                            "text":  "sick/plague",
                            "points":  24
                        },
                        {
                            "text":  "too busy/work",
                            "points":  15
                        },
                        {
                            "text":  "critters/bed bugs",
                            "points":  6
                        },
                        {
                            "text":  "no heat/power",
                            "points":  5
                        },
                        {
                            "text":  "filthy/stinks",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160439,
        "question":  "Fill in the blank: The mortician freaked out when the corpse he was working on ______ed.",
        "answers":  [
                        {
                            "text":  "moved/sat up",
                            "points":  32
                        },
                        {
                            "text":  "awoke/blinked eyes",
                            "points":  29
                        },
                        {
                            "text":  "farted",
                            "points":  12
                        },
                        {
                            "text":  "laughed/smiled",
                            "points":  5
                        },
                        {
                            "text":  "spoke/asked the time",
                            "points":  5
                        },
                        {
                            "text":  "breathed/sighed",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160440,
        "question":  "We asked 100 women... Name a musical instrument your man sounds like when you're making love.",
        "answers":  [
                        {
                            "text":  "tuba",
                            "points":  25
                        },
                        {
                            "text":  "drums",
                            "points":  19
                        },
                        {
                            "text":  "saxophone",
                            "points":  19
                        },
                        {
                            "text":  "violin",
                            "points":  14
                        },
                        {
                            "text":  "flute/recorder",
                            "points":  5
                        },
                        {
                            "text":  "trumpet",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160441,
        "question":  "It's bad if a woman discovers a nude photo on her man's phone. It's worse if it's a photo of who?",
        "answers":  [
                        {
                            "text":  "her sister",
                            "points":  23
                        },
                        {
                            "text":  "a man/her dad",
                            "points":  16
                        },
                        {
                            "text":  "her best friend",
                            "points":  14
                        },
                        {
                            "text":  "his ex",
                            "points":  12
                        },
                        {
                            "text":  "her mom",
                            "points":  11
                        },
                        {
                            "text":  "his momma",
                            "points":  11
                        }
                    ]
    },
    {
        "id":  160442,
        "question":  "We asked 100 women... Name something you've already picked out to wear to your funeral so when your body is cold, you still look hot.",
        "answers":  [
                        {
                            "text":  "sexy dress",
                            "points":  61
                        },
                        {
                            "text":  "coat/faux fur",
                            "points":  6
                        },
                        {
                            "text":  "jewelry",
                            "points":  6
                        },
                        {
                            "text":  "makeup",
                            "points":  5
                        },
                        {
                            "text":  "sweater/cardigan",
                            "points":  5
                        },
                        {
                            "text":  "skinny jeans",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160443,
        "question":  "Name something about a man that might remind you of Kermit the Frog.",
        "answers":  [
                        {
                            "text":  "voice/croaks",
                            "points":  60
                        },
                        {
                            "text":  "long skinny legs",
                            "points":  7
                        },
                        {
                            "text":  "green skin/clothes",
                            "points":  6
                        },
                        {
                            "text":  "tongue/lipless mouth",
                            "points":  6
                        },
                        {
                            "text":  "big eyes",
                            "points":  4
                        },
                        {
                            "text":  "always hopping",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160444,
        "question":  "No man likes to hear a woman say, \"We need to ______.\"",
        "answers":  [
                        {
                            "text":  "talk",
                            "points":  45
                        },
                        {
                            "text":  "break up/divorce",
                            "points":  21
                        },
                        {
                            "text":  "go shopping",
                            "points":  6
                        },
                        {
                            "text":  "clean",
                            "points":  6
                        },
                        {
                            "text":  "get/save money",
                            "points":  5
                        },
                        {
                            "text":  "get married",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160445,
        "question":  "Tell me a job where all your customers take off their clothes.",
        "answers":  [
                        {
                            "text":  "doctor",
                            "points":  36
                        },
                        {
                            "text":  "spa/massage",
                            "points":  26
                        },
                        {
                            "text":  "nudist camp",
                            "points":  9
                        },
                        {
                            "text":  "tanning salon",
                            "points":  6
                        },
                        {
                            "text":  "clothes store",
                            "points":  5
                        },
                        {
                            "text":  "tailor/dresser",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160446,
        "question":  "Name a place a wife tells her husband he can go just to get rid of him for a couple hours.",
        "answers":  [
                        {
                            "text":  "bar/nightclub",
                            "points":  34
                        },
                        {
                            "text":  "sports venue/bowl'g",
                            "points":  20
                        },
                        {
                            "text":  "store/home depot",
                            "points":  12
                        },
                        {
                            "text":  "straight to hell",
                            "points":  9
                        },
                        {
                            "text":  "man cave/garage",
                            "points":  7
                        },
                        {
                            "text":  "friend's house",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160447,
        "question":  "Name a way a woman is like a margarita.",
        "answers":  [
                        {
                            "text":  "salty",
                            "points":  32
                        },
                        {
                            "text":  "sweet",
                            "points":  24
                        },
                        {
                            "text":  "strong/intoxicat'g",
                            "points":  11
                        },
                        {
                            "text":  "cold/icy",
                            "points":  8
                        },
                        {
                            "text":  "bitter/sour",
                            "points":  7
                        },
                        {
                            "text":  "2 or more = trouble",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160448,
        "question":  "Name something only an idiot would do in his car if a cop is following him.",
        "answers":  [
                        {
                            "text":  "speed/race the cop",
                            "points":  30
                        },
                        {
                            "text":  "drink/\"cheers!\"",
                            "points":  21
                        },
                        {
                            "text":  "phone call/text",
                            "points":  14
                        },
                        {
                            "text":  "light a doob/drugs",
                            "points":  12
                        },
                        {
                            "text":  "litter",
                            "points":  5
                        },
                        {
                            "text":  "run light/stop sign",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160449,
        "question":  "Name someone at your family reunion that you hope doesn't kiss you on the lips.",
        "answers":  [
                        {
                            "text":  "pervy uncle",
                            "points":  28
                        },
                        {
                            "text":  "granny",
                            "points":  15
                        },
                        {
                            "text":  "my kissin' cousin",
                            "points":  15
                        },
                        {
                            "text":  "my aunt",
                            "points":  12
                        },
                        {
                            "text":  "gramps",
                            "points":  11
                        },
                        {
                            "text":  "the dog",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160450,
        "question":  "To clear his conscience, what might a man confess to his dog because he knows it won't tell anyone?",
        "answers":  [
                        {
                            "text":  "i cheated/flirted",
                            "points":  69
                        },
                        {
                            "text":  "i luv u/i hate wife",
                            "points":  4
                        },
                        {
                            "text":  "i'm sad :(",
                            "points":  3
                        },
                        {
                            "text":  "i just farted",
                            "points":  3
                        },
                        {
                            "text":  "have poo/pee issues",
                            "points":  3
                        },
                        {
                            "text":  "i'm a serial killer",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160451,
        "question":  "Name a place that mom hides when she needs to get away from the kids.",
        "answers":  [
                        {
                            "text":  "bathroom/tub",
                            "points":  52
                        },
                        {
                            "text":  "bedroom/bed",
                            "points":  12
                        },
                        {
                            "text":  "closet",
                            "points":  7
                        },
                        {
                            "text":  "the bar",
                            "points":  5
                        },
                        {
                            "text":  "work/office",
                            "points":  5
                        },
                        {
                            "text":  "mall/store",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160452,
        "question":  "Name a place the cat hid the dog's bone.",
        "answers":  [
                        {
                            "text":  "litter box",
                            "points":  40
                        },
                        {
                            "text":  "sofa/chair/under",
                            "points":  22
                        },
                        {
                            "text":  "bed/under it",
                            "points":  12
                        },
                        {
                            "text":  "cat house",
                            "points":  4
                        },
                        {
                            "text":  "in a tree",
                            "points":  4
                        },
                        {
                            "text":  "high shelf/mantel",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160453,
        "question":  "Some women get to the age where they'd like to trade their man in for what?",
        "answers":  [
                        {
                            "text":  "young, rich stud",
                            "points":  33
                        },
                        {
                            "text":  "money/a penny",
                            "points":  16
                        },
                        {
                            "text":  "a goldfish/pet",
                            "points":  14
                        },
                        {
                            "text":  "a car",
                            "points":  11
                        },
                        {
                            "text":  "peace & quiet",
                            "points":  7
                        },
                        {
                            "text":  "a butler/maid",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160454,
        "question":  "We asked 100 women... I'd never want to be a man because most of them are what?",
        "answers":  [
                        {
                            "text":  "evil d-bags",
                            "points":  31
                        },
                        {
                            "text":  "room-temp i.q.",
                            "points":  18
                        },
                        {
                            "text":  "cheating man ho's",
                            "points":  17
                        },
                        {
                            "text":  "hairy",
                            "points":  7
                        },
                        {
                            "text":  "whiny babies",
                            "points":  7
                        },
                        {
                            "text":  "gross/smelly",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160455,
        "question":  "Right after a vasectomy, name a food a man would cringe to see his wife cutting with a knife.",
        "answers":  [
                        {
                            "text":  "hot dog",
                            "points":  30
                        },
                        {
                            "text":  "cucumber/pickle",
                            "points":  23
                        },
                        {
                            "text":  "sausage/kielbasa",
                            "points":  18
                        },
                        {
                            "text":  "banana",
                            "points":  5
                        },
                        {
                            "text":  "carrot",
                            "points":  5
                        },
                        {
                            "text":  "meatballs",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160456,
        "question":  "Name a kind of ball that would be very hard to play tennis with.",
        "answers":  [
                        {
                            "text":  "basketball",
                            "points":  27
                        },
                        {
                            "text":  "football",
                            "points":  19
                        },
                        {
                            "text":  "baseball",
                            "points":  16
                        },
                        {
                            "text":  "bowling ball",
                            "points":  16
                        },
                        {
                            "text":  "soccer ball",
                            "points":  4
                        },
                        {
                            "text":  "cannonball",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160457,
        "question":  "We asked 100 married women... Name something your husband has that you're tired of looking at.",
        "answers":  [
                        {
                            "text":  "video games",
                            "points":  21
                        },
                        {
                            "text":  "tacky clothes/shoes",
                            "points":  21
                        },
                        {
                            "text":  "massive gut",
                            "points":  19
                        },
                        {
                            "text":  "tools everywhere",
                            "points":  14
                        },
                        {
                            "text":  "scraggly beard",
                            "points":  5
                        },
                        {
                            "text":  "golf clubs",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160458,
        "question":  "Name something of yours you'd never want to see someone stick their fingers in.",
        "answers":  [
                        {
                            "text":  "my food/drink",
                            "points":  37
                        },
                        {
                            "text":  "my puckered starfish",
                            "points":  15
                        },
                        {
                            "text":  "my nose",
                            "points":  15
                        },
                        {
                            "text":  "my mouth",
                            "points":  6
                        },
                        {
                            "text":  "my ear",
                            "points":  6
                        },
                        {
                            "text":  "my eye",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160459,
        "question":  "Name something a dumb guy might super-glue himself to so he doesn't fall off of it.",
        "answers":  [
                        {
                            "text":  "chair/stool/sofa",
                            "points":  36
                        },
                        {
                            "text":  "ladder",
                            "points":  21
                        },
                        {
                            "text":  "bicycle",
                            "points":  10
                        },
                        {
                            "text":  "toilet seat",
                            "points":  7
                        },
                        {
                            "text":  "saddle/horse/bull",
                            "points":  6
                        },
                        {
                            "text":  "bed",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160460,
        "question":  "Name one specific thing a man should make sure he gets from his girlfriend's apartment before he tells her it's over.",
        "answers":  [
                        {
                            "text":  "clothes/her panties",
                            "points":  31
                        },
                        {
                            "text":  "his phone",
                            "points":  17
                        },
                        {
                            "text":  "keys",
                            "points":  13
                        },
                        {
                            "text":  "wallet/money",
                            "points":  10
                        },
                        {
                            "text":  "video game/console",
                            "points":  7
                        },
                        {
                            "text":  "tv/her flat screen",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  160461,
        "question":  "Name something a hitchhiker would hate to see in the backseat of a truck that stops to pick him up.",
        "answers":  [
                        {
                            "text":  "gun",
                            "points":  26
                        },
                        {
                            "text":  "animal/pissy pooch",
                            "points":  23
                        },
                        {
                            "text":  "severed head/body",
                            "points":  18
                        },
                        {
                            "text":  "an axe",
                            "points":  11
                        },
                        {
                            "text":  "knife/machete",
                            "points":  3
                        },
                        {
                            "text":  "blood",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160462,
        "question":  "We asked 100 women... Fill in the blank: I'd love to be a ______ for a day.",
        "answers":  [
                        {
                            "text":  "queen/princess",
                            "points":  31
                        },
                        {
                            "text":  "rich/buffett",
                            "points":  28
                        },
                        {
                            "text":  "movie star/actress",
                            "points":  10
                        },
                        {
                            "text":  "man",
                            "points":  8
                        },
                        {
                            "text":  "model",
                            "points":  3
                        },
                        {
                            "text":  "cat",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160463,
        "question":  "We asked 100 men... What do you think American men are better at than men in other countries?",
        "answers":  [
                        {
                            "text":  "sports/watch'g them",
                            "points":  27
                        },
                        {
                            "text":  "eating/obesity",
                            "points":  18
                        },
                        {
                            "text":  "drankin'",
                            "points":  15
                        },
                        {
                            "text":  "working/making $",
                            "points":  14
                        },
                        {
                            "text":  "fighting",
                            "points":  5
                        },
                        {
                            "text":  "whining/excuses",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160464,
        "question":  "Name a famous woman who might donate her bottom to science when she dies.",
        "answers":  [
                        {
                            "text":  "kim kardashian",
                            "points":  52
                        },
                        {
                            "text":  "jennifer lopez",
                            "points":  14
                        },
                        {
                            "text":  "nicki minaj",
                            "points":  6
                        },
                        {
                            "text":  "dolly parton",
                            "points":  4
                        },
                        {
                            "text":  "cher",
                            "points":  3
                        },
                        {
                            "text":  "stormy daniels",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160465,
        "question":  "Name a reason you regret bending over to pick up that penny.",
        "answers":  [
                        {
                            "text":  "hurt my back",
                            "points":  30
                        },
                        {
                            "text":  "split my pants",
                            "points":  18
                        },
                        {
                            "text":  "my crack shows",
                            "points":  11
                        },
                        {
                            "text":  "can't get up/fell",
                            "points":  11
                        },
                        {
                            "text":  "fart/call of doody",
                            "points":  6
                        },
                        {
                            "text":  "dirty/it's in blood",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  160466,
        "question":  "Name something a hospital nurse might be tempted to throw at a rude patient.",
        "answers":  [
                        {
                            "text":  "bedpan/stale pee",
                            "points":  59
                        },
                        {
                            "text":  "pillow",
                            "points":  7
                        },
                        {
                            "text":  "towel/dirty rag",
                            "points":  5
                        },
                        {
                            "text":  "water/pitcher",
                            "points":  4
                        },
                        {
                            "text":  "used needle",
                            "points":  3
                        },
                        {
                            "text":  "clipboard/chart",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160467,
        "question":  "Name a word you wish people would go back to using instead of \"booty.\"",
        "answers":  [
                        {
                            "text":  "butt/buttocks",
                            "points":  44
                        },
                        {
                            "text":  "arse",
                            "points":  14
                        },
                        {
                            "text":  "tush/tushy",
                            "points":  7
                        },
                        {
                            "text":  "behind",
                            "points":  6
                        },
                        {
                            "text":  "derriere",
                            "points":  6
                        },
                        {
                            "text":  "rump",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160468,
        "question":  "Name someone you'd be surprised to find out doesn't ever wear underwear.",
        "answers":  [
                        {
                            "text":  "my parents",
                            "points":  26
                        },
                        {
                            "text":  "my boss",
                            "points":  14
                        },
                        {
                            "text":  "politician",
                            "points":  13
                        },
                        {
                            "text":  "granny & gramps",
                            "points":  12
                        },
                        {
                            "text":  "clergy/sister edna",
                            "points":  10
                        },
                        {
                            "text":  "my doctor",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  160469,
        "question":  "Name something you wish you could literally grow a pair of in your garden.",
        "answers":  [
                        {
                            "text":  "fruits/veggies",
                            "points":  24
                        },
                        {
                            "text":  "money trees/dollars",
                            "points":  23
                        },
                        {
                            "text":  "shoes/red bottoms",
                            "points":  17
                        },
                        {
                            "text":  "boobs to enjoy",
                            "points":  8
                        },
                        {
                            "text":  "pot plants",
                            "points":  4
                        },
                        {
                            "text":  "testes!",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160470,
        "question":  "We asked 100 single men... You can tell how high maintenance a woman is by checking out her what?",
        "answers":  [
                        {
                            "text":  "duds/prada heels",
                            "points":  26
                        },
                        {
                            "text":  "hair",
                            "points":  16
                        },
                        {
                            "text":  "bling",
                            "points":  13
                        },
                        {
                            "text":  "nails",
                            "points":  10
                        },
                        {
                            "text":  "body",
                            "points":  7
                        },
                        {
                            "text":  "makeup",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  160471,
        "question":  "We asked 100 married women... Your man says his zipper holds back a lion. What animal is it really holding back?",
        "answers":  [
                        {
                            "text":  "kitten/cat",
                            "points":  24
                        },
                        {
                            "text":  "spitting cobra/snake",
                            "points":  15
                        },
                        {
                            "text":  "mouse/rat",
                            "points":  13
                        },
                        {
                            "text":  "inchworm/worm",
                            "points":  12
                        },
                        {
                            "text":  "dog",
                            "points":  10
                        },
                        {
                            "text":  "horse",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160472,
        "question":  "We asked 100 women... Fill in the blank: All men are dogs that need to be ______ed.",
        "answers":  [
                        {
                            "text":  "trained/tamed",
                            "points":  27
                        },
                        {
                            "text":  "neutered",
                            "points":  26
                        },
                        {
                            "text":  "loved",
                            "points":  8
                        },
                        {
                            "text":  "leashed/collared",
                            "points":  6
                        },
                        {
                            "text":  "spanked",
                            "points":  6
                        },
                        {
                            "text":  "muzzled",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160473,
        "question":  "Fill in the blank: You really have to love someone to kiss them while they're eating a ______ sandwich.",
        "answers":  [
                        {
                            "text":  "fish/sardine",
                            "points":  48
                        },
                        {
                            "text":  "onion",
                            "points":  11
                        },
                        {
                            "text":  "liver/liverwurst",
                            "points":  6
                        },
                        {
                            "text":  "bologna",
                            "points":  4
                        },
                        {
                            "text":  "egg salad/egg",
                            "points":  4
                        },
                        {
                            "text":  "cheese/limburger",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160474,
        "question":  "You're going to hell. You can bring one thing with you. What is it?",
        "answers":  [
                        {
                            "text":  "ac/fan",
                            "points":  23
                        },
                        {
                            "text":  "ice/water",
                            "points":  23
                        },
                        {
                            "text":  "bible/kindle",
                            "points":  18
                        },
                        {
                            "text":  "fire extinguisher",
                            "points":  5
                        },
                        {
                            "text":  "my dog/pet",
                            "points":  4
                        },
                        {
                            "text":  "my phone",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160475,
        "question":  "Name something about a gorgeous woman that a man might find annoying.",
        "answers":  [
                        {
                            "text":  "personality/vain",
                            "points":  23
                        },
                        {
                            "text":  "olive oyl voice",
                            "points":  21
                        },
                        {
                            "text":  "endless chatter",
                            "points":  9
                        },
                        {
                            "text":  "neighing laugh",
                            "points":  8
                        },
                        {
                            "text":  "too hot/gets ogled",
                            "points":  8
                        },
                        {
                            "text":  "brain/lack of",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  160476,
        "question":  "We asked 100 married men... Be honest: You've fantasized about using your wife's what?",
        "answers":  [
                        {
                            "text":  "makeup/mascara",
                            "points":  19
                        },
                        {
                            "text":  "fishnet/clothes",
                            "points":  14
                        },
                        {
                            "text":  "razor",
                            "points":  12
                        },
                        {
                            "text":  "money/credit card",
                            "points":  12
                        },
                        {
                            "text":  "hair dryer",
                            "points":  10
                        },
                        {
                            "text":  "phone",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  160477,
        "question":  "Name something that can be a big problem if you choose the wrong one.",
        "answers":  [
                        {
                            "text":  "spouse/mate",
                            "points":  54
                        },
                        {
                            "text":  "car",
                            "points":  5
                        },
                        {
                            "text":  "medication/pill",
                            "points":  4
                        },
                        {
                            "text":  "pet",
                            "points":  4
                        },
                        {
                            "text":  "bra",
                            "points":  3
                        },
                        {
                            "text":  "door",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160478,
        "question":  "Name something that might be unstable.",
        "answers":  [
                        {
                            "text":  "person",
                            "points":  40
                        },
                        {
                            "text":  "chair/furniture",
                            "points":  11
                        },
                        {
                            "text":  "relationship",
                            "points":  7
                        },
                        {
                            "text":  "economy/financial mkt.",
                            "points":  5
                        },
                        {
                            "text":  "tnt/explosives",
                            "points":  5
                        },
                        {
                            "text":  "land/faultline",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160479,
        "question":  "We asked 100 men... Name an occupation that for you, would be living the dream.",
        "answers":  [
                        {
                            "text":  "athlete",
                            "points":  22
                        },
                        {
                            "text":  "gynecologist/doc",
                            "points":  15
                        },
                        {
                            "text":  "actor/in porn",
                            "points":  14
                        },
                        {
                            "text":  "photographer",
                            "points":  10
                        },
                        {
                            "text":  "singer/musician",
                            "points":  6
                        },
                        {
                            "text":  "brew master/taster",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160480,
        "question":  "Name something Mrs. Pillsbury Doughboy puts on her husband for a night of romance.",
        "answers":  [
                        {
                            "text":  "butter",
                            "points":  42
                        },
                        {
                            "text":  "frosting/drizzle",
                            "points":  9
                        },
                        {
                            "text":  "oil",
                            "points":  7
                        },
                        {
                            "text":  "flour",
                            "points":  5
                        },
                        {
                            "text":  "sugar",
                            "points":  5
                        },
                        {
                            "text":  "chocolate/sauce",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160481,
        "question":  "Name a phrase that starts with \"the big.\"",
        "answers":  [
                        {
                            "text":  "the big bang",
                            "points":  31
                        },
                        {
                            "text":  "the big apple",
                            "points":  11
                        },
                        {
                            "text":  "the big one",
                            "points":  10
                        },
                        {
                            "text":  "the big lebowski",
                            "points":  9
                        },
                        {
                            "text":  "the big kahuna",
                            "points":  5
                        },
                        {
                            "text":  "the big easy",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160482,
        "question":  "We asked 100 women... Fill in the blank: I'd love to make my guy wear one of those giant dog cones around his neck so he couldn't what?",
        "answers":  [
                        {
                            "text":  "ogle floozies",
                            "points":  23
                        },
                        {
                            "text":  "cheat/stray",
                            "points":  16
                        },
                        {
                            "text":  "overeat",
                            "points":  15
                        },
                        {
                            "text":  "pick his nose",
                            "points":  6
                        },
                        {
                            "text":  "drink/slurp",
                            "points":  6
                        },
                        {
                            "text":  "kiss me/get near me",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160483,
        "question":  "Name something a wife might put in her cheating husband's underwear on game day.",
        "answers":  [
                        {
                            "text":  "itching powder",
                            "points":  30
                        },
                        {
                            "text":  "hot pepper/sauce",
                            "points":  19
                        },
                        {
                            "text":  "bengay/icy hot",
                            "points":  8
                        },
                        {
                            "text":  "fire ants",
                            "points":  5
                        },
                        {
                            "text":  "crabs",
                            "points":  5
                        },
                        {
                            "text":  "a condom",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160484,
        "question":  "We asked 100 women... I would never date a man who was wearing a what?",
        "answers":  [
                        {
                            "text":  "toupee",
                            "points":  24
                        },
                        {
                            "text":  "cuter skirt/dress",
                            "points":  22
                        },
                        {
                            "text":  "speedo",
                            "points":  9
                        },
                        {
                            "text":  "thong",
                            "points":  6
                        },
                        {
                            "text":  "pair of crocs",
                            "points":  5
                        },
                        {
                            "text":  "murse/purse",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160485,
        "question":  "We asked 100 women... Your man just cheated on you. You get to destroy one thing of his. What do you choose?",
        "answers":  [
                        {
                            "text":  "'57 chevy truck",
                            "points":  29
                        },
                        {
                            "text":  "\"baloney pony\"",
                            "points":  14
                        },
                        {
                            "text":  "his phone",
                            "points":  8
                        },
                        {
                            "text":  "his reputation",
                            "points":  7
                        },
                        {
                            "text":  "his finances",
                            "points":  5
                        },
                        {
                            "text":  "his life/marriage",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160486,
        "question":  "Name an occupation whose people could use some sensitivity training.",
        "answers":  [
                        {
                            "text":  "police",
                            "points":  27
                        },
                        {
                            "text":  "doctor",
                            "points":  16
                        },
                        {
                            "text":  "politician",
                            "points":  9
                        },
                        {
                            "text":  "sales/retail",
                            "points":  8
                        },
                        {
                            "text":  "cab driver",
                            "points":  4
                        },
                        {
                            "text":  "lawyer",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160487,
        "question":  "Name a place grandma goes when she's had enough of grandpa.",
        "answers":  [
                        {
                            "text":  "store/goodwill",
                            "points":  19
                        },
                        {
                            "text":  "bedroom",
                            "points":  15
                        },
                        {
                            "text":  "bingo",
                            "points":  11
                        },
                        {
                            "text":  "kitchen",
                            "points":  10
                        },
                        {
                            "text":  "kid's home",
                            "points":  7
                        },
                        {
                            "text":  "casino",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160488,
        "question":  "Name something no man looks good wearing but they wear it anyway.",
        "answers":  [
                        {
                            "text":  "speedo",
                            "points":  19
                        },
                        {
                            "text":  "toupee",
                            "points":  17
                        },
                        {
                            "text":  "hat/beret",
                            "points":  10
                        },
                        {
                            "text":  "baggy pants/sweats",
                            "points":  6
                        },
                        {
                            "text":  "tie/bow tie",
                            "points":  6
                        },
                        {
                            "text":  "thong/undies",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  160489,
        "question":  "Name a singer whose music is probably responsible for the birth of many babies.",
        "answers":  [
                        {
                            "text":  "barry white",
                            "points":  19
                        },
                        {
                            "text":  "marvin gaye",
                            "points":  17
                        },
                        {
                            "text":  "elvis presley",
                            "points":  8
                        },
                        {
                            "text":  "barry manilow",
                            "points":  7
                        },
                        {
                            "text":  "frank sinatra",
                            "points":  6
                        },
                        {
                            "text":  "neil diamond",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160490,
        "question":  "In hell, name a place you might be forced to go to every day.",
        "answers":  [
                        {
                            "text":  "fire/oven",
                            "points":  18
                        },
                        {
                            "text":  "work/hr meeting",
                            "points":  14
                        },
                        {
                            "text":  "dentist/doctor",
                            "points":  10
                        },
                        {
                            "text":  "church",
                            "points":  7
                        },
                        {
                            "text":  "store/mall",
                            "points":  6
                        },
                        {
                            "text":  "dungeon/jail",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  160491,
        "question":  "Name something that might be big and red.",
        "answers":  [
                        {
                            "text":  "fire truck/car",
                            "points":  17
                        },
                        {
                            "text":  "apple",
                            "points":  12
                        },
                        {
                            "text":  "nose/rudolph's",
                            "points":  11
                        },
                        {
                            "text":  "ball",
                            "points":  7
                        },
                        {
                            "text":  "balloon/hot air",
                            "points":  7
                        },
                        {
                            "text":  "clifford the dog",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  160492,
        "question":  "Name a comedian who isn't just funny, he's also a stud.",
        "answers":  [
                        {
                            "text":  "steve harvey",
                            "points":  16
                        },
                        {
                            "text":  "kevin hart",
                            "points":  14
                        },
                        {
                            "text":  "jimmy fallon",
                            "points":  11
                        },
                        {
                            "text":  "dane cook",
                            "points":  7
                        },
                        {
                            "text":  "jamie foxx",
                            "points":  5
                        },
                        {
                            "text":  "jerry seinfeld",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160493,
        "question":  "Tim's social life changed for the better after he did what?",
        "answers":  [
                        {
                            "text":  "diet/exercise",
                            "points":  16
                        },
                        {
                            "text":  "showered",
                            "points":  12
                        },
                        {
                            "text":  "got divorced",
                            "points":  10
                        },
                        {
                            "text":  "new job/quit job",
                            "points":  8
                        },
                        {
                            "text":  "got married",
                            "points":  6
                        },
                        {
                            "text":  "dated/\"swiped right\"",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160494,
        "question":  "A sarcastic guy might say his wife has all the grace of what animal?",
        "answers":  [
                        {
                            "text":  "elephant",
                            "points":  24
                        },
                        {
                            "text":  "donkey/mule",
                            "points":  8
                        },
                        {
                            "text":  "hippo",
                            "points":  7
                        },
                        {
                            "text":  "bull",
                            "points":  5
                        },
                        {
                            "text":  "monkey/ape",
                            "points":  4
                        },
                        {
                            "text":  "giraffe",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160495,
        "question":  "We asked 100 women... Fill in the blank: The rules are simple. If a man cheats on me, I ______ him.",
        "answers":  [
                        {
                            "text":  "divorce/leave",
                            "points":  76
                        },
                        {
                            "text":  "yell at",
                            "points":  7
                        },
                        {
                            "text":  "cheat on",
                            "points":  7
                        },
                        {
                            "text":  "kill",
                            "points":  6
                        },
                        {
                            "text":  "slug",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160496,
        "question":  "If you could fly like a bird, name something you might poop on.",
        "answers":  [
                        {
                            "text":  "people/politician",
                            "points":  72
                        },
                        {
                            "text":  "car/truck",
                            "points":  20
                        },
                        {
                            "text":  "building",
                            "points":  3
                        },
                        {
                            "text":  "people's food/picnic",
                            "points":  3
                        },
                        {
                            "text":  "statue",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160497,
        "question":  "The world's cheapest guy doesn't buy flowers on Valentine's Day. Instead, he gets them from where?",
        "answers":  [
                        {
                            "text":  "funeral/cemetery",
                            "points":  42
                        },
                        {
                            "text":  "a yard/his date's",
                            "points":  42
                        },
                        {
                            "text":  "field/roadside",
                            "points":  10
                        },
                        {
                            "text":  "park",
                            "points":  3
                        },
                        {
                            "text":  "trash/dumpster",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160498,
        "question":  "I saw the most amazing magician -- he could blow bubbles out of his what?",
        "answers":  [
                        {
                            "text":  "turd cutter",
                            "points":  41
                        },
                        {
                            "text":  "ears",
                            "points":  31
                        },
                        {
                            "text":  "nose",
                            "points":  23
                        },
                        {
                            "text":  "mouth",
                            "points":  2
                        },
                        {
                            "text":  "hat",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160499,
        "question":  "We asked 100 women... If you were Snow White, which one of the seven dwarfs would annoy you the most?",
        "answers":  [
                        {
                            "text":  "grumpy",
                            "points":  40
                        },
                        {
                            "text":  "dopey",
                            "points":  21
                        },
                        {
                            "text":  "sneezy",
                            "points":  18
                        },
                        {
                            "text":  "sleepy",
                            "points":  14
                        },
                        {
                            "text":  "happy",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  160500,
        "question":  "A billionaire might say, \"I count my blessings every time I look at my\" what?",
        "answers":  [
                        {
                            "text":  "$$$/portfolio",
                            "points":  77
                        },
                        {
                            "text":  "wife/family",
                            "points":  10
                        },
                        {
                            "text":  "mansion/estate",
                            "points":  5
                        },
                        {
                            "text":  "cars/6 bentleys",
                            "points":  4
                        },
                        {
                            "text":  "reflection/mirror",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160501,
        "question":  "When you say someone has a rat face, what part of it reminds you of a rat?",
        "answers":  [
                        {
                            "text":  "twitching nose",
                            "points":  70
                        },
                        {
                            "text":  "beady eyes",
                            "points":  15
                        },
                        {
                            "text":  "buck teeth/mouth",
                            "points":  9
                        },
                        {
                            "text":  "the whiskers",
                            "points":  2
                        },
                        {
                            "text":  "jaw/chin",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160502,
        "question":  "Name a specific reason you might be at a cemetery.",
        "answers":  [
                        {
                            "text":  "funeral/my own",
                            "points":  51
                        },
                        {
                            "text":  "flowers/visit grave",
                            "points":  41
                        },
                        {
                            "text":  "ghost hunt",
                            "points":  2
                        },
                        {
                            "text":  "my job/tend lawn",
                            "points":  2
                        },
                        {
                            "text":  "going for a jog",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160503,
        "question":  "Name a way a man might greet his lover that he should never greet his mom.",
        "answers":  [
                        {
                            "text":  "hi sexy lover/babe",
                            "points":  35
                        },
                        {
                            "text":  "wet kiss",
                            "points":  34
                        },
                        {
                            "text":  "grab/fondle her",
                            "points":  13
                        },
                        {
                            "text":  "spank her booty",
                            "points":  10
                        },
                        {
                            "text":  "buck nekkid!",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  160504,
        "question":  "Fill in the blank: In hell, you might have to share a bed with someone who ______s at night.",
        "answers":  [
                        {
                            "text":  "snores",
                            "points":  50
                        },
                        {
                            "text":  "toots/dutch ovens me",
                            "points":  34
                        },
                        {
                            "text":  "screams",
                            "points":  8
                        },
                        {
                            "text":  "pees the bed",
                            "points":  3
                        },
                        {
                            "text":  "murders",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160505,
        "question":  "We asked 100 single men... Name something you spent too much money on so your girlfriend wouldn't think you were cheap.",
        "answers":  [
                        {
                            "text":  "food/wine/the tip",
                            "points":  47
                        },
                        {
                            "text":  "jewelry/purity ring",
                            "points":  28
                        },
                        {
                            "text":  "car/ferrari",
                            "points":  16
                        },
                        {
                            "text":  "clothes/shoes",
                            "points":  4
                        },
                        {
                            "text":  "flowers",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160506,
        "question":  "We asked 100 married women... Besides you, who's seen your husband completely naked?",
        "answers":  [
                        {
                            "text":  "his mother",
                            "points":  47
                        },
                        {
                            "text":  "his doctor",
                            "points":  27
                        },
                        {
                            "text":  "his ex",
                            "points":  15
                        },
                        {
                            "text":  "our kids",
                            "points":  5
                        },
                        {
                            "text":  "he himself",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160507,
        "question":  "Fill in the blank: When a man's coffin was lowered into the ground, everyone noticed his ______ was hanging out.",
        "answers":  [
                        {
                            "text":  "tie/clothes",
                            "points":  44
                        },
                        {
                            "text":  "arm/hand",
                            "points":  27
                        },
                        {
                            "text":  "the stiff's stiffy",
                            "points":  12
                        },
                        {
                            "text":  "leg/foot/shoe",
                            "points":  12
                        },
                        {
                            "text":  "tongue",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160508,
        "question":  "We asked 100 married women... It's okay if your husband gives your mom a kiss. It's not okay if he does what during the kiss?",
        "answers":  [
                        {
                            "text":  "slips the tongue",
                            "points":  43
                        },
                        {
                            "text":  "gropes/rubs butt",
                            "points":  33
                        },
                        {
                            "text":  "strokes her hair",
                            "points":  9
                        },
                        {
                            "text":  "closes his eyes",
                            "points":  9
                        },
                        {
                            "text":  "kisses her lips",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160509,
        "question":  "We asked 100 single people... Name an event for which you'd hate to find yourself dateless.",
        "answers":  [
                        {
                            "text":  "wedding",
                            "points":  42
                        },
                        {
                            "text":  "party/new year's",
                            "points":  20
                        },
                        {
                            "text":  "valentine's day",
                            "points":  14
                        },
                        {
                            "text":  "prom",
                            "points":  11
                        },
                        {
                            "text":  "reunion",
                            "points":  10
                        }
                    ]
    },
    {
        "id":  160510,
        "question":  "Name a reason you might not like to swim in the nude.",
        "answers":  [
                        {
                            "text":  "critter/piranha",
                            "points":  36
                        },
                        {
                            "text":  "be seen/caught",
                            "points":  25
                        },
                        {
                            "text":  "cold/shrinky dinky",
                            "points":  19
                        },
                        {
                            "text":  "i'm a porker",
                            "points":  15
                        },
                        {
                            "text":  "pollution/bacteria",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160511,
        "question":  "Name something you do to imitate a chicken.",
        "answers":  [
                        {
                            "text":  "cluck/bawk-bawk",
                            "points":  63
                        },
                        {
                            "text":  "flap arms",
                            "points":  20
                        },
                        {
                            "text":  "strut",
                            "points":  7
                        },
                        {
                            "text":  "lay egg/squat",
                            "points":  4
                        },
                        {
                            "text":  "peck",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160512,
        "question":  "Name something a man might do on a date that tells a woman he's really into himself.",
        "answers":  [
                        {
                            "text":  "talk about himself",
                            "points":  62
                        },
                        {
                            "text":  "look in mirror/spoon",
                            "points":  24
                        },
                        {
                            "text":  "primp",
                            "points":  5
                        },
                        {
                            "text":  "check phone",
                            "points":  3
                        },
                        {
                            "text":  "selfies/without her",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160513,
        "question":  "Fill in the blank: I won't go camping because I'm afraid of ______.",
        "answers":  [
                        {
                            "text":  "wild animals/bears",
                            "points":  57
                        },
                        {
                            "text":  "bugs/ticks",
                            "points":  31
                        },
                        {
                            "text":  "the dark",
                            "points":  4
                        },
                        {
                            "text":  "axe murderer/thief",
                            "points":  2
                        },
                        {
                            "text":  "bad weather",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160514,
        "question":  "Name something Santa Claus hopes is waiting for him when he returns on Christmas Eve.",
        "answers":  [
                        {
                            "text":  "more cookies/food",
                            "points":  37
                        },
                        {
                            "text":  "nude mrs. claus",
                            "points":  35
                        },
                        {
                            "text":  "beverage/hot toddy",
                            "points":  16
                        },
                        {
                            "text":  "cozy bed",
                            "points":  6
                        },
                        {
                            "text":  "pepto/antacid",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160515,
        "question":  "We asked 100 married men... Name a reason your mother-in-law likes you.",
        "answers":  [
                        {
                            "text":  "i love her daughter",
                            "points":  31
                        },
                        {
                            "text":  "i'm nice/help her",
                            "points":  23
                        },
                        {
                            "text":  "i'm rich",
                            "points":  21
                        },
                        {
                            "text":  "i'm hot/turn her on",
                            "points":  13
                        },
                        {
                            "text":  "my humor/charm",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  160516,
        "question":  "Name something a woman might do if she heard her ex-husband was in jail.",
        "answers":  [
                        {
                            "text":  "laugh/throw party",
                            "points":  86
                        },
                        {
                            "text":  "visit/go mock him",
                            "points":  3
                        },
                        {
                            "text":  "cry/worry",
                            "points":  2
                        },
                        {
                            "text":  "post his bail",
                            "points":  2
                        },
                        {
                            "text":  "look up the details",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160517,
        "question":  "Name something that people in hell have to stand in all day long.",
        "answers":  [
                        {
                            "text":  "fire/lava/coals",
                            "points":  58
                        },
                        {
                            "text":  "line/dmv line",
                            "points":  17
                        },
                        {
                            "text":  "fresh turds",
                            "points":  13
                        },
                        {
                            "text":  "ice/snow",
                            "points":  4
                        },
                        {
                            "text":  "water/neck-deep",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160518,
        "question":  "Name something Steve's wife doesn't want anyone else to do to his head.",
        "answers":  [
                        {
                            "text":  "rub/stroke it",
                            "points":  50
                        },
                        {
                            "text":  "shave it",
                            "points":  22
                        },
                        {
                            "text":  "kiss it",
                            "points":  14
                        },
                        {
                            "text":  "punch/smack it",
                            "points":  7
                        },
                        {
                            "text":  "confuse/manipulate",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160519,
        "question":  "We asked 100 women... Your best friend is marrying a jerk. What do you do?",
        "answers":  [
                        {
                            "text":  "tell/warn her",
                            "points":  43
                        },
                        {
                            "text":  "nothing",
                            "points":  30
                        },
                        {
                            "text":  "pray/for his death",
                            "points":  9
                        },
                        {
                            "text":  "support her anyway",
                            "points":  7
                        },
                        {
                            "text":  "ask if she's sure",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  160520,
        "question":  "Name a reason a snail might complain about his shell.",
        "answers":  [
                        {
                            "text":  "too small/tight",
                            "points":  47
                        },
                        {
                            "text":  "too heavy/big",
                            "points":  34
                        },
                        {
                            "text":  "dirty/stinks",
                            "points":  6
                        },
                        {
                            "text":  "too hot",
                            "points":  5
                        },
                        {
                            "text":  "too hard",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160521,
        "question":  "Name a type of pole you'd be surprised to see at the North Pole.",
        "answers":  [
                        {
                            "text":  "stripper pole",
                            "points":  75
                        },
                        {
                            "text":  "barber pole",
                            "points":  12
                        },
                        {
                            "text":  "the south pole",
                            "points":  2
                        },
                        {
                            "text":  "fishing pole",
                            "points":  2
                        },
                        {
                            "text":  "telephone pole",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160522,
        "question":  "Name something a hospital nurse might do to a male patient a lot slower if he's a hottie.",
        "answers":  [
                        {
                            "text":  "sponge bath",
                            "points":  69
                        },
                        {
                            "text":  "massage/back rub",
                            "points":  9
                        },
                        {
                            "text":  "undress him",
                            "points":  8
                        },
                        {
                            "text":  "take temp/rectal",
                            "points":  4
                        },
                        {
                            "text":  "shave him",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160523,
        "question":  "Name something a vampire might have to remove from someone's neck before biting them.",
        "answers":  [
                        {
                            "text":  "necklace/garlic",
                            "points":  50
                        },
                        {
                            "text":  "scarf/clothes",
                            "points":  37
                        },
                        {
                            "text":  "hair",
                            "points":  2
                        },
                        {
                            "text":  "dirt/dust",
                            "points":  2
                        },
                        {
                            "text":  "neck brace",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160524,
        "question":  "Name the occupation of someone who might be bragging about a hit.",
        "answers":  [
                        {
                            "text":  "baseball player",
                            "points":  50
                        },
                        {
                            "text":  "mobster/assassin",
                            "points":  20
                        },
                        {
                            "text":  "singer/musician",
                            "points":  17
                        },
                        {
                            "text":  "blackjack dealer",
                            "points":  3
                        },
                        {
                            "text":  "boxer",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160525,
        "question":  "Name something a man might be willing to go to prison to get away from.",
        "answers":  [
                        {
                            "text":  "his wife/mate",
                            "points":  49
                        },
                        {
                            "text":  "his ex",
                            "points":  14
                        },
                        {
                            "text":  "debts/paying people",
                            "points":  13
                        },
                        {
                            "text":  "mother-in-law",
                            "points":  10
                        },
                        {
                            "text":  "his job",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  160526,
        "question":  "Name something a fat guy might hide from his wife by putting it in his belly button.",
        "answers":  [
                        {
                            "text":  "snack/chicken leg",
                            "points":  47
                        },
                        {
                            "text":  "wallet/money",
                            "points":  23
                        },
                        {
                            "text":  "ring/jewelry",
                            "points":  11
                        },
                        {
                            "text":  "dope/pills",
                            "points":  10
                        },
                        {
                            "text":  "6-pack of condoms",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160527,
        "question":  "Name a book in which a wife hides money because she knows her husband will never look there.",
        "answers":  [
                        {
                            "text":  "bible",
                            "points":  35
                        },
                        {
                            "text":  "cookbook",
                            "points":  30
                        },
                        {
                            "text":  "chick/romance novel",
                            "points":  19
                        },
                        {
                            "text":  "how-to/repairs",
                            "points":  7
                        },
                        {
                            "text":  "dictionary",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160528,
        "question":  "Name something that Pinocchio carries in his backpack to shorten his nose after he lies.",
        "answers":  [
                        {
                            "text":  "saw/chain saw",
                            "points":  54
                        },
                        {
                            "text":  "a file",
                            "points":  19
                        },
                        {
                            "text":  "knife/chisel",
                            "points":  7
                        },
                        {
                            "text":  "scissors/clippers",
                            "points":  7
                        },
                        {
                            "text":  "sandpaper/sander",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160529,
        "question":  "Name someone Minnie Mouse might call if she found out Mickey Mouse cheated on her.",
        "answers":  [
                        {
                            "text":  "daisy duck",
                            "points":  37
                        },
                        {
                            "text":  "donald duck",
                            "points":  27
                        },
                        {
                            "text":  "goofy",
                            "points":  21
                        },
                        {
                            "text":  "pluto",
                            "points":  5
                        },
                        {
                            "text":  "her lawyer",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160530,
        "question":  "Besides a spouse, name someone people wish they could divorce.",
        "answers":  [
                        {
                            "text":  "mom/dad",
                            "points":  30
                        },
                        {
                            "text":  "boss",
                            "points":  30
                        },
                        {
                            "text":  "in-laws",
                            "points":  18
                        },
                        {
                            "text":  "worthless kid",
                            "points":  9
                        },
                        {
                            "text":  "sibling",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160531,
        "question":  "Name an animal's poop you might mistake for Raisinets.",
        "answers":  [
                        {
                            "text":  "rabbit",
                            "points":  66
                        },
                        {
                            "text":  "deer",
                            "points":  9
                        },
                        {
                            "text":  "hamster",
                            "points":  7
                        },
                        {
                            "text":  "mouse/rat",
                            "points":  5
                        },
                        {
                            "text":  "guinea pig",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160532,
        "question":  "Name a part of a vampire's daily routine.",
        "answers":  [
                        {
                            "text":  "drink blood/bite",
                            "points":  50
                        },
                        {
                            "text":  "sleep all day",
                            "points":  17
                        },
                        {
                            "text":  "brush/file fangs",
                            "points":  17
                        },
                        {
                            "text":  "close curtains",
                            "points":  4
                        },
                        {
                            "text":  "clean coffin",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160533,
        "question":  "We asked 100 ex-husbands... Name a food that's as bitter as your ex-wife.",
        "answers":  [
                        {
                            "text":  "lemon",
                            "points":  49
                        },
                        {
                            "text":  "garlic",
                            "points":  12
                        },
                        {
                            "text":  "lime",
                            "points":  11
                        },
                        {
                            "text":  "grapefruit",
                            "points":  10
                        },
                        {
                            "text":  "vinegar",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  160534,
        "question":  "We asked 100 women... Name something you're an expert at making.",
        "answers":  [
                        {
                            "text":  "food/swedish stew",
                            "points":  68
                        },
                        {
                            "text":  "love, honey!",
                            "points":  16
                        },
                        {
                            "text":  "a mess",
                            "points":  2
                        },
                        {
                            "text":  "money",
                            "points":  2
                        },
                        {
                            "text":  "quilts/afghans",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160535,
        "question":  "Tell me why Santa got arrested on Christmas Eve.",
        "answers":  [
                        {
                            "text":  "drunk flying",
                            "points":  33
                        },
                        {
                            "text":  "breaking & entering",
                            "points":  30
                        },
                        {
                            "text":  "speeding",
                            "points":  14
                        },
                        {
                            "text":  "stealing/gifts",
                            "points":  9
                        },
                        {
                            "text":  "streaking/mooning",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160536,
        "question":  "Name something a fireman might put on the firehouse pole on his last day on the job.",
        "answers":  [
                        {
                            "text":  "grease/vaseline",
                            "points":  47
                        },
                        {
                            "text":  "hat/uniform",
                            "points":  35
                        },
                        {
                            "text":  "his autograph",
                            "points":  3
                        },
                        {
                            "text":  "ribbons/streamers",
                            "points":  2
                        },
                        {
                            "text":  "himself/nude",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160537,
        "question":  "Grandma thinks Instagram is a place where grandmas post pictures of their what?",
        "answers":  [
                        {
                            "text":  "grandkids/family",
                            "points":  55
                        },
                        {
                            "text":  "pie recipe/food",
                            "points":  16
                        },
                        {
                            "text":  "bod/bunions",
                            "points":  9
                        },
                        {
                            "text":  "face/new teeth",
                            "points":  4
                        },
                        {
                            "text":  "pets/cats",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160538,
        "question":  "Fill in the blank: Susan told her husband, \"I know you're cheating on me because I found a ______ in your pants.\"",
        "answers":  [
                        {
                            "text":  "papa stoppa",
                            "points":  55
                        },
                        {
                            "text":  "hotel receipt",
                            "points":  11
                        },
                        {
                            "text":  "phone number",
                            "points":  9
                        },
                        {
                            "text":  "bra/panties",
                            "points":  8
                        },
                        {
                            "text":  "hotel key",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160539,
        "question":  "Name something that grandma has for support.",
        "answers":  [
                        {
                            "text":  "cane/walker",
                            "points":  49
                        },
                        {
                            "text":  "bra",
                            "points":  17
                        },
                        {
                            "text":  "girdle/spanx",
                            "points":  9
                        },
                        {
                            "text":  "support hose",
                            "points":  8
                        },
                        {
                            "text":  "grandpa",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160540,
        "question":  "Fill in the blank: I love to bury my head in what?",
        "answers":  [
                        {
                            "text":  "pillow/bed/covers",
                            "points":  46
                        },
                        {
                            "text":  "good book/tolstoy",
                            "points":  22
                        },
                        {
                            "text":  "the sand",
                            "points":  8
                        },
                        {
                            "text":  "computer/iphone",
                            "points":  6
                        },
                        {
                            "text":  "hot bouncy boobs",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160541,
        "question":  "We asked 100 women... Name an S word that describes your man when he dances.",
        "answers":  [
                        {
                            "text":  "silly",
                            "points":  35
                        },
                        {
                            "text":  "sexy",
                            "points":  26
                        },
                        {
                            "text":  "smooth",
                            "points":  11
                        },
                        {
                            "text":  "stupid",
                            "points":  8
                        },
                        {
                            "text":  "slow",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  160542,
        "question":  "If you won the lottery, name someone who might hope you die the next day.",
        "answers":  [
                        {
                            "text":  "my spouse/mate",
                            "points":  31
                        },
                        {
                            "text":  "my kids",
                            "points":  30
                        },
                        {
                            "text":  "my sibling",
                            "points":  9
                        },
                        {
                            "text":  "my neighbor",
                            "points":  9
                        },
                        {
                            "text":  "my spiteful ex",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  160543,
        "question":  "Tell me a city that smells like money.",
        "answers":  [
                        {
                            "text":  "las vegas",
                            "points":  40
                        },
                        {
                            "text":  "new york city",
                            "points":  32
                        },
                        {
                            "text":  "la/beverly hills",
                            "points":  6
                        },
                        {
                            "text":  "miami",
                            "points":  4
                        },
                        {
                            "text":  "dubai",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160544,
        "question":  "If you won the lottery, name something you'd give to everyone on your Christmas list.",
        "answers":  [
                        {
                            "text":  "money/$5 gift card",
                            "points":  48
                        },
                        {
                            "text":  "corvette",
                            "points":  17
                        },
                        {
                            "text":  "trip/to disney",
                            "points":  8
                        },
                        {
                            "text":  "mansion",
                            "points":  5
                        },
                        {
                            "text":  "food/fruit basket",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160545,
        "question":  "Fill in the blank: That's a whopper of a ______.",
        "answers":  [
                        {
                            "text":  "lie/tale/story",
                            "points":  40
                        },
                        {
                            "text":  "burger/meal",
                            "points":  22
                        },
                        {
                            "text":  "fish",
                            "points":  7
                        },
                        {
                            "text":  "booty",
                            "points":  6
                        },
                        {
                            "text":  "black eye/injury",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  160546,
        "question":  "Name something that the worst cruise ship ever might not have on it.",
        "answers":  [
                        {
                            "text":  "booze",
                            "points":  26
                        },
                        {
                            "text":  "food",
                            "points":  19
                        },
                        {
                            "text":  "lifeboat/jacket",
                            "points":  13
                        },
                        {
                            "text":  "bathrooms",
                            "points":  12
                        },
                        {
                            "text":  "a pool",
                            "points":  11
                        }
                    ]
    },
    {
        "id":  160547,
        "question":  "Name something a guy with a really long beard might get it stuck in.",
        "answers":  [
                        {
                            "text":  "zipper/clothes",
                            "points":  35
                        },
                        {
                            "text":  "door/elevator",
                            "points":  24
                        },
                        {
                            "text":  "food/honey",
                            "points":  14
                        },
                        {
                            "text":  "paper shredder",
                            "points":  3
                        },
                        {
                            "text":  "sink/disposal",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160548,
        "question":  "Name a creature that you wouldn't mind if it went extinct.",
        "answers":  [
                        {
                            "text":  "mosquito",
                            "points":  39
                        },
                        {
                            "text":  "snake",
                            "points":  17
                        },
                        {
                            "text":  "spider/black widow",
                            "points":  12
                        },
                        {
                            "text":  "wasp/bee",
                            "points":  5
                        },
                        {
                            "text":  "human/politician",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160549,
        "question":  "We asked 100 married women... You cook your man a special meal. He gets home three hours late. Tell me what you do next.",
        "answers":  [
                        {
                            "text":  "throw in trash",
                            "points":  28
                        },
                        {
                            "text":  "reheat/let him do it",
                            "points":  25
                        },
                        {
                            "text":  "go to bed",
                            "points":  10
                        },
                        {
                            "text":  "cry/sulk",
                            "points":  8
                        },
                        {
                            "text":  "get drunk",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  160550,
        "question":  "We asked 100 women... If you were stuck in an elevator with a man, you'd hope he was a what?",
        "answers":  [
                        {
                            "text":  "repairman",
                            "points":  26
                        },
                        {
                            "text":  "hunk/chippendale",
                            "points":  19
                        },
                        {
                            "text":  "gentleman/nice guy",
                            "points":  18
                        },
                        {
                            "text":  "doctor",
                            "points":  8
                        },
                        {
                            "text":  "firefighter",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  160551,
        "question":  "If a coworker threw a paper clip at you, what might you throw back at them?",
        "answers":  [
                        {
                            "text":  "stapler",
                            "points":  26
                        },
                        {
                            "text":  "pen/pencil",
                            "points":  17
                        },
                        {
                            "text":  "paper clip",
                            "points":  14
                        },
                        {
                            "text":  "paper/spit wad",
                            "points":  13
                        },
                        {
                            "text":  "rubber band",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  160552,
        "question":  "Name an animal on Noah's ark that made a mess when it got seasick.",
        "answers":  [
                        {
                            "text":  "elephant",
                            "points":  46
                        },
                        {
                            "text":  "giraffe",
                            "points":  14
                        },
                        {
                            "text":  "hippo",
                            "points":  9
                        },
                        {
                            "text":  "human/noah",
                            "points":  4
                        },
                        {
                            "text":  "dog",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160553,
        "question":  "Name a game show you were born to be on because it describes your life.",
        "answers":  [
                        {
                            "text":  "jeopardy",
                            "points":  37
                        },
                        {
                            "text":  "family feud",
                            "points":  16
                        },
                        {
                            "text":  "wheel of fortune",
                            "points":  10
                        },
                        {
                            "text":  "let's make a deal",
                            "points":  7
                        },
                        {
                            "text":  "the price is right",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  160554,
        "question":  "You'd be shocked if grandma told you she met her boyfriend where?",
        "answers":  [
                        {
                            "text":  "bar/nightclub",
                            "points":  36
                        },
                        {
                            "text":  "strip joint",
                            "points":  23
                        },
                        {
                            "text":  "nudist colony",
                            "points":  7
                        },
                        {
                            "text":  "online/tinder",
                            "points":  6
                        },
                        {
                            "text":  "gym",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160555,
        "question":  "Give me a word starting with S that a woman might call her man in bed.",
        "answers":  [
                        {
                            "text":  "sexy",
                            "points":  39
                        },
                        {
                            "text":  "stud",
                            "points":  24
                        },
                        {
                            "text":  "stallion",
                            "points":  5
                        },
                        {
                            "text":  "stupid",
                            "points":  3
                        },
                        {
                            "text":  "sugar",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160556,
        "question":  "Name something a woman says on a first date that would scare the daylights out of any man.",
        "answers":  [
                        {
                            "text":  "preg/want 6 kids",
                            "points":  31
                        },
                        {
                            "text":  "let's get hitched",
                            "points":  20
                        },
                        {
                            "text":  "love you! love me?",
                            "points":  9
                        },
                        {
                            "text":  "std/i'm a crab cake",
                            "points":  7
                        },
                        {
                            "text":  "married/to mobster",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  160557,
        "question":  "Name something bad that, at some time in your life, you've accidentally sat on.",
        "answers":  [
                        {
                            "text":  "nail/tack/pin",
                            "points":  20
                        },
                        {
                            "text":  "food/gum",
                            "points":  16
                        },
                        {
                            "text":  "animal/fire ants",
                            "points":  15
                        },
                        {
                            "text":  "poop",
                            "points":  14
                        },
                        {
                            "text":  "eyeglasses",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  160558,
        "question":  "Name a famous woman who spends a lot of money to wear very little.",
        "answers":  [
                        {
                            "text":  "kim kardashian",
                            "points":  49
                        },
                        {
                            "text":  "jennifer lopez",
                            "points":  9
                        },
                        {
                            "text":  "pamela anderson",
                            "points":  5
                        },
                        {
                            "text":  "beyonce",
                            "points":  4
                        },
                        {
                            "text":  "cher",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160559,
        "question":  "Name a kind of plant a mean wife might replace her husband's marijuana stash with.",
        "answers":  [
                        {
                            "text":  "oregano",
                            "points":  27
                        },
                        {
                            "text":  "poison ivy/oak",
                            "points":  22
                        },
                        {
                            "text":  "lawn/stinkweed",
                            "points":  10
                        },
                        {
                            "text":  "cactus",
                            "points":  7
                        },
                        {
                            "text":  "parsley",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160560,
        "question":  "Name something you used to love that you've given up.",
        "answers":  [
                        {
                            "text":  "fave foods/candy",
                            "points":  25
                        },
                        {
                            "text":  "sports/exercise",
                            "points":  17
                        },
                        {
                            "text":  "cigarettes",
                            "points":  13
                        },
                        {
                            "text":  "booze/every night",
                            "points":  8
                        },
                        {
                            "text":  "person/an ex",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  160561,
        "question":  "We asked 100 men... Let's face it: Most of the time, you're simply what animal trapped in a man's body?",
        "answers":  [
                        {
                            "text":  "hound dog",
                            "points":  20
                        },
                        {
                            "text":  "tiger",
                            "points":  15
                        },
                        {
                            "text":  "lion",
                            "points":  14
                        },
                        {
                            "text":  "bear/teddy bear",
                            "points":  12
                        },
                        {
                            "text":  "sloth",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  160562,
        "question":  "Name something in the house you tell your kids not to touch.",
        "answers":  [
                        {
                            "text":  "stove/oven",
                            "points":  40
                        },
                        {
                            "text":  "tv/remote",
                            "points":  9
                        },
                        {
                            "text":  "fine china",
                            "points":  8
                        },
                        {
                            "text":  "knives",
                            "points":  7
                        },
                        {
                            "text":  "snacks/fridge",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160563,
        "question":  "Fill in the blank: My boss may have more money than I do, but I have more ______ than he does.",
        "answers":  [
                        {
                            "text":  "brains/sense",
                            "points":  28
                        },
                        {
                            "text":  "fun",
                            "points":  12
                        },
                        {
                            "text":  "friends",
                            "points":  10
                        },
                        {
                            "text":  "time",
                            "points":  10
                        },
                        {
                            "text":  "sex/babes",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  160564,
        "question":  "Fill in the blank: Lady ______.",
        "answers":  [
                        {
                            "text":  "lady gaga",
                            "points":  42
                        },
                        {
                            "text":  "lady godiva",
                            "points":  7
                        },
                        {
                            "text":  "lady luck",
                            "points":  7
                        },
                        {
                            "text":  "lady & the tramp",
                            "points":  7
                        },
                        {
                            "text":  "ladybug",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160565,
        "question":  "Name something that starts with the word \"running.\"",
        "answers":  [
                        {
                            "text":  "running water",
                            "points":  30
                        },
                        {
                            "text":  "running shoes",
                            "points":  13
                        },
                        {
                            "text":  "running board",
                            "points":  11
                        },
                        {
                            "text":  "running man",
                            "points":  7
                        },
                        {
                            "text":  "running scared",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160566,
        "question":  "In a nightmare, where would you be wearing a hospital gown with your bottom hanging out?",
        "answers":  [
                        {
                            "text":  "work",
                            "points":  21
                        },
                        {
                            "text":  "hospital",
                            "points":  15
                        },
                        {
                            "text":  "church",
                            "points":  13
                        },
                        {
                            "text":  "party/wedding",
                            "points":  8
                        },
                        {
                            "text":  "store/mall",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  160567,
        "question":  "Name a make of car you'd expect to see in the parking lot of Beverly Hills High.",
        "answers":  [
                        {
                            "text":  "bmw",
                            "points":  27
                        },
                        {
                            "text":  "rolls-royce",
                            "points":  13
                        },
                        {
                            "text":  "bentley",
                            "points":  9
                        },
                        {
                            "text":  "porsche",
                            "points":  7
                        },
                        {
                            "text":  "jaguar",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  160568,
        "question":  "Name a job that many people want.",
        "answers":  [
                        {
                            "text":  "actor/movie star",
                            "points":  22
                        },
                        {
                            "text":  "doctor/surgeon",
                            "points":  15
                        },
                        {
                            "text":  "lawyer",
                            "points":  9
                        },
                        {
                            "text":  "president/politician",
                            "points":  9
                        },
                        {
                            "text":  "singer/pop star",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  160569,
        "question":  "Name something specific that gives you goose bumps when you touch it.",
        "answers":  [
                        {
                            "text":  "ice/water/snow",
                            "points":  27
                        },
                        {
                            "text":  "person/soft boob",
                            "points":  12
                        },
                        {
                            "text":  "snake",
                            "points":  10
                        },
                        {
                            "text":  "bug/spider",
                            "points":  8
                        },
                        {
                            "text":  "raw chicken/meat",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160570,
        "question":  "We asked 100 men... Name a sport that best describes your bedroom style.",
        "answers":  [
                        {
                            "text":  "baseball",
                            "points":  17
                        },
                        {
                            "text":  "football",
                            "points":  16
                        },
                        {
                            "text":  "basketball",
                            "points":  11
                        },
                        {
                            "text":  "tennis",
                            "points":  9
                        },
                        {
                            "text":  "hockey",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  160571,
        "question":  "Fill in the blank: Cheese what?",
        "answers":  [
                        {
                            "text":  "cheesecake/factory",
                            "points":  30
                        },
                        {
                            "text":  "cheez whiz",
                            "points":  9
                        },
                        {
                            "text":  "cheeseburger",
                            "points":  7
                        },
                        {
                            "text":  "cheese puffs",
                            "points":  7
                        },
                        {
                            "text":  "cheese ball",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160572,
        "question":  "Name an animal that just sits and waits for dinner to come by.",
        "answers":  [
                        {
                            "text":  "dog",
                            "points":  22
                        },
                        {
                            "text":  "cat",
                            "points":  10
                        },
                        {
                            "text":  "frog",
                            "points":  9
                        },
                        {
                            "text":  "lion",
                            "points":  8
                        },
                        {
                            "text":  "spider",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  160573,
        "question":  "Tell me a popular candy a man might nickname his wife's bottom.",
        "answers":  [
                        {
                            "text":  "mounds",
                            "points":  19
                        },
                        {
                            "text":  "tootsie roll",
                            "points":  18
                        },
                        {
                            "text":  "sweetarts",
                            "points":  8
                        },
                        {
                            "text":  "butterfinger",
                            "points":  5
                        },
                        {
                            "text":  "whopper",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160574,
        "question":  "Fill in the blank: Oil ______.",
        "answers":  [
                        {
                            "text":  "oil change",
                            "points":  19
                        },
                        {
                            "text":  "oil spill",
                            "points":  13
                        },
                        {
                            "text":  "oil can",
                            "points":  8
                        },
                        {
                            "text":  "oil of olay",
                            "points":  8
                        },
                        {
                            "text":  "oil well",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  160575,
        "question":  "We asked 100 women... Fill in the blank: I can do without a lot of things, but I can't do without what?",
        "answers":  [
                        {
                            "text":  "love/my mate",
                            "points":  16
                        },
                        {
                            "text":  "food/chocolate",
                            "points":  16
                        },
                        {
                            "text":  "makeup",
                            "points":  11
                        },
                        {
                            "text":  "computer/wifi",
                            "points":  6
                        },
                        {
                            "text":  "my kids",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160576,
        "question":  "Some people just have to have the last what?",
        "answers":  [
                        {
                            "text":  "word",
                            "points":  78
                        },
                        {
                            "text":  "laugh",
                            "points":  12
                        },
                        {
                            "text":  "piece of cake/bite",
                            "points":  8
                        },
                        {
                            "text":  "drink/drop",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160577,
        "question":  "Name a place where you don't like people walking in on you unannounced.",
        "answers":  [
                        {
                            "text":  "bathroom",
                            "points":  76
                        },
                        {
                            "text":  "my bedroom",
                            "points":  15
                        },
                        {
                            "text":  "my house",
                            "points":  7
                        },
                        {
                            "text":  "work/office",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160578,
        "question":  "A bald guy might drop his toupee off at a hairdresser to have them do what to it?",
        "answers":  [
                        {
                            "text":  "wash/fumigate",
                            "points":  60
                        },
                        {
                            "text":  "style/cut/perm",
                            "points":  31
                        },
                        {
                            "text":  "dye/blond tips",
                            "points":  7
                        },
                        {
                            "text":  "add more hair",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160579,
        "question":  "Name something employees look forward to on Fridays.",
        "answers":  [
                        {
                            "text":  "leaving/the weekend",
                            "points":  60
                        },
                        {
                            "text":  "paycheck",
                            "points":  17
                        },
                        {
                            "text":  "happy hour/drinks",
                            "points":  14
                        },
                        {
                            "text":  "casual dress",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  160580,
        "question":  "Name a famous person with the initials M.J.",
        "answers":  [
                        {
                            "text":  "michael jackson",
                            "points":  54
                        },
                        {
                            "text":  "michael jordan",
                            "points":  37
                        },
                        {
                            "text":  "magic johnson",
                            "points":  6
                        },
                        {
                            "text":  "mick jagger",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160581,
        "question":  "Name a tool you might get hit by if a fight breaks out in a hardware store.",
        "answers":  [
                        {
                            "text":  "hammer",
                            "points":  79
                        },
                        {
                            "text":  "wrench",
                            "points":  16
                        },
                        {
                            "text":  "shovel",
                            "points":  2
                        },
                        {
                            "text":  "screwdriver",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160582,
        "question":  "Name a specific way a boy changes during his teenage years.",
        "answers":  [
                        {
                            "text":  "squeaky/deep voice",
                            "points":  75
                        },
                        {
                            "text":  "peach fuzz/body fur",
                            "points":  16
                        },
                        {
                            "text":  "gets taller",
                            "points":  6
                        },
                        {
                            "text":  "acts awkward/dopey",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160583,
        "question":  "Which animal does the best job of communicating with humans?",
        "answers":  [
                        {
                            "text":  "dog",
                            "points":  75
                        },
                        {
                            "text":  "monkey/ape",
                            "points":  15
                        },
                        {
                            "text":  "cat",
                            "points":  7
                        },
                        {
                            "text":  "dolphin",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160584,
        "question":  "Name something a dog might say he wants to be buried with.",
        "answers":  [
                        {
                            "text":  "his fave bone",
                            "points":  73
                        },
                        {
                            "text":  "his toy/ball",
                            "points":  20
                        },
                        {
                            "text":  "his blanket",
                            "points":  3
                        },
                        {
                            "text":  "his master",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160585,
        "question":  "Name something people crunch.",
        "answers":  [
                        {
                            "text":  "food/ice",
                            "points":  70
                        },
                        {
                            "text":  "numbers",
                            "points":  19
                        },
                        {
                            "text":  "abs",
                            "points":  6
                        },
                        {
                            "text":  "cans",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160586,
        "question":  "We asked 100 women... If a robber steals my purse, he'll be out of luck because I keep my money in my what?",
        "answers":  [
                        {
                            "text":  "bra/clothes",
                            "points":  67
                        },
                        {
                            "text":  "bank",
                            "points":  20
                        },
                        {
                            "text":  "house",
                            "points":  6
                        },
                        {
                            "text":  "phone case",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  160587,
        "question":  "We asked 100 women... Name something cute about Mickey Mouse that wouldn't be cute for a man.",
        "answers":  [
                        {
                            "text":  "big ears",
                            "points":  53
                        },
                        {
                            "text":  "falsetto voice",
                            "points":  31
                        },
                        {
                            "text":  "red shorts",
                            "points":  8
                        },
                        {
                            "text":  "belly/no shirt",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  160588,
        "question":  "Steve Harvey's kids might not tell him, but you know they brag to other people that he's the best what?",
        "answers":  [
                        {
                            "text":  "comedian/actor",
                            "points":  51
                        },
                        {
                            "text":  "dad",
                            "points":  40
                        },
                        {
                            "text":  "provider/atm",
                            "points":  6
                        },
                        {
                            "text":  "cook/grillmaster",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160589,
        "question":  "Name something a bird might dream about pooping on.",
        "answers":  [
                        {
                            "text":  "people/hat",
                            "points":  42
                        },
                        {
                            "text":  "washed car",
                            "points":  40
                        },
                        {
                            "text":  "a cat",
                            "points":  14
                        },
                        {
                            "text":  "statue/sculpture",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160590,
        "question":  "What do you think is the number one foreign cuisine eaten by Americans?",
        "answers":  [
                        {
                            "text":  "italian",
                            "points":  41
                        },
                        {
                            "text":  "chinese",
                            "points":  31
                        },
                        {
                            "text":  "mexican",
                            "points":  21
                        },
                        {
                            "text":  "japanese",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  160591,
        "question":  "What does a former high school nerd have now that makes the girls at his class reunion want him?",
        "answers":  [
                        {
                            "text":  "high-paying job",
                            "points":  92
                        },
                        {
                            "text":  "handsome face",
                            "points":  2
                        },
                        {
                            "text":  "doctorate/smarts",
                            "points":  2
                        },
                        {
                            "text":  "a porsche",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160592,
        "question":  "Name a place where you hear someone say, \"Bottoms up.\"",
        "answers":  [
                        {
                            "text":  "bar/nightclub",
                            "points":  90
                        },
                        {
                            "text":  "doc/proctologist",
                            "points":  4
                        },
                        {
                            "text":  "wedding/celebration",
                            "points":  2
                        },
                        {
                            "text":  "strip joint",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160593,
        "question":  "Name a place single guys go after work because no one is home waiting for them.",
        "answers":  [
                        {
                            "text":  "bar/nightclub",
                            "points":  90
                        },
                        {
                            "text":  "strip joint",
                            "points":  4
                        },
                        {
                            "text":  "gym/nude yoga",
                            "points":  2
                        },
                        {
                            "text":  "home anyway",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160594,
        "question":  "After a wild Christmas party, name something you might find hanging on the Christmas tree.",
        "answers":  [
                        {
                            "text":  "panties/clothes",
                            "points":  89
                        },
                        {
                            "text":  "booze/cans",
                            "points":  4
                        },
                        {
                            "text":  "food/candy canes",
                            "points":  3
                        },
                        {
                            "text":  "condoms/used",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160595,
        "question":  "Name something in the bedroom a wife might hit her snoring husband with.",
        "answers":  [
                        {
                            "text":  "pillow",
                            "points":  86
                        },
                        {
                            "text":  "lamp",
                            "points":  5
                        },
                        {
                            "text":  "her fist/elbow",
                            "points":  4
                        },
                        {
                            "text":  "magazine/book",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160596,
        "question":  "Name something a nurse might stick in you.",
        "answers":  [
                        {
                            "text":  "needle/iv",
                            "points":  81
                        },
                        {
                            "text":  "thermometer",
                            "points":  13
                        },
                        {
                            "text":  "their finger",
                            "points":  2
                        },
                        {
                            "text":  "suppository",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160597,
        "question":  "Fill in the blank: Kitty ______.",
        "answers":  [
                        {
                            "text":  "kitty cat",
                            "points":  75
                        },
                        {
                            "text":  "kitty litter",
                            "points":  13
                        },
                        {
                            "text":  "kitty, kitty",
                            "points":  8
                        },
                        {
                            "text":  "kitty hawk",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160598,
        "question":  "We asked 100 married men... What do you do when your wife is in a grouchy mood?",
        "answers":  [
                        {
                            "text":  "leave her alone",
                            "points":  71
                        },
                        {
                            "text":  "be nice/listen",
                            "points":  21
                        },
                        {
                            "text":  "get upset/argue",
                            "points":  3
                        },
                        {
                            "text":  "buy her flowers",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160599,
        "question":  "Name something you might see a fireman do with his hose.",
        "answers":  [
                        {
                            "text":  "spray/aim at fire",
                            "points":  67
                        },
                        {
                            "text":  "roll/unroll it",
                            "points":  24
                        },
                        {
                            "text":  "hold/grip it",
                            "points":  5
                        },
                        {
                            "text":  "attach to hydrant",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160600,
        "question":  "Fill in the blank: A wife might tell her husband, \"If you don't like the way I ______, then get someone else to do it.\"",
        "answers":  [
                        {
                            "text":  "cook",
                            "points":  65
                        },
                        {
                            "text":  "clean/laundry",
                            "points":  25
                        },
                        {
                            "text":  "get kinky",
                            "points":  6
                        },
                        {
                            "text":  "drive",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160601,
        "question":  "Name something you might chew on when you're watching a scary movie.",
        "answers":  [
                        {
                            "text":  "snacks/candy",
                            "points":  64
                        },
                        {
                            "text":  "fingernails",
                            "points":  29
                        },
                        {
                            "text":  "my lip",
                            "points":  3
                        },
                        {
                            "text":  "shirt",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160602,
        "question":  "We asked 100 women... Which one of the seven dwarfs would make the best husband?",
        "answers":  [
                        {
                            "text":  "happy",
                            "points":  60
                        },
                        {
                            "text":  "doc",
                            "points":  32
                        },
                        {
                            "text":  "sleepy",
                            "points":  4
                        },
                        {
                            "text":  "dopey",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160603,
        "question":  "When clowns get together, they probably compare the size of their what?",
        "answers":  [
                        {
                            "text":  "shoes/feet",
                            "points":  55
                        },
                        {
                            "text":  "red noses",
                            "points":  37
                        },
                        {
                            "text":  "clown cars",
                            "points":  3
                        },
                        {
                            "text":  "horns",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160604,
        "question":  "Who hears you late at night when you go to the kitchen to sneak a snack?",
        "answers":  [
                        {
                            "text":  "dog/pet",
                            "points":  54
                        },
                        {
                            "text":  "spouse/mate",
                            "points":  27
                        },
                        {
                            "text":  "the kids",
                            "points":  11
                        },
                        {
                            "text":  "no one",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  160605,
        "question":  "Name something a plumber likes to show off.",
        "answers":  [
                        {
                            "text":  "butt/crack",
                            "points":  51
                        },
                        {
                            "text":  "his tools/snake",
                            "points":  28
                        },
                        {
                            "text":  "pipe work/skill",
                            "points":  16
                        },
                        {
                            "text":  "beefy biceps/muscle",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160606,
        "question":  "Tell me a place a man might use a fake name.",
        "answers":  [
                        {
                            "text":  "bar/nightclub",
                            "points":  38
                        },
                        {
                            "text":  "strip joint",
                            "points":  28
                        },
                        {
                            "text":  "hotel/motel",
                            "points":  23
                        },
                        {
                            "text":  "online/tinder",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  160607,
        "question":  "You might get in a car wreck if you take your eyes off the road to do what?",
        "answers":  [
                        {
                            "text":  "text/use phone",
                            "points":  84
                        },
                        {
                            "text":  "tune radio/music",
                            "points":  9
                        },
                        {
                            "text":  "put on makeup",
                            "points":  2
                        },
                        {
                            "text":  "stare out window",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160608,
        "question":  "After bingeing on TV's Shark Week, I dreamed that a shark ripped off my what?",
        "answers":  [
                        {
                            "text":  "leg/body part",
                            "points":  81
                        },
                        {
                            "text":  "swimsuit/clothes",
                            "points":  10
                        },
                        {
                            "text":  "business idea",
                            "points":  4
                        },
                        {
                            "text":  "money/wallet",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160609,
        "question":  "Fill in the blank: I wish more girls looked up to women with big brains instead of big what?",
        "answers":  [
                        {
                            "text":  "bra busters",
                            "points":  80
                        },
                        {
                            "text":  "badonkadonks",
                            "points":  10
                        },
                        {
                            "text":  "hair",
                            "points":  5
                        },
                        {
                            "text":  "bank accounts",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160610,
        "question":  "We asked 100 women... I love a man with a beard unless I can see what in it?",
        "answers":  [
                        {
                            "text":  "food/crumbs",
                            "points":  78
                        },
                        {
                            "text":  "lice/critters",
                            "points":  11
                        },
                        {
                            "text":  "boogers/snot",
                            "points":  6
                        },
                        {
                            "text":  "gray hair",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160611,
        "question":  "Name a place that's full of bad people.",
        "answers":  [
                        {
                            "text":  "jail/rikers",
                            "points":  74
                        },
                        {
                            "text":  "congress/d.c.",
                            "points":  12
                        },
                        {
                            "text":  "bars",
                            "points":  7
                        },
                        {
                            "text":  "hell",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160612,
        "question":  "When Fido the dog graduated from obedience school, name something he did with his diploma.",
        "answers":  [
                        {
                            "text":  "ate/chewed it up",
                            "points":  72
                        },
                        {
                            "text":  "buried it",
                            "points":  17
                        },
                        {
                            "text":  "peed/pooped on it",
                            "points":  6
                        },
                        {
                            "text":  "framed/hung it",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160613,
        "question":  "Name something that's best when it's really juicy.",
        "answers":  [
                        {
                            "text":  "fruit/peach",
                            "points":  68
                        },
                        {
                            "text":  "meat/a steak",
                            "points":  25
                        },
                        {
                            "text":  "gossip",
                            "points":  2
                        },
                        {
                            "text":  "gum",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160614,
        "question":  "Even when a man is broke, name something his girlfriend still expects him to buy her.",
        "answers":  [
                        {
                            "text":  "food/chocolate",
                            "points":  64
                        },
                        {
                            "text":  "flowers",
                            "points":  22
                        },
                        {
                            "text":  "jewelry/ring",
                            "points":  9
                        },
                        {
                            "text":  "a drink",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160615,
        "question":  "People are like houseplants -- they need what?",
        "answers":  [
                        {
                            "text":  "water",
                            "points":  64
                        },
                        {
                            "text":  "sun",
                            "points":  17
                        },
                        {
                            "text":  "love/attention",
                            "points":  14
                        },
                        {
                            "text":  "air",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160616,
        "question":  "Dear baseball game on TV: Please keep the camera off a player when he's doing what?",
        "answers":  [
                        {
                            "text":  "scratch/adjust'g",
                            "points":  56
                        },
                        {
                            "text":  "spitting",
                            "points":  31
                        },
                        {
                            "text":  "picking nose",
                            "points":  8
                        },
                        {
                            "text":  "chew gum/blow bubble",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160617,
        "question":  "Name a sport that a nudist colony might not allow because there's too much body contact.",
        "answers":  [
                        {
                            "text":  "football",
                            "points":  50
                        },
                        {
                            "text":  "wrestling",
                            "points":  40
                        },
                        {
                            "text":  "basketball",
                            "points":  4
                        },
                        {
                            "text":  "hockey",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160618,
        "question":  "Name something that a girl who's just been dumped might do to her hair.",
        "answers":  [
                        {
                            "text":  "cut/shave it",
                            "points":  48
                        },
                        {
                            "text":  "color it",
                            "points":  42
                        },
                        {
                            "text":  "wash it/finally",
                            "points":  4
                        },
                        {
                            "text":  "pull it",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160619,
        "question":  "Name something the dog spends all day waiting for.",
        "answers":  [
                        {
                            "text":  "owner",
                            "points":  48
                        },
                        {
                            "text":  "food/treat",
                            "points":  38
                        },
                        {
                            "text":  "walk/out to whiz",
                            "points":  7
                        },
                        {
                            "text":  "mailman",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160620,
        "question":  "Name something you might buy if nudists moved into the house next door.",
        "answers":  [
                        {
                            "text":  "curtains/shades",
                            "points":  41
                        },
                        {
                            "text":  "binoculars",
                            "points":  31
                        },
                        {
                            "text":  "fence",
                            "points":  16
                        },
                        {
                            "text":  "video camera",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  160621,
        "question":  "Name something that costs way too much at an airport but they know people will pay it.",
        "answers":  [
                        {
                            "text":  "food & drink",
                            "points":  87
                        },
                        {
                            "text":  "luggage/fees",
                            "points":  3
                        },
                        {
                            "text":  "books",
                            "points":  3
                        },
                        {
                            "text":  "tickets",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160622,
        "question":  "Tell me something you change every day.",
        "answers":  [
                        {
                            "text":  "clothes/undies",
                            "points":  86
                        },
                        {
                            "text":  "my mind/'tude",
                            "points":  5
                        },
                        {
                            "text":  "tv channels",
                            "points":  3
                        },
                        {
                            "text":  "diapers/depends",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160623,
        "question":  "Fill in the blank: Maple ______.",
        "answers":  [
                        {
                            "text":  "maple syrup",
                            "points":  71
                        },
                        {
                            "text":  "maple tree",
                            "points":  16
                        },
                        {
                            "text":  "maple leaf",
                            "points":  6
                        },
                        {
                            "text":  "maple sugar",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160624,
        "question":  "I'm on the new \"stranded on a deserted island\" diet: I can only eat what?",
        "answers":  [
                        {
                            "text":  "coconut/fruit",
                            "points":  62
                        },
                        {
                            "text":  "fish/seafood",
                            "points":  20
                        },
                        {
                            "text":  "sand",
                            "points":  12
                        },
                        {
                            "text":  "nuts",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160625,
        "question":  "We asked 100 single men... I just heard my blind date won first place in a contest for the person with the ugliest what?",
        "answers":  [
                        {
                            "text":  "face/smile",
                            "points":  59
                        },
                        {
                            "text":  "hair",
                            "points":  17
                        },
                        {
                            "text":  "sweater/clothes",
                            "points":  12
                        },
                        {
                            "text":  "laugh",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  160626,
        "question":  "Name the wrong place to be cracking jokes.",
        "answers":  [
                        {
                            "text":  "funeral",
                            "points":  53
                        },
                        {
                            "text":  "church",
                            "points":  38
                        },
                        {
                            "text":  "work/meeting",
                            "points":  3
                        },
                        {
                            "text":  "court",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160627,
        "question":  "Name something it would be inconsiderate of a farmer to eat for lunch in front of his animals.",
        "answers":  [
                        {
                            "text":  "steak/beef",
                            "points":  40
                        },
                        {
                            "text":  "bacon/pork",
                            "points":  33
                        },
                        {
                            "text":  "chicken",
                            "points":  15
                        },
                        {
                            "text":  "their feed/hay",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  160628,
        "question":  "Name something you'd buy if a psychic told you you're going to win the lottery.",
        "answers":  [
                        {
                            "text":  "house/property",
                            "points":  33
                        },
                        {
                            "text":  "car/rv",
                            "points":  31
                        },
                        {
                            "text":  "vacation package",
                            "points":  21
                        },
                        {
                            "text":  "a lottery ticket!",
                            "points":  11
                        }
                    ]
    },
    {
        "id":  160629,
        "question":  "Name a piece of sports equipment you keep by the bed in case a burglar breaks in.",
        "answers":  [
                        {
                            "text":  "baseball bat",
                            "points":  82
                        },
                        {
                            "text":  "golf club",
                            "points":  8
                        },
                        {
                            "text":  "9 mm/gun",
                            "points":  3
                        },
                        {
                            "text":  "dumbbell",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160630,
        "question":  "Name something that celebrities like to walk on.",
        "answers":  [
                        {
                            "text":  "red carpet",
                            "points":  80
                        },
                        {
                            "text":  "other people",
                            "points":  9
                        },
                        {
                            "text":  "air/cloud nine",
                            "points":  3
                        },
                        {
                            "text":  "stage/catwalk",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160631,
        "question":  "Name something that you zip, zip it good.",
        "answers":  [
                        {
                            "text":  "pants/clothes",
                            "points":  80
                        },
                        {
                            "text":  "my mouth/lip",
                            "points":  8
                        },
                        {
                            "text":  "ziploc baggie",
                            "points":  4
                        },
                        {
                            "text":  "luggage",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160632,
        "question":  "Name something the hospital nurses eat every day to keep the married doctors away.",
        "answers":  [
                        {
                            "text":  "garlic",
                            "points":  77
                        },
                        {
                            "text":  "onions",
                            "points":  9
                        },
                        {
                            "text":  "\"an apple a day\"",
                            "points":  5
                        },
                        {
                            "text":  "donuts/pastry",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160633,
        "question":  "Paul eats so much chicken that he's starting to what?",
        "answers":  [
                        {
                            "text":  "cluck/crow",
                            "points":  71
                        },
                        {
                            "text":  "grow feathers/wings",
                            "points":  16
                        },
                        {
                            "text":  "lay eggs",
                            "points":  5
                        },
                        {
                            "text":  "get fat",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160634,
        "question":  "Name something that might be made out of snakeskin.",
        "answers":  [
                        {
                            "text":  "boots/shoes",
                            "points":  70
                        },
                        {
                            "text":  "purse/bag",
                            "points":  12
                        },
                        {
                            "text":  "belt",
                            "points":  7
                        },
                        {
                            "text":  "wallet",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  160635,
        "question":  "Name a place only a dumb guy would bury a body.",
        "answers":  [
                        {
                            "text":  "his yard",
                            "points":  66
                        },
                        {
                            "text":  "police station",
                            "points":  17
                        },
                        {
                            "text":  "park/playground",
                            "points":  10
                        },
                        {
                            "text":  "beach",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160636,
        "question":  "Fill in the blank: If I won the lottery, I'd give my mother the ______ of her dreams.",
        "answers":  [
                        {
                            "text":  "house",
                            "points":  64
                        },
                        {
                            "text":  "car",
                            "points":  15
                        },
                        {
                            "text":  "vacation",
                            "points":  12
                        },
                        {
                            "text":  "life",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160637,
        "question":  "We asked 100 women... I'd love to get into a tub that's filled with warm what?",
        "answers":  [
                        {
                            "text":  "water/bubbles",
                            "points":  62
                        },
                        {
                            "text":  "milk",
                            "points":  19
                        },
                        {
                            "text":  "chocolate/pudding",
                            "points":  11
                        },
                        {
                            "text":  "wine",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160638,
        "question":  "Name something about Santa Claus that might make you think he drinks a lot.",
        "answers":  [
                        {
                            "text":  "rosy cheeks/nose",
                            "points":  54
                        },
                        {
                            "text":  "beer belly",
                            "points":  27
                        },
                        {
                            "text":  "too jolly/\"ho ho ho\"",
                            "points":  12
                        },
                        {
                            "text":  "talks to reindeer",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160639,
        "question":  "We asked 100 married men... Name something your wife has more control of than you do.",
        "answers":  [
                        {
                            "text":  "the money",
                            "points":  53
                        },
                        {
                            "text":  "nookie/her cookie",
                            "points":  18
                        },
                        {
                            "text":  "cooking/meals",
                            "points":  15
                        },
                        {
                            "text":  "the kids",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  160640,
        "question":  "Name a holiday where you always seem to be caught in the middle of a family feud.",
        "answers":  [
                        {
                            "text":  "thanksgiving",
                            "points":  46
                        },
                        {
                            "text":  "christmas",
                            "points":  43
                        },
                        {
                            "text":  "4th of july",
                            "points":  3
                        },
                        {
                            "text":  "new year's",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160641,
        "question":  "We asked 100 single women... Name something you wouldn't want to see on your date's neck.",
        "answers":  [
                        {
                            "text":  "hickey",
                            "points":  46
                        },
                        {
                            "text":  "lipstick",
                            "points":  24
                        },
                        {
                            "text":  "tattoo/of cher",
                            "points":  20
                        },
                        {
                            "text":  "crop of moles",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160642,
        "question":  "You should hang up if you receive a call from a stranger asking for your what?",
        "answers":  [
                        {
                            "text":  "money/credit",
                            "points":  44
                        },
                        {
                            "text":  "social security #",
                            "points":  42
                        },
                        {
                            "text":  "hot dirty lovin'",
                            "points":  5
                        },
                        {
                            "text":  "address",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160643,
        "question":  "We asked 100 married women... It's easy to sneak purchases into the house when my husband is what?",
        "answers":  [
                        {
                            "text":  "sleeping",
                            "points":  43
                        },
                        {
                            "text":  "working",
                            "points":  25
                        },
                        {
                            "text":  "watching tv/sports",
                            "points":  24
                        },
                        {
                            "text":  "gaming/poker",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160644,
        "question":  "Fill in the blank: ______ fry.",
        "answers":  [
                        {
                            "text":  "fish fry",
                            "points":  42
                        },
                        {
                            "text":  "french fry",
                            "points":  34
                        },
                        {
                            "text":  "stir-fry",
                            "points":  12
                        },
                        {
                            "text":  "small fry",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  160645,
        "question":  "We asked 100 married men... The bad news: Your wife ran away. The worse news: She took your what?",
        "answers":  [
                        {
                            "text":  "car/truck",
                            "points":  36
                        },
                        {
                            "text":  "dog",
                            "points":  27
                        },
                        {
                            "text":  "cash/credit cards",
                            "points":  27
                        },
                        {
                            "text":  "guns",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160646,
        "question":  "Name a city with a lot of plastic surgeons.",
        "answers":  [
                        {
                            "text":  "l.a./bev hills",
                            "points":  80
                        },
                        {
                            "text":  "miami",
                            "points":  6
                        },
                        {
                            "text":  "new york city",
                            "points":  5
                        },
                        {
                            "text":  "las vegas",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160647,
        "question":  "Name something you'd hate to see your boss buy after he turned you down for a raise.",
        "answers":  [
                        {
                            "text":  "tesla/truck",
                            "points":  76
                        },
                        {
                            "text":  "computer/software",
                            "points":  9
                        },
                        {
                            "text":  "house",
                            "points":  6
                        },
                        {
                            "text":  "boat",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160648,
        "question":  "Fill in the blank: Oh no -- there's a giant ______ on my face!",
        "answers":  [
                        {
                            "text":  "zit",
                            "points":  75
                        },
                        {
                            "text":  "bug/spider",
                            "points":  15
                        },
                        {
                            "text":  "hair",
                            "points":  2
                        },
                        {
                            "text":  "squid",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160649,
        "question":  "Name something that goes off.",
        "answers":  [
                        {
                            "text":  "alarm/clock",
                            "points":  75
                        },
                        {
                            "text":  "fireworks",
                            "points":  9
                        },
                        {
                            "text":  "light",
                            "points":  6
                        },
                        {
                            "text":  "bomb",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160650,
        "question":  "Name an insect that comes in a swarm.",
        "answers":  [
                        {
                            "text":  "bees/wasps",
                            "points":  75
                        },
                        {
                            "text":  "locusts",
                            "points":  9
                        },
                        {
                            "text":  "mosquitoes",
                            "points":  6
                        },
                        {
                            "text":  "ants",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160651,
        "question":  "Name something that's no fun to celebrate by yourself.",
        "answers":  [
                        {
                            "text":  "birthday",
                            "points":  72
                        },
                        {
                            "text":  "christmas",
                            "points":  9
                        },
                        {
                            "text":  "anniversary",
                            "points":  8
                        },
                        {
                            "text":  "valentine's day",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160652,
        "question":  "We asked 100 men... Name a place your buddy might tell you that he met his new girlfriend that would make you think, \"This is never going to last.\"",
        "answers":  [
                        {
                            "text":  "bar/nightclub",
                            "points":  52
                        },
                        {
                            "text":  "strip joint",
                            "points":  36
                        },
                        {
                            "text":  "online/app",
                            "points":  4
                        },
                        {
                            "text":  "church",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160653,
        "question":  "Give me a word that rhymes with \"diner.\"",
        "answers":  [
                        {
                            "text":  "finer",
                            "points":  50
                        },
                        {
                            "text":  "miner/minor",
                            "points":  24
                        },
                        {
                            "text":  "liner",
                            "points":  11
                        },
                        {
                            "text":  "whiner",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  160654,
        "question":  "Name a farm animal that likes to take a roll in the hay.",
        "answers":  [
                        {
                            "text":  "horse",
                            "points":  50
                        },
                        {
                            "text":  "pig",
                            "points":  22
                        },
                        {
                            "text":  "cow",
                            "points":  17
                        },
                        {
                            "text":  "goat",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160655,
        "question":  "Name a place that Uber drivers take more men to than they do women.",
        "answers":  [
                        {
                            "text":  "strip joint",
                            "points":  47
                        },
                        {
                            "text":  "bar/nightclub",
                            "points":  36
                        },
                        {
                            "text":  "sports venue/golf",
                            "points":  9
                        },
                        {
                            "text":  "proctologist",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160656,
        "question":  "Name something you might only do once a week during a drought.",
        "answers":  [
                        {
                            "text":  "water lawn/plants",
                            "points":  46
                        },
                        {
                            "text":  "shower/bathe",
                            "points":  39
                        },
                        {
                            "text":  "laundry",
                            "points":  5
                        },
                        {
                            "text":  "wash car",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160657,
        "question":  "Name a lie that a man tells a woman because he doesn't want to hurt her feelings.",
        "answers":  [
                        {
                            "text":  "look good/not fat",
                            "points":  84
                        },
                        {
                            "text":  "yum! good cook!",
                            "points":  3
                        },
                        {
                            "text":  "i love you",
                            "points":  3
                        },
                        {
                            "text":  "it's not you; it's me",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160658,
        "question":  "Name a place you see a lot of shirtless men with big bellies.",
        "answers":  [
                        {
                            "text":  "beach",
                            "points":  77
                        },
                        {
                            "text":  "football game",
                            "points":  7
                        },
                        {
                            "text":  "swimming pool",
                            "points":  7
                        },
                        {
                            "text":  "rave/bar",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160659,
        "question":  "Fill in the blank: Bob was surprised that his ex-wife ______ed her wedding ring.",
        "answers":  [
                        {
                            "text":  "sold/pawned",
                            "points":  76
                        },
                        {
                            "text":  "kept/saved",
                            "points":  8
                        },
                        {
                            "text":  "lost",
                            "points":  6
                        },
                        {
                            "text":  "swallowed",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160660,
        "question":  "We asked 100 women... My man is so hairy that if he had his DNA tested, it might reveal he's part what?",
        "answers":  [
                        {
                            "text":  "ape/monkey",
                            "points":  75
                        },
                        {
                            "text":  "wolf/werewolf",
                            "points":  7
                        },
                        {
                            "text":  "neanderthal/human",
                            "points":  6
                        },
                        {
                            "text":  "sasquatch",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160661,
        "question":  "Name something people have to squeeze into.",
        "answers":  [
                        {
                            "text":  "outfit/skinny jeans",
                            "points":  71
                        },
                        {
                            "text":  "elevator",
                            "points":  8
                        },
                        {
                            "text":  "car",
                            "points":  8
                        },
                        {
                            "text":  "airline seat",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  160662,
        "question":  "When Martha Stewart cleans her belly button, what might she do with the lint?",
        "answers":  [
                        {
                            "text":  "crafts/sweater",
                            "points":  70
                        },
                        {
                            "text":  "cook it/eat it",
                            "points":  11
                        },
                        {
                            "text":  "throw it away",
                            "points":  9
                        },
                        {
                            "text":  "start a nice fire",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160663,
        "question":  "If King Kong wore a fanny pack, what might he carry in it?",
        "answers":  [
                        {
                            "text":  "bananas/food",
                            "points":  68
                        },
                        {
                            "text":  "his bae/fay wray",
                            "points":  21
                        },
                        {
                            "text":  "water",
                            "points":  2
                        },
                        {
                            "text":  "a tree",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160664,
        "question":  "Name something a dog might do to a man in his sleep that would make the man think it was his wife.",
        "answers":  [
                        {
                            "text":  "long wet licks",
                            "points":  65
                        },
                        {
                            "text":  "snuggles/spoon him",
                            "points":  22
                        },
                        {
                            "text":  "hump him",
                            "points":  3
                        },
                        {
                            "text":  "push/nudge him",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160665,
        "question":  "Name something you should choose wisely in life.",
        "answers":  [
                        {
                            "text":  "spouse/mate",
                            "points":  64
                        },
                        {
                            "text":  "career",
                            "points":  14
                        },
                        {
                            "text":  "friends",
                            "points":  9
                        },
                        {
                            "text":  "financial plan",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  160666,
        "question":  "Name an occupation whose people you can only hope have washed their hands.",
        "answers":  [
                        {
                            "text":  "food service",
                            "points":  63
                        },
                        {
                            "text":  "doctor/dentist",
                            "points":  20
                        },
                        {
                            "text":  "nurse",
                            "points":  6
                        },
                        {
                            "text":  "trash collector",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160667,
        "question":  "Fill in the blank: A wife might divorce her husband if he spent more time at ______ than at home.",
        "answers":  [
                        {
                            "text":  "bar/nightclub",
                            "points":  63
                        },
                        {
                            "text":  "work",
                            "points":  16
                        },
                        {
                            "text":  "strip joint/all-male",
                            "points":  10
                        },
                        {
                            "text":  "gym",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160668,
        "question":  "We asked 100 women... After you've been dumped, name a food you wash down with your tears.",
        "answers":  [
                        {
                            "text":  "ice cream",
                            "points":  61
                        },
                        {
                            "text":  "chocolate/candy",
                            "points":  23
                        },
                        {
                            "text":  "pizza",
                            "points":  6
                        },
                        {
                            "text":  "chips",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160669,
        "question":  "We asked 100 married men... Marriage should be 50/50. But in yours, what does your wife get 80/20 of?",
        "answers":  [
                        {
                            "text":  "money",
                            "points":  57
                        },
                        {
                            "text":  "the bed",
                            "points":  15
                        },
                        {
                            "text":  "cleaning/chores",
                            "points":  14
                        },
                        {
                            "text":  "my time/attention",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  160670,
        "question":  "Name someone who might follow you home if you don't tip them.",
        "answers":  [
                        {
                            "text":  "waiter/waitress",
                            "points":  52
                        },
                        {
                            "text":  "cabbie/uber driver",
                            "points":  34
                        },
                        {
                            "text":  "bartender",
                            "points":  5
                        },
                        {
                            "text":  "stripper",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160671,
        "question":  "If someone is caught in the act, he might be caught doing what?",
        "answers":  [
                        {
                            "text":  "the nasty/affair",
                            "points":  46
                        },
                        {
                            "text":  "stealing",
                            "points":  41
                        },
                        {
                            "text":  "lying",
                            "points":  3
                        },
                        {
                            "text":  "overeating",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160672,
        "question":  "Name something that, once a year, a circus clown's friends might put on his grave.",
        "answers":  [
                        {
                            "text":  "iconic red nose",
                            "points":  45
                        },
                        {
                            "text":  "balloon animal",
                            "points":  25
                        },
                        {
                            "text":  "flower/squirting",
                            "points":  20
                        },
                        {
                            "text":  "booze",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160673,
        "question":  "Fill in the blank: Grandma says, \"Every time we go to ______, grandpa falls asleep.\"",
        "answers":  [
                        {
                            "text":  "the movies",
                            "points":  44
                        },
                        {
                            "text":  "church",
                            "points":  39
                        },
                        {
                            "text":  "bed",
                            "points":  8
                        },
                        {
                            "text":  "opera/play",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160674,
        "question":  "We asked 100 married men... Name something specific you wouldn't want to see your mother-in-law wearing.",
        "answers":  [
                        {
                            "text":  "lingerie/butt floss",
                            "points":  41
                        },
                        {
                            "text":  "bikini",
                            "points":  36
                        },
                        {
                            "text":  "miniskirt",
                            "points":  13
                        },
                        {
                            "text":  "birthday suit",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160675,
        "question":  "Name something a store called Funerals\"R\"Us might offer for sale.",
        "answers":  [
                        {
                            "text":  "caskets",
                            "points":  81
                        },
                        {
                            "text":  "flowers",
                            "points":  6
                        },
                        {
                            "text":  "tombstones",
                            "points":  3
                        },
                        {
                            "text":  "urns",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160676,
        "question":  "Name something that can be opened or closed.",
        "answers":  [
                        {
                            "text":  "door/of car",
                            "points":  80
                        },
                        {
                            "text":  "window",
                            "points":  4
                        },
                        {
                            "text":  "mouth/during kiss",
                            "points":  4
                        },
                        {
                            "text":  "business/store",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160677,
        "question":  "Name an animal that snorts.",
        "answers":  [
                        {
                            "text":  "pig/hog",
                            "points":  79
                        },
                        {
                            "text":  "horse",
                            "points":  6
                        },
                        {
                            "text":  "dog",
                            "points":  4
                        },
                        {
                            "text":  "bull/cow",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160678,
        "question":  "Name something people pick and flick.",
        "answers":  [
                        {
                            "text":  "a sticky booger",
                            "points":  77
                        },
                        {
                            "text":  "a crusty scab",
                            "points":  11
                        },
                        {
                            "text":  "lint",
                            "points":  2
                        },
                        {
                            "text":  "yummy yellow earwax",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160679,
        "question":  "Name something a man might buy on his way home from a really bad first date.",
        "answers":  [
                        {
                            "text":  "booze/a 40",
                            "points":  76
                        },
                        {
                            "text":  "food/ice cream",
                            "points":  11
                        },
                        {
                            "text":  "hooker",
                            "points":  3
                        },
                        {
                            "text":  "nudie mags/flicks",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160680,
        "question":  "Fill in the blank: At Christmas, a guy might say, \"I can't believe my wife bought me ______ again.\"",
        "answers":  [
                        {
                            "text":  "tie/clothes",
                            "points":  76
                        },
                        {
                            "text":  "hammer/tool",
                            "points":  7
                        },
                        {
                            "text":  "razor",
                            "points":  6
                        },
                        {
                            "text":  "bottle of cologne",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160681,
        "question":  "Where do people who don't trust banks keep their money?",
        "answers":  [
                        {
                            "text":  "mattress/bed",
                            "points":  72
                        },
                        {
                            "text":  "safe",
                            "points":  16
                        },
                        {
                            "text":  "buried in ground",
                            "points":  2
                        },
                        {
                            "text":  "jar/coffee can",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160682,
        "question":  "Name something you might be tempted to do at church if the sermon goes on too long.",
        "answers":  [
                        {
                            "text":  "sleep/yawn",
                            "points":  70
                        },
                        {
                            "text":  "leave/go take dump",
                            "points":  14
                        },
                        {
                            "text":  "play on phone/text",
                            "points":  5
                        },
                        {
                            "text":  "actually pray",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160683,
        "question":  "Besides walking, name something else people do in their sleep.",
        "answers":  [
                        {
                            "text":  "talk",
                            "points":  53
                        },
                        {
                            "text":  "snore",
                            "points":  18
                        },
                        {
                            "text":  "dream",
                            "points":  15
                        },
                        {
                            "text":  "eat",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  160684,
        "question":  "Name something specific you rely on your tongue to do for you.",
        "answers":  [
                        {
                            "text":  "taste",
                            "points":  51
                        },
                        {
                            "text":  "talk",
                            "points":  19
                        },
                        {
                            "text":  "lickety lick!",
                            "points":  18
                        },
                        {
                            "text":  "clean/check teeth",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160685,
        "question":  "We asked 100 married women... If you let him, what would your husband take out a loan to buy for himself?",
        "answers":  [
                        {
                            "text":  "car/truck",
                            "points":  46
                        },
                        {
                            "text":  "boat/yacht",
                            "points":  25
                        },
                        {
                            "text":  "motorcycle",
                            "points":  19
                        },
                        {
                            "text":  "gun",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160686,
        "question":  "Name something embarrassing that can happen when you sneeze.",
        "answers":  [
                        {
                            "text":  "pee yourself",
                            "points":  40
                        },
                        {
                            "text":  "rip a hiney hisser",
                            "points":  24
                        },
                        {
                            "text":  "snot/boogers fly",
                            "points":  24
                        },
                        {
                            "text":  "teeth fall out",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160687,
        "question":  "Name something some people put on their hands and others don't.",
        "answers":  [
                        {
                            "text":  "gloves",
                            "points":  39
                        },
                        {
                            "text":  "lotion",
                            "points":  39
                        },
                        {
                            "text":  "rings",
                            "points":  8
                        },
                        {
                            "text":  "sanitizer",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  160688,
        "question":  "We asked 100 women... Name a country you'd like to send your man to so he can become a better lover.",
        "answers":  [
                        {
                            "text":  "france",
                            "points":  35
                        },
                        {
                            "text":  "italy",
                            "points":  28
                        },
                        {
                            "text":  "spain",
                            "points":  15
                        },
                        {
                            "text":  "australia",
                            "points":  14
                        }
                    ]
    },
    {
        "id":  160689,
        "question":  "We asked 100 single men... I want a woman who will be the ketchup to my what?",
        "answers":  [
                        {
                            "text":  "fries",
                            "points":  28
                        },
                        {
                            "text":  "hot dog",
                            "points":  27
                        },
                        {
                            "text":  "burger",
                            "points":  25
                        },
                        {
                            "text":  "mustard",
                            "points":  12
                        }
                    ]
    },
    {
        "id":  160690,
        "question":  "Instead of the arm, name a place on a rude patient a hospital nurse might stick that needle.",
        "answers":  [
                        {
                            "text":  "that bad booty",
                            "points":  77
                        },
                        {
                            "text":  "hand/finger",
                            "points":  5
                        },
                        {
                            "text":  "leg/thigh",
                            "points":  5
                        },
                        {
                            "text":  "neck/jugular",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160691,
        "question":  "Tell me something you might have a pocket full of.",
        "answers":  [
                        {
                            "text":  "change/cash",
                            "points":  74
                        },
                        {
                            "text":  "lint",
                            "points":  6
                        },
                        {
                            "text":  "candy/gum",
                            "points":  6
                        },
                        {
                            "text":  "sunshine",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160692,
        "question":  "Name something a student might throw at the teacher when her back's turned.",
        "answers":  [
                        {
                            "text":  "paper/spit wad",
                            "points":  72
                        },
                        {
                            "text":  "eraser",
                            "points":  10
                        },
                        {
                            "text":  "pencil/pen",
                            "points":  5
                        },
                        {
                            "text":  "apple/fruit",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160693,
        "question":  "Name a word that rhymes with \"boozer.\"",
        "answers":  [
                        {
                            "text":  "loser",
                            "points":  66
                        },
                        {
                            "text":  "snoozer",
                            "points":  11
                        },
                        {
                            "text":  "cruiser",
                            "points":  11
                        },
                        {
                            "text":  "chooser",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160694,
        "question":  "If birds had a beauty pageant, name a bird who might win the \"longest legs\" category.",
        "answers":  [
                        {
                            "text":  "flamingo",
                            "points":  60
                        },
                        {
                            "text":  "ostrich",
                            "points":  14
                        },
                        {
                            "text":  "stork",
                            "points":  13
                        },
                        {
                            "text":  "crane",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160695,
        "question":  "Name something a funeral home might put a picture of in their brochure.",
        "answers":  [
                        {
                            "text":  "casket",
                            "points":  59
                        },
                        {
                            "text":  "flowers",
                            "points":  23
                        },
                        {
                            "text":  "grave/headstone",
                            "points":  6
                        },
                        {
                            "text":  "dead body",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160696,
        "question":  "Name something of yours that it's cute if a bird lands on but not cute if it poops on.",
        "answers":  [
                        {
                            "text":  "my head/me",
                            "points":  59
                        },
                        {
                            "text":  "car/truck",
                            "points":  22
                        },
                        {
                            "text":  "my cat/pet",
                            "points":  5
                        },
                        {
                            "text":  "outdoor furniture",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160697,
        "question":  "When Tom's girlfriend told him he was too immature, he decided to get rid of all his what?",
        "answers":  [
                        {
                            "text":  "toys/action figures",
                            "points":  58
                        },
                        {
                            "text":  "video games",
                            "points":  17
                        },
                        {
                            "text":  "comic books",
                            "points":  13
                        },
                        {
                            "text":  "girlfriends",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160698,
        "question":  "Name something a basketball coach might throw on the court during a game.",
        "answers":  [
                        {
                            "text":  "towel",
                            "points":  57
                        },
                        {
                            "text":  "basketball",
                            "points":  17
                        },
                        {
                            "text":  "chair",
                            "points":  12
                        },
                        {
                            "text":  "clipboard",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160699,
        "question":  "If you were stranded on a deserted isle, what might you start talking to like it's a person?",
        "answers":  [
                        {
                            "text":  "tree/log",
                            "points":  52
                        },
                        {
                            "text":  "bird/animal",
                            "points":  17
                        },
                        {
                            "text":  "coconut",
                            "points":  16
                        },
                        {
                            "text":  "rock",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  160700,
        "question":  "Name something people stay away from on Friday the 13th.",
        "answers":  [
                        {
                            "text":  "black cats",
                            "points":  46
                        },
                        {
                            "text":  "ladders",
                            "points":  37
                        },
                        {
                            "text":  "casinos/gambling",
                            "points":  5
                        },
                        {
                            "text":  "mirrors",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160701,
        "question":  "We asked 100 single women... You'd dump a man if he ever made fun of your what?",
        "answers":  [
                        {
                            "text":  "weight/figure",
                            "points":  43
                        },
                        {
                            "text":  "family/children",
                            "points":  26
                        },
                        {
                            "text":  "face/beauty",
                            "points":  16
                        },
                        {
                            "text":  "age",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  160702,
        "question":  "Name something that people pour on everything they eat.",
        "answers":  [
                        {
                            "text":  "ketchup",
                            "points":  42
                        },
                        {
                            "text":  "salt",
                            "points":  38
                        },
                        {
                            "text":  "hot/bbq sauce",
                            "points":  6
                        },
                        {
                            "text":  "ranch",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160703,
        "question":  "Name something that would be hard to do if your left foot was a size 7 and your right foot was a size 12.",
        "answers":  [
                        {
                            "text":  "walk/run",
                            "points":  39
                        },
                        {
                            "text":  "buy shoes",
                            "points":  33
                        },
                        {
                            "text":  "dance",
                            "points":  15
                        },
                        {
                            "text":  "jump/hopscotch",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160704,
        "question":  "Name something specific that people might drink a toast to.",
        "answers":  [
                        {
                            "text":  "wedding/engagement",
                            "points":  73
                        },
                        {
                            "text":  "birthday",
                            "points":  8
                        },
                        {
                            "text":  "good health",
                            "points":  5
                        },
                        {
                            "text":  "new year's",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160705,
        "question":  "A man might like to have a credit card that blocks his wife from charging what?",
        "answers":  [
                        {
                            "text":  "clothes/shoes",
                            "points":  67
                        },
                        {
                            "text":  "jewelry",
                            "points":  15
                        },
                        {
                            "text":  "makeup",
                            "points":  5
                        },
                        {
                            "text":  "booze. she's a lush!",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160706,
        "question":  "Pretend you're rich. What do you tell a relative who calls to borrow money yet again?",
        "answers":  [
                        {
                            "text":  "no!/get a job",
                            "points":  63
                        },
                        {
                            "text":  "sure/one last time",
                            "points":  13
                        },
                        {
                            "text":  "sorry, i'm broke",
                            "points":  9
                        },
                        {
                            "text":  "wrong #/no ingles",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160707,
        "question":  "Name something a vampire might tell his shrink that he's getting tired of after 200 years.",
        "answers":  [
                        {
                            "text":  "suck blood/killing",
                            "points":  59
                        },
                        {
                            "text":  "sleep day/up night",
                            "points":  19
                        },
                        {
                            "text":  "living",
                            "points":  6
                        },
                        {
                            "text":  "uncomfy coffin",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  160708,
        "question":  "Name something about a man that might remind you of Abraham Lincoln.",
        "answers":  [
                        {
                            "text":  "his beard",
                            "points":  55
                        },
                        {
                            "text":  "top hat",
                            "points":  14
                        },
                        {
                            "text":  "tall/lanky bod",
                            "points":  13
                        },
                        {
                            "text":  "he's honest",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  160709,
        "question":  "Name a place where a teenager wants his parents to pretend they don't know him.",
        "answers":  [
                        {
                            "text":  "school/prom",
                            "points":  46
                        },
                        {
                            "text":  "mall/store",
                            "points":  36
                        },
                        {
                            "text":  "movies",
                            "points":  5
                        },
                        {
                            "text":  "party",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160710,
        "question":  "At the deli, they like to play \"hide the\" what?",
        "answers":  [
                        {
                            "text":  "salami/meat",
                            "points":  73
                        },
                        {
                            "text":  "pickle",
                            "points":  6
                        },
                        {
                            "text":  "cheese",
                            "points":  6
                        },
                        {
                            "text":  "prices",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160711,
        "question":  "Name a game grandma cheats at even when she's playing with the grandchildren.",
        "answers":  [
                        {
                            "text":  "cards/go fish",
                            "points":  68
                        },
                        {
                            "text":  "monopoly",
                            "points":  11
                        },
                        {
                            "text":  "checkers",
                            "points":  5
                        },
                        {
                            "text":  "hide-and-seek",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160712,
        "question":  "Money doesn't grow on trees. But what can you grow to make a lot of money?",
        "answers":  [
                        {
                            "text":  "pot",
                            "points":  66
                        },
                        {
                            "text":  "fruits & veggies",
                            "points":  16
                        },
                        {
                            "text":  "investment/interest",
                            "points":  4
                        },
                        {
                            "text":  "trees/x-mas trees",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160713,
        "question":  "Name something the farmer fell off of that gave all the animals a big laugh.",
        "answers":  [
                        {
                            "text":  "tractor",
                            "points":  63
                        },
                        {
                            "text":  "horse",
                            "points":  12
                        },
                        {
                            "text":  "fence",
                            "points":  9
                        },
                        {
                            "text":  "barn loft/roof",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160714,
        "question":  "Name something that might be dead in the water.",
        "answers":  [
                        {
                            "text":  "fish/animal",
                            "points":  62
                        },
                        {
                            "text":  "boat/ship",
                            "points":  14
                        },
                        {
                            "text":  "person",
                            "points":  8
                        },
                        {
                            "text":  "plant/kelp",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160715,
        "question":  "Name an animal that has a lot of teeth.",
        "answers":  [
                        {
                            "text":  "shark",
                            "points":  46
                        },
                        {
                            "text":  "gator/croc",
                            "points":  32
                        },
                        {
                            "text":  "dog",
                            "points":  8
                        },
                        {
                            "text":  "wolf",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160716,
        "question":  "It never feels like Christmas until you see what?",
        "answers":  [
                        {
                            "text":  "snow/frosty",
                            "points":  38
                        },
                        {
                            "text":  "xmas tree/lights",
                            "points":  34
                        },
                        {
                            "text":  "santa claus",
                            "points":  12
                        },
                        {
                            "text":  "christmas movie",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160717,
        "question":  "Name something you shouldn't lend someone unless you're ready to kiss it good-bye.",
        "answers":  [
                        {
                            "text":  "money",
                            "points":  70
                        },
                        {
                            "text":  "tools",
                            "points":  7
                        },
                        {
                            "text":  "car",
                            "points":  6
                        },
                        {
                            "text":  "book",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160718,
        "question":  "Name a place so filled with germs, you're afraid to touch anything.",
        "answers":  [
                        {
                            "text":  "bathroom/my own",
                            "points":  60
                        },
                        {
                            "text":  "hospital/dr. office",
                            "points":  19
                        },
                        {
                            "text":  "sewer/septic tank",
                            "points":  5
                        },
                        {
                            "text":  "dumpster/city dump",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160719,
        "question":  "We asked 100 men... Name something you didn't like as a boy that you now like as a man.",
        "answers":  [
                        {
                            "text":  "broccoli/food",
                            "points":  53
                        },
                        {
                            "text":  "chicks",
                            "points":  26
                        },
                        {
                            "text":  "watching the news",
                            "points":  5
                        },
                        {
                            "text":  "booze",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160720,
        "question":  "Name a pet that's pretty useless when it comes to scaring away a burglar.",
        "answers":  [
                        {
                            "text":  "cat",
                            "points":  34
                        },
                        {
                            "text":  "fish",
                            "points":  33
                        },
                        {
                            "text":  "wimpy dog",
                            "points":  11
                        },
                        {
                            "text":  "hamster",
                            "points":  10
                        }
                    ]
    },
    {
        "id":  160721,
        "question":  "Besides gum, name something people chew on but don't swallow.",
        "answers":  [
                        {
                            "text":  "chewing tobacco",
                            "points":  72
                        },
                        {
                            "text":  "pencil/pen",
                            "points":  6
                        },
                        {
                            "text":  "straw",
                            "points":  5
                        },
                        {
                            "text":  "toothpick",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160722,
        "question":  "Name something that's hard to eat quietly.",
        "answers":  [
                        {
                            "text":  "chips",
                            "points":  72
                        },
                        {
                            "text":  "celery",
                            "points":  6
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
        "id":  160723,
        "question":  "Name something you would be willing to give up in order to have a great body.",
        "answers":  [
                        {
                            "text":  "good food/coffee",
                            "points":  71
                        },
                        {
                            "text":  "soda",
                            "points":  8
                        },
                        {
                            "text":  "money",
                            "points":  5
                        },
                        {
                            "text":  "tv",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160724,
        "question":  "Name a New Year's resolution you make every year and you break it every year.",
        "answers":  [
                        {
                            "text":  "diet/exercise",
                            "points":  70
                        },
                        {
                            "text":  "quit smoking",
                            "points":  9
                        },
                        {
                            "text":  "save $/get rich",
                            "points":  5
                        },
                        {
                            "text":  "read more",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160725,
        "question":  "Name someone who said to you, \"This is for your own good,\" but it wasn't.",
        "answers":  [
                        {
                            "text":  "my mom/dad",
                            "points":  64
                        },
                        {
                            "text":  "my teacher",
                            "points":  10
                        },
                        {
                            "text":  "my doc/dentist",
                            "points":  9
                        },
                        {
                            "text":  "my spouse/mate",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160726,
        "question":  "Name a place you hope to be spending a lot of time when you retire.",
        "answers":  [
                        {
                            "text":  "beach/florida",
                            "points":  55
                        },
                        {
                            "text":  "home/rocking chair",
                            "points":  23
                        },
                        {
                            "text":  "golf course",
                            "points":  7
                        },
                        {
                            "text":  "cruise ship",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160727,
        "question":  "Name something comedians need.",
        "answers":  [
                        {
                            "text":  "jokes/humor",
                            "points":  51
                        },
                        {
                            "text":  "audience/laughs",
                            "points":  27
                        },
                        {
                            "text":  "microphone",
                            "points":  5
                        },
                        {
                            "text":  "talent/timing",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160728,
        "question":  "Name something that you wish you knew how it was going to end.",
        "answers":  [
                        {
                            "text":  "life/the world",
                            "points":  40
                        },
                        {
                            "text":  "movie/show/story",
                            "points":  28
                        },
                        {
                            "text":  "rela'ship/marriage",
                            "points":  16
                        },
                        {
                            "text":  "job/annual review",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160729,
        "question":  "Name the best place at work to take a power nap.",
        "answers":  [
                        {
                            "text":  "office/under desk",
                            "points":  40
                        },
                        {
                            "text":  "bathroom/stall",
                            "points":  26
                        },
                        {
                            "text":  "lounge/break room",
                            "points":  13
                        },
                        {
                            "text":  "my car",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  160730,
        "question":  "Name something of yours that you consider a good fit.",
        "answers":  [
                        {
                            "text":  "my clothes/shoes",
                            "points":  72
                        },
                        {
                            "text":  "my honey",
                            "points":  8
                        },
                        {
                            "text":  "my car",
                            "points":  3
                        },
                        {
                            "text":  "my 3 personalities",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160731,
        "question":  "Give me a word that rhymes with \"poker.\"",
        "answers":  [
                        {
                            "text":  "joker",
                            "points":  59
                        },
                        {
                            "text":  "choker",
                            "points":  14
                        },
                        {
                            "text":  "broker",
                            "points":  7
                        },
                        {
                            "text":  "toker",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  160732,
        "question":  "Tell me why someone left a note on your car.",
        "answers":  [
                        {
                            "text":  "they hit it",
                            "points":  49
                        },
                        {
                            "text":  "bad parking job",
                            "points":  23
                        },
                        {
                            "text":  "move it/in their space",
                            "points":  9
                        },
                        {
                            "text":  "they want me bad",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160733,
        "question":  "For a perfect wedding, a woman needs a perfect what?",
        "answers":  [
                        {
                            "text":  "man/partner",
                            "points":  44
                        },
                        {
                            "text":  "dress",
                            "points":  34
                        },
                        {
                            "text":  "day/sunny day",
                            "points":  5
                        },
                        {
                            "text":  "location",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160734,
        "question":  "Name something you might be holding when you're working out at a gym.",
        "answers":  [
                        {
                            "text":  "weights/barbell",
                            "points":  44
                        },
                        {
                            "text":  "water/drink",
                            "points":  24
                        },
                        {
                            "text":  "phone",
                            "points":  10
                        },
                        {
                            "text":  "towel",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  160735,
        "question":  "Name a place a man might not be able to take his date if she were a nudist.",
        "answers":  [
                        {
                            "text":  "church",
                            "points":  42
                        },
                        {
                            "text":  "restaurant",
                            "points":  23
                        },
                        {
                            "text":  "home/to meet family",
                            "points":  17
                        },
                        {
                            "text":  "theater/movies",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160736,
        "question":  "Name something from a hotel that a hotel maid might have dozens of at home.",
        "answers":  [
                        {
                            "text":  "towels/washcloths",
                            "points":  37
                        },
                        {
                            "text":  "shampoo",
                            "points":  26
                        },
                        {
                            "text":  "soap",
                            "points":  20
                        },
                        {
                            "text":  "pens",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160737,
        "question":  "Fill in the blank: I wish I knew the meaning of ______.",
        "answers":  [
                        {
                            "text":  "life",
                            "points":  72
                        },
                        {
                            "text":  "love",
                            "points":  9
                        },
                        {
                            "text":  "animal behavior",
                            "points":  2
                        },
                        {
                            "text":  "money/wealth",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  160738,
        "question":  "Name a breed of dog that we can all agree is annoying.",
        "answers":  [
                        {
                            "text":  "chihuahua",
                            "points":  70
                        },
                        {
                            "text":  "poodle",
                            "points":  6
                        },
                        {
                            "text":  "yorkie",
                            "points":  5
                        },
                        {
                            "text":  "pit bull",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160739,
        "question":  "Name a place where you'll find more single guys than married men.",
        "answers":  [
                        {
                            "text":  "bar/nightclub",
                            "points":  69
                        },
                        {
                            "text":  "strip joint",
                            "points":  7
                        },
                        {
                            "text":  "school/college",
                            "points":  6
                        },
                        {
                            "text":  "dating site/tinder",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160740,
        "question":  "Name a place where you're at where the clock never seems to move.",
        "answers":  [
                        {
                            "text":  "work/meeting",
                            "points":  66
                        },
                        {
                            "text":  "school/detention",
                            "points":  9
                        },
                        {
                            "text":  "church",
                            "points":  5
                        },
                        {
                            "text":  "dr./dentist",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160741,
        "question":  "These days, more people should think before they what?",
        "answers":  [
                        {
                            "text":  "speak",
                            "points":  65
                        },
                        {
                            "text":  "text",
                            "points":  8
                        },
                        {
                            "text":  "act/\"leap\"",
                            "points":  6
                        },
                        {
                            "text":  "post on social media",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  160742,
        "question":  "Name something where softer is better.",
        "answers":  [
                        {
                            "text":  "bed/bedding",
                            "points":  57
                        },
                        {
                            "text":  "butter",
                            "points":  11
                        },
                        {
                            "text":  "skin/body",
                            "points":  9
                        },
                        {
                            "text":  "tp/tissue",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  160743,
        "question":  "Name a place where women are happy and men are nervous.",
        "answers":  [
                        {
                            "text":  "store/jeweler",
                            "points":  45
                        },
                        {
                            "text":  "wedding/church altar",
                            "points":  31
                        },
                        {
                            "text":  "beauty salon",
                            "points":  5
                        },
                        {
                            "text":  "doc/delivery room",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160744,
        "question":  "Name something specific a first-time dad might do when he sees his newborn baby.",
        "answers":  [
                        {
                            "text":  "cry",
                            "points":  52
                        },
                        {
                            "text":  "smile",
                            "points":  24
                        },
                        {
                            "text":  "stare in shock",
                            "points":  5
                        },
                        {
                            "text":  "talk \"baby talk\"",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160745,
        "question":  "Name an annoying bug that someone reminds you of when they bug you.",
        "answers":  [
                        {
                            "text":  "mosquito",
                            "points":  43
                        },
                        {
                            "text":  "fly",
                            "points":  23
                        },
                        {
                            "text":  "gnat",
                            "points":  13
                        },
                        {
                            "text":  "cockroach",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160746,
        "question":  "Janet said, \"I dumped my boyfriend after I saw him kissing my\" what?",
        "answers":  [
                        {
                            "text":  "bestie",
                            "points":  39
                        },
                        {
                            "text":  "sister",
                            "points":  28
                        },
                        {
                            "text":  "mom",
                            "points":  10
                        },
                        {
                            "text":  "dog",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  160747,
        "question":  "A woman might say, \"That man has the nicest ______ I've ever seen.\"",
        "answers":  [
                        {
                            "text":  "biscuit/booty",
                            "points":  31
                        },
                        {
                            "text":  "smile/chompers",
                            "points":  28
                        },
                        {
                            "text":  "eyes",
                            "points":  21
                        },
                        {
                            "text":  "hair/pompadour",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160748,
        "question":  "Name something that contains the word \"pod.\"",
        "answers":  [
                        {
                            "text":  "podcast",
                            "points":  29
                        },
                        {
                            "text":  "ipod",
                            "points":  27
                        },
                        {
                            "text":  "pea pod",
                            "points":  19
                        },
                        {
                            "text":  "tripod",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  160749,
        "question":  "If animals talked, name one that would tell a hunter, \"That camouflage ain't fooling nobody.\"",
        "answers":  [
                        {
                            "text":  "deer",
                            "points":  69
                        },
                        {
                            "text":  "bear",
                            "points":  6
                        },
                        {
                            "text":  "chameleon",
                            "points":  4
                        },
                        {
                            "text":  "lion",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160750,
        "question":  "What's the most important thing a mother can teach her son to do?",
        "answers":  [
                        {
                            "text":  "respect/treat well",
                            "points":  66
                        },
                        {
                            "text":  "be honest",
                            "points":  9
                        },
                        {
                            "text":  "to love/care",
                            "points":  4
                        },
                        {
                            "text":  "to cook",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160751,
        "question":  "Name something that starts with the letter B worn above the waist.",
        "answers":  [
                        {
                            "text":  "bra",
                            "points":  53
                        },
                        {
                            "text":  "belt",
                            "points":  16
                        },
                        {
                            "text":  "blouse",
                            "points":  7
                        },
                        {
                            "text":  "bow tie",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  160752,
        "question":  "We asked 100 married women... If you ever left your husband, what would you take on your way out the door?",
        "answers":  [
                        {
                            "text":  "cash/credit card",
                            "points":  48
                        },
                        {
                            "text":  "the pets",
                            "points":  20
                        },
                        {
                            "text":  "car/keys",
                            "points":  8
                        },
                        {
                            "text":  "pictures",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  160753,
        "question":  "Name something that people say is heaven-sent.",
        "answers":  [
                        {
                            "text":  "kids/grandkids",
                            "points":  47
                        },
                        {
                            "text":  "cash/lotto",
                            "points":  15
                        },
                        {
                            "text":  "hottie/my boo",
                            "points":  14
                        },
                        {
                            "text":  "food, glorious food",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  160754,
        "question":  "Name a basketball player who's a superman.",
        "answers":  [
                        {
                            "text":  "michael jordan",
                            "points":  45
                        },
                        {
                            "text":  "lebron james",
                            "points":  28
                        },
                        {
                            "text":  "shaquille o'neal",
                            "points":  7
                        },
                        {
                            "text":  "kareem abdul-jabbar",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  160755,
        "question":  "Fill in the blank: Kick ______.",
        "answers":  [
                        {
                            "text":  "kickball",
                            "points":  34
                        },
                        {
                            "text":  "kick butt/arse",
                            "points":  29
                        },
                        {
                            "text":  "kickback",
                            "points":  12
                        },
                        {
                            "text":  "kickboxing",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  160756,
        "question":  "Name an animal that, if it could talk, would speak very slowly.",
        "answers":  [
                        {
                            "text":  "sloth",
                            "points":  56
                        },
                        {
                            "text":  "turtle",
                            "points":  16
                        },
                        {
                            "text":  "elephant",
                            "points":  5
                        },
                        {
                            "text":  "lion",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160757,
        "question":  "Name something that's salty.",
        "answers":  [
                        {
                            "text":  "potato chip/chip",
                            "points":  46
                        },
                        {
                            "text":  "pretzel",
                            "points":  22
                        },
                        {
                            "text":  "peanut/nut",
                            "points":  9
                        },
                        {
                            "text":  "ocean/sea",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160758,
        "question":  "Name a place where if you have to yawn, you try to hide it.",
        "answers":  [
                        {
                            "text":  "church",
                            "points":  45
                        },
                        {
                            "text":  "work/meeting",
                            "points":  29
                        },
                        {
                            "text":  "school",
                            "points":  4
                        },
                        {
                            "text":  "funeral",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160759,
        "question":  "Name something from the sea that starts with the letter C.",
        "answers":  [
                        {
                            "text":  "crab",
                            "points":  43
                        },
                        {
                            "text":  "coral",
                            "points":  23
                        },
                        {
                            "text":  "crustacean",
                            "points":  9
                        },
                        {
                            "text":  "clam",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  160760,
        "question":  "Name something other people have stuck you with.",
        "answers":  [
                        {
                            "text":  "a bill/debt",
                            "points":  39
                        },
                        {
                            "text":  "work/chores",
                            "points":  21
                        },
                        {
                            "text":  "their kids",
                            "points":  17
                        },
                        {
                            "text":  "needle/pin",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160761,
        "question":  "Fill in the blank: The bigger the dog, the bigger the ______.",
        "answers":  [
                        {
                            "text":  "bite",
                            "points":  29
                        },
                        {
                            "text":  "bark",
                            "points":  28
                        },
                        {
                            "text":  "poop pile",
                            "points":  20
                        },
                        {
                            "text":  "fight",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160762,
        "question":  "We asked 100 men... Name something you don't mind wearing the same of for several days.",
        "answers":  [
                        {
                            "text":  "jeans/pants",
                            "points":  51
                        },
                        {
                            "text":  "shirt/tee",
                            "points":  13
                        },
                        {
                            "text":  "hat",
                            "points":  9
                        },
                        {
                            "text":  "gym shorts/shorts",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  160763,
        "question":  "Name an animal with more beautiful eyes than yours.",
        "answers":  [
                        {
                            "text":  "cat",
                            "points":  43
                        },
                        {
                            "text":  "dog/husky",
                            "points":  24
                        },
                        {
                            "text":  "deer",
                            "points":  7
                        },
                        {
                            "text":  "tiger",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  160764,
        "question":  "Name something grown-ups carry as a security blanket.",
        "answers":  [
                        {
                            "text":  "phone",
                            "points":  42
                        },
                        {
                            "text":  "purse/wallet",
                            "points":  30
                        },
                        {
                            "text":  "keys",
                            "points":  5
                        },
                        {
                            "text":  "a gun",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160765,
        "question":  "Fill in the blank: Call 911 -- my son's pet ______ just got sucked up into the vacuum cleaner.",
        "answers":  [
                        {
                            "text":  "hamster",
                            "points":  36
                        },
                        {
                            "text":  "snake",
                            "points":  30
                        },
                        {
                            "text":  "mouse/rat",
                            "points":  9
                        },
                        {
                            "text":  "gerbil",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  160766,
        "question":  "Name something that no man likes to see his wife use to chop nuts.",
        "answers":  [
                        {
                            "text":  "knife/cleaver",
                            "points":  44
                        },
                        {
                            "text":  "hammer/mallet",
                            "points":  22
                        },
                        {
                            "text":  "axe/hatchet",
                            "points":  9
                        },
                        {
                            "text":  "nutcracker",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160767,
        "question":  "Name a city that has a lot of conceited people living in it.",
        "answers":  [
                        {
                            "text":  "l.a./bev hills",
                            "points":  43
                        },
                        {
                            "text":  "new york",
                            "points":  29
                        },
                        {
                            "text":  "miami",
                            "points":  4
                        },
                        {
                            "text":  "las vegas",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160768,
        "question":  "Nothing is better than a great big what?",
        "answers":  [
                        {
                            "text":  "meal/steak",
                            "points":  34
                        },
                        {
                            "text":  "hug",
                            "points":  20
                        },
                        {
                            "text":  "pile of cash",
                            "points":  18
                        },
                        {
                            "text":  "tongue kiss",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  160769,
        "question":  "Tell me the absolute worst person to confess to you, \"I have no clue what I'm doing.\"",
        "answers":  [
                        {
                            "text":  "doctor/dentist",
                            "points":  42
                        },
                        {
                            "text":  "boss/coworker",
                            "points":  20
                        },
                        {
                            "text":  "pilot",
                            "points":  10
                        },
                        {
                            "text":  "mate/spouse",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  160770,
        "question":  "Name a place where the rich and famous get special treatment.",
        "answers":  [
                        {
                            "text":  "spa",
                            "points":  41
                        },
                        {
                            "text":  "restaurant/kfc",
                            "points":  24
                        },
                        {
                            "text":  "hotel",
                            "points":  8
                        },
                        {
                            "text":  "courtroom",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  160771,
        "question":  "Name something a man might do like a bear.",
        "answers":  [
                        {
                            "text":  "sleep/snore",
                            "points":  34
                        },
                        {
                            "text":  "growl/grunt",
                            "points":  24
                        },
                        {
                            "text":  "eat",
                            "points":  12
                        },
                        {
                            "text":  "scratch",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  160772,
        "question":  "If you had to trade your nose with the nose of an animal, which would you pick?",
        "answers":  [
                        {
                            "text":  "cat",
                            "points":  33
                        },
                        {
                            "text":  "dog",
                            "points":  31
                        },
                        {
                            "text":  "elephant",
                            "points":  7
                        },
                        {
                            "text":  "bunny rabbit",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  160773,
        "question":  "Name a place you'd hate to get stuck next to someone who just won't shut up.",
        "answers":  [
                        {
                            "text":  "plane/overseas",
                            "points":  43
                        },
                        {
                            "text":  "elevator",
                            "points":  19
                        },
                        {
                            "text":  "theater/movie",
                            "points":  11
                        },
                        {
                            "text":  "bus",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  160774,
        "question":  "Name something you associate with the word \"puff.\"",
        "answers":  [
                        {
                            "text":  "smoking cigs/cigars",
                            "points":  36
                        },
                        {
                            "text":  "magic dragon/joint",
                            "points":  21
                        },
                        {
                            "text":  "powder puff",
                            "points":  13
                        },
                        {
                            "text":  "puff daddy",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  160775,
        "question":  "Name something a man might sell his soul to the devil for that a woman wouldn't.",
        "answers":  [
                        {
                            "text":  "babes, boobs & booty",
                            "points":  29
                        },
                        {
                            "text":  "chedda!",
                            "points":  23
                        },
                        {
                            "text":  "car",
                            "points":  14
                        },
                        {
                            "text":  "mega moose knuckle",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  160776,
        "question":  "Which city has the most interesting people?",
        "answers":  [
                        {
                            "text":  "new york",
                            "points":  40
                        },
                        {
                            "text":  "los angeles",
                            "points":  13
                        },
                        {
                            "text":  "san francisco",
                            "points":  12
                        },
                        {
                            "text":  "las vegas",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  160777,
        "question":  "Fill in the blank: A wife might say, \"I need a new husband who isn't\" what?",
        "answers":  [
                        {
                            "text":  "lazy",
                            "points":  21
                        },
                        {
                            "text":  "a jerk",
                            "points":  20
                        },
                        {
                            "text":  "a broke joke",
                            "points":  11
                        },
                        {
                            "text":  "cheap",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  160778,
        "question":  "Finish this expression: Make what?",
        "answers":  [
                        {
                            "text":  "make love/not war",
                            "points":  29
                        },
                        {
                            "text":  "make my day",
                            "points":  17
                        },
                        {
                            "text":  "make a wish",
                            "points":  5
                        },
                        {
                            "text":  "make money",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  160779,
        "question":  "Name an expression that contains the word \"wheel.\"",
        "answers":  [
                        {
                            "text":  "wheel of fortune",
                            "points":  23
                        },
                        {
                            "text":  "big wheel",
                            "points":  13
                        },
                        {
                            "text":  "squeaky wheel...",
                            "points":  9
                        },
                        {
                            "text":  "third wheel",
                            "points":  9
                        }
                    ]
    }
];
