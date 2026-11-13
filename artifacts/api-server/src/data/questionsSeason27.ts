import type { SurveyQuestion } from "./questions.js";

// Season 27 set: a separate question set from the main bank in questions.ts.
// Boards from Family Feud season 27 (taped in 2025), including the 2025
// season of Celebrity Family Feud, as transcribed at
// https://mstiescott.neocities.org/feud27 (crawled 2026-11-13).
// Ids start at 100001 (each season has its own block of 10,000), so they
// never clash with the main bank (1-8782), AI questions (9000+) or other
// seasons. The site's 52 one-answer boards are left out, so a face-off can
// never clear a board by itself.
export const SEASON27_SET = "season27";
export const SEASON27_ID_START = 100001;

export function isSeason27Question(id: number): boolean {
  return id >= SEASON27_ID_START && id < SEASON27_ID_START + 10000;
}

export const season27Questions: SurveyQuestion[] = [
    {
        "id":  100001,
        "question":  "I don't like the pool in my apartment building because it's always filled with what?",
        "answers":  [
                        {
                            "text":  "kids/gross people",
                            "points":  53
                        },
                        {
                            "text":  "leaves",
                            "points":  17
                        },
                        {
                            "text":  "pee/poo",
                            "points":  14
                        },
                        {
                            "text":  "bugs",
                            "points":  6
                        },
                        {
                            "text":  "dirt/sand",
                            "points":  4
                        },
                        {
                            "text":  "trash",
                            "points":  2
                        },
                        {
                            "text":  "chlorine",
                            "points":  2
                        },
                        {
                            "text":  "algae",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100002,
        "question":  "You can't help but move what part of your body when your favorite song is on?",
        "answers":  [
                        {
                            "text":  "hips/booty",
                            "points":  34
                        },
                        {
                            "text":  "toes/feet",
                            "points":  24
                        },
                        {
                            "text":  "head",
                            "points":  15
                        },
                        {
                            "text":  "arms",
                            "points":  10
                        },
                        {
                            "text":  "legs",
                            "points":  10
                        },
                        {
                            "text":  "belly",
                            "points":  3
                        },
                        {
                            "text":  "mouth",
                            "points":  2
                        },
                        {
                            "text":  "shoulders",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100003,
        "question":  "Name something you do while working out that's not very sexy.",
        "answers":  [
                        {
                            "text":  "sweat",
                            "points":  65
                        },
                        {
                            "text":  "fart",
                            "points":  16
                        },
                        {
                            "text":  "squats/exercises",
                            "points":  6
                        },
                        {
                            "text":  "adjust clothes/wedgie",
                            "points":  3
                        },
                        {
                            "text":  "pick/wipe nose",
                            "points":  3
                        },
                        {
                            "text":  "stretch",
                            "points":  2
                        },
                        {
                            "text":  "grunt",
                            "points":  2
                        },
                        {
                            "text":  "pant/tongue out",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100004,
        "question":  "What might you do if your family didn't ask you to audition for \"Family Feud\" with them?",
        "answers":  [
                        {
                            "text":  "nada/oh well!",
                            "points":  31
                        },
                        {
                            "text":  "celebrate/relieved",
                            "points":  21
                        },
                        {
                            "text":  "be sad/cry",
                            "points":  18
                        },
                        {
                            "text":  "mad/cuss out",
                            "points":  15
                        },
                        {
                            "text":  "ask why",
                            "points":  4
                        },
                        {
                            "text":  "disown/cut off",
                            "points":  4
                        },
                        {
                            "text":  "wish 'em luck",
                            "points":  4
                        },
                        {
                            "text":  "show up anyway!",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100005,
        "question":  "We asked 100 parents... Some days, you'd happily trade your kids for what?",
        "answers":  [
                        {
                            "text":  "cat/pet",
                            "points":  29
                        },
                        {
                            "text":  "\"me day\"/silence",
                            "points":  25
                        },
                        {
                            "text":  "sleep",
                            "points":  17
                        },
                        {
                            "text":  "money",
                            "points":  12
                        },
                        {
                            "text":  "a vacation",
                            "points":  9
                        },
                        {
                            "text":  "coffee/meal",
                            "points":  3
                        },
                        {
                            "text":  "new car",
                            "points":  2
                        },
                        {
                            "text":  "booze",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100006,
        "question":  "We asked 100 men... Fill in the blank: She's no sugar mama if she's not buying me ______.",
        "answers":  [
                        {
                            "text":  "food/sugar!",
                            "points":  28
                        },
                        {
                            "text":  "cars",
                            "points":  23
                        },
                        {
                            "text":  "watches/jewelry",
                            "points":  12
                        },
                        {
                            "text":  "trips",
                            "points":  11
                        },
                        {
                            "text":  "clothes",
                            "points":  11
                        },
                        {
                            "text":  "booze",
                            "points":  7
                        },
                        {
                            "text":  "gasoline",
                            "points":  4
                        },
                        {
                            "text":  "boats",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100007,
        "question":  "Name something of yours that you'd hate a friend to say smells bad.",
        "answers":  [
                        {
                            "text":  "my body/pits",
                            "points":  27
                        },
                        {
                            "text":  "my breath",
                            "points":  25
                        },
                        {
                            "text":  "my home/furniture",
                            "points":  18
                        },
                        {
                            "text":  "my clothes",
                            "points":  9
                        },
                        {
                            "text":  "my car",
                            "points":  8
                        },
                        {
                            "text":  "my food",
                            "points":  5
                        },
                        {
                            "text":  "my cologne",
                            "points":  4
                        },
                        {
                            "text":  "my hair",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100008,
        "question":  "Name a part of your body you might use like a musical instrument.",
        "answers":  [
                        {
                            "text":  "mouth/lips/teeth",
                            "points":  24
                        },
                        {
                            "text":  "fingers/hands",
                            "points":  24
                        },
                        {
                            "text":  "legs",
                            "points":  14
                        },
                        {
                            "text":  "mr. happy",
                            "points":  12
                        },
                        {
                            "text":  "tush",
                            "points":  9
                        },
                        {
                            "text":  "belly",
                            "points":  8
                        },
                        {
                            "text":  "arm/armpit",
                            "points":  6
                        },
                        {
                            "text":  "feet",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100009,
        "question":  "We asked 100 married men... At your reunion, a hot classmate confesses that you were her secret crush. What do you do?",
        "answers":  [
                        {
                            "text":  "\"i'm married\"",
                            "points":  23
                        },
                        {
                            "text":  "say \"thank you\"",
                            "points":  23
                        },
                        {
                            "text":  "smile/laugh",
                            "points":  17
                        },
                        {
                            "text":  "ask out/get number",
                            "points":  15
                        },
                        {
                            "text":  "nothing/ignore",
                            "points":  10
                        },
                        {
                            "text":  "run!",
                            "points":  5
                        },
                        {
                            "text":  "kiss her",
                            "points":  4
                        },
                        {
                            "text":  "confess the same",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100010,
        "question":  "Bad Santa gives the naughty kids gifts and the nice kids what?",
        "answers":  [
                        {
                            "text":  "coal/rocks",
                            "points":  76
                        },
                        {
                            "text":  "rejected toys",
                            "points":  5
                        },
                        {
                            "text":  "veggies/food",
                            "points":  5
                        },
                        {
                            "text":  "advice/\"be bad!\"",
                            "points":  3
                        },
                        {
                            "text":  "stocking full o' poo",
                            "points":  3
                        },
                        {
                            "text":  "socks/clothes",
                            "points":  2
                        },
                        {
                            "text":  "spankings",
                            "points":  2
                        },
                        {
                            "text":  "the finger",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100011,
        "question":  "If the bathroom is occupied at a house party, name something you might pee in.",
        "answers":  [
                        {
                            "text":  "plant/yard",
                            "points":  50
                        },
                        {
                            "text":  "cup/bottle/can",
                            "points":  26
                        },
                        {
                            "text":  "kitchen sink",
                            "points":  10
                        },
                        {
                            "text":  "bucket",
                            "points":  3
                        },
                        {
                            "text":  "trash can",
                            "points":  3
                        },
                        {
                            "text":  "alley",
                            "points":  2
                        },
                        {
                            "text":  "jar",
                            "points":  2
                        },
                        {
                            "text":  "vase/urn",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100012,
        "question":  "We asked 100 men... What superhero would you like to be called in the bedroom?",
        "answers":  [
                        {
                            "text":  "superman",
                            "points":  49
                        },
                        {
                            "text":  "iron man",
                            "points":  13
                        },
                        {
                            "text":  "aquaman",
                            "points":  9
                        },
                        {
                            "text":  "hulk",
                            "points":  9
                        },
                        {
                            "text":  "the flash",
                            "points":  6
                        },
                        {
                            "text":  "spider-man",
                            "points":  6
                        },
                        {
                            "text":  "thor",
                            "points":  4
                        },
                        {
                            "text":  "batman",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100013,
        "question":  "If you're really into conserving water, you might stop doing what?",
        "answers":  [
                        {
                            "text":  "bathing",
                            "points":  40
                        },
                        {
                            "text":  "water'g lawn",
                            "points":  25
                        },
                        {
                            "text":  "flush'g toilet",
                            "points":  10
                        },
                        {
                            "text":  "leaving water run'g",
                            "points":  10
                        },
                        {
                            "text":  "drinking it",
                            "points":  4
                        },
                        {
                            "text":  "laundry",
                            "points":  3
                        },
                        {
                            "text":  "using dishwasher",
                            "points":  3
                        },
                        {
                            "text":  "washing the car",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100014,
        "question":  "Your neighbors probably hear you doing what when your windows are open at night?",
        "answers":  [
                        {
                            "text":  "snoring",
                            "points":  32
                        },
                        {
                            "text":  "watch'g tv/dateline",
                            "points":  23
                        },
                        {
                            "text":  "making love",
                            "points":  20
                        },
                        {
                            "text":  "laughing",
                            "points":  7
                        },
                        {
                            "text":  "yelling",
                            "points":  7
                        },
                        {
                            "text":  "singing",
                            "points":  4
                        },
                        {
                            "text":  "talking",
                            "points":  3
                        },
                        {
                            "text":  "showering",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100015,
        "question":  "We asked 100 married men... You thought you were sexting with your wife. But it was who?",
        "answers":  [
                        {
                            "text":  "mother-in-law",
                            "points":  29
                        },
                        {
                            "text":  "sister-in-law",
                            "points":  24
                        },
                        {
                            "text":  "wife's bff",
                            "points":  15
                        },
                        {
                            "text":  "boss",
                            "points":  10
                        },
                        {
                            "text":  "daughter",
                            "points":  9
                        },
                        {
                            "text":  "the babysitter",
                            "points":  6
                        },
                        {
                            "text":  "mistress",
                            "points":  3
                        },
                        {
                            "text":  "my mother",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100016,
        "question":  "Name a taco topping that'd be messy to eat off your lover.",
        "answers":  [
                        {
                            "text":  "salsa/pico de gallo",
                            "points":  25
                        },
                        {
                            "text":  "sour cream",
                            "points":  19
                        },
                        {
                            "text":  "guacamole",
                            "points":  16
                        },
                        {
                            "text":  "hot/taco sauce",
                            "points":  13
                        },
                        {
                            "text":  "cheese",
                            "points":  12
                        },
                        {
                            "text":  "meat/ground beef",
                            "points":  6
                        },
                        {
                            "text":  "lettuce",
                            "points":  4
                        },
                        {
                            "text":  "refried beans",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100017,
        "question":  "Say hello to me in a foreign language.",
        "answers":  [
                        {
                            "text":  "hola",
                            "points":  61
                        },
                        {
                            "text":  "bonjour",
                            "points":  19
                        },
                        {
                            "text":  "ciao",
                            "points":  4
                        },
                        {
                            "text":  "aloha",
                            "points":  4
                        },
                        {
                            "text":  "namaste",
                            "points":  3
                        },
                        {
                            "text":  "moshi moshi",
                            "points":  2
                        },
                        {
                            "text":  "guten tag",
                            "points":  2
                        },
                        {
                            "text":  "buenos dias",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100018,
        "question":  "A nurse might threaten to take away your what if you keep mouthing off?",
        "answers":  [
                        {
                            "text":  "iv/pain meds",
                            "points":  49
                        },
                        {
                            "text":  "call button",
                            "points":  16
                        },
                        {
                            "text":  "tv/remote",
                            "points":  11
                        },
                        {
                            "text":  "oxygen",
                            "points":  7
                        },
                        {
                            "text":  "visiting privileges",
                            "points":  5
                        },
                        {
                            "text":  "meal/jell-o",
                            "points":  4
                        },
                        {
                            "text":  "phone",
                            "points":  3
                        },
                        {
                            "text":  "bedpan",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100019,
        "question":  "What former president could win a twerking contest?",
        "answers":  [
                        {
                            "text":  "barack obama",
                            "points":  46
                        },
                        {
                            "text":  "bill clinton",
                            "points":  35
                        },
                        {
                            "text":  "jfk",
                            "points":  4
                        },
                        {
                            "text":  "jimmy carter",
                            "points":  3
                        },
                        {
                            "text":  "george w. bush",
                            "points":  3
                        },
                        {
                            "text":  "joe biden",
                            "points":  2
                        },
                        {
                            "text":  "william howard taft",
                            "points":  2
                        },
                        {
                            "text":  "abe lincoln",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100020,
        "question":  "Name something a Real Housewife does during a fight.",
        "answers":  [
                        {
                            "text":  "yells/cusses",
                            "points":  45
                        },
                        {
                            "text":  "throws stuff/drink",
                            "points":  18
                        },
                        {
                            "text":  "pulls hair",
                            "points":  12
                        },
                        {
                            "text":  "slaps/punches",
                            "points":  8
                        },
                        {
                            "text":  "scratches",
                            "points":  5
                        },
                        {
                            "text":  "leaves/slams door",
                            "points":  4
                        },
                        {
                            "text":  "flips table",
                            "points":  3
                        },
                        {
                            "text":  "removes earrings",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100021,
        "question":  "You might get offended if a thief didn't want to steal your what?",
        "answers":  [
                        {
                            "text":  "jewelry/watch",
                            "points":  39
                        },
                        {
                            "text":  "car",
                            "points":  22
                        },
                        {
                            "text":  "clothes",
                            "points":  14
                        },
                        {
                            "text":  "cute wallet/purse",
                            "points":  9
                        },
                        {
                            "text":  "food/cooking",
                            "points":  5
                        },
                        {
                            "text":  "tv",
                            "points":  4
                        },
                        {
                            "text":  "artwork",
                            "points":  2
                        },
                        {
                            "text":  "stereo/music",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100022,
        "question":  "Your child just came home with their first bad report card. Now you know they'll never grow up to be a what?",
        "answers":  [
                        {
                            "text":  "doc/surgeon",
                            "points":  39
                        },
                        {
                            "text":  "scientist",
                            "points":  20
                        },
                        {
                            "text":  "genius/nerd",
                            "points":  16
                        },
                        {
                            "text":  "teacher",
                            "points":  8
                        },
                        {
                            "text":  "lawyer",
                            "points":  5
                        },
                        {
                            "text":  "mathematician",
                            "points":  3
                        },
                        {
                            "text":  "engineer",
                            "points":  3
                        },
                        {
                            "text":  "a success",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100023,
        "question":  "Name something a fireman hopes a person doesn't do when he's carrying them down the ladder.",
        "answers":  [
                        {
                            "text":  "go potty/fart",
                            "points":  37
                        },
                        {
                            "text":  "fall/jump",
                            "points":  17
                        },
                        {
                            "text":  "throw up",
                            "points":  11
                        },
                        {
                            "text":  "struggle/squirm",
                            "points":  10
                        },
                        {
                            "text":  "scream/cry",
                            "points":  10
                        },
                        {
                            "text":  "pass out",
                            "points":  5
                        },
                        {
                            "text":  "die",
                            "points":  4
                        },
                        {
                            "text":  "kiss/get fresh",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100024,
        "question":  "At the car wash, a cheap person might also hold what out the window to get it clean?",
        "answers":  [
                        {
                            "text":  "laundry/shoes",
                            "points":  35
                        },
                        {
                            "text":  "car mats",
                            "points":  22
                        },
                        {
                            "text":  "dog/pet",
                            "points":  11
                        },
                        {
                            "text":  "themself/hair",
                            "points":  9
                        },
                        {
                            "text":  "dishes",
                            "points":  9
                        },
                        {
                            "text":  "sunglasses",
                            "points":  5
                        },
                        {
                            "text":  "seat covers",
                            "points":  4
                        },
                        {
                            "text":  "kid",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100025,
        "question":  "Tell me something a woman's not going to do after she gets her hair done.",
        "answers":  [
                        {
                            "text":  "swim meet",
                            "points":  35
                        },
                        {
                            "text":  "shower/wash it",
                            "points":  21
                        },
                        {
                            "text":  "frolic in rain",
                            "points":  16
                        },
                        {
                            "text":  "car window/top down",
                            "points":  10
                        },
                        {
                            "text":  "run/exercise",
                            "points":  8
                        },
                        {
                            "text":  "harley ride",
                            "points":  3
                        },
                        {
                            "text":  "wild whoopee",
                            "points":  2
                        },
                        {
                            "text":  "spa treatment",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100026,
        "question":  "Name something your ex sends you if they want to get back together.",
        "answers":  [
                        {
                            "text":  "flowers",
                            "points":  32
                        },
                        {
                            "text":  "pics/nudes",
                            "points":  22
                        },
                        {
                            "text":  "love note/card",
                            "points":  20
                        },
                        {
                            "text":  "text/wink emoji",
                            "points":  10
                        },
                        {
                            "text":  "jewelry",
                            "points":  4
                        },
                        {
                            "text":  "money/bribe",
                            "points":  4
                        },
                        {
                            "text":  "food/chocolate",
                            "points":  3
                        },
                        {
                            "text":  "their undies",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100027,
        "question":  "Name something people do in the mirror when no one is around.",
        "answers":  [
                        {
                            "text":  "look at self/flex",
                            "points":  27
                        },
                        {
                            "text":  "silly face/smile",
                            "points":  18
                        },
                        {
                            "text":  "pick/inspect nose",
                            "points":  13
                        },
                        {
                            "text":  "sing & dance",
                            "points":  13
                        },
                        {
                            "text":  "check teeth",
                            "points":  12
                        },
                        {
                            "text":  "pop pimple",
                            "points":  7
                        },
                        {
                            "text":  "talk to self",
                            "points":  4
                        },
                        {
                            "text":  "pluck/tweeze",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100028,
        "question":  "Name something you'd use as toilet paper in an emergency.",
        "answers":  [
                        {
                            "text":  "newspaper/paper",
                            "points":  22
                        },
                        {
                            "text":  "paper towel/napkin",
                            "points":  19
                        },
                        {
                            "text":  "kleenex",
                            "points":  18
                        },
                        {
                            "text":  "leaves",
                            "points":  15
                        },
                        {
                            "text":  "sock/clothing",
                            "points":  10
                        },
                        {
                            "text":  "towel/rag",
                            "points":  8
                        },
                        {
                            "text":  "baby wipes",
                            "points":  3
                        },
                        {
                            "text":  "my hand",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100029,
        "question":  "In the middle of making out, name something on a woman that would be awkward if it fell off.",
        "answers":  [
                        {
                            "text":  "wig/weave",
                            "points":  53
                        },
                        {
                            "text":  "fake boob/padded bra",
                            "points":  13
                        },
                        {
                            "text":  "fake lashes",
                            "points":  10
                        },
                        {
                            "text":  "earring",
                            "points":  7
                        },
                        {
                            "text":  "glasses/contacts",
                            "points":  4
                        },
                        {
                            "text":  "tooth",
                            "points":  4
                        },
                        {
                            "text":  "prosthetic limb",
                            "points":  3
                        },
                        {
                            "text":  "tongue ring",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100030,
        "question":  "Name something you only post on social media to make people jealous.",
        "answers":  [
                        {
                            "text":  "travel pics",
                            "points":  45
                        },
                        {
                            "text":  "new car",
                            "points":  17
                        },
                        {
                            "text":  "happy couple/fam pic",
                            "points":  11
                        },
                        {
                            "text":  "meals",
                            "points":  10
                        },
                        {
                            "text":  "$$$/lotto win",
                            "points":  6
                        },
                        {
                            "text":  "party pics",
                            "points":  3
                        },
                        {
                            "text":  "flowers/gifts",
                            "points":  2
                        },
                        {
                            "text":  "designer clothes",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100031,
        "question":  "Name something that might get in the way while you're getting frisky in your car.",
        "answers":  [
                        {
                            "text":  "gear shift",
                            "points":  35
                        },
                        {
                            "text":  "steering wheel",
                            "points":  29
                        },
                        {
                            "text":  "seat/armrest",
                            "points":  13
                        },
                        {
                            "text":  "seat belts",
                            "points":  7
                        },
                        {
                            "text":  "center console",
                            "points":  4
                        },
                        {
                            "text":  "door/window",
                            "points":  4
                        },
                        {
                            "text":  "dashboard",
                            "points":  2
                        },
                        {
                            "text":  "cop/passerby",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100032,
        "question":  "Name something of yours that looks better from a distance.",
        "answers":  [
                        {
                            "text":  "my face/wrinkles",
                            "points":  31
                        },
                        {
                            "text":  "my body",
                            "points":  29
                        },
                        {
                            "text":  "janky car",
                            "points":  11
                        },
                        {
                            "text":  "my stringy hair",
                            "points":  7
                        },
                        {
                            "text":  "my house",
                            "points":  7
                        },
                        {
                            "text":  "my artwork",
                            "points":  6
                        },
                        {
                            "text":  "my clothes/shoes",
                            "points":  3
                        },
                        {
                            "text":  "my spouse",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100033,
        "question":  "What do you do with your face to look like a model in photos?",
        "answers":  [
                        {
                            "text":  "suck cheeks/duck lips",
                            "points":  29
                        },
                        {
                            "text":  "smile",
                            "points":  19
                        },
                        {
                            "text":  "makeup",
                            "points":  19
                        },
                        {
                            "text":  "blank stare",
                            "points":  9
                        },
                        {
                            "text":  "angle head/chin",
                            "points":  9
                        },
                        {
                            "text":  "filter/edit pic",
                            "points":  7
                        },
                        {
                            "text":  "raise brows",
                            "points":  2
                        },
                        {
                            "text":  "clean/wash it",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100034,
        "question":  "Name something a man does with his dog that he might also do with a date.",
        "answers":  [
                        {
                            "text":  "take walk/in park",
                            "points":  26
                        },
                        {
                            "text":  "kiss",
                            "points":  20
                        },
                        {
                            "text":  "pet/massage",
                            "points":  16
                        },
                        {
                            "text":  "hug/cuddle",
                            "points":  15
                        },
                        {
                            "text":  "give treat/feed",
                            "points":  10
                        },
                        {
                            "text":  "play w/ her",
                            "points":  5
                        },
                        {
                            "text":  "put on lap",
                            "points":  2
                        },
                        {
                            "text":  "baby talk",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100035,
        "question":  "Your best friend confesses they're in love with you. What do you do?",
        "answers":  [
                        {
                            "text":  "go for it!/kiss",
                            "points":  24
                        },
                        {
                            "text":  "thanks/just pals",
                            "points":  24
                        },
                        {
                            "text":  "run/stop hanging",
                            "points":  18
                        },
                        {
                            "text":  "laugh",
                            "points":  9
                        },
                        {
                            "text":  "ignore it",
                            "points":  8
                        },
                        {
                            "text":  "talk/ask why",
                            "points":  6
                        },
                        {
                            "text":  "blush/embarrassed",
                            "points":  4
                        },
                        {
                            "text":  "say \"ew!\"/puke",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100036,
        "question":  "We asked 100 women... I can tell a man will be a good lover by the way he does what?",
        "answers":  [
                        {
                            "text":  "kisses",
                            "points":  23
                        },
                        {
                            "text":  "dances",
                            "points":  21
                        },
                        {
                            "text":  "walks",
                            "points":  17
                        },
                        {
                            "text":  "treats me/women",
                            "points":  15
                        },
                        {
                            "text":  "touches me",
                            "points":  10
                        },
                        {
                            "text":  "smiles",
                            "points":  6
                        },
                        {
                            "text":  "eats",
                            "points":  2
                        },
                        {
                            "text":  "looks/grooms self",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100037,
        "question":  "Name something you'd hate to discover that your new next-door neighbor likes to do late at night.",
        "answers":  [
                        {
                            "text":  "music/sing",
                            "points":  60
                        },
                        {
                            "text":  "walk/swim nude",
                            "points":  15
                        },
                        {
                            "text":  "wild parties",
                            "points":  6
                        },
                        {
                            "text":  "peep at me",
                            "points":  5
                        },
                        {
                            "text":  "shoot/at neighbors",
                            "points":  3
                        },
                        {
                            "text":  "yell/howl",
                            "points":  2
                        },
                        {
                            "text":  "yard work",
                            "points":  2
                        },
                        {
                            "text":  "construction",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100038,
        "question":  "Name a reason you might get banned from a karaoke bar.",
        "answers":  [
                        {
                            "text":  "awful singer/loud",
                            "points":  50
                        },
                        {
                            "text":  "too drunk",
                            "points":  21
                        },
                        {
                            "text":  "hogging mic",
                            "points":  7
                        },
                        {
                            "text":  "booing/heckling",
                            "points":  6
                        },
                        {
                            "text":  "fighting",
                            "points":  4
                        },
                        {
                            "text":  "strip/table dance",
                            "points":  3
                        },
                        {
                            "text":  "i'm too good/haters",
                            "points":  2
                        },
                        {
                            "text":  "vulgar songs",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100039,
        "question":  "Name someone who you've considered faking your own death to avoid.",
        "answers":  [
                        {
                            "text":  "my ex",
                            "points":  49
                        },
                        {
                            "text":  "in-law",
                            "points":  17
                        },
                        {
                            "text":  "boss",
                            "points":  15
                        },
                        {
                            "text":  "bill collector",
                            "points":  5
                        },
                        {
                            "text":  "spouse/mate",
                            "points":  3
                        },
                        {
                            "text":  "irs",
                            "points":  2
                        },
                        {
                            "text":  "parent",
                            "points":  2
                        },
                        {
                            "text":  "the law/parole officer",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100040,
        "question":  "Name something your goldfish probably wants to tell you.",
        "answers":  [
                        {
                            "text":  "hungry/food issues",
                            "points":  45
                        },
                        {
                            "text":  "clean my bowl!",
                            "points":  22
                        },
                        {
                            "text":  "bored/need pals",
                            "points":  12
                        },
                        {
                            "text":  "set me free!",
                            "points":  7
                        },
                        {
                            "text":  "bigger bowl!",
                            "points":  3
                        },
                        {
                            "text":  "love ya!",
                            "points":  2
                        },
                        {
                            "text":  "don't stare, creeper!",
                            "points":  2
                        },
                        {
                            "text":  "shut up!",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100041,
        "question":  "Name something you might do to avoid a hug from a relative with bad breath.",
        "answers":  [
                        {
                            "text":  "\"i'm sick\"/cough",
                            "points":  43
                        },
                        {
                            "text":  "handshake/bump",
                            "points":  14
                        },
                        {
                            "text":  "avoid/run away",
                            "points":  11
                        },
                        {
                            "text":  "turn/duck",
                            "points":  10
                        },
                        {
                            "text":  "hug anyway",
                            "points":  7
                        },
                        {
                            "text":  "excuse to go/\"potty\"",
                            "points":  4
                        },
                        {
                            "text":  "act busy/tie shoe",
                            "points":  3
                        },
                        {
                            "text":  "wave",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100042,
        "question":  "Name something you hope a department store Santa doesn't smell like.",
        "answers":  [
                        {
                            "text":  "whiskey",
                            "points":  42
                        },
                        {
                            "text":  "tinkle/poo",
                            "points":  22
                        },
                        {
                            "text":  "weed",
                            "points":  13
                        },
                        {
                            "text":  "cigarettes",
                            "points":  7
                        },
                        {
                            "text":  "b.o./sweat",
                            "points":  4
                        },
                        {
                            "text":  "food/cheese",
                            "points":  3
                        },
                        {
                            "text":  "vomit",
                            "points":  2
                        },
                        {
                            "text":  "woman's perfume",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100043,
        "question":  "We asked 100 married women... Your father-in-law is a better what than your husband?",
        "answers":  [
                        {
                            "text":  "handyman/mechanic",
                            "points":  41
                        },
                        {
                            "text":  "moneymaker",
                            "points":  12
                        },
                        {
                            "text":  "cook",
                            "points":  9
                        },
                        {
                            "text":  "golfer",
                            "points":  9
                        },
                        {
                            "text":  "dresser",
                            "points":  8
                        },
                        {
                            "text":  "gardener",
                            "points":  7
                        },
                        {
                            "text":  "cleaner",
                            "points":  5
                        },
                        {
                            "text":  "listener",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100044,
        "question":  "Dear men: Never tell a pregnant woman she's the size of what?",
        "answers":  [
                        {
                            "text":  "a whale/orca",
                            "points":  34
                        },
                        {
                            "text":  "an elephant",
                            "points":  23
                        },
                        {
                            "text":  "a house",
                            "points":  13
                        },
                        {
                            "text":  "a bus",
                            "points":  9
                        },
                        {
                            "text":  "a watermelon",
                            "points":  9
                        },
                        {
                            "text":  "a hippo",
                            "points":  3
                        },
                        {
                            "text":  "a cow",
                            "points":  2
                        },
                        {
                            "text":  "a hot-air balloon",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100045,
        "question":  "The whole family is on a sinking ship. There's not enough room on the lifeboat. Who do you leave behind?",
        "answers":  [
                        {
                            "text":  "me",
                            "points":  34
                        },
                        {
                            "text":  "parents",
                            "points":  14
                        },
                        {
                            "text":  "in-laws",
                            "points":  13
                        },
                        {
                            "text":  "spouse",
                            "points":  10
                        },
                        {
                            "text":  "grandparents",
                            "points":  10
                        },
                        {
                            "text":  "sibling",
                            "points":  5
                        },
                        {
                            "text":  "pet",
                            "points":  5
                        },
                        {
                            "text":  "the captain",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100046,
        "question":  "We asked 100 wives... Your husband is attractive. But he's not as hot as your what?",
        "answers":  [
                        {
                            "text":  "celebrity crush",
                            "points":  31
                        },
                        {
                            "text":  "ex",
                            "points":  22
                        },
                        {
                            "text":  "doctor/dentist",
                            "points":  18
                        },
                        {
                            "text":  "trainer",
                            "points":  9
                        },
                        {
                            "text":  "fantasies",
                            "points":  5
                        },
                        {
                            "text":  "friend",
                            "points":  4
                        },
                        {
                            "text":  "boss/coworker",
                            "points":  4
                        },
                        {
                            "text":  "side piece",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100047,
        "question":  "Some men grow a mustache because they think it makes them look what?",
        "answers":  [
                        {
                            "text":  "sexy/handsome",
                            "points":  30
                        },
                        {
                            "text":  "older/mature",
                            "points":  25
                        },
                        {
                            "text":  "distinguished",
                            "points":  12
                        },
                        {
                            "text":  "manly/macho",
                            "points":  10
                        },
                        {
                            "text":  "cool",
                            "points":  7
                        },
                        {
                            "text":  "smarter",
                            "points":  5
                        },
                        {
                            "text":  "younger",
                            "points":  3
                        },
                        {
                            "text":  "like a celeb/steve",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100048,
        "question":  "We asked 100 married women... What's the most cringeworthy thing your husband does in public?",
        "answers":  [
                        {
                            "text":  "let 'em rip",
                            "points":  26
                        },
                        {
                            "text":  "pick nose",
                            "points":  21
                        },
                        {
                            "text":  "talk loud/argue",
                            "points":  13
                        },
                        {
                            "text":  "get sloshed",
                            "points":  9
                        },
                        {
                            "text":  "spit/loogies",
                            "points":  8
                        },
                        {
                            "text":  "scratch himself",
                            "points":  7
                        },
                        {
                            "text":  "ogle/\"bae watch\"",
                            "points":  6
                        },
                        {
                            "text":  "pig out",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100049,
        "question":  "We asked 100 married women... Fill in the blank: My husband is too ______ to ever leave me.",
        "answers":  [
                        {
                            "text":  "committed/loyal",
                            "points":  24
                        },
                        {
                            "text":  "lazy",
                            "points":  13
                        },
                        {
                            "text":  "dumb",
                            "points":  13
                        },
                        {
                            "text":  "comfortable",
                            "points":  12
                        },
                        {
                            "text":  "scared",
                            "points":  11
                        },
                        {
                            "text":  "happy/in love",
                            "points":  9
                        },
                        {
                            "text":  "poor",
                            "points":  8
                        },
                        {
                            "text":  "smart",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100050,
        "question":  "We asked 100 women... You have a big date but a bad haircut, and no hats allowed. What do you do?",
        "answers":  [
                        {
                            "text":  "wear a wig",
                            "points":  23
                        },
                        {
                            "text":  "ponytail",
                            "points":  18
                        },
                        {
                            "text":  "go/laugh it off",
                            "points":  15
                        },
                        {
                            "text":  "cancel/turn around",
                            "points":  15
                        },
                        {
                            "text":  "headscarf",
                            "points":  14
                        },
                        {
                            "text":  "updo/bun",
                            "points":  5
                        },
                        {
                            "text":  "headband",
                            "points":  3
                        },
                        {
                            "text":  "gel/hair glue",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100051,
        "question":  "Name a rumor you'd spread about your ex so no one in town dates them.",
        "answers":  [
                        {
                            "text":  "disease/std",
                            "points":  58
                        },
                        {
                            "text":  "cheap/broke",
                            "points":  8
                        },
                        {
                            "text":  "bad in bed",
                            "points":  8
                        },
                        {
                            "text":  "mean",
                            "points":  7
                        },
                        {
                            "text":  "smells bad",
                            "points":  6
                        },
                        {
                            "text":  "criminal",
                            "points":  3
                        },
                        {
                            "text":  "gay/straight",
                            "points":  2
                        },
                        {
                            "text":  "cheater",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100052,
        "question":  "Name something best friends might share when they're drunk.",
        "answers":  [
                        {
                            "text":  "secrets/stories",
                            "points":  51
                        },
                        {
                            "text":  "a drink",
                            "points":  15
                        },
                        {
                            "text":  "food",
                            "points":  6
                        },
                        {
                            "text":  "a bed",
                            "points":  5
                        },
                        {
                            "text":  "cigarette",
                            "points":  5
                        },
                        {
                            "text":  "a kiss",
                            "points":  5
                        },
                        {
                            "text":  "a lover",
                            "points":  4
                        },
                        {
                            "text":  "a cab/uber",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100053,
        "question":  "The worst time to tell your partner you don't want to be married is when?",
        "answers":  [
                        {
                            "text":  "the wedding!",
                            "points":  50
                        },
                        {
                            "text":  "rehearsal/day before",
                            "points":  9
                        },
                        {
                            "text":  "honeymoon",
                            "points":  8
                        },
                        {
                            "text":  "during nookie",
                            "points":  7
                        },
                        {
                            "text":  "proposal",
                            "points":  7
                        },
                        {
                            "text":  "labor/pregnancy",
                            "points":  7
                        },
                        {
                            "text":  "anniversary/50th",
                            "points":  4
                        },
                        {
                            "text":  "valentine's day",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100054,
        "question":  "Name a reason a bouncer at a nightclub might not let you in.",
        "answers":  [
                        {
                            "text":  "underage/fake id",
                            "points":  48
                        },
                        {
                            "text":  "my clothes",
                            "points":  17
                        },
                        {
                            "text":  "i'm drunk",
                            "points":  8
                        },
                        {
                            "text":  "i'm too old",
                            "points":  6
                        },
                        {
                            "text":  "i'm too ugly",
                            "points":  5
                        },
                        {
                            "text":  "forgot id",
                            "points":  5
                        },
                        {
                            "text":  "not on list/no tix",
                            "points":  3
                        },
                        {
                            "text":  "i'm squirrely/sketchy",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100055,
        "question":  "Name a body part you know you have but you don't know what it does.",
        "answers":  [
                        {
                            "text":  "appendix",
                            "points":  37
                        },
                        {
                            "text":  "spleen",
                            "points":  20
                        },
                        {
                            "text":  "belly button",
                            "points":  10
                        },
                        {
                            "text":  "gallbladder",
                            "points":  9
                        },
                        {
                            "text":  "tonsils",
                            "points":  7
                        },
                        {
                            "text":  "earlobes",
                            "points":  5
                        },
                        {
                            "text":  "uvula",
                            "points":  3
                        },
                        {
                            "text":  "pancreas",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100056,
        "question":  "We asked 100 parents... What do you tell your kids if they walk in on you making love?",
        "answers":  [
                        {
                            "text":  "get out/go to bed",
                            "points":  36
                        },
                        {
                            "text":  "we're wrestling",
                            "points":  14
                        },
                        {
                            "text":  "knock first",
                            "points":  14
                        },
                        {
                            "text":  "you saw nothing!",
                            "points":  8
                        },
                        {
                            "text":  "hugging/cuddling",
                            "points":  7
                        },
                        {
                            "text":  "we're playing",
                            "points":  7
                        },
                        {
                            "text":  "we're tickling",
                            "points":  4
                        },
                        {
                            "text":  "nothing",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100057,
        "question":  "Grandma just popped out of her bra while you were talking to her. What do you do?",
        "answers":  [
                        {
                            "text":  "tell her",
                            "points":  34
                        },
                        {
                            "text":  "laugh",
                            "points":  19
                        },
                        {
                            "text":  "don't look!",
                            "points":  17
                        },
                        {
                            "text":  "ignore it",
                            "points":  7
                        },
                        {
                            "text":  "cover her up",
                            "points":  7
                        },
                        {
                            "text":  "scream/gasp",
                            "points":  4
                        },
                        {
                            "text":  "put her back in",
                            "points":  3
                        },
                        {
                            "text":  "puke",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100058,
        "question":  "Fill in the blank: You know your karaoke is bad when everyone ______s.",
        "answers":  [
                        {
                            "text":  "leaves/runs",
                            "points":  33
                        },
                        {
                            "text":  "boos/yells",
                            "points":  28
                        },
                        {
                            "text":  "laughs",
                            "points":  16
                        },
                        {
                            "text":  "covers their ears",
                            "points":  6
                        },
                        {
                            "text":  "yawns/falls asleep",
                            "points":  5
                        },
                        {
                            "text":  "cringes/frowns",
                            "points":  2
                        },
                        {
                            "text":  "sits in silence",
                            "points":  2
                        },
                        {
                            "text":  "talks/doesn't listen",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100059,
        "question":  "We asked 100 women... If you think your man is going to propose tonight, what are you doing to prepare?",
        "answers":  [
                        {
                            "text":  "my nails",
                            "points":  21
                        },
                        {
                            "text":  "shaving everywhere",
                            "points":  20
                        },
                        {
                            "text":  "dressing up",
                            "points":  19
                        },
                        {
                            "text":  "my hair",
                            "points":  15
                        },
                        {
                            "text":  "my makeup",
                            "points":  10
                        },
                        {
                            "text":  "cooking fave meal",
                            "points":  3
                        },
                        {
                            "text":  "showering",
                            "points":  3
                        },
                        {
                            "text":  "leaving town",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100060,
        "question":  "Name a reason a woman might be attracted to Ronald McDonald.",
        "answers":  [
                        {
                            "text":  "big feet",
                            "points":  20
                        },
                        {
                            "text":  "great free food",
                            "points":  19
                        },
                        {
                            "text":  "sexy red hair",
                            "points":  18
                        },
                        {
                            "text":  "he's loaded",
                            "points":  15
                        },
                        {
                            "text":  "clown fetish",
                            "points":  8
                        },
                        {
                            "text":  "humor/personality",
                            "points":  7
                        },
                        {
                            "text":  "cute face/smile",
                            "points":  4
                        },
                        {
                            "text":  "kind/to kids",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100061,
        "question":  "During church, name a telltale sign that the pastor drank too much communion wine.",
        "answers":  [
                        {
                            "text":  "slurring",
                            "points":  55
                        },
                        {
                            "text":  "can't stand/falling",
                            "points":  13
                        },
                        {
                            "text":  "passed out",
                            "points":  6
                        },
                        {
                            "text":  "stuttering",
                            "points":  5
                        },
                        {
                            "text":  "joking/laughing",
                            "points":  4
                        },
                        {
                            "text":  "babbling forever",
                            "points":  4
                        },
                        {
                            "text":  "swearing",
                            "points":  3
                        },
                        {
                            "text":  "hiccups",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100062,
        "question":  "Grandma, I love your hugs, but I hate your what?",
        "answers":  [
                        {
                            "text":  "smell",
                            "points":  55
                        },
                        {
                            "text":  "food/candy",
                            "points":  10
                        },
                        {
                            "text":  "facial/chin hair",
                            "points":  9
                        },
                        {
                            "text":  "wet kisses",
                            "points":  8
                        },
                        {
                            "text":  "granny clothes",
                            "points":  4
                        },
                        {
                            "text":  "cheek pinches/pats",
                            "points":  3
                        },
                        {
                            "text":  "nagging",
                            "points":  2
                        },
                        {
                            "text":  "crooked wig",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100063,
        "question":  "Name an animal a person with chubby cheeks might resemble.",
        "answers":  [
                        {
                            "text":  "chipmunk",
                            "points":  47
                        },
                        {
                            "text":  "squirrel",
                            "points":  16
                        },
                        {
                            "text":  "pig",
                            "points":  12
                        },
                        {
                            "text":  "ape/monkey",
                            "points":  7
                        },
                        {
                            "text":  "gopher",
                            "points":  4
                        },
                        {
                            "text":  "bear/panda",
                            "points":  3
                        },
                        {
                            "text":  "rabbit",
                            "points":  2
                        },
                        {
                            "text":  "dog/bulldog",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100064,
        "question":  "You just got fired. Name something you'd do before leaving the building.",
        "answers":  [
                        {
                            "text":  "pack up",
                            "points":  41
                        },
                        {
                            "text":  "cuss/tell off",
                            "points":  27
                        },
                        {
                            "text":  "cry",
                            "points":  7
                        },
                        {
                            "text":  "trash the place",
                            "points":  5
                        },
                        {
                            "text":  "nothing/just leave",
                            "points":  5
                        },
                        {
                            "text":  "steal stuff",
                            "points":  3
                        },
                        {
                            "text":  "say bye",
                            "points":  3
                        },
                        {
                            "text":  "fill the toilet",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100065,
        "question":  "There's no shame in admitting that you once ate an entire what?",
        "answers":  [
                        {
                            "text":  "pizza",
                            "points":  36
                        },
                        {
                            "text":  "pie",
                            "points":  22
                        },
                        {
                            "text":  "cake",
                            "points":  15
                        },
                        {
                            "text":  "bag of chips",
                            "points":  6
                        },
                        {
                            "text":  "carton of ice cream",
                            "points":  6
                        },
                        {
                            "text":  "chicken",
                            "points":  4
                        },
                        {
                            "text":  "box of cookies",
                            "points":  2
                        },
                        {
                            "text":  "melon/watermelon",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100066,
        "question":  "Bob was embarrassed to find his fake mustache where the morning after the wild party?",
        "answers":  [
                        {
                            "text":  "forehead/wrong part",
                            "points":  31
                        },
                        {
                            "text":  "toilet/bathroom",
                            "points":  17
                        },
                        {
                            "text":  "on someone else",
                            "points":  16
                        },
                        {
                            "text":  "food/drink",
                            "points":  9
                        },
                        {
                            "text":  "ceiling/wall",
                            "points":  6
                        },
                        {
                            "text":  "on the dog",
                            "points":  6
                        },
                        {
                            "text":  "his clothes/pants",
                            "points":  5
                        },
                        {
                            "text":  "bed/pillow",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100067,
        "question":  "We asked 100 women... Sometimes you wish your beautiful friend got what to make her less attractive?",
        "answers":  [
                        {
                            "text":  "chubby",
                            "points":  29
                        },
                        {
                            "text":  "acne",
                            "points":  27
                        },
                        {
                            "text":  "wrinkles",
                            "points":  11
                        },
                        {
                            "text":  "ugly haircut",
                            "points":  9
                        },
                        {
                            "text":  "rash/disease",
                            "points":  9
                        },
                        {
                            "text":  "bad botox/filler",
                            "points":  3
                        },
                        {
                            "text":  "a wart",
                            "points":  3
                        },
                        {
                            "text":  "boob reduction",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100068,
        "question":  "Single Susan is always doing what way too early on the first date?",
        "answers":  [
                        {
                            "text":  "plan'g wedding/kids",
                            "points":  25
                        },
                        {
                            "text":  "nookie",
                            "points":  20
                        },
                        {
                            "text":  "oversharing/prying",
                            "points":  17
                        },
                        {
                            "text":  "kissing",
                            "points":  14
                        },
                        {
                            "text":  "\"i love you\"",
                            "points":  9
                        },
                        {
                            "text":  "getting drunk",
                            "points":  4
                        },
                        {
                            "text":  "farting",
                            "points":  2
                        },
                        {
                            "text":  "yawning",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100069,
        "question":  "Name something you like to be super thick and super soft.",
        "answers":  [
                        {
                            "text":  "blanket/sheets",
                            "points":  22
                        },
                        {
                            "text":  "cake/food",
                            "points":  15
                        },
                        {
                            "text":  "pillow",
                            "points":  13
                        },
                        {
                            "text":  "my hair",
                            "points":  12
                        },
                        {
                            "text":  "toilet paper",
                            "points":  11
                        },
                        {
                            "text":  "a hottie/their lips",
                            "points":  8
                        },
                        {
                            "text":  "towels",
                            "points":  6
                        },
                        {
                            "text":  "mattress",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  100070,
        "question":  "We asked 100 women... Name something a Disney Princess has that you wish you could have, too.",
        "answers":  [
                        {
                            "text":  "a castle",
                            "points":  20
                        },
                        {
                            "text":  "prince charming",
                            "points":  16
                        },
                        {
                            "text":  "pretty face",
                            "points":  15
                        },
                        {
                            "text":  "pefect bod",
                            "points":  13
                        },
                        {
                            "text":  "wand/magic",
                            "points":  10
                        },
                        {
                            "text":  "dazzling clothes",
                            "points":  9
                        },
                        {
                            "text":  "beautiful hair",
                            "points":  6
                        },
                        {
                            "text":  "crown/tiara",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100071,
        "question":  "Tell me a Shakespeare character that an actor might name his pet.",
        "answers":  [
                        {
                            "text":  "romeo",
                            "points":  44
                        },
                        {
                            "text":  "hamlet",
                            "points":  17
                        },
                        {
                            "text":  "othello",
                            "points":  17
                        },
                        {
                            "text":  "caesar/julius",
                            "points":  5
                        },
                        {
                            "text":  "puck",
                            "points":  3
                        },
                        {
                            "text":  "horatio",
                            "points":  2
                        },
                        {
                            "text":  "macbeth",
                            "points":  2
                        },
                        {
                            "text":  "juliet",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100072,
        "question":  "Name an app or website that you'd be surprised your grandparents use.",
        "answers":  [
                        {
                            "text":  "tinder/dating",
                            "points":  44
                        },
                        {
                            "text":  "tiktok",
                            "points":  17
                        },
                        {
                            "text":  "facebook",
                            "points":  14
                        },
                        {
                            "text":  "onlyfans/porn",
                            "points":  5
                        },
                        {
                            "text":  "instagram",
                            "points":  4
                        },
                        {
                            "text":  "snapchat",
                            "points":  4
                        },
                        {
                            "text":  "x",
                            "points":  2
                        },
                        {
                            "text":  "grubhub/food delivery",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100073,
        "question":  "Name a reason you might compare a man to a Ken doll.",
        "answers":  [
                        {
                            "text":  "perfect face/bod",
                            "points":  38
                        },
                        {
                            "text":  "fake/plastic",
                            "points":  15
                        },
                        {
                            "text":  "stiff/rigid",
                            "points":  10
                        },
                        {
                            "text":  "silky blonde hair",
                            "points":  10
                        },
                        {
                            "text":  "no body hair",
                            "points":  6
                        },
                        {
                            "text":  "no brain",
                            "points":  5
                        },
                        {
                            "text":  "teeny weenie",
                            "points":  5
                        },
                        {
                            "text":  "preppy clothes",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100074,
        "question":  "Your family is going to be on \"Family Feud\" tomorrow. What are you doing today?",
        "answers":  [
                        {
                            "text":  "practice/study'g",
                            "points":  34
                        },
                        {
                            "text":  "pack'g/travel",
                            "points":  21
                        },
                        {
                            "text":  "matching outfits",
                            "points":  18
                        },
                        {
                            "text":  "haircuts",
                            "points":  7
                        },
                        {
                            "text":  "freaking/nervous",
                            "points":  6
                        },
                        {
                            "text":  "partying",
                            "points":  2
                        },
                        {
                            "text":  "sleeping",
                            "points":  2
                        },
                        {
                            "text":  "telling everyone!",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100075,
        "question":  "Name something a celebrity demands a bunch of in their dressing room.",
        "answers":  [
                        {
                            "text":  "food/m&m's",
                            "points":  33
                        },
                        {
                            "text":  "booze",
                            "points":  21
                        },
                        {
                            "text":  "flowers",
                            "points":  15
                        },
                        {
                            "text":  "bottled water",
                            "points":  7
                        },
                        {
                            "text":  "clothes",
                            "points":  5
                        },
                        {
                            "text":  "makeup",
                            "points":  5
                        },
                        {
                            "text":  "assistants",
                            "points":  3
                        },
                        {
                            "text":  "mirrors",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100076,
        "question":  "What's a dead giveaway that a toddler has to use the potty?",
        "answers":  [
                        {
                            "text":  "potty dance/squirm'g",
                            "points":  30
                        },
                        {
                            "text":  "holding self",
                            "points":  27
                        },
                        {
                            "text":  "the smell",
                            "points":  14
                        },
                        {
                            "text":  "making face/red",
                            "points":  6
                        },
                        {
                            "text":  "crying",
                            "points":  5
                        },
                        {
                            "text":  "squatting",
                            "points":  4
                        },
                        {
                            "text":  "quiet & still",
                            "points":  3
                        },
                        {
                            "text":  "grunting",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100077,
        "question":  "Name another way of saying \"shut your mouth.\"",
        "answers":  [
                        {
                            "text":  "quiet!",
                            "points":  30
                        },
                        {
                            "text":  "zip it!",
                            "points":  21
                        },
                        {
                            "text":  "shut up!",
                            "points":  16
                        },
                        {
                            "text":  "hush/shush/shh",
                            "points":  15
                        },
                        {
                            "text":  "stop!",
                            "points":  4
                        },
                        {
                            "text":  "shut your piehole!",
                            "points":  2
                        },
                        {
                            "text":  "shut your trap!",
                            "points":  2
                        },
                        {
                            "text":  "silence!",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100078,
        "question":  "You're in the restroom, trash-talking your boss. They step out of a stall. What do you do?",
        "answers":  [
                        {
                            "text":  "laugh/\"knew there\"",
                            "points":  27
                        },
                        {
                            "text":  "run/quit",
                            "points":  26
                        },
                        {
                            "text":  "apologize",
                            "points":  21
                        },
                        {
                            "text":  "cry/b>",
                            "points":  4
                        },
                        {
                            "text":  "nothing",
                            "points":  4
                        },
                        {
                            "text":  "continue/\"i mean it\"",
                            "points":  4
                        },
                        {
                            "text":  "blame someone else",
                            "points":  3
                        },
                        {
                            "text":  "blush",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100079,
        "question":  "After a bad first date, you drive home doing what?",
        "answers":  [
                        {
                            "text":  "cry/regret'g",
                            "points":  27
                        },
                        {
                            "text":  "sing/t-swift",
                            "points":  20
                        },
                        {
                            "text":  "venting to self",
                            "points":  14
                        },
                        {
                            "text":  "laughing",
                            "points":  9
                        },
                        {
                            "text":  "overthinking",
                            "points":  9
                        },
                        {
                            "text":  "scream/cussing",
                            "points":  9
                        },
                        {
                            "text":  "blocking #",
                            "points":  2
                        },
                        {
                            "text":  "binge eating",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100080,
        "question":  "We asked 100 parents... What's something you tell to your kids to get them to behave?",
        "answers":  [
                        {
                            "text":  "no screens/vid games",
                            "points":  25
                        },
                        {
                            "text":  "santa's watch'g",
                            "points":  23
                        },
                        {
                            "text":  "no treats/candy",
                            "points":  17
                        },
                        {
                            "text":  "be grounded",
                            "points":  8
                        },
                        {
                            "text":  "no allowance",
                            "points":  8
                        },
                        {
                            "text":  "stop/shut up!",
                            "points":  5
                        },
                        {
                            "text":  "telling your dad",
                            "points":  4
                        },
                        {
                            "text":  "gonna whoop you!",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100081,
        "question":  "We asked 100 married men... Tell me the reason your wife last yelled at you.",
        "answers":  [
                        {
                            "text":  "not listening",
                            "points":  24
                        },
                        {
                            "text":  "not taking out trash",
                            "points":  16
                        },
                        {
                            "text":  "too drunk",
                            "points":  14
                        },
                        {
                            "text":  "not cleaning up",
                            "points":  14
                        },
                        {
                            "text":  "late/out late",
                            "points":  13
                        },
                        {
                            "text":  "toilet seat up",
                            "points":  5
                        },
                        {
                            "text":  "ignoring kids",
                            "points":  4
                        },
                        {
                            "text":  "finances",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100082,
        "question":  "We asked 100 men... You'd be shocked if your doctor put on what kind of glove to do your prostate exam?",
        "answers":  [
                        {
                            "text":  "leather",
                            "points":  20
                        },
                        {
                            "text":  "winter/ski",
                            "points":  18
                        },
                        {
                            "text":  "gardening",
                            "points":  13
                        },
                        {
                            "text":  "work/welding",
                            "points":  12
                        },
                        {
                            "text":  "baseball",
                            "points":  12
                        },
                        {
                            "text":  "driving/motorcycle",
                            "points":  9
                        },
                        {
                            "text":  "cleaning/dishes",
                            "points":  5
                        },
                        {
                            "text":  "metal/spiked",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100083,
        "question":  "We asked 100 wives... Name a reason your husband wouldn't make a good action movie star.",
        "answers":  [
                        {
                            "text":  "chubster",
                            "points":  20
                        },
                        {
                            "text":  "weak/zero muscle",
                            "points":  15
                        },
                        {
                            "text":  "lazy",
                            "points":  14
                        },
                        {
                            "text":  "slow",
                            "points":  12
                        },
                        {
                            "text":  "he's ancient",
                            "points":  11
                        },
                        {
                            "text":  "clumsy",
                            "points":  9
                        },
                        {
                            "text":  "body pain/sickly",
                            "points":  6
                        },
                        {
                            "text":  "can't learn lines",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100084,
        "question":  "We asked 100 men... Name something a friend has that you might ask to borrow for the night.",
        "answers":  [
                        {
                            "text":  "a pillow",
                            "points":  18
                        },
                        {
                            "text":  "a car",
                            "points":  17
                        },
                        {
                            "text":  "a movie/netflix",
                            "points":  16
                        },
                        {
                            "text":  "clothes/jacket",
                            "points":  14
                        },
                        {
                            "text":  "cash",
                            "points":  9
                        },
                        {
                            "text":  "condoms",
                            "points":  8
                        },
                        {
                            "text":  "beer",
                            "points":  5
                        },
                        {
                            "text":  "a flashlight",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100085,
        "question":  "At your wedding, you might ask your pastor to also do what to save money?",
        "answers":  [
                        {
                            "text":  "sing",
                            "points":  17
                        },
                        {
                            "text":  "hurry it up!",
                            "points":  16
                        },
                        {
                            "text":  "take pics",
                            "points":  15
                        },
                        {
                            "text":  "cater/bake cake",
                            "points":  15
                        },
                        {
                            "text":  "dj",
                            "points":  14
                        },
                        {
                            "text":  "discount/free",
                            "points":  9
                        },
                        {
                            "text":  "not eat",
                            "points":  3
                        },
                        {
                            "text":  "pass offering plate",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100086,
        "question":  "Tell me somewhere people go where they might laugh and cry.",
        "answers":  [
                        {
                            "text":  "theater/movie",
                            "points":  56
                        },
                        {
                            "text":  "comedy club",
                            "points":  6
                        },
                        {
                            "text":  "wedding",
                            "points":  6
                        },
                        {
                            "text":  "bathroom",
                            "points":  6
                        },
                        {
                            "text":  "church/temple",
                            "points":  6
                        },
                        {
                            "text":  "bedroom",
                            "points":  5
                        },
                        {
                            "text":  "funeral/wake",
                            "points":  4
                        },
                        {
                            "text":  "hospital",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100087,
        "question":  "We asked 100 women... Tell us why your mate would be a terrible cowboy.",
        "answers":  [
                        {
                            "text":  "can't ride/hates horses",
                            "points":  52
                        },
                        {
                            "text":  "no boots",
                            "points":  8
                        },
                        {
                            "text":  "little guy/no butt",
                            "points":  8
                        },
                        {
                            "text":  "won't wear hat",
                            "points":  7
                        },
                        {
                            "text":  "city slicker/no dirt",
                            "points":  5
                        },
                        {
                            "text":  "fear of guns",
                            "points":  5
                        },
                        {
                            "text":  "too chubby",
                            "points":  3
                        },
                        {
                            "text":  "can't 2-step",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100088,
        "question":  "If you ask Steve Harvey, he'll tell you the greatest stand-up comedian of all time is who?",
        "answers":  [
                        {
                            "text":  "steve harvey... duh!",
                            "points":  51
                        },
                        {
                            "text":  "richard pryor",
                            "points":  18
                        },
                        {
                            "text":  "eddie murphy",
                            "points":  8
                        },
                        {
                            "text":  "dave chapelle",
                            "points":  5
                        },
                        {
                            "text":  "jerry seinfeld",
                            "points":  3
                        },
                        {
                            "text":  "kevin hart",
                            "points":  2
                        },
                        {
                            "text":  "johnny carson",
                            "points":  2
                        },
                        {
                            "text":  "rodney dangerfield",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100089,
        "question":  "Mom's least favorite child is the one who never does what?",
        "answers":  [
                        {
                            "text":  "chores/laundry",
                            "points":  42
                        },
                        {
                            "text":  "calls/visits",
                            "points":  14
                        },
                        {
                            "text":  "listens",
                            "points":  13
                        },
                        {
                            "text":  "works",
                            "points":  8
                        },
                        {
                            "text":  "\"anything\"",
                            "points":  5
                        },
                        {
                            "text":  "homework",
                            "points":  3
                        },
                        {
                            "text":  "bathes/showers",
                            "points":  3
                        },
                        {
                            "text":  "shows respect",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100090,
        "question":  "We asked 100 married men... Somewhere right now, your wife is talking about what?",
        "answers":  [
                        {
                            "text":  "our genius kids",
                            "points":  29
                        },
                        {
                            "text":  "me, of course",
                            "points":  19
                        },
                        {
                            "text":  "tv/housewives",
                            "points":  10
                        },
                        {
                            "text":  "chores",
                            "points":  9
                        },
                        {
                            "text":  "money",
                            "points":  9
                        },
                        {
                            "text":  "work",
                            "points":  6
                        },
                        {
                            "text":  "a divorce",
                            "points":  5
                        },
                        {
                            "text":  "food",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100091,
        "question":  "We asked 100 women... Why might you say kissing your boyfriend is like kissing a frog?",
        "answers":  [
                        {
                            "text":  "wet/slimy",
                            "points":  26
                        },
                        {
                            "text":  "long darting tongue",
                            "points":  23
                        },
                        {
                            "text":  "he's my prince",
                            "points":  14
                        },
                        {
                            "text":  "he's ugly/bulgy eyes",
                            "points":  7
                        },
                        {
                            "text":  "scaly lips",
                            "points":  6
                        },
                        {
                            "text":  "smelly/breath",
                            "points":  6
                        },
                        {
                            "text":  "he's got warts",
                            "points":  6
                        },
                        {
                            "text":  "wide mouth",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100092,
        "question":  "We asked 100 women... Tell me a way a man might be like a hamburger.",
        "answers":  [
                        {
                            "text":  "meaty/beefy",
                            "points":  24
                        },
                        {
                            "text":  "juicy",
                            "points":  18
                        },
                        {
                            "text":  "fatty",
                            "points":  13
                        },
                        {
                            "text":  "cheesy",
                            "points":  11
                        },
                        {
                            "text":  "has layers",
                            "points":  9
                        },
                        {
                            "text":  "well-done",
                            "points":  6
                        },
                        {
                            "text":  "yummy",
                            "points":  5
                        },
                        {
                            "text":  "boring/plain",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100093,
        "question":  "We asked 100 married women... You'd laugh out loud if your husband said he applied for what job?",
        "answers":  [
                        {
                            "text":  "dancer/stripper",
                            "points":  22
                        },
                        {
                            "text":  "chef",
                            "points":  13
                        },
                        {
                            "text":  "teacher",
                            "points":  13
                        },
                        {
                            "text":  "model",
                            "points":  12
                        },
                        {
                            "text":  "firefighter",
                            "points":  11
                        },
                        {
                            "text":  "mechanic",
                            "points":  7
                        },
                        {
                            "text":  "president",
                            "points":  7
                        },
                        {
                            "text":  "housekeeper",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  100094,
        "question":  "When you tell a friend to make themselves at home, you don't mean they can do what?",
        "answers":  [
                        {
                            "text":  "take clothes off",
                            "points":  21
                        },
                        {
                            "text":  "raid fridge/cook",
                            "points":  18
                        },
                        {
                            "text":  "sleep in my bed",
                            "points":  14
                        },
                        {
                            "text":  "put feet up",
                            "points":  14
                        },
                        {
                            "text":  "stay/move in",
                            "points":  7
                        },
                        {
                            "text":  "my spouse/flirt",
                            "points":  6
                        },
                        {
                            "text":  "shower/bubble bath",
                            "points":  6
                        },
                        {
                            "text":  "snoop around",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100095,
        "question":  "Name something your masseuse starts doing that ruins the experience.",
        "answers":  [
                        {
                            "text":  "yaps/life story",
                            "points":  56
                        },
                        {
                            "text":  "rubs too hard",
                            "points":  10
                        },
                        {
                            "text":  "sings",
                            "points":  8
                        },
                        {
                            "text":  "coughs/sneezes",
                            "points":  5
                        },
                        {
                            "text":  "toots",
                            "points":  4
                        },
                        {
                            "text":  "grunts/moans",
                            "points":  3
                        },
                        {
                            "text":  "gets fresh/butt rub",
                            "points":  2
                        },
                        {
                            "text":  "screams/\"spider!\"",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100096,
        "question":  "Name somthing you hope a new lover doesn't do when you take off your clothes in front of them.",
        "answers":  [
                        {
                            "text":  "laugh",
                            "points":  52
                        },
                        {
                            "text":  "puke/gag",
                            "points":  13
                        },
                        {
                            "text":  "look away",
                            "points":  6
                        },
                        {
                            "text":  "run",
                            "points":  6
                        },
                        {
                            "text":  "gasp/cringe",
                            "points":  5
                        },
                        {
                            "text":  "scream/cry",
                            "points":  4
                        },
                        {
                            "text":  "stare",
                            "points":  2
                        },
                        {
                            "text":  "close eyes",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100097,
        "question":  "Name something you'd do to get a hot lifeguard's attention.",
        "answers":  [
                        {
                            "text":  "fake drown/\"help\"",
                            "points":  49
                        },
                        {
                            "text":  "fall/\"hurt\"",
                            "points":  11
                        },
                        {
                            "text":  "sunbathe/oil",
                            "points":  6
                        },
                        {
                            "text":  "run/strut past",
                            "points":  6
                        },
                        {
                            "text":  "dive/swim",
                            "points":  5
                        },
                        {
                            "text":  "\"hey\"/chit-chat",
                            "points":  5
                        },
                        {
                            "text":  "smile & wave",
                            "points":  4
                        },
                        {
                            "text":  "flash/drop suit",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100098,
        "question":  "Name something you do both while working out and also while making love.",
        "answers":  [
                        {
                            "text":  "sweat",
                            "points":  47
                        },
                        {
                            "text":  "breathe heavy",
                            "points":  17
                        },
                        {
                            "text":  "yell/grunt/moan",
                            "points":  8
                        },
                        {
                            "text":  "thrust",
                            "points":  7
                        },
                        {
                            "text":  "daydream",
                            "points":  4
                        },
                        {
                            "text":  "listen to music",
                            "points":  3
                        },
                        {
                            "text":  "remove clothing",
                            "points":  2
                        },
                        {
                            "text":  "squat",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100099,
        "question":  "Name someone you would not want to run into in a group shower.",
        "answers":  [
                        {
                            "text":  "parents",
                            "points":  34
                        },
                        {
                            "text":  "politician/celeb",
                            "points":  14
                        },
                        {
                            "text":  "boss/coworker",
                            "points":  13
                        },
                        {
                            "text":  "in-law",
                            "points":  8
                        },
                        {
                            "text":  "pastor",
                            "points":  7
                        },
                        {
                            "text":  "ex",
                            "points":  6
                        },
                        {
                            "text":  "gradparent",
                            "points":  4
                        },
                        {
                            "text":  "anyone!",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100100,
        "question":  "Name a sound you might fake to help you get off a phone call.",
        "answers":  [
                        {
                            "text":  "cough/sneeze",
                            "points":  31
                        },
                        {
                            "text":  "static",
                            "points":  18
                        },
                        {
                            "text":  "doorbell/knock",
                            "points":  17
                        },
                        {
                            "text":  "kid/crying",
                            "points":  8
                        },
                        {
                            "text":  "dog barking",
                            "points":  5
                        },
                        {
                            "text":  "beep/call waiting",
                            "points":  4
                        },
                        {
                            "text":  "puking",
                            "points":  4
                        },
                        {
                            "text":  "crash/banging",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100101,
        "question":  "Fill in the blank: Oh no -- my ______ is leaking.",
        "answers":  [
                        {
                            "text":  "faucet/sink",
                            "points":  30
                        },
                        {
                            "text":  "toilet",
                            "points":  19
                        },
                        {
                            "text":  "bladder",
                            "points":  14
                        },
                        {
                            "text":  "drink/cup",
                            "points":  7
                        },
                        {
                            "text":  "roof",
                            "points":  6
                        },
                        {
                            "text":  "car/radiator",
                            "points":  6
                        },
                        {
                            "text":  "breast",
                            "points":  4
                        },
                        {
                            "text":  "pipe",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100102,
        "question":  "If you love football but you suck at it, name a job that can still get you on the field.",
        "answers":  [
                        {
                            "text":  "referee",
                            "points":  29
                        },
                        {
                            "text":  "waterboy/girl",
                            "points":  28
                        },
                        {
                            "text":  "camera op/reporter",
                            "points":  9
                        },
                        {
                            "text":  "coach",
                            "points":  7
                        },
                        {
                            "text":  "cheerleader",
                            "points":  5
                        },
                        {
                            "text":  "kicker/punter",
                            "points":  5
                        },
                        {
                            "text":  "ball boy/girl",
                            "points":  4
                        },
                        {
                            "text":  "groundskeeper",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100103,
        "question":  "We asked 100 men... Be honest: Your body shape is closest to what kind of animal?",
        "answers":  [
                        {
                            "text":  "bear/panda",
                            "points":  28
                        },
                        {
                            "text":  "ape/monkey",
                            "points":  23
                        },
                        {
                            "text":  "giraffe",
                            "points":  13
                        },
                        {
                            "text":  "hippo",
                            "points":  11
                        },
                        {
                            "text":  "dolphin",
                            "points":  6
                        },
                        {
                            "text":  "horse",
                            "points":  4
                        },
                        {
                            "text":  "sloth",
                            "points":  3
                        },
                        {
                            "text":  "potbellied pig",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100104,
        "question":  "Name the best R&B girl group of all time.",
        "answers":  [
                        {
                            "text":  "the supremes",
                            "points":  24
                        },
                        {
                            "text":  "tlc",
                            "points":  17
                        },
                        {
                            "text":  "destiny's child",
                            "points":  15
                        },
                        {
                            "text":  "spice girls",
                            "points":  13
                        },
                        {
                            "text":  "en vogue",
                            "points":  8
                        },
                        {
                            "text":  "the shirelles",
                            "points":  5
                        },
                        {
                            "text":  "swv",
                            "points":  4
                        },
                        {
                            "text":  "salt-n-pepa",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100105,
        "question":  "Name something about a foot that can make it even uglier than it already is.",
        "answers":  [
                        {
                            "text":  "fungus",
                            "points":  37
                        },
                        {
                            "text":  "warts",
                            "points":  14
                        },
                        {
                            "text":  "bunions",
                            "points":  11
                        },
                        {
                            "text":  "long toenails",
                            "points":  7
                        },
                        {
                            "text":  "calluses/corns",
                            "points":  6
                        },
                        {
                            "text":  "crooked toe",
                            "points":  5
                        },
                        {
                            "text":  "the smell",
                            "points":  5
                        },
                        {
                            "text":  "hairy",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100106,
        "question":  "Name an activity that would be great for a child's birthday party but terrible for a bachelor party.",
        "answers":  [
                        {
                            "text":  "pin tail on donkey",
                            "points":  33
                        },
                        {
                            "text":  "clown",
                            "points":  23
                        },
                        {
                            "text":  "bounce house",
                            "points":  13
                        },
                        {
                            "text":  "balloon animals",
                            "points":  6
                        },
                        {
                            "text":  "pony/petting zoo",
                            "points":  6
                        },
                        {
                            "text":  "pinata",
                            "points":  3
                        },
                        {
                            "text":  "hide & seek",
                            "points":  3
                        },
                        {
                            "text":  "twister",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100107,
        "question":  "We asked 100 women... You can't bring yourself to dump your boyfriend. What do you do to get him to break up with you?",
        "answers":  [
                        {
                            "text":  "ignore him/calls",
                            "points":  33
                        },
                        {
                            "text":  "be mean/nag",
                            "points":  16
                        },
                        {
                            "text":  "cheat/flirt",
                            "points":  15
                        },
                        {
                            "text":  "break dates",
                            "points":  14
                        },
                        {
                            "text":  "be clingy",
                            "points":  4
                        },
                        {
                            "text":  "fart",
                            "points":  4
                        },
                        {
                            "text":  "call him fat",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100108,
        "question":  "You might need a loofah if your skin was compared to what animal's skin?",
        "answers":  [
                        {
                            "text":  "gator/croc",
                            "points":  31
                        },
                        {
                            "text":  "snake",
                            "points":  19
                        },
                        {
                            "text":  "elephant",
                            "points":  17
                        },
                        {
                            "text":  "lizard/iguana",
                            "points":  7
                        },
                        {
                            "text":  "rhino",
                            "points":  6
                        },
                        {
                            "text":  "chicken/chicken feet",
                            "points":  3
                        },
                        {
                            "text":  "armadillo",
                            "points":  3
                        },
                        {
                            "text":  "porcupine",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100109,
        "question":  "Name something you might make fun of about SpongeBob SquarePants.",
        "answers":  [
                        {
                            "text":  "voice/laugh",
                            "points":  26
                        },
                        {
                            "text":  "outfit/pants",
                            "points":  17
                        },
                        {
                            "text":  "square shape",
                            "points":  14
                        },
                        {
                            "text":  "yellow color",
                            "points":  13
                        },
                        {
                            "text":  "goofy face/teeth",
                            "points":  8
                        },
                        {
                            "text":  "wet/sponge",
                            "points":  5
                        },
                        {
                            "text":  "pineapple house",
                            "points":  3
                        },
                        {
                            "text":  "music/theme song",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100110,
        "question":  "If \"Family Feud\" had a surprise audience giveaway, everyone would probably get what?",
        "answers":  [
                        {
                            "text":  "car",
                            "points":  24
                        },
                        {
                            "text":  "cash/gift card",
                            "points":  24
                        },
                        {
                            "text":  "home game/buzzers",
                            "points":  17
                        },
                        {
                            "text":  "snack/food",
                            "points":  7
                        },
                        {
                            "text":  "vacation",
                            "points":  6
                        },
                        {
                            "text":  "clothes/suits",
                            "points":  5
                        },
                        {
                            "text":  "book/act like a lady...",
                            "points":  3
                        },
                        {
                            "text":  "tv",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100111,
        "question":  "You might get kicked out of a basketball game for doing what to the ball?",
        "answers":  [
                        {
                            "text":  "kicking it",
                            "points":  24
                        },
                        {
                            "text":  "throw'g/at ref",
                            "points":  21
                        },
                        {
                            "text":  "licking/spit'g on",
                            "points":  12
                        },
                        {
                            "text":  "sitting on it",
                            "points":  8
                        },
                        {
                            "text":  "kissing/humping",
                            "points":  7
                        },
                        {
                            "text":  "traveling/palming",
                            "points":  7
                        },
                        {
                            "text":  "deflating it",
                            "points":  6
                        },
                        {
                            "text":  "hiding it",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100112,
        "question":  "Tell me a place where you hear people moaning and groaning.",
        "answers":  [
                        {
                            "text":  "doc/dentist/e.r.",
                            "points":  45
                        },
                        {
                            "text":  "bedroom/home",
                            "points":  14
                        },
                        {
                            "text":  "work",
                            "points":  9
                        },
                        {
                            "text":  "gym",
                            "points":  7
                        },
                        {
                            "text":  "massage/spa",
                            "points":  4
                        },
                        {
                            "text":  "hotel",
                            "points":  3
                        },
                        {
                            "text":  "bathroom stall",
                            "points":  3
                        },
                        {
                            "text":  "nursing home",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100113,
        "question":  "Name something you might text your boss one night when you're drunk.",
        "answers":  [
                        {
                            "text":  "i quit/bye!",
                            "points":  41
                        },
                        {
                            "text":  "calling out/sick",
                            "points":  17
                        },
                        {
                            "text":  "hate you/bad boss",
                            "points":  12
                        },
                        {
                            "text":  "i need a raise",
                            "points":  4
                        },
                        {
                            "text":  "heyyy!/sup?",
                            "points":  4
                        },
                        {
                            "text":  "help!",
                            "points":  4
                        },
                        {
                            "text":  "i love you",
                            "points":  3
                        },
                        {
                            "text":  "i'll be in late",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100114,
        "question":  "Name something in your house that an alien might mistake for a fellow extraterrestrial.",
        "answers":  [
                        {
                            "text":  "pet",
                            "points":  41
                        },
                        {
                            "text":  "vacuum",
                            "points":  11
                        },
                        {
                            "text":  "lamp",
                            "points":  10
                        },
                        {
                            "text":  "my spouse!",
                            "points":  9
                        },
                        {
                            "text":  "houseplant",
                            "points":  5
                        },
                        {
                            "text":  "plushie/yoda doll",
                            "points":  5
                        },
                        {
                            "text":  "tv",
                            "points":  4
                        },
                        {
                            "text":  "my weird kid",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100115,
        "question":  "Who's the last person you mentally undressed?",
        "answers":  [
                        {
                            "text":  "my boo",
                            "points":  39
                        },
                        {
                            "text":  "celeb/steve harvey",
                            "points":  23
                        },
                        {
                            "text":  "neighbor",
                            "points":  7
                        },
                        {
                            "text":  "boss/coworker",
                            "points":  5
                        },
                        {
                            "text":  "spouse's friend",
                            "points":  4
                        },
                        {
                            "text":  "random stranger",
                            "points":  4
                        },
                        {
                            "text":  "my hot buddy",
                            "points":  3
                        },
                        {
                            "text":  "my ex",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100116,
        "question":  "A spaceship just landed in your backyard. Tell me what you do next.",
        "answers":  [
                        {
                            "text":  "take pic/video",
                            "points":  27
                        },
                        {
                            "text":  "run",
                            "points":  16
                        },
                        {
                            "text":  "call 911",
                            "points":  10
                        },
                        {
                            "text":  "\"hey! welcome!\"",
                            "points":  8
                        },
                        {
                            "text":  "watch/inspect",
                            "points":  8
                        },
                        {
                            "text":  "panic/faint/yell",
                            "points":  7
                        },
                        {
                            "text":  "hide/lock door",
                            "points":  7
                        },
                        {
                            "text":  "hop on board!",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100117,
        "question":  "Name the worst place to have an accident in your pants.",
        "answers":  [
                        {
                            "text":  "work/interview",
                            "points":  32
                        },
                        {
                            "text":  "church",
                            "points":  13
                        },
                        {
                            "text":  "school",
                            "points":  10
                        },
                        {
                            "text":  "wedding/altar",
                            "points":  9
                        },
                        {
                            "text":  "store",
                            "points":  9
                        },
                        {
                            "text":  "restaurant",
                            "points":  6
                        },
                        {
                            "text":  "airplane",
                            "points":  4
                        },
                        {
                            "text":  "car",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100118,
        "question":  "Name a pet peeve you have about texting.",
        "answers":  [
                        {
                            "text":  "wait'g/left on read",
                            "points":  28
                        },
                        {
                            "text":  "grammar/spell'g",
                            "points":  24
                        },
                        {
                            "text":  "text'g & driving",
                            "points":  9
                        },
                        {
                            "text":  "text'g while w/ me",
                            "points":  8
                        },
                        {
                            "text":  "omg, abbreviations!",
                            "points":  7
                        },
                        {
                            "text":  "emoji overkill",
                            "points":  5
                        },
                        {
                            "text":  "group chats",
                            "points":  3
                        },
                        {
                            "text":  "auto-correct",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100119,
        "question":  "We asked 100 women... My man would be a lot more fun if he liked to do what like a woman?",
        "answers":  [
                        {
                            "text":  "shop",
                            "points":  28
                        },
                        {
                            "text":  "clean/organize",
                            "points":  13
                        },
                        {
                            "text":  "gossip/talk",
                            "points":  13
                        },
                        {
                            "text":  "dance",
                            "points":  11
                        },
                        {
                            "text":  "watch rom-coms/tv",
                            "points":  7
                        },
                        {
                            "text":  "cry/share feelings",
                            "points":  7
                        },
                        {
                            "text":  "cook",
                            "points":  5
                        },
                        {
                            "text":  "wear a dress & makeup",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100120,
        "question":  "We asked 100 women... Your man kisses like he's playing what sport with his tongue?",
        "answers":  [
                        {
                            "text":  "hockey",
                            "points":  24
                        },
                        {
                            "text":  "football",
                            "points":  17
                        },
                        {
                            "text":  "soccer",
                            "points":  15
                        },
                        {
                            "text":  "basketball",
                            "points":  10
                        },
                        {
                            "text":  "golf",
                            "points":  8
                        },
                        {
                            "text":  "volleyball",
                            "points":  7
                        },
                        {
                            "text":  "swim/breast stroke",
                            "points":  3
                        },
                        {
                            "text":  "wrestling",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100121,
        "question":  "It would be weird if the corpse at an open-casket funeral was wearing what?",
        "answers":  [
                        {
                            "text":  "swimsuit",
                            "points":  22
                        },
                        {
                            "text":  "nothing",
                            "points":  20
                        },
                        {
                            "text":  "costume/mask",
                            "points":  16
                        },
                        {
                            "text":  "glasses/goggles",
                            "points":  8
                        },
                        {
                            "text":  "undies/thong",
                            "points":  6
                        },
                        {
                            "text":  "hat/party hat",
                            "points":  6
                        },
                        {
                            "text":  "pajamas",
                            "points":  5
                        },
                        {
                            "text":  "shoes/ugg boots",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100122,
        "question":  "We asked 100 husbands... I knew my wife was mad when she threw what at me?",
        "answers":  [
                        {
                            "text":  "pan/pot",
                            "points":  17
                        },
                        {
                            "text":  "towel",
                            "points":  14
                        },
                        {
                            "text":  "shoe",
                            "points":  13
                        },
                        {
                            "text":  "purse",
                            "points":  11
                        },
                        {
                            "text":  "knife",
                            "points":  10
                        },
                        {
                            "text":  "plate of food",
                            "points":  8
                        },
                        {
                            "text":  "wine/glass",
                            "points":  7
                        },
                        {
                            "text":  "keys",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  100123,
        "question":  "Name something you WOULD wish on your worst enemy.",
        "answers":  [
                        {
                            "text":  "ailment/injury",
                            "points":  36
                        },
                        {
                            "text":  "death",
                            "points":  17
                        },
                        {
                            "text":  "bugs/lice",
                            "points":  10
                        },
                        {
                            "text":  "karma",
                            "points":  6
                        },
                        {
                            "text":  "gain weight",
                            "points":  6
                        },
                        {
                            "text":  "lose job/broke",
                            "points":  4
                        },
                        {
                            "text":  "insomnia",
                            "points":  4
                        },
                        {
                            "text":  "prison time",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100124,
        "question":  "Tell me a Mexican food you might nickname your sweetie.",
        "answers":  [
                        {
                            "text":  "taco/taquito",
                            "points":  32
                        },
                        {
                            "text":  "burrito",
                            "points":  18
                        },
                        {
                            "text":  "hot tamale",
                            "points":  11
                        },
                        {
                            "text":  "enchilada",
                            "points":  7
                        },
                        {
                            "text":  "churro",
                            "points":  6
                        },
                        {
                            "text":  "chimichanga",
                            "points":  4
                        },
                        {
                            "text":  "queso",
                            "points":  4
                        },
                        {
                            "text":  "flan",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100125,
        "question":  "Name something that can go wrong during your first-ever kiss.",
        "answers":  [
                        {
                            "text":  "bad breath",
                            "points":  31
                        },
                        {
                            "text":  "bump faces/teeth",
                            "points":  15
                        },
                        {
                            "text":  "burp",
                            "points":  10
                        },
                        {
                            "text":  "miss their mouth",
                            "points":  9
                        },
                        {
                            "text":  "slobber",
                            "points":  9
                        },
                        {
                            "text":  "tongue/no tongue",
                            "points":  5
                        },
                        {
                            "text":  "braces lock",
                            "points":  4
                        },
                        {
                            "text":  "bite them",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100126,
        "question":  "Name a movie villain that reminds you of your mother-in-law.",
        "answers":  [
                        {
                            "text":  "cruella de vil",
                            "points":  29
                        },
                        {
                            "text":  "the joker",
                            "points":  17
                        },
                        {
                            "text":  "ursula",
                            "points":  16
                        },
                        {
                            "text":  "the wicked witch",
                            "points":  15
                        },
                        {
                            "text":  "dracula",
                            "points":  3
                        },
                        {
                            "text":  "darth vader",
                            "points":  2
                        },
                        {
                            "text":  "king kong",
                            "points":  2
                        },
                        {
                            "text":  "freddy krueger",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100127,
        "question":  "Name a job you'd only want for the cool uniform.",
        "answers":  [
                        {
                            "text":  "police",
                            "points":  29
                        },
                        {
                            "text":  "pilot",
                            "points":  16
                        },
                        {
                            "text":  "firefighter",
                            "points":  11
                        },
                        {
                            "text":  "server/hooters",
                            "points":  10
                        },
                        {
                            "text":  "military",
                            "points":  10
                        },
                        {
                            "text":  "astronaut",
                            "points":  4
                        },
                        {
                            "text":  "train conductor",
                            "points":  3
                        },
                        {
                            "text":  "flight attendant",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100128,
        "question":  "You know you're getting old if you need a Post-it Note to remind you to do what every day?",
        "answers":  [
                        {
                            "text":  "brush teeth",
                            "points":  24
                        },
                        {
                            "text":  "take meds",
                            "points":  19
                        },
                        {
                            "text":  "eat & drink",
                            "points":  15
                        },
                        {
                            "text":  "shower",
                            "points":  9
                        },
                        {
                            "text":  "go potty",
                            "points":  7
                        },
                        {
                            "text":  "sleep/wake up",
                            "points":  5
                        },
                        {
                            "text":  "get dressed",
                            "points":  4
                        },
                        {
                            "text":  "care for pets",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100129,
        "question":  "Young people go to the bar a lot. Where do old people go a lot?",
        "answers":  [
                        {
                            "text":  "home/to bed",
                            "points":  22
                        },
                        {
                            "text":  "bingo/senior ctr.",
                            "points":  20
                        },
                        {
                            "text":  "doc/hospital",
                            "points":  12
                        },
                        {
                            "text":  "buffet/eatery",
                            "points":  11
                        },
                        {
                            "text":  "the bar too!",
                            "points":  7
                        },
                        {
                            "text":  "the bathroom",
                            "points":  6
                        },
                        {
                            "text":  "the park",
                            "points":  4
                        },
                        {
                            "text":  "cemetery/funerals",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100130,
        "question":  "Fill in the blank: Every time I go visit my Great-Aunt Myrtle, she smells like ______.",
        "answers":  [
                        {
                            "text":  "mothballs",
                            "points":  21
                        },
                        {
                            "text":  "food/baking",
                            "points":  20
                        },
                        {
                            "text":  "cigarettes",
                            "points":  13
                        },
                        {
                            "text":  "coffee",
                            "points":  10
                        },
                        {
                            "text":  "bengay/menthol",
                            "points":  7
                        },
                        {
                            "text":  "flowers",
                            "points":  6
                        },
                        {
                            "text":  "perfume",
                            "points":  5
                        },
                        {
                            "text":  "tinkle/poo",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100131,
        "question":  "Name a reality show that describes your love life.",
        "answers":  [
                        {
                            "text":  "survivor",
                            "points":  48
                        },
                        {
                            "text":  "amazing race",
                            "points":  8
                        },
                        {
                            "text":  "hell's kitchen",
                            "points":  6
                        },
                        {
                            "text":  "naked and afraid",
                            "points":  6
                        },
                        {
                            "text":  "90 day fiance",
                            "points":  5
                        },
                        {
                            "text":  "bachelor/ette",
                            "points":  5
                        },
                        {
                            "text":  "love island",
                            "points":  4
                        },
                        {
                            "text":  "love is blind",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100132,
        "question":  "Name a feature that the Cadillac of toilets might have.",
        "answers":  [
                        {
                            "text":  "bidet w/ dryer",
                            "points":  29
                        },
                        {
                            "text":  "heated seat",
                            "points":  22
                        },
                        {
                            "text":  "gold seat",
                            "points":  9
                        },
                        {
                            "text":  "a wiper",
                            "points":  7
                        },
                        {
                            "text":  "padded seat",
                            "points":  5
                        },
                        {
                            "text":  "self-cleaning bowl",
                            "points":  5
                        },
                        {
                            "text":  "auto-flush",
                            "points":  4
                        },
                        {
                            "text":  "butt massager",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100133,
        "question":  "Name an occupation that if you put on too much weight, you might not be fit to do it.",
        "answers":  [
                        {
                            "text":  "athlete",
                            "points":  27
                        },
                        {
                            "text":  "model",
                            "points":  13
                        },
                        {
                            "text":  "flight attendant",
                            "points":  12
                        },
                        {
                            "text":  "police",
                            "points":  10
                        },
                        {
                            "text":  "fitness trainer",
                            "points":  9
                        },
                        {
                            "text":  "firefighter",
                            "points":  6
                        },
                        {
                            "text":  "server",
                            "points":  4
                        },
                        {
                            "text":  "dancer/stripper",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100134,
        "question":  "If your bathroom mirror started giving you unsolicited advice, what would it say?",
        "answers":  [
                        {
                            "text":  "slim down/exercise!",
                            "points":  42
                        },
                        {
                            "text":  "fix your hair!",
                            "points":  11
                        },
                        {
                            "text":  "shave/pluck!",
                            "points":  8
                        },
                        {
                            "text":  "sleep more!",
                            "points":  6
                        },
                        {
                            "text":  "shut up!",
                            "points":  5
                        },
                        {
                            "text":  "use makeup!",
                            "points":  5
                        },
                        {
                            "text":  "moisturize!",
                            "points":  4
                        },
                        {
                            "text":  "clean bathroom/me!",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100135,
        "question":  "You'd be shocked to see the Statue of Liberty put down her torch and do what with her hand?",
        "answers":  [
                        {
                            "text":  "flip the bird",
                            "points":  33
                        },
                        {
                            "text":  "wave",
                            "points":  21
                        },
                        {
                            "text":  "scratch/adjust",
                            "points":  11
                        },
                        {
                            "text":  "pick nose",
                            "points":  6
                        },
                        {
                            "text":  "peace sign",
                            "points":  4
                        },
                        {
                            "text":  "thumbs up/down",
                            "points":  3
                        },
                        {
                            "text":  "dance moves",
                            "points":  3
                        },
                        {
                            "text":  "use phone",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100136,
        "question":  "Name something you'd be surprised to see your auntie pull out of her bra.",
        "answers":  [
                        {
                            "text":  "cash/wallet",
                            "points":  33
                        },
                        {
                            "text":  "sandwich/food",
                            "points":  15
                        },
                        {
                            "text":  "weed/drugs",
                            "points":  12
                        },
                        {
                            "text":  "phone",
                            "points":  6
                        },
                        {
                            "text":  "flask",
                            "points":  5
                        },
                        {
                            "text":  "box of kleenex",
                            "points":  5
                        },
                        {
                            "text":  "gun",
                            "points":  4
                        },
                        {
                            "text":  "kittens/animal",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100137,
        "question":  "Name something that if you could actually see all the germs on it, you'd never touch it.",
        "answers":  [
                        {
                            "text":  "door handle",
                            "points":  31
                        },
                        {
                            "text":  "phone",
                            "points":  16
                        },
                        {
                            "text":  "food",
                            "points":  13
                        },
                        {
                            "text":  "toilet",
                            "points":  10
                        },
                        {
                            "text":  "remote",
                            "points":  5
                        },
                        {
                            "text":  "towel",
                            "points":  3
                        },
                        {
                            "text":  "bed/sheets",
                            "points":  3
                        },
                        {
                            "text":  "fridge",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100138,
        "question":  "Name a place you go where it would be weird to bring your loved one's ashes along.",
        "answers":  [
                        {
                            "text":  "restaurant",
                            "points":  27
                        },
                        {
                            "text":  "bar/club",
                            "points":  14
                        },
                        {
                            "text":  "vacay/beach",
                            "points":  10
                        },
                        {
                            "text":  "work",
                            "points":  8
                        },
                        {
                            "text":  "store/mall",
                            "points":  8
                        },
                        {
                            "text":  "church",
                            "points":  6
                        },
                        {
                            "text":  "wedding",
                            "points":  6
                        },
                        {
                            "text":  "bathroom",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100139,
        "question":  "When I die, forget the stairway to heaven -- I want to ride there how?",
        "answers":  [
                        {
                            "text":  "dream car/limo",
                            "points":  37
                        },
                        {
                            "text":  "horse/chariot",
                            "points":  15
                        },
                        {
                            "text":  "hot air balloon",
                            "points":  6
                        },
                        {
                            "text":  "private jet",
                            "points":  6
                        },
                        {
                            "text":  "glass elevator",
                            "points":  5
                        },
                        {
                            "text":  "motorcycle",
                            "points":  5
                        },
                        {
                            "text":  "rocket",
                            "points":  5
                        },
                        {
                            "text":  "on a cloud",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100140,
        "question":  "Name a word people use to avoid cursing.",
        "answers":  [
                        {
                            "text":  "fudge",
                            "points":  20
                        },
                        {
                            "text":  "shoot",
                            "points":  19
                        },
                        {
                            "text":  "darn",
                            "points":  10
                        },
                        {
                            "text":  "crap",
                            "points":  8
                        },
                        {
                            "text":  "frick/freak/frig",
                            "points":  8
                        },
                        {
                            "text":  "dang",
                            "points":  7
                        },
                        {
                            "text":  "sugar",
                            "points":  6
                        },
                        {
                            "text":  "heck",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100141,
        "question":  "We asked 100 married women... You start choking during dinner. What is your husband doing?",
        "answers":  [
                        {
                            "text":  "on his phone",
                            "points":  18
                        },
                        {
                            "text":  "watching tv",
                            "points":  17
                        },
                        {
                            "text":  "still eating",
                            "points":  11
                        },
                        {
                            "text":  "911/look'g for help",
                            "points":  10
                        },
                        {
                            "text":  "heimlich",
                            "points":  9
                        },
                        {
                            "text":  "\"you okay?\"",
                            "points":  8
                        },
                        {
                            "text":  "staring/watching me",
                            "points":  5
                        },
                        {
                            "text":  "panicking",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100142,
        "question":  "Name a word starting with the letter F you'd use to describe your own behind.",
        "answers":  [
                        {
                            "text":  "fat",
                            "points":  33
                        },
                        {
                            "text":  "flat",
                            "points":  12
                        },
                        {
                            "text":  "fabulous",
                            "points":  10
                        },
                        {
                            "text":  "firm",
                            "points":  7
                        },
                        {
                            "text":  "fanny",
                            "points":  6
                        },
                        {
                            "text":  "fluffy",
                            "points":  5
                        },
                        {
                            "text":  "fine",
                            "points":  4
                        },
                        {
                            "text":  "full",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100143,
        "question":  "Name something that would be hard to do if you had nine-inch nails.",
        "answers":  [
                        {
                            "text":  "type/text/dial",
                            "points":  34
                        },
                        {
                            "text":  "wipe",
                            "points":  22
                        },
                        {
                            "text":  "eat",
                            "points":  6
                        },
                        {
                            "text":  "brush teeth/floss",
                            "points":  4
                        },
                        {
                            "text":  "make fist",
                            "points":  4
                        },
                        {
                            "text":  "play music/piano",
                            "points":  4
                        },
                        {
                            "text":  "cook",
                            "points":  3
                        },
                        {
                            "text":  "scratch an itch",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100144,
        "question":  "Name a place you'd be surprised had a kiss cam.",
        "answers":  [
                        {
                            "text":  "church/convent",
                            "points":  23
                        },
                        {
                            "text":  "doc/hospital",
                            "points":  14
                        },
                        {
                            "text":  "public bathroom",
                            "points":  12
                        },
                        {
                            "text":  "store/mall",
                            "points":  10
                        },
                        {
                            "text":  "courtroom",
                            "points":  7
                        },
                        {
                            "text":  "bar/club",
                            "points":  5
                        },
                        {
                            "text":  "work",
                            "points":  5
                        },
                        {
                            "text":  "theater",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100145,
        "question":  "Fill in the blank: Out of all my family members, I'm the ______est.",
        "answers":  [
                        {
                            "text":  "smartest",
                            "points":  25
                        },
                        {
                            "text":  "funniest",
                            "points":  13
                        },
                        {
                            "text":  "youngest",
                            "points":  8
                        },
                        {
                            "text":  "tallest",
                            "points":  7
                        },
                        {
                            "text":  "quietest/shyest",
                            "points":  7
                        },
                        {
                            "text":  "shortest",
                            "points":  7
                        },
                        {
                            "text":  "weirdest",
                            "points":  6
                        },
                        {
                            "text":  "prettiest/sexiest",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  100146,
        "question":  "Name a game that kids back in the day played outside that kids today probably know nothing about.",
        "answers":  [
                        {
                            "text":  "tag",
                            "points":  22
                        },
                        {
                            "text":  "hopscotch",
                            "points":  16
                        },
                        {
                            "text":  "kick the can",
                            "points":  10
                        },
                        {
                            "text":  "kickball",
                            "points":  10
                        },
                        {
                            "text":  "red rover",
                            "points":  9
                        },
                        {
                            "text":  "red light, green light",
                            "points":  5
                        },
                        {
                            "text":  "dodgeball",
                            "points":  4
                        },
                        {
                            "text":  "hide-and-seek",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100147,
        "question":  "Name a section of a bookstore where you'd find a book about your love life.",
        "answers":  [
                        {
                            "text":  "fiction/fantasy",
                            "points":  23
                        },
                        {
                            "text":  "romance/dating",
                            "points":  13
                        },
                        {
                            "text":  "self-help",
                            "points":  11
                        },
                        {
                            "text":  "ancient history",
                            "points":  7
                        },
                        {
                            "text":  "mystery/suspense",
                            "points":  5
                        },
                        {
                            "text":  "erotica",
                            "points":  5
                        },
                        {
                            "text":  "horror",
                            "points":  5
                        },
                        {
                            "text":  "comedy",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100148,
        "question":  "We asked 100 women... Fill in the blank: In my next life, I want to be a ______.",
        "answers":  [
                        {
                            "text":  "millionaire",
                            "points":  22
                        },
                        {
                            "text":  "cat",
                            "points":  17
                        },
                        {
                            "text":  "star/singer",
                            "points":  13
                        },
                        {
                            "text":  "dog",
                            "points":  5
                        },
                        {
                            "text":  "princess/queen",
                            "points":  5
                        },
                        {
                            "text":  "bird",
                            "points":  4
                        },
                        {
                            "text":  "model",
                            "points":  4
                        },
                        {
                            "text":  "man",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100149,
        "question":  "Tell me an occupation where you make people happy every single day.",
        "answers":  [
                        {
                            "text":  "clown",
                            "points":  30
                        },
                        {
                            "text":  "comedian",
                            "points":  9
                        },
                        {
                            "text":  "florist",
                            "points":  6
                        },
                        {
                            "text":  "hooker",
                            "points":  6
                        },
                        {
                            "text":  "barista",
                            "points":  4
                        },
                        {
                            "text":  "nurse",
                            "points":  4
                        },
                        {
                            "text":  "ice cream seller",
                            "points":  4
                        },
                        {
                            "text":  "theme park worker",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100150,
        "question":  "Name something you have two of that you might like one of them more than the other.",
        "answers":  [
                        {
                            "text":  "kids",
                            "points":  20
                        },
                        {
                            "text":  "pets",
                            "points":  13
                        },
                        {
                            "text":  "cars",
                            "points":  11
                        },
                        {
                            "text":  "arms/hands",
                            "points":  7
                        },
                        {
                            "text":  "pairs of shoes",
                            "points":  5
                        },
                        {
                            "text":  "friends",
                            "points":  3
                        },
                        {
                            "text":  "tv's",
                            "points":  3
                        },
                        {
                            "text":  "siblings",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100151,
        "question":  "Name a place you'd be surprised to meet the love of your life.",
        "answers":  [
                        {
                            "text":  "store/mall",
                            "points":  20
                        },
                        {
                            "text":  "restroom",
                            "points":  9
                        },
                        {
                            "text":  "funeral",
                            "points":  7
                        },
                        {
                            "text":  "doctor/clinic",
                            "points":  7
                        },
                        {
                            "text":  "bar/club",
                            "points":  7
                        },
                        {
                            "text":  "prison",
                            "points":  5
                        },
                        {
                            "text":  "church",
                            "points":  5
                        },
                        {
                            "text":  "my home/apt. bldg.",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100152,
        "question":  "Name an occupation that sounds boring but you get paid a lot.",
        "answers":  [
                        {
                            "text":  "accountant",
                            "points":  24
                        },
                        {
                            "text":  "doc/dentist",
                            "points":  9
                        },
                        {
                            "text":  "lawyer",
                            "points":  8
                        },
                        {
                            "text":  "plumber",
                            "points":  6
                        },
                        {
                            "text":  "garbage collector",
                            "points":  4
                        },
                        {
                            "text":  "coroner/mortician",
                            "points":  3
                        },
                        {
                            "text":  "politician",
                            "points":  3
                        },
                        {
                            "text":  "truck driver",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100153,
        "question":  "Tell me a kind of bird a stripper might use as her stage name.",
        "answers":  [
                        {
                            "text":  "flamingo",
                            "points":  12
                        },
                        {
                            "text":  "robin redbreast",
                            "points":  12
                        },
                        {
                            "text":  "peacock",
                            "points":  11
                        },
                        {
                            "text":  "raven",
                            "points":  6
                        },
                        {
                            "text":  "swallow",
                            "points":  6
                        },
                        {
                            "text":  "dove",
                            "points":  5
                        },
                        {
                            "text":  "parrot/polly",
                            "points":  4
                        },
                        {
                            "text":  "canary/tweety",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100154,
        "question":  "If a skeleton wanted to be sexier, name something it could put on.",
        "answers":  [
                        {
                            "text":  "hot outfit/lingerie",
                            "points":  80
                        },
                        {
                            "text":  "weight/flesh",
                            "points":  9
                        },
                        {
                            "text":  "jewelry",
                            "points":  3
                        },
                        {
                            "text":  "feather boa",
                            "points":  2
                        },
                        {
                            "text":  "makeup",
                            "points":  2
                        },
                        {
                            "text":  "wig",
                            "points":  2
                        },
                        {
                            "text":  "sunglasses",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100155,
        "question":  "Name something a Michael Jackson impersonator would need.",
        "answers":  [
                        {
                            "text":  "outfit/glove",
                            "points":  78
                        },
                        {
                            "text":  "dance moves",
                            "points":  7
                        },
                        {
                            "text":  "the voice",
                            "points":  5
                        },
                        {
                            "text":  "makeup",
                            "points":  3
                        },
                        {
                            "text":  "long hair/gel",
                            "points":  3
                        },
                        {
                            "text":  "dark glasses",
                            "points":  2
                        },
                        {
                            "text":  "nose job",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100156,
        "question":  "Name something about the superhero Thor that women think is sexy.",
        "answers":  [
                        {
                            "text":  "ripped bod/height",
                            "points":  57
                        },
                        {
                            "text":  "big hammer",
                            "points":  22
                        },
                        {
                            "text":  "silky hair",
                            "points":  9
                        },
                        {
                            "text":  "outfit/cape",
                            "points":  4
                        },
                        {
                            "text":  "accent/voice",
                            "points":  4
                        },
                        {
                            "text":  "his name",
                            "points":  2
                        },
                        {
                            "text":  "handsome face",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100157,
        "question":  "We asked 100 married men... To keep your wife happy, you've pretended to like what?",
        "answers":  [
                        {
                            "text":  "her fam/mom",
                            "points":  38
                        },
                        {
                            "text":  "her cooking",
                            "points":  20
                        },
                        {
                            "text":  "shopping",
                            "points":  13
                        },
                        {
                            "text":  "movies/tv shows",
                            "points":  11
                        },
                        {
                            "text":  "her/her body",
                            "points":  8
                        },
                        {
                            "text":  "her music",
                            "points":  6
                        },
                        {
                            "text":  "theater/ballet",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100158,
        "question":  "We asked 100 married men... In a perfect world, your ex would teach your wife how to what?",
        "answers":  [
                        {
                            "text":  "make love",
                            "points":  36
                        },
                        {
                            "text":  "cook",
                            "points":  35
                        },
                        {
                            "text":  "dress",
                            "points":  7
                        },
                        {
                            "text":  "kiss",
                            "points":  7
                        },
                        {
                            "text":  "plan things/vacations",
                            "points":  7
                        },
                        {
                            "text":  "wear makeup",
                            "points":  5
                        },
                        {
                            "text":  "be quiet",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100159,
        "question":  "We asked 100 men... Your ex should never contact you again unless they're what?",
        "answers":  [
                        {
                            "text":  "dying/sick/in danger",
                            "points":  57
                        },
                        {
                            "text":  "my co-parent",
                            "points":  14
                        },
                        {
                            "text":  "single",
                            "points":  12
                        },
                        {
                            "text":  "feelin' frisky",
                            "points":  9
                        },
                        {
                            "text":  "changed/sober",
                            "points":  3
                        },
                        {
                            "text":  "suddenly rich",
                            "points":  2
                        },
                        {
                            "text":  "apologizing",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100160,
        "question":  "Name something that a guy might do when he notices a cute girl checking him out in the gym.",
        "answers":  [
                        {
                            "text":  "flex",
                            "points":  50
                        },
                        {
                            "text":  "smile",
                            "points":  23
                        },
                        {
                            "text":  "wink",
                            "points":  7
                        },
                        {
                            "text":  "go talk to her",
                            "points":  6
                        },
                        {
                            "text":  "stare/ogle back",
                            "points":  5
                        },
                        {
                            "text":  "lift heavier",
                            "points":  4
                        },
                        {
                            "text":  "suck in his gut",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100161,
        "question":  "Name a part of your body that a bug might think is a cave.",
        "answers":  [
                        {
                            "text":  "ear",
                            "points":  48
                        },
                        {
                            "text":  "nose",
                            "points":  12
                        },
                        {
                            "text":  "belly button",
                            "points":  12
                        },
                        {
                            "text":  "butt",
                            "points":  10
                        },
                        {
                            "text":  "mouth",
                            "points":  7
                        },
                        {
                            "text":  "armpit",
                            "points":  6
                        },
                        {
                            "text":  "hoo-ha",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100162,
        "question":  "If your shoes could talk, what would they complain about the most?",
        "answers":  [
                        {
                            "text":  "smelly, sweaty feet",
                            "points":  39
                        },
                        {
                            "text":  "walking/wear & tear",
                            "points":  21
                        },
                        {
                            "text":  "my weight",
                            "points":  16
                        },
                        {
                            "text":  "dirty/dog poo",
                            "points":  15
                        },
                        {
                            "text":  "never wear 'em",
                            "points":  3
                        },
                        {
                            "text":  "terrain/rocky",
                            "points":  3
                        },
                        {
                            "text":  "wrong size/tight",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100163,
        "question":  "We asked 100 married women... Name something your man and a polar bear have in common.",
        "answers":  [
                        {
                            "text":  "hairy/white hair",
                            "points":  37
                        },
                        {
                            "text":  "sleep a lot",
                            "points":  22
                        },
                        {
                            "text":  "growl/grumpy",
                            "points":  15
                        },
                        {
                            "text":  "chunky/eat a lot",
                            "points":  13
                        },
                        {
                            "text":  "love the cold",
                            "points":  5
                        },
                        {
                            "text":  "cuddly",
                            "points":  5
                        },
                        {
                            "text":  "strong",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100164,
        "question":  "We asked 100 married men... What does your mother-in-law have that's bigger than yours?",
        "answers":  [
                        {
                            "text":  "bank account",
                            "points":  35
                        },
                        {
                            "text":  "ego/personality",
                            "points":  16
                        },
                        {
                            "text":  "house",
                            "points":  14
                        },
                        {
                            "text":  "body/butt",
                            "points":  14
                        },
                        {
                            "text":  "mouth",
                            "points":  13
                        },
                        {
                            "text":  "heart",
                            "points":  5
                        },
                        {
                            "text":  "car",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100165,
        "question":  "We asked 100 single women... I'd definitely match with a man holding what in his dating app picture?",
        "answers":  [
                        {
                            "text":  "puppy/kitten",
                            "points":  74
                        },
                        {
                            "text":  "drink/champagne",
                            "points":  6
                        },
                        {
                            "text":  "flowers",
                            "points":  5
                        },
                        {
                            "text":  "food/sushi",
                            "points":  4
                        },
                        {
                            "text":  "weights",
                            "points":  4
                        },
                        {
                            "text":  "surfboard",
                            "points":  3
                        },
                        {
                            "text":  "money/check",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100166,
        "question":  "Name something a woman does to make her lips more kissable.",
        "answers":  [
                        {
                            "text":  "lipstick/gloss",
                            "points":  51
                        },
                        {
                            "text":  "balm/moisturizer",
                            "points":  30
                        },
                        {
                            "text":  "botox/filler",
                            "points":  6
                        },
                        {
                            "text":  "sexy bite",
                            "points":  3
                        },
                        {
                            "text":  "pucker/pout",
                            "points":  3
                        },
                        {
                            "text":  "scrub/exfoliate",
                            "points":  3
                        },
                        {
                            "text":  "lick them",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100167,
        "question":  "A Good Samaritan gives up a bus seat. A Great Samaritan buys you a seat for what?",
        "answers":  [
                        {
                            "text":  "super bowl/game",
                            "points":  39
                        },
                        {
                            "text":  "a flight",
                            "points":  28
                        },
                        {
                            "text":  "concert",
                            "points":  14
                        },
                        {
                            "text":  "play/opera",
                            "points":  7
                        },
                        {
                            "text":  "the train",
                            "points":  5
                        },
                        {
                            "text":  "limo ride",
                            "points":  3
                        },
                        {
                            "text":  "a movie",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100168,
        "question":  "We asked 100 women... Name an excuse a man gives you for why he didn't text you back.",
        "answers":  [
                        {
                            "text":  "busy working",
                            "points":  38
                        },
                        {
                            "text":  "sleeping",
                            "points":  24
                        },
                        {
                            "text":  "oops, i forgot",
                            "points":  14
                        },
                        {
                            "text":  "phone died",
                            "points":  13
                        },
                        {
                            "text":  "with buds/golf'g",
                            "points":  3
                        },
                        {
                            "text":  "didn't have phone",
                            "points":  3
                        },
                        {
                            "text":  "lost #, my bad!",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100169,
        "question":  "What's a cosmetic procedure that over half of Hollywood has likely had done?",
        "answers":  [
                        {
                            "text":  "botox",
                            "points":  33
                        },
                        {
                            "text":  "facelift",
                            "points":  33
                        },
                        {
                            "text":  "nose job",
                            "points":  9
                        },
                        {
                            "text":  "liposuction",
                            "points":  8
                        },
                        {
                            "text":  "boob job",
                            "points":  7
                        },
                        {
                            "text":  "fillers/in lips",
                            "points":  6
                        },
                        {
                            "text":  "butt lift",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100170,
        "question":  "Name a creature a man would hate to find in his bathing suit after swimming in the ocean.",
        "answers":  [
                        {
                            "text":  "jellyfish",
                            "points":  32
                        },
                        {
                            "text":  "crab",
                            "points":  31
                        },
                        {
                            "text":  "fish/shark/elect. eel",
                            "points":  19
                        },
                        {
                            "text":  "leech/sea worm",
                            "points":  8
                        },
                        {
                            "text":  "octopus",
                            "points":  3
                        },
                        {
                            "text":  "stingray",
                            "points":  3
                        },
                        {
                            "text":  "sea urchin",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100171,
        "question":  "If you were trying to get out of a relationship, you might pretend to be what?",
        "answers":  [
                        {
                            "text":  "ill/dying/dead",
                            "points":  32
                        },
                        {
                            "text":  "gay",
                            "points":  24
                        },
                        {
                            "text":  "married/cheating",
                            "points":  15
                        },
                        {
                            "text":  "moving",
                            "points":  12
                        },
                        {
                            "text":  "psycho",
                            "points":  11
                        },
                        {
                            "text":  "broke",
                            "points":  2
                        },
                        {
                            "text":  "too busy",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100172,
        "question":  "Name something you notice about a person that might make you think they just robbed a bank.",
        "answers":  [
                        {
                            "text":  "ski mask",
                            "points":  31
                        },
                        {
                            "text":  "bag/pocket of $",
                            "points":  23
                        },
                        {
                            "text":  "spends/new car",
                            "points":  17
                        },
                        {
                            "text":  "looks nervous/guilty",
                            "points":  12
                        },
                        {
                            "text":  "dye on hands",
                            "points":  9
                        },
                        {
                            "text":  "runs outta bank",
                            "points":  3
                        },
                        {
                            "text":  "changes clothes",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100173,
        "question":  "Name something embarrassing that could happen to a person while they're crowd surfing.",
        "answers":  [
                        {
                            "text":  "they fall",
                            "points":  29
                        },
                        {
                            "text":  "lose clothes/pants",
                            "points":  21
                        },
                        {
                            "text":  "let one go",
                            "points":  18
                        },
                        {
                            "text":  "they vomit",
                            "points":  13
                        },
                        {
                            "text":  "go potty",
                            "points":  11
                        },
                        {
                            "text":  "see ex",
                            "points":  3
                        },
                        {
                            "text":  "get groped",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100174,
        "question":  "Not that you'd know, but name something prisoners do during their prison yard time.",
        "answers":  [
                        {
                            "text":  "work out",
                            "points":  60
                        },
                        {
                            "text":  "play ball",
                            "points":  16
                        },
                        {
                            "text":  "walk around",
                            "points":  8
                        },
                        {
                            "text":  "gossip/chat",
                            "points":  5
                        },
                        {
                            "text":  "smoke",
                            "points":  3
                        },
                        {
                            "text":  "fight/argue",
                            "points":  3
                        },
                        {
                            "text":  "plot to escape",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100175,
        "question":  "Name something about Elphaba from \"Wicked\" that the Munchkins might find kind of sexy.",
        "answers":  [
                        {
                            "text":  "green skin",
                            "points":  49
                        },
                        {
                            "text":  "hot bod/tall",
                            "points":  15
                        },
                        {
                            "text":  "cute face/nose",
                            "points":  12
                        },
                        {
                            "text":  "long hair",
                            "points":  11
                        },
                        {
                            "text":  "sultry voice/songs",
                            "points":  5
                        },
                        {
                            "text":  "outfit/hat",
                            "points":  3
                        },
                        {
                            "text":  "her magic",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100176,
        "question":  "What might you do if you notice the person next to you on the bus talking to themselves?",
        "answers":  [
                        {
                            "text":  "move away",
                            "points":  48
                        },
                        {
                            "text":  "ignore/read",
                            "points":  29
                        },
                        {
                            "text":  "listen in",
                            "points":  6
                        },
                        {
                            "text":  "look away",
                            "points":  4
                        },
                        {
                            "text":  "take a video",
                            "points":  4
                        },
                        {
                            "text":  "check for earpods",
                            "points":  4
                        },
                        {
                            "text":  "join conversation",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100177,
        "question":  "Everyone wishes that they had a superpower. But name one that might become annoying quickly.",
        "answers":  [
                        {
                            "text":  "reading minds",
                            "points":  42
                        },
                        {
                            "text":  "super/x-ray vision",
                            "points":  24
                        },
                        {
                            "text":  "super hearing",
                            "points":  14
                        },
                        {
                            "text":  "invisibility",
                            "points":  11
                        },
                        {
                            "text":  "being stretchy",
                            "points":  2
                        },
                        {
                            "text":  "lasers/flames",
                            "points":  2
                        },
                        {
                            "text":  "flying",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100178,
        "question":  "Name a part of your body starting with B that you wish was in better shape.",
        "answers":  [
                        {
                            "text":  "belly",
                            "points":  41
                        },
                        {
                            "text":  "butt",
                            "points":  33
                        },
                        {
                            "text":  "boobs",
                            "points":  7
                        },
                        {
                            "text":  "biceps",
                            "points":  5
                        },
                        {
                            "text":  "brain",
                            "points":  5
                        },
                        {
                            "text":  "back",
                            "points":  4
                        },
                        {
                            "text":  "bones",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100179,
        "question":  "Past or present, name a show with the word \"family\" in its title.",
        "answers":  [
                        {
                            "text":  "family ties",
                            "points":  39
                        },
                        {
                            "text":  "family feud",
                            "points":  28
                        },
                        {
                            "text":  "family matters",
                            "points":  13
                        },
                        {
                            "text":  "all in the family",
                            "points":  10
                        },
                        {
                            "text":  "family",
                            "points":  3
                        },
                        {
                            "text":  "modern family",
                            "points":  2
                        },
                        {
                            "text":  "family guy",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100180,
        "question":  "We asked 100 men... It would be hard to resist the devil if he tempted you with what?",
        "answers":  [
                        {
                            "text":  "money",
                            "points":  38
                        },
                        {
                            "text":  "hotties",
                            "points":  33
                        },
                        {
                            "text":  "eternal youth/life",
                            "points":  10
                        },
                        {
                            "text":  "food/nachos",
                            "points":  8
                        },
                        {
                            "text":  "fame",
                            "points":  3
                        },
                        {
                            "text":  "sports wins/tickets",
                            "points":  3
                        },
                        {
                            "text":  "a drink/beer",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100181,
        "question":  "Attention men: No woman wants to kiss you right after you've done what?",
        "answers":  [
                        {
                            "text":  "eaten/garlic",
                            "points":  38
                        },
                        {
                            "text":  "smoked/chew",
                            "points":  30
                        },
                        {
                            "text":  "burped",
                            "points":  12
                        },
                        {
                            "text":  "barfed",
                            "points":  8
                        },
                        {
                            "text":  "woken up",
                            "points":  4
                        },
                        {
                            "text":  "drunk beer",
                            "points":  3
                        },
                        {
                            "text":  "farted",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100182,
        "question":  "You pretend to be on the phone when you see who in public?",
        "answers":  [
                        {
                            "text":  "ex",
                            "points":  37
                        },
                        {
                            "text":  "boss/coworker",
                            "points":  30
                        },
                        {
                            "text":  "nosy neighbor",
                            "points":  12
                        },
                        {
                            "text":  "in-laws",
                            "points":  8
                        },
                        {
                            "text":  "teacher",
                            "points":  4
                        },
                        {
                            "text":  "my parents",
                            "points":  4
                        },
                        {
                            "text":  "pastor/clergy",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100183,
        "question":  "We asked 100 women... If you hooked up with a farmer, name something you'd be surprised he asked you to help do in the morning.",
        "answers":  [
                        {
                            "text":  "milk the cows",
                            "points":  37
                        },
                        {
                            "text":  "feed the animals",
                            "points":  29
                        },
                        {
                            "text":  "plow/tractor",
                            "points":  15
                        },
                        {
                            "text":  "weeding",
                            "points":  7
                        },
                        {
                            "text":  "cook breakfast",
                            "points":  5
                        },
                        {
                            "text":  "collect eggs",
                            "points":  2
                        },
                        {
                            "text":  "pick up manure",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100184,
        "question":  "We asked 100 married women... Tell me a kind of plastic surgery you wish your husband would get.",
        "answers":  [
                        {
                            "text":  "lipo/tummy tuck",
                            "points":  37
                        },
                        {
                            "text":  "\"enlargement\"",
                            "points":  28
                        },
                        {
                            "text":  "nose job",
                            "points":  17
                        },
                        {
                            "text":  "hair transplant",
                            "points":  9
                        },
                        {
                            "text":  "butt implants",
                            "points":  2
                        },
                        {
                            "text":  "manboob reduction",
                            "points":  2
                        },
                        {
                            "text":  "facelift",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100185,
        "question":  "We asked 100 married men... You discover that your wife's three exes died under mysterious circumstances. What do you do?",
        "answers":  [
                        {
                            "text":  "run/divorce",
                            "points":  34
                        },
                        {
                            "text":  "ask her about it",
                            "points":  13
                        },
                        {
                            "text":  "change insurance",
                            "points":  13
                        },
                        {
                            "text":  "worry/cautious",
                            "points":  12
                        },
                        {
                            "text":  "investigate/p.i.",
                            "points":  11
                        },
                        {
                            "text":  "be nicer!",
                            "points":  9
                        },
                        {
                            "text":  "pack heat!",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100186,
        "question":  "Name something specific the Hulk's infant son might do that could make the Hulk say \"That's my boy.\"",
        "answers":  [
                        {
                            "text":  "smash/destroy",
                            "points":  27
                        },
                        {
                            "text":  "lift/throw stuff",
                            "points":  27
                        },
                        {
                            "text":  "turn green",
                            "points":  17
                        },
                        {
                            "text":  "bust outta' diaper",
                            "points":  12
                        },
                        {
                            "text":  "flex muscles",
                            "points":  8
                        },
                        {
                            "text":  "roar/get mad",
                            "points":  4
                        },
                        {
                            "text":  "have green poop",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100187,
        "question":  "Name something a woman does more of when she's pregnant.",
        "answers":  [
                        {
                            "text":  "eat/weird cravings",
                            "points":  63
                        },
                        {
                            "text":  "pee",
                            "points":  17
                        },
                        {
                            "text":  "complain",
                            "points":  6
                        },
                        {
                            "text":  "cry",
                            "points":  3
                        },
                        {
                            "text":  "vomit",
                            "points":  3
                        },
                        {
                            "text":  "toot",
                            "points":  2
                        },
                        {
                            "text":  "sleep",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100188,
        "question":  "Tell me the worst place on your body for a wasp to sting you.",
        "answers":  [
                        {
                            "text":  "face/eye",
                            "points":  49
                        },
                        {
                            "text":  "butt",
                            "points":  17
                        },
                        {
                            "text":  "privates",
                            "points":  16
                        },
                        {
                            "text":  "foot",
                            "points":  5
                        },
                        {
                            "text":  "tongue",
                            "points":  4
                        },
                        {
                            "text":  "neck",
                            "points":  3
                        },
                        {
                            "text":  "finger",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100189,
        "question":  "Name something a gambler might kiss for good luck.",
        "answers":  [
                        {
                            "text":  "the dice",
                            "points":  49
                        },
                        {
                            "text":  "their ring",
                            "points":  12
                        },
                        {
                            "text":  "their boo",
                            "points":  12
                        },
                        {
                            "text":  "money/lucky coin",
                            "points":  9
                        },
                        {
                            "text":  "chips",
                            "points":  6
                        },
                        {
                            "text":  "rabbit's foot",
                            "points":  5
                        },
                        {
                            "text":  "playing cards",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100190,
        "question":  "Fill in the blank: I like to take a shower right after I ______.",
        "answers":  [
                        {
                            "text":  "exercise/run",
                            "points":  48
                        },
                        {
                            "text":  "do yard work",
                            "points":  15
                        },
                        {
                            "text":  "wake up",
                            "points":  12
                        },
                        {
                            "text":  "shag",
                            "points":  9
                        },
                        {
                            "text":  "poo",
                            "points":  5
                        },
                        {
                            "text":  "swim",
                            "points":  4
                        },
                        {
                            "text":  "get off work",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100191,
        "question":  "Name something you do to avoid talking to a really chatty Uber driver.",
        "answers":  [
                        {
                            "text":  "use phone/call",
                            "points":  43
                        },
                        {
                            "text":  "wear earbuds",
                            "points":  35
                        },
                        {
                            "text":  "sleep",
                            "points":  8
                        },
                        {
                            "text":  "fake being deaf",
                            "points":  4
                        },
                        {
                            "text":  "read",
                            "points":  2
                        },
                        {
                            "text":  "ignore them",
                            "points":  2
                        },
                        {
                            "text":  "ask for quiet",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100192,
        "question":  "We asked 100 married women... Name something you'd do to help prepare your husband for a male beauty pageant.",
        "answers":  [
                        {
                            "text":  "shave/wax/pluck",
                            "points":  40
                        },
                        {
                            "text":  "haircut",
                            "points":  30
                        },
                        {
                            "text":  "makeup",
                            "points":  15
                        },
                        {
                            "text":  "new outfit",
                            "points":  4
                        },
                        {
                            "text":  "mani-pedi",
                            "points":  3
                        },
                        {
                            "text":  "diet plan",
                            "points":  2
                        },
                        {
                            "text":  "dance routine",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100193,
        "question":  "Your weird neighbor is flying a drone over your house. What do you do?",
        "answers":  [
                        {
                            "text":  "shoot/destroy it",
                            "points":  38
                        },
                        {
                            "text":  "call cops",
                            "points":  19
                        },
                        {
                            "text":  "confront/yell",
                            "points":  11
                        },
                        {
                            "text":  "hide inside",
                            "points":  11
                        },
                        {
                            "text":  "give the bird",
                            "points":  7
                        },
                        {
                            "text":  "flash/moon it",
                            "points":  5
                        },
                        {
                            "text":  "wave",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100194,
        "question":  "Name a reason you'd let a ghost continue haunting your house.",
        "answers":  [
                        {
                            "text":  "nice/fun company",
                            "points":  38
                        },
                        {
                            "text":  "scare folks off",
                            "points":  16
                        },
                        {
                            "text":  "total hottie!",
                            "points":  15
                        },
                        {
                            "text":  "loved one",
                            "points":  11
                        },
                        {
                            "text":  "does chores/cooks",
                            "points":  8
                        },
                        {
                            "text":  "pays rent",
                            "points":  6
                        },
                        {
                            "text":  "leaves gifts/candy",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100195,
        "question":  "What might be hard to do if you get too much lip filler?",
        "answers":  [
                        {
                            "text":  "talk",
                            "points":  35
                        },
                        {
                            "text":  "kiss",
                            "points":  30
                        },
                        {
                            "text":  "eat",
                            "points":  10
                        },
                        {
                            "text":  "smile",
                            "points":  9
                        },
                        {
                            "text":  "drink/use straw",
                            "points":  7
                        },
                        {
                            "text":  "whistle",
                            "points":  3
                        },
                        {
                            "text":  "open & close mouth",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100196,
        "question":  "We asked 100 husbands... What's something you can do to make your boo smile when they're mad at you?",
        "answers":  [
                        {
                            "text":  "tell a joke",
                            "points":  29
                        },
                        {
                            "text":  "kiss/her neck",
                            "points":  18
                        },
                        {
                            "text":  "compliment her",
                            "points":  16
                        },
                        {
                            "text":  "say sorry",
                            "points":  12
                        },
                        {
                            "text":  "tickle her",
                            "points":  9
                        },
                        {
                            "text":  "smile",
                            "points":  7
                        },
                        {
                            "text":  "offer nookie",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100197,
        "question":  "We asked 100 women... What would you do if a man tried to shush you in public?",
        "answers":  [
                        {
                            "text":  "talk louder",
                            "points":  22
                        },
                        {
                            "text":  "make face/smirk",
                            "points":  21
                        },
                        {
                            "text":  "shush him back",
                            "points":  18
                        },
                        {
                            "text":  "ignore him",
                            "points":  17
                        },
                        {
                            "text":  "leave",
                            "points":  8
                        },
                        {
                            "text":  "chew out/flip off",
                            "points":  8
                        },
                        {
                            "text":  "ask why",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100198,
        "question":  "We asked 100 married men... You'd hate to die and look down to see your wife's new guy using your what?",
        "answers":  [
                        {
                            "text":  "bed",
                            "points":  56
                        },
                        {
                            "text":  "car",
                            "points":  14
                        },
                        {
                            "text":  "toothbrush",
                            "points":  14
                        },
                        {
                            "text":  "phone",
                            "points":  3
                        },
                        {
                            "text":  "clothes/shoes",
                            "points":  3
                        },
                        {
                            "text":  "wife",
                            "points":  3
                        },
                        {
                            "text":  "razor",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100199,
        "question":  "We asked 100 married people... You'd be suspicious if your spouse did what while talking on the phone?",
        "answers":  [
                        {
                            "text":  "left room",
                            "points":  54
                        },
                        {
                            "text":  "whispered",
                            "points":  22
                        },
                        {
                            "text":  "kisses/sexy noises",
                            "points":  6
                        },
                        {
                            "text":  "hung up/stopped talk'g",
                            "points":  5
                        },
                        {
                            "text":  "\"themselves\"",
                            "points":  3
                        },
                        {
                            "text":  "giggled/smiled",
                            "points":  3
                        },
                        {
                            "text":  "\"i love you\"",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100200,
        "question":  "Name something you do at a rock concert that would be weird to do at a child's music recital.",
        "answers":  [
                        {
                            "text":  "dance/jump/head bang",
                            "points":  47
                        },
                        {
                            "text":  "yell/scream",
                            "points":  21
                        },
                        {
                            "text":  "smoke pot",
                            "points":  9
                        },
                        {
                            "text":  "booze up",
                            "points":  6
                        },
                        {
                            "text":  "lighter/phone light",
                            "points":  5
                        },
                        {
                            "text":  "strip/throw bra",
                            "points":  5
                        },
                        {
                            "text":  "crowd surf",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100201,
        "question":  "If you want to make a coworker mad, laugh when they show you a photo of their what?",
        "answers":  [
                        {
                            "text":  "kids/baby",
                            "points":  45
                        },
                        {
                            "text":  "self/body",
                            "points":  18
                        },
                        {
                            "text":  "spouse/mate",
                            "points":  17
                        },
                        {
                            "text":  "pet",
                            "points":  8
                        },
                        {
                            "text":  "car",
                            "points":  3
                        },
                        {
                            "text":  "paystub/bank stmt.",
                            "points":  2
                        },
                        {
                            "text":  "house",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100202,
        "question":  "We asked 100 women... If your mom blames her gray hair on you, you can blame your big what on her?",
        "answers":  [
                        {
                            "text":  "booty",
                            "points":  41
                        },
                        {
                            "text":  "mouth/'tude",
                            "points":  17
                        },
                        {
                            "text":  "belly/weight",
                            "points":  14
                        },
                        {
                            "text":  "boobs",
                            "points":  11
                        },
                        {
                            "text":  "feet",
                            "points":  4
                        },
                        {
                            "text":  "nose",
                            "points":  4
                        },
                        {
                            "text":  "issues/therapy bill",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100203,
        "question":  "Name something a mistress slips into her lover's casket at his funeral.",
        "answers":  [
                        {
                            "text":  "panties/bra",
                            "points":  38
                        },
                        {
                            "text":  "love letter",
                            "points":  24
                        },
                        {
                            "text":  "pic/hot pics",
                            "points":  15
                        },
                        {
                            "text":  "flowers",
                            "points":  10
                        },
                        {
                            "text":  "ring",
                            "points":  3
                        },
                        {
                            "text":  "perfume spritz",
                            "points":  3
                        },
                        {
                            "text":  "lock of hair",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100204,
        "question":  "Name an office supply you might use to pop a zit at work.",
        "answers":  [
                        {
                            "text":  "paper clip",
                            "points":  37
                        },
                        {
                            "text":  "tack",
                            "points":  21
                        },
                        {
                            "text":  "staple/stapler",
                            "points":  13
                        },
                        {
                            "text":  "pen/pencil",
                            "points":  11
                        },
                        {
                            "text":  "letter opener",
                            "points":  5
                        },
                        {
                            "text":  "scissors",
                            "points":  5
                        },
                        {
                            "text":  "staple remover",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100205,
        "question":  "Name a country where drinking alcohol is practically a national pastime.",
        "answers":  [
                        {
                            "text":  "ireland",
                            "points":  34
                        },
                        {
                            "text":  "germany",
                            "points":  22
                        },
                        {
                            "text":  "usa",
                            "points":  16
                        },
                        {
                            "text":  "italy",
                            "points":  9
                        },
                        {
                            "text":  "france",
                            "points":  5
                        },
                        {
                            "text":  "russia",
                            "points":  5
                        },
                        {
                            "text":  "england",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100206,
        "question":  "Name something you shouldn't do in an airplane bathroom.",
        "answers":  [
                        {
                            "text":  "mile high club",
                            "points":  32
                        },
                        {
                            "text":  "smoke",
                            "points":  31
                        },
                        {
                            "text":  "poop",
                            "points":  16
                        },
                        {
                            "text":  "puke",
                            "points":  6
                        },
                        {
                            "text":  "sleep",
                            "points":  4
                        },
                        {
                            "text":  "bathe in sink",
                            "points":  3
                        },
                        {
                            "text":  "eat/drink",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100207,
        "question":  "Name a telltale sign someone just took a big bite of spicy food.",
        "answers":  [
                        {
                            "text":  "cry/watery eyes",
                            "points":  25
                        },
                        {
                            "text":  "red face",
                            "points":  23
                        },
                        {
                            "text":  "sweating",
                            "points":  21
                        },
                        {
                            "text":  "choke/coughing",
                            "points":  11
                        },
                        {
                            "text":  "expression/wide eyes",
                            "points":  7
                        },
                        {
                            "text":  "chugging water",
                            "points":  6
                        },
                        {
                            "text":  "gasping/panting",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100208,
        "question":  "What's something you'd do to prove to a cop that you aren't as drunk as they think you are?",
        "answers":  [
                        {
                            "text":  "walk line",
                            "points":  63
                        },
                        {
                            "text":  "breathalyzer",
                            "points":  14
                        },
                        {
                            "text":  "touch nose",
                            "points":  5
                        },
                        {
                            "text":  "abc's/backwards",
                            "points":  4
                        },
                        {
                            "text":  "dance",
                            "points":  3
                        },
                        {
                            "text":  "stand on one leg",
                            "points":  3
                        },
                        {
                            "text":  "speak clearly",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100209,
        "question":  "Name an issue you have with your appearance that would make you cancel a date.",
        "answers":  [
                        {
                            "text":  "giant zit",
                            "points":  60
                        },
                        {
                            "text":  "bad hair day",
                            "points":  16
                        },
                        {
                            "text":  "chubby/bloated",
                            "points":  8
                        },
                        {
                            "text":  "rash",
                            "points":  3
                        },
                        {
                            "text":  "hate outfit",
                            "points":  3
                        },
                        {
                            "text":  "nose runny/bloody",
                            "points":  2
                        },
                        {
                            "text":  "chipped/janky teeth",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100210,
        "question":  "Name something done to a football you wouldn't want someone to do to your booty.",
        "answers":  [
                        {
                            "text":  "kick/punt",
                            "points":  54
                        },
                        {
                            "text":  "deflate/puncture",
                            "points":  9
                        },
                        {
                            "text":  "spike",
                            "points":  9
                        },
                        {
                            "text":  "throw",
                            "points":  8
                        },
                        {
                            "text":  "touch/squeeze",
                            "points":  6
                        },
                        {
                            "text":  "swat/slap",
                            "points":  4
                        },
                        {
                            "text":  "inflate/pump",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100211,
        "question":  "Uh-oh -- there's a random dead body in your house. What do you do with it?",
        "answers":  [
                        {
                            "text":  "911/coroner",
                            "points":  49
                        },
                        {
                            "text":  "bury it",
                            "points":  17
                        },
                        {
                            "text":  "toss in trash",
                            "points":  9
                        },
                        {
                            "text":  "nothing/ignore",
                            "points":  8
                        },
                        {
                            "text":  "put in neighbor's yard",
                            "points":  6
                        },
                        {
                            "text":  "cover w/ sheet",
                            "points":  3
                        },
                        {
                            "text":  "burn it",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100212,
        "question":  "Name something a pony might do at a kid's birthday party that would traumatize the kids.",
        "answers":  [
                        {
                            "text":  "go potty",
                            "points":  45
                        },
                        {
                            "text":  "bite",
                            "points":  15
                        },
                        {
                            "text":  "kick someone",
                            "points":  12
                        },
                        {
                            "text":  "buck 'em off",
                            "points":  7
                        },
                        {
                            "text":  "run/charge",
                            "points":  6
                        },
                        {
                            "text":  "die",
                            "points":  5
                        },
                        {
                            "text":  "get turned on",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100213,
        "question":  "Name the happiest day in a man's life.",
        "answers":  [
                        {
                            "text":  "wedding day",
                            "points":  40
                        },
                        {
                            "text":  "birth of child",
                            "points":  32
                        },
                        {
                            "text":  "finalize divorce",
                            "points":  7
                        },
                        {
                            "text":  "retirement day",
                            "points":  5
                        },
                        {
                            "text":  "losing virginity",
                            "points":  4
                        },
                        {
                            "text":  "day he dies",
                            "points":  3
                        },
                        {
                            "text":  "getting his license",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100214,
        "question":  "We asked 100 women... If your man picked out your clothing tomorrow, what would you be wearing?",
        "answers":  [
                        {
                            "text":  "tight jeans",
                            "points":  34
                        },
                        {
                            "text":  "nothing",
                            "points":  25
                        },
                        {
                            "text":  "dress/miniskirt",
                            "points":  16
                        },
                        {
                            "text":  "sweats/sportswear",
                            "points":  9
                        },
                        {
                            "text":  "bikini",
                            "points":  4
                        },
                        {
                            "text":  "lingerie/teddy",
                            "points":  4
                        },
                        {
                            "text":  "muumuu",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100215,
        "question":  "We asked 100 single guys... Tell me a way you realize a girl has put you in the friend zone.",
        "answers":  [
                        {
                            "text":  "no sex/kisses",
                            "points":  31
                        },
                        {
                            "text":  "intros me as bud",
                            "points":  15
                        },
                        {
                            "text":  "dates/talks about guys",
                            "points":  14
                        },
                        {
                            "text":  "she's sloppy",
                            "points":  10
                        },
                        {
                            "text":  "she tells me",
                            "points":  10
                        },
                        {
                            "text":  "doesn't call/text",
                            "points":  10
                        },
                        {
                            "text":  "won't go out w/ me",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100216,
        "question":  "We asked 100 women... You met your new guy on an app, but you tell everyone you met where?",
        "answers":  [
                        {
                            "text":  "store/bookstore",
                            "points":  28
                        },
                        {
                            "text":  "church",
                            "points":  18
                        },
                        {
                            "text":  "bar/club",
                            "points":  17
                        },
                        {
                            "text":  "blind date/thru bff",
                            "points":  16
                        },
                        {
                            "text":  "beach",
                            "points":  7
                        },
                        {
                            "text":  "work",
                            "points":  6
                        },
                        {
                            "text":  "dating app! why lie?",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100217,
        "question":  "Name a boy band a lot of people grew up listening to.",
        "answers":  [
                        {
                            "text":  "*nsync",
                            "points":  27
                        },
                        {
                            "text":  "backstreet boys",
                            "points":  21
                        },
                        {
                            "text":  "new kids...",
                            "points":  12
                        },
                        {
                            "text":  "the jackson 5",
                            "points":  11
                        },
                        {
                            "text":  "boyz ii men",
                            "points":  11
                        },
                        {
                            "text":  "the beatles",
                            "points":  7
                        },
                        {
                            "text":  "menudo",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100218,
        "question":  "If your face is on a bus stop poster, you're probably a what?",
        "answers":  [
                        {
                            "text":  "criminal",
                            "points":  24
                        },
                        {
                            "text":  "lawyer",
                            "points":  16
                        },
                        {
                            "text":  "missing person",
                            "points":  15
                        },
                        {
                            "text":  "tv/movie star",
                            "points":  13
                        },
                        {
                            "text":  "realtor",
                            "points":  12
                        },
                        {
                            "text":  "model",
                            "points":  10
                        },
                        {
                            "text":  "politician",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100219,
        "question":  "Name something some animals eat that you wouldn't.",
        "answers":  [
                        {
                            "text":  "grass/plants/hay",
                            "points":  23
                        },
                        {
                            "text":  "poop",
                            "points":  21
                        },
                        {
                            "text":  "raw meat/bones",
                            "points":  19
                        },
                        {
                            "text":  "bugs/worms",
                            "points":  19
                        },
                        {
                            "text":  "trash",
                            "points":  6
                        },
                        {
                            "text":  "kibble/pet food",
                            "points":  4
                        },
                        {
                            "text":  "their young",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100220,
        "question":  "Name any female superhero.",
        "answers":  [
                        {
                            "text":  "wonder woman",
                            "points":  76
                        },
                        {
                            "text":  "supergirl",
                            "points":  4
                        },
                        {
                            "text":  "superwoman",
                            "points":  3
                        },
                        {
                            "text":  "catwoman",
                            "points":  3
                        },
                        {
                            "text":  "black widow",
                            "points":  3
                        },
                        {
                            "text":  "mom",
                            "points":  2
                        },
                        {
                            "text":  "starlight",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100221,
        "question":  "We asked 100 women... Fill in the blank: Some men make love like they're riding a ______.",
        "answers":  [
                        {
                            "text":  "horse",
                            "points":  55
                        },
                        {
                            "text":  "bull",
                            "points":  15
                        },
                        {
                            "text":  "bike",
                            "points":  8
                        },
                        {
                            "text":  "amusement ride",
                            "points":  6
                        },
                        {
                            "text":  "donkey/mule",
                            "points":  4
                        },
                        {
                            "text":  "motorcycle",
                            "points":  3
                        },
                        {
                            "text":  "shopping cart",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100222,
        "question":  "Name something a queen has that a drag queen might have, too.",
        "answers":  [
                        {
                            "text":  "crown/tiara",
                            "points":  52
                        },
                        {
                            "text":  "dress/gown",
                            "points":  13
                        },
                        {
                            "text":  "makeup",
                            "points":  9
                        },
                        {
                            "text":  "wig",
                            "points":  8
                        },
                        {
                            "text":  "boobage",
                            "points":  6
                        },
                        {
                            "text":  "high heels",
                            "points":  3
                        },
                        {
                            "text":  "attitude",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100223,
        "question":  "If a man has a sexy accent and a thick mustache, he's probably from what country?",
        "answers":  [
                        {
                            "text":  "italy",
                            "points":  48
                        },
                        {
                            "text":  "france",
                            "points":  21
                        },
                        {
                            "text":  "spain",
                            "points":  9
                        },
                        {
                            "text":  "greece",
                            "points":  6
                        },
                        {
                            "text":  "scotland",
                            "points":  3
                        },
                        {
                            "text":  "mexico",
                            "points":  3
                        },
                        {
                            "text":  "england",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100224,
        "question":  "Name an occasion for which you might wear your lucky underwear.",
        "answers":  [
                        {
                            "text":  "date night",
                            "points":  44
                        },
                        {
                            "text":  "job interview",
                            "points":  15
                        },
                        {
                            "text":  "sporting event",
                            "points":  15
                        },
                        {
                            "text":  "gambling/lotto",
                            "points":  7
                        },
                        {
                            "text":  "wedding day",
                            "points":  6
                        },
                        {
                            "text":  "anniversary",
                            "points":  3
                        },
                        {
                            "text":  "taking test",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100225,
        "question":  "Name something a man might have in common with Charlie Brown.",
        "answers":  [
                        {
                            "text":  "round bald head",
                            "points":  43
                        },
                        {
                            "text":  "sad sack/bad luck",
                            "points":  19
                        },
                        {
                            "text":  "owns a dog",
                            "points":  17
                        },
                        {
                            "text":  "style/zigzag shirt",
                            "points":  8
                        },
                        {
                            "text":  "same smile",
                            "points":  2
                        },
                        {
                            "text":  "dance skills",
                            "points":  2
                        },
                        {
                            "text":  "same name",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100226,
        "question":  "We asked 100 women... Name something a woman might do around your man that would make you give her the side-eye.",
        "answers":  [
                        {
                            "text":  "handsy/grab butt",
                            "points":  43
                        },
                        {
                            "text":  "show cleavage",
                            "points":  16
                        },
                        {
                            "text":  "smile",
                            "points":  11
                        },
                        {
                            "text":  "make eyes/ogle",
                            "points":  9
                        },
                        {
                            "text":  "bend over",
                            "points":  6
                        },
                        {
                            "text":  "stand too close",
                            "points":  4
                        },
                        {
                            "text":  "giggle",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100227,
        "question":  "What's a symbol you use instead of letters when typing a curse word?",
        "answers":  [
                        {
                            "text":  "asterisk/*",
                            "points":  42
                        },
                        {
                            "text":  "pound sign/#",
                            "points":  25
                        },
                        {
                            "text":  "exclamation point/!",
                            "points":  8
                        },
                        {
                            "text":  "dollar sign/$",
                            "points":  6
                        },
                        {
                            "text":  "at sign/@",
                            "points":  5
                        },
                        {
                            "text":  "ampersand/&",
                            "points":  4
                        },
                        {
                            "text":  "middle finger emoji",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100228,
        "question":  "You felt sick at a restaurant. You might try to discreetly puke into what?",
        "answers":  [
                        {
                            "text":  "napkin",
                            "points":  41
                        },
                        {
                            "text":  "purse",
                            "points":  16
                        },
                        {
                            "text":  "toilet",
                            "points":  16
                        },
                        {
                            "text":  "dish/glass",
                            "points":  9
                        },
                        {
                            "text":  "trash can",
                            "points":  6
                        },
                        {
                            "text":  "a plant",
                            "points":  3
                        },
                        {
                            "text":  "doggie bag",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100229,
        "question":  "What specific reaction is a dead giveaway that a man is reading a sexy text message?",
        "answers":  [
                        {
                            "text":  "smiles/smirks",
                            "points":  41
                        },
                        {
                            "text":  "he's \"excited\"",
                            "points":  14
                        },
                        {
                            "text":  "blushes",
                            "points":  13
                        },
                        {
                            "text":  "hides/shields phone",
                            "points":  11
                        },
                        {
                            "text":  "wide eyes",
                            "points":  5
                        },
                        {
                            "text":  "sweats",
                            "points":  5
                        },
                        {
                            "text":  "raises eyebrows",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100230,
        "question":  "We asked 100 women... It's not technically cheating, but you'd be mad if your man did what with another woman?",
        "answers":  [
                        {
                            "text":  "dinner/drinks",
                            "points":  40
                        },
                        {
                            "text":  "texted/talked",
                            "points":  25
                        },
                        {
                            "text":  "kissed",
                            "points":  15
                        },
                        {
                            "text":  "got touchy/hugged",
                            "points":  4
                        },
                        {
                            "text":  "danced",
                            "points":  3
                        },
                        {
                            "text":  "went to a movie",
                            "points":  3
                        },
                        {
                            "text":  "paid her bills",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100231,
        "question":  "We asked 100 married women... What's the last thing you'd say to your husband if he was going to jail?",
        "answers":  [
                        {
                            "text":  "\"divorce/bye!\"",
                            "points":  40
                        },
                        {
                            "text":  "\"i love you!\"",
                            "points":  15
                        },
                        {
                            "text":  "\"i'll wait!\"",
                            "points":  13
                        },
                        {
                            "text":  "\"i'll visit!\"",
                            "points":  12
                        },
                        {
                            "text":  "\"stay there!\"",
                            "points":  6
                        },
                        {
                            "text":  "\"good luck!\"",
                            "points":  5
                        },
                        {
                            "text":  "\"don't drop soap!\"",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100232,
        "question":  "Name something a jealous artist might do to sabotage his rival's painting.",
        "answers":  [
                        {
                            "text":  "graffiti/splash paint",
                            "points":  37
                        },
                        {
                            "text":  "slash/cut up",
                            "points":  32
                        },
                        {
                            "text":  "copy it",
                            "points":  6
                        },
                        {
                            "text":  "wet it/spit on",
                            "points":  5
                        },
                        {
                            "text":  "trash talk it",
                            "points":  5
                        },
                        {
                            "text":  "steal it",
                            "points":  4
                        },
                        {
                            "text":  "burn it",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100233,
        "question":  "Worst job interview ever: The interviewer laughed at my what?",
        "answers":  [
                        {
                            "text":  "resume/school",
                            "points":  36
                        },
                        {
                            "text":  "clothes",
                            "points":  16
                        },
                        {
                            "text":  "name",
                            "points":  14
                        },
                        {
                            "text":  "looks/hair",
                            "points":  11
                        },
                        {
                            "text":  "answers",
                            "points":  7
                        },
                        {
                            "text":  "speech/voice",
                            "points":  6
                        },
                        {
                            "text":  "salary request",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100234,
        "question":  "We asked 100 women... Name something you might do at a bar that your mom wouldn't call ladylike.",
        "answers":  [
                        {
                            "text":  "tequila shots",
                            "points":  31
                        },
                        {
                            "text":  "dance/on table",
                            "points":  19
                        },
                        {
                            "text":  "cuss like a sailor",
                            "points":  15
                        },
                        {
                            "text":  "burp",
                            "points":  15
                        },
                        {
                            "text":  "flirt",
                            "points":  8
                        },
                        {
                            "text":  "spit",
                            "points":  3
                        },
                        {
                            "text":  "play pool/darts",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100235,
        "question":  "The court jester was sent to the dungeon after making fun of the king's what?",
        "answers":  [
                        {
                            "text":  "wife",
                            "points":  27
                        },
                        {
                            "text":  "face/nose",
                            "points":  21
                        },
                        {
                            "text":  "body/height",
                            "points":  14
                        },
                        {
                            "text":  "clothes/crown",
                            "points":  13
                        },
                        {
                            "text":  "hair/wig",
                            "points":  12
                        },
                        {
                            "text":  "daughter/son",
                            "points":  3
                        },
                        {
                            "text":  "voice",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100236,
        "question":  "Name something a player does in the end zone that he also might do on his wedding day.",
        "answers":  [
                        {
                            "text":  "dance",
                            "points":  75
                        },
                        {
                            "text":  "kneel",
                            "points":  4
                        },
                        {
                            "text":  "cheer",
                            "points":  3
                        },
                        {
                            "text":  "score",
                            "points":  3
                        },
                        {
                            "text":  "jump up & down",
                            "points":  3
                        },
                        {
                            "text":  "run",
                            "points":  2
                        },
                        {
                            "text":  "high five",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100237,
        "question":  "If a couple owned a deli, name something they might bring home from work to spice up their love life.",
        "answers":  [
                        {
                            "text":  "meat/salami",
                            "points":  55
                        },
                        {
                            "text":  "pickle/cucumber",
                            "points":  15
                        },
                        {
                            "text":  "cheese",
                            "points":  8
                        },
                        {
                            "text":  "condiment/mustard",
                            "points":  7
                        },
                        {
                            "text":  "bread/baguette",
                            "points":  3
                        },
                        {
                            "text":  "slicer/knife",
                            "points":  2
                        },
                        {
                            "text":  "olives",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100238,
        "question":  "What do you do immediately after a great whoopee session?",
        "answers":  [
                        {
                            "text":  "sleep like a baby",
                            "points":  50
                        },
                        {
                            "text":  "eat/drink",
                            "points":  12
                        },
                        {
                            "text":  "go potty",
                            "points":  11
                        },
                        {
                            "text":  "shower",
                            "points":  7
                        },
                        {
                            "text":  "cuddle",
                            "points":  5
                        },
                        {
                            "text":  "smoke",
                            "points":  5
                        },
                        {
                            "text":  "never had one!",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100239,
        "question":  "Name a place Kevin Hart goes where he might use a booster seat.",
        "answers":  [
                        {
                            "text":  "restaurant",
                            "points":  49
                        },
                        {
                            "text":  "bar",
                            "points":  13
                        },
                        {
                            "text":  "the movies",
                            "points":  9
                        },
                        {
                            "text":  "car/truck",
                            "points":  8
                        },
                        {
                            "text":  "sports event",
                            "points":  7
                        },
                        {
                            "text":  "everywhere",
                            "points":  3
                        },
                        {
                            "text":  "airplane",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100240,
        "question":  "Name something you might splurge on in Vegas after winning big at the casino.",
        "answers":  [
                        {
                            "text":  "gourmet dinner",
                            "points":  44
                        },
                        {
                            "text":  "5-star hotel/mgm",
                            "points":  11
                        },
                        {
                            "text":  "champagne",
                            "points":  9
                        },
                        {
                            "text":  "car/limo",
                            "points":  8
                        },
                        {
                            "text":  "a show",
                            "points":  7
                        },
                        {
                            "text":  "jewelry",
                            "points":  7
                        },
                        {
                            "text":  "new outfit",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  100241,
        "question":  "Fill in the blank: This is a public service announcement for husbands. Remember to ______ your wife.",
        "answers":  [
                        {
                            "text":  "kiss & hug",
                            "points":  33
                        },
                        {
                            "text":  "thank/appreciate",
                            "points":  22
                        },
                        {
                            "text":  "love/respect",
                            "points":  16
                        },
                        {
                            "text":  "listen to",
                            "points":  7
                        },
                        {
                            "text":  "spoil",
                            "points":  7
                        },
                        {
                            "text":  "feed",
                            "points":  4
                        },
                        {
                            "text":  "make mad love to",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100242,
        "question":  "We asked 100 women... Fill in the blank: I like to think I'm ______er than most other women.",
        "answers":  [
                        {
                            "text":  "smarter",
                            "points":  32
                        },
                        {
                            "text":  "prettier/hotter",
                            "points":  23
                        },
                        {
                            "text":  "better",
                            "points":  19
                        },
                        {
                            "text":  "nicer/sweeter",
                            "points":  12
                        },
                        {
                            "text":  "easier",
                            "points":  2
                        },
                        {
                            "text":  "healthier",
                            "points":  2
                        },
                        {
                            "text":  "funnier",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100243,
        "question":  "Fill in the blank: ______ mama.",
        "answers":  [
                        {
                            "text":  "hot mama",
                            "points":  31
                        },
                        {
                            "text":  "baby mama",
                            "points":  21
                        },
                        {
                            "text":  "big mama",
                            "points":  13
                        },
                        {
                            "text":  "sugar mama",
                            "points":  13
                        },
                        {
                            "text":  "yo mama",
                            "points":  8
                        },
                        {
                            "text":  "sexy mama",
                            "points":  4
                        },
                        {
                            "text":  "hoochie mama",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100244,
        "question":  "Name something a rebellious nun might do to her habit to make it look stylish.",
        "answers":  [
                        {
                            "text":  "bedazzle/bling",
                            "points":  29
                        },
                        {
                            "text":  "alter/shorten",
                            "points":  28
                        },
                        {
                            "text":  "dye it/red",
                            "points":  24
                        },
                        {
                            "text":  "embroidery/lace",
                            "points":  4
                        },
                        {
                            "text":  "no headdress",
                            "points":  3
                        },
                        {
                            "text":  "cute belt",
                            "points":  2
                        },
                        {
                            "text":  "add flowers",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100245,
        "question":  "You could be a celebrity if only you had better what?",
        "answers":  [
                        {
                            "text":  "looks/teeth",
                            "points":  28
                        },
                        {
                            "text":  "talent/ideas",
                            "points":  18
                        },
                        {
                            "text":  "abs/bod",
                            "points":  17
                        },
                        {
                            "text":  "connections/managem't",
                            "points":  10
                        },
                        {
                            "text":  "confidence/ego",
                            "points":  10
                        },
                        {
                            "text":  "hair",
                            "points":  5
                        },
                        {
                            "text":  "clothes",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100246,
        "question":  "Name a side dish that pairs well with barbecue.",
        "answers":  [
                        {
                            "text":  "beans",
                            "points":  23
                        },
                        {
                            "text":  "corn",
                            "points":  16
                        },
                        {
                            "text":  "potato salad",
                            "points":  15
                        },
                        {
                            "text":  "mac & cheese",
                            "points":  14
                        },
                        {
                            "text":  "fries",
                            "points":  11
                        },
                        {
                            "text":  "coleslaw",
                            "points":  9
                        },
                        {
                            "text":  "more meat",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100247,
        "question":  "What do you pretend to do outside when you're really spying on your neighbor?",
        "answers":  [
                        {
                            "text":  "yard work/water",
                            "points":  62
                        },
                        {
                            "text":  "walk/my dog",
                            "points":  8
                        },
                        {
                            "text":  "take out trash",
                            "points":  5
                        },
                        {
                            "text":  "sweep",
                            "points":  5
                        },
                        {
                            "text":  "wash car",
                            "points":  4
                        },
                        {
                            "text":  "check mail",
                            "points":  4
                        },
                        {
                            "text":  "bird-watch",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100248,
        "question":  "Give me a word you call your lover when sending them a romantic text.",
        "answers":  [
                        {
                            "text":  "babe/baby/bae",
                            "points":  53
                        },
                        {
                            "text":  "hon/honey",
                            "points":  18
                        },
                        {
                            "text":  "sweetie/sweetheart",
                            "points":  7
                        },
                        {
                            "text":  "love",
                            "points":  5
                        },
                        {
                            "text":  "boo",
                            "points":  4
                        },
                        {
                            "text":  "pookie",
                            "points":  2
                        },
                        {
                            "text":  "sexy",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100249,
        "question":  "At the wedding, the groom was so much shorter than his bride that he had to stand on what?",
        "answers":  [
                        {
                            "text":  "stool/stepstool",
                            "points":  36
                        },
                        {
                            "text":  "box/crate",
                            "points":  32
                        },
                        {
                            "text":  "chair",
                            "points":  8
                        },
                        {
                            "text":  "a stairstep",
                            "points":  5
                        },
                        {
                            "text":  "her feet",
                            "points":  4
                        },
                        {
                            "text":  "ladder",
                            "points":  3
                        },
                        {
                            "text":  "books/bibles",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100250,
        "question":  "If you're setting the mood for bedroom fun, name a genre of music that would kill the vibe.",
        "answers":  [
                        {
                            "text":  "rap/hip-hop",
                            "points":  30
                        },
                        {
                            "text":  "rock/metal",
                            "points":  25
                        },
                        {
                            "text":  "polka",
                            "points":  13
                        },
                        {
                            "text":  "country/bluegrass",
                            "points":  11
                        },
                        {
                            "text":  "jazz",
                            "points":  5
                        },
                        {
                            "text":  "gospel",
                            "points":  4
                        },
                        {
                            "text":  "opera",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100251,
        "question":  "We asked 100 women... If your Uber driver is really hot, where might you ask him to take you?",
        "answers":  [
                        {
                            "text":  "restaurant/dinner",
                            "points":  22
                        },
                        {
                            "text":  "my house",
                            "points":  21
                        },
                        {
                            "text":  "his place",
                            "points":  21
                        },
                        {
                            "text":  "hotel",
                            "points":  12
                        },
                        {
                            "text":  "beach",
                            "points":  7
                        },
                        {
                            "text":  "bar/club",
                            "points":  5
                        },
                        {
                            "text":  "where i was going",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100252,
        "question":  "Snoop Dogg said, \"My new weed will get you higher than a\" what?",
        "answers":  [
                        {
                            "text":  "kite",
                            "points":  67
                        },
                        {
                            "text":  "cloud",
                            "points":  7
                        },
                        {
                            "text":  "plane/jet",
                            "points":  5
                        },
                        {
                            "text":  "rocket/spaceship",
                            "points":  5
                        },
                        {
                            "text":  "giraffe's booty",
                            "points":  2
                        },
                        {
                            "text":  "skyscraper",
                            "points":  2
                        },
                        {
                            "text":  "tree",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100253,
        "question":  "Name a place that's inappropriate for a stripper to try out her moves.",
        "answers":  [
                        {
                            "text":  "church",
                            "points":  54
                        },
                        {
                            "text":  "school/pta",
                            "points":  18
                        },
                        {
                            "text":  "mall/store",
                            "points":  7
                        },
                        {
                            "text":  "bus/bus stop",
                            "points":  4
                        },
                        {
                            "text":  "funeral",
                            "points":  3
                        },
                        {
                            "text":  "park",
                            "points":  2
                        },
                        {
                            "text":  "restaurant",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100254,
        "question":  "Name something a tough guy has that you'd be surprised was the color pink.",
        "answers":  [
                        {
                            "text":  "clothes/undies",
                            "points":  53
                        },
                        {
                            "text":  "car/monster truck",
                            "points":  23
                        },
                        {
                            "text":  "weapon/gun",
                            "points":  4
                        },
                        {
                            "text":  "hair",
                            "points":  3
                        },
                        {
                            "text":  "hammer/tools",
                            "points":  3
                        },
                        {
                            "text":  "phone",
                            "points":  2
                        },
                        {
                            "text":  "bag/fanny pack",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100255,
        "question":  "Name something specific that a female secret agent's bra might be able to do.",
        "answers":  [
                        {
                            "text":  "shoot/lasers",
                            "points":  42
                        },
                        {
                            "text":  "take pics/record",
                            "points":  25
                        },
                        {
                            "text":  "stop bullets",
                            "points":  7
                        },
                        {
                            "text":  "hide things/gun",
                            "points":  7
                        },
                        {
                            "text":  "inject meds/poison",
                            "points":  3
                        },
                        {
                            "text":  "explode",
                            "points":  3
                        },
                        {
                            "text":  "send her location",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100256,
        "question":  "Name someone who'd be offended if you gave them a plastic surgery gift card.",
        "answers":  [
                        {
                            "text":  "mate/date",
                            "points":  41
                        },
                        {
                            "text":  "mom/dad",
                            "points":  19
                        },
                        {
                            "text":  "in-law",
                            "points":  9
                        },
                        {
                            "text":  "friend",
                            "points":  8
                        },
                        {
                            "text":  "boss/coworker",
                            "points":  5
                        },
                        {
                            "text":  "celeb/model",
                            "points":  5
                        },
                        {
                            "text":  "sibling",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100257,
        "question":  "Name something parents tell their teenager he can't do that he'd respond \"But you do it.\"",
        "answers":  [
                        {
                            "text":  "drink",
                            "points":  39
                        },
                        {
                            "text":  "smoke",
                            "points":  21
                        },
                        {
                            "text":  "cuss",
                            "points":  13
                        },
                        {
                            "text":  "stay up/out late",
                            "points":  7
                        },
                        {
                            "text":  "boom boom time",
                            "points":  4
                        },
                        {
                            "text":  "text & drive",
                            "points":  3
                        },
                        {
                            "text":  "speed",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100258,
        "question":  "Name something every late-night TV show host has.",
        "answers":  [
                        {
                            "text":  "personality/humor",
                            "points":  32
                        },
                        {
                            "text":  "guests",
                            "points":  13
                        },
                        {
                            "text":  "band/music",
                            "points":  12
                        },
                        {
                            "text":  "money",
                            "points":  10
                        },
                        {
                            "text":  "a desk",
                            "points":  9
                        },
                        {
                            "text":  "coffee mug/drink",
                            "points":  9
                        },
                        {
                            "text":  "sidekick",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100259,
        "question":  "Name something a person does that slows down the checkout line at the store.",
        "answers":  [
                        {
                            "text":  "writes check",
                            "points":  25
                        },
                        {
                            "text":  "pays cash/counts it",
                            "points":  23
                        },
                        {
                            "text":  "coupons",
                            "points":  15
                        },
                        {
                            "text":  "yaps w/ cashier",
                            "points":  15
                        },
                        {
                            "text":  "price check",
                            "points":  4
                        },
                        {
                            "text":  "on phone",
                            "points":  4
                        },
                        {
                            "text":  "\"i forgot something!\"",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100260,
        "question":  "What does a dog do when you come home that would be weird if your spouse did it too?",
        "answers":  [
                        {
                            "text":  "lick me",
                            "points":  22
                        },
                        {
                            "text":  "jump on me",
                            "points":  17
                        },
                        {
                            "text":  "wag booty",
                            "points":  16
                        },
                        {
                            "text":  "bark",
                            "points":  14
                        },
                        {
                            "text":  "pee/poo",
                            "points":  11
                        },
                        {
                            "text":  "hump my leg",
                            "points":  5
                        },
                        {
                            "text":  "sniff me",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100261,
        "question":  "Living or dead, name an artist you'd love to paint your portrait.",
        "answers":  [
                        {
                            "text":  "da vinci",
                            "points":  19
                        },
                        {
                            "text":  "picasso",
                            "points":  18
                        },
                        {
                            "text":  "van gogh",
                            "points":  16
                        },
                        {
                            "text":  "michelangelo",
                            "points":  13
                        },
                        {
                            "text":  "monet",
                            "points":  11
                        },
                        {
                            "text":  "rembrandt",
                            "points":  7
                        },
                        {
                            "text":  "dali",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  100262,
        "question":  "Give me one good reason you're not a nudist.",
        "answers":  [
                        {
                            "text":  "too flabby",
                            "points":  54
                        },
                        {
                            "text":  "embarassed/shy",
                            "points":  15
                        },
                        {
                            "text":  "saggy skin/breasts",
                            "points":  7
                        },
                        {
                            "text":  "not endowed",
                            "points":  4
                        },
                        {
                            "text":  "get arrested",
                            "points":  3
                        },
                        {
                            "text":  "too hairy",
                            "points":  3
                        },
                        {
                            "text":  "i burn easily",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100263,
        "question":  "Name a subject that women get tired of men mansplaining to them.",
        "answers":  [
                        {
                            "text":  "cars/driving",
                            "points":  42
                        },
                        {
                            "text":  "sports",
                            "points":  26
                        },
                        {
                            "text":  "finances",
                            "points":  6
                        },
                        {
                            "text":  "work",
                            "points":  6
                        },
                        {
                            "text":  "women's health",
                            "points":  3
                        },
                        {
                            "text":  "tools",
                            "points":  3
                        },
                        {
                            "text":  "making love",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100264,
        "question":  "Name a celebrity with enough kids to fill a basketball team.",
        "answers":  [
                        {
                            "text":  "nick cannon",
                            "points":  28
                        },
                        {
                            "text":  "angelina jolie/brad pitt",
                            "points":  26
                        },
                        {
                            "text":  "alec baldwin",
                            "points":  13
                        },
                        {
                            "text":  "george foreman",
                            "points":  11
                        },
                        {
                            "text":  "michelle/jim bob duggar",
                            "points":  4
                        },
                        {
                            "text":  "eddie murphy",
                            "points":  4
                        },
                        {
                            "text":  "madonna",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100265,
        "question":  "We asked 100 men... If you're on the kiss cam at a football game, name someone you would not want to be sitting next to.",
        "answers":  [
                        {
                            "text":  "mom",
                            "points":  26
                        },
                        {
                            "text":  "mother-in-law",
                            "points":  24
                        },
                        {
                            "text":  "bro/sis",
                            "points":  13
                        },
                        {
                            "text":  "gramps/granny",
                            "points":  8
                        },
                        {
                            "text":  "worst enemy",
                            "points":  8
                        },
                        {
                            "text":  "my ex",
                            "points":  5
                        },
                        {
                            "text":  "celeb/politician",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100266,
        "question":  "If babies were on Instagram, what would they post pictures of?",
        "answers":  [
                        {
                            "text":  "food/milk bottles",
                            "points":  20
                        },
                        {
                            "text":  "boobs",
                            "points":  14
                        },
                        {
                            "text":  "themselves",
                            "points":  14
                        },
                        {
                            "text":  "parents",
                            "points":  12
                        },
                        {
                            "text":  "pacifiers",
                            "points":  11
                        },
                        {
                            "text":  "toys",
                            "points":  9
                        },
                        {
                            "text":  "full diapers",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  100267,
        "question":  "Name something football players do to hype up their teammates.",
        "answers":  [
                        {
                            "text":  "yell/chant/roar",
                            "points":  42
                        },
                        {
                            "text":  "slap/booty",
                            "points":  15
                        },
                        {
                            "text":  "pep talk/trash talk",
                            "points":  11
                        },
                        {
                            "text":  "head butt",
                            "points":  7
                        },
                        {
                            "text":  "chest bump",
                            "points":  5
                        },
                        {
                            "text":  "high five",
                            "points":  5
                        },
                        {
                            "text":  "dance",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100268,
        "question":  "Tell me something a naughty kid might put in the cookies he left out for Santa.",
        "answers":  [
                        {
                            "text":  "laxative/fiber",
                            "points":  33
                        },
                        {
                            "text":  "drugs/weed",
                            "points":  26
                        },
                        {
                            "text":  "salt",
                            "points":  8
                        },
                        {
                            "text":  "hot pepper/sauce",
                            "points":  7
                        },
                        {
                            "text":  "boogers",
                            "points":  6
                        },
                        {
                            "text":  "coal/rocks",
                            "points":  4
                        },
                        {
                            "text":  "raisins",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100269,
        "question":  "Grandma got famous on TikTok for showing off her what?",
        "answers":  [
                        {
                            "text":  "dance moves",
                            "points":  31
                        },
                        {
                            "text":  "cooking",
                            "points":  24
                        },
                        {
                            "text":  "\"goods\"",
                            "points":  18
                        },
                        {
                            "text":  "dentures/teeth",
                            "points":  7
                        },
                        {
                            "text":  "knitting/sewing",
                            "points":  4
                        },
                        {
                            "text":  "face/expressions",
                            "points":  2
                        },
                        {
                            "text":  "garden",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100270,
        "question":  "Madam Zala is a different kind of psychic. Instead of your palms, she reads your what?",
        "answers":  [
                        {
                            "text":  "feet/toes",
                            "points":  30
                        },
                        {
                            "text":  "mind",
                            "points":  21
                        },
                        {
                            "text":  "face/wrinkles",
                            "points":  18
                        },
                        {
                            "text":  "hair/head lumps",
                            "points":  6
                        },
                        {
                            "text":  "cards",
                            "points":  5
                        },
                        {
                            "text":  "ears",
                            "points":  4
                        },
                        {
                            "text":  "butt",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100271,
        "question":  "Fill in the blank: A woman might tell her man, \"Give me ______ or give me another man.\"",
        "answers":  [
                        {
                            "text":  "cash/credit cards",
                            "points":  28
                        },
                        {
                            "text":  "better sex",
                            "points":  28
                        },
                        {
                            "text":  "undying love",
                            "points":  12
                        },
                        {
                            "text":  "a ring/jewelry",
                            "points":  6
                        },
                        {
                            "text":  "freedom/privacy",
                            "points":  5
                        },
                        {
                            "text":  "attention/time",
                            "points":  5
                        },
                        {
                            "text":  "6 children",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100272,
        "question":  "Name something you might find in Beyoncé's dressing room.",
        "answers":  [
                        {
                            "text":  "clothes/costumes",
                            "points":  27
                        },
                        {
                            "text":  "wig/extensions",
                            "points":  22
                        },
                        {
                            "text":  "makeup",
                            "points":  15
                        },
                        {
                            "text":  "water/food",
                            "points":  8
                        },
                        {
                            "text":  "jay-z",
                            "points":  6
                        },
                        {
                            "text":  "booze",
                            "points":  5
                        },
                        {
                            "text":  "flowers",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100273,
        "question":  "We asked 100 men... If your nickname in the bedroom was something from the ocean, what would it be?",
        "answers":  [
                        {
                            "text":  "shark",
                            "points":  25
                        },
                        {
                            "text":  "octopus",
                            "points":  14
                        },
                        {
                            "text":  "barracuda",
                            "points":  13
                        },
                        {
                            "text":  "walrus",
                            "points":  12
                        },
                        {
                            "text":  "flipper/dolphin",
                            "points":  11
                        },
                        {
                            "text":  "whale/orca",
                            "points":  10
                        },
                        {
                            "text":  "squid",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100274,
        "question":  "Name something that you don't have when you go to Vegas, but you might have when you come back.",
        "answers":  [
                        {
                            "text":  "lotsa money",
                            "points":  24
                        },
                        {
                            "text":  "spouse/ring",
                            "points":  15
                        },
                        {
                            "text":  "std/penicillin",
                            "points":  14
                        },
                        {
                            "text":  "debt",
                            "points":  13
                        },
                        {
                            "text":  "souvenir/chips",
                            "points":  12
                        },
                        {
                            "text":  "hangover",
                            "points":  5
                        },
                        {
                            "text":  "tattoo",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100275,
        "question":  "We asked 100 women... What do men do for women in chick flicks that you wish your man did for you?",
        "answers":  [
                        {
                            "text":  "open doors",
                            "points":  21
                        },
                        {
                            "text":  "give flowers",
                            "points":  21
                        },
                        {
                            "text":  "fancy meal/cook",
                            "points":  16
                        },
                        {
                            "text":  "sweet talk",
                            "points":  11
                        },
                        {
                            "text":  "hold me/hands",
                            "points":  9
                        },
                        {
                            "text":  "tender kisses",
                            "points":  5
                        },
                        {
                            "text":  "serenade",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100276,
        "question":  "We asked 100 men... When you get to heaven, you'll be sad if there's no what there?",
        "answers":  [
                        {
                            "text":  "babes/whoopee",
                            "points":  18
                        },
                        {
                            "text":  "tv/movies",
                            "points":  15
                        },
                        {
                            "text":  "sports/golf",
                            "points":  15
                        },
                        {
                            "text":  "food/pizza",
                            "points":  14
                        },
                        {
                            "text":  "beer/coors",
                            "points":  13
                        },
                        {
                            "text":  "relatives",
                            "points":  7
                        },
                        {
                            "text":  "music/singing",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  100277,
        "question":  "Name something you'd see in London, England, that you'd be surprised to see in London, Kentucky.",
        "answers":  [
                        {
                            "text":  "big ben",
                            "points":  42
                        },
                        {
                            "text":  "royals/king charles",
                            "points":  10
                        },
                        {
                            "text":  "castle",
                            "points":  9
                        },
                        {
                            "text":  "london bridge",
                            "points":  7
                        },
                        {
                            "text":  "red double bus",
                            "points":  7
                        },
                        {
                            "text":  "english food",
                            "points":  6
                        },
                        {
                            "text":  "royal guards",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  100278,
        "question":  "Name a way you'd describe bakery buns and your own buns.",
        "answers":  [
                        {
                            "text":  "soft/squishy",
                            "points":  37
                        },
                        {
                            "text":  "hot/warm",
                            "points":  19
                        },
                        {
                            "text":  "fluffy/puffy",
                            "points":  14
                        },
                        {
                            "text":  "firm",
                            "points":  6
                        },
                        {
                            "text":  "tasty",
                            "points":  5
                        },
                        {
                            "text":  "fresh",
                            "points":  3
                        },
                        {
                            "text":  "doughy",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100279,
        "question":  "Name something a robber might steal from a funeral home.",
        "answers":  [
                        {
                            "text":  "jewelry",
                            "points":  30
                        },
                        {
                            "text":  "money",
                            "points":  20
                        },
                        {
                            "text":  "casket",
                            "points":  11
                        },
                        {
                            "text":  "flowers",
                            "points":  10
                        },
                        {
                            "text":  "a body",
                            "points":  7
                        },
                        {
                            "text":  "gold teeth",
                            "points":  5
                        },
                        {
                            "text":  "cute urns",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100280,
        "question":  "Fill in the blank with the name of a rapper: Lil ______.",
        "answers":  [
                        {
                            "text":  "lil wayne",
                            "points":  51
                        },
                        {
                            "text":  "lil' kim",
                            "points":  14
                        },
                        {
                            "text":  "lil jon",
                            "points":  7
                        },
                        {
                            "text":  "lil nas x",
                            "points":  6
                        },
                        {
                            "text":  "lil pump",
                            "points":  3
                        },
                        {
                            "text":  "lil' bow wow",
                            "points":  3
                        },
                        {
                            "text":  "lil' mo",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100281,
        "question":  "Name an occupation that weighs things on a scale.",
        "answers":  [
                        {
                            "text":  "butcher/deli/grocer",
                            "points":  48
                        },
                        {
                            "text":  "doc/nurse",
                            "points":  15
                        },
                        {
                            "text":  "postal worker/ups",
                            "points":  6
                        },
                        {
                            "text":  "drug dealer",
                            "points":  5
                        },
                        {
                            "text":  "pharmacist",
                            "points":  4
                        },
                        {
                            "text":  "trucker",
                            "points":  4
                        },
                        {
                            "text":  "junkman/dump",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100282,
        "question":  "Name something little kids do on an airplane that would be weird if adults did it.",
        "answers":  [
                        {
                            "text":  "cry/tantrum",
                            "points":  48
                        },
                        {
                            "text":  "stand/jump on seat",
                            "points":  8
                        },
                        {
                            "text":  "kick seat",
                            "points":  7
                        },
                        {
                            "text":  "color/toys",
                            "points":  7
                        },
                        {
                            "text":  "run around",
                            "points":  6
                        },
                        {
                            "text":  "make plane noises",
                            "points":  6
                        },
                        {
                            "text":  "sing",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100283,
        "question":  "Name something the class clown might put up his nose that isn't so funny if it gets stuck.",
        "answers":  [
                        {
                            "text":  "pencil/pen",
                            "points":  41
                        },
                        {
                            "text":  "eraser",
                            "points":  14
                        },
                        {
                            "text":  "food/peanut",
                            "points":  10
                        },
                        {
                            "text":  "finger",
                            "points":  7
                        },
                        {
                            "text":  "marble/toy",
                            "points":  6
                        },
                        {
                            "text":  "a straw",
                            "points":  5
                        },
                        {
                            "text":  "crayon",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100284,
        "question":  "We asked 100 parents... Your kid is officially too old to sleep in your bed when they can do what?",
        "answers":  [
                        {
                            "text":  "use toilet",
                            "points":  33
                        },
                        {
                            "text":  "walk",
                            "points":  13
                        },
                        {
                            "text":  "go to school/college",
                            "points":  11
                        },
                        {
                            "text":  "talk",
                            "points":  10
                        },
                        {
                            "text":  "dress self",
                            "points":  8
                        },
                        {
                            "text":  "drive",
                            "points":  6
                        },
                        {
                            "text":  "read",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100285,
        "question":  "Tell me the worst thing to do in your sleep.",
        "answers":  [
                        {
                            "text":  "snore",
                            "points":  30
                        },
                        {
                            "text":  "go to the bathroom",
                            "points":  19
                        },
                        {
                            "text":  "fart",
                            "points":  12
                        },
                        {
                            "text":  "sleepwalk",
                            "points":  9
                        },
                        {
                            "text":  "talk/ex's name",
                            "points":  7
                        },
                        {
                            "text":  "drool",
                            "points":  5
                        },
                        {
                            "text":  "die",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100286,
        "question":  "Name an activity you'd be surprised to see Megan Thee Stallion teaching at the old folks' home.",
        "answers":  [
                        {
                            "text":  "dance/twerking",
                            "points":  35
                        },
                        {
                            "text":  "sewing/knitting",
                            "points":  16
                        },
                        {
                            "text":  "rap/singing",
                            "points":  9
                        },
                        {
                            "text":  "yoga/exercise",
                            "points":  9
                        },
                        {
                            "text":  "bible study",
                            "points":  6
                        },
                        {
                            "text":  "art",
                            "points":  5
                        },
                        {
                            "text":  "cooking",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100287,
        "question":  "We asked 100 people over 40... What do you regret not doing more of in your twenties?",
        "answers":  [
                        {
                            "text":  "traveling",
                            "points":  26
                        },
                        {
                            "text":  "saving/investing",
                            "points":  22
                        },
                        {
                            "text":  "dating",
                            "points":  12
                        },
                        {
                            "text":  "hooking up",
                            "points":  9
                        },
                        {
                            "text":  "partying",
                            "points":  6
                        },
                        {
                            "text":  "studying",
                            "points":  5
                        },
                        {
                            "text":  "family time",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100288,
        "question":  "Name an innocent reason you've got your butt in the air.",
        "answers":  [
                        {
                            "text":  "yoga/exercise",
                            "points":  31
                        },
                        {
                            "text":  "pick up/look 4 stuff",
                            "points":  24
                        },
                        {
                            "text":  "fell over",
                            "points":  10
                        },
                        {
                            "text":  "twerking/dancing",
                            "points":  6
                        },
                        {
                            "text":  "tying shoe",
                            "points":  5
                        },
                        {
                            "text":  "sleeping",
                            "points":  4
                        },
                        {
                            "text":  "cleaning/laundry",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100289,
        "question":  "We asked 100 women... I bet Channing Tatum smells like what?",
        "answers":  [
                        {
                            "text":  "cologne/musk",
                            "points":  24
                        },
                        {
                            "text":  "sweat",
                            "points":  19
                        },
                        {
                            "text":  "suntan oil/coconut",
                            "points":  12
                        },
                        {
                            "text":  "soap",
                            "points":  11
                        },
                        {
                            "text":  "earth scents/woods",
                            "points":  7
                        },
                        {
                            "text":  "flowers/roses",
                            "points":  6
                        },
                        {
                            "text":  "candy/sweets",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100290,
        "question":  "Fill in the blank: A woman might say, \"I can't believe I ______ed my ex.\"",
        "answers":  [
                        {
                            "text":  "married/dated",
                            "points":  29
                        },
                        {
                            "text":  "boinked",
                            "points":  19
                        },
                        {
                            "text":  "liked/loved",
                            "points":  10
                        },
                        {
                            "text":  "called/texted",
                            "points":  10
                        },
                        {
                            "text":  "dumped/left",
                            "points":  5
                        },
                        {
                            "text":  "trusted",
                            "points":  5
                        },
                        {
                            "text":  "kissed",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100291,
        "question":  "Name a magazine cover you think Steve Harvey has been on more than once.",
        "answers":  [
                        {
                            "text":  "people",
                            "points":  50
                        },
                        {
                            "text":  "gq",
                            "points":  9
                        },
                        {
                            "text":  "tv guide",
                            "points":  7
                        },
                        {
                            "text":  "esquire",
                            "points":  5
                        },
                        {
                            "text":  "ebony",
                            "points":  5
                        },
                        {
                            "text":  "playgirl",
                            "points":  3
                        },
                        {
                            "text":  "time",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100292,
        "question":  "What would you do if your divorced dad started dating a 21-year-old party girl?",
        "answers":  [
                        {
                            "text":  "confront/disgusted",
                            "points":  33
                        },
                        {
                            "text":  "nada/happy for him",
                            "points":  18
                        },
                        {
                            "text":  "disown him",
                            "points":  9
                        },
                        {
                            "text":  "laugh",
                            "points":  8
                        },
                        {
                            "text":  "party w/ them",
                            "points":  5
                        },
                        {
                            "text":  "tell my mom",
                            "points":  4
                        },
                        {
                            "text":  "date her friend/sis",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100293,
        "question":  "Fill in the blank: I have the worst ______.",
        "answers":  [
                        {
                            "text":  "headache/backache",
                            "points":  30
                        },
                        {
                            "text":  "luck",
                            "points":  30
                        },
                        {
                            "text":  "job",
                            "points":  6
                        },
                        {
                            "text":  "breath",
                            "points":  5
                        },
                        {
                            "text":  "body/physique",
                            "points":  4
                        },
                        {
                            "text":  "hair",
                            "points":  3
                        },
                        {
                            "text":  "life",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100294,
        "question":  "Name a Christmas movie people never get tired of.",
        "answers":  [
                        {
                            "text":  "...wonderful life",
                            "points":  28
                        },
                        {
                            "text":  "a christmas story",
                            "points":  20
                        },
                        {
                            "text":  "elf",
                            "points":  9
                        },
                        {
                            "text":  "home alone",
                            "points":  7
                        },
                        {
                            "text":  "die hard",
                            "points":  6
                        },
                        {
                            "text":  "christmas vacation",
                            "points":  5
                        },
                        {
                            "text":  "a christmas carol",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100295,
        "question":  "Name a word they use in a comic strip to represent the sound of hitting someone.",
        "answers":  [
                        {
                            "text":  "bam",
                            "points":  26
                        },
                        {
                            "text":  "pow/kapow",
                            "points":  23
                        },
                        {
                            "text":  "smack",
                            "points":  10
                        },
                        {
                            "text":  "bonk",
                            "points":  6
                        },
                        {
                            "text":  "bang",
                            "points":  6
                        },
                        {
                            "text":  "boom/kaboom",
                            "points":  5
                        },
                        {
                            "text":  "wham",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100296,
        "question":  "Name something a man has that he thinks is badass but women think is just bad.",
        "answers":  [
                        {
                            "text":  "car/truck",
                            "points":  23
                        },
                        {
                            "text":  "motorcycle",
                            "points":  18
                        },
                        {
                            "text":  "facial hair",
                            "points":  10
                        },
                        {
                            "text":  "tattoos",
                            "points":  8
                        },
                        {
                            "text":  "hair/mullet",
                            "points":  8
                        },
                        {
                            "text":  "outfit/shoes",
                            "points":  7
                        },
                        {
                            "text":  "body/\"manhood\"",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  100297,
        "question":  "I want my teeth to be as white as what?",
        "answers":  [
                        {
                            "text":  "snow",
                            "points":  42
                        },
                        {
                            "text":  "pearls",
                            "points":  12
                        },
                        {
                            "text":  "ivory",
                            "points":  8
                        },
                        {
                            "text":  "clouds",
                            "points":  5
                        },
                        {
                            "text":  "nice teeth/steve's",
                            "points":  4
                        },
                        {
                            "text":  "chalk",
                            "points":  4
                        },
                        {
                            "text":  "tissue/toilet paper",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100298,
        "question":  "Name a term or phrase an old person might use for bedroom fun.",
        "answers":  [
                        {
                            "text":  "whoopee",
                            "points":  34
                        },
                        {
                            "text":  "hanky panky",
                            "points":  16
                        },
                        {
                            "text":  "nookie",
                            "points":  10
                        },
                        {
                            "text":  "gettin' frisky",
                            "points":  6
                        },
                        {
                            "text":  "horizontal mambo/tango",
                            "points":  6
                        },
                        {
                            "text":  "canoodling",
                            "points":  4
                        },
                        {
                            "text":  "boom-boom",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100299,
        "question":  "Name a pop singer, past or present, whose dance moves should not be tried at a nursing home.",
        "answers":  [
                        {
                            "text":  "michael jackson",
                            "points":  29
                        },
                        {
                            "text":  "shakira",
                            "points":  19
                        },
                        {
                            "text":  "beyonce",
                            "points":  9
                        },
                        {
                            "text":  "jennifer lopez",
                            "points":  7
                        },
                        {
                            "text":  "madonna",
                            "points":  5
                        },
                        {
                            "text":  "usher",
                            "points":  4
                        },
                        {
                            "text":  "miley cyrus",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100300,
        "question":  "Name a job where people worry about being relatable to the public.",
        "answers":  [
                        {
                            "text":  "politician",
                            "points":  42
                        },
                        {
                            "text":  "actor",
                            "points":  7
                        },
                        {
                            "text":  "news anchor",
                            "points":  7
                        },
                        {
                            "text":  "cop",
                            "points":  7
                        },
                        {
                            "text":  "retail clerk",
                            "points":  5
                        },
                        {
                            "text":  "lawyer",
                            "points":  4
                        },
                        {
                            "text":  "realtor",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100301,
        "question":  "Name something that makes an otherwise average person seem more attractive.",
        "answers":  [
                        {
                            "text":  "humor/personality",
                            "points":  18
                        },
                        {
                            "text":  "great smile",
                            "points":  16
                        },
                        {
                            "text":  "$10.7 million",
                            "points":  10
                        },
                        {
                            "text":  "makeup",
                            "points":  9
                        },
                        {
                            "text":  "clothes/suit",
                            "points":  9
                        },
                        {
                            "text":  "kindness",
                            "points":  8
                        },
                        {
                            "text":  "confidence",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100302,
        "question":  "Give me a word or expression that contains \"foot.\"",
        "answers":  [
                        {
                            "text":  "foot in mouth",
                            "points":  32
                        },
                        {
                            "text":  "footloose/fancy free",
                            "points":  22
                        },
                        {
                            "text":  "football",
                            "points":  5
                        },
                        {
                            "text":  "bigfoot",
                            "points":  4
                        },
                        {
                            "text":  "footlong/sub",
                            "points":  4
                        },
                        {
                            "text":  "barefoot",
                            "points":  3
                        },
                        {
                            "text":  "my foot up your...",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100303,
        "question":  "Name a celebrity known for their wild fashion.",
        "answers":  [
                        {
                            "text":  "lady gaga",
                            "points":  39
                        },
                        {
                            "text":  "cher",
                            "points":  9
                        },
                        {
                            "text":  "dennis rodman",
                            "points":  8
                        },
                        {
                            "text":  "rupaul",
                            "points":  5
                        },
                        {
                            "text":  "madonna",
                            "points":  4
                        },
                        {
                            "text":  "elton john",
                            "points":  4
                        },
                        {
                            "text":  "cyndi lauper",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100304,
        "question":  "Fill in the blank: You've walked into a party and thought, \"I'm the ______est person in this room.\"",
        "answers":  [
                        {
                            "text":  "smartest",
                            "points":  20
                        },
                        {
                            "text":  "oldest",
                            "points":  18
                        },
                        {
                            "text":  "hottest/cutest",
                            "points":  14
                        },
                        {
                            "text":  "dorkiest/lamest",
                            "points":  7
                        },
                        {
                            "text":  "fattest",
                            "points":  5
                        },
                        {
                            "text":  "coolest",
                            "points":  4
                        },
                        {
                            "text":  "shortest",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100305,
        "question":  "Name something of yours that you think would be very hard to sell.",
        "answers":  [
                        {
                            "text":  "used undies/garb",
                            "points":  17
                        },
                        {
                            "text":  "jalopy car",
                            "points":  15
                        },
                        {
                            "text":  "money pit house",
                            "points":  8
                        },
                        {
                            "text":  "family/kids",
                            "points":  8
                        },
                        {
                            "text":  "books",
                            "points":  6
                        },
                        {
                            "text":  "mattress/furniture",
                            "points":  6
                        },
                        {
                            "text":  "my body/organs",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100306,
        "question":  "Name something you have in your car that a cowboy might like to have on his horse.",
        "answers":  [
                        {
                            "text":  "cushy seat/heated",
                            "points":  17
                        },
                        {
                            "text":  "blanket",
                            "points":  15
                        },
                        {
                            "text":  "gps/map",
                            "points":  8
                        },
                        {
                            "text":  "radio",
                            "points":  8
                        },
                        {
                            "text":  "rope",
                            "points":  6
                        },
                        {
                            "text":  "brakes",
                            "points":  5
                        },
                        {
                            "text":  "seat belt",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100307,
        "question":  "Name a kind of dance that would be more fun to do naked.",
        "answers":  [
                        {
                            "text":  "tango",
                            "points":  21
                        },
                        {
                            "text":  "twist",
                            "points":  13
                        },
                        {
                            "text":  "limbo",
                            "points":  8
                        },
                        {
                            "text":  "line dance",
                            "points":  6
                        },
                        {
                            "text":  "hula",
                            "points":  5
                        },
                        {
                            "text":  "samba",
                            "points":  4
                        },
                        {
                            "text":  "waltz",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100308,
        "question":  "Name a creature that is deadlier than it looks.",
        "answers":  [
                        {
                            "text":  "hippo",
                            "points":  15
                        },
                        {
                            "text":  "snake",
                            "points":  14
                        },
                        {
                            "text":  "poisonous frog/toad",
                            "points":  8
                        },
                        {
                            "text":  "bear",
                            "points":  7
                        },
                        {
                            "text":  "dog",
                            "points":  6
                        },
                        {
                            "text":  "spider",
                            "points":  5
                        },
                        {
                            "text":  "lion",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100309,
        "question":  "Fill in the blank: I hope when I get to heaven, they let me be a professional ______.",
        "answers":  [
                        {
                            "text":  "singer/harpist",
                            "points":  15
                        },
                        {
                            "text":  "athlete",
                            "points":  11
                        },
                        {
                            "text":  "angel",
                            "points":  10
                        },
                        {
                            "text":  "pet sitter",
                            "points":  7
                        },
                        {
                            "text":  "sleeper",
                            "points":  5
                        },
                        {
                            "text":  "actor/comedian",
                            "points":  5
                        },
                        {
                            "text":  "chef/baker",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100310,
        "question":  "Who is the funniest person alive right now?",
        "answers":  [
                        {
                            "text":  "steve harvey",
                            "points":  13
                        },
                        {
                            "text":  "jerry seinfeld",
                            "points":  10
                        },
                        {
                            "text":  "kevin hart",
                            "points":  9
                        },
                        {
                            "text":  "chris rock",
                            "points":  7
                        },
                        {
                            "text":  "adam sandler",
                            "points":  7
                        },
                        {
                            "text":  "ricky gervais",
                            "points":  5
                        },
                        {
                            "text":  "katt williams",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100311,
        "question":  "If someone's funky aroma stayed on your clothes, name something you'd do to get rid of it.",
        "answers":  [
                        {
                            "text":  "wash 'em",
                            "points":  42
                        },
                        {
                            "text":  "spritz cologne",
                            "points":  18
                        },
                        {
                            "text":  "throw out/burn",
                            "points":  18
                        },
                        {
                            "text":  "go change",
                            "points":  10
                        },
                        {
                            "text":  "air freshener/lysol",
                            "points":  10
                        },
                        {
                            "text":  "hang up/outside",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100312,
        "question":  "Fill in the blank: A woman might say to her man, \"If you love me, you also have to love my ______.\"",
        "answers":  [
                        {
                            "text":  "pet",
                            "points":  41
                        },
                        {
                            "text":  "family/kids",
                            "points":  41
                        },
                        {
                            "text":  "quirks/personality",
                            "points":  7
                        },
                        {
                            "text":  "body/beer gut",
                            "points":  6
                        },
                        {
                            "text":  "friends",
                            "points":  3
                        },
                        {
                            "text":  "cooking/vegan dish",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100313,
        "question":  "If the booty fairy granted you one wish, you'd ask them to make your booty what?",
        "answers":  [
                        {
                            "text":  "firm/tight/perky",
                            "points":  32
                        },
                        {
                            "text":  "big/juicy",
                            "points":  27
                        },
                        {
                            "text":  "small/thin",
                            "points":  26
                        },
                        {
                            "text":  "rounder",
                            "points":  10
                        },
                        {
                            "text":  "jiggle/dance",
                            "points":  3
                        },
                        {
                            "text":  "smooth/hairless",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100314,
        "question":  "We asked 100 single women... His ring is off, but how can you tell that the guy you're on a date with is married?",
        "answers":  [
                        {
                            "text":  "ring mark",
                            "points":  32
                        },
                        {
                            "text":  "wife calls/texts",
                            "points":  25
                        },
                        {
                            "text":  "he tells you",
                            "points":  16
                        },
                        {
                            "text":  "never invited home",
                            "points":  11
                        },
                        {
                            "text":  "see her pic",
                            "points":  9
                        },
                        {
                            "text":  "acts nervous",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  100315,
        "question":  "Name something that might be fun about dating Willy Wonka.",
        "answers":  [
                        {
                            "text":  "free candy!",
                            "points":  83
                        },
                        {
                            "text":  "river/boat rides",
                            "points":  4
                        },
                        {
                            "text":  "oompa loompas",
                            "points":  4
                        },
                        {
                            "text":  "live in factory",
                            "points":  3
                        },
                        {
                            "text":  "wacky/imagination",
                            "points":  3
                        },
                        {
                            "text":  "he's rich",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100316,
        "question":  "We asked 100 women... Name an activity you'd put on the itinerary for a Vegas divorce party.",
        "answers":  [
                        {
                            "text":  "male strip joint",
                            "points":  57
                        },
                        {
                            "text":  "bar/club",
                            "points":  19
                        },
                        {
                            "text":  "gambling",
                            "points":  11
                        },
                        {
                            "text":  "go to a show",
                            "points":  7
                        },
                        {
                            "text":  "spa day",
                            "points":  3
                        },
                        {
                            "text":  "signing the papers",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100317,
        "question":  "We asked 100 women... What do women talk about when you go to the restroom together?",
        "answers":  [
                        {
                            "text":  "men/their dates",
                            "points":  55
                        },
                        {
                            "text":  "makeup",
                            "points":  14
                        },
                        {
                            "text":  "outfits",
                            "points":  9
                        },
                        {
                            "text":  "the food",
                            "points":  8
                        },
                        {
                            "text":  "gossip/other gals",
                            "points":  8
                        },
                        {
                            "text":  "their hair",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100318,
        "question":  "We asked 100 women... Name something about Mister Rogers that would be a turnoff in your man.",
        "answers":  [
                        {
                            "text":  "his cardigan",
                            "points":  54
                        },
                        {
                            "text":  "voice/how he talks",
                            "points":  28
                        },
                        {
                            "text":  "singing",
                            "points":  9
                        },
                        {
                            "text":  "shoes/changing shoes",
                            "points":  3
                        },
                        {
                            "text":  "always happy",
                            "points":  3
                        },
                        {
                            "text":  "his eyebrows",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100319,
        "question":  "Name something the person carrying the Olympic torch hopes doesn't happen.",
        "answers":  [
                        {
                            "text":  "trips & falls",
                            "points":  53
                        },
                        {
                            "text":  "flame goes out",
                            "points":  24
                        },
                        {
                            "text":  "drops it",
                            "points":  8
                        },
                        {
                            "text":  "burns stuff/self",
                            "points":  6
                        },
                        {
                            "text":  "it rains",
                            "points":  5
                        },
                        {
                            "text":  "pants fall down",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100320,
        "question":  "We asked 100 men... The last name you'd want to accidentally call your wife in a passionate moment is whose?",
        "answers":  [
                        {
                            "text":  "my ex's",
                            "points":  51
                        },
                        {
                            "text":  "her mom's",
                            "points":  18
                        },
                        {
                            "text":  "her bff's",
                            "points":  14
                        },
                        {
                            "text":  "her sister's",
                            "points":  9
                        },
                        {
                            "text":  "my mom's...",
                            "points":  5
                        },
                        {
                            "text":  "my own name!",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100321,
        "question":  "We asked 100 married men... Tell me something you notice that makes you think your wife is becoming a nun.",
        "answers":  [
                        {
                            "text":  "no sex!",
                            "points":  46
                        },
                        {
                            "text":  "wearing a habit",
                            "points":  17
                        },
                        {
                            "text":  "reads bible",
                            "points":  12
                        },
                        {
                            "text":  "prays a lot",
                            "points":  12
                        },
                        {
                            "text":  "stopped cussing",
                            "points":  9
                        },
                        {
                            "text":  "church every day",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100322,
        "question":  "We asked 100 women... You just discovered the diamond in your engagement ring is fake. What do you do?",
        "answers":  [
                        {
                            "text":  "confront/yell",
                            "points":  41
                        },
                        {
                            "text":  "nada/love it!",
                            "points":  29
                        },
                        {
                            "text":  "toss in trash",
                            "points":  8
                        },
                        {
                            "text":  "dump him!",
                            "points":  8
                        },
                        {
                            "text":  "cry",
                            "points":  7
                        },
                        {
                            "text":  "give back/throw at him",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  100323,
        "question":  "We asked 100 married men... What does your wife do when she thinks you're not listening to her?",
        "answers":  [
                        {
                            "text":  "yells/talks louder",
                            "points":  37
                        },
                        {
                            "text":  "keeps talking",
                            "points":  20
                        },
                        {
                            "text":  "\"are you listening?\"",
                            "points":  15
                        },
                        {
                            "text":  "gets mad",
                            "points":  13
                        },
                        {
                            "text":  "quizzes me",
                            "points":  12
                        },
                        {
                            "text":  "makes up wild story",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100324,
        "question":  "We asked 100 women... Some men you've dated smell like what stinky animal?",
        "answers":  [
                        {
                            "text":  "dog",
                            "points":  36
                        },
                        {
                            "text":  "skunk",
                            "points":  30
                        },
                        {
                            "text":  "pig",
                            "points":  21
                        },
                        {
                            "text":  "horse",
                            "points":  6
                        },
                        {
                            "text":  "cow",
                            "points":  4
                        },
                        {
                            "text":  "goat",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100325,
        "question":  "Name a sound people make while eating that ruins everyone else's appetite.",
        "answers":  [
                        {
                            "text":  "chewing/smacking",
                            "points":  36
                        },
                        {
                            "text":  "slurp",
                            "points":  26
                        },
                        {
                            "text":  "burp",
                            "points":  19
                        },
                        {
                            "text":  "2-toot salute",
                            "points":  7
                        },
                        {
                            "text":  "grunt/moan",
                            "points":  6
                        },
                        {
                            "text":  "gag",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100326,
        "question":  "What would you do if you suspected your significant other was lying about what they did for work?",
        "answers":  [
                        {
                            "text":  "follow them",
                            "points":  31
                        },
                        {
                            "text":  "go to their job",
                            "points":  25
                        },
                        {
                            "text":  "ask/confront",
                            "points":  20
                        },
                        {
                            "text":  "call job/boss",
                            "points":  17
                        },
                        {
                            "text":  "break up!",
                            "points":  3
                        },
                        {
                            "text":  "google 'em/linkedin",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100327,
        "question":  "Fill in the blank: After winning the hot dog eating contest, the first thing Big Billy wanted to do was ______.",
        "answers":  [
                        {
                            "text":  "hurl",
                            "points":  80
                        },
                        {
                            "text":  "poop",
                            "points":  6
                        },
                        {
                            "text":  "sleep",
                            "points":  5
                        },
                        {
                            "text":  "drink something",
                            "points":  3
                        },
                        {
                            "text":  "eat another!",
                            "points":  2
                        },
                        {
                            "text":  "burp",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100328,
        "question":  "If you want to play cops and robbers in the bedroom, name a prop you might use.",
        "answers":  [
                        {
                            "text":  "handcuffs",
                            "points":  74
                        },
                        {
                            "text":  "toy gun",
                            "points":  11
                        },
                        {
                            "text":  "mask",
                            "points":  4
                        },
                        {
                            "text":  "billy club",
                            "points":  4
                        },
                        {
                            "text":  "pillowcase for loot",
                            "points":  3
                        },
                        {
                            "text":  "badge",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100329,
        "question":  "We asked 100 women... You'd never tell your boo that you had a freaky dream about who?",
        "answers":  [
                        {
                            "text":  "my ex",
                            "points":  64
                        },
                        {
                            "text":  "his best friend",
                            "points":  11
                        },
                        {
                            "text":  "celeb/denzel",
                            "points":  10
                        },
                        {
                            "text":  "his brother",
                            "points":  7
                        },
                        {
                            "text":  "anyone!",
                            "points":  4
                        },
                        {
                            "text":  "his boss",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100330,
        "question":  "A married man learns never to ask his wife for what when she's mad at him?",
        "answers":  [
                        {
                            "text":  "sex",
                            "points":  63
                        },
                        {
                            "text":  "cook fave meal",
                            "points":  22
                        },
                        {
                            "text":  "kiss/hug",
                            "points":  5
                        },
                        {
                            "text":  "money",
                            "points":  4
                        },
                        {
                            "text":  "forgiveness",
                            "points":  2
                        },
                        {
                            "text":  "love & kindness",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100331,
        "question":  "Name something specific about the Joker that'd be a turnoff to his blind date.",
        "answers":  [
                        {
                            "text":  "makeup/creepy smile",
                            "points":  63
                        },
                        {
                            "text":  "always laughs/jokes",
                            "points":  16
                        },
                        {
                            "text":  "annoying voice",
                            "points":  7
                        },
                        {
                            "text":  "violent/crazy",
                            "points":  7
                        },
                        {
                            "text":  "tacky purple suit",
                            "points":  3
                        },
                        {
                            "text":  "green hair",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100332,
        "question":  "What props does a stripper dressed as a \"Harry Potter\" character need?",
        "answers":  [
                        {
                            "text":  "wand",
                            "points":  61
                        },
                        {
                            "text":  "glasses",
                            "points":  20
                        },
                        {
                            "text":  "hat",
                            "points":  6
                        },
                        {
                            "text":  "cape",
                            "points":  5
                        },
                        {
                            "text":  "broom",
                            "points":  4
                        },
                        {
                            "text":  "book",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100333,
        "question":  "People might call you a party pooper if you do what while the party's going on?",
        "answers":  [
                        {
                            "text":  "leave",
                            "points":  58
                        },
                        {
                            "text":  "sleep/yawn",
                            "points":  29
                        },
                        {
                            "text":  "turn the music off",
                            "points":  4
                        },
                        {
                            "text":  "poop",
                            "points":  3
                        },
                        {
                            "text":  "be boring/on couch",
                            "points":  2
                        },
                        {
                            "text":  "call the cops",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100334,
        "question":  "Name a way that Hot Santa might be different from regular Santa.",
        "answers":  [
                        {
                            "text":  "hot bod/6-pack",
                            "points":  55
                        },
                        {
                            "text":  "sexy outfit/no pants!",
                            "points":  31
                        },
                        {
                            "text":  "younger",
                            "points":  5
                        },
                        {
                            "text":  "handsome face",
                            "points":  3
                        },
                        {
                            "text":  "dances/twerks",
                            "points":  2
                        },
                        {
                            "text":  "better gifts",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100335,
        "question":  "We asked 100 married women... What would you do if you saw a dating app on your husband's phone?",
        "answers":  [
                        {
                            "text":  "confront/yell",
                            "points":  48
                        },
                        {
                            "text":  "divorce him",
                            "points":  23
                        },
                        {
                            "text":  "open it",
                            "points":  19
                        },
                        {
                            "text":  "smack him",
                            "points":  4
                        },
                        {
                            "text":  "break the phone",
                            "points":  2
                        },
                        {
                            "text":  "download one too!",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100336,
        "question":  "We asked 100 married women... When your husband is hoping for a little romance, he puts on what?",
        "answers":  [
                        {
                            "text":  "marvin gaye/music",
                            "points":  48
                        },
                        {
                            "text":  "cologne",
                            "points":  23
                        },
                        {
                            "text":  "his b-day suit",
                            "points":  17
                        },
                        {
                            "text":  "clean underwear",
                            "points":  6
                        },
                        {
                            "text":  "puppy eyes",
                            "points":  2
                        },
                        {
                            "text":  "the charm",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100337,
        "question":  "We asked 100 women... Name something about the underwear your man is wearing that's a turnoff.",
        "answers":  [
                        {
                            "text":  "stains/smelly",
                            "points":  44
                        },
                        {
                            "text":  "holes",
                            "points":  19
                        },
                        {
                            "text":  "saggy/too big",
                            "points":  17
                        },
                        {
                            "text":  "tighty whities",
                            "points":  13
                        },
                        {
                            "text":  "thong/g-string",
                            "points":  3
                        },
                        {
                            "text":  "boxers",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100338,
        "question":  "We asked 100 men... What's the sexiest thing about you?",
        "answers":  [
                        {
                            "text":  "face/smile/eyes",
                            "points":  40
                        },
                        {
                            "text":  "physique/booty",
                            "points":  36
                        },
                        {
                            "text":  "thick hair",
                            "points":  11
                        },
                        {
                            "text":  "personality/humor",
                            "points":  6
                        },
                        {
                            "text":  "my brain",
                            "points":  3
                        },
                        {
                            "text":  "sultry voice",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100339,
        "question":  "If you're getting a Brazilian butt lift, you probably live in what U.S. city?",
        "answers":  [
                        {
                            "text":  "l.a./beverly hills",
                            "points":  40
                        },
                        {
                            "text":  "miami",
                            "points":  31
                        },
                        {
                            "text":  "las vegas",
                            "points":  11
                        },
                        {
                            "text":  "new york",
                            "points":  9
                        },
                        {
                            "text":  "san francisco",
                            "points":  5
                        },
                        {
                            "text":  "atlanta",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100340,
        "question":  "We asked 100 married men... Your boss comes to dinner and hits on your wife. What do you do?",
        "answers":  [
                        {
                            "text":  "ignore/let him",
                            "points":  38
                        },
                        {
                            "text":  "punch him",
                            "points":  21
                        },
                        {
                            "text":  "ask for a raise",
                            "points":  15
                        },
                        {
                            "text":  "show him the door",
                            "points":  11
                        },
                        {
                            "text":  "laugh/smile",
                            "points":  11
                        },
                        {
                            "text":  "quit/look for job",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100341,
        "question":  "We asked 100 married men... You might practice what to impress your wife on your anniversary?",
        "answers":  [
                        {
                            "text":  "cooking",
                            "points":  38
                        },
                        {
                            "text":  "shagging",
                            "points":  19
                        },
                        {
                            "text":  "dancing",
                            "points":  17
                        },
                        {
                            "text":  "singing",
                            "points":  13
                        },
                        {
                            "text":  "yoga/weights",
                            "points":  9
                        },
                        {
                            "text":  "cleaning",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100342,
        "question":  "Name something you might say to avoid eating a terrible meal someone cooked for you.",
        "answers":  [
                        {
                            "text":  "sick/tummy ache",
                            "points":  36
                        },
                        {
                            "text":  "just ate/full",
                            "points":  34
                        },
                        {
                            "text":  "allergy/gluten",
                            "points":  18
                        },
                        {
                            "text":  "dieting/fasting",
                            "points":  5
                        },
                        {
                            "text":  "gotta go, bummer!",
                            "points":  3
                        },
                        {
                            "text":  "went vegan",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100343,
        "question":  "We asked 100 married men... You just found out that your marriage is invalid. What do you do?",
        "answers":  [
                        {
                            "text":  "remarry",
                            "points":  36
                        },
                        {
                            "text":  "nothing/keep secret",
                            "points":  23
                        },
                        {
                            "text":  "run!/bail!",
                            "points":  17
                        },
                        {
                            "text":  "celebrate/party",
                            "points":  12
                        },
                        {
                            "text":  "panic",
                            "points":  7
                        },
                        {
                            "text":  "date/find gals",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100344,
        "question":  "We asked 100 women... Give me an affectionate term your man calls you that starts with \"baby.\"",
        "answers":  [
                        {
                            "text":  "baby girl",
                            "points":  36
                        },
                        {
                            "text":  "baby doll",
                            "points":  22
                        },
                        {
                            "text":  "babycakes",
                            "points":  20
                        },
                        {
                            "text":  "baby mama",
                            "points":  10
                        },
                        {
                            "text":  "baby love",
                            "points":  8
                        },
                        {
                            "text":  "baby chick",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100345,
        "question":  "What would you do at an open-casket funeral if you noticed the deceased's pants were unzipped?",
        "answers":  [
                        {
                            "text":  "nothing/ignore",
                            "points":  30
                        },
                        {
                            "text":  "tell someone",
                            "points":  29
                        },
                        {
                            "text":  "zip him up",
                            "points":  28
                        },
                        {
                            "text":  "laugh/smile",
                            "points":  5
                        },
                        {
                            "text":  "walk out",
                            "points":  4
                        },
                        {
                            "text":  "cover/with a lily",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100346,
        "question":  "We asked 100 single men... Name something you hope a girl doesn't bring with her on a date.",
        "answers":  [
                        {
                            "text":  "her friend",
                            "points":  27
                        },
                        {
                            "text":  "her parents",
                            "points":  26
                        },
                        {
                            "text":  "her kids",
                            "points":  19
                        },
                        {
                            "text":  "an std",
                            "points":  11
                        },
                        {
                            "text":  "her boo/hubby",
                            "points":  9
                        },
                        {
                            "text":  "a weapon",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  100347,
        "question":  "The kids didn't want to go to their aunt's house for the summer because she makes them do what?",
        "answers":  [
                        {
                            "text":  "chores/clean",
                            "points":  79
                        },
                        {
                            "text":  "eat gross food",
                            "points":  6
                        },
                        {
                            "text":  "church/pray",
                            "points":  5
                        },
                        {
                            "text":  "read/study",
                            "points":  3
                        },
                        {
                            "text":  "early bedtime/nap",
                            "points":  2
                        },
                        {
                            "text":  "kiss her",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100348,
        "question":  "To make your ex jealous, you'd post a pic of what?",
        "answers":  [
                        {
                            "text":  "new boo/date",
                            "points":  68
                        },
                        {
                            "text":  "me/lookin' hot",
                            "points":  14
                        },
                        {
                            "text":  "exotic vacay/beach",
                            "points":  8
                        },
                        {
                            "text":  "my wedding",
                            "points":  3
                        },
                        {
                            "text":  "happy family/kids",
                            "points":  2
                        },
                        {
                            "text":  "new house",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100349,
        "question":  "Name something that might go from sharp to dull.",
        "answers":  [
                        {
                            "text":  "knife",
                            "points":  66
                        },
                        {
                            "text":  "pencil",
                            "points":  13
                        },
                        {
                            "text":  "person/mind",
                            "points":  6
                        },
                        {
                            "text":  "razor",
                            "points":  6
                        },
                        {
                            "text":  "pain",
                            "points":  4
                        },
                        {
                            "text":  "saw",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100350,
        "question":  "Name something a rich guy might spend thousands of dollars on when he throws a party.",
        "answers":  [
                        {
                            "text":  "alcohol",
                            "points":  64
                        },
                        {
                            "text":  "food/wagyu beef",
                            "points":  16
                        },
                        {
                            "text":  "dj/band",
                            "points":  10
                        },
                        {
                            "text":  "exotic dancers",
                            "points":  3
                        },
                        {
                            "text":  "ice sculpture",
                            "points":  2
                        },
                        {
                            "text":  "drugs",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100351,
        "question":  "Name something that might go wrong at a beach wedding.",
        "answers":  [
                        {
                            "text":  "rain/wind/storm",
                            "points":  64
                        },
                        {
                            "text":  "wave/tsunami",
                            "points":  15
                        },
                        {
                            "text":  "high tide",
                            "points":  8
                        },
                        {
                            "text":  "seagulls/birds",
                            "points":  5
                        },
                        {
                            "text":  "shark attack",
                            "points":  3
                        },
                        {
                            "text":  "beached whale",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100352,
        "question":  "What's a simple way to look busy at work without actually doing any work?",
        "answers":  [
                        {
                            "text":  "use computer/type",
                            "points":  63
                        },
                        {
                            "text":  "be on the phone",
                            "points":  12
                        },
                        {
                            "text":  "shuffle papers",
                            "points":  12
                        },
                        {
                            "text":  "scribble",
                            "points":  4
                        },
                        {
                            "text":  "walk quickly",
                            "points":  3
                        },
                        {
                            "text":  "carry tool/clipboard",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100353,
        "question":  "Name something you wish you could change about your elbows.",
        "answers":  [
                        {
                            "text":  "dry/rough skin",
                            "points":  58
                        },
                        {
                            "text":  "skinny/boney",
                            "points":  21
                        },
                        {
                            "text":  "too flabby",
                            "points":  8
                        },
                        {
                            "text":  "sensitive/pain",
                            "points":  5
                        },
                        {
                            "text":  "color/darkness",
                            "points":  3
                        },
                        {
                            "text":  "in front/bend other way",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100354,
        "question":  "A man knows it's going nowhere if a woman compares him to her who?",
        "answers":  [
                        {
                            "text":  "brother",
                            "points":  58
                        },
                        {
                            "text":  "dad",
                            "points":  16
                        },
                        {
                            "text":  "bestie/gay friend",
                            "points":  9
                        },
                        {
                            "text":  "ex",
                            "points":  7
                        },
                        {
                            "text":  "mom",
                            "points":  4
                        },
                        {
                            "text":  "pet/chihuahua",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100355,
        "question":  "Name something that's gross to do before touching a shared bowling ball.",
        "answers":  [
                        {
                            "text":  "pick/blow nose",
                            "points":  49
                        },
                        {
                            "text":  "eat/lick fingers",
                            "points":  19
                        },
                        {
                            "text":  "sneeze/cough",
                            "points":  14
                        },
                        {
                            "text":  "spit on hands",
                            "points":  7
                        },
                        {
                            "text":  "scratch butt",
                            "points":  5
                        },
                        {
                            "text":  "toilet & not wash",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100356,
        "question":  "Name an occasion when you should not give someone a congratulations card.",
        "answers":  [
                        {
                            "text":  "death/funeral",
                            "points":  46
                        },
                        {
                            "text":  "divorce/breakup",
                            "points":  20
                        },
                        {
                            "text":  "fired/laid off",
                            "points":  14
                        },
                        {
                            "text":  "in/out of jail",
                            "points":  8
                        },
                        {
                            "text":  "med procedure/ill",
                            "points":  7
                        },
                        {
                            "text":  "fail test/class",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100357,
        "question":  "When the romance has died, you and your partner stop doing what before bed?",
        "answers":  [
                        {
                            "text":  "kissing",
                            "points":  46
                        },
                        {
                            "text":  "making love",
                            "points":  20
                        },
                        {
                            "text":  "cuddling",
                            "points":  13
                        },
                        {
                            "text":  "talking/\"love you\"",
                            "points":  10
                        },
                        {
                            "text":  "brushing teeth",
                            "points":  5
                        },
                        {
                            "text":  "showering",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100358,
        "question":  "What would you do if you saw your friend shoplifting while you were with them?",
        "answers":  [
                        {
                            "text":  "confront/scold",
                            "points":  43
                        },
                        {
                            "text":  "walk away/leave",
                            "points":  30
                        },
                        {
                            "text":  "ignore it",
                            "points":  10
                        },
                        {
                            "text":  "report them",
                            "points":  5
                        },
                        {
                            "text":  "join in",
                            "points":  5
                        },
                        {
                            "text":  "end friendship",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100359,
        "question":  "Name a reason someone wouldn't want their picture on social media.",
        "answers":  [
                        {
                            "text":  "wanted criminal",
                            "points":  43
                        },
                        {
                            "text":  "private/shy",
                            "points":  24
                        },
                        {
                            "text":  "they look bad",
                            "points":  15
                        },
                        {
                            "text":  "witness protection",
                            "points":  7
                        },
                        {
                            "text":  "cheating",
                            "points":  4
                        },
                        {
                            "text":  "avoiding ex",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100360,
        "question":  "Fill in the blank: Before a date, I have to shave my ______.",
        "answers":  [
                        {
                            "text":  "legs",
                            "points":  42
                        },
                        {
                            "text":  "face",
                            "points":  29
                        },
                        {
                            "text":  "loins",
                            "points":  16
                        },
                        {
                            "text":  "armpits",
                            "points":  5
                        },
                        {
                            "text":  "head",
                            "points":  3
                        },
                        {
                            "text":  "nose hair",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100361,
        "question":  "What's the best way to make sure no one sits next to you on a bus?",
        "answers":  [
                        {
                            "text":  "put stuff on it",
                            "points":  37
                        },
                        {
                            "text":  "be smelly/fart",
                            "points":  26
                        },
                        {
                            "text":  "spread out/lie down",
                            "points":  19
                        },
                        {
                            "text":  "cough/act sick",
                            "points":  6
                        },
                        {
                            "text":  "talk to self",
                            "points":  6
                        },
                        {
                            "text":  "stare at them",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100362,
        "question":  "Name a place where you will not get in trouble for being naked.",
        "answers":  [
                        {
                            "text":  "home/shower",
                            "points":  35
                        },
                        {
                            "text":  "nude beach/colony",
                            "points":  33
                        },
                        {
                            "text":  "doc/hospital",
                            "points":  11
                        },
                        {
                            "text":  "spa/sauna",
                            "points":  10
                        },
                        {
                            "text":  "locker room",
                            "points":  6
                        },
                        {
                            "text":  "strip club",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100363,
        "question":  "What might a professional chef be disappointed by in your kitchen?",
        "answers":  [
                        {
                            "text":  "dull knives",
                            "points":  34
                        },
                        {
                            "text":  "appliances/oven",
                            "points":  16
                        },
                        {
                            "text":  "cookware/1 pot",
                            "points":  15
                        },
                        {
                            "text":  "tiny space",
                            "points":  14
                        },
                        {
                            "text":  "food/spice choices",
                            "points":  11
                        },
                        {
                            "text":  "cleanliness",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  100364,
        "question":  "Name something that's easy to squeeze out but hard to put back in.",
        "answers":  [
                        {
                            "text":  "toothpaste",
                            "points":  70
                        },
                        {
                            "text":  "ketchup/condiment",
                            "points":  15
                        },
                        {
                            "text":  "juice of fruit/veg",
                            "points":  5
                        },
                        {
                            "text":  "pimple",
                            "points":  2
                        },
                        {
                            "text":  "bowel movement",
                            "points":  2
                        },
                        {
                            "text":  "shampoo",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100365,
        "question":  "Name something you'd hate to have happen while you were making love in a tent in the woods.",
        "answers":  [
                        {
                            "text":  "bear/wild animal",
                            "points":  70
                        },
                        {
                            "text":  "tent falls/blows off",
                            "points":  15
                        },
                        {
                            "text":  "rain/snow",
                            "points":  4
                        },
                        {
                            "text":  "bug bites",
                            "points":  3
                        },
                        {
                            "text":  "potty break",
                            "points":  2
                        },
                        {
                            "text":  "forest fire",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100366,
        "question":  "Name something dad gets on Father's Day that he has to pretend he likes.",
        "answers":  [
                        {
                            "text":  "tie",
                            "points":  67
                        },
                        {
                            "text":  "socks",
                            "points":  14
                        },
                        {
                            "text":  "mug",
                            "points":  5
                        },
                        {
                            "text":  "father's day card",
                            "points":  4
                        },
                        {
                            "text":  "art/drawing",
                            "points":  4
                        },
                        {
                            "text":  "shirt",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100367,
        "question":  "Name something you do with your bottom.",
        "answers":  [
                        {
                            "text":  "sit on it",
                            "points":  65
                        },
                        {
                            "text":  "wipe it",
                            "points":  14
                        },
                        {
                            "text":  "shake/wiggle it",
                            "points":  8
                        },
                        {
                            "text":  "poop with it",
                            "points":  4
                        },
                        {
                            "text":  "wash it",
                            "points":  3
                        },
                        {
                            "text":  "spank/smack it",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100368,
        "question":  "Name a part of a man's body that he'd hate to look exactly like his mom's.",
        "answers":  [
                        {
                            "text":  "chest",
                            "points":  62
                        },
                        {
                            "text":  "butt",
                            "points":  10
                        },
                        {
                            "text":  "face/nose",
                            "points":  8
                        },
                        {
                            "text":  "privates",
                            "points":  7
                        },
                        {
                            "text":  "stomach",
                            "points":  6
                        },
                        {
                            "text":  "legs",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100369,
        "question":  "Name a part of your body you like the smell of.",
        "answers":  [
                        {
                            "text":  "my hair/scalp",
                            "points":  57
                        },
                        {
                            "text":  "my hands/fingers",
                            "points":  23
                        },
                        {
                            "text":  "my arms/pits",
                            "points":  8
                        },
                        {
                            "text":  "my loins",
                            "points":  3
                        },
                        {
                            "text":  "my feet/toes",
                            "points":  3
                        },
                        {
                            "text":  "my breasts",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100370,
        "question":  "We asked 100 men... If you woke up as a woman tomorrow, what would you do?",
        "answers":  [
                        {
                            "text":  "explore/touch bod",
                            "points":  46
                        },
                        {
                            "text":  "cry/scream",
                            "points":  27
                        },
                        {
                            "text":  "gaze in mirror",
                            "points":  11
                        },
                        {
                            "text":  "race to e.r.",
                            "points":  7
                        },
                        {
                            "text":  "shop/buy heels!",
                            "points":  3
                        },
                        {
                            "text":  "hook up!",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100371,
        "question":  "We asked 100 women... Why might you think your date is older than his dating profile?",
        "answers":  [
                        {
                            "text":  "gray/balding",
                            "points":  43
                        },
                        {
                            "text":  "wrinkles/eye bags",
                            "points":  28
                        },
                        {
                            "text":  "convo/calls me a dame",
                            "points":  11
                        },
                        {
                            "text":  "outfit",
                            "points":  9
                        },
                        {
                            "text":  "uses cane",
                            "points":  3
                        },
                        {
                            "text":  "mature personality",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100372,
        "question":  "Uh-oh -- you hooked up with your coworker over the weekend. What do you do on Monday?",
        "answers":  [
                        {
                            "text":  "work/nothin' happened",
                            "points":  40
                        },
                        {
                            "text":  "call in sick",
                            "points":  21
                        },
                        {
                            "text":  "avoid them",
                            "points":  19
                        },
                        {
                            "text":  "quit",
                            "points":  8
                        },
                        {
                            "text":  "be flirty/by coffee",
                            "points":  5
                        },
                        {
                            "text":  "do it again!",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100373,
        "question":  "What do you do to cover up bodily noises when you're in the bathroom?",
        "answers":  [
                        {
                            "text":  "run water",
                            "points":  36
                        },
                        {
                            "text":  "turn on fan",
                            "points":  18
                        },
                        {
                            "text":  "courtesy flush",
                            "points":  16
                        },
                        {
                            "text":  "cough/clear throat",
                            "points":  14
                        },
                        {
                            "text":  "sing/hum",
                            "points":  6
                        },
                        {
                            "text":  "blast music",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  100374,
        "question":  "Name a reason a wife approves of her husband's new assistant.",
        "answers":  [
                        {
                            "text":  "male",
                            "points":  35
                        },
                        {
                            "text":  "she's ugly/homely",
                            "points":  27
                        },
                        {
                            "text":  "she's 90",
                            "points":  24
                        },
                        {
                            "text":  "good assistant",
                            "points":  6
                        },
                        {
                            "text":  "he's hot!",
                            "points":  2
                        },
                        {
                            "text":  "gay/lesbian",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100375,
        "question":  "We asked 100 married women... Your husband said he's going to pamper you this weekend. What are you hoping he'll do?",
        "answers":  [
                        {
                            "text":  "massage/spa",
                            "points":  35
                        },
                        {
                            "text":  "cook/dinner out",
                            "points":  26
                        },
                        {
                            "text":  "clean/laundry",
                            "points":  21
                        },
                        {
                            "text":  "let me sleep in",
                            "points":  8
                        },
                        {
                            "text":  "take on trip/hotel",
                            "points":  4
                        },
                        {
                            "text":  "go. away.",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100376,
        "question":  "Name something your mate's booty has in common with a basketball.",
        "answers":  [
                        {
                            "text":  "round",
                            "points":  56
                        },
                        {
                            "text":  "bouncy",
                            "points":  21
                        },
                        {
                            "text":  "firm/hard",
                            "points":  9
                        },
                        {
                            "text":  "big/plump",
                            "points":  4
                        },
                        {
                            "text":  "has lines on it",
                            "points":  3
                        },
                        {
                            "text":  "lotsa bumps/dimples",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100377,
        "question":  "Where does a nerdy guy go to pick up a nerdy gal?",
        "answers":  [
                        {
                            "text":  "library",
                            "points":  51
                        },
                        {
                            "text":  "convention/comic-con",
                            "points":  23
                        },
                        {
                            "text":  "bookshop",
                            "points":  8
                        },
                        {
                            "text":  "game/electronics shop",
                            "points":  6
                        },
                        {
                            "text":  "school/science fair",
                            "points":  5
                        },
                        {
                            "text":  "a math meet",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100378,
        "question":  "Name a sound you'd play on your phone if you heard a burglar in your home.",
        "answers":  [
                        {
                            "text":  "siren",
                            "points":  38
                        },
                        {
                            "text":  "dogs/wolves",
                            "points":  22
                        },
                        {
                            "text":  "gun",
                            "points":  18
                        },
                        {
                            "text":  "alarm",
                            "points":  10
                        },
                        {
                            "text":  "horn/air horn",
                            "points":  5
                        },
                        {
                            "text":  "scary music/\"jaws\"",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100379,
        "question":  "Name something a widow does at her husband's funeral that makes you suspect she doesn't miss him too much.",
        "answers":  [
                        {
                            "text":  "laughs/smiles",
                            "points":  36
                        },
                        {
                            "text":  "gets flirty/brings date",
                            "points":  33
                        },
                        {
                            "text":  "doesn't cry",
                            "points":  17
                        },
                        {
                            "text":  "wears red",
                            "points":  3
                        },
                        {
                            "text":  "dances",
                            "points":  3
                        },
                        {
                            "text":  "no-show/bails",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100380,
        "question":  "We asked 100 women... When you picture the man of your dreams, he's holding what?",
        "answers":  [
                        {
                            "text":  "me/my hand",
                            "points":  31
                        },
                        {
                            "text":  "flowers",
                            "points":  25
                        },
                        {
                            "text":  "puppy/animal",
                            "points":  15
                        },
                        {
                            "text":  "wad of cash/wallet",
                            "points":  11
                        },
                        {
                            "text":  "ring/jewelry",
                            "points":  10
                        },
                        {
                            "text":  "my dinner",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100381,
        "question":  "When sharks get together for movie night, tell me a movie they might all want to watch.",
        "answers":  [
                        {
                            "text":  "jaws",
                            "points":  66
                        },
                        {
                            "text":  "finding nemo",
                            "points":  19
                        },
                        {
                            "text":  "the blue lagoon",
                            "points":  3
                        },
                        {
                            "text":  "baywatch",
                            "points":  2
                        },
                        {
                            "text":  "shark tale",
                            "points":  2
                        },
                        {
                            "text":  "the little mermaid",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100382,
        "question":  "When a guy's last remaining hair on his head falls out, tell me something specific he might do with it.",
        "answers":  [
                        {
                            "text":  "save/frame it",
                            "points":  59
                        },
                        {
                            "text":  "throw it away",
                            "points":  25
                        },
                        {
                            "text":  "glue it back on",
                            "points":  3
                        },
                        {
                            "text":  "bury it/have funeral",
                            "points":  3
                        },
                        {
                            "text":  "burn it",
                            "points":  2
                        },
                        {
                            "text":  "kiss it",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100383,
        "question":  "Name something a cat lady might do like a cat to fit in with her cat family.",
        "answers":  [
                        {
                            "text":  "purr/meow",
                            "points":  58
                        },
                        {
                            "text":  "eat/lap up milk",
                            "points":  12
                        },
                        {
                            "text":  "lick/groom",
                            "points":  12
                        },
                        {
                            "text":  "snuggle/nap",
                            "points":  6
                        },
                        {
                            "text":  "stretch/with butt up",
                            "points":  4
                        },
                        {
                            "text":  "cat costume",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100384,
        "question":  "If you fall in love fast, you might be doing what by the third date?",
        "answers":  [
                        {
                            "text":  "makin' whoopee",
                            "points":  53
                        },
                        {
                            "text":  "proposing/marrying",
                            "points":  24
                        },
                        {
                            "text":  "moving in",
                            "points":  8
                        },
                        {
                            "text":  "kissing",
                            "points":  5
                        },
                        {
                            "text":  "meeting family",
                            "points":  2
                        },
                        {
                            "text":  "divorcing",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100385,
        "question":  "At Christmas, grandma got confused. Instead of hanging a stocking on the mantel, she hung up her what?",
        "answers":  [
                        {
                            "text":  "bra",
                            "points":  49
                        },
                        {
                            "text":  "panties",
                            "points":  16
                        },
                        {
                            "text":  "hose/nylons",
                            "points":  15
                        },
                        {
                            "text":  "socks",
                            "points":  7
                        },
                        {
                            "text":  "girdle",
                            "points":  4
                        },
                        {
                            "text":  "dentures",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100386,
        "question":  "You'd hate someone to say \"Wow -- I've never done this before\" as they were about to do what to you?",
        "answers":  [
                        {
                            "text":  "surgery/medical",
                            "points":  49
                        },
                        {
                            "text":  "kiss you",
                            "points":  16
                        },
                        {
                            "text":  "have sex",
                            "points":  9
                        },
                        {
                            "text":  "cut hair",
                            "points":  9
                        },
                        {
                            "text":  "tattoo you",
                            "points":  7
                        },
                        {
                            "text":  "secure bungee cord",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100387,
        "question":  "Name a tool in a toolbox that you'd hate to see your dentist holding.",
        "answers":  [
                        {
                            "text":  "hammer",
                            "points":  46
                        },
                        {
                            "text":  "drill",
                            "points":  17
                        },
                        {
                            "text":  "saw",
                            "points":  10
                        },
                        {
                            "text":  "pliers",
                            "points":  10
                        },
                        {
                            "text":  "screwdriver",
                            "points":  7
                        },
                        {
                            "text":  "chisel",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100388,
        "question":  "If a stripper called himself The Mailman, name a prop he might use in his act.",
        "answers":  [
                        {
                            "text":  "mailbag",
                            "points":  39
                        },
                        {
                            "text":  "letter/package",
                            "points":  37
                        },
                        {
                            "text":  "mailbox",
                            "points":  10
                        },
                        {
                            "text":  "postage stamp",
                            "points":  3
                        },
                        {
                            "text":  "his uniform",
                            "points":  3
                        },
                        {
                            "text":  "postal cart",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100389,
        "question":  "Name something a toddler does when they're mad that you shouldn't do when you're mad.",
        "answers":  [
                        {
                            "text":  "scream/yell",
                            "points":  38
                        },
                        {
                            "text":  "cry",
                            "points":  23
                        },
                        {
                            "text":  "throw things/food",
                            "points":  19
                        },
                        {
                            "text":  "stomp feet",
                            "points":  8
                        },
                        {
                            "text":  "throw self on floor",
                            "points":  4
                        },
                        {
                            "text":  "spit",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100390,
        "question":  "Name a food you expect to see at a carnival.",
        "answers":  [
                        {
                            "text":  "cotton candy",
                            "points":  32
                        },
                        {
                            "text":  "funnel cake",
                            "points":  24
                        },
                        {
                            "text":  "corn dog/hot dog",
                            "points":  22
                        },
                        {
                            "text":  "popcorn",
                            "points":  8
                        },
                        {
                            "text":  "elephant ear",
                            "points":  5
                        },
                        {
                            "text":  "fried dough",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100391,
        "question":  "Your favorite celebrity is sitting next to you at a restaurant. What do you do?",
        "answers":  [
                        {
                            "text":  "pic/autograph",
                            "points":  31
                        },
                        {
                            "text":  "greet/say \"hi\"",
                            "points":  29
                        },
                        {
                            "text":  "ignore/eat",
                            "points":  14
                        },
                        {
                            "text":  "smile/giggle",
                            "points":  10
                        },
                        {
                            "text":  "stare",
                            "points":  7
                        },
                        {
                            "text":  "freeze up/get shy",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100392,
        "question":  "If wives designed wedding rings for their husbands, what would happen if he took it off?",
        "answers":  [
                        {
                            "text":  "electric shock",
                            "points":  23
                        },
                        {
                            "text":  "cut/chop finger off",
                            "points":  23
                        },
                        {
                            "text":  "tighter/stuck",
                            "points":  22
                        },
                        {
                            "text":  "alarm/alert",
                            "points":  15
                        },
                        {
                            "text":  "he blows up",
                            "points":  7
                        },
                        {
                            "text":  "dye/mark finger",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100393,
        "question":  "Name a physical sport that you'd be shocked they play at a nursing home.",
        "answers":  [
                        {
                            "text":  "football",
                            "points":  77
                        },
                        {
                            "text":  "basketball",
                            "points":  5
                        },
                        {
                            "text":  "rugby",
                            "points":  5
                        },
                        {
                            "text":  "boxing",
                            "points":  2
                        },
                        {
                            "text":  "soccer",
                            "points":  2
                        },
                        {
                            "text":  "dodgeball",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100394,
        "question":  "Name an inappropriate occasion to hit on someone no matter how hot they are.",
        "answers":  [
                        {
                            "text":  "funeral",
                            "points":  66
                        },
                        {
                            "text":  "church",
                            "points":  9
                        },
                        {
                            "text":  "wedding/their wedding",
                            "points":  8
                        },
                        {
                            "text":  "work",
                            "points":  5
                        },
                        {
                            "text":  "date w/someone else",
                            "points":  3
                        },
                        {
                            "text":  "family reunion",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100395,
        "question":  "Name something that pairs well with biscuits.",
        "answers":  [
                        {
                            "text":  "gravy",
                            "points":  59
                        },
                        {
                            "text":  "butter",
                            "points":  17
                        },
                        {
                            "text":  "jelly/jam",
                            "points":  6
                        },
                        {
                            "text":  "tea",
                            "points":  4
                        },
                        {
                            "text":  "honey",
                            "points":  4
                        },
                        {
                            "text":  "chicken",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100396,
        "question":  "What's a dead giveaway that a teenager threw a party when their parents were gone?",
        "answers":  [
                        {
                            "text":  "trash/empties",
                            "points":  50
                        },
                        {
                            "text":  "stuff broken/damage",
                            "points":  19
                        },
                        {
                            "text":  "liquor's gone",
                            "points":  11
                        },
                        {
                            "text":  "house too clean",
                            "points":  5
                        },
                        {
                            "text":  "smell/beer & weed",
                            "points":  4
                        },
                        {
                            "text":  "vomit all over",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100397,
        "question":  "Name an emoji you would never text to your parents.",
        "answers":  [
                        {
                            "text":  "eggplant",
                            "points":  47
                        },
                        {
                            "text":  "poop",
                            "points":  24
                        },
                        {
                            "text":  "middle finger",
                            "points":  11
                        },
                        {
                            "text":  "angry/frowny face",
                            "points":  6
                        },
                        {
                            "text":  "tongue",
                            "points":  3
                        },
                        {
                            "text":  "devil",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100398,
        "question":  "Tell me the worst place to be when you realize that brownie you ate was a pot brownie.",
        "answers":  [
                        {
                            "text":  "work/interview",
                            "points":  42
                        },
                        {
                            "text":  "church",
                            "points":  28
                        },
                        {
                            "text":  "behind wheel",
                            "points":  9
                        },
                        {
                            "text":  "parents'/fam gathering",
                            "points":  7
                        },
                        {
                            "text":  "court",
                            "points":  4
                        },
                        {
                            "text":  "school",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100399,
        "question":  "Name a tropical cocktail you crave when you're on the beach.",
        "answers":  [
                        {
                            "text":  "pina colada",
                            "points":  36
                        },
                        {
                            "text":  "mai tai",
                            "points":  18
                        },
                        {
                            "text":  "sex on the beach",
                            "points":  12
                        },
                        {
                            "text":  "margarita",
                            "points":  12
                        },
                        {
                            "text":  "daiquiri",
                            "points":  9
                        },
                        {
                            "text":  "mojito",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  100400,
        "question":  "Pretend you're back in kindergarten right now. What are you doing?",
        "answers":  [
                        {
                            "text":  "coloring/crafts",
                            "points":  33
                        },
                        {
                            "text":  "napping",
                            "points":  32
                        },
                        {
                            "text":  "playing/recess",
                            "points":  15
                        },
                        {
                            "text":  "learning",
                            "points":  7
                        },
                        {
                            "text":  "having snack/milk",
                            "points":  4
                        },
                        {
                            "text":  "eating glue",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100401,
        "question":  "Grandma wants to have a hot girl summer, so she started taking what classes at the gym?",
        "answers":  [
                        {
                            "text":  "yoga",
                            "points":  30
                        },
                        {
                            "text":  "zumba/jazzercise/step",
                            "points":  27
                        },
                        {
                            "text":  "pilates",
                            "points":  17
                        },
                        {
                            "text":  "swimming",
                            "points":  8
                        },
                        {
                            "text":  "pole dancing",
                            "points":  6
                        },
                        {
                            "text":  "spinning",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100402,
        "question":  "Name a circus act that reminds you of your job.",
        "answers":  [
                        {
                            "text":  "juggler",
                            "points":  27
                        },
                        {
                            "text":  "animal tamer",
                            "points":  25
                        },
                        {
                            "text":  "clown act",
                            "points":  14
                        },
                        {
                            "text":  "tightrope walker",
                            "points":  12
                        },
                        {
                            "text":  "trapeze",
                            "points":  10
                        },
                        {
                            "text":  "ringmaster",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100403,
        "question":  "Fill in the blank: You're not getting older, you're getting ______er.",
        "answers":  [
                        {
                            "text":  "wiser/smarter",
                            "points":  55
                        },
                        {
                            "text":  "better",
                            "points":  22
                        },
                        {
                            "text":  "fatter",
                            "points":  7
                        },
                        {
                            "text":  "sexier",
                            "points":  3
                        },
                        {
                            "text":  "slower",
                            "points":  3
                        },
                        {
                            "text":  "weaker",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100404,
        "question":  "Name something that starts with \"a barrel of...\"",
        "answers":  [
                        {
                            "text":  "monkeys",
                            "points":  54
                        },
                        {
                            "text":  "laughs",
                            "points":  14
                        },
                        {
                            "text":  "fun",
                            "points":  13
                        },
                        {
                            "text":  "beer",
                            "points":  5
                        },
                        {
                            "text":  "oil",
                            "points":  4
                        },
                        {
                            "text":  "money",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100405,
        "question":  "If a woman married a much older man, what might her husband and their newborn baby have in common?",
        "answers":  [
                        {
                            "text":  "need diapers",
                            "points":  51
                        },
                        {
                            "text":  "bald",
                            "points":  25
                        },
                        {
                            "text":  "wrinkles",
                            "points":  6
                        },
                        {
                            "text":  "no teeth",
                            "points":  5
                        },
                        {
                            "text":  "need bibs/drool",
                            "points":  3
                        },
                        {
                            "text":  "ugly",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100406,
        "question":  "There should be a fairy like the Tooth Fairy that gives you cash when you lose what?",
        "answers":  [
                        {
                            "text":  "your hair",
                            "points":  47
                        },
                        {
                            "text":  "weight",
                            "points":  22
                        },
                        {
                            "text":  "your virginity",
                            "points":  11
                        },
                        {
                            "text":  "your keys",
                            "points":  6
                        },
                        {
                            "text":  "your job",
                            "points":  3
                        },
                        {
                            "text":  "money/wallet",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100407,
        "question":  "What's something you might regret texting your ex?",
        "answers":  [
                        {
                            "text":  "love you",
                            "points":  36
                        },
                        {
                            "text":  "miss you/come back",
                            "points":  29
                        },
                        {
                            "text":  "nudes",
                            "points":  16
                        },
                        {
                            "text":  "you up?/come over",
                            "points":  5
                        },
                        {
                            "text":  "heyyy",
                            "points":  3
                        },
                        {
                            "text":  "hate you/insults",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100408,
        "question":  "Name something a frog might have trouble adjusting to after he turns into a prince.",
        "answers":  [
                        {
                            "text":  "walk'g/standing",
                            "points":  34
                        },
                        {
                            "text":  "the food/no bugs",
                            "points":  27
                        },
                        {
                            "text":  "wearing clothes",
                            "points":  11
                        },
                        {
                            "text":  "out of water",
                            "points":  8
                        },
                        {
                            "text":  "new body/height",
                            "points":  8
                        },
                        {
                            "text":  "has a voice",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100409,
        "question":  "To be the best Elvis impersonator in Vegas, you have to have what?",
        "answers":  [
                        {
                            "text":  "good voice",
                            "points":  30
                        },
                        {
                            "text":  "hair/sideburns",
                            "points":  19
                        },
                        {
                            "text":  "outfit/jumpsuit",
                            "points":  17
                        },
                        {
                            "text":  "dance/hip moves",
                            "points":  16
                        },
                        {
                            "text":  "swagger/charisma",
                            "points":  7
                        },
                        {
                            "text":  "his height/build",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100410,
        "question":  "We asked 100 men... What do other men do in a sexier way than you do?",
        "answers":  [
                        {
                            "text":  "talk/chat up",
                            "points":  30
                        },
                        {
                            "text":  "walk/swagger",
                            "points":  16
                        },
                        {
                            "text":  "dance",
                            "points":  13
                        },
                        {
                            "text":  "smile",
                            "points":  12
                        },
                        {
                            "text":  "dress",
                            "points":  12
                        },
                        {
                            "text":  "run/work out",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  100411,
        "question":  "Bob returned his dentures because they kept popping out when he did what?",
        "answers":  [
                        {
                            "text":  "laughed/smiled",
                            "points":  27
                        },
                        {
                            "text":  "ate/chewed",
                            "points":  24
                        },
                        {
                            "text":  "spoke",
                            "points":  22
                        },
                        {
                            "text":  "sneezed/coughed",
                            "points":  10
                        },
                        {
                            "text":  "whistled",
                            "points":  6
                        },
                        {
                            "text":  "kissed",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100412,
        "question":  "Name something that Steve Harvey and Cedric the Entertainer have in common.",
        "answers":  [
                        {
                            "text":  "funny/comedians",
                            "points":  69
                        },
                        {
                            "text":  "they're black",
                            "points":  11
                        },
                        {
                            "text":  "tv star/famous",
                            "points":  5
                        },
                        {
                            "text":  "oh-so-fine",
                            "points":  2
                        },
                        {
                            "text":  "stylish",
                            "points":  2
                        },
                        {
                            "text":  "they're men",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100413,
        "question":  "We asked 100 women... Name something that you just don't understand why men like it so much.",
        "answers":  [
                        {
                            "text":  "sports",
                            "points":  49
                        },
                        {
                            "text":  "boobs/booty",
                            "points":  27
                        },
                        {
                            "text":  "video games",
                            "points":  5
                        },
                        {
                            "text":  "farting",
                            "points":  4
                        },
                        {
                            "text":  "tools",
                            "points":  3
                        },
                        {
                            "text":  "animated tv/film",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100414,
        "question":  "Why wouldn't you recommend your friend for a position at your job?",
        "answers":  [
                        {
                            "text":  "bad worker/lazy",
                            "points":  43
                        },
                        {
                            "text":  "unqualified/dumb",
                            "points":  20
                        },
                        {
                            "text":  "job/boss sucks",
                            "points":  12
                        },
                        {
                            "text":  "always late/flakes",
                            "points":  8
                        },
                        {
                            "text":  "competition",
                            "points":  4
                        },
                        {
                            "text":  "yaps/distracting",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100415,
        "question":  "Name something you'd do if you got in your boss's car and it smelled bad.",
        "answers":  [
                        {
                            "text":  "open a window",
                            "points":  42
                        },
                        {
                            "text":  "get out/leave",
                            "points":  18
                        },
                        {
                            "text":  "hold my breath",
                            "points":  13
                        },
                        {
                            "text":  "ignore/suffer",
                            "points":  10
                        },
                        {
                            "text":  "tell them",
                            "points":  5
                        },
                        {
                            "text":  "spray perfume",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100416,
        "question":  "We asked 100 men... Name a work uniform you might wear in the bedroom.",
        "answers":  [
                        {
                            "text":  "police officer",
                            "points":  32
                        },
                        {
                            "text":  "firefighter",
                            "points":  18
                        },
                        {
                            "text":  "lifeguard/trunks",
                            "points":  15
                        },
                        {
                            "text":  "doctor",
                            "points":  14
                        },
                        {
                            "text":  "hazmat specialist",
                            "points":  7
                        },
                        {
                            "text":  "hard hat/construction",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100417,
        "question":  "Name something at a nightclub that would make a person over 40 say \"I'm too old for this.\"",
        "answers":  [
                        {
                            "text":  "loud/bad music",
                            "points":  31
                        },
                        {
                            "text":  "dancing/mosh pit",
                            "points":  29
                        },
                        {
                            "text":  "shots/beer pong",
                            "points":  10
                        },
                        {
                            "text":  "go-go dancer/pole",
                            "points":  9
                        },
                        {
                            "text":  "young'uns",
                            "points":  9
                        },
                        {
                            "text":  "no seats/crowded",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100418,
        "question":  "Name something wife #2 does when she hears that wife #1 is stopping by.",
        "answers":  [
                        {
                            "text":  "leaves/hides",
                            "points":  30
                        },
                        {
                            "text":  "cleans house",
                            "points":  21
                        },
                        {
                            "text":  "hair & makeup",
                            "points":  14
                        },
                        {
                            "text":  "yells/gets mad",
                            "points":  14
                        },
                        {
                            "text":  "sexy outfit",
                            "points":  8
                        },
                        {
                            "text":  "locks the doors",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100419,
        "question":  "No matter how bad the breakup, name a gift from an ex that you'd never give back.",
        "answers":  [
                        {
                            "text":  "ring/jewelry",
                            "points":  59
                        },
                        {
                            "text":  "pet",
                            "points":  9
                        },
                        {
                            "text":  "car/maserati",
                            "points":  8
                        },
                        {
                            "text":  "money",
                            "points":  8
                        },
                        {
                            "text":  "clothes",
                            "points":  4
                        },
                        {
                            "text":  "cologne",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100420,
        "question":  "Bad news: Your phone was hacked. Worse news: They sent your naughty selfies to who?",
        "answers":  [
                        {
                            "text":  "my parents",
                            "points":  43
                        },
                        {
                            "text":  "boss/coworker",
                            "points":  26
                        },
                        {
                            "text":  "my spouse/mate",
                            "points":  8
                        },
                        {
                            "text":  "my kids",
                            "points":  5
                        },
                        {
                            "text":  "everyone/the news",
                            "points":  5
                        },
                        {
                            "text":  "my ex",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100421,
        "question":  "If your dogs could trash-talk your house, what would they say?",
        "answers":  [
                        {
                            "text":  "messy/reeks",
                            "points":  41
                        },
                        {
                            "text":  "it's puny/tiny yard",
                            "points":  19
                        },
                        {
                            "text":  "not enough food",
                            "points":  13
                        },
                        {
                            "text":  "too clean",
                            "points":  8
                        },
                        {
                            "text":  "boring!/needs toys",
                            "points":  5
                        },
                        {
                            "text":  "too many stairs",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100422,
        "question":  "Fill in the blank: A woman might tell her ex-husband, \"The next time I see you, I hope you're in ______.\"",
        "answers":  [
                        {
                            "text":  "hell/the grave",
                            "points":  38
                        },
                        {
                            "text":  "jail/cuffs",
                            "points":  36
                        },
                        {
                            "text":  "a better mood",
                            "points":  6
                        },
                        {
                            "text":  "therapy/rehab",
                            "points":  4
                        },
                        {
                            "text":  "shape/the gym",
                            "points":  3
                        },
                        {
                            "text":  "debt/bankruptcy",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100423,
        "question":  "Give me a reason your date might remind you of Elmo.",
        "answers":  [
                        {
                            "text":  "high-pitched voice",
                            "points":  36
                        },
                        {
                            "text":  "giggles/goofy",
                            "points":  17
                        },
                        {
                            "text":  "he's hairy",
                            "points":  17
                        },
                        {
                            "text":  "red skin/hair",
                            "points":  10
                        },
                        {
                            "text":  "ticklish",
                            "points":  7
                        },
                        {
                            "text":  "cute",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100424,
        "question":  "Name something you might accidentally leave on the nightstand of a one-night stand.",
        "answers":  [
                        {
                            "text":  "jewelry/wed ring",
                            "points":  34
                        },
                        {
                            "text":  "phone",
                            "points":  16
                        },
                        {
                            "text":  "condom/wrapper",
                            "points":  15
                        },
                        {
                            "text":  "wallet/cash",
                            "points":  12
                        },
                        {
                            "text":  "undies/bra",
                            "points":  9
                        },
                        {
                            "text":  "dentures/retainer",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100425,
        "question":  "Name something that's rude to do while watching the vows at a wedding.",
        "answers":  [
                        {
                            "text":  "talk/take a call",
                            "points":  30
                        },
                        {
                            "text":  "laugh",
                            "points":  23
                        },
                        {
                            "text":  "yawn/sleep",
                            "points":  15
                        },
                        {
                            "text":  "text/app/watch game",
                            "points":  11
                        },
                        {
                            "text":  "loud sneeze/cough",
                            "points":  7
                        },
                        {
                            "text":  "yell/boo",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100426,
        "question":  "Name a good gift for someone who needs help relaxing.",
        "answers":  [
                        {
                            "text":  "massage/spa day",
                            "points":  50
                        },
                        {
                            "text":  "weed/meds",
                            "points":  14
                        },
                        {
                            "text":  "booze",
                            "points":  10
                        },
                        {
                            "text":  "bath bomb/calgon",
                            "points":  6
                        },
                        {
                            "text":  "candle",
                            "points":  6
                        },
                        {
                            "text":  "pillow",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100427,
        "question":  "You're not a good therapist if you do what to your patients?",
        "answers":  [
                        {
                            "text":  "berate/laugh at",
                            "points":  48
                        },
                        {
                            "text":  "hit on/sleep with",
                            "points":  17
                        },
                        {
                            "text":  "ignore/talk over",
                            "points":  15
                        },
                        {
                            "text":  "spill their secrets",
                            "points":  3
                        },
                        {
                            "text":  "give bad advice",
                            "points":  3
                        },
                        {
                            "text":  "share my issues",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100428,
        "question":  "Your date might tell you to do what right before kissing?",
        "answers":  [
                        {
                            "text":  "freshen breath/brush",
                            "points":  42
                        },
                        {
                            "text":  "close eyes",
                            "points":  18
                        },
                        {
                            "text":  "pucker up",
                            "points":  13
                        },
                        {
                            "text":  "come closer/hug",
                            "points":  7
                        },
                        {
                            "text":  "\"look in my eyes\"",
                            "points":  5
                        },
                        {
                            "text":  "wipe mouth",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100429,
        "question":  "Taylor Swift and Beyoncé might argue over who has more what?",
        "answers":  [
                        {
                            "text":  "money",
                            "points":  34
                        },
                        {
                            "text":  "fans/followers",
                            "points":  27
                        },
                        {
                            "text":  "hits/records",
                            "points":  14
                        },
                        {
                            "text":  "talent/vocal range",
                            "points":  5
                        },
                        {
                            "text":  "awards",
                            "points":  5
                        },
                        {
                            "text":  "booty",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100430,
        "question":  "What's a lie that a woman might tell her mom about her new boyfriend?",
        "answers":  [
                        {
                            "text":  "rich",
                            "points":  32
                        },
                        {
                            "text":  "good job/doctor",
                            "points":  30
                        },
                        {
                            "text":  "his age",
                            "points":  14
                        },
                        {
                            "text":  "nice/good to me",
                            "points":  6
                        },
                        {
                            "text":  "goes to church",
                            "points":  4
                        },
                        {
                            "text":  "he's single",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100431,
        "question":  "Name a reason you might suspect your date is a prisoner.",
        "answers":  [
                        {
                            "text":  "garb/jumpsuit",
                            "points":  27
                        },
                        {
                            "text":  "cuffs/chains",
                            "points":  18
                        },
                        {
                            "text":  "tattoos",
                            "points":  16
                        },
                        {
                            "text":  "ankle monitor",
                            "points":  15
                        },
                        {
                            "text":  "never met/only calls",
                            "points":  10
                        },
                        {
                            "text":  "paranoid",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100432,
        "question":  "If you ever go see a shrink, it will definitely be because of your who?",
        "answers":  [
                        {
                            "text":  "partner",
                            "points":  26
                        },
                        {
                            "text":  "parents",
                            "points":  25
                        },
                        {
                            "text":  "ex",
                            "points":  14
                        },
                        {
                            "text":  "child",
                            "points":  11
                        },
                        {
                            "text":  "in-laws",
                            "points":  8
                        },
                        {
                            "text":  "self/other personality",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100433,
        "question":  "Name a place you wouldn't want to end up sitting next to someone with an annoying laugh.",
        "answers":  [
                        {
                            "text":  "theater/movie",
                            "points":  40
                        },
                        {
                            "text":  "comedy club",
                            "points":  21
                        },
                        {
                            "text":  "plane",
                            "points":  15
                        },
                        {
                            "text":  "church",
                            "points":  5
                        },
                        {
                            "text":  "restaurant/dinner",
                            "points":  4
                        },
                        {
                            "text":  "work/meeting",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100434,
        "question":  "A funeral is not the best place to tell your mate what?",
        "answers":  [
                        {
                            "text":  "breaking up/divorce",
                            "points":  40
                        },
                        {
                            "text":  "cheated",
                            "points":  18
                        },
                        {
                            "text":  "sick/dying",
                            "points":  13
                        },
                        {
                            "text":  "pregnant",
                            "points":  11
                        },
                        {
                            "text":  "love you/marry me",
                            "points":  3
                        },
                        {
                            "text":  "gettin' turned on!",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100435,
        "question":  "Name something you'd do if you saw a joint in your Uber driver's car.",
        "answers":  [
                        {
                            "text":  "puff-puff, pass",
                            "points":  30
                        },
                        {
                            "text":  "cancel/get out",
                            "points":  28
                        },
                        {
                            "text":  "ignore it",
                            "points":  17
                        },
                        {
                            "text":  "report/1 star",
                            "points":  5
                        },
                        {
                            "text":  "call cops",
                            "points":  4
                        },
                        {
                            "text":  "scream/cry",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100436,
        "question":  "Name someone you've cussed out when you know they can't hear you.",
        "answers":  [
                        {
                            "text":  "spouse/partner",
                            "points":  26
                        },
                        {
                            "text":  "parent",
                            "points":  19
                        },
                        {
                            "text":  "boss/coworker",
                            "points":  18
                        },
                        {
                            "text":  "bad driver",
                            "points":  16
                        },
                        {
                            "text":  "kid",
                            "points":  6
                        },
                        {
                            "text":  "grandparent",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100437,
        "question":  "Name an animal that's easy to imitate during charades.",
        "answers":  [
                        {
                            "text":  "dog",
                            "points":  24
                        },
                        {
                            "text":  "monkey/ape",
                            "points":  20
                        },
                        {
                            "text":  "elephant",
                            "points":  14
                        },
                        {
                            "text":  "bird/chicken",
                            "points":  12
                        },
                        {
                            "text":  "cat",
                            "points":  9
                        },
                        {
                            "text":  "cow",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  100438,
        "question":  "Name something a kid might be tempted to put on his teacher's chair.",
        "answers":  [
                        {
                            "text":  "tack/nail",
                            "points":  31
                        },
                        {
                            "text":  "whoopee cushion",
                            "points":  21
                        },
                        {
                            "text":  "gum",
                            "points":  14
                        },
                        {
                            "text":  "food/apple",
                            "points":  11
                        },
                        {
                            "text":  "frog/critter",
                            "points":  6
                        },
                        {
                            "text":  "glue",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100439,
        "question":  "After a bad breakup, name something a woman might leave in her ex's house for him to remember her by.",
        "answers":  [
                        {
                            "text":  "clothes/panties",
                            "points":  50
                        },
                        {
                            "text":  "perfume",
                            "points":  9
                        },
                        {
                            "text":  "ring",
                            "points":  9
                        },
                        {
                            "text":  "a mess/damage",
                            "points":  7
                        },
                        {
                            "text":  "photo",
                            "points":  6
                        },
                        {
                            "text":  "poop",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100440,
        "question":  "Name something a movie director might say on a set that they might also say to their mate in bed.",
        "answers":  [
                        {
                            "text":  "action!",
                            "points":  40
                        },
                        {
                            "text":  "cut!",
                            "points":  15
                        },
                        {
                            "text":  "again...take 2!",
                            "points":  12
                        },
                        {
                            "text":  "that's a wrap!",
                            "points":  10
                        },
                        {
                            "text":  "roll camera!",
                            "points":  6
                        },
                        {
                            "text":  "move/little to the left",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100441,
        "question":  "Fill in the blank: Soul ______.",
        "answers":  [
                        {
                            "text":  "soul train",
                            "points":  27
                        },
                        {
                            "text":  "soul food",
                            "points":  25
                        },
                        {
                            "text":  "soul man",
                            "points":  14
                        },
                        {
                            "text":  "soulmate",
                            "points":  10
                        },
                        {
                            "text":  "soul sister",
                            "points":  7
                        },
                        {
                            "text":  "soul music",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100442,
        "question":  "We asked 100 women... What pizza topping would make a good pet name for your man?",
        "answers":  [
                        {
                            "text":  "sausage",
                            "points":  27
                        },
                        {
                            "text":  "pepperoni",
                            "points":  15
                        },
                        {
                            "text":  "cheese/extra cheese",
                            "points":  15
                        },
                        {
                            "text":  "ham",
                            "points":  13
                        },
                        {
                            "text":  "pepper",
                            "points":  11
                        },
                        {
                            "text":  "olive",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100443,
        "question":  "We asked 100 women... Name something men lie about that you pretend to believe.",
        "answers":  [
                        {
                            "text":  "$$$/job",
                            "points":  23
                        },
                        {
                            "text":  "where they were",
                            "points":  20
                        },
                        {
                            "text":  "height/weight",
                            "points":  14
                        },
                        {
                            "text":  "athletic/bench 300",
                            "points":  13
                        },
                        {
                            "text":  "that you're pretty",
                            "points":  12
                        },
                        {
                            "text":  "their \"size\"",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100444,
        "question":  "Name a smell that might remind a woman of her ex.",
        "answers":  [
                        {
                            "text":  "cologne/aftershave",
                            "points":  62
                        },
                        {
                            "text":  "cigs/cigars",
                            "points":  8
                        },
                        {
                            "text":  "beer",
                            "points":  6
                        },
                        {
                            "text":  "sweat/b.o.",
                            "points":  4
                        },
                        {
                            "text":  "wood",
                            "points":  3
                        },
                        {
                            "text":  "cheese",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100445,
        "question":  "If they made cereal with prizes for adults, you'd love to find what at the bottom of the box?",
        "answers":  [
                        {
                            "text":  "cash/gift card",
                            "points":  44
                        },
                        {
                            "text":  "diamond/jewelry",
                            "points":  18
                        },
                        {
                            "text":  "mini booze bottle",
                            "points":  8
                        },
                        {
                            "text":  "car key",
                            "points":  7
                        },
                        {
                            "text":  "joint/drugs",
                            "points":  4
                        },
                        {
                            "text":  "phone",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100446,
        "question":  "What does the bathroom attendant do for you in the world's fanciest bathroom?",
        "answers":  [
                        {
                            "text":  "hands me a towel",
                            "points":  38
                        },
                        {
                            "text":  "wipes me",
                            "points":  19
                        },
                        {
                            "text":  "washes/dries hands",
                            "points":  15
                        },
                        {
                            "text":  "opens door",
                            "points":  5
                        },
                        {
                            "text":  "cologne spritz",
                            "points":  5
                        },
                        {
                            "text":  "turns water on",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100447,
        "question":  "Name an occupation where cutting something for people is part of the job.",
        "answers":  [
                        {
                            "text":  "butcher/deli",
                            "points":  36
                        },
                        {
                            "text":  "hairstylist",
                            "points":  17
                        },
                        {
                            "text":  "fabric cutter/tailor",
                            "points":  10
                        },
                        {
                            "text":  "carpenter/builder",
                            "points":  8
                        },
                        {
                            "text":  "chef/pizza maker",
                            "points":  7
                        },
                        {
                            "text":  "gardener/landscaper",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  100448,
        "question":  "Name something you associate with Canada.",
        "answers":  [
                        {
                            "text":  "maple/syrup",
                            "points":  47
                        },
                        {
                            "text":  "hockey/skating",
                            "points":  15
                        },
                        {
                            "text":  "cold weather",
                            "points":  8
                        },
                        {
                            "text":  "mounties",
                            "points":  6
                        },
                        {
                            "text":  "\"eh\"/accent",
                            "points":  4
                        },
                        {
                            "text":  "niagara falls",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100449,
        "question":  "Name a game at which you're ashamed to say you've cheated.",
        "answers":  [
                        {
                            "text":  "cards/poker",
                            "points":  41
                        },
                        {
                            "text":  "monopoly",
                            "points":  22
                        },
                        {
                            "text":  "scrabble",
                            "points":  8
                        },
                        {
                            "text":  "golf",
                            "points":  5
                        },
                        {
                            "text":  "life",
                            "points":  4
                        },
                        {
                            "text":  "yahtzee",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100450,
        "question":  "Name something from a supermarket that's too big to steal by hiding it in your underwear.",
        "answers":  [
                        {
                            "text":  "turkey",
                            "points":  31
                        },
                        {
                            "text":  "melon",
                            "points":  25
                        },
                        {
                            "text":  "gallon of milk",
                            "points":  10
                        },
                        {
                            "text":  "case of soda/beer",
                            "points":  6
                        },
                        {
                            "text":  "beef roast/steak",
                            "points":  6
                        },
                        {
                            "text":  "ham",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100451,
        "question":  "Name a food you love that comes out of a can.",
        "answers":  [
                        {
                            "text":  "soup/chili",
                            "points":  28
                        },
                        {
                            "text":  "tuna",
                            "points":  19
                        },
                        {
                            "text":  "beans",
                            "points":  18
                        },
                        {
                            "text":  "corn",
                            "points":  8
                        },
                        {
                            "text":  "spam",
                            "points":  6
                        },
                        {
                            "text":  "olives",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100452,
        "question":  "You woud be insulted if someone compared your skin to what type of fabric?",
        "answers":  [
                        {
                            "text":  "leather",
                            "points":  27
                        },
                        {
                            "text":  "wool",
                            "points":  20
                        },
                        {
                            "text":  "corduroy",
                            "points":  13
                        },
                        {
                            "text":  "burlap",
                            "points":  12
                        },
                        {
                            "text":  "denim",
                            "points":  6
                        },
                        {
                            "text":  "cotton",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100453,
        "question":  "Name a scary movie character a lot of people dress up as for Halloween.",
        "answers":  [
                        {
                            "text":  "jason",
                            "points":  26
                        },
                        {
                            "text":  "freddy krueger",
                            "points":  20
                        },
                        {
                            "text":  "michael myers",
                            "points":  17
                        },
                        {
                            "text":  "ghostface",
                            "points":  10
                        },
                        {
                            "text":  "dracula",
                            "points":  5
                        },
                        {
                            "text":  "chucky",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100454,
        "question":  "Name a place you've made love where you knew you might get in trouble but you did it anyway.",
        "answers":  [
                        {
                            "text":  "car/pkg. lot",
                            "points":  43
                        },
                        {
                            "text":  "parents' house/bed",
                            "points":  14
                        },
                        {
                            "text":  "park",
                            "points":  12
                        },
                        {
                            "text":  "beach",
                            "points":  5
                        },
                        {
                            "text":  "work/boss' desk",
                            "points":  4
                        },
                        {
                            "text":  "public bathroom",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100455,
        "question":  "Name a type of ball you could balance on that booty of yours.",
        "answers":  [
                        {
                            "text":  "basketball",
                            "points":  26
                        },
                        {
                            "text":  "tennis ball",
                            "points":  21
                        },
                        {
                            "text":  "soccer ball",
                            "points":  14
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
                            "text":  "golf ball",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  100456,
        "question":  "Name a state someone might be named after.",
        "answers":  [
                        {
                            "text":  "georgia",
                            "points":  41
                        },
                        {
                            "text":  "virginia",
                            "points":  18
                        },
                        {
                            "text":  "alabama",
                            "points":  9
                        },
                        {
                            "text":  "montana",
                            "points":  5
                        },
                        {
                            "text":  "arizona",
                            "points":  5
                        },
                        {
                            "text":  "alaska",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100457,
        "question":  "Name a word or phrase that starts with \"snap.\"",
        "answers":  [
                        {
                            "text":  "snap! crackle! pop!",
                            "points":  34
                        },
                        {
                            "text":  "snapdragon",
                            "points":  15
                        },
                        {
                            "text":  "snapshot",
                            "points":  9
                        },
                        {
                            "text":  "snap peas",
                            "points":  9
                        },
                        {
                            "text":  "snapchat",
                            "points":  8
                        },
                        {
                            "text":  "snap out of it",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  100458,
        "question":  "Other than a whistle, name something you blow in public.",
        "answers":  [
                        {
                            "text":  "instrument/sax",
                            "points":  28
                        },
                        {
                            "text":  "nose",
                            "points":  18
                        },
                        {
                            "text":  "bubble/gum",
                            "points":  18
                        },
                        {
                            "text":  "balloon",
                            "points":  6
                        },
                        {
                            "text":  "your cool/top",
                            "points":  6
                        },
                        {
                            "text":  "candle/on cake",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100459,
        "question":  "If a wife finds out on Monday that her husband is cheating, name something of his she'd sell on Tuesday.",
        "answers":  [
                        {
                            "text":  "car/truck",
                            "points":  41
                        },
                        {
                            "text":  "sports equip./clubs",
                            "points":  17
                        },
                        {
                            "text":  "clothes/suits",
                            "points":  9
                        },
                        {
                            "text":  "ring/jewelry",
                            "points":  5
                        },
                        {
                            "text":  "tv/remote",
                            "points":  4
                        },
                        {
                            "text":  "motorcycle",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100460,
        "question":  "Name a sport that you're better at when you're drunk.",
        "answers":  [
                        {
                            "text":  "bowling",
                            "points":  22
                        },
                        {
                            "text":  "golf",
                            "points":  14
                        },
                        {
                            "text":  "beer pong",
                            "points":  13
                        },
                        {
                            "text":  "pool",
                            "points":  12
                        },
                        {
                            "text":  "darts",
                            "points":  10
                        },
                        {
                            "text":  "basketball",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  100461,
        "question":  "If you call a man an eagle, it's a compliment. If you call him what kind of bird, it's an insult?",
        "answers":  [
                        {
                            "text":  "dodo",
                            "points":  20
                        },
                        {
                            "text":  "turkey",
                            "points":  16
                        },
                        {
                            "text":  "chicken",
                            "points":  16
                        },
                        {
                            "text":  "vulture",
                            "points":  12
                        },
                        {
                            "text":  "pigeon/dove",
                            "points":  10
                        },
                        {
                            "text":  "buzzard",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  100462,
        "question":  "Name an ice cream topping that's an even sweeter pet name for your boo.",
        "answers":  [
                        {
                            "text":  "sprinkles",
                            "points":  31
                        },
                        {
                            "text":  "cherry",
                            "points":  14
                        },
                        {
                            "text":  "chocolate/fudge",
                            "points":  14
                        },
                        {
                            "text":  "caramel",
                            "points":  8
                        },
                        {
                            "text":  "honey",
                            "points":  6
                        },
                        {
                            "text":  "peanut",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  100463,
        "question":  "Name a place that isn't as much fun if you go there alone.",
        "answers":  [
                        {
                            "text":  "theme park/carnival",
                            "points":  28
                        },
                        {
                            "text":  "restaurant",
                            "points":  16
                        },
                        {
                            "text":  "movie",
                            "points":  14
                        },
                        {
                            "text":  "bar/club",
                            "points":  12
                        },
                        {
                            "text":  "beach",
                            "points":  6
                        },
                        {
                            "text":  "casino/vegas",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100464,
        "question":  "We asked 100 men... What celebrity would make the best gym partner?",
        "answers":  [
                        {
                            "text":  "dwayne johnson",
                            "points":  24
                        },
                        {
                            "text":  "arnold",
                            "points":  21
                        },
                        {
                            "text":  "sly stallone",
                            "points":  12
                        },
                        {
                            "text":  "brad pitt",
                            "points":  10
                        },
                        {
                            "text":  "vin diesel",
                            "points":  8
                        },
                        {
                            "text":  "tom hanks",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100465,
        "question":  "Name a reason you might wear a shirt with a person's face on it.",
        "answers":  [
                        {
                            "text":  "concert",
                            "points":  20
                        },
                        {
                            "text":  "birthday",
                            "points":  19
                        },
                        {
                            "text":  "memorial/funeral",
                            "points":  13
                        },
                        {
                            "text":  "election",
                            "points":  11
                        },
                        {
                            "text":  "joke/prank",
                            "points":  10
                        },
                        {
                            "text":  "bachelor/ette party",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  100466,
        "question":  "Name a pop star a dancer dreams of working with.",
        "answers":  [
                        {
                            "text":  "taylor swift",
                            "points":  33
                        },
                        {
                            "text":  "beyonce",
                            "points":  19
                        },
                        {
                            "text":  "britney spears",
                            "points":  7
                        },
                        {
                            "text":  "j-lo",
                            "points":  7
                        },
                        {
                            "text":  "paula abdul",
                            "points":  6
                        },
                        {
                            "text":  "madonna",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100467,
        "question":  "Name a reason a Sunday school teacher asks you to never bring your kid back.",
        "answers":  [
                        {
                            "text":  "cusses",
                            "points":  30
                        },
                        {
                            "text":  "bully/fights",
                            "points":  18
                        },
                        {
                            "text":  "god who?/yay satan!",
                            "points":  16
                        },
                        {
                            "text":  "chatter box",
                            "points":  6
                        },
                        {
                            "text":  "crybaby",
                            "points":  3
                        },
                        {
                            "text":  "not listening",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100468,
        "question":  "Name a female rapper who is the perfect combination of brains and booty.",
        "answers":  [
                        {
                            "text":  "cardi b",
                            "points":  20
                        },
                        {
                            "text":  "megan thee stallion",
                            "points":  14
                        },
                        {
                            "text":  "queen latifah",
                            "points":  14
                        },
                        {
                            "text":  "nicki minaj",
                            "points":  12
                        },
                        {
                            "text":  "beyonce",
                            "points":  10
                        },
                        {
                            "text":  "missy elliott",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  100469,
        "question":  "You've never seen it, but you're sure what exists?",
        "answers":  [
                        {
                            "text":  "god/heaven",
                            "points":  25
                        },
                        {
                            "text":  "aliens/ufo's",
                            "points":  16
                        },
                        {
                            "text":  "bigfoot",
                            "points":  11
                        },
                        {
                            "text":  "air/wind/oxygen",
                            "points":  10
                        },
                        {
                            "text":  "ghosts",
                            "points":  9
                        },
                        {
                            "text":  "billion dollars",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100470,
        "question":  "Name something grandpa might leave you in his will that makes you think he didn't really love you all that much.",
        "answers":  [
                        {
                            "text":  "nothing/a dollar",
                            "points":  27
                        },
                        {
                            "text":  "cardigan/garb",
                            "points":  19
                        },
                        {
                            "text":  "his dentures",
                            "points":  14
                        },
                        {
                            "text":  "bills/tax lien",
                            "points":  6
                        },
                        {
                            "text":  "hooptie car",
                            "points":  4
                        },
                        {
                            "text":  "tools",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100471,
        "question":  "Name a word you might use to describe a cup of coffee and your boss.",
        "answers":  [
                        {
                            "text":  "bitter",
                            "points":  24
                        },
                        {
                            "text":  "strong",
                            "points":  17
                        },
                        {
                            "text":  "hot",
                            "points":  17
                        },
                        {
                            "text":  "black",
                            "points":  8
                        },
                        {
                            "text":  "cold",
                            "points":  4
                        },
                        {
                            "text":  "sweet",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100472,
        "question":  "If you can't sing, name an artist you should avoid choosing at karaoke.",
        "answers":  [
                        {
                            "text":  "mariah",
                            "points":  21
                        },
                        {
                            "text":  "whitney",
                            "points":  18
                        },
                        {
                            "text":  "celine dion",
                            "points":  15
                        },
                        {
                            "text":  "adele",
                            "points":  14
                        },
                        {
                            "text":  "taylor swift",
                            "points":  3
                        },
                        {
                            "text":  "beyonce",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100473,
        "question":  "When little kids are playacting, they pretend to be what?",
        "answers":  [
                        {
                            "text":  "doctors",
                            "points":  15
                        },
                        {
                            "text":  "superheroes",
                            "points":  15
                        },
                        {
                            "text":  "cops & robbers",
                            "points":  15
                        },
                        {
                            "text":  "mom & dad",
                            "points":  12
                        },
                        {
                            "text":  "animals/dragons",
                            "points":  9
                        },
                        {
                            "text":  "princess/royalty",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  100474,
        "question":  "Name something you had as a teenager that the one you have now is much better.",
        "answers":  [
                        {
                            "text":  "car",
                            "points":  43
                        },
                        {
                            "text":  "phone",
                            "points":  9
                        },
                        {
                            "text":  "body",
                            "points":  6
                        },
                        {
                            "text":  "tv",
                            "points":  5
                        },
                        {
                            "text":  "mate/honey",
                            "points":  5
                        },
                        {
                            "text":  "brain/sense",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100475,
        "question":  "Name a cocktail you'd be surprised to see a pro wrestler drinking.",
        "answers":  [
                        {
                            "text":  "martini/appletini",
                            "points":  28
                        },
                        {
                            "text":  "cosmo",
                            "points":  19
                        },
                        {
                            "text":  "shirley temple",
                            "points":  13
                        },
                        {
                            "text":  "pina colada",
                            "points":  5
                        },
                        {
                            "text":  "daiquiri",
                            "points":  4
                        },
                        {
                            "text":  "sex on the beach",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100476,
        "question":  "If your shower could talk, it might say to you, \"You're really\" what?",
        "answers":  [
                        {
                            "text":  "dirty/smelly",
                            "points":  26
                        },
                        {
                            "text":  "flabby",
                            "points":  13
                        },
                        {
                            "text":  "clean now!",
                            "points":  13
                        },
                        {
                            "text":  "cute/sexy",
                            "points":  9
                        },
                        {
                            "text":  "hairy",
                            "points":  6
                        },
                        {
                            "text":  "old",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100477,
        "question":  "We asked 100 women... Name a sexy Halloween costume you'd wear to make an ex jealous.",
        "answers":  [
                        {
                            "text":  "nurse",
                            "points":  21
                        },
                        {
                            "text":  "french maid",
                            "points":  16
                        },
                        {
                            "text":  "playboy bunny",
                            "points":  11
                        },
                        {
                            "text":  "sexy cat/catwoman",
                            "points":  9
                        },
                        {
                            "text":  "wonder woman",
                            "points":  7
                        },
                        {
                            "text":  "elvira/vampire",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  100478,
        "question":  "Name something annoying a man does that a woman is willing to put up with if he's sexy.",
        "answers":  [
                        {
                            "text":  "snores",
                            "points":  20
                        },
                        {
                            "text":  "brags/yaps",
                            "points":  16
                        },
                        {
                            "text":  "farts/dutch oven",
                            "points":  15
                        },
                        {
                            "text":  "drinks/wine coolers",
                            "points":  7
                        },
                        {
                            "text":  "eats loud/mouth open",
                            "points":  7
                        },
                        {
                            "text":  "flirts/cheats",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100479,
        "question":  "Some dogs can't taste any difference between shoes from Payless and shoes from which fancy store?",
        "answers":  [
                        {
                            "text":  "macy's",
                            "points":  27
                        },
                        {
                            "text":  "nordstrom",
                            "points":  15
                        },
                        {
                            "text":  "gucci",
                            "points":  9
                        },
                        {
                            "text":  "neiman marcus",
                            "points":  8
                        },
                        {
                            "text":  "jimmy choo",
                            "points":  5
                        },
                        {
                            "text":  "prada",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100480,
        "question":  "Fill in the blank: I'm in ______.",
        "answers":  [
                        {
                            "text":  "trouble",
                            "points":  23
                        },
                        {
                            "text":  "love",
                            "points":  20
                        },
                        {
                            "text":  "heaven",
                            "points":  10
                        },
                        {
                            "text":  "a pickle",
                            "points":  6
                        },
                        {
                            "text":  "hell",
                            "points":  5
                        },
                        {
                            "text":  "deep",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100481,
        "question":  "Name an occupation of a man who could take a woman to new heights.",
        "answers":  [
                        {
                            "text":  "pilot",
                            "points":  44
                        },
                        {
                            "text":  "roofer/construction",
                            "points":  6
                        },
                        {
                            "text":  "ceo",
                            "points":  5
                        },
                        {
                            "text":  "astronaut",
                            "points":  4
                        },
                        {
                            "text":  "president",
                            "points":  4
                        },
                        {
                            "text":  "doctor",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100482,
        "question":  "We asked 100 women... Fill in the blank: If a date asked you to drive him to ______, you'd run away.",
        "answers":  [
                        {
                            "text":  "jail",
                            "points":  20
                        },
                        {
                            "text":  "his ex's/baby mama's",
                            "points":  16
                        },
                        {
                            "text":  "his parents'",
                            "points":  9
                        },
                        {
                            "text":  "his wife's/boo's",
                            "points":  8
                        },
                        {
                            "text":  "bank to rob",
                            "points":  7
                        },
                        {
                            "text":  "a psych ward/doc",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  100483,
        "question":  "Name something specific that you haven't done since high school P.E. class.",
        "answers":  [
                        {
                            "text":  "run",
                            "points":  22
                        },
                        {
                            "text":  "rope climb",
                            "points":  14
                        },
                        {
                            "text":  "jumping jacks",
                            "points":  11
                        },
                        {
                            "text":  "dodgeball",
                            "points":  7
                        },
                        {
                            "text":  "group locker/shower",
                            "points":  6
                        },
                        {
                            "text":  "pull-ups/chin-ups",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100484,
        "question":  "Instead of five servings of fruits and vegetables a day, you'd rather have five servings of what?",
        "answers":  [
                        {
                            "text":  "chocolate/candy",
                            "points":  21
                        },
                        {
                            "text":  "ice cream",
                            "points":  17
                        },
                        {
                            "text":  "cake",
                            "points":  10
                        },
                        {
                            "text":  "potatoes/chips",
                            "points":  6
                        },
                        {
                            "text":  "pizza",
                            "points":  6
                        },
                        {
                            "text":  "booze",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100485,
        "question":  "If I asked you to think of your favorite thing in the world, what just popped into your head?",
        "answers":  [
                        {
                            "text":  "food/coffee",
                            "points":  22
                        },
                        {
                            "text":  "kids/grandkids",
                            "points":  13
                        },
                        {
                            "text":  "animals/possums",
                            "points":  12
                        },
                        {
                            "text":  "my boo/love",
                            "points":  7
                        },
                        {
                            "text":  "vacay/beach",
                            "points":  6
                        },
                        {
                            "text":  "parents",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100486,
        "question":  "Give me a word starting with I that describes your husband.",
        "answers":  [
                        {
                            "text":  "idiot",
                            "points":  17
                        },
                        {
                            "text":  "intelligent",
                            "points":  12
                        },
                        {
                            "text":  "irritating",
                            "points":  11
                        },
                        {
                            "text":  "interesting",
                            "points":  10
                        },
                        {
                            "text":  "ideal",
                            "points":  7
                        },
                        {
                            "text":  "ignorant",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  100487,
        "question":  "Name a living celebrity you'd love to share a joint with.",
        "answers":  [
                        {
                            "text":  "snoop dogg",
                            "points":  34
                        },
                        {
                            "text":  "willie nelson",
                            "points":  11
                        },
                        {
                            "text":  "barack obama",
                            "points":  7
                        },
                        {
                            "text":  "tommy chong",
                            "points":  4
                        },
                        {
                            "text":  "howard stern",
                            "points":  3
                        },
                        {
                            "text":  "travis kelce",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100488,
        "question":  "Name something you pretend to like because everyone else does.",
        "answers":  [
                        {
                            "text":  "sports/football",
                            "points":  17
                        },
                        {
                            "text":  "music/singer",
                            "points":  11
                        },
                        {
                            "text":  "booze",
                            "points":  11
                        },
                        {
                            "text":  "movie/tv show",
                            "points":  10
                        },
                        {
                            "text":  "people/coworker",
                            "points":  9
                        },
                        {
                            "text":  "weather/snow",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100489,
        "question":  "Name an occupation in which someone with a baby face might have a hard time.",
        "answers":  [
                        {
                            "text":  "cop",
                            "points":  16
                        },
                        {
                            "text":  "doctor",
                            "points":  13
                        },
                        {
                            "text":  "lawyer",
                            "points":  12
                        },
                        {
                            "text":  "bartender",
                            "points":  9
                        },
                        {
                            "text":  "teacher",
                            "points":  6
                        },
                        {
                            "text":  "security/bouncer",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  100490,
        "question":  "Name something they sell at the gift shop in hell.",
        "answers":  [
                        {
                            "text":  "ice/water",
                            "points":  26
                        },
                        {
                            "text":  "pitchforks/weapons",
                            "points":  11
                        },
                        {
                            "text":  "hot tamales/food",
                            "points":  7
                        },
                        {
                            "text":  "fans",
                            "points":  6
                        },
                        {
                            "text":  "fireballs",
                            "points":  5
                        },
                        {
                            "text":  "booze/hot toddy",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100491,
        "question":  "Name something you like that's big and round.",
        "answers":  [
                        {
                            "text":  "melon",
                            "points":  16
                        },
                        {
                            "text":  "ball/basketball",
                            "points":  16
                        },
                        {
                            "text":  "pizza",
                            "points":  10
                        },
                        {
                            "text":  "juicy booty",
                            "points":  8
                        },
                        {
                            "text":  "epic boobage",
                            "points":  5
                        },
                        {
                            "text":  "the sun",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100492,
        "question":  "Name a country you would love your company to transfer you to for a year.",
        "answers":  [
                        {
                            "text":  "italy",
                            "points":  16
                        },
                        {
                            "text":  "australia",
                            "points":  11
                        },
                        {
                            "text":  "canada",
                            "points":  10
                        },
                        {
                            "text":  "england",
                            "points":  9
                        },
                        {
                            "text":  "france",
                            "points":  7
                        },
                        {
                            "text":  "ireland",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  100493,
        "question":  "Fill in the blank: ______ horse.",
        "answers":  [
                        {
                            "text":  "racehorse",
                            "points":  15
                        },
                        {
                            "text":  "dark horse",
                            "points":  11
                        },
                        {
                            "text":  "hobbyhorse",
                            "points":  9
                        },
                        {
                            "text":  "workhorse",
                            "points":  8
                        },
                        {
                            "text":  "rocking horse",
                            "points":  8
                        },
                        {
                            "text":  "charley horse",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  100494,
        "question":  "Name someone you probably shouldn't ask to give you a back rub.",
        "answers":  [
                        {
                            "text":  "boss/coworker",
                            "points":  22
                        },
                        {
                            "text":  "priest",
                            "points":  9
                        },
                        {
                            "text":  "parent",
                            "points":  8
                        },
                        {
                            "text":  "stranger",
                            "points":  5
                        },
                        {
                            "text":  "edward scissorhands",
                            "points":  5
                        },
                        {
                            "text":  "someone else's boo",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100495,
        "question":  "Name a school subject parents pray their teenager doesn't need help with.",
        "answers":  [
                        {
                            "text":  "math",
                            "points":  76
                        },
                        {
                            "text":  "sex ed",
                            "points":  12
                        },
                        {
                            "text":  "science",
                            "points":  5
                        },
                        {
                            "text":  "english/spelling",
                            "points":  4
                        },
                        {
                            "text":  "p.e.",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100496,
        "question":  "We asked 100 married women... Name something Mickey Mouse has that would be weird if your husband had it too.",
        "answers":  [
                        {
                            "text":  "big mouse ears",
                            "points":  70
                        },
                        {
                            "text":  "a tail",
                            "points":  10
                        },
                        {
                            "text":  "high voice/giggle",
                            "points":  8
                        },
                        {
                            "text":  "minnie mouse",
                            "points":  7
                        },
                        {
                            "text":  "white gloves",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100497,
        "question":  "We asked 100 women... Name something you do to a bald man's head to get him in the mood.",
        "answers":  [
                        {
                            "text":  "rub/stroke it",
                            "points":  63
                        },
                        {
                            "text":  "kiss it",
                            "points":  18
                        },
                        {
                            "text":  "lick it",
                            "points":  14
                        },
                        {
                            "text":  "pat it",
                            "points":  3
                        },
                        {
                            "text":  "oil it up",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100498,
        "question":  "Name something that gets harvested.",
        "answers":  [
                        {
                            "text":  "fruits/veggies",
                            "points":  57
                        },
                        {
                            "text":  "wheat/hay",
                            "points":  36
                        },
                        {
                            "text":  "organs",
                            "points":  3
                        },
                        {
                            "text":  "weed",
                            "points":  2
                        },
                        {
                            "text":  "eggs",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100499,
        "question":  "You'd be annoyed to find out that the flowers your date gave you came from where?",
        "answers":  [
                        {
                            "text":  "grave/funeral",
                            "points":  42
                        },
                        {
                            "text":  "garden/the yard",
                            "points":  21
                        },
                        {
                            "text":  "dollar store/gas stn.",
                            "points":  17
                        },
                        {
                            "text":  "the garbage",
                            "points":  11
                        },
                        {
                            "text":  "another date/ex",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  100500,
        "question":  "It would be weird to make out on a quilt with a photo of your deceased who printed on it?",
        "answers":  [
                        {
                            "text":  "parents",
                            "points":  36
                        },
                        {
                            "text":  "grandparents",
                            "points":  32
                        },
                        {
                            "text":  "pet/dog",
                            "points":  17
                        },
                        {
                            "text":  "spouse",
                            "points":  10
                        },
                        {
                            "text":  "ex",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100501,
        "question":  "We asked 100 women... What Vegas casino game best describes your man in bed?",
        "answers":  [
                        {
                            "text":  "poker/7-card stud",
                            "points":  25
                        },
                        {
                            "text":  "blackjack/21",
                            "points":  24
                        },
                        {
                            "text":  "craps",
                            "points":  17
                        },
                        {
                            "text":  "slots",
                            "points":  17
                        },
                        {
                            "text":  "roulette",
                            "points":  16
                        }
                    ]
    },
    {
        "id":  100502,
        "question":  "If a man is extremely cheap, name a place he may suggest for a first date.",
        "answers":  [
                        {
                            "text":  "cheap restaurant",
                            "points":  79
                        },
                        {
                            "text":  "the park",
                            "points":  12
                        },
                        {
                            "text":  "store/for free samples",
                            "points":  3
                        },
                        {
                            "text":  "library",
                            "points":  2
                        },
                        {
                            "text":  "his/her place",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100503,
        "question":  "Name something you do to imitate a rooster.",
        "answers":  [
                        {
                            "text":  "\"cock-a-doodle-do!\"",
                            "points":  77
                        },
                        {
                            "text":  "strut",
                            "points":  15
                        },
                        {
                            "text":  "kick/claw ground",
                            "points":  2
                        },
                        {
                            "text":  "flap my arms",
                            "points":  2
                        },
                        {
                            "text":  "peck",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100504,
        "question":  "If a woman mentions her clown phase, what specifically about her appearance might she be referring to?",
        "answers":  [
                        {
                            "text":  "gaudy makeup",
                            "points":  68
                        },
                        {
                            "text":  "curly/unruly hair",
                            "points":  17
                        },
                        {
                            "text":  "orange/dyed hair",
                            "points":  7
                        },
                        {
                            "text":  "red/pimply nose",
                            "points":  4
                        },
                        {
                            "text":  "outfit/polka dots",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100505,
        "question":  "Name an award an actor can win.",
        "answers":  [
                        {
                            "text":  "academy award",
                            "points":  64
                        },
                        {
                            "text":  "emmy",
                            "points":  23
                        },
                        {
                            "text":  "golden globe",
                            "points":  5
                        },
                        {
                            "text":  "tony",
                            "points":  4
                        },
                        {
                            "text":  "razzie",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100506,
        "question":  "We asked 100 women... If you saw your friend's groom kiss the wedding planner before the ceremony, what would you do?",
        "answers":  [
                        {
                            "text":  "tell the bride",
                            "points":  54
                        },
                        {
                            "text":  "confront groom",
                            "points":  21
                        },
                        {
                            "text":  "snap a pic",
                            "points":  13
                        },
                        {
                            "text":  "kick their butts",
                            "points":  6
                        },
                        {
                            "text":  "mind my business",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100507,
        "question":  "Name something a dog does when it hears thunder that you'd be surprised a person would do.",
        "answers":  [
                        {
                            "text":  "hide/cower",
                            "points":  52
                        },
                        {
                            "text":  "howl/whimper",
                            "points":  31
                        },
                        {
                            "text":  "run",
                            "points":  7
                        },
                        {
                            "text":  "pee on self",
                            "points":  6
                        },
                        {
                            "text":  "shake",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100508,
        "question":  "Name something a super-polite mugger does after mugging you.",
        "answers":  [
                        {
                            "text":  "thanks me",
                            "points":  50
                        },
                        {
                            "text":  "apologizes",
                            "points":  40
                        },
                        {
                            "text":  "returns purse/id",
                            "points":  4
                        },
                        {
                            "text":  "asks if i'm ok",
                            "points":  2
                        },
                        {
                            "text":  "hugs me",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100509,
        "question":  "We asked 100 married men... Admit it: Just once, you'd like to try on your wife's what?",
        "answers":  [
                        {
                            "text":  "lingerie/undies",
                            "points":  49
                        },
                        {
                            "text":  "wig",
                            "points":  22
                        },
                        {
                            "text":  "blouse",
                            "points":  13
                        },
                        {
                            "text":  "shoes/heels",
                            "points":  12
                        },
                        {
                            "text":  "fluffy robe",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100510,
        "question":  "Fill in the blank: ______ whiz.",
        "answers":  [
                        {
                            "text":  "cheez whiz",
                            "points":  74
                        },
                        {
                            "text":  "gee-whiz",
                            "points":  14
                        },
                        {
                            "text":  "quiz wiz",
                            "points":  5
                        },
                        {
                            "text":  "the wiz",
                            "points":  2
                        },
                        {
                            "text":  "math wiz",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100511,
        "question":  "What kind of music would be hard to fall asleep to?",
        "answers":  [
                        {
                            "text":  "metal/rock",
                            "points":  73
                        },
                        {
                            "text":  "rap",
                            "points":  18
                        },
                        {
                            "text":  "polka",
                            "points":  2
                        },
                        {
                            "text":  "techno",
                            "points":  2
                        },
                        {
                            "text":  "country/bluegrass",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100512,
        "question":  "Name a word other than \"dude\" that men call their male friends.",
        "answers":  [
                        {
                            "text":  "bro/bruh",
                            "points":  63
                        },
                        {
                            "text":  "buddy",
                            "points":  19
                        },
                        {
                            "text":  "man",
                            "points":  10
                        },
                        {
                            "text":  "pal",
                            "points":  3
                        },
                        {
                            "text":  "homey/homeboy",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100513,
        "question":  "We asked 100 married men... You'd be willing to renew your vows if you could skip which one this time?",
        "answers":  [
                        {
                            "text":  "to obey",
                            "points":  55
                        },
                        {
                            "text":  "forsake all others",
                            "points":  15
                        },
                        {
                            "text":  "richer, poorer",
                            "points":  14
                        },
                        {
                            "text":  "til death...",
                            "points":  11
                        },
                        {
                            "text":  "in sickness...",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100514,
        "question":  "Fill in the blank: Steve Harvey makes me laugh so hard, I ______.",
        "answers":  [
                        {
                            "text":  "pee/poo myself",
                            "points":  49
                        },
                        {
                            "text":  "cry",
                            "points":  32
                        },
                        {
                            "text":  "snort",
                            "points":  9
                        },
                        {
                            "text":  "fart",
                            "points":  5
                        },
                        {
                            "text":  "fall down",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100515,
        "question":  "Name something you see when you look in the mirror and realize for the first time you're getting old.",
        "answers":  [
                        {
                            "text":  "wrinkles",
                            "points":  48
                        },
                        {
                            "text":  "gray hair",
                            "points":  40
                        },
                        {
                            "text":  "eye bags/droopy lids",
                            "points":  5
                        },
                        {
                            "text":  "widening nose",
                            "points":  2
                        },
                        {
                            "text":  "bald spot",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100516,
        "question":  "Name something you'd get kicked out of a mattress store for doing on one of their beds.",
        "answers":  [
                        {
                            "text":  "sleeping",
                            "points":  38
                        },
                        {
                            "text":  "the nasty",
                            "points":  29
                        },
                        {
                            "text":  "jumping up & down",
                            "points":  22
                        },
                        {
                            "text":  "wetting it",
                            "points":  5
                        },
                        {
                            "text":  "eating on it",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100517,
        "question":  "We asked 100 women... Name something your man would look sexy riding.",
        "answers":  [
                        {
                            "text":  "motorcycle",
                            "points":  37
                        },
                        {
                            "text":  "horse",
                            "points":  32
                        },
                        {
                            "text":  "me",
                            "points":  16
                        },
                        {
                            "text":  "bicycle",
                            "points":  8
                        },
                        {
                            "text":  "tractor",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100518,
        "question":  "Name a reason you might suspect you're turning into an elf.",
        "answers":  [
                        {
                            "text":  "pointy ears",
                            "points":  72
                        },
                        {
                            "text":  "shrinking",
                            "points":  17
                        },
                        {
                            "text":  "buying/making gifts",
                            "points":  3
                        },
                        {
                            "text":  "big feet",
                            "points":  2
                        },
                        {
                            "text":  "long nose",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100519,
        "question":  "What's the worst thing about a public steam room?",
        "answers":  [
                        {
                            "text":  "naked randos",
                            "points":  53
                        },
                        {
                            "text":  "germs/filth",
                            "points":  26
                        },
                        {
                            "text":  "stinky/b.o.",
                            "points":  9
                        },
                        {
                            "text":  "too hot",
                            "points":  6
                        },
                        {
                            "text":  "can't see!",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100520,
        "question":  "Name something a quarterback hopes the center doesn't do when hiking the ball.",
        "answers":  [
                        {
                            "text":  "fart",
                            "points":  38
                        },
                        {
                            "text":  "miss/fumble snap",
                            "points":  37
                        },
                        {
                            "text":  "fall",
                            "points":  14
                        },
                        {
                            "text":  "nail him w/ ball",
                            "points":  5
                        },
                        {
                            "text":  "be too close/step on",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100521,
        "question":  "If there were a casino just for kids, what card game would they have instead of poker?",
        "answers":  [
                        {
                            "text":  "go fish",
                            "points":  60
                        },
                        {
                            "text":  "uno",
                            "points":  18
                        },
                        {
                            "text":  "war",
                            "points":  7
                        },
                        {
                            "text":  "old maid",
                            "points":  5
                        },
                        {
                            "text":  "crazy eights",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100522,
        "question":  "We asked 100 men... It's your first day in prison. Tell me how you're going to make friends with your cellmate.",
        "answers":  [
                        {
                            "text":  "chat/share laughs",
                            "points":  48
                        },
                        {
                            "text":  "share food",
                            "points":  18
                        },
                        {
                            "text":  "offer cigarettes",
                            "points":  13
                        },
                        {
                            "text":  "keep quiet",
                            "points":  11
                        },
                        {
                            "text":  "card tricks/magic",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100523,
        "question":  "We asked 100 single women... Oh no -- your boyfriend just confessed to you that he's what?",
        "answers":  [
                        {
                            "text":  "gay/bi",
                            "points":  41
                        },
                        {
                            "text":  "cheating",
                            "points":  27
                        },
                        {
                            "text":  "married",
                            "points":  17
                        },
                        {
                            "text":  "broke",
                            "points":  5
                        },
                        {
                            "text":  "not happy",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100524,
        "question":  "We asked 100 married women... You'd be furious if your husband did what while you did a sexy dance for him?",
        "answers":  [
                        {
                            "text":  "yawned/fell asleep",
                            "points":  40
                        },
                        {
                            "text":  "laughed",
                            "points":  30
                        },
                        {
                            "text":  "phone/texted",
                            "points":  15
                        },
                        {
                            "text":  "watched tv",
                            "points":  6
                        },
                        {
                            "text":  "walked away",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100525,
        "question":  "We asked 100 single women... Name something you do on a first date that your mom would not have done.",
        "answers":  [
                        {
                            "text":  "kiss",
                            "points":  39
                        },
                        {
                            "text":  "nookie",
                            "points":  24
                        },
                        {
                            "text":  "pay",
                            "points":  19
                        },
                        {
                            "text":  "open my own doors",
                            "points":  8
                        },
                        {
                            "text":  "dress sexy/commando",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100526,
        "question":  "We asked 100 women... What might you prefer to do with your gay guy friend than with your boyfriend?",
        "answers":  [
                        {
                            "text":  "shop",
                            "points":  39
                        },
                        {
                            "text":  "dance clubs/drink",
                            "points":  24
                        },
                        {
                            "text":  "gossip/talk",
                            "points":  15
                        },
                        {
                            "text":  "watch tv/movies",
                            "points":  12
                        },
                        {
                            "text":  "do our hair",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100527,
        "question":  "Name a \"Sesame Street\" character who would be fun to hang out with at a wedding.",
        "answers":  [
                        {
                            "text":  "big bird",
                            "points":  28
                        },
                        {
                            "text":  "elmo",
                            "points":  26
                        },
                        {
                            "text":  "oscar the grouch",
                            "points":  20
                        },
                        {
                            "text":  "cookie monster",
                            "points":  16
                        },
                        {
                            "text":  "ernie",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100528,
        "question":  "Name something that would make you pucker.",
        "answers":  [
                        {
                            "text":  "lemon",
                            "points":  72
                        },
                        {
                            "text":  "sour candy/sweets",
                            "points":  13
                        },
                        {
                            "text":  "a kiss",
                            "points":  5
                        },
                        {
                            "text":  "vinegar",
                            "points":  2
                        },
                        {
                            "text":  "sour grapes",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100529,
        "question":  "Name something coworkers do in the office kitchen that drives everyone crazy.",
        "answers":  [
                        {
                            "text":  "spill/not clean up",
                            "points":  51
                        },
                        {
                            "text":  "microwave fish",
                            "points":  19
                        },
                        {
                            "text":  "steal food",
                            "points":  12
                        },
                        {
                            "text":  "yap/loiter",
                            "points":  10
                        },
                        {
                            "text":  "fart",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100530,
        "question":  "Name a famous Jennifer.",
        "answers":  [
                        {
                            "text":  "jennifer aniston",
                            "points":  43
                        },
                        {
                            "text":  "jennifer lopez",
                            "points":  25
                        },
                        {
                            "text":  "jennifer lawrence",
                            "points":  11
                        },
                        {
                            "text":  "jennifer garner",
                            "points":  10
                        },
                        {
                            "text":  "jennifer hudson",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100531,
        "question":  "Name a reason you are wearing gloves.",
        "answers":  [
                        {
                            "text":  "i'm cold",
                            "points":  66
                        },
                        {
                            "text":  "cleaning/dishes",
                            "points":  13
                        },
                        {
                            "text":  "gardening/yard work",
                            "points":  8
                        },
                        {
                            "text":  "surgery/medical",
                            "points":  3
                        },
                        {
                            "text":  "committing crime",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100532,
        "question":  "Name something that has an eye but can't see.",
        "answers":  [
                        {
                            "text":  "needle",
                            "points":  51
                        },
                        {
                            "text":  "storm",
                            "points":  25
                        },
                        {
                            "text":  "potato",
                            "points":  13
                        },
                        {
                            "text":  "camera",
                            "points":  2
                        },
                        {
                            "text":  "\"i\" words/alphabet",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100533,
        "question":  "Fill in the blank: You call someone who won't stop talking a ______ mouth.",
        "answers":  [
                        {
                            "text":  "blabbermouth",
                            "points":  39
                        },
                        {
                            "text":  "bigmouth",
                            "points":  18
                        },
                        {
                            "text":  "motormouth",
                            "points":  17
                        },
                        {
                            "text":  "loudmouth",
                            "points":  15
                        },
                        {
                            "text":  "chatter mouth",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100534,
        "question":  "Name something that goes \"flip-flop.\"",
        "answers":  [
                        {
                            "text":  "flip-flops/shoes",
                            "points":  68
                        },
                        {
                            "text":  "fish",
                            "points":  11
                        },
                        {
                            "text":  "opinions/politicians",
                            "points":  9
                        },
                        {
                            "text":  "heart",
                            "points":  2
                        },
                        {
                            "text":  "nervous stomach",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100535,
        "question":  "What do you think is America's most popular NBA basketball team?",
        "answers":  [
                        {
                            "text":  "l.a. lakers",
                            "points":  62
                        },
                        {
                            "text":  "chicago bulls",
                            "points":  10
                        },
                        {
                            "text":  "boston celtics",
                            "points":  9
                        },
                        {
                            "text":  "golden state warriors",
                            "points":  8
                        },
                        {
                            "text":  "new york knicks",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100536,
        "question":  "Name a kind of professional you might not want anyone to know you paid to see.",
        "answers":  [
                        {
                            "text":  "therapist/shrink",
                            "points":  50
                        },
                        {
                            "text":  "hooker",
                            "points":  17
                        },
                        {
                            "text":  "stripper",
                            "points":  12
                        },
                        {
                            "text":  "doc/plastic surgeon",
                            "points":  11
                        },
                        {
                            "text":  "pro wrestlers",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100537,
        "question":  "Name something the ghost of a cat might do to let their owner know they're still around.",
        "answers":  [
                        {
                            "text":  "meow/sounds",
                            "points":  44
                        },
                        {
                            "text":  "play/knock stuff over",
                            "points":  28
                        },
                        {
                            "text":  "scratch",
                            "points":  15
                        },
                        {
                            "text":  "rub on leg",
                            "points":  3
                        },
                        {
                            "text":  "leave fur/hairball",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100538,
        "question":  "We asked 100 women... You hope your friends tell you if your what is lopsided?",
        "answers":  [
                        {
                            "text":  "chest",
                            "points":  31
                        },
                        {
                            "text":  "hair/wig",
                            "points":  23
                        },
                        {
                            "text":  "shirt/clothes",
                            "points":  18
                        },
                        {
                            "text":  "makeup",
                            "points":  11
                        },
                        {
                            "text":  "eyebrow",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  100539,
        "question":  "Name a hand gesture everyone understands no matter what language you speak.",
        "answers":  [
                        {
                            "text":  "flippin' the bird",
                            "points":  51
                        },
                        {
                            "text":  "waving",
                            "points":  20
                        },
                        {
                            "text":  "thumbs up/down",
                            "points":  9
                        },
                        {
                            "text":  "peace",
                            "points":  6
                        },
                        {
                            "text":  "ok",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100540,
        "question":  "Name a word that starts with \"cow.\"",
        "answers":  [
                        {
                            "text":  "coward",
                            "points":  29
                        },
                        {
                            "text":  "cowboy",
                            "points":  27
                        },
                        {
                            "text":  "cowbell",
                            "points":  18
                        },
                        {
                            "text":  "cowabunga",
                            "points":  13
                        },
                        {
                            "text":  "cowhide",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100541,
        "question":  "What might a guy give his girlfriend that she'd say \"My ex gave me a better one\"?",
        "answers":  [
                        {
                            "text":  "ring/jewelry",
                            "points":  70
                        },
                        {
                            "text":  "the big \"o\"",
                            "points":  6
                        },
                        {
                            "text":  "kiss",
                            "points":  6
                        },
                        {
                            "text":  "vacation",
                            "points":  4
                        },
                        {
                            "text":  "car",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100542,
        "question":  "Name something of which you wish you could get a new one every three years.",
        "answers":  [
                        {
                            "text":  "car",
                            "points":  68
                        },
                        {
                            "text":  "phone",
                            "points":  11
                        },
                        {
                            "text":  "body",
                            "points":  4
                        },
                        {
                            "text":  "spouse",
                            "points":  3
                        },
                        {
                            "text":  "computer",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100543,
        "question":  "Name a costume that if you wore it, might make people come and ask you for help.",
        "answers":  [
                        {
                            "text":  "police officer",
                            "points":  50
                        },
                        {
                            "text":  "nurse",
                            "points":  14
                        },
                        {
                            "text":  "firefighter",
                            "points":  12
                        },
                        {
                            "text":  "doctor",
                            "points":  9
                        },
                        {
                            "text":  "superman",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100544,
        "question":  "Name a Britney Spears song that describes you in the bedroom.",
        "answers":  [
                        {
                            "text":  "oops! i did it again",
                            "points":  49
                        },
                        {
                            "text":  "baby one more time",
                            "points":  19
                        },
                        {
                            "text":  "toxic",
                            "points":  11
                        },
                        {
                            "text":  "circus",
                            "points":  7
                        },
                        {
                            "text":  "i'm a slave 4 u",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100545,
        "question":  "Name something that swings.",
        "answers":  [
                        {
                            "text":  "swing/rope",
                            "points":  49
                        },
                        {
                            "text":  "monkey/ape",
                            "points":  13
                        },
                        {
                            "text":  "fun couple/people",
                            "points":  11
                        },
                        {
                            "text":  "door",
                            "points":  9
                        },
                        {
                            "text":  "pendulum",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  100546,
        "question":  "Name something specific you yell at the screen when watching a horror movie.",
        "answers":  [
                        {
                            "text":  "don't go there!",
                            "points":  36
                        },
                        {
                            "text":  "run!/get out!",
                            "points":  25
                        },
                        {
                            "text":  "nooooooo!",
                            "points":  16
                        },
                        {
                            "text":  "look out!/behind you!",
                            "points":  8
                        },
                        {
                            "text":  "you idiot!",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100547,
        "question":  "We asked 100 men... If you lost your pocket square, what could you stuff in your suit pocket as a substitute?",
        "answers":  [
                        {
                            "text":  "napkin/paper towel",
                            "points":  34
                        },
                        {
                            "text":  "tissue/t.p.",
                            "points":  23
                        },
                        {
                            "text":  "hanky",
                            "points":  21
                        },
                        {
                            "text":  "sock",
                            "points":  8
                        },
                        {
                            "text":  "small ruler",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100548,
        "question":  "You're at a serious function. You are overcome with the giggles. What do you do?",
        "answers":  [
                        {
                            "text":  "step out/restroom",
                            "points":  62
                        },
                        {
                            "text":  "cover my mouth",
                            "points":  10
                        },
                        {
                            "text":  "laugh it out",
                            "points":  9
                        },
                        {
                            "text":  "\"cough\"/blow nose",
                            "points":  4
                        },
                        {
                            "text":  "sad/serious thoughts",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100549,
        "question":  "You'd panic if a bee flew into your what?",
        "answers":  [
                        {
                            "text":  "mouth",
                            "points":  47
                        },
                        {
                            "text":  "ear",
                            "points":  15
                        },
                        {
                            "text":  "nose",
                            "points":  10
                        },
                        {
                            "text":  "pants/clothes",
                            "points":  7
                        },
                        {
                            "text":  "hair",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  100550,
        "question":  "Name a type of bank a really dumb guy might try to rob.",
        "answers":  [
                        {
                            "text":  "sperm bank",
                            "points":  33
                        },
                        {
                            "text":  "blood bank",
                            "points":  26
                        },
                        {
                            "text":  "kid's piggy bank",
                            "points":  12
                        },
                        {
                            "text":  "food bank",
                            "points":  10
                        },
                        {
                            "text":  "online bank",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100551,
        "question":  "If two circus clowns got married, what might the wedding guests throw instead of rice?",
        "answers":  [
                        {
                            "text":  "balloons",
                            "points":  33
                        },
                        {
                            "text":  "confetti/glitter",
                            "points":  24
                        },
                        {
                            "text":  "red noses",
                            "points":  14
                        },
                        {
                            "text":  "circus popcorn",
                            "points":  8
                        },
                        {
                            "text":  "pies",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  100552,
        "question":  "Name a gift you'd give to someone you know nothing about.",
        "answers":  [
                        {
                            "text":  "gift card/cash",
                            "points":  38
                        },
                        {
                            "text":  "candle",
                            "points":  17
                        },
                        {
                            "text":  "candy/food",
                            "points":  14
                        },
                        {
                            "text":  "flowers/plant",
                            "points":  9
                        },
                        {
                            "text":  "booze/wine",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  100553,
        "question":  "Susan said, \"My boyfriend's proposal wasn't very romantic. He had the ring in one hand and ______ in the other.\"",
        "answers":  [
                        {
                            "text":  "a beer/booze",
                            "points":  30
                        },
                        {
                            "text":  "his phone",
                            "points":  22
                        },
                        {
                            "text":  "food/a burger",
                            "points":  18
                        },
                        {
                            "text":  "the remote",
                            "points":  8
                        },
                        {
                            "text":  "a prenup",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  100554,
        "question":  "Name a popular female country singer.",
        "answers":  [
                        {
                            "text":  "dolly parton",
                            "points":  32
                        },
                        {
                            "text":  "reba mcentire",
                            "points":  18
                        },
                        {
                            "text":  "carrie underwood",
                            "points":  15
                        },
                        {
                            "text":  "shania twain",
                            "points":  14
                        },
                        {
                            "text":  "taylor swift",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100555,
        "question":  "Name something a magician might pretend to cut in half as part of his divorce settlement.",
        "answers":  [
                        {
                            "text":  "$$$/alimony",
                            "points":  31
                        },
                        {
                            "text":  "his wife",
                            "points":  24
                        },
                        {
                            "text":  "the house",
                            "points":  17
                        },
                        {
                            "text":  "the car",
                            "points":  7
                        },
                        {
                            "text":  "the dog",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100556,
        "question":  "Fill in the blank: A woman might call her man \"honey ______.\"",
        "answers":  [
                        {
                            "text":  "honey buns",
                            "points":  29
                        },
                        {
                            "text":  "honey bear",
                            "points":  17
                        },
                        {
                            "text":  "honeybunch",
                            "points":  17
                        },
                        {
                            "text":  "honey bunny",
                            "points":  13
                        },
                        {
                            "text":  "honey-do/dew",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  100557,
        "question":  "Name a reason you might give someone a side hug instead of a real hug.",
        "answers":  [
                        {
                            "text":  "dislike them/creepy",
                            "points":  31
                        },
                        {
                            "text":  "they stink",
                            "points":  19
                        },
                        {
                            "text":  "sick",
                            "points":  14
                        },
                        {
                            "text":  "not close/just met",
                            "points":  14
                        },
                        {
                            "text":  "big boobs/belly",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100558,
        "question":  "Name an occupation where you'd be surprised someone had a lot of tattoos and piercings.",
        "answers":  [
                        {
                            "text":  "clergy/nun",
                            "points":  29
                        },
                        {
                            "text":  "doc/dentist",
                            "points":  27
                        },
                        {
                            "text":  "teacher/principal",
                            "points":  15
                        },
                        {
                            "text":  "lawyer",
                            "points":  6
                        },
                        {
                            "text":  "police officer",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100559,
        "question":  "Name an activity you've always been bad at.",
        "answers":  [
                        {
                            "text":  "sports/exercise",
                            "points":  56
                        },
                        {
                            "text":  "dancing",
                            "points":  7
                        },
                        {
                            "text":  "painting/art",
                            "points":  7
                        },
                        {
                            "text":  "singing",
                            "points":  6
                        },
                        {
                            "text":  "sewing/knitting",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100560,
        "question":  "Name an animal a man with a huge nose might be compared to.",
        "answers":  [
                        {
                            "text":  "elephant",
                            "points":  41
                        },
                        {
                            "text":  "bird/toucan",
                            "points":  14
                        },
                        {
                            "text":  "anteater/aardvark",
                            "points":  11
                        },
                        {
                            "text":  "monkey/ape",
                            "points":  9
                        },
                        {
                            "text":  "pig",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  100561,
        "question":  "Tell me something women probably find attractive about Prince Harry.",
        "answers":  [
                        {
                            "text":  "face/smile",
                            "points":  23
                        },
                        {
                            "text":  "money",
                            "points":  22
                        },
                        {
                            "text":  "red hair",
                            "points":  17
                        },
                        {
                            "text":  "royalty/power",
                            "points":  10
                        },
                        {
                            "text":  "accent",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  100562,
        "question":  "Fill in the blank: Grandma said, \"Grandpa is so cheap, we've still got the same ______ we had when we got married.\"",
        "answers":  [
                        {
                            "text":  "bed/furniture",
                            "points":  37
                        },
                        {
                            "text":  "car/truck",
                            "points":  28
                        },
                        {
                            "text":  "tv",
                            "points":  5
                        },
                        {
                            "text":  "clothes/undies",
                            "points":  5
                        },
                        {
                            "text":  "house",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100563,
        "question":  "Flll in the blank: Daddy ______.",
        "answers":  [
                        {
                            "text":  "daddy warbucks",
                            "points":  28
                        },
                        {
                            "text":  "daddy longlegs",
                            "points":  24
                        },
                        {
                            "text":  "daddy day care",
                            "points":  13
                        },
                        {
                            "text":  "daddy issues",
                            "points":  7
                        },
                        {
                            "text":  "daddy-o",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  100564,
        "question":  "Name a car brand that a car-loving dad might name his kid.",
        "answers":  [
                        {
                            "text":  "ford",
                            "points":  28
                        },
                        {
                            "text":  "mercedes",
                            "points":  20
                        },
                        {
                            "text":  "porsche",
                            "points":  11
                        },
                        {
                            "text":  "ferrari",
                            "points":  10
                        },
                        {
                            "text":  "chevy",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  100565,
        "question":  "Fill in the blank: ______ on it.",
        "answers":  [
                        {
                            "text":  "sit on it",
                            "points":  22
                        },
                        {
                            "text":  "bet on it",
                            "points":  18
                        },
                        {
                            "text":  "think on it",
                            "points":  16
                        },
                        {
                            "text":  "count on it",
                            "points":  13
                        },
                        {
                            "text":  "sleep on it",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  100566,
        "question":  "Name something enjoyable that once it's over, you might want to do it again.",
        "answers":  [
                        {
                            "text":  "nookie",
                            "points":  40
                        },
                        {
                            "text":  "amusement ride",
                            "points":  14
                        },
                        {
                            "text":  "eat",
                            "points":  12
                        },
                        {
                            "text":  "vacay/cruise",
                            "points":  8
                        },
                        {
                            "text":  "skydive",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100567,
        "question":  "Name a fruit you would not want on your head if someone were going to shoot it off with an arrow.",
        "answers":  [
                        {
                            "text":  "grape",
                            "points":  36
                        },
                        {
                            "text":  "apple",
                            "points":  14
                        },
                        {
                            "text":  "cherry",
                            "points":  10
                        },
                        {
                            "text":  "blueberry",
                            "points":  9
                        },
                        {
                            "text":  "heavy watermelon",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  100568,
        "question":  "Fill in the blank: Pink ______.",
        "answers":  [
                        {
                            "text":  "pink panther",
                            "points":  38
                        },
                        {
                            "text":  "pink floyd",
                            "points":  23
                        },
                        {
                            "text":  "pink elephant",
                            "points":  5
                        },
                        {
                            "text":  "pink cadillac",
                            "points":  5
                        },
                        {
                            "text":  "pink lemonade",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100569,
        "question":  "Name a type of character you see in every teen movie.",
        "answers":  [
                        {
                            "text":  "nerd",
                            "points":  24
                        },
                        {
                            "text":  "bad guy",
                            "points":  17
                        },
                        {
                            "text":  "mean/spoiled girl",
                            "points":  12
                        },
                        {
                            "text":  "jock",
                            "points":  11
                        },
                        {
                            "text":  "funny best friend",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  100570,
        "question":  "Name something that people get removed from their bodies.",
        "answers":  [
                        {
                            "text":  "mole",
                            "points":  20
                        },
                        {
                            "text":  "appendix",
                            "points":  15
                        },
                        {
                            "text":  "tattoo",
                            "points":  15
                        },
                        {
                            "text":  "wart",
                            "points":  12
                        },
                        {
                            "text":  "fat",
                            "points":  10
                        }
                    ]
    },
    {
        "id":  100571,
        "question":  "Tell me the U.S. state that has the most manly men.",
        "answers":  [
                        {
                            "text":  "alaska",
                            "points":  29
                        },
                        {
                            "text":  "texas",
                            "points":  23
                        },
                        {
                            "text":  "montana",
                            "points":  7
                        },
                        {
                            "text":  "california",
                            "points":  6
                        },
                        {
                            "text":  "florida",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  100572,
        "question":  "Name an S word that describes how you think of yourself.",
        "answers":  [
                        {
                            "text":  "smart",
                            "points":  42
                        },
                        {
                            "text":  "sexy",
                            "points":  12
                        },
                        {
                            "text":  "silly",
                            "points":  6
                        },
                        {
                            "text":  "savvy",
                            "points":  5
                        },
                        {
                            "text":  "sweet",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100573,
        "question":  "Name an animal that people keep as pets but probably shouldn't.",
        "answers":  [
                        {
                            "text":  "snake",
                            "points":  34
                        },
                        {
                            "text":  "monkey/ape",
                            "points":  16
                        },
                        {
                            "text":  "tiger",
                            "points":  8
                        },
                        {
                            "text":  "gator/croc",
                            "points":  7
                        },
                        {
                            "text":  "ferret",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100574,
        "question":  "Name something people say is never around when you need one.",
        "answers":  [
                        {
                            "text":  "cop",
                            "points":  47
                        },
                        {
                            "text":  "pen",
                            "points":  9
                        },
                        {
                            "text":  "doctor",
                            "points":  4
                        },
                        {
                            "text":  "salesperson",
                            "points":  4
                        },
                        {
                            "text":  "hammer/tool",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100575,
        "question":  "Name a bug that a wrestler might use as their stage name.",
        "answers":  [
                        {
                            "text":  "spider/black widow",
                            "points":  23
                        },
                        {
                            "text":  "dung beetle",
                            "points":  12
                        },
                        {
                            "text":  "wasp/hornet",
                            "points":  11
                        },
                        {
                            "text":  "praying mantis",
                            "points":  11
                        },
                        {
                            "text":  "cockroach",
                            "points":  10
                        }
                    ]
    },
    {
        "id":  100576,
        "question":  "You hate people rushing you when you're doing what?",
        "answers":  [
                        {
                            "text":  "eating",
                            "points":  21
                        },
                        {
                            "text":  "shopping",
                            "points":  17
                        },
                        {
                            "text":  "an epic dump",
                            "points":  12
                        },
                        {
                            "text":  "dressing",
                            "points":  10
                        },
                        {
                            "text":  "working",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  100577,
        "question":  "Fill in the blank: ______ truck.",
        "answers":  [
                        {
                            "text":  "pickup",
                            "points":  20
                        },
                        {
                            "text":  "fire",
                            "points":  16
                        },
                        {
                            "text":  "dump",
                            "points":  15
                        },
                        {
                            "text":  "mack",
                            "points":  9
                        },
                        {
                            "text":  "monster",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  100578,
        "question":  "Name a phrase that starts with \"down the...\"",
        "answers":  [
                        {
                            "text":  "down the river",
                            "points":  20
                        },
                        {
                            "text":  "down the hatch",
                            "points":  16
                        },
                        {
                            "text":  "down the street",
                            "points":  12
                        },
                        {
                            "text":  "down the road",
                            "points":  10
                        },
                        {
                            "text":  "down the tubes",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  100579,
        "question":  "Name a movie that you think everyone in the U.S. has seen at least once.",
        "answers":  [
                        {
                            "text":  "titanic",
                            "points":  24
                        },
                        {
                            "text":  "the wizard of oz",
                            "points":  10
                        },
                        {
                            "text":  "star wars",
                            "points":  10
                        },
                        {
                            "text":  "e.t.",
                            "points":  9
                        },
                        {
                            "text":  "forrest gump",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100580,
        "question":  "Name something that's better when it's thick.",
        "answers":  [
                        {
                            "text":  "milkshake",
                            "points":  21
                        },
                        {
                            "text":  "steak",
                            "points":  14
                        },
                        {
                            "text":  "soup/chowder",
                            "points":  8
                        },
                        {
                            "text":  "women",
                            "points":  6
                        },
                        {
                            "text":  "pudding",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100581,
        "question":  "Name an artist whose music is responsible for a lot of babies being made.",
        "answers":  [
                        {
                            "text":  "barry white",
                            "points":  19
                        },
                        {
                            "text":  "marvin gaye",
                            "points":  16
                        },
                        {
                            "text":  "luther vandross",
                            "points":  10
                        },
                        {
                            "text":  "al green",
                            "points":  5
                        },
                        {
                            "text":  "frank sinatra",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100582,
        "question":  "Name something you wouldn't do, even for a million bucks.",
        "answers":  [
                        {
                            "text":  "murder",
                            "points":  26
                        },
                        {
                            "text":  "cheat on mate",
                            "points":  7
                        },
                        {
                            "text":  "skydive",
                            "points":  7
                        },
                        {
                            "text":  "eat insects",
                            "points":  7
                        },
                        {
                            "text":  "streak",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  100583,
        "question":  "Name a city that's close to being heaven on Earth for someone who likes to travel.",
        "answers":  [
                        {
                            "text":  "paris",
                            "points":  22
                        },
                        {
                            "text":  "honolulu",
                            "points":  7
                        },
                        {
                            "text":  "las vegas",
                            "points":  7
                        },
                        {
                            "text":  "san francisco",
                            "points":  5
                        },
                        {
                            "text":  "new york",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100584,
        "question":  "Name a musical artist who gets you in the mood for love.",
        "answers":  [
                        {
                            "text":  "barry white",
                            "points":  20
                        },
                        {
                            "text":  "marvin gaye",
                            "points":  7
                        },
                        {
                            "text":  "frank sinatra",
                            "points":  6
                        },
                        {
                            "text":  "luther vandross",
                            "points":  5
                        },
                        {
                            "text":  "barry manilow",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100585,
        "question":  "Name an NBA team in California.",
        "answers":  [
                        {
                            "text":  "l.a. lakers",
                            "points":  77
                        },
                        {
                            "text":  "golden state warriors",
                            "points":  15
                        },
                        {
                            "text":  "l.a. clippers",
                            "points":  5
                        },
                        {
                            "text":  "sacramento kings",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100586,
        "question":  "Gross -- I just found what in my ear?",
        "answers":  [
                        {
                            "text":  "bug/roach",
                            "points":  59
                        },
                        {
                            "text":  "wax",
                            "points":  37
                        },
                        {
                            "text":  "a pimple",
                            "points":  2
                        },
                        {
                            "text":  "hair",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100587,
        "question":  "Name something you might be referring to when you use the word \"joker.\"",
        "answers":  [
                        {
                            "text":  "playing card",
                            "points":  53
                        },
                        {
                            "text":  "person/jokester",
                            "points":  31
                        },
                        {
                            "text":  "batman villain/movie",
                            "points":  13
                        },
                        {
                            "text":  "steve miller song",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100588,
        "question":  "Which key on your keychain sees the most action?",
        "answers":  [
                        {
                            "text":  "house key",
                            "points":  51
                        },
                        {
                            "text":  "car key",
                            "points":  45
                        },
                        {
                            "text":  "bae's house key",
                            "points":  2
                        },
                        {
                            "text":  "office key",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100589,
        "question":  "Tell me a nut that starts with P.",
        "answers":  [
                        {
                            "text":  "peanut",
                            "points":  51
                        },
                        {
                            "text":  "pistachio",
                            "points":  28
                        },
                        {
                            "text":  "pecan",
                            "points":  19
                        },
                        {
                            "text":  "pine nut",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100590,
        "question":  "If Santa drank too much spiked eggnog, who might be his designated sleigh driver?",
        "answers":  [
                        {
                            "text":  "mrs. claus",
                            "points":  35
                        },
                        {
                            "text":  "rudolph/reindeer",
                            "points":  34
                        },
                        {
                            "text":  "tallest elf",
                            "points":  29
                        },
                        {
                            "text":  "easter bunny",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100591,
        "question":  "Name a reason a lifeguard might tell everyone, \"Get out of the ocean.\"",
        "answers":  [
                        {
                            "text":  "shark!",
                            "points":  91
                        },
                        {
                            "text":  "riptide/current",
                            "points":  3
                        },
                        {
                            "text":  "lightning",
                            "points":  3
                        },
                        {
                            "text":  "tidal wave",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100592,
        "question":  "Besides the headlines, name something you turn on the local news to see.",
        "answers":  [
                        {
                            "text":  "weather",
                            "points":  90
                        },
                        {
                            "text":  "sports",
                            "points":  5
                        },
                        {
                            "text":  "human interest story",
                            "points":  2
                        },
                        {
                            "text":  "hot anchors!",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100593,
        "question":  "We asked 100 women... Who might pull on your hair?",
        "answers":  [
                        {
                            "text":  "a child/baby",
                            "points":  73
                        },
                        {
                            "text":  "partner",
                            "points":  21
                        },
                        {
                            "text":  "hairdresser",
                            "points":  3
                        },
                        {
                            "text":  "cat",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100594,
        "question":  "We asked 100 women... Name something ugly you put on at night so you look beautiful in the morning.",
        "answers":  [
                        {
                            "text":  "face mask/cream",
                            "points":  73
                        },
                        {
                            "text":  "curlers",
                            "points":  19
                        },
                        {
                            "text":  "hair bonnet/scarf",
                            "points":  4
                        },
                        {
                            "text":  "retainer",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100595,
        "question":  "We asked 100 single women... If you love bad boys, you'll find plenty of them where?",
        "answers":  [
                        {
                            "text":  "bar/club",
                            "points":  71
                        },
                        {
                            "text":  "jail",
                            "points":  23
                        },
                        {
                            "text":  "concert",
                            "points":  3
                        },
                        {
                            "text":  "east coast",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100596,
        "question":  "Name a place where it's okay to not wear shoes.",
        "answers":  [
                        {
                            "text":  "the beach",
                            "points":  68
                        },
                        {
                            "text":  "home/shower",
                            "points":  20
                        },
                        {
                            "text":  "japanese restaurant",
                            "points":  6
                        },
                        {
                            "text":  "the pool",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100597,
        "question":  "Name something you need to do the limbo.",
        "answers":  [
                        {
                            "text":  "stick/rope",
                            "points":  65
                        },
                        {
                            "text":  "flexibility/strength",
                            "points":  25
                        },
                        {
                            "text":  "music",
                            "points":  6
                        },
                        {
                            "text":  "an occasion to dance",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100598,
        "question":  "Name a sport where you try to get something into a net.",
        "answers":  [
                        {
                            "text":  "basketball",
                            "points":  52
                        },
                        {
                            "text":  "hockey",
                            "points":  23
                        },
                        {
                            "text":  "soccer",
                            "points":  22
                        },
                        {
                            "text":  "fishing",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100599,
        "question":  "Name something that you hang up.",
        "answers":  [
                        {
                            "text":  "clothes/coat",
                            "points":  47
                        },
                        {
                            "text":  "phone",
                            "points":  29
                        },
                        {
                            "text":  "picture",
                            "points":  14
                        },
                        {
                            "text":  "towel",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  100600,
        "question":  "Name something that might screw up outdoor wedding photos.",
        "answers":  [
                        {
                            "text":  "bad weather",
                            "points":  87
                        },
                        {
                            "text":  "birds/critters",
                            "points":  6
                        },
                        {
                            "text":  "bright sun",
                            "points":  3
                        },
                        {
                            "text":  "photobomber",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100601,
        "question":  "Let's face it: You'd never go to a nude beach with anyone other than who?",
        "answers":  [
                        {
                            "text":  "spouse/mate",
                            "points":  79
                        },
                        {
                            "text":  "bff",
                            "points":  11
                        },
                        {
                            "text":  "myself",
                            "points":  6
                        },
                        {
                            "text":  "parents",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100602,
        "question":  "Name a pasta that's long and thin.",
        "answers":  [
                        {
                            "text":  "spaghetti",
                            "points":  72
                        },
                        {
                            "text":  "angel hair",
                            "points":  17
                        },
                        {
                            "text":  "linguine",
                            "points":  7
                        },
                        {
                            "text":  "fettuccine",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100603,
        "question":  "We asked 100 women... Name a Disney Princess you'd ask to borrow a dress from for the ball.",
        "answers":  [
                        {
                            "text":  "cinderella",
                            "points":  72
                        },
                        {
                            "text":  "belle",
                            "points":  17
                        },
                        {
                            "text":  "elsa",
                            "points":  6
                        },
                        {
                            "text":  "snow white",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100604,
        "question":  "Name something siblings fight over in the morning.",
        "answers":  [
                        {
                            "text":  "bathroom",
                            "points":  69
                        },
                        {
                            "text":  "breakfast/last donut",
                            "points":  16
                        },
                        {
                            "text":  "tv/remote",
                            "points":  10
                        },
                        {
                            "text":  "front seat of car",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100605,
        "question":  "Fill in the blank: You'll probably live longer if you give up ______.",
        "answers":  [
                        {
                            "text":  "smoking",
                            "points":  62
                        },
                        {
                            "text":  "junk food/sugar",
                            "points":  19
                        },
                        {
                            "text":  "alcohol",
                            "points":  15
                        },
                        {
                            "text":  "sex with strangers",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100606,
        "question":  "Name something kids always have a lame excuse for not doing.",
        "answers":  [
                        {
                            "text":  "chores/cleaning",
                            "points":  58
                        },
                        {
                            "text":  "homework",
                            "points":  36
                        },
                        {
                            "text":  "bathing",
                            "points":  2
                        },
                        {
                            "text":  "brushing teeth",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100607,
        "question":  "Name an occasion when people buy a gift for their pet.",
        "answers":  [
                        {
                            "text":  "christmas",
                            "points":  57
                        },
                        {
                            "text":  "birthday",
                            "points":  34
                        },
                        {
                            "text":  "gotcha day",
                            "points":  5
                        },
                        {
                            "text":  "halloween",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100608,
        "question":  "Name the first phrase a baseball umpire's child might learn to say.",
        "answers":  [
                        {
                            "text":  "you're out!",
                            "points":  54
                        },
                        {
                            "text":  "strike!",
                            "points":  38
                        },
                        {
                            "text":  "safe!",
                            "points":  4
                        },
                        {
                            "text":  "play ball!",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100609,
        "question":  "Name something a parent hopes a store doesn't run out of right before Easter.",
        "answers":  [
                        {
                            "text":  "candy/chocolate",
                            "points":  49
                        },
                        {
                            "text":  "eggs",
                            "points":  40
                        },
                        {
                            "text":  "ham",
                            "points":  5
                        },
                        {
                            "text":  "baskets",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100610,
        "question":  "Name the loudest musical instrument in a marching band.",
        "answers":  [
                        {
                            "text":  "drum",
                            "points":  47
                        },
                        {
                            "text":  "tuba",
                            "points":  26
                        },
                        {
                            "text":  "trumpet",
                            "points":  21
                        },
                        {
                            "text":  "cymbals",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100611,
        "question":  "Name a fruit you pick from a tree.",
        "answers":  [
                        {
                            "text":  "apple",
                            "points":  87
                        },
                        {
                            "text":  "orange",
                            "points":  5
                        },
                        {
                            "text":  "peach",
                            "points":  3
                        },
                        {
                            "text":  "pear",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100612,
        "question":  "Name something specific you use to help improve your eyesight.",
        "answers":  [
                        {
                            "text":  "glasses",
                            "points":  84
                        },
                        {
                            "text":  "contacts",
                            "points":  7
                        },
                        {
                            "text":  "carrots",
                            "points":  4
                        },
                        {
                            "text":  "eyedrops",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100613,
        "question":  "Tell me a bird that lays really big eggs.",
        "answers":  [
                        {
                            "text":  "ostrich",
                            "points":  82
                        },
                        {
                            "text":  "emu",
                            "points":  9
                        },
                        {
                            "text":  "eagle",
                            "points":  3
                        },
                        {
                            "text":  "turkey",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100614,
        "question":  "Name a U.S. city with a lot of skyscrapers.",
        "answers":  [
                        {
                            "text":  "new york city",
                            "points":  79
                        },
                        {
                            "text":  "chicago",
                            "points":  13
                        },
                        {
                            "text":  "seattle",
                            "points":  3
                        },
                        {
                            "text":  "houston",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100615,
        "question":  "Who is the greatest boxer of all time?",
        "answers":  [
                        {
                            "text":  "muhammad ali",
                            "points":  78
                        },
                        {
                            "text":  "mike tyson",
                            "points":  15
                        },
                        {
                            "text":  "joe louis",
                            "points":  2
                        },
                        {
                            "text":  "george foreman",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100616,
        "question":  "Name a food people eat on a stick.",
        "answers":  [
                        {
                            "text":  "corn dog",
                            "points":  77
                        },
                        {
                            "text":  "kebab",
                            "points":  10
                        },
                        {
                            "text":  "ice cream/popsicle",
                            "points":  8
                        },
                        {
                            "text":  "roasted marshmallows",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100617,
        "question":  "Name something people keep in their garage.",
        "answers":  [
                        {
                            "text":  "car",
                            "points":  76
                        },
                        {
                            "text":  "tools/lawn mower",
                            "points":  17
                        },
                        {
                            "text":  "exercise equipment",
                            "points":  2
                        },
                        {
                            "text":  "bodies",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100618,
        "question":  "Name a sign that winter is coming.",
        "answers":  [
                        {
                            "text":  "cold/snow",
                            "points":  74
                        },
                        {
                            "text":  "leaves change/fall",
                            "points":  13
                        },
                        {
                            "text":  "shorter days",
                            "points":  7
                        },
                        {
                            "text":  "birds fly south",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100619,
        "question":  "Name something an older sibling does with their toy so they don't have to share.",
        "answers":  [
                        {
                            "text":  "hides it",
                            "points":  74
                        },
                        {
                            "text":  "breaks it",
                            "points":  8
                        },
                        {
                            "text":  "writes name on it",
                            "points":  8
                        },
                        {
                            "text":  "licks it",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  100620,
        "question":  "We asked 100 married women... Name something your mother-in-law thinks she does better than you.",
        "answers":  [
                        {
                            "text":  "cooks/bakes",
                            "points":  73
                        },
                        {
                            "text":  "cleans",
                            "points":  12
                        },
                        {
                            "text":  "socializes",
                            "points":  7
                        },
                        {
                            "text":  "stays in shape",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100621,
        "question":  "What do radio DJs give away?",
        "answers":  [
                        {
                            "text":  "concert tickets",
                            "points":  72
                        },
                        {
                            "text":  "$$$/gift cards",
                            "points":  16
                        },
                        {
                            "text":  "mp3's/albums",
                            "points":  7
                        },
                        {
                            "text":  "tees/clothes",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100622,
        "question":  "Give me a word that rhymes with \"twerk.\"",
        "answers":  [
                        {
                            "text":  "jerk",
                            "points":  68
                        },
                        {
                            "text":  "work",
                            "points":  24
                        },
                        {
                            "text":  "lurk",
                            "points":  3
                        },
                        {
                            "text":  "quirk",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100623,
        "question":  "Name something that the crust on it might be the best part.",
        "answers":  [
                        {
                            "text":  "pizza",
                            "points":  54
                        },
                        {
                            "text":  "pie/pot pie",
                            "points":  34
                        },
                        {
                            "text":  "bread",
                            "points":  6
                        },
                        {
                            "text":  "fried chicken",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100624,
        "question":  "Name something that goes on top of a cake.",
        "answers":  [
                        {
                            "text":  "icing/whipped cream",
                            "points":  53
                        },
                        {
                            "text":  "candles",
                            "points":  33
                        },
                        {
                            "text":  "topper/bride & groom",
                            "points":  8
                        },
                        {
                            "text":  "a cherry",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100625,
        "question":  "Name something a person who's obsessed with Christmas might do all year long.",
        "answers":  [
                        {
                            "text":  "music/caroling",
                            "points":  48
                        },
                        {
                            "text":  "decorate/tree",
                            "points":  40
                        },
                        {
                            "text":  "shop 'til they drop",
                            "points":  7
                        },
                        {
                            "text":  "an x-mas countdown!",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100626,
        "question":  "Name a city that's famous for its pizza.",
        "answers":  [
                        {
                            "text":  "chicago",
                            "points":  47
                        },
                        {
                            "text":  "new york city",
                            "points":  45
                        },
                        {
                            "text":  "naples",
                            "points":  3
                        },
                        {
                            "text":  "rome",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100627,
        "question":  "Name something that you should never literally try to grab by the horns.",
        "answers":  [
                        {
                            "text":  "bull/cattle",
                            "points":  88
                        },
                        {
                            "text":  "goat",
                            "points":  4
                        },
                        {
                            "text":  "moose",
                            "points":  2
                        },
                        {
                            "text":  "ram/sheep",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100628,
        "question":  "Name a tattoo that's popular with sailors.",
        "answers":  [
                        {
                            "text":  "anchor",
                            "points":  81
                        },
                        {
                            "text":  "\"mom\"",
                            "points":  7
                        },
                        {
                            "text":  "boat/ship",
                            "points":  5
                        },
                        {
                            "text":  "mermaid",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100629,
        "question":  "Name an occasion when people take a lot of photographs.",
        "answers":  [
                        {
                            "text":  "wedding",
                            "points":  79
                        },
                        {
                            "text":  "vacation",
                            "points":  9
                        },
                        {
                            "text":  "birthday",
                            "points":  6
                        },
                        {
                            "text":  "family reunion",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100630,
        "question":  "Name something a bridesmaid knocks over in a desperate attempt to catch the bouquet.",
        "answers":  [
                        {
                            "text":  "people/kids",
                            "points":  73
                        },
                        {
                            "text":  "chair/table",
                            "points":  10
                        },
                        {
                            "text":  "drinks/punch bowl",
                            "points":  7
                        },
                        {
                            "text":  "wedding cake",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  100631,
        "question":  "We asked 100 single women... You'd be annoyed if a guy asked you to do what on a date?",
        "answers":  [
                        {
                            "text":  "pay",
                            "points":  73
                        },
                        {
                            "text":  "drive",
                            "points":  9
                        },
                        {
                            "text":  "have sex",
                            "points":  9
                        },
                        {
                            "text":  "weigh myself",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100632,
        "question":  "Fill in the blank: I wish I could use a straw to suck the fat right out of my what?",
        "answers":  [
                        {
                            "text":  "gut/love handles",
                            "points":  72
                        },
                        {
                            "text":  "badonk",
                            "points":  15
                        },
                        {
                            "text":  "legs/thunder thighs",
                            "points":  7
                        },
                        {
                            "text":  "chin/neck",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100633,
        "question":  "We asked 100 men... Name a bad moment to confuse your girlfriend and your ex's names.",
        "answers":  [
                        {
                            "text":  "in bed",
                            "points":  68
                        },
                        {
                            "text":  "date night",
                            "points":  13
                        },
                        {
                            "text":  "wedding vows",
                            "points":  13
                        },
                        {
                            "text":  "during fight",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100634,
        "question":  "Name the sport with the most overpaid players.",
        "answers":  [
                        {
                            "text":  "football",
                            "points":  66
                        },
                        {
                            "text":  "basketball",
                            "points":  16
                        },
                        {
                            "text":  "baseball",
                            "points":  12
                        },
                        {
                            "text":  "soccer",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100635,
        "question":  "Name a place you might hang out just for the free Wi-Fi.",
        "answers":  [
                        {
                            "text":  "coffee shop/eatery",
                            "points":  65
                        },
                        {
                            "text":  "library",
                            "points":  26
                        },
                        {
                            "text":  "store/mall",
                            "points":  3
                        },
                        {
                            "text":  "hotel lobby",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100636,
        "question":  "Name something you hope isn't trying to get inside your house.",
        "answers":  [
                        {
                            "text":  "critter/bug",
                            "points":  63
                        },
                        {
                            "text":  "robber/killer",
                            "points":  28
                        },
                        {
                            "text":  "the cops",
                            "points":  3
                        },
                        {
                            "text":  "monster/zombie",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100637,
        "question":  "Tell me the last thing you stuck up your nose.",
        "answers":  [
                        {
                            "text":  "my finger",
                            "points":  56
                        },
                        {
                            "text":  "tissue",
                            "points":  30
                        },
                        {
                            "text":  "covid test/swab",
                            "points":  6
                        },
                        {
                            "text":  "nasal spray",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100638,
        "question":  "Name something in a Monopoly game that you wish you had for real.",
        "answers":  [
                        {
                            "text":  "property/house",
                            "points":  55
                        },
                        {
                            "text":  "piles of cash",
                            "points":  33
                        },
                        {
                            "text":  "outta jail free card",
                            "points":  6
                        },
                        {
                            "text":  "race car",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100639,
        "question":  "When choosing a toilet paper, name something that's most important to you.",
        "answers":  [
                        {
                            "text":  "softness",
                            "points":  50
                        },
                        {
                            "text":  "strength/ply",
                            "points":  38
                        },
                        {
                            "text":  "cost",
                            "points":  4
                        },
                        {
                            "text":  "septic safe/no clog",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100640,
        "question":  "Name something that you might shake at someone.",
        "answers":  [
                        {
                            "text":  "finger/fist",
                            "points":  85
                        },
                        {
                            "text":  "booty/tailfeather",
                            "points":  4
                        },
                        {
                            "text":  "head/hair",
                            "points":  3
                        },
                        {
                            "text":  "stick/cane",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100641,
        "question":  "Name an animal you can find in a swamp.",
        "answers":  [
                        {
                            "text":  "gator/croc",
                            "points":  84
                        },
                        {
                            "text":  "toad/frog",
                            "points":  7
                        },
                        {
                            "text":  "beaver",
                            "points":  2
                        },
                        {
                            "text":  "heron/bird",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100642,
        "question":  "The welcome mat at the Tooth Fairy's house might have a picture of what on it?",
        "answers":  [
                        {
                            "text":  "tooth",
                            "points":  84
                        },
                        {
                            "text":  "money",
                            "points":  5
                        },
                        {
                            "text":  "a fairy",
                            "points":  3
                        },
                        {
                            "text":  "toothbrush",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100643,
        "question":  "What cereal brand mascot would win in a bar fight?",
        "answers":  [
                        {
                            "text":  "tony the tiger",
                            "points":  83
                        },
                        {
                            "text":  "cap'n crunch",
                            "points":  8
                        },
                        {
                            "text":  "count chocula",
                            "points":  2
                        },
                        {
                            "text":  "toucan sam",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100644,
        "question":  "Tell me something people know about Sylvester Stallone.",
        "answers":  [
                        {
                            "text":  "famous actor/rocky",
                            "points":  81
                        },
                        {
                            "text":  "strong/boxer",
                            "points":  9
                        },
                        {
                            "text":  "slurs speech",
                            "points":  3
                        },
                        {
                            "text":  "his fam/daughters",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100645,
        "question":  "Tell me a place you sit on a bench.",
        "answers":  [
                        {
                            "text":  "park",
                            "points":  78
                        },
                        {
                            "text":  "sporting event",
                            "points":  7
                        },
                        {
                            "text":  "beach",
                            "points":  6
                        },
                        {
                            "text":  "bus stop",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100646,
        "question":  "If someone pretended to be a doctor on a dating site, name a prop they might show up to a date with.",
        "answers":  [
                        {
                            "text":  "stethoscope",
                            "points":  77
                        },
                        {
                            "text":  "white coat/scrubs",
                            "points":  13
                        },
                        {
                            "text":  "nurse",
                            "points":  3
                        },
                        {
                            "text":  "pager",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100647,
        "question":  "Name something you might want within reach when you're on the toilet.",
        "answers":  [
                        {
                            "text":  "toilet paper",
                            "points":  76
                        },
                        {
                            "text":  "mag/newspaper",
                            "points":  9
                        },
                        {
                            "text":  "phone",
                            "points":  8
                        },
                        {
                            "text":  "air freshener",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100648,
        "question":  "Tell me America's most popular beer.",
        "answers":  [
                        {
                            "text":  "bud/light",
                            "points":  75
                        },
                        {
                            "text":  "miller/lite",
                            "points":  11
                        },
                        {
                            "text":  "coors",
                            "points":  5
                        },
                        {
                            "text":  "heineken",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100649,
        "question":  "Name something that comes in nuggets.",
        "answers":  [
                        {
                            "text":  "chicken",
                            "points":  73
                        },
                        {
                            "text":  "gold",
                            "points":  17
                        },
                        {
                            "text":  "hershey's nuggets",
                            "points":  3
                        },
                        {
                            "text":  "fish",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100650,
        "question":  "Name a reason someone tells you not to move.",
        "answers":  [
                        {
                            "text":  "bug/animal",
                            "points":  72
                        },
                        {
                            "text":  "being robbed",
                            "points":  14
                        },
                        {
                            "text":  "they'll miss you!",
                            "points":  6
                        },
                        {
                            "text":  "taking photo",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100651,
        "question":  "You might tell someone to get a what?",
        "answers":  [
                        {
                            "text":  "life",
                            "points":  71
                        },
                        {
                            "text":  "job",
                            "points":  17
                        },
                        {
                            "text":  "clue",
                            "points":  4
                        },
                        {
                            "text":  "room",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100652,
        "question":  "Name a place you go where they ask you your age.",
        "answers":  [
                        {
                            "text":  "bar/club",
                            "points":  70
                        },
                        {
                            "text":  "doctor/hospital",
                            "points":  12
                        },
                        {
                            "text":  "liquor store",
                            "points":  11
                        },
                        {
                            "text":  "dispensary",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100653,
        "question":  "You really shouldn't run while you're holding what?",
        "answers":  [
                        {
                            "text":  "scissors",
                            "points":  56
                        },
                        {
                            "text":  "a knife",
                            "points":  20
                        },
                        {
                            "text":  "drinks",
                            "points":  16
                        },
                        {
                            "text":  "a baby",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100654,
        "question":  "Name someone who might tell you to strip down to your underwear.",
        "answers":  [
                        {
                            "text":  "doctor/nurse",
                            "points":  56
                        },
                        {
                            "text":  "police",
                            "points":  19
                        },
                        {
                            "text":  "spouse/mate",
                            "points":  17
                        },
                        {
                            "text":  "tsa agent",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100655,
        "question":  "Name something you might accidentally hit while learning how to parallel park.",
        "answers":  [
                        {
                            "text":  "curb",
                            "points":  53
                        },
                        {
                            "text":  "another car",
                            "points":  36
                        },
                        {
                            "text":  "practice cone",
                            "points":  4
                        },
                        {
                            "text":  "person",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100656,
        "question":  "A woman might call her husband a big softy because his what is soft?",
        "answers":  [
                        {
                            "text":  "heart",
                            "points":  53
                        },
                        {
                            "text":  "tummy",
                            "points":  31
                        },
                        {
                            "text":  "\"noodle\"",
                            "points":  8
                        },
                        {
                            "text":  "head/hair",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100657,
        "question":  "Before you have a baby, you might practice parenting on what?",
        "answers":  [
                        {
                            "text":  "pet/dog",
                            "points":  51
                        },
                        {
                            "text":  "a doll",
                            "points":  30
                        },
                        {
                            "text":  "other kids/niece",
                            "points":  11
                        },
                        {
                            "text":  "an egg",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100658,
        "question":  "Couples fight over control of what in their house?",
        "answers":  [
                        {
                            "text":  "tv remote",
                            "points":  51
                        },
                        {
                            "text":  "$/spending",
                            "points":  30
                        },
                        {
                            "text":  "thermostat",
                            "points":  10
                        },
                        {
                            "text":  "bathroom/toilet seat",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100659,
        "question":  "Tell me a country that starts with the letter T.",
        "answers":  [
                        {
                            "text":  "turkey",
                            "points":  39
                        },
                        {
                            "text":  "tanzania",
                            "points":  26
                        },
                        {
                            "text":  "thailand",
                            "points":  22
                        },
                        {
                            "text":  "taiwan",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  100660,
        "question":  "Name a living celebrity whose first name starts with the letter O.",
        "answers":  [
                        {
                            "text":  "oprah winfrey",
                            "points":  83
                        },
                        {
                            "text":  "omar epps",
                            "points":  4
                        },
                        {
                            "text":  "orlando bloom",
                            "points":  4
                        },
                        {
                            "text":  "owen wilson",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100661,
        "question":  "Give me a way you can shorten the name Elizabeth.",
        "answers":  [
                        {
                            "text":  "liz/lizzie",
                            "points":  77
                        },
                        {
                            "text":  "beth",
                            "points":  12
                        },
                        {
                            "text":  "eliza",
                            "points":  3
                        },
                        {
                            "text":  "ellie",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100662,
        "question":  "Name a public place where it's appropriate to yell.",
        "answers":  [
                        {
                            "text":  "sporting event",
                            "points":  76
                        },
                        {
                            "text":  "theme park/ride",
                            "points":  9
                        },
                        {
                            "text":  "mountains",
                            "points":  6
                        },
                        {
                            "text":  "concert",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100663,
        "question":  "Name any brand of laundry detergent.",
        "answers":  [
                        {
                            "text":  "tide",
                            "points":  75
                        },
                        {
                            "text":  "gain",
                            "points":  12
                        },
                        {
                            "text":  "all",
                            "points":  5
                        },
                        {
                            "text":  "purex",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100664,
        "question":  "Name something you'd have to change if you were in the Witness Protection Program.",
        "answers":  [
                        {
                            "text":  "name/identity",
                            "points":  74
                        },
                        {
                            "text":  "my hair",
                            "points":  10
                        },
                        {
                            "text":  "face/plastic surg.",
                            "points":  5
                        },
                        {
                            "text":  "address",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100665,
        "question":  "Name an animal in the jungle that looks at a safari group like they're an all-you-can-eat buffet.",
        "answers":  [
                        {
                            "text":  "lion",
                            "points":  68
                        },
                        {
                            "text":  "tiger",
                            "points":  18
                        },
                        {
                            "text":  "hyena",
                            "points":  4
                        },
                        {
                            "text":  "leopard/panther",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100666,
        "question":  "Name a place you'd be surprised to see a nun hanging out.",
        "answers":  [
                        {
                            "text":  "bar/club",
                            "points":  58
                        },
                        {
                            "text":  "strip joint",
                            "points":  31
                        },
                        {
                            "text":  "casino/vegas",
                            "points":  3
                        },
                        {
                            "text":  "the beach",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100667,
        "question":  "Name a sport where there's a whole lot of swinging going on.",
        "answers":  [
                        {
                            "text":  "baseball",
                            "points":  58
                        },
                        {
                            "text":  "golf",
                            "points":  25
                        },
                        {
                            "text":  "gymnastics/acrobatics",
                            "points":  6
                        },
                        {
                            "text":  "boxing",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100668,
        "question":  "If you lived next to a farm, name a specific noise you might complain about.",
        "answers":  [
                        {
                            "text":  "roosters/hens",
                            "points":  56
                        },
                        {
                            "text":  "cows mooing",
                            "points":  18
                        },
                        {
                            "text":  "tractor engine",
                            "points":  12
                        },
                        {
                            "text":  "pigs oinking",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  100669,
        "question":  "Which of the Seven Dwarfs would give the worst TED Talk?",
        "answers":  [
                        {
                            "text":  "sleepy",
                            "points":  51
                        },
                        {
                            "text":  "dopey",
                            "points":  23
                        },
                        {
                            "text":  "grumpy",
                            "points":  16
                        },
                        {
                            "text":  "sneezy",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100670,
        "question":  "Name the most dangerous piece of workout equipment to use if you're tipsy.",
        "answers":  [
                        {
                            "text":  "weights/bench press",
                            "points":  48
                        },
                        {
                            "text":  "treadmill",
                            "points":  37
                        },
                        {
                            "text":  "elliptical",
                            "points":  5
                        },
                        {
                            "text":  "stairmaster",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100671,
        "question":  "What playground equipment would be voted most popular amongst toddlers?",
        "answers":  [
                        {
                            "text":  "swing",
                            "points":  47
                        },
                        {
                            "text":  "slide",
                            "points":  37
                        },
                        {
                            "text":  "sandbox",
                            "points":  5
                        },
                        {
                            "text":  "seesaw",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100672,
        "question":  "Name the first thing you check out when you enter a hotel room.",
        "answers":  [
                        {
                            "text":  "bed/sheets",
                            "points":  45
                        },
                        {
                            "text":  "bathroom",
                            "points":  39
                        },
                        {
                            "text":  "thermostat",
                            "points":  5
                        },
                        {
                            "text":  "the view",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100673,
        "question":  "Fill in the blank: If your ______ is hung crookedly, it will drive a perfectionist crazy.",
        "answers":  [
                        {
                            "text":  "picture/painting",
                            "points":  80
                        },
                        {
                            "text":  "mirror",
                            "points":  7
                        },
                        {
                            "text":  "tie",
                            "points":  3
                        },
                        {
                            "text":  "\"manhood\"",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100674,
        "question":  "Name a country that always does well at the Olympics.",
        "answers":  [
                        {
                            "text":  "usa",
                            "points":  77
                        },
                        {
                            "text":  "china",
                            "points":  10
                        },
                        {
                            "text":  "germany",
                            "points":  3
                        },
                        {
                            "text":  "russia",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100675,
        "question":  "Fill in the blank: Aliens from other planets might have bigger ______s than we do.",
        "answers":  [
                        {
                            "text":  "brains/heads",
                            "points":  74
                        },
                        {
                            "text":  "eyes",
                            "points":  7
                        },
                        {
                            "text":  "spaceships",
                            "points":  6
                        },
                        {
                            "text":  "hands/fingers",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  100676,
        "question":  "Name a seafood appetizer.",
        "answers":  [
                        {
                            "text":  "shrimp",
                            "points":  70
                        },
                        {
                            "text":  "calamari/squid",
                            "points":  10
                        },
                        {
                            "text":  "crab/crab cakes",
                            "points":  10
                        },
                        {
                            "text":  "clams/chowder",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100677,
        "question":  "Name a TV show where you see a judge being too hard on someone.",
        "answers":  [
                        {
                            "text":  "judge judy",
                            "points":  70
                        },
                        {
                            "text":  "the voice",
                            "points":  9
                        },
                        {
                            "text":  "american idol",
                            "points":  8
                        },
                        {
                            "text":  "america's got talent",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  100678,
        "question":  "Tell me something that starts with the letter P that you order in an Italian restaurant.",
        "answers":  [
                        {
                            "text":  "penne/pasta",
                            "points":  66
                        },
                        {
                            "text":  "pizza",
                            "points":  23
                        },
                        {
                            "text":  "provolone",
                            "points":  2
                        },
                        {
                            "text":  "parmesan",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100679,
        "question":  "Name something a parent asks their kid to do that sets off a tantrum.",
        "answers":  [
                        {
                            "text":  "clean/laundry",
                            "points":  62
                        },
                        {
                            "text":  "go to bed",
                            "points":  22
                        },
                        {
                            "text":  "brush their teeth",
                            "points":  5
                        },
                        {
                            "text":  "behave",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100680,
        "question":  "Name something that has wax in it.",
        "answers":  [
                        {
                            "text":  "candle",
                            "points":  58
                        },
                        {
                            "text":  "ear",
                            "points":  28
                        },
                        {
                            "text":  "beehive/honey",
                            "points":  4
                        },
                        {
                            "text":  "turtle wax",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100681,
        "question":  "We asked 100 husbands... What's a two-word phrase that will end an argument with your spouse?",
        "answers":  [
                        {
                            "text":  "you're right",
                            "points":  52
                        },
                        {
                            "text":  "i'm sorry",
                            "points":  37
                        },
                        {
                            "text":  "shut up",
                            "points":  2
                        },
                        {
                            "text":  "i agree",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100682,
        "question":  "Name a reference book you don't need anymore because there's Google.",
        "answers":  [
                        {
                            "text":  "encyclopedia",
                            "points":  41
                        },
                        {
                            "text":  "dictionary",
                            "points":  33
                        },
                        {
                            "text":  "phone book",
                            "points":  13
                        },
                        {
                            "text":  "thesaurus",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  100683,
        "question":  "Name something for which Kentucky is famous.",
        "answers":  [
                        {
                            "text":  "derby/horses",
                            "points":  41
                        },
                        {
                            "text":  "fried chicken/kfc",
                            "points":  25
                        },
                        {
                            "text":  "bourbon whiskey",
                            "points":  23
                        },
                        {
                            "text":  "bluegrass",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100684,
        "question":  "We asked 100 parents... Tell me something your kids know more about than you.",
        "answers":  [
                        {
                            "text":  "tech/internet",
                            "points":  82
                        },
                        {
                            "text":  "math/algebra",
                            "points":  5
                        },
                        {
                            "text":  "celebs",
                            "points":  3
                        },
                        {
                            "text":  "slang",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  100685,
        "question":  "Name a special event people dress up for.",
        "answers":  [
                        {
                            "text":  "wedding",
                            "points":  82
                        },
                        {
                            "text":  "halloween",
                            "points":  4
                        },
                        {
                            "text":  "funeral",
                            "points":  3
                        },
                        {
                            "text":  "prom",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100686,
        "question":  "Name a place every kid dreams of going.",
        "answers":  [
                        {
                            "text":  "theme park/disney",
                            "points":  81
                        },
                        {
                            "text":  "space/the moon",
                            "points":  5
                        },
                        {
                            "text":  "circus",
                            "points":  3
                        },
                        {
                            "text":  "school/college",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100687,
        "question":  "Name something a person driving alone might use to get away with driving in the carpool lane.",
        "answers":  [
                        {
                            "text":  "mannequin/doll",
                            "points":  81
                        },
                        {
                            "text":  "tall dog",
                            "points":  4
                        },
                        {
                            "text":  "stuffed animal",
                            "points":  4
                        },
                        {
                            "text":  "an \"emergency\"",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100688,
        "question":  "Fill in the blank: ______ eagle.",
        "answers":  [
                        {
                            "text":  "bald eagle",
                            "points":  79
                        },
                        {
                            "text":  "american eagle",
                            "points":  7
                        },
                        {
                            "text":  "golden eagle",
                            "points":  3
                        },
                        {
                            "text":  "war eagle",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100689,
        "question":  "What's the hardest thing to do with your non-dominant hand?",
        "answers":  [
                        {
                            "text":  "write/signature",
                            "points":  78
                        },
                        {
                            "text":  "throw ball/sports",
                            "points":  6
                        },
                        {
                            "text":  "eat/cut food",
                            "points":  5
                        },
                        {
                            "text":  "comb hair",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100690,
        "question":  "Swimming with dolphins is fun. Swimming with what sea creature is a bad idea?",
        "answers":  [
                        {
                            "text":  "shark",
                            "points":  75
                        },
                        {
                            "text":  "jellyfish",
                            "points":  11
                        },
                        {
                            "text":  "octopus",
                            "points":  3
                        },
                        {
                            "text":  "saltwater croc/gator",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100691,
        "question":  "Fill in the blank: I'm falling asleep -- this ______ is so boring.",
        "answers":  [
                        {
                            "text":  "movie/tv show",
                            "points":  73
                        },
                        {
                            "text":  "job/meeting",
                            "points":  11
                        },
                        {
                            "text":  "book",
                            "points":  5
                        },
                        {
                            "text":  "church sermon",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100692,
        "question":  "Name something hard to do with your eyes open.",
        "answers":  [
                        {
                            "text":  "sleep",
                            "points":  71
                        },
                        {
                            "text":  "sneeze",
                            "points":  13
                        },
                        {
                            "text":  "blink",
                            "points":  5
                        },
                        {
                            "text":  "swim",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100693,
        "question":  "Past or present, give me the first name of a judge from \"American Idol.\"",
        "answers":  [
                        {
                            "text":  "simon",
                            "points":  66
                        },
                        {
                            "text":  "paula",
                            "points":  16
                        },
                        {
                            "text":  "katy",
                            "points":  5
                        },
                        {
                            "text":  "luke",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100694,
        "question":  "Name something that a wimp might need to hold onto while getting a tattoo.",
        "answers":  [
                        {
                            "text":  "someone else/hand",
                            "points":  62
                        },
                        {
                            "text":  "teddy bear",
                            "points":  15
                        },
                        {
                            "text":  "chair/armrest",
                            "points":  10
                        },
                        {
                            "text":  "stress ball",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100695,
        "question":  "We asked 100 married women... Give me a B word or phrase you'd use to describe your husband's belly.",
        "answers":  [
                        {
                            "text":  "big",
                            "points":  55
                        },
                        {
                            "text":  "bloated",
                            "points":  18
                        },
                        {
                            "text":  "beer belly",
                            "points":  14
                        },
                        {
                            "text":  "buff",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100696,
        "question":  "Name a procedure a witch might have done to make her more beautiful.",
        "answers":  [
                        {
                            "text":  "nose job",
                            "points":  55
                        },
                        {
                            "text":  "facelift",
                            "points":  18
                        },
                        {
                            "text":  "wart/mole removal",
                            "points":  12
                        },
                        {
                            "text":  "haircut/blowout",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  100697,
        "question":  "Name an animal that, if it talked, would say, \"Why yes, I actually do live in a barn.\"",
        "answers":  [
                        {
                            "text":  "cow",
                            "points":  42
                        },
                        {
                            "text":  "horse",
                            "points":  41
                        },
                        {
                            "text":  "pig",
                            "points":  5
                        },
                        {
                            "text":  "barn owl",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100698,
        "question":  "Fill in the blank: Sometimes I just want to ______ all day.",
        "answers":  [
                        {
                            "text":  "sleep/be lazy",
                            "points":  77
                        },
                        {
                            "text":  "read",
                            "points":  7
                        },
                        {
                            "text":  "have sex",
                            "points":  4
                        },
                        {
                            "text":  "bang on the drum",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100699,
        "question":  "Name something you put on every night.",
        "answers":  [
                        {
                            "text":  "pj's/bed clothes",
                            "points":  74
                        },
                        {
                            "text":  "lotion/cream",
                            "points":  11
                        },
                        {
                            "text":  "lights",
                            "points":  3
                        },
                        {
                            "text":  "tv",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100700,
        "question":  "Name a creature whose date might tell them \"My, what a big horn you have.\"",
        "answers":  [
                        {
                            "text":  "rhino",
                            "points":  66
                        },
                        {
                            "text":  "unicorn",
                            "points":  12
                        },
                        {
                            "text":  "bull",
                            "points":  8
                        },
                        {
                            "text":  "ram",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100701,
        "question":  "Name a sport where the spectators stay really quiet.",
        "answers":  [
                        {
                            "text":  "golf",
                            "points":  56
                        },
                        {
                            "text":  "tennis",
                            "points":  28
                        },
                        {
                            "text":  "chess",
                            "points":  4
                        },
                        {
                            "text":  "figure skating",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100702,
        "question":  "Name someone Winnie the Pooh probably has on speed dial.",
        "answers":  [
                        {
                            "text":  "piglet",
                            "points":  33
                        },
                        {
                            "text":  "christopher robin",
                            "points":  30
                        },
                        {
                            "text":  "tigger",
                            "points":  22
                        },
                        {
                            "text":  "honey dealer",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  100703,
        "question":  "Name an occupation where you might wear an apron.",
        "answers":  [
                        {
                            "text":  "chef/baker",
                            "points":  78
                        },
                        {
                            "text":  "waiter",
                            "points":  5
                        },
                        {
                            "text":  "retail/home depot",
                            "points":  4
                        },
                        {
                            "text":  "artist",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100704,
        "question":  "If a man's nickname is \"The Hammer,\" what occupation might he work in?",
        "answers":  [
                        {
                            "text":  "construction/carpenter",
                            "points":  77
                        },
                        {
                            "text":  "handyman",
                            "points":  5
                        },
                        {
                            "text":  "boxer/wrestler",
                            "points":  5
                        },
                        {
                            "text":  "blacksmith",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100705,
        "question":  "Name a document you might frame and put on the wall.",
        "answers":  [
                        {
                            "text":  "diploma",
                            "points":  74
                        },
                        {
                            "text":  "marriage license",
                            "points":  9
                        },
                        {
                            "text":  "the constitution",
                            "points":  4
                        },
                        {
                            "text":  "divorce papers",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100706,
        "question":  "Name something that might be missing a button.",
        "answers":  [
                        {
                            "text":  "shirt",
                            "points":  71
                        },
                        {
                            "text":  "coat/jacket",
                            "points":  7
                        },
                        {
                            "text":  "remote",
                            "points":  6
                        },
                        {
                            "text":  "pants",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  100707,
        "question":  "Tell me a non-living thing with a horn.",
        "answers":  [
                        {
                            "text":  "car/truck",
                            "points":  58
                        },
                        {
                            "text":  "unicorn",
                            "points":  25
                        },
                        {
                            "text":  "dinosaur",
                            "points":  4
                        },
                        {
                            "text":  "horn of africa",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100708,
        "question":  "We asked 100 men... Which color of nail polish looks the best on women?",
        "answers":  [
                        {
                            "text":  "red/candy apple",
                            "points":  56
                        },
                        {
                            "text":  "pink",
                            "points":  23
                        },
                        {
                            "text":  "blue",
                            "points":  6
                        },
                        {
                            "text":  "clear/none",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100709,
        "question":  "Name a bad job for someone who counts very slowly.",
        "answers":  [
                        {
                            "text":  "banker/teller",
                            "points":  52
                        },
                        {
                            "text":  "cashier",
                            "points":  19
                        },
                        {
                            "text":  "accountant",
                            "points":  16
                        },
                        {
                            "text":  "inventory clerk",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100710,
        "question":  "If an astronaut got stuck in space for months, name something they would wish they packed more of.",
        "answers":  [
                        {
                            "text":  "food/candy",
                            "points":  49
                        },
                        {
                            "text":  "undies/outfits",
                            "points":  23
                        },
                        {
                            "text":  "books",
                            "points":  13
                        },
                        {
                            "text":  "toilet paper",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100711,
        "question":  "Name a U.S. city that's not part of the South where people are known to have an accent.",
        "answers":  [
                        {
                            "text":  "boston",
                            "points":  47
                        },
                        {
                            "text":  "new york",
                            "points":  37
                        },
                        {
                            "text":  "l.a./the valley",
                            "points":  3
                        },
                        {
                            "text":  "chicago",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100712,
        "question":  "Name something that signals the start of the fall season.",
        "answers":  [
                        {
                            "text":  "leaves change/fall",
                            "points":  47
                        },
                        {
                            "text":  "weather",
                            "points":  23
                        },
                        {
                            "text":  "pumpkin/spice",
                            "points":  17
                        },
                        {
                            "text":  "football",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100713,
        "question":  "Besides a bird, tell me a creature that can fly.",
        "answers":  [
                        {
                            "text":  "bug/fly",
                            "points":  35
                        },
                        {
                            "text":  "bat",
                            "points":  31
                        },
                        {
                            "text":  "flying squirrel",
                            "points":  20
                        },
                        {
                            "text":  "pterodactyl",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100714,
        "question":  "Name a specific exercise you do in the gym that might cause your pants to rip.",
        "answers":  [
                        {
                            "text":  "squats",
                            "points":  80
                        },
                        {
                            "text":  "lunges",
                            "points":  3
                        },
                        {
                            "text":  "the splits",
                            "points":  3
                        },
                        {
                            "text":  "running/treadmill",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100715,
        "question":  "Name something that might be all over your sheets after having breakfast in bed.",
        "answers":  [
                        {
                            "text":  "crumbs",
                            "points":  77
                        },
                        {
                            "text":  "eggs",
                            "points":  6
                        },
                        {
                            "text":  "syrup",
                            "points":  3
                        },
                        {
                            "text":  "jam/jelly",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100716,
        "question":  "Name a topic that's guaranteed to start a fight at a family dinner.",
        "answers":  [
                        {
                            "text":  "politics",
                            "points":  77
                        },
                        {
                            "text":  "money",
                            "points":  5
                        },
                        {
                            "text":  "religion",
                            "points":  4
                        },
                        {
                            "text":  "food choice/cooking",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100717,
        "question":  "Name something teenagers are better at doing than their parents.",
        "answers":  [
                        {
                            "text":  "tech/text/gaming",
                            "points":  69
                        },
                        {
                            "text":  "sports/exercise",
                            "points":  11
                        },
                        {
                            "text":  "whine/blabbing",
                            "points":  5
                        },
                        {
                            "text":  "dancing",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100718,
        "question":  "Name something that you buy rolls of.",
        "answers":  [
                        {
                            "text":  "toilet paper",
                            "points":  63
                        },
                        {
                            "text":  "paper towels",
                            "points":  17
                        },
                        {
                            "text":  "stamps",
                            "points":  5
                        },
                        {
                            "text":  "tape",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100719,
        "question":  "Fill in the blank: Game of ______.",
        "answers":  [
                        {
                            "text":  "game of thrones",
                            "points":  57
                        },
                        {
                            "text":  "game of cards",
                            "points":  12
                        },
                        {
                            "text":  "game of chance",
                            "points":  12
                        },
                        {
                            "text":  "game of life",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  100720,
        "question":  "Name an app on your phone you'd never open in front of your parents.",
        "answers":  [
                        {
                            "text":  "dating app/grindr",
                            "points":  51
                        },
                        {
                            "text":  "tiktok",
                            "points":  20
                        },
                        {
                            "text":  "insta/facebook",
                            "points":  10
                        },
                        {
                            "text":  "bank app",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  100721,
        "question":  "What might a criminal known as \"The Plumber\" leave at the scene of the crime?",
        "answers":  [
                        {
                            "text":  "plunger",
                            "points":  38
                        },
                        {
                            "text":  "wrench",
                            "points":  33
                        },
                        {
                            "text":  "pipe",
                            "points":  11
                        },
                        {
                            "text":  "water/dripping",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  100722,
        "question":  "Tell me the worst thing to get in your hair.",
        "answers":  [
                        {
                            "text":  "gum",
                            "points":  75
                        },
                        {
                            "text":  "bugs/lice",
                            "points":  7
                        },
                        {
                            "text":  "toothpaste",
                            "points":  3
                        },
                        {
                            "text":  "tree sap",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100723,
        "question":  "Name a company known for its chocolate.",
        "answers":  [
                        {
                            "text":  "hershey's",
                            "points":  65
                        },
                        {
                            "text":  "godiva",
                            "points":  11
                        },
                        {
                            "text":  "lindt",
                            "points":  6
                        },
                        {
                            "text":  "nestle",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  100724,
        "question":  "Name a country that has a reputation for having rude people.",
        "answers":  [
                        {
                            "text":  "france",
                            "points":  60
                        },
                        {
                            "text":  "usa",
                            "points":  17
                        },
                        {
                            "text":  "russia",
                            "points":  7
                        },
                        {
                            "text":  "germany",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100725,
        "question":  "Fill in the blank: Count ______.",
        "answers":  [
                        {
                            "text":  "count dracula",
                            "points":  59
                        },
                        {
                            "text":  "count chocula",
                            "points":  21
                        },
                        {
                            "text":  "count money",
                            "points":  4
                        },
                        {
                            "text":  "count sheep",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100726,
        "question":  "Name something a child might expect to get from their older sibling.",
        "answers":  [
                        {
                            "text":  "clothes",
                            "points":  58
                        },
                        {
                            "text":  "picked on/hit",
                            "points":  19
                        },
                        {
                            "text":  "toys",
                            "points":  6
                        },
                        {
                            "text":  "wisdom/advice",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100727,
        "question":  "Bad news -- a truck spilled its load in front of you. Good news -- it was carrying what?",
        "answers":  [
                        {
                            "text":  "money",
                            "points":  56
                        },
                        {
                            "text":  "food/candy",
                            "points":  19
                        },
                        {
                            "text":  "beer/booze",
                            "points":  9
                        },
                        {
                            "text":  "feathers, thankfully",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100728,
        "question":  "If there were a kids' court, who might a 10-year-old boy sue?",
        "answers":  [
                        {
                            "text":  "parents",
                            "points":  56
                        },
                        {
                            "text":  "teacher",
                            "points":  14
                        },
                        {
                            "text":  "sibling",
                            "points":  13
                        },
                        {
                            "text":  "bully",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100729,
        "question":  "Fill in the blank: ______ hound.",
        "answers":  [
                        {
                            "text":  "bloodhound",
                            "points":  55
                        },
                        {
                            "text":  "greyhound",
                            "points":  18
                        },
                        {
                            "text":  "basset hound",
                            "points":  10
                        },
                        {
                            "text":  "foxhound",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100730,
        "question":  "Name something you don't miss about being a teenager.",
        "answers":  [
                        {
                            "text":  "zits",
                            "points":  52
                        },
                        {
                            "text":  "rules/curfew",
                            "points":  19
                        },
                        {
                            "text":  "school/homework",
                            "points":  14
                        },
                        {
                            "text":  "mood swings",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100731,
        "question":  "We asked 100 single women... If I ever get married, I'm going to want my own what?",
        "answers":  [
                        {
                            "text":  "$$$/bank account",
                            "points":  40
                        },
                        {
                            "text":  "bathroom",
                            "points":  27
                        },
                        {
                            "text":  "bedroom",
                            "points":  12
                        },
                        {
                            "text":  "house",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  100732,
        "question":  "In my book, it's not a real burrito unless it has what in it?",
        "answers":  [
                        {
                            "text":  "beans",
                            "points":  32
                        },
                        {
                            "text":  "meat",
                            "points":  27
                        },
                        {
                            "text":  "cheese",
                            "points":  22
                        },
                        {
                            "text":  "guacamole",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  100733,
        "question":  "What do you do when you eat something that's too spicy?",
        "answers":  [
                        {
                            "text":  "drink something",
                            "points":  73
                        },
                        {
                            "text":  "sweat",
                            "points":  5
                        },
                        {
                            "text":  "gag/spit out",
                            "points":  5
                        },
                        {
                            "text":  "eat bread",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100734,
        "question":  "Fill in the blank: Bottom of the ______.",
        "answers":  [
                        {
                            "text":  "the barrel",
                            "points":  72
                        },
                        {
                            "text":  "the sea/ocean",
                            "points":  6
                        },
                        {
                            "text":  "the bottle",
                            "points":  5
                        },
                        {
                            "text":  "the 9th",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100735,
        "question":  "Willy Wonka just got busted for making what in the factory instead of chocolate?",
        "answers":  [
                        {
                            "text":  "drugs/pot brownies",
                            "points":  69
                        },
                        {
                            "text":  "booze",
                            "points":  8
                        },
                        {
                            "text":  "random candies",
                            "points":  6
                        },
                        {
                            "text":  "oompa loompa babies",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100736,
        "question":  "If cars were replaced by animals, what animal would you ride to work?",
        "answers":  [
                        {
                            "text":  "horse/pony",
                            "points":  65
                        },
                        {
                            "text":  "cheetah",
                            "points":  8
                        },
                        {
                            "text":  "elephant",
                            "points":  8
                        },
                        {
                            "text":  "camel",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  100737,
        "question":  "Fill in the blank: ______ beauty.",
        "answers":  [
                        {
                            "text":  "black beauty",
                            "points":  56
                        },
                        {
                            "text":  "sleeping beauty",
                            "points":  24
                        },
                        {
                            "text":  "inner beauty",
                            "points":  4
                        },
                        {
                            "text":  "natural beauty",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100738,
        "question":  "We asked 100 women... It would be creepy to date a man who looks like your who?",
        "answers":  [
                        {
                            "text":  "dad",
                            "points":  51
                        },
                        {
                            "text":  "brother",
                            "points":  18
                        },
                        {
                            "text":  "mother",
                            "points":  10
                        },
                        {
                            "text":  "ex",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  100739,
        "question":  "Name a contact sport you'd like to play with your number one enemy.",
        "answers":  [
                        {
                            "text":  "football",
                            "points":  44
                        },
                        {
                            "text":  "boxing",
                            "points":  31
                        },
                        {
                            "text":  "rugby",
                            "points":  8
                        },
                        {
                            "text":  "mma",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100740,
        "question":  "We asked 100 married people... What do you wear to bed so your spouse knows you're not in the mood?",
        "answers":  [
                        {
                            "text":  "flannel pj's/gown",
                            "points":  43
                        },
                        {
                            "text":  "sweats",
                            "points":  32
                        },
                        {
                            "text":  "robe",
                            "points":  9
                        },
                        {
                            "text":  "undies/long johns",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100741,
        "question":  "Name an occupation in which you'd have to worry about leaks.",
        "answers":  [
                        {
                            "text":  "plumber",
                            "points":  72
                        },
                        {
                            "text":  "roofer/builder",
                            "points":  7
                        },
                        {
                            "text":  "spy",
                            "points":  4
                        },
                        {
                            "text":  "landlord",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100742,
        "question":  "Name something you pump.",
        "answers":  [
                        {
                            "text":  "gasoline",
                            "points":  58
                        },
                        {
                            "text":  "iron/muscle",
                            "points":  14
                        },
                        {
                            "text":  "tire/tire pump",
                            "points":  9
                        },
                        {
                            "text":  "your fist",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100743,
        "question":  "Fill in the blank: Forest ______.",
        "answers":  [
                        {
                            "text":  "forrest gump",
                            "points":  57
                        },
                        {
                            "text":  "forest fire",
                            "points":  17
                        },
                        {
                            "text":  "forest green",
                            "points":  7
                        },
                        {
                            "text":  "forest ranger",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100744,
        "question":  "Name something people ride that requires good balance.",
        "answers":  [
                        {
                            "text":  "bike",
                            "points":  55
                        },
                        {
                            "text":  "skateboard",
                            "points":  18
                        },
                        {
                            "text":  "unicycle",
                            "points":  8
                        },
                        {
                            "text":  "horse",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100745,
        "question":  "Name a job that might require you to cut your hair.",
        "answers":  [
                        {
                            "text":  "military",
                            "points":  52
                        },
                        {
                            "text":  "food service/chef",
                            "points":  21
                        },
                        {
                            "text":  "police officer",
                            "points":  8
                        },
                        {
                            "text":  "model/actor",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100746,
        "question":  "It would be nuts to put a squirrel in your what?",
        "answers":  [
                        {
                            "text":  "house/bed",
                            "points":  51
                        },
                        {
                            "text":  "clothes/undies",
                            "points":  26
                        },
                        {
                            "text":  "car",
                            "points":  6
                        },
                        {
                            "text":  "food/casserole",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100747,
        "question":  "You should never ever tell someone what by text message?",
        "answers":  [
                        {
                            "text":  "it's over/don't love",
                            "points":  48
                        },
                        {
                            "text":  "someone died",
                            "points":  28
                        },
                        {
                            "text":  "you're fired",
                            "points":  6
                        },
                        {
                            "text":  "havin' a baby",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100748,
        "question":  "Fill in the blank: Adam might have asked God, \"Why is Eve's ______ bigger than mine?\"",
        "answers":  [
                        {
                            "text":  "chest",
                            "points":  46
                        },
                        {
                            "text":  "brain",
                            "points":  17
                        },
                        {
                            "text":  "butt",
                            "points":  13
                        },
                        {
                            "text":  "fig leaf",
                            "points":  10
                        }
                    ]
    },
    {
        "id":  100749,
        "question":  "Name the single best place for a romantic date.",
        "answers":  [
                        {
                            "text":  "restaurant",
                            "points":  38
                        },
                        {
                            "text":  "beach/bahamas",
                            "points":  27
                        },
                        {
                            "text":  "paris",
                            "points":  13
                        },
                        {
                            "text":  "city park",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  100750,
        "question":  "Name something Matt Damon and Ben Affleck have in common.",
        "answers":  [
                        {
                            "text":  "actors/filmmakers",
                            "points":  56
                        },
                        {
                            "text":  "massachusetts",
                            "points":  17
                        },
                        {
                            "text":  "friendship",
                            "points":  6
                        },
                        {
                            "text":  "good looks",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  100751,
        "question":  "There's a fire in the grocery store. The manager grabs what to put it out?",
        "answers":  [
                        {
                            "text":  "extinguisher",
                            "points":  48
                        },
                        {
                            "text":  "water bottles",
                            "points":  23
                        },
                        {
                            "text":  "milk jugs",
                            "points":  9
                        },
                        {
                            "text":  "flour",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100752,
        "question":  "Name a short celebrity who's big on talent.",
        "answers":  [
                        {
                            "text":  "danny devito",
                            "points":  47
                        },
                        {
                            "text":  "kevin hart",
                            "points":  26
                        },
                        {
                            "text":  "michael j. fox",
                            "points":  8
                        },
                        {
                            "text":  "tom cruise",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100753,
        "question":  "Name a medical TV show that some people trust more than their own doctor.",
        "answers":  [
                        {
                            "text":  "grey's anatomy",
                            "points":  31
                        },
                        {
                            "text":  "e.r.",
                            "points":  27
                        },
                        {
                            "text":  "house",
                            "points":  22
                        },
                        {
                            "text":  "chicago med",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100754,
        "question":  "Batman might be annoyed to see that Robin had a picture of which superhero on his bedroom wall?",
        "answers":  [
                        {
                            "text":  "superman",
                            "points":  55
                        },
                        {
                            "text":  "spider-man",
                            "points":  16
                        },
                        {
                            "text":  "wonder woman",
                            "points":  7
                        },
                        {
                            "text":  "catwoman",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  100755,
        "question":  "Name a type of movie that's better on a big movie theater screen.",
        "answers":  [
                        {
                            "text":  "action/superhero",
                            "points":  55
                        },
                        {
                            "text":  "science fiction",
                            "points":  15
                        },
                        {
                            "text":  "horror",
                            "points":  11
                        },
                        {
                            "text":  "wildlife/nature",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100756,
        "question":  "Name a place that has a lot of security cameras.",
        "answers":  [
                        {
                            "text":  "bank",
                            "points":  54
                        },
                        {
                            "text":  "mall/store",
                            "points":  18
                        },
                        {
                            "text":  "casino",
                            "points":  8
                        },
                        {
                            "text":  "prison",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100757,
        "question":  "Tell me a souvenir you might bring back from Hawaii.",
        "answers":  [
                        {
                            "text":  "lei/flowers",
                            "points":  53
                        },
                        {
                            "text":  "food/pineapple",
                            "points":  19
                        },
                        {
                            "text":  "shell",
                            "points":  8
                        },
                        {
                            "text":  "aloha shirt",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100758,
        "question":  "Name a government agency that's best known by its abbreviation.",
        "answers":  [
                        {
                            "text":  "fbi",
                            "points":  50
                        },
                        {
                            "text":  "irs",
                            "points":  24
                        },
                        {
                            "text":  "cia",
                            "points":  7
                        },
                        {
                            "text":  "fda",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  100759,
        "question":  "Name someone you should never lie to, but you have.",
        "answers":  [
                        {
                            "text":  "parent",
                            "points":  44
                        },
                        {
                            "text":  "bae",
                            "points":  26
                        },
                        {
                            "text":  "clergy",
                            "points":  9
                        },
                        {
                            "text":  "boss",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100760,
        "question":  "Name something kids open more than they close.",
        "answers":  [
                        {
                            "text":  "doors/cabinet doors",
                            "points":  42
                        },
                        {
                            "text":  "their mouths",
                            "points":  21
                        },
                        {
                            "text":  "the fridge",
                            "points":  17
                        },
                        {
                            "text":  "cereal boxes",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100761,
        "question":  "Name something in a limousine that you'd love to have in your car.",
        "answers":  [
                        {
                            "text":  "fridge/minibar",
                            "points":  36
                        },
                        {
                            "text":  "chauffeur",
                            "points":  31
                        },
                        {
                            "text":  "tv",
                            "points":  9
                        },
                        {
                            "text":  "divider",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  100762,
        "question":  "We asked 100 married people... What might you put in your spouse's face to wake them up in the morning?",
        "answers":  [
                        {
                            "text":  "coffee/breakfast",
                            "points":  33
                        },
                        {
                            "text":  "ice/water",
                            "points":  30
                        },
                        {
                            "text":  "pet",
                            "points":  13
                        },
                        {
                            "text":  "my face/kisses",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  100763,
        "question":  "If someone turns you upside down, name something that will fall out of your pockets.",
        "answers":  [
                        {
                            "text":  "wallet/money",
                            "points":  33
                        },
                        {
                            "text":  "phone",
                            "points":  26
                        },
                        {
                            "text":  "keys",
                            "points":  20
                        },
                        {
                            "text":  "lint",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100764,
        "question":  "Name an ingredient some people would say makes all food taste better.",
        "answers":  [
                        {
                            "text":  "salt",
                            "points":  61
                        },
                        {
                            "text":  "butter",
                            "points":  10
                        },
                        {
                            "text":  "garlic",
                            "points":  7
                        },
                        {
                            "text":  "sugar",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100765,
        "question":  "Name a city where it's easier to take the train than drive.",
        "answers":  [
                        {
                            "text":  "new york city",
                            "points":  60
                        },
                        {
                            "text":  "chicago",
                            "points":  11
                        },
                        {
                            "text":  "san francisco",
                            "points":  6
                        },
                        {
                            "text":  "london",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  100766,
        "question":  "Name a place a teacher tells a student to go.",
        "answers":  [
                        {
                            "text":  "principal's office",
                            "points":  63
                        },
                        {
                            "text":  "the corner",
                            "points":  8
                        },
                        {
                            "text":  "home",
                            "points":  6
                        },
                        {
                            "text":  "detention",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100767,
        "question":  "Tell me the last thing you did all night long.",
        "answers":  [
                        {
                            "text":  "slept/snored",
                            "points":  55
                        },
                        {
                            "text":  "tv/movie binge",
                            "points":  18
                        },
                        {
                            "text":  "studied for exam",
                            "points":  5
                        },
                        {
                            "text":  "danced",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100768,
        "question":  "Fill in the blank: ______ pole.",
        "answers":  [
                        {
                            "text":  "north",
                            "points":  48
                        },
                        {
                            "text":  "stripper/dance",
                            "points":  26
                        },
                        {
                            "text":  "fishing",
                            "points":  4
                        },
                        {
                            "text":  "south",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100769,
        "question":  "Name a job in a celebrity's entourage.",
        "answers":  [
                        {
                            "text":  "security",
                            "points":  48
                        },
                        {
                            "text":  "assistant",
                            "points":  21
                        },
                        {
                            "text":  "chauffeur",
                            "points":  8
                        },
                        {
                            "text":  "publicist/soc. media",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100770,
        "question":  "Everyone likes French kissing. But what other country has good kissers?",
        "answers":  [
                        {
                            "text":  "italy",
                            "points":  45
                        },
                        {
                            "text":  "america",
                            "points":  27
                        },
                        {
                            "text":  "spain",
                            "points":  6
                        },
                        {
                            "text":  "greece",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100771,
        "question":  "Name something a teen keeps by their window if they're going to sneak out at night.",
        "answers":  [
                        {
                            "text":  "flashlight",
                            "points":  33
                        },
                        {
                            "text":  "shoes/clothes/coat",
                            "points":  28
                        },
                        {
                            "text":  "ladder",
                            "points":  11
                        },
                        {
                            "text":  "rope",
                            "points":  10
                        }
                    ]
    },
    {
        "id":  100772,
        "question":  "You just stepped on the scale. You've gained ten pounds. What's the first thing you do?",
        "answers":  [
                        {
                            "text":  "cry/scream/cuss",
                            "points":  39
                        },
                        {
                            "text":  "diet/exercise",
                            "points":  32
                        },
                        {
                            "text":  "jump off",
                            "points":  5
                        },
                        {
                            "text":  "weigh myself again",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  100773,
        "question":  "When the sun goes down, what creature wakes up?",
        "answers":  [
                        {
                            "text":  "bat",
                            "points":  40
                        },
                        {
                            "text":  "owl",
                            "points":  18
                        },
                        {
                            "text":  "vampire",
                            "points":  15
                        },
                        {
                            "text":  "raccoon",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  100774,
        "question":  "Name something a college student might use as a dinner plate when they don't feel like washing dishes.",
        "answers":  [
                        {
                            "text":  "paper towel/napkin",
                            "points":  36
                        },
                        {
                            "text":  "paper plate",
                            "points":  19
                        },
                        {
                            "text":  "book/notebook",
                            "points":  14
                        },
                        {
                            "text":  "frisbee",
                            "points":  11
                        }
                    ]
    },
    {
        "id":  100775,
        "question":  "Name something you did when you told your spouse \"Don't get mad, but...\"",
        "answers":  [
                        {
                            "text":  "damaged car",
                            "points":  36
                        },
                        {
                            "text":  "spent/lost $$$",
                            "points":  31
                        },
                        {
                            "text":  "cheated",
                            "points":  7
                        },
                        {
                            "text":  "got a pet",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  100776,
        "question":  "Name something that the older it is, the more valuable it is.",
        "answers":  [
                        {
                            "text":  "alcohol/wine",
                            "points":  38
                        },
                        {
                            "text":  "coin/gold",
                            "points":  25
                        },
                        {
                            "text":  "art",
                            "points":  7
                        },
                        {
                            "text":  "human/knowledge",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  100777,
        "question":  "Only beautiful people end up on the cover of what past or present magazine?",
        "answers":  [
                        {
                            "text":  "people",
                            "points":  30
                        },
                        {
                            "text":  "vogue",
                            "points":  30
                        },
                        {
                            "text":  "glamour",
                            "points":  8
                        },
                        {
                            "text":  "playboy",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  100778,
        "question":  "We asked 100 women... If a man loves you, he should be willing to do what for you?",
        "answers":  [
                        {
                            "text":  "clean/the dishes",
                            "points":  29
                        },
                        {
                            "text":  "die",
                            "points":  25
                        },
                        {
                            "text":  "cook",
                            "points":  16
                        },
                        {
                            "text":  "marry you",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  100779,
        "question":  "Name something that gets dropped.",
        "answers":  [
                        {
                            "text":  "phone/a call",
                            "points":  40
                        },
                        {
                            "text":  "a ball/\"the ball\"",
                            "points":  21
                        },
                        {
                            "text":  "names",
                            "points":  7
                        },
                        {
                            "text":  "the mic",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  100780,
        "question":  "Rumor has it that if you kiss a vegetarian, their lips taste like what vegetable?",
        "answers":  [
                        {
                            "text":  "carrots",
                            "points":  23
                        },
                        {
                            "text":  "broccoli",
                            "points":  15
                        },
                        {
                            "text":  "tomatoes",
                            "points":  7
                        },
                        {
                            "text":  "lettuce",
                            "points":  6
                        }
                    ]
    }
];
